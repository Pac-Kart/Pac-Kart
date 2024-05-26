"use strict";
function load_world_scene(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${scene_list()}
   </div>
`

    file_editor.innerHTML = html


    function scene_list() {
    let html = ''
    let type5 = TXFA.file_specific[0].section_20[0].type_5
    for (let i = 0; i < type5.length; i++) {
        html += `<a>Model ${i +1}</a><br>
                  ${generate_linkbox(`${id}.file_specific[0].section_20[0].type_5[${i}]`, 'ordered_models_100', 'models', type5[i].ordered_models_100)}<br>`
    }

    return html
    }

}
