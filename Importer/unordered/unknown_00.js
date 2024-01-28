function im_unknown_00(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_unknown_00_04(u32(o + 04) + (ii * 16) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 16 bytes;

}
function im_unknown_00_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //check this
        section_04: [],
        section_08: [],
        u32_12: u32(o + 12),
        //check this
    });

    switch (u32(o + 00)) {
    case 1:
        x[i].section_04 = in_ml(u32(o + 04), g.unknown_00_04_04t1_array, im_unknown_00_04_04t1, g.unordered_ref.unknown_00_04_04t1);
        break;
    case 2:
        u32(o + 04) ? im_unknown_00_04_04t2(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 04), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
        break;
    case 4:
        x[i].section_04 = in_ml(u32(o + 04), g.strange_array, im_strange, g.unordered_ref.strange);
        break;
    case 5:
        x[i].section_04 = in_ml(u32(o + 04), g.unknown_00_04_04t5_array, im_unknown_00_04_04t5, g.unordered_ref.unknown_00_04_04t5);
        break;
    case 6:
        x[i].section_04 = in_ml(u32(o + 04), g.idk_array, im_idk, g.unordered_ref.idk);
        break;
    case 26:
        x[i].section_04 = in_ml(u32(o + 04), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);
        break;
    case 29:
        u32(o + 04) ? im_unknown_00_04_04t29(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 31:
        x[i].section_04 = in_ml(u32(o + 04), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    }
    switch (u32(o + 00)) {
    case 1:
        u32(o + 08) ? im_unknown_00_04_08t1(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 2:
        u32(o + 08) ? im_unknown_00_04_08t2(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 3:
        u32(o + 08) ? im_unknown_00_04_08t3(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 4:
        u32(o + 08) ? im_unknown_00_04_08t4(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 5:
        u32(o + 08) ? im_unknown_00_04_08t5(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 6:
        u32(o + 08) ? im_unknown_00_04_08t6(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 26:
        u32(o + 08) ? im_unknown_00_04_08t26(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 29:
        u32(o + 08) ? im_unknown_00_04_08t29(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 31:
        u32(o + 08) ? im_unknown_00_04_08t31(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 32:
        u32(o + 08) ? im_unknown_00_04_08t32(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 34:
        u32(o + 08) ? im_unknown_00_04_08t34(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    }
}
// function im_unknown_00_04_04t1(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         section_04: [],
//         u32_08: u32(o + 08),
//         u32_12: u32(o + 12),
//         f32_16: f32(o + 16),
//         u32_20: u32(o + 20),
//         //amount?
//         section_24: [],
//         u32_28: u32(o + 28),
//         //amount?
//         section_32: [],
//     });

//     switch (u8(o + 00)) {
//     case 0:
//         u32(o + 04) ? im_unknown_00_04_04t1_04t0(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 1:
//         u32(o + 04) ? im_unknown_00_04_04t1_04t1(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 2:
//         u32(o + 04) ? im_unknown_00_04_04t1_04t2(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     }
// for (let i = 0; i < u32(o + 20); i++) {
//     im_unknown_00_04_04t1_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
// }

//     for (let i = 0; i < u32(o + 28); i++) {
//         im_unknown(u32(o + 32) + (i * 04) + g.m, i, x[0].section_32);
//     }

//     // 48 bytes;

// }
// function im_unknown_00_04_04t1_04t0(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//         u8_11: u8(o + 11),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         f32_24: f32(o + 24),
//         f32_28: f32(o + 28),
//         f32_32: f32(o + 32),
//         u32_36: u32(o + 36),
//         //amount?
//         section_40: [],
//         u32_44: u32(o + 44),
//         section_48: [],
//         u8_52: u8(o + 52),
//         section_56: [],
//         u32_60: u32(o + 60),
//         //amount?
//         section_64: [],
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_unknown_00_04_04t1_04t0_04(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04,u32(o + 04) + g.m);
//     }

//     for (let i = 0; i < u32(o + 36); i++) {
//         im_unknown_00_04_04t1_04t0_40(u32(o + 40) + (i * 32) + g.m, i, x[0].section_40);
//     }
//     u32(o + 48) ? im_unknown_00_04_04t1_04t0_48(u32(o + 48) + g.m, x[0].section_48) : 0;
//     u32(o + 56) ? im_unknown_00_04_04t1_04t0_56(u32(o + 56) + g.m, x[0].section_56) : 0;

//     for (let i = 0; i < u32(o + 60); i++) {
//         im_unknown_00_04_04t1_04t0_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
//     }

//     // 80 bytes;

// }
// function im_unknown_00_04_04t1_04t0_04(o, i, x,tempoffset) {
//     x.push({
//         id: gen_id(),
//         ordered_models_00: 0,
//     });
//     x[i].ordered_models_00 = in_ml(u32(o + 00), g.models_array, im_models, g.ordered_ref.models,tempoffset,i*4);

// }
// function im_unknown_00_04_04t1_04t0_40(o, i, x) {
//     x.push({
//         id: gen_id(),
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//         f32_08: f32(o + 08),
//         u8_16: u8(o + 16),
//         u8_17: u8(o + 17),
//         f32_20: f32(o + 20),
//     });

// }
// function im_unknown_00_04_04t1_04t0_48(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_12: f32(o + 12),
//     });

//     // 16 bytes;

// }
// function im_unknown_00_04_04t1_04t0_56(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//         u8_08: u8(o + 08),
//     });

//     // 32 bytes;

// }
// function im_unknown_00_04_04t1_04t0_64(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//     });

//     for (let ii = 0; ii < u32(o + 00); ii++) {
//         im_unknown_00_04_04t1_04t0_64_04(u32(o + 04) + (ii * 20) + g.m, ii, x[i].section_04);
//     }

// }
// function im_unknown_00_04_04t1_04t0_64_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//     });

// }
// function im_unknown_00_04_04t1_04t1(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//         u8_11: u8(o + 11),
//         u32_12: u32(o + 12),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         f32_24: f32(o + 24),
//         f32_28: f32(o + 28),
//         f32_32: f32(o + 32),
//         f32_36: f32(o + 36),
//         u32_40: u32(o + 40),
//         //amount?
//         section_44: [],
//         u32_48: u32(o + 48),
//         //amount?
//         section_52: [],
//         section_56: [],
//         u32_60: u32(o + 60),
//         //amount?
//         section_64: [],
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_unknown_00_04_04t1_04t1_04(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04);
//     }

//     for (let i = 0; i < u32(o + 40); i++) {
//         im_unknown_00_04_04t1_04t1_44(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
//     }

//     for (let i = 0; i < u32(o + 48); i++) {
//         im_unknown_00_04_04t1_04t1_44(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
//     }
//     u32(o + 56) ? im_unknown_00_04_04t1_04t1_56(u32(o + 56) + g.m, x[0].section_56) : 0;

//     for (let i = 0; i < u32(o + 60); i++) {
//         im_unknown_00_04_04t1_04t1_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
//     }

//     // 80 bytes;

// }
// function im_unknown_00_04_04t1_04t1_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         texture_00: im_patch(g.texture_patch_ref, o + 00),
//     });

// }
// function im_unknown_00_04_04t1_04t1_44(o, i, x) {
//     x.push({
//         id: gen_id(),
//         f32_00: f32(o + 00),
//         u8_04: u8(o + 04),
//         u8_05: u8(o + 05),
//         f32_08: f32(o + 08),
//     });

// }
// function im_unknown_00_04_04t1_04t1_56(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//         u8_11: u8(o + 11),
//         f32_12: f32(o + 12),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//     });

//     // 32 bytes;

// }
// function im_unknown_00_04_04t1_04t1_64(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//     });

//     for (let ii = 0; ii < u32(o + 00); ii++) {
//         im_unknown_00_04_04t1_04t1_64_04(u32(o + 04) + (ii * 20) + g.m, ii, x[i].section_04);
//     }

// }
// function im_unknown_00_04_04t1_04t1_64_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//         u32_08: u32(o + 08),
//     });

// }
// function im_unknown_00_04_04t1_04t2(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//         f32_08: f32(o + 08),
//         f32_12: f32(o + 12),
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//         u8_24: u8(o + 24),
//         u8_26: u8(o + 26),
//     });

// for (let i = 0; i < u32(o + 00); i++) {
//     im_unknown_00_04_04t1_04t2_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
// }

//     for (let i = 0; i < u32(o + 16); i++) {
//         im_unknown_00_04_04t1_04t2_20(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
//     }

//     // 32 bytes;

// }
// function im_unknown_00_04_04t1_04t2_04(o, i ,x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//         u8_03: u8(o + 03),
//         f32_08: f32(o + 08),
//     });

//     // 12 bytes;

// }
// function im_unknown_00_04_04t1_04t2_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//         f32_12: f32(o + 12),
//     });

// }
// function im_unknown_00_04_04t1_24(o, i, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//         u8_03: u8(o + 03),
//         u8_04: u8(o + 04),
//         u8_05: u8(o + 05),
//         f32_08: f32(o + 08),
//     });

//     // 12 bytes;

// }
// function im_unknown_00_04_04t1_32(o, x) {
//     x.push({});

//     // 16 bytes;

// }
function im_unknown_00_04_04t2(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        u32_12: u32(o + 12),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        unordered_unknown_00_32: 0,
        f32_40: f32(o + 40),
        unordered_wtf_48: 0,
        f32_52: f32(o + 52),
        unordered_unknown_00_56: 0,
        unordered_unknown_00_68: 0,
        u8_72: u8(o + 72),
        unordered_unknown_00_76: 0,
        section_80: [],
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u32_108: u32(o + 108),
    });

    x[0].unordered_unknown_00_32 = in_ml(u32(o + 32), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_wtf_48 = in_ml(u32(o + 48), g.wtf_array, im_wtf, g.unordered_ref.wtf);
    x[0].unordered_unknown_00_56 = in_ml(u32(o + 56), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_68 = in_ml(u32(o + 68), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_76 = in_ml(u32(o + 76), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    u32(o + 80) ? im_unknown_00_04_04t2_80(u32(o + 80) + g.m, x[0].section_80) : 0;

    for (let i = 0; i < u32(o + 96); i++) {
        im_mysterious(u32(o + 100) + (i * 64) + g.m, i, x[0].section_100);
    }

    // 112 bytes;

}
function im_unknown_00_04_04t2_80(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
// function im_unknown_00_04_04t5(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//         u8_03: u8(o + 03),
//         section_04: [],
//         u32_08: u32(o + 08),
//         section_12: [],
//         u32_16: u32(o + 16),
//         section_20: [],
//         u32_24: u32(o + 24),
//         section_28: [],
//         u32_32: u32(o + 32),
//         section_36: [],
//         u8_40: u8(o + 40),
//     });

//     u32(o + 04) ? im_unknown_00_04_04t5_04(u32(o + 04) + g.m, x[0].section_04) : 0;
//     // offset? 
//     u32(o + 12) ? im_unknown_00_04_04t5_12(u32(o + 12) + g.m, x[0].section_12) : 0;
//     u32(o + 20) ? im_unknown_00_04_04t5_20(u32(o + 20) + g.m, x[0].section_20) : 0;
//     u32(o + 28) ? im_unknown_00_04_04t5_28(u32(o + 28) + g.m, x[0].section_28) : 0;
//     u32(o + 36) ? im_unknown_00_04_04t5_36(u32(o + 36) + g.m, x[0].section_36) : 0;

//     // 48 bytes;

// }
// function im_unknown_00_04_04t5_04(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         f32_04: f32(o + 04),
//         u8_08: u8(o + 08),
//         //check this
//         u8_09: u8(o + 09),
//         section_12: [],
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//         u32_28: u32(o + 28),
//         //amount?
//         section_32: [],
//     });

//     switch (u8(o + 08)) {
//     case 103:
//         u32(o + 12) ? im_unknown_00_04_04t5_04_12t103(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 105:
//         u32(o + 12) ? im_unknown_00_04_04t5_04_12t105(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     }
//     for (let i = 0; i < u32(o + 16); i++) {
//         im_unknown_00_04_04t5_04_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
//     }

//     for (let i = 0; i < u32(o + 28); i++) {
//         im_mysterious(u32(o + 32) + (i * 64) + g.m, i, x[0].section_32);
//     }

//     // 48 bytes;

// }
// function im_unknown_00_04_04t5_04_12t103(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u32_12: u32(o + 12),
//         u32_28: u32(o + 28),
//     });

//     // 48 bytes;

// }
// function im_unknown_00_04_04t5_04_12t105(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//         //amount?
//         section_08: [],
//     });

//     for (let i = 0; i < u32(o + 04); i++) {
//         im_mysterious(u32(o + 08) + (i * 64) + g.m, i, x[0].section_08);
//     }

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_04_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//     });

// }
// function im_unknown_00_04_04t5_12(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//         u8_08: u8(o + 08),
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_unknown_00_04_04t5_12_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
//     }

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_12_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//         u8_03: u8(o + 03),
//         u8_04: u8(o + 04),
//         f32_08: f32(o + 08),
//     });

// }
// function im_unknown_00_04_04t5_20(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_unknown_00_04_04t5_20_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
//     }

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_20_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         f32_00: f32(o + 00),
//         f32_08: f32(o + 08),
//     });

// }
// function im_unknown_00_04_04t5_28(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_unknown_00_04_04t5_28_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04(o, x) {
//     x.push({
//         section_00: [],
//     });

//     u32(o + 00) ? im_unknown_00_04_04t5_28_04_00(u32(o + 00) + g.m, x[0].section_00) : 0;

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//         u32_08: u32(o + 08),
//     });

//     switch (u8(o + 00)) {
//     case 1:
//         u32(o + 04) ? im_unknown_00_04_04t5_28_04_00_04t1(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 2:
//         u32(o + 04) ? im_unknown_00_04_04t5_28_04_00_04t2(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     }
//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00_04t1(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//         u32_08: u32(o + 08),
//     });

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00_04t2(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u8_04: u8(o + 04),
//     });

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_36(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
function im_unknown_00_04_04t29(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u8_08: u8(o + 08),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_unknown_00_04_04t29_04(u32(o + 04) + (i * 48) + g.m, i, x[0].section_04);
    }

    // 32 bytes;

}
function im_unknown_00_04_04t29_04(o, i, x) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    x[i].ordered_models_00 = in_ml(u32(o + 00), g.models_array, im_models, g.ordered_ref.models);

}
function im_unknown_00_04_08t1(o, x) {
    if (o === 4920588) {
        console.log("?")
    }
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) ? im_unknown_00_04_08t1_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    // offset? 
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) ? im_unknown_00_04_08t1_52t1(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    case 2:
        u32(o + 52) ? im_unknown_00_04_08t1_52t2(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    }
    // 64 bytes;

}
function im_unknown_00_04_08t1_48(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t1_52t1(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t1_52t2(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        section_12: [],
    });

    switch (u8(o + 08)) {
    case 0:
        u32(o + 12) ? im_unknown_00_04_08t1_52t2_12t0(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1:
        u32(o + 12) ? im_unknown_00_04_08t1_52t2_12t1(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 2:
        u32(o + 12) ? im_unknown_00_04_08t1_52t2_12t2(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    // 16 bytes;

}
function im_unknown_00_04_08t1_52t2_12t0(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_unknown_00_04_08t1_52t2_12t1(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_unknown_00_04_08t1_52t2_12t2(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t2(o, x) {
    x.push({
        u32_00: u32(o + 00),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        //check this
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) ? im_unknown_00_04_08t2_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) ? im_unknown_00_04_08t2_52t1(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    case 2:
        u32(o + 52) ? im_unknown_00_04_08t2_52t2(u32(o + 52) + g.m, x[0].section_52) : 0;
        break;
    }
    // 64 bytes;

}
function im_unknown_00_04_08t2_48(o, x) {
    x.push({
        f32_00: f32(o + 00),
        u32_08: u32(o + 08),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t2_52t1(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t2_52t2(o, x) {
    x.push({
        f32_00: f32(o + 00),
        u8_08: u8(o + 08),
        section_12: [],
    });

    u32(o + 12) ? im_unknown_00_04_08t2_52t2_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_unknown_00_04_08t2_52t2_12(o, x) {
    x.push({
        f32_00: f32(o + 00),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t3(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u8_40: u8(o + 40),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    switch (u8(o + 40)) {
    case 2:
        u32(o + 48) ? im_unknown_00_04_08t3_48(u32(o + 48) + g.m, x[0].section_48) : 0;
        break;
    }
    u32(o + 52) ? im_unknown_00_04_08t3_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_unknown_00_04_08t3_48(o, x) {
    x.push({
        f32_00: f32(o + 00),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t3_52(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t4(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 64 bytes;

}
function im_unknown_00_04_08t5(o, x) {
    x.push({
        u8_01: u8(o + 01),
        section_04: [],
    });

    u32(o + 04) ? im_unknown_00_04_08t5_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_unknown_00_04_08t5_04(o, x) {
    x.push({});

    // 32 bytes;

}
function im_unknown_00_04_08t6(o, x) {
    x.push({});

    // 16 bytes;

}
function im_unknown_00_04_08t26(o, x) {
    x.push({});

    // 16 bytes;

}
function im_unknown_00_04_08t29(o, x) {
    x.push({
        u32_00: u32(o + 00),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_42: u8(o + 42),
        section_52: [],
    });

    u32(o + 52) ? im_unknown_00_04_08t29_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_unknown_00_04_08t29_52(o, x) {
    x.push({
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t31(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_08: u32(o + 08),
        f32_24: f32(o + 24),
        u8_42: u8(o + 42),
        section_52: [],
    });

    u32(o + 52) ? im_unknown_00_04_08t31_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_unknown_00_04_08t31_52(o, x) {
    x.push({
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t32(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        f32_04: f32(o + 04),
        section_08: [im_string(u32(o + 08), 0, false)],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_unknown_00_04_08t34(o, x) {
    x.push({
        u8_00: u8(o + 00),
        unordered_interface_04: 0,
        unordered_interface_08: 0,
        unordered_interface_12: 0,
        section_16: [],
    });

    x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_08 = in_ml(u32(o + 08), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_12 = in_ml(u32(o + 12), g.interface_array, im_interface, g.unordered_ref.interface);
    u32(o + 16) ? im_unknown_00_04_08t34_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_unknown_00_04_08t34_16(o, x) {
    x.push({});

    // 16 bytes;

}
