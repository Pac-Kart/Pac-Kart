"use strict";
function ex_car(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 0, e, ex_car_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "HfAo") : 0;
    return e
}
function ex_car_00(o, x) {
    let e = o + divisible(240, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su32(o + 60, x.u32_60)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)
    su32(o + 72, x.u32_72)
    su32(o + 76, x.u32_76)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)
    su32(o + 88, x.u32_88)
    su32(o + 92, x.u32_92)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)
    su32(o + 104, x.u32_104)
    su32(o + 108, x.u32_108)
    su32(o + 112, x.u32_112)
    su32(o + 116, x.u32_116)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)
    su32(o + 128, x.u32_128)
    su32(o + 132, x.u32_132)
    su32(o + 136, x.u32_136)
    su32(o + 140, x.u32_140)
    su32(o + 144, x.u32_144)
    su32(o + 148, x.u32_148)
    su32(o + 152, x.u32_152)
    su32(o + 156, x.u32_156)
    su32(o + 160, x.u32_160)
    su32(o + 168, x.u32_168)
    su32(o + 172, x.u32_172)
    //amount?   su32(o +204, x.u32_204)
    //amount?   su32(o +212, x.u32_212)
    //amount?   su32(o +220, x.u32_220)
    //amount?   su32(o +228, x.u32_228)

    e = ex_ml(x.ordered_model_animation_2_176, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 176, e, 'down', true);

    e = ex_ml(x.unordered_car_00_180_180, g.car_00_180_array, ex_car_00_180, g.unordered_ref.car_00_180, o + 180, e, 'down');
    e = ex_ml(x.unordered_car_00_184_184, g.car_00_184_array, ex_car_00_184, g.unordered_ref.car_00_184, o + 184, e, 'down');
    // e = ex_s_offset(o + 180, e, ex_car_00_180, x.section_180, 'down');
    // e = ex_s_offset(o + 184, e, ex_car_00_184, x.section_184, 'down');
    e = ex_s_offset(o + 188, e, ex_car_00_188, x.section_188, 'down');
    e = ex_s_offset(o + 192, e, ex_car_00_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_car_00_196, x.section_196, 'down');
    e = ex_s_offset(o + 200, e, ex_car_00_200, x.section_200, 'down');
    if (x.section_208.length) {
        su32(o + 204, x.section_208.length)
        su32(o + 208, e)
        g.oa.push(o + 208)
        let temp_offset = e
        e += divisible(x.section_208.length * 8, g.divisibility)
        for (let i = 0; i < x.section_208.length; i++) {
            e = ex_car_00_208(temp_offset + (i * 8), e, x.section_208[i])
        }
        ;
    }
    ;if (x.section_216.length) {
        su32(o + 212, x.section_216.length)
        su32(o + 216, e)
        g.oa.push(o + 216)
        let temp_offset = e
        e += divisible(x.section_216.length * 12, g.divisibility)
        for (let i = 0; i < x.section_216.length; i++) {
            e = ex_car_00_216(temp_offset + (i * 12), e, x.section_216[i])
        }
        ;
    }
    ;if (x.section_224.length) {
        su32(o + 220, x.section_224.length)
        su32(o + 224, e)
        g.oa.push(o + 224)
        let temp_offset = e
        e += divisible(x.section_224.length * 12, g.divisibility)
        for (let i = 0; i < x.section_224.length; i++) {
            e = ex_car_00_216(temp_offset + (i * 12), e, x.section_224[i])
        }
        ;
    }
    ;if (x.section_232.length) {
        su32(o + 228, x.section_232.length)
        su32(o + 232, e)
        g.oa.push(o + 232)
        let temp_offset = e
        e += divisible(x.section_232.length * 4, g.divisibility)
        for (let i = 0; i < x.section_232.length; i++) {
            e = ex_unknown(temp_offset + (i * 4), e, x.section_232[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "RA<?") : 0;
    return e
}
function ex_car_00_180(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    e = ex_s_offset(o + 0, e, ex_car_00_180_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_car_00_180_04, x.section_04, 'down');
    e = ex_ml(x.unordered_sound_section_08, g.sound_section_array, ex_sound_section, g.unordered_ref.sound_section, o + 8, e, 'down');
    e = ex_ml(x.unordered_sound_section_12, g.sound_section_array, ex_sound_section, g.unordered_ref.sound_section, o + 12, e, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 8, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_car_00_180_20(temp_offset + (i * 8), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 8, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_car_00_180_20(temp_offset + (i * 8), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 8, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_car_00_180_20(temp_offset + (i * 8), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 8, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_car_00_180_20(temp_offset + (i * 8), e, x.section_44[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "5bdf") : 0;
    return e
}
function ex_car_00_180_00(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    ex_patch(o + 4, g.texture_patch_array, x.texture_04)
    //amount?   su32(o +12, x.u32_12)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 8, e, ex_car_00_180_00_08, x.section_08, 'down');
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 20, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_car_00_180_00_16(temp_offset + (i * 20), e, x.section_16[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_unknown_00_20, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 20, e, 'down');
    e = ex_ml(x.unordered_unknown_00_28, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 28, e, 'down');
    e = ex_ml(x.unordered_unknown_00_32, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 32, e, 'down');
    e = ex_ml(x.unordered_unknown_00_36, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 36, e, 'down');

    g.debug ? ex_debug(o, "ZbsY") : 0;
    return e
}
function ex_car_00_180_00_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "_>ez") : 0;
    return e
}
function ex_car_00_180_00_16(o, e, x) {
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 8, e, ex_car_00_180_00_16_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_car_00_180_00_16_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_car_00_180_00_16_12, x.section_16, 'down');

    g.debug ? ex_debug(o, "O0LK") : 0;
    return e
}
function ex_car_00_180_00_16_08(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "f[@[") : 0;
    return e
}
function ex_car_00_180_00_16_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "32;U") : 0;
    return e
}
function ex_car_00_180_04(o, x) {
    let e = o + divisible(96, g.divisibility)
    sf32(o + 0, x.f32_00)
    //?
    sf32(o + 4, x.f32_04)
    //?
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    //?
    sf32(o + 16, x.f32_16)
    //?
    sf32(o + 20, x.f32_20)
    //?
    su32(o + 24, x.u32_24)
    //?
    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    su32(o + 60, x.u32_60)
    sf32(o + 72, x.f32_72)
    //amount?
    sf32(o + 76, x.f32_76)

    e = ex_s_offset(o + 56, e, ex_car_00_180_04_56, x.section_56, 'down');
    e = ex_s_offset(o + 64, e, ex_car_00_180_04_56, x.section_64, 'down');
    e = ex_ml(x.unordered_unknown_00_68, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 68, e, 'down');
    e = ex_s_offset(o + 80, e, ex_car_00_180_04_80, x.section_80, 'down');

    e = ex_ml(x.unordered_car_00_180_04_84_84, g.car_00_180_04_84_array, ex_car_00_180_04_84, g.unordered_ref.car_00_180_04_84, o + 84, e, 'down');
    e = ex_ml(x.unordered_car_00_180_04_84_88, g.car_00_180_04_84_array, ex_car_00_180_04_84, g.unordered_ref.car_00_180_04_84, o + 88, e, 'down');
    // e = ex_s_offset(o + 84, e, ex_car_00_180_04_84, x.section_84, 'down');
    // e = ex_s_offset(o + 88, e, ex_car_00_180_04_88, x.section_88, 'down');
    e = ex_s_offset(o + 92, e, ex_car_00_180_04_92, x.section_92, 'down');

    g.debug ? ex_debug(o, "KPK3") : 0;
    return e
}
function ex_car_00_180_04_56(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "UHO=") : 0;
    return e
}
function ex_car_00_180_04_80(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 8, x.f32_08)

    e = ex_ml(x.unordered_unknown_00_16, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 16, e, 'down');

    g.debug ? ex_debug(o, "XN1m") : 0;
    return e
}
function ex_car_00_180_04_84(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "@p?P") : 0;
    return e
}
function ex_car_00_180_04_92(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "0CvZ") : 0;
    return e
}
function ex_car_00_180_20(o, e, x) {
    su8(o + 0, x.u8_00)

    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_car_00_180_20_04t1, x.section_04, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_car_00_180_20_04t3, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "7<Bd") : 0;
    return e
}
function ex_car_00_180_20_04t1(o, x) {
    let e = o + divisible(64, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    sf32(o + 36, x.f32_36)

    g.debug ? ex_debug(o, "SbaL") : 0;
    return e
}
function ex_car_00_180_20_04t3(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "Yr?m") : 0;
    return e
}
function ex_car_00_184(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_car_00_184_04, x.section_04, 'down');

    g.debug ? ex_debug(o, ";ljS") : 0;
    return e
}
function ex_car_00_184_04(o, x) {
    let e = o + divisible(64, g.divisibility)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)

    e = ex_s_offset(o + 0, e, ex_car_00_184_04_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_car_00_184_04_04, x.section_04, 'down');
    e = ex_s_offset(o + 8, e, ex_car_00_184_04_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "LRdo") : 0;
    return e
}
function ex_car_00_184_04_00(o, x) {
    let e = o + divisible(80, g.divisibility)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)

    e = ex_s_offset(o + 16, e, ex_car_00_184_04_00_16, x.section_16, 'down');
    e = ex_ml(x.unordered_gate_44, g.gate_array, ex_gate, g.unordered_ref.gate, o + 44, e, 'down');

    g.debug ? ex_debug(o, "2ji0") : 0;
    return e
}
function ex_car_00_184_04_00_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, "^HVp") : 0;
    return e
}
function ex_car_00_184_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    //?
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "oVHV") : 0;
    return e
}
function ex_car_00_184_04_08(o, x) {
    let e = o + divisible(96, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)

    g.debug ? ex_debug(o, "y5Pt") : 0;
    return e
}
function ex_car_00_188(o, x) {
    let e = o + divisible(128, g.divisibility)
    su8(o + 20, x.u8_20)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +64, x.u32_64)
    //amount?   su32(o +72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)

    e = ex_ml(x.ordered_model_animation_2_00, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 0, e, 'down', true);

    e = ex_ml(x.unordered_model_link_04, g.model_link_array, ex_model_link, g.unordered_ref.model_link, o + 4, e, 'down');
    e = ex_ml(x.ordered_model_animation_1_08, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 8, e, 'down', true);
    e = ex_ml(x.ordered_model_animation_1_12, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 12, e, 'down', true);
    e = ex_ml(x.ordered_model_animation_1_16, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 16, e, 'down', true);
    e = ex_ml(x.ordered_model_animation_1_24, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 24, e, 'down', true);
    if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 8, g.divisibility)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_car_00_188_52(temp_offset + (i * 8), e, x.section_52[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 20, g.divisibility)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_car_00_188_60(temp_offset + (i * 20), e, x.section_60[i])
        }
        ;
    }
    ;if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 32, g.divisibility)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_car_00_188_68(temp_offset + (i * 32), e, x.section_68[i])
        }
        ;
    }
    ;if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 32, g.divisibility)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_car_00_188_68(temp_offset + (i * 32), e, x.section_76[i])
        }
        ;
    }
    ;if (x.section_84.length) {
        su32(o + 80, x.section_84.length)
        su32(o + 84, e)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 32, g.divisibility)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_car_00_188_68(temp_offset + (i * 32), e, x.section_84[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "W[ZE") : 0;
    return e
}
function ex_car_00_188_52(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_car_00_188_52_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "Z5qA") : 0;
    return e
}
function ex_car_00_188_52_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_car_00_188_52_04_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "OwVo") : 0;
    return e
}
function ex_car_00_188_52_04_04(o, e, x) {

    e = ex_ml(x.unordered_model_link_00, g.model_link_array, ex_model_link, g.unordered_ref.model_link, o + 0, e, 'down');

    g.debug ? ex_debug(o, ">uIC") : 0;
    return e
}
function ex_car_00_188_60(o, e, x) {
    su16(o + 0, x.u16_00)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)

    g.debug ? ex_debug(o, "po2W") : 0;
    return e
}
function ex_car_00_188_68(o, e, x) {
    su32(o + 0, x.u32_00)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, "8QeR") : 0;
    return e
}
function ex_car_00_192(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +20, x.u32_20)
    su8(o + 28, x.u8_28)

    e = ex_ml(x.unordered_car_00_192_16_16, g.car_00_192_16_array, ex_car_00_192_16, g.unordered_ref.car_00_192_16, o + 16, e, 'down');

    // e = ex_s_offset(o + 16, e, ex_car_00_192_16, x.section_16, 'down');
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_car_00_192_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_wtf_32, g.wtf_array, ex_wtf, g.unordered_ref.wtf, o + 32, e, 'down');

    g.debug ? ex_debug(o, "P[9^") : 0;
    return e
}
function ex_car_00_192_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "HCJ2") : 0;
    return e
}
function ex_car_00_192_24(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "Io]5") : 0;
    return e
}
function ex_car_00_196(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    //?
    sf32(o + 12, x.f32_12)
    //?
    sf32(o + 16, x.f32_16)
    //?
    sf32(o + 20, x.f32_20)
    //?

    e = ex_ml(x.unordered_sound_section_00, g.sound_section_array, ex_sound_section, g.unordered_ref.sound_section, o + 0, e, 'down');
    e = ex_ml(x.unordered_sound_section_08, g.sound_section_array, ex_sound_section, g.unordered_ref.sound_section, o + 8, e, 'down');

    g.debug ? ex_debug(o, "i]Cj") : 0;
    return e
}
function ex_car_00_200(o, x) {
    let e = o + divisible(32, g.divisibility)

    e = ex_ml(x.unordered_interface_00, g.interface_array, ex_interface, g.unordered_ref.interface, o + 0, e, 'down');
    e = ex_ml(x.unordered_interface_04, g.interface_array, ex_interface, g.unordered_ref.interface, o + 4, e, 'down');
    e = ex_ml(x.unordered_interface_08, g.interface_array, ex_interface, g.unordered_ref.interface, o + 8, e, 'down');
    e = ex_ml(x.unordered_interface_12, g.interface_array, ex_interface, g.unordered_ref.interface, o + 12, e, 'down');
    e = ex_ml(x.unordered_interface_16, g.interface_array, ex_interface, g.unordered_ref.interface, o + 16, e, 'down');
    e = ex_ml(x.unordered_interface_20, g.interface_array, ex_interface, g.unordered_ref.interface, o + 20, e, 'down');

    g.debug ? ex_debug(o, "i=si") : 0;
    return e
}
function ex_car_00_208(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 32, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_car_00_208_04(temp_offset + (i * 32), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "Fv88") : 0;
    return e
}
function ex_car_00_208_04(o, e, x) {
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, "z3;b") : 0;
    return e
}
function ex_car_00_216(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "OXT[") : 0;
    return e
}
