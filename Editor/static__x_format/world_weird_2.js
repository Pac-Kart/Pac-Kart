function load_world_x_world_weird_2(offset) {
    let html = `                <div> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)}  | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}
`
    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
        html += load_world_x_world_weird_2_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 4))
    }
    // html += '<br>---------------<br>'
    // for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
    //     html += load_world_x_world_weird_2_2(u32(offset + 12, is_little_endian) + offset_mid + (i * 4))
    // }
    // // html += load_world_x_world_weird_1(u32(offset + 20, is_little_endian)+offset_mid)
    html += '</div>'
    document.getElementById("file_editor").innerHTML = html

}

function load_world_x_world_weird_2_2(offset) {
    let html = `<br>---2> ${u32(offset + 0, is_little_endian)}`
    html += load_world_x_world_weird_2_2_2(u32(offset + 0, is_little_endian) + offset_mid)

    return html
}

function load_world_x_world_weird_2_2_2(offset) {
    let html = `<br>--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | ${u32(offset + 88, is_little_endian)} | ${u32(offset + 92, is_little_endian)} | ${u32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | ${u32(offset + 104, is_little_endian)} | ${u32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)} | ${u32(offset + 128, is_little_endian)} | ${u32(offset + 132, is_little_endian)} | ${u32(offset + 136, is_little_endian)} | ${u32(offset + 140, is_little_endian)} | ${u32(offset + 144, is_little_endian)} | ${u32(offset + 148, is_little_endian)} | ${u32(offset + 152, is_little_endian)} | ${u32(offset + 156, is_little_endian)} | ${u32(offset + 160, is_little_endian)} | ${u32(offset + 164, is_little_endian)} | ${u32(offset + 168, is_little_endian)} | ${u32(offset + 172, is_little_endian)}`

    if (u32(offset + 140, is_little_endian) != 0) {
        html += `<br>--->--->---?${get_string(u32(offset + 140, is_little_endian) + offset_mid, 0, false)}`
    }
    if (u32(offset + 152, is_little_endian) != 0) {
        html += `<br>--->--->---?${get_string(u32(offset + 152, is_little_endian) + offset_mid, 0, false)}`
    }

    html += load_world_x_world_weird_2_2_2_1(u32(offset + 164, is_little_endian) + offset_mid)
    html += load_world_x_world_weird_2_2_2_2(u32(offset + 168, is_little_endian) + offset_mid)
    document.getElementById("file_editor").innerHTML = html
}

function load_world_x_world_weird_2_2_2_1(offset) {
    let html = `<br>--->--->--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
        html += load_world_x_world_weird_2_2_2_1_1(u32(offset + 12, is_little_endian) + offset_mid + (i * 24))
    }
    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        html += load_world_x_world_weird_2_2_2_1_2(u32(offset + 20, is_little_endian) + offset_mid + (i * 8))
    }
    return html

}

function load_world_x_world_weird_2_2_2_1_1(offset) {
    let html = `<br>--->--->---1---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)}`

    html += `<br>--->--->---1--1>${get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false)}`
    html += `<br>--->--->---1--2>${get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false)}`
    html += load_world_x_world_weird_2_2_2_1_1_3(u32(offset + 12, is_little_endian) + offset_mid)
    return html
}

function load_world_x_world_weird_2_2_2_1_1_3(offset) {
    let html = ''
       if(u32(offset + 8, is_little_endian) ==0){
    html = `<br>--->--->---1--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`
    html+= load_world_x_world_weird_2_2_2_1_1_3_1(u32(offset + 4, is_little_endian)+offset_mid)
   }else{
    html = `<br>--->--->---1--->---> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset +5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`
    html+= load_world_x_world_weird_2_2_2_1_1_3_1(u32(offset + 0, is_little_endian)+offset_mid)
       }

    return html

}

function load_world_x_world_weird_2_2_2_1_1_3_1(offset) {
        let html = `<br>--->--->---1--->--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html+=load_world_x_world_weird_2_2_2_1_1_3_1_1(u32(offset + 16, is_little_endian)+offset_mid)
    
    return html

}

function load_world_x_world_weird_2_2_2_1_1_3_1_1(offset) {
        let html = `<br>--->--->---1--->--->--->---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    
    return html
}

function load_world_x_world_weird_2_2_2_1_2(offset) {
    let html = `<br>--->--->---2---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}`

    html += load_world_x_world_weird_2_2_2_1_2_1(u32(offset + 4, is_little_endian) + offset_mid)
    return html

}

function load_world_x_world_weird_2_2_2_1_2_1(offset) {
    let html = `<br>--->--->---2--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    if (u32(offset + 8, is_little_endian) != 0) {
        html += `<br>--->--->---2--->---1---> ${get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false)}`
    }
    html += load_world_x_world_weird_2_2_2_1_2_1_2(u32(offset + 12, is_little_endian) + offset_mid)

    for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        html += load_world_x_world_weird_2_2_2_1_2_1_3(u32(offset + 20, is_little_endian) + offset_mid + (i * 12))
    }
    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
        html += load_world_x_world_weird_2_2_2_1_2_1_4(u32(offset + 28, is_little_endian) + offset_mid + (i * 24))
    }
    return html
}

function load_world_x_world_weird_2_2_2_1_2_1_4(offset) {
    let html = `<br>--->--->---2--->--->--4> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)}`
    if (u32(offset + 0, is_little_endian) != 0) {
        html += `<br>--->--->---2--->--->--4> ${get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false)}`
    }
    if (u32(offset + 8, is_little_endian) != 0) {
        html += `<br>--->--->---2--->--->--4> ${get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false)}`
    }

    html+=load_world_x_world_weird_2_2_2_1_2_1_4_3(u32(offset + 12, is_little_endian)+offset_mid)
    return html

}

function load_world_x_world_weird_2_2_2_1_2_1_4_3(offset) {
    let html = `<br>--->--->---2--->--->--4>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`


    return html
    
}

function load_world_x_world_weird_2_2_2_1_2_1_3(offset) {
    let html = `<br>--->--->---2--->--->---3---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}`
    if (u32(offset + 4, is_little_endian) != 0) {
        html += `<br>--->--->---2--->--->---3--->---> ${get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false)}`
    }
    html += load_world_x_world_weird_2_2_2_1_2_1_3_2(u32(offset + 8, is_little_endian) + offset_mid)
    return html
}

function load_world_x_world_weird_2_2_2_1_2_1_3_2(offset) {
    let html = `<br>--->--->---2--->--->---3--->---> ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 4, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function load_world_x_world_weird_2_2_2_1_2_1_2(offset) {
    let html = `<br>--->--->---2--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function load_world_x_world_weird_2_2_2_2(offset) {
    let html = `<br>--->--->--2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function load_world_x_world_weird_2_1(offset) {
    let html = `<br>---1> ${u32(offset + 0, is_little_endian)}`
    html += load_world_x_world_weird_2_1_1(u32(offset + 0, is_little_endian) + offset_mid)

    return html
}

function load_world_x_world_weird_2_1_1(offset) {
    let html = `<br>---1---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    html += load_world_x_world_weird_2_1_1_1(u32(offset + 4, is_little_endian) + offset_mid)

    if (u32(offset + 12, is_little_endian) != 0) {
        html += load_world_x_world_weird_2_1_1_2(u32(offset + 12, is_little_endian) + offset_mid, u8(offset + 8, is_little_endian))
    }

    return html
}

function load_world_x_world_weird_2_1_1_1(offset) {
    let html = `<br>---1---1---> `
    html += (get_string(offset, 0, false))
    return html
}

function load_world_x_world_weird_2_1_1_2(offset, type) {
    let html = ''
    if (type == 2) {
        html = `<br>---1---2---2> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | F${f32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    }
    if (type == 3) {
        html = `<br>---1---2---3> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
        html += load_world_x_world_weird_2_1_1_2_3(u32(offset + 12, is_little_endian) + offset_mid)
    }
    if (type == 4) {
        html = `<br>---1---2---4> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} |  ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    }
    return html

}

function load_world_x_world_weird_2_1_1_2_3(offset) {
    let html = `<br>---1---2---3>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)}  | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

    return html
}
