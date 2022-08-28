//header

function load_main_page() {

        document.getElementById("show_debug").addEventListener("click", check_debug_box);

        document.getElementById("file_input").addEventListener("change", input_file);
        return
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
    div.dataset.file = file_name
    div.dataset.type = extension
    div.dataset.region_number = region
    div.dataset.number_files = files
    div.append('🗀 ' + file_name)

    document.getElementById("file_view").append(div)
}

function input_file(event) {

    // get file name/extension

    var filename = document.getElementsByTagName("input")[0].files[0].name
    var fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    fileextension = fileextension.toLowerCase()

    var file = event.target.files[0];
    var reader = new FileReader();

    buffer = reader.readAsArrayBuffer(file);

    document.getElementById("file_input").value = ''

    reader.onload = function(e) {

        buffer = e.target.result
        u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
        u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
        u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
        f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

        document.getElementById("file_view").textContent = ''
        document.getElementById("main_program").textContent = ''

        // check magic
        if (u32(0, true) == 33620128) {
            is_little_endian = true
        } else if (u32(0, true) == 2684354818) {
            is_little_endian = false
        } else {
            wrong_file_type()
            return
        }

        document.getElementById("save_button").addEventListener("click", save_buffer);

        //any file past here is a .x* file

        var region_numer = u32(8, is_little_endian)
        var number_files = u32(12, is_little_endian)

        atach_folder_to_file_viewer(filename, fileextension, region_numer, number_files)

        for (files_i = 0; files_i < number_files; files_i++) {
            var offset = (files_i * 24) + 16

            var region = u32(offset + 0, is_little_endian)
            var type = u32(offset + 4, is_little_endian)
            var index = u32(offset + 8, is_little_endian)
            var unknown = u32(offset + 12, is_little_endian)
            var amount_bytes = u32(offset + 16, is_little_endian)
            var file_offset = u32(offset + 20, is_little_endian)

            atach_file_to_file_viewer(region, type, index, unknown, amount_bytes, file_offset, files_i)
        }

    }

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

function load_audio() {

    //div.dataset.region
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }

    document.getElementById("outer_program").innerHTML = `
                    <div style='padding-left:25px;padding-bottom:5px;padding-top:5px;width:50%;height:705px;overflow-y: auto;' id='inner_program'></div>
                    <div style='padding-left:25px;padding-bottom:5px;padding-top:5px;width:50%;height:705px;overflow-y: auto;background-color:#f3f3f3;' id='edit_program'><p style='margin:auto;'> choose a sound to display edit options here </p></div>
`

    if (file == "xpp" || file == "xps") {
        document.getElementById("inner_program").innerHTML = "<p> warning psp / ps2 audio formats are unknown </p><br>"
    }

    load_inner_program_table(this.id)

    load_wav()
}

function load_wav() {
    endian = is_little_endian
    i_offset = offset_audio

    for (i = 0; i < number_sounds; i++,
    i_offset += 32) {
        sound_offset = u32(i_offset, is_little_endian)
        sound_length = u32(i_offset + 4, is_little_endian)
        //         sound_ff_ff_ff_ff = u32(i_offset + 8, is_little_endian)
        sound_sample_rate = u32(i_offset + 12, is_little_endian)
        //         sound_16 = u32(i_offset + 16, is_little_endian)
        //         sound_20 = u16(i_offset + 20, is_little_endian)
        //         sound_22 = u16(i_offset + 22, is_little_endian)

        generate_and_attach_wav(sound_offset, sound_length, sound_sample_rate, i)

    }
}

function load_textures() {

    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }
    document.getElementById("outer_program").innerHTML = `
                    <div style='padding-left:25px;padding-bottom:5px;padding-top:5px;width:50%;height:705px;overflow-y: auto;' id='inner_program'></div>
                    <div style='padding-left:25px;padding-bottom:5px;padding-top:5px;width:50%;height:705px;overflow-y: auto;background-color:#f3f3f3' id='edit_program'><p style='margin:auto;'> choose a texture to display edit options here </p></div>
`

    load_inner_program_table(this.id)

    attach_textures()

}

function extract_bits(offset, buffer) {
    bit_array = []
    let bit_field = new DataView(buffer).getUint8(offset)
    for (let bit_i = 7; bit_i > -1; bit_i--) {
        bit_array.push((bit_field >> bit_i) & 0x1)
    }
}

function attach_textures() {

    //get to texture offset all ?
    // gc,ps2,xbox,pc psp, yes 

    //baron yes/ 

    //16 bytes per entry
    // ????
    // ??
    // x / y
    // offset texture
    //offset texture name / bytes variable

    //hot wheels velocity x
    //u16 , 4/5
    //u16 , 64 x?
    //u16 , 64 y?
    //u16 , 7
    //u32 offset data
    //u32 always 0

    texture_offset_list = (offset_mid + _3_24__offset__btf_textures)

    console.log('texture offset:', texture_offset_list)

    if (game == 'rally') {
        i_offset_plus = 64
    } else {
        i_offset_plus = 16
    }

    i_offset = 0
    for (i = 0; i < _3_20__amount__btf_textures; i++,
    i_offset += i_offset_plus) {

        if (game == 'rally') {

            for (string_i = 12,
            btf_string = ""; string_i < 64; string_i++) {
                btf_string += String.fromCharCode(u8(i_offset + texture_offset_list + string_i))
            }

        } else if (game == 'baron') {
            temp_name_offset = u32(i_offset + texture_offset_list + 12, is_little_endian) + offset_mid
            next_temp_name_offset = u32(i_offset + texture_offset_list + 24, is_little_endian) + offset_mid

            if (((_3_20__amount__btf_textures * i_offset_plus) - i_offset_plus) == i_offset) {
                btf_string = 'last'

                for (string_i = 0,
                btf_string = ""; (string_i) < 128; string_i++) {
                    btf_string += String.fromCharCode(u8(temp_name_offset + string_i))

                    if (u32(temp_name_offset + string_i, true) == 1634169902) {
                        btf_string += "tga"
                        string_i += 128

                    }
                }

            } else {

                for (string_i = 0,
                btf_string = ""; (string_i + temp_name_offset) < next_temp_name_offset; string_i++) {
                    btf_string += String.fromCharCode(u8(temp_name_offset + string_i))
                }

            }

        } else {
            btf_string = 'no name'
        }

        var link = document.createElement("p");
        link.innerHTML = btf_string
        document.getElementById("texture_table_" + i).appendChild(link)

        document.getElementById("texture_row_select_" + i).addEventListener("click", load_edit_texture);

    }

}

function load_edit_texture() {

    for (var i = 0; i < document.getElementsByClassName("binary_table")[0].children[1].children.length; i++) {
        document.getElementsByClassName("binary_table")[0].children[1].children[i].dataset.sound_row_select = 'false'
    }
    let select_row_index = this.getElementsByTagName('td')[0].innerText - 1
    document.getElementsByClassName("binary_table")[0].children[1].children[select_row_index].dataset.sound_row_select = 'true'

    offset_texture_entry = offset_mid + _3_24__offset__btf_textures + (i_offset_plus * select_row_index)

    get_texture_settings(offset_texture_entry)

    document.getElementById("edit_program").innerHTML = `
        <div data-debug='true'>
    <p> texture header offset: ${offset_texture_entry}
    <br> texture header data amount: <a id='start_texture_offset'>${i_offset_plus}</a>
    <br> 
    <p>data offset ${texture_data_offset + offset_mid} </p>
    <p>type? ${texture_type_value} /mip? ${texture_mipmap_value}  </p>


    </div>
    <p>x ${texture_x} y ${texture_y} </p>
    <p>format: ${texture_format} </p>
    <hr>
`
    x_to_texture()

    image_file_input()
}

function image_file_input() {
    if (file == "xpc" || file == "xdx") {
        if (texture_type_value === 160) {
            document.getElementById("edit_program").innerHTML += "<hr><p>file format not currently supported </p>"
        } else {
            document.getElementById("edit_program").innerHTML += "<hr><p>⚠️ compression format / width and height must be the same<br></p><input id='dds_file' type='file'>"
            document.getElementById("dds_file").addEventListener("change", image_import_file)
        }

    }
}

function image_import_file(event) {

    if (texture_type_value == 160) {
        console.log(this, event)
        generate_canvas_replacement_pc(event)
        return;
    }

    var file = event.target.files[0];
    var reader = new FileReader();

    dds_buffer = reader.readAsArrayBuffer(file);

    document.getElementById("dds_file").value = ''

    reader.onload = function(e) {

        dds_buffer = e.target.result

        // basic check
        if (new DataView(dds_buffer).getUint32(0, false) !== 1145328416) {
            alert("wrong file magic");
            return;
        }
        if (new DataView(dds_buffer).getUint32(84, false) === 1146639413 && texture_type_value === 197) {
            //dxt5
            is_dxt5 = true
        } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639413 && texture_type_value === 5) {
            //dxt1
            is_dxt5 = true
        } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639409 && texture_type_value === 65) {
            //dxt1
            is_dxt5 = false
        } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639409 && texture_type_value === 4) {
            //dxt1
            is_dxt5 = false
        } else {
            alert("dds compression missmatch")
            return;
        }

        if(new DataView(dds_buffer).getUint32(12, true) !== texture_y){
            alert("wrong y dimensions")
            return;
        }
        if(new DataView(dds_buffer).getUint32(16, true) !== texture_x){
            alert("wrong x dimensions")
            return;
        }

        // is dds file

        // calculate_mips
        dds_mips = new DataView(dds_buffer).getUint32(28, true)
        
        
    
        temp_y = texture_y
        temp_x = texture_x
        dds_offset = 128
        x_texture_offset = texture_data_offset + offset_mid

        if (texture_mipmap_value == 0) {
            texture_mipmap_value = 1
        }

        for (dds_loop_i = 0; dds_loop_i < texture_mipmap_value; dds_loop_i++) {
            calculate_length_dds(temp_x, temp_y, is_dxt5)

            import_dds_into_x(dds_buffer, dds_offset, x_texture_offset, dds_new_byte_length)

            temp_x = temp_x / 2
            temp_y = temp_y / 2

        }
            document.querySelector(`tr[data-sound_row_select="true"]`).click()

    }

}

function generate_canvas_replacement_pc(ev) {

    file_temp = ev.target.files[0];
    // get the file
    blobURL = URL.createObjectURL(file_temp);
    img_temp = new Image();
    img_temp.src = blobURL;

    img_temp.onerror = function() {
        URL.revokeObjectURL(this.src);
        // Handle the failure properly
        console.log("Cannot load image");
    }
    ;

    img_temp.onload = function() {
        URL.revokeObjectURL(this.src);
        mime_type = "image/jpeg";
        quality = qualityRate(file_temp.size);
        canvas_temp = document.createElement("canvas");
        canvas_temp.width = texture_x;
        canvas_temp.height = texture_y;
        ctx_temp = canvas_temp.getContext("2d");
        ctx_temp.imageSmoothingEnabled = false
        ctx_temp.drawImage(img_temp, 0, 0, texture_x, texture_y);

        document.getElementById("dds_file").append(canvas_temp);

        canvas_temp.toBlob(blob=>{
            let localfile = new File([blob],'import.png',{
                type: "image/jpeg",
                lastModified: new Date().getTime()
            },'utf-8');
            let container = new DataTransfer();
            container.items.add(localfile);
            aaaaaaaaa = container
            console.log(container)
            console.log(container.files)
            canvas_temp.files = container.files;
            canvas_temp.toDataURL(canvas_temp.files[0])
        }
        , mime_type, quality);

        console.log("?")
    }
    ;
}

function calculate_length_dds(x, y, is_dxt5) {

    if (is_dxt5 === true) {
        dds_new_byte_length = x * y
    } else {
        dds_new_byte_length = x * y / 2
    }

}

function import_dds_into_x(dds_buffer, dds_offset, x_texture_offset_, length) {

    for (i = 0; i < length; i++) {

        temp_i = new DataView(dds_buffer).getUint8(i + dds_offset)
        new DataView(buffer).setUint8(i + x_texture_offset_, temp_i)
    }
    x_texture_offset += i
}

function get_texture_settings(texture_offset) {

    if (game == 'rally') {
        texture_type_value = u8(texture_offset)
        texture_mipmap_value = u8(texture_offset + 1)
        texture_x = Math.pow(2, u8(texture_offset + 2, is_little_endian))
        texture_y = Math.pow(2, u8(texture_offset + 3, is_little_endian))
        if (file == 'xpp') {
            texture_data_offset = u32(texture_offset + 4, is_little_endian)
        } else {

            texture_data_offset = u32(texture_offset + 8, is_little_endian)

            texture_data_offset_uknown = u32(texture_offset + 4, is_little_endian)
            console.log(texture_data_offset_uknown)
        }

    } else if (game == 'baron') {
        console.log(u32(texture_offset + 0, is_little_endian))

        texture_type_value = u8(texture_offset + 4, is_little_endian)
        texture_mipmap_value = u8(texture_offset + 5, is_little_endian)
        texture_x = Math.pow(2, u8(texture_offset + 6, is_little_endian))
        texture_y = Math.pow(2, u8(texture_offset + 7, is_little_endian))
        texture_data_offset = u32(texture_offset + 8, is_little_endian)
    } else {
        texture_type_value = u16(texture_offset + 0, is_little_endian)
        texture_x = u16(texture_offset + 2, is_little_endian)
        texture_y = u16(texture_offset + 4, is_little_endian)
        texture_mipmap_value = u16(texture_offset + 6, is_little_endian)
        texture_data_offset = u32(texture_offset + 8, is_little_endian)
        console.log(u32(texture_offset + 12, is_little_endian))
    }

    //     console.log(`0 / 1st: ${u16(texture_offset, is_little_endian)}
    // 2 / 2nd: ${u16(texture_offset + 2, is_little_endian)}
    // 4 / 3nd: ${u8(texture_offset + 4, is_little_endian)}
    // 5 / 3nd: ${u8(texture_offset + 5, is_little_endian)}
    // 6 / 4nd: ${u8(texture_offset + 6, is_little_endian)}
    // 7 / 5nd: ${u8(texture_offset + 7, is_little_endian)}
    // 8 / 6 ${u32(texture_offset + 8, is_little_endian)}
    // 12 / 7 ${u32(texture_offset + 12, is_little_endian)}`)

    //offset to texture
    //texture x y
    //texture type //c1 ?

    //baron textre headre format
    //u32 values usually the same
    // 00 02 24 A8 (140456) / 00 02 97 9D (169885)
    // 2820932096 = has mips?
    // 2643919360
    // 900923904 = rgba no mips
    //
    //u8 texture type
    //u8 mip maps
    //u8 x
    //u8 y
    //u32 texture offset
    //u32 string offset
    //strings are 16 dibisible by 16
    //end is relative on next offset / start of logic

    //hot wheels
    //u16 ?? 4 / 128 / 5 =256
    //u16 x
    //u16 y
    //u16 ??
    //u32 offset texture
    //u32 padding?

    if (texture_type_value === 4) {
        texture_format = "DDS (dxt1 compression)"
    } else if (texture_type_value === 5) {
        texture_format = "DDS (dxt5 compression)"
    } else if (texture_type_value === 65) {
        texture_format = "DDS (dxt1 compression)"
    } else if (texture_type_value === 68) {
        texture_format = "???"
    } else if (texture_type_value === 72) {
        texture_format = "???"
    } else if (texture_type_value === 160) {
        texture_format = "PNG/JPEG (RGBA uncompressed)"
    } else if (texture_type_value === 193) {
        texture_format = "DDS (dxt1 compression + alpha texture half size)"
    } else if (texture_type_value === 194) {
        texture_format = "DDS (dxt1 compression + alpha texture)"
    } else if (texture_type_value === 196) {
        texture_format = "???"
    } else if (texture_type_value === 197) {
        texture_format = "DDS (dxt5 compression)"
    } else if (texture_type_value === 200) {
        texture_format = "???"
    } else {
        texture_format = "unknown"
    }

}

function x_to_texture() {
    generate_canvas()

    canvas_html = ""

    canvas.width = texture_x
    canvas.height = texture_y

    image_offset = texture_data_offset + offset_mid

    if (game == 'idk') {// dxt1_to_canvas()
    } else if (game == 'rally' && file == 'xgc') {
        dxt1_gc_to_canvas()
    } else {
        rgba64_to_canvas()
        // dxt1_to_canvas()
    }

}

function generate_canvas() {
    let temp_canvas = document.createElement("canvas")
    temp_canvas.id = 'canvas'
    temp_canvas.style = 'width: 0px;'
    document.getElementById("inner_program").appendChild(temp_canvas)

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
}

function rgba64_to_canvas() {

    if (texture_type_value == 160) {
        for (i = 0,
        y = 0; y < texture_y; y++) {
            for (x = 0; x < texture_x; x++,
            i += 4) {

                color_r = u8(image_offset + (i))
                color_g = u8(image_offset + (i) + 1)
                color_b = u8(image_offset + (i) + 2)
                color_a = u8(image_offset + (i) + 3)

                ctx.fillStyle = `rgba(${color_r}, ${color_g}, ${color_b}, ${color_a})`
                ctx.fillRect(x, y, 1, 1)

            }
        }
    } else if (texture_type_value == 65 || texture_type_value == 4) {
        dxt1_to_canvas()
    } else if (texture_type_value == 197 || texture_type_value == 5) {
        dxt5_to_canvas()
    } else {

        for (i = 0,
        y = 0; y < texture_y; y++) {
            for (x = 0; x < texture_x; x++,
            i += 3) {

                color_r = u8(image_offset + (i))
                color_g = u8(image_offset + (i) + 1)
                color_b = u8(image_offset + (i) + 2)
                // color_a = u8(image_offset + (i) + 3)

                ctx.fillStyle = `rgb(${color_r}, ${color_g}, ${color_b})`
                ctx.fillRect(x, y, 1, 1)

            }
        }
    }

    if (texture_x < 64) {
        width = 256
    } else {
        width = texture_x
    }
    if (texture_y < 64) {
        height = 256
    } else {
        height = texture_y
    }

    data_ = canvas.toDataURL()
    document.getElementById("edit_program").innerHTML += `<img style="border:1px solid;background:white;" width='${width}' height='${height}' src='${data_}'></img>`

}

function dxt5_to_canvas() {

    for (outer_2_y = 0; outer_2_y < texture_y; outer_2_y += 4) {
        for (outer_2_x = 0; outer_2_x < texture_x; outer_2_x += 4) {

            dxt5_alpha()
            dxt5_color()
            dxt5_color_codes()

            image_offset += 16

            for (i = 0,
            y = 0; y < 4; y++) {
                for (x = 0; x < 4; x++,
                i++) {

                    if (temp_pixel_array[i] == "00") {
                        ctx.fillStyle = "#" + color_1 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    } else if (temp_pixel_array[i] == "01") {
                        ctx.fillStyle = "#" + color_3 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    } else if (temp_pixel_array[i] == "10") {
                        ctx.fillStyle = "#" + color_2 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    } else if (temp_pixel_array[i] == "11") {
                        ctx.fillStyle = "#" + color_4 + temp_alpha_array[i]
                        ctx.fillRect(x + outer_2_x, y + outer_2_y, 1, 1)
                    }
                }

            }
        }
    }

    data_ = canvas.toDataURL()

}

function dxt5_color_codes() {
    // codes0 = extract_bits(image_offset + 12, buffer)
    // codes1 = extract_bits(image_offset + 13, buffer)
    // codes2 = extract_bits(image_offset + 14, buffer)
    // codes3 = extract_bits(image_offset + 15, buffer)

    var i = 0
    var temp_1 = 0
    var iii = 0
    for (temp_pixel_array = []; iii < 16; iii += 4,
    i++) {
        var pixel_row = u8(image_offset + i + 12)
        for (ii = 0; ii < 8; ii += 2,
        temp_1++) {
            let pixel_1 = (pixel_row >> ii) & 0x1;
            let pixel_2 = (pixel_row >> ii + 1) & 0x1;

            temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
        }
    }

}

function dxt5_color() {
    var i = 0
    var ii = 0
    for (; ii < 2; ii++,
    i += 2) {
        var color_byte1 = u8(image_offset + 8 + i)
        var color_byte2 = u8(image_offset + 9 + i)

        let red_bit_1 = (color_byte2 >> 7) & 0x1;
        let red_bit_2 = (color_byte2 >> 6) & 0x1;
        let red_bit_3 = (color_byte2 >> 5) & 0x1;
        let red_bit_4 = (color_byte2 >> 4) & 0x1;
        let red_bit_5 = (color_byte2 >> 3) & 0x1;

        red_bit_1 = red_bit_1 * 16
        red_bit_2 = red_bit_2 * 8
        red_bit_3 = red_bit_3 * 4
        red_bit_4 = red_bit_4 * 2
        red_bit_5 = red_bit_5 * 1

        var red_color = red_bit_1 + red_bit_2 + red_bit_3 + red_bit_4 + red_bit_5

        red_color = Math.round(red_color * 8.2257)

        let green_bit_1 = (color_byte2 >> 2) & 0x1;
        let green_bit_2 = (color_byte2 >> 1) & 0x1;
        let green_bit_3 = (color_byte2 >> 0) & 0x1;
        let green_bit_4 = (color_byte1 >> 7) & 0x1;
        let green_bit_5 = (color_byte1 >> 6) & 0x1;
        let green_bit_6 = (color_byte1 >> 5) & 0x1;

        green_bit_1 = green_bit_1 * 32
        green_bit_2 = green_bit_2 * 16
        green_bit_3 = green_bit_3 * 8
        green_bit_4 = green_bit_4 * 4
        green_bit_5 = green_bit_5 * 2
        green_bit_6 = green_bit_6 * 1

        var green_color = green_bit_1 + green_bit_2 + green_bit_3 + green_bit_4 + green_bit_5 + green_bit_6

        green_color = Math.round(green_color * 4.048)

        let blue_bit_1 = (color_byte1 >> 4) & 0x1;
        let blue_bit_2 = (color_byte1 >> 3) & 0x1;
        let blue_bit_3 = (color_byte1 >> 2) & 0x1;
        let blue_bit_4 = (color_byte1 >> 1) & 0x1;
        let blue_bit_5 = (color_byte1 >> 0) & 0x1;

        blue_bit_1 = blue_bit_1 * 16
        blue_bit_2 = blue_bit_2 * 8
        blue_bit_3 = blue_bit_3 * 4
        blue_bit_4 = blue_bit_4 * 2
        blue_bit_5 = blue_bit_5 * 1

        var blue_color = blue_bit_1 + blue_bit_2 + blue_bit_3 + blue_bit_4 + blue_bit_5

        blue_color = Math.round(blue_color * 8.2257)

        red_color = red_color.toString(16);
        green_color = green_color.toString(16);
        blue_color = blue_color.toString(16);

        if (red_color.length == 1) {
            red_color = '0' + red_color
        }
        if (green_color.length == 1) {
            green_color = '0' + green_color
        }
        if (blue_color.length == 1) {
            blue_color = '0' + blue_color
        }

        if (ii == 0) {
            color_1 = red_color + green_color + blue_color
            red_color_1 = red_color
            green_color_1 = green_color
            blue_color_1 = blue_color
        } else {
            color_2 = red_color + green_color + blue_color

            red_color_1 = parseInt(red_color_1, 16)
            green_color_1 = parseInt(green_color_1, 16)
            blue_color_1 = parseInt(blue_color_1, 16)

            red_color = parseInt(red_color, 16)
            green_color = parseInt(green_color, 16)
            blue_color = parseInt(blue_color, 16)

            if (color_1 > color_2) {

                red_color_3 = (2 * red_color_1 + red_color) / 3
                green_color_3 = (2 * green_color_1 + green_color) / 3
                blue_color_3 = (2 * blue_color_1 + blue_color) / 3

                red_color_4 = (red_color_1 + 2 * red_color) / 3
                green_color_4 = (green_color_1 + 2 * green_color) / 3
                blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

            } else {

                red_color_3 = (red_color_1 + red_color) / 2
                green_color_3 = (green_color_1 + green_color) / 2
                blue_color_3 = (blue_color_1 + blue_color) / 2

                red_color_4 = (red_color_1 + 2 * red_color) / 3
                green_color_4 = (green_color_1 + 2 * green_color) / 3
                blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

            }

            red_color_3 = Math.round(red_color_3)
            green_color_3 = Math.round(green_color_3)
            blue_color_3 = Math.round(blue_color_3)

            red_color_4 = Math.round(red_color_4)
            green_color_4 = Math.round(green_color_4)
            blue_color_4 = Math.round(blue_color_4)

            red_color_3 = red_color_3.toString(16);
            green_color_3 = green_color_3.toString(16);
            blue_color_3 = blue_color_3.toString(16);

            red_color_4 = red_color_4.toString(16);
            green_color_4 = green_color_4.toString(16);
            blue_color_4 = blue_color_4.toString(16);

            if (red_color_3.length == 1) {
                red_color_3 = '0' + red_color_3
            }
            if (green_color_3.length == 1) {
                green_color_3 = '0' + green_color_3
            }
            if (blue_color_3.length == 1) {
                blue_color_3 = '0' + blue_color_3
            }

            if (parseInt(red_color_3, 16) > 255) {
                red_color_3 = "FF"
            }
            if (parseInt(green_color_3, 16) > 255) {
                green_color_3 = "FF"
            }
            if (parseInt(blue_color_3, 16) > 255) {
                blue_color_3 = "FF"
            }
            //
            //
            if (red_color_4.length == 1) {
                red_color_4 = '0' + red_color_4
            }
            if (green_color_4.length == 1) {
                green_color_4 = '0' + green_color_4
            }
            if (blue_color_4.length == 1) {
                blue_color_4 = '0' + blue_color_4
            }

            color_3 = red_color_3 + green_color_3 + blue_color_3

            color_4 = red_color_4 + green_color_4 + blue_color_4

        }
    }

}

function dxt5_alpha() {
    alpha0 = u8(image_offset)
    alpha1 = u8(image_offset + 1)

    temp_alpha_array = []

    array_1 = extract_bits(image_offset + 2, buffer)
    temp_alpha_array_1 = bit_array

    array_2 = extract_bits(image_offset + 3, buffer)
    temp_alpha_array_2 = bit_array

    array_3 = extract_bits(image_offset + 4, buffer)
    temp_alpha_array_3 = bit_array

    array_4 = extract_bits(image_offset + 5, buffer)
    temp_alpha_array_4 = bit_array

    array_5 = extract_bits(image_offset + 6, buffer)
    temp_alpha_array_5 = bit_array

    array_6 = extract_bits(image_offset + 7, buffer)
    temp_alpha_array_6 = bit_array

    temp_alpha_array.push(temp_alpha_array_1[7] + "" + temp_alpha_array_1[6] + "" + temp_alpha_array_1[5])
    temp_alpha_array.push(temp_alpha_array_1[4] + "" + temp_alpha_array_1[3] + "" + temp_alpha_array_1[2])
    temp_alpha_array.push(temp_alpha_array_1[1] + "" + temp_alpha_array_1[0] + "" + temp_alpha_array_2[7])
    temp_alpha_array.push(temp_alpha_array_2[6] + "" + temp_alpha_array_2[5] + "" + temp_alpha_array_2[4])
    temp_alpha_array.push(temp_alpha_array_2[3] + "" + temp_alpha_array_2[2] + "" + temp_alpha_array_2[1])
    temp_alpha_array.push(temp_alpha_array_2[0] + "" + temp_alpha_array_3[7] + "" + temp_alpha_array_3[6])
    temp_alpha_array.push(temp_alpha_array_3[5] + "" + temp_alpha_array_3[4] + "" + temp_alpha_array_3[3])
    temp_alpha_array.push(temp_alpha_array_3[2] + "" + temp_alpha_array_3[1] + "" + temp_alpha_array_3[0])
    temp_alpha_array.push(temp_alpha_array_4[7] + "" + temp_alpha_array_4[6] + "" + temp_alpha_array_4[5])
    temp_alpha_array.push(temp_alpha_array_4[4] + "" + temp_alpha_array_4[3] + "" + temp_alpha_array_4[2])
    temp_alpha_array.push(temp_alpha_array_4[1] + "" + temp_alpha_array_4[0] + "" + temp_alpha_array_5[7])
    temp_alpha_array.push(temp_alpha_array_5[6] + "" + temp_alpha_array_5[5] + "" + temp_alpha_array_5[4])
    temp_alpha_array.push(temp_alpha_array_5[3] + "" + temp_alpha_array_5[2] + "" + temp_alpha_array_5[1])
    temp_alpha_array.push(temp_alpha_array_5[0] + "" + temp_alpha_array_6[7] + "" + temp_alpha_array_6[6])
    temp_alpha_array.push(temp_alpha_array_6[5] + "" + temp_alpha_array_6[4] + "" + temp_alpha_array_6[3])
    temp_alpha_array.push(temp_alpha_array_6[2] + "" + temp_alpha_array_6[1] + "" + temp_alpha_array_6[0])

    for (temp_alpha_array_i = 0; temp_alpha_array_i < 16; temp_alpha_array_i++) {
        if (alpha0 > alpha1) {
            if (temp_alpha_array[temp_alpha_array_i] === "000") {
                let convert_hex = alpha0
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex
            } else if (temp_alpha_array[temp_alpha_array_i] === "100") {
                convert_hex = alpha1
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex
            } else if (temp_alpha_array[temp_alpha_array_i] === "010") {
                convert_hex = (6 * alpha0 + 1 * alpha1) / 7
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "110") {
                convert_hex = (5 * alpha0 + 2 * alpha1) / 7
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "001") {
                convert_hex = (4 * alpha0 + 3 * alpha1) / 7
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "101") {
                convert_hex = (3 * alpha0 + 4 * alpha1) / 7
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "011") {
                convert_hex = (2 * alpha0 + 5 * alpha1) / 7
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "111") {
                convert_hex = (1 * alpha0 + 6 * alpha1) / 7
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            }
        } else if (alpha0 <= alpha1) {
            if (temp_alpha_array[temp_alpha_array_i] === "000") {
                convert_hex = alpha0
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "100") {
                convert_hex = alpha1
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "010") {
                convert_hex = (4 * alpha0 + 1 * alpha1) / 5
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "110") {
                convert_hex = (3 * alpha0 + 2 * alpha1) / 5
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "001") {
                convert_hex = (2 * alpha0 + 3 * alpha1) / 5
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "101") {
                convert_hex = (1 * alpha0 + 4 * alpha1) / 5
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "011") {

                convert_hex = 0
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            } else if (temp_alpha_array[temp_alpha_array_i] === "111") {
                convert_hex = 255
                convert_hex = ('00' + convert_hex.toString(16).toUpperCase()).slice(-2);

                temp_alpha_array[temp_alpha_array_i] = convert_hex

            }

        }
    }
}

function dxt1_to_canvas() {

    for (outer_y = 0; outer_y < texture_y; outer_y += 4) {
        for (outer_x = 0; outer_x < texture_x; outer_x += 4) {

            get_color()
            get_pixel_data_pc()

            image_offset += 8

            for (i = 0,
            y = 0; y < 4; y++) {
                for (x = 0; x < 4; x++,
                i++) {

                    if (temp_pixel_array[i] == "00") {
                        ctx.fillStyle = "#" + color_1
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    } else if (temp_pixel_array[i] == "01") {
                        ctx.fillStyle = "#" + color_3
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    } else if (temp_pixel_array[i] == "10") {
                        ctx.fillStyle = "#" + color_2
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    } else if (temp_pixel_array[i] == "11") {
                        ctx.fillStyle = "#" + color_4
                        ctx.fillRect(x + outer_x, y + outer_y, 1, 1)
                    }
                }
            }
        }

    }

    data_ = canvas.toDataURL()

}

function dxt1_gc_to_canvas() {

    dxt1_gc_file_id = 0

    alpha_loop = 0
    while (alpha_loop < 2) {

        dxt1_gc_file_id++

        if (texture_type_value == 193 && alpha_loop == 0) {
            btf_offset = u32(offset_texture_entry + 8, is_little_endian)
            alpha_loop++
            divide_2 = false
        } else if (texture_type_value == 193 && alpha_loop == 1) {
            btf_offset = u32(offset_texture_entry + 4, is_little_endian)
            alpha_loop++
            divide_2 = false
        } else if (texture_type_value == 194 && alpha_loop == 0) {
            btf_offset = u32(offset_texture_entry + 8, is_little_endian)
            alpha_loop++
            divide_2 = false
        } else if (texture_type_value == 194 && alpha_loop == 1) {
            btf_offset = u32(offset_texture_entry + 4, is_little_endian)
            alpha_loop++
            divide_2 = true
        } else {
            btf_offset = u32(offset_texture_entry + 8, is_little_endian)
            alpha_loop += 2
            divide_2 = false
        }

        if (divide_2 == true) {
            texture_y = texture_y / 2
            texture_x = texture_x / 2
        }

        canvas.width = texture_x
        canvas.height = texture_y

        for (outer_2_y = 0; outer_2_y < texture_y; outer_2_y += 8) {
            for (outer_2_x = 0; outer_2_x < texture_x; outer_2_x += 8) {
                for (outer_y = 0; outer_y < 8; outer_y += 4) {
                    for (outer_x = 0; outer_x < 8; outer_x += 4) {

                        get_color_gc()
                        get_pixel_data()

                        image_offset += 8

                        for (i = 0,
                        y = 0; y < 4; y++) {
                            for (x = 0; x < 4; x++,
                            i++) {

                                if (temp_pixel_array[i] == "00") {
                                    ctx.fillStyle = "#" + color_1
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                } else if (temp_pixel_array[i] == "01") {
                                    ctx.fillStyle = "#" + color_2
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                } else if (temp_pixel_array[i] == "10") {
                                    ctx.fillStyle = "#" + color_3
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                } else if (temp_pixel_array[i] == "11") {
                                    ctx.fillStyle = "#" + color_4
                                    ctx.fillRect(x + outer_x + outer_2_x, y + outer_y + outer_2_y, 1, 1)
                                }
                            }

                        }
                    }
                }
            }
        }

        if (dxt1_gc_file_id == 2) {
            document.getElementById("edit_program").innerHTML += "<hr><p>alpha texture:</p>"
        }

        data_ = canvas.toDataURL()
        document.getElementById("edit_program").innerHTML += `<div 
        data-texture_offset='${btf_offset}'
        data-texture_width='${texture_x}'
        data-texture_height='${texture_y}'
        data-texture_type='${texture_type_value}'
        data-texture_id='${dxt1_gc_file_id}'>
        <img width='256' height='256' src='${data_}'></img>
        <input id="img-input${dxt1_gc_file_id}" type="file" name="fileTest" accept="image/*" />
        <div id="root${dxt1_gc_file_id}"></div>
</div>`
    }
    if (texture_type_value == 193 || texture_type_value == 194) {
        document.getElementById("img-input1").addEventListener("change", generate_canvas_replacement);
        document.getElementById("img-input2").addEventListener("change", generate_canvas_replacement);
    } else {
        document.getElementById("img-input1").addEventListener("change", generate_canvas_replacement);
    }

}

function generate_canvas_replacement(ev) {

    tttttt = this

    texture_data_offset = Number(tttttt.parentElement.dataset.texture_offset)
    texture_y = Number(tttttt.parentElement.dataset.texture_height)
    texture_x = Number(tttttt.parentElement.dataset.texture_width)
    texture_id = Number(tttttt.parentElement.dataset.texture_id)
    texture_type_tag_value = Number(tttttt.parentElement.dataset.texture_type)

    file_temp = ev.target.files[0];
    // get the file
    blobURL = URL.createObjectURL(file_temp);
    img_temp = new Image();
    img_temp.src = blobURL;

    img_temp.onerror = function() {
        URL.revokeObjectURL(this.src);
        // Handle the failure properly
        console.log("Cannot load image");
    }
    ;

    img_temp.onload = function() {
        URL.revokeObjectURL(this.src);
        mime_type = "image/jpeg";
        quality = qualityRate(file_temp.size);
        canvas_temp = document.createElement("canvas");
        canvas_temp.width = texture_x;
        canvas_temp.height = texture_y;
        ctx_temp = canvas.getContext("2d");
        ctx_temp.imageSmoothingEnabled = false
        ctx_temp.drawImage(img_temp, 0, 0, texture_x, texture_y);

        document.getElementById("root" + texture_id).append(canvas_temp);

        canvas_temp.toBlob(blob=>{
            let localfile = new File([blob],'import.png',{
                type: "image/jpeg",
                lastModified: new Date().getTime()
            },'utf-8');
            let container = new DataTransfer();
            container.items.add(localfile);
            document.querySelector('#img-input' + texture_id).files = container.files;
        }
        , mime_type, quality);

        get_pixels_to_dtx1_gc()
    }
    ;
}

function qualityRate(fileSize) {
    let QUALITY = 0.5;

    if (1000000 > fileSize) {
        QUALITY = 0.5;
    } else if (3000000 > fileSize) {
        QUALITY = 0.7;
    } else if (5000000 > fileSize) {
        QUALITY = 0.5;
    } else if (10000000 > fileSize) {
        QUALITY = 0.9;
    } else {
        QUALITY = 0.1;
    }
    return QUALITY;
}

function get_pixels_to_dtx1_gc() {

    temp_pixel_buffer = new ArrayBuffer((texture_x * texture_y) / 2)
    temp_pixel_buffer_offset = 0
    //get a pixel block

    for (outer_3_y = 0; outer_3_y < texture_y; outer_3_y += 8) {
        for (outer_3_x = 0; outer_3_x < texture_x; outer_3_x += 8) {

            for (outer_2_y = 0; outer_2_y < 8; outer_2_y += 4) {
                for (outer_2_x = 0; outer_2_x < 8; outer_2_x += 4) {

                    pixel_block_array = []

                    for (outer_y = 0; outer_y < 4; outer_y += 1) {
                        for (outer_x = 0; outer_x < 4; outer_x += 1) {

                            pixel_block_array.push(ctx_temp.getImageData(outer_x + outer_2_x + outer_3_x, outer_y + outer_2_y + outer_3_y, 1, 1).data)

                        }
                    }

                    for (block_i_i = 0; block_i_i < pixel_block_array.length; block_i_i += 16) {

                        new_pixel_array_dxt1_gc = []

                        high_color = 0
                        high_color_array = [0, 0, 0, 0]
                        low_color = 1020
                        low_color_array = [255, 255, 255, 255]

                        for (block_i = 0; block_i < 16; block_i++) {

                            temp_color = pixel_block_array[block_i + block_i_i][0] + pixel_block_array[block_i + block_i_i][1] + pixel_block_array[block_i + block_i_i][2] + pixel_block_array[block_i + block_i_i][3]

                            if (high_color < temp_color) {
                                high_color = temp_color
                                high_color_array = [pixel_block_array[block_i + block_i_i][0], pixel_block_array[block_i + block_i_i][1], pixel_block_array[block_i + block_i_i][2], pixel_block_array[block_i + block_i_i][3]]
                            }

                            if (low_color > temp_color) {
                                low_color = temp_color
                                low_color_array = [pixel_block_array[block_i + block_i_i][0], pixel_block_array[block_i + block_i_i][1], pixel_block_array[block_i + block_i_i][2], pixel_block_array[block_i + block_i_i][3]]
                            }

                        }

                        // generate 2 interpolated colors
                        color_0 = high_color
                        color_1 = low_color
                        //color 2 (2*color0 + color1) / 3	
                        color_2 = Math.round((2 * high_color + low_color) / 3)
                        //color 3 (color0 + 2*color1) / 3
                        color_3 = Math.round((high_color + 2 * low_color) / 3)

                        counts = [color_0, color_1, color_2, color_3]

                        for (block_i = 0; block_i < 16; block_i++) {

                            temp_color = pixel_block_array[block_i + block_i_i][0] + pixel_block_array[block_i + block_i_i][1] + pixel_block_array[block_i + block_i_i][2] + pixel_block_array[block_i + block_i_i][3]

                            var closest = counts.reduce(function(prev, curr) {
                                return (Math.abs(curr - temp_color) < Math.abs(prev - temp_color) ? curr : prev);
                            });

                            if (closest == color_0) {
                                new_pixel_array_dxt1_gc.push(0)
                                new_pixel_array_dxt1_gc.push(0)
                            } else if (closest == color_1) {
                                new_pixel_array_dxt1_gc.push(0)
                                new_pixel_array_dxt1_gc.push(1)
                            } else if (closest == color_2) {
                                new_pixel_array_dxt1_gc.push(1)
                                new_pixel_array_dxt1_gc.push(0)
                            } else {
                                new_pixel_array_dxt1_gc.push(1)
                                new_pixel_array_dxt1_gc.push(1)
                            }

                        }

                        //generate dxt1 colors
                        //565 rgb

                        color_bit_array = []

                        high_blue = Math.round(high_color_array[2] / 8.22580645)

                        color_bit_array.push((high_blue >> 0) & 0x1)
                        color_bit_array.push((high_blue >> 1) & 0x1)
                        color_bit_array.push((high_blue >> 2) & 0x1)
                        color_bit_array.push((high_blue >> 3) & 0x1)
                        color_bit_array.push((high_blue >> 4) & 0x1)

                        high_green = Math.round(high_color_array[1] / 4.04761904)

                        color_bit_array.push((high_green >> 0) & 0x1)
                        color_bit_array.push((high_green >> 1) & 0x1)
                        color_bit_array.push((high_green >> 2) & 0x1)
                        color_bit_array.push((high_green >> 3) & 0x1)
                        color_bit_array.push((high_green >> 4) & 0x1)
                        color_bit_array.push((high_green >> 5) & 0x1)

                        high_red = Math.round(high_color_array[0] / 8.22580645)

                        color_bit_array.push((high_red >> 4) & 0x1)
                        color_bit_array.push((high_red >> 3) & 0x1)
                        color_bit_array.push((high_red >> 2) & 0x1)
                        color_bit_array.push((high_red >> 1) & 0x1)
                        color_bit_array.push((high_red >> 0) & 0x1)

                        //u16
                        color_byte = new bitArray(16)
                        for (temp_color_i = 0; temp_color_i < 16; temp_color_i++) {
                            if (color_bit_array[temp_color_i] == 1) {
                                color_byte.on(temp_color_i)

                            }
                        }
                        new DataView(temp_pixel_buffer).setUint16(temp_pixel_buffer_offset, color_byte.backingArray[0], false)
                        temp_pixel_buffer_offset += 2

                        color_bit_array = []

                        low_blue = Math.round(low_color_array[2] / 8.22580645)

                        color_bit_array.push((low_blue >> 0) & 0x1)
                        color_bit_array.push((low_blue >> 1) & 0x1)
                        color_bit_array.push((low_blue >> 2) & 0x1)
                        color_bit_array.push((low_blue >> 3) & 0x1)
                        color_bit_array.push((low_blue >> 4) & 0x1)

                        low_green = Math.round(low_color_array[1] / 4.04761904)

                        color_bit_array.push((low_green >> 0) & 0x1)
                        color_bit_array.push((low_green >> 1) & 0x1)
                        color_bit_array.push((low_green >> 2) & 0x1)
                        color_bit_array.push((low_green >> 3) & 0x1)
                        color_bit_array.push((low_green >> 4) & 0x1)
                        color_bit_array.push((low_green >> 5) & 0x1)

                        low_red = Math.round(low_color_array[0] / 8.22580645)

                        color_bit_array.push((low_red >> 4) & 0x1)
                        color_bit_array.push((low_red >> 3) & 0x1)
                        color_bit_array.push((low_red >> 2) & 0x1)
                        color_bit_array.push((low_red >> 1) & 0x1)
                        color_bit_array.push((low_red >> 0) & 0x1)

                        color_byte = new bitArray(16)
                        for (temp_color_i = 0; temp_color_i < 16; temp_color_i++) {
                            if (color_bit_array[temp_color_i] == 1) {
                                color_byte.on(temp_color_i)

                            }
                        }
                        new DataView(temp_pixel_buffer).setUint16(temp_pixel_buffer_offset, color_byte.backingArray[0], false)
                        temp_pixel_buffer_offset += 2

                        //bit arry is 32 bits / 4 byte
                        color_byte = new bitArray(32)
                        for (temp_color_i = 0; temp_color_i < 32; temp_color_i++) {
                            if (new_pixel_array_dxt1_gc[temp_color_i] == 1) {
                                color_byte.on(temp_color_i)

                            }
                        }
                        new DataView(temp_pixel_buffer).setUint32(temp_pixel_buffer_offset, color_byte.backingArray[0], false)
                        temp_pixel_buffer_offset += 4

                    }

                    objectURL = URL.createObjectURL(new Blob([temp_pixel_buffer]))

                    for (ii_length = 0; ii_length < temp_pixel_buffer.byteLength; ii_length++) {

                        let temp = new DataView(temp_pixel_buffer).getUint8(ii_length, true)

                        new DataView(buffer).setUint8(texture_data_offset + offset_mid + ii_length, temp, is_little_endian)
                    }

                }
            }
        }
    }


    document.querySelector(`tr[data-sound_row_select="true"]`).click()

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

function get_pixel_data() {
    var i = 0
    var temp_1 = 0
    var iii = 0
    for (temp_pixel_array = []; iii < 16; iii += 4,
    i++) {
        var pixel_row = u8(image_offset + i + 4)
        for (ii = 7; ii > 0; ii -= 2,
        temp_1++) {
            let pixel_1 = (pixel_row >> ii) & 0x1;
            let pixel_2 = (pixel_row >> ii - 1) & 0x1;

            temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
        }
    }
    // temp_pixel_array = temp_pixel_array.reverse()
}
function get_pixel_data_pc() {
    temp_pixel_array = []
    var i = 0
    var temp_1 = 0
    var iii = 0
    for (temp_pixel_array = []; iii < 16; iii += 4,
    i++) {
        var pixel_row = u8(image_offset + i + 4)
        for (ii = 0; ii < 8; ii += 2,
        temp_1++) {
            let pixel_1 = (pixel_row >> ii) & 0x1;
            let pixel_2 = (pixel_row >> ii + 1) & 0x1;

            temp_pixel_array[temp_1] = pixel_1 + "" + pixel_2
        }
    }

}

function get_color_gc() {
    var i = 0
    var ii = 0
    for (; ii < 2; ii++,
    i += 2) {

        var color_byte1 = u8(image_offset + i)
        var color_byte2 = u8(image_offset + 1 + i)

        let red_bit_1 = (color_byte1 >> 7) & 0x1;
        let red_bit_2 = (color_byte1 >> 6) & 0x1;
        let red_bit_3 = (color_byte1 >> 5) & 0x1;
        let red_bit_4 = (color_byte1 >> 4) & 0x1;
        let red_bit_5 = (color_byte1 >> 3) & 0x1;

        red_bit_1 = red_bit_1 * 16
        red_bit_2 = red_bit_2 * 8
        red_bit_3 = red_bit_3 * 4
        red_bit_4 = red_bit_4 * 2
        red_bit_5 = red_bit_5 * 1

        var red_color = red_bit_1 + red_bit_2 + red_bit_3 + red_bit_4 + red_bit_5

        red_color = Math.round(red_color * 8.2257)

        let green_bit_1 = (color_byte1 >> 2) & 0x1;
        let green_bit_2 = (color_byte1 >> 1) & 0x1;
        let green_bit_3 = (color_byte1 >> 0) & 0x1;
        let green_bit_4 = (color_byte2 >> 7) & 0x1;
        let green_bit_5 = (color_byte2 >> 6) & 0x1;
        let green_bit_6 = (color_byte2 >> 5) & 0x1;

        green_bit_1 = green_bit_1 * 32
        green_bit_2 = green_bit_2 * 16
        green_bit_3 = green_bit_3 * 8
        green_bit_4 = green_bit_4 * 4
        green_bit_5 = green_bit_5 * 2
        green_bit_6 = green_bit_6 * 1

        var green_color = green_bit_1 + green_bit_2 + green_bit_3 + green_bit_4 + green_bit_5 + green_bit_6

        green_color = Math.round(green_color * 4.048)

        let blue_bit_1 = (color_byte2 >> 4) & 0x1;
        let blue_bit_2 = (color_byte2 >> 3) & 0x1;
        let blue_bit_3 = (color_byte2 >> 2) & 0x1;
        let blue_bit_4 = (color_byte2 >> 1) & 0x1;
        let blue_bit_5 = (color_byte2 >> 0) & 0x1;

        blue_bit_1 = blue_bit_1 * 16
        blue_bit_2 = blue_bit_2 * 8
        blue_bit_3 = blue_bit_3 * 4
        blue_bit_4 = blue_bit_4 * 2
        blue_bit_5 = blue_bit_5 * 1

        var blue_color = blue_bit_1 + blue_bit_2 + blue_bit_3 + blue_bit_4 + blue_bit_5

        blue_color = Math.round(blue_color * 8.2257)

        red_color = red_color.toString(16);
        green_color = green_color.toString(16);
        blue_color = blue_color.toString(16);

        if (red_color.length == 1) {
            red_color = '0' + red_color
        }
        if (green_color.length == 1) {
            green_color = '0' + green_color
        }
        if (blue_color.length == 1) {
            blue_color = '0' + blue_color
        }

        if (ii == 0) {
            color_1 = red_color + green_color + blue_color
            red_color_1 = red_color
            green_color_1 = green_color
            blue_color_1 = blue_color
        } else {
            color_2 = red_color + green_color + blue_color

            red_color_1 = parseInt(red_color_1, 16)
            green_color_1 = parseInt(green_color_1, 16)
            blue_color_1 = parseInt(blue_color_1, 16)

            red_color = parseInt(red_color, 16)
            green_color = parseInt(green_color, 16)
            blue_color = parseInt(blue_color, 16)

            if (color_1 > color_2) {

                red_color_3 = (2 * red_color_1 + red_color) / 3
                green_color_3 = (2 * green_color_1 + green_color) / 3
                blue_color_3 = (2 * blue_color_1 + blue_color) / 3

                red_color_4 = (red_color_1 + 2 * red_color) / 3
                green_color_4 = (green_color_1 + 2 * green_color) / 3
                blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

            } else {

                red_color_3 = (red_color_1 + red_color) / 2
                green_color_3 = (green_color_1 + green_color) / 2
                blue_color_3 = (blue_color_1 + blue_color) / 2

                red_color_4 = 0
                green_color_4 = 0
                blue_color_4 = 0

            }

            red_color_3 = Math.round(red_color_3)
            green_color_3 = Math.round(green_color_3)
            blue_color_3 = Math.round(blue_color_3)

            red_color_4 = Math.round(red_color_4)
            green_color_4 = Math.round(green_color_4)
            blue_color_4 = Math.round(blue_color_4)

            red_color_3 = red_color_3.toString(16);
            green_color_3 = green_color_3.toString(16);
            blue_color_3 = blue_color_3.toString(16);

            red_color_4 = red_color_4.toString(16);
            green_color_4 = green_color_4.toString(16);
            blue_color_4 = blue_color_4.toString(16);

            if (red_color_3.length == 1) {
                red_color_3 = '0' + red_color_3
            }
            if (green_color_3.length == 1) {
                green_color_3 = '0' + green_color_3
            }
            if (blue_color_3.length == 1) {
                blue_color_3 = '0' + blue_color_3
            }

            if (parseInt(red_color_3, 16) > 255) {
                red_color_3 = "FF"
            }
            if (parseInt(green_color_3, 16) > 255) {
                green_color_3 = "FF"
            }
            if (parseInt(blue_color_3, 16) > 255) {
                blue_color_3 = "FF"
            }
            //
            //
            if (red_color_4.length == 1) {
                red_color_4 = '0' + red_color_4
            }
            if (green_color_4.length == 1) {
                green_color_4 = '0' + green_color_4
            }
            if (blue_color_4.length == 1) {
                blue_color_4 = '0' + blue_color_4
            }

            color_3 = red_color_3 + green_color_3 + blue_color_3

            color_4 = red_color_4 + green_color_4 + blue_color_4

        }
    }

}
function get_color() {

    if (texture_type_value == 197) {
        image_offset += 8
    }

    var i = 0
    var ii = 0
    for (; ii < 2; ii++,
    i += 2) {
        var color_byte1 = u8(image_offset + i)
        var color_byte2 = u8(image_offset + 1 + i)

        let red_bit_1 = (color_byte2 >> 7) & 0x1;
        let red_bit_2 = (color_byte2 >> 6) & 0x1;
        let red_bit_3 = (color_byte2 >> 5) & 0x1;
        let red_bit_4 = (color_byte2 >> 4) & 0x1;
        let red_bit_5 = (color_byte2 >> 3) & 0x1;

        red_bit_1 = red_bit_1 * 16
        red_bit_2 = red_bit_2 * 8
        red_bit_3 = red_bit_3 * 4
        red_bit_4 = red_bit_4 * 2
        red_bit_5 = red_bit_5 * 1

        var red_color = red_bit_1 + red_bit_2 + red_bit_3 + red_bit_4 + red_bit_5

        red_color = Math.round(red_color * 8.2257)

        let green_bit_1 = (color_byte2 >> 2) & 0x1;
        let green_bit_2 = (color_byte2 >> 1) & 0x1;
        let green_bit_3 = (color_byte2 >> 0) & 0x1;
        let green_bit_4 = (color_byte1 >> 7) & 0x1;
        let green_bit_5 = (color_byte1 >> 6) & 0x1;
        let green_bit_6 = (color_byte1 >> 5) & 0x1;

        green_bit_1 = green_bit_1 * 32
        green_bit_2 = green_bit_2 * 16
        green_bit_3 = green_bit_3 * 8
        green_bit_4 = green_bit_4 * 4
        green_bit_5 = green_bit_5 * 2
        green_bit_6 = green_bit_6 * 1

        var green_color = green_bit_1 + green_bit_2 + green_bit_3 + green_bit_4 + green_bit_5 + green_bit_6

        green_color = Math.round(green_color * 4.048)

        let blue_bit_1 = (color_byte1 >> 4) & 0x1;
        let blue_bit_2 = (color_byte1 >> 3) & 0x1;
        let blue_bit_3 = (color_byte1 >> 2) & 0x1;
        let blue_bit_4 = (color_byte1 >> 1) & 0x1;
        let blue_bit_5 = (color_byte1 >> 0) & 0x1;

        blue_bit_1 = blue_bit_1 * 16
        blue_bit_2 = blue_bit_2 * 8
        blue_bit_3 = blue_bit_3 * 4
        blue_bit_4 = blue_bit_4 * 2
        blue_bit_5 = blue_bit_5 * 1

        var blue_color = blue_bit_1 + blue_bit_2 + blue_bit_3 + blue_bit_4 + blue_bit_5

        blue_color = Math.round(blue_color * 8.2257)

        red_color = red_color.toString(16);
        green_color = green_color.toString(16);
        blue_color = blue_color.toString(16);

        if (red_color.length == 1) {
            red_color = '0' + red_color
        }
        if (green_color.length == 1) {
            green_color = '0' + green_color
        }
        if (blue_color.length == 1) {
            blue_color = '0' + blue_color
        }

        if (ii == 0) {
            color_1 = red_color + green_color + blue_color
            red_color_1 = red_color
            green_color_1 = green_color
            blue_color_1 = blue_color
        } else {
            color_2 = red_color + green_color + blue_color

            red_color_1 = parseInt(red_color_1, 16)
            green_color_1 = parseInt(green_color_1, 16)
            blue_color_1 = parseInt(blue_color_1, 16)

            red_color = parseInt(red_color, 16)
            green_color = parseInt(green_color, 16)
            blue_color = parseInt(blue_color, 16)

            if (color_1 > color_2) {

                red_color_3 = (2 * red_color_1 + red_color) / 3
                green_color_3 = (2 * green_color_1 + green_color) / 3
                blue_color_3 = (2 * blue_color_1 + blue_color) / 3

                red_color_4 = (red_color_1 + 2 * red_color) / 3
                green_color_4 = (green_color_1 + 2 * green_color) / 3
                blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

            } else {

                red_color_3 = (red_color_1 + red_color) / 2
                green_color_3 = (green_color_1 + green_color) / 2
                blue_color_3 = (blue_color_1 + blue_color) / 2

                red_color_4 = (red_color_1 + 2 * red_color) / 3
                green_color_4 = (green_color_1 + 2 * green_color) / 3
                blue_color_4 = (blue_color_1 + 2 * blue_color) / 3

            }

            red_color_3 = Math.round(red_color_3)
            green_color_3 = Math.round(green_color_3)
            blue_color_3 = Math.round(blue_color_3)

            red_color_4 = Math.round(red_color_4)
            green_color_4 = Math.round(green_color_4)
            blue_color_4 = Math.round(blue_color_4)

            red_color_3 = red_color_3.toString(16);
            green_color_3 = green_color_3.toString(16);
            blue_color_3 = blue_color_3.toString(16);

            red_color_4 = red_color_4.toString(16);
            green_color_4 = green_color_4.toString(16);
            blue_color_4 = blue_color_4.toString(16);

            if (red_color_3.length == 1) {
                red_color_3 = '0' + red_color_3
            }
            if (green_color_3.length == 1) {
                green_color_3 = '0' + green_color_3
            }
            if (blue_color_3.length == 1) {
                blue_color_3 = '0' + blue_color_3
            }

            if (parseInt(red_color_3, 16) > 255) {
                red_color_3 = "FF"
            }
            if (parseInt(green_color_3, 16) > 255) {
                green_color_3 = "FF"
            }
            if (parseInt(blue_color_3, 16) > 255) {
                blue_color_3 = "FF"
            }
            //
            //
            if (red_color_4.length == 1) {
                red_color_4 = '0' + red_color_4
            }
            if (green_color_4.length == 1) {
                green_color_4 = '0' + green_color_4
            }
            if (blue_color_4.length == 1) {
                blue_color_4 = '0' + blue_color_4
            }

            color_3 = red_color_3 + green_color_3 + blue_color_3

            color_4 = red_color_4 + green_color_4 + blue_color_4

        }
    }
    if (texture_type_value == 197) {
        image_offset -= 8
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

function load_logic() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }

    //get logic offest

    if (game == 'rally' && file_type == 'world') {
        offset_logic = u32(offset_mid, is_little_endian) + offset_mid

        u32(offset_logic, is_little_endian)

        document.getElementById("outer_program").innerHTML = `
        header:<br>lights related${u32(offset_logic, is_little_endian)}
        `

    } else if (file_type == 'link') {

        if (game == 'rally') {
            console.log('')
            temp = u32(offset_mid + 4, is_little_endian) + offset_mid
            offset_logic = u32(temp, is_little_endian) + offset_mid
        } else {
            temp = u32(offset_mid + 16, is_little_endian) + offset_mid
            offset_logic = u32(temp, is_little_endian) + offset_mid

        }

        document.getElementById("outer_program").innerHTML = `
        ?offset${u32(offset_logic + 0, is_little_endian) + offset_mid} <br>
        low ?${u32(offset_logic + 4, is_little_endian)} <br>
        offset ?${u32(offset_logic + 8, is_little_endian)} <br>
        offset ?${u32(offset_logic + 12, is_little_endian)} <br>
        low ?${u32(offset_logic + 16, is_little_endian)} <br>
        offset ?${u32(offset_logic + 20, is_little_endian)} <br>
        0 ?${u32(offset_logic + 24, is_little_endian)} <br>
        low ?${u32(offset_logic + 28, is_little_endian)} <br>
         ?${u32(offset_logic + 32, is_little_endian)} <br>
         ?${u32(offset_logic + 36, is_little_endian)} <br>
         ?${u32(offset_logic + 40, is_little_endian)} <br>
         ?${u32(offset_logic + 44, is_little_endian)} <br>
         offset: ?${u32(offset_logic + 48, is_little_endian)} <br>
         ?${u32(offset_logic + 52, is_little_endian)} <br>
         ?${u32(offset_logic + 56, is_little_endian)} <br>
         ?${u32(offset_logic + 60, is_little_endian)} <br>
         ?${u32(offset_logic + 64, is_little_endian)} <br>
         ?${u32(offset_logic + 68, is_little_endian)} <br>
         ?${u32(offset_logic + 72, is_little_endian)} <br>
         ?${u32(offset_logic + 76, is_little_endian)} <br><br>list1<br>${list1 = u32(offset_logic + 0, is_little_endian) + offset_mid}ignore<br>

        ?${u32(list1 + 0, is_little_endian)} <br>
        offset+16 ${u32(list1 + 4, is_little_endian)} <br>
        ?${u32(list1 + 8, is_little_endian)} <br>
        ?${u32(list1 + 12, is_little_endian)} <br><br><br>list2<br>${list2 = u32(list1 + 4, is_little_endian) + offset_mid}ignore<br>

        offset ?${u32(list2 + 0, is_little_endian)} <br>
        ? ${u32(list2 + 4, is_little_endian)} <br>
        ?${u32(list2 + 8, is_little_endian)} <br>
        ?${u32(list2 + 12, is_little_endian)} <br><br><br>list3<br>${list3 = u32(list2 + 0, is_little_endian) + offset_mid}ifnore<br>
        
        ?${u32(list3 + 0, is_little_endian)} <br>
        offset ? ${offset_list2 = u32(list3 + 4, is_little_endian) + offset_mid - 4} <br>
        low ?${amount_list2 = u32(list3 + 8, is_little_endian)} <br>
        ?${u32(list3 + 12, is_little_endian)} <br><br><br>list4<br>${list4 = u32(list2 + 0, is_little_endian) + offset_mid}ifnore<br>

`
        list2_html = ''
        for (i = 0; (i / 36) < amount_list2; i += 36) {
            list2_html += `
n: ${i / 36} / 
string offset: ${u32(offset_list2 + 0 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 4 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 8 + i, is_little_endian)}<br>
offset? ${u32(offset_list2 + 12 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 16 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 20 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 24 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 28 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 32 + i, is_little_endian)}<br><br>
                `
        }

        document.getElementById("outer_program").innerHTML += `${list2_html}

${list5 = u32(offset_logic + 48, is_little_endian) + offset_mid}<br>

        ?${u32(list5 + 0, is_little_endian)} <br>
         ? ${offset_list2 = u32(list5 + 4, is_little_endian)} <br>
         offset?${amount_list2 = u32(list5 + 8, is_little_endian)} <br>
        ?${u32(list5 + 12, is_little_endian)} <br><br><br>list6<br>${list6 = u32(list5 + 8, is_little_endian) + offset_mid}ifnore<br>
       
        ?${u32(list6 + 0, is_little_endian)} <br>
         ? ${offset_list2 = u32(list6 + 4, is_little_endian)} <br>
         offset?${amount_list2 = u32(list6 + 8, is_little_endian)} <br>

`

        /*4 offset to offset logic
16 offset logic
32 offset list1
116 offset list2
148 offset list 4
128 offset list3
200 offset +8???
80 offset list5*/

    } else if (file_type == 'interface') {
        temp = u32(offset_mid + 4, is_little_endian) + offset_mid
        offset_logic = u32(temp, is_little_endian) + offset_mid

        document.getElementById("outer_program").innerHTML = `
        logic_offset: ${offset_logic}}<br>

        interface header:<br>
        low maybe u8 ${u8(offset_logic, is_little_endian)} , ${u8(offset_logic + 1, is_little_endian)} , ${u8(offset_logic + 2, is_little_endian)} , ${u8(offset_logic + 3, is_little_endian)}<br>
        ?offset${u32(offset_logic + 4, is_little_endian)} // ${u32(offset_logic + 4, is_little_endian) + offset_mid - offset_logic} offset after header <br>
        low ?${u32(offset_logic + 8, is_little_endian)}<br>
        offset ${u32(offset_logic + 12, is_little_endian)}<br>
        low ?${u32(offset_logic + 16, is_little_endian)}<br>
         ?${u32(offset_logic + 20, is_little_endian)}<br>
         ?${u32(offset_logic + 24, is_little_endian)}<br>
        offset sometimes? ?${u32(offset_logic + 28, is_little_endian)}<br>
        ? ${u32(offset_logic + 32, is_little_endian)}<br>
        ? ${u32(offset_logic + 36, is_little_endian)}<br>
        ? ${u32(offset_logic + 40, is_little_endian)}<br>
        low ? ${u32(offset_logic + 44, is_little_endian)}<br>
        offset:? ${u32(offset_logic + 48, is_little_endian)}<br>
        0 ? ${u32(offset_logic + 52, is_little_endian)}<br>
        offset ? ${u32(offset_logic + 56, is_little_endian)}<br>
        float ? ${f32(offset_logic + 60, is_little_endian)}<br>
        ? ${u32(offset_logic + 64, is_little_endian)}<br>
        amount in FF FF list ? low ? ${amount_fflist = u32(offset_logic + 68, is_little_endian)}<br>
        offset ? ${offset_fflist = u32(offset_logic + 72, is_little_endian)}<br>
        ? ${u32(offset_logic + 76, is_little_endian)}<br>

            list 1 offset: ${offset_list1 = u32(offset_logic + 4, is_little_endian) + offset_mid}
        <br><br>list1:<br>
            amount in list2 ${u32(offset_list1 + 0, is_little_endian)}<br>
            offset list2 ${u32(offset_list1 + 4, is_little_endian)} // +16 <br>
            padding ? ${u32(offset_list1 + 8, is_little_endian)}  <br>
            padding ? ${u32(offset_list1 + 12, is_little_endian)} <br>

            <br>`
        amount_list2 = u32(offset_list1 + 0, is_little_endian)
        offset_list2 = u32(offset_list1 + 4, is_little_endian) + offset_mid

        list2_html = "list2"

        for (i = 0; (i / 36) < amount_list2; i += 36) {
            list2_html += `
n: ${i / 36} / 
string offset: ${u32(offset_list2 + 0 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 4 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 8 + i, is_little_endian)}<br>
offset? ${u32(offset_list2 + 12 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 16 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 20 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 24 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 28 + i, is_little_endian)}<br>
? ${u32(offset_list2 + 32 + i, is_little_endian)}<br><br>
                `
        }

        offset_list4 = u32(offset_logic + 12, is_little_endian) + offset_mid

        document.getElementById("outer_program").innerHTML += `${list2_html}
                ignore offset from list2offset for now<br><br>list4:<br>
alwas 1026 ?: ${u32(offset_list4 + 0, is_little_endian)}<br>
offset ? ${list5 = u32(offset_list4 + 4, is_little_endian)} always+64? ${list5 + offset_mid - offset_list4} <br>
 ? ${u32(offset_list4 + 8, is_little_endian)}<br>
 ? ${u32(offset_list4 + 12, is_little_endian)}<br>
 ? ${u32(offset_list4 + 16, is_little_endian)}<br>
 ? ${u32(offset_list4 + 20, is_little_endian)}<br>
 ? ${u32(offset_list4 + 24, is_little_endian)}<br>
 ? ${u32(offset_list4 + 28, is_little_endian)}<br>

<br>offsetfromoffsetabouve<br>

u8 prob ? ${u8(list5 + offset_mid + 0, is_little_endian)} , ${u8(list5 + offset_mid + 1, is_little_endian)} , ${u8(list5 + offset_mid + 2, is_little_endian)} , ${u8(list5 + offset_mid + 3, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 4, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 8, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 12, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 16, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 20, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 24, is_little_endian)}<br>
? ${u32(list5 + offset_mid + 28, is_little_endian)}<br>-----------movingto ff<br>

<br>${offset_fflist}



`

    }

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
function load_edit_sound() {

    for (var i = 0; i < document.getElementsByClassName("binary_table")[0].children[1].children.length; i++) {
        document.getElementsByClassName("binary_table")[0].children[1].children[i].dataset.sound_row_select = 'false'
    }
    let select_row_index = this.getElementsByTagName('td')[0].innerText - 1
    document.getElementsByClassName("binary_table")[0].children[1].children[select_row_index].dataset.sound_row_select = 'true'

    i_offset = offset_audio + (32 * select_row_index)

    sound_offset = u32(i_offset, endian)
    sound_length = u32(i_offset + 4, endian)
    sound_ff_ff_ff_ff = u32(i_offset + 8, endian)
    sound_sample_rate = u32(i_offset + 12, endian)
    sound_16 = u32(i_offset + 16, endian)
    sound_20 = u16(i_offset + 20, endian)
    sound_22 = u16(i_offset + 22, endian)
    sound_24 = u32(i_offset + 24, endian)
    sound_28 = u32(i_offset + 28, endian)

    // get values from sound
    document.getElementById("edit_program").innerHTML = `

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
                console.log(this.value, offset_audio, sound_box_length.value)

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

function isNumeric(str) {
    if (typeof str != "string")
        return false
    // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
    // ...and ensure strings of whitespace fail
}

function load_replace_sound_file(event) {

    var filename = document.getElementById("replace_sound_file").files[0].name
    var fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    fileextension = fileextension.toLowerCase()

    var file = event.target.files[0];
    var reader = new FileReader();

    replace_sound_buffer = reader.readAsArrayBuffer(file);

    document.getElementById("replace_sound_file").value = ''

    console.log(fileextension)

    reader.onload = function(e) {
        replace_sound_buffer = e.target.result

        if (new DataView(replace_sound_buffer).getUint32(0, true) != 1179011410) {
            console.log('not wav')
            return
        }
        let audio_replace_sample_rate = new DataView(replace_sound_buffer).getUint32(24, true)
        // samplerate

        //get index
        let node = document.querySelector(`tr[data-sound_row_select="true"]`)
        let temp_index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);

        document.getElementById("sound_table_" + temp_index).innerHTML = ""
        document.getElementById("sound_table_" + temp_index + "_download").innerHTML = ""

        offset_audio_replace = offset_audio + (32 * temp_index)

        new DataView(buffer).setUint32(offset_audio_replace + 12, audio_replace_sample_rate, is_little_endian)

        //get offset /lengtyh box
        old_sound_offset = document.getElementById("sound_box_offset").value
        old_sound_length = document.getElementById("sound_box_length").value

        old_sound_offset = Number(old_sound_offset) + offset_audio

        //get new dataview?

        replace_sound_buffer = replace_sound_buffer.slice(44)

        temp_sound_buffer = new ArrayBuffer(old_sound_length)
        temp_sound_buffer = replace_sound_buffer

        //replace buffer with new wav

        if (replace_sound_buffer.byteLength >= old_sound_length) {

            for (ii_length = 0; ii_length < old_sound_length; ii_length += 2) {
                let temp = new DataView(temp_sound_buffer).getUint16(ii_length, true)
                new DataView(buffer).setUint16(old_sound_offset + ii_length, temp, is_little_endian)
            }

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
        generate_and_attach_wav(old_sound_offset, old_sound_length, audio_replace_sample_rate, temp_index)

        document.getElementById("sound_row_select_" + temp_index).click()

    }

}
function load_save_sound_file() {
    console.log("real")

    let node = document.querySelector(`tr[data-sound_row_select="true"]`)
    let temp_index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);

    temp_sound_offset = offset_audio + (32 * temp_index)

    console.log(temp_index)

    new DataView(buffer).setUint32(temp_sound_offset, document.getElementById("sound_box_offset").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 4, document.getElementById("sound_box_length").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 8, document.getElementById("sound_box_ff").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 12, document.getElementById("sound_box_sample_rate").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 16, document.getElementById("sound_box_16").value, is_little_endian)
    new DataView(buffer).setUint16(temp_sound_offset + 20, document.getElementById("sound_box_20").value, is_little_endian)
    new DataView(buffer).setUint16(temp_sound_offset + 22, document.getElementById("sound_box_22").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 24, document.getElementById("sound_box_24").value, is_little_endian)
    new DataView(buffer).setUint32(temp_sound_offset + 28, document.getElementById("sound_box_28").value, is_little_endian)

    document.getElementById("sound_row_select_" + temp_index).click()

    old_sound_offset = document.getElementById("sound_box_offset").value
    old_sound_length = document.getElementById("sound_box_length").value
    old_sound_sample_rate = document.getElementById("sound_box_sample_rate").value

    document.getElementById("sound_table_" + temp_index).innerHTML = ""
    document.getElementById("sound_table_" + temp_index + "_download").innerHTML = ""

    generate_and_attach_wav(Number(old_sound_offset), old_sound_length, old_sound_sample_rate, temp_index)

}

function generate_and_attach_wav(old_sound_offset, sound_length, sound_sample_rate, sound_index) {
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
    ii = old_sound_offset + offset_audio; ii_length < sound_length; ii += 2,
    ii_length += 2) {
        temp = u16(offset_audio + old_sound_offset + ii_length, is_little_endian)
        new DataView(wav_).setUint16(44 + ii_length, temp, true)
    }

    var objectURL = URL.createObjectURL(new Blob([wav_]))

    document.getElementById("sound_row_select_" + sound_index).addEventListener("click", load_edit_sound);

    var link = document.createElement("audio");
    link.src = objectURL
    link.controls = true
    link.title = objectURL + ".wav"
    document.getElementById("sound_table_" + sound_index).appendChild(link)

    // var download_sound = document.createElement("a")
    // download_sound.href = objectURL
    // download_sound.download = objectURL + ".wav"
    // download_sound.innerText = "download as .wav"
    // document.getElementById("sound_table_" + sound_index + "_download").appendChild(download_sound)

}

function save_buffer() {

    if (buffer == null) {} else {

        var objectURL = URL.createObjectURL(new Blob([buffer]))

        let download_file = document.createElement("a")
        download_file.id = 'temp_download_file'
        download_file.href = objectURL
        download_file.download = document.body.getElementsByClassName("folder")[0].dataset.file
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

function load_models() {

    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }
    document.getElementById("outer_program").innerHTML = "wip"

}

function load_animations() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }
    document.getElementById("outer_program").innerHTML = "wip"
}
function load_collision() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }
    document.getElementById("outer_program").innerHTML = `wip`
    // ${u32(offset_mid + 192, is_little_endian) + offset_mid}`

    // offset_2table = u32(offset_mid + 192, is_little_endian) + offset_mid + 48
    // // table 2
    // amount_2table = u32(offset_mid + 228, is_little_endian) - 1

    // html_to_obj = ""

    // for (i_2table = 0; (i_2table / 48) < amount_2table; i_2table += 48) {
    //     // html_to_obj += `v  ${f32(offset_2table + i_2table + 0, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 4, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 8, is_little_endian).toFixed(6)} # ${(i_2table / 48)} <br>v ${f32(offset_2table + i_2table + 16, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 20, is_little_endian).toFixed(6)} ${f32(offset_2table + i_2table + 24, is_little_endian).toFixed(6)} <br>`
    //     amount_end_table3 = u32(offset_2table + i_2table + 32, is_little_endian)
    //     offset_end_table3 = u32(offset_2table + i_2table + 36, is_little_endian) + offset_mid
    //     offset_header_table3 = u32(offset_2table + i_2table + 40, is_little_endian) + offset_mid
    //     amount_header_table3 = u32(offset_2table + i_2table + 44, is_little_endian)

    //     for (amount_header_table3_i = 0; amount_header_table3_i < amount_header_table3; amount_header_table3_i++) {
    //         collision_table_3_data_offset = u32(offset_header_table3 + (amount_header_table3_i * 12), is_little_endian) + offset_mid
    //         collision_table_3_data_amount = u32(offset_header_table3 + (amount_header_table3_i * 12) + 4, is_little_endian)
    //         collision_table_3_data_unknown = u32(offset_header_table3 + (amount_header_table3_i * 12) + 8, is_little_endian)

    //         for (amount_data_table3_i = 0; amount_data_table3_i < collision_table_3_data_amount; amount_data_table3_i++) {
    //             temp_w = f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 12, is_little_endian)
    //             html_to_obj += `v  ${f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 0, is_little_endian) * temp_w} ${f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 4, is_little_endian) * temp_w} ${f32(collision_table_3_data_offset + (amount_data_table3_i * 32) + 8, is_little_endian) * temp_w} <br>
    //     `
    //             // table_3_line_1 = u16(collision_table_3_data_offset + ((amount_data_table3_i) * 32) + 20, is_little_endian)
    //             // table_3_line_2 = u16(collision_table_3_data_offset + ((amount_data_table3_i) * 32) + 22, is_little_endian)
    //             // if(table_3_line_1 == 65535){table_3_line_1 = ""}
    //             // if(table_3_line_2 == 65535){table_3_line_2 = ""}

    //             // html_to_obj_line+= `l ${(amount_data_table3_i+1)} ${(table_3_line_1)} ${(table_3_line_2)}<br>`

    //         }

    //     }

    // }
    // // html_to_obj += "<br>"
    // // for (i_2table = 0; (i_2table / 2) < amount_2table; i_2table += 2) {// html_to_obj += `l ${(i_2table+1)} ${(i_2table+2)}<br>`
    // // }

    // // html_to_obj_line = ""

    // //2275440 = collision

    // document.getElementById("outer_program").innerHTML = html_to_obj

}

function load_world_options() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }

    document.getElementById("outer_program").innerHTML = 'wip'
    //     offset_world_options_header = u32(offset_mid + 20, is_little_endian) + offset_mid
    //     // load the world options variable before load_world_options / offset_world_options_header

    //     document.getElementById("outer_program").innerHTML = `<style>
    // .world_options_section_select{
    // text-align:center;
    // }
    // .world_options_section_select:hover{
    // background-color:#8f9dff;
    // cursor:pointer;
    // }

    // .world_options_editor_select{
    // background-color:#e2e2e2;
    // }
    // .world_options_editor_select:hover{
    // background-color:#a1a1a1;
    // cursor:pointer;
    // }
    // .world_options_editor_select:active{
    // color:white;
    // }
    // </style>
    // <div style="display:flex;" id="outer_program">

    //     <div id="world_options_select_type" style="line-height:15px;padding-bottom:5px;padding-top:5px;width: 12%;height:705px;overflow-y: auto;">
    //     </div>

    //     <div style="padding-bottom:5px;padding-top:5px;width: 88%;height:705px;/* overflow-y: auto; */">
    //         <div id="world_options_select_editor_buttons" style="height: 5%;">

    //             <a data-world_options_editor_is_active="true" id='world_options_editor_data_table' class='world_options_editor_select'>data_table</a>
    //             <a data-world_options_editor_is_active="false" id='world_options_editor_view' class='world_options_editor_select'>view</a>

    //         </div>
    // <div id="world_options_editor" style="
    //     height: 95%;overflow-y:auto;
    // ">
    // </div>

    // </div>   

    //     `

    //     world_options_editor_data_table.addEventListener('click', world_options_check_editor)
    //     world_options_editor_view.addEventListener('click', world_options_check_editor)

    //     // is_little_endian = false
    //     // const buffer = new Uint8Array(a.split(',')).buffer

    //     u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
    //     u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
    //     u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
    //     f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

    //     // offset_mid = -215264
    //     // a = null

    //     // offset_world_options_header = 0

    //     //256 bytes of header

    //     world_options_friendly_name_array = ['start positions', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???']
    //     world_options_id_array = ['start_positions', '__1', '__2', '__3', '__4', '__5', '__6', '__7', '__8', '__9', '__10', '__11', '__12', '__13', '__14', '__15', '__16']

    //     world_options_header_array = []

    //     //format:
    //     //0 = type of section
    //     //1 = amount of bytes in each entry
    //     //2 = amount of entries
    //     //4 = offset to start of entries
    //     //5 = friendly name
    //     //6 = id

    //     for (world_options_i = 0; world_options_i < 17; world_options_i += 1) {
    //         world_options_header_array.push([world_options_i, 0, 0, 0, world_options_friendly_name_array[world_options_i], world_options_id_array[world_options_i]])

    //     }
    //     for (world_options_i = 0; world_options_i < 256; world_options_i += 16) {

    //         temp_option = u32(world_options_i + offset_world_options_header + 0, is_little_endian)

    //         world_options_header_array[temp_option][1] = u32(world_options_i + offset_world_options_header + 4, is_little_endian)
    //         world_options_header_array[temp_option][2] = u32(world_options_i + offset_world_options_header + 8, is_little_endian)
    //         world_options_header_array[temp_option][3] = u32(world_options_i + offset_world_options_header + 12, is_little_endian)

    //         if (u32(world_options_i + offset_world_options_header + 8 + 16, is_little_endian) == 0) {
    //             world_options_i += 256
    //         }

    //     }

    //     // append to html

    //     for (world_options_i = 0; world_options_i < world_options_header_array.length; world_options_i++) {
    //         if (world_options_header_array[world_options_i][2] == 0) {// no entries
    //         } else {
    //             world_options_select_type.innerHTML += `<div data-world_options_section='${world_options_i}' class='world_options_section_select' id="${world_options_header_array[world_options_i][5]}">${world_options_header_array[world_options_i][0]} / ${world_options_header_array[world_options_i][4]}</div>`

    //             document.getElementById(world_options_header_array[world_options_i][5]).addEventListener('click', world_options_click_option)
    //         }
    //     }

    //     for (world_options_i = 0; world_options_i < world_options_select_type.children.length; world_options_i++) {
    //         document.getElementById('world_options_select_type').children[world_options_i].addEventListener('click', world_options_click_option)
    //     }

    //     // world_options_header_array = world_options_header_array.sort(function(a, b) {
    //     //     return a[0] - b[0]
    //     // })

    //     // for (world_options_i = 0; world_options_i < world_options_header_array.length; world_options_i++) {
    //     //     world_options_get_sections(world_options_i)
    //     // }

    //     // ????

    //     function world_options_get_sections(index) {
    //         if (world_options_header_array[index][0] == 0) {
    //             world_options_0_active = true
    //             world_options_0_number_bytes = world_options_header_array[index][1]
    //             world_options_0_amount = world_options_header_array[index][2]
    //             world_options_0_offset = world_options_header_array[index][3]
    //             console.log(world_options_header_array[index])
    //             world_options_select_type.innerHTML += "<a>test</a>"
    //         }
    //         if (world_options_header_array[index][0] == 1) {
    //             //idk
    //             console.log(world_options_header_array[index])
    //         }
    //     }

    //     // create an array that contains defalut array 

    //     function world_options_check_editor() {

    //         console.log(this)
    //         console.log('fixthislateridk')
    //     }
    //     function world_options_click_option() {
    //         world_options_active_type = this.dataset.world_options_section

    //         world_options_active_byte = world_options_header_array[world_options_active_type][1]
    //         world_options_active_amount = world_options_header_array[world_options_active_type][2]
    //         world_options_active_offset = world_options_header_array[world_options_active_type][3]

    //         console.log('byte:', world_options_active_byte)
    //         console.log('amount:', world_options_active_amount)
    //         console.log('offset:', world_options_active_offset)

    //         _0_array = [[0, u32, 'index'], [4, u16, '0'], [6, u16, '0 or 1 other values no change'], [8, u32, '0 other values crash'], [12, u16, '1 other values no change'], [14, u16, ' 8 other values no change'], [16, u16, '1'], [18, u16, '8'], [20, u32, '0'], [24, u32, '0'], [28, u32, '0'], [32, f32, 'position'], [36, f32, 'position'], [40, f32, 'position'], [44, f32, '1'], [48, f32, 'rotation'], [52, f32, 'rotation'], [56, f32, 'rotation'], [60, f32, '1'], [64, u32, '0'], [68, u32, '8'], [72, u16, '0'], [74, u8, 1], [75, u8, 1], [76, f32, 500], [80, f32, 1000], [84, u32, 0], [88, u32, 0], [92, u32, 0], [096, u32, 0], [100, u32, 0], [104, u32, 0], [108, u32, 0], [112, u8, 'unknown'], [113, u16, 'ffff unknown other values no change'], [115, u8, 0], [116, u32, 0], [120, u8, 1], [121, u8, '1 if other number index is moved last'], [122, u16, 0], [124, u32, 0]]

    //         //create data_table

    //         world_options_data_table = ` <table class='binary_table'>
    //                 <thead>
    //                     <tr>`
    //         for (world_options_i = 0; world_options_i < _0_array.length; world_options_i++) {
    //             world_options_data_table += `<th>${_0_array[world_options_i][2]}</th>`
    //         }

    //         world_options_data_table += `
    //                 </thead>
    //                 <tbody id='idk24124'>

    // `

    //         for (world_options_i = 0; world_options_i < world_options_active_amount; world_options_i++) {
    //             world_options_data_table += `<tr>`
    //             for (world_options_i_i = 0; world_options_i_i < _0_array.length; world_options_i_i++) {

    //                 world_options_data_table += `<td><input value="${_0_array[world_options_i_i][1](offset_mid + world_options_active_offset + _0_array[world_options_i_i][0] + (world_options_i * world_options_active_byte), is_little_endian)}"></td>`
    //             }
    //             world_options_data_table += `</tr>`
    //         }

    //         document.getElementById('world_options_editor').innerHTML = world_options_data_table

    //         idk24124.addEventListener("click", function(event) {
    //             var td = event.target;
    //             while (td !== this && !td.matches("td")) {
    //                 td = td.parentNode;
    //             }
    //             if (td === this) {
    //                 console.log("No table cell found");
    //             } else {
    //                 console.log(td.innerHTML);
    //             }
    //         });

    //         // datatable 
    //         // index 
    //         // byte type
    //         // name

    //     }

    //all get to offset
}

function load_music() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }
    document.getElementById("outer_program").innerHTML = "wip"
}

