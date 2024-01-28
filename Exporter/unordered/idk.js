function ex_idk(o, x) {
    let e = o + 80
    su8(o + 00, x.u8_00)
    su8(o + 01, x.u8_01)
    su8(o + 02, x.u8_02)
    //amount?   su32(o +16, x.u32_16)
    sf32(o + 24, x.f32_24)
    //amount?   su32(o +28, x.u32_28)
    su8(o + 64, x.u8_64)
    su8(o + 65, x.u8_65)
    su8(o + 66, x.u8_66)
    su8(o + 67, x.u8_67)

    switch (x.u8_00) {
    case 0:
        e = ex_ml(x.section_04, g.models_array, ex_models, g.ordered_ref.models, o + 04, e, 'down',true,"model");
        break;
    case 1:
        e = ex_ml(x.section_04, g.model_link_array, ex_model_link, g.unordered_ref.model_link, o + 04, e, 'down');
        break;
    }
    e = ex_ml(x.ordered_model_animation_2_08, g.model_animation_2_array, ex_model_animation_2, g.ordered_ref.model_animation_2, o + 08, e, 'down',true);
    e = ex_s_offset(o + 12, e, ex_idk_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_idk_20(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 64, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_32[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "66sn") : 0;
    return e
}
function ex_idk_12(o, x) {
    let e = o + 80
    su32(o + 00, x.u32_00)
    su32(o + 04, x.u32_04)
    su8(o + 08, x.u8_08)
    su8(o + 09, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    sf32(o + 32, x.f32_32)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    //amount?   su32(o +64, x.u32_64)

    e = ex_s_offset(o + 16, e, ex_idk_12_16, x.section_16, 'down');
    e = ex_ml(x.ordered_models_20, g.models_array, ex_models, g.ordered_ref.models, o + 20, e, 'down',true,"model");
    e = ex_ml(x.unordered_wtf_28, g.wtf_array, ex_wtf, g.unordered_ref.wtf, o + 28, e, 'down');
    e = ex_ml(x.unordered_gate_44, g.gate_array, ex_gate, g.unordered_ref.gate, o + 44, e, 'down');
    if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e - g.m)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 04, 16)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_unknown(temp_offset + (i * 04), e, x.section_68[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "]5[d") : 0;
    return e
}
function ex_idk_12_16(o, x) {
    let e = o + 48
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, "kSMq") : 0;
    return e
}
function ex_idk_20(o, e, x) {
    su8(o + 00, x.u8_00)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +24, x.u32_24)

    if (x.section_08.length) {
        su32(o + 04, x.section_08.length)
        su32(o + 08, e - g.m)
        g.oa.push(o + 08)
        let temp_offset = e
        e += divisible(x.section_08.length * 32, 16)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_idk_20_08(temp_offset + (i * 32), e, x.section_08[i])
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 32, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_idk_20_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 64, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_28[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "627B") : 0;
    return e
}
function ex_idk_20_08(o, e, x) {
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "F0T<") : 0;
    return e
}
function ex_idk_20_16(o, e, x) {
    sf32(o + 00, x.f32_00)
    sf32(o + 04, x.f32_04)
    sf32(o + 08, x.f32_08)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, "FL91") : 0;
    return e
}
