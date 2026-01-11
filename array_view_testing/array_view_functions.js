#! fires whenever New File/import file is clicked
"use strict";

document.getElementById("file_input").addEventListener("change", import_new_file);
document.getElementById("create_file_button").addEventListener("click", create_new_file);

async function import_new_file(event) {
    globalThis.temp_files = event.currentTarget.files;
    const lastFileIndex = temp_files.length - 1;

    globalThis.x = []
    globalThis.id_list = [];
    let last_file_i = -1

    Object.keys(temp_files).forEach(i => {
        const reader = new FileReader();
        read_a_file(reader, i, temp_files[i])

        function read_a_file(reader, i, file) {
            try {
                reader.readAsArrayBuffer(file)
                reader.onload = (e) => {

                    last_file_i++

                    globalThis.g = get_g_obj(temp_files[i])

                    // globalThis.g = {
                    //     debug: false,
                    //     divisible_prev_value: 0,
                    //     game: 0,
                    //     console: 0,
                    //     version: 0,
                    //     file_name: file.name,
                    //     endian: true,
                    //     datapack_end: 0,
                    // };

                    globalThis.buffer = e.target.result

                    const dataView = new DataView(buffer);
                    //.x* file array

                    file_viewer.textContent = ''
                    file_editor.textContent = ''

                    get_type_from_file()

                    if (g.type_string === "json") {} else if (g.type_string) {
                        window[("im_" + g.type_string + "_x")](last_file_i)
                    }
                    {// not file
                    }

                    // filecheck()

                    // sha1_file_list_index.push(i)

                    console.log(`%c ${g.file_name} || ${last_file_i}/${lastFileIndex}`, 'color:#ff10ff')
                    // for (let temp_array_index = 0; temp_array_index < temp_array__.length; temp_array_index++) {
                    // if (temp_array__[temp_array_index].files.includes(g.file_name)) {
                    //     temp_array__[temp_array_index].console += `<a class='f'> ${g.file_name}</a><hr><br>`
                    //     }
                    // }
                    if (lastFileIndex == last_file_i) {
                        globalThis.g.last_file = true;
                        create_new_array_view()
                        document.getElementById("file_input").value = ''
                    }
                    //sorted by a-z, also by size

                }
            } catch (error) {}

        }
    }

    )
}

function import_single_file(from_function, event) {
    const uploadlink = document.createElement("input");
    uploadlink.type = "file";
    // uploadlink.hidden = "true";
    uploadlink.id = "single_input_file";

    document.getElementById("_2nd_data_bar").appendChild(uploadlink);

    document.getElementById("single_input_file").addEventListener("change", function(e) {
        const reader = new FileReader();
        try {
            reader.readAsText(e.target.files[0])
            reader.onload = (e) => {
                let result = e.target.result
                console.log(result)

                uploadlink.remove();
                from_function(result)
            }
        } catch (error) {}

    });

    uploadlink.click();

}

function check_if_json(string) {
    let is_json = isJsonString(string)

    if (is_json) {
        import_json_file(string)
    } else {
        return false
    }

    function isJsonString(string) {
        try {
            JSON.parse(string);
        } catch (e) {
            return false;
        }
        return true;
    }
}

function import_json_file(string) {
    let jsonobj = JSON.parse(string)
    let sec_id = jsonobj.sec_id

    if (PK_path.obj.sec_id === sec_id) {
        PK_path.obj = jsonobj
        console.log('imported json / replaced x')
    } else {
        alert(`
    imported section does not match section id\n
    expected sec_id: ${PK_path.obj.sec_id}
    imported sec_id: ${sec_id}`)
    }

}

function u8(o) {
    return new DataView(buffer).getUint8(o, g.endian);
}
function u16(o) {
    return new DataView(buffer).getUint16(o, g.endian);
}
function u32(o) {
    return new DataView(buffer).getUint32(o, g.endian);
}
function f32(o) {
    return new DataView(buffer).getFloat32(o, g.endian);
}

// async function import_new_file__x(event) {
//     const files = event.currentTarget.files;
//     const lastFileIndex = files.length - 1;

//                 globalThis.x = []
//                 globalThis.id_list = [];

//     for (let i = 0; i < files.length; i++) {

//         globalThis.g = get_g_obj(files[i])

//         await readAFile(files[i], g, i, lastFileIndex);

//     }

//     function readAFile(file, g, currentIndex, lastIndex) {
//         return new Promise( (resolve, reject) => {

//             const reader = new FileReader();

//             reader.onload = function(e) {
//                 globalThis.buffer = e.target.result

//                 g.file_name = file.name

//                 document.getElementById("file_input").value = ''

//                 const dataView = new DataView(buffer);

//                 globalThis.u8 = (o) => dataView.getUint8(o, g.endian);
//                 globalThis.u16 = (o) => dataView.getUint16(o, g.endian);
//                 globalThis.u32 = (o) => dataView.getUint32(o, g.endian);
//                 globalThis.f32 = (o) => dataView.getFloat32(o, g.endian);

//                 // dynamic array
//                 //.x* file array

//                 file_viewer.textContent = ''
//                 file_editor.textContent = ''

//                 get_type_from_file()

//                 // g.datapack_end = buffer.byteLength;
//                 window[("im_" + g.type_string + "_x")]()

//                 console.log(`%c ${g.file_name}`, 'color:#ff10ff')
//                 if (lastIndex == Number(currentIndex)) {
//                     globalThis.g.last_file = true;
//                     create_new_array_view()
//                 }

//                 resolve();
//             }
//             ;

//             reader.onerror = function(error) {
//                 reject(error);
//             }
//             ;

//             reader.readAsArrayBuffer(file);
//         }
//         );
//     }

// }

function create_new_file() {

    globalThis.g = get_g_obj()
    choose_file_format()

}

function create_new_array_view() {

    if (g.last_file === false) {
        return
    }

    const saveButton = document.getElementById("save_button");

    if (!saveButton) {
        first_array_view()
    }

    let str_html = '';
    generate_x_obj()

    // if (g.is_import === true) {
    // g.datapack_end = buffer.byteLength;
    // window[("im_" + g.type_string + "_x")]()
    // } else {
    // window[("add_" + g.type_string + "_x")]()
    // }

    append_to_x_files()

    str_html = gen_array_view_file_first_time(x);

    file_viewer.innerHTML = str_html;

    document.getElementsByClassName('file_hover_not_selected')[0]?.click();
    file_viewer.focus();

    globalThis.PK_path = {
        array_path: ["0"],
        obj: 0,
    }

    // array_view_object()
    array_view_get_type(PK_path.array_path)
    add_events()

    // console.log(x_global)

    /* x_global[0].x_files = */

    function append_to_x_files() {
        // if (x_global[0].x_files.length) {
        x_global[0].x_files = x
        // }
    }

    function first_array_view() {
        const dataTypesBar = document.getElementById("data_types_bar");

        //sometimes the click event is removed?
        dataTypesBar.innerHTML += `<a data-is_active="false" class="data_bar_options" id="save_button">Save</a>`;
        document.getElementById("save_button").addEventListener("click", save_file);
        file_viewer.addEventListener("click", function(event) {
            const target = event.target;

            if (target.classList.contains("file_arrow")) {
                // Arrow clicked
                arrow_click(event)
            } else if (target.classList.contains("file_hover_not_selected")) {
                // 'file_hover_not_selected ' clicked
                file_click(event)

            }
        });
        file_viewer.addEventListener("keydown", file_move_with_key);

    }

    function generate_x_obj() {
        globalThis.x_global = []
        x_global.push({
            sec_id: "XSET",
            x_files: [],
            global_version: g.type_string,
            padding_cull: false,
        })
        if (globalThis.id_list) {} else {
            globalThis.id_list = 0
            globalThis.x = []
        }

    }

}

function arrow_click(e) {
    const isOpening = e.srcElement.innerHTML === '→';

    e.srcElement.innerHTML = isOpening ? '↓' : '→';
    e.srcElement.style.paddingRight = isOpening ? '6px' : '0px';
    e.srcElement.style.paddingLeft = isOpening ? '4px' : '0px';

    for (let i = 3; i < e.srcElement.parentNode.children.length; i++)
        e.srcElement.parentNode.children[i].style.display = isOpening ? 'block' : 'none';

    const nextElementSibling = e.srcElement.nextElementSibling;
    if (nextElementSibling && nextElementSibling.nextElementSibling.nextElementSibling) {
        nextElementSibling.nextElementSibling.nextElementSibling.style.display = isOpening ? 'block' : 'none';
    }
    const position = document.getElementsByClassName("file_is_highlighted")[0]
    if (position.getBoundingClientRect().x === 0 && position.getBoundingClientRect().y === 0) {
        e.srcElement.parentElement.children[2].click()
    }

}

function get_g_obj(is_file) {
    let name = 'not_file'
    let is_import = false
    let last_file = true
    if (is_file?.name) {
        name = is_file.name
        is_import = true
        last_file = false
    }

    return {
        debug: true,
        divisible_prev_value: 0,
        game: 0,
        console: 0,
        version: 0,
        type_string: 0,
        file_name: name,
        endian: true,
        is_import: is_import,
        last_file: last_file,
    };

}

function choose_file_format() {

    choose_game_version(g.game)

    function choose_game_version(str_game) {
        switch (str_game) {
        case "Motor_Mayhem_Vehicular_Combat_League":
            choose_mm_version()
            break
        case "hot_wheels_velocity_x":
            choose_hwvx_version()
            break
        case "snoopy_vs_the_red_baron":
            choose_svtrb_version()
            break
        case "pac_man_world_rally":
            choose_pmwr_version()
            break
        case "bee_movie_game":
            choose_bmg_version()
            break
        case "bigfoot_collision_course":
            choose_bcc_version()
            break
        default:
            choose_game()
        }
    }

    function choose_game() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose type of file:</div>
        <div id='Motor_Mayhem_Vehicular_Combat_League' class="select_option_fileview">Motor Mayhem: Vehicular Combat League</div>
        <div id='hot_wheels_velocity_x' class="select_option_fileview">Hot Wheels Velocity X</div>
        <div id='snoopy_vs_the_red_baron' class="select_option_fileview">Snoopy vs The Red Baron</div>
        <div id='pac_man_world_rally' class="select_option_fileview">Pac Man World Rally</div>
        <div id='bee_movie_game' class="select_option_fileview">Bee Movie Game</div>
        <div id='bigfoot_collision_course' class="select_option_fileview">Bigfoot: Collision Course</div>
        `
        let games = document.getElementsByClassName('select_option_fileview')
        for (let i = 0; i < games.length; i++) {
            games[i].addEventListener("click", choose_x_game_click);
        }
    }

    function choose_x_game_click() {
        g.game = this.id
        choose_game_version(g.game)
    }

    function choose_mm_version() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="4" data-console="pS2" data-endian="false" id='mm' class="select_option_fileview">PS2</div>
        `

        add_clickable_version_list()

    }

    function choose_hwvx_version() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="177" data-console="pS2" data-endian="false" id='hwvx_proto' class="select_option_fileview">PS2 Proto</div>
        <div data-version="183" data-console="pS2" data-endian="false" id='hwvx_ps2' class="select_option_fileview">PS2</div>
        <div data-version="183" data-console="pc" data-endian="false" id='hwvx_pc' class="select_option_fileview">PC</div>
        <div data-version="183" data-console="gc" data-endian="true" id='hwvx_gc' class="select_option_fileview">Gamecube</div>
        `

        add_clickable_version_list()

    }

    function choose_svtrb_version() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="273" data-console="pS2" data-endian="false" id='svtrb_ps2' class="select_option_fileview">PS2</div>
        <div data-version="273" data-console="psp" data-endian="false" id='svtrb_psp' class="select_option_fileview">PSP</div>
        <div data-version="274" data-console="pc" data-endian="false" id='svtrb_pc' class="select_option_fileview">PC</div>
        `

        add_clickable_version_list()

    }

    function choose_pmwr_version() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="243" data-console="xbox" data-endian="false" id='pmwr' class="select_option_fileview">Xbox</div>
        <div data-version="249" data-console="pS2" data-endian="false" id='pmwr' class="select_option_fileview">PS2 Demo</div>
        <div data-version="267" data-console="gc" data-endian="true" id='pmwr' class="select_option_fileview">Gamecube</div>
        <div data-version="267" data-console="pc" data-endian="false" id='pmwr' class="select_option_fileview">PC</div>
        <div data-version="267" data-console="pS2" data-endian="false" id='pmwr' class="select_option_fileview">Ps2 (ntsc)</div>
        <div data-version="274" data-console="sps" data-endian="false" id='pmwr' class="select_option_fileview">PSP</div>
        `

        add_clickable_version_list()

    }

    function choose_bmg_version() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="288" data-console="wii" data-endian="true" id='bmg_demo' class="select_option_fileview">Wii Demo</div>
        <div data-version="312" data-console="wii" data-endian="true" id='bmg_demo' class="select_option_fileview">Wii</div>
        <div data-version="312" data-console="pc" data-endian="false" id='bmg_demo' class="select_option_fileview">PC</div>
        `

        add_clickable_version_list()

    }

    function choose_bcc_version() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="315" data-console="wii" data-endian="true" id='bcc_wii' class="select_option_fileview">Wii</div>
        <div data-version="315" data-console="pc" data-endian="false" id='bcc_pc' class="select_option_fileview">PC</div>
        `

        add_clickable_version_list()

    }

    function add_clickable_version_list() {
        let consoles = document.getElementsByClassName('select_option_fileview')
        for (let i = 0; i < consoles.length; i++) {
            consoles[i].addEventListener("click", choose_version_click);
        }
    }

    function choose_version_click() {
        g.type_string = this.id
        g.version = this.dataset.version
        g.console = this.dataset.console
        if (this.dataset.endian === "false") {
            g.endian = false
        }
        create_new_array_view()
    }

}

function get_type_from_file() {
    let extension = g.file_name.slice((g.file_name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()

    if (new DataView(buffer).byteLength < 17) {
        wrong_file_type()
        return;
    }
    switch (u32(0)) {
    case 33620128:
        is_x();
        break;
    case 2684354818:
        g.endian = false;
        is_x();
        break;
    default:
        not_x();
        break;
    }

    //with version and extenstion

    function is_x() {

        //magic 2
        switch (u32(4)) {
        case 67174573:
        case 134348960:
            g.type_string = "mmcvl"
            g.game = "motor_mayhem"
            create_new_array_view()
            return
            break
        case 67174574:
            is_hot_wheels()
            return
            break
        case 67174575:
            is_later_game()
            break
        default:
            alert('magic 2 diff val: ', u32(4))
        }

    }

    function is_hot_wheels() {
        g.game = "hot_wheels_velocity_x"
        g.version = u32(8)
        switch (g.version) {
        case 177:
        case 179:
            g.console = "ps2"
            g.type_string = "hwvx_proto"
            //proto ps2 hwvx
            create_new_array_view()
            break
        case 183:
            switch (extension) {
            case 'xpc':
                g.type_string = "hwvx_pc"
                g.console = "pc"
                create_new_array_view()
                break
            case 'xgc':
                g.type_string = "hwvx_gc"
                g.console = "gamecube"
                create_new_array_view()
                break
            case 'xps':
                g.type_string = "hwvx_ps2"
                g.console = "ps2"
                create_new_array_view()
                break
            default:
                choose_file_format()
            }
            break
        }
    }

    function is_later_game() {
        g.version = u32(8)
        switch (g.version) {
        case 243:
            g.type_string = "pmwr_xbox"
            g.game = "pac_man_world_rally"
            g.console = "xbox"
            //demo xbox pmwr
            create_new_array_view()
            break
        case 249:
            g.type_string = "pmwr_ps2_demo"
            g.game = "pac_man_world_rally"
            g.console = "ps2"
            //demo ps2 pmwr
            create_new_array_view()
            break
        case 267:
            g.game = "pac_man_world_rally"
            switch (extension) {
            case 'xgc':
                g.type_string = "pmwr_gc"
                g.console = "gamecube"
                create_new_array_view()
                break
            case 'xps':
                g.type_string = "pmwr_ps2"
                g.console = "ps2"
                create_new_array_view()
                break
            case 'xpc':
                g.type_string = "pmwr_pc"
                g.console = "pc"
                create_new_array_view()
                break
            default:
                choose_file_format()
            }
            break
        case 273:
            g.game = "snoopy_vs_the_red_baron"
            switch (extension) {
            case 'xps':
                g.type_string = "svtrb_ps2"
                g.console = "ps2"
                create_new_array_view()
                break
            case 'xpp':
                g.type_string = "svtrb_psp"
                g.console = "psp"
                create_new_array_view()
            }
            break
        case 274:
            switch (extension) {
            case 'xpp':
                g.game = "pac_man_world_rally"
                g.type_string = "pmwr_psp"
                g.console = "psp"
                create_new_array_view()
                break
            case 'xps':
                g.game = "pac_man_world_rally"
                g.type_string = "pmwr_ps2"
                g.console = "ps2"
                create_new_array_view()
                break
            case 'xpc':
                g.game = "snoopy_vs_the_red_baron"
                g.type_string = "svtrb_pc"
                g.console = "pc"
                create_new_array_view()
                break
            default:
                choose_file_format()
            }
            break
        case 288:
            g.game = "bee_movie_game"
            g.type_string = "bmg_demo"
            g.console = "wii"
            //demo wii version
            create_new_array_view()
            break
        case 312:
            g.game = "bee_movie_game"
            switch (extension) {
            case 'xwi':
                g.type_string = "bmg_wii"
                g.console = "wii"
                create_new_array_view()
                break
            case 'xdx9':
                g.type_string = "bmg_pc"
                g.console = "pc"
                create_new_array_view()
                break
            }
            break
        case 315:
            g.game = "bigfoot_collision_course"
            switch (extension) {
            case 'xwi':
                g.type_string = "bcc_wii"
                g.console = "wii"
                create_new_array_view()
                break
            case 'xdx9':
                g.type_string = "bcc_pc"
                g.console = "pc"
                create_new_array_view()
                break
            }
            break
        default:
            console.log(g.version)
            choose_file_format()
        }
    }

    function not_x() {
        if (u32(4) == 4 && u32(284) == 1) {
            //pc save file
            g.endian = true;
            g.version = 'save'
            save_file_import(g.file_name)
            return;
        } else if (u16(0) === 14407 && u32(64) === 761487696) {
            //gc save file
            g.endian = false;
            g.version = 'save'
            save_file_import(g.file_name)
            return;
        } else if (u32(4) == 4 && u32(8) === 9624) {
            //ghost
            g.endian = true;
            g.version = 'save'
            save_file_import(g.file_name)
            return;
        } else {
            wrong_file_type()
            return
        }
    }

    function wrong_file_type() {
        alert('wrong file type!')

        buffer = null
        u8 = null
        u16 = null
        u32 = null
        f32 = null
        x = null
    }

}

function array_view_array(array_path) {

    PK_path.obj = get_full_path(PK_path.array_path)
    let sec_name = get_section_name()

    let html_list = ""
    let section_id = ""
    for (let i = 0; i < PK_path.obj.length; i++) {
        // section_id = window[("get_" + g.type_string + "_sec_id")](array_path[i].sec_id)
        html_list += `
               <tr id="${i}">
                  <td class='no_border data-array_number="${i}" noselect array_button'>${i} | Array ${i + 1}
                  </td>
                  <td colspan="4" class='no_border noselect arrow_buttons'>
                      <div>
                     <a class="move_button">▲</a>
                     <a class="move_button">▼</a>
                     </div>
                     <div>
                     <a data-x="copy_to_bottom no_border" class='copy_button noselect'>⟳</a>
                     <a data-x="delete_array" class='x_button noselect'>X</a>
                     </div>
                 </td>
               </tr>
`
    }

    let html = `
<div style="display:inline-block;padding:5px;">

   <div style='height:23%'> ${sec_name}
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

}

function add_events() {
    const fileEditor = document.getElementById('file_editor');
    const fileview = document.getElementById('file_viewer');

    fileEditor.addEventListener('click', function(event) {
        const target = event.target;
        let classname = target.className
        let id = target.id
        if (classname.includes("array_button")) {
            let key_i = target.parentElement.id
            // let str_array = array_path_local[key_i]

            PK_path.array_path.push(key_i)

            array_view_get_type(PK_path.array_path)
            // array_view_object()

        }
        if (classname.includes("obj_to_array")) {
            let key_i = target.parentElement.parentElement.id
            let str_key = Object.keys(PK_path.obj)[key_i]

            if (str_key == undefined) {
                return
            }

            PK_path.array_path.push(str_key)

            array_view_get_type(PK_path.array_path)

            // array_view_array()

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
        } else if (id.includes("json_download_button")) {
            let json_string = JSON.stringify(PK_path.obj)
            let string_filename = `PK_${g.type_string}_${get_section_name()}.json`
            download_file(json_string, string_filename)
        } else if (id.includes("json_upload_button")) {
            import_single_file(check_if_json)
        }

    });

    fileview.addEventListener('click', function(event) {
        const target = event.target;
        let classname = target.className
        if (classname.includes("plus_button")) {
            let key_i = target.dataset.x_id
            let index = Number(target.dataset.index)
            globalThis.temp_key_i = target

            let new_path = []
            for (let i = 0; i - 1 < index; i++) {
                new_path.push(PK_path.array_path[i])
            }

            PK_path.array_path = new_path

            array_view_get_type(PK_path.array_path)

            // temp_key_i.parentElement.parentElement.children
            // let str_array = array_path_local[key_i]

            // PK_path.array_path.push(key_i)

        }
    });

}

function array_view_get_type(array) {
    PK_path.obj = get_full_path(array)

    if (Array.isArray(PK_path.obj)) {
        array_view_array(array)
    } else {
        array_view_object(array)
    }

}

function array_view_object() {

    PK_path.obj = get_full_path(PK_path.array_path)
    let sec_name = get_section_name()

    let values_array = Object.values(PK_path.obj);
    let keys_array = Object.keys(PK_path.obj)

    let html_list = ""
    let section_id = ""
    for (let i = 0; i < keys_array.length; i++) {
        let input_type = get_input_type(values_array[i])

        // section_id = window[("get_" + g.type_string + "_sec_id")](str_path[i].sec_id)
        html_list += `
               <tr id="${i}">
                  <td class='no_border' data-x_id="${keys_array[i]}" noselect'>${keys_array[i]}
                  </td>
                   <td class='no_border noselect arrow_buttons'>
                       ${input_type}
                 </td>
               </tr>
`
    }

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

   <div style='height:15%'>
        <span style="display: flex;width: 100%;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;height: 20px;"><a>${sec_name}</a><div style="display: flex;">
        <button title="download json" id="json_download_button">⤓</button>
        <button title="upload json" id="json_upload_button">⤒</button>
        </div>
        </span>
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
            ${html_list}
            </tbody>
        </table>
      </div>
   </div>
</div>`

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    // document.getElementById('game').value = TXFA.game
    // document.getElementById("name").addEventListener('change', edit_change_name);
}

function get_full_path(array_path) {

    let path_array = array_path

    let temp_array = x_global

    for (let i = 0; i < path_array.length; i++) {
        let temp_path = temp_array[path_array[i]]
        // temp_array = Object.values(temp_path);
        temp_array = temp_path

    }

    if (array_path.length === 0) {
        temp_array = x_global[0]
        PK_path.array_path = ["0"]
    }

    update_pk_section_list()
    return temp_array
    // x_global[path_array[0]]
}

function update_pk_section_list() {
    let html_list = ''

    for (let i = 0; i < PK_path.array_path.length; i++) {
        // let input_type = get_input_type(values_array[i])

        // section_id = window[("get_" + g.type_string + "_sec_id")](str_path[i].sec_id)
        html_list += `
               <tr id="${i}">
                  <td class='no_border plus_button noselect' data-x_id="${PK_path.array_path[i]}" data-index="${i}">${PK_path.array_path[i]}
                  </td>
               </tr>
`
    }

    let html = `
<div style="display:inline-block;width:100%">
         <table style='width:100%;' >
            <tbody>
            ${html_list}
            </tbody>
        </table>
</div>`

    file_viewer.innerHTML = html

}

function get_input_type(value) {
    let input_type = ''
    if (Array.isArray(value)) {
        input_type = `<input class="obj_to_array" style='width:100%;' type='button' value="Array ${value.length}">`
    } else {
        input_type = `<input style='width:100%;' type='text'  value="${value}">`
    }

    return input_type

}

function display_path(str_path) {
    return `<a id="path">PATH: ${str_path.toString().replaceAll(',', ' -> ')}</a>`
}

function array_view_path(str_path) {
    console.log(str_path)
}
function gen_array_view_file_first_time(path) {
    let html = ''

    html += gen_array_view_file_array(path, 0, 8)

    // console.log(html)
    return html

}

function gen_array_view_file_array(path, i_deep, limit=0) {
    let html = ""
    i_deep++
    if (Array.isArray(path)) {
        if (path.length === 0) {
            return html
        }
    } else {
        return html
    }
    if (i_deep >= limit) {
        return html
    }

    for (let i = 0; i < path.length; i++) {
        // html += genFileInViewer("y", 'folder', 'ava', `${path[i].id}`, `${i_deep} -> [${i}]`)
        html += gen_array_view_file_object(path[i], i_deep, limit)
        html += "</div>"
    }

    // gen_array_view_file_array(i_deep+=1,limit)
    return html + "</div>"

}

function get_section_name() {
    let str_name = 'not found'
    if (Array.isArray(PK_path.obj)) {
        return ''
    } else {

        let str_sec_id = PK_path.obj.sec_id
        if (PK_path.array_path.length < 4) {
            switch (str_sec_id) {
            case "XSET":
                str_name = "global"
                break
            case "AAAA":
                str_name = "file"
                break
            }
        } else {
            str_name = window[("get_" + g.type_string + "_sec_id")](str_sec_id)
        }

        return str_name
    }
}

function gen_array_view_file_object(path, i_deep, limit=0) {
    let html = ""
    i_deep++
    if (Array.isArray(path)) {
        return html
    } else {}
    if (i_deep >= limit) {
        return html
    }

    let amt_arrays = 0;

    for (let entry of Object.entries(path)) {
        if (Array.isArray(entry[1])) {
            amt_arrays++
            // html += genFileInViewer("y", 'file', 'avo', path.id, `${i_deep} -> id: ${path.id} [file]`)
            html += gen_array_view_file_array(entry[1], i_deep, limit)
            html += "</div>"
        }

        // }
    }

    if (amt_arrays === 0) {
        return html + "</div>"
    } else {
        return html
    }

}

function save_file(e) {

    x_global[0].global_version

    //calculate what type of file is being saved
    const fileName = x_global[0].x_files[0].name
    let temp_buffer
    if (x.length) {
        temp_buffer = dynamic_save()
    } else {
        temp_buffer = buffer
        if (g.version === 'save') {
            // calculate new crc
            calculate_crc()
        }
    }

    download_file(temp_buffer, fileName)

}

function dynamic_save() {

    globalThis.buffer_array = []
    globalThis.dynamic_buffer = new ArrayBuffer(268435455)

    // only 1st x file for now
    window[("ex_" + g.type_string + "_file_header")](0, x_global[0].x_files[0].format[0])

    let totalbytelength = 0
    for (let buffer of buffer_array) {
        totalbytelength += buffer.byteLength
    }
    let final_array = new Uint8Array(totalbytelength)
    let offset = 0

    for (let i = 0; i < buffer_array.length; i++) {
        final_array.set(new Uint8Array(buffer_array[i]), offset)
        offset += buffer_array[i].byteLength
    }

    delete globalThis.buffer_array
    delete globalThis.dynamic_buffer

    return final_array

}

function download_file(buffer, filename) {
    const objectURL = URL.createObjectURL(new Blob([buffer]));

    const downloadLink = document.createElement("a");
    downloadLink.href = objectURL;
    downloadLink.download = filename;

    document.getElementById("_2nd_data_bar").appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

}

function file_move_with_key(e) {
    if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        return;
    }
    e.preventDefault();

    let position = document.querySelector(".file_is_highlighted");
    if (!position)
        return;

    switch (e.key) {
    case 'ArrowDown':
        moveDown(position);
        break;
    case 'ArrowUp':
        go_up(position);
        break;
    case 'ArrowLeft':
        moveLeft(position);
        break;
    case 'ArrowRight':
        moveRight(position);
        break;
    }

    document.querySelector(".file_is_highlighted").scrollIntoView();

    function moveDown(position) {
        const parentElement = position.parentElement;
        const nextElementSibling = position.nextElementSibling;

        if (parentElement.children[0].innerHTML == '↓' && parentElement.children[0].classList[0] != 'no_arrow' && nextElementSibling !== null) {
            if (nextElementSibling.style.display == 'block') {
                if (nextElementSibling.children[2].tagName == "DIV") {
                    nextElementSibling.children[0].children[2].click()
                } else {
                    nextElementSibling.children[2].click()
                }
            }
        } else if (parentElement.nextElementSibling != null) {
            //go mid
            parentElement.nextElementSibling.children[2].click()
        } else if (parentElement.nextElementSibling == null) {

            let div = parentElement

            go_down(div)

        }
    }
    function go_down(div) {
        if (div.parentElement.id == 'file_viewer') {
            return
        } else if (div.parentElement.nextElementSibling == null) {
            go_down(div.parentElement)
        } else {
            div.parentElement.nextElementSibling.children[2].click()
        }

    }

    function go_up(div) {
        const parentElement = div.parentElement;
        const previousElementSibling = parentElement.previousElementSibling;

        if (previousElementSibling && previousElementSibling.id === 'file_viewer') {
            return;
        }

        if (previousElementSibling && previousElementSibling.classList.contains('file_hover_not_selected')) {
            previousElementSibling.click();
        } else if (previousElementSibling && previousElementSibling.classList.contains('sub_file_div')) {
            const lastChild = previousElementSibling.lastElementChild;

            if (lastChild && lastChild.tagName === "A") {
                lastChild.click();
            } else if (lastChild && lastChild.style.display === "block") {
                let tempElement = lastChild;

                while (tempElement.lastElementChild && tempElement.lastElementChild.style.display === 'block') {
                    tempElement = tempElement.lastElementChild;
                }

                tempElement.children[2].click();
            } else if (previousElementSibling.children[2]) {
                previousElementSibling.children[2].click();
            }
        }

    }

    function moveLeft(position) {
        if (position.parentElement.children[0].innerHTML === '↓') {
            position.parentElement.children[0].click();
        }
    }

    function moveRight(position) {
        if (position.parentElement.children[0].innerHTML === '→') {
            position.parentElement.children[0].click();
        }
    }

}

function gen_id() {
    let id = id_list
    id_list++
    return id
}

function ex_patch(o, a, x, m) {
    // o = offset
    // a = array
    // x = file array
    // m = model offset

    if (x !== -1 && o) {
        x[0][0] = o

        if (x[0][3] === "m") {
            su32(o, m)
        } else {
            if (g.console === 'gamecube') {
                if (x[0][3] === "s") {
                    su16(o, x[0][1])
                    su16(o + 2, x[0][2])
                } else {
                    su16(o, x[0][2])
                    su8(o + 2, x[0][1])
                }
            } else {

                su16(o + 0, x[0][1])
                if (x[0][3] === "s") {
                    su16(o + 2, x[0][2])
                } else {
                    su16(o + 2, 52428)
                }
            }
        }
        a.push(x[0])
    }
    // ex_patch(o + 4, texturearray, x.texture) ?
}

// end_block = dyn_multilink(XFA.type_section_08, frame_array, dyn_frame, outer_XFA.frames, offset + 8, mid, end_block)

// end_block = ex_ml(XFA.texture_04, model_array, dyn_model, main_XFA.models, offset + 4, mid, end_block,true,true,"model")
function ex_ml(ID, ARRAY, FUNCTION, XFA, OFFSET, END_OFFSET, GLOBAL_OFFSET, IS_APPEND, CUSTOM, model_offset_temp) {
    if (ID !== 0) {
        if (FUNCTION.name === "ex_models" && Array.isArray(ID)) {
            ex_patch(OFFSET, g.model_patch_array, ID, model_offset_temp)
            return END_OFFSET
        } else {

            let temp_index = ARRAY[0].a_ids.indexOf(ID)
            if (temp_index === null) {
                //not linked
                console.log(XFA, 'not linked')
                return END_OFFSET
            } else {

                let temp_offset = ARRAY[0].a_offsets[temp_index]

                if (GLOBAL_OFFSET === 'up') {
                    g.oa.push(OFFSET)
                }

                if (temp_offset === false) {
                    //append first time

                    ARRAY[0].a_offsets[temp_index] = END_OFFSET
                    temp_offset = ARRAY[0].a_offsets[temp_index]
                    END_OFFSET = FUNCTION(temp_offset, XFA[temp_index])

                }
                if (GLOBAL_OFFSET === 'down') {
                    g.oa.push(OFFSET)
                }

                if (IS_APPEND) {
                    su32(OFFSET, temp_offset)
                } else {
                    su32(OFFSET, temp_offset)
                }
                if (CUSTOM === "model") {
                    g.model_patch_array.push([OFFSET, temp_index, 0])
                }
            }
        }
    } else {// console.log(XFA,'nonlinked')
    }
    return END_OFFSET
}

function ex_ma(XFA, ARRAY, FUNCTION, OFFSET, MID) {
    // wats ex ma
    //multi append section
    let END_OFFSET = OFFSET
    if (XFA.length) {

        let temp_index

        for (let i = 0; i < XFA.length; i++) {
            END_OFFSET = ex_byte_alignment_testing(END_OFFSET)
            temp_index = ARRAY[0].a_ids.indexOf(XFA[i].id)

            if (temp_index === null) {
                //not linked
                console.log(XFA, 'not linked')
                return END_OFFSET
            } else {
                ARRAY[0].a_offsets[temp_index] = END_OFFSET - MID
                END_OFFSET = FUNCTION(END_OFFSET, XFA[temp_index])
            }
        }
    }
    return END_OFFSET
}

function ex_string(o, e, x, d, oa) {
    // o = offset
    // e = end
    // x = file array
    // d = divisible
    // oa = offset array 

    if (x[0] !== null && x[0] !== "") {

        if (oa === 0) {} else {
            g.oa.push(o)
        }

        su32(o, e)

        if (d === undefined) {
            d = g.divisibility
        }

        let i = 0
        if (x.length) {

            for (; i < x[0].length; i++) {
                su8(e + i, x[0][i].charCodeAt())
            }
            i++
            i = divisible(i, d)
        }
        return e + i
    }
    return e

}

function dyn_string(offset, XFA_string, mid, divis) {
    if (divis === undefined) {
        divis = g.divisibility
    }
    let i = 0
    if (XFA_string.length) {

        for (; i < XFA_string.length; i++) {
            su8(offset + i, XFA_string[i].charCodeAt())
        }
        i++
        i = divisible(i, divis)
    }
    g.divisible_prev_value = [offset, XFA_string, mid, divis]
    return offset + i
}

function generate_id_offset_array(array, XFA) {
    if (XFA.length !== null) {

        array.push({
            a_ids: [],
            a_offsets: []
        })
        for (let i = 0; i < XFA.length; i++) {
            array[0].a_ids.push(XFA[i].id)
            array[0].a_offsets.push(false)
        }
    }
}

function replacement_divisibility(value, divisibility, offset, replacement) {
    let temp_value = value
    let i = 0
    g.divisible_prev_value = [value, divisibility, offset, replacement]
    while ((temp_value) % divisibility !== 0) {
        su8(offset + i, replacement)
        temp_value++
        i++
    }
    return temp_value
}

function ex_debug(o, a) {
    //print on file
    for (let i = 0; i < a.length; i++) {
        su8(o + i, a[i].charCodeAt())
    }
}

function ex_s_offset(o, e, f, x, p) {
    // o = offset
    // e = end
    // f = function
    // x = file array
    // p = offset array position

    if (o && x !== undefined && x.length) {
        su32(o, e)

        if (p === "up") {
            g.oa.push(o)
            e = f(e, x[0])
        } else if (p === "down") {
            e = f(e, x[0])
            g.oa.push(o)
        } else {
            e = f(e, x[0])
        }

        return e

    } else {
        return e
    }

}

function ex_find(y, n) {
    let html = `good val: ${y} -> ${y + g.m}\n bad val: ${n} -> ${n + g.m}`
    console.log(html)
}

function su8(o, v) {
    new DataView(dynamic_buffer).setUint8(o, v, g.endian)
}
function su16(o, v) {
    new DataView(dynamic_buffer).setUint16(o, v, g.endian)
}
function su32(o, v) {
    new DataView(dynamic_buffer).setUint32(o, v, g.endian)
}
function sf32(o, v) {
    new DataView(dynamic_buffer).setFloat32(o, v, g.endian)
}

function ex_byte_alignment_testing(o) {
    let e = o

    return e

}
