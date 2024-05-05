"use strict";
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
