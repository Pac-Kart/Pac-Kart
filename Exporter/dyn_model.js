function dyn_model(offset, mid, XFA,mid_plus_4) {
    let next_offset
    let render_offset = 0

    global_offset_array.push(offset - mid_plus_4)
    
    set_u16(offset, XFA.magic, is_little_endian)
    set_u16(offset + 2, XFA.sections.length, is_little_endian)
    
    set_u32(offset + 4, offset + 64 - mid, is_little_endian)
    global_offset_array.push(offset + 8 - mid_plus_4)
    
    next_offset = dyn_model_sections(offset + 64)
    set_u32(offset + 12, render_offset - mid, is_little_endian)

    set_f32(offset + 16, XFA.visibility.x1, is_little_endian)
    set_f32(offset + 20, XFA.visibility.y1, is_little_endian)
    set_f32(offset + 24, XFA.visibility.z1, is_little_endian)
    set_f32(offset + 28, XFA.visibility.w1, is_little_endian)
    set_f32(offset + 32, XFA.visibility.x2, is_little_endian)
    set_f32(offset + 36, XFA.visibility.y2, is_little_endian)
    set_f32(offset + 40, XFA.visibility.z2, is_little_endian)
    set_f32(offset + 44, XFA.visibility.w2, is_little_endian)
    set_f32(offset + 48, XFA.visibility.x3, is_little_endian)
    set_f32(offset + 52, XFA.visibility.y3, is_little_endian)
    set_f32(offset + 56, XFA.visibility.z3, is_little_endian)
    set_f32(offset + 60, XFA.visibility.w3, is_little_endian)

    for (let i = 0; i < XFA.second_names.length; i++) {
    next_offset = dyn_string(next_offset, XFA.second_names[i], mid)
    }

    set_u32(offset + 8, next_offset - mid, is_little_endian)
        
    global_offset_array.push(offset + 4 - mid_plus_4)

    next_offset = dyn_string(next_offset, XFA.name, mid)
    //end string name

    return next_offset
    // end model

    function dyn_model_sections(offset) {
        global_offset_array.push(offset - mid_plus_4)
        let end_section_offset = XFA.sections.length * 8
        let end_render_section = XFA.sections.length * 4
        end_render_section = divisible(end_render_section, 16) + divisible(end_section_offset, 16) + offset
        end_section_offset = divisible(end_section_offset, 16) + offset
        render_offset = end_section_offset

        let end_block = 0

        // console.log(end_section_offset, end_render_section, offset)

        for (let i = 0; i < XFA.sections.length; i++) {
            end_block = dyn_model_sub_sections(offset + (i * 8), XFA.sections[i], end_render_section)
        }

        let i = 0
        for (; i < XFA.sections.length; i++) {
            set_f32(end_section_offset + (i * 4), XFA.sections[i].render, is_little_endian)
        }

        return end_block
    }

    function dyn_model_sub_sections(offset, XFA, jump_offset) {
        
        let end_block = offset
        set_u32(offset, XFA.sub_section.length, is_little_endian)
        set_u32(offset + 4, jump_offset - mid, is_little_endian)
        end_block = jump_offset

        let sub_sub_section_end = divisible(XFA.sub_section.length * 4, 16) + offset
        for (let i = 0; i < XFA.sub_section.length; i++) {
            end_block = dyn_model_sub_sub_sections(jump_offset + (i * 4), XFA.sub_section[i], sub_sub_section_end)
        }
        // set_u32(offset, XFA.sub_section.length, is_little_endian)

        return end_block
    }

    function dyn_model_sub_sub_sections(offset, XFA, block_index) {
        let end_block = offset + 16
        set_u32(offset, offset + 16 - mid, is_little_endian)
        // fix later
        global_offset_array.push(offset - mid)
        
        end_block = dyn_model_data_header(offset + 16, XFA)

        return end_block

    }

    function dyn_model_data_header(offset, XFA) {
        let end_block = offset + 96

        set_u32(offset + 8, XFA.unknown_1, is_little_endian)
        set_u32(offset + 16, XFA.unknown_2, is_little_endian)
        set_u32(offset + 24, XFA.unknown_3, is_little_endian)
        set_u32(offset + 28, XFA.unknown_4, is_little_endian)
        

        
        if (XFA.texture !== -1) {

            set_u16(offset + 40, XFA.texture[0][1], is_little_endian)
            // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
            set_u16(offset + 42, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 40 - mid, XFA.texture[0][1], XFA.texture[0][2]])
        }
        if(XFA.animation !== -1){
            set_u16(offset + 36, XFA.texture[0][1], is_little_endian)
            // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
            set_u16(offset + 38, 52428, is_little_endian)
            texture_anim_offset_index_array.push([offset + 36 - mid, XFA.animation[0][1], XFA.animation[0][2]])
        }
        set_u32(offset + 44, XFA.unknown_5, is_little_endian)
        set_u32(offset + 48, XFA.unknown_6, is_little_endian)
        set_u32(offset + 56, XFA.unknown_7, is_little_endian)
        set_u32(offset + 60, XFA.unknown_8, is_little_endian)
        set_u32(offset + 68, XFA.unknown_9, is_little_endian)
        set_u32(offset + 88, XFA.unknown_10, is_little_endian)

        // texture_offset_index_array.push([offset - mid, XFA.texture[0][1], XFA.texture[0][2]])
        // add to xfa

        if (XFA.v_array.length !== 0) {
            global_offset_array.push(offset + 68 - mid)
    set_u32(offset + 68, end_block - mid, is_little_endian)
            let v_i = 0
            for (; v_i < XFA.v_array.length; v_i++) {
                set_f32(end_block + (v_i * 4), XFA.v_array[v_i], is_little_endian)
            }
            end_block = end_block + divisible((v_i * 4), 16)
        }
        if (XFA.c_array.length !== 0) {
            global_offset_array.push(offset + 72 - mid)
            set_u32(offset + 72, end_block - mid, is_little_endian)
            let c_i = 0
            for (; c_i < XFA.c_array.length; c_i++) {
                set_u8(end_block + (c_i), XFA.c_array[c_i], is_little_endian)
            }
            end_block = end_block + divisible((c_i), 16)
        }
        if (XFA.u_array.length !== 0) {
            global_offset_array.push(offset + 80 - mid)
            set_u32(offset + 80, end_block - mid, is_little_endian)
            let u_i = 0
            for (; u_i < XFA.u_array.length; u_i++) {
                set_f32(end_block + (u_i * 4), XFA.u_array[u_i], is_little_endian)
            }
            end_block = end_block + divisible((u_i * 4), 16)
        }
        if (XFA.u_array.length !== 0 || XFA.c_array.length !== 0 || XFA.v_array.length !== 0) {
            global_offset_array.push(offset + 92 - mid)
            set_u32(offset + 92, end_block - mid, is_little_endian)
            end_block = dyn_model_data_sub_header(end_block, XFA)
        }

        return end_block
    }

    function dyn_model_data_sub_header(offset, XFA) {
        set_u32(offset, XFA.v_array.length / 9, is_little_endian)
        // soft

        return offset + 16
    }
}
