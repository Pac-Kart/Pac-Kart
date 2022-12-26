function load_time_trials() {
    time_trials_offset = 736
    time_trials_html = ""

    time_trials_import();

    document.getElementById("file_editor").innerHTML = time_trials_html

    time_trials_data();

}

function time_trials_import() {

    for (time_trials_i = 0; time_trials_i < track_name_array.length; time_trials_i++) {

        time_trials_html += `

        <div class='save_records_time'>
        <div style="white-space: nowrap;" class='save_records_time_row'>${track_name_array[time_trials_i]}

            <span> last run was a:
                <select title="fast lap" id="fast_lap${time_trials_i}">
                   <option value="0">no fast lap</option>
                   <option value="1">fast lap</option>
                </select>
            </span>
                
            <span>last runs placement:
                <select title="last runs placement" id="last_placement${time_trials_i}">
                   <option value="0">didn't place</option>
                   <option value="1">1st</option>
                   <option value="2">2nd</option>
                   <option value="3">3rd</option>
                   <option value="4">4th</option>
                   <option value="5">5th</option>
                </select>
            </span>
                
            <span data-debug="true"><input type='checkbox' title='show course in hall of fame' id='show${time_trials_i}'> show course in hall of fame</span>

        </div>
        <div class='save_records_boarder'>
            <span class='save_records_time_row'>
               <a class='save_records_row_in'> flap </a> 

                <input class='save_records_row_in' maxlength="3" title='letters' type='text' value='abc' id="letters_flap_${time_trials_i}">

                <select class='save_records_row_in' title="character" id="char_flap_${time_trials_i}">
                    ${character_input_options}
                </select>

                   <input class='save_records_row_in' value='time' title='time' type='text' id="time_flap_${time_trials_i}">
               
            </span>

`

        for (time_trials_import_i = 0; time_trials_import_i < 5; time_trials_import_i++) {

            time_trials_html += `
            <span class='save_records_time_row'>
                <a class='save_records_row_in'> ${positions_array[time_trials_import_i]} </a> 

                <input class='save_records_row_in' maxlength="3" title='letters' type='text' value='abc' id="letters_${time_trials_import_i}_${time_trials_i}">

                <select class='save_records_row_in' title="char" id="char_${time_trials_import_i}_${time_trials_i}">
                    ${character_input_options}
                </select>

                   <input class='save_records_row_in' value='time' title='time' type='text' id="time_${time_trials_import_i}_${time_trials_i}">
            </span>

`
        }

        time_trials_html += `
                                    </div>
    </div>
`
    }
}

function time_trials_data() {
    for (time_trials_i = 0; time_trials_i < track_name_array.length; time_trials_i++) {

        if (u32(save_offset.time_trials + (time_trials_i * 80), true) === 0) {
            //unlocked
            document.getElementById("show" + time_trials_i).checked = true
        } else {
            //locked
            document.getElementById("show" + time_trials_i).checked = false
        }
        document.getElementById("show" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80))

        document.getElementById("fast_lap" + time_trials_i).selectedIndex = u8(save_offset.time_trials + (time_trials_i * 80) + 9)
        document.getElementById("fast_lap" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80) + 9)
        document.getElementById("last_placement" + time_trials_i).selectedIndex = u8(save_offset.time_trials + (time_trials_i * 80) + 10)
        document.getElementById("last_placement" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80) + 10)

        //flap
        get_letters(save_offset.time_trials + (time_trials_i * 80) + 11, "flap", time_trials_i)

        document.getElementById("char_flap_" + time_trials_i).selectedIndex = (u8(save_offset.time_trials + (time_trials_i * 80) + 14))
        document.getElementById("char_flap_" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80) + 14)
        document.getElementById("time_flap_" + time_trials_i).value = '' + msToTime(u32(save_offset.time_trials + (time_trials_i * 80) + 16, is_little_endian))
        document.getElementById("time_flap_" + time_trials_i).dataset.actual_time = (u32(save_offset.time_trials + (time_trials_i * 80) + 16, is_little_endian))
        document.getElementById("time_flap_" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80) + 16)

        document.getElementById("show" + time_trials_i).addEventListener("change", save_value_changed);
        document.getElementById("fast_lap" + time_trials_i).addEventListener("change", save_value_changed);
        document.getElementById("last_placement" + time_trials_i).addEventListener("change", save_value_changed);
        document.getElementById("letters_flap_" + time_trials_i).addEventListener("change", save_value_changed);
        document.getElementById("char_flap_" + time_trials_i).addEventListener("change", save_value_changed);
        document.getElementById("time_flap_" + time_trials_i).addEventListener("change", save_value_changed);
        document.getElementById("time_flap_" + time_trials_i).addEventListener("focus", save_time_format_focus);
        document.getElementById("time_flap_" + time_trials_i).addEventListener("blur", save_time_format_blur);

        // time_trials_offset += 20

        for (time_trials_import_i = 0; time_trials_import_i < 5; time_trials_import_i++) {

            get_letters(save_offset.time_trials + (time_trials_i * 80) + (time_trials_import_i * 12) + 24, time_trials_import_i, time_trials_i)

            document.getElementById("char_" + time_trials_import_i + "_" + time_trials_i).selectedIndex = (u8(save_offset.time_trials + (time_trials_i * 80) + (time_trials_import_i * 12) + 27))
            document.getElementById("char_" + time_trials_import_i + "_" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80) + (time_trials_import_i * 12) + 27)

            document.getElementById("time_" + time_trials_import_i + "_" + time_trials_i).value = '' + msToTime(u32(save_offset.time_trials + (time_trials_i * 80) + (time_trials_import_i * 12) + 28, is_little_endian))
            document.getElementById("time_" + time_trials_import_i + "_" + time_trials_i).dataset.actual_time = u32(save_offset.time_trials + (time_trials_i * 80) + (time_trials_import_i * 12) + 28, is_little_endian)
            document.getElementById("time_" + time_trials_import_i + "_" + time_trials_i).dataset.offset = (save_offset.time_trials + (time_trials_i * 80) + (time_trials_import_i * 12) + 28)

            document.getElementById("letters_" + time_trials_import_i + "_" + time_trials_i).addEventListener("change", save_value_changed);
            document.getElementById("char_" + time_trials_import_i + "_" + time_trials_i).addEventListener("change", save_value_changed);
            document.getElementById("time_" + time_trials_import_i + "_" + time_trials_i).addEventListener("change", save_value_changed);
            document.getElementById("time_" + time_trials_import_i + "_" + time_trials_i).addEventListener("focus", save_time_format_focus);
            document.getElementById("time_" + time_trials_import_i + "_" + time_trials_i).addEventListener("blur", save_time_format_blur);

            +(time_trials_import_i * 12)
            // time_trials_offset += 12
        }

    }
}
