"use strict";
function ex_var(o, x) {
    let e = o + divisible(176, g.divisibility)
    su8(o + 11, x.u8_11)
    su32(o + 144, x.u32_144)
    su32(o + 152, x.u32_152)
    //?

    e = ex_string(o + 140, e, x.section_140)
    e = ex_string(o + 152, e, x.section_152)
    e = ex_s_offset(o + 148, e, ex_var_148, x.section_148, 'up');
    e = ex_s_offset(o + 164, e, ex_var_164, x.section_164, 'down');
    e = ex_s_offset(o + 168, e, ex_var_168, x.section_168, 'down');

    g.debug ? ex_debug(o, "x?E:") : 0;
    return e
}
function ex_var_148(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_var_00, g.var_array, ex_var, g.unordered_ref.var, o + 0, e, 'down');

    g.debug ? ex_debug(o, "MsNU") : 0;
    return e
}
function ex_var_164(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 24, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_var_164_12(temp_offset + (i * 24), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 8, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_var_164_20(temp_offset + (i * 8), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "ntGe") : 0;
    return e
}
function ex_var_164_12(o, e, x) {
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    //?
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    e = ex_string(o + 0, e, x.section_00)
    e = ex_string(o + 8, e, x.section_08)
    switch (x.u32_04) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t2, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t5, x.section_12, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t6, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t8, x.section_12, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t14, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t15, x.section_12, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t16, x.section_12, 'down');
        break;
    case 24:
        e = ex_s_offset(o + 12, e, ex_var_164_12_12t24, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, "0I;q") : 0;
    return e
}
function ex_var_164_12_12t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 0, e, ex_var_164_12_12t1_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "3vQU") : 0;
    return e
}
function ex_var_164_12_12t1_00(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 4, x.u8_04)
    su8(o + 6, x.u8_06)

    e = ex_s_offset(o + 0, e, ex_var_164_12_12t1_00_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "vrd]") : 0;
    return e
}
function ex_var_164_12_12t1_00_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "UmFo") : 0;
    return e
}
function ex_var_164_12_12t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    switch (x.u32_00) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_var_164_12_12t2_04t1, x.section_04, 'down');
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        e = ex_s_offset(o + 4, e, ex_var_164_12_12t2_04t4, x.section_04, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_var_164_12_12t2_04t7, x.section_04, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 4, e, ex_var_164_12_12t2_04t8, x.section_04, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 4, e, ex_var_164_12_12t2_04t16, x.section_04, 'down');
        break;
    }
    g.debug ? ex_debug(o, "0G7L") : 0;
    return e
}
function ex_var_164_12_12t2_04t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    sf32(o + 8, x.f32_08)
    su32(o + 24, x.u32_24)
    sf32(o + 28, x.f32_28)

    e = ex_s_offset(o + 12, e, ex_var_164_12_12t2_04t1_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_var_164_12_12t2_04t1_16, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_var_164_12_12t2_04t1_16, x.section_20, 'down');

    g.debug ? ex_debug(o, ";w[y") : 0;
    return e
}
function ex_var_164_12_12t2_04t1_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "i7Ed") : 0;
    return e
}
function ex_var_164_12_12t2_04t1_16(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 4, x.u8_04)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    switch (x.u8_04) {
    case 1:
        e = ex_ml(x.section_00, g.world_20_12t1_array, ex_world_20_12t1, g.unordered_ref.world_20_12t1, o + 0, e, 'down', true);
        break;
    case 10:
        e = ex_ml(x.section_00, g.world_20_12t10_array, ex_world_20_12t10, g.unordered_ref.world_20_12t10, o + 0, e, 'down', true);
        break;
    case 11:
        e = ex_ml(x.section_00, g.world_20_12t11_array, ex_world_20_12t11, g.unordered_ref.world_20_12t11, o + 0, e, 'down', true);
        break;
    }
    g.debug ? ex_debug(o, "hY6P") : 0;
    return e
}
function ex_var_164_12_12t2_04t4(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 1, x.u8_01)
    su8(o + 3, x.u8_03)
    sf32(o + 4, x.f32_04)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 16, e, ex_var_164_12_12t2_04t4_16, x.section_16, 'down');

    g.debug ? ex_debug(o, "FLXC") : 0;
    return e
}
function ex_var_164_12_12t2_04t4_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 1:
        switch (x.u32_04) {
        case 1:
            e = ex_ml(x.section_00, g.world_20_12t1_array, ex_world_20_12t1, g.unordered_ref.world_20_12t1, o + 0, e, 'down', true);
            break;
        case 8:
            e = ex_ml(x.section_00, g.world_20_12t8_array, ex_world_20_12t8, g.unordered_ref.world_20_12t8, o + 0, e, 'down', true);
            break;
        case 10:
            e = ex_ml(x.section_00, g.world_20_12t10_array, ex_world_20_12t10, g.unordered_ref.world_20_12t10, o + 0, e, 'down', true);
            break;
        case 13:
            e = ex_ml(x.section_00, g.world_20_12t13_array, ex_world_20_12t13, g.unordered_ref.world_20_12t13, o + 0, e, 'down', true);
            break;
        case 14:
            e = ex_ml(x.section_00, g.world_20_12t14_array, ex_world_20_12t14, g.unordered_ref.world_20_12t14, o + 0, e, 'down', true);
            break;
        case 15:
            e = ex_ml(x.section_00, g.world_20_12t15_array, ex_world_20_12t15, g.unordered_ref.world_20_12t15, o + 0, e, 'down', true);
            break;
        }
        break
    case 2:
        su32(o + 0, x.section_00)
        break
    }

    g.debug ? ex_debug(o, "[J^i") : 0;
    return e
}
function ex_var_164_12_12t2_04t7(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 3, x.u8_03)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, "_Wx1") : 0;
    return e
}
function ex_var_164_12_12t2_04t8(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 3, x.u8_03)

    e = ex_s_offset(o + 16, e, ex_var_164_12_12t2_04t8_16, x.section_16, 'down');

    g.debug ? ex_debug(o, "Mb29") : 0;
    return e
}
function ex_var_164_12_12t2_04t8_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "xSo?") : 0;
    return e
}
function ex_var_164_12_12t2_04t16(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)

    e = ex_ml(x.unordered_flag_24, g.flag_array, ex_flag, g.unordered_ref.flag, o + 24, e, 'down');

    g.debug ? ex_debug(o, "pWAh") : 0;
    return e
}
function ex_var_164_12_12t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_var_164_12_12t5_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "CfjJ") : 0;
    return e
}
function ex_var_164_12_12t5_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 8, e, ex_var_164_12_12t5_04_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "WOhQ") : 0;
    return e
}
function ex_var_164_12_12t5_04_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "gfcx") : 0;
    return e
}
function ex_var_164_12_12t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    switch (x.u8_04) {
    case 1:
        e = ex_s_offset(o + 0, e, ex_var_164_12_12t6_00t1, x.section_00, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 0, e, ex_var_164_12_12t6_00t2, x.section_00, 'down');
        break;
    }
    g.debug ? ex_debug(o, "MtmS") : 0;
    return e
}
function ex_var_164_12_12t6_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 5, x.u8_05)

    e = ex_ml(x.unordered_interface_00, g.interface_array, ex_interface, g.unordered_ref.interface, o + 0, e, 'down');
    e = ex_s_offset(o + 8, e, ex_var_164_12_12t6_00t1_08, x.section_08, 'down');

    g.debug ? ex_debug(o, "rG4V") : 0;
    return e
}
function ex_var_164_12_12t6_00t1_08(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug ? ex_debug(o, "yEjl") : 0;
    return e
}
function ex_var_164_12_12t6_00t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_ml(x.unordered_interface_04, g.interface_array, ex_interface, g.unordered_ref.interface, o + 4, e, 'down');

    g.debug ? ex_debug(o, "0FaK") : 0;
    return e
}
function ex_var_164_12_12t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    e = ex_s_offset(o + 0, e, ex_var_164_12_12t7_00, x.section_00, 'down');
    e = ex_ml(x.unordered_object_04, g.object_array, ex_object, g.unordered_ref.object, o + 4, e, 'down');

    g.debug ? ex_debug(o, "CjLK") : 0;
    return e
}
function ex_var_164_12_12t7_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "N@a:") : 0;
    return e
}
function ex_var_164_12_12t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    switch (x.u8_08) {
    case 1:
        e = ex_ml(x.section_00, g.flag_array, ex_flag, g.unordered_ref.flag, o + 0, e, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 0, e, ex_var_164_12_12t8_00t2, x.section_00, 'down');
        break;
    }

    switch (x.u8_10) {
    case 0:
        sf32(o + 4, x.section_04)
        break;
    case 2:
        e = ex_ml(x.section_04, g.flag_array, ex_flag, g.unordered_ref.flag, o + 4, e, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_var_164_12_12t8_04t3, x.section_04, 'down');
        break;
    }

    g.debug ? ex_debug(o, "g7MX") : 0;
    return e
}
function ex_var_164_12_12t8_00t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_var_164_12_12t8_00t2_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_var_164_12_12t8_00t2_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "<A3S") : 0;
    return e
}
function ex_var_164_12_12t8_00t2_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "t2xr") : 0;
    return e
}
function ex_var_164_12_12t8_00t2_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "^GKV") : 0;
    return e
}
function ex_var_164_12_12t8_04t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_var_164_12_12t8_04t3_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "];<:") : 0;
    return e
}
function ex_var_164_12_12t8_04t3_12(o, x) {
    let e = o + divisible(32, g.divisibility)

    g.debug ? ex_debug(o, "9>rf") : 0;
    return e
}
function ex_var_164_12_12t14(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    if (o === 11092932) {
        console.log('?')
    }

    e = ex_s_offset(o + 0, e, ex_var_164_12_12t14_00, x.section_00, 'down');
    e = ex_ml(x.unordered_world_20_12t4_08, g.world_20_12t4_array, ex_world_20_12t4, g.unordered_ref.world_20_12t4, o + 8, e, 'down', true);

    g.debug ? ex_debug(o, "7P4K") : 0;
    return e
}
function ex_var_164_12_12t14_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 1:
        e = ex_ml(x.section_00, g.world_20_12t0_array, ex_world_20_12t0, g.unordered_ref.world_20_12t0, o + 0, e, 'down', true);
        break;
    case 5:
        su32(o + 0, x.section_00)
        break;
    }
    g.debug ? ex_debug(o, "kfsV") : 0;
    return e
}
function ex_var_164_12_12t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //?

    g.debug ? ex_debug(o, "C]5S") : 0;
    return e
}
function ex_var_164_12_12t16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    e = ex_ml(x.unordered_var_00, g.var_array, ex_var, g.unordered_ref.var, o + 0, e, 'down');

    g.debug ? ex_debug(o, "MQ=j") : 0;
    return e
}
function ex_var_164_12_12t24(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_unknown_00_00, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 0, e, 'down');
    e = ex_s_offset(o + 4, e, ex_var_164_12_12t24_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "z>10") : 0;
    return e
}
function ex_var_164_12_12t24_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "DDNr") : 0;
    return e
}
function ex_var_164_20(o, e, x) {
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 4, e)
        e = ex_var_164_20_04(e, x.section_04[0], x.u32_00)
        g.oa.push(o + 4)
    }

    // e = ex_s_offset(o + 4, e, ex_var_164_20_04, x.section_04, 'down');

    g.debug ? ex_debug(o, "Ez35") : 0;
    return e
}
function ex_var_164_20_04(o, x, v) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)

    e = ex_string(o + 8, e, x.section_08)
    switch (v) {
    case 1604:
        e = ex_s_offset(o + 12, e, ex_var_164_20_04_12t1604, x.section_12, 'down');
        break;
    case 1608:
        e = ex_s_offset(o + 12, e, ex_var_164_20_04_12t1608, x.section_12, 'down');
        break;
    case 1618:
        e = ex_s_offset(o + 12, e, ex_var_164_20_04_12t1618, x.section_12, 'down');
        break;
    case 1620:
        e = ex_s_offset(o + 12, e, ex_var_164_20_04_12t1620, x.section_12, 'down');
        break;
    case 1636:
        e = ex_s_offset(o + 12, e, ex_var_164_20_04_12t1636, x.section_12, 'down');
        break;
    }
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_var_164_20_04_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 24, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_var_164_12(temp_offset + (i * 24), e, x.section_28[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "5Rfm") : 0;
    return e
}
function ex_var_164_20_04_12t1604(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug ? ex_debug(o, "sWpE") : 0;
    return e
}
function ex_var_164_20_04_12t1608(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_ml(x.unordered_interface_04, g.interface_array, ex_interface, g.unordered_ref.interface, o + 4, e, 'down');
    e = ex_ml(x.unordered_world_20_12t1_08, g.world_20_12t1_array, ex_world_20_12t1, g.unordered_ref.world_20_12t1, o + 8, e, 'down', true);

    g.debug ? ex_debug(o, "e:KD") : 0;
    return e
}
function ex_var_164_20_04_12t1618(o, x) {
    let e = o + divisible(16, g.divisibility)
    // sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    switch (x.u8_08) {
    case 0:
        e = ex_ml(x.section_00, g.flag_array, ex_flag, g.unordered_ref.flag, o + 0, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 0, e, ex_var_164_20_04_12t1618_00t1, x.section_00, 'down');
        break;
    }

    switch (x.u8_10) {
    case 0:
        sf32(o + 4, x.section_04)
        break;
    case 1:
        e = ex_ml(x.section_04, g.flag_array, ex_flag, g.unordered_ref.flag, o + 4, e, 'down');
        break;
    case 3:
        // e = ex_s_offset(o + 4, e, ex_var_164_12_12t8_04t3, x.section_04, 'down');
        break;
    }

    g.debug ? ex_debug(o, "aFXA") : 0;
    return e
}
function ex_var_164_20_04_12t1618_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_var_164_20_04_12t1618_00t1_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "VGa8") : 0;
    return e
}
function ex_var_164_20_04_12t1618_00t1_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "9]Mz") : 0;
    return e
}
function ex_var_164_20_04_12t1620(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)

    e = ex_ml(x.unordered_world_20_12t8_08, g.world_20_12t8_array, ex_world_20_12t8, g.unordered_ref.world_20_12t8, o + 8, e, 'down', true);
    e = ex_s_offset(o + 0, e, ex_var_164_20_04_12t1620_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "]C5i") : 0;
    return e
}
function ex_var_164_20_04_12t1620_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "KNRF") : 0;
    return e
}
function ex_var_164_20_04_12t1636(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)

    e = ex_s_offset(o + 0, e, ex_var_164_20_04_12t1636_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "TWdw") : 0;
    return e
}
function ex_var_164_20_04_12t1636_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "3bc6") : 0;
    return e
}
function ex_var_164_20_04_20(o, e, x) {
    su32(o + 0, x.u32_00)
    if (o === 19418732) {
        console.log('?')
    }

    e = ex_string(o + 4, e, x.section_04)
    switch (x.u32_00) {
    case 5:
        e = ex_s_offset(o + 8, e, ex_var_164_20_04_20_08t5, x.section_08, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 8, e, ex_var_164_20_04_20_08t6, x.section_08, 'down');
        break;
    }
    g.debug ? ex_debug(o, "M^bs") : 0;
    return e
}
function ex_var_164_20_04_20_08t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    // sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    switch (x.u8_08) {
    case 0:
        e = ex_ml(x.section_00, g.flag_array, ex_flag, g.unordered_ref.flag, o + 0, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 0, e, ex_var_164_20_04_20_08t5_00t1, x.section_00, 'down');
        break;
    }

    switch (x.u8_10) {
    case 0:
        sf32(o + 4, x.section_04)
        break;
    case 1:
        e = ex_ml(x.section_04, g.flag_array, ex_flag, g.unordered_ref.flag, o + 4, e, 'down');
        break;
    case 3:
        // e = ex_s_offset(o + 4, e, ex_var_164_12_12t8_04t3, x.section_04, 'down');
        break;
    }

    g.debug ? ex_debug(o, "2yh2") : 0;
    return e
}
function ex_var_164_20_04_20_08t5_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_var_164_20_04_20_08t5_00t1_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_var_164_20_04_20_08t5_00t1_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "t_Kv") : 0;
    return e
}
function ex_var_164_20_04_20_08t5_00t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "yef>") : 0;
    return e
}
function ex_var_164_20_04_20_08t5_00t1_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "T3WN") : 0;
    return e
}
function ex_var_164_20_04_20_08t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 5, x.u8_05)

    e = ex_ml(x.unordered_world_20_12t8_08, g.world_20_12t8_array, ex_world_20_12t8, g.unordered_ref.world_20_12t8, o + 8, e, 'down', true);
    e = ex_s_offset(o + 0, e, ex_var_164_20_04_20_08t6_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "nWhu") : 0;
    return e
}
function ex_var_164_20_04_20_08t6_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    g.debug ? ex_debug(o, "tnxV") : 0;
    return e
}
function ex_var_168(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 24, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_var_164_12(temp_offset + (i * 24), e, x.section_08[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "rqP<") : 0;
    return e
}
