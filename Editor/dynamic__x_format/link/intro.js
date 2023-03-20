function load_x_d_link_intro(id,outer_id) {
    TXFA = Object.byString(XFA, id);

    let html = `<div><div id='table_box' style="display:inline-block;width:95%;padding:5px;">Intro<br><div>`

    for (let i = 0; i < TXFA.length; i++) {
        html += box_factory(TXFA[i], i)
    }

    html += `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_interface_entry'>+ interface</span>
             <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%' id='new_video_entry'>+ video</span>
               </div></div></div></div>`

    function box_factory(t_array, i) {
        let html = `<div style="border-bottom:0px;" class='save_records_boarder' data-type="[${i}]" data-xfa='${id}'>
<table style='width:100%;'>
    <tbody>`

        if (t_array.filename != null) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.filename}" data-outer_xfa="${id}[${i}]"  data-inner_xfa="filename" data-type="string">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Index</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.file_index}" data-outer_xfa="${id}[${i}]"  data-inner_xfa="file_index" data-type="u32">
                  </td>
                  <td data-x="delete_main" data-xfa="unknown" class='x_button noselect'>
                     X
                 </td>
               </tr>
`
        }

        if (t_array.intro != null) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Video</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.intro}" data-outer_xfa="${id}[${i}]"  data-inner_xfa="intro" data-type="string">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.section_1[0].unknown}" data-outer_xfa="${id}[${i}]" data-inner_xfa="section_1[0].unknown"data-type="u8">
                  </td>
                  <td data-x="delete_main" data-xfa="unknown" class='x_button noselect'>
                     X
                 </td>
               </tr>
`
        }

        html += `</tbody></table></div>`

        return html

    }

    function delete_entry(e) {
        let temp = this.parentElement.parentElement.parentElement.parentElement
        // calculate index
        for (var i = 0; (temp = temp.previousSibling); i++) {}
        console.log(i)
        TXFA.splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()

    }

    function generate_box() {
        if (this.id === "new_interface_entry") {
            TXFA.push({
                filename: 'blank',
                file_index: 0
            })
        } else {
            TXFA.push({
                intro: 'blank',
                section_1: [{
                    unknown: 0
                }]
            })
        }
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="intro_splice">X</a>'

    document.getElementById("new_interface_entry").addEventListener("click", generate_box);
    document.getElementById("new_video_entry").addEventListener("click", generate_box);
    document.getElementById("intro_splice").addEventListener("click", delete_intro);

    function delete_intro() {
        TXFA.splice(0, TXFA.length)
        let position = document.getElementsByClassName("file_is_highlighted")[0]

        let temp = {
            key: 'ArrowUp'
        }
        file_move_with_key(temp, true)
        position.parentElement.remove()
        
        temp_xfa = Object.byString(XFA, outer_id);
        if (temp_xfa.section_main.length !== 0 || temp_xfa.section_intro.length !== 0 || temp_xfa.section_demo[0] !== null) {} else {
            position = document.getElementsByClassName("file_is_highlighted")[0].parentElement.children[0].className = 'no_arrow'
        }
        file_viewer.focus()

    }

    let input_field = table_box.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }
    let x_field = table_box.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', delete_entry)
    }

    // document.getElementById("link_new_file").addEventListener("click", a);
}
