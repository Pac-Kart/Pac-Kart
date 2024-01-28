// function im_var(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_11: u8(o + 11),
//         section_140: [im_string(u32(o + 140), 0, false)],
//         u32_144: u32(o + 144),
//         section_148: [],
//         u32_152: u32(o + 152),
//         //check this
//         section_164: [],
//         section_168: [],
//     });

//     u32(o + 148) ? im_var_148(u32(o + 148) + g.m, x[i].section_148) : 0;
//     u32(o + 164) ? im_var_164(u32(o + 164) + g.m, x[i].section_164) : 0;
//     u32(o + 168) ? im_var_168(u32(o + 168) + g.m, x[i].section_168) : 0;
//     return x[i].id
// }
// function im_var_148(o, x) {
//     x.push({
//         unordered_var_00: 0,
//     });

//     x[0].unordered_var_00 = in_ml(u32(o + 00), g.var_array, im_var, g.unordered_ref.var);

// }
// function im_var_164(o, x) {
//     x.push({
//         u32_08: u32(o + 08),
//         //amount?
//         section_12: [],
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//     });

//     for (let i = 0; i < u32(o + 08); i++) {
//         im_var_164_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
//     }

//     for (let i = 0; i < u32(o + 16); i++) {
//         im_var_164_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
//     }

// }
// function im_var_164_12(o, i, x) {
//     x.push({
//         id: gen_id(),
//         section_00: [im_string(u32(o + 00), 0, false)],
//         u32_04: u32(o + 04),
//         u32_08: u32(o + 08),
//         //check this
//         section_12: [],
//         u32_16: u32(o + 16),
//         u32_20: u32(o + 20),
//     });

//     switch (u32(o + 04)) {
//     case 1:
//         u32(o + 12) ? im_var_164_12_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 2:
//         u32(o + 12) ? im_var_164_12_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 5:
//         u32(o + 12) ? im_var_164_12_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 6:
//         u32(o + 12) ? im_var_164_12_12t6(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 7:
//         u32(o + 12) ? im_var_164_12_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 8:
//         u32(o + 12) ? im_var_164_12_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 14:
//         u32(o + 12) ? im_var_164_12_12t14(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 15:
//         u32(o + 12) ? im_var_164_12_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 16:
//         u32(o + 12) ? im_var_164_12_12t16(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     case 24:
//         u32(o + 12) ? im_var_164_12_12t24(u32(o + 12) + g.m, x[i].section_12) : 0;
//         break;
//     }
// }
// function im_var_164_12_12t1(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//     });

//     u32(o + 00) ? im_var_164_12_12t1_00(u32(o + 00) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_12_12t1_00(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//         u8_06: u8(o + 06),
//     });

//     u32(o + 00) ? im_var_164_12_12t1_00_00(u32(o + 00) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_12_12t1_00_00(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_12_12t2(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     switch (u32(o + 00)) {
//     case 1:
//         u32(o + 04) ? im_var_164_12_12t2_04t1(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 4:
//     case 5:
//     case 6:
//     case 9:
//     case 11:
//     case 19:
//         u32(o + 04) ? im_var_164_12_12t2_04t4(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 7:
//         u32(o + 04) ? im_var_164_12_12t2_04t7(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 8:
//         u32(o + 04) ? im_var_164_12_12t2_04t8(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 16:
//         u32(o + 04) ? im_var_164_12_12t2_04t16(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     }
// }
// function im_var_164_12_12t2_04t1(o, x) {
//     x.push({
//         u8_01: u8(o + 01),
//         u8_02: u8(o + 02),
//         f32_08: f32(o + 08),
//         section_12: [],
//         section_16: [],
//         section_20: [],
//         u32_24: u32(o + 24),
//         f32_28: f32(o + 28),
//     });

//     u32(o + 12) ? im_var_164_12_12t2_04t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;
//     u32(o + 16) ? im_var_164_12_12t2_04t1_16(u32(o + 16) + g.m, x[0].section_16) : 0;
//     u32(o + 20) ? im_var_164_12_12t2_04t1_16(u32(o + 20) + g.m, x[0].section_20) : 0;

// }
// function im_var_164_12_12t2_04t1_12(o, x) {
//     x.push({
//         f32_00: f32(o + 00),
//         f32_04: f32(o + 04),
//         f32_08: f32(o + 08),
//     });

// }
// function im_var_164_12_12t2_04t1_16(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//     });

//     switch (u8(o + 04)) {
//     case 1:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
//         break;
//     case 10:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
//         break;
//     case 11:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t11_array, im_world_20_12t11, g.unordered_ref.world_20_12t11);
//         break;
//     }
// }
// function im_var_164_12_12t2_04t4(o, x) {
//     x.push({
//         u8_01: u8(o + 01),
//         u8_03: u8(o + 03),
//         f32_04: f32(o + 04),
//         u32_08: u32(o + 08),
//         section_16: [],
//     });

//     u32(o + 16) ? im_var_164_12_12t2_04t4_16(u32(o + 16) + g.m, x[0].section_16) : 0;

// }
// function im_var_164_12_12t2_04t4_16(o, x) {
//     x.push({
//         section_00: [],
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

//     switch (u8(o + 08)) {
//     case 1 - 1:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
//         break;
//     case 1 - 8:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);
//         break;
//     case 1 - 10:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
//         break;
//     case 1 - 13:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t13_array, im_world_20_12t13, g.unordered_ref.world_20_12t13);
//         break;
//     case 1 - 14:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t14_array, im_world_20_12t14, g.unordered_ref.world_20_12t14);
//         break;
//     case 1 - 15:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t15_array, im_world_20_12t15, g.unordered_ref.world_20_12t15);
//         break;
//     }
// }
// function im_var_164_12_12t2_04t7(o, x) {
//     x.push({
//         u8_03: u8(o + 03),
//         u32_12: u32(o + 12),
//     });

// }
// function im_var_164_12_12t2_04t8(o, x) {
//     x.push({
//         u8_03: u8(o + 03),
//         section_16: [],
//     });

//     u32(o + 16) ? im_var_164_12_12t2_04t8_16(u32(o + 16) + g.m, x[0].section_16) : 0;

// }
// function im_var_164_12_12t2_04t8_16(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_12_12t2_04t16(o, x) {
//     x.push({
//         u8_22: u8(o + 22),
//         u8_23: u8(o + 23),
//         unordered_flag_24: 0,
//     });

//     x[0].unordered_flag_24 = in_ml(u32(o + 24), g.flag_array, im_flag, g.unordered_ref.flag);

// }
// function im_var_164_12_12t5(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_var_164_12_12t5_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// }
// function im_var_164_12_12t5_04(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_08: [],
//     });

//     u32(o + 08) ? im_var_164_12_12t5_04_08(u32(o + 08) + g.m, x[0].section_08) : 0;

// }
// function im_var_164_12_12t5_04_08(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//     });

// }
// function im_var_164_12_12t6(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//     });

//     switch (u8(o + 04)) {
//     case 1:
//         u32(o + 00) ? im_var_164_12_12t6_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;
//         break;
//     case 2:
//         u32(o + 00) ? im_var_164_12_12t6_00t2(u32(o + 00) + g.m, x[0].section_00) : 0;
//         break;
//     }
// }
// function im_var_164_12_12t6_00t1(o, x) {
//     x.push({
//         unordered_interface_00: 0,
//         u8_05: u8(o + 05),
//         section_08: [],
//     });

//     x[0].unordered_interface_00 = in_ml(u32(o + 00), g.interface_array, im_interface, g.unordered_ref.interface);
//     u32(o + 08) ? im_var_164_12_12t6_00t1_08(u32(o + 08) + g.m, x[0].section_08) : 0;

// }
// function im_var_164_12_12t6_00t1_08(o, x) {
//     x.push({});

// }
// function im_var_164_12_12t6_00t2(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         unordered_interface_04: 0,
//     });

//     x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);

// }
// function im_var_164_12_12t7(o, x) {
//     x.push({
//         section_00: [],
//         unordered_object_04: 0,
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//     });

//     u32(o + 00) ? im_var_164_12_12t7_00(u32(o + 00) + g.m, x[0].section_00) : 0;
//     x[0].unordered_object_04 = in_ml(u32(o + 04), g.object_array, im_object, g.unordered_ref.object);

// }
// function im_var_164_12_12t7_00(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_12_12t8(o, x) {
//     x.push({
//         section_00: [],
//         section_04: [],
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//     });

//     switch (u8(o + 08)) {
//     case 1:
//         x[0].section_00 = in_ml(u32(o + 00), g.flag_array, im_flag, g.unordered_ref.flag);
//         break;
//     case 2:
//         u32(o + 00) ? im_var_164_12_12t8_00t2(u32(o + 00) + g.m, x[0].section_00) : 0;
//         break;
//     }

//     switch (u8(o + 10)) {
//     case 0:
//         x[0].section_04 = f32(o + 04);
//         break;
//     case 2:
//         x[0].section_04 = in_ml(u32(o + 04), g.flag_array, im_flag, g.unordered_ref.flag);
//         break;
//     case 3:
//         u32(o + 04) ? im_var_164_12_12t8_04t3(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     }

// }
// function im_var_164_12_12t8_00t2(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//         u32_08: u32(o + 08),
//         section_12: [],
//     });

//     u32(o + 04) ? im_var_164_12_12t8_00t2_04(u32(o + 04) + g.m, x[0].section_04) : 0;
//     u32(o + 12) ? im_var_164_12_12t8_00t2_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_12_12t8_00t2_04(o, x) {
//     x.push({
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_12_12t8_00t2_12(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//         f32_12: f32(o + 12),
//     });

// }
// function im_var_164_12_12t8_04t3(o, x) {
//     x.push({
//         u32_08: u32(o + 08),
//         section_12: [],
//     });

//     u32(o + 12) ? im_var_164_12_12t8_04t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_12_12t8_04t3_12(o, x) {
//     x.push({});

// }
// function im_var_164_12_12t14(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//         unordered_world_20_12t4_08: 0,
//     });

//     u32(o + 00) ? im_var_164_12_12t14_00(u32(o + 00) + g.m, x[0].section_00) : 0;
//     x[0].unordered_world_20_12t4_08 = in_ml(u32(o + 08), g.world_20_12t4_array, im_world_20_12t4, g.unordered_ref.world_20_12t4);

// }
// function im_var_164_12_12t14_00(o, x) {
//     x.push({
//         section_00: [],
//         u8_08: u8(o + 08),
//     });

//     switch (u8(o + 08)) {
//     case 1:
//         x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t0_array, im_world_20_12t0, g.unordered_ref.world_20_12t0);
//         break;
//     }
// }
// function im_var_164_12_12t15(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         //check this
//     });

// }
// function im_var_164_12_12t16(o, x) {
//     x.push({
//         unordered_var_00: 0,
//         u32_04: u32(o + 04),
//     });

//     x[0].unordered_var_00 = in_ml(u32(o + 00), g.var_array, im_var, g.unordered_ref.var);

// }
// function im_var_164_12_12t24(o, x) {
//     x.push({
//         unordered_unknown_00_00: 0,
//         section_04: [],
//     });

//     x[0].unordered_unknown_00_00 = in_ml(u32(o + 00), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
//     u32(o + 04) ? im_var_164_12_12t24_04(u32(o + 04) + g.m, x[0].section_04) : 0;

// }
// function im_var_164_12_12t24_04(o, x) {
//     x.push({
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         section_04: [],
//     });

//     u32(o + 04) ? im_var_164_20_04(u32(o + 04) + g.m, x[i].section_04, u32(o + 00)) : 0;

// }
// function im_var_164_20_04(o, x, t) {
//     x.push({
//         section_08: [im_string(u32(o + 08), 0, false)],
//         section_12: [],
//         u32_16: u32(o + 16),
//         //amount?
//         section_20: [],
//         u32_24: u32(o + 24),
//         //amount?
//         section_28: [],
//     });

//     switch (t) {
//     case 1604:
//         u32(o + 12) ? im_var_164_20_04_12t1604(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1608:
//         u32(o + 12) ? im_var_164_20_04_12t1608(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1618:
//         u32(o + 12) ? im_var_164_20_04_12t1618(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1620:
//         u32(o + 12) ? im_var_164_20_04_12t1620(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     case 1636:
//         u32(o + 12) ? im_var_164_20_04_12t1636(u32(o + 12) + g.m, x[0].section_12) : 0;
//         break;
//     }
//     for (let i = 0; i < u32(o + 16); i++) {
//         im_var_164_20_04_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
//     }

//     for (let i = 0; i < u32(o + 24); i++) {
//         im_var_164_12(u32(o + 28) + (i * 24) + g.m, i, x[0].section_28);
//     }

// }
// function im_var_164_20_04_12t1604(o, x) {
//     x.push({});

// }
// function im_var_164_20_04_12t1608(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         unordered_interface_04: 0,
//         unordered_world_20_12t1_08: 0,
//     });

//     x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);
//     x[0].unordered_world_20_12t1_08 = in_ml(u32(o + 08), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);

// }
// function im_var_164_20_04_12t1618(o, x) {
//     x.push({
//         section_00: [],
//         f32_04: f32(o + 04),
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//     });

//     switch (u8(o + 08)) {
//     case 0:
//         x[0].section_00 = in_ml(u32(o + 00), g.flag_array, im_flag, g.unordered_ref.flag);
//         break;
//     case 1:
//         u32(o + 00) ? im_var_164_20_04_12t1618_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;
//         break;
//     }
// }
// function im_var_164_20_04_12t1618_00t1(o, x) {
//     x.push({
//         u32_08: u32(o + 08),
//         section_12: [],
//     });

//     u32(o + 12) ? im_var_164_20_04_12t1618_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_20_04_12t1618_00t1_12(o, x) {
//     x.push({
//         f32_04: f32(o + 04),
//         f32_12: f32(o + 12),
//     });

// }
// function im_var_164_20_04_12t1620(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//         u8_05: u8(o + 05),
//         unordered_world_20_12t8_08: 0,
//     });

//     u32(o + 00) ? im_var_164_20_04_12t1620_00(u32(o + 00) + g.m, x[0].section_00) : 0;
//     x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 08), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

// }
// function im_var_164_20_04_12t1620_00(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_20_04_12t1636(o, x) {
//     x.push({
//         section_00: [],
//         u8_04: u8(o + 04),
//         u8_05: u8(o + 05),
//         u8_06: u8(o + 06),
//     });

//     u32(o + 00) ? im_var_164_20_04_12t1636_00(u32(o + 00) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_20_04_12t1636_00(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_20_04_20(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 00),
//         section_04: [im_string(u32(o + 04), 0, false)],
//         section_08: [],
//     });

//     switch (u32(o + 00)) {
//     case 5:
//         u32(o + 08) ? im_var_164_20_04_20_08t5(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     case 6:
//         u32(o + 08) ? im_var_164_20_04_20_08t6(u32(o + 08) + g.m, x[i].section_08) : 0;
//         break;
//     }
// }
// function im_var_164_20_04_20_08t5(o, x) {
//     x.push({
//         section_00: [],
//         f32_04: f32(o + 04),
//         u8_08: u8(o + 08),
//         u8_09: u8(o + 09),
//         u8_10: u8(o + 10),
//     });

//     u32(o + 00) ? im_var_164_20_04_20_08t5_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;

// }
// function im_var_164_20_04_20_08t5_00t1(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//         u32_08: u32(o + 08),
//         section_12: [],
//     });

//     u32(o + 04) ? im_var_164_20_04_20_08t5_00t1_04(u32(o + 04) + g.m, x[0].section_04) : 0;
//     u32(o + 12) ? im_var_164_20_04_20_08t5_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

// }
// function im_var_164_20_04_20_08t5_00t1_04(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_164_20_04_20_08t5_00t1_12(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         f32_04: f32(o + 04),
//         f32_12: f32(o + 12),
//     });

// }
// function im_var_164_20_04_20_08t6(o, x) {
//     x.push({
//         section_00: [],
//         u8_05: u8(o + 05),
//         unordered_world_20_12t8_08: 0,
//     });

//     u32(o + 00) ? im_var_164_20_04_20_08t6_00(u32(o + 00) + g.m, x[0].section_00) : 0;
//     x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 08), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

// }
// function im_var_164_20_04_20_08t6_00(o, x) {
//     x.push({
//         u8_08: u8(o + 08),
//     });

// }
// function im_var_168(o, x) {
//     x.push({
//         u32_04: u32(o + 04),
//         //amount?
//         section_08: [],
//     });

//     for (let i = 0; i < u32(o + 04); i++) {
//         im_var_164_12(u32(o + 08) + (i * 24) + g.m, i, x[0].section_08);
//     }

// }

function im_var(o, i, x) {
    x.push({
        id: gen_id(),
        u8_11: u8(o + 11),
        section_140: [im_string(u32(o + 140), 0, false)],
        u32_144: u32(o + 144),
        section_148: [],
        u32_152: u32(o + 152),
        //check this
        section_164: [],
        section_168: [],
    });

    u32(o + 148) ? im_var_148(u32(o + 148) + g.m, x[i].section_148) : 0;
    u32(o + 164) ? im_var_164(u32(o + 164) + g.m, x[i].section_164) : 0;
    u32(o + 168) ? im_var_168(u32(o + 168) + g.m, x[i].section_168) : 0;
    return x[i].id
    // 176 bytes;

}
function im_var_148(o, x) {
    x.push({
        unordered_var_00: 0,
    });

    x[0].unordered_var_00 = in_ml(u32(o + 00), g.var_array, im_var, g.unordered_ref.var);

    // 16 bytes;

}
function im_var_164(o, x) {
    x.push({
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    for (let i = 0; i < u32(o + 08); i++) {
        im_var_164_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_var_164_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_var_164_12(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 00), 0, false)],
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        //check this
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    switch (u32(o + 04)) {
    case 1:
        u32(o + 12) ? im_var_164_12_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 2:
        u32(o + 12) ? im_var_164_12_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_var_164_12_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 6:
        u32(o + 12) ? im_var_164_12_12t6(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_var_164_12_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_var_164_12_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 14:
        u32(o + 12) ? im_var_164_12_12t14(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_var_164_12_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 16:
        u32(o + 12) ? im_var_164_12_12t16(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 24:
        u32(o + 12) ? im_var_164_12_12t24(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_var_164_12_12t1(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
    });

    u32(o + 00) ? im_var_164_12_12t1_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_var_164_12_12t1_00(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
        u8_06: u8(o + 06),
    });

    u32(o + 00) ? im_var_164_12_12t1_00_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 32 bytes;

}
function im_var_164_12_12t1_00_00(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_12_12t2(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    switch (u32(o + 00)) {
    case 1:
        u32(o + 04) ? im_var_164_12_12t2_04t1(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        u32(o + 04) ? im_var_164_12_12t2_04t4(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    case 7:
        u32(o + 04) ? im_var_164_12_12t2_04t7(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    case 8:
        u32(o + 04) ? im_var_164_12_12t2_04t8(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    case 16:
        u32(o + 04) ? im_var_164_12_12t2_04t16(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t2_04t1(o, x) {
    x.push({
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        f32_08: f32(o + 08),
        section_12: [],
        section_16: [],
        section_20: [],
        u32_24: u32(o + 24),
        f32_28: f32(o + 28),
    });

    u32(o + 12) ? im_var_164_12_12t2_04t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 16) ? im_var_164_12_12t2_04t1_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    u32(o + 20) ? im_var_164_12_12t2_04t1_16(u32(o + 20) + g.m, x[0].section_20) : 0;

    // 32 bytes;

}
function im_var_164_12_12t2_04t1_12(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_var_164_12_12t2_04t1_16(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
    });

    switch (u8(o + 04)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
        break;
    case 10:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
        break;
    case 11:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t11_array, im_world_20_12t11, g.unordered_ref.world_20_12t11);
        break;
    }
    // 32 bytes;

}
function im_var_164_12_12t2_04t4(o, x) {
    x.push({
        u8_01: u8(o + 01),
        u8_03: u8(o + 03),
        f32_04: f32(o + 04),
        u32_08: u32(o + 08),
        section_16: [],
    });

    u32(o + 16) ? im_var_164_12_12t2_04t4_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_var_164_12_12t2_04t4_16(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    switch (u8(o + 08)) {
    case 1 - 1:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);
        break;
    case 1 - 8:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);
        break;
    case 1 - 10:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t10_array, im_world_20_12t10, g.unordered_ref.world_20_12t10);
        break;
    case 1 - 13:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t13_array, im_world_20_12t13, g.unordered_ref.world_20_12t13);
        break;
    case 1 - 14:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t14_array, im_world_20_12t14, g.unordered_ref.world_20_12t14);
        break;
    case 1 - 15:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t15_array, im_world_20_12t15, g.unordered_ref.world_20_12t15);
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t2_04t7(o, x) {
    x.push({
        u8_03: u8(o + 03),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_12_12t2_04t8(o, x) {
    x.push({
        u8_03: u8(o + 03),
        section_16: [],
    });

    u32(o + 16) ? im_var_164_12_12t2_04t8_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_var_164_12_12t2_04t8_16(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_12_12t2_04t16(o, x) {
    x.push({
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        unordered_flag_24: 0,
    });

    x[0].unordered_flag_24 = in_ml(u32(o + 24), g.flag_array, im_flag, g.unordered_ref.flag);

    // 32 bytes;

}
function im_var_164_12_12t5(o, x) {
    x.push({
        u8_00: u8(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_var_164_12_12t5_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_var_164_12_12t5_04(o, x) {
    x.push({
        u8_00: u8(o + 00),
        section_08: [],
    });

    u32(o + 08) ? im_var_164_12_12t5_04_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_var_164_12_12t5_04_08(o, x) {
    x.push({
        u8_00: u8(o + 00),
    });

    // 16 bytes;

}
function im_var_164_12_12t6(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
    });

    switch (u8(o + 04)) {
    case 1:
        u32(o + 00) ? im_var_164_12_12t6_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;
        break;
    case 2:
        u32(o + 00) ? im_var_164_12_12t6_00t2(u32(o + 00) + g.m, x[0].section_00) : 0;
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t6_00t1(o, x) {
    x.push({
        unordered_interface_00: 0,
        u8_05: u8(o + 05),
        section_08: [],
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 00), g.interface_array, im_interface, g.unordered_ref.interface);
    u32(o + 08) ? im_var_164_12_12t6_00t1_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_var_164_12_12t6_00t1_08(o, x) {
    x.push({});

    // 16 bytes;

}
function im_var_164_12_12t6_00t2(o, x) {
    x.push({
        u8_00: u8(o + 00),
        unordered_interface_04: 0,
    });

    x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);

    // 16 bytes;

}
function im_var_164_12_12t7(o, x) {
    x.push({
        section_00: [],
        unordered_object_04: 0,
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
    });

    u32(o + 00) ? im_var_164_12_12t7_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    x[0].unordered_object_04 = in_ml(u32(o + 04), g.object_array, im_object, g.unordered_ref.object);

    // 16 bytes;

}
function im_var_164_12_12t7_00(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_12_12t8(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 08)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 00), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 2:
        u32(o + 00) ? im_var_164_12_12t8_00t2(u32(o + 00) + g.m, x[0].section_00) : 0;
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 2:
        x[0].section_04 = in_ml(u32(o + 04), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 3:
        u32(o + 04) ? im_var_164_12_12t8_04t3(u32(o + 04) + g.m, x[0].section_04) : 0;
        break;
    }

    // u32(o + 04) ? im_flag(u32(o + 04) + g.m, x[0].section_04) : 0;
    // offset? 

    // 16 bytes;

}
function im_var_164_12_12t8_00t2(o, x) {
    x.push({
        u8_00: u8(o + 00),
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 04) ? im_var_164_12_12t8_00t2_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_var_164_12_12t8_00t2_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_12_12t8_00t2_04(o, x) {
    x.push({
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_12_12t8_00t2_12(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_12_12t8_04t3(o, x) {
    x.push({
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 12) ? im_var_164_12_12t8_04t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_12_12t8_04t3_12(o, x) {
    x.push({});

    // 32 bytes;

}
function im_var_164_12_12t14(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
        unordered_world_20_12t4_08: 0,
    });

    u32(o + 00) ? im_var_164_12_12t14_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    x[0].unordered_world_20_12t4_08 = in_ml(u32(o + 08), g.world_20_12t4_array, im_world_20_12t4, g.unordered_ref.world_20_12t4);

    // 16 bytes;

}
function im_var_164_12_12t14_00(o, x) {
    x.push({
        section_00: [],
        u8_08: u8(o + 08),
    });

    switch (u8(o + 08)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 00), g.world_20_12t0_array, im_world_20_12t0, g.unordered_ref.world_20_12t0);
        break;
    case 5:
        x[0].section_00 = u32(o + 00)
        break;
    }
    // 16 bytes;

}
function im_var_164_12_12t15(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //check this
    });

    // 16 bytes;

}
function im_var_164_12_12t16(o, x) {
    x.push({
        unordered_var_00: 0,
        u32_04: u32(o + 04),
    });

    x[0].unordered_var_00 = in_ml(u32(o + 00), g.var_array, im_var, g.unordered_ref.var);

    // 16 bytes;

}
function im_var_164_12_12t24(o, x) {
    x.push({
        unordered_unknown_00_00: 0,
        section_04: [],
    });

    x[0].unordered_unknown_00_00 = in_ml(u32(o + 00), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    u32(o + 04) ? im_var_164_12_12t24_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_var_164_12_12t24_04(o, x) {
    x.push({
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_var_164_20_04(u32(o + 04) + g.m, x[i].section_04, u32(o + 00)) : 0;

}
function im_var_164_20_04(o, x, t) {
    x.push({
        section_08: [im_string(u32(o + 08), 0, false)],
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    switch (t) {
    case 1604:
        u32(o + 12) ? im_var_164_20_04_12t1604(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1608:
        u32(o + 12) ? im_var_164_20_04_12t1608(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1618:
        u32(o + 12) ? im_var_164_20_04_12t1618(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1620:
        u32(o + 12) ? im_var_164_20_04_12t1620(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 1636:
        u32(o + 12) ? im_var_164_20_04_12t1636(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        im_var_164_20_04_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_var_164_12(u32(o + 28) + (i * 24) + g.m, i, x[0].section_28);
    }

    // 32 bytes;

}
function im_var_164_20_04_12t1604(o, x) {
    x.push({});

    // 16 bytes;

}
function im_var_164_20_04_12t1608(o, x) {
    x.push({
        u8_00: u8(o + 00),
        unordered_interface_04: 0,
        unordered_world_20_12t1_08: 0,
    });

    x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_world_20_12t1_08 = in_ml(u32(o + 08), g.world_20_12t1_array, im_world_20_12t1, g.unordered_ref.world_20_12t1);

    // 16 bytes;

}
function im_var_164_20_04_12t1618(o, x) {
    x.push({
        section_00: [],
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 08)) {
    case 0:
        x[0].section_00 = in_ml(u32(o + 00), g.flag_array, im_flag, g.unordered_ref.flag);
        break;
    case 1:
        u32(o + 00) ? im_var_164_20_04_12t1618_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;
        break;
    }
    // 16 bytes;

}
function im_var_164_20_04_12t1618_00t1(o, x) {
    x.push({
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 12) ? im_var_164_20_04_12t1618_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_20_04_12t1618_00t1_12(o, x) {
    x.push({
        f32_04: f32(o + 04),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_20_04_12t1620(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
        u8_05: u8(o + 05),
        unordered_world_20_12t8_08: 0,
    });

    u32(o + 00) ? im_var_164_20_04_12t1620_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 08), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

    // 16 bytes;

}
function im_var_164_20_04_12t1620_00(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_20_04_12t1636(o, x) {
    x.push({
        section_00: [],
        u8_04: u8(o + 04),
        u8_05: u8(o + 05),
        u8_06: u8(o + 06),
    });

    u32(o + 00) ? im_var_164_20_04_12t1636_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_var_164_20_04_12t1636_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_20_04_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        section_04: [im_string(u32(o + 04), 0, false)],
        section_08: [],
    });

    switch (u32(o + 00)) {
    case 5:
        u32(o + 08) ? im_var_164_20_04_20_08t5(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    case 6:
        u32(o + 08) ? im_var_164_20_04_20_08t6(u32(o + 08) + g.m, x[i].section_08) : 0;
        break;
    }
}
function im_var_164_20_04_20_08t5(o, x) {
    x.push({
        section_00: [],
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
    });

    u32(o + 00) ? im_var_164_20_04_20_08t5_00t1(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_var_164_20_04_20_08t5_00t1(o, x) {
    x.push({
        u8_00: u8(o + 00),
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 04) ? im_var_164_20_04_20_08t5_00t1_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_var_164_20_04_20_08t5_00t1_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_var_164_20_04_20_08t5_00t1_04(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_164_20_04_20_08t5_00t1_12(o, x) {
    x.push({
        u8_00: u8(o + 00),
        f32_04: f32(o + 04),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_var_164_20_04_20_08t6(o, x) {
    x.push({
        section_00: [],
        u8_05: u8(o + 05),
        unordered_world_20_12t8_08: 0,
    });

    u32(o + 00) ? im_var_164_20_04_20_08t6_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    x[0].unordered_world_20_12t8_08 = in_ml(u32(o + 08), g.world_20_12t8_array, im_world_20_12t8, g.unordered_ref.world_20_12t8);

    // 16 bytes;

}
function im_var_164_20_04_20_08t6_00(o, x) {
    x.push({
        u8_08: u8(o + 08),
    });

    // 16 bytes;

}
function im_var_168(o, x) {
    x.push({
        u32_04: u32(o + 04),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 04); i++) {
        im_var_164_12(u32(o + 08) + (i * 24) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
