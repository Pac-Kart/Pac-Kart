function load_collision() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }
    document.getElementById("outer_program").innerHTML = `wip`
    // ${u32(offset_mid + 192, is_little_endian) + offset_mid}`

    // offset_2table = u32(offset_mid + 192, is_little_endian) + offset_mid + 48
    // // table 2
    // amount_2table = u32(offset_mid + 228, is_little_endian) - 1

    // html_to_obj = ""

    // for (i_2table = 0; (i_2table / 48) < amount_2table; i_2table += 48) {
    //     // html_to_obj += `v  ${f32(offset_2table + i_2table + 0, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 4, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 8, is_little_endian).toFixed(6)} # ${(i_2table / 48)} <br>v ${f32(offset_2table + i_2table + 16, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 20, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 24, is_little_endian).toFixed(6)} <br>`
    //     amount_end_table3 = u32(offset_2table + i_2table + 32, is_little_endian)
    //     offset_end_table3 = u32(offset_2table + i_2table + 36, is_little_endian) + offset_mid
    //     offset_header_table3 = u32(offset_2table + i_2table + 40, is_little_endian) + offset_mid
    //     amount_header_table3 = u32(offset_2table + i_2table + 44, is_little_endian)

    //     for (amount_header_table3_i = 0; amount_header_table3_i < amount_header_table3; amount_header_table3_i++) {
    //         collision_table_3_data_offset = u32(offset_header_table3 + (amount_header_table3_i * 12), is_little_endian) + offset_mid
    //         collision_table_3_data_amount = u32(offset_header_table3 + (amount_header_table3_i * 12) + 4, is_little_endian)
    //         collision_table_3_data_unknown = u32(offset_header_table3 + (amount_header_table3_i * 12) + 8, is_little_endian)

    //         for (amount_data_table3_i = 0; amount_data_table3_i < collision_table_3_data_amount; amount_data_table3_i++) {
    //             temp_w = f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 12, is_little_endian)
    //             html_to_obj += `v  ${f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 0, is_little_endian) * temp_w} ${f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 4, is_little_endian) * temp_w} ${f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 8, is_little_endian) * temp_w} <br>
    //     `
    //             // table_3_line_1 = u16(collision_table_3_data_offset + ((amount_data_table3_i) * 32) + 20, is_little_endian)
    //             // table_3_line_2 = u16(collision_table_3_data_offset + ((amount_data_table3_i) * 32) + 22, is_little_endian)
    //             // if(table_3_line_1 == 65535){table_3_line_1 = ""}
    //             // if(table_3_line_2 == 65535){table_3_line_2 = ""}

    //             // html_to_obj_line+= `l ${(amount_data_table3_i+1)} ${(table_3_line_1)} ${(table_3_line_2)}<br>`

    //         }

    //     }

    // }
    // // html_to_obj += "<br>"
    // // for (i_2table = 0; (i_2table / 2) < amount_2table; i_2table += 2) {// html_to_obj += `l ${(i_2table+1)} ${(i_2table+2)}<br>`
    // // }

    // // html_to_obj_line = ""

    // //2275440 = collision

    // document.getElementById("outer_program").innerHTML = html_to_obj

}
