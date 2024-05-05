"use strict";
function dynamic_save() {

    let binary_size = (x[0].directory.length * 24) + 16

    globalThis.buffer_array = []

    globalThis.directory_buffer = new ArrayBuffer(binary_size)
    globalThis.dynamic_buffer = directory_buffer
    buffer_array.push(dynamic_buffer)

    let global_offset = ex_x()
    let totalbytelength = 128

    for (let buffer of buffer_array) {
        totalbytelength += buffer.byteLength
    }
    let final_array = new Uint8Array(totalbytelength)
    final_array.set(new Uint8Array(buffer_array[0]), 0)

    // new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA),offset) 

    let offset = buffer_array[0].byteLength

    for (let i = 1; i < buffer_array.length; i += 4) {
        //datapack
        final_array.set(new Uint8Array(buffer_array[i]), offset)
        offset += buffer_array[i].byteLength
        //index patch list
        final_array.set(new Uint8Array(buffer_array[i + 2]), offset)
        offset += buffer_array[i + 2].byteLength
        //ordered
        final_array.set(new Uint8Array(buffer_array[i + 1]), offset)
        offset += buffer_array[i + 1].byteLength
        //offset patch list
        final_array.set(new Uint8Array(buffer_array[i + 3]), offset)
        offset += buffer_array[i + 3].byteLength
    }

    globalThis.end_buffer = new ArrayBuffer(128)
    dynamic_buffer = end_buffer

    let i = 0
    for (; i < end_buffer.byteLength; i++) {
        su8(i, 32)
    }

    final_array.set(new Uint8Array(end_buffer),offset)

    delete globalThis.directory_buffer
    delete globalThis.end_buffer
    delete globalThis.buffer_array
    delete globalThis.dynamic_buffer
    delete globalThis.datapack_buffer
    delete globalThis.ordered_buffer
    delete globalThis.offset_patch_buffer
    delete globalThis.index_patch_buffer

    return final_array

}
