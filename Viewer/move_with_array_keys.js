function file_move_with_key(e,is_not_arrow) {
    if(is_not_arrow !== true){
    e.preventDefault()
    }
    position = document.getElementsByClassName("file_is_highlighted")[0]

    if (e.key === 'ArrowDown') {

        // const index = [...position.parentElement.parentElement].indexOf(position);
        // console.log(index)

        if (position.parentElement.children[0].innerHTML == '↓' && position.parentElement.children[0].classList[0] != 'no_arrow') {
            // try to go in
            // position.nextElementSibling.style.display == 'block';
            if (position.nextElementSibling.style.display == 'block') {
                if (position.nextElementSibling.children[2].tagName == "DIV") {
                    position.nextElementSibling.children[0].children[2].click()
                } else {
                    position.nextElementSibling.children[2].click()
                }
            }
        } else if (position.parentElement.nextElementSibling != null) {
            //go mid
            position.parentElement.nextElementSibling.children[2].click()
        } else if (position.parentElement.nextElementSibling == null) {

            let div = position.parentElement

            go_down(div)

            // position.parentElement.parentElement.nextElementSibling
            // go out
        }

    }

    if (e.key === 'ArrowUp') {

        if (position.parentElement.parentElement.id == 'file_viewer') {// top level
        } else {
            go_up(position)
        }

    }
    if (e.key === 'ArrowLeft') {
        // console.log('test')
        if (position.parentElement.children[0].innerHTML == '↓') {
            position.parentElement.children[0].click()
        }
    }
    if (e.key === 'ArrowRight') {
        if (position.parentElement.children[0].innerHTML == '→') {
            position.parentElement.children[0].click()
        }
    }

    position = document.getElementsByClassName("file_is_highlighted")[0]
    position.scrollIntoView()

}

function go_up(div) {
    // console.log(div.parentElement)
    // console.log(div.parentElement)
    // console.log(div.parentElement.previousElementSibling)
    if (div.parentElement.previousElementSibling.classList.contains('file_hover_not_selected')) {

        // console.log('get below / above')
        div.parentElement.previousElementSibling.click()

    } else if (div.parentElement.previousElementSibling.classList.contains('sub_file_div')) {
        if (div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].tagName == "A") {
            // console.log('go same / no inner', div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1])
            div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].click()
        } else {
            if (div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].style.display == "block") {
                is_end = false
                temp_element = div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1]

                while (is_end === false) {

                    if (temp_element.children[temp_element.children.length - 1].style.display == 'block') {
                        temp_element = temp_element.children[temp_element.children.length - 1]
                    } else {
                        temp_element.children[2].click()
                        is_end = true
                    }
                }
                // console.log('go in', div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length - 1].children[2])

                // go_down(div.parentElement.previousElementSibling.children[div.parentElement.previousElementSibling.children.length-1].children[2])
            } else {
                // console.log('go same')
                div.parentElement.previousElementSibling.children[2].click()
            }
        }

    }
}

function go_down(div) {
    // console.log(div)
    if (div.parentElement.id == 'file_viewer') {
        return
    } else if (div.parentElement.nextElementSibling == null) {
        go_down(div.parentElement)
    } else {
        div.parentElement.nextElementSibling.children[2].click()
    }

}
