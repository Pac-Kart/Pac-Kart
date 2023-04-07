function load_x_d_model_folder(id) {
    console.log(id)
    TXFA = Object.byString(XFA, id);
    let html = ''
    // let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
    //          <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Model</span>
    //          </div>`

    document.getElementById("file_editor").innerHTML = html

    // document.getElementById("new_entry").addEventListener("click", generate_texture);
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="main_delete">X</a>'

    document.getElementById("main_delete").addEventListener("click", delete_model_folder);

    function generate_texture() {
        let xid = gen_id()

        TXFA.push({
            id: gen_id(),
            magic: 1537,
            name: `PK-Mod-Gen-${TXFA.length}.gx`,
            second_names: ['Second name ?'],
            sections: [],
            visibility: {
                x1: 0,
                x2: 0,
                x3: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                z1: 0,
                z2: 0,
                z3: 0,
                w1: 0,
                w2: 0,
                w3: 0,
            }
        })

        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.length === 0) {
            alert('broke how TXFA.length x')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA.length; i++) {

                html += dynamic__model(TXFA[i], i, TXFA[i][1])
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
        // generate_file_view()
    }

    function delete_model_folder() {
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
