// function in_link(o, x) {
    
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
//         section_60: [],
//         u32_64: u32(o + 64),
//         u32_68: u32(o + 68),
//         u32_72: u32(o + 72),
//     });

// // u32(o + 00) ? in_link_00(u32(o + 00) + g.m,x[0].section_00) : 0; 
// // u32(o + 08) ? in_link_intro(u32(o + 08) + g.m,x[0].section_08) : 0; 
// // u32(o + 32) ? in_link_32(u32(o + 32) + g.m,x[0].section_32) : 0; 
// // u32(o + 48) ? in_link_demo(u32(o + 48) + g.m,x[0].section_48) : 0; 
// // u32(o + 60) ? in_frame_font(u32(o + 60) + g.m,x[0].section_60) : 0; 

// }
// function in_xdx_link(o, x) {
//     x.push({
//         section_00: [],
//         u32_04: u32(o + 04),
//         section_08: [],
//         u32_12: u32(o + 12),
//         u32_16: u32(o + 16),
//         u32_20: u32(o + 20),
//         section_24: [],
//         u32_28: u32(o + 28),
//         u32_32: u32(o + 32),
//         section_40: [],
//         u32_44: u32(o + 44),
//         u32_48: u32(o + 48),
//     });

// u32(o + 00) ? in_link_00(u32(o + 00) + g.m,x[0].section_00) : 0; 
// u32(o + 08) ? in_xdx_link_08(u32(o + 08) + g.m,x[0].section_08) : 0; 
// u32(o + 24) ? in_xdx_link_24(u32(o + 24) + g.m,x[0].section_24) : 0; 
// u32(o + 40) ? in_link_demo(u32(o + 40) + g.m,x[0].section_40) : 0; 

// }
// function in_link_00(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

// u32(o + 04) ? in_link_00_04(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_00_04(o, x) {
//     x.push({
//         section_00: [],
//     });

// u32(o + 00) ? in_link_00_04_00(u32(o + 00) + g.m,x[0].section_00) : 0; 

// }
// function in_link_00_04_00(o, x) {
//     x.push({
//         section_04: [],
//         u8_08: u8(o + 08),
//     });

// u32(o + 04) ? in_link_00_04_00_04(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_00_04_00_04(o, x) {
//     x.push({
//         u32_20: u32(o + 20),
//     });

// }
// function in_xdx_link_08(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_08: [],
//     });

// u32(o + 08) ? in_link_offset_index(u32(o + 08) + g.m,x[0].section_08) : 0; 

// }
// function in_link_intro(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         // ?: u32(o + 04),
//         // ?: u32(o + 08),
//         section_12: [],
//     });

// u32(o + 12) ? in_link_offset_index(u32(o + 12) + g.m,x[0].section_12) : 0; 

// }
// function in_link_intro_08(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u8_01: u8(o + 01),
//     });

// }
// function in_link_offset_index(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//     });

// }
// function in_xdx_link_24(o, x) {
//     x.push({
//         section_00: [],
//     });

// u32(o + 00) ? in_xdx_link_24_00(u32(o + 00) + g.m,x[0].section_00) : 0; 

// }
// function in_xdx_link_24_00(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

// u32(o + 04) ? in_link_32_00_04(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_32(o, x) {
//     x.push({
//         section_00: [],
//     });

// u32(o + 00) ? in_link_32_00(u32(o + 00) + g.m,x[0].section_00) : 0; 

// }
// function in_link_32_00(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

// u32(o + 04) ? in_link_32_00_04(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_32_00_04(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//         section_08: [],
//         u32_12: u32(o + 12),
//         u32_16: u32(o + 16),
//         section_20: [],
//         u32_24: u32(o + 24),
//         // ?: u32(o + 28),
//     });

// u32(o + 04) ? in_link_32_00_04_04(u32(o + 04) + g.m,x[0].section_04) : 0; 
// u32(o + 08) ? in_link_offset_index(u32(o + 08) + g.m,x[0].section_08) : 0; 
// u32(o + 20) ? in_link_32_00_04_20(u32(o + 20) + g.m,x[0].section_20) : 0; 

// }
// function in_link_32_00_04_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

// u32(o + 04) ? in_link_offset_index(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_32_00_04_20(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//         u16_08: u16(o + 08),
//     });

// u32(o + 04) ? in_link_32_00_04_20_04(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_32_00_04_20_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

// u32(o + 04) ? in_link_offset_index(u32(o + 04) + g.m,x[0].section_04) : 0; 

// }
// function in_link_demo(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//         section_08: [],
//     });

// u32(o + 08) ? in_link_32_00(u32(o + 08) + g.m,x[0].section_08) : 0; 

// }



// function im_link(o, x, i) {

//     x.push({
//         id: gen_id(),
//         section_00: [],
//     })
//     u32(o + 0) ? im_link_0(u32(o + 0) + g.m, x[i].section_00) : 0

//     return x[i].id

// }

// function im_link_0(o, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o),
//         u32_04: u32(o + 4),
//         u32_08: u32(o + 8),
//     })

// }

// function get_link_header(offset, XFA) {

//     if (u32(offset + 12, is_little_endian) != 0) {
//         main_menu_Intrface_offset = u32(offset + 12, is_little_endian) + offset_mid
//         main_menu_Intrface_index = u32(offset + 16, is_little_endian)
//     }
//     if (u32(offset + 20, is_little_endian) != 0) {
//         main_menu_loading_offset = u32(offset + 20, is_little_endian) + offset_mid
//         main_menu_loading_index = u32(offset + 24, is_little_endian)
//     }
//     if (u32(offset + 36, is_little_endian) != 0) {
//         main_menu_kart_offset = u32(offset + 36, is_little_endian) + offset_mid
//     }
//     if (u32(offset + 40, is_little_endian) != 0) {
//         main_menu_item_offset = u32(offset + 40, is_little_endian) + offset_mid
//     }

//     XFA.push({
//         id: gen_id(),
//         section_1: [],
//         section_intro: [],
//         section_main: [],
//         section_demo: [],
//         section_font: [],
//         section_mystery: [],
//         texture_1: [],
//         texture_2: [],
//         menu_Intrface_name: get_string(main_menu_Intrface_offset, 0, false),
//         menu_Intrface_index: main_menu_Intrface_index,
//         menu_loading_name: get_string(main_menu_loading_offset, 0, false),
//         menu_loading_index: main_menu_loading_index,
//         menu_kart_name: get_string(main_menu_kart_offset, 0, false),
//         menu_item_name: get_string(main_menu_item_offset, 0, false),
//     })

//     // xdx is 64 bytes

//     if (u32(offset, is_little_endian) != 0) {
//         get_link_1(u32(offset, is_little_endian) + offset_mid, XFA[0].section_1)
//     }
//     for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
//         console.log(XFA)
//         get_link_2(u32(offset + 8, is_little_endian) + offset_mid + (i * 16), i, XFA[0].section_intro)
//     }

//     for (let i = 0; i < u32(offset + 28, is_little_endian); i++) {
//         get_link_5(u32(offset + 32, is_little_endian) + offset_mid + (i * 8), i, XFA[0].section_main)
//     }

//     if (u32(offset + 48, is_little_endian) != 0) {
//         get_link_8(u32(offset + 48, is_little_endian) + offset_mid, XFA[0].section_demo)
//     }
//     if (u32(offset + 52, is_little_endian) != 0) {
//         //check if in patch list
//         let patch_array = get_patch_offset_index(texture_patch, offset + 52 - offset_mid)
//         if (patch_array != -1) {
//             XFA[0].texture_1 = patch_array
//         }
//     }

//     if (u32(offset + 56, is_little_endian) != 0) {
//         //check if in patch list
//         let patch_array = get_patch_offset_index(texture_patch, offset + 56 - offset_mid)
//         if (patch_array != -1) {
//             XFA[0].texture_2 = patch_array
//         }
//     }

//     // texture_patch.indexOf()

//     if (u32(offset + 60, is_little_endian) != 0) {
//         get_link_9(u32(offset + 60, is_little_endian) + offset_mid, XFA[0].section_font)
//     }

//     for (let i = 0; i < u32(offset + 64, is_little_endian); i++) {
//         get_link_10(u32(offset + 68, is_little_endian) + offset_mid + (i * 4), i, XFA[0].section_mystery)
//     }

//     function get_link_10(offset, i, XFA) {
//         XFA.push(u32(offset, is_little_endian))

//     }

//     function get_link_9(offset, XFA) {

//         XFA.push({
//             id: gen_id(),
//             letter_array: [],
//             letter_settings_a: [],
//             texture: [],
//             recusive: [],
//             unknown_0: u16(offset + 8, is_little_endian),
//             unknown_1: u8(offset + 10, is_little_endian),
//             unknown_2: f32(offset + 12, is_little_endian),
//             unknown_3: u32(offset + 24, is_little_endian),
//         })

//         if (u32(offset, is_little_endian) != 0) {
//             //check if in patch list
//             let patch_array = get_patch_offset_index(texture_patch, offset - offset_mid)
//             if (patch_array != -1) {
//                 XFA[0].texture = patch_array
//             }
//         }

//         for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
//             get_link_9_1(u32(offset + 28, is_little_endian) + offset_mid + (i * 32), XFA[0].letter_settings_a, )
//         }
//         for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
//             get_link_9_2(u32(offset + 36, is_little_endian) + offset_mid + (i * 12), XFA[0].letter_array, i)
//         }

//     }

//     function get_link_9_2(offset, XFA, i) {

//         XFA.push([u32(offset, is_little_endian), f32(offset + 4, is_little_endian), f32(offset + 8, is_little_endian)])

//     }
//     function get_link_9_1(offset, XFA) {
//         XFA.push({
//             unknown_1: f32(offset, is_little_endian)
//         })

//     }
//     function get_link_5(offset, i, XFA) {
//         XFA.push([])

//         get_link_5_1(u32(offset, is_little_endian) + offset_mid, i, XFA[i])

//     }
//     function get_link_5_1(offset, i, XFA) {
//         XFA.push([], gen_id())

//         for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
//             get_link_5_1_1(u32(offset + 4, is_little_endian) + offset_mid + (ii * 32), i, ii, XFA[0])
//         }

//     }
//     function get_link_5_1_1(offset, i, ii, XFA) {

//         XFA.push([{
//             loading: [],
//             name: [],
//             interface: [],
//             unknown: [],
//             save: []
//         }, gen_id()])

//         for (iii = 0; iii < u32(offset, is_little_endian); iii++) {
//             get_link_5_1_1_1(u32(offset + 4, is_little_endian) + offset_mid + (iii * 16), i, ii, iii, XFA[ii][0].save)
//         }
//         if (u32(offset + 8, is_little_endian) != 0) {
//             get_link_5_1_1_2(u32(offset + 8, is_little_endian) + offset_mid, i, ii, XFA[ii][0].loading)
//         }

//         if (u32(offset + 12, is_little_endian) != 0) {
//             get_link_5_1_1_3(u32(offset + 12, is_little_endian) + offset_mid, i, ii, XFA[ii][0].name)
//         }

//         for (let iii = 0; iii < u32(offset + 16, is_little_endian); iii++) {
//             get_link_5_1_1_4(u32(offset + 20, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[ii][0].interface)
//         }
//         for (let iii = 0; iii < u32(offset + 24, is_little_endian); iii++) {
//             get_link_5_1_1_5(u32(offset + 28, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[ii][0].unknown)
//         }

//     }

//     function get_link_5_1_1_5(offset, i, ii, iii, XFA) {

//         XFA.push({
//             a: [],
//             unknown: u32(offset + 8, is_little_endian)
//         })

//         for (let iiii = 0; iiii < u32(offset, is_little_endian); iiii++) {
//             get_link_5_1_1_5_1(u32(offset + 4, is_little_endian) + offset_mid + (iiii * 8), i, ii, iii, iiii, XFA[iii].a)
//         }

//     }
//     function get_link_5_1_1_5_1(offset, i, ii, iii, iiii, XFA) {
//         XFA.push([])

//         get_link_5_1_1_5_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, iiii, XFA[iiii])

//     }
//     function get_link_5_1_1_5_1_1(offset, i, ii, iii, iiii, XFA) {

//         XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

//     }
//     function get_link_5_1_1_4(offset, i, ii, iii, XFA) {

//         XFA.push({
//             a: [],
//             unknown: u32(offset + 8, is_little_endian)
//         })

//         for (let iiii = 0; iiii < u32(offset, is_little_endian); iiii++) {
//             get_link_5_1_1_4_1(u32(offset + 4, is_little_endian) + offset_mid + (iiii * 8), i, ii, iii, iiii, XFA[iii].a)
//         }

//     }
//     function get_link_5_1_1_4_1(offset, i, ii, iii, iiii, XFA) {

//         XFA.push([])

//         get_link_5_1_1_4_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, iiii, XFA[iiii])

//     }
//     function get_link_5_1_1_4_1_1(offset, i, ii, iii, iiii, XFA) {

//         XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

//     }

//     function get_link_5_1_1_3(offset, i, ii, XFA) {

//         XFA.push(get_string(offset, 0, false))

//     }

//     function get_link_5_1_1_2(offset, i, ii, XFA) {

//         XFA.push(get_string(u32(offset, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

//     }
//     function get_link_5_1_1_1(offset, i, ii, iii, XFA) {

//         XFA.push([])
//         get_link_5_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, XFA[iii])

//     }
//     function get_link_5_1_1_1_1(offset, i, ii, iii, XFA) {

//         XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

//     }

//     function get_link_8(offset, XFA) {

//         XFA.push({
//             unknown_0: u32(offset + 0, is_little_endian),
//             unknown_1: u32(offset + 4, is_little_endian),
//             link_array: []
//         })

//         get_link_8_1(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].link_array)

//     }

//     function get_link_8_1(offset, XFA) {

//         XFA.push([])

//         for (let i = 0; i < u32(offset, is_little_endian); i++) {
//             get_link_8_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32), i, XFA[0])
//         }

//     }
//     function get_link_8_1_1(offset, i, XFA) {

//         ii = 0
//         XFA.push({
//             id: gen_id(),
//             loading: [],
//             name: [],
//             interface: [],
//             unknown: [],
//             save: []
//         })

//         for (iii = 0; iii < u32(offset, is_little_endian); iii++) {
//             get_link_5_1_1_1(u32(offset + 4, is_little_endian) + offset_mid + (iii * 16), i, ii, iii, XFA[i].save)
//         }
//         if (u32(offset + 8, is_little_endian) != 0) {
//             get_link_5_1_1_2(u32(offset + 8, is_little_endian) + offset_mid, i, ii, XFA[i].loading)
//         }

//         if (u32(offset + 12, is_little_endian) != 0) {
//             get_link_5_1_1_3(u32(offset + 12, is_little_endian) + offset_mid, i, ii, XFA[i].name)
//         }

//         for (let iii = 0; iii < u32(offset + 16, is_little_endian); iii++) {
//             get_link_5_1_1_4(u32(offset + 20, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[i].interface)
//         }
//         for (let iii = 0; iii < u32(offset + 24, is_little_endian); iii++) {
//             get_link_5_1_1_5(u32(offset + 28, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[i].unknown)
//         }

//     }

//     function get_link_2(offset, i, XFA) {

//         if (u32(offset + 0, is_little_endian) === 0) {
//             XFA.push({
//                 intro: get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false),
//                 section_1: []
//             })
//             console.log(offset, XFA)
//             get_link_2_1(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_1)
//         } else {
//             console.log(XFA)
//             get_link_2_2(u32(offset + 12, is_little_endian) + offset_mid, XFA)
//         }

//     }

//     function get_link_2_1(offset, XFA) {
//         console.log(offset, XFA)
//         XFA.push({
//             unknown: u8(offset + 1, is_little_endian)
//         })

//     }

//     function get_link_2_2(offset, XFA) {

//         XFA.push({
//             filename: get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false),
//             file_index: u32(offset + 4, is_little_endian)
//         })

//     }

//     function get_link_1(offset, XFA) {

//         XFA.push({
//             unknown: u32(offset, is_little_endian),
//             section_1: []
//         })
//         get_link_1_1(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_1)

//     }

//     function get_link_1_1(offset, XFA) {
//         XFA.push({
//             section_1: []
//         })
//         get_link_1_1_1(u32(offset + 0, is_little_endian) + offset_mid, XFA[0].section_1)

//     }

//     function get_link_1_1_1(offset, XFA) {
//         XFA.push({
//             section_1: [],
//             unknown: u32(offset + 8, is_little_endian)
//         })

//         get_link_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_1)

//     }

//     function get_link_1_1_1_1(offset, XFA) {
//         XFA.push({
//             unknown: u32(offset + 20, is_little_endian)
//         })

//     }

// }
