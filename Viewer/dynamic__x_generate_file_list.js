function dynamic__x_generator() {
    if (XFA.length === 1) {
        file_arrow = `no_arrow'>↓`
    } else {
        file_arrow = `file_arrow' style='padding-right:6px;padding-left:4px;'>↓`
    }
    let html = `<div class='sub_file_div'>
        <a class='${file_arrow}</a>
        <a> 🗀 </a>
        <a id='temp' data-type="x_d_folder" data-xfa="${XFA[0].id}" class='file_hover_not_selected'>${XFA[0].name}</a>`

    for (let i = 1; i < XFA.length; i++) {
        html += dynamic__x_generator_file_list(XFA[i], i)
    }
    html += "</div>"

    return html
}

function dynamic__x_generator_file_list(XFA, i) {
    let html = `<div style='display: block;' class='sub_file_div'>
                    <a class='file_arrow'>→</a>
                    <a> 🗎 </a> <a data-type="x_d_sub_file" data-xfa="${XFA.id}" class='file_hover_not_selected'>${i} ${XFA.type_s}</a>`

    if (XFA.sounds.length) {
        html += dynamic__sounds_folder(XFA.sounds, XFA.id)
    }
    if (XFA.textures.length) {
        html += dynamic__texture_folder(XFA.textures, XFA.id)
    }
    if (XFA.texture_animations.length) {
        html += dynamic__texture_animations_folder(XFA.texture_animations, XFA.id)
    }
    if (XFA.models.length) {
        html += dynamic__models_folder(XFA.models, XFA.id)
    }

    if (XFA.type_s === "car") {} else if (XFA.type_s === "interface") {
        html += dynamic__interface(XFA.type_data[0].section_04.low_section_00[0], XFA.id)
    } else if (XFA.type_s === 'link') {
        html += dynamic__link_folder(XFA.type_data[0].section_04.low_section_00[0])
    } else if (XFA.type_s === 'world') {} else if (XFA.type_s === 'share') {
        html += dynamic__share(XFA.type_data[0])
    }

    html += "</div>"

    return html
}

function dynamic__interface(XFA, XFA_ID) {
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
    }else{
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

function dynamic__texture_folder(XFA, XFA_ID) {
    let file_arrow = `no_arrow'>↓`

    if (XFA.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_textures_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Textures </a>`

    for (let i = 0; i < XFA.length; i++) {
        html += dynamic__textures(XFA[i], i)
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
    let file_arrow = `no_arrow'>↓`

    if (XFA.sections.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_model_header" data-XFA="${XFA.id}" class='file_hover_not_selected'> ${XFA.name} </a>`

    for (let i = 0; i < XFA.sections.length; i++) {
        html += dynamic__model_section(XFA.sections[i], i)
    }

    html += "</div>"
    return html
}
function dynamic__model_section(XFA, i) {
    let file_arrow = `no_arrow'>↓`

    if (XFA.sub_section.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_model_section" data-XFA="${XFA.id}" class='file_hover_not_selected'> Section ${i + 1} </a>`

    for (let i = 0; i < XFA.sub_section.length; i++) {
        html += dynamic__model_sub_section(XFA.sub_section[i], i)
    }

    html += "</div>"
    return html
}
function dynamic__model_sub_section(XFA, i) {

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> / </a>
                    <a data-type="x_d_model" data-XFA="${XFA.id}" class='file_hover_not_selected'> Model ${i + 1} </a></div>`
    return html
}

function dynamic__sounds_folder(XFA, XFA_ID) {
    let file_arrow = `no_arrow'>↓`

    if (XFA.length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_sound_folder" data-XFA="${XFA_ID}" class='file_hover_not_selected'> Sounds </a>`

    for (let i = 0; i < XFA.length; i++) {
        html += dynamic__sound(XFA[i], i)
    }

    html += "</div>"
    return html
}
function dynamic__sound(XFA, i) {
    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='no_arrow'>↓</a>
                    <a> 🕪 </a>
                    <a data-type="x_d_sound" data-XFA="${XFA.id}" class='file_hover_not_selected'> Sound ${i + 1} </a></div>`
    return html
}

function dynamic__link_folder(XFA) {
    let file_arrow = `no_arrow'>↓`

    if (XFA.section_main.length !== 0 || XFA.section_intro.length !== 0 || XFA.section_demo[0] !== null) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                    <a class='${file_arrow}</a>
                    <a> 🗀 </a>
                    <a data-type="x_d_link_folder" data-XFA="${XFA.id}" class='file_hover_not_selected'> Link </a>`

    if (XFA.section_main.length != 0) {
        html += dynamic__link_main(XFA.section_main, XFA.id)
    }
    if (XFA.section_intro.length != 0) {
        html += dynamic__link_intro(XFA.section_intro, XFA.id)
    }
    if (XFA.section_demo.length !== 0 && XFA.section_demo[0] !== null) {
        html += dynamic__link_demo(XFA.section_demo, XFA.id)
    }

    html += "</div>"
    return html
}

function dynamic__link_intro(XFA, id) {
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='no_arrow'>↓</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link_intro" data-xfa="${id}" class='file_hover_not_selected'> Intro </a>
                </div>`

    return html
}
function dynamic__link_demo(XFA, id) {
    let file_arrow = `no_arrow'>↓`

    if (XFA[0].link_array[0].length !== 0) {
        file_arrow = `file_arrow'>→`
    }
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='${file_arrow}</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link_demo" data-xfa="${id}" class='file_hover_not_selected'> Demo </a>`

    for (let i = 0; i < XFA[0].link_array[0].length; i++) {

        html += dynamic__link_main_sub_group(XFA[0].link_array[0][i], i, XFA[0].link_array[0][i].id)
    }

    html += '</div>'

    return html
}
function dynamic__link_main(XFA, id) {
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='file_arrow'>→</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link_main" data-xfa="${id}" class='file_hover_not_selected'> Main </a>`

    for (let i = 0; i < XFA.length; i++) {

        html += dynamic__link_main_group(XFA[i], i, XFA[i][1])
    }

    html += '</div>'

    return html
}
function dynamic__link_main_group(XFA, i, id) {
    let file_arrow = `no_arrow'>↓`

    if (XFA[0].length !== 0) {
        file_arrow = `file_arrow'>→`
    }

    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='${file_arrow}</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link_main_group" data-xfa="${id}" class='file_hover_not_selected'> Group ${i + 1}</a>`

    for (let i = 0; i < XFA[0].length; i++) {

        html += dynamic__link_main_sub_group(XFA[0][i][0], i, XFA[0][i][1])
    }

    html += '</div>'

    return html
}
function dynamic__link_main_sub_group(XFA, i, id) {
    let html = `<div style='display: none;' class='sub_file_div'>
                   <a class='no_arrow'>↓</a>
                   <a> 🗀 </a>
                   <a data-type="x_d_link_main_sub_group" data-xfa="${id}" class='file_hover_not_selected'> Sub Group ${i + 1}</a>
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
