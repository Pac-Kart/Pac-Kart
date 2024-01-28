function im_frame_sparkler(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        u32_08: u32(o + 08),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) ? im_frame_sparkler_16(u32(o + 16) + g.m, x[i].section_16) : 0;
    return x[i].id
    // 32 bytes;

}
function im_frame_sparkler_16(o, x) {
    x.push({
        texture_00: im_patch(g.texture_patch_ref, o + 00),
        u8_04: u8(o + 04),
        u32_08: u32(o + 08),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
    });

    for (let i = 0; i < u32(o + 44); i++) {
        im_frame_sparkler_16_48(u32(o + 48) + (i * 12) + g.m, i, x[0].section_48);
    }

    for (let i = 0; i < u32(o + 52); i++) {
        im_frame_sparkler_16_56(u32(o + 56) + (i * 32) + g.m, i, x[0].section_56);
    }

    // 64 bytes;

}
function im_frame_sparkler_16_48(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        f32_08: f32(o + 08),
    });

}
function im_frame_sparkler_16_56(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_20: f32(o + 20),
    });

}
