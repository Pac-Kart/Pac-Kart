"use strict";
function load_x_d_car_00_184(id, id_index) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
    ${cartop()}
    ${car_00_184_04()}
    ${car_00_184_04_00()}
    ${car_00_184_04_00_16()}
    ${car_00_184_04_04()}
    ${car_00_184_04_08()}
   </div>
`

    file_editor.innerHTML = html

    function cartop() {

        let html = `
   <div style='padding-bottom:20px'>car_00_184
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_00}" data-outer_xfa="${id}"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_184_04() {
        let html = `
   <div style='padding-bottom:20px'>car_00_184_04
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>12 backing up acceleration?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_12}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_16}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_20}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_24}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>28 jump height</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_28}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_28" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_32}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_36</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_36}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_40}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_44</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_44}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_44" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_48</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_48}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_48" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_184_04_00() {
        let html = `
   <div style='padding-bottom:20px'>car_00_184_04_00
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_34</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].u8_34}" data-outer_xfa="${id}.section_04[0].section_00[0]"  data-inner_xfa="u8_34" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_35</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].u8_35}" data-outer_xfa="${id}.section_04[0].section_00[0]"  data-inner_xfa="u8_35" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].f32_40}" data-outer_xfa="${id}.section_04[0].section_00[0]"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_48</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].f32_48}" data-outer_xfa="${id}.section_04[0].section_00[0]"  data-inner_xfa="f32_48" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_52</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].f32_52}" data-outer_xfa="${id}.section_04[0].section_00[0]"  data-inner_xfa="f32_52" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_56</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].f32_56}" data-outer_xfa="${id}.section_04[0].section_00[0]"  data-inner_xfa="f32_56" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>gate?</td>
                  <td colspan="3" class='no_border'>
                  ${generate_linkbox(`${id}.section_04[0].section_00[0]`, 'unordered_gate_44', 'gate', TXFA.section_04[0].section_00[0].unordered_gate_44)}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_184_04_00_16() {
        let html = `
   <div style='padding-bottom:20px'>car_00_184_04_00_16
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_00}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_04}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_08}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_16}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_20}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_24}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_00[0].section_16[0].f32_32}" data-outer_xfa="${id}.section_04[0].section_00[0].section_16[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_184_04_04() {
        let html = `
   <div style='padding-bottom:20px'>car_00_184_04_04
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00 initial drift handaling?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_04[0].f32_00}" data-outer_xfa="${id}.section_04[0].section_04[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_04[0].f32_04}" data-outer_xfa="${id}.section_04[0].section_04[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08 drift handaling?</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_04[0].f32_08}" data-outer_xfa="${id}.section_04[0].section_04[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_184_04_08() {

        let html = `
   <div style='padding-bottom:20px'>car_00_184_04_08
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_00}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_04}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_08}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_16}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_20}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_24}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_32}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_36</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_36}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_40}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_48</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_48}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_48" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_52</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_52}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_52" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_56</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_56}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_56" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_64</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_64}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_64" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_68</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_68}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_68" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_72</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_72}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_72" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_76</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_76}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_76" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_80</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_80}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_80" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_84</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_08[0].f32_84}" data-outer_xfa="${id}.section_04[0].section_08[0]"  data-inner_xfa="f32_84" data-type="f32">
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
