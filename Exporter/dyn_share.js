function dyn_share_mid_section(offset, mid, XFA, header_offset) {
    // calculate how many models
    // first offset is always 0?
    let end_block = (XFA.models.length)
    end_block = divisible(end_block, 8)
    end_block = (end_block * 4) + offset

    let share_model_offset_index_list = []

    for (let i = 0; i < XFA.models.length; i++) {

        set_u32(offset + (i * 4), end_block - mid, is_little_endian)
        model_offset_index_array.push([offset + (i * 4) - mid, i, 0])
        share_model_offset_index_list.push(end_block - mid)
        // FIX imperfect ?
        end_block = dyn_model(end_block, XFA_main.models[i])

    }

    set_u32(header_offset + 24, end_block - mid, is_little_endian)

    end_block = dyn_textures(end_block, XFA.textures, mid)

    end_block = share_low_header(end_block - 16, XFA.type_data[0])

    return end_block

    function share_low_header(offset, XFA) {
        let end_block = offset + 32

        if (XFA.name != null) {
            global_offset_array.push(offset - mid)
            set_u32(offset, end_block - mid, is_little_endian)
            end_block = dyn_string(end_block, XFA.name, mid)
        }
        if (XFA.texture_array.length !== 0) {
            global_offset_array.push(offset +8 - mid)
            set_u32(offset + 4, XFA.texture_array.length, is_little_endian)
            set_u32(offset + 8, end_block - mid, is_little_endian)
            let t_i = 0
            for (; t_i < XFA.texture_array.length; t_i++) {
                if (XFA.texture_array[t_i][0] != -1) {
                    set_u16(end_block + (t_i * 4), XFA.texture_array[t_i][0][1], is_little_endian)
                    set_u16(end_block + 2 + (t_i * 4), 52428, is_little_endian)
                    texture_offset_index_array.push([end_block + (t_i * 4) - mid, XFA.texture_array[t_i][0][1], XFA.texture_array[t_i][0][2]])
                }
                // set_u32(end_block + (t_i * 4), 0xffff, is_little_endian)
            }
            t_i = divisible(t_i, 4)
            end_block += (t_i * 4)
        }
        if (XFA.sound_array.length !== 0) {
            global_offset_array.push(offset +16 - mid)
            set_u32(offset + 12, XFA.sound_array.length, is_little_endian)
            set_u32(offset + 16, end_block - mid, is_little_endian)
            let s_i = 0
            for (; s_i < XFA.sound_array.length; s_i++) {
                if (XFA.sound_array[s_i][0] != -1) {
                    set_u32(end_block + (s_i * 4), XFA.sound_array[s_i][0][1], is_little_endian)
                    sound_offset_index_array.push([end_block + (s_i * 4) - mid, XFA.sound_array[s_i][0][1], XFA.sound_array[s_i][0][2]])
                }
                // set_u32(end_block + (s_i * 4), 0xffff, is_little_endian)
            }
            s_i = divisible(s_i, 4)
            end_block += (s_i * 4)
        }
        if (XFA.model_array.length !== 0) {
            global_offset_array.push(offset +24 - mid)
            set_u32(offset + 20, XFA.model_array.length, is_little_endian)
            set_u32(offset + 24, end_block - mid, is_little_endian)
            let m_i = 0
            for (; m_i < XFA.model_array.length; m_i++) {
                if (XFA.model_array[m_i][0] != -1) {
                    // set_u32(end_block + (m_i * 4), XFA.model_array[m_i][0][0], is_little_endian)
                    // set_u32(end_block + (m_i * 4), 542656838, is_little_endian)
                    // console.log('end_block + (m_i * 4) - mid',end_block + (m_i * 4) - mid)
                    // model_offset_index_array.push([end_block + (m_i * 4) - mid, m_i, 0])

                    // console.log(patch_array, 'patch_array')
                    set_u32(end_block + (m_i * 4), share_model_offset_index_list[m_i], is_little_endian)
                    model_offset_index_array.push([end_block + (m_i * 4) - mid, m_i, 0])

                }
                // set_u32(end_block + (m_i * 4), 0xffff, is_little_endian)
            }
            m_i = divisible(m_i, 4)
            end_block += (m_i * 4)
        }
        return end_block
    }
}
