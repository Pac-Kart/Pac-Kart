"use strict";
function ex_gate(o, x) {
    let e = o + divisible(128, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su8(o + 17, x.u8_17)
    sf32(o + 32, x.f32_32)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 56, x.f32_56)
    //amount?   su32(o +60, x.u32_60)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 96, x.f32_96)
    su8(o + 105, x.u8_105)
    su8(o + 107, x.u8_107)

    e = ex_s_offset(o + 24, e, ex_gate_24, x.section_24, 'down');
    e = ex_ml(x.unordered_unknown_00_28, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 28, e, 'down');
    e = ex_ml(x.unordered_unknown_00_36, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 36, e, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_unknown(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_sound_section_76, g.sound_section_array, ex_sound_section, g.unordered_ref.sound_section, o + 76, e, 'down');
    e = ex_ml(x.unordered_sound_controls_80, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 80, e, 'down');
    e = ex_s_offset(o + 84, e, ex_gate_84, x.section_84, 'down');

    g.debug ? ex_debug(o, "ykoP") : 0;
    return e
}
function ex_gate_24(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "10md") : 0;
    return e
}
function ex_gate_84(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_gate_84_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "l<e]") : 0;
    return e
}
function ex_gate_84_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "d1fw") : 0;
    return e
}
