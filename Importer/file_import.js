#! fires whenever New File is clicked
"use strict";
async function input_file(event) {
    const files = event.currentTarget.files;
    const lastFileIndex = files.length - 1;
    for (let i = 0; i < files.length; i++) {

        globalThis.g = {
            debug: true,
            divisible_prev_value: 0,
            game: 0,
            console: 0,
            version: 0,
            file_name: files[i].name,
            endian: true
        };

        await readAFile(files[i], g, i, lastFileIndex);

    }

    function readAFile(file, g, currentIndex, lastIndex) {
        return new Promise((resolve,reject)=>{

            const reader = new FileReader();

            reader.onload = function(e) {
                globalThis.buffer = e.target.result

                g.file_name = file.name

                document.getElementById("file_input").value = ''

                const dataView = new DataView(buffer);

                globalThis.u8 = (o)=>dataView.getUint8(o, g.endian);
                globalThis.u16 = (o)=>dataView.getUint16(o, g.endian);
                globalThis.u32 = (o)=>dataView.getUint32(o, g.endian);
                globalThis.f32 = (o)=>dataView.getFloat32(o, g.endian);

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
    const validConsoles = ['pc'];

    //get_x_static = Importer/static_spider.js
    //im_x = Importer/ordered/x.js

    if (validConsoles.includes(g.console)) {
        if (g.game === "pac_man_world_rally" && g.version !== 249) {
            if (pk_debug && show_debug.checked) {
                html = get_x_static(g.file_name, false);
                alert('bruh')
            } else {
                im_x();

                html = dynamic__x_generator();

                delete globalThis.f32;
                delete globalThis.u32;
                delete globalThis.u16;
                delete globalThis.u8;
                delete globalThis.buffer;
            }
        } else {
            html = get_x_static(g.file_name, false);
        }
    } else {
        html = get_x_static(g.file_name, false);
    }

    file_viewer.innerHTML = html;

    document.getElementsByClassName('file_hover_not_selected')[0].click();
    file_viewer.focus();

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
