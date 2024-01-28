function save_file_import(file_name, fileextension) {

    let html
    if (u32(8, true) === 9624) {
        html = `
    <div style='display:block'>
        <a class='file_arrow' style='padding-right:4px;padding-left:4px;' id='arrow'></a><a> ⚙ </a> <a id='save_pac_folder' data-type="ghost_save_pac_folder" data-offset="0" class='file_hover_not_selected'>${file_name}</a>
    </div>`
    } else {
        html = `
    <div style='display:block'>
        <a class='file_arrow' style='padding-right:4px;padding-left:4px;' id='arrow'>↓</a><a> 🗀 </a> <a id='save_pac_folder' data-type="save_pac_folder" data-offset="0" class='file_hover_not_selected'>${file_name}</a>
            <div class='sub_file_div' style="display:block;">
                <a class='no_arrow' style='padding-right:4px;padding-left:4px;display:none;'>↓</a><a> ⚙ </a> <a  id='save_pac_save_settings' data-type="save_pac_save_settings" data-offset="0" class='file_hover_not_selected' >Save Settings</a>
            </div>
            <div class='sub_file_div'>
                <a class='no_arrow' style='padding-right:4px;padding-left:4px;display:none;'>↓</a><a> ⚙ </a> <a  id='save_pac_circuit_settings' data-type="save_pac_circuit_settings" data-offset="0" class='file_hover_not_selected'>Circuit Settings</a>
            </div>
            <div class='sub_file_div'>
                <a class='no_arrow' style='padding-right:4px;padding-left:4px;display:none;'>↓</a><a> ⚙ </a> <a  id='save_pac_time_trials' data-type="save_pac_time_trials" data-offset="0" class='file_hover_not_selected'>Time Trials</a>
            </div>
            <div class='sub_file_div'>
                <a class='no_arrow' style='padding-right:4px;padding-left:4px;display:none;'>↓</a><a> ⚙ </a> <a  id='save_pac_letter_hunt' data-type="save_pac_letter_hunt" data-offset="0" class='file_hover_not_selected'>Letter Hunt</a>
            </div>
            <div class='sub_file_div'>
                <a class='no_arrow' style='padding-right:4px;padding-left:4px;display:none;'>↓</a><a> ⚙ </a> <a id='save_pac_clockbuster' data-type="save_pac_clockbuster" data-offset="0" class='file_hover_not_selected'>Clockbuster</a>
            </div>
            <div class='sub_file_div'>
                <a class='no_arrow' style='padding-right:4px;padding-left:4px;display:none;'>↓</a><a> ⚙ </a> <a  id='save_pac_unlockables' data-type="save_pac_unlockables" data-offset="0" class='file_hover_not_selected'>Unlockables</a>
            </div>
    </div>`
    }

    document.getElementById("file_viewer").innerHTML = html

    if (document.getElementById("save_button") == null) {
        document.getElementById("data_types_bar").innerHTML += `<a data-is_active="false" class="data_bar_options" id="save_button">Save</a>`
    }
    document.getElementById("save_button").addEventListener("click", save_file);

    document.getElementById("save_pac_folder").addEventListener("click", file_click);

    if (u32(8, true) === 9624) {
        
    }else{
    document.getElementById("arrow").addEventListener("click", arrow_click);
    document.getElementById("save_pac_save_settings").addEventListener("click", file_click);
    document.getElementById("save_pac_circuit_settings").addEventListener("click", file_click);
    document.getElementById("save_pac_time_trials").addEventListener("click", file_click);
    document.getElementById("save_pac_letter_hunt").addEventListener("click", file_click);
    document.getElementById("save_pac_clockbuster").addEventListener("click", file_click);
    document.getElementById("save_pac_unlockables").addEventListener("click", file_click);
    }

    positions_array = ['1st', '2nd', '3rd', '4th', '5th']
    track_name_array = ["Cloud Garden", "Molten Mountain", "Rolling Hills", "Ghost Mansion", "Canyon Crusade", "Arctic Iceberg", "Jungle Safari", "Pirate Cove", "Winding Wetlands", "Toc-Man's Factory", "Funhouse of Terror", "Spooky's Castle", "Galactic Outpost", "King's Kourse", "Retro Maze", "Subterranean Speedway"]
    letter_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ']
    character_input_options = `
                   <option value="1">Pac-Man</option>
                   <option value="2">Blinky</option>
                   <option value="3">Pooka</option>
                   <option value="4">Toc-Man</option>
                   <option value="5">Inky</option>
                   <option value="6">Clyde</option>
                   <option value="7">Ms. Pac-Man</option>
                   <option value="8">Pinky</option>
                   <option value="9">Jr. Pac-Man</option>
                   <option value="10">Spooky</option>
                   <option value="11">Pac-Devil</option>
                   <option value="12">Erwin</option>
                   <option value="13">Fygar</option>
                   <option value="14">Mr. Driller</option>
                   <option value="15">The Prince</option>
                   <option value="16">Mappy</option>`

    is_gc = is_little_endian ? 0 : 3760;

    save_offset = {
        settings1: (16 + is_gc),
        settings2: (280 + is_gc),
        circuit: (352 + is_gc),
        time_trials: (736 + is_gc),
        letterhunt: (2016 + is_gc),
        clockbuster: (3104 + is_gc),
        unlockables: (4512 + is_gc),
    }

    document.getElementsByClassName('file_hover_not_selected')[0].click()
    document.getElementById("file_viewer").addEventListener("keydown", file_move_with_key);

    document.getElementById("file_viewer").focus();

}

function save_value_changed() {
    temp_this = this

    if (temp_this.title === 'display') {
        new DataView(buffer).setUint8(temp_this.dataset.offset, temp_this.selectedIndex)

        if (temp_this.selectedIndex === 0) {
            //unlock
            temp_this.parentElement.children[0].style.color = '#000000'
            temp_this.parentElement.children[1].disabled = false
            temp_this.parentElement.children[2].disabled = false
            temp_this.parentElement.children[3].disabled = false
            temp_this.parentElement.children[4].disabled = false
            temp_this.parentElement.children[5].disabled = false
        } else {
            //disable input
            temp_this.parentElement.children[0].style.color = '#959595'
            temp_this.parentElement.children[1].disabled = true
            temp_this.parentElement.children[2].disabled = true
            temp_this.parentElement.children[3].disabled = true
            temp_this.parentElement.children[4].disabled = true
            temp_this.parentElement.children[5].disabled = true

        }
    } else if (temp_this.id === "sfx_volume" || temp_this.id === "music_volume") {
        new DataView(buffer).setUint8(temp_this.dataset.offset, temp_this.value)

        temp_string = u8(temp_this.dataset.offset)

        document.getElementById(temp_this.id).value = temp_string

    } else if (temp_this.tagName === "SELECT") {

        new DataView(buffer).setUint8(temp_this.dataset.offset, temp_this.value)
    } else if (temp_this.type == "checkbox") {
        checked = temp_this.checked ? 0 : 1
        new DataView(buffer).setUint32(temp_this.dataset.offset, checked, is_little_endian)

    } else if (temp_this.title === "time") {

        new DataView(buffer).setUint32(temp_this.dataset.offset, temp_this.value, is_little_endian);

        temp_string = u32(temp_this.dataset.offset, is_little_endian)

        // document.getElementById(temp_this.id).value = temp_string

        console.log(temp_string)

        document.getElementById(temp_this.id).dataset.actual_time = temp_string

    } else if (temp_this.title === "letters") {

        for (letter_value_i = 0; letter_value_i < temp_this.value.length; letter_value_i++) {

            temp_index = letter_array.indexOf(temp_this.value[letter_value_i].toUpperCase())
            if (temp_index === -1) {
                temp_index = 26
            }
            new DataView(buffer).setUint8(parseInt(temp_this.dataset.offset) + letter_value_i, temp_index)

        }
        while (letter_value_i < 3) {
            new DataView(buffer).setUint8(parseInt(temp_this.dataset.offset) + letter_value_i, 26)

            letter_value_i++
        }

        temp_string = letter_array[u8(parseInt(temp_this.dataset.offset))] + letter_array[u8(parseInt(temp_this.dataset.offset) + 1)] + letter_array[u8(parseInt(temp_this.dataset.offset) + 2)]
        document.getElementById(temp_this.id).value = temp_string

    } else if (temp_this.type === "text") {
        new DataView(buffer).setUint32(temp_this.dataset.offset, temp_this.value, is_little_endian)

        temp_string = u32(temp_this.dataset.offset, is_little_endian)

        document.getElementById(temp_this.id).value = temp_string

    } else {
        new DataView(buffer).setUint32(temp_this.dataset.offset, temp_this.value, is_little_endian)
    }
}

function get_letters(temp_offset, temp_string1, temp_string2) {

    temp_string = letter_array[u8(temp_offset)] + letter_array[u8(temp_offset + 1)] + letter_array[u8(temp_offset + 2)]
    document.getElementById("letters_" + temp_string1 + "_" + temp_string2).value = temp_string
    document.getElementById("letters_" + temp_string1 + "_" + temp_string2).dataset.offset = temp_offset
    //bin to letter

}

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100)
      , seconds = Math.floor((duration / 1000) % 60)
      , minutes = Math.floor((duration / (1000 * 60)))
    return minutes + "m:" + seconds + "s." + milliseconds + "m";
}

function save_time_format_focus(e) {
    e.target.focus()
    e.target.value = e.target.dataset.actual_time
}
function save_time_format_blur(e) {
    console.log(e.target.dataset.actual_time)
    e.target.value = msToTime(e.target.dataset.actual_time)
}

function save_file_ghost_import(file_name, fileextension) {
    // u8 = (o)=>dataView.getUint8(o, is_little_endian);
    // u16 = (o)=>dataView.getUint16(o, is_little_endian);
    // u32 = (o)=>dataView.getUint32(o, is_little_endian);
    // f32 = (o)=>dataView.getFloat32(o, is_little_endian);

    document.getElementById("file_viewer").innerHTML = html

    if (document.getElementById("save_button") == null) {
        document.getElementById("data_types_bar").innerHTML += `<a data-is_active="false" class="data_bar_options" id="save_button">Save</a>`
    }
    document.getElementById("save_button").addEventListener("click", save_file);

    document.getElementById("arrow").addEventListener("click", arrow_click);
    document.getElementById("save_pac_folder").addEventListener("click", file_click);

    is_gc = 0

}
