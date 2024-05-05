"use strict";
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
