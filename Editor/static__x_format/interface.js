function load_layer(offset, mid) {
    let html = ''
    html += `mid:${mid}<br><table>
    </tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> name offset </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> always 0 </td>
        </tr>
        <tr>
   <td> ${u32(offset + 8, is_little_endian)}  </td> 
            <td> offset -> 2 / End Layer name </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? low </td>
        </tr>
        <tr>
            <td> 
    | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] </td> 
            <td> type of layer </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 20, is_little_endian)} </td> 
            <td> offset occasionally </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 24, is_little_endian)} </td> 
            <td> type offset </td>
        </tr>
        <tr>
            <td> 
    |     | [ ${u8(offset + 28, is_little_endian)}, ${u8(offset + 29, is_little_endian)}, ${u8(offset + 30, is_little_endian)}, ${u8(offset + 31, is_little_endian)} ] </td> 
 </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 32, is_little_endian)} </td>
            <td> ? offset sometimes </td>
        </tr>
        <tr>
            <td> 
    | ${f32(offset + 36, is_little_endian)} </td>
            <td> x position </td>
        </tr>
        <tr>
            <td> 
    | ${f32(offset + 40, is_little_endian)} </td>
            <td> y position  </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 44, is_little_endian)}</td>
            <td> ? offset sometimes </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 48, is_little_endian)}</td>
            <td> ? offset sometimes per_place_manager ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 52, is_little_endian)}</td>
            <td> offset ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 56, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 60, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 64, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 68, is_little_endian)}</td>
            <td> amount ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 72, is_little_endian)}</td>
            <td> ? offset </td>
        </tr>
    </tbody>
    </table></div>`

    if (u32(offset + 4, is_little_endian) !== 0) {
        alert("4 not 0")
    }
    // if (u32(offset + 12, is_little_endian) !== 0) {
    //     alert("12 not 0")
    // // }
    // if (u32(offset + 20, is_little_endian) !== 0) {
    //     alert("20 not 0")
    // }

    // if (u32(offset + 8, is_little_endian) !== 0) {
    //     html += get_interface_1(u32(offset + 8, is_little_endian) + mid)
    // }

    // if (u8(offset + 19, is_little_endian) === 0) {
    //     html += get_0(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 1) {
    //     html += get_1(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 3) {
    //     html += get_3(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 3) {
    //     html += get_3(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 12) {
    //     html += get_12(u32(offset + 24, is_little_endian) + mid)
    // }

    // if (u8(offset + 19, is_little_endian) === 6) {
    //     html += get_6(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 12) {
    //     html += get_12(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 13) {
    //     html += get_13(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 14) {
    //     html += get_14(u32(offset + 24, is_little_endian) + mid)
    // }
    // if (u8(offset + 19, is_little_endian) === 15) {
    //     html += get_15(u32(offset + 24, is_little_endian) + mid)
    // }

    if (u32(offset + 32, is_little_endian) !== 0) {
        html += get_interface_3(u32(offset + 32, is_little_endian) + mid)
    }
    // if (u32(offset + 44, is_little_endian) !== 0) {
    //     html += get_interface_4(u32(offset + 44, is_little_endian) + mid)
    // }
    // // if (u32(offset + 48, is_little_endian) !== 0) {
    // //     html += get_interface_5(u32(offset + 48, is_little_endian) + mid)
    // // }
    // if (u32(offset + 52, is_little_endian) !== 0) {
    //     html += get_interface_6(u32(offset + 52, is_little_endian) + mid)
    // }
    // for (let i = 0; i < u32(offset + 68, is_little_endian); i++) {
    //     html += get_interface_7(u32(offset + 72, is_little_endian) + mid + (i*12),i)
    // }

    // html += ` [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | F${f32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}</div>`
    document.getElementById("file_editor").innerHTML = html

    function get_interface_1(offset) {
        let html = ''
        html += `offset:${offset} | offset 2
        <table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
            <td> 1/2 makes disapear ? </td>
        </tr>
        <tr>
            <td> | ${u32(offset + 4, is_little_endian)} </td>
            <td> amount maybe </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> offset -> layer offset 2 1 </td>
        </tr>
        <tr>
            <td> [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
            </tbody>
    </table>
        <br>`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += get_interface_1_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html

        function get_interface_1_1(offset) {
            let html = ''
            html += `offset:${offset} | offset 2 1
        <table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> | ${u32(offset + 4, is_little_endian)} </td>
            <td> offset </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
            </tbody>
    </table>
        <br>`

            if (u32(offset + 4, is_little_endian) !== 0) {
                html += get_interface_1_1_1(u32(offset + 4, is_little_endian) + mid)
            }

            return html

            function get_interface_1_1_1(offset) {
                let html = ''
                html += `offset:${offset} | offset 2 1 1
        <table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> | ${u32(offset + 4, is_little_endian)} </td>
            <td> timer / disapear ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
            </tbody>
    </table>
        <br>`

                return html
            }
        }
    }

    function get_0(offset) {
        let html = ''
        html += `offset:${offset} ,  [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u16(offset + 4, is_little_endian)}, ${u16(offset + 6, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]<br>`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += get_0_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html

        function get_0_1(offset) {
            let html = ''
            html += `offset:${offset}---> ,  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)},  ${u8(offset + 9, is_little_endian)},  ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)},  ${u8(offset + 17, is_little_endian)},  ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}<br>`

            for (let i = 0; i < u32(offset, is_little_endian); i++) {
                html += get_0_1_1(u32(offset + 4, is_little_endian) + mid + (i * 4))
            }
            return html

            function get_0_1_1(offset) {
                let html = `${u16(offset, is_little_endian)} | ${u16(offset + 2, is_little_endian)}<br>`
                return html

            }

        }
    }

    function get_3(offset) {
        let html = `<br>offset; ${offset}// ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            html += get_3_1(u32(offset + 4, is_little_endian) + mid + (i * 4), i)
        }

        return html
    }
    function get_3_1(offset, i) {
        let html = `<br>--->---> ${i} offset; ${offset}// ${u32(offset, is_little_endian)}`

        if (u32(offset + 0, is_little_endian) !== 0) {
            html += get_3_1_1(u32(offset + 0, is_little_endian) + mid)

        }
        return html
    }
    function get_3_1_1(offset) {
        let html = `<br>--->--->---> offset; ${offset}// ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} |  ${u32(offset + 32, is_little_endian)} |  F${f32(offset + 36, is_little_endian)} |  ${u32(offset + 40, is_little_endian)} |  ${u32(offset + 44, is_little_endian)} |  ${u32(offset + 48, is_little_endian)} |  ${u32(offset + 52, is_little_endian)} |  ${u32(offset + 56, is_little_endian)} |  ${u32(offset + 60, is_little_endian)} |  ${u32(offset + 64, is_little_endian)} |  ${u32(offset + 68, is_little_endian)} |  ${u32(offset + 72, is_little_endian)} |  ${u32(offset + 76, is_little_endian)} | <br>`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_string((u32(offset + 4, is_little_endian) + mid), 0, false)

        }
        return html
    }

    function get_1(offset) {
        let html = `<br>---3?1---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u16(offset + 18, is_little_endian)} ] | [ ${u8(offset + 20, is_little_endian)}, ${u8(offset + 21, is_little_endian)}, ${u8(offset + 22, is_little_endian)}, ${u8(offset + 23, is_little_endian)} ] | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += get_1_2(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }

    function get_1_2(offset) {
        let html = `<br>---3?1---2--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}`

        // if (u32(offset + 4, is_little_endian !== 0)) {
        //     for (i = 0; i < u32(offset, is_little_endian); i++) {
        //         html += get_1_2_1(u32(offset + 4, is_little_endian) + offset_mid + (i * 8))
        //     }
        // }

        return html
    }

    function get_1_2_1(offset) {
        let html = `<br>---3?1---2--->--->  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`
        return html

    }

    function get_interface_3(offset) {
        let html = ''
        html += `offset:${offset} | offset 3
        <table>
            </tbody>
                <tr>
                    <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> | ${u32(offset + 4, is_little_endian)} </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td>  offset related ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> offset sometimes ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> amount sometimes ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> offset sometimes ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 32, is_little_endian)} </td> 
                    <td> offset related ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 36, is_little_endian)} </td> 
                    <td> offset sometimes ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 40, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 44, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        if (u32(offset + 12, is_little_endian) !== 0) {
            html += get_interface_3_1(u32(offset + 12, is_little_endian) + mid)
        }



        if (u32(offset + 20, is_little_endian)) {
            html += get_interface_3_2(u32(offset + 12, is_little_endian) + mid)
        }
        
        if (u32(offset + 36, is_little_endian) !== 0) {
            html += get_interface_3_3(u32(offset + 36, is_little_endian) + mid)
        }

        return html

        function get_interface_3_1(offset) {
            let html = ''
            html += `offset:${offset} | offset 3 1
        <table>
            </tbody>
                <tr>
                    <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

            return html
        }
        function get_interface_3_2(offset) {
            let html = ''
            html += `offset:${offset} | offset 3 2
        <table>
            </tbody>
                <tr>
                    <td> ${u32(offset + 0, is_little_endian)} ] </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 4, is_little_endian)} ] </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

            if (u32(offset + 8, is_little_endian)) {
                
            }

            return html
        }
        function get_interface_3_3(offset) {
            let html = ''
            html += `offset:${offset} | offset 3 1
        <table>
            </tbody>
                <tr>
                    <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

            if (u32(offset + 24, is_little_endian) !== 0) {
                html += get_interface_3_3_1(u32(offset + 24, is_little_endian) + mid)
            }

            return html

            function get_interface_3_3_1(offset) {
                let html = ''
                html += `offset:${offset} | offset 3 1 1
        <table>
            </tbody>
                <tr>
                    <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 4, is_little_endian)}  </td>
                    <td> offset ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`
                return html
            }
        }
    }

    function get_interface_4(offset) {
        let html = ''
        html += `offset:${offset} | offset 4
        <table>
            </tbody>
                <tr>
                    <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 4, is_little_endian)}  </td>
                    <td> offset ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`
        return html
    }

    function get_interface_6(offset) {
        let html = ''
        html += `offset:${offset} | offset 6
        <table>
            </tbody>
                <tr>
                    <td> ${u32(offset, is_little_endian)} </td> 
                    <td> amount </td>
                </tr>
                <tr>
                    <td> | ${u32(offset + 4, is_little_endian)} </td>
                    <td> offset 1 waypoints </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td>  amount 2 </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> offset 2 </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 32, is_little_endian)} </td> 
                    <td>  ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 36, is_little_endian)} </td> 
                    <td>  ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 40, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 44, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        for (let i = 0; i < u32(offset + 0, is_little_endian); i++) {
            html += get_interface_6_1(u32(offset + 4, is_little_endian) + mid + (i * 32), i)
        }
        for (let i = 0; i < u32(offset + 8, is_little_endian); i++) {
            html += get_interface_6_2(u32(offset + 12, is_little_endian) + mid + (i * 32), i)
        }
        for (let i = 0; i < u32(offset + 16, is_little_endian); i++) {
            html += get_interface_6_3(u32(offset + 20, is_little_endian) + mid + (i * 32), i)
        }
        for (let i = 0; i < u32(offset + 24, is_little_endian); i++) {
            html += get_interface_6_4(u32(offset + 28, is_little_endian) + mid + (i * 32), i)
        }
        for (let i = 0; i < u32(offset + 32, is_little_endian); i++) {
            html += get_interface_6_5(u32(offset + 36, is_little_endian) + mid + (i * 32), i)
        }

        return html
    }

    function get_interface_6_1(offset, i) {
        let html = ''
        html += `offset:${offset} | offset 6 1 [${i}] waypoints
        <table>
            </tbody>
                <tr>
                    <td> ${f32(offset, is_little_endian)}  </td> 
                    <td> x </td>
                </tr>
                <tr>
                    <td> | ${f32(offset + 4, is_little_endian)} </td>
                    <td> y </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 8, is_little_endian)} </td> 
                    <td>  ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 20, is_little_endian)} </td> 
                    <td> timer </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        return html
    }
    function get_interface_6_2(offset, i) {
        let html = ''
        html += `offset:${offset} | offset 6 2 [${i}]
        <table>
            </tbody>
                <tr>
                    <td> ${f32(offset, is_little_endian)}  </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> | ${f32(offset + 4, is_little_endian)} </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 8, is_little_endian)} </td> 
                    <td>  ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 20, is_little_endian)} </td> 
                    <td> timer </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        return html
    }
    function get_interface_6_3(offset, i) {
        let html = ''
        html += `offset:${offset} | offset 6 3 [${i}]
        <table>
            </tbody>
                <tr>
                    <td> ${f32(offset, is_little_endian)}  </td> 
                    <td> x size </td>
                </tr>
                <tr>
                    <td> | ${f32(offset + 4, is_little_endian)} </td>
                    <td> y size </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 8, is_little_endian)} </td> 
                    <td>  ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] </td> 
                    <td> 0 = no loop<br>
                    1 = loop ? ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        return html
    }
    function get_interface_6_4(offset, i) {
        let html = ''
        html += `offset:${offset} | offset 6 4 [${i}]
        <table>
            </tbody>
                <tr>
                    <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
                    <td> color ? </td>
                </tr>
                <tr>
                    <td> | ${f32(offset + 4, is_little_endian)} </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 8, is_little_endian)} </td> 
                    <td>  float timer </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        return html
    }

    function get_interface_6_5(offset, i) {
        let html = ''
        html += `offset:${offset} | offset 6 5 [${i}]
        <table>
            </tbody>
                <tr>
                    <td> ${f32(offset, is_little_endian)}  </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> | ${f32(offset + 4, is_little_endian)} </td>
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 8, is_little_endian)} </td> 
                    <td> x global position </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 12, is_little_endian)} </td> 
                    <td> y global position </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        return html
    }
    function get_interface_7(offset, i) {
        let html = ''
        html += `offset:${offset} | offset 7 [a ${i}]
        <table>
            </tbody>
                <tr>
                    <td> ${u32(offset, is_little_endian)}  </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 4, is_little_endian)} </td>
                    <td> offst ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_interface_7_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function get_interface_7_1(offset) {
        let html = ''
        html += `offset:${offset} | offset 7 1
        <table>
            </tbody>
                <tr>
                    <td> ${u32(offset, is_little_endian)}  </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 4, is_little_endian)} </td>
                    <td>  offset ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 8, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 24, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 28, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 32, is_little_endian)} </td> 
                    <td> amount ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 36, is_little_endian)} </td> 
                    <td> offset ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 40, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 44, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 48, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 52, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 56, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 60, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
            </tbody>
        </table>
        <br>`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_interface_7_1_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }

    function get_interface_7_1_1(offset) {
        let html = ''
        html += `offset:${offset} | offset 7 1 1
        <table>
            </tbody>
                <tr>
                    <td> ${u32(offset, is_little_endian)}  </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 4, is_little_endian)} </td>
                    <td>  ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 8, is_little_endian)} </td> 
                    <td> timer 1 ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 12, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 16, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> ${u32(offset + 20, is_little_endian)} </td> 
                    <td> ? </td>
                </tr>
                <tr>
                    <td> [ ${u8(offset + 24, is_little_endian)}, ${u8(offset + 25, is_little_endian)}, ${u8(offset + 26, is_little_endian)}, ${u8(offset + 27, is_little_endian)} ] </td> 
                    <td> 0 = doesnt show up /?/?/? ? </td>
                </tr>
                <tr>
                    <td> ${f32(offset + 28, is_little_endian)} </td> 
                    <td> timer 2 ? </td>
                </tr>
            </tbody>
        </table>
        <br>`
        return html
    }

    function get_6(offset) {
        let html = ''
        html += `offset:${offset}  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} <br>`
        return html
    }
    function get_12(offset) {
        let html = ''
        html += `offset:${offset}  ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} <br>`
        return html
    }
    function get_13(offset) {
        let html = ''
        html += `offset:${offset} ,  [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]<br>`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_13_1(u32(offset + 4, is_little_endian) + mid)
        }
        if (u32(offset + 12, is_little_endian) !== 0) {
            html += get_13_2(u32(offset + 12, is_little_endian) + mid)
        }

        return html
    }

    function get_13_1(offset) {
        let html = '--->'
        html += `offset:${offset} ,  [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]<br>`

        return html
    }
    function get_13_2(offset) {
        let html = '--->'
        html += `offset:${offset} ,  [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]<br>`

        return html
    }

    function get_14(offset) {
        let html = ''
        html += `offset:${offset} ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} <br>`

        return html
    }

    function get_15(offset) {
        let html = ''
        html += `offset:${offset} ,${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} <br>`

        if (u32(offset, is_little_endian) !== 0) {
            html += get_15_1(u32(offset, is_little_endian) + mid)
        }
        return html
    }

    function get_15_1(offset) {
        let html = ''
        html += `offset:${offset} ,  ${f32(offset, is_little_endian)} | [ ${u16(offset + 4, is_little_endian)}, ${u16(offset + 6, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | [ ${u8(offset + 12, is_little_endian)}, ${u8(offset + 13, is_little_endian)}, ${u8(offset + 14, is_little_endian)}, ${u8(offset + 15, is_little_endian)} ]<br>`

        return html
    }
}

function load_frame(offset, mid) {
    let html = ''
    html += `mid:${mid}<br><table>
    </tbody>
        <tr>
            <td> ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> offset 1 -> varibles </td>
        </tr>
        <tr>
   <td> ${u32(offset + 8, is_little_endian)}  </td> 
            <td> amount 2 </td>
        </tr>
        <tr>
            <td> 
     ${u32(offset + 12, is_little_endian)} </td> 
            <td> offset 2 -> ? </td>
        </tr>
        <tr>
            <td> 
    | [ ${u8(offset + 16, is_little_endian)}, ${u8(offset + 17, is_little_endian)}, ${u8(offset + 18, is_little_endian)}, ${u8(offset + 19, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 20, is_little_endian)} </td> 
            <td> sometimes large number? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 24, is_little_endian)} </td> 
            <td> sometimes large number ? </td>
        </tr>
        <tr>
            <td>  ${u32(offset + 28, is_little_endian)} </td> 
            <td> offset 3 sometimes ? </td>
        </tr>
        <tr>
            <td> 
     ${u32(offset + 32, is_little_endian)} </td>
            <td> 0 ?  </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 36, is_little_endian)} </td>
            <td> offset 3 sometimes / gc only ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 40, is_little_endian)} </td>
            <td> ?  </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 44, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 48, is_little_endian)}</td>
            <td> ?  </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 52, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 56, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${f32(offset + 60, is_little_endian)}</td>
            <td> float ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 64, is_little_endian)}</td>
            <td> ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 68, is_little_endian)}</td>
            <td> amount layers </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 72, is_little_endian)}</td>
            <td> offset </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 76, is_little_endian)}</td>
            <td> ? </td>
        </tr>
    </tbody>
    </table></div>`

    if (u32(offset + 32, is_little_endian) !== 0) {
        alert('32 not 0')
    }
    if (u32(offset + 52, is_little_endian) !== 0) {
        alert('52 not 0')
    }
    if (u32(offset + 64, is_little_endian) !== 0) {
        alert('64 not 0')
    }
    if (u32(offset + 76, is_little_endian) !== 0) {
        alert('76 not 0')
    }

    for (let i = 0; i < u32(offset + 44, is_little_endian); i++) {
        html += interface_4(u32(offset + 48, is_little_endian) + mid + (i * 28))
    }

    function interface_4(offset) {
        let html = `<br>offset: ${offset}<br><table>
    </tbody>
        <tr>
            <td> F${f32(offset, is_little_endian)} </td> 
            <td> float ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`
        return html
    }

    document.getElementById("file_editor").innerHTML = html

}

function load_settings_2(offset, mid) {
    let html = ''
    html += `mid:${mid}<br> offset: ${offset} // [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)}`

    // if (u32(offset + 4, is_little_endian) !== 0) {
    //     html += get_settings_2_1(u32(offset + 4, is_little_endian) + mid)
    // }
    // for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
    //     html += get_settings_2_2(u32(offset + 16, is_little_endian) + mid + (i*8),i)
    // }
    for (let i = 0; i < u32(offset + 20, is_little_endian); i++) {
        html += get_settings_2_3(u32(offset + 24, is_little_endian) + mid + (i * 36), i)
    }

    document.getElementById("file_editor").innerHTML = html

    function get_settings_2_1(offset) {
        let html = `<br>---1>[ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

        if (u8(offset, is_little_endian) === 2) {
            html += get_settings_2_1_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }

    function get_settings_2_1_1(offset) {
        let html = `<br>---1>---> [ ${u8(offset, is_little_endian)} , ${u8(offset + 1, is_little_endian)} , ${u8(offset + 2, is_little_endian)} , ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_settings_2_1_1_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_1_1_1(offset) {
        // let html = `<br>---1>--->--->  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} | ${u32(offset + 80, is_little_endian)} | ${u32(offset + 84, is_little_endian)} | ${u32(offset + 88, is_little_endian)} | ${u32(offset + 92, is_little_endian)} /// offset: ${offset}`
        let html = `<br>offset: ${offset}<br><table>
    </tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> 6 sometimes ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`

        if (u32(offset + 20, is_little_endian) !== 0) {
            html += get_settings_2_1_1_1_1(u32(offset + 20, is_little_endian) + mid)
        }

        return html
    }

    function get_settings_2_1_1_1_1(offset) {
        let html = `<br>---1>--->--->--->  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} /// offset: ${offset}`
        return html
    }
    function get_settings_2_2(offset, i) {
        let html = `<br>---2> ${i} /  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} /// offset: ${offset}`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_settings_2_2_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }

    function get_settings_2_2_1(offset) {
        let html = `<br>offset: ${offset}<br><table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}  ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> offset sometimes ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += get_settings_2_1_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_2_1_1(offset) {
        let html = `<br>get_settings_2_2_1_1 offset: ${offset}<br><table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}  ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`

        return html
    }
    function get_settings_2_3(offset) {
        let html = `<br>get_settings_2_3 offset: ${offset}<br><table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}  ] </td> 
            <td> 1 = frame ? <br>
                 3 = 0 <br>
                11 = ? <br>
                19 = 0 <br>
                20 = 0 <br>
                29 = 0 <br>
                41 = 0</td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> offset ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> offset sometimes ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 32, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`
        if (u8(offset, is_little_endian) === 11) {
            html += get_settings_2_3_v11(u32(offset + 4, is_little_endian) + mid)
        }

        if (u32(offset + 24, is_little_endian) !== 0) {
            html += get_settings_2_3_2(u32(offset + 24, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_v11(offset) {
        let html = `<br>get_settings_2_3_v11 offset: ${offset}<br><table>
    </tbody>
        <tr>
            <td> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}  ] </td> 
            <td> amount ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> offset ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`

        for (let i = 0; i < u32(offset, is_little_endian); i++) {
            html += get_settings_2_3_v11_1(u32(offset + 4, is_little_endian) + mid + (i * 12), i)
        }

        return html
    }
    function get_settings_2_3_v11_1(offset, i) {
        let html = `<br>---3>  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} /// ${i}, offset: ${offset}`

        if (u32(offset + 0, is_little_endian) !== 0) {
            html += get_settings_2_3_v11_1_1(u32(offset + 0, is_little_endian) + mid)
        }
        if (u32(offset + 4, is_little_endian) === 0) {
            html += get_settings_2_3_v11_1_v0(u32(offset + 8, is_little_endian) + mid)
        }
        if (u32(offset + 4, is_little_endian) === 1) {
            html += get_settings_2_3_v11_1_v1(u32(offset + 8, is_little_endian) + mid)
        }
        if (u32(offset + 4, is_little_endian) === 100) {// frame
        // html += get_settings_2_3_v11_1_v1(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_v11_1_1(offset) {
        let html = `<br>---3>---0>  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        return html
    }
    function get_settings_2_3_v11_1_v0(offset) {
        let html = `<br>---3>---v0>  | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 4, is_little_endian)} ${u8(offset + 5, is_little_endian)} ${u8(offset + 6, is_little_endian)} ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        return html
    }
    function get_settings_2_3_v11_1_v1(offset) {
        let html = `<br>---3>---v1>  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        if (u32(offset + 0, is_little_endian) !== 0) {
            html += get_settings_2_3_v11_1_v1_1(u32(offset + 0, is_little_endian) + mid)
        }
        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_settings_2_3_v11_1_v1_2(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_v11_1_v1_1(offset) {
        let html = `<br>---3>---v1>---1> [ ${u8(offset + 0, is_little_endian)} ${u8(offset + 1, is_little_endian)} ${u8(offset + 2, is_little_endian)} ${u8(offset + 3, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_settings_2_3_v11_1_v1_1_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_v11_1_v1_1_1(offset) {
        let html = `<br>---3>---v1>---1>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        return html
    }

    function get_settings_2_3_v11_1_v1_2(offset) {
        let html = `<br>---3>---v1>---2>  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        return html
    }
    function get_settings_2_3_2(offset) {
        let html = `<br>---3>---2>  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}  | ${u32(offset + 16, is_little_endian)}  | ${u32(offset + 20, is_little_endian)}  | ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)} ///  offset: ${offset}`

        if (u32(offset + 16, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1(u32(offset + 16, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1(offset) {
        let html = `<br>---3>---2>--->  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)}  ///  offset: ${offset}`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1_1(offset) {
        let html = `<br>---3>---2>--->--->  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)}  ///  offset: ${offset}`

        if (u32(offset + 0, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1_1_1(u32(offset + 0, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1_1_1(offset) {
        let html = `<br>---3>---2>--->--->  | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 5, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}  ///  offset: ${offset}`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1_1_1_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1_1_1_1(offset) {
        let html = `<br>---3>---2>--->--->--->  | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 5, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        return html
    }
}

function load_settings_3(offset, mid) {
    let html = ''
    html += `<br> offset: ${offset} // ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | [ ${u8(offset + 8, is_little_endian)},  ${u8(offset + 9, is_little_endian)},  ${u8(offset + 10, is_little_endian)},  ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)} | ${u32(offset + 16, is_little_endian)} | ${u32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}`

    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        html += interface_3_1(u32(offset + 16, is_little_endian) + mid + (i * 16))
    }

    document.getElementById("file_editor").innerHTML = html

    function interface_3_1(offset) {
        let html = ''
        html += `<br> offset: ${offset} // ---> ${u32(offset, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)}`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += interface_3_1_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function interface_3_1_1(offset) {
        let html = ''
        html += `<br> offset: ${offset} // --->---> ${u32(offset, is_little_endian)}  | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

        if (u32(offset + 0, is_little_endian) !== 0) {
            html += interface_3_1_1_1(u32(offset + 0, is_little_endian) + mid)
        }

        return html
    }
    function interface_3_1_1_1(offset) {
        let html = ''
        html += `<br> offset: ${offset} // --->--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} | ${f32(offset + 16, is_little_endian)} | ${f32(offset + 20, is_little_endian)} | ${f32(offset + 24, is_little_endian)} | ${f32(offset + 28, is_little_endian)}`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += interface_3_1_1_1_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }
    function interface_3_1_1_1_1(offset) {
        let html = ''
        html += `<br> offset: ${offset} // --->--->--->---> [ ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] | [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}`

        return html
    }
}

function load_x_layer_1(offset, mid) {
    let html = ''
    html += `mid:${mid}<br>
    <table>
    </tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> 1/2 ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
   <td> ${u32(offset + 8, is_little_endian)}  </td> 
            <td> offset sometimes ? </td>
        </tr>
        <tr>
            <td> 
    | ${u32(offset + 12, is_little_endian)} </td> 
            <td> ?</td>
        </tr>
         </tbody>
    </table></div>`

    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        html += load_x_layer_1_1(u32(offset + 8, is_little_endian) + mid + (i * 12))
    }
    document.getElementById("file_editor").innerHTML = html

    function load_x_layer_1_1(offset) {
        let html = `<br>sub | offset${offset}<table>
    </tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> offset ? </td>
        </tr>
        <tr>
   <td> ${u32(offset + 8, is_little_endian)}  </td> 
            <td> ? </td>
        </tr>
         </tbody>
    </table></div>`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += load_x_layer_1_2(u32(offset + 4, is_little_endian) + mid)
        }

        return html

    }
    function load_x_layer_1_2(offset) {
        let html = `<br>sub sub | offset${offset}<table>
    </tbody>
        <tr>
            <td> ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)}  </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)}  </td> 
            <td> ? </td>
        </tr>
         </tbody>
    </table></div>`

        return html

    }
}

function load_x_layer_2(offset, mid, type) {
    let html = ''

    html += `mid: ${mid}, type: ${type} offset: ${offset} <br>`

    document.getElementById("file_editor").innerHTML = html
}
function load_x_layer_3(offset, mid) {
    let html = ''

    html += `mid: ${mid},  offset: ${offset} <br>
    <table>
    </tbody>
        <tr>
            <td> ${u8(offset, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td>
            <td> offset sometimes ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 32, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 36, is_little_endian)} </td>
            <td> offset sometimes </td>
        </tr>
        <tr>
            <td> ${u32(offset + 40, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 44, is_little_endian)} </td>
            <td> ? </td>
        </tr>
    </tbody>
    </table></div>`

    if (u32(offset + 12, is_little_endian) !== 0) {
        html += load_x_layer_3_1(u32(offset + 12, is_little_endian) + mid)
    }
    if (u32(offset + 36, is_little_endian) !== 0) {
        html += load_x_layer_3_2(u32(offset + 36, is_little_endian) + mid)
    }

    document.getElementById("file_editor").innerHTML = html

    function load_x_layer_3_1(offset) {
        let html = `<br>1<table>
    </tbody>
        <tr>
            <td> ${u32(offset + 0, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td>
            <td> ? </td>
        </tr>
    </tbody>
    </table></div>`
        return html

    }
    function load_x_layer_3_2(offset) {
        let html = `<br>1<table>
    </tbody>
        <tr>
            <td> ${u32(offset + 0, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> offset ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td>
            <td> ? </td>
        </tr>
    </tbody>
    </table></div>`

        if (u32(offset + 24, is_little_endian) !== 0) {
            html += load_x_layer_3_2_1(u32(offset + 24, is_little_endian) + mid)
        }
        return html

    }
    function load_x_layer_3_2_1(offset) {
        let html = `<br>2 / load_x_layer_3_1 offset: ${offset}<table>
    </tbody>
        <tr>
            <td> ${u32(offset + 0, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td>
            <td> offset ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 32, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 36, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 40, is_little_endian)} </td>
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 44, is_little_endian)} </td>
            <td> ? </td>
        </tr>
    </tbody>
    </table></div>`

        return html

    }

}
function load_x_layer_4(offset, mid) {
    let html = ''

    html += `mid: ${mid},  offset: ${offset} <br>`

    document.getElementById("file_editor").innerHTML = html
}
function load_x_layer_5(offset, mid) {
    let html = ''

    html += `mid: ${mid},  offset: ${offset} <br>`

    document.getElementById("file_editor").innerHTML = html
}
function load_x_layer_6(offset, mid) {
    let html = ''

    html += `mid: ${mid}, offset: ${offset} <br>`

    document.getElementById("file_editor").innerHTML = html
}
function load_x_layer_7(offset, mid) {
    let html = ''

    html += `mid: ${mid}, offset: ${offset} <br>`

    document.getElementById("file_editor").innerHTML = html
}
function load_settings_2_3_2(offset, mid) {
    let html = `mid: ${mid}, offset: ${offset} <br>`

    html += `<br>---3>---2>  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | [ ${u8(offset + 8, is_little_endian)}, ${u8(offset + 9, is_little_endian)}, ${u8(offset + 10, is_little_endian)}, ${u8(offset + 11, is_little_endian)} ] | ${u32(offset + 12, is_little_endian)}  | ${u32(offset + 16, is_little_endian)}  | ${u32(offset + 20, is_little_endian)}  | ${u32(offset + 24, is_little_endian)}  | ${u32(offset + 28, is_little_endian)} ///  offset: ${offset}`

    if (u32(offset + 16, is_little_endian) !== 0) {
        html += get_settings_2_3_2_1(u32(offset + 16, is_little_endian) + mid)
    }

    document.getElementById("file_editor").innerHTML = html

    function get_settings_2_3_2_1(offset) {
        let html = `<br>---3>---2>--->  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)}  ///  offset: ${offset}`

        if (u32(offset + 4, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1_1(u32(offset + 4, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1_1(offset) {
        let html = `<br>---3>---2>--->--->  | ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)}  ///  offset: ${offset}`

        if (u32(offset + 0, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1_1_1(u32(offset + 0, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1_1_1(offset) {
        let html = `<br>---3>---2>--->--->  | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 5, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)}  ///  offset: ${offset}`

        if (u32(offset + 8, is_little_endian) !== 0) {
            html += get_settings_2_3_2_1_1_1_1(u32(offset + 8, is_little_endian) + mid)
        }

        return html
    }
    function get_settings_2_3_2_1_1_1_1(offset) {
        let html = `<br>---3>---2>--->--->--->  | ${u32(offset + 0, is_little_endian)} | [ ${u8(offset + 5, is_little_endian)}, ${u8(offset + 4, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ]  | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}`

        return html
    }

}

function load_x_text(offset, mid) {
    let html = `<br> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)}  | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}<br>`

    if (u32(offset + 0, is_little_endian) !== 0) {
        html += x_text_1(u32(offset + 0, is_little_endian) + mid)
    }

    function x_text_1(offset) {
        let html = get_string(offset, 0, false)
        return html
    }

    document.getElementById("file_editor").innerHTML = html

}

function load_x_spark(offset, mid) {
    let html = `<br>offset:${offset} F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} |  ${u32(offset + 28, is_little_endian)} ///  offset: ${offset}`

    if (u32(offset + 16, is_little_endian) !== 0) {
        html += x_spark_1(u32(offset + 16, is_little_endian) + mid)
    }

    function x_spark_1(offset) {
        let html = `<br>---> [ ${u16(offset + 0, is_little_endian)}, ${u16(offset + 2, is_little_endian)} ] | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)} | F${f32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)}  | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} ///  offset: ${offset}`

        for (let i = 0; i < u32(offset + 44, is_little_endian); i++) {
            html += x_spark_1_1(u32(offset + 48, is_little_endian) + mid + (i * 12))
        }
        for (let i = 0; i < u32(offset + 52, is_little_endian); i++) {
            html += x_spark_1_2(u32(offset + 56, is_little_endian) + mid + (i * 32))
        }

        return html
    }
    function x_spark_1_1(offset) {
        let html = `<br>---1>---> [ ${u8(offset + 0, is_little_endian)}, ${u8(offset + 1, is_little_endian)}, ${u8(offset + 2, is_little_endian)}, ${u8(offset + 3, is_little_endian)}, ] | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} ///  offset: ${offset}`

        return html
    }
    function x_spark_1_2(offset) {
        let html = `<br>---2>---> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}  ///  offset: ${offset}`

        return html
    }

    document.getElementById("file_editor").innerHTML = html

}

function load_x_interface_model(offset, mid) {
    let html = `<br> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}<br>
    |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} <br>
    | ${u32(offset + 32, is_little_endian)} | F${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} <br>
    | [ ${u8(offset + 48, is_little_endian)}, ${u8(offset + 49, is_little_endian)}, ${u8(offset + 50, is_little_endian)}, ${u8(offset + 51, is_little_endian)} ] | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} <br>
    | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} ///  offset: ${offset}<br>`
    if (u32(offset + 4, is_little_endian) !== 0) {
        html += get_string((u32(offset + 4, is_little_endian) + mid), 0, false)

        html += load_x_interface_model_2(u32(offset + 8, is_little_endian) + mid)

        if (u32(offset + 52, is_little_endian) !== 0) {
            html += load_x_interface_model_7(u32(offset + 52, is_little_endian) + mid)
        }
        if (u32(offset + 56, is_little_endian) !== 0) {
            html += load_x_interface_model_8(u32(offset + 56, is_little_endian) + mid)
        }
        if (u32(offset + 64, is_little_endian) !== 0) {
            html += load_x_interface_model_9(u32(offset + 64, is_little_endian) + mid)
        }
    }

    function load_x_interface_model_2(offset) {
        let html = `<br>---> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} <br>
    |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} <br>
    | ${u32(offset + 32, is_little_endian)} | ${u32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} <br>
    | ${u32(offset + 48, is_little_endian)} | ${u32(offset + 52, is_little_endian)} | ${u32(offset + 56, is_little_endian)} | ${u32(offset + 60, is_little_endian)} <br>
    | ${u32(offset + 64, is_little_endian)} | ${u32(offset + 68, is_little_endian)} | ${u32(offset + 72, is_little_endian)} | ${u32(offset + 76, is_little_endian)} ///  offset: ${offset}<br>`
        return html
    }
    function load_x_interface_model_7(offset) {
        let html = `<br>---7> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}<br>`
        return html
    }
    function load_x_interface_model_8(offset) {
        let html = `<br>---8> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} ///  offset: ${offset}<br>`
        return html
    }
    function load_x_interface_model_9(offset) {
        let html = `<br>---9> F${f32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)}<br>
    | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} <br>
    | F${f32(offset + 32, is_little_endian)} | ${f32(offset + 36, is_little_endian)} | ${u32(offset + 40, is_little_endian)} | ${u32(offset + 44, is_little_endian)} <br>
///  offset: ${offset}<br>`
        return html
    }

    document.getElementById("file_editor").innerHTML = html
}

function load_x_sub_model(offset, mid) {
    let html = `<br> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)} | ${u32(offset + 8, is_little_endian)} | ${u32(offset + 12, is_little_endian)} <br>
    |  ${u32(offset + 16, is_little_endian)} |  ${u32(offset + 20, is_little_endian)} |  ${u32(offset + 24, is_little_endian)} | ${u32(offset + 28, is_little_endian)} <br>///  offset: ${offset}<br>`

    for (let i = 0; i < u32(offset + 4, is_little_endian); i++) {
        html += load_x_sub_model_1(u32(offset + 8, is_little_endian) + mid + (i * 4))
    }
    for (let i = 0; i < u32(offset + 12, is_little_endian); i++) {
        html += load_x_sub_model_2(u32(offset + 16, is_little_endian) + mid + (i * 8))
    }
    document.getElementById("file_editor").innerHTML = html

    function load_x_sub_model_1(offset) {
        let html = `<br>---> ${u32(offset + 0, is_little_endian)}`
        return html
    }
    function load_x_sub_model_2(offset) {
        let html = `<br>---2> ${u32(offset + 0, is_little_endian)} | ${u32(offset + 4, is_little_endian)}`
        return html
    }
}

function load_x_model_animation_1(offset, mid) {
    let html = `<br>--->mid:${mid} offset: ${offset}
        <table>
        <tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> F${f32(offset + 8, is_little_endian)} </td> 
            <td> float ? </td>
        </tr>
        <tr>
            <td> F${f32(offset + 12, is_little_endian)} </td> 
            <td> float ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 32, is_little_endian)} </td> 
            <td> offset ? /32 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 36, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 40, is_little_endian)} </td> 
            <td> amount offset 1 ? /40 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 44, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 48, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 52, is_little_endian)} </td> 
            <td> offset ? /52 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 56, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 60, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`

    if (u32(offset + 52, is_little_endian) !== 0) {
        html += load_x_model_animation_1_1(u32(offset + 52, is_little_endian) + mid)
    }

    document.getElementById("file_editor").innerHTML = html

    function load_x_model_animation_1_1(offset) {
        let html = `<br>--->offset: ${offset}
        <table>
        <tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> amount 1/4 ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 4, is_little_endian)} </td> 
            <td> amount 3 ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> amount 2 ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} / ${u32(offset + 12, is_little_endian)+mid} </td> 
            <td> offset 1 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} / ${u32(offset + 16, is_little_endian)+mid} </td> 
            <td> offset 2 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} / ${u32(offset + 20, is_little_endian)+mid} </td> 
            <td> offset 3 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} / ${u32(offset + 24, is_little_endian)+mid} </td> 
            <td> offset 4 </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} / ${u32(offset + 28, is_little_endian)+mid} </td> 
            <td> offset 5 ?? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 32, is_little_endian)} / ${u32(offset + 32, is_little_endian)+mid} </td> 
            <td> offset 6 ?? </td>
        </tr>
    </tbody>
    </table>`

        return html
    }
}
function load_x_model_animation_2(offset, mid) {
    let html = `<br>--->mid:${mid} | offset: ${offset}
        <table>
        <tbody>
        <tr>
            <td> ${u32(offset, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> [ ${u8(offset + 4, is_little_endian)}, ${u8(offset + 5, is_little_endian)}, ${u8(offset + 6, is_little_endian)}, ${u8(offset + 7, is_little_endian)} ] </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 8, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 12, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 16, is_little_endian)} </td> 
            <td> offset ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 20, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 24, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
        <tr>
            <td> ${u32(offset + 28, is_little_endian)} </td> 
            <td> ? </td>
        </tr>
    </tbody>
    </table>`

    for (let i = 0; i < u32(offset, is_little_endian); i++) {
        html += load_x_model_animation_2(u32(offset + 16, is_little_endian) + mid + (i * 32), i)
    }

    document.getElementById("file_editor").innerHTML = html

    function load_x_model_animation_2(offset, i) {
        let html = `<br>---${i}> F${f32(offset + 0, is_little_endian)} | F${f32(offset + 4, is_little_endian)} | F${f32(offset + 8, is_little_endian)} | F${f32(offset + 12, is_little_endian)} | F${f32(offset + 16, is_little_endian)} | F${f32(offset + 20, is_little_endian)} | F${f32(offset + 24, is_little_endian)} | F${f32(offset + 28, is_little_endian)}  `
        return html
    }

}
