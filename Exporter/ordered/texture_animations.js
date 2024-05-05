"use strict";
function ex_texture_animation_section(o, e, x) {
    e = ex_s_offset(o + 0, e, ex_texture_anim_1, x.section_00, 'none');

    g.debug ? ex_debug(o, "oKj7") : 0;
    return e
}

function ex_texture_anim_1(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_texture_anim_1_1, x.section_04, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_texture_anim_1_2(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_texture_anim_1_3(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "oVKp") : 0;
    return e
}
function ex_texture_anim_1_1(o, x) {
    let e = o + 32
    //amount?   su32(o +00, x.u32_00)

    su8(o + 11, x.u8_11)
    su32(o + 20, x.u32_20)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_texture_anim_1_1_1(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "W9gN") : 0;
    return e
}
function ex_texture_anim_1_1_1(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "DUGU") : 0;
    return e
}
function ex_texture_anim_1_2(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "bce@") : 0;
    return e
}
function ex_texture_anim_1_3(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "tmZz") : 0;
    return e
}
