export const GRID_SCALE = 1000;  // coords come from 1000px by 1000px image
export const MAP_CIRCLE_SHAPE = 'circle';

const OBJECT_NAMES = {
    // misc
    ammo: "Ammo Station",
    mysteryBox: "Mystery Box",
    craftingTable: "Crafting Table",
    // perks
    juggerNog: "Jugger Nog",
    quickRevive: "Quick Revive",
    staminaUp: "Stamina Up"
}

// coords is x, y, radius
const MAP_DATA = [
    // ammos
    {name: OBJECT_NAMES.ammo, coords: [485, 300, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.ammo, coords: [505, 650, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.ammo, coords: [220, 505, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.ammo, coords: [530, 770, 25], shape: MAP_CIRCLE_SHAPE},
    // mystery box
    {name: OBJECT_NAMES.mysteryBox, coords: [480, 500, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.mysteryBox, coords: [360, 590, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.mysteryBox, coords: [520, 170, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.mysteryBox, coords: [615, 640, 25], shape: MAP_CIRCLE_SHAPE},
    // perks
    {name: OBJECT_NAMES.juggerNog, coords: [480, 200, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.quickRevive, coords: [285, 690, 25], shape: MAP_CIRCLE_SHAPE},
    {name: OBJECT_NAMES.staminaUp, coords: [620, 515, 25], shape: MAP_CIRCLE_SHAPE},
    // crafting tables
    {name: OBJECT_NAMES.craftingTable, coords: [555, 560, 25], shape: MAP_CIRCLE_SHAPE},
]

export default MAP_DATA;