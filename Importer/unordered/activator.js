// function im_activator(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//         u8_03: u8(o + 03),
//         ordered_model_animation_2_04: 0,
//         section_08: [im_string(u32(o + 08), 0, false)],
//         u32_12: u32(o + 12),
//         u32_20: u32(o + 20),
//         //amount?
//         section_24: [],
//         u32_28: u32(o + 28),
//         //amount?
//         section_32: [],
//         u32_48: u32(o + 48),
//         u32_56: u32(o + 56),
//         u32_64: u32(o + 64),
//         f32_72: f32(o + 72),
//         f32_80: f32(o + 80),
//         f32_84: f32(o + 84),
//         f32_88: f32(o + 88),
//         f32_92: f32(o + 92),
//         f32_96: f32(o + 96),
//         u32_100: u32(o + 100),
//         f32_104: f32(o + 104),
//         section_108: [],
//         u32_112: u32(o + 112),
//         //amount?
//         section_116: [],
//         u8_120: u8(o + 120),
//         u8_121: u8(o + 121),
//         u8_122: u8(o + 122),
//         u8_123: u8(o + 123),
//         section_124: [],
//         f32_128: f32(o + 128),
//         f32_132: f32(o + 132),
//         f32_136: f32(o + 136),
//         u32_140: u32(o + 140),
//         //amount?
//         section_144: [],
//         unordered_wtf_148: 0,
//         u8_153: u8(o + 153),
//         u8_154: u8(o + 154),
//         u8_155: u8(o + 155),
//         u32_172: u32(o + 172),
//         //amount?
//         section_176: [],
//         u32_180: u32(o + 180),
//         //amount?
//         section_184: [],
//         u32_188: u32(o + 188),
//         //amount?
//         section_192: [],
//         f32_204: f32(o + 204),
//         u32_208: u32(o + 208),
//         //amount?
//         section_212: [],
//         u32_224: u32(o + 224),
//         section_228: [],
//         u32_244: u32(o + 244),
//         //amount?
//         section_248: [],
//     });

//     x[i].ordered_model_animation_2_04 = in_ml(u32(o + 04), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);

//     for (let ii = 0; ii < u32(o + 20); ii++) {
//         im_activator_24(u32(o + 24) + (ii * 24) + g.m, ii, x[i].section_24);
//     }

//     for (let ii = 0; ii < u32(o + 28); ii++) {
//         im_activator_32(u32(o + 32) + (ii * 24) + g.m, ii, x[i].section_32);
//     }
//     u32(o + 108) ? im_activator_108(u32(o + 108) + g.m, x[i].section_108) : 0;
//     u32(o + 116) ? im_activator_116(u32(o + 116) + g.m, x[i].section_116) : 0;
//     u32(o + 124) ? im_activator_124(u32(o + 124) + g.m, x[i].section_124) : 0;
//     u32(o + 144) ? im_activator_144(u32(o + 144) + g.m, x[i].section_144) : 0;
//     x[i].unordered_wtf_148 = in_ml(u32(o + 148), g.wtf_array, im_wtf, g.unordered_ref.wtf);

//     for (let ii = 0; ii < u32(o + 172); ii++) {
//         im_activator_176(u32(o + 176) + (ii * 20) + g.m, ii, x[i].section_176);
//     }

//     for (let ii = 0; ii < u32(o + 180); ii++) {
//         im_activator_184(u32(o + 184) + (ii * 12) + g.m, ii, x[i].section_184);
//     }

//     for (let ii = 0; ii < u32(o + 188); ii++) {
//         im_activator_184(u32(o + 192) + (ii * 12) + g.m, ii, x[i].section_192);
//     }

//     for (let ii = 0; ii < u32(o + 208); ii++) {
//         im_unknown(u32(o + 212) + (ii * 04) + g.m, ii, x[i].section_212);
//     }

//     for (let ii = 0; ii < u32(o + 224); ii++) {
//         im_unknown(u32(o + 228) + (ii * 04) + g.m, ii, x[i].section_228);
//     }
//     for (let ii = 0; ii < u32(o + 244); ii++) {
//         im_activator_248(u32(o + 248) + (ii * 36) + g.m, ii, x[i].section_248);
//     }
//     return x[i].id
//     // 256 bytes;

// }
// function im_activator_24(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         section_04: [],
//         f32_08: f32(o + 08),
//         f32_20: f32(o + 20),
//     });

//     switch (u8(o + 00)) {
//     case 4:
//         u32(o + 04) ? im_activator_24_04t4(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 6:
//         u32(o + 04) ? im_activator_24_04t6(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     }
// }
// function im_activator_24_04t4(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_24_04t4_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_24_04t4_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u32_04: u32(o + 04),
//         u32_08: u32(o + 08),
//     });

//     // 16 bytes;

// }
// function im_activator_24_04t6(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_08: [im_string(u32(o + 08), 0, false)],
//         u32_12: u32(o + 12),
//     });

//     // 16 bytes;

// }
// function im_activator_32(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 00),
//         section_04: [],
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//     });

//     u32(o + 04) ? im_activator_32_04(u32(o + 04) + g.m, x[i].section_04) : 0;

//     for (let ii = 0; ii < u32(o + 16); ii++) {
//         im_activator_32_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
//     }

// }
// function im_activator_32_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         f32_04: f32(o + 04),
//         f32_08: f32(o + 08),
//     });

//     // 16 bytes;

// }
// function im_activator_32_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         u8_04: u8(o + 04),
//         section_08: [],
//     });

//     u32(o + 08) ? im_activator_32_20_08(u32(o + 08) + g.m, x[i].section_08) : 0;

// }
// function im_activator_32_20_08(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_108(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//         section_08: [],
//     });

//     switch (u32(o + 04)) {
//     case 1:
//         u32(o + 08) ? im_activator_108_08t1(u32(o + 08) + g.m, x[0].section_08) : 0;
//         break;
//     case 2:
//         u32(o + 08) ? im_activator_108_08t2(u32(o + 08) + g.m, x[0].section_08) : 0;
//         break;
//     }
//     // 16 bytes;

// }
// function im_activator_108_08t1(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_108_08t2(o, x) {
//     x.push({
//         u8_04: u8(o + 04),
//         section_08: [],
//         u32_12: u32(o + 12),
//     });

//     u32(o + 08) ? im_activator_108_08t2_08(u32(o + 08) + g.m, x[0].section_08) : 0;

//     // 32 bytes;

// }
// function im_activator_108_08t2_08(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_116(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_124(o, x) {
//     x.push({
//         f32_08: f32(o + 08),
//         f32_16: f32(o + 16),
//         f32_24: f32(o + 24),
//     });

//     // 32 bytes;

// }
// function im_activator_144(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//     });

//     // 48 bytes;

// }
// function im_activator_176(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//         //amount?
//         section_08: [],
//         u32_12: u32(o + 12),
//         //amount?
//         section_16: [],
//     });

//     for (let ii = 0; ii < u32(o + 04); ii++) {
//         im_activator_176_08(u32(o + 08) + (ii * 12) + g.m, ii, x[i].section_08);
//     }

//     for (let ii = 0; ii < u32(o + 12); ii++) {
//         im_activator_176_08(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
//     }

// }
// function im_activator_176_08(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         u8_04: u8(o + 04),
//         section_08: [],
//     });

//     switch (u32(o + 00)) {
//     case 0:
//         u32(o + 08) ? im_activator_176_08t0(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 13:
//         u32(o + 08) ? im_activator_176_08t13(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 19:
//         u32(o + 08) ? im_activator_176_08t19(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     }
// }
// function im_activator_176_08t0(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_176_08t13(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_176_08t19(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_184(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//     });

//     for (let ii = 0; ii < u32(o + 00); ii++) {
//         im_mysterious(u32(o + 04) + (ii * 64) + g.m, ii, x[i].section_04);
//     }

// }
// function im_activator_248(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         section_04: [],
//         section_08: [im_string(u32(o + 08), 0, false)],
//         u32_12: u32(o + 12),
//         u32_16: u32(o + 16),
//         unordered_sound_controls_20: 0,
//         u8_24: u8(o + 24),
//         u32_28: u32(o + 28),
//         //amount?
//         section_32: [],
//     });

//     for (let ii = 0; ii < u32(o + 00); ii++) {
//         im_activator_248_04(u32(o + 04) + (ii * 8) + g.m, ii, x[i].section_04);
//     }
//     x[i].unordered_sound_controls_20 = in_ml(u32(o + 20), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

//     for (let ii = 0; ii < u32(o + 28); ii++) {
//         im_activator_248_32(u32(o + 32) + (ii * 80) + g.m, ii, x[i].section_32);
//     }

// }
// function im_activator_248_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 00),
//         //check this
//         u8_01: u8(o + 01),
//         section_04: [],
//     });

//     switch (u8(o + 00)) {
//     case 0:
//         u32(o + 04) ? im_activator_248_04_04t0(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 1:
//         u32(o + 04) ? im_activator_248_04_04t1(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 2:
//         u32(o + 04) ? im_activator_248_04_04t2(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 3:
//         u32(o + 04) ? im_activator_248_04_04t3(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 4:
//         u32(o + 04) ? im_activator_248_04_04t4(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 5:
//         u32(o + 04) ? im_activator_248_04_04t5(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 6:
//         u32(o + 04) ? im_activator_248_04_04t6(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 9:
//         u32(o + 04) ? im_activator_248_04_04t9(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 11:
//         u32(o + 04) ? im_activator_248_04_04t11(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 12:
//         u32(o + 04) ? im_activator_248_04_04t12(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 13:
//         u32(o + 04) ? im_activator_248_04_04t13(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     case 15:
//         u32(o + 04) ? im_activator_248_04_04t15(u32(o + 04) + g.m, x[i].section_04) : 0;
//         break;
//     }
// }
// function im_activator_248_04_04t0(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_04_04t0_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_248_04_04t0_04(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//         f32_08: f32(o + 08),
//         f32_12: f32(o + 12),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         u8_24: u8(o + 24),
//         u8_27: u8(o + 27),
//         u8_28: u8(o + 28),
//         u8_29: u8(o + 29),
//         u8_30: u8(o + 30),
//         u8_31: u8(o + 31),
//         u8_32: u8(o + 32),
//         u8_33: u8(o + 33),
//         u8_34: u8(o + 34),
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_activator_248_04_04t0_04_04(u32(o + 04) + (i * 8) + g.m, i, x[0].section_04);
//     }

//     // 48 bytes;

// }
// function im_activator_248_04_04t0_04_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_04_04t0_04_04_04(u32(o + 04) + g.m, x[i].section_04) : 0;

// }
// function im_activator_248_04_04t0_04_04_04(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_04_04t0_04_04_04_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_248_04_04t0_04_04_04_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t1(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t2(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t3(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t4(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t5(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t6(o, x) {
//     x.push({
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t9(o, x) {
//     x.push({
//         f32_04: f32(o + 04),
//         u8_14: u8(o + 14),
//         u8_15: u8(o + 15),
//         f32_16: f32(o + 16),
//         u8_20: u8(o + 20),
//         u8_22: u8(o + 22),
//     });

//     // 32 bytes;

// }
// function im_activator_248_04_04t11(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t12(o, x) {
//     x.push({});

//     // 16 bytes;

// }
// function im_activator_248_04_04t13(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//         f32_08: f32(o + 08),
//     });

//     u32(o + 00) ? im_activator_248_04_04t13_00(u32(o + 00) + g.m, x[0].section_00) : 0;

//     // 16 bytes;

// }
// function im_activator_248_04_04t13_00(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_04_04t13_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_248_04_04t13_00_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_04_04t15(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32(o, i, x) {
//     x.push({
//         id: gen_id(),
//         section_00: [im_string(u32(o + 00), 0, false)],
//         u32_04: u32(o + 04),
//         //amount?
//         section_08: [],
//         u8_12: u8(o + 12),
//         u8_13: u8(o + 13),
//         u8_14: u8(o + 14),
//         u8_15: u8(o + 15),
//         section_16: [],
//         f32_24: f32(o + 24),
//         u32_28: u32(o + 28),
//         section_32: [],
//         section_36: [],
//         u8_40: u8(o + 40),
//         u8_41: u8(o + 41),
//         u8_42: u8(o + 42),
//         f32_44: f32(o + 44),
//         f32_48: f32(o + 48),
//         section_52: [],
//         f32_56: f32(o + 56),
//         u8_61: u8(o + 61),
//         f32_64: f32(o + 64),
//         u32_68: u32(o + 68),
//         //amount?
//         section_72: [],
//         section_76: [],
//     });

// // for (let ii = 0; ii < u32(o + 04); ii++) {
// //     im_activator_248_32_08(u32(o + 08) + (ii * 4) + g.m, ii, x[i].section_08);
// // }

//     u32(o + 16) ? im_activator_248_32_16(u32(o + 16) + g.m, x[i].section_16) : 0;
//     u32(o + 32) ? im_activator_248_32_32(u32(o + 32) + g.m, x[i].section_32) : 0;
//     u32(o + 36) ? im_activator_248_32_36(u32(o + 36) + g.m, x[i].section_36) : 0;
//     // offset? 
//     u32(o + 52) ? im_activator_248_32_52(u32(o + 52) + g.m, x[i].section_52) : 0;

//     for (let ii = 0; ii < u32(o + 68); ii++) {
//         im_activator_248_32_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
//     }
//     u32(o + 76) ? im_activator_248_32_76(u32(o + 76) + g.m, x[i].section_76) : 0;

// }
// function im_activator_248_32_08(o, i ,x) {
// x.push({
//     id: gen_id(),
//     unordered_model_link_00: 0,
// });

//  // x[i].unordered_model_link_00 = in_ml(u32(o + 00), g.model_link_array, im_model_link, g.unordered_ref.model_link);

// }

// function im_activator_248_32_16(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_32(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_36(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_52(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         u8_04: u8(o + 04),
//         section_08: [],
//     });

//     switch (u32(o + 00)) {
//     case 0:
//         u32(o + 08) ? im_activator_248_32_72_08t0(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 2:
//         u32(o + 08) ? im_activator_248_32_72_08t2(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 4:
//         x[i].section_08 = in_ml(u32(o + 08), g.activator_array, im_activator, g.unordered_ref.activator);
//         break;
//     case 5:
//         x[i].section_08 = in_ml(u32(o + 08), g.activator_array, im_activator, g.unordered_ref.activator);
//         break;
//     case 8:
//         u32(o + 08) ? im_activator_248_32_72_08t08(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 10:
//         u32(o + 08) ? im_activator_248_32_72_08t10(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 12:
//         u32(o + 08) ? im_activator_248_32_72_08t12(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 13:
//         u32(o + 08) ? im_activator_248_32_72_08t13(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 14:
//         u32(o + 08) ? im_activator_248_32_72_08t14(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 15:
//         u32(o + 08) ? im_activator_248_32_72_08t15(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 16:
//         u32(o + 08) ? im_activator_248_32_72_08t16(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 17:
//         u32(o + 08) ? im_activator_248_32_72_08t17(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 18:
//         u32(o + 08) ? im_activator_248_32_72_08t18(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 20:
//         u32(o + 08) ? im_activator_248_32_72_08t20(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 22:
//         u32(o + 08) ? im_activator_248_32_72_08t22(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 23:
//         u32(o + 08) ? im_activator_248_32_72_08t23(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 25:
//         u32(o + 08) ? im_activator_248_32_72_08t25(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 32:
//         u32(o + 08) ? im_activator_248_32_72_08t32(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     }
// }
// function im_activator_248_32_72_08t0(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t2(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t08(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_mysterious(u32(o + 04) + (i * 64) + g.m, i, x[0].section_04);
//     }

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t10(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t12(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t13(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t14(o, x) {
//     x.push({
//         f32_04: f32(o + 04),
//         f32_08: f32(o + 08),
//         f32_16: f32(o + 16),
//         f32_24: f32(o + 24),
//         u32_28: u32(o + 28),
//     });

//     // 32 bytes;

// }
// function im_activator_248_32_72_08t15(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t16(o, x) {
//     x.push({
//         u16_00: u16(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t17(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u32_04: u32(o + 04),
//         //amount?
//         section_08: [],
//     });

//     for (let i = 0; i < u32(o + 04); i++) {
//         im_mysterious(u32(o + 08) + (i * 64) + g.m, i, x[0].section_08);
//     }

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t18(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//         section_08: [],
//     });

//     u32(o + 08) ? im_activator_248_32_72_08t18_08(u32(o + 08) + g.m, x[0].section_08) : 0;

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t18_08(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //check this
//         section_04: [],
//     });

//     switch (u32(o + 00)) {
//     case 0:
//         u32(o + 04) ? im_activator_248_32_72_08t18_08_04t0(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 6:
//         u32(o + 04) ? im_activator_248_32_72_08t18_08_04t6(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     }
//     // 16 bytes;

// }
// function im_activator_248_32_72_08t18_08_04t0(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u16_12: u16(o + 12),
//         u32_20: u32(o + 20),
//         u32_28: u32(o + 28),
//         u8_32: u8(o + 32),
//     });

//     // 48 bytes;

// }
// function im_activator_248_32_72_08t18_08_04t6(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         f32_04: f32(o + 04),
//         section_08: [],
//     });

//     u32(o + 08) ? im_activator_248_32_72_08t18_08_04t6_08(u32(o + 08) + g.m, x[0].section_08) : 0;

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t18_08_04t6_08(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t20(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t22(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//         f32_08: f32(o + 08),
//     });

//     u32(o + 00) ? im_activator_248_32_72_08t22_00(u32(o + 00) + g.m, x[0].section_00) : 0;

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t22_00(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_32_72_08t22_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t22_00_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u32_04: u32(o + 04),
//         u32_08: u32(o + 08),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t23(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_mysterious(u32(o + 04) + (i * 64) + g.m, i, x[0].section_04);
//     }

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t25(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_32_72_08t25_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t25_04(o, x) {
//     x.push({
//         u8_04: u8(o + 04),
//         section_08: [],
//     });

//     u32(o + 08) ? im_activator_248_32_72_08t25_04_08(u32(o + 08) + g.m, x[0].section_08) : 0;

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t25_04_08(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_72_08t32(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_08: u32(o + 08),
//     });

//     // 16 bytes;

// }
// function im_activator_248_32_76(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//     });

//     // 16 bytes;

// }

function im_activator(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        ordered_model_animation_2_04: 0,
        section_08: [im_string(u32(o + 08), 0, false)],
        u32_12: u32(o + 12),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u32_48: u32(o + 48),
        u32_56: u32(o + 56),
        u32_64: u32(o + 64),
        f32_72: f32(o + 72),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        u32_100: u32(o + 100),
        f32_104: f32(o + 104),
        section_108: [],
        u32_112: u32(o + 112),
        //amount?
        section_116: [],
        u8_120: u8(o + 120),
        u8_121: u8(o + 121),
        u8_122: u8(o + 122),
        u8_123: u8(o + 123),
        section_124: [],
        f32_128: f32(o + 128),
        f32_132: f32(o + 132),
        f32_136: f32(o + 136),
        u32_140: u32(o + 140),
        //amount?
        section_144: [],
        unordered_wtf_148: 0,
        u8_153: u8(o + 153),
        u8_154: u8(o + 154),
        u8_155: u8(o + 155),
        u32_172: u32(o + 172),
        //amount?
        section_176: [],
        u32_180: u32(o + 180),
        //amount?
        section_184: [],
        u32_188: u32(o + 188),
        //amount?
        section_192: [],
        f32_204: f32(o + 204),
        u32_208: u32(o + 208),
        //amount?
        section_212: [],
        u32_224: u32(o + 224),
        section_228: [],
        u32_244: u32(o + 244),
        //amount?
        section_248: [],
    });

    x[i].ordered_model_animation_2_04 = in_ml(u32(o + 04), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_activator_24(u32(o + 24) + (ii * 24) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_activator_32(u32(o + 32) + (ii * 24) + g.m, ii, x[i].section_32);
    }
    u32(o + 108) ? im_activator_108(u32(o + 108) + g.m, x[i].section_108) : 0;
    u32(o + 116) ? im_activator_116(u32(o + 116) + g.m, x[i].section_116) : 0;
    u32(o + 124) ? im_activator_124(u32(o + 124) + g.m, x[i].section_124) : 0;
    u32(o + 144) ? im_activator_144(u32(o + 144) + g.m, x[i].section_144) : 0;
    x[i].unordered_wtf_148 = in_ml(u32(o + 148), g.wtf_array, im_wtf, g.unordered_ref.wtf);

    for (let ii = 0; ii < u32(o + 172); ii++) {
        im_activator_176(u32(o + 176) + (ii * 20) + g.m, ii, x[i].section_176);
    }

    for (let ii = 0; ii < u32(o + 180); ii++) {
        im_activator_184(u32(o + 184) + (ii * 12) + g.m, ii, x[i].section_184);
    }

    for (let ii = 0; ii < u32(o + 188); ii++) {
        im_activator_184(u32(o + 192) + (ii * 12) + g.m, ii, x[i].section_192);
    }

    for (let ii = 0; ii < u32(o + 208); ii++) {
        im_unknown(u32(o + 212) + (ii * 04) + g.m, ii, x[i].section_212);
    }

    for (let ii = 0; ii < u32(o + 224); ii++) {
        im_unknown(u32(o + 228) + (ii * 04) + g.m, ii, x[i].section_228);
    }

    for (let ii = 0; ii < u32(o + 244); ii++) {
        im_activator_248(u32(o + 248) + (ii * 36) + g.m, ii, x[i].section_248);
    }
    return x[i].id
    // 256 bytes;

}
function im_activator_24(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        section_04: [],
        f32_08: f32(o + 08),
        f32_20: f32(o + 20),
    });

    switch (u8(o + 00)) {
    case 4:
        u32(o + 04) ? im_activator_24_04t4(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 6:
        u32(o + 04) ? im_activator_24_04t6(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_activator_24_04t4(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_activator_24_04t4_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_activator_24_04t4_04(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
    });

    // 16 bytes;

}
function im_activator_24_04t6(o, x) {
    x.push({
        u8_00: u8(o + 00),
        section_08: [im_string(u32(o + 08), 0, false)],
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_activator_32(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        section_04: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 04) ? im_activator_32_04(u32(o + 04) + g.m, x[i].section_04) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_activator_32_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

}
function im_activator_32_04(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_activator_32_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u8_04: u8(o + 04),
        section_08: [],
    });

    u32(o + 08) ? im_activator_32_20_08(u32(o + 08) + g.m, x[i].section_08) : 0;

}
function im_activator_32_20_08(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_108(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u32_04: u32(o + 04),
        section_08: [],
    });

    switch (u32(o + 04)) {
    case 1:
        u32(o + 08) ? im_activator_108_08t1(u32(o + 08) + g.m, x[0].section_08) : 0;
        break;
    case 2:
        u32(o + 08) ? im_activator_108_08t2(u32(o + 08) + g.m, x[0].section_08) : 0;
        break;
    }
    // 16 bytes;

}
function im_activator_108_08t1(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_activator_108_08t2(o, x) {
    x.push({
        u8_04: u8(o + 04),
        section_08: [],
        u32_12: u32(o + 12),
    });

    u32(o + 08) ? im_activator_108_08t2_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 32 bytes;

}
function im_activator_108_08t2_08(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_116(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_activator_124(o, x) {
    x.push({
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_activator_144(o, x) {
    x.push({
        f32_00: f32(o + 00),
    });

    // 48 bytes;

}
function im_activator_176(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        //amount?
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 04); ii++) {
        im_activator_176_08(u32(o + 08) + (ii * 12) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_activator_176_08(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

}
function im_activator_176_08(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u8_04: u8(o + 04),
        section_08: [],
    });

    switch (u32(o + 00)) {
    case 0:
        u32(o + 08) ? im_activator_176_08t0(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 13:
        u32(o + 08) ? im_activator_176_08t13(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 19:
        u32(o + 08) ? im_activator_176_08t19(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    }
}
function im_activator_176_08t0(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_176_08t13(o, x) {
    x.push({
        u8_00: u8(o + 00),
    });

    // 16 bytes;

}
function im_activator_176_08t19(o, x) {
    x.push({
        u8_00: u8(o + 00),
    });

    // 16 bytes;

}
function im_activator_184(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_mysterious(u32(o + 04) + (ii * 64) + g.m, ii, x[i].section_04);
    }

}
function im_activator_248(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        section_04: [],
        section_08: [im_string(u32(o + 08), 0, false)],
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        unordered_sound_controls_20: 0,
        u8_24: u8(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_activator_248_04(u32(o + 04) + (ii * 8) + g.m, ii, x[i].section_04);
    }
    x[i].unordered_sound_controls_20 = in_ml(u32(o + 20), g.sound_controls_array, im_sound_controls, g.unordered_ref.sound_controls);

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_activator_248_32(u32(o + 32) + (ii * 80) + g.m, ii, x[i].section_32);
    }

}
function im_activator_248_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        //check this
        u8_01: u8(o + 01),
        section_04: [],
    });

    switch (u8(o + 00)) {
    case 0:
        u32(o + 04) ? im_activator_248_04_04t0(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 1:
        u32(o + 04) ? im_activator_248_04_04t1(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 04) ? im_activator_248_04_04t2(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 3:
        u32(o + 04) ? im_activator_248_04_04t3(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 4:
        u32(o + 04) ? im_activator_248_04_04t4(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 5:
        u32(o + 04) ? im_activator_248_04_04t5(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 6:
        u32(o + 04) ? im_activator_248_04_04t6(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 9:
        u32(o + 04) ? im_activator_248_04_04t9(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 11:
        u32(o + 04) ? im_activator_248_04_04t11(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 12:
        u32(o + 04) ? im_activator_248_04_04t12(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 13:
        u32(o + 04) ? im_activator_248_04_04t13(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 15:
        u32(o + 04) ? im_activator_248_04_04t15(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_activator_248_04_04t0(o, x) {
    x.push({
        u32_00: u32(o + 00),
        unordered_activator_248_04_04t0_04_04: 0,
    });

    x[0].unordered_activator_248_04_04t0_04_04 = in_ml(u32(o + 04), g.activator_248_04_04t0_04_array, im_activator_248_04_04t0_04, g.unordered_ref.activator_248_04_04t0_04);

    // 16 bytes;

}

// function im_activator_248_04_04t0_04(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //amount?
//         section_04: [],
//         f32_08: f32(o + 08),
//         f32_12: f32(o + 12),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         u8_24: u8(o + 24),
//         u8_27: u8(o + 27),
//         u8_28: u8(o + 28),
//         u8_29: u8(o + 29),
//         u8_30: u8(o + 30),
//         u8_31: u8(o + 31),
//         u8_32: u8(o + 32),
//         u8_33: u8(o + 33),
//         u8_34: u8(o + 34),
//     });

//     for (let i = 0; i < u32(o + 00); i++) {
//         im_activator_248_04_04t0_04_04(u32(o + 04) + (i * 8) + g.m, i, x[0].section_04);
//     }

//     // 48 bytes;

// }
// function im_activator_248_04_04t0_04_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_04_04t0_04_04_04(u32(o + 04) + g.m, x[i].section_04) : 0;

// }
// function im_activator_248_04_04t0_04_04_04(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_activator_248_04_04t0_04_04_04_04(u32(o + 04) + g.m, x[0].section_04) : 0;

//     // 16 bytes;

// }
// function im_activator_248_04_04t0_04_04_04_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//     });

//     // 16 bytes;

// }
function im_activator_248_04_04t1(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t2(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t3(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t4(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t5(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t6(o, x) {
    x.push({
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t9(o, x) {
    x.push({
        f32_04: f32(o + 04),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
        u8_20: u8(o + 20),
        u8_22: u8(o + 22),
    });

    // 32 bytes;

}
function im_activator_248_04_04t11(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_04_04t12(o, x) {
    x.push({});

    // 16 bytes;

}
function im_activator_248_04_04t13(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
        f32_08: f32(o + 08),
    });

    u32(o + 00) ? im_activator_248_04_04t13_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_activator_248_04_04t13_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_activator_248_04_04t13_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_activator_248_04_04t13_00_04(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_04_04t15(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_32(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 00), 0, false)],
        u32_04: u32(o + 04),
        //amount?
        section_08: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        section_16: [],
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        section_36: [],
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        section_52: [],
        f32_56: f32(o + 56),
        u8_61: u8(o + 61),
        f32_64: f32(o + 64),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        section_76: [],
    });

    for (let ii = 0; ii < u32(o + 04); ii++) {
        im_activator_248_32_08(u32(o + 08) + (ii * 4) + g.m, ii, x[i].section_08);
    }
    u32(o + 16) ? im_activator_248_32_16(u32(o + 16) + g.m, x[i].section_16) : 0;
    u32(o + 32) ? im_activator_248_32_32(u32(o + 32) + g.m, x[i].section_32) : 0;
    u32(o + 36) ? im_activator_248_32_36(u32(o + 36) + g.m, x[i].section_36) : 0;
    // offset? 
    u32(o + 52) ? im_activator_248_32_52(u32(o + 52) + g.m, x[i].section_52) : 0;

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_activator_248_32_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
    }
    u32(o + 76) ? im_activator_248_32_76(u32(o + 76) + g.m, x[i].section_76) : 0;

}
function im_activator_248_32_08(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_model_link_00: 0,
    });

    x[i].unordered_model_link_00 = in_ml(u32(o + 00), g.model_link_array, im_model_link, g.unordered_ref.model_link);

}
function im_activator_248_32_16(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_32_32(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_36(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_52(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_72(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u8_04: u8(o + 04),
        section_08: [],
    });

    switch (u32(o + 00)) {
    case 0:
        u32(o + 08) ? im_activator_248_32_72_08t0(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 2:
        u32(o + 08) ? im_activator_248_32_72_08t2(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 4:
        x[i].section_08 = in_ml(u32(o + 08), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    case 5:
        x[i].section_08 = in_ml(u32(o + 08), g.activator_array, im_activator, g.unordered_ref.activator);
        break;
    case 8:
        u32(o + 08) ? im_activator_248_32_72_08t08(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 10:
        u32(o + 08) ? im_activator_248_32_72_08t10(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 12:
        u32(o + 08) ? im_activator_248_32_72_08t12(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 13:
        u32(o + 08) ? im_activator_248_32_72_08t13(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 14:
        u32(o + 08) ? im_activator_248_32_72_08t14(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 15:
        u32(o + 08) ? im_activator_248_32_72_08t15(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 16:
        u32(o + 08) ? im_activator_248_32_72_08t16(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 17:
        u32(o + 08) ? im_activator_248_32_72_08t17(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 18:
        u32(o + 08) ? im_activator_248_32_72_08t18(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 20:
        u32(o + 08) ? im_activator_248_32_72_08t20(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 22:
        u32(o + 08) ? im_activator_248_32_72_08t22(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 23:
        u32(o + 08) ? im_activator_248_32_72_08t23(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 25:
        u32(o + 08) ? im_activator_248_32_72_08t25(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 32:
        u32(o + 08) ? im_activator_248_32_72_08t32(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    }
}
function im_activator_248_32_72_08t0(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t2(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t08(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_mysterious(u32(o + 04) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_activator_248_32_72_08t10(o, x) {
    x.push({
        u8_00: u8(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t12(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t13(o, x) {
    x.push({
        u8_00: u8(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t14(o, x) {
    x.push({
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
    });

    // 32 bytes;

}
function im_activator_248_32_72_08t15(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t16(o, x) {
    x.push({
        u16_00: u16(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t17(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u32_04: u32(o + 04),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 04); i++) {
        im_mysterious(u32(o + 08) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
function im_activator_248_32_72_08t18(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        section_08: [],
    });

    u32(o + 08) ? im_activator_248_32_72_08t18_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_activator_248_32_72_08t18_08(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //check this
        section_04: [],
    });

    switch (u32(o + 00)) {
    case 0:
        u32(o + 04) ? im_activator_248_32_72_08t18_08_04t0(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    case 6:
        u32(o + 04) ? im_activator_248_32_72_08t18_08_04t6(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    }
    // 16 bytes;

}
function im_activator_248_32_72_08t18_08_04t0(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
    });

    // 48 bytes;

}
function im_activator_248_32_72_08t18_08_04t6(o, x) {
    x.push({
        u32_00: u32(o + 00),
        f32_04: f32(o + 04),
        section_08: [],
    });

    u32(o + 08) ? im_activator_248_32_72_08t18_08_04t6_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_activator_248_32_72_08t18_08_04t6_08(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t20(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    switch (u8(o + 08)) {
    case 0:
        x[0].section_00 = f32(o + 00);
        break;
    case 1:
        u32(o + 00) ? im_activator_248_32_72_08t20_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;
        break;
    }
    // 16 bytes;

}

function im_activator_248_32_72_08t20_00t1(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t22(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
        f32_08: f32(o + 08),
    });

    u32(o + 00) ? im_activator_248_32_72_08t22_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_activator_248_32_72_08t22_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_activator_248_32_72_08t22_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_activator_248_32_72_08t22_00_04(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t23(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_mysterious(u32(o + 04) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}

function im_activator_248_32_72_08t25(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_activator_248_32_72_08t25_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_activator_248_32_72_08t25_04(o, x) {
    x.push({
        u8_04: u8(o + 04),
        section_08: [],
    });

    u32(o + 08) ? im_activator_248_32_72_08t25_04_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_activator_248_32_72_08t25_04_08(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_activator_248_32_72_08t32(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_08: u32(o + 08),
    });

    // 16 bytes;

}
function im_activator_248_32_76(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
