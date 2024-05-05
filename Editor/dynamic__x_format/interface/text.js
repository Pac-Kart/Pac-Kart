"use strict";
function load_x_d_text(id) {
    TXFA = Object.byString(x, id[0]);

    let html = `<div style='overflow:hidden;padding:1%;height:95%;'>
   <textarea style='height:100%;width:100%;resize:none;' maxlength="515" data-type="string" data-outer_xfa="${id[0]}.section_00" data-inner_xfa="0" id='text'>${TXFA.section_00[0]}</textarea>
   </div>
   `

    file_editor.innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    function if_blank() {
        if (this.value === "") {
            this.value = " "
        }

        console.log('fire')
    }

    document.getElementById("text").addEventListener("change", if_blank)
    document.getElementById("text").addEventListener("change", dyn_update_input)
}
