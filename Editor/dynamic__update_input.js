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
    } else if (this.dataset.type === 'float') {
        let new_val = this.value
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setFloat32(0, this.value, is_little_endian)
        new_value = new DataView(temp_buffer).getFloat32(0, is_little_endian)
        if (isNaN(new_value) === true) {
            console.log('f')
            new DataView(buffer).setFloat32(this.dataset.offset, 0, is_little_endian)
            new_value = f32(this.dataset.offset, is_little_endian)
        }

        if (Number.isSafeInteger(new_value) === false) {
            new DataView(buffer).setFloat32(this.dataset.offset, new_val, is_little_endian)
            new_value = f32(this.dataset.offset, is_little_endian)
        }

        if (Number.isInteger(new_value)) {
        } else {
            new_value = Number(new_value.toFixed(2))
        }
    }
    Object.byString(XFA, this.dataset.outer_xfa, this.dataset.inner_xfa, new_value)
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
        console.log('test', o)
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
            html += html_generator(OXFA[i],i)
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
