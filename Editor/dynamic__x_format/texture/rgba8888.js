function rgba8888(buffer, width, height, alpha) {

    let u8clamp_buffer

    if (alpha === false) {

        //convert rgb888 -> rgba8888
        let temp_array_buffer = new ArrayBuffer(width * height * 4)

        for (let i = 0, ii = 0; i < temp_array_buffer.byteLength; i += 4,
        ii += 3) {
            new DataView(temp_array_buffer).setUint8(i, new DataView(buffer).getUint8(ii))
            new DataView(temp_array_buffer).setUint8(i + 1, new DataView(buffer).getUint8(ii + 1))
            new DataView(temp_array_buffer).setUint8(i + 2, new DataView(buffer).getUint8(ii + 2))
            new DataView(temp_array_buffer).setUint8(i + 3, 255)
        }

        u8clamp_buffer = new Uint8ClampedArray(new DataView(temp_array_buffer).buffer)

    } else {
        u8clamp_buffer = new Uint8ClampedArray(new DataView(buffer).buffer)
    }
    let new_image_data = new ImageData(u8clamp_buffer,width,height)

    ctx.putImageData(new_image_data, 0, 0);

    data_ = canvas.toDataURL()
}
