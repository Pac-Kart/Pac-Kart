function load_x_d_sub_file(id, id_index) {

    // let html = 'director / datapack editor / basic ???'
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
   
   <div style='height:15%'>Directory Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td class='no_border'>Index
                  </td>
                <td class='no_border'>
                    <input style='width:100%;' title='Game Version' type='text' data-outer_xfa="${id}"  data-inner_xfa="index" data-type="u32" value="${TXFA.index}">
                </td>
               </tr>      
               <tr>
                  <td class='no_border'>Version
                  </td>
                <td class='no_border'>
                    <input style='width:100%;' title='Game Version' type='text' data-outer_xfa="${id}"  data-inner_xfa="version" data-type="u32" value="${TXFA.version}">
                </td>
               </tr>      
            </tbody>
        </table>    
      </div>
   </div>
   <div style='height:15%'>Share
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                  <tr>
                      <td style="width:10%" class='no_border'>file 1</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.string_1[0]}" data-outer_xfa="${id}.datapack[0].linked_files.string_1" data-inner_xfa="0" data-type="string" data-fixed="false" data-byte_amount="12" maxlength="12" >  </td>
                      <td sty0xle="width:10%" class='no_border'>index</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_92}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_92" data-type="u32"> </td>
                      <td style="width:10%" class='no_border'>unknown</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_96}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_96" data-type="u32"> </td>
                   </tr>
                  <tr>
                      <td style="width:10%" class='no_border'>file 2</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.string_2[0]}" data-outer_xfa="${id}.datapack[0].linked_files.string_2" data-inner_xfa="0" data-type="string" data-fixed="false" data-byte_amount="12" maxlength="12" >  </td>
                      <td style="width:10%" class='no_border'>index</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_112}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_112" data-type="u32"> </td>
                      <td style="width:10%" class='no_border'>unknown</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_116}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_116" data-type="u32"> </td>
                   </tr>
               </tbody>
         </table>   
      </div>
</div>
      ${getfilespecific()}

`
    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    add_events()


    //     html = `
    // <div style="display:inline-block;width:95%;padding:5px;">

    //    <div style='height:23%'>Share
    //       <div class='save_records_boarder'>
    //          <table style='width:100%;' >
    //             <tbody>`

    //     for (let i = 0; i < 2; i++) {
    //         html += `<tr>
    //                       <td style="width:10%" class='no_border'>file ${i + 1}:</td>
    //                       <td class='no_border'><input style="width:100%" type='text' value="${TXFA.linked_strings[i].string}" data-outer_xfa="${id}.linked_strings[${i}]" data-inner_xfa="string" data-type="string" data-fixed="false" data-byte_amount="12" maxlength="12" >  </td>
    //                       <td sty0xle="width:10%" class='no_border'>index</td>
    //                       <td class='no_border'><input style="width:100%" type='text' value="${TXFA.linked_strings[i].unknown1}" data-outer_xfa="${id}.linked_strings[${i}]" data-inner_xfa="unknown1" data-type="u32"> </td>
    //                       <td style="width:10%" class='no_border'>unknown</td>
    //                       <td class='no_border'><input style="width:100%" type='text' value="${TXFA.linked_strings[i].unknown2}" data-outer_xfa="${id}.linked_strings[${i}]" data-inner_xfa="unknown2" data-type="u32"> </td>
    //                    </tr>`
    //     }
    //     html += `
    //             </tbody>
    //          </table>   
    //       </div>
    //    </div>
    // `
    // document.getElementById("file_editor").innerHTML = html
    //     document.getElementById("_2nd_data_bar").innerHTML = ''
    //     // document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="file_splice">X</a>'

    //     // document.getElementById("file_splice").addEventListener('click', delete_file)

    //     let input_field = file_editor.getElementsByTagName('INPUT')
    //     for (let i = 0; i < input_field.length; i++) {
    //         input_field[i].addEventListener('change', dyn_update_input)

    //     }
    //     function delete_file() {
    //         // let position = document.getElementsByClassName("file_is_highlighted")[0]
    //         // let temp = {
    //         //     key: 'ArrowUp'
    //         // }
    //         // file_move_with_key(temp, true)
    //         // XFA.splice(id_index, 1)

    //         outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
    //         let html = ''
    //         XFA.splice(id_index, 1)

    //         for (let i = outer_html.children.length - 1; i > 2; i--) {

    //             outer_html.children[i].remove()
    //         }
    //         if (XFA.length === 1) {
    //             outer_html.children[0].className = 'no_arrow'
    //         } else {

    //             for (let i = 1; i < XFA.length; i++) {
    //                 html += dynamic__x_generator_file_list(XFA[i], i)
    //             }

    //             outer_html.innerHTML += html
    //             x_addEventListener_file_viewer(outer_html)
    //             outer_html.children[0].click()
    //             outer_html.children[0].click()
    //         }
    //         if (id_index === 1) {
    //             outer_html.children[id_index + 1].click()
    //         } else {
    //             outer_html.children[id_index + 1].children[2].click()
    //         }
    //         file_viewer.focus()

    //     }

    function getfilespecific() {
        let html
        switch (TXFA.type) {
        case "link":
        case "car":
        case "interface":
            html = `<div style='height:15%'>Basic
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                  <tr>
                      <td sty0xle="width:10%" class='no_border'>unknown 1</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].ordered[0].file_specific[0].u32_00}" data-outer_xfa="${id}.datapack[0].ordered[0].file_specific[0]" data-inner_xfa="u32_00" data-type="u32"> </td>
                      <td style="width:10%" class='no_border'>unknown 2</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].ordered[0].file_specific[0].basic_04[0].u32_04}" data-outer_xfa="${id}.datapack[0].ordered[0].file_specific[0].basic_04[0]" data-inner_xfa="u32_04" data-type="u32"> </td>
                   </tr>
                  <tr>
                      <td style="width:10%" class='no_border'>Linked Section</td>
                      <td class='no_border'>
                          ${genterate_linkbox(id,TXFA.type,TXFA.datapack[0].ordered[0].file_specific[0].basic_04[0].unordered_link)}
                            </td>
                   </tr>
               </tbody>
         </table>   
      </div>
    </div>`

            break
        default:
            html = ''
        }
        return html

    }

}
