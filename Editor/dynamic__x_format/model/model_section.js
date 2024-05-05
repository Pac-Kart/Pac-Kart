"use strict";
function load_x_d_model_section(id, outerid, sub_group_index) {
    let html = `${load_world_canvas_string(TXFA.sub_section)}`

    file_editor.innerHTML = html
    file_editor_side_panel.innerHTML = `<a>Render</a><br>
        <input style="width:100%" id='render' type='text' value="${TXFA.render}" data-outer_xfa="${id}" data-inner_xfa="render" data-type="float">`

    document.getElementById("_2nd_data_bar").innerHTML = ''

    let tempsection = TXFA.sub_section
    let modelarray = []
    for (let i = 0; i < tempsection.length; i++) {
        modelarray.push({
            v_array: tempsection[i].v_array,
            u_array: tempsection[i].u_array,
            n_array: tempsection[i].n_array,
            c_array: tempsection[i].c_array,
        })
    }
    gen_model_box(modelarray)

    function generate_texture() {
        let xid = gen_id()

        TXFA.sub_section.push({
            id: gen_id(),
            c_array: [],
            u_array: [],
            v_array: [],
            texture: [0, 0, 0],
            unknown_1: 0,
            unknown_2: 0,
            unknown_3: 0,
            unknown_4: 0,
            unknown_5: 0,
            unknown_6: 0,
            unknown_7: 0,
            unknown_8: 0,
            unknown_9: 0,
            unknown_10: 0,
        })

        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.sub_section.length === 0) {
            alert('broke how TXFA.length x')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA.sub_section.length; i++) {

                html += dynamic__model_sub_section(TXFA.sub_section[i], i)
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

    function splice_entry() {
        let temp_xfa = Object.byString(XFA, outerid);
        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
        let html = ''
        console.log(temp_xfa)

        temp_xfa.sections.splice(sub_group_index, 1)

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (temp_xfa.sections.length === 0) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 0; i < temp_xfa.sections.length; i++) {
                html += dynamic__model_section(temp_xfa.sections[i], i, temp_xfa.sections[i])
            }

            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)
            outer_html.children[0].click()
            outer_html.children[0].click()
        }
        if (sub_group_index === 0) {
            outer_html.children[sub_group_index + 2].click()
        } else {
            outer_html.children[sub_group_index + 2].children[2].click()
        }
        file_viewer.focus()

    }
}
