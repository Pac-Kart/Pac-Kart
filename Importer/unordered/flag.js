function im_flag(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        section_04: [im_string(u32(o + 04), 0, false)],
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
        f32_16: f32(o + 16),
        f32_28: f32(o + 28),
        u8_40: u8(o + 40),
    });

    switch (u8(o + 08)) {
    case 2:
        u32(o + 12) ? im_flag_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 3:
        u32(o + 12) ? im_flag_12t3(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 4:
        u32(o + 12) ? im_flag_12t4(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
    return x[i].id
    // 48 bytes;

}
function im_flag_12t2(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_02: u8(o + 02),
        f32_04: f32(o + 04),
    });

    // 16 bytes;

}
function im_flag_12t3(o, x) {
    x.push({
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 12) ? im_flag_12t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_flag_12t3_12(o, x) {
    x.push({});

    // 28 bytes;

}
function im_flag_12t4(o, x) {
    x.push({
        f32_00: f32(o + 00),
    });

    // 16 bytes;

}
