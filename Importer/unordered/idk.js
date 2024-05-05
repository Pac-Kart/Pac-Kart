"use strict";
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
