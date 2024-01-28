function ex_um(o, x) {
    let e = o + 32
    //amount?   su32(o +00, x.u32_00)
    su32(o + 08, x.u32_08)
    su32(o + 20, x.u32_20)
    su8(o + 24, x.u8_24)

     if(x.section_04.length){
        su32(o + 00,x.section_04.length)
        su32(o + 04, e - g.m)
        g.oa.push(o + 04)
        let temp_offset = e 
        e += divisible(x.section_04.length * 64, 16) 
        for (let i = 0; i < x.section_04.length; i++) { 
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        };
};

    g.debug ? ex_debug(o, ">_aO") : 0;
    return e
}
