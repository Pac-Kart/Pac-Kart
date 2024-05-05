"use strict";
function ex_share(o, x) {
    // calculate how many models
    // first offset is always 0?

    let end_block = (x.models.length)
    let temp_offset = (end_block * 4) + o
    end_block = divisible(end_block, 8)
    end_block = (end_block * 4) + o

    let share_model_offset_index_list = []

    for (let i = 0; i < x.models.length; i++) {
        su32(o + (i * 4), end_block)
        g.model_patch_array.push([o + (i * 4), i, 0])
        share_model_offset_index_list.push(end_block)
        // FIX imperfect ?
        end_block = dyn_model(end_block, x.models[i])

    }

    if (g.ordered_ref.texture_animation.length) {
        //this is calculated later
        g.tex_anims = end_block
        g.oa.push(g.tex_anims)
        end_block += divisible(g.ordered_ref.texture_animation.length * 12, g.divisibility)
    }

    end_block = ex_byte_alignment_testing(end_block)

    if (g.ordered_ref.textures.length) {
        dynamic_buffer = datapack_buffer

        su32(20, g.ordered_ref.textures.length)
        su32(24, end_block)
        dynamic_buffer = ordered_buffer

        let temp_offset = end_block
        end_block += divisible(g.ordered_ref.textures.length * 64, g.divisibility) + g.ordered_ref.texturepadding
        for (let i = 0; i < g.ordered_ref.textures.length; i++) {
            end_block = ex_textures(temp_offset + (i * 64), end_block, g.ordered_ref.textures[i])
        }
        ;
    }

    end_block = ex_byte_alignment_testing(end_block)
    if (x.file_specific.length) {
        end_block = share_low_header(end_block - 16, x.file_specific[0])
    }

    return end_block

    function share_low_header(o, x) {
        let e = o + 32

        // if (x.name != null) {
        //     g.oa.push(offset  )
        //     su32(offset, end_block   )
        //     end_block = dyn_string(end_block, x.name, g.m)
        // }
        e = ex_string(o + 0, e, x.name)

        if (x.texture_array.length) {
            su32(o + 4, x.texture_array.length)
            su32(o + 8, e)
            g.oa.push(o + 8)
            let temp_offset = e
            e += divisible(x.texture_array.length * 4, g.divisibility)
            for (let i = 0; i < x.texture_array.length; i++) {
                sharegettexture(temp_offset + (i * 4), e, x.texture_array[i])
            }
            ;
        }

        // if (x.texture_array.length !== 0) {
        //     g.oa.push(offset +8  )
        //     su32(offset + 4, x.texture_array.length )
        //     su32(offset + 8, end_block   )
        //     let t_i = 0

        //     for (; t_i < x.texture_array.length; t_i++) {
        //         sharegettexture()
        //     }
        //         // su32(end_block + (t_i * 4), 0xffff )
        //     }
        //     t_i = divisible(t_i, 4)
        //     end_block += (t_i * 4)
        // }

        if (x.sound_array.length) {
            su32(o + 12, x.sound_array.length)
            su32(o + 16, e)
            g.oa.push(o + 16)
            let temp_offset = e
            e += divisible(x.sound_array.length * 4, g.divisibility)
            for (let i = 0; i < x.sound_array.length; i++) {
                sharegetsound(temp_offset + (i * 4), e, x.sound_array[i])
            }
            ;
        }

        // if (x.sound_array.length !== 0) {
        //     g.oa.push(offset +16  )
        //     su32(offset + 12, x.sound_array.length )
        //     su32(offset + 16, end_block   )
        //     let s_i = 0
        //     for (; s_i < x.sound_array.length; s_i++) {
        //         if (x.sound_array[s_i][0] != -1) {
        //             su32(end_block + (s_i * 4), x.sound_array[s_i][0][1] )
        //             g.sound_patch_array.push([end_block + (s_i * 4)  , x.sound_array[s_i][0][1], x.sound_array[s_i][0][2]])
        //         }
        //         // su32(end_block + (s_i * 4), 0xffff )
        //     }
        //     s_i = divisible(s_i, 4)
        //     end_block += (s_i * 4)
        // }

        if (x.model_array.length) {
            su32(o + 20, x.model_array.length)
            su32(o + 24, e)
            g.oa.push(o + 24)
            let temp_offset = e
            e += divisible(x.model_array.length * 4, g.divisibility)
            for (let i = 0; i < x.model_array.length; i++) {
                sharegetmodel(temp_offset + (i * 4), e, x.model_array[i])
            }
            ;
        }

        // if (x.model_array.length !== 0) {
        //     g.oa.push(offset +24  )
        //     su32(offset + 20, x.model_array.length )
        //     su32(offset + 24, end_block   )
        //     let m_i = 0
        //     for (; m_i < x.model_array.length; m_i++) {
        //         if (x.model_array[m_i][0] != -1) {
        //             // su32(end_block + (m_i * 4), x.model_array[m_i][0][0] )
        //             // su32(end_block + (m_i * 4), 542656838 )
        //             // console.log('end_block + (m_i * 4)  ',end_block + (m_i * 4)  )
        //             // g.model_patch_array.push([end_block + (m_i * 4)  , m_i, 0])

        //             // console.log(patch_array, 'patch_array')
        //             su32(end_block + (m_i * 4), share_model_offset_index_list[m_i] )
        //             g.model_patch_array.push([end_block + (m_i * 4)  , m_i, 0])

        //         }
        //         // su32(end_block + (m_i * 4), 0xffff )
        //     }
        //     m_i = divisible(m_i, 4)
        //     end_block += (m_i * 4)
        // }
        return e
    }

    function sharegettexture(o, e, x) {
        ex_patch(o, g.texture_patch_array, x.texture);
    }
    function sharegetsound(o, e, x) {
        ex_patch(o, g.sound_patch_array, x.texture);
    }
    function sharegetmodel(o, e, x) {// e = ex_ml(x.ordered_models_00, g.models_array, ex_models, g.ordered_ref.models, o + 0, e, 'none',true,"model",temp_offset);

    // ex_patch(o, g.texture_patch_array, x.texture);
    }

}
