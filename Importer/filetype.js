function filecheck() {
    let extension = g.file_name.slice((g.file_name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()
    // g = {
    //     debug: true,
    //     divisible_prev_value: 0,
    //     game: 0,
    //     console: 0,
    //     version: 0,
    //     name: 0,
    //     endian: true,
    // }

    if (new DataView(buffer).byteLength < 17) {
        wrong_file_type()
        return;
    }
    if (u32(0) === 33620128) {
        is_x()
    } else if (u32(0) === 2684354818) {
        g.endian = false
        is_x()
    } else {
        not_x()
    }

    //with version and extenstion

    function is_x() {
        g.version = u32(8)
        switch (g.version) {
        case 179:
            g.game = "hot_wheels_velocity_x"
            g.console = "ps2"
            //proto ps2 hwvx
            choose_game_type()
            break
        case 183:
            g.game = "hot_wheels_velocity_x"
            switch (extension) {
            case 'xpc':
                g.console = "pc"
            choose_game_type()

                break
            default:
                choose_x_game()
            }
            break
        case 243:
            g.game = "pac_man_world_rally"
            g.console = "xbox"
            //demo xbox pmwr
            choose_game_type()

            break
        case 249:
            g.game = "pac_man_world_rally"
            g.console = "ps2"
            //demo ps2 pmwr
            choose_game_type()

            break
        case 267:
            g.game = "pac_man_world_rally"
            switch (extension) {
            case 'xgc':
                g.console = "gamecube"
            choose_game_type()

                break
            case 'xps':
                g.console = "ps2"
            choose_game_type()

                break
            case 'xpc':
                g.console = "pc"
            choose_game_type()

                break
            default:
                choose_x_game()
            }
            break
        case 274:
            switch (extension) {
            case 'xpp':
                g.game = "pac_man_world_rally"
                g.console = "psp"
            choose_game_type()

                break
            case 'xps':
                g.game = "pac_man_world_rally"
                g.console = "ps2"
            choose_game_type()

                break
            case 'xpc':
                g.game = "snoopy_vs_the_red_baron"
                g.console = "pc"
            choose_game_type()

                break
            default:
                choose_x_game()
            }
            break
        default:
            choose_x_game()
        }

        // pc ,  gamecube xbox psp ps2
        // pac:
        // gc / ntsc: 267
        // ps2: ntsc: 267
        // pc: 267

        // hot wheels x
        // pc: ntsc: 183

        // by vers only prob
        // ps2: demo pac: 249
        // xbox:demo: 243

        // hot wheels x
        // ps2 prototype: 179

    }

    function not_x() {
        if (u32(4) == 4 && u32(284) == 1) {
            //pc save file
            g.endian = true;
            g.version = 'save'
            save_file_import(g.file_name)
            return;
        } else if (u16(0) === 14407 && u32(64) === 761487696) {
            //gc save file
            g.endian = false;
            g.version = 'save'
            save_file_import(g.file_name)
            return;
        } else if (u32(4) == 4 && u32(8) === 9624) {
            //ghost
            g.endian = true;
            g.version = 'save'
            save_file_import(g.file_name)
            return;
        } else {
            wrong_file_type()
            return
        }
    }

    function wrong_file_type() {
        alert('wrong file type!')
        buffer = null
        u8 = null
        u16 = null
        u32 = null
        f32 = null
        XFA = null
        x = null
    }

    function choose_x_game() {
        document.getElementById("file_viewer").innerHTML = `
        <div style="width: 90%;text-align: center;">choose type of file:</div>
        <div id='hot_wheels_velocity_x' class="select_option_fileview">Hot Wheels Velocity X</div>     
        <div id='snoopy_vs_the_red_baron' class="select_option_fileview">Snoopy vs The Red Baron</div>
        <div id='pac_man_world_rally' class="select_option_fileview">Pac Man World Rally</div>
        <div id='bigfoot_collision_course' class="select_option_fileview">Bigfoot: Collision Course</div>
        `
        let games = document.getElementsByClassName('select_option_fileview')
        for (let i = 0; i < games.length; i++) {
            games[i].addEventListener("click", choose_x_game_click);
        }

    }

    function choose_x_game_click() {
        g.game = this.id
        switch (extension) {
        case 'xpc':
            g.console = "pc"
            choose_game_type()

            break
        case 'xgc':
            g.console = "gamecube"
            choose_game_type()

            break
        case 'xdx':
            g.console = "xbox"
            choose_game_type()

            break
        case 'xpp':
            g.console = "psp"
            choose_game_type()

            break
        case 'xps':
            g.console = "ps2"
            choose_game_type()

            break
        default:
            choose_x_console()
            break
        }

    }

    function choose_x_console() {
        document.getElementById("file_viewer").innerHTML = `
        <div style="width: 90%;text-align: center;">choose console type:</div>
        <div id='pc' class="select_option_fileview">PC</div>     
        <div id='gamecube' class="select_option_fileview">GameCube</div>
        <div id='xbox' class="select_option_fileview">Xbox</div>
        <div id='psp' class="select_option_fileview">PSP</div>
        <div id='ps2' class="select_option_fileview">PS2</div>
        `
        let consoles = document.getElementsByClassName('select_option_fileview')
        for (let i = 0; i < consoles.length; i++) {
            consoles[i].addEventListener("click", choose_x_console_click);
        }

    }
    function choose_x_console_click() {
        g.console = this.id
            choose_game_type()
    }

}
