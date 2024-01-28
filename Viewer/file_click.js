// function file_click() {

//     // check class
//     if (document.getElementsByClassName('file_is_highlighted').length === 1) {
//         document.getElementsByClassName('file_is_highlighted')[0].classList.remove('file_is_highlighted')
//     }
//     let path = ''
//     this.classList.add('file_is_highlighted')

//     if (this.dataset.type === 'x_folder') {
//         load_folder()
//     } else if (this.dataset.type === 'x_sub_file') {
//         load_sub_file(parseInt(this.dataset.offset));
//     } else if (this.dataset.type === 'x_sub_file_header') {
//         load_sub_file_header(parseInt(this.dataset.offset));
//     } else if (this.dataset.type === "x_sound") {
//         load_audio(parseInt(this.dataset.offset), parseInt(this.dataset.sound_data_offset), parseInt(this.dataset.sound_start_offset))
//     } else if (this.dataset.type === "x_link") {
//         load_link(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
//     } else if (this.dataset.type === "x_varible") {
//         load_varible(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
//     } else if (this.dataset.type === "x_1st_offset_list") {
//         load_1st_offset_list(parseInt(this.dataset.offset), parseInt(this.dataset.amount_1), parseInt(this.dataset.amount_2), parseInt(this.dataset.amount_3), parseInt(this.dataset.mid))
//     } else if (this.dataset.type === "x_2nd_offset_list") {
//         load_2nd_offset_list(parseInt(this.dataset.offset), parseInt(this.dataset.amount_1), parseInt(this.dataset.amount_2), parseInt(this.dataset.mid))
//     } else if (this.dataset.type === "x_object") {
//         load_world_object(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_starting_points") {
//         load_world_start_points(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_animations") {
//         load_animations(parseInt(this.dataset.offset), parseInt(this.dataset.amount), parseInt(this.dataset.mid))
//     } else if (this.dataset.type === "x_world_weird") {
//         load_world_x_world_weird(parseInt(this.dataset.offset))
//     } else if (this.dataset.type === "x_world_weird_2") {
//         load_world_x_world_weird(parseInt(this.dataset.offset))
//     } else if (this.dataset.type === "x_layer_text") {
//         load_text(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
//     } else if (this.dataset.type === "x_world_gate") {
//         load_world_x_world_gate((parseInt(this.dataset.offset)), (parseInt(this.dataset.amount)))
//     } else if (this.dataset.type === "x_world_2") {
//         load_world_2(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_world_3") {
//         load_world_3(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_world_5") {
//         load_world_5(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_world_8") {
//         load_world_8(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_world_13") {
//         load_world_13(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
//     } else if (this.dataset.type === "x_routes") {
//         load_world_routes(parseInt(this.dataset.offset), parseInt(this.dataset.model_offset), parseInt(this.dataset.model_amount))
//     } else if (this.dataset.type === "x_routes_2") {
//         load_world_routes(parseInt(this.dataset.offset))
//     } else if (this.dataset.type === "x_world_flags_2") {
//         load_world_x_world_weird_2_2_2(parseInt(this.dataset.offset))
//     } else if (this.dataset.type === "x_model") {
//         load_model(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
//     } else if (this.dataset.type === "x_car_main") {
//         load_kart(parseInt(this.dataset.offset), parseInt(this.dataset.mid))
//     } else if (this.dataset.type === "x_texture") {
//         load_texture(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
//     }/*
//         save file
//         */
//     else if (this.dataset.type === "save_pac_folder") {
//         load_save_folder()
//     } else if (this.dataset.type === 'save_pac_save_settings') {
//         load_save_settings()
//     } else if (this.dataset.type === 'save_pac_circuit_settings') {
//         load_circuit_records()
//     } else if (this.dataset.type === 'save_pac_time_trials') {
//         load_time_trials()
//     } else if (this.dataset.type === 'save_pac_letter_hunt') {
//         load_letter_hunt()
//     } else if (this.dataset.type === 'save_pac_clockbuster') {
//         load_clockbuster()
//     } else if (this.dataset.type === 'save_pac_unlockables') {
//         load_unlockables()
//     } else if (this.dataset.type === 'save_pac_unlockables') {
//         load_unlockables()
//     }/*
//         dynamic
//         */
//     else if (this.dataset.type === 'x_d_folder') {
//         path = find_id(this.dataset.xfa, 'x_d_folder')
//         load_x_d_folder(path)
//     } else if (this.dataset.type === 'x_d_sub_file') {
//         path = find_id(this.dataset.xfa, 'x_d_sub_file')
//         load_x_d_sub_file(path[0], path[1])
//     } else if (this.dataset.type === 'x_d_sound_folder') {
//         path = find_id(this.dataset.xfa, 'x_d_sound_folder')
//         load_x_d_sound_folder(path)
//     } else if (this.dataset.type === 'x_d_sound') {
//         path = find_id(this.dataset.xfa, 'x_d_sound')
//         load_x_d_sound(path[0], path[1], path[2])
//     } else if (this.dataset.type === 'x_d_model_folder') {
//         path = find_id(this.dataset.xfa, 'x_d_model_folder')
//         load_x_d_model_folder(path)
//         // wip
//     } else if (this.dataset.type === 'x_d_model_header') {
//         path = find_id(this.dataset.xfa, 'x_d_model_header')
//         load_x_d_model_header(path[0], path[1], path[2])
//         // wip
//     } else if (this.dataset.type === 'x_d_model_section') {
//         path = find_id(this.dataset.xfa, 'x_d_model_section')
//         load_x_d_model_section(path[0], path[1], path[2])
//         // wip
//     } else if (this.dataset.type === 'x_d_model') {
//         path = find_id(this.dataset.xfa, 'x_d_model')
//         load_x_d_model(path[0], path[1], path[2])
//         // wip
//     } else if (this.dataset.type === 'x_d_textures_folder') {
//         path = find_id(this.dataset.xfa, 'x_d_textures_folder')
//         load_x_d_textures_folder(path)
//     } else if (this.dataset.type === 'x_d_textures') {
//         path = find_id(this.dataset.xfa, 'x_d_textures')
//         load_x_d_texture(path[0], path[1], path[2], 0)
//     } else if (this.dataset.type === 'x_d_texture_animations_folder') {
//         path = find_id(this.dataset.xfa, 'x_d_texture_animations_folder')
//         load_x_d_textures_animation_folder(path)
//         // wip
//     } else if (this.dataset.type === 'x_d_texture_animation') {
//         path = find_id(this.dataset.xfa, 'x_d_texture_animation')
//         load_x_d_textures_animation(path[0], path[1], path[2])
//         // wip
//     } else if (this.dataset.type === 'x_d_texture_animation_pattern') {
//         path = find_id(this.dataset.xfa, 'x_d_texture_animation_pattern')
//         load_x_d_textures_animation_pattern(path)
//         // wip
//     } else if (this.dataset.type === 'x_d_texture_animation_color') {
//         path = find_id(this.dataset.xfa, 'x_d_texture_animation_color')
//         load_x_d_textures_animation_color(path)
//         // wip
//     } else if (this.dataset.type === 'x_d_texture_animation_translation') {
//         path = find_id(this.dataset.xfa, 'x_d_texture_animation_translation')
//         load_x_d_texture_animation_translation(path)
//         // wip
//     } else if (this.dataset.type === 'x_d_share') {
//         path = find_id(this.dataset.xfa, 'x_d_share')
//         load_x_d_share(path)
//     } else if (this.dataset.type === 'x_d_link_folder') {
//         path = find_id(this.dataset.xfa, 'x_d_link_folder')
//         load_x_d_link_header(path)
//     } else if (this.dataset.type === 'x_d_link_intro') {
//         path = find_id(this.dataset.xfa, 'x_d_link_intro')
//         load_x_d_link_intro(path[0], path[1])
//     } else if (this.dataset.type === 'x_d_link_demo') {
//         path = find_id(this.dataset.xfa, 'x_d_link_demo')
//         load_x_d_link_demo(path[0], path[1])
//     } else if (this.dataset.type === 'x_d_link_main') {
//         path = find_id(this.dataset.xfa, 'x_d_link_main')
//         load_x_d_link_main(path[0], path[1])
//     } else if (this.dataset.type === 'x_d_link_main_group') {
//         path = find_id(this.dataset.xfa, 'x_d_link_main_group')
//         load_x_d_link_main_group(path[0], path[1], path[2])
//     } else if (this.dataset.type === 'x_d_link_main_sub_group') {
//         path = find_id(this.dataset.xfa, 'x_d_link_main_sub_group')
//         load_x_d_link_main_sub_group(path[0], path[1], path[2])

//     /*
//         interface      
//         */
//        } else if (this.dataset.type === "x_d_interface_folder") {
//         path = find_id(this.dataset.xfa, 'x_d_interface_folder')
//         load_x_d_interface_folder(path)
//        } else if (this.dataset.type === "x_d_frames_folder") {
//         path = find_id(this.dataset.xfa, 'x_d_frames_folder')
//         load_x_d_frames_folder(path)
//        } else if (this.dataset.type === "x_d_frame") {
//         path = find_id(this.dataset.xfa, 'x_d_frame')
//         load_x_d_frame(path)
//        } else if (this.dataset.type === "x_d_varibles_folder") {
//         path = find_id(this.dataset.xfa, 'x_d_varibles_folder')
//         load_x_d_varibles_folder(path)
//        } else if (this.dataset.type === "x_d_varible") {
//         path = find_id(this.dataset.xfa, 'x_d_varible')
//         load_x_d_varible(path)
//        } else if (this.dataset.type === "x_d_layers_folder") {
//         path = find_id(this.dataset.xfa, 'x_d_layers_folder')
//         load_x_d_layers_folder(path)
//        } else if (this.dataset.type === "x_d_layer") {
//         path = find_id(this.dataset.xfa, 'x_d_layer')
//         load_x_d_layer(path)
//        } else if (this.dataset.type === "x_d_texts_folder") {
//         path = find_id(this.dataset.xfa, 'x_d_texts_folder')
//         load_x_d_texts_folder(path)
//        } else if (this.dataset.type === "x_d_text") {
//         path = find_id(this.dataset.xfa, 'x_d_text')
//         load_x_d_text(path)

//         /*
//         idk      
//         */
//     } else {
//         document.getElementById('file_editor').innerHTML = `<div data-debug='true'>${this.dataset.type}, " + parseInt(this.dataset.offset) + '</div>`
//         // console.log(this.dataset.offset)
//     }

// }

function file_click() {
    const highlightedElements = document.getElementsByClassName('file_is_highlighted');

    // Check class and remove highlighting
    if (highlightedElements.length === 1) {
        highlightedElements[0].classList.remove('file_is_highlighted');
    }

    this.classList.add('file_is_highlighted');

    let path = '';

    if (document.getElementById('file_viewer').querySelectorAll(`div [data-type="x_d_folder"][data-XFA="0"]`)[0]) {
        // dynamic
        path = find_id(this.dataset.xfa, this.dataset.type)
        let id
        if (Array.isArray(path)) {
            id = path[0]
        } else {
            id = path
        }
        TXFA = Object.byString(x, id);
    }

    switch (this.dataset.type) {
    case "x_folder":
        load_folder()
        break;
    case "x_sub_file":
        load_sub_file(parseInt(this.dataset.offset));
        break;
    case "x_sub_file_header":
        load_sub_file_header(parseInt(this.dataset.offset));
        break;
    case "x_sound":
        load_audio(parseInt(this.dataset.offset), parseInt(this.dataset.sound_data_offset), parseInt(this.dataset.sound_start_offset))
        break;
    case "x_link":
        load_link(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
        break
    case "x_varible":
        load_varible(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
        break;
    case "x_1st_offset_list":
        load_1st_offset_list(parseInt(this.dataset.offset), parseInt(this.dataset.amount_1), parseInt(this.dataset.amount_2), parseInt(this.dataset.amount_3), parseInt(this.dataset.mid))
        break;
    case "x_2nd_offset_list":
        load_2nd_offset_list(parseInt(this.dataset.offset), parseInt(this.dataset.amount_1), parseInt(this.dataset.amount_2), parseInt(this.dataset.mid))
        break;
    case "x_object":
        load_world_object(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
        break;
    case "x_starting_points":
        load_world_start_points(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
        break;
    case "x_animations":
        load_animations(parseInt(this.dataset.offset), parseInt(this.dataset.amount), parseInt(this.dataset.mid))
        break;
    case "x_world_weird":
        load_world_x_world_weird(parseInt(this.dataset.offset))
        break;
    case "x_world_weird_2":
        break
        load_world_x_world_weird(parseInt(this.dataset.offset))
    case "x_layer_text":
        break
        load_text(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    case "x_world_gate":
        load_world_x_world_gate((parseInt(this.dataset.offset)), (parseInt(this.dataset.amount)))
        break
    case "x_world_2":
        break
        load_world_2(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    case "x_world_3":
        break
        load_world_3(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    case "x_world_5":
        break
        load_world_5(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    case "x_world_8":
        break
        load_world_8(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    case "x_world_13":
        break
        load_world_13(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    case "x_routes":
        load_world_routes(parseInt(this.dataset.offset), parseInt(this.dataset.model_offset), parseInt(this.dataset.model_amount))
        break
    case "x_routes_2":
        load_world_routes(parseInt(this.dataset.offset))
        break
    case "x_world_flags_2":
        break
        load_world_x_world_weird_2_2_2(parseInt(this.dataset.offset))
    case "x_model":
        break
        load_model(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    case "x_car_main":
        load_kart(parseInt(this.dataset.offset), parseInt(this.dataset.mid))
        break
    case "x_texture":
        load_texture(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
        break
        load_texture(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
        break
    case "save_pac_folder":
        load_save_folder()
        break
    case 'save_pac_save_settings':
        load_save_settings()
        break
    case 'save_pac_circuit_settings':
        load_circuit_records()
        break
    case 'save_pac_time_trials':
        load_time_trials()
        break
    case 'save_pac_letter_hunt':
        load_letter_hunt()
        break
    case 'save_pac_clockbuster':
        load_clockbuster()
        break
    case 'save_pac_unlockables':
        load_unlockables()
        break
    case 'save_pac_unlockables':
        load_unlockables()
        break
    case 'ghost_save_pac_folder':
        load_ghost()
        break
        //     }/*
        //         dynamic
        //         */

    case 'x_d_folder':
        load_x_d_folder(path)
        break
    case 'x_d_sub_file':
        load_x_d_sub_file(path[0], path[1])
        break
    case 'x_d_sound_folder':
        load_x_d_sound_folder(path)
        break
    case 'x_d_sound':
        load_x_d_sound(path[0], path[1], path[2])
        break
    case 'x_d_models__folder':
        load_x_d_model_folder(path)
        break
    case 'x_d_models__file':
        load_x_d_model_header(path[0], path[1], path[2])
        break
    case 'x_d_model__sections':
        load_x_d_model_section(path[0], path[1], path[2])
        break
    case 'x_d_model__model':
        load_x_d_model(path[0], path[1], path[2])
        break
    case 'x_d_textures_folder':
        load_x_d_textures_folder(path)
        break
    case 'x_d_textures':
        load_x_d_texture(path[0], path[1], path[2], 0)
        break
    case 'x_d_texture_animations_folder':
        load_x_d_textures_animation_folder(path)
        break
    case 'x_d_texture_animation':
        load_x_d_textures_animation(path[0], path[1], path[2])
        break
    case 'x_d_texture_animation_pattern':
        load_x_d_textures_animation_pattern(path)
        break
    case 'x_d_texture_animation_color':
        load_x_d_textures_animation_color(path)
        break
    case 'x_d_texture_animation_translation':
        load_x_d_texture_animation_translation(path)
        break
    case 'x_d_share':
        load_x_d_share(path)
        break
    case 'x_d_link__file':
        load_x_d_link_header(path[0])
        break
    case 'x_d_link__intro':
        load_x_d_link_intro(path[0], path[1])
        break
    case 'x_d_link__demo':
        load_x_d_link_demo(path[0], path[1])
        break
    case 'x_d_link__main':
        load_x_d_link_main(path[0], path[1])
        break
    case 'x_d_link__main_group':
        load_x_d_link_main_group(path[0], path[1], path[2])
        break
    case 'x_d_link__main_sub_group':
        load_x_d_link_main_sub_group(path[0], path[1], path[2])
        break
    case 'x_d_frame_text__folder':
        load_x_d_texts_folder(path)
        break
    case 'x_d_frame_text__file':
        load_x_d_text(path)
        break
    case 'x_d_frame_font__file':
        load_x_d_frame_font(path[0], path[1])
        break
    case 'x_d_car__file':
        load_x_d_car(path[0])
        break
    case 'x_d_sound_section__file':
        load_x_d_sound_section(path[0])
        break
    case 'x_d_sound_controls__file':
        load_x_d_sound_controls(path[0])
        break
    case 'x_d_frame_multi_font__file':
        load_x_d_frame_multi_font(path[0])
        break
    case 'x_d_frame_sparkler__file':
        load_x_d_frame_sparkler(path[0])
        break
    case 'x_d_model_link__file':
        load_x_d_model_link(path[0])
        break
    case 'x_d_interface__file':
        load_x_d_interface(path[0])
        break
    case 'x_d_interface__layer_file':
        load_x_d_interface_layer(path)
        break

            


    case 'x_d_car__folder':
    case 'x_d_link__folder':
    case 'x_d_idk__folder':
    case 'x_d_interface__folder':
    case 'x_d_frame_sparkler__folder':
    case 'x_d_frame_multi_font__folder':
    case 'x_d_frame_text__folder':
    case 'x_d_sound_controls__folder':
    case 'x_d_sound_section__folder':
    case 'x_d_model_link__folder':
    case 'x_d_model_sub_link__folder':
    case 'x_d_wtf__folder':
    case 'x_d_unknown__folder':
    case 'x_d_unknown_00__folder':
    case 'x_d_activator__folder':
    case 'x_d_flag__folder':
    case 'x_d_var__folder':
    case 'x_d_gate__folder':
    case 'x_d_strange__folder':
    case 'x_d_object__folder':
    case 'x_d_um__folder':
    case 'x_d_world_settings__folder':

        //     /*
        //         interface      
        //         */
        //        } else if (this.dataset.type === "x_d_interface_folder") {
        //         path = find_id(this.dataset.xfa, 'x_d_interface_folder')
        //         load_x_d_interface_folder(path)
        //        } else if (this.dataset.type === "x_d_frames_folder") {
        //         path = find_id(this.dataset.xfa, 'x_d_frames_folder')
        //         load_x_d_frames_folder(path)
        //        } else if (this.dataset.type === "x_d_frame") {
        //         path = find_id(this.dataset.xfa, 'x_d_frame')
        //         load_x_d_frame(path)
        //        } else if (this.dataset.type === "x_d_varibles_folder") {
        //         path = find_id(this.dataset.xfa, 'x_d_varibles_folder')
        //         load_x_d_varibles_folder(path)
        //        } else if (this.dataset.type === "x_d_varible") {
        //         path = find_id(this.dataset.xfa, 'x_d_varible')
        //         load_x_d_varible(path)
        //        } else if (this.dataset.type === "x_d_layers_folder") {
        //         path = find_id(this.dataset.xfa, 'x_d_layers_folder')
        //         load_x_d_layers_folder(path)
        //        } else if (this.dataset.type === "x_d_layer") {
        //         path = find_id(this.dataset.xfa, 'x_d_layer')
        //         load_x_d_layer(path)
        //        } else if (this.dataset.type === "x_d_texts_folder") {
        //         path = find_id(this.dataset.xfa, 'x_d_texts_folder')
        //         load_x_d_texts_folder(path)
        //        } else if (this.dataset.type === "x_d_text") {
        //         path = find_id(this.dataset.xfa, 'x_d_text')
        //         load_x_d_text(path)

        // case 'x_folder':
        //     load_folder();
        //     break;
        // case 'x_sub_file':
        //     load_sub_file(parseInt(this.dataset.offset));
        //     break;

        // case 'x_sub_file_header':
        //     load_sub_file_header(parseInt(this.dataset.offset));
        //     break;

        // case 'x_sound':
        // load_audio(parseInt(this.dataset.offset), parseInt(this.dataset.sound_data_offset), parseInt(this.dataset.sound_start_offset))

        //     // load_audio(
        //     //     parseInt(this.dataset.offset),
        //     //     parseInt(this.dataset.sound_data_offset),
        //     //     parseInt(this.dataset.sound_start_offset)
        //     // );
        //     break;

        // case 'x_link':
        //     load_link(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid));
        //     break;
        // case 'x_d_folder':
        //     load_x_d_folder(find_id(this.dataset.xfa, this.dataset.type));
        //     break;

    default:
        document.getElementById('file_editor').innerHTML = `<div data-debug='true'>${this.dataset.type}, ${parseInt(this.dataset.offset)}</div>`;
        document.getElementById("_2nd_data_bar").innerHTML = ''
        break;
    }

}

//     else if (this.dataset.type === '') {
//         path = find_id(this.dataset.xfa, 'x_d_folder')
//         load_x_d_folder(path)
