function load_texture(offset, mid) {
    offset_mid = mid

    load_edit_texture(offset, offset_mid)

    if (fileextension == 'xps' || fileextension == "xpp") {
        document.getElementById("file_editor").innerHTML += "<br><br>⚠️ warning PSP/PS2 format is not currently parsed correctly"
    }

}

function extract_bits(offset, buffer) {
    bit_array = []
    let bit_field = new DataView(buffer).getUint8(offset)
    for (let bit_i = 7; bit_i > -1; bit_i--) {
        bit_array.push((bit_field >> bit_i) & 0x1)
    }
}

// function attach_textures() {

//     //get to texture offset all ?
//     // gc,ps2,xbox,pc psp, yes 

//     //baron yes/ 

//     //16 bytes per entry
//     // ????
//     // ??
//     // x / y
//     // offset texture
//     //offset texture name / bytes variable

//     //hot wheels velocity x
//     //u16 , 4/5
//     //u16 , 64 x?
//     //u16 , 64 y?
//     //u16 , 7
//     //u32 offset data
//     //u32 always 0

//     texture_offset_list = (offset_mid + _3_24__offset__btf_textures)

//     console.log('texture offset:', texture_offset_list)

//     if (game == 'rally') {
//         i_offset_plus = 64
//     } else {
//         i_offset_plus = 16
//     }

//     i_offset = 0
//     for (i = 0; i < _3_20__amount__btf_textures; i++,
//     i_offset += i_offset_plus) {

//         if (game == 'rally') {

//             for (string_i = 12,
//             btf_string = ""; string_i < 64; string_i++) {
//                 btf_string += String.fromCharCode(u8(i_offset + texture_offset_list + string_i))
//             }

//         } else if (game == 'baron') {
//             temp_name_offset = u32(i_offset + texture_offset_list + 12, is_little_endian) + offset_mid
//             next_temp_name_offset = u32(i_offset + texture_offset_list + 24, is_little_endian) + offset_mid

//             if (((_3_20__amount__btf_textures * i_offset_plus) - i_offset_plus) == i_offset) {
//                 btf_string = 'last'

//                 for (string_i = 0,
//                 btf_string = ""; (string_i) < 128; string_i++) {
//                     btf_string += String.fromCharCode(u8(temp_name_offset + string_i))

//                     if (u32(temp_name_offset + string_i, true) == 1634169902) {
//                         btf_string += "tga"
//                         string_i += 128

//                     }
//                 }

//             } else {

//                 for (string_i = 0,
//                 btf_string = ""; (string_i + temp_name_offset) < next_temp_name_offset; string_i++) {
//                     btf_string += String.fromCharCode(u8(temp_name_offset + string_i))
//                 }

//             }

//         } else {
//             btf_string = 'no name'
//         }

//         var link = document.createElement("p");
//         link.innerHTML = btf_string
//         document.getElementById("texture_table_" + i).appendChild(link)

//         document.getElementById("texture_row_select_" + i).addEventListener("click", load_edit_texture);

//     }

// }

function load_edit_texture(offset, offset_mid) {

    // for (var i = 0; i < document.getElementsByClassName("binary_table")[0].children[1].children.length; i++) {
    //     document.getElementsByClassName("binary_table")[0].children[1].children[i].dataset.sound_row_select = 'false'
    // }
    // let select_row_index = this.getElementsByTagName('td')[0].innerText - 1
    // document.getElementsByClassName("binary_table")[0].children[1].children[select_row_index].dataset.sound_row_select = 'true'

    offset_texture_entry = offset

    get_texture_settings(offset, offset_mid)

    texture_data_offset = texture_data_offset + offset_mid

    document.getElementById("file_editor").innerHTML = `
        <div data-debug='true'>
    <p> texture header offset: ${offset}
    <br> texture header data amount: <a id='start_texture_offset'>${i_offset_plus}</a>
    <br> 
    <p>data offset ${texture_data_offset} </p>
    <p>texture type ${texture_type_value} <br>
    Mipmaps: ${texture_mipmap_value}  </p>


    </div>
    <p>x ${texture_x} y ${texture_y} </p>
    <p>format: ${texture_format} </p>
    <hr>
`
    x_to_texture(offset, offset_mid)

    image_file_input()

}

function image_file_input() {
    if (fileextension === 'xgc') {
        return
    }
    if (fileextension == "xpc" || fileextension == "xdx") {
        if (texture_type_value === 24 || texture_type_value === 160) {
            document.getElementById("file_editor").innerHTML += "<hr><input id='rgba_file' type='file'>"
            document.getElementById("rgba_file").addEventListener("change", image_import_file)
        } else if (texture_type_value === 4 || texture_type_value === 5 || texture_type_value === 65 || texture_type_value === 197) {
            document.getElementById("file_editor").innerHTML += "<hr><p>⚠️ compression format / width and height must be the same<br></p><input id='dds_file' type='file'>"
            document.getElementById("dds_file").addEventListener("change", image_import_file)
        } else {
            document.getElementById("file_editor").innerHTML += "<hr><p>file format not currently supported </p>"
        }

    }
}

function image_import_file(event) {

    console.log('save')
    if (texture_type_value === 24 || texture_type_value === 160) {
        console.log(this, event)
        generate_canvas_replacement_pc(event)
        return;
    }

    var file = event.target.files[0];
    var reader = new FileReader();

    dds_buffer = reader.readAsArrayBuffer(file);

    document.getElementById("dds_file").value = ''

    reader.onload = function(e) {

        dds_buffer = e.target.result

        // basic check
        if (new DataView(dds_buffer).getUint32(0, false) !== 1145328416) {
            alert("wrong file magic");
            return;
        }
        if (new DataView(dds_buffer).getUint32(84, false) === 1146639413 && texture_type_value === 197) {
            //dxt5
            is_dxt5 = true
        } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639413 && texture_type_value === 5) {
            //dxt1
            is_dxt5 = true
        } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639409 && texture_type_value === 65) {
            //dxt1
            is_dxt5 = false
        } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639409 && texture_type_value === 4) {
            //dxt1
            is_dxt5 = false
        } else {
            alert("dds compression missmatch")
            return;
        }

        if (new DataView(dds_buffer).getUint32(12, true) !== texture_y) {
            alert("wrong y dimensions")
            return;
        }
        if (new DataView(dds_buffer).getUint32(16, true) !== texture_x) {
            alert("wrong x dimensions")
            return;
        }

        // is dds file

        // calculate_mips
        dds_mips = new DataView(dds_buffer).getUint32(28, true)

        temp_y = texture_y
        temp_x = texture_x
        dds_offset = 128
        x_texture_offset = texture_data_offset

        if (texture_mipmap_value == 0) {
            texture_mipmap_value = 1
        }

        for (dds_loop_i = 0; dds_loop_i < texture_mipmap_value; dds_loop_i++) {
            calculate_length_dds(temp_x, temp_y, is_dxt5)

            import_dds_into_x(dds_buffer, dds_offset, x_texture_offset, dds_new_byte_length)

            temp_x = temp_x / 2
            temp_y = temp_y / 2

        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }

}

function generate_canvas_replacement_pc(ev) {

    file_temp = ev.target.files[0];

    blobURL = URL.createObjectURL(file_temp);
    img_temp = new Image();
    img_temp.src = blobURL;

    img_temp.onerror = function() {
        URL.revokeObjectURL(this.src);
        // Handle the failure properly
        alert("not an image file");
    }

    img_temp.onload = function() {

        let img_width = width
        let img_height = height

        // let is_power_of_2 = powerOfTwo(img_width)
        // while (is_power_of_2 === false) {
        //     img_width--
        //     is_power_of_2 = powerOfTwo(img_width)
        // }
        // is_power_of_2 = powerOfTwo(img_height)
        // while (is_power_of_2 === false) {
        //     img_height--
        //     is_power_of_2 = powerOfTwo(img_height)
        // }

        // console.log('true',img_width,img_height)

        // I'm using a <input type="file"> for demonstrating

        URL.revokeObjectURL(this.src);
        mime_type = "image/jpeg";
        quality = qualityRate(file_temp.size);
        canvas_temp = document.createElement("canvas");
        canvas_temp.width = img_width
        canvas_temp.height = img_height
        ctx_temp = canvas_temp.getContext("2d");
        ctx_temp.imageSmoothingEnabled = false
        ctx_temp.drawImage(img_temp, 0, 0, canvas_temp.width, canvas_temp.height);

        document.getElementById("file_editor").append(canvas_temp);

        let temp_array = ctx_temp.getImageData(0, 0, canvas_temp.width, canvas_temp.height).data

        var arrayBuffer = temp_array.buffer.slice(temp_array.byteOffset, temp_array.byteLength + temp_array.byteOffset);

        //

        let array_length = arrayBuffer.byteLength
        let data_off = texture_data_offset

        if (texture_type_value === 24) {
            array_length = Math.floor(array_length / 1.333333333333333333)

            for (let i = 0, ii = 0; i < array_length; i += 3,
            ii += 4) {
                new DataView(buffer).setUint8(data_off + i, new DataView(arrayBuffer).getUint8(ii))
                new DataView(buffer).setUint8(data_off + i + 1, new DataView(arrayBuffer).getUint8(ii + 1))
                new DataView(buffer).setUint8(data_off + i + 2, new DataView(arrayBuffer).getUint8(ii + 2))
            }
        } else {
            for (let i = 0; i < array_length; i += 4) {
                new DataView(buffer).setUint8(data_off + i, new DataView(arrayBuffer).getUint8(i))
                new DataView(buffer).setUint8(data_off + i + 1, new DataView(arrayBuffer).getUint8(i + 1))
                new DataView(buffer).setUint8(data_off + i + 2, new DataView(arrayBuffer).getUint8(i + 2))
                new DataView(buffer).setUint8(data_off + i + 3, new DataView(arrayBuffer).getUint8(i + 3))
            }
        }
        console.log(arrayBuffer)
        // TXFA.texture.push(arrayBuffer)

        // canvas_temp.toBlob(blob=>{
        //     let localfile = new File([blob],'import.png',{
        //         type: "image/jpeg",
        //         lastModified: new Date().getTime()
        //     },'utf-8');
        //     let container = new DataTransfer();
        //     container.items.add(localfile);
        //     aaaaaaaaa = container
        //     console.log(container)
        //     console.log(container.files)
        //     canvas_temp.files = container.files;
        //     canvas_temp.toDataURL(canvas_temp.files[0])
        // }
        // , mime_type, quality);

        // console.log("?")
        let position = document.getElementsByClassName("file_is_highlighted")[0]
        position.click()

    }

    // img_temp.onload = function() {
    //     URL.revokeObjectURL(this.src);
    //     mime_type = "image/jpeg";
    //     quality = qualityRate(file_temp.size);
    //     canvas_temp = document.createElement("canvas");
    //     canvas_temp.width = texture_x;
    //     canvas_temp.height = texture_y;
    //     ctx_temp = canvas_temp.getContext("2d");
    //     ctx_temp.imageSmoothingEnabled = false
    //     ctx_temp.drawImage(img_temp, 0, 0, texture_x, texture_y);

    //     document.getElementById("dds_file").append(canvas_temp);

    //     canvas_temp.toBlob(blob=>{
    //         let localfile = new File([blob],'import.png',{
    //             type: "image/jpeg",
    //             lastModified: new Date().getTime()
    //         },'utf-8');
    //         let container = new DataTransfer();
    //         container.items.add(localfile);
    //         aaaaaaaaa = container
    //         console.log(container)
    //         console.log(container.files)
    //         canvas_temp.files = container.files;
    //         canvas_temp.toDataURL(canvas_temp.files[0])
    //     }
    //     , mime_type, quality);

    console.log("?")
    // }
    // ;
}
function calculate_length_dds(x, y, is_dxt5) {

    if (is_dxt5 === true) {
        dds_new_byte_length = x * y
    } else {
        dds_new_byte_length = x * y / 2
    }

}
function import_dds_into_x(dds_buffer, dds_offset, x_texture_offset_, length) {

    for (i = 0; i < length; i++) {

        temp_i = new DataView(dds_buffer).getUint8(i + dds_offset)
        new DataView(buffer).setUint8(i + x_texture_offset_, temp_i)
    }
    x_texture_offset += i
}

function get_texture_settings(texture_offset) {

    if (game == 'pac_man_world_rally') {
        texture_type_value = u8(texture_offset)
        texture_mipmap_value = u8(texture_offset + 1)
        texture_x = Math.pow(2, u8(texture_offset + 2, is_little_endian))
        texture_y = Math.pow(2, u8(texture_offset + 3, is_little_endian))
        if (fileextension == 'xpp') {
            texture_data_offset = u32(texture_offset + 4, is_little_endian)
        } else {

            texture_data_offset = u32(texture_offset + 8, is_little_endian)

            texture_data_offset_uknown = u32(texture_offset + 4, is_little_endian)
            console.log(texture_data_offset_uknown)
        }

    } else if (game == 'snoopy_vs_the_red_baron') {
        console.log(u32(texture_offset + 0, is_little_endian))

        texture_type_value = u8(texture_offset + 4, is_little_endian)
        texture_mipmap_value = u8(texture_offset + 5, is_little_endian)
        texture_x = Math.pow(2, u8(texture_offset + 6, is_little_endian))
        texture_y = Math.pow(2, u8(texture_offset + 7, is_little_endian))
        texture_data_offset = u32(texture_offset + 8, is_little_endian)
    } else {
        texture_type_value = u16(texture_offset + 0, is_little_endian)
        texture_x = u16(texture_offset + 2, is_little_endian)
        texture_y = u16(texture_offset + 4, is_little_endian)
        texture_mipmap_value = u16(texture_offset + 6, is_little_endian)
        texture_data_offset = u32(texture_offset + 8, is_little_endian)
        console.log(u32(texture_offset + 12, is_little_endian))
    }

    //     console.log(`0 / 1st: ${u16(texture_offset, is_little_endian)}
    // 2 / 2nd: ${u16(texture_offset + 2, is_little_endian)}
    // 4 / 3nd: ${u8(texture_offset + 4, is_little_endian)}
    // 5 / 3nd: ${u8(texture_offset + 5, is_little_endian)}
    // 6 / 4nd: ${u8(texture_offset + 6, is_little_endian)}
    // 7 / 5nd: ${u8(texture_offset + 7, is_little_endian)}
    // 8 / 6 ${u32(texture_offset + 8, is_little_endian)}
    // 12 / 7 ${u32(texture_offset + 12, is_little_endian)}`)

    //offset to texture
    //texture x y
    //texture type //c1 ?

    //baron textre headre format
    //u32 values usually the same
    // 00 02 24 A8 (140456) / 00 02 97 9D (169885)
    // 2820932096 = has mips?
    // 2643919360
    // 900923904 = rgba no mips
    //
    //u8 texture type
    //u8 mip maps
    //u8 x
    //u8 y
    //u32 texture offset
    //u32 string offset
    //strings are 16 dibisible by 16
    //end is relative on next offset / start of logic

    //hot wheels
    //u16 ?? 4 / 128 / 5 =256
    //u16 x
    //u16 y
    //u16 ??
    //u32 offset texture
    //u32 padding?

    if (texture_type_value === 4) {
        texture_format = "DDS (dxt1 compression)"
    } else if (texture_type_value === 5) {
        texture_format = "DDS (dxt5 compression)"
    } else if (texture_type_value === 24) {
        texture_format = "RGB888 (no aplha)"
    } else if (texture_type_value === 65) {
        texture_format = "DDS (dxt1 compression)"
    } else if (texture_type_value === 68) {
        texture_format = "???"
    } else if (texture_type_value === 72) {
        texture_format = "???"
    } else if (texture_type_value === 160) {
        texture_format = "PNG/JPEG (RGBA uncompressed)"
    } else if (texture_type_value === 193) {
        texture_format = "DDS (dxt1 compression + alpha texture half size)"
    } else if (texture_type_value === 194) {
        texture_format = "DDS (dxt1 compression + alpha texture)"
    } else if (texture_type_value === 196) {
        texture_format = "???"
    } else if (texture_type_value === 197) {
        texture_format = "DDS (dxt5 compression)"
    } else if (texture_type_value === 200) {
        texture_format = "???"
    } else {
        texture_format = "unknown"
    }

}

function x_to_texture(offset, offset_mid) {
    generate_canvas()

    canvas_html = ""

    canvas.width = texture_x
    canvas.height = texture_y

    image_offset = texture_data_offset
    console.log(texture_data_offset, 'offset')

    if (game == 'idk') {// dxt1_to_canvas()
    } else if (game == 'pac_man_world_rally' && fileextension == 'xgc') {
        dxt1_gc_to_canvas()
    } else {
        rgba64_to_canvas()
        // dxt1_to_canvas()
    }

}

function generate_canvas() {
    let temp_canvas = document.createElement("canvas")
    temp_canvas.id = 'canvas'
    temp_canvas.style = 'width: 0px;'
    document.getElementById("file_editor").appendChild(temp_canvas)

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
}

function rgba64_to_canvas() {

    if (fileextension === "xps") {
    image_offset += 16
    }

    if (texture_type_value == 160) {
        for (i = 0,
        y = 0; y < texture_y; y++) {
            for (x = 0; x < texture_x; x++,
            i += 4) {

                color_r = u8(image_offset + (i))
                color_g = u8(image_offset + (i) + 1)
                color_b = u8(image_offset + (i) + 2)
                color_a = u8(image_offset + (i) + 3)

                ctx.fillStyle = `rgba(${color_r}, ${color_g}, ${color_b}, ${color_a})`
                ctx.fillRect(x, y, 1, 1)

            }
        }
    } else if (texture_type_value == 65 || texture_type_value == 4) {
        dxt1_to_canvas()
    } else if (texture_type_value == 197 || texture_type_value == 5) {
        dxt5_to_canvas()
    } else if (texture_type_value == 24) {
        _24_to_canvas()
    } else if (texture_type_value == 72 || texture_type_value == 200) {
        _72_to_canvas()
    } else {

        for (i = 0,
        y = 0; y < texture_y; y++) {
            for (x = 0; x < texture_x; x++,
            i += 3) {

                color_r = u8(image_offset + (i))
                color_g = u8(image_offset + (i) + 1)
                color_b = u8(image_offset + (i) + 2)
                // color_a = u8(image_offset + (i) + 3)

                ctx.fillStyle = `rgb(${color_r}, ${color_g}, ${color_b})`
                ctx.fillRect(x, y, 1, 1)

            }
        }
    }

    if (texture_x < 64) {
        width = 256
    } else {
        width = texture_x
    }
    if (texture_y < 64) {
        height = 256
    } else {
        height = texture_y
    }

    temp_style = 'border:1px solid;background:white;'
    if (game === "hot_wheels_velocity_x") {
        temp_style += 'transform:rotateX(180deg);'
    }

    data_ = canvas.toDataURL()
    document.getElementById("file_editor").innerHTML += `<img style="${temp_style}" width='${width}' height='${height}' src='${data_}'></img>`

}

function _72_to_canvas() {
    let tex_color_array = []
    
    for (let i = 0; i < 1024; i+=4) {
    tex_color_array.push([u8(image_offset),u8(image_offset + 1),u8(image_offset + 2),u8(image_offset + 3)])
    image_offset += 4
    }
    
    for (y = 0; y < texture_y; y += 1) {
        for (x = 0; x < texture_x; x += 1) {
        ctx.fillStyle = `rgba( ${tex_color_array[u8(image_offset)].toString()} )`
        ctx.fillRect(x, y, 1, 1)

            image_offset += 1
        }
        //
        console.log(image_offset)
    }

    data_ = canvas.toDataURL()
}

function _24_to_canvas() {
    for (y = 0; y < texture_y; y += 1) {
        for (x = 0; x < texture_x; x += 1) {

        

        ctx.fillStyle = `rgb(${u8(image_offset)}, ${u8(image_offset +1)}, ${u8(image_offset +2)})`
        ctx.fillRect(x, y, 1, 1)

        image_offset+=3

        }
    }

    data_ = canvas.toDataURL()
}

function dxt5_to_canvas() {

    for (outer_2_y = 0; outer_2_y < texture_y; outer_2_y += 4) {
        for (outer_2_x = 0; outer_2_x < texture_x; outer_2_x += 4) {

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
        var pixel_row = u8(image_offset + i + 12)
        for (ii = 0; ii < 8; ii += 2,
        temp_1++) {
            let pixel_1 = (pixel_row >> ii) & 0x1;
            let pixel_2 = (pixel_row >> ii + 1) & 0x1;

            temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
        }
    }

}

function dxt5_color() {
    var i = 0
    var ii = 0
    for (; ii < 2; ii++,
    i += 2) {
        var color_byte1 = u8(image_offset + 8 + i)
        var color_byte2 = u8(image_offset + 9 + i)

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
function dxt5_alpha() {
    alpha0 = u8(image_offset)
    alpha1 = u8(image_offset + 1)

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

function dxt1_to_canvas() {

    for (outer_y = 0; outer_y < texture_y; outer_y += 4) {
        for (outer_x = 0; outer_x < texture_x; outer_x += 4) {

            get_color()
            get_pixel_data_pc()

            image_offset += 8

            for (i = 0,
            y = 0; y < 4; y++) {
                for (x = 0; x < 4; x++,
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

    data_ = canvas.toDataURL()

}

function dxt1_gc_to_canvas() {

    dxt1_gc_file_id = 0

    alpha_loop = 0
    while (alpha_loop < 2) {

        dxt1_gc_file_id++

        if (texture_type_value == 193 && alpha_loop == 0) {
            btf_offset = u32(offset_texture_entry + 8, is_little_endian)
            alpha_loop++
            divide_2 = false
        } else if (texture_type_value == 193 && alpha_loop == 1) {
            btf_offset = u32(offset_texture_entry + 4, is_little_endian)
            alpha_loop++
            divide_2 = false
        } else if (texture_type_value == 194 && alpha_loop == 0) {
            btf_offset = u32(offset_texture_entry + 8, is_little_endian)
            alpha_loop++
            divide_2 = false
        } else if (texture_type_value == 194 && alpha_loop == 1) {
            btf_offset = u32(offset_texture_entry + 4, is_little_endian)
            alpha_loop++
            divide_2 = true
        } else {
            btf_offset = u32(offset_texture_entry + 8, is_little_endian)
            alpha_loop += 2
            divide_2 = false
        }

        if (divide_2 == true) {
            texture_y = texture_y / 2
            texture_x = texture_x / 2
        }

        canvas.width = texture_x
        canvas.height = texture_y

        for (outer_2_y = 0; outer_2_y < texture_y; outer_2_y += 8) {
            for (outer_2_x = 0; outer_2_x < texture_x; outer_2_x += 8) {
                for (outer_y = 0; outer_y < 8; outer_y += 4) {
                    for (outer_x = 0; outer_x < 8; outer_x += 4) {

                        get_color_gc()
                        get_pixel_data()

                        image_offset += 8

                        for (i = 0,
                        y = 0; y < 4; y++) {
                            for (x = 0; x < 4; x++,
                            i++) {

                                if (temp_pixel_array[i] == "00") {
                                    ctx.fillStyle = "#" + color_1
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                } else if (temp_pixel_array[i] == "01") {
                                    ctx.fillStyle = "#" + color_2
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                } else if (temp_pixel_array[i] == "10") {
                                    ctx.fillStyle = "#" + color_3
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                } else if (temp_pixel_array[i] == "11") {
                                    ctx.fillStyle = "#" + color_4
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                }
                            }

                        }
                    }
                }
            }
        }

        if (dxt1_gc_file_id == 2) {
            document.getElementById("file_editor").innerHTML += "<hr><p>alpha texture:</p>"
        }

        data_ = canvas.toDataURL()
        document.getElementById("file_editor").innerHTML += `<div 
        data-texture_offset='${btf_offset}'
        data-texture_width='${texture_x}'
        data-texture_height='${texture_y}'
        data-texture_type='${texture_type_value}'
        data-texture_id='${dxt1_gc_file_id}'>
        <img width='256' height='256' src='${data_}'></img>
        <input id="img-input${dxt1_gc_file_id}" type="file" name="fileTest" accept="image/*" />
        <div id="root ${dxt1_gc_file_id}"></div>
</div>`
    }
    if (texture_type_value == 193 || texture_type_value == 194) {
        document.getElementById("img-input1").addEventListener("change", generate_canvas_replacement);
        document.getElementById("img-input2").addEventListener("change", generate_canvas_replacement);
    } else {
        document.getElementById("img-input1").addEventListener("change", generate_canvas_replacement);
    }

}

function generate_canvas_replacement(ev) {

    texture_data_offset = Number(this.parentElement.dataset.texture_offset)
    texture_y = Number(this.parentElement.dataset.texture_height)
    texture_x = Number(this.parentElement.dataset.texture_width)
    texture_id = Number(this.parentElement.dataset.texture_id)
    texture_type_tag_value = Number(this.parentElement.dataset.texture_type)

    file_temp = ev.target.files[0];
    // get the file
    blobURL = URL.createObjectURL(file_temp);
    img_temp = new Image();
    img_temp.src = blobURL;

    img_temp.onerror = function() {
        URL.revokeObjectURL(this.src);
        // Handle the failure properly
        console.log("Cannot load image");
    }
    ;

    img_temp.onload = function() {
        URL.revokeObjectURL(this.src);
        mime_type = "image/jpeg";
        quality = qualityRate(file_temp.size);
        canvas_temp = document.createElement("canvas");
        canvas_temp.width = texture_x;
        canvas_temp.height = texture_y;
        ctx_temp = canvas.getContext("2d");
        ctx_temp.imageSmoothingEnabled = false
        ctx_temp.drawImage(img_temp, 0, 0, texture_x, texture_y);

        document.getElementById("root" + texture_id).append(canvas_temp);

        canvas_temp.toBlob(blob=>{
            let localfile = new File([blob],'import.png',{
                type: "image/jpeg",
                lastModified: new Date().getTime()
            },'utf-8');
            let container = new DataTransfer();
            container.items.add(localfile);
            document.querySelector('#img-input' + texture_id).files = container.files;
        }
        , mime_type, quality);

        get_pixels_to_dtx1_gc()
    }
    ;
}

function qualityRate(fileSize) {
    let QUALITY = 0.5;

    if (1000000 > fileSize) {
        QUALITY = 0.5;
    } else if (3000000 > fileSize) {
        QUALITY = 0.7;
    } else if (5000000 > fileSize) {
        QUALITY = 0.5;
    } else if (10000000 > fileSize) {
        QUALITY = 0.9;
    } else {
        QUALITY = 0.1;
    }
    return QUALITY;
}

function get_pixels_to_dtx1_gc() {

    temp_pixel_buffer = new ArrayBuffer((texture_x * texture_y) / 2)
    temp_pixel_buffer_offset = 0
    //get a pixel block

    for (outer_3_y = 0; outer_3_y < texture_y; outer_3_y += 8) {
        for (outer_3_x = 0; outer_3_x < texture_x; outer_3_x += 8) {

            for (outer_2_y = 0; outer_2_y < 8; outer_2_y += 4) {
                for (outer_2_x = 0; outer_2_x < 8; outer_2_x += 4) {

                    pixel_block_array = []

                    for (outer_y = 0; outer_y < 4; outer_y += 1) {
                        for (outer_x = 0; outer_x < 4; outer_x += 1) {

                            pixel_block_array.push(ctx_temp.getImageData(outer_x + outer_2_x + outer_3_x, outer_y + outer_2_y + outer_3_y, 1, 1).data)

                        }
                    }

                    for (block_i_i = 0; block_i_i < pixel_block_array.length; block_i_i += 16) {

                        new_pixel_array_dxt1_gc = []

                        high_color = 0
                        high_color_array = [0, 0, 0, 0]
                        low_color = 1020
                        low_color_array = [255, 255, 255, 255]

                        for (block_i = 0; block_i < 16; block_i++) {

                            temp_color = pixel_block_array[block_i + block_i_i][0] + pixel_block_array[block_i + block_i_i][1] + pixel_block_array[block_i + block_i_i][2] + pixel_block_array[block_i + block_i_i][3]

                            if (high_color < temp_color) {
                                high_color = temp_color
                                high_color_array = [pixel_block_array[block_i + block_i_i][0], pixel_block_array[block_i + block_i_i][1], pixel_block_array[block_i + block_i_i][2], pixel_block_array[block_i + block_i_i][3]]
                            }

                            if (low_color > temp_color) {
                                low_color = temp_color
                                low_color_array = [pixel_block_array[block_i + block_i_i][0], pixel_block_array[block_i + block_i_i][1], pixel_block_array[block_i + block_i_i][2], pixel_block_array[block_i + block_i_i][3]]
                            }

                        }

                        // generate 2 interpolated colors
                        color_0 = high_color
                        color_1 = low_color
                        //color 2 (2*color0 + color1) / 3	
                        color_2 = Math.round((2 * high_color + low_color) / 3)
                        //color 3 (color0 + 2*color1) / 3
                        color_3 = Math.round((high_color + 2 * low_color) / 3)

                        counts = [color_0, color_1, color_2, color_3]

                        for (block_i = 0; block_i < 16; block_i++) {

                            temp_color = pixel_block_array[block_i + block_i_i][0] + pixel_block_array[block_i + block_i_i][1] + pixel_block_array[block_i + block_i_i][2] + pixel_block_array[block_i + block_i_i][3]

                            var closest = counts.reduce(function(prev, curr) {
                                return (Math.abs(curr - temp_color) < Math.abs(prev - temp_color) ? curr : prev);
                            });

                            if (closest == color_0) {
                                new_pixel_array_dxt1_gc.push(0)
                                new_pixel_array_dxt1_gc.push(0)
                            } else if (closest == color_1) {
                                new_pixel_array_dxt1_gc.push(0)
                                new_pixel_array_dxt1_gc.push(1)
                            } else if (closest == color_2) {
                                new_pixel_array_dxt1_gc.push(1)
                                new_pixel_array_dxt1_gc.push(0)
                            } else {
                                new_pixel_array_dxt1_gc.push(1)
                                new_pixel_array_dxt1_gc.push(1)
                            }

                        }

                        //generate dxt1 colors
                        //565 rgb

                        color_bit_array = []

                        high_blue = Math.round(high_color_array[2] / 8.22580645)

                        color_bit_array.push((high_blue >> 0) & 0x1)
                        color_bit_array.push((high_blue >> 1) & 0x1)
                        color_bit_array.push((high_blue >> 2) & 0x1)
                        color_bit_array.push((high_blue >> 3) & 0x1)
                        color_bit_array.push((high_blue >> 4) & 0x1)

                        high_green = Math.round(high_color_array[1] / 4.04761904)

                        color_bit_array.push((high_green >> 0) & 0x1)
                        color_bit_array.push((high_green >> 1) & 0x1)
                        color_bit_array.push((high_green >> 2) & 0x1)
                        color_bit_array.push((high_green >> 3) & 0x1)
                        color_bit_array.push((high_green >> 4) & 0x1)
                        color_bit_array.push((high_green >> 5) & 0x1)

                        high_red = Math.round(high_color_array[0] / 8.22580645)

                        color_bit_array.push((high_red >> 4) & 0x1)
                        color_bit_array.push((high_red >> 3) & 0x1)
                        color_bit_array.push((high_red >> 2) & 0x1)
                        color_bit_array.push((high_red >> 1) & 0x1)
                        color_bit_array.push((high_red >> 0) & 0x1)

                        //u16
                        color_byte = new bitArray(16)
                        for (temp_color_i = 0; temp_color_i < 16; temp_color_i++) {
                            if (color_bit_array[temp_color_i] == 1) {
                                color_byte.on(temp_color_i)

                            }
                        }
                        new DataView(temp_pixel_buffer).setUint16(temp_pixel_buffer_offset, color_byte.backingArray[0], false)
                        temp_pixel_buffer_offset += 2

                        color_bit_array = []

                        low_blue = Math.round(low_color_array[2] / 8.22580645)

                        color_bit_array.push((low_blue >> 0) & 0x1)
                        color_bit_array.push((low_blue >> 1) & 0x1)
                        color_bit_array.push((low_blue >> 2) & 0x1)
                        color_bit_array.push((low_blue >> 3) & 0x1)
                        color_bit_array.push((low_blue >> 4) & 0x1)

                        low_green = Math.round(low_color_array[1] / 4.04761904)

                        color_bit_array.push((low_green >> 0) & 0x1)
                        color_bit_array.push((low_green >> 1) & 0x1)
                        color_bit_array.push((low_green >> 2) & 0x1)
                        color_bit_array.push((low_green >> 3) & 0x1)
                        color_bit_array.push((low_green >> 4) & 0x1)
                        color_bit_array.push((low_green >> 5) & 0x1)

                        low_red = Math.round(low_color_array[0] / 8.22580645)

                        color_bit_array.push((low_red >> 4) & 0x1)
                        color_bit_array.push((low_red >> 3) & 0x1)
                        color_bit_array.push((low_red >> 2) & 0x1)
                        color_bit_array.push((low_red >> 1) & 0x1)
                        color_bit_array.push((low_red >> 0) & 0x1)

                        color_byte = new bitArray(16)
                        for (temp_color_i = 0; temp_color_i < 16; temp_color_i++) {
                            if (color_bit_array[temp_color_i] == 1) {
                                color_byte.on(temp_color_i)

                            }
                        }
                        new DataView(temp_pixel_buffer).setUint16(temp_pixel_buffer_offset, color_byte.backingArray[0], false)
                        temp_pixel_buffer_offset += 2

                        //bit arry is 32 bits / 4 byte
                        color_byte = new bitArray(32)
                        for (temp_color_i = 0; temp_color_i < 32; temp_color_i++) {
                            if (new_pixel_array_dxt1_gc[temp_color_i] == 1) {
                                color_byte.on(temp_color_i)

                            }
                        }
                        new DataView(temp_pixel_buffer).setUint32(temp_pixel_buffer_offset, color_byte.backingArray[0], false)
                        temp_pixel_buffer_offset += 4

                    }

                    objectURL = URL.createObjectURL(new Blob([temp_pixel_buffer]))

                    for (ii_length = 0; ii_length < temp_pixel_buffer.byteLength; ii_length++) {

                        let temp = new DataView(temp_pixel_buffer).getUint8(ii_length, true)

                        new DataView(buffer).setUint8(texture_data_offset + ii_length, temp, is_little_endian)
                    }

                }
            }
        }
    }

    document.getElementsByClassName("file_is_highlighted")[0].click()

}
function get_pixel_data() {
    var i = 0
    var temp_1 = 0
    var iii = 0
    for (temp_pixel_array = []; iii < 16; iii += 4,
    i++) {
        var pixel_row = u8(image_offset + i + 4)
        for (ii = 7; ii > 0; ii -= 2,
        temp_1++) {
            let pixel_1 = (pixel_row >> ii) & 0x1;
            let pixel_2 = (pixel_row >> ii - 1) & 0x1;

            temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
        }
    }
    // temp_pixel_array = temp_pixel_array.reverse()
}
function get_pixel_data_pc() {
    temp_pixel_array = []
    var i = 0
    var temp_1 = 0
    var iii = 0
    for (temp_pixel_array = []; iii < 16; iii += 4,
    i++) {
        var pixel_row = u8(image_offset + i + 4)
        for (ii = 0; ii < 8; ii += 2,
        temp_1++) {
            let pixel_1 = (pixel_row >> ii) & 0x1;
            let pixel_2 = (pixel_row >> ii + 1) & 0x1;

            temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
        }
    }

}

function get_color_gc() {
    var i = 0
    var ii = 0
    for (; ii < 2; ii++,
    i += 2) {

        var color_byte1 = u8(image_offset + i)
        var color_byte2 = u8(image_offset + 1 + i)

        let red_bit_1 = (color_byte1 >> 7) & 0x1;
        let red_bit_2 = (color_byte1 >> 6) & 0x1;
        let red_bit_3 = (color_byte1 >> 5) & 0x1;
        let red_bit_4 = (color_byte1 >> 4) & 0x1;
        let red_bit_5 = (color_byte1 >> 3) & 0x1;

        red_bit_1 = red_bit_1 * 16
        red_bit_2 = red_bit_2 * 8
        red_bit_3 = red_bit_3 * 4
        red_bit_4 = red_bit_4 * 2
        red_bit_5 = red_bit_5 * 1

        var red_color = red_bit_1 + red_bit_2 + red_bit_3 + red_bit_4 + red_bit_5

        red_color = Math.round(red_color * 8.2257)

        let green_bit_1 = (color_byte1 >> 2) & 0x1;
        let green_bit_2 = (color_byte1 >> 1) & 0x1;
        let green_bit_3 = (color_byte1 >> 0) & 0x1;
        let green_bit_4 = (color_byte2 >> 7) & 0x1;
        let green_bit_5 = (color_byte2 >> 6) & 0x1;
        let green_bit_6 = (color_byte2 >> 5) & 0x1;

        green_bit_1 = green_bit_1 * 32
        green_bit_2 = green_bit_2 * 16
        green_bit_3 = green_bit_3 * 8
        green_bit_4 = green_bit_4 * 4
        green_bit_5 = green_bit_5 * 2
        green_bit_6 = green_bit_6 * 1

        var green_color = green_bit_1 + green_bit_2 + green_bit_3 + green_bit_4 + green_bit_5 + green_bit_6

        green_color = Math.round(green_color * 4.048)

        let blue_bit_1 = (color_byte2 >> 4) & 0x1;
        let blue_bit_2 = (color_byte2 >> 3) & 0x1;
        let blue_bit_3 = (color_byte2 >> 2) & 0x1;
        let blue_bit_4 = (color_byte2 >> 1) & 0x1;
        let blue_bit_5 = (color_byte2 >> 0) & 0x1;

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

                red_color_4 = 0
                green_color_4 = 0
                blue_color_4 = 0

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
function get_color() {

    if (texture_type_value == 197) {
        image_offset += 8
    }

    var i = 0
    var ii = 0
    for (; ii < 2; ii++,
    i += 2) {
        var color_byte1 = u8(image_offset + i)
        var color_byte2 = u8(image_offset + 1 + i)

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
    if (texture_type_value == 197) {
        image_offset -= 8
    }

}
