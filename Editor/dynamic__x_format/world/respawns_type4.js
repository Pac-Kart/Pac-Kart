"use strict";
function load_world_respawnt4(id) {
    let html = `${load_world_canvas_string(`${TXFA.file_specific[0].section_20[0].type_4.length} Points`)}`
    file_editor.innerHTML = html

    let modelarray = load_world_models_array()
    let editarray = []
    let point_list = TXFA.file_specific[0].section_20[0].type_4
    for (let i = 0; i < point_list.length; i++) {
        let point = point_list[i]
        let xid = id + `.file_specific[0].section_20[0].type_4[${i}]`
        editarray.push({
            x: point.f32_80,
            y: point.f32_84,
            z: point.f32_88,
            w: point.f32_92,
            type: 'respawn_type4',
            ref: point,
            id: xid
        })
    }
    gen_model_box(modelarray, editarray)

}
