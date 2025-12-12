#! fires whenever New File is clicked
"use strict";
async function input_file(event) {
    const files = event.currentTarget.files;
    const lastFileIndex = files.length - 1;
    for (let i = 0; i < files.length; i++) {

        globalThis.g = get_g_obj(files[i])

        await readAFile(files[i], g, i, lastFileIndex);

    }

    function readAFile(file, g, currentIndex, lastIndex) {
        return new Promise( (resolve, reject) => {

            const reader = new FileReader();

            reader.onload = function(e) {
                globalThis.buffer = e.target.result

                g.file_name = file.name

                document.getElementById("file_input").value = ''

                const dataView = new DataView(buffer);

                globalThis.u8 = (o) => dataView.getUint8(o, g.endian);
                globalThis.u16 = (o) => dataView.getUint16(o, g.endian);
                globalThis.u32 = (o) => dataView.getUint32(o, g.endian);
                globalThis.f32 = (o) => dataView.getFloat32(o, g.endian);

                // dynamic array
                // XFA = []
                globalThis.x = []
                globalThis.id_list = [];
                //.x* file array

                file_viewer.textContent = ''
                file_editor.textContent = ''

                filecheck()

                console.log(`%c ${g.file_name}`, 'color:#ff10ff')
                if (pk_debug && lastIndex == Number(currentIndex)) {
                    array_log()
                }

                resolve();
            }
            ;

            reader.onerror = function(error) {
                reject(error);
            }
            ;

            reader.readAsArrayBuffer(file);
        }
        );
    }

}

function choose_game_type() {

    const saveButton = document.getElementById("save_button");
    const dataTypesBar = document.getElementById("data_types_bar");

    if (!saveButton) {
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

    let html = '';

    if (g.is_import === true) {

        generate_x_obj()

        g.datapack_end = buffer.byteLength;

        window[("im_" + g.type_string + "_x")]()

        html = gen_array_view_file_first_time(x);

        file_viewer.innerHTML = html;

        document.getElementsByClassName('file_hover_not_selected')[0]?.click();
        file_viewer.focus();
    } else {
        g.type_string = "bmg_demo"
        generate_x_obj()

    }

}

function generate_x_obj() {
globalThis.x_global = {
sec_id:"XSET",
x_files:[],
global_version:g.type_string,
padding_cull:false,
}
        globalThis.id_list = 0
        globalThis.x = []

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

document.getElementById("file_input").addEventListener("change", input_file);
document.getElementById("create_file_button").addEventListener("click", create_new_file);

function get_g_obj(is_file) {
    let name = 'not_file'
    let is_import = false
    if (is_file?.name) {
        name = is_file.name
        is_import = true
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
    };

}

function create_new_file() {

    // {
    //     game:"Motor_Mayhem_Vehicular_Combat_League",
    //     types:[
    //         {
    //             version:motor_mayhem,
    //             string:,
    //         },
    //         {},
    //     ],
    // }

    globalThis.g = get_g_obj()

    // create version array?
    choose_x_game()

    function choose_x_game() {
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
        choose_x_console()
    }

    function choose_x_console() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose console type:</div>
        <div id='pc' class="select_option_fileview">PC</div>
        <div id='gamecube' class="select_option_fileview">GameCube</div>
        <div id='xbox' class="select_option_fileview">Xbox</div>
        <div id='psp' class="select_option_fileview">PSP</div>
        <div id='ps2' class="select_option_fileview">PS2</div>
        <div id='wii' class="select_option_fileview">Wii</div>
        `
        let consoles = document.getElementsByClassName('select_option_fileview')
        for (let i = 0; i < consoles.length; i++) {
            consoles[i].addEventListener("click", choose_x_console_click);
        }

    }
    function choose_x_console_click() {
        g.console = this.id
        choose_game_type()
    }

}

function filecheck() {
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
            choose_game_type()
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
            choose_game_type()
            break
        case 183:
            switch (extension) {
            case 'xpc':
                g.type_string = "hwvx_pc"
                g.console = "pc"
                choose_game_type()
                break
            case 'xgc':
                g.type_string = "hwvx_gc"
                g.console = "gamecube"
                choose_game_type()
                break
            case 'xps':
                g.type_string = "hwvx_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            default:
                choose_x_game()
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
            choose_game_type()
            break
        case 249:
            g.type_string = "pmwr_ps2_demo"
            g.game = "pac_man_world_rally"
            g.console = "ps2"
            //demo ps2 pmwr
            choose_game_type()
            break
        case 267:
            g.game = "pac_man_world_rally"
            switch (extension) {
            case 'xgc':
                g.type_string = "pmwr_gc"
                g.console = "gamecube"
                choose_game_type()
                break
            case 'xps':
                g.type_string = "pmwr_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            case 'xpc':
                g.type_string = "pmwr_pc"
                g.console = "pc"
                choose_game_type()
                break
            default:
                choose_x_game()
            }
            break
        case 273:
            g.game = "snoopy_vs_the_red_baron"
            switch (extension) {
            case 'xps':
                g.type_string = "svtrb_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            case 'xpp':
                g.type_string = "svtrb_psp"
                g.console = "psp"
                choose_game_type()
            }
            break
        case 274:
            switch (extension) {
            case 'xpp':
                g.game = "pac_man_world_rally"
                g.type_string = "pmwr_psp"
                g.console = "psp"
                choose_game_type()
                break
            case 'xps':
                g.game = "pac_man_world_rally"
                g.type_string = "pmwr_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            case 'xpc':
                g.game = "snoopy_vs_the_red_baron"
                g.type_string = "svtrb_pc"
                g.console = "pc"
                choose_game_type()
                break
            default:
                choose_x_game()
            }
            break
        case 288:
            g.game = "bee_movie_game"
            g.type_string = "bmg_demo"
            g.console = "wii"
            //demo wii version
            choose_game_type()
            break
        case 312:
            g.game = "bee_movie_game"
            switch (extension) {
            case 'xwi':
                g.type_string = "bmg_wii"
                g.console = "wii"
                choose_game_type()
                break
            case 'xdx9':
                g.type_string = "bmg_pc"
                g.console = "pc"
                choose_game_type()
                break
            }
            break
        case 315:
            g.game = "bigfoot_collision_course"
            switch (extension) {
            case 'xwi':
                g.type_string = "bcc_wii"
                g.console = "wii"
                choose_game_type()
                break
            case 'xdx9':
                g.type_string = "bcc_pc"
                g.console = "pc"
                choose_game_type()
                break
            }
            break
        default:
            console.log(g.version)
            choose_x_game()
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
        XFA = null
        x = null
    }

    function choose_x_game() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose type of file:</div>
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
        switch (extension) {
        case 'xpc':
            g.console = "pc"
            choose_game_type()
            break
        case 'xgc':
            g.console = "gamecube"
            choose_game_type()
            break
        case 'xdx':
            g.console = "xbox"
            choose_game_type()
            break
        case 'xpp':
            g.console = "psp"
            choose_game_type()
            break
        case 'xps':
            g.console = "ps2"
            choose_game_type()
            break
        case 'xwi':
            g.console = "wii"
            choose_game_type()
            break
        case 'xdx9':
            g.console = "pc"
            choose_game_type()
            break
        default:
            choose_x_console()
            break
        }

    }

    function choose_x_console() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose console type:</div>
        <div id='pc' class="select_option_fileview">PC</div>
        <div id='gamecube' class="select_option_fileview">GameCube</div>
        <div id='xbox' class="select_option_fileview">Xbox</div>
        <div id='psp' class="select_option_fileview">PSP</div>
        <div id='ps2' class="select_option_fileview">PS2</div>
        <div id='wii' class="select_option_fileview">Wii</div>
        `
        let consoles = document.getElementsByClassName('select_option_fileview')
        for (let i = 0; i < consoles.length; i++) {
            consoles[i].addEventListener("click", choose_x_console_click);
        }

    }
    function choose_x_console_click() {
        g.console = this.id
        choose_game_type()
    }

}

function array_view_array(str_path) {

    if (str_path === "") {
        str_path = x
    }

    array_view_path(str_path)

    let html_list = ""
    let section_id = ""
    for (let i = 0; i < str_path.length; i++) {
        section_id = window[("get_" + g.type_string + "_sec_id")](str_path[i].sec_id)
        html_list += `
               <tr>
                  <td class='no_border data-array_number="${i}" noselect array_button'>${section_id} | Array ${i + 1}
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
            array_view_object(str_path[target.dataset.array_number])
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

function array_view_object(str_path) {
    console.log(str_path)
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

"use strict";
function save_file(e) {

    //calculate what type of file is being saved
    const fileName = g.file_name
    let temp_buffer
    if (x.length) {
        temp_buffer = dynamic_save()
        //Exporter/ordered/buffer.js
    } else {
        temp_buffer = buffer
        if (g.version === 'save') {
            // calculate new crc
            calculate_crc()
        }
    }

    download_file(temp_buffer, fileName)

    // const objectURL = URL.createObjectURL(new Blob([temp_buffer]));

    // const downloadLink = document.createElement("a");
    // downloadLink.href = objectURL;
    // downloadLink.download = fileName;

    // document.getElementById("_2nd_data_bar").appendChild(downloadLink);

    // // Simulate click on the download link
    // downloadLink.click();

    // // Clean up by removing the download link
    // downloadLink.remove();

    // // let objectURL = URL.createObjectURL(new Blob([temp_buffer]))

    // // let download_file = document.createElement("a")
    // // download_file.id = 'temp_download_file'
    // // download_file.href = objectURL
    // // download_file.download = name
    // // document.getElementById("_2nd_data_bar").appendChild(download_file)

    // // document.getElementById("temp_download_file").click()

    // // document.getElementById("temp_download_file").remove()
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

"use strict";

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
