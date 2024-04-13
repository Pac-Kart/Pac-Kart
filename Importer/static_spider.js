// static file | append directly to file_viewer
// x_spider for dynamic
// most of this is just for testing

// activate later
// get_world_20_12t8_72 (find how many bytes per)
// Model Animation 1

// mysterious or unknown for unorderd ?

// 

function get_x_static(selected_game, file_name) {
    offset_mid = undefined
    HWVX_PROTO = 179
    count = 0
    id = u32(16, is_little_endian)
    datapack_offset = []

    let html = `<div class='sub_file_div'><a class='file_arrow' style='padding-right:6px;padding-left:4px;'>↓</a><a> 🗀 </a> <a id='temp' data-type="x_folder" data-offset="0" class='file_hover_not_selected'>${file_name}</a>`

    // folder
    if ((u32(8) === 183 || u32(8) === 243 || u32(8) === 249 || u32(8) === 267 || u32(8) === 274 || u32(8) === 315)) {} else {
        console.log(u32(8))
    }
    file_version = u32(8)

    for (let i = 0; i < u32(12); i++) {
        html += get_x_sub_files(16 + (i * 24), i + 1, file_name)
    }

    return html
}

function get_x_sub_files(offset, index, file_name) {
    log_array = {
        p_texture: 0,
        p_animation: 0,
        p_sound: 0,
        order: 0,
        model: 0,
        model_anim_1: 0,
        model_anim_2: 0,
        unordered: 0,
        p_model: 0,
        p_offset: 0,
    }

    models_array = []
    frames = []
    sound_controls = []
    sound_player = []
    activator = []
    varible = []
    flag = []
    idk = []
    unknown = []
    unknown_00 = []
    fonts = []
    multi_font = []
    texts = []
    model_link = []
    interface_sub_model = []
    model_animation_1 = []
    model_animation_2 = []
    sparkler = []
    um = []
    nothing = []

    temp_array__[0].offset_check = []

    if (u32(offset + 12)) {
        ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], offset);
    }

    // check if file header and file directory are the same version
    // (u32(offset + 0) === u32(8)) ? 0 : console.log(u32(offset + 0))
    if (u32(offset) === u32(8) && u32(offset + 12) === 0) {} else {
        ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], offset);
    }

    type = ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'][u32(offset + 4)]
    datapack_offset = offset;

    let html = ''

    if (type === 'geometry' || type === 'music' || game === "bigfoot_collision_course") {
        is_arrow_needed = `<a class='no_arrow'>↓</a>`

        html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`

    } else {

        if ((id == HWVX_PROTO)&&(game == "hot_wheels_velocity_x"))
            temp_offset = u32(offset + 20) + (index * 24) + 16
        else
            temp_offset = u32(offset + 20) + (u32(12) * 24) + 16
        
        number_sounds = u32(temp_offset + 8)
        number_textures = u32(temp_offset + 20)
        if (number_sounds == 0 && number_textures == 0) {
            html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`

        } else {

            html += `<div style='display: block;' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a>`

            html += get_x_datapack(temp_offset, index)

            html += `</div>`

        }
    }
    // }

    return html
}

function get_x_datapack(offset, index) {
    let html = ''
    if (u32(offset + 36) || u32(offset + 40) || u32(offset + 44) || u32(offset + 64) || u32(offset + 68) || u32(offset + 72) || u32(offset + 76) || u32(offset + 96) || u32(offset + 116) || u32(offset + 8) !== u32(offset + 32)) {
        ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], offset)
    }

    //get ordered list

    offset_datapack = offset

    if ((id == HWVX_PROTO)&&(game == "hot_wheels_velocity_x")){
        after_datapack = get_datapack_end() + offset + (u32(offset + 8) * 4)
        offset_mid = u32(offset + 4) + after_datapack + (u32(offset + 12) * 4) + ((u32(offset + 16) + u32(offset + 28) + u32(offset + 52) + u32(offset + 56)) * 8);
    }
    else{
        after_datapack = get_datapack_end() + offset + divisible(number_sounds * 4, 32)
        offset_mid = divisible(((u32(offset + 16) + u32(offset + 28) + u32(offset + 52)) * 8), 32)
        offset_mid = offset_mid + u32(offset + 4, is_little_endian) + after_datapack
        if ((fileextension == "xps")) {
            xps_i = 0;
            while ((after_datapack + u32(offset + 4, is_little_endian) + xps_i) % 2048 !== 0) {
                xps_i += 1
            }
            offset_mid = offset_mid + xps_i
        }
    }

    index_patch_list = after_datapack + u32(offset + 4)

    log_array.order = offset_mid
    log_array.p_texture = index_patch_list

    number_sounds = u32(offset + 8)
    number_textures = u32(offset + 20)

    offset_textures = u32(offset + 24)
    offset_animations = u32(offset + 60)
    amount_animations = u32(offset + 48)

    html += get_sounds(get_datapack_end() + offset)

    texture_patch = extract_patcher(index_patch_list, u32(offset_datapack + 16))
    index_patch_list = index_patch_list + (u32(offset_datapack + 16) * 8)

    log_array.p_animation = index_patch_list
    texture_animation_patch = extract_patcher(index_patch_list, u32(offset_datapack + 52))
    index_patch_list = index_patch_list + (u32(offset_datapack + 52) * 8)

    log_array.p_sound = index_patch_list
    sound_patch = extract_patcher(index_patch_list, u32(offset_datapack + 28))

    model_patch = extract_patcher(u32(offset_datapack) + offset_mid, u32(offset_datapack + 56))
    log_array.p_model = u32(offset_datapack) + offset_mid

    log_array.p_offset = log_array.p_model + (u32(offset_datapack + 56) * 8)

    html += get_textures()

    switch (type) {
    case "car":
    case "interface":
    case "item":
    case "link":
    case "audio":
    case "music":
        html+= get_basic()
        break
    case "world":
        html += get_world()
        break
    case "share":
        // wip
        break
    default:
        console.log('?', type)
        break
    }

    return html

    // // //

    // check max model values

    for (let i = 0; i < amount_animations; i++) {// get_texture_animas(u32(offset_animations + offset_mid + (i * 12)))
    }

    return html

    if (game == "pac_man_world_rally") {

        if (type === 'interface') {} else if (type === 'world') {

            // if (u32(offset_mid + 8 ) !== 0) {
            //     world_08(u32(offset_mid + 8 ) + offset_mid)
            // }
            if (u32(offset_mid + 24) !== 0) {// world_24(u32(offset_mid + 24 ) + offset_mid)
            }

            //calculate model offset -> 
            temp = u32(offset_mid + 24) + offset_mid
            temp_amount = u32(temp + 8)
            temp = u32(temp + 12) + offset_mid
            while ((temp_amount * 4) % 16 !== 0) {
                temp_amount++
            }

            temp = (temp + temp_amount * 4)

            // html += get_models(temp, offset_animations)

            if (fileextension == 'xdx') {
                offset_collision = u32(offset_mid + 152) + offset_mid
                html += get_world_options(u32(offset_mid + 152) + offset_mid)
            } else {
                html += get_world_options(u32(offset_mid + 20) + offset_mid, offset_collision)
            }
            // if (fileextension == "xdx") {
            // }
        } else if (type === 'share') {} else if (type === 'car') {

            let temp = u32(offset_mid + 4) + offset_mid
            temp_offset = (temp + 16)
            // html += get_models(temp_offset, 0)
            html += get_car_main(u32(temp) + offset_mid, offset_mid)
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

    function get_sounds(o) {
        let html = ''
        sound_offset_array = []
        let i = 0
        for (; i < number_sounds; i++) {
            sound_offset_array.push(u32(o + (i * 4)))
        }
        i = divisible(i * 4, 32)

        offset_audio = after_datapack
        offset_audio_start = offset_audio
        offset_audio_temp = (sound_offset_array.length * 32) + offset_audio
        // offset_audio_temp = (i * 32) + offset_audio

        // console.log('offset_audio', offset_audio)
        // console.log('offset_1st patch list prelim', u32(offset_datapack + 4 ))
        // console.log('offset_audio_1st patch list ?', offset_audio + u32(offset_datapack + 4 ))

        // console.log(type)
        number_sounds ? is_arrow_needed = `<a class='file_arrow'>→</a>` : is_arrow_needed = `<a class='no_arrow'>↓</a>`

        if (sound_offset_array.length != 0 && type != "geometry") {
            html += `<div style='display:none' class='sub_file_div'>${is_arrow_needed}<a> 🗀 </a> <a data-type="x_sound_folder" data-offset="${offset_datapack}" class='file_hover_not_selected'>Sounds</a>`

            for (let i = 0; i < sound_offset_array.length; i++) {
                html += get_x_sound(offset_audio + sound_offset_array[i], i)
            }
            html += `</div>`

        }
        return html

    }

    function get_xpp_tex(o) {
        // ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u32, 4, u32, 8], o)
        ö(u32(o + 4), get_xpp_header)
    }

    function get_xpp_header(o) {
        if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
        }
    }

    function get_textures() {
        let html = ''
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
                    if (fileextension === "xpp") {
                        get_xpp_tex(texture_offset_list + (i * 64))
                    }

                    for (string_i = 12,
                    btf_string = ""; string_i < 64; string_i++) {
                        btf_string += String.fromCharCode(u8(i_offset + texture_offset_list + string_i))
                    }

                    // if (u8(i_offset + texture_offset_list)===68 && u8(i_offset + texture_offset_list+1)===1) {
                    //     console.log(btf_string)
                    // }

                } else if (game == 'snoopy_vs_the_red_baron') {
                    temp_name_offset = u32(i_offset + texture_offset_list + 12) + offset_mid
                    next_temp_name_offset = u32(i_offset + texture_offset_list + 24) + offset_mid

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

                html += `<div style='display:none' class='sub_file_div'><a class='no_arrow'></a><a> </a> <a data-type="x_texture" data-offset_datapack="${offset_datapack}" data-offset="${texture_offset_list + i_offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'>${btf_string}</a></div>`

            }

            html += "</div>"

        }
        return html
    }

    function get_datapack_end() {
        let offset = 0
        if (fileextension === "xps" && (id != HWVX_PROTO)) {
            offset += 2048
        } else if (fileextension === "xpp") {
            offset += 128
        } else if (game === "snoopy_vs_the_red_baron") {
            offset += 128
        } else if (type === "geometry") {
            offset += 84
        } else {
            offset += 120
        }
        return offset
    }
}

function get_basic() {
    let html = ''
    if (game !== 'pac_man_world_rally') {
        return html
    }

    let o = offset_mid
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }

    u32(o + 4) ? get_basic_04(u32(o + 4) + offset_mid) : console.log('wtf')
    return html

    function get_basic_04(o) {
        if (u32(o + 8) || u32(o + 12)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
        }
        switch (type) {
        case "link":
            get_link(u32(o) + offset_mid)
            break;
        case "car":
            html = get_car_main(u32(o) + offset_mid)
            break;
        case "interface":
            ä(frames, u32(o + 0), get_interfaceframe)
            break;
        }
    return html

    }
}

function get_sound_controls(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        get_sound_controls_16(u32(o + 16) + offset_mid + (i * 16))
    }
    function get_sound_controls_16(o) {
        if (u8(o + 10) || u8(o + 11)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
        }

        for (let i = 0; i < u32(o); i++) {
            get_sound_controls_16_04(u32(o + 4) + offset_mid + (i * 4))
        }

    }

    function get_sound_controls_16_04(o) {
        ä(sound_player, u32(o + 0), get_sound_player)
    }
}

function get_sound_player(o) {
    if (u8(o + 7) || u32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, ], o)
    }

    if (u32(o + 8)) {
        get_sound_player_08(u32(o + 8) + offset_mid)
    }
    function get_sound_player_08(o) {
        if (u8(o + 10) || u8(o + 11)) {
            ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
        }
    }
}

function world_08(offset) {
    console.log(`F ${f32(offset)} | F ${f32(offset + 4)} | F ${f32(offset + 8)} | ${u32(offset + 12)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 16) !== 0) {
        let offset_16 = u32(offset + 16) + offset_mid
        for (let i = 0; i < u32(offset + 28); i++) {
            if (u32(offset_16 + (i * 80)) !== 0 || u32(offset_16 + (i * 80) + 4) !== 0 || u32(offset_16 + (i * 80) + 8) !== 0 || u32(offset_16 + (i * 80) + 12) !== 0 || u32(offset_16 + (i * 80) + 16) !== 0 || u32(offset_16 + (i * 80) + 20) !== 0 || u32(offset_16 + (i * 80) + 24) !== 0 || u32(offset_16 + (i * 80) + 28) !== 0 || u32(offset_16 + (i * 80) + 32) !== 0 || u32(offset_16 + (i * 80) + 36) !== 0 || u32(offset_16 + (i * 80) + 56) !== 0 || u32(offset_16 + (i * 80) + 60) !== 0 || u32(offset_16 + (i * 80) + 64) !== 0 || u32(offset_16 + (i * 80) + 68) !== 0 || u32(offset_16 + (i * 80) + 72) !== 0 || u32(offset_16 + (i * 80) + 76) !== 0) {
                console.log('y', i, offset_16 + (i * 80))
            }
        }
    }

}
function world_24(offset) {
    // console.log(`24 -> ${u32(offset )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | ${u32(offset + 12 )} | // offset:${offset} -mid:${offset_mid}`)

    for (let i = 0; i < u32(offset); i++) {// world_24_1(u32(offset + 4 ) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(offset + 8); i++) {
        world_24_2(u32(offset + 12) + offset_mid + (i * 4))
    }

    let temp = 0
    for (let i = 16; i < 111; i++) {
        temp += u8(offset + i)
    }

    if (temp !== 0) {
        alert("world_24 not 0", offset)
    }

}

function world_24_1(offset) {
    world_24_1_1(u32(offset) + offset_mid)

}

function world_24_1_1(offset) {
    console.log(`24 -> -1> ${get_string(u32(offset + 4) + offset_mid, 0, false)} | ${u32(offset)} | ${u32(offset + 4)} | [ ${u8(offset + 8)}, ${u8(offset + 9)}, ${u8(offset + 10)}, ${u8(offset + 11)} ] | ${u32(offset + 12)} | F ${f32(offset + 16)} | ${u32(offset + 20)} | ${u32(offset + 24)} | F ${f32(offset + 28)} | ${u32(offset + 32)} | ${u32(offset + 36)} | ${u32(offset + 40)} | ${u32(offset + 44)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 12) !== 0) {
        world_24_1_1_2(u32(offset + 12) + offset_mid)
    }

}

function world_24_1_1_2(offset) {
    if (f32(offset + 0) !== 0 || f32(offset + 4) !== 0 || f32(offset + 8) !== 0 || f32(offset + 12) !== 0) {
        console.log(`24 -> -1> -> [ ${u8(offset + 0)}, ${u8(offset + 1)}, ${u8(offset + 2)}, ${u8(offset + 3)} ] F ${f32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} | // offset:${offset} -mid:${offset_mid}`)
    }
}
function world_24_2(offset) {
    world_24_2_1(u32(offset) + offset_mid)

}

function world_24_2_1(offset) {

    let temp = 0
    for (let i = 13; i < 139; i++) {
        temp += u8(offset + i)
    }

    if (temp !== 0) {
        alert("world_24_2_1 not 0", offset)
    }
    if (u32(offset + 172) !== 0) {
        alert("world_24_2_1 172", offset)
    }
    // console.log(`24 -> -2> ${get_string(u32(offset + 140 ) + offset_mid, 0, false)} | ${u32(offset + 144 )} | ${u32(offset + 148 )} | ${u32(offset + 152 )} | ${u32(offset + 156 )} | ${u32(offset + 160 )} | ${u32(offset + 164 )} | ${u32(offset + 168 )} | ${u32(offset + 172 )} // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 152) !== 0) {// // console.log(`24 -> -2>  ${get_string(u32(offset + 152 ) + offset_mid, 0, false)} `)
    }
    if (u32(offset + 156) !== 0 || u32(offset + 160) !== 0) {
        alert("156 / 160 not 0")
    }

    if (u32(offset + 148)) {// world_24_2_1_2(u32(offset + 148 ) + offset_mid)
    }
    if (u32(offset + 164)) {
        world_24_2_1_4(u32(offset + 164) + offset_mid)
    }

}

function world_24_2_1_2(offset) {
    // console.log(`24 -> -2> ->| ${u32(offset + 0 )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | ${u32(offset + 12 )} // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 4) !== 0) {
        alert('world_24_2_1_2 / 4 not')
    }

}
function world_24_2_1_4(offset) {
    // console.log(`24 -> -2> -4>| ${u32(offset + 0 )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | ${u32(offset + 12 )} | ${u32(offset + 16 )} | ${u32(offset + 20 )} | ${u32(offset + 24 )} | ${u32(offset + 28 )} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 0) !== 0 || u32(offset + 4) !== 0 || u32(offset + 24) !== 0 || u32(offset + 28) !== 0) {
        alert('world_24_2_1_4 / not')
    }

    for (let i = 0; i < u32(offset + 8); i++) {
        world_24_2_1_4_1(u32(offset + 12) + offset_mid + (i * 24), i)
    }

}

function world_24_2_1_4_1(offset) {
    console.log(`${i} ---> ${get_string(u32(offset + 0) + offset_mid, 0, false)} | ${u32(offset + 4)} | ${get_string(u32(offset + 8) + offset_mid, 0, false)} | ${u32(offset + 12)} | ${u32(offset + 16)} | ${u32(offset + 20)} | // offset:${offset} -mid:${offset_mid}`)

    if (u32(offset + 12) !== 0) {
        world_24_2_1_4_1_3(u32(offset + 12) + offset_mid)
    }

    if (u32(offset + 16) !== 0 || u32(offset + 20) !== 0) {
        alert("world_24_2_1_4_1")
    }
}

function world_24_2_1_4_1_3(offset) {
    console.log(`--->---> ${u32(offset + 0)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || // offset:${offset} -mid:${offset_mid}`)
}

function get_car_main(offset) {
    if (log_array.unordered === 0) {
        log_array.unordered = offset
    } else {
        if (log_array.unordered > offset) {
            log_array.unordered = offset
        }
    }

    if (fileextension == 'xdx' || file_version === 249) {
        return ''
    }

    let html = ''
    html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a style="margin:2px;"> ⚙ </a> <a data-type="x_car_main" data-offset="${offset}" data-mid="${offset_mid}" class='file_hover_not_selected'>Car Stats</a></div>`

    // if (u32(offset + 0) === 0 || u8(offset + 4) !== 4 || u8(offset + 5) || u16(offset + 6) || u32(offset + 8) || u32(offset + 12)) {
    //     console.log(`${u32(offset + 0)} | [ ${u8(offset + 4)}, ${u8(offset + 5)}, ${u8(offset + 6)}, ${u8(offset + 7)} ] | ${u32(offset + 8)} | ${u32(offset + 12)} offset:${offset} -mid:${offset_mid}`)
    // }

    ö(u32(offset), get_car_00)

    return html
}

function get_car_00(offset) {

    if (u32(offset + 0) || u32(offset + 164) || u32(offset + 236)) {
        console.log(`${u32(offset + 0)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} | ${u32(offset + 16)} | ${u32(offset + 20)} | ${u32(offset + 24)} | ${u32(offset + 28)} | ${u32(offset + 32)} | ${u32(offset + 36)} | ${u32(offset + 40)} | ${u32(offset + 44)} | ${u32(offset + 48)} | ${u32(offset + 52)} | ${u32(offset + 56)} | ${u32(offset + 60)} | ${u32(offset + 64)} | ${u32(offset + 68)} | ${u32(offset + 72)} | ${u32(offset + 76)} | ${u32(offset + 80)} | ${u32(offset + 84)} | ${u32(offset + 88)} | ${u32(offset + 92)} | ${u32(offset + 96)} | ${u32(offset + 100)} | ${u32(offset + 104)} | ${u32(offset + 108)} | ${u32(offset + 112)} | ${u32(offset + 116)} | ${u32(offset + 120)} | ${u32(offset + 124)} | ${u32(offset + 128)} | ${u32(offset + 132)} | ${u32(offset + 136)} | ${u32(offset + 140)} | ${u32(offset + 144)} | ${u32(offset + 148)} | ${u32(offset + 152)} | ${u32(offset + 156)} | ${u32(offset + 160)} | ${u32(offset + 164)} | ${u32(offset + 168)} | ${u32(offset + 172)} | ${u32(offset + 176)} | ${u32(offset + 180)} | ${u32(offset + 184)} | ${u32(offset + 188)} | ${u32(offset + 192)} | ${u32(offset + 196)} | ${u32(offset + 200)} | ${u32(offset + 204)} | ${u32(offset + 208)} | ${u32(offset + 212)} | ${u32(offset + 216)} | ${u32(offset + 220)} | ${u32(offset + 224)} | ${u32(offset + 228)} | ${u32(offset + 232)} | ${u32(offset + 236)}`)
    }

    ä(model_animation_2, u32(offset + 176), get_model_animation_2)

    if (u32(offset + 180)) {
        get_car_00_180(u32(offset + 180) + offset_mid)
    }
    if (u32(offset + 184)) {
        get_car_00_184(u32(offset + 184) + offset_mid)
    }
    if (u32(offset + 188)) {
        get_car_00_188(u32(offset + 188) + offset_mid)
    }
    if (u32(offset + 192)) {
        get_car_00_192(u32(offset + 192) + offset_mid)
    }
    if (u32(offset + 196)) {
        get_car_00_196(u32(offset + 196) + offset_mid)
    }
    if (u32(offset + 200)) {
        get_car_00_200(u32(offset + 200) + offset_mid)
    }

    for (let i = 0; i < u32(offset + 204); i++) {
        get_car_00_208(u32(offset + 208) + offset_mid + (i * 8))
    }
    for (let i = 0; i < u32(offset + 212); i++) {
        get_car_00_216(u32(offset + 216) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(offset + 220); i++) {
        get_car_00_216(u32(offset + 224) + offset_mid + (i * 12))
    }

    for (let i = 0; i < u32(offset + 228); i++) {
        ä(unknown, u32(offset + 232) + (i * 4), get_unknown)
    }

}

function get_car_00_180(o) {

    if (u32(o + 16) !== 4 || u32(o + 24) !== 4 || u32(o + 32) !== 4 || u32(o + 40) !== 4) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }
    if (u32(o + 0)) {
        get_car_00_180_00(u32(o + 0) + offset_mid)
    }
    if (u32(o + 4)) {
        get_car_00_180_04(u32(o + 4) + offset_mid)
    }

    ä(sound_player, u32(o + 8), get_sound_player)
    ä(sound_player, u32(o + 12), get_sound_player)

    for (let i = 0; i < u32(o + 16); i++) {
        get_car_00_180_20(u32(o + 20) + offset_mid + (i * 8))
    }
    for (let i = 0; i < u32(o + 24); i++) {
        get_car_00_180_20(u32(o + 28) + offset_mid + (i * 8))
    }
    for (let i = 0; i < u32(o + 32); i++) {
        get_car_00_180_20(u32(o + 36) + offset_mid + (i * 8))
    }
    for (let i = 0; i < u32(o + 40); i++) {
        get_car_00_180_20(u32(o + 44) + offset_mid + (i * 8))
    }

}
function get_car_00_180_00(o) {

    if (u32(o + 12) !== 5 || u32(o + 24) !== 200 || u32(o + 40) || u32(o + 44)) {
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }

    if (u32(o + 8)) {
        get_car_00_180_00_08(u32(o + 8) + offset_mid)
    }

    for (let i = 0; i < u32(o + 12); i++) {
        get_car_00_180_00_16(u32(o + 16) + offset_mid + (i * 20), i)
    }

    ä(unknown_00, u32(o + 20), get_unknown_00)

    ä(unknown_00, u32(o + 28), get_unknown_00)

    ä(unknown_00, u32(o + 32), get_unknown_00)

    ä(unknown_00, u32(o + 36), get_unknown_00)

}
function get_car_00_180_00_08(offset) {

    if (u32(offset + 4) || u32(offset + 8) || u32(offset + 12)) {
        console.log(`[ ${u8(offset + 0)}, ${u8(offset + 1)}, ${u8(offset + 2)}, ${u8(offset + 3)} ] | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || offset:${offset} -mid:${offset_mid}`)
    }
}
function get_car_00_180_00_16(offset, i) {

    if (u32(offset + 8)) {
        get_car_00_180_00_16_08(u32(offset + 8) + offset_mid)
    }
    if (u32(offset + 12)) {
        get_car_00_180_00_16_12(u32(offset + 12) + offset_mid)
    }
    if (u32(offset + 16)) {
        get_car_00_180_00_16_12(u32(offset + 16) + offset_mid)
    }

}

function get_car_00_180_00_16_08(offset) {

    if (u32(offset + 0) || u32(offset + 4) !== 1000 || u32(offset + 8) || u16(offset + 14) || u32(offset + 16) || u32(offset + 20) !== 2 || u32(offset + 24) || u32(offset + 28) !== 2147483647 || u32(offset + 32) || u32(offset + 36) || u32(offset + 40) || u32(offset + 44)) {
        console.log(`${u32(offset + 0)} | ${u32(offset + 4)}  | ${u32(offset + 8)} | ${u16(offset + 12)}, ${u8(offset + 14)}, ${u8(offset + 15)} ] | ${u32(offset + 16)} | ${u32(offset + 20)} | ${u32(offset + 24)} | ${u32(offset + 28)} | ${u32(offset + 32)} | ${u32(offset + 36)} | ${u32(offset + 40)} | ${u32(offset + 44)} || offset:${offset} -mid:${offset_mid}`)
    }
}
function get_car_00_180_00_16_12(offset) {

    if (u32(offset + 8) || u32(offset + 12)) {
        console.log(`${u32(offset + 0)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || offset:${offset} -mid:${offset_mid}`)
    }

    for (let i = 0; i < u32(offset + 0); i++) {
        get_mys_a(u32(offset + 4) + offset_mid + (i * 64))
    }

}

function get_car_00_180_04(o) {
    if (f32(o + 0) !== -250 || f32(o + 4) !== 15 || f32(o + 8) !== 6000 || f32(o + 12) !== 1120 || f32(o + 16) || f32(o + 20) !== -1.7999999523162842 || f32(o + 24) || f32(o + 28) || f32(o + 32) !== 16 || f32(o + 36) !== 500 || f32(o + 40) !== 1000 || f32(o + 44) !== 25 || f32(o + 48) !== 50 || f32(o + 52) !== 75 || u32(o + 60) !== 800 || f32(o + 72) !== 8 || f32(o + 76) !== 50) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
    }

    if (u32(o + 56)) {
        get_car_00_180_04_56(u32(o + 56) + offset_mid)
    }
    if (u32(o + 64)) {
        get_car_00_180_04_56(u32(o + 64) + offset_mid)
    }

    ä(unknown_00, u32(o + 68), get_unknown_00)

    if (u32(o + 80)) {
        get_car_00_180_04_80(u32(o + 80) + offset_mid)
    }
    if (u32(o + 84)) {
        get_car_00_180_04_84(u32(o + 84) + offset_mid)
    }
    if (u32(o + 88)) {
        get_car_00_180_04_88(u32(o + 88) + offset_mid)
    }
    if (u32(o + 92)) {
        get_car_00_180_04_92(u32(o + 92) + offset_mid)
    }
}

function get_car_00_180_04_56(o) {
    if (u32(o + 0) || u32(o + 4) !== 1000 || u32(o + 8) || u16(o + 14) || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }
}

function get_car_00_180_04_80(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || f32(o + 8) !== -50 || u32(o + 12) || u32(o + 20) || f32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, ], o)
    }

    ä(unknown_00, u32(o + 16), get_unknown_00)
}

function get_car_00_180_04_84(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_car_00_180_04_88(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_car_00_180_04_92(o) {
    if (f32(o + 0) !== 0.25 || f32(o + 4) !== 1.600000023841858 || f32(o + 8) !== 0.6000000238418579 || f32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
    }

}

function get_car_00_180_20(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    }

    if (u32(o + 4)) {
        if (u8(o) === 1) {
            get_car_00_180_20_04t1(u32(o + 4) + offset_mid)
        } else if (u8(o) === 3) {
            get_car_00_180_20_04t3(u32(o + 4) + offset_mid)

        }
    }

}

function get_car_00_180_20_04t1(o) {
    if (f32(o + 0) !== 106.72000122070312 || f32(o + 12) !== 10.149999618530273 || f32(o + 16) !== 6 || f32(o + 24) !== 0.10000000149011612 || f32(o + 28) !== 1 || u8(o + 32) !== 1 || u8(o + 33) || u8(o + 34) || u8(o + 35) || f32(o + 40) || f32(o + 44) || f32(o + 48) || f32(o + 52) || f32(o + 56) || f32(o + 60)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u8, 32, u8, 33, u8, 34, u8, 35, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, ], o)
    }
}

function get_car_00_180_20_04t3(o) {
    if (f32(o + 16) || f32(o + 20) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
    }
}
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//3

function get_car_00_184(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
    if (u32(o + 4)) {
        get_car_00_184_04(u32(o + 4) + offset_mid)
    }
}

function get_car_00_184_04(o) {
    if (f32(o + 16) !== 60 || f32(o + 24) !== 60 || f32(o + 28) !== -30 || f32(o + 32) !== -1000 || f32(o + 36) !== 70 || f32(o + 40) !== 40 || f32(o + 44) !== 2000 || f32(o + 48) !== 1.2000000476837158 || u32(o + 52) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }

    if (u32(o + 0)) {
        get_car_00_184_04_00(u32(o + 0) + offset_mid)
    }
    if (u32(o + 4)) {
        get_car_00_184_04_04(u32(o + 4) + offset_mid)
    }
    if (u32(o + 8)) {
        get_car_00_184_04_08(u32(o + 8) + offset_mid)
    }

}

function get_car_00_184_04_00(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || f32(o + 12) || f32(o + 20) || f32(o + 24) || f32(o + 28) || u16(o + 32) || u8(o + 34) !== 112 || u8(o + 35) !== 65 || f32(o + 36) || f32(o + 40) !== 50 || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76)) {
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u16, 32, u8, 34, u8, 35, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

    if (u32(o + 16)) {
        get_car_00_184_04_00_16(u32(o + 16) + offset_mid)
    }
    ö(u32(o + 44), get_gate)
}

function get_car_00_184_04_00_16(o) {
    if (f32(o + 4) !== 1.7000000476837158 || f32(o + 12) || f32(o + 20) !== 1.899999976158142 || f32(o + 28) || f32(o + 36) || f32(o + 40) || f32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
    }
}

function get_car_00_184_04_04(o) {
    if (f32(o + 0) !== 0.8999999761581421 || f32(o + 4) !== 2.3499999046325684 || f32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, ], o)
    }
}

function get_car_00_184_04_08(o) {
    if (f32(o + 4) !== 1 || f32(o + 12) || f32(o + 20) !== 1 || f32(o + 28) || f32(o + 36) !== 1 || f32(o + 44) || f32(o + 52) !== 1 || f32(o + 60) || f32(o + 64) !== 1.5 || f32(o + 68) !== 1.2000000476837158 || f32(o + 72) !== 1 || f32(o + 76) !== 2.5 || f32(o + 80) !== 2000 || f32(o + 84) !== 60 || f32(o + 88) || f32(o + 92)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92, ], o)
    }
}

//3
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//4

function get_car_00_188(o) {
    if (u8(o + 20) !== 25 || u8(o + 21) || u16(o + 22) || u32(o + 44) || u32(o + 96) || u32(o + 100) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124)) {
        ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u16, 22, u32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, u32, 96, u32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, ], o)
    }

    ä(model_animation_2, u32(o + 0), get_model_animation_2)

    ä(model_link, u32(o + 4), get_model_link)

    ä(model_animation_1, u32(o + 8), get_model_animation_1)
    ä(model_animation_1, u32(o + 12), get_model_animation_1)
    ä(model_animation_1, u32(o + 16), get_model_animation_1)
    ä(model_animation_1, u32(o + 24), get_model_animation_1)

    for (let i = 0; i < u32(o + 48); i++) {
        get_car_00_188_52(u32(o + 52) + offset_mid + (i * 8))
    }

    for (let i = 0; i < u32(o + 56); i++) {
        get_car_00_188_60(u32(o + 60) + offset_mid + (i * 20))
    }
    for (let i = 0; i < u32(o + 64); i++) {
        get_car_00_188_68(u32(o + 68) + offset_mid + (i * 32))
    }
    for (let i = 0; i < u32(o + 72); i++) {
        get_car_00_188_68(u32(o + 76) + offset_mid + (i * 32))
    }
    for (let i = 0; i < u32(o + 80); i++) {
        get_car_00_188_68(u32(o + 84) + offset_mid + (i * 32))
    }

}

function get_car_00_188_52(o) {
    // ü(1, [u32, 0, u32, 4, ], o)

    ö(u32(o + 4), get_car_00_188_52_04)
}
function get_car_00_188_52_04(o) {
    if (u8(o + 9) || u16(o + 10) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u16, 10, u32, 12, ], o)
    }

    for (let i = 0; i < u32(o); i++) {
        get_car_00_188_52_04_04(u32(o + 4) + offset_mid + (i * 4))
    }
}

function get_car_00_188_52_04_04(o) {
    // ü(0, [u32, 0], o)
    ä(model_link, u32(o + 0), get_model_link)
}

function get_car_00_188_60(o) {
    if (u8(o + 17) || u8(o + 18) || u8(o + 19)) {
        ü(1, [u16, 0, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, ], o)
    }
}

function get_car_00_188_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

//4
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//5

function get_car_00_192(o) {
    if (u8(o + 28) !== 1 || u8(o + 29) || u8(o + 30) || u8(o + 31) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }

    if (u32(o + 16)) {
        get_car_00_192_16(u32(o + 16) + offset_mid)
    }
    if (u32(o + 24)) {
        get_car_00_192_24(u32(o + 24) + offset_mid)
    }
    // if (u32(o + 32)) {
    //     get_car_00_192_32(u32(o + 32) + offset_mid)
    // }
    ö(u32(o + 32), get_wtf)
}

function get_car_00_192_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 500 || u32(o + 8) || u16(o + 12) !== 200 || u16(o + 14) || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 28) !== 12 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(0, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }
}

function get_car_00_192_24(o) {//shifts
// ü(1, [f32, 0, f32, 4, f32, 8], o)
}
// function get_car_00_192_32(o) {
//     // ü(0, [f32, 0, u32, 4, u32, 8, u32, 12], o)

//     if (u32(o + 4)) {
//         get_car_00_192_32_04(u32(o + 4) + offset_mid)
//     }
//     if (u32(o + 8)) {
//         get_car_00_192_32_08(u32(o + 8) + offset_mid)
//     }

//     ä(unknown, u32(o + 12), get_unknown)
// }

// function get_car_00_192_32_04(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
//     }
// }

// function get_car_00_192_32_08(o) {
//     if (u32(o + 4) !== 3 || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
//     if (u32(o)) {
//         get_car_00_192_32_08_00(u32(o) + offset_mid)
//     }
//     if (u32(o + 8)) {
//         get_car_00_192_32_08_08(u32(o + 8) + offset_mid)
//     }
// }

// function get_car_00_192_32_08_00(o) {
//     if (u32(o + 0) !== 2 || u32(o + 8) || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
//     if (u32(o + 4)) {
//         get_car_00_192_32_08_00_04(u32(o + 4) + offset_mid)
//     }

// }

// function get_car_00_192_32_08_00_04(o) {
//     if (u32(o + 0) || u32(o + 4) !== 312101502 || u32(o + 8) || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
// }

// function get_car_00_192_32_08_08(o) {
//     if (u32(o + 4) !== 1 || u32(o + 16) !== 1 || u32(o + 28) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
//     }
//     if (u32(o + 0)) {
//         get_car_00_192_32_08_08_00(u32(o + 0) + offset_mid)
//     }
//     if (u32(o + 8)) {
//         get_car_00_192_32_08_08_08(u32(o + 8) + offset_mid)
//     }
//     if (u32(o + 12)) {
//         get_car_00_192_32_08_08_12(u32(o + 12) + offset_mid)
//     }
//     if (u32(o + 20)) {
//         get_car_00_192_32_08_08_20(u32(o + 20) + offset_mid)
//     }
//     if (u32(o + 24)) {
//         get_car_00_192_32_08_08_24(u32(o + 24) + offset_mid)
//     }
//     if (u32(o + 32)) {
//         get_car_00_192_32_08_08_32(u32(o + 32) + offset_mid)
//     }
// }

// function get_car_00_192_32_08_08_00(o) {
//     // ü(0, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     if (u32(o + 4)) {
//         get_car_00_192_32_08_08_00_04(u32(o + 4) + offset_mid)
//     }
//     if (u32(o + 12)) {
//         get_car_00_192_32_08_08_00_12(u32(o + 12) + offset_mid)
//     }
// }

// function get_car_00_192_32_08_08_00_04(o) {
//     if (u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
// }

// function get_car_00_192_32_08_08_00_12(o) {
//     if (u32(o + 0) !== 410131222 || u32(o + 4) !== 312111030 || u32(o + 8) || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
// }

// function get_car_00_192_32_08_08_08(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
//     }
//     if (u32(o + 8)) {
//         get_car_00_192_32_08_08_08_08(u32(o + 8) + offset_mid)
//     }
//     if (u32(o + 20)) {
//         get_car_00_192_32_08_08_08_20(u32(o + 20) + offset_mid)
//     }
// }

// function get_car_00_192_32_08_08_08_08(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== -1.7999999523162842 || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
//     }
// }

// function get_car_00_192_32_08_08_08_20(o) {
//     if (f32(o + 4) !== 1.7000000476837158 || f32(o + 12) || f32(o + 20) !== 1.899999976158142 || f32(o + 28) || f32(o + 36) || f32(o + 40) || f32(o + 44)) {
//         ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
//     }
// }

// function get_car_00_192_32_08_08_12(o) {
//     if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
//     if (u32(o + 4)) {
//         get_car_00_192_32_08_08_12_04(u32(o + 4) + offset_mid)
//     }

// }

// function get_car_00_192_32_08_08_12_04(o) {
//     if (u32(o + 0) !== 410131222 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

//     }
// }

// function get_car_00_192_32_08_08_20(o) {
//     if (u8(o + 0) !== 1 || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 20 || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
//     }
//     if (u32(o + 8)) {
//         get_car_00_192_32_08_08_20_08(u32(o + 8) + offset_mid)
//     }

// }

// function get_car_00_192_32_08_08_20_08(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
//     }
// }

// function get_car_00_192_32_08_08_24(o) {
//     if (u32(o + 0) !== 1) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
//     if (u32(o + 4)) {
//         get_car_00_192_32_08_08_24_04(u32(o + 4) + offset_mid)
//     }
//     if (u32(o + 12)) {
//         get_car_00_192_32_08_08_24_12(u32(o + 12) + offset_mid)
//     }
// }

// function get_car_00_192_32_08_08_24_04(o) {
//     if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     }
// }

// function get_car_00_192_32_08_08_24_12(o) {
//     if (u32(o + 0) !== 1 || u32(o + 4) !== 312101502 || u32(o + 8) !== 312171036 || u32(o + 12)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

//     }
// }

// function get_car_00_192_32_08_08_32(o) {
//     if (u8(o + 0) || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
//     }
//     if (u32(o + 8)) {
//         get_car_00_192_32_08_08_32_08(u32(o + 8) + offset_mid)
//     }

// }

// function get_car_00_192_32_08_08_32_08(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) || u32(o + 24) || u32(o + 28)) {
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
//     }
// }

//5
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//6

function get_car_00_196(o) {
    if (f32(o + 24) || f32(o + 28)) {
        ü(0, [u32, 0, f32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }

    ä(sound_player, u32(o + 0), get_sound_player)
    ä(sound_player, u32(o + 8), get_sound_player)

}

//6
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//7

function get_car_00_200(o) {
    if (u32(o + 24) || u32(o + 28)) {

        ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ä(frames, u32(o + 0), get_interfaceframe)
    ä(frames, u32(o + 4), get_interfaceframe)
    ä(frames, u32(o + 8), get_interfaceframe)
    ä(frames, u32(o + 12), get_interfaceframe)
    ä(frames, u32(o + 16), get_interfaceframe)
    ä(frames, u32(o + 20), get_interfaceframe)

}

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

function get_car_00_208(o) {
    // ü(0, [u32, 0, u32, 4], o)

    for (let i = 0; i < u32(o); i++) {
        get_car_00_208_04(u32(o + 4) + offset_mid + (i * 32))

    }

}

function get_car_00_208_04(o) {
    if (f32(o + 0) || f32(o + 4) || f32(o + 8) || f32(o + 12) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

function get_car_00_216(o) {
    if (u32(o + 8)) {
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_mys_a(u32(o + 4) + offset_mid + (i * 64))
    }
}

/////////////////
//////////////////
/////obj

function get_mys_a(o) {
    if (u8(o + 1) || u32(o + 12) || f32(o + 28) || f32(o + 52) || f32(o + 56) || f32(o + 60)) {

        ü(0, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
    }

    if (u32(o + 4)) {
        if (u8(o) === 1) {
            ä(unknown_00, u32(o + 4), get_unknown_00)
        } else if (u8(o) === 2) {
            ö(u32(o + 4), get_strange)
        } else if (u8(o) === 3) {
            ä(sound_controls, u32(o + 4), get_sound_controls)
            // sound section probably ?
        } else if (u8(o) === 5) {
            ö(u32(o + 4), get_mys_a_04t5)
        } else if (u8(o) === 6) {
            ö(u32(o + 4), get_mys_a_04t5)
        } else if (u8(o) === 7) {
            ö(u32(o + 4), get_mys_a_04t7)
        } else if (u8(o) === 8) {
            ä(model_link, u32(o + 4), get_model_link)
            ö(u32(o + 8), get_mys_a_08t8)
        } else if (u8(o) === 9) {
            ö(u32(o + 4), get_mys_a_04t9)
        } else if (u8(o) === 10) {
            ö(u32(o + 4), get_mys_a_04t10)
        } else if (u8(o) === 11) {
            ä(activator, u32(o + 4), get_activator)
        } else if (u8(o) === 13) {
            ö(u32(o + 4), get_object)
            ö(u32(o + 8), get_mys_a_08t13)
        } else if (u8(o) === 16) {
            ö(u32(o + 4), get_mys_a_04t16)
        } else if (u8(o) === 99) {
            ü(0, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
        } else {
            console.log("?", u8(o))
            ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
        }
    }

}

function get_mys_a_04t9(o) {
    if (u8(o + 0) || u8(o + 1) || u32(o + 4)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 8)) {
        get_mys_a_04t9_08(u32(o + 8) + offset_mid)
    }
    if (u32(o + 12)) {
        get_mys_a_04t9_12(u32(o + 12) + offset_mid)
    }

}

function get_mys_a_04t9_08(o) {
    if (u8(o + 4) !== 5 || f32(o + 16) !== 32 || f32(o + 20) || f32(o + 24) || f32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
    if (u32(o + 8)) {
        get_mys_a_04t9_08_08(u32(o + 8) + offset_mid)
    }
}

function get_mys_a_04t9_08_08(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_04t9_12(o) {
    if (u32(o + 0) !== 2 || u8(o + 8) || u8(o + 9) || u8(o + 10) !== 2 || u8(o + 11) || f32(o + 16) || f32(o + 20) || f32(o + 24) || f32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_mys_a_04t9_12_04(u32(o + 4) + offset_mid + (i * 56))
    }
    if (u32(o + 12)) {
        get_mys_a_04t9_12_12(u32(o + 12) + offset_mid)
    }
}

function get_mys_a_04t9_12_04(o) {
    if (u8(o + 4) !== 5 || f32(o + 16) !== 32 || u8(o + 37) || u8(o + 38) || u8(o + 39) !== 1 || u32(o + 40) || u32(o + 48) || u32(o + 52)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52], o)
    }
    if (u32(o + 8)) {
        get_mys_a_04t9_12_04_08(u32(o + 8) + offset_mid)
    }
    if (u32(o + 44)) {
        get_mys_a_04t9_12_04_44(u32(o + 44) + offset_mid)
    }

}

function get_mys_a_04t9_12_04_08(o) {
    if (u8(o + 0) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_04t9_12_04_44(o) {
    if (u8(o + 4) !== 5 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 16) !== 24 || u32(o + 20) !== 6 || u32(o + 24) || u32(o + 28) !== 24) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    if (u32(o + 8)) {
        get_mys_a_04t9_12_04_44_08(u32(o + 8) + offset_mid)
    }
    if (u32(o + 12)) {
        get_mys_a_04t9_12_04_44_12(u32(o + 12) + offset_mid)
    }
}

function get_mys_a_04t9_12_04_44_08(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_mys_a_04t9_12_04_44_12(o) {
    if (u8(o + 0) || u8(o + 1) !== 255 || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_04t9_12_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 4)) {
        get_mys_a_04t9_12_04(u32(o + 4) + offset_mid)
    }
}

function get_mys_a_04t10(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_mys_a)
    }

}

function get_mys_a_04t16(o) {
    if (u32(o + 4) || u32(o + 16) || u32(o + 28) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
    }
    ö(u32(o + 8), get_mys_a_04t16_08)
    ö(u32(o + 12), get_mys_a_04t16_12)
    ö(u32(o + 36), get_mys_a_04t16_36)
}

function get_mys_a_04t16_08(o) {
    if (u8(o + 2) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_04t16_12(o) {
    if (u8(o + 2) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_mys_a_04t16_36(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_mys_a_04t16_36_04)
}

function get_mys_a_04t16_36_04(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u8(o + 29) !== 1 || u8(o + 30) || u8(o + 31) || u32(o + 32) || u32(o + 36) || u32(o + 40)) {
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }
    ö(u32(o + 4), get_mys_a_04t16_36_04_04)
}
function get_mys_a_04t16_36_04_04(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_mys_a_04t16_36_04_04_04)

}
function get_mys_a_04t16_36_04_04_04(o) {
    if (u32(o + 0) !== 410131222) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_mys_a_04t16_36_04_04_04_04)
    ö(u32(o + 12), get_mys_a_04t16_36_04_04_04_12)

}
function get_mys_a_04t16_36_04_04_04_04(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_04t16_36_04_04_04_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_08t8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_mys_a_08t13(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

///////////////
/////////////
function get_mys_a_04t5(o) {
    if (u8(o + 1) || u32(o + 8) || u8(o + 24) || u8(o + 27) || u32(o + 60)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }

    switch (u8(o + 3)) {
    case 0:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_mys_a_04t5_16t0)
        }
        break;
    case 2:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_mys_a_04t5_16t2)
        }
        break;
    case 3:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_mys_a_04t5_16t3)
        }
        break;
    case 5:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_mys_a_04t5_16t5)
        }
        break;
    default:
        console.log("?")
    }

    ö(u32(o + 28), get_mys_a_04t5_28)
    ö(u32(o + 36), get_mys_a_04t5_36)

    for (let i = 0; i < u32(o + 40); i++) {
        get_mys_a_04t5_44(u32(o + 44) + offset_mid + (i * 32))
    }
    for (let i = 0; i < u32(o + 48); i++) {
        get_mys_a_04t5_52(u32(o + 52) + offset_mid + (i * 12))
    }

    ö(u32(o + 56), get_mys_a_04t5_56)

}

function get_mys_a_04t5_16t0(o) {
    ä(models_array, u32(o), get_models)
}

function get_mys_a_04t5_16t2(o) {// some index
}
function get_mys_a_04t5_16t3(o) {// some index
}
function get_mys_a_04t5_16t5(o) {// some index
}

function get_mys_a_04t5_28(o) {
    if (f32(o + 0) || f32(o + 4) || f32(o + 8) !== -1 || f32(o + 12) || f32(o + 16) !== 90 || f32(o + 20) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_mys_a_04t5_36(o) {
    if (f32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_mys_a_04t5_44(o) {
    if (f32(o + 12) || u8(o + 18) || u8(o + 19) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_mys_a_04t5_52(o) {
    if (u8(o + 6) || u8(o + 7)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
    }
}

function get_mys_a_04t5_56(o) {
    if (f32(o + 12) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}
///////
function get_mys_a_04t7(o) {
    if (u32(o + 8) !== 1 || f32(o + 20) !== 1 || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60, ], o)
    }
    ö(u32(o + 12), get_mys_a_04t7_12)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_mys_a_04t7_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_mys_a_04t7_36)
    }

}

function get_mys_a_04t7_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_mys_a_04t7_36(o) {
    if (u32(o + 4)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
    }
}

/////////////////
//////////////////
/////obj

////////////
///////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

function get_car_00_224(o) {//ü(1, [u32, 0, u32, 4, u32, 8], o)
}
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
function get_car_00_232(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

function get_unknown(o) {
    ä(unknown_00, u32(o + 0), get_unknown_00)
}

function get_unknown_00(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_unknown_00_04(u32(o + 4) + offset_mid + (i * 16))
    }
    function get_unknown_00_04(o) {

        if (u32(o) === 0) {
            if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
        } else if (u32(o) === 1) {
            if (u32(o + 0) !== 1 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 4), get_unknown_00_04_04t1)
            ö(u32(o + 8), get_unknown_00_04_08t1)

        } else if (u32(o) === 2) {
            if (u32(o + 0) !== 2 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 4), get_unknown_00_04_04t2)
            ö(u32(o + 8), get_unknown_00_04_08t2)

        } else if (u32(o) === 3) {
            if (u32(o + 0) !== 3 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }

            ä(unknown_00, u32(o + 4), get_unknown_00)
            ö(u32(o + 8), get_unknown_00_04_08t3)

        } else if (u32(o) === 4) {
            if (u32(o + 0) !== 4 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 4), get_strange)
            ö(u32(o + 8), get_unknown_00_04_08t4)

        } else if (u32(o) === 5) {
            if (u32(o + 0) !== 5 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 4), get_unknown_00_04_04t5)
            ö(u32(o + 8), get_unknown_00_04_08t5)
        } else if (u32(o) === 6) {
            if (u32(o + 0) !== 6 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ä(idk, u32(o + 4), get_idk)
            ö(u32(o + 8), get_unknown_00_04_08t6)
        } else if (u32(o) === 10) {
            if (u32(o + 0) !== 10 || u32(o + 4) || u32(o + 8)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }

        } else if (u32(o) === 11) {
            if (u32(o + 0) !== 11 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }

        } else if (u32(o) === 12) {
            if (u32(o + 0) !== 12 || u32(o + 4) || u32(o + 8)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
        } else if (u32(o) === 13) {
            if (u32(o + 0) !== 13 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
        } else if (u32(o) === 14) {
            if (u32(o + 0) !== 14 || u32(o + 4) || u32(o + 8)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
        } else if (u32(o) === 26) {
            if (u32(o + 0) !== 26 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }

            ä(sound_controls, u32(o + 4), get_sound_controls)
            ö(u32(o + 8), get_unknown_00_04_08t26)

        } else if (u32(o) === 29) {
            if (u32(o + 0) !== 29 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 4), get_unknown_00_04_04t29)
            ö(u32(o + 8), get_unknown_00_04_08t29)

        } else if (u32(o) === 30) {
            if (u32(o + 0) !== 30 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
        } else if (u32(o) === 31) {
            if (u32(o + 0) !== 31 || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ä(activator, u32(o + 4), get_activator)
            ö(u32(o + 8), get_unknown_00_04_08t31)

        } else if (u32(o) === 32) {
            if (u32(o + 0) !== 32 || u32(o + 4) || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 8), get_unknown_00_04_08t32)
        } else if (u32(o) === 34) {
            if (u32(o + 0) !== 34 || u32(o + 4) || u32(o + 12)) {
                ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            }
            ö(u32(o + 8), get_unknown_00_04_08t34)
        } else {
            console.log(u32(o))
        }
    }
    function get_unknown_00_04_04t1(o) {

        if (u8(o + 2) || u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
        }
        if (u32(o + 4)) {
            if (u8(o) === 0) {
                ö(u32(o + 4), get_unknown_00_04_04t1_04t0)
            } else if (u8(o) === 1) {
                ö(u32(o + 4), get_unknown_00_04_04t1_04t1)
            } else if (u8(o) === 2) {
                ö(u32(o + 4), get_unknown_00_04_04t1_04t2)
            } else {
                ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
            }
        }
        for (let i = 0; i < u32(o + 20); i++) {
            get_unknown_00_04_04t1_24(u32(o + 24) + offset_mid + (i * 12))
        }
        for (let i = 0; i < u32(o + 28); i++) {
            ä(unknown, u32(o + 32) + (i * 4), get_unknown)
        }
    }
    function get_unknown_00_04_04t1_04t0(o) {
        if (u32(o + 12) || u8(o + 52) !== 1 || u8(o + 53) || u8(o + 54) || u8(o + 55) || u32(o + 68) || u32(o + 72) || u32(o + 76)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
        }
        for (let i = 0; i < u32(o + 0); i++) {
            get_unknown_00_04_04t1_04t0_04(u32(o + 4) + offset_mid + (i * 4))
        }

        for (let i = 0; i < u32(o + 36); i++) {
            get_unknown_00_04_04t1_04t0_40(u32(o + 40) + offset_mid + (i * 32))
        }

        ö(u32(o + 48), get_unknown_00_04_04t1_04t0_48)

        ö(u32(o + 56), get_unknown_00_04_04t1_04t0_56)

        for (let i = 0; i < u32(o + 60); i++) {
            ö(u32(o + 64) + (i * 8), get_unknown_00_04_04t1_04t0_64)
        }

    }
    function get_unknown_00_04_04t1_04t0_04(o) {
        ä(models_array, u32(o + 0), get_models)

        // ü(1, [u32, 0], o)
        //model
    }

    function get_unknown_00_04_04t1_04t0_40(o) {
        if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28)) {
            ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, ], o)
        }
    }

    function get_unknown_00_04_04t1_04t0_48(o) {
        if (u32(o + 4) || u32(o + 8)) {
            ü(1, [f32, 0, u32, 4, u32, 8, f32, 12, ], o)
        }
    }
    function get_unknown_00_04_04t1_04t0_56(o) {
        if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || f32(o + 16) || f32(o + 20) || u32(o + 24) || u32(o + 28)) {
            ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
        }
    }
    function get_unknown_00_04_04t1_04t0_64(o) {
        // ü(1, [u32, 0, u32, 4], o)
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 20), get_unknown_00_04_04t1_04t0_64_04)
        }
    }

    function get_unknown_00_04_04t1_04t0_64_04(o) {
        if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
        }
    }
    function get_unknown_00_04_04t1_04t1(o) {
        if (u32(o + 68) || u32(o + 72) || u32(o + 76)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
        }

        for (let i = 0; i < u32(o); i++) {
            get_unknown_00_04_04t1_04t1_04(u32(o + 4) + offset_mid + (i * 4))
        }

        for (let i = 0; i < u32(o + 40); i++) {
            get_unknown_00_04_04t1_04t1_44(u32(o + 44) + offset_mid + (i * 12))
        }
        for (let i = 0; i < u32(o + 48); i++) {
            get_unknown_00_04_04t1_04t1_44(u32(o + 52) + offset_mid + (i * 12))
        }
        if (u32(o + 56)) {
            get_unknown_00_04_04t1_04t1_56(u32(o + 56) + offset_mid)
        }
        for (let i = 0; i < u32(o + 60); i++) {
            get_unknown_00_04_04t1_04t1_64(u32(o + 64) + offset_mid + (i * 8))
        }

    }
    function get_unknown_00_04_04t1_04t1_04(o) {// ü(1, [u32, 0], o)
    //texture / animation / sound
    }
    function get_unknown_00_04_04t1_04t1_44(o) {
        if (u8(o + 6) || u8(o + 7)) {
            ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
        }
    }

    function get_unknown_00_04_04t1_04t1_56(o) {
        if (f32(o + 24) || f32(o + 28)) {
            ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
        }

    }
    function get_unknown_00_04_04t1_04t1_64(o) {
        // ü(1, [u32, 0, u32, 4], o)
        for (let i = 0; i < u32(o); i++) {
            get_unknown_00_04_04t1_04t1_64_04(u32(o + 4) + offset_mid + (i * 20))
        }
    }

    function get_unknown_00_04_04t1_04t1_64_04(o) {
        if (u32(o + 12) || u32(o + 16)) {
            ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16], o)
        }
    }

    function get_unknown_00_04_04t1_04t2(o) {
        if (u8(o + 25) || u8(o + 27) || u32(o + 28) || u32(o + 16) > 2) {
            ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)
        }

        for (let i = 0; i < u32(o); i++) {
            get_unknown_00_04_04t1_04t2_04(u32(o + 4) + offset_mid + (i * 12))
        }

        // console.log(u32(o + 16))
        if (u32(o + 16) === 1) {

            for (let i = 0; i < u32(o + 16); i++) {// get_unknown_00_04_04t1_04t2_20(u32(o + 20) + offset_mid + (i * 16))
            }
        }
    }

    function get_unknown_00_04_04t1_04t2_04(o) {
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
        }
    }

    function get_unknown_00_04_04t1_04t2_20(o) {
        // if (f32(o + 8)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
        // }

    }

    function get_unknown_00_04_04t1_24(o) {
        if (u8(o + 6) || u8(o + 7)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
        }
    }

}
//////////////////////////////

function get_unknown_00_04_04t2(o) {
    if (u8(o + 2) !== 3 || u32(o + 16) || f32(o + 24) !== 100000 || u32(o + 36) || u32(o + 44) || u32(o + 60) || u32(o + 64) || u8(o + 73) || u8(o + 74) || u8(o + 75) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 104) || u32(o + 108) !== 100) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)
    }
    ä(unknown_00, u32(o + 32), get_unknown_00)
    ö(u32(o + 48), get_wtf)
    ä(unknown_00, u32(o + 56), get_unknown_00)
    ä(unknown_00, u32(o + 68), get_unknown_00)
    ä(unknown_00, u32(o + 76), get_unknown_00)
    ö(u32(o + 80), get_unknown_00_04_04t2_80)

    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 64), get_mys_a)
    }

}
function get_unknown_00_04_04t2_80(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

////////////////
////////////////
function get_unknown_00_04_04t5(o) {
    if (u32(o + 32) !== 1 || u8(o + 41) || u8(o + 42) || u8(o + 43) || u32(o + 44)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, ], o)
    }
    if (u32(o + 4)) {
        if (u8(o + 0) === 1) {
            ö(u32(o + 4), get_unknown_00_04_04t5_04)
        } else {
            console.log('a')
        }
    }
    ö(u32(o + 12), get_unknown_00_04_04t5_12)

    ö(u32(o + 20), get_unknown_00_04_04t5_20)
    ö(u32(o + 28), get_unknown_00_04_04t5_28)
    ö(u32(o + 36), get_unknown_00_04_04t5_36)

}

function get_unknown_00_04_04t5_04(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 24) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }

    if (u8(o + 8) === 103) {
        ö(u32(o + 12), get_unknown_00_04_04t5_04_12t103)
    } else if (u8(o + 8) === 105) {
        ö(u32(o + 12), get_unknown_00_04_04t5_04_12t105)
    } else {
        if (u32(o + 12)) {
            console.log("?")
        }
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_unknown_00_04_04t5_04_20)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        get_mys_a(u32(o + 32) + offset_mid + (i * 64))

    }

}
function get_unknown_00_04_04t5_04_12t103(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) !== 6553700 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 2147483647 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }
}

function get_unknown_00_04_04t5_04_12t105(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) !== 2 || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        get_mys_a(u32(o + 8) + offset_mid + (i * 64))
    }
}

function get_unknown_00_04_04t5_04_20(o) {// ü(1, [u32, 0], o) 4 bytes per entry?
}

function get_unknown_00_04_04t5_12(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_unknown_00_04_04t5_12_04)
    }
}

function get_unknown_00_04_04t5_12_04(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
    }
}

function get_unknown_00_04_04t5_20(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_unknown_00_04_04t5_20_04)
    }

}

function get_unknown_00_04_04t5_20_04(o) {
    if (f32(o + 4)) {
        ü(1, [f32, 0, f32, 4, f32, 8], o)
    }
}
function get_unknown_00_04_04t5_28(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 4)) {
        get_unknown_00_04_04t5_28_04(u32(o + 4) + offset_mid)
    }

}

function get_unknown_00_04_04t5_28_04(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o)) {
        get_unknown_00_04_04t5_28_04_00(u32(o) + offset_mid)
    }

}

function get_unknown_00_04_04t5_28_04_00(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 4)) {
        if (u8(o) === 1) {
            get_unknown_00_04_04t5_28_04_00_04t1(u32(o + 4) + offset_mid)
        } else if (u8(o) === 2) {
            get_unknown_00_04_04t5_28_04_00_04t2(u32(o + 4) + offset_mid)
        } else {
            console.log(u8(o))
        }
    }

}

function get_unknown_00_04_04t5_28_04_00_04t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_unknown_00_04_04t5_28_04_00_04t2(o) {

    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }
}
function get_unknown_00_04_04t5_36(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
    }
}

////////////////

function get_unknown_00_04_08t6(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

//////
function get_unknown_00_04_04t29(o) {
    if (u8(o + 9) || u8(o + 10) !== 1 || u8(o + 11) || f32(o + 12) !== 0.10000000149011612 || f32(o + 16) !== 0.5 || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 48), get_unknown_00_04_04t29_04)
    }
}

function get_unknown_00_04_04t29_04(o) {
    if (f32(o + 4) !== 100 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }
    ä(models_array, u32(o + 0), get_models)
}
///////

function get_activator(o) {

    if (u32(o + 16) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 60) || u32(o + 68) || u32(o + 76) || u8(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 196) || u32(o + 200) || u32(o + 216) || u32(o + 220) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 252)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, f32, 100, f32, 104, u32, 108, u32, 112, u32, 116, u8, 120, u8, 121, u8, 122, u8, 123, u32, 124, f32, 128, f32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u8, 152, u8, 153, u8, 154, u8, 155, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, f32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252], o)
    }
    // u32(o + 8) ? console.log(get_string(u32(o + 8) + offset_mid, 0, false)) : 0

    ä(model_animation_2, u32(o + 4), get_model_animation_2)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 24), get_activator_24)
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_activator_32)
    }

    ö(u32(o + 108), get_activator_108)
    ö(u32(o + 116), get_activator_116)
    ö(u32(o + 124), get_activator_124)
    ö(u32(o + 144), get_activator_144)

    ö(u32(o + 148), get_wtf)

    for (let i = 0; i < u32(o + 172); i++) {
        ö(u32(o + 176) + (i * 20), get_activator_176)
    }

    for (let i = 0; i < u32(o + 180); i++) {
        ö(u32(o + 184) + (i * 12), get_activator_184)
    }

    ö(u32(o + 192), get_activator_184)

    for (let i = 0; i < u32(o + 208); i++) {
        ä(unknown, u32(o + 212) + (i * 4), get_unknown)
    }
    for (let i = 0; i < u32(o + 224); i++) {
        ä(unknown, u32(o + 228) + (i * 4), get_unknown)
    }

    for (let i = 0; i < u32(o + 244); i++) {
        get_activator_248(u32(o + 248) + offset_mid + (i * 36))
    }

}

function get_activator_24(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 16)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20], o)
    }
    if (u32(o + 4)) {
        if (u8(o) === 4) {
            ö(u32(o + 4), get_activator_24_04t4)
        } else if (u8(o) === 6) {
            ö(u32(o + 4), get_activator_24_04t6)
        } else {
            console.log("?")
        }
    }
}
function get_activator_24_04t4(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_activator_24_04t4_04)
}

function get_activator_24_04t4_04(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_24_04t6(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) !== 4294967295) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    // console.log(get_string(u32(o + 8) + offset_mid, 0, false))
}
/////////////

function get_activator_32(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)
    }
    ö(u32(o + 4), get_activator_32_04)

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_activator_32_20)
    }
}

function get_activator_32_04(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12], o)
    }
}

function get_activator_32_20(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)
    }
    ö(u32(o + 8), get_activator_32_20_08)
}

function get_activator_32_20_08(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_108(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 8)) {

        if (u32(o + 4) === 1) {
            ö(u32(o + 8), get_activator_108_08t1)
        } else if (u32(o + 4) === 2) {
            ö(u32(o + 8), get_activator_108_08t2)
        } else {
            console.log(u32(o + 4))
        }
    }
}
function get_activator_108_08t1(o) {
    if (u32(o + 0) !== 4 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_108_08t2(o) {
    if (u32(o + 0) || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) !== 4 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 8), get_activator_108_08t2_08)
}

function get_activator_108_08t2_08(o) {
    if (u8(o + 0) !== 4 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_116(o) {
    if (u32(o + 0) !== 312101502 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_124(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 12 || u32(o + 12) || f32(o + 16) !== 12 || u32(o + 20) || f32(o + 24) !== 2 || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28, ], o)
    }
}
function get_activator_144(o) {
    if (f32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }
}
////////////
/////////////
///////////
////////////
////////////
/////////////
///////////
////////////
////////////
/////////////
///////////
////////////
////////////
/////////////
///////////
////////////
////////////
/////////////
///////////
////////////
////////////
/////////////
///////////
////////////
////////////
/////////////
///////////
////////////

function get_activator_176(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_activator_176_08)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_activator_176_08)
    }

}
function get_activator_176_08(o) {
    // maybe same as activator_248_32_72 ?

    if (u8(o + 5) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)
    }

    if (u32(o) === 0) {
        ö(u32(o + 8), get_activator_176_08t0)
    } else if (u32(o) === 13) {
        ö(u32(o + 8), get_activator_176_08t13)
    } else if (u32(o) === 19) {
        ö(u32(o + 8), get_activator_176_08t19)
    } else {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)

        // console.log("?")
    }

}

function get_activator_176_08t0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_176_08t13(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)

    }
}

function get_activator_176_08t19(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_184(o) {
    if (u32(o + 8)) {
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    }

    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_mys_a)
    }

}

function get_activator_248(o) {
    if (u8(o + 25) || u8(o + 26) || u8(o + 27)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, ], o)
    }

    // console.log(u32(o + 0),'?')
    // 1 = 16
    // 2 = 16
    // 3 = 32
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_activator_248_04)
    }
    // // }

    ä(sound_controls, u32(o + 20), get_sound_controls);

    // (u32(o + 8)) ? console.log(get_string(u32(o + 8) + offset_mid, 0, false)) : null

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 80), get_activator_248_32)
    }
}

function get_activator_248_04(o) {
    if (u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    }

    if (u32(o + 4)) {
        if (u8(o) === 0) {
            ö(u32(o + 4), get_activator_248_04_04t0)
        } else if (u8(o) === 1) {
            ö(u32(o + 4), get_activator_248_04_04t1)
        } else if (u8(o) === 2) {
            ö(u32(o + 4), get_activator_248_04_04t2)
        } else if (u8(o) === 3) {
            ö(u32(o + 4), get_activator_248_04_04t3)
        } else if (u8(o) === 4) {
            ö(u32(o + 4), get_activator_248_04_04t4)
        } else if (u8(o) === 5) {
            ö(u32(o + 4), get_activator_248_04_04t5)
        } else if (u8(o) === 6) {
            ö(u32(o + 4), get_activator_248_04_04t6)
        } else if (u8(o) === 9) {
            ö(u32(o + 4), get_activator_248_04_04t9)
        } else if (u8(o) === 11) {
            ö(u32(o + 4), get_activator_248_04_04t11)
        } else if (u8(o) === 12) {
            ö(u32(o + 4), get_activator_248_04_04t12)
        } else if (u8(o) === 13) {
            ö(u32(o + 4), get_activator_248_04_04t13)
        } else if (u8(o) === 15) {
            ö(u32(o + 4), get_activator_248_04_04t15)
        } else {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
            console.log(u8(o))
        }
    }

}

function get_activator_248_04_04t0(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_activator_248_04_04t0_04)
}

function get_activator_248_04_04t0_04(o) {
    if (u8(o + 25) || u8(o + 26) || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44, ], o)
        // ü(3, [u32, 0, u32, 4, f32, 8, f32, 12], o)
    }
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_activator_248_04_04t0_04_04)
    }

}

function get_activator_248_04_04t0_04_04(o) {
    //     ü(1, [u32, 0, u32, 4], o)
    ö(u32(o + 4), get_activator_248_04_04t0_04_04_04)

}

function get_activator_248_04_04t0_04_04_04(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_activator_248_04_04t0_04_04_04_04)

}

function get_activator_248_04_04t0_04_04_04_04(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

}
function get_activator_248_04_04t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
    }

}

function get_activator_248_04_04t2(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 2 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_04_04t3(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_04_04t4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_04_04t5(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_04_04t6(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_04_04t9(o) {
    if (u32(o + 0) || f32(o + 4) !== -1 || u32(o + 8) || u8(o + 12) || u8(o + 13) || u8(o + 14) !== 128 || u8(o + 15) !== 63 || u8(o + 20) !== 1 || u8(o + 21) || u8(o + 23) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, f32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, ], o)
    }

}

function get_activator_248_04_04t11(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_04_04t12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_04_04t13(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12], o)
    }

    if (u32(o)) {
        get_activator_248_04_04t13_00(u32(o) + offset_mid)
    }
}

function get_activator_248_04_04t13_00(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    u32(o + 4) ? get_activator_248_04_04t13_00_04(u32(o + 4) + offset_mid) : 0

}

function get_activator_248_04_04t13_00_04(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_04_04t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}
///////

function get_activator_248_32(o) {
    if (u32(o + 20) || u8(o + 43) || u8(o + 60) || u8(o + 62) || u8(o + 63)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, f32, 44, f32, 48, u32, 52, f32, 56, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

    // (u32(o + 0)) ? console.log(get_string(u32(o + 0) + offset_mid, 0, false)) : null

    for (let i = 0; i < u32(o + 4); i++) {
        get_activator_248_32_08(u32(o + 8) + offset_mid + (i * 4))
    }

    ö(u32(o + 16), get_activator_248_32_16)
    ö(u32(o + 32), get_activator_248_32_32)

    if (u32(o + 36)) {
        if (u8(o + 15) === 1) {
            get_activator_248_32_36(u32(o + 36) + offset_mid)
        } else if (u8(o + 15) === 2) {
            get_activator_248_32_36(u32(o + 36) + offset_mid)
        } else {
            console.log(u8(o + 15))
        }
    }

    ö(u32(o + 52), get_activator_248_32_52)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 12), get_activator_248_32_72)
    }

    ö(u32(o + 76), get_activator_248_32_76)
}

function get_activator_248_32_08(o) {
    ä(model_link, u32(o + 0), get_model_link)
}

function get_activator_248_32_16(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_32_32(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_32_36(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_32_52(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
    }
}
//////
//////
/////

function get_activator_248_32_72(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }
    if (u32(o + 8)) {
        if (u32(o) === 0 /*&& u32(o + 16) === 0 && u32(o + 20) === 0 && u32(o + 24) === 0 && u32(o + 28) === 0*/
        ) {
            ö(u32(o + 8), get_activator_248_32_72_08t0)
        } else if (u32(o) === 2) {
            ö(u32(o + 8), get_activator_248_32_72_08t2)
        } else if (u32(o) === 4) {
            ä(activator, u32(o + 8), get_activator)
        } else if (u32(o) === 5) {
            ä(activator, u32(o + 8), get_activator)
        } else if (u32(o) === 8) {
            ö(u32(o + 8), get_activator_248_32_72_08t08)
        } else if (u32(o) === 10) {
            ö(u32(o + 8), get_activator_248_32_72_08t10)
        } else if (u32(o) === 12) {
            ö(u32(o + 8), get_activator_248_32_72_08t12)
        } else if (u32(o) === 13) {
            ö(u32(o + 8), get_activator_248_32_72_08t13)
        } else if (u32(o) === 14) {
            ö(u32(o + 8), get_activator_248_32_72_08t14)
        } else if (u32(o) === 15) {
            ö(u32(o + 8), get_activator_248_32_72_08t15)
        } else if (u32(o) === 16) {
            ö(u32(o + 8), get_activator_248_32_72_08t16)
        } else if (u32(o) === 17) {
            ö(u32(o + 8), get_activator_248_32_72_08t17)
        } else if (u32(o) === 18) {
            ö(u32(o + 8), get_activator_248_32_72_08t18)
        } else if (u32(o) === 20) {
            ö(u32(o + 8), get_activator_248_32_72_08t20)
        } else if (u32(o) === 22) {
            ö(u32(o + 8), get_activator_248_32_72_08t22)
        } else if (u32(o) === 23) {
            ö(u32(o + 8), get_activator_248_32_72_08t23)
        } else if (u32(o) === 25) {
            ö(u32(o + 8), get_activator_248_32_72_08t25)
        } else if (u32(o) === 32) {
            ö(u32(o + 8), get_activator_248_32_72_08t32)
        } else {
            ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
            console.log(u32(o))
        }
    }

}

function get_activator_248_32_72_08t0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
    }

}

function get_activator_248_32_72_08t2(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_32_72_08t08(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_mys_a)
    }
}

function get_activator_248_32_72_08t10(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_32_72_08t12(o) {
    if (u8(o + 0) !== 4 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_32_72_08t13(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_activator_248_32_72_08t14(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 20)) {
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28, ], o)
    }
}

function get_activator_248_32_72_08t15(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_32_72_08t16(o) {
    if (u16(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_activator_248_32_72_08t17(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_mys_a)
    }
}
///

function get_activator_248_32_72_08t18(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 8), get_activator_248_32_72_08t18_08)
}

function get_activator_248_32_72_08t18_08(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    switch (u32(o)) {
    case 0:
        ö(u32(o + 4), get_activator_248_32_72_08t18_08_04t0)
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        if (u32(o + 4)) {
            console.log('?')
        }
        break;
    case 6:
        ö(u32(o + 4), get_activator_248_32_72_08t18_08_04t6)
        break;
    default:
        console.log(u32(o))
    }
}

function get_activator_248_32_72_08t18_08_04t0(o) {
    if (u32(o + 0) || u32(o + 4) !== 3500 || u32(o + 8) || u16(o + 12) !== 130 || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 28) !== 12 || u8(o + 32) !== 1 || u8(o + 33) || u8(o + 34) || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44], o)
    }
}

function get_activator_248_32_72_08t18_08_04t6(o) {
    if (u32(o + 0) !== 5000 || f32(o + 4) !== 1.0499999523162842 || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 8), get_activator_248_32_72_08t18_08_04t6_08)

}

function get_activator_248_32_72_08t18_08_04t6_08(o) {
    if (u32(o + 0) !== 5000 || f32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
    }
}
//////
function get_activator_248_32_72_08t20(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [f32, 0, u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }

    if (u8(o + 8) === 1) {
        ö(u32(o + 0), get_activator_248_32_72_08t20_00)
    }

}

function get_activator_248_32_72_08t20_00(o) {
    if (u32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, ], o)
    }
}

/////
function get_activator_248_32_72_08t22(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_activator_248_32_72_08t22_00)
}

function get_activator_248_32_72_08t22_00(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_activator_248_32_72_08t22_00_04)
}

function get_activator_248_32_72_08t22_00_04(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}
///

function get_activator_248_32_72_08t23(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_mys_a)
    }
}

function get_activator_248_32_72_08t25(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 4), get_activator_248_32_72_08t25_04)
}

function get_activator_248_32_72_08t25_04(o) {
    if (u32(o + 0) || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 8), get_activator_248_32_72_08t25_04_08)

}

function get_activator_248_32_72_08t25_04_08(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
    }
}

///
function get_activator_248_32_72_08t32(o) {
    if (u32(o + 4) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}
///

function get_activator_248_32_76(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}
////////////////
//2nd offset
function get_unknown_00_04_08t1(o) {
    if (u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }

    if (u32(o + 48)) {
        if (u8(o + 40) === 2) {
            get_unknown_00_04_08t1_48(u32(o + 48) + offset_mid)
        } else {
            console.log("?", u8(o + 40) === 2)
        }
    }
    if (u32(o + 52)) {
        if (u8(o + 42) === 1) {
            get_unknown_00_04_08t1_52t1(u32(o + 52) + offset_mid)
        } else if (u8(o + 42) === 2) {
            get_unknown_00_04_08t1_52t2(u32(o + 52) + offset_mid)

        } else {
            console.log("?")
        }
    }
}

function get_unknown_00_04_08t1_48(o) {
    if (f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_unknown_00_04_08t1_52t1(o) {
    if (f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_unknown_00_04_08t1_52t2(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11)) {
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
    if (u32(o + 12)) {
        if (u8(o + 8) === 0) {
            get_unknown_00_04_08t1_52t2_12t0(u32(o + 12) + offset_mid)
        } else if (u8(o + 8) === 1) {
            get_unknown_00_04_08t1_52t2_12t1(u32(o + 12) + offset_mid)
        } else if (u8(o + 8) === 2) {
            get_unknown_00_04_08t1_52t2_12t2(u32(o + 12) + offset_mid)
        } else {
            console.log('?')
        }
    }
}

function get_unknown_00_04_08t1_52t2_12t0(o) {
    if (f32(o + 4) !== 1 || f32(o + 8) !== 1 || f32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_unknown_00_04_08t1_52t2_12t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 8) || f32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_unknown_00_04_08t1_52t2_12t2(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}
////
function get_unknown_00_04_08t2(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }
    //0 = 0
    //1 = o
    //2 = o
    ö(u32(o + 48), get_unknown_00_04_08t2_48)
    if (u8(o + 42) === 2) {
        ö(u32(o + 52), get_unknown_00_04_08t2_52s)
    } else if (u8(o + 42) === 1) {
        ö(u32(o + 52), get_unknown_00_04_08t2_52)
    }

}
function get_unknown_00_04_08t2_48(o) {
    if (f32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
    }
}

function get_unknown_00_04_08t2_52s(o) {
    if (f32(o + 0) !== 1500 || u32(o + 4) || u8(o + 8) !== 2 || u8(o + 9) || u8(o + 10) || u8(o + 11)) {
        ü(1, [f32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
    ö(u32(o + 12), get_unknown_00_04_08t2_52s_12)
}
function get_unknown_00_04_08t2_52s_12(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) !== 1 || u8(o + 10) || u8(o + 11) || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_unknown_00_04_08t2_52(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
    }
}

/* */
function get_unknown_00_04_08t3(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }
    if (u32(o + 48)) {
        if (u8(o + 40) === 2) {
            get_unknown_00_04_08t3_48(u32(o + 48) + offset_mid)
        } else {
            console.log('?')
        }
    }
    if (u32(o + 52)) {
        get_unknown_00_04_08t3_52(u32(o + 52) + offset_mid)
    }

}

function get_unknown_00_04_08t3_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
    }
}

function get_unknown_00_04_08t3_52(o) {
    if (f32(o + 12) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
    }
}
/* */
function get_unknown_00_04_08t4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }
}

function get_unknown_00_04_08t5(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_unknown_00_04_08t5_04)
}
function get_unknown_00_04_08t5_04(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_unknown_00_04_08t26(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_unknown_00_04_08t29(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u8(o + 40) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }
    ö(u32(o + 52), get_unknown_00_04_08t29_52)
}

function get_unknown_00_04_08t29_52(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_unknown_00_04_08t31(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 40) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }
    ö(u32(o + 52), get_unknown_00_04_08t31_52)

}

function get_unknown_00_04_08t31_52(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_unknown_00_04_08t32(o) {
    if (u8(o + 2) || u8(o + 3) || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    // (u32(o + 8)) ? console.log(get_string(u32(o + 8) + offset_mid, 0, false)) : null

}

function get_unknown_00_04_08t34(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ä(frames, u32(o + 4), get_interfaceframe)
    ä(frames, u32(o + 8), get_interfaceframe)
    ä(frames, u32(o + 12), get_interfaceframe)

    ö(u32(o + 16), get_unknown_00_04_08t34_08)

}
function get_unknown_00_04_08t34_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }

}
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

function get_models(offset, index) {

    if (log_array.model === 0) {
        log_array.model = offset
    } else {
        if (log_array.model > offset) {
            log_array.model = offset
        }
    }

    let html = ''

    // ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], offset)

    html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_model_folder" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset + 8) + offset_mid, 0, false)}</a></div>`
    for (let i = 0; i < u16(offset + 2); i++) {// get_models_04(u32(offset + 4) + offset_mid + (i * 8))
    }
    return html

    function get_models_04(offset) {
        for (let i = 0; i < u32(offset + 0); i++) {
            get_models_04_04(u32(offset + 4) + offset_mid + (i * 4))
        }
    }

    function get_models_04_04(offset) {
        if (u32(offset + 0)) {
            get_models_04_04_00(u32(offset + 0) + offset_mid)
        }
    }
    function get_models_04_04_00(offset) {

        if (u32(offset + 88) === 0) {// console.log(`[ ${u8(offset + 56 )}, ${u8(offset + 57 )}, ${u8(offset + 58 )}, ${u8(offset + 59 )} |||${u32(offset + 0 )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | [ ${u8(offset + 12 )}, ${u8(offset + 13 )}, ${u8(offset + 14 )}, ${u8(offset + 15 )} ] | ${u32(offset + 16 )} | ${u32(offset + 20 )} | ${u32(offset + 24 )} | ${u32(offset + 28 )} | ${u32(offset + 32 )} | ${u32(offset + 36 )} | [ ${u8(offset + 40 )}, ${u8(offset + 41 )}, ${u8(offset + 42 )}, ${u8(offset + 43 )} ] | [ ${u8(offset + 44 )}, ${u8(offset + 45 )}, ${u8(offset + 46 )}, ${u8(offset + 47 )} ] | [ ${u8(offset + 48 )}, ${u8(offset + 49 )}, ${u8(offset + 50 )}, ${u8(offset + 51 )}  ] | [ ${u8(offset + 52 )}, ${u8(offset + 53 )}, ${u8(offset + 54 )}, ${u8(offset + 55 )} ] || offset:${offset} -mid:${offset_mid}`)
        }

        if (u32(offset + 92)) {
            get_models_04_04_00_92(u32(offset + 92) + offset_mid)
        }

    }

    function get_models_04_04_00_92(offset) {
        if (u32(offset + 4)) {
            console.log(`${u32(offset + 0)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || offset:${offset} -mid:${offset_mid}`)
        }

    }
}

function get_world_options(offset) {
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_world" data-offset="${offset}" class='file_hover_not_selected'>World</a>`

    for (let i = 0; i < 16; i++) {

        if (u32(offset + (i * 16) + 8) != 0) {
            world_options_type = u32(offset + (i * 16))
            world_options_amount = u32(offset + (i * 16) + 8)
            world_options_offset = u32(offset + (i * 16) + 12) + offset_mid
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

        // u32(offset )

    }
    // html += get_world_weird(u32(offset_mid + 8 ) + offset_mid)
    if (fileextension == 'xdx') {
        html += get_world_routes(u32(offset_mid + 152) + offset_mid, [0, 0])
    } else if (u32(8) == 249) {
        html += get_world_routes(u32(offset_mid + 120) + offset_mid, [0, 0])
    } else {
        html += get_world_routes(u32(offset_mid + 12) + offset_mid, [0, 0])
    }
    // html += get_world_flags(u32(offset_mid + 24 ) + offset_mid)

    if (u32(8) == 249) {
        html += get_world_options_starting_points(u32(offset_mid + 12) + offset_mid, u32(offset_mid + 8))
    } else if (fileextension == 'xdx') {
        html += get_world_options_starting_points(u32(offset_mid + 12) + offset_mid, u32(offset_mid + 8))
    } else {}

    if (fileextension == 'xdx') {
        html += get_world_gate(u32(offset_mid + 224) + offset_mid, u32(offset_mid + 220))
    } else if (u32(8) == 249) {
        html += get_world_gate(u32(offset_mid + 192) + offset_mid, u32(offset_mid + 188))
    } else {

        html += get_world_gate(u32(offset_mid + 32) + offset_mid, u32(offset_mid + 28))
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
    for (let i = 0; i < u32(offset + 8); i++) {
        html += get_world_flags_2(u32(offset + 12) + offset_mid + (i * 4))
    }
    html += '</div>'
    return html
}

function get_world_flags_2(offset) {
    let html = get_world_flags_2_2(u32(offset + 0) + offset_mid)

    return html
}

function get_world_flags_2_2(offset) {
    // let html = `<br>--->---> ${u32(offset + 0 )} | ${u32(offset + 4 )} | [ ${u8(offset + 8 )}, ${u8(offset + 9 )}, ${u8(offset + 10 )}, ${u8(offset + 11 )} ] | ${u32(offset + 12 )} | ${u32(offset + 16 )} | ${u32(offset + 20 )} | ${u32(offset + 24 )} | ${u32(offset + 28 )} | ${u32(offset + 32 )} | ${u32(offset + 36 )} | ${u32(offset + 40 )} | ${u32(offset + 44 )} | ${u32(offset + 48 )} | ${u32(offset + 52 )} | ${u32(offset + 56 )} | ${u32(offset + 60 )} | ${u32(offset + 64 )} | ${u32(offset + 68 )} | ${u32(offset + 72 )} | ${u32(offset + 76 )} | ${u32(offset + 80 )} | ${u32(offset + 84 )} | ${u32(offset + 88 )} | ${u32(offset + 92 )} | ${u32(offset + 96 )} | ${u32(offset + 100 )} | ${u32(offset + 104 )} | ${u32(offset + 108 )} | ${u32(offset + 112 )} | ${u32(offset + 116 )} | ${u32(offset + 120 )} | ${u32(offset + 124 )} | ${u32(offset + 128 )} | ${u32(offset + 132 )} | ${u32(offset + 136 )} | ${u32(offset + 140 )} | ${u32(offset + 144 )} | ${u32(offset + 148 )} | ${u32(offset + 152 )} | ${u32(offset + 156 )} | ${u32(offset + 160 )} | ${u32(offset + 164 )} | ${u32(offset + 168 )} | ${u32(offset + 172 )}`
    let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_world_flags_2" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset + 140) + offset_mid, 0, false)}</a></div>`
    // if (u32(offset + 140 ) != 0) {
    //     html += `<br>--->--->---?${get_string(u32(offset + 140 ) + offset_mid, 0, false)}`
    // }
    // if (u32(offset + 152 ) != 0) {
    //     html += `<br>--->--->---?${get_string(u32(offset + 152 ) + offset_mid, 0, false)}`
    // }

    // html += load_world_x_world_weird_2_2_2_1(u32(offset + 164 ) + offset_mid)
    // html += load_world_x_world_weird_2_2_2_2(u32(offset + 168 ) + offset_mid)
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
    if (u32(offset) != 0) {
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

function get_world_options_3(offset, amount) {
    let html = `<div style='display:none' class='sub_file_div'><a class='no_arrow'>↓</a><a> ? </a> <a data-type="x_world_3" data-amount="${amount}" data-offset="${offset}" class='file_hover_not_selected'>3 / sound area</a></div>`

    // calculate from sound offset list

    return html

}

function get_x_sound(offset, index) {

    let html = `<div style='display:none;' class='sub_file_div'><a class='file_arrow'></a><a> 🕪 </a> <a data-type="x_sound" data-offset="${offset}" data-sound_start_offset='${offset_audio_start}' data-sound_data_offset='${offset_audio_temp}' class='file_hover_not_selected'>Sound ${index}</a></div>`

    // calculate from sound offset list

    return html

}

function get_xdx_link(o) {
    if (u32(o + 36) || u32(o + 52) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    }
    ö(u32(o), get_link_00)
    for (let i = 0; i < u32(o + 4); i++) {
        get_xdx_link_08(u32(o + 8) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_xdx_link_24)
    }
    ö(u32(o + 40), get_link_demo)

}

function get_xdx_link_08(o) {
    if (u32(o + 0) !== 4 || u32(o + 4)) {
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    }
    ö(u32(o + 8), get_link_offset_index)
}

function get_xdx_link_24(o) {
    // ü(1, [u32, 0], o)
    ö(u32(o), get_xdx_link_24_00)
}
function get_xdx_link_24_00(o) {

    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_link_32_00_04)
    }

}

function get_link_ps2_demo(o) {
    if (u32(o + 36) || u32(o + 52) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    }
    ö(u32(o), get_link_00)
    for (let i = 0; i < u32(o + 4); i++) {
        get_xdx_link_08(u32(o + 8) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_xdx_link_24)
    }
    ö(u32(o + 40), get_link_demo)

}

function get_link(o) {
    if (log_array.unordered === 0) {
        log_array.unordered = o
    } else {
        if (log_array.unordered > o) {
            log_array.unordered = o
        }
    }

    if (fileextension === "xdx" || file_version === 249) {
        get_xdx_link(o)
        return
    }

    if (u32(o + 76)) {
        ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }

    ö(u32(o), get_link_00)

    for (let i = 0; i < u32(o + 4); i++) {
        get_link_intro(u32(o + 8) + offset_mid + (i * 16))
    }
    for (let i = 0; i < u32(o + 28); i++) {
        get_link_32(u32(o + 32) + offset_mid + (i * 8))
    }
    if (u32(o + 48)) {
        get_link_demo(u32(o + 48) + offset_mid)
    }

    ä(fonts, u32(o + 60), get_fonts)

}

function get_link_00(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 4)) {
        get_link_00_04(u32(o + 4) + offset_mid)
    }

}

function get_link_00_04(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o)) {
        get_link_00_04_00(u32(o) + offset_mid)
    }

}

function get_link_00_04_00(o) {
    if (u32(o + 0) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
    if (u32(o + 4)) {
        get_link_00_04_00_04(u32(o + 4) + offset_mid)
    }

}

function get_link_00_04_00_04(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 2000000000 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_link_intro(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

    if (u32(o + 4) && file_version !== 249) {// console.log(get_string(u32(o + 4) + offset_mid, 0, false))
    }

    if (u32(o + 8) && file_version !== 249) {
        get_link_intro_08(u32(o + 8) + offset_mid)
    }
    if (u32(o + 12) && file_version !== 249) {
        get_link_offset_index(u32(o + 12) + offset_mid)
    }

}
function get_link_intro_08(o) {
    if (u8(o + 1) !== 30 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_link_offset_index(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

}

function get_link_32(o) {
    if (u32(o + 4)) {
        ü(1, [u32, 0, u32, 4], o)
    }
    if (u32(o)) {
        get_link_32_00(u32(o) + offset_mid)
    }

}

function get_link_32_00(o) {
    if (u32(o + 8)) {
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_link_32_00_04(u32(o + 4) + offset_mid + (i * 32))
    }

}

function get_link_32_00_04(o) {
    if (u32(o + 24) !== 1) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_link_32_00_04_04(u32(o + 4) + offset_mid + (i * 16))
    }
    if (u32(o + 8)) {
        get_link_offset_index(u32(o + 8) + offset_mid)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        get_link_32_00_04_20(u32(o + 20) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(o + 24); i++) {
        get_link_32_00_04_20(u32(o + 28) + offset_mid + (i * 12))
    }

}

function get_link_32_00_04_04(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 4)) {
        get_link_offset_index(u32(o + 4) + offset_mid)
    }

}

function get_link_32_00_04_20(o) {
    if (u8(o + 10) || u8(o + 11)) {
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, ], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_link_32_00_04_20_04(u32(o + 4) + offset_mid + (i * 8))
    }

}

function get_link_32_00_04_20_04(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    }
    if (u32(o + 4)) {
        get_link_offset_index(u32(o + 4) + offset_mid)
    }

}

function get_link_demo(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
    if (u32(o + 8)) {
        get_link_32_00(u32(o + 8) + offset_mid)
    }

}

//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
function get_world() {

    let html = ''

    if (game !=='pac_man_world_rally') {
        return html
    }

    if (fileextension == 'xdx') {
        html += get_world_options(u32(offset_mid + 152) + offset_mid)
    } else {
        html += get_world_options(u32(offset_mid + 20) + offset_mid)
    }

    if (fileextension == 'xdx' || file_version === 249) {
        return html
    }

    let o = offset_mid
    if (u32(o + 4) !== 160 || u32(o + 16) !== 16 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)
    }

    ö(u32(o), get_unordered_world)
    ö(u32(o + 4), get_collision)
    ö(u32(o + 8), get_world_08)
    ö(u32(o + 12), get_world_12)

    for (let i = 0; i < u32(o + 16); i++) {
        get_world_20(u32(o + 20) + offset_mid + (i * 16))
    }

    ö(u32(o + 24), get_world_24)

    for (let i = 0; i < u32(o + 28); i++) {
        get_world_32(u32(o + 32) + offset_mid + (i * 4))
    }

    return html
}

function get_collision(o) {
    if (f32(o + 12) !== 1 || f32(o + 28) !== 1 || u32(o + 36) !== 19 || u32(o + 92)) {

        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    }

    if (u32(o + 88) === 0) {
        for (let i = 0; i < u32(o + 68); i++) {
            get_collision_32t0(u32(o + 32) + offset_mid + (i * 48))
        }
    } else {
        for (let i = 0; i < u32(o + 68); i++) {
            get_collision_32t1(u32(o + 32) + offset_mid + (i * 48))
        }
    }
    for (let i = 0; i < u32(o + 72); i++) {
        get_collision_76(u32(o + 76) + offset_mid + (i * 32))
    }
    for (let i = 0; i < u32(o + 80); i++) {
        get_collision_84(u32(o + 84) + offset_mid + (i * 64))
    }

}

function get_collision_76(o) {
    if (u32(o + 20) !== 3 || u16(o + 24) !== 52685 || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u16, 24, u16, 26, u32, 28], o)
    }
    ö(u32(o + 16), get_collision_76_16)

}

function get_collision_76_16(o) {
    if (f32(o + 12) !== 1 || f32(o + 28) !== 2 || f32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
    }
}

function get_collision_84(o) {
    if (f32(o + 12) !== -431602080 || f32(o + 28) !== 1 || f32(o + 44) !== 1 || f32(o + 52) !== -431602080 || f32(o + 56) !== -431602080 || f32(o + 60) !== -431602080) {

        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, f32, 56, f32, 60], o)

    }
}

function get_collision_32t0(o) {
    // ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24,f32, 28,u32, 32,u32, 36,u32, 40,u32, 44], o)
    for (let i = 0; i < u32(o + 44); i++) {
        get_collision_32t0_40(u32(o + 40) + offset_mid + (i * 4))
    }

}

function get_collision_32t0_40(o) {// ü(1, [u32, 0], o)
}

function get_collision_32t1(o) {
    // ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24,f32, 28,u32, 32,u32, 36,u32, 40,u32, 44], o)

    if (u32(o + 32) == 372) {

        for (let i = 0; i < u32(o + 32); i++) {
            get_collision_32t1_36(u32(o + 36) + offset_mid + (i * 2))
        }
    }
    for (let i = 0; i < u32(o + 44); i++) {
        get_collision_32t1_40(u32(o + 40) + offset_mid + (i * 12))
    }

}

function get_collision_32t1_40(o) {
    if (u8(o + 10) || u8(o + 11)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, ], o)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        get_collision_32t1_40_00(u32(o + 0) + offset_mid + (i * 32))
    }

}

function get_collision_32t1_40_00(o) {
    if (u32(o + 24) !== 3452816845 || u32(o + 28) !== 3452816845) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28], o)
    }

}

function get_collision_32t1_36(o) {// ü(1, [u16, 0], o)
}

///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
function get_world_08(o) {
    if (f32(o + 12) || f32(o + 32) !== 500 || f32(o + 40) !== 500 || u32(o + 48) !== 1 || u32(o + 56) || u32(o + 60)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        get_world_08_20(u32(o + 20) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(o + 28); i++) {
        get_world_08_16(u32(o + 16) + offset_mid + (i * 80))
    }

}

function get_world_08_20(o) {//ü(1, [u32, 0], o)
}

function get_world_08_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        get_world_08_16_12(u32(o + 12) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(o + 56); i++) {
        get_world_08_16_12(u32(o + 60) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(o + 64); i++) {
        get_world_08_16_12(u32(o + 68) + offset_mid + (i * 4))
    }

}

function get_world_08_16_12(o) {
    // ü(1, [u32, 0], o)
    ö(u32(o + 0), get_world_08_16_12_00)

}

function get_world_08_16_12_00(o) {
    if (u16(o + 4) !== 8) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }
}
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////

function get_world_12(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        get_world_12_00(u32(o) + offset_mid + (i * 128))
    }
}

function get_world_12_00(o) {
    get_world_entry(o)
    if (f32(o + 44) !== 1 || u8(o + 77) || u8(o + 78) || u8(o + 79) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 120) || u32(o + 124)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, f32, 68, u16, 72, u16, 74, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        get_world_12_00_52(u32(o + 52) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(o + 48); i++) {
        get_world_12_00_56(u32(o + 56) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(o + 60); i++) {
        get_world_12_00_64(u32(o + 64) + offset_mid + (i * 4))
    }

}

function get_world_12_00_52(o) {// ü(1, [f32, 0], o)
}

function get_world_12_00_56(o) {// ü(1, [u32, 0], o)
}
function get_world_12_00_64(o) {// ü(1, [u32, 0], o)
}
///////////////////////////////
////////////////////////////

function get_world_entry(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_world_20(o) {

    for (let i = 0; i < u32(o + 8); i++) {
        get_world_entry(u32(o + 12) + offset_mid + (i * u32(o + 4)))
        switch (u32(o)) {
        case 0:
            get_world_20_12t0(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 1:
            get_world_20_12t1(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 2:
            get_world_20_12t2(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 3:
            get_world_20_12t3(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 4:
            get_world_20_12t4(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 5:
            get_world_20_12t5(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 8:
            get_world_20_12t8(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 10:
            get_world_20_12t10(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 11:
            get_world_20_12t11(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 13:
            get_world_20_12t13(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 14:
            get_world_20_12t14(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        case 15:
            get_world_20_12t15(u32(o + 12) + offset_mid + (i * u32(o + 4)))
            break
        default:
            console.log('?')
            break
        }
    }
}

function get_world_20_12t0(o) {
    if (f32(o + 44) !== 1 || f32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) || u16(o + 72) || u16(o + 74) !== 257 || f32(o + 76) !== 500 || f32(o + 80) !== 1000 || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u8(o + 113) !== 255 || u8(o + 114) !== 255 || u8(o + 115) || u32(o + 116) || u8(o + 120) !== 1 || u8(o + 122) || u8(o + 123) || u32(o + 124)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u16, 72, u16, 74, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u8, 120, u8, 121, u8, 122, u8, 123, u32, 124], o)
    }

}
function get_world_20_12t1(o) {
    if (f32(o + 40) || f32(o + 44) !== 1 || u8(o + 79) || u32(o + 84) || u32(o + 88) || u32(o + 92)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, u32, 84, u32, 88, u32, 92, ], o)
    }

    ä(model_animation_1, u32(o + 64), get_model_animation_1)
    ä(idk, u32(o + 72), get_idk)

}
function get_world_20_12t2(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 68) || u32(o + 80) || u32(o + 88) || u32(o + 92) || u32(o + 96)) {
        ü(1, [u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104], o)
    }
    // if (u32(o+56)===0) {
    // console.log(u32(o+40),u32(o+52),u32(o+84),u32(o+104))
    //     ü(1, [u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104], o)

    // }
    ö(u32(o + 56), get_world_20_12t2_56)
    for (let i = 0; i < u32(o + 60); i++) {
        get_world_20_12t2_64(u32(o + 64) + offset_mid + (i * 4))
    }
    temp_get_world_20_12t2_72 = u32(o + 40)
    ö(u32(o + 72), get_world_20_12t2_72)
    ö(u32(o + 76), get_world_20_12t2_76)

    for (let i = 0; i < u32(o + 104); i++) {
        get_world_20_12t2_100(u32(o + 100) + offset_mid + (i * 4))
    }
}

function get_world_20_12t2_56(o) {// if (u16(o+18)===52685) {
// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16,u8, 17,u16, 18, u32, 20, u32, 24, u32, 28,
// f32, 32, f32, 36, f32, 40, f32, 44, u8, 48,u8, 49,u16, 50, u32, 52, u32, 56, u32, 60,
// f32, 64, f32, 68, f32, 72, f32, 76, u8, 80,u8, 81,u16,82, u32,84, u32,88, u32,92,
// f32, 96, f32, 100, f32, 104, f32, 108, u8, 112,u8, 113,u16,114, u32, 116, u32, 120, u32, 124,
// f32, 128, f32, 132, f32, 136, f32, 140, u8, 144,u8, 145,u16,156, u32, 148, u32, 152, u32, 156,
// f32, 160, f32, 164, f32, 168, f32, 172, u8, 176,u8, 177,u16,178, u32, 180, u32, 184, u32, 188,], o)   
// }

}

function get_world_20_12t2_64(o) {// ü(1, [u32, 0], o)   
}
function get_world_20_12t2_72(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }

    for (let i = 0; i < temp_get_world_20_12t2_72; i++) {
        get_world_20_12t2_76_12(u32(o + 0) + offset_mid + (i * 4))
    }

    // ö(u32(o + 0), get_world_20_12t2_72_00)
}

function get_world_20_12t2_72_00(o) {// ü(1, [u32, 0], o)
}

function get_world_20_12t2_76(o) {
    if (u16(o + 0) || u16(o + 2) !== 3 || u32(o + 4)) {
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, ], o)
    }
    for (let i = 0; i < u32(o + 8); i++) {// get_world_20_12t2_76_12(u32(o + 12) + offset_mid + (i * 4))
    }

}

function get_world_20_12t2_76_12(o) {// ö(u32(o + 0), get_world_20_12t2_76_12_test)
}

function get_world_20_12t2_100(o) {// ü(1, [u32, 0], o)
}
///////////////////////

function get_world_20_12t3(o) {
    if (f32(o + 44) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    }

    ä(sound_controls, u32(o + 48), get_sound_controls)

}

function get_world_20_12t4(o) {
    if (u32(o + 36) || u32(o + 44) || u32(o + 60) || u32(o + 76) || f32(o + 92) !== 1 || u32(o + 100) || u32(o + 108) || u32(o + 112) || u32(o + 132) || u32(o + 136) || u32(o + 140)) {
        ü(1, [u32, 32, u32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)
    }

    ä(unknown_00, u32(o + 96), get_unknown_00)

    ä(frames, u32(o + 104), get_interfaceframe)

    if (u32(o + 120) === 1) {
        ö(u32(o + 128), get_world_20_12t4_128t1)
    } else if (u32(o + 120) === 0) {//offset to first respawn entry
    } else {
        console.log(u32(o + 120), '?')
    }
}
function get_world_20_12t4_128t1(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}
//////////
function get_world_20_12t5(o) {
    if (f32(o + 32) !== 1 || f32(o + 36) || f32(o + 40) || f32(o + 44) || f32(o + 48) || f32(o + 52) !== 1 || f32(o + 56) || f32(o + 60) || f32(o + 64) || f32(o + 68) || f32(o + 72) !== 1 || f32(o + 76) || f32(o + 80) || f32(o + 84) || f32(o + 88) || f32(o + 92) !== 1 || u8(o + 97) || u8(o + 98) || u8(o + 99) || f32(o + 104) || f32(o + 108)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u8, 96, u8, 97, u8, 98, u8, 99, u32, 100, f32, 104, f32, 108], o)
    }

}
////////
function get_world_20_12t8(o) {
    if (u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)

    }

    if (u32(o + 32) === 0 && u32(o + 76)) {
        switch (u32(o + 76) - u32(o + 72)) {
        case 192:
        case 224:
        case 256:
        case 288:
        case 320:
        case 352:
        case 384:
        case 704:
        case 832:
        case 1120:
        case 1152:
        case 1984:
        case 1568:
        case 2720:
        case 2784:
        case 2880:
        case 2912:
        case 3136:
        case 3168:
        case 3712:
        case 4224:
        case 8224:
        case 9984:
        case 9920:
        case 28512:
        case 2304:
        case 736:
        case 5440:
        case 1792:
        case 2400:
        case 5920:
        case 544:
        case 672:
            break;
        default:
            console.log(u32(o + 72) - u32(o + 76), u32(o + 72) + offset_mid, u32(o + 76) + offset_mid, u32(o + 76) !== 0)

        }
        //     if (u32(o+72) - u32(o+76) === -192) {
        // // ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28,u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
        //     }else if (u32(o+72) - u32(o+76) === -224) {
        // // ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28,u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
        //     }else if (u32(o+72) - u32(o+76) === -256) {
        // // ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28,u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
        //     }else if (u32(o+72) - u32(o+76) === -256) {
        // // ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28,u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
        //     }else if (u32(o+72) - u32(o+76) === -256) {
        // // ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28,u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
        //     }else{
        //      console.log(u32(o+72) - u32(o+76), u32(o+72) + offset_mid,u32(o+76) + offset_mid,u32(o+76) !==0)
        //     }
        // console.log(u32(o+72) - u32(o+76), u32(o+72) + offset_mid,u32(o+76) + offset_mid,u32(o+76) !==0)
    }

    // if (u32(o + 72)) {
    // ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28,u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
    // console.log(` ${u32(o+32)} [32] | ${u32(o+36)} [36] |`)
    // ö(u32(o + 72), get_world_20_12t8_72)
    // }

    /*
    -192 = 
20,22,23,24,441,444,480,493,494,495,496,89,96,98,360,82,108,110,112,114,116,119,121,109,111,113,165,134,135,12,14,15,48,5928,2333,748,740,746,747,4003,4490,5200,5929,5934,5199,5936,5932,3997,4001,4002,5937,5939,575,657,772,774,996,997,998,999,1001,1002,1003,1004,1006,2415,3106,3108,2171,4117,7173,8071,6178,6554,8226,8228,8229,8235,1336,1337,665,666,669,684,716,718,2345,2346,2347,2348,2356,2355,2354,2353,2413,2414,2416,2417,2419,2420,2422,2423,2425,2432,2433,2435,38,1023,1215,1936,1937,1938,1939,3707,19,842,3452,3454,10,28,2437,2249,2250,2436,160,1244,1439,778,1442,2248,2235,2240,2252,2244,4676,5515,6189,25,5101,5103,5105,5558,5118,5124,5128,5129,5130,5131,5688,5690,5695 | u32 | 0 | 5955724
8 | u16 | 4 | 2405808
0 | u16 | 6 | 2405810
0 | u32 | 8 | 2405812
1,0 | u16 | 12 | 5391208
8 | u16 | 14 | 2405818
1,0 | u16 | 16 | 5391212
8 | u16 | 18 | 2405822
0 | u32 | 20 | 2405824
0 | u32 | 24 | 2405828
0 | u32 | 28 | 2405832
0 | u32 | 32 | 2405836
8,7,1 | u32 | 36 | 5391152
0 | u32 | 40 | 2405844
0 | u32 | 44 | 2405848
0 | f32 | 48 | 2405852
0 | f32 | 52 | 2405856
0 | f32 | 56 | 2405860
0 | f32 | 60 | 2405864
0 | f32 | 64 | 2405868
0 | f32 | 68 | 2405872
232176,232384,232592,232800,233008,233216,233424,233632,233840,234048,234256,72832,73104,73312,62864,285056,285264,285472,285680,285888,286096,286304,286512,118496,118704,118912,119120,119328,119536,119744,100752,100960,491664,491872,492080,492288,492496,492704,503776,505504,505712,505920,506848,535584,535792,536000,558880,559088,559296,559504,559712,560736,560944,561152,561360,547792,548000,548512,548720,548928,549136,549344,549552,549760,549968,550176,550384,550592,550800,552544,552752,552960,327152,327360,327568,327792,330928,331136,331344,331552,331760,331968,135584,135792,151008,151216,151616,155120,155328,155536,155744,155952,156160,156368,156576,156784,156992,157200,157408,157616,157824,158032,158240,158448,158656,158864,159072,159280,159488,159696,525728,526208,527376,528352,528560,528768,528976,530768,359008,361168,362160,362368,750704,751184,751632,761840,762048,762256,762464,175648,175856,173856,174064,174272,471232,471680,471888,478576,479344,479824,480352,480832,481040,97232,748736,749216,749696,751088,765792,767360,775968,776176,776384,776592,777616,777824,780432 | u32 | 72 | 5955796
232368,232576,232784,232992,233200,233408,233616,233824,234032,234240,234448,73024,73296,73504,63056,285248,285456,285664,285872,286080,286288,286496,286704,118688,118896,119104,119312,119520,119728,119936,100944,101152,491856,492064,492272,492480,492688,492896,503968,505696,505904,506112,507040,535776,535984,536192,559072,559280,559488,559696,559904,560928,561136,561344,561552,547984,548192,548704,548912,549120,549328,549536,549744,549952,550160,550368,550576,550784,550992,552736,552944,553152,327344,327552,327760,327984,331120,331328,331536,331744,331952,332160,135776,135984,151200,151408,151808,155312,155520,155728,155936,156144,156352,156560,156768,156976,157184,157392,157600,157808,158016,158224,158432,158640,158848,159056,159264,159472,159680,159888,525920,526400,527568,528544,528752,528960,529168,530960,359200,361360,362352,362560,750896,751376,751824,762032,762240,762448,762656,175840,176048,174048,174256,174464,471424,471872,472080,478768,479536,480016,480544,481024,481232,97424,748928,749408,749888,751280,765984,767552,776160,776368,776576,776784,777808,778016,780624 | u32 | 76 | 5955800

-256
3998,3999,4000,2106,1340,39,63,839,3448,18,2243,4677,5102,5104,5560,5399,5122,5132,5563,5562 | u32 | 0 | 5955404
8 | u16 | 4 | 4834896
0 | u16 | 6 | 4834898
0 | u32 | 8 | 4834900
1 | u16 | 12 | 4834904
8 | u16 | 14 | 4834906
1 | u16 | 16 | 4834908
8 | u16 | 18 | 4834910
0 | u32 | 20 | 4834912
0 | u32 | 24 | 4834916
0 | u32 | 28 | 4834920
0 | u32 | 32 | 4834924
7,8 | u32 | 36 | 5390832
0 | u32 | 40 | 4834932
0 | u32 | 44 | 4834936
0 | f32 | 48 | 4834940
0 | f32 | 52 | 4834944
0 | f32 | 56 | 4834948
0 | f32 | 60 | 4834952
0 | f32 | 64 | 4834956
0 | f32 | 68 | 4834960
559920,560192,560464,326480,133696,525936,359584,360560,361888,750912,479552,480560,748944,749424,765216,766480,766752,776800,777072,777344 | u32 | 72 | 5955476
560176,560448,560720,326736,133952,526192,359840,360816,362144,751168,479808,480816,749200,749680,765472,766736,767008,777056,777328,777600 | u32 | 76 | 5955480

        */

    if (u32(o + 36) === 0) {
        if (u32(o + 76)) {
            console.log('?')
        }
    } else if (u32(o + 36) === 1) {
        ö(u32(o + 76), get_world_20_12t8_76t1)
    } else if (u32(o + 36) === 7) {
        ö(u32(o + 76), get_world_20_12t8_76t7)
    } else if (u32(o + 36) === 8) {
        ö(u32(o + 76), get_world_20_12t8_76t8)
    } else {
        console.log(u32(o + 36))
    }
    // 0 = collision?
    // 1 = collision

    //0 = 0
    //1 = 32 b
    // 7 = collisoin?
    // 8 = ?

}
function get_world_20_12t8_72(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16,u8, 17,u16, 18, u32, 20, u32, 24, u32, 28], o)
}

function get_world_20_12t8_76t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_world_20_12t8_76t7(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_world_20_12t8_76t8(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    // both go to unordered

    ö(u32(o + 4), get_world_20_12t8_76t8_04)
    ö(u32(o + 8), get_world_20_12t8_76t8_08)

}

function get_world_20_12t8_76t8_04(o) {
    if (u32(o + 0) || u32(o + 8) !== 1 || u32(o + 12) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(2, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }
}

function get_world_20_12t8_76t8_08(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u16, 4, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ä(unknown_00, u32(o + 16), get_unknown_00)
    ä(unknown_00, u32(o + 20), get_unknown_00)
}
///////
///////
function get_world_20_12t10(o) {
    if (f32(o + 44) !== 1 || f32(o + 60) !== 1 || u32(o + 80) !== 5000 || u32(o + 88) || u32(o + 92)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
    }
    ä(activator, u32(o + 64), get_activator)

}

//////////
function get_world_20_12t11(o) {
    if (f32(o + 44) !== 1 || f32(o + 48) || f32(o + 56) || f32(o + 60) !== 1 || u32(o + 72) || u32(o + 76)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }
    ö(u32(o + 68), get_world_20_12t11_68)

}

function get_world_20_12t11_68(o) {
    if (u16(o + 4)) {
        ü(1, [u32, 0, u16, 4, u32, 8, u32, 12], o)
    }
}
/////////
function get_world_20_12t13(o) {
    if (f32(o + 44) !== 1 || f32(o + 68) !== 500 || u8(o + 72) || u8(o + 74) || u8(o + 75) || u8(o + 76) || u8(o + 78) || u8(o + 79) || f32(o + 80) || f32(o + 84) || f32(o + 88) || f32(o + 92)) {
        ü(0, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, f32, 84, f32, 88, f32, 92], o)
    }
    ä(idk, u32(o + 64), get_idk)
}

function get_world_20_12t14(o) {
    if (f32(o + 44) !== 1 || f32(o + 68) || u8(o + 77) || u8(o + 78) || u8(o + 79)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, f32, 72, u8, 76, u8, 77, u8, 78, u8, 79], o)
    }
    ö(u32(o + 64), get_strange)

}
//////////////////////
function get_world_20_12t15(o) {
    if (f32(o + 44) !== 1 || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) || u8(o + 71) || u8(o + 72) !== 1 || u8(o + 74) !== 1 || u8(o + 75) !== 1 || u32(o + 76)) {
        ü(1, [f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76], o)
    }

    ö(u32(o + 56), get_object)

}
///////
function get_wtf(o) {
    // ü(0, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_wtf_04)
    ö(u32(o + 8), get_wtf_08)
    ö(u32(o + 12), get_wtf_12)
}

function get_wtf_04(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_wtf_08(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_wtf_08_00)

    if (u32(o + 8)) {

        if (u32(o + 4) === 1) {
            ö(u32(o + 8), get_wtf_08_08t1)
        } else if (u32(o + 4) === 3) {
            ö(u32(o + 8), get_wtf_08_08t3)
        } else {
            console.log(u32(o + 4))
        }
    }

}
function get_wtf_08_00(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_wtf_08_00_04)
    ö(u32(o + 12), get_wtf_08_00_12)

}

function get_wtf_08_00_04(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_wtf_08_00_12(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_wtf_08_08t1(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_wtf_08_08t1_00)
    ö(u32(o + 8), get_wtf_08_08t1_08)
}

function get_wtf_08_08t1_00(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_wtf_08_08t1_00_04)
    ö(u32(o + 12), get_wtf_08_08t1_00_12)

}
function get_wtf_08_08t1_00_04(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_wtf_08_08t1_00_12(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    }
}

function get_wtf_08_08t1_08(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 8), get_wtf_08_08t1_08_08)
    ö(u32(o + 12), get_gate)

}

function get_wtf_08_08t1_08_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_wtf_08_08t3(o) {
    if (u32(o + 4) !== 1 || u32(o + 16) !== 1 || u32(o + 28) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }
    ö(u32(o + 0), get_wtf_08_08t3_00)
    ö(u32(o + 8), get_wtf_08_08t3_08)
    ö(u32(o + 12), get_wtf_08_08t3_12)
    ö(u32(o + 20), get_wtf_08_08t3_20)
    ö(u32(o + 24), get_wtf_08_08t3_24)
    ö(u32(o + 32), get_wtf_08_08t3_32)

}

function get_wtf_08_08t3_00(o) {
    // ü(0, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_wtf_08_08t3_00_04)
    ö(u32(o + 12), get_wtf_08_08t3_00_12)
}

function get_wtf_08_08t3_00_04(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_wtf_08_08t3_00_12(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 4) !== 312111030 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_wtf_08_08t3_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 8), get_wtf_08_08t3_08_08)
    ö(u32(o + 20), get_wtf_08_08t3_08_20)
}

function get_wtf_08_08t3_08_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== -1.7999999523162842 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_wtf_08_08t3_08_20(o) {
    if (f32(o + 4) !== 1.7000000476837158 || f32(o + 12) || f32(o + 20) !== 1.899999976158142 || f32(o + 28) || f32(o + 36) || f32(o + 40) || f32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
    }
}

function get_wtf_08_08t3_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_wtf_08_08t3_12_04)

}

function get_wtf_08_08t3_12_04(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    }
}

function get_wtf_08_08t3_20(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 20 || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 8), get_wtf_08_08t3_20_08)

}

function get_wtf_08_08t3_20_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_wtf_08_08t3_24(o) {
    if (u32(o + 0) !== 1) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_wtf_08_08t3_24_04)
    ö(u32(o + 12), get_wtf_08_08t3_24_12)
}

function get_wtf_08_08t3_24_04(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_wtf_08_08t3_24_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 312101502 || u32(o + 8) !== 312171036 || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    }
}

function get_wtf_08_08t3_32(o) {
    if (u8(o + 0) || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 8), get_wtf_08_08t3_32_08)

}

function get_wtf_08_08t3_32_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
}
function get_wtf_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_wtf_12_00)
}

function get_wtf_12_00(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_wtf_12_00_04)
}
function get_wtf_12_00_04(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

///////
function get_object(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 10) || u8(o + 57) !== 1 || u8(o + 59) || u32(o + 64) || u32(o + 72) || f32(o + 80) || u8(o + 84) !== 1 || u8(o + 86) || u8(o + 87) || u32(o + 92) || u32(o + 104) || u8(o + 108) !== 255 || u8(o + 109) !== 255 || u8(o + 110) !== 255 || u8(o + 111) !== 255) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u8, 108, u8, 109, u8, 110, u8, 111, ], o)
    }
    ö(u32(o + 12), get_object_12)

    ä(model_animation_2, u32(o + 16), get_model_animation_2)

    switch (u8(o + 11)) {
    case 15:
        ö(u32(o + 32), get_object_32t15)
        break;
    case 16:
        ö(u32(o + 32), get_object_32t16)
        break;
    case 17:
        ö(u32(o + 32), get_object_32t17)
        break;
    case 18:
        ö(u32(o + 32), get_object_32t18)
        break;
    }
    ä(unknown_00, u32(o + 48), get_unknown_00)
    ä(texts, u32(o + 60), get_text)
    ä(unknown_00, u32(o + 68), get_unknown_00)

    ö(u32(o + 88), get_wtf)

    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 64), get_mys_a)
    }

}

function get_object_12(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }

    ö(u32(o + 16), get_object_12_16)

}

function get_object_12_16(o) {
    if (u8(o + 0) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || f32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)
    }
}

function get_object_32t15(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 28), get_object_32t15_04)
    }
    ä(unknown_00, u32(o + 8), get_unknown_00)
    ä(nothing, u32(o + 12), get_nothing)

}

function get_object_32t15_04(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12,u32, 16,u32, 20,f32, 24], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_object_32t15_04_04)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_object_32t15_04_04)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_object_32t15_04_04)
    }

}

function get_object_32t15_04_04(o) {
    if (u8(o + 10) || u8(o + 11)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, ], o)
    }

    ä(um, u32(o), get_um)
    ä(um, u32(o + 4), get_um)

}
function get_um(o) {
    if (u32(o + 8) !== 1500 || u32(o + 12) || u32(o + 16) || u8(o + 25) || u8(o + 26) || u8(o + 27) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, ], o)
    }

    for (let i = 0; i < u32(o); i++) {
        get_mys_a(u32(o + 4) + offset_mid + (i * 64))
    }

}

function get_nothing(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_object_32t16(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_object_32t17(o) {
    if (u32(o + 0) || u32(o + 4) !== 100 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}
function get_object_32t18(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o), get_object_32t18_00)

}

function get_object_32t18_00(o) {
    if (u32(o + 0) !== 5000 || u32(o + 4) !== 1 || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_mys_a)
    }
}
/////

///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
function get_world_24(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
    }

    for (let i = 0; i < u32(o + 0); i++) {
        get_world_24_04(u32(o + 4) + offset_mid + (i * 4))
    }
    for (let i = 0; i < u32(o + 8); i++) {
        get_world_24_12(u32(o + 12) + offset_mid + (i * 4))
    }

}

function get_world_24_04(o) {
    // ü(1, [u32, 0], o)
    ä(flag, u32(o + 0), get_flag)
}
function get_world_24_12(o) {
    ä(varible, u32(o + 0), get_var)

}
///////////////
/////////////
function get_world_32(o) {
    // ü(1, [u32, 0], o)
    ö(u32(o + 0), get_gate)

}

function get_gate(o) {
    if (u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 20) || f32(o + 40) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || u32(o + 100) || u8(o + 104) || u8(o + 106) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124)) {
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u8, 104, u8, 105, u8, 106, u8, 107, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    }

    ö(u32(o + 24), get_gate_24)

    ä(unknown_00, u32(o + 28), get_unknown_00)
    ä(unknown_00, u32(o + 36), get_unknown_00)

    for (let i = 0; i < u32(o + 60); i++) {
        ä(unknown, u32(o + 64) + (i * 4), get_unknown)
    }

    ä(sound_player, u32(o + 76), get_sound_player)
    ä(sound_controls, u32(o + 80), get_sound_controls)

    ö(u32(o + 84), get_gate_84)
}

function get_gate_24(o) {
    if (f32(o + 0) !== 0.3499999940395355 || f32(o + 4) !== 1.2999999523162842 || f32(o + 8) || f32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_gate_84(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) !== 40 || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_gate_84_04)

}

function get_gate_84_04(o) {
    if (u8(o + 0) !== 3 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 50 || u32(o + 8) !== 35 || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_gate_36(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
function get_flag(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 32) || u32(o + 36) || u8(o + 40) !== 1 || u8(o + 41) || u8(o + 42) || u8(o + 43) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, u32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44], o)
    }
    // console.log(get_string(u32(o+4) + offset_mid, 0, false))

    if (u8(o + 8) === 0) {
        if (u32(o + 12)) {
            console.log("?")
        }
        // nothnig
    } else if (u8(o + 8) === 2) {
        ö(u32(o + 12), get_flag_12t2)
    } else if (u8(o + 8) === 3) {
        ö(u32(o + 12), get_flag_12t3)
    } else if (u8(o + 8) === 4) {
        ö(u32(o + 12), get_flag_12t4)
    } else {
        console.log('?')
    }
}

function get_flag_12t2(o) {
    if (u8(o + 1) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
    }
}
function get_flag_12t3(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 106) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 12), get_flag_12t3_12)

}

function get_flag_12t3_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 24)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 24], o)
    }
}
function get_flag_12t4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
function get_var(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 156) || u32(o + 160) || u32(o + 172)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172], o)
    }

    // u32(o + 140) ? console.log(get_string(u32(o+140) + offset_mid, 0, false)) : 0
    // u32(o + 152) ? console.log(get_string(u32(o+152) + offset_mid, 0, false)) : 0

    ö(u32(o + 148), get_var_148)

    ö(u32(o + 164), get_var_164)
    ö(u32(o + 168), get_var_168)

}

function get_var_148(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ä(varible, u32(o + 0), get_var)

}
function get_var_164(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        get_var_164_12(u32(o + 12) + offset_mid + (i * 24))
    }
    for (let i = 0; i < u32(o + 16); i++) {
        get_var_164_20(u32(o + 20) + offset_mid + (i * 8))
    }
}

function get_var_164_12(o) {
    if (u32(o + 12) === 0) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)
    }

    // console.log(get_string(u32(o + 0) + offset_mid, 0, false))
    // console.log(get_string(u32(o + 8) + offset_mid, 0, false))

    if (u32(o + 4) === 1) {
        ö(u32(o + 12), get_var_164_12_12t1)
    } else if (u32(o + 4) === 2) {

        ö(u32(o + 12), get_var_164_12_12t2)
    } else if (u32(o + 4) === 5) {
        ö(u32(o + 12), get_var_164_12_12t5)

    } else if (u32(o + 4) === 6) {
        ö(u32(o + 12), get_var_164_12_12t6)

    } else if (u32(o + 4) === 7) {
        ö(u32(o + 12), get_var_164_12_12t7)

    } else if (u32(o + 4) === 8) {
        ö(u32(o + 12), get_var_164_12_12t8)
    } else if (u32(o + 4) === 14) {
        ö(u32(o + 12), get_var_164_12_12t14)
    } else if (u32(o + 4) === 15) {
        ö(u32(o + 12), get_var_164_12_12t15)
    } else if (u32(o + 4) === 16) {
        ö(u32(o + 12), get_var_164_12_12t16)
    } else if (u32(o + 4) === 24) {
        ö(u32(o + 12), get_var_164_12_12t24)
    } else {
        console.log('?')
    }

}

function get_var_164_12_12t1(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 0), get_var_164_12_12t1_00)
}

function get_var_164_12_12t1_00(o) {
    if (u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 0), get_var_164_12_12t1_00_00)
}

function get_var_164_12_12t1_00_00(o) {
    if (u32(o + 0) || u8(o + 8) !== 4 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_12_12t2(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    switch (u32(o)) {
    case 1:
        ö(u32(o + 4), get_var_164_12_12t2_04t1)
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        ö(u32(o + 4), get_var_164_12_12t2_04t4)
        break;
    case 7:
        ö(u32(o + 4), get_var_164_12_12t2_04t7)
        break;
    case 8:
        ö(u32(o + 4), get_var_164_12_12t2_04t8)
        break;
    case 16:
        ö(u32(o + 4), get_var_164_12_12t2_04t16)
        break;
    default:
        console.log('?')
    }

}

function get_var_164_12_12t2_04t1(o) {
    if (u8(o + 0) || u8(o + 3) || f32(o + 4)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)
    }
    ö(u32(o + 12), get_var_164_12_12t2_04t1_12)
    ö(u32(o + 16), get_var_164_12_12t2_04t1_16)
    ö(u32(o + 20), get_var_164_12_12t2_04t1_16)

}

function get_var_164_12_12t2_04t1_12(o) {
    if (f32(o + 0) !== 20 || f32(o + 4) !== 9 || f32(o + 8) !== 3 || u32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
    }
}

function get_var_164_12_12t2_04t1_16(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u8(o + 8) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 12) || u32(o + 12) || u32(o + 12) || u32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 12, u32, 12, u32, 12, u32, 28], o)
    }

    if (u8(o + 4) === 1) {
        ö(u32(o + 0), get_var_164_12_12t2_04t1_16_00t1)
    } else if (u8(o + 4) === 10) {
        ö(u32(o + 0), get_var_164_12_12t2_04t1_16_00t10)
    } else if (u8(o + 4) === 11) {
        ö(u32(o + 0), get_var_164_12_12t2_04t1_16_00t11)
    } else {
        console.log("?")
    }

}

function get_var_164_12_12t2_04t1_16_00t1(o) {
    if (u16(o + 4) !== 1) {
        ü(1, [f32, 0, u16, 4, u16, 6, f32, 8, u32, 12], o)
    }
}
function get_var_164_12_12t2_04t1_16_00t10(o) {
    if (u16(o + 4) !== 10) {
        ü(1, [f32, 0, u16, 4, u16, 6, f32, 8, u32, 12], o)
    }
}
function get_var_164_12_12t2_04t1_16_00t11(o) {
    if (u16(o + 4) !== 11) {
        ü(1, [f32, 0, u16, 4, u16, 6, f32, 8, u32, 12], o)
    }
}

function get_var_164_12_12t2_04t4(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 20) || u8(o + 21) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 16), get_var_164_12_12t2_04t4_16)

}

function get_var_164_12_12t2_04t4_16(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }

    if (u8(o + 8) === 1) {
        if (u32(o + 4) === 1) {
            ö(u32(o), get_var_164_12_12t2_04t4_16_00t1)
        } else if (u32(o + 4) === 8) {
            ö(u32(o), get_var_164_12_12t2_04t4_16_00t8)
        } else if (u32(o + 4) === 10) {
            ö(u32(o), get_var_164_12_12t2_04t4_16_00t10)
        } else if (u32(o + 4) === 13) {
            ö(u32(o), get_var_164_12_12t2_04t4_16_00t13)
        } else if (u32(o + 4) === 14) {
            ö(u32(o), get_var_164_12_12t2_04t4_16_00t14)
        } else if (u32(o + 4) === 15) {
            ö(u32(o), get_var_164_12_12t2_04t4_16_00t15)
        } else {
            console.log("?")
        }
    }
}

function get_var_164_12_12t2_04t4_16_00t1(o) {
    if (u16(o + 4) !== 1) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}
function get_var_164_12_12t2_04t4_16_00t8(o) {
    if (u16(o + 4) !== 8) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}
function get_var_164_12_12t2_04t4_16_00t10(o) {
    if (u16(o + 4) !== 10) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}
function get_var_164_12_12t2_04t4_16_00t13(o) {
    if (u16(o + 4) !== 13) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}
function get_var_164_12_12t2_04t4_16_00t14(o) {
    if (u16(o + 4) !== 14) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}
function get_var_164_12_12t2_04t4_16_00t15(o) {
    if (u16(o + 4) !== 15) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_12_12t2_04t7(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}
function get_var_164_12_12t2_04t8(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 16), get_var_164_12_12t2_04t8_16)

}

function get_var_164_12_12t2_04t8_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u8(o + 8) !== 4 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_12_12t2_04t16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u8(o + 20) || u8(o + 21) || u8(o + 22) !== 1 || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, ], o)
    }

    ä(flag, u32(o + 24), get_flag)

}

function get_var_164_12_12t5(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 4), get_var_164_12_12t5_04)

}

function get_var_164_12_12t5_04(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 8), get_var_164_12_12t5_04_08)
}

function get_var_164_12_12t5_04_08(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_var_164_12_12t6(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
    }
    if (u8(o + 4) === 1) {
        ö(u32(o + 0), get_var_164_12_12t6_00t1)
    } else if (u8(o + 4) === 2) {
        ö(u32(o + 0), get_var_164_12_12t6_00t2)
    } else {
        if (u32(o)) {
            console.log('?')
        }
    }

}

function get_var_164_12_12t6_00t1(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
    }

    ä(frames, u32(o + 0), get_interfaceframe)

    ö(u32(o + 8), get_var_164_12_12t6_00t1_08)

}

function get_var_164_12_12t6_00t1_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_var_164_12_12t6_00t2(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
    ä(frames, u32(o + 4), get_interfaceframe)
}

function get_var_164_12_12t7(o) {
    if (u8(o + 8) !== 3 || u8(o + 9) !== 2 || u8(o + 10) !== 1 || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
    ö(u32(o + 0), get_var_164_12_12t7_00)
    ö(u32(o + 4), get_object)
}

function get_var_164_12_12t7_00(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u8(o + 8) !== 4 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_12_12t8(o) {
    if (u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }

    if (u8(o + 10) === 0) {// ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    } else if (u8(o + 10) === 2) {
        ä(flag, u32(o + 4), get_flag)
    } else if (u8(o + 10) === 3) {
        ö(u32(o + 4), get_var_164_12_12t8_04t3)
    } else {
        console.log("?")
    }

    if (u8(o + 8) === 1) {
        //1 = offset
        ä(flag, u32(o + 0), get_flag)
    } else if (u8(o + 8) === 2) {
        ö(u32(o + 0), get_var_164_12_12t8_00t2)
    } else {
        console.log("?")
    }
}
function get_var_164_12_12t8_04t3(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 2102) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 12), get_var_164_12_12t8_04t3_12)
}

function get_var_164_12_12t8_04t3_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_var_164_12_12t8_00t2(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u32(o + 4)) {
        if (u8(o) === 7) {
            ö(u32(o + 4), get_var_164_12_12t8_00t2_04)
        } else {
            console.log("?")
        }
    }
    ö(u32(o + 12), get_var_164_12_12t8_00t2_12)
}

function get_var_164_12_12t8_00t2_04(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_12_12t8_00t2_12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_var_164_12_12t14(o) {
    if (u8(o + 4) !== 4 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 0), get_var_164_12_12t14_00)
    ö(u32(o + 8), get_var_164_12_12t14_08)
}

function get_var_164_12_12t14_00(o) {
    if (u32(o + 4) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
    if (u8(o + 8) === 1) {
        ö(u32(o + 0), get_var_164_12_12t14_00_00)
    } else {
        if (u32(o)) {
            console.log('?')
        }
    }
}

function get_var_164_12_12t14_00_00(o) {
    //always type 0
    if (u16(o + 4) !== 0) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, ], o)
    }
}

function get_var_164_12_12t14_08(o) {
    //4 type
    if (u16(o + 4) !== 4) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, ], o)
    }
}

function get_var_164_12_12t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_var_164_12_12t16(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ä(varible, u32(o + 0), get_var)
}

function get_var_164_12_12t24(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ä(unknown_00, u32(o + 0), get_unknown_00)

    ö(u32(o + 4), get_var_164_12_12t24_04)

}

function get_var_164_12_12t24_04(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) !== 5 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

///////////////////////
function get_var_164_20(o) {
    // ü(1, [u32, 0, u32, 4], o)

    get_var_164_20_val = u32(o)
    ö(u32(o + 4), get_var_164_20_04)
    get_var_164_20_val = undefined

}

function get_var_164_20_04(o) {
    if (u32(o + 0) || u32(o + 4)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
    // u32(o + 8) ? console.log(get_string(u32(o+8) + offset_mid, 0, false)) : 0

    if (get_var_164_20_val === 1604) {
        ö(u32(o + 12), get_var_164_20_04_12t1604)
    } else if (get_var_164_20_val === 1608) {
        ö(u32(o + 12), get_var_164_20_04_12t1608)
    } else if (get_var_164_20_val === 1618) {
        ö(u32(o + 12), get_var_164_20_04_12t1618)
    } else if (get_var_164_20_val === 1620) {
        ö(u32(o + 12), get_var_164_20_04_12t1620)
    } else if (get_var_164_20_val === 1636) {
        ö(u32(o + 12), get_var_164_20_04_12t1636)
    } else {
        ü(1, [u32, 0, u32, 4], o)
        console.log('?')
    }

    for (let i = 0; i < u32(o + 16); i++) {
        get_var_164_20_04_20(u32(o + 20) + offset_mid + (i * 12))
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 24), get_var_164_12)
    }

}
function get_var_164_20_04_12t1604(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_var_164_20_04_12t1608(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    if (u8(o) === 0) {
        ä(frames, u32(o + 4), get_interfaceframe)
    } else if (u8(o) === 2) {
        if (u32(o + 4)) {
            console.log("?")
        }
    } else {
        console.log("?", 'a')
    }
    ö(u32(o + 8), get_var_164_20_04_12t1608_08)

}

function get_var_164_20_04_12t1608_08(o) {
    if (u16(o + 4) !== 1) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, u32, 84, u32, 88, u32, 92, ], o)
    }
}

function get_var_164_20_04_12t1618(o) {
    if (u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
    if (u8(o + 8) === 0) {
        ä(flag, u32(o + 0), get_flag)
    } else if (u8(o + 8) === 1) {
        ö(u32(o + 0), get_var_164_20_04_12t1618_00t1)
    } else {
        console.log("?")
    }

}
//
function get_var_164_20_04_12t1618_00t1(o) {
    if (u32(o + 0) || u32(o + 4)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 12), get_var_164_20_04_12t1618_00t1_12)
}

function get_var_164_20_04_12t1618_00t1_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_var_164_20_04_12t1620(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_var_164_20_04_12t1620_00)
    ö(u32(o + 8), get_var_164_20_04_12t1620_08)

}

function get_var_164_20_04_12t1620_00(o) {
    if (u32(o + 0) || u8(o + 8) !== 4 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_20_04_12t1620_08(o) {
    if (u16(o + 4) !== 8) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, u32, 52, f32, 56, f32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, ], o)
    }
}

function get_var_164_20_04_12t1636(o) {
    if (u8(o + 4) !== 5 || u8(o + 5) !== 2 || u8(o + 6) !== 2 || u8(o + 7) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_var_164_20_04_12t1636_00)

}

function get_var_164_20_04_12t1636_00(o) {
    if (u32(o + 0) !== 11 || u32(o + 4) !== 15 || u8(o + 8) !== 2 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_20_04_20(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    // u32(o+4) ? console.log(get_string(u32(o+4) + offset_mid, 0, false)) : 0
    if (u32(o) === 5) {
        ö(u32(o + 8), get_var_164_20_04_20_08t5)
    } else if (u32(o) === 6) {
        ö(u32(o + 8), get_var_164_20_04_20_08t6)
    } else {
        error.log("?")
    }

}
function get_var_164_20_04_20_08t5(o) {
    if (u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
    // console.log(u8(o+8),u8(o+9),u8(o+10),)
    if (u8(o + 8) === 0) {
        ä(flag, u32(o + 0), get_flag)
    } else if (u8(o + 8) === 1) {
        ö(u32(o + 0), get_var_164_20_04_20_08t5_00t1)
    } else {
        error.log("?")
    }
}

function get_var_164_20_04_20_08t5_00t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 4), get_var_164_20_04_20_08t5_00t1_04)
    ö(u32(o + 12), get_var_164_20_04_20_08t5_00t1_12)

}

function get_var_164_20_04_20_08t5_00t1_04(o) {
    if (u32(o + 0) || u8(o + 8) !== 5 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_20_04_20_08t5_00t1_12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_var_164_20_04_20_08t6(o) {
    if (u8(o + 4) || u8(o + 5) !== 8 || u8(o + 6) || u8(o + 7) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 0), get_var_164_20_04_20_08t6_00)
    ö(u32(o + 8), get_var_164_20_04_20_08t6_08)
}

function get_var_164_20_04_20_08t6_00(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) !== 4 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

function get_var_164_20_04_20_08t6_08(o) {
    if (u16(o + 4) !== 8) {
        ü(1, [u32, 0, u16, 4, u16, 6, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    }
}

//////
function get_var_168(o) {
    if (u32(o + 0) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_var_164_12)
    }

}
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
function get_unordered_world(o) {

    if (log_array.unordered === 0) {
        log_array.unordered = o
    } else {
        if (log_array.unordered > o) {
            log_array.unordered = o
        }
    }

    if (u32(o + 0) !== 4 || f32(o + 28) !== 10000000 || f32(o + 32) !== 10000000 || u16(o + 80) || u16(o + 82) !== 100 || u32(o + 84) || u32(o + 92) || u32(o + 96) || u32(o + 100) || f32(o + 104) !== 0.0010000000474974513 || f32(o + 108) !== 1 || f32(o + 112) !== 1 || f32(o + 116) !== 1 || f32(o + 120) !== 0.5 || u8(o + 124) || u8(o + 125) || u8(o + 127) || u32(o + 128) || u32(o + 132) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 200) || u32(o + 204)) {
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u16, 80, u16, 82, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, f32, 104, f32, 108, f32, 112, f32, 116, f32, 120, u8, 124, u8, 125, u8, 126, u8, 127, u32, 128, u32, 132, u32, 136, f32, 140, f32, 144, f32, 148, f32, 152, f32, 156, f32, 160, f32, 164, f32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, ], o)
    }

    for (let i = 0; i < u32(o); i++) {
        get_unordered_world_04(u32(o + 4) + offset_mid + (i * 64))
    }

    ö(u32(o + 12), get_unordered_world_12)
    ö(u32(o + 36), get_unordered_world_36)
    ö(u32(o + 48), get_unordered_world_48)
    ö(u32(o + 52), get_unordered_world_52)
    ö(u32(o + 56), get_unordered_world_56)
    ö(u32(o + 60), get_unordered_world_60)
    ö(u32(o + 64), get_unordered_world_64)
    ö(u32(o + 68), get_unordered_world_68)
    ö(u32(o + 72), get_unordered_world_72)
    ä(fonts, u32(o + 88), get_fonts)

    ö(u32(o + 192), get_unordered_world_192)
    ö(u32(o + 196), get_unordered_world_196)

}

function get_unordered_world_04(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u8(o + 11) !== 255 || f32(o + 12) !== 50 || f32(o + 32) || f32(o + 36) || f32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || f32(o + 52) !== 0.5 || f32(o + 56) || f32(o + 60)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
    }
}

function get_unordered_world_12(o) {
    if (f32(o + 0) || f32(o + 4) !== 2000000000 || f32(o + 8) || f32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
    }
}
function get_unordered_world_36(o) {
    if (f32(o + 4) || f32(o + 8) || f32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_unordered_world_48(o) {
    if (f32(o + 4) !== 250 || f32(o + 12)) {
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12], o)
    }
    ö(u32(o), get_unordered_world_48_00)
}

function get_unordered_world_48_00(o) {
    if (u8(o + 3) || f32(o + 4) || f32(o + 8) || f32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_unordered_world_52(o) {
    if (u8(o + 3) || f32(o + 4) || f32(o + 8) || f32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12], o)
    }
}
function get_unordered_world_56(o) {
    if (u8(o + 3) !== 255 || f32(o + 4) || f32(o + 8) || f32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_unordered_world_60(o) {
    if (u8(o + 3) !== 255 || f32(o + 4) || f32(o + 8) || f32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12], o)
    }
}
function get_unordered_world_64(o) {
    if (f32(o + 12)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
    }
}

function get_unordered_world_68(o) {
    if (f32(o + 0) !== 105 || f32(o + 4) !== 15 || f32(o + 8) !== 0.5 || f32(o + 12) !== 2 || f32(o + 16) || f32(o + 20) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }
}

function get_unordered_world_72(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_unordered_world_192(o) {
    if (u32(o + 8) !== 500 || u32(o + 36) !== 12 || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }

    ä(frames, u32(o + 0), get_interfaceframe)
    ä(frames, u32(o + 4), get_interfaceframe)

    ö(u32(o + 24), get_car_main)
    ö(u32(o + 28), get_car_main)
    ö(u32(o + 32), get_car_main)

    for (let i = 0; i < u32(o + 36); i++) {
        get_unordered_world_192_40(u32(o + 40) + offset_mid + (i * 8))
    }

}

function get_unordered_world_192_40(o) {// ü(1, [u32, 0, u32, 4], o)
}

function get_unordered_world_196(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
    ö(u32(o + 4), get_unordered_world_196_04)
    ö(u32(o + 8), get_unordered_world_196_04)
    ö(u32(o + 12), get_unordered_world_196_04)
    ö(u32(o + 16), get_unordered_world_196_04)
}

function get_unordered_world_196_04(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }

    for (let i = 0; i < u32(o); i++) {
        get_unordered_world_196_04_04(u32(o + 4) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(o + 8); i++) {
        get_unordered_world_196_04_04(u32(o + 12) + offset_mid + (i * 12))
    }

}

function get_unordered_world_196_04_04(o) {// ü(1, [f32, 0, f32, 4, f32, 8], o)
}

//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
function get_strange(o) {
    if (u8(o + 8) !== 1 || u8(o + 11) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
    }
    for (let i = 0; i < u32(o); i++) {
        ä(unknown, u32(o + 4) + (i * 4), get_unknown)
    }
    ä(sound_controls, u32(o + 28), get_sound_controls)
}
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
function get_idk(o) {
    if (u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76)) {
        ü(0, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)
    }

    switch (u8(o)) {
    case 0:
        ä(models_array, u32(o + 4), get_models)
        break;
    case 1:
        ä(model_link, u32(o + 4), get_model_link)
        break;
    default:
        console.log(u8(o))
    }

    ä(model_animation_2, u32(o + 8), get_model_animation_2)

    ö(u32(o + 12), get_idk_12)

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_idk_20)
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_mys_a)
    }
}

function get_idk_12(o) {
    if (u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u8(o + 14) || u8(o + 15) || u32(o + 24) || u32(o + 36) || u32(o + 40) || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 72) || u32(o + 76)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }

    ö(u32(o + 16), get_idk_12_16)
    ä(models_array, u32(o + 20), get_models)

    ö(u32(o + 28), get_wtf)

    ö(u32(o + 44), get_gate)

    ä(unknown, u32(o + 68), get_unknown)
}

function get_idk_12_16(o) {
    if (f32(o + 12) || f32(o + 28) || f32(o + 36) || f32(o + 40) || f32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
    }
}

function get_idk_20(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 20)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_idk_20_08)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 32), get_idk_20_16)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 64), get_mys_a)
    }

}

function get_idk_20_08(o) {
    if (f32(o + 0) || f32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_idk_20_16(o) {
    if (u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28, ], o)
    }
}

//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////

/////car

function get_xdx_interface(o) {
    ö(u32(o + 4), get_interfaceframe_04)

    for (i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 28), get_xdx_interface_12)
    }

    ö(u32(o + 48), get_interfaceframe_48)
    ö(u32(o + 56), get_xdx_interface_56)

    ä(sound_controls, u32(o + 28), get_sound_controls)
    ä(sound_controls, u32(o + 36), get_sound_controls)
    ä(sound_controls, u32(o + 40), get_sound_controls)
    ä(sound_controls, u32(o + 52), get_sound_controls)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 104), get_xdx_interface_72)
    }

    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
}

function get_xdx_interface_72(o) {
    if (u32(o + 4) || u8(o + 61) || u8(o + 62) || u8(o + 63) || u32(o + 68) || u32(o + 80) !== 4294967295 || u32(o + 84) !== 4294967295 || u32(o + 88) !== 4294967295 || u32(o + 92) !== 4294967295 || u32(o + 96) !== 4294967295 || u32(o + 100) !== 4294967295) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100], o)
    }

    if (u32(o + 20) && u32(o + 12) !== 4) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100], o)
    }

    // console.log(get_string(u32(o) + offset_mid, 0, false))
    ö(u32(o + 8), get_interfaceframe_72_08)

    switch (u32(o + 12)) {
    case 4:
        ö(u32(o + 20), get_interfaceframe_72_20t4)
        break;
    case 7:
        ö(u32(o + 20), get_interfaceframe_72_20t7)
        break;
    case 38:
    case 106:
    case 107:
        ö(u32(o + 20), get_interfaceframe_72_20t38)
        break;
    default:
        u32(o + 20) ? console.log("is value") : null
    }

    switch (u8(o + 19)) {
    case 0:
        ö(u32(o + 24), get_interfaceframe_72_24t0)
        break;
    case 1:
        ö(u32(o + 24), get_interfaceframe_72_24t1)
        break;
    case 3:
        ö(u32(o + 24), get_interfaceframe_72_24t3)
        break;
    case 5:
        ö(u32(o + 24), get_interfaceframe_72_24t5)
        break;
    case 6:
    case 7:
        ö(u32(o + 24), get_interfaceframe_72_24t6)
        break;
    case 10:
        ö(u32(o + 24), get_interfaceframe_72_24t10)
        break;
    case 12:
        ö(u32(o + 24), get_interfaceframe_72_24t1)
        break;
    case 13:
        ö(u32(o + 24), get_interfaceframe_72_24t13)
        break;
    case 14:
        ö(u32(o + 24), get_interfaceframe_72_24t14)
        break;
    case 15:
        ö(u32(o + 24), get_interfaceframe_72_24t15)
        break;
    default:
        u32(o + 24) ? console.log('offset') : console.log('no offset')
    }

    ö(u32(o + 36), get_interfaceframe_72_32)
    ö(u32(o + 48), get_interfaceframe_72_44)

    if (u32(o + 52) && u8(o + 33) !== 3) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96], o)
    }

    ö(u32(o + 56), get_interfaceframe_72_52)

    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 12), get_interfaceframe_72_72)
    }
}

function get_xdx_interface_56(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 0), get_xdx_interface_56_00)
    //color

}

function get_xdx_interface_56_00(o) {
    if (u32(o + 0) !== 1769174349 || u32(o + 4) !== 99 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12(o) {

    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    switch (u32(o)) {
    case 1026:
        ö(u32(o + 4), get_xdx_interface_12_04t1026)
        break
    case 1027:
        ö(u32(o + 4), get_xdx_interface_12_04t1027)
        break
    default:
        (u32(o + 4)) ? ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o) : 'no value'
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_xdx_interface_12_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_xdx_interface_12_24)
    }

}

function get_xdx_interface_12_04t1026(o) {
    if (u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    } else if (u8(o) === 2 && u32(o + 8) === 0) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }

    ö(u32(o + 8), get_xdx_interface_12_04t1026_08)

}

function get_xdx_interface_12_04t1026_08(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_xdx_interface_12_04t1026_08_04)
}

function get_xdx_interface_12_04t1026_08_04(o) {
    if (u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_xdx_interface_12_04t1027(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_16(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    }
    ö(u32(o + 4), get_xdx_interface_12_04t1026)

}

function get_xdx_interface_12_24(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 32)) {
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)
    }

    switch (u8(o)) {
    case 1:
    case 31:
        ä(frames, u32(o + 4), get_interfaceframe)
        break;
    case 2:
    case 6:
        ö(u32(o + 8), get_xdx_interface_12_24_08)
        break;
    case 11:
        ö(u32(o + 4), get_xdx_interface_12_24_04t11)
        break;
    default:
        u32(o + 4) ? console.log("?") : 'no value / offset'
    }

    ä(sound_controls, u32(o + 24), get_sound_controls)

}

function get_xdx_interface_12_24_08(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o), get_xdx_interface_12_24_08_00)
    ö(u32(o + 4), get_xdx_interface_12_24_08_00)

}
function get_xdx_interface_12_24_08_00(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_24_04t11(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_xdx_interface_12_24_04t11_04)
    }

}
function get_xdx_interface_12_24_04t11_04(o) {

    if (u32(o) === 0) {
        ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_04t0)
    } else if (u32(o) === 1 || u32(o) === 2) {
        ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_04t1)
    } else if (u32(o) === 3 && fileextension === "xdx") {
        ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_04t0)
    } else if (u32(o) === 3 && file_version === 249) {
        ä(sound_controls, u32(o + 4), get_sound_controls)
    } else {
        ü(1, [u32, 0, u32, 4], o)
    }

}

function get_xdx_interface_12_24_04t11_04_04t0(o) {
    if (u8(o + 5) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_24_04t11_04_04t1(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }

    ö(u32(o), get_xdx_interface_12_24_04t11_04_04t1_00)
    ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_04t1_04)
}

function get_xdx_interface_12_24_04t11_04_04t1_00(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_04t1_00_04)
}

function get_xdx_interface_12_24_04t11_04_04t1_00_04(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_24_04t11_04_04t1_04(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_24_04t11_04_00(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_24_04t11_04_08t0(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u16, 6, u32, 8, u32, 12], o)
    }
}

function get_xdx_interface_12_24_04t11_04_08t1(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o), get_xdx_interface_12_24_04t11_04_08t1_00)
    ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_08t1_00_04)

}
function get_xdx_interface_12_24_04t11_04_08t1_00(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_08t1_00_04)

}
function get_xdx_interface_12_24_04t11_04_08t1_00_04(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe(o) {
    if (u32(o + 32) || u32(o + 48) === 0 || u32(o + 64) || u32(o + 76)) {
        ü(0, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

    if (fileextension == 'xdx' || file_version === 249) {
        get_xdx_interface(o)
        return
    }

    ö(u32(o + 4), get_interfaceframe_04)

    for (i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 28), get_interfaceframe_12)
    }

    ö(u32(o + 48), get_interfaceframe_48)
    ö(u32(o + 56), get_interfaceframe_56)

    ä(sound_controls, u32(o + 28), get_sound_controls)
    ä(sound_controls, u32(o + 36), get_sound_controls)
    ä(sound_controls, u32(o + 40), get_sound_controls)
    ä(sound_controls, u32(o + 52), get_sound_controls)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 100), get_interfaceframe_72)
    }
}

function get_interfaceframe_12(o) {

    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    switch (u32(o)) {
    case 1026:
        ö(u32(o + 4), get_interfaceframe_12_04t1026)
        break
    case 1027:
        ö(u32(o + 4), get_interfaceframe_12_04t1027)
        break
    default:
        (u32(o + 4)) ? ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o) : 'no value'
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_interfaceframe_12_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_interfaceframe_12_24)
    }

}

function get_interfaceframe_12_04t1026(o) {
    if (u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    } else if (u8(o) === 2 && u32(o + 8) === 0) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }

    ö(u32(o + 8), get_interfaceframe_12_04t1026_08)

}

function get_interfaceframe_12_04t1026_08(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_interfaceframe_12_04t1026_08_04)
}

function get_interfaceframe_12_04t1026_08_04(o) {
    if (u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_interfaceframe_12_04t1027(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_12_16(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    }
    ö(u32(o + 4), get_interfaceframe_12_04t1026)

}

function get_interfaceframe_12_24(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 32)) {
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)
    }

    switch (u8(o)) {
    case 1:
    case 31:
        ä(frames, u32(o + 4), get_interfaceframe)
        break;
    case 2:
    case 6:
        ö(u32(o + 8), get_interfaceframe_12_24_08)
        break;
    case 11:
        ö(u32(o + 4), get_interfaceframe_12_24_04t11)
        break;
    default:
        u32(o + 4) ? console.log("?") : 'no value / offset'
    }

    ä(sound_controls, u32(o + 24), get_sound_controls)

}

function get_interfaceframe_12_24_08(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o), get_interfaceframe_12_24_08_00)
    ö(u32(o + 4), get_interfaceframe_12_24_08_00)

}
function get_interfaceframe_12_24_08_00(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_12_24_04t11(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_interfaceframe_12_24_04t11_04)
    }

}
function get_interfaceframe_12_24_04t11_04(o) {
    if (u16(o + 6)) {
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8], o)
    }

    ö(u32(o), get_interfaceframe_12_24_04t11_04_00)

    switch (u16(o + 4)) {
    case 0:
        ö(u32(o + 8), get_interfaceframe_12_24_04t11_04_08t0)
        break;
    case 1:
        ö(u32(o + 8), get_interfaceframe_12_24_04t11_04_08t1)
        break;
    case 3:
        ä(sound_controls, u32(o + 8), get_sound_controls)
        break;
    case 100:
    case 101:
        ä(frames, u32(o + 8), get_interfaceframe)
        break;
    default:
        u32(o + 8) ? console.log('?') : 'no value'
    }

}

function get_interfaceframe_12_24_04t11_04_00(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_12_24_04t11_04_08t0(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u16, 6, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_12_24_04t11_04_08t1(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o), get_interfaceframe_12_24_04t11_04_08t1_00)
    ö(u32(o + 4), get_interfaceframe_12_24_04t11_04_08t1_00_04)

}
function get_interfaceframe_12_24_04t11_04_08t1_00(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_interfaceframe_12_24_04t11_04_08t1_00_04)

}
function get_interfaceframe_12_24_04t11_04_08t1_00_04(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_04(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_interfaceframe_04_04)
    }
}

function get_interfaceframe_04_04(o) {
    if (u8(o + 34) || u8(o + 35)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)
    }

    switch (u8(o + 4)) {
    case 0:
    case 2:
    case 3:
    case 4:
        u32(o + 12) ? console.log('?') : null
        break;
    case 1:
        ö(u32(o + 12), get_interfaceframe_04_04_12t1)
        break;
    case 5:
        ö(u32(o + 12), get_interfaceframe_04_04_12t5)
        break;
    case 7:
        ö(u32(o + 12), get_interfaceframe_04_04_12t7)
        break;
    case 8:
        ö(u32(o + 12), get_interfaceframe_04_04_12t8)
        break;
    case 9:
        ö(u32(o + 12), get_interfaceframe_04_04_12t9)
        break;
    default:
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)
        u32(o + 0) ? console.log(get_string(u32(o + 0) + offset_mid, 0, false)) : null
    }

}

function get_interfaceframe_04_04_12t9(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) !== 1 || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
    //console.log(get_string(u32(o + 4) + offset_mid, 0, false) )
    //console.log(get_string(u32(o + 8) + offset_mid, 0, false) )

}

function get_interfaceframe_04_04_12t8(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_interfaceframe_04_04_12t8_04)
    }

}

function get_interfaceframe_04_04_12t8_04(o) {
    if (u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)
    }
}
function get_interfaceframe_04_04_12t7(o) {
if(u8(o+2) ||u8(o+3) ||u32(o+4) ||u32(o+8) ||u32(o+12) )
    {
        ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

}
function get_interfaceframe_04_04_12t5(o) {
if(u32(o+0) ||u32(o+4) !==12 ||u32(o+8) ||u32(o+12) )
    {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

}
function get_interfaceframe_04_04_12t1(o) {
    if (u32(o + 4) === 0 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_interfaceframe_04_04_12t1_04)

}

function get_interfaceframe_04_04_12t1_04(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_56(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_model_animation_2(o) {
    if (log_array.model_anim_2 === 0) {
        log_array.model_anim_2 = o
    } else {
        if (log_array.model_anim_2 > o) {
            log_array.model_anim_2 = o
        }
    }

    // if (u32(offset + 12) || u32(offset + 20) || u32(offset + 24) || u32(offset + 28)) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
    // }

    // for (let i = 0; i < u32(o + 0); i++) {
    //     get_model_animation_2_1(u32(o + 16) + offset_mid + (i * 32))
    // }
}

function get_model_animation_2_1(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)

// console.log(`F${f32(offset + 0 )} | F${f32(offset + 4 )} | F${f32(offset + 8 )} | F${f32(offset + 12 )} | F${f32(offset + 16 )} | F${f32(offset + 20 )} | F${f32(offset + 24 )} | [ ${u8(offset + 28 )}, ${u8(offset + 29 )}, ${u8(offset + 30 )}, ${u8(offset + 31 )} ] offset:${offset} ; mid: ${offset_mid}   `)
}

function get_model_animation_1(o) {
    if (log_array.model_anim_1 === 0) {
        log_array.model_anim_1 = o
    } else {
        if (log_array.model_anim_1 > o) {
            log_array.model_anim_1 = o
        }
    }

    // 44  still needs resarch

    // if (u32(o + 44) - u32(o + 36) === -16 || u32(o + 44) - u32(o + 36) === 0 || u32(o + 44) - u32(o + 36) === -32) {// ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    // } else {

    //     console.log(u32(o + 44) - u32(o + 36))

    //     ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    // }

    /*
        // postion

        44 = 
0 = 
1 | u32 | 0 | 7828432
163,419 | u32 | 4 | 11694736
0 | f32 | 8 | 7828440
250,200,165,150,300,120 | f32 | 12 | 13111944
1 | u32 | 16 | 7828448
7,3 | u32 | 20 | 11694752
6735040,7350368,7350608,6811664,6325104,7020576,7026512,7029872,7033232,7911376,8488736,8489216 | u32 | 24 | 13696244
6735044,7350372,7350612,6811668,6325108,7020580,7026516,7029876,7033236,7911380,8488740,8489220 | u32 | 28 | 13696248
6735056,7350384,7350624,6811680,6325120,7020592,7026528,7029888,7033248,7911392,8488752,8489232 | u32 | 32 | 13696252
6735264,7350416,7350656,6811824,6325568,7021216,7026944,7030304,7033920,7911856,8488848,8489312 | u32 | 36 | 13696256
49,8,6,33,112,154,101,166,113,23,20 | u32 | 40 | 13696260
6735264,7350416,7350656,6811824,6325568,7021216,7026944,7030304,7033920,7911856,8488848,8489312 | u32 | 44 | 13696264
7,3 | u32 | 48 | 11694780
6736636,7350512,7350728,6812220,6328704,7025528,7029772,7033132,7038568,7915020,8489124,8489552 | u32 | 52 | 13696272
4282416980,3452816845 | u32 | 56 | 11694788
4160081,3452816845 | u32 | 60 | 11694792

        -16 =
1 | u32 | 0 | 4509660
67,163,419 | u32 | 4 | 9933856
1,0 | f32 | 8 | 7827576
240,120,200,165,150 | f32 | 12 | 11749464
1 | u32 | 16 | 4509676
7,5,3 | u32 | 20 | 11922928
2340448,2356816,4354752,4358208,4361872,6734176,5657152,5658720,5660432,5662144,6812304,6324640,6020880,6021104,7812320,7812768 | u32 | 24 | 12515764
2340452,2356820,4354756,4358212,4361876,6734180,5657156,5658724,5660436,5662148,6812308,6324644,6020884,6021108,7812324,7812772 | u32 | 28 | 12515768
2340464,2356832,4354768,4358224,4361888,6734192,5657168,5658736,5660448,5662160,6812320,6324656,6020896,6021120,7812336,7812784 | u32 | 32 | 12515772
2340560,2356928,4354944,4358400,4362064,6734400,5657472,5659072,5660784,5662464,6812464,6324784,6020944,6021168,7812432,7812928 | u32 | 36 | 12515776
19,37,46,72,79,70,32,28,5,20 | u32 | 40 | 12515332
2340544,2356912,4354928,4358384,4362048,6734384,5657456,5659056,5660768,5662448,6812448,6324768,6020928,6021152,7812416,7812912 | u32 | 44 | 12515784
4,3,1,2 | u32 | 48 | 11749500
494382536,4355536,4358992,4362656,6734952,5658624,5660336,5662048,5663584,6812592,6325008,6021004,6021228,7812672,7813312 | u32 | 52 | 12515792
494128568,1040214948,4294967295,3452816845,1919250466 | u32 | 56 | 12515348
494128632,1086508232,0,3452816845,539127923 | u32 | 60 | 12515352

32 = 
1 | u32 | 0 | 7827328
163 | u32 | 4 | 7827332
0,1 | f32 | 8 | 12871316
200,150 | f32 | 12 | 12871320
1 | u32 | 16 | 7827344
7 | u32 | 20 | 7827348
6733936,8117200,8117680 | u32 | 24 | 12871812
6733940,8117204,8117684 | u32 | 28 | 12871816
6733952,8117216,8117696 | u32 | 32 | 12871820
6734032,8117360,8117856 | u32 | 36 | 12871824
12,28,29 | u32 | 40 | 12871828
6734000,8117328,8117824 | u32 | 44 | 12871832
1,2 | u32 | 48 | 12871356
6734080,8117584,8118088 | u32 | 52 | 12871840
4294967295,362932960 | u32 | 56 | 12871364
0,4 | u32 | 60 | 12871368

416 = 
u32#1 | u32#163 | f32#0 | f32#60.00 | u32#28 | u32#196 | u32#6881696 | u32#6881724 | u32#6881792 | u32#6882464 | u32#61 | u32#6882048 | u32#92 | u32#6904912 | u32#3452816845 | u32#3452816845 || O 7975088 M 1093456 I 6881632

            512 =
1 | u32 | 0 | 8146384
163 | u32 | 4 | 8146388
0 | f32 | 8 | 8146392
30 | f32 | 12 | 8146396
28 | u32 | 16 | 8146400
196 | u32 | 20 | 8146404
7052992 | u32 | 24 | 8146408
7053020 | u32 | 28 | 8146412
7053088 | u32 | 32 | 8146416
7053728 | u32 | 36 | 8146420
31 | u32 | 40 | 8146424
7053216 | u32 | 44 | 8146428
69 | u32 | 48 | 8146432
7062284 | u32 | 52 | 8146436
3452816845 | u32 | 56 | 8146440
3452816845 | u32 | 60 | 8146444

            */

    // 48 /44
    // ü(0, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    // 1 = 4,1,3,7,92,69,2
    // 1 = 2340544,2356912,6734000,6734384,6735264,6882048,7053216,4354928,4358384,4362048,5657456,5659056,5660768,5662448,7350416,7350656,6811824,6812448,7021216,7026944,7030304,7033920,6324768,6325568,7911856,8117328,8117824,6020928,6021152,7812416,7812912,8488848,8489312
    // ö(u32(o + 44), get_model_animation_1_44)
    // console.log(u32(o+44) - u32(o+36))

    if (u32(o + 4) === 35 || u32(o + 4) === 291) {// ö(u32(o + 52), get_model_animation_1_52)
    } else if (u32(o + 4) === 163 || u32(o + 4) === 419) {// ö(u32(o + 52), get_model_animation_1_52t1)
    }

    if (u32(o) === 1) {
        // 1 = o break sometimes /???
        // 5 = normal
        // 3 = no offset
        // 4 = 0

        //67 = break
        // 163,419 = 16 b
        if (u32(o + 4) === 419) {// ö(u32(o + 52), get_model_animation_1_52t1)
        }
        // 67,163,419 = pc
        // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
        // ö(u32(o + 52), get_model_animation_1_52)

        // 35,67,291 seen
    }

    // if (u32(o)===1) {
    // ü(0, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    //     console.log(u32(o+44) -u32(o+36))
    //      ö(u32(o + 44), get_model_animation_1_44)
    // }

    if (u32(o) === 1 || u32(o) === 3 || u32(o) === 4) {

        // for (let i = 0; i < (u32(o+40) * u32(o+48)); i++) {
        //      // ö(u32(o + 36) + (i*4), get_model_animation_1_36)
        // }
        // if (u32(o+16)===5) {

        // true = 
        /*

35,291 | u32 | 4 | 7223236


1656848,1660336,1664016,2332800,2333200,2334080,2480960,2652256,2368848,2369072,1965168,1966768,1968496,1970192,2837568,2838064,2796992,2802736,2806096,2809712,2830992,2831248,2780256,2780752,3487920,3488384,2960960,2961584,2500416,2501232,3237504 | u32 | 44 | 8438572
1657456,1660944,1664624,2332880,2333768,2335452,2503824,2661324,2368924,2369148,1966336,1968048,1969776,1971328,2837824,2838328,2801304,2805564,2808924,2814360,2831088,2831320,2780512,2781152,3488196,3488624,2961356,2961728,2500656,2504368,3240668 | u32 | 52 | 8438580

false =
67,11 | u32 | 4 | 6232772


915552,931968,0 | u32 | 44 | 6232812
3366811421,0 | u32 | 52 | 6232820






1 | 163 | 0 | 200.00 | 1 | 7 | 6734176 | 6734180 | 6734192 | 6734400 | 46 | 6734384 | 3 | 6734952 | 4294967295 | 0 || O 7827568 M 1093456 I 6734112
1 | 35 | 1.00 | 120.00 | 1 | 7 | 1656672 | 1656676 | 1656688 | 1656864 | 37 | 1656848 | 4 | 1657456 | 2758475838 | 3368862272 || O 4086592 M 2429984 I 1656608
1 | 35 | 1.00 | 120.00 | 1 | 7 | 1660160 | 1660164 | 1660176 | 1660352 | 37 | 1660336 | 4 | 1660944 | 2758475838 | 3368862272 || O 4090080 M 2429984 I 1660096
1 | 35 | 1.00 | 120.00 | 1 | 7 | 1663840 | 1663844 | 1663856 | 1664032 | 37 | 1664016 | 4 | 1664624 | 2758475838 | 3368862272 || O 4093760 M 2429984 I 1663776
1 | 35 | 0 | 200.00 | 1 | 7 | 2332992 | 2332996 | 2333008 | 2333216 | 46 | 2333200 | 3 | 2333768 | 4294967295 | 0 || O 3426784 M 1093856 I 2332928
1 | 67 | 1.00 | 240.00 | 1 | 7 | 915456 | 915460 | 915472 | 915568 | 19 | 915552 | 4 | 3366811421 | 3100472093 | 4174213917 || O 3085184 M 2169792 I 915392
1 | 67 | 1.00 | 240.00 | 1 | 7 | 931872 | 931876 | 931888 | 931984 | 19 | 931968 | 4 | 3366811421 | 3100472093 | 4174213917 || O 3101600 M 2169792 I 931808
1 | 291 | 0 | 120.00 | 1 | 5 | 2368800 | 2368804 | 2368816 | 2368864 | 5 | 2368848 | 3 | 2368924 | 3452816845 | 3452816845 || O 7223232 M 4854496 I 2368736
1 | 291 | 0 | 120.00 | 1 | 5 | 1968160 | 1968164 | 1968176 | 1968512 | 79 | 1968496 | 4 | 1969776 | 3452816845 | 3452816845 || O 6245632 M 4277536 I 1968096

0
1 | 291 | 0 | 300.00 | 1 | 7 | 2796352 | 2796356 | 2796368 | 2796992 | 154 | 2796992 | 7 | 2801304 | 3452816845 | 3452816845 || O 7670048 M 4873760 I 2796288
1 | 291 | 0 | 300.00 | 1 | 7 | 2802304 | 2802308 | 2802320 | 2802736 | 101 | 2802736 | 7 | 2805564 | 3452816845 | 3452816845 || O 7676000 M 4873760 I 2802240
1 | 291 | 0 | 300.00 | 1 | 7 | 2809024 | 2809028 | 2809040 | 2809712 | 166 | 2809712 | 7 | 2814360 | 3452816845 | 3452816845 || O 7682720 M 4873760 I 2808960
1 | 291 | 0 | 120.00 | 1 | 7 | 3237024 | 3237028 | 3237040 | 3237504 | 113 | 3237504 | 7 | 3240668 | 3452816845 | 3452816845 || O 8438528 M 5201568 I 3236960

512
1 | 35 | 0 | 30.00 | 28 | 196 | 2652032 | 2652060 | 2652128 | 2652768 | 31 | 2652256 | 69 | 2661324 | 3452816845 | 3452816845 || O 3745824 M 1093856 I 2651968
1 | 163 | 0 | 30.00 | 28 | 196 | 7052992 | 7053020 | 7053088 | 7053728 | 31 | 7053216 | 69 | 7062284 | 3452816845 | 3452816845 || O 8146384 M 1093456 I 7052928


*/

        //calculate amount
        if ((u32(o + 40) * u32(o + 48) * 4) === u32(o + 52) - u32(o + 36)) {} else {// console.log(u32(o + 40) * u32(o + 48) * 4))
        // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

        /*
false ->
1,3 | u32 | 0 | 9446252
67,11 | u32 | 4 | 9446256
1,0 | f32 | 8 | 9446260
240,150,175,310,200,250,190 | f32 | 12 | 10872120
1 | u32 | 16 | 4509676
7,2 | u32 | 20 | 9446272
2340448,2356816,5168928,5173584,5177632,5181680,5185280,5647184,5654080,8188080,8191280,7926832,7930720,7797056,7798848,6018512,6019600 | u32 | 24 | 10873220
2340452,2356820,5168912,5173568,5177616,5181664,5185264,5647168,5654064,8188064,8191264,7926816,7930704,7797040,7798832,6018496,6019584 | u32 | 28 | 10873224
2340464,2356832,5168932,5173588,5177636,5181684,5185284,5647188,5654084,8188084,8191284,7926836,7930724,7797060,7798852,6018516,6019604 | u32 | 32 | 10873228
2340560,2356928,5169056,5173712,5177760,5181840,5185424,5647472,5654208,8188224,8191344,7926992,7930880,7797136,7798928,6018560,6019664 | u32 | 36 | 10873232
19,31,36,34,69,32,15,39,18,16,11,13 | u32 | 40 | 10873236
2340544,2356912,0 | u32 | 44 | 9446296
4,2,1 | u32 | 48 | 9459052
494382536,0 | u32 | 52 | 9446304
494128568,0 | u32 | 56 | 9446308
494128632,0 | u32 | 60 | 9446312


true = 
1 | u32 | 0 | 6784132
163,419 | u32 | 4 | 9933856
1,0 | f32 | 8 | 7827336
120,200,250,60,30,165,150,300 | f32 | 12 | 11893416
1,28 | u32 | 16 | 7975104
7,196,5,3 | u32 | 20 | 11694752
4354752,4358208,4361872,6733936,6734176,6735040,6881696,7052992,5657152,5658720,5660432,5662144,7350368,7350608,6811664,6812304,6324640,6325104,7020576,7026512,7029872,7033232,7911376,8117200,8117680,6020880,6021104,7812320,7812768,8488736,8489216 | u32 | 24 | 13696244
4354756,4358212,4361876,6733940,6734180,6735044,6881724,7053020,5657156,5658724,5660436,5662148,7350372,7350612,6811668,6812308,6324644,6325108,7020580,7026516,7029876,7033236,7911380,8117204,8117684,6020884,6021108,7812324,7812772,8488740,8489220 | u32 | 28 | 13696248
4354768,4358224,4361888,6733952,6734192,6735056,6881792,7053088,5657168,5658736,5660448,5662160,7350384,7350624,6811680,6812320,6324656,6325120,7020592,7026528,7029888,7033248,7911392,8117216,8117696,6020896,6021120,7812336,7812784,8488752,8489232 | u32 | 32 | 13696252
4354944,4358400,4362064,6734032,6734400,6735264,6882464,7053728,5657472,5659072,5660784,5662464,7350416,7350656,6811824,6812464,6324784,6325568,7021216,7026944,7030304,7033920,7911856,8117360,8117856,6020944,6021168,7812432,7812928,8488848,8489312 | u32 | 36 | 13696256
37,12,46,49,61,31,72,79,70,8,6,33,32,28,112,154,101,166,113,29,5,20,23 | u32 | 40 | 13695780
4354928,4358384,4362048,6734000,6734384,6735264,6882048,7053216,5657456,5659056,5660768,5662448,7350416,7350656,6811824,6812448,6324768,6325568,7021216,7026944,7030304,7033920,7911856,8117328,8117824,6020928,6021152,7812416,7812912,8488848,8489312 | u32 | 44 | 13696264
4,1,3,7,92,69,2 | u32 | 48 | 11749500
4355536,4358992,4362656,6734080,6734952,6736636,6904912,7062284,5658624,5660336,5662048,5663584,7350512,7350728,6812220,6812592,6325008,6328704,7025528,7029772,7033132,7038568,7915020,8117584,8118088,6021004,6021228,7812672,7813312,8489124,8489552 | u32 | 52 | 13696272
1040214948,4294967295,4282416980,3452816845,362932960,1919250466 | u32 | 56 | 12515348
1086508232,0,4160081,3452816845,4,539127923 | u32 | 60 | 12515352
*/
        //     console.log(u32(o+52) + offset_mid ,u32(o+36) - u32(o+52),(u32(o+40) * u32(o+48) * 4))

        // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
        }

        // console.log(u32(o+52) + offset_mid ,u32(o+36) - u32(o+52))
        // ü(0, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
        //      ö(u32(o + 36), get_model_animation_1_36)

        // if (u32(o+40) === 31) {
        // 5 = 60
        // 31 = 3840 ? / 2912 // 1 / 2
        //
        // ü(0, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

        // }
        // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

        // 31,36,34,70,79,72,19,37,12,46,49,5,23,20,33,32,8,6,28,112,154,101,166,15,113,39,18,16,69,11,13,29
        // ö(u32(o + 36), get_model_animation_1_36)
        // 1 | 163 | 1 | 7 | 12 || O 7827328 M 1093456 I 6733872 = 48
        // 1 | 163 | 1 | 7 | 46 || O 7827568 M 1093456 I 6734112 = 552
        // 1 | 163 | 1 | 7 | 49 || O 7828432 M 1093456 I 6734976 = 1372

        // }

        // ü(1, [u32, 0, u32, 4, u32, 16, u32, 20, u32, 40], o)
    }

    // if (u32(o)=== 1 || u32(o)=== 4) {
    //     if (u32(o+16)===1) {
    //  ö(u32(o + 24), get_model_animation_1_24t1)
    //     }else if(u32(o+16)===28){
    //  ö(u32(o + 24), get_model_animation_1_24t28)
    //     }else{
    // // ü(1, [u32, 0, u32, 4, u32, 16, u32, 20, u32, 40], o)
    //     }
    // }

    if (u32(o) === 1 || u32(o) === 3 || u32(o) === 4) {
        if (u32(o + 16) === 1) {// ö(u32(o + 28), get_model_animation_1_24_1)
        } else if (u32(o + 16) === 28) {} else {// ü(1, [u32, 0, u32, 4, u32, 16, u32, 20, u32, 40], o)
        }

    }

    if (u32(o + 16) === 28) {// ü(1, [u32, 0, u32, 4, u32, 16, u32, 20, u32, 40], o)
    // ö(u32(o + 28), get_model_animation_1_28t3)

    /*
3 | u32 | 0 | 9446252
11 | u32 | 4 | 9446256
1 | u32 | 16 | 9446268
2 | u32 | 20 | 9446272
31,36,34,69,32,15,18,16,39,11,13 | u32 | 40 | 10873236

*/

    }

    // if ((u32(o+28)+offset_mid) - (u32(o+32)+offset_mid) === -12) {

    /*
        -68 = 1
        12 = 1 , 4
        
        1 | u32 | 0 | 3574400
35,163 | u32 | 4 | 3216176
28 | u32 | 16 | 3574416
196 | u32 | 20 | 3574420
61,31 | u32 | 40 | 3745864

*/
    // console.log(u32(o+24)+offset_mid,u32(o+28)+offset_mid,u32(o+32)+offset_mid,(u32(o+28)+offset_mid) - (u32(o+32)+offset_mid))

    // ü(1, [u32, 0, u32, 4, u32, 16, u32, 20, u32, 40], o)

    // ö(u32(o + 28), get_model_animation_1_24_1)
    //    for (let i = 0; i < 28; i++) {
    // ö(u32(o + 28) + (i*2), get_model_animation_1_24_28)
    //    }
    // }

    //     // if (u32(o)===1) {
    //     //     //11 = 0
    //     //     //67 = garbage
    //     // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    //     // }

    //     // if (u32(o+60) > 1000 && u32(o+60) < 10000000) {
    //     // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    //     // }

    //     // if 3 type is before ?

    //         // if (u32(o+16) > 1) {

    // ü(1, [u32, 0, u32, 4, u32, 16, u32, 20, u32, 40], o)

    // // }
    //      // ö(u32(o + 28), get_model_animation_1_24)
    //      // ö(u32(o + 36), get_model_animation_1_24)
    //     }else{
    //     // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    //     }

    //     // if (u32(o)===1) {
    //     // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    //     // }
    // //1 = 0 - 4294967295 / 0 - 4174213917

    //     if (u32(o+4)===291 ||u32(o+4)===35 ||u32(o+4)===419 || u32(o+4)===163 ) {
    //      // ö(u32(o + 52), get_model_animation_1_52)
    //     }else{
    //     }

    if (u32(o + 0) === 1) {// 1 = 24,28,32,36,44,52 = offsetes
    // 3 = 24,28,32,36
    // 4 = xpp only / 24,28,32,36,44
    // 5= 32,52
    }

    // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    // if (u32(o+24) > 1000 && u32(o+24) < 10000000) {
    // }

    if (u32(o + 24) !== 3452816845) {// if 24,28,36,44,48 = 3452816845 all are
    // if 56,60 3452816845 only last 2 are always 3452816845, some are still 3452816845 sometimes?
    }

    // if (u32(offset + 24) !== 3452816845 || u32(offset + 28) !== 3452816845 || u32(offset + 36) !== 3452816845 || u32(offset + 44) !== 3452816845 || u32(offset + 48) !== 3452816845 || u32(offset + 56) !== 3452816845 || u32(offset + 60) !== 3452816845) {
    // }
    let temp_val = u32(o + 40)

    // console.log(`${u32(offset + 0)} | ${u32(offset + 4)} | F ${f32(offset + 8)} | F ${f32(offset + 12)} | ${u32(offset + 16)} -16 | ${u32(offset + 20)} -20 | ${u32(offset + 24)} | ${u32(offset + 28)} | ${u32(offset + 32)} | ${u32(offset + 36)} | ${u32(offset + 40)} | ${u32(offset + 44)} | ${u32(offset + 48)} | ${u32(offset + 52)} | ${u32(offset + 56)} | ${u32(offset + 60)} | offset:${offset} ; mid: ${offset_mid}   `)
    // if (u32(o + 52)) {
    //     get_model_animation_1_52(u32(o + 52) + offset_mid, temp_val)
    // }

    // ö(u32(o + 52), get_model_animation_1_52)

    // console.log(`${u32(offset + 0 )} | ${u32(offset + 4 )} | F${f32(offset + 8 )} | F${f32(offset + 12 )} | ${u32(offset + 16 )} | ${u32(offset + 20 )} | ${u32(offset + 24 )} | ${u32(offset + 28 )} | ${u32(offset + 32 )} | ${u32(offset + 36 )} | ${u32(offset + 40 )} | ${u32(offset + 44 )} | ${u32(offset + 48 )} | ${u32(offset + 52 )} | ${u32(offset + 56 )} | ${u32(offset + 60 )} | offset:${offset} ; mid: ${offset_mid}   `)

    // let html = `<div style='display:none' class='sub_file_div'><a style='padding-right: 6px; padding-left: 4px;' class='no_arrow'></a><a> ? </a> <a  data-type="x_model_animation_1" data-offset="${offset}" data-offset_mid="${offset_mid}" class='file_hover_not_selected'> get_model_animation_1 [${i}]</a></div>`
    // return html

    /*
    // check values
    [11]
3 | u32 | 0 | 9446252
11 | u32 | 4 | 9446256
0,1 | f32 | 8 | 13127380
150,175,310,200,250,190 | f32 | 12 | 10872120
1 | u32 | 16 | 9446268
2 | u32 | 20 | 9446272
5168928,5173584,5177632,5181680,5185280,5647184,5654080,8188080,8191280,7926832,7930720,7797056,7798848,6018512,6019600 | u32 | 24 | 10873220
5168912,5173568,5177616,5181664,5185264,5647168,5654064,8188064,8191264,7926816,7930704,7797040,7798832,6018496,6019584 | u32 | 28 | 10873224
5168932,5173588,5177636,5181684,5185284,5647188,5654084,8188084,8191284,7926836,7930724,7797060,7798852,6018516,6019604 | u32 | 32 | 10873228
5169056,5173712,5177760,5181840,5185424,5647472,5654208,8188224,8191344,7926992,7930880,7797136,7798928,6018560,6019664 | u32 | 36 | 10873232
31,36,34,69,32,15,39,18,16,11,13 | u32 | 40 | 10873236
0 | u32 | 44 | 9446296
2,1 | u32 | 48 | 9459052
0 | u32 | 52 | 9446304
0 | u32 | 56 | 9446308
0 | u32 | 60 | 9446312


[35]
5 | u32 | 0 | 4527356
35 | u32 | 4 | 4527360
1,0 | f32 | 8 | 7898360
240,100,60,30,120,250,200 | f32 | 12 | 11911496
1,29 | u32 | 16 | 7898368
7,203 | u32 | 20 | 7898372
845226304,477686472,477645640,1051400538,395166720,32,6,8,552120320,552120064,565563968,552114944 | u32 | 24 | 13701476
845226240,477686440,477655336,3207371451,395166656,36,7,16,552150336,552120000,565564032,552124224 | u32 | 28 | 13701480
2358144,2360112,3744176,3745056,6804960,7021712,4802880,7655568,7656848,7038656,7043840,8192752,8206928,8208736,8489648,8491248,8492848,8494448 | u32 | 32 | 13701484
845211136,477686376,477662888,1059440207,395166528,44,9,188304820,552150208,552119808,565653952,565573248 | u32 | 36 | 13701488
66,65,21,61,31,25,41,45,180,192,50,47 | u32 | 40 | 13412740
845211200,477686280,477662952,1064134299,395166400,52,11,0,552150080,552083392,565653824,565573440 | u32 | 44 | 13701496
845211264,477686248,477662984,1052046719,395166336,56,12,0,552149952,552083328,565653760,565573504 | u32 | 48 | 13701500
2358408,2360372,3744260,3745140,6805204,7021836,4802980,7655732,7657028,7039376,7044608,8192952,8207116,8208916,8489812,8491412,8493012,8494612 | u32 | 52 | 13701504
845211328,477686344,477663048,1057947842,395166208,64,14,0,552149888,552134976,565653632,565573632 | u32 | 56 | 13701508
845211456,477686152,477663080,1056407289,395166144,68,15,3,552149824,552135040,565653568,565573696 | u32 | 60 | 13701512
 
[67]
1 | u32 | 0 | 4509660
67 | u32 | 4 | 4509664
1 | f32 | 8 | 4509668
240 | f32 | 12 | 4509672
1 | u32 | 16 | 4509676
7 | u32 | 20 | 4509680
2340448,2356816 | u32 | 24 | 4526052
2340452,2356820 | u32 | 28 | 4526056
2340464,2356832 | u32 | 32 | 4526060
2340560,2356928 | u32 | 36 | 4526064
19 | u32 | 40 | 4509700
2340544,2356912 | u32 | 44 | 4526072
4 | u32 | 48 | 4509708
494382536 | u32 | 52 | 4509712
494128568 | u32 | 56 | 4509716
494128632 | u32 | 60 | 4509720

[163]
1 | u32 | 0 | 6784132
163 | u32 | 4 | 6784136
1,0 | f32 | 8 | 7827336
120,200,250,60,30,150 | f32 | 12 | 12515304
1,28 | u32 | 16 | 7975104
7,196 | u32 | 20 | 7975108
4354752,4358208,4361872,6733936,6734176,6735040,6881696,7052992,7812320,7812768,8117200,8117680 | u32 | 24 | 12871812
4354756,4358212,4361876,6733940,6734180,6735044,6881724,7053020,7812324,7812772,8117204,8117684 | u32 | 28 | 12871816
4354768,4358224,4361888,6733952,6734192,6735056,6881792,7053088,7812336,7812784,8117216,8117696 | u32 | 32 | 12871820
4354944,4358400,4362064,6734032,6734400,6735264,6882464,7053728,7812432,7812928,8117360,8117856 | u32 | 36 | 12871824
37,12,46,49,61,31,20,32,28,29 | u32 | 40 | 12871828
4354928,4358384,4362048,6734000,6734384,6735264,6882048,7053216,7812416,7812912,8117328,8117824 | u32 | 44 | 12871832
4,1,3,7,92,69,2 | u32 | 48 | 12871356
4355536,4358992,4362656,6734080,6734952,6736636,6904912,7062284,7812672,7813312,8117584,8118088 | u32 | 52 | 12871840
1040214948,4294967295,4282416980,3452816845,1919250466,362932960 | u32 | 56 | 12871364
1086508232,0,4160081,3452816845,539127923,4 | u32 | 60 | 12871368

[419]
1 | u32 | 0 | 9933852
419 | u32 | 4 | 9933856
0 | f32 | 8 | 9933860
120,200,165,150,300 | f32 | 12 | 11893416
1 | u32 | 16 | 9933868
5,3,7 | u32 | 20 | 11749936
5657152,5658720,5660432,5662144,7350368,7350608,6811664,6812304,6324640,6325104,7020576,7026512,7029872,7033232,7911376,6020880,6021104,8488736,8489216 | u32 | 24 | 13696244
5657156,5658724,5660436,5662148,7350372,7350612,6811668,6812308,6324644,6325108,7020580,7026516,7029876,7033236,7911380,6020884,6021108,8488740,8489220 | u32 | 28 | 13696248
5657168,5658736,5660448,5662160,7350384,7350624,6811680,6812320,6324656,6325120,7020592,7026528,7029888,7033248,7911392,6020896,6021120,8488752,8489232 | u32 | 32 | 13696252
5657472,5659072,5660784,5662464,7350416,7350656,6811824,6812464,6324784,6325568,7021216,7026944,7030304,7033920,7911856,6020944,6021168,8488848,8489312 | u32 | 36 | 13696256
72,79,70,8,6,33,32,28,112,154,101,166,113,5,23,20 | u32 | 40 | 13696260
5657456,5659056,5660768,5662448,7350416,7350656,6811824,6812448,6324768,6325568,7021216,7026944,7030304,7033920,7911856,6020928,6021152,8488848,8489312 | u32 | 44 | 13696264
4,3,1,2,7 | u32 | 48 | 11749964
5658624,5660336,5662048,5663584,7350512,7350728,6812220,6812592,6325008,6328704,7025528,7029772,7033132,7038568,7915020,6021004,6021228,8489124,8489552 | u32 | 52 | 13696272
3452816845 | u32 | 56 | 9933908
3452816845 | u32 | 60 | 9933912


[1]
1 | u32 | 0 | 4509660
67,163,419 | u32 | 4 | 9933856
1,0 | f32 | 8 | 7827336
240,120,200,250,60,30,165,150,300 | f32 | 12 | 11893416
1,28 | u32 | 16 | 7975104
7,196,5,3 | u32 | 20 | 11694752
2340448,2356816,4354752,4358208,4361872,6733936,6734176,6735040,6881696,7052992,5657152,5658720,5660432,5662144,7350368,7350608,6811664,6812304,6324640,6325104,7020576,7026512,7029872,7033232,7911376,8117200,8117680,6020880,6021104,7812320,7812768,8488736,8489216 | u32 | 24 | 13696244
2340452,2356820,4354756,4358212,4361876,6733940,6734180,6735044,6881724,7053020,5657156,5658724,5660436,5662148,7350372,7350612,6811668,6812308,6324644,6325108,7020580,7026516,7029876,7033236,7911380,8117204,8117684,6020884,6021108,7812324,7812772,8488740,8489220 | u32 | 28 | 13696248
2340464,2356832,4354768,4358224,4361888,6733952,6734192,6735056,6881792,7053088,5657168,5658736,5660448,5662160,7350384,7350624,6811680,6812320,6324656,6325120,7020592,7026528,7029888,7033248,7911392,8117216,8117696,6020896,6021120,7812336,7812784,8488752,8489232 | u32 | 32 | 13696252
2340560,2356928,4354944,4358400,4362064,6734032,6734400,6735264,6882464,7053728,5657472,5659072,5660784,5662464,7350416,7350656,6811824,6812464,6324784,6325568,7021216,7026944,7030304,7033920,7911856,8117360,8117856,6020944,6021168,7812432,7812928,8488848,8489312 | u32 | 36 | 13696256
19,37,12,46,49,61,31,72,79,70,8,6,33,32,28,112,154,101,166,113,29,5,20,23 | u32 | 40 | 13695780
2340544,2356912,4354928,4358384,4362048,6734000,6734384,6735264,6882048,7053216,5657456,5659056,5660768,5662448,7350416,7350656,6811824,6812448,6324768,6325568,7021216,7026944,7030304,7033920,7911856,8117328,8117824,6020928,6021152,7812416,7812912,8488848,8489312 | u32 | 44 | 13696264
4,1,3,7,92,69,2 | u32 | 48 | 11749500
494382536,4355536,4358992,4362656,6734080,6734952,6736636,6904912,7062284,5658624,5660336,5662048,5663584,7350512,7350728,6812220,6812592,6325008,6328704,7025528,7029772,7033132,7038568,7915020,8117584,8118088,6021004,6021228,7812672,7813312,8489124,8489552 | u32 | 52 | 13696272
494128568,1040214948,4294967295,4282416980,3452816845,362932960,1919250466 | u32 | 56 | 12515348
494128632,1086508232,0,4160081,3452816845,4,539127923 | u32 | 60 | 12515352

[3]
3 | u32 | 0 | 9446252
11 | u32 | 4 | 9446256
0,1 | f32 | 8 | 13127380
150,175,310,200,250,190 | f32 | 12 | 10872120
1 | u32 | 16 | 9446268
2 | u32 | 20 | 9446272
5168928,5173584,5177632,5181680,5185280,5647184,5654080,8188080,8191280,7926832,7930720,7797056,7798848,6018512,6019600 | u32 | 24 | 10873220
5168912,5173568,5177616,5181664,5185264,5647168,5654064,8188064,8191264,7926816,7930704,7797040,7798832,6018496,6019584 | u32 | 28 | 10873224
5168932,5173588,5177636,5181684,5185284,5647188,5654084,8188084,8191284,7926836,7930724,7797060,7798852,6018516,6019604 | u32 | 32 | 10873228
5169056,5173712,5177760,5181840,5185424,5647472,5654208,8188224,8191344,7926992,7930880,7797136,7798928,6018560,6019664 | u32 | 36 | 10873232
31,36,34,69,32,15,39,18,16,11,13 | u32 | 40 | 10873236
0 | u32 | 44 | 9446296
2,1 | u32 | 48 | 9459052
0 | u32 | 52 | 9446304
0 | u32 | 56 | 9446308
0 | u32 | 60 | 9446312

[5]
5 | u32 | 0 | 5777516
291,35 | u32 | 4 | 4527360
0,-10,1,16,17 | f32 | 8 | 10380148
1,10,20,5,24,30,15,120,25,60,35,31,54,48,240,55,16,40,50,38,65,100,40.0099983215332,151,12,90,28,85,75,36,170,45,130,175,300,250,200,180,360,115,80,160,110 | f32 | 12 | 12873032
18,1,11,6,2,3,4,13,17,21,7,15,24,38,29,19,30,32,27,37,26,25,39,40,28,9,23,34,5,12,57,8,16,14 | u32 | 16 | 12891388
0,8,36,33,2,4,34,1,5,6,3,9,17,37,38,7,102,46,66,97,86,82,31,96,93,21,113,101,57,118,203,109,111,65,138,103,141,92,79,85,44,98,70,91,73,89,75,128,105,50,53,64,51,41,68,63,11,15,16,119,114,110,104,94,137,127,29,25,30,27,22,28,55,107,106,116,99,49,126,20,32,24,10,35,76,165,59,74,23,100,69,87,40,12 | u32 | 20 | 12516400
3452816845,845226304,477686472,477645640,1051400538,395166720,32,6,8,552120320,552120064,565563968,552114944 | u32 | 24 | 13701476
3452816845,845226240,477686440,477655336,3207371451,395166656,36,7,16,552150336,552120000,565564032,552124224 | u32 | 28 | 13701480
0,3603184,3603392,3606672,3609680,3609824,3612208,3612576,3613056,3613456,3613936,3614544,3614944,3615488,3615872,3617360,3617712,3618128,3620288,3620912,3621168,3621408,3621632,2330576,2330784,2334064,2337072,2337216,2339600,2339968,2341776,2344016,2346880,2352128,2358144,2360112,2362064,2370240,2370752,2370992,2371136,2371616,2372224,2372624,2373168,2373392,2373904,2374256,2374672,2376832,2377456,2377840,4344880,4345088,4348368,4351376,4351520,4353904,4354272,4355632,4358064,4359088,4362752,4363104,4363632,4364032,4364576,4366736,4367472,4367712,4367936,4368448,4368928,4369424,4369824,4370208,3719248,3719456,3722736,3725744,3725888,3728272,3728640,3729232,3729632,3730176,3732336,3732960,3733104,3733488,3734976,3735200,3735824,3736064,3736464,3736816,3737232,3737712,3738208,3740896,3745488,3752400,3762272,3768384,3774000,3775888,3781648,3791856,3794912,3799360,3734304,3734512,3737792,3740800,3740944,3743328,3743696,3744176,3745056,3746048,3746448,3747104,3747344,3747488,3749648,3750272,3750656,3752144,3752368,3752880,3753280,3753760,3754256,3754608,7097888,7098096,7101376,7104272,7104416,7106800,7107168,6736736,6748992,6750048,6765280,6778528,6787776,6804960,6819776,6835472,6850688,6862032,6905200,6919424,6931968,6951168,6967408,6986480,7001696,7006736,7012592,7015888,7021712,7029456,7034624,7041232,7045856,7062560,7068672,7072336,7081520,7087744,7092336,5159040,5159248,5162528,5165536,5165680,5168064,5168432,5172960,5188656,5189136,5189632,5190576,5194656,5198160,5204000,5206528,5209424,5214896,5219280,5224928,5227088,5230304,5256608,5259504,5261792,5265760,5269728,5273184,5275968,5278208,5283728,5286688,5289744,5291200,5291696,5294400,5297104,5298288,5298576,5637296,5637504,5640784,5643792,5643936,5646320,5646688,5663680,5664624,5668704,5672208,5678048,5680576,5683472,5688944,5693328,5698976,5701136,5704352,5730656,5733552,5735840,5739808,5743776,5747232,5750016,5752256,5757776,5760736,5763792,5765248,5765744,5768448,5771152,5772336,5772624,5773232,5776784,5781248,5789728,5795456,5798624,5803968,5807536,5812128,5817216,5826560,5831728,5843664,5851648,5858064,4793008,4793216,4796496,4799504,4799648,4802032,4802400,4802880,4803712,4804224,4804464,4804720,4805120,4805664,4805888,4806400,4806784,4808272,4810432,4811056,4811408,4811824,4812304,4812800,4815008,4817216,4821280,4826384,4834048,4837856,4839360,4840832,4843824,7340496,7340704,7343984,7346992,7347136,7349520,7349888,7350816,7351760,7355840,7359344,7365184,7367712,7370608,7376080,7380464,7386112,7388272,7391488,7417792,7420688,7422976,7426944,7430912,7434368,7437152,7439392,7444912,7447872,7450928,7452384,7452880,7455584,7458288,7459472,7459760,7460368,7478496,7497840,7513472,6801792,6802000,6805280,6808288,6808432,6810816,6811184,6812688,6813632,6817712,6821216,6827056,6829584,6832480,6837952,6842336,6847984,6850144,6853360,6879664,6882560,6884848,6886304,6886800,6889504,6892208,6896176,6900144,6903600,6906384,6908624,6914144,6917104,6920160,6921344,6921632,6922240,6931872,6941488,6970448,7004592,7021184,7021328,7023760,5302016,5302224,5305504,5308512,5308656,5311040,5311408,5311888,5313088,5314320,5320592,5367600,5373808,5381984,5388032,5388976,5393056,5396560,5402400,5404928,5407824,5413296,5417680,5423328,5425488,5428704,5455008,5457904,5460192,5461648,5462144,5464848,5467552,5471520,5475488,5478944,5481728,5483968,5489488,5492448,5495504,5496688,5496976,7645696,7645904,7649184,7652192,7652336,7654720,7655088,7655568,7656848,7658240,7658800,7659296,7660240,7664320,7667824,7673664,7676192,7679088,7684560,7688944,7694592,7696752,7699968,7726272,7729168,7731456,7735424,7739392,7742848,7745632,7747872,7753392,7756352,7759408,7760864,7761360,7764064,7766768,7767952,7768240,7768848,7774368,7779776,7785632,7791520,7797408,7819744,7825632,7831520,7831904,7834032,7836368,7010704,7010912,7014192,7017200,7017344,7019728,7020096,7025616,7038656,7043840,7049360,7050032,7050352,7050864,7051504,7052448,7056528,7060032,7065872,7068400,7071296,7076768,7081152,7086800,7088960,7092176,7118480,7121376,7123664,7127632,7131600,7135056,7137840,7140080,7145600,7148560,7151616,7153072,7153568,7156272,7158976,7160160,7160448,7161168,7164592,7166256,7167552,7168752,7169504,7169856,6314768,6314976,6318256,6321264,6321408,6323792,6324160,6328800,6329792,6331648,6334928,6340608,6340800,6340992,6360768,6360976,6361168,6361360,6375136,6377216,6385584,6392768,6396688,6397552,6398496,6402576,6406080,6411920,6414448,6417344,6422816,6427200,6432848,6435008,6438224,6464528,6467424,6469712,6473680,6477648,6481104,6483888,6486128,6491648,6494608,6497664,6499120,6499616,6502320,6505024,6506208,6506496,8178192,8178400,8181680,8184688,8184832,8187216,8187584,8192752,8194672,8206928,8208736,8210480,8222752,8223088,8223520,8223728,8223952,8228400,8229344,8233424,8236928,8242768,8245296,8248192,8253664,8258048,8263696,8265856,8269072,8295376,8298272,8300560,8304528,8308496,8311952,8314736,8316976,8322496,8325456,8328512,8329968,8330464,8333168,8335872,8337056,8337344,7901504,7901712,7904992,7908000,7908144,7910528,7910896,7915120,7917088,7934592,7935184,7935776,7936720,7940800,7944304,7950144,7952672,7955568,7961040,7965424,7971072,7973232,7976448,8002752,8005648,8007936,8011904,8015872,8019328,8022112,8024352,8029872,8032832,8035888,8037344,8037840,8040544,8043248,8044432,8044720,8045328,8047536,8051600,8053808,8058912,8066576,8070384,8070800,8071264,8076432,8094128,8478864,8479072,8482352,8485360,8485504,8487888,8488256,8489648,8491248,8492848,8494448,8496048,8496640,8497232,8498176,8502256,8505760,8511600,8514128,8517024,8522496,8526880,8532528,8534688,8537904,8564208,8567104,8569392,8570848,8571344,8574048,8576752,8580720,8584688,8588144,8590928,8593168,8598688,8601648,8604704,8605888,8606176,8606784,8624528,8624704,7787168,7787376,7790656,7793664,7793808,7796192,7796560,7800432,7800592,7800752,7801056,7802000,7806080,7809584,7815424,7817952,7820848,7826320,7830704,7836352,7838512,7841728,7868032,7870928,7873216,7877184,7881152,7884608,7887392,7889632,7895152,7898112,7901168,7902624,7903120,7905824,7908528,7909712,7910000,7910608,7913296,7917888,7924688,7931856,7933792,7943664,7949776,7955392,7957168,7957328,7957536,7963296,7973504,7976560,7981008,8107328,8107536,8110816,8113824,8113968,8116352,8116720,8118176,8118544,8118912,8133776,8137264,8148672,8149616,8153696,8157200,8163040,8165568,8168464,8173936,8178320,8183968,8186128,8189344,8215648,8218544,8220832,8224800,8228768,8232224,8235008,8237248,8245728,8248784,8250240,8250736,8253440,8256144,8257328,8257616,6008624,6008832,6012112,6015120,6015264,6017648,6018016,6021328,6021824,6022768,6026848,6030352,6036192,6038720,6041616,6047088,6051472,6057120,6059280,6062496,6088800,6091696,6093984,6097952,6101920,6105376,6108160,6110400,6115920,6118880,6121936,6123392,6126096,6128800,6129984,6130272,7802448,7802656,7805936,7808944,7809088,7811472,7811840,7813408,7814912,7815616,7816320,7817264,7821344,7824848,7830688,7833216,7836112,7841584,7845968,7851616,7853776,7856992,7883296,7886192,7888480,7892448,7896416,7899872,7902656,7904896,7910416,7913376,7916432,7918384,7921088,7923792,7924976,7925264 | u32 | 32 | 12628268
3452816845,845211136,477686376,477662888,1059440207,395166528,44,9,188304820,552150208,552119808,565653952,565573248 | u32 | 36 | 13701488
0,4,21,3,25,18,14,19,10,22,31,20,15,46,11,34,32,55,49,66,65,24,17,38,51,26,61,23,60,29,27,30,42,57,59,16,151,41,13,47,71,35,36,75,70,37,132,5,45,130,90,39,40,44,300,116,121,180,192,28,9,48,7,8,54,50,361,81,131,161,2,12,111,89 | u32 | 40 | 12891412
3452816845,845211200,477686280,477662952,1064134299,395166400,52,11,0,552150080,552083392,565653824,565573440 | u32 | 44 | 13701496
3452816845,845211264,477686248,477662984,1052046719,395166336,56,12,0,552149952,552083328,565653760,565573504 | u32 | 48 | 13701500
3603072,3603200,3603476,3606756,3609456,3609568,3609692,3609924,3612096,3612292,3612648,3613112,3613528,3614012,3614432,3614584,3615028,3615576,3615996,3617440,3617772,3618312,3620332,3620924,3621056,3621208,3621448,3621688,2330464,2330592,2330868,2334148,2336848,2336960,2337084,2337316,2339488,2339684,2340040,2341912,2344144,2347100,2352324,2358408,2360372,2362284,2370296,2370640,2370792,2371004,2371208,2371692,2372112,2372264,2372708,2373208,2373448,2373984,2374316,2374856,2376876,2377544,2377964,4344768,4344896,4345172,4348452,4351152,4351264,4351388,4351620,4353792,4353988,4354344,4355728,4358076,4359168,4362832,4363164,4363520,4363672,4364116,4364760,4366780,4367360,4367512,4367752,4367992,4368520,4369004,4369480,4369912,4370332,3719136,3719264,3719540,3722820,3725520,3725632,3725756,3725988,3728160,3728356,3728712,3729120,3729272,3729716,3730360,3732380,3732972,3733192,3733612,3735016,3735256,3735712,3735864,3736120,3736544,3736876,3737304,3737788,3738284,3741048,3745692,3752288,3752604,3762396,3768508,3774084,3775776,3776040,3781912,3791940,3795016,3799200,3799464,3734192,3734320,3734596,3737876,3740576,3740688,3740812,3741044,3743216,3743412,3743768,3744260,3745140,3745936,3746088,3746532,3746992,3747144,3747356,3747672,3749692,3750360,3750780,3752184,3752424,3752936,3753352,3753836,3754336,3754668,7097776,7097904,7098180,7101460,6749936,7104160,7104284,7104516,7106688,7106884,7107240,6736980,6749084,6750292,6765524,6778772,6788020,6805204,6820020,6835716,6850944,6862276,6905444,6919664,6932212,6951412,6967652,6986724,7001812,7006860,7012716,7015996,7021836,7029576,7034748,7041356,7045980,7062684,7068768,7072460,7081644,7087868,7092460,5158928,5159056,5159332,5162612,5165312,5165424,5165548,5165780,5167952,5168148,5168504,5173056,5188728,5189212,5189748,5190744,5194752,5198404,5204100,5206644,5209652,5215140,5219516,5224992,5227216,5230912,5256672,5259568,5261956,5265924,5269808,5273264,5276048,5278304,5283792,5286800,5289932,5291328,5291980,5294684,5297220,5298348,5298628,5637184,5637312,5637588,5640868,5643568,5643680,5643804,5644036,5646208,5646404,5646760,5663796,5664792,5668800,5672452,5678148,5680692,5683700,5689188,5693564,5699040,5701264,5704960,5730720,5733616,5736004,5739972,5743856,5747312,5750096,5752352,5757840,5760848,5763980,5765376,5766028,5768732,5771268,5772396,5772676,5773308,5776884,5781488,5789868,5795552,5798728,5804052,5807664,5812256,5817456,5826660,5831968,5843808,5851772,5858188,4792896,4793024,4793300,4796580,4799280,4799392,4799516,4799748,4801920,4802116,4802472,4802980,4803768,4804112,4804264,4804476,4804608,4804760,4805204,4805704,4805944,4806488,4806908,4808456,4810476,4811136,4811468,4811896,4812380,4812920,4815128,4817476,4821540,4826684,4834328,4838004,4839504,4840980,4844352,7340384,7340512,7340788,7344068,7346768,7346880,7347004,7347236,7349408,7349604,7349960,7350932,7351928,7355936,7359588,7365284,7367828,7370836,7376324,7380700,7386176,7388400,7392096,7417856,7420752,7423140,7427108,7430992,7434448,7437232,7439488,7444976,7447984,7451116,7452512,7453164,7455868,7458404,7459532,7459812,7460572,7478700,7498004,7513492,6801680,6801808,6802084,6805364,6808064,6808176,6808300,6808532,6810704,6810900,6811256,6812804,6813800,6817808,6821460,6827156,6829700,6832708,6838196,6842572,6848048,6850272,6853968,6879728,6882624,6885036,6886432,6887084,6889788,6892372,6896340,6900224,6903680,6906464,6908720,6914208,6917216,6920276,6921404,6921684,6922444,6932052,6942008,6970968,7004952,7021196,7021424,7023856,5301904,5302032,5302308,5305588,5308288,5308400,5308524,5308756,5310928,5311124,5311480,5312044,5313248,5314496,5321792,5368064,5374028,5382164,5388148,5389144,5393152,5396804,5402500,5405044,5408052,5413540,5417916,5423392,5425616,5429312,5455072,5457968,5460380,5461776,5462428,5465132,5467716,5471684,5475568,5479024,5481808,5484064,5489552,5492560,5495620,5496748,5497028,7645584,7645712,7645988,7649268,7651968,7652080,7652204,7652436,7654608,7654804,7655160,7655732,7657028,7658328,7658876,7659412,7660408,7664416,7668068,7673764,7676308,7679316,7684804,7689180,7694656,7696880,7700576,7726336,7729232,7731620,7735588,7739472,7742928,7745712,7747968,7753456,7756464,7759596,7760992,7761644,7764348,7766884,7768012,7768292,7769008,7774508,7779928,7785756,7791644,7797892,7819868,7825756,7831604,7832084,7834276,7836612,7010592,7010720,7010996,7014276,7016976,7017088,7017212,7017444,7019616,7019812,7020168,7025700,7039376,7044608,7049472,7050100,7050432,7050968,7051620,7052616,7056624,7060276,7065972,7068516,7071524,7077012,7081388,7086864,7089088,7092784,7118544,7121440,7123828,7127796,7131680,7135136,7137920,7140176,7145664,7148672,7151804,7153200,7153852,7156556,7159092,7160220,7160500,7161056,7161280,7164728,7166344,7167632,7168816,7169540,7169912,6314656,6314784,6315060,6318340,6321040,6321152,6321276,6321508,6323680,6323876,6324232,6328896,6329984,6331772,6335064,6340624,6340828,6341176,6360800,6361004,6361196,6361824,6375216,6377432,6385768,6392932,6396796,6397668,6398664,6402672,6406324,6412020,6414564,6417572,6423060,6427436,6432912,6435136,6438832,6464592,6467488,6469876,6473844,6477728,6481184,6483968,6486224,6491712,6494720,6497852,6499248,6499900,6502604,6505140,6506268,6506548,8178080,8178208,8178484,8181764,8184464,8184576,8184700,8184932,8187104,8187300,8187656,8192952,8194916,8207116,8208916,8210724,8222796,8223152,8223552,8223768,8225396,8228516,8229512,8233520,8237172,8242868,8245412,8248420,8253908,8258284,8263760,8265984,8269680,8295440,8298336,8300724,8304692,8308576,8312032,8314816,8317072,8322560,8325568,8328700,8330096,8330748,8333452,8335988,8337116,8337396,7901392,7901520,7901796,7905076,7907776,7907888,7908012,7908244,7910416,7910612,7910968,7915240,7917412,7934688,7935280,7935892,7936888,7940896,7944548,7950244,7952788,7955796,7961284,7965660,7971136,7973360,7977056,8002816,8005712,8008100,8012068,8015952,8019408,8022192,8024448,8029936,8032944,8036076,8037472,8038124,8040828,8043364,8044492,8044772,8045448,8047796,8051720,8054068,8059212,8066856,8070484,8070916,8071408,8076956,8094312,8478752,8478880,8479156,8482436,8485136,8485248,8485372,8485604,8487776,8487972,8488328,8489812,8491412,8493012,8494612,8496144,8496736,8497348,8498344,8502352,8506004,8511700,8514244,8517252,8522740,8527116,8532592,8534816,8538512,8564272,8567168,8569580,8570976,8571628,8574332,8576916,8580884,8584768,8588224,8591008,8593264,8598752,8601760,8604820,8605948,8606228,8607428,8624548,8624784,7787056,7787184,7787460,7790740,7793440,7793552,7793676,7793908,7796080,7796276,7796632,7800440,7800600,7800816,7801172,7802168,7806176,7809828,7815524,7818068,7821076,7826564,7830940,7836416,7838640,7842336,7868096,7870992,7873380,7877348,7881232,7884688,7887472,7889728,7895216,7898224,7901356,7902752,7903404,7906108,7908644,7909772,7910052,7910684,7913448,7918092,7924852,7931980,7933328,7933680,7933996,7943788,7949900,7955476,7957176,7957344,7957688,7963560,7973588,7976664,7980848,7981112,8107216,8107344,8107620,8110900,8113600,8113712,8113836,8114068,8116240,8116436,8116792,8118224,8118592,8119356,8133896,8137620,8148788,8149784,8153792,8157444,8163140,8165684,8168692,8174180,8178556,8184032,8186256,8189952,8215712,8218608,8220996,8224964,8228848,8232304,8235088,8237344,8242832,8245840,8248972,8250368,8251020,8253724,8256260,8257388,8257668,6008512,6008640,6008916,6012196,6014896,6015008,6015132,6015364,6017536,6017732,6018088,6021456,6021940,6022936,6026944,6030596,6036292,6038836,6041844,6047332,6051708,6057184,6059408,6063104,6088864,6091760,6094148,6098116,6102000,6105456,6108240,6110496,6115984,6118992,6122124,6123676,6126380,6128916,6130044,6130324,7802336,7802464,7802740,7806020,7808720,7808832,7808956,7809188,7811360,7811556,7811912,7813604,7815032,7815736,7816436,7817432,7821440,7825092,7830788,7833332,7836340,7841828,7846204,7851680,7853904,7857600,7883360,7886256,7888644,7892612,7896496,7899952,7902736,7904992,7910480,7913488,7916620,7918016,7918668,7921372,7923908,7925036,7925316 | u32 | 52 | 12628288
3452816845,845211328,477686344,477663048,1057947842,395166208,64,14,0,552149888,552134976,565653632,565573632 | u32 | 56 | 13701508
3452816845,845211456,477686152,477663080,1056407289,395166144,68,15,3,552149824,552135040,565653568,565573696 | u32 | 60 | 13701512

    
    */
}

function get_model_animation_1_36(o) {// ü(1, [f32, 0], o)
}

function get_model_animation_1_24t1(o) {// ü(1, [u32, 0], o)
}
function get_model_animation_1_24t28(o) {// ü(1, [u32, 0,u32, 4,u32, 8,u32, 12,u32, 16,u32, 20,u32, 24], o)
}

function get_model_animation_1_28t3(o) {
    ü(1, [u32, 0], o)
}

function get_model_animation_1_24_1(o) {
    ü(1, [u16, 0, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, ], o)
}
function get_model_animation_1_24_28(o) {
    ü(1, [u16, 0], o)
}

function get_model_animation_1_44(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

}

function get_model_animation_1_48(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)
}

function get_model_animation_1_52t1(o) {// console.log(u8(o+4) + u32(o+8) === u32(o+12) )
// // 8,12 = 1perbyte
// ü(1, [u8, 0,u8, 1,u8, 2,u8, 3,u8, 4,u8, 5,u8, 6,u8, 7, u32, 8, u32, 12], o)
}

function get_model_animation_1_52(o, temp_val) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    // maybe offset 2 cuts into offset 5 ???????????

    // if (u32(o+16) + offset_mid !== (u32(o+28) + offset_mid) + ((temp_val *2) *4) * u32(offset+4)) {
    //     console.log((u32(offset+28) + offset_mid), (u32(offset+28) + offset_mid) + ((temp_val *2) *4) * u32(offset+4),u32(offset+16) + offset_mid, u32(offset+16) + offset_mid === (u32(offset+28) + offset_mid) + ((temp_val *2) *4) * u32(offset+4))
    // }

    // let _12 = u32(offset + 12)
    // let _20 = u32(offset + 20)
    // let _24 = u32(offset + 24)

    // if (u32(offset + 12) === 3452816845) {
    //     _12 = "CD"
    // }
    // if (u32(offset + 20) === 3452816845) {
    //     _20 = "CD"
    // }
    // if (u32(offset + 24) === 3452816845) {
    //     _24 = "CD"
    // }

    // 48,128,272,768,192,16,432,992,112,304,368,208,384 bytes 
    // ??????????????????????????????
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], offset)
    // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], offset)
    // let diff = u32(offset + 28) - u32(offset + 16)

    // console.log(`__start: ${u32(offset + 28) + offset_mid} || end: ${u32(offset + 16) + offset_mid} | Dif: ${diff} | calculated: ${(diff / 8) / 6}`)
    // console.log(`-> ${u32(offset + 0)} _0 | ${u32(offset + 4)} _4 | ${u32(offset + 8)} _8 | ${_12} | ${u32(offset + 16)} | ${_20} | ${_24} | ${u32(offset + 28)} | ${u32(offset + 32)}  offset:${offset} ; mid: ${offset_mid} ||| \n\n`)

    if (u32(o + 28) === 0) {// console.log(`-> ${u32(offset + 0 )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | ${_12} | ${u32(offset + 16 )} | ${_20} | ${_24} | ${u32(offset + 28 )} | ${u32(offset + 32 )}  offset:${offset} ; mid: ${offset_mid}   `)
    }
}

function get_spark(o) {

    if (u32(o + 4) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }

    ö(u32(o + 16), get_spark_16)

}

function get_spark_16(o) {
    if (u8(o + 4) !== 2 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 20) || u32(o + 60)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    }

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_spark_16_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_spark_16_56)
    }

}

function get_spark_16_48(o) {
    if (u32(o + 4)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
    }
}
function get_spark_16_56(o) {
    if (f32(o + 12) || f32(o + 16) || f32(o + 24) || f32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
    }
}

function get_text(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    // ö(u32(o + 0), get_text_00)
}

function get_text_00(o) {
    console.log(get_string(o, 0, false))
}

function get_fonts(o) {
    if (u32(o + 4) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }

    ö(u32(o + 28), get_fonts_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_fonts_36)
    }

}

function get_fonts_36(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8], o)
    }
}

function get_fonts_28(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, u32, 4, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_settings_header_4_1(offset) {
    let html = ""
    html += `<br>--->---> ${u32(offset)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)}`
    // html += get_settings_header_4_1(u32(offset + 16 ) + offset_mid)

    return html
}

function get_interfaceframe_72(o) {
    if (u32(o + 64) || u32(o + 76) !== 4294967295 || u32(o + 80) !== 4294967295 || u32(o + 84) !== 4294967295 || u32(o + 88) !== 4294967295 || u32(o + 92) !== 4294967295 || u32(o + 96) !== 4294967295) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96], o)
    }

    ö(u32(o + 8), get_interfaceframe_72_08)

    switch (u32(o + 12)) {
    case 4:
        ö(u32(o + 20), get_interfaceframe_72_20t4)
        break;
    case 7:
        ö(u32(o + 20), get_interfaceframe_72_20t7)
        break;
    case 38:
    case 106:
    case 107:
        ö(u32(o + 20), get_interfaceframe_72_20t38)
        break;
    default:
        u32(o + 20) ? console.log("is value") : null
    }

    switch (u8(o + 19)) {
    case 0:
        ö(u32(o + 24), get_interfaceframe_72_24t0)
        break;
    case 1:
        ö(u32(o + 24), get_interfaceframe_72_24t1)
        break;
    case 3:
        ö(u32(o + 24), get_interfaceframe_72_24t3)
        break;
    case 5:
        ö(u32(o + 24), get_interfaceframe_72_24t5)
        break;
    case 6:
    case 7:
        ö(u32(o + 24), get_interfaceframe_72_24t6)
        break;
    case 10:
        ö(u32(o + 24), get_interfaceframe_72_24t10)
        break;
    case 12:
        ö(u32(o + 24), get_interfaceframe_72_24t12)
        break;
    case 13:
        ö(u32(o + 24), get_interfaceframe_72_24t13)
        break;
    case 14:
        ö(u32(o + 24), get_interfaceframe_72_24t14)
        break;
    case 15:
        ö(u32(o + 24), get_interfaceframe_72_24t15)
        break;
    default:
        u32(o + 24) ? console.log('offset') : console.log('no offset')
    }

    ö(u32(o + 32), get_interfaceframe_72_32)
    ö(u32(o + 44), get_interfaceframe_72_44)

    if (u32(o + 48) && u8(o + 29) !== 3) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96], o)
    }

    ö(u32(o + 52), get_interfaceframe_72_52)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 12), get_interfaceframe_72_72)
    }

}

function get_interfaceframe_72_08(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_interfaceframe_72_08_08)
    }

}
function get_interfaceframe_72_08_08(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)
    }

    switch (u8(o)) {
    case 1:
        ö(u32(o + 4), get_xdx_interface_72_08_08_04t1)
        break;
    case 2:
        ö(u32(o + 4), get_interfaceframe_72_08_08_04t2)
        break;
    case 6:
        ö(u32(o + 4), get_interfaceframe_72_08_08_04t6)
        break;
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)

        // u32(o + 4) ? console.log("is value") : console.log("not value")
    }
}

function get_xdx_interface_72_08_08_04t1(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_interfaceframe_72_08_08_04t2(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }

    ö(u32(o + 4), get_interfaceframe_72_08_08_04t2_04)
}
function get_interfaceframe_72_08_08_04t2_04(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_interfaceframe_72_08_08_04t6(o) {
    if (u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
    }
}

function get_interfaceframe_72_20t4(o) {
    if (f32(o + 0) !== 12.680000305175781 || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 5000 || f32(o + 20) !== 10000 || f32(o + 24) !== -7000 || u32(o + 28)) {
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, ], o)
    }
}

function get_interfaceframe_72_20t7(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_20t38(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_44(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    }
}

function get_interfaceframe_72_32(o) {

    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 24), get_interfaceframe_72_32_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_interfaceframe_72_32_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_interfaceframe_72_32_20)
    }

    if (fileextension == 'xdx' || file_version === 249) {
        // ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

        for (let i = 0; i < u32(o + 32); i++) {
            ö(u32(o + 36) + (i * 28), get_xdx_interface_12)
        }
    } else {
        for (let i = 0; i < u32(o + 32); i++) {
            ö(u32(o + 36) + (i * 28), get_interfaceframe_12)
        }
    }

}

function get_interfaceframe_72_32_12(o) {// ü(1, [u32, 0,u8, 4,u8, 5,u8, 6,u8, 7, u32, 8, u32, 12, u32, 16, u32, 20], o)

}
function get_interfaceframe_72_32_20(o) {
    if (u32(o + 0) || u8(o + 6) || u8(o + 7)) {// ü(1, [u32, 0, u16, 4, u8, 6, u8, 7, u32, 8], o)
    }

    if (u16(o + 4) === 0) {
        ö(u32(o + 8), get_interfaceframe_72_32_20_08t0)
    } else if (u16(o + 4) === 1) {
        ö(u32(o + 8), get_interfaceframe_72_32_20_08t1)
    } else {// console.log("?")
    // ü(1, [u32, 0, u16, 4, u8, 6, u8, 7, u32, 8], o)

    }

}

function get_interfaceframe_72_32_20_08t0(o) {

    if (u8(o + 4) !== 4 || u8(o + 5) || u32(o + 8) || u32(o + 12)) {// ü(1, [u32, 0, u8, 4, u8, 5, u16, 6, u32, 8, u32, 12, ], o)
    }
}

function get_interfaceframe_72_32_20_08t1(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 0), get_interfaceframe_72_32_20_08t1_00)
    ö(u32(o + 4), get_interfaceframe_72_32_20_08t1_04)

}
function get_interfaceframe_72_32_20_08t1_00(o) {
    if (u32(o + 0) !== 412 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_interfaceframe_72_32_20_08t1_00_04)

}
function get_interfaceframe_72_32_20_08t1_00_04(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_32_20_08t1_04(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_24t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    ä(sparkler, u32(o), get_spark)

}

function get_interfaceframe_72_24t14(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u8(o + 274) || u8(o + 275) || u32(o + 280) || u32(o + 284)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u8, 272, u8, 273, u8, 274, u8, 275, u32, 276, u32, 280, u32, 284], o)
    }

    if (u8(o + 272) === 2) {
        ö(u32(o + 276), get_interfaceframe_72_24t14_276)
    } else {
        u32(o + 276) ? console.log("a") : null
    }

}
function get_interfaceframe_72_24t14_276(o) {
    if (u8(o + 3) || u32(o + 4) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
}
function get_interfaceframe_72_24t13(o) {
    if (u8(o + 0) || u8(o + 1) !== 5 || u8(o + 2) || u8(o + 3) || u32(o + 8) !== 1) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

    ö(u32(o + 4), get_interfaceframe_72_24t13_04)
    ö(u32(o + 12), get_interfaceframe_72_24t13_12)

}
function get_interfaceframe_72_24t13_12(o) {
    if (f32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_24t13_04(o) {
    if (u32(o + 12)) {
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
    }

}

function get_interfaceframe_72_24t12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_24t10(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_interfaceframe_72_24t3(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_interfaceframe_72_24t3_04)
    }

    ö(u32(o + 16), get_interfaceframe_72_24t3_16)

}
function get_interfaceframe_72_24t3_04(o) {
    if (u32(o) === 0 || u32(o + 4) === 0) {
        ü(1, [u32, 0, u32, 4], o)
    }

    ä(model_link, u32(o), get_model_link)
    ä(sound_controls, u32(o + 4), get_sound_controls)
}

function get_model_link(offset) {
    let html = ''

    if (u8(offset + 51) || u32(offset + 60) || u32(offset + 68) || u32(offset + 72) || u32(offset + 76)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }

    ä(interface_sub_model, u32(offset + 8), get_model_sub_link)

    ä(model_animation_1, u32(offset + 12), get_model_animation_1)
    ä(model_animation_2, u32(offset + 16), get_model_animation_2)

    for (let i = 0; i < u32(offset + 20); i++) {
        get_interfaceframe_72_24t3_1_1_2_2(u32(offset + 24) + (i * 4) + offset_mid)
    }
    for (let i = 0; i < u32(offset + 28); i++) {
        get_interfaceframe_72_24t3_1_1_2_3(u32(offset + 32) + (i * 8) + offset_mid)
    }

    for (let i = 0; i < u32(offset + 40); i++) {
        get_mys_a(u32(offset + 44) + offset_mid + (i * 64))
    }

    if (u32(offset + 52)) {
        get_5t3_52(u32(offset + 52) + offset_mid)
    }
    if (u32(offset + 56)) {
        get_5t3_56(u32(offset + 56) + offset_mid)
    }
    if (u32(offset + 64)) {
        get_5t3_64(u32(offset + 64) + offset_mid)
    }

    return html
}

function get_interfaceframe_72_24t3_1_1_2_3_44(o) {
    if (u8(o + 1) || u32(o + 8) || u32(o + 12) || f32(o + 28) || f32(o + 52) || f32(o + 56) || f32(o + 60)) {
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, ], o)
    }

    if (u8(o) === 2 && u16(o + 2) === 0) {// ü(0, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, ], o)
    }

    if (u32(o + 4)) {

        if (u8(o) === 1) {
            get_interfaceframe_72_24t3_1_1_2_3_44_04t1(u32(o + 4) + offset_mid)
        } else if (u8(o) === 2) {
            get_interfaceframe_72_24t3_1_1_2_3_44_04t2(u32(o + 4) + offset_mid)
        }

        if (u8(o) === 3) {
            // console.log(u8(o), u16(o + 2))
            get_interfaceframe_72_24t3_1_1_2_3_44_04t3(u32(o + 4) + offset_mid)
        }

        // 3 = 0 u16
        // most u16s come from 2

        // 2 = can be multilinked

        // if (u8(o) === 1) {// 1 = 16
        // if 1 and u16 !==0 = 64 bytes ?
        //2 = 48
        //2 u16 === 0 = 128?

        //3 = 32
        // get_interfaceframe_72_24t3_1_1_2_3_44_04(u32(o+4)+offset_mid)
        // }
    }

}

function get_interfaceframe_72_24t3_1_1_2_3_44_04t2(o) {
    if (u32(o + 0) !== 1 || u8(o + 8) !== 1 || u8(o + 10) || u8(o + 11) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, ], o)

    }

}
function get_interfaceframe_72_24t3_1_1_2_3_44_04t1(o) {
    if (u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
}
function get_interfaceframe_72_24t3_1_1_2_3_44_04t3(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(0, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    // if (u32(o+16) !== (o+32) - offset_mid) {
    // }
    if (u32(o + 16)) {// get_interfaceframe_72_24t3_1_1_2_3_44_04t3_16(u32(o+16)+offset_mid)
    }

}

function get_interfaceframe_72_24t3_1_1_2_3_44_04t3_16(o) {
    ü(0, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_5t3_52(offset) {
    if (u32(offset + 8) || u32(offset + 12)) {
        console.log(`F ${f32(offset + 0)} | F ${f32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || offset: ${offset} | mid:${offset_mid}`)
    }
}
function get_5t3_56(offset) {
    if (u32(offset + 8) || u32(offset + 12)) {
        console.log(`-2> F ${f32(offset + 0)} | F ${f32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || offset: ${offset} | mid:${offset_mid}`)
    }

}

function get_5t3_64(o) {

    if (f32(o + 12) || f32(o + 28) || f32(o + 36) || f32(o + 40) || f32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
    }

}

function get_model_sub_link(offset) {

    if (u32(offset + 20) || u32(offset + 24) || u32(offset + 28)) {
        console.log(`${u32(offset + 0)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} | ${u32(offset + 16)} | ${u32(offset + 20)} | ${u32(offset + 24)} | ${u32(offset + 28)} || offset: ${offset} | mid:${offset_mid}`)
    }

    ä(model_animation_2, u32(offset + 0), get_model_animation_2)

    for (let i = 0; i < u32(offset + 4); i++) {
        get_interfaceframe_72_24t3_1_1_2_2(u32(offset + 8) + (i * 4) + offset_mid)
    }
    for (let i = 0; i < u32(offset + 12); i++) {
        get_interfaceframe_72_24t3_1_1_2_3(u32(offset + 16) + (i * 8) + offset_mid)
    }
}

function get_interfaceframe_72_24t3_1_1_2_2(o) {

    for (let i = 0; i < model_patch.length; i++) {
        if (model_patch[i][0] + offset_mid === o && model_patch[i][2] !== 0) {
            return
        }
    }

    ä(models_array, u32(o + 0), get_models)

}
function get_interfaceframe_72_24t3_1_1_2_3(o) {
    if (u16(o + 6)) {
        ü(0, [u32, 0, u16, 4, u16, 6, ], o)
    }
    for (let i = 0; i < model_patch.length; i++) {
        if (model_patch[i][0] + offset_mid === o && model_patch[i][2] !== 0) {
            return
        }
    }

    ä(models_array, u32(o + 0), get_models)

}
function get_interfaceframe_72_24t3_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12)) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }

    // ö(u32(o + 8), get_interfaceframe_72_24t3_16_08)

}
function get_interfaceframe_72_24t3_16_08(o) {
    if (u32(o + 0) !== 1 || u8(o + 4) !== 4 || u8(o + 5) || u16(o + 6) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u16, 6, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_24t5(o) {
    if (u8(o + 4) !== 5 || u8(o + 6) || u8(o + 7) || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12], o)
    }

}

function get_interfaceframe_72_24t0(o) {
    if (u8(o + 2) || u8(o + 3) || u8(o + 14) || u8(o + 15)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)
    }

    switch (u8(o)) {
    case 0:
        break;
    case 1:
        ä(models_array, u32(o + 4), get_models)
        break;
    case 3:
        ö(u32(o + 8), get_interfaceframe_72_24t0_08)
        break;
    default:
        console.log(u8(o))
    }

}
function get_interfaceframe_72_24t0_08(o) {
    if (u8(o + 10) || u32(o + 12) || u8(o + 17) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u8, 16, u8, 17, u16, 18, u32, 20, u32, 24, u32, 28, ], o)
    }

}

function get_frame_multi_font(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    ö(u32(o + 4), get_frame_multi_font_04)
}

function get_frame_multi_font_04(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }

    ä(fonts, u32(o + 12), get_fonts)
    ä(fonts, u32(o + 28), get_fonts)
    ä(fonts, u32(o + 32), get_fonts)

}

function get_interfaceframe_72_24t1(o) {
    if (u32(o + 28)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u16, 18, u16, 20, u8, 22, u8, 23, f32, 24, u32, 28], o)
    }

    switch (u8(o)) {
    case 0:
        ä(texts, u32(o + 4), get_text)
        break;
    case 1:
        ö(u32(o + 8), get_interfaceframe_72_24t1_08t1)
        break;
    case 3:
        ö(u32(o + 8), get_interfaceframe_72_24t1_08t3)
        break;
    default:
        console.log(u8(o))
    }

    switch (u8(o + 2)) {
    case 0:
    case 2:
    case 5:
        ä(fonts, u32(o + 12), get_fonts)
        break;
    case 1:
        ä(multi_font, u32(o + 12), get_frame_multi_font)
        break;
    case 2:
        ä(fonts, u32(o + 12), get_fonts)
        break;
    case 5:
        ä(fonts, u32(o + 12), get_fonts)
        break;
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u16, 18, u16, 20, u8, 22, u8, 23, f32, 24, u32, 28], o)
        console.log(u8(o + 2))
    }

}

function get_interfaceframe_72_24t1_08t1(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u16, 10, u32, 12], o)
    }
    if (fileextension === "xdx" || file_version === 249) {
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 4), get_xdx_interface_72_24t1_08_04)
        }
    } else {
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 8), get_interfaceframe_72_24t1_08t1_04)
        }
    }

}

function get_interfaceframe_72_24t1_08t3(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_72_24t1_08t1_04(o) {
    if (u32(o + 4)) {
        ü(1, [u32, 0, u32, 4], o)
    }
    ä(texts, u32(o), get_text)

}

function get_xdx_interface_72_24t1_08_04(o) {
    //     ü(1, [u32, 0], o)
    ä(texts, u32(o), get_text)
}

function get_interfaceframe_72_52(o) {
    if (u32(o + 40) || u32(o + 44)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_interfaceframe_72_52_00)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_interfaceframe_72_52_00)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_interfaceframe_72_52_00)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_interfaceframe_72_52_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_interfaceframe_72_52_36)
    }
}
function get_interfaceframe_72_52_00(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
    }
}

function get_interfaceframe_72_52_28(o) {
    if (u8(o + 6) || u8(o + 7)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
    }
}
function get_interfaceframe_72_52_36(o) {
    if (u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)
    }
}

function get_interfaceframe_72_72(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)
    }

    ö(u32(o + 4), get_interfaceframe_72_72_04)

}

function get_interfaceframe_72_72_04(o) {
    if (u32(o + 52) || u32(o + 56) || u32(o + 60)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    }

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_interfaceframe_72_72_04_04)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_interfaceframe_72_72_04_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_interfaceframe_72_72_04_20)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_interfaceframe_72_72_04_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_interfaceframe_72_72_04_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 48), get_interfaceframe_72_72_04_44)
    }

    ä(sound_controls, u32(o + 48), get_sound_controls)

}

function get_interfaceframe_72_72_04_12(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
    }
}

function get_interfaceframe_72_72_04_36(o) {
    if (u8(o + 6) || u8(o + 7)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
    }

}

function get_interfaceframe_72_72_04_44(o) {
    if (u32(o + 16) || f32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    }
}

function get_interfaceframe_72_72_04_28(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
    }
}

function get_interfaceframe_72_72_04_20(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28)) {
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
    }

}
function get_interfaceframe_72_72_04_04(o) {

    if (u32(o + 0) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16], o)
    }

    if (fileextension === "xdx" || file_version === 249) {
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 8), get_xdx_interface_72_72_04_04_16)
        }
    } else {
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 12), get_interfaceframe_72_72_04_04_16)
        }
    }

}

function get_interfaceframe_72_72_04_04_16(o) {
    if (u32(o + 0)) {
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    }

    if (u32(o + 4) === 0) {
        ö(u32(o + 8), get_interfaceframe_72_72_04_04_16_08t0)
    } else if (u32(o + 4) === 3) {
        ä(sound_controls, u32(o + 8), get_sound_controls)
        // ö(u32(o + 8), get_interfaceframe_72_72_04_04_16_08t3)
    }

}

function get_interfaceframe_72_72_04_04_16_08t0(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u16, 6, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }
}

function get_interfaceframe_72_72_04_04_16_08t3(o) {
    if (u32(o + 0) !== 200 || u32(o + 4) || u32(o + 8) !== 1 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 16), get_interfaceframe_72_72_04_04_16_08t3_16)
}

function get_interfaceframe_72_72_04_04_16_08t3_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 4), get_interfaceframe_72_72_04_04_16_08t3_16_04)

}

function get_interfaceframe_72_72_04_04_16_08t3_16_04(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    }
    ö(u32(o + 0), get_interfaceframe_72_72_04_04_16_08t3_16_04_00)

}

function get_interfaceframe_72_72_04_04_16_08t3_16_04_00(o) {
    if (u32(o + 0) || u8(o + 4) || u8(o + 5) || u8(o + 6) !== 1 || u8(o + 7) || u32(o + 12) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
    ö(u32(o + 8), get_interfaceframe_72_72_04_04_16_08t3_16_04_00_08)
}

function get_interfaceframe_72_72_04_04_16_08t3_16_04_00_08(o) {
    if (u32(o + 0) || f32(o + 4) !== 1000 || u32(o + 8) !== 6400 || f32(o + 12) !== 0.5) {
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, ], o)
    }
}

function get_xdx_interface_72_72_04_04_16(o) {
    // ü(1, [u32, 0, u32, 4], o)
    if (u32(o) === 0) {
        ö(u32(o + 4), get_interfaceframe_72_72_04_04_16_08t0)
    } else if (u32(o) === 3) {
        ö(u32(o + 4), get_interfaceframe_72_72_04_04_16_08t0)
    } else {
        console.log("?")
    }

}

function get_interfaceframe_72_24t6(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_interfaceframe_72_12)
    }

    ä(frames, u32(o), get_interfaceframe)

}

function get_interfaceframe_72_12(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7)) {
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)
    }

}

function get_texture_animas(offset) {
    // console.log(` ${u32(offset + 0 )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | ${u32(offset + 12 )} | ${u32(offset + 16 )} | ${u32(offset + 20 )} | ${u32(offset + 24 )} | ${u32(offset + 28 )} | ${u32(offset + 32 )} | ${u32(offset + 36 )} | ${u32(offset + 40 )} | ${u32(offset + 44 )} | offset:${offset} ; mid: ${offset_mid}   `)
    if (u32(offset + 4)) {// get_texture_animas_04(u32(offset + 4 )+offset_mid)
    }

    for (let i = 0; i < u32(offset + 16); i++) {// get_texture_animas_20(u32(offset + 20 ) + offset_mid + (i * 12))

    }

}

function get_texture_animas_04(offset) {
    console.log(`-> ${u32(offset + 0)} | ${u32(offset + 4)} | [ ${u8(offset + 8)}, ${u8(offset + 9)}, ${u8(offset + 10)}, ${u8(offset + 11)} ] | ${u32(offset + 12)} | ${u32(offset + 16)} | ${u32(offset + 20)} | ${u32(offset + 24)} | ${u32(offset + 28)} | offset:${offset} ; mid: ${offset_mid}   `)

}
function get_texture_animas_20(offset) {// console.log(`-> F ${f32(offset + 0 )} | F ${f32(offset + 4 )} | [ ${u8(offset + 8 )}, ${u8(offset + 9 )}, ${u8(offset + 10 )}, ${u8(offset + 11 )} ] | F ${f32(offset + 12 )} offset:${offset} ; mid: ${offset_mid}   `)

}

function extract_patcher(offset, amount) {

    let temp_array = []
    if (fileextension === "xgc") {
        for (let i = 0; i < amount; i++) {
            temp_array.push([u32(offset + (i * 8)), u16(offset + 6 + (i * 8)), u16(offset + 4 + (i * 8))])
        }
    } else {

        for (let i = 0; i < amount; i++) {
            temp_array.push([u32(offset + (i * 8)), u16(offset + 4 + (i * 8)), u16(offset + 6 + (i * 8))])
        }
    }
    return temp_array

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

function x_addEventListener() {
    temp_div = document.getElementById('file_viewer').children[0]

    x_addEventListener_file_viewer(temp_div)

}

// function x_addEventListener_file_viewer(div) {
//     //arrow
//     //img
//     //file name
//     // console.log(div)

//     div.children[0].addEventListener('click', arrow_click)

//     div.children[2].addEventListener('click', file_click)

//     // console.log(div.children[3])

//     if (div.children[3] != null) {
//         for (let i = 3; i < div.children.length; i++) {
//             x_addEventListener_file_viewer(div.children[i])
//         }
//     }
// }

function x_addEventListener_file_viewer(div) {
    // arrow
    div.children[0].addEventListener('click', arrow_click);

    // file name
    div.children[2].addEventListener('click', file_click);

    // iterate over child elements
    for (const child of div.children) {
        // check if the child has children and add event listeners recursively
        if (child.children.length > 0) {
            x_addEventListener_file_viewer(child);
        }
    }
}

// function arrow_click() {
//     // console.log(this.innerHTML)

//     if (this.innerHTML === '→') {
//         this.innerHTML = '↓'
//         this.style.paddingRight = '6px'
//         this.style.paddingLeft = '4px'

//         // console.log(this.parentNode.children.length - 3)

//         for (let i = 3; i < this.parentNode.children.length; i++) {
//             this.parentNode.children[i].style.display = 'block'
//         }

//         if (this.nextElementSibling.nextElementSibling.nextElementSibling != null) {
//             this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block'
//         }

//     } else {
//         this.innerHTML = '→'
//         this.style.paddingRight = '0px'
//         this.style.paddingLeft = '0px'

//         for (let i = 3; i < this.parentNode.children.length; i++) {
//             this.parentNode.children[i].style.display = 'none'
//         }

//         if (this.nextElementSibling.nextElementSibling.nextElementSibling != null) {
//             this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none'
//         }

//     }
// }

function arrow_click() {
    const isOpening = this.innerHTML === '→';

    this.innerHTML = isOpening ? '↓' : '→';
    this.style.paddingRight = isOpening ? '6px' : '0px';
    this.style.paddingLeft = isOpening ? '4px' : '0px';

    for (let i = 3; i < this.parentNode.children.length; i++) {
        this.parentNode.children[i].style.display = isOpening ? 'block' : 'none';
    }

    const nextElementSibling = this.nextElementSibling;
    if (nextElementSibling && nextElementSibling.nextElementSibling.nextElementSibling) {
        nextElementSibling.nextElementSibling.nextElementSibling.style.display = isOpening ? 'block' : 'none';
    }
    position = document.getElementsByClassName("file_is_highlighted")[0]
    if (position.getBoundingClientRect().x === 0 && position.getBoundingClientRect().y === 0) {
        this.parentElement.children[2].click()
    }

}

function _Tx(array, f, n, offset, is_3) {

    if (array.a.includes(f(offset + n))) {} else {
        if (is_3 === 1) {
            array.def.push(f)
            array.o.push(offset + n)
            if (f.name === "u8") {
                for (let i = 0; i < 4; i++) {
                    array.a.push(f(offset + n + i))
                }
            } else {
                array.a.push(f(offset + n))
            }
        } else {

            array.a.push(f(offset + n))
            array.o.push(offset + n)

        }
    }
}

function array_log() {

    let if_section = 'if('
    let vertical = ''

    let last = 0
    let html = `
<h2 id="${temp_array__[0].name}">${temp_array__[0].name}</h2>
<table class="binary_table">
    <tbody>
        <tr>
            <th>Offset</th>
            <th>Type</th>
            <th>Description</th>
        </tr>`

    let is_above = (currentValue)=>currentValue > 1000;
    let is_below = (currentValue)=>currentValue < 0xfffffff;

    for (let i = 0; i < temp_array__[0].subarrays.length; i++) {
        last = log(temp_array__[0].subarrays[i], i)
    }

    last = divisible(last, 4)

    html += `
    </tbody>
    <tfoot>
        <tr>
            <th colspan="3">${last} bytes</th>
        </tr>
    </tfoot>
</table>
<hr/>
`
    if (last === 0) {} else {
        console.groupCollapsed('vertical')
        console.log(vertical)
        console.groupEnd()

        console.groupCollapsed('table')
        console.log(html)
        console.groupEnd()
    }

    if (if_section === "if(") {} else {

        if_section = if_section.substr(0, if_section.length - 2)

        if_section += `)
    {`
        console.groupCollapsed('if statement')
        console.log(if_section)
        console.groupEnd()

    }
    if (temp_array__[0].struct_check.length) {
        let struct_html = "ü(1, ["

        let struct_array = temp_array__[0].struct_check

        for (let i = 0; i < struct_array.length; i++) {

            if (struct_array[i].def.find((e)=>e.name === "f32")) {
                struct_html += `f32, ${struct_array[i].n}, `
            } else if (struct_array[i].def.find((e)=>e.name === "u8")) {
                struct_html += `u8, ${struct_array[i].n}, u8, ${struct_array[i].n + 1}, u8, ${struct_array[i].n + 2}, u8, ${struct_array[i].n + 3}, `
            } else {
                struct_html += `u32, ${struct_array[i].n}, `
            }
        }

        struct_html += `], o)\n\n ${temp_array__[0].struct_amount.toString()}`

        console.log(struct_html)
    }

    console.log(`LINE: %c ${temp_array__[0].line.toString()}`, 'color:blue')

    function log(a, i) {
        if (a.a.length) {
            vertical += `${a.a.toString()} | ${a.def} | ${a.number} | ${a.o[a.o.length - 1]}\n`

            let _1st = a.number
            let _2nd = a.def
            let _3rd = 'always ' + a.a[0]

            if (a.a.length === 1 && a.a[0] === 0) {
                if_section += `${a.def}(o+${a.number}) ||`
            } else if (a.a.length === 1) {
                if_section += `${a.def}(o+${a.number}) !==${a.a[0]} ||`
            }

            if (_1st < 10) {
                _1st = '0' + _1st
            }

            if (_2nd === "f32") {
                _2nd = "float"
            }

            if (a.a.length === 1 && a.a[0] === 0) {
                if (_2nd === "float") {
                    _2nd = "u32"
                }
                _3rd = "0"
            } else if (a.a.length !== 1) {
                if (a.a.length > 10 && a.def === "u32" && a.a.every(is_above) && a.a.every(is_below)) {
                    _3rd = 'offset maybe?'
                } else {
                    if (a.a.length > 10) {
                        _3rd = `${a.a.reduce((a,b)=>Math.min(a, b), Infinity)} - ${a.a.reduce((a,b)=>Math.max(a, b), -Infinity)}`
                    } else {
                        _3rd = a.a.toString()
                    }
                }
            }

            html += `
        <tr class="unknown_value">
            <td>${_1st}</td>
            <td>${_2nd}</td>
            <td>${_3rd}</td>
        </tr>`
            return a.number + 1
        }
        return last
    }

}

function ü(mode, array, offset) {
    return
    // 0 = "print rows"
    // 1 = "generate table"
    // 2 = "log offsets"
    // 3 = "structure test"

    let html = ''
    let show_byte = false
    if (mode === 1) {
        show_byte = true
    }

    for (let i = 0; i < array.length; i += 2) {
        let set_type = false
        if (show_byte === true) {
            html += array[i].name + "#"
        }
        if (array[i].name === "u8" || array[i].name === "u16") {
            set_type = true
        }

        if (set_type && array[i + 1] === divisible(array[i + 1], 4)) {
            html += "[ " + array[i](array[i + 1] + offset) + ", "
        } else if (set_type && array[i + 1] + 1 !== divisible(array[i + 1], 4)) {
            if (array[i].name === "u16" && array[i + 1] + 2 === divisible(array[i + 1], 4)) {
                html += array[i](array[i + 1] + offset) + " ] | "
            } else {

                html += array[i](array[i + 1] + offset) + ", "
            }
        } else if (set_type && array[i + 1] + 1 === divisible(array[i + 1], 4)) {
            html += array[i](array[i + 1] + offset) + " ] | "
        } else {
            if (array[i].name === "f32" && array[i](array[i + 1] + offset)) {
                html += array[i](array[i + 1] + offset).toFixed(2) + " | "
            } else {
                html += array[i](array[i + 1] + offset) + " | "
            }
        }

    }
    html = html.substr(0, html.length - 1)
    if (offset_mid === null) {
        html += '| %cO ' + offset
    } else {

        html += '| %cO ' + offset + " %cM " + offset_mid + " %cI " + (offset - offset_mid)
    }
    console.log(html, 'color:red;', 'color:blue;', 'color:green;')
    if (mode === 1) {
        //
        if (temp_array__[0].subarrays.length === 0) {

            for (let i = 0; i < array.length; i += 2) {
                temp_array__[0].subarrays.push({
                    a: [],
                    def: array[i].name,
                    number: array[i + 1],
                    o: []
                })
            }
        }

        for (let i = 0, ii = 0; i < array.length; i += 2,
        ii++) {
            _Tx(temp_array__[0].subarrays[ii], array[i], array[i + 1], offset)
        }

    }

    var caller_line = (new Error).stack.split("\n")[2].split('js:')[1].split(':')[0]
    var caller_name = (new Error).stack.split("\n")[2].split('(')[0].split('at get_')[1].trim()

    if (temp_array__[0].line === 0) {
        temp_array__[0].line = [caller_line]
    } else {
        if (temp_array__[0].line.includes(caller_line)) {} else {
            temp_array__[0].line.push(caller_line)
        }
    }

    temp_array__[0].name = caller_name

    if (mode === 2) {
        let same_offset = []
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] % 4 === 0) {
        //     }
        // }

        for (let o = 0; o < array.length; o++) {
            same_offset.push({
                a: [],
                n: array[o],
            })
            if (array[o] % 4 === 0) {

                offset_act = (offset + array[o]) - offset_mid

                // console.log(same_offset, log_array.p_texture, array)

                for (let i = log_array.p_texture; i < buffer.byteLength - 4; i += 4) {
                    u32(i) === offset_act ? same_offset[o].a.push(i) : 0
                }
            }
        }

        let offsetlog = ''

        for (let i = 0; i < same_offset.length; i++) {
            let html = '?'
            if (same_offset[i].a.length) {
                for (let ii = 0; ii < same_offset[i].a.length; ii++) {
                    // html = check_val(same_offset[i].a[ii])
                    //     if (log_array.p_texture) {
                    //         if (log_array.p_animation) {
                    //             if (same_offset[i].a[ii] > log_array.p_animation) {//not texture
                    //             } else {
                    //                 // is texture
                    //                 html = 'P_T'
                    //             }
                    //         } else if (log_array.p_sound) {
                    //             if (same_offset[i].a[ii] > log_array.p_sound) {//not texture
                    //             } else {
                    //                 // is texture
                    //                 html = 'P_T'
                    //             }
                    //         } else if (log_array.order) {
                    //             if (same_offset[i].a[ii] > log_array.order) {//not texture
                    //             } else {
                    //                 // is texture
                    //                 html = 'P_T'
                    //             }

                    //         }

                    //     }

                    if (same_offset[i].a[ii] < offset) {
                        offsetlog += `B!#%*${same_offset[i].a[ii]}, `
                    } else {
                        offsetlog += `A-${same_offset[i].a[ii]}, `
                    }
                }
                // offsetlog += ` ${html} ${same_offset[i].a[ii]}`
            }
            if (isFinite(same_offset[i].n)) {
                offsetlog += `| ${same_offset[i].n} \n`
            }

        }
        console.log(offsetlog)
    }

    if (mode === 3) {
        let outer_i = 0
        let o_limit = 1024

        for (let o = 16; o < o_limit; o += 16) {

            offset_act = (offset + o) - offset_mid

            for (let i = log_array.p_texture; i < log_array.p_model - 4; i += 4) {
                if (u32(i) === offset_act) {
                    outer_i = o
                    console.log(`%cStruct Size: %c ${o} %c| Init: %c ${i - o}`, 'color:blue;', 'color:red;', 'color:blue;', 'color:red;')

                    i = log_array.p_model
                    o = o_limit

                } else if (o + 16 === o_limit) {
                    console.log('no offset found')
                    return;
                }
            }
        }

        if (temp_array__[0].struct_amount === 0) {

            for (let i = 0; i < outer_i; i += 4) {
                temp_array__[0].struct_check.push({
                    a: [],
                    def: [],
                    n: i,
                    o: []
                })
            }
            temp_array__[0].struct_amount = [outer_i]
        }

        if (temp_array__[0].struct_amount.includes(outer_i)) {} else {
            temp_array__[0].struct_amount.push(outer_i)
        }

        let _3_array = []

        for (ii = 0,
        i = 0; i < outer_i; i += 4,
        ii++) {
            offset_act = (offset + i)
            if (u32(offset_act) === 0) {
                _3_array.push(u32)
                _3_array.push(i)
            } else if (u32(offset_act) < 135883680) {
                _3_array.push(u32)
                _3_array.push(i)

            } else if (f32(offset_act) < 10000 && f32(offset_act) > -10000 && !f32(offset_act).toString().includes('e')) {
                _3_array.push(f32)
                _3_array.push(i)

            } else {
                _3_array.push(u8)
                _3_array.push(i)

            }

        }

        for (let i = 0, ii = 0; ii < temp_array__[0].struct_check.length && _3_array[i + 1] !== undefined; i += 2,
        ii++) {

            _Tx(temp_array__[0].struct_check[ii], _3_array[i], _3_array[i + 1], offset, 1)
        }

    }

    function check_val(o) {
        let html = ''
        let array_temp = [{
            name: log_array.p_texture,
            s: "P_T"
        }, {
            name: log_array.p_animation,
            s: "P_A"
        }, {
            name: log_array.p_sound,
            s: "P_S"
        }, {
            name: log_array.order,
            s: "Or"
        }, {
            name: log_array.model,
            s: "Mo"
        }, {
            name: log_array.model_anim_1,
            s: "Ma1"
        }, {
            name: log_array.model_anim_2,
            s: "Ma2"
        }, {
            name: log_array.unordered,
            s: "Un"
        }, {
            name: log_array.p_model,
            s: "P_M"
        }, {
            name: log_array.p_offset,
            s: "P_O"
        }, ]

        for (let i = 0; i < array_temp.length; i++) {
            if (array_temp[i].name) {
                check_check(array_temp[i])
            }

        }

        function check_check(a) {
            for (let ii = 0; i < array_temp.length; ii++) {
                if (array_temp[ii].name) {
                    if (array_temp[i].name < array_temp[ii].name) {
                        html = array_temp[i].s
                    }
                }
            }
        }

        return html
    }

}
temp_array__ = [{
    subarrays: [],
    struct_check: [],
    offset_check: [],
    struct_amount: 0,
    line: 0,
    name: 0,
}]

function ö(o, f, t) {
    if (o) {
        // if (temp_array__[0].offset_check.includes(o + offset_mid)) {
        //     if (o === 8187744) {
        //         let error_caller = (new Error).stack
        //         var caller_name = (new Error).stack.split("\n")[2].split('(')[0].split('at get_')[1].trim()
        //         console.log(error_caller, caller_name, o, o + offset_mid, temp_array__[0].offset_check)
        //     }
        // } else {
        //     temp_array__[0].offset_check.push(o + offset_mid)
        // }
        f(o + offset_mid)
    }

}
function ä(a, o, f) {
    if (o) {
        if (a.includes(o + offset_mid)) {//nothing
        } else {
            if (a === models_array) {
                for (let i = 0; i < model_patch.length; i++) {
                    if (model_patch[i][0] === o && model_patch[i][2] !== 0) {
                        return
                    }
                }
            }
            a.push(o + offset_mid)
            f(o + offset_mid)
        }
    }
}

function to_table_i(html) {
    // <div id="myDiv"></div>';
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = html;
    let table = htmlObject.getElementsByTagName("table")
    global_link = htmlObject.children[5].children[1].children

    let print_html = ''

    // for (let i = 0; i < global_link.length; i++) {
    //     if (global_link[i].tagName === "HR" && global_link[i+1].tagName !== "HR" &&) {
    //         let table_index = 1
    //         if (global_link[i+1].tagName !== "H2") {
    //         }else{
    //             table_index = 2
    //             return
    //         }

    //     }
    // }

    function in_interface_72_24t10(o, x) {
        x.push({
            u_00: u32(o + 0),
            u_04: u32(o + 4),
            u_08: u32(o + 8),
            u_12: u32(o + 12),
        })
    }

    /*
        function get_layer_24t3(offset, XFA) {
        x.push({
            u_00: u32(o + 0),
            u_04: u32(o + 4),
            u_08: u32(o + 8),
            u_12: u32(o + 12),
        })
        
    }
*/

}

function html_to_import(inputHtml) {
    // Parse the input HTML string into a DOM object
    const parser = new DOMParser();
    doc = parser.parseFromString(inputHtml, 'text/html');

    let jsFunction = ''

    const h2_amount = doc.getElementsByTagName('h2');
    const table_amount = doc.getElementsByTagName('table');
    for (let i = 0; i < h2_amount.length; i++) {
        h2Element = h2_amount[i]
        const table = table_amount[i]

        // Find the <h2> element to extract the function name
        // const h2Element = doc.querySelector('h2');
        if (!h2Element) {
            return "Failed to find the function name";
        }

        const functionName = h2Element.id;

        // Find all the <tr> elements within the <table> for data extraction
        // const table = doc.querySelector('table');
        const rows = table.querySelectorAll('tr');

        // Initialize the JavaScript function string
        jsFunction += "function im_" + functionName + "(o, ";
        let is_i = 0
        if (table.children[1].children[0].children[0].innerText.includes('per') || i === 0) {
            is_i = 'i'
            jsFunction += `i ,`
        }
        let am_bytes = `\n// ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()} bytes;\n`
        jsFunction += `x) {\n`

        // Initialize an empty object for storing the data
        jsFunction += 'x.push({\n';

        let offsets = ''

        if (is_i === "i") {
            jsFunction += `    id: gen_id(),\n`
        }

        // Loop through the table rows to extract data
        rows.forEach((row,index)=>{
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = cells[0].textContent;
                let type;
                switch (cells[1].textContent) {
                case "u32":
                case "u16":
                case "u8":
                    type = cells[1].textContent;
                    break;
                case "float":
                    type = "f32"
                    break;
                default:
                    type = "// unknown"
                }

                // const type = cells[1].textContent;
                let description
                let ishook = false

                if (cells[2].children.length) {
                    if (cells[2].children.length === 1 && cells[2].children[0].tagName === "A") {
                        let href = cells[2].children[0].href.split("#")[1]
                        doc.getElementById(href)
                        let t_h2_amount = doc.getElementsByTagName('h2');
                        let ttable_amount = doc.getElementsByTagName('table');
                        for (let ii = 1; ii < h2_amount.length; ii++) {
                            t_h2_amount = h2_amount[ii]
                            const table = ttable_amount[ii]

                            if (t_h2_amount.id === href) {
                                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                                    description = 'multi offset'
                                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                                } else {
                                    description = 'offset'
                                }
                                ii += 1000

                            } else {
                                switch (cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()) {
                                case "unknown":
                                case "mysterious":
                                    description = 'multi offset'
                                    ishook = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                    break
                                default:
                                    description = 'unordered'
                                }

                            }

                        }

                        // description = 'offset'
                    } else {
                        description = 'unknown'
                    }
                } else {
                    if (cells[2].innerText.trim() === "0") {
                        description = '0'
                    } else {
                        description = 'normal'
                    }
                }

                let is_case = false

                if (cells[2].innerHTML.includes("based on type")) {
                    let cases = cells[2].innerHTML.split('\n')
                    is_case = ""
                    for (let i = 0; i < cases.length; i++) {
                        if (cases[i].includes("href")) {
                            let casescomma = cases[i].split(`">`)[1].split("=")[0].trim().split(",")
                            for (let ii = 0; ii < casescomma.length; ii++) {
                                is_case += `    case ${casescomma[ii].trim()}:\n`
                            }
                            let tableid = cases[i].split("#")[1].split(`">`)[0].trim()
                            let is_un = is_unordered(cases[i])
                            // let is_un = "unknown"
                            if (is_un === 'y') {
                                is_case += `        u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;

                            } else {
                                let is_ordered = getisordered(tableid)

                                is_case += `x[${is_i}].section_` + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                            }
                            is_case += "    break;\n"

                        }

                    }
                    if (is_case === "") {
                        is_case = false
                    } else {
                        let typeoffset = cells[2].innerHTML.split("based on type [")[1].split("<br>")[0].split("]")[0].trim()
                        typeoffset = typeoffset.replace(/[^0-9]*/, '')

                        let tabletds = table.getElementsByTagName("TD");
                        let bintype = "//"

                        for (let i = 0; i < tabletds.length; i += 3) {
                            if (tabletds[i].innerText.trim() === typeoffset) {
                                bintype = tabletds[i + 1].innerText
                                i += 10000
                            }
                        }
                        is_case = "switch(" + bintype + "(o + " + typeoffset + ")){\n" + is_case + "}"
                    }

                }

                if (description === "normal") {

                    if (cells[2].innerHTML.includes("string")) {
                        let propertyName = "section_" + offset;

                        jsFunction += `    ${propertyName}: [im_string(u32(o + ${offset}), 0, false)],\n`;

                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;
                    } else if (cells[2].innerHTML.includes("patch")) {
                        let propertyName = type + "_" + offset;
                        getpatch(cells[2].innerHTML, offset, propertyName, type)

                    } else {

                        // Generate the property name for the data
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),\n`;
                    }

                } else if (description === 'offset') {
                    let tableid = cells[2].children[0].href.split("#")[1]

                    jsFunction += "    section_" + offset + ": [],\n";

                    if (is_case !== false) {
                        offsets += is_case
                    } else {
                        offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    }
                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets += `// CASE // u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    // }else{
                    // }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    jsFunction += `    ` + is_ordered + `ordered_` + tableid + "_" + offset + `: 0,\n`;

                    offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
                    case "unknown":
                        multilink_amount = "04"
                        break
                    case "mysterious":
                        multilink_amount = "64"
                        break
                    }

                    console.log('/?')
                    let tableid = cells[2].children[0].href.split("#")[1]

                    jsFunction += `    section_` + offset + `: [],\n`;

                    let is_ii = 'ii'
                    is_i === 0 ? is_ii = 'i' : 0;

                    if (is_case !== false) {
                        offsets += is_case
                    }

                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets+= "// CASE"
                    // }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        offsetamount = cells[2].innerHTML.split("based on amount [")[1].split("]")[0].trim()
                    }

                    offsets += `
for (let ${is_ii} = 0; ${is_ii} < u32(o + ${offsetamount}); ${is_ii}++) {
    im_` + tableid + `(u32(o + ${offset}) + (${is_ii} * ${multilink_amount}) + g.m, ${is_ii}, x[${is_i}].section_` + offset + `);
}\n`;
                } else if (description === '0') {} else {

                    if (cells[2].innerHTML.includes("based on type")) {
                        offsets += is_case
                        jsFunction += `    section_` + offset + `: [],\n`;
                    } else if (cells[2].innerHTML.includes("href")) {
                        let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
                        jsFunction += `    section_` + offset + `: [],\n`;
                        offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; // offset? \n`;
                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;

                    } else {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//check this\n`;
                    }
                }
            }

        }
        );

        if (i === 0) {
            offsets += `return x[${is_i}].id`
        }

        // return x[0].id

        // Close the data object and the function
        jsFunction += '});\n';
        if (offsets === '') {
            if (is_i === 0) {
                jsFunction += am_bytes + `\n}\n`
            } else {
                jsFunction += `\n}\n`
            }
        } else {
            if (is_i === 0 || i === 0) {
                jsFunction += `\n ${offsets} ${am_bytes}\n}\n`
            } else {
                jsFunction += `\n ${offsets}\n}\n`
            }

        }

    }
    console.log(jsFunction)

    function is_unordered(cases) {
        let href = cases.split("href")[1].split("#")[1].split(`"`)[0]
        doc.getElementById(href)
        let t_h2_amount = doc.getElementsByTagName('h2');
        let ttable_amount = doc.getElementsByTagName('table');
        let temp = ''
        for (let ii = 1; ii < h2_amount.length; ii++) {
            t_h2_amount = h2_amount[ii]
            const table = ttable_amount[ii]

            if (t_h2_amount.id === href) {
                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                    temp = 'y'
                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                } else {
                    temp = 'y'
                }
                ii += 1000

            } else {
                temp = 'unordered'
            }

        }

        // description = 'offset'
        return temp
    }
    function getisordered(html) {
        let a = 'un'
        switch (html) {
        case "model_animation_1":
        case "model_animation_2":
        case "models":
            a = ''
            break;
        }
        return a
    }
    function getpatch(cells, offset, propertyName, type) {
        if (cells.toLowerCase().includes("texture")) {
            jsFunction += `    texture_` + offset + `: im_patch(g.texture_patch_ref, o + ${offset}),\n`;
        } else if (cells.toLowerCase().includes("animation")) {
            jsFunction += `    animation_` + offset + `: im_patch(g.animation_patch_ref, o + ${offset}),\n`;
        } else if (cells.toLowerCase().includes("sound")) {
            jsFunction += `    sound_` + offset + `: im_patch(g.sound_patch_ref, o + ${offset}),\n`;
        } else if (cells.toLowerCase().includes("model")) {
            jsFunction += `    model_` + offset + `: im_patch(g.model_ref, o + ${offset}),\n`;
        } else {
            jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//patch?\n`;
        }
    }

}

function html_to_export(inputHtml) {
    let html = inputHtml.split("function")
    // console.log(html)
    let backtostring = ''
    html.forEach((e)=>{
        if (e) {
            console.log(e)
            let function_name = "ex" + e.split("(")[0].trim().split('im')[1]
            aaa = e.replaceAll("\n", '')
            let para_i = ' e,'
            e.split(")")[0].split("(o, ")[1] === "x" ? para_i = "" : 0;
            let isend = ''
            if (para_i !== ' e,') {
                isend = "    let e = o + " + e.split("//")[1].split("bytes")[0].trim() + "\n"
            }
            let xtable
            if (e.split('x.push')[1].includes('({})')) {
                xtable = ['//nothing']
            } else {
                xtable = e.split('x.push')[1].split('});')[0].split('({\n')[1].trim().split('\n')

            }
            let xhtml = ''
            let xstring = ''
            let xpatch = ''

            let xdebug = `\n    g.debug ? ex_debug(o, "`
            for (let i = 0; i < 4; i++) {
                let a = Math.floor(Math.random() * 255)
                while (a < 48 || a > 122) {
                    a = Math.floor(Math.random() * 255)
                }
                xdebug += String.fromCharCode(a)
            }
            xdebug += `") : 0;\n`
            let xlinks = ''
            let xfor = ''
            let xml = ''

            for (let i = 0; i < xtable.length; i++) {
                let tablesplit = xtable[i].split(":")
                if (tablesplit[0].includes("//")) {//Skip
                } else if (tablesplit[1].includes("o +")) {

                    if (tablesplit[1].includes("im_patch")) {
                        console.log(tablesplit)
                        let xpatchoffset = (tablesplit[1].split(", o + ")[1].split(')')[0].trim())
                        let xpatchtype = (tablesplit[1].split("im_patch(g.")[1].split(',')[0].trim())
                        let xpatchname = (tablesplit[0].trim())

                        if (xpatchtype === "texture_patch_ref") {
                            xpatchtype = "g.texture_patch_array"
                        } else if (xpatchtype === "animation_patch_ref") {
                            xpatchtype = "g.animation_patch_array"
                        } else if (xpatchtype === "sound_patch_ref") {
                            xpatchtype = "g.sound_patch_array"
                        } else if (xpatchtype === "model_patch_ref") {
                            xpatchtype = "g.model_patch_array"
                        } else {
                            xpatchtype = '// xpatchtype unknown \n'
                        }

                        xpatch += '    ex_patch(o + ' + xpatchoffset + ", " + xpatchtype + ", x." + xpatchname + ");\n"

                        //patch
                    } else if (tablesplit[1].includes("im_string")) {
                        //string offset
                        let xstingoffset = (tablesplit[1].split("(o + ")[1].split(')')[0])
                        let xstingname = (tablesplit[0].trim())
                        xstring += "    e = ex_string(o + " + xstingoffset + ", e, x." + xstingname + ")\n"

                    } else {

                        let xobj;
                        let offset = tablesplit[1].split("+")[1].split(")")[0].trim()
                        let xname = tablesplit[0].trim()
                        if (tablesplit[1].includes("u32")) {
                            xobj = "u32"
                        } else if (tablesplit[1].includes("u16")) {
                            xobj = "u16"
                        } else if (tablesplit[1].includes("u8")) {
                            xobj = "u8"
                        } else if (tablesplit[1].includes("f32")) {
                            xobj = "f32"
                        } else {
                            xobj = 'xobj un'
                        }
                        tablesplit[0].split("u")
                        xhtml += `    s` + xobj + `(o + ${offset}, x.${xname})\n`
                    }
                }
                // offsets

            }
            next = e.split("x.push")[1].split("});")[1].trim().split('\n')

            for (let i = 0; i < next.length; i++) {
                if (next[i].includes("?") && next[i].includes(":")) {
                    let functionname = next[i].split('im')[1].split('(')[0].trim()
                    let offset = next[i].split('u32(o + ')[1].split(')')[0].trim()
                    let sectiontype = next[i].split(']')[1].split(')')[0].trim()

                    // offset
                    // e = ex_s_offset(o + 56,e,dyn_frame_section_56,x.section_56,'up')
                    xlinks += '\n    e = ex_s_offset(o + ' + offset + ", e, ex" + functionname + ", x" + sectiontype + `,'up')`
                }
            }
            xlinks.length ? xlinks += "\n" : 0;

            if (e.split("x.push")[1].split("});")[1].trim().includes('for')) {
                xfor = '\n'
                xis = e.split("x.push")[1].split("});")[1].trim().split('for')
                for (let i = 0; i < xis.length; i++) {
                    if (xis[i].includes("let")) {

                        xis1 = xis[i].split('\n')
                        let name = xis1[1].split("im")[1].split("(u")[0].trim()
                        // functionname
                        let offsetx = xis1[1].split('u32(o +')[1].split(")")[0].trim()
                        // offset
                        let amount = xis1[1].split('*')[1].split(')')[0].trim()
                        // amount
                        let amount_position = xis1[0].split('\n')[0].split("u32(o + ")[1].split(")")[0].trim()
                        // amount offsets
                        // position
                        let x_ = xis1[1].split(');')[0].split("]")[1].trim()
                        // x

                        xfor += '    if(x' + x_ + ".length){\n"
                        xfor += "        su32(o + " + amount_position + ", x" + x_ + ".length)\n"
                        xfor += "        su32(o + " + offsetx + ", e - g.m)\n"
                        xfor += "        g.oa.push(o + " + offsetx + ")\n"
                        xfor += "        let temp_offset = e \n"
                        xfor += "        e += divisible(x" + x_ + ".length * " + amount + ", 16) \n"
                        xfor += "        for (let i = 0; i < x" + x_ + ".length; i++) { \n"
                        xfor += "            e = ex" + name + "(temp_offset + (i * " + amount + "), e, x" + x_ + "[i])\n"
                        xfor += "        };\n};\n\n"

                    }
                }

            }

            let xswitchhtml = ''

            let xnextswitch = e.split("x.push")[1].split("});")[1].trim()
            let checkswitch = xnextswitch.split('switch')

            for (let switchi = 1; switchi < checkswitch.length; switchi++) {
                let checkswitch_2 = checkswitch[switchi].split('}')[0]
                xswitchhtml += checkswitch_2
                let breakcheck = checkswitch_2.split('break')
                let switchtype = breakcheck[0].split('{')[0].trim()

                for (let breaki = 1; breaki < breakcheck.length; breaki++) {

                    let casecheck = breakcheck[breaki].split('case')

                    for (let casei = 1; casei < casecheck.length; casei++) {
                        casecheck[casei].split(':')
                    }

                }

            }

            xnext = e.split("x.push")[1].split("});")[1].trim().split("\n")

            for (let i = 0; i < xnext.length; i++) {
                if (xnext[i].includes('in_ml')) {
                    let xname = xnext[i].split('].')[1].split('=')[0].trim()
                    let xarray = xnext[i].split('array')[0].split('g.')[1].split(",")[0].trim()
                    let xfunction = xnext[i].split('array')[1].split('g.')[0].split(",")[1].split('im')[1].trim()
                    let xref = xnext[i].split('array')[1].split('g.unordered_ref')[1].split(")")[0].trim()
                    let xoffset = xnext[i].split('u32(o +')[1].split(')')[0].trim()
                    xml += '    e = ex_ml(x.' + xname + ', g.' + xarray + 'array, ex' + xfunction + ', g.unordered_ref' + xref + ', o + ' + xoffset + ', e);\n'
                }

            }

            backtostring += `
function ${function_name}(o,${para_i} x){
${isend}${xhtml}${xstring}${xpatch}${xlinks}${xfor}${xml}${xswitchhtml}${xdebug}
    return e

}
`
        }
    }
    )
    console.log(backtostring)
}

function html_to_eximport(inputHtml) {
    // Parse the input HTML string into a DOM object
    const parser = new DOMParser();
    doc = parser.parseFromString(inputHtml, 'text/html');

    let jsFunction = ''

    const h2_amount = doc.getElementsByTagName('h2');
    const table_amount = doc.getElementsByTagName('table');
    for (let i = 0; i < h2_amount.length; i++) {
        h2Element = h2_amount[i]
        const table = table_amount[i]

        // Find the <h2> element to extract the function name
        // const h2Element = doc.querySelector('h2');
        if (!h2Element) {
            return "Failed to find the function name";
        }

        const functionName = h2Element.id;

        // Find all the <tr> elements within the <table> for data extraction
        // const table = doc.querySelector('table');
        const rows = table.querySelectorAll('tr');

        // Initialize the JavaScript function string
        jsFunction += "function ex_" + functionName + "(o, ";
        let is_i = 0
        if (table.children[1].children[0].children[0].innerText.includes('per')) {
            is_i = 'i'
            jsFunction += `e ,`
        }
        jsFunction += `x) {\n`

        if (is_i === 0) {
            jsFunction += `    let e = o + ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()}\n`
        }

        // Initialize an empty object for storing the data

        let offsets = ''

        // Loop through the table rows to extract data
        rows.forEach((row,index)=>{
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = cells[0].textContent;
                let type;
                switch (cells[1].textContent) {
                case "u32":
                case "u16":
                case "u8":
                    type = cells[1].textContent;
                    break;
                case "float":
                    type = "f32"
                    break;
                default:
                    type = "// unknown"
                }

                // const type = cells[1].textContent;
                let description
                let ishook = false

                if (cells[2].children.length) {
                    if (cells[2].children.length === 1 && cells[2].children[0].tagName === "A") {
                        let href = cells[2].children[0].href.split("#")[1]
                        doc.getElementById(href)
                        let t_h2_amount = doc.getElementsByTagName('h2');
                        let ttable_amount = doc.getElementsByTagName('table');
                        for (let ii = 1; ii < h2_amount.length; ii++) {
                            t_h2_amount = h2_amount[ii]
                            const table = ttable_amount[ii]

                            if (t_h2_amount.id === href) {
                                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                                    description = 'multi offset'
                                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                                } else {
                                    description = 'offset'
                                }
                                ii += 1000

                            } else {
                                switch (cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()) {
                                case "unknown":
                                case "mysterious":
                                    description = 'multi offset'
                                    ishook = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                    break
                                default:
                                    description = 'unordered'
                                }

                            }

                        }

                        // description = 'offset'
                    } else {
                        description = 'unknown'
                    }
                } else {
                    if (cells[2].innerText.trim() === "0") {
                        description = '0'
                    } else {
                        description = 'normal'
                    }
                }

                let is_case = false

                if (cells[2].innerHTML.includes("based on type")) {
                    let cases = cells[2].innerHTML.split('\n')
                    is_case = ""
                    for (let i = 0; i < cases.length; i++) {
                        if (cases[i].includes("href")) {
                            let casescomma = cases[i].split(`">`)[1].split("=")[0].trim().split(",")
                            for (let ii = 0; ii < casescomma.length; ii++) {
                                is_case += `    case ${casescomma[ii].trim()}:\n`
                            }
                            let tableid = cases[i].split("#")[1].split(`">`)[0].trim()
                            let is_un = is_unordered(cases[i])
                            // let is_un = "unknown"
                            if (is_un === 'y') {
                                is_case += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`

                                // is_case += `        u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;

                            } else {
                                let is_ordered = getisordered(tableid)
                                is_case += `    e = ex_ml(x.section_` + offset + `,g.` + tableid + `_array ,ex_` + tableid + `,g.` + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`

                                // is_case += `x[${is_i}].section_` + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                            }
                            is_case += "    break;\n"

                        }

                    }
                    if (is_case === "") {
                        is_case = false
                    } else {
                        let typeoffset = cells[2].innerHTML.split("based on type [")[1].split("<br>")[0].split("]")[0].trim()
                        typeoffset = typeoffset.replace(/[^0-9]*/, '')

                        let tabletds = table.getElementsByTagName("TD");
                        let bintype = "//"

                        for (let i = 0; i < tabletds.length; i += 3) {
                            if (tabletds[i].innerText.trim() === typeoffset) {
                                bintype = tabletds[i + 1].innerText
                                i += 10000
                            }
                        }
                        is_case = "switch(x." + bintype + "_" + typeoffset + "){\n" + is_case + "}"
                    }

                }

                if (description === "normal") {

                    if (cells[2].innerHTML.includes("string")) {
                        let propertyName = "section_" + offset;
                        //     e = ex_string(o + 36, e, x.section_36)

                        offsets += `    e = ex_string(o + ${offset}, e, x.` + propertyName + `)\n`

                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = "x." + type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `//amount?   s` + type + `(o +` + offset + `, ${propertyName})\n`;
                    } else if (cells[2].innerHTML.includes("patch")) {
                        let propertyName = type + "_" + offset;
                        getpatch(cells[2].innerHTML, offset, propertyName, type)

                    } else {

                        // Generate the property name for the data
                        let propertyName = "x." + type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `   s` + type + `(o +` + offset + `, ${propertyName})\n`;

                        // jsFunction += `    ${propertyName}: ${type}(o + ${offset}),\n`;
                    }

                } else if (description === 'offset') {
                    let tableid = cells[2].children[0].href.split("#")[1]

                    // jsFunction += "    section_" + offset + ": [],\n";

                    if (is_case !== false) {
                        offsets += is_case
                    } else {
                        offsets += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`

                        // offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    }
                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets += `// CASE // u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    // }else{
                    // }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    //     e = ex_ml(x.unordered_frame_font_60, 
                    // g.frame_font_array,
                    // ex_frame_font, 
                    // g.unordered_ref.frame_font, o + 60,
                    // e,'down');

                    offsets += `    e = ex_ml(x.` + is_ordered + `ordered_` + tableid + "_" + offset + `,g.` + tableid + `_array ,ex_` + tableid + `,g.` + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`

                    // offsets += `    e = ex_ml(x.` + is_ordered + `ordered_` + tableid + "_" + offset + `,ex_` + tableid + `,g.`  + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`
                    // offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
                    case "unknown":
                        multilink_amount = "04"
                        break
                    case "mysterious":
                        multilink_amount = "64"
                        break
                    }

                    let tableid = cells[2].children[0].href.split("#")[1]

                    // jsFunction += `    section_` + offset + `: [],\n`;

                    let is_ii = 'ii'
                    is_i === 0 ? is_ii = 'i' : 0;

                    if (is_case !== false) {
                        offsets += is_case
                    }

                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets+= "// CASE"
                    // }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        offsetamount = cells[2].innerHTML.split("based on amount [")[1].split("]")[0].trim()
                    }
                    // offsets+=''

                    // xfor = '\n'
                    // xis = e.split("x.push")[1].split("});")[1].trim().split('for')
                    // for (let i = 0; i < xis.length; i++) {
                    //     if (xis[i].includes("let")) {

                    //         xis1 = xis[i].split('\n')
                    //         let name = xis1[1].split("im")[1].split("(u")[0].trim()
                    //         // functionname
                    //         let offsetx = xis1[1].split('u32(o +')[1].split(")")[0].trim()
                    //         // offset
                    //         let amount = xis1[1].split('*')[1].split(')')[0].trim()
                    //         // amount
                    //         let amount_position = xis1[0].split('\n')[0].split("u32(o + ")[1].split(")")[0].trim()
                    //         // amount offsets
                    //         // position
                    //         let x_ = xis1[1].split(');')[0].split("]")[1].trim()
                    //         // x
                    let xsec = "x.section_" + offset

                    offsets += '    if(' + xsec + ".length){\n"
                    offsets += "        su32(o + " + offsetamount + "," + xsec + ".length)\n"
                    offsets += "        su32(o + " + offset + ", e - g.m)\n"
                    offsets += "        g.oa.push(o + " + offset + ")\n"
                    offsets += "        let temp_offset = e \n"
                    offsets += "        e += divisible(" + xsec + ".length * " + multilink_amount + ", 16) \n"
                    offsets += "        for (let i = 0; i < " + xsec + ".length; i++) { \n"
                    offsets += "            e = ex_" + tableid + "(temp_offset + (i * " + multilink_amount + "), e, " + xsec + "[i])\n"
                    offsets += "        };\n};\n\n"

                    //                     offsets += `
                    // for (let ${is_ii} = 0; ${is_ii} < u32(o + ${offsetamount}); ${is_ii}++) {
                    //     im_` + tableid + `(u32(o + ${offset}) + (${is_ii} * ${multilink_amount}) + g.m, ${is_ii}, x[${is_i}].section_` + offset + `);
                    // }\n`;
                } else if (description === '0') {} else {

                    if (cells[2].innerHTML.includes("based on type")) {
                        offsets += is_case
                        // jsFunction += `    section_` + offset + `: [],\n`;
                    } else if (cells[2].innerHTML.includes("href")) {
                        let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
                        // jsFunction += `    section_` + offset + `: [],\n`;
                        //     e = ex_s_offset(o + 48, e, ex_link_demo, x.section_48, 'down')
                        offsets += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`
                        // offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; // offset? \n`;
                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = "x." + type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `   s` + type + `(o +` + offset + `, ${propertyName}) //amount?\n`;

                        // jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;

                    } else {
                        let propertyName = "x." + type + "_" + offset;
                        jsFunction += `   s` + type + `(o +` + offset + `, ${propertyName}) //?\n`;

                        // Add the data extraction code to the function string
                    }
                }
            }

        }
        );

        let xdebug = `\n    g.debug ? ex_debug(o, "`
        for (let i = 0; i < 4; i++) {
            let a = Math.floor(Math.random() * 255)
            while (a < 48 || a > 122 || a === 92 || a === 96) {
                a = Math.floor(Math.random() * 255)
            }
            xdebug += String.fromCharCode(a)
        }
        xdebug += `") : 0;\n`

        offsets += xdebug + `    return e`

        // return x[0].id

        // Close the data object and the function
        jsFunction += '\n';
        if (offsets === '') {
            if (is_i === 0) {
                jsFunction += `\n}\n`
            } else {
                jsFunction += `\n}\n`
            }
        } else {
            if (is_i === 0 || i === 0) {
                jsFunction += `\n ${offsets} \n}\n`
            } else {
                jsFunction += `\n ${offsets}\n}\n`
            }

        }

    }
    console.log(jsFunction)

    function is_unordered(cases) {
        let href = cases.split("href")[1].split("#")[1].split(`"`)[0]
        doc.getElementById(href)
        let t_h2_amount = doc.getElementsByTagName('h2');
        let ttable_amount = doc.getElementsByTagName('table');
        let temp = ''
        for (let ii = 1; ii < h2_amount.length; ii++) {
            t_h2_amount = h2_amount[ii]
            const table = ttable_amount[ii]

            if (t_h2_amount.id === href) {
                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                    temp = 'y'
                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                } else {
                    temp = 'y'
                }
                ii += 1000

            } else {
                temp = 'unordered'
            }

        }

        // description = 'offset'
        return temp
    }
    function getisordered(html) {
        let a = 'un'
        switch (html) {
        case "model_animation_1":
        case "model_animation_2":
        case "models":
            a = ''
            break;
        }
        return a
    }
    function getpatch(cells, offset, propertyName, type) {
        if (cells.toLowerCase().includes("texture")) {
            jsFunction += `    ex_patch(o + ${offset},g.texture_patch_array, x.texture_` + offset + `)\n`;
        } else if (cells.toLowerCase().includes("animation")) {
            jsFunction += `    ex_patch(o + ${offset},g.animation_patch_array, x.animation_` + offset + `)\n`;
        } else if (cells.toLowerCase().includes("sound")) {
            jsFunction += `    ex_patch(o + ${offset},g.sound_patch_array, x.sound_` + offset + `)\n`;
        } else if (cells.toLowerCase().includes("model")) {
            jsFunction += `    ex_patch(o + ${offset},g.model_array, x.model_` + offset + `)\n`;
        } else {
            jsFunction += `    //patch? ${propertyName} / ${type} / ${offset})\n`;
        }
    }

}

function in_basic_04(o, x) {
    x.push({
        unordered_link: 0,
        u32_04: u32(o + 4),
    });

    switch (g.file_dir_type) {
    case "car":
        // x[0].unordered_link = in_ml(o, frame_array, get_frame, outerXFA.frames)
        break
    case "interface":
        // x[0].unordered_link = in_ml(o, frame_array, get_frame, outerXFA.frames)
        break
    case "link":
        x[0].unordered_link = in_ml(u32(o), g.link_array, im_link, g.unordered_ref.link)
        break
    default:
        console.log("later")
    }

}
