function get_model(offset, XFA, model_index) {

    XFA.push({
        id: gen_id(),
        magic: u16(offset, is_little_endian),
        name: get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false),
        sections: [],
        second_names: [],
        visibility: {
            x1: f32(offset + 16, is_little_endian),
            y1: f32(offset + 20, is_little_endian),
            z1: f32(offset + 24, is_little_endian),
            w1: f32(offset + 28, is_little_endian),
            x2: f32(offset + 32, is_little_endian),
            y2: f32(offset + 36, is_little_endian),
            z2: f32(offset + 40, is_little_endian),
            w2: f32(offset + 44, is_little_endian),
            x3: f32(offset + 48, is_little_endian),
            y3: f32(offset + 52, is_little_endian),
            z3: f32(offset + 56, is_little_endian),
            w3: f32(offset + 60, is_little_endian),
        }
    })

    let render_array = []
    let end_offset = 0

    for (let i = 0; i < u16(offset + 2, is_little_endian); i++) {
        //get render first
        let render_offset = u32(offset + 12, is_little_endian) + offset_mid + (i*4)
        render_array.push(f32(render_offset, is_little_endian))
    }

    for (let i = 0; i < u16(offset + 2, is_little_endian); i++) {
        let section_offset = u32(offset + 4, is_little_endian) + offset_mid

        XFA[model_index].sections.push({
            id: gen_id(),
            render: render_array[i],
            sub_section: []
        })
        for (let ii = 0; ii < u32(section_offset, is_little_endian); ii++) {
            let sub_section_offset_offset = u32(section_offset + 4, is_little_endian) + offset_mid
            let sub_section_offset = u32(sub_section_offset_offset, is_little_endian) + offset_mid
            let model_data_sub_header = u32(sub_section_offset + 92, is_little_endian) + offset_mid
            let vertex_array = []
            let vertex_offset
            if (u32(sub_section_offset + 68, is_little_endian) !== 0) {
                vertex_offset = u32(sub_section_offset + 68, is_little_endian) + offset_mid
            } else {
                vertex_offset = false
            }
            let color_array = []
            let color_offset
            if (u32(sub_section_offset + 72, is_little_endian) !== 0) {
                color_offset = u32(sub_section_offset + 72, is_little_endian) + offset_mid
            } else {
                color_offset = false
            }
            let normal_array = []
            let uv_array = []
            let uv_offset
            if (u32(sub_section_offset + 80, is_little_endian) !== 0) {
                uv_offset = u32(sub_section_offset + 80, is_little_endian) + offset_mid
            } else {
                uv_offset = false
            }

            let soft_array = []
            let amount_entries = u32(model_data_sub_header, is_little_endian)

            if (vertex_offset !== false) {

                for (let vertex_i = 0; vertex_i < amount_entries; vertex_i++) {

                    vertex_array.push(f32(vertex_offset + (vertex_i * 36), is_little_endian), f32(vertex_offset + 4 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 8 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 12 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 16 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 20 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 24 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 28 + (vertex_i * 36), is_little_endian), f32(vertex_offset + 32 + (vertex_i * 36), is_little_endian))
                }
            }
            if (color_offset !== false) {

                for (let c_i = 0; c_i < amount_entries; c_i++) {

                    color_array.push(u8(color_offset + (c_i * 12)), u8(color_offset + 1 + (c_i * 12)), u8(color_offset + 2 + (c_i * 12)), u8(color_offset + 3 + (c_i * 12)), u8(color_offset + 4 + (c_i * 12)), u8(color_offset + 5 + (c_i * 12)), u8(color_offset + 6 + (c_i * 12)), u8(color_offset + 7 + (c_i * 12)), u8(color_offset + 8 + (c_i * 12)), u8(color_offset + 9 + (c_i * 12)), u8(color_offset + 10 + (c_i * 12)), u8(color_offset + 11 + (c_i * 12)))
                }
            }
            if (uv_offset !== false) {

                for (let u_i = 0; u_i < amount_entries; u_i++) {

                    uv_array.push(f32(uv_offset + (u_i * 24), is_little_endian), f32(uv_offset + 4 + (u_i * 24), is_little_endian), f32(uv_offset + 8 + (u_i * 24), is_little_endian), f32(uv_offset + 12 + (u_i * 24), is_little_endian), f32(uv_offset + 16 + (u_i * 24), is_little_endian), f32(uv_offset + 20 + (u_i * 24), is_little_endian))
                }
            }
            // console.log(amount_entries, vertex_offset)

            console.log(offset + 40 - offset_mid, 'patch_array', offset, offset_mid)
            let patch_array = get_patch_offset_index(texture_patch, sub_section_offset + 40 - offset_mid)
            if (patch_array === -1) {// patch_array = -1
            }
            
            let patch_array_animation = get_patch_offset_index(texture_animation_patch, sub_section_offset + 36, is_little_endian - offset_mid)
            if (patch_array_animation === -1) {// patch_array = -1
            }
            end_offset = u32(sub_section_offset + 92, is_little_endian) + offset_mid + 16

            XFA[model_index].sections[i].sub_section.push({
                id: gen_id(),
                v_array: vertex_array,
                c_array: color_array,
                u_array: uv_array,
                unknown_1: u32(sub_section_offset + 8, is_little_endian),
                unknown_2: u32(sub_section_offset + 16, is_little_endian),
                unknown_3: u32(sub_section_offset + 24, is_little_endian),
                unknown_4: u32(sub_section_offset + 28, is_little_endian),
                texture: patch_array,
                animation: patch_array_animation,
                unknown_5: u32(sub_section_offset + 44, is_little_endian),
                unknown_6: u32(sub_section_offset + 48, is_little_endian),
                unknown_7: u32(sub_section_offset + 56, is_little_endian),
                unknown_8: u32(sub_section_offset + 60, is_little_endian),
                unknown_9: u32(sub_section_offset + 68, is_little_endian),
                unknown_10: u32(sub_section_offset + 88, is_little_endian),
            })
        }

    }

    let i_name = 0
    let temp_offset = u32(offset + 8, is_little_endian) + offset_mid
    // console.log(end_offset, 'end', temp_offset, 'temp')

    while (temp_offset > end_offset) {

        let temp_string = ''

        temp_string = get_string(end_offset, 0, false)

        // console.log(temp_string, XFA)
        XFA[model_index].second_names.push(temp_string)
        end_offset += temp_string.length
        while (u8(end_offset) === 0) {
            end_offset++
        }
        end_offset++
        i_name++
    }

    // console.log()

}
