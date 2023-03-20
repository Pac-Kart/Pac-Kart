function load_world_x_world_weird(offset) {
    let html = `                <div> F${f32(offset + 0, is_little_endian).toFixed(2)} | F${f32(offset + 4, is_little_endian).toFixed(2)} |  F${f32(offset + 8, is_little_endian).toFixed(2)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian).toFixed(2)} | F${f32(offset + 36, is_little_endian).toFixed(2)} | F${f32(offset + 40, is_little_endian).toFixed(2)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)}  | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}
`
    html += load_world_x_world_weird_1(u32(offset + 16, is_little_endian)+offset_mid)
    html += load_world_x_world_weird_1(u32(offset + 20, is_little_endian)+offset_mid)
    html += '</div>'
    document.getElementById("file_editor").innerHTML = html

}

function load_world_x_world_weird_1(offset) {
    let html = `<br>---> F${f32(offset + 0, is_little_endian).toFixed(2)} | F${f32(offset + 4, is_little_endian).toFixed(2)} |  F${f32(offset + 8, is_little_endian).toFixed(2)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian).toFixed(2)} | F${f32(offset + 36, is_little_endian).toFixed(2)} | F${f32(offset + 40, is_little_endian).toFixed(2)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)}  | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`
    return html
}