function im_world_settings(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        f32_08: f32(o + 08),
        section_12: [],
        texture_16: im_patch(g.texture_patch_ref, o + 16),
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        section_36: [],
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        section_48: [],
        section_52: [],
        section_56: [],
        section_60: [],
        section_64: [],
        section_68: [],
        section_72: [],
        section_76: [im_string(u32(o + 76), 0, false)],
        u16_82: u16(o + 82),
        unordered_frame_font_88: 0,
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        f32_112: f32(o + 112),
        f32_116: f32(o + 116),
        f32_120: f32(o + 120),
        u8_126: u8(o + 126),
        texture_136: im_patch(g.texture_patch_ref, o + 136),
        f32_140: f32(o + 140),
        //check this
        f32_144: f32(o + 144),
        //check this
        f32_148: f32(o + 148),
        //check this
        f32_152: f32(o + 152),
        //check this
        f32_156: f32(o + 156),
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        section_192: [],
        section_196: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_world_settings_04(u32(o + 04) + (ii * 64) + g.m, ii, x[i].section_04);
    }
    u32(o + 12) ? im_world_settings_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 36) ? im_world_settings_36(u32(o + 36) + g.m, x[i].section_36) : 0;
    u32(o + 48) ? im_world_settings_48(u32(o + 48) + g.m, x[i].section_48) : 0;
    u32(o + 52) ? im_world_settings_52(u32(o + 52) + g.m, x[i].section_52) : 0;
    u32(o + 56) ? im_world_settings_56(u32(o + 56) + g.m, x[i].section_56) : 0;
    u32(o + 60) ? im_world_settings_60(u32(o + 60) + g.m, x[i].section_60) : 0;
    u32(o + 64) ? im_world_settings_64(u32(o + 64) + g.m, x[i].section_64) : 0;
    u32(o + 68) ? im_world_settings_68(u32(o + 68) + g.m, x[i].section_68) : 0;
    u32(o + 72) ? im_world_settings_72(u32(o + 72) + g.m, x[i].section_72) : 0;
    x[i].unordered_frame_font_88 = in_ml(u32(o + 88), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    u32(o + 192) ? im_world_settings_192(u32(o + 192) + g.m, x[i].section_192) : 0;
    u32(o + 196) ? im_world_settings_196(u32(o + 196) + g.m, x[i].section_196) : 0;
    return x[i].id
    // 208 bytes;

}
function im_world_settings_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
    });

}
function im_world_settings_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
        f32_04: f32(o + 04),
        u32_08: u32(o + 08),
    });

    // 16 bytes;

}
function im_world_settings_36(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
    });

    // 16 bytes;

}
function im_world_settings_48(o, x) {
    x.push({
        section_00: [],
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    u32(o + 00) ? im_world_settings_48_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_world_settings_48_00(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
    });

    // 16 bytes;

}
function im_world_settings_52(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
    });

    // 16 bytes;

}
function im_world_settings_56(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
    });

    // 16 bytes;

}
function im_world_settings_60(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
    });

    // 16 bytes;

}
function im_world_settings_64(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_world_settings_68(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_world_settings_72(o, x) {
    x.push({
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_world_settings_192(o, x) {
    x.push({
        unordered_interface_00: 0,
        unordered_interface_04: 0,
        u32_08: u32(o + 08),
        section_12: [im_string(u32(o + 12), 0, false)],
        section_16: [im_string(u32(o + 16), 0, false)],
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        unordered_car_24: 0,
        unordered_car_28: 0,
        unordered_car_32: 0,
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 00), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_car_24 = in_ml(u32(o + 24), g.car_array, im_car, g.unordered_ref.car);
    x[0].unordered_car_28 = in_ml(u32(o + 28), g.car_array, im_car, g.unordered_ref.car);
    x[0].unordered_car_32 = in_ml(u32(o + 32), g.car_array, im_car, g.unordered_ref.car);

    for (let i = 0; i < u32(o + 36); i++) {
        im_world_settings_192_40(u32(o + 40) + (i * 8) + g.m, i, x[0].section_40);
    }

    // 48 bytes;

}
function im_world_settings_192_40(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 00), 0, false)],
        u32_04: u32(o + 04),
    });

}
function im_world_settings_196(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
        section_08: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 04) ? im_world_settings_196_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 08) ? im_world_settings_196_04(u32(o + 08) + g.m, x[0].section_08) : 0;
    u32(o + 12) ? im_world_settings_196_04(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 16) ? im_world_settings_196_04(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_world_settings_196_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
        f32_16: f32(o + 16),
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_world_settings_196_04_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 08); i++) {
        im_world_settings_196_04_04(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }

    // 32 bytes;

}
function im_world_settings_196_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

}
