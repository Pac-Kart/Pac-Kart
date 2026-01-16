"use strict";

/* start sec id list */
function get_hwvx_proto_sec_id(string) {
    switch (string) {
    case 'gjbf':
        return "hwvx_proto_file_header"
        break
    case ']7Zf':
        return "hwvx_proto_directory"
        break
    case 'E@3Z':
        return "hwvx_proto_datapack"
        break
    case 'PcI:':
        return "hwvx_proto_geo_datapack"
        break
    case 'Fgpx':
        return "hwvx_proto_sound_offset_list"
        break
    case '4IJg':
        return "hwvx_proto_audio_list"
        break
    default:
        return null
    }
}

/* end sec id list */
/////////////////////
/* start import list */
async function im_hwvx_proto_x(index) {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_hwvx_proto_file_header(0, 0, x[index].format)
}

function im_hwvx_proto_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        directory: [],
    });

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_hwvx_proto_directory(16 + (i * 24), i, x[i].directory)
        time_array.push(Date.now() - a)
    }
    console.pk_log(`saved in ${time_array}`)

    return x[i].id
    // 16 bytes;

}

function im_hwvx_proto_directory(o, i, x) {
    let next_offset = o + 24

       g = {
            divisible_prev_value: [],
            debug: pk_debug,
            type_string:g.type_string,
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

    switch (u32(o + 4)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        u32(o + 16) ? im_hwvx_proto_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack) : 0;
        break;
    case 7:
        u32(o + 16) ? im_hwvx_proto_geo_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack) : 0;
        break;
    }
    return x[i].id
    // 24 bytes;

}

function im_hwvx_proto_datapack(o, i, x) {
    let end_datapack = o + 120

    if (u32(o + 8) || u32(o + 4)) {
        end_datapack += (u32(o + 8) * 4 + u32(o + 4))
    }

    if (u32(o + 8)) {
        let calc_audio = o + 120
        let afteroffsetlist = calc_audio + (u32(o + 8) * 4)
        for (let i = 0; i < u32(o + 8); i++) {
            im_hwvx_proto_sound_offset_list(u32(calc_audio + (i * 4)) + afteroffsetlist, (i + 1) == u32(o + 8), afteroffsetlist, end_datapack, o)
        }
    }

    let patchlistoffset = end_datapack
    g.m = patchlistoffset + (u32(o + 12) * 4) + ((u32(o + 16) + u32(o + 28) + u32(o + 52) + u32(o + 56)) * 8);

    x.push({
        id: gen_id(),
        sec_id: "E@3Z",
        section_0: [],
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        u32_12: u32(o + 12),
        //amount?
        u32_16: u32(o + 16),
        //amount?
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        u32_32: u32(o + 32),
        //amount?
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        u32_52: u32(o + 52),
        //amount?
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
        section_72: [],
        section_76: [],
        section_80: [im_string(o + 80, o + 91)],
        u32_92: u32(o + 92),
        section_100: [im_string(o + 100, o + 111)],
        u32_112: u32(o + 112),
        ordered: [],
        patch_list: [],
    });

    // let end_datapack = o + 120

    // if (u32(o + 8) || u32(o + 4)) {
    //     end_datapack += (u32(o + 8) * 4 + u32(o + 4))
    // }

    // if (u32(o + 8)) {
    //     let calc_audio = o + 120
    //     let afteroffsetlist = calc_audio + (u32(o + 8) * 4)
    //     for (let i = 0; i < u32(o + 8); i++) {
    //         im_hwvx_proto_sound_offset_list(u32(calc_audio + (i * 4)) + afteroffsetlist, (i+1) == u32(o + 8),afteroffsetlist,end_datapack,o)
    //     }
    // }

    // let patchlistoffset = end_datapack
    // g.m = patchlistoffset + (u32(o + 12) * 4) + ((u32(o + 16) + u32(o + 28) + u32(o + 52) + u32(o + 56)) * 8);

    x[i].patch_list = convert_arraybuffer_base64(buffer.slice(patchlistoffset, g.m))
    x[i].ordered = convert_arraybuffer_base64(buffer.slice(g.m, g.m + u32(o + 0)))

    // u32(o + 0) ? im_ordered_list(u32(o + 0) + g.m, x[i].section_0) : 0;
    // offset? 
    // u32(o + 4) ? im_audio_section(u32(o + 4) + g.m, x[i].section_4) : 0;
    // offset? 
    // u32(o + 24) ? im_hwvx_proto_texture(u32(o + 24) + g.m, x[i].section_24) : 0;
    // offset? 
    // u32(o + 44) ? im_color_table(u32(o + 44) + g.m, x[i].section_44) : 0;
    // offset? 
    // u32(o + 60) ? im_hwvx_proto_texture_anims(u32(o + 60) + g.m, x[i].section_60) : 0;
    // offset? 
    // u32(o + 68) ? im_hwvx_proto_datapack_68(u32(o + 68) + g.m, x[i].section_68) : 0;
    // offset? 
    // u32(o + 72) ? im_impulse_tracker(u32(o + 72) + g.m, x[i].section_72) : 0;
    // offset? 
    // u32(o + 76) ? im_hwvx_proto_audio_data_2(u32(o + 76) + g.m, x[i].section_76) : 0;
    // offset?
    return x[i].id
    // 120 bytes;

}

function im_hwvx_proto_geo_datapack(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "PcI:",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        u32_8: u32(o + 8),
        //amount?
        u32_28: u32(o + 28),
        //amount?
        u32_36: u32(o + 36),
        //amount?
        u32_40: u32(o + 40),
        //amount?
        section_44: [im_string(u32(o + 55), 0, false)],
        section_56: [im_string(u32(o + 56), 0, false)],
    });

    return x[i].id
    // 84 bytes;

}

function im_hwvx_proto_sound_offset_list(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Fgpx",
        section_0: [],
    });

    u32(o + 0) ? im_hwvx_proto_audio_list(u32(o + 0) + g.m, x[i].section_0) : 0;
    // offset?
    return x[i].id
    // 4 bytes;

}
function im_hwvx_proto_audio_list(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "4IJg",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
    });

}

/* end import list */
/////////////////////
/* start add list */
function add_hwvx_proto_file_header() {
    return {
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_hwvx_proto_directory() {
    return {
        id: gen_id(),
        sec_id: "]7Zf",
        multi:1,
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}
function add_hwvx_proto_datapack() {
    return {
        id: gen_id(),
        sec_id: "E@3Z",
        section_0: [],
        section_4: [],
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        u32_32: 0,
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        u32_52: 0,
        u32_56: 0,
        section_60: [],
        u32_64: 0,
        section_68: [],
        section_72: [],
        section_76: [],
        section_80: ["Pac-Kart"],
        u32_92: 0,
        section_100: ["Pac-Kart"],
        u32_112: 0,
    };

}

function add_hwvx_proto_geo_datapack() {
    return {
        id: gen_id(),
        sec_id: "PcI:",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_28: 0,
        u32_36: 0,
        u32_40: 0,
        section_44: ["Pac-Kart"],
        section_56: ["Pac-Kart"],
    };

}

function add_hwvx_proto_sound_offset_list() {
    return {
        id: gen_id(),
        sec_id: "Fgpx",
        section_0: [],
    };

}
function add_hwvx_proto_audio_list() {
    return {
        id: gen_id(),
        sec_id: "4IJg",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u16_16: 0,
        u16_18: 0,
    };

}

/* end add list */
/////////////////////
/* start info list */
function info_hwvx_proto_file_header() {
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
function info_hwvx_proto_directory() {
    return {
        sec_id: "]7Zf",
        u32_0: {n:"version"},
        u32_4: {n:"file type"},
        u32_8:  {n:"index"},
        u32_12: 0,
        u32_16: {n:"length"},
        section_datapack: {s: null},
    };

}

function info_hwvx_proto_datapack() {
    return {
        sec_id: "E@3Z",
        section_0: ["change this"],
        section_4: ["change this"],
        u32_8: {
            a: null
        },
        u32_12: {
            a: null
        },
        u32_16: {
            a: null
        },
        u32_20: {
            a: null
        },
        section_24: ["change this"],
        u32_28: {
            a: null
        },
        u32_32: {
            a: null
        },
        u32_40: {
            a: null
        },
        section_44: ["change this"],
        u32_48: {
            a: null
        },
        u32_52: {
            a: null
        },
        u32_56: {
            a: null
        },
        section_60: ["change this"],
        u32_64: {
            a: null
        },
        section_68: ["change this"],
        section_72: ["change this"],
        section_76: ["change this"],
        section_80: ["Pac-Kart"],
        u32_92: 0,
        section_100: ["Pac-Kart"],
        u32_112: 0,
    };

}

function info_hwvx_proto_geo_datapack() {
    return {
        sec_id: "PcI:",
        u32_0: 0,
        u32_4: {
            a: null
        },
        u32_8: {
            a: null
        },
        u32_28: {
            a: null
        },
        u32_36: {
            a: null
        },
        u32_40: {
            a: null
        },
        section_44: ["Pac-Kart"],
        section_56: ["Pac-Kart"],
    };

}

function info_hwvx_proto_sound_offset_list() {
    return {
        sec_id: "Fgpx",
        section_0: ["4IJg"],
    };

}
function info_hwvx_proto_audio_list() {
    return {
        sec_id: "4IJg",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u16_16: 0,
        u16_18: 0,
    };

}

/* end info list */
/////////////////////
/* start export list */
function ex_hwvx_proto_x(o, x) {

    g = {
        divisibility: 16,
        divisible_prev_value: [],
        type_string:g.type_string,
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

    ex_hwvx_proto_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_hwvx_proto_file_header(o, x) {
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

        e = ex_hwvx_proto_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_hwvx_proto_directory(o, e, x, global) {
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

    switch (x.u32_4) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        e = ex_hwvx_proto_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    case 7:
        e = ex_hwvx_proto_geo_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    }

    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + patch_buffer.byteLength + ordered_buffer.byteLength)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_hwvx_proto_datapack(o, x) {
    let e = o + 120
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +52, x.u32_52)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +64, x.u32_64)
    su32(o + 92, x.u32_92)
    su32(o + 112, x.u32_112)

    e = ex_s_offset(o + 0, e, ex_ordered_list, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_audio_section, x.section_4, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_proto_texture, x.section_24, 'down');
    e = ex_s_offset(o + 44, e, ex_color_table, x.section_44, 'down');
    e = ex_s_offset(o + 60, e, ex_hwvx_proto_texture_anims, x.section_60, 'down');
    e = ex_s_offset(o + 68, e, ex_hwvx_proto_datapack_68, x.section_68, 'down');
    e = ex_s_offset(o + 72, e, ex_impulse_tracker, x.section_72, 'down');
    e = ex_s_offset(o + 76, e, ex_hwvx_proto_audio_data_2, x.section_76, 'down');
    e = ex_string(o + 80, e, x.section_80)
    e = ex_string(o + 100, e, x.section_100)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_hwvx_proto_geo_datapack(o, x) {
    let e = o + 84
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +28, x.u32_28)
    //amount?   su32(o +36, x.u32_36)
    //amount?   su32(o +40, x.u32_40)

    // e = ex_string(o + 55, e, x.section_44)
    // e = ex_string(o + 56, e, x.section_56)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_hwvx_proto_sound_offset_list(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_audio_list, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_hwvx_proto_audio_list(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

/* end export list */
