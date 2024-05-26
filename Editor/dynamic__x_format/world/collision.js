"use strict";
function load_world_collision(id) {
    let html = `${load_world_canvas_string('collision')}`
    globalThis.collision = TXFA.file_specific[0].section_04[0]
    file_editor.innerHTML = html

    if (pk_debug === true) {
        
    
    let sidepanelhtml = `replace grid with entry<br><input type='text' id='gridreplace'><br>
    <input type='checkbox' id='replacegridsections'><br><br>`

    let index = collision.section_64[0].u32_00
    let subsection = collision.section_32[index].section_40
    let idpath = `.file_specific[0].section_04[0].section_32[${index}].section_40`
    for (let i = 0; i < subsection.length; i++) {
        sidepanelhtml += `
                <a>u8_08</a><br>
                     <input style="width:100%" type='text' value="${subsection[i].u8_08}" data-outer_xfa="${id + idpath}[${i}]"  data-inner_xfa="u8_08" data-type="u8"><br>
                <a>u8_09</a><br>
                     <input style="width:100%" type='text' value="${subsection[i].u8_09}" data-outer_xfa="${id + idpath}[${i}]"  data-inner_xfa="u8_09" data-type="u8"><br>
                     amount ${subsection[i].section_00.length}<br>`
        for (let ii = 0; ii < subsection[i].section_00.length; ii++) {
            let subsubsection = subsection[i].section_00[ii]
            sidepanelhtml += `
                <a>f32_00</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.f32_00}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="f32_00" data-type="f32"><br>
                <a>f32_04</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.f32_04}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="f32_04" data-type="f32"><br>
                <a>f32_08</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.f32_08}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="f32_08" data-type="f32"><br>
                <a>f32_12</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.f32_12}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="f32_12" data-type="f32"><br>
                <a>u32_16 type?</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.u32_16}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="u32_16" data-type="u32"><br>
                <a>u16_22</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.u16_22}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="u16_22" data-type="u16"><br>
                <a>u16_20</a><br>
                     <input style="width:100%" type='text' value="${subsubsection.u16_20}" data-outer_xfa="${id + idpath}[${i}].section_00[${ii}]"  data-inner_xfa="u16_20" data-type="u16"><br>
                     <hr>`

        }

    }

    /*


    notes:

    0/1/0/-1000 = top of the outer box
    0/1/0/-100 = higher
    0/1/0/0 = max hight of box?
    0/1/0/0.1 = slightly lower max hight of box?
    0/1/0/1 = about the same?
    0/1/0/10 = lower
    0/40/0/10 = higher?
    0/1/0/50 = below floor
    0/0.9/0/50 = below floor
    0/0.7/0/50 = below floor, almost at lava
    0/1/0/75 = close to lava
    0/1/0/77 = close to lava
    0/1/0/78 = close to lava
    0/1/0/79 = oob no lava
    0/1/0/80 = oob no lava
    0/1/0/83 = oob no lava
    0/1/0/100 = lava
    0.1/1/0/1 = slope, cave = high, other side = low into oob
    0.1/0.9/0/1 = slightly lower slope hight
    0.1/1/0.1/1 = slope, high = start, low = end
    -0.1/1/-0.1/1 = slope, high = end, low = start
    0.9/1/0.9/1 = slope, more extreme

    108 = vanila = fall off left side of map
    108 = f32_12 1 = wall being pushed left

    0/1/0/10000 = fall in laval
    */

    file_editor_side_panel.innerHTML = sidepanelhtml

    document.getElementById("gridreplace").addEventListener('change', function(e) {
        for (let i = 0; i < collision.section_64.length; i++) {
            collision.section_64[i].u32_00 = e.srcElement.value
        }
        if (replacegridsections.checked) {

            for (let i = 0; i < collision.section_32.length; i++) {
                collision.section_32[i].f32_00 = collision.f32_00
                collision.section_32[i].f32_04 = collision.f32_04
                collision.section_32[i].f32_08 = collision.f32_08

                collision.section_32[i].f32_16 = collision.f32_16
                collision.section_32[i].f32_20 = collision.f32_20
                collision.section_32[i].f32_24 = collision.f32_24
            }
        }

        document.getElementsByClassName("file_is_highlighted")[0].click()
    })

}

    let modelarray = load_world_models_array()

    let editarray = []
    // let coll_list = TXFA.file_specific[0].section_04[0].section_84
    let coll_list = TXFA.file_specific[0].section_04[0].section_32
    let gridcords = {
        startx: collision.f32_00,
        starty: collision.f32_04,
        startz: collision.f32_08,
        startw: collision.f32_12,
        endx: collision.f32_16,
        endy: collision.f32_20,
        endz: collision.f32_24,
        endw: collision.f32_28,
        entryx: collision.f32_40,
        entryy: collision.f32_44,
        entryz: collision.f32_48,
    }
    globalThis.iscollision = true
    console.log(gridcords)
    for (let i = 0; i < coll_list.length; i++) {
        let collision_tri = coll_list[i]
        let xid = id + `.file_specific[0].section_12[0].section_00[${i}]`
        editarray.push({
            type: 'collision',
            ref: collision_tri,
            id: xid
        })
    }
    // console.log(TXFA.file_specific[0].section_04[0].section_76.length)
    gen_model_box(modelarray, editarray)
    globalThis.iscollision = false

}
