"use strict";
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
