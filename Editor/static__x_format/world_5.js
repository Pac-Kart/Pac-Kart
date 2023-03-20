function load_world_5(offset, amount) {
    let html = offset + '<br>wip still<br>'

    for (let i = 0; i < amount; i++) {
        html += `<br> F${f32(offset + 32 + (i * 112), is_little_endian)} | ${u32(offset + 36 + (i * 112), is_little_endian)} | ${u32(offset + 40 + (i * 112), is_little_endian)} | ${u32(offset + 44 + (i * 112), is_little_endian)} | ${u32(offset + 48 + (i * 112), is_little_endian)} | F${f32(offset + 52 + (i * 112), is_little_endian)} | ${u32(offset + 56 + (i * 112), is_little_endian)} | ${u32(offset + 60 + (i * 112), is_little_endian)} | ${u32(offset + 64 + (i * 112), is_little_endian)} | ${u32(offset + 68 + (i * 112), is_little_endian)} | F${f32(offset + 72 + (i * 112), is_little_endian)} | ${u32(offset + 76 + (i * 112), is_little_endian)} | ${u32(offset + 80 + (i * 112), is_little_endian)} | ${u32(offset + 84 + (i * 112), is_little_endian)} | ${u32(offset + 88 + (i * 112), is_little_endian)} | F${f32(offset + 92 + (i * 112), is_little_endian)} | ${u32(offset + 96 + (i * 112), is_little_endian)} | ${u32(offset + 100 + (i * 112), is_little_endian)} | ${u32(offset + 104 + (i * 112), is_little_endian)} | ${u32(offset + 108 + (i * 112), is_little_endian)}`

        html += get_world_5_1(u32(offset + 100 + (i * 112), is_little_endian) + offset_mid)
    }

    document.getElementById("file_editor").innerHTML = html
}

function get_world_5_1(offset) {
    let html = `<br>--1> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} `

    html += get_world_5_1_sections(u32(offset + 4, is_little_endian) + offset_mid)
    html += get_world_5_1_modelname(u32(offset + 8, is_little_endian) + offset_mid)

    return html
}

function get_world_5_1_sections(offset) {
    let html = `<br>--->--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}? `

    // html += get_world_5_1_sections_subsections(u32(offset + 4, is_little_endian) + offset_mid, u32(offset + 0, is_little_endian))

    return html

}

function get_world_5_1_sections_subsections(offset, amount) {
    let html = '<br>--->--1>--->'
    let html2 = ''
    let is_last;

    for (let i = 0; i < amount; i++) {
        if (i + 1 < amount) {
            is_last = false
        } else {
            is_last = true
        }
        html += `${u32(offset + 0 + (i * 4), is_little_endian)} | `
        html2 += get_world_5_1_sections_subsections_main(u32(offset + 0 + (i * 4), is_little_endian) + offset_mid, is_last, amount)
    }

    return html + html2
}

function get_world_5_1_sections_subsections_main(offset, is_last, amount_sections) {
    let html = `<br>--->--1>--->---> ${u32(offset + 0, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | [ ${u8(offset + 40, is_little_endian)}, ${u8(offset + 41, is_little_endian)}, ${u8(offset + 42, is_little_endian)}, ${u8(offset + 43, is_little_endian)} ] | [ ${u8(offset + 44, is_little_endian)}, ${u8(offset + 45, is_little_endian)}, ${u8(offset + 46, is_little_endian)}, ${u8(offset + 47, is_little_endian)} ] |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} | |?${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)}`

    html += get_world_5_1_sections_subsections_main_last(u32(offset + 92, is_little_endian) + offset_mid, is_last, amount_sections)

    return html

}
function get_world_5_1_sections_subsections_main_last(offset, is_last, amount_sections) {
    let html = `<br>--->--1>--->--->--L> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    if (is_last == true) {
        html += get_world_5_1_sections_subsections_main_last_texturenames(offset + 16,amount_sections)
    }
    return html

}

function get_world_5_1_sections_subsections_main_last_texturenames(offset, amount_sections) {
    let html;
    let offset_next = false
    

    for (let i = 0; i < amount_sections; i++) {

        html += `<br>--->--1>--->--->--L>---> ${get_string(offset, 0, false)}`

        while (offset_next === false) {
            offset++
            if (u8(offset) === 0) {
                offset_next = true
            }
        }
    }
    return html

}

function get_world_5_1_modelname(offset) {
    let html = `<br>--->--2> ${get_string(offset, 0, false)} `

    return html

}
