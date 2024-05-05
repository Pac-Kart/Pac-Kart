"use strict";
function im_unknown_00_04_04t5_28_04_00(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) ? im_unknown_00_04_04t5_28_04_00_04t1(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 4) ? im_unknown_00_04_04t5_28_04_00_04t2(u32(o + 4) + g.m, x[i].section_04) : 0;
        break;
    }
    return x[i].id
    // 16 bytes;

}
function im_unknown_00_04_04t5_28_04_00_04t1(o, x) {
    x.push({
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_unknown_00_04_04t5_28_04_00_04t2(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
    });

    // 16 bytes;

}
