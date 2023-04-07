function load_x_d_model_header(id, outerid, sub_group_index) {
    console.log(id)
    TXFA = Object.byString(XFA, id);

     let html = `<div style='overflow:hidden;height:100%'; ><div style="display:inline-block;width:95%;padding:5px;height:20%;">
    <input style='width:100%;' maxlength='52' data-outer_xfa="${id}" data-type="string" data-fixed="true" data-byte_amount="52" data-inner_xfa="name"  id='image_name' type='text' value='${TXFA.name}'>
    <br>
    <div>visibility
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody id="visibility_table">
               <tr>
                  <td style="width:10%" class='no_border'>x 1:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.x1}" data-outer_xfa="${id}.visibility" data-inner_xfa="x1" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>y 1:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.y1}" data-outer_xfa="${id}.visibility" data-inner_xfa="y1" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>z 1:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.z1}" data-outer_xfa="${id}.visibility" data-inner_xfa="z1" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>w 1:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.w1}" data-outer_xfa="${id}.visibility" data-inner_xfa="w1" data-type="float">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>x 2:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.x2}" data-outer_xfa="${id}.visibility" data-inner_xfa="x2" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>y 2:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.y2}" data-outer_xfa="${id}.visibility" data-inner_xfa="y2" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>z 2:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.z2}" data-outer_xfa="${id}.visibility" data-inner_xfa="z2" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>w 2:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.w2}" data-outer_xfa="${id}.visibility" data-inner_xfa="w2" data-type="float">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>x 3:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.x3}" data-outer_xfa="${id}.visibility" data-inner_xfa="x3" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>y 3:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.y3}" data-outer_xfa="${id}.visibility" data-inner_xfa="y3" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>z 3:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.z3}" data-outer_xfa="${id}.visibility" data-inner_xfa="z3" data-type="float">  </td>
                  <td style="width:10%" class='no_border'>w 3:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.visibility.w3}" data-outer_xfa="${id}.visibility" data-inner_xfa="w3" data-type="float">  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
   <br>`
   // <div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
   //           <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Model Section</span>
   //  </div>
   // `

    document.getElementById("file_editor").innerHTML = html

    // document.getElementById("new_entry").addEventListener("click", generate_model_section);
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="main_delete">X</a>'
    document.getElementById("image_name").addEventListener('change', change_name);
    document.getElementById("main_delete").addEventListener("click", splice_entry);

    let input_field = visibility_table.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }

    function change_name() {
        let temp_texture_name = this.value
        temp_texture_name = temp_texture_name.substr(0, 52)
        temp_texture_name = temp_texture_name.trim()

        let file_string
        if (temp_texture_name == "") {
            file_string = "Blank"
        } else {
            file_string = temp_texture_name
        }

        Object.byString(XFA, this.dataset.outer_xfa, this.dataset.inner_xfa, temp_texture_name)
        this.value = temp_texture_name
        position = document.getElementsByClassName("file_is_highlighted")[0].innerText = file_string

    }

    function generate_model_section() {
        let xid = gen_id()

        TXFA.sections.push({
            id: gen_id(),
            render: 0,
            sub_section: [],
        })

        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.sections.length === 0) {
            alert('broke how TXFA.length x')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA.sections.length; i++) {

                html += dynamic__model_section(TXFA.sections[i], i, )
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

        temp_xfa.splice(sub_group_index, 1)

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (temp_xfa.length === 0) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 0; i < temp_xfa.length; i++) {
                html += dynamic__model(temp_xfa[i], i, temp_xfa[i])
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
