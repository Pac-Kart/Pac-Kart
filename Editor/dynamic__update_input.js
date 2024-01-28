// call this whenever a dynamic input box is updated
// all inputs have these datasets: type, outer_xfa,inner_xfa
// byte_amount datasets are used for strings
// R,G,B,A used for colors
function dyn_update_input(e) {
    let new_value
    if (this.dataset.type === 'string') {
        if (this.dataset.byte_amount !== null) {
            new_value = this.value.slice(0, this.dataset.byte_amount)
        } else {
            new_value = this.value

        }
    } else if (this.dataset.type === 'color') {
        new_value = this.value
        // ?
    } else if (this.dataset.type === 'u8') {
        let temp_buffer = new ArrayBuffer(1)
        new DataView(temp_buffer).setUint8(0, this.value)
        new_value = new DataView(temp_buffer).getUint8(0)
    } else if (this.dataset.type === 'u16') {
        let temp_buffer = new ArrayBuffer(2)
        new DataView(temp_buffer).setUint16(0, this.value)
        new_value = new DataView(temp_buffer).getUint16(0)
    } else if (this.dataset.type === 'u32') {
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setUint32(0, this.value)
        new_value = new DataView(temp_buffer).getUint32(0)
    } else if (this.dataset.type === 'float' || this.dataset.type === 'f32') {
        let new_val = this.value
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setFloat32(0, this.value, is_little_endian)
        new_value = new DataView(temp_buffer).getFloat32(0, is_little_endian)
        if (isNaN(new_value) === true) {
            // console.log('f')
            new DataView(buffer).setFloat32(this.dataset.offset, 0, is_little_endian)
            new_value = f32(this.dataset.offset, is_little_endian)
        }

        if (Number.isSafeInteger(new_value) === false) {
            new DataView(buffer).setFloat32(this.dataset.offset, new_val, is_little_endian)
            new_value = f32(this.dataset.offset, is_little_endian)
        }

        if (Number.isInteger(new_value)) {} else {
            new_value = Number(new_value.toFixed(2))
        }
    } else {
        console.log("datatype not def")
    }
    Object.byString(x, this.dataset.outer_xfa, this.dataset.inner_xfa, new_value)
    this.value = new_value
}
// stolen from stackoverflow
Object.byString = function(o, s, z, x) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    // convert indexes to properties
    s = s.replace(/^\./, '');
    // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    if (x != null) {
        o[z] = x
        // console.log('test', o)
    }

    return o;
}

function x_d_splice_list(html_generator, outer_xfa, entry_index) {
    let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement.parentElement
    let html = ''
    let OXFA = Object.byString(XFA, outer_xfa);

    OXFA.splice(entry_index, 1)

    for (let i = outer_html.children.length - 1; i > 2; i--) {

        outer_html.children[i].remove()
    }

    if (OXFA.length === 0) {
        outer_html.children[0].className = 'no_arrow'
    } else {

        for (let i = 0; i < OXFA.length; i++) {
            html += html_generator(OXFA[i], i)
        }

        outer_html.innerHTML += html
        x_addEventListener_file_viewer(outer_html)
        outer_html.children[0].click()
        outer_html.children[0].click()
    }
    if (entry_index === 0) {
        outer_html.children[entry_index + 2].click()
    } else {
        outer_html.children[entry_index + 2].children[2].click()
    }
    file_viewer.focus()
}

//add entry
//remove entry
function edit_generate_file(element) {}

function edit_change_name() {
    let temp_name = this.value

    if (this.maxlength !== undefined) {
        temp_name = temp_name.substr(0, this.maxlength)
    }
    temp_name = temp_name.trim()

    if (temp_name == "") {
        temp_name = "Blank"
    } else {
        temp_name = temp_name
    }

    Object.byString(x, this.dataset.outer_xfa, this.dataset.inner_xfa, temp_name)
    this.value = temp_name
    document.getElementsByClassName("file_is_highlighted")[0].innerText = temp_name

}

function add_events() {
    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }
    let select_field = file_editor.getElementsByTagName('select')
    for (let i = 0; i < select_field.length; i++) {
        select_field[i].addEventListener('change', dyn_update_input)
    }

}

function genterate_linkbox(path, type, id) {
    let directory = path.slice(0, 16).replace('[0].directory[', '').replace(']', '')

    let typelist = Object.byString(x, `[0].directory[${directory}].datapack[0].ordered[0].unordered[0]`);
    typelist = typelist[type]

    //generate options
    let html = `<select disabled style="width:100%" title="${type} Selector">
                    <option value="0"> </option>`

    let set
    for (let i = 0; i < typelist.length; i++) {
        set = ''
        if (typelist[i].id === id) {
            let name = `${type} ${i + 1}`
            if (type === 'model_link') {
                name = typelist[i].section_04[0]
            }
            set = `selected="selected"`
        html += `<option ${set} value="${typelist[i].id}">→ ${name}</option>`

        }
        // html += `<option ${set} value="${typelist[i].id}">→ ${type} ${i + 1}</option>`

    }
    return html

}

function genterate_linkbox_special(path, id) {
    if (id === -1) {
        return `<select disabled style="width:100%" title="disabled" Selector">`
    }
    let directory = path.slice(0, 16).replace('[0].directory[', '').replace(']', '')
    let typepath = ''
    let type
    switch (id[0][3]) {
    case "s":
        typepath = '.audio[0].sound'
        type = 'Sound'
        break
    case "t":
        typepath = '.ordered[0].textures'
        type = 'Texture'
        break
    case "a":
        typepath = '.ordered[0].texture_animation'
        type = "Animation"
        break
    case "m":
        typepath = '.ordered[0].models'
        type = 'Model'
        break
    }

    //ordered[0].unordered[0]

    //generate options
    // let sharearry = [0,0,0]
    // if (id[0][2] === 0) {
    //     sharearry = [1,'','']
    // }else if (id[0][2] === 1) {
    //     sharearry = ['',`selected="selected"`,'']
    // }else if (id[0][2] === 2) {
    //     sharearry = [0,'',`selected="selected"`]
    // }
    let html = `<select disabled style="width:100%" title="${type} Selector">`
    if (id[0][2] === 1 || id[0][2] === 2) {
    let linkedfiles = Object.byString(x, `[0].directory[${directory}].datapack[0].linked_files`);

        let temp_choise = 0
        if (id[0][2] ===linkedfiles.u32_92) {
            //first file
            temp_choise = 1
        }else if (id[0][2] ===linkedfiles.u32_112) {
            //2nd
            temp_choise = 2
        }

        html += `<option selected="selected" value="1">→ Share ${temp_choise} (${linkedfiles['string_' + temp_choise]}) ${id[0][1]+1} </option>`

    } else {
    let typelist = Object.byString(x, `[0].directory[${directory}].datapack[0]` + typepath);
        let set
        let htmltype = type

        for (let i = 0; i < typelist.length; i++) {
            if (type === "Texture") {
                htmltype = typelist[i].name
            }else{
                htmltype = type + ' ' + (i + 1)
            }
            set = ''
            if (id[0][2] === 0) {
                if (id[0][1] === i) {
                    set = `selected="selected`
                    html += `<option ${set} value="${typelist[i].id}"> ${htmltype}</option>`

                }
            }
            // html+=`<option ${set} value="${typelist[i].id}">→ ${htmltype} ${i+1}</option>`

        }
    }
    return html

}
