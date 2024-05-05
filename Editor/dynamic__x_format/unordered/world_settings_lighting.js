"use strict";
function load_x_d_world_settings__lighting(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
${lights()}
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

    x_field = file_editor.getElementsByClassName('colortemp')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('change', colorclick)
    }

    function lights() {
        let html
        html = `
   <div style='padding-bottom:20px'>Lights`
        for (let i = 0; i < TXFA.section_04.length; i++) {
            let temp_section = TXFA.section_04[i]
            html += `<div class='save_records_boarder' style='margin-bottom:3%;'>
        <table style='width:100%;' >
            <thead>
                <th>Color</th>
                <th>R</th>
                <th>G</th>
                <th>B</th>
                <th>A</th>
            </thead>
            <tbody>
                <tr>
                   <td style="width:15%" class='no_border'>
                      <input disabled style="width:100%" type='color' value="#${temp_section.u8_08.toString(16).padStart(2, 0)}${temp_section.u8_09.toString(16).padStart(2, 0)}${temp_section.u8_10.toString(16).padStart(2, 0)}" data-outer_xfa="${id}.section_16[0].section_48[${i}]" data-inner_xfa="f32_08" data-type="f32">
                   </td>
                   <td style="width:15%" class='no_border'>
                      <input class='colortemp' style="width:100%" type='text' value="${temp_section.u8_08}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u8_08" data-type="u8">
                   </td>
                   <td style="width:15%" class='no_border'>
                      <input class='colortemp' style="width:100%" type='text' value="${temp_section.u8_09}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u8_09" data-type="u8">
                   </td>
                   <td style="width:15%" class='no_border'>
                      <input class='colortemp' style="width:100%" type='text' value="${temp_section.u8_10}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u8_10" data-type="u8">
                   </td>
                   <td style="width:15%" class='no_border'>
                      <input class='colortemp' style="width:100%" type='text' value="${temp_section.u8_11}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u8_11" data-type="u8">
                   </td>
                      <td data-x="delete_main" data-xfa="TXFA.section_04" class='x_button noselect'>
                         X
                     </td>
                </tr>
            </tbody>
        </table>
        <table style='width:100%;'>
            <thead>
                <th>?</th>
                <th>?</th>
                <th>?</th>
                <th>?</th>
                <th>?</th>
                <th>?</th>
                <th>?</th>
                <th>?</th>
                <th>?</th>
            </thead>
            <tbody>
                <tr>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.u8_00}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u8_00" data-type="u8">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_12}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_12" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_16}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_16" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_20}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_20" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_24}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_24" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_28}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_28" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_44}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_44" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_48}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_48" data-type="f32">
                   </td>
                   <td style="width:10%" class='no_border'>
                         <input style="width:100%" type='text' value="${temp_section.f32_52}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="f32_52" data-type="f32">
                   </td>
                </tr>
            </tbody>
        </table>
      </div>
`

        }

        html += `<div class='save_records_boarder' style='margin-bottom:3%;'>
        <table style='width:100%;' >
            <tbody>
                <tr>
                    <td colspan="9" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_48" class='plus_button noselect'>+ Light</td>
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
        TXFA.section_04.push({
            id: gen_id(),
            u8_00: 0,
            u8_08: 0,
            u8_09: 0,
            u8_10: 0,
            u8_11: 0,
            f32_12: 0,
            f32_16: 0,
            f32_20: 0,
            f32_24: 0,
            f32_28: 0,
            f32_44: 0,
            f32_48: 0,
            f32_52: 0,

        })
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement.parentElement.parentElement.parentElement

        for (var i = 0; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_04.splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    function colorclick() {
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
