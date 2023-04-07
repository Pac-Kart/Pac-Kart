function rgba8888(buffer, width, height) {
    let image_offset = 0
    for (i = 0,
    y = 0; y < height; y++) {
        for (x = 0; x < width; x++,
        i += 4) {

            color_r = new DataView(buffer).getUint8(image_offset + (i))
            color_g = new DataView(buffer).getUint8(image_offset + (i) + 1)
            color_b = new DataView(buffer).getUint8(image_offset + (i) + 2)
            color_a = new DataView(buffer).getUint8(image_offset + (i) + 3)

            ctx.fillStyle = `rgba(${color_r}, ${color_g}, ${color_b}, ${color_a})`
            ctx.fillRect(x, y, 1, 1)

        }
    }
    data_ = canvas.toDataURL()
}
