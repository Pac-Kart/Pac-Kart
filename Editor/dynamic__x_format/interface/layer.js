function load_x_d_interface_layer(id) {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

${layersettings()}
${typesection()}
   </div>
`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("name").addEventListener('change', edit_change_name);

    add_events()

    function layersettings() {
        let html = ''

        html = `   
   <div style='padding-bottom:20px'>Layer Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Name</td>
                  <td colspan="3" class='no_border'>
                       <input style="width:100%" type='text' value="${TXFA.section_00[0]}" data-outer_xfa="${id}.section_00"  data-inner_xfa="0" data-type="string" id='name'>
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>X</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_36}" data-outer_xfa="${id}"  data-inner_xfa="f32_36" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Y</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.f32_40}" data-outer_xfa="${id}"  data-inner_xfa="f32_40" data-type="f32">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_30}" data-outer_xfa="${id}"  data-inner_xfa="u8_30" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.u8_31}" data-outer_xfa="${id}"  data-inner_xfa="u8_31" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Type</td>
                  <td colspan="3" class='no_border'>
                     <input disabled style="width:100%" type='text' value="${typehtml(TXFA.u8_19)}" data-outer_xfa="${id}"  data-inner_xfa="u8_19" data-type="u8">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html

    }

   function typehtml(v) {
        let html = ''
        switch (v) {
        case 0:
            html = `[${v}] Texture`
            break
        case 1:
            html = `[${v}] Text`
            break
        case 3:
            html = `[${v}] Model`
            break
        case 5:
            html = `[${v}] Unknown`
            break
        case 6:
        case 7:
            html = `[${v}] Recursive`
            break
        case 10:
            html = `[${v}] Box`
            break
        case 12:
            html = `[${v}] Var`
            break
        case 13:
            html = `[${v}] Frame`
            break
        case 14:
            html = `[${v}] Manager`
            break
        case 15:
            html = `[${v}] Sparkler`
            break
        default:
            html = '????wtf'
        }

        return html
      
   }

    function typesection() {
        let html = ''
        switch (TXFA.u8_19) {
        case 0:
            html = typesection_00()
            break
        case 1:
            html = typesection_01()
            break
        case 3:
            html = typesection_03()
            break
        case 5:
            html = typesection_05()
            break
        case 6:
        case 7:
            html = typesection_06()
            break
        case 10:
            html = typesection_10()
            break
        case 12:
            html = typesection_12()
            break
        case 13:
            html = typesection_13()
            break
        case 14:
            html = typesection_14()
            break
        case 15:
            html = typesection_15()
            break
        default:
            html = '????wtf'
        }

        return html

    }

    function typesection_00() {
        let html = ''

        html = `   
   <div style='padding-bottom:20px'>Texture Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>`

        if (TXFA.section_24[0].u8_00 === 0) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td colspan="3" class='no_border'>${genterate_linkbox_special(id, TXFA.section_24[0].section_04)}                  </td>
               </tr>  

                  `

        } else if (TXFA.section_24[0].u8_00 === 1) {// html += `<tr>
        //       <td style="width:10%;white-space:nowrap;" class='no_border'>Model:</td>
        //       <td colspan="3" class='no_border'>${genterate_linkbox_special(id, TXFA.section_24[0].section_04)}                  </td>
        //    </tr>  

        //       `
        }

        html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_01}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_12}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_12" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_13}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_13" data-type="u8">
                  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
`

        if (TXFA.section_24[0].u8_00 === 3) {
            html += `   
   <div style='padding-bottom:20px'>section_08
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u8_08}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 5</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u8_09}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u8_09" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 6</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u8_11}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u8_11" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 7</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u8_16}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u8_16" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 8</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u16_18}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u16_18" data-type="u16">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Timer</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u32_20}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u32_20" data-type="u32">
                  </td>
               </tr>`

            for (let i = 0; i < TXFA.section_24[0].section_08[0].section_04.length; i++) {
                html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture ${i + 1}</td>
                  <td colspan="3" class='no_border'>${genterate_linkbox_special(id, TXFA.section_24[0].section_08[0].section_04[i].texture_00)}
                  </td>
               </tr>`
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
    function typesection_01() {
        let html = ''

        html = `   
   <div style='padding-bottom:20px'>Text Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>`

        if (TXFA.section_24[0].u8_00 === 0) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Text</td>
                  <td colspan="3" class='no_border'>
                  ${genterate_linkbox(id, 'frame_text', TXFA.section_24[0].section_04)}
               </tr> 
`
        }
        if (TXFA.section_24[0].u8_00 === 1) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Text</td>
                  <td colspan="3" class='no_border'>
                     <input disabled style="width:100%" type='text' value="Moved" data-outer_xfa="${id}.section_24[0].section_08"  data-inner_xfa="u8_00" data-type="u8">
               </tr> 
`

        } else if (TXFA.section_24[0].u8_00 === 3) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td colspan="3" class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u8_00}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u8_00" data-type="u8">
               </tr>  

                  `
        }

        if (TXFA.section_24[0].u8_02 === 0) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Font</td>
                  <td colspan="3" class='no_border'>
                  ${genterate_linkbox(id, 'frame_font', TXFA.section_24[0].section_12)}
               </tr> 
`
        } else if (TXFA.section_24[0].u8_02 === 1) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Font</td>
                  <td colspan="3" class='no_border'>
                  ${genterate_linkbox(id, 'frame_multi_font', TXFA.section_24[0].section_12)}
               </tr> 
`
        }

        html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_01}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_03}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_03" data-type="u8">
                  </td>
               </tr>  
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_16}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_16" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_17}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_17" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u16_18}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u16_18" data-type="u16">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u16_20}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u16_20" data-type="u16">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_22}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_22" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_23}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_23" data-type="u8">
                  </td>
               </tr>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown</td>
                  <td colspan="3"  class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].f32_24}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="f32_24" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
`

        if (TXFA.section_24[0].u8_00 === 1) {
            html += `   
   <div style='padding-bottom:20px'>section_08 Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u8_08}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_08[0].u16_10}" data-outer_xfa="${id}.section_24[0].section_08[0]"  data-inner_xfa="u16_10" data-type="u16">
                  </td>
               </tr>  
`

            for (let i = 0; i < TXFA.section_24[0].section_08[0].section_04.length; i++) {
                html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture ${i + 1}</td>
                  <td colspan="3" class='no_border'>
                  ${genterate_linkbox(id, 'frame_text', TXFA.section_24[0].section_08[0].section_04[i].unordered_frame_text_00)}
                  </td>
               </tr>`
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
    function typesection_03() {
        let html = ''
        if (TXFA.section_24[0].section_16.length) {
            html = `   
   <div style='padding-bottom:20px'>Model Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_16[0].section_08[0].u32_00}" data-outer_xfa="${id}.section_24[0].section_16[0].section_08[0]"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_16[0].section_08[0].u8_04}" data-outer_xfa="${id}.section_24[0].section_16[0].section_08[0]"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_16[0].section_08[0].u16_06}" data-outer_xfa="${id}.section_24[0].section_16[0].section_08[0]"  data-inner_xfa="u16_06" data-type="u16">
                  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
`
        }
        if (TXFA.section_24[0].section_04.length) {
            html += `   
   <div style='padding-bottom:20px'>Model Links
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
`

            for (let i = 0; i < TXFA.section_24[0].section_04.length; i++) {
                html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Model Link ${i + 1}</td>
                  <td class='no_border'>
                  ${genterate_linkbox(id, 'model_link', TXFA.section_24[0].section_04[i].unordered_model_link_00)}
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sound Control ${i + 1}</td>
                  <td class='no_border'>
                  ${genterate_linkbox(id, 'sound_controls', TXFA.section_24[0].section_04[i].unordered_sound_controls_04)}
                  </td>
               </tr>`
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
    function typesection_05() {
        let html = ''

        html = `   
   <div style='padding-bottom:20px'>Unknown Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td colspan="3" class='no_border'>
                         ${genterate_linkbox_special(id, TXFA.section_24[0].texture_00)}
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_04}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_05}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_05" data-type="u8">
                  </td>
               </tr>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].f32_08}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="f32_08" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].f32_12}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="f32_12" data-type="f32">
                  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>
`

        return html

    }

    function typesection_06() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Recursive Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Interface</td>
                  <td class='no_border'>
                          ${genterate_linkbox(id, 'interface', TXFA.section_24[0].unordered_interface_00)}
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_04}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        if (TXFA.section_24[0].section_12.length) {
            html += `   
   <div style='padding-bottom:20px'>section_12
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
`

            for (let i = 0; i < TXFA.section_24[0].section_12.length; i++) {
                html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_12[i].u32_00}" data-outer_xfa="${id}.section_24[0].section_12[${i}]"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_12[i].u8_04}" data-outer_xfa="${id}.section_24[0].section_12[${i}]"  data-inner_xfa="u8_04" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_12[i].u32_08}" data-outer_xfa="${id}.section_24[0].section_12[${i}]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
               </tr>`
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

    function typesection_10() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Box Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u32_00}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u32_04}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u32_08}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u32_12}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u32_12" data-type="u32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
    }
    function typesection_12() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Var Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_00}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u32_04}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u32_04" data-type="u32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
    }
    function typesection_13() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Frame Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_01}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>`
        if (TXFA.section_24[0].section_04.length) {
            html += `
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_04[0].u32_00}" data-outer_xfa="${id}.section_24[0].section_04[0]"  data-inner_xfa="u32_00" data-type="u32">
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_04[0].f32_04}" data-outer_xfa="${id}.section_24[0].section_04[0]"  data-inner_xfa="f32_04" data-type="f32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_04[0].u32_08}" data-outer_xfa="${id}.section_24[0].section_04[0]"  data-inner_xfa="u32_08" data-type="u32">
                  </td>`
        }

        html += `
                </tr>`

        if (TXFA.section_24[0].section_12.length) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Texture</td>
                  <td colspan="3" class='no_border'>${genterate_linkbox_special(id, TXFA.section_24[0].section_12[0].texture_00)}                  </td>
               </tr>`

        }

        html += `
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
    }
    function typesection_14() {
        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Manager Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Type</td>
                  <td class='no_border'>
                     <input disabled style="width:100%" type='text' value="${TXFA.section_24[0].u8_272}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_272" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 1</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].u8_273}" data-outer_xfa="${id}.section_24[0]"  data-inner_xfa="u8_273" data-type="u8">
                  </td>
               </tr>  
`
        if (TXFA.section_24[0].section_276.length) {
            html += `<tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 2</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_276[0].u8_00}" data-outer_xfa="${id}.section_24[0].section_276[0]"  data-inner_xfa="u8_00" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 3</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_276[0].u8_01}" data-outer_xfa="${id}.section_24[0].section_276[0]"  data-inner_xfa="u8_01" data-type="u8">
                  </td>
               </tr>  
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 4</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_276[0].u8_02}" data-outer_xfa="${id}.section_24[0].section_276[0]"  data-inner_xfa="u8_02" data-type="u8">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown 5</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA.section_24[0].section_276[0].u8_08}" data-outer_xfa="${id}.section_24[0].section_276[0]"  data-inner_xfa="u8_08" data-type="u8">
                  </td>
               </tr>  
`
        }

        html += `
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
    }

    function typesection_15() {

        let html = ''
        html = `   
   <div style='padding-bottom:20px'>Sparkler Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Sparkler</td>
                  <td class='no_border'>
                  ${genterate_linkbox(id, 'frame_sparkler', TXFA.section_24[0].unordered_frame_sparkler_00)}
                  </td>
            </tbody>
         </table>   
      </div>
   </div>
`
        return html
    }

}
