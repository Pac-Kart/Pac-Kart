function load_logic(offset, offset_mid_, file_type) {
    let html = ''
    offset_mid = offset_mid_
    console.log(file_type, offset_mid_)
    if (file_type === 'link' && fileextension != 'xdx') {
        // xdx is 64 bytes
        html = ''
        html += `<br> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} | [ ${u16(offset + 52, is_little_endian)}, ${u8(offset + 54, is_little_endian)}, ${u8(offset + 55, is_little_endian)} ] |  [ ${u16(offset + 56, is_little_endian)}, ${u8(offset + 58, is_little_endian)}, ${u8(offset + 59, is_little_endian)} ] |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)}`

        html += get_link_1(u32(offset, is_little_endian) + offset_mid)
        html +=get_link_2(u32(offset+8, is_little_endian) + offset_mid)

        if (u32(offset + 48, is_little_endian) != 0) {
            html += get_link_8(u32(offset + 48, is_little_endian) + offset_mid)
        }
    } else if(file_type === 'world') {
        html = ''
        html += `<br> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} | [ ${u16(offset + 16, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | [ ${u16(offset + 20, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | [ ${u16(offset + 24, is_little_endian)}, ${u8(offset + 26, is_little_endian)}, ${u8(offset + 27, is_little_endian)} ] |  F${f32(offset + 28, is_little_endian)} |  F${f32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  F${f32(offset + 40, is_little_endian)} |  F${f32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  F${f32(offset + 104, is_little_endian)} |  F${f32(offset + 108, is_little_endian)} |  F${f32(offset + 112, is_little_endian)} |  F${f32(offset + 116, is_little_endian)} |  F${f32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  | [ ${u16(offset + 136, is_little_endian)}, ${u8(offset + 138, is_little_endian)}, ${u8(offset + 139, is_little_endian)} ] |  F${f32(offset + 140, is_little_endian)}  |  F${f32(offset + 144, is_little_endian)}  | F${f32(offset + 148, is_little_endian)}  |  F${f32(offset + 152, is_little_endian)}  |  F${f32(offset + 156, is_little_endian)}  |  F${f32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)} | ${u32(offset + 176, is_little_endian)} | ${u32(offset + 180, is_little_endian)} | ${u32(offset + 184, is_little_endian)} | ${u32(offset + 188, is_little_endian)} | ${u32(offset + 192, is_little_endian)} | ${u32(offset + 196, is_little_endian)} | ${u32(offset + 200, is_little_endian)} | ${u32(offset + 204, is_little_endian)}`

        for (let i = 0; i < u32(offset, is_little_endian); i++) {
            html += get_world_light(u32(offset + 4, is_little_endian) + offset_mid + (i * 64), i)
        }

        html += get_world_offset_section(offset_mid + u32(offset + 192, is_little_endian))
        html += get_world_offset_unknown(offset_mid + u32(offset + 196, is_little_endian))
    }
    document.getElementById("file_editor").innerHTML = html

}

function get_link_8(offset) {
    html = ''

    html += `<br>8---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_8_1(u32(offset + 8, is_little_endian) + offset_mid)

    return html

}

function get_link_8_1(offset) {
    html = ''

    html += `<br>8--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_link_8_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32), i)
    }

    return html

}
function get_link_8_1_1(offset, i) {
    html = ''

    html += `<br>8--->---${i}---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    // for(let i =0; i <u32(offset, is_little_endian);i++){
    //      html+=   get_link_8_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    // }

    return html

}

function get_link_2(offset) {
    html = ''
    html += `<br>2---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |`
    html += get_link_2_1(u32(offset + 12, is_little_endian) + offset_mid)
    return html

}

function get_link_2_1(offset) {
    html = ''
    html += `<br>2--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_2_1_1(u32(offset + 0, is_little_endian) + offset_mid)
    return html

}

function get_link_2_1_1(offset) {
    html = ''
    html += `<br>2--->---> ${get_string(offset, offset + 16)} `
    return html

}

function get_link_1(offset) {
    html = ''
    html += `<br>---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    return html
}

function get_link_1_1(offset) {
    html = ''
    html += `<br>--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_1_1_1(u32(offset + 0, is_little_endian) + offset_mid)
    return html

}

function get_link_1_1_1(offset) {
    html = ''
    html += `<br>--->--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`
    html += get_link_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    return html

}

function get_link_1_1_1_1(offset) {
    html = ''
    html += `<br>--->--->--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    return html

}
function get_world_light(offset, i) {
    let html = ''

    html += `<br>${i}L---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} |  F${f32(offset + 28, is_little_endian)} |  [ ${u8(offset + 32, is_little_endian)}, ${u8(offset + 33, is_little_endian)}, ${u8(offset + 34, is_little_endian)}, ${u8(offset + 35, is_little_endian)} ] |  F${f32(offset + 36, is_little_endian)} |  F${f32(offset + 40, is_little_endian)} |  F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} |  F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | F${f32(offset + 60, is_little_endian)}`
    return html

}
function get_world_offset_unknown(offset) {
    let html = ''

    html += `<br>2---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html += get_world_offset_unknown_1(u32(offset + 4, is_little_endian) + offset_mid, 1)
    html += get_world_offset_unknown_1(u32(offset + 8, is_little_endian) + offset_mid, 2)
    html += get_world_offset_unknown_1(u32(offset + 12, is_little_endian) + offset_mid, 3)
    html += get_world_offset_unknown_1(u32(offset + 16, is_little_endian) + offset_mid, 4)
    return html

}

function get_world_offset_unknown_1(offset, i) {
    let html = ''

    html += `<br>2---${i}--->  ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    // html +=get_world_offset_unknown_1(u32(offset + 4, is_little_endian)+offset_mid)
    return html

}

function get_world_offset_section(offset) {
    let html = ''

    html += `<br>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | [ ${u16(offset + 20, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`
    // html +=_get_80byteblock(u32(offset + 0, is_little_endian) + offset_mid)
    // html +=_get_80byteblock(u32(offset + 4, is_little_endian) + offset_mid)
    html += get_world_offset_section_3(u32(offset + 12, is_little_endian) + offset_mid)
    html += get_world_offset_section_4(u32(offset + 16, is_little_endian) + offset_mid)

    html += get_world_offset_section_5(u32(offset + 24, is_little_endian) + offset_mid)
    html += get_world_offset_section_6(u32(offset + 28, is_little_endian) + offset_mid)
    html += get_world_offset_section_7(u32(offset + 32, is_little_endian) + offset_mid)

    for (let i = 0; i < u32(offset + 36, is_little_endian); i++) {
        html += get_world_offset_section_8(u32(offset + 40, is_little_endian) + offset_mid + (i * 8))
    }
    return html

}
function get_world_offset_section_3(offset) {
    let html = ''

    html += `<br>---3---> ${get_string(offset, offset + 16)}`
    return html

}
function get_world_offset_section_4(offset) {
    let html = ''

    html += `<br>---4---> ${get_string(offset, offset + 16)}`
    return html

}
function get_world_offset_section_5(offset) {
    let html = ''

    html += `<br>---5---> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} -> always 176 ?`

    html += get_world_offset_section_5_1(u32(offset + 0, is_little_endian) + offset_mid)
    // always 176 ?
    return html

}

function get_world_offset_section_5_1(offset) {
    let html = ''

    html += `<br>---5---1---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  ${u32(offset + 104, is_little_endian)} |  ${u32(offset + 108, is_little_endian)} |  ${u32(offset + 112, is_little_endian)} |  ${u32(offset + 116, is_little_endian)} |  ${u32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  |  ${u32(offset + 136, is_little_endian)}  |  ${u32(offset + 140, is_little_endian)}  |  ${u32(offset + 144, is_little_endian)}  |  ${u32(offset + 148, is_little_endian)}  |  ${u32(offset + 152, is_little_endian)}  |  ${u32(offset + 156, is_little_endian)}  |  ${u32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)}`
    return html

}
function get_world_offset_section_6(offset) {
    let html = ''

    html += `<br>---6---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} -> always 176 ?`

    html += get_world_offset_section_6_1(u32(offset + 0, is_little_endian) + offset_mid)
    // always 176 ?
    return html

}

function get_world_offset_section_6_1(offset) {
    let html = ''

    html += `<br>---6---1---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  ${u32(offset + 104, is_little_endian)} |  ${u32(offset + 108, is_little_endian)} |  ${u32(offset + 112, is_little_endian)} |  ${u32(offset + 116, is_little_endian)} |  ${u32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  |  ${u32(offset + 136, is_little_endian)}  |  ${u32(offset + 140, is_little_endian)}  |  ${u32(offset + 144, is_little_endian)}  |  ${u32(offset + 148, is_little_endian)}  |  ${u32(offset + 152, is_little_endian)}  |  ${u32(offset + 156, is_little_endian)}  |  ${u32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)}`
    return html

}
function get_world_offset_section_7(offset) {
    let html = ''

    html += `<br>---7---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} -> always 176 ?`

    html += get_world_offset_section_7_1(u32(offset + 0, is_little_endian) + offset_mid)
    // always 176 ?
    return html

}

function get_world_offset_section_7_1(offset) {
    let html = ''

    html += `<br>---7---1---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  ${u32(offset + 104, is_little_endian)} |  ${u32(offset + 108, is_little_endian)} |  ${u32(offset + 112, is_little_endian)} |  ${u32(offset + 116, is_little_endian)} |  ${u32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  |  ${u32(offset + 136, is_little_endian)}  |  ${u32(offset + 140, is_little_endian)}  |  ${u32(offset + 144, is_little_endian)}  |  ${u32(offset + 148, is_little_endian)}  |  ${u32(offset + 152, is_little_endian)}  |  ${u32(offset + 156, is_little_endian)}  |  ${u32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)}`
    return html

}

function get_world_offset_section_8(offset) {
    let html = ''

    html += `<br>---8---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`

    html += get_world_offset_section_8_1(u32(offset + 0, is_little_endian) + offset_mid)
    // always 176 ?
    return html

}

function get_world_offset_section_8_1(offset) {
    let html = ''

    html += `<br>---8--->--->${get_string(offset, offset + 16)}`
    return html

}

//         document.getElementById("file_editor").innerHTML = "<a>" + get_80byteblock(offset) + "</a>"

//     //get logic offset
//     // if (file_type === "interface") {
//     //     temp = u32(offset_mid + 4, is_little_endian) + offset_mid
//     //     offset_logic = u32(temp, is_little_endian) + offset_mid

//     //     document.getElementById("outer_program").innerHTML = "<a>" + get_80byteblock(offset_logic) + "</a>"
//     // }
//     // if (file_type === "car") {
//     //     temp = u32(offset_mid + 4, is_little_endian) + offset_mid
//     //     offset_logic = u32(temp, is_little_endian) + offset_mid

//     //     document.getElementById("outer_program").innerHTML = "<a>" + get_16byteblock(offset_logic) + "</a>"
//     // }

// }

// function get_16byteblock(offset) {
//     let html = ''

//     html += `${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | `

//     html += get_16byteblock_1(u32(offset, is_little_endian) + offset_mid)

//     return html

// }

// function get_16byteblock_1(offset) {
//     let html = ''

//     html += `<br>--->  ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} | [ ${u8(offset + 36, is_little_endian)}, ${u8(offset + 37, is_little_endian)}, ${u8(offset + 38, is_little_endian)}, ${u8(offset + 39, is_little_endian)} ] |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} | [ ${u8(offset + 48, is_little_endian)}, ${u8(offset + 49, is_little_endian)}, ${u8(offset + 50, is_little_endian)}, ${u8(offset + 51, is_little_endian)} ] | [ ${u8(offset + 52, is_little_endian)}, ${u8(offset + 53, is_little_endian)}, ${u8(offset + 54, is_little_endian)}, ${u8(offset + 55, is_little_endian)} ] |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} | [ ${u8(offset + 92, is_little_endian)}, ${u8(offset + 93, is_little_endian)}, ${u8(offset + 94, is_little_endian)}, ${u8(offset + 95, is_little_endian)} ] |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  ${u32(offset + 104, is_little_endian)} |  ${u32(offset + 108, is_little_endian)} |  ${u32(offset + 112, is_little_endian)} | [ ${u8(offset + 116, is_little_endian)}, ${u8(offset + 117, is_little_endian)}, ${u8(offset + 118, is_little_endian)}, ${u8(offset + 119, is_little_endian)} ] | ${u32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  |  ${u32(offset + 136, is_little_endian)}  |  ${u32(offset + 140, is_little_endian)}  |  ${u32(offset + 144, is_little_endian)}  |  ${u32(offset + 148, is_little_endian)}  |  ${u32(offset + 152, is_little_endian)}  |  ${u32(offset + 156, is_little_endian)}  |  ${u32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)}  |  ${u32(offset + 176, is_little_endian)}  |  ${u32(offset + 180, is_little_endian)}  |  ${u32(offset + 184, is_little_endian)}  |  ${u32(offset + 188, is_little_endian)}  |  ${u32(offset + 192, is_little_endian)}  |  ${u32(offset + 196, is_little_endian)}  |  ${u32(offset + 200, is_little_endian)}  |  ${u32(offset + 204, is_little_endian)}  |  ${u32(offset + 208, is_little_endian)}  |  ${u32(offset + 212, is_little_endian)}  |  ${u32(offset + 216, is_little_endian)}  |  ${u32(offset + 220, is_little_endian)}  |  ${u32(offset + 224, is_little_endian)}  |  ${u32(offset + 228, is_little_endian)}  |  ${u32(offset + 232, is_little_endian)}  |  ${u32(offset + 236, is_little_endian)}`

//     html += get_16byteblock_1_1(u32(offset + 176, is_little_endian) + offset_mid)

//     html += get_16byteblock_1_2(u32(offset + 180, is_little_endian) + offset_mid)

//     return html

// }

// function get_16byteblock_1_2(offset) {
//     let html = ''

//     html += `<br>---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//     html += get_16byteblock_1_2_1(u32(offset, is_little_endian) + offset_mid)

//     return html

// }

// function get_16byteblock_1_2_1(offset) {
//     let html = ''

//     html += `<br>---2---1--->  F${f32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//     html += get_16byteblock_1_2_1_1(u32(offset + 8, is_little_endian) + offset_mid)

//     html += get_16byteblock_1_2_1_2(u32(offset + 16, is_little_endian) + offset_mid)

//     return html

// }

// function get_16byteblock_1_2_1_2(offset) {
//     let html = ''

//     html += `<br>---2---1---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//     return html
// }

// function get_16byteblock_1_2_1_1(offset) {
//     let html = ''

//     html += `<br>---2---1---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

//     return html

// }

// function get_16byteblock_1_1(offset) {
//     let html = ''

//     html += `<br>---1--->  ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)}`

//     for (let i = 0; i < u32(offset, is_little_endian); i++) {
//         html += get_16byteblock_1_1_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 32))
//     }

//     return html

// }

// function get_16byteblock_1_1_1(offset) {
//     let html = ''

//     html += `<br>---1--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] |  F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | [ ${u8(offset + 20, is_little_endian)}, ${u8(offset + 21, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | [ ${u8(offset + 24, is_little_endian)}, ${u8(offset + 25, is_little_endian)}, ${u8(offset + 26, is_little_endian)}, ${u8(offset + 27, is_little_endian)} ] | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ]`

//     return html

// }

// /////car

// function _get_80byteblock(offset) {
//     let logichtml = `[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ]`

//     let settings_header = u32(offset + 4, is_little_endian) + offset_mid
//     get_settings_header(settings_header, logichtml)
//     let value_8 = u32(offset + 8, is_little_endian)
//     let value_12 = u32(offset + 12, is_little_endian) + offset_mid

//     value_12html = ''
//     // for (i = 0,
//     // value_12html = ''; i < value_8; i++) {
//     //     value_12html += get_settings_header_2(value_12 + (i * 28))
//     // }

//     let value_16 = u32(offset + 16, is_little_endian)
//     let value_20 = u32(offset + 20, is_little_endian)
//     let value_24 = u32(offset + 24, is_little_endian)
//     let value_28 = u32(offset + 28, is_little_endian)
//     // offset sometimes
//     value_28html = ''
//     // if ((value_28) !== 0) {
//     //     for (i = 0; i < 1; i++) {
//     //         value_28html += get_settings_header_3(value_28 + offset_mid)
//     //     }
//     //     value_28 += value_28html
//     // } else {}

//     let value_32 = u32(offset + 32, is_little_endian)

//     let value_36 = u32(offset + 36, is_little_endian)
//     let value_40 = u32(offset + 40, is_little_endian)

//     // if (value_40 !== 0) {
//     //     value_40 += get_settings_header_4(value_40 + offset_mid)
//     // }
//     let value_44 = u32(offset + 44, is_little_endian)
//     let value_48 = u32(offset + 48, is_little_endian)

//     // value_48 += get_settings_header_5(value_48 + offset_mid)

//     let value_52 = u32(offset + 52, is_little_endian)
//     let value_56 = u32(offset + 56, is_little_endian)

//     // value_56 += get_settings_header_6(value_56 + offset_mid)
//     let value_60 = f32(offset + 60, is_little_endian)
//     let value_64 = u32(offset + 64, is_little_endian)
//     let value_68 = u32(offset + 68, is_little_endian)
//     let value_72 = u32(offset + 72, is_little_endian)
//     let value_76 = u32(offset + 76, is_little_endian)

//     value_72_hmtl = ''
//     recursive_array = [55]
//     for (let i = 0; i < value_68; i++) {
//         value_72_hmtl += get_LAYER_byte_block(value_72 + offset_mid + (i * 100))
//     }

//     return get_settings_header(settings_header, logichtml) + `<br> ${value_8 + value_12html} <br> ${value_16} <br> ${value_20} <br> ${value_24} <br> ${value_28}  <br> ${value_32} <br> ${value_36} <br> ${value_40}  <br> ${value_44} <br> ${value_48} <br> ${value_52} <br> ${value_56} <br> ${value_60}  <br> ${value_64} <br><span class='known' title='amount in layer'> ${value_68}</span>  <br> <span class='known' title='offset to layer'>${value_72}</span> ${value_72_hmtl} <br> ${value_76}`
// }

// function get_settings_header_2(offset) {
//     let html = `<br>--->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)}`
//     if (u32(offset + 4, is_little_endian) !== 0) {
//         html += get_settings_header_2_inner(u32(offset + 4, is_little_endian) + offset_mid)
//     }
//     let offset_2amount = u32(offset + 12, is_little_endian)
//     let offset_2offset = u32(offset + 16, is_little_endian) + offset_mid

//     for (let i = 0; i < offset_2amount; i++) {
//         html += get_settings_header_2_inner_2(offset_2offset + (i * 28))
//     }

//     let offset_3amount = u32(offset + 20, is_little_endian)
//     let offset_3offset = u32(offset + 24, is_little_endian) + offset_mid
//     for (let i = 0; i < offset_3amount; i++) {
//         html += get_settings_header_2_inner_3(offset_3offset + (i * 36))
//     }

//     return html

// }

// function get_settings_header_2_inner_3(offset) {
//     let html = `<br>--->3--> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)}`

//     let value_4 = u32(offset + 4, is_little_endian) + offset_mid

//     if (u32(offset + 4, is_little_endian) !== 0) {
//         html += get_settings_header_2_inner_3_1(value_4)
//     }

//     return html
// }

// function get_settings_header_2_inner_3_1(offset) {
//     let html = `<br>--->3-->1--> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | -> more here but unfinised for now  `

//     return html

// }

// function get_settings_header_2_inner_2(offset) {

//     let html = ''
//     let value_0 = u32(offset, is_little_endian)
//     //amount
//     let value_4 = u32(offset + 4, is_little_endian) + offset_mid
//     //offset 1
//     let value_8 = u32(offset + 8, is_little_endian)
//     //amount
//     let value_12 = u32(offset + 12, is_little_endian) + offset_mid

//     html += `<br>--->2--> ${value_0} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     if (u32(offset + 4, is_little_endian) !== 0) {
//         for (let i = 0; i < value_0; i++) {

//             html += get_settings_header_2_inner_2_1(value_4 + (i * 16))
//         }
//     }

//     for (let i = 0; i < value_8; i++) {

//         html += get_settings_header_2_inner_2_2(value_12 + (i * 16))

//     }

//     return html
// }

// function get_settings_header_2_inner_2_2(offset) {
//     let html = `<br>--->2-->2-->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html
// }
// function get_settings_header_2_inner_2_1(offset) {
//     let html = `<br>--->2-->1-->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html
// }

// function get_settings_header_2_inner(offset) {
//     let get_settings_header_2_inner_html = `<br>--->1-->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

//     return get_settings_header_2_inner_html
// }

// function get_settings_header(offset, html) {
//     let amount = u32(offset, is_little_endian)
//     let offset_entry = u32(offset + 4, is_little_endian) + offset_mid
//     let pading_8 = u32(offset + 8, is_little_endian)
//     let pading_12 = u32(offset + 12, is_little_endian)
//     html += `<br>---> <span class='known' title='amount of varibles'> ${amount}</span> | ${pading_8} | ${pading_12} `
//     for (i = 0; i < amount; i++) {
//         html += get_settings_in(offset_entry + (i * 36), html)
//     }
//     return html
// }

// function get_settings_in(offset) {

//     let html = "<br>--->-->" + get_string(u32(offset, is_little_endian) + offset_mid, 0, false) + "<br>"
//     let setting_04 = `[ ${u8(offset + 4, is_little_endian)} ,${u8(offset + 5, is_little_endian)} ,${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]`
//     let setting_08 = u32(offset + 8, is_little_endian)
//     let setting_12 = u32(offset + 12, is_little_endian)
//     // offset
//     let setting_16 = u32(offset + 16, is_little_endian)
//     let setting_20 = u32(offset + 20, is_little_endian)
//     let setting_24 = u32(offset + 24, is_little_endian)
//     let setting_28 = u32(offset + 28, is_little_endian)
//     let setting_32 = `[ ${u8(offset + 32, is_little_endian)} ,${u8(offset + 33, is_little_endian)} ,${u8(offset + 34, is_little_endian)}, ${u8(offset + 35, is_little_endian)} ]`

//     html += `--->---> | ${setting_04} | ${setting_08} | ${setting_16} | ${setting_20} | ${setting_24} | ${setting_28} | ${setting_32} `
//     if (setting_12 !== 0) {
//         //offset probably
//         html += get_settings_inner(setting_12 + offset_mid)

//     }
//     return html
// }

// function get_settings_inner(offset) {
//     let setting_inner = ""
//     setting_inner += `<br>--->--->--->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
//     if (u32(offset + 4, is_little_endian) !== 0) {
//         //offset probably
//         setting_inner += get_settings_inest(u32(offset + 4, is_little_endian) + offset_mid)
//     }
//     return setting_inner
// }

// function get_settings_inest(offset) {
//     let get_settings_inest_html = `<br>--->--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
//     return get_settings_inest_html
// }

// function get_settings_header_3(offset) {
//     let html = ""
//     html += `<br>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

//     html += get_settings_header_3_1(u32(offset + 16, is_little_endian) + offset_mid)
//     return html
// }

// function get_settings_header_3_1(offset) {
//     let html = ""
//     html += `<br>--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     html += get_settings_header_3_1_1(u32(offset + 4, is_little_endian) + offset_mid)

//     return html
// }
// function get_settings_header_3_1_1(offset) {
//     let html = ""
//     html += `<br>--->--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     html += get_settings_header_3_1_1_1(u32(offset, is_little_endian) + offset_mid)

//     return html
// }
// function get_settings_header_3_1_1_1(offset) {
//     let html = ""
//     html += `<br>--->--->--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
//     html += get_settings_header_3_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

//     return html
// }
// function get_settings_header_3_1_1_1_1(offset) {
//     let html = ""
//     html += `<br>--->--->--->--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html
// }

// function get_settings_header_4(offset) {
//     let html = ""
//     html += `<br>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
//     html += get_settings_header_3_1(u32(offset + 16, is_little_endian) + offset_mid)

//     return html
// }
// function get_settings_header_4_1(offset) {
//     let html = ""
//     html += `<br>--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
//     // html += get_settings_header_4_1(u32(offset + 16, is_little_endian) + offset_mid)

//     return html
// }

// function get_settings_header_5(offset) {
//     let html = ""
//     html += `<br>---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html
// }
// function get_settings_header_6(offset) {
//     let html = ""
//     html += `<br>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html
// }

// function get_LAYER_byte_block(offset) {
//     let html = ""
//     html += '<br>--->' + get_string(u32(offset, is_little_endian) + offset_mid, u32(offset + 8, is_little_endian) + offset_mid)
//     html += `<br>---><span class='known' title='offset to layer name'> ${u32(offset, is_little_endian)}</span> | ${u32(offset + 4, is_little_endian)} | <span class='known' title='offset 2'>${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} |<span class='known' title='offset 4'> ${u32(offset + 44, is_little_endian)}</span> | ${u32(offset + 48, is_little_endian)} | <span class='known' title='offset 5'>${u32(offset + 52, is_little_endian)}</span> | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | <span class='known' title='amount in offset 6'>${u32(offset + 68, is_little_endian)}</span> | <span class='known' title='offset 6'>${u32(offset + 72, is_little_endian)}</span>`

//     html += get_LAYER_byte_block_any_2(u32(offset + 8, is_little_endian) + offset_mid)

//     // html += get_LAYER_byte_block_any_2(u32(offset + 8, is_little_endian) + offset_mid)

//     if (u32(offset + 44, is_little_endian) !== 0) {
//         html += get_LAYER_byte_block_any_4(u32(offset + 44, is_little_endian) + offset_mid)
//     }
//     if (u32(offset + 52, is_little_endian) !== 0) {
//         html += get_LAYER_byte_block_any_5(u32(offset + 52, is_little_endian) + offset_mid)
//     }
//     for (let i = 0; i < u32(offset + 68, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_6(u32(offset + 72, is_little_endian) + offset_mid + (i * 12))
//     }

//     if (u8(offset + 19) === 0) {
//         html += ` ${get_LAYER_byte_block_any_3_0texture(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 1) {
//         html += ` ${get_LAYER_byte_block_any_3_1text(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 5) {
//         html += ` ${get_LAYER_byte_block_any_3_1animation(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 6) {
//         html += ` ${get_LAYER_byte_block_any_3_6recursive(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 7) {
//         html += ` ${get_LAYER_byte_block_any_3_6recursive(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 10) {
//         html += ` ${get_LAYER_byte_block_any_3_10unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 12) {
//         html += ` ${get_LAYER_byte_block_any_3_12unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 13) {
//         html += ` ${get_LAYER_byte_block_any_3_13unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 14) {
//         html += ` ${get_LAYER_byte_block_any_3_14unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     if (u8(offset + 19) === 15) {
//         html += ` ${get_LAYER_byte_block_any_3_15unknown(u32(offset + 24, is_little_endian) + offset_mid)} `
//     }
//     return html

// }

// function get_LAYER_byte_block_any_3_15unknown(offset) {
//     let html = ''
//     html += `<br>---3?15--->   ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

//     html += get_LAYER_byte_block_any_3_15unknown_1(u32(offset, is_little_endian) + offset_mid)
//     return html

// }

// function get_LAYER_byte_block_any_3_15unknown_1(offset) {
//     let html = ''

//     html += `<br>---3?15--->--->   F${f32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
//     html += get_LAYER_byte_block_any_3_15unknown_1_1(u32(offset + 16, is_little_endian) + offset_mid)
//     return html

// }
// function get_LAYER_byte_block_any_3_15unknown_1_1(offset) {
//     let html = ''

//     html += `<br>---3?15--->--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

//     for (let i = 0; i < u32(offset + 44, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_3_15unknown_1_1_1(u32(offset + 48, is_little_endian) + offset_mid + (i * 12))
//     }
//     for (let i = 0; i < u32(offset + 52, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_3_15unknown_1_1_2(u32(offset + 56, is_little_endian) + offset_mid + (i * 12))
//     }
//     return html

// }

// function get_LAYER_byte_block_any_3_15unknown_1_1_2(offset) {
//     let html = ''

//     html += `<br>---3?15--->--->---2---> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_3_15unknown_1_1_1(offset) {
//     let html = ''

//     html += `<br>---3?15--->--->---1---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_3_14unknown(offset) {
//     let html = ''
//     html += `<br>---3?14--->  ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} |  ${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)} |  ${u32(offset + 96, is_little_endian)} |  ${u32(offset + 100, is_little_endian)} |  ${u32(offset + 104, is_little_endian)} |  ${u32(offset + 108, is_little_endian)} |  ${u32(offset + 112, is_little_endian)} |  ${u32(offset + 116, is_little_endian)} |  ${u32(offset + 120, is_little_endian)} |  ${u32(offset + 124, is_little_endian)} |  ${u32(offset + 128, is_little_endian)} |  ${u32(offset + 132, is_little_endian)}  |  ${u32(offset + 136, is_little_endian)}  |  ${u32(offset + 140, is_little_endian)}  |  ${u32(offset + 144, is_little_endian)}  |  ${u32(offset + 148, is_little_endian)}  |  ${u32(offset + 152, is_little_endian)}  |  ${u32(offset + 156, is_little_endian)}  |  ${u32(offset + 160, is_little_endian)}  |  ${u32(offset + 164, is_little_endian)}  |  ${u32(offset + 168, is_little_endian)}  |  ${u32(offset + 172, is_little_endian)}  |  ${u32(offset + 176, is_little_endian)}  |  ${u32(offset + 180, is_little_endian)}  |  ${u32(offset + 184, is_little_endian)}  |  ${u32(offset + 188, is_little_endian)}  |  ${u32(offset + 192, is_little_endian)}  |  ${u32(offset + 196, is_little_endian)}  |  ${u32(offset + 200, is_little_endian)}  |  ${u32(offset + 204, is_little_endian)}  |  ${u32(offset + 208, is_little_endian)}  |  ${u32(offset + 212, is_little_endian)}  |  ${u32(offset + 216, is_little_endian)}  |  ${u32(offset + 220, is_little_endian)}  |  ${u32(offset + 224, is_little_endian)}  |  ${u32(offset + 228, is_little_endian)}  |  ${u32(offset + 232, is_little_endian)}  |  ${u32(offset + 236, is_little_endian)}  |  ${u32(offset + 240, is_little_endian)}  |  ${u32(offset + 244, is_little_endian)}  |  ${u32(offset + 248, is_little_endian)}  |  ${u32(offset + 252, is_little_endian)}  |  ${u32(offset + 256, is_little_endian)}  |  ${u32(offset + 260, is_little_endian)}  |  ${u32(offset + 264, is_little_endian)}  |  ${u32(offset + 268, is_little_endian)}  | [ ${u8(offset + 272, is_little_endian)}, ${u8(offset + 273, is_little_endian)}, ${u8(offset + 274, is_little_endian)}, ${u8(offset + 275, is_little_endian)} ]  |  ${u32(offset + 276, is_little_endian)}  |  ${u32(offset + 280, is_little_endian)}  |  ${u32(offset + 284, is_little_endian)}`

//     if (u32(offset + 276, is_little_endian) !== 0) {
//         html += get_LAYER_byte_block_any_3_14unknown_1(u32(offset + 276, is_little_endian) + offset_mid)
//     }
//     return html

// }
// function get_LAYER_byte_block_any_3_14unknown_1(offset) {
//     let html = ''

//     html += `<br>---3?14--->--->  [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_3_13unknown(offset) {
//     let html = ''
//     html += `<br>---3?13---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

//     html += get_LAYER_byte_block_any_3_13unknown_1(u32(offset + 4, is_little_endian) + offset_mid)

//     html += get_LAYER_byte_block_any_3_13unknown_2(u32(offset + 4, is_little_endian) + offset_mid)

//     return html

// }
// function get_LAYER_byte_block_any_3_13unknown_2(offset) {
//     let html = ''
//     html += `<br>---3?13---2---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

//     return html

// }

// function get_LAYER_byte_block_any_3_13unknown_1(offset) {
//     let html = ''
//     html += `<br>---3?13---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

//     return html

// }

// function get_LAYER_byte_block_any_3_12unknown(offset) {
//     let html = ''
//     html += `<br>---3?12---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

//     return html

// }
// function get_LAYER_byte_block_any_3_10unknown(offset) {
//     let html = ''
//     html += `<br>---3?10---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} ]`

//     return html

// }
// function get_LAYER_byte_block_any_3_1animation(offset) {
//     let html = ''
//     html += `<br>---3?5---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | F${f32(offset + 8, is_little_endian)} |  F${f32(offset + 12, is_little_endian)} ]`

//     return html

// }

// function get_LAYER_byte_block_any_3_0texture(offset) {
//     let html = ''
//     html += `<br>---3?0---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)}, ] | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]`

//     if (u32(offset + 8, is_little_endian) !== 0) {
//         html += get_LAYER_byte_block_any_3_0texture_1(u32(offset + 8, is_little_endian) + offset_mid)
//     }
//     return html

// }
// function get_LAYER_byte_block_any_3_0texture_1(offset) {
//     let html = ''

//     html += `<br>---3?0---1--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]`

//     for (let i = 0; i < u32(offset, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_3_0texture_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 4))
//     }

//     return html

// }
// function get_LAYER_byte_block_any_3_0texture_1_1(offset) {
//     let html = ''

//     html += `<br>---3?0---1---1---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] `

//     return html

// }

// function get_LAYER_byte_block_any_3_1text(offset) {
//     let html = ''

//     html += `<br>---3?1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u16(offset + 18, is_little_endian)} ] | [ ${u8(offset + 20, is_little_endian)}, ${u8(offset + 21, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

//     if (u32(offset + 4, is_little_endian) !== 0) {
//         html += get_LAYER_byte_block_any_3_1text_to_string(u32(offset + 4, is_little_endian) + offset_mid)
//     }
//     if (u32(offset + 8, is_little_endian) !== 0) {
//         html += get_LAYER_byte_block_any_3_1text_2(u32(offset + 8, is_little_endian) + offset_mid)
//     }
//     html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + offset_mid)

//     return html

// }

// function get_LAYER_byte_block_any_3_1text_3(offset) {
//     let html = ''

//     if (u32(offset + 4, is_little_endian) !== 0) {
//         html += `<br>---3?1---3---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)}`
//         html += get_LAYER_byte_block_any_3_1text_3_1(u32(offset + 4, is_little_endian) + offset_mid)
//     } else {

//         html += `<br>---3?1---3---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//         html += get_LAYER_byte_block_any_3_1text_3_2(u32(offset + 28, is_little_endian) + offset_mid)

//         for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
//             html += get_LAYER_byte_block_any_3_1text_3_3(u32(offset + 36, is_little_endian) + offset_mid + (i * 12))
//         }
//     }

//     return html

// }

// function get_LAYER_byte_block_any_3_1text_3_3(offset) {
//     let html = ''

//     html += `<br>---3?1---3---3---> ${String.fromCharCode(u32(offset, is_little_endian))} [${u32(offset, is_little_endian)}]| F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_3_1text_3_2(offset) {
//     let html = ''
//     html += `<br>---3?1---3---2--->  F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_3_1text_3_1(offset) {
//     let html = ''

//     html += `<br>---3?1---3---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//     html += `<br>__FONT__RECURSIVE_1 ${get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + offset_mid)}`

//     html += `<br>__FONT__RECURSIVE_2 ${get_LAYER_byte_block_any_3_1text_3(u32(offset + 28, is_little_endian) + offset_mid)}`

//     html += `<br>__FONT__RECURSIVE_3 ${get_LAYER_byte_block_any_3_1text_3(u32(offset + 32, is_little_endian) + offset_mid)}`
//     return html

// }

// function get_LAYER_byte_block_any_3_1text_2(offset) {
//     let html = ''

//     html += `<br>---3?1---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`

//     if (u32(offset + 4, is_little_endian !== 0)) {
//         for (i = 0; i < u32(offset, is_little_endian); i++) {
//             html += get_LAYER_byte_block_any_3_1text_2_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 8))
//         }
//     }
//     return html

// }

// function get_LAYER_byte_block_any_3_1text_2_1(offset) {
//     let html = ''

//     html += `<br>---3?1---2--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`

//     html += get_LAYER_byte_block_any_3_1text_to_string(u32(offset, is_little_endian) + offset_mid)

//     return html

// }

// function get_LAYER_byte_block_any_3_1text_to_string(offset) {

//     let html = ''
//     html += `<br>---3?1---?---?---?--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     html += `<br>---3?1---?---?---?---> ${get_string(u32(offset, is_little_endian) + offset_mid, 0, false)}`

//     return html

// }

// function get_LAYER_byte_block_any_4(offset) {
//     let html = ''

//     html += `<br>---4?---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_5(offset) {

//     let html = ''

//     html += `<br>---5---> ${u32(offset, is_little_endian)} | <span class='known' title='?'>${u32(offset + 4, is_little_endian)}</span> | <span class='known' title='?'>${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//     for (let i = 0; i < u32(offset, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_5_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32))
//     }

//     for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_5_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 32))
//     }

//     for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_5_3(u32(offset + 20, is_little_endian) + offset_mid + (i * 32))
//     }

//     for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_5_4(u32(offset + 28, is_little_endian) + offset_mid + (i * 12))
//     }
//     for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_5_5(u32(offset + 36, is_little_endian) + offset_mid + (i * 40))
//     }

//     return html
// }
// function get_LAYER_byte_block_any_5_5(offset) {
//     let html = ''

//     html += `<br>---5---5---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_5_4(offset) {
//     let html = ''

//     html += `<br>---5---4---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_5_3(offset) {
//     let html = ''

//     html += `<br>---5---3---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_5_2(offset) {
//     let html = ''

//     html += `<br>---5---2---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_5_1(offset) {
//     let html = ''

//     html += `<br>---5---1--->  <span class='known' title='x position'>F${f32(offset, is_little_endian)}</span> |  <span class='known' title='y position'>F${f32(offset + 4, is_little_endian)}</span> | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_6(offset) {
//     let html = ''

//     html += `<br>---6---> ${u32(offset, is_little_endian)} | <span class='known' title='offset deeper'>${u32(offset + 4, is_little_endian)}</span> | <span class='known' title='index sometimes ?'>${u32(offset + 8, is_little_endian)}</span>`

//     html += get_LAYER_byte_block_any_6_1(u32(offset + 4, is_little_endian) + offset_mid)

//     return html
// }

// function get_LAYER_byte_block_any_6_1(offset) {
//     let html = ''

//     html += `<br>---6--->---> <span class='known' title='1st offset amount'>${u32(offset, is_little_endian)}</span> | <span class='known' title='offset 1'>${u32(offset + 4, is_little_endian)}</span> | <span class='known' title='offset 2 amount ?'>${u32(offset + 8, is_little_endian)}</span> | <span class='known' title='offset 2'>${u32(offset + 12, is_little_endian)}</span> | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | <span class='known' title='amount offset 3?'>${u32(offset + 24, is_little_endian)}</span> | <span class='known' title='offset 3?'>${u32(offset + 28, is_little_endian)}</span> | <span class='known' title='amount offset 4?'>${u32(offset + 32, is_little_endian)}</span> | <span class='known' title='offset 4?'>${u32(offset + 36, is_little_endian)}</span> | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

//     for (let i = 0; i < u32(offset, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_6_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 20))
//     }

//     for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_6_1_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 20))
//     }

//     // 16 /20 always 0?
//     for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_6_1_3(u32(offset + 28, is_little_endian) + offset_mid + (i * 16))
//     }
//     for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_6_1_4(u32(offset + 36, is_little_endian) + offset_mid + (i * 12))
//     }
//     return html

// }

// function get_LAYER_byte_block_any_6_1_4(offset) {
//     let html = ''

//     html += `<br>---6--->---4?---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_6_1_3(offset) {
//     let html = ''

//     html += `<br>---6--->---3?---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_6_1_2(offset) {
//     let html = ''

//     html += `<br>---6--->---2---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)}`

//     return html

// }
// function get_LAYER_byte_block_any_6_1_1(offset) {
//     let html = ''

//     html += `<br>---6--->--->---> ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | F${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)}`

//     for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
//         html += get_LAYER_byte_block_any_6_1_1_1(u32(offset + 16, is_little_endian) + offset_mid + (i * 16))
//     }

//     return html

// }

// function get_LAYER_byte_block_any_6_1_1_1(offset) {
//     let html = ''

//     html += `<br>---6--->--->--->---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     html += get_LAYER_byte_block_any_6_1_1_1_1(u32(offset + 8, is_little_endian) + offset_mid)

//     return html

// }

// function get_LAYER_byte_block_any_6_1_1_1_1(offset) {
//     let html = ''
//     html += `<br>---6--->--->--->--->---> ${u32(offset, is_little_endian)} | ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_2(offset) {
//     let html = ""
//     html += `<br>---2---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | <span class='known' title='amount of sections'>${u32(offset + 4, is_little_endian)}</span> |<span class='known' title='offset sections (divisible by 12)'> ${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)}`

//     if (u32(offset + 8, is_little_endian) !== 0) {
//         for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
//             html += get_LAYER_byte_block_any_2_1(u32(offset + 8, is_little_endian) + offset_mid + (i * 12))
//         }
//     }
//     return html

// }

// function get_LAYER_byte_block_any_2_1(offset) {
//     let html = ""
//     html += `<br>---2--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  <span class='known' title='offset into deeper section'>${u32(offset + 4, is_little_endian)}</span> | ${u32(offset + 8, is_little_endian)}`

//     html += get_LAYER_byte_block_any_2_1_1(u32(offset + 4, is_little_endian) + offset_mid)
//     return html

// }

// function get_LAYER_byte_block_any_2_1_1(offset) {
//     let html = ""
//     html += `<br>---2--->--->---> [ <span class='known' title='probably index of varible section'>${u8(offset, is_little_endian)},</span> ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

//     return html

// }

// function get_LAYER_byte_block_any_3_6recursive(offset) {
//     let html = ''
//     html += `<br>---3---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}  `

//     for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
//         html += get_LAYER_byte_block_6_recursive_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 16))
//     }
//     html += "<div style='padding-left: 50px;'><br>__________RECURSIVE________<br>" + get_80byteblock(u32(offset, is_little_endian) + offset_mid) + "<br>_____END____<br></div>"
//     return html
// }

// function get_LAYER_byte_block_6_recursive_2(offset) {
//     let html = ''
//     html += `<br>---?---2---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}  `

//     return html

// }

// function get_string(begin, end, is_no_end) {

//     if (is_no_end === undefined) {
//         for (temp_string = ""; begin < end; begin++) {
//             temp_string += String.fromCharCode(u8(begin))
//         }
//     } else {
//         temp_string = ''
//         while (is_no_end === false) {
//             temp_string += String.fromCharCode(u8(begin))
//             begin++
//             if (u8(begin) === 0) {
//                 is_no_end = true
//             }
//         }

//     }

//     return temp_string
// }
