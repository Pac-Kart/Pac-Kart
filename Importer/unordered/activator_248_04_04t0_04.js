"use strict";
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
