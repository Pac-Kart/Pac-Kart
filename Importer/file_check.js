function filecheck() {
    let extension = g.file_name.slice((g.file_name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()

    if (new DataView(buffer).byteLength < 17) {
        wrong_file_type()
        return;
    }
    switch (u32(0)) {
    case 33620128:
        is_x();
        break;
    case 2684354818:
        g.endian = false;
        is_x();
        break;
    default:
        not_x();
        break;
    }

    //with version and extenstion

    function is_x() {

        //magic 2
        switch (u32(4)) {
        case 67174573:
        case 134348960:
            g.type_string = "mmcvl"
            g.game = "motor_mayhem"
            choose_game_type()
            return
            break
        case 67174574:
            is_hot_wheels()
            return
            break
        case 67174575:
            is_later_game()
            break
        default:
            alert('magic 2 diff val: ', u32(4))
        }

    }

    function is_hot_wheels() {
        g.game = "hot_wheels_velocity_x"
        g.version = u32(8)
        switch (g.version) {
        case 177:
        case 179:
            g.console = "ps2"
            g.type_string = "hwvx_proto"
            //proto ps2 hwvx
            choose_game_type()
            break
        case 183:
            switch (extension) {
            case 'xpc':
                g.type_string = "hwvx_pc"
                g.console = "pc"
                choose_game_type()
                break
            case 'xgc':
                g.type_string = "hwvx_gc"
                g.console = "gamecube"
                choose_game_type()
                break
            case 'xps':
                g.type_string = "hwvx_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            default:
                choose_x_game()
            }
            break
        }
    }

    function is_later_game() {
        g.version = u32(8)
        switch (g.version) {
        case 243:
            g.type_string = "pmwr_xbox"
            g.game = "pac_man_world_rally"
            g.console = "xbox"
            //demo xbox pmwr
            choose_game_type()
            break
        case 249:
            g.type_string = "pmwr_ps2_demo"
            g.game = "pac_man_world_rally"
            g.console = "ps2"
            //demo ps2 pmwr
            choose_game_type()
            break
        case 267:
            g.game = "pac_man_world_rally"
            switch (extension) {
            case 'xgc':
                g.type_string = "pmwr_gc"
                g.console = "gamecube"
                choose_game_type()
                break
            case 'xps':
                g.type_string = "pmwr_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            case 'xpc':
                g.type_string = "pmwr_pc"
                g.console = "pc"
                choose_game_type()
                break
            default:
                choose_x_game()
            }
            break
        case 273:
            g.game = "snoopy_vs_the_red_baron"
            switch (extension) {
            case 'xps':
                g.type_string = "svtrb_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            case 'xpp':
                g.type_string = "svtrb_psp"
                g.console = "psp"
                choose_game_type()
            }
            break
        case 274:
            switch (extension) {
            case 'xpp':
                g.game = "pac_man_world_rally"
                g.type_string = "pmwr_psp"
                g.console = "psp"
                choose_game_type()
                break
            case 'xps':
                g.game = "pac_man_world_rally"
                g.type_string = "pmwr_ps2"
                g.console = "ps2"
                choose_game_type()
                break
            case 'xpc':
                g.game = "snoopy_vs_the_red_baron"
                g.type_string = "svtrb_pc"
                g.console = "pc"
                choose_game_type()
                break
            default:
                choose_x_game()
            }
            break
        case 288:
            g.game = "bee_movie_game"
            g.type_string = "bmg_demo"
            g.console = "wii"
            //demo wii version
            choose_game_type()
            break
        case 312:
            g.game = "bee_movie_game"
            switch (extension) {
            case 'xwi':
                g.type_string = "bmg_wii"
                g.console = "wii"
                choose_game_type()
                break
            case 'xdx9':
                g.type_string = "bmg_pc"
                g.console = "pc"
                choose_game_type()
                break
            }
            break
        case 315:
            g.game = "bigfoot_collision_course"
            switch (extension) {
            case 'xwi':
                g.type_string = "bcc_wii"
                g.console = "wii"
                choose_game_type()
                break
            case 'xdx9':
                g.type_string = "bcc_pc"
                g.console = "pc"
                choose_game_type()
                break
            }
            break
        default:
            console.log(g.version)
            choose_x_game()
        }
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
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose type of file:</div>
        <div id='hot_wheels_velocity_x' class="select_option_fileview">Hot Wheels Velocity X</div>
        <div id='snoopy_vs_the_red_baron' class="select_option_fileview">Snoopy vs The Red Baron</div>
        <div id='pac_man_world_rally' class="select_option_fileview">Pac Man World Rally</div>
        <div id='bee_movie_game' class="select_option_fileview">Bee Movie Game</div>
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
        case 'xwi':
            g.console = "wii"
            choose_game_type()
            break
        case 'xdx9':
            g.console = "pc"
            choose_game_type()
            break
        default:
            choose_x_console()
            break
        }

    }

    function choose_x_console() {
        file_viewer.innerHTML = `
        <div style="width: 90%;text-align: center;">choose console type:</div>
        <div id='pc' class="select_option_fileview">PC</div>
        <div id='gamecube' class="select_option_fileview">GameCube</div>
        <div id='xbox' class="select_option_fileview">Xbox</div>
        <div id='psp' class="select_option_fileview">PSP</div>
        <div id='ps2' class="select_option_fileview">PS2</div>
        <div id='wii' class="select_option_fileview">Wii</div>
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
