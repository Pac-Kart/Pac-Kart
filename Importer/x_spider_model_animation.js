function get_model_animations_1(offset, index) {
    // move this later
    XFA_main.model_animations_1.push({
        id: gen_id(),
        unknown_00: u32(offset + 0, is_little_endian),
        unknown_04: u32(offset + 4, is_little_endian),
        unknown_08: f32(offset + 8, is_little_endian),
        unknown_12: f32(offset + 12, is_little_endian),
        unknown_16: u32(offset + 16, is_little_endian),
        unknown_20: u32(offset + 20, is_little_endian),
        section_32: [],
        section_52: [],
    })

    for (let i = 0; i < u32(offset + 40, is_little_endian); i++) {
        get_model_animations_1_32(u32(offset + 32, is_little_endian) + offset_mid + (i * 4), XFA_main.model_animations_1[index].section_32)
    }

    if (u32(offset + 52, is_little_endian) !== 0) {
        get_model_animations_1_52(u32(offset + 52, is_little_endian) + offset_mid, XFA_main.model_animations_1[index].section_52, u32(offset + 40, is_little_endian))
    }

    return XFA_main.model_animations_1[index].id

    function get_model_animations_1_32(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
        })
    }
    function get_model_animations_1_52(offset, XFA, amount_6) {
        XFA.push({
            unknown_00: u32(offset + 0, is_little_endian),
            unknown_04: u32(offset + 4, is_little_endian),
            unknown_08: u32(offset + 8, is_little_endian),
            section_12: [],
            section_16: [],
            section_20: [],
            section_24: [],
            section_28: [],
            section_32: [],
        })
        if (u32(offset + 12, is_little_endian) && u32(offset + 12, is_little_endian) !== 3452816845) {

            for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
                get_model_animations_1_52_12(u32(offset + 12, is_little_endian) + offset_mid + (i * 2), XFA[0].section_12)
            }

        }

        if (u32(offset + 16, is_little_endian)) {
            for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
                get_model_animations_1_52_12(u32(offset + 16, is_little_endian) + offset_mid + (i * 2), XFA[0].section_16)
            }
        }

        if (u32(offset + 20, is_little_endian) && u32(offset + 20, is_little_endian) !== 3452816845) {
            for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
                get_model_animations_1_52_12(u32(offset + 20, is_little_endian) + offset_mid + (i * 2), XFA[0].section_20)
            }
        }
        if (u32(offset + 24, is_little_endian) && u32(offset + 24, is_little_endian) !== 3452816845) {
            for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
                get_model_animations_1_52_24(u32(offset + 24, is_little_endian) + offset_mid + (i * 4), XFA[0].section_24)
            }

        }
        if (u32(offset + 28, is_little_endian)) {
            get_model_animations_1_52_28(u32(offset + 28, is_little_endian) + offset_mid, XFA[0].section_28, u32(offset + 16, is_little_endian) + offset_mid)
            // fix later
        }

        if (u32(offset + 32, is_little_endian) && u32(offset + 32, is_little_endian) !== 3452816845) {
            let temp_offset = u32(offset + 32, is_little_endian) + offset_mid
            get_model_animations_1_52_28(temp_offset, XFA[0].section_32,temp_offset + (amount_6 * u32(offset + 8, is_little_endian) * 2))
            // fix later
        }
    }

    function get_model_animations_1_52_12(offset, XFA) {
        XFA.push({
            unknown_00: u16(offset + 0, is_little_endian),
        })
    }
    function get_model_animations_1_52_24(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
        })
    }
    function get_model_animations_1_52_28(offset, XFA, end_offset) {
        XFA.push({
            temp_buffer: buffer.slice(offset, end_offset),
        })
    }

}

function get_model_animations_2(offset, index) {
    // move this later
    XFA_main.model_animations_2.push({
        id: gen_id(),
        unknown_04: u32(offset + 4, is_little_endian),
        unknown_08: u32(offset + 8, is_little_endian),
        section_16: [],
    })

    for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
        get_model_animations_2_16(u32(offset + 16, is_little_endian) + offset_mid + (i * 32), XFA_main.model_animations_2[index].section_16)
    }

    return XFA_main.model_animations_2[index].id

    function get_model_animations_2_16(offset, XFA) {
        XFA.push({
            unknown_00: f32(offset + 0, is_little_endian),
            unknown_04: f32(offset + 4, is_little_endian),
            unknown_08: f32(offset + 8, is_little_endian),
            unknown_12: f32(offset + 12, is_little_endian),
            unknown_16: f32(offset + 16, is_little_endian),
            unknown_20: f32(offset + 20, is_little_endian),
            unknown_24: f32(offset + 24, is_little_endian),
            unknown_28: u8(offset + 28, is_little_endian),
            unknown_29: u8(offset + 29, is_little_endian),
            unknown_30: u8(offset + 30, is_little_endian),
            unknown_31: u8(offset + 31, is_little_endian),
        })
    }

}
