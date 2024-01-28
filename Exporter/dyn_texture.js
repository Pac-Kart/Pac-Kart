function dyn_textures(offset, XFA, mid) {
    
    let end_block = XFA.length * 64 + offset

    // end_block = ex_byte_alignment_testing(offset)
    //loading.xpc testing

    

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

    
    
    for (let i = 0; i < XFA.length; i++) {

        if (XFA[i].name ==='fx_sprite_lightning_b&w.btf') {
            console.log('y')
        }

        su8(offset + (i * 64), XFA[i].type, is_little_endian)
        su8(offset + 1 + (i * 64), XFA[i].mipmaps, is_little_endian)
        su8(offset + 2 + (i * 64), XFA[i].x, is_little_endian)
        su8(offset + 3 + (i * 64), XFA[i].y, is_little_endian)

        dyn_string(offset + 12 + (i * 64), XFA[i].name, mid)

        su32(offset + 8 + (i * 64), end_block - mid, mid, is_little_endian)

        g.oa.push(offset + (i * 64) + 8 - mid)

        let iii = 0
        for (let ii = 0; ii < XFA[i].texture.length; ii++) {
            let iii = 0
            for (; iii < XFA[i].texture[ii].byteLength; iii++) {
                su8(end_block + iii, new DataView(XFA[i].texture[ii]).getUint8(iii))
            }

            if (ii+1 === XFA[i].texture.length) {
            iii = divisible(iii, 32)
            }

            // iii = divisible(iii, 16)
            end_block += iii;
            
        }
        // iii = divisible(iii, 32)
        // end_block += iii;

        
        

    }

    return end_block

}


function ex_textures(o, e,x) {

    // e+= x.padding
    //loading.xpc testing
    if (o === 456) {
        e+= 192
    } else if (o === 11036) {
        e+= 576
    } else if (o === 72264) {
        e+= 576
    } else if (o === 133492) {
        e+= 576
    } else if (o === 194720) {
        e+= 576
    } else if (o === 255948) {
        e+= 576
    } else if (o === 317176) {
        e+= 576
    } else if (o === 378052) {
        e+= 192
    } else if (o === 8744904) {
        e+= 2240
    } else if (o === 41322852) {
        e+= 64
    } else if (o === 41702992) {
        e+= 64
    } else if (o === 42336508) {
        e+= 1408
    } else if (o === 42610764) {
        e+= 1216
    } else if (o === 45257064) {
        e+= 1536
    } else if (o === 45665468) {
        e+= 704
    } else if (o === 48137128) {
        e+= 1280
    } else if (o === 49870160) {
        e+= 576
    } else if (o === 52760408) {
        e+= 1088
    } else if (o === 54328340) {
        e+= 1472
    } else if (o === 54621404) {
        e+= 128
    }

    e = ex_byte_alignment_testing(e)

        su8(o + 0, x.type)
        su8(o + 1 , x.mipmaps)
        su8(o + 2 , x.x)
        su8(o + 3 , x.y)

        // dyn_string(o + 12 + (i * 64), x.name, mid)

        ex_string(o + 12, o + 12, x.name, 1, 0)

        su32(o + 8 , e - g.m)

        g.oa.push(o + 8)

        let iii = 0
        for (let ii = 0; ii < x.texture.length; ii++) {
            let iii = 0
            for (; iii < x.texture[ii].byteLength; iii++) {
                su8(e + iii, new DataView(x.texture[ii]).getUint8(iii))
            }

            if (ii+1 === x.texture.length) {
            iii = divisible(iii, 32)
            }

            // iii = divisible(iii, 16)
            e += iii;
            
        }
        // iii = divisible(iii, 32)
        // end_block += iii;

        if (e === 8772872) {
            e -= 16
        } else if (e === 15064329) {
            e += 16
        } else if (e === 15064312) {
            e += 16
        } else if (e === 31927592) {
            e -= 16
        } else if (e === 31993112) {
            e += 16
        } else if (e === 39495528) {
            e -= 16
        } else if (e === 39495528) {
            e -= 16
        } else if (e === 39495528) {
            e -= 16
        } else if (e === 39496564) {
            e -= 12
        } else if (e === 39877128) {
            e -= 16
        } else if (e === 45451624) {
            e -= 16
        } else if (e === 48032540) {
            e -= 16
        }

    e = ex_byte_alignment_testing(e)

        
    return e

}