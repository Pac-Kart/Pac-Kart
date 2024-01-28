function ex_frame_sparkler(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    su32(o + 08, x.u32_08)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_frame_sparkler_16, x.section_16, 'up');

    g.debug ? ex_debug(o, "uMI8") : 0;
    return e
}
function ex_frame_sparkler_16(o, x) {
    let e = o + 64
    ex_patch(o + 00, g.texture_patch_array, x.texture_00)
    su8(o + 04, x.u8_04)
    su32(o + 08, x.u32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su32(o + 40, x.u32_40)
    // su32(o + 44, x.u32_44)
    //amount?   su32(o +52, x.u32_52)

    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 12, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_frame_sparkler_16_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 32, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_frame_sparkler_16_56(temp_offset + (i * 32), e, x.section_56[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "t3JQ") : 0;
    return e
}
function ex_frame_sparkler_16_48(o, e, x) {
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "akbg") : 0;
    return e
}
function ex_frame_sparkler_16_56(o, e, x) {
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "P_ng") : 0;
    return e
}
