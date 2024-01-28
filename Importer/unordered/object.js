function im_object(o, i, x) {
    x.push({
        id: gen_id(),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
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
        u32(o + 32) ? im_object_32t15(u32(o + 32) + g.m, x[i].section_32) : 0;
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
        texture_00: im_patch(g.texture_patch_ref, o + 00),
        u8_04: u8(o + 04),
        f32_08: f32(o + 08),
        section_16: [],
    });

    u32(o + 16) ? im_object_12_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_object_12_16(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
    });

    // 16 bytes;

}
function im_object_32t15(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        unordered_unknown_00_08: 0,
        unordered_unknown_00_12: 0,
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_object_32t15_04(u32(o + 04) + (i * 28) + g.m, i, x[0].section_04);
    }
    x[0].unordered_unknown_00_08 = in_ml(u32(o + 08), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_12 = in_ml(u32(o + 12), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    // 16 bytes;

}
function im_object_32t15_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        f32_24: f32(o + 24),
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_object_32t15_04_04(u32(o + 04) + (ii * 12) + g.m, ii, x[i].section_04);
    }

    for (let ii = 0; ii < u32(o + 08); ii++) {
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
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
    });

    x[i].unordered_um_00 = in_ml(u32(o + 00), g.um_array, im_um, g.unordered_ref.um);
    x[i].unordered_um_04 = in_ml(u32(o + 04), g.um_array, im_um, g.unordered_ref.um);

}
function im_object_32t16(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_object_32t17(o, x) {
    x.push({
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_object_32t18(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 00) ? im_object_32t18_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_object_32t18_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        section_08: [],
    });

    for (let i = 0; i < u32(o + 04); i++) {
        im_mysterious(u32(o + 08) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
