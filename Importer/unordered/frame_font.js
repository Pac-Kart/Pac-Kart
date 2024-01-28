function im_frame_font(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 00),
        //patch?
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        //amount?
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    u32(o + 28) ? im_frame_font_28(u32(o + 28) + g.m, x[i].section_28) : 0;

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_frame_font_36(u32(o + 36) + (ii * 12) + g.m, ii, x[i].section_36);
    }
    return x[i].id
    // 48 bytes;

}
function im_frame_font_28(o, x) {
    x.push({
        f32_00: f32(o + 00),
    });

    // 32 bytes;

}
function im_frame_font_36(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        //check this
        f32_04: f32(o + 04),
        //check this
        f32_08: f32(o + 08),
        //check this
    });

}
