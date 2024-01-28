function ex_strange(o, x) {
    let e = o + 48
    //amount?   su32(o +00, x.u32_00)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 04, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown(temp_offset + (i * 04), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_sound_controls_28, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 28, e, 'down');

    g.debug ? ex_debug(o, "lA@o") : 0;
    return e
}
