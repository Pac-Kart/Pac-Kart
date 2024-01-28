function im_frame_multi_font(o, i, x) {
    x.push({
        id: gen_id(),
        section_04: [],
    });

    u32(o + 04) ? im_frame_multi_font_04(u32(o + 04) + g.m, x[i].section_04) : 0;
    return x[i].id
    // 16 bytes;

}
function im_frame_multi_font_04(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
        unordered_frame_font_12: 0,
        f32_24: f32(o + 24),
        unordered_frame_font_28: 0,
        unordered_frame_font_32: 0,
    });

    x[0].unordered_frame_font_12 = in_ml(u32(o + 12), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    x[0].unordered_frame_font_28 = in_ml(u32(o + 28), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    x[0].unordered_frame_font_32 = in_ml(u32(o + 32), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);

    // 48 bytes;

}
