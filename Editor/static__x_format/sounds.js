function load_audio(offset, data_offset, data_start_offset) {
    offset_audio = offset

    offset_sound_section = offset

    load_edit_sound(offset, data_offset, data_start_offset)

}

function load_edit_sound(offset, data_offset, data_start_offset) {

    i_offset = offset

    sound_offset = u32(i_offset, g.endian)
    sound_length = u32(i_offset + 4, g.endian)
    sound_ff_ff_ff_ff = u32(i_offset + 8, g.endian)
    sound_sample_rate = u32(i_offset + 12, g.endian)
    sound_16 = u32(i_offset + 16, g.endian)
    sound_20 = u16(i_offset + 20, g.endian)
    sound_22 = u16(i_offset + 22, g.endian)
    sound_24 = u32(i_offset + 24, g.endian)
    sound_28 = u32(i_offset + 28, g.endian)

    let html = `<div style="overflow:hidden;height:100%"><div style="display:inline-block;width:95%;padding:5px;padding-bottom:20px">
   <div>Sound Settings
      <div class='save_records_boarder'>
         <table style='width:100%;white-space:nowrap;' >
            <tbody>
               <tr>
                  <td   class='no_border'>Offset</td>
                  <td   class='no_border'><input disabled style='width:100%;' title='Sound Sample Rate' type='text' id='sound_box_offset' value='${sound_offset}' data-offset='${i_offset}' data-type="u32"> </td>
               </tr>
               <tr>
                  <td class='no_border'>Length</td>
                  <td class='no_border'><input disabled style='width:100%;' title='sound_box_length' type='text' id='sound_box_length' value='${sound_length}' data-offset='${i_offset + 4}' data-type="u32"> </td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 08</td>
                 <td class='no_border'><input style='width:100%;' title='Unknown 08' type='text' id='sound_box_ff' value='${sound_ff_ff_ff_ff}' data-offset='${i_offset + 8}'data-type="u32"></td>
               </tr>
               <tr>
                  <td class='no_border'>Sound Sample Rate</td>
                  <td class='no_border'><input style='width:100%;' title='Sound Sample Rate' type='text' id='sound_box_sample_rate' value='${sound_sample_rate}' data-offset='${i_offset + 12}'data-type="u32"> </td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 16</td>
                 <td class='no_border'><input style='width:100%;' title='Unknown 16' type='text' id='sound_box_16' value='${sound_16}' data-offset='${i_offset + 16}' data-type="u32"></td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 20</td>
                    <td class='no_border'> <input style='width:100%;' title='Unknown 20' type='text' id='sound_box_20' value='${sound_20}'data-offset='${i_offset + 20}' data-type="u16"></td>
               </tr>
               <tr>
                  <td class='no_border'>Unknown 22</td>
                  <td class='no_border'> <input style='width:100%;' title='Unknown 22' type='text' id='sound_box_22' value='${sound_22}' data-offset='${i_offset + 22}' data-type="u16"></td>
               </tr>
               <tr  >
                  <td class='no_border'>Unknown 24</td>
                  <td class='no_border'> <input style='width:100%;' title='Unknown 24' type='text' id='sound_box_24' value='${sound_24}' data-offset='${i_offset + 24}' data-type="u32"></td>
               </tr>
               <tr  >
                  <td class='no_border'>Unknown 28</td>
                  <td class='no_border'> <input style='width:100%;' title='Unknown 28' type='text' id='sound_box_28' value='${sound_28}' data-offset='${i_offset + 28}' data-type="u32"></td>
               </tr>
           </tbody>
        </table>
      </div>
   </div>
   </div>`
    if (g.console === 'ps2' || g.console == "psp") {
        html += `<div style="text-align: center;padding:5px;">⚠️ warning PSP/PS2 format is not currently parsed correctly</div>`
    }
    html += `<div style="height:7%;text-align:center;border-bottom:solid 1px #9d9898;padding-right:30%;padding-left:30%;">
        <div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]">
           <label for="replace_sound_file" class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;' id='new_entry'>⟳ replace wav</label>
           <input style='display:none;' type='file' id='replace_sound_file'><br>
       </div></div>
   <div style="height:80%;text-align:center;margin-top:3%;">
   `

    html += load_wav(offset, data_offset, data_start_offset)
    html += `<br><a style="color:#939393;">Byte Length: ${sound_length}</a></div>`

    // get values from sound
    file_editor.innerHTML = html

    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', update_input)
    }

    document.getElementById("replace_sound_file").addEventListener("change", load_replace_sound_file);
    document.getElementById("sound_box_sample_rate").addEventListener("change", load_save_sound_file);

}

function load_wav(offset, data_offset, data_start_offset) {
    let html = ''
    i_offset = offset

    sound_offset = u32(i_offset, g.endian)
    sound_length = u32(i_offset + 4, g.endian)
    sound_sample_rate = u32(i_offset + 12, g.endian)
    return generate_and_attach_wav(sound_offset, sound_length, sound_sample_rate, 0, data_offset, data_start_offset)

}

function change_sound_offset() {

    if (sound_box_offset.value >= 0) {
        if (sound_box_length.value >= 0) {

            start_sound_offset_value = Number(offset_audio) + Number(sound_box_offset.value)
            end_sound_offset_value = Number(sound_box_length.value) + start_sound_offset_value

            if (this.id == 'sound_box_offset') {} else if (this.id == 'sound_box_length') {
                document.getElementById("end_sound_offset").innerText = ''

                document.getElementById("end_sound_offset").innerText = end_sound_offset_value

            }
        }
    }
}

function load_replace_sound_file(event) {

    var file = event.target.files[0];
    var reader = new FileReader();

    replace_sound_buffer = reader.readAsArrayBuffer(file);

    reader.onload = function(e) {
        replace_sound_buffer = e.target.result

        if (new DataView(replace_sound_buffer).getUint32(0, true) != 1179011410) {
            alert('not wav, 0x00 magic is diff ')
            return
        }

        let audio_replace_channels = new DataView(replace_sound_buffer).getUint16(22, true)

        let audio_replace_sample_rate = new DataView(replace_sound_buffer).getUint32(24, true)
        // samplerate

        audio_replace_sample_rate = audio_replace_sample_rate * audio_replace_channels

        //get index
        offset_audio_replace = offset_sound_section

        new DataView(buffer).setUint32(offset_audio_replace + 12, audio_replace_sample_rate, g.endian)

        //get offset /lengtyh box
        old_sound_offset = document.getElementById("sound_box_offset").value
        old_sound_length = document.getElementById("sound_box_length").value

        old_sound_offset = Number(old_sound_offset) + offset_audio

        for (data_i = 0,
        data_string = 0; data_string !== 1635017060; data_i++) {
            data_string = new DataView(replace_sound_buffer).getUint32(data_i, true)
        }

        wav_data_amount = new DataView(replace_sound_buffer).getUint32(data_i + 3, true)

        wav_data_end = (wav_data_amount + data_i + 7)

        replace_sound_buffer = replace_sound_buffer.slice(data_i + 7, wav_data_end)

        temp_sound_buffer = new ArrayBuffer(old_sound_length)
        temp_sound_buffer = replace_sound_buffer

        //replace buffer with new wav

        if (replace_sound_buffer.byteLength > old_sound_length) {

            for (ii_length = 0; ii_length < old_sound_length; ii_length += 2) {
                let temp = new DataView(temp_sound_buffer).getUint16(ii_length, true)
                new DataView(buffer).setUint16(old_sound_offset + ii_length, temp, g.endian)
            }
            alert("the sound imported is longer\nthan the current sound\nit may be cutoff!")
        } else {
            for (ii_length = 0; ii_length < replace_sound_buffer.byteLength; ii_length += 2) {
                let temp = new DataView(temp_sound_buffer).getUint16(ii_length, true)
                new DataView(buffer).setUint16(old_sound_offset + ii_length, temp, g.endian)
            }

            for (ii_length = replace_sound_buffer.byteLength; ii_length < old_sound_length; ii_length += 2) {
                new DataView(buffer).setUint16(old_sound_offset + ii_length, 0, g.endian)
            }

        }
        old_sound_offset = old_sound_offset - offset_audio
        generate_and_attach_wav(old_sound_offset, old_sound_length, audio_replace_sample_rate, 0)

        document.getElementsByClassName("file_is_highlighted")[0].click()

    }

}
function load_save_sound_file() {

    temp_sound_offset = offset_sound_section

    new DataView(buffer).setUint32(temp_sound_offset, document.getElementById("sound_box_offset").value, g.endian)
    new DataView(buffer).setUint32(temp_sound_offset + 4, document.getElementById("sound_box_length").value, g.endian)
    new DataView(buffer).setUint32(temp_sound_offset + 8, document.getElementById("sound_box_ff").value, g.endian)
    new DataView(buffer).setUint32(temp_sound_offset + 12, document.getElementById("sound_box_sample_rate").value, g.endian)
    new DataView(buffer).setUint32(temp_sound_offset + 16, document.getElementById("sound_box_16").value, g.endian)
    new DataView(buffer).setUint16(temp_sound_offset + 20, document.getElementById("sound_box_20").value, g.endian)
    new DataView(buffer).setUint16(temp_sound_offset + 22, document.getElementById("sound_box_22").value, g.endian)
    new DataView(buffer).setUint32(temp_sound_offset + 24, document.getElementById("sound_box_24").value, g.endian)
    new DataView(buffer).setUint32(temp_sound_offset + 28, document.getElementById("sound_box_28").value, g.endian)

    old_sound_offset = document.getElementById("sound_box_offset").value
    old_sound_length = document.getElementById("sound_box_length").value
    old_sound_sample_rate = document.getElementById("sound_box_sample_rate").value

    generate_and_attach_wav(Number(old_sound_offset), old_sound_length, old_sound_sample_rate, temp_sound_offset)

    document.getElementsByClassName("file_is_highlighted")[0].click()

}

function generate_and_attach_wav(old_sound_offset, sound_length, sound_sample_rate, sound_index, data_offset, data_start_offset) {
    //create wav file
    wav_ = new ArrayBuffer(sound_length + 44)

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

    for (ii_length = 0,
    ii = data_start_offset + sound_offset; ii_length < sound_length; ii += 2,
    ii_length += 2) {
        temp = u16(data_start_offset + sound_offset + ii_length, g.endian)
        new DataView(wav_).setUint16(44 + ii_length, temp, true)
    }

    var objectURL = URL.createObjectURL(new Blob([wav_]))

    return `<audio id="sound_play" src="${objectURL}" controls="true" title="${objectURL}.wav"></audio>`

}
