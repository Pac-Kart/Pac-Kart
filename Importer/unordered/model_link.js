"use strict";
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
        im_model_link_24(u32(o + 24) + (ii * 4) + g.m, ii, x[i].section_24,u32(o + 24) + g.m);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_model_link_32(u32(o + 32) + (ii * 8) + g.m, ii, x[i].section_32,u32(o + 32) + g.m);
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
function im_model_link_24(o, i, x,tempoffset) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
    });

    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models,tempoffset,i * 4);

}
function im_model_link_32(o, i, x,tempoffset) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
        u16_04: u16(o + 4),
    });

    x[i].ordered_models_00 = in_ml(u32(o + 0), g.models_array, im_models, g.ordered_ref.models,tempoffset,i * 8);

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
