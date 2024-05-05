"use strict";
function im_unknown(o, i, x) {
    x.push({
        id: gen_id(),
        unordered_unknown_00_00: 0,
    });

    x[i].unordered_unknown_00_00 = in_ml(u32(o + 0), g.unknown_00_array, im_unknown_00, g.unordered_ref.unknown_00);
    return x[i].id
}
