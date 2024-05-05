"use strict";
function load_x_d_activator__file(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${activator()}
   </div>
`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById("name").addEventListener('change', edit_change_name);
    function activator() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>Main
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td colspan="3" class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_08[0]}" data-outer_xfa="${id}.section_08"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_00}" data-outer_xfa="${id}"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_01</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_01}" data-outer_xfa="${id}"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_02}" data-outer_xfa="${id}"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_03</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_03}" data-outer_xfa="${id}"  data-inner_xfa="u8_03" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_12</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_12}" data-outer_xfa="${id}"  data-inner_xfa="u32_12" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_48</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_48}" data-outer_xfa="${id}"  data-inner_xfa="u32_48" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_56</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_56}" data-outer_xfa="${id}"  data-inner_xfa="u32_56" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_64</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_64}" data-outer_xfa="${id}"  data-inner_xfa="u32_64" data-type="u32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_72</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_72}" data-outer_xfa="${id}"  data-inner_xfa="f32_72" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_80</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_80}" data-outer_xfa="${id}"  data-inner_xfa="f32_80" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_84</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_84}" data-outer_xfa="${id}"  data-inner_xfa="f32_84" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_88</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_88}" data-outer_xfa="${id}"  data-inner_xfa="f32_88" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_92</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_92}" data-outer_xfa="${id}"  data-inner_xfa="f32_92" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_96</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_96}" data-outer_xfa="${id}"  data-inner_xfa="f32_96" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u32_100</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u32_100}" data-outer_xfa="${id}"  data-inner_xfa="u32_100" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_104</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_104}" data-outer_xfa="${id}"  data-inner_xfa="f32_104" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_120</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_120}" data-outer_xfa="${id}"  data-inner_xfa="u8_120" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_121</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_121}" data-outer_xfa="${id}"  data-inner_xfa="u8_121" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_122</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_122}" data-outer_xfa="${id}"  data-inner_xfa="u8_122" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_123</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_123}" data-outer_xfa="${id}"  data-inner_xfa="u8_123" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_128</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_128}" data-outer_xfa="${id}"  data-inner_xfa="f32_128" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_132</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_132}" data-outer_xfa="${id}"  data-inner_xfa="f32_132" data-type="f32">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_136</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_136}" data-outer_xfa="${id}"  data-inner_xfa="f32_136" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_153</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_153}" data-outer_xfa="${id}"  data-inner_xfa="u8_153" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_154</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_154}" data-outer_xfa="${id}"  data-inner_xfa="u8_154" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>u8_155</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_155}" data-outer_xfa="${id}"  data-inner_xfa="u8_155" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>f32_204</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_204}" data-outer_xfa="${id}"  data-inner_xfa="f32_204" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function flag_section12() {
        let html = ''
        if (TXFA.section_12.length === 0) {
            return html
        }
        switch (TXFA.u8_08) {
        case 2:
            html = typesection_02()
            break
        case 3:
            html = typesection_03()
            break
        case 4:
            html = typesection_04()
            break
        default:
            html = 'type unknown'
        }

        return html

    }

    function typesection_02() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>02
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_00" data-type="u8">
                  <td style="width:10%;white-space:nowrap;" class='no_border'>02</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u8_02}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u8_02" data-type="u8">
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>04</td>
                  <td colspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_04}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_04" data-type="f32">
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`

        return html

    }
    function typesection_03() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>03
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>08</td>
                  <td coldspan='3' class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].u32_08}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
`
        return html

    }

    function typesection_04() {
        let html = ''

        html = `
   <div style='padding-bottom:20px'>04
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>00</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_12[0].f32_00}" data-outer_xfa="${id}.section_12[0]"  data-inner_xfa="f32_00" data-type="f32">
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
