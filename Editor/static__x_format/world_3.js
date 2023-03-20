function load_world_3(offset, amount) {
    let html = '<table><tbody>'

    let temp_array = []

    for (let i = 0; i < amount; i++) {
        html += `<tr>
                    <td>${f32(offset + 32 + (i * 64), is_little_endian)} </td>
                    <td>${f32(offset + 36 + (i * 64), is_little_endian)}</td>
                    <td>${f32(offset + 40 + (i * 64), is_little_endian)}</td>
                    <td>F${f32(offset + 44 + (i * 64), is_little_endian)}</td>
                    <td>${u32(offset + 48 + (i * 64), is_little_endian)} </td>
                    <td>${u32(offset + 52 + (i * 64), is_little_endian)}</td>
                    <td>${u32(offset + 56 + (i * 64), is_little_endian)}</td>
                    <td>F${f32(offset + 60 + (i * 64), is_little_endian)}</td>
                </tr>`

        if (temp_array.includes(u32(offset + 48 + (i * 64), is_little_endian) + offset_mid)) {} else {
            temp_array.push(u32(offset + 48 + (i * 64), is_little_endian) + offset_mid)
        }

        // html += load_world_camera_1(u32(offset + 64 + (i * 96), is_little_endian) + offset_mid)
        // html += load_world_camera_2(u32(offset + 72 + (i * 96), is_little_endian) + offset_mid)

        // html += get_world_3_1(u32(offset + 48 + (i * 64), is_little_endian) + offset_mid)

    }

    for (let i = 0; i < temp_array.length; i++) {
        html += get_world_3_1(temp_array[i]) + offset_mid
    }
    html += '</tr></tbody></table>'

    document.getElementById("file_editor").innerHTML = html
}

function get_world_3_1(offset) {
    let html = ''
    html = `<br>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u16(offset + 8, is_little_endian)}, ${u16(offset + 10, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {

        html += get_world_3_1_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 16))
    }
    return html

}

function get_world_3_1_1(offset) {
    html = `<br>--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u16(offset + 8, is_little_endian)}, ${u16(offset + 10, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)}`

    html += get_world_3_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, u32(offset + 0, is_little_endian))

    return html

}

function get_world_3_1_1_1(offset, amount) {
    let html = `<br>--->--->--->`
    let html_2 =''

    for (let i = 0; i < amount; i++) {
        html += `${u32(offset + 0 + (i * 4), is_little_endian)} | `
        if (u32(offset + 0 + (i * 4), is_little_endian) != 0) {
            html_2 += get_world_3_1_1_1_1(u32(offset + 0 + (i * 4), is_little_endian) + offset_mid)
        }
    }
    return html + html_2

}

function get_world_3_1_1_1_1(offset) {
    let html;
    html = `<br>--->--->--->---> ${u32(offset + 0, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)}, ${u16(offset + 6, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html += get_world_3_1_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

    return html

}
function get_world_3_1_1_1_1_1(offset) {
    let html
    html = `<br>--->--->--->--->---> ${u32(offset + 0, is_little_endian)} | ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}`
    return html

}
