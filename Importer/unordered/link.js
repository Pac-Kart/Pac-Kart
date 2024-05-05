"use strict";
function im_link(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        section_12: [im_string(u32(o + 12), 0, false)],
        u32_16: u32(o + 16),
        section_20: [im_string(u32(o + 20), 0, false)],
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_36: [im_string(u32(o + 36), 0, false)],
        section_40: [im_string(u32(o + 40), 0, false)],
        texture_44: im_patch(g.texture_patch_ref, o + 44),
        section_48: [],
        texture_52: im_patch(g.texture_patch_ref, o + 52),
        texture_56: im_patch(g.texture_patch_ref, o + 56),
        unordered_frame_font_60: 0,
        u32_64: u32(o + 64),
        section_68: [im_string(u32(o + 68), 0, false)],
        section_72: [im_string(u32(o + 72), 0, false)],
    });

    u32(o + 0) ? im_link_00(u32(o + 0) + g.m, x[i].section_00) : 0;

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_link_intro(u32(o + 8) + (ii * 16) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_link_32(u32(o + 32) + (ii * 8) + g.m, ii, x[i].section_32);
    }
    u32(o + 48) ? im_link_demo(u32(o + 48) + g.m, x[i].section_48) : 0;
    x[i].unordered_frame_font_60 = in_ml(u32(o + 60), g.frame_font_array, im_frame_font, g.unordered_ref.frame_font);
    return x[i].id
}
function im_xdx_link(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        section_12: [im_string(u32(o + 12), 0, false)],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        section_28: [im_string(u32(o + 28), 0, false)],
        section_32: [im_string(u32(o + 32), 0, false)],
        section_40: [],
        texture_44: im_patch(g.texture_patch_ref, o + 44),
        texture_48: im_patch(g.texture_patch_ref, o + 48),
    });

    u32(o + 0) ? im_link_00(u32(o + 0) + g.m, x[0].section_00) : 0;

    for (let i = 0; i < u32(o + 4); i++) {
        im_xdx_link_08(u32(o + 8) + (i * 12) + g.m, i, x[0].section_08);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_xdx_link_24(u32(o + 24) + (i * 4) + g.m, i, x[0].section_24);
    }
    u32(o + 40) ? im_link_demo(u32(o + 40) + g.m, x[0].section_40) : 0;
    // 64 bytes;

}
function im_link_00(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_link_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_link_00_04(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 0) ? im_link_00_04_00(u32(o + 0) + g.m, x[0].section_00) : 0;
    // 16 bytes;

}
function im_link_00_04_00(o, x) {
    x.push({
        section_04: [],
        u8_08: u8(o + 8),
    });

    u32(o + 4) ? im_link_00_04_00_04(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_link_00_04_00_04(o, x) {
    x.push({
        u32_20: u32(o + 20),
    });
    // 32 bytes;

}
function im_xdx_link_08(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        section_08: [],
    });

    u32(o + 8) ? im_link_offset_index(u32(o + 8) + g.m, x[i].section_08) : 0;

}
function im_link_intro(o, i, x) {
    let str = [null]
    if (u8(o + 0) ===0) {
        str = [im_string(u32(o + 4), 0, false)]
    }
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: str,
        section_08: [],
        section_12: [],
    });

    u32(o + 8) ? im_link_intro_08(u32(o + 8) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_link_offset_index(u32(o + 12) + g.m, x[i].section_12) : 0;

}
function im_link_intro_08(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });
    // 16 bytes;

}
function im_link_offset_index(o, x) {
    x.push({
        section_00: [im_string(u32(o + 0), 0, false)],
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_xdx_link_24(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    u32(o + 0) ? im_xdx_link_24_00(u32(o + 0) + g.m, x[i].section_00) : 0;

}
function im_xdx_link_24_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_link_32_00_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_link_32(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [],
    });

    u32(o + 0) ? im_link_32_00(u32(o + 0) + g.m, x[i].section_00) : 0;

}
function im_link_32_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_link_32_00_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_link_32_00_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        section_08: [],
        section_12: [im_string(u32(o + 12), 0, false)],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    u32(o + 4) ? im_link_32_00_04_04(u32(o + 4) + g.m, x[i].section_04) : 0;
    u32(o + 8) ? im_link_offset_index(u32(o + 8) + g.m, x[i].section_08) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_link_32_00_04_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_link_32_00_04_20(u32(o + 28) + (ii * 12) + g.m, ii, x[i].section_28);
    }

}
function im_link_32_00_04_04(o, x) {
    x.push({
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_link_offset_index(u32(o + 4) + g.m, x[0].section_04) : 0;
    // 16 bytes;

}
function im_link_32_00_04_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u16_08: u16(o + 8),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_link_32_00_04_20_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }

}
function im_link_32_00_04_20_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) ? im_link_offset_index(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_link_demo(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 8) ? im_link_32_00(u32(o + 8) + g.m, x[0].section_08) : 0;
    // 16 bytes;

}
