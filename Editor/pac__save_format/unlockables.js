function load_unlockables() {

    // unlockables_offset = buffer.byteLength - 224
    file_editor.innerHTML = `                    

    <div>
        <h4>Arenas</h4>
        
        <table>
            <tbody>
                <tr>
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 0}'>
                        <label for='check${save_offset.unlockables + 0}'> Molten Mountain Arena</label>
                    </td>
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 4}'> 
                        <label for='check${save_offset.unlockables + 4}'> Ghost Mansion Arena </label>
                    </td>
                </tr>
                
                <tr>
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 8}'>
                        <label for='check${save_offset.unlockables + 8}'> Canyon Crusade Arena</label>
                    </td>
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 20}'>
                        <label for='check${save_offset.unlockables + 20}'> Galactic Outpost Arena</label>
                    </td>
                </tr>
                <tr>
                    <td class='no_border'>
                            <input type='checkbox' id='check${save_offset.unlockables + 12}'>
                            <label for='check${save_offset.unlockables + 12}'> Arctic Iceberg Arena (psp)</label>
                        </td>
                    <td class='no_border'>
                            <input type='checkbox' id='check${save_offset.unlockables + 16}'>
                            <label for='check${save_offset.unlockables + 16}'> Spooky's Castle Arena (psp)</label>
                        </td>
                </tr>        
            </tbody>
        </table>
    </div>
    
    <hr>    
    
    <div>
        <h4>Characters</h4>
        <table>
            <tbody>
                <tr>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 28}'>
                        <label for='check${save_offset.unlockables + 28}'> Pac-Man</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 32}'> 
                        <label for='check${save_offset.unlockables + 32}'> Blinky</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 36}'> 
                        <label for='check${save_offset.unlockables + 36}'> Pooka</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 40}'> 
                        <label for='check${save_offset.unlockables + 40}'> Toc-Man</label>
                </tr>
                <tr>            
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 44}'> 
                        <label for='check${save_offset.unlockables + 44}'> Inky</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 48}'> 
                        <label for='check${save_offset.unlockables + 48}'> Clyde</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 52}'> 
                        <label for='check${save_offset.unlockables + 52}'> Ms. Pac-Man</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 56}'> 
                        <label for='check${save_offset.unlockables + 56}'> Pinky</label>
                </tr>
                <tr>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 60}'> 
                        <label for='check${save_offset.unlockables + 60}'> Jr. Pac-Man</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 64}'> 
                        <label for='check${save_offset.unlockables + 64}'> Spooky</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 68}'> 
                        <label for='check${save_offset.unlockables + 68}'> Pac-Devil</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 72}'> 
                        <label for='check${save_offset.unlockables + 72}'> Erwin</label>
                </tr>
                <tr>
                
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 76}'> 
                        <label for='check${save_offset.unlockables + 76}'> Fygar</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 84}'> 
                        <label for='check${save_offset.unlockables + 84}'> The Prince</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 80}'>
                        <label for='check${save_offset.unlockables + 80}'> Mr. Driller (psp)</label>
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 88}'>
                        <label for='check${save_offset.unlockables + 88}'> Mappy (psp)</label>
                </tr>
            </tbody>
        </table>
    </div>
        
    <div>
        <hr><h4>Difficulty</h4>
        <input type='checkbox' id='check${save_offset.unlockables + 168}'>
        <label for='check${save_offset.unlockables + 168}'> Nightmare</label>
    </div>
        
    <div>
        <hr><h4>Items</h4>
        <table>
            <tbody>
                <tr>        
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 200}'>
                        <label for='check${save_offset.unlockables + 200}'> Sir Pac-A-Lot</label>
                    <td class='no_border'>
                        <input type='checkbox' id='check${save_offset.unlockables + 212}'> 
                        <label for='check${save_offset.unlockables + 212}'> Siria The Ice Dragon</label>
                </tr>
                <tr>
                    <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 216}'>
                        <label for='check${save_offset.unlockables + 216}'> Black Bomb</label>
                           <td class='no_border'> 
                        <input type='checkbox' id='check${save_offset.unlockables + 220}'>
                        <label for='check${save_offset.unlockables + 220}'> Galaga Ship</label>
                </tr>
            </tbody>
        </table>

    </div>
    <div data-debug='true'>
    <hr><h4>Unknown</h4>

         <table>
            <tbody>
                <tr>      
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 24}'>
                    <label for='check${save_offset.unlockables + 24}'> 24</label>     
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 92}'>
                    <label for='check${save_offset.unlockables + 92}'> 92</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 96}'>
                    <label for='check${save_offset.unlockables + 96}'> 96</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 100}'>
                    <label for='check${save_offset.unlockables + 100}'> 100</label>
                </tr>        
                <tr>     
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 104}'>
                    <label for='check${save_offset.unlockables + 104}'> 104</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 108}'>
                    <label for='check${save_offset.unlockables + 108}'> 108</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 112}'>
                    <label for='check${save_offset.unlockables + 112}'> 112</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 116}'>
                    <label for='check${save_offset.unlockables + 116}'> 116</label>
                </tr>        
                <tr>        
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 120}'>
                    <label for='check${save_offset.unlockables + 120}'> 120</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 124}'>
                    <label for='check${save_offset.unlockables + 124}'> 124</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 128}'>
                    <label for='check${save_offset.unlockables + 128}'> 128</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 132}'>
                    <label for='check${save_offset.unlockables + 132}'> 132</label>
                </tr>        
                <tr>      
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 136}'>
                    <label for='check${save_offset.unlockables + 136}'> 136</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 140}'>
                    <label for='check${save_offset.unlockables + 140}'> 140</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 144}'>
                    <label for='check${save_offset.unlockables + 144}'> 144</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 148}'>
                    <label for='check${save_offset.unlockables + 148}'> 148</label>
                </tr>        
                <tr>        
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 152}'>
                    <label for='check${save_offset.unlockables + 152}'> 152</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 156}'>
                    <label for='check${save_offset.unlockables + 156}'> 156</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 160}'>
                    <label for='check${save_offset.unlockables + 160}'> 160</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 164}'>
                    <label for='check${save_offset.unlockables + 164}'> 164</label>
                </tr>        
                <tr>     
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 172}'>
                    <label for='check${save_offset.unlockables + 172}'> 172</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 176}'>
                    <label for='check${save_offset.unlockables + 176}'> 176</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 180}'>
                    <label for='check${save_offset.unlockables + 180}'> 180</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 184}'>
                    <label for='check${save_offset.unlockables + 184}'> 184</label>
                </tr>        
                <tr>        
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 188}'>
                    <label for='check${save_offset.unlockables + 188}'> 188</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 192}'>
                    <label for='check${save_offset.unlockables + 192}'> 192</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 196}'>
                    <label for='check${save_offset.unlockables + 196}'> 196</label>
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 204}'>
                    <label for='check${save_offset.unlockables + 204}'> 204</label>
                </tr>        
                <tr>        
                    <td class='no_border'> 
                    <input type='checkbox' id='check${save_offset.unlockables + 208}'>
                    <label for='check${save_offset.unlockables + 208}'> 208</label>
                <tr>        
            </tbody>
         </table>
    </div>
`

    for (unlockables_i = 0; unlockables_i < 56; unlockables_i++) {
        get_save_file_check(save_offset.unlockables + (unlockables_i * 4))
    }
}

function get_save_file_check(offset, byte_type) {
    offset_value = new DataView(buffer).getUint32(offset, g.endian)
    let offset_string = "check" + offset
    if (offset_value === 0) {
        //unlocked
        document.getElementById(offset_string).checked = true
    } else {
        //locked
        document.getElementById(offset_string).checked = false
    }

    document.getElementById(offset_string).addEventListener("click", checkbox_clicked)

}

function checkbox_clicked() {
    let n = this.id.slice(5)

    let checked = this.checked ? 0 : 1

    new DataView(buffer).setUint32(n, checked, g.endian)

}
