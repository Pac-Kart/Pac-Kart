function im_model_animation_2_(offset, index, x) {
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
            get_model_animations_1_52_28(temp_offset, XFA[0].section_32, temp_offset + (amount_6 * u32(offset + 8, is_little_endian) * 2))
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

function im_model_animation_2(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_model_animation_2_1(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
}

function im_model_animation_2_1(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

}
//

function im_model_animation_1(o, i, x) {
    let temp_obj = {
        _40_amount: u32(o + 40),
        _sub_00_amount: 0,
        _sub_04_amount: 0,
        _sub_08_amount: 0,
        _52t35_padding: 0,
    }

    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //check this
        u32_04: u32(o + 04),
        //check this
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        section_28: [],
        section_32: [],
        section_36: [],
        u32_40: u32(o + 40),
        section_44: [],
        u32_48: u32(o + 48),
        section_52: [],
        u32_56: u32(o + 56),
        //check this
        u32_60: u32(o + 60),
        //check this
    });

    switch (u32(o + 00)) {
    case 1:
    case 4:
        if (u32(o + 16) === 1) {
            u32(o + 24) ? im_model_animation_1_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        } else if (u32(o + 16) === 28) {
            u32(o + 24) ? im_model_animation_1_24t28(u32(o + 24) + g.m, x[i].section_24) : 0;
        }
        break;
    case 3:
        u32(o + 24) ? im_model_animation_1_24t3(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 5:
        x[i].section_24 = u32(o + 24)
        break;
    }

    switch (u32(o + 00)) {
    case 1:
    case 3:
    case 4:
        if (u32(o + 16) === 1) {
            u32(o + 28) ? im_model_animation_1_28t1(u32(o + 28) + g.m, x[i].section_28) : 0;
        } else if (u32(o + 16) === 28) {
            u32(o + 28) ? im_model_animation_1_28t28(u32(o + 28) + g.m, x[i].section_28) : 0;
        }
        break;
    case 5:
        x[i].section_28 = u32(o + 28)
        break;
    }

    // for (let ii = 0; ii < u32(o + 40); ii++) {
    //     im_model_animation_1_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    // }
    if (u32(o + 32) && u32(o + 40)) {
        im_model_animation_1_32(u32(o + 32) + g.m, x[i].section_32)
    }

    switch (u32(o + 00)) {
    case 1:
    case 3:
    case 4:
        u32(o + 36) ? im_model_animation_1_36(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 5:
        x[i].section_36 = u32(o + 36)
        break
    }

    switch (u32(o + 00)) {
    case 1:
    case 4:
        u32(o + 44) ? im_model_animation_1_44(u32(o + 44) + g.m, x[i].section_44) : 0;
        break;
    case 3:
    case 5:
        x[i].section_44 = u32(o + 44)
        break;
    }

    switch (u32(o + 04)) {
    case 35:
    case 291:
        u32(o + 52) ? im_model_animation_1_52t35(u32(o + 52) + g.m, x[i].section_52) : 0;
        break;
    case 163:
    case 419:
        u32(o + 52) ? im_model_animation_1_52t163(u32(o + 52) + g.m, x[i].section_52) : 0;
        break;
    case 11:
    case 67:
        x[i].section_52 = u32(o + 52)
        break;
    }
    return x[i].id

    function im_model_animation_1_24t1(o, x) {
        x.push({
            u32_00: u32(o + 00),
        });

    }
    function im_model_animation_1_24t28(o, x) {
        x.push({
            u32_00: u32(o + 00),
            u32_04: u32(o + 04),
            u32_08: u32(o + 08),
            u32_12: u32(o + 12),
            u32_16: u32(o + 16),
            u32_20: u32(o + 20),
            u32_24: u32(o + 24),
        });

    }
    function im_model_animation_1_28t1(o, x) {
        x.push({
            u16_00: u16(o + 00),
            u8_02: u8(o + 02),
            u8_03: u8(o + 03),
            u8_04: u8(o + 04),
            u8_05: u8(o + 05),
            u8_06: u8(o + 06),
            u8_07: u8(o + 07),
            u8_08: u8(o + 08),
            u8_09: u8(o + 09),
            u8_10: u8(o + 10),
            u8_11: u8(o + 11),
        });

    }
    function im_model_animation_1_28t28(o, x) {
        x.push({
            u16_00: u16(o + 00),
        });

    }
    function im_model_animation_1_24t3(o, x) {
        x.push({
            u32_00: u32(o + 00),
        });

    }
    function im_model_animation_1_32(o, x) {
        let bufferamt = (temp_obj._40_amount * 4)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     id: gen_id(),
        //     f32_00: f32(o + 00),
        // });

    }
    function im_model_animation_1_44(o, x) {
        x.push({
            // id: gen_id(),
            f32_00: f32(o + 00),
        });

    }
    function im_model_animation_1_36(o, x) {
        x.push({
            f32_00: f32(o + 00),
        });

    }
    function im_model_animation_1_52t35(o, x) {
        temp_obj._sub_00_amount = u32(o + 00)
        temp_obj._sub_04_amount = u32(o + 04)
        temp_obj._sub_08_amount = u32(o + 08)

        if (o === 15516960) {
            console.log('?')
        }

        x.push({
            u32_00: u32(o + 00),
            //amount?
            u32_04: u32(o + 04),
            //amount?
            u32_08: u32(o + 08),
            //amount?
            section_12: [],
            section_16: [],
            section_20: [],
            section_24: [],
            section_28: [],
            section_32: [],
        });

        if (u32(o + 12) && u32(o + 0)) {
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 12) + g.m : 0;
            im_model_animation_1_52t35_12(u32(o + 12) + g.m, x[0].section_12)
        } else {
            x[0].section_12 = u32(o + 12)
        }


        if (u32(o + 24) && u32(o + 0)) {
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 24) + g.m : 0;

            im_model_animation_1_52t35_24(u32(o + 24) + g.m, x[0].section_24)
        } else {
            x[0].section_24 = u32(o + 24)
        }


        if (u32(o + 20) && u32(o + 4)) {
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 20) + g.m : 0;

            im_model_animation_1_52t35_20(u32(o + 20) + g.m, x[0].section_20)
        } else {
            x[0].section_20 = u32(o + 20)
        }


        if (u32(o + 28) && u32(o + 4)) {
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 28) + g.m : 0;

            im_model_animation_1_52t35_28(u32(o + 28) + g.m, x[0].section_28)
        } else {
            x[0].section_28 = u32(o + 28)
        }

        if (u32(o + 16) && u32(o + 8)) {
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 16) + g.m : 0;
            
            im_model_animation_1_52t35_16(u32(o + 16) + g.m, x[0].section_16)
        } else {
            x[0].section_16 = u32(o + 16)
        }

        if (u32(o + 32) && u32(o + 8)) {
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 32) + g.m : 0;

            im_model_animation_1_52t35_32(u32(o + 32) + g.m, x[0].section_32)
        } else {
            x[0].section_32 = u32(o + 32)
        }

    }
    function im_model_animation_1_52t35_12(o, x) {
        let bufferamt = (temp_obj._sub_00_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

    }
    function im_model_animation_1_52t35_24(o, x) {
        let bufferamt = (temp_obj._sub_00_amount * 4)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     f32_00: f32(o + 00),
        // });

    }
    function im_model_animation_1_52t35_20(o, x) {
        let bufferamt = (temp_obj._sub_04_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     u16_00: u16(o + 00),
        // });

    }
    function im_model_animation_1_52t35_28(o, x) {
        let bufferamt = ((temp_obj._40_amount * 2) * temp_obj._sub_04_amount) * 4

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     f32_00: f32(o + 00),
        // });

    }
    function im_model_animation_1_52t35_16(o, x) {
        let bufferamt = (temp_obj._sub_08_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     u16_00: u16(o + 00),
        // });

    }
    function im_model_animation_1_52t35_32(o, x) {
        let bufferamt = temp_obj._40_amount * (temp_obj._sub_08_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

    }
    function im_model_animation_1_52t163(o, x) {
        x.push({
            u8_00: u8(o + 00),
            //amount?
            u8_04: u8(o + 04),
            //amount?
            section_08: [],
            section_12: [],
        });

        for (let i = 0; i < u32(o + 04); i++) {
            im_model_animation_1_52t163_08(u32(o + 08) + (i * 1) + g.m, i, x[0].section_08);
        }
        // offset 12

    }
    function im_model_animation_1_52t163_08(o, i, x) {
        x.push({
            // id: gen_id(),
            u8_00: u8(o + 00),
        });

    }
    function im_model_animation_1_52t163_12(o, i, x) {
        x.push({
            // id: gen_id(),
            u8_00: u8(o + 00),
        });

    }

}
