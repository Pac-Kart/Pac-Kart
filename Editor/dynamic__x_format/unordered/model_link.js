"use strict";
function load_x_d_model_link(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${modellinksettings()}
${modellinksettingsoption1()}
${modellinksettingsoption2()}
${modellinksettingsoption3()}

   </div>
`
    file_editor.innerHTML = html

    document.getElementById("name").addEventListener('change', edit_change_name);

    function modellinksettings() {
        let html
        html = `
   <div style='padding-bottom:20px'>Model Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td colspan="3" class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_04[0]}" data-outer_xfa="${id}.section_04"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_00}" data-outer_xfa="${id}"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_36</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_36}" data-outer_xfa="${id}"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }
    function modellinksettingsoption1() {
        let html = ''
        if (TXFA.section_52.length) {

            html = `
   <div style='padding-bottom:20px'>Section 52
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_52[0].f32_00}" data-outer_xfa="${id}.section_52[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_52[0].f32_04}" data-outer_xfa="${id}.section_52[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        }
        return html

    }
    function modellinksettingsoption2() {
        let html = ''
        if (TXFA.section_56.length) {

            html = `
   <div style='padding-bottom:20px'>Section 56
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_56[0].f32_00}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_56[0].f32_04}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        }
        return html

    }

    function modellinksettingsoption3() {
        let html = ''
        if (TXFA.section_64.length) {

            html = `
   <div style='padding-bottom:20px'>Section 64
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_00}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_04}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_08}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_16}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_20}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_24}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td colspan="3" class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_32}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        }
        return html

    }

}
