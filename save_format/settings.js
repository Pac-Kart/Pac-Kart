function load_save_settings() {
    settings_html = ''
    settings_import();

    document.getElementById("file_editor").innerHTML = settings_html

    settings_data()

}

function settings_import() {
    settings_html += `
<div style="display:inline-block;width:95%;padding:5px;">
   
   <div style='height:23%'>Time Saved
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td class='no_border'>Year</td>
                  <td class='no_border'><input style='width:100%;' title='Year' type='text' id='year'> </td>
               </tr>
               <tr>
                  <td class='no_border'>Month</td>
                 <td class='no_border'><input style='width:100%;' title='Month' type='text' id='month'></td>
               </tr>
               <tr>
                  <td class='no_border'>Day</td>
                    <td class='no_border'> <input style='width:100%;' maxlength="2" title='Day' type='text' id='day'></td>
               </tr>
               <tr>
                  <td class='no_border'>Hour</td>
                  <td class='no_border'>   <input style='width:100%;' maxlength="2" title='Hour' type='text' id='hour'></td>
               </tr>
               <tr>
                  <td class='no_border'>Minute</td>
                  <td class='no_border'><input style='width:100%;' maxlength="2" title='Minute' type='text' id='minute'></td>
               </tr>
                        </tbody>

            </table>
            
      </div>
   </div>

   <div style='height:6%'>Last Selected Difficulty<br>

         <select style="width:100%" title="last selected difficulty" id="last_difficulty">
            <option value="0">Easy</option>
            <option value="1">Medium</option>
            <option value="2">Hard</option>
            <option value="3">Nightmare</option>
         </select>
      
   </div>
   <div style='height:6%'>Auto Save<br>

         <select style="width:100%" title="auto save" id="auto_save">
            <option value="0">Off</option>
            <option value="1">On</option>
         </select>
         
   </div>
   <div style='height:6%'>SFX Volume<br>
         <input style="width:100%" title='sfx volume' type='text' id='sfx_volume'>
   </div>
   <div style='height:6%'>Music Volume<br>
         <input style="width:100%" title='music volume' type='text' id='music_volume'>
   </div>
   <div style='height:6%'>Wide Screen<br>
         <select style="width:100%" title="wide screen" id="wide_screen">
            <option value="0">Off</option>
            <option value="1">On</option>
         </select>
   </div>
   <div style='height:6%'>Last Saved Time Trial Name<br>
         <input style="width:100%" maxlength="3" title='letters' type='text' id='letters_0_0'>
   </div>
   <div style='height:6%'>Pac Mobile Camera<br>
         <select style="width:100%" title="pac mobile camera" id="pac_camera">
            <option value="0">Off</option>
            <option value="1">On</option>
         </select>
   </div>
   <div style='height:30%;'>Controller Settings
      <div class='save_records_boarder'>
         <table style='width:100%'>
            <tbody>
         
`

    for (let i = 0; i < 8; i++) {
        settings_html += `
        <tr>
            <td class='no_border'>
                <select title="rumble settings"  id="rumble_${i}">
                   <option value="0">Off</option>
                   <option value="1">On</option>
                </select>
            </td>
            <td class='no_border'>
                <select title="unknown 1" id="unknown1_${i}">
                   <option value="0">Off</option>
                   <option value="1">On</option>
                </select>
            </td>
            <td class='no_border'>
                <select title="unknown 2" id="unknown2_${i}">
                   <option value="0">Off</option>
                   <option value="1">On</option>
                </select>
            </td>
            <td class='no_border'>
                <select title="unknown 3" id="unknown3_${i}">
                   <option value="0">Off</option>
                   <option value="1">On</option>
                </select>
            </td>
            <td class='no_border'>
                <input title='unknown 4' type='text' id='unknown4_${i}'>
            </td>
        </tr>
    
`
    }

    settings_html += `</tbody></table></div></div></div>`
}

function settings_data() {
    document.getElementById("year").value = (u32(save_offset.settings1 + 8, is_little_endian))
    document.getElementById("year").dataset.offset = (save_offset.settings1 + 8)

    document.getElementById("month").value = (u32(save_offset.settings1 + 12, is_little_endian))
    document.getElementById("month").dataset.offset = (save_offset.settings1 + 12)

    document.getElementById("day").value = (u32(save_offset.settings1 + 16, is_little_endian))
    document.getElementById("day").dataset.offset = (save_offset.settings1 + 16)
    document.getElementById("hour").value = (u32(save_offset.settings1 + 20, is_little_endian))
    document.getElementById("hour").dataset.offset = (save_offset.settings1 + 20)
    document.getElementById("minute").value = (u32(save_offset.settings1 + 24, is_little_endian))
    document.getElementById("minute").dataset.offset = (save_offset.settings1 + 24)

    document.getElementById("last_difficulty").selectedIndex = (u32(save_offset.settings1 + 28, is_little_endian))
    document.getElementById("last_difficulty").dataset.offset = (save_offset.settings1 + 28)

    document.getElementById("auto_save").selectedIndex = (u32(save_offset.settings1 + 32, is_little_endian))
    document.getElementById("auto_save").dataset.offset = (save_offset.settings1 + 32)

    document.getElementById("sfx_volume").value = (u8(save_offset.settings1 + 36))
    document.getElementById("sfx_volume").dataset.offset = (save_offset.settings1 + 36)
    document.getElementById("music_volume").value = (u8(save_offset.settings1 + 37))
    document.getElementById("music_volume").dataset.offset = (save_offset.settings1 + 37)

    document.getElementById("wide_screen").selectedIndex = (u8(save_offset.settings1 + 39))
    document.getElementById("wide_screen").dataset.offset = (save_offset.settings1 + 39)

    get_letters(save_offset.settings2, 0, 0)

    document.getElementById("pac_camera").value = (u8(save_offset.settings2 + 3))
    document.getElementById("pac_camera").dataset.offset = (save_offset.settings2 + 3)

    document.getElementById("year").addEventListener("change", save_value_changed);
    document.getElementById("month").addEventListener("change", save_value_changed);
    document.getElementById("day").addEventListener("change", save_value_changed);
    document.getElementById("hour").addEventListener("change", save_value_changed);
    document.getElementById("minute").addEventListener("change", save_value_changed);
    document.getElementById("last_difficulty").addEventListener("change", save_value_changed);
    document.getElementById("auto_save").addEventListener("change", save_value_changed);
    document.getElementById("sfx_volume").addEventListener("change", save_value_changed);
    document.getElementById("music_volume").addEventListener("change", save_value_changed);
    document.getElementById("wide_screen").addEventListener("change", save_value_changed);
    document.getElementById("letters_0_0").addEventListener("change", save_value_changed);
    document.getElementById("pac_camera").addEventListener("change", save_value_changed);

    for (let i = 0; i < 8; i++) {
        document.getElementById("rumble_" + i).selectedIndex = (u8(save_offset.settings1 + 40 + (i * 8)))
        document.getElementById("rumble_" + i).dataset.offset = save_offset.settings1 + 40 + (i * 8)

        document.getElementById("unknown1_" + i).selectedIndex = (u8(save_offset.settings1 + 41 + (i * 8)))
        document.getElementById("unknown1_" + i).dataset.offset = save_offset.settings1 + 41 + (i * 8)

        document.getElementById("unknown2_" + i).selectedIndex = (u8(save_offset.settings1 + 42 + (i * 8)))
        document.getElementById("unknown2_" + i).dataset.offset = save_offset.settings1 + 42 + (i * 8)

        document.getElementById("unknown3_" + i).selectedIndex = (u8(save_offset.settings1 + 43 + (i * 8)))
        document.getElementById("unknown3_" + i).dataset.offset = save_offset.settings1 + 43 + (i * 8)

        document.getElementById("unknown4_" + i).value = (u8(save_offset.settings1 + 44 + (i * 8)))
        document.getElementById("unknown4_" + i).dataset.offset = save_offset.settings1 + 44 + (i * 8)

        document.getElementById("rumble_" + i).addEventListener("change", save_value_changed);
        document.getElementById("unknown1_" + i).addEventListener("change", save_value_changed);
        document.getElementById("unknown2_" + i).addEventListener("change", save_value_changed);
        document.getElementById("unknown3_" + i).addEventListener("change", save_value_changed);
        document.getElementById("unknown4_" + i).addEventListener("change", save_value_changed);

    }

}
