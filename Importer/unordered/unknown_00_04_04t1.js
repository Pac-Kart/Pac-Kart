function im_unknown_00_04_04t1(o, i, x) {
    x.push({
        id: gen_id(),
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        section_04: [],
        u32_08: u32(o + 08),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    switch (u8(o + 00)) {
    case 0:
        u32(o + 04) ? im_unknown_00_04_04t1_04t0(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 1:
        u32(o + 04) ? im_unknown_00_04_04t1_04t1(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    case 2:
        u32(o + 04) ? im_unknown_00_04_04t1_04t2(u32(o + 04) + g.m, x[i].section_04) : 0;
        break;
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_unknown_00_04_04t1_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_unknown(u32(o + 32) + (ii * 04) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 48 bytes;

}
function im_unknown_00_04_04t1_04t0(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
        u32_44: u32(o + 44),
        section_48: [],
        u8_52: u8(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_unknown_00_04_04t1_04t0_04(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04, u32(o + 04) + g.m);
    }

    for (let i = 0; i < u32(o + 36); i++) {
        im_unknown_00_04_04t1_04t0_40(u32(o + 40) + (i * 32) + g.m, i, x[0].section_40);
    }
    u32(o + 48) ? im_unknown_00_04_04t1_04t0_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    u32(o + 56) ? im_unknown_00_04_04t1_04t0_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    for (let i = 0; i < u32(o + 60); i++) {
        im_unknown_00_04_04t1_04t0_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
    }

    // 80 bytes;

}
function im_unknown_00_04_04t1_04t0_04(o, i, x, tempoffset) {
    x.push({
        id: gen_id(),
        ordered_models_00: 0,
    });
    x[i].ordered_models_00 = in_ml(u32(o + 00), g.models_array, im_models, g.ordered_ref.models, tempoffset, i * 4);

}
function im_unknown_00_04_04t1_04t0_40(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_unknown_00_04_04t1_04t0_48(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}
function im_unknown_00_04_04t1_04t0_56(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
    });

    // 32 bytes;

}
function im_unknown_00_04_04t1_04t0_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_unknown_00_04_04t1_04t0_64_04(u32(o + 04) + (ii * 20) + g.m, ii, x[i].section_04);
    }

}
function im_unknown_00_04_04t1_04t0_64_04(o, i, x) {
    x.push({
        id: gen_id(),
    });

}
function im_unknown_00_04_04t1_04t1(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_unknown_00_04_04t1_04t1_04(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_unknown_00_04_04t1_04t1_44(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_unknown_00_04_04t1_04t1_44(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) ? im_unknown_00_04_04t1_04t1_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    for (let i = 0; i < u32(o + 60); i++) {
        im_unknown_00_04_04t1_04t1_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
    }

    // 80 bytes;

}
function im_unknown_00_04_04t1_04t1_04(o, i, x) {
    x.push({
        id: gen_id(),
        texture_00: im_patch(g.texture_patch_ref, o + 00),
    });

}
function im_unknown_00_04_04t1_04t1_44(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        u8_04: u8(o + 04),
        u8_05: u8(o + 05),
        f32_08: f32(o + 08),
    });

}
function im_unknown_00_04_04t1_04t1_56(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        u8_08: u8(o + 08),
        u8_09: u8(o + 09),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_unknown_00_04_04t1_04t1_64(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 00); ii++) {
        im_unknown_00_04_04t1_04t1_64_04(u32(o + 04) + (ii * 20) + g.m, ii, x[i].section_04);
    }

}
function im_unknown_00_04_04t1_04t1_64_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
    });

}
function im_unknown_00_04_04t1_04t2(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        f32_08: f32(o + 08),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u8_24: u8(o + 24),
        u8_26: u8(o + 26),
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_unknown_00_04_04t1_04t2_04(u32(o + 04) + (i * 12) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_unknown_00_04_04t1_04t2_20(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_unknown_00_04_04t1_04t2_04(o, i, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        f32_08: f32(o + 08),
    });

    // 12 bytes;

}
function im_unknown_00_04_04t1_04t2_20(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_12: f32(o + 12),
    });

}
function im_unknown_00_04_04t1_24(o, i, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u8_02: u8(o + 02),
        u8_03: u8(o + 03),
        u8_04: u8(o + 04),
        u8_05: u8(o + 05),
        f32_08: f32(o + 08),
    });

    // 12 bytes;

}
function im_unknown_00_04_04t1_32(o, x) {
    x.push({});

    // 16 bytes;

}
