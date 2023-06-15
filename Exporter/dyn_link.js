function dyn_link(offset, mid,XFA) {
    set_u32(offset, offset + 80 - mid, is_little_endian)
    global_offset_array.push(offset - mid)

    end_offset = 0

    if (XFA.section_1.length === 1) {
        end_offset = dyn_link_header_1(offset + 80, mid)
    } else {
        end_offset = offset + 80
    }
    new_offset = end_offset
    if (XFA.section_intro.length != 0) {
        set_u32(offset + 4, XFA.section_intro.length, is_little_endian)
        set_u32(offset + 8, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 8 - mid)
        end_offset = dyn_link_header_2(new_offset, mid, )

    }

    if (XFA.menu_Intrface_name != undefined) {
        set_u32(offset + 12, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 12 - mid)
        end_offset = dyn_string(end_offset, XFA.menu_Intrface_name, mid)
        set_u32(offset + 16, XFA.menu_Intrface_index, is_little_endian)
    }
    if (XFA.menu_loading_name != undefined) {
        set_u32(offset + 20, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 20 - mid)
        end_offset = dyn_string(end_offset, XFA.menu_loading_name, mid)
        set_u32(offset + 24, XFA.menu_loading_index, is_little_endian)
    }

    if (XFA.section_main.length != 0) {
        set_u32(offset + 28, XFA.section_main.length, is_little_endian)
        set_u32(offset + 32, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 32 - mid)
        end_offset = dyn_link_header_5(end_offset, mid, XFA.section_main)
    }

    if (XFA.menu_kart_name != undefined) {
        set_u32(offset + 36, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 36 - mid)
        end_offset = dyn_string(end_offset, XFA.menu_kart_name, mid)
    }
    if (XFA.menu_item_name != undefined) {
        set_u32(offset + 40, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 40 - mid)
        end_offset = dyn_string(end_offset, XFA.menu_item_name, mid)
    }
    if (XFA.section_demo.length != 0 && XFA.section_demo[0] !== null) {
        set_u32(offset + 48, end_offset - mid, is_little_endian)
        end_offset = dyn_link_header_8(end_offset, mid, XFA.section_demo[0])
        global_offset_array.push(offset + 48 - mid)
    }
    if (XFA.texture_1 != -1) {
        set_u16(offset + 52, XFA.texture_1[0][1], is_little_endian)
        set_u16(offset + 54, 52428, is_little_endian)
        texture_offset_index_array.push([offset + 52 - mid, XFA.texture_1[0][1], XFA.texture_1[0][2]])
    }
    if (XFA.texture_2 != -1) {
        set_u16(offset + 56, XFA.texture_2[0][1], is_little_endian)
        set_u16(offset + 58, 52428, is_little_endian)
        texture_offset_index_array.push([offset + 56 - mid, XFA.texture_2[0][1], XFA.texture_2[0][2]])
    }

    if (XFA.section_font.length != 0) {
        set_u32(offset + 60, end_offset - mid, is_little_endian)
        end_offset = dyn_link_header_9(end_offset, mid, XFA.section_font[0])
        global_offset_array.push(offset + 60 - mid)
    }
    if (XFA.section_mystery.length != 0) {
        set_u32(offset + 64, 16, is_little_endian)
        set_u32(offset + 68, end_offset - mid, is_little_endian)
        global_offset_array.push(offset + 68 - mid)
        end_offset = dyn_link_header_10(end_offset, mid, XFA.section_mystery)
    }
    return end_offset

    function dyn_link_header_1(offset, mid) {
        set_u32(offset, XFA.section_1[0].unknown, is_little_endian)

        if (XFA.section_1[0].section_1.length != 0) {
            global_offset_array.push(offset + 4 - mid)
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            end_offset = dyn_link_header_1_1(offset + 16, mid)
        }
        return end_offset
    }
    function dyn_link_header_1_1(offset, mid) {
        if (XFA.section_1[0].section_1[0].section_1.length != 0) {
            set_u32(offset, offset + 16 - mid, is_little_endian)
            end_offset = dyn_link_header_1_1_1(offset + 16, mid)
            global_offset_array.push(offset - mid)
        }
        return end_offset
    }
    function dyn_link_header_1_1_1(offset, mid) {
        set_u32(offset + 8, XFA.section_1[0].section_1[0].section_1[0].unknown, is_little_endian)
        if (XFA.section_1[0].section_1[0].section_1[0].section_1.length != 0) {
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_offset = dyn_link_header_1_1_1_1(offset + 16, mid)
        }
        return end_offset
    }
    function dyn_link_header_1_1_1_1(offset, mid) {
        set_u32(offset + 20, XFA.section_1[0].section_1[0].section_1[0].section_1[0].unknown, is_little_endian)
        return offset + 32
    }
    function dyn_link_header_2(offset, mid, i) {
        let end_block = (XFA.section_intro.length * 16) + offset
        for (let i = 0; i < XFA.section_intro.length; i++) {
            if (XFA.section_intro[i].intro != undefined) {
                set_u32(offset + (i * 16) + 4, end_block - mid, is_little_endian)
                global_offset_array.push(offset + (i * 16) + 4 - mid)
                end_block = dyn_string(end_block, XFA.section_intro[i].intro, mid)

                set_u32(offset + (i * 16) + 8, end_block - mid, is_little_endian)
                global_offset_array.push(offset + (i * 16) + 8 - mid)
                end_block = dyn_link_header_2_2(end_block, mid, i)
            } else {
                set_u32(offset + (i * 16), 4, is_little_endian)
                set_u32(offset + (i * 16) + 12, end_block - mid, is_little_endian)
                end_block = dyn_link_header_2_3(end_block, mid, i)
                global_offset_array.push(offset + (i * 16) + 12 - mid)
            }
        }

        return end_block
    }
    function dyn_link_header_2_2(offset, mid, i) {
        let end_block = offset + 16
        set_u8(offset + 1, XFA.section_intro[i].section_1[0].unknown, is_little_endian)
        return end_block
    }
    function dyn_link_header_2_3(offset, mid, i) {
        set_u32(offset, offset + 16 - mid, is_little_endian)
        global_offset_array.push(offset - mid)
        set_u32(offset + 4, XFA.section_intro[i].file_index, is_little_endian)
        end_block = dyn_string(offset + 16, XFA.section_intro[i].filename, mid)
        return end_block
    }
    function dyn_link_header_5(offset, mid, XFA) {
        let end_block = (XFA.length * 8) + offset
        for (let i = 0; i < XFA.length; i++) {
            set_u32(offset + (i * 8), end_block - mid, is_little_endian)
            end_block = dyn_link_header_5_1(end_block, mid, XFA[i])
            global_offset_array.push(offset + (i * 8) - mid)
        }

        return end_block
    }

    function dyn_link_header_5_1(offset, mid, XFA) {
        set_u32(offset, XFA[0].length, is_little_endian)
        set_u32(offset + 4, offset + 16 - mid, is_little_endian)
        global_offset_array.push(offset + 4 - mid)
        end_block = dyn_link_header_5_1_1(offset + 16, mid, XFA[0])

        return end_block

    }
    function dyn_link_header_5_1_1(offset, mid, XFA) {
        let end_block = (XFA.length * 32) + offset
        for (let i = 0; i < XFA.length; i++) {
            if (XFA[i][0].save.length != 0) {
                set_u32(offset + 0 + (i * 32), XFA[i][0].save.length, is_little_endian)
                set_u32(offset + 4 + (i * 32), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 4 + (i * 32) - mid)
                end_block = dyn_link_header_5_1_1_4_1(end_block, mid, XFA[i][0].save)
            }
            if (XFA[i][0].loading.length != 0) {
                set_u32(offset + 8 + (i * 32), end_block - mid, is_little_endian)
                end_block = dyn_link_header_5_1_1_2(end_block, mid, XFA[i][0].loading)
                global_offset_array.push(offset + 8 + (i * 32) - mid)
            }
            set_u32(offset + 12 + (i * 32), end_block - mid, is_little_endian)
            end_block = dyn_link_header_5_1_1_3(end_block, mid, XFA[i][0].name)
            global_offset_array.push(offset + 12 + (i * 32) - mid)

            if (XFA[i][0].interface.length != 0) {
                set_u32(offset + 16 + (i * 32), XFA[i][0].interface.length, is_little_endian)
                set_u32(offset + 20 + (i * 32), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 20 + (i * 32) - mid)
                end_block = dyn_link_header_5_1_1_4(end_block, mid, XFA[i][0].interface)
            }
            if (XFA[i][0].unknown.length != 0) {
                set_u32(offset + 24 + (i * 32), XFA[i][0].unknown.length, is_little_endian)
                set_u32(offset + 28 + (i * 32), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 28 + (i * 32) - mid)
                end_block = dyn_link_header_5_1_1_4(end_block, mid, XFA[i][0].unknown)
            }
        }

        return end_block

    }

    function dyn_link_header_5_1_1_2(offset, mid, XFA) {

        set_u32(offset, offset + 16 - mid, is_little_endian)
        global_offset_array.push(offset - mid)

        set_u32(offset + 4, XFA[1], is_little_endian)

        end_block = dyn_string(offset + 16, XFA[0], mid)

        return end_block
    }
    function dyn_link_header_5_1_1_3(offset, mid, XFA) {

        end_block = dyn_string(offset, XFA[0], mid)

        return end_block
    }
    function dyn_link_header_5_1_1_4(offset, mid, XFA) {

        let end_block = (XFA.length * 12) + offset
        end_block = divisible(end_block, 16)
        for (let i = 0; i < XFA.length; i++) {
            set_u32(offset + 8 + (i * 12), XFA[i].unknown, is_little_endian)
            if (XFA[i].a.length != 0) {
                set_u32(offset + (i * 12), XFA[i].a.length, is_little_endian)
                set_u32(offset + 4 + (i * 12), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 4 + (i * 12) - mid)
                end_block = dyn_link_header_5_1_1_4_1(end_block, mid, XFA[i].a)

            }

        }
        return end_block
    }
    function dyn_link_header_5_1_1_4_1(offset, mid, XFA) {
        let end_block = (XFA.length * 8) + offset
        end_block = divisible(end_block, 16)
        for (let i = 0; i < XFA.length; i++) {
            set_u32(offset + (i * 8), 1, is_little_endian)
            set_u32(offset + 4 + (i * 8), end_block - mid, is_little_endian)
            end_block = dyn_link_header_5_1_1_2(end_block, mid, XFA[i])
            global_offset_array.push(offset + 4 + (i * 8) - mid)
        }

        return end_block
    }
    function dyn_link_header_8(offset, mid, XFA) {
        set_u32(offset, XFA.unknown_0, is_little_endian)
        set_u32(offset + 4, XFA.unknown_1, is_little_endian)
        set_u32(offset + 8, offset + 16 - mid, is_little_endian)
        end_block = dyn_link_header_8_1(offset + 16, mid, XFA.link_array)
        global_offset_array.push(offset + 8 - mid)
        return end_block
    }
    function dyn_link_header_8_1(offset, mid, XFA) {
        set_u32(offset, XFA[0].length, is_little_endian)
        set_u32(offset + 4, offset + 16 - mid, is_little_endian)
        global_offset_array.push(offset + 4 - mid)
        end_block = dyn_link_header_8_1_1(offset + 16, mid, XFA[0])
        return end_block
    }

    function dyn_link_header_8_1_1(offset, mid, XFA) {
        let end_block = (XFA.length * 32) + offset
        for (let i = 0; i < XFA.length; i++) {
            if (XFA[i].save.length != 0) {
                set_u32(offset + 0 + (i * 32), XFA[i].save.length, is_little_endian)
                set_u32(offset + 4 + (i * 32), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 4 + (i * 32) - mid)
                end_block = dyn_link_header_5_1_1_4_1(end_block, mid, XFA[i].save)
            }
            if (XFA[i].loading.length != 0) {
                set_u32(offset + 8 + (i * 32), end_block - mid, is_little_endian)
                end_block = dyn_link_header_5_1_1_2(end_block, mid, XFA[i].loading)
                global_offset_array.push(offset + 8 + (i * 32) - mid)
            }
            set_u32(offset + 12 + (i * 32), end_block - mid, is_little_endian)
            end_block = dyn_link_header_5_1_1_3(end_block, mid, XFA[i].name)
            global_offset_array.push(offset + 12 + (i * 32) - mid)
            if (XFA[i].interface.length != 0) {
                set_u32(offset + 16 + (i * 32), XFA[i].interface.length, is_little_endian)
                set_u32(offset + 20 + (i * 32), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 20 + (i * 32) - mid)
                end_block = dyn_link_header_5_1_1_4(end_block, mid, XFA[i].interface)
            }
            if (XFA[i].unknown.length != 0) {
                set_u32(offset + 24 + (i * 32), XFA[i].unknown.length, is_little_endian)
                set_u32(offset + 28 + (i * 32), end_block - mid, is_little_endian)
                global_offset_array.push(offset + 28 + (i * 32) - mid)
                end_block = dyn_link_header_5_1_1_4(end_block, mid, XFA[i].unknown)
            }
        }
        return end_block

    }

    function dyn_link_header_9(offset, mid, XFA) {
        let end_block = offset + 48
        if (XFA.texture != -1) {
            set_u16(offset, XFA.texture[0][1], is_little_endian)
            set_u16(offset + 2, 52428, is_little_endian)
            texture_offset_index_array.push([offset - mid, XFA.texture[0][1], XFA.texture[0][2]])
        }

        set_u16(offset + 8, XFA.unknown_0, is_little_endian)
        set_u8(offset + 10, XFA.unknown_1, is_little_endian)
        set_f32(offset + 12, XFA.unknown_2, is_little_endian)

        if (XFA.letter_settings_a.length != 0) {
            set_u32(offset + 24, 1, is_little_endian)
            set_u32(offset + 28, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 28 - mid)
            end_block = dyn_link_header_9_1(end_block, mid, XFA.letter_settings_a)
        }
        if (XFA.letter_array.length != 0) {
            set_u32(offset + 32, XFA.letter_array.length, is_little_endian)
            set_u32(offset + 36, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 36 - mid)
            end_block = dyn_link_header_9_2(end_block, mid, XFA.letter_array)
        }

        return end_block
    }

    function dyn_link_header_9_1(offset, mid, XFA) {
        set_f32(offset, XFA[0].unknown_1, is_little_endian)

        let end_block = offset + 32

        return end_block

    }
    function dyn_link_header_9_2(offset, mid, XFA) {

        let end_block = offset
        for (let i = 0; i < XFA.length; i++) {
            set_u32(end_block + 0, XFA[i][0], is_little_endian)
            set_f32(end_block + 4, XFA[i][1], is_little_endian)
            set_f32(end_block + 8, XFA[i][2], is_little_endian)
            end_block += 12
        }
        end_block = divisible(end_block, 16)

        return end_block

    }
    function dyn_link_header_10(offset, mid, XFA) {
        let i = 0
        for (; i < XFA.length; i++) {
            set_u32(offset + 0 + (i * 4), XFA[i], is_little_endian)
        }
        return offset + (i * 4)
    }
}
