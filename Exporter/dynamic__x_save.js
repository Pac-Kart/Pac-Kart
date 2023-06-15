function dynamic_save() {

    debug = false

    // calculate size
    let binary_size = 160000000
    // header size
    // for (let i = 1; i < XFA.length; i++,
    // binary_size += 24) {
    //     binary_size += XFA[i].bytelength
    // }

    // binary_size += 128

    dynamic_buffer = new ArrayBuffer(binary_size)

    set_u8 = new DataView(dynamic_buffer).setUint8.bind(new DataView(dynamic_buffer))
    set_u16 = new DataView(dynamic_buffer).setUint16.bind(new DataView(dynamic_buffer))
    set_u32 = new DataView(dynamic_buffer).setUint32.bind(new DataView(dynamic_buffer))
    set_f32 = new DataView(dynamic_buffer).setFloat32.bind(new DataView(dynamic_buffer))

    //set magics
    set_u32(0, 33620128, is_little_endian)
    set_u32(4, 67174575, is_little_endian)

    //global version
    set_u32(8, XFA[0].version, is_little_endian)

    //amount files
    set_u32(12, XFA.length - 1, is_little_endian)

    let f_i = 1
    let TXFA = XFA[0]
    //file index

    let global_offset = ((XFA.length - 1) * 24) + 16

    for (let block_i = 16; f_i < XFA.length; f_i++,
    block_i += 24) {
        global_offset = dyn_file_directory(block_i, global_offset)
    }

    let i = 0
    for (; i < 128; i++) {
        set_u8(global_offset + i, 32)
    }
    global_offset += i

    return dynamic_buffer.slice(0, global_offset)

    ////////////////////////////////////////////////////
    function dyn_file_directory(block_offset, offset) {
        let end_block = ((XFA.length - 1) * 24) + 16
        set_u32(block_offset, XFA[f_i].version, is_little_endian)
        set_u32(block_offset + 4, XFA[f_i].type, is_little_endian)
        set_u32(block_offset + 8, XFA[f_i].index, is_little_endian)
        // offset +12 is unknown
        set_u32(block_offset + 20, global_offset - end_block, is_little_endian)
        global_offset = dyn_sub_file_header(offset, XFA[f_i])

        set_u32(block_offset + 16, global_offset - offset, is_little_endian)

        return global_offset
    }
    //
    function dyn_sub_file_header(offset, XFA) {
        //datapack
        let end_block = offset + 120
        texture_offset_index_array = []
        texture_anim_offset_index_array = []
        sound_offset_index_array = []
        model_offset_index_array = []
        global_offset_array = []
        let block_i = 80
        set_u32(offset + 8, XFA.sounds.length, is_little_endian)
        set_u32(offset + 20, XFA.textures.length, is_little_endian)
        set_u32(offset + 32, XFA.sounds.length, is_little_endian)

        set_u32(offset + 48, XFA.texture_animations.length, is_little_endian)

        // linked strings
        for (let ii = 0; ii < 2; ii++) {

            for (let iii = 0; iii < XFA.linked_strings[ii].string.length; iii++) {
                set_u8(block_i + iii + offset, XFA.linked_strings[ii].string[iii].charCodeAt())
            }
            block_i += 12

            set_u32(block_i + offset, XFA.linked_strings[ii].unknown1, is_little_endian)
            set_u32(block_i + offset + 4, XFA.linked_strings[ii].unknown2, is_little_endian)
            block_i += 8
        }

        generate_id_offset_array(model_array = [], XFA.models)

        generate_id_offset_array(model_animations_1_array = [], XFA.model_animations_1)
        generate_id_offset_array(model_animations_2_array = [], XFA.model_animations_2)

        let temp_offset = offset + 120

        let temp_i = (XFA.sounds.length)
        temp_i = divisible(temp_i, 8)
        temp_i = block_i + (temp_i * 4) + offset

        if (XFA.sounds.length != 0) {
            temp_offset = dyn_sound(end_block, XFA.sounds)
        }


        // FIX temp 4+ for gshare
        if (TXFA.name === 'gShared.xpc') {
            temp_offset += 4
        }
        // if (temp_offset === 114060) {
        //     temp_offset -= 4
        // }else if (temp_offset === 41702828) {
        //     temp_offset+=4
        // }else if (temp_offset === 42335940) {
        //     temp_offset-=8
        // }else if (temp_offset === 42609652) {
        //     temp_offset-=8
        // }else if (temp_offset === 45253620) {
        //     temp_offset-=12
        // }else if (temp_offset === 45665060) {
        //     temp_offset-=8
        // }else if (temp_offset === 48136112) {
        //     temp_offset-=8
        // }else if (temp_offset === 52759904) {
        //     temp_offset-=8
        // }else if (temp_offset === 54327740) {
        //     temp_offset-=8
        // }else if (temp_offset === 54621208) {
        //     temp_offset+=4
        // }

        
        
        let patch_list_1 = temp_offset
        set_u32(offset + 4, temp_offset - temp_i, is_little_endian)
        // divisibility FIX 

        let patch_1_i = XFA.patcher_texutre[0].amount + XFA.patcher_texture_animation[0].amount + XFA.patcher_sounds[0].amount
        patch_1_i = divisible(patch_1_i, 4) * 8
        // console.log(patch_1_i,temp_offset)
        temp_offset = patch_1_i + temp_offset
        console.log(temp_offset, 'temp_offset')

        //file patch 1
        //calculate offset out
        //fill these in last

        set_u32(offset + 12, XFA.patcher_general_offsets[0].amount, is_little_endian)
        set_u32(offset + 16, XFA.patcher_texutre[0].amount, is_little_endian)
        set_u32(offset + 28, XFA.patcher_sounds[0].amount, is_little_endian)
        set_u32(offset + 52, XFA.patcher_texture_animation[0].amount, is_little_endian)
        set_u32(offset + 56, XFA.patcher_models[0].amount, is_little_endian)

        set_u32(offset + 56, XFA.patcher_models[0].amount, is_little_endian)

        let mid = temp_offset
        offset_mid = temp_offset

        //mid section header
        let tex_anims
        if (XFA.type_s !== "share" && XFA.type_s !== "world") {

            set_u32(temp_offset + 0, XFA.type_data[0].unknown_00, is_little_endian)
            set_u32(temp_offset + 4, 16, is_little_endian)
            global_offset_array.push(temp_offset + 4 - mid)
            let mid_section_2 = temp_offset + 16
            end_block = temp_offset + 32
            temp_offset += 32

            //mid section header 2
            global_offset_array.push(mid_section_2 - mid)
            set_u32(mid_section_2 + 4, XFA.type_data[0].section_04.unknown_04, is_little_endian)

            end_block = dyn_multiappend(XFA.models, model_array, dyn_model, mid_section_2 + 16, mid)
            // FIX imperfect ?
            // end_block = dyn_model(end_block, mid, XFA.models[i], mid - 4)

            if (XFA.texture_animations.length) {
                tex_anims = end_block
                global_offset_array.push(end_block - mid)
                end_block += divisible(XFA.texture_animations.length * 12, 16)
            }

            end_block = dyn_multiappend(XFA.model_animations_1, model_animations_1_array, dyn_model_animation_1, end_block, mid)
            end_block = dyn_multiappend(XFA.model_animations_2, model_animations_2_array, dyn_model_animation_2, end_block, mid)

            if (XFA.textures.length !== 0) {
                set_u32(offset + 24, end_block - mid, is_little_endian)
                end_block = dyn_textures(end_block, XFA.textures, mid)
            }

            if (end_block === 39874696) {
                end_block += 2416
            }



            set_u32(mid_section_2, end_block - mid, is_little_endian)

            //autosave
            // if (end_block === 432) {
            //     end_block += 512
            // }
            // if (end_block === 181940) {
            //     end_block += 576
            // }
            // if (end_block === 358536) {
            //     end_block += 576
            // }

            //intrface 
            if (end_block === 536) {
                end_block += 64
            }

            if (XFA.type_s === "link") {
                end_block = dyn_link(end_block, mid, XFA.type_data[0].section_04.low_section_00[0])
            } else if (XFA.type_s === "interface") {
                end_block = dyn_interface(end_block, mid, XFA, mid_section_2)
                console.log(global_offset_array)
            } else if (XFA.type_s === "car") {// later
            }

        } else if (XFA.type_s === "share") {
            end_block = dyn_share_mid_section(temp_offset, mid, XFA, offset)
        }

        if (XFA.texture_animations.length) {
            set_u32(offset + 60, tex_anims - mid, is_little_endian)

            for (let i = 0; i < XFA.texture_animations.length; i++) {
                set_u32(tex_anims + (i * 12), end_block - mid, is_little_endian)

                end_block = dyn_texture_animations(end_block, XFA.texture_animations[i])
            }
        }
        function dyn_texture_animations(offset, XFA) {
            let end_block = offset + 48

            if (XFA.pattern_04.length) {
                set_u32(offset + 4, end_block - mid, is_little_endian)
                end_block = dyn_texture_animations_04(end_block, XFA.pattern_04[0])
                global_offset_array.push(offset + 4 - mid)
            }

            // if (XFA.pattern_04.length) {
            //     set_u32(offset + 4, end_block - mid, is_little_endian)
            //     global_offset_array.push(offset + 4 - mid)
            //     end_block = dyn_texture_animations_04(end_block, XFA.pattern_04[0])
            // }

            if (XFA.translation_20.length) {
                let temp_offset = end_block
                set_u32(offset + 16, XFA.translation_20.length, is_little_endian)
                set_u32(offset + 20, end_block - mid, is_little_endian)
                global_offset_array.push(offset + 20 - mid)

                end_block += XFA.translation_20.length * 16

                for (let i = 0; i < XFA.translation_20.length; i++) {
                    dyn_texture_animations_04_20(temp_offset + (i * 16), XFA.translation_20[i])
                }

            }

            return end_block

        }
        function dyn_texture_animations_04(offset, XFA) {
            let end_block = offset + 32

            set_u8(offset + 11, XFA.unknown_11, is_little_endian)
            set_u32(offset + 20, XFA.time_20, is_little_endian)

            if (XFA.textures_04.length) {
                let temp_offset = end_block
                set_u32(offset + 0, XFA.textures_04.length, is_little_endian)
                set_u32(offset + 4, end_block - mid, is_little_endian)
                global_offset_array.push(offset + 4 - mid)
                end_block += divisible(XFA.textures_04.length * 4, 16)

                for (let i = 0; i < XFA.textures_04.length; i++) {
                    dyn_texture_animations_04_04(temp_offset + (i * 4), XFA.textures_04, i)
                }
            }

            return end_block

        }
        function dyn_texture_animations_04_04(offset, XFA, i) {
            if (XFA[i] != -1) {
                set_u16(offset + 0, XFA[i][0][1], is_little_endian)
                set_u16(offset + 2, 52428, is_little_endian)
                texture_offset_index_array.push([offset + 0 - mid, XFA[i][0][1], XFA[i][0][2]])
            }
        }
        function dyn_texture_animations_04_20(offset, XFA) {
            set_f32(offset + 0, XFA.x_00, is_little_endian)
            set_f32(offset + 4, XFA.y_04, is_little_endian)
            set_u8(offset + 9, XFA.unknown_09, is_little_endian)
            set_f32(offset + 12, XFA.time_12, is_little_endian)
        }

        //loading.xpc testing
        if (end_block === 9816) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 67884) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 129112) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 190340) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 251568) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 312796) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 374024) {
            end_block -= 8
            //FIX i have no idea why its -8
        } else if (end_block === 387556) {
            end_block -= 8
            //FIX i have no idea why its -8
        }

        //autosave
        // if (end_block === 163008) {
        //     end_block -= 8
        // } else if (end_block === 340052) {
        //     end_block -= 8
        // } else if (end_block === 516648) {
        //     end_block -= 8
        // }

        //intrface

        if (end_block === 10408) {
            end_block -= 8
        } else if (end_block === 12260) {
            end_block -= 8
        } else if (end_block === 41024424) {
            end_block += 4
        } else if (end_block === 41588052) {
            end_block -= 8
        } else if (end_block === 42280848) {
            end_block -= 8
        } else if (end_block === 42550492) {
            end_block -= 8
        } else if (end_block === 45191372) {
            end_block -= 8
        } else if (end_block === 45595000) {
            end_block -= 8
        } else if (end_block === 48077260) {
            end_block -= 8
        } else if (end_block === 49860248) {
            end_block -= 8
        } else if (end_block === 52702736) {
            end_block -= 8
        } else if (end_block === 54267688) {
            end_block -= 4
        } else if (end_block === 54501012) {
            end_block -= 8
        } else if (end_block === 55222092) {
            end_block -= 4
        }
        

        

        dyn_file_patcher_1(patch_list_1, mid, XFA)

        // let temp_end = end_block - offset

        // end_block += divisible(temp_end, 16) - temp_end

        if (global_offset_array.length != 0) {
            set_u32(offset, end_block - mid, is_little_endian)
        }

        end_block = dyn_file_patcher_2(end_block, mid, XFA)

        return end_block

    }

    function dyn_file_patcher_1(offset, mid) {
        let i = 0
        for (let t_i = 0; t_i < texture_offset_index_array.length; t_i++,
        i++) {
            set_u32(offset + (i * 8), texture_offset_index_array[t_i][0], is_little_endian)
            set_u16(offset + (i * 8) + 4, texture_offset_index_array[t_i][1], is_little_endian)
            set_u16(offset + (i * 8) + 6, texture_offset_index_array[t_i][2], is_little_endian)
        }
        for (let ta_i = 0; ta_i < texture_anim_offset_index_array.length; ta_i++,
        i++) {
            set_u32(offset + (i * 8), texture_anim_offset_index_array[ta_i][0], is_little_endian)
            set_u16(offset + (i * 8) + 4, texture_anim_offset_index_array[ta_i][1], is_little_endian)
            set_u16(offset + (i * 8) + 6, texture_anim_offset_index_array[ta_i][2], is_little_endian)
        }
        for (let s_i = 0; s_i < sound_offset_index_array.length; s_i++,
        i++) {
            set_u32(offset + (i * 8), sound_offset_index_array[s_i][0], is_little_endian)
            set_u16(offset + (i * 8) + 4, sound_offset_index_array[s_i][1], is_little_endian)
            set_u16(offset + (i * 8) + 6, sound_offset_index_array[s_i][2], is_little_endian)
        }
    }
    function dyn_file_patcher_2(offset, mid) {
        let i = 0
        for (let m_i = 0; m_i < model_offset_index_array.length; m_i++,
        i += 8) {
            // set_u32(offset + (i * 8), model_offset_index_array[i], is_little_endian)
            set_u32(offset + i, model_offset_index_array[m_i][0], is_little_endian)
            set_u16(offset + i + 4, model_offset_index_array[m_i][1], is_little_endian)
            set_u16(offset + i + 6, model_offset_index_array[m_i][2], is_little_endian)
        }
        for (let g_i = 0; g_i < global_offset_array.length; g_i++,
        i += 4) {
            set_u32(offset + i, global_offset_array[g_i], is_little_endian)
        }
        return offset + i
    }

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

}

function divisible(value, divisibility) {
    let temp_value = value
    while ((temp_value) % divisibility !== 0) {
        temp_value++
    }
    return temp_value
}
function replacement_divisibility(value, divisibility, offset, replacement) {
    let temp_value = value
    let i = 0
    while ((temp_value) % divisibility !== 0) {
        set_u8(offset + i, replacement)
        temp_value++
        i++
    }
    return temp_value
}
function dyn_string(offset, XFA_string, mid, divis) {
    if (divis === undefined) {
        divis = 16
    }
    let i = 0
    if (XFA_string.length) {

        for (; i < XFA_string.length; i++) {
            set_u8(offset + i, XFA_string[i].charCodeAt())
        }
        i++
        i = divisible(i, divis)
    }
    return offset + i
}

function generate_id_offset_array(array, XFA) {
    if (XFA.length !== null) {

        array.push({
            a_ids: [],
            a_offsets: []
        })
        for (let i = 0; i < XFA.length; i++) {
            array[0].a_ids.push(XFA[i].id)
            array[0].a_offsets.push(false)
        }
    }
}
