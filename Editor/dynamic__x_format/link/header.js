"use strict";
function load_x_d_link_header(id) {
    let menu_Intrface_name = TXFA.section_12[0]
    let menu_Intrface_index = TXFA.u32_16
    let menu_loading_name = TXFA.section_20[0]
    let menu_loading_index = TXFA.u32_24
    let menu_kart_name = TXFA.section_36[0]
    let menu_item_name = TXFA.section_40[0]
    let intro = TXFA.section_08
    let main = TXFA.section_32
    let demo = TXFA.section_48

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
   <div style='padding-bottom:20px'>Main Menu
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%" class='no_border'>loading:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${menu_loading_name}" data-outer_xfa="${id}.section_20" data-inner_xfa="0" data-type="string">  </td>
                  <td style="width:10%" class='no_border'>index</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${menu_loading_index}" data-outer_xfa="${id}" data-inner_xfa="u32_24" data-type="u32">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>interface:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${menu_Intrface_name}" data-outer_xfa="${id}.section_12" data-inner_xfa="0" data-type="string">  </td>
                  <td style="width:10%" class='no_border'>index</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${menu_Intrface_index}" data-outer_xfa="${id}" data-inner_xfa="u32_16" data-type="u32">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>item:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${menu_item_name}" data-outer_xfa="${id}.section_40" data-inner_xfa="0" data-type="string">  </td>
                  <td style="width:10%" class='no_border'>kart</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${menu_kart_name}" data-outer_xfa="${id}.section_36" data-inner_xfa="0" data-type="string">  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>Font:</td>
                  <td class='no_border'>${generate_linkbox(id, 'unordered_frame_font_60', 'frame_font', TXFA.unordered_frame_font_60)}
                  </td>
                  <td style="width:10%" class='no_border'>Texture 1:</td>
                  <td class='no_border'>${generate_linkbox_special(`${id}.texture_44`, TXFA.texture_44)}  </td>
               </tr>
               <tr>
                  <td style="width:10%" class='no_border'>Texture 2:</td>
                  <td class='no_border'>${generate_linkbox_special(`${id}.texture_52`, TXFA.texture_52)}  </td>
                  </td>
                  <td style="width:10%" class='no_border'>Texture 3:</td>
                  <td class='no_border'>${generate_linkbox_special(`${id}.texture_56`, TXFA.texture_56)}  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
   ${section_00()}
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    function generate_xfa() {
        if (this.id === 'new_main_link') {
            main.push([[], gen_id()])
        } else if (this.id === 'new_intro_link') {
            intro.push({
                filename: 'Blank',
                file_index: 0
            })
        } else if (this.id === 'new_demo_link') {
            demo[0]
            demo = [{
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
        if (main.length) {
            html += dynamic__link_main(main, TXFA.id)
        }
        if (intro.length) {
            html += dynamic__link_intro(intro, TXFA.id)
        }
        if (demo.length) {
            html += dynamic__link_demo(demo, TXFA.id)
        }

        outer_html.innerHTML += html
        outer_html.children[0].className = 'file_arrow'

        // x_addEventListener_file_viewer(outer_html)

        outer_html.children[0].className = 'file_arrow'
        outer_html.children[0].click()
        if (outer_html.children[0].innerText === '→') {
            outer_html.children[0].click()

        }
        document.getElementsByClassName("file_is_highlighted")[0].click()
        file_viewer.focus()
    }

    function section_00() {
        let html = ''
        if (TXFA.section_00.length) {
            html = `   
    <div style='padding-bottom:20px'>section_00
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%" class='no_border'>unknown 1:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.section_00[0].u8_00}" data-outer_xfa="${id}.section_00[0]" data-inner_xfa="u8_00" data-type="u8">  </td>
               </tr>
`
            if (TXFA.section_00[0].section_04) {
                if (TXFA.section_00[0].section_04[0].section_00) {
                    html += `
                <tr>
                  <td style="width:10%" class='no_border'>unknown 2:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.section_00[0].section_04[0].section_00[0].u8_08}" data-outer_xfa="${id}.section_00[0].section_04[0].section_00[0]" data-inner_xfa="u8_08" data-type="u8">  </td>
               </tr>
`
                    if (TXFA.section_00[0].section_04[0].section_00[0].section_04.length) {
                        html += `
                <tr>
                  <td style="width:10%" class='no_border'>unknown 3:</td>
                  <td class='no_border'><input style="width:100%" type='text' value="${TXFA.section_00[0].section_04[0].section_00[0].section_04[0].u32_20}" data-outer_xfa="${id}.section_00[0].section_04[0].section_00[0].section_04[0]" data-inner_xfa="u32_20" data-type="u32">  </td>
               </tr>
`
                    }

                }

            }
            html += `
            </tbody>
         </table>
      </div>
   </div>
`
        }

        return html

    }

}
