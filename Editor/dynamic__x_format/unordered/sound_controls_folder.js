"use strict";
function load_x_d_sound_controls(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${soundsettings()}
${soundlist()}
   </div>
`

    file_editor.innerHTML = html

    function soundsettings() {
        let html
        html = `   
   <div style='padding-bottom:20px'>Sound Controls
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Timer</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_00}" data-outer_xfa="${id}"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_08}" data-outer_xfa="${id}"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_09}" data-outer_xfa="${id}"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_10}" data-outer_xfa="${id}"  data-inner_xfa="u8_10" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Amount</td>
                  <td colspan="3" class='no_border'>
                     <input disabled style="width:100%" type='text' value="${TXFA.section_16.length}" data-outer_xfa="${id}"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }
    function soundlist() {
        let html = ''
        if (TXFA.section_16.length === 0) {
            return html
        }
        html += `<div style='padding-bottom:20px'>section_16
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>`
        for (let i = 0; i < TXFA.section_16.length; i++) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Timer Repeat</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[i].f32_12}" data-outer_xfa="${id}.section_16[${i}]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[i].u8_08}" data-outer_xfa="${id}.section_16[${i}]"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[i].u8_09}" data-outer_xfa="${id}.section_16[${i}]"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Amount</td>
                  <td class='no_border'>
                     <input disabled style="width:100%" type='text' value="${TXFA.section_16[i].section_04.length}" data-outer_xfa="${id}.section_16[${i}]"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>`

            for (let ii = 0; ii < TXFA.section_16[i].section_04.length; ii++) {
                html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Section ${ii + 1}</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_16[${i}].section_04[${ii}]`, 'unordered_sound_section_00', 'sound_section', TXFA.section_16[i].section_04[ii].unordered_sound_section_00)}
                  </td>
               </tr>`
            }

        }
        html += `
            </tbody>
         </table>   
      </div>
   </div>`

        return html

    }

}
