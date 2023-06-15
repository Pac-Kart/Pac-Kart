function get_share(offset, XFA) {
    XFA.push({
        id: gen_id(),
        name: null,
        texture_array: [],
        sound_array: [],
        model_array: []
    })
    if (u32(offset + 0, is_little_endian) != 0) {
        XFA[0].name = get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false)
    }
    let texture_offset = u32(offset + 8, is_little_endian) + offset_mid
    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        let patch_array = get_patch_offset_index(texture_patch, texture_offset - offset_mid + (i*4))
        if (patch_array != -1) {
            XFA[0].texture_array.push(patch_array)
        }
    }
    let sound_offset = u32(offset + 16, is_little_endian) + offset_mid
    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        let patch_array = get_patch_offset_index(sound_patch, sound_offset - offset_mid + (i*4))
        if (patch_array != -1) {
            XFA[0].sound_array.push(patch_array)
        }
    }
    
    let model_offset = u32(offset + 24, is_little_endian) + offset_mid
    for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
        let patch_array = get_patch_offset_index(model_patch, model_offset - offset_mid + (i*4))
        if (patch_array != -1) {
            XFA[0].model_array.push(patch_array)
        }
    }

}
