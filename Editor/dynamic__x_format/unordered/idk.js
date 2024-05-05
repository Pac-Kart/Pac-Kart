"use strict";
function load_x_d_idk__file(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${idksection()}
${idksection12()}
${idksection1216()}
   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    function idksection() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>idk
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Render Distance</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_24}" data-outer_xfa="${id}"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_01}" data-outer_xfa="${id}"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_02}" data-outer_xfa="${id}"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>64</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_64}" data-outer_xfa="${id}"  data-inner_xfa="u8_64" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>65</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_65}" data-outer_xfa="${id}"  data-inner_xfa="u8_65" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>66</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_66}" data-outer_xfa="${id}"  data-inner_xfa="u8_66" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>67</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_67}" data-outer_xfa="${id}"  data-inner_xfa="u8_67" data-type="u8">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function idksection12() {
        if (TXFA.section_12.length === 0) {
            return ''
        }
        let html = ''

        html = `
   <div style='padding-bottom:20px'>idk_12
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_00" data-type="u32">
                  <td style="width:10%;white-space:nowrap;" class='no_border'>04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_04}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_04" data-type="u32">
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_08}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>09</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_09}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>10</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_10}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_10" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>11</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_11}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_11" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_12}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_12" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>13</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_13}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_13" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>32</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_32}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>48</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_48}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_48" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>52</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_52}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_52" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>56</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_56}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_56" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`

        return html

    }
    function idksection1216() {
        if (TXFA.section_12[0]?.section_16?.length === 0) {
            return ''
        }
        let html = ''

        html = `
   <div style='padding-bottom:20px'>idk_12_16
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_00}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_04}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_08}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_16}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_20}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_24}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>32</td>
                  <td coldspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].f32_32}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="f32_32" data-type="f32">
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
