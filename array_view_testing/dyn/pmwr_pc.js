"use strict";

function get_pmwr_pc_sec_id(string) {
    switch (string) {
    case 'gjbf':
        return "pmwr_pc_file_header"
        break
    case ']7Zf':
        return "pmwr_pc_directory"
        break
    default:
        return null
    }
}

async function im_pmwr_pc_x(index) {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_pmwr_pc_file_header(0, 0, x[index].format)
}

function im_pmwr_pc_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        directory: [],
    });

    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let ii = 0; ii < u32(12); ii++) {
        let a = Date.now()
        im_pmwr_pc_directory(16 + (ii * 24), ii, x[0].directory, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log("saved in " + time_array)

    return x[i].id
    // 16 bytes;

}

function im_pmwr_pc_directory(o, i, x, global) {
    let next_offset = o + 24

    g = {
        divisible_prev_value: [],
        debug: pk_debug,
        type_string: g.type_string,
        game: g.game,
        console: g.console,
        file_version: u32(8),
        file_dir_type: 0,
        file_name: g.file_name,
        endian: g.endian,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
        models_array: [],
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

    g.file_dir_type = return_directory_type(u32(o + 4))

    x.push({
        id: gen_id(),
        sec_id: "]7Zf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        section_datapack: [],
    });

    // u32(o + 16) ? im_pmwr_pc_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack) : 0;
    im_pmwr_pc_datapack(u32(o + 20) + global, x[i].section_datapack)

    return x[i].id
    // 24 bytes;

}

function im_pmwr_pc_datapack(o, x) {
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

function im_world(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_world_settings_00: 0,
        section_04: [],
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [{
            type_0: [],
            type_1: [],
            type_2: [],
            type_3: [],
            type_4: [],
            type_5: [],
            type_8: [],
            type_10: [],
            type_11: [],
            type_13: [],
            type_14: [],
            type_15: [],
        }],
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
        u32_104: u32(o + 104),
        u32_108: u32(o + 108),
        u32_112: u32(o + 112),
        u32_116: u32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        u32_128: u32(o + 128),
        u32_132: u32(o + 132),
        u32_136: u32(o + 136),
        u32_140: u32(o + 140),
        u32_144: u32(o + 144),
        u32_148: u32(o + 148),
        u32_152: u32(o + 152),
        u32_156: u32(o + 156),
    });

    if (g.texture_patch_ref.length !== 899) {
        x[i].unordered_world_settings_00 = in_ml(u32(o + 0), g.world_settings_array, im_world_settings, g.unordered_ref.world_settings);
        //award why
    }

    u32(o + 4) ? im_collision(u32(o + 4) + g.m, x[i].section_04) : 0;
    u32(o + 12) ? im_world_12(u32(o + 12) + g.m, x[i].section_12) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_world_20(u32(o + 20) + (ii * 16) + g.m, ii, x[i].section_20);
    }

    if (g.texture_patch_ref.length === 899) {
        //award why
        x[i].unordered_world_settings_00 = in_ml(u32(o + 0), g.world_settings_array, im_world_settings, g.unordered_ref.world_settings);
    }

    u32(o + 8) ? im_world_08(u32(o + 8) + g.m, x[i].section_08) : 0;

    if (g.temp72arry.length) {
        for (let i = 0; i < g.temp72arry.length; i++) {
            im_world_20_12t8_72(g.temp72arry[i][0], g.temp72arry[i][1]['section_72'])
        }
    }

    u32(o + 24) ? im_world_24(u32(o + 24) + g.m, x[i].section_24) : 0;
    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_world_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    return x[i].id
}
function im_collision(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        section_32: [],
        u32_36: u32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        u32_52: u32(o + 52),
        //amount?
        u32_56: u32(o + 56),
        //amount?
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        u32_68: u32(o + 68),
        //amount?
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        u32_88: u32(o + 88),
    });

    // switch(u32(o + 88)){
    //    case 0:
    //        u32(o + 32) ? im_collision_32t0(u32(o + 32) + g.m,x[0].section_32) : 0; 
    //    break;
    //    case 1:
    //        u32(o + 32) ? im_collision_32t1(u32(o + 32) + g.m,x[0].section_32) : 0; 
    //    break;

    let typefunction
    switch (u32(o + 88)) {
    case 0:
        typefunction = im_collision_32t0
        break;
    case 1:
        typefunction = im_collision_32t1
        break;
    }

    for (let i = 0; i < u32(o + 68); i++) {
        typefunction(u32(o + 32) + (i * 48) + g.m, i, x[0].section_32);
    }

    for (let i = 0; i < (u32(o + 52) * u32(o + 56) * u32(o + 60)); i++) {
        im_collision_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }

    for (let i = 0; i < u32(o + 72); i++) {
        im_collision_76(u32(o + 76) + (i * 32) + g.m, i, x[0].section_76);
    }

    for (let i = 0; i < u32(o + 80); i++) {
        im_collision_84(u32(o + 84) + (i * 64) + g.m, i, x[0].section_84);
    }
}

function im_collision_76(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        u16_24: u16(o + 24),
        u16_26: u16(o + 26),
    });

    u32(o + 16) ? im_collision_76_16(u32(o + 16) + g.m, x[i].section_16) : 0;

}
function im_collision_76_16(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
    });

}
function im_collision_84(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
    });

}
function im_collision_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

}
function im_collision_32t0(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
    });

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_collision_32t0_40(u32(o + 40) + (ii * 4) + g.m, ii, x[i].section_40);
    }

}
function im_collision_32t0_40(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

}
function im_collision_32t1(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        //amount?
        section_36: [],
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
    });

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_collision_32t1_36(u32(o + 36) + (ii * 2) + g.m, ii, x[i].section_36);
    }

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_collision_32t1_40(u32(o + 40) + (ii * 12) + g.m, ii, x[i].section_40);
    }

}
function im_collision_32t1_40(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_collision_32t1_40_00(u32(o + 0) + (ii * 32) + g.m, ii, x[i].section_00);
    }

}
function im_collision_32t1_40_00(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
    });

}
function im_collision_32t1_36(o, i, x) {
    x.push({
        id: gen_id(),
        u16_00: u16(o + 0),
    });

}
function im_world_20(o, i, x) {
    if (u32(o + 4) && u32(o + 8)) {

        // switch (u32(o)) {
        // case 0:
        //     break
        // }
        // type_1:[],
        // type_2:[],
        // type_3:[],
        // type_4:[],
        // type_5:[],
        // type_8:[],
        // type_10:[],
        // type_11:[],
        // type_13:[],
        // type_14:[],
        // type_15:[],

        // x.push({
        //     // section_12: [],
        //     // u32_04: u32(o + 4),
        //     // //check this
        //     // u32_08: u32(o + 8),
        //     // //amount?
        //     // u32_12: u32(o + 12),
        // });

        let typefunction
        let typeamount
        let typex;

        switch (u32(o + 0)) {
        case 0:
            typefunction = im_world_20_12t0
            typeamount = 128
            typex = x[0].type_0;
            break;
        case 1:
            typefunction = im_world_20_12t1
            typeamount = 96
            typex = x[0].type_1;
            break;
        case 2:
            typefunction = im_world_20_12t2
            typeamount = 112
            typex = x[0].type_2;
            break;
        case 3:
            typefunction = im_world_20_12t3
            typeamount = 64
            typex = x[0].type_3;
            break;
        case 4:
            typefunction = im_world_20_12t4
            typeamount = 144
            typex = x[0].type_4;
            break;
        case 5:
            typefunction = im_world_20_12t5
            typeamount = 112
            typex = x[0].type_5;
            break;
        case 8:
            typefunction = im_world_20_12t8
            typeamount = 80
            typex = x[0].type_8;
            break;
        case 10:
            typefunction = im_world_20_12t10
            typeamount = 96
            typex = x[0].type_10;
            break;
        case 11:
            typefunction = im_world_20_12t11
            typeamount = 80
            typex = x[0].type_11;
            break;
        case 13:
            typefunction = im_world_20_12t13
            typeamount = 96
            typex = x[0].type_13;
            break;
        case 14:
            typefunction = im_world_20_12t14
            typeamount = 80
            typex = x[0].type_14;
            break;
        case 15:
            typefunction = im_world_20_12t15
            typeamount = 80
            typex = x[0].type_15;
            break;
        default:
            console.log("??")
            break
        }
        g.temp72end.push(u32(o + 12) + g.m)
        for (let ii = 0; ii < u32(o + 8); ii++) {
            // typex.push()
            typefunction(u32(o + 12) + (ii * typeamount) + g.m, ii, typex);
        }

        // x[i].unordered_model_animation_1_64 = in_ml(u32(o + 64), g.model_animation_1_array, im_model_animation_1, g.unordered_ref.model_animation_1);

        // u32(o + 0) ? im_world_20_12t0(u32(o + 0) + g.m, x[0].section_00) : 0;
        // offset? 

    }
}
function im_type_entry_header(o) {
    return {
        u32_00: u32(o + 0),
        u16_04: u16(o + 4),
        u16_06: u16(o + 6),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
    }
}

function im_world_20_12t0(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        u16_74: u16(o + 74),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        u8_112: u8(o + 112),
        u8_113: u8(o + 113),
        u8_114: u8(o + 114),
        u8_120: u8(o + 120),
        u8_121: u8(o + 121),
        //check this
    });
    g.world_20_12t0_array.push(o - g.m)
    g.unordered_ref.world_20_12t0.push(x[i])
    return x[i].id
}
function im_world_20_12t1(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        ordered_model_animation_1_64: 0,
        f32_68: f32(o + 68),
        unordered_idk_72: 0,
        u8_76: u8(o + 76),
        u8_77: u8(o + 77),
        u8_78: u8(o + 78),
        f32_80: f32(o + 80),
    });

    x[i].ordered_model_animation_1_64 = in_ml(u32(o + 64), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[i].unordered_idk_72 = in_ml(u32(o + 72), g.idk_array, im_idk, g.unordered_ref.idk);

    g.world_20_12t1_array.push(o - g.m)
    g.unordered_ref.world_20_12t1.push(x[i])
    return x[i].id
}
function im_world_20_12t2(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        u32_40: u32(o + 40),
        u32_52: u32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        section_72: [],
        section_76: [],
        u32_84: u32(o + 84),
        section_100: [],
        u32_104: u32(o + 104),
        //amount?
    });

    u32(o + 56) ? im_world_20_12t2_56(u32(o + 56) + g.m, x[i].section_56, u32(o + 52)) : 0;

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_world_20_12t2_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    u32(o + 72) ? im_world_20_12t2_72(u32(o + 72) + g.m, x[i].section_72, u32(o + 40)) : 0;
    u32(o + 76) ? im_world_20_12t2_76(u32(o + 76) + g.m, x[i].section_76) : 0;

    for (let ii = 0; ii < u32(o + 104); ii++) {
        im_world_20_12t2_100(u32(o + 100) + (ii * 4) + g.m, ii, x[i].section_100);
    }

    g.world_20_12t2_array.push(o - g.m)
    g.unordered_ref.world_20_12t2.push(x[i])
    return x[i].id
}
function im_world_20_12t2_100(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

}
function im_world_20_12t2_56(o, x, a) {

    x.push({
        buffer: buffer.slice(o, o + a)
    });

    // x.push({
    //     f32_00: f32(o + 0),
    //     f32_04: f32(o + 4),
    //     f32_08: f32(o + 8),
    //     f32_12: f32(o + 12),
    //     u8_16: u8(o + 16),
    //     u8_17: u8(o + 17),
    //     u16_18: u16(o + 18),
    //     u32_20: u32(o + 20),
    //     u32_24: u32(o + 24),
    //     u32_28: u32(o + 28),
    //     f32_32: f32(o + 32),
    //     f32_36: f32(o + 36),
    //     f32_40: f32(o + 40),
    //     f32_44: f32(o + 44),
    //     u8_48: u8(o + 48),
    //     u8_49: u8(o + 49),
    //     u16_50: u16(o + 50),
    //     u32_52: u32(o + 52),
    //     u32_56: u32(o + 56),
    //     u32_60: u32(o + 60),
    //     f32_64: f32(o + 64),
    //     f32_68: f32(o + 68),
    //     f32_72: f32(o + 72),
    //     f32_76: f32(o + 76),
    //     u8_80: u8(o + 80),
    //     u8_81: u8(o + 81),
    //     u16_82: u16(o + 82),
    //     u32_84: u32(o + 84),
    //     u32_88: u32(o + 88),
    //     u32_92: u32(o + 92),
    //     f32_96: f32(o + 96),
    //     f32_100: f32(o + 100),
    //     f32_104: f32(o + 104),
    //     f32_108: f32(o + 108),
    //     u8_112: u8(o + 112),
    //     u8_113: u8(o + 113),
    //     u16_114: u16(o + 114),
    //     u32_116: u32(o + 116),
    //     u32_120: u32(o + 120),
    //     u32_124: u32(o + 124),
    //     f32_128: f32(o + 128),
    //     f32_132: f32(o + 132),
    //     f32_136: f32(o + 136),
    //     f32_140: f32(o + 140),
    //     u8_144: u8(o + 144),
    //     u8_145: u8(o + 145),
    //     u16_146: u16(o + 146),
    //     u32_148: u32(o + 148),
    //     u32_152: u32(o + 152),
    //     u32_156: u32(o + 156),
    //     f32_160: f32(o + 160),
    //     f32_164: f32(o + 164),
    //     f32_168: f32(o + 168),
    //     f32_172: f32(o + 172),
    //     u8_176: u8(o + 176),
    //     u8_177: u8(o + 177),
    //     u16_178: u16(o + 178),
    //     u32_180: u32(o + 180),
    //     u32_184: u32(o + 184),
    //     u32_188: u32(o + 188),
    // });

}
function im_world_20_12t2_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

}
function im_world_20_12t2_76(o, x) {
    x.push({
        u16_02: u16(o + 2),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_world_20_12t2_76_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

}
function im_world_20_12t2_76_12(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        type: 0,
    });

    let offset = u32(o + 0)

    if (offset) {
        let ii
        if (g.world_20_12t13_array.includes(offset)) {
            ii = g.world_20_12t13_array.indexOf(offset)
            x[i].section_00 = g.unordered_ref.world_20_12t13[ii].id
            x[i].type = 13
        } else if (g.world_20_12t14_array.includes(offset)) {
            ii = g.world_20_12t14_array.indexOf(offset)
            x[i].section_00 = g.unordered_ref.world_20_12t14[ii].id
            x[i].type = 14
        } else if (g.world_20_12t15_array.includes(offset)) {
            ii = g.world_20_12t15_array.indexOf(offset)
            x[i].section_00 = g.unordered_ref.world_20_12t15[ii].id
            x[i].type = 15
        } else {
            console.log('?')
        }

    }

    // x[i].section_00t13 = in_ml(u32(o + 0), g.world_20_12t13_array, im_world_20_12t13, g.unordered_ref.world_20_12t13);
    // x[i].section_00t14 = in_ml(u32(o + 0), g.world_20_12t14_array, im_world_20_12t14, g.unordered_ref.world_20_12t14);
    // x[i].section_00t15 = in_ml(u32(o + 0), g.world_20_12t15_array, im_world_20_12t15, g.unordered_ref.world_20_12t15);

    // in_ml(u32(o + 48), g.world_20_12t13_array, im_sound_controls, g.unordered_ref.sound_controls);

    // u32(o + 0) ? im_world_20_12t13(u32(o + 0) + g.m, x[i].section_00) : 0;
    // offset? 

}
function im_world_20_12t2_72(o, x, t) {
    x.push({
        section_00: [],
    });

    for (let i = 0; i < t; i++) {
        im_world_20_12t2_72_00(u32(o + 0) + (i * 4) + g.m, i, x[0].section_00);
    }

}
function im_world_20_12t2_72_00(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    x[i].section_00 = in_ml(u32(o + 0), g.world_20_12t5_array, im_world_20_12t5, g.unordered_ref.world_20_12t5);

    // im_world_20_12t5(u32(o + 0) + (ii * 112) + g.m, ii, x[i].section_00);

}
function im_world_20_12t3(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        unordered_sound_controls_48: 0,
    });

    x[i].unordered_sound_controls_48 = in_ml(u32(o + 48), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

    g.world_20_12t3_array.push(o - g.m)
    g.unordered_ref.world_20_12t3.push(x[i])
    return x[i].id
}
function im_world_20_12t4(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        u32_32: u32(o + 32),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        unordered_unknown_00_96: 0,
        unordered_interface_104: 0,
        f32_116: f32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        section_128: [],
    });

    g.world_20_12t4_array.push(o - g.m)
    g.unordered_ref.world_20_12t4.push(x[i])

    x[i].unordered_unknown_00_96 = in_ml(u32(o + 96), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_interface_104 = in_ml(u32(o + 104), g.interface_array, im_interface, g.unordered_ref.interface);
    switch (u32(o + 120)) {
    case 0:
        x[i].section_128 = in_ml(u32(o + 128), g.world_20_12t4_array, im_world_20_12t4, g.unordered_ref.world_20_12t4);
        // u32(o + 128) ? im_world_20_12t4(u32(o + 128) + g.m, x[i].section_128) : 0;
        break;
    case 1:
        u32(o + 128) ? im_world_20_12t4_128t1(u32(o + 128) + g.m, x[i].section_128) : 0;
        break;
    }

    return x[i].id
}
function im_world_20_12t4_128t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

}
function im_world_20_12t5(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_52: f32(o + 52),
        f32_72: f32(o + 72),
        f32_92: f32(o + 92),
        u8_96: u8(o + 96),
        ordered_models_100: 0,
    });

    x[i].ordered_models_100 = in_ml(u32(o + 100), g.models_array, im_models, g.ordered_ref.models);

    g.world_20_12t5_array.push(o - g.m)
    g.unordered_ref.world_20_12t5.push(x[i])

    return x[i].id
}
function im_world_20_12t8(o, i, x) {
    g.temp72end.push(o + 80)

    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        section_72: [],
        section_76: [],
    });

    // console.log(u32(o + 36))

    switch (u32(o + 36)) {
    case 1:
        u32(o + 76) ? im_world_20_12t8_76t1(u32(o + 76) + g.m, x[i].section_76) : 0;
        break;
    case 7:
        u32(o + 76) ? im_world_20_12t8_76t7(u32(o + 76) + g.m, x[i].section_76) : 0;
        break;
    case 8:
        u32(o + 76) ? im_world_20_12t8_76t8(u32(o + 76) + g.m, x[i].section_76) : 0;
        break;
    }

    switch (u32(o + 32)) {
    case 0:
        if (u32(o + 72)) {
            g.temp72arry.push([u32(o + 72) + g.m, x[i]])
            g.temp72end.push(u32(o + 72) + g.m)
        }

        break;
    }
    g.world_20_12t8_array.push(o - g.m)
    g.unordered_ref.world_20_12t8.push(x[i])

    return x[i].id
}
function im_world_20_12t8_72(o, x) {
    let temparray = g.temp72end.sort()
    while (o > temparray[0] - 1) {
        temparray.splice(0, 1)
    }

    // for (let i = 0; i < temparray.length; i++) {
    //     if (o > temparray[i] - 1) {
    //         temparray.splice(i, 1)
    //     }
    // }
    // let endoffset = Math.min.apply(0, temparray)
    let endoffset = temparray[0]
    // console.log(o - endoffset)

    // find closest above
    // g.
    // console.log(o - g., o)
    x.push({
        buffer: buffer.slice(o, endoffset)
    });

}
function im_world_20_12t8_76t1(o, x) {
    x.push({
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        //check this
    });
    g.temp72end.push(o)

}
function im_world_20_12t8_76t7(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    g.temp72end.push(o)

}
function im_world_20_12t8_76t8(o, x) {
    x.push({
        u32_00: u32(o + 0),
        unordered_world_20_12t8_76t8_04_04: 0,
        unordered_world_20_12t8_76t8_08_08: 0,
    });

    x[0].unordered_world_20_12t8_76t8_04_04 = in_ml(u32(o + 4), g.world_20_12t8_76t8_04_array, im_world_20_12t8_76t8_04, g.unordered_ref.world_20_12t8_76t8_04);
    x[0].unordered_world_20_12t8_76t8_08_08 = in_ml(u32(o + 8), g.world_20_12t8_76t8_08_array, im_world_20_12t8_76t8_08, g.unordered_ref.world_20_12t8_76t8_08);

    // u32(o + 4) ? im_world_20_12t8_76t8_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // u32(o + 8) ? im_world_20_12t8_76t8_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    g.temp72end.push(o)
}
function im_world_20_12t8_76t8_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    return x[i].id
    // 48 bytes;

}

function im_world_20_12t8_76t8_08(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u16_04: u16(o + 4),
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        unordered_unknown_00_16: 0,
        unordered_unknown_00_20: 0,
    });

    x[i].unordered_unknown_00_16 = in_ml(u32(o + 16), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_unknown_00_20 = in_ml(u32(o + 20), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    // offset? 
    return x[i].id
    // 32 bytes;

}

function im_world_20_12t10(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        unordered_activator_64: 0,
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        u8_76: u8(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
    });

    x[i].unordered_activator_64 = in_ml(u32(o + 64), g.activator_array, im_activator, g.unordered_ref.activator);

    g.world_20_12t10_array.push(o - g.m)
    g.unordered_ref.world_20_12t10.push(x[i])
    return x[i].id
}
function im_world_20_12t11(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        u32_64: u32(o + 64),
        section_68: [],
    });

    x[i].section_68 = in_ml(u32(o + 68), g.world_20_12t0_array, im_world_20_12t0, g.unordered_ref.world_20_12t0);

    // u32(o + 68) ? im_world_20_12t0(u32(o + 68) + g.m, x[i].section_68) : 0;
    // offset? 

    g.world_20_12t11_array.push(o - g.m)
    g.unordered_ref.world_20_12t11.push(x[i])
    return x[i].id
}
function im_world_20_12t13(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        unordered_idk_64: 0,
        f32_68: f32(o + 68),
        u8_73: u8(o + 73),
        u8_77: u8(o + 77),
    });

    x[i].unordered_idk_64 = in_ml(u32(o + 64), g.idk_array, im_idk, g.unordered_ref.idk);

    g.world_20_12t13_array.push(o - g.m)
    g.unordered_ref.world_20_12t13.push(x[i])
    return x[i].id
}
function im_world_20_12t14(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        unordered_strange_64: 0,
        f32_72: f32(o + 72),
        u8_76: u8(o + 76),
    });

    x[i].unordered_strange_64 = in_ml(u32(o + 64), g.strange_array, im_strange, g.unordered_ref.strange);

    g.world_20_12t14_array.push(o - g.m)
    g.unordered_ref.world_20_12t14.push(x[i])

    return x[i].id
}
function im_world_20_12t15(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        unordered_object_56: 0,
        f32_60: f32(o + 60),
        //check this
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_72: u8(o + 72),
        u8_73: u8(o + 73),
        u8_74: u8(o + 74),
        u8_75: u8(o + 75),
    });

    x[i].unordered_object_56 = in_ml(u32(o + 56), g.object_array, im_object, g.unordered_ref.object);

    g.world_20_12t15_array.push(o - g.m)
    g.unordered_ref.world_20_12t15.push(x[i])

    return x[i].id
}
function im_world_08(o, x) {
    g.temp72end.push(o)

    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        section_16: [],
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        u32_28: u32(o + 28),
        //amount?
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
    });

    for (let i = 0; i < u32(o + 28); i++) {
        im_world_08_16(u32(o + 16) + (i * 80) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_world_08_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

}
function im_world_08_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

}
function im_world_08_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_world_08_16_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

    for (let ii = 0; ii < u32(o + 56); ii++) {
        im_world_08_16_12(u32(o + 60) + (ii * 4) + g.m, ii, x[i].section_60);
    }

    for (let ii = 0; ii < u32(o + 64); ii++) {
        im_world_08_16_12(u32(o + 68) + (ii * 4) + g.m, ii, x[i].section_68);
    }

}

function im_world_08_16_12(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    x[i].section_00 = in_ml(u32(o + 0), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

    // for (let ii = 0; ii < 1; ii++) {
    //     // im_world_20_12t8(u32(o + 0) + (ii * 80) + g.m, ii, x[i].section_00);
    // }

}
function im_world_12(o, x) {
    g.temp72end.push(o)

    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        u32_08: u32(o + 8),
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_world_12_00(u32(o + 0) + (i * 128) + g.m, i, x[0].section_00);
    }

}
function im_world_12_00(o, i, x) {
    x.push({
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        f32_68: f32(o + 68),
        //check this
        u16_72: u16(o + 72),
        //check this
        u16_74: u16(o + 74),
        u8_76: u8(o + 76),
        f32_80: f32(o + 80),
        u32_116: u32(o + 116),
    });

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_world_12_00_52(u32(o + 52) + (ii * 4) + g.m, ii, x[i].section_52);
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_world_12_00_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
    }

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_world_12_00_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
}
function im_world_12_00_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
    });

}
function im_world_12_00_52(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        //check this
    });

}
function im_world_12_00_56(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
    });

}
function im_world_32(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_gate_00: 0,
    });

    x[i].unordered_gate_00 = in_ml(u32(o + 0), g.gate_array, im_gate, g.unordered_ref.gate);

}
function im_world_24(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_world_24_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_world_24_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

}
function im_world_24_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_flag_00: 0,
    });

    x[i].unordered_flag_00 = in_ml(u32(o + 0), g.flag_array, im_flag, g.unordered_ref.flag);

}
function im_world_24_12(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_var_00: 0,
    });

    x[i].unordered_var_00 = in_ml(u32(o + 0), g.var_array, im_var, g.unordered_ref.var);

}

function im_texture(o, x) {
    let e = o + (u32(g.datapack_offset + 20) * 64)

    if (u32(g.datapack_offset + 20)) {
        g.ordered_ref.texturepadding = (u32(o + 8) + g.m) - e
    }
    for (let ti = 0; ti < u32(g.datapack_offset + 20); ti++) {

        let texture_settings_offset = o + (ti * 64)
        // for (let ti = 0; ti < u32(g.datapack_offset + 20); ti++) {
        //     end_block = get_texture(g.m + u32(offset + 24) + (ti * 64), x[x_index].textures, i)
        // }

        let texture_name = get_string(texture_settings_offset + 12, 0, false)
        texture_name = texture_name.substr(0, 51)
        x.push({
            id: gen_id(),
            type: u8(texture_settings_offset),
            mipmaps: u8(texture_settings_offset + 1),
            x: u8(texture_settings_offset + 2),
            y: u8(texture_settings_offset + 3),
            alpha: [],
            texture: [],
            name: [texture_name],
            start: u32(texture_settings_offset + 8) + g.m,
            padding: e
        })

        let texture_x = Math.pow(2, u8(texture_settings_offset + 2))
        let texture_y = Math.pow(2, u8(texture_settings_offset + 3))

        let temp_value
        let temp_alpha = 0;
        let type = u8(texture_settings_offset)
        if (type === 65) {
            // dxt1
            type = 'dxt1'
            temp_value = texture_x * texture_y / 2

        } else if (type === 160) {
            //rgba888
            temp_value = texture_x * texture_y * 4
            type = 'rgba8888'
        } else if (type === 24) {
            //rgba888
            temp_value = texture_x * texture_y * 3
            type = 'rgb888'
        } else if (type === 68) {
            //dxt5
            type = '???'
            temp_value = 1024 + texture_x * texture_y

        } else if (type === 72) {
            //dxt5
            type = '???'
            temp_value = 1024 + texture_x * texture_y

        } else if (type === 193) {
            type = 'dxt1'
            temp_value = texture_x * texture_y / 2
            temp_alpha = temp_value

        } else if (type === 194) {
            type = 'dxt1'
            temp_value = texture_x * texture_y / 2
            temp_alpha = temp_value
        } else if (type === 196) {
            //dxt5
            type = '???'
            temp_value = 1024 + texture_x * texture_y
        } else if (type === 197) {
            //dxt5
            type = 'dxt5'
            temp_value = texture_x * texture_y
        } else if (type === 200) {
            //dxt5
            type = '???'
            temp_value = 1024 + texture_x * texture_y
        }
        let texture_offset;
        let temp_texture_array;
        let temp_2 = temp_value

        // console.log(u32(texture_settings_offset + 8) + g.m +temp_value,'t')
        // console.log(u32(texture_settings_offset + 4) + g.m +temp_alpha,'a')

        if (temp_alpha) {
            texture_offset = u32(texture_settings_offset + 4) + g.m
            temp_texture_array = buffer.slice(texture_offset, texture_offset + temp_alpha)
            x[ti].alpha.push(temp_texture_array)
        }
        if (u8(texture_settings_offset + 1) === 0) {

            texture_offset = u32(texture_settings_offset + 8) + g.m
            temp_texture_array = buffer.slice(texture_offset, texture_offset + temp_value)

            x[ti].texture.push(temp_texture_array)
            e = texture_offset + temp_value
        } else {

            let mip_map_idk = 1

            if (type === "rgb888") {
                mip_map_idk = 0
            }

            let mipmap_start = u32(texture_settings_offset + 8) + g.m
            let mipmap_end = mipmap_start + temp_value

            let temp_mipmap_offset = 0

            let texture_offset = u32(texture_settings_offset + 8) + g.m
            for (let i = 0; i < u8(texture_settings_offset + 1) + 1; i++) {

                let temp_texture_array = buffer.slice(mipmap_start, mipmap_end)

                // let temp_texture_array = new ArrayBuffer(temp_2)

                // let ii = 0;
                // for (; ii < temp_texture_array.byteLength; ii++) {
                //     new DataView(temp_texture_array).setUint8(ii, u8(ii + texture_offset))
                // }

                x[ti].texture.push(temp_texture_array)
                mipmap_start += temp_2
                temp_mipmap_offset += temp_2
                temp_2 = Math.round(temp_2 / 4)
                if (u8(texture_settings_offset + 1) !== i) {
                    mipmap_end += temp_2
                }

            }
            e = mipmap_end

        }
        if (g.file_dir_type === 'share' && g.texture_patch_ref.length === 69) {
            e += divisible(e - o, 16) - (e - o)
        }
        x[ti].padding = e
    }

    //padding

    if (x.length) {

        let i = 0
        for (; i < x.length - 1; i++) {
            if (x[i].alpha.length === 0) {
                x[i].padding = ((x[i + 1].start) - x[i].padding)
            } else {
                x[i].padding = 0
            }

        }
        x[i].padding = 0
    }

    return e
}

function im_texture_animation_section(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    u32(o + 0) && im_texture_anim_1(u32(o + 0) + g.m, x[i].section_00);

}

function im_texture_anim_1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 4) && im_texture_anim_1_1(u32(o + 4) + g.m, x[0].section_04);

    for (let i = 0; i < u32(o + 8); i++) {
        im_texture_anim_1_2(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_texture_anim_1_3(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 48 bytes;

}
function im_texture_anim_1_1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_11: u8(o + 11),
        u32_20: u32(o + 20),
        //amount?
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_texture_anim_1_1_1(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    // 32 bytes;

}
function im_texture_anim_1_1_1(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_texture_anim_1_2(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        f32_08: f32(o + 8),
        //amount?
    });

}
function im_texture_anim_1_3(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
        //amount?
    });

}

function im_audio(o, x, a) {

    const after_offset_list = o + divisible(a * 4, 32)
    let padding_test = after_offset_list + (a * 32)

    x.push({
        sound: []
    })

    for (let i = 0; i < a; i++) {
        padding_test = im_audio_00(after_offset_list + u32(o + (i * 4)), x[0].sound, i)
    }

    return padding_test

    function im_audio_00(o, x, i) {
        x.push({
            id: gen_id(),
            unknown1: u32(o + 8),
            soundsamplerate: u32(o + 12),
            unknown2: u32(o + 16),
            unknown3: u32(o + 20),
            sound_data: [],
            padding: (u32(o + 0) + after_offset_list) - padding_test
        })
        const start_offset = u32(o + 0) + after_offset_list
        const sound_buffer = buffer.slice(start_offset, start_offset + u32(o + 4))

        x[i].sound_data.push(sound_buffer)

        return start_offset + u32(o + 4)

    }

}

function get_share(o, x, gshareoffset) {
    //
    for (let i = 0, ii = 0; i < u32(o) && u32(o + i) !== 0; i += 4,
    ii++) {
        im_models(u32(o + i) + o, ii)
        // get_model_share(u32(g.m + i) + g.m, x.models, ii)

    }

    // if (g.file_dir_type === 'share' && g.texture_patch_ref.length === 69) {
    //     //

    //     // if (u32(offset + 0,  ) != 0) {
    //     //     x[0].name = get_string(u32(offset + 0,  ) + g.m, 0, false)
    //     // }
    //     x.push({
    //         id: gen_id(),
    //         name: [im_string(u32(gshareoffset + 0), 0, false)],
    //         texture_array: [],
    //         sound_array: [],
    //         model_array: []
    //     })

    //     // texture_56: im_patch(g.texture_patch_ref, o + 56),

    //     let texture_offset = u32(gshareoffset + 8) + g.m
    //     let sound_offset = u32(gshareoffset + 16) + g.m
    //     let model_offset = u32(gshareoffset + 24) + g.m

    //     for (let i = 0; i < u32(gshareoffset + 4); i++) {
    //         gettextureshrae(texture_offset + (i * 4), x[0].texture_array)
    //     }
    //     for (let i = 0; i < u32(gshareoffset + 12); i++) {
    //         gettsoundshare(sound_offset + (i * 4), x[0].sound_array)
    //     }
    //     for (let i = 0; i < u32(gshareoffset + 20); i++) {
    //         getmodelshare(model_offset + (i * 4), x[0].model_array)
    //     }

    //     //     let patch_array = get_patch_offset_index(texture_patch, texture_offset - g.m + (i * 4))
    //     //     if (patch_array != -1) {
    //     //         x[0].texture_array.push(patch_array)
    //     //     }
    //     // }
    //     // let sound_offset = u32(gshareoffset + 16) + g.m
    //     // for (let i = 0; i < u32(gshareoffset + 12); i++) {
    //     //     let patch_array = get_patch_offset_index(sound_patch, sound_offset - g.m + (i * 4))
    //     //     if (patch_array != -1) {
    //     //         x[0].sound_array.push(patch_array)
    //     //     }
    //     // }

    //     // let model_offset = u32(gshareoffset + 24) + g.m
    //     // for (let i = 0; i < u32(gshareoffset + 20); i++) {
    //     //     let patch_array = get_patch_offset_index(model_patch, model_offset - g.m + (i * 4))
    //     //     if (patch_array != -1) {
    //     //         x[0].model_array.push(patch_array)
    //     //     }
    //     // }

    // }

    function gettextureshrae(o, x) {
        x.push({
            texture: im_patch(g.texture_patch_ref, o),
        })
    }
    function gettsoundshare(o, x) {
        x.push({
            texture: im_patch(g.sound_patch_ref, o),
        })
    }
    function getmodelshare(o, x) {
        x.push({
            texture: im_patch(g.model_patch_ref, o),
        })
    }

}

// function get_model_share(offset, x, model_index) {
//     x.push({
//         id: gen_id(),
//         magic: u16(offset),
//         name: get_string(u32(offset + 8) + g.m, 0, false),
//         sections: [],
//         second_names: [],
//         visibility: {
//             x1: f32(offset + 16),
//             y1: f32(offset + 20),
//             z1: f32(offset + 24),
//             w1: f32(offset + 28),
//             x2: f32(offset + 32),
//             y2: f32(offset + 36),
//             z2: f32(offset + 40),
//             w2: f32(offset + 44),
//             x3: f32(offset + 48),
//             y3: f32(offset + 52),
//             z3: f32(offset + 56),
//             w3: f32(offset + 60),
//         }
//     })

//     let render_array = []
//     let end_offset = 0

//     for (let i = 0; i < u16(offset + 2); i++) {
//         //get render first
//         let render_offset = u32(offset + 12) + g.m + (i * 4)
//         render_array.push(f32(render_offset))
//     }

//     for (let i = 0; i < u16(offset + 2); i++) {
//         let section_offset = u32(offset + 4) + g.m
//         x[model_index].sections.push({
//             id: gen_id(),
//             render: render_array[i],
//             sub_section: []
//         })
//         for (let ii = 0; ii < u32(section_offset); ii++) {
//             let sub_section_offset_offset = u32(section_offset + 4) + g.m
//             let sub_section_offset = u32(sub_section_offset_offset) + g.m
//             let model_data_sub_header = u32(sub_section_offset + 92) + g.m
//             let vertex_array = []
//             let vertex_offset
//             if (u32(sub_section_offset + 68) !== 0) {
//                 vertex_offset = u32(sub_section_offset + 68) + g.m
//             } else {
//                 vertex_offset = false
//             }
//             let color_array = []
//             let color_offset
//             if (u32(sub_section_offset + 72) !== 0) {
//                 color_offset = u32(sub_section_offset + 72) + g.m
//             } else {
//                 color_offset = false
//             }
//             let normal_array = []
//             let uv_array = []
//             let uv_offset
//             if (u32(sub_section_offset + 80) !== 0) {
//                 uv_offset = u32(sub_section_offset + 80) + g.m
//             } else {
//                 uv_offset = false
//             }

//             let soft_array = []
//             let amount_entries = u32(model_data_sub_header)

//             if (vertex_offset !== false) {

//                 for (let vertex_i = 0; vertex_i < amount_entries; vertex_i++) {

//                     vertex_array.push(f32(vertex_offset + (vertex_i * 36)), f32(vertex_offset + 4 + (vertex_i * 36)), f32(vertex_offset + 8 + (vertex_i * 36)), f32(vertex_offset + 12 + (vertex_i * 36)), f32(vertex_offset + 16 + (vertex_i * 36)), f32(vertex_offset + 20 + (vertex_i * 36)), f32(vertex_offset + 24 + (vertex_i * 36)), f32(vertex_offset + 28 + (vertex_i * 36)), f32(vertex_offset + 32 + (vertex_i * 36)))
//                 }
//             }
//             if (color_offset !== false) {

//                 for (let c_i = 0; c_i < amount_entries; c_i++) {

//                     color_array.push(u8(color_offset + (c_i * 12)), u8(color_offset + 1 + (c_i * 12)), u8(color_offset + 2 + (c_i * 12)), u8(color_offset + 3 + (c_i * 12)), u8(color_offset + 4 + (c_i * 12)), u8(color_offset + 5 + (c_i * 12)), u8(color_offset + 6 + (c_i * 12)), u8(color_offset + 7 + (c_i * 12)), u8(color_offset + 8 + (c_i * 12)), u8(color_offset + 9 + (c_i * 12)), u8(color_offset + 10 + (c_i * 12)), u8(color_offset + 11 + (c_i * 12)))
//                 }
//             }
//             if (uv_offset !== false) {

//                 for (let u_i = 0; u_i < amount_entries; u_i++) {

//                     uv_array.push(f32(uv_offset + (u_i * 24)), f32(uv_offset + 4 + (u_i * 24)), f32(uv_offset + 8 + (u_i * 24)), f32(uv_offset + 12 + (u_i * 24)), f32(uv_offset + 16 + (u_i * 24)), f32(uv_offset + 20 + (u_i * 24)))
//                 }
//             }
//             // console.log(amount_entries, vertex_offset)

//             // console.log(offset + 40 - g.m, 'patch_array', offset, g.m)
//             let patch_array = get_patch_offset_index(texture_patch, sub_section_offset + 40 - g.m)
//             if (patch_array === -1) {// patch_array = -1
//             }

//             let patch_array_animation = get_patch_offset_index(texture_animation_patch, sub_section_offset + 36 - g.m)
//             if (patch_array_animation === -1) {// patch_array = -1
//             }
//             end_offset = u32(sub_section_offset + 92) + g.m + 16

//             x[model_index].sections[i].sub_section.push({
//                 id: gen_id(),
//                 v_array: vertex_array,
//                 c_array: color_array,
//                 u_array: uv_array,
//                 unknown_1: u32(sub_section_offset + 8),
//                 unknown_2: u32(sub_section_offset + 16),
//                 unknown_3: u32(sub_section_offset + 24),
//                 unknown_4: u32(sub_section_offset + 28),
//                 texture: patch_array,
//                 animation: patch_array_animation,
//                 unknown_5: u32(sub_section_offset + 44),
//                 unknown_6: u32(sub_section_offset + 48),
//                 unknown_7: u32(sub_section_offset + 56),
//                 unknown_8: u32(sub_section_offset + 60),
//                 unknown_9: u32(sub_section_offset + 68),
//                 unknown_10: u32(sub_section_offset + 88),
//             })
//         }

//     }

//     let i_name = 0
//     let temp_offset = u32(offset + 8) + g.m
//     // console.log(end_offset, 'end', temp_offset, 'temp')
//     while (temp_offset > end_offset) {

//         let temp_string = ''

//         temp_string = get_string(end_offset, 0, false)

//         // console.log(temp_string, x)
//         x[model_index].second_names.push(temp_string)
//         end_offset += temp_string.length
//         while (u8(end_offset) === 0) {
//             end_offset++
//         }
//         end_offset++
//         i_name++
//     }

// }
function im_models(offset, index) {
    g.ordered_ref.models.push({
        id: gen_id(),
        magic: u16(offset),
        name: get_string(u32(offset + 8) + g.m, 0, false),
        sections: [],
        second_names: [],
        name_padding: 0,
        visibility: {
            x1: f32(offset + 16),
            y1: f32(offset + 20),
            z1: f32(offset + 24),
            w1: f32(offset + 28),
            x2: f32(offset + 32),
            y2: f32(offset + 36),
            z2: f32(offset + 40),
            w2: f32(offset + 44),
            x3: f32(offset + 48),
            y3: f32(offset + 52),
            z3: f32(offset + 56),
            w3: f32(offset + 60),
        }
    })

    let render_array = []
    let end_offset = 0

    for (let i = 0; i < u16(offset + 2); i++) {
        //get render first
        let render_offset = u32(offset + 12) + g.m + (i * 4)
        render_array.push(f32(render_offset))
    }

    for (let i = 0; i < u16(offset + 2); i++) {
        let section_offset = u32(offset + 4) + g.m + (i * 8)
        g.ordered_ref.models[index].sections.push({
            id: gen_id(),
            render: render_array[i],
            sub_section: [],
        })

        for (let ii = 0; ii < u32(section_offset); ii++) {
            let sub_section_offset_offset = u32(section_offset + 4) + g.m + (ii * 4)
            let sub_section_offset = u32(sub_section_offset_offset) + g.m
            if (g.console === 'gamecube') {
                let o = sub_section_offset
                let x = g.ordered_ref.models[index].sections[i].sub_section
                g.ordered_ref.models[index].sections[i].sub_section.push({
                    id: gen_id(),
                    u32_00: u32(o + 0),
                    u32_08: u32(o + 8),
                    u8_12: u8(o + 12),
                    u8_13: u8(o + 13),
                    u8_15: u8(o + 15),
                    u32_16: u32(o + 16),
                    u32_24: u32(o + 24),
                    u32_28: u32(o + 28),
                    texture_40: im_patch(g.texture_patch_ref, o + 40),
                    u8_44: u8(o + 44),
                    u8_45: u8(o + 45),
                    u8_46: u8(o + 46),
                    u8_47: u8(o + 47),
                    u8_48: u8(o + 48),
                    u8_49: u8(o + 49),
                    u8_52: u8(o + 52),
                    u8_53: u8(o + 53),
                    u8_54: u8(o + 54),
                    u8_55: u8(o + 55),
                    u32_56: u32(o + 56),
                    section_60: [],
                    section_64: [],
                    section_68: [],
                    section_72: [],
                    section_76: [],
                    section_80: [],
                    u16_84: u16(o + 84),
                    //amount?
                    u16_86: u16(o + 86),
                })

                let end_vertex = 0
                if (u32(o + 64)) {
                    end_vertex = u32(o + 64)
                } else if (u32(o + 68)) {
                    end_vertex = u32(o + 68)
                } else if (u32(o + 72)) {
                    end_vertex = u32(o + 72)
                } else if (u32(o + 76)) {
                    end_vertex = u32(o + 76)
                }
                end_offset = o + 96

                u32(o + 80) ? end_offset = im_GC_models_04_04_00_80(u32(o + 80) + g.m, x[0].section_80) : 0;

                u32(o + 60) ? end_offset = im_GC_models_04_04_00_60(u32(o + 60) + g.m, x[0].section_60, end_vertex) : 0;

                let end_color = 0
                if (u32(o + 68)) {
                    end_color = u32(o + 68)
                } else if (u32(o + 72)) {
                    end_color = u32(o + 72)
                } else if (u32(o + 76)) {
                    end_color = u32(o + 76)
                }

                u32(o + 64) ? end_offset = im_GC_models_04_04_00_64(u32(o + 64) + g.m, x[0].section_64, end_color) : 0;

                let end_idk = 0
                if (u32(o + 72)) {
                    end_idk = u32(o + 72)
                } else if (u32(o + 76)) {
                    end_idk = u32(o + 76)
                }

                u32(o + 68) ? end_offset = im_GC_models_04_04_00_68(u32(o + 68) + g.m, x[0].section_68, end_idk) : 0;
                u32(o + 72) ? end_offset = im_GC_models_04_04_00_72(u32(o + 72) + g.m, x[0].section_72, u32(o + 76)) : 0;

                for (let i = 0; i < u16(o + 84); i++) {
                    end_offset = im_GC_models_04_04_00_76(u32(o + 76) + (i * 24) + g.m, i, x[0].section_76);
                }

                // 96 bytes;

            } else {

                let model_data_sub_header = u32(sub_section_offset + 92) + g.m
                let amount_entries = u32(model_data_sub_header)

                let vertex_array = []
                if (u32(sub_section_offset + 68)) {
                    vertex_array = buffer.slice(u32(sub_section_offset + 68) + g.m, u32(sub_section_offset + 68) + g.m + amount_entries * 36)
                }

                let color_array = []
                if (u32(sub_section_offset + 72)) {
                    color_array = buffer.slice(u32(sub_section_offset + 72) + g.m, u32(sub_section_offset + 72) + g.m + (u32(sub_section_offset + 56) * 4))
                }

                let normal_array = []
                if (u32(sub_section_offset + 76)) {
                    normal_array = buffer.slice(u32(sub_section_offset + 76) + g.m, u32(sub_section_offset + 76) + g.m + amount_entries * 36)
                }

                let uv_array = []
                if (u32(sub_section_offset + 80)) {
                    uv_array = buffer.slice(u32(sub_section_offset + 80) + g.m, u32(sub_section_offset + 80) + g.m + amount_entries * 24)
                }

                let soft_array = []
                if (u32(sub_section_offset + 84)) {
                    soft_array = buffer.slice(u32(sub_section_offset + 84) + g.m, u32(sub_section_offset + 84) + g.m + amount_entries * 3)
                }

                // console.log(offset + 40 - g.m, 'patch_array', offset, g.m)
                // let patch_array = get_patch_offset_index(texture_patch, sub_section_offset + 40 - g.m)
                // if (patch_array === -1) {// patch_array = -1
                // }

                // let patch_array_animation = get_patch_offset_index(texture_animation_patch, sub_section_offset + 36 - g.m)
                // if (patch_array_animation !== -1) {
                //     console.log('?')
                // }

                // let patch_array_animation_24 = get_patch_offset_index(texture_animation_patch, sub_section_offset + 24 - g.m)
                // if (patch_array_animation_24 !== -1) {
                //     console.log('?')
                // }

                end_offset = u32(sub_section_offset + 92)

                g.ordered_ref.models[index].sections[i].sub_section.push({
                    id: gen_id(),
                    v_array: vertex_array,
                    c_array: color_array,
                    n_array: normal_array,
                    u_array: uv_array,
                    s_array: soft_array,
                    unknown_00: u32(sub_section_offset + 0),
                    unknown_08: u32(sub_section_offset + 8),
                    unknown_12: u8(sub_section_offset + 12),
                    unknown_13: u8(sub_section_offset + 13),
                    unknown_15: u8(sub_section_offset + 15),
                    unknown_16: u32(sub_section_offset + 16),
                    unknown_24: u32(sub_section_offset + 24),
                    unknown_24_animation: im_patch(g.animation_patch_ref, sub_section_offset + 24),
                    unknown_28: u32(sub_section_offset + 28),
                    texture: im_patch(g.texture_patch_ref, sub_section_offset + 40),
                    animation: im_patch(g.animation_patch_ref, sub_section_offset + 36),
                    unknown_44: u8(sub_section_offset + 44),
                    unknown_45: u8(sub_section_offset + 45),
                    unknown_46: u8(sub_section_offset + 46),
                    unknown_47: u8(sub_section_offset + 47),
                    unknown_48: u8(sub_section_offset + 48),
                    unknown_49: u8(sub_section_offset + 49),
                    unknown_52: u8(sub_section_offset + 52),
                    unknown_53: u8(sub_section_offset + 53),
                    unknown_54: u8(sub_section_offset + 54),
                    unknown_55: u8(sub_section_offset + 55),
                    unknown_56: u32(sub_section_offset + 56),
                    unknown_60: u32(sub_section_offset + 60),
                    unknown_64: u32(sub_section_offset + 64),
                    unknown_88: u32(sub_section_offset + 88),
                    section_92: [],
                })
                if (u32(sub_section_offset + 92)) {
                    end_offset = get_sub_section(u32(sub_section_offset + 92) + g.m, g.ordered_ref.models[index].sections[i].sub_section[ii].section_92)
                }

            }
        }

    }

    let temp_offset = u32(offset + 8) + g.m
    // console.log(end_offset, 'end', temp_offset, 'temp')
    g.ordered_ref.models[index].name_padding = temp_offset - end_offset

    while (temp_offset > end_offset) {
        let temp_string = ''

        temp_string = get_string(end_offset, 0, false)

        if (temp_string !== "") {

            g.ordered_ref.models[index].second_names.push(temp_string)
            if (temp_string.toLowerCase().includes('.tga')) {} else {
                console.log(temp_string)
            }

            end_offset += temp_string.length
        }
        while (u8(end_offset) === 0) {
            end_offset++
        }
        // while (u8(end_offset) === 0) {
        // }
        // end_offset++

    }
    // while (temp_offset > end_offset) {

    // }

    return g.ordered_ref.models[index].id

    function get_sub_section(offset, x) {
        let end_offset = offset + 16 + divisible(u32(offset + 8), 16)

        x.push({
            amount_00: u32(offset + 0),
            section_12: [],
        })

        for (let i = 0; i < u32(offset + 8); i++) {
            get_sub_section_12(u32(offset + 12) + g.m + i, x[0].section_12)
        }

        u32(offset + 8)

        return end_offset

    }
    function get_sub_section_12(offset, x, i) {
        x.push({
            unknown_00: u8(offset + 0),
        })
    }
    function im_GC_models_04_04_00_80(o, x) {
        x.push({
            section_00: [],
            section_04: [],
            u32_08: u32(o + 8),
        });

        for (let i = 0; i < u32(o + 8); i++) {
            im_GC_models_04_04_00_80_00(u32(o + 0) + (i * 32) + g.m, i, x[0].section_00);
        }

        u32(o + 4) ? im_GC_models_04_04_00_80_04(u32(o + 4) + g.m, x[0].section_04, u32(o + 0) + g.m) : 0;

        return o + 16
        // 16 bytes;

    }
    function im_GC_models_04_04_00_80_04(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a),
        });

    }
    function im_GC_models_04_04_00_80_00(o, i, x) {
        x.push({
            id: gen_id(),
            f32_00: f32(o + 0),
            f32_04: f32(o + 4),
            f32_08: f32(o + 8),
            f32_12: f32(o + 12),
            f32_16: f32(o + 16),
            f32_20: f32(o + 20),
            u16_24: u16(o + 24),
            u16_26: u16(o + 26),
            u8_29: u8(o + 29),
            u8_30: u8(o + 30),
            u8_31: u8(o + 31),
        });

    }
    function im_GC_models_04_04_00_60(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m
    }
    function im_GC_models_04_04_00_64(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m

    }
    function im_GC_models_04_04_00_68(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m
    }
    function im_GC_models_04_04_00_72(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m
    }
    function im_GC_models_04_04_00_76(o, i, x) {
        let e = o + 24
        x.push({
            id: gen_id(),
            u32_04: u32(o + 4),
            section_08: [],
            section_12: [],
            section_16: [],
            u8_20: u8(o + 20),
        });

        for (let ii = 0; ii < u8(o + 20); ii++) {
            im_GC_models_04_04_00_76_08(u32(o + 8) + (ii * 1) + g.m, ii, x[i].section_08);
        }
        u32(o + 12) ? im_GC_models_04_04_00_76_12(u32(o + 12) + g.m, x[i].section_12, u32(o + 16)) : 0;
        u32(o + 16) ? e = im_GC_models_04_04_00_76_16(u32(o + 16) + g.m, x[i].section_16, u32(o + 4)) : 0;

        // for (let ii = 0; ii < u32(o + 4); ii++) {
        //     im_GC_models_04_04_00_76_16(u32(o + 16) + (ii * 1) + g.m, ii, x[i].section_16);
        // }
        return e

    }
    function im_GC_models_04_04_00_76_08(o, i, x) {
        x.push({
            u8_00: u8(o + 0),
        });

    }
    function im_GC_models_04_04_00_76_12(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });

        // ? bytes;

    }
    function im_GC_models_04_04_00_76_16(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + a),
        });
        return o + a

    }
}

function im_models_(o, i, x) {
    x.push({
        id: gen_id(),
        u16_00: u16(o + 0),
        u16_02: u16(o + 2),
        //amount?
        section_04: [],
        unordered_model_name_08: 0,
        section_12: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
    });

    //64 bytes

    // for (let ii = 0; ii < u32(o + 2); ii++) {
    //     im_models_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    // }
    // x[i].unordered_model_name_08 = in_ml(u32(o + 8), g.model_name_array, im_model_name, g.unordered_ref.model_name);

    // for (let ii = 0; ii < u32(o + 2); ii++) {
    //     im_models_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    // }
    return x[i].id
}
function im_models_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    u32(o + 4) ? im_models_04_04(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_models_12(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
    });

}
function im_models_04_04(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 0) ? im_models_04_04_00(u32(o + 0) + g.m, x[0].section_00) : 0;

}
function im_models_04_04_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_08: u32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        animation_36: im_patch(g.animation_patch_ref, o + 36),
        texture_40: im_patch(g.texture_patch_ref, o + 40),
        // unknown_44: // unknown(o + 44),
        u8_49: u8(o + 49),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        u32_56: u32(o + 56),
        //amount?
        u32_60: u32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        //check this
        u32_72: u32(o + 72),
        //check this
        u32_76: u32(o + 76),
        //check this
        u32_80: u32(o + 80),
        //check this
        u32_84: u32(o + 84),
        //check this
        u32_88: u32(o + 88),
        section_92: [],
    });

    u32(o + 92) ? im_models_04_04_00_92(u32(o + 92) + g.m, x[0].section_92) : 0;

}
function im_models_04_04_00_92(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    u32(o + 12) ? im_models_04_04_00_92_12(u32(o + 12) + g.m, x[0].section_12) : 0;

}
function im_models_04_04_00_92_12(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

}

// function im_models(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u16_00: u16(o + 0),
//         u16_02: u16(o + 2),
//         //amount?
//         section_04: [],
//         section_08: [im_string(u32(o + 8), 0, false)],
//         section_12: [],
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         f32_24: f32(o + 24),
//         f32_28: f32(o + 28),
//         f32_32: f32(o + 32),
//         f32_36: f32(o + 36),
//         f32_40: f32(o + 40),
//         f32_44: f32(o + 44),
//         f32_48: f32(o + 48),
//         f32_52: f32(o + 52),
//         f32_56: f32(o + 56),
//         f32_60: f32(o + 60),
//     });

//     for (let ii = 0; ii < u16(o + 2); ii++) {
//         im_models_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
//     }

//     for (let ii = 0; ii < u16(o + 2); ii++) {
//         im_models_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
//     }
//     return x[i].id
//     // 64 bytes;

// }
// function im_models_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 0),
//         //amount?
//         section_04: [],
//     });

//     for (let ii = 0; ii < u32(o + 0); ii++) {
//         im_models_04_04(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_04);
//     }

// }
// function im_models_12(o, i, x) {
//     x.push({
//         id: gen_id(),
//         f32_00: f32(o + 0),
//     });

// }
// function im_models_04_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         section_00: [],
//     });

//     u32(o + 0) ? im_models_04_04_00(u32(o + 0) + g.m, x[i].section_00) : 0;

// }
// function im_models_04_04_00(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         u32_08: u32(o + 8),
//         u8_12: u8(o + 12),
//         u8_13: u8(o + 13),
//         u8_15: u8(o + 15),
//         u32_16: u32(o + 16),
//         u32_24: u32(o + 24),
//         u32_28: u32(o + 28),
//         animation_36: im_patch(g.animation_patch_ref, o + 36),
//         texture_40: im_patch(g.texture_patch_ref, o + 40),
//         u8_44: u8(o + 44),
//         u8_45: u8(o + 45),
//         u8_46: u8(o + 46),
//         u8_47: u8(o + 47),
//         u8_49: u8(o + 49),
//         u8_52: u8(o + 52),
//         u8_53: u8(o + 53),
//         u8_54: u8(o + 54),
//         u8_55: u8(o + 55),
//         u32_56: u32(o + 56),
//         //amount?
//         u32_60: u32(o + 60),
//         u32_64: u32(o + 64),
//         section_68: [],
//         section_72: [],
//         section_76: [],
//         section_80: [],
//         section_84: [],
//         u32_88: u32(o + 88),
//         section_92: [],
//     });

//     let entries = 0
//     u32(o + 92) ? entries = im_models_04_04_00_92(u32(o + 92) + g.m, x[0].section_92) : 0;

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_68(u32(o + 68) + (i * 36) + g.m, i, x[0].section_68);
//     }

//     for (let i = 0; i < u32(o+56); i++) {
//         im_models_04_04_00_72(u32(o + 72) + (i * 4) + g.m, i, x[0].section_72);
//     }

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_76(u32(o + 76) + (i * 12) + g.m, i, x[0].section_76);
//     }

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_80(u32(o + 80) + (i * 8) + g.m, i, x[0].section_80);
//     }

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_84(u32(o + 84) + (i * 1) + g.m, i, x[0].section_84);
//     }

//     // 96 bytes;

// }
// function im_models_04_04_00_68(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//         f32_08: f32(o + 8),
//         f32_12: f32(o + 12),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         f32_24: f32(o + 24),
//         f32_28: f32(o + 28),
//         f32_32: f32(o + 32),
//     });

// }
// function im_models_04_04_00_72(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         u8_00: u8(o + 0),
//         u8_01: u8(o + 1),
//         u8_02: u8(o + 2),
//         u8_03: u8(o + 3),
//     });

// }
// function im_models_04_04_00_76(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//         f32_08: f32(o + 8),
//     });

// }
// function im_models_04_04_00_80(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//     });

// }
// function im_models_04_04_00_84(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         u8_00: u8(o + 0),
//     });

// }
// function im_models_04_04_00_92(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         //amount?
//         u32_08: u32(o + 8),
//         //amount?
//         section_12: [],
//     });

//     for (let i = 0; i < u32(o + 8); i++) {
//         im_models_04_04_00_92_12(u32(o + 12) + (i * 1) + g.m, i, x[0].section_12);
//     }

//     return u32(o + 0)

//     // 16 bytes;

// }
// function im_models_04_04_00_92_12(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 0),
//     });

// }

function im_model_animation_2(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_model_animation_2_1(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
}

function im_model_animation_2_1(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

}
//

function im_model_animation_1(o, i, x) {
    let temp_obj = {
        _40_amount: u32(o + 40),
        _48_amount: u32(o + 48),
        _sub_00_amount: 0,
        _sub_04_amount: 0,
        _sub_08_amount: 0,
        _52t35_padding: 0,
        main_padding_end: 0,
        _1_44_end: 0xffffffff,
        _1_44_end: 0xffffffff,
    }

    temp_obj.main_padding_end = o + 64

    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
        u32_04: u32(o + 4),
        //check this
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        section_28: [],
        section_32: [],
        section_32_padding: 0,
        section_36: [],
        u32_40: u32(o + 40),
        section_44: [],
        u32_48: u32(o + 48),
        section_52: [],
        u32_56: u32(o + 56),
        //check this
        u32_60: u32(o + 60),
        padding: 0,
        //check this
    });

    // switch (u32(o + 0)) {
    // case 1:
    // case 3:
    // case 4:
    //     if (u32(o + 16) === 1) {
    //         u32(o + 28) ? im_model_animation_1_28t1(u32(o + 28) + g.m, x[i].section_28) : 0;
    //     } else if (u32(o + 16) === 28) {
    //         u32(o + 28) ? im_model_animation_1_28t28(u32(o + 28) + g.m, x[i].section_28) : 0;
    //     }
    //     break;
    // case 5:
    //     x[i].section_28 = u32(o + 28)
    //     break;
    // }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        if (u32(o + 16) === 1) {
            u32(o + 28) ? im_model_animation_1_28t1(u32(o + 28) + g.m, x[i].section_28) : 0;
        } else if (u32(o + 16) === 28) {
            console.log(u32(o + 4))
            u32(o + 28) ? im_model_animation_1_28t28(u32(o + 28) + g.m, x[i].section_28) : 0;
        }
        break;
    case 3:
        if (u32(o + 16) === 1) {
            u32(o + 28) ? im_model_animation_1_28t3(u32(o + 28) + g.m, x[i].section_28) : 0;
        }
        break
    case 5:
        x[i].section_28 = u32(o + 28)
        break;
    }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        if (u32(o + 16) === 1) {
            u32(o + 24) ? im_model_animation_1_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        } else if (u32(o + 16) === 28) {
            u32(o + 24) ? im_model_animation_1_24t28(u32(o + 24) + g.m, x[i].section_24) : 0;
        }
        break;
    case 3:
        u32(o + 24) ? im_model_animation_1_24t3(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 5:
        x[i].section_24 = u32(o + 24)
        break;
    }

    // for (let ii = 0; ii < u32(o + 40); ii++) {
    //     im_model_animation_1_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    // }
    if (u32(o + 32) && u32(o + 40)) {
        im_model_animation_1_32(u32(o + 32) + g.m, x[i].section_32)
    }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        u32(o + 36) ? im_model_animation_1_36(u32(o + 36) + g.m, x[i].section_36, u32(o + 4)) : 0;
        break;
    case 3:
        if (u32(o + 32) && u32(o + 36)) {

            let end = u32(o + 32) + (temp_obj._40_amount * 4) + g.m
            let begin = u32(o + 36) + g.m
            x[i].section_32_padding = begin - end
        }
        u32(o + 36) ? im_model_animation_1_36t3(u32(o + 36) + g.m, x[i].section_36, u32(o + 48)) : 0;
        break
    case 5:
        x[i].section_36 = u32(o + 36)
        break
    }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        u32(o + 44) ? im_model_animation_1_44(u32(o + 44) + g.m, x[i].section_44) : 0;
        break;
    case 3:
    case 5:
        x[i].section_44 = u32(o + 44)
        break;
    }

    switch (u32(o + 4)) {
    case 291:
        if (u32(o + 32) && u32(o + 52)) {
            let end = u32(o + 40) * 4 + u32(o + 32) + g.m
            let begin = u32(o + 52) + g.m
            x[i].section_32_padding = begin - end
        }
    case 35:
        u32(o + 52) ? im_model_animation_1_52t35(u32(o + 52) + g.m, x[i].section_52) : 0;
        break;
    case 163:
    case 419:
        u32(o + 52) ? im_model_animation_1_52t163(u32(o + 52) + g.m, x[i].section_52) : 0;
        break;
    case 11:
    case 67:
        x[i].section_52 = u32(o + 52)
        break;
    }
    x[i].padding = temp_obj.main_padding_end
    return x[i].id

    function im_model_animation_1_24t1(o, x) {
        x.push({
            u32_00: u32(o + 0),
        });
        o > temp_obj.main_padding_end ? temp_obj.main_padding_end = o : 0;
    }
    function im_model_animation_1_24t28(o, x) {
        x.push({
            u32_00: u32(o + 0),
            u32_04: u32(o + 4),
            u32_08: u32(o + 8),
            u32_12: u32(o + 12),
            u32_16: u32(o + 16),
            u32_20: u32(o + 20),
            u32_24: u32(o + 24),
        });
        o + 28 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 28 : 0;
    }
    function im_model_animation_1_28t1(o, x) {
        x.push({
            u16_00: u16(o + 0),
            u8_02: u8(o + 2),
            u8_03: u8(o + 3),
            u8_04: u8(o + 4),
            u8_05: u8(o + 5),
            u8_06: u8(o + 6),
            u8_07: u8(o + 7),
            u8_08: u8(o + 8),
            u8_09: u8(o + 9),
            u8_10: u8(o + 10),
            u8_11: u8(o + 11),
        });
        o + 12 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 12 : 0;
    }

    function im_model_animation_1_28t3(o, x) {
        x.push({
            f32_00: f32(o + 0),
            f32_04: f32(o + 4),
            f32_08: f32(o + 8),
            f32_12: f32(o + 12),
        });
        o + 16 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 16 : 0;
    }

    function im_model_animation_1_28t28(o, x) {
        x.push({
            u16_00: u16(o + 0),
            u16_02: u16(o + 2),
            u16_04: u16(o + 4),
            u16_06: u16(o + 6),
            u16_08: u16(o + 8),
            u16_10: u16(o + 10),
            u16_12: u16(o + 12),
            u16_14: u16(o + 14),
            u16_16: u16(o + 16),
            u16_18: u16(o + 18),
            u16_20: u16(o + 20),
            u16_22: u16(o + 22),
            u16_24: u16(o + 24),
            u16_26: u16(o + 26),
            u16_28: u16(o + 28),
            u16_30: u16(o + 30),
            u16_32: u16(o + 32),
            u16_34: u16(o + 34),
            u16_36: u16(o + 36),
            u16_38: u16(o + 38),
            u16_40: u16(o + 40),
            u16_42: u16(o + 42),
            u16_44: u16(o + 44),
            u16_46: u16(o + 46),
            u16_48: u16(o + 48),
            u16_50: u16(o + 50),
            u16_52: u16(o + 52),
            u16_54: u16(o + 54),
            u32_56: u32(o + 56),
            u32_60: u32(o + 60),
            u32_64: u32(o + 64),
        });
        o + 68 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 68 : 0;
    }
    function im_model_animation_1_24t3(o, x) {
        x.push({
            u32_00: u32(o + 0),
        });
        o + 4 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 4 : 0;
    }
    function im_model_animation_1_32(o, x) {
        let bufferamt = (temp_obj._40_amount * 4)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     id: gen_id(),
        //     f32_00: f32(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;

    }
    function im_model_animation_1_44(o, x) {

        let tempidk = (temp_obj._1_44_end)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, tempidk),
        });

        tempidk > temp_obj.main_padding_end ? temp_obj.main_padding_end = tempidk : 0;
    }
    function im_model_animation_1_36(o, x, t) {
        let tempidk
        if (t !== 67) {
            tempidk = (temp_obj._40_amount * temp_obj._48_amount) * 4
        } else {
            tempidk = 1152
        }

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, tempidk + o),
        });

        o < temp_obj._1_44_end ? temp_obj._1_44_end = o : 0;
        tempidk + o > temp_obj.main_padding_end ? temp_obj.main_padding_end = tempidk + o : 0;
    }

    function im_model_animation_1_36t3(o, x, t) {
        let tempidk
        if (t === 1) {
            tempidk = ((temp_obj._40_amount - 1) * 96)
        } else {
            tempidk = ((temp_obj._40_amount - 1) * 128)
        }

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, tempidk + o),
        });

        // o < temp_obj._1_44_end ? temp_obj._1_44_end = o : 0;
        tempidk + o > temp_obj.main_padding_end ? temp_obj.main_padding_end = tempidk + o : 0;

    }
    function im_model_animation_1_52t35(o, x) {
        if (o === 12556940) {
            console.log('?')
        }
        temp_obj._sub_00_amount = u32(o + 0)
        temp_obj._sub_04_amount = u32(o + 4)
        temp_obj._sub_08_amount = u32(o + 8)

        x.push({
            u32_00: u32(o + 0),
            //amount?
            u32_04: u32(o + 4),
            //amount?
            u32_08: u32(o + 8),
            //amount?
            section_12: [],
            section_16: [],
            section_20: [],
            section_24: [],
            section_28: [],
            section_32: [],
            padding: 0,
            padding_12: 0,
            padding_20: 0,
            padding_24: 0,
            padding_28: 0,
            padding_16: 0,
        });

        if (u32(o + 12) && u32(o + 0)) {
            x[0].padding = u32(o + 12) + g.m - (o + 36)
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 12) + g.m : 0;
            im_model_animation_1_52t35_12(u32(o + 12) + g.m, x[0].section_12)
        } else {
            x[0].section_12 = u32(o + 12)
        }

        if (u32(o + 24) && u32(o + 0)) {
            x[0].padding_12 = u32(o + 24) - (u32(o + 12) + (temp_obj._sub_00_amount * 2))
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 24) + g.m : 0;

            im_model_animation_1_52t35_24(u32(o + 24) + g.m, x[0].section_24)
        } else {
            x[0].section_24 = u32(o + 24)
        }

        if (u32(o + 20) && u32(o + 4)) {
            if (u32(o + 24) && u32(o + 0)) {
                x[0].padding_24 = u32(o + 20) - (u32(o + 24) + (temp_obj._sub_00_amount * 4))
            }
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 20) + g.m : 0;

            im_model_animation_1_52t35_20(u32(o + 20) + g.m, x[0].section_20)
        } else {
            x[0].section_20 = u32(o + 20)
        }

        if (u32(o + 28) && u32(o + 4)) {
            if (g.model_animation_1_array.length === 12) {// console.log('?')
            }
            x[0].padding_20 = u32(o + 28) - (u32(o + 20) + temp_obj._sub_04_amount * 2)
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 28) + g.m : 0;

            im_model_animation_1_52t35_28(u32(o + 28) + g.m, x[0].section_28)
        } else {
            x[0].section_28 = u32(o + 28)
        }

        if (u32(o + 16) && u32(o + 8)) {
            if (u32(o + 28) && u32(o + 4)) {
                x[0].padding_28 = u32(o + 16) - (u32(o + 28) + ((temp_obj._40_amount * 2) * temp_obj._sub_04_amount) * 4)
            }

            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 16) + g.m : 0;

            im_model_animation_1_52t35_16(u32(o + 16) + g.m, x[0].section_16)
        } else {
            x[0].section_16 = u32(o + 16)
        }

        if (u32(o + 32) && u32(o + 8)) {
            x[0].padding_16 = u32(o + 32) - (u32(o + 16) + (temp_obj._sub_08_amount * 2))

            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 32) + g.m : 0;

            im_model_animation_1_52t35_32(u32(o + 32) + g.m, x[0].section_32)
        } else {
            x[0].section_32 = u32(o + 32)
        }
        o + 36 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 36 : 0;
    }
    function im_model_animation_1_52t35_12(o, x) {
        let bufferamt = (temp_obj._sub_00_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_24(o, x) {
        let bufferamt = (temp_obj._sub_00_amount * 4)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     f32_00: f32(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_20(o, x) {
        let bufferamt = (temp_obj._sub_04_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     u16_00: u16(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_28(o, x) {
        let bufferamt = ((temp_obj._40_amount * 2) * temp_obj._sub_04_amount) * 4

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     f32_00: f32(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_16(o, x) {
        let bufferamt = (temp_obj._sub_08_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     u16_00: u16(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_32(o, x) {
        let bufferamt = temp_obj._40_amount * (temp_obj._sub_08_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t163(o, x) {
        x.push({
            u8_00: u8(o + 0),
            //amount?
            u8_04: u8(o + 4),
            //amount?
            section_08: [],
            section_12: [],
        });

        for (let i = 0; i < u32(o + 4); i++) {
            im_model_animation_1_52t163_08(u32(o + 8) + (i * 1) + g.m, i, x[0].section_08);
        }
        if (u32(o + 0) === 0) {
            x[0].section_12 = u32(o + 12)
        } else {

            for (let i = 0; i < u32(o + 0); i++) {
                im_model_animation_1_52t163_12(u32(o + 12) + (i * 1) + g.m, i, x[0].section_12);
            }
        }
        // offset 12
        o + 16 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 16 : 0;
    }
    function im_model_animation_1_52t163_08(o, i, x) {
        x.push({
            // id: gen_id(),
            u8_00: u8(o + 0),
        });
        o + 1 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 1 : 0;
    }
    function im_model_animation_1_52t163_12(o, i, x) {
        x.push({
            // id: gen_id(),
            u8_00: u8(o + 0),
        });
        o + 1 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 1 : 0;
    }

}

function im_activator(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        ordered_model_animation_2_04: 0,
        section_08: [im_string(u32(o + 8), 0, false)],
        u32_12: u32(o + 12),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u32_48: u32(o + 48),
        u32_56: u32(o + 56),
        u32_64: u32(o + 64),
        f32_72: f32(o + 72),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        u32_100: u32(o + 100),
        f32_104: f32(o + 104),
        section_108: [],
        u32_112: u32(o + 112),
        //amount?
        section_116: [],
        u8_120: u8(o + 120),
        u8_121: u8(o + 121),
        u8_122: u8(o + 122),
        u8_123: u8(o + 123),
        section_124: [],
        f32_128: f32(o + 128),
        f32_132: f32(o + 132),
        f32_136: f32(o + 136),
        u32_140: u32(o + 140),
        //amount?
        section_144: [],
        unordered_wtf_148: 0,
        u8_153: u8(o + 153),
        u8_154: u8(o + 154),
        u8_155: u8(o + 155),
        u32_172: u32(o + 172),
        //amount?
        section_176: [],
        u32_180: u32(o + 180),
        //amount?
        section_184: [],
        u32_188: u32(o + 188),
        //amount?
        section_192: [],
        f32_204: f32(o + 204),
        u32_208: u32(o + 208),
        //amount?
        section_212: [],
        u32_224: u32(o + 224),
        section_228: [],
        u32_244: u32(o + 244),
        //amount?
        section_248: [],
    });

    x[i].ordered_model_animation_2_04 = in_ml(u32(o + 4), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_activator_24(u32(o + 24) + (ii * 24) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_activator_32(u32(o + 32) + (ii * 24) + g.m, ii, x[i].section_32);
    }
    u32(o + 108) && im_activator_108(u32(o + 108) + g.m, x[i].section_108);
    u32(o + 116) && im_activator_116(u32(o + 116) + g.m, x[i].section_116);
    u32(o + 124) && im_activator_124(u32(o + 124) + g.m, x[i].section_124);
    u32(o + 144) && im_activator_144(u32(o + 144) + g.m, x[i].section_144);
    x[i].unordered_wtf_148 = in_ml(u32(o + 148), g.wtf_array, im_wtf, g.unordered_ref.wtf);

    for (let ii = 0; ii < u32(o + 172); ii++) {
        im_activator_176(u32(o + 176) + (ii * 20) + g.m, ii, x[i].section_176);
    }

    for (let ii = 0; ii < u32(o + 180); ii++) {
        im_activator_184(u32(o + 184) + (ii * 12) + g.m, ii, x[i].section_184);
    }

    for (let ii = 0; ii < u32(o + 188); ii++) {
        im_activator_184(u32(o + 192) + (ii * 12) + g.m, ii, x[i].section_192);
    }

    for (let ii = 0; ii < u32(o + 208); ii++) {
        im_unknown(u32(o + 212) + (ii * 4) + g.m, ii, x[i].section_212);
    }

    for (let ii = 0; ii < u32(o + 224); ii++) {
        im_unknown(u32(o + 228) + (ii * 4) + g.m, ii, x[i].section_228);
    }

    for (let ii = 0; ii < u32(o + 244); ii++) {
        im_activator_248(u32(o + 248) + (ii * 36) + g.m, ii, x[i].section_248);
    }
    return x[i].id
    // 256 bytes;

}
function im_activator_24(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        f32_08: f32(o + 8),
        f32_20: f32(o + 20),
    });

    switch (u8(o + 0)) {
    case 4:
        u32(o + 4) && im_activator_24_04t4(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 6:
        u32(o + 4) && im_activator_24_04t6(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
}
function im_activator_24_04t4(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_activator_24_04t4_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_activator_24_04t4_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_activator_24_04t6(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_08: [im_string(u32(o + 8), 0, false)],
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_activator_32(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 4) && im_activator_32_04(u32(o + 4) + g.m, x[i].section_04);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_activator_32_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

}
function im_activator_32_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_activator_32_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_activator_32_20_08(u32(o + 8) + g.m, x[i].section_08);

}
function im_activator_32_20_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_108(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    switch (u32(o + 4)) {
    case 1:
        u32(o + 8) && im_activator_108_08t1(u32(o + 8) + g.m, x[0].section_08);
        break;
    case 2:
        u32(o + 8) && im_activator_108_08t2(u32(o + 8) + g.m, x[0].section_08);
        break;
    }
    // 16 bytes;

}
function im_activator_108_08t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_activator_108_08t2(o, x) {
    x.push({
        u8_04: u8(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
    });

    u32(o + 8) && im_activator_108_08t2_08(u32(o + 8) + g.m, x[0].section_08);

    // 32 bytes;

}
function im_activator_108_08t2_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_116(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_activator_124(o, x) {
    x.push({
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_activator_144(o, x) {
    x.push({
        f32_00: f32(o + 0),
    });

    // 48 bytes;

}
function im_activator_176(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_activator_176_08(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_activator_176_08(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

}
function im_activator_176_08(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        section_08: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 8) && im_activator_176_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 13:
        u32(o + 8) && im_activator_176_08t13(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 19:
        u32(o + 8) && im_activator_176_08t19(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}
function im_activator_176_08t0(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_176_08t13(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_activator_176_08t19(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_activator_184(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }

}
function im_activator_248(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
        section_08: [im_string(u32(o + 8), 0, false)],
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        unordered_sound_controls_20: 0,
        u8_24: u8(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_activator_248_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }
    x[i].unordered_sound_controls_20 = in_ml(u32(o + 20), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_activator_248_32(u32(o + 32) + (ii * 80) + g.m, ii, x[i].section_32);
    }

}
function im_activator_248_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        //check this
        u8_01: u8(o + 1),
        section_04: [],
    });

    switch (u8(o + 0)) {
    case 0:
        u32(o + 4) && im_activator_248_04_04t0(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 1:
        u32(o + 4) && im_activator_248_04_04t1(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 2:
        u32(o + 4) && im_activator_248_04_04t2(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 3:
        u32(o + 4) && im_activator_248_04_04t3(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 4:
        u32(o + 4) && im_activator_248_04_04t4(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 5:
        u32(o + 4) && im_activator_248_04_04t5(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 6:
        u32(o + 4) && im_activator_248_04_04t6(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 9:
        u32(o + 4) && im_activator_248_04_04t9(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 11:
        u32(o + 4) && im_activator_248_04_04t11(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 12:
        u32(o + 4) && im_activator_248_04_04t12(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 13:
        u32(o + 4) && im_activator_248_04_04t13(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 15:
        u32(o + 4) && im_activator_248_04_04t15(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
}
function im_activator_248_04_04t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        unordered_activator_248_04_04t0_04_04: 0,
    });

    x[0].unordered_activator_248_04_04t0_04_04 = in_ml(u32(o + 4), g.activator_248_04_04t0_04_array, im_activator_248_04_04t0_04, g.unordered_ref.activator_248_04_04t0_04);

    // 16 bytes;

}

function im_activator_248_04_04t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t2(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t3(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t4(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t5(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t6(o, x) {
    x.push({
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t9(o, x) {
    x.push({
        f32_04: f32(o + 4),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
        u8_20: u8(o + 20),
        u8_22: u8(o + 22),
    });

    // 32 bytes;

}
function im_activator_248_04_04t11(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_04_04t12(o, x) {
    x.push({});

    // 16 bytes;

}
function im_activator_248_04_04t13(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
    });

    u32(o + 0) && im_activator_248_04_04t13_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_activator_248_04_04t13_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_activator_248_04_04t13_00_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_activator_248_04_04t13_00_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_04_04t15(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_32(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        section_16: [],
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        section_36: [],
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        section_52: [],
        f32_56: f32(o + 56),
        u8_61: u8(o + 61),
        f32_64: f32(o + 64),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        section_76: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_activator_248_32_08(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_08);
    }
    u32(o + 16) && im_activator_248_32_16(u32(o + 16) + g.m, x[i].section_16);
    u32(o + 32) && im_activator_248_32_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_activator_248_32_36(u32(o + 36) + g.m, x[i].section_36);
    // offset? 
    u32(o + 52) && im_activator_248_32_52(u32(o + 52) + g.m, x[i].section_52);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_activator_248_32_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
    }
    u32(o + 76) && im_activator_248_32_76(u32(o + 76) + g.m, x[i].section_76);

}
function im_activator_248_32_08(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_model_link_00: 0,
    });

    x[i].unordered_model_link_00 = in_ml(u32(o + 0), g.model_link_array, im_model_link, g.unordered_ref.model_link);

}
function im_activator_248_32_16(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_32_32(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_36(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_52(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_72(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        section_08: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 8) && im_activator_248_32_72_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 2:
        u32(o + 8) && im_activator_248_32_72_08t2(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 4:
        x[i].section_08 = in_ml(u32(o + 8), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    case 5:
        x[i].section_08 = in_ml(u32(o + 8), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    case 8:
        u32(o + 8) && im_activator_248_32_72_08t08(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 10:
        u32(o + 8) && im_activator_248_32_72_08t10(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 12:
        u32(o + 8) && im_activator_248_32_72_08t12(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 13:
        u32(o + 8) && im_activator_248_32_72_08t13(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 14:
        u32(o + 8) && im_activator_248_32_72_08t14(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 15:
        u32(o + 8) && im_activator_248_32_72_08t15(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 16:
        u32(o + 8) && im_activator_248_32_72_08t16(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 17:
        u32(o + 8) && im_activator_248_32_72_08t17(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 18:
        u32(o + 8) && im_activator_248_32_72_08t18(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 20:
        u32(o + 8) && im_activator_248_32_72_08t20(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 22:
        u32(o + 8) && im_activator_248_32_72_08t22(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 23:
        u32(o + 8) && im_activator_248_32_72_08t23(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 25:
        u32(o + 8) && im_activator_248_32_72_08t25(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 32:
        u32(o + 8) && im_activator_248_32_72_08t32(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}
function im_activator_248_32_72_08t0(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t2(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_activator_248_32_72_08t10(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t12(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t13(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t14(o, x) {
    x.push({
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
    });

    // 32 bytes;

}
function im_activator_248_32_72_08t15(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t16(o, x) {
    x.push({
        u16_00: u16(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t17(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
function im_activator_248_32_72_08t18(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_activator_248_32_72_08t18_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_activator_248_32_72_08t18_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //check this
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 0:
        x[0].section_04 = in_ml(u32(o + 4), g.activator_248_32_72_08t18_08_04t0_array, im_activator_248_32_72_08t18_08_04t0, g.unordered_ref.activator_248_32_72_08t18_08_04t0);

        // u32(o + 4) && im_activator_248_32_72_08t18_08_04t0(u32(o + 4) + g.m, x[0].section_04) ;
        break;
    case 6:
        u32(o + 4) && im_activator_248_32_72_08t18_08_04t6(u32(o + 4) + g.m, x[0].section_04);
        break;
    }
    // 16 bytes;

}
function im_activator_248_32_72_08t18_08_04t0(o, i, x) {
    x.push({
        id: gen_id(),
        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
    });

    return x[i].id
    // 48 bytes;

}

function im_activator_248_32_72_08t18_08_04t6(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_activator_248_32_72_08t18_08_04t6_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_activator_248_32_72_08t18_08_04t6_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t20(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    switch (u8(o + 8)) {
    case 0:
        x[0].section_00 = f32(o + 0);
        break;
    case 1:
        u32(o + 0) && im_activator_248_32_72_08t20_00t1(u32(o + 0) + g.m, x[0].section_00);
        break;
    }
    // 16 bytes;

}

function im_activator_248_32_72_08t20_00t1(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t22(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
    });

    u32(o + 0) && im_activator_248_32_72_08t22_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_activator_248_32_72_08t22_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_activator_248_32_72_08t22_00_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_activator_248_32_72_08t22_00_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t23(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}

function im_activator_248_32_72_08t25(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_activator_248_32_72_08t25_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_activator_248_32_72_08t25_04(o, x) {
    x.push({
        u8_04: u8(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_activator_248_32_72_08t25_04_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_activator_248_32_72_08t25_04_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t32(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_activator_248_32_76(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}

function im_activator_248_04_04t0_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        u8_24: u8(o + 24),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_activator_248_04_04t0_04_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 48 bytes;

}
function im_activator_248_04_04t0_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_activator_248_04_04t0_04_04_04(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_activator_248_04_04t0_04_04_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_activator_248_04_04t0_04_04_04_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_activator_248_04_04t0_04_04_04_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
    });

    // 16 bytes;

}

function im_car(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u8_04: u8(o + 4),
    });

    u32(o + 0) ? im_car_00(u32(o + 0) + g.m, x[i].section_00) : 0;
    return x[i].id
    // 16 bytes;

}
function im_car_00(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        u32_76: u32(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
        u32_104: u32(o + 104),
        u32_108: u32(o + 108),
        u32_112: u32(o + 112),
        u32_116: u32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        u32_128: u32(o + 128),
        u32_132: u32(o + 132),
        u32_136: u32(o + 136),
        u32_140: u32(o + 140),
        u32_144: u32(o + 144),
        u32_148: u32(o + 148),
        u32_152: u32(o + 152),
        u32_156: u32(o + 156),
        u32_160: u32(o + 160),
        u32_168: u32(o + 168),
        u32_172: u32(o + 172),
        ordered_model_animation_2_176: 0,
        unordered_car_00_180_180: 0,
        unordered_car_00_184_184: 0,
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        u32_204: u32(o + 204),
        //amount?
        section_208: [],
        u32_212: u32(o + 212),
        //amount?
        section_216: [],
        u32_220: u32(o + 220),
        //amount?
        section_224: [],
        u32_228: u32(o + 228),
        //amount?
        section_232: [],
    });

    x[0].ordered_model_animation_2_176 = in_ml(u32(o + 176), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);

    x[0].unordered_car_00_180_180 = in_ml(u32(o + 180), g.car_00_180_array, im_car_00_180, g.unordered_ref.car_00_180);
    x[0].unordered_car_00_184_184 = in_ml(u32(o + 184), g.car_00_184_array, im_car_00_184, g.unordered_ref.car_00_184);
    // u32(o + 180) ? im_car_00_180(u32(o + 180) + g.m, x[0].section_180) : 0;
    // u32(o + 184) ? im_car_00_184(u32(o + 184) + g.m, x[0].section_184) : 0;
    u32(o + 188) ? im_car_00_188(u32(o + 188) + g.m, x[0].section_188) : 0;
    u32(o + 192) ? im_car_00_192(u32(o + 192) + g.m, x[0].section_192) : 0;
    u32(o + 196) ? im_car_00_196(u32(o + 196) + g.m, x[0].section_196) : 0;
    u32(o + 200) ? im_car_00_200(u32(o + 200) + g.m, x[0].section_200) : 0;

    for (let i = 0; i < u32(o + 204); i++) {
        im_car_00_208(u32(o + 208) + (i * 8) + g.m, i, x[0].section_208);
    }

    for (let i = 0; i < u32(o + 212); i++) {
        im_car_00_216(u32(o + 216) + (i * 12) + g.m, i, x[0].section_216);
    }

    for (let i = 0; i < u32(o + 220); i++) {
        im_car_00_216(u32(o + 224) + (i * 12) + g.m, i, x[0].section_224);
    }

    for (let i = 0; i < u32(o + 228); i++) {
        im_unknown(u32(o + 232) + (i * 4) + g.m, i, x[0].section_232);
    }

    // 240 bytes;

}
function im_car_00_180(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        section_04: [],
        unordered_sound_section_08: 0,
        unordered_sound_section_12: 0,
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
    });

    u32(o + 0) ? im_car_00_180_00(u32(o + 0) + g.m, x[i].section_00) : 0;
    u32(o + 4) ? im_car_00_180_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    x[i].unordered_sound_section_08 = in_ml(u32(o + 8), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    x[i].unordered_sound_section_12 = in_ml(u32(o + 12), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_car_00_180_20(u32(o + 20) + (ii * 8) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_car_00_180_20(u32(o + 28) + (ii * 8) + g.m, ii, x[i].section_28);
    }

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_car_00_180_20(u32(o + 36) + (ii * 8) + g.m, ii, x[i].section_36);
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_car_00_180_20(u32(o + 44) + (ii * 8) + g.m, ii, x[i].section_44);
    }
    return x[i].id
    // 48 bytes;

}
function im_car_00_180_00(o, x) {
    x.push({
        f32_00: f32(o + 0),
        texture_04: im_patch(g.texture_patch_ref, o + 4),
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        unordered_unknown_00_20: 0,
        u32_24: u32(o + 24),
        unordered_unknown_00_28: 0,
        unordered_unknown_00_32: 0,
        unordered_unknown_00_36: 0,
    });

    u32(o + 8) ? im_car_00_180_00_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    for (let i = 0; i < u32(o + 12); i++) {
        im_car_00_180_00_16(u32(o + 16) + (i * 20) + g.m, i, x[0].section_16);
    }
    x[0].unordered_unknown_00_20 = in_ml(u32(o + 20), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_28 = in_ml(u32(o + 28), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_32 = in_ml(u32(o + 32), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_36 = in_ml(u32(o + 36), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    // 48 bytes;

}
function im_car_00_180_00_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_car_00_180_00_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 8) ? im_car_00_180_00_16_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_car_00_180_00_16_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 16) ? im_car_00_180_00_16_12(u32(o + 16) + g.m, x[i].section_16) : 0;

}
function im_car_00_180_00_16_08(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_car_00_180_00_16_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_car_00_180_04(o, x) {
    x.push({
        f32_00: f32(o + 0),
        //check this
        f32_04: f32(o + 4),
        //check this
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        //check this
        f32_16: f32(o + 16),
        //check this
        f32_20: f32(o + 20),
        //check this
        u32_24: u32(o + 24),
        //check this
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        section_64: [],
        unordered_unknown_00_68: 0,
        f32_72: f32(o + 72),
        //amount?
        f32_76: f32(o + 76),
        section_80: [],
        unordered_car_00_180_04_84_84: 0,
        unordered_car_00_180_04_84_88: 0,
        section_92: [],
    });

    u32(o + 56) ? im_car_00_180_04_56(u32(o + 56) + g.m, x[0].section_56) : 0;
    u32(o + 64) ? im_car_00_180_04_56(u32(o + 64) + g.m, x[0].section_64) : 0;
    x[0].unordered_unknown_00_68 = in_ml(u32(o + 68), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    u32(o + 80) ? im_car_00_180_04_80(u32(o + 80) + g.m, x[0].section_80) : 0;

    x[0].unordered_car_00_180_04_84_84 = in_ml(u32(o + 84), g.car_00_180_04_84_array, im_car_00_180_04_84, g.unordered_ref.car_00_180_04_84);
    x[0].unordered_car_00_180_04_84_88 = in_ml(u32(o + 88), g.car_00_180_04_84_array, im_car_00_180_04_84, g.unordered_ref.car_00_180_04_84);

    // u32(o + 84) ? im_car_00_180_04_84(u32(o + 84) + g.m, x[0].section_84) : 0;
    // u32(o + 88) ? im_car_00_180_04_88(u32(o + 88) + g.m, x[0].section_88) : 0;
    u32(o + 92) ? im_car_00_180_04_92(u32(o + 92) + g.m, x[0].section_92) : 0;

    // 96 bytes;

}
function im_car_00_180_04_56(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_car_00_180_04_80(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_08: f32(o + 8),
        unordered_unknown_00_16: 0,
    });

    x[0].unordered_unknown_00_16 = in_ml(u32(o + 16), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    // 32 bytes;

}
function im_car_00_180_04_84(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

    return x[i].id
    // 16 bytes;

}

// function im_car_00_180_04_88(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//     });

//     // 16 bytes;

// }
function im_car_00_180_04_92(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_car_00_180_20(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) ? im_car_00_180_20_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 3:
        u32(o + 4) ? im_car_00_180_20_04t3(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_car_00_180_20_04t1(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        f32_36: f32(o + 36),
    });

    // 64 bytes;

}
function im_car_00_180_20_04t3(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_car_00_184(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_car_00_184_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    return x[i].id
    // 16 bytes;

}
function im_car_00_184_04(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        section_08: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
    });

    u32(o + 0) ? im_car_00_184_04_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_car_00_184_04_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 8) ? im_car_00_184_04_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 64 bytes;

}
function im_car_00_184_04_00(o, x) {
    x.push({
        section_16: [],
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        f32_40: f32(o + 40),
        unordered_gate_44: 0,
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    u32(o + 16) ? im_car_00_184_04_00_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    x[0].unordered_gate_44 = in_ml(u32(o + 44), g.gate_array, im_gate, g.unordered_ref.gate);

    // 80 bytes;

}
function im_car_00_184_04_00_16(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_car_00_184_04_04(o, x) {
    x.push({
        f32_00: f32(o + 0),
        //check this
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_car_00_184_04_08(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
    });

    // 96 bytes;

}
function im_car_00_188(o, x) {
    x.push({
        ordered_model_animation_2_00: 0,
        unordered_model_link_04: 0,
        ordered_model_animation_1_08: 0,
        ordered_model_animation_1_12: 0,
        ordered_model_animation_1_16: 0,
        u8_20: u8(o + 20),
        ordered_model_animation_1_24: 0,
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
    });

    x[0].ordered_model_animation_2_00 = in_ml(u32(o + 0), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    x[0].unordered_model_link_04 = in_ml(u32(o + 4), g.model_link_array, im_model_link, g.unordered_ref.model_link);
    x[0].ordered_model_animation_1_08 = in_ml(u32(o + 8), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[0].ordered_model_animation_1_12 = in_ml(u32(o + 12), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[0].ordered_model_animation_1_16 = in_ml(u32(o + 16), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[0].ordered_model_animation_1_24 = in_ml(u32(o + 24), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);

    for (let i = 0; i < u32(o + 48); i++) {
        im_car_00_188_52(u32(o + 52) + (i * 8) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 56); i++) {
        im_car_00_188_60(u32(o + 60) + (i * 20) + g.m, i, x[0].section_60);
    }

    for (let i = 0; i < u32(o + 64); i++) {
        im_car_00_188_68(u32(o + 68) + (i * 32) + g.m, i, x[0].section_68);
    }

    for (let i = 0; i < u32(o + 72); i++) {
        im_car_00_188_68(u32(o + 76) + (i * 32) + g.m, i, x[0].section_76);
    }

    for (let i = 0; i < u32(o + 80); i++) {
        im_car_00_188_68(u32(o + 84) + (i * 32) + g.m, i, x[0].section_84);
    }

    // 128 bytes;

}
function im_car_00_188_52(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_car_00_188_52_04(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_car_00_188_52_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_car_00_188_52_04_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_car_00_188_52_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_model_link_00: 0,
    });

    x[i].unordered_model_link_00 = in_ml(u32(o + 0), g.model_link_array, im_model_link, g.unordered_ref.model_link);

}
function im_car_00_188_60(o, i, x) {
    x.push({
        id: gen_id(),
        u16_00: u16(o + 0),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
    });

}
function im_car_00_188_68(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_car_00_192(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        unordered_car_00_192_16_16: 0,
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u8_28: u8(o + 28),
        unordered_wtf_32: 0,
    });

    x[0].unordered_car_00_192_16_16 = in_ml(u32(o + 16), g.car_00_192_16_array, im_car_00_192_16, g.unordered_ref.car_00_192_16);

    // u32(o + 16) ? im_car_00_192_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    for (let i = 0; i < u32(o + 20); i++) {
        im_car_00_192_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
    }
    x[0].unordered_wtf_32 = in_ml(u32(o + 32), g.wtf_array, im_wtf, g.unordered_ref.wtf);

    // 48 bytes;

}
function im_car_00_192_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    return x[i].id
    // 48 bytes;

}

function im_car_00_192_24(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

}
function im_car_00_196(o, x) {
    x.push({
        unordered_sound_section_00: 0,
        f32_04: f32(o + 4),
        //check this
        unordered_sound_section_08: 0,
        f32_12: f32(o + 12),
        //check this
        f32_16: f32(o + 16),
        //check this
        f32_20: f32(o + 20),
        //check this
    });

    x[0].unordered_sound_section_00 = in_ml(u32(o + 0), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    x[0].unordered_sound_section_08 = in_ml(u32(o + 8), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);

    // 32 bytes;

}
function im_car_00_200(o, x) {
    x.push({
        unordered_interface_00: 0,
        unordered_interface_04: 0,
        unordered_interface_08: 0,
        unordered_interface_12: 0,
        unordered_interface_16: 0,
        unordered_interface_20: 0,
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 0), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_08 = in_ml(u32(o + 8), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_12 = in_ml(u32(o + 12), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_16 = in_ml(u32(o + 16), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_20 = in_ml(u32(o + 20), g.interface_array, im_interface, g.unordered_ref.interface);

    // 32 bytes;

}
function im_car_00_208(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_car_00_208_04(u32(o + 4) + (ii * 32) + g.m, ii, x[i].section_04);
    }

}
function im_car_00_208_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_car_00_216(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }

}

function im_flag(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [im_string(u32(o + 4), 0, false)],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
        f32_16: f32(o + 16),
        f32_28: f32(o + 28),
        u8_40: u8(o + 40),
    });

    switch (u8(o + 8)) {
    case 2:
        u32(o + 12) ? im_flag_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 3:
        u32(o + 12) ? im_flag_12t3(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 4:
        u32(o + 12) ? im_flag_12t4(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
    return x[i].id
    // 48 bytes;

}
function im_flag_12t2(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_02: u8(o + 2),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_flag_12t3(o, x) {
    x.push({
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_flag_12t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_flag_12t3_12(o, x) {
    x.push({});

    // 32 bytes;

}
function im_flag_12t4(o, x) {
    x.push({
        f32_00: f32(o + 0),
    });

    // 16 bytes;

}

function im_frame_font(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        //patch?
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        //amount?
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    u32(o + 28) ? im_frame_font_28(u32(o + 28) + g.m, x[i].section_28) : 0;

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_frame_font_36(u32(o + 36) + (ii * 12) + g.m, ii, x[i].section_36);
    }
    return x[i].id
    // 48 bytes;

}
function im_frame_font_28(o, x) {
    x.push({
        f32_00: f32(o + 0),
    });

    // 32 bytes;

}
function im_frame_font_36(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        //check this
        f32_04: f32(o + 4),
        //check this
        f32_08: f32(o + 8),
        //check this
    });

}

function im_frame_multi_font(o, i, x) {
    x.push({
        id: gen_id(),
        section_04: [],
    });

    u32(o + 4) ? im_frame_multi_font_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    return x[i].id
    // 16 bytes;

}
function im_frame_multi_font_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        unordered_frame_font_12: 0,
        f32_24: f32(o + 24),
        unordered_frame_font_28: 0,
        unordered_frame_font_32: 0,
    });

    x[0].unordered_frame_font_12 = in_ml(u32(o + 12), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    x[0].unordered_frame_font_28 = in_ml(u32(o + 28), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    x[0].unordered_frame_font_32 = in_ml(u32(o + 32), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);

    // 48 bytes;

}

function im_frame_sparkler(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) ? im_frame_sparkler_16(u32(o + 16) + g.m, x[i].section_16) : 0;
    return x[i].id
    // 32 bytes;

}
function im_frame_sparkler_16(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
    });

    for (let i = 0; i < u32(o + 44); i++) {
        im_frame_sparkler_16_48(u32(o + 48) + (i * 12) + g.m, i, x[0].section_48);
    }

    for (let i = 0; i < u32(o + 52); i++) {
        im_frame_sparkler_16_56(u32(o + 56) + (i * 32) + g.m, i, x[0].section_56);
    }

    // 64 bytes;

}
function im_frame_sparkler_16_48(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_08: f32(o + 8),
    });

}
function im_frame_sparkler_16_56(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_20: f32(o + 20),
    });

}

function im_frame_text(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
    });

    return x[i].id
    // 16 bytes;

}

function im_gate(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_17: u8(o + 17),
        section_24: [],
        unordered_unknown_00_28: 0,
        f32_32: f32(o + 32),
        unordered_unknown_00_36: 0,
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_56: f32(o + 56),
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        unordered_sound_section_76: 0,
        unordered_sound_controls_80: 0,
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        u8_105: u8(o + 105),
        u8_107: u8(o + 107),
    });

    u32(o + 24) ? im_gate_24(u32(o + 24) + g.m, x[i].section_24) : 0;
    x[i].unordered_unknown_00_28 = in_ml(u32(o + 28), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_unknown_00_36 = in_ml(u32(o + 36), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_unknown(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    x[i].unordered_sound_section_76 = in_ml(u32(o + 76), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    x[i].unordered_sound_controls_80 = in_ml(u32(o + 80), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    u32(o + 84) ? im_gate_84(u32(o + 84) + g.m, x[i].section_84) : 0;
    return x[i].id
    // 128 bytes;

}
function im_gate_24(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_gate_84(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    u32(o + 4) ? im_gate_84_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_gate_84_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}

function im_idk(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        section_04: [],
        ordered_model_animation_2_08: 0,
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u8_64: u8(o + 64),
        u8_65: u8(o + 65),
        u8_66: u8(o + 66),
        u8_67: u8(o + 67),
    });

    switch (u8(o + 0)) {
    case 0:
        x[i].section_04 = in_ml(u32(o + 4), g.models_array, im_models, g.ordered_ref.models);
        break;
    case 1:
        x[i].section_04 = in_ml(u32(o + 4), g.model_link_array, im_model_link, g.unordered_ref.model_link);
        break;
    }
    x[i].ordered_model_animation_2_08 = in_ml(u32(o + 8), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    u32(o + 12) ? im_idk_12(u32(o + 12) + g.m, x[i].section_12) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_idk_20(u32(o + 20) + (ii * 32) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_mysterious(u32(o + 32) + (ii * 64) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 80 bytes;

}
function im_idk_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        section_16: [],
        ordered_models_20: 0,
        unordered_wtf_28: 0,
        f32_32: f32(o + 32),
        unordered_gate_44: 0,
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        u32_64: u32(o + 64),
        section_68: [],
    });

    u32(o + 16) ? im_idk_12_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    x[0].ordered_models_20 = in_ml(u32(o + 20), g.models_array, im_models, g.ordered_ref.models);
    x[0].unordered_wtf_28 = in_ml(u32(o + 28), g.wtf_array, im_wtf, g.unordered_ref.wtf);
    x[0].unordered_gate_44 = in_ml(u32(o + 44), g.gate_array, im_gate, g.unordered_ref.gate);

    for (let i = 0; i < u32(o + 64); i++) {
        im_unknown(u32(o + 68) + (i * 4) + g.m, i, x[0].section_68);
    }

    // 80 bytes;

}
function im_idk_12_16(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_idk_20(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_24: u32(o + 24),
        section_28: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_idk_20_08(u32(o + 8) + (ii * 32) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_idk_20_16(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_mysterious(u32(o + 28) + (ii * 64) + g.m, ii, x[i].section_28);
    }

}
function im_idk_20_08(o, i, x) {
    x.push({
        id: gen_id(),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_idk_20_16(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}

function im_interface(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u16_02: u16(o + 2),
        section_04: [],
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        unordered_sound_controls_28: 0,
        unordered_sound_controls_36: 0,
        unordered_sound_controls_40: 0,
        u32_44: u32(o + 44),
        section_48: [],
        unordered_sound_controls_52: 0,
        section_56: [],
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 4) && im_interface_04(u32(o + 4) + g.m, x[i].section_04);

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_interface_12(u32(o + 12) + (ii * 28) + g.m, ii, x[i].section_12);
    }
    x[i].unordered_sound_controls_28 = in_ml(u32(o + 28), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    x[i].unordered_sound_controls_36 = in_ml(u32(o + 36), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    x[i].unordered_sound_controls_40 = in_ml(u32(o + 40), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    u32(o + 48) ? im_interface_48(u32(o + 48) + g.m, x[i].section_48) : 0;
    x[i].unordered_sound_controls_52 = in_ml(u32(o + 52), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    u32(o + 56) ? im_interface_56(u32(o + 56) + g.m, x[i].section_56) : 0;

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_interface_72(u32(o + 72) + (ii * 100) + g.m, ii, x[i].section_72);
    }
    // 80 bytes;

    return x[i].id
}
function im_xdx_interface(o, x) {
    x.push({
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        section_48: [],
        section_56: [],
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 4) ? im_interface_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_12(u32(o + 12) + (i * 28) + g.m, i, x[0].section_12);
    }
    u32(o + 48) ? im_interface_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    u32(o + 56) ? im_xdx_interface_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    for (let i = 0; i < u32(o + 68); i++) {
        im_interface_72(u32(o + 72) + (i * 100) + g.m, i, x[0].section_72);
    }
    // 80 bytes;

}
function im_interface_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_04_04(u32(o + 4) + (i * 36) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 12) ? im_interface_04_04_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_interface_04_04_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_interface_04_04_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_interface_04_04_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 9:
        u32(o + 12) ? im_interface_04_04_12t9(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_interface_04_04_12t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_04_04_12t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_04_04_12t1_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}

function im_interface_04_04_12t5(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_04_04_12t7(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });
    // 16 bytes;

}
function im_interface_04_04_12t8(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_04_04_12t8_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_04_04_12t8_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        section_08: [im_string(u32(o + 8), 0, false)],
    });

}
function im_interface_04_04_12t9(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [im_string(u32(o + 4), 0, false)],
        section_08: [im_string(u32(o + 8), 0, false)],
    });
    // 16 bytes;

}
function im_interface_12(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
        section_04: [],
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    switch (u32(o + 0)) {
    case 1026:
        u32(o + 4) ? im_interface_12_04t1026(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1027:
        u32(o + 4) ? im_interface_12_04t1027(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_interface_12_16(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_interface_12_24(u32(o + 24) + (ii * 36) + g.m, ii, x[i].section_24);
    }

}
function im_interface_12_04t1026(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u32_04: u32(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
    });

    u32(o + 8) ? im_interface_12_04t1026_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    // offset? 
    // 32 bytes;

}
function im_interface_12_04t1026_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_12_04t1026_08_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_12_04t1026_08_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_12_04t1027(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_12_16(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_12_04t1026(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_interface_12_24(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        //check this
        u8_01: u8(o + 1),
        u16_02: u16(o + 2),
        section_04: [],
        section_08: [],
        u32_20: u32(o + 20),
        //check this
        unordered_sound_controls_24: 0,
    });

    switch (u8(o + 0)) {
    case 1:
    case 31:
        x[i].section_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
        break;
    case 11:
        u32(o + 4) ? im_interface_12_24_04t11(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    u32(o + 8) ? im_interface_12_24_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    // offset? 
    x[i].unordered_sound_controls_24 = in_ml(u32(o + 24), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

}
function im_interface_12_24_04t11(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_12_24_04t11_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_12_24_04t11_04(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u16_04: u16(o + 4),
        //check this
        section_08: [],
    });

    u32(o + 0) ? im_interface_12_24_04t11_04_00(u32(o + 0) + g.m, x[i].section_00) : 0;
    switch (u16(o + 4)) {
    case 0:
        u32(o + 8) ? im_interface_12_24_04t11_04_08t0(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 1:
        u32(o + 8) ? im_interface_12_24_04t11_04_08t1(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 3:
        x[i].section_08 = in_ml(u32(o + 8), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    case 100:
        x[i].section_08 = in_ml(u32(o + 8), g.interface_array, im_interface, g.unordered_ref.interface);
        break;
    case 101:
        x[i].section_08 = in_ml(u32(o + 8), g.interface_array, im_interface, g.unordered_ref.interface);
        break;
    }
}
function im_xdx_interface_12_24_04t11_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 0:
    case 3:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t0(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1:
    case 2:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_demo_interface_12_24_04t11_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t0(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1:
    case 2:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 4), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    }
}
function im_interface_12_24_04t11_04_00(o, x) {
    x.push({});
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
    });
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_xdx_interface_12_24_04t11_04_04t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1_00_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t1(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_interface_12_24_04t11_04_08t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_interface_12_24_04t11_04_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_12_24_04t11_04_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t1_00_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_12_24_08(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_interface_12_24_08_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_interface_12_24_08_00(u32(o + 4) + g.m, x[0].section_04) : 0;
    // offset? 
    // 16 bytes;

}
function im_interface_12_24_08_00(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_48(o, x) {
    x.push({
        f32_00: f32(o + 0),
    });
    // 16 bytes;

}
function im_interface_56(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_xdx_interface_56(o, x) {
    x.push({
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
        u16_16: u16(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        //check this
        section_20: [],
        section_24: [],
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        section_32: [],
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        section_44: [],
        section_48: [im_string(u32(o + 48), 0, false)],
        section_52: [],
        u8_56: u8(o + 56),
        u32_60: u32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 8) ? im_interface_72_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    switch (u32(o + 12)) {
    case 4:
        u32(o + 20) ? im_interface_72_20t4(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 7:
        u32(o + 20) ? im_interface_72_20t7(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 38:
    case 106:
    case 107:
        u32(o + 20) ? im_interface_72_20t38(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    }
    switch (u8(o + 19)) {
    case 0:
        u32(o + 24) ? im_interface_72_24t0(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 1:
        u32(o + 24) ? im_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 3:
        u32(o + 24) ? im_interface_72_24t3(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 5:
        u32(o + 24) ? im_interface_72_24t5(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 6:
    case 7:
        u32(o + 24) ? im_interface_72_24t6(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 10:
        u32(o + 24) ? im_interface_72_24t10(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 12:
        u32(o + 24) ? im_interface_72_24t12(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 13:
        u32(o + 24) ? im_interface_72_24t13(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 14:
        u32(o + 24) ? im_interface_72_24t14(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 15:
        u32(o + 24) ? im_interface_72_24t15(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    }
    u32(o + 32) ? im_interface_72_32(u32(o + 32) + g.m, x[i].section_32) : 0;
    u32(o + 44) ? im_interface_72_44(u32(o + 44) + g.m, x[i].section_44) : 0;
    u32(o + 52) ? im_interface_72_52(u32(o + 52) + g.m, x[i].section_52) : 0;

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_interface_72_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
    }

}
function im_xdx_interface_72(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        section_08: [],
        u32_12: u32(o + 12),
        u16_16: u16(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        u32_36: u32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u8_60: u8(o + 60),
        u32_64: u32(o + 64),
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
    });

    u32(o + 8) ? im_interface_72_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    switch (u32(o + 12)) {
    case 4:
        u32(o + 20) ? im_interface_72_20t4(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    }
    switch (u8(o + 19)) {
    case 0:
        u32(o + 24) ? im_interface_72_24t0(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 1:
        u32(o + 24) ? im_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 3:
        u32(o + 24) ? im_interface_72_24t3(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 5:
        u32(o + 24) ? im_interface_72_24t5(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 6:
    case 7:
        u32(o + 24) ? im_interface_72_24t6(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 10:
        u32(o + 24) ? im_interface_72_24t10(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 12:
        u32(o + 24) ? im_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 13:
        u32(o + 24) ? im_interface_72_24t13(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 14:
        u32(o + 24) ? im_interface_72_24t14(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 15:
        u32(o + 24) ? im_interface_72_24t15(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    }
    for (let ii = 0; ii < u32(o + 72); ii++) {
        im_interface_72_72(u32(o + 76) + (ii * 12) + g.m, ii, x[i].section_76);
    }

}
function im_interface_72_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_interface_72_08_08(u32(o + 8) + (i * 12) + g.m, i, x[0].section_08);
    }
    // 16 bytes;

}
function im_interface_72_08_08(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) ? im_xdx_interface_72_08_08_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 4) ? im_interface_72_08_08_04t2(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 6:
        u32(o + 4) ? im_interface_72_08_08_04t6(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_xdx_interface_72_08_08_04t1(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_08_08_04t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_72_08_08_04t2_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_72_08_08_04t2_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_08_08_04t6(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_20t4(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });
    // 32 bytes;

}
function im_interface_72_20t7(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_20t38(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });
    // 16 bytes;

}
function im_interface_72_24t0(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        section_08: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
    });

    switch (u8(o + 0)) {
    case 0:
        x[0].section_04 = im_patch(g.texture_patch_ref, o + 4)
        break;
    case 1:
        x[0].section_04 = in_ml(u32(o + 4), g.models_array, im_models, g.ordered_ref.models);
        break;
    case 3:
        u32(o + 8) ? im_interface_72_24t0_08(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    }
    // 16 bytes;

}
function im_interface_72_24t0_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_11: u8(o + 11),
        u8_16: u8(o + 16),
        u16_18: u16(o + 18),
        u32_20: u32(o + 20),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_24t0_08_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }
    // 32 bytes;

}
function im_interface_72_24t0_08_04(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_interface_72_24t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [],
        section_08: [],
        section_12: [],
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u16_18: u16(o + 18),
        u16_20: u16(o + 20),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        f32_24: f32(o + 24),
    });

    switch (u8(o + 0)) {
    case 0:
        x[0].section_04 = in_ml(u32(o + 4), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);
        break;
    }
    switch (u8(o + 0)) {
    case 1:
        u32(o + 8) ? im_interface_72_24t1_08t1(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    case 3:
        u32(o + 8) ? im_interface_72_24t1_08t3(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    }
    switch (u8(o + 2)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
        break;
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.frame_multi_font_array, im_frame_multi_font, g.unordered_ref.frame_multi_font);
        break;
    }
    // 32 bytes;

}
function im_interface_72_24t1_08t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u16_10: u16(o + 10),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_24t1_08t1_04(u32(o + 4) + (i * 8) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_72_24t1_08t1_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_frame_text_00: 0,
    });

    x[i].unordered_frame_text_00 = in_ml(u32(o + 0), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);

}
function im_xdx_interface_72_24t1_08t1_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_frame_text_00: 0,
    });

    x[i].unordered_frame_text_00 = in_ml(u32(o + 0), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);

}
function im_interface_72_24t1_08t3(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });
    // 16 bytes;

}
function im_interface_72_24t3(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_24t3_04(u32(o + 4) + (i * 8) + g.m, i, x[0].section_04);
    }
    u32(o + 16) ? im_interface_72_24t3_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    // 32 bytes;

}
function im_interface_72_24t3_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_model_link_00: 0,
        unordered_sound_controls_04: 0,
    });

    x[i].unordered_model_link_00 = in_ml(u32(o + 0), g.model_link_array, im_model_link, g.unordered_ref.model_link);
    x[i].unordered_sound_controls_04 = in_ml(u32(o + 4), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

}
function im_interface_72_24t3_16(o, x) {
    x.push({
        section_08: [],
    });

    u32(o + 8) ? im_interface_72_24t3_16_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    // 16 bytes;

}
function im_interface_72_24t3_16_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_interface_72_24t5(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });
    // 16 bytes;

}
function im_interface_72_24t6(o, x) {
    x.push({
        unordered_interface_00: 0,
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 0), g.interface_array, im_interface, g.unordered_ref.interface);

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_24t6_12(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }
    // 16 bytes;

}
function im_interface_72_24t6_12(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
    });

}
function im_interface_72_24t10(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
    });
    // 16 bytes;

}
function im_interface_72_24t12(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_24t13(o, x) {
    x.push({
        u8_01: u8(o + 1),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_interface_72_24t13_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_interface_72_24t13_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    // 16 bytes;

}
function im_interface_72_24t13_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_24t13_12(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });
    // 16 bytes;

}
function im_interface_72_24t14(o, x) {
    x.push({
        u8_272: u8(o + 272),
        u8_273: u8(o + 273),
        section_276: [],
    });

    u32(o + 276) ? im_interface_72_24t14_276(u32(o + 276) + g.m, x[0].section_276) : 0;

    // 288 bytes;

}
function im_interface_72_24t14_276(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_08: u8(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_24t15(o, x) {
    x.push({
        unordered_frame_sparkler_00: 0,
    });

    x[0].unordered_frame_sparkler_00 = in_ml(u32(o + 0), g.frame_sparkler_array, im_frame_sparkler, g.unordered_ref.frame_sparkler);
    // 16 bytes;

}
function im_interface_72_32(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_32_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_interface_72_32_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_interface_72_32_20(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_interface_12(u32(o + 36) + (i * 28) + g.m, i, x[0].section_36);
    }
    // 48 bytes;

}
function im_interface_72_32_12(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

}
function im_interface_72_32_20(o, i, x) {
    x.push({
        id: gen_id(),
        u16_04: u16(o + 4),
        section_08: [],
    });

    switch (u16(o + 4)) {
    case 0:
        u32(o + 8) ? im_interface_72_32_20_08t0(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 1:
        u32(o + 8) ? im_interface_72_32_20_08t1(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    }
}
function im_interface_72_32_20_08t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_interface_72_32_20_08t1(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_interface_72_32_20_08t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_interface_72_32_20_08t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_72_32_20_08t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_72_32_20_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_72_32_20_08t1_00_04(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_32_20_08t1_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_44(o, x) {
    x.push({});
    // 16 bytes;

}
function im_interface_72_52(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_52_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_52_04(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_interface_72_52_04(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_interface_72_52_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_interface_72_52_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }
    // 48 bytes;

}
function im_interface_72_52_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_interface_72_52_28(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_interface_72_52_36(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_interface_72_72(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    u32(o + 4) ? im_interface_72_72_04(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_interface_72_72_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        unordered_sound_controls_48: 0,
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_72_04_04(u32(o + 4) + (i * 20) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_72_04_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_interface_72_72_04_12(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_interface_72_72_04_12(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_interface_72_72_04_36(u32(o + 36) + (i * 12) + g.m, i, x[0].section_36);
    }
    u32(o + 44) ? im_interface_72_72_04_44(u32(o + 44) + g.m, x[0].section_44) : 0;
    x[0].unordered_sound_controls_48 = in_ml(u32(o + 48), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    // 64 bytes;

}
function im_interface_72_72_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_interface_72_72_04_04_16(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

}
function im_interface_72_72_04_04_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_04: u32(o + 4),
        section_08: [],
    });

    switch (u32(o + 4)) {
    case 0:
        u32(o + 8) ? im_interface_72_72_04_04_16_08t0(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 3:
        x[i].section_08 = in_ml(u32(o + 8), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    }
}
function im_xdx_interface_72_72_04_04_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_72_72_04_04_16_08t0(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_interface_72_72_04_04_16_08t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u16_06: u16(o + 6),
        u8_08: u8(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_72_04_12(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_interface_72_72_04_36(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_interface_72_72_04_44(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });
    // 48 bytes;

}

function im_link(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        section_12: [im_string(u32(o + 12), 0, false)],
        u32_16: u32(o + 16),
        section_20: [im_string(u32(o + 20), 0, false)],
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_36: [im_string(u32(o + 36), 0, false)],
        section_40: [im_string(u32(o + 40), 0, false)],
        texture_44: im_patch(g.texture_patch_ref, o + 44),
        section_48: [],
        texture_52: im_patch(g.texture_patch_ref, o + 52),
        texture_56: im_patch(g.texture_patch_ref, o + 56),
        unordered_frame_font_60: 0,
        u32_64: u32(o + 64),
        section_68: [im_string(u32(o + 68), 0, false)],
        section_72: [im_string(u32(o + 72), 0, false)],
    });

    u32(o + 0) ? im_link_00(u32(o + 0) + g.m, x[i].section_00) : 0;

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_link_intro(u32(o + 8) + (ii * 16) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_link_32(u32(o + 32) + (ii * 8) + g.m, ii, x[i].section_32);
    }
    u32(o + 48) ? im_link_demo(u32(o + 48) + g.m, x[i].section_48) : 0;
    x[i].unordered_frame_font_60 = in_ml(u32(o + 60), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    return x[i].id
}
function im_xdx_link(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        section_12: [im_string(u32(o + 12), 0, false)],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        section_28: [im_string(u32(o + 28), 0, false)],
        section_32: [im_string(u32(o + 32), 0, false)],
        section_40: [],
        texture_44: im_patch(g.texture_patch_ref, o + 44),
        texture_48: im_patch(g.texture_patch_ref, o + 48),
    });

    u32(o + 0) ? im_link_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    for (let i = 0; i < u32(o + 4); i++) {
        im_xdx_link_08(u32(o + 8) + (i * 12) + g.m, i, x[0].section_08);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_xdx_link_24(u32(o + 24) + (i * 4) + g.m, i, x[0].section_24);
    }
    u32(o + 40) ? im_link_demo(u32(o + 40) + g.m, x[0].section_40) : 0;
    // 64 bytes;

}
function im_link_00(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_link_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_link_00_04(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 0) ? im_link_00_04_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    // 16 bytes;

}
function im_link_00_04_00(o, x) {
    x.push({
        section_04: [],
        u8_08: u8(o + 8),
    });

    u32(o + 4) ? im_link_00_04_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_link_00_04_00_04(o, x) {
    x.push({
        u32_20: u32(o + 20),
    });
    // 32 bytes;

}
function im_xdx_link_08(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_08: [],
    });

    u32(o + 8) ? im_link_offset_index(u32(o + 8) + g.m, x[i].section_08) : 0;

}
function im_link_intro(o, i, x) {
    let str = [null]
    if (u8(o + 0) === 0) {
        str = [im_string(u32(o + 4), 0, false)]
    }
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: str,
        section_08: [],
        section_12: [],
    });

    u32(o + 8) ? im_link_intro_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_link_offset_index(u32(o + 12) + g.m, x[i].section_12) : 0;

}
function im_link_intro_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });
    // 16 bytes;

}
function im_link_offset_index(o, x) {
    x.push({
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_xdx_link_24(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    u32(o + 0) ? im_xdx_link_24_00(u32(o + 0) + g.m, x[i].section_00) : 0;

}
function im_xdx_link_24_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_link_32_00_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_link_32(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    u32(o + 0) ? im_link_32_00(u32(o + 0) + g.m, x[i].section_00) : 0;

}
function im_link_32_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_link_32_00_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_link_32_00_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        section_08: [],
        section_12: [im_string(u32(o + 12), 0, false)],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    u32(o + 4) ? im_link_32_00_04_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    u32(o + 8) ? im_link_offset_index(u32(o + 8) + g.m, x[i].section_08) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_link_32_00_04_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_link_32_00_04_20(u32(o + 28) + (ii * 12) + g.m, ii, x[i].section_28);
    }

}
function im_link_32_00_04_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_link_offset_index(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_link_32_00_04_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u16_08: u16(o + 8),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_link_32_00_04_20_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }

}
function im_link_32_00_04_20_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_link_offset_index(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_link_demo(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 8) ? im_link_32_00(u32(o + 8) + g.m, x[0].section_08) : 0;
    // 16 bytes;

}

function im_model_link(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [im_string(u32(o + 4), 0, false)],
        unordered_model_sub_link_08: 0,
        ordered_model_animation_1_12: 0,
        ordered_model_animation_2_16: 0,
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_50: u8(o + 50),
        section_52: [],
        section_56: [],
        section_64: [],
    });

    x[i].unordered_model_sub_link_08 = in_ml(u32(o + 8), g.model_sub_link_array, im_model_sub_link, g.unordered_ref.model_sub_link);
    x[i].ordered_model_animation_1_12 = in_ml(u32(o + 12), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[i].ordered_model_animation_2_16 = in_ml(u32(o + 16), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_model_link_24(u32(o + 24) + (ii * 4) + g.m, ii, x[i].section_24, u32(o + 24) + g.m);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_model_link_32(u32(o + 32) + (ii * 8) + g.m, ii, x[i].section_32, u32(o + 32) + g.m);
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_mysterious(u32(o + 44) + (ii * 64) + g.m, ii, x[i].section_44);
    }
    u32(o + 52) ? im_model_link_52(u32(o + 52) + g.m, x[i].section_52) : 0;
    u32(o + 56) ? im_model_link_56(u32(o + 56) + g.m, x[i].section_56) : 0;
    u32(o + 64) ? im_model_link_64(u32(o + 64) + g.m, x[i].section_64) : 0;
    return x[i].id
    // 80 bytes;

}
function im_model_link_24(o, i, x, tempoffset) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
    });

    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models, tempoffset, i * 4);

}
function im_model_link_32(o, i, x, tempoffset) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
        u16_04: u16(o + 4),
    });

    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models, tempoffset, i * 8);

}
function im_model_link_52(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_model_link_56(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_model_link_64(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}

function im_model_sub_link(o, i, x) {
    x.push({
        id: gen_id(),
        ordered_model_animation_2_00: 0,
        section_08: [],
        section_16: [],
    });

    x[i].ordered_model_animation_2_00 = in_ml(u32(o + 0), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_model_link_24(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_08, u32(o + 8) + g.m);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_model_link_32(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16, u32(o + 16) + g.m);
    }
    return x[i].id
    // 32 bytes;

}

function im_mysterious(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        //check this
        u16_02: u16(o + 2),
        section_04: [],
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
    });

    switch (u8(o + 0)) {
    case 1:
        x[i].section_04 = in_ml(u32(o + 4), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
        break;
    case 2:
        x[i].section_04 = in_ml(u32(o + 4), g.strange_array, im_strange, g.unordered_ref.strange);
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 4), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    case 5:
    case 6:
        u32(o + 4) ? im_mysterious_04t5(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 7:
        u32(o + 4) ? im_mysterious_04t7(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 8:
        x[i].section_04 = in_ml(u32(o + 4), g.model_link_array, im_model_link, g.unordered_ref.model_link);
        break;
    case 9:
        x[i].section_04 = in_ml(u32(o + 4), g.mysterious_04t9_array, im_mysterious_04t9, g.unordered_ref.mysterious_04t9);
        break;
    case 10:
        u32(o + 4) ? im_mysterious_04t10(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 11:
        x[i].section_04 = in_ml(u32(o + 4), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    case 13:
        x[i].section_04 = in_ml(u32(o + 4), g.object_array, im_object, g.unordered_ref.object);
        break;
    case 16:
        u32(o + 4) ? im_mysterious_04t16(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    switch (u8(o + 0)) {
    case 8:
        u32(o + 8) ? im_mysterious_08t8(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 13:
        u32(o + 8) ? im_mysterious_08t8t13(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    }
    return x[i].id
    // 64 bytes;

}
function im_mysterious_04t5(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u32_04: u32(o + 4),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
    });

    let temp_function
    switch (u8(o + 3)) {
    case 0:
        temp_function = im_mysterious_04t5_16t0
        break;
    case 2:
        temp_function = im_mysterious_04t5_16t2
        break;
    case 3:
        temp_function = im_mysterious_04t5_16t3
        break;
    case 5:
        temp_function = im_mysterious_04t5_16t5
        break;
    }

    for (let i = 0; i < u32(o + 12); i++) {
        temp_function(u32(o + 16) + (i * 4) + g.m, i, x[0].section_16);
    }

    u32(o + 28) ? im_mysterious_04t5_28(u32(o + 28) + g.m, x[0].section_28) : 0;

    for (let i = 0; i < u32(o + 32); i++) {
        im_mysterious_04t5_36(u32(o + 36) + (i * 32) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_mysterious_04t5_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }
    for (let i = 0; i < u32(o + 48); i++) {
        im_mysterious_04t5_52(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) ? im_mysterious_04t5_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    // 64 bytes;

}
function im_mysterious_04t5_56(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_mysterious_04t5_16t0(o, i, x) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
    });

    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models, o);

}
function im_mysterious_04t5_16t2(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_mysterious_04t5_16t3(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_mysterious_04t5_16t5(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_mysterious_04t5_28(o, x) {
    x.push({
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_mysterious_04t5_36(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_mysterious_04t5_44(o, i, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_mysterious_04t5_52(o, i, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

    // 12 bytes;

}
function im_mysterious_04t7(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
    });

    u32(o + 12) ? im_mysterious_04t7_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    for (let i = 0; i < u32(o + 32); i++) {
        im_mysterious_04t7_36(u32(o + 36) + (i * 12) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_mysterious_04t7_36(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    // 64 bytes;

}
function im_mysterious_04t7_12(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

    // 16 bytes;

}
function im_mysterious_04t7_36(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_08: f32(o + 8),
    });

}

function im_mysterious_04t10(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_mysterious_04t16(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_08: [],
        section_12: [],
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        section_36: [],
    });

    u32(o + 8) ? im_mysterious_04t16_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    u32(o + 12) ? im_mysterious_04t16_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 36) ? im_mysterious_04t16_36(u32(o + 36) + g.m, x[0].section_36) : 0;

    // 48 bytes;

}
function im_mysterious_04t16_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_mysterious_04t16_12(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_mysterious_04t16_36(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_mysterious_04t16_36_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_mysterious_04t16_36_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        f32_12: f32(o + 12),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
    });

    u32(o + 4) ? im_mysterious_04t16_36_04_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 48 bytes;

}
function im_mysterious_04t16_36_04_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_mysterious_04t16_36_04_04_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_mysterious_04t16_36_04_04_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    u32(o + 4) ? im_mysterious_04t16_36_04_04_04_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_mysterious_04t16_36_04_04_04_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_mysterious_04t16_36_04_04_04_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });

    // 16 bytes;

}
function im_mysterious_04t16_36_04_04_04_12(o, x) {
    x.push({});

    // 16 bytes;

}
function im_mysterious_08t8(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_mysterious_08t8t13(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}

function im_mysterious_04t9(o, i, x) {
    x.push({
        id: gen_id(),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_08: [],
        section_12: [],
    });

    u32(o + 8) ? im_mysterious_04t9_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_mysterious_04t9_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    return x[i].id
    // 16 bytes;

}
function im_mysterious_04t9_08(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
    });

    u32(o + 8) ? im_mysterious_04t9_08_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 32 bytes;

}
function im_mysterious_04t9_08_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_mysterious_04t9_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_10: u8(o + 10),
        section_12: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_mysterious_04t9_12_04(u32(o + 4) + (i * 56) + g.m, i, x[0].section_04);
    }
    u32(o + 12) ? im_mysterious_04t9_12_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_mysterious_04t9_12_04(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u8_36: u8(o + 36),
        u8_39: u8(o + 39),
        section_44: [],
    });

    u32(o + 8) ? im_mysterious_04t9_12_04_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    u32(o + 44) ? im_mysterious_04t9_12_04_44(u32(o + 44) + g.m, x[i].section_44) : 0;

}
function im_mysterious_04t9_12_04_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_mysterious_04t9_12_04_44(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    u32(o + 8) ? im_mysterious_04t9_12_04_44_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    u32(o + 12) ? im_mysterious_04t9_12_04_44_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_mysterious_04t9_12_04_44_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_mysterious_04t9_12_04_44_12(o, x) {
    x.push({
        u8_01: u8(o + 1),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_mysterious_04t9_12_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_mysterious_04t9_12_04(u32(o + 4) + (i * 56) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}

function im_object(o, i, x) {
    x.push({
        id: gen_id(),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_11: u8(o + 11),
        section_12: [],
        ordered_model_animation_2_16: 0,
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        section_32: [],
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        unordered_unknown_00_48: 0,
        f32_52: f32(o + 52),
        u8_56: u8(o + 56),
        u8_57: u8(o + 57),
        u8_58: u8(o + 58),
        unordered_frame_text_60: 0,
        unordered_unknown_00_68: 0,
        f32_76: f32(o + 76),
        u8_84: u8(o + 84),
        u8_85: u8(o + 85),
        unordered_wtf_88: 0,
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u8_108: u8(o + 108),
        u8_109: u8(o + 109),
        u8_110: u8(o + 110),
        u8_111: u8(o + 111),
    });

    u32(o + 12) ? im_object_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    x[i].ordered_model_animation_2_16 = in_ml(u32(o + 16), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    switch (u8(o + 11)) {
    case 15:
        x[i].section_32 = in_ml(u32(o + 32), g.object_32t15_array, im_object_32t15, g.unordered_ref.object_32t15);

        // u32(o + 32) ? im_object_32t15(u32(o + 32) + g.m, x[i].section_32) : 0;
        break;
    case 16:
        u32(o + 32) ? im_object_32t16(u32(o + 32) + g.m, x[i].section_32) : 0;
        break;
    case 17:
        u32(o + 32) ? im_object_32t17(u32(o + 32) + g.m, x[i].section_32) : 0;
        break;
    case 18:
        u32(o + 32) ? im_object_32t18(u32(o + 32) + g.m, x[i].section_32) : 0;
        break;
    }
    x[i].unordered_unknown_00_48 = in_ml(u32(o + 48), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_frame_text_60 = in_ml(u32(o + 60), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);
    x[i].unordered_unknown_00_68 = in_ml(u32(o + 68), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_wtf_88 = in_ml(u32(o + 88), g.wtf_array, im_wtf, g.unordered_ref.wtf);

    for (let ii = 0; ii < u32(o + 96); ii++) {
        im_mysterious(u32(o + 100) + (ii * 64) + g.m, ii, x[i].section_100);
    }
    return x[i].id
    // 112 bytes;

}
function im_object_12(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
        section_16: [],
    });

    u32(o + 16) ? im_object_12_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_object_12_16(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_object_32t15(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        unordered_unknown_00_08: 0,
        unordered_unknown_00_12: 0,
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_object_32t15_04(u32(o + 4) + (ii * 28) + g.m, ii, x[i].section_04);
    }
    x[i].unordered_unknown_00_08 = in_ml(u32(o + 8), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_unknown_00_12 = in_ml(u32(o + 12), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    return x[i].id
    // 16 bytes;

}
function im_object_32t15_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        f32_24: f32(o + 24),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_object_32t15_04_04(u32(o + 4) + (ii * 12) + g.m, ii, x[i].section_04);
    }

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_object_32t15_04_04(u32(o + 12) + (ii * 12) + g.m, ii, x[i].section_12);
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_object_32t15_04_04(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

}
function im_object_32t15_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_um_00: 0,
        unordered_um_04: 0,
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
    });

    x[i].unordered_um_00 = in_ml(u32(o + 0), g.um_array, im_um, g.unordered_ref.um);
    x[i].unordered_um_04 = in_ml(u32(o + 4), g.um_array, im_um, g.unordered_ref.um);

}
function im_object_32t16(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_object_32t17(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_object_32t18(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 0) ? im_object_32t18_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_object_32t18_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}

function im_sound_controls(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_sound_controls_16(u32(o + 16) + (ii * 16) + g.m, ii, x[i].section_16);
    }

    return x[i].id
    // 32 bytes;

}
function im_sound_controls_16(o, i, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_sound_controls_16_04(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_04);
    }

    // 16 bytes;

}
function im_sound_controls_16_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_sound_section_00: 0,
    });

    x[i].unordered_sound_section_00 = in_ml(u32(o + 0), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);

}

function im_sound_section(o, i, x) {
    x.push({
        id: gen_id(),
        sound_00: im_patch(g.sound_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        //check this
    });

    u32(o + 8) ? im_sound_section_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    return x[i].id
    // 32 bytes;

}
function im_sound_section_08(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}

function im_strange(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        unordered_sound_controls_28: 0,
        f32_32: f32(o + 32),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_unknown(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_04);
    }

    x[i].unordered_sound_controls_28 = in_ml(u32(o + 28), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    // 48 bytes;

    return x[i].id
}

function im_um(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        u32_20: u32(o + 20),
        u8_24: u8(o + 24),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 32 bytes;

}

function im_unknown(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_unknown_00_00: 0,
    });

    x[i].unordered_unknown_00_00 = in_ml(u32(o + 0), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    return x[i].id
}

function im_unknown_00(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_unknown_00_04(u32(o + 4) + (ii * 16) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 16 bytes;

}
function im_unknown_00_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
        section_04: [],
        section_08: [],
        u32_12: u32(o + 12),
        //check this
    });

    switch (u32(o + 0)) {
    case 1:
        x[i].section_04 = in_ml(u32(o + 4), g.unknown_00_04_04t1_array, im_unknown_00_04_04t1, g.unordered_ref.unknown_00_04_04t1);
        break;
    case 2:
        x[i].section_04 = in_ml(u32(o + 4), g.unknown_00_04_04t2_array, im_unknown_00_04_04t2, g.unordered_ref.unknown_00_04_04t2);
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 4), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
        break;
    case 4:
        x[i].section_04 = in_ml(u32(o + 4), g.strange_array, im_strange, g.unordered_ref.strange);
        break;
    case 5:
        x[i].section_04 = in_ml(u32(o + 4), g.unknown_00_04_04t5_array, im_unknown_00_04_04t5, g.unordered_ref.unknown_00_04_04t5);
        break;
    case 6:
        x[i].section_04 = in_ml(u32(o + 4), g.idk_array, im_idk, g.unordered_ref.idk);
        break;
    case 26:
        x[i].section_04 = in_ml(u32(o + 4), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    case 29:
        u32(o + 4) ? im_unknown_00_04_04t29(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 31:
        x[i].section_04 = in_ml(u32(o + 4), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    }
    switch (u32(o + 0)) {
    case 1:
        u32(o + 8) ? im_unknown_00_04_08t1(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 2:
        u32(o + 8) ? im_unknown_00_04_08t2(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 3:
        u32(o + 8) ? im_unknown_00_04_08t3(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 4:
        u32(o + 8) ? im_unknown_00_04_08t4(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 5:
        u32(o + 8) ? im_unknown_00_04_08t5(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 6:
        u32(o + 8) ? im_unknown_00_04_08t6(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 26:
        u32(o + 8) ? im_unknown_00_04_08t26(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 29:
        u32(o + 8) ? im_unknown_00_04_08t29(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 31:
        u32(o + 8) ? im_unknown_00_04_08t31(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 32:
        u32(o + 8) ? im_unknown_00_04_08t32(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 34:
        u32(o + 8) ? im_unknown_00_04_08t34(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    }
}

function im_unknown_00_04_04t2(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        unordered_unknown_00_32: 0,
        f32_40: f32(o + 40),
        unordered_wtf_48: 0,
        f32_52: f32(o + 52),
        unordered_unknown_00_56: 0,
        unordered_unknown_00_68: 0,
        u8_72: u8(o + 72),
        unordered_unknown_00_76: 0,
        section_80: [],
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u32_108: u32(o + 108),
    });

    x[i].unordered_unknown_00_32 = in_ml(u32(o + 32), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_wtf_48 = in_ml(u32(o + 48), g.wtf_array, im_wtf, g.unordered_ref.wtf);
    x[i].unordered_unknown_00_56 = in_ml(u32(o + 56), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_unknown_00_68 = in_ml(u32(o + 68), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_unknown_00_76 = in_ml(u32(o + 76), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    u32(o + 80) ? im_unknown_00_04_04t2_80(u32(o + 80) + g.m, x[i].section_80) : 0;

    for (let ii = 0; ii < u32(o + 96); ii++) {
        im_mysterious(u32(o + 100) + (ii * 64) + g.m, ii, x[i].section_100);
    }
    return x[i].id
    // 112 bytes;

}
function im_unknown_00_04_04t2_80(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_unknown_00_04_04t29(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_unknown_00_04_04t29_04(u32(o + 4) + (i * 48) + g.m, i, x[0].section_04);
    }

    // 32 bytes;

}
function im_unknown_00_04_04t29_04(o, i, x) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models);

}
function im_unknown_00_04_08t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) ? im_unknown_00_04_08t1_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    // offset? 
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) ? im_unknown_00_04_08t1_52t1(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    case 2:
        u32(o + 52) ? im_unknown_00_04_08t1_52t2(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    }
    // 64 bytes;

}
function im_unknown_00_04_08t1_48(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t1_52t1(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t1_52t2(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        section_12: [],
    });

    switch (u8(o + 8)) {
    case 0:
        u32(o + 12) ? im_unknown_00_04_08t1_52t2_12t0(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1:
        u32(o + 12) ? im_unknown_00_04_08t1_52t2_12t1(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 2:
        u32(o + 12) ? im_unknown_00_04_08t1_52t2_12t2(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    // 16 bytes;

}
function im_unknown_00_04_08t1_52t2_12t0(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_unknown_00_04_08t1_52t2_12t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_unknown_00_04_08t1_52t2_12t2(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        //check this
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) ? im_unknown_00_04_08t2_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) ? im_unknown_00_04_08t2_52t1(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    case 2:
        u32(o + 52) ? im_unknown_00_04_08t2_52t2(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    }
    // 64 bytes;

}
function im_unknown_00_04_08t2_48(o, x) {
    x.push({
        f32_00: f32(o + 0),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t2_52t1(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t2_52t2(o, x) {
    x.push({
        f32_00: f32(o + 0),
        u8_08: u8(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_unknown_00_04_08t2_52t2_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_unknown_00_04_08t2_52t2_12(o, x) {
    x.push({
        f32_00: f32(o + 0),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t3(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_40: u8(o + 40),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    switch (u8(o + 40)) {
    case 2:
        u32(o + 48) ? im_unknown_00_04_08t3_48(u32(o + 48) + g.m, x[0].section_48) : 0;
        break;
    }
    u32(o + 52) ? im_unknown_00_04_08t3_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_unknown_00_04_08t3_48(o, x) {
    x.push({
        f32_00: f32(o + 0),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t3_52(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t4(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 64 bytes;

}
function im_unknown_00_04_08t5(o, x) {
    x.push({
        u8_01: u8(o + 1),
        section_04: [],
    });

    u32(o + 4) ? im_unknown_00_04_08t5_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_unknown_00_04_08t5_04(o, x) {
    x.push({});

    // 32 bytes;

}
function im_unknown_00_04_08t6(o, x) {
    x.push({});

    // 16 bytes;

}
function im_unknown_00_04_08t26(o, x) {
    x.push({});

    // 16 bytes;

}
function im_unknown_00_04_08t29(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_42: u8(o + 42),
        section_52: [],
    });

    u32(o + 52) ? im_unknown_00_04_08t29_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_unknown_00_04_08t29_52(o, x) {
    x.push({
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t31(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_08: u32(o + 8),
        f32_24: f32(o + 24),
        u8_42: u8(o + 42),
        section_52: [],
    });

    u32(o + 52) ? im_unknown_00_04_08t31_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_unknown_00_04_08t31_52(o, x) {
    x.push({
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t32(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        f32_04: f32(o + 4),
        section_08: [im_string(u32(o + 8), 0, false)],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t34(o, x) {
    x.push({
        u8_00: u8(o + 0),
        unordered_interface_04: 0,
        unordered_interface_08: 0,
        unordered_interface_12: 0,
        section_16: [],
    });

    x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_08 = in_ml(u32(o + 8), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_12 = in_ml(u32(o + 12), g.interface_array, im_interface, g.unordered_ref.interface);
    u32(o + 16) ? im_unknown_00_04_08t34_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_unknown_00_04_08t34_16(o, x) {
    x.push({});

    // 16 bytes;

}

function im_unknown_00_04_04t1(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    switch (u8(o + 0)) {
    case 0:
        u32(o + 4) ? im_unknown_00_04_04t1_04t0(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1:
        u32(o + 4) ? im_unknown_00_04_04t1_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 4) ? im_unknown_00_04_04t1_04t2(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_unknown_00_04_04t1_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_unknown(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 48 bytes;

}
function im_unknown_00_04_04t1_04t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
        u32_44: u32(o + 44),
        section_48: [],
        u8_52: u8(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_unknown_00_04_04t1_04t0_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04, u32(o + 4) + g.m);
    }

    for (let i = 0; i < u32(o + 36); i++) {
        im_unknown_00_04_04t1_04t0_40(u32(o + 40) + (i * 32) + g.m, i, x[0].section_40);
    }
    // u32(o + 48) ? im_unknown_00_04_04t1_04t0_48(u32(o + 48) + g.m, x[0].section_48) : 0;

    for (let i = 0; i < u32(o + 44); i++) {
        im_unknown_00_04_04t1_04t0_48(u32(o + 48) + (i * 16) + g.m, i, x[0].section_48);
    }

    u32(o + 56) ? im_unknown_00_04_04t1_04t0_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    for (let i = 0; i < u32(o + 60); i++) {
        im_unknown_00_04_04t1_04t0_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
    }

    // 80 bytes;

}
function im_unknown_00_04_04t1_04t0_04(o, i, x, tempoffset) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
    });
    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models, tempoffset, i * 4);

}
function im_unknown_00_04_04t1_04t0_40(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_unknown_00_04_04t1_04t0_48(o, i, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}
function im_unknown_00_04_04t1_04t0_56(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
    });

    // 32 bytes;

}
function im_unknown_00_04_04t1_04t0_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_unknown_00_04_04t1_04t0_64_04(u32(o + 4) + (ii * 20) + g.m, ii, x[i].section_04);
    }

}
function im_unknown_00_04_04t1_04t0_64_04(o, i, x) {
    x.push({
        id: gen_id(),
    });

}
function im_unknown_00_04_04t1_04t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_unknown_00_04_04t1_04t1_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_unknown_00_04_04t1_04t1_44(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_unknown_00_04_04t1_04t1_44(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) ? im_unknown_00_04_04t1_04t1_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    for (let i = 0; i < u32(o + 60); i++) {
        im_unknown_00_04_04t1_04t1_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
    }

    // 80 bytes;

}
function im_unknown_00_04_04t1_04t1_04(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_unknown_00_04_04t1_04t1_44(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_unknown_00_04_04t1_04t1_56(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_04t1_04t1_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_unknown_00_04_04t1_04t1_64_04(u32(o + 4) + (ii * 20) + g.m, ii, x[i].section_04);
    }

}
function im_unknown_00_04_04t1_04t1_64_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

}
function im_unknown_00_04_04t1_04t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u8_24: u8(o + 24),
        u8_26: u8(o + 26),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_unknown_00_04_04t1_04t2_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_unknown_00_04_04t1_04t2_20(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_unknown_00_04_04t1_04t2_04(o, i, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_08: f32(o + 8),
    });

    // 12 bytes;

}
function im_unknown_00_04_04t1_04t2_20(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

}
function im_unknown_00_04_04t1_24(o, i, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

    // 12 bytes;

}
function im_unknown_00_04_04t1_32(o, x) {
    x.push({});

    // 16 bytes;

}

function im_unknown_00_04_04t5(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        section_36: [],
        u8_40: u8(o + 40),
    });

    u32(o + 4) ? im_unknown_00_04_04t5_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    // offset? 
    u32(o + 12) ? im_unknown_00_04_04t5_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 20) ? im_unknown_00_04_04t5_20(u32(o + 20) + g.m, x[i].section_20) : 0;
    u32(o + 28) ? im_unknown_00_04_04t5_28(u32(o + 28) + g.m, x[i].section_28) : 0;
    u32(o + 36) ? im_unknown_00_04_04t5_36(u32(o + 36) + g.m, x[i].section_36) : 0;
    return x[i].id
    // 48 bytes;

}
function im_unknown_00_04_04t5_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        //check this
        u8_09: u8(o + 9),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    switch (u8(o + 8)) {
    case 103:
        u32(o + 12) ? im_unknown_00_04_04t5_04_12t103(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 105:
        u32(o + 12) ? im_unknown_00_04_04t5_04_12t105(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        im_unknown_00_04_04t5_04_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_mysterious(u32(o + 32) + (i * 64) + g.m, i, x[0].section_32);
    }

    // 48 bytes;

}
function im_unknown_00_04_04t5_04_12t103(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u32_12: u32(o + 12),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_unknown_00_04_04t5_04_12t105(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
function im_unknown_00_04_04t5_04_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
    });

}
function im_unknown_00_04_04t5_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_unknown_00_04_04t5_12_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_unknown_00_04_04t5_12_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
    });

}
function im_unknown_00_04_04t5_20(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_unknown_00_04_04t5_20_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_unknown_00_04_04t5_20_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_08: f32(o + 8),
    });

}
function im_unknown_00_04_04t5_28(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_unknown_00_04_04t5_28_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_unknown_00_04_04t5_28_04(o, x) {
    x.push({
        unordered_unknown_00_04_04t5_28_04_00_00: 0,
    });

    x[0].unordered_unknown_00_04_04t5_28_04_00_00 = in_ml(u32(o + 0), g.unknown_00_04_04t5_28_04_00_array, im_unknown_00_04_04t5_28_04_00, g.unordered_ref.unknown_00_04_04t5_28_04_00);

    // 16 bytes;

}

// function im_unknown_00_04_04t5_28_04_00(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         section_04: [],
//         u32_08: u32(o + 8),
//     });

//     switch (u8(o + 0)) {
//     case 1:
//         u32(o + 4) ? im_unknown_00_04_04t5_28_04_00_04t1(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     case 2:
//         u32(o + 4) ? im_unknown_00_04_04t5_28_04_00_04t2(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     }
//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00_04t1(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         u32_04: u32(o + 4),
//         u32_08: u32(o + 8),
//     });

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00_04t2(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         u8_04: u8(o + 4),
//     });

//     // 16 bytes;

// }
function im_unknown_00_04_04t5_36(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}

function im_unknown_00_04_04t5_28_04_00(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) ? im_unknown_00_04_04t5_28_04_00_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 4) ? im_unknown_00_04_04t5_28_04_00_04t2(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    return x[i].id
    // 16 bytes;

}
function im_unknown_00_04_04t5_28_04_00_04t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_unknown_00_04_04t5_28_04_00_04t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
    });

    // 16 bytes;

}

// function im_var(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_11: u8(o + 11),
//         section_140: [im_string(u32(o + 140), 0, false)],
//         u32_144: u32(o + 144),
//         section_148: [],
//         u32_152: u32(o + 152),
//         //check this
//         section_164: [],
//         section_168: [],
//     });

//     u32(o + 148) ? im_var_148(u32(o + 148) + g.m, x[i].section_148) : 0;
//     u32(o + 164) ? im_var_164(u32(o + 164) + g.m, x[i].section_164) : 0;
//     u32(o + 168) ? im_var_168(u32(o + 168) + g.m, x[i].section_168) : 0;
//     return x[i].id
// }
// function im_var_148(o, x) {
//     x.push({
//         unordered_var_00: 0,
//     });

//     x[0].unordered_var_00 = in_ml(u32(o + 0), g.var_array, im_var, g.unordered_ref.var);

// }
// function im_var_164(o, x) {
//     x.push({
//         u32_08: u32(o + 8),
//         //amount?
//         section_12: [],
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//     });

//     for (let i = 0; i < u32(o + 8); i++) {
//         im_var_164_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
//     }

//     for (let i = 0; i < u32(o + 16); i++) {
//         im_var_164_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
//     }

// }
// function im_var_164_12(o, i, x) {
//     x.push({
//         id: gen_id(),
//         section_00: [im_string(u32(o + 0), 0, false)],
//         u32_04: u32(o + 4),
//         u32_08: u32(o + 8),
//         //check this
//         section_12: [],
//         u32_16: u32(o + 16),
//         u32_20: u32(o + 20),
//     });

//     switch (u32(o + 4)) {
//     case 1:
//         u32(o + 12) ? im_var_164_12_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 2:
//         u32(o + 12) ? im_var_164_12_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 5:
//         u32(o + 12) ? im_var_164_12_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 6:
//         u32(o + 12) ? im_var_164_12_12t6(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 7:
//         u32(o + 12) ? im_var_164_12_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 8:
//         u32(o + 12) ? im_var_164_12_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 14:
//         u32(o + 12) ? im_var_164_12_12t14(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 15:
//         u32(o + 12) ? im_var_164_12_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 16:
//         u32(o + 12) ? im_var_164_12_12t16(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 24:
//         u32(o + 12) ? im_var_164_12_12t24(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     }
// }
// function im_var_164_12_12t1(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//     });

//     u32(o + 0) ? im_var_164_12_12t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_12_12t1_00(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//         u8_06: u8(o + 6),
//     });

//     u32(o + 0) ? im_var_164_12_12t1_00_00(u32(o + 0) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_12_12t1_00_00(o, x) {
//     x.push({
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_12_12t2(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         section_04: [],
//     });

//     switch (u32(o + 0)) {
//     case 1:
//         u32(o + 4) ? im_var_164_12_12t2_04t1(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     case 4:
//     case 5:
//     case 6:
//     case 9:
//     case 11:
//     case 19:
//         u32(o + 4) ? im_var_164_12_12t2_04t4(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     case 7:
//         u32(o + 4) ? im_var_164_12_12t2_04t7(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     case 8:
//         u32(o + 4) ? im_var_164_12_12t2_04t8(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     case 16:
//         u32(o + 4) ? im_var_164_12_12t2_04t16(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     }
// }
// function im_var_164_12_12t2_04t1(o, x) {
//     x.push({
//         u8_01: u8(o + 1),
//         u8_02: u8(o + 2),
//         f32_08: f32(o + 8),
//         section_12: [],
//         section_16: [],
//         section_20: [],
//         u32_24: u32(o + 24),
//         f32_28: f32(o + 28),
//     });

//     u32(o + 12) ? im_var_164_12_12t2_04t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;
//     u32(o + 16) ? im_var_164_12_12t2_04t1_16(u32(o + 16) + g.m, x[0].section_16) : 0;
//     u32(o + 20) ? im_var_164_12_12t2_04t1_16(u32(o + 20) + g.m, x[0].section_20) : 0;

// }
// function im_var_164_12_12t2_04t1_12(o, x) {
//     x.push({
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//         f32_08: f32(o + 8),
//     });

// }
// function im_var_164_12_12t2_04t1_16(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//     });

//     switch (u8(o + 4)) {
//     case 1:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
//         break;
//     case 10:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
//         break;
//     case 11:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t11_array, im_world_20_12t11, g.unordered_ref.world_20_12t11);
//         break;
//     }
// }
// function im_var_164_12_12t2_04t4(o, x) {
//     x.push({
//         u8_01: u8(o + 1),
//         u8_03: u8(o + 3),
//         f32_04: f32(o + 4),
//         u32_08: u32(o + 8),
//         section_16: [],
//     });

//     u32(o + 16) ? im_var_164_12_12t2_04t4_16(u32(o + 16) + g.m, x[0].section_16) : 0;

// }
// function im_var_164_12_12t2_04t4_16(o, x) {
//     x.push({
//         section_00: [],
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

//     switch (u8(o + 8)) {
//     case 1 - 1:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
//         break;
//     case 1 - 8:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);
//         break;
//     case 1 - 10:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
//         break;
//     case 1 - 13:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t13_array, im_world_20_12t13, g.unordered_ref.world_20_12t13);
//         break;
//     case 1 - 14:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t14_array, im_world_20_12t14, g.unordered_ref.world_20_12t14);
//         break;
//     case 1 - 15:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t15_array, im_world_20_12t15, g.unordered_ref.world_20_12t15);
//         break;
//     }
// }
// function im_var_164_12_12t2_04t7(o, x) {
//     x.push({
//         u8_03: u8(o + 3),
//         u32_12: u32(o + 12),
//     });

// }
// function im_var_164_12_12t2_04t8(o, x) {
//     x.push({
//         u8_03: u8(o + 3),
//         section_16: [],
//     });

//     u32(o + 16) ? im_var_164_12_12t2_04t8_16(u32(o + 16) + g.m, x[0].section_16) : 0;

// }
// function im_var_164_12_12t2_04t8_16(o, x) {
//     x.push({
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_12_12t2_04t16(o, x) {
//     x.push({
//         u8_22: u8(o + 22),
//         u8_23: u8(o + 23),
//         unordered_flag_24: 0,
//     });

//     x[0].unordered_flag_24 = in_ml(u32(o + 24), g.flag_array, im_flag, g.unordered_ref.flag);

// }
// function im_var_164_12_12t5(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         section_04: [],
//     });

//     u32(o + 4) ? im_var_164_12_12t5_04(u32(o + 4) + g.m, x[0].section_04) : 0;

// }
// function im_var_164_12_12t5_04(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         section_08: [],
//     });

//     u32(o + 8) ? im_var_164_12_12t5_04_08(u32(o + 8) + g.m, x[0].section_08) : 0;

// }
// function im_var_164_12_12t5_04_08(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//     });

// }
// function im_var_164_12_12t6(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//     });

//     switch (u8(o + 4)) {
//     case 1:
//         u32(o + 0) ? im_var_164_12_12t6_00t1(u32(o + 0) + g.m, x[0].section_00) : 0;
//         break;
//     case 2:
//         u32(o + 0) ? im_var_164_12_12t6_00t2(u32(o + 0) + g.m, x[0].section_00) : 0;
//         break;
//     }
// }
// function im_var_164_12_12t6_00t1(o, x) {
//     x.push({
//         unordered_interface_00: 0,
//         u8_05: u8(o + 5),
//         section_08: [],
//     });

//     x[0].unordered_interface_00 = in_ml(u32(o + 0), g.interface_array, im_interface, g.unordered_ref.interface);
//     u32(o + 8) ? im_var_164_12_12t6_00t1_08(u32(o + 8) + g.m, x[0].section_08) : 0;

// }
// function im_var_164_12_12t6_00t1_08(o, x) {
//     x.push({});

// }
// function im_var_164_12_12t6_00t2(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         unordered_interface_04: 0,
//     });

//     x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);

// }
// function im_var_164_12_12t7(o, x) {
//     x.push({
//         section_00: [],
//         unordered_object_04: 0,
//         u8_08: u8(o + 8),
//         u8_09: u8(o + 9),
//         u8_10: u8(o + 10),
//     });

//     u32(o + 0) ? im_var_164_12_12t7_00(u32(o + 0) + g.m, x[0].section_00) : 0;
//     x[0].unordered_object_04 = in_ml(u32(o + 4), g.object_array, im_object, g.unordered_ref.object);

// }
// function im_var_164_12_12t7_00(o, x) {
//     x.push({
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_12_12t8(o, x) {
//     x.push({
//         section_00: [],
//         section_04: [],
//         u8_08: u8(o + 8),
//         u8_09: u8(o + 9),
//         u8_10: u8(o + 10),
//     });

//     switch (u8(o + 8)) {
//     case 1:
//         x[0].section_00 = in_ml(u32(o + 0), g.flag_array, im_flag, g.unordered_ref.flag);
//         break;
//     case 2:
//         u32(o + 0) ? im_var_164_12_12t8_00t2(u32(o + 0) + g.m, x[0].section_00) : 0;
//         break;
//     }

//     switch (u8(o + 10)) {
//     case 0:
//         x[0].section_04 = f32(o + 4);
//         break;
//     case 2:
//         x[0].section_04 = in_ml(u32(o + 4), g.flag_array, im_flag, g.unordered_ref.flag);
//         break;
//     case 3:
//         u32(o + 4) ? im_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04) : 0;
//         break;
//     }

// }
// function im_var_164_12_12t8_00t2(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         section_04: [],
//         u32_08: u32(o + 8),
//         section_12: [],
//     });

//     u32(o + 4) ? im_var_164_12_12t8_00t2_04(u32(o + 4) + g.m, x[0].section_04) : 0;
//     u32(o + 12) ? im_var_164_12_12t8_00t2_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_12_12t8_00t2_04(o, x) {
//     x.push({
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_12_12t8_00t2_12(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         f32_04: f32(o + 4),
//         f32_12: f32(o + 12),
//     });

// }
// function im_var_164_12_12t8_04t3(o, x) {
//     x.push({
//         u32_08: u32(o + 8),
//         section_12: [],
//     });

//     u32(o + 12) ? im_var_164_12_12t8_04t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_12_12t8_04t3_12(o, x) {
//     x.push({});

// }
// function im_var_164_12_12t14(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//         unordered_world_20_12t4_08: 0,
//     });

//     u32(o + 0) ? im_var_164_12_12t14_00(u32(o + 0) + g.m, x[0].section_00) : 0;
//     x[0].unordered_world_20_12t4_08 = in_ml(u32(o + 8), g.world_20_12t4_array, im_world_20_12t4, g.unordered_ref.world_20_12t4);

// }
// function im_var_164_12_12t14_00(o, x) {
//     x.push({
//         section_00: [],
//         u8_08: u8(o + 8),
//     });

//     switch (u8(o + 8)) {
//     case 1:
//         x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t0_array, im_world_20_12t0, g.unordered_ref.world_20_12t0);
//         break;
//     }
// }
// function im_var_164_12_12t15(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         //check this
//     });

// }
// function im_var_164_12_12t16(o, x) {
//     x.push({
//         unordered_var_00: 0,
//         u32_04: u32(o + 4),
//     });

//     x[0].unordered_var_00 = in_ml(u32(o + 0), g.var_array, im_var, g.unordered_ref.var);

// }
// function im_var_164_12_12t24(o, x) {
//     x.push({
//         unordered_unknown_00_00: 0,
//         section_04: [],
//     });

//     x[0].unordered_unknown_00_00 = in_ml(u32(o + 0), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
//     u32(o + 4) ? im_var_164_12_12t24_04(u32(o + 4) + g.m, x[0].section_04) : 0;

// }
// function im_var_164_12_12t24_04(o, x) {
//     x.push({
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 0),
//         section_04: [],
//     });

//     u32(o + 4) ? im_var_164_20_04(u32(o + 4) + g.m, x[i].section_04, u32(o + 0)) : 0;

// }
// function im_var_164_20_04(o, x, t) {
//     x.push({
//         section_08: [im_string(u32(o + 8), 0, false)],
//         section_12: [],
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//         u32_24: u32(o + 24),
//         //amount?
//         section_28: [],
//     });

//     switch (t) {
//     case 1604:
//         u32(o + 12) ? im_var_164_20_04_12t1604(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1608:
//         u32(o + 12) ? im_var_164_20_04_12t1608(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1618:
//         u32(o + 12) ? im_var_164_20_04_12t1618(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1620:
//         u32(o + 12) ? im_var_164_20_04_12t1620(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1636:
//         u32(o + 12) ? im_var_164_20_04_12t1636(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     }
//     for (let i = 0; i < u32(o + 16); i++) {
//         im_var_164_20_04_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
//     }

//     for (let i = 0; i < u32(o + 24); i++) {
//         im_var_164_12(u32(o + 28) + (i * 24) + g.m, i, x[0].section_28);
//     }

// }
// function im_var_164_20_04_12t1604(o, x) {
//     x.push({});

// }
// function im_var_164_20_04_12t1608(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         unordered_interface_04: 0,
//         unordered_world_20_12t1_08: 0,
//     });

//     x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
//     x[0].unordered_world_20_12t1_08 = in_ml(u32(o + 8), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);

// }
// function im_var_164_20_04_12t1618(o, x) {
//     x.push({
//         section_00: [],
//         f32_04: f32(o + 4),
//         u8_08: u8(o + 8),
//         u8_09: u8(o + 9),
//         u8_10: u8(o + 10),
//     });

//     switch (u8(o + 8)) {
//     case 0:
//         x[0].section_00 = in_ml(u32(o + 0), g.flag_array, im_flag, g.unordered_ref.flag);
//         break;
//     case 1:
//         u32(o + 0) ? im_var_164_20_04_12t1618_00t1(u32(o + 0) + g.m, x[0].section_00) : 0;
//         break;
//     }
// }
// function im_var_164_20_04_12t1618_00t1(o, x) {
//     x.push({
//         u32_08: u32(o + 8),
//         section_12: [],
//     });

//     u32(o + 12) ? im_var_164_20_04_12t1618_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_20_04_12t1618_00t1_12(o, x) {
//     x.push({
//         f32_04: f32(o + 4),
//         f32_12: f32(o + 12),
//     });

// }
// function im_var_164_20_04_12t1620(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//         u8_05: u8(o + 5),
//         unordered_world_20_12t8_08: 0,
//     });

//     u32(o + 0) ? im_var_164_20_04_12t1620_00(u32(o + 0) + g.m, x[0].section_00) : 0;
//     x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 8), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

// }
// function im_var_164_20_04_12t1620_00(o, x) {
//     x.push({
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_20_04_12t1636(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 4),
//         u8_05: u8(o + 5),
//         u8_06: u8(o + 6),
//     });

//     u32(o + 0) ? im_var_164_20_04_12t1636_00(u32(o + 0) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_20_04_12t1636_00(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_20_04_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 0),
//         section_04: [im_string(u32(o + 4), 0, false)],
//         section_08: [],
//     });

//     switch (u32(o + 0)) {
//     case 5:
//         u32(o + 8) ? im_var_164_20_04_20_08t5(u32(o + 8) + g.m, x[i].section_08) : 0;
//         break;
//     case 6:
//         u32(o + 8) ? im_var_164_20_04_20_08t6(u32(o + 8) + g.m, x[i].section_08) : 0;
//         break;
//     }
// }
// function im_var_164_20_04_20_08t5(o, x) {
//     x.push({
//         section_00: [],
//         f32_04: f32(o + 4),
//         u8_08: u8(o + 8),
//         u8_09: u8(o + 9),
//         u8_10: u8(o + 10),
//     });

//     u32(o + 0) ? im_var_164_20_04_20_08t5_00t1(u32(o + 0) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_20_04_20_08t5_00t1(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         section_04: [],
//         u32_08: u32(o + 8),
//         section_12: [],
//     });

//     u32(o + 4) ? im_var_164_20_04_20_08t5_00t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
//     u32(o + 12) ? im_var_164_20_04_20_08t5_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_20_04_20_08t5_00t1_04(o, x) {
//     x.push({
//         u32_04: u32(o + 4),
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_164_20_04_20_08t5_00t1_12(o, x) {
//     x.push({
//         u8_00: u8(o + 0),
//         f32_04: f32(o + 4),
//         f32_12: f32(o + 12),
//     });

// }
// function im_var_164_20_04_20_08t6(o, x) {
//     x.push({
//         section_00: [],
//         u8_05: u8(o + 5),
//         unordered_world_20_12t8_08: 0,
//     });

//     u32(o + 0) ? im_var_164_20_04_20_08t6_00(u32(o + 0) + g.m, x[0].section_00) : 0;
//     x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 8), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

// }
// function im_var_164_20_04_20_08t6_00(o, x) {
//     x.push({
//         u8_08: u8(o + 8),
//     });

// }
// function im_var_168(o, x) {
//     x.push({
//         u32_04: u32(o + 4),
//         //amount?
//         section_08: [],
//     });

//     for (let i = 0; i < u32(o + 4); i++) {
//         im_var_164_12(u32(o + 8) + (i * 24) + g.m, i, x[0].section_08);
//     }

// }

function im_var(o, i, x) {
    x.push({
        id: gen_id(),
        u8_11: u8(o + 11),
        section_140: [im_string(u32(o + 140), 0, false)],
        u32_144: u32(o + 144),
        section_148: [],
        section_152: [im_string(u32(o + 152), 0, false)],
        //check this
        section_164: [],
        section_168: [],
    });

    u32(o + 148) ? im_var_148(u32(o + 148) + g.m, x[i].section_148) : 0;
    u32(o + 164) ? im_var_164(u32(o + 164) + g.m, x[i].section_164) : 0;
    u32(o + 168) ? im_var_168(u32(o + 168) + g.m, x[i].section_168) : 0;
    return x[i].id
    // 176 bytes;

}
function im_var_148(o, x) {
    x.push({
        unordered_var_00: 0,
    });

    x[0].unordered_var_00 = in_ml(u32(o + 0), g.var_array, im_var, g.unordered_ref.var);

    // 16 bytes;

}
function im_var_164(o, x) {
    x.push({
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_var_164_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_var_164_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_var_164_12(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
        section_08: [im_string(u32(o + 8), 0, false)],
        //check this
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    switch (u32(o + 4)) {
    case 1:
        u32(o + 12) ? im_var_164_12_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 2:
        u32(o + 12) ? im_var_164_12_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_var_164_12_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 6:
        u32(o + 12) ? im_var_164_12_12t6(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_var_164_12_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_var_164_12_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 14:
        u32(o + 12) ? im_var_164_12_12t14(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_var_164_12_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 16:
        u32(o + 12) ? im_var_164_12_12t16(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 24:
        u32(o + 12) ? im_var_164_12_12t24(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_var_164_12_12t1(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
    });

    u32(o + 0) ? im_var_164_12_12t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_var_164_12_12t1_00(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        u8_06: u8(o + 6),
    });

    u32(o + 0) ? im_var_164_12_12t1_00_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    // 32 bytes;

}
function im_var_164_12_12t1_00_00(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_12_12t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 1:
        u32(o + 4) ? im_var_164_12_12t2_04t1(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        u32(o + 4) ? im_var_164_12_12t2_04t4(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    case 7:
        u32(o + 4) ? im_var_164_12_12t2_04t7(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    case 8:
        u32(o + 4) ? im_var_164_12_12t2_04t8(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    case 16:
        u32(o + 4) ? im_var_164_12_12t2_04t16(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t2_04t1(o, x) {
    x.push({
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        f32_08: f32(o + 8),
        section_12: [],
        section_16: [],
        section_20: [],
        u32_24: u32(o + 24),
        f32_28: f32(o + 28),
    });

    u32(o + 12) ? im_var_164_12_12t2_04t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 16) ? im_var_164_12_12t2_04t1_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    u32(o + 20) ? im_var_164_12_12t2_04t1_16(u32(o + 20) + g.m, x[0].section_20) : 0;

    // 32 bytes;

}
function im_var_164_12_12t2_04t1_12(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_var_164_12_12t2_04t1_16(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    switch (u8(o + 4)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
        break;
    case 10:
        x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
        break;
    case 11:
        x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t11_array, im_world_20_12t11, g.unordered_ref.world_20_12t11);
        break;
    }
    // 32 bytes;

}
function im_var_164_12_12t2_04t4(o, x) {
    x.push({
        u8_01: u8(o + 1),
        u8_03: u8(o + 3),
        f32_04: f32(o + 4),
        u32_08: u32(o + 8),
        section_16: [],
    });

    u32(o + 16) ? im_var_164_12_12t2_04t4_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_var_164_12_12t2_04t4_16(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 1:
            x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
            break;
        case 8:
            x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);
            break;
        case 10:
            x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
            break;
        case 13:
            x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t13_array, im_world_20_12t13, g.unordered_ref.world_20_12t13);
            break;
        case 14:
            x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t14_array, im_world_20_12t14, g.unordered_ref.world_20_12t14);
            break;
        case 15:
            x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t15_array, im_world_20_12t15, g.unordered_ref.world_20_12t15);
            break;
        }
        break
    case 2:
        x[0].section_00 = u32(o + 0)
        break
    }

    // switch (u8(o + 8)) {
    // case 1 - 1:
    //     x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
    //     break;
    // case 1 - 8:
    //     x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);
    //     break;
    // case 1 - 10:
    //     x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
    //     break;
    // case 1 - 13:
    //     x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t13_array, im_world_20_12t13, g.unordered_ref.world_20_12t13);
    //     break;
    // case 1 - 14:
    //     x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t14_array, im_world_20_12t14, g.unordered_ref.world_20_12t14);
    //     break;
    // case 1 - 15:
    //     x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t15_array, im_world_20_12t15, g.unordered_ref.world_20_12t15);
    //     break;
    // }
    // 16 bytes;

}
function im_var_164_12_12t2_04t7(o, x) {
    x.push({
        u8_03: u8(o + 3),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_12_12t2_04t8(o, x) {
    x.push({
        u8_03: u8(o + 3),
        section_16: [],
    });

    u32(o + 16) ? im_var_164_12_12t2_04t8_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_var_164_12_12t2_04t8_16(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_12_12t2_04t16(o, x) {
    x.push({
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        unordered_flag_24: 0,
    });

    x[0].unordered_flag_24 = in_ml(u32(o + 24), g.flag_array, im_flag, g.unordered_ref.flag);

    // 32 bytes;

}
function im_var_164_12_12t5(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_var_164_12_12t5_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_var_164_12_12t5_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_08: [],
    });

    u32(o + 8) ? im_var_164_12_12t5_04_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_var_164_12_12t5_04_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_var_164_12_12t6(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 0) ? im_var_164_12_12t6_00t1(u32(o + 0) + g.m, x[0].section_00) : 0;
        break;
    case 2:
        u32(o + 0) ? im_var_164_12_12t6_00t2(u32(o + 0) + g.m, x[0].section_00) : 0;
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t6_00t1(o, x) {
    x.push({
        unordered_interface_00: 0,
        u8_05: u8(o + 5),
        section_08: [],
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 0), g.interface_array, im_interface, g.unordered_ref.interface);
    u32(o + 8) ? im_var_164_12_12t6_00t1_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_var_164_12_12t6_00t1_08(o, x) {
    x.push({});

    // 16 bytes;

}
function im_var_164_12_12t6_00t2(o, x) {
    x.push({
        u8_00: u8(o + 0),
        unordered_interface_04: 0,
    });

    x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);

    // 16 bytes;

}
function im_var_164_12_12t7(o, x) {
    x.push({
        section_00: [],
        unordered_object_04: 0,
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    u32(o + 0) ? im_var_164_12_12t7_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    x[0].unordered_object_04 = in_ml(u32(o + 4), g.object_array, im_object, g.unordered_ref.object);

    // 16 bytes;

}
function im_var_164_12_12t7_00(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_12_12t8(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 8)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 0), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 2:
        u32(o + 0) ? im_var_164_12_12t8_00t2(u32(o + 0) + g.m, x[0].section_00) : 0;
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 2:
        x[0].section_04 = in_ml(u32(o + 4), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 3:
        u32(o + 4) ? im_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    }

    // u32(o + 4) ? im_flag(u32(o + 4) + g.m, x[0].section_04) : 0;
    // offset? 

    // 16 bytes;

}
function im_var_164_12_12t8_00t2(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_var_164_12_12t8_00t2_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_var_164_12_12t8_00t2_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_12_12t8_00t2_04(o, x) {
    x.push({
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_12_12t8_00t2_12(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_12_12t8_04t3(o, x) {
    x.push({
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_var_164_12_12t8_04t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_12_12t8_04t3_12(o, x) {
    x.push({});

    // 32 bytes;

}
function im_var_164_12_12t14(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        unordered_world_20_12t4_08: 0,
    });

    u32(o + 0) ? im_var_164_12_12t14_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    x[0].unordered_world_20_12t4_08 = in_ml(u32(o + 8), g.world_20_12t4_array, im_world_20_12t4, g.unordered_ref.world_20_12t4);

    // 16 bytes;

}
function im_var_164_12_12t14_00(o, x) {
    x.push({
        section_00: [],
        u8_08: u8(o + 8),
    });

    switch (u8(o + 8)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 0), g.world_20_12t0_array, im_world_20_12t0, g.unordered_ref.world_20_12t0);
        break;
    case 5:
        x[0].section_00 = u32(o + 0)
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t15(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //check this
    });

    // 16 bytes;

}
function im_var_164_12_12t16(o, x) {
    x.push({
        unordered_var_00: 0,
        u32_04: u32(o + 4),
    });

    x[0].unordered_var_00 = in_ml(u32(o + 0), g.var_array, im_var, g.unordered_ref.var);

    // 16 bytes;

}
function im_var_164_12_12t24(o, x) {
    x.push({
        unordered_unknown_00_00: 0,
        section_04: [],
    });

    x[0].unordered_unknown_00_00 = in_ml(u32(o + 0), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    u32(o + 4) ? im_var_164_12_12t24_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_var_164_12_12t24_04(o, x) {
    x.push({
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_var_164_20_04(u32(o + 4) + g.m, x[i].section_04, u32(o + 0)) : 0;

}
function im_var_164_20_04(o, x, t) {
    x.push({
        section_08: [im_string(u32(o + 8), 0, false)],
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    switch (t) {
    case 1604:
        u32(o + 12) ? im_var_164_20_04_12t1604(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1608:
        u32(o + 12) ? im_var_164_20_04_12t1608(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1618:
        u32(o + 12) ? im_var_164_20_04_12t1618(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1620:
        u32(o + 12) ? im_var_164_20_04_12t1620(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1636:
        u32(o + 12) ? im_var_164_20_04_12t1636(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        im_var_164_20_04_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_var_164_12(u32(o + 28) + (i * 24) + g.m, i, x[0].section_28);
    }

    // 32 bytes;

}
function im_var_164_20_04_12t1604(o, x) {
    x.push({});

    // 16 bytes;

}
function im_var_164_20_04_12t1608(o, x) {
    x.push({
        u8_00: u8(o + 0),
        unordered_interface_04: 0,
        unordered_world_20_12t1_08: 0,
    });

    x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_world_20_12t1_08 = in_ml(u32(o + 8), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);

    // 16 bytes;

}
function im_var_164_20_04_12t1618(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 8)) {
    case 0:
        x[0].section_00 = in_ml(u32(o + 0), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 1:
        u32(o + 0) ? im_var_164_20_04_12t1618_00t1(u32(o + 0) + g.m, x[0].section_00) : 0;
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 1:
        x[0].section_04 = in_ml(u32(o + 4), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 3:
        // u32(o + 4) ? im_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    }

    // 16 bytes;

}
function im_var_164_20_04_12t1618_00t1(o, x) {
    x.push({
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_var_164_20_04_12t1618_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_20_04_12t1618_00t1_12(o, x) {
    x.push({
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_20_04_12t1620(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        unordered_world_20_12t8_08: 0,
    });

    u32(o + 0) ? im_var_164_20_04_12t1620_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 8), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

    // 16 bytes;

}
function im_var_164_20_04_12t1620_00(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_20_04_12t1636(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
    });

    u32(o + 0) ? im_var_164_20_04_12t1636_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_var_164_20_04_12t1636_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_20_04_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [im_string(u32(o + 4), 0, false)],
        section_08: [],
    });

    switch (u32(o + 0)) {
    case 5:
        u32(o + 8) ? im_var_164_20_04_20_08t5(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 6:
        u32(o + 8) ? im_var_164_20_04_20_08t6(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    }
}
function im_var_164_20_04_20_08t5(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 8)) {
    case 0:
        x[0].section_00 = in_ml(u32(o + 0), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 1:
        u32(o + 0) ? im_var_164_20_04_20_08t5_00t1(u32(o + 0) + g.m, x[0].section_00) : 0;
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 1:
        x[0].section_04 = in_ml(u32(o + 4), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 3:
        // u32(o + 4) ? im_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04) : 0;
        break;
    }

    // 16 bytes;

}
function im_var_164_20_04_20_08t5_00t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_var_164_20_04_20_08t5_00t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_var_164_20_04_20_08t5_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_20_04_20_08t5_00t1_04(o, x) {
    x.push({
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_164_20_04_20_08t5_00t1_12(o, x) {
    x.push({
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_20_04_20_08t6(o, x) {
    x.push({
        section_00: [],
        u8_05: u8(o + 5),
        unordered_world_20_12t8_08: 0,
    });

    u32(o + 0) ? im_var_164_20_04_20_08t6_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 8), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

    // 16 bytes;

}
function im_var_164_20_04_20_08t6_00(o, x) {
    x.push({
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_var_168(o, x) {
    x.push({
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_var_164_12(u32(o + 8) + (i * 24) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}

function im_world_settings(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        f32_08: f32(o + 8),
        section_12: [],
        texture_16: im_patch(g.texture_patch_ref, o + 16),
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        section_36: [],
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        section_48: [],
        section_52: [],
        section_56: [],
        section_60: [],
        section_64: [],
        section_68: [],
        section_72: [],
        section_76: [im_string(u32(o + 76), 0, false)],
        u16_82: u16(o + 82),
        unordered_frame_font_88: 0,
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        f32_112: f32(o + 112),
        f32_116: f32(o + 116),
        f32_120: f32(o + 120),
        u8_126: u8(o + 126),
        texture_136: im_patch(g.texture_patch_ref, o + 136),
        f32_140: f32(o + 140),
        //check this
        f32_144: f32(o + 144),
        //check this
        f32_148: f32(o + 148),
        //check this
        f32_152: f32(o + 152),
        //check this
        f32_156: f32(o + 156),
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        section_192: [],
        section_196: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_world_settings_04(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }
    u32(o + 12) ? im_world_settings_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 36) ? im_world_settings_36(u32(o + 36) + g.m, x[i].section_36) : 0;
    u32(o + 48) ? im_world_settings_48(u32(o + 48) + g.m, x[i].section_48) : 0;
    u32(o + 52) ? im_world_settings_52(u32(o + 52) + g.m, x[i].section_52) : 0;
    u32(o + 56) ? im_world_settings_56(u32(o + 56) + g.m, x[i].section_56) : 0;
    u32(o + 60) ? im_world_settings_60(u32(o + 60) + g.m, x[i].section_60) : 0;
    u32(o + 64) ? im_world_settings_64(u32(o + 64) + g.m, x[i].section_64) : 0;
    u32(o + 68) ? im_world_settings_68(u32(o + 68) + g.m, x[i].section_68) : 0;
    u32(o + 72) ? im_world_settings_72(u32(o + 72) + g.m, x[i].section_72) : 0;
    x[i].unordered_frame_font_88 = in_ml(u32(o + 88), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    u32(o + 192) ? im_world_settings_192(u32(o + 192) + g.m, x[i].section_192) : 0;
    u32(o + 196) ? im_world_settings_196(u32(o + 196) + g.m, x[i].section_196) : 0;
    return x[i].id
    // 208 bytes;

}
function im_world_settings_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
    });

}
function im_world_settings_12(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_world_settings_36(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_world_settings_48(o, x) {
    x.push({
        section_00: [],
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    u32(o + 0) ? im_world_settings_48_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_world_settings_48_00(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
    });

    // 16 bytes;

}
function im_world_settings_52(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
    });

    // 16 bytes;

}
function im_world_settings_56(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_world_settings_60(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_world_settings_64(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_world_settings_68(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_world_settings_72(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_world_settings_192(o, x) {
    x.push({
        unordered_interface_00: 0,
        unordered_interface_04: 0,
        u32_08: u32(o + 8),
        section_12: [im_string(u32(o + 12), 0, false)],
        section_16: [im_string(u32(o + 16), 0, false)],
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        unordered_car_24: 0,
        unordered_car_28: 0,
        unordered_car_32: 0,
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 0), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_car_24 = in_ml(u32(o + 24), g.car_array, im_car, g.unordered_ref.car);
    x[0].unordered_car_28 = in_ml(u32(o + 28), g.car_array, im_car, g.unordered_ref.car);
    x[0].unordered_car_32 = in_ml(u32(o + 32), g.car_array, im_car, g.unordered_ref.car);

    for (let i = 0; i < u32(o + 36); i++) {
        im_world_settings_192_40(u32(o + 40) + (i * 8) + g.m, i, x[0].section_40);
    }

    // 48 bytes;

}
function im_world_settings_192_40(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
    });

}
function im_world_settings_196(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        section_08: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 4) ? im_world_settings_196_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 8) ? im_world_settings_196_04(u32(o + 8) + g.m, x[0].section_08) : 0;
    u32(o + 12) ? im_world_settings_196_04(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 16) ? im_world_settings_196_04(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_world_settings_196_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        f32_16: f32(o + 16),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_world_settings_196_04_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_world_settings_196_04_04(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }

    // 32 bytes;

}
function im_world_settings_196_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

}

function im_wtf(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        section_04: [],
        section_08: [],
        section_12: [],
    });

    u32(o + 4) ? im_wtf_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    u32(o + 8) ? im_wtf_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_wtf_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    return x[i].id
    // 16 bytes;

}
function im_wtf_04(o, x) {
    x.push({
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_wtf_08(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 0) ? im_wtf_08_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    switch (u32(o + 4)) {
    case 1:
        u32(o + 8) ? im_wtf_08_08t1(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    case 3:
        u32(o + 8) ? im_wtf_08_08t3(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    }
    // 16 bytes;

}
function im_wtf_08_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_wtf_08_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_wtf_08_00_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_wtf_08_00_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_wtf_08_00_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_wtf_08_08t1(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    u32(o + 0) ? im_wtf_08_08t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 8) ? im_wtf_08_08t1_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_wtf_08_08t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_wtf_08_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_wtf_08_08t1_00_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_wtf_08_08t1_00_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_wtf_08_08t1_00_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_wtf_08_08t1_08(o, x) {
    x.push({
        u8_01: u8(o + 1),
        section_08: [],
        unordered_gate_12: 0,
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) ? im_wtf_08_08t1_08_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    x[0].unordered_gate_12 = in_ml(u32(o + 12), g.gate_array, im_gate, g.unordered_ref.gate);

    switch (u8(o + 1)) {
    case 0:
        u32(o + 20) ? im_wtf_08_08t1_08_20t0(u32(o + 20) + g.m, x[0].section_20) : 0;
        break;
    case 2:
        x[0].section_20 = f32(o + 20)
        break
    }
    // 32 bytes;

}
function im_wtf_08_08t1_08_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}

function im_wtf_08_08t1_08_20t0(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}

function im_wtf_08_08t3(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    u32(o + 0) ? im_wtf_08_08t3_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 8) ? im_wtf_08_08t3_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    u32(o + 12) ? im_wtf_08_08t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 20) ? im_wtf_08_08t3_20(u32(o + 20) + g.m, x[0].section_20) : 0;
    u32(o + 24) ? im_wtf_08_08t3_24(u32(o + 24) + g.m, x[0].section_24) : 0;
    u32(o + 32) ? im_wtf_08_08t3_32(u32(o + 32) + g.m, x[0].section_32) : 0;

    // 48 bytes;

}
function im_wtf_08_08t3_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //check this
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_wtf_08_08t3_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_wtf_08_08t3_00_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_wtf_08_08t3_00_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_00_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_08(o, x) {
    x.push({
        section_08: [],
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) ? im_wtf_08_08t3_08_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    u32(o + 20) ? im_wtf_08_08t3_08_20(u32(o + 20) + g.m, x[0].section_20) : 0;

    // 32 bytes;

}
function im_wtf_08_08t3_08_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_08_08t3_08_20(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_wtf_08_08t3_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_wtf_08_08t3_12_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_wtf_08_08t3_12_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_20(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 8) ? im_wtf_08_08t3_20_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 32 bytes;

}
function im_wtf_08_08t3_20_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_08_08t3_24(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_wtf_08_08t3_24_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    switch (u32(o + 8)) {
    case 3:
        u32(o + 12) ? im_wtf_08_08t3_24_12(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    // 16 bytes;

}
function im_wtf_08_08t3_24_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_24_12(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_32(o, x) {
    x.push({
        u8_01: u8(o + 1),
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 8) ? im_wtf_08_08t3_32_08(u32(o + 8) + g.m, x[0].section_08) : 0;

    // 32 bytes;

}
function im_wtf_08_08t3_32_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_12(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 0) ? im_wtf_12_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_wtf_12_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_wtf_12_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_wtf_12_00_04(o, x) {
    x.push({});

    // 16 bytes;

}

function add_pmwr_pc_file_header() {
    return {
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_pmwr_pc_directory() {
    return {
        id: gen_id(),
        sec_id: "]7Zf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}

function info_pmwr_pc_file_header() {
    return {
        sec_id: "gjbf",
        multi: 0,
        u32_0: {
            n: "magic 1"
        },
        u32_4: {
            n: "magic 2"
        },
        u32_8: {
            n: "version"
        },
        section_12: ["]7Zf"],
    };

}

function info_pmwr_pc_directory() {
    return {
        sec_id: "]7Zf",
        multi: 1,
        u32_0: {
            n: "version"
        },
        u32_4: {
            n: "file type"
        },
        u32_8: {
            n: "index"
        },
        u32_12: 0,
        u32_16: {
            n: "length"
        },
        section_datapack: ['E@3Z'],
    };

}

function ex_pmwr_pc_x(o, x) {

    g = {
        divisibility: 16,
        divisible_prev_value: [],
        type_string: g.type_string,
        debug: pk_debug,
        endian: g.endian,
        file_dir_type: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        tex_anims: 0,
        /*
        need to get arrays here
        */
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    ex_pmwr_pc_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_pmwr_pc_file_header(o, x) {
    let e = o + 16
    su32(0, x.u32_0)
    su32(4, x.u32_4)
    su32(8, x.u32_8)
    su32(12, x[0].directory.length)

    let global = ((x[0].directory.length) * 24) + 16
    e = e + (x[0].directory.length * 24)

    let time_array = []
    for (let i = 0; i < x[0].directory.length; i++) {
        let a = Date.now()

        e = ex_pmwr_pc_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_pmwr_pc_directory(o, e, x, global) {
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    // add other arrays heres later

    let ce = e
    g.file_dir_type = return_directory_type(x.u32_4)

    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 20, e - global)

    e = ex_pmwr_pc_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)

    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + index_patch_buffer.byteLength + ordered_buffer.byteLength + offset_patch_buffer.byteLength)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
