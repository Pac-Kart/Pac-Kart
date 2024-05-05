"use strict";
function load_x_d_car_00_180(id, id_index) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
${car_00_180()}
${car_00_180_00()}
${car_00_180_00_08()}
${car_00_180_04()}
${car_00_180_04_56()}
${car_00_180_04_64()}
${car_00_180_04_80()}



   </div>
`

    file_editor.innerHTML = html

    function car_00_180() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>sound_section 1</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}`, 'unordered_sound_section_08', 'sound_section', TXFA.unordered_sound_section_08)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>sound_section 2</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}`, 'unordered_sound_section_12', 'sound_section', TXFA.unordered_sound_section_12)}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_00() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180_00
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].f32_00}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.section_00[0].texture_04`, TXFA.section_00[0].texture_04)}
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_24</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].u32_24}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_24" data-type="u32">
                  </td>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_00_08() {
        let colortxfa = TXFA.section_00[0].section_08[0]
        let html = `
   <div style='padding-bottom:20px'>car_00_180_00_08 Skid Mark Colors?
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>Color</th>
                        <th>Red</th>
                        <th>Blue</th>
                        <th>Green</th>
                        <th>Alpha</th>
                    </tr>
            <tr>
               <td style="width:15%" class='no_border'>
                  <input disabled style="width:100%" type='color' value="#${colortxfa.u8_00.toString(16).padStart(2, 0)}${colortxfa.u8_01.toString(16).padStart(2, 0)}${colortxfa.u8_02.toString(16).padStart(2, 0)}" data-outer_xfa="${id}.section_00[0].section_08[0]" data-inner_xfa="f32_08" data-type="f32">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_00}" data-outer_xfa="${id}.section_00[0].section_08[0]" data-inner_xfa="u8_00" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_01}" data-outer_xfa="${id}.section_00[0].section_08[0]" data-inner_xfa="u8_01" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_02}" data-outer_xfa="${id}.section_00[0].section_08[0]" data-inner_xfa="u8_02" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_03}" data-outer_xfa="${id}.section_00[0].section_08[0]" data-inner_xfa="u8_03" data-type="u8">
               </td>
            </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_04() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180_04
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00 gravity</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_00}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_04}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_08}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_12}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_16}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_20}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_32}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_36</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_36}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_40}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_44</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_44}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_44" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_48</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_48}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_48" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_52</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_52}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_52" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_60</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].u32_60}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="u32_60" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>guardian meter</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_72}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_72" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_76</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].f32_76}" data-outer_xfa="${id}.section_04[0]"  data-inner_xfa="f32_76" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_04_56() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180_04_56
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_56[0].u32_04}" data-outer_xfa="${id}.section_04[0].section_56[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u16_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_56[0].u16_12}" data-outer_xfa="${id}.section_04[0].section_56[0]"  data-inner_xfa="u16_12" data-type="u16">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_56[0].u32_20}" data-outer_xfa="${id}.section_04[0].section_56[0]"  data-inner_xfa="u32_20" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_28</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_56[0].u32_28}" data-outer_xfa="${id}.section_04[0].section_56[0]"  data-inner_xfa="u32_28" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_04_64() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180_04_64
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_64[0].u32_04}" data-outer_xfa="${id}.section_04[0].section_64[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u16_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_64[0].u16_12}" data-outer_xfa="${id}.section_04[0].section_64[0]"  data-inner_xfa="u16_12" data-type="u16">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_64[0].u32_20}" data-outer_xfa="${id}.section_04[0].section_64[0]"  data-inner_xfa="u32_20" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_28</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_64[0].u32_28}" data-outer_xfa="${id}.section_04[0].section_64[0]"  data-inner_xfa="u32_28" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_04_80() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180_04_80
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_80[0].u32_00}" data-outer_xfa="${id}.section_04[0].section_80[0]"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_80[0].f32_08}" data-outer_xfa="${id}.section_04[0].section_80[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function car_00_180_04_80() {
        let html = `
   <div style='padding-bottom:20px'>car_00_180_04_80
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_92[0].f32_00}" data-outer_xfa="${id}.section_04[0].section_92[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_92[0].f32_04}" data-outer_xfa="${id}.section_04[0].section_92[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_04[0].section_92[0].f32_08}" data-outer_xfa="${id}.section_04[0].section_92[0]"  data-inner_xfa="f32_08" data-type="f32">
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
