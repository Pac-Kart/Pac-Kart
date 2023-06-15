function load_varible(offset,offset_mid) {

    let html =''

     let setting_04 = `[ ${u8(offset + 4, is_little_endian)} ,${u8(offset + 5, is_little_endian)} ,${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]`
    let setting_08 = u32(offset + 8, is_little_endian)
    let setting_12 = u32(offset + 12, is_little_endian)
    // offset
    let setting_16 = u32(offset + 16, is_little_endian)
    let setting_20 = u32(offset + 20, is_little_endian)
    let setting_24 = u32(offset + 24, is_little_endian)
    let setting_28 = u32(offset + 28, is_little_endian)
    let setting_32 = `[ ${u8(offset + 32, is_little_endian)} ,${u8(offset + 33, is_little_endian)} ,${u8(offset + 34, is_little_endian)}, ${u8(offset + 35, is_little_endian)} ]`

    html += `--->---> | ${setting_04} | ${setting_08} | ${setting_16} | ${setting_20} | ${setting_24} | ${setting_28} | ${setting_32} `
    if (setting_12 !== 0) {
        //offset probably
        html += get_settings_inner(setting_12 + offset_mid,offset_mid)

    }

    document.getElementById("file_editor").innerHTML = html  + "</div>"

}
function get_settings_inner(offset,offset_mid) {
    let setting_inner = ""
    setting_inner += `<br>--->--->--->[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    if (u32(offset + 4, is_little_endian) !== 0) {
        //offset probably
        setting_inner += get_settings_inest(u32(offset + 4, is_little_endian) + offset_mid)
    }
    return setting_inner
}

function get_settings_inest(offset) {
    let get_settings_inest_html = `<br>--->--->--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    return get_settings_inest_html
}

