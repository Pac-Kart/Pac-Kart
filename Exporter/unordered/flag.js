function ex_flag(o, x) {
    let e = o + 48
    su32(o + 00, x.u32_00)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 16, x.f32_16)
    sf32(o + 28, x.f32_28)
    su8(o + 40, x.u8_40)

    e = ex_string(o + 04, e, x.section_04)
    switch (x.u8_08) {
    case 2:
        e = ex_s_offset(o + 12, e, ex_flag_12t2, x.section_12, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 12, e, ex_flag_12t3, x.section_12, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 12, e, ex_flag_12t4, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, "t@XW") : 0;
    return e
}
function ex_flag_12t2(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su8(o + 02, x.u8_02)
    sf32(o + 04, x.f32_04)

    g.debug ? ex_debug(o, "UnoN") : 0;
    return e
}
function ex_flag_12t3(o, x) {
    let e = o + 16
    su32(o + 08, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_flag_12t3_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "NX>w") : 0;
    return e
}
function ex_flag_12t3_12(o, x) {
    let e = o + 28

    g.debug ? ex_debug(o, "n8]n") : 0;
    return e
}
function ex_flag_12t4(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)

    g.debug ? ex_debug(o, "VArk") : 0;
    return e
}
