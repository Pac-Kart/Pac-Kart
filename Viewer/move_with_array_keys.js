"use strict";

function file_move_with_key(e) {
    if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        return;
    }
    e.preventDefault();

    let position = document.querySelector(".file_is_highlighted");
    if (!position)
        return;

    switch (e.key) {
    case 'ArrowDown':
        moveDown(position);
        break;
    case 'ArrowUp':
        go_up(position);
        break;
    case 'ArrowLeft':
        moveLeft(position);
        break;
    case 'ArrowRight':
        moveRight(position);
        break;
    }

    document.querySelector(".file_is_highlighted").scrollIntoView();

    function moveDown(position) {
        const parentElement = position.parentElement;
        const nextElementSibling = position.nextElementSibling;

        if (parentElement.children[0].innerHTML == '↓' && parentElement.children[0].classList[0] != 'no_arrow' && nextElementSibling !== null) {
            if (nextElementSibling.style.display == 'block') {
                if (nextElementSibling.children[2].tagName == "DIV") {
                    nextElementSibling.children[0].children[2].click()
                } else {
                    nextElementSibling.children[2].click()
                }
            }
        } else if (parentElement.nextElementSibling != null) {
            //go mid
            parentElement.nextElementSibling.children[2].click()
        } else if (parentElement.nextElementSibling == null) {

            let div = parentElement

            go_down(div)

        }
    }
    function go_down(div) {
        if (div.parentElement.id == 'file_viewer') {
            return
        } else if (div.parentElement.nextElementSibling == null) {
            go_down(div.parentElement)
        } else {
            div.parentElement.nextElementSibling.children[2].click()
        }

    }

    function go_up(div) {
        const parentElement = div.parentElement;
        const previousElementSibling = parentElement.previousElementSibling;

        if (previousElementSibling && previousElementSibling.id === 'file_viewer') {
            return;
        }

        if (previousElementSibling && previousElementSibling.classList.contains('file_hover_not_selected')) {
            previousElementSibling.click();
        } else if (previousElementSibling && previousElementSibling.classList.contains('sub_file_div')) {
            const lastChild = previousElementSibling.lastElementChild;

            if (lastChild && lastChild.tagName === "A") {
                lastChild.click();
            } else if (lastChild && lastChild.style.display === "block") {
                let tempElement = lastChild;

                while (tempElement.lastElementChild && tempElement.lastElementChild.style.display === 'block') {
                    tempElement = tempElement.lastElementChild;
                }

                tempElement.children[2].click();
            } else if (previousElementSibling.children[2]) {
                previousElementSibling.children[2].click();
            }
        }

    }

    function moveLeft(position) {
        if (position.parentElement.children[0].innerHTML === '↓') {
            position.parentElement.children[0].click();
        }
    }

    function moveRight(position) {
        if (position.parentElement.children[0].innerHTML === '→') {
            position.parentElement.children[0].click();
        }
    }

}