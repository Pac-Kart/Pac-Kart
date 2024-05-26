function tempimporter(id=null) {
    const import_button = document.getElementById("canvas_import_scene");
    if (import_button) {
        document.getElementById("canvas_import_scene").addEventListener('change', function(e) {

            let file_temp = e.target.files[0];

            let filename = file_temp.name
            let fileextension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
            fileextension = fileextension.toLowerCase()

            let loader;
            switch (fileextension) {
            case "gltf":
            case "glb":
                loader = new THREE.GLTFLoader()
                break
            case "obj":
                loader = new THREE.OBJLoader()
                break
            default:
                alert(fileextension + " not parsable")
                return
            }
            let blobURL = URL.createObjectURL(file_temp);

            loader.load(blobURL, function(loaded_obj) {
                let tempview = document.getElementsByClassName("file_is_highlighted")[0]
                let level = 0
                switch (tempview.dataset.type) {
                case 'x_d_models__folder':
                    level = 2
                    break
                case 'x_d_model__sections':
                    level = 1
                    break
                case 'x_d_model__model':
                    // level = 0
                    break
                }
                tempview.dataset.type === 'x_d_model__sections'
                //full, section, model
                let meshobjects = []
                if (fileextension !== 'obj') {
                    loaded_obj = loaded_obj.scene
                }
                meshobjects = get_meshes_from_gltf(loaded_obj, meshobjects)
                if (meshobjects.length === 0) {
                    alert('no mesh found')
                    return
                }
                if (level === 0 && meshobjects[0]?.list.length > 1) {
                    alert(`too many materials found, 1 expected but ${meshobjects[0]?.list.length} appeared`)
                    return
                }

                if (level < 2 && meshobjects.length > 1) {
                    alert(`too many meshes found, 1 is expected but ${meshobjects.length} appeared`)
                    return
                }

                if (level === 0) {
                    console.log(meshobjects[0]?.list[0]?.geometry, 'indexes')
                    import_models_04_04_00(meshobjects[0]?.list[0]?.geometry?.attributes, TXFA)

                    tempview.click()
                } else if (level === 1) {
                    TXFA.sub_section = []
                    for (let innermesh of meshobjects[0]?.list) {
                        import_models_04(innermesh?.geometry?.attributes, TXFA)
                    }
                    let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
                    let html = ''

                    for (let i = outer_html.children.length - 1; i > 2; i--) {
                        outer_html.children[i].remove()
                    }

                    for (let i = 0; i < TXFA.sub_section.length; i++) {
                        html += dynamic__model_sub_section(TXFA.sub_section[i], i)
                    }

                    outer_html.innerHTML += html
                    outer_html.children[0].click()
                    outer_html.children[0].click()
                    file_viewer.focus()

                    document.getElementsByClassName("file_is_highlighted")[0].click()

                } else {
                    let modelids = []
                    for (let meshes of meshobjects) {
                        import_models(meshes, TXFA, modelids)
                        for (let innermesh of meshes?.list) {
                            import_models_04(innermesh?.geometry?.attributes, TXFA[TXFA.length - 1].sections[0])
                        }

                    }

                    if (id !== null && modelids.length) {
                        if (document.getElementById('world_scene')?.checked) {
                            //replace in world scene
                            let tempx = go_back_up(id)
                            let type5 = tempx.datapack[0].ordered[0].file_specific[0].section_20[0].type_5
                            let i = 0
                            for (; i < modelids.length && i < type5.length; i++) {
                                type5[i].ordered_models_100 = modelids[i]
                            }
                            for (; i < type5.length; i++) {
                                type5[i].ordered_models_100 = 0
                            }
                            //include in world scene
                            //there may be a hidden count somewhere else breaking this
                            // for (let i = 0; i < modelids.length; i++) {
                            //     type5.push({
                            //         id: gen_id(),
                            //         section_00: [{
                            //             u32_00: 362,
                            //             u16_04: 5,
                            //             u16_06: 0,
                            //             u16_12: 1,
                            //             u16_14: 8,
                            //             u16_16: 1,
                            //             u16_18: 8,
                            //         }],
                            //         f32_32: 1,
                            //         f32_52: 1,
                            //         f32_72: 1,
                            //         f32_92: 1,
                            //         u8_96: 0,
                            //         ordered_models_100: modelids[i],
                            //     })
                            // }
                        }
                    }

                    let outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
                    let html = ''

                    for (let i = outer_html.children.length - 1; i > 2; i--) {
                        outer_html.children[i].remove()
                    }

                    for (let i = 0; i < TXFA.length; i++) {
                        html += dynamic_order_file(TXFA, i, 'models', 0)
                    }

                    outer_html.innerHTML += html
                    outer_html.children[0].click()
                    outer_html.children[0].click()
                    file_viewer.focus()

                }
                

            }, function(xhr) {}, function(error) {

                console.log('bru');

            });

        })
    }

}

function get_meshes_from_gltf(gltf, array) {
    let count = 0
    var target = new THREE.Vector3();

    for (let child of gltf.children) {

        if (child.type === 'Group') {

            array.push({
                list: [],
                name: child.name ? child.name : 'Blank'
            })
            for (let childchild of child.children) {
                if (childchild.type === 'Mesh') {
                    array[count].list.push(get_atr(childchild))
                }
            }

            count++
        } else if (child.type === 'Mesh') {
            array.push({
                list: [get_atr(child)],
                name: child.name ? child.name : 'Blank',
            })
            count++
        }

    }

    function get_atr(obj) {
        var target = new THREE.Vector3();

        obj.localToWorld(target);

        let world_position = obj.getWorldPosition(target);
        if (world_position.x || world_position.y || world_position.z) {
            let positionarray = obj.geometry.attributes.position.array
            let world_x = world_position.x
            let world_y = world_position.y
            let world_z = world_position.z
            for (let i = 0; i < positionarray.byteLength / 3; i += 3) {
                let newx = positionarray[i] + world_x
                let newy = positionarray[i + 1] + world_y
                let newz = positionarray[i + 2] + world_z
                positionarray[i] = newx
                positionarray[i + 1] = newy
                positionarray[i + 2] = newz
            }
            let indexs = obj.geometry.index.array
            if (indexs.byteLength) {

                let floatarray = new Float32Array(indexs.length * 3)
                for (let i = 0, fi = 0; i < indexs.length; i++,
                fi += 3) {
                    let newindex = indexs[i]
                    floatarray[fi] = positionarray[newindex * 3]
                    floatarray[fi + 1] = positionarray[(newindex * 3) + 1]
                    floatarray[fi + 2] = positionarray[(newindex * 3) + 2]
                }
                obj.geometry.attributes.position.array = floatarray
            }
        }
        return obj
    }

    return array

}
function import_models(gltfobj, x, array) {
    let xid = gen_id()
    array.push(xid)
    let visibility = {}
    if (gltfobj?.list[0]?.geometry?.boundingSphere) {
        let center = gltfobj.list[0].geometry.boundingSphere.center
        let radius = gltfobj.list[0]?.geometry.boundingSphere.radius
        visibility.x1 = center.x
        visibility.y1 = center.y
        visibility.z1 = center.z
        visibility.w1 = radius
    } else {
        visibility.x1 = -263.7958984375
        visibility.y1 = 837.5137939453125
        visibility.z1 = -7.7471923828125
        visibility.w1 = 5921.546875
    }

    if (gltfobj?.list[0]?.geometry?.boundingBox?.min) {
        let min = gltfobj.list[0].geometry.boundingBox.min
        visibility.x2 = min.x
        visibility.y2 = min.y
        visibility.z2 = min.z
    } else {
        visibility.x2 = -4326.033203125
        visibility.y2 = -598.165283203125
        visibility.z2 = -4069.984130859375
    }

    visibility.w2 = 1

    if (gltfobj?.list[0]?.geometry?.boundingBox?.max) {
        let max = gltfobj.list[0].geometry.boundingBox.max
        visibility.x3 = max.x
        visibility.y3 = max.y
        visibility.z3 = max.z
    } else {
        visibility.x3 = 3798.44140625
        visibility.y3 = 2273.19287109375
        visibility.z3 = 4054.48974609375
    }

    visibility.w3 = 1

    x.push({
        id: xid,
        magic: 1537,
        name: gltfobj.name,
        sections: [{
            id: gen_id(),
            render: 100000000,
            sub_section: [],
        }],
        second_names: ['temp'],
        name_padding: 32,
        visibility: {
            x1: visibility.x1,
            y1: visibility.y1,
            z1: visibility.z1,
            w1: visibility.w1,
            x2: visibility.x2,
            y2: visibility.y2,
            z2: visibility.z2,
            w2: visibility.w2,
            x3: visibility.x3,
            y3: visibility.y3,
            z3: visibility.z3,
            w3: visibility.w3,
        }
    })
    return array
}

function import_models_04(gltfobj, x) {
    x.sub_section.push({
        id: gen_id(),
        v_array: [],
        c_array: [],
        n_array: [],
        u_array: [],
        s_array: [],
        unknown_00: 0,
        unknown_08: 1432546377,
        unknown_12: 0,
        unknown_13: 0,
        unknown_15: 0,
        unknown_16: 1552,
        unknown_24: 1,
        unknown_24_animation: -1,
        unknown_28: 1,
        texture: [[0, 0, 0, 't']],
        animation: -1,
        unknown_44: 255,
        unknown_45: 255,
        unknown_46: 255,
        unknown_47: 255,
        unknown_48: 0,
        unknown_49: 0,
        unknown_52: 0,
        unknown_53: 0,
        unknown_54: 0,
        unknown_55: 0,
        unknown_56: 4656,
        unknown_60: 13,
        unknown_64: 0,
        unknown_88: 1,
        section_92: [{
            amount_00: 1552,
            section_12: [],
        }],

    })
    import_models_04_04_00(gltfobj, x.sub_section[x.sub_section.length - 1])
}

function import_models_04_04_00(gltfobj, x) {
    if (gltfobj?.position) {
        x.v_array = gltfobj.position.array.buffer
        x.unknown_56 = (x.v_array.byteLength / 12)
        x.unknown_00 = 0
        x.section_92[0].amount_00 = (x.v_array.byteLength / 36)
        x.section_92[0].section_12 = []
        x.n_array = []
        x.s_array = []
    } else {
        x.v_array = []
        x.section_92[0].amount_00 = 0
    }
    if (gltfobj?.uv) {
        x.u_array = gltfobj.uv.array.buffer
    } else {
        x.u_array = []
    }
    if (gltfobj?.color && gltfobj?.color?.array?.constructor?.name === "Float32Array") {
        let float_buffer = gltfobj.color.array.buffer
        let color_buffer = new ArrayBuffer(float_buffer.byteLength / 4)
        for (let i = 0; i < color_buffer.byteLength; i++) {
            let float = new DataView(float_buffer).getFloat32(i * 4, true)
            new DataView(color_buffer).setUint8(i, float * 255, true)
        }
        x.c_array = color_buffer
    } else {
        let newc_array = new ArrayBuffer((x.v_array.byteLength / 3))
        for (let index = 0; index < newc_array.byteLength; index++) {
            new DataView(newc_array).setUint8(index, 255, true)
        }
        x.c_array = newc_array
    }

    if (gltfobj?.normal) {// x.n_array = gltfobj.normal.array.buffer
    } else {
        x.n_array = []
    }

}
