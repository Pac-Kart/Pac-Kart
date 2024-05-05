"use strict";
function load_x_d_link_main_group(id, id_1, id_2) {

    // TXFA = Object.byString(x, id + '[0]');

    let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Sub Group</span>
             </div>`

    file_editor.innerHTML = html
    // document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="group_splice">X</a>'
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById("new_entry").addEventListener("click", generate_sub_group);
    // document.getElementById("group_splice").addEventListener("click", delete_group);

    function generate_sub_group() {
        let xid = gen_id()

        TXFA.section_00[0].section_04.push({
            id: xid,
            u32_00: 1,
            section_04: [],
            section_08: [{
                section_00: ['blank'],
                u32_04: 1,

            }],
            section_12: ['Blank'],
            u32_16: 1,
            section_20: [{
                u32_00: 0,
                section_04: [],
                u16_08: 0,
            }],
            u32_24: 1,
            section_28: [{
                u32_00: 0,
                section_04: [],
                u16_08: 0,
            }],
        })

        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.section_00[0].section_04.length === 0) {
            alert('broke how TXFA.length load_x_d_link_main_group')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA.section_00[0].section_04.length; i++) {

                html += dynamic__link_main_sub_group(TXFA.section_00[0].section_04[i], i, TXFA.section_00[0].section_04[i].id)
            }
            outer_html.innerHTML += html
            // x_addEventListener_file_viewer(outer_html)

            outer_html.children[0].className = 'file_arrow'
            outer_html.children[0].click()
            if (outer_html.children[0].innerText === '→') {
                outer_html.children[0].click()
            }

        }
        file_viewer.focus()
    }

    function delete_group() {
        let temp_xfa = Object.byString(x, id_1);
        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
        let html = ''
        console.log(temp_xfa, id_1, id_2)
        temp_xfa.splice(id_2, 1)
        // let position = document.getElementsByClassName("file_is_highlighted")[0]

        // position.parentElement.remove()

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (temp_xfa.length === 0) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 0; i < temp_xfa.length; i++) {
                html += dynamic__link_main_group(temp_xfa[i], i, temp_xfa[i].id)
            }

            outer_html.innerHTML += html
            // x_addEventListener_file_viewer(outer_html)
            outer_html.children[2].click()
            outer_html.children[0].click()
            outer_html.children[0].click()
        }
        if (id_2 === 0) {
            outer_html.children[id_2 + 2].click()
        } else {
            outer_html.children[id_2 + 2].children[2].click()
        }
        file_viewer.focus()

    }
    let temp_xfa = Object.byString(x, id_1);

}
