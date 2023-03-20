function load_sub_file_header(offset) {
        document.getElementById("file_editor").innerHTML = `    <div data-debug='true'>offset:${offset}<br>
        ---> offset to 2nd offset list ${u32(offset,is_little_endian)}<br>
        | offset to 1st offset list ${u32(offset +4,is_little_endian)}<br>
        | sounds ${u32(offset +8,is_little_endian)} <br>
        | amount 2nd part of 2nd offset list ${u32(offset +12,is_little_endian)}<br>
        | amount ??? part of 1st offset list ${u32(offset +16,is_little_endian)}<br>
        | textures ${u32(offset +20,is_little_endian)}<br>
        | offset to textures ${u32(offset +24,is_little_endian)}<br>
        | amount ??? part of 1st offset list ${u32(offset +28,is_little_endian)}<br>
        | amount of offsets in sound offset list ${u32(offset +32,is_little_endian)}<br>
        | always 0 ${u32(offset +36,is_little_endian)} <br>
        | always 0 ${u32(offset +40,is_little_endian)}<br>
        | always 0 ${u32(offset +44,is_little_endian)}<br>
        | amount of sections in animation header ${u32(offset +48,is_little_endian)}<br>
        | amount ??? part of 1st offset list ${u32(offset +52,is_little_endian)}<br>
        |amount 1st part of 2nd offset list ${u32(offset +56,is_little_endian)}<br>
        | offset to animations ${u32(offset +60,is_little_endian)}<br> | null after ? ${u32(offset +64,is_little_endian)} | ${u32(offset +68,is_little_endian)} | ${u32(offset +72,is_little_endian)} | ${u32(offset +76,is_little_endian)} |<br>
        link: ${get_string(offset +80,offset +92)} || ${u32(offset +92,is_little_endian)} | ${u32(offset +96,is_little_endian)} |<br>
        link ${get_string(offset +100,offset +112)} || ${u32(offset +112,is_little_endian)} | ${u32(offset +116,is_little_endian)}</div>`

}