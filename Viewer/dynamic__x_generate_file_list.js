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
    if (XFA.type_s === 'link') {
        html += dynamic__link_folder(XFA.type_data[0])
    }

    html += "</div>"

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
