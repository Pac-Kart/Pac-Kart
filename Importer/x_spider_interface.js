function get_interface(offset, XFA, old_offset) {

    let main_XFA = XFA
    XFA = XFA.type_data[0].section_04.low_section_00

    XFA.push({
        top_frame: 0,
        frames: [],
        texts: [],
        fonts: [],
        multi_fonts: [],
        interface_model_00: [],
        interface_model_04: [],
        frame_sub_model: [],
        sparklers: [],
        settings: [],
    })

    let outerXFA = XFA[0]

    frame_array = []
    text_array = []
    font_array = []
    multi_font_array = []
    interface_model_00_array = []
    interface_model_04_array = []
    frame_sub_model_08_array = []
    spark_array = []
    setting_array = []

    XFA[0].top_frame = append_global_multilinked(old_offset, frame_array, get_frame, outerXFA.frames)

    return

    function get_frame(offset, index) {

        outerXFA.frames.push({
            id: gen_id(),
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u16(offset + 2, is_little_endian),
            varibles_04: [],
            section_12: [],
            unknown_16: u32(offset + 16, is_little_endian),
            unknown_20: u32(offset + 20, is_little_endian),
            unknown_24: u32(offset + 24, is_little_endian),
            settings_link_28: 0,
            settings_link_36: 0,
            settings_link_40: 0,
            section_48: [],
            section_56: [],
            unknown_60: f32(offset + 60, is_little_endian),
            layers_72: [],
        })

        if (u32(offset + 4, is_little_endian) !== 0) {
            get_var(u32(offset + 4, is_little_endian) + offset_mid, outerXFA.frames[index].varibles_04)
        }

        for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
            get_frame_12(u32(offset + 12, is_little_endian) + offset_mid + (i * 28), outerXFA.frames[index].section_12, i)
        }

        outerXFA.frames[index].settings_link_28 = append_global_multilinked(u32(offset + 28, is_little_endian), setting_array, get_setting, outerXFA.settings)
        outerXFA.frames[index].settings_link_36 = append_global_multilinked(u32(offset + 36, is_little_endian), setting_array, get_setting, outerXFA.settings)
        outerXFA.frames[index].settings_link_40 = append_global_multilinked(u32(offset + 40, is_little_endian), setting_array, get_setting, outerXFA.settings)

        // skiped

        //
        ///
        //
        //
        if (u32(offset + 48, is_little_endian) !== 0) {
            get_section_float_48(u32(offset + 48, is_little_endian) + offset_mid, outerXFA.frames[index].section_48)
        }
        if (u32(offset + 56, is_little_endian) !== 0) {
            get_section_1_56(u32(offset + 56, is_little_endian) + offset_mid, outerXFA.frames[index].section_56)
        }
        for (let i = 0; i < u32(offset + 68, is_little_endian); i++) {
            get_layer(u32(offset + 72, is_little_endian) + offset_mid + (i * 100), outerXFA.frames[index].layers_72, i)
        }
        return outerXFA.frames[index].id
    }

    function get_var(offset, XFA) {
        XFA.push({
            section_04: [],
        })

        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_var_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 36), XFA[0].section_04, i)
        }

    }

    function get_var_1(offset, XFA, i) {
        let temp_name = ''
        if (u32(offset + 0, is_little_endian)) {
            temp_name = get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false)
        }
        XFA.push({
            id: gen_id(),
            name_00: temp_name,
            type_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_06: u8(offset + 6, is_little_endian),
            unknown_07: u8(offset + 7, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            type_more_settings_12: [],
            unknown_16: u32(offset + 16, is_little_endian),
            unknown_20: u32(offset + 20, is_little_endian),
            unknown_24: u32(offset + 24, is_little_endian),
            unknown_28: u32(offset + 28, is_little_endian),
            unknown_32: u8(offset + 32, is_little_endian),
            unknown_33: u8(offset + 33, is_little_endian),
        })

        if (u8(offset + 4, is_little_endian) === 1) {
            get_var_1_t1(u32(offset + 12, is_little_endian) + offset_mid, XFA[i].type_more_settings_12)
        } else if (u8(offset + 4, is_little_endian) === 5) {
            get_var_1_t5(u32(offset + 12, is_little_endian) + offset_mid, XFA[i].type_more_settings_12)
        } else if (u8(offset + 4, is_little_endian) === 7) {
            get_var_1_t7(u32(offset + 12, is_little_endian) + offset_mid, XFA[i].type_more_settings_12)
        } else if (u8(offset + 4, is_little_endian) === 8) {
            get_var_1_t8(u32(offset + 12, is_little_endian) + offset_mid, XFA[i].type_more_settings_12)
        } else if (u8(offset + 4, is_little_endian) === 9) {
            get_var_1_t9(u32(offset + 12, is_little_endian) + offset_mid, XFA[i].type_more_settings_12)
        }
    }

    function get_var_1_t1(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            more_settings_04: [],
        })
        get_var_1_t1_1(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].more_settings_04)
    }
    function get_var_1_t1_1(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
        })
    }
    function get_var_1_t5(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }
    function get_var_1_t7(offset, XFA) {
        XFA.push({
            unknown_01: u8(offset + 1, is_little_endian),
        })
    }
    function get_var_1_t8(offset, XFA) {
        XFA.push({
            more_settings: [],
        })
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_var_1_t8_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 12), XFA[0].more_settings)
        }
    }
    function get_var_1_t8_1(offset, XFA) {
        let string = null
        if (u32(offset + 8, is_little_endian) !== 0) {
            string = get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false)
        }

        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_03: u8(offset + 3, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
            string_08: string,
        })

    }
    function get_var_1_t9(offset, XFA) {

        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_03: u8(offset + 3, is_little_endian),
            string_04: get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false),
            string_08: get_string(u32(offset + 8, is_little_endian) + offset_mid, 0, false),
        })

    }

    function get_frame_12(offset, XFA, i) {
        XFA.push({
            type_00: u32(offset + 0, is_little_endian),
            section_04: [],
            unknown_08: u32(offset + 8, is_little_endian),
            section_16: [],
            section_24: [],
        })

        if (u32(offset + 0, is_little_endian) === 1026 && u32(offset + 4, is_little_endian)) {
            get_frame_12_04t1026(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04)
        }
        if (u32(offset + 0, is_little_endian) === 1027 && u32(offset + 4, is_little_endian)) {
            get_frame_12_04t1027(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04)
        }

        for (let ii = 0; ii < u32(offset + 12, is_little_endian); ii++) {
            get_frame_12_16(u32(offset + 16, is_little_endian) + offset_mid + (ii * 8), XFA[i].section_16, ii)
        }
        for (let ii = 0; ii < u32(offset + 20, is_little_endian); ii++) {
            get_frame_12_24(u32(offset + 24, is_little_endian) + offset_mid + (ii * 36), XFA[i].section_24, ii)
        }

    }

    function get_frame_12_04t1026(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
            section_08: [],
            unknown_12: u32(offset + 12, is_little_endian),
        })
        if (u32(offset + 8, is_little_endian)) {
            get_frame_12_04t1026_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].section_08)

        }
    }
    function get_frame_12_04t1026_08(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            section_04: [],
        })
        if (u32(offset + 4, is_little_endian)) {
            get_frame_12_04t1026_08_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)

        }
    }
    function get_frame_12_04t1026_08_04(offset, XFA) {
        XFA.push({
            unknown_04: u32(offset + 4, is_little_endian),
        })

    }
    function get_frame_12_04t1027(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
        })
    }
    function get_frame_12_16(offset, XFA, i) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            section_04: [],
        })
        if (u32(offset + 4, is_little_endian)) {
            get_frame_12_04t1026(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04)
        }

    }
    function get_frame_12_24(offset, XFA, i) {
        XFA.push({
            type_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u16(offset + 2, is_little_endian),
            type_section_04: 0,
            section_08: [],
            unknown_20: u32(offset + 20, is_little_endian),
            settings_link_24: 0,
        })
        if (u8(offset + 0, is_little_endian) === 1) {
            XFA[i].type_section_04 = append_global_multilinked(u32(offset + 4, is_little_endian), frame_array, get_frame, outerXFA.frames)
        } else if (u8(offset + 0, is_little_endian) === 11) {
            XFA[i].type_section_04 = []
            if (u32(offset + 4, is_little_endian)) {

                get_frame_12_24_04t11(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].type_section_04)

            }
        }
        if (u32(offset + 8, is_little_endian)) {
            get_frame_12_24_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_08)
        }
        if (u32(offset + 24, is_little_endian)) {
            XFA[i].settings_link_24 = append_global_multilinked(u32(offset + 24, is_little_endian), setting_array, get_setting, outerXFA.settings)
        }

    }

    function get_frame_12_24_04t11(offset, XFA) {
        XFA.push({
            section_04: [],
        })
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_frame_12_24_04t11_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 12), XFA[0].section_04, i)
        }

    }
    function get_frame_12_24_04t11_04(offset, XFA, i) {
        XFA.push({
            section_00: [],
            type_04: u16(offset + 4, is_little_endian),
            type_section_08: [],
        })
        if (u32(offset + 0, is_little_endian)) {
            get_frame_12_24_04t11_04_00(u32(offset + 0, is_little_endian) + offset_mid, XFA[i].section_00)
        }

        if (u16(offset + 4, is_little_endian) === 0 && u32(offset + 8, is_little_endian)) {
            get_frame_12_24_04t11_04_08t0(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].type_section_08)
        } else if (u16(offset + 4, is_little_endian) === 1 && u32(offset + 8, is_little_endian)) {
            get_frame_12_24_04t11_04_08t1(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].type_section_08)
        } else if (u16(offset + 4, is_little_endian) === 3 && u32(offset + 8, is_little_endian)) {
            XFA[i].type_section_08 = 0
            XFA[i].type_section_08 = append_global_multilinked(u32(offset + 8, is_little_endian), setting_array, get_setting, outerXFA.settings)
        } else if (u16(offset + 4, is_little_endian) === 100 && u32(offset + 8, is_little_endian)) {
            XFA[i].type_section_08 = 0
            XFA[i].type_section_08 = append_global_multilinked(u32(offset + 8, is_little_endian), frame_array, get_frame, outerXFA.frames)
        } else if (u16(offset + 4, is_little_endian) === 101 && u32(offset + 8, is_little_endian)) {
            XFA[i].type_section_08 = 0
            XFA[i].type_section_08 = append_global_multilinked(u32(offset + 8, is_little_endian), frame_array, get_frame, outerXFA.frames)
        }
    }

    function get_frame_12_24_04t11_04_00(offset, XFA) {
        //always 0?
        XFA.push({
            temp: 0
        })
    }
    function get_frame_12_24_04t11_04_08t0(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_06: u16(offset + 6, is_little_endian),
        })
    }
    function get_frame_12_24_04t11_04_08t1(offset, XFA) {
        XFA.push({
            section_00: [],
            section_04: [],
        })
        if (u32(offset + 0, is_little_endian)) {
            get_frame_12_24_04t11_04_08t1_00(u32(offset + 0, is_little_endian) + offset_mid, XFA[0].section_00)
        }
        if (u32(offset + 4, is_little_endian)) {
            get_frame_12_24_04t11_04_08t1_00_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }
    function get_frame_12_24_04t11_04_08t1_00(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            section_04: [],
        })

        // console.log(u32(offset + 0, is_little_endian), 'idk', offset)

        if (u32(offset + 4, is_little_endian)) {
            get_frame_12_24_04t11_04_08t1_00_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }
    function get_frame_12_24_04t11_04_08t1_00_04(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }
    function get_frame_12_24_08(offset, XFA) {
        XFA.push({
            section_00: [],
            section_04: [],
        })
        if (u32(offset + 0, is_little_endian)) {
            get_frame_12_24_08_00(u32(offset + 0, is_little_endian) + offset_mid, XFA[0].section_00)
        }
        if (u32(offset + 4, is_little_endian)) {
            get_frame_12_24_08_00(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }
    function get_frame_12_24_08_00(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }

    //
    //
    //
    //
    //
    //
    //
    function get_setting(offset, index) {

        outerXFA.settings.push({
            id: gen_id(),
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_08: u8(offset + 8, is_little_endian),
            unknown_10: u8(offset + 10, is_little_endian),
            section_16: [],
        })

        for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
            get_setting_16(u32(offset + 16, is_little_endian) + offset_mid + (i*16), outerXFA.settings[index].section_16,i)
        }
        
        return outerXFA.settings[index].id
    }
    function get_setting_16(offset, XFA,i) {
        XFA.push({
            section_04: [],
            unknown_12: f32(offset + 12, is_little_endian),
        })
        if (u32(offset + 4, is_little_endian)) {
            get_setting_16_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04)
        }

    }
    function get_setting_16_04(offset, XFA) {
        XFA.push({
            section_00: [],
        })
        if (u32(offset + 0, is_little_endian)) {
            get_setting_16_04_00(u32(offset + 0, is_little_endian) + offset_mid, XFA[0].section_00)
        }

    }
    function get_setting_16_04_00(offset, XFA) {

        XFA.push({
            sound_00: [],
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_06: u8(offset + 6, is_little_endian),
            section_08: [],
            unknown_16: f32(offset + 16, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
        })
        // if (u32(offset + 0, is_little_endian) != 0) {
        //check if in patch list
        let patch_array = get_patch_offset_index(sound_patch, offset + 0 - offset_mid)
        if (patch_array != -1) {
            XFA[0].sound_00 = patch_array
        }
        // }

        if (u32(offset + 8, is_little_endian)) {
            get_setting_16_04_00_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].section_08)
        }

    }
    function get_setting_16_04_00_08(offset, XFA) {
        XFA.push({
            unknown_08: u8(offset + 8, is_little_endian),
        })
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    function get_section_float_48(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
        })
    }
    function get_section_1_56(offset, XFA) {
        XFA.push({
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }

    function get_layer(offset, XFA, i) {
        let manager_name = null
        if (u32(offset + 48, is_little_endian)) {
            manager_name = get_string(u32(offset + 48, is_little_endian) + offset_mid, 0, false)
        }
        XFA.push({
            id: gen_id(),
            name_00: get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false),
            section_08: [],
            unknown_12: u32(offset + 12, is_little_endian),
            unknown_16: u16(offset + 16, is_little_endian),
            unknown_18: u8(offset + 18, is_little_endian),
            type_19: u8(offset + 19, is_little_endian),
            section_20: [],
            type_section_24: [],
            unknown_28: u8(offset + 28, is_little_endian),
            unknown_29: u8(offset + 29, is_little_endian),
            unknown_30: u8(offset + 30, is_little_endian),
            unknown_31: u8(offset + 31, is_little_endian),
            section_32: [],
            x_position_36: f32(offset + 36, is_little_endian),
            y_position_40: f32(offset + 40, is_little_endian),
            section_44: [],
            manager_name_48: manager_name,
            animation_52: [],
            unknown_56: u32(offset + 56, is_little_endian),
            unknown_60: u32(offset + 60, is_little_endian),
            section_72: [],
        })

        if (u32(offset + 8, is_little_endian) !== 0) {
            get_layer_2(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_08)
        }
        if (u32(offset + 20, is_little_endian) !== 0) {
            if (u8(offset + 19, is_little_endian) === 0) {
                get_layer_20t0(u32(offset + 20, is_little_endian) + offset_mid, XFA[i].section_20)
            } else if (u8(offset + 19, is_little_endian) === 1) {
                get_layer_20t1(u32(offset + 20, is_little_endian) + offset_mid, XFA[i].section_20)
            }

        }

        if (u32(offset + 24, is_little_endian) !== 0) {
            if (u8(offset + 19, is_little_endian) === 0) {
                //texture
                get_layer_24t0(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 1) {
                //text
                get_layer_24t1(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 3) {
                //modles
                //model
                get_layer_24t3(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 5) {
                //unknown
                get_layer_24t5(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 6) {
                //recursive
                get_layer_24t6(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 7) {
                //recursive sames as 6 probably
                get_layer_24t6(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 10) {
                //box
                get_layer_24t10(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 12) {
                //helpervar
                get_layer_24t12(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 13) {
                //frame
                get_layer_24t13(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 14) {
                //managers
                get_layer_24t14(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            } else if (u8(offset + 19, is_little_endian) === 15) {
                //sparkler
                get_layer_24t15(u32(offset + 24, is_little_endian) + offset_mid, XFA[i].type_section_24)
            }
        }

        if (u32(offset + 32, is_little_endian) !== 0) {
            get_layer_32(u32(offset + 32, is_little_endian) + offset_mid, XFA[i].section_32)
        }
        if (u32(offset + 44, is_little_endian) !== 0) {
            get_layer_44(u32(offset + 44, is_little_endian) + offset_mid, XFA[i].section_44)
        }
        if (u32(offset + 52, is_little_endian) !== 0) {
            get_layer_52(u32(offset + 52, is_little_endian) + offset_mid, XFA[i].animation_52)
        }
        for (let i_72 = 0; i_72 < u32(offset + 68, is_little_endian); i_72++) {
            get_layer_72(u32(offset + 72, is_little_endian) + offset_mid + (i_72 * 12), XFA[i].section_72, i_72, u8(offset + 19, is_little_endian))
        }

    }

    function get_layer_2(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            section_08: [],
        })
        for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
            get_layer_2_1(u32(offset + 8, is_little_endian) + offset_mid + (i * 12), XFA[0].section_08, i)
        }
    }
    function get_layer_2_1(offset, XFA, i) {
        XFA.push({
            type_00: u8(offset + 0, is_little_endian),
            section_04: [],
            unknown_08: u32(offset + 8, is_little_endian),
        })

        if (u8(offset + 0, is_little_endian) === 2) {
            get_layer_2_1_t2(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04)
        } else if (u8(offset + 0, is_little_endian) === 6) {
            get_layer_2_1_t6(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04)
        }
    }
    function get_layer_2_1_t2(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            section_04: [],
        })
        if (u32(offset + 4, is_little_endian) !== 0) {
            get_layer_2_1_t2_1(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }
    function get_layer_2_1_t2_1(offset, XFA) {
        XFA.push({
            temp: 0
        })
        // values always 0?
    }

    function get_layer_2_1_t6(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }
    function get_layer_20t0(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_16: f32(offset + 16, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
        })
    }
    function get_layer_20t1(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
        })
    }

    function get_layer_24t0(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            texture_04: [],
            section_08: [],
            unknown_12: u8(offset + 12, is_little_endian),
            unknown_13: u8(offset + 13, is_little_endian),
        })

        if (u8(offset + 0, is_little_endian) === 1 && u32(offset + 4, is_little_endian)) {
            // model
            XFA[0].texture_04 = append_global_multilinked(u32(offset + 4, is_little_endian), model_array, get_model, main_XFA.models)
        }

        if (u32(offset + 4, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset + 4 - offset_mid)
            if (patch_array != -1) {
                XFA[0].texture_04 = patch_array
            }
        }
        if (u32(offset + 8, is_little_endian) !== 0) {
            get_layer_24t0_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].section_08)
        }

    }

    function get_layer_24t0_08(offset, XFA) {
        XFA.push({
            textures_04: [],
            unknown_08: u8(offset + 8, is_little_endian),
            unknown_09: u8(offset + 9, is_little_endian),
            unknown_11: u8(offset + 11, is_little_endian),
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_18: u16(offset + 18, is_little_endian),
            timer_20: u32(offset + 20, is_little_endian),
        })
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_layer_24t0_08_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 4), XFA[0].textures_04, i)
        }
    }
    function get_layer_24t0_08_04(offset, XFA, i) {
        XFA.push({
            texture_00: []
        })
        if (u32(offset + 0, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset + 0 - offset_mid)
            if (patch_array != -1) {
                XFA[i].texture_00 = patch_array
            }
        }
    }

    function get_layer_24t1(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_03: u8(offset + 3, is_little_endian),
            single_string_link_04: 0,
            multi_string_08: [],
            font_link_12: 0,
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_17: u8(offset + 17, is_little_endian),
            unknown_18: u16(offset + 18, is_little_endian),
            unknown_20: u16(offset + 20, is_little_endian),
            unknown_22: u8(offset + 22, is_little_endian),
            unknown_23: u8(offset + 23, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
        })
        if (u32(offset + 4, is_little_endian) !== 0) {
            XFA[0].single_string_link_04 = append_global_multilinked(u32(offset + 4, is_little_endian), text_array, get_interface_texts, outerXFA.texts)
        } else if (u32(offset + 8, is_little_endian) !== 0) {
            get_layer_24t1_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].multi_string_08)
            //multi
        }

        if (u8(offset + 2, is_little_endian) === 0) {
            XFA[0].font_link_12 = append_global_multilinked(u32(offset + 12, is_little_endian), font_array, get_interface_fonts, outerXFA.fonts)
            //single font
        } else if (u8(offset + 2, is_little_endian) === 1) {
            XFA[0].font_link_12 = append_global_multilinked(u32(offset + 12, is_little_endian), multi_font_array, get_interface_multi_fonts, outerXFA.multi_fonts)
            //multi font
        }

    }

    function get_layer_24t1_08(offset, XFA) {
        //multi string section
        global_offset_ = [offset, XFA]

        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            strings_04: [],
            unknown_08: u8(offset + 8, is_little_endian),
            unknown_10: u16(offset + 10, is_little_endian),
        })
        if (u32(offset + 4, is_little_endian)) {
            for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
                get_layer_24t1_08_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 8), XFA[0].strings_04, i)
            }
        }

    }
    function get_layer_24t1_08_04(offset, XFA, i) {
        //multi string section

        XFA.push({
            string_link_00: 0,
        })
        if (u32(offset + 0, is_little_endian) !== 0) {
            XFA[i].string_link_00 = append_global_multilinked(u32(offset + 0, is_little_endian), text_array, get_interface_texts, outerXFA.texts)

        }
    }

    function get_interface_texts(offset, index) {
        outerXFA.texts.push({
            id: gen_id(),
            section_00: []
        })
        if (u32(offset, is_little_endian) !== 0) {
            get_interface_texts_1(u32(offset, is_little_endian) + offset_mid, outerXFA.texts[index].section_00)
        }

        return outerXFA.texts[index].id
    }

    function get_interface_texts_1(offset, XFA) {
        XFA.push({
            string: get_string(offset, 0, false)
        })

    }

    function get_interface_fonts(offset, index) {
        outerXFA.fonts.push({
            id: gen_id(),
            texture_00: [],
            unknown_08: u8(offset + 8, is_little_endian),
            unknown_09: u8(offset + 9, is_little_endian),
            unknown_10: u8(offset + 10, is_little_endian),
            unknown_12: f32(offset + 12, is_little_endian),
            unknown_24: u32(offset + 24, is_little_endian),
            type_section_28: [],
            letter_list_36: [],
        })

        if (u32(offset + 0, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset + 0 - offset_mid)
            if (patch_array != -1) {
                outerXFA.fonts[index].texture_00 = patch_array
            }
        }

        if (u32(offset + 28, is_little_endian) !== 0) {
            get_interface_fonts_28(u32(offset + 28, is_little_endian) + offset_mid, outerXFA.fonts[index].type_section_28)
        }

        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            get_interface_fonts_36(u32(offset + 36, is_little_endian) + offset_mid + (i * 12), outerXFA.fonts[index].letter_list_36)
        }
        return outerXFA.fonts[index].id
    }

    function get_interface_fonts_28(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
        })
    }

    function get_interface_fonts_36(offset, XFA) {
        XFA.push({
            letter_00: u32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
        })
    }

    function get_interface_multi_fonts(offset, index) {
        outerXFA.multi_fonts.push({
            id: gen_id(),
            section_04: [],
        })

        if (u32(offset + 4, is_little_endian) !== 0) {
            get_interface_multi_fonts_04(u32(offset + 4, is_little_endian) + offset_mid, outerXFA.multi_fonts[index].section_04)
        }
        return outerXFA.multi_fonts[index].id
    }

    function get_interface_multi_fonts_04(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            font_link_12: 0,
            unknown_24: f32(offset + 24, is_little_endian),
            font_link_28: 0,
            font_link_32: 0,
        })
        if (u32(offset + 12, is_little_endian) !== 0) {
            XFA[0].font_link_12 = append_global_multilinked(u32(offset + 12, is_little_endian), font_array, get_interface_fonts, outerXFA.fonts)
        }
        if (u32(offset + 28, is_little_endian) !== 0) {
            XFA[0].font_link_28 = append_global_multilinked(u32(offset + 28, is_little_endian), font_array, get_interface_fonts, outerXFA.fonts)
        }
        if (u32(offset + 32, is_little_endian) !== 0) {
            XFA[0].font_link_32 = append_global_multilinked(u32(offset + 32, is_little_endian), font_array, get_interface_fonts, outerXFA.fonts)
        }
    }

    function get_layer_24t3(offset, XFA) {
        XFA.push({
            section_04: [],
            unknown_12: u32(offset + 12, is_little_endian),
            section_16: [],
        })
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_layer_24t3_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 8), XFA[0].section_04, i)
        }

        if (u32(offset + 16, is_little_endian) !== 0) {
            get_layer_24t3_16(u32(offset + 16, is_little_endian) + offset_mid, XFA[0].section_16)
        }

    }

    function get_layer_24t3_04(offset, XFA, i) {
        XFA.push({
            frame_model_00_link: 0,
            frame_model_04_link: 0,
        })

        if (u32(offset + 0, is_little_endian)) {
            XFA[i].frame_model_00_link = append_global_multilinked(u32(offset + 0, is_little_endian), interface_model_00_array, get_interface_model_00, outerXFA.interface_model_00)
        }
        if (u32(offset + 4, is_little_endian)) {
            XFA[i].frame_model_04_link = append_global_multilinked(u32(offset + 4, is_little_endian), interface_model_04_array, get_interface_model_04, outerXFA.interface_model_04)
        }

    }

    function get_interface_model_00(offset, index) {
        let temp_name = ''
        if (u32(offset + 4, is_little_endian)) {
            temp_name = get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false)
        }
        outerXFA.interface_model_00.push({
            id: gen_id(),
            unknown_00: u32(offset + 0, is_little_endian),
            name_04: temp_name,
            frame_sub_model_08_link: 0,
            model_animations_1_link: 0,
            model_animations_2_link: 0,
            section_24: [],
            section_32: [],
            unknown_36: f32(offset + 36, is_little_endian),
            unknown_48: u8(offset + 48, is_little_endian),
            unknown_49: u8(offset + 49, is_little_endian),
            unknown_50: u8(offset + 50, is_little_endian),
            section_52: [],
            section_56: [],
            section_64: [],
        })

        if (u32(offset + 8, is_little_endian) !== 0) {
            outerXFA.interface_model_00[index].frame_sub_model_08_link = append_global_multilinked(u32(offset + 8, is_little_endian), frame_sub_model_08_array, get_frame_sub_model, outerXFA.frame_sub_model)
        }

        if (u32(offset + 12, is_little_endian) !== 0) {
            outerXFA.interface_model_00[index].model_animations_1_link = append_global_multilinked(u32(offset + 12, is_little_endian), model_animations_1_array, get_model_animations_1, main_XFA.model_animations_1)
        }
        if (u32(offset + 16, is_little_endian) !== 0) {
            outerXFA.interface_model_00[index].model_animations_2_link = append_global_multilinked(u32(offset + 16, is_little_endian), model_animations_2_array, get_model_animations_2, main_XFA.model_animations_2)
        }

        for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
            get_interface_model_00_24(u32(offset + 24, is_little_endian) + offset_mid + (i * 4), outerXFA.interface_model_00[index].section_24, i)
        }
        for (let i = 0; i < u32(offset + 28, is_little_endian); i++) {
            get_interface_model_00_32(u32(offset + 32, is_little_endian) + offset_mid + (i * 8), outerXFA.interface_model_00[index].section_32, i)
        }

        if (u32(offset + 52, is_little_endian) !== 0) {
            get_interface_model_00_52(u32(offset + 52, is_little_endian) + offset_mid, outerXFA.interface_model_00[index].section_52)
        }
        if (u32(offset + 56, is_little_endian) !== 0) {
            get_interface_model_00_56(u32(offset + 56, is_little_endian) + offset_mid, outerXFA.interface_model_00[index].section_56)
        }
        if (u32(offset + 64, is_little_endian) !== 0) {
            get_interface_model_00_64(u32(offset + 64, is_little_endian) + offset_mid, outerXFA.interface_model_00[index].section_64)
        }

        return outerXFA.interface_model_00[index].id
    }

    function get_frame_sub_model(offset, index) {

        outerXFA.frame_sub_model.push({
            id: gen_id(),
            model_animations_2_link: 0,
            section_08: [],
            section_16: [],
        })

        if (u32(offset + 0, is_little_endian) !== 0) {
            outerXFA.frame_sub_model[index].model_animations_2_link = append_global_multilinked(u32(offset + 0, is_little_endian), model_animations_2_array, get_model_animations_2, main_XFA.model_animations_2)
        }

        for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
            get_interface_model_00_24(u32(offset + 8, is_little_endian) + offset_mid + (i * 4), outerXFA.frame_sub_model[index].section_08, i)
        }
        for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
            get_interface_model_00_32(u32(offset + 16, is_little_endian) + offset_mid + (i * 8), outerXFA.frame_sub_model[index].section_16, i)
        }

        return outerXFA.frame_sub_model[index].id
    }

    function get_interface_model_00_24(offset, XFA, i) {
        XFA.push({
            model_link: 0,
        })
        XFA[i].model_link = append_global_multilinked(u32(offset + 0, is_little_endian), model_array, get_model, main_XFA.models)

    }
    function get_interface_model_00_32(offset, XFA, i) {
        XFA.push({
            model_link: 0,
            unknown_04: u16(offset + 4, is_little_endian),
        })
        XFA[i].model_link = append_global_multilinked(u32(offset + 0, is_little_endian), model_array, get_model, main_XFA.models)

    }
    function get_interface_model_00_52(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
        })
    }
    function get_interface_model_00_56(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
        })
    }

    function get_interface_model_00_64(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_16: f32(offset + 16, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
            unknown_32: f32(offset + 32, is_little_endian),
        })
    }

    function get_interface_model_04(offset, index) {
        outerXFA.interface_model_04.push({
            id: gen_id(),
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_08: u8(offset + 8, is_little_endian),
            unknown_10: u8(offset + 10, is_little_endian),
            unknown_12: u32(offset + 12, is_little_endian),
            section_16: [],
        })

        if (u32(offset + 16, is_little_endian) !== 0) {
            get_interface_model_04_16(u32(offset + 16, is_little_endian) + offset_mid, outerXFA.interface_model_04[index].section_16)
        }
        return outerXFA.interface_model_04[index].id
    }

    function get_interface_model_04_16(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            section_04: [],
        })

        if (u32(offset + 4, is_little_endian)) {
            get_interface_model_04_16_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }

    function get_interface_model_04_16_04(offset, XFA) {
        //no values?
        XFA.push({
            temp: 0
        })
    }

    function get_layer_24t3_16(offset, XFA) {
        XFA.push({
            section_08: [],
        })

        if (u32(offset + 8, is_little_endian)) {
            get_layer_24t3_16_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].section_08)
        }
    }

    function get_layer_24t3_16_08(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_06: u16(offset + 6, is_little_endian),
        })
    }

    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////

    // function get_model_animations_1(offset, index) {
    //     // move this later
    //     main_XFA.model_animations_1.push({
    //         id: gen_id(),
    //         unknown_00: u32(offset + 0, is_little_endian),
    //         unknown_04: u32(offset + 4, is_little_endian),
    //         unknown_08: f32(offset + 8, is_little_endian),
    //         unknown_12: f32(offset + 12, is_little_endian),
    //         unknown_16: f32(offset + 16, is_little_endian),
    //         unknown_20: f32(offset + 20, is_little_endian),
    //         section_32: [],
    //         section_52: [],
    //     })

    //     for (let i = 0; i < u32(offset + 40, is_little_endian); i++) {
    //         get_model_animations_1_32(u32(offset + 32, is_little_endian) + offset_mid + (i * 4), main_XFA.model_animations_1[index].section_32)
    //     }

    //     if (u32(offset + 52, is_little_endian) !== 0) {
    //         get_model_animations_1_52(u32(offset + 52, is_little_endian) + offset_mid, main_XFA.model_animations_1[index].section_52, u32(offset + 40, is_little_endian))
    //     }

    //     return main_XFA.model_animations_1[index].id
    // }

    // function get_model_animations_1_32(offset, XFA) {
    //     XFA.push({
    //         unknown_00: f32(offset + 0, is_little_endian),
    //     })
    // }
    // function get_model_animations_1_52(offset, XFA, amount_6) {
    //     XFA.push({
    //         unknown_00: u32(offset + 0, is_little_endian),
    //         unknown_04: u32(offset + 4, is_little_endian),
    //         unknown_08: u32(offset + 8, is_little_endian),
    //         section_12: [],
    //         section_16: [],
    //         section_20: [],
    //         section_24: [],
    //         section_28: [],
    //         section_32: [],
    //     })
    //     if (u32(offset + 12, is_little_endian) && u32(offset + 12, is_little_endian) !== 3452816845) {

    //         for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
    //             get_model_animations_1_52_12(u32(offset + 12, is_little_endian) + offset_mid + (i*2), XFA[0].section_12)
    //         }

    //     }

    //     if (u32(offset + 16, is_little_endian)) {
    //         for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
    //             get_model_animations_1_52_12(u32(offset + 16, is_little_endian) + offset_mid + (i*2), XFA[0].section_16)
    //         }
    //     }

    //     if (u32(offset + 20, is_little_endian) && u32(offset + 20, is_little_endian) !== 3452816845) {
    //         for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
    //         get_model_animations_1_52_12(u32(offset + 20, is_little_endian) + offset_mid + (i*2), XFA[0].section_20)
    //         }
    //     }
    //     if (u32(offset + 24, is_little_endian) && u32(offset + 24, is_little_endian) !== 3452816845) {
    //         for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
    //         get_model_animations_1_52_24(u32(offset + 24, is_little_endian) + offset_mid + (i*4), XFA[0].section_24)
    //         }

    //     }
    //     if (u32(offset + 28, is_little_endian)) {// get_model_animations_1_52_28(u32(offset + 28, is_little_endian) + offset_mid, XFA[0].section_28)
    //     }

    //     if (u32(offset + 32, is_little_endian) && u32(offset + 32, is_little_endian) !== 3452816845) {

    //         for (let i = 0; i < amount_6; i++) {
    //             get_model_animations_1_52_32(u32(offset + 32, is_little_endian) + offset_mid + ((i * u32(offset + 8, is_little_endian) * 2)), XFA[0].section_32)
    //         }

    //     }
    // }

    // function get_model_animations_1_52_12(offset, XFA) {
    //     XFA.push({
    //         unknown_00: u16(offset + 0, is_little_endian),
    //     })
    // }
    // function get_model_animations_1_52_24(offset, XFA) {
    //     XFA.push({
    //         unknown_00: f32(offset + 0, is_little_endian),
    //     })
    // }

    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////

    // function get_model_animations_2(offset, index) {
    //     // move this later
    //     main_XFA.model_animations_2.push({
    //         id: gen_id(),
    //         unknown_04: u32(offset + 4, is_little_endian),
    //         unknown_08: u32(offset + 8, is_little_endian),
    //         section_16: [],
    //     })

    //     for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
    //         get_model_animations_2_16(u32(offset + 16, is_little_endian) + offset_mid + (i * 32), main_XFA.model_animations_2[index].section_16)
    //     }

    //     return main_XFA.model_animations_2[index].id
    // }

    // function get_model_animations_2_16(offset, XFA) {
    //     XFA.push({
    //         unknown_00: f32(offset + 0, is_little_endian),
    //         unknown_04: f32(offset + 4, is_little_endian),
    //         unknown_08: f32(offset + 8, is_little_endian),
    //         unknown_12: f32(offset + 12, is_little_endian),
    //         unknown_16: f32(offset + 16, is_little_endian),
    //         unknown_20: f32(offset + 20, is_little_endian),
    //         unknown_24: f32(offset + 24, is_little_endian),
    //         unknown_28: u8(offset + 28, is_little_endian),
    //         unknown_29: u8(offset + 29, is_little_endian),
    //         unknown_30: u8(offset + 30, is_little_endian),
    //         unknown_31: u8(offset + 31, is_little_endian),
    //     })
    // }

    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////////

    function get_layer_24t5(offset, XFA) {
        XFA.push({
            texture_00: [],
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_12: f32(offset + 12, is_little_endian),
        })
        if (u32(offset + 0, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset + 0 - offset_mid)
            if (patch_array != -1) {
                XFA[0].texture_00 = patch_array
            }
        }
    }

    function get_layer_24t6(offset, XFA) {
        XFA.push({
            frame_link_00: 0,
            unknown_04: u8(offset + 4, is_little_endian),
            section_12: [],
        })
        if (u32(offset + 0, is_little_endian) !== 0) {
            XFA[0].frame_link_00 = append_global_multilinked(u32(offset + 0, is_little_endian), frame_array, get_frame, outerXFA.frames)
        }

        for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
            get_layer_24t6_12(u32(offset + 12, is_little_endian) + offset_mid + (i * 12), XFA[0].section_12)
        }

    }
    function get_layer_24t6_12(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
        })
    }

    function get_layer_24t10(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            unknown_12: u32(offset + 12, is_little_endian),
        })
    }
    function get_layer_24t12(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }
    function get_layer_24t13(offset, XFA) {
        XFA.push({
            unknown_01: u8(offset + 1, is_little_endian),
            section_04: [],
            unknown_08: u32(offset + 8, is_little_endian),
            section_12: [],
        })
        if (u32(offset + 4, is_little_endian) !== 0) {
            get_layer_24t13_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
        if (u32(offset + 12, is_little_endian) !== 0) {
            get_layer_24t13_12(u32(offset + 12, is_little_endian) + offset_mid, XFA[0].section_12)
        }

    }

    function get_layer_24t13_04(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
        })
    }
    function get_layer_24t13_12(offset, XFA) {
        XFA.push({
            texture_00: [],
        })
        if (u32(offset + 0, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset + 0 - offset_mid)
            if (patch_array != -1) {
                XFA[0].texture_00 = patch_array
            }
        }
    }
    function get_layer_24t14(offset, XFA) {
        XFA.push({
            unknown_272: u8(offset + 272, is_little_endian),
            unknown_273: u8(offset + 273, is_little_endian),
            section_276: [],
        })
        if (u32(offset + 276, is_little_endian) !== 0) {
            get_layer_24t14_276(u32(offset + 276, is_little_endian) + offset_mid, XFA[0].section_276)
        }
    }
    function get_layer_24t14_276(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_08: u8(offset + 8, is_little_endian),
        })
    }
    function get_layer_24t15(offset, XFA) {
        XFA.push({
            spark_link_00: 0,
        })
        XFA[0].spark_link_00 = append_global_multilinked(u32(offset + 0, is_little_endian), spark_array, get_interface_sparkler, outerXFA.sparklers)

    }

    function get_interface_sparkler(offset, index) {
        outerXFA.sparklers.push({
            id: gen_id(),
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            section_16: [],
        })
        if (u32(offset + 16, is_little_endian) !== 0) {
            get_interface_sparkler_16(u32(offset + 16, is_little_endian) + offset_mid, outerXFA.sparklers[index].section_16)
        }

        return outerXFA.sparklers[index].id

    }
    function get_interface_sparkler_16(offset, XFA) {

        XFA.push({
            texture_00: [],
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            unknown_16: f32(offset + 16, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
            unknown_28: f32(offset + 28, is_little_endian),
            unknown_32: f32(offset + 32, is_little_endian),
            unknown_36: f32(offset + 36, is_little_endian),
            unknown_40: u32(offset + 40, is_little_endian),
            section_48: [],
            section_56: [],
        })
        if (u32(offset + 0, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset + 0 - offset_mid)
            if (patch_array != -1) {
                XFA[0].texture_00 = patch_array
            }
        }
        for (let i = 0; i < u32(offset + 44, is_little_endian); i++) {
            get_interface_sparkler_16_48(u32(offset + 48, is_little_endian) + offset_mid + (i * 12), XFA[0].section_48)
        }
        for (let i = 0; i < u32(offset + 52, is_little_endian); i++) {
            get_interface_sparkler_16_56(u32(offset + 56, is_little_endian) + offset_mid + (i * 32), XFA[0].section_56)
        }
    }

    function get_interface_sparkler_16_48(offset, XFA) {
        XFA.push({
            color: {
                R: u8(offset),
                G: u8(offset + 1),
                B: u8(offset + 2),
                A: u8(offset + 3),
            },
            unknown_08: f32(offset + 8, is_little_endian),
        })

    }
    function get_interface_sparkler_16_56(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_12: f32(offset + 12, is_little_endian),
            unknown_16: f32(offset + 16, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
            unknown_28: f32(offset + 28, is_little_endian),
        })

    }

    function get_layer_32(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_03: u8(offset + 3, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            section_12: [],
            section_20: [],
            section_28: [],
            section_36: [],
        })
        for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
            get_layer_32_12(u32(offset + 12, is_little_endian) + offset_mid + (i * 24), XFA[0].section_12)
        }
        for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
            get_layer_32_20(u32(offset + 20, is_little_endian) + offset_mid + (i * 12), XFA[0].section_20, i)
        }
        for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
            get_layer_32_20(u32(offset + 28, is_little_endian) + offset_mid + (i * 12), XFA[0].section_28, i)
            //same as structure as get_layer_32_20
        }
        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            get_frame_12(u32(offset + 36, is_little_endian) + offset_mid + (i * 28), XFA[0].section_36, i)
            //same as structure as get_frame_12
        }
    }

    function get_layer_32_12(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_06: u8(offset + 6, is_little_endian),
            unknown_07: u8(offset + 7, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            unknown_12: u32(offset + 12, is_little_endian),
            unknown_16: u32(offset + 16, is_little_endian),
            unknown_20: u32(offset + 20, is_little_endian),
        })
    }
    function get_layer_32_20(offset, XFA, i) {
        XFA.push({
            unknown_04: u16(offset + 4, is_little_endian),
            section_08: [],
        })
        if (u16(offset + 4, is_little_endian) === 0) {
            get_layer_32_20_08t0(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_08)
        } else if (u16(offset + 4, is_little_endian) === 1) {
            get_layer_32_20_08t1(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_08)
        }
    }
    function get_layer_32_20_08t0(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_06: u16(offset + 6, is_little_endian),
        })
    }
    function get_layer_32_20_08t1(offset, XFA) {
        XFA.push({
            section_00: [],
            section_04: [],
        })
        if (u32(offset + 0, is_little_endian)) {
            get_layer_32_20_08t1_00(u32(offset + 0, is_little_endian) + offset_mid, XFA[0].section_00)
        }
        if (u32(offset + 4, is_little_endian)) {
            get_layer_32_20_08t1_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }
    function get_layer_32_20_08t1_00(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            section_04: [],
        })
        if (u32(offset + 4, is_little_endian)) {
            get_layer_32_20_08t1_00_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_04)
        }
    }
    function get_layer_32_20_08t1_00_04(offset, XFA) {
        XFA.push({
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }
    function get_layer_32_20_08t1_04(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
        })
    }

    function get_layer_44(offset, XFA) {
        // always 0?
        XFA.push({
            temp: 0
        })

    }
    function get_layer_52(offset, XFA) {
        XFA.push({
            animations_04: [],
            animations_12: [],
            animations_20: [],
            animations_28: [],
            animations_36: [],
        })
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_layer_52_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32), XFA[0].animations_04)
        }
        for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
            get_layer_52_1(u32(offset + 12, is_little_endian) + offset_mid + (i * 32), XFA[0].animations_12)
        }
        for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
            get_layer_52_1(u32(offset + 20, is_little_endian) + offset_mid + (i * 32), XFA[0].animations_20)
        }
        for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
            get_layer_52_2(u32(offset + 28, is_little_endian) + offset_mid + (i * 12), XFA[0].animations_28)
        }
        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            get_layer_52_3(u32(offset + 36, is_little_endian) + offset_mid + (i * 40), XFA[0].animations_36)
        }
    }
    function get_layer_52_1(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_17: u8(offset + 17, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
        })
    }
    function get_layer_52_2(offset, XFA) {
        XFA.push({
            color: {
                R: u8(offset),
                G: u8(offset + 1),
                B: u8(offset + 2),
                A: u8(offset + 3),
            },
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
        })
    }
    function get_layer_52_3(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_12: f32(offset + 12, is_little_endian),
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_17: u8(offset + 17, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
        })
    }
    function get_layer_72(offset, XFA, i, l_type) {
        ttt = XFA
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            section_04: [],
            unknown_08: u32(offset + 8, is_little_endian),
        })
        if (u32(offset + 4, is_little_endian) !== 0) {
            get_layer_72_04(u32(offset + 4, is_little_endian) + offset_mid, XFA[i].section_04, l_type)
        }
    }
    function get_layer_72_04(offset, XFA, l_type) {
        XFA.push({
            layer_type: l_type,
            section_04: [],
            section_12: [],
            section_20: [],
            section_28: [],
            section_36: [],
            section_44: [],
            settings_link_48: 0,
        })
        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            get_layer_72_04_04(u32(offset + 4, is_little_endian) + offset_mid + (i * 20), XFA[0].section_04, i)
        }
        for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
            get_layer_72_04_12(u32(offset + 12, is_little_endian) + offset_mid + (i * 32), XFA[0].section_12)
        }

        // if (l_type !== 5) {
        //     for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
        //         get_layer_72_04_20(u32(offset + 20, is_little_endian) + offset_mid + (i * 16), XFA[0].section_20)
        //     }
        // } else {
        for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
            get_layer_72_04_20L5(u32(offset + 20, is_little_endian) + offset_mid + (i * 32), XFA[0].section_20)
            // }
        }

        for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
            get_layer_72_04_28(u32(offset + 28, is_little_endian) + offset_mid + (i * 32), XFA[0].section_28)
        }
        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            get_layer_72_04_36(u32(offset + 36, is_little_endian) + offset_mid + (i * 12), XFA[0].section_36)
        }
        for (let i = 0; i < u32(offset + 40, is_little_endian); i++) {
            get_layer_72_04_44(u32(offset + 44, is_little_endian) + offset_mid + (i * 48), XFA[0].section_44)
        }
        if (u32(offset + 48, is_little_endian) !== 0) {
            XFA[0].settings_link_48 = append_global_multilinked(u32(offset + 48, is_little_endian), setting_array, get_setting, outerXFA.settings)
        }
    }

    function get_layer_72_04_04(offset, XFA, i) {
        XFA.push({
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),

            unknown_08: f32(offset + 8, is_little_endian),
            section_16: [],
        })
        for (let ii = 0; ii < u32(offset + 12, is_little_endian); ii++) {
            get_layer_72_04_04_16(u32(offset + 16, is_little_endian) + offset_mid + (ii * 16), XFA[i].section_16, ii)
        }
    }

    function get_layer_72_04_04_16(offset, XFA, i) {
        XFA.push({
            section_08: [],
        })
        if (u32(offset + 8, is_little_endian) !== 0) {
            get_layer_72_04_04_16_08(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_08)
        }
    }
    function get_layer_72_04_04_16_08(offset, XFA) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_06: u16(offset + 6, is_little_endian),
        })
    }
    function get_layer_72_04_12(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_17: u8(offset + 17, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
        })
    }
    function get_layer_72_04_20(offset, XFA) {
        XFA.push({
            unknown_00: u8(offset + 0, is_little_endian),
            unknown_01: u8(offset + 1, is_little_endian),
            unknown_02: u8(offset + 2, is_little_endian),
            unknown_03: u8(offset + 3, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
        })
    }

    function get_layer_72_04_20L5(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_17: u8(offset + 17, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
        })
    }
    function get_layer_72_04_28(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_16: u8(offset + 16, is_little_endian),
            unknown_17: u8(offset + 17, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
        })
    }
    function get_layer_72_04_36(offset, XFA) {
        XFA.push({
            color: {
                R: u8(offset),
                G: u8(offset + 1),
                B: u8(offset + 2),
                A: u8(offset + 3),
            },
            unknown_04: u8(offset + 4, is_little_endian),
            unknown_05: u8(offset + 5, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
        })
    }
    function get_layer_72_04_44(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_12: f32(offset + 12, is_little_endian),
        })
    }
}

function append_global_multilinked(temp_offset, temp_array, temp_function, temp_XFA) {

    let temp_id = 0
    if (temp_offset !== 0) {

        if (temp_array.includes(temp_offset)) {
            let index = temp_array.indexOf(temp_offset)
            temp_id = temp_XFA[index].id
        } else {
            temp_array.push(temp_offset)
            temp_id = temp_function(temp_offset + offset_mid, temp_XFA.length)
        }
    }
    return temp_id
}
