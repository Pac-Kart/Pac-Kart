"use strict";
function im_gate(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_17: u8(o + 17),
        section_24: [],
        unordered_unknown_00_28: 0,
        f32_32: f32(o + 32),
        unordered_unknown_00_36: 0,
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_56: f32(o + 56),
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        unordered_sound_section_76: 0,
        unordered_sound_controls_80: 0,
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        u8_105: u8(o + 105),
        u8_107: u8(o + 107),
    });

    u32(o + 24) ? im_gate_24(u32(o + 24) + g.m, x[i].section_24) : 0;
    x[i].unordered_unknown_00_28 = in_ml(u32(o + 28), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[i].unordered_unknown_00_36 = in_ml(u32(o + 36), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_unknown(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    x[i].unordered_sound_section_76 = in_ml(u32(o + 76), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    x[i].unordered_sound_controls_80 = in_ml(u32(o + 80), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    u32(o + 84) ? im_gate_84(u32(o + 84) + g.m, x[i].section_84) : 0;
    return x[i].id
    // 128 bytes;

}
function im_gate_24(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_gate_84(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    u32(o + 4) ? im_gate_84_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_gate_84_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
