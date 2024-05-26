"use strict";
function file_click(e) {
    const highlightedElements = document.getElementsByClassName('file_is_highlighted');

    // Check class and remove highlighting
    if (highlightedElements.length === 1) {
        highlightedElements[0].classList.remove('file_is_highlighted');
    }

    e.srcElement.classList.add('file_is_highlighted');

    let path = '';

    if (file_viewer.querySelectorAll(`div [data-type="x_d_folder"][data-XFA="0"]`)[0]) {
        // dynamic
        path = find_id(e.srcElement.dataset.xfa, e.srcElement.dataset.type)
        let id
        if (Array.isArray(path)) {
            id = path[0]
        } else {
            id = path
        }
        globalThis.TXFA = Object.byString(x, id);
    }

    switch (e.srcElement.dataset.type) {
    case "x_folder":
        load_folder()
        break;
    case "x_sub_file":
        load_sub_file(parseInt(e.srcElement.dataset.offset));
        break;
    case "x_sub_file_header":
        load_sub_file_header(parseInt(e.srcElement.dataset.offset));
        break;
    case "x_sound":
        load_audio(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.sound_data_offset), parseInt(e.srcElement.dataset.sound_start_offset))
        break;
    case "x_1st_offset_list":
        load_1st_offset_list(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.amount_1), parseInt(e.srcElement.dataset.amount_2), parseInt(e.srcElement.dataset.amount_3), parseInt(e.srcElement.dataset.mid))
        break;
    case "x_2nd_offset_list":
        load_2nd_offset_list(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.amount_1), parseInt(e.srcElement.dataset.amount_2), parseInt(e.srcElement.dataset.mid))
        break;
    case "x_starting_points":
        load_world_start_points(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.amount))
        break;
    case "x_world_gate":
        load_world_x_world_gate((parseInt(e.srcElement.dataset.offset)), (parseInt(e.srcElement.dataset.amount)))
        break
    case "x_routes":
        load_world_routes(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.model_offset), parseInt(e.srcElement.dataset.model_amount))
        break
    case "x_routes_2":
        load_world_routes(parseInt(e.srcElement.dataset.offset))
        break
    case "x_car_main":
        load_kart(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.mid))
        break
    case "x_texture":
        load_texture(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.offset_mid), parseInt(e.srcElement.dataset.offset_datapack))

        // load_texture(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.offset_mid))
        // break
        // load_texture(parseInt(e.srcElement.dataset.offset), parseInt(e.srcElement.dataset.offset_mid))
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
    case 'x_d_texture_animation_file':
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
    case 'x_d_car_00_180__file':
        load_x_d_car_00_180(path[0])
        break
    case 'x_d_car_00_184__file':
        load_x_d_car_00_184(path[0])
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
    case 'x_d_frame_sparkler__folder':
        load_x_d_frame_sparkler__folder(path)
        break
    case 'x_d_flag__file':
        load_x_d_flag__file(path)
        break
    case 'x_d_strange__file':
        load_x_d_strange(path[0])
        break
    case 'x_d_object__file':
        load_x_d_object__file(path[0])
        break
    case 'x_d_activator__file':
        load_x_d_activator__file(path[0])
        break
    case 'x_d_unknown_00__file':
        load_x_d_unknown_00__file(path[0])
        break
    case 'x_d_idk__file':
        load_x_d_idk__file(path[0])
        break
    case 'x_d_model_link__file':
        load_x_d_model_link(path[0])
        break
    case 'x_d_interface__file':
        load_x_d_interface(path[0])
        break
    case 'x_d_interface__layer_folder':
        load_x_d_interface_elements_folder(path)
        break
    case 'x_d_interface__layer_file':
        load_x_d_interface_layer(path)
        break
    case 'x_d_interface__varible_folder':
        load_x_d_varibles_folder(path)
        break
    case 'x_d_interface__varible_file':
        load_x_d_varible(path)
        break
    case 'x_d_world_settings__file':
        load_x_d_world_settings(path[0])
        break
    case 'x_d_world_settings__lighting':
        load_x_d_world_settings__lighting(path)
        break
    case 'x_d_World__folder':
        load_world_folder(path)
        break
    case 'x_d_world_route':
        load_world_route_d(path)
        break
    case 'x_d_world_collision':
        load_world_collision(path)
        break
    case "x_d_world_start_points":
        load_world_start_points_d(path)
        break
    case "x_d_world_scene":
        load_world_scene(path)
        break
    case "x_d_world_sound":
        load_world_sound(path)
        break
    case "x_d_world_Activators":
        load_world_activator(path)
        break
    case "x_d_world_Respawnt4":
        load_world_respawnt4(path)
        break
    case "x_d_world_Respawnt11":
        load_world_respawnt11(path)
        break
    case "x_d_world_Stage":
        load_world_stage(path)
        break
    case "x_d_world_Animation":
        load_world_animation(path)
        break
    case "x_d_world_Objects":
        load_world_objects(path)
        break

    default:
        file_editor.innerHTML = `<div data-debug='true'>${e.srcElement.dataset.type}, ${parseInt(e.srcElement.dataset.offset)}</div>`;
        document.getElementById("_2nd_data_bar").innerHTML = ''
        break;
    }

}
