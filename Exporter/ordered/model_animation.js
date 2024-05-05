"use strict";
// function ex_model_animation_1(offset, XFA) {
//     let temp_divisible = offset
//     let end_block = offset + 64

//     su32(offset + 0, XFA.unknown_00 )
//     su32(offset + 4, XFA.unknown_04 )
//     sf32(offset + 8, XFA.unknown_08 )
//     sf32(offset + 12, XFA.unknown_12 )
//     su32(offset + 16, XFA.unknown_16 )
//     su32(offset + 20, XFA.unknown_20 )
//     su32(offset + 24, 3452816845 )
//     su32(offset + 28, 3452816845 )
//     su32(offset + 36, 3452816845 )
//     su32(offset + 44, 3452816845 )
//     su32(offset + 48, 3452816845 )
//     su32(offset + 56, 3452816845 )
//     su32(offset + 60, 3452816845 )

//     if (XFA.section_32.length !== 0) {
//         let temp_offset = end_block
//         su32(offset + 40, XFA.section_32.length )
//         su32(offset + 32, end_block   )
//         g.oa.push(offset + 32  )
//         end_block += XFA.section_32.length * 4
//         for (let i = 0; i < XFA.section_32.length; i++) {
//             dyn_model_animation_1_32(temp_offset + (i * 4), XFA.section_32[i])
//         }
//     }

//     if (XFA.section_52.length !== 0) {
//         su32(offset + 52, end_block   )
//         g.oa.push(offset + 52  )
//         end_block = dyn_model_animation_1_52(end_block, XFA.section_52[0])
//     }

//     if (end_block === 8323648) {
//         end_block += 8
//     } else if (end_block === 8328644) {
//         end_block += 4
//     }

//     return end_block

//     function dyn_model_animation_1_32(offset, XFA) {
//         sf32(offset + 0, XFA.unknown_00 )
//     }
//     function dyn_model_animation_1_52(offset, XFA) {
//         let end_block = offset + 36
//         su32(offset + 0, XFA.unknown_00 )
//         su32(offset + 4, XFA.unknown_04 )
//         su32(offset + 8, XFA.unknown_08 )

//         if (XFA.section_12.length) {
//             let temp_offset = end_block
//             su32(offset + 12, end_block   )
//             g.oa.push(offset + 12  )
//             for (let i = 0; i < XFA.section_12.length; i++) {
//                 dyn_model_animation_1_32_12(temp_offset + (i * 2), XFA.section_12[i])

//             }
//             let temp_block = XFA.section_12.length * 2 + temp_offset
//             end_block += replacement_divisibility(XFA.section_12.length * 2, 4,temp_block, 205)
//             // end_block += divisible(XFA.section_12.length * 2, 4)
//         } else {
//             su32(offset + 12, 3452816845 )
//         }

//         if (XFA.section_24.length) {
//             let temp_offset = end_block
//             su32(offset + 24, end_block   )
//             g.oa.push(offset + 24  )
//             end_block += XFA.section_24.length * 4
//             for (let i = 0; i < XFA.section_24.length; i++) {
//                 dyn_model_animation_1_32_24(temp_offset + (i * 4), XFA.section_24[i])

//             }
//         } else {
//             su32(offset + 24, 3452816845 )
//         }

//         if (XFA.section_20.length) {
//             let temp_offset = end_block
//             su32(offset + 20, end_block   )
//             g.oa.push(offset + 20  )
//             for (let i = 0; i < XFA.section_20.length; i++) {
//                 dyn_model_animation_1_32_12(temp_offset + (i * 2), XFA.section_20[i])

//             }
//             let temp_block = XFA.section_20.length * 2 + temp_offset
//             end_block += replacement_divisibility(XFA.section_20.length * 2, 4,temp_block, 205)
//             // end_block += divisible(XFA.section_20.length * 2,4)
//         } else {
//             su32(offset + 20, 3452816845 )
//         }

//         if (XFA.section_28.length) {
//             let temp_offset = end_block
//             su32(offset + 28, end_block   )
//             g.oa.push(offset + 28  )

//             end_block = dyn_model_animation_1_32_28(temp_offset, XFA.section_28[0])

//         }

//         if (XFA.section_16.length) {
//             let temp_offset = end_block
//             su32(offset + 16, end_block   )
//             g.oa.push(offset + 16  )
//             end_block += XFA.section_16.length * 2
//             for (let i = 0; i < XFA.section_16.length; i++) {
//                 dyn_model_animation_1_32_12(temp_offset + (i * 2), XFA.section_16[i])

//             }
//         }

//         if (XFA.section_32.length) {
//             let temp_offset = end_block
//             su32(offset + 32, end_block   )
//             g.oa.push(offset + 32  )

//             end_block = dyn_model_animation_1_32_32(temp_offset, XFA.section_32[0])

//         }

//         if (debug) {
//             su32(offset + 0, 841822529 )
//         }

//         return end_block

//     }

//     function dyn_model_animation_1_32_12(offset, XFA) {
//         su16(offset + 0, XFA.unknown_00 )

//         if (debug) {
//             su8(offset + 0, 48 )
//         }
//     }
//     function dyn_model_animation_1_32_24(offset, XFA) {

//         sf32(offset + 0, XFA.unknown_00 )

//         if (debug) {
//             su8(offset + 0, 52 )
//         }
//     }
//     function dyn_model_animation_1_32_28(offset, XFA) {

//         for (let i = 0; i < XFA.temp_buffer.byteLength; i++) {
//             su8(offset + i, new DataView(XFA.temp_buffer).getUint8(i))
//         }
//         if (debug) {
//             su32(offset + 0, 1380337218 )
//         }

//         return offset + XFA.temp_buffer.byteLength
//     }
//     function dyn_model_animation_1_32_32(offset, XFA) {

//         for (let i = 0; i < XFA.temp_buffer.byteLength; i++) {
//             su8(offset + i, new DataView(XFA.temp_buffer).getUint8(i))
//         }
//         if (debug) {
//             su32(offset + 0, 1380337218 )
//         }

//         let end = offset + XFA.temp_buffer.byteLength
//         end = end - temp_divisible

//         return offset + XFA.temp_buffer.byteLength + divisible(end, 16) - end

//     }
// }

function ex_model_animation_2(offset, XFA) {
    offset = ex_byte_alignment_testing(offset)

    let end_block = offset + 32

    su32(offset + 4, XFA.u32_04)
    su32(offset + 8, XFA.u32_08)

    if (XFA.section_16.length) {
        let temp_offset = end_block
        su32(offset + 0, XFA.section_16.length)
        su32(offset + 16, end_block)
        g.oa.push(offset + 16)
        end_block += XFA.section_16.length * 32

        for (let i = 0; i < XFA.section_16.length; i++) {
            dyn_model_animation_2_16(temp_offset + (i * 32), XFA.section_16[i])
        }
    }

    return end_block

    function dyn_model_animation_2_16(offset, XFA) {

        sf32(offset + 0, XFA.f32_00)
        sf32(offset + 4, XFA.f32_04)
        sf32(offset + 8, XFA.f32_08)
        sf32(offset + 12, XFA.f32_12)
        sf32(offset + 16, XFA.f32_16)
        sf32(offset + 20, XFA.f32_20)
        sf32(offset + 24, XFA.f32_24)
        su8(offset + 28, XFA.u8_28)
        su8(offset + 29, XFA.u8_29)
        su8(offset + 30, XFA.u8_30)
        su8(offset + 31, XFA.u8_31)

    }

}

function ex_model_animation_1(o, x) {
    // console.log(o)
    o = ex_byte_alignment_testing(o)
    globalThis.exmodeltemp_divisible = o

    if (o === 15516800) {
        console.log('y')
    }

    let e = o + 64
    su32(o + 0, x.u32_00)
    //?
    su32(o + 4, x.u32_04)
    //?
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 48, x.u32_48)
    //?
    su32(o + 56, x.u32_56)
    //?
    su32(o + 60, x.u32_60)
    //?
    if (o === 10874492) {
        console.log('?')
    }

    if (x.u32_00 === 3) {
        if (x.section_24.length) {// g.oa.push(o + 24)
        //this comes first for some reason
        }

        e = ex_s_offset(o + 28, e, ex_model_animation_1_28t3, x.section_28, 'down');
        e = ex_s_offset(o + 24, e, ex_model_animation_1_24t3, x.section_24, 'down');

    }

    // switch (x.u32_00) {
    // case 1:
    // case 3:
    // case 4:
    //     if (x.u32_16 === 1) {
    //         e = ex_s_offset(o + 28, e, ex_model_animation_1_28t1, x.section_28, 'down');
    //     } else if (x.u32_16 === 28) {
    //         e = ex_s_offset(o + 28, e, ex_model_animation_1_28t28, x.section_28, 'down');
    //     }
    //     break;
    // case 5:
    //     su32(o + 28, x.section_28)
    //     break;
    // }

    switch (x.u32_00) {
    case 1:
    case 4:
        if (x.u32_16 === 1) {
            e = ex_s_offset(o + 24, e, ex_model_animation_1_24t1, x.section_24, 'down');
        } else if (x.u32_16 === 28) {
            e = ex_s_offset(o + 24, e, ex_model_animation_1_24t28, x.section_24, 'down');
        }
        break;
    case 3:
        break;
    case 5:
        su32(o + 24, x.section_24)
    }

    switch (x.u32_00) {
    case 1:
    case 4:
        if (x.u32_16 === 1) {
            e = ex_s_offset(o + 28, e, ex_model_animation_1_28t1, x.section_28, 'down');
        } else if (x.u32_16 === 28) {
            e = ex_s_offset(o + 28, e, ex_model_animation_1_28t28, x.section_28, 'down');
        }
        break;
    case 3:
        break
    case 5:
        su32(o + 28, x.section_28)
        break;
    }

    if (x.section_32.length) {
        su32(o + 40, x.section_32[0].temp_buffer.byteLength / 4)
        e = ex_s_offset(o + 32, e, ex_model_animation_1_32, x.section_32, 'down');
    }
    replacement_divisibility(e, e + x.section_32_padding, e, 205)
    e += x.section_32_padding

    // if (x.section_32_padding.length && x.section_52.length) {
    //     e += divisible(x.section_32[0].temp_buffer.byteLength, 16) - x.section_32[0].temp_buffer.byteLength
    // }

    switch (x.u32_00) {
    case 1:
    case 4:
        if (x.section_32.length) {
            // console.log(x.section_44[0].temp_buffer.byteLength, (x.u32_04))
            e += divisible(x.section_32[0].temp_buffer.byteLength, g.divisibility) - x.section_32[0].temp_buffer.byteLength
        }
        e = ex_s_offset(o + 44, e, ex_model_animation_1_44, x.section_44, 'down');
        break;
    case 3:
    case 5:
        su32(o + 44, x.section_44)
        break;
    }

    switch (x.u32_00) {
    case 1:
    case 4:
        e = ex_s_offset(o + 36, e, ex_model_animation_1_36, x.section_36, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 36, e, ex_model_animation_1_36t3, x.section_36, 'down');
        break;
    case 5:
        su32(o + 36, x.section_36)
        break;
    }

    e = ex_byte_alignment_testing(e)
    switch (x.u32_04) {
    case 291:
    case 35:
        e = ex_s_offset(o + 52, e, ex_model_animation_1_52t35, x.section_52, 'up');
        break;
    case 163:
    case 419:
        e = ex_s_offset(o + 52, e, ex_model_animation_1_52t163, x.section_52, 'up');
        break;
    case 11:
    case 67:
        su32(o + 52, x.section_52)

        break;
    }

    // e += x.padding

    g.debug ? ex_debug(o, "<Fcc") : 0;
    return e
}
function ex_model_animation_1_24t1(o, x) {
    let e = o + 4
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "8obt") : 0;
    return e
}
function ex_model_animation_1_24t28(o, x) {
    let e = o + 28
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    g.debug ? ex_debug(o, "Y4yk") : 0;
    return e
}

function ex_model_animation_1_28t1(o, x) {
    let e = o + 12
    su16(o + 0, x.u16_00)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)

    g.debug ? ex_debug(o, "br5g") : 0;
    return e
}
function ex_model_animation_1_28t3(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    // su8(o + 2, x.u8_02)
    // su8(o + 3, x.u8_03)
    // su8(o + 4, x.u8_04)
    // su8(o + 5, x.u8_05)
    // su8(o + 6, x.u8_06)
    // su8(o + 7, x.u8_07)
    // su8(o + 8, x.u8_08)
    // su8(o + 9, x.u8_09)
    // su8(o + 10, x.u8_10)
    // su8(o + 11, x.u8_11)

    g.debug ? ex_debug(o, "2A$3") : 0;
    return e
}

function ex_model_animation_1_28t28(o, x) {
    let e = o + 68
    su16(o + 0, x.u16_00)
    su16(o + 2, x.u16_02)
    su16(o + 4, x.u16_04)
    su16(o + 6, x.u16_06)
    su16(o + 8, x.u16_08)
    su16(o + 10, x.u16_10)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    su16(o + 24, x.u16_24)
    su16(o + 26, x.u16_26)
    su16(o + 28, x.u16_28)
    su16(o + 30, x.u16_30)
    su16(o + 32, x.u16_32)
    su16(o + 34, x.u16_34)
    su16(o + 36, x.u16_36)
    su16(o + 38, x.u16_38)
    su16(o + 40, x.u16_40)
    su16(o + 42, x.u16_42)
    su16(o + 44, x.u16_44)
    su16(o + 46, x.u16_46)
    su16(o + 48, x.u16_48)
    su16(o + 50, x.u16_50)
    su16(o + 52, x.u16_52)
    su16(o + 54, x.u16_54)
    su32(o + 56, x.u16_56)
    su32(o + 60, x.u16_60)
    su32(o + 64, x.u16_64)

    g.debug ? ex_debug(o, "9Bv[") : 0;
    return e
}
function ex_model_animation_1_24t3(o, x) {
    let e = o + 4
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "q60>") : 0;
    return e
}
function ex_model_animation_1_32(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    // sf32(o + 0, x.f32_00)

    // g.debug ? ex_debug(o, "eL7H") : 0;
    // return e
}
function ex_model_animation_1_44(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)
    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "ToYt") : 0;
    return e
}
function ex_model_animation_1_36(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }
    return x.temp_buffer.byteLength + o
    // let e = o + [40] * [48] * 4
    // sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "n1EB") : 0;
    return e
}
function ex_model_animation_1_36t3(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }
    return x.temp_buffer.byteLength + o
    // let e = o + [40] * [48] * 4
    // sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "T3gz") : 0;
    return e
}
function ex_model_animation_1_52t35(o, x) {
    let e = o + 36
    if (o === 6799356) {
        console.log('?')
    }
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +08, x.u32_08)

    e = ex_byte_alignment_testing(e)

    replacement_divisibility(e, e + x.padding, e, 205)

    e += x.padding

    if (x.section_12.length) {
        let temp_offset = e

        su32(o + 0, x.section_12[0].temp_buffer.byteLength / 2)
        e = ex_s_offset(o + 12, e, ex_model_animation_1_52t35_12, x.section_12, 'down');

        // let temp_block = x.section_12[0].temp_buffer.byteLength + temp_offset
        // e += replacement_divisibility(x.section_12[0].temp_buffer.byteLength, 4, temp_block, 205)

        // let temp_block = x.section_12[0].temp_buffer.byteLength + o
        // replacement_divisibility(x.section_12[0].temp_buffer.byteLength, 4 ,e, 205)
        // e += divisible(x.section_12[0].temp_buffer.byteLength, 4)

    } else {
        su32(o + 12, x.section_12)
    }

    replacement_divisibility(e, e + x.padding_12, e, 205)
    e += x.padding_12

    if (o === 12520468) {
        console.log('?')
    }

    e = ex_byte_alignment_testing(e);
    if (x.section_24.length) {
        // su32(o + 0, x.section_24[0].temp_buffer.byteLength / 4)
        e = ex_s_offset(o + 24, e, ex_model_animation_1_52t35_24, x.section_24, 'down');
    } else {
        su32(o + 24, x.section_24)
    }
    e = ex_byte_alignment_testing(e)
    replacement_divisibility(e, e + x.padding_24, e, 205)
    e += x.padding_24

    if (x.section_20.length) {
        let temp_offset = e

        su32(o + 4, x.section_20[0].temp_buffer.byteLength / 2)
        e = ex_s_offset(o + 20, e, ex_model_animation_1_52t35_20, x.section_20, 'down');

        // let temp_block = x.section_20[0].temp_buffer.byteLength + temp_offset
        // e += replacement_divisibility(x.section_20[0].temp_buffer.byteLength, 4, temp_block, 205)
    } else {
        su32(o + 20, x.section_20)
    }

    replacement_divisibility(e, e + x.padding_20, e, 205)
    e += x.padding_20

    e = ex_byte_alignment_testing(e)

    if (x.section_28.length) {
        // su32(o + 4, x.section_28[0].temp_buffer.byteLength / 4)
        e = ex_s_offset(o + 28, e, ex_model_animation_1_52t35_28, x.section_28, 'down');
    } else {
        su32(o + 28, x.section_28)
    }
    e = ex_byte_alignment_testing(e)
    replacement_divisibility(e, e + x.padding_28, e, 205)

    e += x.padding_28

    if (x.section_16.length) {
        su32(o + 8, x.section_16[0].temp_buffer.byteLength / 2)
        e = ex_s_offset(o + 16, e, ex_model_animation_1_52t35_16, x.section_16, 'down');
    } else {
        su32(o + 16, x.section_16)
    }

    // e = ex_byte_alignment_testing(e)
    replacement_divisibility(e, e + x.padding_16, e, 205)

    e += x.padding_16

    if (x.section_32.length) {
        let temp_offset = e

        // su32(o + 8, x.section_32[0].temp_buffer.byteLength)
        ex_s_offset(o + 32, e, ex_model_animation_1_52t35_32, x.section_32, 'down');

        let end = e + x.section_32[0].temp_buffer.byteLength - exmodeltemp_divisible

        e = e + x.section_32[0].temp_buffer.byteLength
        //+ divisible(end, 16) - end

        // e += divisible(x.section_32[0].temp_buffer.byteLength, 16)
    } else {
        su32(o + 32, x.section_32)
    }

    g.debug ? ex_debug(o, "kiIB") : 0;
    return e
}
function ex_model_animation_1_52t35_12(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    g.debug ? ex_debug(o, "NyD=") : 0;
    return e
}
function ex_model_animation_1_52t35_24(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "ck0b") : 0;
    return e
}
function ex_model_animation_1_52t35_20(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    su16(o + 0, x.u16_00)

    g.debug ? ex_debug(o, "CUSG") : 0;
    return e
}
function ex_model_animation_1_52t35_28(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, ":86P") : 0;
    return e
}
function ex_model_animation_1_52t35_16(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    su16(o + 0, x.u16_00)

    g.debug ? ex_debug(o, "2@wl") : 0;
    return e
}
function ex_model_animation_1_52t35_32(o, x) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

    // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
    // }

    return x.temp_buffer.byteLength + o

    // unknown(o +00, x.// unknown_00)

    g.debug ? ex_debug(o, "tWQ4") : 0;
    return e
}
function ex_model_animation_1_52t163(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_00)
    //amount?
    su8(o + 4, x.u8_04)
    //amount?

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        // e += divisible(x.section_08.length * 1, 16)
        e += x.section_08.length
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_model_animation_1_52t163_08(temp_offset + (i * 1), e, x.section_08[i])
        }
        ;
    }
    if (x.u8_00 === 0) {
        x.section_12
        su32(o + 12, x.section_12)
    } else {

        if (x.section_12.length) {
            su32(o + 12, e)
            g.oa.push(o + 12)
            let temp_offset = e
            // e += divisible(x.section_12.length * 1, 16)
            e += x.section_12.length
            for (let i = 0; i < x.section_12.length; i++) {
                e = ex_model_animation_1_52t163_12(temp_offset + (i * 1), e, x.section_12[i])
            }
            ;
        }
    }
    // ;e = ex_s_offset(o + 12, e, ex_model_animation_1_52t163_12, x.section_12, 'down');

    g.debug ? ex_debug(o, "RsCY") : 0;
    return e
}
function ex_model_animation_1_52t163_08(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "?0jr") : 0;
    return e
}
function ex_model_animation_1_52t163_12(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "5D^0") : 0;
    return e
}
