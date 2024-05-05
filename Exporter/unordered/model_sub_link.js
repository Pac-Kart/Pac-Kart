"use strict";
function ex_model_sub_link(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)

    e = ex_ml(x.ordered_model_animation_2_00, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 0, e, 'down', true);
    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 4, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_model_link_24(temp_offset + (i * 4), e, x.section_08[i], temp_offset)
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_model_link_32(temp_offset + (i * 8), e, x.section_16[i], temp_offset)
        }
        ;
    }
    ;g.debug ? ex_debug(o, "m6Wg") : 0;
    return e
}
