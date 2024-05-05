"use strict";
function load_x_d_folder(id) {
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
                        <option value="0">Hot Wheels Velocity X</option>
                        <option value="1">Snoopy vs The Red Baron</option>
                        <option value="pac_man_world_rally">Pac Man World Rally</option>
                        <option value="3">Bigfoot: Collision Course</option>
                     </select>
                  </td>
               </tr>
               <tr>
                  <td class='no_border'>Console
                  </td>
                  <td class='no_border'>
                     <select disabled style="width:100%" title="Selected Console" id="console">
                     ${selectedgameconsole(TXFA.game)}
                     </select>
                  </td>
               </tr>
               <tr>
                  <td class='no_border'>Version
                  </td>
                <td class='no_border'>
                    <input style='width:100%;' title='Game Version' type='text' data-outer_xfa="${id}"  data-inner_xfa="version" data-type="u32" value="${TXFA.version}">
                </td>
               </tr>
               <tr>
                  <td class='no_border'>File Name
                  </td>
                <td class='no_border'>
                   <input style="width:100%" type='text' value="${TXFA.name}" data-outer_xfa="${id}"  data-inner_xfa="name" data-type="string" id='name'>
                </td>
            </tbody>
        </table>
      </div>
   </div>
</div>`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById('game').value = TXFA.game
    document.getElementById("name").addEventListener('change', edit_change_name);


    add_events()

    function selectedgameconsole(game) {
        if (game === "pac_man_world_rally") {
            return `
            <option value="0">PC</option>
            <option value="1">GameCube</option>
            <option value="2">PS2</option>
            <option value="3">PSP</option>
            <option value="4">Xbox</option>
            `
        }else{
            return`<option value="0">unknown</option>`

        }
        
    }

}
