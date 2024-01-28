function ex_world_settings(o, x) {
    let e = o + 208
    //amount?   su32(o +00, x.u32_00)
    sf32(o + 08, x.f32_08)
    ex_patch(o + 16, g.texture_patch_array, x.texture_16)
    ex_patch(o + 20, g.texture_patch_array, x.texture_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su16(o + 82, x.u16_82)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)
    sf32(o + 112, x.f32_112)
    sf32(o + 116, x.f32_116)
    sf32(o + 120, x.f32_120)
    su8(o + 126, x.u8_126)
    ex_patch(o + 136, g.texture_patch_array, x.texture_136)
    sf32(o + 140, x.f32_140)
    //?
    sf32(o + 144, x.f32_144)
    //?
    sf32(o + 148, x.f32_148)
    //?
    sf32(o + 152, x.f32_152)
    //?
    sf32(o + 156, x.f32_156)
    sf32(o + 160, x.f32_160)
    sf32(o + 164, x.f32_164)
    sf32(o + 168, x.f32_168)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_world_settings_04(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 12, e, ex_world_settings_12, x.section_12, 'down');
    e = ex_s_offset(o + 36, e, ex_world_settings_36, x.section_36, 'down');
    e = ex_s_offset(o + 48, e, ex_world_settings_48, x.section_48, 'down');
    e = ex_s_offset(o + 52, e, ex_world_settings_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_world_settings_56, x.section_56, 'down');
    e = ex_s_offset(o + 60, e, ex_world_settings_60, x.section_60, 'down');
    e = ex_s_offset(o + 64, e, ex_world_settings_64, x.section_64, 'down');
    e = ex_s_offset(o + 68, e, ex_world_settings_68, x.section_68, 'down');
    e = ex_s_offset(o + 72, e, ex_world_settings_72, x.section_72, 'down');
    e = ex_string(o + 76, e, x.section_76)
    e = ex_ml(x.unordered_frame_font_88, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 88, e, 'down');
    e = ex_s_offset(o + 192, e, ex_world_settings_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_world_settings_196, x.section_196, 'down');

    g.debug ? ex_debug(o, "w4lc") : 0;
    return e
}
function ex_world_settings_04(o, e, x) {
    su8(o + 00, x.u8_00)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)

    g.debug ? ex_debug(o, ">d2d") : 0;
    return e
}
function ex_world_settings_12(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    sf32(o + 04, x.f32_04)
    su32(o + 08, x.u32_08)

    g.debug ? ex_debug(o, "^f[:") : 0;
    return e
}
function ex_world_settings_36(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)

    g.debug ? ex_debug(o, "v[_>") : 0;
    return e
}
function ex_world_settings_48(o, x) {
    let e = o + 16
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)

    e = ex_s_offset(o + 00, e, ex_world_settings_48_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "mQo9") : 0;
    return e
}
function ex_world_settings_48_00(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)

    g.debug ? ex_debug(o, "8>lm") : 0;
    return e
}
function ex_world_settings_52(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)

    g.debug ? ex_debug(o, "0WjQ") : 0;
    return e
}
function ex_world_settings_56(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)

    g.debug ? ex_debug(o, "WR@L") : 0;
    return e
}
function ex_world_settings_60(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)

    g.debug ? ex_debug(o, "RY>]") : 0;
    return e
}
function ex_world_settings_64(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "gLBs") : 0;
    return e
}
function ex_world_settings_68(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "S19K") : 0;
    return e
}
function ex_world_settings_72(o, x) {
    let e = o + 16
    su32(o + 04, x.u32_04)

    g.debug ? ex_debug(o, "TeAb") : 0;
    return e
}
function ex_world_settings_192(o, x) {
    let e = o + 48
    su32(o + 08, x.u32_08)
    ex_patch(o + 20, g.texture_patch_array, x.texture_20)
    //amount?   su32(o +36, x.u32_36)

    e = ex_ml(x.unordered_interface_00, g.interface_array, ex_interface, g.unordered_ref.interface, o + 00, e, 'down');
    e = ex_ml(x.unordered_interface_04, g.interface_array, ex_interface, g.unordered_ref.interface, o + 04, e, 'down');
    e = ex_string(o + 12, e, x.section_12)
    e = ex_string(o + 16, e, x.section_16)
    e = ex_ml(x.unordered_car_24, g.car_array, ex_car, g.unordered_ref.car, o + 24, e, 'down');
    e = ex_ml(x.unordered_car_28, g.car_array, ex_car, g.unordered_ref.car, o + 28, e, 'down');
    e = ex_ml(x.unordered_car_32, g.car_array, ex_car, g.unordered_ref.car, o + 32, e, 'down');
    if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e - g.m)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 8, 16)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_world_settings_192_40(temp_offset + (i * 8), e, x.section_40[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "3P>U") : 0;
    return e
}
function ex_world_settings_192_40(o, e, x) {
    su32(o + 04, x.u32_04)

    e = ex_string(o + 00, e, x.section_00)

    g.debug ? ex_debug(o, "ur=P") : 0;
    return e
}
function ex_world_settings_196(o, x) {
    let e = o + 32
    su32(o + 00, x.u32_00)

    e = ex_s_offset(o + 04, e, ex_world_settings_196_04, x.section_04, 'down');
    e = ex_s_offset(o + 08, e, ex_world_settings_196_04, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_world_settings_196_04, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_world_settings_196_04, x.section_16, 'down');

    g.debug ? ex_debug(o, "fX1=") : 0;
    return e
}
function ex_world_settings_196_04(o, x) {
    let e = o + 32
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    sf32(o + 16, x.f32_16)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_world_settings_196_04_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 08, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_world_settings_196_04_04(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "[wZG") : 0;
    return e
}
function ex_world_settings_196_04_04(o, e, x) {
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "@mN[") : 0;
    return e
}
