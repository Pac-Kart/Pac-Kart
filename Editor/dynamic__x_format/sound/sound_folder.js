"use strict";
function load_x_d_sound_folder(id) {
    TXFA = Object.byString(x, id);
    let html = ''

    file_editor.innerHTML = html

    document.getElementById("_2nd_data_bar").innerHTML = ''

    function generate_sound() {
        let xid = gen_id()

        let temp_array = new ArrayBuffer(64)

        TXFA.push({
            id: gen_id(),
            unknown1: 0,
            soundsamplerate: 22050,
            unknown2: 0,
            unknown3: 0,
            sound_data: [temp_array]
        })

        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.length === 0) {
            alert('broke how TXFA.length load_x_d_link_main')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA.length; i++) {

                html += dynamic__sound(TXFA[i], i, TXFA[i][1])
            }
            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)

            outer_html.children[0].className = 'file_arrow'
            outer_html.children[0].click()
            if (outer_html.children[0].innerText === '→') {
                outer_html.children[0].click()
            }

        }
        file_viewer.focus()
    }

    function delete_sound_folder() {
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
