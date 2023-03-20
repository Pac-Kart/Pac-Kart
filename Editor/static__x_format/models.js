function load_model(offset,offset_mid) {
    let html= `<br> ${u16(offset +2, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    for(let i =0;i <u16(offset +2, is_little_endian);i++){
    html+=get_model_sections(u32(offset + 4, is_little_endian)+offset_mid+(i*8),i,offset_mid)
}
    document.getElementById("file_editor").innerHTML = html

}


function get_model_sections(offset,i,offset_mid) {
    let html = `<br>--->--${i}> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} `

    for(let ii = 0;ii <u32(offset + 0, is_little_endian);ii++){
       html+=get_model_sections_1(u32(offset + 4, is_little_endian)+offset_mid+(ii*4),i,ii,offset_mid)
    }
    return html

}
function get_model_sections_1(offset,i,ii,offset_mid) {
        let html = `<br>--->--${i}>--${ii}> ${u32(offset + 0, is_little_endian)}`

    if(u32(offset + 0, is_little_endian) !=0){
    html+=get_model_sections_1_1(u32(offset + 0, is_little_endian)+offset_mid,i,ii,offset_mid)
    }
    return html
}

function get_model_sections_1_1(offset,i,ii,offset_mid) {
        let html = `<br>--->--->--->---> ${u32(offset + 0, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} | [ ${u8(offset + 40, is_little_endian)}, ${u8(offset + 41, is_little_endian)}, ${u8(offset + 42, is_little_endian)}, ${u8(offset + 43, is_little_endian)} ] | [ ${u8(offset + 44, is_little_endian)}, ${u8(offset + 45, is_little_endian)}, ${u8(offset + 46, is_little_endian)}, ${u8(offset + 47, is_little_endian)} ] |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} | [ ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} |  ${u32(offset + 80, is_little_endian)} |  ${u32(offset + 84, is_little_endian)} ] | |?${u32(offset + 88, is_little_endian)} |  ${u32(offset + 92, is_little_endian)}`


    
    if(u32(offset + 68, is_little_endian) !=0){
        html+=get_model_sections_1_1_1(u32(offset + 68, is_little_endian)+offset_mid,offset_mid)
    }
    if(u32(offset + 72, is_little_endian) !=0){
        html+=get_model_sections_1_1_2(u32(offset + 72, is_little_endian)+offset_mid,offset_mid)
    }
    if(u32(offset + 76, is_little_endian) !=0){
        html+=get_model_sections_1_1_3(u32(offset + 76, is_little_endian)+offset_mid,offset_mid)
    }
    if(u32(offset + 80, is_little_endian) !=0){
        html+=get_model_sections_1_1_4(u32(offset + 80, is_little_endian)+offset_mid,offset_mid)
    }
    if(u32(offset + 84, is_little_endian) !=0){
        html+=get_model_sections_1_1_5(u32(offset + 84, is_little_endian)+offset_mid,offset_mid)
    }
        if(u32(offset + 92, is_little_endian)!=0){
       html+=get_model_sections_1_1_6(u32(offset + 92, is_little_endian)+offset_mid,offset_mid)
    }


    
    return html

}

function get_model_sections_1_1_1(offset,offset_mid) {
        let html = `<br>--->--->--->--->--->Verts ${f32(offset + 0, is_little_endian)} |  ${f32(offset + 4, is_little_endian)} | ${f32(offset + 8, is_little_endian)} `

    return html
    
}
function get_model_sections_1_1_2(offset,offset_mid) {
        let html = `<br>--->--->--->--->--->color [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ]`

    return html
    
}
function get_model_sections_1_1_3(offset,offset_mid) {
        let html = `<br>--->--->--->--->--->UVs F${f32(offset + 0, is_little_endian)} F${f32(offset + 4, is_little_endian)} `

    return html
    
}
function get_model_sections_1_1_4(offset,offset_mid) {
        let html = `<br>--->--->--->--->--->Normals? F${f32(offset + 0, is_little_endian)} F${f32(offset + 4, is_little_endian)} `

    return html
    
}
function get_model_sections_1_1_5(offset,offset_mid) {
        let html = `<br>--->--->--->--->--->unknown/soft [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ]`

    return html
    
}

function get_model_sections_1_1_6(offset,offset_mid) {
        let html = `<br>--->--->--->--->---> ${u32(offset + 0, is_little_endian)} |  ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    let i =0
    for(; i <u32(offset + 8, is_little_endian);i++){
        html+=get_model_sections_1_1_6_1(u32(offset + 12, is_little_endian)+offset_mid+i,offset_mid)
    }

    
    
    // end?
    return html
    
}


function get_model_sections_1_1_6_1(offset,offset_mid) {
        let html = `<br>--->--->--->--->--->--->soft_sub ${u8(offset + 0, is_little_endian)}`

    return html
    
}

function get_model_sections_1_1_6_end(offset) {
    
}