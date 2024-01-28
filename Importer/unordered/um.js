function im_um(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 00),
        //amount?
        section_04: [],
        u32_08: u32(o + 08),
        u32_20: u32(o + 20),
        u8_24: u8(o + 24),
    });

    for (let i = 0; i < u32(o + 00); i++) {
        im_mysterious(u32(o + 04) + (i * 64) + g.m, i, x[0].section_04);
    }
    return x[i].id
    // 32 bytes;

}
