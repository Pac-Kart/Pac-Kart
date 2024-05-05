"use strict";
function load_x_d_world_settings(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
${main()}
${minimap()}
${shadow()}
${section36()}
${section48()}
${section52()}
${section56()}
${section60()}
${section64()}
${section72()}
${section192()}
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
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture 1</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.texture_16`, TXFA.texture_16)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture 2</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.texture_20`, TXFA.texture_20)}
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture 3</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.texture_24`, TXFA.texture_24)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Font</td>
                  <td class='no_border'>
                  ${generate_linkbox(id, 'unordered_frame_font_88', 'frame_font', TXFA.unordered_frame_font_88)}
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Music Name</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_76[0]}" data-outer_xfa="${id}.section_76"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Field of View</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_08}" data-outer_xfa="${id}"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Shine 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_28}" data-outer_xfa="${id}"  data-inner_xfa="f32_28" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Shine 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_32}" data-outer_xfa="${id}"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_40}" data-outer_xfa="${id}"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_44</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_44}" data-outer_xfa="${id}"  data-inner_xfa="f32_44" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_104</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_104}" data-outer_xfa="${id}"  data-inner_xfa="f32_104" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_108</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_108}" data-outer_xfa="${id}"  data-inner_xfa="f32_108" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_112</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_112}" data-outer_xfa="${id}"  data-inner_xfa="f32_112" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_116</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_116}" data-outer_xfa="${id}"  data-inner_xfa="f32_116" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_120</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_120}" data-outer_xfa="${id}"  data-inner_xfa="f32_120" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u16_82</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u16_82}" data-outer_xfa="${id}"  data-inner_xfa="u16_82" data-type="u16">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_126</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_126}" data-outer_xfa="${id}"  data-inner_xfa="u8_126" data-type="u8">
                  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }
    function minimap() {
        let html
        html = `   
   <div style='padding-bottom:20px'>Minimap
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Minimap Texture</td>
                  <td colspan="3" class='no_border'>
                     ${generate_linkbox_special(`${id}.texture_136`, TXFA.texture_136)}
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>X</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_140}" data-outer_xfa="${id}"  data-inner_xfa="f32_140" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Y</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_144}" data-outer_xfa="${id}"  data-inner_xfa="f32_144" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>x dis</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_148}" data-outer_xfa="${id}"  data-inner_xfa="f32_148" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>y dis</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_152}" data-outer_xfa="${id}"  data-inner_xfa="f32_152" data-type="f32">
                  </td>
               </tr> 
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_156</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_156}" data-outer_xfa="${id}"  data-inner_xfa="f32_156" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_160</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_160}" data-outer_xfa="${id}"  data-inner_xfa="f32_160" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_164</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_164}" data-outer_xfa="${id}"  data-inner_xfa="f32_164" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_168</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_168}" data-outer_xfa="${id}"  data-inner_xfa="f32_168" data-type="f32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }
    function shadow() {
        let html
        if (TXFA.section_12.length) {

            html = `   
   <div style='padding-bottom:20px'>Shadow
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>X</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_00" data-type="f32">                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Y</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_04}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Z</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_08}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_08" data-type="f32"> 
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
    function section36() {
        let html
        if (TXFA.section_36.length) {

            html = `   
   <div style='padding-bottom:20px'>section 36
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_36[0].u8_00}" data-outer_xfa="${id}.section_36[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_36[0].u8_01}" data-outer_xfa="${id}.section_36[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_36[0].u8_02}" data-outer_xfa="${id}.section_36[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_03</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_36[0].u8_03}" data-outer_xfa="${id}.section_36[0]"  data-inner_xfa="u8_03" data-type="u8">
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
    function section48() {
        let html
        if (TXFA.section_48.length) {

            html = `   
   <div style='padding-bottom:20px'>section 48
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_48[0].f32_04}" data-outer_xfa="${id}.section_48[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_48[0].f32_08}" data-outer_xfa="${id}.section_48[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
               </tr>`

            if (TXFA.section_48[0].section_00.length) {
                html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_48[0].section_00[0].u8_00}" data-outer_xfa="${id}.section_48[0].section_00[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_48[0].section_00[0].u8_01}" data-outer_xfa="${id}.section_48[0].section_00[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_48[0].section_00[0].u8_02}" data-outer_xfa="${id}.section_48[0].section_00[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
               </tr>`

            }

            html += `
            </tbody>
         </table>   
      </div>
   </div>
`

        }
        return html

    }
    function section52() {
        let html
        if (TXFA.section_52.length) {

            html = `   
   <div style='padding-bottom:20px'>section 52
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_52[0].u8_00}" data-outer_xfa="${id}.section_52[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_52[0].u8_01}" data-outer_xfa="${id}.section_52[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_52[0].u8_02}" data-outer_xfa="${id}.section_52[0]"  data-inner_xfa="u8_02" data-type="u8">
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
    function section56() {
        let html
        if (TXFA.section_56.length) {

            html = `   
   <div style='padding-bottom:20px'>section 56
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_56[0].u8_00}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_56[0].u8_01}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_56[0].u8_02}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_03</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_56[0].u8_03}" data-outer_xfa="${id}.section_56[0]"  data-inner_xfa="u8_03" data-type="u8">
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

    function section60() {
        let html
        if (TXFA.section_60.length) {

            html = `   
   <div style='padding-bottom:20px'>section 60
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_60[0].u8_00}" data-outer_xfa="${id}.section_60[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_60[0].u8_01}" data-outer_xfa="${id}.section_60[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_60[0].u8_02}" data-outer_xfa="${id}.section_60[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_03</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_60[0].u8_03}" data-outer_xfa="${id}.section_60[0]"  data-inner_xfa="u8_03" data-type="u8">
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
    function section64() {
        let html
        if (TXFA.section_64.length) {

            html = `   
   <div style='padding-bottom:20px'>section 64
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
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                     <input style="width:100%" type='text' value="${TXFA.section_64[0].f32_08}" data-outer_xfa="${id}.section_64[0]"  data-inner_xfa="f32_08" data-type="f32">
                  <td class='no_border'>
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
    function section64() {
        let html
        if (TXFA.section_68.length) {

            html = `   
   <div style='padding-bottom:20px'>section 68
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_68[0].f32_00}" data-outer_xfa="${id}.section_68[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_68[0].f32_04}" data-outer_xfa="${id}.section_68[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_68[0].f32_08}" data-outer_xfa="${id}.section_68[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_68[0].f32_12}" data-outer_xfa="${id}.section_68[0]"  data-inner_xfa="f32_12" data-type="f32">
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
    function section72() {
        let html
        if (TXFA.section_72.length) {

            html = `   
   <div style='padding-bottom:20px'>section 72
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_72[0].u32_04}" data-outer_xfa="${id}.section_72[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
            </tbody>
         </table>   
      </div>
   </div>
`

        }
        return html

    }
    function section192() {
        let html
        if (TXFA.section_192.length) {

            html = `
   <div style='padding-bottom:20px'>section 192
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Interface 1</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_192[0]`, 'unordered_interface_00', 'interface', TXFA.section_192[0].unordered_interface_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Interface 2</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_192[0]`, 'unordered_interface_04', 'interface', TXFA.section_192[0].unordered_interface_04)}
                  </td>
                </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_192[0].u32_08}" data-outer_xfa="${id}.section_192[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>String 1</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_192[0].section_12[0]}" data-outer_xfa="${id}.section_192[0].section_12"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
                </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>String 2</td>
                  <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_192[0].section_16[0]}" data-outer_xfa="${id}.section_192[0].section_16"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture 1</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.section_192[0].texture_20`, TXFA.section_192[0].texture_20)}
                  </td>
                </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Pac Machine</td>
                  <td colspan="3" class='no_border'>
                  ${generate_linkbox(`${id}.section_192[0]`, 'unordered_car_24', 'car', TXFA.section_192[0].unordered_car_24)}
                  </td>
                </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Ghost Car</td>
                  <td class='no_border'>
                      ${generate_linkbox(`${id}.section_192[0]`, 'unordered_car_28', 'car', TXFA.section_192[0].unordered_car_28)}
                      </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Ghost Eyes</td>
                  <td class='no_border'>
                      ${generate_linkbox(`${id}.section_192[0]`, 'unordered_car_32', 'car', TXFA.section_192[0].unordered_car_32)}
                  </td>
                </tr>
            </tbody>
         </table>   
      </div>
   </div>
`

            html += `
   <div style='padding-bottom:20px'>section_192 section_40
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>String</th>
                        <th>u32_04</th>
                    </tr>`

            for (let i = 0; i < TXFA.section_192[0].section_40.length; i++) {
                html += `<tr>
               <td style="width:20%" class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.section_192[0].section_40[i].section_00[0]}" data-outer_xfa="${id}.section_192[0].section_40[${i}].section_00"  data-inner_xfa="0" data-type="string" id='name'>
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_192[0].section_40[i].u32_04}" data-outer_xfa="${id}.section_192[0].section_40[${i}]" data-inner_xfa="u32_04" data-type="u32">
               </td>
                  <td data-x="delete_main" data-xfa="TXFA.section_192[0].section_40" class='x_button noselect'>
                     X
                 </td>`
            }

            html += `<tr>
               <td colspan="5" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_192" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        }
        return html

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        if (this.dataset.xfa === "section_192") {
            TXFA.section_192[0].section_40.push({
                section_00: ['Blank'],
                u32_04: 0,
            })
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_192[0].section_40.splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
