function genFileInViewer(arrow, img, type, id, name) {
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
        <a id='temp' data-type="${type}" data-xfa="${id}" class='file_hover_not_selected'>${name}</a>`

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
    // x.datapack[0].ordered[0].model_animation_2.length ? html += dynamic_order(x.datapack[0].ordered[0].model_animation_2, x.id, 'model_animation_2') : 0;
    x.datapack[0].ordered[0].models.length ? html += dynamic_order(x.datapack[0].ordered[0].models, x.id, 'models') : 0;

    // const unorderedCategories = ['car', 'link', 'idk', 'interface', 'frame_sparkler', 'frame_font', 'frame_multi_font', 'frame_text', 'sound_controls', 'sound_section', 'model_link', 'model_sub_link', 'wtf', 'unknown', 'unknown_00', 'activator', 'flag', 'var', 'gate', 'strange', 'object', 'um', 'world_settings'];
    const unorderedCategories = ['car', 'link', 'interface', 'frame_sparkler', 'frame_font', 'frame_multi_font', 'frame_text', 'sound_controls', 'sound_section', 'model_link'];

    for (const category of unorderedCategories) {
        if (x.datapack[0].ordered[0].unordered[0][category].length) {
            html += dynamic_order(x.datapack[0].ordered[0].unordered[0][category], x.id, category);
        }
    }

    return `${html}</div>`;

    // let html = `<div style='display: block;' class='sub_file_div'>
    //                 <a class='file_arrow'>→</a>
    //                 <a> 🗎 </a> <a data-type="x_d_sub_file" data-xfa="${x.id}" class='file_hover_not_selected'>${i} ${x.type}</a>`

    // x.datapack[0].audio[0].sound.length ? html += dynamic__sounds_folder(x.datapack[0]) : 0;

    // x.datapack[0].ordered[0].textures.length ? html += dynamic__texture_folder(x.datapack[0].ordered[0].textures, x.id) : 0;
    // x.datapack[0].ordered[0].model_animation_2.length ? html += dynamic_order(x.datapack[0].ordered[0].model_animation_2, x.id, 'model_animation_2') : 0;
    // x.datapack[0].ordered[0].models.length ? html += dynamic_order(x.datapack[0].ordered[0].models, x.id, 'models') : 0;

    // x.datapack[0].ordered[0].unordered[0].car.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].car, x.id, 'car') : 0;
    // x.datapack[0].ordered[0].unordered[0].link.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].link, x.id, 'link') : 0;
    // x.datapack[0].ordered[0].unordered[0].idk.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].idk, x.id, 'idk') : 0;
    // x.datapack[0].ordered[0].unordered[0].interface.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].interface, x.id, 'interface') : 0;
    // x.datapack[0].ordered[0].unordered[0].frame_sparkler.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].frame_sparkler, x.id, 'frame_sparkler') : 0;
    // x.datapack[0].ordered[0].unordered[0].frame_font.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].frame_font, x.id, 'frame_font') : 0;
    // x.datapack[0].ordered[0].unordered[0].frame_multi_font.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].frame_multi_font, x.id, 'frame_multi_font') : 0;
    // x.datapack[0].ordered[0].unordered[0].frame_text.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].frame_text, x.id, 'frame_text') : 0;
    // x.datapack[0].ordered[0].unordered[0].sound_controls.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].sound_controls, x.id, 'sound_controls') : 0;
    // x.datapack[0].ordered[0].unordered[0].sound_section.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].sound_section, x.id, 'sound_section') : 0;
    // x.datapack[0].ordered[0].unordered[0].model_link.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].model_link, x.id, 'model_link') : 0;
    // x.datapack[0].ordered[0].unordered[0].model_sub_link.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].model_sub_link, x.id, 'model_sub_link') : 0;
    // x.datapack[0].ordered[0].unordered[0].wtf.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].wtf, x.id, 'wtf') : 0;
    // x.datapack[0].ordered[0].unordered[0].unknown.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].unknown, x.id, 'unknown') : 0;
    // x.datapack[0].ordered[0].unordered[0].unknown_00.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].unknown_00, x.id, 'unknown_00') : 0;
    // x.datapack[0].ordered[0].unordered[0].activator.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].activator, x.id, 'activator') : 0;
    // x.datapack[0].ordered[0].unordered[0].flag.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].flag, x.id, 'flag') : 0;
    // x.datapack[0].ordered[0].unordered[0].var.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].var, x.id, 'var') : 0;
    // x.datapack[0].ordered[0].unordered[0].gate.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].gate, x.id, 'gate') : 0;
    // x.datapack[0].ordered[0].unordered[0].strange.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].strange, x.id, 'strange') : 0;
    // x.datapack[0].ordered[0].unordered[0].object.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].object, x.id, 'object') : 0;
    // x.datapack[0].ordered[0].unordered[0].um.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].um, x.id, 'um') : 0;
    // x.datapack[0].ordered[0].unordered[0].world_settings.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].world_settings, x.id, 'world_settings') : 0;

    // if (XFA.sounds.length) {
    //     html += dynamic__sounds_folder(XFA.sounds, XFA.id)
    // }
    // if (XFA.textures.length) {
    //     html += dynamic__texture_folder(XFA.textures, XFA.id)
    // }

    // if (XFA.texture_animations.length) {
    //     html += dynamic__texture_animations_folder(XFA.texture_animations, XFA.id)
    // }
    // if (XFA.models.length) {
    //     html += dynamic__models_folder(XFA.models, XFA.id)
    // }

    // if (XFA.type_s === "car") {} else if (XFA.type_s === "interface") {
    //     html += dynamic__interface(XFA.type_data[0].section_04.low_section_00[0], XFA.id)
    // } else if (XFA.type_s === 'link') {

    // x.datapack[0].ordered[0].unordered[0].link.length ? html += dynamic__link_folder(x.datapack[0].ordered[0].unordered[0].link[0]) : 0;

    //     html += dynamic__link_folder(XFA.type_data[0].section_04.low_section_00[0])
    // } else if (XFA.type_s === 'world') {} else if (XFA.type_s === 'share') {
    //     html += dynamic__share(XFA.type_data[0])
    // }
}

function dynamic_order(x, id, name) {
    let printname = name.replaceAll('_', ' ')
    let html = genFileInViewer('y', 'folder', `x_d_` + name + `__folder`, id, printname)

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
    }else{

        elementname = `${printname} ${i + 1}`
    }

    let html = genFileInViewer(arrow, '?', `x_d_` + name + `__file`, x[i].id, elementname)

    const dynamicHtmlFunctions = {
        'car': dynamic__car,
        'link': dynamic__link,
        'idk': dynamic__idk,
        'interface': dynamic__interface,
        'frame_sparkler': dynamic__frame_sparkler,
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

    let dynamicHtmlFunction = dynamicHtmlFunctions[name] || (()=>'');
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
    let file_arrow = `no_arrow'>↓`

    if (XFA.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_texture_animations_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Texture Animations </a>`

    for (let i = 0; i < XFA.length; i++) {
        html += dynamic__texture_animations(XFA[i], i)
    }

    html += "</div>"
    return html
}

function dynamic__texture_animations(XFA, i) {
    let texture_name

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> / </a>
                    <a data-type="x_d_texture_animation" data-XFA="${XFA.id}" class='file_hover_not_selected'> animation ${i + 1} </a>`

    let temp_array = ['pattern', 'color', 'translation']
    for (let i = 0; i < 3; i++) {
        html += `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> / </a>
                    <a data-type="x_d_texture_animation_ ${temp_array[i]}" data-XFA="${XFA.id}" class='file_hover_not_selected'> ${temp_array[i]} </a></div>`
    }

    html += '</div>'
    return html
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
        texture_name = XFA.name
    } else {
        texture_name = 'Blank Texture'
    }
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> / </a>
                    <a data-type="x_d_textures" data-XFA="${XFA.id}" class='file_hover_not_selected'> ${texture_name} </a></div>`
    return html
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

    html = genFileInViewer(file_arrow, '?', 'x_d_model__sections', x.id, `Section ${i+1}`)


    // let html = `<div style='display: none;' class='sub_file_div'>
    //                 <a class='${file_arrow}</a>
    //                 <a> 🗀 </a>
    //                 <a data-type="x_d_model_section" data-XFA="${XFA.id}" class='file_hover_not_selected'> Section ${i + 1} </a>`

    for (let i = 0; i < x.sub_section.length; i++) {
        html += dynamic__model_sub_section(x.sub_section[i], i)
    }

    return `${html}</div>`
}
function dynamic__model_sub_section(x, i) {

    html = genFileInViewer('n', '?', 'x_d_model__model', x.id, `Model ${i + 1}`)

    // let html = `<div style='display: none;' class='sub_file_div'>
    //                 <a class='no_arrow'>↓</a>
    //                 <a> / </a>
    //                 <a data-type="x_d_model" data-XFA="${XFA.id}" class='file_hover_not_selected'> Model ${i + 1} </a></div>`
    return `${html}</div>`
}

function dynamic__sounds_folder(x, id) {
    // let file_arrow = `no_arrow'>↓`

    let file_arrow
    x.audio[0].sound.length ? file_arrow = `file_arrow'>→` : file_arrow = `no_arrow'>↓`;

    // if (XFA.length !== 0) {
    //     file_arrow = `file_arrow'>→`
    // }

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
    // x.datapack[0].ordered[0].unordered[0].car.length ? html += dynamic_order(x.datapack[0].ordered[0].unordered[0].car ,x.id,'car') : 0;

    x.section_08.length ? html += dynamic__link_intro(x.section_08, x.id) : 0;
    x.section_32.length ? html += dynamic__link_main(x.section_32, x.id) : 0;
    x.section_48.length ? html += dynamic__link_demo(x.section_48, x.id) : 0;

    return html

}

function dynamic__link_folder(x) {
    let file_arrow = `no_arrow'>↓`

    // if (x.section_main.length !== 0 || x.section_intro.length !== 0 || x.section_demo[0] !== null) {
    //     file_arrow = `file_arrow'>→`
    // }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_link__folder" data-XFA="${x.id}" class='file_hover_not_selected'> Link </a>`

    // if (XFA.section_main.length != 0) {
    //     html += dynamic__link_main(XFA.section_main, XFA.id)
    // }
    // if (XFA.section_intro.length != 0) {
    //     html += dynamic__link_intro(XFA.section_intro, XFA.id)
    // }
    // if (XFA.section_demo.length !== 0 && XFA.section_demo[0] !== null) {
    //     html += dynamic__link_demo(XFA.section_demo, XFA.id)
    // }

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
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_car_sub_file', x.id, 'temp')

    // return html + '</div>';
}
// function dynamic__link(x) {
//     let html = genFileInViewer('y', '?', 'x_d_link_sub_file', x.id, 'temp')

//     return html + '</div>';
// }
function dynamic__idk(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_idk_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__interface(x) {
    let html = ''
    for (let i = 0; i < x.section_72.length; i++) {
        html += dynamic__interface_72(x.section_72[i])
    }

    return html;
}

function dynamic__interface_72(x) {

    html = genFileInViewer('n', '?', 'x_d_interface__layer_file', x.id, x.section_00[0])

    return html + '</div>';

}

function dynamic__frame_sparkler(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_frame_sparkler_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__frame_font(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_frame_font_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__frame_multi_font(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_frame_multi_font_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__frame_text(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_frame_text_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__sound_controls(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_sound_controls_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__sound_section(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_sound_section_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__model_link(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_model_link_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__model_sub_link(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_model_sub_link_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__wtf(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_wtf_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__unknown(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_unknown_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__unknown_00(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_unknown_00_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__activator(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_activator_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__flag(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_flag_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__var(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_var_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__gate(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_gate_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__strange(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_strange_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__object(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_object_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__um(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_um_sub_file', x.id, 'temp')

    // return html + '</div>';
}
function dynamic__world_settings(x) {
    return ''
    // let html = genFileInViewer('y', '?', 'x_d_world_settings_sub_file', x.id, 'temp')

    // return html + '</div>';
}
