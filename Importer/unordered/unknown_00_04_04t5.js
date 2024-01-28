function im_unknown_00_04_04t5(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        section_36: [],
        u8_40: u8(o + 40),
    });

    u32(o + 04) ? im_unknown_00_04_04t5_04(u32(o + 04) + g.m, x[i].section_04) : 0;
    // offset? 
    u32(o + 12) ? im_unknown_00_04_04t5_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 20) ? im_unknown_00_04_04t5_20(u32(o + 20) + g.m, x[i].section_20) : 0;
    u32(o + 28) ? im_unknown_00_04_04t5_28(u32(o + 28) + g.m, x[i].section_28) : 0;
    u32(o + 36) ? im_unknown_00_04_04t5_36(u32(o + 36) + g.m, x[i].section_36) : 0;
    return x[i].id
    // 48 bytes;

}
function im_unknown_00_04_04t5_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        //check this
        u8_09: u8(o + 09),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    switch (u8(o + 08)) {
    case 103:
        u32(o + 12) ? im_unknown_00_04_04t5_04_12t103(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    case 105:
        u32(o + 12) ? im_unknown_00_04_04t5_04_12t105(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        im_unknown_00_04_04t5_04_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_mysterious(u32(o + 32) + (i * 64) + g.m, i, x[0].section_32);
    }

    // 48 bytes;

}
function im_unknown_00_04_04t5_04_12t103(o, x) {
    x.push({
        u32_04: u32(o + 04),
        u32_12: u32(o + 12),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_unknown_00_04_04t5_04_12t105(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 04); i++) {
        im_mysterious(u32(o + 08) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
function im_unknown_00_04_04t5_04_20(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
    });

}
function im_unknown_00_04_04t5_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u8_08: u8(o + 08),
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_unknown_00_04_04t5_12_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_unknown_00_04_04t5_12_04(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        u8_04: u8(o + 04),
        f32_08: f32(o + 08),
    });

}
function im_unknown_00_04_04t5_20(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_unknown_00_04_04t5_20_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_unknown_00_04_04t5_20_04(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_08: f32(o + 08),
    });

}
function im_unknown_00_04_04t5_28(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_unknown_00_04_04t5_28_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_unknown_00_04_04t5_28_04(o, x) {
    x.push({
    unordered_unknown_00_04_04t5_28_04_00_00: 0,
    });

 x[0].unordered_unknown_00_04_04t5_28_04_00_00 = in_ml(u32(o + 00), g.unknown_00_04_04t5_28_04_00_array, im_unknown_00_04_04t5_28_04_00, g.unordered_ref.unknown_00_04_04t5_28_04_00);

    // 16 bytes;

}



// function im_unknown_00_04_04t5_28_04_00(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         section_04: [],
//         u32_08: u32(o + 08),
//     });

//     switch (u8(o + 00)) {
//     case 1:
//         u32(o + 04) ? im_unknown_00_04_04t5_28_04_00_04t1(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     case 2:
//         u32(o + 04) ? im_unknown_00_04_04t5_28_04_00_04t2(u32(o + 04) + g.m, x[0].section_04) : 0;
//         break;
//     }
//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00_04t1(o, x) {
//     x.push({
//         u8_00: u8(o + 00),
//         u32_04: u32(o + 04),
//         u32_08: u32(o + 08),
//     });

//     // 16 bytes;

// }
// function im_unknown_00_04_04t5_28_04_00_04t2(o, x) {
//     x.push({
//         u32_00: u32(o + 00),
//         u8_04: u8(o + 04),
//     });

//     // 16 bytes;

// }
function im_unknown_00_04_04t5_36(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
