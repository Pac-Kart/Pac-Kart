function load_world_camera(offset, amount) {
    console.log(offset, "cam")
    let html = '<table><tbody>'

    for (let i = 0; i < amount; i++) {
        html += `<tr>
                    <td>${u32(offset + 32 + (i * 96), is_little_endian)} </td>
                    <td>${u32(offset + 36 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 40 + (i * 96), is_little_endian)}</td>
                    <td>F${f32(offset + 44 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 48 + (i * 96), is_little_endian)} </td>
                    <td>${u32(offset + 52 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 56 + (i * 96), is_little_endian)}</td>
                    <td>F${f32(offset + 60 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 64 + (i * 96), is_little_endian)}</td>
                    <td>F${f32(offset + 68 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 72 + (i * 96), is_little_endian)}</td>
                    <td>[ ${u8(offset + 76 + (i * 96), is_little_endian)}, ${u8(offset + 77 + (i * 128), is_little_endian)}, ${u8(offset + 78 + (i * 128), is_little_endian)}, ${u8(offset + 79 + (i * 128), is_little_endian)} ]</td>
                    <td>F${f32(offset + 80 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 84 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 88 + (i * 96), is_little_endian)}</td>
                    <td>${u32(offset + 92 + (i * 96), is_little_endian)}</td>
                </tr>`

        html += load_world_camera_1(u32(offset + 64 + (i * 96), is_little_endian) + offset_mid)
        html += load_world_camera_2(u32(offset + 72 + (i * 96), is_little_endian) + offset_mid)

    }
    html += '</tr></tbody></table>'

    document.getElementById("file_editor").innerHTML = html
}
function load_world_camera_2(offset) {
    let html = `<br>---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  F${f32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | [ ${u8(offset + 64, is_little_endian)}, ${u8(offset + 65, is_little_endian)}, ${u8(offset + 66, is_little_endian)}, ${u8(offset + 67, is_little_endian)} ] | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)}`

    html += load_world_camera_2_1(u32(offset + 12, is_little_endian) + offset_mid)

    return html

}

function load_world_camera_2_1(offset) {
    let html = `<br>--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  F${f32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  F${f32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)}`

    html += load_world_camera_2_1_1(u32(offset + 28, is_little_endian) + offset_mid)
    html += load_world_camera_2_1_2(u32(offset + 44, is_little_endian) + offset_mid)

    return html

}

function load_world_camera_2_1_2(offset) {
    let html = `<br>--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} |  F${f32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  F${f32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | F${f32(offset + 68, is_little_endian)} | F${f32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | F${f32(offset + 88, is_little_endian)} | F${f32(offset + 92, is_little_endian)} | F${f32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | [ ${u8(offset + 104, is_little_endian)}, ${u8(offset + 105, is_little_endian)}, ${u8(offset + 106, is_little_endian)}, ${u8(offset + 107, is_little_endian)} ] | ${u32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)}`

    html += load_world_camera_2_1_2_1(u32(offset + 36, is_little_endian) + offset_mid)

    return html
}

function load_world_camera_2_1_2_1(offset) {
    let html = `<br>--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += load_world_camera_2_1_2_1_1(u32(offset + 4, is_little_endian) + offset_mid)

    return html

}
function load_world_camera_2_1_2_1_1(offset) {
    let html = `<br>--->--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function load_world_camera_2_1_1(offset) {
    let html = `<br>--->--->---> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += load_world_camera_2_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    html += load_world_camera_2_1_1_2(u32(offset + 8, is_little_endian) + offset_mid)
    html += load_world_camera_2_1_1_3(u32(offset + 12, is_little_endian) + offset_mid)
    return html

}

function load_world_camera_2_1_1_1(offset) {
    let html = `<br>--->--->---1---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}
function load_world_camera_2_1_1_2(offset) {
    let html = `<br>--->--->---2---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += load_world_camera_2_1_1_2_1(u32(offset + 0, is_little_endian) + offset_mid)
    return html

}

function load_world_camera_2_1_1_2_1(offset) {
    let html = `<br>--->--->---2--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += load_world_camera_2_1_1_2_1_1(u32(offset + 4, is_little_endian) + offset_mid)

    return html

}
function load_world_camera_2_1_1_2_1_1(offset) {
    let html = `<br>--->--->---2--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
function load_world_camera_2_1_1_3(offset) {
    let html = `<br>--->--->---3---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += load_world_camera_2_1_1_3_1(u32(offset + 0, is_little_endian) + offset_mid)
    return html

}

function load_world_camera_2_1_1_3_1(offset) {
    let html = `<br>--->--->---3--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += load_world_camera_2_1_1_3_1_1(u32(offset + 4, is_little_endian) + offset_mid)

    return html

}
function load_world_camera_2_1_1_3_1_1(offset) {
    let html = `<br>--->--->---3--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function load_world_camera_1(offset) {
    let html = `<br>--->${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${get_string(offset + 56, offset + 64)}  `

    html += load_world_camera_1_1(u32(offset + 24, is_little_endian) + offset_mid)
    html += load_world_camera_1_2(u32(offset + 28, is_little_endian) + offset_mid)

    for (let i = 0; i < u32(u32(offset + 24, is_little_endian) + offset_mid, is_little_endian); i++) {
        html += load_world_camera_1_3(u32(offset + 32, is_little_endian) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(offset + 40, is_little_endian); i++) {
        html += load_world_camera_1_4(u32(offset + 36, is_little_endian) + offset_mid + (i * (u32(offset + 48, is_little_endian) * 4)), u32(offset + 48, is_little_endian))
    }
    if (u32(offset + 44, is_little_endian) != 0) {
        html += load_world_camera_1_5(u32(offset + 44, is_little_endian) + offset_mid)
    }
    if (u32(offset + 52, is_little_endian) != 0) {
        html += load_world_camera_1_6(u32(offset + 52, is_little_endian) + offset_mid)

    }

    return html
}

function load_world_camera_1_1(offset) {
    let html = `<br>---1---> ${u32(offset + 0, is_little_endian)}`

    return html

}
function load_world_camera_1_2(offset) {
    let html = `<br>---2---> ${u16(offset + 0, is_little_endian)} | [ ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)},${u8(offset + 11, is_little_endian)},  ] `

    return html

}

function load_world_camera_1_3(offset) {
    let html = `<br>---3---> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | `

    return html

}
function load_world_camera_1_4(offset, i) {
    let html = `<br>---4--->`
    for (let ii = 0; ii < i; ii++) {
        html += ` F${f32(offset + (ii * 4), is_little_endian)} |`
    }

    return html

}
function load_world_camera_1_5(offset) {
    let html = `<br>---5---> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} |  F${f32(offset + 12, is_little_endian)}  `

    return html

}
function load_world_camera_1_6(offset) {
    let html = `<br>---6---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}  `

    html += '<br>---6---1---> '
    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        html += load_world_camera_1_6_1(u32(offset + 8, is_little_endian) + offset_mid + i)
    }
    html += '<br>---6---2---> '

    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
        html += load_world_camera_1_6_2(u32(offset + 12, is_little_endian) + offset_mid + i)
    }
    return html

}

function load_world_camera_1_6_1(offset) {
    let html = ` | ${u8(offset, is_little_endian)} `

    return html

}
function load_world_camera_1_6_2(offset) {
    let html = ` | ${u8(offset, is_little_endian)} `

    return html

}
