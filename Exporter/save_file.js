function save_file(e) {

    //calculate what type of file is being saved
    let name = gfile.name
    if (x.length) {
        temp_buffer = dynamic_save()
        name = x[0].name
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
    download_file.download = name
    document.getElementById("_2nd_data_bar").appendChild(download_file)

    document.getElementById("temp_download_file").click()

    document.getElementById("temp_download_file").remove()
}
