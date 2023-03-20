function load_folder() {


            let html = `<div data-debug='true'><br>---> magic ${u32(0,is_little_endian)}<br> | magic ${u32(4,is_little_endian)}<br> | console type ${u32(8,is_little_endian)} <br>| amount files ${u32(12,is_little_endian)}</div>`
            
            document.getElementById("file_editor").innerHTML = html

}