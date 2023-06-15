function get_link_header(offset, XFA) {

    if (u32(offset + 12, is_little_endian) != 0) {
        main_menu_Intrface_offset = u32(offset + 12, is_little_endian) + offset_mid
        main_menu_Intrface_index = u32(offset + 16, is_little_endian)
    }
    if (u32(offset + 20, is_little_endian) != 0) {
        main_menu_loading_offset = u32(offset + 20, is_little_endian) + offset_mid
        main_menu_loading_index = u32(offset + 24, is_little_endian)
    }
    if (u32(offset + 36, is_little_endian) != 0) {
        main_menu_kart_offset = u32(offset + 36, is_little_endian) + offset_mid
    }
    if (u32(offset + 40, is_little_endian) != 0) {
        main_menu_item_offset = u32(offset + 40, is_little_endian) + offset_mid
    }

    XFA.push({
        id: gen_id(),
        section_1: [],
        section_intro: [],
        section_main: [],
        section_demo: [],
        section_font: [],
        section_mystery: [],
        texture_1: [],
        texture_2: [],
        menu_Intrface_name: get_string(main_menu_Intrface_offset, 0, false),
        menu_Intrface_index: main_menu_Intrface_index,
        menu_loading_name: get_string(main_menu_loading_offset, 0, false),
        menu_loading_index: main_menu_loading_index,
        menu_kart_name: get_string(main_menu_kart_offset, 0, false),
        menu_item_name: get_string(main_menu_item_offset, 0, false),
    })

    // xdx is 64 bytes

    if (u32(offset, is_little_endian) != 0) {
        get_link_1(u32(offset, is_little_endian) + offset_mid, XFA[0].section_1)
    }
    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        console.log(XFA)
        get_link_2(u32(offset + 8, is_little_endian) + offset_mid + (i * 16), i, XFA[0].section_intro)
    }

    for (let i = 0; i < u32(offset + 28, is_little_endian); i++) {
        get_link_5(u32(offset + 32, is_little_endian) + offset_mid + (i * 8), i, XFA[0].section_main)
    }

    if (u32(offset + 48, is_little_endian) != 0) {
        get_link_8(u32(offset + 48, is_little_endian) + offset_mid, XFA[0].section_demo)
    }
    if (u32(offset + 52, is_little_endian) != 0) {
        //check if in patch list
        let patch_array = get_patch_offset_index(texture_patch, offset + 52 - offset_mid)
        if (patch_array != -1) {
            XFA[0].texture_1 = patch_array
        }
    }

    if (u32(offset + 56, is_little_endian) != 0) {
        //check if in patch list
        let patch_array = get_patch_offset_index(texture_patch, offset + 56 - offset_mid)
        if (patch_array != -1) {
            XFA[0].texture_2 = patch_array
        }
    }

    // texture_patch.indexOf()

    if (u32(offset + 60, is_little_endian) != 0) {
        get_link_9(u32(offset + 60, is_little_endian) + offset_mid, XFA[0].section_font)
    }

    for (let i = 0; i < u32(offset + 64, is_little_endian); i++) {
        get_link_10(u32(offset + 68, is_little_endian) + offset_mid + (i * 4), i, XFA[0].section_mystery)
    }

    function get_link_10(offset, i, XFA) {
        XFA.push(u32(offset, is_little_endian))

    }

    function get_link_9(offset, XFA) {

        XFA.push({
            id: gen_id(),
            letter_array: [],
            letter_settings_a: [],
            texture: [],
            recusive: [],
            unknown_0: u16(offset + 8, is_little_endian),
            unknown_1: u8(offset + 10, is_little_endian),
            unknown_2: f32(offset + 12, is_little_endian),
            unknown_3: u32(offset + 24, is_little_endian),
        })

        if (u32(offset, is_little_endian) != 0) {
            //check if in patch list
            let patch_array = get_patch_offset_index(texture_patch, offset - offset_mid)
            if (patch_array != -1) {
                XFA[0].texture = patch_array
            }
        }

        for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
            get_link_9_1(u32(offset + 28, is_little_endian) + offset_mid + (i * 32), XFA[0].letter_settings_a, )
        }
        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            get_link_9_2(u32(offset + 36, is_little_endian) + offset_mid + (i * 12), XFA[0].letter_array, i)
        }

    }

    function get_link_9_2(offset, XFA, i) {

        XFA.push([u32(offset, is_little_endian), f32(offset + 4, is_little_endian), f32(offset + 8, is_little_endian)])

    }
    function get_link_9_1(offset, XFA) {
        XFA.push({
            unknown_1: f32(offset, is_little_endian)
        })

    }
    function get_link_5(offset, i, XFA) {
        XFA.push([])

        get_link_5_1(u32(offset, is_little_endian) + offset_mid, i, XFA[i])

    }
    function get_link_5_1(offset, i, XFA) {
        XFA.push([], gen_id())

        for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
            get_link_5_1_1(u32(offset + 4, is_little_endian) + offset_mid + (ii * 32), i, ii, XFA[0])
        }

    }
    function get_link_5_1_1(offset, i, ii, XFA) {

        XFA.push([{
            loading: [],
            name: [],
            interface: [],
            unknown: [],
            save: []
        }, gen_id()])

        for (iii = 0; iii < u32(offset, is_little_endian); iii++) {
            get_link_5_1_1_1(u32(offset + 4, is_little_endian) + offset_mid + (iii * 16), i, ii, iii, XFA[ii][0].save)
        }
        if (u32(offset + 8, is_little_endian) != 0) {
            get_link_5_1_1_2(u32(offset + 8, is_little_endian) + offset_mid, i, ii, XFA[ii][0].loading)
        }

        if (u32(offset + 12, is_little_endian) != 0) {
            get_link_5_1_1_3(u32(offset + 12, is_little_endian) + offset_mid, i, ii, XFA[ii][0].name)
        }

        for (let iii = 0; iii < u32(offset + 16, is_little_endian); iii++) {
            get_link_5_1_1_4(u32(offset + 20, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[ii][0].interface)
        }
        for (let iii = 0; iii < u32(offset + 24, is_little_endian); iii++) {
            get_link_5_1_1_5(u32(offset + 28, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[ii][0].unknown)
        }

    }

    function get_link_5_1_1_5(offset, i, ii, iii, XFA) {

        XFA.push({
            a: [],
            unknown: u32(offset + 8, is_little_endian)
        })

        for (let iiii = 0; iiii < u32(offset, is_little_endian); iiii++) {
            get_link_5_1_1_5_1(u32(offset + 4, is_little_endian) + offset_mid + (iiii * 8), i, ii, iii, iiii, XFA[iii].a)
        }

    }
    function get_link_5_1_1_5_1(offset, i, ii, iii, iiii, XFA) {
        XFA.push([])

        get_link_5_1_1_5_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, iiii, XFA[iiii])

    }
    function get_link_5_1_1_5_1_1(offset, i, ii, iii, iiii, XFA) {

        XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    }
    function get_link_5_1_1_4(offset, i, ii, iii, XFA) {

        XFA.push({
            a: [],
            unknown: u32(offset + 8, is_little_endian)
        })

        for (let iiii = 0; iiii < u32(offset, is_little_endian); iiii++) {
            get_link_5_1_1_4_1(u32(offset + 4, is_little_endian) + offset_mid + (iiii * 8), i, ii, iii, iiii, XFA[iii].a)
        }

    }
    function get_link_5_1_1_4_1(offset, i, ii, iii, iiii, XFA) {

        XFA.push([])

        get_link_5_1_1_4_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, iiii, XFA[iiii])

    }
    function get_link_5_1_1_4_1_1(offset, i, ii, iii, iiii, XFA) {

        XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    }

    function get_link_5_1_1_3(offset, i, ii, XFA) {

        XFA.push(get_string(offset, 0, false))

    }

    function get_link_5_1_1_2(offset, i, ii, XFA) {

        XFA.push(get_string(u32(offset, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    }
    function get_link_5_1_1_1(offset, i, ii, iii, XFA) {

        XFA.push([])
        get_link_5_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, i, ii, iii, XFA[iii])

    }
    function get_link_5_1_1_1_1(offset, i, ii, iii, XFA) {

        XFA.push(get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false), u32(offset + 4, is_little_endian))

    }

    function get_link_8(offset, XFA) {

        XFA.push({
            unknown_0: u32(offset + 0, is_little_endian),
            unknown_1: u32(offset + 4, is_little_endian),
            link_array: []
        })

        get_link_8_1(u32(offset + 8, is_little_endian) + offset_mid, XFA[0].link_array)

    }

    function get_link_8_1(offset, XFA) {

        XFA.push([])

        for (let i = 0; i < u32(offset, is_little_endian); i++) {
            get_link_8_1_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 32), i, XFA[0])
        }

    }
    function get_link_8_1_1(offset, i, XFA) {

        ii = 0
        XFA.push({
            id: gen_id(),
            loading: [],
            name: [],
            interface: [],
            unknown: [],
            save: []
        })

        for (iii = 0; iii < u32(offset, is_little_endian); iii++) {
            get_link_5_1_1_1(u32(offset + 4, is_little_endian) + offset_mid + (iii * 16), i, ii, iii, XFA[i].save)
        }
        if (u32(offset + 8, is_little_endian) != 0) {
            get_link_5_1_1_2(u32(offset + 8, is_little_endian) + offset_mid, i, ii, XFA[i].loading)
        }

        if (u32(offset + 12, is_little_endian) != 0) {
            get_link_5_1_1_3(u32(offset + 12, is_little_endian) + offset_mid, i, ii, XFA[i].name)
        }

        for (let iii = 0; iii < u32(offset + 16, is_little_endian); iii++) {
            get_link_5_1_1_4(u32(offset + 20, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[i].interface)
        }
        for (let iii = 0; iii < u32(offset + 24, is_little_endian); iii++) {
            get_link_5_1_1_5(u32(offset + 28, is_little_endian) + offset_mid + (iii * 12), i, ii, iii, XFA[i].unknown)
        }

    }

    function get_link_2(offset, i, XFA) {

        if (u32(offset + 0, is_little_endian) === 0) {
            XFA.push({
                intro: get_string(u32(offset + 4, is_little_endian) + offset_mid, 0, false),
                section_1: []
            })
            console.log(offset, XFA)
            get_link_2_1(u32(offset + 8, is_little_endian) + offset_mid, XFA[i].section_1)
        } else {
            console.log(XFA)
            get_link_2_2(u32(offset + 12, is_little_endian) + offset_mid, XFA)
        }

    }

    function get_link_2_1(offset, XFA) {
        console.log(offset, XFA)
        XFA.push({
            unknown: u8(offset + 1, is_little_endian)
        })

    }

    function get_link_2_2(offset, XFA) {

        XFA.push({
            filename: get_string(u32(offset + 0, is_little_endian) + offset_mid, 0, false),
            file_index: u32(offset + 4, is_little_endian)
        })

    }

    function get_link_1(offset, XFA) {

        XFA.push({
            unknown: u32(offset, is_little_endian),
            section_1: []
        })
        get_link_1_1(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_1)

    }

    function get_link_1_1(offset, XFA) {
        XFA.push({
            section_1: []
        })
        get_link_1_1_1(u32(offset + 0, is_little_endian) + offset_mid, XFA[0].section_1)

    }

    function get_link_1_1_1(offset, XFA) {
        XFA.push({
            section_1: [],
            unknown: u32(offset + 8, is_little_endian)
        })

        get_link_1_1_1_1(u32(offset + 4, is_little_endian) + offset_mid, XFA[0].section_1)

    }

    function get_link_1_1_1_1(offset, XFA) {
        XFA.push({
            unknown: u32(offset + 20, is_little_endian)
        })

    }

}
