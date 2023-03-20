function load_world_options() {
    check_if_other_element_loaded(this)
    if (temp_flag == "false") {
        return
    }

    document.getElementById("outer_program").innerHTML = 'wip'
    //     offset_world_options_header = u32(offset_mid + 20, is_little_endian) + offset_mid
    //     // load the world options variable before load_world_options / offset_world_options_header

    //     document.getElementById("outer_program").innerHTML = `<style>
    // .world_options_section_select{
    // text-align:center;
    // }
    // .world_options_section_select:hover{
    // background-color:#8f9dff;
    // cursor:pointer;
    // }

    // .world_options_editor_select{
    // background-color:#e2e2e2;
    // }
    // .world_options_editor_select:hover{
    // background-color:#a1a1a1;
    // cursor:pointer;
    // }
    // .world_options_editor_select:active{
    // color:white;
    // }
    // </style>
    // <div style="display:flex;" id="outer_program">

    //     <div id="world_options_select_type" style="line-height:15px;padding-bottom:5px;padding-top:5px;width: 12%;height:705px;overflow-y: auto;">
    //     </div>

    //     <div style="padding-bottom:5px;padding-top:5px;width: 88%;height:705px;/* overflow-y: auto; */">
    //         <div id="world_options_select_editor_buttons" style="height: 5%;">

    //             <a data-world_options_editor_is_active="true" id='world_options_editor_data_table' class='world_options_editor_select'>data_table</a>
    //             <a data-world_options_editor_is_active="false" id='world_options_editor_view' class='world_options_editor_select'>view</a>

    //         </div>
    // <div id="world_options_editor" style="
    //     height: 95%;overflow-y:auto;
    // ">
    // </div>

    // </div>   

    //     `

    //     world_options_editor_data_table.addEventListener('click', world_options_check_editor)
    //     world_options_editor_view.addEventListener('click', world_options_check_editor)

    //     // is_little_endian = false
    //     // const buffer = new Uint8Array(a.split(',')).buffer

    //     u8 = new DataView(buffer).getUint8.bind(new DataView(buffer))
    //     u16 = new DataView(buffer).getUint16.bind(new DataView(buffer))
    //     u32 = new DataView(buffer).getUint32.bind(new DataView(buffer))
    //     f32 = new DataView(buffer).getFloat32.bind(new DataView(buffer))

    //     // offset_mid = -215264
    //     // a = null

    //     // offset_world_options_header = 0

    //     //256 bytes of header

    //     world_options_friendly_name_array = ['start positions', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???']
    //     world_options_id_array = ['start_positions', '__1', '__2', '__3', '__4', '__5', '__6', '__7', '__8', '__9', '__10', '__11', '__12', '__13', '__14', '__15', '__16']

    //     world_options_header_array = []

    //     //format:
    //     //0 = type of section
    //     //1 = amount of bytes in each entry
    //     //2 = amount of entries
    //     //4 = offset to start of entries
    //     //5 = friendly name
    //     //6 = id

    //     for (world_options_i = 0; world_options_i < 17; world_options_i += 1) {
    //         world_options_header_array.push([world_options_i, 0, 0, 0, world_options_friendly_name_array[world_options_i], world_options_id_array[world_options_i]])

    //     }
    //     for (world_options_i = 0; world_options_i < 256; world_options_i += 16) {

    //         temp_option = u32(world_options_i + offset_world_options_header + 0, is_little_endian)

    //         world_options_header_array[temp_option][1] = u32(world_options_i + offset_world_options_header + 4, is_little_endian)
    //         world_options_header_array[temp_option][2] = u32(world_options_i + offset_world_options_header + 8, is_little_endian)
    //         world_options_header_array[temp_option][3] = u32(world_options_i + offset_world_options_header + 12, is_little_endian)

    //         if (u32(world_options_i + offset_world_options_header + 8 + 16, is_little_endian) == 0) {
    //             world_options_i += 256
    //         }

    //     }

    //     // append to html

    //     for (world_options_i = 0; world_options_i < world_options_header_array.length; world_options_i++) {
    //         if (world_options_header_array[world_options_i][2] == 0) {// no entries
    //         } else {
    //             world_options_select_type.innerHTML += `<div data-world_options_section='${world_options_i}' class='world_options_section_select' id="${world_options_header_array[world_options_i][5]}">${world_options_header_array[world_options_i][0]} / ${world_options_header_array[world_options_i][4]}</div>`

    //             document.getElementById(world_options_header_array[world_options_i][5]).addEventListener('click', world_options_click_option)
    //         }
    //     }

    //     for (world_options_i = 0; world_options_i < world_options_select_type.children.length; world_options_i++) {
    //         document.getElementById('world_options_select_type').children[world_options_i].addEventListener('click', world_options_click_option)
    //     }

    //     // world_options_header_array = world_options_header_array.sort(function(a, b) {
    //     //     return a[0] - b[0]
    //     // })

    //     // for (world_options_i = 0; world_options_i < world_options_header_array.length; world_options_i++) {
    //     //     world_options_get_sections(world_options_i)
    //     // }

    //     // ????

    //     function world_options_get_sections(index) {
    //         if (world_options_header_array[index][0] == 0) {
    //             world_options_0_active = true
    //             world_options_0_number_bytes = world_options_header_array[index][1]
    //             world_options_0_amount = world_options_header_array[index][2]
    //             world_options_0_offset = world_options_header_array[index][3]
    //             console.log(world_options_header_array[index])
    //             world_options_select_type.innerHTML += "<a>test</a>"
    //         }
    //         if (world_options_header_array[index][0] == 1) {
    //             //idk
    //             console.log(world_options_header_array[index])
    //         }
    //     }

    //     // create an array that contains defalut array 

    //     function world_options_check_editor() {

    //         console.log(this)
    //         console.log('fixthislateridk')
    //     }
    //     function world_options_click_option() {
    //         world_options_active_type = this.dataset.world_options_section

    //         world_options_active_byte = world_options_header_array[world_options_active_type][1]
    //         world_options_active_amount = world_options_header_array[world_options_active_type][2]
    //         world_options_active_offset = world_options_header_array[world_options_active_type][3]

    //         console.log('byte:', world_options_active_byte)
    //         console.log('amount:', world_options_active_amount)
    //         console.log('offset:', world_options_active_offset)

    //         _0_array = [[0, u32, 'index'], [4, u16, '0'], [6, u16, '0 or 1 other values no change'], [8, u32, '0 other values crash'], [12, u16, '1 other values no change'], [14, u16, ' 8 other values no change'], [16, u16, '1'], [18, u16, '8'], [20, u32, '0'], [24, u32, '0'], [28, u32, '0'], [32, f32, 'position'], [36, f32, 'position'], [40, f32, 'position'], [44, f32, '1'], [48, f32, 'rotation'], [52, f32, 'rotation'], [56, f32, 'rotation'], [60, f32, '1'], [64, u32, '0'], [68, u32, '8'], [72, u16, '0'], [74, u8, 1], [75, u8, 1], [76, f32, 500], [80, f32, 1000], [84, u32, 0], [88, u32, 0], [92, u32, 0], [096, u32, 0], [100, u32, 0], [104, u32, 0], [108, u32, 0], [112, u8, 'unknown'], [113, u16, 'ffff unknown other values no change'], [115, u8, 0], [116, u32, 0], [120, u8, 1], [121, u8, '1 if other number index is moved last'], [122, u16, 0], [124, u32, 0]]

    //         //create data_table

    //         world_options_data_table = ` <table class='binary_table'>
    //                 <thead>
    //                     <tr>`
    //         for (world_options_i = 0; world_options_i < _0_array.length; world_options_i++) {
    //             world_options_data_table += `<th>${_0_array[world_options_i][2]}</th>`
    //         }

    //         world_options_data_table += `
    //                 </thead>
    //                 <tbody id='idk24124'>

    // `

    //         for (world_options_i = 0; world_options_i < world_options_active_amount; world_options_i++) {
    //             world_options_data_table += `<tr>`
    //             for (world_options_i_i = 0; world_options_i_i < _0_array.length; world_options_i_i++) {

    //                 world_options_data_table += `<td><input value="${_0_array[world_options_i_i][1](offset_mid + world_options_active_offset + _0_array[world_options_i_i][0] + (world_options_i * world_options_active_byte), is_little_endian)}"></td>`
    //             }
    //             world_options_data_table += `</tr>`
    //         }

    //         document.getElementById('world_options_editor').innerHTML = world_options_data_table

    //         idk24124.addEventListener("click", function(event) {
    //             var td = event.target;
    //             while (td !== this && !td.matches("td")) {
    //                 td = td.parentNode;
    //             }
    //             if (td === this) {
    //                 console.log("No table cell found");
    //             } else {
    //                 console.log(td.innerHTML);
    //             }
    //         });

    //         // datatable 
    //         // index 
    //         // byte type
    //         // name

    //     }

    //all get to offset
}

