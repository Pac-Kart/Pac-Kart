// dynamic file | generate .x* file array [XFA] then append file list from Viewer/dynamic__x_generator

function get_X(selected_game, selected_console, file_name) {
    let e = is_little_endian

    id_list = [];

    XFA.push({
        id: gen_id(),
        game: selected_game,
        name: file_name,
        version: u32(8, e)
    })

    // 0th entry in XFA = header info

    for (let i = 0; i < u32(12, e); i++) {
        get_X_directory(16 + (i * 24), i + 1)
    }

    return

    function get_X_directory(offset, XFA_index) {

        XFA.push({
            id: gen_id(),
            version: u32(offset + 0, e),
            type: u32(offset + 4, e),
            type_s: ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'][u32(offset + 4, e)],
            type_data: [],
            index: u32(offset + 8, e),
            bytelength: u32(offset + 16, e),
            linked_strings: [],
            sounds: [],
            patcher_texutre: [],
            patcher_texture_animation: [],
            patcher_sounds: [],
            patcher_models: [],
            patcher_general_offsets: [],
            models: [],
            model_animations_1: [],
            model_animations_2: [],
            textures: [],
            texture_animations: [],
        })

            model_array = []
            model_animations_1_array = []
            model_animations_2_array = []


        get_X_datapack(u32(offset + 20, e) + (u32(12, e) * 24) + 16, XFA_index)

    }

    function get_X_datapack(offset, XFA_index) {
        console.log(offset,'start')
        XFA_main = XFA[XFA_index]

        for (let i = 0; i < 21; i += 20) {
            let string_ = get_string(offset + 80 + i, 0, false)
            XFA[XFA_index].linked_strings.push({
                string: string_,
                unknown1: u32(offset + 92 + i, e),
                unknown2: u32(offset + 96 + i, e)
            })

        }

        //-----------------------------------------------
        //this will be removed once xpc is fully parsable
        XFA[XFA_index].patcher_texutre.push({
            amount: u32(offset + 16, e)
        })
        XFA[XFA_index].patcher_texture_animation.push({
            amount: u32(offset + 52, e)
        })
        XFA[XFA_index].patcher_sounds.push({
            amount: u32(offset + 28, e)
        })
        XFA[XFA_index].patcher_models.push({
            amount: u32(offset + 56, e)
        })
        XFA[XFA_index].patcher_general_offsets.push({
            amount: u32(offset + 12, e)
        })
        //-----------------------------------------------

        let offset_sounds = divisible(4 * (u32(offset + 8, e)), 32) + offset + 120
        for (let i = 0; i < u32(offset + 8, e); i++) {
            get_sound(offset + 120 + (i * 4), XFA[XFA_index].sounds, i, offset_sounds)
        }

        offset_mid = u32(offset + 4, e) + offset_sounds
        // to file patcher 1

        let temp_patcher_offset = offset_mid
        texture_patch = extract_patcher(temp_patcher_offset, u32(offset + 16, e))

        temp_patcher_offset = temp_patcher_offset + (u32(offset + 16, e) * 8)
        texture_animation_patch = extract_patcher(temp_patcher_offset, u32(offset + 52, e))

        temp_patcher_offset = temp_patcher_offset + (u32(offset + 52, e) * 8)
        sound_patch = extract_patcher(temp_patcher_offset, u32(offset + 28, e))

        offset_mid += divisible(8 * (u32(offset + 16, e) + u32(offset + 52, e) + u32(offset + 28, e)), 32)
        // after file patcher 1 | mid section header

        //for share
        let end_block = offset_mid

        model_patch = extract_patcher(u32(offset, e) + offset_mid, u32(offset + 56, e))
        for (let i = 0; i < u32(offset + 20, e); i++) {
            end_block = get_texture(offset_mid + u32(offset + 24, e) + (i * 64), XFA[XFA_index].textures, i)
        }
        for (let i = 0; i < u32(offset + 48, e); i++) {
            get_texture_animations(u32(offset + 60, e) + (i * 12) + offset_mid, XFA[XFA_index].texture_animations, i)
        }
        get_x_mid_section(XFA[XFA_index], end_block)
    }

    function get_x_mid_section(XFA, end_block) {

        if (XFA.type_s !== 'share' && XFA.type_s !== 'world') {
            let temp_offset_1 = u32(offset_mid + 4, e)
            let temp_offset_2 = u32(offset_mid + temp_offset_1, e)
            XFA.type_data.push({
                unknown_00: u32(offset_mid + 0, e),
                section_04: {
                    low_section_00: [],
                    unknown_04: u32(offset_mid + temp_offset_1 + 4, e)
                },
            })

            if (XFA.type_s === "car") {//wip
            } else if (XFA.type_s === "interface") {
                get_interface(temp_offset_2 + offset_mid, XFA, temp_offset_2)
            } else if (XFA.type_s === "link") {
                get_link_header(temp_offset_2 + offset_mid, XFA.type_data[0].section_04.low_section_00)

            }
        } else if (XFA.type_s === "share") {
            get_share(end_block, XFA.type_data)
            for (let i = 0, ii = 0; i < u32(offset_mid, e) && u32(offset_mid + i, e) !== 0; i += 4,
            ii++) {
                get_model(u32(offset_mid + i, e) + offset_mid, ii)
                // get_model_share(u32(offset_mid + i, e) + offset_mid, XFA.models, ii)

            }
        } else if (XFA.type_s === "world") {//wip
        }

    }
}
