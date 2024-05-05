"use strict";
function ex_mysterious_04t9(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    e = ex_s_offset(o + 8, e, ex_mysterious_04t9_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_mysterious_04t9_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "4LSN") : 0;
    return e
}
function ex_mysterious_04t9_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_mysterious_04t9_08_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "VN@A") : 0;
    return e
}
function ex_mysterious_04t9_08_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "i3=D") : 0;
    return e
}
function ex_mysterious_04t9_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 10, x.u8_10)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 56, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_mysterious_04t9_12_04(temp_offset + (i * 56), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 12, e, ex_mysterious_04t9_12_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "]HMa") : 0;
    return e
}
function ex_mysterious_04t9_12_04(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    su8(o + 36, x.u8_36)
    su8(o + 39, x.u8_39)

    e = ex_s_offset(o + 8, e, ex_mysterious_04t9_12_04_08, x.section_08, 'down');
    e = ex_s_offset(o + 44, e, ex_mysterious_04t9_12_04_44, x.section_44, 'down');

    g.debug ? ex_debug(o, "VjOc") : 0;
    return e
}
function ex_mysterious_04t9_12_04_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "VGSK") : 0;
    return e
}
function ex_mysterious_04t9_12_04_44(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)
    su8(o + 4, x.u8_04)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 8, e, ex_mysterious_04t9_12_04_44_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_mysterious_04t9_12_04_44_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "kN8O") : 0;
    return e
}
function ex_mysterious_04t9_12_04_44_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "nnQh") : 0;
    return e
}
function ex_mysterious_04t9_12_04_44_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 1, x.u8_01)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "=hI9") : 0;
    return e
}
function ex_mysterious_04t9_12_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 56, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_mysterious_04t9_12_04(temp_offset + (i * 56), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "yf_P") : 0;
    return e
}
