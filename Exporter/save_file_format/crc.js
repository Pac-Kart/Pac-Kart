function calculate_crc() {

    let amount_in_save = u32(8 + is_gc) - 12
    let register_1 = new ArrayBuffer(4)
    let register_2 = new ArrayBuffer(4)

    for (byte_i = 0; byte_i < amount_in_save; byte_i++) {
        new DataView(register_1).setUint32(0, u8(12 + is_gc + byte_i))

        new DataView(register_1).setUint32(0, new DataView(register_1).getUint32(0) << 24)

        new DataView(register_2).setUint32(0, new DataView(register_1).getUint32(0) ^ new DataView(register_2).getUint32(0))

        for (let i = 0; i < 8; i++) {
            new DataView(register_1).setUint32(0, new DataView(register_2).getUint32(0))

            new DataView(register_2).setUint32(0, new DataView(register_2).getUint32(0) + new DataView(register_2).getUint32(0))

            let flag_1 = new DataView(register_1).getUint32(0) & new DataView(register_1).getUint32(0)
            if (flag_1 < 0) {
                new DataView(register_2).setUint32(0, new DataView(register_2).getUint32(0) ^ 0x04C11DB7)

            }

        }

    }

    new DataView(buffer).setUint32(is_gc, new DataView(register_2).getUint32(0),g.endian)

    console.log(new DataView(register_2).getUint32(0))
}
