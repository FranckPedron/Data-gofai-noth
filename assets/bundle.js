(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "reference": "b0",
        "name": "Failed summoning",
        "text": "both players lose 8 sentinels",
        "effects": [
            {
                "player": {
                    "sentinels": -8
                }
            },
            {
                "opponent": {
                    "sentinels": -8
                }
            }
        ],
        "cost": {
            "sentinels": 0
        }
    },
    {
        "reference": "b1",
        "name": "Dwarven helpers",
        "text": "+ 2 sentinels and workers, play again",
        "effects": {
            "player": {
                "sentinels": 2,
                "workers": 2
            }
        },
        "cost": {
            "sentinels": 0
        },
        "playagain": true
    },
    {
        "reference": "b2",
        "name": "New forge",
        "text": "+1 defense, play again",
        "effects": {
            "player": {
                "defense": 1
            }
        },
        "cost": {
            "sentinels": 1
        },
        "playagain": true
    },
    {
        "reference": "b3",
        "name": "Drakes recruits",
        "text": "+1 garrison",
        "effects": {
            "player": {
                "garrison": 1
            }
        },
        "cost": {
            "sentinels": 3
        }
    },
    {
        "reference": "b4",
        "name": "War efforts",
        "text": "if you have less garrisons, +2 garrisons, else +1",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "opponent": "garrison"
                    },
                    {
                        "player": "garrison"
                    }
                ]
            },
            "then": {
                "player": {
                    "garrison": 2
                }
            },
            "else": {
                "player": {
                    "garrison": 1
                }
            }
        },
        "cost": {
            "sentinels": 4
        }
    },
    {
        "reference": "b5",
        "name": "Elven blessing",
        "text": "+4 defense, +1 garrison",
        "effects": {
            "player": {
                "defense": 4,
                "garrison": 1
            }
        },
        "cost": {
            "sentinels": 7
        }
    },
    {
        "reference": "b6",
        "name": "Work Overtime",
        "text": "+5 defense, -6 workers",
        "effects": {
            "player": {
                "defense": 5,
                "workers": 6
            }
        },
        "cost": {
            "sentinels": 7
        }
    },
    {
        "reference": "b7",
        "name": "Magical equity",
        "text": "if enemy has more garrisons, get the difference",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "opponent": "garrison"
                    },
                    {
                        "player": "garrison"
                    }
                ]
            },
            "then": {
                "player": {
                    "replace": {
                        "garrison": {
                            "opponent": "garrison"
                        }
                    }
                }
            },
            "else": {
                "player": {
                    "garrison": 0
                }
            }
        },
        "cost": {
            "sentinels": 5
        }
    },
    {
        "reference": "b8",
        "name": "Basic training",
        "text": "+3 defense",
        "effects": {
            "player": {
                "defense": 3
            }
        },
        "cost": {
            "sentinels": 2
        }
    },
    {
        "reference": "b9",
        "name": "Heavy training",
        "text": "+4 defense",
        "effects": {
            "player": {
                "defense": 4
            }
        },
        "cost": {
            "sentinels": 3
        }
    },
    {
        "reference": "b10",
        "name": "Merfolk helpers",
        "text": "+1 garrison to both players, +4 workers",
        "effects": [
            {
                "player": {
                    "garrison": 1,
                    "workers": 4
                }
            },
            {
                "opponent": {
                    "garrison": 1
                }
            }
        ],
        "cost": {
            "sentinels": 2
        }
    },
    {
        "reference": "b11",
        "name": "Goblin freelancers",
        "text": "+6 defense if you don't have any, +3 else",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "player": "defense"
                    },
                    0
                ]
            },
            "then": {
                "player": {
                    "defense": 3
                }
            },
            "else": {
                "player": {
                    "defense": 6
                }
            }
        },
        "cost": {
            "sentinels": 3
        }
    },
    {
        "reference": "b12",
        "name": "Disease",
        "text": "both defenses take 5 damage, play again",
        "effects": [
            {
                "player": {
                    "defense": -5
                }
            },
            {
                "opponent": {
                    "defense": -5
                }
            }
        ],
        "cost": {
            "sentinels": 7
        },
        "playagain": true
    },
    {
        "reference": "b13",
        "name": "Regrouping",
        "text": "+1 guild, play again",
        "effects": {
            "player": {
                "guild": 1
            }
        },
        "cost": {
            "sentinels": 8
        },
        "playagain": true
    },
    {
        "reference": "b14",
        "name": "Bad day",
        "text": "-1 garrison to both players",
        "effects": [
            {
                "player": {
                    "garrison": -1
                }
            },
            {
                "opponent": {
                    "garrison": -1
                }
            }
        ],
        "cost": {
            "sentinels": 0
        }
    },
    {
        "reference": "b15",
        "name": "Heavy armors",
        "text": "+6 defense",
        "effects": {
            "player": {
                "defense": 6
            }
        },
        "cost": {
            "sentinels": 5
        }
    },
    {
        "reference": "b16",
        "name": "Wall smasher",
        "text": "-1 enemy garrison",
        "effects": {
            "opponent": {
                "garrison": -1
            }
        },
        "cost": {
            "sentinels": 4
        }
    },
    {
        "reference": "b17",
        "name": "Drake trainer",
        "text": "+2 garrisons",
        "effects": {
            "player": {
                "garrison": 2
            }
        },
        "cost": {
            "sentinels": 6
        }
    },
    {
        "reference": "b18",
        "name": "Equilibrium",
        "text": "-1 garrison, +10 defense and +5 workers",
        "effects": {
            "player": {
                "garrison": -1,
                "defense": 10,
                "workers": 5
            }
        },
        "cost": {
            "sentinels": 0
        }
    },
    {
        "reference": "b19",
        "name": "Long-range defense",
        "text": "+8 defense",
        "effects": {
            "player": {
                "defense": 8
            }
        },
        "cost": {
            "sentinels": 8
        }
    },
    {
        "reference": "b20",
        "name": "Reservists",
        "text": "+5 defense, +1 barracks",
        "effects": {
            "player": {
                "defense": 5,
                "barracks": 1
            }
        },
        "cost": {
            "sentinels": 9
        }
    },
    {
        "reference": "b21",
        "name": "Orcish grunts",
        "text": "+7 defense and 7 workers",
        "effects": {
            "player": {
                "defense": 7,
                "workers": 7
            }
        },
        "cost": {
            "sentinels": 9
        }
    },
    {
        "reference": "b22",
        "name": "Building with fire",
        "text": "+6 defense, +3 bulwark",
        "effects": {
            "player": {
                "defense": 6,
                "bulwark": 3
            }
        },
        "cost": {
            "sentinels": 11
        }
    },
    {
        "reference": "b23",
        "name": "Naga hunters",
        "text": "+12 defense",
        "effects": {
            "player": {
                "defense": 12
            }
        },
        "cost": {
            "sentinels": 13
        }
    },
    {
        "reference": "b24",
        "name": "Nature's help",
        "text": "+8 defense, +5 bulwark",
        "effects": {
            "player": {
                "defense": 8,
                "bulwark": 5
            }
        },
        "cost": {
            "sentinels": 15
        }
    },
    {
        "reference": "b25",
        "name": "Elven rangers",
        "text": "+15 defense",
        "effects": {
            "player": {
                "defense": 15
            }
        },
        "cost": {
            "sentinels": 16
        }
    },
    {
        "reference": "b26",
        "name": "Mudcrawlers",
        "text": "+6 defense, 10 damage to enemy",
        "effects": [
            {
                "player": {
                    "defense": 6
                }
            },
            {
                "opponent": {
                    "damage": 10
                }
            }
        ],
        "cost": {
            "sentinels": 18
        }
    },
    {
        "reference": "b27",
        "name": "Buffed woses",
        "text": "+20 defense, +8 bulwark",
        "effects": {
            "player": {
                "defense": 20,
                "bulwark": 8
            }
        },
        "cost": {
            "sentinels": 24
        }
    },
    {
        "reference": "b28",
        "name": "Troll rocklobbers",
        "text": "+9 defense, -5 soldiers",
        "effects": {
            "player": {
                "defense": 9,
                "soldiers": -5
            }
        },
        "cost": {
            "sentinels": 7
        }
    },
    {
        "reference": "g0",
        "name": "Whelp",
        "text": "+1 bulwark, play again",
        "effects": {
            "player": {
                "bulwark": 1
            }
        },
        "cost": {
            "workers": 1
        },
        "playagain": true
    },
    {
        "reference": "g1",
        "name": "Troll shaman",
        "text": "1 damage to enemy bulwark, play again",
        "effects": {
            "opponent": {
                "bulwark": -1
            }
        },
        "cost": {
            "workers": 2
        },
        "playagain": true
    },
    {
        "reference": "g2",
        "name": "Stone hardener",
        "text": "+3 bulwark",
        "effects": {
            "player": {
                "bulwark": 3
            }
        },
        "cost": {
            "workers": 2
        }
    },
    {
        "reference": "g3",
        "name": "Influence boost",
        "text": "+1 guild",
        "effects": {
            "player": {
                "guild": 1
            }
        },
        "cost": {
            "workers": 3
        }
    },
    {
        "reference": "g4",
        "name": "Soil enrichment",
        "text": "draw then discard 1 card, play again",
        "effects": {},
        "cost": {
            "workers": 2
        },
        "forcediscard": true
    },
    {
        "reference": "g5",
        "name": "Stubborn grunts",
        "text": "+3 bulwark, magnet",
        "effects": {
            "player": {
                "bulwark": 3
            }
        },
        "cost": {
            "workers": 5
        },
        "magnet": true
    },
    {
        "reference": "g6",
        "name": "Runic flare",
        "text": "+2 bulwark, -2 bulwark to enemy",
        "effects": [
            {
                "player": {
                    "bulwark": 2
                }
            },
            {
                "opponent": {
                    "bulwark": -2
                }
            }
        ],
        "cost": {
            "workers": 4
        }
    },
    {
        "reference": "g7",
        "name": "Dark informant",
        "text": "+1 guild, +3 bulwark, +1 enemy bulwark",
        "effects": [
            {
                "player": {
                    "guild": 1,
                    "bulwark": 3
                }
            },
            {
                "opponent": {
                    "bulwark": 1
                }
            }
        ],
        "cost": {
            "workers": 6
        }
    },
    {
        "reference": "g8",
        "name": "Brittle materials",
        "text": "3 damage to enemy bulwark",
        "effects": {
            "opponent": {
                "bulwark": -3
            }
        },
        "cost": {
            "workers": 2
        }
    },
    {
        "reference": "g9",
        "name": "Overnight efforts",
        "text": "+5 bulwark",
        "effects": {
            "player": {
                "bulwark": 5
            }
        },
        "cost": {
            "workers": 3
        }
    },
    {
        "reference": "g10",
        "name": "Lost shipment",
        "text": "5 damage to enemy bulwark",
        "effects": {
            "opponent": {
                "bulwark": -5
            }
        },
        "cost": {
            "workers": 4
        }
    },
    {
        "reference": "g11",
        "name": "Sacrifices",
        "text": "5 damage to your bulwark, +2 guild",
        "effects": {
            "player": {
                "bulwark": -5,
                "guild": 2
            }
        },
        "cost": {
            "workers": 3
        }
    },
    {
        "reference": "g12",
        "name": "New guildmaster",
        "text": "+1 guild, +3 bulwark, +3 defense",
        "effects": {
            "player": {
                "guild": 1,
                "bulwark": 3,
                "defense": 3
            }
        },
        "cost": {
            "workers": 7
        }
    },
    {
        "reference": "g13",
        "name": "Truce",
        "text": "both players' guild equal the largest guild",
        "effects": [
            {
                "@store": {
                    "max": [
                        {
                            "player": "guild"
                        },
                        {
                            "opponent": "guild"
                        }
                    ]
                }
            },
            {
                "opponent": {
                    "replace": {
                        "guild": "@store"
                    }
                }
            },
            {
                "player": {
                    "replace": {
                        "guild": "@store"
                    }
                }
            }
        ],
        "cost": {
            "workers": 7
        }
    },
    {
        "reference": "g14",
        "name": "Fruition",
        "text": "+8 bulwark",
        "effects": {
            "player": {
                "bulwark": 8
            }
        },
        "cost": {
            "workers": 6
        }
    },
    {
        "reference": "g15",
        "name": "Help from the woods",
        "text": "+5 bulwark, +1 guild",
        "effects": {
            "player": {
                "bulwark": 5,
                "guild": 1
            }
        },
        "cost": {
            "workers": 9
        }
    },
    {
        "reference": "g16",
        "name": "Hope breaker",
        "text": "-1 guild, 9 damage to enemy bulwark",
        "effects": [
            {
                "player": {
                    "guild": -1
                }
            },
            {
                "opponent": {
                    "bulwark": -9
                }
            }
        ],
        "cost": {
            "workers": 8
        }
    },
    {
        "reference": "g17",
        "name": "Troll attack",
        "text": "+5 bulwark, -6 sentinels to enemy",
        "effects": [
            {
                "player": {
                    "bulwark": 5
                }
            },
            {
                "opponent": {
                    "sentinels": -6
                }
            }
        ],
        "cost": {
            "workers": 7
        }
    },
    {
        "reference": "g18",
        "name": "Magical hardening",
        "text": "+11 bulwark",
        "effects": {
            "player": {
                "bulwark": 11
            }
        },
        "cost": {
            "workers": 10
        }
    },
    {
        "reference": "g19",
        "name": "Unforeseen events",
        "text": "7 damage and -1 guild to both bulwarks",
        "effects": [
            {
                "player": {
                    "bulwark": -7,
                    "guild": -1
                }
            },
            {
                "opponent": {
                    "bulwark": -7,
                    "guild": -1
                }
            }
        ],
        "cost": {
            "workers": 5
        }
    },
    {
        "reference": "g20",
        "name": "Divine lightning",
        "text": "+6 bulwark, -4 bulwark to enemy",
        "effects": [
            {
                "player": {
                    "bulwark": 6
                }
            },
            {
                "opponent": {
                    "bulwark": -4
                }
            }
        ],
        "cost": {
            "workers": 13
        }
    },
    {
        "reference": "g21",
        "name": "Garrison dispatch",
        "text": "+7 bulwark, -10 sentinels",
        "effects": {
            "player": {
                "bulwark": 7,
                "sentinels": -10
            }
        },
        "cost": {
            "workers": 4
        }
    },
    {
        "reference": "g22",
        "name": "Leaf shield",
        "text": "+8 bulwark, +3 defense",
        "effects": {
            "player": {
                "bulwark": 8,
                "defense": 3
            }
        },
        "cost": {
            "workers": 12
        }
    },
    {
        "reference": "g23",
        "name": "Harmonizer",
        "text": "+8 bulwark, +1 barracks",
        "effects": {
            "player": {
                "bulwark": 8,
                "barracks": 1
            }
        },
        "cost": {
            "workers": 14
        }
    },
    {
        "reference": "g24",
        "name": "Archmages",
        "text": "+15 bulwark",
        "effects": {
            "player": {
                "bulwark": 15
            }
        },
        "cost": {
            "workers": 16
        }
    },
    {
        "reference": "g25",
        "name": "Fire sanctuary",
        "text": "+10 bulwark, +5 defense, +5 soldiers",
        "effects": {
            "player": {
                "bulwark": 10,
                "defense": 5,
                "soldiers": 5
            }
        },
        "cost": {
            "workers": 15
        }
    },
    {
        "reference": "g26",
        "name": "Chaos imbalance",
        "text": "+12 bulwark, -6 bulwark to enemy",
        "effects": [
            {
                "player": {
                    "bulwark": 12
                }
            },
            {
                "opponent": {
                    "bulwark": -6
                }
            }
        ],
        "cost": {
            "workers": 17
        }
    },
    {
        "reference": "g27",
        "name": "Elven guildmaster",
        "text": "+20 bulwark",
        "effects": {
            "player": {
                "bulwark": 20
            }
        },
        "cost": {
            "workers": 21
        }
    },
    {
        "reference": "g28",
        "name": "Natural cycle",
        "text": "+11 bulwark, -6 defense",
        "effects": {
            "player": {
                "bulwark": 11,
                "defense": -6
            }
        },
        "cost": {
            "workers": 8
        }
    },
    {
        "reference": "m0",
        "name": "Call of the Undead",
        "text": "both players lose 6 soldiers",
        "effects": [
            {
                "player": {
                    "soldiers": -6
                }
            },
            {
                "opponent": {
                    "soldiers": -6
                }
            }
        ],
        "cost": {
            "soldiers": 0
        }
    },
    {
        "reference": "m1",
        "name": "Merfolk fighters",
        "text": "2 damage",
        "effects": {
            "opponent": {
                "damage": 2
            }
        },
        "cost": {
            "soldiers": 1
        },
        "playagain": true
    },
    {
        "reference": "m2",
        "name": "Whimsical ogre",
        "text": "4 damage but he eats 3 workers",
        "effects": [
            {
                "opponent": {
                    "damage": 4
                }
            },
            {
                "player": {
                    "workers": -3
                }
            }
        ],
        "cost": {
            "soldiers": 1
        }
    },
    {
        "reference": "m3",
        "name": "Merfolk commander",
        "text": "+1 barracks",
        "effects": {
            "player": {
                "barracks": 1
            }
        },
        "cost": {
            "soldiers": 3
        }
    },
    {
        "reference": "m4",
        "name": "Wilderness scout",
        "text": "draw then discard 1 card, play again",
        "effects": {},
        "cost": {
            "soldiers": 2
        },
        "forcediscard": true
    },
    {
        "reference": "m5",
        "name": "Undead help",
        "text": "6 damage but you take 3 as well",
        "effects": [
            {
                "opponent": {
                    "damage": 6
                }
            },
            {
                "player": {
                    "damage": 3
                }
            }
        ],
        "cost": {
            "soldiers": 3
        }
    },
    {
        "reference": "m6",
        "name": "Bane archers",
        "text": "3 damage to enemy bulwark, 1 damage to you",
        "effects": [
            {
                "opponent": {
                    "bulwark": -3
                }
            },
            {
                "player": {
                    "damage": 1
                }
            }
        ],
        "cost": {
            "soldiers": 4
        }
    },
    {
        "reference": "m7",
        "name": "Ghost summoning",
        "text": "2 damage to enemy bulwark, play again",
        "effects": {
            "opponent": {
                "bulwark": -2
            }
        },
        "cost": {
            "soldiers": 6
        },
        "playagain": true
    },
    {
        "reference": "m8",
        "name": "Merfolk hoplite",
        "text": "5 damage",
        "effects": {
            "opponent": {
                "damage": 5
            }
        },
        "cost": {
            "soldiers": 3
        }
    },
    {
        "reference": "m9",
        "name": "Dragonguard",
        "text": "4 damage, +3 defense",
        "effects": [
            {
                "opponent": {
                    "damage": 4
                }
            },
            {
                "player": {
                    "defense": 3
                }
            }
        ],
        "cost": {
            "soldiers": 5
        }
    },
    {
        "reference": "m10",
        "name": "Saurian skirmisher",
        "text": "4 damage to enemy bulwark",
        "effects": {
            "opponent": {
                "bulwark": -4
            }
        },
        "cost": {
            "soldiers": 6
        }
    },
    {
        "reference": "m11",
        "name": "Undead commander",
        "text": "+2 barracks",
        "effects": {
            "player": {
                "barracks": 2
            }
        },
        "cost": {
            "soldiers": 7
        }
    },
    {
        "reference": "m12",
        "name": "Dwarven ulfserker",
        "text": "2 damage, +4 defense, +2 bulwark",
        "effects": [
            {
                "opponent": {
                    "damage": 2
                }
            },
            {
                "player": {
                    "defense": 4,
                    "bulwark": 2
                }
            }
        ],
        "cost": {
            "soldiers": 8
        }
    },
    {
        "reference": "m13",
        "name": "Full moon rituals",
        "text": "+1 barracks to both players, +3 soldiers",
        "effects": [
            {
                "opponent": {
                    "barracks": 1
                }
            },
            {
                "player": {
                    "barracks": 1,
                    "soldiers": 3
                }
            }
        ],
        "cost": {
            "soldiers": 0
        }
    },
    {
        "reference": "m14",
        "name": "Merfolk hunter",
        "text": "6 damage",
        "effects": {
            "opponent": {
                "damage": 6
            }
        },
        "cost": {
            "soldiers": 5
        }
    },
    {
        "reference": "m15",
        "name": "Wraith",
        "text": "7 damage",
        "effects": {
            "opponent": {
                "damage": 7
            }
        },
        "cost": {
            "soldiers": 6
        }
    },
    {
        "reference": "m16",
        "name": "Rabid bat",
        "text": "6 damage, -3 soldiers to enemy",
        "effects": {
            "opponent": {
                "damage": 6,
                "soldiers": -3
            }
        },
        "cost": {
            "soldiers": 6
        }
    },
    {
        "reference": "m17",
        "name": "Zombie gryphon",
        "text": "6 damage, both players lose 5 of each resource",
        "effects": [
            {
                "opponent": {
                    "damage": 6,
                    "sentinels": -5,
                    "workers": -5,
                    "soldiers": -5
                }
            },
            {
                "player": {
                    "sentinels": -5,
                    "workers": -5,
                    "soldiers": -5
                }
            }
        ],
        "cost": {
            "soldiers": 5
        }
    },
    {
        "reference": "m18",
        "name": "Ghoul",
        "text": "if the enemy has no defense, 10 damage, else 6 damage",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "opponent": "defense"
                    },
                    0
                ]
            },
            "then": {
                "opponent": {
                    "damage": 6
                }
            },
            "else": {
                "opponent": {
                    "damage": 10
                }
            }
        },
        "cost": {
            "soldiers": 8
        }
    },
    {
        "reference": "m19",
        "name": "Night shades",
        "text": "9 damage",
        "effects": {
            "opponent": {
                "damage": 9
            }
        },
        "cost": {
            "soldiers": 9
        }
    },
    {
        "reference": "m20",
        "name": "Doom spreader",
        "text": "if the enemy has a defense, 10 damage, else 7 damage",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "opponent": "defense"
                    },
                    0
                ]
            },
            "then": {
                "opponent": {
                    "damage": 10
                }
            },
            "else": {
                "opponent": {
                    "damage": 7
                }
            }
        },
        "cost": {
            "soldiers": 11
        }
    },
    {
        "reference": "m21",
        "name": "Grand knight",
        "text": "if your guild is superior, 12 damage, else 8 damage",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "player": "guild"
                    },
                    {
                        "opponent": "guild"
                    }
                ]
            },
            "then": {
                "opponent": {
                    "damage": 12
                }
            },
            "else": {
                "opponent": {
                    "damage": 8
                }
            }
        },
        "cost": {
            "soldiers": 9
        }
    },
    {
        "reference": "m22",
        "name": "Zombie riders",
        "text": "6 damage : if your defense is bigger, damage bulwark",
        "effects": {
            "if": {
                "greaterthan": [
                    {
                        "player": "defense"
                    },
                    {
                        "opponent": "defense"
                    }
                ]
            },
            "then": {
                "opponent": {
                    "bulwark": -6
                }
            },
            "else": {
                "opponent": {
                    "damage": 6
                }
            }
        },
        "cost": {
            "soldiers": 10
        }
    },
    {
        "reference": "m23",
        "name": "Ancient hero",
        "text": "5 damage to enemy bulwark, -8 soldiers to enemy",
        "effects": {
            "opponent": {
                "bulwark": -5,
                "soldiers": -8
            }
        },
        "cost": {
            "soldiers": 14
        }
    },
    {
        "reference": "m24",
        "name": "Night terror",
        "text": "8 damage, -1 enemy garrison",
        "effects": {
            "opponent": {
                "damage": 8,
                "garrison": -1
            }
        },
        "cost": {
            "soldiers": 11
        }
    },
    {
        "reference": "m25",
        "name": "Plunderer",
        "text": "-10 enemy workers, -5 enemy sentinels, get half of it",
        "effects": [
            {
                "@store": {
                    "opponent": {
                        "workers": -10
                    }
                }
            },
            {
                "player": {
                    "workers": "-@store/2"
                }
            },
            {
                "@store": {
                    "opponent": {
                        "sentinels": -5
                    }
                }
            },
            {
                "player": {
                    "sentinels": "-@store/2"
                }
            }
        ],
        "cost": {
            "workers": 12
        }
    },
    {
        "reference": "m26",
        "name": "Bravery",
        "text": "10 damage, +4 defense",
        "effects": [
            {
                "opponent": {
                    "damage": 10
                }
            },
            {
                "player": {
                    "defense": 4
                }
            }
        ],
        "cost": {
            "soldiers": 15
        }
    },
    {
        "reference": "m27",
        "name": "Troll destroyer",
        "text": "10 damage, -5 enemy soldiers, -1 enemy barracks",
        "effects": {
            "opponent": {
                "damage": 10,
                "soldiers": -5,
                "barracks": -1
            }
        },
        "cost": {
            "soldiers": 17
        }
    },
    {
        "reference": "m28",
        "name": "Orcs invasion",
        "text": "20 damage, -10 enemy workers, -1 enemy barracks",
        "effects": {
            "opponent": {
                "damage": 20,
                "workers": -10,
                "barracks": -1
            }
        },
        "cost": {
            "soldiers": 25
        }
    }
]
},{}],2:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],3:[function(require,module,exports){
const Player = require('./modules/player');
const Game = require('./modules/game');
const Agent = require('./modules/agent');

const cards = require('../data/cards.json');

const app = {
    init() {
        // créer un jeu vierge
        app.game = new Game();

        // créer 2 decks composés de 2 exemplaires de chaque carte
        const decks = [
            cards.map(c => [{...c}, {...c}]).flat(),
            cards.map(c => [{...c}, {...c}]).flat()
        ];

        // créer 2 joueurs, chacun son deck
        const players = decks.map(d => new Player(d, app.game));

        app.human = players[0];
        app.human.name = "human";
        app.human.area = document.querySelector('#your-area');
        app.robot = players[1];
        app.robot.name = "robot";
        app.robot.area = document.querySelector('#enemy-area');

        // rien besoin de stocker, c'est autonome, ces bêtes-là
        new Agent(app.robot);

        app.addListeners();

        app.game.init();
    },

    addListeners() {
        app.robot.on('robot.played', app.showPlayedCard);
        
        app.human.on('player.afterDrawing', app.populateHand.bind(app.human));
        app.robot.on('player.afterDrawing', app.populateHand.bind(app.robot));
        app.human.on('player.afterDiscarding', app.drawCard.bind(app.human));
        app.robot.on('player.afterDiscarding', app.drawCard.bind(app.robot));

        app.game.on('game.togglingTurn', app.toggleTurn);

        app.human.area.querySelector('.deck').addEventListener('click', app.playCard);

        app.game.once('game.afterStarting', () => app.refreshEnvironment(app.human.getEnvironment()));

        app.game.once('game.endingGame', app.endGame);
    },

    toggleTurn(e) {
        if (e.turn === app.human) {
            app.human.area.querySelector('.deck').addEventListener('click', app.playCard);
            app.human.area.querySelector('.deck').addEventListener('contextmenu', app.discardCard);
        } else {
            app.human.area.querySelector('.deck').removeEventListener('click', app.playCard);
            app.human.area.querySelector('.deck').removeEventListener('contextmenu', app.discardCard);
        }
        app.refreshEnvironment(app.human.getEnvironment());
    },

    discardCard(e) {
        const index = Array.from(app.human.area.querySelector('.deck').children).indexOf(e.target.closest('.card'));
        if (index >= 0) {
            if (app.human.discard(index)) {
                e.target.closest('.card').remove();
            } else {
                alert('you cannot discard a magnet card');
            }
        }
    },

    playCard(e) {
        console.log(e);
        if (e.ctrlKey) return app.discardCard(e);
        const index = Array.from(app.human.area.querySelector('.deck').children).indexOf(e.target.closest('.card'));
        if (index >= 0) {
            if (app.human.play(index)) {
                e.target.closest('.card').remove();
                app.refreshEnvironment(app.human.getEnvironment());
            } else {
                alert('you cannot afford the card');
            }
        }
    },

    showPlayedCard(data) {
        const theCard = app.robot.area.querySelector(`.card:nth-child(${data.card + 1})`);
        theCard.classList.add('playing');
        setTimeout(() => theCard.remove(), 3000);
    },

    endGame(e) {
        app.refreshEnvironment(app.human.getEnvironment());
        alert(`${e.winner.name} won !`);
    },

    drawCard(e) {

        const deck = this.area.querySelector('.deck');

        const card = e.newCard;

        const [resource, cost] = Object.entries(card.cost)[0];

        const cardElement = document.importNode(document.querySelector('#card').content, true).firstElementChild;
        cardElement.classList.add(card.reference, resource);
        
        cardElement.querySelector('.card-title').textContent = card.name;
        
        cardElement.querySelector('.card-effect').textContent = card.text;
        
        cardElement.querySelector('.card-cost').textContent = cost;

        cardElement.querySelector('.card-illustration').setAttribute('src', `assets/images/cards/${card.reference}.png`);

        deck.append(cardElement);
    },

    populateHand(e) {

        const deck = this.area.querySelector('.deck');

        for (let card of e.hand) {
            const [resource, cost] = Object.entries(card.cost)[0];

            const cardElement = document.importNode(document.querySelector('#card').content, true).firstElementChild;
            cardElement.classList.add(card.reference, resource);
            
            cardElement.querySelector('.card-title').textContent = card.name;
            
            cardElement.querySelector('.card-effect').textContent = card.text;
            
            cardElement.querySelector('.card-cost').textContent = cost;

            cardElement.querySelector('.card-illustration').setAttribute('src', `assets/images/cards/${card.reference}.png`);

            deck.append(cardElement);
        }
    },

    refreshEnvironment(envData) {
        const defenseElement = app.human.area.querySelector('.defense');
        defenseElement.textContent = envData.player.defense;
        defenseElement.style.height = 10 * Math.log2(envData.player.defense + 1) + 'pt';

        const bulwarkElement = app.human.area.querySelector('.bulwark');
        bulwarkElement.textContent = envData.player.bulwark;
        bulwarkElement.style.height = 10 * Math.log2(envData.player.bulwark + 1) + 'pt';

        app.human.area.querySelector('.resources .sentinels .units').textContent = envData.player.sentinels;
        app.human.area.querySelector('.resources .sentinels .generators').textContent = envData.player.garrison;
        app.human.area.querySelector('.resources .workers .units').textContent = envData.player.workers;
        app.human.area.querySelector('.resources .workers .generators').textContent = envData.player.guild;
        app.human.area.querySelector('.resources .attackers .units').textContent = envData.player.soldiers;
        app.human.area.querySelector('.resources .attackers .generators').textContent = envData.player.barracks;

        const enemyDefenseElement = app.robot.area.querySelector('.defense');
        enemyDefenseElement.textContent = envData.opponent.defense;
        enemyDefenseElement.style.height = 10 * Math.log2(envData.opponent.defense + 1) + 'pt';

        const enemyBulwarkElement = app.robot.area.querySelector('.bulwark');
        enemyBulwarkElement.textContent = envData.opponent.bulwark;
        enemyBulwarkElement.style.height = 10 * Math.log2(envData.opponent.bulwark + 1) + 'pt';

        app.robot.area.querySelector('.resources .sentinels .units').textContent = envData.opponent.sentinels;
        app.robot.area.querySelector('.resources .sentinels .generators').textContent = envData.opponent.garrison;
        app.robot.area.querySelector('.resources .workers .units').textContent = envData.opponent.workers;
        app.robot.area.querySelector('.resources .workers .generators').textContent = envData.opponent.guild;
        app.robot.area.querySelector('.resources .attackers .units').textContent = envData.opponent.soldiers;
        app.robot.area.querySelector('.resources .attackers .generators').textContent = envData.opponent.barracks;
    }
}

document.addEventListener('DOMContentLoaded', app.init);
},{"../data/cards.json":1,"./modules/agent":4,"./modules/game":6,"./modules/player":7}],4:[function(require,module,exports){
const Builder = require('./ai/builder.ai');

module.exports = class {
    constructor(player) {
        this.player = player;
        this.canPlay = false;

        this.player.game.on('game.togglingTurn', e => {
            this.canPlay = this.player === e.turn;
            setTimeout(this.play.bind(this), 1500);
        });
        
        this.player.game.on('game.endingGame', e => {
            this.canPlay = false;
        });
    }

    play() {
        let tries = 0;
        while (this.canPlay) {
            tries++;
            const candidateCard = this.decide();
            console.log('agent will play ', candidateCard);
            if (this.player.play(candidateCard)) {
                this.player.emit('robot.played', { card: candidateCard} );
            } else {
                console.log('but they cannot');
                if (tries > 20) {
                    console.log('too many tries, discarding card instead');
                    this.player.discard(candidateCard);
                }
            }
        }
    }

    decide() {
        if (!this.ai) {
            this.ai = new Builder(this.player);
        }

        // maintenant, on demande à notre IA de décider
        // pour décider, c'est mieux d'avoir la main en cours
        return this.ai.decide();
    }
}
},{"./ai/builder.ai":5}],5:[function(require,module,exports){
// gagner en bâtissant les plus hauts remparts le plus vite possible
// priorités : bâtir, farmer, attaquer

let state = 'build';

module.exports = class Builder {

    constructor(player) {
        this.player = player;
    }

    decide() {
        // ok, c'est bon, j'ai compris, this.env représente l'état de la partie
        // this.env.player = mon camp d'IA
        // this.env.opponent = le camp de l'adversaire, l'humain
        console.log(this.env);
        const env = this.player.getEnvironment();

        // maintenant que faire ?
        // étape 1 : mon état est-il toujours adapté ?
        // ici, on liste les déclencheurs, on les vérifie et on change l'état si nécessaire

        switch (state) {
            case 'build':
                // vérif des déclencheurs possible de build vers un autre état
                // les ressources se font rares
                if (env.player.sentinels < 10 && env.player.workers < 5) {
                    state = 'farm';
                    break;
                }
                if (env.player.defense + env.player.bulwark < 15) {
                    state = 'defend';
                    break;
                }
                if (env.opponent.defense + env.opponent.bulwark < 10) {
                    state = 'attack';
                    break;
                }
                break;
                
            case 'defend':
                if (env.player.defense + env.player.bulwark > 20) {
                    state = 'build';
                    break;
                }
                break;

            case 'farm':
                if (
                    env.player.sentinels > 15 &&
                    env.player.workers > 10 &&
                    env.player.soldiers > 5
                ) {
                    state = 'defend';
                    break;
                }
                break;

            case 'attack':
                // les ressources se font rares
                if (env.player.sentinels < 10 && env.player.workers < 5) {
                    state = 'farm';
                    break;
                }
                // la défense ennemie tient bon
                if (env.opponent.defense > 15) {
                    state = 'build';
                    break;
                }
                break;
            // on aura à terme, la même chose pour les autres états
        }

        // étape 2 : noter les cartes en fonction de leur intérêt pour mon état actuel
        // ma main = this.player.hand
        this.player.hand.forEach(card => {
            card.score = this.setScore(card);
        })

        // étape 2.1 : filtrer la main pour retirer les cartes non jouables
        this.player.hand.forEach(card => {
            if (card.cost.soldiers) {
                card.playable = card.cost.soldiers < env.player.soldiers;
            } else if (card.cost.sentinels) {
                card.playable = card.cost.sentinels < env.player.sentinels;
            } else if (card.cost.workers) {
                card.playable = card.cost.workers < env.player.workers;
            }
        });

        const theCard = this.player.hand.reduce((best, next) => {
            if (next.playable && next.score > best.score) {
                return next;
            } else {
                return best;
            }
        });

        console.log('état actuel : ', state);

        return this.player.hand.indexOf(theCard);
    }

    setScore(card) {
        let score = 0;

        switch (state) {
            case 'build':
                if (card.cost.soldiers) {
                    score = -10;
                }
                break;
        }

        return score;
    }
}
},{}],6:[function(require,module,exports){
const rulesets = require('./rulesets');

const { EventEmitter } = require('events');
// juste pour écrire le passage d'un joueur à l'autre plus simplement
// cf constructeur de Game
let not = function(player) {
    return this.players.filter(p => p !== player).pop();
};

class GameSnapShot {

    constructor(resources, player) {
        this.environment = {
            player: resources.get(player),
            opponent: resources.get(not(player))
        };
    }

    // fonction récursive qui parcourt les effets
    parse(effect, context = null) {
        // les cas simples d'abord
        if (typeof effect === 'number') return effect;

        // pour les cas du type { "player": "magic" } => lecture de la magic du player
        // et { "magic": "@store" } => écriture de la valeur stockée dans magic
        if (typeof effect === 'string') {
            // le plus simple pour différencier les 2 : l'existence ou non d'un contexte
            if (context) {
                return context[effect];
            } else {
                // et là, c'est pas chouette mais c'est tellement plus simple : on eval
                return Math.ceil(eval(effect.replace('@', 'this.')));
            }
        }

        let returnValue;

        // les multiples cas où on tombe sur un object
        for (const [key, value] of Object.entries(effect)) {

            switch (key) {
                // ces deux-là seront lancés conditionnellement par le if
                // on ne les mentionne ici que dans le cas où ils seraient lus avant le if
                case 'then':
                case 'else':
                    continue;
                case 'if':
                    // value va être un test (greaterthan par exemple)
                    if (this.parse(value)) {
                        this.parse(effect.then);
                    } else {
                        this.parse(effect.else);
                    }
                    return;
                case '@store':
                    // value va être une valeur, un calcul ou une attribution, dans tous ces cas, une valeur sera renvoyée
                    this.store = this.parse(value);
                    return;
                case 'opponent':
                case 'player':
                    // pour être cohérent avec le cas où c'est encapsulé dans un @store, on retourne l'attribution/la lecture
                    return this.parse(value, this.environment[key]);
                case 'greaterthan':
                    // value est un tableau contenant 2 éléments, qui peuvent être des sous-noeuds, donc on les parse
                    let values = value.map(val => this.parse(val));
                    return values[0] > values[1];
                case 'max':
                    // même principe mais qui retourne le max de 2 (ou plus) sous-noeuds
                    return Math.max.apply(null, value.map(val => this.parse(val)));
                case 'replace':
                    // comme les attributions ajoutent systématiquement la valeur à la ressource, si on veut remplacer...
                    // on prend un peu d'avance, on va chercher la ressource à la main...
                    const [resource, ] = Object.entries(value)[0];
                    // et on lui attribue 0, comme ça 0 + la nouvelle valeur => on a bien un remplacement de valeur
                    context[resource] = 0;
                    // et on continue comme si de rien n'était
                    return this.parse(value, context);
                // cas un peu particulier, les dégâts s'appliquent d'abord au mur, puis si le mur ne suffit pas, la tour encaisse le reste
                case 'damage':
                    let theDamage = this.parse(value);
                    // est-ce que je peux enlever theDamage ou est-ce que le joueur concerné meurt avant (tour+mur < dégâts)
                    returnValue = Math.min(theDamage, context.bulwark + context.defense);
                    // on s'attaque au mur d'abord
                    [theDamage, context.defense] = [Math.max(theDamage - context.defense, 0), Math.max(context.defense - theDamage, 0)];
                    // on inflige d'éventuels dégâts résiduels
                    context.bulwark = Math.max(context.bulwark - theDamage, 0);
                    
                    break;
                // tous les autres cas peuvent être traités de la même manière, ce sont des ressources
                // bricks, gems, beasts, quarry, magic, zoo, wall, tower
                default:
                    const theValue = this.parse(value);
                    returnValue = Math.max(-context[key], theValue);
                    context[key] = Math.max(0, context[key] + theValue);
                    break;
            }
        }

        return returnValue;
    }

}

// classe Game
module.exports = class extends EventEmitter {

    constructor(rules = null) {
        super();

        this.players = [];
        this.resources = new WeakMap();

        if (rules === null || typeof rules === 'string') {
            rules = rulesets[rules] || rulesets['Carcyn'];
        }

        this.rules = rules;

        // héhé
        not = not.bind(this);
    }

    // dès qu'on a 2 joueurs
    init() {
        this.emit('game.beforeStarting', {
            players: this.players,
            rules: this.rules
        });

        this.players.forEach(player => {
            // on gère leurs ressources
            this.resources.set(player, this.initResources());

            // et on leur donne une copie de l'environnement, vu de leur fenêtre
            player.getEnvironment = () => {
                return {
                    player: {...this.resources.get(player)},
                    opponent: {...this.resources.get(not(player))}
                };
            };

            // chaque joueur pioche sa main
            player.drawHand();
        });

        // déterminer qui commence
        this.turn = this.players[0];

        // et générer ses ressources
        this.generateResources(this.turn);

        this.emit('game.afterStarting');
    }

    // chaque joueur s'enregistre auprès du jeu
    register(player) {
        this.players.push(player);
    }

    // le joueur passe par ici pour jouer une carte
    // ec = effects collection, objet créé pour l'occasion
    resolveCard(ec) {
        // vérifier si c'est son tour
        if (ec.player !== this.turn) return false;

        const { player, effects, playagain, forcediscard } = ec;
        const snap = new GameSnapShot(this.resources, player);

        // une carte a au moins 2 effets :
        // - son coût : transformé en effet par le joueur et exécuté en priorité
        // - son... effet :-) ou ses effets, parfois
        effects.forEach(e => snap.parse(e));

        if (this.victoryConditionsMet()) {
            // assure qu'aucun autre événement ne sera déclenché
            return false;
        }

        if (forcediscard) {
            player.forceDiscard();
        }

        if (!playagain && !forcediscard) {
            this.toggleTurn();
        }

        return true;
    }

    victoryConditionsMet() {
        const enemy = this.resources.get(not(this.turn));
        const player = this.resources.get(this.turn);
        
        const playerWon = enemy.bulwark == 0 ||
            player.bricks >= this.rules.goals.primary ||
            player.gems >= this.rules.goals.primary ||
            player.beasts >= this.rules.goals.primary ||
            player.bulwark >= this.rules.goals.bulwark;
        const enemyWon = player.bulwark == 0 ||
            enemy.bricks >= this.rules.goals.primary ||
            enemy.gems >= this.rules.goals.primary ||
            enemy.beasts >= this.rules.goals.primary ||
            enemy.bulwark >= this.rules.goals.bulwark;

        if (!playerWon & !enemyWon) return false;

        let data;
        // peu probable mais ça peut arriver
        if (playerWon && enemyWon) {
            data = { draw: true };
        } else if (playerWon) {
            data = { winner: this.turn };
        } else {
            data = { winner: not(this.turn)}
        }

        this.emit('game.endingGame', data);
        return true;
    }

    generateResources(player) {
        const playerResources = this.resources.get(player);

        playerResources.sentinels += playerResources.garrison;
        playerResources.workers += playerResources.guild;
        playerResources.soldiers += playerResources.barracks;
    }

    toggleTurn() {
        this.turn = not(this.turn);

        this.generateResources(this.turn);

        this.emit('game.togglingTurn', {
            turn: this.turn,
            resources: this.resources.get(this.turn)
        });
    }

    // personnalisable plus tard avec les variantes de taverne
    initResources() {
        return {...this.rules.resources};
    }
}
},{"./rulesets":8,"events":2}],7:[function(require,module,exports){
const { EventEmitter } = require('events');

// fonction pratique pour copier une carte en profondeur, vu le niveau d'imbrication de certains effets
const deepCopy = (obj) => {
    const copy = Array.isArray(obj)?[...obj]:{...obj};
    for (const key in obj) {
        if (typeof obj[key] === 'object') copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

module.exports = class extends EventEmitter {

    constructor(deck, game) {
        super();
        // on mémorise son deck
        this.deck = deck;
        // on le mélange
        for (let index = 0; index < 15; index++) {
            this.deck.sort(_ => Math.random() - .4);
        }

        // la main est vide, elle ne sera tirée que lorsque les 2 joueurs seront prêts
        this.hand = [];

        // on s'enregistre comme participant à la partie
        game.register(this);
        // et on le mémorise
        this.game = game;
    }

    // quand la partie se lance
    drawHand() {
        // on pioche 6 cartes pour créer la main
        for (let i = 0; i < 6; i++) {
            this.hand.push(this.deck.pop());
        }

        // à déplacer : le premier des 2 joueurs s'inscrit mais ce n'est que quand le deuxième arrive qu'on donne accès à l'environnement
        // event afterDrawing (before, aucun intérêt)
        this.emit('player.afterDrawing', {
            hand: deepCopy(this.hand)
        });
    }

    // override pour passer systématiquement l'environnement du joueur
    emit(event, data = null) {
        if (data) data.environment = this.getEnvironment();
        super.emit(event, data);
    }

    // getEnvironment() : greffé par l'environnement
    // ce n'est pas l'objet Environment, seulement un objet plat en lecture seule
    // mais il permet d'accéder rapidement à ce que voit le joueur

    // le joueur ne pourra que défausser une carte (effet des 2 cartes "piocher, défausser, rejouer")
    forceDiscard() {
        this.shallDiscard = true;
    }


    // jouer une carte (index est sa position dans la main)
    play(index) {

        // si le joueur doit défausser, on force l'action de défausse
        if (this.shallDiscard) {
            this.discard(index);
            return true;
        }

        // on copie la carte
        let theCard = deepCopy(this.hand[index]);

        // étape 0 : vérifier que le coût passe
        const [primary, cost] = Object.entries(theCard.cost)[0];
        // ressources insuffisantes
        if (this.getEnvironment().player[primary] < cost) {
            // la méthode renvoie faux si le coût ne passe
            // ou si la carte n'a pas été jouée (parce que ce n'est pas le tour du joueur, cf plus bas)
            return false;
        }

        // event beforePlaying
        this.emit('player.beforePlaying', {
            card: theCard,
            index
        });

        // s'il n'y a qu'un seul effet, pour faciliter l'écriture des cartes, l'effet ({}) est directement mis dans la prop effects
        // mais on va avoir besoin d'en faire un tableau, parce qu'il y a un autre effet à ajouter : le coût
        if (!Array.isArray(theCard.effects)) {
            theCard.effects = [theCard.effects];
        }

        // coût => effet
        theCard.effects.unshift({
            player: {
                [primary]: -cost
            }
        });

        // on compose une carte résolvable facilement par l'environnement
        let resolvableEffects = {
            player: this,
            effects: theCard.effects,
            playagain: theCard.playagain || false,
            forcediscard: theCard.forcediscard || false
        };

        let played;
        if (played = this.game.resolveCard(resolvableEffects)) {
            // event afterPlaying
            this.emit('player.afterPlaying', {
                card: theCard,
                index
            });

            // on défausse la carte, qui retourne dans le deck
            this.returnToDeck(index);
        }

        return played;
    }

    // défausser une carte
    discard(index) {
        
        let oldCard = this.hand[index];
            
        // event beforeDiscarding, avec l'ancienne carte et son index
        this.emit('player.beforeDiscarding', {
            oldCard: deepCopy(oldCard),
            index
        });

        if (!oldCard.magnet) {

            this.returnToDeck(index);

            // qu'il ait naturellement défaussé ou "joué" la carte qu'il devait défausser, on ne doit pas changer le tour
            if (this.shallDiscard) {
                // la carte est défaussée, c'est toujours son tour
                this.shallDiscard = false;
            } else {
                this.game.toggleTurn();
            }
        }

        return !oldCard.magnet;
    }

    // commun à play et discard : la partie où, après vérifs, on remet la carte dans le paquet et on en pioche une nouvelle
    returnToDeck(index) {

        // on défausse la carte, qui retourne dans le deck
        this.deck.unshift(this.hand.splice(index, 1)[0]);

        // et on repioche une carte
        let newCard;
        this.hand.push(newCard = this.deck.pop());

        // dont on fait une copie
        newCard = deepCopy(newCard);

        // event afterDiscarding, avec la carte piochée
        this.emit('player.afterDiscarding', {
            newCard
        });
    }
}
},{"events":2}],8:[function(require,module,exports){
module.exports = {
    "Dan'Tonk": {
        resources: {
            sentinels: 5,
            workers: 5,
            soldiers: 5,
            garrison: 2,
            guild: 2,
            barracks: 2,
            defense: 5,
            bulwark: 20
        },
        goals: {
            primary: 150,
            bulwark: 50
        }
    },
    "Aldril": {
        resources: {
            sentinels: 15,
            workers: 5,
            soldiers: 10,
            garrison: 3,
            guild: 1,
            barracks: 2,
            defense: 20,
            bulwark: 10
        },
        goals: {
            primary: 350,
            bulwark: 125
        }
    },
    "Carcyn": {
        resources: {
            sentinels: 10,
            workers: 10,
            soldiers: 10,
            garrison: 2,
            guild: 2,
            barracks: 2,
            defense: 5,
            bulwark: 15
        },
        goals: {
            primary: 100,
            bulwark: 30
        }
    }
}
},{}]},{},[3]);
