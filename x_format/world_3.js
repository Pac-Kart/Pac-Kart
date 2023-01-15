function load_world_3(offset, amount) {
    console.log(offset, "cam")
    let html = '<table><tbody>'

    for (let i = 0; i < amount; i++) {
        html += `<tr>
                    <td>${f32(offset + 32 + (i * 64), is_little_endian)} </td>
                    <td>${f32(offset + 36 + (i * 64), is_little_endian)}</td>
                    <td>${f32(offset + 40 + (i * 64), is_little_endian)}</td>
                    <td>F${f32(offset + 44 + (i * 64), is_little_endian)}</td>
                    <td>${u32(offset + 48 + (i * 64), is_little_endian)} </td>
                    <td>${u32(offset + 52 + (i * 64), is_little_endian)}</td>
                    <td>${u32(offset + 56 + (i * 64), is_little_endian)}</td>
                    <td>F${f32(offset + 60 + (i * 64), is_little_endian)}</td>
                </tr>`

        // html += load_world_camera_1(u32(offset + 64 + (i * 96), is_little_endian) + offset_mid)
        // html += load_world_camera_2(u32(offset + 72 + (i * 96), is_little_endian) + offset_mid)

    }
    html += '</tr></tbody></table>'

    document.getElementById("file_editor").innerHTML = html
}
