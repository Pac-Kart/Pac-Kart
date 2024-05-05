function load_letter_hunt() {
    // letter_hunt_offset = 2016
    letter_hunt_html = ""

    letter_hunt_import();

    file_editor.innerHTML = letter_hunt_html

    letter_hunt_data();
}

function letter_hunt_import() {

    for (letter_hunt_i = 0; letter_hunt_i < track_name_array.length; letter_hunt_i++) {
        letter_hunt_html += `

        <div class='save_records_time'>
        <div class='save_records_clockbuster_row'>${track_name_array[letter_hunt_i]}

                
                <span data-debug='true'><input type='checkbox' title='checkbox' id='check_${letter_hunt_i}'> locked?</span>

        </div>
        <div class='save_records_boarder'>
        

`

        for (time_trials_import_i = 0; time_trials_import_i < 5; time_trials_import_i++) {

            letter_hunt_html += `            <span class='save_records_clockbuster_row'>
               <a class='save_records_row_in'> ${positions_array[time_trials_import_i]} </a> 

    <select class='save_records_row_in' title="trophy" id="trophy_${letter_hunt_i}_${time_trials_import_i}">
                   <option value="1">bronze</option>
                   <option value="2">silver</option>
                   <option value="3">gold</option>
                </select>



            <select class='save_records_row_in' title="character" id="char_${letter_hunt_i}_${time_trials_import_i}">
                    ${character_input_options}
                </select>

            <input class='save_records_row_in' maxlength="3" title='letters' type='text' value='abc' id='letters_${letter_hunt_i}_${time_trials_import_i}'>

               <input class='save_records_row_in' value='' title='time' type='text' id='time_${letter_hunt_i}_${time_trials_import_i}'>
            </span>

`
        }

        letter_hunt_html += `
                                    </div>
    </div>
`
    }

}

function letter_hunt_data() {
    for (letter_hunt_i = 0; letter_hunt_i < track_name_array.length; letter_hunt_i++) {

        if (u32(save_offset.letterhunt + (letter_hunt_i * 68) + 4, true) === 0) {
            //unlocked
            document.getElementById("check_" + letter_hunt_i).checked = true
        } else {
            //locked
            document.getElementById("check_" + letter_hunt_i).checked = false
        }
        document.getElementById("check_" + letter_hunt_i).dataset.offset = (save_offset.letterhunt + 4) + (letter_hunt_i * 68)
        document.getElementById("check_" + letter_hunt_i).addEventListener("change", save_value_changed);

        // letter_hunt_offset += 8

        for (letter_hunt_import_i = 0; letter_hunt_import_i < 5; letter_hunt_import_i++) {

            document.getElementById('trophy_' + letter_hunt_i + "_" + letter_hunt_import_i).selectedIndex = (u8(save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 8))
            document.getElementById('trophy_' + letter_hunt_i + "_" + letter_hunt_import_i).dataset.offset = (save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 8)

            document.getElementById("char_" + letter_hunt_i + "_" + letter_hunt_import_i).selectedIndex = (u8(save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 9))
            document.getElementById("char_" + letter_hunt_i + "_" + letter_hunt_import_i).dataset.offset = (save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 9)

            get_letters(save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 10, letter_hunt_i, letter_hunt_import_i)

            document.getElementById("time_" + letter_hunt_i + "_" + letter_hunt_import_i).value = '' + msToTime(u32(save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 16 ))
            document.getElementById("time_" + letter_hunt_i + "_" + letter_hunt_import_i).dataset.actual_time = u32(save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 16 )
            document.getElementById("time_" + letter_hunt_i + "_" + letter_hunt_import_i).dataset.offset = (save_offset.letterhunt + (letter_hunt_i * 68) + (letter_hunt_import_i * 12) + 16)

            document.getElementById("trophy_" + letter_hunt_i + "_" + letter_hunt_import_i).addEventListener("change", save_value_changed);
            document.getElementById("char_" + letter_hunt_i + "_" + letter_hunt_import_i).addEventListener("change", save_value_changed);
            document.getElementById("letters_" + letter_hunt_i + "_" + letter_hunt_import_i).addEventListener("change", save_value_changed);
            document.getElementById("time_" + letter_hunt_i + "_" + letter_hunt_import_i).addEventListener("change", save_value_changed);
            document.getElementById("time_" + letter_hunt_i + "_" + letter_hunt_import_i).addEventListener("focus", save_time_format_focus);
            document.getElementById("time_" + letter_hunt_i + "_" + letter_hunt_import_i).addEventListener("blur", save_time_format_blur);

            // letter_hunt_offset += 12
        }

    }
}
