function load_car(offset, mid) {
    let html = `| ${offset} + ${mid} |`

    html += get_car(offset, mid)

    document.getElementById("file_editor").innerHTML = html

}

function get_car(offset, mid) {
    let html = ''

    html += `<br>${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | `

    html += get_car_1(u32(offset, is_little_endian) + mid, mid)

    return html

}

function get_car_1(offset, mid) {
    let html = ''

    html += `<br>--->  ${u32(offset, is_little_endian)} |
  <br>  ${u32(offset + 4, is_little_endian)}|
   <br> ${u32(offset + 8, is_little_endian)} |
  <br>  ${u32(offset + 12, is_little_endian)} |
   <br> ${u32(offset + 16, is_little_endian)} |
  <br>  ${u32(offset + 20, is_little_endian)} |
   <br> ${u32(offset + 24, is_little_endian)} |
   <br> ${u32(offset + 28, is_little_endian)} | 
   <br> ${u32(offset + 32, is_little_endian)} | 
   <br> ${u32(offset + 36, is_little_endian)} | 
   <br>driving? ${u32(offset + 40, is_little_endian)} | 
  <br>driving?  ${u32(offset + 44, is_little_endian)} | 
   <br> ${u32(offset + 48, is_little_endian)} | 
   <br> ${u32(offset + 52, is_little_endian)} |  
 <br>   ${u32(offset + 56, is_little_endian)} |  
  <br>  ${u32(offset + 60, is_little_endian)} |  
 <br>   ${u32(offset + 64, is_little_endian)} |  
  <br>  ${u32(offset + 68, is_little_endian)} | 
 <br>   ${u32(offset + 72, is_little_endian)} | 
  <br>  ${u32(offset + 76, is_little_endian)} | 
  <br>  ${u32(offset + 80, is_little_endian)} | 
  <br>  ${u32(offset + 84, is_little_endian)} | 
  <br>  ${u32(offset + 88, is_little_endian)} | 
  <br>  ${u32(offset + 92, is_little_endian)} | 
 <br>   ${u32(offset + 96, is_little_endian)} |  
  <br>  ${u32(offset + 100, is_little_endian)} |
  <br>  ${u32(offset + 104, is_little_endian)} | 
<br>    ${u32(offset + 108, is_little_endian)} | 
 <br>   ${u32(offset + 112, is_little_endian)} |
<br>    ${u32(offset + 116, is_little_endian)} | 
 <br>   ${u32(offset + 120, is_little_endian)} | 
<br>    ${u32(offset + 124, is_little_endian)} | 
 <br>   ${u32(offset + 128, is_little_endian)} | 
 <br>   ${u32(offset + 132, is_little_endian)}  |
 <br>   ${u32(offset + 136, is_little_endian)}  | 
 <br>   ${u32(offset + 140, is_little_endian)}  | 
 <br>   ${u32(offset + 144, is_little_endian)}  | 
<br>    ${u32(offset + 148, is_little_endian)}  | 
 <br>   ${u32(offset + 152, is_little_endian)}  |
 <br>   ${u32(offset + 156, is_little_endian)}  | 
 <br>   ${u32(offset + 160, is_little_endian)}  | 
 <br>   ${u32(offset + 164, is_little_endian)}  | 
  <br>  ${u32(offset + 168, is_little_endian)}  |
  <br>  ${u32(offset + 172, is_little_endian)}  |
  <br> ${u32(offset + 176, is_little_endian)}  |  ${u32(offset + 180, is_little_endian)}  |  ${u32(offset + 184, is_little_endian)}  |  ${u32(offset + 188, is_little_endian)}  |  ${u32(offset + 192, is_little_endian)}  |  ${u32(offset + 196, is_little_endian)}  |  ${u32(offset + 200, is_little_endian)}  |  ${u32(offset + 204, is_little_endian)}  |  ${u32(offset + 208, is_little_endian)}  |  ${u32(offset + 212, is_little_endian)}  |  ${u32(offset + 216, is_little_endian)}  |  ${u32(offset + 220, is_little_endian)}  |  ${u32(offset + 224, is_little_endian)}  |  ${u32(offset + 228, is_little_endian)}  |  ${u32(offset + 232, is_little_endian)}  |  ${u32(offset + 236, is_little_endian)}`

    // html += get_16byteblock_1_1(u32(offset + 176, is_little_endian) + mid, mid)

    // html += get_16byteblock_1_2(u32(offset + 180, is_little_endian) + mid, mid)

    html += get_car_1_3(u32(offset + 184, is_little_endian) + mid, mid)
    // html += get_car_1_4(u32(offset + 188, is_little_endian) + mid, mid)
    // html += get_car_1_5(u32(offset + 192, is_little_endian) + mid, mid)
    // html += get_car_1_6(u32(offset + 196, is_little_endian) + mid, mid)
    // html += get_car_1_7(u32(offset + 200, is_little_endian) + mid, mid)

    // for (let i = 0; i < u32(offset + 204, is_little_endian); i++) {
    //     html += get_car_1_8(u32(offset + 208, is_little_endian) + mid + (i * 8), mid, i)
    // }
    // for (let i = 0; i < u32(offset + 212, is_little_endian); i++) {
    //     html += get_car_1_9(u32(offset + 216, is_little_endian) + mid + (i * 12), mid, i)
    // }
    // for (let i = 0; i < u32(offset + 220, is_little_endian); i++) {
    //     html += get_car_1_10(u32(offset + 224, is_little_endian) + mid + (i * 12), mid, i)
    // }
    // for (let i = 0; i < u32(offset + 228, is_little_endian); i++) {
    //     html += get_car_1_11(u32(offset + 232, is_little_endian) + mid + (i * 16), mid, i)
    // }

    return html

}

function get_car_1_11(offset, mid, i) {
    let html = ''

    html += `<br>---11>---${i}>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    html += get_car_1_11_1(u32(offset + 0, is_little_endian) + mid, mid, i)

    return html

}
function get_car_1_11_1(offset, mid, i) {
    let html = ''

    html += `<br>---11>---${i}>--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
        html += get_car_1_11_1_1(u32(offset + 4, is_little_endian) + mid + (ii*16), mid, i,ii)
    }

    return html

}

function get_car_1_11_1_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---11>---${i}>---${ii}>--->---> [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}| ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

  if(u32(offset + 4, is_little_endian)!=0){
  html += get_car_1_11_1_1_1(u32(offset + 4, is_little_endian) + mid, mid, i, ii)
  }
  if(u32(offset + 8, is_little_endian)!=0){
  html += get_car_1_11_1_1_2(u32(offset + 8, is_little_endian) + mid, mid, i, ii)
  }
  
    return html

}
function get_car_1_11_1_1_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---11>---${i}>---${ii}>--->---1>---> [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}| ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)}`
  html += get_car_1_11_1_1_1_1(u32(offset + 4, is_little_endian) + mid, mid, i, ii)
  
    return html

}
function get_car_1_11_1_1_1_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---11>---${i}>---${ii}>--->---1>--->---> [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset +8, is_little_endian)},  ${u8(offset + 9, is_little_endian)},  ${u8(offset + 10, is_little_endian)},  ${u8(offset + 11, is_little_endian)} ] |  ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} |  ${u32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)}`
  // html += get_car_1_11_1_1_1_1(u32(offset + 4, is_little_endian) + mid, mid, i, ii)
  
    return html

}


function get_car_1_11_1_1_2(offset, mid, i, ii) {
    let html = ''

    html += `<br>---11>---${i}>---${ii}>--->---2>---> [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}| ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    return html

}



function get_car_1_10(offset, mid, i) {
    let html = ''

    html += `<br>---10>---${i}>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}`
    for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
        html += get_car_1_10_1(u32(offset + 4, is_little_endian) + mid + (ii * 64), mid, i, ii)
    }

    return html

}

function get_car_1_10_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---10>---${i}>---${ii}>---> [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}| ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} |F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} `
    html += get_car_1_10_1_1(u32(offset + 4, is_little_endian) + mid, mid, i, ii)
    return html

}

function get_car_1_10_1_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---10>---${i}>---${ii}>--->---> ${u32(offset, is_little_endian)}  | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] |  ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

    // html += get_car_1_9_1_1_1(u32(offset + 16, is_little_endian) + mid, mid,i,ii)
    return html

}

function get_car_1_9(offset, mid, i) {
    let html = ''

    html += `<br>---9>---${i}>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}`
    for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
        html += get_car_1_9_1(u32(offset + 4, is_little_endian) + mid + (ii * 64), mid, i, ii)
    }

    return html

}
function get_car_1_9_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---9>---${i}>---${ii}>---> [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}| ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} |F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} `
    html += get_car_1_9_1_1(u32(offset + 4, is_little_endian) + mid, mid, i, ii)
    return html

}

function get_car_1_9_1_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---9>---${i}>---${ii}>--->---> ${u32(offset, is_little_endian)}  | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] |  ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

    // html += get_car_1_9_1_1_1(u32(offset + 16, is_little_endian) + mid, mid,i,ii)
    return html

}
function get_car_1_9_1_1_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---9>---${i}>---${ii}>--->--->---> [WIP] ${u32(offset, is_little_endian)}  | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} work on this later`
    // html += get_car_1_9_1_1_1_1(u32(offset + 4, is_little_endian) + mid, mid,i,ii)
    return html

}
function get_car_1_8(offset, mid, i) {
    let html = ''

    html += `<br>---8>---${i}>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`
    for (let ii = 0; ii < u32(offset, is_little_endian); ii++) {
        html += get_car_1_8_1(u32(offset + 4, is_little_endian) + mid + (ii * 32), mid, i, ii)
    }

    return html

}

function get_car_1_8_1(offset, mid, i, ii) {
    let html = ''

    html += `<br>---8>---${i}>---${ii}> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}
function get_car_1_7(offset, mid) {
    let html = ''

    html += `<br>---7>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} Frames`

    return html

}
function get_car_1_6(offset, mid) {
    let html = ''

    html += `<br>---6>--->  ${u32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    html += get_car_1_6_1(u32(offset + 0, is_little_endian) + mid, mid)
    html += get_car_1_6_2(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_6_1(offset, mid) {
    let html = ''

    html += `<br>---6>---1>--->  ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)},  ${u8(offset + 5, is_little_endian)},  ${u8(offset + 6, is_little_endian)},  ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} `

    html += get_car_1_6_1_1(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_6_1_1(offset, mid) {
    let html = ''

    html += `<br>---6>---1>--->--->  ${u32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}  `

    return html

}
function get_car_1_6_2(offset, mid) {
    let html = ''

    html += `<br>---6>---2>--->  ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)},  ${u8(offset + 5, is_little_endian)},  ${u8(offset + 6, is_little_endian)},  ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} `

    html += get_car_1_6_2_1(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_6_2_1(offset, mid) {
    let html = ''

    html += `<br>---6>---2>--->--->  ${u32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}  `

    return html

}
function get_car_1_4(offset, mid) {
    let html = ''

    html += `<br>---4>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}| ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | F${f32(offset + 88, is_little_endian)} | F${f32(offset + 92, is_little_endian)} | ${u32(offset + 96, is_little_endian)} | ${u32(offset + 100, is_little_endian)} | F${f32(offset + 104, is_little_endian)} | F${f32(offset + 108, is_little_endian)} | ${u32(offset + 112, is_little_endian)} | ${u32(offset + 116, is_little_endian)} | ${u32(offset + 120, is_little_endian)} | ${u32(offset + 124, is_little_endian)} work on this later`

    // html += get_car_1_3_1(u32(offset +4, is_little_endian) + mid,mid)

    return html

}
function get_car_1_5(offset, mid) {
    let html = ''

    html += `<br>offset 5 | ${offset}<br><br>---5>--->  F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    html += get_car_1_5_1(u32(offset + 16, is_little_endian) + mid, mid)
    html += get_car_1_5_2(u32(offset + 24, is_little_endian) + mid, mid)
    html += get_car_1_5_3(u32(offset + 32, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3(offset, mid) {
    let html = ''

    html += `<br>---5>---3>--->  F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_1(u32(offset + 4, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2(u32(offset + 8, is_little_endian) + mid, mid)
    html += get_car_1_5_3_3(u32(offset + 12, is_little_endian) + mid, mid)
    return html

}
function get_car_1_5_3_3(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---3>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_3_1(u32(offset + 0, is_little_endian) + mid, mid)
    return html

}
function get_car_1_5_3_3_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---3>--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_3_1_1(u32(offset + 4, is_little_endian) + mid, mid)
    return html

}
function get_car_1_5_3_3_1_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---3>--->--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`
    return html

}
function get_car_1_5_3_2(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_2_1(u32(offset + 0, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_2(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    html += get_car_1_5_3_2_2_1(u32(offset + 0, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2_2(u32(offset + 8, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2_3(u32(offset + 12, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2_4(u32(offset + 20, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2_5(u32(offset + 24, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2_6(u32(offset + 32, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_2_6(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---6>--->  [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html += get_car_1_5_3_2_2_6_1(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_2_6_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---6>--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}
function get_car_1_5_3_2_2_5(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---5>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_2_2_5_1(u32(offset + 4, is_little_endian) + mid, mid)

    return html

}

function get_car_1_5_3_2_2_5_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---5>--->--->  [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)},  ${u8(offset + 2, is_little_endian)},  ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
function get_car_1_5_3_2_2_4(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---4>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html += get_car_1_5_3_2_2_4_1(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_2_4_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---4>--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}
function get_car_1_5_3_2_2_3(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---3>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_2_2_3_1(u32(offset + 4, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_2_3_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---3>--->--->  [ ${u8(offset, is_little_endian)},  ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
function get_car_1_5_3_2_2_2(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---2>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    html += get_car_1_5_3_2_2_2_1(u32(offset + 8, is_little_endian) + mid, mid)
    html += get_car_1_5_3_2_2_2_2(u32(offset + 20, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_2_2_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---2>---1>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}
function get_car_1_5_3_2_2_2_2(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---2>---2>--->  F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)}`

    return html

}

function get_car_1_5_3_2_2_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---1>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_2_2_1_1(u32(offset + 4, is_little_endian) + mid, mid)
    if (u32(offset + 12, is_little_endian) != 0) {
        html += get_car_1_5_3_2_2_1_2(u32(offset + 12, is_little_endian) + mid, mid)
    }

    return html

}
function get_car_1_5_3_2_2_1_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---1>---1>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
function get_car_1_5_3_2_2_1_2(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---2>---1>---2>--->  [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}

function get_car_1_5_3_2_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---1>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_5_3_2_1_1(u32(offset + 4, is_little_endian) + mid, mid)

    return html

}
function get_car_1_5_3_2_1_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---2>---1>--->--->  ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

    return html

}
function get_car_1_5_3_1(offset, mid) {
    let html = ''

    html += `<br>---5>---3>---1>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    return html

}
function get_car_1_5_1(offset, mid) {
    let html = ''

    html += `<br>---5>---1>--->  |${offset} offset| ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    return html

}
function get_car_1_5_2(offset, mid) {
    let html = ''

    html += `<br>---5>---2>--->  F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}`

    return html

}
function get_car_1_3(offset, mid) {
    let html = ''

    html += `<br>---3>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    html += get_car_1_3_1(u32(offset + 4, is_little_endian) + mid, mid)

    return html

}
function get_car_1_3_1(offset, mid) {
    let html = ''

    html += `<br>---3>--->--->   ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | F${f32(offset + 60, is_little_endian)} `

    html += get_car_1_3_1_1(u32(offset + 0, is_little_endian) + mid, mid)
    html += get_car_1_3_1_2(u32(offset + 4, is_little_endian) + mid, mid)
    html += get_car_1_3_1_3(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}

function get_car_1_3_1_1(offset, mid) {
    let html = ''

    html += `<br>---3>--->---1>--->   ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | F${f32(offset + 60, is_little_endian)} | F${f32(offset + 64, is_little_endian)} | F${f32(offset + 68, is_little_endian)} | F${f32(offset + 72, is_little_endian)} | F${f32(offset + 76, is_little_endian)} `

    html += get_car_1_3_1_1_1(u32(offset + 16, is_little_endian) + mid, mid)
    html += get_car_1_3_1_1_2(u32(offset + 44, is_little_endian) + mid, mid)

    return html

}
function get_car_1_3_1_3(offset, mid) {
    let html = ''

    html += `<br>---3>--->---3>--->   F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | F${f32(offset + 64, is_little_endian)} | F${f32(offset + 68, is_little_endian)} | F${f32(offset + 72, is_little_endian)} | F${f32(offset + 76, is_little_endian)} | F${f32(offset + 80, is_little_endian)}| F${f32(offset + 84, is_little_endian)}| F${f32(offset + 88, is_little_endian)}| F${f32(offset + 92, is_little_endian)}`

    return html

}
function get_car_1_3_1_2(offset, mid) {
    let html = ''

    html += `<br>---3>--->---2>--->   F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}`

    return html

}
function get_car_1_3_1_1_1(offset, mid) {
    let html = ''

    html += `<br>---3>--->---1>---1>--->   F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)} `

    return html

}
function get_car_1_3_1_1_2(offset, mid) {
    let html = ''

    html += `<br>---3>--->---1>---2>--->   ${u32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | F${f32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)} | F${f32(offset + 48, is_little_endian)} | F${f32(offset + 52, is_little_endian)} | F${f32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | F${f32(offset + 68, is_little_endian)} | F${f32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | F${f32(offset + 80, is_little_endian)}| F${f32(offset + 84, is_little_endian)}| F${f32(offset + 88, is_little_endian)}| F${f32(offset + 92, is_little_endian)}| F${f32(offset + 96, is_little_endian)}| F${f32(offset + 100, is_little_endian)} | [ ${u8(offset + 104, is_little_endian)}, ${u8(offset + 105, is_little_endian)}, ${u8(offset + 106, is_little_endian)}, ${u8(offset + 107, is_little_endian)} ] | F${f32(offset + 108, is_little_endian)} | F${f32(offset + 112, is_little_endian)}| F${f32(offset + 116, is_little_endian)} | F${f32(offset + 120, is_little_endian)} | F${f32(offset + 124, is_little_endian)} `

    html += get_car_1_3_1_1_2_1(u32(offset + 64, is_little_endian) + mid, mid)
    html += get_car_1_3_1_1_2_2(u32(offset + 76, is_little_endian) + mid, mid)

    return html

}
function get_car_1_3_1_1_2_1(offset, mid) {
    let html = ''

    html += `<br>---3>--->---1>---2>---1>--->   F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}`

    return html

}
function get_car_1_3_1_1_2_2(offset, mid) {
    let html = ''

    html += `<br>---3>--->---1>---2>---2>--->  [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}| F${f32(offset + 16, is_little_endian)}| F${f32(offset + 20, is_little_endian)}| F${f32(offset + 24, is_little_endian)}| F${f32(offset + 28, is_little_endian)}`

    html += get_car_1_3_1_1_2_2_1(u32(offset + 8, is_little_endian) + mid, mid)

    return html

}
function get_car_1_3_1_1_2_2_1(offset, mid) {
    let html = ''

    html += `<br>---3>--->---1>---2>---2>--->--->  ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} `

    // html += get_car_1_3_1_1_2_2_1(u32(offset +8, is_little_endian) + mid,mid)

    return html

}

function get_16byteblock_1_2(offset, mid) {
    let html = ''

    html += `<br>---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | work on this later`

    html += get_16byteblock_1_2_1(u32(offset, is_little_endian) + mid, mid)

    return html

}

function get_16byteblock_1_2_1(offset, mid) {
    let html = ''

    html += `<br>---2---1--->  F${f32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}`

    html += get_16byteblock_1_2_1_1(u32(offset + 8, is_little_endian) + mid, mid)

    for(let i =0; i <u32(offset + 12, is_little_endian);i++){
    html += get_16byteblock_1_2_1_2(u32(offset + 16, is_little_endian) + mid + (i*20), mid,i)
    }
  


    return html

}

function get_16byteblock_1_2_1_2(offset, mid,i) {
    let html = ''

    html += `<br>---2---1---2---${i}>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)}  `


  if(u32(offset +8, is_little_endian)!=0){
    html += get_16byteblock_1_2_1_2_1(u32(offset + 8, is_little_endian) + mid, mid,i)
  }
  if(u32(offset +12, is_little_endian)!=0){
    html += get_16byteblock_1_2_1_2_2(u32(offset + 12, is_little_endian) + mid, mid,i)
  }
  if(u32(offset +16, is_little_endian)!=0){
    html += get_16byteblock_1_2_1_2_2(u32(offset + 16, is_little_endian) + mid, mid,i)
  }
  
    return html
}
function get_16byteblock_1_2_1_2_1(offset, mid,i) {
    let html = ''

    html += `<br>---2---1---2---${i}>---1>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}  `
  
    return html
}
function get_16byteblock_1_2_1_2_2(offset, mid,i) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

  for(let ii =0; ii <u32(offset, is_little_endian);ii++){
    html += get_16byteblock_1_2_1_2_2_1(u32(offset + 4, is_little_endian) + mid + (ii*64), mid,i,ii)
  }

  
    return html
}
function get_16byteblock_1_2_1_2_2_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | F${f32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} `

  if(u32(offset, is_little_endian) == 2){
    html += get_16byteblock_1_2_1_2_2_1_v2(u32(offset + 4, is_little_endian) + mid, mid,i,ii)
  }else if(u32(offset, is_little_endian) == 5){
    html += get_16byteblock_1_2_1_2_2_1_v5(u32(offset + 4, is_little_endian) + mid, mid,i,ii)
  }
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} `

    html += get_16byteblock_1_2_1_2_2_1_v2_1(u32(offset + 4, is_little_endian) + mid, mid,i,ii)

  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

      html += get_16byteblock_1_2_1_2_2_1_v2_1_1(u32(offset + 0, is_little_endian) + mid, mid,i,ii)

  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

        html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1(u32(offset + 4, is_little_endian) + mid, mid,i,ii)

  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

        html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1(u32(offset + 4, is_little_endian) + mid, mid,i,ii)
        html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_2(u32(offset + 8, is_little_endian) + mid, mid,i,ii)
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)}  | ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)}  | ${u32(offset + 32, is_little_endian)}  | ${u32(offset + 36, is_little_endian)}  | ${u32(offset +40, is_little_endian)}  | ${u32(offset + 44, is_little_endian)}`

        html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1(u32(offset + 4, is_little_endian) + mid, mid,i,ii)
  for(let iii =0;iii <u32(offset + 20, is_little_endian);iii++){
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_2(u32(offset + 24, is_little_endian) + mid + (iii*12), mid,i,ii,iii)
  }      
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->---1>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)}] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)}  | F${f32(offset + 24, is_little_endian)}  | F${f32(offset + 28, is_little_endian)}  | F${f32(offset + 32, is_little_endian)}  | F${f32(offset + 36, is_little_endian)}  | ${u32(offset +40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} `

  for(let iii =0;iii <u32(offset + 0, is_little_endian);iii++){
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_1(u32(offset + 4, is_little_endian) + mid, mid,i,ii,iii)
  }
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_2(u32(offset + 44, is_little_endian) + mid, mid,i,ii)
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_3(u32(offset + 52, is_little_endian) + mid, mid,i,ii)
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_4(u32(offset + 56, is_little_endian) + mid, mid,i,ii)

  for(let iii =0;iii <u32(offset + 60, is_little_endian);iii++){
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_5(u32(offset + 64, is_little_endian) + mid + (iii*8), mid,i,ii,iii)
  }
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_1(offset, mid,i,ii,iii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->---1>---${iii}> [ ${u8(offset +0, is_little_endian)}, ${u8(offset +1, is_little_endian)}, ${u8(offset +2, is_little_endian)}, ${u8(offset +3, is_little_endian)} ] `
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_2(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->---2>--->  F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)}  | F${f32(offset + 24, is_little_endian)}  | F${f32(offset + 28, is_little_endian)}  `
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_3(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->---3>--->  F${f32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)}  | F${f32(offset + 24, is_little_endian)}  | F${f32(offset + 28, is_little_endian)}  `
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_4(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->---4>--->  F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)}  | F${f32(offset + 24, is_little_endian)}  | F${f32(offset + 28, is_little_endian)}  `
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_5(offset, mid,i,ii,iii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->---5>---${iii}> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`

  for(let iiii =0;iiii <u32(offset, is_little_endian);iiii++){
  html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_5_1(u32(offset + 4, is_little_endian) + mid + (iiii*20), mid,i,ii,iii,iiii)
  }
  
  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_1_5_1(offset, mid,i,ii,iii,iiii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->--->---5>---${iii}>---${iiii}> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} `
  
  
    return html
}

function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_1_2(offset, mid,i,ii,iii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->--->---2>--->---${iii}> [ ${u8(offset +0, is_little_endian)}, ${u8(offset +1, is_little_endian)}, ${u8(offset +2, is_little_endian)}, ${u8(offset +3, is_little_endian)}  ] | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)}  `

    return html
}

function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_2(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->---2>--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)}  | F${f32(offset + 24, is_little_endian)}  | F${f32(offset + 28, is_little_endian)}  | F${f32(offset + 32, is_little_endian)}  | F${f32(offset + 36, is_little_endian)}  | ${u32(offset +40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)}`

          html += get_16byteblock_1_2_1_2_2_1_v2_1_1_1_2_1(u32(offset + 48, is_little_endian) + mid, mid,i,ii)

  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v2_1_1_1_2_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v2>--->--->---2>--->--->  F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)}  | F${f32(offset + 24, is_little_endian)}  | F${f32(offset + 28, is_little_endian)}`
  
    return html
}



function get_16byteblock_1_2_1_2_2_1_v5(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v5>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} `


    html += get_16byteblock_1_2_1_2_2_1_v5_1(u32(offset + 16, is_little_endian) + mid, mid,i,ii)

  for(let iii = 0;iii <u32(offset + 40, is_little_endian);iii++){
    html += get_16byteblock_1_2_1_2_2_1_v5_2(u32(offset + 44, is_little_endian) + mid + (iii*32), mid,i,ii,iii)
  }
    html += get_16byteblock_1_2_1_2_2_1_v5_3(u32(offset + 52, is_little_endian) + mid, mid,i,ii)
    html += get_16byteblock_1_2_1_2_2_1_v5_4(u32(offset + 56, is_little_endian) + mid, mid,i,ii)

  
    return html
}
function get_16byteblock_1_2_1_2_2_1_v5_1(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v5>---1>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} same offset as prev ¿ `

    return html
}
function get_16byteblock_1_2_1_2_2_1_v5_2(offset, mid,i,ii,iii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v5>---2,${iii}>  F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)}] | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

    return html
}
function get_16byteblock_1_2_1_2_2_1_v5_3(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v5>---3>  [ ${u8(offset +0, is_little_endian)}, ${u8(offset +1, is_little_endian)}, ${u8(offset +2, is_little_endian)}, ${u8(offset +3, is_little_endian)} ] | ${f32(offset + 4, is_little_endian)} | ${f32(offset + 8, is_little_endian)} | ${f32(offset + 12, is_little_endian)}  `

    return html
}
function get_16byteblock_1_2_1_2_2_1_v5_4(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---2>---${ii}>---v5>---4>  ${u32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} `

    return html
}
function get_16byteblock_1_2_1_2_3(offset, mid,i,ii) {
    let html = ''

    html += `<br>---2---1---2---${i}>---3>  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)}  `

    return html
}



function get_16byteblock_1_2_1_1(offset, mid) {
    let html = ''

    html += `<br>---2---1---1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)}`

    return html

}

function get_16byteblock_1_1(offset, mid) {
    let html = ''

    html += `<br>---1--->  ${u32(offset, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} |  ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)}`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += get_16byteblock_1_1_1(u32(offset + 16, is_little_endian) + mid + (i * 32), mid)
    }

    return html

}

function get_16byteblock_1_1_1(offset, mid) {
    let html = ''

    html += `<br>---1--->---> F${f32(offset, is_little_endian)} | F${f32(offset + 4, is_little_endian)}  | F${f32(offset + 8, is_little_endian)} |  F${f32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ]`

    return html

}
