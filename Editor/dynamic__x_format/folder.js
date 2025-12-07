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
        } else {
            return `<option value="0">unknown</option>`

        }

    }

}

function array_view_array(path) {

    if (path === "") {
        path = x
    }

    array_view_path(path)

    let html_list = ""
    let section_id = ""
    for (let i = 0; i < path.length; i++) {
        section_id = window[("get_" + g.type_string + "_sec_id")](path[i].sec_id)
        html_list += `
               <tr>
                  <td class='no_border data-array_number="${i}" noselect array_button'>${section_id} | Array ${i + 1}
                  </td>
                  <td colspan="2" class='no_border noselect arrow_buttons'>
                     <a class="move_button">Up ▲</a> <a class="move_button">Down ▼</a>
                 </td>
                  <td data-x="copy_to_bottom no_border" class='copy_button noselect'>
                     ⟳ Copy
                 </td>
                  <td data-x="delete_array" class='x_button noselect'>
                     X Delete
                 </td>
               </tr>
`
    }

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

   <div style='height:23%'>
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
            ${html_list}
               <tr>
               <td colspan="11" style="width:10%;white-space:nowrap;" data-plus="create_new" class='plus_button noselect'>+ Add</td>
               </tr>
            </tbody>
        </table>
      </div>
   </div>
</div>`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    // document.getElementById('game').value = TXFA.game
    // document.getElementById("name").addEventListener('change', edit_change_name);

    const fileEditor = document.getElementById('file_editor');

    fileEditor.addEventListener('click', function(event) {
        const target = event.target;
        let classname = target.className
        if (classname.includes("array_button")) {
            // console.log('?')
            array_view_object(path[target.dataset.array_number])
        } else if (classname.includes("move_button")) {
            if (target.innerText = "Up ▲") {// move up
            } else {// move down
            }
        } else if (classname.includes("copy_button")) {
            console.log('?')
        } else if (classname.includes("x_button")) {
            console.log('?')
        } else if (classname.includes("plus_button")) {
            console.log('?')
        }

    });

    // add_events()

}

function array_view_object(path) {
    console.log(path)
}

function array_view_path(path) {
    console.log(path)
}
