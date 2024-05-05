"use strict";
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
