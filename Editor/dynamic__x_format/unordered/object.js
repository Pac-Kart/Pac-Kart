"use strict";
function load_x_d_object__file(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${objsection()}
${objsection12()}
${objsection1216()}
   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''
    function objsection() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>collectable
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>hitbox</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_24}" data-outer_xfa="${id}"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>speed</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_28}" data-outer_xfa="${id}"  data-inner_xfa="f32_28" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_08</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_08}" data-outer_xfa="${id}"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_09</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_09}" data-outer_xfa="${id}"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_20</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_20}" data-outer_xfa="${id}"  data-inner_xfa="f32_20" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_36</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_36}" data-outer_xfa="${id}"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_40</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_40}" data-outer_xfa="${id}"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_44</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_44}" data-outer_xfa="${id}"  data-inner_xfa="f32_44" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_52</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_52}" data-outer_xfa="${id}"  data-inner_xfa="f32_52" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_56</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_56}" data-outer_xfa="${id}"  data-inner_xfa="u8_56" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_57</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_57}" data-outer_xfa="${id}"  data-inner_xfa="u8_57" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_58</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_58}" data-outer_xfa="${id}"  data-inner_xfa="u8_58" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_76</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_76}" data-outer_xfa="${id}"  data-inner_xfa="f32_76" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_84</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_84}" data-outer_xfa="${id}"  data-inner_xfa="u8_84" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_85</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_85}" data-outer_xfa="${id}"  data-inner_xfa="u8_85" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_108</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_108}" data-outer_xfa="${id}"  data-inner_xfa="u8_108" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_109</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_109}" data-outer_xfa="${id}"  data-inner_xfa="u8_109" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_110</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_110}" data-outer_xfa="${id}"  data-inner_xfa="u8_110" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_111</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_111}" data-outer_xfa="${id}"  data-inner_xfa="u8_111" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>unordered_unknown_00_48</td>
                  <td class='no_border'>
                  ${generate_linkbox(id, 'unordered_unknown_00_48', 'unknown_00', TXFA.unordered_unknown_00_48)}
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>unordered_unknown_00_68</td>
                  <td class='no_border'>
                  ${generate_linkbox(id, 'unordered_unknown_00_68', 'unknown_00', TXFA.unordered_unknown_00_68)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>frame_text</td>
                  <td class='no_border'>
                  ${generate_linkbox(id, 'unordered_frame_text_60', 'frame_text', TXFA.unordered_frame_text_60)}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function objsection12() {
        let html = ''
        if (TXFA.section_12.length === 0) {
            return html
        }

        html = `
   <div style='padding-bottom:20px'>object_12
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td class='no_border'>
                     ${generate_linkbox_special(`${id}.section_12[0].texture_00`, TXFA.section_12[0].texture_00)}
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_04</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_04}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_04" data-type="u8">
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_08</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_08}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_08" data-type="f32">
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`

        return html

    }

    function objsection1216() {
        let html = ''
        if (TXFA.section_12[0]?.section_16?.length == 0 || TXFA.section_12[0]?.section_16?.length == undefined) {
            return html
        }

        html = `
   <div style='padding-bottom:20px'>object_12_16
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].u8_00}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].u8_01}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].u8_02}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_03</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].section_16[0].u8_03}" data-outer_xfa="${id}.section_12[0].section_16[0]"  data-inner_xfa="u8_03" data-type="u8">
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
