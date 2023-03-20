function load_world_2(offset,amount) {
    let html = offset +'<br>wip still<br>'
    
    for(let i =0;i < amount;i++){
        html+=`<br> ${u32(offset + 32 + (i * 112), is_little_endian)} | ${u32(offset + 36 + (i * 112), is_little_endian)} | ${u32(offset + 40 + (i * 112), is_little_endian)} | ${u32(offset + 44 + (i * 112), is_little_endian)} | ${u32(offset + 48 + (i * 112), is_little_endian)} | ${u32(offset + 52 + (i * 112), is_little_endian)} | ${u32(offset + 56 + (i * 112), is_little_endian)} | ${u32(offset + 60 + (i * 112), is_little_endian)} | ${u32(offset + 64 + (i * 112), is_little_endian)} | ${u32(offset + 68 + (i * 112), is_little_endian)} | ${u32(offset + 72 + (i * 112), is_little_endian)} | ${u32(offset + 76 + (i * 112), is_little_endian)} | ${u32(offset + 80 + (i * 112), is_little_endian)} | ${u32(offset + 84 + (i * 112), is_little_endian)} | ${u32(offset + 88 + (i * 112), is_little_endian)} | ${u32(offset + 92 + (i * 112), is_little_endian)} | ${u32(offset + 96 + (i * 112), is_little_endian)} | ${u32(offset + 100 + (i * 112), is_little_endian)} | ${u32(offset + 104 + (i * 112), is_little_endian)} | ${u32(offset + 108 + (i * 112), is_little_endian)}`

        html+=get_world_2_1(u32(offset + 72 + (i * 112), is_little_endian)+offset_mid)
    }
    

    document.getElementById("file_editor").innerHTML = html
}

function get_world_2_1(offset) {
    let html = `<br>--1> ${u32(offset + 0, is_little_endian)} | `
    return html
}

