function load_x_d_folder(id) {
    // // let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-xfa='${id}'>
    // //          <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='link'>+ Link</span>
    // //          <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='share'>+ Share</span>
    // //            </div>`

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

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById('game').value = TXFA.game
    document.getElementById("name").addEventListener('change', edit_change_name);

    
    add_events()

    // // document.getElementById("link").addEventListener('click', generate_file)
    // // document.getElementById("share").addEventListener('click', generate_file)

    // function generate_file() {
    //     let type_data = []
    //     let file_type = 0
    //     if (this.id === "link") {
    //         type_data = [{
    //             id: gen_id(),
    //             section_1: [],
    //             section_intro: [],
    //             section_main: [],
    //             section_demo: [null],
    //             section_font: [],
    //             section_mystery: [],
    //             texture_1: [0, 0, 0],
    //             texture_2: [0, 0, 0],
    //             menu_Intrface_name: 'Blank',
    //             menu_Intrface_index: 0,
    //             menu_loading_name: 'Blank',
    //             menu_loading_index: 0,
    //             menu_kart_name: 'Blank',
    //             menu_item_name: 'Blank'
    //         }]
    //         file_type = 3
    //     }else if(this.id === "share"){
    //         type_data = [{
    //             id: gen_id(),
    //             model_array: [],
    //             sound_array:[],
    //             texture_array:[],
    //             name:'blank'
    //         }]
    //         file_type = 8
    //     }
    //     XFA.push({
    //         id: gen_id(),
    //         version: XFA[0].version,
    //         type: file_type,
    //         type_s: this.id,
    //         index: XFA.length,
    //         bytelength: 0,
    //         linked_strings: [{
    //             string: '',
    //             unknown1: 0,
    //             unknown2: 0
    //         }, {
    //             string: '',
    //             unknown1: 0,
    //             unknown2: 0
    //         }],
    //         sounds: [],
    //         patcher_texutre: [{
    //             amount: 0
    //         }],
    //         patcher_texture_animation: [{
    //             amount: 0
    //         }],
    //         patcher_sounds: [{
    //             amount: 0
    //         }],
    //         patcher_models: [{
    //             amount: 0
    //         }],
    //         patcher_general_offsets: [{
    //             amount: 0
    //         }],
    //         models: [],
    //         textures: [],
    //             texture_animations:[],
    //         type_data: type_data
    //     })

    //     generate_file_view()
    //     file_viewer.children[0].children[2].click()
    //     file_viewer.focus()
    // }

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
