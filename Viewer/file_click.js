function file_click() {

    // check class
    if (document.getElementsByClassName('file_is_highlighted').length === 1) {
        document.getElementsByClassName('file_is_highlighted')[0].classList.remove('file_is_highlighted')
    }
    let path = ''
    this.classList.add('file_is_highlighted')

    if (this.dataset.type === 'x_folder') {
        load_folder()
    } else if (this.dataset.type === 'x_sub_file') {
        load_sub_file(parseInt(this.dataset.offset));
    } else if (this.dataset.type === 'x_sub_file_header') {
        load_sub_file_header(parseInt(this.dataset.offset));
    } else if (this.dataset.type === "x_sound") {
        load_audio(parseInt(this.dataset.offset), parseInt(this.dataset.sound_data_offset), parseInt(this.dataset.sound_start_offset))
    } else if (this.dataset.type === "x_logic_header") {
        load_logic(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid), this.dataset.file_type)
    } else if (this.dataset.type === "x_link") {
        load_link(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_varible") {
        load_varible(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_font") {
        load_font(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_1st_offset_list") {
        load_1st_offset_list(parseInt(this.dataset.offset), parseInt(this.dataset.amount_1), parseInt(this.dataset.amount_2), parseInt(this.dataset.amount_3), parseInt(this.dataset.mid))
    } else if (this.dataset.type === "x_2nd_offset_list") {
        load_2nd_offset_list(parseInt(this.dataset.offset), parseInt(this.dataset.amount_1), parseInt(this.dataset.amount_2), parseInt(this.dataset.mid))
    } else if (this.dataset.type === "x_world_low_header") {
        load_world_low_header(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_object") {
        load_world_object(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_starting_points") {
        load_world_start_points(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_animations") {
        load_animations(parseInt(this.dataset.offset), parseInt(this.dataset.amount), parseInt(this.dataset.mid))
    } else if (this.dataset.type === "x_world_weird") {
        load_world_x_world_weird(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_world_weird_2") {
        load_world_x_world_weird(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_collision") {
        load_world_x_collision(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_layer_text") {
        load_text(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer") {
        load_layer(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_world_gate") {
        load_world_x_world_gate((parseInt(this.dataset.offset)), (parseInt(this.dataset.amount)))
    } else if (this.dataset.type === "x_cam") {
        load_world_camera(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_world_2") {
        load_world_2(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_world_3") {
        load_world_3(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_world_5") {
        load_world_5(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_world_8") {
        load_world_8(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_world_13") {
        load_world_13(parseInt(this.dataset.offset), parseInt(this.dataset.amount))
    } else if (this.dataset.type === "x_routes") {
        load_world_routes(parseInt(this.dataset.offset), parseInt(this.dataset.model_offset), parseInt(this.dataset.model_amount))
    } else if (this.dataset.type === "x_routes_2") {
        load_world_routes(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_world_flags_2") {
        load_world_x_world_weird_2_2_2(parseInt(this.dataset.offset))
    } else if (this.dataset.type === "x_model") {
        load_model(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_car_main") {
        load_kart(parseInt(this.dataset.offset), parseInt(this.dataset.mid))
    } else if (this.dataset.type === "x_texture") {
        load_texture(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    }/*
        save file
        */
    else if (this.dataset.type === "save_pac_folder") {
        load_save_folder()
    } else if (this.dataset.type === 'save_pac_save_settings') {
        load_save_settings()
    } else if (this.dataset.type === 'save_pac_circuit_settings') {
        load_circuit_records()
    } else if (this.dataset.type === 'save_pac_time_trials') {
        load_time_trials()
    } else if (this.dataset.type === 'save_pac_letter_hunt') {
        load_letter_hunt()
    } else if (this.dataset.type === 'save_pac_clockbuster') {
        load_clockbuster()
    } else if (this.dataset.type === 'save_pac_unlockables') {
        load_unlockables()
    } else if (this.dataset.type === 'save_pac_unlockables') {
        load_unlockables()
    }/*
        dynamic
        */
    else if (this.dataset.type === 'x_d_folder') {
        path = find_id(this.dataset.xfa, 'x_d_folder')
        load_x_d_folder(path)
    } else if (this.dataset.type === 'x_d_sub_file') {
        path = find_id(this.dataset.xfa, 'x_d_sub_file')
        load_x_d_sub_file(path[0], path[1])
    } else if (this.dataset.type === 'x_d_sound_folder') {
        path = find_id(this.dataset.xfa, 'x_d_sound_folder')
        load_x_d_sound_folder(path)
    } else if (this.dataset.type === 'x_d_sound') {
        path = find_id(this.dataset.xfa, 'x_d_sound')
        load_x_d_sound(path[0], path[1], path[2])
    } else if (this.dataset.type === 'x_d_model_folder') {
        path = find_id(this.dataset.xfa, 'x_d_model_folder')
        load_x_d_model_folder(path)
        // wip
    } else if (this.dataset.type === 'x_d_model_header') {
        path = find_id(this.dataset.xfa, 'x_d_model_header')
        load_x_d_model_header(path[0], path[1], path[2])
        // wip
    } else if (this.dataset.type === 'x_d_model_section') {
        path = find_id(this.dataset.xfa, 'x_d_model_section')
        load_x_d_model_section(path[0], path[1], path[2])
        // wip
    } else if (this.dataset.type === 'x_d_model') {
        path = find_id(this.dataset.xfa, 'x_d_model')
        load_x_d_model(path[0], path[1], path[2])
        // wip
    } else if (this.dataset.type === 'x_d_textures_folder') {
        path = find_id(this.dataset.xfa, 'x_d_textures_folder')
        load_x_d_textures_folder(path)
    } else if (this.dataset.type === 'x_d_textures') {
        path = find_id(this.dataset.xfa, 'x_d_textures')
        load_x_d_texture(path[0], path[1], path[2], 0)
    } else if (this.dataset.type === 'x_d_texture_animations_folder') {
        path = find_id(this.dataset.xfa, 'x_d_texture_animations_folder')
        load_x_d_textures_animation_folder(path)
        // wip
    } else if (this.dataset.type === 'x_d_texture_animation') {
        path = find_id(this.dataset.xfa, 'x_d_texture_animation')
        load_x_d_textures_animation(path[0], path[1], path[2])
        // wip
    } else if (this.dataset.type === 'x_d_texture_animation_pattern') {
        path = find_id(this.dataset.xfa, 'x_d_texture_animation_pattern')
        load_x_d_textures_animation_pattern(path)
        // wip
    } else if (this.dataset.type === 'x_d_texture_animation_color') {
        path = find_id(this.dataset.xfa, 'x_d_texture_animation_color')
        load_x_d_textures_animation_color(path)
        // wip
    } else if (this.dataset.type === 'x_d_texture_animation_translation') {
        path = find_id(this.dataset.xfa, 'x_d_texture_animation_translation')
        load_x_d_texture_animation_translation(path)
        // wip
    } else if (this.dataset.type === 'x_d_share') {
        path = find_id(this.dataset.xfa, 'x_d_share')
        load_x_d_share(path)
    } else if (this.dataset.type === 'x_d_link_folder') {
        path = find_id(this.dataset.xfa, 'x_d_link_folder')
        load_x_d_link_header(path)
    } else if (this.dataset.type === 'x_d_link_intro') {
        path = find_id(this.dataset.xfa, 'x_d_link_intro')
        load_x_d_link_intro(path[0], path[1])
    } else if (this.dataset.type === 'x_d_link_demo') {
        path = find_id(this.dataset.xfa, 'x_d_link_demo')
        load_x_d_link_demo(path[0], path[1])
    } else if (this.dataset.type === 'x_d_link_main') {
        path = find_id(this.dataset.xfa, 'x_d_link_main')
        load_x_d_link_main(path[0], path[1])
    } else if (this.dataset.type === 'x_d_link_main_group') {
        path = find_id(this.dataset.xfa, 'x_d_link_main_group')
        load_x_d_link_main_group(path[0], path[1], path[2])
    } else if (this.dataset.type === 'x_d_link_main_sub_group') {
        path = find_id(this.dataset.xfa, 'x_d_link_main_sub_group')
        load_x_d_link_main_sub_group(path[0], path[1], path[2])
    }/*
        interface testing
        */
    else if (this.dataset.type === "x_80blockbyte") {
        load_frame(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer_1") {
        load_x_layer_1(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer_2") {
        load_x_layer_2(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid), parseInt(this.dataset.data))
    } else if (this.dataset.type === "x_layer_3") {
        load_x_layer_3(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer_4") {
        load_x_layer_4(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer_5") {
        load_x_layer_5(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer_6") {
        load_x_layer_6(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_layer_7") {
        load_x_layer_7(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_settings_2") {
        load_settings_2(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_settings_2_3_2") {
        load_settings_2_3_2(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_setting_3") {
        load_settings_3(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_text") {
        load_x_text(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_spark") {
        load_x_spark(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_interface_model") {
        load_x_interface_model(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_sub_model") {
        load_x_sub_model(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_model_animation_1") {
        load_x_model_animation_1(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    } else if (this.dataset.type === "x_model_animation_2") {
        load_x_model_animation_2(parseInt(this.dataset.offset), parseInt(this.dataset.offset_mid))
    /*
        interface      
        */
       } else if (this.dataset.type === "x_d_interface_folder") {
        path = find_id(this.dataset.xfa, 'x_d_interface_folder')
        load_x_d_interface_folder(path)
       } else if (this.dataset.type === "x_d_frames_folder") {
        path = find_id(this.dataset.xfa, 'x_d_frames_folder')
        load_x_d_frames_folder(path)
       } else if (this.dataset.type === "x_d_frame") {
        path = find_id(this.dataset.xfa, 'x_d_frame')
        load_x_d_frame(path)
       } else if (this.dataset.type === "x_d_varibles_folder") {
        path = find_id(this.dataset.xfa, 'x_d_varibles_folder')
        load_x_d_varibles_folder(path)
       } else if (this.dataset.type === "x_d_varible") {
        path = find_id(this.dataset.xfa, 'x_d_varible')
        load_x_d_varible(path)
       } else if (this.dataset.type === "x_d_layers_folder") {
        path = find_id(this.dataset.xfa, 'x_d_layers_folder')
        load_x_d_layers_folder(path)
       } else if (this.dataset.type === "x_d_layer") {
        path = find_id(this.dataset.xfa, 'x_d_layer')
        load_x_d_layer(path)
       } else if (this.dataset.type === "x_d_texts_folder") {
        path = find_id(this.dataset.xfa, 'x_d_texts_folder')
        load_x_d_texts_folder(path)
       } else if (this.dataset.type === "x_d_text") {
        path = find_id(this.dataset.xfa, 'x_d_text')
        load_x_d_text(path)

        
        
        /*
        idk      
        */
    } else {
        document.getElementById('file_editor').innerHTML = `<div data-debug='true'>${this.dataset.type}, " + parseInt(this.dataset.offset) + '</div>`
        // console.log(this.dataset.offset)
    }

}
