function load_x_d_link_header(id) {
    TXFA = Object.byString(XFA, id);

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
   <div style='height:23%'>Main Menu
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%" class='no_border'>loading:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.menu_loading_name}" data-outer_xfa="${id}" data-inner_xfa="menu_loading_name" data-type="string">  </td>
                  <td style="width:10%" class='no_border'>index</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.menu_loading_index}" data-outer_xfa="${id}" data-inner_xfa="menu_loading_index" data-type="u32">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>interface:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.menu_Intrface_name}" data-outer_xfa="${id}" data-inner_xfa="menu_Intrface_name" data-type="string">  </td>
                  <td style="width:10%" class='no_border'>index</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.menu_Intrface_index}" data-outer_xfa="${id}" data-inner_xfa="menu_Intrface_index" data-type="u32">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>item:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.menu_item_name}" data-outer_xfa="${id}" data-inner_xfa="menu_item_name" data-type="string">  </td>
                  <td style="width:10%" class='no_border'>kart</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.menu_kart_name}" data-outer_xfa="${id}" data-inner_xfa="menu_kart_name" data-type="string">  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
`

    if (TXFA.section_main.length === 0 || TXFA.section_intro.length === 0 || TXFA.section_demo[0] === null) {
        html += `<div style="display:flex;text-align:center;" class='save_records_boarder' data-xfa='${id}'>`
        if (TXFA.section_main.length === 0) {
            html += `<span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_main_link'>+ Main</span>`
        }
        if (TXFA.section_intro.length === 0) {
            html += `<span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_intro_link'>+ Intro</span>`
        }
        if (TXFA.section_demo.length === 0 || TXFA.section_demo[0] === null) {
            html += `<span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_demo_link'>+ Demo</span>`
        }

        html += '</div>'
    }

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    if (TXFA.section_main.length === 0) {
        document.getElementById("new_main_link").addEventListener("click", generate_xfa);
    }
    if (TXFA.section_intro.length === 0) {
        document.getElementById("new_intro_link").addEventListener("click", generate_xfa);
    }
    if (TXFA.section_demo[0] === null || TXFA.section_demo.length === 0) {
        document.getElementById("new_demo_link").addEventListener("click", generate_xfa);
    }

    function generate_xfa() {
        if (this.id === 'new_main_link') {
            TXFA.section_main.push([[], gen_id()])
        } else if (this.id === 'new_intro_link') {
            TXFA.section_intro.push({
                filename: 'Blank',
                file_index: 0
            })
        } else if (this.id === 'new_demo_link') {
            TXFA.section_demo[0]
            TXFA.section_demo = [{
                unknown_0: 0,
                unknown_1: 0,
                link_array: [[]]
            }]
        } else {
            alert('hüh')
        }

        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.section_main.length != 0) {
            html += dynamic__link_main(TXFA.section_main, TXFA.id)
        }
        if (TXFA.section_intro.length != 0) {
            html += dynamic__link_intro(TXFA.section_intro, TXFA.id)
        }
        if (TXFA.section_demo.length !== 0 && TXFA.section_demo[0] !== null) {
            html += dynamic__link_demo(TXFA.section_demo, TXFA.id)
        }

        outer_html.innerHTML += html
        outer_html.children[0].className = 'file_arrow'

        x_addEventListener_file_viewer(outer_html)

        outer_html.children[0].className = 'file_arrow'
        outer_html.children[0].click()
        if (outer_html.children[0].innerText === '→') {
            outer_html.children[0].click()

        }
        document.getElementsByClassName("file_is_highlighted")[0].click()
        file_viewer.focus()
    }

    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }

}
