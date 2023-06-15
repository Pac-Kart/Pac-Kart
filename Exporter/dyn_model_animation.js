function dyn_model_animation_1(offset, XFA) {
    let temp_divisible = offset
    let end_block = offset + 64

    set_u32(offset + 0, XFA.unknown_00, is_little_endian)
    set_u32(offset + 4, XFA.unknown_04, is_little_endian)
    set_f32(offset + 8, XFA.unknown_08, is_little_endian)
    set_f32(offset + 12, XFA.unknown_12, is_little_endian)
    set_u32(offset + 16, XFA.unknown_16, is_little_endian)
    set_u32(offset + 20, XFA.unknown_20, is_little_endian)
    set_u32(offset + 24, 3452816845, is_little_endian)
    set_u32(offset + 28, 3452816845, is_little_endian)
    set_u32(offset + 36, 3452816845, is_little_endian)
    set_u32(offset + 44, 3452816845, is_little_endian)
    set_u32(offset + 48, 3452816845, is_little_endian)
    set_u32(offset + 56, 3452816845, is_little_endian)
    set_u32(offset + 60, 3452816845, is_little_endian)

    if (XFA.section_32.length !== 0) {
        let temp_offset = end_block
        set_u32(offset + 40, XFA.section_32.length, is_little_endian)
        set_u32(offset + 32, end_block - mid, is_little_endian)
        global_offset_array.push(offset + 32 - mid)
        end_block += XFA.section_32.length * 4
        for (let i = 0; i < XFA.section_32.length; i++) {
            dyn_model_animation_1_32(temp_offset + (i * 4), XFA.section_32[i])
        }
    }

    if (XFA.section_52.length !== 0) {
        set_u32(offset + 52, end_block - mid, is_little_endian)
        global_offset_array.push(offset + 52 - mid)
        end_block = dyn_model_animation_1_52(end_block, XFA.section_52[0])
    }

    if (end_block === 8323648) {
        end_block += 8
    } else if (end_block === 8328644) {
        end_block += 4
    }

    return end_block

    function dyn_model_animation_1_32(offset, XFA) {
        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
    }
    function dyn_model_animation_1_52(offset, XFA) {
        let end_block = offset + 36
        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 4, XFA.unknown_04, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)

        if (XFA.section_12.length) {
            let temp_offset = end_block
            set_u32(offset + 12, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 12 - mid)
            for (let i = 0; i < XFA.section_12.length; i++) {
                dyn_model_animation_1_32_12(temp_offset + (i * 2), XFA.section_12[i])

            }
            let temp_block = XFA.section_12.length * 2 + temp_offset
            end_block += replacement_divisibility(XFA.section_12.length * 2, 4,temp_block, 205)
            // end_block += divisible(XFA.section_12.length * 2, 4)
        } else {
            set_u32(offset + 12, 3452816845, is_little_endian)
        }

        if (XFA.section_24.length) {
            let temp_offset = end_block
            set_u32(offset + 24, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 24 - mid)
            end_block += XFA.section_24.length * 4
            for (let i = 0; i < XFA.section_24.length; i++) {
                dyn_model_animation_1_32_24(temp_offset + (i * 4), XFA.section_24[i])

            }
        } else {
            set_u32(offset + 24, 3452816845, is_little_endian)
        }

        if (XFA.section_20.length) {
            let temp_offset = end_block
            set_u32(offset + 20, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 20 - mid)
            for (let i = 0; i < XFA.section_20.length; i++) {
                dyn_model_animation_1_32_12(temp_offset + (i * 2), XFA.section_20[i])

            }
            let temp_block = XFA.section_20.length * 2 + temp_offset
            end_block += replacement_divisibility(XFA.section_20.length * 2, 4,temp_block, 205)
            // end_block += divisible(XFA.section_20.length * 2,4)
        } else {
            set_u32(offset + 20, 3452816845, is_little_endian)
        }

        if (XFA.section_28.length) {
            let temp_offset = end_block
            set_u32(offset + 28, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 28 - mid)

            end_block = dyn_model_animation_1_32_28(temp_offset, XFA.section_28[0])

        }

        if (XFA.section_16.length) {
            let temp_offset = end_block
            set_u32(offset + 16, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 16 - mid)
            end_block += XFA.section_16.length * 2
            for (let i = 0; i < XFA.section_16.length; i++) {
                dyn_model_animation_1_32_12(temp_offset + (i * 2), XFA.section_16[i])

            }
        }

        if (XFA.section_32.length) {
            let temp_offset = end_block
            set_u32(offset + 32, end_block - mid, is_little_endian)
            global_offset_array.push(offset + 32 - mid)

            end_block = dyn_model_animation_1_32_32(temp_offset, XFA.section_32[0])

        }

        if (debug) {
            set_u32(offset + 0, 841822529, is_little_endian)
        }

        return end_block

    }

    function dyn_model_animation_1_32_12(offset, XFA) {
        set_u16(offset + 0, XFA.unknown_00, is_little_endian)

        if (debug) {
            set_u8(offset + 0, 48, is_little_endian)
        }
    }
    function dyn_model_animation_1_32_24(offset, XFA) {

        set_f32(offset + 0, XFA.unknown_00, is_little_endian)

        if (debug) {
            set_u8(offset + 0, 52, is_little_endian)
        }
    }
    function dyn_model_animation_1_32_28(offset, XFA) {

        for (let i = 0; i < XFA.temp_buffer.byteLength; i++) {
            set_u8(offset + i, new DataView(XFA.temp_buffer).getUint8(i))
        }
        if (debug) {
            set_u32(offset + 0, 1380337218, is_little_endian)
        }

        return offset + XFA.temp_buffer.byteLength
    }
    function dyn_model_animation_1_32_32(offset, XFA) {

        for (let i = 0; i < XFA.temp_buffer.byteLength; i++) {
            set_u8(offset + i, new DataView(XFA.temp_buffer).getUint8(i))
        }
        if (debug) {
            set_u32(offset + 0, 1380337218, is_little_endian)
        }

        let end = offset + XFA.temp_buffer.byteLength
        end = end - temp_divisible
        

        return offset + XFA.temp_buffer.byteLength + divisible(end, 16) - end

    }
}

function dyn_model_animation_2(offset, XFA) {
    let end_block = offset + 32

    set_u32(offset + 4, XFA.unknown_04, is_little_endian)
    set_u32(offset + 8, XFA.unknown_08, is_little_endian)

    if (XFA.section_16.length) {
        let temp_offset = end_block
        set_u32(offset + 0, XFA.section_16.length, is_little_endian)
        set_u32(offset + 16, end_block - mid, is_little_endian)
        global_offset_array.push(offset + 16 - mid)
        end_block += XFA.section_16.length * 32

        for (let i = 0; i < XFA.section_16.length; i++) {
            dyn_model_animation_2_16(temp_offset + (i * 32), XFA.section_16[i])
        }
    }

    return end_block

    function dyn_model_animation_2_16(offset, XFA) {

        set_f32(offset + 0, XFA.unknown_00, is_little_endian)
        set_f32(offset + 4, XFA.unknown_04, is_little_endian)
        set_f32(offset + 8, XFA.unknown_08, is_little_endian)
        set_f32(offset + 12, XFA.unknown_12, is_little_endian)
        set_f32(offset + 16, XFA.unknown_16, is_little_endian)
        set_f32(offset + 20, XFA.unknown_20, is_little_endian)
        set_f32(offset + 24, XFA.unknown_24, is_little_endian)
        set_u8(offset + 28, XFA.unknown_28, is_little_endian)
        set_u8(offset + 29, XFA.unknown_29, is_little_endian)
        set_u8(offset + 30, XFA.unknown_30, is_little_endian)
        set_u8(offset + 31, XFA.unknown_31, is_little_endian)

    }

}
