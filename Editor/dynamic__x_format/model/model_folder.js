"use strict";
function load_x_d_model_folder(id) {
    let isworld = go_back_up(id)
    if (isworld?.type === 'world') {
        isworld = `<input type='checkbox' id='world_scene'>replace in world scene`
    } else {
        isworld = ''
    }
    let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <label for='canvas_import_scene' class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;'>Import (OBJ / GLTF)</label><input style='display:none;' id="canvas_import_scene" type="file">
             </div>
             ${isworld}
             <br>
             <input type='checkbox' id='cam_lines'>Display Line Segments
        `

    file_editor.innerHTML = html

    document.getElementById("_2nd_data_bar").innerHTML = ''
    tempimporter(id)

    document.getElementById("cam_lines").checked = g?.cam?.lines

    document.getElementById("cam_lines").addEventListener('change', function(e) {
        if (e.srcElement.checked) {
            g.cam = {lines:true}
        } else {
            g.cam.lines = false
        }
    })
}
