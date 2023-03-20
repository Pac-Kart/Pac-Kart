function load_world_object(offset, amount) {
    console.log(offset, "cam")
    let html = '<table><tbody>'

    sub_object_array = []
    for (let i = 0; i < amount; i++) {
        html += `<tr>
                    <td>${f32(offset + 32 + (i * 80), is_little_endian).toFixed(2)} </td>
                    <td>${f32(offset + 36 + (i * 80), is_little_endian).toFixed(2)}</td>
                    <td>${f32(offset + 40 + (i * 80), is_little_endian).toFixed(2)}</td>
                    <td>${f32(offset + 44 + (i * 80), is_little_endian)}</td>
                    <td>${u32(offset + 48 + (i * 80), is_little_endian)} </td>
                    <td>${u32(offset + 52 + (i * 80), is_little_endian)}</td>
                    <td>${u32(offset + 56 + (i * 80), is_little_endian)}</td>
                    <td>${f32(offset + 60 + (i * 80), is_little_endian)}</td>
                    <td>${u32(offset + 64 + (i * 80), is_little_endian)}</td>
                    <td>[ ${u8(offset + 68 + (i * 80), is_little_endian)}, ${u8(offset + 69 + (i * 128), is_little_endian)}, ${u8(offset + 70 + (i * 128), is_little_endian)}, ${u8(offset + 71 + (i * 128), is_little_endian)} ]</td>
                    <td>[ ${u8(offset + 72 + (i * 80), is_little_endian)}, ${u8(offset + 73 + (i * 128), is_little_endian)}, ${u8(offset + 74 + (i * 128), is_little_endian)}, ${u8(offset + 75 + (i * 128), is_little_endian)} ]</td>
                    <td>${u32(offset + 76 + (i * 80), is_little_endian)}</td>
                </tr>`

        if (sub_object_array.includes(u32(offset + 56 + (i * 80), is_little_endian))) {} else {
            sub_object_array.push(u32(offset + 56 + (i * 80), is_little_endian))
        }
        u32(offset + 64 + (i * 80), is_little_endian)
    }
    html += '</tr></tbody></table>'

    for (let i = 0; i < sub_object_array.length; i++) {
        html += get_sub_object(sub_object_array[i] + offset_mid, i)
    }

    document.getElementById("file_editor").innerHTML = html

}

function get_sub_object(offset, i) {
    let html = ''

    html += `<br>object ${i} ---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)} ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} |  F${f32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} |  F${f32(offset + 40, is_little_endian)} |  F${f32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  F${f32(offset + 52, is_little_endian)} | [ ${u8(offset + 56, is_little_endian)}, ${u8(offset + 57, is_little_endian)}, ${u8(offset + 58, is_little_endian)}, ${u8(offset + 59, is_little_endian)} ] |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  F${f32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} | [ ${u8(offset + 84, is_little_endian)}, ${u8(offset + 85, is_little_endian)}, ${u8(offset + 86, is_little_endian)}, ${u8(offset + 87, is_little_endian)} ] |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  F${f32(offset + 104, is_little_endian)} | [ ${u8(offset + 108, is_little_endian)}, ${u8(offset + 109, is_little_endian)}, ${u8(offset + 110, is_little_endian)}, ${u8(offset + 111, is_little_endian)} ] `

    if (u8(offset + 8, is_little_endian) != 0) {
        html += get_sub_object_1(u32(offset + 12, is_little_endian) + offset_mid)
    }
    if (u32(offset + 16, is_little_endian) != 0) {//2
    }

    html += get_sub_object_3(u32(offset + 32, is_little_endian) + offset_mid)
    return html
}

function get_sub_object_3(offset) {
    let html = ''

    html += `<br>3--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    if (u32(offset, is_little_endian) == 0) {// nothing ?
    } else if (u32(offset, is_little_endian) == 1) {
        html += get_sub_object_3(u32(offset + 4, is_little_endian) + offset_mid)
        if (u32(offset, is_little_endian) === 1) {
            html += get_sub_object_3(u32(offset + 12, is_little_endian) + offset_mid)
        }
    }
    return html

}

function get_sub_object_3_optional_1(offset) {
    let html = ''

    return html

}

function get_sub_object_1(offset) {
    let html = ''

    html += `<br>1--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)} ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} |  F${f32(offset + 28, is_little_endian)}`

    html += get_sub_object_1_1(u32(offset + 16, is_little_endian) + offset_mid)
    return html

}

function get_sub_object_1_1(offset) {
    let html = ''

    html += `<br>1--->--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ]  |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
