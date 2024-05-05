"use strict";
function load_world_start_points_d(id) {
    let html = `${load_world_canvas_string(`${TXFA.file_specific[0].section_20[0].type_0.length} Points`)}`

    file_editor.innerHTML = html

    let modelarray = load_world_models_array()

    let editarray = []
    let point_list = TXFA.file_specific[0].section_20[0].type_0
    for (let i = 0; i < point_list.length; i++) {
        let point = point_list[i]
        let xid = id + `.file_specific[0].section_20[0].type_0[${i}]`
        editarray.push({
            x: point.f32_32,
            y: point.f32_36,
            z: point.f32_40,
            w: point.f32_44,
            type: 'start_points',
            ref: point,
            id: xid
        })
    }
    gen_model_box(modelarray, editarray)

}
