function load_animations(offset, amount, mid) {
    let html = `${offset} | ${mid} mid| ${amount} amount <br>`
    for (let i = 0; i < amount; i++) {
        html += get_animation_(offset + (i * 12), mid, i)
    }

    document.getElementById("file_editor").innerHTML = html

}

function get_animation_(offset, mid, i) {
    let html = `<br>---${i}> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} `
        html += get_animation_1(u32(offset,is_little_endian)+mid, mid, i)
    
    return html
}
function get_animation_1(offset, mid, i) {
    let html = `<br>---${i}>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} `
    
        html += get_animation_1_1(u32(offset+4,is_little_endian)+mid, mid, i)


        for(let ii=0; ii <u32(offset+8,is_little_endian);ii++){
        html += get_animation_1_2(u32(offset+12,is_little_endian)+mid + (ii*12), mid, i,ii)
        }
        for(let ii=0; ii <u32(offset+16,is_little_endian);ii++){
        html += get_animation_1_3(u32(offset+20,is_little_endian)+mid + (ii*16), mid, i,ii)
        }
    
    return html
}
function get_animation_1_1(offset, mid, i) {
    let html = `<br>---${i}>---1>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)},  ${u8(offset + 10, is_little_endian)},  ${u8(offset + 11, is_little_endian)}] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

    for(let ii =0; ii <u32(offset+0,is_little_endian);ii++){
        html += get_animation_1_1_1(u32(offset+4,is_little_endian)+mid+(ii*4), mid, i,ii)
    }
    return html
}
function get_animation_1_1_1(offset, mid, i,ii) {
    let html = `<br>---${i}>---1>---${ii}>---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ]`
    
    return html
}
function get_animation_1_2(offset, mid, i,ii) {
    let html = `<br>---${i}>---2>---${ii}> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | F${f32(offset + 8, is_little_endian)}`
    
    return html
}
function get_animation_1_3(offset, mid, i,ii) {
    let html = `<br>---${i}>---3>---${ii}>  F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)},  ${u8(offset + 10, is_little_endian)},  ${u8(offset + 11, is_little_endian)}] | F${f32(offset + 12, is_little_endian)}`
    
    return html
}
