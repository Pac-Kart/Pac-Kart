function dyn_textures(offset, XFA, mid) {
    let end_block = XFA.length * 64 + offset

    //loading.xpc testing
    // if (offset === 456) {
    //     end_block += 192
    // } else if (offset === 11036) {
    //     end_block += 576
    // } else if (offset === 72264) {
    //     end_block += 576
    // } else if (offset === 133492) {
    //     end_block += 576
    // } else if (offset === 194720) {
    //     end_block += 576
    // } else if (offset === 255948) {
    //     end_block += 576
    // } else if (offset === 317176) {
    //     end_block += 576
    // } else if (offset === 378052) {
    //     end_block += 192
    // } else if (offset === 8744904) {
    //     end_block += 2240
    // } else if (offset === 41322852) {
    //     end_block += 64
    // } else if (offset === 41702992) {
    //     end_block += 64
    // } else if (offset === 42336508) {
    //     end_block += 1408
    // } else if (offset === 42610764) {
    //     end_block += 1216
    // } else if (offset === 45257064) {
    //     end_block += 1536
    // } else if (offset === 45665468) {
    //     end_block += 704
    // } else if (offset === 48137128) {
    //     end_block += 1280
    // } else if (offset === 49870160) {
    //     end_block += 576
    // } else if (offset === 52760408) {
    //     end_block += 1088
    // } else if (offset === 54328340) {
    //     end_block += 1472
    // } else if (offset === 54621404) {
    //     end_block += 128
    // }

    

        

    
    
    for (let i = 0; i < XFA.length; i++) {

        if (XFA[i].name ==='fx_sprite_lightning_b&w.btf') {
            console.log('y')
        }

        set_u8(offset + (i * 64), XFA[i].type, is_little_endian)
        set_u8(offset + 1 + (i * 64), XFA[i].mipmaps, is_little_endian)
        set_u8(offset + 2 + (i * 64), XFA[i].x, is_little_endian)
        set_u8(offset + 3 + (i * 64), XFA[i].y, is_little_endian)

        dyn_string(offset + 12 + (i * 64), XFA[i].name, mid)

        set_u32(offset + 8 + (i * 64), end_block - mid, mid, is_little_endian)

        global_offset_array.push(offset + (i * 64) + 8 - mid)

        let iii = 0
        for (let ii = 0; ii < XFA[i].texture.length; ii++) {
            let iii = 0
            for (; iii < XFA[i].texture[ii].byteLength; iii++) {
                set_u8(end_block + iii, new DataView(XFA[i].texture[ii]).getUint8(iii))
            }

            if (ii+1 === XFA[i].texture.length) {
            iii = divisible(iii, 32)
            }

            // iii = divisible(iii, 16)
            end_block += iii;
            
        }
        // iii = divisible(iii, 32)
        // end_block += iii;

        // if (end_block === 8772872) {
        //     end_block -= 16
        // } else if (end_block === 15064329) {
        //     end_block += 16
        // } else if (end_block === 15064312) {
        //     end_block += 16
        // } else if (end_block === 31927592) {
        //     end_block -= 16
        // } else if (end_block === 31993112) {
        //     end_block += 16
        // } else if (end_block === 39495528) {
        //     end_block -= 16
        // } else if (end_block === 39495528) {
        //     end_block -= 16
        // } else if (end_block === 39495528) {
        //     end_block -= 16
        // } else if (end_block === 39496564) {
        //     end_block -= 12
        // } else if (end_block === 39877128) {
        //     end_block -= 16
        // } else if (end_block === 45451624) {
        //     end_block -= 16
        // } else if (end_block === 48032540) {
        //     end_block -= 16
        // }
        
        

    }
    return end_block
}
