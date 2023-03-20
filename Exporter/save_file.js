function save_file() {

    //calculate what type of file is being saved
    if (XFA.length != 0) {
        
        temp_buffer = dynamic_save()
    } else {
        temp_buffer = buffer
        if (fileextension == 'sav') {
            // calculate new crc
            calculate_crc()
        }
    }
    let objectURL = URL.createObjectURL(new Blob([temp_buffer]))

    let download_file = document.createElement("a")
    download_file.id = 'temp_download_file'
    download_file.href = objectURL
    download_file.download = file.name
    document.getElementById("save_button").appendChild(download_file)

    document.getElementById("temp_download_file").click()

    document.getElementById("temp_download_file").remove()
}
