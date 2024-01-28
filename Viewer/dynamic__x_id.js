// function gen_id() {

//     let id_check = false
//     while (id_check === false) {
//         id = temp()

//         id_list.includes(id) ? 0 : id_check = true

//         function temp() {
//             return id = "id|" + Math.random().toString(16).slice(2)
//         }
//     }

//     id_list.push(id)

//     return id

// }

// function gen_id() {
// old
//     let id;
//     do {
//         id = generateRandomId();
//     } while (id_list.includes(id));

//     id_list.push(id);

//     return id;

//     function generateRandomId() {
//         // return "id|" + Math.random().toString(16).slice(2);
//         // return Math.random();
//         return id_list.length;
//     }
// }
function gen_id() {
    let id = id_list.length
    id_list.push(id);
    return id;
}

// function delete_id(id) {

//     let index = id_list.indexOf(id)
//     if (index != -1) {
//         id_list.splice(index, 1)
//         return true
//     } else {
//         return null
//     }

// }

function delete_id(id) {
    const index = id_list.indexOf(id);

    if (index !== -1) {
        id_list.splice(index, 1);
        return true;
    }

    return null;
}

// document.getElementById('file_viewer').querySelectorAll(`div [data-type="x_d_models_folder"][data-XFA="1"]`)[0]
//<a data-type="x_d_models_folder" data-xfa="1" class="file_hover_not_selected"> models </a>

function find_id(targetId, type) {
    const id = parseInt(targetId);
    let temp = ''

    // console.log(id, type)
    var path = ''
    if (type === "x_d_folder") {
        return x[0].id === id ? '[0]' : ['idk'];
    } else {
        for (let i = 0; i < x[0].directory.length; i++) {
            find_id__directory(x[0].directory[i], i)
            if (temp) {
                i = x[0].directory.length
            }
        }

    }
    if (temp === '') {
        console.log('null')
    }
    return temp

    //////////////
    //////////////
    //////////////
    //////////////
    function find_id__directory(x, i) {
        let html = `[0].directory[${i}]`
        if (type === 'x_d_sub_file') {
            if (x.id === id) {
                return temp = [html, i]
            }
        } else {
            find_id__datapack(x.datapack[0], html, x.id)

            // if (type === "x_d_sound_folder" || type === "x_d_sound") {
            //      find_id__sound_folder(x.datapack[0], html, x.id)
            // } else if (type === "x_d_model_folder" || type === "x_d_model_header" || type === "x_d_model_section" || type === "x_d_model") {//  find_id__model_folder(XFA.models, html, x.id)
            // } else if (type === "x_d_textures_folder" || type === "x_d_textures") {//  find_id__texture_folder(XFA.textures, html, XFA.id)
            // } else if (type === "x_d_texture_animations_folder" || type === "x_d_texture_animation" || type === "x_d_texture_animation_pattern" || type === "x_d_texture_animation_color" || type === "x_d_texture_animation_translation") {//  find_id__texture_animation_folder(XFA.texture_animations, html, XFA.id)
            // }
            // if (XFA.type_s === 'link') {//  find_id__link_folder(XFA.type_data[0].section_04.low_section_00[0], html)
            // } else if (XFA.type_s === 'share') {//  find_id__share(XFA.type_data[0], html)
            // } else if (XFA.type_s === 'interface') {//  find_id__interface(XFA.type_data[0].section_04.low_section_00[0], html, XFA.id)
            // }
        }

    }

    function find_id__datapack(x, path, i) {
        let html = `.datapack[0]`
        switch (type) {
        case "x_d_sound_folder":
        case "x_d_sound":
            find_id__sound_folder(x, path + html, x.id)
            break
        default:
            find_id__orderd(x, path + html, i)
        }

    }

    function find_id__orderd(x, path, i) {
        let html = `.ordered[0]`
        switch (type) {
        case "x_d_textures_folder":
        case "x_d_textures":
            find_id__texture_folder(x.ordered[0].textures, path + html, i)
            break
        case "x_d_models__folder":
        case 'x_d_models__file':
        case 'x_d_model__sections':
        case 'x_d_model__model':
        case "x_d_model_animation_1__folder":
        case 'x_d_model_animation_1__file':
        case "x_d_model_animation_2__folder":
        case 'x_d_model_animation_2__file':
        find_id__model_folder(x.ordered[0].models, path + html, i)
    break
        default:
            find_id__unordered(x.ordered[0], path + html, i)
        }
    }

    function find_id__unordered(x, path, i) {
        let html = `.unordered[0]`
        let xtype = type.replace('x_d_', '').split('__')[0]
        switch (type) {
        case 'x_d_' + xtype + '__folder':
            // case 'x_d_car__folder':
            // case 'x_d_link__folder':
            // case 'x_d_idk__folder':
            // case 'x_d_interface__folder':
            // case 'x_d_frame_sparkler__folder':
            // case 'x_d_frame_font__folder':
            // case 'x_d_frame_multi_font__folder':
            // case 'x_d_frame_text__folder':
            // case 'x_d_sound_controls__folder':
            // case 'x_d_sound_section__folder':
            // case 'x_d_model_link__folder':
            // case 'x_d_model_sub_link__folder':
            // case 'x_d_wtf__folder':
            // case 'x_d_unknown__folder':
            // case 'x_d_unknown_00__folder':
            // case 'x_d_activator__folder':
            // case 'x_d_flag__folder':
            // case 'x_d_var__folder':
            // case 'x_d_gate__folder':
            // case 'x_d_strange__folder':
            // case 'x_d_object__folder':
            // case 'x_d_um__folder':
            // case 'x_d_world_settings__folder':
            if (i === id) {
                return temp = [path + html + '.' + xtype, i]
            }
            break
        default:

            // for (let i = 0; i < x.unordered[0][xtype].length; i++) {
            //     xfilefunction[xtype](x.unordered[0][xtype], path + html + '.' + xtype, i)
            // }
            for (let i = 0; i < x.unordered[0][xtype].length; i++) {
                find_id__unordered_file(x.unordered[0][xtype], path + html + '.' + xtype, i, xtype)
            }
        }
    }

    function find_id__unordered_file(x, path, i, xtype) {
        let html = `[${i}]`
        switch (type) {
        case 'x_d_' + xtype + '__file':
            if (x[i].id === id) {
                return temp = [path + html, x[i].id]
            }
            break
        default:
            let xfilefunction = {
                car: find_id__car,
                link: find_id__link,
                idk: find_id__idk,
                interface: find_id__interface,
                frame_sparkler: find_id__frame_sparkler,
                frame_font: find_id__frame_font,
                frame_multi_font: find_id__frame_multi_font,
                frame_text: find_id__frame_text,
                sound_controls: find_id__sound_controls,
                sound_section: find_id__sound_section,
                model_link: find_id__model_link,
                model_sub_link: find_id__model_sub_link,
                wtf: find_id__wtf,
                unknown: find_id__unknown,
                unknown_00: find_id__unknown_00,
                activator: find_id__activator,
                flag: find_id__flag,
                var: find_id__var,
                gate: find_id__gate,
                strange: find_id__strange,
                object: find_id__object,
                um: find_id__um,
                world_settings: find_id__world_settings,
            }
            xfilefunction[xtype](x[i], path + html)
        }

    }

    function find_id__car(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__idk(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__interface(x, path) {
        switch (type) {
        case 'x_d_interface__layer_file':
            if (x.section_72.length) {
                find_id__interface_layer(x.section_72, path)
            }
            break
        }
    }
    function find_id__interface_layer(x, path) {
        let html = `.section_72`
        if (type === 'x_d_interface__layer_file') {
            let temp = path + html
            for (let i = 0; i < x.length; i++) {
                find_id__interface_layer_file(x[i], temp, i)
            }
        }
    }

    function find_id__interface_layer_file(x, path, i) {
        let html = `[${i}]`
        if (type === 'x_d_interface__layer_file') {
            if (x.id === id) {
                return temp = path + html

            }

        }
    }

    function find_id__frame_sparkler(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__frame_font(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__frame_multi_font(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__frame_text(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__sound_controls(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__sound_section(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__model_link(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__model_sub_link(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__wtf(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__unknown(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__unknown_00(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__activator(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__flag(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__var(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__gate(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__strange(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__object(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__um(x, path) {
        switch (type) {
        case '':
            break
        }
    }
    function find_id__world_settings(x, path) {
        switch (type) {
        case '':
            break
        }
    }

    function find_id__link(x, path) {
        switch (type) {
        case 'x_d_link__main':
        case 'x_d_link__main_group':
        case 'x_d_link__main_sub_group':
            if (x.section_32.length) {
                find_id__link_main(x.section_32, path)
            }
            if (x.section_48.length) {
                find_id__link_demo(x.section_48, path)
            }
            break
        case 'x_d_link__intro':
            find_id__link_intro(x.section_08, path)
            break
        case 'x_d_link__demo':
            find_id__link_demo(x.section_48, path)
            break
        }
    }

    function find_id__texture_animation_folder(XFA, path_string, prev_id) {
        let html = `.texture_animations`

        if (type === 'x_d_texture_animations_folder') {
            if (prev_id === id) {
                return temp = path_string + html
            }
        } else {
            for (let i = 0; i < XFA.length; i++) {
                find_id__texture_animation(XFA[i], path_string + html, i)
            }
        }
    }
    function find_id__texture_animation(XFA, path_string, i) {
        let html = `[${i}]`
        if (type === 'x_d_texture_animation') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string, i]
            }
        } else if (type === "x_d_texture_animation_pattern") {
            if (XFA.id === id) {
                return temp = path_string + html + ".pattern[0]"
            }
        } else if (type === "x_d_texture_animation_color") {
            if (XFA.id === id) {
                return temp = path_string + html + ".color"
            }
        } else if (type === "x_d_texture_animation_translation") {
            if (XFA.id === id) {
                return temp = path_string + html + ".translation"
            }
        }
    }
    function find_id__texture_folder(XFA, path_string, prev_id) {
        let html = `.textures`

        if (type === 'x_d_textures_folder') {
            if (prev_id === id) {
                return temp = path_string + html
            }
        } else {
            for (let i = 0; i < XFA.length; i++) {
                find_id__texture(XFA[i], path_string + html, i)
            }
        }
    }
    function find_id__texture(XFA, path_string, i) {
        let html = `[${i}]`
        if (type === 'x_d_textures') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string, i]
            }
        }
    }
    function find_id__model_folder(XFA, path_string, prev_id) {
        let html = `.models`

        if (type === 'x_d_models__folder') {
            if (prev_id === id) {
                return temp = path_string + html
            }
        } else {
            for (let i = 0; i < XFA.length; i++) {
                find_id__model_header(XFA[i], path_string + html, i)
            }
        }
    }
    function find_id__model_header(XFA, path_string, i) {
        let html = `[${i}]`
        if (type === 'x_d_models__file') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string, i]

            }
        } else {
            for (let i = 0; i < XFA.sections.length; i++) {
                find_id__model_section(XFA.sections[i], path_string + html, i)
            }
        }
    }
    function find_id__model_section(XFA, path_string, i) {
        let html = `.sections[${i}]`
        if (type === 'x_d_model__sections') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string, i]
            }
        } else {
            for (let i = 0; i < XFA.sub_section.length; i++) {
                find_id__model(XFA.sub_section[i], path_string + html, i)
            }
        }
    }
    function find_id__model(XFA, path_string, i) {
        let html = `.sub_section[${i}]`
        if (type === 'x_d_model__model') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string, i]
            }

        }
    }
    function find_id__sound_folder(x, path_string, prev_id) {
        let html = `.audio`
        if (type === 'x_d_sound_folder') {
            if (prev_id === id) {
                return temp = path_string + html
            }
        } else {
            for (let i = 0; i < x.audio[0].sound.length; i++) {
                find_id__sound(x.audio[0].sound[i], path_string + html, i)
            }
        }
    }
    function find_id__sound(x, path_string, i) {
        let html = `[0].sound[${i}]`
        if (type === 'x_d_sound') {
            if (x.id === id) {
                return temp = [path_string + html, path_string, i]
            }
        }
    }
    function find_id__share(XFA, path_string) {
        let html = '.type_data[0]'

        if (type === 'x_d_share') {
            if (XFA.id === id) {
                return temp = path_string + html
            }
        }
    }
    // function find_id__link_folder(XFA, path_string) {
    //     let html = '.type_data[0].section_04.low_section_00[0]'

    //     if (type === 'x_d_link_folder') {
    //         if (XFA.id === id) {
    //             return temp = path_string + html
    //         }
    //     } else {
    //         if (type === 'x_d_link_main' || type === 'x_d_link_main_group' || type === 'x_d_link_main_sub_group') {
    //             find_id__link_main(XFA.section_main, path_string + html)
    //         }
    //         if (type === 'x_d_link_intro') {
    //             find_id__link_intro(XFA.section_intro, path_string + html)
    //         }
    //         if (type === 'x_d_link_demo' || type === 'x_d_link_main_sub_group') {
    //             if (XFA.section_demo[0] !== null) {

    //                 find_id__link_demo(XFA.section_demo, path_string + html)
    //             }
    //         }

    //     }
    // }
    function find_id__link_intro(XFA, path_string) {
        let html = '.section_08'
        if (type === 'x_d_link__intro') {
            return temp = [path_string + html, path_string]

        }
    }
    function find_id__link_demo(XFA, path_string) {
        let html = '.section_48[0]'
        if (type === 'x_d_link__demo') {
            return temp = [path_string + html, path_string]

        } else {
            html += '.section_08[0].section_04'
            for (let i = 0; i < XFA[0].section_08[0].section_04.length; i++) {
                find_id__link_demo_sub_group(XFA[0].section_08[0].section_04[i], i, path_string + html)
            }
        }
    }

    function find_id__link_demo_sub_group(XFA, i, path_string) {
        if (type === 'x_d_link__main_sub_group') {
            // console.log(XFA.id, id)
            if (XFA.id === id) {
                return temp = [path_string + `[${i}]`, path_string, i]

            }

        } else {}
    }

    function find_id__link_main(XFA, path_string) {
        let html = '.section_32'
        if (type === 'x_d_link__main') {
            return temp = [path_string + html, path_string]

        } else {
            for (let i = 0; i < XFA.length; i++) {
                find_id__link_main_group(XFA[i], i, path_string + html)
            }

        }
        return ''
    }
    function find_id__link_main_group(XFA, i, path_string) {
        let html = `[${i}]`

        if (type === 'x_d_link__main_group') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string, i]

            }
        } else {
            for (let ii = 0; ii < XFA.section_00[0].section_04.length; ii++) {
                find_id__link_main_sub_group(XFA.section_00[0].section_04[ii], ii, path_string + html)
            }
        }

    }
    function find_id__link_main_sub_group(XFA, i, path_string) {
        let html = `.section_00[0].section_04[${i}]`
        // console.log(XFA.id)
        if (type === 'x_d_link__main_sub_group') {
            if (XFA.id === id) {
                return temp = [path_string + html, path_string + '.section_00[0].section_04', i]

            }

        }
    }
    // function find_id__interface(XFA, path_string, xfaid) {
    //     let html = `.type_data[0].section_04.low_section_00[0]`
    //     if (type === 'x_d_interface_folder') {
    //         if (xfaid === id) {
    //             return temp = path_string + html

    //         }

    //     } else {
    //         if (type === 'x_d_frames_folder' || type === 'x_d_frame' || type === 'x_d_varibles_folder' || type === 'x_d_varible' || type === 'x_d_layers_folder' || type === 'x_d_layer') {
    //             find_id__interface_frames_folder(XFA.frames, path_string + html, xfaid)
    //         } else if (type === 'x_d_texts_folder' || type === 'x_d_text') {
    //             find_id__interface_texts_folder(XFA.texts, path_string + html, xfaid)
    //         }
    //     }
    // }
    function find_id__interface_frames_folder(XFA, path_string, xfaid) {
        let html = `.frames`
        if (type === 'x_d_frames_folder') {
            if (xfaid === id) {
                return temp = path_string + html

            }

        } else {
            for (let i = 0; i < XFA.length; i++) {
                find_id__interface_frame(XFA[i], path_string + html, i)
            }
        }
    }
    function find_id__interface_frame(XFA, path_string, i) {
        let html = `[${i}]`
        if (type === 'x_d_frame') {
            if (XFA.id === id) {
                return temp = path_string + html

            }

        } else if (type === 'x_d_varibles_folder' || type === 'x_d_varible') {
            find_id__interface_varibles_folder(XFA.varibles_04[0].section_04, path_string + html, XFA.id)
        } else if (type === 'x_d_layers_folder' || type === 'x_d_layer') {
            find_id__interface_layers_folder(XFA.layers_72, path_string + html, XFA.id)
        }
    }
    function find_id__interface_varibles_folder(XFA, path_string, xfaid) {
        let html = `.varibles_04[0].section_04`
        if (type === 'x_d_varibles_folder') {
            if (xfaid === id) {
                return temp = path_string + html

            }

        } else if (type === 'x_d_varible') {
            let temp = path_string + html
            for (let i = 0; i < XFA.length; i++) {
                find_id__interface_varible(XFA[i], temp, i)
            }
        }
    }
    function find_id__interface_varible(XFA, path_string, i) {
        let html = `[${i}]`
        if (type === 'x_d_varible') {
            if (XFA.id === id) {
                return temp = path_string + html

            }

        }
    }

    function find_id__interface_layers_folder(XFA, path_string, xfaid) {
        let html = `.layers_72`
        if (type === 'x_d_layers_folder') {
            if (xfaid === id) {
                return temp = path_string + html

            }

        } else if (type === 'x_d_layer') {
            let temp = path_string + html
            for (let i = 0; i < XFA.length; i++) {
                find_id__interface_layer(XFA[i], temp, i)
            }
        }
    }
    // function find_id__interface_layer(XFA, path_string, i) {
    //     let html = `[${i}]`
    //     if (type === 'x_d_layer') {
    //         if (XFA.id === id) {
    //             return temp = path_string + html

    //         }

    //     }
    // }
    function find_id__interface_texts_folder(XFA, path_string, xfaid) {
        let html = `.texts`
        if (type === 'x_d_texts_folder') {
            if (xfaid === id) {
                return temp = path_string + html

            }

        } else {
            for (let i = 0; i < XFA.length; i++) {
                find_id__interface_text(XFA[i], path_string + html, i)
            }
        }
    }

    function find_id__interface_text(XFA, path_string, i) {
        let html = `[${i}]`
        if (type === 'x_d_text') {
            if (XFA.id === id) {
                return temp = path_string + html
            }

        }
    }
}

id_list = []
