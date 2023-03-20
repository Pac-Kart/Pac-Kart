function load_x_d_link_main_sub_group(id, outerid, sub_group_index) {
    TXFA = Object.byString(XFA, id);

    let html = `<div style="display:inline-block;width:95%;padding:5px;">`

    html += `World File<div class='save_records_boarder' data-xfa='${id}'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.name[0]}" data-outer_xfa="${id}.name"  data-inner_xfa="0" data-type="string">
                  </td>
               </tr>  
            </tbody>
         </table>
        </div>
    <br>Loading File Name<div class='save_records_boarder' data-xfa='${id}'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.loading[0]}" data-outer_xfa="${id}.loading"  data-inner_xfa="0" data-type="string">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Index:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.loading[1]}" data-outer_xfa="${id}.loading"  data-inner_xfa="1" data-type="u32">
                  </td>
               </tr>  
            </tbody>
         </table>
        </div>`
    html += `<br><a data-debug="true">Section 1
        <div data-debug="true" class='save_records_boarder' data-xfa='${id}'>`

    for (let i = 0; i < TXFA.save.length; i++) {
        html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'><table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:45%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.save[i][0]}" data-outer_xfa="${id}.save[${i}]"  data-inner_xfa="0" data-type="string">
               </td>
               <td style="width:40%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.save[i][1]}" data-outer_xfa="${id}.save[${i}]" data-inner_xfa="1" data-type="u32">
               </td>
                  <td data-x="delete_main" data-xfa="save" class='x_button noselect'>
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
               <td style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="save" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div></a>`

    html += `</div><br><a data-debug="true">Section 2
        <div data-debug="true" class='save_records_boarder' data-xfa='${id}'>`

    for (let i = 0; i < TXFA.interface.length; i++) {
        html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'><table style="width:100%">
                <tbody>
                   <tr>
                   <td style="width:10%;white-space:nowrap;" class='no_border'>Main?:</td>
                  <td style="width:75%" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.interface[i].unknown}" data-outer_xfa="${id}.interface[${i}]"  data-inner_xfa="unknown" data-type="u32">
                 </td>
                  <td data-x="delete_main" data-xfa="interface" class='x_button noselect'>
                     X
                 </td>
                </tbody>
            </table><hr style='margin:0px'>`
        for (let ii = 0; ii < TXFA.interface[i].a.length; ii++) {
            html += `<table style="width:100%">
                <tbody>
                            <tr>
               <td style="width:45%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.interface[i].a[ii][0]}" data-outer_xfa="${id}.interface[${i}].a[${ii}]"  data-inner_xfa="0" data-type="string">
               </td>
               <td style="width:40%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.interface[i].a[ii][1]}" data-outer_xfa="${id}.interface[${i}].a[${ii}]"  data-inner_xfa="1" data-type="u32">
               </td>
               <td data-x="remove_entry" data-xfa=".interface[${i}].a" class='x_button noselect'>
                  X
               </td>
            </tr>  
                </tbody>
                </table>`
        }

        html += `<table style="text-align: center;width: 100%;">
                <tbody>
                            <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="add_entry" data-xfa=".interface[${i}].a" class='plus_button noselect'>+</td>
            </tr>  
                </tbody>
                </table></div>`
    }

    html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'>
            <table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="interface" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
                </div></a>`

    html += `<br><a data-debug="true"> Section 3
        <div class='save_records_boarder' data-xfa='${id}'>`

    for (let i = 0; i < TXFA.unknown.length; i++) {
        html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'><table style="width:100%">
                <tbody>
                   <tr>
                   <td style="width:10%;white-space:nowrap;" class='no_border'>Main?:</td>
                  <td style="width:75%" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown[i].unknown}" data-outer_xfa="${id}.unknown[${i}]"  data-inner_xfa="unknown" data-type="u32">
                 </td>
                  <td data-x="delete_main" data-xfa="unknown" class='x_button noselect'>
                     X
                 </td>
                </tbody>
            </table><hr style='margin:0px'>`
        for (let ii = 0; ii < TXFA.unknown[i].a.length; ii++) {
            html += `<table style="width:100%">
                <tbody>
                            <tr>
               <td style="width:45%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.unknown[i].a[ii][0]}" data-outer_xfa="${id}.unknown[${i}].a[${ii}]"  data-inner_xfa="0" data-type="string">
               </td>
               <td style="width:40%" class='no_border'>
                  <input style="width:100%" type='text' value="${TXFA.unknown[i].a[ii][1]}" data-outer_xfa="${id}.unknown[${i}].a[${ii}]"  data-inner_xfa="1" data-type="u32">
               </td>
               <td data-x="remove_entry" data-xfa=".unknown[${i}].a" class='x_button noselect'>
                  X
               </td>
            </tr>  
                </tbody>
                </table>`
        }

        html += `<table style="text-align: center;width: 100%;">
                <tbody>
                            <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="add_entry" data-xfa=".unknown[${i}].a" class='plus_button noselect'>+</td>
            </tr>  
                </tbody>
                </table></div>`
    }

    html += `<div style='margin:2%;background:#f2f2f2' class='save_records_boarder' data-xfa='${id}'>
            <table style="width:100%">
                <tbody>
                   <tr>
               <td style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="unknown" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div></div></a>`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="sub_group_splice">X</a>'
    document.getElementById("sub_group_splice").addEventListener('click', splice_entry)

    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }
    let plus_field = file_editor.getElementsByClassName('plus_button')
    for (let i = 0; i < plus_field.length; i++) {
        plus_field[i].addEventListener('click', plus_button)
    }
    let x_field = file_editor.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', x_button)
    }

    function splice_entry() {
        let temp_xfa = Object.byString(XFA, outerid);
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
        if(outer_html.children[2].innerText == "Demo"){
                html += dynamic__link_main_sub_group(temp_xfa[i], i, temp_xfa[i].id)
        }else{
                html += dynamic__link_main_sub_group(temp_xfa[i][0], i, temp_xfa[i][1])
        }

            }

            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)
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
            if (this.dataset.xfa === 'save') {
                TXFA[this.dataset.xfa].push(['blank', 0])
            } else {
                TXFA[this.dataset.xfa].push({
                    a: [],
                    unknown: 0
                })
            }
        } else if (this.dataset.plus === "add_entry") {
            let aa = Object.byString(XFA, id + this.dataset.xfa)
            aa.push(['blank', 0])
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
            let aa = Object.byString(XFA, id + this.dataset.xfa)
            for (var i = 0; (prev = prev.previousSibling); i++) {}
            aa.splice(i - 2, 1)
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

}
