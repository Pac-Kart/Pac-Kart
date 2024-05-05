"use strict";
function load_world_collision(id) {
    let html = `${load_world_canvas_string(TXFA)}`

    file_editor.innerHTML = html

    let modelarray = load_world_models_array()

     let editarray = []
     // let coll_list = TXFA.file_specific[0].section_04[0].section_84
     let coll_list = TXFA.file_specific[0].section_04[0].section_32
    for (let i = 0; i < coll_list.length; i++) {
       let collision_tri = coll_list[i]
        let xid = id + `.file_specific[0].section_12[0].section_00[${i}]`
         editarray.push({
             type: 'collision',
             ref: collision_tri,
             id: xid
         })
    }
    // console.log(TXFA.file_specific[0].section_04[0].section_76.length)
     gen_model_box(modelarray, editarray)

}
