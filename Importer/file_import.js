function input_file(event) {

    // get file name/extension

    var filename = document.getElementsByTagName("input")[0].files[0].name
    fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    fileextension = fileextension.toLowerCase()

    file = event.target.files[0];
    var reader = new FileReader();

    buffer = reader.readAsArrayBuffer(file);

    document.getElementById("file_input").value = ''

    reader.onload = function(e) {

        buffer = e.target.result
        u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
        u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
        u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
        f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

        XFA = []
        //.x* file array

        document.getElementById("file_viewer").textContent = ''
        document.getElementById("file_editor").textContent = ''

        // check magic
        if (u32(0, true) == 33620128) {
            is_little_endian = true
        } else if (u32(0, true) == 2684354818) {
            is_little_endian = false
        } else if (u32(4, true) == 4 && u32(284, true) == 1
        ) {
            //pc save file
            is_little_endian = true;
            save_file_import(filename, fileextension)
            return;
        } else if (u16(0, true) === 14407 && u32(64, true) === 761487696) {
            //gc save file
            is_little_endian = false;
            save_file_import(filename, fileextension)
            return;
        } else {
            wrong_file_type()
            return
        }

        // document.getElementById("save_button").addEventListener("click", save_buffer);

        //any file past here is a .x* file

        document.getElementById("file_viewer").innerHTML = `
        <div data-file_name="${filename}" data-file_name="${fileextension}" style="width: 90%;text-align: center;"">choose type of file:</div>
        <div id='hot_wheels_velocity_x' class="data_bar_options" style="width: 85%;">Hot Wheels Velocity X</div>     
        <div id='snoopy_vs_the_red_baron' class="data_bar_options" style="width: 85%;">Snoopy vs The Red Baron</div>
        <div id='pac_man_world_rally' class="data_bar_options" style="width: 85%;">Pac Man World Rally</div>
        <div id='bigfoot_collision_course' class="data_bar_options" style="width: 85%;">Bigfoot: Collision Course</div>
        `
        document.getElementById("hot_wheels_velocity_x").addEventListener("click", choose_file_type);
        document.getElementById("snoopy_vs_the_red_baron").addEventListener("click", choose_file_type);
        document.getElementById("pac_man_world_rally").addEventListener("click", choose_file_type);
        document.getElementById("bigfoot_collision_course").addEventListener("click", choose_file_type);

        // var region_numer = u32(8, is_little_endian)
        // var number_files = u32(12, is_little_endian)

        // atach_folder_to_file_viewer(filename, fileextension, region_numer, number_files)

        // for (files_i = 0; files_i < number_files; files_i++) {
        //     var offset = (files_i * 24) + 16

        //     var region = u32(offset + 0, is_little_endian)
        //     var type = u32(offset + 4, is_little_endian)
        //     var index = u32(offset + 8, is_little_endian)
        //     var unknown = u32(offset + 12, is_little_endian)
        //     var amount_bytes = u32(offset + 16, is_little_endian)
        //     var file_offset = u32(offset + 20, is_little_endian)

        //     atach_file_to_file_viewer(region, type, index, unknown, amount_bytes, file_offset, files_i)
        // }

    }

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
document.getElementById("file_input").addEventListener("change", input_file);
