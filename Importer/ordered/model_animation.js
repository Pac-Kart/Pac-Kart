"use strict";
function im_model_animation_2(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_model_animation_2_1(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
}

function im_model_animation_2_1(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
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
        _48_amount: u32(o + 48),
        _sub_00_amount: 0,
        _sub_04_amount: 0,
        _sub_08_amount: 0,
        _52t35_padding: 0,
        main_padding_end: 0,
        _1_44_end: 0xffffffff,
        _1_44_end: 0xffffffff,
    }

    temp_obj.main_padding_end = o + 64

    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
        u32_04: u32(o + 4),
        //check this
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        section_28: [],
        section_32: [],
        section_32_padding: 0,
        section_36: [],
        u32_40: u32(o + 40),
        section_44: [],
        u32_48: u32(o + 48),
        section_52: [],
        u32_56: u32(o + 56),
        //check this
        u32_60: u32(o + 60),
        padding: 0,
        //check this
    });

    // switch (u32(o + 0)) {
    // case 1:
    // case 3:
    // case 4:
    //     if (u32(o + 16) === 1) {
    //         u32(o + 28) ? im_model_animation_1_28t1(u32(o + 28) + g.m, x[i].section_28) : 0;
    //     } else if (u32(o + 16) === 28) {
    //         u32(o + 28) ? im_model_animation_1_28t28(u32(o + 28) + g.m, x[i].section_28) : 0;
    //     }
    //     break;
    // case 5:
    //     x[i].section_28 = u32(o + 28)
    //     break;
    // }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        if (u32(o + 16) === 1) {
            u32(o + 28) ? im_model_animation_1_28t1(u32(o + 28) + g.m, x[i].section_28) : 0;
        } else if (u32(o + 16) === 28) {
            console.log(u32(o + 4))
            u32(o + 28) ? im_model_animation_1_28t28(u32(o + 28) + g.m, x[i].section_28) : 0;
        }
        break;
    case 3:
        if (u32(o + 16) === 1) {
            u32(o + 28) ? im_model_animation_1_28t3(u32(o + 28) + g.m, x[i].section_28) : 0;
        }
        break
    case 5:
        x[i].section_28 = u32(o + 28)
        break;
    }

    switch (u32(o + 0)) {
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

    // for (let ii = 0; ii < u32(o + 40); ii++) {
    //     im_model_animation_1_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    // }
    if (u32(o + 32) && u32(o + 40)) {
        im_model_animation_1_32(u32(o + 32) + g.m, x[i].section_32)
    }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        u32(o + 36) ? im_model_animation_1_36(u32(o + 36) + g.m, x[i].section_36, u32(o + 4)) : 0;
        break;
    case 3:
        if (u32(o + 32) && u32(o + 36)) {

            let end = u32(o + 32) + (temp_obj._40_amount * 4) + g.m
            let begin = u32(o + 36) + g.m
            x[i].section_32_padding = begin - end
        }
        u32(o + 36) ? im_model_animation_1_36t3(u32(o + 36) + g.m, x[i].section_36, u32(o + 48)) : 0;
        break
    case 5:
        x[i].section_36 = u32(o + 36)
        break
    }

    switch (u32(o + 0)) {
    case 1:
    case 4:
        u32(o + 44) ? im_model_animation_1_44(u32(o + 44) + g.m, x[i].section_44) : 0;
        break;
    case 3:
    case 5:
        x[i].section_44 = u32(o + 44)
        break;
    }

    switch (u32(o + 4)) {
    case 291:
        if (u32(o + 32) && u32(o + 52)) {
            let end = u32(o + 40) * 4 + u32(o + 32) + g.m
            let begin = u32(o + 52) + g.m
            x[i].section_32_padding = begin - end
        }
    case 35:
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
    x[i].padding = temp_obj.main_padding_end
    return x[i].id

    function im_model_animation_1_24t1(o, x) {
        x.push({
            u32_00: u32(o + 0),
        });
        o > temp_obj.main_padding_end ? temp_obj.main_padding_end = o : 0;
    }
    function im_model_animation_1_24t28(o, x) {
        x.push({
            u32_00: u32(o + 0),
            u32_04: u32(o + 4),
            u32_08: u32(o + 8),
            u32_12: u32(o + 12),
            u32_16: u32(o + 16),
            u32_20: u32(o + 20),
            u32_24: u32(o + 24),
        });
        o + 28 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 28 : 0;
    }
    function im_model_animation_1_28t1(o, x) {
        x.push({
            u16_00: u16(o + 0),
            u8_02: u8(o + 2),
            u8_03: u8(o + 3),
            u8_04: u8(o + 4),
            u8_05: u8(o + 5),
            u8_06: u8(o + 6),
            u8_07: u8(o + 7),
            u8_08: u8(o + 8),
            u8_09: u8(o + 9),
            u8_10: u8(o + 10),
            u8_11: u8(o + 11),
        });
        o + 12 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 12 : 0;
    }

    function im_model_animation_1_28t3(o, x) {
        x.push({
            f32_00: f32(o + 0),
            f32_04: f32(o + 4),
            f32_08: f32(o + 8),
            f32_12: f32(o + 12),
        });
        o + 16 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 16 : 0;
    }

    function im_model_animation_1_28t28(o, x) {
        x.push({
            u16_00: u16(o + 0),
            u16_02: u16(o + 2),
            u16_04: u16(o + 4),
            u16_06: u16(o + 6),
            u16_08: u16(o + 8),
            u16_10: u16(o + 10),
            u16_12: u16(o + 12),
            u16_14: u16(o + 14),
            u16_16: u16(o + 16),
            u16_18: u16(o + 18),
            u16_20: u16(o + 20),
            u16_22: u16(o + 22),
            u16_24: u16(o + 24),
            u16_26: u16(o + 26),
            u16_28: u16(o + 28),
            u16_30: u16(o + 30),
            u16_32: u16(o + 32),
            u16_34: u16(o + 34),
            u16_36: u16(o + 36),
            u16_38: u16(o + 38),
            u16_40: u16(o + 40),
            u16_42: u16(o + 42),
            u16_44: u16(o + 44),
            u16_46: u16(o + 46),
            u16_48: u16(o + 48),
            u16_50: u16(o + 50),
            u16_52: u16(o + 52),
            u16_54: u16(o + 54),
            u32_56: u32(o + 56),
            u32_60: u32(o + 60),
            u32_64: u32(o + 64),
        });
        o + 68 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 68 : 0;
    }
    function im_model_animation_1_24t3(o, x) {
        x.push({
            u32_00: u32(o + 0),
        });
        o + 4 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 4 : 0;
    }
    function im_model_animation_1_32(o, x) {
        let bufferamt = (temp_obj._40_amount * 4)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     id: gen_id(),
        //     f32_00: f32(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;

    }
    function im_model_animation_1_44(o, x) {

        let tempidk = (temp_obj._1_44_end)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, tempidk),
        });

        tempidk > temp_obj.main_padding_end ? temp_obj.main_padding_end = tempidk : 0;
    }
    function im_model_animation_1_36(o, x, t) {
        let tempidk
        if (t !== 67) {
            tempidk = (temp_obj._40_amount * temp_obj._48_amount) * 4
        } else {
            tempidk = 1152
        }

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, tempidk + o),
        });

        o < temp_obj._1_44_end ? temp_obj._1_44_end = o : 0;
        tempidk + o > temp_obj.main_padding_end ? temp_obj.main_padding_end = tempidk + o : 0;
    }

    function im_model_animation_1_36t3(o, x, t) {
        let tempidk
        if (t === 1) {
            tempidk = ((temp_obj._40_amount - 1) * 96)
        } else {
            tempidk = ((temp_obj._40_amount - 1) * 128)
        }

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, tempidk + o),
        });

        // o < temp_obj._1_44_end ? temp_obj._1_44_end = o : 0;
        tempidk + o > temp_obj.main_padding_end ? temp_obj.main_padding_end = tempidk + o : 0;

    }
    function im_model_animation_1_52t35(o, x) {
        if (o === 12556940) {
            console.log('?')
        }
        temp_obj._sub_00_amount = u32(o + 0)
        temp_obj._sub_04_amount = u32(o + 4)
        temp_obj._sub_08_amount = u32(o + 8)

        x.push({
            u32_00: u32(o + 0),
            //amount?
            u32_04: u32(o + 4),
            //amount?
            u32_08: u32(o + 8),
            //amount?
            section_12: [],
            section_16: [],
            section_20: [],
            section_24: [],
            section_28: [],
            section_32: [],
            padding: 0,
            padding_12: 0,
            padding_20: 0,
            padding_24: 0,
            padding_28: 0,
            padding_16: 0,
        });

        if (u32(o + 12) && u32(o + 0)) {
            x[0].padding = u32(o + 12) + g.m - (o + 36)
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 12) + g.m : 0;
            im_model_animation_1_52t35_12(u32(o + 12) + g.m, x[0].section_12)
        } else {
            x[0].section_12 = u32(o + 12)
        }

        if (u32(o + 24) && u32(o + 0)) {
            x[0].padding_12 = u32(o + 24) - (u32(o + 12) + (temp_obj._sub_00_amount * 2))
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 24) + g.m : 0;

            im_model_animation_1_52t35_24(u32(o + 24) + g.m, x[0].section_24)
        } else {
            x[0].section_24 = u32(o + 24)
        }

        if (u32(o + 20) && u32(o + 4)) {
            if (u32(o + 24) && u32(o + 0)) {
                x[0].padding_24 = u32(o + 20) - (u32(o + 24) + (temp_obj._sub_00_amount * 4))
            }
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 20) + g.m : 0;

            im_model_animation_1_52t35_20(u32(o + 20) + g.m, x[0].section_20)
        } else {
            x[0].section_20 = u32(o + 20)
        }

        if (u32(o + 28) && u32(o + 4)) {
            if (g.model_animation_1_array.length === 12) {
                // console.log('?')
            }
            x[0].padding_20 = u32(o + 28) - (u32(o + 20) + temp_obj._sub_04_amount * 2)
            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 28) + g.m : 0;

            im_model_animation_1_52t35_28(u32(o + 28) + g.m, x[0].section_28)
        } else {
            x[0].section_28 = u32(o + 28)
        }

        if (u32(o + 16) && u32(o + 8)) {
            if (u32(o + 28) && u32(o + 4)) {
                x[0].padding_28 = u32(o + 16) - (u32(o + 28) + ((temp_obj._40_amount * 2) * temp_obj._sub_04_amount) * 4)
            }

            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 16) + g.m : 0;

            im_model_animation_1_52t35_16(u32(o + 16) + g.m, x[0].section_16)
        } else {
            x[0].section_16 = u32(o + 16)
        }

        if (u32(o + 32) && u32(o + 8)) {
            x[0].padding_16 = u32(o + 32) - (u32(o + 16) + (temp_obj._sub_08_amount * 2))

            temp_obj._52t35_padding === 0 ? temp_obj._52t35_padding = u32(o + 32) + g.m : 0;

            im_model_animation_1_52t35_32(u32(o + 32) + g.m, x[0].section_32)
        } else {
            x[0].section_32 = u32(o + 32)
        }
        o + 36 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 36 : 0;
    }
    function im_model_animation_1_52t35_12(o, x) {
        let bufferamt = (temp_obj._sub_00_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_24(o, x) {
        let bufferamt = (temp_obj._sub_00_amount * 4)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     f32_00: f32(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_20(o, x) {
        let bufferamt = (temp_obj._sub_04_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     u16_00: u16(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_28(o, x) {
        let bufferamt = ((temp_obj._40_amount * 2) * temp_obj._sub_04_amount) * 4

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     f32_00: f32(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_16(o, x) {
        let bufferamt = (temp_obj._sub_08_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });

        // x.push({
        //     // id: gen_id(),
        //     u16_00: u16(o + 0),
        // });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t35_32(o, x) {
        let bufferamt = temp_obj._40_amount * (temp_obj._sub_08_amount * 2)

        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + bufferamt),
        });
        o + bufferamt > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + bufferamt : 0;
    }
    function im_model_animation_1_52t163(o, x) {
        x.push({
            u8_00: u8(o + 0),
            //amount?
            u8_04: u8(o + 4),
            //amount?
            section_08: [],
            section_12: [],
        });

        for (let i = 0; i < u32(o + 4); i++) {
            im_model_animation_1_52t163_08(u32(o + 8) + (i * 1) + g.m, i, x[0].section_08);
        }
        if (u32(o + 0) === 0) {
            x[0].section_12 = u32(o + 12)
        } else {

            for (let i = 0; i < u32(o + 0); i++) {
                im_model_animation_1_52t163_12(u32(o + 12) + (i * 1) + g.m, i, x[0].section_12);
            }
        }
        // offset 12
        o + 16 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 16 : 0;
    }
    function im_model_animation_1_52t163_08(o, i, x) {
        x.push({
            // id: gen_id(),
            u8_00: u8(o + 0),
        });
        o + 1 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 1 : 0;
    }
    function im_model_animation_1_52t163_12(o, i, x) {
        x.push({
            // id: gen_id(),
            u8_00: u8(o + 0),
        });
        o + 1 > temp_obj.main_padding_end ? temp_obj.main_padding_end = o + 1 : 0;
    }

}
