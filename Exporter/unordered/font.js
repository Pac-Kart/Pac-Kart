function ex_frame_font(o, x) {
    let e = o + 48
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    su32(o + 24, x.u32_24)
    su32(o + 32, x.u32_32)
    ex_patch(o + 00, g.texture_patch_array, x.texture_00);

    e = ex_s_offset(o + 28, e, ex_frame_font_28, x.section_28, 'up')

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_frame_font_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;
    g.debug ? ex_debug(o, "x\LI") : 0;

    return e

}

function ex_frame_font_28(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)

    g.debug ? ex_debug(o, "^Ors") : 0;

    return e

}

function ex_frame_font_36(o, e, x) {
    su8(o + 00, x.u8_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "94QA") : 0;

    return e

}
