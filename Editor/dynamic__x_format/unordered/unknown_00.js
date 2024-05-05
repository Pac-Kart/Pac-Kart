"use strict";
function load_x_d_unknown_00__file(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${unknownsection()}
   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''
    function unknownsection() {
        let html = `
   <div style='padding-bottom:20px'>Links?
      <div class='save_records_boarder'>
            <table style="width:100%">
                <tbody>
                    <tr>
                        <th>Type</th>
                        <th>Link</th>
                        <th>u32_12</th>
                    </tr>`

        for (let i = 0; i < TXFA.section_04.length; i++) {
            html += `<tr>
               <td style="width:15%" class='no_border'>
                  <input disabled style="width:100%" type='text' value="${TXFA.section_04[i].u32_00}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u32_00" data-type="u32">
               </td>
               <td style="width:15%" class='no_border'>
               ${gettype(TXFA.section_04[i].u32_00, i)}
               </td>
               <td style="width:15%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_04[i].u32_12}" data-outer_xfa="${id}.section_04[${i}]" data-inner_xfa="u32_12" data-type="u32">
               </td>`
        }

        html += `<!-- <tr>
               <td colspan="7" style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_48" class='plus_button noselect'>+</td>
               </tr> -->
                </tbody>
                </table>
                </div>
            </div>`

        return html

        function gettype(type, i) {
            switch (type) {
            case 0:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 30:
            case 32:
            case 34:
                return 'null'
                break
            case 1:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'unknown_00_04_04t1', TXFA.section_04[i].section_04)}`
                break
            case 2:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'unknown_00_04_04t2', TXFA.section_04[i].section_04)}`
                break
            case 3:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'unknown_00', TXFA.section_04[i].section_04)}`
                break
            case 4:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'strange', TXFA.section_04[i].section_04)}`
                break
            case 5:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'unknown_00_04_04t5', TXFA.section_04[i].section_04)}`
                break
            case 6:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'idk', TXFA.section_04[i].section_04)}`
                break
            case 26:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'sound_controls', TXFA.section_04[i].section_04)}`
                break
            case 29:
                return '???'
                break
            case 31:
                return `${generate_linkbox(`${id}.section_04[${i}].section_04`, 'section_04', 'activator', TXFA.section_04[i].section_04)}`
                break
            default:
                return 'unknown'
            }
        }

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
