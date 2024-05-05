"use strict";
function load_world_folder(id) {
    let html = `${load_world_canvas_string('World')}`

    file_editor.innerHTML = html

    let modelarray = load_world_models_array()
    gen_model_box(modelarray)

}

function load_world_canvas_string(file_editor_side_panel_default_text='') {
    return `<span style='width:80%;height:100%;display:inherit;'>
                    <div class='data_types_bar' style='overflow:hidden;height:5%;border-bottom:solid 1px #9d9898;box-sizing:border-box;'>
                        <a id='canvas_export_scene' class='data_bar_options_canvas'>Export</a>
                    </div>
                    <div id='outer_canvas' style='height:95%;'>
                    </div>
                </span>
                <span id='file_editor_side_panel' class='data_types_bar' style='overflow-x:hidden;padding:3%;height:100%;width:20%;float: right;border-left:solid 1px #9d9898;box-sizing:border-box;'>
                    <a>${file_editor_side_panel_default_text}</a>
                </span>
`
}
function load_world_models_array() {
    let world_list = TXFA.file_specific[0].section_20[0].type_5
    let model_list = TXFA.models

    let modelarray = []
    for (let model_sec of world_list) {
        let model_id = model_sec.ordered_models_100
        let i = -1
        let model_found = false
        do {
            i++
            if (model_list[i].id === model_id) {
                model_found = true
            }
        } while (model_found === false && i < model_list.length - 1)if (i) {
            let tempsection = model_list[i].sections[0].sub_section

            for (let ii = 0; ii < tempsection.length; ii++) {
                modelarray.push({
                    v_array: tempsection[ii].v_array,
                    u_array: tempsection[ii].u_array,
                    n_array: tempsection[ii].n_array,
                    c_array: tempsection[ii].c_array,
                })
            }
        }
    }

    return modelarray
}
