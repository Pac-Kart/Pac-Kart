function load_x_d_textures_animation(id, outer_id, sub_group_index) {
    TXFA = Object.byString(XFA, id);

    let html = `<div style="overflow:hidden;height:100%"><div style="display:inline-block;width:95%;padding:5px;height:20%">
   <div style="height:80%;text-align:center;margin-top:3%;">
   `

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="splice_texture_animation">X</a>'

    document.getElementById("splice_texture_animation").addEventListener('click', splice_entry);

    function splice_entry() {
        x_d_splice_list(dynamic__texture_animations, outer_id, sub_group_index)

    }
}
