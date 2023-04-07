// fix
// load texture after asycronyss
// alpha mat fix size
function load_x_d_texture(id, outer_id, sub_group_index, mipmap_level) {
    // level =
    // console.log(mipmap_level, 'mipmap_level')
    TXFA = Object.byString(XFA, id);
    OTXFA = Object.byString(XFA, outer_id);

    let html = `<div style='overflow:hidden;height:100%'; ><div style="display:inline-block;width:95%;padding:5px;height:20%;">
   <input style='width:100%;' maxlength='52' data-outer_xfa="${id}" data-type="string" data-fixed="true" data-byte_amount="52" data-inner_xfa="name"  id='image_name' type='text' value='${TXFA.name}'>
   <div>Texture Settings
      <div class='save_records_boarder'>
         <table style='width:100%;white-space:nowrap;' >
            <tbody>
               <tr>
                  <td class='no_border'>Texture Format</td>
                  <td style='width:20%;' class='no_border'>${get_type_string(TXFA.type)}</td>
               </tr>
               <tr>
                  <td class='no_border'>Width</td>
                 <td style='width:20%;' class='no_border'>${get_dimension_int(TXFA.x)}</td>
               </tr>
               <tr>
                    <td class='no_border'>Height</td>
                    <td style='width:20%;' class='no_border'> ${get_dimension_int(TXFA.y)}</td>
               </tr>
               <tr>
                  <td class='no_border'>Mip Maps</td>
                  <td style='width:20%;' class='no_border'> ${TXFA.mipmaps}</td>
               </tr>
           </tbody>
        </table>
      </div>
   </div>
   </div>
   <div style="height:10%;text-align:center;border-bottom:solid 1px #9d9898;">
      <div style="height:70%;text-align:center;padding-right:30%;padding-left:30%;">
        <div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
           <label for="replace_texture_file" class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;'>${mip_map_html("box")}</label>
           <input style='display:none;' type='file' id='replace_texture_file'>
       </div>
        ${mip_map_html("box_after")}
      </div>${mip_map_html()}</div>
   <div style="height:70%;background:#f2f2f2;display:grid;justify-items:center;align-items:center;">
   <canvas class='img' style="grid-row:1/2;grid-column:1/3;width:40%;" id='canvas'></canvas>
   <img class='img' style="width:40%;grid-row:1/2;grid-column:3/-1;" id='canvas_img'>
    </div>
   `

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="splice_texture">X</a>'

    document.getElementById("replace_texture_file").addEventListener('change', replace_texture)
    document.getElementById("splice_texture").addEventListener('click', splice_entry)
    document.getElementById("image_name").addEventListener('change', change_name);

    mip_map_eventlistener()
    generate_texture();

    function generate_texture() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        canvas.width = get_dimension_int(TXFA.x)
        canvas.height = get_dimension_int(TXFA.y)

        // create checkerboard so alpha is easier to see
        // for (outer_2_y = 0; outer_2_y < height; outer_2_y += 4) {
        //     for (outer_2_x = 0; outer_2_x < width; outer_2_x += 4) {
        //         ctx.fillStyle = "#FF00FF00"
        //         ctx.fillRect(outer_2_x, outer_2_y, 4, 4)
        //     }
        // }

        if (TXFA.type === 65) {
            dxt1(TXFA.texture[mipmap_level], canvas.width, canvas.height)
        } else if (TXFA.type === 160 || TXFA.type === 24) {
            rgba8888(TXFA.texture[mipmap_level], canvas.width, canvas.height)
        } else if (TXFA.type === 197) {
            dxt5(TXFA.texture[mipmap_level], canvas.width, canvas.height)
        }

        document.getElementById("canvas_img").src = data_

        if (TXFA.type === 65) {
            //no alpha
            canvas.width = 0
            canvas.height = 0
        } else {
            // create checkerboard so alpha is easier to see
            canvas.width = 128
            canvas.height = 128
            let i = 0
            let grid_y = 0
            let grid_x = 0
            for (outer_2_y = 0; outer_2_y < 128; outer_2_y += 4,
            grid_y += 128 / canvas.height) {
                for (outer_2_x = 0; outer_2_x < 128; outer_2_x += 4,
                grid_x += 128 / canvas.width) {
                    if (i % 2 == 0) {
                        ctx.fillStyle = "#cccccc"
                    } else {
                        ctx.fillStyle = "#FFFFFFFF"
                    }

                    ctx.fillRect(outer_2_x, outer_2_y, outer_2_x, outer_2_y)
                    i++
                }
                i++
            }
        }

    }

    function mip_map_eventlistener() {
        // console.log(document.getElementById('mip_arrow'), 'mipa;slkdfj')
        if (TXFA.texture.length != 1) {
            if (mipmap_level === 0) {
                document.getElementById("mipmap_next").addEventListener('click', mipmap_change);
            } else if (TXFA.texture.length - 1 === mipmap_level) {
                document.getElementById("mipmap_prev").addEventListener('click', mipmap_change);
            } else {
                document.getElementById("mipmap_next").addEventListener('click', mipmap_change);
                document.getElementById("mipmap_prev").addEventListener('click', mipmap_change);
            }
        }
    }

    function replace_texture(e) {

        file_temp = e.target.files[0];

        let filename = file_temp.name
        let fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
        fileextension = fileextension.toLowerCase()

        let is_dds;
        if (fileextension === "dds") {
            is_dds = true
        } else {
            is_dds = false
        }

        // console.log(file_temp)

        if (mipmap_level === 0 && is_dds === false) {
            // not mipmap
            // not dds
            generate_canvas_replacement_pc(file_temp)
        } else if (is_dds === true) {
            // is dds
            var reader = new FileReader();

            dds_buffer = reader.readAsArrayBuffer(file_temp);

            document.getElementById("replace_texture_file").value = ''

            reader.onload = function(e) {

                dds_buffer = e.target.result

                // basic check
                if (new DataView(dds_buffer).getUint32(0, false) !== 1145328416) {
                    alert("wrong file magic");
                    return;
                }

                if (new DataView(dds_buffer).getUint32(84, false) === 1146639413) {
                    is_dxt5 = true
                } else if (new DataView(dds_buffer).getUint32(84, false) === 1146639409) {
                    is_dxt5 = false
                } else {
                    alert("dds compression missmatch")
                    return;
                }

                let dds_height = new DataView(dds_buffer).getUint32(12, true)
                let dds_width = new DataView(dds_buffer).getUint32(16, true)

                // check if acctually power of 2 first  
                if (powerOfTwo(dds_height) === false || powerOfTwo(dds_width) === false) {
                    alert("dds dimensions must be powers of 2 !!!")
                    return
                }

                if (is_dxt5 === true) {
                    dds_new_byte_length = dds_width * dds_height
                } else {
                    dds_new_byte_length = dds_width * dds_height / 2
                }

                dds_height = powerOfTwo_reverse(dds_height)
                dds_width = powerOfTwo_reverse(dds_width)

                // console.log(dds_width, dds_width, 'dds', mipmap_level)
                let dds_offset = 128

                if (mipmap_level === 0) {
                    //not mip
                    let amount_dds_mips = new DataView(dds_buffer).getUint32(28, true)
                    // console.log(amount_dds_mips, 'amount_dds_mips')
                    //FIX

                    TXFA.texture = []
                    TXFA.x = dds_width
                    TXFA.y = dds_height
                    if (is_dxt5 === true) {
                        TXFA.type = 197
                    } else {
                        TXFA.type = 65
                    }

                    //     x_texture_offset = texture_data_offset + offset_mid

                    // dds_new_byte_length = dds_new_byte_length/2

                    for (dds_loop_i = 0; dds_loop_i < amount_dds_mips; dds_loop_i++) {

                        //FIX
                        let dds_new_buffer = dds_buffer.slice(dds_offset, dds_offset + dds_new_byte_length)
                        console.log(dds_offset, dds_new_byte_length + dds_offset, 'idk', dds_buffer, 'dds_new_buffer', dds_new_buffer, 'dif', dds_offset - dds_new_byte_length)
                        dds_offset += dds_new_byte_length

                        if (is_dxt5 === true) {
                            dds_new_byte_length = dds_new_byte_length / 2
                        } else {
                            dds_new_byte_length = dds_new_byte_length / 4
                        }

                        dds_width = dds_width - 1
                        dds_height = dds_height - 1

                        if (dds_width === 1 || dds_height === 1) {
                            console.log(dds_new_buffer, 'low')
                            amount_dds_mips = 0
                        }

                        console.log(dds_width, 'dds_width', dds_height, 'dds_height')

                        TXFA.texture.push(dds_new_buffer)

                    }
                    TXFA.mipmaps = TXFA.texture.length - 1
                    document.getElementsByClassName("file_is_highlighted")[0].click()

                } else {
                    // is mip

                    // console.log(TXFA.y - mipmap_level, dds_height, 'dds_height asdf mipmap')
                    if (dds_height !== TXFA.y - mipmap_level) {
                        alert("wrong y dimensions")
                        return;
                    }
                    if (dds_width !== TXFA.x - mipmap_level) {
                        alert("wrong x dimensions")
                        return;
                    }

                    if (is_dxt5 === true && TXFA.type === 197) {//dxt5
                    } else if (is_dxt5 === true && TXFA.type === 5) {//dxt5
                    } else if (is_dxt5 === false && TXFA.type === 65) {//dxt1
                    } else if (is_dxt5 === false && TXFA.type === 4) {//dxt1
                    } else {
                        alert("mismatch mipmap type format")
                        return
                    }

                    TXFA.texture[mipmap_level] = dds_buffer.slice(dds_offset, dds_new_byte_length + dds_offset)

                    let position = document.getElementsByClassName("file_is_highlighted")[0]
                    position.click()
                    // dds_mips = new DataView(dds_buffer).getUint32(28, true)

                    // temp_y = TXFA.y
                    // temp_x = TXFA.x
                    //     x_texture_offset = texture_data_offset + offset_mid

                    // for (dds_loop_i = 0; dds_loop_i < TXFA.mipmaps + 1; dds_loop_i++) {

                    //     import_dds_into_x(dds_buffer, dds_offset, x_texture_offset, dds_new_byte_length)

                    //     function import_dds_into_x(dds_buffer, dds_offset, x_texture_offset_, length) {

                    //         for (i = 0; i < length; i++) {

                    //             temp_i = new DataView(dds_buffer).getUint8(i + dds_offset)
                    //             new DataView(buffer).setUint8(i + x_texture_offset_, temp_i)
                    //         }
                    //         x_texture_offset += i
                    //     }

                    //     temp_x = temp_x / 2
                    //     temp_y = temp_y / 2

                    // }
                    //     document.getElementsByClassName("file_is_highlighted")[0].click()

                }
            }

        } else {
            console.log('is mip / png ?????!!')
        }

        function generate_canvas_replacement_pc(file_temp) {

            // file_temp = ev.target.files[0];
            // get the file
            blobURL = URL.createObjectURL(file_temp);
            img_temp = new Image();
            img_temp.src = blobURL;

            img_temp.onerror = function() {
                URL.revokeObjectURL(this.src);
                // Handle the failure properly
                console.log("Cannot load image");
            }
            ;

            img_temp.onload = function() {

                let img_width = img_temp.width
                let img_height = img_temp.height

                let is_power_of_2 = powerOfTwo(img_width)
                while (is_power_of_2 === false) {
                    img_width--
                    is_power_of_2 = powerOfTwo(img_width)
                }
                is_power_of_2 = powerOfTwo(img_height)
                while (is_power_of_2 === false) {
                    img_height--
                    is_power_of_2 = powerOfTwo(img_height)
                }

                // console.log('true',img_width,img_height)

                // I'm using a <input type="file"> for demonstrating

                URL.revokeObjectURL(this.src);
                mime_type = "image/jpeg";
                quality = qualityRate(file_temp.size);
                canvas_temp = document.createElement("canvas");
                canvas_temp.width = img_width
                canvas_temp.height = img_height
                ctx_temp = canvas_temp.getContext("2d");
                ctx_temp.imageSmoothingEnabled = false
                ctx_temp.drawImage(img_temp, 0, 0, canvas_temp.width, canvas_temp.height);

                document.getElementById("file_editor").append(canvas_temp);

                let temp_array = ctx_temp.getImageData(0, 0, canvas_temp.width, canvas_temp.height).data

                var arrayBuffer = temp_array.buffer.slice(temp_array.byteOffset, temp_array.byteLength + temp_array.byteOffset);

                TXFA.texture = []
                TXFA.texture.push(arrayBuffer)
                TXFA.type = 160
                TXFA.x = powerOfTwo_reverse(canvas_temp.width)
                TXFA.y = powerOfTwo_reverse(canvas_temp.height)
                TXFA.mipmaps = 0

                // canvas_temp.toBlob(blob=>{
                //     let localfile = new File([blob],'import.png',{
                //         type: "image/jpeg",
                //         lastModified: new Date().getTime()
                //     },'utf-8');
                //     let container = new DataTransfer();
                //     container.items.add(localfile);
                //     aaaaaaaaa = container
                //     console.log(container)
                //     console.log(container.files)
                //     canvas_temp.files = container.files;
                //     canvas_temp.toDataURL(canvas_temp.files[0])
                // }
                // , mime_type, quality);

                // console.log("?")
                let position = document.getElementsByClassName("file_is_highlighted")[0]
                position.click()

            }
            ;

        }
        function powerOfTwo(x) {
            return Math.log2(x) % 1 === 0;
        }
        function powerOfTwo_reverse(x) {
            //FIX
            // this is rly bad but im lazy 
            if (x === 1) {
                return 0
            } else if (x === 2) {
                return 1
            } else if (x === 4) {
                return 2
            } else if (x === 8) {
                return 3
            } else if (x === 16) {
                return 4
            } else if (x === 32) {
                return 5
            } else if (x === 64) {
                return 6
            } else if (x === 128) {
                return 7
            } else if (x === 256) {
                return 8
            } else if (x === 512) {
                return 9
            } else if (x === 1024) {
                return 10
            } else if (x === 2048) {
                return 11
            } else if (x === 4096) {
                return 12
            } else if (x === 8192) {
                return 13
            } else if (x === 16384) {
                return 14
            } else {
                alert("wtf", x, 'malformed or to high how')
            }
        }
    }

    function mipmap_change() {
        // console.log(this)
        if (this.id === "mipmap_prev") {
            load_x_d_texture(id, outer_id, sub_group_index, mipmap_level - 1)
        } else {
            load_x_d_texture(id, outer_id, sub_group_index, mipmap_level + 1)
        }
    }

    function mip_map_html(s) {
        if (s === "box") {
            if (mipmap_level === 0) {
                return '⟳ Replace Texture'
            } else {
                return '⟳ Replace Mipmap'
            }
        } else if (s === "box_after") {
            if (mipmap_level !== 0) {
                return `⚠️ warning file must be ${get_type_string(TXFA.type)} & ${get_dimension_int(TXFA.x)} x ${get_dimension_int(TXFA.y)}`
            } else {
                return ""
            }
        } else {

            let html = ''
            if (TXFA.mipmaps === 0) {
                return html
            } else {
                let prev = `<span id='mipmap_prev' class="save_records_boarder">
                               <label class="plus_button noselect" style="color:#959595;display:block;">←</label>
                            </span>`
                if (mipmap_level === 0) {
                    prev = `<span class="save_records_boarder">
                               <label class="noselect" style="color:#ffffff;">←</label>
                            </span>`
                }
                let next = `<span id='mipmap_next' class="save_records_boarder">
                               <label class="plus_button noselect" style="color:#959595;display:block;">→</label>
                            </span>`
                if (TXFA.texture.length - 1 === mipmap_level) {
                    next = `<span class="save_records_boarder">
                               <label class="noselect" style="color:#ffffff;">→</label>
                            </span>`
                }
                html += `
         <div id='mip_arrow' style="height:30%;justify-content:space-evenly;display:flex;flex-wrap:wrap;margin-left:20%;margin-right:20%;align-content:center;">
         ${prev}
            <span> ${mipmap_level + 1} / ${TXFA.mipmaps + 1}</span>
            ${next}
         </div>`
                return html
            }
        }
    }

    function get_type_string(type) {
        if (type === 65) {
            return "DDS DXT1"
        } else if (type === 160 || type === 24) {
            return "RGBA8888"
        } else if (type === 197) {
            return "DDS DXT5"
        } else {
            return `Unknown Format ${type}`
        }

    }

    function get_dimension_int(dimension) {
        let dim = Math.pow(2, dimension)
        let i = 0
        let multiply = 2
        if (TXFA.type === 65) {
            multiply = 2
        }
        while (mipmap_level > i) {
            dim = dim / multiply
            i++
        }

        return dim
    }

    function change_name() {
        let temp_texture_name = this.value
        temp_texture_name = temp_texture_name.substr(0, 52)
        temp_texture_name = temp_texture_name.trim()

        let file_string
        if (temp_texture_name == "") {
            file_string = "Blank"
        } else {
            file_string = temp_texture_name
        }

        Object.byString(XFA, this.dataset.outer_xfa, this.dataset.inner_xfa, temp_texture_name)
        this.value = temp_texture_name
        position = document.getElementsByClassName("file_is_highlighted")[0].innerText = file_string

    }

    function splice_entry() {
        let temp_xfa = Object.byString(XFA, outer_id);
        let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
        let html = ''

        temp_xfa.splice(sub_group_index, 1)

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }

        if (temp_xfa.length === 0) {
            outer_html.children[0].className = 'no_arrow'
        } else {

            for (let i = 0; i < temp_xfa.length; i++) {
                html += dynamic__textures(temp_xfa[i])
            }

            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)
            outer_html.children[0].click()
            outer_html.children[0].click()
        }
        if (sub_group_index === 0) {
            outer_html.children[sub_group_index + 2].click()
        } else {
            outer_html.children[sub_group_index + 2].children[2].click()
        }
        file_viewer.focus()

    }
}

////////// work on this later
