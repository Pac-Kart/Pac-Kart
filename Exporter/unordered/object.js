"use strict";
function ex_object(o, x) {
    let e = o + divisible(112, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 11, x.u8_11)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    su8(o + 56, x.u8_56)
    su8(o + 57, x.u8_57)
    su8(o + 58, x.u8_58)
    sf32(o + 76, x.f32_76)
    su8(o + 84, x.u8_84)
    su8(o + 85, x.u8_85)
    //amount?   su32(o +96, x.u32_96)
    su8(o + 108, x.u8_108)
    su8(o + 109, x.u8_109)
    su8(o + 110, x.u8_110)
    su8(o + 111, x.u8_111)

    e = ex_s_offset(o + 12, e, ex_object_12, x.section_12, 'down');
    e = ex_ml(x.ordered_model_animation_2_16, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 16, e, 'down', true);
    switch (x.u8_11) {
    case 15:
        e = ex_ml(x.section_32, g.object_32t15_array, ex_object_32t15, g.unordered_ref.object_32t15, o + 32, e, 'down');

        // e = ex_s_offset(o + 32, e, ex_object_32t15, x.section_32, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 32, e, ex_object_32t16, x.section_32, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 32, e, ex_object_32t17, x.section_32, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 32, e, ex_object_32t18, x.section_32, 'down');
        break;
    }
    e = ex_ml(x.unordered_unknown_00_48, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 48, e, 'down');
    e = ex_ml(x.unordered_frame_text_60, g.frame_text_array, ex_frame_text, g.unordered_ref.frame_text, o + 60, e, 'down');
    e = ex_ml(x.unordered_unknown_00_68, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 68, e, 'down');
    e = ex_ml(x.unordered_wtf_88, g.wtf_array, ex_wtf, g.unordered_ref.wtf, o + 88, e, 'down');
    if (x.section_100.length) {
        su32(o + 96, x.section_100.length)
        su32(o + 100, e)
        g.oa.push(o + 100)
        let temp_offset = e
        e += divisible(x.section_100.length * 64, g.divisibility)
        for (let i = 0; i < x.section_100.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_100[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "5qX^") : 0;
    return e
}
function ex_object_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 16, e, ex_object_12_16, x.section_16, 'down');

    g.debug ? ex_debug(o, "GT<B") : 0;
    return e
}
function ex_object_12_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "9=vr") : 0;
    return e
}
function ex_object_32t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 28, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_object_32t15_04(temp_offset + (i * 28), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_unknown_00_08, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 8, e, 'down');
    e = ex_ml(x.unordered_unknown_00_12, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 12, e, 'down');

    g.debug ? ex_debug(o, "UB;s") : 0;
    return e
}
function ex_object_32t15_04(o, e, x) {
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    sf32(o + 24, x.f32_24)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_object_32t15_04_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_object_32t15_04_04(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_object_32t15_04_04(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "@CqO") : 0;
    return e
}
function ex_object_32t15_04_04(o, e, x) {
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)

    e = ex_ml(x.unordered_um_00, g.um_array, ex_um, g.unordered_ref.um, o + 0, e, 'down');
    e = ex_ml(x.unordered_um_04, g.um_array, ex_um, g.unordered_ref.um, o + 4, e, 'down');

    g.debug ? ex_debug(o, "MiLs") : 0;
    return e
}
function ex_object_32t16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "QIEy") : 0;
    return e
}
function ex_object_32t17(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "0Bai") : 0;
    return e
}
function ex_object_32t18(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_object_32t18_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "zm@Z") : 0;
    return e
}
function ex_object_32t18_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 64, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_08[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "z0[4") : 0;
    return e
}
