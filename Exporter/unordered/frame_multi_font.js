function ex_frame_multi_font(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 04, e, ex_frame_multi_font_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "28N;") : 0;
    return e
}
function ex_frame_multi_font_04(o, x) {
    let e = o + 48
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su32(o + 04, x.u32_04)
    su32(o + 08, x.u32_08)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_frame_font_12, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 12, e, 'down');
    e = ex_ml(x.unordered_frame_font_28, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 28, e, 'down');
    e = ex_ml(x.unordered_frame_font_32, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 32, e, 'down');

    g.debug ? ex_debug(o, "usq_") : 0;
    return e
}
