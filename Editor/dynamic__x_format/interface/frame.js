"use strict";
function load_x_d_interface(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${interfacesettings()}
${interfacesettingsoption1()}
${interfacesettingsoption2()}
   </div>
`

    file_editor.innerHTML = html

    function interfacesettings() {
        let html
        html = `
   <div style='padding-bottom:20px'>Interface Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Controls 1</td>
                  <td class='no_border'>
                  ${generate_linkbox(id,'unordered_sound_controls_28','sound_controls',TXFA.unordered_sound_controls_28)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Controls 2</td>
                  <td class='no_border'>
                  ${generate_linkbox(id,'unordered_sound_controls_36','sound_controls',TXFA.unordered_sound_controls_36)}
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Controls 3</td>
                  <td class='no_border'>
                  ${generate_linkbox(id,'unordered_sound_controls_40','sound_controls',TXFA.unordered_sound_controls_40)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Controls 4</td>
                  <td class='no_border'>
                  ${generate_linkbox(id,'unordered_sound_controls_52','sound_controls',TXFA.unordered_sound_controls_52)}
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_16}" data-outer_xfa="${id}"  data-inner_xfa="u32_16" data-type="u16">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_20}" data-outer_xfa="${id}"  data-inner_xfa="u32_20" data-type="u32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_24}" data-outer_xfa="${id}"  data-inner_xfa="u32_24" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_60</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_60}" data-outer_xfa="${id}"  data-inner_xfa="f32_60" data-type="f32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
        
    }
    function interfacesettingsoption1() {
        let html = ''
        if (TXFA.section_48.length) {
            
        
        html = `   
   <div style='padding-bottom:20px'>section_48
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_48[0].f32_00}" data-outer_xfa="${id}.section_48[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`}
        return html
        
    }
    function interfacesettingsoption2() {
        let html = ''
        if (TXFA.section_56.length) {
            
        
        html = `   
   <div style='padding-bottom:20px'>section_56
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_56[0].u32_04}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`}
        return html
        
    }
}