// call this whenever a dynamic input box is updated
// all inputs have these datasets: type, outer_xfa,inner_xfa
// byte_amount datasets are used for strings
function dyn_update_input(e) {
    let new_value
    if (this.dataset.type === 'string') {
        if (this.dataset.byte_amount !== null) {
            new_value = this.value.slice(0, this.dataset.byte_amount)
        } else {
            new_value = this.value
        }
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
        let temp_buffer = new ArrayBuffer(4)
        new DataView(temp_buffer).setFloat32(0, this.value)
        new_value = new DataView(temp_buffer).getFloat32(0)
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
