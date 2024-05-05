"use strict";
function load_x_d_frame_sparkler(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${sparklersettings()}
${list1()}
${list2()}
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

    function sparklersettings() {
        let html

        html = `   <div style='padding-bottom:20px'>Sparkler Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_00}" data-outer_xfa="${id}"  data-inner_xfa="f32_00" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_08}" data-outer_xfa="${id}"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`

        html += `
   <div style='padding-bottom:20px'>section_16
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.section_16[0].texture_00`, TXFA.section_16[0].texture_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].u8_04}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].u32_08}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].f32_16}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_24</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].f32_24}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_28</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].f32_28}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="f32_28" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_32</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].f32_32}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="f32_32" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_36</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].f32_36}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_40</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_16[0].u32_40}" data-outer_xfa="${id}.section_16[0]"  data-inner_xfa="u32_40" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }
    function list1() {

        let html = `
   <div style='padding-bottom:20px'>section_48
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>Color</th>
                        <th>Red</th>
                        <th>Blue</th>
                        <th>Green</th>
                        <th>Alpha</th>
                        <th>f32_08</th>
                        <th>x</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_16[0].section_48.length; i++) {
            let colortxfa = TXFA.section_16[0].section_48[i]
            html += `<tr>
               <td style="width:15%" class='no_border'>
                  <input disabled style="width:100%" type='color' value="#${colortxfa.u8_00.toString(16).padStart(2, 0)}${colortxfa.u8_01.toString(16).padStart(2, 0)}${colortxfa.u8_02.toString(16).padStart(2, 0)}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="f32_08" data-type="f32">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_00}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="u8_00" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_01}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="u8_01" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_02}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="u8_02" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input class='reset' style="width:100%" type='text' value="${colortxfa.u8_03}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="u8_03" data-type="u8">
               </td>
               <td style="width:15%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_16[0].section_48[i].f32_08}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="f32_08" data-type="f32">
               </td>
                  <td data-x="delete_main" data-xfa="section_48" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="7" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_48" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function list2() {

        let html = `
   <div style='padding-bottom:20px'>section_56
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>f32_00</th>
                        <th>f32_04</th>
                        <th>f32_08</th>
                        <th>f32_20</th>
                        <th>x</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_16[0].section_56.length; i++) {
            html += `<tr>
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_16[0].section_56[i].f32_00}" data-outer_xfa="${id}.section_16[0].section_56[${i}]" data-inner_xfa="f32_00" data-type="f32">
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_16[0].section_56[i].f32_04}" data-outer_xfa="${id}.section_16[0].section_56[${i}]" data-inner_xfa="f32_04" data-type="f32">
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_16[0].section_56[i].f32_08}" data-outer_xfa="${id}.section_16[0].section_56[${i}]" data-inner_xfa="f32_08" data-type="f32">
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_16[0].section_56[i].f32_20}" data-outer_xfa="${id}.section_16[0].section_56[${i}]" data-inner_xfa="f32_20" data-type="f32">
               </td>
                  <td data-x="delete_main" data-xfa="section_56" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="5" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_56" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        if (this.dataset.xfa === "section_48") {
            TXFA.section_16[0][this.dataset.xfa].push({
                u8_00: 0,
                u8_01: 0,
                u8_02: 0,
                u8_03: 0,
                f32_08: 0,
            })
        } else {
            TXFA.section_16[0][this.dataset.xfa].push({
                f32_00: 0,
                f32_04: 0,
                f32_08: 0,
                f32_20: 0,
            })
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_16[0][this.dataset.xfa].splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    function colorclick() {
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
