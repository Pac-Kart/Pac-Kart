#! fires whenever New File/import file is clicked
"use strict";

document.getElementById("file_input").addEventListener("change", import_new_file);
document.getElementById("create_file_button").addEventListener("click", create_new_file);
document.getElementById("log_checkbox").addEventListener("click", log_is_checked);
const inner_file_viewer = getElementSafely('inner_file_viewer');

function log_is_checked(e) {
    let is_checked = e.srcElement.checked
    pk_debug = is_checked
    if (!pk_debug) {
        const element_log = document.getElementById('print_log_console');
        element_log.innerHTML = ''
        console.pk_log(`clear log`)
    }

    console.pk_log(`pk_debug = ${pk_debug}`)

}

async function import_new_file(event) {
    globalThis.temp_files = event.currentTarget.files;
    const lastFileIndex = temp_files.length - 1;

    globalThis.x_global = []
    globalThis.x = []
    globalThis.id_list = 0;
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
                    globalThis.buffer = e.target.result

                    const dataView = new DataView(buffer);

                    inner_file_viewer.textContent = ''
                    file_editor.textContent = ''

                    get_type_from_file()

                    let import_end = false;

                    if (g.type_string === 'not_binary') {
                        // read
                        const text_reader = new FileReader();
                        try {
                            text_reader.readAsText(file)
                            text_reader.onload = (e) => {
                                let string = e.target.result
                                let is_json = isJsonString(string)
                                console.pk_log(`${g.file_name} || ${last_file_i + 1}/last`)

                                if (is_json) {
                                    let is_right_version = import_json_file_to_top(string)
                                    if (is_right_version !== false) {
                                        x_global[0] = is_right_version
                                        import_end = true
                                        file_import_end()
                                    }
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

                        } catch (error) {}

                    }

                    if (g.type_string === "not_binary") {} else if (g.type_string === "json") {
                        import_end = true
                        x.push({})
                    } else if (g.type_string) {
                        window[("im_" + g.type_string + "_x")](last_file_i)
                    }

                    if (lastFileIndex === last_file_i) {
                        if (g.type_string !== "not_binary") {
                            import_end = true
                        }
                    }

                    // pk_debug ? console.pk_log(`${g.file_name} || ${last_file_i + 1}/${lastFileIndex + 1}`) : 0;
                    // console.log(`%c ${g.file_name} || ${last_file_i}/${lastFileIndex}`, 'color:#ff10ff')
                    // for (let temp_array_inCdex = 0; temp_array_index < temp_array__.length; temp_array_index++) {
                    // if (temp_array__[temp_array_index].files.includes(g.file_name)) {
                    //     temp_array__[temp_array_index].console += `<a class='f'> ${g.file_name}</a><hr><br>`
                    //     }
                    // }
                    if (import_end) {
                        console.pk_log(`${g.file_name} || ${last_file_i + 1}/last`)
                        file_import_end()
                    } else {
                        console.pk_log(`${g.file_name} || ${last_file_i + 1}/${lastFileIndex + 1}`)
                    }
                    //sorted by a-z, also by size

                }
            } catch (error) {}

        }
    }

    )
}

function file_import_end() {
    globalThis.g.last_file = true;
    create_new_array_view()
    document.getElementById("file_input").value = ''
}

console.pk_log = function(string_message) {
    let is_string = typeof string_message === 'string'

    if (!is_string) {
        string_message = String(string_message)
    }

    const element_log = document.getElementById('print_log_console');
    var text = document.createElement('div')
    if (!pk_debug) {
        text.classList.add('disappearing-text');
    }
    text.innerHTML = string_message
    element_log.appendChild(text)

    console.log('PK_Log: ' + string_message)

    if (pk_debug) {
        return
        // no remove
    }

    // set to scroll?
    setTimeout(function() {
        // Set the text content to an empty string, removing the text
        if (text) {
            // console.log('?')
            text.remove()
        }
    }, 5000);
}

console.pk_log(`<a style="color:red;">section is very unfinished</a>`)

function import_single_file(from_function, type, id=0) {
    const uploadlink = document.createElement("input");
    uploadlink.type = "file";
    // uploadlink.hidden = "true";
    uploadlink.id = "single_input_file";

    document.getElementById("_2nd_data_bar").appendChild(uploadlink);

    document.getElementById("single_input_file").addEventListener("change", function(e) {
        const reader = new FileReader();
        try {
            if (type === "buffer") {
                reader.readAsArrayBuffer(e.target.files[0])
            } else {
                reader.readAsText(e.target.files[0])
            }

            reader.onload = (e) => {
                let result = e.target.result
                // console.pk_log(result)
                // console.log(result)

                uploadlink.remove();
                from_function(result, id)
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

function check_if_buffer(buffer, id) {

    let keys_array = Object.keys(PK_path.obj)
    let values_array = Object.values(PK_path.obj);
    let key = keys_array[id]
    let value = values_array[id]

    let base_string = convert_arraybuffer_base64(buffer)
    PK_path.obj[key] = base_string
    console.pk_log(`buffer uploaded to ${key}`)

    array_view_get_type(PK_path.array_path)
}

function import_json_file_to_top(string) {
    let jsonobj = JSON.parse(string)
    let sec_id = jsonobj.sec_id

    if (sec_id === "XSET") {
        g.type_string = "json"
        console.pk_log('imported json / replaced x')
        return jsonobj
    } else {
        console.pk_log(`
    imported section does not match section id\n
    expected sec_id: XSET
    imported sec_id: ${sec_id}`)
        return false
    }

}

function import_json_file(string) {
    let jsonobj = JSON.parse(string)
    let sec_id = jsonobj.sec_id

    if (PK_path.obj.sec_id === sec_id) {
        console.pk_log('imported json / replaced x')
        update_x_array_from_json(jsonobj)
        array_view_get_type(PK_path.array_path)
    } else {
        console.pk_log(`
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
    if (g.type_string === "json") {
        g.type_string = x_global[0].global_version
    } else {
        generate_x_obj()
        append_to_x_files()
    }

    str_html = gen_array_view_file_first_time(x);

    // inner_file_viewer.innerHTML = str_html;

    document.getElementsByClassName('file_hover_not_selected')[0]?.click();
    file_editor.focus();

    globalThis.PK_path = {
        array_path: ["0"],
        obj: 0,
        view: "path",
        history: [],
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
        debug: pk_debug,
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
        inner_file_viewer.innerHTML = `
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
        inner_file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="4" data-console="pS2" data-endian="false" id='mm' class="select_option_fileview">PS2</div>
        `

        add_clickable_version_list()

    }

    function choose_hwvx_version() {
        inner_file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="177" data-console="pS2" data-endian="false" id='hwvx_proto' class="select_option_fileview">PS2 Proto</div>
        <div data-version="183" data-console="pS2" data-endian="false" id='hwvx_ps2' class="select_option_fileview">PS2</div>
        <div data-version="183" data-console="pc" data-endian="false" id='hwvx_pc' class="select_option_fileview">PC</div>
        <div data-version="183" data-console="gc" data-endian="true" id='hwvx_gc' class="select_option_fileview">Gamecube</div>
        `

        add_clickable_version_list()

    }

    function choose_svtrb_version() {
        inner_file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="273" data-console="pS2" data-endian="false" id='svtrb_ps2' class="select_option_fileview">PS2</div>
        <div data-version="273" data-console="psp" data-endian="false" id='svtrb_psp' class="select_option_fileview">PSP</div>
        <div data-version="274" data-console="pc" data-endian="false" id='svtrb_pc' class="select_option_fileview">PC</div>
        `

        add_clickable_version_list()

    }

    function choose_pmwr_version() {
        inner_file_viewer.innerHTML = `
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
        inner_file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose Version type:</div>
        <div data-version="288" data-console="wii" data-endian="true" id='bmg_demo' class="select_option_fileview">Wii Demo</div>
        <div data-version="312" data-console="wii" data-endian="true" id='bmg_demo' class="select_option_fileview">Wii</div>
        <div data-version="312" data-console="pc" data-endian="false" id='bmg_demo' class="select_option_fileview">PC</div>
        `

        add_clickable_version_list()

    }

    function choose_bcc_version() {
        inner_file_viewer.innerHTML = `
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
            g.type_string = "mm"
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
            console.pk_log(`magic value at u32(4)unexpected | expected magic values:67174573,67174574,67174575,134348960<br>
                 u32(4) value is ${u32(4)}`)
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
            console.pk_log(g.version)
            // console.log(g.version)
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
        g.type_string = 'not_binary'
        console.pk_log(`<a style="color:red;">wrong file type!</a>`)

        buffer = null
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
    var key = 'none'
    // var focus = 0;

    fileEditor.addEventListener('change', function(event) {
        const target = event.target;
        let keys_array = Object.keys(PK_path.obj)
        let key_id = keys_array[target.dataset.key_id]
        if (typeof PK_path.obj[key_id] === "object") {
            let key_path = PK_path.obj[key_id]
            let array_inner_keys = Object.keys(key_path)

            if (array_inner_keys.length === 1) {
                key_path[array_inner_keys[0]] = target.value
            } else {
                console.pk_log(`array_inner_keys is ${array_inner_keys}`)
            }

        }else{
        PK_path.obj[key_id] = target.value
        }
        console.pk_log(`changed ${key_id} to ${target.value}`)
    });

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

            if (key !== "none") {
                PK_path.obj = get_full_path(PK_path.array_path)
                let path_length = PK_path.obj.length - 1

                if (key === "Control") {
                    // check if first entry exists
                    PK_path.array_path.push('0')
                } else if (key === "Shift") {
                    PK_path.array_path.push(path_length)
                } else if (key === "Alt") {
                    let n = Math.random() * path_length
                    n = Math.round(n)
                    PK_path.array_path.push(n)
                }

            }

            array_view_get_type(PK_path.array_path)

            // array_view_array()

        } else if (classname.includes("move_button")) {
            if (target.innerText = "Up ▲") {
                console.pk_log('up not added')
                // move up
            } else {
                console.pk_log('down not added')
                // move down
            }
        } else if (classname.includes("copy_button")) {
            console.pk_log('copy_button not added')
            // console.log('?')
        } else if (classname.includes("x_button")) {
            console.pk_log('x_button not added')
            // console.log('?')
        } else if (classname.includes("plus_button")) {
            console.pk_log('plus_button not added')
            // need to diff between single and multi
            // go up 1 to get sec id
            // go to sepecific sorce and add
            // readd arrayview so add button removes if single
        } else if (classname.includes("download_buffer")) {
            let keys_array = Object.keys(PK_path.obj)
            let values_array = Object.values(PK_path.obj);
            let key = keys_array[target.dataset.key_id]
            let value = values_array[target.dataset.key_id]

            let buffer = convert_base64_arraybuffer(value)
            let string_filename = `PK_${g.type_string}_${get_section_name()}_${key}.dat`

            download_file(buffer, string_filename)
        } else if (classname.includes("upload_buffer")) {
            import_single_file(check_if_buffer, "buffer", target.dataset.key_id)

        } else if (id.includes("json_download_button")) {
            let json_string = JSON.stringify(PK_path.obj)
            let string_filename = `PK_${g.type_string}_${get_section_name()}.json`
            download_file(json_string, string_filename)
        } else if (id.includes("json_upload_button")) {
            import_single_file(check_if_json, "text")
        }

    });

    fileEditor.addEventListener('mouseover', function(event) {
        const target = event.target;
        let classname = target.className

        // if (fileEditor.contains(document.target)) {
        //         console.pk_log('file editor contains true')
        // }else{
        //         console.pk_log('file editor contains false')
        // }

        if (classname.includes("obj_to_array")) {
            if (key === "Control") {
                target.value = "-> jump to first array"
            } else if (key === "Shift") {
                target.value = "-> jump to last array"
            } else if (key === "Alt") {
                target.value = "-> jump to random array"
            }

        }

    })

    fileEditor.addEventListener('mouseout', function(event) {
        const target = event.target;
        let classname = target.className

        if (classname.includes("obj_to_array")) {
            target.value = "Array"
        }
    })

    document.addEventListener("keydown", function(event) {
        key = event.key
    })
    document.addEventListener("keyup", function(event) {
        key = 'none'
    })

    fileview.addEventListener('click', function(event) {
        const target = event.target;
        let classname = target.className
        let id = target.id

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

        } else if (classname.includes("history_button")) {
            let key_i = target.dataset.x_id
            let index = Number(target.dataset.index)
            let go_to_array = PK_path.history[index]

            array_view_get_type(go_to_array)

            // temp_key_i.parentElement.parentElement.children
            // let str_array = array_path_local[key_i]

            // PK_path.array_path.push(key_i)

        } else if (id.includes("tree_view")) {
            if (PK_path.view === "tree") {// already checked
            } else {
                console.pk_log('tree_view selected')
                PK_path.view = "tree"
                update_pk_tree_list()
            }
        } else if (id.includes("history_view")) {
            if (PK_path.view === "history") {// already checked
            } else {
                console.pk_log('history view selected')
                PK_path.view = "history"
                update_pk_history_list()
            }

            // console.pk_log('history not added')
        } else if (id.includes("path_view")) {
            if (PK_path.view === "path") {// already checked
            } else {
                console.pk_log('path view selected')
                PK_path.view = "path"
                update_pk_path_list()
            }
        }
    });

    // fileview.addEventListener('mouseover', function(event) {
    //     if (focus === 1) {
    //     console.pk_log('fileview focused')
    //     fileview.focus()
    //     focus = 0
    //     }
    // })

}

function array_view_get_type(array) {
    format_pk_history_array(array)
    PK_path.obj = get_full_path(array)

    if (Array.isArray(PK_path.obj)) {
        array_view_array(array)
    } else if (typeof PK_path.obj === "string") {
        array_view_string(array)
    } else {
        array_view_object(array)
    }

}

function array_view_string() {

    PK_path.obj = get_full_path(PK_path.array_path)
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">

   <div style='height:15%'>
        <span style="display: flex;width: 100%;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;height: 20px;"><a>string</a><div style="display: flex;">
        <button title="download json" id="json_download_button">⤓</button>
        <button title="upload json" id="json_upload_button">⤒</button>
        </div>
        </span>
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr id="0">
                  <td class='no_border' data-x_id="0" noselect'>string
                  </td>
                   <td class='no_border noselect arrow_buttons'>
                       ${get_input_type(PK_path.obj, 0)}
                 </td>
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

function array_view_object() {

    PK_path.obj = get_full_path(PK_path.array_path)
    if (PK_path.obj === undefined) {
        console.pk_log('PK_path.obj is undefined')
        return
    }
    let sec_name = get_section_name()

    let values_array = Object.values(PK_path.obj);
    let keys_array = Object.keys(PK_path.obj)

    let html_list = ""
    let section_id = ""
    for (let i = 0; i < keys_array.length; i++) {
        let input_type = get_input_type(values_array[i], i, keys_array[i])

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

    check_section(sec_name)
    // document.getElementById('game').value = TXFA.game
    // document.getElementById("name").addEventListener('change', edit_change_name);
}

function check_section(string_name) {
    let import_function = window[("im_" + string_name)]
    let add_function = window[("add_" + string_name)]
    let info_function = window[("info_" + string_name)]
    let export_function = window[("ex_" + string_name)]

    if (typeof import_function === "function") {} else {
        console.pk_log(`<a style="color:red;">${string_name} import_function null</a>`)
    }
    if (typeof add_function === "function") {} else {
        console.pk_log(`<a style="color:red;">${string_name} add_function null</a>`)
    }
    if (typeof info_function === "function") {} else {
        console.pk_log(`<a style="color:red;">${string_name} info_function null</a>`)
    }
    if (typeof export_function === "function") {} else {
        console.pk_log(`<a style="color:red;">${string_name} export_function null</a>`)
    }
}

function get_full_path(array_path) {

    let path_array = array_path

    let temp_array = x_global

    for (let i = 0; i < path_array.length; i++) {
        let temp_path = temp_array[path_array[i]]
        // temp_array = Object.values(temp_path);
        temp_array = temp_path

    }

    if (temp_array === undefined) {
        console.pk_log("temp_array is undefined, moving to x_global[0]")
        temp_array = x_global[0]
        PK_path.array_path = ["0"]
    }

    if (array_path.length === 0) {
        temp_array = x_global[0]
        PK_path.array_path = ["0"]
    }

    get_update_pk_list_type()
    // update_pk_path_list()
    return temp_array
}

function update_x_array_from_json(obj) {
    let temp_array = x_global
    let path = PK_path.array_path
    let last_path = path[path.length - 1]
    let temp_path;

    for (let i = 0; i < path.length - 1; i++) {
        temp_path = temp_array[path[i]]
        // temp_array = Object.values(temp_path);
        temp_array = temp_path

    }

    temp_array[last_path] = obj

}

function get_update_pk_list_type() {
    switch (PK_path.view) {
    case "tree":
        update_pk_tree_list()
        break
    case "history":
        update_pk_history_list()
        break
    case "path":
        update_pk_path_list()
        break
    default:
        console.pk_log(`unknown view ${PK_path.view}`)
    }
}

function format_pk_history_array(array) {
    // console.pk_log(`history ${array}`)
    PK_path.history.push(array)

    // reduce duplicate arrays
    PK_path.history = Array.from(new Set(PK_path.history.map(JSON.stringify)), JSON.parse)

    while (PK_path.history.length > 20) {
        PK_path.history.pop(-1)
    }

}

function update_pk_path_list() {
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
         <table style='width:100%;' >
            <tbody>
            ${html_list}
            </tbody>
        </table>
`

    inner_file_viewer.innerHTML = html

}

function update_pk_history_list() {
    let html_list = ''

    for (let i = 0; i < PK_path.history.length; i++) {
        // let input_type = get_input_type(values_array[i])

        // section_id = window[("get_" + g.type_string + "_sec_id")](str_path[i].sec_id)
        html_list += `
               <tr id="${i}">
                  <td class='no_border history_button noselect' data-x_id="${i}" data-index="${i}">${PK_path.history[i].toString()}
                  </td>
               </tr>
`
    }

    let html = `
         <table style='width:100%;' >
            <tbody>
            ${html_list}
            </tbody>
        </table>
`

    inner_file_viewer.innerHTML = html

}

function update_pk_tree_list() {
    inner_file_viewer.innerHTML = "wip"

    // probably need to have these saved somewhere
    // 0 = closed
    // 1 = open

}

function get_input_type(value, i=-1, key="null") {
    let input_type = ''
    if (key === "id" || key === "sec_id") {
        input_type = `<input class="top_settings" data-key_id="${i}" style='width:100%;' type='text' value="${value}">`
    } else if (Array.isArray(value)) {
        input_type = `<input data-key_id="${i}" class="obj_to_array" style='width:100%;' type='button' value="Array ${value.length}">`
    } else if (value === true || value === false) {
        input_type = `<input data-key_id="${i}" style='width:100%;' type='checkbox' value="${value}">`
    } else if (value === null) {
        input_type = `<input data-key_id="${i}" style='width:100%;' type='text' value="${value}">`
    } else if (typeof value === 'string') {
        input_type = `<input data-key_id="${i}" style='width:100%;' type='text' value="${value}">`
    } else if (typeof value === "number") {
        input_type = `<input data-key_id="${i}" style='width:100%;' type='text' value="${value}">`
    } else if ("string"in value) {
        input_type = `<input data-key_id="${i}" style='width:100%;' type='text' value="${value.string}">`
    } else if ("buffer"in value) {
        input_type = `
        <span style="display: inline-flex;width: 100%;justify-content: space-between;">
        <a> buffer (${convert_base64_arraybuffer(value).byteLength}) bytes </a>
        <span>
            <button data-key_id="${i}" class="download_buffer" title="download buffer">⤓</button>
            <button data-key_id="${i}" class="upload_buffer" title="upload buffer">⤒</button>
        </span>
        </span>
`
    } else {
        input_type = `<input data-key_id="${i}" style='width:100%;' type='text' value="${value}">`
    }

    return input_type

}

function display_path(str_path) {
    return `<a id="path">PATH: ${str_path.toString().replaceAll(',', ' -> ')}</a>`
}

function array_view_path(str_path) {
    console.pk_log(str_path)
    // console.log(str_path)
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
    if (PK_path.obj === undefined) {
        console.pk_log('PK_path.obj is undefined')
        return ''
    }
    if (Array.isArray(PK_path.obj)) {
        // console.pk_log('PK_path.obj is array')
        // go up 1
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

        if (str_name === null) {
            console.pk_log(`<a style="color:red;">str_name is null</a>`)
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

    let amt_files = x_global[0].x_files.length

    for (let i = 0; i < amt_files; i++) {
        let fileName = x_global[0].x_files[i].name
        let temp_buffer = dynamic_save(x_global[0].x_files[i])

        temp_buffer.then( (value) => {
            if (value === null) {
                console.pk_log("buffer is null")
                return
            } else if (value.byteLength === 0) {
                console.pk_log("buffer size is 0")
                return
            } else {
                download_file(value, fileName)
            }
        }
        )
    }

}

async function dynamic_save(obj_x) {

    globalThis.buffer_array = []
    globalThis.dynamic_buffer = new ArrayBuffer(268435455)

    // only 1st x file for now
    window[("ex_" + g.type_string + "_x")](0, obj_x.format[0])

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

    if (1000000000 < offset) {
        alert(`offset is very large, ${offset}`)
    }

    let file_is_same = true
    file_is_same = await generate_sha1(final_array)

    console.pk_log(file_is_same)
    console.pk_log(`file_is_same: ${file_is_same}`)
    if (file_is_same === true) {
        console.pk_log("same")
        return null
    } else {
        return final_array
    }

    delete globalThis.buffer_array
    delete globalThis.dynamic_buffer

}

function compare_hash_to_sha1(hash) {
    const sha1_obj = {
        name: ["AIRPORT.XPS", "BERMUDA.XPS", "BOOTUP.XPS", "CANAL.XPS", "CARRIER.XPS", "CARRIERS.XPS", "COLI2.XPS", "COLISEUM.XPS", "DOWNTOWN.XPS", "ENDGAME.XPS", "JUNGLE.XPS", "LOADING.XPS", "MAINMENU.XPS", "PARKHILL.XPS", "SSTATION.XPS", "TEMPLE.XPS", "VEHICLES.XPS", "BAT1_L1.XPS", "BAT2_L9.XPS", "BAT3_L6.XPS", "BAT4_L1.XPS", "BAT5_L1.XPS", "BAT6_L6.XPS", "BAT7_L1.XPS", "BAT8_L1.XPS", "CH1_L2.XPS", "CH1_L3.XPS", "CH1_L4.XPS", "CH1_L5.XPS", "CH1_L6.XPS", "CH1_L7.XPS", "CH1_L8.XPS", "CH2_L1.XPS", "CH2_L2.XPS", "CH2_L3.XPS", "CH2_L4.XPS", "CH5_L1.XPS", "CH5_L2.XPS", "CH5_L3.XPS", "CH5_L4.XPS", "CH5_L5.XPS", "HWB_M01.XPS", "HWB_M02.XPS", "HWB_M03.XPS", "HWB_M04.XPS", "HWB_M05.XPS", "HWB_M06.XPS", "HWB_M07.XPS", "HWB_M08.XPS", "HWB_M09.XPS", "HWB_M10.XPS", "HWB_M11.XPS", "HWB_M12.XPS", "HWB_M13.XPS", "HWB_M14.XPS", "HW_BRIEF.XPS", "HW_CARS.XPS", "HW_IPACK.XPS", "HW_ITEMS.XPS", "HW_IT_PC.XPS", "HW_MUSAK.XPS", "HW_MUSIC.XPS", "HW_SHARE.XPS", "HW_SSEQ.XPS", "MCP.XPS", "RACE1L1.XPS", "RACE1L2.XPS", "RACE2L1.XPS", "RACE2L2.XPS", "RACE3L1.XPS", "RACE3L2.XPS", "RACE4L1.XPS", "RACE4L2.XPS", "RACE5L1.XPS", "RACE5L2.XPS", "WORLD1L1.XPS", "WORLD1L2.XPS", "WORLD1L3.XPS", "WORLD1.XPS", "WORLD2L1.XPS", "WORLD2L2.XPS", "WORLD2L3.XPS", "WORLD2.XPS", "WORLD3L1.XPS", "WORLD3L2.XPS", "WORLD3L3.XPS", "WORLD3.XPS", "WORLD4L1.XPS", "WORLD4L2.XPS", "WORLD4L3.XPS", "WORLD4.XPS", "WORLD5L1.XPS", "WORLD5L2.XPS", "WORLD5.XPS", "bat1_l1.xgc", "bat2_l9.xgc", "bat3_l6.xgc", "bat4_l1.xgc", "bat5_l1.xgc", "bat6_l6.xgc", "bat7_l1.xgc", "bat8_l1.xgc", "ch1_l2.xgc", "ch1_l3.xgc", "ch1_l4.xgc", "ch1_l5.xgc", "ch1_l6.xgc", "ch1_l7.xgc", "ch1_l8.xgc", "ch2_l1.xgc", "ch2_l2.xgc", "ch2_l3.xgc", "ch2_l4.xgc", "ch3_l1.xgc", "ch3_l2.xgc", "ch5_l1.xgc", "ch5_l2.xgc", "ch5_l3.xgc", "ch5_l4.xgc", "ch5_l5.xgc", "HWB_M01.xgc", "HWB_M02.xgc", "HWB_M03.xgc", "HWB_M04.xgc", "HWB_M05.xgc", "HWB_M06.xgc", "HWB_M07.xgc", "HWB_M08.xgc", "HWB_M09.xgc", "HWB_M10.xgc", "HWB_M11.xgc", "HWB_M12.xgc", "HWB_M13.xgc", "HWB_M14.xgc", "HW_brief.xgc", "HW_Cars.xgc", "HW_IPack.xgc", "HW_Items.xgc", "HW_music.xgc", "HW_share.xgc", "mcp.xgc", "race1l1.xgc", "race1l2.xgc", "race2l1.xgc", "race2l2.xgc", "race3l1.xgc", "race3l2.xgc", "race4l1.xgc", "race4l2.xgc", "race5l1.xgc", "race5l2.xgc", "race6l1.xgc", "race6l2.xgc", "w1r1_geo.xgc", "w1r1_tex.xgc", "w1_col.xgc", "w1_geo.xgc", "w1_tex.xgc", "w2r1_geo.xgc", "w2r1_tex.xgc", "w2r2_geo.xgc", "w2r2_tex.xgc", "w2_col.xgc", "w2_geo.xgc", "w2_tex.xgc", "w3r1_geo.xgc", "w3r1_tex.xgc", "w3_col.xgc", "w3_geo.xgc", "w3_tex.xgc", "w4r1_geo.xgc", "w4r1_tex.xgc", "w4_col.xgc", "w4_geo.xgc", "w4_tex.xgc", "w5r1_geo.xgc", "w5r1_tex.xgc", "w5_col.xgc", "w5_geo.xgc", "w5_tex.xgc", "world1.xgc", "world1l1.xgc", "world1l2.xgc", "world1l3.xgc", "world2.xgc", "world2l1.xgc", "world2l2.xgc", "world2l3.xgc", "world3.xgc", "world3l1.xgc", "world3l2.xgc", "world3l3.xgc", "world4.xgc", "world4l1.xgc", "world4l2.xgc", "world4l3.xgc", "world5.xgc", "world5l1.xgc", "world5l2.xgc", "bat1_l1.xps", "bat2_l9.xps", "bat3_l6.xps", "bat4_l1.xps", "bat5_l1.xps", "bat6_l6.xps", "bat7_l1.xps", "bat8_l1.xps", "ch1_l2.xps", "ch1_l3.xps", "ch1_l4.xps", "ch1_l5.xps", "ch1_l6.xps", "ch1_l7.xps", "ch1_l8.xps", "ch2_l1.xps", "ch2_l2.xps", "ch2_l3.xps", "ch2_l4.xps", "ch3_l1.xps", "ch3_l2.xps", "ch5_l1.xps", "ch5_l2.xps", "ch5_l3.xps", "ch5_l4.xps", "ch5_l5.xps", "HWB_M01.xps", "HWB_M02.xps", "HWB_M03.xps", "HWB_M04.xps", "HWB_M05.xps", "HWB_M06.xps", "HWB_M07.xps", "HWB_M08.xps", "HWB_M09.xps", "HWB_M10.xps", "HWB_M11.xps", "HWB_M12.xps", "HWB_M13.xps", "HWB_M14.xps", "hw_brief.xps", "HW_IPack.xps", "HW_Items.xps", "HW_music.xps", "HW_share.xps", "mcp.xps", "race1l1.xps", "race1l2.xps", "race2l1.xps", "race2l2.xps", "race3l1.xps", "race3l2.xps", "race4l1.xps", "race4l2.xps", "race5l1.xps", "race5l2.xps", "race6l1.xps", "race6l2.xps", "w1r1_geo.xps", "w1r1_tex.xps", "w1_col.xps", "w1_geo.xps", "w1_tex.xps", "w2r1_geo.xps", "w2r1_tex.xps", "w2r2_geo.xps", "w2r2_tex.xps", "w2_col.xps", "w2_geo.xps", "w2_tex.xps", "w3r1_geo.xps", "w3r1_tex.xps", "w3_col.xps", "w3_geo.xps", "w3_tex.xps", "w4r1_geo.xps", "w4r1_tex.xps", "w4_col.xps", "w4_geo.xps", "w4_tex.xps", "w5r1_geo.xps", "w5r1_tex.xps", "w5_col.xps", "w5_geo.xps", "w5_tex.xps", "world1.xps", "world1l1.xps", "world1l2.xps", "world1l3.xps", "world2.xps", "world2l1.xps", "world2l2.xps", "world2l3.xps", "world3.xps", "world3l1.xps", "world3l2.xps", "world3l3.xps", "world4.xps", "world4l1.xps", "world4l2.xps", "world4l3.xps", "world5.xps", "world5l1.xps", "world5l2.xps", "ZZ_HW_Cars.xps", "bat1_l1.xpc", "bat2_l9.xpc", "bat3_l6.xpc", "bat4_l1.xpc", "bat5_l1.xpc", "bat6_l6.xpc", "bat7_l1.xpc", "bat8_l1.xpc", "ch1_l2.xpc", "ch1_l3.xpc", "ch1_l4.xpc", "ch1_l5.xpc", "ch1_l6.xpc", "ch1_l7.xpc", "ch1_l8.xpc", "ch2_l1.xpc", "ch2_l2.xpc", "ch2_l3.xpc", "ch2_l4.xpc", "ch3_l1.xpc", "ch3_l2.xpc", "ch5_l1.xpc", "ch5_l2.xpc", "ch5_l3.xpc", "ch5_l4.xpc", "ch5_l5.xpc", "HWB_M01.xpc", "HWB_M02.xpc", "HWB_M03.xpc", "HWB_M04.xpc", "HWB_M05.xpc", "HWB_M06.xpc", "HWB_M07.xpc", "HWB_M08.xpc", "HWB_M09.xpc", "HWB_M10.xpc", "HWB_M11.xpc", "HWB_M12.xpc", "HWB_M13.xpc", "HWB_M14.xpc", "HW_brief.xpc", "HW_Cars.xpc", "HW_IPack.xpc", "HW_Items.xpc", "HW_music.xpc", "HW_share.xpc", "mcp.xpc", "race1l2.xpc", "race2l2.xpc", "race3l2.xpc", "race4l2.xpc", "race5l2.xpc", "race6l2.xpc", "w1r1_geo.xpc", "w1r1_tex.xpc", "w1_col.xpc", "w1_geo.xpc", "w1_tex.xpc", "w2r1_geo.xpc", "w2r1_tex.xpc", "w2r2_geo.xpc", "w2r2_tex.xpc", "w2_col.xpc", "w2_geo.xpc", "w2_tex.xpc", "w3r1_geo.xpc", "w3r1_tex.xpc", "w3_col.xpc", "w3_geo.xpc", "w3_tex.xpc", "w4r1_geo.xpc", "w4r1_tex.xpc", "w4_col.xpc", "w4_geo.xpc", "w4_tex.xpc", "w5r1_geo.xpc", "w5r1_tex.xpc", "w5_col.xpc", "w5_geo.xpc", "w5_tex.xpc", "world1.xpc", "world1l1.xpc", "world1l2.xpc", "world1l3.xpc", "world2.xpc", "world2l1.xpc", "world2l2.xpc", "world2l3.xpc", "world3.xpc", "world3l1.xpc", "world3l2.xpc", "world3l3.xpc", "world4.xpc", "world4l1.xpc", "world4l2.xpc", "world4l3.xpc", "world5.xpc", "world5l1.xpc", "world5l2.xpc", "AI_01.xpc", "AI_02.xpc", "AI_03.xpc", "AI_04.xpc", "AI_05.xpc", "AI_06.xpc", "AI_AM.xpc", "AUTOSAVE.xpc", "CBN.xpc", "CBN_00.xpc", "CBN_01.xpc", "CBN_02.xpc", "CBN_03.xpc", "CBN_MS.xpc", "CREDITS.xpc", "FF_01.xpc", "FF_02.xpc", "FL_01.xpc", "FL_02.xpc", "FL_03.xpc", "FRNT_END.xpc", "mcp.xpc", "MM_01.xpc", "MM_02.xpc", "MM_03.xpc", "MM_04.xpc", "MM_05.xpc", "MP_01.xpc", "MP_02.xpc", "MP_03.xpc", "MP_04.xpc", "MP_05.xpc", "PLANE.xpc", "VG_01.xpc", "VG_02.xpc", "VG_03.xpc", "WOM_01.xpc", "WOM_02.xpc", "WOM_03.xpc", "AI_01.XPS", "AI_02.XPS", "AI_03.XPS", "AI_04.XPS", "AI_05.XPS", "AI_06.XPS", "AI_AM.XPS", "AI_PSP.XPS", "AUTOSAVE.XPS", "CBN.XPS", "CBN_00.XPS", "CBN_01.XPS", "CBN_02.XPS", "CBN_03.XPS", "CBN_MS.XPS", "CREDITS.XPS", "FF_01.XPS", "FF_02.XPS", "FL_01.XPS", "FL_02.XPS", "FL_03.XPS", "FL_PSP.XPS", "FRNT_END.XPS", "MCP.XPS", "MM_01.XPS", "MM_02.XPS", "MM_03.XPS", "MM_04.XPS", "MM_05.XPS", "MM_PSP.XPS", "MP_01.XPS", "MP_02.XPS", "MP_03.XPS", "MP_04.XPS", "MP_05.XPS", "PLANE.XPS", "VG_01.XPS", "VG_02.XPS", "VG_03.XPS", "VG_PSP.XPS", "WOM_01.XPS", "WOM_02.XPS", "WOM_03.XPS", "WOM_PSP.XPS", "AI_01.xpp", "AI_02.xpp", "AI_03.xpp", "AI_04.xpp", "AI_05.xpp", "AI_06.xpp", "AI_AM.xpp", "AI_PSP.xpp", "AUTOSAVE.xpp", "CBN.xpp", "CBN_00.xpp", "CBN_01.xpp", "CBN_02.xpp", "CBN_03.xpp", "CBN_MS.xpp", "CREDITS.xpp", "FF_01.xpp", "FF_02.xpp", "FL_01.xpp", "FL_02.xpp", "FL_03.xpp", "FL_PSP.xpp", "FRNT_END.xpp", "mcp.xpp", "MM_01.xpp", "MM_02.xpp", "MM_03.xpp", "MM_04.xpp", "MM_05.xpp", "MM_PSP.xpp", "MP_01.xpp", "MP_02.xpp", "MP_03.xpp", "MP_04.xpp", "MP_05.xpp", "PLANE.xpp", "VG_01.xpp", "VG_02.xpp", "VG_03.xpp", "VG_PSP.xpp", "WOM_01.xpp", "WOM_02.xpp", "WOM_03.xpp", "WOM_PSP.xpp", "CCa.xdx", "FT.xdx", "HM.xdx", "Intrface.xdx", "Kart.xdx", "loading.xdx", "mcp.xdx", "Music.xdx", "CCA.XPS", "FT.XPS", "HM.XPS", "INTRFACE.XPS", "KART.XPS", "LOADING.XPS", "MCP.XPS", "Autosave.xgc", "Award.xgc", "CCa.xgc", "CC_L1.xgc", "CG_L1.xgc", "FH_L1.xgc", "FTa.xgc", "FT_L1.xgc", "GMa.xgc", "GM_L1.xgc", "gShared.xgc", "Intrface.xgc", "JS_L1.xgc", "Kart.xgc", "KK_L1.xgc", "LLa.xgc", "LL_L1.xgc", "loading.xgc", "mcp.xgc", "MMa.xgc", "MM_L1.xgc", "PC_L1.xgc", "RH_L1.xgc", "RM_L1.xgc", "SCa.xgc", "SC_L1.xgc", "TF_L1.xgc", "WW_L1.xgc", "Autosave.xpc", "Award.xpc", "CCa.xpc", "CC_l1.xpc", "CG_l1.xpc", "FH_l1.xpc", "FTa.xpc", "FT_l1.xpc", "GMa.xpc", "GM_l1.xpc", "gShared.xpc", "Intrface.xpc", "JS_L1.xpc", "Kart.xpc", "KK_l1.xpc", "LLa.xpc", "LL_l1.xpc", "loading.xpc", "mcp.xpc", "MMa.xpc", "MM_l1.xpc", "PC_l1.xpc", "RH_l1.xpc", "RM_l1.xpc", "SCa.xpc", "SC_l1.xpc", "TF_l1.xpc", "WW_l1.xpc", "AUTOSAVE.XPS", "AWARD.XPS", "CCA.XPS", "CC_L1.XPS", "CG_L1.XPS", "FH_L1.XPS", "FTA.XPS", "FT_L1.XPS", "GMA.XPS", "GM_L1.XPS", "GSHARED.XPS", "INTRFACE.XPS", "JS_L1.XPS", "KART.XPS", "KK_L1.XPS", "LLA.XPS", "LL_L1.XPS", "LOADING.XPS", "MCP.XPS", "MMA.XPS", "MM_L1.XPS", "PC_L1.XPS", "RH_L1.XPS", "RM_L1.XPS", "SCA.XPS", "SC_L1.XPS", "TF_L1.XPS", "WW_L1.XPS", "Autosave.xpp", "Award.xpp", "CCa.xpp", "CC_L1.xpp", "CC_L2.xpp", "CG_L1.xpp", "CG_L2.xpp", "FH_L1.xpp", "FH_L2.xpp", "FTa.xpp", "FT_L1.xpp", "FT_L2.xpp", "GMa.xpp", "GM_L1.xpp", "GM_L2.xpp", "gShared.xpp", "Intrface.xpp", "JS_L1.xpp", "JS_L2.xpp", "Kart.xpp", "KK_L1.xpp", "KK_L2.xpp", "LLa.xpp", "LL_L1.xpp", "LL_L2.xpp", "loading.xpp", "mcp.xpp", "MMa.xpp", "MM_L1.xpp", "MM_L2.xpp", "PC_L1.xpp", "PC_L2.xpp", "RH_L1.xpp", "RH_L2.xpp", "RM_L1.xpp", "RM_L2.xpp", "SCa.xpp", "SC_L1.xpp", "SC_L2.xpp", "SS_L1.xpp", "SS_L2.xpp", "TF_L1.xpp", "TF_L2.xpp", "WW_L1.xpp", "WW_L2.xpp", "dtc.xwi", "intrface.xwi", "mcp.xwi", "2P-Arcade.xwi", "AR_1.xwi", "AR_2.xwi", "AR_3.xwi", "BB_Dragonflies.xwi", "BB_Hornets.xwi", "BB_Wasps.xwi", "C0_Hive.xwi", "C11.xwi", "C12.xwi", "C1_P1.xwi", "C1_P2.xwi", "C1_P3.xwi", "C2_P1.xwi", "C2_P2.xwi", "C3.xwi", "C4_P1.xwi", "C4_P2.xwi", "C5.xwi", "C6_P2.xwi", "C7_P1.xwi", "C7_P2.xwi", "C9.xwi", "Hive-Arcade.xwi", "Hive-Delivery.xwi", "Hive-Museum.xwi", "Hive-Race08.xwi", "Hive-RaceOval.xwi", "Hive-RaceRace.xwi", "Hive-Taxi.xwi", "Honex-Collector.xwi", "Honex-Drafter.xwi", "Honex-Plinko.xwi", "intrface_BETA.xwi", "Intro-Plinko.xwi", "IT_1.xwi", "IT_2.xwi", "IT_3.xwi", "mcp.xwi", "QD1.xwi", "QD2.xwi", "QD3.xwi", "mcp.xdx9", "Autosave.xdx9", "DesertL1.xdx9", "DesertL2.xdx9", "DesertL3.xdx9", "DesertL4.xdx9", "IndustrialL1.xdx9", "IndustrialL2.xdx9", "IndustrialL3.xdx9", "Intrface.xdx9", "JungleL1.xdx9", "JungleL2.xdx9", "JungleL3.xdx9", "Kart.xdx9", "mcp.xdx9", "MountainL1.xdx9", "MountainL2.xdx9", "MountainL3.xdx9", "MT_int.xdx9", "Shared.xdx9", "WinterL1.xdx9", "WinterL2.xdx9", "WinterL3.xdx9", "Autosave.xwi", "DesertL1.xwi", "DesertL2.xwi", "DesertL3.xwi", "DesertL4.xwi", "IndustrialL1.xwi", "IndustrialL2.xwi", "IndustrialL3.xwi", "Intrface.xwi", "JungleL1.xwi", "JungleL2.xwi", "JungleL3.xwi", "Kart.xwi", "mcp.xwi", "MountainL1.xwi", "MountainL2.xwi", "MountainL3.xwi", "MT_int.xwi", "Shared.xwi", "WinterL1.xwi", "WinterL2.xwi", "WinterL3.xwi"],
        sha1: ["8c4558a92b6fe91a059d51fbde436165e0ab0747", "b899a212cb380bfbb750c9382069b6277f7c72e7", "d81f3bf0e1e07d88b5eb2c235bfe8ffbd85fcd1f", "54af752d7262e9dd9b4a2ac9acf3348325fef4be", "f8c00e8839a5366393ea734d4f742972aaf24750", "a72f17ca287dbb14dd7330b7dd4ebc6df0146328", "352422ee936ada5af6e1cbb5740b46d56abaae00", "7bf55122bc9e18493709f18852abb6775e65bee8", "22f3d93c27d4c3c7a47a537207467a04ea427abb", "dde4436e9e3a4254276a56f8b04989e4ff7b788c", "21ca99eef82fcbf5e1d63fe855da2cf021f75427", "900cafe6ad39ccf25b37058aaeb0c855f71611c2", "5af4ec5a6e85d9f08acd976dfea1fbe057400076", "438f3c4ed5b6d2a817a5c80358511af4cc0f341e", "79e93eab50e4abdd09c7470321b0cd62590022ab", "f26400bfa9d1ae04ad796bc93357ad3dab8083da", "f923116f35fb3b337542df3dc7eb434cc8805421", "467a749abf382803985dd625cac248bcff5d54dd", "a895e8e1a25871f7c5412923f4a1875334abce0e", "5dd7be12ed73fbaebffacc210e23a7897b5183a7", "8e50fd27200cafe32a4ea11d19404e9be48a9b77", "4db3eb4b224de3a0118c1a4d37a680627f6abbbe", "a103960602301479f58ac6395fe4f6188a9e0456", "26ab2602fca3dbff4bf17217b0b8bb8b1a88c3e6", "63d935d7f9eadfb85747f6866d215a2defb5e92a", "e8d99f8dd7de7cc2e13b2a2184f596d8f6e21bb2", "052bb181faba9cc2d5a105789e968ec2ba9b0bc0", "a7f5aae81ac36e395540bf639a25d8e25919c3e7", "c2875051020413f7b064ac074e10ce5c1efe4c7c", "c9e7083be9a304cb72f8be8d4f0f1a2ad9adbc74", "b68ff5f12e9737a32406f1b2d1a5af07b36ae41c", "2852ce8c0c1ec4a210c65e7cf5052b5dc6e082e9", "049357af543eecb7372cccd2f96331404fe7642e", "f9c369d8723177f43ab3218a21ca9092ee3269a4", "83ac8029ecab22be619533682623184ab1043fad", "e112c6914a800ab0854b3937181f881dfc0cefbc", "1442fc8f21e0024ce6b6590d5d54dfc86e42da5a", "fa34b8cf8ff20b8a274776c580c62012e8c9bfa2", "ae27d59e2e6db822098cd54551bffadbe34c981c", "9c470aa5199cfc719316b4abfec3c866a067ae35", "5257b1b102bebd6e07a148bb02ef555f43b7e1a1", "e789300eb16d66d85433c24628546ff70248f506", "68fdc2b194b402c90a20ad9348d124017295ba7b", "9409c5155e9c31acbffe71d88b579aa7a5e5c07e", "67c7c5058f5ff9ecc0103fd02e4fff334e2db0f1", "59b9c19f4aaac611d7888409a2fb0be586b3e28d", "900b4d4a04d96b06e421cabc06b0de8c3801be2e", "243c2558c2a49d7a308c02f6919530041a256090", "d5b8e3c576d2dda1392c7e2ac2f4032178214351", "3828431c30f651bc87de435ec42647495f3e50fb", "05c699a51fa049bfb6412b155598d22a91d276f5", "527ce4794d2c332d5d45cc4a78150787d303c560", "5b215252758fa692f29e034d88815a014ab96037", "e6b306a822d6bc0236f40988a3bef2b69451b35e", "e44db19fc8e728d26bd8b64238569b4c6b0ac071", "eb587ee129cf1e1be8b43066578332f4482f48e5", "fc887356c2a353eaf041865a4143bc759f401727", "763787d3f56c6f2cdf735a3dea8948ce79678bef", "b743b18c5f8d21a9710375f807c0ec8d620d62d4", "36b0951172ad564f0483e5e5c0b862e14a6ce989", "7039d29ad93260b592d2771548c8cd70cd12d6fb", "03d38b642f151f0c36f249db6adf3f9554b96ec0", "bf6564262b3fd7a970f8ad4084be1be3d547baa1", "504c8b27af6cd1887c4ae050ba5be487bc2a1301", "f0656260ed5e3726b1a001e2fb83b3ab85342aab", "5ff2d58985a007b98429da915e3023eb830f84b0", "6ea987dec596185a3d2f0a03e554f191d1447037", "199b95c5e202a18ff9f226ed019aea442fd9dbe9", "2ac99968071e7b8579e0f9d26d01788792be2f5c", "1fd96b641cf1928565b06d5c84b0bbedc5b775fd", "42fdb67ce54ae8b35f7111fb4a837cbcff61dd89", "f0c5b91bf430739fe077f54f352e6fb96930c42f", "d463e9a2bc8b7da4d9873a78da26c2f8e224c9f5", "b19d19a0b517021dcb354a12a6263be525f1bdf2", "06de708df7a752de935f3fa6eb36b9e9d42918a8", "f49a8b4c09e27f3929f3cc2e09327d3add3fea09", "0258daee6f0a4baaaa7bcd39f8a2a2b975e5f3b0", "8e0d83ce3cf754580c38e59917d63671d5122ab3", "829101ff75cf63fcaadd8e3d9fb9dd682aa657ab", "3194aba37c7d816c180b9414b1639cca722f6ca1", "67e5960d4264faccc70837b995090983f13d7a47", "122a9a938670fc13bd12255e93d9ddfb4732ccfb", "11d72705e1e41336e8ae70cd64350fdd27c8d60a", "ba793ed460303056affa431f4e9944966ef760a1", "54a7954a3ba037bca6aa9cf2bd6a4455568850ef", "831f7462452d35d8ecf9c3048f6c7938a8339746", "11ae0a40572711fc162224ea2f8c1cb18affd7ac", "63772795c17c55b07038a816daab381e090a128a", "c33fd8cf8be17b6b85ce1f1d2ab2d26e75ad7f26", "9ab905b04190ce2e32b0a5240e4d16cffbba842a", "0e227a43da9dfff237f9c9e752ef89cd0da7d839", "f63cb48df0d6c2f403f6d9669e8e6826b4ed92ae", "19b04f0355f44bceb06a86f9f7dcc71441e0ec1c", "ec4c5efa7a4a1e8beb55044be8159eddad01e3c7", "856caf05bec5fdefb38c79ca00fdebc215bade12", "d737108bc172d2650873df5ac938d478a0ff086f", "c71ef3d6d2143f0c6792092a5ffe50ebf450e2b6", "1207e531f0254b99d34a71ebb6217ca016b8627d", "9b7986b2f3b2b7a85cbd1748d533282bbe6335f2", "f3dc1dc3483c5dc1a3b7b57b036193d28d983646", "8d6edc07b825cebfb5183434881e364a29296dfb", "c30f395705fb493785f32d88b05762d9b88ea2e1", "2dfe30647e5cea4f54c05e2a74cf676b7f6115ef", "9872bb9cf231ef802912609ae3475e3b01c48eb3", "ae870ec9bf79c1955972d0fbb6be4d59ab05a8ed", "dca333aed156cfdc518c3e7d2c0a8cbca9cab271", "8aa7c74e62055ce937cfab0c737135d6763ab60d", "e7dbc5aafd7cc26f1995d3e6a9753c0feb889693", "d37aac12228580eab8ccb29eaab7c1589750b6ed", "6fa8d4b5fb26f086541cfeebc5a1f9ba07661496", "af4eef74b9706f43a9106a8d3218e8e84370d1e1", "5f675067694f4265e28d2c2aa69dd8ea0b4c14d2", "c1c57dc1f443bf3cacd28fea5e50189ddcf78514", "8528615bbf6137e456a4ce7a6aa282a86edf6c5f", "8b987a3e99e8124f80d98c23daed9852952c9113", "59da48c4070026b6ab4b6580dba41c4c66383d94", "01d22cb6b1273f45da4463192d381742e4ea8973", "5662e1cc1ef459cda56ddf48596853b99795326a", "dd82fe91ecf5dacc5cafe0cf24056fbcd8fef996", "0c440bbdb86ce71ae4b6db7ef91338d580412b11", "ef2cd573bd488978bb1caf79e6545bdd08c7cafb", "a71c012aab33e83b32f5cf8c2ebe4d0da7b7cc92", "70679b0f373c44194ea7b371e0ea6b5f9f14abbf", "39bdc7e000a264a464e0afde843533bcdec10b15", "f864e4a4631160b95e9cf6ddbf8711218a9135c4", "d6497c1fc02cbf289c16312a9b14bc01b89cbb17", "bf440b4023c38f9098443261184db2e208de07da", "89f8856810f0f30036775305dbe0942eb433f79f", "7fea5ae29aed94d801e58d22f97855d5eb65c4f5", "445f93f6eb977a2d452c2be229a92f12663fb3d3", "438f0e727a85fa5e69f13d58dbb98b35ccf53f33", "1dc7e1632a8ca25fd7dbd70d8cacb0ab1856bb1a", "d125cb2512eef4952a23d8c823b015408459cba2", "56bf69eeeb9453fb3933e933624dec8f313a8f33", "8ab375434e25344ff24fde16fe5fb9f30ca87fdf", "cf84a9c16d5039a7a9bc4ad1320b07ad240db35b", "df9f2f66a67d16af51a06f38beaab8897b9fdd0d", "852c318ad3b272a63890ff0b0ecee2b5abc0809b", "28f9210d384dd0375a0bfb22ba647131c76aef22", "55a73576b53654a2444c8794f7f0248efddf041f", "453e6e81432a59ff7cfc2d150af8db6f47f2d530", "88d2218e27528b2b577593057c612dfd19b601a5", "cd1db01cce65106d626eb3ca1399f0047d0cec6c", "2333119c51939b8c4b44158cd7df18a73c63b052", "e2d0e1cf3dcaef573c585c495f6619faf705292b", "e03d2e6788b8e332178775d30ad7a75a4aa2da83", "1a977552f350b1f31410964befd05c17f0a97a75", "4fbdb89ece9b0223a2d53c378dd88038be083097", "2e40d9a47b2d9569965704a696e4f005de95f4ff", "38a534e5b7384f2765635966e5156117f4139f87", "a47fbbc90f9f70c678b42ef23176307420f4744e", "bd67e1c56afa2f6a20a015566d75c6f3139ff6f0", "fbe3956ae4a24f1997198c5fe40763b481f6568d", "cc35e86c6e8f441c463cfca0df8bd5a886d07567", "190e8598ee7a58e8ce1cde34ae507ab782a42cd1", "8cc5f7a97f5b5f52686c7e09de388ee4080faa58", "2f1f2ae860490d821f9467d80a7d8867995539c4", "02ef90cc471555c7b8e9b2655c96b327760b971a", "7a32e684edef1969e43c2b0502360e715d0c719e", "d4cb049f2f8702a8bb898b45f568bc9dfabfd94a", "8bfe7e75ff1bc3d838423e850c2103036d024e00", "49e3b93bf123c9f766350c9a2d5c63868e8b9018", "75fc9d54ad0cbc43bc06a5897eff1e03eebec668", "9440ac52f2de55db96e14288260ed10618d15b30", "b5f310d9c4221f1d8a15fb73a564d33667717e56", "94e519035d007b0cdac848b543f6b4102a6697fc", "1d408f00ba36d7e1e670b4a9db7101407e542210", "0a344054fb2b8e677731bd90126c2c9bf09b563c", "aa61f92644decc781a2801594e85447fc270c055", "af0c525f0d404df3b4e80b9e1d717f51d28b8b25", "a690100f1ddd4f91e9d03ccf4954fc85e78cb48e", "61ce9fb201faff3a7747476ceb563c9c50fee91c", "4267e0e8ec3d262f3eb966f67d180e98dba2f5d2", "8db3d53f278e434e8b609dfbab7b85931192ce03", "34b7f43c7ea0e8b868affdaf0f73501e89fde751", "c3e4663c28f8dd3cf18e0d10d1aa8cc63acf68e8", "589651bc5b3656b1a902f1e3f6fbcfc030835f45", "29ccdd51ddbb03e6853714618b0d9d896e54d783", "5bf8354baac2433c227a9c76b0b5dd182c46ee62", "99467689c59f9c6eb677e8e471f139a4c08de076", "c2a5a1c380441a3823dbf8b578f854063e476bb0", "6a58fd10e20a1a53bd06bc1655a5cce65716cc9f", "2beedfc5d3f7e6742c1327d01d723a338bef3c3a", "d3f00c15fdaa73e6d28e4a3058c8758dd6dc8f22", "bb11a425acff8aa5a1a10458b0ffde281df61ae6", "08b3d161b0b0f7c16943800a32ff4c14defc2b0d", "c489f6857c88584001986f3894b4a25495e859a0", "bfcb2abdafaaf960a82d4c204b16772706451c04", "6b63841d5e409cf3878abe4e6d5312bfe66666c7", "79c06a68317bc891bbc3d09be4b5139aac3e05d6", "b1761d5e7b4ccfe1c0b7ee60fb01cd37acb9dfe3", "f1d763f4f7e38a357a61e0e77a17a3a248f969f3", "59950c8a62560983067934aa3a0d8f35782d41c9", "e937c2b37c9db7209b20610916745e0c3b701b77", "15a27a16bf942c3af5d1c5d789337331a608d2d4", "3f8ee93f89e4a97ba149db30cb38d20c62d66f84", "f847eadbb5f39285a2e91098d1bf6d87040ab536", "a35b8d7b0866d0e2df618df7d1c7c3a636200466", "b6ef3b24b59ee022e33579deb2041d8a83046972", "34f78985ccbc0e17647ba5767aba356d5d230f5b", "ce7ec3604c0d2015576fc030a1bb16783c646df3", "9483fda12a914cc556487978d89f7a0d56fb758d", "ed2463b590aed8e0000e8462dd6f322ff7597df9", "4eb3c026652fbb8d6b64e461fc5007ec58a077c8", "91514c75dc20f1945f176ce62544c9409827ebeb", "81608cd40fdd6d88ee6ed4387c03c1cb3c6cc7c1", "2d5b559ef917028dc4ea0aeef6d20c9813be99af", "f1774be76a1d4586c61a68b73993b0faab0e2b5d", "b448a006fac11eeb54d1fed554c86b76415e8044", "a2ce945b621b561c617e0770d70491e39dc125ee", "da89734e0fcf02198610710b32c31e39772eca43", "90673f662db62218de9aaf7a7cbfb08a6b1f0259", "bd482c4099201466d8ecd58db96b1ea09e1743af", "79c21b4548565a1505047e801212ca71f0eace92", "de8a992099cd5087dc8b25680743a1a974e80862", "0f386744f3fb1a803c61c58b4964b709757e1db1", "56cebe2573f2e8a2f82bb6a0d7fc10d716c18cbf", "44fa8aab8052a59d26b86c51e615002244f57ac9", "b7761ad70cc70132213a49b878a0f8e4d68b99bf", "e35f401db990fd5fb68ca53f5f6ef534fa3ed464", "c71692618a6aefc33e225ca9e76eacd97dc35e34", "91be97b74a318d9a0a46ba2a80f08a741f8537ec", "a4caba827f5b094205668b6c8d815ff783688c1e", "ea625efec2a46a4c9f1614408caea9475729ff9c", "ed2e2b0841736f6bc0dcaffee92a9e1fa1e919c3", "5c63822c0b96a71b5817d8de321f6664138d0df4", "1db8230450a64af10e6b4d77b14bd2bd4d31e09c", "5626539da1e6bf88aafb8d830492ff33332a56b7", "0fa906e3504cb09eb7a1067d0ec7b202482862cc", "ce82b77b34e2e15958629a8b429e452950a543e3", "3a842bb050e5fa201f870a5154fa09cd018af754", "adb2a3ffffe8f630a14ed5ae187e55a81d6ee308", "3b2edeaccb0bab9f239c27febbe40c9ef2fe2a66", "4972104cb216d4f8b7289efb120c22bc13e805bd", "c95dde7724285292de9e748493705b2f6f016bcf", "ddc8cc8b96b88140c710f128d35780a68568213f", "9d913811b8c4cc4e44607d60f50f5d3fc6581820", "72dec86a2167c0c9998c3d26c3934b58310c8896", "58f47b0a3b6fba1054d8161edf1682767dc6b56d", "c7d423ae33119ec408747a8edcbf905b16e00b50", "7cd571d2aaefbd352aef259d56f865c8358e78d0", "729d93bff5058943b7602784f2d44c9f307ef157", "1c1ac5c2d7f2d5d1f0603a2ec4ec743a9c23a616", "016e35fd035b4a6e8a9df5f9bbb60260f6e34b64", "561aa951556246f14da9eaaf0224ccc4f5891781", "2bef9baa15cb25273ba8a24c111207e2410a0b21", "8166286dc4e052c7d8258192a544230504b1346e", "81807cfb9b235ae9e60ac95f30a8e1242859675e", "6e3e86a81fba3855c5965b14089a932882776cce", "94bd80f4a96836dbab44a8b110d68baa2314c04a", "841a5145938385dc18d4e3954000f58211f337c0", "3c7eded18e338b13d5d0065f6e5a802e6ca44f56", "d6df03e04f63f48a6aaee784381dde8fa2c67ab0", "bbede50e76fc274e0633ee7f8df9fc4ce0842650", "23e5a00238a92e97e5bdd630791056c021845e25", "7655f5283b0e267e37813b717b07e9e536b935b3", "43dbd8973970ba35133f7de2c6253a0e2d8f24cf", "11569cfea8e6d1c2dd4dcb4a36b393e67a8e69c6", "73760edaef82ed349e4370143d69c4c6c2ea32e0", "18c00e8662a74c2ffcff8989b82ce05033c22588", "6d39849de8dcef20764440e5c30f1d93543bbed5", "957f24eff1ac12cba26bd01b010b522fa1f34294", "2c84ca3e04c90e3afaaeee7f74877f20eb4d7244", "cac7de77826bb64430132d2beb531a02b905ea67", "6cc17e6c612170a4148aa3c9ac995cf6d5a7e492", "6602579874984c57ff94f6b1a68946c14ac9dc39", "5c5836b31d12b16c66b56833f2411a34c29c1f1e", "37af418b213bfa7a1376d997820a04ec8ca327ad", "a94c55a3bdd86d833460d5ac9a57877cfc605799", "d4c6726ef8a912a4091fe5867719be9b538a98d1", "5b3074782056e8c85926638e4a3633602f4fc78b", "9e7f8951b30386468c1df25b2fda4bb123542f5c", "6ffbb8fc0161e867349c223093a898029a53b80e", "eb6d81aac2510d45a97ed53decf2844a749db4a3", "03f311c5d18b7abc21ded4a8c251d43c7fc04962", "5cbc889c613b8af687cd1604c957c4cd51c535c4", "9479b9a0fd3c280bb7888e9b88d76dbbe796de66", "a3f5413d00f5d0f789f098cc930245a9db65a018", "146471d66cf472f59a35d0ded7098b236646462b", "c6222fd78a92a25597bafb71f8290557d96565fa", "f43e55dd3d41482cd50cf95a47bcd83578ea811b", "9f5ee7c83f903fb23c8d6818c8671c02bfacac1e", "5c4a19664b680b89d274831b8e331537974e4b29", "881ee93b83bdabd49e74d64632e72a0fce461ba0", "b0826f15957137f5ba9de05e23b9b8e41568b60e", "45d05ff46bc258663b958e8d389ce9dee6e04cde", "efe09598daab1ac8251c46a3139dd86831e770aa", "2ea74f4790fc3421186c46d63ed58693b5914b1e", "27a373f66db65c008af94c156179b35d7b375544", "0acf111b5e56aaaf329e88850b519ea4b90f2b77", "e4b9bf98f8c5df84be4124be079ea1c127dfffab", "3c3a93e844d910aafd977f7e1d74002b4b1173c6", "7e8773956398c63aa95e6d144cb20a9f032bdb3d", "93f2f29585beaf0e8a22f97bd0e2a97cb6e92049", "c133c7e1cda2ac19279ff3c3ecc2544d457ab3bf", "783d1e3bc7c3a6f1b238a653711290e999672f44", "201bab101db31b7906bbb3e6e726fde0fdf6ef85", "3cd4a2dd96c9bb40a28bcff7fb5be52b206cfd7b", "30c744e06c29d07e4e4c66e4173e2b77fb634253", "0bb5bca3ed93c9fd4787e83a3393bdf113feb095", "514ef4d9614c47ef0dcb5b7c2be318f0d6326b57", "574eab03822d1ae4e088e9c025ec3667e62797ec", "2da32c75a1b80cdc9b208852873591a3f6083a55", "879050c4d56f56f2756ef942ffacf25942ee1663", "e72022b63eb69ed6705abe94476bc8300a2cab75", "99e515b2b6ab4b776db07c8dc538823c0e390f79", "9179b2e57610033a0f7a75524bf2531c36c430c9", "03ff4f7d0e3648c17930cd586310d08ec721730e", "d1568648936688579923bf07c81ab2f51c455fc5", "b18ce3d7b15e8d19a8b98035b0d42bab26cdbc7d", "2376fdc2e61813c98e51bc2b9d860215f15f9333", "35efdf55ab8154c6ec047415b0da6eb7c5ffc424", "42fc28486dfef2403889b729730af6fe4ab867b4", "ac1bc260af194296c2da4c77b95c598b6a3ab96d", "16e40bd9ae752468a84ed2398003ee6e908af830", "ff38da1664fd3ace70a390e0d4af058548c7a238", "f1d7c0906b7b56fe8da48d1a83fae77bba77ad7e", "82946b8f3411c3191a9f829c22d7542972444212", "38067414f8e9dddeffab87d80abb6da116a3de27", "391a5bbe1eb6a22f5edb74b290faf9f13738bb44", "b317e8b684f2a0dcef854ea5bf8d8dc71203c076", "2b4e99f0f3607a9096696417e9ed9d3115b9d659", "02b1729f47dc7299eec520f992c72791a18e3641", "b8aef7427bba45bc43b0826e18afecfeba21e6b8", "5b72a47306f4092d52ab0329a918765a406d9e63", "6b0ab49c009617a4077b9e9fbdab3d26278b0550", "04c9230260d55c8dfda9e9583a50b8f2ebb035a1", "33e46c2a1f731378a23c7da4bf77ab664c740c80", "8c9a58662a3b69d886dd0fb5049909b51cfe5d5f", "52dc976a05b5968ac18db5b9904db35e988654c7", "033b810a2d1a1a3039361c00cf3dc1cda4d83a96", "feedb7b173535af2d621521ed294e74d2f5c0846", "9373a30e223be18626f8718372c6210ee4aee2be", "9c9e0070269c195417a3b444a14ce5f4a3a2ebe3", "6e4ea16bd28b52b2a47fd95e1be6eb0f2e1ab70f", "efe35eb116359d934b2055608b8ede5572418218", "9e2c4bae52d46d838d43313005eb5550bf786e0f", "867a6d7aaf1b37d98d54581935d0c22820dc17a1", "e0943ecbd5f878538d5cbf18d183917e1dbf3d17", "a669d5488bb5b0d377e567c8c0e3eda0828334ed", "3a1e9e924117145dd5dc394c20b53ab2e372930a", "67d0db32afc3e4f2fc4cc12e26f1e6d7c9c18c97", "c0f69bf5e763fc1e8d2951a95f5ec34e08a5aa6b", "5781f973b1234b0323f259c641efd6e2842d0a9a", "36524265ed172800d035c96fa7f9bbe7bd3106c1", "644f35cb38226047175c259ee657c50b7a79099e", "832674388e06d504bb709d4a703abd7ce52b08a6", "4e52e508f44dc6a3d75b0f319ea74ed1d26596d4", "58389c2dd16d888a53eab36a47ea8ff4d2f355ca", "4d4828fadec14b39fa288bab3f7dd9734e180a23", "a9a5c0fa2038c90ddbf6dcd443ed1eb0e992cf2d", "0d1c241f777996d7bb0c76bd48cc8ef1908106d7", "72d2076d45c191c3814d3e171477cd504ee3ad06", "e5fdb7706b57513ca50792b2eebd3c9812c1c2d8", "4272904abca5380f25d9894d7eda771ace837dd0", "6bd2c28506f4dc9f1dc906828b4025b638a6b982", "847cb397db45606b3ad28c0ccefd70bc8b9dfe9c", "6b3ea60f05459374b60ba9b1161e59d479c0bc25", "e8ede63d57663fd95b8d9eca5b75a327ed207e79", "342a0140887ff71aa06eeda29b59c3fccdf57b92", "ec7b61f76336883a80b9c3988afa79a7208124d8", "7edc52be1a9ea5c832f67e8e9e0c3776f8656c62", "ed2f5bc5830401aa08f78785a53bb8571bbd17a0", "5871f0c6c07dd5927b26b64e85fd7bc941e07c7a", "a9e918146b70338e5bc63ce9561cf571ce6bf005", "cdabde87c3c254a304e0d3a11b973d868a692734", "ce9e22a7afdd5207360413ed835a62b3c7c9a1bb", "cf705bea0c0363a35023b99850ceb38bb05a6d42", "030b0ee3af4b3e1bb9365b86104e90b035719944", "f30f669779df0ca3dda7f0d3058a75157bee9b80", "a578b75890cfb69aa959ab6e064672073856fc99", "6f672f5985fe37147be6ed44c19bb79dc5066072", "3335f8e0ba51ae1043c36126b4651045b72e5351", "0029b8c14fdd3650d8fb8d669ef4ca8d0cee86ca", "ddd76a516a76359e14a5341aac17fa8f2756923f", "7f28faec330f63cc03d1ef6f9f9d3ebe9e8f6ba6", "b3f94ba36ce7d8c354f89ab2ef7701c49df6b3ca", "61e031636d5ff00752e67b1eac1dc1af8f8eea24", "6985c6f925a8c8388330234765b512475642f98c", "6b61a1df7a449acd9d96ba4e75a76805f0422505", "263732e3a4928dad80eb4232afa4af3050c95e12", "9443270fb03dbfb11e5e4310453fa1e9a0dba809", "12ae644a4b87408e98bb720f4ce97ad891172fa4", "bb3ece56f638075489264c43a43765dba7a5278f", "c5ed62296e05e202a8db227be6d9c301b4746318", "270564546d52c00e8ddc66ee869d34816ddfc73b", "1fd1c5b30b38e891bfe37a88dec155fdb4f321b5", "72b21e9ebf3302679e580879d6036912f1904202", "04318cbec224ee644bb8ba6339781aebe58351f0", "58a843126ca0cab05a815b8a243740cb849cc148", "d1b0ee7eaf05a11576a9baa4b4ffac26a147bf9a", "daddd1915a07203f8e32adff9a7aa365273349ec", "b8874af7ef18da24e74c922610acc9e2af8632d6", "164cf0860e49ca442983030abc34007568029411", "2a0f01114c2470fc0af4164302fefd1311581ac2", "a4413e09deed8db728cfffb78a4246a71797b785", "c8c9639f652bac0069db10ca7ed984dc9c0018e2", "230e59f3cad4e10435e66daf2350517735e06c99", "9240f68b0f12cef23d58e0d61dac600323441368", "6bf93ec440dd8d9611a6b31209d137327245c192", "f44952a6d4db1397f4cbb5d504519f40c88c0ad8", "a989c0fa7d42ff275067542514c352959b79e8fb", "a0e37bedb5621fe66c97e46809454a6277c18c89", "5dc008ef80f509a24b3fca1a87384ce014d26b6d", "f41dd15181e323b3b229faf0c098cc02304cac98", "32e5b99896052e15ec350359b4504a9e10a762f0", "eeb6093a28e50b4326c531aa4691d6c8c956de1f", "c42633394f95af3141357a631a84d669c74daed6", "3ff685f4c14280f37cc7c66c263f0684ec230b86", "804b73e2556907747d6a059e10cdd8907b324485", "79b7023799c9973f1b37ee9ad54e26ab78e5e95e", "def460e787edf493e1993938ed204633a47095d7", "67657c0a789bcf17521045ea697273c6816f8792", "610baf6144cda1adb6d6c392819230a9f3f0db63", "b174dde19f2f4db9170d296e500b465f25c09ae7", "e9df3a886506e738c54802d64f8dca2142bbf381", "935a228d45c901f1fde953097720cf7bd0a123ef", "61665269e8e141096a00079803be7c4a2635a56b", "08d0bc81ded1a4fdf09587c8bee7fc5d50c20ea8", "2b90ca59335f34ae5e83621fefb056793495a804", "01b3f48e021917d34ae84bb0645d05b3fed2e975", "85fb022c826d9e4e402971867ea75d1de1ae5106", "20844c78cf3c2113ad182df20408e7487c1c9f76", "f530e654051f6c419197c8df249805f4a07a8502", "39a23b524914f1c6cdfd92a66177ef8bc8ff5f32", "602350080091f79707682ea54566af497a51a062", "e4989b2645d7a76a982a5d9dd824bdcef88b6f4d", "8fd59756a6a9d6f10c88b77563d6ab11358aeca7", "970c49e2bf4aa54d9e8a725c205f782f893cf2ba", "527a434e2ad1da31a31243abd4ad1eb4a63702fc", "535aa27add2a130362f61b756769670cafab0773", "9ae4728609a55b9728544f6357aaa2fe2e82e2da", "3d1daa0cb064a4d63811a1007d94f69e11babe19", "6f498da47826061ba9e5f6cdc6821ab003bf8d36", "dd2decc0d7710b26987c122408f21f061f92ada0", "137ea8702641376c08752fd48783920da6a6c761", "191cb9432369dd3e6726e36ec7e79139a7285bf4", "c422f8da5061f3c6bc7289cd2b4e1e91e2944017", "c947beeaaf4db849bf61386e88b49271b7119534", "e0a8be4fb0b94e0def23cd917f9ba579904a6b71", "265e6c309b6f9f3d351f4b20173f0fb76d7959ba", "e02ab4f1ce8df46f784a83ec21d30983ca9a80c5", "b9dab06be85086dc5357ad967cd30cbc74c73f48", "1868fa9086b98554b60093725adeaf9e99fc12c4", "f9427c5cd0a442a3928ff1bbcb12d9177ef4270e", "694852e8e6aac2527a3b84845edfe0dbd1780203", "595bd7bd747219326af6c2b97155aecb709112de", "5b46efadb94de1a474e769b7aec262d5954e3981", "4bcc9bb22a5fd44cdcf4350ac3b5c8aa393b7c6f", "f8b247f33d13e401fff33728f7a103c136320133", "1e48171028bfa855bb280a57f9a19daa645ea41b", "30c9c86642600f507196fd8c82f53fc8ae82b0d6", "5b349f1a789a41ec9699514ac6bbf31e6fa3d668", "2929ac314d6857740b3170fc7f81d8fe3ca114af", "04d77810d8a87befc1e0513ebfc4a41078654f2d", "7b80288d4b8c3f3b1ce7344b95ae36590976d18e", "e044be262f6cdbfdf33c52cd0f8d97decda6e73e", "65ef1f7f751603a2907a0f04c1e3f74e15df856e", "88bf67cfd6a7659991acc576718da7df6948c676", "7752bcc3669a594a25de0bf39b3855a932ffa000", "8c890212e584ac3fbb1da4e2ed32ed234ed818e0", "05c049175f08078717aeab6d21ae941054400eff", "370ddf80ea343ddb9d474dff40fc2caac022bc76", "eff2fa42e02c520360e3d98cf15ca70ebd09ee79", "8b947f08eda1dce32a235ace25a495b9e8f0e88e", "6766391e244161ea57bc8475f3824f9d6ca152ce", "03b888b92e30ef36f05f22441d0016f1360a8293", "4f3cde1343b0405148e05b97f5fdbe1fa23d6625", "3792ea135818cc3c8d7a8d7e7cdc8aa092d4016e", "48a417f3384e37ad21c05e5eb1b99078da504c7e", "843a76dbb7fe71e3d2194f1a63dc136e9afc2966", "525ef8668ef096c6cd44abc58c177e37fa381ab0", "edc55d4b4a6b4839cd6befd61693bed59bb274ea", "0613d41cc88f826c5df5573bc897193911fe8bc1", "116eed50c027265ccbb0690dc3a3fa86e60a2ebd", "2648c382ef83c2c4269891263230ce328625a7ac", "62b1a9adbeb54475e3e6a56fd93a8026a0529c9c", "ec7e5033fe3aab0a8429bee5a94515a3045ae8e0", "983476a0ad5d2dbfc5f80702c4d09d22d933b577", "6f8a4481d3b0eebb23c0b45830c77493c70387e5", "e5a6e218fc334d0442ba7319a984427b81fbe63e", "484dee780a0642477568d38f1e99e0d9f498dbab", "edca17e2a47223d0667dc1e0393d5ba5ce92bed2", "f7abe0e260ced298c522c470ad84905e2520f9e8", "0d237c03c434e6e1499d99501781179dbf377393", "573d521d4b9a435723821409d097611780a3c0a0", "21aefd060fabf07a3ede1500efeba31b4f150068", "0f54ff5eef5a768477a49532597bcb4d8f25cb15", "4f71f9e4a6608e8edf67cb09dda6890c7d5b85c8", "94a1b8d1431a7f0d42d56f73a0a2d0114fcb746d", "1d20c7bd7f3df459d48d82b5ee184d0741136349", "87eafa67ea9a17d87f2f42423a501cc30e82c23f", "af523b22307b2cdc6ab2a2a26e3f07841ad0e5f0", "0660c77adc4310aa94e008bbb3098c23a64a6d34", "a71924b302c808c9428c87b18efe762264f16b64", "f18a65035c8294361f91c35d3c7023cb9fbe0e7f", "c8edc61a529acd3b954aafc79328edf011d273d3", "4c03a8febd4eef9b2ec3b441c60025144e447b58", "b30ab3f8b37706d7f2b3cd4bdfa62335a2a71c1b", "577e9a61f9ff41e4cb768ea37756bf8236391e1a", "ac89fe162d19501518a6536948a8f55ff7810c74", "04cbd255c30baa2eb749c1d8ff842c669723efb2", "7fd300df5b38c8e58ea922b7eafae41c059cc772", "781e64332300f757b9b262d0a46ba34866d77243", "b6fe902d0b448e0514025e9a0d5af95a244a3e59", "e8b2c324d1bc5bf8b00b133826a28b1abed02b47", "63ae55dc378d962809f1caac8ce2fd14706b2196", "57be34c69449c6bcc83c26ab4d5e4bd44d40aecf", "fbfeab82942a703a1fb3c950857d6538922e8eed", "64467477642e6e93aef9ce1411cc9e6357be3433", "19ad1ae44372559c8b8ec2c6c84108034dd80d8e", "6ffe99804c16291faf001961e40830d43d811e1f", "62edc288ed163d682fb4b6898be351a8c75725a4", "020d4ede450be83b8b204265ddc5e1ea7d5b8e3f", "3bfe2d37f364ab5cf38533c902d62314863e9b12", "5bd0e566028c2d3b11370dd988c809c53a4708d4", "8b540f6b7379f79c5e53e967ee29c8dc70bf2402", "1e113789d8bc4fd26b05732ee663b698e9d82eda", "66f1599801dc3cb250e51648578152fc4c063ee5", "c6cf2e53b616e83c27fc45aab0667cac8b3c6282", "dfd2431890261d96df4d6147ffa817515ebbd196", "94cbac5c8c287ebae2d46ffacae2db92002a1cb8", "c74bd5108712c3e62cf9fe801b88a7bb69a5ff50", "3727d17e4c662b9f8157ab29740e9d48250de055", "48a3aa08380392230e4e78529034124e26719187", "ab4b162df87cfc487c8db8c9c137b3888659d238", "2e0003a0606e6b7deb05461095eaeb8103624fe5", "60cd3a0aa33c252eea2bcf7cad163dff6d1ee670", "08d8018d115f8b9a7e8962be9bf0533bbeb1cf8c", "bddbc36dcbc9feafe3004afb0c35d6deb43dd240", "de2f19e56179970a9f33ba9bafa05c614796026b", "6962bd1fd835f18db4ab263bd6b5aed106947c8b", "04ad525e746f4e0904e124a8de084d0daf3ea3ec", "86206cae3ce7873cf9c5a70d50cde466ccfa414b", "014efd99ebd98959f8721358178b4fbcfda6cf2f", "b79c82b31037172324cc31ae6d3b4dc8082a6148", "db78b0a8c12ebe6c34291b51a2a238106052ac7a", "05435f78cfc989e188f747e398de9a45d7f60c6f", "5d13f7b71a213ea87117a2d51f4bb2bbe22d45ee", "8f77fe16e2248a3ad08c7a9416a9c22c237b5861", "d70c611a4d8d43fd01682bfd9d6b6cdbce10883e", "8c49d1cc0c3e0adc9e23b7fff4e85df259b266ac", "65d546fd0e9e42ae160130e434460272aa43543c", "fe2e8d635b33e101a33f8ab6afadbcbd6e2e6766", "aab32213a9af38ef0300144cfdbb9e5d48342c48", "3789099a0aca928a22051e863ee75dc5b854647b", "7f3271e92bfa53a06f7c66ca91a396015de60ebc", "6e8945542efe1794e9f92d9fc1af75602ec18246", "8cd9a8186d812dd8b68d770be63ba9a259c05487", "d56ee7cabd49e7604e9a6421c98300f1b6a7aa84", "4fe9a93b89ac2d9aabba33c131ea9010bec82f54", "53c27c0ad32afa8b636bf2b47b3b190a96095c59", "3388d5a6236618c5e7bc64467bd93847f968507f", "c5dc83ca02d3fc048bb0799b079fa3be00c837cd", "d7a7e9f25eb2ddc249e6af34f8c5ae97d5f34e58", "9d1e3c3bcf1ae2d2036600dd9559c43ec44b81f1", "c9e7caad30ce636e3340ace71690612f7176a926", "8f80531dcf1cc4fe2501d59a8972a23e4d5d94a7", "13e775df1660f7486bb542ffa8e4369976087b52", "e3c89012576333b003fa4cd68f72e4f8d5b8e105", "dc11cb61eaa355208c4cb69671d935692ea11fba", "6b527759643ed52db577b138fb64af9267075352", "9ec68b47f9f9ce6533418b05dfee9f53273dadf2", "80609d5eeecefd6c7bb851a1bf1be6d5c579f817", "70dc7cf8deba1e0006f70348e6c6df3abe144fa0", "6804c489222b89a94c3968cbbae59ca8d56e5117", "029ba5e5650ba2ab3e3db98bb0b5b755e1632d9b", "3364e53bc83176593824c5049be60ee4ecb1b2c8", "a2a6101ed2e3fd1898fada3f55156771b5a15f68", "9a0eaeac9e47930e4bd959ce84bc9b7add20d2c2", "5b07ad458fe95d8d810b87608f0b55fbb1f93432", "82bb323c29081781c647590e14d0a15854488516", "293b563287940ac73fea86862c97884156aaab99", "ece999a94ce0ec376f78651c4b3f683ebde77e08", "8a5b0bd5fb497ab2cbf32078319458acb88035b2", "f4f8bac15a4e5c04a30d751d96b82121eaf36a32", "6efbc2566744722d82774787465ddcd30ad61e2d", "0a7f1ad5bdf428d8f43f5f8bdc1bf1cc865b186f", "b0c3d8c2e010e3d1671be15e6881940fc9df8663", "81f10e2cb11548db659d15b70289b629502d93b6", "e3b6cf7b0f376bba415614bd20ef5346a97ca6df", "bb332c29c12c6f1d0433d89ee779d9e2b600fc59", "108773f72d425270103d03da8193e6b3fd0ca507", "90f47f8ea5c163ad69e5105d64eb78153d69d3e8", "28891bd5642ea02d4b3ebb29ba3d60ae608edb84", "e0633e3d21f33075e898518d5b0be708cf5444f7", "2bca02943684dd26ede8f8793a65cd9937ba01ff", "2ecd48110898d8e925d0e85af9cf18dc61eee731", "509941b5fafc824f284e41e579f7daaf5ce80e0b", "e0fb63917ba3497b547aeaa2b1d3377986584164", "45caaa7f7cbaf295542eeade1189651ca75ede5a", "544a5bc0de9ab28565a4b7a055d5f70121a76d43", "0619074391b1b23073ca39d88718923902b25619", "e351a86c04eb6f3d65d628a16a6b5541e5c07d65", "e10774e2326d946972e0ad6ea15c6491a97d5e9e", "fd5f4442939a8338bd948d7d3a13f6f80785ecd6", "524a63a905617b27133382a5ea344fe80760afc0", "59b0ea8063b8d722b150ec0f4417c58b288d8b87", "c719bf6e8e3cbcf934cbc7e7e472e2b4506ee30f", "932e88fa3b342ea56f2a22851a96dd0d35ce5aea", "76394cd8e8ad7cf5005c029440ed156b774a951f", "8b42f233bb9a7b328e8a9200b5c6f45b6f7879e1", "26d1dbae44ec13c124fc394a8629c4e9cc2a0fab", "e8ecdbab9a96ee04f42c7e13d1516dc8ef565557", "e75a162e7c50cd03033b23c3c9f637d622518916", "5bc630936956c2c27ca38de508e84fb095c2a4c8", "9eed1db9257ea0aeb9b5db27c3d44cc95a4de280", "bbd3d3763607823c4d840841f8243a4fe01e4f92", "8b8a468a875f5c3134c2634a31d63af30b64920f", "cd0380dd438f516b7aa09fba189314dfac848cf8", "e4e856534816f0d708a4e90c5d25adb8da90be2a", "ec47e5b14b4211077c06362a1c428f585256020b", "f43ab54e8eda8a88dbc9bc0a0a95a8362401d88b", "649f05f8529ddbd30e2d524a9a0c4fe61cb32c73", "91e376746cb9c0a670af64782c48bf1af96bccbe", "40448219382574b1d33efbf6e72ff3f6888543d3", "629c8a7d9c2c433a42eb8dc905f5a70d96fdf795", "3fbc758fe30715fa533b1ce1bf88c8d7e43ca19e", "73135c67b5a62600a191ab7cc645b27a38ce98a5", "8686adcc22ac50d6bffbd8acae79a5ac3f82df8b", "1f392a4df9f8d0eb8159aa745536a71497fac4c7", "7515e3dd68e9d6b083736be40eebe3c53fb38610", "dffc44f25a71bd3f645966573eec710ab3a17f27", "2ad94f2be2ffcbdc90b043e9707482ae6a10470e", "9cf9b86c0f835072059fb9263cc3dc405128d5e3", "6da051880f0622a2f65500cc96ae5b3c20c08a3a", "1cfcf2efa8d5920219427ee73231ff4c7ca757f6", "bc1fbc8504e58a803a608fb2d908e5e0b00a65f0", "d9472fcd34e498f476aef2d49db475b4a3778777", "b293c94872ceacd47f0e14212a0ea4f5adc62949", "500d2f932f9fd9b07f3ee421165a97e748bd066c", "d3d8cd218eebbc08b4c51be11ee7fb0362c416da", "b54e374446d39a6543fcec4d630a9a026506f26b", "86d1416db10b4a15805751b218f2e9c419dbfca0", "221477e62b7febb2ae52e6c1170ae9f399994062", "15ee7011ece91cc188ed57b21fafa8711eeee42a", "e54278ff05b6d601bd0a424ec1665a5b62a5420c", "e2075f7bd78801f0b6b0f13bdbc9dce057a5b524", "8468675f5e091e7f3575e6e5c46c5d87ae47e759", "be0e45c0f886db48144157635131f366d6e4f1fb", "a3751a51c2900f0baf74496a36a520b11beb2503", "800a23d5e3babbffe7ead2e76fbfeb626158b193", "c2b3426781d2790b865b847d42a71a253f00ced6", "ebaf4e28ffd51c71a40a0f96626102aa27d5d1bf", "4ba4e20a4304e47a9a74d396421a56451a76f575", "dd28ac8ba8b8b5005f65d836328831a09d2727af", "ca2bf9ec753533d9d3b167e2fc7df45482710d6b", "d8ab52ef3e5003266dad41bd95f951f3b9bc21bb", "3a7cf9925b72972a1df45756b7549a86b093b03f", "954f924c172010d53fec9cf940d1a496ca1c0253", "8a3719d3952d9f0381557f095c1326ef154f557e", "0d028a4bad327a4afc94a34bcb7474e9a3c55c91", "1ff187bcbfee18cffa899a2019ddb73d8e647c06", "33ffbd53736884fc47302f402cef996122558407", "8778cf9c9db363718baf8fa94482ec2f6b5955c8", "41eb62d26b056be317291afdcce5fd033e05083e", "f994803aa7eb9b95f4db74052ebe63c7ccdf80f6", "79f927b1bbbf1aae819315c8c58e251dd2d1d512", "22892cce6d95b6ed7265a5ec47c8359269802631", "4c0c6b470b843c2a25341b3bcf51fecdb9e834e8", "f034f5d933812e63d5ca1ec1ef6e0165deee1e3e", "77fb0a72cf07e869259cf7d2bbf9b962ad4a8f30", "cbacb11e247b3458b9890e479d6813da824dfb3c", "63b8acebf19d8dff77dffe9d17c8636d28e32c90", "0f8d7e524a6c48abc56caccde20220966b62e25a", "093b67fd003643568cf4ea4304fdee38ef20ef64", "2a7cfab29e9ba3c5c03ec6ae87e5d2527931577b", "653557ab1374bd22c0a763507f73eec09be73b9d", "7ddc7b9d3a2f0fd3d246781dbfd19ce9738b09f1", "4e43b869b2db54763927b174d77ad63e94da2661", "e4e3722893e88b7a760b8a079edc7e1a485af3eb", "34efebf024741e1cea5e8aa496c8cd7976161070", "2243f972c4455612ac940ff52c59a8b882532660", "16cbcbbb36664db44339a1e6b9fc01f2746c4745", "4eb7c3a570f5ad746f3c5202ba7f31d7993f63b8", "f4c4503028642f520a7ebf1279abef30714eb19c", "a720b9fa68e40c9bfc06defdbb52707b102bab2b", "f60f30039f0148c38316b6f195e4aaa34580ff3d", "c1d0f2048dc5a23a7fb32a05e62844c042586203", "a0504d023f32c5924f7dff88d36d61f0c7c45ddd", "2a0ddf5c7bad526cb1fee1ee8404ce50755af0d2", "f2c28d6b492ed19843430747e5cf0a4a8fa5261a", "69604b59c1d3ec1a2c803d9d74e7bffe3bd988f6", "c2e7c3871580bc6f486445577c4236f06637782e", "c26acb0eb813cc3b1ec4a9c60c106a276f4e324b", "05207465260f006f227012f8792fb2f61e07a056", "a0a999e3cf66c8a4a4955b4116b3ef715ead9c30", "073c61d885802af171fbec221eb22ba1aa3216f0", "388b6e1a67778343b6c4043e5863cf13bc592b77", "a4bf690f4e67cd4ea9825231ad3202f1966d0c34", "f2e458a9428153bc38894732cdb089462e6408c6", "3e89aa0df145bdcdbe5735b97607ce118ed9a1ee", "c0f5e8acf541d26de3bfbaab68ddebfdb48eb77e", "ebd99aa23258325ee9e75bc2904dbc3aa8d556d2", "aedb35f6ce15d3084700d8f445a4dfbf4a314579", "53e278882e28a442679569da7139c47369e2c63e", "9b351b32162da5d5e6b0f5085fde110b2b2a91e3", "1616d2507551b6299821dce3ee3174c13200b6d9", "6b02fcbc0cca8778825d358e3473330c6faf457a", "afc2b1867f3bff28eeed01b5946c53508db70188", "4486102b0a422fb09e75ff627ff9412cc48adfec", "6c9ed53a2015fe8994530b4b1928b319c9634327", "f89caa8ba7b0506eac651313f56d3933a6a248ef", "5a13e176d2b929e471772ee77e3b2dc57bd4caa7", "f465d1c04b01467594000baf1cbff1a2454d174b", "908c400fb04f71246ff1c82eb79237115024cc59", "d8376f3d582ce9c8a85028970141538b1d41dcd6", "bf3895c424539c6dd51281b5172490d729f18d6e", "34190fbbd3a3da16b3035b9f64653cb1f71b318e", "91063faef54eee9843b8909ad2a6d25b4e92b829", "cbbd7b0c5ec23acc02bfeee0a16db3cb61af19a4", "a5e9f3358f8e0a0f7496a5463252caf06ee7d84e", "6dd4946abf62ee2c5587cf7be6304ed87cc35a11", "4721f1524a6f6e3efb448501a2049fbecad76c4c", "bcd90f2b566a6dddaad9a97dd1c86767e9dafdf7", "7a3263637755bcaf91530487057ce556473dc762", "0c754c83fc0b51927b30b81d365b30b092afb358", "fc00d7183b22b3ec49c8250fffeb9680d2d5fa7f", "3b92388201ef09da59aa4db337a00a7d610ffcb8", "13fb0539d0bb5c1f42e062b62e1621931ad80fe4", "c368b969c226ab48776c13b0df7f720ede3a59f8", "9386d9fb492ae1b079860074e14091840f2669f5", "277e21b712d1bc06dc5fc0b17107940d4dc82db1", "e6471e93b6417e29377078e8ecabf87c94ca0a11", "563664514f3701e8edb2ecb00a22a0c747db6c05", "cd83aa582cb300efefe09590404703548ee2fb60", "4e2a5da9cf353a0b3839f9f4f8b2637ce561076b", "ae20b5d169570b13e7b4962ea7aa1e585f09bf5c", "1becd72601a84f69210ea2181386ab804dda4ca8", "1c113e2de7bb2c995deffe77119dd25ce7824997", "86ce44f101e3133314fcace8f19563a48cd40cbc", "003dfe3ea4fcc7e376b4e372673fb591e77a7db3", "78d07e80f5d40c3b397a080751c3f06b28d48892", "98ca537fb1ed77d82ca8c31a3a390a66e9b4f4ac", "c448cf75b22c281834b038704b309aecdaa947f6", "7c8103dc16273d01f5280b9b05b9acc5dfcc60f5", "f60eb5a2c296b7d3fa71b801eea4998363e53cfc", "0c0500ae17368de990f91b4214058537a154ebea", "e0c9a771b13c5f5bf343f986129261f4d07af3b8", "758dcd1c8b6e2f900ce1130060445f306372f3c5", "105c30f1bc3f8a9d207175fa7af3341fbd9d0a4c", "1b0b7e6547830a4fdebd68fefc1068d3f2805fbc", "8e3cc4d704285bbb68edfa5dfcfd47cc75441881", "8f13c1a8063c3b959ceead919969475ce3a74ce2", "b636d06a2ac0db03156283ea697c44335a4f3233", "1bf8f304cdf913716052e3ba28fb4f4a9fd204a2", "1d1a25628856b73c2e333ea5eb516ddb9c9886c1", "027a685b553f62e75d4135ea079910fb5c58b317", "10b4a7e2a6eb06ca7b0d97ded214ebde93b9409d", "11c65b927c4dfccaeaea3942f6820aa11a13f6c5", "eb504cd2b27e80eeb1b10f2bdb47eaba6402cddd", "e35e3a35e7cec5459eb21e31ae27bb294780e8dd", "3da2ff05ac072f6c0c75031ff595befa96a070cf", "d200c6dff3acd9e8d07062219660e8fb8b2f3b09", "0ddaba255e4cd838baee36f4506924f3d78b63ae", "97e31201aeb5cd7a938891198639bc73576356e7", "d68716146ca74a4a8e409afbb9c131a3d840ec80", "d140343be9ad8c9029020de8b83ebecac9e1317a", "2ba96ad2218dbbf6a1e9341fe6371aa3d1df4d0d", "f59934733999efac47d6453a6b4cb511d1ba08b9", "644a58a7c5e4e7c6d6309e59c95f0d7d8c34f22b", "2809aee94311abc1be7c6818af9ceea94e513020", "17ecd64126492998e93afa25888af722f63ff3ff", "454bd63fc5821606c0ffdd30e476a976f28bdfc9"],
    }

    let index = sha1_obj.sha1.indexOf(hash)
    if (index === -1) {
        console.pk_log(`sha1 not matching `)
        return false
        // no matching index
    } else {
        let name = sha1_obj.name[index]
        console.pk_log(`<a style="color:blue;">matched with</a> ${name}`)
        return true
    }
}

async function generate_sha1(buffer) {
    const sha1_from_buffer = await crypto.subtle.digest('SHA-1', buffer);
    const hashArray = Array.from(new Uint8Array(sha1_from_buffer));
    let file_buffer
    const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    let is_match = compare_hash_to_sha1(hexHash)
    return is_match
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

    if (x !== null && x.string !== "") {

        if (oa === 0) {} else {
            g.oa.push(o)
        }

        su32(o, e)

        if (d === undefined) {
            d = g.divisibility
        }

        let i = 0
        if (x.string.length) {

            for (; i < x.string.length; i++) {
                su8(e + i, x.string[i].charCodeAt())
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
    e = window[("ex_" + g.type_string + "_byte_alignment_testing")](o)
    return e

}

const drag_row = getElementSafely('drag_row');

if (drag_row) {
    drag_row.addEventListener("mousedown", handleDragBar);
    function handleDragBar(e) {
        body.style.userSelect = "none";
        window.addEventListener('mousemove', mouseMoveListener, {
            passive: true
        });
        window.addEventListener('mouseup', mouseUpListener, {
            passive: true
        });
    }

    function mouseMoveListener(e) {
        let mouse_offset = e.pageY;
        let main_program_height = outer_program.getBoundingClientRect().height;
        let log_height = log.getBoundingClientRect().height;

        let total = 825
        let set_log_height = total - main_program_height
        let set_main_program_height = mouse_offset

        if (set_main_program_height < 101) {
            set_main_program_height = 100
        }
        if (set_main_program_height > 788) {
            set_main_program_height = 787
        }
        if (set_log_height < 35) {
            set_log_height = 35
        }
        if (set_log_height > 745) {
            set_log_height = 745
        }

        outer_program.style.height = set_main_program_height + "px";
        log.style.height = set_log_height + "px";

    }

    function mouseUpListener(e) {
        window.removeEventListener('mousemove', mouseMoveListener, {
            passive: true
        });
        body.style.userSelect = "";
    }

}

function convert_arraybuffer_base64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return {
        buffer: window.btoa(binary),
    };
}

function convert_base64_arraybuffer(string_base64) {
    if (string_base64.length === 0) {
        return new ArrayBuffer(0)
    }
    var binaryString = atob(string_base64.buffer);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

function im_string(startIndex, endIndex, isNoEnd=undefined) {
    let return_string = ''
    if (startIndex === 0) {
        return {
            string: return_string,
        };
    }
    const chars = [];

    while (!isNoEnd && u8(startIndex + g.m) !== 0) {
        chars.push(String.fromCharCode(u8(startIndex + g.m)));
        startIndex++;
    }

    return_string = chars?.join('')

    return {
        string: return_string,
    };

}

function return_directory_type(value) {
    return ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'][value];

}

function divisible(value, divisibility) {
    const remainder = value % divisibility;
    g.divisible_prev_value = [value, divisibility]
    return remainder === 0 ? value : value + (divisibility - remainder);
}

function im_patch_list(o, a, t) {

    const offsets = (g.console === "gamecube") ? [0, 6, 4] : [0, 4, 6];

    return Array.from({
        length: a
    }, (_, i) => {
        const baseOffset = i * 8;
        return [u32(o + baseOffset + offsets[0]), u16(o + baseOffset + offsets[1]), u16(o + baseOffset + offsets[2]), t];
    }
    );
}

function in_ml(o, array, tfunction, x, offset_check, model_n) {
    //multi linked
    // append_global_multilinked
    if (o) {
        if (offset_check === o + g.m && tfunction.name.endsWith('models')) {
            if (model_n == undefined)
                model_n = 0;
            // if (model_n == undefined) {
            //     model_n = 0
            // }
            return im_patch(g.model_patch_ref, o + g.m + model_n)
            // shared model
        } else {
            let id = 0
            if (array.includes(o)) {
                let i = array.indexOf(o)
                id = x[i].id
            } else {
                array.push(o)
                id = tfunction(o + g.m, x.length, x)
            }
            return id
        }
        return 0
    }
    return 0

}

function im_patch(array, o, is_model) {
    const patched_index = is_model ? 1 : 0;

    for (const item of array) {
        if (item[patched_index] === (o - g.m)) {
            return [item];
        }
    }

    return -1;
}

function get_string(begin, end, is_no_end) {

    let temp_string
    if (is_no_end === undefined) {
        for (temp_string = ""; begin < end; begin++) {
            temp_string += String.fromCharCode(u8(begin))
        }
    } else {
        temp_string = ''
        if (u8(begin) === 0) {
            is_no_end = true
        }
        while (is_no_end === false) {
            temp_string += String.fromCharCode(u8(begin))
            begin++
            if (u8(begin) === 0) {
                is_no_end = true
            }
        }

    }

    return {
        string: temp_string
    }
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

function get_next_value_in_array(arr, value) {
    let nextHigher = Infinity;
    // Initialize with Infinity
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            if (arr[i] < nextHigher) {
                nextHigher = arr[i];
                found = true;
            }
        }
    }
    return found ? nextHigher : null;
}
