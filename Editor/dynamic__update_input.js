"use strict";
// call this whenever a dynamic input box is updated
// all inputs have these datasets: type, outer_xfa,inner_xfa
// byte_amount datasets are used for strings
// R,G,B,A used for colors
function dyn_update_input(e) {
    let new_value
    let src = e.srcElement
    if (src.type === "file") {
        return
    }

    if (src.dataset.type === 'string') {
        if (src.dataset.byte_amount !== null) {
            new_value = src.value.slice(0, src.dataset.byte_amount)
        } else {
            new_value = src.value

        }
    } else if (src.dataset.type === 'color') {
        new_value = src.value
        // ?

    } else if (src.tagName === 'SELECT') {
        if (src.dataset.type === 'special') {
            let share_amt = 2
            let set_index
            let share_index_box = src.parentElement.children[1]
            if (src.value.includes('Share')) {
                share_index_box.disabled = false
                let directory = src.dataset.outer_xfa.slice(0, 16).replace('[0].directory[', '').replace(']', '')
                let linkedfiles = Object.byString(x, `[0].directory[${directory}].datapack[0].linked_files`);

                if (src.value === "Share_1") {
                    new_value = linkedfiles.u32_92
                } else if (src.value === "Share_2") {
                    new_value = linkedfiles.u32_112
                }
                if (Object.byString(x, src.dataset.outer_xfa + '[0]' + '[2]') === 0) {
                    //change from local to share
                    Object.byString(x, src.dataset.outer_xfa + '[0]', '1', 0)
                }
                Object.byString(x, src.dataset.outer_xfa + '[0]', '2', new_value)

                set_index = src.value
                share_index_box.value = Object.byString(x, src.dataset.outer_xfa + '[0]' + '[1]')
            } else {
                share_index_box.disabled = true
                share_index_box.value = ''
                set_index = Number(src.children[src.selectedIndex].value)
                new_value = Number(src.selectedIndex - share_amt)
                Object.byString(x, src.dataset.outer_xfa + '[0]', '1', new_value)
                Object.byString(x, src.dataset.outer_xfa + '[0]', '2', 0)
            }
            src.value = set_index

            return
        } else {
            new_value = Number(src.children[src.selectedIndex].value)
        }

    } else if (src.dataset.type === 'u8') {
        let temp_buffer = new ArrayBuffer(1)
        new DataView(temp_buffer).setUint8(0, src.value)
        new_value = new DataView(temp_buffer).getUint8(0)
    } else if (src.dataset.type === 'u16') {
        let temp_buffer = new ArrayBuffer(2)
        new DataView(temp_buffer).setUint16(0, src.value, g.endian)
        new_value = new DataView(temp_buffer).getUint16(0, g.endian)
    } else if (src.dataset.type === 'u32') {
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setUint32(0, src.value, g.endian)
        new_value = new DataView(temp_buffer).getUint32(0, g.endian)
    } else if (src.dataset.type === 'float' || src.dataset.type === 'f32') {
        let new_val = src.value
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setFloat32(0, src.value, g.endian)
        new_value = new DataView(temp_buffer).getFloat32(0, g.endian)
        if (isNaN(new_value) === true) {
            new DataView(temp_buffer).setFloat32(0, 0, g.endian)
            new_value = new DataView(temp_buffer).getFloat32(0, g.endian)
        }

        if (Number.isSafeInteger(new_value) === false) {
            new DataView(temp_buffer).setFloat32(0, new_val, g.endian)
            new_value = new DataView(temp_buffer).getFloat32(0, g.endian)

        }

        if (Number.isInteger(new_value)) {} else {
            new_value = Number(new_value.toFixed(2))
        }
    } else {
        console.log("datatype not def")
    }
    Object.byString(x, src.dataset.outer_xfa, src.dataset.inner_xfa, new_value)
    src.value = new_value
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
        // x_addEventListener_file_viewer(outer_html)
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
    let newName = this.value.substr(0, this.maxlength || this.value.length).trim() || "Blank";

    Object.byString(x, this.dataset.outer_xfa, this.dataset.inner_xfa, newName);
    this.value = newName;
    document.getElementsByClassName("file_is_highlighted")[0].innerText = newName;

}

function add_events() {
    const fileEditor = document.getElementById('file_editor');

    fileEditor.addEventListener('change', function(event) {
        const target = event.target;
        if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
            dyn_update_input(event);
            if (target.className.includes("reset")) {
                document.getElementsByClassName("file_is_highlighted")[0].click()
            }
        }
    });
}

function generate_linkbox(path, innerpath, type, id) {
    const directory = path.slice(0, 16).replace('[0].directory[', '').replace(']', '');
    const typelist = Object.byString(x, `[0].directory[${directory}].datapack[0].ordered[0].unordered[0]`)[type];

    let html = `<select style="width:100%" title="${type} Selector" data-outer_xfa="${path}" data-inner_xfa="${innerpath}">
                    <option value="0"> </option>`;

    for (let i = 0; i < typelist.length; i++) {
        let name
        switch (type) {
        case 'model_link':
            name = typelist[i].section_04[0]
            break
        case 'activator':
            name = typelist[i].section_08[0]
            break
        default:
            name = `${type} ${i + 1}`
        }
        const selected = typelist[i].id === id ? 'selected="selected"' : '';
        html += `<option ${selected} value="${typelist[i].id}">→ ${name}</option>`;
    }

    return html + '</select>'
}

function linkbox_clicked() {
}

function generate_linkbox_special(path, id) {
    if (id === -1) {
        return `<select disabled style="width:100%" title="disabled" Selector"></select>`
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

    let optionhtml = ''

    let share_input = 'disabled'
    let share = {
        _1: {
            set: '',
            disabled: ''
        },
        _2: {
            set: '',
            disabled: ''
        }
    }
    let linkedfiles = Object.byString(x, `[0].directory[${directory}].datapack[0].linked_files`);

    if (id[0][2] !== 0) {
        share_input = `value="${id[0][1]}"`
        if (id[0][2] === linkedfiles.u32_92) {
            //first file
            share._1.set = `selected="selected"`
        } else if (id[0][2] === linkedfiles.u32_112) {
            //2nd
            share._2.set = `selected="selected"`
        }

    }
    let share_set2 = ''
    if (linkedfiles.u32_92 === 0) {
        share._1.disabled = 'disabled'
    }
    if (linkedfiles.u32_112 === 0) {
        share._2.disabled = 'disabled'
    }

    optionhtml += `<option ${share._1.disabled} ${share._1.set} value="Share_1">→ Share 1 (${linkedfiles.string_1[0]})</option>
                    <option ${share._2.disabled} ${share._2.set} value="Share_2">→ Share 2 (${linkedfiles.string_2[0]})</option>`

    let typelist = Object.byString(x, `[0].directory[${directory}].datapack[0]` + typepath);
    let set
    let htmltype = type

    for (let i = 0; i < typelist.length; i++) {
        if (type === "Texture") {
            htmltype = typelist[i].name
        } else {
            htmltype = type + ' ' + (i + 1)
        }
        set = ''
        if (id[0][1] === i && id[0][2] === 0) {
            set = `selected="selected"`
        }
        optionhtml += `<option ${set} value="${typelist[i].id}"> ${htmltype}</option>`

    }

    let html = `
    <span>
        <select data-type="special" style="width:70%" title="${type}" data-outer_xfa="${path}" data-inner_xfa="${0}" Selector>
        ${optionhtml}
        </select>
        <input ${share_input} style='width:25%' title='Share Index' data-outer_xfa="${path}[0]" data-inner_xfa="${1}" data-type='u16'>
    </span>`

    return html

}

function generate_entry(f) {
    let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
    let html = ''

    for (let i = outer_html.children.length - 1; i > 2; i--) {

        outer_html.children[i].remove()
    }
    if (TXFA.length === 0) {
        alert('broke how TXFA.length ' + f.name)
    } else {
        outer_html.children[0].className = 'file_arrow'
        for (let i = 0; i < TXFA.length; i++) {

            html += f(TXFA[i], i, TXFA[i][1])
        }
        outer_html.innerHTML += html

        outer_html.children[0].className = 'file_arrow'
        outer_html.children[0].click()
        if (outer_html.children[0].innerText === '→') {
            outer_html.children[0].click()
        }

    }
    file_viewer.focus()
}
