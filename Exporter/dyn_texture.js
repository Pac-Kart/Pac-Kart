function dyn_textures(offset, XFA, mid) {
    let end_block = XFA.length * 64 + offset
    for (let i = 0; i < XFA.length; i++) {

        set_u8(offset + (i * 64), XFA[i].type, is_little_endian)
        set_u8(offset + 1 + (i * 64), XFA[i].mipmaps, is_little_endian)
        set_u8(offset + 2 + (i * 64), XFA[i].x, is_little_endian)
        set_u8(offset + 3 + (i * 64), XFA[i].y, is_little_endian)

        dyn_string(offset + 12 + (i * 64), XFA[i].name, mid)
        
        set_u32(offset + 8 + (i * 64), end_block - mid, mid, is_little_endian)

        global_offset_array.push(offset + (i * 64) + 8 - mid)
        

        let iiii = 0
        for (let ii = 0; ii < XFA[i].texture.length; ii++) {
            let iii = 0
            for (; iii < XFA[i].texture[ii].byteLength; iii++) {
                set_u8(end_block + iii, new DataView(XFA[i].texture[ii]).getUint8(iii))
            }
            iii = divisible(iii,32)
            iiii = iii
            end_block += iii;
        }

    }
    return end_block
}
