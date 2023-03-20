function get_link_header(offset, file_index) {

    if (u32(offset + 12, is_little_endian) != 0) {
        main_menu_Intrface_offset = u32(offset + 12, is_little_endian) + offset_mid
        main_menu_Intrface_index = u32(offset + 16, is_little_endian)
    }
    if (u32(offset + 20, is_little_endian) != 0) {
        main_menu_loading_offset = u32(offset + 20, is_little_endian) + offset_mid
        main_menu_loading_index = u32(offset + 24, is_little_endian)
    }
    if (u32(offset + 36, is_little_endian) != 0) {
        main_menu_kart_offset = u32(offset + 36, is_little_endian) + offset_mid
    }
    if (u32(offset + 40, is_little_endian) != 0) {
        main_menu_item_offset = u32(offset + 40, is_little_endian) + offset_mid
    }

    XFA[file_index].type_data.push({
        id: gen_id(),
        section_1: [],
        section_intro: [],
        section_main: [],
        section_demo: [],
        section_font: [],
        section_mystery: [],
        texture_1: [],
        texture_2: [],
        menu_Intrface_name: get_string(main_menu_Intrface_offset, 0, false),
        menu_Intrface_index: main_menu_Intrface_index,
        menu_loading_name: get_string(main_menu_loading_offset, 0, false),
        menu_loading_index: main_menu_loading_index,
        menu_kart_name: get_string(main_menu_kart_offset, 0, false),
        menu_item_name: get_string(main_menu_item_offset, 0, false),
    })

    // xdx is 64 bytes
    html = ''
    // html += `<br> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} | [ ${u16(offset + 52, is_little_endian)}, ${u8(offset + 54, is_little_endian)}, ${u8(offset + 55, is_little_endian)} ] |  [ ${u16(offset + 56, is_little_endian)}, ${u8(offset + 58, is_little_endian)}, ${u8(offset + 59, is_little_endian)} ] |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)}`

    if (u32(offset, is_little_endian) != 0) {
        console.log(offset,offset_mid)
        html += get_link_1(u32(offset, is_little_endian) + offset_mid, file_index)
    }
    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        html += get_link_2(u32(offset + 8, is_little_endian) + offset_mid + (i * 16), i, file_index)
    }
    if (u32(offset + 12, is_little_endian) != 0) {
        html += get_link_3(u32(offset + 12, is_little_endian) + offset_mid)
    }
    if (u32(offset + 20, is_little_endian) != 0) {
        html += get_link_4(u32(offset + 20, is_little_endian) + offset_mid)
    }

    for (let i = 0; i < u32(offset + 28, is_little_endian); i++) {
        html += get_link_5(u32(offset + 32, is_little_endian) + offset_mid + (i * 8), i, XFA[file_index].type_data[0].section_main)
    }
    if (u32(offset + 36, is_little_endian) != 0) {
        html += get_link_6(u32(offset + 36, is_little_endian) + offset_mid)
    }
    if (u32(offset + 40, is_little_endian) != 0) {
        html += get_link_7(u32(offset + 40, is_little_endian) + offset_mid)
    }

    if (u32(offset + 48, is_little_endian) != 0) {
        html += get_link_8(u32(offset + 48, is_little_endian) + offset_mid, XFA[file_index].type_data[0].section_demo)
    }
    if (u32(offset + 52, is_little_endian) != 0) {
        //check if in patch list
        let patch_array = get_patch_offset_index(texture_patch, offset + 52 - offset_mid)
        if (patch_array != -1) {
            XFA[file_index].type_data[0].texture_1 = patch_array
        }
    }

    if (u32(offset + 56, is_little_endian) != 0) {
        //check if in patch list
        let patch_array = get_patch_offset_index(texture_patch, offset + 56 - offset_mid)
        if (patch_array != -1) {
            XFA[file_index].type_data[0].texture_2 = patch_array
        }
    }

    // texture_patch.indexOf()

    if (u32(offset + 60, is_little_endian) != 0) {
        html += get_link_9(u32(offset + 60, is_little_endian) + offset_mid, XFA[file_index].type_data[0].section_font)
    }

    for (let i = 0; i < u32(offset + 64, is_little_endian); i++) {
        html += get_link_10(u32(offset + 68, is_little_endian) + offset_mid + (i * 4), i, XFA[file_index].type_data[0].section_mystery)
    }

}
function get_link_10(offset, i, XFA) {
    let html = ''
    XFA.push(u32(offset, is_little_endian))
    html += `<br>10---> ${get_string(offset, offset + 4)}`
    return html

}

function get_link_9(offset, XFA) {
    let html = ''

    XFA.push({
        id: gen_id(),
        letter_array: [],
        letter_settings_a: [],
        texture: [],
        recusive: [],
        unknown_0: u16(offset + 8, is_little_endian),
        unknown_1: u8(offset + 10, is_little_endian),
        unknown_2: f32(offset + 12, is_little_endian),
        unknown_3: u32(offset + 24, is_little_endian),
    })
    html += `<br>9---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} `

    if (u32(offset, is_little_endian) != 0) {
        //check if in patch list
        let patch_array = get_patch_offset_index(texture_patch, offset - offset_mid)
        if (patch_array != -1) {
            XFA[0].texture = patch_array
        }
    }

    for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
        html += get_link_9_1(u32(offset + 28, is_little_endian) + offset_mid + (i * 32), XFA[0].letter_settings_a, )
    }
    for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
        html += get_link_9_2(u32(offset + 36, is_little_endian) + offset_mid + (i * 12), XFA[0].letter_array, i)
    }

    return html
}

function get_link_9_2(offset, XFA, i) {
    let html = ''

    XFA.push([u32(offset, is_little_endian), f32(offset + 4, is_little_endian), f32(offset + 8, is_little_endian)])
    html += `<br>9--->[2]---> ${get_string(offset, offset + 1)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}`

    return html

}
function get_link_9_1(offset, XFA) {
    let html = ''
    XFA.push({
        unknown_1: f32(offset, is_little_endian)
    })
    html += `<br>9--->[1]---> F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}

function get_link_6(offset) {
    let html = ''

    html += `<br>6---> ${get_string(offset, offset + 16)}`

    return html

}
function get_link_7(offset) {
    let html = ''

    html += `<br>7---> ${get_string(offset, offset + 16)}`

    return html

}

function get_link_5(offset, i, XFA) {
    XFA.push([])
    html = ''

    html += `<br>5---${i}> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)}`

    html += get_link_5_1(u32(offset, is_little_endian) + offset_mid, i, XFA[i])
    return html

}
function get_link_5_1(offset, i, XFA) {
    XFA.push([], gen_id())

    html = ''

    html += `<br>5---${i}>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
        html += get_link_5_1_1(u32(offset + 4, is_little_endian) + offset_mid + (ii * 32), i, ii, XFA[0])
    }

    // html += get_link_5_1(u32(offset, is_little_endian))
    return html

}
function get_link_5_1_1(offset, i, ii, XFA) {
    let html = ''

    html += `<br>5---${i}>--->---${ii}> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    XFA.push([{
        loading: [],
        name: [],
        interface: [],
        unknown: [],
        save: []
    }, gen_id()])

    for (iii = 0; iii < u32(offset, is_little_endian); iii++) {
        html += get_link_5_1_1_1(u32(offset + 4, is_little_endian) + offset_mid + (iii * 16), i, ii, iii, XFA[ii][0].save)
    }
    if (u32(offset + 8, is_little_endian) != 0) {
        html += get_link_5_1_1_2(u32(offset + 8, is_little_endian) + offset_mid, i, ii, XFA[ii][0].loading)
    }

    if (u32(offset + 12, is_little_endian) != 0) {
        html += get_link_5_1_1_3(u32(offset + 12, is_little_endian) + offset_mid, i, ii, XFA[ii][0].name)
    }

    for (let iii = 0; iii < u32(offset + 16, is_little_endian); iii++) {
        html += get_link_5_1_1_4(u32(offset + 20, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[ii][0].interface)
    }
    for (let iii = 0; iii < u32(offset + 24, is_little_endian); iii++) {
        html += get_link_5_1_1_5(u32(offset + 28, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[ii][0].unknown)
    }

    return html

}

function get_link_5_1_1_5(offset, i, ii, iii, XFA) {
    let html = ''

    XFA.push({
        a: [],
        unknown: u32(offset + 8, is_little_endian)
    })

    html += `<br>5---${i}>--->---${ii}>[5]-${iii}> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u16(offset + 8, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ]`

    for (let iiii = 0; iiii < u32(offset, is_little_endian); iiii++) {
        html += get_link_5_1_1_5_1(u32(offset + 4, is_little_endian) + offset_mid + (iiii * 8), i, ii, iii, iiii, XFA[iii].a)
    }

    return html

}
function get_link_5_1_1_5_1(offset, i, ii, iii, iiii, XFA) {
    let html = ''

    XFA.push([])

    html += `<br>5---${i}>--->---${ii}>[5]-${iii}>---${iiii}> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ]  | ${u32(offset + 4, is_little_endian)}`

    html += get_link_5_1_1_5_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, iiii, XFA[iiii])

    return html

}
function get_link_5_1_1_5_1_1(offset, i, ii, iii, iiii, XFA) {
    let html = ''

    XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    html += `<br>5---${i}>--->---${ii}>[5]-${iii}>---${iiii}>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_link_5_1_1_5_1_1_1(u32(offset + 0, is_little_endian) + offset_mid, i, ii, iii, iiii)

    return html

}
function get_link_5_1_1_5_1_1_1(offset, i, ii, iii, iiii) {
    let html = ''

    html += `<br>5---${i}>--->---${ii}>[5]-${iii}>---${iiii}>--->---> ${get_string(offset, offset + 16)}`

    return html

}
function get_link_5_1_1_4(offset, i, ii, iii, XFA) {
    let html = ''

    XFA.push({
        a: [],
        unknown: u32(offset + 8, is_little_endian)
    })

    html += `<br>5---${i}>--->---${ii}>[4]-${iii}> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ]`

    for (let iiii = 0; iiii < u32(offset, is_little_endian); iiii++) {
        html += get_link_5_1_1_4_1(u32(offset + 4, is_little_endian) + offset_mid + (iiii * 8), i, ii, iii, iiii, XFA[iii].a)
    }

    return html

}
function get_link_5_1_1_4_1(offset, i, ii, iii, iiii, XFA) {
    let html = ''

    XFA.push([])

    html += `<br>5---${i}>--->---${ii}>[4]-${iii}>---${iiii}> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}`

    html += get_link_5_1_1_4_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, iiii, XFA[iiii])

    return html

}
function get_link_5_1_1_4_1_1(offset, i, ii, iii, iiii, XFA) {
    let html = ''

    XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    html += `<br>5---${i}>--->---${ii}>[4]-${iii}>---${iiii}>---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_link_5_1_1_4_1_1_1(u32(offset + 0, is_little_endian) + offset_mid, i, ii, iii, iiii)

    return html

}
function get_link_5_1_1_4_1_1_1(offset, i, ii, iii, iiii) {
    let html = ''

    html += `<br>5---${i}>--->---${ii}>[4]-${iii}>---${iiii}>--->---> ${get_string(offset, offset + 16)}`

    return html

}

function get_link_5_1_1_3(offset, i, ii, XFA) {
    let html = ''

    XFA.push(get_string(offset, 0, false))
    html += `<br>5---${i}>--->---${ii}>[3]--> ${get_string(offset, offset + 16)}`

    return html

}

function get_link_5_1_1_2(offset, i, ii, XFA) {
    let html = ''

    XFA.push(get_string(u32(offset, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    html += `<br>5---${i}>--->---${ii}>[2]--> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_link_5_1_1_2_1(u32(offset + 0, is_little_endian) + offset_mid, i, ii)

    return html

}
function get_link_5_1_1_2_1(offset, i, ii) {
    let html = ''

    html += `<br>5---${i}>--->---${ii}>[2]-->---> ${get_string(offset, offset + 16)}`

    return html

}

function get_link_5_1_1_1(offset, i, ii, iii, XFA) {
    html = ''

    XFA.push([])
    html += `<br>5---${i}>--->---${ii}>--${iii}> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_link_5_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, XFA[iii])

    return html

}
function get_link_5_1_1_1_1(offset, i, ii, iii, XFA) {
    html = ''

    XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    html += `<br>5---${i}>--->---${ii}>--${iii}>---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

    html += get_link_5_1_1_1_1_1(u32(offset + 0, is_little_endian) + offset_mid, i, ii, iii)

    return html

}
function get_link_5_1_1_1_1_1(offset, i, ii, iii) {
    html = ''

    html += `<br>5---${i}>--->---${ii}>--${iii}>--->---> ${get_string(offset, offset + 16)} `

    return html

}
function get_link_4(offset) {
    html = ''

    html += `<br>4---> ${get_string(offset, offset + 16)} `

    return html

}

function get_link_3(offset) {
    html = ''

    html += `<br>3---> ${get_string(offset, offset + 16)} `

    return html

}
function get_link_8(offset, XFA) {
    html = ''

    XFA.push({
        unknown_0: u32(offset + 0, is_little_endian),
        unknown_1: u32(offset + 4, is_little_endian),
        link_array: []
    })

    html += `<br>8---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_8_1(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].link_array)

    return html

}

function get_link_8_1(offset, XFA) {
    html = ''
    XFA.push([])

    html += `<br>8--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_link_8_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32), i, XFA[0])
    }

    return html

}
function get_link_8_1_1(offset, i, XFA) {
    html = ''
    ii = 0
    XFA.push({
        id: gen_id(),
        loading: [],
        name: [],
        interface: [],
        unknown: [],
        save: []
    })

    html += `<br>8--->---${i}---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    for (iii = 0; iii < u32(offset, is_little_endian); iii++) {
        html += get_link_5_1_1_1(u32(offset + 4, is_little_endian) + offset_mid + (iii * 16), i, ii, iii, XFA[i].save)
    }
    if (u32(offset + 8, is_little_endian) != 0) {
        html += get_link_5_1_1_2(u32(offset + 8, is_little_endian) + offset_mid, i, ii, XFA[i].loading)
    }

    if (u32(offset + 12, is_little_endian) != 0) {
        html += get_link_5_1_1_3(u32(offset + 12, is_little_endian) + offset_mid, i, ii, XFA[i].name)
    }

    for (let iii = 0; iii < u32(offset + 16, is_little_endian); iii++) {
        html += get_link_5_1_1_4(u32(offset + 20, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[i].interface)
    }
    for (let iii = 0; iii < u32(offset + 24, is_little_endian); iii++) {
        html += get_link_5_1_1_5(u32(offset + 28, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[i].unknown)
    }

    return html

}

function get_link_2(offset, i, file_index) {

    if (u32(offset + 0, is_little_endian) === 0) {
        XFA[file_index].type_data[0].section_intro.push({
            intro: get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false),
            section_1: []
        })
        html += get_link_2_1(u32(offset + 8, is_little_endian) + offset_mid, i, file_index)
    } else {
        html += get_link_2_2(u32(offset + 12, is_little_endian) + offset_mid, i, file_index)
    }

    html = ''
    html += `<br>2---${i}> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    if (u32(offset + 4, is_little_endian) != 0) {
        html += `<br>2---${i}>1--> ${get_string(u32(offset + 4, is_little_endian) + offset_mid, u32(offset + 4, is_little_endian) + offset_mid + 16)} `
    }
    // if (u32(offset + 8, is_little_endian) != 0) {
    //     html += get_link_2_1(u32(offset + 8, is_little_endian) + offset_mid)
    // }
    // if (u32(offset + 12, is_little_endian) != 0) {
    //     html += get_link_2_2(u32(offset + 12, is_little_endian) + offset_mid)
    // }

    return html

}

function get_link_2_1(offset, i, file_index) {
    html = ''
    XFA[file_index].type_data[0].section_intro[i].section_1.push({
        unknown: u8(offset + 1, is_little_endian)
    })
    html += `<br>2--->2---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    return html

}

function get_link_2_2(offset, i, file_index) {
    html = ''
    XFA[file_index].type_data[0].section_intro.push({
        filename: get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false),
        file_index: u32(offset + 4, is_little_endian)
    })
    html += `<br>2--->2---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_2_2_1(u32(offset + 0, is_little_endian) + offset_mid)
    return html

}

function get_link_2_2_1(offset) {
    html = ''
    html += `<br>2--->---> ${get_string(offset, offset + 16)} `
    return html

}

function get_link_1(offset, file_index) {
    html = ''
    XFA[file_index].type_data[0].section_1.push({
        unknown: u32(offset, is_little_endian),
        section_1: []
    })
    html += `<br>---1> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_1_1(u32(offset + 4, is_little_endian) + offset_mid, file_index)
    return html
}

function get_link_1_1(offset, file_index) {
    XFA[file_index].type_data[0].section_1[0].section_1.push({
        section_1: []
    })
    html += `<br>--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_link_1_1_1(u32(offset + 0, is_little_endian) + offset_mid, file_index)
    return html

}

function get_link_1_1_1(offset, file_index) {
    XFA[file_index].type_data[0].section_1[0].section_1[0].section_1.push({
        section_1: [],
        unknown: u32(offset + 8, is_little_endian)
    })

    html = ''
    html += `<br>--->--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`
    html += get_link_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, file_index)
    return html

}

function get_link_1_1_1_1(offset, file_index) {
    XFA[file_index].type_data[0].section_1[0].section_1[0].section_1[0].section_1.push({
        unknown: u32(offset + 20, is_little_endian)
    })
    html = ''
    html += `<br>--->--->--->---> ${u32(offset, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`
    return html

}
