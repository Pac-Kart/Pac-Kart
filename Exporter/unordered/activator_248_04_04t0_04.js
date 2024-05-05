"use strict";
function ex_activator_248_04_04t0_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    su8(o + 24, x.u8_24)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_activator_248_04_04t0_04_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "5xm<") : 0;
    return e
}
function ex_activator_248_04_04t0_04_04(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_activator_248_04_04t0_04_04_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "wOXy") : 0;
    return e
}
function ex_activator_248_04_04t0_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_activator_248_04_04t0_04_04_04_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "=M;:") : 0;
    return e
}
function ex_activator_248_04_04t0_04_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)

    g.debug ? ex_debug(o, ">phr") : 0;
    return e
}
