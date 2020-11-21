const scaleCoords = (mapData, width, height, originalScale) => {
    return mapData.map(i => ({
        ...i,
        coords: [
            i.coords[0] * width / originalScale,
            i.coords[1] * height / originalScale,
            i.coords[2] * (width > height ? width : height) / originalScale,
        ]
    }))
}

export default scaleCoords;