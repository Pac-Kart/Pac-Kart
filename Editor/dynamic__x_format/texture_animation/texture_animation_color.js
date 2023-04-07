function load_x_d_textures_animation_color(id) {
    TXFA = Object.byString(XFA, id);

    let html = `<div><div id='table_box' style="display:inline-block;width:95%;padding:5px;">Color Sequence<br><div>`

    for (let i = 0; i < TXFA.length; i++) {
        html += color_factory(TXFA[i], i)
    }

    html += `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:100%;color:#959595;font-size:150%;border-right:1px solid;' id='new_color'>+ Color</span>
               </div></div></div></div>`

    function color_factory(t_array, i) {
        
        let color_hex = `#${t_array.color.R.toString(16)}${t_array.color.G.toString(16)}${t_array.color.B.toString(16)}`
        let html = `<div style="border-bottom:0px;" class='save_records_boarder' data-type="[${i}]" data-xfa='${id}'>
        <table style='width:100%;'>
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Color</td>
                  <td class='no_border' style="width:10%">
                     <input style="width:100%" type='color' value="${color_hex}" data-outer_xfa="${id}"  data-inner_xfa="color" data-type="color">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Time</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.time}" data-outer_xfa="${id}[${i}]" data-inner_xfa="time"data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array.unknown}" data-outer_xfa="${id}[${i}]" data-inner_xfa="unknown"data-type="u8">
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
            color: {
                R: 0,
                G: 0,
                B: 0,
                A: 0,
            },
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
