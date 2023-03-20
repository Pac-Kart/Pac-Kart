function load_world_x_collision(offset) {

    let html = `  
<table>
    <tbody>
        <tr>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 0}'  type='text' value='${f32(offset + 0, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 4}'  type='text' value='${f32(offset + 4, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 8}'  type='text' value='${f32(offset + 8, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 12}'  type='text' value='${f32(offset + 12, is_little_endian).toFixed(2)}'></td>
        </td>
        <tr>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 16}'  type='text' value='${f32(offset + 16, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 20}'  type='text' value='${f32(offset + 20, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 24}'  type='text' value='${f32(offset + 24, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 28}'  type='text' value='${f32(offset + 28, is_little_endian).toFixed(2)}'></td>
        </td>
        <tr>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 40}'  type='text' value='${f32(offset + 40, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 44}'  type='text' value='${f32(offset + 44, is_little_endian).toFixed(2)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${offset + 48}'  type='text' value='${f32(offset + 48, is_little_endian).toFixed(2)}'></td>
        </td>
        <tr>
        <td class='no_border'> grid: </td>
            <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${offset + 52}'  type='text' value='${u32(offset + 52, is_little_endian)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${offset + 56}'  type='text' value='${u32(offset + 56, is_little_endian)}'></td>
            <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${offset + 60}'  type='text' value='${u32(offset + 60, is_little_endian)}'></td>
        </td>
        <tr>
        <td class='no_border'> table 2: </td>
            <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${offset + 68}'  type='text' value='${u32(offset + 68, is_little_endian)}'></td>
    </tbody>
</table>
    <br> always[19]| ${u32(offset + 36, is_little_endian)} 
    <br>| ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} <br> table [1]| ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | ${u32(offset + 88, is_little_endian)} | ${u32(offset + 92, is_little_endian)}
        `

//     let grid_x = u32(offset + 52, is_little_endian)
//     let grid_y = u32(offset + 56, is_little_endian)
//     let grid_z = u32(offset + 60, is_little_endian)
//     let grid_offset = u32(offset + 64, is_little_endian) + offset_mid

//     html += `<br> ${grid_offset} grid<br><table><tbody><tr>`

//     for(let iii=0;iii <grid_z;iii++){
//     for (let ii = 0; ii < grid_y; ii++) {
//         for (let i = 0; i < grid_x; i++) {
//             html += `<td>${u32(grid_offset, is_little_endian)} </td>`
//             grid_offset += 4

//         }
//         html+='<br>'
//     }
//         html+='</tr><tr>'
// }
//     html+='</tbody></table>'
    table_2 = u32(offset + 32, is_little_endian) + offset_mid
    table_2_amount = u32(offset + 68, is_little_endian)

    html += get_table_2(table_2, table_2_amount)

    // for(let i =0;i <u32(offset + 68, is_little_endian);i++){
    //    table_3_start_offset = u32(table_2 +40+ (i*48), is_little_endian)
    //    table_3_start_amount = u32(table_2 + 44 + (i*48), is_little_endian)
    //     for(let ii=0;ii <table_3_start_amount;ii++){

    //     }
    // }

    document.getElementById("file_editor").innerHTML = html

    let input_field = document.getElementById("file_editor").getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', update_input)
    }

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

function get_table_2(offset, amount) {
    let html = ''
    // for (let i = 0; i < amount; i++) {

    //     html += `<br>---> ${u32(offset + 32 + (i * 48), is_little_endian)} | ${u32(offset + 36 + (i * 48), is_little_endian)} | ${u32(offset + 40 + (i * 48), is_little_endian)} | ${u32(offset + 44 + (i * 48), is_little_endian)} | [${offset + (i * 48)}]   `
    //     html += get_table_3(u32(offset + 40 + (i * 48), is_little_endian) + offset_mid, u32(offset + 44 + (i * 48), is_little_endian))
    // }

    return html

}

function get_table_3(offset, amount) {
    let html = ''

    // for (let i = 0; i < amount; i++) {
    //     html += `<br>--->--->  ${u32(offset + 0 + (i * 12), is_little_endian)} | ${u32(offset + 4 + (i * 12), is_little_endian)} | ${u32(offset + 8 + (i * 12), is_little_endian)} | [${offset + (i * 12)}]`
    //     html += get_table_3_data(u32(offset + 0 + (i * 12), is_little_endian) + offset_mid, u32(offset + 4 + (i * 12), is_little_endian))
    // }

    return html

}

function get_table_3_data(offset, amount) {
    let html = ''

    for (let i = 0; i < amount; i++) {
        html += `<br>--->--->---> ${f32(offset + 0 + (i * 32), is_little_endian)} | ${f32(offset + 4 + (i * 32), is_little_endian)}  | ${f32(offset + 8 + (i * 32), is_little_endian)}  | ${f32(offset + 12 + (i * 32), is_little_endian)} | ${u32(offset + 16 + (i * 32), is_little_endian)} | ${u16(offset + 20 + (i * 32), is_little_endian)} | ${u16(offset + 22 + (i * 32), is_little_endian)} |`
    }

    return html

}
