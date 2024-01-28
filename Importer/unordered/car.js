function im_car(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u8_04: u8(o + 04),
    });

    u32(o + 00) ? im_car_00(u32(o + 00) + g.m, x[i].section_00) : 0;
    return x[i].id
    // 16 bytes;

}
function im_car_00(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        u32_76: u32(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
        u32_104: u32(o + 104),
        u32_108: u32(o + 108),
        u32_112: u32(o + 112),
        u32_116: u32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        u32_128: u32(o + 128),
        u32_132: u32(o + 132),
        u32_136: u32(o + 136),
        u32_140: u32(o + 140),
        u32_144: u32(o + 144),
        u32_148: u32(o + 148),
        u32_152: u32(o + 152),
        u32_156: u32(o + 156),
        u32_160: u32(o + 160),
        u32_168: u32(o + 168),
        u32_172: u32(o + 172),
        ordered_model_animation_2_176: 0,
        section_180: [],
        section_184: [],
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        u32_204: u32(o + 204),
        //amount?
        section_208: [],
        u32_212: u32(o + 212),
        //amount?
        section_216: [],
        u32_220: u32(o + 220),
        //amount?
        section_224: [],
        u32_228: u32(o + 228),
        //amount?
        section_232: [],
    });

    x[0].ordered_model_animation_2_176 = in_ml(u32(o + 176), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    u32(o + 180) ? im_car_00_180(u32(o + 180) + g.m, x[0].section_180) : 0;
    u32(o + 184) ? im_car_00_184(u32(o + 184) + g.m, x[0].section_184) : 0;
    u32(o + 188) ? im_car_00_188(u32(o + 188) + g.m, x[0].section_188) : 0;
    u32(o + 192) ? im_car_00_192(u32(o + 192) + g.m, x[0].section_192) : 0;
    u32(o + 196) ? im_car_00_196(u32(o + 196) + g.m, x[0].section_196) : 0;
    u32(o + 200) ? im_car_00_200(u32(o + 200) + g.m, x[0].section_200) : 0;

    for (let i = 0; i < u32(o + 204); i++) {
        im_car_00_208(u32(o + 208) + (i * 8) + g.m, i, x[0].section_208);
    }

    for (let i = 0; i < u32(o + 212); i++) {
        im_car_00_216(u32(o + 216) + (i * 12) + g.m, i, x[0].section_216);
    }

    for (let i = 0; i < u32(o + 220); i++) {
        im_car_00_216(u32(o + 224) + (i * 12) + g.m, i, x[0].section_224);
    }

    for (let i = 0; i < u32(o + 228); i++) {
        im_unknown(u32(o + 232) + (i * 04) + g.m, i, x[0].section_232);
    }

    // 240 bytes;

}
function im_car_00_180(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        unordered_sound_section_08: 0,
        unordered_sound_section_12: 0,
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
    });

    u32(o + 00) ? im_car_00_180_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    u32(o + 04) ? im_car_00_180_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    x[0].unordered_sound_section_08 = in_ml(u32(o + 08), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    x[0].unordered_sound_section_12 = in_ml(u32(o + 12), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    for (let i = 0; i < u32(o + 16); i++) {
        im_car_00_180_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_car_00_180_20(u32(o + 28) + (i * 8) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_car_00_180_20(u32(o + 36) + (i * 8) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_car_00_180_20(u32(o + 44) + (i * 8) + g.m, i, x[0].section_44);
    }
    // 48 bytes;

}
function im_car_00_180_00(o, x) {
    x.push({
        f32_00: f32(o + 00),
        texture_04: im_patch(g.texture_patch_ref, o + 04),
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        unordered_unknown_00_20: 0,
        u32_24: u32(o + 24),
        unordered_unknown_00_28: 0,
        unordered_unknown_00_32: 0,
        unordered_unknown_00_36: 0,
    });

    u32(o + 08) ? im_car_00_180_00_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    for (let i = 0; i < u32(o + 12); i++) {
        im_car_00_180_00_16(u32(o + 16) + (i * 20) + g.m, i, x[0].section_16);
    }
    x[0].unordered_unknown_00_20 = in_ml(u32(o + 20), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_28 = in_ml(u32(o + 28), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_32 = in_ml(u32(o + 32), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    x[0].unordered_unknown_00_36 = in_ml(u32(o + 36), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    // 48 bytes;

}
function im_car_00_180_00_08(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
    });

    // 16 bytes;

}
function im_car_00_180_00_16(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        section_08: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 08) ? im_car_00_180_00_16_08(u32(o + 08) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_car_00_180_00_16_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 16) ? im_car_00_180_00_16_12(u32(o + 16) + g.m, x[i].section_16) : 0;

}
function im_car_00_180_00_16_08(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_car_00_180_00_16_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_mysterious(u32(o + 04) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_car_00_180_04(o, x) {
    x.push({
        f32_00: f32(o + 00),
        //check this
        f32_04: f32(o + 04),
        //check this
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        //check this
        f32_16: f32(o + 16),
        //check this
        f32_20: f32(o + 20),
        //check this
        u32_24: u32(o + 24),
        //check this
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        section_64: [],
        unordered_unknown_00_68: 0,
        f32_72: f32(o + 72),
        //amount?
        f32_76: f32(o + 76),
        section_80: [],
        section_84: [],
        section_88: [],
        section_92: [],
    });

    u32(o + 56) ? im_car_00_180_04_56(u32(o + 56) + g.m, x[0].section_56) : 0;
    u32(o + 64) ? im_car_00_180_04_56(u32(o + 64) + g.m, x[0].section_64) : 0;
    x[0].unordered_unknown_00_68 = in_ml(u32(o + 68), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    u32(o + 80) ? im_car_00_180_04_80(u32(o + 80) + g.m, x[0].section_80) : 0;
    u32(o + 84) ? im_car_00_180_04_84(u32(o + 84) + g.m, x[0].section_84) : 0;
    u32(o + 88) ? im_car_00_180_04_88(u32(o + 88) + g.m, x[0].section_88) : 0;
    u32(o + 92) ? im_car_00_180_04_92(u32(o + 92) + g.m, x[0].section_92) : 0;

    // 96 bytes;

}
function im_car_00_180_04_56(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_car_00_180_04_80(o, x) {
    x.push({
        u32_00: u32(o + 00),
        f32_08: f32(o + 08),
        unordered_unknown_00_16: 0,
    });

    x[0].unordered_unknown_00_16 = in_ml(u32(o + 16), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);

    // 32 bytes;

}
function im_car_00_180_04_84(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_car_00_180_04_88(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_car_00_180_04_92(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_car_00_180_20(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        section_04: [],
    });

    switch (u8(o + 00)) {
    case 1:
        u32(o + 04) ? im_car_00_180_20_04t1(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 3:
        u32(o + 04) ? im_car_00_180_20_04t3(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    }
}
function im_car_00_180_20_04t1(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        f32_36: f32(o + 36),
    });

    // 64 bytes;

}
function im_car_00_180_20_04t3(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_car_00_184(o, x) {
    x.push({
        u8_00: u8(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_car_00_184_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_car_00_184_04(o, x) {
    x.push({
        section_00: [],
        section_04: [],
        section_08: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
    });

    u32(o + 00) ? im_car_00_184_04_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    u32(o + 04) ? im_car_00_184_04_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 08) ? im_car_00_184_04_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 64 bytes;

}
function im_car_00_184_04_00(o, x) {
    x.push({
        section_16: [],
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        f32_40: f32(o + 40),
        unordered_gate_44: 0,
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    u32(o + 16) ? im_car_00_184_04_00_16(u32(o + 16) + g.m, x[0].section_16) : 0;
    x[0].unordered_gate_44 = in_ml(u32(o + 44), g.gate_array, im_gate, g.unordered_ref.gate);

    // 80 bytes;

}
function im_car_00_184_04_00_16(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_car_00_184_04_04(o, x) {
    x.push({
        f32_00: f32(o + 00),
        //check this
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

    // 16 bytes;

}
function im_car_00_184_04_08(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
    });

    // 96 bytes;

}
function im_car_00_188(o, x) {
    x.push({
        ordered_model_animation_2_00: 0,
        unordered_model_link_04: 0,
        ordered_model_animation_1_08: 0,
        ordered_model_animation_1_12: 0,
        ordered_model_animation_1_16: 0,
        u8_20: u8(o + 20),
        ordered_model_animation_1_24: 0,
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
    });

    x[0].ordered_model_animation_2_00 = in_ml(u32(o + 00), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    x[0].unordered_model_link_04 = in_ml(u32(o + 04), g.model_link_array, im_model_link, g.unordered_ref.model_link);
    x[0].ordered_model_animation_1_08 = in_ml(u32(o + 08), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[0].ordered_model_animation_1_12 = in_ml(u32(o + 12), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[0].ordered_model_animation_1_16 = in_ml(u32(o + 16), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);
    x[0].ordered_model_animation_1_24 = in_ml(u32(o + 24), g.model_animation_1_array, im_model_animation_1, g.ordered_ref.model_animation_1);

    for (let i = 0; i < u32(o + 48); i++) {
        im_car_00_188_52(u32(o + 52) + (i * 8) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 56); i++) {
        im_car_00_188_60(u32(o + 60) + (i * 20) + g.m, i, x[0].section_60);
    }

    for (let i = 0; i < u32(o + 64); i++) {
        im_car_00_188_68(u32(o + 68) + (i * 32) + g.m, i, x[0].section_68);
    }

    for (let i = 0; i < u32(o + 72); i++) {
        im_car_00_188_68(u32(o + 76) + (i * 32) + g.m, i, x[0].section_76);
    }

    for (let i = 0; i < u32(o + 80); i++) {
        im_car_00_188_68(u32(o + 84) + (i * 32) + g.m, i, x[0].section_84);
    }

    // 128 bytes;

}
function im_car_00_188_52(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_car_00_188_52_04(u32(o + 04) + g.m, x[i].section_04) : 0;

}
function im_car_00_188_52_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u8_08: u8(o + 08),
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_car_00_188_52_04_04(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_car_00_188_52_04_04(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_model_link_00: 0,
    });

    x[i].unordered_model_link_00 = in_ml(u32(o + 00), g.model_link_array, im_model_link, g.unordered_ref.model_link);

}
function im_car_00_188_60(o, i, x) {
    x.push({
        id: gen_id(),
        u16_00: u16(o + 00),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
    });

}
function im_car_00_188_68(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_car_00_192(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u8_28: u8(o + 28),
        unordered_wtf_32: 0,
    });

    u32(o + 16) ? im_car_00_192_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    for (let i = 0; i < u32(o + 20); i++) {
        im_car_00_192_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
    }
    x[0].unordered_wtf_32 = in_ml(u32(o + 32), g.wtf_array, im_wtf, g.unordered_ref.wtf);

    // 48 bytes;

}
function im_car_00_192_16(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_car_00_192_24(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
    });

}
function im_car_00_196(o, x) {
    x.push({
        unordered_sound_section_00: 0,
        f32_04: f32(o + 04),
        //check this
        unordered_sound_section_08: 0,
        f32_12: f32(o + 12),
        //check this
        f32_16: f32(o + 16),
        //check this
        f32_20: f32(o + 20),
        //check this
    });

    x[0].unordered_sound_section_00 = in_ml(u32(o + 00), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);
    x[0].unordered_sound_section_08 = in_ml(u32(o + 08), g.sound_section_array, im_sound_section, g.unordered_ref.sound_section);

    // 32 bytes;

}
function im_car_00_200(o, x) {
    x.push({
        unordered_interface_00: 0,
        unordered_interface_04: 0,
        unordered_interface_08: 0,
        unordered_interface_12: 0,
        unordered_interface_16: 0,
        unordered_interface_20: 0,
    });

    x[0].unordered_interface_00 = in_ml(u32(o + 00), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_04 = in_ml(u32(o + 04), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_08 = in_ml(u32(o + 08), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_12 = in_ml(u32(o + 12), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_16 = in_ml(u32(o + 16), g.interface_array, im_interface, g.unordered_ref.interface);
    x[0].unordered_interface_20 = in_ml(u32(o + 20), g.interface_array, im_interface, g.unordered_ref.interface);

    // 32 bytes;

}
function im_car_00_208(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_car_00_208_04(u32(o + 04) + (ii * 32) + g.m, ii, x[i].section_04);
    }

}
function im_car_00_208_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_car_00_216(o, i, x) {
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
