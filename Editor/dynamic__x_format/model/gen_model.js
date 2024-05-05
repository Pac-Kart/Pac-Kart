"use strict";
function gen_model_box(models, editable=[]) {

    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer();

    //models = array
    //editable = array

    let canvsa_exists
    let x_observ = 0
    function stop_animate() {
        cancelAnimationFrame(canvsa_exists)
        function disposeNode(node) {
            if (node instanceof THREE.Mesh) {
                if (node.geometry) {
                    node.geometry.dispose();
                }

                if (node.material) {
                    if (node.material.map)
                        node.material.map.dispose();
                    if (node.material.lightMap)
                        node.material.lightMap.dispose();
                    if (node.material.bumpMap)
                        node.material.bumpMap.dispose();
                    if (node.material.normalMap)
                        node.material.normalMap.dispose();
                    if (node.material.specularMap)
                        node.material.specularMap.dispose();
                    if (node.material.envMap)
                        node.material.envMap.dispose();
                    if (node.material.alphaMap)
                        node.material.alphaMap.dispose();
                    if (node.material.aoMap)
                        node.material.aoMap.dispose();
                    if (node.material.displacementMap)
                        node.material.displacementMap.dispose();
                    if (node.material.emissiveMap)
                        node.material.emissiveMap.dispose();
                    if (node.material.gradientMap)
                        node.material.gradientMap.dispose();
                    if (node.material.metalnessMap)
                        node.material.metalnessMap.dispose();
                    if (node.material.roughnessMap)
                        node.material.roughnessMap.dispose();
                    node.material.dispose();
                }
            }
        }
        while (scene.children.length) {
            disposeNode(scene.children[0])
            for (var variableKey in scene.children[0]) {
                if (scene.children[0].hasOwnProperty(variableKey)) {
                    delete scene.children[0][variableKey];
                }
            }
            scene.remove(scene.children[0]);
        }
        renderer.renderLists.dispose();
        renderer.dispose()
        renderer.forceContextLoss()
        for (var variableKey in renderer) {
            if (renderer.hasOwnProperty(variableKey)) {
                delete renderer[variableKey];
            }
        }
        scene.clear()
    }
    var x = new MutationObserver(function(e) {
        if (x_observ === 0) {
            stop_animate()
            x_observ = 1
        }
    }
    );
    x.observe(document.getElementById('file_editor'), {
        childList: true
    });

    const add_button = document.getElementById("canvas_add_point");
    if (add_button) {
        document.getElementById("file_editor").addEventListener('click', function(event) {
            const target = event.target;
            if (target.id === 'canvas_add_point' || target.id === 'canvas_delete_point') {
                dyn_update_point_list(event);
            }
        });
    }

    function dyn_update_point_list(e) {
        let type = selected_obj.object.name
        if (type === 'sound') {// ${generate_linkbox(xid, 'unordered_sound_controls_48', 'sound_controls', xref.unordered_sound_controls_48)}<br>
        // x = 'f32_32'
        // y = 'f32_36'
        // z = 'f32_40'

        }
    }

    var camera = new THREE.PerspectiveCamera(75,file_editor.clientWidth / file_editor.clientHeight,0.1,100000);
    renderer.setSize(file_editor.clientWidth, file_editor.clientHeight);

    document.getElementById('outer_canvas').appendChild(renderer.domElement);
    var controls = new THREE.OrbitControls(camera,renderer.domElement);

    //non editable geometry
    for (let i = 0; i < models.length; i++) {
        var geometry = new THREE.BufferGeometry();

        var vertices = models[i].v_array
        var uvs = models[i].u_array
        var normals = models[i].n_array
        var colors = models[i].c_array
        var normalizedColors = [];
        for (var ii = 0; ii < colors.byteLength; ii += 4) {
            normalizedColors.push(new DataView(colors).getUint8(ii) / 255, new DataView(colors).getUint8(ii + 1) / 255, new DataView(colors).getUint8(ii + 2) / 255, new DataView(colors).getUint8(ii + 3) / 255);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices),3));
        geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs),2));
        geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals),3));
        geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(normalizedColors),4));

        const material = new THREE.MeshBasicMaterial({
            vertexColors: normalizedColors.length
        });
        var mesh = new THREE.Mesh(geometry,material);
        scene.add(mesh);

        var vertexMaterial = new THREE.PointsMaterial({
            color: 0xff0000,
            size: 0.1
        });

        if (g?.cam?.lines === true) {
            var verticesLines = new THREE.LineSegments(geometry,vertexMaterial);

            scene.add(verticesLines);
        }

    }

    let editable_objects = []
    for (let model of editable) {
        let mesh

        mesh = new THREE.Mesh(new THREE.SphereGeometry(10,10,10),new THREE.MeshBasicMaterial({
            color: "rgb(255, 0, 0)"
        }))
        mesh.position.set(model.x, model.y, model.z)

        scene.add(mesh);
        mesh.name = model.type
        mesh.ref = model.ref
        mesh.xid = model.id

        if (mesh.name === 'route_point') {
            let width = mesh.ref.f32_68
            for (let i = 0; i < mesh.ref.section_64.length; i++) {
                let index = mesh.ref.section_64[i].u32_00
                let next_model = editable[index]
            }

        }
        editable_objects.push(mesh)

    }
    if (editable_objects.length) {

        const dragcontrol = new THREE.DragControls(editable_objects,camera,renderer.domElement)

        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

        var intersects = raycaster.intersectObjects(editable_objects, true);

        function onMouseMove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function render() {
            raycaster.setFromCamera(mouse, camera);
            raycaster.intersectObjects(scene.children);

            for (var i = 0; i < intersects.length; i++) {
                intersects[i].object.material.color.set(0x0000ff);
            }

            renderer.render(scene, camera);
        }
        window.addEventListener('mousemove', onMouseMove, false);
        window.requestAnimationFrame(render);

        var selected_obj = null
        dragcontrol.addEventListener('dragstart', (event)=>{
            controls.enabled = false;
            if (event.object.name === 'route_point') {
                route_connect()
            }
            if (selected_obj) {
                selected_obj.object.material.color.r = 1
                selected_obj.object.material.color.g = 0
                selected_obj.object.material.color.b = 0
            }

            let color = event.object.material.color
            color.r = 0
            color.g = 0
            color.b = 1
            edit_side_panel(event.object)
            selected_obj = event
        }
        )

        dragcontrol.addEventListener('drag', (event)=>{
            controls.enabled = false;
            let new_position = selected_obj.object.position
            if (document.getElementById('sidebar_x_position')) {
                sidebar_x_position.value = new_position.x
                sidebar_y_position.value = new_position.y
                sidebar_z_position.value = new_position.z
            }
            if (event.object.name === 'route_point') {
                let xref = selected_obj.object.ref
                xref.f32_32 = new_position.x
                xref.f32_36 = new_position.y
                xref.f32_40 = new_position.z

                route_connect()
            }

        }
        )

        dragcontrol.addEventListener('dragend', (event)=>{
            controls.enabled = true;
            let new_position = selected_obj.object.position
            let xref = selected_obj.object.ref
            if (event.object.name === 'respawn_type4') {
                xref.f32_80 = new_position.x
                xref.f32_84 = new_position.y
                xref.f32_88 = new_position.z
            } else {
                xref.f32_32 = new_position.x
                xref.f32_36 = new_position.y
                xref.f32_40 = new_position.z
            }
            if (event.object.name === 'route_point') {
                route_connect()
            }
        }
        )

    }

    var ambientLight = new THREE.AmbientLight(0xffffff,0.5);
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    const export_button = document.getElementById("canvas_export_scene");
    if (export_button) {
        document.getElementById("canvas_export_scene").addEventListener('click', function(event) {
            const exporter = new THREE.GLTFExporter()

            const options = {
                binary: true
            }
            const result = exporter.parse(scene, // called when the gltf has been generated
            function(gltf) {
                download_file(gltf, 'Exported_Mesh.gltf')

            }, function(error) {
                console.log('An error happened');
            }, options);

        });
    }

    var cameraSpeed = 0.1;

    function animate() {
        if (x_observ === 1) {
            stop_animate()
        }
        canvsa_exists = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);

    }
    let can = document.getElementsByTagName('canvas')[0]
    can.style.user_select = 'none'
    can.style.width = '100%'
    can.style.height = '100%'

    animate();

    function edit_side_panel(obj) {
        let xref = obj.ref
        let xid = obj.xid
        let html
        switch (obj.name) {
        case 'route_point':
            html = world_route()
            break
        case 'start_points':
            html = world_start_point()
            break
        case 'sound':
            html = world_sound()
            break
        case 'respawn_type4':
            html = world_respawn4()
            break
        case 'activator':
            html = world_activator()
            break
        case 'respawn_type11':
            html = world_respawn11()
            break
        case 'hazard':
            html = world_hazard()
            break
        case 'animation':
            html = world_animation()
            break
        case 'object':
            html = world_object()
            break

        }
        html += '</div>'
        let side_panel = document.getElementById('file_editor_side_panel');

        side_panel.innerHTML = html

        if (!selected_obj) {

            side_panel.addEventListener('change', function(event) {
                const target = event.target;
                if (target.tagName === 'INPUT') {
                    side_panel_update_model_view(event);
                }
            });
        }

        let x_field = file_editor.getElementsByClassName('x_button')
        for (let i = 0; i < x_field.length; i++) {
            x_field[i].addEventListener('click', x_button)
        }
        let plus_field = file_editor.getElementsByClassName('plus_button')
        for (let i = 0; i < plus_field.length; i++) {
            plus_field[i].addEventListener('click', plus_button)
        }

        function side_panel_update_model_view(e) {
            if (selected_obj) {
                dyn_update_input(e)
                let new_position = selected_obj.object.position
                let xref = selected_obj.object.ref
                if (obj.name === 'respawn_type4') {
                    xref.f32_80 = new_position.x
                    xref.f32_84 = new_position.y
                    xref.f32_88 = new_position.z
                } else {
                    new_position.x = xref.f32_32
                    new_position.y = xref.f32_36
                    new_position.z = xref.f32_40
                }
                if (obj.name === 'route_point') {
                    route_connect()
                }
            }
        }

        function world_route() {

            let html = `
                <a>Index </a><br>
                     <input style="width:100%" type='text' value="${xref.u32_116}" data-outer_xfa="${xid}"  data-inner_xfa="u32_116" data-type="u32"><br>
               ${get_xyz_position()}
               <a>Width </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_68}" data-outer_xfa="${xid}"  data-inner_xfa="f32_68" data-type="f32"><br>
                <a>Settings </a><br>
                     <input style="width:100%" type='text' value="${xref.u16_72}" data-outer_xfa="${xid}"  data-inner_xfa="u16_72" data-type="u16"><br>
                <a>u16_74 </a><br>
                     <input style="width:100%" type='text' value="${xref.u16_74}" data-outer_xfa="${xid}"  data-inner_xfa="u16_74" data-type="u16"><br>
                <a>u8_76 </a><br>
                     <input style="width:100%" type='text' value="${xref.u8_76}" data-outer_xfa="${xid}"  data-inner_xfa="u8_76" data-type="u8"><br>
                <a>f32_80 </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_80}" data-outer_xfa="${xid}"  data-inner_xfa="f32_80" data-type="f32"><br>
               `

            let prev_html = `<div class='save_records_boarder' style='text-align:center;'>Prev`
            prev_html += `<table><tbody>`
            for (let i = 0; i < xref.section_56.length; i++) {
                prev_html += `<tr>
            <td style="width:20%" class='no_border'>
                <input style="width:100%" type='text' value="${xref.section_56[i].u32_00}" data-outer_xfa="${xid}.section_56[${i}]"  data-inner_xfa="u32_00" data-type="u32">
                </td>
                  <td data-x="delete_main" data-xfa="section_56" class='x_button noselect'>
                     X
                 </td>
                </tr>`
            }
            prev_html += `<tr>
               <td colspan='4' style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_56" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

            let float_html = `<div class='save_records_boarder' style='text-align:center;'>Floats`
            float_html += `<table><tbody>`
            for (let i = 0; i < xref.section_56.length; i++) {
                float_html += `<tr>
            <td style="width:20%" class='no_border'>
                <input style="width:100%" type='text' value="${xref.section_52[i].f32_00}" data-outer_xfa="${xid}.section_56[${i}]"  data-inner_xfa="f32_00" data-type="f32">
                </td>
                  <td data-x="delete_main" data-xfa="section_56" class='x_button noselect'>
                     X
                 </td>
                </tr>`
            }
            float_html += `<tr>
               <td colspan='4' style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_56" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

            let next_html = `<div class='save_records_boarder' style='text-align:center;'>Next`
            next_html += `<table><tbody>`
            for (let i = 0; i < xref.section_64.length; i++) {
                next_html += `<tr>
            <td style="width:20%" class='no_border'>
                <input style="width:100%" type='text' value="${xref.section_64[i].u32_00}" data-outer_xfa="${xid}.section_56[${i}]"  data-inner_xfa="u32_00" data-type="u32">
                </td>
                  <td data-x="delete_main" data-xfa="section_64" class='x_button noselect'>
                     X
                 </td>
                </tr>`
            }
            next_html += `<tr>
               <td colspan='4' style="width:10%;white-space:nowrap;" data-plus="create_new" data-xfa="section_64" class='plus_button noselect'>+</td>
               </tr>
                </tbody>
                </table>
                </div>
            </div>`

            html += `<br>${prev_html}${float_html}${next_html}`

            return html

        }
        function world_start_point() {

            let html = `
                <a>Index </a><br>
                     <input style="width:100%" type='text' value="${xref.u8_121}" data-outer_xfa="${xid}"  data-inner_xfa="u8_121" data-type="u8"><br>
               ${get_xyz_position()}
               <a>X R </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_48}" data-outer_xfa="${xid}"  data-inner_xfa="f32_48" data-type="f32"><br>
                <a>Y R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_52}" data-outer_xfa="${xid}"  data-inner_xfa="f32_52" data-type="f32"><br>
                <a>Z R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_56}" data-outer_xfa="${xid}"  data-inner_xfa="f32_56" data-type="f32"><br>
                <a>u32_68</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_68}" data-outer_xfa="${xid}"  data-inner_xfa="u32_68" data-type="u32"><br>
                <a>u16_74</a><br>
                     <input style="width:100%" type='text' value="${xref.u16_74}" data-outer_xfa="${xid}"  data-inner_xfa="u16_74" data-type="u16"><br>
                <a>f32_76</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_76}" data-outer_xfa="${xid}"  data-inner_xfa="f32_76" data-type="f32"><br>
                <a>f32_80</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_80}" data-outer_xfa="${xid}"  data-inner_xfa="f32_80" data-type="f32"><br>
                <a>u8_112</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_112}" data-outer_xfa="${xid}"  data-inner_xfa="u8_112" data-type="u8"><br>
                <a>u8_113</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_113}" data-outer_xfa="${xid}"  data-inner_xfa="u8_113" data-type="u8"><br>
                <a>u8_114</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_114}" data-outer_xfa="${xid}"  data-inner_xfa="u8_114" data-type="u8"><br>
                <a>u8_120</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_120}" data-outer_xfa="${xid}"  data-inner_xfa="u8_120" data-type="u8"><br>
               `
            return html
        }
        function world_sound() {

            let html = `${get_xyz_position()}
               <a>Sound</a><br>
                  ${generate_linkbox(xid, 'unordered_sound_controls_48', 'sound_controls', xref.unordered_sound_controls_48)}<br>
               `
            return html
        }

        function world_respawn4() {

            let html = `${get_xyz_position(4)}
                <a>u32_32 </a><br>
                     <input style="width:100%" type='text' value="${xref.u32_32}" data-outer_xfa="${xid}"  data-inner_xfa="u32_32" data-type="u32"><br>
                <a>f32_40</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_40}" data-outer_xfa="${xid}"  data-inner_xfa="f32_40" data-type="f32"><br>
                <a>f32_48</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_48}" data-outer_xfa="${xid}"  data-inner_xfa="f32_48" data-type="f32"><br>
                <a>f32_52</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_52}" data-outer_xfa="${xid}"  data-inner_xfa="f32_52" data-type="f32"><br>
                <a>f32_56</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_56}" data-outer_xfa="${xid}"  data-inner_xfa="f32_56" data-type="f32"><br>
                <a>f32_64</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_64}" data-outer_xfa="${xid}"  data-inner_xfa="f32_64" data-type="f32"><br>
                <a>f32_68</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_68}" data-outer_xfa="${xid}"  data-inner_xfa="f32_68" data-type="f32"><br>
                <a>f32_72</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_72}" data-outer_xfa="${xid}"  data-inner_xfa="f32_72" data-type="f32"><br>
                <a>unknown_00</a><br>
                  ${generate_linkbox(xid, 'unordered_unknown_00_96', 'unknown_00', xref.unordered_unknown_00_96)}<br>
                <a>interface</a><br>
                  ${generate_linkbox(xid, 'unordered_interface_104', 'interface', xref.unordered_interface_104)}<br>
                <a>f32_116</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_116}" data-outer_xfa="${xid}"  data-inner_xfa="f32_116" data-type="f32"><br>
                <a>type</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_120}" data-outer_xfa="${xid}"  data-inner_xfa="u32_120" data-type="u32"><br>
                <a>u32_124</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_124}" data-outer_xfa="${xid}"  data-inner_xfa="u32_124" data-type="u32"><br>
                <a>idk</a><br>
                     <input disabled style="width:100%" type='text' value="${xref.section_128}" data-outer_xfa="${xid}"  data-inner_xfa="section_128" data-type="u32"><br>
               `
            return html
        }

        function world_activator() {

            let html = `${get_xyz_position()}
                <a>X R </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_48}" data-outer_xfa="${xid}"  data-inner_xfa="f32_48" data-type="f32"><br>
                <a>Y R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_52}" data-outer_xfa="${xid}"  data-inner_xfa="f32_52" data-type="f32"><br>
                <a>Z R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_56}" data-outer_xfa="${xid}"  data-inner_xfa="f32_56" data-type="f32"><br>
                <a>activator</a><br>
                  ${generate_linkbox(xid, 'unordered_activator_64', 'activator', xref.unordered_activator_64)}<br>
                <a>f32_68</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_68}" data-outer_xfa="${xid}"  data-inner_xfa="f32_68" data-type="f32"><br>
                <a>f32_72</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_72}" data-outer_xfa="${xid}"  data-inner_xfa="f32_72" data-type="f32"><br>
                <a>Repeat?</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_76}" data-outer_xfa="${xid}"  data-inner_xfa="u8_76" data-type="u8"><br>
                <a>Repeat related 1</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_80}" data-outer_xfa="${xid}"  data-inner_xfa="u32_80" data-type="u32"><br>
                <a>Repeat related 2</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_84}" data-outer_xfa="${xid}"  data-inner_xfa="u32_84" data-type="u32"><br>

               `
            return html
        }

        function world_respawn11() {

            let html = `${get_xyz_position()}
                <a>X R </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_48}" data-outer_xfa="${xid}"  data-inner_xfa="f32_48" data-type="f32"><br>
                <a>Y R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_52}" data-outer_xfa="${xid}"  data-inner_xfa="f32_52" data-type="f32"><br>
                <a>Z R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_56}" data-outer_xfa="${xid}"  data-inner_xfa="f32_56" data-type="f32"><br>
                <a>u32_64</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_64}" data-outer_xfa="${xid}"  data-inner_xfa="u32_64" data-type="u32"><br>
               `
            return html
        }
        function world_hazard() {

            let html = `${get_xyz_position()}
               <a>X R </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_48}" data-outer_xfa="${xid}"  data-inner_xfa="f32_48" data-type="f32"><br>
                <a>Y R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_52}" data-outer_xfa="${xid}"  data-inner_xfa="f32_52" data-type="f32"><br>
                <a>Z R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_56}" data-outer_xfa="${xid}"  data-inner_xfa="f32_56" data-type="f32"><br>
                <a>idk</a><br>
                  ${generate_linkbox(xid, 'unordered_idk_64', 'idk', xref.unordered_idk_64)}<br>
                <a>f32_68</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_68}" data-outer_xfa="${xid}"  data-inner_xfa="f32_68" data-type="f32"><br>
                <a>u8_73</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_73}" data-outer_xfa="${xid}"  data-inner_xfa="u8_73" data-type="u8"><br>
                <a>u8_77</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_77}" data-outer_xfa="${xid}"  data-inner_xfa="u8_77" data-type="u8"><br>
               `
            return html
        }
        function world_animation() {

            let html = `${get_xyz_position()}
               <a>X R </a><br>
                     <input style="width:100%" type='text' value="${xref.f32_48}" data-outer_xfa="${xid}"  data-inner_xfa="f32_48" data-type="f32"><br>
                <a>Y R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_52}" data-outer_xfa="${xid}"  data-inner_xfa="f32_52" data-type="f32"><br>
                <a>Z R</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_56}" data-outer_xfa="${xid}"  data-inner_xfa="f32_56" data-type="f32"><br>
                <a>Strange</a><br>
                  ${generate_linkbox(xid, 'unordered_strange_64', 'strange', xref.unordered_strange_64)}<br>
                <a>Render Distance</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_72}" data-outer_xfa="${xid}"  data-inner_xfa="f32_72" data-type="f32"><br>
                <a>u8_76</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_76}" data-outer_xfa="${xid}"  data-inner_xfa="u8_76" data-type="u8"><br>

               `
            return html
        }

        function world_object() {
            let html = `${get_xyz_position()}
                <a>Object</a><br>
                  ${generate_linkbox(xid, 'unordered_object_56', 'object', xref.unordered_object_56)}<br>
                <a>Render Distance</a><br>
                     <input style="width:100%" type='text' value="${xref.f32_60}" data-outer_xfa="${xid}"  data-inner_xfa="f32_60" data-type="f32"><br>
                <a>Respawn Timer</a><br>
                     <input style="width:100%" type='text' value="${xref.u32_48}" data-outer_xfa="${xid}"  data-inner_xfa="u32_48" data-type="u32"><br>
                <a>u32_52 </a><br>
                     <input style="width:100%" type='text' value="${xref.u32_52}" data-outer_xfa="${xid}"  data-inner_xfa="u32_52" data-type="u32"><br>
                <a>u8_68</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_68}" data-outer_xfa="${xid}"  data-inner_xfa="u8_68" data-type="u8"><br>
                <a>u8_69 </a><br>
                     <input style="width:100%" type='text' value="${xref.u8_69}" data-outer_xfa="${xid}"  data-inner_xfa="u8_69" data-type="u8"><br>
                <a>u8_72 </a><br>
                     <input style="width:100%" type='text' value="${xref.u8_72}" data-outer_xfa="${xid}"  data-inner_xfa="u8_72" data-type="u8"><br>
                <a>u8_73</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_73}" data-outer_xfa="${xid}"  data-inner_xfa="u8_73" data-type="u8"><br>
                <a>u8_74 </a><br>
                     <input style="width:100%" type='text' value="${xref.u8_74}" data-outer_xfa="${xid}"  data-inner_xfa="u8_74" data-type="u8"><br>
                <a>u8_75</a><br>
                     <input style="width:100%" type='text' value="${xref.u8_75}" data-outer_xfa="${xid}"  data-inner_xfa="u8_75" data-type="u8"><br>
`
            return html
        }

        function get_xyz_position(t) {

            let x, y, z
            if (t === 4) {

                x = 'f32_80'
                y = 'f32_84'
                z = 'f32_88'

            } else {
                x = 'f32_32'
                y = 'f32_36'
                z = 'f32_40'

            }
            return `<a>X </a><br>
                     <input style="width:100%" type='text' value="${xref[x]}" data-outer_xfa="${xid}"  data-inner_xfa="${x}" data-type="f32" id='sidebar_x_position'><br>
                <a>Y </a><br>
                     <input style="width:100%" type='text' value="${xref[y]}" data-outer_xfa="${xid}"  data-inner_xfa="${y}" data-type="f32" id='sidebar_y_position'><br>
                <a>Z </a><br>
                     <input style="width:100%" type='text' value="${xref[z]}" data-outer_xfa="${xid}"  data-inner_xfa="${z}" data-type="f32" id='sidebar_z_position'><br>`
        }

    }

    function plus_button(e) {
        if (this.dataset.xfa === 'section_56') {
            selected_obj.object.ref.section_52.push({
                f32_00: 0
            })
            selected_obj.object.ref.section_56.push({
                u32_00: 0
            })
        } else {
            selected_obj.object.ref.section_64.push({
                u32_00: 0
            })
        }
        edit_side_panel(selected_obj.object)
        route_connect()

    }
    function x_button(e) {
        let temp = this.parentElement

        for (var i = 0; (temp = temp.previousElementSibling); i++) {}
        if (this.dataset.xfa === 'section_56') {
            selected_obj.object.ref['section_52'].splice(i, 1)
            selected_obj.object.ref['section_56'].splice(i, 1)
        } else {
            selected_obj.object.ref[this.dataset.xfa].splice(i, 1)
        }
        edit_side_panel(selected_obj.object)
        route_connect()
    }

    function route_connect() {
        let elementlist = scene.getObjectByProperty().children
        let routes = []
        for (let element of elementlist) {
            if (element.name === 'route_point') {
                routes.push(element)
            } else if (element.name === 'route_point_help') {
                scene.remove(element)
            }
        }
        const material = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });

        for (let route of routes) {
            let index = route.ref.u32_116
            let prev_list = route.ref.section_56
            let next_list = route.ref.section_64
            for (let i = 0; i < prev_list.length; i++) {
                let points = [];

                let prev_index = prev_list[i].u32_00
                points.push(new THREE.Vector3(route.ref.f32_32,route.ref.f32_36,route.ref.f32_40));
                points.push(new THREE.Vector3(routes[prev_index].ref.f32_32,routes[prev_index].ref.f32_36,routes[prev_index].ref.f32_40));
                let geometry = new THREE.BufferGeometry().setFromPoints(points);
                let line = new THREE.Line(geometry,material);

                scene.add(line);
                line.name = 'route_point_help'
            }
        }

    }
    route_connect()

}
