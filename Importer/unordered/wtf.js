function im_wtf(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 00),
        section_04: [],
        section_08: [],
        section_12: [],
    });

    u32(o + 04) ? im_wtf_04(u32(o + 04) + g.m, x[i].section_04) : 0;
    u32(o + 08) ? im_wtf_08(u32(o + 08) + g.m, x[i].section_08) : 0;
    u32(o + 12) ? im_wtf_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    return x[i].id
    // 16 bytes;

}
function im_wtf_04(o, x) {
    x.push({
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_wtf_08(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 04),
        section_08: [],
    });

    u32(o + 00) ? im_wtf_08_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    switch (u32(o + 04)) {
    case 1:
        u32(o + 08) ? im_wtf_08_08t1(u32(o + 08) + g.m, x[0].section_08) : 0;
        break;
    case 3:
        u32(o + 08) ? im_wtf_08_08t3(u32(o + 08) + g.m, x[0].section_08) : 0;
        break;
    }
    // 16 bytes;

}
function im_wtf_08_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 04) ? im_wtf_08_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_wtf_08_00_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_wtf_08_00_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_wtf_08_00_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_wtf_08_08t1(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 04),
        //amount?
        section_08: [],
    });

    u32(o + 00) ? im_wtf_08_08t1_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    u32(o + 08) ? im_wtf_08_08t1_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 16 bytes;

}
function im_wtf_08_08t1_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 04) ? im_wtf_08_08t1_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_wtf_08_08t1_00_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_wtf_08_08t1_00_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_wtf_08_08t1_00_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_wtf_08_08t1_08(o, x) {
    x.push({
        u8_01: u8(o + 01),
        section_08: [],
        unordered_gate_12: 0,
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 08) ? im_wtf_08_08t1_08_08(u32(o + 08) + g.m, x[0].section_08) : 0;
    x[0].unordered_gate_12 = in_ml(u32(o + 12), g.gate_array, im_gate, g.unordered_ref.gate);

    // 32 bytes;

}
function im_wtf_08_08t1_08_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_08_08t3(o, x) {
    x.push({
        section_00: [],
        u32_04: u32(o + 04),
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    u32(o + 00) ? im_wtf_08_08t3_00(u32(o + 00) + g.m, x[0].section_00) : 0;
    u32(o + 08) ? im_wtf_08_08t3_08(u32(o + 08) + g.m, x[0].section_08) : 0;
    u32(o + 12) ? im_wtf_08_08t3_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 20) ? im_wtf_08_08t3_20(u32(o + 20) + g.m, x[0].section_20) : 0;
    u32(o + 24) ? im_wtf_08_08t3_24(u32(o + 24) + g.m, x[0].section_24) : 0;
    u32(o + 32) ? im_wtf_08_08t3_32(u32(o + 32) + g.m, x[0].section_32) : 0;

    // 48 bytes;

}
function im_wtf_08_08t3_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        //check this
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 04) ? im_wtf_08_08t3_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    u32(o + 12) ? im_wtf_08_08t3_00_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 16 bytes;

}
function im_wtf_08_08t3_00_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_00_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_08(o, x) {
    x.push({
        section_08: [],
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 08) ? im_wtf_08_08t3_08_08(u32(o + 08) + g.m, x[0].section_08) : 0;
    u32(o + 20) ? im_wtf_08_08t3_08_20(u32(o + 20) + g.m, x[0].section_20) : 0;

    // 32 bytes;

}
function im_wtf_08_08t3_08_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_08_08t3_08_20(o, x) {
    x.push({
        f32_00: f32(o + 00),
        f32_04: f32(o + 04),
        f32_08: f32(o + 08),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_wtf_08_08t3_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_wtf_08_08t3_12_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_wtf_08_08t3_12_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_20(o, x) {
    x.push({
        u8_00: u8(o + 00),
        u8_01: u8(o + 01),
        u32_04: u32(o + 04),
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 08) ? im_wtf_08_08t3_20_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 32 bytes;

}
function im_wtf_08_08t3_20_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_08_08t3_24(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
        u32_08: u32(o + 08),
        section_12: [],
    });

    u32(o + 04) ? im_wtf_08_08t3_24_04(u32(o + 04) + g.m, x[0].section_04) : 0;
    switch (u32(o + 08)) {
    case 3:
        u32(o + 12) ? im_wtf_08_08t3_24_12(u32(o + 12) + g.m, x[0].section_12) : 0;
        break;
    }
    // 16 bytes;

}
function im_wtf_08_08t3_24_04(o, x) {
    x.push({
        u32_00: u32(o + 00),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_24_12(o, x) {
    x.push({
        u32_00: u32(o + 00),
        u32_04: u32(o + 04),
        u32_08: u32(o + 08),
    });

    // 16 bytes;

}
function im_wtf_08_08t3_32(o, x) {
    x.push({
        u8_01: u8(o + 01),
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 08) ? im_wtf_08_08t3_32_08(u32(o + 08) + g.m, x[0].section_08) : 0;

    // 32 bytes;

}
function im_wtf_08_08t3_32_08(o, x) {
    x.push({
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_wtf_12(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 00) ? im_wtf_12_00(u32(o + 00) + g.m, x[0].section_00) : 0;

    // 16 bytes;

}
function im_wtf_12_00(o, x) {
    x.push({
        u32_00: u32(o + 00),
        section_04: [],
    });

    u32(o + 04) ? im_wtf_12_00_04(u32(o + 04) + g.m, x[0].section_04) : 0;

    // 16 bytes;

}
function im_wtf_12_00_04(o, x) {
    x.push({});

    // 16 bytes;

}
