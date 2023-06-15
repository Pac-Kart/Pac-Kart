function dyn_sound(offset, XFA) {
    //calculate block length
    let end_block = offset + divisible(XFA.length * 4, 32)
    let base_offset = end_block
    end_block += XFA.length * 32

    // if (end_block ===12636) {
    //     end_block+=32
    // }else if(end_block ===42282084){
    //     end_block+=32
    // }else if(end_block ===42555796){
    //     end_block+=32
    // }else if(end_block ===45199764){
    //     end_block+=32
    // }else if(end_block ===45611204){
    //     end_block+=32
    // }else if(end_block ===48082256){
    //     end_block+=32
    // }else if(end_block ===52706048){
    //     end_block+=32
    // }else if(end_block ===54273884){
    //     end_block+=32
    // }

    

    
    
    for (let i = 0; i < XFA.length; i++) {
        set_u32(offset + (i * 4), i * 32, is_little_endian)
        end_block = dyn_sound_00(base_offset + (i * 32), XFA[i], end_block)
    }

    return end_block

    // let temp_i = (XFA.length)
    // temp_i = divisible(temp_i, 8)

    // for (let ii = 0, i_4 = 0; ii < XFA.length; ii++,
    // i_4 += 4) {
    //     set_u32(block_i + offset + i_4, ii * 32, is_little_endian)
    // }
    // block_i += temp_i * 4
    // let start_sound_list = block_i + offset
    // // block_i+= temp_i*4
    // for (let ii = 0, i_offset = 0; ii < XFA.length; ii++,
    // block_i += 32) {
    //     //interface idk
    //     i_offset += 32

    //     set_u32(block_i + offset, i_offset + (XFA.length * 32), is_little_endian)
    //     set_u32(block_i + offset + 4, XFA[ii].sound_data[0].byteLength, is_little_endian)
    //     set_u32(block_i + offset + 8, XFA[ii].unknown1, is_little_endian)
    //     set_u32(block_i + offset + 12, XFA[ii].soundsamplerate, is_little_endian)
    //     set_u32(block_i + offset + 16, XFA[ii].unknown2, is_little_endian)
    //     set_u32(block_i + offset + 20, XFA[ii].unknown3, is_little_endian)
    //     temp_offset = divisible(XFA[ii].sound_data[0].byteLength, 16)
    //     i_offset += temp_offset

    // }
    // for (let ii = 0; ii < XFA.length; ii++) {
    //     for (let iii = 0; iii < XFA[ii].sound_data[0].byteLength; iii++) {
    //         set_u8(block_i + offset + iii, new DataView(XFA[ii].sound_data[0]).getUint8(iii))
    //     }
    //     temp_offset = divisible(XFA[ii].sound_data[0].byteLength, 16)
    //     block_i += temp_offset
    // }

    function dyn_sound_00(offset, XFA, end_block) {
        set_u32(offset, end_block - base_offset, is_little_endian)
        set_u32(offset + 4, XFA.sound_data[0].byteLength, is_little_endian)
        set_u32(offset + 8, XFA.unknown1, is_little_endian)
        set_u32(offset + 12, XFA.soundsamplerate, is_little_endian)
        set_u32(offset + 16, XFA.unknown2, is_little_endian)
        set_u32(offset + 20, XFA.unknown3, is_little_endian)

        end_block = dyn_sound_00_00(end_block, XFA.sound_data[0])

        return end_block
    }

    function dyn_sound_00_00(offset, XFA) {
        for (let i = 0; i < XFA.byteLength; i++) {
            set_u8(offset + i, new DataView(XFA).getUint8(i))
        }

        return offset + divisible(XFA.byteLength, 16)
    }

}
