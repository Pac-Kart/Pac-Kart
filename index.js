function load_main_page() {

    document.getElementById("show_debug").addEventListener("click", check_debug_box);

    document.getElementById("file_input").addEventListener("change", input_file);

    document.getElementById("drag_bar").addEventListener("mousedown", drag_bar);

}
function mouseMoveListener(e) {

    // console.log(e.pageX)

    mouse_offset = e.pageX
    outer_box_offset = file_viewer.getBoundingClientRect().left

    left_box = (mouse_offset - outer_box_offset) / outer_program.getBoundingClientRect().width * 99.5

    right_box = 99.5 - left_box

    if (right_box > 6 && left_box > 6) {
        file_viewer.style.width = left_box + "%"
        file_editor.style.width = right_box + "%"
    }
}

function drag_bar(e) {
    // console.log(e)
    document.body.style.userSelect = "none"
    window.addEventListener('mousemove', mouseMoveListener, true);
    window.addEventListener('mouseup', mouseUpListener, true);

}
function mouseUpListener(e) {
    console.log('mouse up');
    window.removeEventListener('mousemove', mouseMoveListener, true);
    document.body.style.userSelect = ""
}

function file_move_with_key(e) {
    e.preventDefault()
    position = document.getElementsByClassName("file_is_highlighted")[0]

    if (e.key === 'ArrowDown') {

        // const index = [...position.parentElement.parentElement].indexOf(position);
        // console.log(index)

        if (position.parentElement.children[0].innerHTML == '↓' && position.parentElement.children[0].classList[0] != 'no_arrow') {
            // try to go in
            // position.nextElementSibling.style.display == 'block';
            if (position.nextElementSibling.style.display == 'block') {
                if (position.nextElementSibling.children[2].tagName == "DIV") {
                    position.nextElementSibling.children[0].children[2].click()
                } else {
                    position.nextElementSibling.children[2].click()
                }
            }
        } else if (position.parentElement.nextElementSibling != null) {
            //go mid
            position.parentElement.nextElementSibling.children[2].click()
        } else if (position.parentElement.nextElementSibling == null) {

            let div = position.parentElement

            go_down(div)

            // position.parentElement.parentElement.nextElementSibling
            // go out
        }

    }

    if (e.key === 'ArrowUp') {

        if (position.parentElement.parentElement.id == 'file_viewer') {// top level
        } else {
            go_up(position)
        }

    }
    if (e.key === 'ArrowLeft') {
        // console.log('test')
        if (position.parentElement.children[0].innerHTML == '↓') {
            position.parentElement.children[0].click()
        }
    }
    if (e.key === 'ArrowRight') {
        if (position.parentElement.children[0].innerHTML == '→') {
            position.parentElement.children[0].click()
        }
    }

    position = document.getElementsByClassName("file_is_highlighted")[0]
    position.scrollIntoView()

}

function go_up(div) {
    // console.log(div.parentElement)
    // console.log(div.parentElement)
    // console.log(div.parentElement.previousElementSibling)
    if (div.parentElement.previousElementSibling.classList.contains('file_hover_not_selected')) {

        // console.log('get below / above')
        div.parentElement.previousElementSibling.click()

    } else if (div.parentElement.previousElementSibling.classList.contains('sub_file_div')) {
        if (div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].tagName == "A") {
            // console.log('go same / no inner', div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1])
            div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].click()
        } else {
            if (div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].style.display == "block") {
                is_end = false
                temp_element = div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1]

                while (is_end === false) {

                    if (temp_element.children[temp_element.children.length - 1].style.display == 'block') {
                        temp_element = temp_element.children[temp_element.children.length - 1]
                    } else {
                        temp_element.children[2].click()
                        is_end = true
                    }
                }
                // console.log('go in', div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].children[2])

                // go_down(div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length-1].children[2])
            } else {
                // console.log('go same')
                div.parentElement.previousElementSibling.children[2].click()
            }
        }

    }
}

function go_down(div) {
    // console.log(div)
    if (div.parentElement.id == 'file_viewer') {
        return
    } else if (div.parentElement.nextElementSibling == null) {
        go_down(div.parentElement)
    } else {
        div.parentElement.nextElementSibling.children[2].click()
    }

}

load_main_page()

function atach_file_to_file_viewer(region, type, index, unknown, amount_bytes, file_offset, id) {

    let file_type_name = ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music']

    type = file_type_name[type]

    let div = document.createElement("div")

    div.className = 'file noselect'
    div.dataset.region = region
    div.dataset.index = index
    div.dataset.unknown = unknown
    div.dataset.file_bytes = amount_bytes
    div.dataset.file_offset = file_offset
    div.dataset.file = (1 + id)
    div.dataset.type = type
    div.dataset.file_select = 'false'
    div.addEventListener("click", load_file__, false);
    div.append('🗎 ' + (1 + id) + " " + type)

    document.getElementById("file_view").append(div)
}

function atach_folder_to_file_viewer(file_name, extension, region, files) {

    let div = document.createElement("div")

    div.className = 'folder noselect'
    div.style.wordBreak = 'break-all'
    div.dataset.file = file_name
    div.dataset.type = extension
    div.dataset.region_number = region
    div.dataset.number_files = files
    div.append('🗀 ' + file_name)

    document.getElementById("file_viewer").append(div)
}

function input_file(event) {

    // get file name/extension

    var filename = document.getElementsByTagName("input")[0].files[0].name
    fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    fileextension = fileextension.toLowerCase()

    file = event.target.files[0];
    var reader = new FileReader();

    buffer = reader.readAsArrayBuffer(file);

    document.getElementById("file_input").value = ''

    reader.onload = function(e) {

        buffer = e.target.result
        u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
        u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
        u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
        f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

        document.getElementById("file_viewer").textContent = ''
        document.getElementById("file_editor").textContent = ''

        // check magic
        if (u32(0, true) == 33620128) {
            is_little_endian = true
        } else if (u32(0, true) == 2684354818) {
            is_little_endian = false
        } else if (u32(4, true) == 4 /* && u32(12, true) == 0*/
        ) {
            //pc save file
            is_little_endian = true;
            save_file_import(filename, fileextension)
            return;
        } else if (u16(0, true) === 14407 && u32(64, true) === 761487696) {
            //gc save file
            is_little_endian = false;
            save_file_import(filename, fileextension)
            return;
        } else {
            wrong_file_type()
            return
        }

        // document.getElementById("save_button").addEventListener("click", save_buffer);

        //any file past here is a .x* file

        document.getElementById("file_viewer").innerHTML = `
        <div data-file_name="${filename}" data-file_name="${fileextension}" style="width: 90%;text-align: center;"">choose type of file:</div>
        <div id='hot_wheels_velocity_x' class="data_bar_options" style="width: 85%;">Hot Wheels Velocity X</div>     
        <div id='snoopy_vs_the_red_baron' class="data_bar_options" style="width: 85%;">Snoopy vs The Red Baron</div>
        <div id='pac_man_world_rally' class="data_bar_options" style="width: 85%;">Pac Man World Rally</div>
        <div id='bigfoot_collision_course' class="data_bar_options" style="width: 85%;">Bigfoot: Collision Course</div>
        `
        document.getElementById("hot_wheels_velocity_x").addEventListener("click", choose_file_type);
        document.getElementById("snoopy_vs_the_red_baron").addEventListener("click", choose_file_type);
        document.getElementById("pac_man_world_rally").addEventListener("click", choose_file_type);
        document.getElementById("bigfoot_collision_course").addEventListener("click", choose_file_type);

        // var region_numer = u32(8, is_little_endian)
        // var number_files = u32(12, is_little_endian)

        // atach_folder_to_file_viewer(filename, fileextension, region_numer, number_files)

        // for (files_i = 0; files_i < number_files; files_i++) {
        //     var offset = (files_i * 24) + 16

        //     var region = u32(offset + 0, is_little_endian)
        //     var type = u32(offset + 4, is_little_endian)
        //     var index = u32(offset + 8, is_little_endian)
        //     var unknown = u32(offset + 12, is_little_endian)
        //     var amount_bytes = u32(offset + 16, is_little_endian)
        //     var file_offset = u32(offset + 20, is_little_endian)

        //     atach_file_to_file_viewer(region, type, index, unknown, amount_bytes, file_offset, files_i)
        // }

    }

}

function choose_file_type() {
    if (document.getElementById("save_button") == null) {
        document.getElementById("data_types_bar").innerHTML += `<a data-is_active="false" class="data_bar_options" id="save_button">Save</a>`
    }

    document.getElementById("save_button").addEventListener("click", save_buffer);

    game = this.id

    let html = get_x_file_list(this.id, this.parentNode.children[0].dataset.file_name)

    document.getElementById("file_viewer").innerHTML = html

    // now addEventListener
    x_addEventListener();

    document.getElementsByClassName('file_hover_not_selected')[0].click()

    document.getElementById("file_viewer").addEventListener("keydown", file_move_with_key);

    document.getElementById("file_viewer").focus();
}

function wrong_file_type() {
    alert('wrong file type')
    buffer = null
    u8 = null
    u16 = null
    u32 = null
    f32 = null
}

function load_file__() {

    region = this.dataset.region
    file_type = this.dataset.type
    file_index = this.dataset.index
    _0usually = this.dataset.unknown
    number_of_bytes = this.dataset.file_bytes
    offset = this.dataset.file_offset

    index = this.dataset.file - 1
    file = document.body.getElementsByClassName("folder")[0].dataset.type
    number_files = document.body.getElementsByClassName("folder")[0].dataset.number_files
    game = document.querySelector('input[name="a"]:checked').id

    get_offset()

    console.log(`
                 region ${region} 
                 file type: ${file_type}
                 file index: ${file_index}
                 0 usually: ${_0usually}
                 number of bytes: ${number_of_bytes}
                 offset: ${offset}
                 
                 file: ${file}
                 game: ${game}
                 number files ${number_files}
               `)

    for (files_i = 0; files_i < number_files; files_i++) {
        document.getElementsByClassName("file")[files_i].dataset.file_select = 'false'
    }
    document.getElementsByClassName("file")[index].dataset.file_select = 'true'

    _3_00__offset__end_file_offset_list = u32(offset + 00, is_little_endian)
    _3_04__offset__end_sound_offset_list = u32(offset + 04, is_little_endian)
    number_sounds = u32(offset + 08, is_little_endian)
    _3_12__unknown = u32(offset + 12, is_little_endian)
    _3_16__amount__end_sound_list = u32(offset + 16, is_little_endian)
    _3_20__amount__btf_textures = u32(offset + 20, is_little_endian)
    _3_24__offset__btf_textures = u32(offset + 24, is_little_endian)
    _3_28__unknown = u32(offset + 28, is_little_endian)
    _3_32__amount__sound_offset = u32(offset + 32, is_little_endian)
    _3_36__always__0 = u32(offset + 36, is_little_endian)
    _3_40__always__0 = u32(offset + 40, is_little_endian)
    _3_44__always__0 = u32(offset + 44, is_little_endian)
    _3_48__unknown = u32(offset + 48, is_little_endian)
    _3_52__unknown = u32(offset + 52, is_little_endian)
    _3_56__amount__animation_unknown = u32(offset + 56, is_little_endian)
    _3_60__offset__start_animation = u32(offset + 60, is_little_endian)
    _3_64__ = u32(offset + 64, is_little_endian)
    _3_68__ = u32(offset + 68, is_little_endian)
    _3_72__ = u32(offset + 72, is_little_endian)
    _3_76__ = u32(offset + 76, is_little_endian)
    _3_80__ = u32(offset + 80, is_little_endian)
    _3_84__ = u32(offset + 84, is_little_endian)
    _3_88__ = u32(offset + 88, is_little_endian)
    _3_92__ = u32(offset + 92, is_little_endian)
    _3_96__ = u32(offset + 96, is_little_endian)
    _3_100__ = u32(offset + 100, is_little_endian)
    _3_104__ = u32(offset + 104, is_little_endian)
    _3_108__ = u32(offset + 108, is_little_endian)
    _3_112__ = u32(offset + 112, is_little_endian)
    _3_116__ = u32(offset + 116, is_little_endian)
    _3_120__ = u32(offset + 120, is_little_endian)
    _3_124__ = u32(offset + 124, is_little_endian)

    get_offset_to_sounds()

    get_offset_to_mid()

    console.log(offset_mid, "mid")

    append_buttons_to_main_program()

}

function get_offset_to_mid() {

    if (file_type == "geometry") {
        offset_mid = ((number_sounds + _3_40__always__0 + _3_28__unknown) * 8) + (_3_04__offset__end_sound_offset_list * 4)
        while (offset_mid % 32 !== 0) {
            offset_mid++
        }
        offset_mid = offset_mid + offset
    } else {

        sound_offset_array = []
        for (number_sounds_i = 0; number_sounds_i < number_sounds; number_sounds_i++) {
            sound_offset_array.push(u32(offset + (number_sounds_i * 4), is_little_endian))
        }

        while ((number_sounds_i * 4) % 32 !== 0) {
            number_sounds_i++
        }

        offset_audio = (number_sounds_i * 4) + offset

        _3_04__offset__end_sound_offset_list + offset_audio

        console.log(_3_04__offset__end_sound_offset_list + offset_audio)
        //get to main offset
        offset_mid = (_3_28__unknown + _3_16__amount__end_sound_list + _3_52__unknown) * 8
        while (offset_mid % 32 !== 0) {
            offset_mid++
        }
        offset_mid = offset_mid + _3_04__offset__end_sound_offset_list + offset_audio

        if (file == "xps") {
            xps_i = 0;
            while ((offset_audio + _3_04__offset__end_sound_offset_list + xps_i) % 2048 !== 0) {
                xps_i += 1
            }
            offset_mid = offset_mid + xps_i
        }
    }
}

function get_offset() {

    let header_offset = (u32(12, is_little_endian) * 24) + 16

    offset = header_offset + Number(offset)

}

function get_offset_to_sounds() {
    if (file == "xps") {
        offset += 2048
    } else if (file == "xpp") {
        offset += 128
    } else if (game == "baron") {
        offset += 128
    } else if (file_type == "geometry") {
        offset += 84
    } else {
        offset += 120
    }

}

function append_buttons_to_main_program() {
    document.getElementById("main_program").innerHTML = `
        <div class='data_types_bar noselect' id='data_types_bar'></div>
        <div style='display:flex;' id='outer_program'>
        </div>
        `
    if (file_type == "car" || file_type == "interface") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__audio_button'>${number_sounds} sounds </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__model_button'>models </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__animation_button'>animations </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__texture_button'>${_3_20__amount__btf_textures} textures </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

    `
        document.getElementById("main_program__audio_button").addEventListener("click", load_audio);
        document.getElementById("main_program__model_button").addEventListener("click", load_models);
        document.getElementById("main_program__animation_button").addEventListener("click", load_animations);
        document.getElementById("main_program__texture_button").addEventListener("click", load_textures);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    } else if (file_type == "item" || file_type == "share") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__audio_button'>${number_sounds} sounds </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__model_button'>models </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__texture_button'>${_3_20__amount__btf_textures} textures </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

  `
        document.getElementById("main_program__audio_button").addEventListener("click", load_audio);
        document.getElementById("main_program__model_button").addEventListener("click", load_models);
        document.getElementById("main_program__texture_button").addEventListener("click", load_textures);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    } else if (file_type == "link" || file_type == "world texture") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__texture_button'>${_3_20__amount__btf_textures} textures </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

  `
        document.getElementById("main_program__texture_button").addEventListener("click", load_textures);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    } else if (file_type == "world") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__audio_button'>${number_sounds} sounds </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__collision_button'> collision </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__world_options_button'> world options </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__model_button'>models </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__animation_button'>animations </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__texture_button'>${_3_20__amount__btf_textures} textures </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

    `
        document.getElementById("main_program__audio_button").addEventListener("click", load_audio);
        document.getElementById("main_program__collision_button").addEventListener("click", load_collision);
        document.getElementById("main_program__world_options_button").addEventListener("click", load_world_options);
        document.getElementById("main_program__model_button").addEventListener("click", load_models);
        document.getElementById("main_program__animation_button").addEventListener("click", load_animations);
        document.getElementById("main_program__texture_button").addEventListener("click", load_textures);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    } else if (file_type == "colliders") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__audio_button'>${number_sounds} sounds </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__collision_button'> collision </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__texture_button'>${_3_20__amount__btf_textures} textures </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

    `
        document.getElementById("main_program__audio_button").addEventListener("click", load_audio);
        document.getElementById("main_program__collision_button").addEventListener("click", load_collision);
        document.getElementById("main_program__texture_button").addEventListener("click", load_textures);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    } else if (file_type == "geometry") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__model_button'>models </a>
    `
        document.getElementById("main_program__model_button").addEventListener("click", load_models);

    } else if (file_type == "audio") {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__audio_button'>${number_sounds} sounds </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

    `
        document.getElementById("main_program__audio_button").addEventListener("click", load_audio);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    } else {
        document.getElementById("data_types_bar").innerHTML = `
    <a data-is_active='false' class='data_bar_options' id='main_program__music_button'> music </a>
    <a data-is_active='false' class='data_bar_options' id='main_program__logic_button'> logic </a>

    `
        document.getElementById("main_program__music_button").addEventListener("click", load_music);
        document.getElementById("main_program__logic_button").addEventListener("click", load_logic);

    }

    document.getElementById("main_program").style.overflowY = "auto"

}

class bitArray {
    constructor(length) {
        this.backingArray = Array.from({
            length: Math.ceil(length / 32)
        }, ()=>0)
        this.length = length
    }
    get(n) {
        return (this.backingArray[n / 32 | 0] & 1 << n % 32) > 0
    }
    on(n) {
        this.backingArray[n / 32 | 0] |= 1 << n % 32
    }
    off(n) {
        this.backingArray[n / 32 | 0] &= ~(1 << n % 32)
    }
    toggle(n) {
        this.backingArray[n / 32 | 0] ^= 1 << n % 32
    }
    forEach(callback) {
        this.backingArray.forEach((number,container)=>{
            const max = container == this.backingArray.length - 1 ? this.length % 32 : 32
            for (let x = 0; x < max; x++) {
                callback((number & 1 << x) > 0, 32 * container + x)
            }
        }
        )
    }
}

function check_if_other_element_loaded(tag) {
    if (tag.dataset.is_active == 'true') {
        return temp_flag = "false"
    }

    for (var i = 0; i < document.getElementsByClassName("data_bar_options").length; i++) {
        document.getElementsByClassName("data_bar_options")[i].dataset.is_active = 'false'
    }

    tag.dataset.is_active = 'true'
    temp_flag = "true"
}

function load_inner_program_table(id) {
    var table = document.createElement('table');
    table.className = 'binary_table noselect'
    table.style.textAlign = 'center'

    if (id == 'main_program__audio_button') {

        table.innerHTML = `
                      <thead>
                          <tr>
                              <th>index</th>
                              <th>sound</th>
                          </tr>
                      </thead>
    `

        table.createTBody()

        for (let temp_i = 0; temp_i < number_sounds; temp_i++) {

            table.getElementsByTagName("tbody")[0].innerHTML += `<tr data-sound_row_select='false' class='sound_row_select' id='sound_row_select_${temp_i}'>
        <td> ${temp_i + 1} </td>
        <td id='sound_table_${temp_i}'></td>
    </tr>`
        }

    } else if (id == 'main_program__texture_button') {

        if (file == 'xps' || file == "xpp") {
            document.getElementById("inner_program").innerHTML += "warning some texture formats are unknown"
        }

        table.innerHTML = `
                      <thead>
                          <tr>
                              <th>index</th>
                              <th>name</th>
                          </tr>
                      </thead>
    `
        table.createTBody()

        for (let temp_i = 0; temp_i < _3_20__amount__btf_textures; temp_i++) {

            table.getElementsByTagName("tbody")[0].innerHTML += `<tr data-sound_row_select='false' class='sound_row_select' id='texture_row_select_${temp_i}'>
        <td> ${temp_i + 1} </td>
        <td id='texture_table_${temp_i}'></td>
    </tr>`
        }

    }

    table.innerHTML += `</tbody>`

    document.getElementById("inner_program").appendChild(table);

}

function isNumeric(str) {
    if (typeof str != "string")
        return false
    // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
    // ...and ensure strings of whitespace fail
}

function save_buffer() {

    if (buffer == null) {} else {

        if (fileextension == 'sav') {
            // calculate new crc
            calculate_crc()
        }

        var objectURL = URL.createObjectURL(new Blob([buffer]))

        let download_file = document.createElement("a")
        download_file.id = 'temp_download_file'
        download_file.href = objectURL
        download_file.download = file.name
        document.getElementById("save_button").appendChild(download_file)

        document.getElementById("temp_download_file").click()

        document.getElementById("temp_download_file").remove()

    }

}
function check_debug_box() {

    if (document.getElementById("show_debug").checked == true) {

        document.getElementById("debug_style").innerHTML = `[data-debug="true"]{
    display:block;
}
`
    } else {

        document.getElementById("debug_style").innerHTML = `[data-debug="true"]{
    display:none;
}
`
    }
}
document.getElementById("show_debug").addEventListener("click", check_debug_box);
