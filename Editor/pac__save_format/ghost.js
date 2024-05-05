function load_ghost() {
    let html = `
<div style="display:inline-block;width:95%;padding:5px;">Ghost Character
    <select class='save_records_row_in' title="character" id="char">
                    ${character_input_options}
                </select>
</div>
`
    file_editor.innerHTML = html    
    document.getElementById("char").value = (u32(12,true))

        // document.getElementById("char").selectedIndex = (u32(12))
        document.getElementById("char").dataset.offset = (12)
    
    document.getElementById("char").addEventListener("change", save_value_changed);

}