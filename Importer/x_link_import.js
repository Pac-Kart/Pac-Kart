// // function im_link(o, x) {
// //     x.push({
// //         section_00: [],
// //         u32_04: u32(o + 04),
// //         section_08: [],
// //         section_12: [get_string(u32(o+12)+g.m, 0, false)],
// //         u32_16: u32(o + 16),
// //         section_20: [get_string(u32(o+20)+g.m, 0, false)],
// //         u32_24: u32(o + 24),
// //         u32_28: u32(o + 28),
// //         section_32: [],
// //         section_36: [get_string(u32(o+36)+g.m, 0, false)],
// //         section_40: [get_string(u32(o+40)+g.m, 0, false)],
// //         u32_44: u32(o + 44),
// //         section_48: [],
// //         u32_52: u32(o + 52),
// //         u32_56: u32(o + 56),
// //         section_60: [],
// //         u32_64: u32(o + 64),
// //         u32_68: u32(o + 68),
// //         u32_72: u32(o + 72),
// //     });

// //     for (let i = 0; i < u32(o + 4); i++) {
// //         im_link_intro(u32(o + 8) + (i * 16) + g.m, i, x[0].section_08)
// //     }
// //     for (let i = 0; i < u32(o + 28); i++) {
// //         im_link_32(u32(o + 32) + (i * 8) + g.m, i, x[0].section_32)
// //     }

// //     u32(o + 00) ? im_link_00(u32(o + 00) + g.m, x[0].section_00) : 0;
// //     u32(o + 48) ? im_link_demo(u32(o + 48) + g.m, x[0].section_48) : 0;

// //     // u32(o + 60) ? im_frame_font(u32(o + 60) + g.m, x[0].section_60) : 0;

// // }

// // function im_link_00(o, x) {
// //     x.push({
// //         u8_00: u8(o + 00),
// //         section_04: [],
// //     });

// //     u32(o + 04) ? im_link_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// // }
// // function im_link_00_04(o, x) {
// //     x.push({
// //         section_00: [],
// //     });

// //     u32(o + 00) ? im_link_00_04_00(u32(o + 00) + g.m, x[0].section_00) : 0;

// // }
// // function im_link_00_04_00(o, x) {
// //     x.push({
// //         section_04: [],
// //         u8_08: u8(o + 08),
// //     });

// //     u32(o + 04) ? im_link_00_04_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// // }
// // function im_link_00_04_00_04(o, x) {
// //     x.push({
// //         u32_20: u32(o + 20),
// //     });

// // }
// // function im_link_intro(o, i, x) {
// //     x.push({
// //         u8_00: u8(o + 00),
// //         section_04: [get_string(u32(o+4)+g.m, 0, false)],
// //         section_08: [],
// //         section_12: [],
// //     });

// //     u32(o + 8) ? im_link_intro_08(u32(o + 8) + g.m, x[i].section_08) : 0;
// //     u32(o + 12) ? im_link_offset_index(u32(o + 12) + g.m, x[i].section_12) : 0;

// // }
// // function im_link_intro_08(o, x) {
// //     x.push({
// //         u8_00: u8(o + 00),
// //         u8_01: u8(o + 01),
// //     });

// // }
// // function im_link_offset_index(o, x) {
// //     x.push({
// //         section_00: [get_string(u32(o)+g.m, 0, false)],
// //         u32_04: u32(o + 04),
// //     });

// //     // let string_ = get_string(offset + 80 + i, 0, false)

// // }

// // function im_link_32(o, i, x) {
// //     x.push({
// //         section_00: [],
// //     });

// //     u32(o + 00) ? im_link_32_00(u32(o + 00) + g.m, x[i].section_00) : 0;

// // }
// // function im_link_32_00(o, x) {
// //     x.push({
// //         u32_00: u32(o + 00),
// //         section_04: [],
// //     });

// //     for (let i = 0; i < u32(o); i++) {
// //         im_link_32_00_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04)
// //     }

// //     // u32(o + 04) ? im_link_32_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// // }
// // function im_link_32_00_04(o, i, x) {
// //     x.push({
// //         u32_00: u32(o + 00),
// //         section_04: [],
// //         section_08: [],
// //         section_12: [get_string(u32(o+12)+g.m, 0, false)],
// //         u32_16: u32(o + 16),
// //         section_20: [],
// //         u32_24: u32(o + 24),
// //         section_28: [],
// //     });

// //     for (let ii = 0; ii < u32(o); ii++) {
// //         im_link_32_00_04_04(u32(o + 4) + (ii * 16) + g.m, ii, x[i].section_04)
// //     }

// //     u32(o + 08) ? im_link_offset_index(u32(o + 08) + g.m, x[i].section_08) : 0;
// //     for (let ii = 0; ii < u32(o + 16); ii++) {
// //         im_link_32_00_04_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20)
// //     }
// //     for (let ii = 0; ii < u32(o + 24); ii++) {
// //         im_link_32_00_04_20(u32(o + 28) + (ii * 12) + g.m, ii, x[i].section_28)
// //     }

// // }
// // function im_link_32_00_04_04(o, i, x) {
// //     x.push({
// //         u8_00: u8(o + 00),
// //         section_04: [],
// //     });

// //     u32(o + 04) ? im_link_offset_index(u32(o + 04) + g.m, x[i].section_04) : 0;

// // }
// // function im_link_32_00_04_20(o, i, x) {
// //     x.push({
// //         u32_00: u32(o + 00),
// //         section_04: [],
// //         u16_08: u16(o + 08),
// //     });

// //     for (let ii = 0; ii < u32(o); ii++) {
// //         im_link_32_00_04_20_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04)
// //     }

// // }
// // function im_link_32_00_04_20_04(o, i, x) {
// //     x.push({
// //         u8_00: u8(o + 00),
// //         section_04: [],
// //         });

// //     u32(o + 04) ? im_link_offset_index(u32(o + 04) + g.m, x[i].section_04) : 0;

// // }
// // function im_link_demo(o, x) {
// //     x.push({
// //         u8_00: u8(o + 00),
// //         u32_04: u32(o + 04),
// //         section_08: [],
// //     });

// //     u32(o + 08) ? im_link_32_00(u32(o + 08) + g.m, x[0].section_08) : 0;

// // }

// function im_link(o, x) {
//     x.push({
//         section_00: [],
//         u32_04: u32(o + 04),
//         section_08: [],
//         u32_12: u32(o + 12),
//         u32_16: u32(o + 16),
//         u32_20: u32(o + 20),
//         u32_24: u32(o + 24),
//         u32_28: u32(o + 28),
//         section_32: [],
//         u32_36: u32(o + 36),
//         u32_40: u32(o + 40),
//         u32_44: u32(o + 44),
//         section_48: [],
//         u32_52: u32(o + 52),
//         u32_56: u32(o + 56),
//         unordered_frame_font: 0,
//         u32_64: u32(o + 64),
//         u32_68: u32(o + 68),
//         u32_72: u32(o + 72),
//     });

//     u32(o + 00) ? im_link_00(u32(o + 00) + g.m, x[0].section_00) : 0;

//     for (let i = 0; i < u32(o + 4); i++) {
//         im_link_intro(u32(o + 08) + (i * 16) + g.m, i, x[0].section_08);
//     }
//     ;
//     for (let i = 0; i < u32(o + 28); i++) {
//         im_link_32(u32(o + 32) + (i * 8) + g.m, i, x[0].section_32);
//     }
//     ;u32(o + 48) ? im_link_demo(u32(o + 48) + g.m, x[0].section_48) : 0;
//     // x[0].unordered_frame_font = in_ml(u32(o + 60), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);

// }

// function im_link_00(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_link_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// }
// function im_link_00_04(o, x) {
//     x.push({
//         section_00: [],
//     });

//     u32(o + 00) ? im_link_00_04_00(u32(o + 00) + g.m, x[0].section_00) : 0;

// }
// function im_link_00_04_00(o, x) {
//     x.push({
//         section_04: [],
//         u8_08: u8(o + 08),
//     });

//     u32(o + 04) ? im_link_00_04_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// }
// function im_link_00_04_00_04(o, x) {
//     x.push({
//         u32_20: u32(o + 20),
//     });

// }

// function im_link_intro(o, i, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         //FIX ? : u32(o + 04),
//         //FIX ? : u32(o + 08),
//         section_12: [],
//     });

//     u32(o + 12) ? im_link_offset_index(u32(o + 12) + g.m, x[i].section_12) : 0;

// }
// function im_link_intro_08(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//     });

// }
// function im_link_offset_index(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//     });

// }


// function im_link_32(o, i, x) {
//     x.push({
//         section_00: [],
//     });

//     u32(o + 00) ? im_link_32_00(u32(o + 00) + g.m, x[i].section_00) : 0;

// }
// function im_link_32_00(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     for (let i = 0; i < u32(o + 0); i++) {
//         im_link_32_00_04(u32(o + 04) + (i * 32) + g.m, i, x[0].section_04);
//     }
//     ;

// }
// function im_link_32_00_04(o, i, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//         section_08: [],
//         u32_12: u32(o + 12),
//         u32_16: u32(o + 16),
//         section_20: [],
//         u32_24: u32(o + 24),
//         //FIX ? : u32(o + 28),
//     });

//     u32(o + 04) ? im_link_32_00_04_04(u32(o + 04) + g.m, x[i].section_04) : 0;
//     u32(o + 08) ? im_link_offset_index(u32(o + 08) + g.m, x[i].section_08) : 0;

//     for (let ii = 0; ii < u32(o + 16); ii++) {
//         im_link_32_00_04_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
//     }
//     ;

// }
// function im_link_32_00_04_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_link_offset_index(u32(o + 04) + g.m, x[0].section_04) : 0;

// }
// function im_link_32_00_04_20(o, i, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//         u16_08: u16(o + 08),
//     });

//     u32(o + 04) ? im_link_32_00_04_20_04(u32(o + 04) + g.m, x[i].section_04) : 0;

// }
// function im_link_32_00_04_20_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_link_offset_index(u32(o + 04) + g.m, x[0].section_04) : 0;

// }
// function im_link_demo(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//         section_08: [],
//     });

//     u32(o + 08) ? im_link_32_00(u32(o + 08) + g.m, x[0].section_08) : 0;

// }
