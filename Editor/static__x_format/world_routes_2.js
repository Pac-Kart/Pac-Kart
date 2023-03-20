function load_world_routes_2(offset) {
    let html = `<table id='world_route_table'>
                <tbody>
                    <thead>
                        <tr>
                            <th> index </th>
                            <th> prev 1 </th>
                            <th> prev 2 </th>
                            <th> prev 3 </th>
                            <th> prev 4 </th>
                            <th> float 1 </th>
                            <th> float 2 </th>
                            <th> float 3 </th>
                            <th> float 4 </th>
                            <th> next 1 </th>
                            <th> next 2 </th>
                            <th> next 3 </th>
                            <th> next 4 </th>
                        </tr>
                    </thead>`
    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        html += get_world_route_sub_list(u32(offset, is_little_endian) + offset_mid + (i * 128), i)
        console.log(u32(offset, is_little_endian) + offset_mid + (i * 128), i)
    }
    html += `</tbody>
        </table>`
    document.getElementById("file_editor").innerHTML = html

    for(let i =0; i <world_route_table.children[2].children.length;i++){
        world_route_table.children[2].children[i]
        for(let ii = 1;ii < 13;ii++){
        world_route_table.children[2].children[i].children[ii].children[0].addEventListener('change',update_input)
        }
        
    }

    

}

function get_world_route_sub_list(offset, index) {
    list_3_2_amount = u32(offset + 48, is_little_endian)
    list_1_amount = u32(offset + 60, is_little_endian)

    let html = `<tr><td class='no_border'>${index}</td>`
    html += get_world_route_list_3(u32(offset + 56, is_little_endian) + offset_mid, 'u32', list_3_2_amount)
    html += get_world_route_list_3(u32(offset + 52, is_little_endian) + offset_mid, 'float', list_3_2_amount)
    html += get_world_route_list_3(u32(offset + 64, is_little_endian) + offset_mid, 'u32', list_1_amount)
    html += "</tr>"
    return html
}

function get_world_route_list_3(offset, type, amount) {
    let html = ''

    for (let i = 0; i < 4; i++) {
        let value
        if (amount === 0) {

            value = 0
        } else if (type === "float") {
            value = f32(offset + (i * 4), is_little_endian)
            if (Number.isInteger(value) === false) {
                value = value.toFixed(2)
            }

        } else {
            value = u32(offset + (i * 4), is_little_endian)
        }
        if (amount <= i) {
            setting_disabled = 'disabled'
        } else {
            setting_disabled = ''
        }
        html += `<td class='no_border'> <input style='width:50px;'data-type='${type}' data-offset='${offset + (i*4)}'  type='text' ${setting_disabled} value='${value}'></td>`
    }

    return html

}

