"use strict";
function ex_link(o, x) {
    let e = o + divisible(80, g.divisibility)

    // let e = o + 80
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 64, x.u32_64)

    e = ex_s_offset(o + 0, e, ex_link_00, x.section_00, 'up')

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 16, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_link_intro(temp_offset + (i * 16), e, x.section_08[i])
        }
        ;
    }
    ;e = ex_string(o + 12, e, x.section_12)
    e = ex_string(o + 20, e, x.section_20)

    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 8, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_link_32(temp_offset + (i * 8), e, x.section_32[i])
        }
        ;
    }

    e = ex_string(o + 36, e, x.section_36)
    e = ex_string(o + 40, e, x.section_40)

    e = ex_s_offset(o + 48, e, ex_link_demo, x.section_48, 'down')

    ex_patch(o + 52, g.texture_patch_array, x.texture_52);
    ex_patch(o + 56, g.texture_patch_array, x.texture_56);

    e = ex_ml(x.unordered_frame_font_60, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 60, e, 'down');

    e = ex_string(o + 68, e, x.section_68)
    e = ex_string(o + 72, e, x.section_72)

    g.debug ? ex_debug(o, "eRqr") : 0;

    return e

}

function ex_link_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_link_00_04, x.section_04, 'up')

    g.debug ? ex_debug(o, ":`CB") : 0;

    return e

}

function ex_link_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    e = ex_s_offset(o + 0, e, ex_link_00_04_00, x.section_00, 'down')

    g.debug ? ex_debug(o, "2x1F") : 0;

    return e

}

function ex_link_00_04_00(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 8, x.u8_08)

    e = ex_s_offset(o + 4, e, ex_link_00_04_00_04, x.section_04, 'up')

    g.debug ? ex_debug(o, "CmW<") : 0;

    return e

}

function ex_link_00_04_00_04(o, x) {
    let e = o + 32

    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, "O7u_") : 0;

    return e

}

function ex_link_intro(o, e, x) {
    su8(o + 0, x.u8_00)

    e = ex_string(o + 4, e, x.section_04)
    e = ex_s_offset(o + 8, e, ex_link_intro_08, x.section_08, 'up')
    e = ex_s_offset(o + 12, e, ex_link_offset_index, x.section_12, 'down')

    g.debug ? ex_debug(o, "0ihg") : 0;

    return e

}

function ex_link_intro_08(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)

    g.debug ? ex_debug(o, "PZKL") : 0;

    return e

}

function ex_link_offset_index(o, x) {
    let e = o + divisible(16, g.divisibility)

    su32(o + 4, x.u32_04)
    e = ex_string(o + 0, e, x.section_00)

    g.debug ? ex_debug(o, "]iPe") : 0;

    return e

}

function ex_link_32(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_link_32_00, x.section_00, 'down')

    g.debug ? ex_debug(o, ";qMw") : 0;

    return e

}

function ex_link_32_00(o, x) {
    let e = divisible(o + 8, g.divisibility)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 32, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_link_32_00_04(temp_offset + (i * 32), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "9oPY") : 0;

    return e

}

function ex_link_32_00_04(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_link_32_00_04_04, x.section_04, 'up')
    e = ex_s_offset(o + 8, e, ex_link_offset_index, x.section_08, 'down')

    e = ex_string(o + 12, e, x.section_12)

    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_link_32_00_04_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_link_32_00_04_20(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "S6c:") : 0;

    return e

}

function ex_link_32_00_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_link_offset_index, x.section_04, 'down')

    g.debug ? ex_debug(o, "h2<4") : 0;

    return e

}

function ex_link_32_00_04_20(o, e, x) {
    su16(o + 8, x.u16_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_link_32_00_04_20_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "k1X3") : 0;

    return e

}

function ex_link_32_00_04_20_04(o, e, x) {
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_link_offset_index, x.section_04, 'down')

    g.debug ? ex_debug(o, "Qws_") : 0;

    return e

}

function ex_link_demo(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 8, e, ex_link_32_00, x.section_08, 'down')

    g.debug ? ex_debug(o, "CUqO") : 0;
    return e

}
