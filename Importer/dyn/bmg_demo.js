"use strict";


function get_bmg_demo_sec_id(string) {
    switch(string){
    }
}

async function im_bmg_demo_x() {
    // later
}


function get_default(s) {
    let split = s.split('_')
    let value = split[0]
    let number = Number(split[1])
    return {
        n:s,
        v:0,
        o:number,
        f:value,
    }
}


function append_bmg_demo_world_settings() {
    // // need to append this to section
    // return {
    // id: gen_id(),
    // sec_id: "Pwja",
    // section_00: ["type"],
    // section_04: [],
    // f32_08: 0,
    // f32_12: 0,
    // u8_33: 0,
    // u32_52: 0,
    // section_56: [],
    // section_60: [],
    // texture_68: [0, 0, 0, 't'],
    // texture_72: [0, 0, 0, 't'],
    // texture_76: [0, 0, 0, 't'],
    // f32_80: 0,
    // f32_84: 0,
    // section_88: [],
    // f32_92: 0,
    // f32_96: 0,
    // section_100: [],
    // u32_104: 0,//amount?
    // section_108: [],
    // f32_120: 0,
    // f32_124: 0,
    // f32_128: 0,
    // f32_132: 0,
    // u8_137: 0,
    // f32_140: 0,
    // texture_144: [0, 0, 0, 't'],
    // f32_148: 0,
    // f32_152: 0,
    // f32_156: 0,
    // f32_160: 0,
    // f32_164: 0,
    // f32_168: 0,
    // unordered_bmg_demo_font_176: 0,
    // }
}

function info_bmg_demo_world_settings() {
    // used when edit?
    return {
    id: gen_id(),
    sec_id: "Pwja",
    section_00: ["type"],
    section_04: [sec_id],
    f32_08: get_default("f32_08"),
    f32_12: get_default("f32_12"),
    u8_33: 0,
    u32_52: 0,
    section_56: [],
    section_60: [],
    texture_68: [0, 0, 0, 't'],
    texture_72: [0, 0, 0, 't'],
    texture_76: [0, 0, 0, 't'],
    f32_80: 0,
    f32_84: 0,
    section_88: [],
    f32_92: 0,
    f32_96: 0,
    section_100: [],
    u32_104: 0,//amount?
    section_108: [],
    f32_120: 0,
    f32_124: 0,
    f32_128: 0,
    f32_132: 0,
    u8_137: 0,
    f32_140: 0,
    texture_144: [0, 0, 0, 't'],
    f32_148: 0,
    f32_152: 0,
    f32_156: 0,
    f32_160: 0,
    f32_164: 0,
    f32_168: 0,
    unordered_bmg_demo_font_176: 0,
    }
}