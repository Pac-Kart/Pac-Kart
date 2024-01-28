function load_x_d_text(id) {
    TXFA = Object.byString(x, id[0]);

    console.log(id,TXFA)

   //  let html = `<div style='overflow:hidden;height:100%'; >
   // <div style='height:5%'>
   //    <div class='save_records_boarder'>
   //       <table style='width:100%;' >
   //          <tbody>
   //             <tr>
   //                <td style="width:10%" class='no_border'>Text</td>
   //                <td class='no_border'>  <input style='width:100%;' data-type="string" data-outer_xfa="${id}.section_00[0]" data-inner_xfa="string"  id='text' type='text' value='${TXFA.section_00[0].string}'>  </td>
   //             </tr>
   //          </tbody>
   //       </table>   
   //    </div>
   // </div>`

   let html =`<div style='overflow:hidden;padding:1%;height:95%;'>
   <textarea style='height:100%;width:100%;resize:none;' maxlength="515" data-type="string" data-outer_xfa="${id[0]}.section_00" data-inner_xfa="0" id='text'>${TXFA.section_00[0]}</textarea>
   </div>
   `


    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = ''
        
    // function splice_entry() {
    //     x_d_splice_list(dynamic__texture_animations, outer_id, sub_group_index)

    // }

   function if_blank() {
      if (this.value === "") {
         this.value = " "
      }
      
      console.log('fire')
   }
    
    document.getElementById("text").addEventListener("change",if_blank)
    document.getElementById("text").addEventListener("change",dyn_update_input)
}