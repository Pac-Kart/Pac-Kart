function load_audio(offset,data_offset,data_start_offset) {

    //div.dataset.region

//     document.getElementById("outer_program").innerHTML = `
//                     <div style='padding-left:25px;padding-bottom:5px;padding-top:5px;width:50%;height:705px;overflow-y: auto;' id='inner_program'></div>
//                     <div style='padding-left:25px;padding-bottom:5px;padding-top:5px;width:50%;height:705px;overflow-y: auto;background-color:#f3f3f3;' id='edit_program'><p style='margin:auto;'> choose a sound to display edit options here </p></div>
// // `

//     if (file == "xpp" || file == "xps") {
//         document.getElementById("inner_program").innerHTML = "<p> warning psp / ps2 audio formats are unknown </p><br>"
//     }

    // load_inner_program_table(this.id)
    offset_sound_section = offset
    // offset_sound_section_data = data_start_offset
    
    load_edit_sound(offset,data_offset)

    load_wav(offset,data_offset,data_start_offset)

            if (fileextension == 'xps' || fileextension == "xpp") {
            document.getElementById("file_editor").innerHTML += "<br><br>⚠️ warning PSP/PS2 format is not currently parsed correctly"
        }


}

function load_wav(offset,data_offset,data_start_offset) {
    endian = is_little_endian
    i_offset = offset

        sound_offset = u32(i_offset, is_little_endian)
        sound_length = u32(i_offset + 4, is_little_endian)
        //         sound_ff_ff_ff_ff = u32(i_offset + 8, is_little_endian)
        sound_sample_rate = u32(i_offset + 12, is_little_endian)
        //         sound_16 = u32(i_offset + 16, is_little_endian)
        //         sound_20 = u16(i_offset + 20, is_little_endian)
        //         sound_22 = u16(i_offset + 22, is_little_endian)

        generate_and_attach_wav(sound_offset, sound_length, sound_sample_rate, 0,data_offset,data_start_offset)


}

function load_edit_sound(offset,data_offset) {

    // for (var i = 0; i < document.getElementsByClassName("binary_table")[0].children[1].children.length; i++) {
    //     document.getElementsByClassName("binary_table")[0].children[1].children[i].dataset.sound_row_select = 'false'
    // }
    // let select_row_index = this.getElementsByTagName('td')[0].innerText - 1
    // document.getElementsByClassName("binary_table")[0].children[1].children[select_row_index].dataset.sound_row_select = 'true'

    i_offset = offset

    sound_offset = u32(i_offset, is_little_endian)
    sound_length = u32(i_offset + 4, is_little_endian)
    sound_ff_ff_ff_ff = u32(i_offset + 8, is_little_endian)
    sound_sample_rate = u32(i_offset + 12, is_little_endian)
    sound_16 = u32(i_offset + 16, is_little_endian)
    sound_20 = u16(i_offset + 20, is_little_endian)
    sound_22 = u16(i_offset + 22, is_little_endian)
    sound_24 = u32(i_offset + 24, is_little_endian)
    sound_28 = u32(i_offset + 28, is_little_endian)

    // get values from sound
    document.getElementById("file_editor").innerHTML = `

    <div data-debug='true'>
    <p> sound header offset: ${i_offset}
    <br> start sound data offset: <a id='start_sound_offset'>${offset_audio + sound_offset}</a>
    <br> end sound data offset: <a id='end_sound_offset'>${offset_audio + sound_length}</a></p>


    <hr>
    </div>

    <label for='sound_box_offset'> offset </label>
    <input id='sound_box_offset' type='text'></input><br>

    <label for='sound_box_length'> length</label>
    <input id='sound_box_length' type='text'></input><br>

    <label for='sound_box_ff'> unknown boolean like </label>
    <input id='sound_box_ff' type='text'></input><br>

    <label for='sound_box_sample_rate'> sound sample rate </label>
    <input id='sound_box_sample_rate' type='text'></input><br>

    <label for='sound_box_16'> unknown ? </label>
    <input id='sound_box_16' type='text'></input><br>

    <label for='sound_box_20'> unknown ? </label>
    <input id='sound_box_20' type='text'></input><br>

    <label for='sound_box_22'> unknown ? </label>    
    <input id='sound_box_22' type='text'></input><br>

    <label for='sound_box_24'> padding ? always 0 </label>    
    <input id='sound_box_24' type='text'></input><br>
    
    <label for='sound_box_28'> padding ? always 0</label>
    <input id='sound_box_28' type='text'></input><br>

    <br><br><button id='save_sound_file'> save new values </button>

    <hr>
    <a>replace with new wav file: </a>
    <input type='file' id='replace_sound_file'> 
    <br><hr><br>
    `

    document.getElementById("sound_box_offset").value = sound_offset;
    document.getElementById("sound_box_length").value = sound_length;
    document.getElementById("sound_box_ff").value = sound_ff_ff_ff_ff;
    document.getElementById("sound_box_sample_rate").value = sound_sample_rate;
    document.getElementById("sound_box_16").value = sound_16;
    document.getElementById("sound_box_20").value = sound_20;
    document.getElementById("sound_box_22").value = sound_22;
    document.getElementById("sound_box_24").value = sound_24;
    document.getElementById("sound_box_28").value = sound_28;

    document.getElementById("replace_sound_file").addEventListener("change", load_replace_sound_file);
    document.getElementById("save_sound_file").addEventListener("click", load_save_sound_file);
    document.getElementById("sound_box_offset").addEventListener("input", change_sound_offset);
    document.getElementById("sound_box_length").addEventListener("input", change_sound_offset);

}

function change_sound_offset() {

    if (isNumeric(sound_box_offset.value) && sound_box_offset.value >= 0) {
        if (isNumeric(sound_box_length.value) && sound_box_length.value >= 0) {

            start_sound_offset_value = Number(offset_audio) + Number(sound_box_offset.value)
            end_sound_offset_value = Number(sound_box_length.value) + start_sound_offset_value

            if (this.id == 'sound_box_offset') {
                // console.log(this.value, offset_audio, sound_box_length.value)

                document.getElementById("start_sound_offset").innerText = ''
                document.getElementById("end_sound_offset").innerText = ''

                document.getElementById("start_sound_offset").innerText = start_sound_offset_value
                document.getElementById("end_sound_offset").innerText = end_sound_offset_value

            } else if (this.id == 'sound_box_length') {
                document.getElementById("end_sound_offset").innerText = ''

                document.getElementById("end_sound_offset").innerText = end_sound_offset_value

            }
        }
    }
}

function load_replace_sound_file(event) {

    // var filename = document.getElementById("replace_sound_file").files[0].name
    // var fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    // fileextension = fileextension.toLowerCase()

    var file = event.target.files[0];
    var reader = new FileReader();

    replace_sound_buffer = reader.readAsArrayBuffer(file);

    // document.getElementById("replace_sound_file").value = ''

    // console.log(fileextension)

    reader.onload = function(e) {
        replace_sound_buffer = e.target.result

        if (new DataView(replace_sound_buffer).getUint32(0, true) != 1179011410) {
            console.log('not wav')
            return
        }

        let audio_replace_channels = new DataView(replace_sound_buffer).getUint16(22, true)

        let audio_replace_sample_rate = new DataView(replace_sound_buffer).getUint32(24, true)
        // samplerate

        audio_replace_sample_rate = audio_replace_sample_rate * audio_replace_channels

        //get index
        // let node = document.querySelector(`tr[data-sound_row_select="true"]`)
        // let temp_index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);

        // document.getElementById("sound_table_" + temp_index).innerHTML = ""

        offset_audio_replace = offset_sound_section

        new DataView(buffer).setUint32(offset_audio_replace + 12, audio_replace_sample_rate, is_little_endian)

        //get offset /lengtyh box
        old_sound_offset = document.getElementById("sound_box_offset").value
        old_sound_length = document.getElementById("sound_box_length").value

        old_sound_offset = Number(old_sound_offset) + offset_audio

        //get new dataview?

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
                new DataView(buffer).setUint16(old_sound_offset + ii_length, temp, is_little_endian)
            }
            alert("the sound imported is longer\nthan the current sound\nit may be cutoff!")
        } else {
            for (ii_length = 0; ii_length < replace_sound_buffer.byteLength; ii_length += 2) {
                let temp = new DataView(temp_sound_buffer).getUint16(ii_length, true)
                new DataView(buffer).setUint16(old_sound_offset + ii_length, temp, is_little_endian)
            }

            for (ii_length = replace_sound_buffer.byteLength; ii_length < old_sound_length; ii_length += 2) {
                new DataView(buffer).setUint16(old_sound_offset + ii_length, 0, is_little_endian)
            }

        }
        old_sound_offset = old_sound_offset - offset_audio
        generate_and_attach_wav(old_sound_offset, old_sound_length, audio_replace_sample_rate, 0)

                document.getElementsByClassName("file_is_highlighted")[0].click()

        // document.getElementById("sound_row_select_" + temp_index).click()

    }

}
function load_save_sound_file() {

    // let node = document.querySelector(`tr[data-sound_row_select="true"]`)
    // let temp_index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);

    temp_sound_offset = offset_sound_section

    // console.log(temp_index)

    new DataView(buffer).setUint32(temp_sound_offset, document.getElementById("sound_box_offset").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 4, document.getElementById("sound_box_length").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 8, document.getElementById("sound_box_ff").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 12, document.getElementById("sound_box_sample_rate").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 16, document.getElementById("sound_box_16").value, is_little_endian)
    new DataView(buffer).setUint16(temp_sound_offset + 20, document.getElementById("sound_box_20").value, is_little_endian)
    new DataView(buffer).setUint16(temp_sound_offset + 22, document.getElementById("sound_box_22").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 24, document.getElementById("sound_box_24").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 28, document.getElementById("sound_box_28").value, is_little_endian)

    // document.getElementById("sound_row_select_" + temp_index).click()

    old_sound_offset = document.getElementById("sound_box_offset").value
    old_sound_length = document.getElementById("sound_box_length").value
    old_sound_sample_rate = document.getElementById("sound_box_sample_rate").value

    generate_and_attach_wav(Number(old_sound_offset), old_sound_length, old_sound_sample_rate, temp_sound_offset)

        document.getElementsByClassName("file_is_highlighted")[0].click()

    // document.getElementById("sound_play").remove()

    // console.log(old_sound_offset,old_sound_length,old_sound_sample_rate,temp_sound_offset)

    // generate_and_attach_wav(Number(old_sound_offset), old_sound_length, old_sound_sample_rate, temp_sound_offset)

}

function generate_and_attach_wav(old_sound_offset, sound_length, sound_sample_rate, sound_index,data_offset,data_start_offset) {
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

    // console.log(data_offset,sound_offset,offset_audio,old_sound_offset)

    for (ii_length = 0,
    ii = data_start_offset + sound_offset; ii_length < sound_length; ii += 2,
    ii_length += 2) {
        temp = u16(data_start_offset + sound_offset + ii_length, is_little_endian)
        new DataView(wav_).setUint16(44 + ii_length, temp, true)
    }

    var objectURL = URL.createObjectURL(new Blob([wav_]))

    // document.getElementById("sound_row_select_" + sound_index).addEventListener("click", load_edit_sound);

    var link = document.createElement("audio");
    link.id = 'sound_play'
    link.src = objectURL
    link.controls = true
    link.title = objectURL + ".wav"
    document.getElementById("file_editor").appendChild(link)

    // var download_sound = document.createElement("a")
    // download_sound.href = objectURL
    // download_sound.download = objectURL + ".wav"
    // download_sound.innerText = "download as .wav"
    // document.getElementById("sound_table_" + sound_index + "_download").appendChild(download_sound)

}