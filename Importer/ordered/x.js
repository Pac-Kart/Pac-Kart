"use strict";
// im = import
// x = .x* file array
// o = offset

async function im_x() {
    x = []
    globalThis.id_list = 0

    //global object

    x.push({
        id: gen_id(),
        game: g.game,
        console: g.console,
        version: u32(8),
        name: g.file_name,
        directory: [],
    })
    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_directory(16 + (i * 24), x[0].directory, i)
        time_array.push(Date.now() - a)
    }
    console.log(time_array)

    delete globalThis.buffer

    function im_directory(o, x, i) {

        g = {
            divisible_prev_value: [],
            debug: false,
            game: g.game,
            console: g.console,
            file_version: u32(8),
            file_dir_type: 0,
            file_name: g.file_name,
            endian: g.endian,
            file_extension: g.file_name,
            datapack_offset: 0,
            datapack_ref: 0,
            ordered_ref: 0,
            unordered_ref: 0,
            m: 0,
            car_array: [],
            link_array: [],
            idk_array: [],
            interface_array: [],
            frame_sparkler_array: [],
            frame_font_array: [],
            frame_multi_font_array: [],
            frame_text_array: [],
            sound_controls_array: [],
            sound_section_array: [],
            model_link_array: [],
            model_sub_link_array: [],
            wtf_array: [],
            unknown_array: [],
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
            world_settings_array: [],
            world_20_12t0_array: [],
            world_20_12t1_array: [],
            world_20_12t4_array: [],
            world_20_12t8_array: [],
            world_20_12t10_array: [],
            world_20_12t11_array: [],
            world_20_12t13_array: [],
            world_20_12t14_array: [],
            world_20_12t15_array: [],
            world_20_12t8_76t8_04_array: [],
            world_20_12t8_76t8_08_array: [],
            texture_patch_ref: 0,
            animation_patch_ref: 0,
            sound_patch_ref: 0,
            model_patch_ref: 0,
            model_animation_1_array: [],
            model_animation_2_array: [],
            models_array: [],
            mysterious_array: [],
            mysterious_04t9_array: [],
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
            temp72end: [],
            temp72arry: [],
            car_00_180_04_84_array: [],
            car_00_180_array: [],
            car_00_192_16_array: [],
            car_00_184_array: [],
            unknown_00_04_04t2_array: [],
            activator_248_32_72_08t18_08_04t0_array: [],
            object_32t15_array: [],
        }

        let type = ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'][u32(o + 4)];

        x.push({
            id: gen_id(),
            version: u32(o),
            type: type,
            index: u32(o + 8),
            unknown_12: [],
            datapack: [],
        })

        g.file_dir_type = type

        im_datapack(u32(o + 20) + directory_offset, x[i].datapack)
    }

}

function im_datapack(o, x) {
    g.m = 0
    x.push({
        id: gen_id(),
        audio: [],
        index_patch_list: [],
        audio_index_patch_padding: 0,
        ordered: [],
        linked_files: {
            string_1: [im_string(o + 80, o + 91)],
            u32_92: u32(o + 92),
            u32_96: u32(o + 96),
            string_2: [im_string(o + 100, o + 111)],
            u32_112: u32(o + 112),
            u32_116: u32(o + 116),
        },
    })

    g.datapack_offset = o
    g.datapack_ref = x[0]

    //calulate end of datapack
    let offset_after_datapack = get_datapack_end(o)
    let offset_after_audio = offset_after_datapack + divisible(u32(o + 8) * 4, 32)
    let offset_index_patch = offset_after_audio + u32(o + 4)
    if (g.console === 'ps2')
        offset_index_patch = divisible(offset_index_patch, 2048);
    g.m = offset_index_patch + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

    //audio
    let padding_test = im_audio(offset_after_datapack, x[0].audio, u32(o + 8))

    x[0].audio_index_patch_padding = offset_index_patch - padding_test
    //index_patch_list
    im_index_patch_list(offset_index_patch, x[0].index_patch_list)

    //ordered
    im_ordered(g.m, x[0].ordered)

    return

    function get_datapack_end(o) {
        if (g.console === "ps2") {
            o = divisible(o + 120, 2048)
        } else if (g.console === "psp") {
            o += 128
        } else if (g.game === "snoopy_vs_the_red_baron") {
            o += 128
        } else if (g.datapack_version === "geometry") {
            o += 84
        } else {
            o += 120
        }
        return o
    }

    function im_index_patch_list(o, x) {
        let texture_animation_offset = o + (u32(g.datapack_offset + 16) * 8)
        let sound_offset = o + ((u32(g.datapack_offset + 16) + u32(g.datapack_offset + 52)) * 8)

        x.push({
            texture: im_patch_list(o, u32(g.datapack_offset + 16), 't'),
            texture_animation: im_patch_list(texture_animation_offset, u32(g.datapack_offset + 52), 'a'),
            sound: im_patch_list(sound_offset, u32(g.datapack_offset + 28), 's'),
        })

        g.texture_patch_ref = x[0].texture
        g.animation_patch_ref = x[0].texture_animation
        g.sound_patch_ref = x[0].sound

        // no reason to keep this in x
    }
}

function im_ordered(o, x) {
    x.push({
        id: gen_id(),
        file_specific: [],
        models: [],
        texture_animation: [],
        model_animation_1: [],
        model_animation_2: [],
        textures: [],
        texturepadding: 0,
        unordered: [{
            car: [],
            link: [],
            idk: [],
            interface: [],
            frame_sparkler: [],
            frame_font: [],
            frame_multi_font: [],
            frame_text: [],
            sound_controls: [],
            sound_section: [],
            model_link: [],
            model_sub_link: [],
            wtf: [],
            unknown: [],
            unknown_00: [],
            unknown_00_04_04t1: [],
            unknown_00_04_04t5: [],
            unknown_00_04_04t5_28_04_00: [],
            activator: [],
            activator_248_04_04t0_04: [],
            flag: [],
            var: [],
            gate: [],
            strange: [],
            object: [],
            um: [],
            world_settings: [],
            world_20_12t0: [],
            world_20_12t1: [],
            world_20_12t4: [],
            world_20_12t8: [],
            world_20_12t10: [],
            world_20_12t11: [],
            world_20_12t13: [],
            world_20_12t14: [],
            world_20_12t15: [],
            world_20_12t8_76t8_04: [],
            world_20_12t8_76t8_08: [],
            car_00_180_04_84: [],
            car_00_180: [],
            car_00_192_16: [],
            car_00_184: [],

            mysterious: [],
            mysterious_04t9: [],
            //move o ordered later
            world_20_12t0: [],
            world_20_12t1: [],
            world_20_12t2: [],
            world_20_12t3: [],
            world_20_12t4: [],
            world_20_12t5: [],
            world_20_12t8: [],
            world_20_12t10: [],
            world_20_12t11: [],
            world_20_12t13: [],
            world_20_12t14: [],
            world_20_12t15: [],
            unknown_00_04_04t2: [],
            activator_248_32_72_08t18_08_04t0: [],
            object_32t15: [],
        }],
        offset_patch_list: [],
    })

    g.ordered_ref = x[0]
    g.unordered_ref = x[0].unordered[0]

    im_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].offset_patch_list)

    let gsharedonly = im_texture(u32(g.datapack_offset + 24) + g.m, x[0].textures)

    im_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].offset_patch_list)

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "link":
        im_basic(o, x[0].file_specific)
        break
    case "share":
        get_share(o, x[0].file_specific, gsharedonly)
        break
    case "world":
        im_world(o, 0, x[0].file_specific)
        break
    default:
        console.log("later")
    }

    if (g.model_animation_1_array.length) {
        model_animation_padding()
    }

    for (let i = 0; i < u32(g.datapack_offset + 48); i++) {
        im_texture_animation_section(u32(g.datapack_offset + 60) + (i * 12) + g.m, i, x[0].texture_animation)
    }

    return

    function im_offset_patch_list(o, x) {
        x.push({
            model: im_patch_list(o, u32(g.datapack_offset + 56), 'm'),
        })
        g.model_patch_ref = x[0].model

    }
}

function im_basic(o, x) {
    x.push({
        u32_00: u32(o + 0),
        basic_04: [],
    });

    im_basic_04(u32(o + 4) + o, x[0].basic_04)

    return

    function im_basic_04(o, x) {
        x.push({
            unordered_link: 0,
            u32_04: u32(o + 4),
        });

        switch (g.file_dir_type) {
        case "car":
            x[0].unordered_link = in_ml(u32(o), g.car_array, im_car, g.unordered_ref.car)
            break
        case "interface":
            x[0].unordered_link = in_ml(u32(o), g.interface_array, im_interface, g.unordered_ref.interface)
            break
        case "link":
            x[0].unordered_link = in_ml(u32(o), g.link_array, im_link, g.unordered_ref.link)
            break
        default:
            console.log("later")
        }

    }

}

function model_animation_padding() {
    g.model_animation_1_array = g.model_animation_1_array.sort()
    let array = g.model_animation_1_array
    let tempx = g.ordered_ref.model_animation_1

    let i = 0
    for (; i < array.length - 1; i++) {
        tempx[i].padding = ((array[i + 1] + g.m) - tempx[i].padding)
    }
    if (g.model_animation_2_array) {
        g.model_animation_2_array = g.model_animation_2_array.sort()
        tempx[i].padding = ((g.model_animation_2_array[0] + g.m) - tempx[i].padding)
    } else {
        tempx[i].padding = 0
    }

}

function gen_id() {
    let id = id_list
    id_list++
    return id
}
