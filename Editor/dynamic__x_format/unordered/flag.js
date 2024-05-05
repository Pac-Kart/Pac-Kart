"use strict";
function load_x_d_flag__file(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${flagsection()}
${flag_section12()}
   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''
    document.getElementById('type').value = TXFA.u8_08

    document.getElementById("name").addEventListener('change', edit_change_name);
    document.getElementById("type").addEventListener('change', edit_varible_type);

    function flagsection() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Flag Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td colspan="3" class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_04[0]}" data-outer_xfa="${id}.section_04"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_00}" data-outer_xfa="${id}"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_09</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_09}" data-outer_xfa="${id}"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_10</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_10}" data-outer_xfa="${id}"  data-inner_xfa="u8_10" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_11</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_11}" data-outer_xfa="${id}"  data-inner_xfa="u8_11" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_16}" data-outer_xfa="${id}"  data-inner_xfa="f32_16" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_28</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_28}" data-outer_xfa="${id}"  data-inner_xfa="f32_28" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_40}" data-outer_xfa="${id}"  data-inner_xfa="u8_40" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>type</td>
                  <td class='no_border'>
                     <select style="width:100%" title="Selected Game" value="${TXFA.u8_08}" data-outer_xfa="${id}"  data-inner_xfa="u8_08" data-type="u8" id="type">
                        <option value="0">0</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                     </select>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function flag_section12() {
        let html = ''
        if (TXFA.section_12.length === 0) {
            return html
        }
        switch (TXFA.u8_08) {
        case 2:
            html = typesection_02()
            break
        case 3:
            html = typesection_03()
            break
        case 4:
            html = typesection_04()
            break
        default:
            html = 'type unknown'
        }

        return html

    }

    function typesection_02() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Type 02
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_00" data-type="u8">
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_02}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_02" data-type="u8">
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_04</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_04}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_04" data-type="f32">
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`

        return html

    }
    function typesection_03() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Type 03
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td coldspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_08}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function typesection_04() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Type 04
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_00" data-type="f32">
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
        TXFA.section_12[0][this.dataset.xfa].push({
            section_08: [''],
            u8_00: 0,
            u8_01: 0,
            u32_04: 0,
        })
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        let temp = this.parentElement

        for (var i = -1; (temp = temp.previousElementSibling); i++) {}
        TXFA.section_12[0][this.dataset.xfa].splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    function edit_varible_type(e) {
        this.selectedIndex
        TXFA.u8_08 = Number(this.value)
        switch (TXFA.u8_08) {
        case 2:
            TXFA.section_12 = [{
                u8_00: 0,
                u8_02: 0,
                f32_04: 0,
            }]
            break
        case 3:
            TXFA.section_12 = [{
                u32_08: 0,
                section_12: [{}]
            }]
            break
        case 4:
            TXFA.section_12 = [{
                f32_00: 0,
            }]
            break
        default:
            TXFA.section_12 = []
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }

}
