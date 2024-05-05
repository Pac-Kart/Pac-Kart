"use strict";
function ex_um(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su32(o + 8, x.u32_08)
    su32(o + 20, x.u32_20)
    su8(o + 24, x.u8_24)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, ">_aO") : 0;
    return e
}
