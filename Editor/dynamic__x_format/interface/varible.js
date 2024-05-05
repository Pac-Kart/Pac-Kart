"use strict";
function load_x_d_varible(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${variblesection()}
${varible_section12()}
   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''
    document.getElementById('type').value = TXFA.u8_04

    document.getElementById("name").addEventListener('change', edit_change_name);
    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
    }
    document.getElementById("type").addEventListener('change', edit_varible_type);

    function variblesection() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Layer Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td colspan="3" class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_00[0]}" data-outer_xfa="${id}.section_00"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_05</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_05}" data-outer_xfa="${id}"  data-inner_xfa="u8_05" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_06</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_06}" data-outer_xfa="${id}"  data-inner_xfa="u8_06" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_07</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_07}" data-outer_xfa="${id}"  data-inner_xfa="u8_07" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_08}" data-outer_xfa="${id}"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_16</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_16}" data-outer_xfa="${id}"  data-inner_xfa="u32_16" data-type="u32">
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
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_28</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_28}" data-outer_xfa="${id}"  data-inner_xfa="u32_28" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>type</td>
                  <td colspan="3" class='no_border'>
                     <select style="width:100%" title="Selected Game" value="${TXFA.u8_04}" data-outer_xfa="${id}"  data-inner_xfa="u8_04" data-type="u8" id="type">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
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

    function varible_section12() {
        let html = ''
        if (TXFA.section_12.length === 0) {
            return html
        }
        switch (TXFA.u8_04) {
        case 1:
            html = typesection_01()
            break
        case 5:
            html = typesection_05()
            break
        case 7:
            html = typesection_07()
            break
        case 8:
            html = typesection_08()
            break
        case 9:
            html = typesection_09()
            break
        default:
            html = 'type unknown'
        }

        return html

    }

    function typesection_01() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Unknown Varible
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_00</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_00" data-type="u32">
               </tr>`

        if (TXFA.section_12[0].section_04.length) {

            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[0].u8_00}" data-outer_xfa="${id}.section_12[0].section_04[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[0].u8_01}" data-outer_xfa="${id}.section_12[0].section_04[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[0].u32_04}" data-outer_xfa="${id}.section_12[0].section_04[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[0].u32_08}" data-outer_xfa="${id}.section_12[0].section_04[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
               </tr>`
        }
        html += `</tbody>
         </table>
      </div>
   </div>
`

        return html

    }
    function typesection_05() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Random Varible
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_04}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function typesection_07() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Timer? Varible
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_01}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function typesection_08() {
        let html = `
   <div style='padding-bottom:20px'> Unknown Varible
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>08</th>
                        <th>00</th>
                        <th>01</th>
                        <th>04</th>
                        <th>x</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_12[0].section_04.length; i++) {
            html += `<tr>
               <td style="width:20%" class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[i].section_08[0]}" data-outer_xfa="${id}.section_12[0].section_04[${i}].section_08"  data-inner_xfa="0" data-type="string">
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[i].u8_00}" data-outer_xfa="${id}.section_12[0].section_04[${i}]" data-inner_xfa="u8_00" data-type="u8">
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[i].u8_01}" data-outer_xfa="${id}.section_12[0].section_04[${i}]" data-inner_xfa="u8_01" data-type="u8">
               <td style="width:20%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[i].u32_04}" data-outer_xfa="${id}.section_12[0].section_04[${i}]" data-inner_xfa="u32_04" data-type="u32">
               </td>
                  <td data-x="delete_main" data-xfa="section_04" class='x_button noselect'>
                     X
                 </td>`
        }

        html += `<tr>
               <td colspan="5" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_04" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

        return html

    }

    function typesection_09() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Unknown Varible
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>String 1</td>
                  <td class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_12[0].section_04[0]}" data-outer_xfa="${id}.section_12[0].section_04"  data-inner_xfa="0" data-type="string">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>String 2</td>
                  <td class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_12[0].section_08[0]}" data-outer_xfa="${id}.section_12[0].section_08"  data-inner_xfa="0" data-type="string">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_01}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_02}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_03</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_03}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_03" data-type="u8">
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
          TXFA.u8_04 = this.selectedIndex
        switch (this.selectedIndex) {
        case 1:
            TXFA.section_12 = [{
                u32_00: 0,
                section_04: [{
                    u8_00: 0,
                    u8_01: 0,
                    u32_04: 0,
                    u32_08: 0,
                }],
            }]
            break
        case 5:
            TXFA.section_12 = [{
                u32_00: 0,
                u32_04: 0,

            }]
            break
        case 7:
            TXFA.section_12 = [{
                u8_00: 0,
                u8_01: 0,

            }]
            break
        case 8:
            TXFA.section_12 = [{
                u32_00: 0,
                //amount?
                section_04: [],

            }]
            break
        case 9:
            TXFA.section_12 = [{
                id: gen_id(),
                section_04: [''],
                section_08: [''],
               u8_00: 0,
               u8_01: 0,
               u8_02: 0,
               u8_03: 0,
            }]
            break
        default:
            TXFA.section_12 = []
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }

}
