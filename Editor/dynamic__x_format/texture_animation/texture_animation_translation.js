function load_x_d_texture_animation_translation(id) {
    TXFA = Object.byString(XFA, id);

    let html = `<div><div id='table_box' style="display:inline-block;width:95%;padding:5px;">Color Sequence<br><div>`

    for (let i = 0; i < TXFA.length; i++) {
        html += translation_factory(TXFA[i], i)
    }

    html += `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:100%;color:#959595;font-size:150%;border-right:1px solid;' id='new_color'>+ Translation</span>
               </div></div></div></div>`

    function translation_factory(t_array, i) {

        let html = `<div style="border-bottom:0px;" class='save_records_boarder' data-type="[${i}]" data-xfa='${id}'>
        <table style='width:100%;'>
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>X</td>
                  <td class='no_border' style="width:10%">
                     <input style="width:100%" type='text' value="${t_array.x}" data-outer_xfa="${id}"  data-inner_xfa="x" data-type="float">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Y</td>
                  <td class='no_border' style="width:10%">
                     <input style="width:100%" type='text' value="${t_array.y}" data-outer_xfa="${id}"  data-inner_xfa="y" data-type="float">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Time</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.time}" data-outer_xfa="${id}[${i}]" data-inner_xfa="time"data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.unknown}" data-outer_xfa="${id}[${i}]" data-inner_xfa="unknown"data-type="u32">
                  </td>
                  <td data-x="delete_main" data-xfa="unknown" class='x_button noselect'>
                     X
                 </td>
               </tr>
            </tbody>
        </table>
    </div>`

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
        TXFA.push({
            x: 0,
            y: 0,
            time: 0,
            unknown: 0
        })
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById("new_color").addEventListener("click", generate_box);

    let input_field = table_box.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }
    let x_field = table_box.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', delete_entry)
    }
}
