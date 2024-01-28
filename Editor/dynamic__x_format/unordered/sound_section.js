function load_x_d_sound_section(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${soundsettings()}
   </div>
`

    document.getElementById("file_editor").innerHTML = html

    add_events()

    function soundsettings() {
        let html
        html = `   
   <div style='padding-bottom:20px'>Sound Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound</td>
                  <td class='no_border'>
                     ${genterate_linkbox_special(id,TXFA.sound_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_04}" data-outer_xfa="${id}"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_05}" data-outer_xfa="${id}"  data-inner_xfa="u8_05" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_06}" data-outer_xfa="${id}"  data-inner_xfa="u8_06" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Volume</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_16}" data-outer_xfa="${id}"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_20}" data-outer_xfa="${id}"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 5</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_24}" data-outer_xfa="${id}"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 6</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].f32_00}" data-outer_xfa="${id}.section_08[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Propogation</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].f32_04}" data-outer_xfa="${id}.section_08[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 7</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].u8_08}" data-outer_xfa="${id}.section_08[0]"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 8</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].u8_09}" data-outer_xfa="${id}.section_08[0]"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 9</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].f32_12}" data-outer_xfa="${id}.section_08[0]"  data-inner_xfa="f32_12" data-type="f32">
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