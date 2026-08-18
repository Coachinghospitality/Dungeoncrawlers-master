(() => {
  "use strict";

  const STORAGE_KEY = "dungeon_crawlers_dm_chronicle_v1";
  const CURRENT_KEY = "dungeon_crawlers_dm_current_location";
  const seed = window.DM_CAMPAIGN_SEED || { title: "Dungeon Crawlers", locations: [] };
  const clone = (value) => JSON.parse(JSON.stringify(value));
  let campaign = loadCampaign();
  let currentId = localStorage.getItem(CURRENT_KEY) || campaign.locations[0]?.id || "";
  let filter = "All";
  let editorDraft = null;
  let saveTimer;
  let toastTimer;

  const $ = (id) => document.getElementById(id);
  const current = () => campaign.locations.find((location) => location.id === currentId) || campaign.locations[0];

  function loadCampaign() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(seed);
    try {
      const saved = JSON.parse(raw);
      return saved?.locations?.length ? saved : clone(seed);
    } catch (error) {
      console.error(error);
      return clone(seed);
    }
  }

  function saveCampaign(message = "") {
    clearTimeout(saveTimer);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(campaign));
    localStorage.setItem(CURRENT_KEY, currentId);
    if (message) toast(message);
  }

  function queueSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveCampaign(), 250);
  }

  function toast(message) {
    clearTimeout(toastTimer);
    $("toast").textContent = message;
    $("toast").classList.add("show");
    toastTimer = setTimeout(() => $("toast").classList.remove("show"), 1800);
  }

  function initialize() {
    bindGlobalEvents();
    renderFilters();
    if (!currentId && campaign.locations.length) currentId = campaign.locations[0].id;
    renderAll();
  }

  function renderAll() {
    renderLibrary();
    renderLocation();
    populateRouteTargets();
  }

  function renderFilters() {
    const campaigns = ["All", ...new Set(campaign.locations.map((location) => location.campaign).filter(Boolean))];
    $("campaignFilters").innerHTML = campaigns.map((name) => `<button type="button" class="${name === filter ? "active" : ""}" data-filter="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("");
  }

  function renderLibrary() {
    const query = $("locationSearch").value.trim().toLowerCase();
    const matches = campaign.locations.filter((location) => {
      if (filter !== "All" && location.campaign !== filter) return false;
      if (!query) return true;
      const searchable = [location.name, location.campaign, location.story, location.dmNotes, ...location.enemies.map((enemy) => enemy.name)].join(" ").toLowerCase();
      return searchable.includes(query);
    });
    $("locationCount").textContent = `${campaign.locations.length} location${campaign.locations.length === 1 ? "" : "s"}`;
    $("locationList").innerHTML = matches.map((location) => `<button type="button" class="location-link ${location.id === currentId ? "active" : ""}" data-location="${escapeHtml(location.id)}"><span><strong>${escapeHtml(location.name)}</strong><span>${escapeHtml(location.campaign)}</span></span><i class="status-dot ${escapeHtml(location.status || "draft")}"></i></button>`).join("") || `<p class="empty">No locations match that search.</p>`;
  }

  function renderLocation() {
    const location = current();
    if (!location) return;
    currentId = location.id;
    $("locationCampaign").textContent = location.campaign || "Campaign";
    $("locationTitle").textContent = location.name;
    $("heroCampaign").textContent = location.campaign || "Campaign";
    $("heroTitle").textContent = location.name;
    $("heroSource").textContent = location.source ? `Source: ${location.source.workbook} · ${location.source.sheet}` : "Created in the DM Chronicle";
    $("locationStatus").value = location.status || "draft";
    $("storyText").textContent = location.story || "";
    $("dmNotesText").textContent = location.dmNotes || "";
    $("sessionNotes").value = location.sessionNotes || "";
    $("locationSummary").innerHTML = `<span>${location.enemies.length} enemies & NPCs</span><span>${location.discoveries.length} discoveries</span><span>${location.abilities.length} abilities</span><span>${location.exits.length} routes</span>`;
    renderEnemies(location);
    renderDiscoveries(location);
    renderAbilities(location);
    renderRoutes(location);
  }

  function renderEnemies(location) {
    const defeated = location.enemies.filter((enemy) => enemy.currentHealth <= 0 || enemy.status === "defeated").length;
    $("enemyProgress").textContent = location.enemies.length ? `${defeated} defeated · ${location.enemies.length} total` : "No encounter";
    $("enemyGrid").innerHTML = location.enemies.map((enemy) => {
      const hp = clamp(Number(enemy.currentHealth), 0, Number(enemy.maxHealth) || 1);
      const status = hp <= 0 ? "defeated" : (enemy.status || "ready");
      const percent = Math.round((hp / Math.max(1, Number(enemy.maxHealth))) * 100);
      return `<article class="enemy-card ${status === "defeated" ? "defeated" : ""}" data-enemy="${escapeHtml(enemy.id)}"><div class="enemy-head"><h3>${escapeHtml(enemy.name)}</h3><select class="enemy-status" aria-label="${escapeHtml(enemy.name)} status"><option value="ready" ${status === "ready" ? "selected" : ""}>Ready</option><option value="active" ${status === "active" ? "selected" : ""}>Active</option><option value="fled" ${status === "fled" ? "selected" : ""}>Fled</option><option value="defeated" ${status === "defeated" ? "selected" : ""}>Defeated</option></select></div><p>${escapeHtml(enemy.description || "No description recorded.")}</p><div class="enemy-stats"><span>Combat ${numberOrDash(enemy.combat)}</span><span>Defence ${numberOrDash(enemy.defence)}</span><span>Charisma ${numberOrDash(enemy.charisma)}</span><span>Intelligence ${numberOrDash(enemy.intelligence)}</span></div><div class="health-line"><button type="button" data-hp="-1" aria-label="Damage ${escapeHtml(enemy.name)}">−</button><div class="health-center"><div class="health-track"><i style="width:${percent}%"></i></div><strong>${hp} / ${enemy.maxHealth} HP</strong></div><button type="button" data-hp="1" aria-label="Heal ${escapeHtml(enemy.name)}">＋</button></div></article>`;
    }).join("") || `<p class="empty">No enemies or NPCs have been added here.</p>`;
  }

  function renderDiscoveries(location) {
    $("discoveryList").innerHTML = location.discoveries.map((item) => `<article class="discovery-item ${escapeHtml(item.state || "hidden")}" data-discovery="${escapeHtml(item.id)}"><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description || "")}</p>${item.effect ? `<p><strong>Effect:</strong> ${escapeHtml(item.effect)}</p>` : ""}<button class="state-button" type="button">${escapeHtml(item.state || "hidden")} →</button></article>`).join("") || `<p class="empty">No discoveries recorded.</p>`;
  }

  function renderAbilities(location) {
    $("abilityList").innerHTML = location.abilities.map((ability) => `<article class="discovery-item ${escapeHtml(ability.state || "hidden")}" data-ability="${escapeHtml(ability.id)}"><h3>${escapeHtml(ability.name)}</h3><p>${escapeHtml(ability.description || "")}</p><button class="state-button" type="button">${escapeHtml(ability.state || "hidden")} →</button></article>`).join("") || `<p class="empty">No learnable abilities recorded.</p>`;
  }

  function renderRoutes(location) {
    $("routeList").innerHTML = location.exits.map((route, index) => {
      const target = campaign.locations.find((candidate) => candidate.id === route.targetId);
      const label = route.label || target?.name || "Unlinked route";
      return `<button type="button" class="route-button" data-route="${index}" ${target ? "" : "disabled"}>${escapeHtml(label)}<small>${target ? `Open ${target.name}` : (route.description || "No connected location selected")}</small></button>`;
    }).join("") || `<p class="empty">No routes have been connected yet.</p>`;
  }

  function selectLocation(id) {
    if (!campaign.locations.some((location) => location.id === id)) return;
    currentId = id;
    saveCampaign();
    renderAll();
    $("sidebar").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openEditor() {
    editorDraft = clone(current());
    $("locationView").classList.add("hidden");
    $("locationEditor").classList.remove("hidden");
    $("editorTitle").textContent = `Edit ${editorDraft.name}`;
    $("editName").value = editorDraft.name;
    $("editCampaign").value = editorDraft.campaign || "";
    $("editStatus").value = editorDraft.status || "draft";
    $("editStory").value = editorDraft.story || "";
    $("editDmNotes").value = editorDraft.dmNotes || "";
    renderEditorLists();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeEditor() {
    editorDraft = null;
    $("locationEditor").classList.add("hidden");
    $("locationView").classList.remove("hidden");
  }

  function renderEditorLists() {
    if (!editorDraft) return;
    $("editEnemyList").innerHTML = editorDraft.enemies.map((enemy) => compactItem(enemy.id, enemy.name, "enemy")).join("");
    $("editDiscoveryList").innerHTML = editorDraft.discoveries.map((item) => compactItem(item.id, item.name, "discovery")).join("");
    $("editAbilityList").innerHTML = editorDraft.abilities.map((ability) => compactItem(ability.id, ability.name, "ability")).join("");
    $("editRouteList").innerHTML = editorDraft.exits.map((route, index) => compactItem(String(index), route.label || "Unnamed route", "route")).join("");
  }

  function compactItem(id, label, type) {
    return `<div class="compact-item"><span>${escapeHtml(label)}</span><button type="button" data-remove-type="${type}" data-remove-id="${escapeHtml(id)}" aria-label="Remove ${escapeHtml(label)}">Remove</button></div>`;
  }

  function saveEditor() {
    if (!editorDraft) return;
    editorDraft.name = $("editName").value.trim() || editorDraft.name;
    editorDraft.campaign = $("editCampaign").value.trim() || "Unsorted";
    editorDraft.status = $("editStatus").value;
    editorDraft.story = $("editStory").value.trim();
    editorDraft.dmNotes = $("editDmNotes").value.trim();
    const index = campaign.locations.findIndex((location) => location.id === currentId);
    campaign.locations[index] = editorDraft;
    saveCampaign("Location updated");
    closeEditor();
    renderFilters();
    renderAll();
  }

  function addEnemyToDraft() {
    const name = $("enemyName").value.trim();
    if (!name) return toast("Give the enemy a name first");
    const maxHealth = Math.max(1, Number($("enemyHealth").value) || 1);
    editorDraft.enemies.push({ id: uniqueId(name), name, description: $("enemyDescription").value.trim(), combat: Number($("enemyCombat").value) || 0, defence: Number($("enemyDefence").value) || 0, charisma: 0, intelligence: 0, maxHealth, currentHealth: maxHealth, status: "ready" });
    ["enemyName", "enemyDescription"].forEach((id) => { $(id).value = ""; });
    $("enemyHealth").value = 1; $("enemyCombat").value = 0; $("enemyDefence").value = 0;
    renderEditorLists();
  }

  function addDiscoveryToDraft() {
    const name = $("discoveryName").value.trim();
    if (!name) return toast("Give the discovery a name first");
    editorDraft.discoveries.push({ id: uniqueId(name), name, description: $("discoveryDescription").value.trim(), effect: $("discoveryEffect").value.trim(), state: "hidden" });
    ["discoveryName", "discoveryDescription", "discoveryEffect"].forEach((id) => { $(id).value = ""; });
    renderEditorLists();
  }

  function addAbilityToDraft() {
    const name = $("abilityName").value.trim();
    if (!name) return toast("Give the ability a name first");
    editorDraft.abilities.push({ id: uniqueId(name), name, description: $("abilityDescription").value.trim(), state: "hidden" });
    $("abilityName").value = ""; $("abilityDescription").value = "";
    renderEditorLists();
  }

  function addRouteToDraft() {
    const label = $("routeLabel").value.trim();
    if (!label) return toast("Give the route a label first");
    editorDraft.exits.push({ label, targetId: $("routeTarget").value, description: $("routeDescription").value.trim() });
    $("routeLabel").value = ""; $("routeDescription").value = "";
    renderEditorLists();
  }

  function removeDraftItem(button) {
    if (!editorDraft) return;
    const type = button.dataset.removeType;
    const id = button.dataset.removeId;
    if (type === "route") editorDraft.exits.splice(Number(id), 1);
    else {
      const key = type === "enemy" ? "enemies" : type === "ability" ? "abilities" : "discoveries";
      editorDraft[key] = editorDraft[key].filter((item) => item.id !== id);
    }
    renderEditorLists();
  }

  function populateRouteTargets() {
    $("routeTarget").innerHTML = `<option value="">Leave unlinked for now</option>` + campaign.locations.filter((location) => location.id !== currentId).map((location) => `<option value="${escapeHtml(location.id)}">${escapeHtml(location.campaign)} — ${escapeHtml(location.name)}</option>`).join("");
  }

  function createLocation(event) {
    event.preventDefault();
    const name = $("newName").value.trim();
    if (!name) return toast("Give the new location a name first");
    const id = uniqueLocationId(name);
    campaign.locations.push({ id, name, campaign: $("newCampaign").value.trim() || "New Adventures", status: "draft", story: $("newStory").value.trim(), dmNotes: $("newDmNotes").value.trim(), sessionNotes: "", enemies: [], discoveries: [], abilities: [], exits: [], source: null });
    currentId = id;
    saveCampaign("New location created");
    $("newLocationDialog").close();
    $("newLocationForm").reset();
    $("newCampaign").value = "New Adventures";
    renderFilters(); renderAll(); openEditor();
  }

  function resetEncounter() {
    const location = current();
    if (!location.enemies.length) return toast("This location has no encounter to reset");
    if (!confirm(`Reset every enemy in ${location.name} to full health?`)) return;
    location.enemies.forEach((enemy) => { enemy.currentHealth = enemy.maxHealth; enemy.status = "ready"; });
    saveCampaign("Encounter reset"); renderEnemies(location);
  }

  function downloadBackup() {
    const packageData = { exportedAt: new Date().toISOString(), currentId, campaign };
    const blob = new Blob([JSON.stringify(packageData, null, 2)], { type: "application/json" });
    const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `dungeon-crawlers-dm-backup-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(link.href);
    toast("Campaign backup downloaded");
  }

  async function restoreBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const restored = parsed.campaign || parsed;
      if (!Array.isArray(restored.locations)) throw new Error("Missing locations");
      if (!confirm(`Replace the current local campaign with this backup containing ${restored.locations.length} locations?`)) return;
      campaign = restored;
      currentId = parsed.currentId || campaign.locations[0]?.id || "";
      saveCampaign("Campaign restored");
      filter = "All"; renderFilters(); renderAll();
    } catch (error) {
      console.error(error); toast("That backup could not be read");
    } finally { event.target.value = ""; }
  }

  function bindGlobalEvents() {
    $("campaignFilters").addEventListener("click", (event) => { const button = event.target.closest("button[data-filter]"); if (!button) return; filter = button.dataset.filter; renderFilters(); renderLibrary(); });
    $("locationSearch").addEventListener("input", renderLibrary);
    $("locationList").addEventListener("click", (event) => { const button = event.target.closest("button[data-location]"); if (button) selectLocation(button.dataset.location); });
    $("menuButton").addEventListener("click", () => $("sidebar").classList.toggle("open"));
    $("locationStatus").addEventListener("change", () => { current().status = $("locationStatus").value; saveCampaign(); renderLibrary(); });
    $("sessionNotes").addEventListener("input", () => { current().sessionNotes = $("sessionNotes").value; queueSave(); });
    $("enemyGrid").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-hp]"); if (!button) return;
      const card = button.closest("[data-enemy]"); const enemy = current().enemies.find((item) => item.id === card.dataset.enemy); if (!enemy) return;
      enemy.currentHealth = clamp(Number(enemy.currentHealth) + Number(button.dataset.hp), 0, Number(enemy.maxHealth));
      enemy.status = enemy.currentHealth <= 0 ? "defeated" : (enemy.status === "defeated" ? "active" : enemy.status);
      saveCampaign(); renderEnemies(current());
    });
    $("enemyGrid").addEventListener("change", (event) => {
      if (!event.target.classList.contains("enemy-status")) return;
      const enemy = current().enemies.find((item) => item.id === event.target.closest("[data-enemy]").dataset.enemy); if (!enemy) return;
      enemy.status = event.target.value; if (enemy.status === "defeated") enemy.currentHealth = 0;
      saveCampaign(); renderEnemies(current());
    });
    $("discoveryList").addEventListener("click", (event) => { const item = event.target.closest("[data-discovery]"); if (!item || !event.target.closest("button")) return; const discovery = current().discoveries.find((entry) => entry.id === item.dataset.discovery); discovery.state = nextState(discovery.state, ["hidden", "revealed", "found"]); saveCampaign(); renderDiscoveries(current()); });
    $("abilityList").addEventListener("click", (event) => { const item = event.target.closest("[data-ability]"); if (!item || !event.target.closest("button")) return; const ability = current().abilities.find((entry) => entry.id === item.dataset.ability); ability.state = nextState(ability.state, ["hidden", "revealed", "learned"]); saveCampaign(); renderAbilities(current()); });
    $("routeList").addEventListener("click", (event) => { const button = event.target.closest("button[data-route]"); if (!button) return; const route = current().exits[Number(button.dataset.route)]; if (route?.targetId) selectLocation(route.targetId); });
    $("editLocationButton").addEventListener("click", openEditor);
    $("cancelEditButton").addEventListener("click", closeEditor);
    $("saveLocationButton").addEventListener("click", saveEditor);
    $("addEnemyButton").addEventListener("click", addEnemyToDraft);
    $("addDiscoveryButton").addEventListener("click", addDiscoveryToDraft);
    $("addAbilityButton").addEventListener("click", addAbilityToDraft);
    $("addRouteButton").addEventListener("click", addRouteToDraft);
    $("locationEditor").addEventListener("click", (event) => { const button = event.target.closest("button[data-remove-type]"); if (button) removeDraftItem(button); });
    $("newLocationButton").addEventListener("click", () => $("newLocationDialog").showModal());
    $("createLocationButton").addEventListener("click", createLocation);
    $("resetEncounterButton").addEventListener("click", resetEncounter);
    $("backupButton").addEventListener("click", downloadBackup);
    $("restoreFile").addEventListener("change", restoreBackup);
    window.addEventListener("beforeunload", () => saveCampaign());
  }

  function nextState(value, order) { return order[(Math.max(0, order.indexOf(value)) + 1) % order.length]; }
  function numberOrDash(value) { return Number(value) || "—"; }
  function clamp(value, min, max) { return Math.min(max, Math.max(min, Number(value) || 0)); }
  function slug(value) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "entry"; }
  function uniqueId(name) { return `${slug(name)}-${Date.now().toString(36)}`; }
  function uniqueLocationId(name) { const base = slug(name); let candidate = base; let number = 2; while (campaign.locations.some((location) => location.id === candidate)) candidate = `${base}-${number++}`; return candidate; }
  function escapeHtml(value = "") { const element = document.createElement("div"); element.textContent = String(value); return element.innerHTML; }

  initialize();
})();
