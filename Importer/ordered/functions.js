"use strict";
function in_ml(o, array, tfunction, x, offset_check, model_n) {
    //multi linked
    // append_global_multilinked
    if (o) {
        if (offset_check === o + g.m && tfunction.name === "im_models") {
            if (model_n == undefined)
                model_n = 0;
            // if (model_n == undefined) {
            //     model_n = 0
            // }
            return im_patch(g.model_patch_ref, o + g.m + model_n)
            // shared model
        } else {
            let id = 0
            if (array.includes(o)) {
                let i = array.indexOf(o)
                id = x[i].id
            } else {
                array.push(o)
                id = tfunction(o + g.m, x.length, x)
            }
            return id
        }
        return 0
    }
    return 0

}

function im_patch(array, o, is_model) {
    const patched_index = is_model ? 1 : 0;

    for (const item of array) {
        if (item[patched_index] === (o - g.m)) {
            return [item];
        }
    }

    return -1;
}

function im_patch_list(o, a, t) {

    const offsets = (g.console === "gamecube") ? [0, 6, 4] : [0, 4, 6];

    return Array.from({
        length: a
    }, (_,i)=>{
        const baseOffset = i * 8;
        return [u32(o + baseOffset + offsets[0]), u16(o + baseOffset + offsets[1]), u16(o + baseOffset + offsets[2]), t];
    }
    );
}

function im_string(startIndex, endIndex, isNoEnd=undefined) {
    if (startIndex === 0)
        return '';
    const chars = [];

    while (!isNoEnd && u8(startIndex + g.m) !== 0) {
        chars.push(String.fromCharCode(u8(startIndex + g.m)));
        startIndex++;
    }
    if (chars.length === 0)
        return '';

    return chars.join('');
}

function divisible(value, divisibility) {
    const remainder = value % divisibility;
    g.divisible_prev_value = [value, divisibility]
    return remainder === 0 ? value : value + (divisibility - remainder);
}

function im_debug(o, n) {
    for (let i = 0; i < n; i++) {
        new DataView(buffer).setUint8(o + i, 0xff)
    }
}

function gen_id() {
    let id = id_list
    id_list++
    return id
}
