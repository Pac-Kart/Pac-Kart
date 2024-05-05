"use strict";
function ex_patch(o, a, x, m) {
    // o = offset
    // a = array
    // x = file array
    // m = model offset

    if (x !== -1 && o) {
        x[0][0] = o

        if (x[0][3] === "m") {
            su32(o, m)
        } else {
            if (g.console === 'gamecube') {
                if (x[0][3] === "s") {
                    su16(o, x[0][1])
                    su16(o + 2, x[0][2])
                } else {
                    su16(o, x[0][2])
                    su8(o + 2, x[0][1])
                }
            } else {

                su16(o + 0, x[0][1])
                if (x[0][3] === "s") {
                    su16(o + 2, x[0][2])
                } else {
                    su16(o + 2, 52428)
                }
            }
        }
        a.push(x[0])
    }
    // ex_patch(o + 4, texturearray, x.texture) ?
}

// end_block = dyn_multilink(XFA.type_section_08, frame_array, dyn_frame, outer_XFA.frames, offset + 8, mid, end_block)

// end_block = ex_ml(XFA.texture_04, model_array, dyn_model, main_XFA.models, offset + 4, mid, end_block,true,true,"model")
function ex_ml(ID, ARRAY, FUNCTION, XFA, OFFSET, END_OFFSET, GLOBAL_OFFSET, IS_APPEND, CUSTOM, model_offset_temp) {
    if (ID !== 0) {
        if (FUNCTION.name === "ex_models" && Array.isArray(ID)) {
            ex_patch(OFFSET, g.model_patch_array, ID, model_offset_temp)
            return END_OFFSET
        } else {

            let temp_index = ARRAY[0].a_ids.indexOf(ID)
            if (temp_index === null) {
                //not linked
                console.log(XFA, 'not linked')
                return END_OFFSET
            } else {

                let temp_offset = ARRAY[0].a_offsets[temp_index]

                if (GLOBAL_OFFSET === 'up') {
                    g.oa.push(OFFSET)
                }

                if (temp_offset === false) {
                    //append first time

                    ARRAY[0].a_offsets[temp_index] = END_OFFSET
                    temp_offset = ARRAY[0].a_offsets[temp_index]
                    END_OFFSET = FUNCTION(temp_offset, XFA[temp_index])

                }
                if (GLOBAL_OFFSET === 'down') {
                    g.oa.push(OFFSET)
                }

                if (IS_APPEND) {
                    su32(OFFSET, temp_offset)
                } else {
                    su32(OFFSET, temp_offset)
                }
                if (CUSTOM === "model") {
                    g.model_patch_array.push([OFFSET, temp_index, 0])
                }
            }
        }
    } else {// console.log(XFA,'nonlinked')
    }
    return END_OFFSET
}

function ex_ma(XFA, ARRAY, FUNCTION, OFFSET, MID) {
    // wats ex ma
    //multi append section
    let END_OFFSET = OFFSET
    if (XFA.length) {

        let temp_index

        for (let i = 0; i < XFA.length; i++) {
            END_OFFSET = ex_byte_alignment_testing(END_OFFSET)
            temp_index = ARRAY[0].a_ids.indexOf(XFA[i].id)

            if (temp_index === null) {
                //not linked
                console.log(XFA, 'not linked')
                return END_OFFSET
            } else {
                ARRAY[0].a_offsets[temp_index] = END_OFFSET - MID
                END_OFFSET = FUNCTION(END_OFFSET, XFA[temp_index])
            }
        }
    }
    return END_OFFSET
}

//end_block = dyn_string(end_block, XFA.name_00, mid)
// e = ex_string(o + 4, e, x.name_00)

function ex_string(o, e, x, d, oa) {
    // o = offset
    // e = end
    // x = file array
    // d = divisible
    // oa = offset array 

    if (x[0] !== null && x[0] !== "") {

        if (oa === 0) {} else {
            g.oa.push(o)
        }

        su32(o, e)

        if (d === undefined) {
            d = g.divisibility
        }

        let i = 0
        if (x.length) {

            for (; i < x[0].length; i++) {
                su8(e + i, x[0][i].charCodeAt())
            }
            i++
            i = divisible(i, d)
        }
        return e + i
    }
    return e

}

// if (XFA.string_04 !== null) {
//     su32(offset + 4, end_block - mid)
//     g.oa.push(offset + 4 - mid)
//     end_block = dyn_string(end_block, XFA.string_04, mid)
// }

function dyn_string(offset, XFA_string, mid, divis) {
    if (divis === undefined) {
        divis = g.divisibility
    }
    let i = 0
    if (XFA_string.length) {

        for (; i < XFA_string.length; i++) {
            su8(offset + i, XFA_string[i].charCodeAt())
        }
        i++
        i = divisible(i, divis)
    }
    g.divisible_prev_value = [offset, XFA_string, mid, divis]
    return offset + i
}

function generate_id_offset_array(array, XFA) {
    if (XFA.length !== null) {

        array.push({
            a_ids: [],
            a_offsets: []
        })
        for (let i = 0; i < XFA.length; i++) {
            array[0].a_ids.push(XFA[i].id)
            array[0].a_offsets.push(false)
        }
    }
}

function replacement_divisibility(value, divisibility, offset, replacement) {
    let temp_value = value
    let i = 0
    g.divisible_prev_value = [value, divisibility, offset, replacement]
    while ((temp_value) % divisibility !== 0) {
        su8(offset + i, replacement)
        temp_value++
        i++
    }
    return temp_value
}

function ex_debug(o, a) {
    //print on file
    for (let i = 0; i < a.length; i++) {
        su8(o + i, a[i].charCodeAt())
    }
}

// maybe create offset   
// ex_s_offset(o + 4,e,ex_link,x.section_08,'up')
function ex_s_offset(o, e, f, x, p) {
    // o = offset
    // e = end
    // f = function
    // x = file array
    // p = offset array position

    if (o && x !== undefined && x.length) {
        su32(o, e)

        if (p === "up") {
            g.oa.push(o)
            e = f(e, x[0])
        } else if (p === "down") {
            e = f(e, x[0])
            g.oa.push(o)
        } else {
            e = f(e, x[0])
        }

        return e

    } else {
        return e
    }

}

function ex_find(y, n) {
    let html = `good val: ${y} -> ${y + g.m}\n bad val: ${n} -> ${n + g.m}`
    console.log(html)
}

function su8(o, v) {
    new DataView(dynamic_buffer).setUint8(o, v, g.endian)
}
function su16(o, v) {
    new DataView(dynamic_buffer).setUint16(o, v, g.endian)
}
function su32(o, v) {
    new DataView(dynamic_buffer).setUint32(o, v, g.endian)
}
function sf32(o, v) {
    new DataView(dynamic_buffer).setFloat32(o, v, g.endian)
}

function ex_byte_alignment_testing(o) {
    let e = o
    if (g.file_name === 'Autosave.xgc') {
        switch (o) {
        case 376:
        case 216384:
            e += 544
            break
        }
    }

    if (g.file_name === 'mcp.xgc') {
        switch (o) {
        case 224:
            e += 224
            break
        }
    }
    if (g.file_name === 'mcp.xpc') {
        switch (o) {
        case 32:
            e += 192
            break
        }
    }

    // if (g.file_name === 'gShared.xpc') {
    //     switch (o) {
    //     case 687972:
    //         o -= 16
    //         break
    //     case 950117:
    //         o += 16
    //         break
    //     }

    // }

    if (g.file_name === 'MCP.XPS') {
        switch (o) {
        case 4160:
            e += 192
            break
        }

    }
    if (g.file_name === 'AUTOSAVE.XPS') {
        switch (o) {
        case 4288:
        case 192704:
            e += 512
            break
        }

    }
    if (g.file_name === 'Autosave.xpc') {
        switch (o) {
        case 32:
            if (g.mmm === 208) {
                e += 512
            } else {
                e += 576
            }
            break
        }

    }
    // if (g.file_name === 'LOADING.XPS') {
    //     switch (o) {
    //     case 9184:
    //         e += 16
    //         break
    //     }

    // }

    if (g.file_name === 'mcp.xpp') {
        switch (o) {
        case 232:
            e += 192
            break
        }

    }

    if (g.file_name === 'MMa.xpc') {
        switch (o) {
        case 5796580:
            e += 8
            break
        }

    }
    if (g.file_name === "GMa.xpc") {
        switch (o) {
        case 6840016:
            e += 12
            break
        case 6857724:
            e += 16
            break
        }

    }
    if (g.file_name === "CCa.xpc") {
        switch (o) {
        case 9705448:
            e += 8
        }
    }
    // if (g.file_name === "Award.xpc") {
    //     switch (o) {
    //     case 1186356:
    //         e += 12
    //         break
    //     case 8201032:
    //         e += 8
    //         break

    //     }
    // }
    if (g.file_name === "SCa.xpc") {
        switch (o) {
        case 8334056:
            e += 8
            break
        }
    }
    if (g.file_name === "CG_l1.xpc") {
        switch (o) {
            // case 7925800:
            //     e += 8
            //     break
            // case 12648268:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "RH_l1.xpc") {
        switch (o) {
        case 8258152:
            e += 8
            break
            // case 13031660:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "FT_l1.xpc") {
        switch (o) {
        case 5497512:
            e += 8
            break
            // case 11302216:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "JS_L1.xpc") {
        switch (o) {
        case 7845884:
            e += 4
            break
        }
    }
    if (g.file_name === "WW_l1.xpc") {
        switch (o) {
        case 7170668:
            e += 4
            break
            // case 12063756:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "TF_l1.xpc") {
        switch (o) {
        case 6507032:
            e += 8
            break
            // case 12063756:
            //     e+=16
            //     break
        }
    }
    if (g.file_name === "FH_l1.xpc") {
        switch (o) {
            // case 11877468:
            //     e += 16
            //     break
            // case 12063756:
            //     e+=16
            //     break
        }
    }
    if (g.file_name === "SC_l1.xpc") {
        switch (o) {
        case 12137172:
            e += 8
            break
        case 12159868:
            e += 16
            break
        }
    }
    if (g.file_name === "LL_l1.xpc") {
        switch (o) {
        case 13832224:
            e += 12
            break
        case 13853100:
            e += 16
            break
        }
    }
    if (g.file_name === "LLa.xpc") {
        switch (o) {
        case 6170156:
            e += 16
            break
        }
    }

    if (g.file_name === "MM_l1.xpc") {
        switch (o) {
        case 6130808:
            e += 8
            break
            // case 13853100:
            //     e+=16
            //     break
        }
    }

    if (g.file_name === "GM_l1.xpc") {
        switch (o) {
        case 7982260:
            e += 12
            break
            // case 13853100:
            //     e+=16
            //     break
        }
    }
    if (g.file_name === "CC_l1.xpc") {
        switch (o) {
        case 8100540:
            e += 4
            break
        case 14136264:
            e += 8
            break
        }
    }
    if (g.file_name === "PC_l1.xpc") {
        switch (o) {
        case 8337880:
            e += 8
            break
            // case 19336884:
            //     e+=8
            //     break
        }
    }
    if (g.file_name === "KK_l1.xpc") {
        switch (o) {
        case 9576516:
            e += 8
            break
        case 9596300:
            e += 16
            break
        }
    }
    if (g.file_name === "KartWorks.xpc") {
        switch (o) {
        case 536672:
            e += 16
            break
        }
    }
    if (g.file_name === "gShared.xgc") {
        switch (o) {
        case 532404:
            e += 16
            break
        }
    }
    if (g.file_name === "Intrface.xgc") {
        switch (o) {
        case 568:
            e += 64
            break
        }
    }

    // if (g.file_name === "Kart.xpc") {
    //     switch (o) {
    //     case 875344:
    //     case 1087920:
    //     case 1610576:
    //     case 3259408:
    //     case 4884780:
    //     case 6422780:
    //     case 8569808:
    //     case 10171192:
    //     case 12011680:
    //     case 12012720:
    //     case 12020928:
    //     case 14019976:
    //     case 15984336:
    //     case 17911252:
    //     case 20020604:
    //     case 21863008:
    //     case 23669864:
    //     case 25474492:
    //         case 27308204:
    //         case 28683348:
    //         case 30462808:
    //         case 32202820:
    //         case 33635648:
    //         case 34939860:
    //         case 38187680:
    //         case 39772628:
    //         case 39798452:
    //                     case 36708948:
    //         case 41504368:
    //         case 43081424:
    //         case 44682808:
    //         case 46441228:
    //         case 47977752:
    //         case 49513556:
    //         case 51096992:
    //             case 52774956:
    //         case 54043008:
    //             case 55689448:
    //         e -= 16
    //         break
    //     case 12012716:
    //         case 39773664:
    //         e -= 12
    //         break
    //     case 15548580:
    //     case 15548580:
    //     case 15580356:
    //     case 15612132:
    //     case 21514068:
    //     case 21562580:
    //         case 42823364:
    //         case 42855140:
    //         case 47771724:
    //         case 47795980:
    //         e -= 4
    //         break
    //     case 12977412:
    //     case 15010892:
    //     case 16758640:
    //     case 19562040:
    //     case 20910524:
    //     case 21538324:
    //     case 24949832:
    //     case 26941960:
    //     case 37959724:
    //         case 46166568:
    //         case 50800588:
    //         case 52538120:
    //         e += 4
    //         break
    //     case 15516792:
    //     case 21507880:
    //     case 21508168:
    //     case 21532136:
    //     case 21532424:
    //     case 21556392:
    //     case 21556680:
    //         case 28457580:
    //         case 42791576:
    //         case 47765536:
    //         case 47765824:
    //         case 47789792:
    //         case 47790080:
    //         case 53917944: 
    //         e += 8
    //         break
    //     case 2826932:
    //     case 4550816:
    //     case 6166016:
    //     case 6167104:
    //     case 8105364:
    //     case 9794300:
    //     case 11668692:
    //     case 13558812:
    //     case 15516948:
    //     case 15516996:
    //     case 15517284:
    //     case 15548724:
    //     case 15548772:
    //     case 15549060:
    //     case 15580500:
    //     case 15580548:
    //     case 15580836:
    //     case 17408728:
    //     case 21489796:
    //     case 21489956:
    //     case 21490004:
    //     case 21490228:
    //     case 21514212:
    //     case 21514260:
    //     case 21514484:
    //     case 21538468:
    //     case 21538516:
    //     case 21538740:
    //     case 23271436:
    //     case 23275500:
    //     case 24942800:
    //     case 24949936:
    //     case 26935456:
    //         case 28460248:
    //         case 30087212:
    //         case 30091820:
    //         case 31942872:
    //         case 33388628:
    //         case 34779336:
    //         case 34780424:
    //         case 36400344:
    //         case 37956020:
    //         case 39572936:
    //         case 41260772:
    //         case 42791732:
    //         case 42791780:
    //         case 42792068:
    //         case 42823508:
    //         case 42823556:
    //         case 42823844:
    //         case 44408636:
    //         case 47747452:
    //         case 47747612:
    //         case 47747660:
    //         case 47747884:
    //         case 47771868:
    //         case 47771916:
    //         case 47772140:
    //         case 49268424:
    //         case 49272488:
    //         case 50793556:
    //         case 50800692:
    //         case 52531616:
    //         case 55402940:
    //             case 55407548:
    //         e += 12
    //         break
    //     case 536672:
    //     case 924480:
    //     case 1186208:
    //     case 2231040:
    //     case 2310992:
    //     case 2329984:
    //     case 2330848:
    //     case 2334560:
    //     case 2341792:
    //     case 2353312:
    //     case 2359232:
    //     case 2383168:
    //     case 2394688:
    //     case 2450720:
    //     case 2595792:
    //     case 2636608:
    //     case 2665440:
    //     case 2721936:
    //     case 2733056:
    //     case 2816592:
    //     case 2820336:
    //     case 2822512:
    //     case 4169644:
    //     case 4176604:
    //     case 4186044:
    //     case 4263596:
    //     case 4277164:
    //     case 4304620:
    //     case 4478556:
    //     case 4509804:
    //     case 4535868:
    //     case 4539900:
    //     case 5649708:
    //     case 5668828:
    //     case 5688412:
    //     case 5694876:
    //     case 5696044:
    //     case 5759852:
    //     case 5864236:
    //     case 5865404:
    //     case 5881980:
    //     case 5921884:
    //     case 5963804:
    //     case 6009740:
    //     case 6057532:
    //     case 6159436:
    //     case 7486608:
    //     case 7646960:
    //     case 7686560:
    //     case 7688736:
    //     case 7752976:
    //     case 7837168:
    //     case 7900752:
    //     case 7933312:
    //     case 7965424:
    //     case 7997536:
    //     case 8055344:
    //     case 8100784:
    //     case 9468168:
    //     case 9471784:
    //     case 9502904:
    //     case 9522616:
    //     case 9645432:
    //     case 9666488:
    //     case 9680040:
    //     case 9737752:
    //     case 9768200:
    //     case 9785976:
    //     case 9790008:
    //     case 11289360:
    //     case 11292976:
    //     case 11316208:
    //     case 11348176:
    //     case 11494928:
    //     case 11524000:
    //     case 11560304:
    //     case 11597024:
    //     case 11633744:
    //     case 11657504:
    //     case 11661536:
    //     case 11663840:
    //     case 13260712:
    //     case 13262552:
    //     case 13265448:
    //     case 13274792:
    //     case 13293112:
    //     case 13458424:
    //     case 13467768:
    //     case 15213552:
    //     case 15232448:
    //     case 15242832:
    //     case 15324288:
    //     case 15432944:
    //     case 15510480:
    //     case 16942260:
    //     case 17040212:
    //     case 17066580:
    //     case 17102324:
    //     case 17107908:
    //     case 17109780:
    //     case 17113828:
    //     case 17178500:
    //     case 17297732:
    //     case 17374900:
    //     case 17399252:
    //     case 17403012:
    //     case 19086348:
    //     case 19196588:
    //     case 19357276:
    //     case 19376748:
    //     case 19397164:
    //     case 19446556:
    //     case 19491820:
    //     case 19531036:
    //     case 19552364:
    //     case 21077392:
    //     case 21314256:
    //     case 21326928:
    //     case 21461504:
    //     case 21483760:
    //     case 22727704:
    //     case 22952536:
    //     case 23019608:
    //     case 23028968:
    //     case 23041944:
    //     case 23063992:
    //     case 23191704:
    //     case 23233784:
    //     case 26881612:
    //         case 27923732:
    //         case 27927492:
    //         case 27938148:
    //         case 27945076:
    //         case 27955028:
    //         case 27961956:
    //         case 27972772:
    //         case 28016868:
    //         case 28027796:
    //         case 28037028:
    //         case 28040804:
    //         case 28051460:
    //         case 28058388:
    //         case 28068340:
    //         case 28075268:
    //         case 28086100:
    //         case 28130196:
    //         case 28141124:
    //         case 28154628:
    //         case 28162980:
    //         case 28186148:
    //         case 28193076:
    //         case 28200004:
    //         case 28206932:
    //         case 29662824:
    //         case 29665016:
    //         case 29668504:
    //         case 29779144:
    //         case 29781352:
    //         case 29784840:
    //         case 30023944:
    //         case 31352884:
    //         case 31432836:
    //         case 31451828:
    //         case 31452692:
    //         case 31456404:
    //         case 31463636:
    //         case 31475156:
    //         case 31481076:
    //         case 31505012:
    //         case 31516532:
    //         case 31572564:
    //         case 31717636:
    //         case 31758452:
    //         case 31787284:
    //         case 31843780:
    //         case 31854900:
    //         case 31938436:
    //         case 33013664:
    //         case 33020624:
    //         case 33030064:
    //         case 33107616:
    //         case 33121184:
    //         case 33148640:
    //         case 33322576:
    //         case 33353824:
    //         case 34296964:
    //         case 34316084:
    //         case 34335668:
    //         case 34342132:
    //         case 34343300:
    //         case 34407108:
    //         case 34511492:
    //         case 34512660:
    //         case 34529236:
    //         case 34569140:
    //         case 34611060:
    //         case 34656996:
    //         case 34757716:
    //         case 35781588:
    //         case 35941940:
    //         case 35981540:
    //         case 35983716:
    //         case 36047956:
    //         case 36132148:
    //         case 36195732:
    //         case 36228292:
    //         case 36260404:
    //         case 36292516:
    //         case 36350324:
    //         case 36395764:
    //         case 37633936:
    //         case 37637552:
    //         case 37668672:
    //         case 37688384:
    //         case 37811200:
    //         case 37832256:
    //         case 37845808:
    //         case 37903520:
    //         case 37933968:
    //         case 37951744:
    //         case 39152196:
    //         case 39155812:
    //         case 39179044:
    //         case 39211012:
    //         case 39357764:
    //         case 39386836:
    //         case 39423140:
    //         case 39459860:
    //         case 39496580:
    //         case 39520340:
    //         case 40953840:
    //         case 40955680:
    //         case 40958576:
    //         case 40967920:
    //         case 40986240:
    //         case 41151552:
    //         case 41160896:
    //         e += 16
    //         break
    //     case 3658876:
    //     case 5279340:
    //     case 6819920:
    //     case 8970392:
    //     case 10570480:
    //     case 12417988:
    //     case 14418284:
    //     case 16376576:
    //     case 18307996:
    //     case 20417084:
    //         e += 608
    //         break
    //     case 2824736:
    //         // e += 2096
    //         break
    //         case 49413972:
    //             e+= 6592
    //             break
    //         case 36619972:
    //         case 50994544:
    //             e+= 6608
    //             break
    //     case 8478032:
    //     case 23567464:
    //     case 25369244:
    //         case 30341016:
    //         case 32132516:
    //         case 33494048:
    //         case 38124800:
    //         case 39725428:
    //         case 41421904:
    //         case 52707020:
    //         case 54019776:
    //         e += 6656
    //         break
    //     case 27240252:
    //         case 34882404:
    //         case 43031328:
    //         case 44626856:
    //         case 46362460:
    //         case 47926344:
    //         case 55573112:
    //         e += 6672
    //         break
    //     case 13934696:
    //     case 21808800:
    //         case 28660052:
    //         e += 6720
    //         break
    //     case 3186272:
    //     case 4740348:
    //     case 6362508:
    //     case 10105480:
    //     case 11961648:
    //     case 15931424:
    //     case 17852484:
    //     case 19939020:
    //         e += 6736
    //         break
    //     }
    // }

    return e

}
