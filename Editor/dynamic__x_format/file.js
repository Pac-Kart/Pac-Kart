function load_x_d_sub_file(id, id_index) {
    TXFA = Object.byString(XFA, id);

    html = `
<div style="display:inline-block;width:95%;padding:5px;">
   
   <div style='height:23%'>Share
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>`

    for (let i = 0; i < 2; i++) {
        html += `<tr>
                      <td style="width:10%" class='no_border'>file ${i + 1}:</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.linked_strings[i].string}" data-outer_xfa="${id}.linked_strings[${i}]" data-inner_xfa="string" data-type="string" data-fixed="false" data-byte_amount="12" maxlength="12" >  </td>
                      <td sty0xle="width:10%" class='no_border'>index</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.linked_strings[i].unknown1}" data-outer_xfa="${id}.linked_strings[${i}]" data-inner_xfa="unknown1" data-type="u32"> </td>
                      <td style="width:10%" class='no_border'>unknown</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.linked_strings[i].unknown2}" data-outer_xfa="${id}.linked_strings[${i}]" data-inner_xfa="unknown2" data-type="u32"> </td>
                   </tr>`
    }
    html += `
            </tbody>
         </table>   
      </div>
   </div>
`
    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="file_splice">X</a>'

    document.getElementById("file_splice").addEventListener('click', delete_file)

    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)

    }
    function delete_file() {
        // let position = document.getElementsByClassName("file_is_highlighted")[0]
        // let temp = {
        //     key: 'ArrowUp'
        // }
        // file_move_with_key(temp, true)
        // XFA.splice(id_index, 1)

        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
        let html = ''
        XFA.splice(id_index, 1)

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (XFA.length === 1) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 1; i < XFA.length; i++) {
                html += dynamic__x_generator_file_list(XFA[i], i)
            }

            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)
            outer_html.children[0].click()
            outer_html.children[0].click()
        }
        if (id_index === 1) {
            outer_html.children[id_index + 1].click()
        } else {
            outer_html.children[id_index + 1].children[2].click()
        }
        file_viewer.focus()

    }

}
