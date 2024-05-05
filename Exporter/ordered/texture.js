"use strict";
// function dyn_textures(offset, XFA, mid) {

//     let end_block = XFA.length * 64 + offset + g.ordered_ref.texturepadding

//     // end_block = ex_byte_alignment_testing(offset)    

//     for (let i = 0; i < XFA.length; i++) {

//         su8(offset + (i * 64), XFA[i].type)
//         su8(offset + 1 + (i * 64), XFA[i].mipmaps)
//         su8(offset + 2 + (i * 64), XFA[i].x)
//         su8(offset + 3 + (i * 64), XFA[i].y)

//         dyn_string(offset + 12 + (i * 64), XFA[i].name, mid)

//         su32(offset + 8 + (i * 64), end_block - mid, mid)

//         g.oa.push(offset + (i * 64) + 8 - mid)

//         let iii = 0
//         for (let ii = 0; ii < XFA[i].texture.length; ii++) {
//             let iii = 0
//             for (; iii < XFA[i].texture[ii].byteLength; iii++) {
//                 su8(end_block + iii, new DataView(XFA[i].texture[ii]).getUint8(iii))
//             }

//             if (ii + 1 === XFA[i].texture.length) {
//                 iii = divisible(iii, 32)
//             }

//             // iii = divisible(iii, 16)
//             end_block += iii;

//         }
//         // iii = divisible(iii, 32)
//         // end_block += iii;

//         //alpha
//         if (XFA[i].alpha.length) {
//         su32(offset + 4 + (i * 64), end_block - mid, mid)
//         g.oa.push(offset + (i * 64) + 4 - mid)

//             for (; iii < XFA[i].alpha[0].byteLength; iii++) {
//                 su8(end_block + iii, new DataView(XFA[i].alpha[0]).getUint8(iii))
//             }

//         }

//     }

//     return end_block

// }

function ex_textures(o, e, x) {

    // e+= x.padding

    e = ex_byte_alignment_testing(e)

    su8(o + 0, x.type)
    su8(o + 1, x.mipmaps)
    su8(o + 2, x.x)
    su8(o + 3, x.y)

    // dyn_string(o + 12 + (i * 64), x.name, mid)

    ex_string(o + 12, o + 12, x.name, 1, 0)

    su32(o + 8, e)

    g.oa.push(o + 8)

    let iii = 0
    for (let ii = 0; ii < x.texture.length; ii++) {
        let iii = 0
        new Uint8Array(dynamic_buffer).set(new Uint8Array(x.texture[ii]), e + iii)
        iii += x.texture[ii].byteLength

        // for (; iii < x.texture[ii].byteLength; iii++) {
        //     su8(e + iii, new DataView(x.texture[ii]).getUint8(iii))
        // }

        if (ii + 1 === x.texture.length) {
            iii += x.padding
            // iii = divisible(iii, 32)
        }

        // iii = divisible(iii, 16)
        e += iii;

    }
    // iii = divisible(iii, 32)
    // end_block += iii;

    e = ex_byte_alignment_testing(e)

    if (x.alpha.length) {
        su32(o + 4, e)
        g.oa.push(o + 4)

        new Uint8Array(dynamic_buffer).set(new Uint8Array(x.alpha[0]), e)

        // for (; iii < x.alpha[0].byteLength; iii++) {
        //     su8(e + iii, new DataView(x.alpha[0]).getUint8(iii))
        // }
        e += x.alpha[0].byteLength

    }

    return e

}
