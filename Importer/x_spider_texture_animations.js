function im_texture_animation_section(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    u32(o + 00) ? im_texture_anim_1(u32(o + 00) + g.m, x[i].section_00) : 0;

}

function im_texture_anim_1(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
        u32_08: u32(o + 08),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 04) ? im_texture_anim_1_1(u32(o + 04) + g.m, x[0].section_04) : 0;

    for (let i = 0; i < u32(o + 08); i++) {
        im_texture_anim_1_2(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_texture_anim_1_3(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 48 bytes;

}
function im_texture_anim_1_1(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u8_11: u8(o + 11),
        u32_20: u32(o + 20),
        //amount?
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_texture_anim_1_1_1(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04);
    }

    // 32 bytes;

}
function im_texture_anim_1_1_1(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 00),
    });

}
function im_texture_anim_1_2(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        u8_04: u8(o + 04),
        u8_05: u8(o + 05),
        u8_06: u8(o + 06),
        u8_07: u8(o + 07),
        f32_08: f32(o + 08),
        //amount?
    });

}
function im_texture_anim_1_3(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        f32_12: f32(o + 12),
        //amount?
    });

}
