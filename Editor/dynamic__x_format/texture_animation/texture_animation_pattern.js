function load_x_d_textures_animation_pattern(id) {
    TXFA = Object.byString(XFA, id);

    let html = `<div>
            <table style='width:100%;'>
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Time:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.time}" data-outer_xfa="${id}"  data-inner_xfa="time" data-type="float" id='time_input'>
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>unknown:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.unknown}" data-outer_xfa="${id}"  data-inner_xfa="unknown" data-type="u32" id='unknown_input'>
                  </td>
               </tr>
            </tbody>
        </table>
        
<div id='table_box' style="display:inline-block;width:95%;padding:5px;">Color Sequence<br><div>`

    for (let i = 0; i < TXFA.textures[0].length; i++) {
        html += pattern_factory(TXFA.textures[0][i], i)
    }

    html += `<div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:100%;color:#959595;font-size:150%;border-right:1px solid;' id='new_color'>+ Pattern</span>
               </div></div></div></div>`

    function pattern_factory(t_array, i) {

        let html = `<div style="border-bottom:0px;" class='save_records_boarder' data-type="[${i}]" data-xfa='${id}'>
        <table style='width:100%;'>
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${t_array[1]}" data-outer_xfa="${id}[i]"  data-inner_xfa="1" data-type="u32">
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
        TXFA.textures[0].splice(i, 1)

        document.getElementsByClassName("file_is_highlighted")[0].click()

    }

    function generate_box() {
        TXFA.textures[0].push([0, 0, 0])
        document.getElementsByClassName("file_is_highlighted")[0].click()
    }

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById("new_color").addEventListener("click", generate_box);
    document.getElementById("time_input").addEventListener("click", dyn_update_input);
    document.getElementById("unknown_input").addEventListener("click", dyn_update_input);

    let input_field = table_box.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }
    let x_field = table_box.getElementsByClassName('x_button')
    for (let i = 0; i < x_field.length; i++) {
        x_field[i].addEventListener('click', delete_entry)
    }
}
