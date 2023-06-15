function dyn_interface(offset, mid, XFA, old_offset) {

    //layer type 
    // 3 = model
    let main_XFA = XFA

    XFA = XFA.type_data[0].section_04.low_section_00[0]
    let outer_XFA = XFA
    let end_block = offset

    generate_id_offset_array(frame_array = [], XFA.frames)
    generate_id_offset_array(text_array = [], XFA.texts)
    generate_id_offset_array(font_array = [], XFA.fonts)
    generate_id_offset_array(multi_font_array = [], XFA.multi_fonts)
    generate_id_offset_array(interface_model_00_array = [], XFA.interface_model_00)
    generate_id_offset_array(interface_model_04_array = [], XFA.interface_model_04)
    generate_id_offset_array(frame_sub_model_08_array = [], XFA.frame_sub_model)
    generate_id_offset_array(spark_array = [], XFA.sparklers)
    generate_id_offset_array(setting_array = [], XFA.settings)

    end_block = dyn_multilink(XFA.top_frame, frame_array, dyn_frame, outer_XFA.frames, old_offset, mid, end_block, true)

    return end_block

    function dyn_frame(offset, XFA) {
        let end_block = offset + 80

        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u16(offset + 2, XFA.unknown_02, is_little_endian)

        set_u32(offset + 16, XFA.unknown_16, is_little_endian)
        set_u32(offset + 20, XFA.unknown_20, is_little_endian)
        set_u32(offset + 24, XFA.unknown_24, is_little_endian)

        set_f32(offset + 60, XFA.unknown_60, is_little_endian)

        if (XFA.varibles_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            end_block = dyn_varibles(offset + 80, XFA.varibles_04[0].section_04)
            global_offset_array.push(offset + 4 - mid)
        }
        if (XFA.section_12.length !== 0) {
            let offset_12 = end_block
            set_u32(offset + 8, XFA.section_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            end_block += divisible(XFA.section_12.length * 28, 16)
            for (let i = 0; i < XFA.section_12.length; i++) {
                end_block = dyn_frame_12(offset_12 + (i * 28), XFA.section_12[i], end_block)
            }
        }

        end_block = dyn_multilink(XFA.settings_link_28, setting_array, dyn_setting, outer_XFA.settings, offset + 28, mid, end_block)
        end_block = dyn_multilink(XFA.settings_link_36, setting_array, dyn_setting, outer_XFA.settings, offset + 36, mid, end_block)
        end_block = dyn_multilink(XFA.settings_link_40, setting_array, dyn_setting, outer_XFA.settings, offset + 40, mid, end_block)

        if (XFA.section_48.length !== 0) {
            set_u32(offset + 44, 1, is_little_endian)
            set_u32(offset + 48, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 48 - mid)
            end_block = dyn_frame_section_48(end_block, XFA.section_48[0])
        }
        if (XFA.section_56.length !== 0) {
            set_u32(offset + 56, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 56 - mid)
            end_block = dyn_frame_section_56(end_block, XFA.section_56[0])
        }
        if (XFA.layers_72.length !== 0) {
            set_u32(offset + 68, XFA.layers_72.length, is_little_endian)
            set_u32(offset + 72, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 72 - mid)
            let offset_layer = end_block
            end_block += divisible(XFA.layers_72.length * 100, 16)
            for (let i = 0; i < XFA.layers_72.length; i++) {
                end_block = dyn_layer(offset_layer + (i * 100), XFA.layers_72[i], end_block)
            }

        }

        if (debug) {
            set_u32(offset + 0, 1162695238, true)
        }

        return end_block
    }

    function dyn_varibles(offset, XFA) {
        let end_block = offset + 16 + divisible(XFA.length * 36, 16)
        if (XFA.length !== 0) {
            set_u32(offset + 0, XFA.length, is_little_endian)
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            for (let i = 0; i < XFA.length; i++) {
                end_block = dyn_varibles_1(offset + 16 + (i * 36), XFA[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 1380013638, true)
        }

        return end_block
    }
    function dyn_varibles_1(offset, XFA, end_block) {
        if (XFA.name_00 !== "") {
            set_u32(offset + 0, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 0 - mid)
            end_block = dyn_string(end_block, XFA.name_00, mid)
        }

        set_u8(offset + 4, XFA.type_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_u8(offset + 6, XFA.unknown_06, is_little_endian)
        set_u8(offset + 7, XFA.unknown_07, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        set_u32(offset + 16, XFA.unknown_16, is_little_endian)
        set_u32(offset + 20, XFA.unknown_20, is_little_endian)
        set_u32(offset + 24, XFA.unknown_24, is_little_endian)
        set_u32(offset + 28, XFA.unknown_28, is_little_endian)
        set_u8(offset + 32, XFA.unknown_32, is_little_endian)
        set_u8(offset + 33, XFA.unknown_33, is_little_endian)

        if (XFA.type_more_settings_12.length !== 0) {
            set_u32(offset + 12, end_block - mid, is_little_endian)
            if (XFA.type_04 === 1) {
                end_block = dyn_varibles_1_t1(end_block, XFA.type_more_settings_12[0])
            } else if (XFA.type_04 === 5) {
                end_block = dyn_varibles_1_t5(end_block, XFA.type_more_settings_12[0])
            } else if (XFA.type_04 === 7) {
                end_block = dyn_varibles_1_t7(end_block, XFA.type_more_settings_12[0])
            } else if (XFA.type_04 === 8) {
                end_block = dyn_varibles_1_t8(end_block, XFA.type_more_settings_12[0], end_block)
            } else if (XFA.type_04 === 9) {
                end_block = dyn_varibles_1_t9(end_block, XFA.type_more_settings_12[0], end_block)
            }
            global_offset_array.push(offset + 12 - mid)
        }
        if (debug) {
            set_u32(offset + 0, 1061117782, true)
        }

        return end_block
    }

    function dyn_varibles_1_t1(offset, XFA) {

        set_u32(offset + 4, 50, is_little_endian)
        set_u32(offset, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, offset + 16 - mid, is_little_endian)
        global_offset_array.push(offset + 4 - mid)
        end_block = dyn_varibles_1_t1_1(offset + 16, XFA.more_settings_04[0])

        if (debug) {
            set_u32(offset + 0, 1061117782, true)
        }

        return end_block
    }
    function dyn_varibles_1_t1_1(offset, XFA) {
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 825241940, true)
        }

        return offset + 16
    }
    function dyn_varibles_1_t5(offset, XFA) {
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 894721878, true)
        }

        return offset + 16
    }
    function dyn_varibles_1_t7(offset, XFA) {
        set_u32(offset + 1, XFA.unknown_01, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 928276310, true)
        }

        return offset + 16
    }
    function dyn_varibles_1_t8(offset, XFA, end_block) {

        if (XFA.more_settings.length) {
            set_u32(offset + 0, XFA.more_settings.length, is_little_endian)
            set_u32(offset + 4, end_block + 16 - mid, is_little_endian)
            end_block = offset + 16 + divisible((XFA.more_settings.length * 12), 16)
            global_offset_array.push(offset + 4 - mid)
         
            for (let i = 0; i < XFA.more_settings.length; i++) {
                end_block = dyn_varibles_1_t8_1(offset + 16 + (i * 12), XFA.more_settings[i], end_block)
            }
        }
        if (debug) {
            set_u32(offset + 0, 945053526, true)
        }

        return end_block
    }
    function dyn_varibles_1_t8_1(offset, XFA, end_block) {
        //
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u8(offset + 3, XFA.unknown_03, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)

        if (XFA.string_08 !== null) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            end_block = dyn_string(end_block, XFA.string_08, mid)
        }

        if (debug) {
            set_u32(offset + 0, 825243732, true)
        }

        return end_block
    }
    function dyn_varibles_1_t9(offset, XFA, end_block) {
        end_block += 16
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u8(offset + 3, XFA.unknown_03, is_little_endian)

        if (XFA.string_04 !== null) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_string(end_block, XFA.string_04, mid)
        }
        if (XFA.string_08 !== null) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            end_block = dyn_string(end_block, XFA.string_08, mid)
        }

        if (debug) {
            set_u32(offset + 0, 961830742, true)
        }

        return end_block
    }

    //////////////
    ///////////////
    //////////////
    //////////////
    ///////////////
    ////////////////
    //////////////
    /////////////////

    function dyn_frame_12(offset, XFA, end_block) {
        set_u32(offset + 0, XFA.type_00, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            if (XFA.type_00 === 1026) {
                end_block = dyn_frame_12_04t1026(end_block, XFA.section_04[0])
            } else if (XFA.type_00 === 1027) {
                end_block = dyn_frame_12_04t1027(end_block, XFA.section_04[0])
            }
            global_offset_array.push(offset + 4 - mid)
        }

        if (XFA.section_16.length !== 0) {
            let offset_16 = end_block
            set_u32(offset + 12, XFA.section_16.length, is_little_endian)
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block += divisible(XFA.section_16.length * 8, 16)
            for (let i = 0; i < XFA.section_16.length; i++) {
                end_block = dyn_frame_12_16(offset_16 + (i * 8), XFA.section_16[i], end_block)
            }
        }
        if (XFA.section_24.length !== 0) {
            let temp_offset = end_block
            set_u32(offset + 20, XFA.section_24.length, is_little_endian)
            set_u32(offset + 24, end_block - mid, is_little_endian)
            end_block += divisible(XFA.section_24.length * 36, 16)
            global_offset_array.push(offset + 24 - mid)
            for (let i = 0; i < XFA.section_24.length; i++) {
                end_block = dyn_frame_12_24(temp_offset + (i * 36), XFA.section_24[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 842083654, true)
        }

        return end_block
    }
    function dyn_frame_12_04t1026(offset, XFA) {
        let end_block = offset + 32
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 12, XFA.unknown_12, is_little_endian)

        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            end_block = dyn_frame_12_04t1026_08(end_block, XFA.section_08[0])
            global_offset_array.push(offset + 8 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 909258801, true)
        }

        return end_block
    }
    function dyn_frame_12_04t1026_08(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_frame_12_04t1026_08_04(end_block, XFA.section_04[0])

        }
        return end_block
    }
    function dyn_frame_12_04t1026_08_04(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        return end_block
    }
    function dyn_frame_12_04t1027(offset, XFA) {
        let end_block = offset + 16
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 926036017, true)
        }

        return end_block
    }
    function dyn_frame_12_16(offset, XFA, end_block) {
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            end_block = dyn_frame_12_04t1026(end_block, XFA.section_04[0])
            global_offset_array.push(offset + 4 - mid)
        }
        if (debug) {
            set_u32(offset + 0, 909193777, true)
        }

        return end_block
    }
    function dyn_frame_12_24(offset, XFA, end_block) {
        set_u8(offset + 0, XFA.type_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u16(offset + 2, XFA.unknown_02, is_little_endian)
        set_u32(offset + 20, XFA.unknown_20, is_little_endian)

        if (XFA.type_00 === 1) {
            end_block = dyn_multilink(XFA.type_section_04, frame_array, dyn_frame, outer_XFA.frames, offset + 4, mid, end_block)
        } else if (XFA.type_00 === 11) {
            if (XFA.type_section_04.length !== 0) {
                set_u32(offset + 4, end_block - mid, is_little_endian)
                end_block = dyn_frame_12_24_04t11(end_block, XFA.type_section_04[0])
                global_offset_array.push(offset + 4 - mid)
            }

        }

        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            end_block = dyn_frame_12_24_08(end_block, XFA.section_08[0])
            global_offset_array.push(offset + 8 - mid)
        }

        end_block = dyn_multilink(XFA.settings_link_24, setting_array, dyn_setting, outer_XFA.settings, offset + 24, mid, end_block)

        if (debug) {
            set_u32(offset + 0, 875704881, true)
        }

        return end_block
    }

    function dyn_frame_12_24_04t11(offset, XFA) {
        let end_block = offset + 16
        if (XFA.section_04.length !== 0) {
            let temp_offset = end_block
            set_u32(offset + 0, XFA.section_04.length, is_little_endian)
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block += divisible(XFA.section_04.length * 12, 16)
            for (let i = 0; i < XFA.section_04.length; i++) {
                end_block = dyn_frame_12_24_04t11_04(temp_offset + (i * 12), XFA.section_04[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 825316402, true)
        }

        return end_block
    }

    function dyn_frame_12_24_04t11_04(offset, XFA, end_block) {
        set_u16(offset + 4, XFA.type_04, is_little_endian)

        if (XFA.type_04 === 0 || XFA.type_04 === 1) {
            if (XFA.type_section_08.length) {
                set_u32(offset + 8, end_block - mid, is_little_endian)
                if (XFA.type_04 === 0) {
                    end_block = dyn_frame_12_24_04t11_04_08t0(end_block, XFA.type_section_08[0])
                } else {
                    end_block = dyn_frame_12_24_04t11_04_08t1(end_block, XFA.type_section_08[0])
                }
                global_offset_array.push(offset + 8 - mid)
            }
            //FIX
        } else if (XFA.type_04 === 3) {
            end_block = dyn_multilink(XFA.type_section_08, setting_array, dyn_setting, outer_XFA.settings, offset + 8, mid, end_block)
        } else if (XFA.type_04 === 100 || XFA.type_04 === 101) {
            end_block = dyn_multilink(XFA.type_section_08, frame_array, dyn_frame, outer_XFA.frames, offset + 8, mid, end_block)
        }

        if (XFA.section_00.length !== 0) {
            set_u32(offset + 0, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 0 - mid)
            end_block = dyn_frame_12_24_04t11_04_00(end_block, XFA.section_00[0])

        }

        if (debug) {
            set_u32(offset + 0, 875573553, true)
        }

        return end_block
    }

    function dyn_frame_12_24_04t11_04_00(offset, XFA) {
        if (debug) {
            set_u32(offset + 0, 808465456, true)
        }

        // no values?
        return offset + 16
    }

    function dyn_frame_12_24_04t11_04_08t0(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_u16(offset + 6, XFA.unknown_06, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 810824752, true)
        }

        return end_block
    }
    function dyn_frame_12_24_04t11_04_08t1(offset, XFA) {
        let end_block = offset + 16
        if (XFA.section_00.length !== 0) {
            set_u32(offset + 0, end_block - mid, is_little_endian)
            end_block = dyn_frame_12_24_04t11_04_08t1_00(end_block, XFA.section_00[0])
            global_offset_array.push(offset + 0 - mid)
        }
        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            end_block = dyn_frame_12_24_04t11_04_08t1_00_04(end_block, XFA.section_04[0])
            global_offset_array.push(offset + 4 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 827601968, true)
        }

        return end_block
    }
    function dyn_frame_12_24_04t11_04_08t1_00(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_frame_12_24_04t11_04_08t1_00_04(end_block, XFA.section_04[0])

        }

        if (debug) {
            set_u32(offset + 0, 808464724, true)
        }

        return end_block
    }
    function dyn_frame_12_24_04t11_04_08t1_00_04(offset, XFA) {
        let end_block = offset + 16
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 875573296, true)
        }

        return end_block
    }
    function dyn_frame_12_24_08(offset, XFA) {
        let end_block = offset + 16

        if (XFA.section_00.length !== 0) {
            set_u32(offset + 0, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 0 - mid)
            end_block = dyn_frame_12_24_08_00(end_block, XFA.section_00[0])

        }
        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_frame_12_24_08_00(end_block, XFA.section_04[0])
        }

        if (debug) {
            set_u32(offset + 0, 942683186, true)
        }

        return end_block
    }
    function dyn_frame_12_24_08_00(offset, XFA) {
        let end_block = offset + 16

        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        if (debug) {
            set_u32(offset + 0, 808466480, true)
        }

        return end_block
    }

    //////////////
    ///////////////
    //////////////
    //////////////
    ///////////////
    ////////////////
    //////////////
    /////////////////
    //////////////
    ///////////////
    //////////////

    function dyn_setting(offset, XFA) {

        if (offset === 42273152) {
            console.log('t')
        }
        
        let end_block = offset + 32
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 8, XFA.unknown_08, is_little_endian)
        set_u16(offset + 10, XFA.unknown_10, is_little_endian)

        if (XFA.section_16.length !== 0) {
            let offset_16 = end_block
            set_u32(offset + 12, XFA.section_16.length, is_little_endian)
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block += XFA.section_16.length * 16
            for (let i = 0; i < XFA.section_16.length; i++) {
                end_block = dyn_setting_16(offset_16 + (i * 16), XFA.section_16[i], end_block)
            }
        }
        if (debug) {
            set_u32(offset + 0, 757935443, true)
        }

        return end_block

    }
    function dyn_setting_16(offset, XFA, end_block) {
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)

        if (XFA.section_04.length !== 0) {
            let offset_04 = end_block
            set_u32(offset + 0, XFA.section_04.length, is_little_endian)
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block += XFA.section_04.length * 16
            for (let i = 0; i < XFA.section_04.length; i++) {
                end_block = dyn_setting_16_04(offset_04 + (i * 16), XFA.section_04[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 909192531, true)
        }

        return end_block

    }
    function dyn_setting_16_04(offset, XFA, end_block) {

        if (XFA.section_00.length !== 0) {
            set_u32(offset + 0, end_block - mid, is_little_endian)
            end_block = dyn_setting_16_04_00(end_block, XFA.section_00[0])
            global_offset_array.push(offset + 0 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 875574867, true)
        }

        return end_block

    }
    function dyn_setting_16_04_00(offset, XFA) {
        let end_block = offset + 32
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_u8(offset + 6, XFA.unknown_06, is_little_endian)
        set_f32(offset + 16, XFA.unknown_16, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)

        if (XFA.sound_00.length) {
            set_u16(offset + 0, XFA.sound_00[0][1], is_little_endian)
            set_u16(offset + 2, XFA.sound_00[0][2], is_little_endian)
            sound_offset_index_array.push([offset + 0 - mid, XFA.sound_00[0][1], XFA.sound_00[0][2]])

        }
        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            dyn_setting_16_04_00_08(end_block, XFA.section_08[0])
            end_block += 16
        }

        if (debug) {
            set_u32(offset + 0, 808465491, true)
        }

        return end_block

    }

    function dyn_setting_16_04_00_08(offset, XFA) {
        set_u8(offset + 8, XFA.unknown_08, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 942682195, true)
        }
    }

    //////////////
    ///////////////
    ////////////////
    //////////////
    /////////////////
    function dyn_frame_section_48(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 942943558, true)
        }
        return offset + 16
    }
    function dyn_frame_section_56(offset, XFA) {

        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        if (debug) {
            set_u32(offset + 0, 909454662, true)
        }

        return offset + 16
    }
    function dyn_layer(offset, XFA, end_block) {

        set_u32(offset + 12, XFA.unknown_12, is_little_endian)
        set_u16(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 18, XFA.unknown_18, is_little_endian)
        set_u8(offset + 19, XFA.type_19, is_little_endian)

        set_u8(offset + 28, XFA.unknown_28, is_little_endian)
        set_u8(offset + 29, XFA.unknown_29, is_little_endian)
        set_u8(offset + 30, XFA.unknown_30, is_little_endian)
        set_u8(offset + 31, XFA.unknown_31, is_little_endian)

        set_f32(offset + 36, XFA.x_position_36, is_little_endian)
        set_f32(offset + 40, XFA.y_position_40, is_little_endian)

        set_u32(offset + 56, XFA.unknown_56, is_little_endian)
        set_u32(offset + 60, XFA.unknown_60, is_little_endian)

        for (let i = 76; i < 100; i += 4) {
            set_u32(offset + i, 0xffffffff, is_little_endian)
        }

        set_u32(offset + 0, end_block - mid, is_little_endian)
        end_block = dyn_string(end_block, XFA.name_00, mid)
        global_offset_array.push(offset + 0 - mid)

        if (XFA.section_08.length !== 0) {

            set_u32(offset + 8, end_block - mid, is_little_endian)
            end_block = dyn_layer_08(end_block, XFA.section_08[0])
            global_offset_array.push(offset + 8 - mid)
        }
        if (XFA.section_20.length !== 0) {
            set_u32(offset + 20, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 20 - mid)
            if (XFA.type_19 === 0) {
                end_block = dyn_layer_20t0(end_block, XFA.section_20[0])
            } else if (XFA.type_19 === 1) {
                end_block = dyn_layer_20t1(end_block, XFA.section_20[0])
            }

        }
        if (XFA.type_section_24.length !== 0) {
            set_u32(offset + 24, end_block - mid, is_little_endian)
            if (XFA.type_19 === 0) {
                //texture
                end_block = dyn_layer_24t0(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 1) {
                //text
                end_block = dyn_layer_24t1(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 3) {
                //model
                end_block = dyn_layer_24t3(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 5) {
                //unknown
                end_block = dyn_layer_24t5(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 6) {
                //recursive
                end_block = dyn_layer_24t6(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 7) {
                //recursive
                end_block = dyn_layer_24t6(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 10) {
                //box?
                end_block = dyn_layer_24t10(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 12) {
                //helpervars?
                end_block = dyn_layer_24t12(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 13) {
                //frame?
                end_block = dyn_layer_24t13(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 14) {
                //manager?
                end_block = dyn_layer_24t14(end_block, XFA.type_section_24[0])
            } else if (XFA.type_19 === 15) {
                //sparkler?
                end_block = dyn_layer_24t15(end_block, XFA.type_section_24[0])
            }
            global_offset_array.push(offset + 24 - mid)
        }

        if (XFA.section_32.length !== 0) {

            set_u32(offset + 32, end_block - mid, is_little_endian)
            end_block = dyn_layer_32(end_block, XFA.section_32[0])
            global_offset_array.push(offset + 32 - mid)
        }

        //48 comes before 44?
        if (XFA.manager_name_48 !== null) {
            set_u32(offset + 48, end_block - mid, is_little_endian)
            end_block = dyn_string(end_block, XFA.manager_name_48, mid)
            global_offset_array.push(offset + 48 - mid)
        }

        if (XFA.section_44.length !== 0) {

            set_u32(offset + 44, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 44 - mid)
            end_block = dyn_layer_44(end_block, XFA.section_44[0])
        }

        if (XFA.animation_52.length !== 0) {

            set_u32(offset + 52, end_block - mid, is_little_endian)
            end_block = dyn_layer_52(end_block, XFA.animation_52[0])
            global_offset_array.push(offset + 52 - mid)
        }
        if (XFA.section_72.length !== 0) {
            let offset_72 = end_block
            end_block = offset_72 + divisible((XFA.section_72.length * 12), 16)
            set_u32(offset + 68, XFA.section_72.length, is_little_endian)
            set_u32(offset + 72, offset_72 - mid, is_little_endian)
            global_offset_array.push(offset + 72 - mid)
            for (let i = 0; i < XFA.section_72.length; i++) {
                end_block = dyn_layer_72(offset_72 + (i * 12), XFA.section_72[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 1380276556, true)
        }

        return end_block
    }

    function dyn_layer_08(offset, XFA) {
        let end_block = offset + 16

        set_u8(offset + 0, XFA.unknown_00, is_little_endian)

        if (XFA.section_08.length !== 0) {
            let temp_offset = end_block
            set_u32(offset + 4, XFA.section_08.length, is_little_endian)
            set_u32(offset + 8, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            end_block += divisible((XFA.section_08.length * 12), 16)
            for (let i = 0; i < XFA.section_08.length; i++) {
                end_block = dyn_layer_08_08(temp_offset + (i * 12), XFA.section_08[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 942681420, true)
        }

        return end_block

    }
    function dyn_layer_08_08(offset, XFA, end_block) {
        set_u8(offset + 0, XFA.type_00, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            if (XFA.type_00 === 2) {
                end_block = dyn_layer_08_08_04t2(end_block, XFA.section_04[0])
            } else if (XFA.type_00 === 6) {
                end_block = dyn_layer_08_08_04t6(end_block, XFA.section_04[0])
            }
            global_offset_array.push(offset + 4 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 942684208, true)
        }

        return end_block

    }
    function dyn_layer_08_08_04t2(offset, XFA) {
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            offset += 16
        }

        if (debug) {
            set_u32(offset + 0, 844380208, true)
        }

        return offset + 16
    }

    function dyn_layer_08_08_04t6(offset, XFA) {
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 911489072, true)
        }

        return offset + 16

    }

    function dyn_layer_20t0(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 16, XFA.unknown_16, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 808594764, true)
        }

        return offset + 32
    }
    function dyn_layer_20t1(offset, XFA) {
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        if (debug) {
            set_u32(offset + 0, 808464972, true)
        }

        return offset + 16
    }

    function dyn_layer_24t0(offset, XFA) {
        let end_block = offset + 16
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 12, XFA.unknown_12, is_little_endian)
        set_u8(offset + 13, XFA.unknown_13, is_little_endian)


        if (XFA.unknown_00 === 1 && typeof(XFA.texture_04) === "string") {
            // model
            end_block = dyn_multilink(XFA.texture_04, model_array, dyn_model, main_XFA.models, offset + 4, mid, end_block,true,true,"model")
        //???
        }else if (XFA.texture_04.length) {
            set_u16(offset + 4, XFA.texture_04[0][1], is_little_endian)
            set_u16(offset + 6, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 4 - mid, XFA.texture_04[0][1], XFA.texture_04[0][2]])
        } else if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, offset + 16 - mid, is_little_endian)
            end_block = dyn_layer_24t0_08(end_block, XFA.section_08[0])
            global_offset_array.push(offset + 8 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 875704396, true)
        }

        return end_block
    }

    function dyn_layer_24t0_08(offset, XFA) {
        set_u8(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 9, XFA.unknown_09, is_little_endian)
        set_u8(offset + 11, XFA.unknown_11, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u16(offset + 18, XFA.unknown_18, is_little_endian)
        set_u32(offset + 20, XFA.timer_20, is_little_endian)

        if (XFA.textures_04.length !== 0) {
            set_u32(offset + 0, XFA.textures_04.length, is_little_endian)
            set_u32(offset + 4, offset + 32 - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            let i = 0
            for (; i < XFA.textures_04.length; i++) {
                dyn_layer_24t0_08_04(offset + 32 + (i * 4), XFA.textures_04[i])
            }
            offset += divisible(i * 4, 16)
        }
        return offset + 32
    }
    function dyn_layer_24t0_08_04(offset, XFA) {
        if (XFA.texture_00 != -1) {
            set_u16(offset + 0, XFA.texture_00[0][1], is_little_endian)
            set_u16(offset + 2, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 0 - mid, XFA.texture_00[0][1], XFA.texture_00[0][2]])
        }

    }

    function dyn_layer_24t1(offset, XFA) {
        let end_block = offset + 32
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u8(offset + 3, XFA.unknown_03, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 17, XFA.unknown_17, is_little_endian)
        set_u16(offset + 18, XFA.unknown_18, is_little_endian)
        set_u16(offset + 20, XFA.unknown_20, is_little_endian)
        set_u8(offset + 22, XFA.unknown_22, is_little_endian)
        set_u8(offset + 23, XFA.unknown_23, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)

        if (XFA.single_string_link_04 !== 0) {
            end_block = dyn_multilink(XFA.single_string_link_04, text_array, dyn_interface_texts, outer_XFA.texts, offset + 4, mid, end_block)
        } else {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            end_block = dyn_layer_24t1_08(end_block, XFA.multi_string_08[0])
            global_offset_array.push(offset + 8 - mid)
        }

        if (XFA.unknown_02 === 0) {
            end_block = dyn_multilink(XFA.font_link_12, font_array, dyn_interface_fonts, outer_XFA.fonts, offset + 12, mid, end_block)
        } else if (XFA.unknown_02 === 1) {
            end_block = dyn_multilink(XFA.font_link_12, multi_font_array, dyn_interface_multi_fonts, outer_XFA.multi_fonts, offset + 12, mid, end_block)
        }

        if (debug) {
            set_u32(offset + 0, 827611220, true)
        }

        return end_block

    }

    function dyn_layer_24t1_08(offset, XFA) {
        let end_block = offset + 16 + divisible((XFA.strings_04.length * 8), 16)

        set_u8(offset + 8, XFA.unknown_08, is_little_endian)
        set_u16(offset + 10, XFA.unknown_10, is_little_endian)

        if (XFA.strings_04.length !== 0) {
            set_u32(offset + 0, XFA.strings_04.length, is_little_endian)
            set_u32(offset + 4, offset + 16 - mid, is_little_endian)
            let i = 0
            global_offset_array.push(offset + 4 - mid)
            for (; i < XFA.strings_04.length; i++) {
                end_block = dyn_layer_24t1_08_04(offset + 16 + (i * 8), XFA.strings_04[i], end_block)
            }
        } else {
            set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        }
        if (debug) {
            set_u32(offset + 0, 942682452, true)
        }

        return end_block

    }

    function dyn_layer_24t1_08_04(offset, XFA, end_block) {
        return end_block = dyn_multilink(XFA.string_link_00, text_array, dyn_interface_texts, outer_XFA.texts, offset + 0, mid, end_block)
    }

    function dyn_interface_texts(offset, XFA) {
        let end_block = offset + 16
        if (XFA.section_00.length !== 0) {
            set_u32(offset, end_block - mid, is_little_endian)
            global_offset_array.push(offset - mid)
            end_block = dyn_interface_texts_00(offset + 16, XFA.section_00[0])
        }
        return end_block

    }
    function dyn_interface_texts_00(offset, XFA) {
        return end_block = dyn_string(offset, XFA.string, mid)
    }

    function dyn_interface_fonts(offset, XFA) {
        let end_block = offset + 48
        set_u8(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 9, XFA.unknown_09, is_little_endian)
        set_u8(offset + 10, XFA.unknown_10, is_little_endian)
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)

        set_u32(offset + 24, XFA.unknown_24, is_little_endian)

        dyn_patchlist(offset, XFA.texture_00, texture_offset_index_array)

        if (XFA.type_section_28.length !== 0) {
            set_u32(offset + 28, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 28 - mid)
            end_block = dyn_interface_fonts_28t1(end_block, XFA.type_section_28[0])
        }

        if (XFA.letter_list_36.length !== 0) {
            set_u32(offset + 32, XFA.letter_list_36.length, is_little_endian)
            set_u32(offset + 36, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 36 - mid)
            let i = 0
            for (; i < XFA.letter_list_36.length; i++) {
                dyn_interface_fonts_36(end_block + (i * 12), XFA.letter_list_36[i])
            }
            end_block += divisible((i * 12), 16)
        }

        if (debug) {
            set_u32(offset + 0, 1414418246, true)
        }

        return end_block

    }

    function dyn_interface_fonts_28t1(o, x) {
        set_f32(o + 0, x.unknown_00, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 827602994, true)
        }

        return o + 32
    }
    function dyn_interface_fonts_36(offset, XFA) {
        set_u32(offset + 0, XFA.letter_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 909333574, true)
        }
    }

    function dyn_interface_multi_fonts(offset, XFA) {
        let end_block = offset + 16

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            end_block = dyn_interface_multi_fonts_04(end_block, XFA.section_04[0])
            global_offset_array.push(offset + 4 - mid)
        }

        // if (debug) {
        //     set_u32(offset + 0, 1414418246, true)
        // }

        return end_block

    }

    function dyn_interface_multi_fonts_04(offset, XFA) {
        let end_block = offset + 48
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)

        end_block = dyn_multilink(XFA.font_link_12, font_array, dyn_interface_fonts, outer_XFA.fonts, offset + 12, mid, end_block)
        end_block = dyn_multilink(XFA.font_link_28, font_array, dyn_interface_fonts, outer_XFA.fonts, offset + 28, mid, end_block)
        end_block = dyn_multilink(XFA.font_link_32, font_array, dyn_interface_fonts, outer_XFA.fonts, offset + 32, mid, end_block)

        if (debug) {
            set_u32(offset + 0, 875582534, true)
        }

        return end_block
    }

    function dyn_patchlist(offset, XFA, array) {
        if (XFA !== -1) {
            set_u16(offset + 0, XFA[0][1], is_little_endian)
            set_u16(offset + 2, 52428, is_little_endian)
            array.push([offset + 0 - mid, XFA[0][1], XFA[0][2]])
        }
    }

    function dyn_layer_24t3(offset, XFA) {
        let end_block = offset + 32
        set_u32(offset + 12, XFA.unknown_12, is_little_endian)

        if (XFA.section_04.length) {
            let temp_offset = end_block

            set_u32(offset + 0, XFA.section_04.length, is_little_endian)
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block += divisible(XFA.section_04.length * 8, 16)

            for (let i = 0; i < XFA.section_04.length; i++) {
                end_block = dyn_layer_24t3_04(temp_offset + (i * 8), XFA.section_04[i], end_block)
            }

        }

        if (XFA.section_16.length !== 0) {
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block = dyn_layer_24t3_16(end_block, XFA.section_16[0])
        }

        if (debug) {
            set_u32(offset + 0, 757936980, true)
        }

        return end_block
    }

    function dyn_layer_24t3_04(offset, XFA, end_block) {

        end_block = dyn_multilink(XFA.frame_model_00_link, interface_model_00_array, dyn_interface_model_00, outer_XFA.interface_model_00, offset, mid, end_block)

        end_block = dyn_multilink(XFA.frame_model_04_link, interface_model_04_array, dyn_interface_model_04, outer_XFA.interface_model_04, offset + 4, mid, end_block)

        if (debug) {
            set_u32(offset + 0, 875574100, true)
        }
        return end_block
    }

    function dyn_interface_model_00(offset, XFA) {
        let end_block = offset + 80
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 36, XFA.unknown_36, is_little_endian)
        set_u8(offset + 48, XFA.unknown_48, is_little_endian)
        set_u8(offset + 49, XFA.unknown_49, is_little_endian)
        set_u8(offset + 50, XFA.unknown_50, is_little_endian)

        if (XFA.name_04 !== "") {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_string(end_block, XFA.name_04, mid)
        }

        end_block = dyn_multilink(XFA.frame_sub_model_08_link, frame_sub_model_08_array, dyn_frame_sub_model, outer_XFA.frame_sub_model, offset + 8, mid, end_block)

        end_block = dyn_multilink(XFA.model_animations_1_link, model_animations_1_array, dyn_model_animation_1, main_XFA.model_animations_1, offset + 12, mid, end_block,false,true)
        end_block = dyn_multilink(XFA.model_animations_2_link, model_animations_2_array, dyn_model_animation_2, main_XFA.model_animations_2, offset + 16, mid, end_block,false,true)

             // end_block = dyn_multiappend(XFA.model_animations_1, model_animations_1_array, dyn_model_animation_1,end_block, mid)
             // end_block = dyn_multiappend(XFA.model_animations_2, model_animations_2_array, dyn_model_animation_2,end_block, mid)

        
        // end_block = dyn_multilink(XFA.model_animations_2_link, model_animations_2_array, dyn_model_animation_2, main_XFA.model_animations_2, offset + 16, mid, end_block)

        if (XFA.section_24.length) {
            let temp_offset = end_block

            set_u32(offset + 20, XFA.section_24.length, is_little_endian)
            set_u32(offset + 24, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 24 - mid)
            end_block += divisible(XFA.section_24.length * 4, 16)

            for (let i = 0; i < XFA.section_24.length; i++) {
                end_block = dyn_frame_sub_model_08(temp_offset + (i * 4), XFA.section_24[i], end_block)
            }

        }

        if (XFA.section_32.length) {
            let temp_offset = end_block

            set_u32(offset + 28, XFA.section_32.length, is_little_endian)
            set_u32(offset + 32, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 32 - mid)
            end_block += divisible(XFA.section_32.length * 8, 16)

            for (let i = 0; i < XFA.section_32.length; i++) {
                end_block = dyn_frame_sub_model_16(temp_offset + (i * 8), XFA.section_32[i], end_block)
            }

        }

        if (XFA.section_52.length !== 0) {
            set_u32(offset + 52, end_block - mid, is_little_endian)
            dyn_interface_model_00_52(end_block, XFA.section_52[0])
            global_offset_array.push(offset + 52 - mid)
            end_block += 16
        }
        if (XFA.section_56.length !== 0) {
            set_u32(offset + 56, end_block - mid, is_little_endian)
            dyn_interface_model_00_52(end_block, XFA.section_56[0])
            global_offset_array.push(offset + 56 - mid)
            end_block += 16
        }
        if (XFA.section_64.length !== 0) {
            set_u32(offset + 64, end_block - mid, is_little_endian)
            dyn_interface_model_00_64(end_block, XFA.section_64[0])
            global_offset_array.push(offset + 64 - mid)
            end_block += 48
        }
        if (debug) {
            set_u32(offset + 0, 757936237, true)
        }

        return end_block

    }

    function dyn_frame_sub_model(offset, XFA) {
        let end_block = offset + 32
        end_block = dyn_multilink(XFA.model_animations_2_link, model_animations_2_array, dyn_model_animation_2, main_XFA.model_animations_2, offset + 0, mid, end_block,false,true)

        if (XFA.section_08.length) {
            let temp_offset = end_block

            set_u32(offset + 4, XFA.section_08.length, is_little_endian)
            set_u32(offset + 8, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            end_block += divisible(XFA.section_08.length * 4, 16)

            for (let i = 0; i < XFA.section_08.length; i++) {
                end_block = dyn_frame_sub_model_08(temp_offset + (i * 4), XFA.section_08[i], end_block)
            }

        }

        if (XFA.section_16.length) {
            let temp_offset = end_block

            set_u32(offset + 12, XFA.section_16.length, is_little_endian)
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block += divisible(XFA.section_16.length * 8, 16)

            for (let i = 0; i < XFA.section_16.length; i++) {
                end_block = dyn_frame_sub_model_16(temp_offset + (i * 8), XFA.section_16[i], end_block)
            }

        }

        if (debug) {
            set_u32(offset + 0, 760042310, true)
        }

        return end_block
    }
    function dyn_frame_sub_model_08(offset, XFA, end_block) {

        end_block = dyn_multilink(XFA.model_link, model_array, dyn_model, main_XFA.models, offset + 0, mid, end_block,true,true,"model")
          
        if (debug) {
            set_u32(offset + 0, 808468813, true)
        }
        return end_block
    }
    function dyn_frame_sub_model_16(offset, XFA, end_block) {

        set_u16(offset + 4, XFA.unknown_04, is_little_endian)

        end_block = dyn_multilink(XFA.model_link, model_array, dyn_model, main_XFA.models, offset + 0, mid, end_block,true,true,"model")


        if (debug) {
            set_u32(offset + 0, 875577677, true)
        }
        return end_block
    }

    function dyn_interface_model_00_52(offset, XFA) {

        
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 842346605, true)
        }
    }
    function dyn_interface_model_00_64(offset, XFA) {

        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 16, XFA.unknown_16, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)
        set_f32(offset + 32, XFA.unknown_32, is_little_endian)
      
        if (debug) {
            set_u32(offset + 0, 875966573, true)
        }

    }

    function dyn_interface_model_04(offset, XFA) {
        let end_block = offset + 32
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 10, XFA.unknown_10, is_little_endian)
        set_u32(offset + 12, XFA.unknown_12, is_little_endian)

        if (XFA.section_16.length !== 0) {
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block = dyn_interface_model_04_16(end_block, XFA.section_16[0])
        }

        
        if (debug) {
            set_u32(offset + 0, 757936493, true)
        }
        return end_block

    }
    function dyn_interface_model_04_16(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            end_block = dyn_interface_model_04_16_04(end_block, XFA.section_04[0])
            global_offset_array.push(offset + 4 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 909193581, true)
        }

        return end_block

    }
    function dyn_interface_model_04_16_04(offset, XFA) {
        let end_block = offset + 16
        //nothing?

        if (debug) {
            set_u32(offset + 0, 758526317, true)
        }
        return end_block

    }

    function dyn_layer_24t3_16(offset, XFA) {
        let end_block = offset + 16

        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            end_block = dyn_layer_24t3_16_08(end_block, XFA.section_08[0])
            global_offset_array.push(offset + 8 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 909194068, true)
        }

        return end_block

    }
    function dyn_layer_24t3_16_08(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u16(offset + 6, XFA.unknown_06, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 942683732, true)
        }
        return end_block

    }

    /////////////////////////////
    /////////////////////////////
    /////////////////////////////
    /////////////////////////////
    /////////////////////////////

    function dyn_layer_24t5(offset, XFA) {
        if (XFA.texture_00 != -1) {
            set_u16(offset + 0, XFA.texture_00[0][1], is_little_endian)
            set_u16(offset + 2, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 0 - mid, XFA.texture_00[0][1], XFA.texture_00[0][2]])
        }
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)

        return offset + 16
    }

    function dyn_layer_24t6(offset, XFA) {
        //also 7
        let end_block = offset + 16

        set_u8(offset + 4, XFA.unknown_04, is_little_endian)

        end_block = dyn_multilink(XFA.frame_link_00, frame_array, dyn_frame, outer_XFA.frames, offset, mid, end_block)

        if (XFA.section_12.length !== 0) {
            set_u32(offset + 8, XFA.section_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            let i = 0
            for (; i < XFA.section_12.length; i++) {
                dyn_layer_24t6_12(end_block + (i * 12), XFA.section_12[i])
            }
            end_block += divisible(i * 12, 16)
        }

        return end_block
    }

    function dyn_layer_24t6_12(offset, XFA) {
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
    }

    function dyn_layer_24t10(offset, XFA) {
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u32(offset + 12, XFA.unknown_12, is_little_endian)
        return offset + 16
    }

    function dyn_layer_24t12(offset, XFA) {
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        return offset + 16
    }
    function dyn_layer_24t13(offset, XFA) {
        let end_block = offset + 16
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_layer_24t13_04(end_block, XFA.section_04[0])
        }
        if (XFA.section_12.length !== 0) {
            set_u32(offset + 8, XFA.section_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            end_block = dyn_layer_24t13_12(end_block, XFA.section_12[0])
        }
        return end_block
    }
    function dyn_layer_24t13_04(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        return end_block
    }
    function dyn_layer_24t13_12(offset, XFA) {
        let end_block = offset + 16
        dyn_patchlist(offset, XFA.texture_00, texture_offset_index_array)
        return end_block
    }
    function dyn_layer_24t14(offset, XFA) {
        let end_block = offset + 288
        set_u8(offset + 272, XFA.unknown_272, is_little_endian)
        set_u8(offset + 273, XFA.unknown_273, is_little_endian)

        if (XFA.section_276.length !== 0) {
            set_u32(offset + 276, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 276 - mid)
            end_block = dyn_layer_24t14_276(end_block, XFA.section_276[0])
        }
        return end_block
    }
    function dyn_layer_24t14_276(offset, XFA) {
        let end_block = offset + 16
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u8(offset + 8, XFA.unknown_08, is_little_endian)
        return end_block
    }
    function dyn_layer_24t15(offset, XFA) {
        let end_block = offset + 16
        end_block = dyn_multilink(XFA.spark_link_00, spark_array, dyn_interface_sparkler, outer_XFA.sparklers, offset + 0, mid, end_block)
        return end_block
    }

    function dyn_interface_sparkler(offset, XFA) {
        let end_block = offset + 32

        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        if (XFA.section_16.length !== 0) {
            set_u32(offset + 12, XFA.section_16.length, is_little_endian)
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block = dyn_interface_sparkler_16(end_block, XFA.section_16[0])
        }

        return end_block

    }
    function dyn_interface_sparkler_16(offset, XFA) {
        let end_block = offset + 64

        dyn_patchlist(offset, XFA.texture_00, texture_offset_index_array)

        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 16, XFA.unknown_16, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)
        set_f32(offset + 28, XFA.unknown_28, is_little_endian)
        set_f32(offset + 32, XFA.unknown_32, is_little_endian)
        set_f32(offset + 36, XFA.unknown_36, is_little_endian)
        set_u32(offset + 40, XFA.unknown_40, is_little_endian)

        if (XFA.section_48.length !== 0) {
            set_u32(offset + 44, XFA.section_48.length, is_little_endian)
            set_u32(offset + 48, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 48 - mid)
            let i = 0
            for (; i < XFA.section_48.length; i++) {
                dyn_interface_sparkler_16_48(end_block + (i * 12), XFA.section_48[i])
            }
            end_block += divisible(i * 12, 16)
        }
        if (XFA.section_56.length !== 0) {
            set_u32(offset + 52, XFA.section_56.length, is_little_endian)
            set_u32(offset + 56, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 56 - mid)
            let i = 0
            for (; i < XFA.section_56.length; i++) {
                dyn_interface_sparkler_16_56(end_block + (i * 32), XFA.section_56[i])
            }
            end_block += i * 32
        }
        return end_block

    }

    function dyn_interface_sparkler_16_48(offset, XFA) {
        set_u8(offset + 0, XFA.color.R, is_little_endian)
        set_u8(offset + 1, XFA.color.G, is_little_endian)
        set_u8(offset + 2, XFA.color.B, is_little_endian)
        set_u8(offset + 3, XFA.color.A, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)

    }
    function dyn_interface_sparkler_16_56(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)
        set_f32(offset + 16, XFA.unknown_16, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)
        set_f32(offset + 28, XFA.unknown_28, is_little_endian)
    }
    //////////////
    /////////////
    /////////////

    function dyn_layer_32(offset, XFA) {
        let end_block = offset + 48
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u8(offset + 3, XFA.unknown_03, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)

        if (XFA.section_12.length !== 0) {
            set_u32(offset + 8, XFA.section_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            let i = 0
            for (; i < XFA.section_12.length; i++) {
                dyn_layer_32_12(end_block + (i * 24), XFA.section_12[i])
            }
            end_block += divisible(i * 24, 16)
        }

        if (XFA.section_20.length !== 0) {
            if (XFA.section_20.length > 1) {
              console.log(offset,XFA,XFA.section_20.length,'yeah\n')
            }
            let temp_offset = end_block
            set_u32(offset + 16, XFA.section_20.length, is_little_endian)
            set_u32(offset + 20, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 20 - mid)
            end_block += divisible(XFA.section_20.length * 12, 16)
            for (let i = 0; i < XFA.section_20.length; i++) {
                end_block = dyn_layer_32_20(temp_offset + (i * 12), XFA.section_20[i], end_block)
            }
        }
        if (XFA.section_28.length !== 0) {
            if (XFA.section_28.length > 1) {
              console.log(offset,XFA,XFA.section_28.length,'no\n')
            }
            let offset_20 = end_block
            set_u32(offset + 24, XFA.section_28.length, is_little_endian)
            set_u32(offset + 28, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 28 - mid)
            end_block += divisible(XFA.section_28.length * 12, 16)
            for (let i = 0; i < XFA.section_28.length; i++) {
                end_block = dyn_layer_32_28(offset_20 + (i * 12), XFA.section_28[i], end_block)
                //same structure as dyn_layer_32_20?
            }
        }
        if (XFA.section_36.length !== 0) {
            let offset_28 = end_block
            set_u32(offset + 32, XFA.section_36.length, is_little_endian)
            set_u32(offset + 36, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 36 - mid)
            end_block += divisible(XFA.section_36.length * 28, 16)
            for (let i = 0; i < XFA.section_36.length; i++) {
                end_block = dyn_frame_12(offset_28 + (i * 28), XFA.section_36[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 842214732, true)
        }

        return end_block
    }
    function dyn_layer_32_12(offset, XFA) {
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_u8(offset + 6, XFA.unknown_06, is_little_endian)
        set_u8(offset + 7, XFA.unknown_07, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u32(offset + 12, XFA.unknown_12, is_little_endian)
        set_u32(offset + 16, XFA.unknown_16, is_little_endian)
        set_u32(offset + 20, XFA.unknown_20, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 842084915, true)
        }

    }
    function dyn_layer_32_20(offset, XFA, end_block) {

        set_u16(offset + 4, XFA.unknown_04, is_little_endian)

        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            if (XFA.unknown_04 === 0) {
                end_block = dyn_layer_32_20_08t0(end_block, XFA.section_08[0])
            } else if (XFA.unknown_04 === 1) {
                end_block = dyn_layer_32_20_08t1(end_block, XFA.section_08[0])
            }
            global_offset_array.push(offset + 8 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 808596019, true)
        }

        return end_block
    }
    function dyn_layer_32_28(offset, XFA, end_block) {

        set_u16(offset + 4, XFA.unknown_04, is_little_endian)

        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            if (XFA.unknown_04 === 0) {
                end_block = dyn_layer_32_20_08t0(end_block, XFA.section_08[0])
            } else if (XFA.unknown_04 === 1) {
                end_block = dyn_layer_32_20_08t1(end_block, XFA.section_08[0])
            }
            global_offset_array.push(offset + 8 - mid)
        }

        if (debug) {
            set_u32(offset + 0, 942813747, true)
        }

        return end_block
    }
    function dyn_layer_32_20_08t0(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u16(offset + 6, XFA.unknown_06, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 812922928, true)
        }

        return end_block
    }
    function dyn_layer_32_20_08t1(offset, XFA) {
        let end_block = offset + 16

        if (XFA.section_00.length !== 0) {
            set_u32(offset + 0, end_block - mid, is_little_endian)
            end_block = dyn_layer_32_20_08t1_00(end_block, XFA.section_00[0])
            global_offset_array.push(offset + 0 - mid)
        }
        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_layer_32_20_08t1_04(end_block, XFA.section_04[0])
        }

        if (debug) {
            set_u32(offset + 0, 829700144, true)
        }

        return end_block
    }
    function dyn_layer_32_20_08t1_00(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            end_block = dyn_layer_32_20_08t1_00_04(end_block, XFA.section_04[0])
        }

        return end_block
    }
    function dyn_layer_32_20_08t1_00_04(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        return end_block
    }
    function dyn_layer_32_20_08t1_04(offset, XFA) {
        let end_block = offset + 16
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)

        return end_block
    }

    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////
    ///////////////
    ///////////////////////

    function dyn_layer_44(offset, XFA) {
        if (debug) {
            set_u32(offset + 0, 3421260, true)
        }
        // values always 0?
        return offset + 16
    }
    function dyn_layer_52(offset, XFA) {
        let end_block = offset + 48

        if (XFA.animations_04.length !== 0) {
            set_u32(offset + 0, XFA.animations_04.length, is_little_endian)
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            let i = 0
            for (; i < XFA.animations_04.length; i++) {
                dyn_layer_52_1(end_block + (i * 32), XFA.animations_04[i])
            }
            end_block += i * 32
        }
        if (XFA.animations_12.length !== 0) {
            set_u32(offset + 8, XFA.animations_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            let i = 0
            for (; i < XFA.animations_12.length; i++) {
                dyn_layer_52_1(end_block + (i * 32), XFA.animations_12[i])
            }
            end_block += i * 32
        }
        if (XFA.animations_20.length !== 0) {
            set_u32(offset + 16, XFA.animations_20.length, is_little_endian)
            set_u32(offset + 20, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 20 - mid)
            let i = 0
            for (; i < XFA.animations_20.length; i++) {
                dyn_layer_52_1(end_block + (i * 32), XFA.animations_20[i])
            }
            end_block += i * 32
        }
        if (XFA.animations_28.length !== 0) {
            set_u32(offset + 24, XFA.animations_28.length, is_little_endian)
            set_u32(offset + 28, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 28 - mid)
            let i = 0
            for (; i < XFA.animations_28.length; i++) {
                dyn_layer_52_2(end_block + (i * 12), XFA.animations_28[i])
            }
            end_block += divisible(i * 12, 16)

        }
        if (XFA.animations_36.length !== 0) {
            set_u32(offset + 32, XFA.animations_36.length, is_little_endian)
            set_u32(offset + 36, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 36 - mid)
            let i = 0
            for (; i < XFA.animations_36.length; i++) {
                dyn_layer_52_3(end_block + (i * 40), XFA.animations_36[i])
            }
            end_block += divisible(i * 40, 16)
        }

        if (debug) {
            set_u32(offset + 0, 3290444, true)
        }

        return end_block
    }
    function dyn_layer_52_1(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 17, XFA.unknown_17, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
    }
    function dyn_layer_52_2(offset, XFA) {
        set_u8(offset + 0, XFA.color.R, is_little_endian)
        set_u8(offset + 1, XFA.color.G, is_little_endian)
        set_u8(offset + 2, XFA.color.B, is_little_endian)
        set_u8(offset + 3, XFA.color.A, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
    }
    function dyn_layer_52_3(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 17, XFA.unknown_17, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
    }

    function dyn_layer_72(offset, XFA, end_block) {
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        if (XFA.section_04.length !== 0) {
            set_u32(offset + 4, end_block - mid, is_little_endian)
            end_block = dyn_layer_72_04(end_block, XFA.section_04[0])
            global_offset_array.push(offset + 4 - mid)

        }
        if (debug) {
            set_u32(offset + 0, 3290956, true)
        }

        return end_block
    }

    function dyn_layer_72_04(offset, XFA) {
        let end_block = offset + 64
        if (XFA.section_04.length !== 0) {
            let offset_04 = end_block
            end_block += divisible(XFA.section_04.length * 20, 16)
            set_u32(offset + 0, XFA.section_04.length, is_little_endian)
            set_u32(offset + 4, offset_04 - mid, is_little_endian)
            global_offset_array.push(offset + 4 - mid)
            for (let i = 0; i < XFA.section_04.length; i++) {
                end_block = dyn_layer_72_04_04(offset_04 + (i * 20), XFA.section_04[i], end_block)
            }
        }
        if (XFA.section_12.length !== 0) {
            let offset_12 = end_block
            set_u32(offset + 8, XFA.section_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            for (let i = 0; i < XFA.section_12.length; i++) {
                dyn_layer_72_04_12(offset_12 + (i * 32), XFA.section_12[i])
            }
            end_block += XFA.section_12.length * 32
        }
        if (XFA.section_20.length !== 0) {
            let offset_20 = end_block
            set_u32(offset + 16, XFA.section_20.length, is_little_endian)
            set_u32(offset + 20, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 20 - mid)
            // if (XFA.layer_type !== 5) {

            //     for (let i = 0; i < XFA.section_20.length; i++) {
            //         dyn_layer_72_04_20(offset_20 + (i * 16), XFA.section_20[i])
            //     }
            //     end_block += XFA.section_20.length * 16

            // } else {

            for (let i = 0; i < XFA.section_20.length; i++) {
                dyn_layer_72_04_20L5(offset_20 + (i * 32), XFA.section_20[i])
            }
            end_block += XFA.section_20.length * 32
            // }
        }
        if (XFA.section_28.length !== 0) {
            let offset_28 = end_block
            set_u32(offset + 24, XFA.section_28.length, is_little_endian)
            set_u32(offset + 28, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 28 - mid)
            for (let i = 0; i < XFA.section_28.length; i++) {
                dyn_layer_72_04_28(offset_28 + (i * 32), XFA.section_28[i])
            }
            end_block += XFA.section_28.length * 32
        }
        if (XFA.section_36.length !== 0) {
            let offset_36 = end_block
            set_u32(offset + 32, XFA.section_36.length, is_little_endian)
            set_u32(offset + 36, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 36 - mid)
            for (let i = 0; i < XFA.section_36.length; i++) {
                dyn_layer_72_04_36(offset_36 + (i * 12), XFA.section_36[i])
            }
            end_block += divisible(XFA.section_36.length * 12, 16)
        }
        if (XFA.section_44.length !== 0) {
            let offset_44 = end_block
            set_u32(offset + 40, XFA.section_44.length, is_little_endian)
            set_u32(offset + 44, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 44 - mid)
            for (let i = 0; i < XFA.section_44.length; i++) {
                dyn_layer_72_04_44(offset_44 + (i * 48), XFA.section_44[i])
            }
            end_block += divisible(XFA.section_44.length * 48, 16)
        }
        end_block = dyn_multilink(XFA.settings_link_48, setting_array, dyn_setting, outer_XFA.settings, offset + 48, mid, end_block)

        if (debug) {
            set_u32(offset + 0, 875573815, true)
        }

        return end_block
    }

    function dyn_layer_72_04_04(offset, XFA, end_block) {
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)

        if (XFA.section_16.length !== 0) {
            let temp_offset = end_block
            set_u32(offset + 12, XFA.section_16.length, is_little_endian)
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block += XFA.section_16.length * 16

            for (let i = 0; i < XFA.section_16.length; i++) {
                end_block = dyn_layer_72_04_04_16(temp_offset + (i * 16), XFA.section_16[i], end_block)
            }
        }

        if (debug) {
            set_u32(offset + 0, 875574320, true)
        }

        return end_block
    }
    function dyn_layer_72_04_04_16(offset, XFA, end_block) {
        if (XFA.section_08.length !== 0) {
            set_u32(offset + 8, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 8 - mid)
            end_block = dyn_layer_72_04_04_16_08(end_block, XFA.section_08[0])
        }

        if (debug) {
            set_u32(offset + 0, 909194288, true)
        }

        return end_block
    }
    function dyn_layer_72_04_04_16_08(offset, XFA) {
        let end_block = offset + 16
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u16(offset + 6, XFA.unknown_06, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 942683697, true)
        }
        return end_block
    }
    function dyn_layer_72_04_12(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 17, XFA.unknown_17, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 842085424, true)
        }
    }
    function dyn_layer_72_04_20(offset, XFA) {
        set_u8(offset + 0, XFA.unknown_00, is_little_endian)
        set_u8(offset + 1, XFA.unknown_01, is_little_endian)
        set_u8(offset + 2, XFA.unknown_02, is_little_endian)
        set_u8(offset + 3, XFA.unknown_03, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 808596528, true)
        }
    }
    function dyn_layer_72_04_20L5(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 17, XFA.unknown_17, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 1278358576, true)
        }

        // sometimes first 4 bytes are a float ????
    }
    function dyn_layer_72_04_28(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 16, XFA.unknown_16, is_little_endian)
        set_u8(offset + 17, XFA.unknown_17, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 942814256, true)
        }

        //same as dyn_layer_72_04_12?
    }
    function dyn_layer_72_04_36(offset, XFA) {
        set_u8(offset + 0, XFA.color.R, is_little_endian)
        set_u8(offset + 1, XFA.color.G, is_little_endian)
        set_u8(offset + 2, XFA.color.B, is_little_endian)
        set_u8(offset + 3, XFA.color.A, is_little_endian)
        set_u8(offset + 4, XFA.unknown_04, is_little_endian)
        set_u8(offset + 5, XFA.unknown_05, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 909325360, true)
        }
        //same as dyn_layer_52_2?
    }
    function dyn_layer_72_04_44(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)

        if (debug) {
            set_u32(offset + 0, 875836464, true)
        }

    }

}

function dyn_multiappend(XFA, ARRAY, FUNCTION, OFFSET, MID) {
    END_OFFSET = OFFSET
    if (XFA.length) {

        let temp_index

        for (let i = 0; i < XFA.length; i++) {

            temp_index = ARRAY[0].a_ids.indexOf(XFA[i].id)

            if (temp_index === null) {
                //not linked
                console.log(XFA, 'not linked')
                return END_OFFSET
            } else {
                ARRAY[0].a_offsets[temp_index] = END_OFFSET - MID
                END_OFFSET = FUNCTION(END_OFFSET, XFA[temp_index])
            }
        }
    }
    return END_OFFSET
}

function dyn_multilink(ID, ARRAY, FUNCTION, XFA, OFFSET, MID_OFFSET, END_OFFSET, NO_GLOBAL_OFFSET,IS_APPEND,CUSTOM) {
    //capitilized for dramatic effect !
    if (ID !== 0) {

        let temp_index = ARRAY[0].a_ids.indexOf(ID)
        if (temp_index === null) {
            //not linked
            console.log(XFA, 'not linked')
            return END_OFFSET
        } else {
            let temp_offset = ARRAY[0].a_offsets[temp_index]
            if (temp_offset === false) {
                //append first time
                ARRAY[0].a_offsets[temp_index] = END_OFFSET
                temp_offset = ARRAY[0].a_offsets[temp_index]
                END_OFFSET = FUNCTION(temp_offset, XFA[temp_index])
            }
            if (IS_APPEND) {
            set_u32(OFFSET, temp_offset, is_little_endian)
            }else{
            set_u32(OFFSET, temp_offset - MID_OFFSET, is_little_endian)
            }
            if (NO_GLOBAL_OFFSET === true) {} else {
                global_offset_array.push(OFFSET - MID_OFFSET)
            }
            if (CUSTOM === "model") {
                        model_offset_index_array.push([OFFSET - MID_OFFSET,temp_index,0])
            }
        }
    } else {// console.log(XFA,'nonlinked')
    }
    return END_OFFSET
}
