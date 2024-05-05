"use strict";
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
