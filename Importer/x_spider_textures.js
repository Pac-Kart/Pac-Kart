function get_texture(offset, XFA, texture_index) {

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

    } else if (type === 160 || type === 24) {
        //rgba888
        temp_value = texture_x * texture_y * 4
        type = 'rgba888'
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
        temp_texture_array = new ArrayBuffer(temp_value)
        for (let i = 0; i < temp_texture_array.byteLength; i++) {
            new DataView(temp_texture_array).setUint8(i, u8(i + texture_offset))
        }
        XFA[texture_index].texture.push(temp_texture_array)
    } else {
        let temp_mipmap_offset = 0

        for (let i = 0; i < u8(offset + 1) + 1; i++) {
            let texture_offset = u32(offset + 8, is_little_endian) + offset_mid + temp_mipmap_offset
            let temp_texture_array = new ArrayBuffer(temp_2)

            let i = 0;
            for (; i < temp_texture_array.byteLength; i++) {
                new DataView(temp_texture_array).setUint8(i, u8(i + texture_offset))
            }

            XFA[texture_index].texture.push(temp_texture_array)

            temp_2 = temp_2 / 4
            temp_value += temp_2
            temp_mipmap_offset+= i
            
        }
        
    }
        // console.log(XFA[texture_index].name,temp_value + u32(offset + 8, is_little_endian) + offset_mid)
    let temp_temp_value = divisible(temp_value, 16)
    let end_offset = temp_temp_value + u32(offset + 8, is_little_endian) + offset_mid

    // let temp_2 = temp_value
    is_same_offset = end_offset

    // for (let i = 0; i < u8(offset + 1); i++) {
    //     temp_2 = temp_2 /2
    //     temp_value+= temp_2
    // }

    // console.log(u8(offset), u8(offset + 1), texture_x, texture_y, u32(offset + 8, is_little_endian) + offset_mid, 'calculated:', temp_value, XFA[texture_index].name)

    // let texture_offset = u32(offset + 8, is_little_endian) + offset_mid
    // let temp_texture_array = new ArrayBuffer(temp_value)

    // let i = 0;
    // for (; i < temp_texture_array.byteLength; i++) {
    //     new DataView(temp_texture_array).setUint8(i, u8(i + texture_offset))
    // }

    // if(texture_index === 2){
    //     a = b
    // }

    // XFA[texture_index].texture.push(temp_texture_array)

    return end_offset
}

is_same_offset = 0
