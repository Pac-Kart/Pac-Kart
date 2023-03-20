function load_world_13(offset, amount) {
    let html = offset + '<br>hazards? / wip still<br>'

    for (let i = 0; i < amount; i++) {
        html += `<br> F${f32(offset + 32 + (i * 96), is_little_endian).toFixed(2)} | F${f32(offset + 36 + (i * 96), is_little_endian).toFixed(2)} | F${f32(offset + 40 + (i * 96), is_little_endian).toFixed(2)} | F${f32(offset + 44 + (i * 96), is_little_endian)} | F${f32(offset + 48 + (i * 96), is_little_endian)} | F${f32(offset + 52 + (i * 96), is_little_endian)} | F${f32(offset + 56 + (i * 96), is_little_endian)} | F${f32(offset + 60 + (i * 96), is_little_endian)} | ${u32(offset + 64 + (i * 96), is_little_endian)} | F${f32(offset + 68 + (i * 96), is_little_endian)} | ${u32(offset + 72 + (i * 96), is_little_endian)} | ${u32(offset + 76 + (i * 96), is_little_endian)} | ${u32(offset + 80 + (i * 96), is_little_endian)} | ${u32(offset + 84 + (i * 96), is_little_endian)} | ${u32(offset + 88 + (i * 96), is_little_endian)} | ${u32(offset + 92 + (i * 96), is_little_endian)}`

        html += get_world_13_1(u32(offset + 64 + (i * 96), is_little_endian) + offset_mid)
    }
    document.getElementById("file_editor").innerHTML = html
}

function get_world_13_1(offset) {
    let html = `<br>---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)}`

    let type = u8(offset + 0, is_little_endian)
    if (type === 0) {
        html +=get_world_5_1(u32(offset + 4, is_little_endian) + offset_mid)
    } else if (type === 1) {

        html += get_world_13_1_1(u32(offset + 4, is_little_endian) + offset_mid)
    }
    return html
}

function get_world_13_1_1(offset) {
    let html = `<br>--->---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)}`

    html+=get_world_13_1_1_1(u32(offset + 4, is_little_endian)+offset_mid)
    if(u32(offset + 8, is_little_endian)!=0){
    html+=get_world_13_1_1_2(u32(offset + 8, is_little_endian)+offset_mid)
    }

    for(let i =0;i <u32(offset + 40, is_little_endian);i++){
    html+=get_world_13_1_1_5(u32(offset + 44, is_little_endian)+offset_mid + (i*64))
    }
    return html

}

function get_world_13_1_1_2(offset) {
    let html = `<br>--->--->---2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    if(u32(offset + 4, is_little_endian)!=0){
        html+="<br>--->--->---2>---2>"
    }
    for(let i =0; i <u32(offset + 4, is_little_endian);i++){
        html+=get_world_13_1_1_2_2(u32(offset + 8, is_little_endian)+offset_mid+(i*4))
    }
    if(u32(offset + 12, is_little_endian)!=0){
        html+="<br>--->--->---2>---3>"
    }
    for(let i =0; i <u32(offset + 12, is_little_endian);i++){
        html+=get_world_13_1_1_2_3(u32(offset + 16, is_little_endian)+offset_mid+(i*8))
    }
    
    return html
    
}

function get_world_13_1_1_2_3(offset) {
    let html = `${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | `

    return html
    
}

function get_world_13_1_1_2_2(offset) {
    let html = `${u32(offset + 0, is_little_endian)} | `

    return html
    
}
function get_world_13_1_1_1(offset) {
    let html = `<br>--->--->---1> ${get_string(offset, 0, false)}`

    return html
    
}


function get_world_13_1_1_5(offset) {
    let html = `<br>--->--->---5> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

    let type = u8(offset + 0, is_little_endian)

    if(u32(offset + 4, is_little_endian)!=0){
        if(type ===2){
            html+=get_world_13_1_1_5_v2(u32(offset + 4, is_little_endian)+offset_mid)
        }else if(type ===3){
            html+=get_world_13_1_1_5_v3(u32(offset + 4, is_little_endian)+offset_mid)
        }
    }

    
    return html
    
}

function get_world_13_1_1_5_v3(offset) {
    let html = `<br>--->--->---5>----v3> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html
}

function get_world_13_1_1_5_v2(offset) {
    let html = `<br>--->--->---5>----v2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    return html
    
}