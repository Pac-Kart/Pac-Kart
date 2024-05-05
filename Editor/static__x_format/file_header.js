function load_folder() {

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
   
   <div style='height:23%'>File Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td class='no_border'>Game
                  </td>
                  <td class='no_border'>
                     <select disabled style="width:100%" title="Selected Game" id="game">
                        <option value="${g.game}">${g.game}</option>
                     </select>
                  </td>
               </tr>
               <tr>
                  <td class='no_border'>Console
                  </td>
                  <td class='no_border'>
                     <select disabled style="width:100%" title="Selected Console" id="console">
                        <option value="${g.console}">${g.console}</option>
                     </select>
                  </td>
               </tr>
               <tr>
                  <td class='no_border'>Version
                  </td>
                <td class='no_border'>
                    <input disabled style='width:100%;' title='Game Version' type='text'  data-inner_xfa="version" data-type="u32" value="${g.version}">
                </td>
               </tr>      
               <tr>
                  <td class='no_border'>File Name
                  </td>
                <td class='no_border'>
                   <input disabled style="width:100%" type='text' value="${g.file_name}"  data-inner_xfa="name" data-type="string" id='name'>
                </td>
            </tbody>
        </table>    
      </div>
   </div>
</div>`
            file_editor.innerHTML = html


}