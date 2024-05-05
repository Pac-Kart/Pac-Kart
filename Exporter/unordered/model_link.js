"use strict";
function ex_model_link(o, x) {
    let e = o + divisible(80, g.divisibility)
    su32(o + 0, x.u32_00)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 36, x.f32_36)
    //amount?   su32(o +40, x.u32_40)
    su8(o + 48, x.u8_48)
    su8(o + 49, x.u8_49)
    su8(o + 50, x.u8_50)

    e = ex_string(o + 4, e, x.section_04)
    e = ex_ml(x.unordered_model_sub_link_08, g.model_sub_link_array, ex_model_sub_link, g.unordered_ref.model_sub_link, o + 8, e, 'down');
    e = ex_ml(x.ordered_model_animation_1_12, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 12, e, 'down', true);
    e = ex_ml(x.ordered_model_animation_2_16, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 16, e, 'down', true);
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 4, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_model_link_24(temp_offset + (i * 4), e, x.section_24[i], temp_offset)
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 8, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_model_link_32(temp_offset + (i * 8), e, x.section_32[i], temp_offset)
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 64, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_44[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 52, e, ex_model_link_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_model_link_56, x.section_56, 'down');
    e = ex_s_offset(o + 64, e, ex_model_link_64, x.section_64, 'down');

    g.debug ? ex_debug(o, "KxuO") : 0;
    return e
}
function ex_model_link_24(o, e, x, temp_offset) {

    e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug ? ex_debug(o, "tiD5") : 0;
    return e
}
function ex_model_link_32(o, e, x, temp_offset) {
    su16(o + 4, x.u16_04)

    e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug ? ex_debug(o, "kCx3") : 0;
    return e
}
function ex_model_link_52(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "zdTo") : 0;
    return e
}
function ex_model_link_56(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "FZJ=") : 0;
    return e
}
function ex_model_link_64(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, "DC4@") : 0;
    return e
}
