"use strict";
function load_x_d_frame_multi_font(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${multifont()}
   </div>
`

    file_editor.innerHTML = html

    function multifont() {
        let html
        html = `
   <div style='padding-bottom:20px'>Multi Font
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Font 1</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_04[0]`, 'unordered_frame_font_12', 'frame_font', TXFA.section_04[0].unordered_frame_font_12)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Font 2</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_04[0]`, 'unordered_frame_font_28', 'frame_font', TXFA.section_04[0].unordered_frame_font_28)}
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Font 3</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_04[0]`, 'unordered_frame_font_32', 'frame_font', TXFA.section_04[0].unordered_frame_font_32)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].u8_00}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].u8_01}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].u32_04}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].u32_08}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_24}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }
}
