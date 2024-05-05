"use strict";
function save_file(e) {

    //calculate what type of file is being saved
    const fileName = g.file_name
    let temp_buffer
    if (x.length) {
        temp_buffer = dynamic_save()
            //Exporter/ordered/buffer.js
    } else {
        temp_buffer = buffer
        if (g.version === 'save') {
            // calculate new crc
            calculate_crc()
        }
    }

    download_file(temp_buffer,fileName)

    // const objectURL = URL.createObjectURL(new Blob([temp_buffer]));

    // const downloadLink = document.createElement("a");
    // downloadLink.href = objectURL;
    // downloadLink.download = fileName;

    // document.getElementById("_2nd_data_bar").appendChild(downloadLink);

    // // Simulate click on the download link
    // downloadLink.click();

    // // Clean up by removing the download link
    // downloadLink.remove();

    // // let objectURL = URL.createObjectURL(new Blob([temp_buffer]))

    // // let download_file = document.createElement("a")
    // // download_file.id = 'temp_download_file'
    // // download_file.href = objectURL
    // // download_file.download = name
    // // document.getElementById("_2nd_data_bar").appendChild(download_file)

    // // document.getElementById("temp_download_file").click()

    // // document.getElementById("temp_download_file").remove()
}


function download_file(buffer,filename) {
    const objectURL = URL.createObjectURL(new Blob([buffer]));

    const downloadLink = document.createElement("a");
    downloadLink.href = objectURL;
    downloadLink.download = filename;

    document.getElementById("_2nd_data_bar").appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

}
