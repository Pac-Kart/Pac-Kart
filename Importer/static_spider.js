#! static file | append directly to file_viewer from buffer
// ordered/x.js for dynamic import
// most of this is just for testing
function get_x_static(file_name) {
    globalThis.offset_mid = undefined
    HWVX_PROTO = 179
    count = 0
    id = u32(16)
    datapack_offset = []

    let html = `<div class='sub_file_div'><a class='file_arrow' style='padding-right:6px;padding-left:4px;'>↓</a><a> 🗀 </a> <a id='temp' data-type="x_folder" data-offset="0" class='file_hover_not_selected'>${file_name}</a>`

    // folder
    switch (u32(0)) {
    case 33620128:
        break
    default:
        console.log(u32(0))
    }

    switch (u32(4)) {
    case 67174574:
    case 67174575:
        break
    default:
        console.log(u32(4))
    }

    switch (u32(8)) {
    case 179:
    case 183:
    case 243:
    case 249:
    case 267:
    case 274:
    case 315:
        break
    default:
        console.log(u32(8))
    }

    end = 16 + (u32(12) * 24)
    for (let i = 0; i < u32(12); i++) {

        html += get_x_sub_files(16 + (i * 24), i + 1, file_name)
    }

    document.getElementById('_2nd_data_bar').innerHTML = ''

    return html
}

function get_x_sub_files(offset, index, file_name) {
    globalThis.log_array = {
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

    globalThis.models_array = []
    globalThis.frames = []
    globalThis.sound_controls = []
    globalThis.sound_player = []
    globalThis.activator = []
    globalThis.varible = []
    globalThis.flag = []
    globalThis.idk = []
    globalThis.unknown = []
    globalThis.unknown_00 = []
    globalThis.fonts = []
    globalThis.multi_font = []
    globalThis.texts = []
    globalThis.model_link = []
    globalThis.interface_sub_model = []
    globalThis.model_animation_1 = []
    globalThis.model_animation_2 = []
    globalThis.sparkler = []
    globalThis.um = []
    globalThis.nothing = []

    // console.log(u32(offset + 20) + (index * 24) + 16)

    temp_array__[0].offset_check = []

    if (u32(offset + 12)) {// ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], offset);
    }

    // check if file header and file directory are the same version
    // (u32(offset + 0) === u32(8)) ? 0 : console.log(u32(offset + 0))
    if (u32(offset) === u32(8) && u32(offset + 12) === 0) {} else {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], offset);
    }

    globalThis.type = ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'][u32(offset + 4)]
    datapack_offset = offset;

    let html = ''

    if (type === 'geometry' || type === 'music' || g.game === "bigfoot_collision_course") {
        is_arrow_needed = `<a class='no_arrow'>↓</a>`

        html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`
        end = u32(offset + 20) + (index * 24) + 16 + u32(offset + 16)
        // console.log(u32(offset + 20), u32(offset + 24))
        // ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], offset);

    } else {
        let temp_offset
        if (g.version === HWVX_PROTO) {
            //hwvx proto
            if (end === u32(offset + 20) + (index * 24) + 16) {} else {//         console.log(end, u32(offset + 20) + (index * 24) + 16,'diff',end- (u32(offset + 20) + (index * 24) + 16))
            //                               temp_offset = u32(offset + 20) + (index * 24) + 16

            //             console.log(u32(temp_offset + 12),'12',u32(temp_offset + 16),'16',  u32(temp_offset + 28),'28',  u32(temp_offset + 56),'56')
            // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], temp_offset)
            }
            temp_offset = u32(offset + 20) + (index * 24) + 16
            number_sounds = u32(temp_offset + 8)
            number_textures = u32(temp_offset + 20)

            html += `<div style='display: block;' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a>`

            html += get_x_datapack(temp_offset, index)

            // html += get_x_datapack(u32(offset + 20) + (index * 24) + 16)

            html += `</div>`

            return html
        }
        temp_offset = u32(offset + 20) + (u32(12) * 24) + 16
        if ((id == HWVX_PROTO) && (g.game == "hot_wheels_velocity_x"))
            temp_offset = u32(offset + 20) + (index * 24) + 16
        else
            temp_offset = u32(offset + 20) + (u32(12) * 24) + 16

        number_sounds = u32(temp_offset + 8)
        number_textures = u32(temp_offset + 20)

        if (number_sounds == 0 && number_textures == 0) {
            html += `<div style='display: block;' class='sub_file_div'><a class='no_arrow'>↓</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a></div>`

        } else {

            html += `<div style='display: block;' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗎 </a> <a data-type="x_sub_file" data-offset="${offset}" class='file_hover_not_selected'>${index} ${type}</a>`

            html += get_x_datapack(u32(offset + 20) + (u32(12) * 24) + 16, index)

            html += `</div>`

        }
    }
    // }

    return html
}

function get_x_datapack(offset, index) {
    let html = ''

    if (g.version === HWVX_PROTO) {
        after_datapack = offset + 120 + (u32(offset + 8) * 4)
        offset_mid = u32(offset + 4) + after_datapack + (u32(offset + 12) * 4) + ((u32(offset + 16) + u32(offset + 28) + u32(offset + 52) + u32(offset + 56)) * 8)
        offset_datapack = offset

        if (u32(offset + 08)) {
            html += get_sounds(offset + 120)
        }
        offset_textures = u32(offset + 24)
        html += get_textures()

        return html
    }

    if (u32(offset + 36) || u32(offset + 40) || u32(offset + 44) || u32(offset + 64) || u32(offset + 68) || u32(offset + 72) || u32(offset + 76) || u32(offset + 96) || u32(offset + 116) || u32(offset + 8) !== u32(offset + 32)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], offset)
    }

    //get ordered list

    offset_datapack = offset

    if ((id == HWVX_PROTO) && (game == "hot_wheels_velocity_x")) {
        after_datapack = get_datapack_end() + offset + (u32(offset + 8) * 4)
        offset_mid = u32(offset + 4) + after_datapack + (u32(offset + 12) * 4) + ((u32(offset + 16) + u32(offset + 28) + u32(offset + 52) + u32(offset + 56)) * 8);
    } else {
        after_datapack = get_datapack_end() + offset + divisible(number_sounds * 4, 32)
        offset_mid = divisible(((u32(offset + 16) + u32(offset + 28) + u32(offset + 52)) * 8), 32)
        offset_mid = offset_mid + u32(offset + 4) + after_datapack
        if ((g.console === "ps2")) {
            xps_i = 0;
            while ((after_datapack + u32(offset + 4) + xps_i) % 2048 !== 0) {
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

    // console.log(offset_mid)

    if (g.game === 'pac_man_world_rally') {

        switch (type) {
        case "car":
        case "interface":
        case "item":
        case "link":
        case "audio":
        case "music":
            if (pk_debug) {

                html += get_basic()
            }
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
    }

    return html

    // // //

    // check max model values

    for (let i = 0; i < amount_animations; i++) {// get_texture_animas(u32(offset_animations + offset_mid + (i * 12)))
    }

    return html

    if (g.game == "pac_man_world_rally") {

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

            if (g.console === 'xbox') {
                offset_collision = u32(offset_mid + 152) + offset_mid
                html += get_world_options(u32(offset_mid + 152) + offset_mid)
            } else {
                html += get_world_options(u32(offset_mid + 20) + offset_mid, offset_collision)
            }
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
        if (g.version !== HWVX_PROTO) {
            i = divisible(i * 4, 32)
        }

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
        let hwvx_proto = ''
        if (number_textures != 0) {
            texture_offset_list = (offset_mid + offset_textures)

            html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_sound_folder" data-offset="${texture_offset_list}" class='file_hover_not_selected'>Textures</a>`

            // console.log('texture offset:', texture_offset_list)

            if (g.game == 'pac_man_world_rally') {
                i_offset_plus = 64
            } else {
                i_offset_plus = 16
            }

            i_offset = 0
            for (i = 0; i < number_textures; i++,
            i_offset += i_offset_plus) {

                if (g.game == 'pac_man_world_rally') {
                    if (g.console === 'psp') {
                        get_xpp_tex(texture_offset_list + (i * 64))
                    }

                    for (string_i = 12,
                    btf_string = ""; string_i < 64; string_i++) {
                        btf_string += String.fromCharCode(u8(i_offset + texture_offset_list + string_i))
                    }

                    // if (u8(i_offset + texture_offset_list)===68 && u8(i_offset + texture_offset_list+1)===1) {
                    //     console.log(btf_string)
                    // }

                } else if (g.game == 'snoopy_vs_the_red_baron') {
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
                    if (g.version === HWVX_PROTO) {
                        hwvx_proto = `data-datapack="${offset_datapack}"`
                    }

                    //     if (u32(texture_offset_list + i_offset +12) !== 0) {
                    // ü(1, [u16, 0, u16, 2,u16, 4,u16, 6, u32, 8, u32, 12], texture_offset_list + i_offset)
                    //     }

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
        if (g.console === 'ps2' && (id != HWVX_PROTO)) {
            offset += 2048
        } else if (g.console === 'psp') {
            offset += 128
        } else if (g.game === "snoopy_vs_the_red_baron") {
            offset += 128
        } else if (type === "geometry") {
            offset += 84
        } else {
            offset += 120
        }
        return offset
    }
}

function get_x_datapack_hwvx_proto(o, i) {
    let html = ''
    if (u32(o + 36) || u32(o + 96) || u32(o + 108) || u32(o + 116)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    }
    let indexpatchoffset = o + 120 + (number_sounds * 4)
    offset_mid = u32(o + 4) + indexpatchoffset + (u32(o + 12) * 4) + ((u32(o + 16) + u32(o + 28) + u32(o + 56)) * 8)
    end = offset_mid + u32(o + 0)
    if (u32(o + 08)) {
        html += get_sounds(o + 120)

        // let tex_offset = offset_mid + u32(o + 60)
        // console.log(tex_offset, offset_mid, u32(o + 64), type, 'end=', tex_offset + (u32(o + 64) * 44))
    }
    // offset_mid + u32(o + 24)
    // console.log(offset_mid + u32(o + 24))
    // get_x_datapack_hwvx_proto_basic()
    return html
}

function get_basic() {
    let html = ''
    if (g.game !== 'pac_man_world_rally') {
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

    if (g.console === 'xbox' || g.version === 249) {
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

function get_car_00_196(o) {
    if (f32(o + 24) || f32(o + 28)) {
        ü(0, [u32, 0, f32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
    }

    ä(sound_player, u32(o + 0), get_sound_player)
    ä(sound_player, u32(o + 8), get_sound_player)

}

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

function get_car_00_216(o) {
    if (u32(o + 8)) {
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    }
    for (let i = 0; i < u32(o); i++) {
        get_mys_a(u32(o + 4) + offset_mid + (i * 64))
    }
}

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
    if (g.console === 'xbox' || g.version === 249) {
        return
    }

    // ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], offset)

    // html += `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> 🗀 </a> <a data-type="x_model_folder" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset + 8) + offset_mid, 0, false)}</a></div>`
    for (let i = 0; i < u16(offset + 2); i++) {
        get_models_04(u32(offset + 4) + offset_mid + (i * 8))
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
        // ü(1, [u32, 0, u32, 4, u32, 8, u8, 12,u8, 13,u8, 14,u8, 15, u32, 16, u32, 20,u32, 24,u32, 28,u32, 32,u32, 36,u32, 40,u8, 44,u8, 45,u8, 46,u8, 47,u8, 48,u8, 49,u16, 50,u8, 52,u8, 53,u8, 54,u8, 55,u32, 56,u32, 60,u32, 64,u32, 68,u32, 72,u32, 76,u32, 80,u32, 84,u32, 88,u32, 92], offset)

        if (g.console === 'gamecube') {
            get_GC_models_04_04_00(offset)
            return

        } else if (g.console === 'ps2') {
            // get_PS2_models_04_04_00(offset)
            return
        }
        if (u32(offset + 88) === 0) {// console.log(`[ ${u8(offset + 56 )}, ${u8(offset + 57 )}, ${u8(offset + 58 )}, ${u8(offset + 59 )} |||${u32(offset + 0 )} | ${u32(offset + 4 )} | ${u32(offset + 8 )} | [ ${u8(offset + 12 )}, ${u8(offset + 13 )}, ${u8(offset + 14 )}, ${u8(offset + 15 )} ] | ${u32(offset + 16 )} | ${u32(offset + 20 )} | ${u32(offset + 24 )} | ${u32(offset + 28 )} | ${u32(offset + 32 )} | ${u32(offset + 36 )} | [ ${u8(offset + 40 )}, ${u8(offset + 41 )}, ${u8(offset + 42 )}, ${u8(offset + 43 )} ] | [ ${u8(offset + 44 )}, ${u8(offset + 45 )}, ${u8(offset + 46 )}, ${u8(offset + 47 )} ] | [ ${u8(offset + 48 )}, ${u8(offset + 49 )}, ${u8(offset + 50 )}, ${u8(offset + 51 )}  ] | [ ${u8(offset + 52 )}, ${u8(offset + 53 )}, ${u8(offset + 54 )}, ${u8(offset + 55 )} ] || offset:${offset} -mid:${offset_mid}`)
        }

        if (u32(offset + 92)) {
            get_models_04_04_00_92(u32(offset + 92) + offset_mid)
        }

    }

    function get_models_04_04_00_92(offset) {// if (u32(offset + 4)) {
    //     console.log(`${u32(offset + 0)} | ${u32(offset + 4)} | ${u32(offset + 8)} | ${u32(offset + 12)} || offset:${offset} -mid:${offset_mid}`)
    // }

    }

    function get_models_04_04_00_gc76(o, v) {
        // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12,u32, 16,u32, 20,u32, 24,u32, 28], o)
        //calculate end?
        let structsize = 0
        if (u32(o + 8)) {
            structsize = ((u32(o + 8) + offset_mid) - o)
        } else if (u32(o + 12)) {
            structsize = ((u32(o + 12) + offset_mid) - o)
        } else if (u32(o + 16)) {
            structsize = ((u32(o + 16) + offset_mid) - o)
        } else {
            structsize = 0
        }
        if (structsize === 48) {} else {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
        }
        return 0

        let size = u32(o + 4)
        // get_models_04_04_00_gc76_16(u32(o+16)+offset_mid,size)
        // ö(u32(o+16), get_models_04_04_00_gc76_16)

        if (structsize === 48) {
            if (u32(o + 40)) {
                console.log(u32(o + 40) + offset_mid, u32(o + 40) + offset_mid + u32(o + 28))
            }
        }

        // if (structsize === 48) {
        //     ö(u32(o+8), get_models_04_04_00_gc76_08)
        // }

        // console.log(u32(o + 16) + offset_mid, u32(o + 16) + offset_mid + size)

        if (u32(o + 16) && structsize === 48 && u32(o + 32)) {// console.log(u32(o + 12) + offset_mid, u32(o + 16) + offset_mid,size, u32(o + 16) - u32(o + 12),structsize)

        // if (size === 32) {
        // console.log(u32(o + 16) + offset_mid, u32(o + 32) + offset_mid, 'size:',size, 'dif:',u32(o + 32) - u32(o + 16), 'structsize:',structsize, 'val', v)
        // }
        // }else{
        // // console.log(u32(o + 8) + offset_mid, u32(o + 12) + offset_mid,size, u32(o + 12) - u32(o + 8),structsize)
        // }
        }

        // if (structsize === 32) {
        //  // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12,u32, 16,u32, 20,u32, 24,u32, 28], o)
        // }else if (structsize === 48) {
        //  ü(1, [u32, 0, u32, 4, u32, 8, u32, 12,u32, 16,u32, 20,u32, 24,u32, 28,u32, 32,u32, 36,u32, 40,u32, 44], o)
        // }else{
        //     console.log(structsize)
        // }

        // let temp = ü(1, [u32, 0, u32, 4, u32, 8, u32, 12,u32, 16,u32, 20,u32, 24,u32, 28], o)
        // return temp
        // if (temp === 16) {
        // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32], o)
        // }
    }
    function get_models_04_04_00_gc76_08(o) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
    function get_models_04_04_00_gc76_16(o, v) {
        console.log(v, o, o + v, o + u16(o))
        ü(1, [u16, 0], o)
    }

    function get_GC_models_04_04_00(o) {
        let temp = 0
        // ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u16, 50, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u16, 84, u16, 86, u32, 88, u32, 92], o)
        for (let i = 0; i < u16(o + 84); i++) {
            temp = get_GC_models_04_04_00_76(u32(o + 76) + (i * 24) + offset_mid, u8(o + 86), u8(o + 87))
        }
        let end = 0
        if (u32(o + 64)) {
            end = u32(o + 64);
        } else if (u32(o + 68)) {
            end = u32(o + 68)
        } else if (u32(o + 72)) {
            end = u32(o + 72)
        } else if (u32(o + 76)) {
            end = u32(o + 76)
        }
        if (u32(o + 68) && u32(o + 64)) {
            // get_GC_models_04_04_00_80(u32(o + 80) + offset_mid)
            // get_GC_models_04_04_00_80(u32(o + 80) + offset_mid)
            ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u16, 50, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u16, 84, u16, 86, u32, 88, u32, 92], o)
        }

        // if (end - u32(o + 60) === 64) {
        //     // console.log(end - u32(o + 60), temp, u32(o + 60) + offset_mid)
        // ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u16, 50, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u16, 84, u16, 86, u32, 88, u32, 92], o)

        // }

        // if (u32(o + 64) && u32(o + 72)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u16, 50, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u16, 84, u16, 86, u32, 88, u32, 92], o)

        // }

        // console.log(u32(o+76) - u32(o+60),temp, u32(o+60) + offset_mid)

    }

    function get_GC_models_04_04_00_80(o) {
        if (u32(o + 12)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
        }
        for (let i = 0; i < u32(o + 8); i++) {
            get_GC_models_04_04_00_80_00(u32(o) + (i * 32) + offset_mid)
        }
    }

    function get_GC_models_04_04_00_80_00(o) {
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u16, 24, u16, 26, u8, 28, u8, 29, u8, 30, u8, 31], o)

    }

    function get_GC_models_04_04_00_76(o, v1, v2) {
        if (u32(o + 0) || u8(o + 21) || u8(o + 22) || u8(o + 23)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23], o)
        }

        //         if (u8(o+20) === 1) {
        // console.log('is:', u32(o+16) - u32(o+12),'offset:',o + u32(o+12),'v1:',v1,'v2:',v2,'04:',u32(o+4))
        //         }

        for (let i = 0; i < u8(o + 20); i++) {
            get_GC_models_04_04_00_76_08(u32(o + 8) + (i * 1) + offset_mid)
        }

        if (u8(o + 20) !== 0) {// buffer
        // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23], o)
        }

        // if (u32(o+8) && u32(o+12) && u32(o+12) - u32(o+8) === 32) {
        // // console.log('is:', u32(o+12) - u32(o+8),o + u32(o+8))
        //     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23], o)
        // }
        return u32(o + 4)
    }

    function get_GC_models_04_04_00_76_08(o) {// ü(1, [u8, 0], o)
    }

    function get_PS2_models_04_04_00(o) {
        switch (u32(o)) {
        case 0:
            get_PS2_models_04_04_00t0(o)
            break
        case 1:
            get_PS2_models_04_04_00t1(o)
            break
        case 2:
            get_PS2_models_04_04_00t2(o)
            break
        }
    }
    function get_PS2_models_04_04_00t0(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u16, 50, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }
    function get_PS2_models_04_04_00t1(o) {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
    }
    function get_PS2_models_04_04_00t2(o) {// ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, f32, 56, f32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
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
    if (g.console === 'xbox') {
        html += get_world_routes(u32(offset_mid + 152) + offset_mid, [0, 0])
    } else if (u32(8) == 249) {
        html += get_world_routes(u32(offset_mid + 120) + offset_mid, [0, 0])
    } else {
        html += get_world_routes(u32(offset_mid + 12) + offset_mid, [0, 0])
    }
    // html += get_world_flags(u32(offset_mid + 24 ) + offset_mid)

    if (u32(8) == 249) {
        html += get_world_options_starting_points(u32(offset_mid + 12) + offset_mid, u32(offset_mid + 8))
    } else if (g.console === 'xbox') {
        html += get_world_options_starting_points(u32(offset_mid + 12) + offset_mid, u32(offset_mid + 8))
    } else {}

    if (g.console === 'xbox') {
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
    // let html = `<div style='display:none' class='sub_file_div'><a class='file_arrow'>→</a><a> ? </a> <a data-type="x_world_flags_2" data-offset="${offset}" class='file_hover_not_selected'>${get_string(u32(offset + 140) + offset_mid, 0, false)}</a></div>`
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

    if (g.console === 'xbox' || g.version === 249) {
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

    if (u32(o + 4) && g.version !== 249) {// console.log(get_string(u32(o + 4) + offset_mid, 0, false))
    }

    if (u32(o + 8) && g.version !== 249) {
        get_link_intro_08(u32(o + 8) + offset_mid)
    }
    if (u32(o + 12) && g.version !== 249) {
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

    if (g.game !== 'pac_man_world_rally') {
        return html
    }

    if (g.console === 'xbox') {
        html += get_world_options(u32(offset_mid + 152) + offset_mid)
    } else {
        html += get_world_options(u32(offset_mid + 20) + offset_mid)
    }

    if (g.console === 'xbox' || g.version === 249) {
        return html
    }

    // let o = offset_mid
    // if (u32(o + 4) !== 160 || u32(o + 16) !== 16 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92)) {
    //     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)
    // }

    // ö(u32(o), get_unordered_world)
    // ö(u32(o + 4), get_collision)
    // ö(u32(o + 8), get_world_08)
    // ö(u32(o + 12), get_world_12)

    // for (let i = 0; i < u32(o + 16); i++) {
    //     get_world_20(u32(o + 20) + offset_mid + (i * 16))
    // }

    // ö(u32(o + 24), get_world_24)

    // for (let i = 0; i < u32(o + 28); i++) {
    //     get_world_32(u32(o + 32) + offset_mid + (i * 4))
    // }

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
    if (u32(o + 56)) {// console.log(u32(o+40),u32(o+52),u32(o+84),u32(o+104))
    //     ü(1, [u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104], o)
    // console.log(u32(o+52) + offset_mid,u32(o+52) + u32(o+56) + offset_mid)
    }
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
        case 640:
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
    if (f32(o + 44) !== 1 || f32(o + 60) !== 1 || u8(o + 77) || u8(o + 78) || u8(o + 79) || u32(o + 80) !== 5000 || u32(o + 88) || u32(o + 92)) {
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
    if (u8(o + 1) === 0) {
        ö(u32(o + 20), get_wtf_08_08t1_08_20t0)
    }

    ö(u32(o + 8), get_wtf_08_08t1_08_08)
    ö(u32(o + 12), get_gate)

}

function get_wtf_08_08t1_08_08(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
    }
}

function get_wtf_08_08t1_08_20t0(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44)) {
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, ], o)
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
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
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
    // if (u8(o) ===0) {
    //     ü(1, [u32, 16, f32, 16], o)
    // }

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
    } else if (u32(o) === 3 && g.console === 'xbox') {
        ö(u32(o + 4), get_xdx_interface_12_24_04t11_04_04t0)
    } else if (u32(o) === 3 && g.version === 249) {
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
    // if (u32(o + 32) || u32(o + 48) === 0 || u32(o + 64) || u32(o + 76)) {
    ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    // }

    if (g.console === 'xbox' || g.version === 249) {
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

    if (g.version === 249) {
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 16), get_interfaceframe_04_04_12t8_04demo)
        }
    } else {
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 12), get_interfaceframe_04_04_12t8_04)
        }
    }

}

function get_interfaceframe_04_04_12t8_04(o) {
    if (u8(o + 2) || u8(o + 3)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)
    }
}

function get_interfaceframe_04_04_12t8_04demo(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }
}

function get_interfaceframe_04_04_12t7(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

}
function get_interfaceframe_04_04_12t5(o) {
    if (u32(o + 8) || u32(o + 12)) {
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

    if (u32(o + 36) && u32(o) === 1 && u32(o + 4) === 67) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92], u32(o + 36) + offset_mid + (i * 96))
    }

    // if (u32(o) === 3 && u32(o + 36)) {
    //     for (let i = 0; i < u32(o + 40) - 1; i++) {
    //         ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92], u32(o + 36) + offset_mid + (i * 96))

    //     }
    // }

    // if (u32(o + 4) === 291) {
    //     if (u32(o + 52)) {
    //         let test = divisible(u32(o + 40) * 4, 16)

    //         let end = u32(o + 40) * 4 + u32(o + 32) + offset_mid
    //         let begin = u32(o + 52) + offset_mid

    //         if (begin - end !== 0) {
    //             console.log(test, u32(o + 40) * 4, begin, begin - end, test - (u32(o + 40) * 4))

    //             // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    //         }

    //     }

    // }

    // if (u32(o) === 1) {
    //     let test = divisible(u32(o + 40) * 4, 16)
    //     // only happens with 1
    //     if (u32(o + 44)) {
    //         let end = u32(o + 40) * 4 + u32(o + 32) + offset_mid
    //         let begin = u32(o + 44) + offset_mid
    //         // if (begin - end === 4)  {
    //         console.log(test, u32(o + 40) * 4, begin, begin - end, test - (u32(o + 40) * 4))
    //         // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    //         // }
    //     }

    // }
    // u32(o + 40) * 4 + u32(o + 40) + offset_mid

    // 44  still needs resarch

    // if (u32(o + 44) - u32(o + 36) === -16 || u32(o + 44) - u32(o + 36) === 0 || u32(o + 44) - u32(o + 36) === -32) {// ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    // } else {

    //     console.log(u32(o + 44) - u32(o + 36))

    //     ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    // }

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

        //calculate amount
        if ((u32(o + 40) * u32(o + 48) * 4) === u32(o + 52) - u32(o + 36)) {} else {// console.log(u32(o + 40) * u32(o + 48) * 4))
        // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

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

    }

    // if ((u32(o+28)+offset_mid) - (u32(o+32)+offset_mid) === -12) {

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

    if (g.console === 'xbox' || g.version === 249) {
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
    if (g.console === 'xbox' || g.version === 249) {
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

    if (g.console === 'xbox' || g.version === 249) {
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
    if (g.console === "gamecube") {
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

    let temp_string
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
    let temp_div = file_viewer.children[0]

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

// function arrow_click() {
//     const isOpening = this.innerHTML === '→';

//     this.innerHTML = isOpening ? '↓' : '→';
//     this.style.paddingRight = isOpening ? '6px' : '0px';
//     this.style.paddingLeft = isOpening ? '4px' : '0px';

//     for (let i = 3; i < this.parentNode.children.length; i++) {
//         this.parentNode.children[i].style.display = isOpening ? 'block' : 'none';
//     }

//     const nextElementSibling = this.nextElementSibling;
//     if (nextElementSibling && nextElementSibling.nextElementSibling.nextElementSibling) {
//         nextElementSibling.nextElementSibling.nextElementSibling.style.display = isOpening ? 'block' : 'none';
//     }
//     position = document.getElementsByClassName("file_is_highlighted")[0]
//     if (position.getBoundingClientRect().x === 0 && position.getBoundingClientRect().y === 0) {
//         this.parentElement.children[2].click()
//     }

// }

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

    let is_above = (currentValue) => currentValue > 1000;
    let is_below = (currentValue) => currentValue < 0xfffffff;

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

            if (struct_array[i].def.find( (e) => e.name === "f32")) {
                struct_html += `f32, ${struct_array[i].n}, `
            } else if (struct_array[i].def.find( (e) => e.name === "u8")) {
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
                        _3rd = `${a.a.reduce( (a, b) => Math.min(a, b), Infinity)} - ${a.a.reduce( (a, b) => Math.max(a, b), -Infinity)}`
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
    // 0 = "print rows"
    // 1 = "generate table"
    // 2 = "log offsets"
    // 3 = "structure test"
    // 4 = "return structure length"

    if (mode === 4) {
        return mode4()
    }

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
        return outer_i

    }

    function mode4() {
        let outer_i = 0
        let o_limit = 1024

        for (let o = 16; o < o_limit; o += 16) {

            offset_act = (offset + o) - offset_mid

            for (let i = log_array.p_texture; i < log_array.p_model - 4; i += 4) {
                if (u32(i) === offset_act) {
                    outer_i = o
                    // console.log(`%cStruct Size: %c ${o} %c| Init: %c ${i - o}`, 'color:blue;', 'color:red;', 'color:blue;', 'color:red;')

                    i = log_array.p_model
                    o = o_limit

                } else if (o + 16 === o_limit) {
                    console.log('no offset found')
                    return;
                }
            }
        }
        return outer_i

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
globalThis.temp_array__ = [{
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

}