function ex_sound(o,XFA) {
    //calculate block length
    let e = o + divisible(XFA.length * 4, 32)
    let base_offset = e
    e += XFA.length * 32

    // e = ex_byte_alignment_testing(e)

    // if (e ===12636) {
    //     e+=32
    // }else if(e ===42282084){
    //     e+=32
    // }else if(e ===42555796){
    //     e+=32
    // }else if(e ===45199764){
    //     e+=32
    // }else if(e ===45611204){
    //     e+=32
    // }else if(e ===48082256){
    //     e+=32
    // }else if(e ===52706048){
    //     e+=32
    // }else if(e ===54273884){
    //     e+=32
    // }else if(e ===1613420){
    //     e+=608
    // }

    

    
    
    for (let i = 0; i < XFA.length; i++) {
        su32(o + (i * 4), i * 32 )
        e = dyn_sound_00(base_offset + (i * 32), XFA[i], e)
    }

    return e

    // let temp_i = (XFA.length)
    // temp_i = divisible(temp_i, 8)

    // for (let ii = 0, i_4 = 0; ii < XFA.length; ii++,
    // i_4 += 4) {
    //     su32(block_i + offset + i_4, ii * 32 )
    // }
    // block_i += temp_i * 4
    // let start_sound_list = block_i + offset
    // // block_i+= temp_i*4
    // for (let ii = 0, i_offset = 0; ii < XFA.length; ii++,
    // block_i += 32) {
    //     //interface idk
    //     i_offset += 32

    //     su32(block_i + offset, i_offset + (XFA.length * 32) )
    //     su32(block_i + offset + 4, XFA[ii].sound_data[0].byteLength )
    //     su32(block_i + offset + 8, XFA[ii].unknown1 )
    //     su32(block_i + offset + 12, XFA[ii].soundsamplerate )
    //     su32(block_i + offset + 16, XFA[ii].unknown2 )
    //     su32(block_i + offset + 20, XFA[ii].unknown3 )
    //     temp_offset = divisible(XFA[ii].sound_data[0].byteLength, 16)
    //     i_offset += temp_offset

    // }
    // for (let ii = 0; ii < XFA.length; ii++) {
    //     for (let iii = 0; iii < XFA[ii].sound_data[0].byteLength; iii++) {
    //         su8(block_i + offset + iii, new DataView(XFA[ii].sound_data[0]).getUint8(iii))
    //     }
    //     temp_offset = divisible(XFA[ii].sound_data[0].byteLength, 16)
    //     block_i += temp_offset
    // }

    function dyn_sound_00(offset, XFA, e) {
        e = e + XFA.padding
        su32(offset, e - base_offset )
        if (XFA.sound_data[0].byteLength ===51072) {
            console.log("?")
        }
        su32(offset + 4, XFA.sound_data[0].byteLength )
        su32(offset + 8, XFA.unknown1 )
        su32(offset + 12, XFA.soundsamplerate )
        su32(offset + 16, XFA.unknown2 )
        su32(offset + 20, XFA.unknown3 )

        e = dyn_sound_00_00(e, XFA.sound_data[0])

        return e
    }

    function dyn_sound_00_00(offset, XFA) {
        for (let i = 0; i < XFA.byteLength; i++) {
            su8(offset + i, new DataView(XFA).getUint8(i))
        }

        return offset + XFA.byteLength //+ divisible(XFA.byteLength,16)
    }

}
