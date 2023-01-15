// call this whenever an input box is updated
// all inputs have these datasets: type, offset
// types: u32 | u16 | u8 | Float | custom
function update_input(e) {
    console.log(this.tagName, e)
    if (this.tagName === "INPUT") {
        if (this.dataset.type === "u32") {
            let new_val = this.value

            new DataView(buffer).setUint32(this.dataset.offset, new_val, is_little_endian)

            this.value = u32(this.dataset.offset, is_little_endian)

        } else if (this.dataset.type === "u16") {
            let new_val = this.value

            new DataView(buffer).setUint16(this.dataset.offset, new_val, is_little_endian)

            this.value = u16(this.dataset.offset, is_little_endian)

        } else if (this.dataset.type === "u8") {
            let new_val = this.value

            new DataView(buffer).setUint8(this.dataset.offset, new_val)

            this.value = u8(this.dataset.offset)

        } else if (this.dataset.type === "float") {
            let new_val = this.value

            new DataView(buffer).setFloat32(this.dataset.offset, new_val, is_little_endian)
            let set_val = f32(this.dataset.offset, is_little_endian)


            if (isNaN(set_val) === true) {
                console.log('f')
                new DataView(buffer).setFloat32(this.dataset.offset, 0, is_little_endian)
                set_val = f32(this.dataset.offset, is_little_endian)
            }

            if (Number.isSafeInteger(set_val) === false) {
                new DataView(buffer).setFloat32(this.dataset.offset, new_val, is_little_endian)
                set_val = f32(this.dataset.offset, is_little_endian)
            }

            if (Number.isInteger(set_val)) {

                this.value = set_val
            } else {
                this.value = set_val.toFixed(2)
            }

        }
    } else if (this.tagName === "SELECT") {
        if (this.dataset.type === "u32") {
            let new_val = this.value

            new DataView(buffer).setUint32(this.dataset.offset, new_val, is_little_endian)

            this.value = u32(this.dataset.offset, is_little_endian)

        } else if (this.dataset.type === "u16") {
            let new_val = this.value

            new DataView(buffer).setUint16(this.dataset.offset, new_val, is_little_endian)

            this.value = u16(this.dataset.offset, is_little_endian)

        } else if (this.dataset.type === "u8") {
            let new_val = this.value

            new DataView(buffer).setUint8(this.dataset.offset, new_val)

            this.value = u8(this.dataset.offset)

        } else if (this.dataset.type === "float") {
            let new_val = this.value

            new DataView(buffer).setFloat32(this.dataset.offset, new_val, is_little_endian)
            let set_val = f32(this.dataset.offset, is_little_endian)

            if (isNaN(set_val) === true) {
                console.log('f')
                new DataView(buffer).setFloat32(this.dataset.offset, 0, is_little_endian)
                set_val = f32(this.dataset.offset, is_little_endian)
            }
            if (Number.isSafeInteger(set_val) === false) {
                new DataView(buffer).setFloat32(this.dataset.offset, 0, is_little_endian)
                set_val = f32(this.dataset.offset, is_little_endian)
            }

            if (Number.isInteger(set_val)) {

                this.value = set_val
            } else {
                this.value = set_val.toFixed(2)
            }

        }
    }
}
