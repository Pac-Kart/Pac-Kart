function get_sound(offset, XFA, sound_index, sound_offset) {
    offset = u32(offset, is_little_endian) + sound_offset

    XFA.push({
        id: gen_id(),
        unknown1: u32(offset + 8, is_little_endian),
        soundsamplerate: u32(offset + 12, is_little_endian),
        unknown2: u32(offset + 16, is_little_endian),
        unknown3: u32(offset + 20, is_little_endian),
        sound_data: []
    })
    let start_offset = u32(offset + 0, is_little_endian) + sound_offset
    let sound_buffer = buffer.slice(start_offset, start_offset + u32(offset + 4, is_little_endian))

    XFA[sound_index].sound_data.push(sound_buffer)

}

function im_audio(o, x, a) {

    let after_offset_list = o + divisible(a * 4, 32)
    let padding_test = after_offset_list + (a * 32) 
    
        x.push({
        sound: []
    })

    for (let i = 0; i < a; i++) {
        padding_test = im_audio_00(after_offset_list + u32(o + (i * 4)), x[0].sound, i)
    }

    return padding_test

    function im_audio_00(o, x, i) {
        x.push({
            id: gen_id(),
            unknown1: u32(o + 8),
            soundsamplerate: u32(o + 12),
            unknown2: u32(o + 16),
            unknown3: u32(o + 20),
            sound_data: [],
            padding: (u32(o + 0) + after_offset_list) - padding_test
        })
        let start_offset = u32(o + 0) + after_offset_list
        let sound_buffer = buffer.slice(start_offset, start_offset + u32(o + 4))

        x[i].sound_data.push(sound_buffer)

        return start_offset + u32(o + 4)

    }

}
