"use strict";
function load_x_d_link_main_sub_group(id, outerid, sub_group_index) {
    let html = `<div style="display:inline-block;width:95%;padding:5px;">`

    html += `World File<div class='save_records_boarder' data-xfa='${id}'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0]}" data-outer_xfa="${id}.section_12"  data-inner_xfa="0" data-type="string">
                  </td>
               </tr>  
            </tbody>
         </table>
        </div>
    <br>Loading File Name<div class='save_records_boarder' data-xfa='${id}'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].section_00[0]}" data-outer_xfa="${id}.section_08[0].section_00"  data-inner_xfa="0" data-type="string">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Index</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_08[0].u32_04}" data-outer_xfa="${id}.section_08[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>  
            </tbody>
         </table>
        </div>`
    html += `<br><a>section_04
        <div class='save_records_boarder' data-xfa='${id}'>`

    for (let i = 0; i < TXFA.section_04.length; i++) {
        html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'><table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:45%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_04[i].section_04[0].section_00[0]}" data-outer_xfa="${id}.section_04[${i}].section_04[0].section_00"  data-inner_xfa="0" data-type="string">
               </td>
               <td style="width:40%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_04[i].section_04[0].u32_04}" data-outer_xfa="${id}.section_04[${i}].section_04[0]" data-inner_xfa="u32_04" data-type="u32">
               </td>
                  <td data-x="delete_main" data-xfa="section_04" class='x_button noselect'>
                     X
                 </td>
                </tbody>
            </table>
            </div>`
    }

    html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'>
            <table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_04" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div></a>`

    html += `</div><br><a>section_20
        <div class='save_records_boarder' data-xfa='${id}'>`

    for (let i = 0; i < TXFA.section_20.length; i++) {
        html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'><table style="width:100%">
                <tbody>
                   <tr>
                   <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td style="width:75%" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_20[i].u16_08}" data-outer_xfa="${id}.section_20[${i}]"  data-inner_xfa="u16_08" data-type="u16">
                 </td>
                  <td data-x="delete_main" data-xfa="section_20" class='x_button noselect'>
                     X
                 </td>
                </tbody>
            </table><hr style='margin:0px'>`
        for (let ii = 0; ii < TXFA.section_20[i].section_04.length; ii++) {
            html += `<table style="width:100%">
                <tbody>
                            <tr>
               <td style="width:45%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_20[i].section_04[ii].section_04[0].section_00[0]}" data-outer_xfa="${id}.section_20[${i}].section_04[${ii}].section_04[0].section_00"  data-inner_xfa="0" data-type="string">
               </td>
               <td style="width:40%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_20[i].section_04[ii].section_04[0].u32_04}" data-outer_xfa="${id}.section_20[${i}].section_04[${ii}].section_04[0]"  data-inner_xfa="u32_04" data-type="u32">
               </td>
               <td data-x="remove_entry" data-xfa=".section_20[${i}].section_04" class='x_button noselect'>
                  X
               </td>
            </tr>  
                </tbody>
                </table>`
        }

        html += `<table style="text-align: center;width: 100%;">
                <tbody>
                            <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="add_entry" data-xfa=".section_20[${i}].section_04" class='plus_button noselect'>+</td>
            </tr>  
                </tbody>
                </table></div>`
    }

    html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'>
            <table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_20" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
                </div></a>`

    html += `<br><a> section_28
        <div class='save_records_boarder' data-xfa='${id}'>`

    for (let i = 0; i < TXFA.section_28.length; i++) {
        html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'><table style="width:100%">
                <tbody>
                   <tr>
                   <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td style="width:75%" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_28[i].u16_08}" data-outer_xfa="${id}.section_28[${i}]"  data-inner_xfa="u16_08" data-type="u16">
                 </td>
                  <td data-x="delete_main" data-xfa="section_28" class='x_button noselect'>
                     X
                 </td>
                </tbody>
            </table><hr style='margin:0px'>`
        for (let ii = 0; ii < TXFA.section_28[i].section_04.length; ii++) {
            html += `<table style="width:100%">
                <tbody>
                            <tr>
               <td style="width:45%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_28[i].section_04[ii].section_04[0].section_00[0]}" data-outer_xfa="${id}.section_28[${i}].section_04[${ii}].section_04[0].section_00"  data-inner_xfa="0" data-type="string">
               </td>
               <td style="width:40%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.section_28[i].section_04[ii].section_04[0].u32_04}" data-outer_xfa="${id}.section_28[${i}].section_04[${ii}].section_04[0]"  data-inner_xfa="u32_04" data-type="u32">
               </td>
               <td data-x="remove_entry" data-xfa=".section_28[${i}].section_04" class='x_button noselect'>
                  X
               </td>
            </tr>  
                </tbody>
                </table>`
        }

        html += `<table style="text-align: center;width: 100%;">
                <tbody>
                            <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="add_entry" data-xfa=".section_28[${i}].section_04" class='plus_button noselect'>+</td>
            </tr>  
                </tbody>
                </table></div>`
    }

    html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'>
            <table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_28" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div></div></a>`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="sub_group_splice">X</a>'
    document.getElementById("sub_group_splice").addEventListener('click', splice_entry)

    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
    }

    function splice_entry() {
        let temp_xfa = Object.byString(x, outerid);
        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
        let html = ''

        temp_xfa.splice(sub_group_index, 1)

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (temp_xfa.length === 0) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 0; i < temp_xfa.length; i++) {
                if (outer_html.children[2].innerText == "Demo") {
                    html += dynamic__link_main_sub_group(temp_xfa[i], i, temp_xfa[i].id)
                } else {
                    html += dynamic__link_main_sub_group(temp_xfa[i], i, temp_xfa[i].id)
                }

            }

            outer_html.innerHTML += html
            // x_addEventListener_file_viewer(outer_html)
            outer_html.children[2].click()
            outer_html.children[0].click()
            outer_html.children[0].click()
        }
        if (sub_group_index === 0) {
            outer_html.children[sub_group_index + 2].click()
        } else {
            outer_html.children[sub_group_index + 2].children[2].click()
        }
        file_viewer.focus()

    }

    function plus_button(e) {
        console.log(this.dataset.plus)
        if (this.dataset.plus === "create_new") {
            if (this.dataset.xfa === 'section_04') {
                TXFA[this.dataset.xfa].push({
                    u8_00: 1,
                    section_04: [{
                        section_00: ['blank'],
                        u32_04: 0,
                    }]
                })
            } else {
                TXFA[this.dataset.xfa].push({
                    u32_00: 0,
                    section_04: [],
                    u16_08: 0,
                })
            }
        } else if (this.dataset.plus === "add_entry") {
            let aa = Object.byString(x, id + this.dataset.xfa)
            aa.push({
                id: 0,
                u8_00: 1,
                section_04: [{
                    section_00: ['blank'],
                    u32_04: 0,
                }],
            })

        }
        document.getElementsByClassName("file_is_highlighted")[0].click()

    }
    function x_button(e) {
        console.log(this.dataset.x)
        if (this.dataset.x === "delete_main") {
            let temp = this.parentElement.parentElement.parentElement.parentElement

            for (var i = 0; (temp = temp.previousSibling); i++) {}
            TXFA[this.dataset.xfa].splice(i, 1)

        } else if (this.dataset.x === 'remove_entry') {
            let prev = this.parentElement.parentElement.parentElement
            let aa = Object.byString(x, id + this.dataset.xfa)
            for (var i = 0; (prev = prev.previousSibling); i++) {}
            aa.splice(i - 2, 1)
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
