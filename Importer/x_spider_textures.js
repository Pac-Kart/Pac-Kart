function im_texture(o, x) {
    let e = o + (u32(g.datapack_offset + 20) * 64)
    for (let ti = 0; ti < u32(g.datapack_offset + 20); ti++) {
        let padding = e

        let texture_settings_offset = o + (ti * 64)
        // for (let ti = 0; ti < u32(g.datapack_offset + 20); ti++) {
        //     end_block = get_texture(g.m + u32(offset + 24) + (ti * 64), XFA[XFA_index].textures, i)
        // }

        let texture_name = get_string(texture_settings_offset + 12, 0, false)
        texture_name = texture_name.substr(0, 51)
        x.push({
            id: gen_id(),
            type: u8(texture_settings_offset),
            mipmaps: u8(texture_settings_offset + 1),
            x: u8(texture_settings_offset + 2),
            y: u8(texture_settings_offset + 3),
            alpha: [],
            texture: [],
            name: [texture_name],
            padding: (u32(texture_settings_offset + 8) + g.m) - padding
        })

        let texture_x = Math.pow(2, u8(texture_settings_offset + 2))
        let texture_y = Math.pow(2, u8(texture_settings_offset + 3))

        let temp_value
        let type = u8(texture_settings_offset)
        if (type === 65) {
            // dxt1
            type = 'dxt1'
            temp_value = texture_x * texture_y / 2

        } else if (type === 160) {
            //rgba888
            temp_value = texture_x * texture_y * 4
            type = 'rgba8888'
        } else if (type === 24) {
            //rgba888
            temp_value = texture_x * texture_y * 3
            type = 'rgb888'
        } else if (type === 197) {
            //dxt5
            type = 'dxt5'
            temp_value = texture_x * texture_y
        }
        let texture_offset;
        let temp_texture_array;
        let temp_2 = temp_value
        if (u8(texture_settings_offset + 1) === 0) {

            texture_offset = u32(texture_settings_offset + 8) + g.m
            temp_texture_array = buffer.slice(texture_offset, texture_offset + temp_value)

            x[ti].texture.push(temp_texture_array)
            e = texture_offset + temp_value
        } else {

            let mip_map_idk = 1

            if (type === "rgb888") {
                mip_map_idk = 0
            }

            let mipmap_start = u32(texture_settings_offset + 8) + g.m
            let mipmap_end = mipmap_start + temp_value

            let temp_mipmap_offset = 0

            let texture_offset = u32(texture_settings_offset + 8) + g.m
            for (let i = 0; i < u8(texture_settings_offset + 1) + 1; i++) {

                let temp_texture_array = buffer.slice(mipmap_start, mipmap_end)

                // let temp_texture_array = new ArrayBuffer(temp_2)

                // let ii = 0;
                // for (; ii < temp_texture_array.byteLength; ii++) {
                //     new DataView(temp_texture_array).setUint8(ii, u8(ii + texture_offset))
                // }

                x[ti].texture.push(temp_texture_array)
                mipmap_start += temp_2
                temp_mipmap_offset += temp_2
                temp_2 = Math.round(temp_2 / 4)
                mipmap_end += temp_2

            }
            e = mipmap_end

        }
        if (g.file_dir_type === 'share' && g.texture_patch_ref.length === 69) {
            e += divisible(e - o, 16) - (e - o)
        }
    }
    return e
}

/*
function get_texture(offset, XFA, texture_index) {
    let end_offset = offset

    let texture_name = get_string(offset + 12, 0, false)
    texture_name = texture_name.substr(0, 51)
    XFA.push({
        id: gen_id(),
        type: u8(offset),
        mipmaps: u8(offset + 1),
        x: u8(offset + 2),
        y: u8(offset + 3),
        alpha: [],
        texture: [],
        name: texture_name
    })

    let texture_x = Math.pow(2, u8(offset + 2))
    let texture_y = Math.pow(2, u8(offset + 3))

    let temp_value
    let type = u8(offset)
    if (type === 65) {
        // dxt1
        type = 'dxt1'
        temp_value = texture_x * texture_y / 2

    } else if (type === 160) {
        //rgba888
        temp_value = texture_x * texture_y * 4
        type = 'rgba8888'
    } else if (type === 24) {
        //rgba888
        temp_value = texture_x * texture_y * 3
        type = 'rgb888'
    } else if (type === 197) {
        //dxt5
        type = 'dxt5'
        temp_value = texture_x * texture_y
    }
    let texture_offset;
    let temp_texture_array;
    let temp_2 = temp_value
    if (u8(offset + 1) === 0) {

        texture_offset = u32(offset + 8, is_little_endian) + offset_mid
        temp_texture_array = buffer.slice(texture_offset,texture_offset + temp_value)
        
        XFA[texture_index].texture.push(temp_texture_array)
        end_offset = texture_offset + temp_value
    } else {

        let mip_map_idk = 1

        if (type === "rgb888") {
            mip_map_idk = 0
        }

        let mipmap_start = u32(offset + 8, is_little_endian) + offset_mid
        let mipmap_end = mipmap_start + temp_value
        
        let temp_mipmap_offset = 0
        
        let texture_offset = u32(offset + 8, is_little_endian) + offset_mid
        for (let i = 0; i < u8(offset + 1) + 1; i++) {

            let temp_texture_array = buffer.slice(mipmap_start,mipmap_end)
           
            // let temp_texture_array = new ArrayBuffer(temp_2)

            // let ii = 0;
            // for (; ii < temp_texture_array.byteLength; ii++) {
            //     new DataView(temp_texture_array).setUint8(ii, u8(ii + texture_offset))
            // }

            XFA[texture_index].texture.push(temp_texture_array)
            mipmap_start+= temp_2
            temp_mipmap_offset+= temp_2
            temp_2 = Math.round(temp_2 / 4)
            mipmap_end += temp_2
            
        }
         end_offset = mipmap_end
        
    }
    end_offset+= divisible(end_offset - offset,16) - (end_offset - offset)

    return end_offset
}
*/
