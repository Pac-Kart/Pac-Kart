"use strict";
function load_x_d_varibles_folder(id) {
    let html = ''

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    function plus_button() {
        TXFA.section_04.push({
        id: gen_id(),
        section_00: ['Blank'],
        u8_04: 0,
        u8_05: 0,
        u8_06: 0,
        u8_07: 0,
        u32_08: 0,
        section_12: [],
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u8_32: 0,
        u8_33: 0,
        })

        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.section_04.length === 0) {
            alert('broke')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA.section_04.length; i++) {

                html += dynamic__interface_04(TXFA.section_04[i])
            }
            outer_html.innerHTML += html

            outer_html.children[0].className = 'file_arrow'
            outer_html.children[0].click()
            if (outer_html.children[0].innerText === '→') {
                outer_html.children[0].click()
            }

        }
        file_viewer.focus()
    }

}