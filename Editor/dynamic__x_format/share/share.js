function load_x_d_share(id) {
    console.log(id)
        TXFA = Object.byString(XFA, id);

    let html = `<div style='overflow:hidden;height:100%'; >
   <div style='height:5%'>
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%" class='no_border'>Share</td>
                  <td class='no_border'>  <input style='width:100%;' data-type="string" data-outer_xfa="${id}" data-inner_xfa="name"  id='share_name' type='text' value='${TXFA.name}'>  </td>
               </tr>
            </tbody>
         </table>   
      </div>
   </div>`
   
   // for (let i = 0; i < TXFA.model_array.length; i++) {
   //    html+=`${TXFA.model_array[i][0]}<br>`
   // }
   // for (let i = 0; i < TXFA.sound_array.length; i++) {
   //    html+=`${TXFA.sound_array[i][0]}<br>`
   // }
   // for (let i = 0; i < TXFA.texture_array.length; i++) {
   //    html+=`${TXFA.texture_array[i][0]}<br>`
   // }

    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''

    document.getElementById("share_name").addEventListener("change",dyn_update_input)
    
}