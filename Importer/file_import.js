async function input_file(event) {
    g = {
        divisible_prev_value: 0,
    }

    const files = event.currentTarget.files;
    last_file = files.length - 1
    Object.keys(files).forEach(i=>{

        // letinput_file file = files[i];
        gfile = files[i];
        filename = gfile.name
        fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()
        const reader = new FileReader();
        read_a_file(reader, i, gfile)

        //     reader.readAsArrayBuffer(gfile)
        //     reader.onload = (e)=>{
        //         buffer = e.target.result

        //         var filename = gfile.name
        //         fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()

        //         document.getElementById("file_input").value = ''
        //         // return
        //         // new Error('broke')

        //         // buffer = e.target.result
        //         u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
        //         u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
        //         u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
        //         f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

        //         // dynamic array
        //         XFA = []
        //         x = []
        //         id_list = [];
        //         //.x* file array

        //         document.getElementById("file_viewer").textContent = ''
        //         document.getElementById("file_editor").textContent = ''

        //         // check magic
        //         if (u32(0, true) == 33620128) {
        //             is_little_endian = true
        //         } else if (u32(0, true) == 2684354818) {
        //             is_little_endian = false
        //         } else if (u32(4, true) == 4 && u32(284, true) == 1) {
        //             //pc save file
        //             is_little_endian = true;
        //             save_file_import(filename, fileextension)
        //             return;
        //         } else if (u16(0, true) === 14407 && u32(64, true) === 761487696) {
        //             //gc save file
        //             is_little_endian = false;
        //             save_file_import(filename, fileextension)
        //             return;
        //         } else {
        //             wrong_file_type()
        //             return
        //         }

        //         u8 = (o)=>new DataView(buffer).getUint8(o, is_little_endian)
        //         u16 = (o)=>new DataView(buffer).getUint16(o, is_little_endian)
        //         u32 = (o)=>new DataView(buffer).getUint32(o, is_little_endian)
        //         f32 = (o)=>new DataView(buffer).getFloat32(o, is_little_endian)

        //         // document.getElementById("save_button").addEventListener("click", save_buffer);

        //         //any file past here is a .x* file

        //         document.getElementById("file_viewer").innerHTML = `
        //     <div data-file_name="${filename}" data-file_name="${fileextension}" style="width: 90%;text-align: center;"">choose type of file:</div>
        //     <div id='hot_wheels_velocity_x' class="data_bar_options" style="width: 85%;">Hot Wheels Velocity X</div>     
        //     <div id='snoopy_vs_the_red_baron' class="data_bar_options" style="width: 85%;">Snoopy vs The Red Baron</div>
        //     <div id='pac_man_world_rally' class="data_bar_options" style="width: 85%;">Pac Man World Rally</div>
        //     <div id='bigfoot_collision_course' class="data_bar_options" style="width: 85%;">Bigfoot: Collision Course</div>
        //     `
        //         document.getElementById("hot_wheels_velocity_x").addEventListener("click", choose_game_type);
        //         document.getElementById("snoopy_vs_the_red_baron").addEventListener("click", choose_game_type);
        //         document.getElementById("pac_man_world_rally").addEventListener("click", choose_game_type);
        //         document.getElementById("bigfoot_collision_course").addEventListener("click", choose_game_type);

        //         //testing
        // if (filename === "_Bigfoot - mcp.xdx9") {
        //     document.getElementById("bigfoot_collision_course").click();
        // } else if (filename === "_HWVX_mcp.xpc") {
        //     document.getElementById("hot_wheels_velocity_x").click();
        // } else if (filename === "_Snoopy mcp.xpc") {
        //     document.getElementById("snoopy_vs_the_red_baron").click();
        // } else {
        //     document.getElementById("pac_man_world_rally").click();
        // }
        // console.log(`%c ${filename}`, 'color:#ff10ff')
        // if (last_file == Number(i)) {
        //     array_log()
        // }

        //     }
    }

    )

    // multi_files = event.target.files
    // console.log(event.target.files.length)

    // // get file name/extension

    // var filename = document.getElementsByTagName("input")[0].files[0].name
    // fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    // fileextension = fileextension.toLowerCase()

    // file = event.target.files[0];
    // var reader = new FileReader();

    // buffer = reader.readAsArrayBuffer(file);

    // document.getElementById("file_input").value = ''

    // }
}

function read_a_file(reader, i, file) {
    try {
        reader.readAsArrayBuffer(file)
        reader.onload = (e)=>{
            buffer = e.target.result

            var filename = file.name
            fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()

            document.getElementById("file_input").value = ''
            // return
            // new Error('broke')

            // buffer = e.target.result
            u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
            u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
            u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
            f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

            // dynamic array
            XFA = []
            x = []
            id_list = [];
            //.x* file array

            document.getElementById("file_viewer").textContent = ''
            document.getElementById("file_editor").textContent = ''

            // check magic
            if (new DataView(buffer).byteLength < 17) {
                wrong_file_type()
                return;
            }
            if (u32(0, true) == 33620128) {
                is_little_endian = true
            } else if (u32(0, true) == 2684354818) {
                is_little_endian = false
            } else if (u32(4, true) == 4 && u32(284, true) == 1) {
                //pc save file
                is_little_endian = true;
                save_file_import(filename, fileextension)
                return;
            } else if (u16(0, true) === 14407 && u32(64, true) === 761487696) {
                //gc save file
                is_little_endian = false;
                save_file_import(filename, fileextension)
                return;
            } else if (u32(4, true) == 4 && u32(8, true) === 9624) {
                //ghost
                is_little_endian = true;
                save_file_import(filename, fileextension)
                return;
            } else {
                wrong_file_type()
                return
            }

            const dataView = new DataView(buffer);

            u8 = (o)=>dataView.getUint8(o, is_little_endian);
            u16 = (o)=>dataView.getUint16(o, is_little_endian);
            u32 = (o)=>dataView.getUint32(o, is_little_endian);
            f32 = (o)=>dataView.getFloat32(o, is_little_endian);

            // u8 = (o)=>new DataView(buffer).getUint8(o, is_little_endian)
            // u16 = (o)=>new DataView(buffer).getUint16(o, is_little_endian)
            // u32 = (o)=>new DataView(buffer).getUint32(o, is_little_endian)
            // f32 = (o)=>new DataView(buffer).getFloat32(o, is_little_endian)

            // document.getElementById("save_button").addEventListener("click", save_buffer);

            //any file past here is a .x* file

            document.getElementById("file_viewer").innerHTML = `
        <div data-file_name="${filename}" data-file_name="${fileextension}" style="width: 90%;text-align: center;"">choose type of file:</div>
        <div id='hot_wheels_velocity_x' class="data_bar_options" style="width: 85%;">Hot Wheels Velocity X</div>     
        <div id='snoopy_vs_the_red_baron' class="data_bar_options" style="width: 85%;">Snoopy vs The Red Baron</div>
        <div id='pac_man_world_rally' class="data_bar_options" style="width: 85%;">Pac Man World Rally</div>
        <div id='bigfoot_collision_course' class="data_bar_options" style="width: 85%;">Bigfoot: Collision Course</div>
        `
            document.getElementById("hot_wheels_velocity_x").addEventListener("click", choose_game_type);
            document.getElementById("snoopy_vs_the_red_baron").addEventListener("click", choose_game_type);
            document.getElementById("pac_man_world_rally").addEventListener("click", choose_game_type);
            document.getElementById("bigfoot_collision_course").addEventListener("click", choose_game_type);

            //testing
            if (filename === "_Bigfoot - mcp.xdx9") {
                // document.getElementById("bigfoot_collision_course").click();
            } else if (filename === "_HWVX_mcp.xpc") {
                // document.getElementById("hot_wheels_velocity_x").click();
            } else if (filename === "_Snoopy mcp.xpc") {
                // document.getElementById("snoopy_vs_the_red_baron").click();
            } else {
                // document.getElementById("pac_man_world_rally").click();
            }
                // document.getElementById("snoopy_vs_the_red_baron").click();

            console.log(`%c ${filename}`, 'color:#ff10ff')
            if (last_file == Number(i)) {
                // array_log()
            }

        }
    } catch (error) {}

}

function wrong_file_type() {
    alert('wrong file type!')
    buffer = null
    u8 = null
    u16 = null
    u32 = null
    f32 = null
    XFA = null
}

function choose_game_type() {
    if (document.getElementById("save_button") === null) {
        document.getElementById("data_types_bar").innerHTML += `<a data-is_active="false" class="data_bar_options" id="save_button">Save</a>`
        document.getElementById("save_button").addEventListener("click", save_file);
    }

    game = this.id
    // console.log(this)
    let html = ''
    if (fileextension === 'xpc' && game === "pac_man_world_rally" && u32(12) !== 2) {

        im_x(this.id, 0, gfile.name)

        html = dynamic__x_generator()
        // html = get_x_static(this.id, this.parentNode.children[0].dataset.file_name, false)
        //temp

        // get_X(this.id, 0, this.parentNode.children[0].dataset.file_name)
    } else {
        html = get_x_static(this.id, gfile.name, false)
    }

    document.getElementById("file_viewer").innerHTML = html

    // now addEventListener
    x_addEventListener();

    document.getElementsByClassName('file_hover_not_selected')[0].click()

    document.getElementById("file_viewer").addEventListener("keydown", file_move_with_key);

    document.getElementById("file_viewer").focus();

}

function generate_file_view() {
    game === "pac_man_world_rally" ? html = dynamic__x_generator() : html = get_x_file_list(this.id, this.parentNode.children[0].dataset.file_name, false)

    document.getElementById("file_viewer").innerHTML = html

    // now addEventListener
    x_addEventListener();
}
document.getElementById("file_input").addEventListener("change", input_file);
