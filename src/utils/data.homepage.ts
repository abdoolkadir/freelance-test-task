interface IHomepageValueSection {
  text: string;
  subtext: string;
  image: string;
}

interface IHomepageNewGamingWebSection {
  username: string;
  image: string;
  code: string;
}

export const HomepageValueSection: IHomepageValueSection[] = [
  {
    text: 'Gaming social layer',
    subtext: 'Gamers take control of their data.',
    image: '/images/value-section-1.png'
  },
  {
    text: 'Build next-gen fat dapps',
    subtext: 'Plug any apps on top of the gaming social layer.',
    image: '/images/value-section-2.png'
  }
];

export const HomepageNewGamingWebSection: IHomepageNewGamingWebSection[] = [
  {
    username: 'MonkeyIslander872',
    image: '/images/users/user-1.png',
    code: `player_metadata = {
    "player _name": "MonkeyIslander872",
    "gaming_platform": "PC",
    "game_level": 25,
    "achievements": ["Master of the Arena", "Legendary Explorer"],
    "total_score": 2000,
    "preferred_game_mode": "Team Deathmatch",
    "collected items": {
        "weapon": "Legendary Sword",
        "armor": "Epic Plate Armor",
        "pet": "Fire Dragon"
    }
}`
  },
  {
    username: 'mean_deal_',
    image: '/images/users/user-2.png',
    code: `player_metadata = {
    "player _name": "mean_deal_",
    "gaming_platform": "PC",
    "game_level": 25,
    "achievements": ["Master of the Arena", "Legendary Explorer"],
    "total_score": 2000,
    "preferred_game_mode": "Team Deathmatch",
    "collected items": {
        "weapon": "Legendary Sword",
        "armor": "Epic Plate Armor",
        "pet": "Fire Dragon"
    }
}`
  },
  {
    username: 'TennisChallenger',
    image: '/images/users/user-3.png',
    code: `player_metadata = {
    "player _name": "TennisChallenger",
    "gaming_platform": "PC",
    "game_level": 25,
    "achievements": ["Master of the Arena", "Legendary Explorer"],
    "total_score": 2000,
    "preferred_game_mode": "Team Deathmatch",
    "collected items": {
        "weapon": "Legendary Sword",
        "armor": "Epic Plate Armor",
        "pet": "Fire Dragon"
    }
}`
  },
  {
    username: 'DoozieWoozie',
    image: '/images/users/user-4.png',
    code: `player_metadata = {
    "player _name": "DoozieWoozie",
    "gaming_platform": "PC",
    "game_level": 25,
    "achievements": ["Master of the Arena", "Legendary Explorer"],
    "total_score": 2000,
    "preferred_game_mode": "Team Deathmatch",
    "collected items": {
        "weapon": "Legendary Sword",
        "armor": "Epic Plate Armor",
        "pet": "Fire Dragon"
    }
}`
  },
  {
    username: 'tired0fbeIngWired',
    image: '/images/users/user-5.png',
    code: `
    player_metadata = {
      'player _name': 'tired0fbeIngWired',
      gaming_platform: 'PC',
      game_level: 25,
      achievements: ['Master of the Arena', 'Legendary Explorer'],
      total_score: 2000,
      preferred_game_mode: 'Team Deathmatch',
      'collected items': {
        weapon: 'Legendary Sword',
        armor: 'Epic Plate Armor',
        pet: 'Fire Dragon'
      }
    };
    `
  },
  {
    username: 'Greendragon_',
    image: '/images/users/user-6.png',
    code: `player_metadata = {
    "player _name": "Greendragon_",
    "gaming_platform": "PC",
    "game_level": 25,
    "achievements": ["Master of the Arena", "Legendary Explorer"],
    "total_score": 2000,
    "preferred_game_mode": "Team Deathmatch",
    "collected items": {
        "weapon": "Legendary Sword",
        "armor": "Epic Plate Armor",
        "pet": "Fire Dragon"
    }
}`
  }
];
