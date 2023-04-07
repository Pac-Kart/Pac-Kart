//crawl .x* file
// if file is static append directly to file_viewer
// if file is dynamic generate .x* file array [XFA] then append file list from dynamic__x_generator

function get_x_file_list(selected_game, file_name, is_dynamic) {

    let html = []

    // folder
    if (is_dynamic === true) {
        id_list = [];
        XFA.push({
            id: gen_id(),
            game: selected_game,
            name: file_name,
            version: u32(8, is_little_endian)
        })

    } else {

        html = `<div class='sub_file_div'><a class='file_arrow' style='padding-right:6px;padding-left:4px;'>↓</a><a> 🗀 </a> <a id='temp' data-type="x_folder" data-offset="0" class='file_hover_not_selected'>${file_name}</a>`
    }

    for (let i = 0; i < u32(12, is_little_endian); i++) {

        html += get_x_sub_files(16 + (i * 24), i + 1, is_dynamic, file_name)
    }

    return html
}

function get_x_sub_files(offset, index, is_dynamic, file_name) {

    // sub files

    let file_type_name = ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music']

    type = file_type_name[u32(offset + 4, is_little_endian)]

    let html = ''
    // console.log(type)

    if (is_dynamic === true) {
        XFA.push({
            id: gen_id(),
            version: u32(offset + 0, is_little_endian),
            type: u32(offset + 4, is_little_endian),
            type_s: type,
            index: u32(offset + 8, is_little_endian),
            bytelength: u32(offset + 16, is_little_endian),
            linked_strings: [],
            sounds: [],
            patcher_texutre: [],
            patcher_texture_animation: [],
            patcher_sounds: [],
            patcher_models: [],
            patcher_general_offsets: [],
            models: [],
            textures: [],
            texture_animations: [],
            type_data: []
        })
    }
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

        if (number_sounds == 0 && number_textures == 0 && file_name != 'mcp.xpc') {
            html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`

        } else {

            html += `<div style='display: block;' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a>`

            html += get_x_sub_file_header(u32(offset + 20, is_little_endian) + (u32(12, is_little_endian) * 24) + 16, is_dynamic, index)

            html += `</div>`

        }
        // }
    }

    return html
}

function get_x_sub_file_header(offset, is_dynamic, index) {

    if (is_dynamic === true) {
        for (let i = 0; i < 21; i += 20) {
            let string_ = get_string(offset + 80 + i, 0, false)
            XFA[index].linked_strings.push({
                string: string_,
                unknown1: u32(offset + 92 + i, is_little_endian),
                unknown2: u32(offset + 96 + i, is_little_endian)
            })

        }
        XFA[index].patcher_texutre.push({
            amount: u32(offset + 16, is_little_endian)
        })
        XFA[index].patcher_texture_animation.push({
            amount: u32(offset + 52, is_little_endian)
        })
        XFA[index].patcher_sounds.push({
            amount: u32(offset + 28, is_little_endian)
        })
        XFA[index].patcher_models.push({
            amount: u32(offset + 56, is_little_endian)
        })
        XFA[index].patcher_general_offsets.push({
            amount: u32(offset + 12, is_little_endian)
        })
    }
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
            html += get_x_sound(offset_audio + sound_offset_array[i], i, is_dynamic, index)
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
                if (is_dynamic === true) {
                    end_offset = get_texture(i_offset + texture_offset_list, XFA[index].textures, i)
                    // console.log(end_offset,i)
                }
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
    // console.log('test')

    if (game == "pac_man_world_rally") {
        let offset_collision
        if (is_dynamic === true) {
            for (let i = 0; i < amount_animations; i++) {
                html += get_texture_animations(offset_animations + (i * 12) + offset_mid, XFA[index].texture_animations, i)
            }
        }
        if (type === 'interface') {
            let temp = u32(offset_mid + 4, is_little_endian)
            temp_offset = (offset_mid + temp + 16)
            offset_logic = u32(offset_mid + temp, is_little_endian)
            // html += get_80byteblock(offset_logic + offset_mid)

            // html += get_models(temp_offset, offset_animations)

        } else if (type === 'link') {

            let temp = u32(offset_mid + 4, is_little_endian)
            offset_logic = u32(offset_mid + temp, is_little_endian)

            if (is_dynamic === true) {
                get_link_header(offset_logic + offset_mid, index, is_dynamic)
            } else {

                html += get_link_main(offset_logic + offset_mid, is_dynamic)
            }
        } else if (type === 'world') {
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
        } else if (type === 'share') {
            // console.log(end_offset, 'share')
            if (is_dynamic === true) {

                get_share(end_offset, XFA[index].type_data)

                let end_model_share_list_offset = u32(offset_mid, is_little_endian)
                for (let i = 0, ii = 0; i < end_model_share_list_offset && u32(offset_mid + i, is_little_endian) !== 0; i += 4,
                ii++) {
                    get_model(u32(offset_mid + i, is_little_endian) + offset_mid, XFA[index].models, ii)
                }
            }

        } else if (type === 'car') {
            let temp = u32(offset_mid + 4, is_little_endian) + offset_mid
            temp_offset = (temp + 16)
            // html += get_models(temp_offset, 0)
            html += get_car_main(u32(temp, is_little_endian) + offset_mid, offset_mid)
        }
    }
    // html += "</div>"

    // colision

    return html
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

    return html
}

function get_models(start, end, is_dynamic, index) {
    let html = ''
    let html2 = ''
    if (u16(start, is_little_endian) == 1537) {
        html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_model_folder" data-offset="${start}" class='file_hover_not_selected'>Models</a>`
        html2 = '</div>'
    }
    let end2 = false;

    while (u16(start, is_little_endian) == 1537) {
        start_modle_name = u32(start + 8, is_little_endian) + offset_mid
        offset_next = false

        if (is_dynamic === true) {}

        html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_model" data-offset="${start}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>${get_string(start_modle_name, 0, false)}</a></div>`

        // console.log(start_modle_name, 'next ')
        start_modle_name_old = start_modle_name
        temp_offset = 0

        while (offset_next === false) {
            start_modle_name++
            temp_offset++
            if (u8(start_modle_name) === 0) {
                offset_next = true
            }
        }
        while ((u8(start_modle_name)) == 0) {
            start_modle_name++
        }
        start = start_modle_name

        // console.log(start_modle_name, temp_offset, 'next ')

    }
    return html + html2
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

function get_x_sound(offset, index, is_dynamic, index_dynamic) {
    if (is_dynamic === true) {
        // console.log(u32(offset + 0, is_little_endian), u32(offset + 4, is_little_endian), 'both', u32(offset + 0, is_little_endian) + u32(offset + 4, is_little_endian))

        // console.log(offset, index, index_dynamic, 'sound_offset0')
        XFA[index_dynamic].sounds.push({
            id: gen_id(),
            unknown1: u32(offset + 8, is_little_endian),
            soundsamplerate: u32(offset + 12, is_little_endian),
            unknown2: u32(offset + 16, is_little_endian),
            unknown3: u32(offset + 20, is_little_endian),
            sound_data: []
        })

        let temp_sound_array = new ArrayBuffer(u32(offset + 4, is_little_endian))

        let temp_sound_offset = u32(offset + 0, is_little_endian) + offset_audio_start
        // console.log(offset_audio_start, u32(offset + 4, is_little_endian), 'sound_offset1')

        let i = 0
        for (; i < u32(offset + 4, is_little_endian); i++) {
            new DataView(temp_sound_array).setUint8(i, u8(i + temp_sound_offset))
        }
        // console.log(u8(i + temp_sound_offset), 'sound_offset2')

        XFA[index_dynamic].sounds[index].sound_data.push(temp_sound_array)

    } else {

        let html = `<div style='display:none;' class='sub_file_div'><a class='file_arrow'></a><a> 🕪 </a> <a data-type="x_sound" data-offset="${offset}" data-sound_start_offset='${offset_audio_start}' data-sound_data_offset='${offset_audio_temp}' class='file_hover_not_selected'>Sound ${index}</a></div>`

        // calculate from sound offset list

        return html
    }
}

function get_link_main(offset, is_dynamic) {

    if (is_dynamic === true) {// XFA[1].data.push('LINK', {})
    }
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
    // let logichtml = `[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ]`

    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>Frame</a>`

    let settings_header = u32(offset + 4, is_little_endian) + offset_mid
    let value_8 = u32(offset + 8, is_little_endian)
    let value_12 = u32(offset + 12, is_little_endian) + offset_mid

    html += get_settings_header(settings_header)

    value_12html = ''

    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 2</a></div>`

    // for (i = 0,
    // value_12html = ''; i < value_8; i++) {
    //     value_12html += get_settings_header_2(value_12 + (i * 28))
    // }

    let value_16 = u32(offset + 16, is_little_endian)
    let value_20 = u32(offset + 20, is_little_endian)
    let value_24 = u32(offset + 24, is_little_endian)
    let value_28 = u32(offset + 28, is_little_endian)
    // offset sometimes
    value_28html = ''
    if ((value_28) !== 0) {

        // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 3</a></div>`

        for (i = 0; i < 1; i++) {
            value_28html += get_settings_header_3(value_28 + offset_mid)
        }
        value_28 += value_28html
    } else {}

    let value_32 = u32(offset + 32, is_little_endian)

    let value_36 = u32(offset + 36, is_little_endian)
    let value_40 = u32(offset + 40, is_little_endian)

    if (value_40 !== 0) {
        // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 4</a></div>`

        value_40 += get_settings_header_4(value_40 + offset_mid)
    }
    let value_44 = u32(offset + 44, is_little_endian)
    let value_48 = u32(offset + 48, is_little_endian)

    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 5</a></div>`

    // value_48 += get_settings_header_5(value_48 + offset_mid)

    let value_52 = u32(offset + 52, is_little_endian)
    let value_56 = u32(offset + 56, is_little_endian)
    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_80blockbyte" data-offset="${offset}" class='file_hover_not_selected'>settings 6</a></div>`

    // value_56 += get_settings_header_6(value_56 + offset_mid)
    let value_60 = f32(offset + 60, is_little_endian)
    let value_64 = u32(offset + 64, is_little_endian)
    let value_68 = u32(offset + 68, is_little_endian)
    let value_72 = u32(offset + 72, is_little_endian)
    let value_76 = u32(offset + 76, is_little_endian)

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

function get_settings_header_2(offset) {
    let html = `<br>--->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)}`
    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_settings_header_2_inner(u32(offset + 4, is_little_endian) + offset_mid)
    }
    let offset_2amount = u32(offset + 12, is_little_endian)
    let offset_2offset = u32(offset + 16, is_little_endian) + offset_mid

    for (let i = 0; i < offset_2amount; i++) {
        html += get_settings_header_2_inner_2(offset_2offset + (i * 28))
    }

    let offset_3amount = u32(offset + 20, is_little_endian)
    let offset_3offset = u32(offset + 24, is_little_endian) + offset_mid
    for (let i = 0; i < offset_3amount; i++) {
        html += get_settings_header_2_inner_3(offset_3offset + (i * 36))
    }

    return html

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

function get_settings_header_3(offset) {
    let html = ""
    html += `<br>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html += get_settings_header_3_1(u32(offset + 16, is_little_endian) + offset_mid)
    return html
}

function get_settings_header_3_1(offset) {
    let html = ""
    html += `<br>--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_settings_header_3_1_1(u32(offset + 4, is_little_endian) + offset_mid)

    return html
}
function get_settings_header_3_1_1(offset) {
    let html = ""
    html += `<br>--->--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_settings_header_3_1_1_1(u32(offset, is_little_endian) + offset_mid)

    return html
}
function get_settings_header_3_1_1_1(offset) {
    let html = ""
    html += `<br>--->--->--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    html += get_settings_header_3_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

    return html
}
function get_settings_header_3_1_1_1_1(offset) {
    let html = ""
    html += `<br>--->--->--->--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html
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
    html += `<br>---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html
}
function get_settings_header_6(offset) {
    let html = ""
    html += `<br>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html
}

function get_LAYER_byte_block(offset) {
    let html = ''

    layer_type = u8(offset + 19)
    html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset, is_little_endian) + offset_mid, u32(offset + 8, is_little_endian) + offset_mid)}</a>`

    // html += `<br>---><span class='known' title='offset to layer name'> ${u32(offset, is_little_endian)}</span> | ${u32(offset + 4, is_little_endian)} | <span class='known' title='offset 2'>${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} |<span class='known' title='offset 4'> ${u32(offset + 44, is_little_endian)}</span> | ${u32(offset + 48, is_little_endian)} | <span class='known' title='offset 5'>${u32(offset + 52, is_little_endian)}</span> | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | <span class='known' title='amount in offset 6'>${u32(offset + 68, is_little_endian)}</span> | <span class='known' title='offset 6'>${u32(offset + 72, is_little_endian)}</span>`

    // html += get_LAYER_byte_block_any_2(u32(offset + 8, is_little_endian) + offset_mid)

    // // html += get_LAYER_byte_block_any_2(u32(offset + 8, is_little_endian) + offset_mid)

    // if (u32(offset + 44, is_little_endian) !== 0) {
    //     html += get_LAYER_byte_block_any_4(u32(offset + 44, is_little_endian) + offset_mid)
    // }
    // if (u32(offset + 52, is_little_endian) !== 0) {
    //     html += get_LAYER_byte_block_any_5(u32(offset + 52, is_little_endian) + offset_mid)
    // }
    // for (let i = 0; i < u32(offset + 68, is_little_endian); i++) {
    //     html += get_LAYER_byte_block_any_6(u32(offset + 72, is_little_endian) + offset_mid + (i * 12))
    // }

    if (u8(offset + 19) === 0) {
        html += ` ${get_LAYER_byte_block_any_3_0texture(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    if (u8(offset + 19) === 1) {
        html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'></a><a> T </a> <a data-type="x_layer_text" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>${get_string(u32(offset, is_little_endian) + offset_mid, u32(offset + 8, is_little_endian) + offset_mid)}</a>`
        // html += ` ${get_LAYER_byte_block_any_3_1text(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    // if (u8(offset + 19) === 5) {
    //     html += ` ${get_LAYER_byte_block_any_3_1animation(u32(offset + 24, is_little_endian) + offset_mid)} `
    // }
    if (u8(offset + 19) === 6) {
        html += ` ${get_LAYER_byte_block_any_3_6recursive(u32(offset + 24, is_little_endian) + offset_mid)} `
    }
    // if (u8(offset + 19) === 10) {
    //     html += ` ${get_LAYER_byte_block_any_3_10unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    // }
    // if (u8(offset + 19) === 12) {
    //     html += ` ${get_LAYER_byte_block_any_3_12unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    // }
    // if (u8(offset + 19) === 13) {
    //     html += ` ${get_LAYER_byte_block_any_3_13unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    // }
    // if (u8(offset + 19) === 14) {
    //     html += ` ${get_LAYER_byte_block_any_3_14unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    // }
    // if (u8(offset + 19) === 15) {
    //     html += ` ${get_LAYER_byte_block_any_3_15unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
    // }

    html += '</div>'
    return html

}

function get_LAYER_byte_block_any_3_15unknown(offset) {
    let html = ''
    html += `<br>---3?15--->   ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    html += get_LAYER_byte_block_any_3_15unknown_1(u32(offset, is_little_endian) + offset_mid)
    return html

}

function get_LAYER_byte_block_any_3_15unknown_1(offset) {
    let html = ''

    html += `<br>---3?15--->--->   F${f32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    html += get_LAYER_byte_block_any_3_15unknown_1_1(u32(offset + 16, is_little_endian) + offset_mid)
    return html

}
function get_LAYER_byte_block_any_3_15unknown_1_1(offset) {
    let html = ''

    html += `<br>---3?15--->--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

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

    html += `<br>---3?15--->--->---2---> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_3_15unknown_1_1_1(offset) {
    let html = ''

    html += `<br>---3?15--->--->---1---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_3_14unknown(offset) {
    let html = ''
    html += `<br>---3?14--->  ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  ${u32(offset + 104, is_little_endian)} |  ${u32(offset + 108, is_little_endian)} |  ${u32(offset + 112, is_little_endian)} |  ${u32(offset + 116, is_little_endian)} |  ${u32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  |  ${u32(offset + 136, is_little_endian)}  |  ${u32(offset + 140, is_little_endian)}  |  ${u32(offset + 144, is_little_endian)}  |  ${u32(offset + 148, is_little_endian)}  |  ${u32(offset + 152, is_little_endian)}  |  ${u32(offset + 156, is_little_endian)}  |  ${u32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)}  |  ${u32(offset + 176, is_little_endian)}  |  ${u32(offset + 180, is_little_endian)}  |  ${u32(offset + 184, is_little_endian)}  |  ${u32(offset + 188, is_little_endian)}  |  ${u32(offset + 192, is_little_endian)}  |  ${u32(offset + 196, is_little_endian)}  |  ${u32(offset + 200, is_little_endian)}  |  ${u32(offset + 204, is_little_endian)}  |  ${u32(offset + 208, is_little_endian)}  |  ${u32(offset + 212, is_little_endian)}  |  ${u32(offset + 216, is_little_endian)}  |  ${u32(offset + 220, is_little_endian)}  |  ${u32(offset + 224, is_little_endian)}  |  ${u32(offset + 228, is_little_endian)}  |  ${u32(offset + 232, is_little_endian)}  |  ${u32(offset + 236, is_little_endian)}  |  ${u32(offset + 240, is_little_endian)}  |  ${u32(offset + 244, is_little_endian)}  |  ${u32(offset + 248, is_little_endian)}  |  ${u32(offset + 252, is_little_endian)}  |  ${u32(offset + 256, is_little_endian)}  |  ${u32(offset + 260, is_little_endian)}  |  ${u32(offset + 264, is_little_endian)}  |  ${u32(offset + 268, is_little_endian)}  | [ ${u8(offset + 272, is_little_endian)}, ${u8(offset + 273, is_little_endian)}, ${u8(offset + 274, is_little_endian)}, ${u8(offset + 275, is_little_endian)} ]  |  ${u32(offset + 276, is_little_endian)}  |  ${u32(offset + 280, is_little_endian)}  |  ${u32(offset + 284, is_little_endian)}`

    if (u32(offset + 276, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3_14unknown_1(u32(offset + 276, is_little_endian) + offset_mid)
    }
    return html

}
function get_LAYER_byte_block_any_3_14unknown_1(offset) {
    let html = ''

    html += `<br>---3?14--->--->  [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_3_13unknown(offset) {
    let html = ''
    html += `<br>---3?13---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    html += get_LAYER_byte_block_any_3_13unknown_1(u32(offset + 4, is_little_endian) + offset_mid)

    html += get_LAYER_byte_block_any_3_13unknown_2(u32(offset + 4, is_little_endian) + offset_mid)

    return html

}
function get_LAYER_byte_block_any_3_13unknown_2(offset) {
    let html = ''
    html += `<br>---3?13---2---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    return html

}

function get_LAYER_byte_block_any_3_13unknown_1(offset) {
    let html = ''
    html += `<br>---3?13---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    return html

}

function get_LAYER_byte_block_any_3_12unknown(offset) {
    let html = ''
    html += `<br>---3?12---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    return html

}
function get_LAYER_byte_block_any_3_10unknown(offset) {
    let html = ''
    html += `<br>---3?10---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

    return html

}
function get_LAYER_byte_block_any_3_1animation(offset) {
    let html = ''
    html += `<br>---3?5---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | F${f32(offset + 8, is_little_endian)} |  F${f32(offset + 12, is_little_endian)} ]`

    return html

}

function get_LAYER_byte_block_any_3_0texture(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'> Texture 1</a>`
    // html += `<br>---3?0---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]`

    if (u32(offset + 8, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3_0texture_1(u32(offset + 8, is_little_endian) + offset_mid)
    }
    html += "</div>"
    return html

}
function get_LAYER_byte_block_any_3_0texture_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'> Texture 1 1</a>`

    // html += `<br>---3?0---1--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_3_0texture_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 4))
    }
    html += "</div>"

    return html

}
function get_LAYER_byte_block_any_3_0texture_1_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'> Texture 1 1 1</a></div>`

    // html += `<br>---3?0---1---1---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] `

    return html

}

function get_LAYER_byte_block_any_3_1text(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>text </a>`

    // html += `<br>---3?1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u16(offset + 18, is_little_endian)} ] | [ ${u8(offset + 20, is_little_endian)}, ${u8(offset + 21, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3_1text_to_string(u32(offset + 4, is_little_endian) + offset_mid)
    }
    if (u32(offset + 8, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3_1text_2(u32(offset + 8, is_little_endian) + offset_mid)
    }
    html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + offset_mid)

    html += "</div>"
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

function get_LAYER_byte_block_any_3_1text_2(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>text </a>`

    // html += `<br>---3?1---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`

    if (u32(offset + 4, is_little_endian !== 0)) {
        for (i = 0; i < u32(offset, is_little_endian); i++) {
            html += get_LAYER_byte_block_any_3_1text_2_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 8))
        }
    }
    html += "</div>"
    return html

}

function get_LAYER_byte_block_any_3_1text_2_1(offset) {
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

function get_LAYER_byte_block_any_6(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 ?</a>`

    // html += `<br>---6---> ${u32(offset, is_little_endian)} | <span class='known' title='offset deeper'>${u32(offset + 4, is_little_endian)}</span> | <span class='known' title='index sometimes ?'>${u32(offset + 8, is_little_endian)}</span>`

    html += get_LAYER_byte_block_any_6_1(u32(offset + 4, is_little_endian) + offset_mid)

    html += "</div>"
    return html
}

function get_LAYER_byte_block_any_6_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 ?</a>`

    // html += `<br>---6--->---> <span class='known' title='1st offset amount'>${u32(offset, is_little_endian)}</span> | <span class='known' title='offset 1'>${u32(offset + 4, is_little_endian)}</span> | <span class='known' title='offset 2 amount ?'>${u32(offset + 8, is_little_endian)}</span> | <span class='known' title='offset 2'>${u32(offset + 12, is_little_endian)}</span> | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | <span class='known' title='amount offset 3?'>${u32(offset + 24, is_little_endian)}</span> | <span class='known' title='offset 3?'>${u32(offset + 28, is_little_endian)}</span> | <span class='known' title='amount offset 4?'>${u32(offset + 32, is_little_endian)}</span> | <span class='known' title='offset 4?'>${u32(offset + 36, is_little_endian)}</span> | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 20))
    }

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 20))
    }

    // 16 /20 always 0?
    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_3(u32(offset + 28, is_little_endian) + offset_mid + (i * 16))
    }
    for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_4(u32(offset + 36, is_little_endian) + offset_mid + (i * 12))
    }
    html += "</div>"

    return html

}

function get_LAYER_byte_block_any_6_1_4(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 4 ?</a></div>`

    // html += `<br>---6--->---4?---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_6_1_3(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 3 ?</a></div>`

    // html += `<br>---6--->---3?---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function get_LAYER_byte_block_any_6_1_2(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 2 ?</a></div>`

    // html += `<br>---6--->---2---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)}`

    return html

}
function get_LAYER_byte_block_any_6_1_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 1 ?</a>`

    // html += `<br>---6--->--->---> ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | F${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)}`

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        html += get_LAYER_byte_block_any_6_1_1_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 16))
    }

    html += "</div>"
    return html

}

function get_LAYER_byte_block_any_6_1_1_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 1 1 ?</a>`

    // html += `<br>---6--->--->--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_LAYER_byte_block_any_6_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

    html += "</div>"
    return html

}

function get_LAYER_byte_block_any_6_1_1_1_1(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_layer" data-offset="${offset}" class='file_hover_not_selected'>6 1 1 1 1 ?</a></div>`
    // html += `<br>---6--->--->--->--->---> ${u32(offset, is_little_endian)} | ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

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

function get_LAYER_byte_block_any_3_6recursive(offset) {
    let html = ''
    // html += `<br>---3---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}  `

    html += get_80byteblock(u32(offset, is_little_endian) + offset_mid)

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        html += get_LAYER_byte_block_6_recursive_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 16))
    }
    // html += "<div style='padding-left: 50px;'><br>__________RECURSIVE________<br>" + get_80byteblock(u32(offset, is_little_endian) + offset_mid) + "<br>_____END____<br></div>"
    return html
}

function get_LAYER_byte_block_6_recursive_2(offset) {
    let html = ''
    // html += `<br>---?---2---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}  `

    return html

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
