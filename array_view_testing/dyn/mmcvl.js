"use strict";
/* start sec id list */

function get_mm_sec_id(string) {
    switch (string) {
    case ':zlA':
        return "mm_file_header"
        break
    case ';YXC':
        return "mm_datapack"
        break
    default:
        return null
    }
}
/* end sec id list */
/////////////////////
/* start import list */

async function im_mm_x() {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_mm_file_header(0, 0, x[0].format)
}

function im_mm_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ":zlA",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //check this
        u32_8: u32(o + 8),
        //check this
        section_datapack: [],
    });

    im_mm_datapack(12, 0, x[i].section_datapack)

    return x[i].id
    // 12 bytes;

}

function im_mm_datapack(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ";YXC",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        u32_8: u32(o + 8),
        //amount?
        u32_12: u32(o + 12),
        //amount?
        // section_16: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        // section_28: [],
        u32_32: u32(o + 32),
        //amount?
        // section_36: [],
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        //amount?
        ordered: [],
        patch_list: [],
    });

    g.m = buffer.byteLength - u32(12)
    let patchlistoffset = 60
    // get_mm_patch_list(12, patchlistoffset)

    x[i].patch_list = convert_arraybuffer_base64(buffer.slice(patchlistoffset, g.m))
    x[i].ordered = convert_arraybuffer_base64(buffer.slice(g.m, buffer.byteLength))

    //  x.push({
    //     index_patch_list_buffer: buffer.slice(o, endoffset),
    //     ordered_list_buffer: buffer.slice(o, endoffset),
    //     offset_patch_list: buffer.slice(o, endoffset)
    // });

    // u32(o + 16) ? im_mm_Texture(u32(o + 16) + g.m, x[i].section_16) : 0;
    // offset? 
    // u32(o + 28) ? im_mm_sound_list(u32(o + 28) + g.m, x[i].section_28) : 0;
    // offset? 
    // u32(o + 36) ? im_mm_color_table(u32(o + 36) + g.m, x[i].section_36) : 0;
    // offset? 
    // u32(o + 44) ? im_mm_model_texture_anims_list(u32(o + 44) + g.m, x[i].section_44) : 0;
    // offset?
    return x[i].id
    // 48 bytes;

}

/* end import list */
/////////////////////
/* start add list */
function add_mm_file_header() {
    return {
        id: gen_id(),
        sec_id: ":zlA",
        u32_0: 0,
        u32_4: u32(o + 4),
        //check this
        u32_8: u32(o + 8),
        //check this
    };

}

function add_mm_datapack() {
    return {
        id: gen_id(),
        sec_id: ";YXC",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        u32_24: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
    };

}

/* end add list */
/////////////////////
/* start info list */
function info_mm_file_header() {
    return {
        sec_id: ":zlA",
        u32_0: 0,
        u32_4: u32(o + 4),
        //check this
        u32_8: u32(o + 8),
        //check this
    };

}

function info_mm_datapack() {
    return {
        sec_id: ";YXC",
        u32_0: 0,
        u32_4: {
            a: null
        },
        u32_8: {
            a: null
        },
        u32_12: {
            a: null
        },
        section_16: ["change this"],
        u32_20: {
            a: null
        },
        u32_24: 0,
        section_28: ["change this"],
        u32_32: {
            a: null
        },
        section_36: ["change this"],
        u32_40: {
            a: null
        },
        section_44: ["change this"],
    };

}

/* end info list */
/////////////////////
/* start export list */
function ex_mm_x(o, x) {
    globalThis.datapack_buffer = new ArrayBuffer(60)

    buffer_array.push(datapack_buffer)
    dynamic_buffer = datapack_buffer

    // datapack_buffer = datapack_buffer.slice(0, io - o)

    let time_array = []
    let a = Date.now()

    ex_mm_file_header(o,x)

    time_array.push(Date.now() - a)

    console.pk_log(`saved in ${time_array}`)

}
function ex_mm_file_header(o, x) {
    let e = o + 12
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    ex_mm_datapack(e, x.section_datapack[0])

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_mm_datapack(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o +4, x.u32_4)
    su32(o +8, x.u32_8)
    su32(o +12, x.u32_12)
    su32(o +16, x.u32_16)
    su32(o +20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o +36, x.u32_36)
    su32(o +32, x.u32_32)
    su32(o +40, x.u32_40)
    su32(o +44, x.u32_44)

    let ordered_length = x.u32_0
    let patch_offset = 60
    let patch_list_buffer = convert_base64_arraybuffer(x.patch_list)
    let ordered_list_buffer = convert_base64_arraybuffer(x.ordered)
    globalThis.patch_buffer = new ArrayBuffer(patch_list_buffer.byteLength)
    buffer_array.push(patch_buffer)
    dynamic_buffer = patch_buffer

    new Uint8Array(dynamic_buffer).set(new Uint8Array(patch_list_buffer), 0)
    e = e + x.patch_list.byteLength
    patch_buffer = patch_buffer.slice(0, e - o)

    globalThis.ordered_buffer = new ArrayBuffer(ordered_length)
    buffer_array.push(ordered_buffer)

    dynamic_buffer = ordered_buffer

    new Uint8Array(dynamic_buffer).set(new Uint8Array(ordered_list_buffer), 0)
    ordered_buffer = ordered_buffer.slice(0, e)


    // e = ex_s_offset(o + 16, e, ex_mm_Texture, x.section_16, 'down');
    // e = ex_s_offset(o + 28, e, ex_mm_sound_list, x.section_28, 'down');
    // e = ex_s_offset(o + 36, e, ex_mm_color_table, x.section_36, 'down');
    // e = ex_s_offset(o + 44, e, ex_mm_model_texture_anims_list, x.section_44, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

/* end export list */
