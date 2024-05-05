"use strict";
function rgba8888(buffer, width, height, alpha, ctx) {
    let u8clamp_buffer;

    if (alpha === false) {
        const rgbaBuffer = new Uint8ClampedArray(width * height * 4);

        const dataView = new DataView(buffer);

        for (let i = 0, j = 0; i < buffer.byteLength; i += 3,
        j += 4) {
            rgbaBuffer[j] = dataView.getUint8(i);
            rgbaBuffer[j + 1] = dataView.getUint8(i + 1);
            rgbaBuffer[j + 2] = dataView.getUint8(i + 2);
            rgbaBuffer[j + 3] = 255;
            // Alpha channel set to 255 (fully opaque)
        }

        u8clamp_buffer = rgbaBuffer;
    } else {
        u8clamp_buffer = new Uint8ClampedArray(buffer);
    }

    const new_image_data = new ImageData(u8clamp_buffer,width,height);
    ctx.putImageData(new_image_data, 0, 0);
}
