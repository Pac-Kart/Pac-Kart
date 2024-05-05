"use strict";
function ex_sound_controls(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su32(o + 12, x.u32_12)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 16, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_sound_controls_16(temp_offset + (i * 16), e, x.section_16[i])
        }
        ;
    }
    // ;e = ex_s_offset(o + 16, e, ex_sound_controls_16, x.section_16, 'up');

    g.debug ? ex_debug(o, "rGfM") : 0;
    return e
}
function ex_sound_controls_16(o, e, x) {
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    sf32(o + 12, x.f32_12)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_sound_controls_16_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "wiT0") : 0;
    return e
}
function ex_sound_controls_16_04(o, e, x) {

    e = ex_ml(x.unordered_sound_section_00, g.sound_section_array, ex_sound_section, g.unordered_ref.sound_section, o + 0, e, 'down');

    g.debug ? ex_debug(o, "v;rj") : 0;
    return e
}
