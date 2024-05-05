"use strict";
function load_x_d_model(id, outerid, sub_group_index) {
    let html = `${load_world_canvas_string(TXFA.v_array.byteLength)}`
    file_editor.innerHTML = html

    file_editor_side_panel.innerHTML = `
                  <a>Texture Animation 1</a><br>
                     ${generate_linkbox_special(`${id}.animation`, TXFA.animation)}<br>
                  <a>Texture Animation 2</a><br>
                     ${generate_linkbox_special(`${id}.unknown_24_animation`, TXFA.unknown_24_animation)}<br>
                  <a>Texture</a><br>
                     ${generate_linkbox_special(`${id}.texture`, TXFA.texture)}<br>
                  <a>unknown_00</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_00}" data-outer_xfa="${id}"  data-inner_xfa="unknown_00" data-type="u32"><br>
                  <a>unknown_08</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_08}" data-outer_xfa="${id}"  data-inner_xfa="unknown_08" data-type="u32"><br>
                  <a>unknown_12</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_12}" data-outer_xfa="${id}"  data-inner_xfa="unknown_12" data-type="u8"><br>
                  <a>unknown_13</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_13}" data-outer_xfa="${id}"  data-inner_xfa="unknown_13" data-type="u8"><br>
                  <a>unknown_15</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_15}" data-outer_xfa="${id}"  data-inner_xfa="unknown_15" data-type="u8"><br>
                  <a>unknown_16</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_16}" data-outer_xfa="${id}"  data-inner_xfa="unknown_16" data-type="u8"><br>
                  <a>unknown_15</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_15}" data-outer_xfa="${id}"  data-inner_xfa="unknown_15" data-type="u8"><br>
                  <a>unknown_28</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_28}" data-outer_xfa="${id}"  data-inner_xfa="unknown_28" data-type="u32"><br>
                  <a>unknown_44</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_44}" data-outer_xfa="${id}"  data-inner_xfa="unknown_44" data-type="u8"><br>
                  <a>unknown_45</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_45}" data-outer_xfa="${id}"  data-inner_xfa="unknown_45" data-type="u8"><br>
                  <a>unknown_46</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_46}" data-outer_xfa="${id}"  data-inner_xfa="unknown_46" data-type="u8"><br>
                  <a>unknown_47</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_47}" data-outer_xfa="${id}"  data-inner_xfa="unknown_47" data-type="u8"><br>
                  <a>unknown_49</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_49}" data-outer_xfa="${id}"  data-inner_xfa="unknown_49" data-type="u8"><br>
                  <a>unknown_52</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_52}" data-outer_xfa="${id}"  data-inner_xfa="unknown_52" data-type="u8"><br>
                  <a>unknown_53</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_53}" data-outer_xfa="${id}"  data-inner_xfa="unknown_53" data-type="u8"><br>
                  <a>unknown_54</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_54}" data-outer_xfa="${id}"  data-inner_xfa="unknown_54" data-type="u8"><br>
                  <a>unknown_55</a><br>
                     <input style="width:100%" type='text' value="${TXFA.unknown_55}" data-outer_xfa="${id}"  data-inner_xfa="unknown_55" data-type="u8"><br>
`
    let modelarray = [{
        v_array: TXFA.v_array,
        u_array: TXFA.u_array,
        n_array: TXFA.n_array,
        c_array: TXFA.c_array,
    }]
    gen_model_box(modelarray)

}
