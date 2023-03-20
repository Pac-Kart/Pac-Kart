function load_x_d_folder(id) {

    // if(Array.isArray(id)){
    // document.getElementById("file_editor").innerHTML = 'file is broke'
    // }

    TXFA = Object.byString(XFA, id);

    let html = `<div style="display:flex;text-align:center;" class='save_records_boarder' data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_link_file'>+ Link</span>
               </div>`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById("new_link_file").addEventListener('click', generate_file)

    function generate_file() {
        XFA.push({
            id: gen_id(),
            version: XFA[1].version,
            type: 3,
            type_s: type,
            index: XFA.length,
            bytelength: 0,
            linked_strings: [{
                string: '',
                unknown1: 0,
                unknown2: 0
            }, {
                string: '',
                unknown1: 0,
                unknown2: 0
            }],
            sounds: [],
            patcher_texutre: [{
                amount: 0
            }],
            patcher_texture_animation: [{
                amount: 0
            }],
            patcher_sounds: [{
                amount: 0
            }],
            patcher_models: [{
                amount: 0
            }],
            patcher_general_offsets: [{
                amount: 0
            }],
            models: [],
            textures: [],
            type_data: [{
                id: gen_id(),
                section_1: [],
                section_intro: [],
                section_main: [],
                section_demo: [null],
                section_font: [],
                section_mystery: [],
                texture_1: [0, 0, 0],
                texture_2: [0, 0, 0],
                menu_Intrface_name: 'Blank',
                menu_Intrface_index: 0,
                menu_loading_name: 'Blank',
                menu_loading_index: 0,
                menu_kart_name: 'Blank',
                menu_item_name: 'Blank'
            }]
        })

        generate_file_view()
        file_viewer.children[0].children[2].click()
        file_viewer.focus()
    }

}
