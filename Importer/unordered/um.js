"use strict";
function im_um(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        u32_20: u32(o + 20),
        u8_24: u8(o + 24),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 32 bytes;

}
