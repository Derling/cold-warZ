export const GRID_SCALE = 1000;
export const MAP_CIRCLE_SHAPE = 'circle';

// coords is x, y, radius
const MAP_DATA = [
    // ammos
    {name: "Ammo Station", coords: [485, 300, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Ammo Station", coords: [480, 500, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Ammo Station", coords: [505, 650, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Ammo Station", coords: [220, 505, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Ammo Station", coords: [360, 590, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    // mystery box
    {name: "Mystery Box", coords: [520, 170, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Mystery Box", coords: [615, 640, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    // perks
    {name: "Jugger Nog", coords: [480, 200, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Quick Revive", coords: [285, 690, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    {name: "Stamina Up", coords: [620, 515, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
    // work benches
    {name: "Workbench", coords: [550, 550, 25], shape: MAP_CIRCLE_SHAPE, preFillColor:'blue'},
]

export default MAP_DATA;