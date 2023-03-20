function load_world_8(offset, amount) {
    let html = offset + '<br>wip still<br>'

    for (let i = 0; i < amount; i++) {
        html += `<br> ${u32(offset + 32 + (i * 80), is_little_endian)} | ${u32(offset + 36 + (i * 80), is_little_endian)} | ${u32(offset + 40 + (i * 80), is_little_endian)} | ${u32(offset + 44 + (i * 80), is_little_endian)} | ${u32(offset + 48 + (i * 80), is_little_endian)} | ${u32(offset + 52 + (i * 80), is_little_endian)} | ${u32(offset + 56 + (i * 80), is_little_endian)} | ${u32(offset + 60 + (i * 80), is_little_endian)} | ${u32(offset + 64 + (i * 80), is_little_endian)} | ${u32(offset + 68 + (i * 80), is_little_endian)} | ${u32(offset + 72 + (i * 80), is_little_endian)} | ${u32(offset + 76 + (i * 80), is_little_endian)} `

        if (u32(offset + 36 + (i * 80), is_little_endian) === 8) {
            html += load_world_8_1(u32(offset + 72 + (i * 80), is_little_endian) + offset_mid)
            if (u32(offset + 76 + (i * 80), is_little_endian) != 0) {
                html += load_world_8_v8_2(u32(offset + 76 + (i * 80), is_little_endian) + offset_mid)
            }
        } else if (u32(offset + 36 + (i * 80), is_little_endian) === 7) {
            html += load_world_8_1(u32(offset + 72 + (i * 80), is_little_endian) + offset_mid)
            html += load_world_8_v7_2(u32(offset + 76 + (i * 80), is_little_endian) + offset_mid)
        }
    }

    document.getElementById("file_editor").innerHTML = html
}

function load_world_8_1(offset) {
    let html = `<br>---1> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] `
    return html
}

function load_world_8_v7_2(offset) {
    let html = `<br>---2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    return html

}
function load_world_8_v8_2(offset) {
    let html = `<br>---2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    if(u32(offset + 4, is_little_endian)!==0){
        html+=load_world_8_v8_2_1(u32(offset + 4, is_little_endian)+offset_mid)
    }
    if(u32(offset + 8, is_little_endian)!==0){
        html+=load_world_8_v8_2_2(u32(offset + 8, is_little_endian)+offset_mid)
    }

    return html

}

function load_world_8_v8_2_1(offset) {
    let html = `<br>---2>--1> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    return html

}
function load_world_8_v8_2_2(offset) {
    let html = `<br>---2>--2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html+=load_world_8_v8_2_2_1(u32(offset + 16, is_little_endian)+offset_mid)
    
    return html

}


function load_world_8_v8_2_2_1(offset) {
    let html = `<br>---2>--2>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html
    
}