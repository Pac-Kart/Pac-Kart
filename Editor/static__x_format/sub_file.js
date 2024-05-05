function load_sub_file(offset) {
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
                    <input disabled style='width:100%;' title='Game Version' type='text' data-type="u32" value="${u32(offset + 8)}">
                </td>
               </tr>
               <tr>
                  <td class='no_border'>Version
                  </td>
                <td class='no_border'>
                    <input disabled style='width:100%;' title='Game Version' type='text' data-type="u32" value="${u32(offset)}">
                </td>
               </tr>
            </tbody>
        </table>
      </div>
   </div>
</div>

`

    file_editor.innerHTML = html
}
