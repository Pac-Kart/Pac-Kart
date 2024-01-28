function ex_unknown_00_04_04t1(o, x) {
    let e = o + 48
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su32(o + 08, x.u32_08)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)

    switch (x.u8_00) {
    case 0:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t1_04t0, x.section_04, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t1_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t1_04t2, x.section_04, 'down');
        break;
    }
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_unknown_00_04_04t1_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 04, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_unknown(temp_offset + (i * 04), e, x.section_32[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "8LcL") : 0;
    return e
}

function ex_unknown_00_04_04t1_04t0(o, x) {
    let e = o + 80
    //amount?   su32(o +00, x.u32_00)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    //amount?   su32(o +36, x.u32_36)
    su32(o + 44, x.u32_44)
    su8(o + 52, x.u8_52)
    //amount?   su32(o +60, x.u32_60)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t1_04t0_04(temp_offset + (i * 4), e, x.section_04[i], temp_offset)
        }
        ;
    }
    ;if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e - g.m)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 32, 16)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_unknown_00_04_04t1_04t0_40(temp_offset + (i * 32), e, x.section_40[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 48, e, ex_unknown_00_04_04t1_04t0_48, x.section_48, 'down');
    e = ex_s_offset(o + 56, e, ex_unknown_00_04_04t1_04t0_56, x.section_56, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 8, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_unknown_00_04_04t1_04t0_64(temp_offset + (i * 8), e, x.section_64[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "P9tx") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t0_04(o, e, x, temp_offset) {

    e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 00, e, 'down', true, "model", temp_offset);

    g.debug ? ex_debug(o, "3C4>") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t0_40(o, e, x) {
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "jtv[") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t0_48(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "Wt_Z") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t0_56(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    su8(o + 08, x.u8_08)

    g.debug ? ex_debug(o, "@B[a") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t0_64(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 20, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t1_04t0_64_04(temp_offset + (i * 20), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "]49q") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t0_64_04(o, e, x) {

    g.debug ? ex_debug(o, ":oQ<") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t1(o, x) {
    let e = o + 80
    //amount?   su32(o +00, x.u32_00)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +60, x.u32_60)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t1_04t1_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 12, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_unknown_00_04_04t1_04t1_44(temp_offset + (i * 12), e, x.section_44[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e - g.m)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 12, 16)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_unknown_00_04_04t1_04t1_44(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_unknown_00_04_04t1_04t1_56, x.section_56, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 8, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_unknown_00_04_04t1_04t1_64(temp_offset + (i * 8), e, x.section_64[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "d:QD") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t1_04(o, e, x) {
    ex_patch(o + 00, g.texture_patch_array, x.texture_00)

    g.debug ? ex_debug(o, "5K;B") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t1_44(o, e, x) {
    sf32(o + 00, x.f32_00)
    su8(o + 04, x.u8_04)
    su8(o + 05, x.u8_05)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "pt1V") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t1_56(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "DBM]") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t1_64(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 20, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t1_04t1_64_04(temp_offset + (i * 20), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "GPE3") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t1_64_04(o, e, x) {
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)
    su32(o + 08, x.u32_08)

    g.debug ? ex_debug(o, "5mr_") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t2(o, x) {
    let e = o + 32
    //amount?   su32(o +00, x.u32_00)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +16, x.u32_16)
    su8(o + 24, x.u8_24)
    su8(o + 26, x.u8_26)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t1_04t2_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_unknown_00_04_04t1_04t2_20(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "wX4A") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t2_04(o, e, x) {
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "V]Ki") : 0;
    return e
}
function ex_unknown_00_04_04t1_04t2_20(o, e, x) {
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "z91l") : 0;
    return e
}
function ex_unknown_00_04_04t1_24(o, e, x) {
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)
    su8(o + 04, x.u8_04)
    su8(o + 05, x.u8_05)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "bA]>") : 0;
    return e
}
function ex_unknown_00_04_04t1_32(o, x) {
    let e = o + 16

    g.debug ? ex_debug(o, "iL8Y") : 0;
    return e
}
