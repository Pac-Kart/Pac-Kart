"use strict";

function get_bmg_demo_sec_id(string) {
    switch (string) {
    case '5S25':
        return "bmg_demo_file_heaader"
        break
    default:
        return null
    }
}

async function im_bmg_demo_x() {
    // console.log("?")

    im_bmg_demo_file_heaader(0, 0, x)

    delete globalThis.buffer

}

function im_bmg_demo_file_heaader(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5S25",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_12: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
        // directory: [],
    })
    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_bmg_demo_directory(16 + (i * 24), x[0].section_12, i)
        time_array.push(Date.now() - a)
    }
    console.log(time_array)

}

function im_bmg_demo_directory(o, x, i) {

    g = {
        divisible_prev_value: [],
        debug: false,
        game: g.game,
        console: g.console,
        file_version: u32(8),
        file_dir_type: 0,
        type_string: g.type_string,
        file_name: g.file_name,
        endian: g.endian,
        file_extension: g.file_name,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        bmg_demo_model_anim_1_array: [],
        bmg_demo_model_anim_1_type_a_array: [],
        bmg_demo_model_anim_1_type_b_array: [],
        bmg_demo_model_anim_2_array: [],
        bmg_demo_model_anim_2_type_a_array: [],
        bmg_demo_model_anim_2_type_b_array: [],
        bmg_demo_model_anim_3_array: [],
        bmg_demo_world_0_64_array: [],
        bmg_demo_world_12_array: [],
        bmg_demo_world_20_array: [],
        bmg_demo_world_92_array: [],
        bmg_demo_world_116_array: [],
        bmg_demo_world_68_array: [],
        bmg_demo_world_84_array: [],
        bmg_demo_world_4_array: [],
        bmg_demo_activator_array: [],
        bmg_demo_event_array: [],
        bmg_demo_flag_array: [],
        bmg_demo_font_array: [],
        bmg_demo_idk_array: [],
        bmg_demo_interface_array: [],
        bmg_demo_model_link_array: [],
        bmg_demo_model_sub_link_array: [],
        bmg_demo_multi_font_array: [],
        bmg_demo_something_array: [],
        bmg_demo_sound_controls_array: [],
        bmg_demo_sound_section_array: [],
        bmg_demo_strange_array: [],
        bmg_demo_text_array: [],
        bmg_demo_thing_array: [],
        bmg_demo_unknown_array: [],
        bmg_demo_var_array: [],
        bmg_demo_world_thing_array: [],
        bmg_demo_extended_world_link_array: [],
        bmg_demo_link_array: [],
        bmg_demo_mysterious_array: [],
        bmg_demo_world_settings_array: [],
        bmg_demo_world_link_array: [],
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

    // im_bmg_demo_datapack(u32(o + 20) + directory_offset, x[i].datapack)
}

// function im_bmg_demo_datapack(o, x) {
//     g.m = 0
//     x.push({
//         id: gen_id(),
//         audio: [],
//         index_patch_list: [],
//         audio_index_patch_padding: 0,
//         ordered: [],
//         linked_files: {
//             string_1: [im_string(o + 80, o + 91)],
//             u32_92: u32(o + 92),
//             u32_96: u32(o + 96),
//             string_2: [im_string(o + 100, o + 111)],
//             u32_112: u32(o + 112),
//             u32_116: u32(o + 116),
//         },
//     })

//     g.datapack_offset = o
//     g.datapack_ref = x[0]

//     //calulate end of datapack
//     let offset_after_datapack = get_datapack_end(o)
//     let offset_after_audio = offset_after_datapack + divisible(u32(o + 8) * 4, 32)
//     let offset_index_patch = offset_after_audio + u32(o + 4)
//     if (g.console === 'ps2')
//         offset_index_patch = divisible(offset_index_patch, 2048);
//     g.m = offset_index_patch + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

//     //audio
//     let padding_test = im_audio(offset_after_datapack, x[0].audio, u32(o + 8))

//     x[0].audio_index_patch_padding = offset_index_patch - padding_test
//     //index_patch_list
//     im_index_patch_list(offset_index_patch, x[0].index_patch_list)

//     //ordered
//     im_ordered(g.m, x[0].ordered)

//     return

//     function get_datapack_end(o) {
//         if (g.console === "ps2") {
//             o = divisible(o + 120, 2048)
//         } else if (g.console === "psp") {
//             o += 128
//         } else if (g.game === "snoopy_vs_the_red_baron") {
//             o += 128
//         } else if (g.datapack_version === "geometry") {
//             o += 84
//         } else {
//             o += 120
//         }
//         return o
//     }

//     function im_index_patch_list(o, x) {
//         let texture_animation_offset = o + (u32(g.datapack_offset + 16) * 8)
//         let sound_offset = o + ((u32(g.datapack_offset + 16) + u32(g.datapack_offset + 52)) * 8)

//         x.push({
//             texture: im_patch_list(o, u32(g.datapack_offset + 16), 't'),
//             texture_animation: im_patch_list(texture_animation_offset, u32(g.datapack_offset + 52), 'a'),
//             sound: im_patch_list(sound_offset, u32(g.datapack_offset + 28), 's'),
//         })

//         g.texture_patch_ref = x[0].texture
//         g.animation_patch_ref = x[0].texture_animation
//         g.sound_patch_ref = x[0].sound

//         // no reason to keep this in x
//     }
// }

// function im_ordered(o, x) {
//     x.push({
//         id: gen_id(),
//         file_specific: [],
//         models: [],
//         texture_animation: [],
//         model_animation_1: [],
//         model_animation_2: [],
//         textures: [],
//         texturepadding: 0,
//         unordered: [{
//             car: [],
//             link: [],
//             idk: [],
//             interface: [],
//             frame_sparkler: [],
//             frame_font: [],
//             frame_multi_font: [],
//             frame_text: [],
//             sound_controls: [],
//             sound_section: [],
//             model_link: [],
//             model_sub_link: [],
//             wtf: [],
//             unknown: [],
//             unknown_00: [],
//             unknown_00_04_04t1: [],
//             unknown_00_04_04t5: [],
//             unknown_00_04_04t5_28_04_00: [],
//             activator: [],
//             activator_248_04_04t0_04: [],
//             flag: [],
//             var: [],
//             gate: [],
//             strange: [],
//             object: [],
//             um: [],
//             world_settings: [],
//             world_20_12t0: [],
//             world_20_12t1: [],
//             world_20_12t4: [],
//             world_20_12t8: [],
//             world_20_12t10: [],
//             world_20_12t11: [],
//             world_20_12t13: [],
//             world_20_12t14: [],
//             world_20_12t15: [],
//             world_20_12t8_76t8_04: [],
//             world_20_12t8_76t8_08: [],
//             car_00_180_04_84: [],
//             car_00_180: [],
//             car_00_192_16: [],
//             car_00_184: [],

//             mysterious: [],
//             mysterious_04t9: [],
//             //move o ordered later
//             world_20_12t0: [],
//             world_20_12t1: [],
//             world_20_12t2: [],
//             world_20_12t3: [],
//             world_20_12t4: [],
//             world_20_12t5: [],
//             world_20_12t8: [],
//             world_20_12t10: [],
//             world_20_12t11: [],
//             world_20_12t13: [],
//             world_20_12t14: [],
//             world_20_12t15: [],
//             unknown_00_04_04t2: [],
//             activator_248_32_72_08t18_08_04t0: [],
//             object_32t15: [],
//         }],
//         offset_patch_list: [],
//     })

//     g.ordered_ref = x[0]
//     g.unordered_ref = x[0].unordered[0]

//     im_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].offset_patch_list)

//     let gsharedonly = im_texture(u32(g.datapack_offset + 24) + g.m, x[0].textures)

//     im_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].offset_patch_list)

//     switch (g.file_dir_type) {
//     case "car":
//     case "interface":
//     case "link":
//         im_basic(o, x[0].file_specific)
//         break
//     case "share":
//         get_share(o, x[0].file_specific, gsharedonly)
//         break
//     case "world":
//         im_world(o, 0, x[0].file_specific)
//         break
//     default:
//         console.log("later")
//     }

//     if (g.model_animation_1_array.length) {
//         model_animation_padding()
//     }

//     for (let i = 0; i < u32(g.datapack_offset + 48); i++) {
//         im_texture_animation_section(u32(g.datapack_offset + 60) + (i * 12) + g.m, i, x[0].texture_animation)
//     }

//     return

//     function im_offset_patch_list(o, x) {
//         x.push({
//             model: im_patch_list(o, u32(g.datapack_offset + 56), 'm'),
//         })
//         g.model_patch_ref = x[0].model

//     }
// }

// function im_basic(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         basic_04: [],
//     });

//     im_basic_04(u32(o + 4) + o, x[0].basic_04)

//     return

//     function im_basic_04(o, x) {
//         x.push({
//             unordered_link: 0,
//             u32_04: u32(o + 4),
//         });

//         switch (g.file_dir_type) {
//         case "car":
//             x[0].unordered_link = in_ml(u32(o), g.car_array, im_car, g.unordered_ref.car)
//             break
//         case "interface":
//             x[0].unordered_link = in_ml(u32(o), g.interface_array, im_interface, g.unordered_ref.interface)
//             break
//         case "link":
//             x[0].unordered_link = in_ml(u32(o), g.link_array, im_link, g.unordered_ref.link)
//             break
//         default:
//             console.log("later")
//         }

//     }

// }

// function model_animation_padding() {
//     g.model_animation_1_array = g.model_animation_1_array.sort()
//     let array = g.model_animation_1_array
//     let tempx = g.ordered_ref.model_animation_1

//     let i = 0
//     for (; i < array.length - 1; i++) {
//         tempx[i].padding = ((array[i + 1] + g.m) - tempx[i].padding)
//     }
//     if (g.model_animation_2_array) {
//         g.model_animation_2_array = g.model_animation_2_array.sort()
//         tempx[i].padding = ((g.model_animation_2_array[0] + g.m) - tempx[i].padding)
//     } else {
//         tempx[i].padding = 0
//     }

// }

function get_default(s) {
    let split = s.split('_')
    let value = split[0]
    let number = Number(split[1])
    return {
        n: s,
        v: 0,
        o: number,
        f: value,
    }
}

function append_bmg_demo_world_settings() {// // need to append this to section
// return {
// id: gen_id(),
// sec_id: "Pwja",
// section_00: ["type"],
// section_04: [],
// f32_08: 0,
// f32_12: 0,
// u8_33: 0,
// u32_52: 0,
// section_56: [],
// section_60: [],
// texture_68: [0, 0, 0, 't'],
// texture_72: [0, 0, 0, 't'],
// texture_76: [0, 0, 0, 't'],
// f32_80: 0,
// f32_84: 0,
// section_88: [],
// f32_92: 0,
// f32_96: 0,
// section_100: [],
// u32_104: 0,//amount?
// section_108: [],
// f32_120: 0,
// f32_124: 0,
// f32_128: 0,
// f32_132: 0,
// u8_137: 0,
// f32_140: 0,
// texture_144: [0, 0, 0, 't'],
// f32_148: 0,
// f32_152: 0,
// f32_156: 0,
// f32_160: 0,
// f32_164: 0,
// f32_168: 0,
// unordered_bmg_demo_font_176: 0,
// }
}

function info_bmg_demo_world_settings() {
    // used when edit?
    return {
        id: gen_id(),
        sec_id: "Pwja",
        section_00: ["type"],
        section_04: [sec_id],
        f32_08: get_default("f32_08"),
        f32_12: get_default("f32_12"),
        u8_33: 0,
        u32_52: 0,
        section_56: [],
        section_60: [],
        texture_68: [0, 0, 0, 't'],
        texture_72: [0, 0, 0, 't'],
        texture_76: [0, 0, 0, 't'],
        f32_80: 0,
        f32_84: 0,
        section_88: [],
        f32_92: 0,
        f32_96: 0,
        section_100: [],
        u32_104: 0,
        //amount?
        section_108: [],
        f32_120: 0,
        f32_124: 0,
        f32_128: 0,
        f32_132: 0,
        u8_137: 0,
        f32_140: 0,
        texture_144: [0, 0, 0, 't'],
        f32_148: 0,
        f32_152: 0,
        f32_156: 0,
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        unordered_bmg_demo_font_176: 0,
    }
}

function add_bmg_demo_file_heaader() {
    return {
        id: gen_id(),
        sec_id: "5S25",
        u32_00: 0,
        u32_04: 0,
        u32_08: 0,
        section_12: [],
    };

}
function info_bmg_demo_file_heaader() {
    return {
        id: gen_id(),
        sec_id: "5S25",
        u32_00: 0,
        u32_04: 0,
        u32_08: 0,
        section_12: [],
    };

}
function ex_bmg_demo_file_heaader(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_bmg_demo_directory, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
