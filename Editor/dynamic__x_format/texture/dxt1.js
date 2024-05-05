"use strict";
//returns rgba8888 from a raw dxt1 buffer
function dxt1(buffer, width, height, ctx) {
    let a = Date.now()
    let color_1
    let color_2
    let color_3
    let color_4

    let blue_color_1
    let blue_color_3
    let blue_color_4

    let green_color_1
    let green_color_3
    let green_color_4

    let red_color_1
    let red_color_3
    let red_color_4

    let image_offset = 0
    let temp_pixel_array

    for (let outer_y = 0; outer_y < height; outer_y += 4) {
        for (let outer_x = 0; outer_x < width; outer_x += 4) {

            let colors = get_color(buffer, image_offset)
            get_pixel_data()

            image_offset += 8

            for (let i = 0, y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++,
                i++) {

                    if (temp_pixel_array[i] == "00") {
                        ctx.fillStyle = "#" + color_1
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    } else if (temp_pixel_array[i] == "01") {
                        ctx.fillStyle = "#" + color_3
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    } else if (temp_pixel_array[i] == "10") {
                        ctx.fillStyle = "#" + color_2
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    } else if (temp_pixel_array[i] == "11") {
                        ctx.fillStyle = "#" + color_4
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    }
                }
            }
        }

    }
    console.log('saved in', Date.now() - a)
    return

    function get_color() {

        var i = 0
        var ii = 0
        for (; ii < 2; ii++,
        i += 2) {
            var color_byte1 = new DataView(buffer).getUint8(image_offset + i)
            var color_byte2 = new DataView(buffer).getUint8(image_offset + i + 1)

            let red_bit_1 = (color_byte2 >> 7) & 0x1;
            let red_bit_2 = (color_byte2 >> 6) & 0x1;
            let red_bit_3 = (color_byte2 >> 5) & 0x1;
            let red_bit_4 = (color_byte2 >> 4) & 0x1;
            let red_bit_5 = (color_byte2 >> 3) & 0x1;

            red_bit_1 = red_bit_1 * 16
            red_bit_2 = red_bit_2 * 8
            red_bit_3 = red_bit_3 * 4
            red_bit_4 = red_bit_4 * 2
            red_bit_5 = red_bit_5 * 1

            var red_color = red_bit_1 + red_bit_2 + red_bit_3 + red_bit_4 + red_bit_5

            red_color = Math.round(red_color * 8.2257)

            let green_bit_1 = (color_byte2 >> 2) & 0x1;
            let green_bit_2 = (color_byte2 >> 1) & 0x1;
            let green_bit_3 = (color_byte2 >> 0) & 0x1;
            let green_bit_4 = (color_byte1 >> 7) & 0x1;
            let green_bit_5 = (color_byte1 >> 6) & 0x1;
            let green_bit_6 = (color_byte1 >> 5) & 0x1;

            green_bit_1 = green_bit_1 * 32
            green_bit_2 = green_bit_2 * 16
            green_bit_3 = green_bit_3 * 8
            green_bit_4 = green_bit_4 * 4
            green_bit_5 = green_bit_5 * 2
            green_bit_6 = green_bit_6 * 1

            var green_color = green_bit_1 + green_bit_2 + green_bit_3 + green_bit_4 + green_bit_5 + green_bit_6

            green_color = Math.round(green_color * 4.048)

            let blue_bit_1 = (color_byte1 >> 4) & 0x1;
            let blue_bit_2 = (color_byte1 >> 3) & 0x1;
            let blue_bit_3 = (color_byte1 >> 2) & 0x1;
            let blue_bit_4 = (color_byte1 >> 1) & 0x1;
            let blue_bit_5 = (color_byte1 >> 0) & 0x1;

            blue_bit_1 = blue_bit_1 * 16
            blue_bit_2 = blue_bit_2 * 8
            blue_bit_3 = blue_bit_3 * 4
            blue_bit_4 = blue_bit_4 * 2
            blue_bit_5 = blue_bit_5 * 1

            var blue_color = blue_bit_1 + blue_bit_2 + blue_bit_3 + blue_bit_4 + blue_bit_5

            blue_color = Math.round(blue_color * 8.2257)

            red_color = red_color.toString(16);
            green_color = green_color.toString(16);
            blue_color = blue_color.toString(16);

            if (red_color.length == 1) {
                red_color = '0' + red_color
            }
            if (green_color.length == 1) {
                green_color = '0' + green_color
            }
            if (blue_color.length == 1) {
                blue_color = '0' + blue_color
            }

            if (ii == 0) {
                color_1 = red_color + green_color + blue_color
                red_color_1 = red_color
                green_color_1 = green_color
                blue_color_1 = blue_color
            } else {
                color_2 = red_color + green_color + blue_color

                red_color_1 = parseInt(red_color_1, 16)
                green_color_1 = parseInt(green_color_1, 16)
                blue_color_1 = parseInt(blue_color_1, 16)

                red_color = parseInt(red_color, 16)
                green_color = parseInt(green_color, 16)
                blue_color = parseInt(blue_color, 16)

                if (color_1 > color_2) {

                    red_color_3 = (2 * red_color_1 + red_color) / 3
                    green_color_3 = (2 * green_color_1 + green_color) / 3
                    blue_color_3 = (2 * blue_color_1 + blue_color) / 3

                    red_color_4 = (red_color_1 + 2 * red_color) / 3
                    green_color_4 = (green_color_1 + 2 * green_color) / 3
                    blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

                } else {

                    red_color_3 = (red_color_1 + red_color) / 2
                    green_color_3 = (green_color_1 + green_color) / 2
                    blue_color_3 = (blue_color_1 + blue_color) / 2

                    red_color_4 = (red_color_1 + 2 * red_color) / 3
                    green_color_4 = (green_color_1 + 2 * green_color) / 3
                    blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

                }

                red_color_3 = Math.round(red_color_3)
                green_color_3 = Math.round(green_color_3)
                blue_color_3 = Math.round(blue_color_3)

                red_color_4 = Math.round(red_color_4)
                green_color_4 = Math.round(green_color_4)
                blue_color_4 = Math.round(blue_color_4)

                red_color_3 = red_color_3.toString(16);
                green_color_3 = green_color_3.toString(16);
                blue_color_3 = blue_color_3.toString(16);

                red_color_4 = red_color_4.toString(16);
                green_color_4 = green_color_4.toString(16);
                blue_color_4 = blue_color_4.toString(16);

                if (red_color_3.length == 1) {
                    red_color_3 = '0' + red_color_3
                }
                if (green_color_3.length == 1) {
                    green_color_3 = '0' + green_color_3
                }
                if (blue_color_3.length == 1) {
                    blue_color_3 = '0' + blue_color_3
                }

                if (parseInt(red_color_3, 16) > 255) {
                    red_color_3 = "FF"
                }
                if (parseInt(green_color_3, 16) > 255) {
                    green_color_3 = "FF"
                }
                if (parseInt(blue_color_3, 16) > 255) {
                    blue_color_3 = "FF"
                }
                if (red_color_4.length == 1) {
                    red_color_4 = '0' + red_color_4
                }
                if (green_color_4.length == 1) {
                    green_color_4 = '0' + green_color_4
                }
                if (blue_color_4.length == 1) {
                    blue_color_4 = '0' + blue_color_4
                }

                color_3 = red_color_3 + green_color_3 + blue_color_3

                color_4 = red_color_4 + green_color_4 + blue_color_4

            }
        }

    }
    function get_pixel_data() {
        var i = 0
        var temp_1 = 0
        var iii = 0
        for (temp_pixel_array = []; iii < 16; iii += 4,
        i++) {
            var pixel_row = new DataView(buffer).getUint8(image_offset + i + 4)
            for (let ii = 0; ii < 8; ii += 2,
            temp_1++) {
                let pixel_1 = (pixel_row >> ii) & 0x1;
                let pixel_2 = (pixel_row >> ii + 1) & 0x1;

                temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
            }
        }

    }

}
