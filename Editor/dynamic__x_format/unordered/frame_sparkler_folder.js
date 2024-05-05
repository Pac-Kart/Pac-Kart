"use strict";
function load_x_d_frame_sparkler__folder(id) {
    // console.log(id)
    // TXFA = Object.byString(XFA, id);
    // let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
    //          <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Emitter</span>
    //          </div>`
    let html = ''
    file_editor.innerHTML = html

    // document.getElementById("new_entry").addEventListener("click", generate_texture);
    // document.getElementById("_2nd_data_bar").innerHTML = ''
    // document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="main_delete">X</a>'

    // document.getElementById("main_delete").addEventListener("click", delete_texture_folder);

    function generate_texture() {
        TXFA.push({
            id: gen_id(),
            f32_00: 0,
            u32_08: 0,
            u32_12: 1,
            section_16: [{
                texture_00: -1,
                u8_04: 0,
                u32_08: 0,
                f32_16: 0,
                f32_24: 0,
                f32_28: 0,
                f32_32: 0,
                f32_36: 0,
                u32_40: 0,
                u32_44: 0,
                section_48: [],
                u32_52: 0,
                //amount?
                section_56: [],
            }]
        })

        generate_entry(dynamic__frame_sparkler_file)
    }

    function delete_texture_folder() {
        TXFA.splice(0, TXFA.length)
        let position = document.getElementsByClassName("file_is_highlighted")[0]

        let temp = {
            key: 'ArrowUp'
        }
        file_move_with_key(temp, true)
        position.parentElement.remove()

        file_viewer.focus()

    }
}
