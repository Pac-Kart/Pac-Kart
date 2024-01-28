function im_sound_section(o, i, x) {
    x.push({
        id: gen_id(),
        sound_00: im_patch(g.sound_patch_ref, o + 00),
        u8_04: u8(o + 04),
        u8_05: u8(o + 05),
        u8_06: u8(o + 06),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        //check this
    });

    u32(o + 08) ? im_sound_section_08(u32(o + 08) + g.m, x[i].section_08) : 0;
    return x[i].id
    // 32 bytes;

}
function im_sound_section_08(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}
