function in_ml(o, array, tfunction, x, offset_check, model_n) {
    //multi linked
    // append_global_multilinked
    if (o) {
        if (offset_check === o + g.m && tfunction.name === "im_models") {
            if (model_n == undefined) {
                model_n = 0
            }
            return im_patch(g.model_patch_ref, o + g.m + model_n)
            // shared model
        } else {
            let id = 0
            if (array.includes(o)) {
                let i = array.indexOf(o)
                id = x[i].id
                // console.log(id)
            } else {
                array.push(o)
                id = tfunction(o + g.m, x.length, x)
                // console.log(id)
            }
            return id
        }
        return 0
    }
     return 0

}
// function in_ml(o, array, tfunction, x) {
//     if (o === 0) {
//         return 0;
//     }

//     const index = array.indexOf(o);

//     if (index !== -1) {
//         return x[index].id;
//     }

//     array.push(o);
//     const id = tfunction(o + g.m, x.length, x);
//     return id;
// }

// function im_patch(array, o, is_model) {
//     let patched_index = 0
//     if (is_model === true) {
//         patched_index = 1
//     }

//     let temp_array = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][patched_index] !== (o - g.m)) {// console.log('not', array[i])
//         } else {
//             temp_array.push(array[i])
//             i = array.length
//             return temp_array
//         }
//     }
//     return -1
// }

function im_patch(array, o, is_model) {
    const patched_index = is_model ? 1 : 0;

    for (const item of array) {
        if (item[patched_index] === (o - g.m)) {
            return [item];
        }
    }

    return -1;
}

// function im_patch_list(o, a) {

//     let array = []
//     if (fileextension === "xgc") {
//         for (let i = 0; i < a; i++) {
//             array.push([u32(o + (i * 8)), u16(o + 6 + (i * 8)), u16(o + 4 + (i * 8))])
//         }
//     } else {

//         for (let i = 0; i < a; i++) {
//             array.push([u32(o + (i * 8)), u16(o + 4 + (i * 8)), u16(o + 6 + (i * 8))])
//         }
//     }
//     return array
// }

function im_patch_list(o, a, t) {

    const offsets = (fileextension === "xgc") ? [0, 6, 4] : [0, 4, 6];

    return Array.from({
        length: a
    }, (_,i)=>{
        const baseOffset = i * 8;
        return [u32(o + baseOffset + offsets[0]), u16(o + baseOffset + offsets[1]), u16(o + baseOffset + offsets[2]), t];
    }
    );
}

// function im_string(o, end, is_no_end) {
//     if (o) {
//         const chars = [];

//         if (is_no_end === undefined) {
//             for (; o < end; o++) {
//                 chars.push(String.fromCharCode(u8(o + g.m)));
//             }
//         } else {
//             if (u8(o + g.m) === 0) {
//                 is_no_end = true;
//             }

//             while (!is_no_end) {
//                 chars.push(String.fromCharCode(u8(o + g.m)));
//                 o++;

//                 if (u8(o + g.m) === 0) {
//                     is_no_end = true;
//                 }
//             }
//         }
//         return chars.join('');
//     } else {
//         return null;
//     }
// }

function im_string(startIndex, endIndex, isNoEnd=undefined) {
    if (startIndex === 0) {
        return ''
    }
    const chars = [];

    while (!isNoEnd && u8(startIndex + g.m) !== 0) {
        chars.push(String.fromCharCode(u8(startIndex + g.m)));
        startIndex++;
    }
    if (chars.length === 0) {
        return ''
    }

    return chars.join('');
}

// function divisible(value, divisibility) {
//     let temp_value = value
//     while ((temp_value) % divisibility !== 0) {
//         temp_value++
//     }
//     return temp_value
// }

function divisible(value, divisibility) {
    const remainder = value % divisibility;
    g.divisible_prev_value = [value, divisibility]
    // g.debug ? im_debug(value, remainder) : 0;
    return remainder === 0 ? value : value + (divisibility - remainder);
}

function im_debug(o, n) {
    for (let i = 0; i < n; i++) {
        new DataView(buffer).setUint8(o + i, 0xff)
    }
}
