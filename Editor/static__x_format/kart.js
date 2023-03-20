function load_kart(offset, mid) {
    let temp_obj = {}
    let html = ''

    html += get_car(offset, mid)

    function get_car(offset, mid) {
        let html = ''

        html += get_car_1(u32(offset, is_little_endian) + mid, mid)

        return html

    }

    function get_car_1(offset, mid) {
        let html = ''

        html += get_car_1_3(u32(offset + 184, is_little_endian) + mid, mid)
        html += get_car_1_5(u32(offset + 192, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_3(offset, mid) {
        let html = ''

        html += get_car_1_3_1(u32(offset + 4, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_3_1(offset, mid) {
        let html = ''

        temp_obj.car_1_3_1__backingup = `<input style='width:100%;' data-type='float' data-offset='${offset + 12}'  type='text' value='${f32(offset + 12, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_1 = `<input style='width:100%;' data-type='float' data-offset='${offset + 16}'  type='text' value='${f32(offset + 16, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_2 = `<input style='width:100%;' data-type='float' data-offset='${offset + 20}'  type='text' value='${f32(offset + 20, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_3 = `<input style='width:100%;' data-type='float' data-offset='${offset + 24}'  type='text' value='${f32(offset + 24, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__jump_height = `<input style='width:100%;' data-type='float' data-offset='${offset + 28}'  type='text' value='${f32(offset + 28, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_4 = `<input style='width:100%;' data-type='float' data-offset='${offset + 32}'  type='text' value='${f32(offset + 32, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_5 = `<input style='width:100%;' data-type='float' data-offset='${offset + 36}'  type='text' value='${f32(offset + 36, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_6 = `<input style='width:100%;' data-type='float' data-offset='${offset + 40}'  type='text' value='${f32(offset + 40, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_7 = `<input style='width:100%;' data-type='float' data-offset='${offset + 44}'  type='text' value='${f32(offset + 44, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1__unkown_8 = `<input style='width:100%;' data-type='float' data-offset='${offset + 48}'  type='text' value='${f32(offset + 48, is_little_endian).toFixed(2)}'>`

        html += get_car_1_3_1_1(u32(offset + 0, is_little_endian) + mid, mid)
        html += get_car_1_3_1_2(u32(offset + 4, is_little_endian) + mid, mid)
        html += get_car_1_3_1_3(u32(offset + 8, is_little_endian) + mid, mid)

        return html

    }

    function get_car_1_3_1_1(offset, mid) {
        let html = ''

        html += get_car_1_3_1_1_1(u32(offset + 16, is_little_endian) + mid, mid)
        html += get_car_1_3_1_1_2(u32(offset + 44, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_3_1_3(offset, mid) {
        let html = ''

        temp_obj.car_1_3_1_3__unkown_0 = `<input style='width:100%;' data-type='float' data-offset='${offset + 0}'  type='text' value='${f32(offset + 0, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_1 = `<input style='width:100%;' data-type='float' data-offset='${offset + 4}'  type='text' value='${f32(offset + 4, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_2 = `<input style='width:100%;' data-type='float' data-offset='${offset + 8}'  type='text' value='${f32(offset + 8, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_3 = `<input style='width:100%;' data-type='float' data-offset='${offset + 12}'  type='text' value='${f32(offset + 12, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_4 = `<input style='width:100%;' data-type='float' data-offset='${offset + 16}'  type='text' value='${f32(offset + 16, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_5 = `<input style='width:100%;' data-type='float' data-offset='${offset + 20}'  type='text' value='${f32(offset + 20, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_6 = `<input style='width:100%;' data-type='float' data-offset='${offset + 24}'  type='text' value='${f32(offset + 24, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_7 = `<input style='width:100%;' data-type='float' data-offset='${offset + 28}'  type='text' value='${f32(offset + 28, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_8 = `<input style='width:100%;' data-type='float' data-offset='${offset + 32}'  type='text' value='${f32(offset + 32, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_8 = `<input style='width:100%;' data-type='float' data-offset='${offset + 36}'  type='text' value='${f32(offset + 36, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_9 = `<input style='width:100%;' data-type='float' data-offset='${offset + 40}'  type='text' value='${f32(offset + 40, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_10 = `<input style='width:100%;' data-type='float' data-offset='${offset + 44}'  type='text' value='${f32(offset + 44, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_10 = `<input style='width:100%;' data-type='float' data-offset='${offset + 48}'  type='text' value='${f32(offset + 48, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_11 = `<input style='width:100%;' data-type='float' data-offset='${offset + 52}'  type='text' value='${f32(offset + 52, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_12 = `<input style='width:100%;' data-type='float' data-offset='${offset + 56}'  type='text' value='${f32(offset + 56, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_13 = `<input style='width:100%;' data-type='float' data-offset='${offset + 60}'  type='text' value='${f32(offset + 60, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_14 = `<input style='width:100%;' data-type='float' data-offset='${offset + 64}'  type='text' value='${f32(offset + 64, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_15 = `<input style='width:100%;' data-type='float' data-offset='${offset + 68}'  type='text' value='${f32(offset + 68, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_16 = `<input style='width:100%;' data-type='float' data-offset='${offset + 72}'  type='text' value='${f32(offset + 72, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_17 = `<input style='width:100%;' data-type='float' data-offset='${offset + 76}'  type='text' value='${f32(offset + 76, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_18 = `<input style='width:100%;' data-type='float' data-offset='${offset + 80}'  type='text' value='${f32(offset + 80, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_3__unkown_19 = `<input style='width:100%;' data-type='float' data-offset='${offset + 84}'  type='text' value='${f32(offset + 84, is_little_endian).toFixed(2)}'>`

        return html

    }
    function get_car_1_3_1_2(offset, mid) {
        let html = ''

        temp_obj.car_1_3_1_2__initial_drift_handaling = `<input style='width:100%;' data-type='float' data-offset='${offset + 0}'  type='text' value='${f32(offset + 0, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_2__unknown_1 = `<input style='width:100%;' data-type='float' data-offset='${offset + 4}'  type='text' value='${f32(offset + 4, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_3_1_2__drift_handaling = `<input style='width:100%;' data-type='float' data-offset='${offset + 8}'  type='text' value='${f32(offset + 8, is_little_endian).toFixed(2)}'>`

        return html

    }
    function get_car_1_3_1_1_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_3_1_1_2(offset, mid) {
        let html = ''

        temp_obj.car_1_3_1_1_2__hop_distance = `<input style='width:100%;' data-type='float' data-offset='${offset + 8}'  type='text' value='${f32(offset + 8, is_little_endian).toFixed(2)}'>`

        html += get_car_1_3_1_1_2_1(u32(offset + 64, is_little_endian) + mid, mid)
        html += get_car_1_3_1_1_2_2(u32(offset + 76, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_3_1_1_2_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_3_1_1_2_2(offset, mid) {
        let html = ''

        html += get_car_1_3_1_1_2_2_1(u32(offset + 8, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_3_1_1_2_2_1(offset, mid) {
        let html = ''

        // html += get_car_1_3_1_1_2_2_1(u32(offset +8, is_little_endian) + mid,mid)

        return html

    }
    function get_car_1_5(offset, mid) {
        let html = ''

        temp_obj.car_1_5__backing_up_speed = `<input style='width:100%;' data-type='float' data-offset='${offset + 0}'  type='text' value='${f32(offset + 0, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5__turning_related = `<input style='width:100%;' data-type='float' data-offset='${offset + 4}'  type='text' value='${f32(offset + 4, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5__ground_turning = `<input style='width:100%;' data-type='float' data-offset='${offset + 8}'  type='text' value='${f32(offset + 8, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5__air_turning = `<input style='width:100%;' data-type='float' data-offset='${offset + 12}'  type='text' value='${f32(offset + 12, is_little_endian).toFixed(2)}'>`

        html += get_car_1_5_1(u32(offset + 16, is_little_endian) + mid, mid)
        html += get_car_1_5_2(u32(offset + 24, is_little_endian) + mid, mid)
        html += get_car_1_5_3(u32(offset + 32, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3(offset, mid) {
        let html = ''

        temp_obj.car_1_5_3__bump = `<input style='width:100%;' data-type='float' data-offset='${offset + 0}'  type='text' value='${f32(offset + 0, is_little_endian).toFixed(2)}'>`

        html += get_car_1_5_3_1(u32(offset + 4, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2(u32(offset + 8, is_little_endian) + mid, mid)
        html += get_car_1_5_3_3(u32(offset + 12, is_little_endian) + mid, mid)
        return html

    }
    function get_car_1_5_3_3(offset, mid) {
        let html = ''

        html += get_car_1_5_3_3_1(u32(offset + 0, is_little_endian) + mid, mid)
        return html

    }
    function get_car_1_5_3_3_1(offset, mid) {
        let html = ''

        html += get_car_1_5_3_3_1_1(u32(offset + 4, is_little_endian) + mid, mid)
        return html

    }
    function get_car_1_5_3_3_1_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_1(u32(offset + 0, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2(u32(offset + 8, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_2(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_1(u32(offset + 0, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2_2(u32(offset + 8, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2_3(u32(offset + 12, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2_4(u32(offset + 20, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2_5(u32(offset + 24, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2_6(u32(offset + 32, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_2_6(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_6_1(u32(offset + 8, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_2_6_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2_2_5(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_5_1(u32(offset + 4, is_little_endian) + mid, mid)

        return html

    }

    function get_car_1_5_3_2_2_5_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2_2_4(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_4_1(u32(offset + 8, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_2_4_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2_2_3(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_3_1(u32(offset + 4, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_2_3_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2_2_2(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_2_1(u32(offset + 8, is_little_endian) + mid, mid)
        html += get_car_1_5_3_2_2_2_2(u32(offset + 20, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_2_2_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2_2_2_2(offset, mid) {
        let html = ''

        return html

    }

    function get_car_1_5_3_2_2_1(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_2_1_1(u32(offset + 4, is_little_endian) + mid, mid)
        if (u32(offset + 12, is_little_endian) != 0) {
            html += get_car_1_5_3_2_2_1_2(u32(offset + 12, is_little_endian) + mid, mid)
        }

        return html

    }
    function get_car_1_5_3_2_2_1_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_2_2_1_2(offset, mid) {
        let html = ''

        return html

    }

    function get_car_1_5_3_2_1(offset, mid) {
        let html = ''

        html += get_car_1_5_3_2_1_1(u32(offset + 4, is_little_endian) + mid, mid)

        return html

    }
    function get_car_1_5_3_2_1_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_3_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_1(offset, mid) {
        let html = ''

        return html

    }
    function get_car_1_5_2(offset, mid) {
        let html = ''

        temp_obj.car_1_5_2__acceleration = `<input style='width:100%;' data-type='float' data-offset='${offset}'  type='text' value='${f32(offset, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5_2__unkown_0 = `<input style='width:100%;' data-type='float' data-offset='${offset + 4}'  type='text' value='${f32(offset + 4, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5_2__speed = `<input style='width:100%;' data-type='float' data-offset='${offset + 8}'  type='text' value='${f32(offset + 8, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5_2__unkown_1 = `<input style='width:100%;' data-type='float' data-offset='${offset + 12}'  type='text' value='${f32(offset + 12, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5_2__unkown_2 = `<input style='width:100%;' data-type='float' data-offset='${offset + 16}'  type='text' value='${f32(offset + 16, is_little_endian).toFixed(2)}'>`
        temp_obj.car_1_5_2__boost_speed = `<input style='width:100%;' data-type='float' data-offset='${offset + 20}'  type='text' value='${f32(offset + 20, is_little_endian).toFixed(2)}'>`

        return html

    }

    html = `<div style="display:inline-block;width:95%;padding:5px;">
   
   <div style='height:23%'>Speed and Acceleration
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Mid speed</td>
                    <td class='no_border'> ${temp_obj.car_1_5_2__speed}</td>
               </tr>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Mid Ground Acceleration</td>
                  <td class='no_border'>${temp_obj.car_1_5_2__acceleration} </td>
               </tr>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Mid Air Acceleration</td>
                 <td class='no_border'>${temp_obj.car_1_5_2__unkown_0}</td>
               </tr>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Top Speed</td>
                  <td class='no_border'>${temp_obj.car_1_5_2__boost_speed}</td>
               </tr>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Top Ground Acceleration</td>
                  <td class='no_border'>   ${temp_obj.car_1_5_2__unkown_1}</td>
               </tr>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Top Air Acceleration</td>
                  <td class='no_border'>   ${temp_obj.car_1_5_2__unkown_2}</td>
               </tr>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Reversing Speed</td>
                    <td class='no_border'> ${temp_obj.car_1_5__backing_up_speed}</td>
               </tr>
            </tbody>
        </table>    
      </div>
   </div>
   <br>
   <br>
   <br>
   <div style='height:23%'>Handaling
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Turn Lag</td>
                  <td class='no_border'>${temp_obj.car_1_5__turning_related} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Ground Turning Sensitivity</td>
                  <td class='no_border'>${temp_obj.car_1_5__ground_turning} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Air Turning Sensitivity</td>
                  <td class='no_border'>${temp_obj.car_1_5__air_turning} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Drift Sensitivity</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_2__drift_handaling} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>Jump Height</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_1_2__hop_distance} </td>
               </tr>               
            </tbody>
        </table>    
      </div>
   </div>
   <div data-debug="true" style='height:23%'>Unknown
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>drift related?</td>
                  <td class='no_border'>${temp_obj.car_1_5__turning_related} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>backing up acceleration?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__backingup} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>jump related?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__jump_height} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_1?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_1} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_2?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_2} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_3?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_3} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_4?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_4} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_5?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_5} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_6?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_6} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_7?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_7} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1__unkown_8?</td>
                  <td class='no_border'>${temp_obj.car_1_3_1__unkown_8} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_0 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_0} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_1 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_1} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_2 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_2} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_3 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_3} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_4 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_4} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_5 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_5} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_6 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_6} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_7 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_7} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_8 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_8} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_9 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_9} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_10 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_10} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_11 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_11} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_12 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_12} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_13 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_13} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_14 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_14} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_15 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_15} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_16 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_16} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_17 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_17} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_18 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_18} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_3_1_3__unkown_19 ??</td>
                  <td class='no_border'>${temp_obj.car_1_3_1_3__unkown_19} </td>
               </tr>               
               <tr>
                  <td style="white-space:nowrap;" class='no_border'>car_1_5_3__bump ??</td>
                  <td class='no_border'>${temp_obj.car_1_5_3__bump} </td>
               </tr>               
            </tbody>
        </table>    
      </div>
   </div>
 </div>`

    document.getElementById("file_editor").innerHTML = html

    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', update_input)
    }

}
