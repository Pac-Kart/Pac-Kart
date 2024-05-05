"use strict";
function load_x_d_car(id, id_index) {
    TXFA = Object.byString(x, id);

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${carindex()}
${carsound()}
${cargear()}
${carmisc()}

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

    function carindex() {
        let html = ''
        let indexs = TXFA.section_00[0]

        html = `
   <div style='padding-bottom:20px'>?
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_04}" data-outer_xfa="${id}"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
               </tr>
            </tbody>
         </table>
         </div>
         </div>
   <div style='padding-bottom:20px'>Indexes
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_04}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>08 idle 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_08}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>12 sleep idle 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_12}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_12" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>16 sleep idle 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_16}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_16" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>20 wake up ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_20}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_20" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>24 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_24}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_24" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>28 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_28}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_28" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>32 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_32}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_32" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>36 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_36}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_36" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>40 driving</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_40}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_40" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>44 fall out of bounds</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_44}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_44" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>48 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_48}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_48" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>52 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_52}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_52" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>56 boost 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_56}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_56" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>60 boost 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_60}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_60" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>64 big jump ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_64}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_64" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>68 big jump land ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_68}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_68" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>72 passed on left</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_72}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_72" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>76 passed on right</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_76}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_76" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>80 pass a charachter on left</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_80}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_80" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>84 pass a charachter on right</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_84}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_84" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>88 successful hit yay</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_88}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_88" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>92 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_92}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_92" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>96 backup 1 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_96}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_96" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>100 backup 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_100}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_100" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>104 backupend</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_104}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_104" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>108 spin out / pac box</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_108}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_108" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>112 hit by large object ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_112}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_112" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>116 ?</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_116}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_116" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>120 squish</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_120}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_120" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>124 win 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_124}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_124" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>128 win 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_128}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_128" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>132 lose 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_132}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_132" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>136 lose 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_136}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_136" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>140 drift left 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_140}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_140" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>144 drift left 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_144}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_144" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>148 drift left boost</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_148}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_148" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>152 drift right 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_152}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_152" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>156 drift right 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_156}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_156" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>160 drift right boost</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_160}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_160" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>168 player menu icon</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_168}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_168" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>172 Fairy Type</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${indexs.u32_172}" data-outer_xfa="${id}.section_00[0]"  data-inner_xfa="u32_172" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }
    function carstats() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Stats
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Reverse Acceleration</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_184[0].section_04[0].f32_12}" data-outer_xfa="${id}.section_00[0].section_184[0].section_04[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Reverse Speed</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].f32_00}" data-outer_xfa="${id}.section_00[0].section_192[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Jump Height</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_184[0].section_04[0].f32_28}" data-outer_xfa="${id}.section_00[0].section_184[0].section_04[0]"  data-inner_xfa="f32_28" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Turn Lag</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].f32_04}" data-outer_xfa="${id}.section_00[0].section_192[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Ground Turn Sensitivity</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].f32_08}" data-outer_xfa="${id}.section_00[0].section_192[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Air Turn Sensitivity</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].f32_12}" data-outer_xfa="${id}.section_00[0].section_192[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Drift Sensitivity</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_184[0].section_04[0].section_04[0].f32_08}" data-outer_xfa="${id}.section_00[0].section_184[0].section_04[0].section_04[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }

    function cargear() {
        let html = `
   <div style='padding-bottom:20px'>Gear
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>Ground Acceleration</th>
                        <th>Air Acceleration</th>
                        <th>Speed</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_00[0].section_192[0].section_24.length; i++) {
            html += `<tr><td style="width:30%" class='no_border'><input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].section_24[i].f32_00}" data-outer_xfa="${id}.section_00[0].section_192[0].section_24[${i}]" data-inner_xfa="f32_00" data-type="f32">
               </td>
               <td style="width:30%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].section_24[i].f32_04}" data-outer_xfa="${id}.section_00[0].section_192[0].section_24[${i}]" data-inner_xfa="f32_04" data-type="f32">
               </td>
               <td style="width:30%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_00[0].section_192[0].section_24[i].f32_08}" data-outer_xfa="${id}.section_00[0].section_192[0].section_24[${i}]" data-inner_xfa="f32_08" data-type="f32">
               </td>
                  <td data-x="delete_main" data-xfa="section_00[0].section_192[0].section_24" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="4" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_00[0].section_192[0].section_24" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function carsound() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Sounds
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_04}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_12}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_16}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_20}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Section 1</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_00[0].section_196[0]`, 'unordered_sound_section_00', 'sound_section', TXFA.section_00[0].section_196[0].unordered_sound_section_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Section 2</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_00[0].section_196[0]`, 'unordered_sound_section_08', 'sound_section', TXFA.section_00[0].section_196[0].unordered_sound_section_08)}
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }
    function carmisc() {
        let html = ''
        html = `
   <div style='padding-bottom:20px'>Links
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Car Part A</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_00[0]`, 'unordered_car_00_180_180', 'car_00_180', TXFA.section_00[0].unordered_car_00_180_180)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Car Part B</td>
                  <td class='no_border'>
                  ${generate_linkbox(`${id}.section_00[0]`, 'unordered_car_00_184_184', 'car_00_184', TXFA.section_00[0].unordered_car_00_184_184)}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        TXFA.section_00[0].section_192[0].section_24.push({
            f32_00: 0,
            f32_04: 0,
            f32_08: 0,
        })
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_00[0].section_192[0].section_24.splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
