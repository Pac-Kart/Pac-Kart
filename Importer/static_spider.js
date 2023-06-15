// static file | append directly to file_viewer
// x_spider for dynamic

function get_x_static(selected_game, file_name) {

    let html = `<div class='sub_file_div'><a class='file_arrow' style='padding-right:6px;padding-left:4px;'>↓</a><a> 🗀 </a> <a id='temp' data-type="x_folder" data-offset="0" class='file_hover_not_selected'>${file_name}</a>`

    // folder

    for (let i = 0; i < u32(12, is_little_endian); i++) {

        html += get_x_sub_files(16 + (i * 24), i + 1, file_name)
    }

    return html
}

function get_x_sub_files(offset, index, file_name) {

    // sub files

    let file_type_name = ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music']

    type = file_type_name[u32(offset + 4, is_little_endian)]

    let html = ''

    if (type === 'geometry' || type === 'music' || game === "bigfoot_collision_course") {
        is_arrow_needed = `<a class='no_arrow'>↓</a>`

        html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`

    } else {

        // temp = u32(offset + 20, is_little_endian) + (u32(12, is_little_endian) * 24) + 16
        //         console.log(u32(offset + 20, is_little_endian),temp)

        // if (u32(temp + 20, is_little_endian) == 0 && u32(temp + 24, is_little_endian) == 0) {
        //     html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`
        // } else {

        temp_offset = u32(offset + 20, is_little_endian) + (u32(12, is_little_endian) * 24) + 16

        number_sounds = u32(temp_offset + 8, is_little_endian)
        number_textures = u32(temp_offset + 20, is_little_endian)

        // console.log(temp_offset, number_sounds, number_textures)

        if (number_sounds == 0 && number_textures == 0) {
            html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`

        } else {

            html += `<div style='display: block;' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a>`

            html += get_x_sub_file_header(u32(offset + 20, is_little_endian) + (u32(12, is_little_endian) * 24) + 16, index)

            html += `</div>`

        }
        // }
    }

    return html
}

function get_x_sub_file_header(offset, index) {

    number_sounds = u32(offset + 8, is_little_endian)
    number_textures = u32(offset + 20, is_little_endian)

    offset_textures = u32(offset + 24, is_little_endian)
    offset_animations = u32(offset + 60, is_little_endian)
    amount_animations = u32(offset + 48, is_little_endian)
    // console.log(number_textures)
    old_offset = offset
    if (fileextension == "xps") {
        offset += 2048
    } else if (fileextension == "xpp") {
        offset += 128
    } else if (game == "snoopy_vs_the_red_baron") {
        offset += 128
    } else if (type == "geometry") {
        offset += 84
    } else {
        offset += 120
    }

    sound_offset_array = []
    for (number_sounds_i = 0; number_sounds_i < number_sounds; number_sounds_i++) {
        sound_offset_array.push(u32(offset + (number_sounds_i * 4), is_little_endian))
    }

    while ((number_sounds_i * 4) % 32 !== 0) {
        number_sounds_i++
    }

    offset_audio = (number_sounds_i * 4) + offset
    offset_audio_start = offset_audio
    offset_audio_temp = (sound_offset_array.length * 32) + offset_audio
    // offset_audio_temp = (number_sounds_i * 32) + offset_audio

    // console.log('offset_audio', offset_audio)
    // console.log('offset_1st patch list prelim', u32(old_offset + 4, is_little_endian))
    // console.log('offset_audio_1st patch list ?', offset_audio + u32(old_offset + 4, is_little_endian))

    // console.log(type)
    if (number_sounds === 0) {
        is_arrow_needed = `<a class='no_arrow'>↓</a>`
    } else {
        is_arrow_needed = `<a class='file_arrow'>→</a>`
    }
    let html = ''
    // let html = `<div style='display:none' class='sub_file_div'>${is_arrow_needed}<a> ⚙ </a> <a data-type="x_sub_file_header" data-offset="${old_offset}" class='file_hover_not_selected'>Sub File Header</a></div>`
    if (sound_offset_array.length != 0 && type != "geometry") {
        html += `<div style='display:none' class='sub_file_div'>${is_arrow_needed}<a> 🗀 </a> <a data-type="x_sound_folder" data-offset="${old_offset}" class='file_hover_not_selected'>Sounds</a>`

        for (let i = 0; i < sound_offset_array.length; i++) {
            html += get_x_sound(offset_audio + sound_offset_array[i], i)
        }
        html += `</div>`

    }
    // html += `</div>`

    // // //
    if (type == "geometry") {
        offset_mid = (number_sounds + u32(old_offset + 40, is_little_endian) + u32(old_offset + 28, is_little_endian) * 8) + (u32(old_offset + 4, is_little_endian) * 4)
        while (offset_mid % 32 !== 0) {
            offset_mid++
        }
        offset_mid = offset_mid + offset
    } else {

        //     _3_04__offset__end_sound_offset_list + offset_audio

        //     console.log(_3_04__offset__end_sound_offset_list + offset_audio)
        //     //get to main offset

        offset_mid = (u32(old_offset + 28, is_little_endian) + u32(old_offset + 16, is_little_endian) + u32(old_offset + 52, is_little_endian)) * 8

        while (offset_mid % 32 !== 0) {
            offset_mid++
        }
        offset_mid = offset_mid + u32(old_offset + 4, is_little_endian) + offset_audio
        if (fileextension == "xps") {
            xps_i = 0;
            while ((offset_audio + u32(old_offset + 4, is_little_endian) + xps_i) % 2048 !== 0) {
                xps_i += 1
            }
            offset_mid = offset_mid + xps_i
        }
    }

    let temp_patcher_offset = u32(old_offset + 4, is_little_endian) + offset_audio

    texture_patch = extract_patcher(temp_patcher_offset, u32(old_offset + 16, is_little_endian))
    temp_patcher_offset = temp_patcher_offset + (u32(old_offset + 16, is_little_endian) * 8)

    texture_animation_patch = extract_patcher(temp_patcher_offset, u32(old_offset + 52, is_little_endian))
    temp_patcher_offset = temp_patcher_offset + (u32(old_offset + 52, is_little_endian) * 8)

    sound_patch = extract_patcher(temp_patcher_offset, u32(old_offset + 28, is_little_endian))

    model_patch = extract_patcher(u32(old_offset, is_little_endian) + offset_mid, u32(old_offset + 56, is_little_endian))
    //texture

    let end_offset = 0
    if (number_textures != 0) {
        texture_offset_list = (offset_mid + offset_textures)

        html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_sound_folder" data-offset="${texture_offset_list}" class='file_hover_not_selected'>Textures</a>`

        // console.log('texture offset:', texture_offset_list)

        if (game == 'pac_man_world_rally') {
            i_offset_plus = 64
        } else {
            i_offset_plus = 16
        }

        i_offset = 0
        for (i = 0; i < number_textures; i++,
        i_offset += i_offset_plus) {

            if (game == 'pac_man_world_rally') {
                for (string_i = 12,
                btf_string = ""; string_i < 64; string_i++) {
                    btf_string += String.fromCharCode(u8(i_offset + texture_offset_list + string_i))
                }

            } else if (game == 'snoopy_vs_the_red_baron') {
                temp_name_offset = u32(i_offset + texture_offset_list + 12, is_little_endian) + offset_mid
                next_temp_name_offset = u32(i_offset + texture_offset_list + 24, is_little_endian) + offset_mid

                if (((number_textures * i_offset_plus) - i_offset_plus) == i_offset) {
                    btf_string = 'last'

                    for (string_i = 0,
                    btf_string = ""; (string_i) < 128; string_i++) {
                        btf_string += String.fromCharCode(u8(temp_name_offset + string_i))

                        if (u32(temp_name_offset + string_i, true) == 1634169902) {
                            btf_string += "tga"
                            string_i += 128

                        }
                    }

                } else {

                    for (string_i = 0,
                    btf_string = ""; (string_i + temp_name_offset) < next_temp_name_offset; string_i++) {
                        btf_string += String.fromCharCode(u8(temp_name_offset + string_i))
                    }

                }

            } else {
                btf_string = 'Texture ' + i
            }

            // var link = document.createElement("p");
            // link.innerHTML = btf_string
            // document.getElementById("texture_table_" + i).appendChild(link)

            // document.getElementById("texture_row_select_" + i).addEventListener("click", load_edit_texture);

            html += `<div style='display:none' class='sub_file_div'><a class='no_arrow'></a><a> </a> <a data-type="x_texture" data-offset="${texture_offset_list + i_offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>${btf_string}</a></div>`

        }

        html += "</div>"
    }

    models_array = []

    if (offset_animations !== 0) {
        for (let i = 0; i < amount_animations; i++) {
            get_texture_animas(u32(offset_animations + offset_mid + (i * 12), is_little_endian) + offset_mid)
        }

    }

    if (game == "pac_man_world_rally") {

        let offset_collision
        if (type === 'interface') {
            // let temp = u32(offset_mid + 4, is_little_endian)
            // offset_logic = u32(offset_mid + temp, is_little_endian)

            // frames = [offset_logic + offset_mid]
            // settings_3 = []
            // fonts = []
            // texts = []
            // interface_model = []
            // interface_model_2 = []
            // interface_sub_model = []
            // model_animation_1 = []
            // model_animation_2 = []

            // sparkler = []

            // get_80byteblock(offset_logic + offset_mid)

            // for (let i = 0; i < frames.length; i++) {
            //     html += get_80byteblock(frames[i])
            // }
            // for (let i = 0; i < settings_3.length; i++) {
            //     html += get_settings_header_3(settings_3[i], i)
            // }
            // for (let i = 0; i < fonts.length; i++) {
            //     html += get_fonts(fonts[i], i)
            // }
            // for (let i = 0; i < texts.length; i++) {
            //     html += get_texts(texts[i], i)
            // }
            // for (let i = 0; i < sparkler.length; i++) {
            //     html += get_spark(sparkler[i], i)
            // }
            // for (let i = 0; i < interface_model.length; i++) {
            //     html += get_interface_model(interface_model[i], i)
            // }
            // for (let i = 0; i < model_animation_1.length; i++) {
            //     html += get_model_animation_1(model_animation_1[i], i)
            // }
            // for (let i = 0; i < model_animation_2.length; i++) {
            //     html += get_model_animation_2(model_animation_2[i], i)
            // }
            // for (let i = 0; i < interface_sub_model.length; i++) {
            //     html += get_interface__sub_model(interface_sub_model[i], i)
            // }

            // html += get_models(temp_offset, offset_animations)

        } else if (type === 'link') {

            let temp = u32(offset_mid + 4, is_little_endian)
            offset_logic = u32(offset_mid + temp, is_little_endian)

            html += get_link_main(offset_logic + offset_mid)
        } else if (type === 'world') {

            // if (u32(offset_mid + 8, is_little_endian) !== 0) {
            //     world_08(u32(offset_mid + 8, is_little_endian) + offset_mid)
            // }
            if (u32(offset_mid + 24, is_little_endian) !== 0) {// world_24(u32(offset_mid + 24, is_little_endian) + offset_mid)
            }

            for (let i = 0; i < u32(offset_mid + 28, is_little_endian); i++) {
                // world_32(u32(offset_mid + 32, is_little_endian) + offset_mid + (i * 4))
            }

            //calculate model offset -> 
            temp = u32(offset_mid + 24, is_little_endian) + offset_mid
            temp_amount = u32(temp + 8, is_little_endian)
            temp = u32(temp + 12, is_little_endian) + offset_mid
            while ((temp_amount * 4) % 16 !== 0) {
                temp_amount++
            }

            temp = (temp + temp_amount * 4)

            // html += get_models(temp, offset_animations)

            // offset_collision = u32(offset_mid + 4, is_little_endian) + offset_mid
            // offset_logic = u32(offset_mid, is_little_endian) + offset_mid
            // html += get_colision(offset_collision)
            // html += get_world_low_header(offset_logic)

            if (fileextension == 'xdx') {
                offset_collision = u32(offset_mid + 152, is_little_endian) + offset_mid
                html += get_world_options(u32(offset_mid + 152, is_little_endian) + offset_mid)
            } else {
                html += get_world_options(u32(offset_mid + 20, is_little_endian) + offset_mid, offset_collision)
            }
            // if (fileextension == "xdx") {
            //     offset_logic = u32(offset_mid + 188, is_little_endian) + offset_mid
            // }
            // html += get_logic(offset_logic)
        } else if (type === 'share') {// console.log(end_offset, 'share')

        } else if (type === 'car') {
            let temp = u32(offset_mid + 4, is_little_endian) + offset_mid
            temp_offset = (temp + 16)
            // html += get_models(temp_offset, 0)
            html += get_car_main(u32(temp, is_little_endian) + offset_mid, offset_mid)
        }
    }
    if (models_array.length) {
        html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_model_folder" data-offset="${offset}" class='file_hover_not_selected'>Models</a>`

        for (let i = 0; i < models_array.length; i++) {
            html += get_models(models_array[i], i)
        }
        html += "</div>"
    }

    // colision

    return html
}

function world_08(offset) {
    console.log(`F ${f32(offset, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 16, is_little_endian) !== 0) {
        let offset_16 = u32(offset + 16, is_little_endian) + offset_mid
        for (let i = 0; i < u32(offset + 28, is_little_endian); i++) {
            if (u32(offset_16 + (i * 80), is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 4, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 8, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 12, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 16, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 20, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 24, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 28, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 32, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 36, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 56, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 60, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 64, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 68, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 72, is_little_endian) !== 0 || u32(offset_16 + (i * 80) + 76, is_little_endian) !== 0) {
                console.log('y', i, offset_16 + (i * 80))
            }
        }
    }

}
function world_24(offset) {
    // console.log(`24 -> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)

    for (let i = 0; i < u32(offset, is_little_endian); i++) {// world_24_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        world_24_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 4))
    }

    let temp = 0
    for (let i = 16; i < 111; i++) {
        temp += u8(offset + i, is_little_endian)
    }

    if (temp !== 0) {
        alert("world_24 not 0", offset)
    }

}

function world_24_1(offset) {
    world_24_1_1(u32(offset, is_little_endian) + offset_mid)

}

function world_24_1_1(offset) {
    console.log(`24 -> -1> ${get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false)} | ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | F ${f32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 12, is_little_endian) !== 0) {
        world_24_1_1_2(u32(offset + 12, is_little_endian) + offset_mid)
    }

}

function world_24_1_1_2(offset) {
    if (f32(offset + 0, is_little_endian) !== 0 || f32(offset + 4, is_little_endian) !== 0 || f32(offset + 8, is_little_endian) !== 0 || f32(offset + 12, is_little_endian) !== 0) {
        console.log(`24 -> -1> -> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] F ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)
    }
}
function world_24_2(offset) {
    world_24_2_1(u32(offset, is_little_endian) + offset_mid)

}

function world_24_2_1(offset) {

    let temp = 0
    for (let i = 13; i < 139; i++) {
        temp += u8(offset + i, is_little_endian)
    }

    if (temp !== 0) {
        alert("world_24_2_1 not 0", offset)
    }
    if (u32(offset + 172, is_little_endian) !== 0) {
        alert("world_24_2_1 172", offset)
    }
    // console.log(`24 -> -2> ${get_string(u32(offset + 140, is_little_endian) + offset_mid, 0, false)} | ${u32(offset + 144, is_little_endian)} | ${u32(offset + 148, is_little_endian)} | ${u32(offset + 152, is_little_endian)} | ${u32(offset + 156, is_little_endian)} | ${u32(offset + 160, is_little_endian)} | ${u32(offset + 164, is_little_endian)} | ${u32(offset + 168, is_little_endian)} | ${u32(offset + 172, is_little_endian)} // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 152, is_little_endian) !== 0) {// // console.log(`24 -> -2>  ${get_string(u32(offset + 152, is_little_endian) + offset_mid, 0, false)} `)
    }
    if (u32(offset + 156, is_little_endian) !== 0 || u32(offset + 160, is_little_endian) !== 0) {
        alert("156 / 160 not 0")
    }

    if (u32(offset + 148, is_little_endian)) {// world_24_2_1_2(u32(offset + 148, is_little_endian) + offset_mid)
    }
    if (u32(offset + 164, is_little_endian)) {
        world_24_2_1_4(u32(offset + 164, is_little_endian) + offset_mid)
    }

}

function world_24_2_1_2(offset) {
    // console.log(`24 -> -2> ->| ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 4, is_little_endian) !== 0) {
        alert('world_24_2_1_2 / 4 not')
    }

}
function world_24_2_1_4(offset) {
    // console.log(`24 -> -2> -4>| ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 0, is_little_endian) !== 0 || u32(offset + 4, is_little_endian) !== 0 || u32(offset + 24, is_little_endian) !== 0 || u32(offset + 28, is_little_endian) !== 0) {
        alert('world_24_2_1_4 / not')
    }

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        world_24_2_1_4_1(u32(offset + 12, is_little_endian) + offset_mid + (i * 24), i)
    }

}

function world_24_2_1_4_1(offset) {
    console.log(`${i} ---> ${get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false)} | ${u32(offset + 4, is_little_endian)} | ${get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 12, is_little_endian) !== 0) {
        world_24_2_1_4_1_3(u32(offset + 12, is_little_endian) + offset_mid)
    }

    if (u32(offset + 16, is_little_endian) !== 0 || u32(offset + 20, is_little_endian) !== 0) {
        alert("world_24_2_1_4_1")
    }
}

function world_24_2_1_4_1_3(offset) {
    console.log(`--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || // offset:${offset} -mid:${offset_mid}`)
}

function world_32(offset) {
    console.log(`32 -> ${u32(offset, is_little_endian)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset, is_little_endian) !== 0) {
        world_32_1(u32(offset, is_little_endian) + offset_mid)
    }

}
function world_32_1(offset) {

    if (u32(offset + 20, is_little_endian) !== 0 || u32(offset + 44, is_little_endian) !== 0 || u32(offset + 52, is_little_endian) !== 0 || u32(offset + 100, is_little_endian) !== 0 || u32(offset + 108, is_little_endian) !== 0 || u32(offset + 112, is_little_endian) !== 0 || u32(offset + 116, is_little_endian) !== 0 || u32(offset + 120, is_little_endian) !== 0 || u32(offset + 124, is_little_endian) !== 0) {
        alert("world_32_1 not 0")
    }
    console.log(` offset:${offset} -mid:${offset_mid}
000 ->| ${u32(offset + 0, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | F ${f32(offset + 12, is_little_endian)}
016 ->| ${u32(offset + 16, is_little_endian)} | ${f32(offset + 20, is_little_endian)} | ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}
032 ->| F ${f32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | F ${f32(offset + 40, is_little_endian)} | F ${f32(offset + 44, is_little_endian)}
048 ->| F ${f32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | F ${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}
064 ->| ${u32(offset + 64, is_little_endian)} | F ${f32(offset + 68, is_little_endian)} | F ${f32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)}
080 ->| ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | F ${f32(offset + 88, is_little_endian)} | F ${f32(offset + 92, is_little_endian)}
096 ->| F ${f32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | [ ${u8(offset + 104, is_little_endian)}, ${u8(offset + 105, is_little_endian)}, ${u8(offset + 106, is_little_endian)}, ${u8(offset + 107, is_little_endian)}  ] | F ${f32(offset + 108, is_little_endian)}
112 ->| ${f32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${f32(offset + 120, is_little_endian)} | ${f32(offset + 124, is_little_endian)}
`)

}

function get_world_low_header(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_world_low_header" data-offset="${offset}" class='file_hover_not_selected'>world header</a></div>`
    return html
}

function get_car_main(offset, mid) {
    let html = ''
    if (fileextension !== 'xdx') {
        html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a style="margin:2px;"> ⚙ </a> <a data-type="x_car_main" data-offset="${offset}" data-mid="${mid}" class='file_hover_not_selected'>Car Stats</a></div>`
    }

    if (u32(offset + 0, is_little_endian) === 0 || u8(offset + 4, is_little_endian) !== 4 || u8(offset + 5, is_little_endian) || u16(offset + 6, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        // console.log(`${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} -mid:${offset_mid}`)
    }
    if (u32(offset, is_little_endian)) {
        // get_car_00(u32(offset, is_little_endian) + offset_mid)
    }

    return html
}

function get_car_00(offset) {

    if (u32(offset + 0, is_little_endian) || u32(offset + 164, is_little_endian) || u32(offset + 236, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | ${u32(offset + 88, is_little_endian)} | ${u32(offset + 92, is_little_endian)} | ${u32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | ${u32(offset + 104, is_little_endian)} | ${u32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)} | ${u32(offset + 128, is_little_endian)} | ${u32(offset + 132, is_little_endian)} | ${u32(offset + 136, is_little_endian)} | ${u32(offset + 140, is_little_endian)} | ${u32(offset + 144, is_little_endian)} | ${u32(offset + 148, is_little_endian)} | ${u32(offset + 152, is_little_endian)} | ${u32(offset + 156, is_little_endian)} | ${u32(offset + 160, is_little_endian)} | ${u32(offset + 164, is_little_endian)} | ${u32(offset + 168, is_little_endian)} | ${u32(offset + 172, is_little_endian)} | ${u32(offset + 176, is_little_endian)} | ${u32(offset + 180, is_little_endian)} | ${u32(offset + 184, is_little_endian)} | ${u32(offset + 188, is_little_endian)} | ${u32(offset + 192, is_little_endian)} | ${u32(offset + 196, is_little_endian)} | ${u32(offset + 200, is_little_endian)} | ${u32(offset + 204, is_little_endian)} | ${u32(offset + 208, is_little_endian)} | ${u32(offset + 212, is_little_endian)} | ${u32(offset + 216, is_little_endian)} | ${u32(offset + 220, is_little_endian)} | ${u32(offset + 224, is_little_endian)} | ${u32(offset + 228, is_little_endian)} | ${u32(offset + 232, is_little_endian)} | ${u32(offset + 236, is_little_endian)}`)
    }
    if (u32(offset + 180, is_little_endian)) {
        get_car_00_180(u32(offset + 180, is_little_endian) + offset_mid)
    }
}

function get_car_00_180(offset) {

    // if (u32(offset + 0, is_little_endian)) {
    console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} || offset:${offset} -mid:${offset_mid}`)
    // }

}

function get_models(offset, index) {
    let html = ''
    if (u16(offset, is_little_endian) !== 1537) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [floats x12 ] || offset:${offset} -mid:${offset_mid}`)
    }
    for (let i = 0; i < u16(offset + 2, is_little_endian); i++) {
        get_models_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 8))
    }
    return html

    function get_models_04(offset) {
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_models_04_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 4))
        }
    }

    function get_models_04_04(offset) {
        if (u32(offset + 0, is_little_endian)) {
            get_models_04_04_00(u32(offset + 0, is_little_endian) + offset_mid)
        }
    }
    function get_models_04_04_00(offset) {

        // _Tx(temp_array___, u32, 88, offset)

        if (u32(offset + 88, is_little_endian) === 0) {// console.log(`[ ${u8(offset + 56, is_little_endian)}, ${u8(offset + 57, is_little_endian)}, ${u8(offset + 58, is_little_endian)}, ${u8(offset + 59, is_little_endian)} |||${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ] | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | [ ${u8(offset + 40, is_little_endian)}, ${u8(offset + 41, is_little_endian)}, ${u8(offset + 42, is_little_endian)}, ${u8(offset + 43, is_little_endian)} ] | [ ${u8(offset + 44, is_little_endian)}, ${u8(offset + 45, is_little_endian)}, ${u8(offset + 46, is_little_endian)}, ${u8(offset + 47, is_little_endian)} ] | [ ${u8(offset + 48, is_little_endian)}, ${u8(offset + 49, is_little_endian)}, ${u8(offset + 50, is_little_endian)}, ${u8(offset + 51, is_little_endian)}  ] | [ ${u8(offset + 52, is_little_endian)}, ${u8(offset + 53, is_little_endian)}, ${u8(offset + 54, is_little_endian)}, ${u8(offset + 55, is_little_endian)} ] || offset:${offset} -mid:${offset_mid}`)
        }

        if (u32(offset + 92, is_little_endian)) {
            get_models_04_04_00_92(u32(offset + 92, is_little_endian) + offset_mid)
        }

    }

    function get_models_04_04_00_92(offset) {
        if (u32(offset + 4, is_little_endian)) {
            console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset:${offset} -mid:${offset_mid}`)
        }

    }
}

function get_world_options(offset, collision) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_world" data-offset="${offset}" class='file_hover_not_selected'>World</a>`

    for (let i = 0; i < 16; i++) {

        if (u32(offset + (i * 16) + 8, is_little_endian) != 0) {
            world_options_type = u32(offset + (i * 16), is_little_endian)
            world_options_amount = u32(offset + (i * 16) + 8, is_little_endian)
            world_options_offset = u32(offset + (i * 16) + 12, is_little_endian) + offset_mid
        } else {
            world_options_type = null
        }
        // console.log(world_options_type)

        if (world_options_type === 0) {
            html += get_world_options_starting_points(world_options_offset, world_options_amount)
        } else if (world_options_type === 1) {// html += get_world_options_camera(world_options_offset, world_options_amount)
        } else if (world_options_type === 2) {// html += get_world_options_2(world_options_offset, world_options_amount)
        } else if (world_options_type === 3) {// html += get_world_options_3(world_options_offset, world_options_amount)
        } else if (world_options_type === 4) {// html += get_world_options_4(world_options_offset, world_options_amount)
        } else if (world_options_type === 5) {
            // html += get_world_options_5(world_options_offset, world_options_amount)
            world_5_obj = [world_options_offset, world_options_amount]
        } else if (world_options_type === 6) {// html += get_world_options_6(world_options_offset, world_options_amount)
        } else if (world_options_type === 7) {// html += get_world_options_7(world_options_offset, world_options_amount)
        } else if (world_options_type === 8) {// html += get_world_options_8(world_options_offset, world_options_amount)
        } else if (world_options_type === 9) {// html += get_world_options_9(world_options_offset, world_options_amount)
        } else if (world_options_type === 10) {// html += get_world_options_10(world_options_offset, world_options_amount)
        } else if (world_options_type === 11) {// html += get_world_options_11(world_options_offset, world_options_amount)
        } else if (world_options_type === 12) {// html += get_world_options_12(world_options_offset, world_options_amount)
        } else if (world_options_type === 13) {// html += get_world_options_13(world_options_offset, world_options_amount)
        } else if (world_options_type === 14) {// html += get_world_options_14(world_options_offset, world_options_amount)
        } else if (world_options_type === 15) {// html += get_world_options_object(world_options_offset, world_options_amount)
        }

        // u32(offset, is_little_endian)

    }
    // html += get_world_weird(u32(offset_mid + 8, is_little_endian) + offset_mid)
    if (fileextension == 'xdx') {
        html += get_world_routes(u32(offset_mid + 152, is_little_endian) + offset_mid, [0, 0])
    } else if (u32(8, is_little_endian) == 249) {
        html += get_world_routes(u32(offset_mid + 120, is_little_endian) + offset_mid, [0, 0])
    } else {
        html += get_world_routes(u32(offset_mid + 12, is_little_endian) + offset_mid, [0, 0])
    }
    // html += get_world_flags(u32(offset_mid + 24, is_little_endian) + offset_mid)

    if (u32(8, is_little_endian) == 249) {
        html += get_world_options_starting_points(u32(offset_mid + 12, is_little_endian) + offset_mid, u32(offset_mid + 8, is_little_endian))
    } else if (fileextension == 'xdx') {
        html += get_world_options_starting_points(u32(offset_mid + 12, is_little_endian) + offset_mid, u32(offset_mid + 8, is_little_endian))
    } else {}

    if (fileextension == 'xdx') {
        html += get_world_gate(u32(offset_mid + 224, is_little_endian) + offset_mid, u32(offset_mid + 220, is_little_endian))
    } else if (u32(8, is_little_endian) == 249) {
        html += get_world_gate(u32(offset_mid + 192, is_little_endian) + offset_mid, u32(offset_mid + 188, is_little_endian))
    } else {

        html += get_world_gate(u32(offset_mid + 32, is_little_endian) + offset_mid, u32(offset_mid + 28, is_little_endian))
    }
    // calculate from sound offset list
    html += "</div>"
    return html

}

function get_world_options_14(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_14" data-offset="${offset}" class='file_hover_not_selected'>world 14 ???</a></div>`

    return html
}
function get_world_options_13(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_13" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>world 13 ???</a></div>`

    return html
}
function get_world_options_12(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_12" data-offset="${offset}" class='file_hover_not_selected'>world 12 ???</a></div>`

    return html
}
function get_world_options_11(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_11" data-offset="${offset}" class='file_hover_not_selected'>world 11 ???</a></div>`

    return html
}
function get_world_options_10(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_10" data-offset="${offset}" class='file_hover_not_selected'>world 10 ???</a></div>`

    return html
}
function get_world_options_9(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_9" data-offset="${offset}" class='file_hover_not_selected'>world 9 ???</a></div>`

    return html
}
function get_world_options_8(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_8" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>world 8 ???</a></div>`

    return html
}
function get_world_options_7(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_7" data-offset="${offset}" class='file_hover_not_selected'>world 7 ???</a></div>`

    return html
}
function get_world_options_6(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_6" data-offset="${offset}" class='file_hover_not_selected'>world 6 ???</a></div>`

    return html
}
function get_world_options_5(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_5" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>world 5 ???</a></div>`

    return html
}
function get_world_options_4(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_4" data-offset="${offset}" class='file_hover_not_selected'>world 4 ???</a></div>`

    return html
}

function get_world_options_2(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_2" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>world 2 ???</a></div>`

    return html

}

function get_world_flags(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_world_weird_2" data-offset="${offset}" class='file_hover_not_selected'>Flags</a>`
    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        html += get_world_flags_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 4))
    }
    html += '</div>'
    return html
}

function get_world_flags_2(offset) {
    let html = get_world_flags_2_2(u32(offset + 0, is_little_endian) + offset_mid)

    return html
}

function get_world_flags_2_2(offset) {
    // let html = `<br>--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | ${u32(offset + 88, is_little_endian)} | ${u32(offset + 92, is_little_endian)} | ${u32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | ${u32(offset + 104, is_little_endian)} | ${u32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)} | ${u32(offset + 128, is_little_endian)} | ${u32(offset + 132, is_little_endian)} | ${u32(offset + 136, is_little_endian)} | ${u32(offset + 140, is_little_endian)} | ${u32(offset + 144, is_little_endian)} | ${u32(offset + 148, is_little_endian)} | ${u32(offset + 152, is_little_endian)} | ${u32(offset + 156, is_little_endian)} | ${u32(offset + 160, is_little_endian)} | ${u32(offset + 164, is_little_endian)} | ${u32(offset + 168, is_little_endian)} | ${u32(offset + 172, is_little_endian)}`
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_world_flags_2" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset + 140, is_little_endian) + offset_mid, 0, false)}</a></div>`
    // if (u32(offset + 140, is_little_endian) != 0) {
    //     html += `<br>--->--->---?${get_string(u32(offset + 140, is_little_endian) + offset_mid, 0, false)}`
    // }
    // if (u32(offset + 152, is_little_endian) != 0) {
    //     html += `<br>--->--->---?${get_string(u32(offset + 152, is_little_endian) + offset_mid, 0, false)}`
    // }

    // html += load_world_x_world_weird_2_2_2_1(u32(offset + 164, is_little_endian) + offset_mid)
    // html += load_world_x_world_weird_2_2_2_2(u32(offset + 168, is_little_endian) + offset_mid)
    return html
}

function get_world_weird(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_world_weird" data-offset="${offset}" class='file_hover_not_selected'>werid</a></div>`

    return html
}

function get_world_gate(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_world_gate" data-offset="${offset}" data-amount="${amount}" class='file_hover_not_selected'>Road Properties</a></div>`

    return html
}

function get_world_routes(offset, obj) {
    let html = ''
    if (u32(offset, is_little_endian) != 0) {
        html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_routes" data-offset="${offset}" data-model_offset="${obj[0]}" data-model_amount="${obj[1]}" class='file_hover_not_selected'>World Route</a></div>`
    } else {}

    return html

}

function get_world_options_object(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_object" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>Objects</a></div>`

    // calculate from sound offset list

    return html

}
function get_world_options_starting_points(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_starting_points" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>Start Points</a></div>`

    // calculate from sound offset list

    return html

}

function get_world_options_camera(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_cam" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>cam</a></div>`

    // calculate from sound offset list

    return html

}
function get_world_options_3(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_3" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>3 / sound area</a></div>`

    // calculate from sound offset list

    return html

}

function get_colision(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>→</a><a> 💥 </a> <a data-type="x_collision" data-offset="${offset}" class='file_hover_not_selected'>Collision</a></div>`

    // calculate from sound offset list

    return html

}

function get_x_sound(offset, index) {

    let html = `<div style='display:none;' class='sub_file_div'><a class='file_arrow'></a><a> 🕪 </a> <a data-type="x_sound" data-offset="${offset}" data-sound_start_offset='${offset_audio_start}' data-sound_data_offset='${offset_audio_temp}' class='file_hover_not_selected'>Sound ${index}</a></div>`

    // calculate from sound offset list

    return html

}

function get_link_main(offset) {

    let html = `<div style='display:none;' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_logic_header" data-file_type="${type}" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>Link Main</a></div>`

    if (u32(offset + 4, is_little_endian) != 0) {
        html += `<div style='display:none;' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_link" data-file_type="${type}" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>Link Intro</a></div>`
    }
    if (u32(offset + 28, is_little_endian) != 0) {
        html += `<div style='display:none;' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_link" data-file_type="${type}" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>Link Files</a></div>`
    }
    if (u32(offset + 48, is_little_endian) != 0) {
        let temp = u32(offset + 48, is_little_endian) + offset_mid
        temp = u32(temp + 8, is_little_endian) + offset_mid
        if (u32(temp, is_little_endian) != 0) {
            html += `<div style='display:none;' class='sub_file_div'><a class='no_arrow'>↓</a><a> ⚙ </a> <a data-type="x_logic_header" data-file_type="${type}" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>Link Demo</a></div>`
        }
    }

    // html += '</div>'
    return ''
}

//////////////////

/////car

function get_80byteblock(offset) {

    //always 0
    if (u32(offset + 32, is_little_endian) !== 0 || u32(offset + 52, is_little_endian) !== 0 || u32(offset + 64, is_little_endian) !== 0 || u32(offset + 76, is_little_endian) !== 0) {
        console.error("get_80byteblock")
    }
    if (u32(offset + 48, is_little_endian) === 0) {
        console.log(` ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | offset: ${offset} `)
    }

    // if (u32(offset + 48, is_little_endian) !== 0) {
    //     console.log(`[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | `)
    // }

    // let logichtml = `[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ]`

    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_80blockbyte" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>Frame</a>`

    let settings_header = u32(offset + 4, is_little_endian) + offset_mid
    let value_8 = u32(offset + 8, is_little_endian)
    let value_12 = u32(offset + 12, is_little_endian) + offset_mid

    html += get_settings_header(settings_header)

    value_12html = ''

    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 2</a></div>`

    if (value_8 !== 0) {
        html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="xseting_folder" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>Settings</a>`

    }

    for (i = 0,
    value_12html = ''; i < value_8; i++) {
        html += get_settings_header_2(value_12 + (i * 28), i)
    }
    if (value_8 !== 0) {
        html += `</div>`
    }

    let value_16 = u32(offset + 16, is_little_endian)
    let value_20 = u32(offset + 20, is_little_endian)
    let value_24 = u32(offset + 24, is_little_endian)
    let value_28 = u32(offset + 28, is_little_endian)
    // offset sometimes
    value_28html = ''
    if ((value_28) !== 0) {

        if (settings_3.includes(value_28 + offset_mid)) {//nothing
        } else {
            settings_3.push(value_28 + offset_mid)
        }
    } else {}

    let value_32 = u32(offset + 32, is_little_endian)
    let value_36 = u32(offset + 36, is_little_endian)
    if ((value_36) !== 0) {

        if (settings_3.includes(value_36 + offset_mid)) {//nothing
        } else {
            settings_3.push(value_36 + offset_mid)
        }
    } else {}

    let value_40 = u32(offset + 40, is_little_endian)

    if ((value_40) !== 0) {

        if (settings_3.includes(value_40 + offset_mid)) {//nothing
        } else {
            settings_3.push(value_40 + offset_mid)
        }
    } else {}

    // if (value_40 !== 0) {
    //     // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 4</a></div>`

    //     if (settings_4.includes(value_40)) {
    //         console.log(settings_4,'settings_4 same')
    //         //nothing
    //     } else {
    //         settings_4.push(value_40)
    //     }
    //     // value_40 += get_settings_header_4(value_40 + offset_mid)
    // }

    let value_44 = u32(offset + 44, is_little_endian)
    let value_48 = u32(offset + 48, is_little_endian)

    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 5</a></div>`

    value_48 += get_settings_header_5(value_48 + offset_mid)

    // if (value_48 !== 0) {

    //     if (settings_5.includes(value_48)) {
    //         console.log(settings_5,'settings_5 same')
    //         //nothing
    //     } else {
    //         settings_5.push(value_48)
    //     }

    // }

    let value_52 = u32(offset + 52, is_little_endian)
    let value_56 = u32(offset + 56, is_little_endian)
    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 6</a></div>`

    value_56 += get_settings_header_6(value_56 + offset_mid)

    // if (value_56 !== 0) {

    //     if (settings_6.includes(value_56)) {
    //         console.log(settings_6,'settings_6 same')
    //         //nothing
    //     } else {
    //         settings_6.push(value_56)
    //     }

    // }

    let value_60 = f32(offset + 60, is_little_endian)
    let value_64 = u32(offset + 64, is_little_endian)
    let value_68 = u32(offset + 68, is_little_endian)
    let value_72 = u32(offset + 72, is_little_endian)
    let value_76 = u32(offset + 76, is_little_endian)

    // if (value_72 !== 0) {

    //     if (settings_7.includes(value_72)) {
    //         console.log(settings_7,'settings_7 same')
    //         //nothing
    //     } else {
    //         settings_7.push(value_72)
    //     }

    // }

    value_72_hmtl = ''
    // recursive_array = [55]
    html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_null" data-offset="${offset}" class='file_hover_not_selected'>Layers</a>`

    for (let i = 0; i < value_68; i++) {
        html += get_LAYER_byte_block(value_72 + offset_mid + (i * 100))
    }
    html += '</div></div>'
    return html
    // `<br> ${value_8 + value_12html} <br> ${value_16} <br> ${value_20} <br> ${value_24} <br> ${value_28}  <br> ${value_32} <br> ${value_36} <br> ${value_40}  <br> ${value_44} <br> ${value_48} <br> ${value_52} <br> ${value_56} <br> ${value_60}  <br> ${value_64} <br><span class='known' title='amount in layer'> ${value_68}</span>  <br> <span class='known' title='offset to layer'>${value_72}</span> ${value_72_hmtl} <br> ${value_76}`
}

function get_settings_header_2(offset, i) {
    let html = ''

    // if (u32(offset + 0, is_little_endian) !== 1026 || u32(offset + 0, is_little_endian) !== 1027 && u32(offset + 4, is_little_endian)!==0) {
    //     console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | offset:${offset} | mid: ${offset_mid} ; `)
    //     _Tx(temp_array___, u32, 0, offset)
    // }
    if (u32(offset + 0, is_little_endian) === 1026) {
        get_settings_2_1v1026(u32(offset + 4, is_little_endian) + offset_mid)
    }

    if (u32(offset + 0, is_little_endian) === 1027) {
        get_settings_2_1v1027(u32(offset + 4, is_little_endian) + offset_mid)
    }
    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        html += get_settings_2_2(u32(offset + 16, is_little_endian) + offset_mid + (i * 8), i)
    }

    for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
        html += get_settings_2_3(u32(offset + 24, is_little_endian) + offset_mid + (i * 36), i)
    }

    return html

}

function get_settings_2_1v1026(offset) {
    if (u8(offset + 3, is_little_endian) || u32(offset + 16, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`2_1 _> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} | mid: ${offset_mid} ; `)
        _Tx(temp_array___, u32, 12, offset)
    }
    if (u32(offset + 8, is_little_endian)) {
        get_settings_2_1_1(u32(offset + 8, is_little_endian) + offset_mid)
    }
}

function get_settings_2_1_1(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.error(`2_1_1 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} | mid: ${offset_mid} ; `)
        _Tx(temp_array___, u32, 0, offset)
    }
    if (u32(offset + 0, is_little_endian)) {
        get_settings_2_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }
}

function get_settings_2_1_1_1(offset) {
    if (u32(offset + 0, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_1_1_1 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} | mid: ${offset_mid} ; `)
    }
}

function get_settings_2_1v1027(offset) {// _Tx(temp_array___, u32, 12, offset)
// console.log(`v1027 -> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} | mid: ${offset_mid} ; `)
}

function get_settings_2_2(offset, i) {
    if (u8(offset + 0, is_little_endian) !== 2 || u8(offset + 1, is_little_endian) || u16(offset + 2, is_little_endian)) {
        console.log(`-> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} offset:${offset} | mid: ${offset_mid} ; `)
    }
    if (u32(offset + 4, is_little_endian)) {
        get_settings_2_1v1026(u32(offset + 4, is_little_endian) + offset_mid)
    }
}

function get_settings_2_3(offset) {
    let html = ''

    if (u32(offset + 12, is_little_endian) || u32(offset + 16, is_little_endian) || u32(offset + 28, is_little_endian) || u32(offset + 32, is_little_endian)) {
        console.log(`2_3 -> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u16(offset + 2, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | offset:${offset} ; `)
        _Tx(temp_array___, u8, 0, offset)
    }

    if (u8(offset, is_little_endian) === 1) {
        if (frames.includes(u32(offset + 4, is_little_endian) + offset_mid)) {} else {
            frames.push(u32(offset + 4, is_little_endian) + offset_mid)
            html += get_80byteblock(u32(offset + 4, is_little_endian) + offset_mid)
        }
    }
    if (u8(offset, is_little_endian) === 11) {
        html += get_settings_2_3_v11(u32(offset + 4, is_little_endian) + offset_mid)
    }

    if (u32(offset + 8, is_little_endian) !== 0) {
        get_settings_2_3_08(u32(offset + 8, is_little_endian) + offset_mid)
    }

    if (u32(offset + 24, is_little_endian) !== 0) {
        if (settings_3.includes(u32(offset + 24, is_little_endian) + offset_mid)) {// nothing
        } else {
            settings_3.push(u32(offset + 24, is_little_endian) + offset_mid)

        }
    }

    return html
}

function get_settings_2_3_08(offset) {
    let html = ''

    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`->- ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} ; `)
    }

    if (u32(offset + 0, is_little_endian) !== 0) {
        get_settings_2_3_08_00(u32(offset + 0, is_little_endian) + offset_mid)
    }
    if (u32(offset + 4, is_little_endian) !== 0) {
        get_settings_2_3_08_00(u32(offset + 4, is_little_endian) + offset_mid)
    }

    return html
}
function get_settings_2_3_08_00(offset) {
    if (u8(offset + 1, is_little_endian) || u16(offset + 2, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`->-1> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} ; `)
        _Tx(temp_array___, u32, 0, offset)
    }

}

function get_settings_2_3_v11(offset) {

    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_3_v11 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} ; `)
        _Tx(temp_array___, u8, 0, offset)
    }

    let html = ''
    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_settings_2_3_v11_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 12), i)
    }

    return html
}
function get_settings_2_3_v11_1(offset, i) {
    let html = ''
    if (u16(offset + 6, is_little_endian) !== 0) {
        console.log(`${i}||2_3_v11 -> ${u32(offset + 0, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        _Tx(temp_array___, u16, 4, offset)
    }

    if (u32(offset + 0, is_little_endian)) {
        get_settings_2_3_v11_1_1(u32(offset + 0, is_little_endian) + offset_mid)
    }

    if (u16(offset + 4, is_little_endian) === 0) {
        get_settings_2_3_v11_1_04v0(u32(offset + 8, is_little_endian) + offset_mid)
    }
    if (u16(offset + 4, is_little_endian) === 1) {
        get_settings_2_3_v11_1_04v1(u32(offset + 8, is_little_endian) + offset_mid)
    }
    if (u16(offset + 4, is_little_endian) === 3) {
        // console.log(`${i}||2_3_v11 -> ${u32(offset + 0, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        get_settings_2_3_v11_1_04v3(u32(offset + 8, is_little_endian) + offset_mid)
    }
    if (u16(offset + 4, is_little_endian) === 101) {
        // frame
        if (frames.includes(u32(offset + 8, is_little_endian) + offset_mid)) {// console.log(u32(offset + 4, is_little_endian) + offset_mid, 'skiped')
        } else {
            frames.push(u32(offset + 8, is_little_endian) + offset_mid)
            // console.log(u32(offset + 8, is_little_endian) + offset_mid, 'new')
            html += get_80byteblock(u32(offset + 8, is_little_endian) + offset_mid)
        }
    }

    if (u16(offset + 4, is_little_endian) === 100) {
        // frame
        if (frames.includes(u32(offset + 8, is_little_endian) + offset_mid)) {// console.log(u32(offset + 4, is_little_endian) + offset_mid, 'skiped')
        } else {
            frames.push(u32(offset + 8, is_little_endian) + offset_mid)
            // console.log(u32(offset + 8, is_little_endian) + offset_mid, 'new')
            html += get_80byteblock(u32(offset + 8, is_little_endian) + offset_mid)
        }
    }

    return html
}

function get_settings_2_3_v11_1_04v0(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_3_v11_04v0 -> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u16(offset + 6, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        _Tx(temp_array___, u16, 6, offset)
    }
}

function get_settings_2_3_v11_1_1(offset) {
    if (u32(offset + 0, is_little_endian) || u32(offset + 4, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_3_v11_1 -> ${u32(offset + 0, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
    }
}

function get_settings_2_3_v11_1_04v1(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`v1 -> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u16(offset + 6, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
    }
    if (u32(offset + 0, is_little_endian)) {
        get_settings_2_3_v11_1_04v1_00(u32(offset + 0, is_little_endian) + offset_mid)
    }
    if (u32(offset + 4, is_little_endian)) {
        get_settings_2_3_v11_1_04v1_00_04(u32(offset + 4, is_little_endian) + offset_mid)
    }

}
function get_settings_2_3_v11_1_04v1_00(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`v1_00 -> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u16(offset + 6, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
    }
    if (u32(offset + 4, is_little_endian)) {
        get_settings_2_3_v11_1_04v1_00_04(u32(offset + 4, is_little_endian) + offset_mid)
    }

}
function get_settings_2_3_v11_1_04v1_00_04(offset) {
    if (u8(offset + 1, is_little_endian) || u16(offset + 2, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`v1_00_04 -> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
    }

}

function get_settings_2_3_v11_1_04v3(offset) {
    if (u32(offset + 4, is_little_endian) || u8(offset + 9, is_little_endian) || u8(offset + 11, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`2_3_v11_1 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        _Tx(temp_array___, u32, 12, offset)
    }
    if (u32(offset + 16, is_little_endian)) {
        get_settings_2_3_v11_1_04v3_16(u32(offset + 16, is_little_endian) + offset_mid)
    }
}

function get_settings_2_3_v11_1_04v3_16(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_3_v11_1_16 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        _Tx(temp_array___, u32, 0, offset)
    }

    if (u32(offset + 4, is_little_endian)) {
        get_settings_2_3_v11_1_04v3_16_04(u32(offset + 4, is_little_endian) + offset_mid)
    }

}

function get_settings_2_3_v11_1_04v3_16_04(offset) {
    if (u32(offset + 4, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_3_v11_1_16_04 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
    }
    if (u32(offset + 0, is_little_endian)) {
        get_settings_2_3_v11_1_04v3_16_04_00(u32(offset + 0, is_little_endian) + offset_mid)
    }
}

function get_settings_2_3_v11_1_04v3_16_04_00(offset) {
    if (u8(offset + 5, is_little_endian) || u8(offset + 7, is_little_endian) || u32(offset + 12, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`2_3_v11_1_16_04_00 -> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | F ${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        _Tx(temp_array___, f32, 20, offset)
    }
    if (u32(offset + 8, is_little_endian)) {
        get_settings_2_3_v11_1_04v3_16_04_00_08(u32(offset + 8, is_little_endian) + offset_mid)
    }
}

function get_settings_2_3_v11_1_04v3_16_04_00_08(offset) {
    if (u32(offset + 0, is_little_endian) || u32(offset + 4, is_little_endian) || u8(offset + 9, is_little_endian) || u16(offset + 10, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`2_3_v11_1_16_04_00_08 -> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | offset:${offset} mid: ${offset_mid} ; `)
        _Tx(temp_array___, u8, 8, offset)
    }

}
function get_settings_header_2_inner_3(offset) {
    let html = `<br>--->3--> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)}`

    let value_4 = u32(offset + 4, is_little_endian) + offset_mid

    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_settings_header_2_inner_3_1(value_4)
    }

    return html
}

function get_settings_header_2_inner_3_1(offset) {
    let html = `<br>--->3-->1--> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | -> more here but unfinised for now  `

    return html

}

function get_settings_header_2_inner_2(offset) {

    let html = ''
    let value_0 = u32(offset, is_little_endian)
    //amount
    let value_4 = u32(offset + 4, is_little_endian) + offset_mid
    //offset 1
    let value_8 = u32(offset + 8, is_little_endian)
    //amount
    let value_12 = u32(offset + 12, is_little_endian) + offset_mid

    html += `<br>--->2--> ${value_0} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    if (u32(offset + 4, is_little_endian) !== 0) {
        for (let i = 0; i < value_0; i++) {

            html += get_settings_header_2_inner_2_1(value_4 + (i * 16))
        }
    }

    for (let i = 0; i < value_8; i++) {

        html += get_settings_header_2_inner_2_2(value_12 + (i * 16))

    }

    return html
}

function get_settings_header_2_inner_2_2(offset) {
    let html = `<br>--->2-->2-->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html
}
function get_settings_header_2_inner_2_1(offset) {
    let html = `<br>--->2-->1-->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html
}

function get_settings_header_2_inner(offset) {
    let get_settings_header_2_inner_html = `<br>--->1-->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return get_settings_header_2_inner_html
}

function get_settings_header(offset) {
    let amount = u32(offset, is_little_endian)
    let offset_entry = u32(offset + 4, is_little_endian) + offset_mid
    let html = ''

    if (amount == 0) {
        let html = ''
        return html
    } else {

        html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_varible_header" data-offset="${offset}" class='file_hover_not_selected'>Variables</a>`

        let amount = u32(offset, is_little_endian)
        let offset_entry = u32(offset + 4, is_little_endian) + offset_mid
        // let pading_8 = u32(offset + 8, is_little_endian)
        // let pading_12 = u32(offset + 12, is_little_endian)
        // // html += `<br>---> <span class='known' title='amount of varibles'> ${amount}</span> | ${pading_8} | ${pading_12} `
        for (i = 0; i < amount; i++) {
            html += get_settings_in(offset_entry + (i * 36), html)
        }
        html += "</div>"

        return html
    }
}

function get_settings_in(offset) {

    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_varible" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>${get_string(u32(offset, is_little_endian) + offset_mid, 0, false)}</a>`

    html += "</div>"

    if (u8(offset + 4, is_little_endian) === 1) {

        if (u32(offset + 12, is_little_endian) !== 0) {// console.log(` ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
        // interface_1_v1(u32(offset + 12, is_little_endian) + offset_mid)

        }
    }
    if (u8(offset + 4, is_little_endian) === 5) {

        if (u32(offset + 12, is_little_endian) !== 0) {// console.log(` [ ${get_string(u32(offset + 0, is_little_endian)+offset_mid,0,false) } ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
        // interface_1_v5(u32(offset + 12, is_little_endian) + offset_mid)

        }
    }
    if (u8(offset + 4, is_little_endian) === 7) {
        // console.log(` [ ${get_string(u32(offset + 0, is_little_endian)+offset_mid,0,false) } ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
        if (u32(offset + 12, is_little_endian) !== 0) {
            interface_1_v7(u32(offset + 12, is_little_endian) + offset_mid)

        }
    }
    if (u8(offset + 4, is_little_endian) === 8) {
        if (u32(offset + 12, is_little_endian) !== 0) {// console.log(` [ ${get_string(u32(offset + 0, is_little_endian)+offset_mid,0,false) } ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
        // interface_1_v8(u32(offset + 12, is_little_endian) + offset_mid)

        }
    }
    if (u8(offset + 4, is_little_endian) === 9) {
        if (u32(offset + 12, is_little_endian) !== 0) {// console.log(` [ ${get_string(u32(offset + 0, is_little_endian)+offset_mid,0,false) } ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
        // interface_1_v9(u32(offset + 12, is_little_endian) + offset_mid)

        }
    }
    return html

    let setting_04 = `[ ${u8(offset + 4, is_little_endian)} ,${u8(offset + 5, is_little_endian)} ,${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]`
    let setting_08 = u32(offset + 8, is_little_endian)
    let setting_12 = u32(offset + 12, is_little_endian)
    // offset
    let setting_16 = u32(offset + 16, is_little_endian)
    let setting_20 = u32(offset + 20, is_little_endian)
    let setting_24 = u32(offset + 24, is_little_endian)
    let setting_28 = u32(offset + 28, is_little_endian)
    let setting_32 = `[ ${u8(offset + 32, is_little_endian)} ,${u8(offset + 33, is_little_endian)} ,${u8(offset + 34, is_little_endian)}, ${u8(offset + 35, is_little_endian)} ]`

    html += `--->---> | ${setting_04} | ${setting_08} | ${setting_16} | ${setting_20} | ${setting_24} | ${setting_28} | ${setting_32} `
    if (setting_12 !== 0) {
        //offset probably
        html += get_settings_inner(setting_12 + offset_mid)

    }
    return html
}

function interface_1_v9(offset) {
    let html = ''

    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false) + " | "
    }
    if (u32(offset + 8, is_little_endian) !== 0) {
        html += get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false) + " | "
    }
    console.log(`---9> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] ${html} ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)

    if (u32(offset + 12, is_little_endian) !== 0) {
        alert("interface_1_v9")
    }

}

function interface_1_v8(offset) {
    // console.log(`---8> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)

    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
        interface_1_v8_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 12), i)
    }

    if (u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`---8> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
        alert("interface_1_v8")
    }

}

function interface_1_v8_1(offset, i) {

    // if (u32(offset + 8, is_little_endian)!==0) {
    console.log(`---8>---${i}> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false)} | offset-${offset} mid-${offset_mid}`)
    // }

}
function interface_1_v7(offset) {

    if (u8(offset + 3, is_little_endian) !== 0) {
        console.log(`---7> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
    }

    if (u32(offset + 4, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        alert("interface_1_v7 not 0")
    }

}
function interface_1_v5(offset) {
    console.log(`---5> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)

    if (u32(offset + 4, is_little_endian) !== 0) {// interface_1_v1_1(u32(offset + 4, is_little_endian)+offset_mid)
    }

    if (u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        alert("interface_1_v5 not 0")
    }

}
function interface_1_v1(offset) {
    // console.log(`---1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)

    if (u32(offset + 4, is_little_endian) !== 0) {// interface_1_v1_1(u32(offset + 4, is_little_endian)+offset_mid)
    }

    if (u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        alert("interface_1_v1 not 0")
    }

}

function interface_1_v1_1(offset) {

    if (u8(offset + 1, is_little_endian) !== 0) {
        console.log(`---1>---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset-${offset} mid-${offset_mid}`)
    }

    if (u32(offset + 12, is_little_endian) !== 0) {
        alert("interface_1_v1_1 not 0")
    }
}
function interface_1_1_1(offset) {
    if (u32(offset + 0, is_little_endian) !== 0 || u32(offset + 4, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {// console.log(`---1>---> ${get_string(offset, 0, false)} || offset-${offset} mid-${offset_mid}`)

    }
}

function get_interface__sub_model(offset, i) {
    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_sub_model" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> SUB Model object [${i}]</a></div>`
    return html
}
function get_model_animation_2(offset, i) {

    if (u32(offset + 12, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | [ ${u32(offset + 4, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ; mid: ${offset_mid}   `)
    }

    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
        get_model_animation_2_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 32))
    }

    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_model_animation_2" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> get_model_animation_2 [${i}]</a></div>`
    return html
}

function get_model_animation_2_1(offset) {// console.log(`F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] offset:${offset} ; mid: ${offset_mid}   `)
}

function get_model_animation_1(offset, i) {

    if (u32(offset + 24, is_little_endian) !== 3452816845 || u32(offset + 28, is_little_endian) !== 3452816845 || u32(offset + 36, is_little_endian) !== 3452816845 || u32(offset + 44, is_little_endian) !== 3452816845 || u32(offset + 48, is_little_endian) !== 3452816845 || u32(offset + 56, is_little_endian) !== 3452816845 || u32(offset + 60, is_little_endian) !== 3452816845) {// console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | F ${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    }
    let temp_val = u32(offset + 40, is_little_endian)

    console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | F ${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} -16 | ${u32(offset + 20, is_little_endian)} -20 | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    if (u32(offset + 52, is_little_endian)) {
        get_model_animation_1_52(u32(offset + 52, is_little_endian) + offset_mid, temp_val)
    }

    // console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)

    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_model_animation_1" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> get_model_animation_1 [${i}]</a></div>`
    return html
}

function get_model_animation_1_52(offset, temp_val) {

    let _12 = u32(offset + 12, is_little_endian)
    let _20 = u32(offset + 20, is_little_endian)
    let _24 = u32(offset + 24, is_little_endian)

    if (u32(offset + 12, is_little_endian) === 3452816845) {
        _12 = "CD"
    }
    if (u32(offset + 20, is_little_endian) === 3452816845) {
        _20 = "CD"
    }
    if (u32(offset + 24, is_little_endian) === 3452816845) {
        _24 = "CD"
    }
    let diff = u32(offset + 28, is_little_endian) - u32(offset + 16, is_little_endian)

    console.log(`__start: ${u32(offset + 28, is_little_endian) + offset_mid} || end: ${u32(offset + 16, is_little_endian) + offset_mid} | Dif: ${diff} | calculated: ${(diff / 8 ) / 6}`)
    console.log(`-> ${u32(offset + 0, is_little_endian)} _0 | ${u32(offset + 4, is_little_endian)} _4 | ${u32(offset + 8, is_little_endian)} _8 | ${_12} | ${u32(offset + 16, is_little_endian)} | ${_20} | ${_24} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)}  offset:${offset} ; mid: ${offset_mid} ||| \n\n`)

    if (u32(offset + 28, is_little_endian) === 0) {// console.log(`-> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${_12} | ${u32(offset + 16, is_little_endian)} | ${_20} | ${_24} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)}  offset:${offset} ; mid: ${offset_mid}   `)
    }
}
function get_interface_model(offset, i) {
    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_interface_model" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> Model object [${i}]</a></div>`
    return html
}
function get_spark(offset, i) {
    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_spark" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> Sparkler [${i}]</a></div>`

    if (u32(offset + 4, is_little_endian) !== 0 || u32(offset + 20, is_little_endian) !== 0 || u32(offset + 24, is_little_endian) !== 0 || u32(offset + 28, is_little_endian) !== 0) {
        console.log(` F ${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ; mid: ${offset_mid}   `)
        _Tx(temp_array___, u32, 12, offset)
    }
    if (u32(offset + 16, is_little_endian) !== 0) {
        get_spark_1(u32(offset + 16, is_little_endian) + offset_mid)
    }

    return html
}

function get_spark_1(offset) {
    if (u8(offset + 5, is_little_endian) !== 0 || u16(offset + 6, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0 || u32(offset + 20, is_little_endian) !== 0 || u32(offset + 60, is_little_endian) !== 0) {
        _Tx(temp_array___, u32, 4, offset)
        console.log(`[ ${u16(offset + 0, is_little_endian)}, ${u16(offset + 2, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | F ${f32(offset + 28, is_little_endian)} | F ${f32(offset + 32, is_little_endian)} | F ${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    }

    for (let i = 0; i < u32(offset + 44, is_little_endian); i++) {
        get_spark_1_1(u32(offset + 48, is_little_endian) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(offset + 52, is_little_endian); i++) {
        get_spark_1_2(u32(offset + 56, is_little_endian) + offset_mid + (i * 12))
    }

}

function get_spark_1_1(offset) {
    if (f32(offset + 4, is_little_endian) !== 0) {
        console.log(`[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} offset:${offset} ; mid: ${offset_mid}   `)
    }
}
function get_spark_1_2(offset) {}

function get_texts(offset, i) {
    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_text" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> Text [${i}]</a></div>`
    return html
}

function get_fonts(offset, i) {

    if (u32(offset + 4, is_little_endian) || u8(offset + 11, is_little_endian) || u32(offset + 16, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) !== 1 || u32(offset + 40, is_little_endian) || u32(offset + 44, is_little_endian)) {
        console.log(`|T| ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F ${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    }

    if (u32(offset + 36, is_little_endian) !== 0) {
        get_fonts_36(u32(offset + 36, is_little_endian) + offset_mid)
    }

    if (u32(offset + 24, is_little_endian) === 1) {
        get_fonts_28(u32(offset + 28, is_little_endian) + offset_mid)
    }

    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_font" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> Font [${i}]</a></div>`
    return html
}

function get_fonts_36(offset) {// console.log(`fin__fin_[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, ] | F${f32(offset + 4, is_little_endian)}  |F${f32(offset + 8, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
}

function get_fonts_04(offset) {

    if (u16(offset + 2, is_little_endian) || u32(offset + 16, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 36, is_little_endian) || u32(offset + 40, is_little_endian) || u32(offset + 44, is_little_endian)) {
        console.log(`> | [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    }

    if (fonts.includes(u32(offset + 12, is_little_endian) + offset_mid)) {} else {
        fonts.push(u32(offset + 12, is_little_endian) + offset_mid)
    }
    if (fonts.includes(u32(offset + 28, is_little_endian) + offset_mid)) {} else {
        fonts.push(u32(offset + 28, is_little_endian) + offset_mid)
    }
    if (fonts.includes(u32(offset + 32, is_little_endian) + offset_mid)) {} else {
        fonts.push(u32(offset + 32, is_little_endian) + offset_mid)
    }

    // _Tx(temp_array___, u32, 36, offset)
    // if (u32(offset + 44, is_little_endian) !== 0) {
    //     console.log(`-> | [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset +2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | offset:${offset} ;   `)
    // }

}
function get_fonts_28(offset) {
    // _Tx(temp_array___, u32, 28, offset)
    if (u32(offset + 28, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 16, is_little_endian) || u32(offset + 12, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 4, is_little_endian)) {
        console.log(`-> -> | [ F ${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ;   `)
    }
}
function get_settings_header_3(offset, i) {
    let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_setting_3" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> settings 3 [${i}]</a></div>`

    if (u32(offset + 4, is_little_endian) || u8(offset + 9, is_little_endian) || u8(offset + 11, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ;   `)
        _Tx(temp_array___, u8, 11, offset)
    }

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        get_settings_header_3_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 16))
    }

    return html
}

function get_settings_header_3_1(offset) {

    if (u32(offset + 0, is_little_endian) !== 1 || u32(offset + 8, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F ${f32(offset + 12, is_little_endian)} offset:${offset} ;   `)
    }

    if (u32(offset + 4, is_little_endian)) {
        get_settings_header_3_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }

}
function get_settings_header_3_1_1(offset) {
    if (u32(offset + 0, is_little_endian) === 0 || u32(offset + 4, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`3_1_1 ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F ${f32(offset + 12, is_little_endian)} offset:${offset} ;   `)
    }
    get_settings_header_3_1_1_1(u32(offset, is_little_endian) + offset_mid)

}
function get_settings_header_3_1_1_1(offset) {
    if (u8(offset + 7, is_little_endian) || u32(offset + 12, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`3_1_1_1 [ ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | F ${f32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ;   `)
        _Tx(temp_array___, u8, 7, offset)

    }

    get_settings_header_3_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

}
function get_settings_header_3_1_1_1_1(offset) {
    if (u32(offset + 0, is_little_endian) || u32(offset + 4, is_little_endian) || u8(offset + 8, is_little_endian) !== 1 || u32(offset + 12, is_little_endian)) {
        console.log(`3_1_1_1_1 [ ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | F ${f32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ;   `)
        _Tx(temp_array___, u8, 8, offset)

    }
}

function get_settings_header_4(offset) {
    let html = ""
    html += `<br>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    html += get_settings_header_3_1(u32(offset + 16, is_little_endian) + offset_mid)

    return html
}
function get_settings_header_4_1(offset) {
    let html = ""
    html += `<br>--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    // html += get_settings_header_4_1(u32(offset + 16, is_little_endian) + offset_mid)

    return html
}

function get_settings_header_5(offset) {
    let html = ""
    if (f32(offset + 4, is_little_endian) !== 0) {// console.log(`5---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`)
    }
    // if (f32(offset + 8, is_little_endian) !== 0 || f32(offset + 12, is_little_endian) !== 0) {
    //     console.log(`5---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`)
    // }

    return html
}
function get_settings_header_6(offset) {
    let html = ""
    if (f32(offset + 4, is_little_endian) !== 0) {// console.log(`6---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`)
    }
    if (f32(offset + 8, is_little_endian) !== 0 || f32(offset + 12, is_little_endian) !== 0) {// console.log(`6---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`)
    }
    return html
}

function get_LAYER_byte_block_08(offset) {

    if (u8(offset + 0, is_little_endian) === 2) {
        for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
            get_LAYER_byte_block_08_08(u32(offset + 8, is_little_endian) + offset_mid + (i * 12))
        }
    }

    if (u32(offset + 12, is_little_endian) !== 0) {
        alert('wtf get_LAYER_byte_block_08')
    }
}
function get_LAYER_byte_block_08_08(offset) {

    if (u8(offset + 0, is_little_endian) === 6) {
        // console.log(`--08-08> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}  | |offset:${offset} | mid: ${offset_mid}`)
        get_LAYER_byte_block_08_08_04(u32(offset + 4, is_little_endian) + offset_mid)
    }
}
function get_LAYER_byte_block_08_08_04(offset) {

    if (u32(offset + 4, is_little_endian) !== 0) {// console.log(`--08-08-04v2> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}  | |offset:${offset} | mid: ${offset_mid}`)
    // get_LAYER_byte_block_08_08_04_04(u32(offset + 4, is_little_endian) + offset_mid)
    }
    if (u8(offset + 3, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        alert("get_LAYER_byte_block_08_08_04 6")
    }
}
function get_LAYER_byte_block_08_08_04_04(offset) {// console.log(`--08-08-04v2-04> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}  | |offset:${offset} | mid: ${offset_mid}`)
}

function get_LAYER_byte_block_20(offset) {
    console.log(`--20> ${u32(offset + 0, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | |offset:${offset} | mid: ${offset_mid}`)
}

function get_LAYER_byte_block(offset) {
    let html = ''

    // if (u8(offset + 30, is_little_endian) === 0) {
    // console.log(` ${get_string(u32(offset, is_little_endian)+offset_mid,0,false)}  | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} |  [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] |offset:${offset} | mid: ${offset_mid}`)
    // get_LAYER_byte_block_20(u32(offset + 20, is_little_endian) + offset_mid)
    // }

    if (u32(offset + 20, is_little_endian) !== 0) {// console.log(` ${get_string(u32(offset, is_little_endian)+offset_mid,0,false)}  | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} |  [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] |offset:${offset} | mid: ${offset_mid}`)
    // get_LAYER_byte_block_08(u32(offset + 8, is_little_endian) + offset_mid)
    }

    layer_type = u8(offset + 19)
    html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> / ${layer_type} / </a> <a data-type="x_layer" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>${get_string(u32(offset, is_little_endian) + offset_mid, u32(offset + 8, is_little_endian) + offset_mid)}</a>`

    // html += `<br>---><span class='known' title='offset to layer name'> ${u32(offset, is_little_endian)}</span> | ${u32(offset + 4, is_little_endian)} | <span class='known' title='offset 2'>${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} |<span class='known' title='offset 4'> ${u32(offset + 44, is_little_endian)}</span> | ${u32(offset + 48, is_little_endian)} | <span class='known' title='offset 5'>${u32(offset + 52, is_little_endian)}</span> | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | <span class='known' title='amount in offset 6'>${u32(offset + 68, is_little_endian)}</span> | <span class='known' title='offset 6'>${u32(offset + 72, is_little_endian)}</span>`

    if (u32(offset + 8, is_little_endian) !== 0) {
        html += `<div style='display:none' class='sub_file_div'><a class='no_arrow'></a><a> </a> <a data-type="x_layer_1" data-offset="${u32(offset + 8, is_little_endian) + offset_mid}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>var link?</a></div>`
    }
    if (u32(offset + 24, is_little_endian) !== 0) {
        html += `<div style='display:none' class='sub_file_div'><a class='no_arrow'></a><a> </a> <a data-type="x_layer_2" data-data="${layer_type}" data-offset="${u32(offset + 24, is_little_endian) + offset_mid}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>type?</a></div>`
    }

    if (u32(offset + 32, is_little_endian) !== 0) {
        html += get_layer_3(u32(offset + 32, is_little_endian) + offset_mid)
    }
    if (u32(offset + 44, is_little_endian) !== 0) {
        html += get_layer_5(u32(offset + 44, is_little_endian) + offset_mid)
    }
    if (u32(offset + 48, is_little_endian) !== 0) {
        html += get_layer_6(u32(offset + 48, is_little_endian) + offset_mid)
    }
    if (u32(offset + 52, is_little_endian) !== 0) {
        html += get_layer_7(u32(offset + 52, is_little_endian) + offset_mid)
    }

    // html += get_LAYER_byte_block_any_2(u32(offset + 8, is_little_endian) + offset_mid)

    // // html += get_LAYER_byte_block_any_2(u32(offset + 8, is_little_endian) + offset_mid)

    // if (u32(offset + 44, is_little_endian) !== 0) {
    //     html += get_LAYER_byte_block_any_4(u32(offset + 44, is_little_endian) + offset_mid)
    // }
    // if (u32(offset + 52, is_little_endian) !== 0) {
    //     html += get_LAYER_byte_block_any_5(u32(offset + 52, is_little_endian) + offset_mid)
    // }
    for (let i = 0; i < u32(offset + 68, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6(u32(offset + 72, is_little_endian) + offset_mid + (i * 12), i, u8(offset + 19))

    }

    if (u8(offset + 19) === 0) {
        get_LAYER_byte_block_any_3_0texture(u32(offset + 24, is_little_endian) + offset_mid)
        // html += ` ${get_LAYER_byte_block_any_3_0texture(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 1) {
        html += ` ${get_LAYER_byte_block_any_3_1text(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 3) {
        html += ` ${get_LAYER_byte_block_any_3_3(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 5) {
        html += ` ${get_LAYER_byte_block_any_3_1animation(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 6) {
        html += ` ${get_LAYER_byte_block_any_3_6recursive(u32(offset + 24, is_little_endian) + offset_mid, 6)} `
    }
    if (u8(offset + 19) === 7) {
        html += ` ${get_LAYER_byte_block_any_3_6recursive(u32(offset + 24, is_little_endian) + offset_mid, 7)} `
    }

    if (u8(offset + 19) === 10) {
        html += ` ${get_LAYER_byte_block_any_3_10unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    }

    if (u8(offset + 19) === 12) {
        html += ` ${get_LAYER_byte_block_any_3_12unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 13) {
        html += ` ${get_LAYER_byte_block_any_3_13unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 14) {
        html += ` ${get_LAYER_byte_block_any_3_14unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 15) {
        html += ` ${get_LAYER_byte_block_any_3_15unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    }

    html += '</div>'
    if (u32(offset + 4, is_little_endian) !== 0 || u32(offset + 76, is_little_endian) !== 4294967295 || u32(offset + 80, is_little_endian) !== 4294967295 || u32(offset + 84, is_little_endian) !== 4294967295 || u32(offset + 88, is_little_endian) !== 4294967295 || u32(offset + 92, is_little_endian) !== 4294967295 || u32(offset + 96, is_little_endian) !== 4294967295) {
        alert("wtf get_LAYER_byte_block")
    }

    return html

}

function get_layer_7(offset) {
    let html = ''

    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {// html += get_interface_7_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32), i)
    }
    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {// html += get_interface_7_1(u32(offset + 12, is_little_endian) + offset_mid + (i * 32), i)
    }
    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {// html += get_interface_7_1(u32(offset + 20, is_little_endian) + offset_mid + (i * 32), i)
    }
    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {// html += get_interface_7_1(u32(offset + 28, is_little_endian) + offset_mid + (i * 12), i)
    }
    for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {// html += get_interface_7_1(u32(offset + 36, is_little_endian) + offset_mid + (i * 40), i)
    }
    if (f32(offset + 40, is_little_endian) !== 0 || f32(offset + 44, is_little_endian) !== 0) {
        alert("get_layer_7")
    }

    return html
}

function get_interface_7_1(offset, i) {
    let html = ''
    if (u8(offset + 7, is_little_endian) !== 0) {
        console.log(`${i}->  [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | F ${f32(offset + 8, is_little_endian)}  offset:${offset} ;   `)
    }

    return html
}
function get_layer_6(offset) {
    let html = ''

    return html
}
function get_layer_5(offset) {
    let html = ''

    if (u32(offset + 0, is_little_endian) !== 0 || u32(offset + 4, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`[ ${u32(offset + 0, is_little_endian)}| ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} offset:${offset} ;   `)
    }

    return html
}

function get_layer_3(offset) {

    let html = ''

    if (u8(offset + 5, is_little_endian) !== 0 || u16(offset + 6, is_little_endian) !== 0 || u32(offset + 40, is_little_endian) !== 0 || u32(offset + 44, is_little_endian) !== 0) {
        console.log(`[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} offset:${offset} ;   `)
    }

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        get_layer_3_1_v1(u32(offset + 12, is_little_endian) + offset_mid + i * 24, i)
    }
    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        get_layer_3_2(u32(offset + 20, is_little_endian) + offset_mid + (i * 12), 1)
    }
    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
        get_layer_3_2(u32(offset + 28, is_little_endian) + offset_mid + (i * 12), 2)
    }

    //FIX

    for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
        html += get_settings_header_2(u32(offset + 36, is_little_endian) + offset_mid + (i * 28))
    }

    // html += '</div>'
    return html
}

function get_layer_3_1_36(offset) {
    if (u32(offset + 4, is_little_endian) || u32(offset + 8, is_little_endian)) {
        console.log(`-> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]  | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | offset:${offset} ;   `)
    }
    //see if get_layer_3_1_36_16 is actually get_settings_2_2

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        get_settings_2_2(u32(offset + 16, is_little_endian) + offset_mid + (i * 8))
    }
    // for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
    //     get_layer_3_1_36_16(u32(offset + 16, is_little_endian)+offset_mid + (i*8))
    // }
    for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
        get_settings_2_3(u32(offset + 24, is_little_endian) + offset_mid + (i * 36))
        /////////////////////////////aaaaaaaaaaaaaaaaaaaaa
    }
}
function get_layer_3_1_36_16(offset) {
    if (u8(offset + 1, is_little_endian) || u16(offset + 2, is_little_endian)) {
        console.log(`-> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | offset:${offset} ;   `)
    }
    if (u32(offset + 4, is_little_endian)) {
        get_layer_3_1_36_16_04(u32(offset + 4, is_little_endian) + offset_mid)
    }
}

function get_layer_3_1_36_16_04(offset) {
    if (u32(offset + 16, is_little_endian)) {
        _Tx(temp_array___, u32, 4, offset)
        console.log(`[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ;   `)
    }
}

function get_layer_3_1_v1(offset, i) {
    let html = ''
    // if (u32(offset + 24, is_little_endian)!==0 || u32(offset + 28, is_little_endian)!==0) {
    // console.log(`---v${i}> ${u32(offset + 0, is_little_endian)} | ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} offset:${offset} ;   `)
    // _Tx(temp_array___, u32, 24, offset)
    // }
    return html
}
function get_layer_3_3(offset) {
    let html = ''
    console.log(`---3> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)

    if (u32(offset + 8, is_little_endian) !== 0) {
        get_layer_3_3_1(u32(offset + 8, is_little_endian) + offset_mid, u32(offset + 4, is_little_endian))
    }

    return html
}
function get_layer_3_3_1(offset) {
    let html = ''
    console.log(`---3>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)

    return html
}
function get_layer_3_2(offset, i) {
    let html = ''

    if (u32(offset + 0, is_little_endian) !== 0 || u16(offset + 6, is_little_endian) !== 0) {
        console.log(`---${i}> ${u32(offset + 0, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)} ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | offset:${offset} ;   `)
        _Tx(temp_array___, u32, 4, offset)
    }

    if (u16(offset + 4, is_little_endian) === 0) {
        get_layer_3_2_1v0(u32(offset + 8, is_little_endian) + offset_mid, u32(offset + 4, is_little_endian))
    } else if (u16(offset + 4, is_little_endian) === 1) {
        get_layer_3_2_1v1(u32(offset + 8, is_little_endian) + offset_mid, u32(offset + 4, is_little_endian))
    }

    return html
}

function get_layer_3_2_1v0(offset) {

    if (u8(offset + 5, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`-> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]  | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
        _Tx(temp_array___, u8, 6, offset)
    }

}

function get_layer_3_2_1v1(offset) {
    let html = ''

    if (u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`---2> ---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
    }

    if (u32(offset + 0, is_little_endian) !== 0) {
        get_layer_3_2_1_1(u32(offset + 0, is_little_endian) + offset_mid)
    }
    if (u32(offset + 4, is_little_endian) !== 0) {
        get_layer_3_2_1_2(u32(offset + 4, is_little_endian) + offset_mid)
    }

    return html
}
function get_layer_3_2_1_1(offset, type) {
    let html = ''
    if (u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`---2>--->---1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
        _Tx(temp_array___, u32, 0, offset)
    }

    if (u32(offset + 4, is_little_endian) !== 0) {
        get_layer_3_2_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }

    return html
}
function get_layer_3_2_1_1_1(offset, type) {
    let html = ''

    if (u32(offset + 0, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`---2>--->---1>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
        _Tx(temp_array___, u32, 0, offset)
    }

    return html
}

function get_layer_3_2_1_2(offset, type) {
    let html = ''

    if (u8(offset + 1, is_little_endian) || u16(offset + 2, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`---2>--->---2> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
        _Tx(temp_array___, u32, 4, offset)
    }

    return html
}

function get_layer_3_1(offset) {
    let html = ``
    if (u32(offset + 20, is_little_endian) !== 0) {// console.log(` ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} offset:${offset} ;   `)
    }

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {// get_layer_3_1_1(u32(offset + 16, is_little_endian)+offset_mid+(i*8))
    }
    for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
        get_settings_header_2(u32(offset + 24, is_little_endian) + offset_mid + (i * 36))
    }

    //FIX

    if (u32(offset + 24, is_little_endian) !== 0) {// html += get_layer_3_1_2(u32(offset + 24, is_little_endian) + offset_mid)
    }

    return html
}
function get_layer_3_1_1(offset) {
    let html = ``
    // console.log(`--->--->${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | offset:${offset} ;   `)
    if (u32(offset + 4, is_little_endian) !== 0) {
        get_layer_3_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }

    return html
}
function get_layer_3_1_1_1(offset) {
    let html = ``
    console.log(`--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} offset:${offset} ;   `)

    return html
}
function get_layer_3_1_2(offset) {
    let html = ``

    console.log(`--->[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)}  offset:${offset} ;   `)

    //FIX
    // if (u32(offset + 0, is_little_endian) === 1) {
    //     if (frames.includes(u32(offset + 4, is_little_endian) + offset_mid)) {
    //         console.log(u32(offset + 4, is_little_endian) + offset_mid, 'skiped')
    //     } else {
    //         console.log(u32(offset + 4, is_little_endian) + offset_mid, 'aaaaaaaaaaamid')
    //         html += get_80byteblock(u32(offset + 4, is_little_endian) + offset_mid)
    //     }
    // } else {
    //     console.log(u32(offset + 4, is_little_endian) + offset_mid, 'not1')
    // }

    return html
}

function get_LAYER_byte_block_any_3_15unknown(offset) {
    let html = ''

    if (u32(offset + 4, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`<br>---3?15--->   ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`)
    }

    if (sparkler.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        sparkler.push(u32(offset + 0, is_little_endian) + offset_mid)
    }

    // html += get_LAYER_byte_block_any_3_15unknown_1(u32(offset, is_little_endian) + offset_mid)
    return html

}

function get_LAYER_byte_block_any_3_15unknown_1(offset) {
    let html = ''

    html += `<br>---3?15--->--->   F ${f32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    html += get_LAYER_byte_block_any_3_15unknown_1_1(u32(offset + 16, is_little_endian) + offset_mid)
    return html

}
function get_LAYER_byte_block_any_3_15unknown_1_1(offset) {
    let html = ''

    html += `<br>---3?15--->--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | F ${f32(offset + 28, is_little_endian)} | F ${f32(offset + 32, is_little_endian)} | F ${f32(offset + 36, is_little_endian)} | F ${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

    for (let i = 0; i < u32(offset + 44, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_3_15unknown_1_1_1(u32(offset + 48, is_little_endian) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(offset + 52, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_3_15unknown_1_1_2(u32(offset + 56, is_little_endian) + offset_mid + (i * 12))
    }
    return html

}

function get_LAYER_byte_block_any_3_15unknown_1_1_2(offset) {
    let html = ''

    html += `<br>---3?15--->--->---2---> F ${f32(offset + 0, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | F ${f32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | F ${f32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | F ${f32(offset + 28, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_3_15unknown_1_1_1(offset) {
    let html = ''

    html += `<br>---3?15--->--->---1---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_3_14unknown(offset) {
    let html = ''
    // console.log('14', offset)

    for (let i = 0; i < 68; i++) {
        if (u32(offset + (i * 4), is_little_endian) !== 0)
            console.log('diff', 14, offset + (i * 4))
    }

    if (u16(offset + 274, is_little_endian) !== 0 || u32(offset + 280, is_little_endian) !== 0 || u16(offset + 284, is_little_endian) !== 0) {
        console.log(`14-> ${u8(offset + 272, is_little_endian)}, ${u8(offset + 273, is_little_endian)}, ${u8(offset + 274, is_little_endian)}, ${u8(offset + 275, is_little_endian)}, '|', ${u32(offset + 276, is_little_endian)}, '|', ${u32(offset + 280, is_little_endian)}, '|', ${u32(offset + 284, is_little_endian)}, 'offset: ${offset}`)
        _Tx(temp_array___, u8, 273, offset)
    }

    // console.log('14->', u8(offset + 272, is_little_endian), u8(offset + 273, is_little_endian), u8(offset + 274, is_little_endian), u8(offset + 275, is_little_endian), '|', u32(offset + 276, is_little_endian), '|', u32(offset + 280, is_little_endian), '|', u32(offset + 284, is_little_endian), '(offset --->', offset)

    if (u32(offset + 276, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3_14unknown_1(u32(offset + 276, is_little_endian) + offset_mid)
    }
    return html

}
function get_LAYER_byte_block_any_3_14unknown_1(offset) {
    let html = ''
    if (u8(offset + 3, is_little_endian) !== 0 || u32(offset + 4, is_little_endian) !== 0 || u32(offset + 9, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log('14->->', u8(offset + 0, is_little_endian), u8(offset + 1, is_little_endian), u8(offset + 2, is_little_endian), u8(offset + 3, is_little_endian), '|', u32(offset + 4, is_little_endian), '|', u8(offset + 8, is_little_endian), u8(offset + 9, is_little_endian), u8(offset + 10, is_little_endian), u8(offset + 11, is_little_endian), '|', u32(offset + 12, is_little_endian), '(offset --->', offset)
        _Tx(temp_array___, u8, 8, offset)
    }

    // html += `<br>---3?14--->--->  [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_3_13unknown(offset) {
    let html = ''

    if (u8(offset + 1, is_little_endian) !== 5) {
        console.log("NOT 5!!!111111")
    }
    if (u32(offset + 8, is_little_endian) !== 1) {
        console.log("NOT 1 !!!111111")
    }

    if (u8(offset + 0, is_little_endian) !== 0 || u16(offset + 2, is_little_endian) !== 0) {
        console.log("blah")
    }

    // console.log('13->', `[ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`, '(offset --->', offset)

    html += get_LAYER_byte_block_any_3_13unknown_1(u32(offset + 4, is_little_endian) + offset_mid)

    html += get_LAYER_byte_block_any_3_13unknown_2(u32(offset + 12, is_little_endian) + offset_mid)

    return html

}
function get_LAYER_byte_block_any_3_13unknown_2(offset) {

    let html = ''

    if (f32(offset + 4, is_little_endian) !== 0 || f32(offset + 8, is_little_endian) !== 0 || f32(offset + 12, is_little_endian) !== 0) {
        // _Tx(temp_array___, u32, 4, offset)
        console.log(`---2> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`)
    }

    return html

}

function get_LAYER_byte_block_any_3_13unknown_1(offset) {
    let html = ''
    if (f32(offset + 12, is_little_endian) !== 0) {
        _Tx(temp_array___, u32, 0, offset)
        console.log(`---1> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ] offset ${offset} mid: ${offset_mid}`)
    }
    // html += `<br>---3?13---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    return html

}

function get_LAYER_byte_block_any_3_12unknown(offset) {
    let html = ''
    if (u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        // _Tx(temp_array___, u32, 4, offset)
        console.log(` [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset:${offset} ; mid: ${offset_mid}   `)
    }

    // html += `<br>---3?12---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    // if (u32(offset + 0, is_little_endian)!==0 || u32(offset + 4, is_little_endian)!==0 || u32(offset + 8, is_little_endian)!==0 || u32(offset + 12, is_little_endian)!==0) {
    //     console.log("12--->",u32(offset + 0, is_little_endian),u32(offset + 4, is_little_endian),u32(offset + 8, is_little_endian),u32(offset + 12, is_little_endian))
    // }

    return html

}
function get_LAYER_byte_block_any_3_10unknown(offset) {
    let html = ''
    // html += `<br>---3?10---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    return html

}

function get_LAYER_byte_block_any_3_3(offset) {

    if (u32(offset + 8, is_little_endian) || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)
    }

    let html = ''

    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_3_3_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 8))
    }

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        get_LAYER_byte_block_any_3_3_2(u32(offset + 16, is_little_endian) + offset_mid + (i * 16))
    }

    return html
}
function get_LAYER_byte_block_any_3_3_1(offset) {
    let html = ''

    if (u32(offset + 0, is_little_endian) === 0 || u32(offset + 4, is_little_endian) === 0) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  offset: ${offset} | mid:${offset_mid}`)
    }

    if (interface_model.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        interface_model.push(u32(offset + 0, is_little_endian) + offset_mid)
        html += get_LAYER_byte_block_any_3_3_1_1(u32(offset + 0, is_little_endian) + offset_mid)
    }
    if (interface_model_2.includes(u32(offset + 4, is_little_endian) + offset_mid)) {} else {
        interface_model_2.push(u32(offset + 4, is_little_endian) + offset_mid)
        get_LAYER_byte_block_any_3_3_1_2(u32(offset + 4, is_little_endian) + offset_mid)
    }

    return html
}

function get_LAYER_byte_block_any_3_3_1_2(offset) {
    if (u32(offset + 4, is_little_endian) || u8(offset + 9, is_little_endian) || u8(offset + 11, is_little_endian) || u32(offset + 12, is_little_endian) !== 1 || u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}  || offset: ${offset} | mid:${offset_mid}`)
    }

    if (u32(offset + 16, is_little_endian)) {
        get_LAYER_byte_block_any_3_3_1_2_1(u32(offset + 16, is_little_endian) + offset_mid)
    }

}

function get_LAYER_byte_block_any_3_3_1_2_1(offset) {

    if (u32(offset + 0, is_little_endian) !== 1 || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)

    }

    if (u32(offset + 4, is_little_endian)) {
        get_LAYER_byte_block_any_3_3_1_2_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }

}

function get_LAYER_byte_block_any_3_3_1_2_1_1(offset) {
    if (u32(offset + 0, is_little_endian) || u32(offset + 4, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)
    }
}

function get_LAYER_byte_block_any_3_3_1_1(offset) {
    let html = ''

    // _Tx(temp_array___, u8, 48, offset)
    if (u32(offset + 40, is_little_endian) || u32(offset + 44, is_little_endian) || u8(offset + 51, is_little_endian) || u32(offset + 60, is_little_endian) || u32(offset + 68, is_little_endian) || u32(offset + 72, is_little_endian) || u32(offset + 76, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}  | ${u32(offset + 32, is_little_endian)}  | F ${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)}  | ${u32(offset + 44, is_little_endian)}  | [ ${u8(offset + 48, is_little_endian)}, ${u8(offset + 49, is_little_endian)}, ${u8(offset + 50, is_little_endian)}, ${u8(offset + 51, is_little_endian)} ]  | ${u32(offset + 52, is_little_endian)}  | ${u32(offset + 56, is_little_endian)}  | ${u32(offset + 60, is_little_endian)}  | ${u32(offset + 64, is_little_endian)}  | ${u32(offset + 68, is_little_endian)}  | ${u32(offset + 72, is_little_endian)}  | ${u32(offset + 76, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)
    }

    if (interface_sub_model.includes(u32(offset + 8, is_little_endian) + offset_mid)) {} else {
        interface_sub_model.push(u32(offset + 8, is_little_endian) + offset_mid)
        get_LAYER_byte_block_any_3_3_1_1_2(u32(offset + 8, is_little_endian) + offset_mid)
    }
    if (model_animation_1.includes(u32(offset + 12, is_little_endian) + offset_mid)) {} else {
        model_animation_1.push(u32(offset + 12, is_little_endian) + offset_mid)
    }
    if (model_animation_2.includes(u32(offset + 16, is_little_endian) + offset_mid)) {} else {
        model_animation_2.push(u32(offset + 16, is_little_endian) + offset_mid)
    }

    for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
        get_LAYER_byte_block_any_3_3_1_1_2_2(u32(offset + 24, is_little_endian) + (i * 4) + offset_mid)
    }
    for (let i = 0; i < u32(offset + 28, is_little_endian); i++) {
        get_LAYER_byte_block_any_3_3_1_1_2_3(u32(offset + 32, is_little_endian) + (i * 8) + offset_mid)
    }

    if (u32(offset + 52, is_little_endian)) {
        get_5t3_52(u32(offset + 52, is_little_endian) + offset_mid)
    }
    if (u32(offset + 56, is_little_endian)) {
        get_5t3_56(u32(offset + 56, is_little_endian) + offset_mid)
    }
    if (u32(offset + 64, is_little_endian)) {
        get_5t3_64(u32(offset + 64, is_little_endian) + offset_mid)
    }

    return html
}

function get_5t3_52(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`F ${f32(offset + 0, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)
    }
}
function get_5t3_56(offset) {
    if (u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`-2> F ${f32(offset + 0, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)
    }

}

function get_5t3_64(offset) {

    if (u32(offset + 4, is_little_endian) || u32(offset + 12, is_little_endian) || u32(offset + 28, is_little_endian) || u32(offset + 36, is_little_endian) || u32(offset + 40, is_little_endian) || u32(offset + 44, is_little_endian)) {
        console.log(`F ${f32(offset + 0, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | F ${f32(offset + 12, is_little_endian)} | F ${f32(offset + 16, is_little_endian)} | F ${f32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | F ${f32(offset + 28, is_little_endian)}  | F ${f32(offset + 32, is_little_endian)}  | F ${f32(offset + 36, is_little_endian)} | F ${f32(offset + 40, is_little_endian)}  | F ${f32(offset + 44, is_little_endian)}   || offset: ${offset} | mid:${offset_mid}`)
    }

}

function get_LAYER_byte_block_any_3_3_1_1_2(offset) {

    if (u32(offset + 20, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} || offset: ${offset} | mid:${offset_mid}`)
    }

    if (model_animation_2.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        model_animation_2.push(u32(offset + 0, is_little_endian) + offset_mid)
    }

    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        get_LAYER_byte_block_any_3_3_1_1_2_2(u32(offset + 8, is_little_endian) + (i * 4) + offset_mid)
    }
    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        get_LAYER_byte_block_any_3_3_1_1_2_3(u32(offset + 16, is_little_endian) + (i * 8) + offset_mid)
    }
}

function get_LAYER_byte_block_any_3_3_1_1_2_2(offset) {
    if (models_array.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        models_array.push(u32(offset + 0, is_little_endian) + offset_mid)
    }

    // console.log(`${u32(offset + 0, is_little_endian)} offset: ${offset} | mid:${offset_mid}`)

}
function get_LAYER_byte_block_any_3_3_1_1_2_3(offset) {
    if (u16(offset + 6, is_little_endian)) {
        console.log(`${u32(offset + 0, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)} ${u16(offset + 6, is_little_endian)} ] | offset: ${offset} | mid:${offset_mid}`)
    }
    if (models_array.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        models_array.push(u32(offset + 0, is_little_endian) + offset_mid)
    }
}

function get_LAYER_byte_block_any_3_3_2(offset) {

    if (u32(offset + 0, is_little_endian) || u32(offset + 4, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`-> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset: ${offset}`)
    }

    if (u32(offset + 8, is_little_endian)) {
        get_LAYER_byte_block_any_3_3_2_1(u32(offset + 8, is_little_endian) + offset_mid)
    }

}
function get_LAYER_byte_block_any_3_3_2_1(offset) {

    if (u8(offset + 5, is_little_endian) || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`->-> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}  ]| ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset: ${offset}`)
    }

}

function get_LAYER_byte_block_any_3_1animation(offset) {
    let html = ''
    if (u8(offset + 4, is_little_endian) !== 0) {// console.log(`5--> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | F ${f32(offset + 8, is_little_endian)} |  F ${f32(offset + 12, is_little_endian)} ] offset: ${offset}`)
    }
    // console.log(`5--> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | F${f32(offset + 8, is_little_endian)} |  F${f32(offset + 12, is_little_endian)} ] offset: ${offset}`)
    // html += `<br>---3?5---> ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | F${f32(offset + 8, is_little_endian)} |  F${f32(offset + 12, is_little_endian)} ]`

    return html

}

function get_LAYER_byte_block_any_3_0texture(offset) {
    // if (u8(offset + 0, is_little_endian)===3) {
    // console.log(`0-> | [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]  offset:${offset} ;   `)
    // }

    // 01 00 00 00 F0 22 7C 00 00 00 00 00 01 01 00 00

    if (u32(offset + 4, is_little_endian) && u8(offset + 0, is_little_endian)) {// console.log(` | [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]  offset:${offset} ;   `)
    }

    // let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'> Texture 1</a>`
    // html += `<br>---3?0---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]`

    if (u32(offset + 8, is_little_endian) !== 0) {
        get_LAYER_byte_block_any_3_0texture_1(u32(offset + 8, is_little_endian) + offset_mid)
    }
    // html += "</div>"
    // return html

    if (u16(offset + 2, is_little_endian) !== 0 || u8(offset + 14, is_little_endian) !== 0) {
        alert("get_LAYER_byte_block_any_3_0texture")
    }

}
function get_LAYER_byte_block_any_3_0texture_1(offset) {

    if (u32(offset + 20, is_little_endian) !== 0) {// console.log(`0-> | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} |  offset:${offset} ;   `)
    }

    // let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'> Texture 1 1</a>`

    // html += `<br>---3?0---1--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]`

    // for (let i = 0; i < u32(offset, is_little_endian); i++) {
    //     html += get_LAYER_byte_block_any_3_0texture_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 4))
    // }
    // html += "</div>"

    // return html

}
function get_LAYER_byte_block_any_3_0texture_1_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'> Texture 1 1 1</a></div>`

    // html += `<br>---3?0---1---1---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] `

    return html

}

function get_fontt0(offset, i) {

    if (u32(offset + 44, is_little_endian) !== 0) {
        if (fonts.includes(u32(offset + 44, is_little_endian) + offset_mid)) {} else {
            fonts.push(u32(offset + 44, is_little_endian) + offset_mid)
        }

    }

    if (u32(offset + 24, is_little_endian) === 3) {
        if (fonts.includes(u32(offset + 28, is_little_endian) + offset_mid)) {} else {
            fonts.push(u32(offset + 28, is_little_endian) + offset_mid)
        }
    } else if (u32(offset + 24, is_little_endian) === 4) {
        if (fonts.includes(u32(offset + 28, is_little_endian) + offset_mid)) {} else {
            fonts.push(u32(offset + 28, is_little_endian) + offset_mid)
        }
    }
}

function get_font_testingt1(offset) {
    console.log(`t1: | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F ${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | F ${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)

}
function get_font_testing(offset) {
    if (u32(offset + 4, is_little_endian)) {
        // console.log(`test: ${u32(offset + 4, is_little_endian)+offset_mid}  | ${u32(offset + 12, is_little_endian)} | offset:${offset-offset_mid} ;   `)
        get_fonts_04(u32(offset + 4, is_little_endian) + offset_mid)
    }

    if (u32(offset + 0, is_little_endian) || u32(offset + 4, is_little_endian) === 0 || u32(offset + 8, is_little_endian) || u32(offset + 12, is_little_endian)) {
        console.log(`-> | ${u32(offset + 0, is_little_endian)}  | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
    }
}

function get_LAYER_byte_block_any_3_1text(offset) {
    let html = ''
    if (u32(offset + 4, is_little_endian) !== 0 && u32(offset + 8, is_little_endian) !== 0) {// console.log(`-> | [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u16(offset + 18, is_little_endian)} ] | [ ${u16(offset + 20, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | F ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)
    }
    // _Tx(temp_array___, u8, 2, offset)
    if (u8(offset + 2, is_little_endian) === 1) {
        // console.log(`test: ${u32(offset + 12, is_little_endian)+offset_mid} offset:${offset} ;   `)
        get_font_testing(u32(offset + 12, is_little_endian) + offset_mid)
    }

    // console.log(`[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u16(offset + 18, is_little_endian)} ] | [ ${u16(offset + 20, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | F ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)

    // html += get_LAYER_byte_block_any_3_1text_to_string(u32(offset + 4, is_little_endian) + offset_mid)

    if (u32(offset + 4, is_little_endian) !== 0) {
        if (texts.includes(u32(offset + 4, is_little_endian) + offset_mid)) {} else {
            texts.push(u32(offset + 4, is_little_endian) + offset_mid)
        }
        // html += get_LAYER_byte_block_any_3_1text_to_string(u32(offset + 4, is_little_endian) + offset_mid)

    }
    if (u32(offset + 8, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3_1text_2(u32(offset + 8, is_little_endian) + offset_mid)
    }
    // html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + offset_mid)

    if (fonts.includes(u32(offset + 12, is_little_endian) + offset_mid) || u8(offset + 2, is_little_endian) === 1) {} else {
        fonts.push(u32(offset + 12, is_little_endian) + offset_mid)
    }
    if (u32(offset + 12, is_little_endian) && u8(offset + 2, is_little_endian) === 0) {
        get_fontt0(u32(offset + 12, is_little_endian) + offset_mid)
    }

    // html += "</div>"
    return html

}

function get_LAYER_byte_block_any_3_1text_3(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_font" data-offset="${offset}" class='file_hover_not_selected'>Font</a>`

    if (u32(offset + 4, is_little_endian) !== 0) {
        // html += `<br>---3?1---3---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)}`
        html += get_LAYER_byte_block_any_3_1text_3_1(u32(offset + 4, is_little_endian) + offset_mid)
    } else {

        // html += `<br>---3?1---3---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

        html += get_LAYER_byte_block_any_3_1text_3_2(u32(offset + 28, is_little_endian) + offset_mid)

        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            html += get_LAYER_byte_block_any_3_1text_3_3(u32(offset + 36, is_little_endian) + offset_mid + (i * 12))
        }
    }
    html += "</div>"

    return html

}

function get_LAYER_byte_block_any_3_1text_3_3(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>${String.fromCharCode(u8(offset, is_little_endian))} </a></div>`

    // html += `<br>---3?1---3---3---> ${String.fromCharCode(u32(offset, is_little_endian))} [${u32(offset, is_little_endian)}]| F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_3_1text_3_2(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>text unknown </a></div>`
    // html += `<br>---3?1---3---2--->  F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_3_1text_3_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>recursive text: </a>`

    // html += `<br>---3?1---3---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + offset_mid)

    html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 28, is_little_endian) + offset_mid)

    html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 32, is_little_endian) + offset_mid)

    html += '</div>'

    return html

}
temp_array___ = []

function get_LAYER_byte_block_any_3_1text_2(offset) {
    let html = ''

    if (u32(offset + 12, is_little_endian) !== 0) {
        console.log(`-> | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
    }

    if (u32(offset + 4, is_little_endian !== 0)) {
        for (i = 0; i < u32(offset, is_little_endian); i++) {
            html += get_LAYER_byte_block_any_3_1text_2_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 8))
        }
    }
    return html

}

function get_LAYER_byte_block_any_3_1text_2_1(offset) {
    if (texts.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        texts.push(u32(offset + 0, is_little_endian) + offset_mid)
    }
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>multi text </a>`

    // html += `<br>---3?1---2--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`

    html += get_LAYER_byte_block_any_3_1text_to_string(u32(offset, is_little_endian) + offset_mid)

    html += "</div>"
    return html

}

function get_LAYER_byte_block_any_3_1text_to_string(offset) {

    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset, is_little_endian) + offset_mid, 0, false)}</a></div>`
    // html += `<br>---3?1---?---?---?--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    // html += `<br>---3?1---?---?---?---> ${get_string(u32(offset, is_little_endian) + offset_mid, 0, false)}`

    return html

}

function get_LAYER_byte_block_any_4(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>4</a></div>`

    // html += `<br>---4?---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_5(offset) {

    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>5 ?</a>`

    // html += `<br>---5---> ${u32(offset, is_little_endian)} | <span class='known' title='?'>${u32(offset + 4, is_little_endian)}</span> | <span class='known' title='?'>${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_5_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32))
    }

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_5_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 32))
    }

    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_5_3(u32(offset + 20, is_little_endian) + offset_mid + (i * 32))
    }

    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_5_4(u32(offset + 28, is_little_endian) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_5_5(u32(offset + 36, is_little_endian) + offset_mid + (i * 40))
    }
    html += "</div>"

    return html
}
function get_LAYER_byte_block_any_5_5(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>5 5 ?</a></div>`

    // html += `<br>---5---5---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_5_4(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>5 4 ?</a></div>`

    // html += `<br>---5---4---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_5_3(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>5 3 ?</a></div>`

    // html += `<br>---5---3---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_5_2(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>5 2 ?</a></div>`

    // html += `<br>---5---2---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_5_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>5 1 ?</a></div>`

    // html += `<br>---5---1--->  <span class='known' title='x position'>F${f32(offset, is_little_endian)}</span> |  <span class='known' title='y position'>F${f32(offset + 4, is_little_endian)}</span> | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_6(offset, i, v) {
    let html = ``
    if (u16(offset + 1, is_little_endian) !== 0 || u8(offset + 3, is_little_endian) !== 0) {
        console.log(`${i}-> |||[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}  offset:${offset} mid: ${offset_mid} ;   `)
    }

    html += get_LAYER_byte_block_any_6_1(u32(offset + 4, is_little_endian) + offset_mid, v)

    return html
}

function get_LAYER_byte_block_any_6_1(offset, v) {
    let html = ''

    if (u32(offset + 52, is_little_endian) !== 0 || u32(offset + 56, is_little_endian) !== 0 || u32(offset + 60, is_little_endian) !== 0) {
        console.log(`-> | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | offset:${offset} ;   `)
    }
    if (u32(offset + 40, is_little_endian) !== 0) {// console.log(`-> | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | offset:${offset} ;   `)
    }

    for (let i = 0; i < u32(offset, is_little_endian); i++) {// get_LAYER_byte_block_any_6_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 20), i)
    }

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        interface_layer_72_04_12(u32(offset + 12, is_little_endian) + offset_mid + (i * 32), i, v)
    }
    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_2(u32(offset + 20, is_little_endian) + offset_mid + (i * 32), i, v)
    }

    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_3(u32(offset + 28, is_little_endian) + offset_mid + (i * 32), i)
    }
    for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {// html += get_LAYER_byte_block_any_6_1_4(u32(offset + 36, is_little_endian) + offset_mid + (i * 12),i)
    }
    for (let i = 0; i < u32(offset + 40, is_little_endian); i++) {// html += get_LAYER_byte_block_any_6_1_4(u32(offset + 44, is_little_endian) + offset_mid + (i * 12),i)
    }

    if (u32(offset + 48, is_little_endian) !== 0) {
        if (settings_3.includes(u32(offset + 48, is_little_endian) + offset_mid)) {// nothing
        } else {
            settings_3.push(u32(offset + 48, is_little_endian) + offset_mid)

        }
    }

    // if (u32(offset + 48, is_little_endian) !== 0) {
    //     html += get_LAYER_byte_block_any_6_1_4(u32(offset + 48, is_little_endian) + offset_mid, 0)
    // }

    return html

}

function interface_layer_72_04_12(offset, i, v) {
    if (u32(offset + 12, is_little_endian) || u16(offset + 18, is_little_endian) || u32(offset + 24, is_little_endian) || u32(offset + 28, is_little_endian)) {
        console.log(`${i}->> F ${f32(offset, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F ${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)
        _Tx(temp_array___, u32, 20, offset)
    }
}

function get_LAYER_byte_block_any_6_1_4(offset, i) {
    let html = ``
    // if (u32(offset + 44, is_little_endian) !== 0) {
    // console.log(`${i}->> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)
    // }
    // console.log(` ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)

    if (u32(offset + 16, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_6_1_4_1(u32(offset + 16, is_little_endian) + offset_mid)
    }
    // html += `<br>---6--->---4?---> `

    return html

}

function get_LAYER_byte_block_any_6_1_4_1(offset) {
    let html = ''
    // console.log(`-> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)}  | F${f32(offset + 12, is_little_endian)} | offset:${offset} ;   `)

    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_6_1_4_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }

    return html

}
function get_LAYER_byte_block_any_6_1_4_1_1(offset) {
    let html = ''
    // console.log(`->-> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)

    if (u32(offset + 0, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_6_1_4_1_1_1(u32(offset + 0, is_little_endian) + offset_mid)
    }

    return html

}
function get_LAYER_byte_block_any_6_1_4_1_1_1(offset) {
    let html = ''
    // console.log(`->->-> ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] |  ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)

    if (u32(offset + 8, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_6_1_4_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)
    }

    return html

}
function get_LAYER_byte_block_any_6_1_4_1_1_1_1(offset) {
    let html = ''
    // console.log(`->->->-> ${u32(offset, is_little_endian)} | ${u32(offset +4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ]  | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)

    return html

}
function get_LAYER_byte_block_any_6_1_3(offset, i) {
    let html = ``
    _Tx(temp_array___, f32, 24, offset)
    if (f32(offset + 28, is_little_endian)) {

        console.log(`${i}->->-> F ${f32(offset, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F ${f32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ;   `)
    }

    return html

}

function get_LAYER_byte_block_any_6_1_2(offset, i, v) {
    let html = ``

    if (u32(offset + 28, is_little_endian)) {
        console.log(`${v}->->${i}-> F ${f32(offset, is_little_endian)}  | F ${f32(offset + 4, is_little_endian)} | F ${f32(offset + 8, is_little_endian)} | F ${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F ${f32(offset + 20, is_little_endian)} | F ${f32(offset + 24, is_little_endian)} | F ${f32(offset + 28, is_little_endian)}  offset:${offset} ;   `)
    }

    // if (u32(offset + 12, is_little_endian) !== 0) {
    // console.log(`${v}->->-> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset +2, is_little_endian)}, ${u8(offset +3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
    // }

    // html += `

    return html

}
function get_LAYER_byte_block_any_6_1_1(offset, i) {
    let html = ''

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_1_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 16), i)
    }

    if (u32(offset + 0, is_little_endian) !== 0 || u16(offset + 6, is_little_endian) !== 0) {
        alert(`${i}->->-> | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | F ${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | offset:${offset} ;   `)
    }

}

function get_LAYER_byte_block_any_6_1_1_1(offset, i) {
    let html = ``
    if (u32(offset + 0, is_little_endian) !== 0 || u32(offset + 4, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`${i}->->-> | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
    }

    html += get_LAYER_byte_block_any_6_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

    return html

}

function get_LAYER_byte_block_any_6_1_1_1_1(offset) {
    let html = ``
    if (u8(offset + 5, is_little_endian) !== 0 || u32(offset + 8, is_little_endian) !== 0 || u32(offset + 12, is_little_endian) !== 0) {
        console.log(`${i}->->-> | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u16(offset + 6, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | offset:${offset} ;   `)
    }

    return html

}

function get_LAYER_byte_block_any_2(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>1</a>`
    // html += `<br>---2---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | <span class='known' title='amount of sections'>${u32(offset + 4, is_little_endian)}</span> |<span class='known' title='offset sections (divisible by 12)'> ${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)}`

    if (u32(offset + 8, is_little_endian) !== 0) {
        for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
            html += get_LAYER_byte_block_any_2_1(u32(offset + 8, is_little_endian) + offset_mid + (i * 12))
        }
    }
    html += "</div>"
    return html

}

function get_LAYER_byte_block_any_2_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>2</a>`
    // html += `<br>---2--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  <span class='known' title='offset into deeper section'>${u32(offset + 4, is_little_endian)}</span> | ${u32(offset + 8, is_little_endian)}`

    html += get_LAYER_byte_block_any_2_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    html += "</div>"
    return html

}

function get_LAYER_byte_block_any_2_1_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>3</a></div>`
    // html += `<br>---2--->--->---> [ <span class='known' title='probably index of varible section'>${u8(offset, is_little_endian)},</span> ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_3_6recursive(offset, v) {
    let html = ''

    // if (u32(offset + 12, is_little_endian)!==0) {
    //         _Tx(temp_array___, u8, 4, offset)
    //     console.log(`[${v}] ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} || offset:${offset} ; mid: ${offset_mid}   `)
    // }
    // _Tx(temp_array___, u32, 36, offset)
    // console.log(`fin_|T| ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F ${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | F ${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        html += get_LAYER_byte_block_6_recursive_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 12))
    }

    if (frames.includes(u32(offset + 0, is_little_endian) + offset_mid)) {} else {
        frames.push(u32(offset + 0, is_little_endian) + offset_mid)
        html += get_80byteblock(u32(offset, is_little_endian) + offset_mid)
    }

    // html += "<div style='padding-left: 50px;'><br>__________RECURSIVE________<br>" + get_80byteblock(u32(offset, is_little_endian) + offset_mid) + "<br>_____END____<br></div>"
    return html
}

function get_LAYER_byte_block_6_recursive_2(offset) {
    let html = ''
    // if (u32(offset + 8, is_little_endian)!==0) {
    //     _Tx(temp_array___, u32, 8, offset)
    // console.log(`-> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    // }

    return html

}

function get_texture_animas(offset) {
    // console.log(` ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)
    if (u32(offset + 4, is_little_endian)) {// get_texture_animas_04(u32(offset + 4, is_little_endian)+offset_mid)
    }

    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        // get_texture_animas_20(u32(offset + 20, is_little_endian) + offset_mid + (i * 12))

    }

}

function get_texture_animas_04(offset) {
    console.log(`-> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | offset:${offset} ; mid: ${offset_mid}   `)

}
function get_texture_animas_20(offset) {
    // console.log(`-> F ${f32(offset + 0, is_little_endian)} | F ${f32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F ${f32(offset + 12, is_little_endian)} offset:${offset} ; mid: ${offset_mid}   `)

}

function extract_patcher(offset, amount) {

    let temp_array = []
    for (let i = 0; i < amount; i++) {
        temp_array.push([u32(offset + (i * 8), is_little_endian), u16(offset + 4 + (i * 8), is_little_endian), u16(offset + 6 + (i * 8), is_little_endian)])
    }
    return temp_array

}

function get_patch_offset_index(array, n, is_model) {

    let patched_index = 0
    if (is_model === true) {
        patched_index = 1
    }

    let temp_array = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][patched_index] !== n) {// console.log('not', array[i])
        } else {
            temp_array.push(array[i])
            i = array.length
            return temp_array
        }
    }
    return -1
}

function get_string(begin, end, is_no_end) {

    if (is_no_end === undefined) {
        for (temp_string = ""; begin < end; begin++) {
            temp_string += String.fromCharCode(u8(begin))
        }
    } else {
        temp_string = ''
        if (u8(begin) === 0) {
            is_no_end = true
        }
        while (is_no_end === false) {
            temp_string += String.fromCharCode(u8(begin))
            begin++
            if (u8(begin) === 0) {
                is_no_end = true
            }
        }

    }

    return temp_string
}

///////////////////
///////////////////
///////////////////
///////////////////
function x_addEventListener() {
    temp_div = document.getElementById('file_viewer').children[0]

    x_addEventListener_file_viewer(temp_div)

}

function x_addEventListener_file_viewer(div) {
    //arrow
    //img
    //file name
    // console.log(div)

    div.children[0].addEventListener('click', arrow_click)

    div.children[2].addEventListener('click', file_click)

    // console.log(div.children[3])

    if (div.children[3] != null) {
        for (let i = 3; i < div.children.length; i++) {
            x_addEventListener_file_viewer(div.children[i])
        }
    }
}
function arrow_click() {
    // console.log(this.innerHTML)

    if (this.innerHTML === '→') {
        this.innerHTML = '↓'
        this.style.paddingRight = '6px'
        this.style.paddingLeft = '4px'

        // console.log(this.parentNode.children.length - 3)

        for (let i = 3; i < this.parentNode.children.length; i++) {
            this.parentNode.children[i].style.display = 'block'
        }

        if (this.nextElementSibling.nextElementSibling.nextElementSibling != null) {
            this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block'
        }

    } else {
        this.innerHTML = '→'
        this.style.paddingRight = '0px'
        this.style.paddingLeft = '0px'

        for (let i = 3; i < this.parentNode.children.length; i++) {
            this.parentNode.children[i].style.display = 'none'
        }

        if (this.nextElementSibling.nextElementSibling.nextElementSibling != null) {
            this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none'
        }

    }
}

///////////////
///////////////
///temp

function _Tx(array, f, n, offset) {
    if (array.includes(f(offset + n, is_little_endian))) {} else {
        array.push(f(offset + n, is_little_endian))
    }
}
