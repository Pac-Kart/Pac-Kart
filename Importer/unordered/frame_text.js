"use strict";
function im_frame_text(o, i, x) {
    x.push({
        id: gen_id(),
        section_00: [im_string(u32(o + 0), 0, false)],
    });

    return x[i].id
    // 16 bytes;

}
