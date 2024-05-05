function load_world_x_world_gate(offset, amount) {
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
    for (let i = 0; i < amount; i++) {
        temp_offset = u32(offset + (i * 4)) + offset_mid
        html += `<tr>
        <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${temp_offset + 0}'  type='text' value='${u32(temp_offset + 0)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 12}'  type='text' value='${f32(temp_offset + 12).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 4}'  type='text' value='${f32(temp_offset + 4).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 8}'  type='text' value='${f32(temp_offset + 8).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 32}'  type='text' value='${f32(temp_offset + 32).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 40}'  type='text' value='${f32(temp_offset + 40).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 48}'  type='text' value='${f32(temp_offset + 48).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 56}'  type='text' value='${f32(temp_offset + 56).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 68}'  type='text' value='${f32(temp_offset + 68).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 72}'  type='text' value='${f32(temp_offset + 72).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 88}'  type='text' value='${f32(temp_offset + 88).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 92}'  type='text' value='${f32(temp_offset + 92).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${temp_offset + 96}'  type='text' value='${f32(temp_offset + 96).toFixed(2)}'></td>
        </tr>`

    }

    html += `</table>
        </tbody>
    </div>
</span>
`

    file_editor.innerHTML = html

    let input_field = text_field.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', update_input)
    }

}
