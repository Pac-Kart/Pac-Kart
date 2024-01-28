function get_texture_animations(offset, XFA, anim_i) {
    XFA.push({
        id: gen_id(),
        pattern_04: [],
        color_12: [],
        translation_20: [],
    })

    let anim_offset = u32(offset, is_little_endian) + offset_mid

    get_pattern_sequence(u32(anim_offset + 4, is_little_endian) + offset_mid, XFA[anim_i].pattern_04)

    for (let i = 0; i < u32(anim_offset + 8, is_little_endian); i++) {
        get_color_sequence(u32(anim_offset + 12, is_little_endian) + offset_mid + (i * 12), XFA[anim_i].color_12)
    }
    for (let i = 0; i < u32(anim_offset + 16, is_little_endian); i++) {
        get_translation_sequence(u32(anim_offset + 20, is_little_endian) + offset_mid + (i * 16), XFA[anim_i].translation_20)
    }

    console.log(anim_offset, XFA, 'XFA animations ????')
    console.log(offset_mid, 'offset_mid')

    function get_pattern_sequence(offset, XFA) {

        XFA.push({
            textures_04: [],
            unknown_11: u8(offset + 11, is_little_endian),
            time_20: u32(offset + 20, is_little_endian)

        })

        let pattern_offset = u32(offset + 4, is_little_endian) + offset_mid
        for (let i = 0; i < u32(offset, is_little_endian); i++) {
            get_pattern_sequence_2(pattern_offset + (i * 4), XFA[0].textures_04, i)
        }

        function get_pattern_sequence_2(offset, XFA, i) {

            XFA.push(u16(0, is_little_endian))

            let patch_array = get_patch_offset_index(texture_patch, offset - offset_mid)
            if (patch_array != -1) {
                XFA[i] = patch_array
            }

        }

    }
    function get_color_sequence(offset, XFA) {

        XFA.push({
            color: {
                R: u8(offset),
                G: u8(offset + 1),
                B: u8(offset + 2),
                A: u8(offset + 3),
            },
            unknown: u32(offset + 4, is_little_endian),
            time: f32(offset + 8, is_little_endian)

        })
    }
    function get_translation_sequence(offset, XFA) {

        XFA.push({
            x_00: f32(offset + 0, is_little_endian),
            y_04: f32(offset + 4, is_little_endian),
            unknown_09: u8(offset + 9, is_little_endian),
            time_12: f32(offset + 12, is_little_endian)

        })
    }

}

function im_texture_animation_section(o, i ,x) {
x.push({
    id: gen_id(),
    section_00: [],
});

 u32(o + 00) ? im_texture_anim_1(u32(o + 00) + g.m,x[0].section_00) : 0; 

}



function im_texture_anim_1(o, x) {
x.push({
    u32_00: u32(o + 00),
    section_04: [],
    u32_08: u32(o + 08),//amount?
    section_12: [],
    u32_16: u32(o + 16),//amount?
    section_20: [],
});

 u32(o + 04) ? im_texture_anim_1_1(u32(o + 04) + g.m,x[0].section_04) : 0; 

for (let i = 0; i < u32(o + 08); i++) {
    im_texture_anim_1_2(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
}

for (let i = 0; i < u32(o + 16); i++) {
    im_texture_anim_1_3(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
}
 
// 48 bytes;

}
function im_texture_anim_1_1(o, x) {
x.push({
    u32_00: u32(o + 00),//amount?
    section_04: [],
    u8_11: u8(o + 11),
    u32_20: u32(o + 20),//amount?
});

 
for (let i = 0; i < u32(o + 00); i++) {
    im_texture_anim_1_1_1(u32(o + 04) + (i * 4) + g.m, i, x[0].section_04);
}
 
// 32 bytes;

}
function im_texture_anim_1_1_1(o, i ,x) {
x.push({
    id: gen_id(),
    texture_00: im_patch(g.texture_patch_ref, o + 00),
});

}
function im_texture_anim_1_2(o, i ,x) {
x.push({
    id: gen_id(),
    u32_00: u32(o + 00),
    u8_04: u8(o + 04),
    u8_05: u8(o + 05),
    u8_06: u8(o + 06),
    u8_07: u8(o + 07),
    f32_08: f32(o + 08),//amount?
});

}
function im_texture_anim_1_3(o, i ,x) {
x.push({
    id: gen_id(),
    f32_00: f32(o + 00),
    f32_04: f32(o + 04),
    u8_09: u8(o + 09),
    f32_12: f32(o + 12),//amount?
});

}