// fix im_world_20_12t5
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

    x[i].unordered_world_settings_00 = in_ml(u32(o + 00), g.world_settings_array, im_world_settings, g.unordered_ref.world_settings);
    u32(o + 04) ? im_collision(u32(o + 04) + g.m, x[i].section_04) : 0;
    u32(o + 08) ? im_world_08(u32(o + 08) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_world_12(u32(o + 12) + g.m, x[i].section_12) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_world_20(u32(o + 20) + (ii * 16) + g.m, ii, x[i].section_20);
    }
    u32(o + 24) ? im_world_24(u32(o + 24) + g.m, x[i].section_24) : 0;
    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_world_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    return x[i].id
}
function im_collision(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        u32_00: u32(o + 00),
    });

}
function im_collision_32t0(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        u32_00: u32(o + 00),
    });

}
function im_collision_32t1(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
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
        u32_04: u32(o + 04),
        //amount?
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
    });

    for (let ii = 0; ii < u32(o + 04); ii++) {
        im_collision_32t1_40_00(u32(o + 00) + (ii * 32) + g.m, ii, x[i].section_00);
    }

}
function im_collision_32t1_40_00(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        u16_00: u16(o + 00),
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
        //     // u32_04: u32(o + 04),
        //     // //check this
        //     // u32_08: u32(o + 08),
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

        

        for (let ii = 0; ii < u32(o + 08); ii++) {
            // typex.push()
            typefunction(u32(o + 12) + (ii * typeamount) + g.m, ii, typex);
        }

        // x[i].unordered_model_animation_1_64 = in_ml(u32(o + 64), g.model_animation_1_array, im_model_animation_1, g.unordered_ref.model_animation_1);

        // u32(o + 00) ? im_world_20_12t0(u32(o + 00) + g.m, x[0].section_00) : 0;
        // offset? 

    }
}
function im_type_entry_header(o) {
    return {
        u32_00: u32(o + 00),
        u16_04: u16(o + 04),
        u16_06: u16(o + 06),
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
        unordered_model_animation_1_64: 0,
        f32_68: f32(o + 68),
        unordered_idk_72: 0,
        u8_76: u8(o + 76),
        u8_77: u8(o + 77),
        u8_78: u8(o + 78),
        f32_80: f32(o + 80),
    });

    x[i].unordered_model_animation_1_64 = in_ml(u32(o + 64), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[i].unordered_idk_72 = in_ml(u32(o + 72), g.idk_array, im_idk, g.unordered_ref.idk);
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

    u32(o + 56) ? im_world_20_12t2_56(u32(o + 56) + g.m, x[i].section_56) : 0;

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_world_20_12t2_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    u32(o + 72) ? im_world_20_12t2_72(u32(o + 72) + g.m, x[i].section_72, u32(o + 40)) : 0;
    u32(o + 76) ? im_world_20_12t2_76(u32(o + 76) + g.m, x[i].section_76) : 0;

    for (let ii = 0; ii < u32(o + 104); ii++) {
        im_world_20_12t2_100(u32(o + 100) + (ii * 4) + g.m, ii, x[i].section_100);
    }
    return x[i].id
}
function im_world_20_12t2_100(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
    });

}
function im_world_20_12t2_56(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u16_18: u16(o + 18),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u16_50: u16(o + 50),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        u8_80: u8(o + 80),
        u8_81: u8(o + 81),
        u16_82: u16(o + 82),
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        f32_96: f32(o + 96),
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        u8_112: u8(o + 112),
        u8_113: u8(o + 113),
        u16_114: u16(o + 114),
        u32_116: u32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        f32_128: f32(o + 128),
        f32_132: f32(o + 132),
        f32_136: f32(o + 136),
        f32_140: f32(o + 140),
        u8_144: u8(o + 144),
        u8_145: u8(o + 145),
        u16_156: u16(o + 156),
        u32_148: u32(o + 148),
        u32_152: u32(o + 152),
        u32_156: u32(o + 156),
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        f32_172: f32(o + 172),
        u8_176: u8(o + 176),
        u8_177: u8(o + 177),
        u16_178: u16(o + 178),
        u32_180: u32(o + 180),
        u32_184: u32(o + 184),
        u32_188: u32(o + 188),
    });

}
function im_world_20_12t2_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
    });

}
function im_world_20_12t2_76(o, x) {
    x.push({
        u16_02: u16(o + 02),
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 08); i++) {
        im_world_20_12t2_76_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

}
function im_world_20_12t2_76_12(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    // u32(o + 00) ? im_world_20_12t13(u32(o + 00) + g.m, x[i].section_00) : 0;
    // offset? 

}
function im_world_20_12t2_72(o, x, t) {
    x.push({
        section_00: [],
    });

    for (let i = 0; i < t; i++) {
        im_world_20_12t2_72_00(u32(o + 00) + (i * 4) + g.m, i, x[0].section_00);
    }

}
function im_world_20_12t2_72_00(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    // im_world_20_12t5(u32(o + 00) + (ii * 112) + g.m, ii, x[i].section_00);

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

    x[i].unordered_unknown_00_96 = in_ml(u32(o + 96), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_interface_104 = in_ml(u32(o + 104), g.interface_array, im_interface, g.unordered_ref.interface);
    switch (u32(o + 120)) {
    case 0:
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
        u32_00: u32(o + 00),
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
        unordered_models_100: 0,
    });

    x[i].unordered_models_100 = in_ml(u32(o + 100), g.models_array, im_models, g.ordered_ref.models);
    return x[i].id
}
function im_world_20_12t8(o, i, x) {
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

    switch (u32(o + 32)) {
    case 0:
        u32(o + 72) ? im_world_20_12t8_72(u32(o + 72) + g.m, x[i].section_72) : 0;
        break;
    }
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
    return x[i].id
}
function im_world_20_12t8_72(o, x) {
    x.push({// unknown_00: // unknown(o + 00),
    });

}
function im_world_20_12t8_76t1(o, x) {
    x.push({
        f32_08: f32(o + 08),
        u32_12: u32(o + 12),
        //check this
    });

}
function im_world_20_12t8_76t7(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u32_04: u32(o + 04),
    });

}
function im_world_20_12t8_76t8(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
        section_08: [],
    });

    u32(o + 04) ? im_world_20_12t8_76t8_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 08) ? im_world_20_12t8_76t8_08(u32(o + 08) + g.m, x[0].section_08) : 0;

}
function im_world_20_12t8_76t8_04(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

}
function im_world_20_12t8_76t8_08(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u16_04: u16(o + 04),
        f32_08: f32(o + 08),
        u32_12: u32(o + 12),
        unordered_unknown_00_16: 0,
        unordered_unknown_00_20: 0,
    });

    x[0].unordered_unknown_00_16 = in_ml(u32(o + 16), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_20 = in_ml(u32(o + 20), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

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
        f32_76: f32(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
    });

    x[i].unordered_activator_64 = in_ml(u32(o + 64), g.activator_array, im_activator, g.unordered_ref.activator);
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
        u32_48: u32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        u32_56: u32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        u32_64: u32(o + 64),
        section_68: [],
    });

    // u32(o + 68) ? im_world_20_12t0(u32(o + 68) + g.m, x[i].section_68) : 0;
    // offset? 
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
    return x[i].id
}
function im_world_08(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
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
        u32_00: u32(o + 00),
    });

}
function im_world_08_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
    });

    for (let ii = 0; ii < u32(o + 08); ii++) {
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

    for (let ii = 0; ii < 1; ii++) {// im_world_20_12t8(u32(o + 00) + (ii * 80) + g.m, ii, x[i].section_00);
    }

}
function im_world_12(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 04),
        //amount?
        u32_08: u32(o + 08),
    });

    u32(o + 00) ? im_world_12_00(u32(o + 00) + g.m, x[0].section_00) : 0;

}
function im_world_12_00(o, x) {
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

    for (let i = 0; i < u32(o + 48); i++) {
        im_world_12_00_52(u32(o + 52) + (i * 4) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_world_12_00_56(u32(o + 56) + (i * 4) + g.m, i, x[0].section_56);
    }

    for (let i = 0; i < u32(o + 60); i++) {
        im_world_12_00_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }

}
function im_world_12_00_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //check this
    });

}
function im_world_12_00_52(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        //check this
    });

}
function im_world_12_00_56(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //check this
    });

}
function im_world_32(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_gate_00: 0,
    });

    x[i].unordered_gate_00 = in_ml(u32(o + 00), g.gate_array, im_gate, g.unordered_ref.gate);

}
function im_world_24(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_world_24_04(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 08); i++) {
        im_world_24_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

}
function im_world_24_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_flag_00: 0,
    });

    x[i].unordered_flag_00 = in_ml(u32(o + 00), g.flag_array, im_flag, g.unordered_ref.flag);

}
function im_world_24_12(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_var_00: 0,
    });

    x[i].unordered_var_00 = in_ml(u32(o + 00), g.var_array, im_var, g.unordered_ref.var);

}
