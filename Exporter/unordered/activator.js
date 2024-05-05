"use strict";
function ex_activator(o, x) {
    let e = o + divisible(256, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    su32(o + 48, x.u32_48)
    su32(o + 56, x.u32_56)
    su32(o + 64, x.u32_64)
    sf32(o + 72, x.f32_72)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 96, x.f32_96)
    su32(o + 100, x.u32_100)
    sf32(o + 104, x.f32_104)
    su32(o + 112, x.u32_112)
    su8(o + 120, x.u8_120)
    su8(o + 121, x.u8_121)
    su8(o + 122, x.u8_122)
    su8(o + 123, x.u8_123)
    sf32(o + 128, x.f32_128)
    sf32(o + 132, x.f32_132)
    sf32(o + 136, x.f32_136)
    su32(o + 140, x.u32_140)
    su8(o + 153, x.u8_153)
    su8(o + 154, x.u8_154)
    su8(o + 155, x.u8_155)
    //amount?   su32(o +172, x.u32_172)
    //amount?   su32(o +180, x.u32_180)
    //amount?   su32(o +188, x.u32_188)
    sf32(o + 204, x.f32_204)
    //amount?   su32(o +208, x.u32_208)
    su32(o + 224, x.u32_224)
    //amount?   su32(o +244, x.u32_244)

    e = ex_ml(x.ordered_model_animation_2_04, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 4, e, 'down', true);
    e = ex_string(o + 8, e, x.section_08)
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 24, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_activator_24(temp_offset + (i * 24), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 24, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_activator_32(temp_offset + (i * 24), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 108, e, ex_activator_108, x.section_108, 'down');
    e = ex_s_offset(o + 116, e, ex_activator_116, x.section_116, 'down');
    e = ex_s_offset(o + 124, e, ex_activator_124, x.section_124, 'down');
    e = ex_s_offset(o + 144, e, ex_activator_144, x.section_144, 'down');
    e = ex_ml(x.unordered_wtf_148, g.wtf_array, ex_wtf, g.unordered_ref.wtf, o + 148, e, 'down');
    if (x.section_176.length) {
        su32(o + 172, x.section_176.length)
        su32(o + 176, e)
        g.oa.push(o + 176)
        let temp_offset = e
        e += divisible(x.section_176.length * 20, g.divisibility)
        for (let i = 0; i < x.section_176.length; i++) {
            e = ex_activator_176(temp_offset + (i * 20), e, x.section_176[i])
        }
        ;
    }
    ;if (x.section_184.length) {
        su32(o + 180, x.section_184.length)
        su32(o + 184, e)
        g.oa.push(o + 184)
        let temp_offset = e
        e += divisible(x.section_184.length * 12, g.divisibility)
        for (let i = 0; i < x.section_184.length; i++) {
            e = ex_activator_184(temp_offset + (i * 12), e, x.section_184[i])
        }
        ;
    }
    ;if (x.section_192.length) {
        su32(o + 188, x.section_192.length)
        su32(o + 192, e)
        g.oa.push(o + 192)
        let temp_offset = e
        e += divisible(x.section_192.length * 12, g.divisibility)
        for (let i = 0; i < x.section_192.length; i++) {
            e = ex_activator_184(temp_offset + (i * 12), e, x.section_192[i])
        }
        ;
    }
    ;if (x.section_212.length) {
        su32(o + 208, x.section_212.length)
        su32(o + 212, e)
        g.oa.push(o + 212)
        let temp_offset = e
        e += divisible(x.section_212.length * 4, g.divisibility)
        for (let i = 0; i < x.section_212.length; i++) {
            e = ex_unknown(temp_offset + (i * 4), e, x.section_212[i])
        }
        ;
    }
    ;if (x.section_228.length) {
        su32(o + 224, x.section_228.length)
        su32(o + 228, e)
        g.oa.push(o + 228)
        let temp_offset = e
        e += divisible(x.section_228.length * 4, g.divisibility)
        for (let i = 0; i < x.section_228.length; i++) {
            e = ex_unknown(temp_offset + (i * 4), e, x.section_228[i])
        }
        ;
    }

    if (x.section_248.length) {
        su32(o + 244, x.section_248.length)
        su32(o + 248, e)
        g.oa.push(o + 248)
        let temp_offset = e
        e += divisible(x.section_248.length * 36, g.divisibility)
        for (let i = 0; i < x.section_248.length; i++) {
            e = ex_activator_248(temp_offset + (i * 36), e, x.section_248[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "l<;x") : 0;
    return e
}
function ex_activator_24(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    sf32(o + 8, x.f32_08)
    sf32(o + 20, x.f32_20)

    switch (x.u8_00) {
    case 4:
        e = ex_s_offset(o + 4, e, ex_activator_24_04t4, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_activator_24_04t6, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "glMF") : 0;
    return e
}
function ex_activator_24_04t4(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_activator_24_04t4_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "bGu2") : 0;
    return e
}
function ex_activator_24_04t4_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "adhQ") : 0;
    return e
}
function ex_activator_24_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 12, x.u32_12)

    e = ex_string(o + 8, e, x.section_08)

    g.debug ? ex_debug(o, "X4]]") : 0;
    return e
}
function ex_activator_32(o, e, x) {
    su8(o + 0, x.u8_00)
    //amount?   su32(o +16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_activator_32_04, x.section_04, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_activator_32_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "cLCA") : 0;
    return e
}
function ex_activator_32_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "I0GU") : 0;
    return e
}
function ex_activator_32_20(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 8, e, ex_activator_32_20_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "TW8<") : 0;
    return e
}
function ex_activator_32_20_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "lwQw") : 0;
    return e
}
function ex_activator_108(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    switch (x.u32_04) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_activator_108_08t1, x.section_08, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 8, e, ex_activator_108_08t2, x.section_08, 'up');
        break;
    }
    g.debug ? ex_debug(o, "@Rl9") : 0;
    return e
}
function ex_activator_108_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "nWhz") : 0;
    return e
}
function ex_activator_108_08t2(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 4, x.u8_04)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 8, e, ex_activator_108_08t2_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "a^w<") : 0;
    return e
}
function ex_activator_108_08t2_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "JK60") : 0;
    return e
}
function ex_activator_116(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "Hjii") : 0;
    return e
}
function ex_activator_124(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, ">YDp") : 0;
    return e
}
function ex_activator_144(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "oS0Q") : 0;
    return e
}
function ex_activator_176(o, e, x) {
    su32(o + 0, x.u32_00)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 12, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_activator_176_08(temp_offset + (i * 12), e, x.section_08[i])
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_activator_176_08(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "[]R5") : 0;
    return e
}
function ex_activator_176_08(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    switch (x.u32_00) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_activator_176_08t0, x.section_08, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 8, e, ex_activator_176_08t13, x.section_08, 'down');
        break;
    case 19:
        e = ex_s_offset(o + 8, e, ex_activator_176_08t19, x.section_08, 'down');
        break;
    }
    g.debug ? ex_debug(o, "qe;J") : 0;
    return e
}
function ex_activator_176_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "f<Az") : 0;
    return e
}
function ex_activator_176_08t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "m==1") : 0;
    return e
}
function ex_activator_176_08t19(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "_27H") : 0;
    return e
}
function ex_activator_184(o, e, x) {
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
    ;g.debug ? ex_debug(o, "@?i9") : 0;
    return e
}
function ex_activator_248(o, e, x) {
    su32(o + 0, x.u32_00)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su8(o + 24, x.u8_24)
    //amount?   su32(o +28, x.u32_28)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_activator_248_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }

    e = ex_string(o + 8, e, x.section_08)

    e = ex_ml(x.unordered_sound_controls_20, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 20, e, 'down');
    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 80, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_activator_248_32(temp_offset + (i * 80), e, x.section_32[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "?z[q") : 0;
    return e
}

function ex_activator_248_04(o, e, x) {
    su8(o + 0, x.u8_00)
    //?
    su8(o + 1, x.u8_01)

    switch (x.u8_00) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t0, x.section_04, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t2, x.section_04, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t3, x.section_04, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t4, x.section_04, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t5, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t6, x.section_04, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t9, x.section_04, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t11, x.section_04, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t12, x.section_04, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t13, x.section_04, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 4, e, ex_activator_248_04_04t15, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "eFj[") : 0;
    return e
}
function ex_activator_248_04_04t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_ml(x.unordered_activator_248_04_04t0_04_04, g.activator_248_04_04t0_04_array, ex_activator_248_04_04t0_04, g.unordered_ref.activator_248_04_04t0_04, o + 4, e, 'down');

    g.debug ? ex_debug(o, "^8L8") : 0;
    return e
}

function ex_activator_248_04_04t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "efdJ") : 0;
    return e
}
function ex_activator_248_04_04t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "Kasf") : 0;
    return e
}
function ex_activator_248_04_04t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "WwhE") : 0;
    return e
}
function ex_activator_248_04_04t4(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "NlMB") : 0;
    return e
}
function ex_activator_248_04_04t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "l^7U") : 0;
    return e
}
function ex_activator_248_04_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "E4l6") : 0;
    return e
}
function ex_activator_248_04_04t9(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)
    su8(o + 20, x.u8_20)
    su8(o + 22, x.u8_22)

    g.debug ? ex_debug(o, "fG?:") : 0;
    return e
}
function ex_activator_248_04_04t11(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "fza6") : 0;
    return e
}
function ex_activator_248_04_04t12(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug ? ex_debug(o, "^SbD") : 0;
    return e
}
function ex_activator_248_04_04t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 0, e, ex_activator_248_04_04t13_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "x^VU") : 0;
    return e
}
function ex_activator_248_04_04t13_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_activator_248_04_04t13_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "=3BZ") : 0;
    return e
}
function ex_activator_248_04_04t13_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "R<zK") : 0;
    return e
}
function ex_activator_248_04_04t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "Gyl2") : 0;
    return e
}
function ex_activator_248_32(o, e, x) {
    //amount?   su32(o +04, x.u32_04)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 56, x.f32_56)
    su8(o + 61, x.u8_61)
    sf32(o + 64, x.f32_64)
    //amount?   su32(o +68, x.u32_68)

    e = ex_string(o + 0, e, x.section_00)
    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 4, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_activator_248_32_08(temp_offset + (i * 4), e, x.section_08[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 16, e, ex_activator_248_32_16, x.section_16, 'down');
    e = ex_s_offset(o + 32, e, ex_activator_248_32_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_activator_248_32_36, x.section_36, 'down');
    e = ex_s_offset(o + 52, e, ex_activator_248_32_52, x.section_52, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 12, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_activator_248_32_72(temp_offset + (i * 12), e, x.section_72[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 76, e, ex_activator_248_32_76, x.section_76, 'down');

    g.debug ? ex_debug(o, "[YtQ") : 0;
    return e
}
function ex_activator_248_32_08(o, e, x) {

    e = ex_ml(x.unordered_model_link_00, g.model_link_array, ex_model_link, g.unordered_ref.model_link, o + 0, e, 'down');

    g.debug ? ex_debug(o, "b1U_") : 0;
    return e
}
function ex_activator_248_32_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, ";Cj[") : 0;
    return e
}
function ex_activator_248_32_32(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "gYJ6") : 0;
    return e
}
function ex_activator_248_32_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "bL44") : 0;
    return e
}
function ex_activator_248_32_52(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "Jyqr") : 0;
    return e
}
function ex_activator_248_32_72(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    switch (x.u32_00) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t0, x.section_08, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t2, x.section_08, 'down');
        break;
    case 4:
        e = ex_ml(x.section_08, g.activator_array, ex_activator, g.unordered_ref.activator, o + 8, e, 'down');
        break;
    case 5:
        e = ex_ml(x.section_08, g.activator_array, ex_activator, g.unordered_ref.activator, o + 8, e, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t08, x.section_08, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t10, x.section_08, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t12, x.section_08, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t13, x.section_08, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t14, x.section_08, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t15, x.section_08, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t16, x.section_08, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t17, x.section_08, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t18, x.section_08, 'down');
        break;
    case 20:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t20, x.section_08, 'down');
        break;
    case 22:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t22, x.section_08, 'down');
        break;
    case 23:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t23, x.section_08, 'down');
        break;
    case 25:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t25, x.section_08, 'down');
        break;
    case 32:
        e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t32, x.section_08, 'down');
        break;
    }
    g.debug ? ex_debug(o, "nEkh") : 0;
    return e
}
function ex_activator_248_32_72_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "aZvb") : 0;
    return e
}
function ex_activator_248_32_72_08t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "p;V@") : 0;
    return e
}
function ex_activator_248_32_72_08t08(o, x) {
    let e = o + divisible(16, g.divisibility)
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
    ;g.debug ? ex_debug(o, "SI@e") : 0;
    return e
}
function ex_activator_248_32_72_08t10(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "5m=S") : 0;
    return e
}
function ex_activator_248_32_72_08t12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, ":EX6") : 0;
    return e
}
function ex_activator_248_32_72_08t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "kgg>") : 0;
    return e
}
function ex_activator_248_32_72_08t14(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "C0jR") : 0;
    return e
}
function ex_activator_248_32_72_08t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "Rvzj") : 0;
    return e
}
function ex_activator_248_32_72_08t16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su16(o + 0, x.u16_00)

    g.debug ? ex_debug(o, "UN>>") : 0;
    return e
}
function ex_activator_248_32_72_08t17(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    //amount?   su32(o +04, x.u32_04)

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
    ;g.debug ? ex_debug(o, "<JlD") : 0;
    return e
}
function ex_activator_248_32_72_08t18(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t18_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "Cuaw") : 0;
    return e
}
function ex_activator_248_32_72_08t18_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //?

    switch (x.u32_00) {
    case 0:
        e = ex_ml(x.section_04, g.activator_248_32_72_08t18_08_04t0_array, ex_activator_248_32_72_08t18_08_04t0, g.unordered_ref.activator_248_32_72_08t18_08_04t0, o + 4, e, 'down');
        // e = ex_s_offset(o + 4, e, ex_activator_248_32_72_08t18_08_04t0, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_activator_248_32_72_08t18_08_04t6, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "0DjR") : 0;
    return e
}
function ex_activator_248_32_72_08t18_08_04t0(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)
    su8(o + 32, x.u8_32)

    g.debug ? ex_debug(o, "zTx1") : 0;
    return e
}
function ex_activator_248_32_72_08t18_08_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)

    e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t18_08_04t6_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "dDkA") : 0;
    return e
}
function ex_activator_248_32_72_08t18_08_04t6_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "WtoY") : 0;
    return e
}
function ex_activator_248_32_72_08t20(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 0:
        sf32(o + 0, x.section_00)
        break;
    case 1:
        e = ex_s_offset(o + 0, e, ex_activator_248_32_72_08t20_00t1, x.section_00, 'down');
        break;
    }

    g.debug ? ex_debug(o, "6ST2") : 0;
    return e
}

function ex_activator_248_32_72_08t20_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "3GdC") : 0;
    return e
}

function ex_activator_248_32_72_08t22(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 0, e, ex_activator_248_32_72_08t22_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "?eVk") : 0;
    return e
}
function ex_activator_248_32_72_08t22_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_activator_248_32_72_08t22_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "lzmB") : 0;
    return e
}
function ex_activator_248_32_72_08t22_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "dB@:") : 0;
    return e
}
function ex_activator_248_32_72_08t23(o, x) {
    let e = o + divisible(16, g.divisibility)
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
    ;g.debug ? ex_debug(o, "VVui") : 0;
    return e
}
function ex_activator_248_32_72_08t25(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_activator_248_32_72_08t25_04, x.section_04, 'up');

    g.debug ? ex_debug(o, "G:q=") : 0;
    return e
}
function ex_activator_248_32_72_08t25_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 8, e, ex_activator_248_32_72_08t25_04_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "8Mt3") : 0;
    return e
}
function ex_activator_248_32_72_08t25_04_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "3Zr0") : 0;
    return e
}
function ex_activator_248_32_72_08t32(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "y_sB") : 0;
    return e
}
function ex_activator_248_32_76(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "XAur") : 0;
    return e
}
