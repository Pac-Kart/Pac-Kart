function ex_unknown_00(o, x) {
    let e = o + 16
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 16, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04(temp_offset + (i * 16), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "G0]Y") : 0;
    return e
}
function ex_unknown_00_04(o, e, x) {
    su32(o + 00, x.u32_00)
    //?
    su32(o + 12, x.u32_12)
    //?
    if (o === 4919916) {
        console.log("?")
    }


    switch (x.u32_00) {
    case 1:
        e = ex_ml(x.section_04,g.unknown_00_04_04t1_array ,ex_unknown_00_04_04t1,g.unordered_ref.unknown_00_04_04t1, o + 04, e, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t2, x.section_04, 'down');
        break;
    case 3:
        e = ex_ml(x.section_04, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 04, e, 'down');
        break;
    case 4:
        e = ex_ml(x.section_04, g.strange_array, ex_strange, g.unordered_ref.strange, o + 04, e, 'down');
        break;
    case 5:
    e = ex_ml(x.section_04,g.unknown_00_04_04t5_array ,ex_unknown_00_04_04t5,g.unordered_ref.unknown_00_04_04t5, o + 04, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_04, g.idk_array, ex_idk, g.unordered_ref.idk, o + 04, e, 'down');
        break;
    case 26:
        e = ex_ml(x.section_04, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 04, e, 'down');
        break;
    case 29:
        e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t29, x.section_04, 'down');
        break;
    case 31:
        e = ex_ml(x.section_04, g.activator_array, ex_activator, g.unordered_ref.activator, o + 04, e, 'down');
        break;
    }
    switch (x.u32_00) {
    case 1:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t1, x.section_08, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t2, x.section_08, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t3, x.section_08, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t4, x.section_08, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t5, x.section_08, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t6, x.section_08, 'down');
        break;
    case 26:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t26, x.section_08, 'down');
        break;
    case 29:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t29, x.section_08, 'down');
        break;
    case 31:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t31, x.section_08, 'down');
        break;
    case 32:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t32, x.section_08, 'down');
        break;
    case 34:
        e = ex_s_offset(o + 08, e, ex_unknown_00_04_08t34, x.section_08, 'down');
        break;
    }
    g.debug ? ex_debug(o, "bE?F") : 0;
    return e
}
// function ex_unknown_00_04_04t1(o, x) {
//     let e = o + 48
//     su8(o + 00, x.u8_00)
//     su8(o + 01, x.u8_01)
//     su32(o + 08, x.u32_08)
//     su32(o + 12, x.u32_12)
//     sf32(o + 16, x.f32_16)
//     //amount?   su32(o +20, x.u32_20)
//     //amount?   su32(o +28, x.u32_28)

//     switch (x.u8_00) {
//     case 0:
//         e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t1_04t0, x.section_04, 'down');
//         break;
//     case 1:
//         e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t1_04t1, x.section_04, 'down');
//         break;
//     case 2:
//         e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t1_04t2, x.section_04, 'down');
//         break;
//     }
//     if (x.section_24.length) {
//         su32(o + 20, x.section_24.length)
//         su32(o + 24, e - g.m)
//         g.oa.push(o + 24)
//         let temp_offset = e
//         e += divisible(x.section_24.length * 12, 16)
//         for (let i = 0; i < x.section_24.length; i++) {
//             e = ex_unknown_00_04_04t1_24(temp_offset + (i * 12), e, x.section_24[i])
//         }
//         ;
//     }
//     ;if (x.section_32.length) {
//         su32(o + 28, x.section_32.length)
//         su32(o + 32, e - g.m)
//         g.oa.push(o + 32)
//         let temp_offset = e
//         e += divisible(x.section_32.length * 04, 16)
//         for (let i = 0; i < x.section_32.length; i++) {
//             e = ex_unknown(temp_offset + (i * 04), e, x.section_32[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "_Y7K") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0(o, x) {
//     let e = o + 80
//     //amount?   su32(o +00, x.u32_00)
//     su8(o + 08, x.u8_08)
//     su8(o + 09, x.u8_09)
//     su8(o + 10, x.u8_10)
//     su8(o + 11, x.u8_11)
//     sf32(o + 16, x.f32_16)
//     sf32(o + 20, x.f32_20)
//     sf32(o + 24, x.f32_24)
//     sf32(o + 28, x.f32_28)
//     sf32(o + 32, x.f32_32)
//     //amount?   su32(o +36, x.u32_36)
//     su32(o + 44, x.u32_44)
//     su8(o + 52, x.u8_52)
//     //amount?   su32(o +60, x.u32_60)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 4, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t1_04t0_04(temp_offset + (i * 4), e, x.section_04[i],temp_offset)
//         }
//         ;
//     }
//     ;if (x.section_40.length) {
//         su32(o + 36, x.section_40.length)
//         su32(o + 40, e - g.m)
//         g.oa.push(o + 40)
//         let temp_offset = e
//         e += divisible(x.section_40.length * 32, 16)
//         for (let i = 0; i < x.section_40.length; i++) {
//             e = ex_unknown_00_04_04t1_04t0_40(temp_offset + (i * 32), e, x.section_40[i])
//         }
//         ;
//     }
//     ;e = ex_s_offset(o + 48, e, ex_unknown_00_04_04t1_04t0_48, x.section_48, 'down');
//     e = ex_s_offset(o + 56, e, ex_unknown_00_04_04t1_04t0_56, x.section_56, 'down');
//     if (x.section_64.length) {
//         su32(o + 60, x.section_64.length)
//         su32(o + 64, e - g.m)
//         g.oa.push(o + 64)
//         let temp_offset = e
//         e += divisible(x.section_64.length * 8, 16)
//         for (let i = 0; i < x.section_64.length; i++) {
//             e = ex_unknown_00_04_04t1_04t0_64(temp_offset + (i * 8), e, x.section_64[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "P9tx") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0_04(o, e, x,temp_offset) {

//     e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 00, e, 'down',true,"model",temp_offset);

//     g.debug ? ex_debug(o, "3C4>") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0_40(o, e, x) {
//     sf32(o + 00, x.f32_00)
//     sf32(o + 04, x.f32_04)
//     sf32(o + 08, x.f32_08)
//     su8(o + 16, x.u8_16)
//     su8(o + 17, x.u8_17)
//     sf32(o + 20, x.f32_20)

//     g.debug ? ex_debug(o, "jtv[") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0_48(o, x) {
//     let e = o + 16
//     sf32(o + 00, x.f32_00)
//     sf32(o + 12, x.f32_12)

//     g.debug ? ex_debug(o, "Wt_Z") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0_56(o, x) {
//     let e = o + 32
//     sf32(o + 00, x.f32_00)
//     sf32(o + 04, x.f32_04)
//     su8(o + 08, x.u8_08)

//     g.debug ? ex_debug(o, "@B[a") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0_64(o, e, x) {
//     //amount?   su32(o +00, x.u32_00)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 20, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t1_04t0_64_04(temp_offset + (i * 20), e, x.section_04[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "]49q") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t0_64_04(o, e, x) {

//     g.debug ? ex_debug(o, ":oQ<") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t1(o, x) {
//     let e = o + 80
//     //amount?   su32(o +00, x.u32_00)
//     su8(o + 08, x.u8_08)
//     su8(o + 09, x.u8_09)
//     su8(o + 10, x.u8_10)
//     su8(o + 11, x.u8_11)
//     su32(o + 12, x.u32_12)
//     sf32(o + 16, x.f32_16)
//     sf32(o + 20, x.f32_20)
//     sf32(o + 24, x.f32_24)
//     sf32(o + 28, x.f32_28)
//     sf32(o + 32, x.f32_32)
//     sf32(o + 36, x.f32_36)
//     //amount?   su32(o +40, x.u32_40)
//     //amount?   su32(o +48, x.u32_48)
//     //amount?   su32(o +60, x.u32_60)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 4, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t1_04t1_04(temp_offset + (i * 4), e, x.section_04[i])
//         }
//         ;
//     }
//     ;if (x.section_44.length) {
//         su32(o + 40, x.section_44.length)
//         su32(o + 44, e - g.m)
//         g.oa.push(o + 44)
//         let temp_offset = e
//         e += divisible(x.section_44.length * 12, 16)
//         for (let i = 0; i < x.section_44.length; i++) {
//             e = ex_unknown_00_04_04t1_04t1_44(temp_offset + (i * 12), e, x.section_44[i])
//         }
//         ;
//     }
//     ;if (x.section_52.length) {
//         su32(o + 48, x.section_52.length)
//         su32(o + 52, e - g.m)
//         g.oa.push(o + 52)
//         let temp_offset = e
//         e += divisible(x.section_52.length * 12, 16)
//         for (let i = 0; i < x.section_52.length; i++) {
//             e = ex_unknown_00_04_04t1_04t1_44(temp_offset + (i * 12), e, x.section_52[i])
//         }
//         ;
//     }
//     ;e = ex_s_offset(o + 56, e, ex_unknown_00_04_04t1_04t1_56, x.section_56, 'down');
//     if (x.section_64.length) {
//         su32(o + 60, x.section_64.length)
//         su32(o + 64, e - g.m)
//         g.oa.push(o + 64)
//         let temp_offset = e
//         e += divisible(x.section_64.length * 8, 16)
//         for (let i = 0; i < x.section_64.length; i++) {
//             e = ex_unknown_00_04_04t1_04t1_64(temp_offset + (i * 8), e, x.section_64[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "d:QD") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t1_04(o, e, x) {
//     ex_patch(o + 00, g.texture_patch_array, x.texture_00)

//     g.debug ? ex_debug(o, "5K;B") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t1_44(o, e, x) {
//     sf32(o + 00, x.f32_00)
//     su8(o + 04, x.u8_04)
//     su8(o + 05, x.u8_05)
//     sf32(o + 08, x.f32_08)

//     g.debug ? ex_debug(o, "pt1V") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t1_56(o, x) {
//     let e = o + 32
//     sf32(o + 00, x.f32_00)
//     sf32(o + 04, x.f32_04)
//     su8(o + 08, x.u8_08)
//     su8(o + 09, x.u8_09)
//     su8(o + 10, x.u8_10)
//     su8(o + 11, x.u8_11)
//     sf32(o + 12, x.f32_12)
//     sf32(o + 16, x.f32_16)
//     sf32(o + 20, x.f32_20)

//     g.debug ? ex_debug(o, "DBM]") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t1_64(o, e, x) {
//     //amount?   su32(o +00, x.u32_00)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 20, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t1_04t1_64_04(temp_offset + (i * 20), e, x.section_04[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "GPE3") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t1_64_04(o, e, x) {
//     su32(o + 00, x.u32_00)
//     su32(o + 04, x.u32_04)
//     su32(o + 08, x.u32_08)

//     g.debug ? ex_debug(o, "5mr_") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t2(o, x) {
//     let e = o + 32
//     //amount?   su32(o +00, x.u32_00)
//     sf32(o + 08, x.f32_08)
//     sf32(o + 12, x.f32_12)
//     //amount?   su32(o +16, x.u32_16)
//     su8(o + 24, x.u8_24)
//     su8(o + 26, x.u8_26)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 12, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t1_04t2_04(temp_offset + (i * 12), e, x.section_04[i])
//         }
//         ;
//     }
//     ;if (x.section_20.length) {
//         su32(o + 16, x.section_20.length)
//         su32(o + 20, e - g.m)
//         g.oa.push(o + 20)
//         let temp_offset = e
//         e += divisible(x.section_20.length * 16, 16)
//         for (let i = 0; i < x.section_20.length; i++) {
//             e = ex_unknown_00_04_04t1_04t2_20(temp_offset + (i * 16), e, x.section_20[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "wX4A") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t2_04(o, e, x) {
//     su8(o + 00, x.u8_00)
//     su8(o + 01, x.u8_01)
//     su8(o + 02, x.u8_02)
//     su8(o + 03, x.u8_03)
//     sf32(o + 08, x.f32_08)

//     g.debug ? ex_debug(o, "V]Ki") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_04t2_20(o, e, x) {
//     sf32(o + 00, x.f32_00)
//     sf32(o + 04, x.f32_04)
//     sf32(o + 12, x.f32_12)

//     g.debug ? ex_debug(o, "z91l") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_24(o, e, x) {
//     su8(o + 00, x.u8_00)
//     su8(o + 01, x.u8_01)
//     su8(o + 02, x.u8_02)
//     su8(o + 03, x.u8_03)
//     su8(o + 04, x.u8_04)
//     su8(o + 05, x.u8_05)
//     sf32(o + 08, x.f32_08)

//     g.debug ? ex_debug(o, "bA]>") : 0;
//     return e
// }
// function ex_unknown_00_04_04t1_32(o, x) {
//     let e = o + 16

//     g.debug ? ex_debug(o, "iL8Y") : 0;
//     return e
// }
function ex_unknown_00_04_04t2(o, x) {
    let e = o + 112
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    su8(o + 03, x.u8_03)
    su32(o + 04, x.u32_04)
    su32(o + 08, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 40, x.f32_40)
    sf32(o + 52, x.f32_52)
    su8(o + 72, x.u8_72)
    //amount?   su32(o +96, x.u32_96)
    su32(o + 108, x.u32_108)

    e = ex_ml(x.unordered_unknown_00_32, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 32, e, 'down');
    e = ex_ml(x.unordered_wtf_48, g.wtf_array, ex_wtf, g.unordered_ref.wtf, o + 48, e, 'down');
    e = ex_ml(x.unordered_unknown_00_56, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 56, e, 'down');
    e = ex_ml(x.unordered_unknown_00_68, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 68, e, 'down');
    e = ex_ml(x.unordered_unknown_00_76, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 76, e, 'down');
    e = ex_s_offset(o + 80, e, ex_unknown_00_04_04t2_80, x.section_80, 'down');
    if (x.section_100.length) {
        su32(o + 96, x.section_100.length)
        su32(o + 100, e - g.m)
        g.oa.push(o + 100)
        let temp_offset = e
        e += divisible(x.section_100.length * 64, 16)
        for (let i = 0; i < x.section_100.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_100[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "T9qE") : 0;
    return e
}
function ex_unknown_00_04_04t2_80(o, x) {
    let e = o + 16
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)

    g.debug ? ex_debug(o, "n7V5") : 0;
    return e
}
// // function ex_unknown_00_04_04t5(o, x) {
// //     let e = o + 48
// //     su8(o + 00, x.u8_00)
// //     su8(o + 01, x.u8_01)
// //     su8(o + 02, x.u8_02)
// //     su8(o + 03, x.u8_03)
// //     su32(o + 08, x.u32_08)
// //     su32(o + 16, x.u32_16)
// //     su32(o + 24, x.u32_24)
// //     su32(o + 32, x.u32_32)
// //     su8(o + 40, x.u8_40)

// //     e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t5_04, x.section_04, 'down');
// //     e = ex_s_offset(o + 12, e, ex_unknown_00_04_04t5_12, x.section_12, 'down');
// //     e = ex_s_offset(o + 20, e, ex_unknown_00_04_04t5_20, x.section_20, 'down');
// //     e = ex_s_offset(o + 28, e, ex_unknown_00_04_04t5_28, x.section_28, 'down');
// //     e = ex_s_offset(o + 36, e, ex_unknown_00_04_04t5_36, x.section_36, 'down');

// //     g.debug ? ex_debug(o, "M?zj") : 0;
// //     return e
// // }
// function ex_unknown_00_04_04t5_04(o, x) {
//     let e = o + 48
//     su32(o + 00, x.u32_00)
//     sf32(o + 04, x.f32_04)
//     su8(o + 08, x.u8_08)
//     //?
//     su8(o + 09, x.u8_09)
//     //amount?   su32(o +16, x.u32_16)
//     //amount?   su32(o +28, x.u32_28)

//     switch (x.u8_08) {
//     case 103:
//         e = ex_s_offset(o + 12, e, ex_unknown_00_04_04t5_04_12t103, x.section_12, 'down');
//         break;
//     case 105:
//         e = ex_s_offset(o + 12, e, ex_unknown_00_04_04t5_04_12t105, x.section_12, 'down');
//         break;
//     }
//     if (x.section_20.length) {
//         su32(o + 16, x.section_20.length)
//         su32(o + 20, e - g.m)
//         g.oa.push(o + 20)
//         let temp_offset = e
//         e += divisible(x.section_20.length * 4, 16)
//         for (let i = 0; i < x.section_20.length; i++) {
//             e = ex_unknown_00_04_04t5_04_20(temp_offset + (i * 4), e, x.section_20[i])
//         }
//         ;
//     }
//     ;if (x.section_32.length) {
//         su32(o + 28, x.section_32.length)
//         su32(o + 32, e - g.m)
//         g.oa.push(o + 32)
//         let temp_offset = e
//         e += divisible(x.section_32.length * 64, 16)
//         for (let i = 0; i < x.section_32.length; i++) {
//             e = ex_mysterious(temp_offset + (i * 64), e, x.section_32[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "Lyqe") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_04_12t103(o, x) {
//     let e = o + 48
//     su32(o + 04, x.u32_04)
//     su32(o + 12, x.u32_12)
//     su32(o + 28, x.u32_28)

//     g.debug ? ex_debug(o, "C]7C") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_04_12t105(o, x) {
//     let e = o + 16
//     su32(o + 00, x.u32_00)
//     //amount?   su32(o +04, x.u32_04)

//     if (x.section_08.length) {
//         su32(o + 04, x.section_08.length)
//         su32(o + 08, e - g.m)
//         g.oa.push(o + 08)
//         let temp_offset = e
//         e += divisible(x.section_08.length * 64, 16)
//         for (let i = 0; i < x.section_08.length; i++) {
//             e = ex_mysterious(temp_offset + (i * 64), e, x.section_08[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "8oBf") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_04_20(o, e, x) {
//     su32(o + 00, x.u32_00)

//     g.debug ? ex_debug(o, "@3mJ") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_12(o, x) {
//     let e = o + 16
//     //amount?   su32(o +00, x.u32_00)
//     su8(o + 08, x.u8_08)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 12, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t5_12_04(temp_offset + (i * 12), e, x.section_04[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "4Fny") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_12_04(o, e, x) {
//     su8(o + 00, x.u8_00)
//     su8(o + 01, x.u8_01)
//     su8(o + 02, x.u8_02)
//     su8(o + 03, x.u8_03)
//     su8(o + 04, x.u8_04)
//     sf32(o + 08, x.f32_08)

//     g.debug ? ex_debug(o, "24xb") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_20(o, x) {
//     let e = o + 16
//     //amount?   su32(o +00, x.u32_00)

//     if (x.section_04.length) {
//         su32(o + 00, x.section_04.length)
//         su32(o + 04, e - g.m)
//         g.oa.push(o + 04)
//         let temp_offset = e
//         e += divisible(x.section_04.length * 12, 16)
//         for (let i = 0; i < x.section_04.length; i++) {
//             e = ex_unknown_00_04_04t5_20_04(temp_offset + (i * 12), e, x.section_04[i])
//         }
//         ;
//     }
//     ;g.debug ? ex_debug(o, "^[YI") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_20_04(o, e, x) {
//     sf32(o + 00, x.f32_00)
//     sf32(o + 08, x.f32_08)

//     g.debug ? ex_debug(o, "TlWw") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_28(o, x) {
//     let e = o + 16
//     su32(o + 00, x.u32_00)

//     e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t5_28_04, x.section_04, 'down');

//     g.debug ? ex_debug(o, ":yTx") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_28_04(o, x) {
//     let e = o + 16

//     e = ex_s_offset(o + 00, e, ex_unknown_00_04_04t5_28_04_00, x.section_00, 'down');

//     g.debug ? ex_debug(o, "@HO?") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_28_04_00(o, x) {
//     let e = o + 16
//     su8(o + 00, x.u8_00)
//     su32(o + 08, x.u32_08)

//     switch (x.u8_00) {
//     case 1:
//         e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t5_28_04_00_04t1, x.section_04, 'down');
//         break;
//     case 2:
//         e = ex_s_offset(o + 04, e, ex_unknown_00_04_04t5_28_04_00_04t2, x.section_04, 'down');
//         break;
//     }
//     g.debug ? ex_debug(o, "SPHM") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_28_04_00_04t1(o, x) {
//     let e = o + 16
//     su8(o + 00, x.u8_00)
//     su32(o + 04, x.u32_04)
//     su32(o + 08, x.u32_08)

//     g.debug ? ex_debug(o, "osaq") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_28_04_00_04t2(o, x) {
//     let e = o + 16
//     su32(o + 00, x.u32_00)
//     su8(o + 04, x.u8_04)

//     g.debug ? ex_debug(o, "sme;") : 0;
//     return e
// }
// function ex_unknown_00_04_04t5_36(o, x) {
//     let e = o + 16
//     sf32(o + 00, x.f32_00)
//     sf32(o + 04, x.f32_04)

//     g.debug ? ex_debug(o, "iSg:") : 0;
//     return e
// }
function ex_unknown_00_04_04t29(o, x) {
    let e = o + 32
    //amount?   su32(o +00, x.u32_00)
    su8(o + 08, x.u8_08)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    if (x.section_04.length) {
        su32(o + 00, x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e
        e += divisible(x.section_04.length * 48, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t29_04(temp_offset + (i * 48), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "8FSQ") : 0;
    return e
}
function ex_unknown_00_04_04t29_04(o, e, x) {
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 00, e, 'down',true,"model");

    g.debug ? ex_debug(o, "8D5x") : 0;
    return e
}
function ex_unknown_00_04_08t1(o, x) {
    let e = divisible(63, 16) + o
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 48, e, ex_unknown_00_04_08t1_48, x.section_48, 'down');
    switch (x.u8_42) {
    case 1:
        e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t1_52t1, x.section_52, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t1_52t2, x.section_52, 'down');
        break;
    }
    g.debug ? ex_debug(o, "0UVP") : 0;
    return e
}
function ex_unknown_00_04_08t1_48(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "L;>l") : 0;
    return e
}
function ex_unknown_00_04_08t1_52t1(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "FeqH") : 0;
    return e
}
function ex_unknown_00_04_08t1_52t2(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    su8(o + 08, x.u8_08)

    switch (x.u8_08) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_unknown_00_04_08t1_52t2_12t0, x.section_12, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 12, e, ex_unknown_00_04_08t1_52t2_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_unknown_00_04_08t1_52t2_12t2, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, "SIPI") : 0;
    return e
}
function ex_unknown_00_04_08t1_52t2_12t0(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)

    g.debug ? ex_debug(o, "_h_0") : 0;
    return e
}
function ex_unknown_00_04_08t1_52t2_12t1(o, x) {
    let e = o + 16
    su8(o + 00, x.u8_00)
    sf32(o + 04, x.f32_04)

    g.debug ? ex_debug(o, "g3ss") : 0;
    return e
}
function ex_unknown_00_04_08t1_52t2_12t2(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    su8(o + 08, x.u8_08)

    g.debug ? ex_debug(o, "8o2h") : 0;
    return e
}
function ex_unknown_00_04_08t2(o, x) {
    let e = o + 64
    su32(o + 00, x.u32_00)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    //?
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 48, e, ex_unknown_00_04_08t2_48, x.section_48, 'down');
    switch (x.u8_42) {
    case 1:
        e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t2_52t1, x.section_52, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t2_52t2, x.section_52, 'down');
        break;
    }
    g.debug ? ex_debug(o, "aeXG") : 0;
    return e
}
function ex_unknown_00_04_08t2_48(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    su32(o + 08, x.u32_08)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, "HNBG") : 0;
    return e
}
function ex_unknown_00_04_08t2_52t1(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, "xOsA") : 0;
    return e
}
function ex_unknown_00_04_08t2_52t2(o, x) {
    let e = o + 16
    sf32(o + 00, x.f32_00)
    su8(o + 08, x.u8_08)

    e = ex_s_offset(o + 12, e, ex_unknown_00_04_08t2_52t2_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "ot?B") : 0;
    return e
}
function ex_unknown_00_04_08t2_52t2_12(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, "mK]d") : 0;
    return e
}
function ex_unknown_00_04_08t3(o, x) {
    let e = o + 64
    su32(o + 00, x.u32_00)
    su8(o + 40, x.u8_40)
    su8(o + 42, x.u8_42)

    switch (x.u8_40) {
    case 2:
        e = ex_s_offset(o + 48, e, ex_unknown_00_04_08t3_48, x.section_48, 'down');
        break;
    }
    e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t3_52, x.section_52, 'down');

    g.debug ? ex_debug(o, "[@Qe") : 0;
    return e
}
function ex_unknown_00_04_08t3_48(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, "HNsk") : 0;
    return e
}
function ex_unknown_00_04_08t3_52(o, x) {
    let e = o + 32
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "[nPw") : 0;
    return e
}
function ex_unknown_00_04_08t4(o, x) {
    let e = o + 64
    su32(o + 00, x.u32_00)

    g.debug ? ex_debug(o, "?edl") : 0;
    return e
}
function ex_unknown_00_04_08t5(o, x) {
    let e = o + 16
    su8(o + 01, x.u8_01)

    e = ex_s_offset(o + 04, e, ex_unknown_00_04_08t5_04, x.section_04, 'down');

    g.debug ? ex_debug(o, ":jnI") : 0;
    return e
}
function ex_unknown_00_04_08t5_04(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, "boTV") : 0;
    return e
}
function ex_unknown_00_04_08t6(o, x) {
    let e = o + 16

    g.debug ? ex_debug(o, "xjr9") : 0;
    return e
}
function ex_unknown_00_04_08t26(o, x) {
    let e = o + 16

    g.debug ? ex_debug(o, "bS<J") : 0;
    return e
}
function ex_unknown_00_04_08t29(o, x) {
    let e = o + 64
    su32(o + 00, x.u32_00)
    sf32(o + 08, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t29_52, x.section_52, 'down');

    g.debug ? ex_debug(o, "^<K0") : 0;
    return e
}
function ex_unknown_00_04_08t29_52(o, x) {
    let e = o + 32
    sf32(o + 08, x.f32_08)
    sf32(o + 16, x.f32_16)

    g.debug ? ex_debug(o, "STBQ") : 0;
    return e
}
function ex_unknown_00_04_08t31(o, x) {
    let e = o + 64
    su32(o + 00, x.u32_00)
    su32(o + 08, x.u32_08)
    sf32(o + 24, x.f32_24)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 52, e, ex_unknown_00_04_08t31_52, x.section_52, 'down');

    g.debug ? ex_debug(o, "9NDF") : 0;
    return e
}
function ex_unknown_00_04_08t31_52(o, x) {
    let e = o + 32
    sf32(o + 08, x.f32_08)
    sf32(o + 16, x.f32_16)

    g.debug ? ex_debug(o, "bYj6") : 0;
    return e
}
function ex_unknown_00_04_08t32(o, x) {
    let e = o + 32
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    sf32(o + 04, x.f32_04)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)

    e = ex_string(o + 08, e, x.section_08)

    g.debug ? ex_debug(o, "MG??") : 0;
    return e
}
function ex_unknown_00_04_08t34(o, x) {
    let e = o + 32
    su8(o + 00, x.u8_00)

    e = ex_ml(x.unordered_interface_04, g.interface_array, ex_interface, g.unordered_ref.interface, o + 04, e, 'down');
    e = ex_ml(x.unordered_interface_08, g.interface_array, ex_interface, g.unordered_ref.interface, o + 08, e, 'down');
    e = ex_ml(x.unordered_interface_12, g.interface_array, ex_interface, g.unordered_ref.interface, o + 12, e, 'down');
    e = ex_s_offset(o + 16, e, ex_unknown_00_04_08t34_16, x.section_16, 'down');

    g.debug ? ex_debug(o, "bOav") : 0;
    return e
}
function ex_unknown_00_04_08t34_16(o, x) {
    let e = o + 16

    g.debug ? ex_debug(o, "eQkl") : 0;
    return e
}
