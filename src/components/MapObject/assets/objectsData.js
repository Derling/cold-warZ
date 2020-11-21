export const UPGRADE_LABELS = ["I", "II", "III"];

const OBJECTS_DATA = {
    "Ammo Station": {
        description: "Replenish ammo"
    },
    "Mystery Box": {
        description: "Spend 950 essence to receive a random weapon(random rarity)"
    },
    "Crafting Table": {
        description: "Spend crafting materials to create tactical/lethal grenades and support items"
    },
    "Jugger Nog": {
        description: "Increase the number of hit points you have",
        upgrades: [
            "Reduce status effect durations by 50%",
            "Armor plates replenish 25% additional armor",
            "Increase Maximum health by 100"
        ]
    },
    "Quick Revive": {
        description: "Revive others twice as fast",
        upgrades: [
            "Downed crawl speed is increased by 100%",
            "Reduce the delay before health starts regeneration by 50%",
            "Reviving an ally will also heal you to full heatlh"
        ]
    },
    "Stamina Up": {
        description: "Doubles player sprint endurance and increases player speed",
        upgrades: [
            "Increase backpedal speed",
            "Immunity to fall damage",
            "Walk faster while aiming down sights"
        ]
    }
};


export default OBJECTS_DATA;