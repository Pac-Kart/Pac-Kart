function load_x_d_car(id, id_index) {
    TXFA = Object.byString(x, id);

    // car_00_180_00_08
    // TXFA.section_00[0].section_180[0].section_00[0].section_08[0]
    // let color_section = TXFA.section_00[0].section_180[0].section_00[0].section_08[0]

    let physics = TXFA.section_00[0].section_180[0].section_04[0]
    // car_00_180_04
    // TXFA.section_00[0].section_180[0].section_04[0]
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${carstats()}
${carmisc()}
${carsound()}
${cargear()}
   
   </div>
`

    document.getElementById("file_editor").innerHTML = html

    add_events()

    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
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

    function carmisc() {
        let html = ''
        html += `   
    <div style='padding-bottom:20px'>Misc
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Gravity</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${physics.f32_00}" data-outer_xfa="${id}.section_00[0].section_180[0].section_04[0]"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Fairy Meter</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${physics.f32_72}" data-outer_xfa="${id}.section_00[0].section_180[0].section_04[0]" data-inner_xfa="f32_72" data-type="f32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
    </div>

`
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
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_04}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_12}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_16}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_196[0].f32_20}" data-outer_xfa="${id}.section_00[0].section_196[0]"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Section 1</td>
                  <td class='no_border'>
                  ${genterate_linkbox(id,'sound_section',TXFA.section_00[0].section_196[0].unordered_sound_section_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Section 2</td>
                  <td class='no_border'>
                  ${genterate_linkbox(id,'sound_section',TXFA.section_00[0].section_196[0].unordered_sound_section_08)}
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
