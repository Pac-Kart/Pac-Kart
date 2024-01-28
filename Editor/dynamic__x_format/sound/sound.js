function load_x_d_sound(id, outer_id, sub_group_index) {
    
    TXFA = Object.byString(x, id);

    let html = `<div style="overflow:hidden;height:100%"><div style="display:inline-block;width:95%;padding:5px;height:20%">
   <div>Sound Settings
      <div class='save_records_boarder'>
         <table style='width:100%;white-space:nowrap;' >
            <tbody>
               <tr>
                  <td class='no_border'>Sound Sample Rate</td>
                  <td class='no_border'><input style='width:100%;' title='Sound Sample Rate' type='text' id='Sound_Sample_Rate' value='${TXFA.soundsamplerate}' data-outer_xfa="${id}" data-inner_xfa="soundsamplerate" data-type="u32"> </td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 1</td>
                 <td class='no_border'><input style='width:100%;' title='Unknown 1' type='text' id='unknown_1' value='${TXFA.unknown1}' data-outer_xfa="${id}" data-inner_xfa="unknown1" data-type="u32"></td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 2</td>
                    <td class='no_border'> <input style='width:100%;' title='Unknown 2' type='text' id='unknown_2' value='${TXFA.unknown2}' data-outer_xfa="${id}" data-inner_xfa="unknown2" data-type="u32"></td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 3</td>
                  <td class='no_border'> <input style='width:100%;' title='Unknown 3' type='text' id='unknown_3' value='${TXFA.unknown3}' data-outer_xfa="${id}" data-inner_xfa="unknown3" data-type="u32"></td>
               </tr>
           </tbody>
        </table>
      </div>
   </div>
   </div>
   <div style="height:7%;text-align:center;border-bottom:solid 1px #9d9898;padding-right:30%;padding-left:30%;">
        <div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
           <label for="replace_sound_file" class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;' id='new_entry'>${is_new_sound()} wav</label>
           <input style='display:none;' type='file' id='replace_sound_file'><br>
       </div>
   </div>
   <div style="height:80%;text-align:center;margin-top:3%;">
   `

    html += `${generate_and_attach_wav(TXFA.sound_data[0].byteLength, TXFA.soundsamplerate)} <br><a style="color:#939393;">Byte Length: ${TXFA.sound_data[0].byteLength}</a></div>`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''
    // document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="splice_sound">X</a>'

    document.getElementById("Sound_Sample_Rate").addEventListener('change', Sound_Sample_Rate_update)
    document.getElementById("unknown_1").addEventListener('change', dyn_update_input)
    document.getElementById("unknown_2").addEventListener('change', dyn_update_input)
    document.getElementById("unknown_3").addEventListener('change', dyn_update_input)

    // document.getElementById("splice_sound").addEventListener('click', splice_entry)
    document.getElementById("replace_sound_file").addEventListener("change", replace_sound_file);

    // let input_field = file_editor.getElementsByTagName('INPUT')
    // for (let i = 0; i < input_field.length; i++) {
    //     input_field[i].addEventListener('change', dyn_update_input)
    // }

    function splice_entry() {
        let temp_xfa = Object.byString(x, outer_id);
        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
        let html = ''

        temp_xfa.splice(sub_group_index, 1)

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }

        if (temp_xfa.length === 0) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 0; i < temp_xfa.length; i++) {
                html += dynamic__sound(temp_xfa[i], i)
            }

            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)
            outer_html.children[0].click()
            outer_html.children[0].click()
        }
        if (sub_group_index === 0) {
            outer_html.children[sub_group_index + 2].click()
        } else {
            outer_html.children[sub_group_index + 2].children[2].click()
        }
        file_viewer.focus()

    }

    function Sound_Sample_Rate_update(e) {
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setUint32(0, this.value)
        new_value = new DataView(temp_buffer).getUint32(0)

        Object.byString(x, this.dataset.outer_xfa, this.dataset.inner_xfa, new_value)
        this.value = new_value

        let position = document.getElementsByClassName("file_is_highlighted")[0]
        position.click()
    }

    function replace_sound_file(event) {

        var file = event.target.files[0];
        var reader = new FileReader();

        replace_sound_buffer = reader.readAsArrayBuffer(file);

        reader.onload = function(e) {
            replace_sound_buffer = e.target.result

            if (new DataView(replace_sound_buffer).getUint32(0, true) != 1179011410) {
                console.log('not wav')
                alert('not wav')
                return
            }

            let audio_replace_channels = new DataView(replace_sound_buffer).getUint16(22, true)

            let audio_replace_sample_rate = new DataView(replace_sound_buffer).getUint32(24, true)
            // samplerate

            audio_replace_sample_rate = audio_replace_sample_rate * audio_replace_channels

            TXFA.soundsamplerate = audio_replace_sample_rate

            //get index
            // let node = document.querySelector(`tr[data-sound_row_select="true"]`)
            // let temp_index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);

            // document.getElementById("sound_table_" + temp_index).innerHTML = ""

            //get new dataview?

            for (data_i = 0,
            data_string = 0; data_string !== 1635017060; data_i++) {
                data_string = new DataView(replace_sound_buffer).getUint32(data_i, true)
            }

            wav_data_amount = new DataView(replace_sound_buffer).getUint32(data_i + 3, true)

            wav_data_end = (wav_data_amount + data_i + 7)

            replace_sound_buffer = replace_sound_buffer.slice(data_i + 7, wav_data_end)

            TXFA.sound_data[0] = replace_sound_buffer
            //replace buffer with new wav

            // old_sound_offset = old_sound_offset - offset_audio
            // generate_and_attach_wav(old_sound_offset, old_sound_length, audio_replace_sample_rate, 0)

            document.getElementsByClassName("file_is_highlighted")[0].click()

            // document.getElementById("sound_row_select_" + temp_index).click()

        }

    }

    function generate_and_attach_wav(sound_length, sound_sample_rate, data_start_offset) {
        //create wav file
        let wav_ = new ArrayBuffer(sound_length + 44)

        //wav header
        new DataView(wav_).setUint8(0, 82)
        new DataView(wav_).setUint8(1, 73)
        new DataView(wav_).setUint8(2, 70)
        new DataView(wav_).setUint8(3, 70)
        // RIFF

        new DataView(wav_).setUint32(4, wav_.byteLength - 8, true)
        //file size - 8(riff header)

        new DataView(wav_).setUint8(8, 87)
        new DataView(wav_).setUint8(9, 65)
        new DataView(wav_).setUint8(10, 86)
        new DataView(wav_).setUint8(11, 69)
        // WAVE

        new DataView(wav_).setUint8(12, 102)
        new DataView(wav_).setUint8(13, 109)
        new DataView(wav_).setUint8(14, 116)
        new DataView(wav_).setUint8(15, 32)
        // fmt.

        new DataView(wav_).setUint32(16, 16, true)
        //always 16

        new DataView(wav_).setUint16(20, 1, true)
        //1 = pcm format

        new DataView(wav_).setUint16(22, 1, true)
        //channels

        new DataView(wav_).setUint32(24, sound_sample_rate, true)
        //sample rate

        new DataView(wav_).setUint32(28, sound_sample_rate * 16 * 2 / 8, true)

        new DataView(wav_).setUint16(32, 4, true)

        new DataView(wav_).setUint16(34, 16, true)
        //bit per sample

        new DataView(wav_).setUint8(36, 100)
        new DataView(wav_).setUint8(37, 97)
        new DataView(wav_).setUint8(38, 116)
        new DataView(wav_).setUint8(39, 97)
        // data

        new DataView(wav_).setUint32(40, sound_length, true)
        //sound length

        for (let i = 0; i < sound_length; i += 2) {
            let temp = new DataView(TXFA.sound_data[0]).getUint16(i, is_little_endian)
            new DataView(wav_).setUint16(44 + i, temp, true)
        }

        let objectURL = URL.createObjectURL(new Blob([wav_]))

        let html = `<audio id='sound_play' src='${objectURL}' controls title="${objectURL}.wav"></audio>`
        return html

    }

    function is_new_sound() {
        if (TXFA.sound_data[0].byteLength === 0) {
            return "⟳ New"
        } else {
            return "⟳ replace"
        }

    }

}
