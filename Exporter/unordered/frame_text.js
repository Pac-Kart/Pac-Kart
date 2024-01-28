function ex_frame_text(o, x) {
    let e = o + 16

    e = ex_string(o + 00, e, x.section_00)

    g.debug ? ex_debug(o, "gOyr") : 0;
    return e
}
