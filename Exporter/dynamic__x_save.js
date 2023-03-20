function dynamic_save() {

    // calculate size
    let binary_size = 16000000
    // header size
    for (let i = 1; i < XFA.length; i++,
    binary_size += 24) {
        binary_size += XFA[i].bytelength
    }

    binary_size += 128
    //footer

    dynamic_buffer = new ArrayBuffer(binary_size)

    var set_u8 = new DataView(dynamic_buffer).setUint8.bind(new DataView(dynamic_buffer))
    var set_u16 = new DataView(dynamic_buffer).setUint16.bind(new DataView(dynamic_buffer))
    var set_u32 = new DataView(dynamic_buffer).setUint32.bind(new DataView(dynamic_buffer))
    var set_f32 = new DataView(dynamic_buffer).setFloat32.bind(new DataView(dynamic_buffer))

    //set magics
    set_u32(0, 33620128, is_little_endian)
    set_u32(4, 67174575, is_little_endian)

    //global version
    set_u32(8, XFA[0].version, is_little_endian)

    //amount files
    set_u32(12, XFA.length - 1, is_little_endian)

    let f_i = 1
    //file index
    let prev_offset = 0

    let global_offset = ((XFA.length - 1) * 24) + 16

    for (let block_i = 16; f_i < XFA.length; f_i++,
    block_i += 24) {
        global_offset = dyn_file_directory(block_i, global_offset)
    }
    // global_offset+=100000

    //idk
    ////////////////////////////////////////////////////
    function dyn_file_directory(block_offset, offset) {
        let end_block = ((XFA.length - 1) * 24) + 16
        console.log(end_block, 'end')
        set_u32(block_offset, XFA[f_i].version, is_little_endian)
        set_u32(block_offset + 4, XFA[f_i].type, is_little_endian)
        set_u32(block_offset + 8, XFA[f_i].index, is_little_endian)
        // offset +12 is unknown
        set_u32(block_offset + 20, global_offset - end_block, is_little_endian)
        global_offset = dyn_sub_file_header(offset)

        console.log(block_offset, offset, end_block, global_offset, 'file:', f_i)

        set_u32(block_offset + 16, global_offset - offset, is_little_endian)

        return global_offset
    }
    //
    function dyn_sub_file_header(offset) {
        texture_offset_index_array = []
        texture_anim_offset_index_array = []
        sound_offset_index_array = []
        model_offset_index_array = []
        global_offset_array = []
        let block_i = 80
        set_u32(offset + 8, XFA[f_i].sounds.length, is_little_endian)
        set_u32(offset + 32, XFA[f_i].sounds.length, is_little_endian)

        for (let ii = 0; ii < 2; ii++) {

            for (let iii = 0; iii < XFA[f_i].linked_strings[ii].string.length; iii++) {
                set_u8(block_i + iii + offset, XFA[f_i].linked_strings[ii].string[iii].charCodeAt())
            }
            block_i += 12

            set_u32(block_i + offset, XFA[f_i].linked_strings[ii].unknown1, is_little_endian)
            set_u32(block_i + offset + 4, XFA[f_i].linked_strings[ii].unknown2, is_little_endian)
            block_i += 8
        }
        //
        let temp_offset = offset + 120
        if (XFA[f_i].sounds.length != 0) {
            temp_offset = dyn_sound_offset_list(offset, block_i)
        }
        //
        let patch_list_1 = temp_offset

        let patch_1_i = XFA[f_i].patcher_texutre[0].amount + XFA[f_i].patcher_texture_animation[0].amount + XFA[f_i].patcher_sounds[0].amount
        patch_1_i = divisible(patch_1_i, 4)
        // console.log(patch_1_i,temp_offset)
        temp_offset = patch_1_i * 8 + temp_offset

        //file patch 1
        //calculate offset out
        //fill these in last

        set_u32(offset + 12, XFA[f_i].patcher_general_offsets[0].amount, is_little_endian)
        set_u32(offset + 16, XFA[f_i].patcher_texutre[0].amount, is_little_endian)
        set_u32(offset + 28, XFA[f_i].patcher_sounds[0].amount, is_little_endian)
        set_u32(offset + 52, XFA[f_i].patcher_texture_animation[0].amount, is_little_endian)
        set_u32(offset + 56, XFA[f_i].patcher_models[0].amount, is_little_endian)

        let mid = temp_offset
        offset_mid = temp_offset
        set_u32(temp_offset + 0, 1, is_little_endian)
        set_u32(temp_offset + 4, 16, is_little_endian)
        global_offset_array.push(temp_offset + 4 - mid)
        temp_offset += 16

        //offset to link header
        global_offset_array.push(temp_offset - mid)
        set_u32(temp_offset, 224, is_little_endian)
        temp_offset += 208

        if (XFA[f_i].type_s === "link") {
            end_offset = dyn_link_header(temp_offset, mid)
        }

        if (global_offset_array.length != 0) {
            set_u32(offset, end_offset - mid, is_little_endian)
        }

        dyn_file_patcher_1(patch_list_1, mid, XFA)
        end_offset = dyn_file_patcher_2(end_offset, mid, XFA)

        return end_offset

    }
    function dyn_sound_offset_list(offset, block_i) {
        //calculate block length

        let temp_i = (XFA[f_i].sounds.length)
        temp_i = divisible(temp_i, 8)
        // while ((temp_i * 4) % 32 !== 0) {
        //     temp_i++
        // }
        // console.log(temp_i, 'temp')
        for (let ii = 0, i_4 = 0; ii < XFA[f_i].sounds.length; ii++,
        i_4 += 4) {
            set_u32(block_i + offset + i_4, ii * 32, is_little_endian)
        }
        block_i += temp_i * 4
        let start_sound_list = block_i + offset
        // block_i+= temp_i*4
        for (let ii = 0, i_offset = 0; ii < XFA[f_i].sounds.length; ii++,
        block_i += 32) {
            set_u32(block_i + offset, i_offset + (XFA[f_i].sounds.length * 32), is_little_endian)
            set_u32(block_i + offset + 4, XFA[f_i].sounds[ii].sound_data[0].byteLength, is_little_endian)
            set_u32(block_i + offset + 8, XFA[f_i].sounds[ii].unknown1, is_little_endian)
            set_u32(block_i + offset + 12, XFA[f_i].sounds[ii].soundsamplerate, is_little_endian)
            set_u32(block_i + offset + 16, XFA[f_i].sounds[ii].unknown2, is_little_endian)
            set_u32(block_i + offset + 20, XFA[f_i].sounds[ii].unknown3, is_little_endian)
            temp_offset = divisible(XFA[f_i].sounds[ii].sound_data[0].byteLength, 16)
            i_offset += temp_offset

            // console.log(i_offset + (XFA[f_i].sounds.length * 32) + start_sound_list)
        }
        for (let ii = 0; ii < XFA[f_i].sounds.length; ii++) {
            for (let iii = 0; iii < XFA[f_i].sounds[ii].sound_data[0].byteLength; iii++) {
                set_u8(block_i + offset + iii, new DataView(XFA[f_i].sounds[ii].sound_data[0]).getUint8(iii))
            }
            temp_offset = divisible(XFA[f_i].sounds[ii].sound_data[0].byteLength, 16)
            block_i += temp_offset
        }
        // console.log(block_i + offset)
        // for (let iii = 0; iii < XFA[f_i].sounds[ii].sound_data[0].byteLength; iii++) {
        //     set_u8(block_i + offset + iii, new DataView(XFA[f_i].sounds[ii].sound_data[0]).getUint8(iii))
        // }
        return block_i + offset
    }
    function dyn_link_header(offset, mid) {
        set_u32(offset, offset + 80 - mid, is_little_endian)
        global_offset_array.push(offset - mid)
        set_u32(offset + 52, 0xffffffff, is_little_endian)
        set_u32(offset + 56, 0xffffffff, is_little_endian)

        end_offset = 0

        if (XFA[f_i].type_data[0].section_1.length === 1) {
            end_offset = dyn_link_header_1(offset + 80, mid)
        } else {
            end_offset = offset+80
        }
        new_offset = end_offset
        if (XFA[f_i].type_data[0].section_intro.length != 0) {
            set_u32(offset + 4, XFA[f_i].type_data[0].section_intro.length, is_little_endian)
            set_u32(offset + 8, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            end_offset = dyn_link_header_2(new_offset, mid, )

        }

        // if (XFA[f_i].type_data[0].section_main.length != 0) {

        // }

        if (XFA[f_i].type_data[0].menu_Intrface_name != undefined) {
            set_u32(offset + 12, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            end_offset = dyn_string(end_offset, XFA[f_i].type_data[0].menu_Intrface_name, mid)
            set_u32(offset + 16, XFA[f_i].type_data[0].menu_Intrface_index, is_little_endian)
        }
        if (XFA[f_i].type_data[0].menu_loading_name != undefined) {
            set_u32(offset + 20, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 20 - mid)
            end_offset = dyn_string(end_offset, XFA[f_i].type_data[0].menu_loading_name, mid)
            set_u32(offset + 24, XFA[f_i].type_data[0].menu_loading_index, is_little_endian)
        }

        if (XFA[f_i].type_data[0].section_main.length != 0) {
            set_u32(offset + 28, XFA[f_i].type_data[0].section_main.length, is_little_endian)
            set_u32(offset + 32, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 32 - mid)
            end_offset = dyn_link_header_5(end_offset, mid, XFA[f_i].type_data[0].section_main)
        }

        if (XFA[f_i].type_data[0].menu_kart_name != undefined) {
            set_u32(offset + 36, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 36 - mid)
            end_offset = dyn_string(end_offset, XFA[f_i].type_data[0].menu_kart_name, mid)
        }
        if (XFA[f_i].type_data[0].menu_item_name != undefined) {
            set_u32(offset + 40, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 40 - mid)
            end_offset = dyn_string(end_offset, XFA[f_i].type_data[0].menu_item_name, mid)
        }
        if (XFA[f_i].type_data[0].section_demo.length != 0 && XFA[f_i].type_data[0].section_demo[0] !== null) {
            set_u32(offset + 48, end_offset - mid, is_little_endian)
            end_offset = dyn_link_header_8(end_offset, mid, XFA[f_i].type_data[0].section_demo[0])
            global_offset_array.push(offset + 48 - mid)
        }
        if (XFA[f_i].type_data[0].texture_1 != -1) {
            set_u16(offset + 52, XFA[f_i].type_data[0].texture_1[0][1], is_little_endian)
            set_u16(offset + 54, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 52 - mid, XFA[f_i].type_data[0].texture_1[0][1], XFA[f_i].type_data[0].texture_1[0][2]])
        }
        if (XFA[f_i].type_data[0].texture_2 != -1) {
            set_u16(offset + 56, XFA[f_i].type_data[0].texture_2[0][1], is_little_endian)
            set_u16(offset + 58, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 56 - mid, XFA[f_i].type_data[0].texture_2[0][1], XFA[f_i].type_data[0].texture_2[0][2]])
        }

        if (XFA[f_i].type_data[0].section_font.length != 0) {
            set_u32(offset + 60, end_offset - mid, is_little_endian)
            end_offset = dyn_link_header_9(end_offset, mid, XFA[f_i].type_data[0].section_font[0])
            global_offset_array.push(offset + 60 - mid)
        }
        if (XFA[f_i].type_data[0].section_mystery.length != 0) {
            set_u32(offset + 64, 16, is_little_endian)
            set_u32(offset + 68, end_offset - mid, is_little_endian)
            global_offset_array.push(offset + 68 - mid)
            end_offset = dyn_link_header_10(end_offset, mid, XFA[f_i].type_data[0].section_mystery)
            end_offset += 4
        }
        return end_offset

    }

    function dyn_link_header_1(offset, mid) {
        set_u32(offset, XFA[f_i].type_data[0].section_1[0].unknown, is_little_endian)

        if (XFA[f_i].type_data[0].section_1[0].section_1.length != 0) {
            global_offset_array.push(offset + 4 - mid)
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            end_offset = dyn_link_header_1_1(offset + 16, mid)
        }
        return end_offset
    }
    function dyn_link_header_1_1(offset, mid) {
        if (XFA[f_i].type_data[0].section_1[0].section_1[0].section_1.length != 0) {
            set_u32(offset, offset + 16 - mid, is_little_endian)
            end_offset = dyn_link_header_1_1_1(offset + 16, mid)
            global_offset_array.push(offset - mid)
        }
        return end_offset
    }
    function dyn_link_header_1_1_1(offset, mid) {
        set_u32(offset + 8, XFA[f_i].type_data[0].section_1[0].section_1[0].section_1[0].unknown, is_little_endian)
        if (XFA[f_i].type_data[0].section_1[0].section_1[0].section_1[0].section_1.length != 0) {
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_offset = dyn_link_header_1_1_1_1(offset + 16, mid)
        }
        return end_offset
    }
    function dyn_link_header_1_1_1_1(offset, mid) {
        set_u32(offset + 20, XFA[f_i].type_data[0].section_1[0].section_1[0].section_1[0].section_1[0].unknown, is_little_endian)
        return offset + 32
    }
    function dyn_link_header_2(offset, mid, i) {
        let end_block = (XFA[f_i].type_data[0].section_intro.length * 16) + offset
        for (let i = 0; i < XFA[f_i].type_data[0].section_intro.length; i++) {
            if (XFA[f_i].type_data[0].section_intro[i].intro != undefined) {
                set_u32(offset + (i * 16) + 4, end_block - mid, is_little_endian)
                global_offset_array.push(offset + (i * 16) + 4 - mid)
                end_block = dyn_string(end_block, XFA[f_i].type_data[0].section_intro[i].intro, mid)

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
        set_u8(offset + 1, XFA[f_i].type_data[0].section_intro[i].section_1[0].unknown, is_little_endian)
        return end_block
    }
    function dyn_link_header_2_3(offset, mid, i) {
        set_u32(offset, offset + 16 - mid, is_little_endian)
        global_offset_array.push(offset - mid)
        set_u32(offset + 4, XFA[f_i].type_data[0].section_intro[i].file_index, is_little_endian)
        end_block = dyn_string(offset + 16, XFA[f_i].type_data[0].section_intro[i].filename, mid)
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

            // end_block = dyn_string(offset, XFA[0], mid)

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

        // end_block = dyn_string(offset, XFA[0], mid)

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
        // set_u32(offset + 32, 0xffffffff, is_little_endian)
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
    function dyn_file_patcher_1(offset, mid) {
        for (let i = 0; i < texture_offset_index_array.length; i++) {
            set_u32(offset + (i * 8), texture_offset_index_array[i][0], is_little_endian)
            set_u16(offset + (i * 8) + 4, texture_offset_index_array[i][1], is_little_endian)
            set_u16(offset + (i * 8) + 6, texture_offset_index_array[i][2], is_little_endian)
        }
    }
    function dyn_file_patcher_2(offset, mid) {
        let i = 0
        for (; i < global_offset_array.length; i++) {
            set_u32(offset + (i * 4), global_offset_array[i], is_little_endian)
        }
        return offset + (i * 4)
    }

    function dyn_string(offset, XFA_string, mid) {
        let i = 0

        for (; i < XFA_string.length; i++) {
            set_u8(offset + i, XFA_string[i].charCodeAt())
        }
        i = divisible(i, 16)

        return offset + i
    }

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    function divisible(value, divisibility) {
        let temp_value = value
        while ((temp_value) % divisibility !== 0) {
            temp_value++
        }
        return temp_value
    }
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    let i = 0
    for (; i < 128; i++) {
        set_u8(global_offset + i, 32)
    }
    global_offset += i

    return dynamic_buffer.slice(0,global_offset)
}
