function ex_wtf(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)

    e = ex_s_offset(o + 04, e, ex_wtf_04, x.section_04, 'down');
    e = ex_s_offset(o + 08, e, ex_wtf_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_wtf_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "Bx@2") : 0;
    return e
}
function ex_wtf_04(o, x) {
    let e = o + 32
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, "i3[;") : 0;
    return e
}
function ex_wtf_08(o, x) {
    let e = o + 16
    su32(o + 04, x.u32_04)

    e = ex_s_offset(o + 00, e, ex_wtf_08_00, x.section_00, 'down');
    switch (x.u32_04) {
    case 1:
        e = ex_s_offset(o + 08, e, ex_wtf_08_08t1, x.section_08, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 08, e, ex_wtf_08_08t3, x.section_08, 'up');
        break;
    }
    g.debug ? ex_debug(o, "LLg4") : 0;
    return e
}
function ex_wtf_08_00(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 08, x.u32_08)

    e = ex_s_offset(o + 04, e, ex_wtf_08_00_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_wtf_08_00_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "W]Kg") : 0;
    return e
}
function ex_wtf_08_00_04(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)

    g.debug ? ex_debug(o, "]W;V") : 0;
    return e
}
function ex_wtf_08_00_12(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)

    g.debug ? ex_debug(o, "Ec5z") : 0;
    return e
}
function ex_wtf_08_08t1(o, x) {
    let e = o + 16
    //amount?   su32(o +04, x.u32_04)

    e = ex_s_offset(o + 00, e, ex_wtf_08_08t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 08, e, ex_wtf_08_08t1_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "gQCH") : 0;
    return e
}
function ex_wtf_08_08t1_00(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 08, x.u32_08)

    e = ex_s_offset(o + 04, e, ex_wtf_08_08t1_00_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_wtf_08_08t1_00_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "ao0G") : 0;
    return e
}
function ex_wtf_08_08t1_00_04(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)

    g.debug ? ex_debug(o, "tc8t") : 0;
    return e
}
function ex_wtf_08_08t1_00_12(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)

    g.debug ? ex_debug(o, "MFhc") : 0;
    return e
}
function ex_wtf_08_08t1_08(o, x) {
    let e = o + 32
    su8(o + 01, x.u8_01)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 08, e, ex_wtf_08_08t1_08_08, x.section_08, 'down');
    e = ex_ml(x.unordered_gate_12, g.gate_array, ex_gate, g.unordered_ref.gate, o + 12, e, 'down');

    g.debug ? ex_debug(o, "ImCk") : 0;
    return e
}
function ex_wtf_08_08t1_08_08(o, x) {
    let e = o + 32
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "3;Ty") : 0;
    return e
}
function ex_wtf_08_08t3(o, x) {
    let e = o + 48
    su32(o + 04, x.u32_04)
    su32(o + 16, x.u32_16)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 00, e, ex_wtf_08_08t3_00, x.section_00, 'down');
    e = ex_s_offset(o + 08, e, ex_wtf_08_08t3_08, x.section_08, 'up');
    e = ex_s_offset(o + 12, e, ex_wtf_08_08t3_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_wtf_08_08t3_20, x.section_20, 'up');
    e = ex_s_offset(o + 24, e, ex_wtf_08_08t3_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_wtf_08_08t3_32, x.section_32, 'up');

    g.debug ? ex_debug(o, "g<lB") : 0;
    return e
}
function ex_wtf_08_08t3_00(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    //?
    su32(o + 08, x.u32_08)

    e = ex_s_offset(o + 04, e, ex_wtf_08_08t3_00_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_wtf_08_08t3_00_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "[A]p") : 0;
    return e
}
function ex_wtf_08_08t3_00_04(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)
    su32(o + 08, x.u32_08)

    g.debug ? ex_debug(o, "q]]Z") : 0;
    return e
}
function ex_wtf_08_08t3_00_12(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)

    g.debug ? ex_debug(o, "555;") : 0;
    return e
}
function ex_wtf_08_08t3_08(o, x) {
    let e = o + 32
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 08, e, ex_wtf_08_08t3_08_08, x.section_08, 'down');
    e = ex_s_offset(o + 20, e, ex_wtf_08_08t3_08_20, x.section_20, 'down');

    g.debug ? ex_debug(o, "20?^") : 0;
    return e
}
function ex_wtf_08_08t3_08_08(o, x) {
    let e = o + 32
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "YaP2") : 0;
    return e
}
function ex_wtf_08_08t3_08_20(o, x) {
    let e = o + 48
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, "Ypzz") : 0;
    return e
}
function ex_wtf_08_08t3_12(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)

    e = ex_s_offset(o + 04, e, ex_wtf_08_08t3_12_04, x.section_04, 'down');

    g.debug ? ex_debug(o, ">?Pg") : 0;
    return e
}
function ex_wtf_08_08t3_12_04(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)

    g.debug ? ex_debug(o, "AJtY") : 0;
    return e
}
function ex_wtf_08_08t3_20(o, x) {
    let e = o + 32
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su32(o + 04, x.u32_04)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 08, e, ex_wtf_08_08t3_20_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "Eph7") : 0;
    return e
}
function ex_wtf_08_08t3_20_08(o, x) {
    let e = o + 32
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "ei^6") : 0;
    return e
}
function ex_wtf_08_08t3_24(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 08, x.u32_08)

    e = ex_s_offset(o + 04, e, ex_wtf_08_08t3_24_04, x.section_04, 'down');
    switch (x.u32_08) {
    case 3:
        e = ex_s_offset(o + 12, e, ex_wtf_08_08t3_24_12, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, "5]W2") : 0;
    return e
}
function ex_wtf_08_08t3_24_04(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)

    g.debug ? ex_debug(o, "p8F?") : 0;
    return e
}
function ex_wtf_08_08t3_24_12(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)
    su32(o + 08, x.u32_08)

    g.debug ? ex_debug(o, "l4ZW") : 0;
    return e
}
function ex_wtf_08_08t3_32(o, x) {
    let e = o + 32
    su8(o + 01, x.u8_01)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 08, e, ex_wtf_08_08t3_32_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "N=Kn") : 0;
    return e
}
function ex_wtf_08_08t3_32_08(o, x) {
    let e = o + 32
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, ">vXm") : 0;
    return e
}
function ex_wtf_12(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 00, e, ex_wtf_12_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "5DxE") : 0;
    return e
}
function ex_wtf_12_00(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)

    e = ex_s_offset(o + 04, e, ex_wtf_12_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "kMV6") : 0;
    return e
}
function ex_wtf_12_00_04(o, x) {
    let e = o + 16

    g.debug ? ex_debug(o, "xu1^") : 0;
    return e
}
