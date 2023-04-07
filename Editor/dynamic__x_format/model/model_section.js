function load_x_d_model_section(id, outerid, sub_group_index) {
    console.log(id)
    TXFA = Object.byString(XFA, id);

    let html = `<div style="display:inline-block;width:95%;padding:5px;">
   <div style='height:5%'>
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%" class='no_border'>Render:</td>
                  <td class='no_border'><input style="width:100%" id='render' type='text' value="${TXFA.render.toFixed(2)}" data-outer_xfa="${id}" data-inner_xfa="render" data-type="float">  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>`
   // <div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
   //           <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Model</span>
   //           </div>`

    document.getElementById("file_editor").innerHTML = html

    // document.getElementById("new_entry").addEventListener("click", generate_texture);
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="main_delete">X</a>'

    document.getElementById("main_delete").addEventListener("click", splice_entry);
    document.getElementById("render").addEventListener("change", dyn_update_input);

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
        // generate_file_view()
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
