function mouseMoveListener(e) {

    // console.log(e.pageX)

    mouse_offset = e.pageX
    outer_box_offset = file_viewer.getBoundingClientRect().left

    left_box = (mouse_offset - outer_box_offset) / outer_program.getBoundingClientRect().width * 99.5

    right_box = 99.5 - left_box

    if (right_box > 6 && left_box > 6) {
        file_viewer.style.width = left_box + "%"
        file_editor.style.width = right_box + "%"
    }
}

function drag_bar(e) {
    // console.log(e)
    document.body.style.userSelect = "none"
    window.addEventListener('mousemove', mouseMoveListener, true);
    window.addEventListener('mouseup', mouseUpListener, true);

}
function mouseUpListener(e) {
    console.log('mouse up');
    window.removeEventListener('mousemove', mouseMoveListener, true);
    document.body.style.userSelect = ""
}

class bitArray {
    constructor(length) {
        this.backingArray = Array.from({
            length: Math.ceil(length / 32)
        }, ()=>0)
        this.length = length
    }
    get(n) {
        return (this.backingArray[n / 32 | 0] & 1 << n % 32) > 0
    }
    on(n) {
        this.backingArray[n / 32 | 0] |= 1 << n % 32
    }
    off(n) {
        this.backingArray[n / 32 | 0] &= ~(1 << n % 32)
    }
    toggle(n) {
        this.backingArray[n / 32 | 0] ^= 1 << n % 32
    }
    forEach(callback) {
        this.backingArray.forEach((number,container)=>{
            const max = container == this.backingArray.length - 1 ? this.length % 32 : 32
            for (let x = 0; x < max; x++) {
                callback((number & 1 << x) > 0, 32 * container + x)
            }
        }
        )
    }
}

function check_debug_box() {

    if (document.getElementById("show_debug").checked == true) {

        document.getElementById("debug_style").innerHTML = `[data-debug="true"]{
    display:block;
}
`
    } else {

        document.getElementById("debug_style").innerHTML = `[data-debug="true"]{
    display:none;
}
`
    }
}
document.getElementById("show_debug").addEventListener("click", check_debug_box);
document.getElementById("drag_bar").addEventListener("mousedown", drag_bar);
