function load_x_d_model(id, outerid, sub_group_index) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${modelsettings()}
   
   </div>
`

    document.getElementById("file_editor").innerHTML = html

    add_events()
    
    function modelsettings() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Model Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture Animation 1</td>
                  <td class='no_border'>
                     ${genterate_linkbox_special(id,TXFA.animation)}
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture Animation 2</td>
                  <td class='no_border'>
                     ${genterate_linkbox_special(id,TXFA.unknown_24_animation)}
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td class='no_border'>
                     ${genterate_linkbox_special(id,TXFA.texture)}
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_00}" data-outer_xfa="${id}"  data-inner_xfa="unknown_00" data-type="u32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_08}" data-outer_xfa="${id}"  data-inner_xfa="unknown_08" data-type="u32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_12}" data-outer_xfa="${id}"  data-inner_xfa="unknown_12" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_13}" data-outer_xfa="${id}"  data-inner_xfa="unknown_13" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 5</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_15}" data-outer_xfa="${id}"  data-inner_xfa="unknown_15" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 6</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_16}" data-outer_xfa="${id}"  data-inner_xfa="unknown_16" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 7</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_15}" data-outer_xfa="${id}"  data-inner_xfa="unknown_15" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 8</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_28}" data-outer_xfa="${id}"  data-inner_xfa="unknown_28" data-type="u32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 9</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_44}" data-outer_xfa="${id}"  data-inner_xfa="unknown_44" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 10</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_45}" data-outer_xfa="${id}"  data-inner_xfa="unknown_45" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 11</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_46}" data-outer_xfa="${id}"  data-inner_xfa="unknown_46" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_47}" data-outer_xfa="${id}"  data-inner_xfa="unknown_47" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 13</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_49}" data-outer_xfa="${id}"  data-inner_xfa="unknown_49" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 14</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_52}" data-outer_xfa="${id}"  data-inner_xfa="unknown_52" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 15</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_53}" data-outer_xfa="${id}"  data-inner_xfa="unknown_53" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_54}" data-outer_xfa="${id}"  data-inner_xfa="unknown_54" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 17</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown_55}" data-outer_xfa="${id}"  data-inner_xfa="unknown_55" data-type="u8">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
        
    }

    // console.log(id)

    // temp_xfa_index = 1
    // // TXFA = Object.byString(XFA, id);
    // let html = 'wip'
    // // let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'></div>`
    //         //   <input type="text" value="${TXFA.texture}">
    //         //   <input type="text" value="${TXFA.animation}">
    //         //  </div>
    //         // ${xfa_index_(TXFA.texture[0], 1, 'textures')}
    //         // <br>
    //         // ${xfa_index_(TXFA.animation[0], 1, 'texture_animations')}`

    // document.getElementById("file_editor").innerHTML = html

    // document.getElementById("_2nd_data_bar").innerHTML = ''

    // // document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="main_delete">X</a>'
    // // document.getElementById("main_delete").addEventListener("click", splice_entry);


    
    // let x_field = file_editor.getElementsByClassName('content_select')
    // for (let i = 0; i < x_field.length; i++) {
    //     x_field[i].addEventListener('change', select_box)
    // }

    // function select_box(e) {
    //     eee = this
    //     let val = this.children[1].children[0].value
    //     if(val === "-1"){
    //         this.children[0].children[0].disabled = true
    //     }else if(val === '0'){
            
    //         this.children[0].children[0].disabled = false
    //     }else{
    //         this.children[0].children[0].disabled = false
    //         this.children[0].children[0].disabled.innerHTML = "<input>"
    //     }
        
    //     console.log(this.children[1].children[0])
    // }


    // function splice_entry() {
    //     let temp_xfa = Object.byString(XFA, outerid);
    //     let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
    //     let html = ''
    //     console.log(temp_xfa)

    //     temp_xfa.sub_section.splice(sub_group_index, 1)

    //     for (let i = outer_html.children.length - 1; i > 2; i--) {

    //         outer_html.children[i].remove()
    //     }
    //     if (temp_xfa.sub_section.length === 0) {
    //         outer_html.children[0].className = 'no_arrow'
    //     } else {

    //         for (let i = 0; i < temp_xfa.sub_section.length; i++) {
    //             html += dynamic__model_sub_section(temp_xfa.sub_section[i], i)
    //         }

    //         outer_html.innerHTML += html
    //         x_addEventListener_file_viewer(outer_html)
    //         outer_html.children[0].click()
    //         outer_html.children[0].click()
    //     }
    //     if (sub_group_index === 0) {
    //         outer_html.children[sub_group_index + 2].click()
    //     } else {
    //         outer_html.children[sub_group_index + 2].children[2].click()
    //     }
    //     file_viewer.focus()

    // }

    // function xfa_index_(x, x_index, x_type) {

    //     let box_1
    //     let box_2 = ''

    //     if (x === undefined) {
    //         box_1 = '<input disabled>'
    //     } else {
    //         if (x[2] === 0) {
    //             box_1 = "<select>"
    //             for (let i = 0; i < XFA[x_index][x_type].length; i++) {
    //                 let is_selected = ''
    //                 let options_name;

    //                 if (x_type === "textures" || x_type === "models") {
    //                     options_name = XFA[x_index][x_type][i].name
    //                 } else {
    //                     options_name = `Index ${i}`
    //                 }

    //                 if (x[1] === i) {
    //                     is_selected = "selected"
    //                 }
    //                 box_1 += `<option ${is_selected} value="${i}">${options_name}</option>`
    //             }
    //             box_1 += "</select>"
    //         } else {
    //             box_1 = "<input>"
    //         }
    //     }

    //     let box_2_array = [`-1">None`, `0">0 - this`, `1">1 - ${XFA[temp_xfa_index].linked_strings[0].string}`, `2">2 - ${XFA[temp_xfa_index].linked_strings[1].string}`]

    //     for (let i = 0; i < 4; i++) {
    //         let is_selected = ''
    //         if (x === undefined) {
    //         } else {
    //             if (x[2] === i-1) {
    //                 is_selected = 'selected'
    //             }
    //         }
    //         box_2 += `<option ${is_selected} value="${box_2_array[i]}</option>`
    //     }
    //     let html = `
    //     <span class="content_select">
    //         <span style="width:80%">
    //             ${box_1}
    //         </span>
    //         <span style="width:20%">
    //             <select>
    //                 ${box_2}
    //             </select>
    //         </span>
    //     </span>`

    //     return html

    // }
}
