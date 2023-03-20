function load_text(offset, mid) {
    let html = 'a'

    text_sections_array = []

    html += `<br>---> | ${u32(offset + 4, is_little_endian)} | <span class='known' title='offset 2'>${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} |<span class='known' title='offset 4'> ${u32(offset + 44, is_little_endian)}</span> | ${u32(offset + 48, is_little_endian)} | <span class='known' title='offset 5'>${u32(offset + 52, is_little_endian)}</span> | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | <span class='known' title='amount in offset 6'>${u32(offset + 68, is_little_endian)}</span> | <span class='known' title='offset 6'>${u32(offset + 72, is_little_endian)}</span>`

    html += get_LAYER_byte_block_any__2(u32(offset + 8, is_little_endian) + mid, mid)

    html += ` ${get_LAYER_byte_block_any__3_1text(u32(offset + 24, is_little_endian) + mid, mid)} `

    for (let i = 0; i < text_sections_array.length; i += 2) {

        html += `<textarea data-offset='${text_sections_array[i]}' data-amount='${text_sections_array[i+1].last}'>${get_string(text_sections_array[i] + mid, 0, false)}</textarea><br>`
    }


    document.getElementById("file_editor").innerHTML = html
    let text_area = document.getElementById("file_editor").getElementsByTagName('TEXTAREA')

    for (let i = 0; i < text_area.length; i++) {
        text_area[i].addEventListener("change", text_update)
    }

}

function text_update(e) {
    console.log(e.dataset)
}

function get_LAYER_byte_block_any__3_1text(offset, mid) {
    let html = ''

    html += `<br>---3?1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u16(offset + 18, is_little_endian)} ] | [ ${u8(offset + 20, is_little_endian)}, ${u8(offset + 21, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any_3__1text_to_string(u32(offset + 4, is_little_endian) + mid, mid, 0, u32(offset + 12, is_little_endian))
    }
    if (u32(offset + 8, is_little_endian) !== 0) {
        html += get_LAYER_byte_block_any__3_1text_2(u32(offset + 8, is_little_endian) + mid, mid, u32(offset + 12, is_little_endian))
    }
    // html += get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + mid)

    return html

}

// function get_LAYER_byte_block_any_3_1text_3(offset) {
//     let html = ''

//     if (u32(offset + 4, is_little_endian) !== 0) {
//         html += `<br>---3?1---3---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)}`
//         html += get_LAYER_byte_block_any_3_1text_3_1(u32(offset + 4, is_little_endian) + mid)
//     } else {

//         html += `<br>---3?1---3---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

//         html += get_LAYER_byte_block_any_3_1text_3_2(u32(offset + 28, is_little_endian) + mid)

//         for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
//             html += get_LAYER_byte_block_any_3_1text_3_3(u32(offset + 36, is_little_endian) + mid + (i * 12))
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

//     html += `<br>__FONT__RECURSIVE_1 ${get_LAYER_byte_block_any_3_1text_3(u32(offset + 12, is_little_endian) + mid)}`

//     html += `<br>__FONT__RECURSIVE_2 ${get_LAYER_byte_block_any_3_1text_3(u32(offset + 28, is_little_endian) + mid)}`

//     html += `<br>__FONT__RECURSIVE_3 ${get_LAYER_byte_block_any_3_1text_3(u32(offset + 32, is_little_endian) + mid)}`
//     return html

// }

function get_LAYER_byte_block_any__3_1text_2(offset, mid, end) {
    let html = ''

    html += `<br>---3?1---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`

    if (u32(offset + 4, is_little_endian !== 0)) {
        for (i = 0; i < u32(offset, is_little_endian); i++) {
            html += get_LAYER_byte_block_any_3__1text_2_1(u32(offset + 4, is_little_endian) + mid + (i * 8), mid, i, end)
        }
    }
    return html

}

function get_LAYER_byte_block_any_3__1text_2_1(offset, mid, i, end) {
    let html = ''

    html += `<br>---3?1---2--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`

    html += get_LAYER_byte_block_any_3__1text_to_string(u32(offset, is_little_endian) + mid, mid, i, end)

    return html

}

function get_LAYER_byte_block_any_3__1text_to_string(offset, mid, i, end) {

    let html = ''
    if (text_sections_array.includes(u32(offset, is_little_endian))) {
        let index = text_sections_array.indexOf(u32(offset, is_little_endian))
        text_sections_array[index + 1].index.push(i)
    } else {
        //calculate end
        let string = u32(offset, is_little_endian) + mid

        let ii = 0
        let is_0 = 1
        for (; is_0 != 0; ii++) {
            is_0 = u8(string + (ii))
        }
        text_sections_array.push(u32(offset, is_little_endian), {
            last: ii,
            index: [i]
        })
        html += `<br>---3?1---?---?---?--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

        // html += `<br>---3?1---?---?---?---> ${get_string(u32(offset, is_little_endian) + mid, 0, false)}`
    }
    return html

}

function get_LAYER_byte_block_any__2(offset, mid) {
    let html = ""
    html += `<br>${offset}---2---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | <span class='known' title='amount of sections'>${u32(offset + 4, is_little_endian)}</span> |<span class='known' title='offset sections (divisible by 12)'> ${u32(offset + 8, is_little_endian)}</span> | ${u32(offset + 12, is_little_endian)}`

    if (u32(offset + 8, is_little_endian) !== 0) {
        for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
            html += get_LAYER_byte_block_any__2_1(u32(offset + 8, is_little_endian) + mid + (i * 12), mid)
        }
    }
    return html

}

function get_LAYER_byte_block_any__2_1(offset, mid) {
    let html = ""
    html += `<br>---2--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  <span class='known' title='offset into deeper section'>${u32(offset + 4, is_little_endian)}</span> | ${u32(offset + 8, is_little_endian)}`

    html += get_LAYER_byte_block_any__2_1_1(u32(offset + 4, is_little_endian) + mid)
    return html

}

function get_LAYER_byte_block_any__2_1_1(offset) {
    let html = ""
    html += `<br>---2--->--->---> [ <span class='known' title='probably index of varible section'>${u8(offset, is_little_endian)},</span> ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
