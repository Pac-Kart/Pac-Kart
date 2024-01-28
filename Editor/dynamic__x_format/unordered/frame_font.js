function load_x_d_frame_font(id, id_index) {

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${fontsettings()}
${fontlist()}
  
   </div>
`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    add_events()

    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
    }
    x_field = file_editor.getElementsByClassName('tempchange')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('change', clickfile)
    }

    function clickfile() {
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    function fontsettings() {
        let html = ''

        html = `   
   <div style='padding-bottom:20px'>Font Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td class='no_border'>
                     ${genterate_linkbox_special(id, TXFA.texture_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Spacing?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_24}" data-outer_xfa="${id}"  data-inner_xfa="u32_24" data-type="u32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_08}" data-outer_xfa="${id}"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_09}" data-outer_xfa="${id}"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_10}" data-outer_xfa="${id}"  data-inner_xfa="u8_10" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_28[0].f32_00}" data-outer_xfa="${id}.section_28[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }

    function fontlist() {
        let html = `
   <div style='padding-bottom:20px'>section_36 List
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>Letter ?</th>
                        <th>Value ?</th>
                        <th>X ?</th>
                        <th>Y ?</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_36.length; i++) {
            html += `<tr>
            <td style="width:20%" class='no_border'>
            <input disabled style="width:100%" type='text' value="${String.fromCharCode(TXFA.section_36[i].u8_00)}" data-outer_xfa="${id}.section_00[0].section_192[0].section_24[${i}]" data-inner_xfa="f32_00" data-type="string" data-fixed="true" data-byte_amount="1">
               </td>
            <td style="width:20%" class='no_border'>
            <input class='tempchange' style="width:100%" type='text' value="${TXFA.section_36[i].u8_00}" data-outer_xfa="${id}.section_36[${i}]" data-inner_xfa="u8_00" data-type="u8">
               </td>
               <td style="width:20%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_36[i].f32_04}" data-outer_xfa="${id}.section_36[${i}]" data-inner_xfa="f32_04" data-type="f32">
               </td>
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_36[i].f32_08}" data-outer_xfa="${id}.section_36[${i}]" data-inner_xfa="f32_08" data-type="f32">
               </td>
                  <td data-x="delete_main" data-xfa="section_36" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="4" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_00[0].section_192[0].section_24" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        TXFA.section_36.push({
            u8_00: 48,
            f32_04: 0,
            f32_08: 0,
        })
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_36.splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
