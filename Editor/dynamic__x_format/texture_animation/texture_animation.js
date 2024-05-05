"use strict";
function load_x_d_textures_animation(id, outer_id, sub_group_index) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${texturepatern()}
${coloursequence()}
${textureanimation()}

   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
    }

    function texturepatern() {

        let html = `
   <div style='padding-bottom:20px'>Texture Pattern
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                  <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Timer</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_04[0].u32_20}" data-outer_xfa="${id}.section_00[0].section_04[0]." data-inner_xfa="u32_20" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_11</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_00[0].section_04[0].u8_11}" data-outer_xfa="${id}.section_00[0].section_04[0]." data-inner_xfa="u8_11" data-type="u8">
               </td>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Amount Textures</td>
                  <td class='no_border'>
                     <input disabled style="width:100%" type='text' value="${TXFA.section_00[0].section_04[0].section_04.length}" data-outer_xfa="${id}.section_00[0].section_04[0]." data-inner_xfa="u8_11" data-type="u8">
               </td>
            </tr>`
        for (let i = 0; i < TXFA.section_00[0].section_04[0].section_04.length; i++) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture ${i + 1}</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.section_00[0].section_04[0].section_04[${i}].texture_00`, TXFA.section_00[0].section_04[0].section_04[i].texture_00)}
                  </td>
               </tr>`
        }

        html += `
         </tbody>
      </table>
   </div>
</div>
`

        return html

    }
    function coloursequence() {
        let html = `
   <div style='padding-bottom:20px'>Color Sequence
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>Color</th>
                        <th>R</th>
                        <th>G</th>
                        <th>B</th>
                        <th>A</th>
                        <th>?</th>
                        <th>?</th>
                        <th>?</th>
                        <th>?</th>
                        <th>Time</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_00[0].section_12.length; i++) {
            let colortxfa = TXFA.section_00[0].section_12[i]

            html += `<tr>
            <td style="width:10%" class='no_border'>
                  <input disabled style="width:100%" type='color' value="#${colortxfa.u8_00.toString(16).padStart(2, 0)}${colortxfa.u8_01.toString(16).padStart(2, 0)}${colortxfa.u8_02.toString(16).padStart(2, 0)}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="f32_08" data-type="f32">
               </td>
            <td style="width:10%" class='no_border'>
            <input class='reset' style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_00}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_00" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input class='reset' style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_01}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_01" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input class='reset' style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_02}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_02" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_03}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_03" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_04}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_04" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_05}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_05" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_06}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_06" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].u8_07}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="u8_07" data-type="u8">
               </td>
               <td style="width:10%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_12[i].f32_08}" data-outer_xfa="${id}.section_00[0].section_12[${i}]" data-inner_xfa="f32_08" data-type="f32">
               </td>
                  <td data-x="delete_main" data-xfa="section_12" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="11" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_12" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }
    function textureanimation() {
        let html = `
   <div style='padding-bottom:20px'>Texture Animation
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>?</th>
                        <th>?</th>
                        <th>Time</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_00[0].section_20.length; i++) {
            html += `<tr>
            <td style="width:20%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_20[i].f32_00}" data-outer_xfa="${id}.section_00[0].section_20[${i}]" data-inner_xfa="f32_00" data-type="f32">
               </td>
            <td style="width:20%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_20[i].f32_04}" data-outer_xfa="${id}.section_00[0].section_20[${i}]" data-inner_xfa="f32_04" data-type="f32">
               </td>
               <td style="width:20%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_20[i].u8_08}" data-outer_xfa="${id}.section_00[0].section_20[${i}]" data-inner_xfa="u8_08" data-type="u8">
               </td>
               <td style="width:20%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_20[i].u8_09}" data-outer_xfa="${id}.section_00[0].section_20[${i}]" data-inner_xfa="u8_09" data-type="u8">
               </td>
               <td style="width:20%" class='no_border'>
            <input style="width:100%" type='text' value="${TXFA.section_00[0].section_20[i].f32_12}" data-outer_xfa="${id}.section_00[0].section_20[${i}]" data-inner_xfa="f32_12" data-type="f32">
               </td>
                  <td data-x="delete_main" data-xfa="section_20" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="6" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_20" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        if (this.dataset.xfa === "section_12") {
            TXFA.section_00[0].section_12.push({
                u8_00: 0,
                u8_01: 0,
                u8_02: 0,
                u8_03: 0,
                u8_04: 0,
                u8_05: 0,
                u8_06: 0,
                u8_07: 0,
                f32_08: 0,
            })
        } else {
            TXFA.section_00[0].section_20.push({
                f32_00: 0,
                f32_04: 0,
                u8_08: 0,
                u8_09: 0,
                f32_12: 0,
            })
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_00[0][this.dataset.xfa].splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    function colorclick() {
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
