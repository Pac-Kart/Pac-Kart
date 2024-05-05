"use strict";
function ex_interface(o, x) {
    let e = o + divisible(80, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su16(o + 2, x.u16_02)
    //amount?   su32(o +08, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 44, x.u32_44)
    sf32(o + 60, x.f32_60)
    //amount?   su32(o +68, x.u32_68)

    e = ex_s_offset(o + 4, e, ex_interface_04, x.section_04, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 28, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_interface_12(temp_offset + (i * 28), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_sound_controls_28, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 28, e, 'down');
    e = ex_ml(x.unordered_sound_controls_36, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 36, e, 'down');
    e = ex_ml(x.unordered_sound_controls_40, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 40, e, 'down');
    e = ex_s_offset(o + 48, e, ex_interface_48, x.section_48, 'up');
    e = ex_ml(x.unordered_sound_controls_52, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 52, e, 'down');
    e = ex_s_offset(o + 56, e, ex_interface_56, x.section_56, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 100, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_interface_72(temp_offset + (i * 100), e, x.section_72[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "DE>T") : 0;
    return e
}
function ex_xdx_interface(o, x) {
    let e = o + divisible(80, g.divisibility)
    //amount?   su32(o +08, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    sf32(o + 60, x.f32_60)
    //amount?   su32(o +68, x.u32_68)

    e = ex_s_offset(o + 4, e, ex_interface_04, x.section_04, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 28, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_interface_12(temp_offset + (i * 28), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 48, e, ex_interface_48, x.section_48, 'down');
    e = ex_s_offset(o + 56, e, ex_xdx_interface_56, x.section_56, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 100, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_interface_72(temp_offset + (i * 100), e, x.section_72[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "RY2Q") : 0;
    return e
}
function ex_interface_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 36, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_04_04(temp_offset + (i * 36), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "t[O_") : 0;
    return e
}
function ex_interface_04_04(o, e, x) {

    su8(o + 4, x.u8_04)
    //?
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 8, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)

    e = ex_string(o + 0, e, x.section_00)
    switch (x.u8_04) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_interface_04_04_12t1, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_interface_04_04_12t5, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_interface_04_04_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_interface_04_04_12t8, x.section_12, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 12, e, ex_interface_04_04_12t9, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, "E>z=") : 0;
    return e
}
function ex_interface_04_04_12t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_interface_04_04_12t1_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "ff@u") : 0;
    return e
}
function ex_interface_04_04_12t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "iRTP") : 0;
    return e
}
function ex_interface_04_04_12t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "Y83X") : 0;
    return e
}
function ex_interface_04_04_12t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)

    g.debug ? ex_debug(o, "_C8D") : 0;
    return e
}
function ex_interface_04_04_12t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_04_04_12t8_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "c761") : 0;
    return e
}
function ex_interface_04_04_12t8_04(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)

    e = ex_string(o + 8, e, x.section_08)

    g.debug ? ex_debug(o, "hj0[") : 0;
    return e
}
function ex_interface_04_04_12t9(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    e = ex_string(o + 4, e, x.section_04)
    e = ex_string(o + 8, e, x.section_08)

    g.debug ? ex_debug(o, "iMTM") : 0;
    return e
}
function ex_interface_12(o, e, x) {
    su32(o + 0, x.u32_00)
    //?
    su32(o + 8, x.u32_08)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    switch (x.u32_00) {
    case 1026:
        e = ex_s_offset(o + 4, e, ex_interface_12_04t1026, x.section_04, 'down');
        break;
    case 1027:
        e = ex_s_offset(o + 4, e, ex_interface_12_04t1027, x.section_04, 'down');
        break;
    }
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_interface_12_16(temp_offset + (i * 8), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 36, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_interface_12_24(temp_offset + (i * 36), e, x.section_24[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "ur09") : 0;
    return e
}
function ex_interface_12_04t1026(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su32(o + 4, x.u32_04)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 8, e, ex_interface_12_04t1026_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "eM8<") : 0;
    return e
}
function ex_interface_12_04t1026_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_interface_12_04t1026_08_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "MOIH") : 0;
    return e
}
function ex_interface_12_04t1026_08_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "OfCN") : 0;
    return e
}
function ex_interface_12_04t1027(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "CrJX") : 0;
    return e
}
function ex_interface_12_16(o, e, x) {
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_interface_12_04t1026, x.section_04, 'down');

    g.debug ? ex_debug(o, "D;AX") : 0;
    return e
}
function ex_interface_12_24(o, e, x) {
    su8(o + 0, x.u8_00)
    //?
    su8(o + 1, x.u8_01)
    su16(o + 2, x.u16_02)
    su32(o + 20, x.u32_20)
    //?

    switch (x.u8_00) {
    case 1:
    case 31:
        e = ex_ml(x.section_04, g.interface_array, ex_interface, g.unordered_ref.interface, o + 4, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_interface_12_24_04t11, x.section_04, 'down');
        break;
    }
    e = ex_s_offset(o + 8, e, ex_interface_12_24_08, x.section_08, 'down');
    e = ex_ml(x.unordered_sound_controls_24, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 24, e, 'down');

    g.debug ? ex_debug(o, "zuhf") : 0;
    return e
}
function ex_interface_12_24_04t11(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_12_24_04t11_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "n1Ib") : 0;
    return e
}
function ex_interface_12_24_04t11_04(o, e, x) {
    su16(o + 4, x.u16_04)
    //?

    switch (x.u16_04) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_interface_12_24_04t11_04_08t0, x.section_08, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 8, e, ex_interface_12_24_04t11_04_08t1, x.section_08, 'down');
        break;
    case 3:
        e = ex_ml(x.section_08, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 8, e, 'down');
        break;
    case 100:
        e = ex_ml(x.section_08, g.interface_array, ex_interface, g.unordered_ref.interface, o + 8, e, 'down');
        break;
    case 101:
        e = ex_ml(x.section_08, g.interface_array, ex_interface, g.unordered_ref.interface, o + 8, e, 'down');
        break;
    }
    e = ex_s_offset(o + 0, e, ex_interface_12_24_04t11_04_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "iW5E") : 0;
    return e
}
function ex_xdx_interface_12_24_04t11_04(o, e, x) {
    su32(o + 0, x.u32_00)

    switch (x.u32_00) {
    case 0:
    case 3:
        e = ex_s_offset(o + 4, e, ex_xdx_interface_12_24_04t11_04_04t0, x.section_04, 'down');
        break;
    case 1:
    case 2:
        e = ex_s_offset(o + 4, e, ex_xdx_interface_12_24_04t11_04_04t1, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "APBG") : 0;
    return e
}
function ex_demo_interface_12_24_04t11_04(o, e, x) {
    su32(o + 0, x.u32_00)

    switch (x.u32_00) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_xdx_interface_12_24_04t11_04_04t0, x.section_04, 'down');
        break;
    case 1:
    case 2:
        e = ex_s_offset(o + 4, e, ex_xdx_interface_12_24_04t11_04_04t1, x.section_04, 'down');
        break;
    case 3:
        e = ex_ml(x.section_04, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 4, e, 'down');
        break;
    }
    g.debug ? ex_debug(o, "V9M^") : 0;
    return e
}
function ex_interface_12_24_04t11_04_00(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug ? ex_debug(o, "a[6^") : 0;
    return e
}
function ex_xdx_interface_12_24_04t11_04_04t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)

    g.debug ? ex_debug(o, "N6j5") : 0;
    return e
}
function ex_xdx_interface_12_24_04t11_04_04t1(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_xdx_interface_12_24_04t11_04_04t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_xdx_interface_12_24_04t11_04_04t1_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "cVgG") : 0;
    return e
}
function ex_xdx_interface_12_24_04t11_04_04t1_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_xdx_interface_12_24_04t11_04_04t1_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "prT=") : 0;
    return e
}
function ex_xdx_interface_12_24_04t11_04_04t1_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "cTVw") : 0;
    return e
}
function ex_xdx_interface_12_24_04t11_04_04t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "b6fO") : 0;
    return e
}
function ex_interface_12_24_04t11_04_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su16(o + 6, x.u16_06)

    g.debug ? ex_debug(o, "oDAO") : 0;
    return e
}
function ex_interface_12_24_04t11_04_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_interface_12_24_04t11_04_08t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_interface_12_24_04t11_04_08t1_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "yeXP") : 0;
    return e
}
function ex_interface_12_24_04t11_04_08t1_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_interface_12_24_04t11_04_08t1_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "vc]9") : 0;
    return e
}
function ex_interface_12_24_04t11_04_08t1_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "2x:w") : 0;
    return e
}
function ex_interface_12_24_08(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_interface_12_24_08_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_interface_12_24_08_00, x.section_04, 'down');

    g.debug ? ex_debug(o, "=[l3") : 0;
    return e
}
function ex_interface_12_24_08_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "V1Qy") : 0;
    return e
}
function ex_interface_48(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "pHeY") : 0;
    return e
}
function ex_interface_56(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "a7PK") : 0;
    return e
}
function ex_xdx_interface_56(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    e = ex_string(o + 0, e, x.section_00)

    g.debug ? ex_debug(o, "T39]") : 0;
    return e
}
function ex_interface_72(o, e, x) {
    su32(o + 4, x.u32_04)
    su32(o + 12, x.u32_12)
    su16(o + 16, x.u16_16)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    //?
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 48, x.u32_48)
    //?
    su8(o + 56, x.u8_56)
    su32(o + 60, x.u32_60)
    //amount?   su32(o +68, x.u32_68)

    for (let i = 76; i < 100; i += 4) {
        su32(o + i, 0xffffffff)
    }

    e = ex_string(o + 0, e, x.section_00)
    e = ex_s_offset(o + 8, e, ex_interface_72_08, x.section_08, 'down');
    switch (x.u32_12) {
    case 4:
        e = ex_s_offset(o + 20, e, ex_interface_72_20t4, x.section_20, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 20, e, ex_interface_72_20t7, x.section_20, 'down');
        break;
    case 38:
    case 106:
    case 107:
        e = ex_s_offset(o + 20, e, ex_interface_72_20t38, x.section_20, 'down');
        break;
    }
    switch (x.u8_19) {
    case 0:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t0, x.section_24, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t1, x.section_24, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t3, x.section_24, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t5, x.section_24, 'down');
        break;
    case 6:
    case 7:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t6, x.section_24, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t10, x.section_24, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t12, x.section_24, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t13, x.section_24, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t14, x.section_24, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t15, x.section_24, 'down');
        break;
    }
    e = ex_s_offset(o + 32, e, ex_interface_72_32, x.section_32, 'down');
    e = ex_string(o + 48, e, x.section_48)
    e = ex_s_offset(o + 44, e, ex_interface_72_44, x.section_44, 'down');

    e = ex_s_offset(o + 52, e, ex_interface_72_52, x.section_52, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 12, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_interface_72_72(temp_offset + (i * 12), e, x.section_72[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "pm0N") : 0;
    return e
}
function ex_xdx_interface_72(o, e, x) {
    su32(o + 12, x.u32_12)
    su16(o + 16, x.u16_16)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su32(o + 28, x.u32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    su32(o + 36, x.u32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su8(o + 60, x.u8_60)
    su32(o + 64, x.u32_64)
    //amount?   su32(o +72, x.u32_72)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)
    su32(o + 88, x.u32_88)
    su32(o + 92, x.u32_92)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)

    e = ex_string(o + 0, e, x.section_00)
    e = ex_s_offset(o + 8, e, ex_interface_72_08, x.section_08, 'down');
    switch (x.u32_12) {
    case 4:
        e = ex_s_offset(o + 20, e, ex_interface_72_20t4, x.section_20, 'down');
        break;
    }
    switch (x.u8_19) {
    case 0:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t0, x.section_24, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t1, x.section_24, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t3, x.section_24, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t5, x.section_24, 'down');
        break;
    case 6:
    case 7:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t6, x.section_24, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t10, x.section_24, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t1, x.section_24, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t13, x.section_24, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t14, x.section_24, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 24, e, ex_interface_72_24t15, x.section_24, 'down');
        break;
    }
    if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 12, g.divisibility)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_interface_72_72(temp_offset + (i * 12), e, x.section_76[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "OOdl") : 0;
    return e
}
function ex_interface_72_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 12, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_interface_72_08_08(temp_offset + (i * 12), e, x.section_08[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "N0DQ") : 0;
    return e
}
function ex_interface_72_08_08(o, e, x) {
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)
    //?

    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_xdx_interface_72_08_08_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_interface_72_08_08_04t2, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_interface_72_08_08_04t6, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "KIz?") : 0;
    return e
}
function ex_xdx_interface_72_08_08_04t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "kZ@D") : 0;
    return e
}
function ex_interface_72_08_08_04t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_interface_72_08_08_04t2_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "]SvT") : 0;
    return e
}
function ex_interface_72_08_08_04t2_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "ayw6") : 0;
    return e
}
function ex_interface_72_08_08_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "VVT5") : 0;
    return e
}
function ex_interface_72_20t4(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, "Rogp") : 0;
    return e
}
function ex_interface_72_20t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "0qHw") : 0;
    return e
}
function ex_interface_72_20t38(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "86Z1") : 0;
    return e
}
function ex_interface_72_24t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)

    switch (x.u8_00) {
    case 0:
        ex_patch(o + 4, g.texture_patch_array, x.section_04)
        break;
    case 1:
        e = ex_ml(x.section_04, g.models_array, ex_models, g.ordered_ref.models, o + 4, e, 'none', true, "model");
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_interface_72_24t0_08, x.section_08, 'down');
        break;
    }

    g.debug ? ex_debug(o, "kfIQ") : 0;
    return e
}
function ex_interface_72_24t0_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 11, x.u8_11)
    su8(o + 16, x.u8_16)
    su16(o + 18, x.u16_18)
    su32(o + 20, x.u32_20)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_72_24t0_08_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "TDHb") : 0;
    return e
}
function ex_interface_72_24t0_08_04(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "UDFi") : 0;
    return e
}
function ex_interface_72_24t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    //?
    su8(o + 3, x.u8_03)
    //?
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su16(o + 18, x.u16_18)
    su16(o + 20, x.u16_20)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    sf32(o + 24, x.f32_24)

    switch (x.u8_00) {
    case 0:
        e = ex_ml(x.section_04, g.frame_text_array, ex_frame_text, g.unordered_ref.frame_text, o + 4, e, 'down');
        break;
    }
    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_interface_72_24t1_08t1, x.section_08, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_interface_72_24t1_08t3, x.section_08, 'down');
        break;
    }
    switch (x.u8_02) {
    case 0:
        e = ex_ml(x.section_12, g.frame_font_array, ex_frame_font, g.unordered_ref.frame_font, o + 12, e, 'down');
        break;
    case 1:
        e = ex_ml(x.section_12, g.frame_multi_font_array, ex_frame_multi_font, g.unordered_ref.frame_multi_font, o + 12, e, 'down');
        break;
    }
    g.debug ? ex_debug(o, "42bp") : 0;
    return e
}
function ex_interface_72_24t1_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su16(o + 10, x.u16_10)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_72_24t1_08t1_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "cisK") : 0;
    return e
}
function ex_interface_72_24t1_08t1_04(o, e, x) {

    e = ex_ml(x.unordered_frame_text_00, g.frame_text_array, ex_frame_text, g.unordered_ref.frame_text, o + 0, e, 'down');

    g.debug ? ex_debug(o, "Fw>1") : 0;
    return e
}
function ex_xdx_interface_72_24t1_08t1_04(o, e, x) {

    e = ex_ml(x.unordered_frame_text_00, g.frame_text_array, ex_frame_text, g.unordered_ref.frame_text, o + 0, e, 'down');

    g.debug ? ex_debug(o, "Rf>C") : 0;
    return e
}
function ex_interface_72_24t1_08t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "DT6;") : 0;
    return e
}
function ex_interface_72_24t3(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su32(o + 12, x.u32_12)
    //amount?

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_72_24t3_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 16, e, ex_interface_72_24t3_16, x.section_16, 'up');

    g.debug ? ex_debug(o, "QQ4F") : 0;
    return e
}
function ex_interface_72_24t3_04(o, e, x) {

    e = ex_ml(x.unordered_model_link_00, g.model_link_array, ex_model_link, g.unordered_ref.model_link, o + 0, e, 'down');
    e = ex_ml(x.unordered_sound_controls_04, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 4, e, 'down');

    g.debug ? ex_debug(o, "51Zd") : 0;
    return e
}
function ex_interface_72_24t3_16(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 8, e, ex_interface_72_24t3_16_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "B1Q2") : 0;
    return e
}
function ex_interface_72_24t3_16_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su16(o + 6, x.u16_06)

    g.debug ? ex_debug(o, "W<pr") : 0;
    return e
}
function ex_interface_72_24t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "9g_z") : 0;
    return e
}
function ex_interface_72_24t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    //amount?   su32(o +08, x.u32_08)

    e = ex_ml(x.unordered_interface_00, g.interface_array, ex_interface, g.unordered_ref.interface, o + 0, e, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_interface_72_24t6_12(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "Nz3x") : 0;
    return e
}
function ex_interface_72_24t6_12(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "tcGx") : 0;
    return e
}
function ex_interface_72_24t10(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, "4]MB") : 0;
    return e
}
function ex_interface_72_24t12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "l=Y3") : 0;
    return e
}
function ex_interface_72_24t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 1, x.u8_01)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_interface_72_24t13_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_interface_72_24t13_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "9XxD") : 0;
    return e
}
function ex_interface_72_24t13_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)
    su32(o + 8, x.u32_08)

    g.debug ? ex_debug(o, "p;K^") : 0;
    return e
}
function ex_interface_72_24t13_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "3W6^") : 0;
    return e
}
function ex_interface_72_24t14(o, x) {
    let e = o + divisible(288, g.divisibility)
    su8(o + 272, x.u8_272)
    su8(o + 273, x.u8_273)

    e = ex_s_offset(o + 276, e, ex_interface_72_24t14_276, x.section_276, 'down');

    g.debug ? ex_debug(o, "Voj:") : 0;
    return e
}
function ex_interface_72_24t14_276(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "OOt:") : 0;
    return e
}
function ex_interface_72_24t15(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_frame_sparkler_00, g.frame_sparkler_array, ex_frame_sparkler, g.unordered_ref.frame_sparkler, o + 0, e, 'down');

    g.debug ? ex_debug(o, "rjV^") : 0;
    return e
}
function ex_interface_72_32(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 24, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_interface_72_32_12(temp_offset + (i * 24), e, x.section_12[i])
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
            e = ex_interface_72_32_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_interface_72_32_20(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 28, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_interface_12(temp_offset + (i * 28), e, x.section_36[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "C=3B") : 0;
    return e
}
function ex_interface_72_32_12(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, "PnqU") : 0;
    return e
}
function ex_interface_72_32_20(o, e, x) {
    su16(o + 4, x.u16_04)

    switch (x.u16_04) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_interface_72_32_20_08t0, x.section_08, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 8, e, ex_interface_72_32_20_08t1, x.section_08, 'down');
        break;
    }
    g.debug ? ex_debug(o, "agcn") : 0;
    return e
}
function ex_interface_72_32_20_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su16(o + 6, x.u16_06)

    g.debug ? ex_debug(o, "is@t") : 0;
    return e
}
function ex_interface_72_32_20_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_interface_72_32_20_08t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_interface_72_32_20_08t1_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "ux:5") : 0;
    return e
}
function ex_interface_72_32_20_08t1_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_interface_72_32_20_08t1_00_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "QnAj") : 0;
    return e
}
function ex_interface_72_32_20_08t1_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "OqrU") : 0;
    return e
}
function ex_interface_72_32_20_08t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "5An;") : 0;
    return e
}
function ex_interface_72_44(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug ? ex_debug(o, "5@r1") : 0;
    return e
}
function ex_interface_72_52(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 32, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_72_52_04(temp_offset + (i * 32), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 32, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_interface_72_52_04(temp_offset + (i * 32), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_interface_72_52_04(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_interface_72_52_28(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 40, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_interface_72_52_36(temp_offset + (i * 40), e, x.section_36[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "h;wV") : 0;
    return e
}
function ex_interface_72_52_04(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "Ngna") : 0;
    return e
}
function ex_interface_72_52_28(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "8p?F") : 0;
    return e
}
function ex_interface_72_52_36(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "3[sl") : 0;
    return e
}
function ex_interface_72_72(o, e, x) {
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_interface_72_72_04, x.section_04, 'down');

    g.debug ? ex_debug(o, ":zxj") : 0;
    return e
}
function ex_interface_72_72_04(o, x) {
    let e = o + divisible(64, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    su32(o + 40, x.u32_40)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 20, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_interface_72_72_04_04(temp_offset + (i * 20), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 32, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_interface_72_72_04_12(temp_offset + (i * 32), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_interface_72_72_04_12(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 32, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_interface_72_72_04_12(temp_offset + (i * 32), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_interface_72_72_04_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 44, e, ex_interface_72_72_04_44, x.section_44, 'down');
    e = ex_ml(x.unordered_sound_controls_48, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 48, e, 'down');

    g.debug ? ex_debug(o, "fW[L") : 0;
    return e
}
function ex_interface_72_72_04_04(o, e, x) {
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_interface_72_72_04_04_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "Sxdb") : 0;
    return e
}
function ex_interface_72_72_04_04_16(o, e, x) {
    su32(o + 4, x.u32_04)

    switch (x.u32_04) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_interface_72_72_04_04_16_08t0, x.section_08, 'down');
        break;
    case 3:
        e = ex_ml(x.section_08, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 8, e, 'down');
        break;
    }
    g.debug ? ex_debug(o, "i@qk") : 0;
    return e
}
function ex_xdx_interface_72_72_04_04_16(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_interface_72_72_04_04_16_08t0, x.section_04, 'down');

    g.debug ? ex_debug(o, "KDcA") : 0;
    return e
}
function ex_interface_72_72_04_04_16_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su16(o + 6, x.u16_06)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "IeC2") : 0;
    return e
}
function ex_interface_72_72_04_12(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "CtGF") : 0;
    return e
}
function ex_interface_72_72_04_36(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "Nz]g") : 0;
    return e
}
function ex_interface_72_72_04_44(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "iY8;") : 0;
    return e
}
