function get_sound(offset,XFA,sound_index,sound_offset) {
    offset = u32(offset,is_little_endian) + sound_offset
    
    
        
        XFA.push({
            id: gen_id(),
            unknown1: u32(offset + 8, is_little_endian),
            soundsamplerate: u32(offset + 12, is_little_endian),
            unknown2: u32(offset + 16, is_little_endian),
            unknown3: u32(offset + 20, is_little_endian),
            sound_data: []
        })
        let start_offset = u32(offset + 0, is_little_endian) + sound_offset
        let sound_buffer = buffer.slice(start_offset,start_offset + u32(offset + 4, is_little_endian))
    
        XFA[sound_index].sound_data.push(sound_buffer)


}
