function load_world_routes(offset, model_offset, model_amount) {
    // console.log(model_offset, model_amount)

    route_points_array = []
    route_obj_array = []

    for (let i = 0; i < model_amount; i++) {
        obj_offset = u32(model_offset + 100 + (i * 112), is_little_endian) + offset_mid
        let temp_array = []
        let temp_name_offset = u32(obj_offset + 8, is_little_endian) + offset_mid
        let temp_name = get_string(temp_name_offset, 0, false)
        for (let ii = 0; ii < u16(obj_offset + 2, is_little_endian); ii++) {
            obj_offset_1 = u32(obj_offset + 4, is_little_endian) + offset_mid

            for (let iii = 0; iii < u32(obj_offset_1, is_little_endian); iii++) {
                obj_offset_1_1 = u32(obj_offset_1 + 4, is_little_endian) + offset_mid
                obj_offset_1_1_1 = u32(obj_offset_1_1, is_little_endian) + offset_mid
                obj_offset_1_1_1_1 = u32(obj_offset_1_1_1 + 92, is_little_endian) + offset_mid
                obj_amount = u32(obj_offset_1_1_1_1 + 0, is_little_endian)
                obj_vertex_offset = u32(obj_offset_1_1_1 + 68, is_little_endian) + offset_mid
                for (let iiii = 0; iiii < obj_amount; iiii++) {
                    if (iiii % 2 === 0) {
                        temp_array.push({
                            x1: f32(obj_vertex_offset + (iiii * 36), is_little_endian),
                            z1: f32(obj_vertex_offset + 8 + (iiii * 36), is_little_endian),
                            x2: f32(obj_vertex_offset + 12 + (iiii * 36), is_little_endian),
                            z2: f32(obj_vertex_offset + 20 + (iiii * 36), is_little_endian),
                            x3: f32(obj_vertex_offset + 24 + (iiii * 36), is_little_endian),
                            z3: f32(obj_vertex_offset + 32 + (iiii * 36), is_little_endian)
                        })
                    } else {
                        // vertecies_obj += "\nf " + (face_vertex_array[face_ii] + 1) + "/" +  " " + (face_vertex_array[face_ii + 1] + 1) + "/"  " " + (face_vertex_array[face_ii + 2] + 1) + "/" 
                        // vertecies_obj += "\nf " + (face_vertex_array[face_ii + 1] + 1) + "/" + + (face_vertex_array[face_ii + 2 + 1] + 1) + "/"  + (face_vertex_array[face_ii + 1 + 1] + 1) + "/"
                        temp_array.push({
                            x1: f32(obj_vertex_offset + (iiii * 36), is_little_endian),
                            z1: f32(obj_vertex_offset + 8 + (iiii * 36), is_little_endian),
                            x2: f32(obj_vertex_offset + 12 + (iiii * 36), is_little_endian),
                            z2: f32(obj_vertex_offset + 20 + (iiii * 36), is_little_endian),
                            x3: f32(obj_vertex_offset + 24 + (iiii * 36), is_little_endian),
                            z3: f32(obj_vertex_offset + 32 + (iiii * 36), is_little_endian)
                        })
                    }
                }

            }
        }

        route_obj_array.push({
            data: temp_array,
            visible: true,
            color: '#80808020',
            name: temp_name
        })
    }

    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        get_world_route_list(u32(offset, is_little_endian) + offset_mid + (i * 128), i)
    }

    canvas_2()
}

function get_world_route_list(offset, index) {

    //amount in list 1

    route_points_array.push({
        offset: offset
    })
}

function route_list_view() {
    let html = `<span style='width:100%;height:100%;display:inherit;'>
                    <div class='data_types_bar' style='overflow:hidden;height:5%;border-bottom:solid 1px #9d9898;box-sizing:border-box;'>
                        <a id='canvas_view' class='data_bar_options_canvas'>Canvas View</a>
                        <a id='route_list_view' class='data_bar_options_canvas'>Route List View</a>
                    </div>
                    <div id='text_field' style='height:95%;overflow-y:auto;'>
                        <table>
                            <thead>
                                <tr>
                                    <th> index </th>
                                    <th> x </th>
                                    <th> y </th>
                                    <th> z </th>
                                    <th> width </th>
                                    <th> settings </th>
                                    <th> ?1 </th>
                                    <th> ?2 </th>
                                    <th> ?3 </th>
                                </tr>
                            </thead>
                        
                            <tbody>
`

    for (let i = 0; i < route_points_array.length; i++) {
        html += `<tr>
        <td class='no_border'> <input style='width:50px;' data-type='u32' data-offset='${route_points_array[i].offset + 116}'  type='text' value='${u32(route_points_array[i].offset + 116, is_little_endian)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${route_points_array[i].offset + 32}'  type='text' value='${f32(route_points_array[i].offset + 32, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${route_points_array[i].offset + 36}'  type='text' value='${f32(route_points_array[i].offset + 36, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${route_points_array[i].offset + 40}'  type='text' value='${f32(route_points_array[i].offset + 40, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${route_points_array[i].offset + 68}'  type='text' value='${f32(route_points_array[i].offset + 68, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='u16' data-offset='${route_points_array[i].offset + 72}'  type='text' value='${u16(route_points_array[i].offset + 72, is_little_endian)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='u16' data-offset='${route_points_array[i].offset + 74}'  type='text' value='${u16(route_points_array[i].offset + 74, is_little_endian)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='u8' data-offset='${route_points_array[i].offset + 76}'  type='text' value='${u8(route_points_array[i].offset + 76, is_little_endian)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${route_points_array[i].offset + 80}'  type='text' value='${f32(route_points_array[i].offset + 80, is_little_endian)}'></td>
        </tr>`
    }

    html += `</table>
        </tbody>
    </div>
</span>
`

    document.getElementById("file_editor").innerHTML = html

    let input_field = text_field.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', update_input)
    }

    document.getElementById("canvas_view").addEventListener('click', canvas_2)

}

function canvas_2() {

    let html = `<span style='width:80%;height:100%;display:inherit;'>
                    <div class='data_types_bar' style='overflow:hidden;height:5%;border-bottom:solid 1px #9d9898;box-sizing:border-box;'>
                        <a id='canvas_view' class='data_bar_options_canvas'>Canvas View</a>
                        <a id='route_list_view' class='data_bar_options_canvas'>Route List View</a>
                    </div>
                    <div id='outer_canvas' style='height:95%;'>
                            <canvas id='canvas'</canvas>
                    </div>
                </span>
                <span id='file_editor_side_panel_outer' class='data_types_bar' style='overflow-x:hidden;height:100%;width:20%;float: right;border-left:solid 1px #9d9898;box-sizing:border-box;'>
                    <div style='padding:3%;' id='file_editor_side_panel'></div>
                </span>
`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("route_list_view").addEventListener('click', route_list_view)

    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    let cameraOffset = {
        x: (-f32(route_points_array[0].offset + 32, is_little_endian) / 2),
        y: (-f32(route_points_array[0].offset + 40, is_little_endian) / 2)
    }

    var BB = canvas.getBoundingClientRect();
    offsetX = BB.left;
    offsetY = BB.top;
    var netPanningX = 0
    var netPanningY = 0;
    var temp_x = 0
    var temp_y = 0

    let cameraZoom = 1
    let MAX_ZOOM = 5
    let MIN_ZOOM = 0.1
    let SCROLL_SENSITIVITY = 0.0002


    function draw() {
        draw_canvas(cameraOffset.x, cameraOffset.y, cameraZoom, const_index, temp_x, temp_y)

        requestAnimationFrame(draw)

    }

    // Gets the relevant location from a mouse or single touch event
    function getEventLocation(e) {
        if (e.touches && e.touches.length == 1) {
            return {
                x: e.touches[0].clientX / 2,
                y: e.touches[0].clientY / 2
            }
        } else if (e.clientX && e.clientY) {
            return {
                x: e.clientX / 2,
                y: e.clientY / 2
            }
        }
    }

    function drawRect(x, y, width, height) {
        ctx.fillRect(x, y, width, height)
    }

    function drawText(text, x, y, size, font) {
        ctx.font = `${size}px ${font}`
        ctx.fillText(text, x, y)
    }

    let selected_index = false
    var const_index = false
    let isDragging = false
    let is_dragging_element = false
    let dragStart = {
        x: 0,
        y: 0
    }

    function onPointerDown(e) {
        e.preventDefault();
        e.stopPropagation();
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        // console.log("x: " + x + " y: " + y)

        dragStart.x = (getEventLocation(e).x / cameraZoom - cameraOffset.x)
        dragStart.y = (getEventLocation(e).y / cameraZoom - cameraOffset.y)

        if (cameraOffset.x * 2 < 0) {
            temp_x = Math.abs((cameraOffset.x * 2))
        } else {
            temp_x = Math.abs((cameraOffset.x * 2)) * -1
        }
        if (cameraOffset.y * 2 < 0) {
            temp_y = Math.abs((cameraOffset.y * 2))
        } else {
            temp_y = Math.abs((cameraOffset.y * 2)) * -1
        }

        temp_x = x + temp_x
        temp_y = y + temp_y

        startX = parseInt(e.clientX - offsetX);
        startY = parseInt(e.clientY - offsetY);

        temp_x = startX + temp_x
        temp_y = startY + temp_y

        // calculate zoom
        // console.log(temp_x, cameraZoom, startX * cameraZoom)

        selected_index = false

        selected_index = object_clicked(temp_x, temp_y, startX, startY, cameraZoom)

        if (selected_index !== false) {
            append_to_file_editor_side_panel(route_points_array[selected_index].offset)
            is_dragging_element = true
            const_index = selected_index
            return;
        } else {
            isDragging = true
            return;
        }

    }

    function onPointerUp(e) {
        e.preventDefault();
        e.stopPropagation();

        isDragging = false
        is_dragging_element = false
        initialPinchDistance = null
        lastZoom = cameraZoom
    }

    function onPointerMove(e) {
        // console.log(selected_index)
        e.preventDefault();
        e.stopPropagation();

        document.getElementById('canvas').focus();

        if (is_dragging_element === true) {
            e.preventDefault();
            e.stopPropagation();
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            // console.log("x: " + x + " y: " + y)

            dragStart.x = (getEventLocation(e).x / cameraZoom - cameraOffset.x)
            dragStart.y = (getEventLocation(e).y / cameraZoom - cameraOffset.y)

            if (cameraOffset.x * 2 < 0) {
                temp_x = Math.abs((cameraOffset.x * 2))
            } else {
                temp_x = Math.abs((cameraOffset.x * 2)) * -1
            }
            if (cameraOffset.y * 2 < 0) {
                temp_y = Math.abs((cameraOffset.y * 2))
            } else {
                temp_y = Math.abs((cameraOffset.y * 2)) * -1
            }

            temp_x = x + temp_x
            temp_y = y + temp_y

            startX = parseInt(e.clientX - offsetX);
            startY = parseInt(e.clientY - offsetY);

            temp_x = startX + temp_x
            temp_y = startY + temp_y

            new DataView(buffer).setFloat32(route_points_array[selected_index].offset + 32, temp_x - startX - 5, is_little_endian)
            new DataView(buffer).setFloat32(route_points_array[selected_index].offset + 40, temp_y - startY - 5, is_little_endian)

            // draw_canvas(startX, startY, cameraZoom, selected_index)
            append_to_file_editor_side_panel(route_points_array[selected_index].offset)
            return;

        }

        if (isDragging) {
            cameraOffset.x = (getEventLocation(e).x / cameraZoom - dragStart.x)
            cameraOffset.y = (getEventLocation(e).y / cameraZoom - dragStart.y)

        } else {
            let is_dragging_element = false
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            // console.log("x: " + x + " y: " + y)

            if (cameraOffset.x * 2 < 0) {
                temp_x = Math.abs((cameraOffset.x * 2))
            } else {
                temp_x = Math.abs((cameraOffset.x * 2)) * -1
            }
            if (cameraOffset.y * 2 < 0) {
                temp_y = Math.abs((cameraOffset.y * 2))
            } else {
                temp_y = Math.abs((cameraOffset.y * 2)) * -1
            }

            temp_cam_x = temp_x / cameraZoom
            temp_cam_y = temp_y / cameraZoom

            temp_x = x + temp_x
            temp_y = y + temp_y

            startX = parseInt(e.clientX - offsetX);
            startY = parseInt(e.clientY - offsetY);

            temp_x = startX + temp_x
            temp_y = startY + temp_y

            // calculate zoom
            selected_index = false

            selected_index = object_clicked(temp_x, temp_y, startX, startY, cameraZoom, temp_cam_x, temp_cam_y)

            if (selected_index !== false) {
                let canvas = document.getElementById("canvas").style.cursor = 'pointer'
                if (is_dragging_element === true) {
                    new DataView(buffer).setFloat32(route_points_array[selected_index].offset + 32, startX - 5 - netPanningX, is_little_endian)
                    new DataView(buffer).setFloat32(route_points_array[selected_index].offset + 40, startY - 5 - netPanningY, is_little_endian)

                    draw_canvas(startX, startY, cameraZoom, selected_index)
                    return;
                }
                return
            } else {

                let canvas = document.getElementById("canvas").style.cursor = 'auto'
                isDragging = false;

                return;

            }

        }
    }

    function handleTouch(e, singleTouchHandler) {
        e.preventDefault();
        e.stopPropagation();
        if (e.touches.length == 1) {
            singleTouchHandler(e)
        } else if (e.type == "touchmove" && e.touches.length == 2) {
            isDragging = false
            handlePinch(e)
        }
    }

    let initialPinchDistance = null
    let lastZoom = cameraZoom

    function handlePinch(e) {
        e.preventDefault()

        let touch1 = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        let touch2 = {
            x: e.touches[1].clientX,
            y: e.touches[1].clientY
        }

        // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
        let currentDistance = (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2

        if (initialPinchDistance == null) {
            initialPinchDistance = currentDistance
        } else {
            adjustZoom(null, currentDistance / initialPinchDistance)
        }
    }

    function adjustZoom(zoomAmount, zoomFactor) {
        if (!isDragging) {
            if (zoomAmount) {
                // cameraZoom += zoomAmount
            } else if (zoomFactor) {
                // console.log(zoomFactor)
                // cameraZoom = zoomFactor * lastZoom
            }

            cameraZoom = Math.min(cameraZoom, MAX_ZOOM)
            cameraZoom = Math.max(cameraZoom, MIN_ZOOM)

            // console.log(zoomAmount,canvas.width,canvas.height)
        }
    }

    canvas.addEventListener('mousedown', onPointerDown)
    canvas.addEventListener('touchstart', (e)=>handleTouch(e, onPointerDown))
    canvas.addEventListener('mouseup', onPointerUp)
    canvas.addEventListener('mouseout', onPointerUp)

    canvas.addEventListener('touchend', (e)=>handleTouch(e, onPointerUp))
    canvas.addEventListener('mousemove', onPointerMove)
    canvas.addEventListener('touchmove', (e)=>handleTouch(e, onPointerMove))
    canvas.addEventListener('wheel', (e)=>adjustZoom(e.deltaY * SCROLL_SENSITIVITY))

    // Ready, set, go
    draw()
}

function draw_canvas(netPanningX, netPanningY, cameraZoom, element_selected, temp_x, temp_y) {
    if (document.getElementById("outer_canvas") == null) {
        return;
    }

    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    canvas.width = document.getElementById("outer_canvas").getBoundingClientRect().width
    canvas.height = document.getElementById("outer_canvas").getBoundingClientRect().height

    // console.log(canvas.width,'1')

    // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
    ctx.translate(document.getElementById("outer_canvas").getBoundingClientRect().width / 2, document.getElementById("outer_canvas").getBoundingClientRect().height / 2)
    ctx.scale(cameraZoom, cameraZoom)
    ctx.translate(-document.getElementById("outer_canvas").getBoundingClientRect().width / 2 + netPanningX, -document.getElementById("outer_canvas").getBoundingClientRect().height / 2 + netPanningY)
    ctx.clearRect(0, 0, document.getElementById("outer_canvas").getBoundingClientRect().width, document.getElementById("outer_canvas").getBoundingClientRect().height)

        // console.log(canvas.width /cameraZoom,'2')
    
    // for (let i = 0; i < route_obj_array.length; i++) {
    //     if (route_obj_array[i].visible == true) {
    //         ctx.fillStyle = route_obj_array[i].color
    //         for (let ii = 0; ii < route_obj_array[i].data.length; ii++) {
    //             ctx.beginPath();
    //             // Start a new path
    //             ctx.moveTo(route_obj_array[i].data[ii].x1 + netPanningX, route_obj_array[i].data[ii].z1 + netPanningY);
    //             ctx.lineTo(route_obj_array[i].data[ii].x2 + netPanningX, route_obj_array[i].data[ii].z2 + netPanningY);
    //             ctx.lineTo(route_obj_array[i].data[ii].x3 + netPanningX, route_obj_array[i].data[ii].z3 + netPanningY);
    //             ctx.lineWidth = 2 / cameraZoom;
    //             ctx.fill();
    //         }
    //     }
    // }

    ctx.fillStyle = '#00dbff'
    for (let i = 0; i < route_points_array.length; i++) {
        let x = f32(route_points_array[i].offset + 32, is_little_endian) + netPanningX
        let z = f32(route_points_array[i].offset + 40, is_little_endian) + netPanningY
        for (let ii = 0; ii < u32(route_points_array[i].offset + 60, is_little_endian); ii++) {

            let route = u32((u32(route_points_array[i].offset + 64, is_little_endian) + offset_mid) + (ii * 4), is_little_endian)
            let new_x = f32(route_points_array[route].offset + 32, is_little_endian) + netPanningX
            let new_z = f32(route_points_array[route].offset + 40, is_little_endian) + netPanningY

            ctx.strokeStyle = "#59e6fd";
            ctx.beginPath();
            // Start a new path
            ctx.moveTo(x + 5, z + 5);
            ctx.lineTo(new_x + 5, new_z + 5);
            ctx.lineWidth = 2 / cameraZoom;
            ctx.stroke();
            // Render the path

        }
        if (i === element_selected) {
            ctx.fillStyle = '#2eef0b'
            ctx.fillRect(x, z, 10 , 10)
            ctx.fillStyle = '#00dbff'
        } else {
            if (u16(route_points_array[i].offset + 72, is_little_endian) == 8) {
                ctx.fillStyle = '#ff00ff'
                ctx.fillRect(x, z, 10 / cameraZoom, 10 / cameraZoom)
                ctx.fillStyle = '#00dbff'
            } else {
                ctx.fillRect(x, z, 10 / cameraZoom, 10 / cameraZoom)
            }
        }
    }
    ctx.fillStyle = '#000000ff'

}

function object_clicked(temp_x, temp_y, startX, startY, cameraZoom, temp_cam_x, temp_cam_y) {
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    for (let i = 0; i < route_points_array.length; i++) {

        let left_position = (f32(route_points_array[i].offset + 32, is_little_endian)) + startX
        let right_position = (f32(route_points_array[i].offset + 32, is_little_endian)) + startX + 10
        let top_position = (f32(route_points_array[i].offset + 40, is_little_endian)) + startY
        let bottom_position = (f32(route_points_array[i].offset + 40, is_little_endian)) + startY + 10

        if (temp_x > left_position && temp_x < right_position && temp_y > top_position && temp_y < bottom_position) {
            return i
        }
    }

    return false

}

function append_to_file_editor_side_panel(offset) {
    let html = `
                    <a>index: </a><br>
                    <input class='text_input' data-type="u32" data-offset=${offset + 116}  value='${u32(offset + 116, is_little_endian)}'><br>
    
                    <a>X Position: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 32} value='${f32(offset + 32, is_little_endian).toFixed(2)}'><br>
                    
                    <a>Y Position: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 36} value='${f32(offset + 36, is_little_endian).toFixed(2)}'><br>
                    
                    <a>Z Position: </a><br>
                    <td class='no_border'><input class='text_input' data-type="float" data-offset=${offset + 40} value='${f32(offset + 40, is_little_endian).toFixed(2)}'><br>
                                                            
                    <a>Width: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 68} value='${f32(offset + 68, is_little_endian).toFixed(2)}'><br>
                    
                    <a>settings: </a><br>
                    <input class='text_input' data-type="u16" data-offset=${offset + 72} value='${u16(offset + 72, is_little_endian)}'><br>
                    
                    <a>?1: </a><br>
                    <input class='text_input' data-type="u16" data-offset=${offset + 74} value='${u16(offset + 74, is_little_endian)}'><br>
                    
                    <a>?2:</a><br>
                    <input class='text_input'  data-type="u8" data-offset=${offset + 76} value='${u8(offset + 76, is_little_endian)}'><br>
                    
                    <a>?3:</a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 80} value='${f32(offset + 80, is_little_endian)}'><br>
                
                `

    html += `<br><div style='border:solid 1px #9d9898;padding:inherit'>                    <a>Previous List: </a><br>
             <input id='prev_list' class='text_input' data-type="u32" data-offset=${offset + 48} value='${u32(offset + 48, is_little_endian)}'><br>
                                        
`
    let floatlist = ''
    if (u32(offset + 48, is_little_endian) != 0) {
        floatlist = '<br>Unknown:'
    }

    for (let i = 0; i < u32(offset + 48, is_little_endian); i++) {
        html += `<br><input class='text_input' data-type="u32" data-is_prev='true' data-offset=${u32(offset + 56, is_little_endian) + (i * 4) + offset_mid}  value='${u32(u32(offset + 56, is_little_endian) + (i * 4) + offset_mid, is_little_endian)}'>`
        floatlist += `<br><input class='text_input' data-type="float" data-offset=${u32(offset + 52, is_little_endian) + (i * 4) + offset_mid}  value='${f32(u32(offset + 52, is_little_endian) + (i * 4) + offset_mid, is_little_endian).toFixed(2)}'>`
    }
    html += `${floatlist}</div><br>`
    html += `<div style='border:solid 1px #9d9898;padding:inherit'>                    
                <a>Next list: </a><br>
                        <input id='next_list' class='text_input' data-type="u32" data-offset=${offset + 60} value='${u32(offset + 64, is_little_endian)}'><br>
`
    for (let i = 0; i < u32(offset + 60, is_little_endian); i++) {
        html += `<br><input class='text_input' data-type="u32" data-is_next='true' data-offset='${u32(offset + 64, is_little_endian) + (i * 4) + offset_mid}' value='${u32(u32(offset + 64, is_little_endian) + (i * 4) + offset_mid, is_little_endian)}'>`
    }
    html += '</div>'

    let side_panel = document.getElementById('file_editor_side_panel');

    side_panel.innerHTML = html

    let side_panel_array = side_panel.getElementsByTagName('INPUT')

    for (let i = 0; i < side_panel_array.length; i++) {
        if (side_panel_array[i].dataset.is_prev == null && side_panel_array[i].dataset.is_next == null) {
            side_panel_array[i].addEventListener('change', update_input)
        } else {
            side_panel_array[i].addEventListener('change', custom_input)
        }
    }

    document.getElementById("prev_list").value = u32(offset + 48, is_little_endian)
    // console.log(u32(offset + 48, is_little_endian))
    document.getElementById("prev_list").addEventListener('change', update_side_view)

    document.getElementById("next_list").value = u32(offset + 60, is_little_endian)
    document.getElementById("next_list").addEventListener('change', update_side_view)
}

function custom_input(e) {
    //check maximum input
    if (e.target.value >= route_points_array.length) {
        // console.log('high')
        e.target.value = 0
        let new_val = this.value

        new DataView(buffer).setUint32(e.target.dataset.offset, 4, is_little_endian)
    } else {
        // console.log('low')
        let new_val = this.value

        new DataView(buffer).setUint32(this.dataset.offset, new_val, is_little_endian)

        this.value = u32(this.dataset.offset, is_little_endian)
    }

}

function update_side_view(e) {

    if (e.target.value > 4) {
        // console.log('over')
        e.target.value = 4
        let new_val = this.value

        new DataView(buffer).setUint32(e.target.dataset.offset, 4, is_little_endian)

        if (e.target.id === "next_list") {
            append_to_file_editor_side_panel(e.target.dataset.offset - 60)
        } else {
            append_to_file_editor_side_panel(e.target.dataset.offset - 48)

        }
        return;
    } else {
        update_input()
        if (e.target.id === "next_list") {
            append_to_file_editor_side_panel(e.target.dataset.offset - 60)
        } else {
            append_to_file_editor_side_panel(e.target.dataset.offset - 48)

        }
    }

    let temp_offset;
    let max_offset;

    if (e.target.id === "next_list") {

        if (e.target.value > 4) {
            // console.log('over')
            e.target.value = 4
            update_side_view(e)
            return;
        }

        // find next offset
        // or find end

        append_to_file_editor_side_panel(e.target.dataset.offset - 60)
    } else {
        if (e.target.value > 4) {
            // console.log('over')
            e.target.value = 4
            update_side_view(e)
            return;

        }
        append_to_file_editor_side_panel(e.target.dataset.offset - 48)

    }

    update_input()

    if (e.target.id === "next_list") {
        append_to_file_editor_side_panel(e.target.dataset.offset - 60)
    } else {
        append_to_file_editor_side_panel(e.target.dataset.offset - 48)

    }

}

function side_panel_view(e) {
    let html = ''

    for (let i = 0; i < route_obj_array.length; i++) {
        let checked = route_obj_array[i].visible ? 'checked' : ''
        html += `<input type='color' value="${route_obj_array[i].color}" data-index="${i}" style="width:20%"><input type='checkbox' data-index="${i}" ${checked} value="${route_obj_array[i].visible}">${route_obj_array[i].name}<br>`
    }

    let side_panel = document.getElementById('file_editor_side_panel');
    side_panel.innerHTML = html
    let side_panel_array = side_panel.getElementsByTagName('INPUT')

    for (let i = 0; i < side_panel_array.length; i++) {
        side_panel_array[i].addEventListener('change', side_panel_view_change)
    }

}

function side_panel_view_change(e) {
    if (e.srcElement.type == "checkbox") {
        route_obj_array[e.srcElement.dataset.index].visible = e.srcElement.checked
    } else {
        route_obj_array[e.srcElement.dataset.index].color = e.srcElement.value
    }
}
