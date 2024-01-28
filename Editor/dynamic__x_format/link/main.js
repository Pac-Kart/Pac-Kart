function load_x_d_link_main(id, outer_id) {
    // TXFA = Object.byString(x, id);
    console.log(id)
    let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Group</span>
             </div>`

    document.getElementById("file_editor").innerHTML = html

    document.getElementById("new_entry").addEventListener("click", generate_sub_group);
    document.getElementById("_2nd_data_bar").innerHTML = ''
    // document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="main_delete">X</a>'

    // document.getElementById("main_delete").addEventListener("click", delete_main_link);

    function generate_sub_group() {
        let xid = gen_id()

        TXFA.push({
            id:xid,
            section_00: [{
                section_04:[],
            }]
                  })
        // [[], xid]

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

                html += dynamic__link_main_group(TXFA[i], i, TXFA[i].id)
            }
            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)

            outer_html.children[2].click()
            outer_html.children[0].className = 'file_arrow'
            outer_html.children[0].click()
            if (outer_html.children[0].innerText === '→') {
                outer_html.children[0].click()
            }

        }
        file_viewer.focus()
        // generate_file_view()
    }

    function delete_main_link() {
        TXFA.splice(0, TXFA.length)
        let position = document.getElementsByClassName("file_is_highlighted")[0]

        let temp = {
            key: 'ArrowUp'
        }
        file_move_with_key(temp, true)
        position.parentElement.remove()
        temp_xfa = Object.byString(XFA, outer_id);
        if (temp_xfa.section_main.length !== 0 || temp_xfa.section_intro.length !== 0 || temp_xfa.section_demo[0] !== null) {} else {
            position = document.getElementsByClassName("file_is_highlighted")[0].parentElement.children[0].className = 'no_arrow'
        }

        file_viewer.focus()

    }

}
