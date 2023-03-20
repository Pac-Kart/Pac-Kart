function load_world_x_world_gate(offset, amount) {
    // global_array = ''
    // let html = ''
    // for (let i = 0; i < amount; i++) {
    //     html += `<br> ${u32(offset + (i * 4), is_little_endian)}`
    //     html += load_world_x_world_gate_1(u32(offset + (i * 4), is_little_endian) + offset_mid)
    // }

    // // html += load_world_x_world_weird_1(u32(offset + 16, is_little_endian)+offset_mid)
    // // html += load_world_x_world_weird_1(u32(offset + 20, is_little_endian)+offset_mid)
    let html = `<div id='text_field' style='height:100%;overflow-y:auto;'>
                        <table>
                            <thead>
                                <tr>
                                    <th> index </th>
                                    <th> speed </th>
                                    <th> ?1 </th>
                                    <th> ?2 </th>
                                    <th> ?3 </th>
                                    <th> ?4 </th>
                                    <th> ?5 </th>
                                    <th> ?6 </th>
                                    <th> ?7 </th>
                                    <th> ?8 </th>
                                    <th> ?9 </th>
                                    <th> ?10 </th>
                                    <th> ?11 </th>
                                </tr>
                            </thead>
                            <tbody>
`

    let temp_offset = 0
    console.log(offset,amount)
    for (let i = 0; i < amount; i++) {
        temp_offset = u32(offset + (i * 4), is_little_endian) + offset_mid
        html += `<tr>
        <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${temp_offset + 0}'  type='text' value='${u32(temp_offset + 0,is_little_endian)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 12}'  type='text' value='${f32(temp_offset + 12,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 4}'  type='text' value='${f32(temp_offset + 4,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 8}'  type='text' value='${f32(temp_offset + 8,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 32}'  type='text' value='${f32(temp_offset + 32,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 40}'  type='text' value='${f32(temp_offset + 40,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 48}'  type='text' value='${f32(temp_offset + 48,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 56}'  type='text' value='${f32(temp_offset + 56,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 68}'  type='text' value='${f32(temp_offset + 68,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 72}'  type='text' value='${f32(temp_offset + 72,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 88}'  type='text' value='${f32(temp_offset + 88,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 92}'  type='text' value='${f32(temp_offset + 92,is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 96}'  type='text' value='${f32(temp_offset + 96,is_little_endian).toFixed(2)}'></td>
        </tr>`

    }

    html += `</table>
        </tbody>
    </div>
</span>
`

    document.getElementById("file_editor").innerHTML = html

    let input_field = text_field.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', update_input)
    }

}

// function load_world_x_world_gate_1(offset) {
//     let html = ''
//     if (u8(offset + 17, is_little_endian) == 0) {
        // html = `<br>--->[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} |  F${f32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  F${f32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | F${f32(offset + 68, is_little_endian)} | F${f32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | F${f32(offset + 88, is_little_endian)} | F${f32(offset + 92, is_little_endian)} | F${f32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | [ ${u8(offset + 104, is_little_endian)}, ${u8(offset + 105, is_little_endian)}, ${u8(offset + 106, is_little_endian)}, ${u8(offset + 107, is_little_endian)} ] | ${u32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)}`
//     } else {
//         html = `<br>--->[ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  F${f32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | F${f32(offset + 68, is_little_endian)} | F${f32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | F${f32(offset + 88, is_little_endian)} | F${f32(offset + 92, is_little_endian)} | F${f32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | [ ${u8(offset + 104, is_little_endian)}, ${u8(offset + 105, is_little_endian)}, ${u8(offset + 106, is_little_endian)}, ${u8(offset + 107, is_little_endian)} ] | ${u32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)}`
//         if (u32(offset + 24, is_little_endian) != 0) {
//             html += load_world_x_world_material_1_1(u32(offset + 24, is_little_endian) + offset_mid)
//         }
//         if (u32(offset + 28, is_little_endian) != 0) {
//             html += load_world_x_world_material_1_2(u32(offset + 28, is_little_endian) + offset_mid)
//         }

//     }

//     if (u32(offset + 36, is_little_endian) != 0) {
//         html += load_world_x_world_material_1_2(u32(offset + 36, is_little_endian) + offset_mid)
//     }
//     if (u32(offset + 76, is_little_endian) != 0) {
//         console.log(u32(offset + 76, is_little_endian))
//         html += load_world_x_world_material_1_3(u32(offset + 76, is_little_endian) + offset_mid)
//     }

//     return html
// }

// function load_world_x_world_material_1_1(offset) {
//     let html = `<br>--->--1> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}`

//     return html
// }

// function load_world_x_world_material_1_2(offset) {
//     let html = `<br>--->--2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     html += load_world_x_world_material_1_2_1(u32(offset + 4, is_little_endian) + offset_mid)

//     return html
// }
// function load_world_x_world_material_1_2_1(offset) {
//     let html = `<br>--->--2>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     html += load_world_x_world_material_1_2_1_1(u32(offset + 4, is_little_endian) + offset_mid)
//     html += load_world_x_world_material_1_2_1_2(u32(offset + 8, is_little_endian) + offset_mid)

//     return html
// }

// function load_world_x_world_material_1_2_1_1(offset) {
//     let html = `<br>--->--2>--->--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)}`

//     html += load_world_x_world_material_1_2_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)
//     html += load_world_x_world_material_1_2_1_1_2(u32(offset + 24, is_little_endian) + offset_mid)

//     return html
// }

// function load_world_x_world_material_1_2_1_1_1(offset) {
//     let html = `<br>--->--2>--->--1>--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)}`

//     html += load_world_x_world_material_1_2_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)

//     html += load_world_x_world_material_1_2_1_1_1_2(u32(offset + 44, is_little_endian) + offset_mid)

//     if (u32(offset + 52, is_little_endian) != 0) {
//         html += load_world_x_world_material_1_2_1_1_1_3(u32(offset + 52, is_little_endian) + offset_mid)
//     }
//     if (u32(offset + 56, is_little_endian) != 0) {
//         html += load_world_x_world_material_1_2_1_1_1_4(u32(offset + 56, is_little_endian) + offset_mid)
//     }
//     if (u32(offset + 64, is_little_endian) != 0) {
//         html += load_world_x_world_material_1_2_1_1_1_5(u32(offset + 64, is_little_endian) + offset_mid)
//     }

//     return html
// }

// function load_world_x_world_material_1_2_1_1_1_1(offset) {
//     let html = `<br>--->--2>--->--1>--1>--1> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ] `

//     return html

// }

// function load_world_x_world_material_1_2_1_1_1_2(offset) {
//     let html = `<br>--->--2>--->--1>--1>--2> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

//     return html
// }
// function load_world_x_world_material_1_2_1_1_1_3(offset) {
//     let html = `<br>--->--2>--->--1>--1>--3> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

//     return html
// }
// function load_world_x_world_material_1_2_1_1_1_4(offset) {
//     let html = `<br>--->--2>--->--1>--1>--4> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

//     return html
// }
// function load_world_x_world_material_1_2_1_1_1_5(offset) {
//     let html = `<br>--->--2>--->--1>--1>--5> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

//     html += load_world_x_world_material_1_2_1_1_1_5_1(u32(offset + 4, is_little_endian) + offset_mid)

//     return html
// }

// function load_world_x_world_material_1_2_1_1_1_5_1(offset) {
//     let html = `<br>--->--2>--->--1>--1>--5>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

//     return html

// }

// function load_world_x_world_material_1_2_1_1_2(offset) {
//     let html = `<br>--->--2>--->--1>--2> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ] | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

//     return html

// }

// function load_world_x_world_material_1_2_1_2(offset) {
//     let html = `<br>--->--2>--->--2> ${u32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

//     html += load_world_x_world_material_1_2_1_2_1(u32(offset + 48, is_little_endian) + offset_mid)
//     return html
// }

// function load_world_x_world_material_1_2_1_2_1(offset) {
//     let html = `<br>--->--2>--->--2>---> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

//     return html

// }

// function load_world_x_world_material_1_3(offset) {
//     let html = `<br>--->--3> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

//     html += load_world_x_world_material_1_3_1(u32(offset + 8, is_little_endian) + offset_mid)
//     return html
// }
// function load_world_x_world_material_1_3_1(offset) {
//     let html = `<br>--->--3>---> ${u32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)}(model) | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | [ ${u8(offset + 80, is_little_endian)}, ${u8(offset + 81, is_little_endian)}, ${u8(offset + 82, is_little_endian)}, ${u8(offset + 83, is_little_endian)} ] | ${u32(offset + 84, is_little_endian)} | ${u32(offset + 88, is_little_endian)} | ${u32(offset + 92, is_little_endian)}`

//    html+= load_world_x_world_material_1_3_1_1(u32(offset + 28, is_little_endian)+offset_mid)
//     return html
// }

// function load_world_x_world_material_1_3_1_1(offset) {
//     let html = `<br>--->--3>--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}  | F${f32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}(link back to start) | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} `

//     html+=load_world_x_world_material_1_3_1_1_1(u32(offset + 28, is_little_endian)+offset_mid)
//     return html

// }

// function load_world_x_world_material_1_3_1_1_1(offset) {
//     let html = `<br>--->--3>--->--->---> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

//    // html+= load_world_x_world_material_1_3_1_1_1_1(u32(offset + 4, is_little_endian)+offset_mid)
//    //  html+=load_world_x_world_material_1_3_1_1_1_2(u32(offset + 8, is_little_endian)+offset_mid)
    
//     return html

// }
// function load_world_x_world_material_1_3_1_1_1_1(offset) {
//     let html = `<br>--->--3>--->--->--->--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)} `

    
//     return html

// }function load_world_x_world_material_1_3_1_1_1_2(offset) {
//     let html = `<br>--->--3>--->--->--->--2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

//    html+= load_world_x_world_material_1_3_1_1_1_2_1(u32(offset + 0, is_little_endian)+offset_mid)
//    html+= load_world_x_world_material_1_3_1_1_1_2_2(u32(offset + 8, is_little_endian)+offset_mid)
    
//     return html

// }

// function load_world_x_world_material_1_3_1_1_1_2_1(offset) {
//      let html = `<br>--->--3>--->--->--->--2>--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

//     html+=load_world_x_world_material_1_3_1_1_1_2_1_1(u32(offset + 4, is_little_endian)+offset_mid)
//     return html
   
// }

// function load_world_x_world_material_1_3_1_1_1_2_1_1(offset) {
//          let html = `<br>--->--3>--->--->--->--2>--1>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

//     return html

// }

// function load_world_x_world_material_1_3_1_1_1_2_2(offset) {
//          let html = `<br>--->--3>--->--->--->--2>--2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

//     return html
    
// }