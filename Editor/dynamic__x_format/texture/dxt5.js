function dxt5(buffer, width, height) {


        
    image_offset = 0
    for (outer_2_y = 0; outer_2_y < height; outer_2_y += 4) {
        for (outer_2_x = 0; outer_2_x < width; outer_2_x += 4) {

            dxt5_alpha()
            dxt5_color()
            dxt5_color_codes()

            image_offset += 16

            for (i = 0,
            y = 0; y < 4; y++) {
                for (x = 0; x < 4; x++,
                i++) {

                    if (temp_pixel_array[i] == "00") {
                        ctx.fillStyle = "#" + color_1 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    } else if (temp_pixel_array[i] == "01") {
                        ctx.fillStyle = "#" + color_3 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    } else if (temp_pixel_array[i] == "10") {
                        ctx.fillStyle = "#" + color_2 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    } else if (temp_pixel_array[i] == "11") {
                        ctx.fillStyle = "#" + color_4 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    }
                }

            }
        }
    }

    data_ = canvas.toDataURL()

    function dxt5_alpha() {
        alpha0 = new DataView(buffer).getUint8(image_offset)
        alpha1 = new DataView(buffer).getUint8(image_offset + 1)

        temp_alpha_array = []

        array_1 = extract_bits(image_offset + 2, buffer)
        temp_alpha_array_1 = bit_array

        array_2 = extract_bits(image_offset + 3, buffer)
        temp_alpha_array_2 = bit_array

        array_3 = extract_bits(image_offset + 4, buffer)
        temp_alpha_array_3 = bit_array

        array_4 = extract_bits(image_offset + 5, buffer)
        temp_alpha_array_4 = bit_array

        array_5 = extract_bits(image_offset + 6, buffer)
        temp_alpha_array_5 = bit_array

        array_6 = extract_bits(image_offset + 7, buffer)
        temp_alpha_array_6 = bit_array

        temp_alpha_array.push(temp_alpha_array_1[7] + "" + temp_alpha_array_1[6] + "" + temp_alpha_array_1[5])
        temp_alpha_array.push(temp_alpha_array_1[4] + "" + temp_alpha_array_1[3] + "" + temp_alpha_array_1[2])
        temp_alpha_array.push(temp_alpha_array_1[1] + "" + temp_alpha_array_1[0] + "" + temp_alpha_array_2[7])
        temp_alpha_array.push(temp_alpha_array_2[6] + "" + temp_alpha_array_2[5] + "" + temp_alpha_array_2[4])
        temp_alpha_array.push(temp_alpha_array_2[3] + "" + temp_alpha_array_2[2] + "" + temp_alpha_array_2[1])
        temp_alpha_array.push(temp_alpha_array_2[0] + "" + temp_alpha_array_3[7] + "" + temp_alpha_array_3[6])
        temp_alpha_array.push(temp_alpha_array_3[5] + "" + temp_alpha_array_3[4] + "" + temp_alpha_array_3[3])
        temp_alpha_array.push(temp_alpha_array_3[2] + "" + temp_alpha_array_3[1] + "" + temp_alpha_array_3[0])
        temp_alpha_array.push(temp_alpha_array_4[7] + "" + temp_alpha_array_4[6] + "" + temp_alpha_array_4[5])
        temp_alpha_array.push(temp_alpha_array_4[4] + "" + temp_alpha_array_4[3] + "" + temp_alpha_array_4[2])
        temp_alpha_array.push(temp_alpha_array_4[1] + "" + temp_alpha_array_4[0] + "" + temp_alpha_array_5[7])
        temp_alpha_array.push(temp_alpha_array_5[6] + "" + temp_alpha_array_5[5] + "" + temp_alpha_array_5[4])
        temp_alpha_array.push(temp_alpha_array_5[3] + "" + temp_alpha_array_5[2] + "" + temp_alpha_array_5[1])
        temp_alpha_array.push(temp_alpha_array_5[0] + "" + temp_alpha_array_6[7] + "" + temp_alpha_array_6[6])
        temp_alpha_array.push(temp_alpha_array_6[5] + "" + temp_alpha_array_6[4] + "" + temp_alpha_array_6[3])
        temp_alpha_array.push(temp_alpha_array_6[2] + "" + temp_alpha_array_6[1] + "" + temp_alpha_array_6[0])

        for (temp_alpha_array_i = 0; temp_alpha_array_i < 16; temp_alpha_array_i++) {
            if (alpha0 > alpha1) {
                if (temp_alpha_array[temp_alpha_array_i] === "000") {
                    let convert_hex = alpha0
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex
                } else if (temp_alpha_array[temp_alpha_array_i] === "100") {
                    convert_hex = alpha1
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex
                } else if (temp_alpha_array[temp_alpha_array_i] === "010") {
                    convert_hex = (6 * alpha0 + 1 * alpha1) / 7
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "110") {
                    convert_hex = (5 * alpha0 + 2 * alpha1) / 7
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "001") {
                    convert_hex = (4 * alpha0 + 3 * alpha1) / 7
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "101") {
                    convert_hex = (3 * alpha0 + 4 * alpha1) / 7
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "011") {
                    convert_hex = (2 * alpha0 + 5 * alpha1) / 7
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "111") {
                    convert_hex = (1 * alpha0 + 6 * alpha1) / 7
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                }
            } else if (alpha0 <= alpha1) {
                if (temp_alpha_array[temp_alpha_array_i] === "000") {
                    convert_hex = alpha0
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "100") {
                    convert_hex = alpha1
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "010") {
                    convert_hex = (4 * alpha0 + 1 * alpha1) / 5
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "110") {
                    convert_hex = (3 * alpha0 + 2 * alpha1) / 5
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "001") {
                    convert_hex = (2 * alpha0 + 3 * alpha1) / 5
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "101") {
                    convert_hex = (1 * alpha0 + 4 * alpha1) / 5
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "011") {

                    convert_hex = 0
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                } else if (temp_alpha_array[temp_alpha_array_i] === "111") {
                    convert_hex = 255
                    convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                    temp_alpha_array[temp_alpha_array_i] = convert_hex

                }

            }
        }
    }

    function dxt5_color() {
        var i = 0
        var ii = 0
        for (; ii < 2; ii++,
        i += 2) {
            var color_byte1 = new DataView(buffer).getUint8(image_offset + 8 + i)
            var color_byte2 = new DataView(buffer).getUint8(image_offset + 9 + i)

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
                //
                //
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
    function dxt5_color_codes() {
        // codes0 = extract_bits(image_offset + 12, buffer)
        // codes1 = extract_bits(image_offset + 13, buffer)
        // codes2 = extract_bits(image_offset + 14, buffer)
        // codes3 = extract_bits(image_offset + 15, buffer)

        var i = 0
        var temp_1 = 0
        var iii = 0
        for (temp_pixel_array = []; iii < 16; iii += 4,
        i++) {
            var pixel_row = new DataView(buffer).getUint8(image_offset + i + 12)
            for (ii = 0; ii < 8; ii += 2,
            temp_1++) {
                let pixel_1 = (pixel_row >> ii) & 0x1;
                let pixel_2 = (pixel_row >> ii + 1) & 0x1;

                temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
            }
        }

    }

}
