function ex_sound_section(o, x) {
    let e = o + 32
    ex_patch(o + 00, g.sound_patch_array, x.sound_00,'sound')
    let v = x.f32_16
    if (v > 5) {
        v = 1
        // should probably limit this
    }
    su8(o + 04, x.u8_04)
    su8(o + 05, x.u8_05)
    su8(o + 06, x.u8_06)
    su32(o + 12, x.u32_12)
    sf32(o + 16, v)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    //?

    e = ex_s_offset(o + 08, e, ex_sound_section_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "zQp=") : 0;
    return e
}
function ex_sound_section_08(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "SaUz") : 0;
    return e
}
