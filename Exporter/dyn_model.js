function dyn_model(offset, XFA) {
    mid = offset_mid
    // idk
    let end_block = offset + 64

    set_u16(offset, XFA.magic, is_little_endian)
    set_f32(offset + 16, XFA.visibility.x1, is_little_endian)
    set_f32(offset + 20, XFA.visibility.y1, is_little_endian)
    set_f32(offset + 24, XFA.visibility.z1, is_little_endian)
    set_f32(offset + 28, XFA.visibility.w1, is_little_endian)
    set_f32(offset + 32, XFA.visibility.x2, is_little_endian)
    set_f32(offset + 36, XFA.visibility.y2, is_little_endian)
    set_f32(offset + 40, XFA.visibility.z2, is_little_endian)
    set_f32(offset + 44, XFA.visibility.w2, is_little_endian)
    set_f32(offset + 48, XFA.visibility.x3, is_little_endian)
    set_f32(offset + 52, XFA.visibility.y3, is_little_endian)
    set_f32(offset + 56, XFA.visibility.z3, is_little_endian)
    set_f32(offset + 60, XFA.visibility.w3, is_little_endian)

    if (XFA.sections.length) {
        let temp_offset = end_block
        global_offset_array.push(offset + 4 -mid)
        set_u16(offset + 2, XFA.sections.length, is_little_endian)
        set_u32(offset + 4, offset + 64 - mid, is_little_endian)
        global_offset_array.push(offset + 12- mid)
        end_block += divisible(XFA.sections.length * 8, 16)
        let render_offset = end_block
        end_block += divisible(XFA.sections.length * 4, 16)

        for (let i = 0; i < XFA.sections.length; i++) {
            end_block = dyn_model_04(temp_offset + (i * 8), XFA.sections[i], end_block)
        }

        set_u32(offset + 12, render_offset - mid, is_little_endian)

        for (let i = 0; i < XFA.sections.length; i++) {
            set_f32(render_offset + (i * 4), XFA.sections[i].render, is_little_endian)
        }

        // if (end_block === 252376) {
        //     end_block += 16
        // }
        // if (end_block === 332328) {
        //     end_block += 16
        // }
        // if (end_block === 351320) {
        //     end_block += 16
        // }
        // if (end_block === 352184) {
        //     end_block += 16
        // }
        // if (end_block === 355896) {
        //     end_block += 16
        // }
        // if (end_block === 363128) {
        //     end_block += 16
        // }
        // if (end_block === 374648) {
        //     end_block += 16
        // }
        // if (end_block === 380568) {
        //     end_block += 16
        // }
        // if (end_block === 404504) {
        //     end_block += 16
        // }
        // if (end_block === 416024) {
        //     end_block += 16
        // }

        if (XFA.second_names.length) {
            let start_offset = end_block

            for (let i = 0; i < XFA.second_names.length; i++) {
                // if (i === XFA.second_names.length -1) {
                // end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)
                // }else{
                end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)

            }
            end_block += 1

            end_block = start_offset + divisible(end_block - start_offset, 16)

        } else {

            // if (end_block === 1378600) {
            // } else if(end_block === 2884504) {
            // } else if(end_block === 3532568) {
            // } else if(end_block === 3515752) {
            // } else if(end_block === 3536360) {
            // } else if(end_block === 3553176) {
            // } else if(end_block === 5971928) {
            // } else if(end_block === 6579176) {
            // } else if(end_block === 6581000) {
            // } else if(end_block === 6587784) {
            // } else if(end_block === 6589288) {
            // } else if(end_block === 7103848) {
            // }else{
            //     end_block += 16
            // }

            

        }

        set_u32(offset + 8, end_block - mid, is_little_endian)
        global_offset_array.push(offset + 8- mid)
        end_block = dyn_string(end_block, XFA.name, mid)
    }

    return end_block
    // end model

    function dyn_model_04(offset, XFA, end_block) {

        if (XFA.sub_section.length) {
            let temp_offset = end_block
            set_u32(offset + 0, XFA.sub_section.length, is_little_endian)
            set_u32(offset + 4, end_block - mid, is_little_endian)
            global_offset_array.push(offset +4 - mid)
            end_block += divisible(XFA.sub_section.length * 4, 16)

            for (let i = 0; i < XFA.sub_section.length; i++) {
                end_block = dyn_model_04_04(temp_offset + (i * 4), XFA.sub_section[i], end_block)
            }

        }
        return end_block

    }

    function dyn_model_04_04(offset, XFA, end_block) {

        set_u32(offset, end_block - mid, is_little_endian)
        global_offset_array.push(offset - mid)
        end_block = dyn_model_04_04_00(end_block, XFA)

        return end_block

        // let end_block = jump_offset + divisible(XFA.sub_section.length * 4, 16)
        // let sub_sub_section_end = divisible(XFA.sub_section.length * 4, 16) + offset

        // set_u32(offset, XFA.sub_section.length, is_little_endian)
        // set_u32(offset + 4, jump_offset - mid, is_little_endian)

        // for (let i = 0; i < XFA.sub_section.length; i++) {
        //     end_block = dyn_model_04_04_00(jump_offset + (i * 4), XFA.sub_section[i], sub_sub_section_end, end_block)
        // }

        // return end_block
    }

    function dyn_model_04_04_00(offset, XFA) {
        end_block = offset + 96

        set_u32(offset + 0, XFA.unknown_00, is_little_endian)
        set_u32(offset + 8, XFA.unknown_08, is_little_endian)
        set_u8(offset + 12, XFA.unknown_12, is_little_endian)
        set_u8(offset + 13, XFA.unknown_13, is_little_endian)
        set_u8(offset + 15, XFA.unknown_15, is_little_endian)
        set_u32(offset + 16, XFA.unknown_16, is_little_endian)
        set_u32(offset + 24, XFA.unknown_24, is_little_endian)
        set_u32(offset + 28, XFA.unknown_28, is_little_endian)
        set_u8(offset + 44, XFA.unknown_44, is_little_endian)
        set_u8(offset + 45, XFA.unknown_45, is_little_endian)
        set_u8(offset + 46, XFA.unknown_46, is_little_endian)
        set_u8(offset + 47, XFA.unknown_47, is_little_endian)
        set_u8(offset + 49, XFA.unknown_49, is_little_endian)
        set_u8(offset + 52, XFA.unknown_52, is_little_endian)
        set_u8(offset + 53, XFA.unknown_53, is_little_endian)
        set_u8(offset + 54, XFA.unknown_54, is_little_endian)
        set_u8(offset + 55, XFA.unknown_55, is_little_endian)
        set_u32(offset + 56, XFA.unknown_56, is_little_endian)
        set_u32(offset + 60, XFA.unknown_60, is_little_endian)
        set_u32(offset + 64, XFA.unknown_64, is_little_endian)
        set_u32(offset + 88, XFA.unknown_88, is_little_endian)

        if (XFA.texture !== -1) {

            set_u16(offset + 40, XFA.texture[0][1], is_little_endian)
            // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
            set_u16(offset + 42, 52428, is_little_endian)
            texture_offset_index_array.push([offset + 40 - mid, XFA.texture[0][1], XFA.texture[0][2]])
        }else{
            set_u16(offset + 40, 65535, is_little_endian)
        }
        if (XFA.animation !== -1) {
            set_u16(offset + 36, XFA.texture[0][1], is_little_endian)
            // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
            set_u16(offset + 38, 52428, is_little_endian)
            texture_anim_offset_index_array.push([offset + 36 - mid, XFA.animation[0][1], XFA.animation[0][2]])
        }
        if (XFA.unknown_24_animation !== -1) {
            // set_u16(offset + 36, XFA.texture[0][1], is_little_endian)
            // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
            // set_u16(offset + 38, 52428, is_little_endian)
            texture_anim_offset_index_array.push([offset + 24 - mid, XFA.unknown_24_animation[0][1], XFA.unknown_24_animation[0][2]])
        }


        

        // texture_offset_index_array.push([offset - mid, XFA.texture[0][1], XFA.texture[0][2]])
        // add to xfa

        if (XFA.v_array.length !== 0) {
            let temp_offset = end_block
            global_offset_array.push(offset + 68 - mid)
            set_u32(offset + 68, end_block - mid, is_little_endian)
            end_block += divisible((XFA.v_array.byteLength), 16)
            for (let i = 0; i < XFA.v_array.byteLength / 4; i++) {
                set_f32(temp_offset + (i * 4), new DataView(XFA.v_array).getFloat32(i * 4, is_little_endian), is_little_endian)
                temp___ = temp_offset + (i * 4)
            }

        }

        if (XFA.c_array.length !== 0) {
            let temp_offset = end_block
            global_offset_array.push(offset + 72 - mid)
            set_u32(offset + 72, end_block - mid, is_little_endian)
            end_block += divisible((XFA.c_array.byteLength), 16)
            for (let i = 0; i < XFA.c_array.byteLength; i++) {
                set_u8(temp_offset + i, new DataView(XFA.c_array).getUint8(i, is_little_endian), is_little_endian)
            }

        }

        if (XFA.n_array.length !== 0) {
            let temp_offset = end_block
            global_offset_array.push(offset + 76 - mid)
            set_u32(offset + 76, end_block - mid, is_little_endian)
            end_block += divisible((XFA.n_array.byteLength), 16)
            for (let i = 0; i < XFA.n_array.byteLength / 4; i++) {
                set_f32(temp_offset + (i * 4), new DataView(XFA.n_array).getFloat32(i * 4, is_little_endian), is_little_endian)
            }

        }

        if (XFA.u_array.length !== 0) {
            let temp_offset = end_block
            global_offset_array.push(offset + 80 - mid)
            set_u32(offset + 80, end_block - mid, is_little_endian)
            end_block += divisible((XFA.u_array.byteLength), 16)
            for (let i = 0; i < XFA.u_array.byteLength / 4; i++) {
                set_f32(temp_offset + (i * 4), new DataView(XFA.u_array).getFloat32(i * 4, is_little_endian), is_little_endian)
            }

        }
        if (XFA.s_array.length !== 0) {
            let temp_offset = end_block
            global_offset_array.push(offset + 84 - mid)
            set_u32(offset + 84, end_block - mid, is_little_endian)
            end_block += divisible((XFA.s_array.byteLength), 16)
            for (let i = 0; i < XFA.s_array.byteLength; i++) {
                set_u8(temp_offset + (i * 1), new DataView(XFA.s_array).getUint8(i, is_little_endian), is_little_endian)
            }

        }

        if (XFA.section_92.length) {
            global_offset_array.push(offset + 92 - mid)
            set_u32(offset + 92, end_block - mid, is_little_endian)
            end_block = dyn_model_04_04_00_92(end_block, XFA.section_92[0])
        }

        return end_block
    }

    function dyn_model_04_04_00_92(offset, XFA) {
        let end_block = offset + 16

        set_u32(offset + 0, XFA.amount_00, is_little_endian)

        if (XFA.section_12.length) {
            let temp_offset = end_block
            global_offset_array.push(offset + 12 - mid)
            set_u32(offset + 8, XFA.section_12.length, is_little_endian)
            set_u32(offset + 12, end_block - mid, is_little_endian)

            end_block += divisible(XFA.section_12.length, 16)
            for (let i = 0; i < XFA.section_12.length; i++) {
                set_u8(temp_offset + i, XFA.section_12[i].unknown_00)
            }

        }

        return end_block
    }
}
