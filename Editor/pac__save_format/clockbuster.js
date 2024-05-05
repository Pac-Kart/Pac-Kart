function load_clockbuster() {

    clockbuster_html = ""
    clockbuster_import();

    file_editor.innerHTML = clockbuster_html

    clockbuster_data();
}

function clockbuster_import() {

    for (clockbuster_i = 0; clockbuster_i < track_name_array.length; clockbuster_i++) {
        clockbuster_html += `
        <div class='save_records_time'>
            <div class='save_records_clockbuster_row'>${track_name_array[clockbuster_i]}


                <span data-debug='true'><input type='checkbox' title='locked?' id='check_${clockbuster_i}'> locked?</span>

            </div>
        <div class='save_records_boarder'>
        

`

        for (clockbuster_import_i = 0; clockbuster_import_i < 5; clockbuster_import_i++) {

            clockbuster_html += `            <span class='save_records_clockbuster_row'>
               <a class='save_records_row_in'> ${positions_array[clockbuster_import_i]} </a> 

    <select class='save_records_row_in' title="trophy" id="trophy_${clockbuster_i}_${clockbuster_import_i}">
                   <option value="0">no trophy</option>
                   <option value="1">bronze</option>
                   <option value="2">silver</option>
                   <option value="3">gold</option>
                </select>



            <select class='save_records_row_in' title="character" id="char_${clockbuster_i}_${clockbuster_import_i}">
                    ${character_input_options}
                </select>

            <input class='save_records_row_in' maxlength="3" title='letters' type='text' id='letters_${clockbuster_i}_${clockbuster_import_i}' value='abc'>

               <input class='save_records_row_in' value='points' title='points' type='text' id='points_${clockbuster_i}_${clockbuster_import_i}'>
            </span>

`
        }

        clockbuster_html += `
                                    </div>
    </div>
`
    }
}
function clockbuster_data() {
    for (clockbuster_i = 0; clockbuster_i < track_name_array.length; clockbuster_i++) {
        +(clockbuster_i * 88)
        if (u32(save_offset.clockbuster + (clockbuster_i * 88) + 4, true) === 0) {
            //unlocked
            document.getElementById("check_" + clockbuster_i).checked = true
        } else {
            //locked
            document.getElementById("check_" + clockbuster_i).checked = false
        }
        document.getElementById("check_" + clockbuster_i).dataset.offset = (save_offset.clockbuster + (clockbuster_i * 88) + 4)
        document.getElementById("check_" + clockbuster_i).addEventListener("change", save_value_changed);

        // clockbuster_offset += 8

        for (clockbuster_import_i = 0; clockbuster_import_i < 5; clockbuster_import_i++) {

            document.getElementById('trophy_' + clockbuster_i + "_" + clockbuster_import_i).selectedIndex = (u8(save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 8))
            document.getElementById('trophy_' + clockbuster_i + "_" + clockbuster_import_i).dataset.offset = (save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 8)

            document.getElementById('char_' + clockbuster_i + "_" + clockbuster_import_i).selectedIndex = (u8(save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 9))
            document.getElementById('char_' + clockbuster_i + "_" + clockbuster_import_i).dataset.offset = (save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 9)

            get_letters(save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 10, clockbuster_i, clockbuster_import_i)

            document.getElementById('points_' + clockbuster_i + "_" + clockbuster_import_i).value = (u32(save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 16 ))
            document.getElementById('points_' + clockbuster_i + "_" + clockbuster_import_i).dataset.offset = (save_offset.clockbuster + (clockbuster_i * 88) + (clockbuster_import_i * 16) + 16)

            document.getElementById('trophy_' + clockbuster_i + "_" + clockbuster_import_i).addEventListener("change", save_value_changed);
            document.getElementById('char_' + clockbuster_i + "_" + clockbuster_import_i).addEventListener("change", save_value_changed);
            document.getElementById('letters_' + clockbuster_i + "_" + clockbuster_import_i).addEventListener("change", save_value_changed);
            document.getElementById('points_' + clockbuster_i + "_" + clockbuster_import_i).addEventListener("change", save_value_changed);

            // clockbuster_offset += 16
        }

    }
}
