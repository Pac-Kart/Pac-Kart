"use strict";
function ex_sound(o, XFA,m) {
    o-=m
    //calculate block length
    let e = o + divisible(XFA.length * 4, 32)
    let base_offset = e
    e += XFA.length * 32

    // e = ex_byte_alignment_testing(e)

    for (let i = 0; i < XFA.length; i++) {
        su32(o + (i * 4), i * 32)
        e = dyn_sound_00(base_offset + (i * 32), XFA[i], e)
    }

    return e + m

    function dyn_sound_00(offset, XFA, e) {
        e = e + XFA.padding
        su32(offset, e - base_offset)
        su32(offset + 4, XFA.sound_data[0].byteLength)
        su32(offset + 8, XFA.unknown1)
        su32(offset + 12, XFA.soundsamplerate)
        su32(offset + 16, XFA.unknown2)
        su32(offset + 20, XFA.unknown3)

        e = dyn_sound_00_00(e, XFA.sound_data[0])

        return e
    }

    function dyn_sound_00_00(offset, XFA) {
    new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA),offset) 
    // for (let i = 0; i < XFA.byteLength; i++) {
        //     su8(offset + i, new DataView(XFA).getUint8(i))
        // }

        return offset + XFA.byteLength
        //+ divisible(XFA.byteLength,16)
    }

}
