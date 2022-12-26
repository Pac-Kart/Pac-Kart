function load_animations() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }


    document.getElementById("outer_program").innerHTML = `
  <div style="padding-left:25px;padding-bottom:5px;padding-top:5px;width: 30%;height:705px;overflow-y: auto;border: solid 1px #9d9898;" id="file_viewer"></div>
                    <div style="background: #f2f2f2;width: 5px;cursor: col-resize;id="drag_bar"></div><div id='file_editor' style="
    width: 100%;border: solid 1px #9d9898;
">`

    //     animation_html = ""
    //     animation_header = _3_60__offset__start_animation + offset_mid

    //     for(animation_header_i = 0;animation_header_i < (_3_48__unknown *12);animation_header_i+=12){
    //         animation_header_offset = u32(animation_header + animation_header_i,is_little_endian) + offset_mid

    //        animation_html+= `| 00: ${u32(animation_header_offset + 0,is_little_endian)}
    //        | 04: ${u32(animation_header_offset + 4,is_little_endian)}
    //        | 08: ${u32(animation_header_offset + 8,is_little_endian)}
    //        | 12: ${u32(animation_header_offset + 12,is_little_endian)}
    //        | 16: ${u32(animation_header_offset + 16,is_little_endian)}
    //        | 20: ${u32(animation_header_offset + 20,is_little_endian)}
    //        | 24: ${u32(animation_header_offset + 24,is_little_endian)}
    //        | 28: ${u32(animation_header_offset + 28,is_little_endian)}
    //        | 32: ${u32(animation_header_offset + 32,is_little_endian)}
    //        | 36: ${u32(animation_header_offset + 36,is_little_endian)}
    //        | 40: ${u32(animation_header_offset + 40,is_little_endian)}
    //        | 44: ${u32(animation_header_offset + 44,is_little_endian)}
    // <br>`
    // }

    //     document.getElementById("outer_program").innerHTML = animation_html

    













}

function attach_file(type,offset,name) {
    
    let html = '<div><a style="cursor: pointer;"> -> </a> <a style="cursor: pointer;">interface.xpc</a> </div>'
    return html
}



