"use strict";
function im_model_sub_link(o, i, x) {
    x.push({
        id: gen_id(),
        ordered_model_animation_2_00: 0,
        section_08: [],
        section_16: [],
    });

    x[i].ordered_model_animation_2_00 = in_ml(u32(o + 0), g.model_animation_2_array, im_model_animation_2, g.ordered_ref.model_animation_2);
    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_model_link_24(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_08, u32(o + 8) + g.m);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_model_link_32(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16, u32(o + 16) + g.m);
    }
    return x[i].id
    // 32 bytes;

}
