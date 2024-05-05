"use strict";
function load_world_route_d(id, id_index) {
    let html = `${load_world_canvas_string(`${TXFA.file_specific[0].section_12[0].section_00.length} Points`)}`

    file_editor.innerHTML = html

    let modelarray = load_world_models_array()

    let editarray = []
    let routelist = TXFA.file_specific[0].section_12[0].section_00
    for (let i = 0; i < routelist.length; i++) {
        let routepoint = routelist[i]
        let xid = id + `.file_specific[0].section_12[0].section_00[${i}]`
        editarray.push({
            x: routepoint.f32_32,
            y: routepoint.f32_36,
            z: routepoint.f32_40,
            w: routepoint.f32_44,
            type: 'route_point',
            ref: routepoint,
            id: xid
        })
    }
    gen_model_box(modelarray, editarray)

}
