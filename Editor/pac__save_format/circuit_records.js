function load_circuit_records() {

    cup_array = ['Cherry', 'Grape', 'Watermelon', 'Classic', 'Rally']

    circuit_records_html = ""
    circuit_records_import_in('Cherry')
    circuit_records_import_in('Grape')
    circuit_records_import_in('Watermelon')
    circuit_records_import_in('Classic')
    circuit_records_import_in('Rally')
    file_editor.innerHTML = circuit_records_html
    circuit_records_import_data()

}

function circuit_records_import_in(cup) {

    circuit_records_dif = ['easy', 'medium', 'hard', 'nightmare']

    circuit_records_html += `

        <div class='save_records_cup'>
        <div class='save_records_row_in'>${cup}
        </div>
        <div class='save_records_boarder'>
`

    for (circuit_records_import_in_i = 0; circuit_records_import_in_i < 4; circuit_records_import_in_i++) {

        circuit_records_html += `
                  
                <span class='save_records_row'>
               <a class='save_records_row_in'> ${circuit_records_dif[circuit_records_import_in_i]} </a> 

    <select class='save_records_row_in' title="trophy" id="trophy${circuit_records_import_in_i}${cup}">
                   <option value="0">no trophy</option>
                   <option value="1">bronze</option>
                   <option value="2">silver</option>
                   <option value="3">gold</option>
                </select>

                <select class='save_records_row_in' title='completed' type='checkbox' id='completed${circuit_records_import_in_i}${cup}'>
                <option value="0">uncompleted</option>
                <option value="1">completed</option>
                </select>


               <select class='save_records_row_in' title="character" id="char${circuit_records_import_in_i}${cup}">
                    ${character_input_options}
                </select>

               <input class='save_records_row_in' title='points' type='text' value='1000000 max' id="points${circuit_records_import_in_i}${cup}">
               
               <input class='save_records_row_in' value='time' title='time' type='text' id="time${circuit_records_import_in_i}${cup}">
               

               <select class='save_records_row_in' title="display" id="display${circuit_records_import_in_i}${cup}">
                   <option value="0">display</option>
                   <option value="1">don't display</option>
                </select>

            </span>
`

    }
    circuit_records_html += `
                                    </div>
    </div>
`
}

function circuit_records_import_data() {
    for (cup_i = 0; cup_array.length > cup_i; cup_i++) {
        cup_array[cup_i]

        for (circuit_records_import_in_i = 0; circuit_records_import_in_i < 4; circuit_records_import_in_i++) {

            document.getElementById("trophy" + circuit_records_import_in_i + cup_array[cup_i]).selectedIndex = u8(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64))
            document.getElementById("trophy" + circuit_records_import_in_i + cup_array[cup_i]).dataset.offset = save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64)
            document.getElementById("completed" + circuit_records_import_in_i + cup_array[cup_i]).selectedIndex = u8(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 1)
            document.getElementById("completed" + circuit_records_import_in_i + cup_array[cup_i]).dataset.offset = save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 1

            document.getElementById("char" + circuit_records_import_in_i + cup_array[cup_i]).value = u8(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 2);
            document.getElementById("char" + circuit_records_import_in_i + cup_array[cup_i]).dataset.offset = save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 2

            console.log(u8(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 2), 'a')

            document.getElementById("points" + circuit_records_import_in_i + cup_array[cup_i]).value = u32(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 4)
            document.getElementById("points" + circuit_records_import_in_i + cup_array[cup_i]).dataset.offset = save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 4
            document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).value = '' + msToTime(u32(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 8))
            document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).dataset.actual_time = u32(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 8)
            document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).dataset.offset = save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 8
            document.getElementById("display" + circuit_records_import_in_i + cup_array[cup_i]).selectedIndex = u32(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 12)
            document.getElementById("display" + circuit_records_import_in_i + cup_array[cup_i]).dataset.offset = save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 12

            document.getElementById("trophy" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("change", save_value_changed);
            document.getElementById("completed" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("change", save_value_changed);
            document.getElementById("char" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("change", save_value_changed);
            document.getElementById("points" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("change", save_value_changed);
            document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("change", save_value_changed);
            document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("focus", save_time_format_focus);
            document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("blur", save_time_format_blur);
            document.getElementById("display" + circuit_records_import_in_i + cup_array[cup_i]).addEventListener("change", save_value_changed);

            if (u32(save_offset.circuit + (circuit_records_import_in_i * 16) + (cup_i * 64) + 12, true) === 1) {
                document.getElementById("trophy" + circuit_records_import_in_i + cup_array[cup_i]).disabled = true
                document.getElementById("completed" + circuit_records_import_in_i + cup_array[cup_i]).disabled = true
                document.getElementById("char" + circuit_records_import_in_i + cup_array[cup_i]).disabled = true
                document.getElementById("points" + circuit_records_import_in_i + cup_array[cup_i]).disabled = true
                document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).disabled = true
                document.getElementById("time" + circuit_records_import_in_i + cup_array[cup_i]).parentNode.children[0].style.color = '#959595'
            }

        }
    }

}
