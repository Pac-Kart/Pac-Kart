"use strict";
function genFileInViewer(arrow, img, type, id, name) {
    name = name.replaceAll('<', '&lt').replaceAll('>', '&gt')

    if (arrow === "n") {
        arrow = `no_arrow'>↓`
    } else if (arrow === "y") {
        arrow = `file_arrow' style='padding-right:0px;padding-left:0px;'>→`
    }

    if (img === "folder") {
        img = "🗀"
    } else if (img === "file") {
        img = "🗎"
    }

    let display = ''
    if (type === "x_d_folder") {
        display = ''
    } else if (type === "x_d_sub_file") {
        display = `style='display: block;'`
    } else {
        display = `style='display: none;'`
    }
    return `<div ${display} class='sub_file_div'>
        <a class='${arrow}</a>
        <a> ${img} </a>
        <a data-type="${type}" data-xfa="${id}" class='file_hover_not_selected'>${name}</a>`

}

function dynamic__x_generator() {
    const fileArrow = x[0].directory.length === 0 ? 'n' : `file_arrow' style='padding-right:6px;padding-left:4px;'>↓`;
    let html = genFileInViewer(fileArrow, 'folder', 'x_d_folder', x[0].id, x[0].name);

    for (let i = 0; i < x[0].directory.length; i++) {
        html += dynamicXGeneratorFileList(x[0].directory[i], i + 1);
    }

    return `${html}</div>`;
}

function dynamicXGeneratorFileList(x, i) {

    let html = genFileInViewer('y', 'folder', 'x_d_sub_file', x.id, `${i} ${x.type}`)
    x.datapack[0].audio[0].sound.length ? html += dynamic__sounds_folder(x.datapack[0], x.id) : 0;
    x.datapack[0].ordered[0].textures.length ? html += dynamic__texture_folder(x.datapack[0].ordered[0].textures, x.id) : 0;
    x.datapack[0].ordered[0].texture_animation.length ? html += dynamic__texture_animations_folder(x.datapack[0].ordered[0].texture_animation, x.id) : 0;
    x.datapack[0].ordered[0].models.length ? html += dynamic_order(x.datapack[0].ordered[0].models, x.id, 'models') : 0;

    if (x.type === 'world') {
        x.datapack[0].ordered[0].file_specific.length ? html += dynamic_order(x.datapack[0].ordered[0].file_specific, x.id, 'World') : 0;
    }
    const unorderedCategories = ['link', 'interface', 'frame_font', 'frame_multi_font', 'frame_text', 'sound_controls', 'sound_section', 'model_link', 'world_settings', 'flag', 'object', 'unknown_00', 'activator', 'idk', 'strange'];

    for (const category of unorderedCategories) {
        if (x.datapack[0].ordered[0].unordered[0][category].length) {
            html += dynamic_order(x.datapack[0].ordered[0].unordered[0][category], x.id, category);
        }
    }

    x.datapack[0].ordered[0].unordered[0].car.length ? html += dynamic_car(x.datapack[0].ordered[0].unordered[0], x.id, 'car') : 0;
    x.datapack[0].ordered[0].unordered[0].frame_sparkler.length ? html += dynamic__frame_sparkler(x.datapack[0].ordered[0].unordered[0], x.id, 'frame_sparkler') : 0;

    return `${html}</div>`;
}

function dynamic_order(x, id, name) {
    let printname = name.replaceAll('_', ' ')
    let html = genFileInViewer('y', 'folder', `x_d_` + name + `__folder`, id, printname)

    if (name === 'World') {
        html += dynamic_world(x, id, name)
        return `${html}</div>`;
    }
    for (let i = 0; i < x.length; i++) {
        html += dynamic_order_file(x, i, name, id)
    }

    return `${html}</div>`;

}

function dynamic_order_file(x, i, name, id) {
    const nameToPrintnameMap = {
        'model_link': 'section_04',
        'activator': 'section_08',
        'flag': 'section_04',
        'var': 'section_140',
    };

    let printname = nameToPrintnameMap[name] ? x[i][nameToPrintnameMap[name]][0] : name.replaceAll('_', ' ');
    let arrow
    switch (name) {
    case 'link':
    case 'interface':
    case 'models':
    case 'world_settings':
        arrow = 'y'
        break
    default:
        arrow = 'n'
    }

    let elementname;
    if (name === "model_link") {
        elementname = printname
    } else if (name === 'models') {
        elementname = x[i].name
    } else if (name === 'world_settings') {
        elementname = "World Settings"
    } else if (name === 'activator') {
        elementname = printname
    } else if (name === 'flag') {
        elementname = printname
    } else {
        elementname = `${printname} ${i + 1}`
    }

    let html = genFileInViewer(arrow, '?', `x_d_` + name + `__file`, x[i].id, elementname)

    const dynamicHtmlFunctions = {
        'link': dynamic__link,
        'idk': dynamic__idk,
        'interface': dynamic__interface,
        'frame_font': dynamic__frame_font,
        'frame_multi_font': dynamic__frame_multi_font,
        'frame_text': dynamic__frame_text,
        'sound_controls': dynamic__sound_controls,
        'sound_section': dynamic__sound_section,
        'models': dynamic__model,
        'model_link': dynamic__model_link,
        'model_sub_link': dynamic__model_sub_link,
        'wtf': dynamic__wtf,
        'unknown': dynamic__unknown,
        'unknown_00': dynamic__unknown_00,
        'activator': dynamic__activator,
        'flag': dynamic__flag,
        'var': dynamic__var,
        'gate': dynamic__gate,
        'strange': dynamic__strange,
        'object': dynamic__object,
        'um': dynamic__um,
        'world_settings': dynamic__world_settings,
    };

    let dynamicHtmlFunction = dynamicHtmlFunctions[name] || ( () => '');
    html += dynamicHtmlFunction(x[i]);

    return `${html}</div>`;

}

function dynamic__interface_(XFA, XFA_ID) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_interface_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Interface </a>`

    if (XFA.frames.length !== 0) {
        html += `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_frames_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Frames </a>`
        for (let i = 0; i < XFA.frames.length; i++) {
            html += dynamic__frames(XFA.frames[i], i)
        }

        html += "</div>"
    }
    if (XFA.texts.length !== 0) {
        html += `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_texts_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Text </a>`
        for (let i = 0; i < XFA.texts.length; i++) {
            html += dynamic__texts(XFA.texts[i], i)
        }

        html += "</div>"
    }

    html += "</div>"
    return html
}
function dynamic__frames(XFA, i) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_frame" data-XFA="${XFA.id}" class='file_hover_not_selected'> Frame ${i + 1} </a>`

    if (XFA.varibles_04[0].section_04.length !== 0) {
        html += `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_varibles_folder" data-XFA="${XFA.id}" class='file_hover_not_selected'> Varibles </a>`

        for (let i = 0; i < XFA.varibles_04[0].section_04.length; i++) {
            html += dynamic__varible(XFA.varibles_04[0].section_04[i], i)
        }
        html += "</div>"

    }
    if (XFA.layers_72.length !== 0) {
        html += `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_layers_folder" data-XFA="${XFA.id}" class='file_hover_not_selected'> Layers </a>`

        for (let i = 0; i < XFA.layers_72.length; i++) {
            html += dynamic__layer(XFA.layers_72[i], i)
        }
        html += "</div>"

    }
    html += "</div>"
    return html
}
function dynamic__varible(XFA, i) {

    let temp_name
    if (XFA.name_00 !== "") {
        temp_name = XFA.name_00
    } else {
        temp_name = "Blank"
    }
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> / </a>
                    <a data-type="x_d_varible" data-XFA="${XFA.id}" class='file_hover_not_selected'> ${temp_name} </a>
                </div>`

    return html
}
function dynamic__layer(XFA, i) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> / </a>
                    <a data-type="x_d_layer" data-XFA="${XFA.id}" class='file_hover_not_selected'> ${XFA.name_00} </a>
                </div>`

    return html
}

function dynamic__texts(XFA, i) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> ㄒ </a>
                    <a data-type="x_d_text" data-XFA="${XFA.id}" class='file_hover_not_selected'> Text ${i + 1} </a>`

    html += "</div>"
    return html
}

function dynamic__texture_animations_folder(XFA, XFA_ID) {
    let file_arrow = `n`

    if (XFA.length !== 0) {
        file_arrow = `y`
    }

    let html = genFileInViewer(file_arrow, '🗀', 'x_d_texture_animations_folder', XFA_ID, 'Texture Animations')

    for (let i = 0; i < XFA.length; i++) {
        html += dynamic__texture_animations(XFA[i], i)
    }

    html += "</div>"
    return html
}

function dynamic__texture_animations(XFA, i) {
    let texture_name

    let html = genFileInViewer('n', '?', 'x_d_texture_animation_file', XFA.id, `Animation ${i + 1}`)

    return `${html}</div>`
}

function dynamic__texture_folder(x, xid) {
    let file_arrow = `no_arrow'>↓`

    if (x.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_textures_folder" data-XFA="${xid}" class='file_hover_not_selected'> Textures </a>`

    for (let i = 0; i < x.length; i++) {
        html += dynamic__textures(x[i], i)
    }

    html += "</div>"
    return html
}
function dynamic__textures(XFA) {
    let texture_name
    if (XFA.name != "") {
        texture_name = XFA.name[0]
    } else {
        texture_name = 'Blank Texture'
    }
    let html = genFileInViewer('n', '/', `x_d_textures`, XFA.id, texture_name)

    return `${html}</div>`
}
function dynamic__models_folder(XFA, XFA_ID) {
    let file_arrow = `no_arrow'>↓`

    if (XFA.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_model_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Models </a>`

    for (let i = 0; i < XFA.length; i++) {
        html += dynamic__model(XFA[i], i)
    }

    html += "</div>"
    return html
}

function dynamic__model(XFA) {
    let html = ''

    for (let i = 0; i < XFA.sections.length; i++) {
        html += dynamic__model_section(XFA.sections[i], i)
    }

    return html
}
function dynamic__model_section(x, i) {
    let file_arrow = `n`

    if (x.sub_section.length !== 0) {
        file_arrow = `y`
    }

    let html = genFileInViewer(file_arrow, '?', 'x_d_model__sections', x.id, `LOD ${i + 1}`)

    for (let i = 0; i < x.sub_section.length; i++) {
        html += dynamic__model_sub_section(x.sub_section[i], i)
    }

    return `${html}</div>`
}
function dynamic__model_sub_section(x, i) {

    let html = genFileInViewer('n', '?', 'x_d_model__model', x.id, `Material ${i + 1}`)

    return `${html}</div>`
}

function dynamic__sounds_folder(x, id) {
    let file_arrow
    x.audio[0].sound.length ? file_arrow = `file_arrow'>→` : file_arrow = `no_arrow'>↓`;

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_sound_folder" data-XFA="${id}" class='file_hover_not_selected'> Sounds </a>`

    for (let i = 0; i < x.audio[0].sound.length; i++) {
        html += dynamic__sound(x.audio[0].sound[i], i)
    }

    html += "</div>"
    return html
}
function dynamic__sound(x, i) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> 🕪 </a>
                    <a data-type="x_d_sound" data-XFA="${x.id}" class='file_hover_not_selected'> Sound ${i + 1} </a></div>`
    return html
}

function dynamic__link(x) {
    let html = '';

    x.section_08.length ? html += dynamic__link_intro(x.section_08, x.id) : 0;
    x.section_32.length ? html += dynamic__link_main(x.section_32, x.id) : 0;
    x.section_48.length ? html += dynamic__link_demo(x.section_48, x.id) : 0;

    return html

}

function dynamic__link_folder(x) {
    let file_arrow = `no_arrow'>↓`

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_link__folder" data-XFA="${x.id}" class='file_hover_not_selected'> Link </a>`

    html += "</div>"
    return html
}

function dynamic__link_intro(XFA, id) {
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='no_arrow'>↓</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link__intro" data-xfa="${id}" class='file_hover_not_selected'> Intro </a>
                </div>`

    return html
}
function dynamic__link_demo(XFA, id) {
    let file_arrow = `no_arrow'>↓`

    if (XFA[0].section_08[0].section_04.length !== 0) {
        file_arrow = `file_arrow'>→`
    }
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='${file_arrow}</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link__demo" data-xfa="${id}" class='file_hover_not_selected'> Demo </a>`

    for (let i = 0; i < XFA[0].section_08[0].section_04.length; i++) {

        html += dynamic__link_main_sub_group(XFA[0].section_08[0].section_04[i], i, XFA[0].section_08[0].section_04[i].id)
    }

    html += '</div>'

    return html
}
function dynamic__link_main(XFA, id) {
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='file_arrow'>→</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link__main" data-xfa="${id}" class='file_hover_not_selected'> Main </a>`

    for (let i = 0; i < XFA.length; i++) {

        html += dynamic__link_main_group(XFA[i], i, XFA[i].id)
    }

    html += '</div>'

    return html
}
function dynamic__link_main_group(XFA, i, id) {
    let file_arrow = `no_arrow'>↓`

    if (XFA.section_00[0].section_04.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='${file_arrow}</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link__main_group" data-xfa="${id}" class='file_hover_not_selected'> Group ${i + 1}</a>`

    for (let i = 0; i < XFA.section_00[0].section_04.length; i++) {

        html += dynamic__link_main_sub_group(XFA.section_00[0].section_04[i], i, XFA.section_00[0].section_04[i].id)
    }

    html += '</div>'

    return html
}
function dynamic__link_main_sub_group(XFA, i, id) {
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='no_arrow'>↓</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link__main_sub_group" data-xfa="${id}" class='file_hover_not_selected'> Sub Group ${i + 1}</a>
                </div>`

    return html
}

function dynamic__share(XFA) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a style="margin:2px;"> ⚙ </a>
                    <a data-type="x_d_share" data-XFA="${XFA.id}" class='file_hover_not_selected'> Share </a></div>`
    return html
}

function dynamic__car(x) {
    let html = genFileInViewer('y', 'folder', 'x_d_world_car__a_folder', x.id, 'a')

    return html + '</div>';
}
function dynamic__idk(x) {
    return ''
}
function dynamic__interface(x) {
    let html = ''

    let file_arrow = `n`

    if (x.section_72.length) {
        file_arrow = `y`
    }

    html = genFileInViewer(file_arrow, 'folder', 'x_d_interface__layer_folder', x.id, 'Elements')

    for (let i = 0; i < x.section_72.length; i++) {
        html += dynamic__interface_72(x.section_72[i])
    }
    html += '</div>';

    file_arrow = `n`

    if (x.section_04.length) {
        if (x.section_04[0].section_04.length) {
            file_arrow = `y`
        }
    }
    html += genFileInViewer(file_arrow, 'folder', 'x_d_interface__varible_folder', x.id, 'Varibles')

    for (let i = 0; i < x.section_04[0].section_04.length; i++) {
        html += dynamic__interface_04(x.section_04[0].section_04[i])
    }

    return html + '</div>';
}

function dynamic__interface_72(x) {

    let html = genFileInViewer('n', '?', 'x_d_interface__layer_file', x.id, x.section_00[0])

    return html + '</div>';

}
function dynamic__interface_04(x) {

    let html = genFileInViewer('n', '?', 'x_d_interface__varible_file', x.id, x.section_00[0])

    return html + '</div>';

}

function dynamic__frame_sparkler(x, id) {
    let html = genFileInViewer('y', 'folder', `x_d_frame_sparkler__folder`, id, 'Emmiters')

    for (let i = 0; i < x.frame_sparkler.length; i++) {
        html += dynamic__frame_sparkler_file(x.frame_sparkler[i], i)
    }
    return html += '</div>'
}

function dynamic__frame_sparkler_file(x, i) {
    return genFileInViewer('n', 'file', `x_d_frame_sparkler__file`, x.id, 'Emmiter ' + (i + 1)) + '</div>'
}

function dynamic__frame_font(x) {
    return ''

}
function dynamic__frame_multi_font(x) {
    return ''
}
function dynamic__frame_text(x) {
    return ''
}
function dynamic__sound_controls(x) {
    return ''
}
function dynamic__sound_section(x) {
    return ''
}
function dynamic__model_link(x) {
    return ''
}
function dynamic__model_sub_link(x) {
    return ''
}
function dynamic__wtf(x) {
    return ''
}
function dynamic__unknown(x) {
    return ''
}
function dynamic__unknown_00(x) {
    return ''
}
function dynamic__activator(x) {
    return ''
}
function dynamic__flag(x) {
    return ''
}
function dynamic__var(x) {
    return ''
}
function dynamic__gate(x) {
    return ''
}
function dynamic__strange(x) {
    return ''
}
function dynamic__object(x) {
    return ''
}
function dynamic__um(x) {
    return ''
}
function dynamic__world_settings(x) {

    let html = genFileInViewer('n', '💡', 'x_d_world_settings__lighting', x.id, 'Lighting')
    return html + '</div>';
}

function dynamic_car(x, id, name) {
    let html = genFileInViewer('y', 'folder', `x_d_car__folder`, id, 'Car')

    html += genFileInViewer('y', 'folder', `x_d_car__obj_folder`, id, 'Car Objects')
    for (let i = 0; i < x.car.length; i++) {
        html += genFileInViewer('n', 'file', `x_d_car__file`, x.car[i].id, 'Car Object ' + (i + 1)) + '</div>'
    }
    html += '</div>'

    html += genFileInViewer('y', 'folder', `x_d_car_00_180__folder`, id, 'Car Parts A')
    for (let i = 0; i < x.car_00_180.length; i++) {
        html += genFileInViewer('n', 'file', `x_d_car_00_180__file`, x.car_00_180[i].id, 'Car Part A ' + (i + 1)) + '</div>'
    }
    html += '</div>'

    html += genFileInViewer('y', 'folder', `x_d_car_00_184__folder`, id, 'Car Parts B')
    for (let i = 0; i < x.car_00_184.length; i++) {
        html += genFileInViewer('n', 'file', `x_d_car_00_184__file`, x.car_00_184[i].id, 'Car Part B ' + (i + 1)) + '</div>'
    }
    html += '</div>'

    return html + '</div>'

}

function dynamic_world(x, id, name) {
    let html = ''
    html += genFileInViewer('n', '?', `x_d_world_collision`, id, 'Collision') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_scene`, id, 'World Scene') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_route`, id, 'World Route') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_start_points`, id, 'Start Points') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_sound`, id, 'Sound Area') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_Activators`, id, 'Actors') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_Respawnt11`, id, 'Respawn 1') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_Respawnt4`, id, 'Respawn 2') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_Stage`, id, 'Stage Objects') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_Animation`, id, 'Animation Objects') + '</div>'
    html += genFileInViewer('n', '?', `x_d_world_Objects`, id, 'Collectibles') + '</div>'

    return html

}

function gen_array_view_file_first_time(path) {
    let html = ''

    html += gen_array_view_file_array(path, 0, 8)

    // console.log(html)
    return html

}

function gen_array_view_file_array(path, i_deep, limit=0) {
    let html = ""
    i_deep++
    if (Array.isArray(path)) {
        if (path.length === 0) {
            return html
        }
    } else {
        return html
    }
    if (i_deep >= limit) {
        return html
    }

    for (let i = 0; i < path.length; i++) {
        html += genFileInViewer("y", 'folder', 'ava', `${path[i].id}`, `${i_deep} -> [${i}]`)
        html += gen_array_view_file_object(path[i], i_deep, limit)
        html+= "</div>"
    }

    // gen_array_view_file_array(i_deep+=1,limit)
    return html + "</div>"

}

function gen_array_view_file_object(path, i_deep, limit=0) {
    let html = ""
    i_deep++
    if (Array.isArray(path)) {
        return html
    } else {
    }
    if (i_deep >= limit) {
        return html
    }

    let amt_arrays = 0;

    for (let entry of Object.entries(path)) {
              if (Array.isArray(entry[1])) {
                  amt_arrays++
                html += genFileInViewer("y", 'file', 'avo', path.id, `${i_deep} -> id: ${path.id} [file]`)
                html += gen_array_view_file_array(entry[1], i_deep, limit)
                html+= "</div>"
            }

        // }
    }

    if (amt_arrays === 0) {
    return  html +  "</div>"
    }else{
    return  html
    }

}
