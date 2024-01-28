function get_share(o, x, gshareoffset) {
    //
    for (let i = 0, ii = 0; i < u32(o) && u32(o + i) !== 0; i += 4,
    ii++) {
        im_models(u32(o + i) + o, ii)
        // get_model_share(u32(g.m + i) + g.m, XFA.models, ii)

    }

    if (g.file_dir_type === 'share' && g.texture_patch_ref.length === 69) {
        //

        // if (u32(offset + 0,  ) != 0) {
        //     XFA[0].name = get_string(u32(offset + 0,  ) + g.m, 0, false)
        // }
        x.push({
            id: gen_id(),
            name: [im_string(u32(gshareoffset + 0), 0, false)],
            texture_array: [],
            sound_array: [],
            model_array: []
        })

        // texture_56: im_patch(g.texture_patch_ref, o + 56),

        let texture_offset = u32(gshareoffset + 8) + g.m
        let sound_offset = u32(gshareoffset + 16) + g.m
        let model_offset = u32(gshareoffset + 24) + g.m

        for (let i = 0; i < u32(gshareoffset + 4); i++) {
            gettextureshrae(texture_offset + (i * 4), x[0].texture_array)
        }
        for (let i = 0; i < u32(gshareoffset + 12); i++) {
            gettsoundshare(sound_offset + (i * 4), x[0].sound_array)
        }
        for (let i = 0; i < u32(gshareoffset + 20); i++) {
            getmodelshare(model_offset + (i * 4), x[0].model_array)
        }

        //     let patch_array = get_patch_offset_index(texture_patch, texture_offset - g.m + (i * 4))
        //     if (patch_array != -1) {
        //         XFA[0].texture_array.push(patch_array)
        //     }
        // }
        // let sound_offset = u32(gshareoffset + 16) + g.m
        // for (let i = 0; i < u32(gshareoffset + 12); i++) {
        //     let patch_array = get_patch_offset_index(sound_patch, sound_offset - g.m + (i * 4))
        //     if (patch_array != -1) {
        //         XFA[0].sound_array.push(patch_array)
        //     }
        // }

        // let model_offset = u32(gshareoffset + 24) + g.m
        // for (let i = 0; i < u32(gshareoffset + 20); i++) {
        //     let patch_array = get_patch_offset_index(model_patch, model_offset - g.m + (i * 4))
        //     if (patch_array != -1) {
        //         XFA[0].model_array.push(patch_array)
        //     }
        // }

    }

    function gettextureshrae(o, x) {
        x.push({
            texture: im_patch(g.texture_patch_ref, o),
        })
    }
    function gettsoundshare(o, x) {
        x.push({
            texture: im_patch(g.sound_patch_ref, o),
        })
    }
    function getmodelshare(o, x) {
        x.push({
            texture: im_patch(g.model_patch_ref, o),
        })
    }

}
