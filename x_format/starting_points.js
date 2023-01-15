function load_world_start_points(offset, amount) {
    starting_points_array = []

    for (let i = 0; i < amount; i++) {
        console.log(offset + (i * 128))
    starting_points_array.push({
        offset: offset + (i * 128)
    })
    }

    canvas_1()
}


function start_points_view() {
    let html = `<span style='width:100%;height:100%;display:inherit;'>
                    <div class='data_types_bar' style='overflow:hidden;height:5%;border-bottom:solid 1px #9d9898;box-sizing:border-box;'>
                        <a id='canvas_view' class='data_bar_options_canvas'>Canvas View</a>
                        <a id='start_points' class='data_bar_options_canvas'>Route List View</a>
                    </div>
                    <div id='text_field' style='height:95%;overflow-y:auto;'>
                        <table>
                            <thead>
                                <tr>
                                    <th> Position </th>
                                    <th> x </th>
                                    <th> y </th>
                                    <th> z </th>
                                    <th> x r </th>
                                    <th> y r </th>
                                    <th> z r  </th>
                                    <th> ?1 </th>
                                    <th> ?2 </th>
                                </tr>
                            </thead>
                        
                            <tbody>
`

    for (let i = 0; i < starting_points_array.length; i++) {
        html += `<tr>
        <td class='no_border'> <input style='width:50px;' data-type='u8' data-offset='${starting_points_array[i].offset + 121}'  type='text' value='${u8(starting_points_array[i].offset + 121, is_little_endian)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 32}'  type='text' value='${f32(starting_points_array[i].offset + 32, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 36}'  type='text' value='${f32(starting_points_array[i].offset + 36, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 40}'  type='text' value='${f32(starting_points_array[i].offset + 40, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 48}'  type='text' value='${f32(starting_points_array[i].offset + 48, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 52}'  type='text' value='${f32(starting_points_array[i].offset + 52, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 56}'  type='text' value='${f32(starting_points_array[i].offset + 56, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 76}'  type='text' value='${f32(starting_points_array[i].offset + 76, is_little_endian).toFixed(2)}'></td>
        <td class='no_border'> <input style='width:50px;' data-type='float' data-offset='${starting_points_array[i].offset + 80}'  type='text' value='${f32(starting_points_array[i].offset + 80, is_little_endian)}'></td>
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

    document.getElementById("canvas_view").addEventListener('click', canvas_1)

}

function canvas_1() {

    let html = `<span style='width:80%;height:100%;display:inherit;'>
                    <div class='data_types_bar' style='overflow:hidden;height:5%;border-bottom:solid 1px #9d9898;box-sizing:border-box;'>
                        <a id='canvas_view' class='data_bar_options_canvas'>Canvas View</a>
                        <a id='start_points' class='data_bar_options_canvas'>Start Points View</a>
                    </div>
                    <div id='outer_canvas' style='height:95%;'>
                            <canvas id='canvas'</canvas>
                    </div>
                </span>
                <span id='file_editor_side_panel' class='data_types_bar' style='overflow-x:hidden;padding:3%;height:100%;width:20%;float: right;border-left:solid 1px #9d9898;box-sizing:border-box;'>
                    <a>Choose a point...</a>
                </span>
`

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("start_points").addEventListener('click', start_points_view)

    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    let cameraOffset = {
        x: -f32(starting_points_array[0].offset + 32,is_little_endian) /2 ,
        y: -f32(starting_points_array[0].offset + 40,is_little_endian) /2
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
        draw_canvas_start(cameraOffset.x, cameraOffset.y, cameraZoom, const_index, temp_x, temp_y)

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

        selected_index = object_clicked_start(temp_x, temp_y, startX, startY, cameraZoom)

        if (selected_index !== false) {
            append_to_file_editor_side_panel_start(starting_points_array[selected_index].offset)
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

            new DataView(buffer).setFloat32(starting_points_array[selected_index].offset + 32, temp_x - startX - 5, is_little_endian)
            new DataView(buffer).setFloat32(starting_points_array[selected_index].offset + 40, temp_y - startY - 5, is_little_endian)

            draw_canvas_start(startX, startY, cameraZoom, selected_index)
            append_to_file_editor_side_panel_start(starting_points_array[selected_index].offset)
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

            selected_index = object_clicked_start(temp_x, temp_y, startX, startY, cameraZoom, temp_cam_x, temp_cam_y)

            if (selected_index !== false) {
                let canvas = document.getElementById("canvas").style.cursor = 'pointer'
                if (is_dragging_element === true) {
                    new DataView(buffer).setFloat32(starting_points_array[selected_index].offset + 32, startX - 5 - netPanningX, is_little_endian)
                    new DataView(buffer).setFloat32(starting_points_array[selected_index].offset + 40, startY - 5 - netPanningY, is_little_endian)

                    draw_canvas_start(netPanningX, netPanningY)
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
        // if (!isDragging) {
        //     if (zoomAmount) {
        //         cameraZoom += zoomAmount
        //     } else if (zoomFactor) {
        //         // console.log(zoomFactor)
        //         cameraZoom = zoomFactor * lastZoom
        //     }

        //     cameraZoom = Math.min(cameraZoom, MAX_ZOOM)
        //     cameraZoom = Math.max(cameraZoom, MIN_ZOOM)

        //     // console.log(zoomAmount)
        // }
    }

    canvas.addEventListener('mousedown', onPointerDown)
    canvas.addEventListener('touchstart', (e)=>handleTouch(e, onPointerDown))
    canvas.addEventListener('mouseup', onPointerUp)
    canvas.addEventListener('mouseout', onPointerUp)

    canvas.addEventListener('touchend', (e)=>handleTouch(e, onPointerUp))
    canvas.addEventListener('mousemove', onPointerMove)
    canvas.addEventListener('touchmove', (e)=>handleTouch(e, onPointerMove))
    canvas.addEventListener('wheel', (e)=>adjustZoom(e.deltaY * SCROLL_SENSITIVITY))

    draw()
}

function draw_canvas_start(netPanningX, netPanningY, cameraZoom, element_selected, temp_x, temp_y) {
    if (document.getElementById("outer_canvas") == null) {
        return;
    }

    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    canvas.width = document.getElementById("outer_canvas").getBoundingClientRect().width
    canvas.height = document.getElementById("outer_canvas").getBoundingClientRect().height

    // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
    ctx.translate(document.getElementById("outer_canvas").getBoundingClientRect().width / 2, document.getElementById("outer_canvas").getBoundingClientRect().height / 2)
    ctx.scale(cameraZoom, cameraZoom)
    ctx.translate(-document.getElementById("outer_canvas").getBoundingClientRect().width / 2 + netPanningX, -document.getElementById("outer_canvas").getBoundingClientRect().height / 2 + netPanningY)
    ctx.clearRect(0, 0, document.getElementById("outer_canvas").getBoundingClientRect().width, document.getElementById("outer_canvas").getBoundingClientRect().height)


    ctx.fillStyle = '#00dbff'
    for (let i = 0; i < starting_points_array.length; i++) {
        let x = f32(starting_points_array[i].offset + 32, is_little_endian) + netPanningX
        let z = f32(starting_points_array[i].offset + 40, is_little_endian) + netPanningY
        if (i === element_selected) {
            ctx.fillStyle = '#2eef0b'
            ctx.fillRect(x, z, 10 / cameraZoom, 10 / cameraZoom)
            ctx.fillStyle = '#00dbff'
        } else {
            ctx.fillRect(x, z, 10 / cameraZoom, 10 / cameraZoom)
        }
    }

}

function object_clicked_start(temp_x, temp_y, startX, startY, cameraZoom, temp_cam_x, temp_cam_y) {
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    for (let i = 0; i < starting_points_array.length; i++) {

        let left_position = (f32(starting_points_array[i].offset + 32, is_little_endian)) + startX
        let right_position = (f32(starting_points_array[i].offset + 32, is_little_endian)) + startX + 10
        let top_position = (f32(starting_points_array[i].offset + 40, is_little_endian)) + startY
        let bottom_position = (f32(starting_points_array[i].offset + 40, is_little_endian)) + startY + 10

        if (temp_x > left_position && temp_x < right_position && temp_y > top_position && temp_y < bottom_position) {
            return i
        }
    }

    return false

}

function append_to_file_editor_side_panel_start(offset) {
    let html = `       
                    <a>Position: </a><br>
                    <input class='text_input' data-type="u8" data-offset=${offset + 121} value='${u8(offset + 121, is_little_endian)}'><br>
                   
                    <a>X Position: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 32} value='${f32(offset + 32, is_little_endian).toFixed(2)}'><br>
                    
                    <a>Y Position: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 36} value='${f32(offset + 36, is_little_endian).toFixed(2)}'><br>
                    
                    <a>Z Position: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 40} value='${f32(offset + 40, is_little_endian).toFixed(2)}'><br>
                    
                    <a>X Rotation: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 48} value='${f32(offset + 48, is_little_endian).toFixed(2)}'><br>
                    
                    <a>Y Rotation: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 52} value='${f32(offset + 52, is_little_endian).toFixed(2)}'><br>
                    
                    <a>Z Rotation: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 56} value='${f32(offset + 56, is_little_endian).toFixed(2)}'><br>
                   
                    <a>?1: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 76} value='${f32(offset + 76, is_little_endian).toFixed(2)}'><br>

                    <a>?2: </a><br>
                    <input class='text_input' data-type="float" data-offset=${offset + 80} value='${f32(offset + 80, is_little_endian).toFixed(2)}'><br>

                `    
    if (u32(offset + 48, is_little_endian) != 0) {
        floatlist = '<br>Unknown:'
    }

    html += '</div>'

    let side_panel = document.getElementById('file_editor_side_panel');

    side_panel.innerHTML = html

    let side_panel_array = side_panel.getElementsByTagName('INPUT')

    for (let i = 0; i < side_panel_array.length; i++) {
            side_panel_array[i].addEventListener('change', update_input)
    }

}
