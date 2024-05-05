"use strict";
function load_x_d_sub_file(id, id_index) {

    // let html = 'director / datapack editor / basic'
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

   <div style='height:15%'>Directory Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td class='no_border'>Index
                  </td>
                <td class='no_border'>
                    <input style='width:100%;' title='Game Version' type='text' data-outer_xfa="${id}"  data-inner_xfa="index" data-type="u32" value="${TXFA.index}">
                </td>
               </tr>
               <tr>
                  <td class='no_border'>Version
                  </td>
                <td class='no_border'>
                    <input style='width:100%;' title='Game Version' type='text' data-outer_xfa="${id}"  data-inner_xfa="version" data-type="u32" value="${TXFA.version}">
                </td>
               </tr>
            </tbody>
        </table>
      </div>
   </div>
   <div style='height:15%'>Share
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
                  <tr>
                      <td style="width:10%" class='no_border'>file 1</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.string_1[0]}" data-outer_xfa="${id}.datapack[0].linked_files.string_1" data-inner_xfa="0" data-type="string" data-fixed="false" data-byte_amount="12" maxlength="12" >  </td>
                      <td sty0xle="width:10%" class='no_border'>index</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_92}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_92" data-type="u32"> </td>
                      <td style="width:10%" class='no_border'>u32_96</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_96}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_96" data-type="u32"> </td>
                   </tr>
                  <tr>
                      <td style="width:10%" class='no_border'>file 2</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.string_2[0]}" data-outer_xfa="${id}.datapack[0].linked_files.string_2" data-inner_xfa="0" data-type="string" data-fixed="false" data-byte_amount="12" maxlength="12" >  </td>
                      <td style="width:10%" class='no_border'>index</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_112}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_112" data-type="u32"> </td>
                      <td style="width:10%" class='no_border'>u32_116</td>
                      <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].linked_files.u32_116}" data-outer_xfa="${id}.datapack[0].linked_files" data-inner_xfa="u32_116" data-type="u32"> </td>
                   </tr>
               </tbody>
         </table>
      </div>
</div>
      ${getfilespecific()}

`
    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    function getfilespecific() {
        let html = '';

        switch (TXFA.type) {
        case "link":
        case "car":
        case "interface":
            html = `
<div style='height:15%'>Basic
    <div class='save_records_boarder'>
        <table style='width:100%;' >
            <tbody>
                <tr>
                    <td style="width:10%" class='no_border'>u32_00</td>
                    <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].ordered[0].file_specific[0].u32_00}" data-outer_xfa="${id}.datapack[0].ordered[0].file_specific[0]" data-inner_xfa="u32_00" data-type="u32"></td>
                    <td style="width:10%" class='no_border'>u32_04</td>
                    <td class='no_border'><input style="width:100%" type='text' value="${TXFA.datapack[0].ordered[0].file_specific[0].basic_04[0].u32_04}" data-outer_xfa="${id}.datapack[0].ordered[0].file_specific[0].basic_04[0]" data-inner_xfa="u32_04" data-type="u32"></td>
                </tr>
                <tr>
                    <td style="width:10%" class='no_border'>Linked Section</td>
                    <td class='no_border'>
                        ${generate_linkbox(`${id}.datapack[0].ordered[0].file_specific[0].basic_04[0]`, 'unordered_link', TXFA.type, TXFA.datapack[0].ordered[0].file_specific[0].basic_04[0].unordered_link)}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`;
            break;
        default:
            break;
        }

        return html;
    }

}
