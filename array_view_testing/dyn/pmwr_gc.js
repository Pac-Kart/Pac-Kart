"use strict";

function get_pmwr_gc_sec_id(string) {
    switch (string) {
    case 'gjbf':
        return "pmwr_gc_file_header"
        break
    case ']7Zf':
        return "pmwr_gc_directory"
        break
    default:
        return null
    }
}

async function im_pmwr_gc_x(index) {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_pmwr_gc_file_header(0, 0, x[index].format)
}

function im_pmwr_gc_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        directory: [],
    });

    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_pmwr_gc_directory(16 + (i * 24), i, x[i].directory, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log("saved in " + time_array)

    return x[i].id
    // 16 bytes;

}

function im_pmwr_gc_directory(o, i, x, global) {
    let next_offset = o + 24

    g = {
        divisible_prev_value: [],
        debug: pk_debug,
        type_string: g.type_string,
        game: g.game,
        console: g.console,
        file_version: u32(8),
        file_dir_type: 0,
        file_name: g.file_name,
        endian: g.endian,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
        models_array: [],
        // other arrays heres 
    }

    g.file_dir_type = return_directory_type(u32(o + 4))

    x.push({
        id: gen_id(),
        sec_id: "]7Zf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        section_datapack: [],
    });

    u32(o + 16) && im_pmwr_gc_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack);

    return x[i].id
    // 24 bytes;

}

function add_pmwr_gc_file_header() {
    return {
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_pmwr_gc_directory() {
    return {
        id: gen_id(),
        sec_id: "]7Zf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}

function info_pmwr_gc_file_header() {
    return {
        sec_id: "gjbf",
        multi: 0,
        u32_0: {
            n: "magic 1"
        },
        u32_4: {
            n: "magic 2"
        },
        u32_8: {
            n: "version"
        },
        section_12: ["]7Zf"],
    };

}

function info_pmwr_gc_directory() {
    return {
        sec_id: "]7Zf",
        multi: 1,
        u32_0: {
            n: "version"
        },
        u32_4: {
            n: "file type"
        },
        u32_8: {
            n: "index"
        },
        u32_12: 0,
        u32_16: {
            n: "length"
        },
        section_datapack: ['E@3Z'],
    };

}

function ex_pmwr_gc_x(o, x) {

    g = {
        divisibility: 16,
        divisible_prev_value: [],
        type_string: g.type_string,
        debug: pk_debug,
        endian: g.endian,
        file_dir_type: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        tex_anims: 0,
        /*
        need to get arrays here
        */
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    ex_pmwr_gc_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_pmwr_gc_file_header(o, x) {
    let e = o + 16
    su32(0, x.u32_0)
    su32(4, x.u32_4)
    su32(8, x.u32_8)
    su32(12, x[0].directory.length)

    let global = ((x[0].directory.length) * 24) + 16
    e = e + (x[0].directory.length * 24)

    let time_array = []
    for (let i = 0; i < x[0].directory.length; i++) {
        let a = Date.now()

        e = ex_pmwr_gc_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_directory(o, e, x, global) {
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    // add other arrays heres later

    let ce = e
    g.file_dir_type = return_directory_type(x.u32_4)

    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 20, e - global)

    e = ex_pmwr_gc_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)

    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + index_patch_buffer.byteLength + ordered_buffer.byteLength + offset_patch_buffer.byteLength)

    g.debug && ex_debug(o, x.sec_id);
    return e
}