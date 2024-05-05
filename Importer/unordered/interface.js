"use strict";
function im_interface(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u16_02: u16(o + 2),
        section_04: [],
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        unordered_sound_controls_28: 0,
        unordered_sound_controls_36: 0,
        unordered_sound_controls_40: 0,
        u32_44: u32(o + 44),
        section_48: [],
        unordered_sound_controls_52: 0,
        section_56: [],
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 4) && im_interface_04(u32(o + 4) + g.m, x[i].section_04);

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_interface_12(u32(o + 12) + (ii * 28) + g.m, ii, x[i].section_12);
    }
    x[i].unordered_sound_controls_28 = in_ml(u32(o + 28), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    x[i].unordered_sound_controls_36 = in_ml(u32(o + 36), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    x[i].unordered_sound_controls_40 = in_ml(u32(o + 40), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    u32(o + 48) ? im_interface_48(u32(o + 48) + g.m, x[i].section_48) : 0;
    x[i].unordered_sound_controls_52 = in_ml(u32(o + 52), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    u32(o + 56) ? im_interface_56(u32(o + 56) + g.m, x[i].section_56) : 0;

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_interface_72(u32(o + 72) + (ii * 100) + g.m, ii, x[i].section_72);
    }
    // 80 bytes;

    return x[i].id
}
function im_xdx_interface(o, x) {
    x.push({
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        section_48: [],
        section_56: [],
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 4) ? im_interface_04(u32(o + 4) + g.m, x[0].section_04) : 0;

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_12(u32(o + 12) + (i * 28) + g.m, i, x[0].section_12);
    }
    u32(o + 48) ? im_interface_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    u32(o + 56) ? im_xdx_interface_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    for (let i = 0; i < u32(o + 68); i++) {
        im_interface_72(u32(o + 72) + (i * 100) + g.m, i, x[0].section_72);
    }
    // 80 bytes;

}
function im_interface_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_04_04(u32(o + 4) + (i * 36) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 12) ? im_interface_04_04_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_interface_04_04_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_interface_04_04_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_interface_04_04_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 9:
        u32(o + 12) ? im_interface_04_04_12t9(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_interface_04_04_12t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_04_04_12t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_04_04_12t1_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}

function im_interface_04_04_12t5(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_04_04_12t7(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });
    // 16 bytes;

}
function im_interface_04_04_12t8(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_04_04_12t8_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_04_04_12t8_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        section_08: [im_string(u32(o + 8), 0, false)],
    });

}
function im_interface_04_04_12t9(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [im_string(u32(o + 4), 0, false)],
        section_08: [im_string(u32(o + 8), 0, false)],
    });
    // 16 bytes;

}
function im_interface_12(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //check this
        section_04: [],
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    switch (u32(o + 0)) {
    case 1026:
        u32(o + 4) ? im_interface_12_04t1026(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1027:
        u32(o + 4) ? im_interface_12_04t1027(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_interface_12_16(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_interface_12_24(u32(o + 24) + (ii * 36) + g.m, ii, x[i].section_24);
    }

}
function im_interface_12_04t1026(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u32_04: u32(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
    });

    u32(o + 8) ? im_interface_12_04t1026_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    // offset? 
    // 32 bytes;

}
function im_interface_12_04t1026_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_12_04t1026_08_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_12_04t1026_08_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_12_04t1027(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_12_16(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_12_04t1026(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_interface_12_24(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        //check this
        u8_01: u8(o + 1),
        u16_02: u16(o + 2),
        section_04: [],
        section_08: [],
        u32_20: u32(o + 20),
        //check this
        unordered_sound_controls_24: 0,
    });

    switch (u8(o + 0)) {
    case 1:
    case 31:
        x[i].section_04 = in_ml(u32(o + 4), g.interface_array, im_interface, g.unordered_ref.interface);
        break;
    case 11:
        u32(o + 4) ? im_interface_12_24_04t11(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    u32(o + 8) ? im_interface_12_24_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    // offset? 
    x[i].unordered_sound_controls_24 = in_ml(u32(o + 24), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

}
function im_interface_12_24_04t11(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_12_24_04t11_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_12_24_04t11_04(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u16_04: u16(o + 4),
        //check this
        section_08: [],
    });

    u32(o + 0) ? im_interface_12_24_04t11_04_00(u32(o + 0) + g.m, x[i].section_00) : 0;
    switch (u16(o + 4)) {
    case 0:
        u32(o + 8) ? im_interface_12_24_04t11_04_08t0(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 1:
        u32(o + 8) ? im_interface_12_24_04t11_04_08t1(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 3:
        x[i].section_08 = in_ml(u32(o + 8), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    case 100:
        x[i].section_08 = in_ml(u32(o + 8), g.interface_array, im_interface, g.unordered_ref.interface);
        break;
    case 101:
        x[i].section_08 = in_ml(u32(o + 8), g.interface_array, im_interface, g.unordered_ref.interface);
        break;
    }
}
function im_xdx_interface_12_24_04t11_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 0:
    case 3:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t0(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1:
    case 2:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_demo_interface_12_24_04t11_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t0(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 1:
    case 2:
        u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 4), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    }
}
function im_interface_12_24_04t11_04_00(o, x) {
    x.push({});
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
    });
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_xdx_interface_12_24_04t11_04_04t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_xdx_interface_12_24_04t11_04_04t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1_00_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_xdx_interface_12_24_04t11_04_04t1_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t1(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_interface_12_24_04t11_04_08t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_interface_12_24_04t11_04_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_12_24_04t11_04_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_12_24_04t11_04_08t1_00_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_12_24_08(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_interface_12_24_08_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_interface_12_24_08_00(u32(o + 4) + g.m, x[0].section_04) : 0;
    // offset? 
    // 16 bytes;

}
function im_interface_12_24_08_00(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_48(o, x) {
    x.push({
        f32_00: f32(o + 0),
    });
    // 16 bytes;

}
function im_interface_56(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_xdx_interface_56(o, x) {
    x.push({
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
        u16_16: u16(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        //check this
        section_20: [],
        section_24: [],
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        section_32: [],
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        section_44: [],
        section_48: [im_string(u32(o + 48), 0, false)],
        section_52: [],
        u8_56: u8(o + 56),
        u32_60: u32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 8) ? im_interface_72_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    switch (u32(o + 12)) {
    case 4:
        u32(o + 20) ? im_interface_72_20t4(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 7:
        u32(o + 20) ? im_interface_72_20t7(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 38:
    case 106:
    case 107:
        u32(o + 20) ? im_interface_72_20t38(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    }
    switch (u8(o + 19)) {
    case 0:
        u32(o + 24) ? im_interface_72_24t0(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 1:
        u32(o + 24) ? im_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 3:
        u32(o + 24) ? im_interface_72_24t3(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 5:
        u32(o + 24) ? im_interface_72_24t5(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 6:
    case 7:
        u32(o + 24) ? im_interface_72_24t6(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 10:
        u32(o + 24) ? im_interface_72_24t10(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 12:
        u32(o + 24) ? im_interface_72_24t12(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 13:
        u32(o + 24) ? im_interface_72_24t13(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 14:
        u32(o + 24) ? im_interface_72_24t14(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 15:
        u32(o + 24) ? im_interface_72_24t15(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    }
    u32(o + 32) ? im_interface_72_32(u32(o + 32) + g.m, x[i].section_32) : 0;
    u32(o + 44) ? im_interface_72_44(u32(o + 44) + g.m, x[i].section_44) : 0;
    u32(o + 52) ? im_interface_72_52(u32(o + 52) + g.m, x[i].section_52) : 0;

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_interface_72_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
    }

}
function im_xdx_interface_72(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
        section_08: [],
        u32_12: u32(o + 12),
        u16_16: u16(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        u32_36: u32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u8_60: u8(o + 60),
        u32_64: u32(o + 64),
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
    });

    u32(o + 8) ? im_interface_72_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    switch (u32(o + 12)) {
    case 4:
        u32(o + 20) ? im_interface_72_20t4(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    }
    switch (u8(o + 19)) {
    case 0:
        u32(o + 24) ? im_interface_72_24t0(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 1:
        u32(o + 24) ? im_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 3:
        u32(o + 24) ? im_interface_72_24t3(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 5:
        u32(o + 24) ? im_interface_72_24t5(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 6:
    case 7:
        u32(o + 24) ? im_interface_72_24t6(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 10:
        u32(o + 24) ? im_interface_72_24t10(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 12:
        u32(o + 24) ? im_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 13:
        u32(o + 24) ? im_interface_72_24t13(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 14:
        u32(o + 24) ? im_interface_72_24t14(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 15:
        u32(o + 24) ? im_interface_72_24t15(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    }
    for (let ii = 0; ii < u32(o + 72); ii++) {
        im_interface_72_72(u32(o + 76) + (ii * 12) + g.m, ii, x[i].section_76);
    }

}
function im_interface_72_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_interface_72_08_08(u32(o + 8) + (i * 12) + g.m, i, x[0].section_08);
    }
    // 16 bytes;

}
function im_interface_72_08_08(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) ? im_xdx_interface_72_08_08_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 4) ? im_interface_72_08_08_04t2(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 6:
        u32(o + 4) ? im_interface_72_08_08_04t6(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_xdx_interface_72_08_08_04t1(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_08_08_04t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_72_08_08_04t2_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_72_08_08_04t2_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_08_08_04t6(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_20t4(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });
    // 32 bytes;

}
function im_interface_72_20t7(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_20t38(o, x) {
    x.push({
        u32_00: u32(o + 0),
    });
    // 16 bytes;

}
function im_interface_72_24t0(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        section_08: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
    });

    switch (u8(o + 0)) {
    case 0:
        x[0].section_04 = im_patch(g.texture_patch_ref, o + 4)
        break;
    case 1:
        x[0].section_04 = in_ml(u32(o + 4), g.models_array, im_models, g.ordered_ref.models);
        break;
    case 3:
        u32(o + 8) ? im_interface_72_24t0_08(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    }
    // 16 bytes;

}
function im_interface_72_24t0_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_11: u8(o + 11),
        u8_16: u8(o + 16),
        u16_18: u16(o + 18),
        u32_20: u32(o + 20),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_24t0_08_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }
    // 32 bytes;

}
function im_interface_72_24t0_08_04(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_interface_72_24t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [],
        section_08: [],
        section_12: [],
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u16_18: u16(o + 18),
        u16_20: u16(o + 20),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        f32_24: f32(o + 24),
    });

    switch (u8(o + 0)) {
    case 0:
        x[0].section_04 = in_ml(u32(o + 4), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);
        break;
    }
    switch (u8(o + 0)) {
    case 1:
        u32(o + 8) ? im_interface_72_24t1_08t1(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    case 3:
        u32(o + 8) ? im_interface_72_24t1_08t3(u32(o + 8) + g.m, x[0].section_08) : 0;
        break;
    }
    switch (u8(o + 2)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
        break;
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.frame_multi_font_array, im_frame_multi_font, g.unordered_ref.frame_multi_font);
        break;
    }
    // 32 bytes;

}
function im_interface_72_24t1_08t1(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u16_10: u16(o + 10),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_24t1_08t1_04(u32(o + 4) + (i * 8) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_interface_72_24t1_08t1_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_frame_text_00: 0,
    });

    x[i].unordered_frame_text_00 = in_ml(u32(o + 0), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);

}
function im_xdx_interface_72_24t1_08t1_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_frame_text_00: 0,
    });

    x[i].unordered_frame_text_00 = in_ml(u32(o + 0), g.frame_text_array, im_frame_text, g.unordered_ref.frame_text);

}
function im_interface_72_24t1_08t3(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });
    // 16 bytes;

}
function im_interface_72_24t3(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_24t3_04(u32(o + 4) + (i * 8) + g.m, i, x[0].section_04);
    }
    u32(o + 16) ? im_interface_72_24t3_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    // 32 bytes;

}
function im_interface_72_24t3_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_model_link_00: 0,
        unordered_sound_controls_04: 0,
    });

    x[i].unordered_model_link_00 = in_ml(u32(o + 0), g.model_link_array, im_model_link, g.unordered_ref.model_link);
    x[i].unordered_sound_controls_04 = in_ml(u32(o + 4), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

}
function im_interface_72_24t3_16(o, x) {
    x.push({
        section_08: [],
    });

    u32(o + 8) ? im_interface_72_24t3_16_08(u32(o + 8) + g.m, x[0].section_08) : 0;
    // 16 bytes;

}
function im_interface_72_24t3_16_08(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_interface_72_24t5(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });
    // 16 bytes;

}
function im_interface_72_24t6(o, x) {
    x.push({
        unordered_interface_00: 0,
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 0), g.interface_array, im_interface, g.unordered_ref.interface);

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_24t6_12(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }
    // 16 bytes;

}
function im_interface_72_24t6_12(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
    });

}
function im_interface_72_24t10(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
    });
    // 16 bytes;

}
function im_interface_72_24t12(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_24t13(o, x) {
    x.push({
        u8_01: u8(o + 1),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_interface_72_24t13_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_interface_72_24t13_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    // 16 bytes;

}
function im_interface_72_24t13_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_24t13_12(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 0),
    });
    // 16 bytes;

}
function im_interface_72_24t14(o, x) {
    x.push({
        u8_272: u8(o + 272),
        u8_273: u8(o + 273),
        section_276: [],
    });

    u32(o + 276) ? im_interface_72_24t14_276(u32(o + 276) + g.m, x[0].section_276) : 0;
    
    // 288 bytes;

}
function im_interface_72_24t14_276(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_08: u8(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_24t15(o, x) {
    x.push({
        unordered_frame_sparkler_00: 0,
    });

    x[0].unordered_frame_sparkler_00 = in_ml(u32(o + 0), g.frame_sparkler_array, im_frame_sparkler, g.unordered_ref.frame_sparkler);
    // 16 bytes;

}
function im_interface_72_32(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_32_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_interface_72_32_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_interface_72_32_20(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_interface_12(u32(o + 36) + (i * 28) + g.m, i, x[0].section_36);
    }
    // 48 bytes;

}
function im_interface_72_32_12(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

}
function im_interface_72_32_20(o, i, x) {
    x.push({
        id: gen_id(),
        u16_04: u16(o + 4),
        section_08: [],
    });

    switch (u16(o + 4)) {
    case 0:
        u32(o + 8) ? im_interface_72_32_20_08t0(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 1:
        u32(o + 8) ? im_interface_72_32_20_08t1(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    }
}
function im_interface_72_32_20_08t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_interface_72_32_20_08t1(o, x) {
    x.push({
        section_00: [],
        section_04: [],
    });

    u32(o + 0) ? im_interface_72_32_20_08t1_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    u32(o + 4) ? im_interface_72_32_20_08t1_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_72_32_20_08t1_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_72_32_20_08t1_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_interface_72_32_20_08t1_00_04(o, x) {
    x.push({
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_32_20_08t1_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_interface_72_44(o, x) {
    x.push({});
    // 16 bytes;

}
function im_interface_72_52(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_52_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_52_04(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_interface_72_52_04(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_interface_72_52_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_interface_72_52_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }
    // 48 bytes;

}
function im_interface_72_52_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_interface_72_52_28(o, i, x) {
    x.push({
        id: gen_id(),
    u8_00: u8(o + 0),
    u8_01: u8(o + 1),
    u8_02: u8(o + 2),
    u8_03: u8(o + 3),
    u8_04: u8(o + 4),
    u8_05: u8(o + 5),
    f32_08: f32(o + 8),
    });

}
function im_interface_72_52_36(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_interface_72_72(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    u32(o + 4) ? im_interface_72_72_04(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_interface_72_72_04(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        unordered_sound_controls_48: 0,
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_interface_72_72_04_04(u32(o + 4) + (i * 20) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_interface_72_72_04_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_interface_72_72_04_12(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_interface_72_72_04_12(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_interface_72_72_04_36(u32(o + 36) + (i * 12) + g.m, i, x[0].section_36);
    }
    u32(o + 44) ? im_interface_72_72_04_44(u32(o + 44) + g.m, x[0].section_44) : 0;
    x[0].unordered_sound_controls_48 = in_ml(u32(o + 48), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
    // 64 bytes;

}
function im_interface_72_72_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_interface_72_72_04_04_16(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

}
function im_interface_72_72_04_04_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_04: u32(o + 4),
        section_08: [],
    });

    switch (u32(o + 4)) {
    case 0:
        u32(o + 8) ? im_interface_72_72_04_04_16_08t0(u32(o + 8) + g.m, x[i].section_08) : 0;
        break;
    case 3:
        x[i].section_08 = in_ml(u32(o + 8), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    }
}
function im_xdx_interface_72_72_04_04_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_interface_72_72_04_04_16_08t0(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_interface_72_72_04_04_16_08t0(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u16_06: u16(o + 6),
        u8_08: u8(o + 8),
    });
    // 16 bytes;

}
function im_interface_72_72_04_12(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_interface_72_72_04_36(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_interface_72_72_04_44(o, x) {
    x.push({
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });
    // 48 bytes;

}
