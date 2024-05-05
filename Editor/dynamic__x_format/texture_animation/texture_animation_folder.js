"use strict";
function load_x_d_textures_animation_folder(id) {
    let html = ''
    file_editor.innerHTML = html

    function generate_texture() {
        TXFA.push({
            id: gen_id(),
            section_00: [{
                u32_00: 0,
                section_04: [{
                    u32_00: 0,
                    //amount?
                    section_04: [],
                    u8_11: 0,
                    u32_20: 0,
                    //amount?
                }],
                u32_08: 0,
                //amount?
                section_12: [],
                u32_16: 0,
                //amount?
                section_20: [],
            }],
        })

        generate_entry(dynamic__texture_animations)
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
