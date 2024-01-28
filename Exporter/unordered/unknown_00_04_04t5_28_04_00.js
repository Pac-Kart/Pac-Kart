function ex_unknown_00_04_04t5_28_04_00(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su32(o + 08, x.u32_08)

    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t5_28_04_00_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t5_28_04_00_04t2, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "?SSF") : 0;
    return e
}
function ex_unknown_00_04_04t5_28_04_00_04t1(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su32(o + 04, x.u32_04)
    su32(o + 08, x.u32_08)

    g.debug ? ex_debug(o, "^[HJ") : 0;
    return e
}
function ex_unknown_00_04_04t5_28_04_00_04t2(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su8(o + 04, x.u8_04)

    g.debug ? ex_debug(o, "NOjR") : 0;
    return e
}
