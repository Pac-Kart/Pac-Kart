"use strict";
// function get_model_share(offset, x, model_index) {
//     x.push({
//         id: gen_id(),
//         magic: u16(offset),
//         name: get_string(u32(offset + 8) + g.m, 0, false),
//         sections: [],
//         second_names: [],
//         visibility: {
//             x1: f32(offset + 16),
//             y1: f32(offset + 20),
//             z1: f32(offset + 24),
//             w1: f32(offset + 28),
//             x2: f32(offset + 32),
//             y2: f32(offset + 36),
//             z2: f32(offset + 40),
//             w2: f32(offset + 44),
//             x3: f32(offset + 48),
//             y3: f32(offset + 52),
//             z3: f32(offset + 56),
//             w3: f32(offset + 60),
//         }
//     })

//     let render_array = []
//     let end_offset = 0

//     for (let i = 0; i < u16(offset + 2); i++) {
//         //get render first
//         let render_offset = u32(offset + 12) + g.m + (i * 4)
//         render_array.push(f32(render_offset))
//     }

//     for (let i = 0; i < u16(offset + 2); i++) {
//         let section_offset = u32(offset + 4) + g.m
//         x[model_index].sections.push({
//             id: gen_id(),
//             render: render_array[i],
//             sub_section: []
//         })
//         for (let ii = 0; ii < u32(section_offset); ii++) {
//             let sub_section_offset_offset = u32(section_offset + 4) + g.m
//             let sub_section_offset = u32(sub_section_offset_offset) + g.m
//             let model_data_sub_header = u32(sub_section_offset + 92) + g.m
//             let vertex_array = []
//             let vertex_offset
//             if (u32(sub_section_offset + 68) !== 0) {
//                 vertex_offset = u32(sub_section_offset + 68) + g.m
//             } else {
//                 vertex_offset = false
//             }
//             let color_array = []
//             let color_offset
//             if (u32(sub_section_offset + 72) !== 0) {
//                 color_offset = u32(sub_section_offset + 72) + g.m
//             } else {
//                 color_offset = false
//             }
//             let normal_array = []
//             let uv_array = []
//             let uv_offset
//             if (u32(sub_section_offset + 80) !== 0) {
//                 uv_offset = u32(sub_section_offset + 80) + g.m
//             } else {
//                 uv_offset = false
//             }

//             let soft_array = []
//             let amount_entries = u32(model_data_sub_header)

//             if (vertex_offset !== false) {

//                 for (let vertex_i = 0; vertex_i < amount_entries; vertex_i++) {

//                     vertex_array.push(f32(vertex_offset + (vertex_i * 36)), f32(vertex_offset + 4 + (vertex_i * 36)), f32(vertex_offset + 8 + (vertex_i * 36)), f32(vertex_offset + 12 + (vertex_i * 36)), f32(vertex_offset + 16 + (vertex_i * 36)), f32(vertex_offset + 20 + (vertex_i * 36)), f32(vertex_offset + 24 + (vertex_i * 36)), f32(vertex_offset + 28 + (vertex_i * 36)), f32(vertex_offset + 32 + (vertex_i * 36)))
//                 }
//             }
//             if (color_offset !== false) {

//                 for (let c_i = 0; c_i < amount_entries; c_i++) {

//                     color_array.push(u8(color_offset + (c_i * 12)), u8(color_offset + 1 + (c_i * 12)), u8(color_offset + 2 + (c_i * 12)), u8(color_offset + 3 + (c_i * 12)), u8(color_offset + 4 + (c_i * 12)), u8(color_offset + 5 + (c_i * 12)), u8(color_offset + 6 + (c_i * 12)), u8(color_offset + 7 + (c_i * 12)), u8(color_offset + 8 + (c_i * 12)), u8(color_offset + 9 + (c_i * 12)), u8(color_offset + 10 + (c_i * 12)), u8(color_offset + 11 + (c_i * 12)))
//                 }
//             }
//             if (uv_offset !== false) {

//                 for (let u_i = 0; u_i < amount_entries; u_i++) {

//                     uv_array.push(f32(uv_offset + (u_i * 24)), f32(uv_offset + 4 + (u_i * 24)), f32(uv_offset + 8 + (u_i * 24)), f32(uv_offset + 12 + (u_i * 24)), f32(uv_offset + 16 + (u_i * 24)), f32(uv_offset + 20 + (u_i * 24)))
//                 }
//             }
//             // console.log(amount_entries, vertex_offset)

//             // console.log(offset + 40 - g.m, 'patch_array', offset, g.m)
//             let patch_array = get_patch_offset_index(texture_patch, sub_section_offset + 40 - g.m)
//             if (patch_array === -1) {// patch_array = -1
//             }

//             let patch_array_animation = get_patch_offset_index(texture_animation_patch, sub_section_offset + 36 - g.m)
//             if (patch_array_animation === -1) {// patch_array = -1
//             }
//             end_offset = u32(sub_section_offset + 92) + g.m + 16

//             x[model_index].sections[i].sub_section.push({
//                 id: gen_id(),
//                 v_array: vertex_array,
//                 c_array: color_array,
//                 u_array: uv_array,
//                 unknown_1: u32(sub_section_offset + 8),
//                 unknown_2: u32(sub_section_offset + 16),
//                 unknown_3: u32(sub_section_offset + 24),
//                 unknown_4: u32(sub_section_offset + 28),
//                 texture: patch_array,
//                 animation: patch_array_animation,
//                 unknown_5: u32(sub_section_offset + 44),
//                 unknown_6: u32(sub_section_offset + 48),
//                 unknown_7: u32(sub_section_offset + 56),
//                 unknown_8: u32(sub_section_offset + 60),
//                 unknown_9: u32(sub_section_offset + 68),
//                 unknown_10: u32(sub_section_offset + 88),
//             })
//         }

//     }

//     let i_name = 0
//     let temp_offset = u32(offset + 8) + g.m
//     // console.log(end_offset, 'end', temp_offset, 'temp')
//     while (temp_offset > end_offset) {

//         let temp_string = ''

//         temp_string = get_string(end_offset, 0, false)

//         // console.log(temp_string, x)
//         x[model_index].second_names.push(temp_string)
//         end_offset += temp_string.length
//         while (u8(end_offset) === 0) {
//             end_offset++
//         }
//         end_offset++
//         i_name++
//     }

// }
function im_models(offset, index) {
    g.ordered_ref.models.push({
        id: gen_id(),
        magic: u16(offset),
        name: get_string(u32(offset + 8) + g.m, 0, false),
        sections: [],
        second_names: [],
        name_padding: 0,
        visibility: {
            x1: f32(offset + 16),
            y1: f32(offset + 20),
            z1: f32(offset + 24),
            w1: f32(offset + 28),
            x2: f32(offset + 32),
            y2: f32(offset + 36),
            z2: f32(offset + 40),
            w2: f32(offset + 44),
            x3: f32(offset + 48),
            y3: f32(offset + 52),
            z3: f32(offset + 56),
            w3: f32(offset + 60),
        }
    })

    let render_array = []
    let end_offset = 0

    for (let i = 0; i < u16(offset + 2); i++) {
        //get render first
        let render_offset = u32(offset + 12) + g.m + (i * 4)
        render_array.push(f32(render_offset))
    }

    for (let i = 0; i < u16(offset + 2); i++) {
        let section_offset = u32(offset + 4) + g.m + (i * 8)
        g.ordered_ref.models[index].sections.push({
            id: gen_id(),
            render: render_array[i],
            sub_section: [],
        })

        for (let ii = 0; ii < u32(section_offset); ii++) {
            let sub_section_offset_offset = u32(section_offset + 4) + g.m + (ii * 4)
            let sub_section_offset = u32(sub_section_offset_offset) + g.m
            if (g.console === 'gamecube') {
                let o = sub_section_offset
                let x = g.ordered_ref.models[index].sections[i].sub_section
                g.ordered_ref.models[index].sections[i].sub_section.push({
                    id: gen_id(),
                    u32_00: u32(o + 0),
                    u32_08: u32(o + 8),
                    u8_12: u8(o + 12),
                    u8_13: u8(o + 13),
                    u8_15: u8(o + 15),
                    u32_16: u32(o + 16),
                    u32_24: u32(o + 24),
                    u32_28: u32(o + 28),
                    texture_40: im_patch(g.texture_patch_ref, o + 40),
                    u8_44: u8(o + 44),
                    u8_45: u8(o + 45),
                    u8_46: u8(o + 46),
                    u8_47: u8(o + 47),
                    u8_48: u8(o + 48),
                    u8_49: u8(o + 49),
                    u8_52: u8(o + 52),
                    u8_53: u8(o + 53),
                    u8_54: u8(o + 54),
                    u8_55: u8(o + 55),
                    u32_56: u32(o + 56),
                    section_60: [],
                    section_64: [],
                    section_68: [],
                    section_72: [],
                    section_76: [],
                    section_80: [],
                    u16_84: u16(o + 84),
                    //amount?
                    u16_86: u16(o + 86),
                })

                let end_vertex = 0
                if (u32(o + 64)) {
                    end_vertex = u32(o + 64)
                } else if (u32(o + 68)) {
                    end_vertex = u32(o + 68)
                } else if (u32(o + 72)) {
                    end_vertex = u32(o + 72)
                } else if (u32(o + 76)) {
                    end_vertex = u32(o + 76)
                }
                end_offset = o + 96

                u32(o + 80) ? end_offset = im_GC_models_04_04_00_80(u32(o + 80) + g.m, x[0].section_80) : 0;

                u32(o + 60) ? end_offset = im_GC_models_04_04_00_60(u32(o + 60) + g.m, x[0].section_60, end_vertex) : 0;

                let end_color = 0
                if (u32(o + 68)) {
                    end_color = u32(o + 68)
                } else if (u32(o + 72)) {
                    end_color = u32(o + 72)
                } else if (u32(o + 76)) {
                    end_color = u32(o + 76)
                }

                u32(o + 64) ? end_offset = im_GC_models_04_04_00_64(u32(o + 64) + g.m, x[0].section_64, end_color) : 0;

                let end_idk = 0
                if (u32(o + 72)) {
                    end_idk = u32(o + 72)
                } else if (u32(o + 76)) {
                    end_idk = u32(o + 76)
                }

                u32(o + 68) ? end_offset = im_GC_models_04_04_00_68(u32(o + 68) + g.m, x[0].section_68, end_idk) : 0;
                u32(o + 72) ? end_offset = im_GC_models_04_04_00_72(u32(o + 72) + g.m, x[0].section_72, u32(o + 76)) : 0;

                for (let i = 0; i < u16(o + 84); i++) {
                    end_offset = im_GC_models_04_04_00_76(u32(o + 76) + (i * 24) + g.m, i, x[0].section_76);
                }

                // 96 bytes;

            } else {

                let model_data_sub_header = u32(sub_section_offset + 92) + g.m
                let amount_entries = u32(model_data_sub_header)

                let vertex_array = []
                if (u32(sub_section_offset + 68)) {
                    vertex_array = buffer.slice(u32(sub_section_offset + 68) + g.m, u32(sub_section_offset + 68) + g.m + amount_entries * 36)
                }

                let color_array = []
                if (u32(sub_section_offset + 72)) {
                    color_array = buffer.slice(u32(sub_section_offset + 72) + g.m, u32(sub_section_offset + 72) + g.m + (u32(sub_section_offset + 56) * 4))
                }

                let normal_array = []
                if (u32(sub_section_offset + 76)) {
                    normal_array = buffer.slice(u32(sub_section_offset + 76) + g.m, u32(sub_section_offset + 76) + g.m + amount_entries * 36)
                }

                let uv_array = []
                if (u32(sub_section_offset + 80)) {
                    uv_array = buffer.slice(u32(sub_section_offset + 80) + g.m, u32(sub_section_offset + 80) + g.m + amount_entries * 24)
                }

                let soft_array = []
                if (u32(sub_section_offset + 84)) {
                    soft_array = buffer.slice(u32(sub_section_offset + 84) + g.m, u32(sub_section_offset + 84) + g.m + amount_entries * 3)
                }

                // console.log(offset + 40 - g.m, 'patch_array', offset, g.m)
                // let patch_array = get_patch_offset_index(texture_patch, sub_section_offset + 40 - g.m)
                // if (patch_array === -1) {// patch_array = -1
                // }

                // let patch_array_animation = get_patch_offset_index(texture_animation_patch, sub_section_offset + 36 - g.m)
                // if (patch_array_animation !== -1) {
                //     console.log('?')
                // }

                // let patch_array_animation_24 = get_patch_offset_index(texture_animation_patch, sub_section_offset + 24 - g.m)
                // if (patch_array_animation_24 !== -1) {
                //     console.log('?')
                // }

                end_offset = u32(sub_section_offset + 92)

                g.ordered_ref.models[index].sections[i].sub_section.push({
                    id: gen_id(),
                    v_array: vertex_array,
                    c_array: color_array,
                    n_array: normal_array,
                    u_array: uv_array,
                    s_array: soft_array,
                    unknown_00: u32(sub_section_offset + 0),
                    unknown_08: u32(sub_section_offset + 8),
                    unknown_12: u8(sub_section_offset + 12),
                    unknown_13: u8(sub_section_offset + 13),
                    unknown_15: u8(sub_section_offset + 15),
                    unknown_16: u32(sub_section_offset + 16),
                    unknown_24: u32(sub_section_offset + 24),
                    unknown_24_animation: im_patch(g.animation_patch_ref, sub_section_offset + 24),
                    unknown_28: u32(sub_section_offset + 28),
                    texture: im_patch(g.texture_patch_ref, sub_section_offset + 40),
                    animation: im_patch(g.animation_patch_ref, sub_section_offset + 36),
                    unknown_44: u8(sub_section_offset + 44),
                    unknown_45: u8(sub_section_offset + 45),
                    unknown_46: u8(sub_section_offset + 46),
                    unknown_47: u8(sub_section_offset + 47),
                    unknown_48: u8(sub_section_offset + 48),
                    unknown_49: u8(sub_section_offset + 49),
                    unknown_52: u8(sub_section_offset + 52),
                    unknown_53: u8(sub_section_offset + 53),
                    unknown_54: u8(sub_section_offset + 54),
                    unknown_55: u8(sub_section_offset + 55),
                    unknown_56: u32(sub_section_offset + 56),
                    unknown_60: u32(sub_section_offset + 60),
                    unknown_64: u32(sub_section_offset + 64),
                    unknown_88: u32(sub_section_offset + 88),
                    section_92: [],
                })
                if (u32(sub_section_offset + 92)) {
                    end_offset = get_sub_section(u32(sub_section_offset + 92) + g.m, g.ordered_ref.models[index].sections[i].sub_section[ii].section_92)
                }

            }
        }

    }

    let temp_offset = u32(offset + 8) + g.m
    // console.log(end_offset, 'end', temp_offset, 'temp')
    g.ordered_ref.models[index].name_padding = temp_offset - end_offset

    while (temp_offset > end_offset) {
        let temp_string = ''

        temp_string = get_string(end_offset, 0, false)

        if (temp_string !== "") {

            g.ordered_ref.models[index].second_names.push(temp_string)
            end_offset += temp_string.length
        }
        while (u8(end_offset) === 0) {
            end_offset++
        }
        // while (u8(end_offset) === 0) {
        // }
        // end_offset++

    }
    // while (temp_offset > end_offset) {

    // }

    return g.ordered_ref.models[index].id

    function get_sub_section(offset, x) {
        let end_offset = offset + 16 + divisible(u32(offset + 8), 16)

        x.push({
            amount_00: u32(offset + 0),
            section_12: [],
        })

        for (let i = 0; i < u32(offset + 8); i++) {
            get_sub_section_12(u32(offset + 12) + g.m + i, x[0].section_12)
        }

        u32(offset + 8)

        return end_offset

    }
    function get_sub_section_12(offset, x, i) {
        x.push({
            unknown_00: u8(offset + 0),
        })
    }
    function im_GC_models_04_04_00_80(o, x) {
        x.push({
            section_00: [],
            section_04: [],
            u32_08: u32(o + 8),
        });

        for (let i = 0; i < u32(o + 8); i++) {
            im_GC_models_04_04_00_80_00(u32(o + 0) + (i * 32) + g.m, i, x[0].section_00);
        }

        u32(o + 4) ? im_GC_models_04_04_00_80_04(u32(o + 4) + g.m, x[0].section_04, u32(o + 0) + g.m) : 0;

        return o + 16
        // 16 bytes;

    }
    function im_GC_models_04_04_00_80_04(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a),
        });

    }
    function im_GC_models_04_04_00_80_00(o, i, x) {
        x.push({
            id: gen_id(),
            f32_00: f32(o + 0),
            f32_04: f32(o + 4),
            f32_08: f32(o + 8),
            f32_12: f32(o + 12),
            f32_16: f32(o + 16),
            f32_20: f32(o + 20),
            u16_24: u16(o + 24),
            u16_26: u16(o + 26),
            u8_29: u8(o + 29),
            u8_30: u8(o + 30),
            u8_31: u8(o + 31),
        });

    }
    function im_GC_models_04_04_00_60(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m
    }
    function im_GC_models_04_04_00_64(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m

    }
    function im_GC_models_04_04_00_68(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m
    }
    function im_GC_models_04_04_00_72(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });
        return a + g.m
    }
    function im_GC_models_04_04_00_76(o, i, x) {
        let e = o + 24
        x.push({
            id: gen_id(),
            u32_04: u32(o + 4),
            section_08: [],
            section_12: [],
            section_16: [],
            u8_20: u8(o + 20),
        });

        for (let ii = 0; ii < u8(o + 20); ii++) {
            im_GC_models_04_04_00_76_08(u32(o + 8) + (ii * 1) + g.m, ii, x[i].section_08);
        }
        u32(o + 12) ? im_GC_models_04_04_00_76_12(u32(o + 12) + g.m, x[i].section_12, u32(o + 16)) : 0;
        u32(o + 16) ? e = im_GC_models_04_04_00_76_16(u32(o + 16) + g.m, x[i].section_16, u32(o + 4)) : 0;

        // for (let ii = 0; ii < u32(o + 4); ii++) {
        //     im_GC_models_04_04_00_76_16(u32(o + 16) + (ii * 1) + g.m, ii, x[i].section_16);
        // }
        return e

    }
    function im_GC_models_04_04_00_76_08(o, i, x) {
        x.push({
            u8_00: u8(o + 0),
        });

    }
    function im_GC_models_04_04_00_76_12(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, a + g.m),
        });

        // ? bytes;

    }
    function im_GC_models_04_04_00_76_16(o, x, a) {
        x.push({
            // id: gen_id(),
            temp_buffer: buffer.slice(o, o + a),
        });
        return o + a

    }
}

function im_models_(o, i, x) {
    x.push({
        id: gen_id(),
        u16_00: u16(o + 0),
        u16_02: u16(o + 2),
        //amount?
        section_04: [],
        unordered_model_name_08: 0,
        section_12: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
    });

    //64 bytes

    // for (let ii = 0; ii < u32(o + 2); ii++) {
    //     im_models_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    // }
    // x[i].unordered_model_name_08 = in_ml(u32(o + 8), g.model_name_array, im_model_name, g.unordered_ref.model_name);

    // for (let ii = 0; ii < u32(o + 2); ii++) {
    //     im_models_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    // }
    return x[i].id
}
function im_models_04(o, i, x) {
    x.push({
        id: gen_id(),
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    u32(o + 4) ? im_models_04_04(u32(o + 4) + g.m, x[i].section_04) : 0;

}
function im_models_12(o, i, x) {
    x.push({
        id: gen_id(),
        f32_00: f32(o + 0),
    });

}
function im_models_04_04(o, x) {
    x.push({
        section_00: [],
    });

    u32(o + 0) ? im_models_04_04_00(u32(o + 0) + g.m, x[0].section_00) : 0;

}
function im_models_04_04_00(o, x) {
    x.push({
        u32_00: u32(o + 0),
        u32_08: u32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        animation_36: im_patch(g.animation_patch_ref, o + 36),
        texture_40: im_patch(g.texture_patch_ref, o + 40),
        // unknown_44: // unknown(o + 44),
        u8_49: u8(o + 49),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        u32_56: u32(o + 56),
        //amount?
        u32_60: u32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        //check this
        u32_72: u32(o + 72),
        //check this
        u32_76: u32(o + 76),
        //check this
        u32_80: u32(o + 80),
        //check this
        u32_84: u32(o + 84),
        //check this
        u32_88: u32(o + 88),
        section_92: [],
    });

    u32(o + 92) ? im_models_04_04_00_92(u32(o + 92) + g.m, x[0].section_92) : 0;

}
function im_models_04_04_00_92(o, x) {
    x.push({
        u32_00: u32(o + 0),
        //amount?
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    u32(o + 12) ? im_models_04_04_00_92_12(u32(o + 12) + g.m, x[0].section_12) : 0;

}
function im_models_04_04_00_92_12(o, x) {
    x.push({
        u8_00: u8(o + 0),
    });

}

// function im_models(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u16_00: u16(o + 0),
//         u16_02: u16(o + 2),
//         //amount?
//         section_04: [],
//         section_08: [im_string(u32(o + 8), 0, false)],
//         section_12: [],
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         f32_24: f32(o + 24),
//         f32_28: f32(o + 28),
//         f32_32: f32(o + 32),
//         f32_36: f32(o + 36),
//         f32_40: f32(o + 40),
//         f32_44: f32(o + 44),
//         f32_48: f32(o + 48),
//         f32_52: f32(o + 52),
//         f32_56: f32(o + 56),
//         f32_60: f32(o + 60),
//     });

//     for (let ii = 0; ii < u16(o + 2); ii++) {
//         im_models_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
//     }

//     for (let ii = 0; ii < u16(o + 2); ii++) {
//         im_models_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
//     }
//     return x[i].id
//     // 64 bytes;

// }
// function im_models_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u32_00: u32(o + 0),
//         //amount?
//         section_04: [],
//     });

//     for (let ii = 0; ii < u32(o + 0); ii++) {
//         im_models_04_04(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_04);
//     }

// }
// function im_models_12(o, i, x) {
//     x.push({
//         id: gen_id(),
//         f32_00: f32(o + 0),
//     });

// }
// function im_models_04_04(o, i, x) {
//     x.push({
//         id: gen_id(),
//         section_00: [],
//     });

//     u32(o + 0) ? im_models_04_04_00(u32(o + 0) + g.m, x[i].section_00) : 0;

// }
// function im_models_04_04_00(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         u32_08: u32(o + 8),
//         u8_12: u8(o + 12),
//         u8_13: u8(o + 13),
//         u8_15: u8(o + 15),
//         u32_16: u32(o + 16),
//         u32_24: u32(o + 24),
//         u32_28: u32(o + 28),
//         animation_36: im_patch(g.animation_patch_ref, o + 36),
//         texture_40: im_patch(g.texture_patch_ref, o + 40),
//         u8_44: u8(o + 44),
//         u8_45: u8(o + 45),
//         u8_46: u8(o + 46),
//         u8_47: u8(o + 47),
//         u8_49: u8(o + 49),
//         u8_52: u8(o + 52),
//         u8_53: u8(o + 53),
//         u8_54: u8(o + 54),
//         u8_55: u8(o + 55),
//         u32_56: u32(o + 56),
//         //amount?
//         u32_60: u32(o + 60),
//         u32_64: u32(o + 64),
//         section_68: [],
//         section_72: [],
//         section_76: [],
//         section_80: [],
//         section_84: [],
//         u32_88: u32(o + 88),
//         section_92: [],
//     });

//     let entries = 0
//     u32(o + 92) ? entries = im_models_04_04_00_92(u32(o + 92) + g.m, x[0].section_92) : 0;

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_68(u32(o + 68) + (i * 36) + g.m, i, x[0].section_68);
//     }

//     for (let i = 0; i < u32(o+56); i++) {
//         im_models_04_04_00_72(u32(o + 72) + (i * 4) + g.m, i, x[0].section_72);
//     }

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_76(u32(o + 76) + (i * 12) + g.m, i, x[0].section_76);
//     }

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_80(u32(o + 80) + (i * 8) + g.m, i, x[0].section_80);
//     }

//     for (let i = 0; i < entries; i++) {
//         im_models_04_04_00_84(u32(o + 84) + (i * 1) + g.m, i, x[0].section_84);
//     }

//     // 96 bytes;

// }
// function im_models_04_04_00_68(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//         f32_08: f32(o + 8),
//         f32_12: f32(o + 12),
//         f32_16: f32(o + 16),
//         f32_20: f32(o + 20),
//         f32_24: f32(o + 24),
//         f32_28: f32(o + 28),
//         f32_32: f32(o + 32),
//     });

// }
// function im_models_04_04_00_72(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         u8_00: u8(o + 0),
//         u8_01: u8(o + 1),
//         u8_02: u8(o + 2),
//         u8_03: u8(o + 3),
//     });

// }
// function im_models_04_04_00_76(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//         f32_08: f32(o + 8),
//     });

// }
// function im_models_04_04_00_80(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         f32_00: f32(o + 0),
//         f32_04: f32(o + 4),
//     });

// }
// function im_models_04_04_00_84(o, i, x) {
//     x.push({
//         // id: gen_id(),
//         u8_00: u8(o + 0),
//     });

// }
// function im_models_04_04_00_92(o, x) {
//     x.push({
//         u32_00: u32(o + 0),
//         //amount?
//         u32_08: u32(o + 8),
//         //amount?
//         section_12: [],
//     });

//     for (let i = 0; i < u32(o + 8); i++) {
//         im_models_04_04_00_92_12(u32(o + 12) + (i * 1) + g.m, i, x[0].section_12);
//     }

//     return u32(o + 0)

//     // 16 bytes;

// }
// function im_models_04_04_00_92_12(o, i, x) {
//     x.push({
//         id: gen_id(),
//         u8_00: u8(o + 0),
//     });

// }
