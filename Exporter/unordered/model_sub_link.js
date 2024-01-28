function ex_model_sub_link(o, x) {
    let e = o + 32
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)

    e = ex_ml(x.ordered_model_animation_2_00, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 00, e, 'down',true);
   if(x.section_08.length){
        su32(o + 04,x.section_08.length)
        su32(o + 08, e - g.m)
        g.oa.push(o + 08)
        let temp_offset = e 
        e += divisible(x.section_08.length * 4, 16) 
        for (let i = 0; i < x.section_08.length; i++) { 
            e = ex_model_link_24(temp_offset + (i * 4), e, x.section_08[i],temp_offset)
        };
};

    if(x.section_16.length){
        su32(o + 12,x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e 
        e += divisible(x.section_16.length * 8, 16) 
        for (let i = 0; i < x.section_16.length; i++) { 
            e = ex_model_link_32(temp_offset + (i * 8), e, x.section_16[i],temp_offset)
        };
};

    g.debug ? ex_debug(o, "m6Wg") : 0;
    return e
}
