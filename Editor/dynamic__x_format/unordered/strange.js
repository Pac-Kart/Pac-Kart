"use strict";
function load_x_d_strange(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
${main()}
${list1()}
   </div>
`

    file_editor.innerHTML = html
    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
    }

    function main() {
        let html
        html = `
   <div style='padding-bottom:20px'>Main Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_08}" data-outer_xfa="${id}"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_09</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_09}" data-outer_xfa="${id}"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_10</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_10}" data-outer_xfa="${id}"  data-inner_xfa="u8_10" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_12}" data-outer_xfa="${id}"  data-inner_xfa="u32_12" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_16}" data-outer_xfa="${id}"  data-inner_xfa="u32_16" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_20}" data-outer_xfa="${id}"  data-inner_xfa="u32_20" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_24}" data-outer_xfa="${id}"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_32}" data-outer_xfa="${id}"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Controls</td>
                  <td colspan="3" class='no_border'>
                  ${generate_linkbox(id, 'unordered_sound_controls_28', 'sound_controls', TXFA.unordered_sound_controls_28)}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function list1() {

        let html = `
   <div style='padding-bottom:20px'>section_48
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>link</th>
                        <th>x</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_04.length; i++) {

            html += `<tr>
               <td style="width:15%" class='no_border'>
                  ${generate_linkbox(`${id}.section_04[${i}]`, 'unordered_unknown_00_00', 'unknown_00', TXFA.section_04[i].unordered_unknown_00_00)}
               </td>
                  <td data-x="delete_main" data-xfa="section_48" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="5" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_48" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        TXFA.section_04.push({
            id: gen_id(),
            unordered_unknown_00_00: 0,
        })
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_04.splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
