"use strict";
function ex_mysterious(o, e, x) {
    su8(o + 0, x.u8_00)
    //?
    su16(o + 2, x.u16_02)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)

    switch (x.u8_00) {
    case 1:
        e = ex_ml(x.section_04, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_04, g.strange_array, ex_strange, g.unordered_ref.strange, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_04, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 4, e, 'down');
        break;
    case 5:
    case 6:
        e = ex_s_offset(o + 4, e, ex_mysterious_04t5, x.section_04, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_mysterious_04t7, x.section_04, 'down');
        break;
    case 8:
        e = ex_ml(x.section_04, g.model_link_array, ex_model_link, g.unordered_ref.model_link, o + 4, e, 'down');
        break;
    case 9:
        e = ex_ml(x.section_04, g.mysterious_04t9_array, ex_mysterious_04t9, g.unordered_ref.mysterious_04t9, o + 4, e, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 4, e, ex_mysterious_04t10, x.section_04, 'down');
        break;
    case 11:
        e = ex_ml(x.section_04, g.activator_array, ex_activator, g.unordered_ref.activator, o + 4, e, 'down');
        break;
    case 13:
        e = ex_ml(x.section_04, g.object_array, ex_object, g.unordered_ref.object, o + 4, e, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 4, e, ex_mysterious_04t16, x.section_04, 'down');
        break;
    }
    switch (x.u8_00) {
    case 8:
        e = ex_s_offset(o + 8, e, ex_mysterious_08t8, x.section_08, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 8, e, ex_mysterious_08t8t13, x.section_08, 'down');
        break;
    }
    g.debug ? ex_debug(o, "6HXc") : 0;
    return e
}
function ex_mysterious_04t5(o, x) {
    let e = o + divisible(64, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 4, x.u32_04)
    //amount?   su32(o +12, x.u32_12)
    su32(o + 20, x.u32_20)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su32(o + 32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)

    let temp_function = ex_mysterious_04t5_16t0

    switch (x.u8_03) {
    case 0:
        temp_function = ex_mysterious_04t5_16t0
        // e = ex_s_offset(o + 16, e, ex_mysterious_04t5_16t0, x.section_16, 'down');
        break;
    case 2:
        temp_function = ex_mysterious_04t5_16t2
        break;
    case 3:
        temp_function = ex_mysterious_04t5_16t3
        break;
    case 5:
        temp_function = ex_mysterious_04t5_16t5
        break;
    }

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 4, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = temp_function(temp_offset + (i * 4), e, x.section_16[i], temp_offset)
        }
        ;
    }

    e = ex_s_offset(o + 56, e, ex_mysterious_04t5_56, x.section_56, 'down');

    e = ex_s_offset(o + 28, e, ex_mysterious_04t5_28, x.section_28, 'down');

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 32, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_mysterious_04t5_36(temp_offset + (i * 32), e, x.section_36[i])
        }
        ;
    }
    ;// e = ex_s_offset(o + 36, e, ex_mysterious_04t5_36, x.section_36, 'down');

    if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 32, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_mysterious_04t5_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 12, g.divisibility)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_mysterious_04t5_52(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "9Ath") : 0;
    return e
}
function ex_mysterious_04t5_56(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, "A=jF") : 0;
    return e
}
function ex_mysterious_04t5_16t0(o, e, x, temp_offset) {

    e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug ? ex_debug(o, "EKNY") : 0;
    return e
}
function ex_mysterious_04t5_16t2(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "3?>d") : 0;
    return e
}
function ex_mysterious_04t5_16t3(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "v_QQ") : 0;
    return e
}
function ex_mysterious_04t5_16t5(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "m2pQ") : 0;
    return e
}
function ex_mysterious_04t5_28(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)

    g.debug ? ex_debug(o, "HvTH") : 0;
    return e
}
function ex_mysterious_04t5_36(o, e, x) {
    sf32(o + 0, x.f32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "ppEO") : 0;
    return e
}
function ex_mysterious_04t5_44(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "y8JQ") : 0;
    return e
}
function ex_mysterious_04t5_52(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "I>8i") : 0;
    return e
}
function ex_mysterious_04t7(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)

    e = ex_s_offset(o + 12, e, ex_mysterious_04t7_12, x.section_12, 'down');
    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_mysterious_04t7_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 12, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_mysterious_04t7_36(temp_offset + (i * 12), e, x.section_44[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "LHk@") : 0;
    return e
}
function ex_mysterious_04t7_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "VsIs") : 0;
    return e
}
function ex_mysterious_04t7_36(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "MkA:") : 0;
    return e
}

function ex_mysterious_04t10(o, x) {
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
    ;g.debug ? ex_debug(o, "tcdy") : 0;
    return e
}
function ex_mysterious_04t16(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    e = ex_s_offset(o + 8, e, ex_mysterious_04t16_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_mysterious_04t16_12, x.section_12, 'down');
    e = ex_s_offset(o + 36, e, ex_mysterious_04t16_36, x.section_36, 'down');

    g.debug ? ex_debug(o, "t@mD") : 0;
    return e
}
function ex_mysterious_04t16_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "ha1^") : 0;
    return e
}
function ex_mysterious_04t16_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "dY3z") : 0;
    return e
}
function ex_mysterious_04t16_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_mysterious_04t16_36_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "c7na") : 0;
    return e
}
function ex_mysterious_04t16_36_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 12, x.f32_12)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)

    e = ex_s_offset(o + 4, e, ex_mysterious_04t16_36_04_04, x.section_04, 'up');

    g.debug ? ex_debug(o, ">>D@") : 0;
    return e
}
function ex_mysterious_04t16_36_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_mysterious_04t16_36_04_04_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "t?fG") : 0;
    return e
}
function ex_mysterious_04t16_36_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_mysterious_04t16_36_04_04_04_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_mysterious_04t16_36_04_04_04_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "YpBH") : 0;
    return e
}
function ex_mysterious_04t16_36_04_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)

    g.debug ? ex_debug(o, "8JdH") : 0;
    return e
}
function ex_mysterious_04t16_36_04_04_04_12(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug ? ex_debug(o, "XMTK") : 0;
    return e
}
function ex_mysterious_08t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "ToIp") : 0;
    return e
}
function ex_mysterious_08t8t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "xp6s") : 0;
    return e
}
