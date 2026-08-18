window.DM_CAMPAIGN_SEED = {
  "version": 1,
  "title": "Dungeon Crawlers — Dungeon Master Chronicle",
  "generatedFrom": [
    "The Story.xlsx",
    "the side quest.xlsx"
  ],
  "locations": [
    {
      "id": "the-camp",
      "name": "The Camp",
      "campaign": "The Story",
      "status": "ready",
      "story": "A quint woodland camp, as the sun sets, golden hour speckles through the leaves. A small log fire with an iron spit with a roast pig turning turns slowly. Around the wooden log seats are small triangular cloth tents. Curled oak trees line the clearing . // You and your fellow adventurers are sitting around the fire trading stories of old battles past, the fire crackling away as a skwered hog roast slowly crisps. You take turns rotating the spit. Suddenly you hear a commotion through the trees toward the roadside, muffled voices of multiple people clearly having some sort of argument... // As you get closer, or you are very perceptive, you see two highwaymen harassing a merchant on the road. // Defeating the highwaymen - you will notice their iron toe capped boots. worthy of taking for sure! High perception and you will also see a healing potion. Thimble will give you the charistma boosting book as a thankyou",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "thimble-1",
          "name": "Thimble",
          "description": "A short faun, dressed in a green leather jerkin with small curling horns coming from this forehead",
          "combat": 1,
          "defence": 16,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "sword-thug-2",
          "name": "Sword thug",
          "description": "A rough looking human thief, eye patch, scar on face and crooked sward in hand",
          "combat": 5,
          "defence": 16,
          "charisma": 17,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "mace-wielding-thug-3",
          "name": "mace wielding thug",
          "description": "green dark elf, silver shoulder plates and a spiked mace and short dagger",
          "combat": 5,
          "defence": 16,
          "charisma": 17,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "the-merchant-has-a-book-of-pick-1",
          "name": "The merchant has a book of pick",
          "description": "The merchant has a book of pick up lines that permanently increases your charisma - he will give it to you charisma. 10 gold",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "2-x-iron-toe-capped-boots-2",
          "name": "2 x Iron toe capped boots",
          "description": "2 x Iron toe capped boots - wearable by all classes, increase defence",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "healing-potion-stashed-in-the-first-thugs-jerkin-3",
          "name": "Healing potion stashed in the first thugs jerkin",
          "description": "Healing potion stashed in the first thugs jerkin - A perception roll",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "10-gold-for-helping-him-4",
          "name": "10 gold for helping him.",
          "description": "10 gold for helping him.",
          "effect": "10 gold",
          "state": "hidden"
        },
        {
          "id": "the-south-road-takes-you-toward-a-5",
          "name": "The south road takes you toward a",
          "description": "The south road takes you toward a local blacksmiths, armour and weapon improvements will surely be available, but do you have the gold to pay for them?",
          "effect": "the east road takes to toward a well known tavern in the area, plenty to eat and drink, always a good story to hear and maybe some gold to be earnt",
          "state": "hidden"
        }
      ],
      "abilities": [],
      "exits": [
        {
          "label": "The south road takes you toward a local blacksmiths, armour and weapon improvements will surely be available, ",
          "description": "The south road takes you toward a local blacksmiths, armour and weapon improvements will surely be available, but do you have the gold to pay for them?",
          "targetId": "grollnich-s-forge"
        },
        {
          "label": "the east road takes to toward a well known tavern in the area, plenty to eat and drink, always a good story to",
          "description": "the east road takes to toward a well known tavern in the area, plenty to eat and drink, always a good story to hear and maybe some gold to be earnt",
          "targetId": "the-thatch-and-tankard"
        },
        {
          "label": "the west road will take you to a bandit camp that are set up on the road toward Karovnik. It'll surely be a fi",
          "description": "the west road will take you to a bandit camp that are set up on the road toward Karovnik. It'll surely be a fight to get through. But the big city brings many opportunities.",
          "targetId": "the-redarm-bandit-camp"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "The Camp"
      }
    },
    {
      "id": "the-thatch-and-tankard",
      "name": "The Thatch and Tankard",
      "campaign": "The Story",
      "status": "ready",
      "story": "The Thatch & Tankard Tavern A squat, thatched-roof tavern stands at the edge of the road, its timber walls bulging slightly as if struggling to contain the raucous life within. The sound of laughter, shouts, and clattering tankards spills out into the night, carried on the scent of roasted meats and spiced ale. The town is quiet other than this shining beacon of a pub at its centre. // A few painted ladies linger in the corners, offering companionship to those with coin. Behind the bar is Scorn, the bartender. Sitting at another table is an older looking man in a brown plush jacket (Ealdorman) and a young pretty brunette girl in a pale blue dress, a drunken old soldier, snoring at the bar, A timd looking blonde haired religious pilgrim // At another table, a blue-skinned elf captain sat in gleaming armor, her sharp eyes scanning the room with the weight of command. Around her sprawled two Eramore soldiers, their discipline lost to ale but their weapons never far from hand. The captain’s presence was a reminder that even here, in the tavern’s noisy warmth, the wider conflicts of Arothia were never far away.",
      "dmNotes": "• Kitchen & Ale: The innkeeper’s wife runs a bustling kitchen, serving hearty stews, fresh bread, and jugs of frothing beer. • Notice Board: Near the entrance hangs a battered notice board. One prominent propaganda poster of the war between Eramor and Fellscar. • Ealdorman: Seated in a corner with a heavy cloak draped across his shoulders, the local ealdorman watches the chaos with a furrowed brow. He quietly approaches adventurers with an urgent task: escort his daughter safely to Khazard. • The Pilgrim: At a corner table sits a lone pilgrim from the monastery, his plain robes marked with the dust of travel. He speaks in hushed tones of the monks and their sacred work, and hints at a mysterious scroll. If delivered to the monastery, the scroll can unlock a new skill for the one who bears it.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "scorn-1",
          "name": "Scorn",
          "description": "Bartender - has stuff for sale - won't serve you easily because the soldiers are causing too much of a ruckus",
          "combat": 2,
          "defence": 16,
          "charisma": 23,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "elf-captain-2",
          "name": "Elf Captain",
          "description": "Blue skinned dark elf. Captain of an army from Eramore. They're drunk and looking for a fight",
          "combat": 7,
          "defence": 17,
          "charisma": 20,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "eramore-archer-3",
          "name": "Eramore archer",
          "description": "Drunken elvish officer under captains command. Wearing silver armour with the symbol or Eramore on it, carrying a bow",
          "combat": 5,
          "defence": 14,
          "charisma": 19,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "eramore-warrior-4",
          "name": "Eramore warrior",
          "description": "Drunken elvish officer under captains command. Wearing silver armour with the symbol or Eramore on it",
          "combat": 2,
          "defence": 14,
          "charisma": 19,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "brabore-ironborn-5",
          "name": "Brabore Ironborn",
          "description": "very old battleworn elf. Still has a his pre-revolution armour on, rusting and degraded. He's clearly been drinking and is snoring on the bar. Wake him up, buy him a drink and he might teach you Embolden",
          "combat": 12,
          "defence": 20,
          "charisma": 29,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "ealdorman-6",
          "name": "Ealdorman",
          "description": "Village elder, he has a job for you - escort his daughter (priscilla) to the dwarf town of Khazard and introduce her to Fonzo - the town sage, you'll be paid 10 gold for your trouble",
          "combat": 1,
          "defence": 16,
          "charisma": 20,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "sparrow-7",
          "name": "Sparrow",
          "description": "Travelling pilgrim from the monestary - she has a note - it’s a scroll with some strange markings on it. Some sort of ancient martial arts scroll you need to visit grayfry at the monastery to learn",
          "combat": 1,
          "defence": 16,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "priscilla-8",
          "name": "Priscilla",
          "description": "Young and pretty brunette with a pale dress, carries a small dagger and can heal players with sage herbs",
          "combat": 3,
          "defence": 10,
          "charisma": 25,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "the-bartender-sells-a-hearty-meal-which-1",
          "name": "The bartender sells a hearty meal which",
          "description": "The bartender sells a hearty meal which has a 50% chance to heal you one health, 11+ and it will. 5 gold",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "ealdormans-payment-for-escorting-daughter-2",
          "name": "Ealdormans payment for escorting daughter",
          "description": "Ealdormans payment for escorting daughter",
          "effect": "10 Gold",
          "state": "hidden"
        },
        {
          "id": "elf-archers-bow-increases-accuracy-for-hunters-onle-3",
          "name": "Elf archers bow (Increases accuracy) for hunters onle",
          "description": "Elf archers bow (Increases accuracy) for hunters onle",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "rogues-coif-4",
          "name": "Rogues Coif",
          "description": "Rogues Coif - Scorn will give you this as a reward for clearing out the roughians. He found it in lost property. ( defence boostFor Rogues or Hunters)",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "head-to-the-blacksmith-via-the-camp-5",
          "name": "Head to the blacksmith via the camp",
          "description": "Head to the blacksmith via the camp - roll to see If you're ambushed",
          "effect": "North to Khazard with the ealdormans daughter",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "embolden-1",
          "name": "Embolden",
          "description": "Embolden - Gives another player advantage for the rest of the battle. Taught by Brebore",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Head to the blacksmith via the camp - roll to see If you're ambushed",
          "description": "Head to the blacksmith via the camp - roll to see If you're ambushed",
          "targetId": "grollnich-s-forge"
        },
        {
          "label": "North to Khazard with the ealdormans daughter",
          "description": "North to Khazard with the ealdormans daughter",
          "targetId": "khazard-dwarftown"
        },
        {
          "label": "South to the monastery to try learn the new scroll",
          "description": "South to the monastery to try learn the new scroll",
          "targetId": "monastery-of-galitor"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Tavern"
      }
    },
    {
      "id": "the-redarm-bandit-camp",
      "name": "The Redarm Bandit Camp",
      "campaign": "The Story",
      "status": "ready",
      "story": "A sprawling wooden palisade outpost looms across the road to Karovnik, its rough-hewn spikes jutting like the teeth of some great beast. Red banners drape the walls. Menacing human guards linger at the gate, clad in battered metal plates strapped together with leather, their red armbands marking allegiance. Each carries a long pike, and their eyes follow travellers with an unsettling sharpness. Patrols march the road for miles in both directions, harassing those who stray too close. • Weapons Vendor: A scarred blacksmith works from a forge cobbled together from stolen parts, offering rough but serviceable weapons at extortionate prices. His wares are dinged and mismatched, but a keen eye (and a good roll) might spot rare salvage from past raids. • Rogue’s Den: A shadowy corner of the camp houses the den of cutpurses and scouts. Here, a wiry rogue named Nerissa Quickarm offers to teach the art of guard. Adventurers who train with her can also unlock a new skill that opens up doors (literally and figuratively) for future exploits. • Gambling Tent: Dice, cards, and bare-knuckle brawls draw the desperate and reckless. The odds are stacked against outsiders, but the rewards are tempting. The bard looks like he's lost all his money - he might sell you his Lute for some spare change • Chieftain’s Hall: At the heart of the camp sits a large, reinforced tent, draped in red banners. Inside waits the Chieftain of the Red Arm Gang, a calculating leader who holds sway over the entire border.",
      "dmNotes": "What you later learn: . They will not allow passage to Karovnik unless you pay a steep toll of 30 gold. However, a silver tongue might suffice: a successful Charisma check grants an audience with the chieftain, opening alternate paths forward. He requests you kill Menethal - the steward of Karovnik - his tyrannical rule should come to an end. Bring the chief his head for a reward.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "river-guard-1-1",
          "name": "River guard 1",
          "description": "Hefty looking guard, red armband gang with black hair and a scarred face, two-handed hammer at his side.",
          "combat": 9,
          "defence": 18,
          "charisma": 25,
          "intelligence": 0,
          "maxHealth": 3,
          "currentHealth": 3,
          "status": "ready"
        },
        {
          "id": "river-guard-2-2",
          "name": "River guard 2",
          "description": "Taller thin fe,female guard with long white hair and sharp eyes. Carrying two axes on her back.",
          "combat": 9,
          "defence": 18,
          "charisma": 25,
          "intelligence": 0,
          "maxHealth": 3,
          "currentHealth": 3,
          "status": "ready"
        },
        {
          "id": "red-arm-chief-3",
          "name": "Red Arm Chief",
          "description": "A notorious warlord, leader of the red arm gang - carrying a legendary great axe of freezing. Willing to give you a tough mission to infiltrate Karovnik and slay the king.",
          "combat": 13,
          "defence": 20,
          "charisma": 29,
          "intelligence": 0,
          "maxHealth": 6,
          "currentHealth": 6,
          "status": "ready"
        },
        {
          "id": "redarm-gang-member-x-15-4",
          "name": "redarm gang member x 15",
          "description": "plenty of red arm gang thugs roam the camp, halls and river crossing.",
          "combat": 8,
          "defence": 22,
          "charisma": 0,
          "intelligence": 4,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "nerissa-quickarm-5",
          "name": "Nerissa Quickarm",
          "description": "Thuggish looking human, tattood arms and torn black outfit. you can learn the Guard skill from this Rogue trainer, either by convincing her or killing her, you can also learn Picklock",
          "combat": 2,
          "defence": 17,
          "charisma": 26,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "red-arm-croupier-6",
          "name": "red arm croupier",
          "description": "can't be tricked. But if you're intelligent enough - maybe you can make some money here. Gambl e responsibly - Sells bard's loot",
          "combat": 1,
          "defence": 16,
          "charisma": 0,
          "intelligence": 14,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "scalen-7",
          "name": "Scalen",
          "description": "Weapons vender - has items for sale, mainly the silver sword of freezing. Also teaches you a skill - Guard",
          "combat": 1,
          "defence": 16,
          "charisma": 23,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "bards-lute-1",
          "name": "Bards lute",
          "description": "Bards lute - Obtainable from the gambling tent. Increases Charisma for Casanovas",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "silver-sword-of-freezing-2",
          "name": "Silver sword of freezing",
          "description": "Silver sword of freezing - second roll, 13+ will freeze enemy on contact - berserker only. 30 gold",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "reward-for-menethal-s-head-3",
          "name": "Reward for Menethal's head.",
          "description": "Reward for Menethal's head.",
          "effect": "30 Gold",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "guard-1",
          "name": "Guard",
          "description": "Guard - Ability that allows one player to tank a hit for another. Warriors and Berserkers only - tought by Nerissa",
          "state": "hidden"
        },
        {
          "id": "picklock-2",
          "name": "Picklock",
          "description": "Picklock - the skill of picking locks, allows player to roll with advantage tought by Nerissa",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Onward to Karovnik - you can either go by paying 50gold or sneak in through the sewer system to attempt to kil",
          "description": "Onward to Karovnik - you can either go by paying 50gold or sneak in through the sewer system to attempt to kill the king",
          "targetId": "karovnik-city-of-men"
        },
        {
          "label": "Back toward the camp, passing through and heading elsewhere. Roll not to get ambushed >14",
          "description": "Back toward the camp, passing through and heading elsewhere. Roll not to get ambushed >14",
          "targetId": "the-camp"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "BanditCamp"
      }
    },
    {
      "id": "grollnich-s-forge",
      "name": "Grollnich's forge",
      "campaign": "The Story",
      "status": "ready",
      "story": "Dwarven blacksmiths at the centre of a small outpost village. The old slate forge that has stood at the crossroads for 100 years, was once a grand bellow-heated factory that now stands all-but-defunct. The old east-west road now only faintly recognisable beneath thick overgrown grass and brambles. Outside of the forge, sits an old dwarven warrior. Grollnich, son of Groll. He sells wares and also offers jobs to travelling adventurers in exchange for gold. Along the pathway, with a perception check, you see a shrine to Hala, the great god above all. Praying at the shrine, will give a +1 to Arcane for the rest of the day. /// Other interesting places of note, are an old cemetery where the dead walk at night, cursed to never rest by an old Orc Priest. The gate to the cemetary is locked and the padlock is rusted over. Once you enter, with perception, you see a glowing Shrine to Freitus, oozing fog and purple light. If you get close, Skeletons will rise from the grave and keep coming back until you destroy the shrine.",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "grollnich-1",
          "name": "Grollnich",
          "description": "Stout but hardy dwarven smith from Khazard. Grey hair in a long plaited beard covers rusting bronze chainmail and red leather workmans gloves.",
          "combat": 6,
          "defence": 16,
          "charisma": 32,
          "intelligence": 0,
          "maxHealth": 5,
          "currentHealth": 5,
          "status": "ready"
        },
        {
          "id": "old-fisherman-2",
          "name": "Old fisherman",
          "description": "leathery old human man, strapped in tired old fishing gear. Passing through from the village. He's mumbling about a kraken that’s ruined this years sea-harvest",
          "combat": 1,
          "defence": 16,
          "charisma": 18,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeleton-warrior-4-3",
          "name": "skeleton warrior 4",
          "description": "red burning eyes, mossy old skeleton bones - they revive each round unless the statue is destroyed",
          "combat": 9,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeleton-warrior-1-4",
          "name": "Skeleton warrior 1",
          "description": "red burning eyes, mossy old skeleton bones - they revive each round unless the statue is destroyed may drop a healing potion with a high perception roll.",
          "combat": 9,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeleton-warrior-2-5",
          "name": "Skeleton warrior 2",
          "description": "red burning eyes, mossy old skeleton bones - they revive each round unless the statue is destroyed",
          "combat": 9,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeleton-warrior-3-6",
          "name": "skeleton warrior 3",
          "description": "red burning eyes, mossy old skeleton bones - they revive each round unless the statue is destroyed",
          "combat": 9,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeleton-warrior-3-7",
          "name": "skeleton warrior 3",
          "description": "red burning eyes, mossy old skeleton bones - they revive each round unless the statue is destroyed",
          "combat": 9,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "tunic-of-charming-1",
          "name": "Tunic of charming",
          "description": "Tunic of charming. Adds two charisma to any player - allowing them to better converse with others. - 20 gold",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "package-delivery-for-his-customer-2",
          "name": "package delivery for his customer",
          "description": "package delivery for his customer - Wizard trailborn in the wizard tower. The emberstone.",
          "effect": "20 Gold",
          "state": "hidden"
        },
        {
          "id": "blades-of-everstone-3",
          "name": "Blades of everstone",
          "description": "Blades of everstone. Legendary weapon smithed by ancient dwarfs that deal poison damage +16 and it infects - Warriors only 30 gold",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "pacakage-for-raven-4",
          "name": "pacakage for Raven",
          "description": "pacakage for Raven - in Eramore.",
          "effect": "30 Gold",
          "state": "hidden"
        },
        {
          "id": "grollnich-s-reward-for-cleansing-the-cemetary-5",
          "name": "Grollnich's Reward for cleansing the cemetary",
          "description": "Grollnich's Reward for cleansing the cemetary",
          "effect": "20 Gold",
          "state": "hidden"
        },
        {
          "id": "south-onward-towards-to-the-monastery-or-6",
          "name": "South, onward towards to the monastery or",
          "description": "South, onward towards to the monastery or take the greenway to the fishing village.",
          "effect": "East along the greenway to the Human fishing Village.",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "book-of-knowledge-1",
          "name": "Book of Knowledge",
          "description": "Book of Knowledge - buy for 30 coins. Teaches Divine arrow shot. Does double damage - Hunter only",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "South, onward towards to the monastery or take the greenway to the fishing village.",
          "description": "South, onward towards to the monastery or take the greenway to the fishing village.",
          "targetId": "nautica-fishing-village"
        },
        {
          "label": "East along the greenway to the Human fishing Village.",
          "description": "East along the greenway to the Human fishing Village.",
          "targetId": "nautica-fishing-village"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Blacksmith"
      }
    },
    {
      "id": "nautica-fishing-village",
      "name": "Nautica - Fishing Village",
      "campaign": "The Story",
      "status": "ready",
      "story": "The Fishing village of Nautica. Wooden hovels, woven netting and seagulls flying above. The salty smell of the sea mixing in with the muddy ground of the land. Hungry citizens plague the streets as the fish have all dried up because a huge sea kraken has taken up residence just of the shore and is terrorising the boats and driving the fish away down the coast. Houses line the street that undulates downhill toward a wooden dock in the distance /// You see an inn by the gatehouse entrance, candles flickering in the windows. Inside the innkeep is a gaunt looking half-merperson and a girl dancing (scalennia) although there is only weak, hungry looking patrons brely watching her. // The Innkeep or Scalennia will both tell you whats happening - and task you with killing the kraken in exchange for a prize from the cheif. // The Nautilus is a large ship with crimson sails docked in the port. Captained by Nautilus himself and crewed by a misfit crew of merpeople, shell armour, coral weaponary. Make your way onto the ship and seek a reward for killing the Kraken. He will tell you of an old captian on the dock who might just be crazy enough to take you there.",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "innkeep-1",
          "name": "Innkeep",
          "description": "Owner and proprieter of the inn. You can tell his half human, half merperson",
          "combat": 2,
          "defence": 17,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "scalennia-2",
          "name": "Scalennia",
          "description": "dancing merwoman, blue scales and shell bikini. Knows a weakness for the kraken. But it will be hard to get it out of her. 20 gold",
          "combat": 2,
          "defence": 17,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "boat-captain-3",
          "name": "boat captain",
          "description": "Crusty old captain of a retired frigate from the war. The ship has a rusting harpoon gun at the helm. He may help you, if you rid the sea of the kraken",
          "combat": 4,
          "defence": 18,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "the-kraken-4",
          "name": "The Kraken",
          "description": "A huge green slimy seamonster with tentacles and ornge vertical cat eyes. Immune to poison and freezing.",
          "combat": 13,
          "defence": 22,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 7,
          "currentHealth": 7,
          "status": "ready"
        },
        {
          "id": "nautilus-the-chief-5",
          "name": "Nautilus - the chief",
          "description": "village chief, half human, half walrus - big tusks and coral armour.",
          "combat": 13,
          "defence": 22,
          "charisma": 27,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "nautilus-crew-x10-6",
          "name": "Nautilus' crew X10",
          "description": "If you for some reason turn on the chief, the crew will jump to his aide.",
          "combat": 8,
          "defence": 20,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "advanced-healing-potion-that-is-given-to-1",
          "name": "Advanced healing potion that is given to",
          "description": "Advanced healing potion that is given to you by the boat captain - You're going to need it.",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "prize-from-the-nautilus-2",
          "name": "prize from the Nautilus",
          "description": "prize from the Nautilus - the village chief for killing the kraken",
          "effect": "20 Gold",
          "state": "hidden"
        },
        {
          "id": "kraken-scale-3",
          "name": "Kraken scale",
          "description": "Kraken scale - gives a +2 arcane boost for wizards",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "hearty-meal-sunday-roast-4",
          "name": "Hearty meal Sunday roast",
          "description": "Hearty meal Sunday roast - available from the innkeep, that heals one health - 20gold",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "back-to-the-blacksmith-to-spend-your-cash-5",
          "name": "Back to the blacksmith to spend your cash",
          "description": "Back to the blacksmith to spend your cash",
          "effect": "Southward to the monastery",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "blind-1",
          "name": "Blind",
          "description": "Blind - Taught by Scalennia. +12 and it blinds creatures by confusing sonar wavesounds. (Enemy rolls with disadvantage)",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Back to the blacksmith to spend your cash",
          "description": "Back to the blacksmith to spend your cash",
          "targetId": "grollnich-s-forge"
        },
        {
          "label": "Southward to the monastery",
          "description": "Southward to the monastery",
          "targetId": "monastery-of-galitor"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Fishing Village"
      }
    },
    {
      "id": "monastery-of-galitor",
      "name": "Monastery of Galitor",
      "campaign": "The Story",
      "status": "ready",
      "story": "The monastery, a place of peace and sanctuary for those wary of war and displaced from their homes. It's a beautiful old cobblestone church with beautiful stainflass windows and lushious gardens that are being tended to by the monks. The monks where brown robes and white ropes and bronze flowered diadems on their heads. There are many races here. All have given up their alliegences in exchange to worship the great god Galitor. // Archmonk Grayfry leads the monks. He welcomes the party in, even invites them for dinner. Teaches them the lore of Galitor and the evil Orc god Frietus. The Orc's are a scourge and must be scoured from this world. If you have Sparrows scroll with you, Grayfry will teach you the technique written on the scroll. // You will also meet Hamma as you eat, who will invite you to to a challenge of wits and riddles - four rooms to test your skills as a team, at the end of which will be a prize.",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "archmonk-grayfry-1",
          "name": "Archmonk Grayfry",
          "description": "The arch monk of the monastery, will teach you sparrows scroll if you have it.",
          "combat": 2,
          "defence": 0,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "hamma-the-riddler-2",
          "name": "Hamma the riddler",
          "description": "A hobbling old monk, hunched over from years of work in the fields and gardens - he looks atleast 100 years old",
          "combat": 1,
          "defence": 0,
          "charisma": 27,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "hala-the-bard-3",
          "name": "Hala the Bard",
          "description": "Singing Monk, sells a few wares and niknaks. Has a unique item (Glasses) that she may part with for charisma",
          "combat": 3,
          "defence": 0,
          "charisma": 27,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "hearty-meal-from-grayfry-1",
          "name": "hearty meal from grayfry",
          "description": "hearty meal from grayfry - 50% chance to heal 1 point of health to the team.",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "hala-s-glasses-2",
          "name": "Hala's Glasses",
          "description": "Hala's Glasses - Circular spectacles, humming with faint magical enery. Increases perception and Arcane",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "healing-potion-3",
          "name": "Healing potion",
          "description": "Healing potion - on the table In the study of archmonk grayfry",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "endorsement-of-peace-4",
          "name": "Endorsement of peace",
          "description": "Endorsement of peace - Letter given to you by Grayfry, to give to the elves of the enchanted forest",
          "effect": "20 Gold",
          "state": "hidden"
        },
        {
          "id": "back-north-to-the-blacksmith-5",
          "name": "back north to the blacksmith",
          "description": "back north to the blacksmith",
          "effect": "east to the fishing village",
          "state": "hidden"
        },
        {
          "id": "west-to-the-haunted-wood-6",
          "name": "west to the haunted wood",
          "description": "west to the haunted wood - Archmonk Grayfry will tell to you about the wraith of ashenroot in the haunted forest after completing Hamma's riddles",
          "effect": "south to the enchanted forest.",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "healing-parchment-1",
          "name": "Healing parchment",
          "description": "Healing parchment - Fully heal a character one time ONLY! only works with wizard or casanova's. Calls upon the Grace of Galitor",
          "state": "hidden"
        },
        {
          "id": "faze-sprint-2",
          "name": "Faze sprint",
          "description": "Faze sprint, learnt by giving sparrows scroll to grayfry Rogue, hunter",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "back north to the blacksmith",
          "description": "back north to the blacksmith",
          "targetId": "grollnich-s-forge"
        },
        {
          "label": "east to the fishing village",
          "description": "east to the fishing village",
          "targetId": "nautica-fishing-village"
        },
        {
          "label": "west to the haunted wood - Archmonk Grayfry will tell to you about the wraith of ashenroot in the haunted fore",
          "description": "west to the haunted wood - Archmonk Grayfry will tell to you about the wraith of ashenroot in the haunted forest after completing Hamma's riddles",
          "targetId": "haunted-wood"
        },
        {
          "label": "south to the enchanted forest.",
          "description": "south to the enchanted forest.",
          "targetId": "enchanted-forest"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Monastery"
      }
    },
    {
      "id": "khazard-dwarftown",
      "name": "Khazard - Dwarftown.",
      "campaign": "The Story",
      "status": "ready",
      "story": "Khazard, the great dwarf city. Circular city walls built from large redstone blocks, a great iron portcullis covers the main gate - As you enter through the gate you see low sturdy buildings, smoke rising from all around, the hustle and bustle of the mud stricken streets. markets, taverns, brothels all line the roads. The sage's hut is to the east and will pay you the 10g for his new apprentice's safe arrival, the ealdorman's daughter // To the centre of the town you what looks like a large mine entrance, guarded by two tall ancient statues of dwarf kings of old. Each stong figure holding Flaming sconces flickering away. At the entrance to the mine, a temporary wooden barricade has been built up hastily. haughty dwarfs are moving two and fro carrying blunderbuss guns and seige weaponary. All being led by a captain dwarf with a blue cape stiched with gold. /// Talking to the captain will reveal they are leading an effort to rid the diamond mine of a large stone golem and its offspring which they awoke when they desturbed a master stone. // Your mission should you choose to accept it, is to rid the mine of these golems. Once you do - Feanor the wizards apprentice will find you, seeing your potential for a special mission from the wizard.",
      "dmNotes": "The centre of the dwarven mine where the rock Golem is groaning rasply. Is grand hall, the walls are filled with mining equipment, wooden scaffolding, handing cranes, carts, rails and arches that are holding up the walls of the cave. Lanterns light the area and a giant net of timber logs suspended above the area by rope.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "mine-guards-1",
          "name": "Mine guards",
          "description": "x3",
          "combat": 10,
          "defence": 22,
          "charisma": 17,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "glonk-captain-2",
          "name": "Glonk - Captain",
          "description": "Dwarf Captain, he's leading a taskforce to take back the diamond mine. They dug too deep and awoke stone golem and his offspring.",
          "combat": 13,
          "defence": 24,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 5,
          "currentHealth": 5,
          "status": "ready"
        },
        {
          "id": "fonzo-dwarven-sage-3",
          "name": "Fonzo - dwarven sage",
          "description": "old sage, sells potions and is awaiting his apprentice, the ealdormans daughter.",
          "combat": 1,
          "defence": 16,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "rock-golem-s-x-6-4",
          "name": "rock golem's x 6",
          "description": "hulking pile of humanoid rock, they hurl stones and deal heavy bludgeoning damage",
          "combat": 7,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "alpha-golem-5",
          "name": "Alpha Golem",
          "description": "A huge towering rock humanoid, blue diamond eyes glisten. It's arms carved into almost hammer shaped fists. - Creates more Rock Golems - loses a health each golem it creates",
          "combat": 13,
          "defence": 18,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 7,
          "currentHealth": 7,
          "status": "ready"
        },
        {
          "id": "feanor-6",
          "name": "Feanor",
          "description": "The wizards apprentice. Will find you after defeating the golem - seeing your skill in battle, he will tell you to go see the wizard for a mission.",
          "combat": 2,
          "defence": 18,
          "charisma": 20,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "advanced-healing-potions-are-available-at-the-1",
          "name": "advanced Healing potions are available at the",
          "description": "advanced Healing potions are available at the Sage's hut, for 10 gold",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "cut-diamond-found-amongst-the-rubble-2",
          "name": "cut diamond found amongst the rubble",
          "description": "cut diamond found amongst the rubble - worth 20 gold - you can sell it to somebody at the market.",
          "effect": "20 Gold",
          "state": "hidden"
        },
        {
          "id": "diamond-tip-3",
          "name": "Diamond tip",
          "description": "Diamond tip - attaches to any magical item (wand, staff etc) for plus 2 arcane boost -",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "diamond-bracers-4",
          "name": "Diamond bracers",
          "description": "Diamond bracers - Available at the general store, increasing defence for any party member (20 gold)",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "onward-to-the-wizard-tower-5",
          "name": "onward to the wizard tower.",
          "description": "onward to the wizard tower.",
          "effect": "back to the tavern to beyond to the camp.",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "echo-strike-1",
          "name": "Echo strike",
          "description": "Echo strike, you learn the echo of the rock golem, which allows you to hit again on your turn, once per battle warrior/berseker only",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "onward to the wizard tower.",
          "description": "onward to the wizard tower.",
          "targetId": "wizard-tower"
        },
        {
          "label": "back to the tavern to beyond to the camp.",
          "description": "back to the tavern to beyond to the camp.",
          "targetId": "the-camp"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Khazard"
      }
    },
    {
      "id": "karovnik-city-of-men",
      "name": "Karovnik - City of Men",
      "campaign": "The Story",
      "status": "ready",
      "story": "The mighty human fortress of Karovnik - Lead by the old steward Menethal. The white stone walls 50 feet high, spiked with wooden barricades and flaming pyre's of wood and watchtowers lined with arrow shafts. Steward Menethal senial old hermit who runs the city with an ironfist. Guards line the streets, There is a curfew in place at dusk, but the cities underworld is a thriving hive of villainy and debauchery. The general store is run by a halfling, he has some fine leather bracers for sale. //// Should the players arrive via the secret entrance, they will enter through the castle sewers and have to fend of sewer goblins before coming up into the corridor of the living quarters. Perception and lockpicking will enable them to make their way through the castle and find Menethal sleeping in his bed. Killing him, with perception they will find his diary and the greataxe above his bed. /// Should the players arrive through the front gate - they will find themselves in the town centre. taverns where they can eat, sleep and rest. A blacksmith to buy an armour piece. and a brothel in which people can get frisky.",
      "dmNotes": "Upon getting thrown in the dungeon - In order to get out, Menethal will task the group with killing the wizard trailborn. He has long suspected that the wizard and the elves of Eramore are in league together to overthrough humankind. If this happens. He offers you 30 gold. But instead of paying you will try to kill you.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "city-guards-1",
          "name": "City guards",
          "description": "x3",
          "combat": 10,
          "defence": 22,
          "charisma": 19,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "sewer-goblins-2",
          "name": "Sewer Goblins",
          "description": "x5",
          "combat": 11,
          "defence": 19,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "gordia-3",
          "name": "Gordia",
          "description": "Menethal's personal guard. A human female hunter, leopard hide armour and a redwood bow.",
          "combat": 15,
          "defence": 24,
          "charisma": 13,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "gorr-4",
          "name": "Gorr",
          "description": "Menethals personal bodyguard - hulking musclebound man, stone helmet spiked shoulder pads and a large stone two-handed hammer. At half health, Gorr goes into a rage and attacks twice",
          "combat": 13,
          "defence": 24,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 6,
          "currentHealth": 6,
          "status": "ready"
        },
        {
          "id": "menethal-5",
          "name": "Menethal",
          "description": "Maddened old man, draped in a cloak of raven feathers. And a charred wooden staff. If engaged, he will lock himself behind a door and release his bodyguards",
          "combat": 10,
          "defence": 26,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "tonks-6",
          "name": "Tonks",
          "description": "Halfling General store owner.",
          "combat": 1,
          "defence": 18,
          "charisma": 20,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "fine-leather-bracers-1",
          "name": "Fine leather bracers",
          "description": "Fine leather bracers. Defence increase for hunters and rogues - 10 gold",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "healing-potion-1-health-available-in-the-market-square-2",
          "name": "healing potion +1 health available in the market square",
          "description": "healing potion +1 health available in the market square",
          "effect": "10 Gold",
          "state": "hidden"
        },
        {
          "id": "great-hammer-of-stunning-3",
          "name": "Great Hammer of stunning",
          "description": "Great Hammer of stunning - chance to stun enemy on a successful hit. +15 the enemy will lose their next turn. Berserkers only - In a glass case above Menethals Bed",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "sherlock-gnomes-magnifying-glass-4",
          "name": "Sherlock Gnomes' Magnifying glass",
          "description": "Sherlock Gnomes' Magnifying glass - Sold by Tonks. Increases perception. 20 Gold",
          "effect": "+2",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "bend-the-will-of-others-1",
          "name": "Bend the will of others",
          "description": "Bend the will of others - Menethals diary teaches a vocal skill that allows Casanovas/rogues to control an enemy for a turn.",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Back via the bandit camp and through the camp onward to east or south.",
          "description": "Back via the bandit camp and through the camp onward to east or south.",
          "targetId": "the-redarm-bandit-camp"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Karovnik"
      }
    },
    {
      "id": "wizard-tower",
      "name": "Wizard Tower",
      "campaign": "The Story",
      "status": "ready",
      "story": "Standing on a single grassy hill. Rising above the landscape like a needle of stone, the wizard’s tower pierces the sky, Green bricks and yellow roof. its tall spire crackling with blue magical energy. Within, a spiral staircase winds endlessly upwards, lit by floating orbs of pale light that drift lazily in the air. // At the summit lies the sanctum and library of Wizard Trailborn, a chamber lined with towering bookshelves, arcane instruments, and the scent of old parchment and chemisty sets. Guarding the threshold to his living quarters are two massive summoned elementals • A roaring fire elemental, its flickering form barely contained by shimmering silver manacles, radiates heat strong enough to make the stone walls sweat. • A towering water elemental, a surging mass of foam and current, bound by gleaming golden manacles, churns restlessly, its watery limbs slapping the flagstones in irritation. Trailborn already knows of them. Through his crystal ball, he has observed their travels from afar. If you give him the Emberstone he will offer you two choices, either give it to him, for 20 gold pieces, or offer it as a gift to the phoenix.",
      "dmNotes": "• The Mission. Trailborn reveals dire news: the Orc King of Orctown rallies his warbands, threatening to plunge the kingdom into chaos. He tasks the adventurers with slaying the Tormented Demon at the Abandoned mine and cleansing the area. He will also tell you about Gal-halans war against the Orc's and that the elves need all the help they can get. There will be an ability in it for you, if you succeed.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "wizard-trailborn-1",
          "name": "Wizard Trailborn",
          "description": "A mighty wizard dressed in grey robes, square spectacles and a huge staff of ivory. surrounded by magical aura, he has ancient skills and power. He fears for the future of Aronys. The ruler of the humans, a crooked old steward menethal has gone mad. Sea creatures and pirates berate the shores and the war between the Elves and the Orcs is threatening to leave the south in chaos. He also possesses the ring of Rivival and has lots of information about the world. You may have bought the Emberstone to Trailborn",
          "combat": 16,
          "defence": 28,
          "charisma": 32,
          "intelligence": 0,
          "maxHealth": 7,
          "currentHealth": 7,
          "status": "ready"
        },
        {
          "id": "fire-elemental-2",
          "name": "Fire elemental",
          "description": "a whirling fire elemental",
          "combat": 10,
          "defence": 25,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 7,
          "currentHealth": 7,
          "status": "ready"
        },
        {
          "id": "water-elemental-3",
          "name": "Water Elemental",
          "description": "a shimmering water elemental",
          "combat": 10,
          "defence": 25,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 7,
          "currentHealth": 7,
          "status": "ready"
        },
        {
          "id": "phoenix-4",
          "name": "phoenix",
          "description": "can teach fiery tornado to wizards if you offer It the emberstone instead of trading it in for gold.",
          "combat": 7,
          "defence": 0,
          "charisma": 14,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "book-of-wisdom-1",
          "name": "Book of Wisdom",
          "description": "Book of Wisdom - through a greater knowledge of history - increases intelligence to the user. Found in the library",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "boots-of-arcana-2",
          "name": "Boots of Arcana",
          "description": "Boots of Arcana - elemental boots that increase arcane - obtainable if you defeat Wizard trailborn",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "platelegs-of-galitor-3",
          "name": "Platelegs of Galitor",
          "description": "Platelegs of Galitor - Prize from the riddle chest. Increase defence “I have a bed but never sleep, I run forever, yet never weep. Men may drink but cannot eat, What am I?”",
          "effect": "+2",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "fiery-tornado-1",
          "name": "Fiery Tornado",
          "description": "Fiery Tornado - hits multiple enemies if they are close together. Usable only by wizards",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Back through Khazard southward. To defeat the threat at the abandoned mine.",
          "description": "Back through Khazard southward. To defeat the threat at the abandoned mine.",
          "targetId": "abandoned-mine"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Wizard tower"
      }
    },
    {
      "id": "haunted-wood",
      "name": "Haunted Wood",
      "campaign": "The Story",
      "status": "ready",
      "story": "A dense, twisted grey forest where the trees grow unnaturally close together, their bark blackened as if charred long ago. Mist clings to the ground, and faint whispers drift on the wind. Faint blue lights (will-o’-wisps) dance in the distance, luring the careless deeper. The air smells of damp earth, iron, and decay. The haunted forest is blocking trade to Eramore - from the rest of the northern kingdoms. Countless riches, food and mead would flow through if the curse was lifted. Event / Circumstance The wood is cursed — spirits of fallen warriors and beasts roam restlessly. A malignant force (the Wraith of Ashenroot) feeds on their torment. The players must either banish or destroy the wraith to calm the forest and reopen a safe trade route between villages. /// Eira Mosscloak lives in a small hovel at the end of the forest - she collects wild flowers, roots, herbs and mushrooms for her healing remedies. she will join the party if you pusuade her.",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "wraith-of-ashenroot-1",
          "name": "Wraith of Ashenroot",
          "description": "Once a dwarven war captain, slain in the forest during a long-forgotten battle. Now a spectral giant clad in rusted armor, bound to the roots of an ancient tree. - he can entangle players. Holding them still until they break out",
          "combat": 15,
          "defence": 25,
          "charisma": 0,
          "intelligence": 26,
          "maxHealth": 6,
          "currentHealth": 6,
          "status": "ready"
        },
        {
          "id": "spectral-wolf-2",
          "name": "spectral wolf",
          "description": "skeletel wolves, with bloodied fangs and bone claws. Undead. Can disappear and reappear in another location",
          "combat": 10,
          "defence": 23,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "spectral-wolf-3",
          "name": "spectral wolf",
          "description": "skeletel wolves, with bloodied fangs and bone claws. Undead. Can disappear and reappear in another location",
          "combat": 10,
          "defence": 23,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "eira-mosscloak-4",
          "name": "Eira Mosscloak",
          "description": "Will join the party and heal players - bit of a glass cannon though",
          "combat": 3,
          "defence": 22,
          "charisma": 23,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "spectral-wolf-5",
          "name": "spectral wolf",
          "description": "skeletel wolves, with bloodied fangs and bone claws. Undead. Can disappear and reappear in another location",
          "combat": 10,
          "defence": 23,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "spectral-wolf-6",
          "name": "spectral wolf",
          "description": "skeletel wolves, with bloodied fangs and bone claws. Undead. Can disappear and reappear in another location",
          "combat": 10,
          "defence": 23,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "spectral-chainmail-1",
          "name": "Spectral chainmail",
          "description": "Spectral chainmail - Gives a plus three to defence, dropped by the fallen wraith of ashenroot.",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "telescope-of-the-ashes-2",
          "name": "Telescope of the ashes",
          "description": "Telescope of the ashes. Allows you to see spirits, ghosts and aura's. Increases your perception for rogues and casanovas",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "gold-given-by-eira-if-she-survives-3",
          "name": "gold given by Eira if she survives",
          "description": "gold given by Eira if she survives and you've defeated the wraith.",
          "effect": "30 Gold",
          "state": "hidden"
        },
        {
          "id": "healing-potion-4",
          "name": "Healing potion",
          "description": "Healing potion - Eira will give you before the battle.",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "onward-to-the-great-city-of-eramore-5",
          "name": "Onward to the great city of Eramore!",
          "description": "Onward to the great city of Eramore! Time to tell the elven king that you've cleansed the forest of the wraith that was haunting it.",
          "effect": "East to the enchanted forest. There might be more work from the wood elves there.",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "wraithstep-1",
          "name": "Wraithstep",
          "description": "Wraithstep - allows the player to disengage with enemies or dash out of combat twice per turn. - rogue/warrior",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Onward to the great city of Eramore! Time to tell the elven king that you've cleansed the forest of the wraith",
          "description": "Onward to the great city of Eramore! Time to tell the elven king that you've cleansed the forest of the wraith that was haunting it.",
          "targetId": "eramore"
        },
        {
          "label": "East to the enchanted forest. There might be more work from the wood elves there.",
          "description": "East to the enchanted forest. There might be more work from the wood elves there.",
          "targetId": "enchanted-forest"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "haunted wood"
      }
    },
    {
      "id": "enchanted-forest",
      "name": "Enchanted forest",
      "campaign": "The Story",
      "status": "ready",
      "story": "The enchanted forest, silvery moonlight disperses through golden oak trees. There is a strong aura of nature magic in the air. Small pools of crystal clear water dot the ground between the trees. /// As you enter the forest - you here soft music coming through the trees ahead of you. A golden light flickers from an area in the distance. Upon entering the opening, you find a singing elf, Mooncaller Dryas. // The Forest is inhabited by a group of Elf Druids. Clad in green leaf tunics, golden circlet and elegant white robes. They are pilgrims from Eramore who are leaving the great elven city and seeking a peaceful life elsewhere, tired of the fighting. // In order to meet the druid elf leader. The team must pass a series of intelligence questions given by Mooncaller dryas. Each player rolls to see what question they receive. Once the players are through, they will be awarded the Druids looking glass /// Upon meeting the Earthwarden. they will task you with resolving a dispute at portown - they wish to board a ship there to make for the lands beyond. But cannot since the city is in turrmoil. //",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "earthwarden-leaff-1",
          "name": "Earthwarden Leaff",
          "description": "cloacked in green robes of silk and gold. The Head druif of the Eramore Pilgrims.",
          "combat": 7,
          "defence": 0,
          "charisma": 26,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "freya-greenseer-2",
          "name": "Freya Greenseer",
          "description": "Female druid, reads misty visions of the future.",
          "combat": 8,
          "defence": 0,
          "charisma": 26,
          "intelligence": 0,
          "maxHealth": 3,
          "currentHealth": 3,
          "status": "ready"
        },
        {
          "id": "mooncaller-dryas-3",
          "name": "Mooncaller Dryas",
          "description": "Games master of elven clan. Red and yellow jesters outfit. Hat made of peacock feathers",
          "combat": 2,
          "defence": 0,
          "charisma": 30,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "oakfather-twig-4",
          "name": "Oakfather twig",
          "description": "Healing druid, crusty haired green and earthy brown robes. sells herbs to heal players",
          "combat": 2,
          "defence": 16,
          "charisma": 0,
          "intelligence": 24,
          "maxHealth": 6,
          "currentHealth": 6,
          "status": "ready"
        },
        {
          "id": "flamekeeper-rook-5",
          "name": "Flamekeeper Rook",
          "description": "firebending elf - ex-captain of the Eramore military.",
          "combat": 12,
          "defence": 24,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "book-of-wisdom-1",
          "name": "Book of Wisdom",
          "description": "Book of Wisdom - Available at the druids sanctum. Increases intelligence. - Costs 30 gold",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "druids-looking-glass-2",
          "name": "Druids looking glass",
          "description": "Druids looking glass - highlights objects that are hard to see or hidden. Increases perception of a character",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "bow-of-eramore-3",
          "name": "Bow of Eramore",
          "description": "Bow of Eramore - increases combat for hunters. Given to the party after clearing out portown.",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "healing-herbs-sold-by-the-oakfather-druid-4",
          "name": "Healing herbs sold by the Oakfather druid.",
          "description": "Healing herbs sold by the Oakfather druid. - 10 gold",
          "effect": "Heal 2 life",
          "state": "hidden"
        },
        {
          "id": "east-onward-to-port-royale-5",
          "name": "East onward to Port Royale",
          "description": "East onward to Port Royale - the Pirate city. After Leaff asks you to clear the port",
          "effect": "West to Eramore.",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "flamekeeper-rook-will-join-your-party-if-you-lliberate-port-royale-as-a-party-member-if-you-decide-to-invade-orc-town-1",
          "name": "Flamekeeper Rook will join your party if you lliberate Port Royale as ",
          "description": "Flamekeeper Rook will join your party if you lliberate Port Royale as a party member if you decide to Invade Orc-town",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "East onward to Port Royale - the Pirate city. After Leaff asks you to clear the port",
          "description": "East onward to Port Royale - the Pirate city. After Leaff asks you to clear the port",
          "targetId": "port-royale"
        },
        {
          "label": "West to Eramore.",
          "description": "West to Eramore.",
          "targetId": "eramore"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Enchanted forest"
      }
    },
    {
      "id": "port-royale",
      "name": "Port Royale",
      "campaign": "The Story",
      "status": "ready",
      "story": "A sprawling harbor city, half-built on creaking wooden docks and half on crumbling stone streets. Salty air mixes with smoke from taverns and shipyards. Pirate flags hang from rigging, and the sound of gulls is broken by drunken shanties. The city is ruled less by law and more by whichever pirate captain’s ship is currently anchored at the main dock // The town is engulfed in a fued between two pirate lords, Rorik - Orc lord, and Selene the Elven pirate queen. There factions are splayed out across the town. Everything is in turmoil. As you enter town, you stumble across an argument between two orcs and two elven pirates. They will both attempt to recruit you for their fight. If you refuse. the port town will certainly turn on you. A gift from the faction you choose - the bandoliers. // You're sent out on a rickety wooden boat into battle on the waves. // The battle starts as you are either attached by the sea sprites or the Orcshark. // Defeating whichever lord you chose to fight - will grant you one ability.",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "captain-rorik-1",
          "name": "Captain Rorik",
          "description": "Half-orc pirate lord with scarred tusks, known for a crimson smile. Commands the ship The Widow’s Fang - drops the pirates charm when killed.",
          "combat": 16,
          "defence": 24,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 5,
          "currentHealth": 5,
          "status": "ready"
        },
        {
          "id": "selene-tidecaller-2",
          "name": "Selene Tidecaller",
          "description": "Elven pirate queen. Captain of the Whitesail. White ghostlike skin, red hair and devilish horns.",
          "combat": 16,
          "defence": 24,
          "charisma": 23,
          "intelligence": 0,
          "maxHealth": 5,
          "currentHealth": 5,
          "status": "ready"
        },
        {
          "id": "orc-pirates-3",
          "name": "Orc Pirates",
          "description": "x5",
          "combat": 12,
          "defence": 22,
          "charisma": 0,
          "intelligence": 2,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "elven-pirates-4",
          "name": "Elven pirates",
          "description": "X5",
          "combat": 12,
          "defence": 22,
          "charisma": 0,
          "intelligence": 4,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "sea-sprites-x4-5",
          "name": "Sea sprites x4",
          "description": "sea creatures, that swing from the elven ships, shooting spirit arrows.",
          "combat": 10,
          "defence": 21,
          "charisma": 3,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "the-orcshark-6",
          "name": "The Orcshark",
          "description": "A Green, scarred, vicious Orcshark - Capable of knocking the boat and chewing through the hull.",
          "combat": 14,
          "defence": 26,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "advanced-healing-potion-1",
          "name": "Advanced healing potion",
          "description": "Advanced healing potion - found on your boat with her perception.",
          "effect": "Heal 2 life",
          "state": "hidden"
        },
        {
          "id": "pirates-charm-2",
          "name": "Pirates charm",
          "description": "Pirates charm - a blackgold medallion that gives the wearer a charisma boost. Found on Roriks body.",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "selene-s-letter-3",
          "name": "Selene's letter",
          "description": "Selene's letter - Give it to Owlkeeper Byaz, she'll give you gold for your trouble.",
          "effect": "10 Gold",
          "state": "hidden"
        },
        {
          "id": "pirates-bandoliers-4",
          "name": "Pirates Bandoliers",
          "description": "Pirates Bandoliers - Leather strip engraved with the jolly roger. Defensive bonuses for Casanova's and rogues. Given by whichever faction you side with.",
          "effect": "+2",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "orcbane-cry-1",
          "name": "Orcbane cry",
          "description": "Orcbane cry - Reduces defence of all enemies in the area by 2. learnt from Selene when defeating Rorik",
          "state": "hidden"
        },
        {
          "id": "fear-2",
          "name": "Fear",
          "description": "Fear - Shriek, strikes fear in the hearts of all enemies, reducing their defence by 2 - learnt from Rorik when defeating Selene",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "The Story",
        "sheet": "Port Royale"
      }
    },
    {
      "id": "eramore",
      "name": "Eramore",
      "campaign": "The Story",
      "status": "ready",
      "story": "You arrive in Eramore as the Elven King Gal-Halan is preparing to assault the Orc capital of Orctown. Elven archers practice in the ranges, leaf-bladed weapons are being produced by the elven smiths and gold trimmed armour is being forged and embossed with the white dove of Eramore. // The streets are alive with industry. Upon arriving you see a large red tent inside the courtyard of the main gatehouse with the elven runes for 'conscription' woven into the fabric. // The elven brothel lines the main market square and a singing hall erupts with sounds as you hear the ballads and laments of war coming from the open windows. A Hearty tavern sits in view of the main gate and a tall wooden tower with birds flying in an out of its highest windows. // Upon meeting Gal-Halan. He will first task you with clearing the abandoned mine. His forces will then allow you to access to royal armoury. After clearing the mine the elves meet you on the other side - ready to siege Orctown.",
      "dmNotes": "Elvden tavern - Flamekeeper Rook. Elven brothel - Raven. Elven palace - Gal-Halan. Owlkeepers tower - owlkeeper byaz Healing tent -",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "gal-halan-1",
          "name": "Gal-Halan",
          "description": "High-King of th Elves. Clad head to toe in intricate golden armour. Planning the seige of Orctown",
          "combat": 20,
          "defence": 0,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 10,
          "currentHealth": 10,
          "status": "ready"
        },
        {
          "id": "flamekeeper-rook-maybe-2",
          "name": "Flamekeeper Rook (Maybe)",
          "description": "If you cleared Port Royale. He will be in the elven tavern waiting for you.",
          "combat": 11,
          "defence": 24,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "raven-3",
          "name": "Raven",
          "description": "dazzlingly beautiful elf in the brothel, awaiting on a package from Groll - the Bands of charming.",
          "combat": 3,
          "defence": 0,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "owlkeeper-byaz-4",
          "name": "Owlkeeper Byaz",
          "description": "communication keeper. Uses his owls to send letters across the continent, specifically the wizard tower and Monastery.",
          "combat": 2,
          "defence": 0,
          "charisma": 0,
          "intelligence": 21,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "zealle-5",
          "name": "Zealle",
          "description": "Elven healer - will heal the partuy 1 to full health after clearing the abandoned mine.",
          "combat": 2,
          "defence": 0,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "orcbane-hilt-1",
          "name": "Orcbane hilt",
          "description": "Orcbane hilt - gold trimmed hilt, attaches to any melee weapon. Usable only by warriors and berserkers",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "galitors-quiver-2",
          "name": "Galitors Quiver",
          "description": "Galitors Quiver - mystical quiver that guides your shots with the eye of freitus. Increases hunter damage.",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "cloth-of-eramore-3",
          "name": "Cloth of Eramore",
          "description": "Cloth of Eramore - magicval elven cloth that attaches to staves, staffs and wands. Increaseing their power.",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "elvish-heavy-armour-4",
          "name": "Elvish heavy armour",
          "description": "Elvish heavy armour - increases defence of the wearer.",
          "effect": "+3",
          "state": "hidden"
        }
      ],
      "abilities": [],
      "exits": [
        {
          "label": "Onward to the Abandoned Mine.",
          "description": "Onward to the Abandoned Mine.",
          "targetId": "abandoned-mine"
        }
      ],
      "source": {
        "workbook": "The Story",
        "sheet": "Eramore"
      }
    },
    {
      "id": "abandoned-mine",
      "name": "Abandoned mine",
      "campaign": "The Story",
      "status": "ready",
      "story": "The abandoned mine. Orcish Machinery lays in ruins, bent and blackened seigeworks ley hewn across the muddy entrance to the mine. Inside, rotton wood barely holds open the shaft. Two eery blue flamed sconces line the tunnel walls. Faint noises of howling emnanate from outside. // As you enter - it's pitch black inside, you see very little. But you feel an evil force bringing forward visions of your past. Each player goes through an ordeal which they explain themselves. // Once the players overcome their nightmares. They find themselves in a ritual sanctum, the centre of which - is a lecturn and a red glowing book. (book of the accult) // behind the lecturn is a large wooden door to the mine pit - surrounded by iron rails for mine carts, cranes and broken wooden boxes. Then - The shadowy figures of skeletal beasts come into view and the battle begins.",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "tormented-demon-1",
          "name": "Tormented Demon",
          "description": "A Black inky outline of what looks like a giant three headed wolf. Sharp gnashing teeth - blood red eyes",
          "combat": 16,
          "defence": 26,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 6,
          "currentHealth": 6,
          "status": "ready"
        },
        {
          "id": "skeletal-archer-2",
          "name": "Skeletal Archer",
          "description": "Skeleton archers, yellowed bones.",
          "combat": 13,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "skeletal-hound-3",
          "name": "Skeletal hound",
          "description": "wolf looking hounds made only of bones, marbled black eyes",
          "combat": 13,
          "defence": 22,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "skeletal-archer-4",
          "name": "Skeletal Archer",
          "description": "Skeleton archers, yellowed bones.",
          "combat": 13,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "skeletal-hound-5",
          "name": "Skeletal hound",
          "description": "wolf looking hounds made only of bones, marbled black eyes",
          "combat": 13,
          "defence": 22,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "wizard-trailborn-6",
          "name": "Wizard Trailborn",
          "description": "Speaks to you telepathically. After defeating the Demon. Teaching you Demonic Rage",
          "combat": 0,
          "defence": 0,
          "charisma": 32,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "blades-of-midnight-1",
          "name": "Blades of Midnight.",
          "description": "Blades of Midnight. - pair of demonic daggers, hewn of obsidion that increase combat for fogues",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "book-of-the-accult-2",
          "name": "Book of The Accult",
          "description": "Book of The Accult - Increases intelligence",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "advanced-healing-potion-3",
          "name": "Advanced Healing potion",
          "description": "Advanced Healing potion - Dropped by a skeletal archer",
          "effect": "Heal 2 life",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "demonic-rage-1",
          "name": "Demonic Rage",
          "description": "Demonic Rage - Allows Berserkers to go into a fit of rage - rolling with advantage for 1 battle",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "The Story",
        "sheet": "Abandoned mine"
      }
    },
    {
      "id": "orctown",
      "name": "Orctown",
      "campaign": "The Story",
      "status": "draft",
      "story": "",
      "dmNotes": "",
      "sessionNotes": "",
      "enemies": [],
      "discoveries": [],
      "abilities": [],
      "exits": [],
      "source": {
        "workbook": "The Story",
        "sheet": "Orctown"
      }
    },
    {
      "id": "the-hidden-cave",
      "name": "The Hidden Cave",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "As your eyes begin to adjust, or you light up the cave - you hear the chinking of chains, rustling of life. // Perception you see two people chained up to the wall. They look like they've been captured and stashed her in this strange room. // If they roll an intelligence check, they find that a portal opened up in their worlds and they arrived her and were captured by Rock Goblins.",
      "dmNotes": "As you talk to these new adventurers. You hear the echo'y cackling of what, with perception you hear as Rock Goblins. The sound is coming from another tunnel at the end of the small room. The rustling of metal, stone and shuffling of feet gets louder and louder as they get closer. Faint red flickering light from the tunnel gets brighter and brighter. Battle time // there are chains on the walls - flaming torches, acid pools and a mine cart.\n\nUpon exiting the cave, Thimble will be waiting for you. His This was all a test, he bought you adventurers here to defeat the evil Wizard of this land. The Wizard Surugo resideds in the sanctum of the accult. There is a darkness over the land, that is causing people to go mad in their sleep. Some have evil dreams, Others don't even wake up.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "rock-goblin-chief-1",
          "name": "Rock Goblin Chief",
          "description": "Slightly taller Goblin, wielding twin axes, rusted and jagged edged. Big sabre teeth. Fur leapard cloak",
          "combat": 5,
          "defence": 15,
          "charisma": 20,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "thimble-2",
          "name": "Thimble",
          "description": "The faun, you met before - this time more magical and nimble.",
          "combat": 11,
          "defence": 22,
          "charisma": 32,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "rock-goblin-3",
          "name": "Rock Goblin",
          "description": "Small green goblin wielding a goblin shield and bone dagger. Small helmets carved from human skulls.",
          "combat": 4,
          "defence": 16,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "rock-goblin-4",
          "name": "Rock Goblin",
          "description": "Small green goblin wielding a goblin shield and bone dagger. Small helmets carved from human skulls.",
          "combat": 4,
          "defence": 16,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "rock-goblin-5",
          "name": "Rock Goblin",
          "description": "Small green goblin wielding a goblin shield and bone dagger. Small helmets carved from human skulls.",
          "combat": 4,
          "defence": 16,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "rock-goblin-6",
          "name": "Rock Goblin",
          "description": "Small green goblin wielding a goblin shield and bone dagger. Small helmets carved from human skulls.",
          "combat": 4,
          "defence": 16,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "rock-goblin-7",
          "name": "Rock Goblin",
          "description": "Small green goblin wielding a goblin shield and bone dagger. Small helmets carved from human skulls.",
          "combat": 4,
          "defence": 16,
          "charisma": 0,
          "intelligence": 10,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "advanced-health-potion-found-on-the-body-of-the-goblin-chief-1",
          "name": "Advanced Health Potion found on the body of the Goblin chief",
          "description": "Advanced Health Potion found on the body of the Goblin chief",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "goblin-rock-bone-gauntlets-x3-increases-defence-2",
          "name": "Goblin Rock bone Gauntlets x3 (Increases Defence)",
          "description": "Goblin Rock bone Gauntlets x3 (Increases Defence)",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "gold-given-to-you-by-fimble-3",
          "name": "Gold given to you by Fimble",
          "description": "Gold given to you by Fimble. For coming to this land to help cleanse it.",
          "effect": "30 gold",
          "state": "hidden"
        }
      ],
      "abilities": [],
      "exits": [
        {
          "label": "Onwards, up the pathway out of the cave. Opening up into a land that looks somewhat similar and yet none of yo",
          "description": "Onwards, up the pathway out of the cave. Opening up into a land that looks somewhat similar and yet none of you have ever been here before…",
          "targetId": ""
        }
      ],
      "source": {
        "workbook": "the side quest",
        "sheet": "The Cave"
      }
    },
    {
      "id": "the-old-wood",
      "name": "The Old Wood",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "The old wood is a dark, rotting webcovered woodland. You see very little life - other than a few bugs, worms, millipeeds and such. At the entrance, you see a signpost that says. 'This way to the Church of galitor - Where adventurers can learn new skills, arm themselves and earn gold!' // You see a blind monk, sitting ont he ground by the sign. He asks you to guide him through the woods as he tries to get to the church of Galitor // As you enter deeper into the woods. You find yourself disorientated and trapped in webbing. everyone rolls to see if they are trapped in the webbing.",
      "dmNotes": "A GIANT spider, Malice - queen of spiders crawls down from above you - weaving in and out of the trees. Sensing as you disturb the spider web whilst struggling to escape. She has a venomous effect and will make anyone who gets venomed have to roll with disadvantage. // high perception and you will see a pile of old fireworks.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "malice-queen-of-spiders-1",
          "name": "Malice - queen of spiders",
          "description": "Giant spider queen. 20 eyes, long black legs and a red pattern on its back. If he gets close to players he will attempt to inflict venom on them. If you kill all the hatchlings. She will spawn three more.",
          "combat": 10,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 6,
          "currentHealth": 6,
          "status": "ready"
        },
        {
          "id": "thrall-blind-monk-2",
          "name": "Thrall - Blind monk",
          "description": "Brown dirty robes. Bald headed half elf. Gifted in the arts of nature. Seeks passage through the old wood to the chuch of Galitor. Everything is not as it seems though.",
          "combat": 2,
          "defence": 14,
          "charisma": 23,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "hanging-spiderling-3",
          "name": "Hanging spiderling",
          "description": "small black spider, hanging from the webbing and trees above the clearing.",
          "combat": 5,
          "defence": 15,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "hanging-spiderling-4",
          "name": "Hanging spiderling",
          "description": "small black spider, hanging from the webbing and trees above the clearing.",
          "combat": 5,
          "defence": 15,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "hanging-spiderling-5",
          "name": "Hanging spiderling",
          "description": "small black spider, hanging from the webbing and trees above the clearing.",
          "combat": 5,
          "defence": 15,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "the-dead-body-of-a-previous-group-1",
          "name": "The dead body of a previous group",
          "description": "The dead body of a previous group of adventurers caught in webbing will reveal a couple of healing potions x2",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "gold-on-the-dead-adventurers-body-2",
          "name": "gold on the dead adventurers body",
          "description": "gold on the dead adventurers body",
          "effect": "20 gold",
          "state": "hidden"
        },
        {
          "id": "malice-s-spider-fang-3",
          "name": "Malice's Spider fang",
          "description": "Malice's Spider fang - Attach to weapon to increase its combat",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "divine-robes-4",
          "name": "Divine Robes",
          "description": "Divine Robes - If you kill Thrall, or Thrall dies - you can take his robes. Increases, charisma, intelligence and perception",
          "effect": "+1",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "venom-1",
          "name": "Venom",
          "description": "Venom - soak your blade, or bow in a vial of vemon collected from Malice and deal poison damage to an enemy. Single use only",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "Old Wood"
      }
    },
    {
      "id": "the-halfway-house",
      "name": "The Halfway House",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "The halfway house, is a quaint little building. Bigger than a traditional house though. Tavernlike in its appearance with a large communal drinking area in the downstairs. Sweet smelling wine, rich food coming out from the kitchen. A plump bartender stands, polishing glassware and serving pints of ale to various patrons. Upstairs are beds for for sleeping and getting a little well earned rest away from the troubles of the road. // Gob, the bartender has heard about the mysterious curse that is driving people mad or causing them not to wake up. In fact he has somebody upstairs right now - who has been sleeping for two days. He's not been able to wake them up.",
      "dmNotes": "As you try and make your way upstairs You find yourself pitted against another group of Adventurers three! They call themselves the Three Muscatears. They have been tasked with searching out and hunting a band of mercenaries calling themselves 'adventurers.' They believe you are the ones who have cursed the people of their homeland. // Half way through the battle, one of them will grab a patron and hold. a knife to their throat // If charisma'd they will tell you they were sent by the Wizard that protects these lands!",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "gob-the-barkeep-1",
          "name": "Gob - The barkeep",
          "description": "A Rather rotund faun, red and gold waistcoat, small curling horns and butto nose",
          "combat": 3,
          "defence": 15,
          "charisma": 25,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "furris-2",
          "name": "Furris",
          "description": "A cat person, long pointed hat with a feather, pointing out. Whiskers. A long slender blade",
          "combat": 8,
          "defence": 16,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "catania-3",
          "name": "Catania",
          "description": "Mystical cat woman, plue magic robes with white trim. Wand in one hand, book of wisdom in the other.",
          "combat": 7,
          "defence": 17,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "meowler-4",
          "name": "Meowler",
          "description": "A big muscular cat person. Dressed in leapard print fur armour and wielding a two handed axe. Berserker Blinded",
          "combat": 5,
          "defence": 20,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "the-sleeping-man-5",
          "name": "The sleeping man",
          "description": "A man, looks young and healthy - clearly a bard or merchant. His clothes do not say fighter. But they do say wealthy. He will mumble things about a wizard. If you wake him. He will tell you about his dream. He has an animals face..",
          "combat": 6,
          "defence": 10,
          "charisma": 18,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "patron-6",
          "name": "Patron",
          "description": "A patron who could know about the curse. Or the Cave that they came from. Also selling Focus powder",
          "combat": 6,
          "defence": 21,
          "charisma": 0,
          "intelligence": 15,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "bard-7",
          "name": "Bard",
          "description": "Singing bard in the tavern, tells a story about a group of adventurers who cleansed a graveyard from a wicked curse.",
          "combat": 7,
          "defence": 20,
          "charisma": 0,
          "intelligence": 20,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "bar-maid-8",
          "name": "bar maid",
          "description": "velumptous bar maid, pretty ginger curly hair - white and blue lederhosen",
          "combat": 2,
          "defence": 13,
          "charisma": 20,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "book-of-wisdom-stolen-from-catania-1",
          "name": "Book of wisdom, stolen from Catania",
          "description": "Book of wisdom, stolen from Catania. Increases arcane",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "focus-powder-if-you-enter-the-bathroom-2",
          "name": "Focus powder, if you enter the bathroom",
          "description": "Focus powder, if you enter the bathroom - or approach a patron, they might try sell you some. Increases perception. For 10 gold",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "bed-to-sleep-in-increases-health-by-1-3",
          "name": "Bed to sleep in, increases health by 1",
          "description": "Bed to sleep in, increases health by 1. Only works if you defeat the muscatears. As all the rooms are full.",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "furris-sheet-music-4",
          "name": "Furris' sheet music",
          "description": "Furris' sheet music - allows you to play better music. Also increases you charisma. Given by the bard. Casanova's only",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "furris-guantlets-5",
          "name": "Furris' guantlets",
          "description": "Furris' guantlets - metal gloves guilded with the sign of a cat. Increase combat",
          "effect": "+1",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "frenzy-1",
          "name": "Frenzy",
          "description": "Frenzy - Allows the player to go into a frenzy, always on the attack but always rolling advantage. Learnt by killing meowler Warriors/berserkers only",
          "state": "hidden"
        }
      ],
      "exits": [
        {
          "label": "Onward to Fantasy high. Or back to take a right turn into the old wood.",
          "description": "Onward to Fantasy high. Or back to take a right turn into the old wood.",
          "targetId": "the-old-wood"
        }
      ],
      "source": {
        "workbook": "the side quest",
        "sheet": "The Halfway House"
      }
    },
    {
      "id": "church-of-galitor",
      "name": "Church of Galitor",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "The Church of Galitor - Pristine white chapel with beautiful stained glass windows and well kept gardens around its edges. Monks tending to the flowers and allotments. /// As you enter, you are greeted by the Bishop Reldo. He will thank you for bringing Thrall (Or attempting to) safely back to the church. Invite you for dinner, show you around and introduce you to the other Monks. // At dinner you will find yourself sleepy and eventually pass out. Waking up in a dungeon beneath the church - bones of other adventurers scattered around the floor. A large portcullis guarding an exit // Intelligence rolls will put the party agains eachother - with two of the group seemingly under some sort of hypnosis. // The monks of Galitor think, in order to lift the curse. they must sacrifice warriors in battle, as an offering to the great god Galitor",
      "dmNotes": "In order to escape, you must subdue the others without killing them and escape the dungeon. You see a small grate in the center of the room which will allow you to exit through the sewer tunnels. Upon exiting the arena - Farry will meet you, saying he wants to help you escape. You may try to take him with you - where he will ask to be accompanied to the druids grove. // The tunnels are filled with slime flans. blocking your escape - you must fight through",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "bishop-reldo-1",
          "name": "Bishop Reldo",
          "description": "Archmonk of the Church of Galitor. Head of the cult of Galitor",
          "combat": 7,
          "defence": 0,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "zia-teethling-monk-2",
          "name": "Zia - Teethling monk",
          "description": "Sort of humanoid demon, says she has converted over to the light.",
          "combat": 0,
          "defence": 0,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "tuck-the-templar-merchant-3",
          "name": "Tuck - the Templar merchant.",
          "description": "Tortugan (Turtle person) monk who deals in wares and weapons.",
          "combat": 9,
          "defence": 19,
          "charisma": 27,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "farry-young-monk-4",
          "name": "Farry - Young monk",
          "description": "Young halfling Recently indoctrinated into the cult. Is wary of whats going on and may help you try to escape before you become trapped. Works in the gardens tending the rose bushes",
          "combat": 4,
          "defence": 20,
          "charisma": 19,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "slime-flan-5",
          "name": "Slime Flan",
          "description": "A globular ball of slime that oozes through sewers spitting its stinky slime onto any wandering passers by.",
          "combat": 6,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "slime-flan-6",
          "name": "Slime Flan",
          "description": "A globular ball of slime that oozes through sewers spitting its stinky slime onto any wandering passers by.",
          "combat": 6,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "slime-flan-7",
          "name": "Slime Flan",
          "description": "A globular ball of slime that oozes through sewers spitting its stinky slime onto any wandering passers by.",
          "combat": 6,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "slime-flan-8",
          "name": "Slime Flan",
          "description": "A globular ball of slime that oozes through sewers spitting its stinky slime onto any wandering passers by.",
          "combat": 6,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "slime-flan-9",
          "name": "Slime Flan",
          "description": "A globular ball of slime that oozes through sewers spitting its stinky slime onto any wandering passers by.",
          "combat": 6,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "holy-knife-of-galitor-1",
          "name": "Holy knife of Galitor",
          "description": "Holy knife of Galitor - increases combat. Also Rolls with advantage on undead - 20 gold",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "healing-potion-available-from-tuck-2",
          "name": "Healing potion available from Tuck",
          "description": "Healing potion available from Tuck - 10 Gold",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "tailored-waistcoat-3",
          "name": "Tailored waistcoat",
          "description": "Tailored waistcoat - golden trim. Increases charisma 10 gold",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "gold-reward-for-safely-delivering-thrall-home-4",
          "name": "Gold reward for safely delivering Thrall home.",
          "description": "Gold reward for safely delivering Thrall home.",
          "effect": "20 gold",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "holy-lightning-1",
          "name": "Holy lightning",
          "description": "Holy lightning - Delivers a holy shot of lighting that can hit multiple enemies in close proximity. Wizards only",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "Church of Galitor"
      }
    },
    {
      "id": "fantasy-high",
      "name": "Fantasy High",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "As you walk toward the large building with the embossed letters of 'Fantasy high' arhing over the double doorway that sits at the top of a set of steps. A slender humanoid Owl in a tweed suit rushed up to you, flustered and ruffled feather. \"Oh I'm so glas you're here. You must be the replacements, thank goodness thank goodness.\" He mistakes you for substitue teahers!",
      "dmNotes": "There are two classes that need teaching. One is adventuring gymnastics the other is defence against evil. You have to split up into pairs and teach the classes in order to get paid /// Each class will be filled with different types of students, jocks - nerds - pretty girls - stoners - stupid kids - bullies - lickarses etc // The adventuring gym is outside, there is an extensive jungle gym style set up. Robes, ladders, rocky dungeon walls, flame pits. The Defence against evil class is a classroom in which you're teaching the class how to deal with....\n\nAt lunch. The school is attacked by a giant anthropomorphic pie that can lift it's lid and put you inside. You have to fight to defend it. - It turns out that one of the students dropped a page of an arcane spellbook in the pie filling as a prant. If you find the arcane page, it increases your arcana by 1 // Perception you will find barrels of extreme hot sauce' with flame logos on them.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "professer-hoot-1",
          "name": "Professer Hoot",
          "description": "The vice principle of Fantasy High. Owlperson.",
          "combat": 5,
          "defence": 12,
          "charisma": 28,
          "intelligence": 0,
          "maxHealth": 3,
          "currentHealth": 3,
          "status": "ready"
        },
        {
          "id": "zlard-farlo-2",
          "name": "Zlard Farlo",
          "description": "Cool dude, minatour ina sort of medieval letterman jacket. older than the other kids - definitely held back. Bit of a trouble maker.",
          "combat": 4,
          "defence": 12,
          "charisma": 19,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "nancy-skyler-3",
          "name": "Nancy Skyler",
          "description": "The school prom queen and boyfriend of Zlard. Very pretty, an absolute bitch.",
          "combat": 4,
          "defence": 12,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "the-pie-guy-4",
          "name": "The Pie Guy",
          "description": "Reproduces potato sprites by lifting it's pastry lid. At half health it will grab and eat one of the players.",
          "combat": 8,
          "defence": 22,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "potatoe-sprite-5",
          "name": "Potatoe sprite",
          "description": "A small potato with wings, holding a ladle of gravy - ranged attacks",
          "combat": 5,
          "defence": 16,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "bombo-gutenhand-6",
          "name": "Bombo Gutenhand",
          "description": "the class nerd, skinny, spectacled goblin ridiculously bad at sports. Picked on by the others",
          "combat": 1,
          "defence": 13,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "nurse-joy-7",
          "name": "Nurse Joy",
          "description": "Class nurse - she can do basic first aid - She will tell you about the curse. People having nightmares, turning into animals in their dreams",
          "combat": 0,
          "defence": 9,
          "charisma": 23,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "maureen-the-dinner-lady-8",
          "name": "Maureen the dinner lady.",
          "description": "a stout rotund older lady who is serving up pie and potatoes for lunch",
          "combat": 2,
          "defence": 15,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "potatoe-sprite-9",
          "name": "Potatoe sprite",
          "description": "A small potato with wings, holding a ladle of gravy",
          "combat": 5,
          "defence": 16,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "potatoe-sprite-10",
          "name": "Potatoe sprite",
          "description": "A small potato with wings, holding a ladle of gravy",
          "combat": 5,
          "defence": 16,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "teaching-scroll-1",
          "name": "Teaching Scroll",
          "description": "Teaching Scroll - Increases your intelligence (Found in the teachers lounge)",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "confiscated-green-herbs-you-will-see-two-2",
          "name": "Confiscated green herbs, You will see two",
          "description": "Confiscated green herbs, You will see two students passing this around. In the hallway. You can confiscate it. Reduces your intelligence, perception and charisma for one day",
          "effect": "-1",
          "state": "hidden"
        },
        {
          "id": "payment-for-your-day-teaching-at-fantasy-3",
          "name": "Payment for your day teaching at Fantasy",
          "description": "Payment for your day teaching at Fantasy high (each) reward from professor hoot. Princibles office.",
          "effect": "10 gold",
          "state": "hidden"
        },
        {
          "id": "hand-catapult-wrist-rocket-4",
          "name": "Hand catapult wrist rocket",
          "description": "Hand catapult wrist rocket - confiscated from a student. Increases combat for warriors & hunters and rogues",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "advanced-healing-potions-x-2-5",
          "name": "Advanced Healing potions x 2",
          "description": "Advanced Healing potions x 2 - Found In the nurses office",
          "effect": "Heal 2 Life",
          "state": "hidden"
        },
        {
          "id": "teaching-scroll-6",
          "name": "Teaching Scroll",
          "description": "Teaching Scroll - Increases your intelligence (Found in the headmasters office)",
          "effect": "+2",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "magic-hall-pass-1",
          "name": "Magic Hall pass",
          "description": "Magic Hall pass - Ability to turn invisible from enemy eyes. They will not focus on you. (reward for defeating the soup monster)",
          "state": "hidden"
        },
        {
          "id": "fire-blast-2",
          "name": "Fire blast",
          "description": "Fire blast - inredibly powerful fireball magic attack. Does double damaged to forest creatures and mammels. (Found in the libaray)",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "Fantasy High"
      }
    },
    {
      "id": "druids-grove",
      "name": "Druids Grove",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "A simple druid grove. Woven arched walkways, lined with ivy. A simple hut made of wood, moss and thatch. There is not much going on here. Just a space to rest, recover - learn new skills and buy herbs and potions. // Banadahn has a herbal mix which he is sure is staving off the curse. He's been having wild dreams lately though. because of the herbal mix",
      "dmNotes": "You also see Thimble here. He's chilling out with the Druid when you arrive. Smoking a pipe passing it around. When you arrive he is kinda surprised. You're still alive and kicking. He knew you'd be the right people. Thimble is just chilling here because he can't get home. The Wizards sanctum is blocking the way. // They offer no help imparticular. If you choose to smoke with them you will all have a dream - that will reveal that Thimble was once a tall handsome human wizard. // The dream will be corrupted by some evil curse set by Surugo and you hear his voice echo'ing. You will be transported to a dreamlike rose garden.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "hoolibahn-1",
          "name": "Hoolibahn",
          "description": "Crusty old druid, Long curly hair. Sells various things. Lives a passifist lifestyle - no bad omens. Just a cloud of smoke that always seems to be enveloping him.",
          "combat": 2,
          "defence": 22,
          "charisma": 22,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "thimble-2",
          "name": "Thimble",
          "description": "The faun, you met before - this time more magical and nimble. - It is reveales",
          "combat": 11,
          "defence": 22,
          "charisma": 32,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "love-3",
          "name": "Love",
          "description": "This seductive mistress is able to kiss players to get them to fight for her. They fall into a dream state and begin to",
          "combat": 8,
          "defence": 17,
          "charisma": 30,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "hate-4",
          "name": "Hate",
          "description": "A bullish minotuar, horned and blood lusted. Can make creaturs hate things, people or weapons etc. Forcing them to drop or avoid stuff.",
          "combat": 9,
          "defence": 22,
          "charisma": 0,
          "intelligence": 24,
          "maxHealth": 3,
          "currentHealth": 3,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "advanced-healing-herbs-for-sale-at-10-gold-1",
          "name": "Advanced Healing herbs for sale at 10 gold",
          "description": "Advanced Healing herbs for sale at 10 gold",
          "effect": "Heal 2 Life",
          "state": "hidden"
        },
        {
          "id": "deliver-a-package-of-focus-powder-to-2",
          "name": "Deliver a 'package' of focus powder to",
          "description": "Deliver a 'package' of focus powder to the barbarian chief in the arena. He'll pay you for it.",
          "effect": "20 gold",
          "state": "hidden"
        },
        {
          "id": "book-of-arcane-3",
          "name": "Book of arcane",
          "description": "Book of arcane - boosts ability. Costs 10 gold",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "druid-defender-gauntlets-4",
          "name": "Druid defender gauntlets",
          "description": "Druid defender gauntlets - increases defence. Given as a thankyou for delivering Farry to the Grove",
          "effect": "+2",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "druids-shield-1",
          "name": "Druids shield",
          "description": "Druids shield - cast shield on another player, protecting them from all damage. Found in a book in the druids bookshelf",
          "state": "hidden"
        },
        {
          "id": "demutatio-potion-2",
          "name": "Demutatio potion",
          "description": "Demutatio potion - returns a player back to human form if they have been Animorphed recently",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "Druids Grove"
      }
    },
    {
      "id": "barbarian-arena",
      "name": "Barbarian Arena",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "The Barbarian arena! A Wooden outpost, surrounded by longhalls, slate stone walls and camp fires. At the centre is a large wooden stadium almost. Layered seating surrounding a sandy pit in which the battle take place. Prizes await for the adventurers seeking glory!! The longer you last, the bigger the rewards.",
      "dmNotes": "Woodland sprites. Nature magic wielding fairies that fly around the arena shooting green enery at you.\n\nSiege spiker. A Huge dwarven siege machine that shoots spikes out from all angles. Tough to defeat - needs to be taken apart with intelligence rather than brute force.\n\nSkeleton hoard, Group of skeletons that form into one giant skeletal crawler once killed.\n\nFinal round, the Mountain Troll. A giant grey troll with iron chain around its neck is released into the arena. Big club, incredibyl thick hide - a little stupid",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "the-games-master-king-of-the-barbarians-1",
          "name": "The games master - King of the Barbarians.",
          "description": "",
          "combat": 0,
          "defence": 0,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "the-dwarven-siege-spiker-2",
          "name": "The Dwarven siege spiker.",
          "description": "A dwarven siege equipment. Big round metal casing with holes all around where spikes are released from.",
          "combat": 8,
          "defence": 0,
          "charisma": 0,
          "intelligence": 20,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "woodland-sprite-3",
          "name": "Woodland Sprite",
          "description": "Small green fairy with big green cat eyes.",
          "combat": 6,
          "defence": 19,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "woodland-sprite-4",
          "name": "Woodland Sprite",
          "description": "Small green fairy with big green cat eyes.",
          "combat": 6,
          "defence": 19,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "woodland-sprite-5",
          "name": "Woodland Sprite",
          "description": "Small green fairy with big green cat eyes.",
          "combat": 6,
          "defence": 19,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeletal-warrior-6",
          "name": "Skeletal warrior",
          "description": "sword wielding skeleton - Turns to form one giant skeletal crawler when all four are healed.",
          "combat": 0,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeletal-warrior-7",
          "name": "Skeletal warrior",
          "description": "sword wielding skeleton - Turns to form one giant skeletal crawler when all four are healed.",
          "combat": 0,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeletal-archer-8",
          "name": "Skeletal Archer",
          "description": "Crossbow wielding skeleton - Turns to form one giant skeletal crawler when all four are healed.",
          "combat": 0,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "skeletal-archer-9",
          "name": "Skeletal Archer",
          "description": "crossbow wielding skeleton - Turns to form one giant skeletal crawler when all four are healed.",
          "combat": 0,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "the-mountain-troll-10",
          "name": "The Mountain Troll",
          "description": "Tough. Will clobber anything within close range.",
          "combat": 9,
          "defence": 22,
          "charisma": 0,
          "intelligence": 2,
          "maxHealth": 5,
          "currentHealth": 5,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "healing-potions-for-sale-from-the-gladiators-1",
          "name": "Healing potions for sale from the gladiators",
          "description": "Healing potions for sale from the gladiators general store inside the preparation area - 10 gold",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "2-2",
          "name": "2",
          "description": "2. Sprites tail. Taken from one of the woodland sprites. Increases Arcana for wizards/hunters",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "1-3",
          "name": "1",
          "description": "1. Barbarian Horned helmet - iron helmet adorned with two minatour horns and boar fur. Increases defence",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "3-4",
          "name": "3",
          "description": "3. Blade of freezing. - For rogues, warriors, casanovas. Has a chance to freeze enemy, removing its next turn. Also increases combat.",
          "effect": "+2",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "4-valhalla-cry-1",
          "name": "4. Valhalla cry",
          "description": "4. Valhalla cry - Shout of the barbarian. Increases the defence of three players by 1",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "Barbarian Arena"
      }
    },
    {
      "id": "the-harbour",
      "name": "The Harbour",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "The Fishing village of Nautica. Wooden hovels covered in coral and barnacles, woven netting and seagulls flying above. The salty smell of the sea mixing in with the muddy ground of the land. Hungry citizens plague the streets as the fish have all dried up because a huge sea kraken has taken up residence just of the shore and is terrorising the boats and driving the fish away down the coast. There are also people here going mad, not waking up and having nightmares because of the curse. // Inn, Borthel, book store, Giant ship full of cannons and holes moored up in drydock. / You see an inn by the gatehouse entrance, candles flickering in the windows. Inside the innkeep is a gaunt looking half-merperson and a girl dancing (scalennia) although there is only weak, hungry looking patrons brely watching her. // The Innkeep or Scalennia will both tell you whats happening - and task you with killing the kraken in exchange for a prize from the cheif. You should make your way to the Nautilus..",
      "dmNotes": "The Nautilus is a large ship with crimson sails docked in the port. Captained by Nautilus himself and crewed by a misfit crew of merpeople, shell armour, coral weaponary. Make your way onto the ship and seek a reward for killing the Kraken. He will tell you of an old captian on the dock who might just be crazy enough to take you there.\n\nThe battle with the Kraken will involve it emerging and diving throughout the battle, grabbing players and throwing them in the water. The players will have to help eachother out of the water as they fight.",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "innkeep-barni-1",
          "name": "Innkeep - barni",
          "description": "Owner and proprieter of the inn. You can tell his half human, half merperson",
          "combat": 2,
          "defence": 17,
          "charisma": 24,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "scalennia-2",
          "name": "Scalennia",
          "description": "Dancing merwoman, blue scales and shell bikini. Knows a weakness for the kraken. But it will be hard to get it out of her. 20 gold",
          "combat": 2,
          "defence": 17,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "crabs-3",
          "name": "Crabs",
          "description": "Crusty old captain of a retired frigate from the war. The ship has a rusting harpoon gun at the helm. He may help you, if you rid the sea of the kraken",
          "combat": 4,
          "defence": 18,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "fishbones-4",
          "name": "Fishbones",
          "description": "Tortugan man (humanoid turtle) owner of the general store. Doesn’t have much, but will sell a couple interesting items.",
          "combat": 4,
          "defence": 18,
          "charisma": 21,
          "intelligence": 0,
          "maxHealth": 2,
          "currentHealth": 2,
          "status": "ready"
        },
        {
          "id": "the-kraken-5",
          "name": "The Kraken",
          "description": "A huge green slimy seamonster with tentacles and ornge vertical cat eyes. Immune to freezing. Can go beneath the water. Will knock players out of the boat",
          "combat": 13,
          "defence": 23,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "rook-the-chief-6",
          "name": "Rook - the chief",
          "description": "village chief, half human, half walrus - big tusks and coral armour.",
          "combat": 13,
          "defence": 22,
          "charisma": 27,
          "intelligence": 0,
          "maxHealth": 4,
          "currentHealth": 4,
          "status": "ready"
        },
        {
          "id": "fish-pixies-7",
          "name": "fish pixies",
          "description": "1",
          "combat": 6,
          "defence": 17,
          "charisma": 0,
          "intelligence": 1,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [
        {
          "id": "advanced-healing-potion-that-is-given-to-1",
          "name": "Advanced healing potion that is given to",
          "description": "Advanced healing potion that is given to you by the boat captain - You're going to need it.",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "prize-from-the-nautilus-2",
          "name": "prize from the Nautilus",
          "description": "prize from the Nautilus - the village chief for killing the kraken",
          "effect": "20 Gold",
          "state": "hidden"
        },
        {
          "id": "kraken-scale-3",
          "name": "Kraken scale",
          "description": "Kraken scale - gives a +2 arcane boost for wizards or allows a non magic player to use a magic basic attack.",
          "effect": "+3",
          "state": "hidden"
        },
        {
          "id": "health-potion-available-from-the-general-store-4",
          "name": "Health potion- available from the general store",
          "description": "Health potion- available from the general store - 10 gold",
          "effect": "Heal 1 Life",
          "state": "hidden"
        },
        {
          "id": "boots-of-coral-5",
          "name": "Boots of Coral",
          "description": "Boots of Coral - increase defence - 20 gold",
          "effect": "+2",
          "state": "hidden"
        },
        {
          "id": "shark-teeth-6",
          "name": "shark teeth",
          "description": "shark teeth - add onto both weapons and arrows. Increasing combat for rogues, warriors, berserkers or hunters 20 gold",
          "effect": "+1",
          "state": "hidden"
        },
        {
          "id": "glowfish-lantern-7",
          "name": "Glowfish Lantern",
          "description": "Glowfish Lantern - lights up underwater allowing you to see.",
          "effect": "20 gold",
          "state": "hidden"
        }
      ],
      "abilities": [
        {
          "id": "frenzy-1",
          "name": "Frenzy",
          "description": "Frenzy - Allows the player to go into a frenzy, always on the attack but always rolling advantage. Learnt by killing meowler Warriors/berserkers only",
          "state": "hidden"
        }
      ],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "The harbour"
      }
    },
    {
      "id": "the-sanctum-of-the-accult",
      "name": "The Sanctum of the Accult",
      "campaign": "Side Quest",
      "status": "ready",
      "story": "You must prove yourself to fight the wizard. Not only your fighting skills. But your Charisma, perception and intelligence too. The door to the sanctum is open. Once you walk inside, you hear an echoing voice all around you. \"Ahh, so you found me… well it won't be that easy. But i will give you your chance\" // A large door at the end of the entrance hall opens into a room with three other doors.",
      "dmNotes": "Upon entering the sanctum, you are faced with your first test of Charisma. In front of you is a brazier, elven runes engraved into its base. Live, love, Laugh... You must tell a Joke. Once done successfully. A brazier will light and the door back to the passageway will open.\n\nIntelligence check. Once getting through the charisma check you will enter into a room of Intelligence. Solving Riddles. What gets wetter as it dries? // The more you take, the more you leave behind? (Footprints)\n\nPerception check. To find the secret lever that opens the door. Three levers present themselves to you. Red, green, yellow. Finding the right one will light the brazier in the room and let you out. The wrong one will send you plummeting down a hole - losing one point of health.\n\nContront the wizard who changed your face. // Defeat him in battle! He is a wizard who can transform the players into animals. He can also teleport and has bonus action ability. Two actions in a turn. Basic magic attack is red lightning bolts",
      "sessionNotes": "",
      "enemies": [
        {
          "id": "surugo-the-evil-wizard-1",
          "name": "Surugo the evil wizard",
          "description": "Evil human wizard. Black robes. Black hat and veiled in dark grey smoke. He wields a long staff with a red glowing ruby at its top. Wicked and evil he",
          "combat": 12,
          "defence": 26,
          "charisma": 0,
          "intelligence": 24,
          "maxHealth": 10,
          "currentHealth": 10,
          "status": "ready"
        },
        {
          "id": "demon-wolf-2",
          "name": "Demon wolf",
          "description": "fiery mouthed demon wolf, glowing red",
          "combat": 8,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "demon-wolf-3",
          "name": "Demon wolf",
          "description": "fiery mouthed demon wolf, glowing red",
          "combat": 8,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "demon-wolf-4",
          "name": "Demon wolf",
          "description": "fiery mouthed demon wolf, glowing red",
          "combat": 8,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        },
        {
          "id": "demon-wolf-5",
          "name": "Demon wolf",
          "description": "fiery mouthed demon wolf, glowing red",
          "combat": 8,
          "defence": 20,
          "charisma": 0,
          "intelligence": 0,
          "maxHealth": 1,
          "currentHealth": 1,
          "status": "ready"
        }
      ],
      "discoveries": [],
      "abilities": [],
      "exits": [],
      "source": {
        "workbook": "the side quest",
        "sheet": "Sanctum of accult"
      }
    }
  ]
};
