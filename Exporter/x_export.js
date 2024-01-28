function ex_x() {
    let e = 16
    g = null
    //global object

    g = {
        divisible_prev_value: [],
        debug: false,
        selected_game: x[0].game,
        console_type: x[0].console,
        file_version: x[0].version,
        file_dir_type: 0,
        file_name: x[0].name,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        link_array: [],
        idk_array: [],
        interface_array: [],
        car_array: [],
        frame_sparkler_array: [],
        frame_font_array: [],
        frame_multi_font_array: [],
        frame_text_array: [],
        sound_controls_array: [],
        sound_section_array: [],
        model_link_array: [],
        model_sub_link_array: [],
        unknown_00_array: [],
        unknown_00_04_04t1_array: [],
        unknown_00_04_04t5_array: [],
        unknown_00_04_04t5_28_04_00_array: [],
        activator_array: [],
        activator_248_04_04t0_04_array: [],
        flag_array: [],
        var_array: [],
        gate_array: [],
        strange_array: [],
        object_array: [],
        um_array: [],
        wtf_array: [],
        mysterious_04t9_array: [],
        // nothing_array: [],
        world_settings_array: [],
        world_settings_array: [],
        world_20_12t0_array: [],
        world_20_12t1_array: [],
        world_20_12t2_array: [],
        world_20_12t3_array: [],
        world_20_12t4_array: [],
        world_20_12t5_array: [],
        world_20_12t8_array: [],
        world_20_12t10_array: [],
        world_20_12t11_array: [],
        world_20_12t13_array: [],
        world_20_12t14_array: [],
        world_20_12t15_array: [],
        world_20_12t8_76t8_04_array: [],
        world_20_12t8_76t8_08_array: [],
        temp_world_offset_holder:[],
        texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        model_animation_1_array: [],
        model_animation_2_array: [],
        models_array: [],
        tex_anims: 0,
    }

    su32(0, 33620128)
    su32(4, 67174575)
    su32(8, x[0].version)
    su32(12, x[0].directory.length)

    let temp_offset = e
    let global = ((x[0].directory.length) * 24) + 16
    e = e + (x[0].directory.length * 24)

    for (let i = 0; i < x[0].directory.length; i++) {
        e = ex_directory(temp_offset + (i * 24), e, x[0].directory[i], global)
    }

    let i = 0
    for (; i < 128; i++) {
        su8(e + i, 32)
    }
    e += i

    return e

}

function ex_directory(o, e, x, global) {

    g.wtf_array = []
    g.mysterious_04t9_array = []
    g.link_array = []
    g.idk_array = []
    g.interface_array = []
    g.car_array = []
    g.frame_sparkler_array = []
    g.frame_font_array = []
    g.frame_multi_font_array = []
    g.frame_text_array = []
    g.sound_controls_array = []
    g.sound_section_array = []
    g.model_link_array = []
    g.model_sub_link_array = []
    g.unknown_00_array = []
    g.unknown_00_04_04t1_array = []
    g.unknown_00_04_04t5_array = []
    g.unknown_00_04_04t5_28_04_00_array = []
    g.activator_array = []
    g.activator_248_04_04t0_04_array = []
    g.flag_array = []
    g.var_array = []
    g.gate_array = []
    g.strange_array = []
    g.object_array = []
    g.um_array = []
    g.world_settings_array = []
    g.world_20_12t0_array = []
    g.world_20_12t1_array = []
    g.world_20_12t2_array = []
    g.world_20_12t3_array = []
    g.world_20_12t4_array = []
    g.world_20_12t5_array = []
    g.world_20_12t8_array = []
    g.world_20_12t10_array = []
    g.world_20_12t11_array = []
    g.world_20_12t13_array = []
    g.world_20_12t14_array = []
    g.world_20_12t15_array = []
    g.world_20_12t8_76t8_04_array = []
    g.world_20_12t8_76t8_08_array = []
    g.texture_patch_ref = 0
    g.animation_patch_ref = 0
    g.sound_patch_ref = 0
    g.model_patch_ref = 0
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    g.model_animation_1_array = []
    g.model_animation_2_array = []
    g.models_array = []

    let ce = e
    g.file_dir_type = x.type
    su32(o + 0, x.version)
    su32(o + 4, ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'].indexOf(x.type))
    su32(o + 8, x.index)

    su32(o + 20, e - global)
    e = ex_datapack(e, x.datapack[0])

    // g.file_dir_type = type
    // global = dyn_sub_file_header(offset, x.datapack[0])
    // im_datapack(u32(o + 20) + directory_offset, x[i].datapack)

    su32(o + 16, e - ce)

    return e
}

function ex_datapack(o, x) {
    g.datapack_offset = o
    let io = get_datapack_end() + o

    ex_string(o + 80, o + 80, x.linked_files.string_1, 1, 0)
    su32(o + 92, x.linked_files.u32_92)
    su32(o + 96, x.linked_files.u32_96)
    ex_string(o + 100, o + 100, x.linked_files.string_2, 1, 0)
    su32(o + 112, x.linked_files.u32_112)
    su32(o + 116, x.linked_files.u32_116)

    e = ex_sound(io, x.audio[0].sound)

    e += x.audio_index_patch_padding

    // e = ex_byte_alignment_testing(e)

    // if (e === 114060) {
    //     e -= 4
    // } else if (e === 41702828) {
    //     e += 4
    // } else if (e === 42335940) {
    //     e -= 8
    // } else if (e === 42609652) {
    //     e -= 8
    // } else if (e === 45665060) {
    //     e -= 8
    // } else if (e === 45253620) {
    //     e -= 12
    // } else if (e === 48136112) {
    //     e -= 8
    // } else if (e === 52759904) {
    //     e -= 8
    // } else if (e === 54327740) {
    //     e -= 8
    // } else if (e === 54621208) {
    //     e += 4
    // }else if (e === 2109452) {
    //     e += 4
    // }

    su32(o + 4, e - (io + divisible(x.audio[0].sound.length * 4, 32)))

    io = e

    e = e + get_index_array_amount(x.index_patch_list[0])

    if (g.file_name === 'gShared.xpc') {
        e += 4
    }

    e = ex_ordered(e, x.ordered[0])

    // // function im_datapack(o, x) {
    // x.push({
    //     id: gen_id(),
    //     audio: [],
    //     ordered: [],
    // })

    su32(o + 8, x.audio[0].sound.length)
    su32(o + 12, g.oa.length)
    su32(o + 16, g.texture_patch_array.length)
    su32(o + 28, g.sound_patch_array.length)
    su32(o + 32, x.audio[0].sound.length)
    su32(o + 48, g.ordered_ref.texture_animation.length)
    su32(o + 52, g.animation_patch_array.length)
    su32(o + 56, g.model_patch_array.length)

    ex_index_patch_list(io)

    // g.texture_patch_array

    // patch list is 4 bytes dibisible instead of 16 for some reason
    let current_patch_list_divis = divisible(g.divisible_prev_value[0], g.divisible_prev_value[1])
    let patch_list_divis = divisible(g.divisible_prev_value[0] + 1, 4)
    e -= current_patch_list_divis
    e += patch_list_divis

    // if (e === 162996) {
    //     e+=4
    // }

    su32(o + 0, e - g.m)
    e = ex_offset_patch_list(e)

    return e

    function get_datapack_end() {
        let offset = 0
        if (g.console === "xps") {
            offset += 2048
        } else if (g.console === "xpp") {
            offset += 128
        } else if (g.selected_game === "snoopy_vs_the_red_baron") {
            offset += 128
        } else if (g.file_dir_type === "geometry") {
            offset += 84
        } else {
            offset += 120
        }
        return offset
    }

    function get_index_array_amount(x) {
        return divisible(((x.texture.length + x.texture_animation.length + x.sound.length) * 8), 32)
    }

}

function ex_ordered(o, x) {
    if (x.file_specific.length && g.file_dir_type === 'share') {
        o-=4
    }

    g.m = o
    g.unordered_ref = x.unordered[0]
    g.ordered_ref = x

    generate_id_offset_array(g.link_array = [], x.unordered[0].link)
    generate_id_offset_array(g.wtf_array = [], x.unordered[0].wtf)
    generate_id_offset_array(g.mysterious_04t9_array = [], x.unordered[0].mysterious_04t9)

    generate_id_offset_array(g.idk_array = [], x.unordered[0].idk)
    generate_id_offset_array(g.interface_array = [], x.unordered[0].interface)
    generate_id_offset_array(g.car_array = [], x.unordered[0].car)
    generate_id_offset_array(g.frame_sparkler_array = [], x.unordered[0].frame_sparkler)
    generate_id_offset_array(g.frame_font_array = [], x.unordered[0].frame_font)
    generate_id_offset_array(g.frame_multi_font_array = [], x.unordered[0].frame_multi_font)
    generate_id_offset_array(g.frame_text_array = [], x.unordered[0].frame_text)
    generate_id_offset_array(g.sound_controls_array = [], x.unordered[0].sound_controls)
    generate_id_offset_array(g.sound_section_array = [], x.unordered[0].sound_section)
    generate_id_offset_array(g.model_link_array = [], x.unordered[0].model_link)
    generate_id_offset_array(g.model_sub_link_array = [], x.unordered[0].model_sub_link)
    generate_id_offset_array(g.unknown_00_array = [], x.unordered[0].unknown_00)
    generate_id_offset_array(g.unknown_00_04_04t1_array = [], x.unordered[0].unknown_00_04_04t1)
    generate_id_offset_array(g.unknown_00_04_04t5_array = [], x.unordered[0].unknown_00_04_04t5)
    generate_id_offset_array(g.unknown_00_04_04t5_28_04_00_array = [], x.unordered[0].unknown_00_04_04t5_28_04_00)
    generate_id_offset_array(g.activator_array = [], x.unordered[0].activator)
    generate_id_offset_array(g.activator_248_04_04t0_04_array = [], x.unordered[0].activator_248_04_04t0_04)
    generate_id_offset_array(g.flag_array = [], x.unordered[0].flag)
    generate_id_offset_array(g.var_array = [], x.unordered[0].var)
    generate_id_offset_array(g.gate_array = [], x.unordered[0].gate)
    generate_id_offset_array(g.strange_array = [], x.unordered[0].strange)
    generate_id_offset_array(g.object_array = [], x.unordered[0].object)
    generate_id_offset_array(g.um_array = [], x.unordered[0].um)
    // generate_id_offset_array(g.nothing_array = [], x.unordered[0].nothing)
    generate_id_offset_array(g.world_settings_array = [], x.unordered[0].world_settings)

    if (g.file_dir_type === "world") {

        generate_id_offset_array(g.world_20_12t0_array = [], x.file_specific[0].section_20[0].type_0)
        generate_id_offset_array(g.world_20_12t1_array = [], x.file_specific[0].section_20[0].type_1)
        generate_id_offset_array(g.world_20_12t2_array = [], x.file_specific[0].section_20[0].type_2)
        generate_id_offset_array(g.world_20_12t3_array = [], x.file_specific[0].section_20[0].type_3)
        generate_id_offset_array(g.world_20_12t4_array = [], x.file_specific[0].section_20[0].type_4)
        generate_id_offset_array(g.world_20_12t5_array = [], x.file_specific[0].section_20[0].type_5)
        generate_id_offset_array(g.world_20_12t8_array = [], x.file_specific[0].section_20[0].type_8)
        generate_id_offset_array(g.world_20_12t10_array = [], x.file_specific[0].section_20[0].type_10)
        generate_id_offset_array(g.world_20_12t11_array = [], x.file_specific[0].section_20[0].type_11)
        generate_id_offset_array(g.world_20_12t13_array = [], x.file_specific[0].section_20[0].type_13)
        generate_id_offset_array(g.world_20_12t14_array = [], x.file_specific[0].section_20[0].type_14)
        generate_id_offset_array(g.world_20_12t15_array = [], x.file_specific[0].section_20[0].type_15)
        generate_id_offset_array(g.world_20_12t8_76t8_04_array = [], x.unordered[0].world_20_12t8_76t8_04)
        generate_id_offset_array(g.world_20_12t8_76t8_08_array = [], x.unordered[0].world_20_12t8_76t8_08)
    }

    generate_id_offset_array(g.model_animation_1_array = [], g.ordered_ref.model_animation_1)
    generate_id_offset_array(g.model_animation_2_array = [], g.ordered_ref.model_animation_2)
    generate_id_offset_array(g.models_array = [], g.ordered_ref.models)

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "link":
        e = ex_basic(o, x.file_specific[0])
        break
    case "share":
        e = ex_share(o, x)
        break
    case "world":
        e = ex_world(o, x.file_specific[0])
        break
    default:
        console.log("later")
    }

    if (g.ordered_ref.texture_animation.length) {
        let temp_offset = e
        su32(g.datapack_offset + 60, g.tex_anims - g.m)
        for (let i = 0; i < g.ordered_ref.texture_animation.length; i++) {

            e = ex_texture_animation_section(g.tex_anims + (i * 12), temp_offset, g.ordered_ref.texture_animation[i])
        }
    }

    return e

}

function ex_basic(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_00)

    // ex_basic_04(e, x.basic_04[0])
    e = ex_s_offset(o + 4, e, ex_basic_04, x.basic_04, 'up')

    return e

    function ex_basic_04(o, x) {
        let e = o

        // if (o === 520) {
        //     e += 80
        // } else if (o === 11412) {
        //     e += 16
        // } else {
        e += 16
        // }
        if (g.file_name === 'Autosave.xpc') {
            if (g.m === 181908) {
                e += 592
            } else if (g.m === 358504) {
                e += 592
            } else if (g.m === 400) {
                e += 528
            }
        }

        // e = ex_byte_alignment_testing(o)

        if (x.unordered_link) {
            g.oa.push(o)
        }

        e = ex_ordered_list(e)

        switch (g.file_dir_type) {
        case "car":
            e = ex_ml(x.unordered_link, g.car_array, ex_car, g.unordered_ref.car, o + 0, e, 'null');
            break
        case "interface":
            e = ex_ml(x.unordered_link, g.interface_array, ex_interface, g.unordered_ref.interface, o + 0, e, 'null');
            break
        case "link":
            e = ex_ml(x.unordered_link, g.link_array, ex_link, g.unordered_ref.link, o + 0, e, 'null');
            break
        default:
            console.log("later")
        }

        su32(o + 4, x.u32_04)

        // e = e -12
        // temp
        // e = ex_ml(x.unordered_link, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 60, e);

        // x.push({
        //     unordered_link: 0,
        //     u32_04: u32(o + 4),
        // });

        // switch (g.file_dir_type) {
        // case "car":
        //     // x[0].unordered_link = in_ml(o, frame_array, get_frame, outerXFA.frames)
        //     break
        // case "interface":
        //     // x[0].unordered_link = in_ml(o, frame_array, get_frame, outerXFA.frames)
        //     break
        // case "link":
        //     x[0].unordered_link = in_ml(u32(o), g.link_array, im_link, g.unordered_ref.link)
        //     break
        // default:
        //     console.log("later")
        // }

        return e

    }

}

function ex_index_patch_list(o) {
    let i = 0
    for (let t_i = 0; t_i < g.texture_patch_array.length; t_i++,
    i++) {
        su32(o + (i * 8), g.texture_patch_array[t_i][0] - g.m)
        su16(o + (i * 8) + 4, g.texture_patch_array[t_i][1])
        su16(o + (i * 8) + 6, g.texture_patch_array[t_i][2])
    }
    for (let ta_i = 0; ta_i < g.animation_patch_array.length; ta_i++,
    i++) {
        su32(o + (i * 8), g.animation_patch_array[ta_i][0] - g.m)
        su16(o + (i * 8) + 4, g.animation_patch_array[ta_i][1])
        su16(o + (i * 8) + 6, g.animation_patch_array[ta_i][2])
    }
    for (let s_i = 0; s_i < g.sound_patch_array.length; s_i++,
    i++) {
        su32(o + (i * 8), g.sound_patch_array[s_i][0] - g.m)
        su16(o + (i * 8) + 4, g.sound_patch_array[s_i][1])
        su16(o + (i * 8) + 6, g.sound_patch_array[s_i][2])
    }
}

function ex_ordered_list(o) {
    let e = o

    if (g.ordered_ref.models.length) {
        e = ex_ma(g.ordered_ref.models, g.models_array, dyn_model, e, g.m)
    }

    if (g.ordered_ref.texture_animation.length) {
        //this is calculated later
        g.tex_anims = e
        g.oa.push(g.tex_anims)
        e += divisible(g.ordered_ref.texture_animation.length * 12, 16)
    }

    if (g.ordered_ref.model_animation_1.length) {
        e = ex_ma(g.ordered_ref.model_animation_1, g.model_animation_1_array, ex_model_animation_1, e, g.m)
    }
    if (g.ordered_ref.model_animation_2.length) {
        e = ex_ma(g.ordered_ref.model_animation_2, g.model_animation_2_array, ex_model_animation_2, e, g.m)
    }

    if (g.ordered_ref.textures.length) {
        su32(g.datapack_offset + 20, g.ordered_ref.textures.length)
        su32(g.datapack_offset + 24, e - g.m)
        let temp_offset = e
        e += divisible(g.ordered_ref.textures.length * 64, 16)
        for (let i = 0; i < g.ordered_ref.textures.length; i++) {
            e = ex_textures(temp_offset + (i * 64), e, g.ordered_ref.textures[i])
        }
        ;
    }

    // e = dyn_multiappend(g.ordered_ref.models, model_array, dyn_model, mid_section_2 + 16, mid)
    // e = ex_ml(g.ordered_ref.models, g.link_array, ex_link, g.unordered_ref.link, o + 0, e, 'up');

    // e = ex_s_offset(g.datapack_offset + 24, e, ex_textures, g.ordered_ref.textures, null)

    // e = ex_ml(g.ordered_ref.textures, null , ex_texture, g.ordered_ref.textures, g.datapack_offset + 0, e, 'up');

    return e
}

function ex_offset_patch_list(o) {
    let e = o + (g.oa.length * 4) + (g.model_patch_array.length * 8)
    let i = 0
    for (let m_i = 0; m_i < g.model_patch_array.length; m_i++,
    i += 8) {
        // su32(offset + (i * 8), g.model_patch_array[i])
        su32(o + i, g.model_patch_array[m_i][0] - g.m)
        su16(o + i + 4, g.model_patch_array[m_i][1])
        su16(o + i + 6, g.model_patch_array[m_i][2])
    }
    for (let g_i = 0; g_i < g.oa.length; g_i++,
    i += 4) {
        su32(o + i, g.oa[g_i] - g.m)
    }

    return e

}
