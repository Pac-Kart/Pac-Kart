"use strict";

function get_hwvx_pc_sec_id(string) {
    switch (string) {
    case "E@3Z":
        return "hwvx_pc_datapack"
        break
    case "audi":
        return "hwvx_pc_audio"
        break
    case "ad00":
        return "hwvx_pc_audio_00"
        break
    case "opll":
        return "hwvx_pc_get_offset_patch_list"
        break
    case "ipll":
        return "hwvx_pc_get_index_patch_list"
        break
    case "iplq":
        return "hwvx_pc_geo_patch_list"
        break
    case "ordr":
        return "hwvx_pc_ordered"
        break
    case "4unr":
        return "hwvx_pc_unordered"
        break
    case 'buff':
        return "hwvx_pc_Texture_8"
        break
    case 'gjbf':
        return "hwvx_pc_file_header"
        break
    case ']7Zf':
        return "hwvx_pc_directory"
        break
    case 'l^d@':
        return "hwvx_pc_basic"
        break
    case 'L@8_':
        return "hwvx_pc_basic_4"
        break
    case 'Y5cc':
        return "hwvx_pc_world"
        break
    case 'LTSU':
        return "hwvx_pc_world_12"
        break
    case 'E:0u':
        return "hwvx_pc_world_20"
        break
    case ';jv0':
        return "hwvx_pc_world_36"
        break
    case '7V?m':
        return "hwvx_pc_world_36_48"
        break
    case 'huaA':
        return "hwvx_pc_Airbox"
        break
    case 'c@^f':
        return "hwvx_pc_world_36_36"
        break
    case 'yhnO':
        return "hwvx_pc_world_36_28"
        break
    case 'Hz?v':
        return "hwvx_pc_world_36_48_16"
        break
    case 'OCZ5':
        return "hwvx_pc_world_36_48_24"
        break
    case '^ooJ':
        return "hwvx_pc_world_76"
        break
    case 'M8W@':
        return "hwvx_pc_world_92"
        break
    case '_LnX':
        return "hwvx_pc_world_52"
        break
    case 'yb=a':
        return "hwvx_pc_world_52_88t1"
        break
    case 'H3j]':
        return "hwvx_pc_world_100"
        break
    case ';GIU':
        return "hwvx_pc_world_108"
        break
    case '8Af;':
        return "hwvx_pc_world_108_40"
        break
    case 'UW;E':
        return "hwvx_pc_world_108_44t1"
        break
    case '3erz':
        return "hwvx_pc_world_108_44t2"
        break
    case '2W6Y':
        return "hwvx_pc_world_108_44t3"
        break
    case 'M?B6':
        return "hwvx_pc_world_108_44t6"
        break
    case '[]7N':
        return "hwvx_pc_world_4"
        break
    case 'C6mn':
        return "hwvx_pc_world_4_20"
        break
    case 'WM;j':
        return "hwvx_pc_world_4_16"
        break
    case 'I1I4':
        return "hwvx_pc_world_4_16_4"
        break
    case 'rtsI':
        return "hwvx_pc_world_120"
        break
    case 'H>:s':
        return "hwvx_pc_world_routes"
        break
    case 'pgig':
        return "hwvx_pc_world_routes_32"
        break
    case 'YBM0':
        return "hwvx_pc_world_routes_20"
        break
    case 'axYu':
        return "hwvx_pc_world_routes_24"
        break
    case 'Ow;Q':
        return "hwvx_pc_triggers_and_actions"
        break
    case 'ljKo':
        return "hwvx_pc_triggers_and_actions_4t1"
        break
    case 'mcgD':
        return "hwvx_pc_triggers_and_actions_4t3"
        break
    case 'y@YQ':
        return "hwvx_pc_triggers_and_actions_4t5"
        break
    case 'spCK':
        return "hwvx_pc_triggers_and_actions_4t6"
        break
    case 'BdCW':
        return "hwvx_pc_triggers_and_actions_4t6t4"
        break
    case 'No@_':
        return "hwvx_pc_triggers_and_actions_4t6t20"
        break
    case '_qnL':
        return "hwvx_pc_triggers_and_actions_4trest"
        break
    case '7jf[':
        return "hwvx_pc_triggers_and_actions_12"
        break
    case 'gIZv':
        return "hwvx_pc_triggers_and_actions_12_4"
        break
    case 'sub?':
        return "hwvx_pc_triggers_and_actions_sub_list"
        break
    case '06f=':
        return "hwvx_pc_actions"
        break
    case ':O[[':
        return "hwvx_pc_actions_4tAirboxChangeMode"
        break
    case 'LGOJ':
        return "hwvx_pc_actions_4tCameraSetTargetst13"
        break
    case 'E[LH':
        return "hwvx_pc_actions_4tCameraSetTargetst14"
        break
    case 'g9Bl':
        return "hwvx_pc_actions_4tCameraSetTargetst17"
        break
    case 'tokw':
        return "hwvx_pc_actions_4tDestructibleChangeMode"
        break
    case 'Mlm9':
        return "hwvx_pc_actions_4tFXPointChangeMode"
        break
    case 'W_H0':
        return "hwvx_pc_actions_4tInterfacePlay"
        break
    case 'fX>L':
        return "hwvx_pc_actions_4tItemChangeMode"
        break
    case 'fgHH':
        return "hwvx_pc_actions_4tTimerChangevalue"
        break
    case '5a;y':
        return "hwvx_pc_actions_4tTimerChangeMode"
        break
    case 'Nn0L':
        return "hwvx_pc_actions_4tMoveableChangeMode"
        break
    case 'FFn^':
        return "hwvx_pc_actions_4tMusicChanget10"
        break
    case 'QGo>':
        return "hwvx_pc_actions_4tMusicChanget20"
        break
    case 'iN;x':
        return "hwvx_pc_actions_4tNavPointChangeMode"
        break
    case 'a8@U':
        return "hwvx_pc_actions_4tTargetArrowSetTargett1"
        break
    case '_diC':
        return "hwvx_pc_actions_4tTargetArrowSetTargett5"
        break
    case 'ACYg':
        return "hwvx_pc_actions_4tVariableChangeValue"
        break
    case 'e^ln':
        return "hwvx_pc_actions_4tVehicleChangeMode"
        break
    case '4Yri':
        return "hwvx_pc_actions_4tPrintDebugString"
        break
    case '>8[6':
        return "hwvx_pc_actions_4tVehicleTeleport"
        break
    case 'PQm;':
        return "hwvx_pc_actions_4tVehicleChangeControl"
        break
    case '>QCg':
        return "hwvx_pc_actions_4tVehicleRemoveItem"
        break
    case 'H:9G':
        return "hwvx_pc_actions_4tVariableChangeMode"
        break
    case 'C;l7':
        return "hwvx_pc_actions_4tEndInterface"
        break
    case 'dSi>':
        return "hwvx_pc_actions_4tHUDChangeMode"
        break
    case 'j8XE':
        return "hwvx_pc_actions_4tCodeVariableModifyValuet5"
        break
    case 'd?ko':
        return "hwvx_pc_actions_4tCodeVariableModifyValuet6"
        break
    case 'ujJ^':
        return "hwvx_pc_actions_4tPauseTACSystem"
        break
    case 'HmcY':
        return "hwvx_pc_actions_4tResetGameRound"
        break
    case 'jnUt':
        return "hwvx_pc_actions_4tRoundComplete"
        break
    case 'tQ@M':
        return "hwvx_pc_actions_4tVehicleGiveItem"
        break
    case 'idke':
        return "hwvx_pc_actions_4tSetPlayerOrder"
        break
    case 'e8[m':
        return "hwvx_pc_collision"
        break
    case 'D[zz':
        return "hwvx_pc_collision_32"
        break
    case 'ilFa':
        return "hwvx_pc_collision_32_56"
        break
    case 'Hmgf':
        return "hwvx_pc_collision_64"
        break
    case 'WKVo':
        return "hwvx_pc_collision_76"
        break
    case '0@vU':
        return "hwvx_pc_collision_76_16"
        break
    case 'qn0E':
        return "hwvx_pc_collision_84"
        break
    case '4[M<':
        return "hwvx_pc_collision_related"
        break
    case '7WTA':
        return "hwvx_pc_collision_link"
        break
    case 'KEpY':
        return "hwvx_pc_geo_basic"
        break
    case 'SV]u':
        return "hwvx_pc_geo_basic_0"
        break
    case 'mWmA':
        return "hwvx_pc_share"
        break
    case '7iX0':
        return "hwvx_pc_model"
        break
    case '49_D':
        return "hwvx_pc_model_gc_8"
        break
    case 'bzYZ':
        return "hwvx_pc_model_gc_8_8"
        break
    case 'N6sV':
        return "hwvx_pc_model_gc_8_8_12"
        break
    case 'qgcH':
        return "hwvx_pc_model_gc_8_12"
        break
    case 'sh0M':
        return "hwvx_pc_model_gc_8_16sec1"
        break
    case 'LFg=':
        return "hwvx_pc_model_gc_8_16"
        break
    case '4qqw':
        return "hwvx_pc_model_ps2_8"
        break
    case 'CSz^':
        return "hwvx_pc_model_ps2_8_8"
        break
    case 'UTX:':
        return "hwvx_pc_model_pc_8"
        break
    case '<9^0':
        return "hwvx_pc_model_pc_8_8"
        break
    case 'PXaM':
        return "hwvx_pc_model_pc_8_8_12"
        break
    case 'VMfD':
        return "hwvx_pc_model_pc_8_12_type_a"
        break
    case 'Lp_B':
        return "hwvx_pc_model_pc_8_16"
        break
    case 'Q8UA':
        return "hwvx_pc_model_12"
        break
    case '@2Uu':
        return "hwvx_pc_texture_anims"
        break
    case '[m@P':
        return "hwvx_pc_model_anims_1"
        break
    case 'L2=n':
        return "hwvx_pc_model_anims_1_28"
        break
    case 'De[c':
        return "hwvx_pc_model_anims_1_36"
        break
    case '8ebo':
        return "hwvx_pc_model_anims_1_44"
        break
    case '9Dh0':
        return "hwvx_pc_model_anims_2"
        break
    case 'J6YM':
        return "hwvx_pc_model_anims_2_16"
        break
    case 'w_ld':
        return "hwvx_pc_texture"
        break
    case 'v=q<':
        return "hwvx_pc_share_end"
        break
    case 'eU1@':
        return "hwvx_pc_share_end_8"
        break
    case '8Taq':
        return "hwvx_pc_share_end_16"
        break
    case 'MADG':
        return "hwvx_pc_world_text_link"
        break
    case 'oo5d':
        return "hwvx_pc_model_car_sound_link"
        break
    case '=fbU':
        return "hwvx_pc_model_car_sound_link_28"
        break
    case 'aFli':
        return "hwvx_pc_world_color_section"
        break
    case 'OyRE':
        return "hwvx_pc_world_color_section_4"
        break
    case 'eugV':
        return "hwvx_pc_world_idk"
        break
    case '8j8v':
        return "hwvx_pc_world_idk_48"
        break
    case 'Rfa7':
        return "hwvx_pc_world_idk_48_8"
        break
    case ']Pkr':
        return "hwvx_pc_world_idk_48_8_8"
        break
    case 'P9kZ':
        return "hwvx_pc_some_world_thing"
        break
    case '[LuX':
        return "hwvx_pc_some_world_thing_88"
        break
    case 'EU_i':
        return "hwvx_pc_world_small_section"
        break
    case 'LcQw':
        return "hwvx_pc_world_small_section_12"
        break
    case 's7s<':
        return "hwvx_pc_world_model_related"
        break
    case '8[Hz':
        return "hwvx_pc_geo_list"
        break
    case '9=zw':
        return "hwvx_pc_geo_list_4"
        break
    case '?DFi':
        return "hwvx_pc_geo_list_4_8"
        break
    case 'WU;K':
        return "hwvx_pc_geo_list_4_4"
        break
    case '6suT':
        return "hwvx_pc_geo_list_4_16"
        break
    case 'x:>N':
        return "hwvx_pc_collision_settings"
        break
    case 'GyBQ':
        return "hwvx_pc_collision_settings_72"
        break
    case '7Fjr':
        return "hwvx_pc_car"
        break
    case 'hQfb':
        return "hwvx_pc_car_108"
        break
    case 'EZIQ':
        return "hwvx_pc_car_120"
        break
    case 'BJzR':
        return "hwvx_pc_car_124"
        break
    case ':cKe':
        return "hwvx_pc_car_128"
        break
    case 'd[9p':
        return "hwvx_pc_car_128_132"
        break
    case 'MlN:':
        return "hwvx_pc_car_128_132_4t0"
        break
    case '9>@X':
        return "hwvx_pc_car_128_132_4t4"
        break
    case 'DZps':
        return "hwvx_pc_car_128_144"
        break
    case 'ef=R':
        return "hwvx_pc_car_128_144_4"
        break
    case '4R^H':
        return "hwvx_pc_car_132"
        break
    case 'pbIx':
        return "hwvx_pc_car_132_44"
        break
    case 'SLy_':
        return "hwvx_pc_car_136"
        break
    case ']w><':
        return "hwvx_pc_car_140"
        break
    case '@^Ua':
        return "hwvx_pc_car_140_56"
        break
    case 'zRSI':
        return "hwvx_pc_car_140_64"
        break
    case 'h?>h':
        return "hwvx_pc_car_164"
        break
    case 'pZ_:':
        return "hwvx_pc_car_164_8"
        break
    case 'JB2T':
        return "hwvx_pc_car_172"
        break
    case 'KTBx':
        return "hwvx_pc_car_212"
        break
    case 'n?=<':
        return "hwvx_pc_car_220"
        break
    case '5F7:':
        return "hwvx_pc_car_228"
        break
    case 'eeqI':
        return "hwvx_pc_car_252"
        break
    case 'd<Z6':
        return "hwvx_pc_car_252_4"
        break
    case 'K?5t':
        return "hwvx_pc_car_252_4_4"
        break
    case 'og:n':
        return "hwvx_pc_car_260"
        break
    case 'R01L':
        return "hwvx_pc_car_260_56"
        break
    case 'Dzpl':
        return "hwvx_pc_car_268"
        break
    case 'Jv>F':
        return "hwvx_pc_car_related"
        break
    case '7TM5':
        return "hwvx_pc_car_related_48"
        break
    case 'Y1j;':
        return "hwvx_pc_car_related_48_8"
        break
    case 'HFhM':
        return "hwvx_pc_car_path_related"
        break
    case 'y67c':
        return "hwvx_pc_car_path_related_88"
        break
    case 'uz0f':
        return "hwvx_pc_car_link"
        break
    case '4U0;':
        return "hwvx_pc_car_link_56"
        break
    case 'U4vm':
        return "hwvx_pc_car_link_64"
        break
    case '9Ojd':
        return "hwvx_pc_car_link_68"
        break
    case '<D=[':
        return "hwvx_pc_car_unknown_link"
        break
    case 'zeEf':
        return "hwvx_pc_car_unknown_link_72"
        break
    case 'b0xQ':
        return "hwvx_pc_model_link"
        break
    case '<k5r':
        return "hwvx_pc_model_link_4"
        break
    case 'L@Xs':
        return "hwvx_pc_model_link_12"
        break
    case '?i?9':
        return "hwvx_pc_model_link_32"
        break
    case 'V4T]':
        return "hwvx_pc_model_link_36"
        break
    case 'st=p':
        return "hwvx_pc_model_link_48"
        break
    case 'wQly':
        return "hwvx_pc_model_link_52"
        break
    case '492S':
        return "hwvx_pc_model_link_56"
        break
    case 'PQhP':
        return "hwvx_pc_model_link_56_4"
        break
    case 'jb_T':
        return "hwvx_pc_model_link_56_4_12"
        break
    case 'IHUi':
        return "hwvx_pc_model_link_56_4_16"
        break
    case '^PC1':
        return "hwvx_pc_text"
        break
    case 'BtPG':
        return "hwvx_pc_font"
        break
    case '=OMm':
        return "hwvx_pc_font_28"
        break
    case 'oMJW':
        return "hwvx_pc_font_36"
        break
    case 'Pydv':
        return "hwvx_pc_mysterious"
        break
    case 'U=7b':
        return "hwvx_pc_mysterious_24t5"
        break
    case 'ekvA':
        return "hwvx_pc_mysterious_24t5_24"
        break
    case ';P7G':
        return "hwvx_pc_mysterious_24t5_32"
        break
    case 'SJ43':
        return "hwvx_pc_mysterious_24t5_44"
        break
    case '=o?j':
        return "hwvx_pc_mysterious_24t6"
        break
    case 'k0iY':
        return "hwvx_pc_mysterious_24t6_16"
        break
    case 'hY?B':
        return "hwvx_pc_mysterious_24t6_32"
        break
    case '[ClP':
        return "hwvx_pc_mysterious_24t6_36"
        break
    case 'zV<t':
        return "hwvx_pc_mysterious_24t6_40"
        break
    case '[sZX':
        return "hwvx_pc_mysterious_24t7"
        break
    case 'xV]Y':
        return "hwvx_pc_mysterious_24t7_72"
        break
    case 'BNyM':
        return "hwvx_pc_mysterious_24t7_80"
        break
    case 'KcWa':
        return "hwvx_pc_mysterious_24t7_88"
        break
    case 'HmOL':
        return "hwvx_pc_mysterious_24t9"
        break
    case 'a<[>':
        return "hwvx_pc_mysterious_24t9_28"
        break
    case 'seH@':
        return "hwvx_pc_mysterious_24t9_32"
        break
    case 'yf<j':
        return "hwvx_pc_mysterious_24t10"
        break
    case 'LVG;':
        return "hwvx_pc_mysterious_24t10_8"
        break
    case 'GCMk':
        return "hwvx_pc_mysterious_24t10_8_24"
        break
    case 'oR@@':
        return "hwvx_pc_mysterious_24t10_8_24_16"
        break
    case 'oY<2':
        return "hwvx_pc_mysterious_24t10_8_24_32"
        break
    case 'YGch':
        return "hwvx_pc_mysterious_24t10_8_24_44"
        break
    case 'SeUk':
        return "hwvx_pc_strange"
        break
    case '0RVf':
        return "hwvx_pc_strange_28"
        break
    case 'Nxin':
        return "hwvx_pc_unknown"
        break
    case 'McWu':
        return "hwvx_pc_unknown_4"
        break
    case '1NM>':
        return "hwvx_pc_unknown_4_4t4"
        break
    case 'n?3D':
        return "hwvx_pc_unknown_4_4t4_28"
        break
    case 'U]Qo':
        return "hwvx_pc_unknown_4_8t1"
        break
    case '2De^':
        return "hwvx_pc_unknown_4_8t1_40t1"
        break
    case 'gLz:':
        return "hwvx_pc_unknown_4_8t1_40t2"
        break
    case 'E8nv':
        return "hwvx_pc_unknown_4_8t1_40t2_12t0"
        break
    case 'FhYK':
        return "hwvx_pc_unknown_4_8t1_40t2_12t1"
        break
    case '9kqe':
        return "hwvx_pc_unknown_4_8t1_40t2_12t2"
        break
    case ';RF:':
        return "hwvx_pc_unknown_4_8t1_44"
        break
    case 'w<T^':
        return "hwvx_pc_unknown_4_8t5"
        break
    case 'JCe3':
        return "hwvx_pc_unknown_4_8t5_28"
        break
    case 'e?22':
        return "hwvx_pc_unknown_thing"
        break
    case 'eWKC':
        return "hwvx_pc_unknown_thing_4t0"
        break
    case '81tK':
        return "hwvx_pc_unknown_thing_4t0_36"
        break
    case 'XnWM':
        return "hwvx_pc_unknown_thing_4t0_44"
        break
    case '<5bC':
        return "hwvx_pc_unknown_thing_4t1"
        break
    case 'r^sH':
        return "hwvx_pc_unknown_thing_4t1_36"
        break
    case 'ffDE':
        return "hwvx_pc_unknown_thing_4t1_44"
        break
    case 'VHxw':
        return "hwvx_pc_unknown_thing_4t2"
        break
    case 'JF0;':
        return "hwvx_pc_unknown_thing_4t2_16"
        break
    case 'sQ5X':
        return "hwvx_pc_unknown_thing_4t2_24"
        break
    case ';89_':
        return "hwvx_pc_unknown_thing_24"
        break
    case 'xZCS':
        return "hwvx_pc_unknown_thing_32"
        break
    case '7XAL':
        return "hwvx_pc_asdf"
        break
    case 'IZJx':
        return "hwvx_pc_asdf_12t1"
        break
    case '2nh]':
        return "hwvx_pc_asdf_12t2"
        break
    case 'LG>d':
        return "hwvx_pc_asdf_144"
        break
    case ']Bz4':
        return "hwvx_pc_asdf_152"
        break
    case ']6bl':
        return "hwvx_pc_asdf_164"
        break
    case 'zSUy':
        return "hwvx_pc_asdf_168"
        break
    case '7:uu':
        return "hwvx_pc_asdf_172"
        break
    case '7xDZ':
        return "hwvx_pc_unknown_idk_sec"
        break
    case 'omVp':
        return "hwvx_pc_unknown_idk_sec_28"
        break
    case 'mIEQ':
        return "hwvx_pc_unknown_idk_sec_32"
        break
    case 'F@go':
        return "hwvx_pc_unknown_idk_sec_32_8"
        break
    case 'Qk6S':
        return "hwvx_pc_unknown_idk_sec_36"
        break
    case 'U4:B':
        return "hwvx_pc_unknown_idk_sec_36_4"
        break
    case 'tVDG':
        return "hwvx_pc_unknown_idk_sec_40"
        break
    case '0XIR':
        return "hwvx_pc_unknown_idk_sec_40_4"
        break
    case 'DVnq':
        return "hwvx_pc_unknown_idk_sec_48"
        break
    case 'X4YZ':
        return "hwvx_pc_grand_section"
        break
    case 'ch1T':
        return "hwvx_pc_unknown_whatever"
        break
    case 'OiQ6':
        return "hwvx_pc_unknown_whatever_16"
        break
    case 'jGiO':
        return "hwvx_pc_unknown_whatever_24"
        break
    case '>4Dm':
        return "hwvx_pc_unknown_small_model_link"
        break
    case 'V<tN':
        return "hwvx_pc_unknown_small_model_link_12"
        break
    case 'vhSy':
        return "hwvx_pc_unknown_link_section"
        break
    case '12@v':
        return "hwvx_pc_unknown_link_section_28"
        break
    case '6U;Y':
        return "hwvx_pc_item"
        break
    case 'QiCE':
        return "hwvx_pc_item_48"
        break
    case '@bCK':
        return "hwvx_pc_item_48_0"
        break
    case 'eU:n':
        return "hwvx_pc_item_48_0_12"
        break
    case '5hOa':
        return "hwvx_pc_item_48_0_32"
        break
    case 'oj_I':
        return "hwvx_pc_item_48_0_36"
        break
    case 'A<W2':
        return "hwvx_pc_item_48_0_40"
        break
    case 'BpEB':
        return "hwvx_pc_item_48_0_52"
        break
    case 'WxQT':
        return "hwvx_pc_sound_controls"
        break
    case 'usZx':
        return "hwvx_pc_sound_controls_12"
        break
    case '9Sj]':
        return "hwvx_pc_sound_controls_12_12"
        break
    case 'h]CS':
        return "hwvx_pc_sound_section"
        break
    case '@kyl':
        return "hwvx_pc_sound_section_24"
        break
    case '5lG]':
        return "hwvx_pc_sound_section_32"
        break
    case 'MRbS':
        return "hwvx_pc_world_settings"
        break
    case '0@I_':
        return "hwvx_pc_world_settings_192"
        break
    case 'W^vn':
        return "hwvx_pc_world_settings_196"
        break
    case 'NnQY':
        return "hwvx_pc_world_settings_196_28"
        break
    case 'Y8pi':
        return "hwvx_pc_world_settings_224"
        break
    case 'cb?L':
        return "hwvx_pc_world_settings_228"
        break
    case 'MxQJ':
        return "hwvx_pc_world_settings_244"
        break
    case 'Q8hJ':
        return "hwvx_pc_world_settings_272"
        break
    case 'ED?;':
        return "hwvx_pc_world_settings_272_4"
        break
    case ';5u1':
        return "hwvx_pc_interface"
        break
    case 'dTr=':
        return "hwvx_pc_interface_16"
        break
    case ':pm=':
        return "hwvx_pc_interface_16_20t0"
        break
    case 'q]Nf':
        return "hwvx_pc_interface_16_20t0_16"
        break
    case 'gOrX':
        return "hwvx_pc_interface_16_20t0_16_4"
        break
    case 'ZAy9':
        return "hwvx_pc_interface_16_20t1"
        break
    case 'Kpo9':
        return "hwvx_pc_interface_16_20t1_8"
        break
    case 'M0nC':
        return "hwvx_pc_interface_16_20t1_8_4"
        break
    case 'D[kC':
        return "hwvx_pc_interface_16_20t2"
        break
    case '8]NM':
        return "hwvx_pc_interface_16_20t2_4"
        break
    case 'WlGZ':
        return "hwvx_pc_interface_16_20t2_4_28"
        break
    case 'E61g':
        return "hwvx_pc_interface_16_20t2_4_28_4"
        break
    case 'if9m':
        return "hwvx_pc_interface_16_20t10"
        break
    case 'is9G':
        return "hwvx_pc_interface_16_20t11"
        break
    case 'R:nq':
        return "hwvx_pc_interface_16_60"
        break
    case 'lQ71':
        return "hwvx_pc_interface_16_68"
        break
    case '^Swx':
        return "hwvx_pc_interface_16_68_12"
        break
    case 'YPDx':
        return "hwvx_pc_interface_16_68_20"
        break
    case 'ANLl':
        return "hwvx_pc_interface_16_68_20_8"
        break
    case 'V6Oh':
        return "hwvx_pc_interface_16_68_20_8_0t11"
        break
    case 'X[a4':
        return "hwvx_pc_interface_16_68_20_8_0t11_4"
        break
    case 'EdB_':
        return "hwvx_pc_interface_16_68_20_8_0t11_4_4t3"
        break
    case '7VAU':
        return "hwvx_pc_interface_16_68_20_8_8t15"
        break
    case 'zrKF':
        return "hwvx_pc_interface_16_68_20_8_8t15_0"
        break
    case 'oz89':
        return "hwvx_pc_interface_16_68_20_8_8t15_4"
        break
    case '^juu':
        return "hwvx_pc_interface_16_68_20_8_8t17"
        break
    case 'GqFT':
        return "hwvx_pc_interface_16_68_20_8_24"
        break
    case 'F[mB':
        return "hwvx_pc_interface_16_68_20_8_32"
        break
    case 'Tkt7':
        return "hwvx_pc_interface_16_72"
        break
    case ':LtZ':
        return "hwvx_pc_interface_16_72_8"
        break
    case 'A:iN':
        return "hwvx_pc_interface_16_72_8_8"
        break
    case 'U[_H':
        return "hwvx_pc_interface_16_72_8_8_4"
        break
    case 'bK:?':
        return "hwvx_pc_interface_16_96"
        break
    case 'f8ur':
        return "hwvx_pc_interface_16_96_4"
        break
    case 'p=Is':
        return "hwvx_pc_interface_16_96_28"
        break
    case 'J@pY':
        return "hwvx_pc_interface_16_96_36"
        break
    case 'h5vx':
        return "hwvx_pc_interface_16_104"
        break
    case 'MCag':
        return "hwvx_pc_interface_16_104_8"
        break
    case ']WeR':
        return "hwvx_pc_interface_16_104_8_4"
        break
    case '^olX':
        return "hwvx_pc_interface_16_104_8_12"
        break
    case 'yjO=':
        return "hwvx_pc_interface_16_104_8_20"
        break
    case 'kBT?':
        return "hwvx_pc_interface_16_104_8_28"
        break
    case 'Mkj4':
        return "hwvx_pc_interface_16_104_8_36"
        break
    case 'ramv':
        return "hwvx_pc_interface_16_104_8_44"
        break
    case 'llE9':
        return "hwvx_pc_interface_24"
        break
    case '8cj[':
        return "hwvx_pc_interface_24_8"
        break
    case 'ZA6O':
        return "hwvx_pc_interface_24_8_0t11"
        break
    case '2b>B':
        return "hwvx_pc_interface_24_8_0t11_4"
        break
    case 'U7Vg':
        return "hwvx_pc_interface_24_8_0t11_4_4"
        break
    case 'T=Pm':
        return "hwvx_pc_interface_24_8_0t11_4_4_0"
        break
    case ']UNA':
        return "hwvx_pc_interface_24_8_0t11_4_4_0_4"
        break
    case 'z^S1':
        return "hwvx_pc_interface_24_8_0t11_4_4_4"
        break
    case '1mE^':
        return "hwvx_pc_interface_24_8_8t17"
        break
    case '9ynB':
        return "hwvx_pc_interface_24_8_8t17_24"
        break
    case 'OMjB':
        return "hwvx_pc_interface_24_8_32"
        break
    case '6D?u':
        return "hwvx_pc_interface_28"
        break
    case 'WPq8':
        return "hwvx_pc_interface_28_4"
        break
    case 'ILv2':
        return "hwvx_pc_interface_28_4_16"
        break
    case 'yNAf':
        return "hwvx_pc_interface_28_4_16_4"
        break
    case 'm?Hg':
        return "hwvx_pc_interface_48"
        break
    case 'lt@9':
        return "hwvx_pc_interface_unknown"
        break
    case 'umJB':
        return "hwvx_pc_interface_unknown_0"
        break
    case 'I3WJ':
        return "hwvx_pc_interface_unknown_0_4"
        break
    case 'KCs;':
        return "hwvx_pc_interface_unknown_4"
        break
    case 'EjH9':
        return "hwvx_pc_interface_text_related"
        break
    case '[X_S':
        return "hwvx_pc_interface_text_related_12"
        break
    case '=YxD':
        return "hwvx_pc_interface_text_related_20"
        break
    case 'WBd7':
        return "hwvx_pc_interface_text_related_20_4"
        break
    case 'qU9>':
        return "hwvx_pc_interface_text_related_52"
        break
    case 'vt;Z':
        return "hwvx_pc_link"
        break
    case 'm>6O':
        return "hwvx_pc_link_36"
        break
    case 'nVd;':
        return "hwvx_pc_link_36_8"
        break
    case '>8x;':
        return "hwvx_pc_link_36_8_4"
        break
    case 'WA6S':
        return "hwvx_pc_link_36_8_4_8"
        break
    case 'gi^r':
        return "hwvx_pc_link_36_8_4_20"
        break
    case ':MNf':
        return "hwvx_pc_link_36_8_4_28"
        break
    case 'apsD':
        return "hwvx_pc_link_48"
        break
    case 'jQNS':
        return "hwvx_pc_link_48_8"
        break
    case 'J_lu':
        return "hwvx_pc_link_56"
        break
    case 'Gm;v':
        return "hwvx_pc_link_56_0"
        break
    case '<>B;':
        return "hwvx_pc_link_56_0_4"
        break
    case 'gldE':
        return "hwvx_pc_link_56_0_4_4"
        break
    case 'wgj]':
        return "hwvx_pc_link_56_0_4_4_4"
        break
    case '>0qA':
        return "hwvx_pc_link_56_0_4_8"
        break
    case 'dNb?':
        return "hwvx_pc_link_56_0_4_20"
        break
    case ':7]c':
        return "hwvx_pc_link_56_0_4_20_4"
        break
    case '9fy?':
        return "hwvx_pc_link_56_0_4_20_4_4"
        break
    case 'O^;<':
        return "hwvx_pc_link_56_0_4_28"
        break
    case ';r>i':
        return "hwvx_pc_link_64"
        break
    case 'XbZm':
        return "hwvx_pc_link_64_0"
        break
    case '>X0g':
        return "hwvx_pc_link_64_0_0"
        break
    case '0fEE':
        return "hwvx_pc_link_64_0_0_0"
        break
    case 'BiTC':
        return "hwvx_pc_link_64_0_0_4"
        break
    case 'LlZ4':
        return "hwvx_pc_link_64_0_0_8"
        break
    case 'BSWG':
        return "hwvx_pc_texture_anims_0"
        break
    case ':KKi':
        return "hwvx_pc_texture_anims_0_8"
        break
    case 'PPT7':
        return "hwvx_pc_texture_anims_0_16"
        break
    case 'L:FW':
        return "hwvx_pc_texture_anims_0_20"
        break
    case 'wBx]':
        return "hwvx_pc_texture_anims_0_20_4"
        break
    default:
        return null
    }
}

async function im_hwvx_pc_x(index) {
    id_offset.push(0);
    x.push({
        id: gen_id(),
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_hwvx_pc_file_header(0, 0, x[index].format)
}

function im_hwvx_pc_file_header(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        directory: [],
    });

    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let ii = 0; ii < u32(12); ii++) {
        let a = Date.now()
        im_hwvx_pc_directory(16 + (ii * 24), ii, x[i].directory, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log("saved in " + time_array)

    return x[i].id
    // 16 bytes;

}

function im_hwvx_pc_directory(o, i, x, end_offset) {
    let next_offset = o + 24

    g = {
        divisible_prev_value: [],
        debug: pk_debug,
        type_string: g.type_string,
        game: g.game,
        console: g.console,
        file_version: u32(8),
        file_dir_type: 0,
        file_name: g.file_name,
        endian: g.endian,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
        models_array: [],
        hwvx_pc_models_array: [],
        hwvx_pc_world_12_array: [],
        hwvx_pc_world_20_array: [],
        hwvx_pc_world_36_48_array: [],
        hwvx_pc_Airbox_array: [],
        hwvx_pc_world_36_36_array: [],
        hwvx_pc_world_36_48_16_array: [],
        hwvx_pc_world_36_48_24_array: [],
        hwvx_pc_world_76_array: [],
        hwvx_pc_world_52_array: [],
        hwvx_pc_world_108_array: [],
        hwvx_pc_world_108_44t6_array: [],
        hwvx_pc_world_routes_array: [],
        hwvx_pc_triggers_and_actions_array: [],
        hwvx_pc_collision_related_array: [],
        hwvx_pc_collision_link_array: [],
        hwvx_pc_model_array: [],
        hwvx_pc_texture_anims_array: [],
        hwvx_pc_model_anims_1_array: [],
        hwvx_pc_model_anims_2_array: [],
        hwvx_pc_world_text_link_array: [],
        hwvx_pc_model_car_sound_link_array: [],
        hwvx_pc_world_color_section_array: [],
        hwvx_pc_world_idk_array: [],
        hwvx_pc_some_world_thing_array: [],
        hwvx_pc_world_small_section_array: [],
        hwvx_pc_world_model_related_array: [],
        hwvx_pc_geo_list_array: [],
        hwvx_pc_collision_settings_array: [],
        hwvx_pc_car_array: [],
        hwvx_pc_car_related_array: [],
        hwvx_pc_car_path_related_array: [],
        hwvx_pc_car_link_array: [],
        hwvx_pc_car_unknown_link_array: [],
        hwvx_pc_model_link_array: [],
        hwvx_pc_text_array: [],
        hwvx_pc_font_array: [],
        hwvx_pc_mysterious_array: [],
        hwvx_pc_strange_array: [],
        hwvx_pc_unknown_array: [],
        hwvx_pc_unknown_thing_array: [],
        hwvx_pc_asdf_array: [],
        hwvx_pc_unknown_idk_sec_array: [],
        hwvx_pc_grand_section_array: [],
        hwvx_pc_unknown_whatever_array: [],
        hwvx_pc_unknown_small_model_link_array: [],
        hwvx_pc_unknown_link_section_array: [],
        hwvx_pc_item_array: [],
        hwvx_pc_sound_controls_array: [],
        hwvx_pc_sound_section_array: [],
        hwvx_pc_world_settings_array: [],
        hwvx_pc_interface_array: [],
        hwvx_pc_interface_unknown_array: [],
        hwvx_pc_interface_text_related_array: [],
        hwvx_pc_link_array: [],
        hwvx_pc_texture_anims_0_array: [],
    }

    g.file_dir_type = return_directory_type(u32(o + 4))

    globalThis.log_array = {
        p_offset: {
            offset: 0,
            array: [],
            pointers: [],
        },

    }

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "]7Zf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        section_datapack: [],
    });

    switch (u32(o + 4)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        u32(o + 16) && im_hwvx_pc_datapack(end_offset + u32(o + 20), 0, x[i].section_datapack);
        break;
    case 7:
        u32(o + 16) && im_hwvx_pc_geo_datapack(end_offset + u32(o + 20), 0, x[i].section_datapack);
        break;
    }

    return x[i].id
    // 24 bytes;

}
function im_hwvx_pc_datapack(o, i, x) {
    let end_datapack = o + 120
    let offset_after_datapack = end_datapack
    if (g.console === 'ps2') {
        end_datapack = divisible(end_datapack, 2048)
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_datapack += u32(o + 4)
            end_datapack = divisible(end_datapack, 2048)
        }
    } else {
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_datapack += u32(o + 4)
        }
    }

    g.m = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

    let offset_start_hwvx_pc_audio_list = offset_after_datapack + divisible((u32(o + 8) * 4), 32)
    let offset_start_impulse_tracker = offset_start_hwvx_pc_audio_list + u32(o + 72)
    let offset_start_hwvx_pc_audio_data_2 = offset_start_hwvx_pc_audio_list + u32(o + 76)

    let offset_index_patch = offset_start_hwvx_pc_audio_list + u32(o + 4)

    let offset_end_impulse_tracker;
    let offset_end_hwvx_pc_audio_data_2 = offset_index_patch
    if (u32(o + 76)) {
        offset_end_impulse_tracker = offset_start_hwvx_pc_audio_list + u32(o + 76)
    } else {
        offset_end_impulse_tracker = offset_index_patch
    }

    let patchlistoffset = end_datapack
    // g.m = patchlistoffset + (u32(o + 12) * 4) + ((u32(o + 16) + u32(o + 28) + u32(o + 52) + u32(o + 56)) * 8);

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "E@3Z",
        u32_8: u32(o + 8),
        //amount?
        u32_12: u32(o + 12),
        //amount?
        u32_16: u32(o + 16),
        //amount?
        u32_20: u32(o + 20),
        //amount?
        section_24_texture: [],
        u32_28: u32(o + 28),
        //amount?
        u32_32: u32(o + 32),
        //amount?
        u32_40: u32(o + 40),
        //amount?
        section_44_color_table: [],
        u32_48: u32(o + 48),
        //amount?
        u32_52: u32(o + 52),
        //amount?
        u32_56: u32(o + 56),
        //amount?
        section_60_texture_anims: [],
        u32_64: u32(o + 64),
        //amount?
        section_68_triggers: [],
        section_72_rifx: [],
        section_76_riff: [],
        section_80: im_string(o + 80 - g.m, o + 91 - g.m),
        u32_92: u32(o + 92),
        section_100: im_string(o + 100 - g.m, o + 111 - g.m),
        u32_112: u32(o + 112),
        ordered: [],
        index_patch_list: [],
        offset_patch_list: [],
        section_audio: [],
        hwvx_pc_audio_index_patch_padding: 0,
    });

    let padding_test = im_hwvx_pc_audio(offset_after_datapack, x[i].section_audio, u32(o + 8))

    // x[i].hwvx_pc_audio_index_patch_padding = offset_index_patch - padding_test

    g.datapack_offset = o
    g.datapack_ref = x

    im_hwvx_pc_get_index_patch_list(o, patchlistoffset, x[i].index_patch_list)
    im_hwvx_pc_get_offset_patch_list(o, g.m + u32(o), x[i].offset_patch_list)

    im_hwvx_pc_ordered(g.m, x[i].ordered)

    u32(o + 72) && im_hwvx_pc_rifx(offset_start_impulse_tracker, offset_end_impulse_tracker, x[i].section_72_rifx);
    u32(o + 76) && im_hwvx_pc_riff(offset_start_hwvx_pc_audio_data_2, offset_end_hwvx_pc_audio_data_2, x[i].section_76_riff);

    let texture_section_length = 16
    if (g.console === "gamecube") {
        texture_section_length = 32
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_pc_texture(u32(o + 24) + (ii * texture_section_length) + g.m, ii, x[i].section_24_texture)
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_hwvx_pc_color_table(u32(o + 44) + (ii * 1024) + g.m, ii, x[i].section_44_color_table)
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_hwvx_pc_texture_anims(u32(o + 60) + (ii * 12) + g.m, ii, x[i].section_60_texture_anims)
    }
    if (u32(o + 68)) {
        for (let ii = 0; ii < u32(o + 64); ii++) {
            im_hwvx_pc_triggers_and_actions(u32(o + 68) + (ii * 44) + g.m, ii, x[i].section_68_triggers)
        }
    }

    return x[i].id
    // 120 bytes;

}

function im_hwvx_pc_audio(o, x, a) {

    const after_offset_list = o + divisible(a * 4, 32)
    let padding_test = after_offset_list + (a * 32)

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "audi",
        sound: []
    })

    for (let i = 0; i < a; i++) {
        padding_test = im_hwvx_pc_audio_00(after_offset_list + u32(o + (i * 4)), x[0].sound, i)
    }

    return padding_test

    function im_hwvx_pc_audio_00(o, x, i) {
        id_offset.push(o);
        x.push({
            id: gen_id(),
            sec_id: "ad00",

            u32_8: u32(o + 8),
            soundsamplerate: u32(o + 12),
            u32_16: u32(o + 16),
            u32_20: u32(o + 20),
            sound_data: 0,
            padding: (u32(o + 0) + after_offset_list) - padding_test
        })
        const start_offset = u32(o + 0) + after_offset_list
        const sound_buffer = convert_arraybuffer_base64(buffer.slice(start_offset, start_offset + u32(o + 4)))

        x[i].sound_data = sound_buffer

        return start_offset + u32(o + 4)

    }

}

function im_hwvx_pc_rifx(o, e, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "imps",
        buffer: convert_arraybuffer_base64(buffer.slice(o, e)),
    });

}

function im_hwvx_pc_riff(o, e, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "ad2o",
        buffer: convert_arraybuffer_base64(buffer.slice(o, e)),
    });

}

function im_hwvx_pc_get_index_patch_list(o, patch_offset, x) {
    let texture_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 16) * 8
    let texture_animation_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 52) * 8
    let sound_offset = patch_offset

    // patch_offset += u32(g.datapack_offset + 28) * 8
    // let model_offset = patch_offset

    // patch_offset += u32(g.datapack_offset + 56) * 8
    // let general_offset = patch_offset

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ipll",
        texture: im_patch_list(texture_offset, u32(g.datapack_offset + 16), 't'),
        texture_animation: im_patch_list(texture_animation_offset, u32(g.datapack_offset + 52), 'a'),
        sound: im_patch_list(sound_offset, u32(g.datapack_offset + 28), 's'),
        // model: im_patch_list(model_offset, u32(g.datapack_offset + 56), 'm'),
    })

    g.texture_patch_ref = x[0].texture
    g.animation_patch_ref = x[0].texture_animation
    g.sound_patch_ref = x[0].sound
}

function im_hwvx_pc_get_offset_patch_list(o, patch_offset, x) {
    let model_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 56) * 8
    let general_offset = patch_offset

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "opll",
        model: im_patch_list(model_offset, u32(g.datapack_offset + 56), 'm'),
    })

    g.model_ref = x[0].model

    log_array.p_offset.offset = general_offset
    for (let i = 0; i < u32(g.datapack_offset + 12); i++) {
        log_array.p_offset.array.push(u32(general_offset + (i * 4)))
    }

    log_array.p_offset.array.sort(function(a, b) {
        return a - b;
    });

}

function im_hwvx_pc_geo_datapack(o, i, x) {
    let end_datapack = o + 84
    let patchlistoffset = end_datapack

    let list1 = u32(o + 8) * 8
    let list2 = u32(o + 40) * 8
    let list3 = u32(o + 28) * 8
    let list4 = u32(o + 4) * 4
    let padding = u32(o + 36)

    let indexpatchlistlength = list1 + list2 + list3 + list4 + padding

    g.m = indexpatchlistlength + end_datapack

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "PcI:",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        u32_8: u32(o + 8),
        //amount?
        u32_28: u32(o + 28),
        //amount?
        u32_36: u32(o + 36),
        //amount?
        u32_40: u32(o + 40),
        //amount?
        section_44: im_string(o + 44 - g.m, o + 55 - g.m),
        u32_56: u32(o + 56),
        patch_list: [],
        ordered: [],
        models: [],
        hwvx_pc_models: [],
    });

    if (g.console === 'gamecube') {
        indexpatchlistlength = divisible(indexpatchlistlength, 16)
    }

    g.datapack_offset = o
    g.datapack_ref = x[0]

    im_hwvx_pc_geo_patch_list(o, patchlistoffset, x[i].patch_list)

    im_hwvx_pc_geo_basic(g.m, x[i].ordered, u32(o + 40))

    return x[i].id
    // 84 bytes;

}

function im_hwvx_pc_geo_patch_list(o, patch_offset, x) {
    let texture_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 8) * 8
    let texture_animation_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 28) * 8
    let model_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 40) * 8
    let general_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 4) * 4
    let padding = patch_offset

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iplq",
        texture: im_patch_list(texture_offset, u32(g.datapack_offset + 8), 't'),
        texture_animation: im_patch_list(texture_animation_offset, u32(g.datapack_offset + 28), 'a'),
        model: im_patch_list(model_offset, u32(g.datapack_offset + 40), 'm'),
    })

    g.texture_patch_ref = x[0].texture
    g.animation_patch_ref = x[0].texture_animation
    g.sound_patch_ref = x[0].sound
    g.model_ref = x[0].model

    log_array.p_offset.offset = general_offset
    for (let i = 0; i < u32(g.datapack_offset + 4); i++) {
        log_array.p_offset.array.push(u32(general_offset + (i * 4)))
    }

    log_array.p_offset.array.sort(function(a, b) {
        return a - b;
    });
}

function im_hwvx_pc_ordered(o, x) {

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ordr",

        hwvx_pc_file_specific_section: [],
        hwvx_pc_model: [],
        hwvx_pc_texture_anims: [],
        hwvx_pc_model_anims_1: [],
        hwvx_pc_model_anims_2: [],
        hwvx_pc_texture: [],
        hwvx_pc_texture_data: [],
        hwvx_pc_color_table: [],
        hwvx_pc_share_end: [],
        hwvx_pc_unordered_list: [],
        hwvx_pc_texture_anims_0: [],
        hwvx_pc_models: [],
        hwvx_pc_share_end_section: [],
        hwvx_pc_share_end_section: [],
    })

    im_hwvx_pc_unordered(o, x[0].hwvx_pc_unordered_list)
    g.ordered_ref = x[0]

    switch (g.file_dir_type) {
    case "interface":
    case "item":
    case "car":
    case "link":
    case "audio":
    case "music":
        im_hwvx_pc_basic(o, 0, x[0].hwvx_pc_file_specific_section)
        break
    case "world":
        im_hwvx_pc_world(o, x[0].hwvx_pc_file_specific_section)
        break
    case "colliders":
        im_hwvx_pc_collision(o, x[0].hwvx_pc_file_specific_section)
        break
    case "share":
        for (let i = 0; i < u32(g.datapack_offset + 56); i++) {
            im_hwvx_pc_share(o + (i * 4), i, x[0].hwvx_pc_file_specific_section)
        }
        if (g.file_name.includes("HW_share")) {
            let get_end;
            if (g.console === "pc") {
                get_end = 939124
            }
            // let get_end = (u32(o + 40) * 1024) + u32(o + 44) + offset_mid
            // console.log(get_end)
            im_hwvx_pc_share_end(get_end, x[0].hwvx_pc_share_end_section)
        }
        // let get_end = (u32(g.datapack_offset + 40) * 1024) + u32(g.datapack_offset + 44)
        // if (u32(g.datapack_offset + 60) || u32(g.datapack_offset) === get_end) {// no shared section
        // } else {
        // }
        break
    case "world texture":
        break
    default:
        console.pk_log('file type is not set')
    }

}

function im_hwvx_pc_unordered(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4unr",
        hwvx_pc_world_12: [],
        hwvx_pc_world_20: [],
        hwvx_pc_world_36_48: [],
        hwvx_pc_Airbox: [],
        hwvx_pc_world_36_36: [],
        hwvx_pc_world_36_48_16: [],
        hwvx_pc_world_36_48_24: [],
        hwvx_pc_world_76: [],
        hwvx_pc_world_52: [],
        hwvx_pc_world_108: [],
        hwvx_pc_world_108_44t6: [],
        hwvx_pc_world_routes: [],
        hwvx_pc_triggers_and_actions: [],
        hwvx_pc_collision_related: [],
        hwvx_pc_collision_link: [],
        hwvx_pc_model: [],
        hwvx_pc_texture_anims: [],
        hwvx_pc_model_anims_1: [],
        hwvx_pc_model_anims_2: [],
        hwvx_pc_world_text_link: [],
        hwvx_pc_model_car_sound_link: [],
        hwvx_pc_world_color_section: [],
        hwvx_pc_world_idk: [],
        hwvx_pc_some_world_thing: [],
        hwvx_pc_world_small_section: [],
        hwvx_pc_world_model_related: [],
        hwvx_pc_geo_list: [],
        hwvx_pc_collision_settings: [],
        hwvx_pc_car: [],
        hwvx_pc_car_related: [],
        hwvx_pc_car_path_related: [],
        hwvx_pc_car_link: [],
        hwvx_pc_car_unknown_link: [],
        hwvx_pc_model_link: [],
        hwvx_pc_text: [],
        hwvx_pc_font: [],
        hwvx_pc_mysterious: [],
        hwvx_pc_strange: [],
        hwvx_pc_unknown: [],
        hwvx_pc_unknown_thing: [],
        hwvx_pc_asdf: [],
        hwvx_pc_unknown_idk_sec: [],
        hwvx_pc_grand_section: [],
        hwvx_pc_unknown_whatever: [],
        hwvx_pc_unknown_small_model_link: [],
        hwvx_pc_unknown_link_section: [],
        hwvx_pc_item: [],
        hwvx_pc_sound_controls: [],
        hwvx_pc_sound_section: [],
        hwvx_pc_world_settings: [],
        hwvx_pc_interface: [],
        hwvx_pc_interface_unknown: [],
        hwvx_pc_interface_text_related: [],
        hwvx_pc_link: [],
        hwvx_pc_texture_anims_0: [],

    })
    g.unordered_ref = x[0]

}

function im_hwvx_pc_basic(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "l^d@",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_basic_4(u32(o + 4) + g.m, x[i].section_4);
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_basic_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "L@8_",
        section_0: [],
        u32_4: u32(o + 4),
    });

    // u32(o + 0) && im_hwvx_pc_directory(u32(o + 0) + g.m,x[0].section_0); // offset? 

    switch (g.file_dir_type) {
    case "car":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_car_array, im_hwvx_pc_car, g.unordered_ref.hwvx_pc_car);
        break
    case "interface":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
        break
    case "item":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_item_array, im_hwvx_pc_item, g.unordered_ref.hwvx_pc_item);
        break
    case "link":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_link_array, im_hwvx_pc_link, g.unordered_ref.hwvx_pc_link);
        break
    case "audio":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
        break
    case "music":
        // nothing ?
        // im_hwvx_pc_basic(o, x[0].file_specific)
        break
    default:
        console.pk_log('file type is not set')
    }
    // 8 bytes;

}
function im_hwvx_pc_world(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Y5cc",
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        unordered_hwvx_pc_world_20_20: 0,
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_48: u32(o + 48),
        //amount?
        unordered_hwvx_pc_world_52_52: 0,
        u32_72: u32(o + 72),
        //amount?
        unordered_hwvx_pc_world_76_76: 0,
        u32_80: u32(o + 80),
        //amount?
        unordered_hwvx_pc_world_76_84: 0,
        u32_88: u32(o + 88),
        //amount?
        section_92: [],
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u32_104: u32(o + 104),
        //amount?
        unordered_hwvx_pc_world_108_108: 0,
        section_120: [],
        section_124: im_string(u32(o + 124), 0, false),
        section_132: im_string(u32(o + 132), 0, false),
        section_140: im_string(u32(o + 140), 0, false),
        unordered_hwvx_pc_world_settings_156: 0,
    });

    u32(o + 4) && im_hwvx_pc_world_4(u32(o + 4) + g.m, x[0].section_4);

    for (let i = 0; i < u32(o + 8); i++) {
        x[0].section_12 = in_ml(u32(o + 12) + (i * 96), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
    }
    for (let ii = 0; ii < u32(o + 16); ii++) {
        x[0].unordered_hwvx_pc_world_20_20 = in_ml(u32(o + 20) + (ii * 32), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);
    }

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_hwvx_pc_world_36(u32(o + 36) + (ii * 80) + g.m, ii, x[0].section_36);
    }
    for (let ii = 0; ii < u32(o + 48); ii++) {
        x[0].unordered_hwvx_pc_world_52_52 = in_ml(u32(o + 52) + (ii * 112), g.hwvx_pc_world_52_array, im_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52);
        // im_hwvx_pc_world_52(u32(o + 52)  + g.m, ii, x[i].section_52);
    }
    for (let ii = 0; ii < u32(o + 72); ii++) {
        x[0].unordered_hwvx_pc_world_76_76 = in_ml(u32(o + 76) + (ii * 4), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
        // im_hwvx_pc_world_76(u32(o + 76)  + g.m, ii, x[i].section_76);
    }
    for (let ii = 0; ii < u32(o + 80); ii++) {
        x[0].unordered_hwvx_pc_world_76_84 = in_ml(u32(o + 84) + (ii * 4), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
        // im_hwvx_pc_world_76(u32(o + 84) + g.m, ii, x[i].section_84);
    }
    for (let ii = 0; ii < u32(o + 88); ii++) {
        im_hwvx_pc_world_92(u32(o + 92) + (ii * 8) + g.m, ii, x[0].section_92);
    }
    for (let ii = 0; ii < u32(o + 96); ii++) {
        // x[0].unordered_hwvx_pc_world_100_100 = in_ml(u32(o + 100) , g.hwvx_pc_world_100_array, im_hwvx_pc_world_100, g.unordered_ref.hwvx_pc_world_100);
        im_hwvx_pc_world_100(u32(o + 100) + (ii * 16) + g.m, ii, x[0].section_100);
    }
    for (let ii = 0; ii < u32(o + 104); ii++) {
        x[0].unordered_hwvx_pc_world_108_108 = in_ml(u32(o + 108) + (ii * 48), g.hwvx_pc_world_108_array, im_hwvx_pc_world_108, g.unordered_ref.hwvx_pc_world_108);
        // im_hwvx_pc_world_108(u32(o + 108)  + g.m, ii, x[i].section_108);
    }
    u32(o + 120) && im_hwvx_pc_world_120(u32(o + 120) + g.m, x[0].section_120);
    x[0].unordered_hwvx_pc_world_settings_156 = in_ml(u32(o + 156), g.hwvx_pc_world_settings_array, im_hwvx_pc_world_settings, g.unordered_ref.hwvx_pc_world_settings);

    // 160 bytes;

}
function im_hwvx_pc_world_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "LTSU",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        u32_32: u32(o + 32),
        u32_44: u32(o + 44),
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_50: u8(o + 50),
        u8_51: u8(o + 51),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        unordered_hwvx_pc_world_idk_64: 0,
        unordered_hwvx_pc_world_idk_68: 0,
        unordered_hwvx_pc_world_idk_72: 0,
        unordered_hwvx_pc_world_idk_76: 0,
        u8_92: u8(o + 92),
        u8_93: u8(o + 93),
        u8_94: u8(o + 94),
    });

    x[i].unordered_hwvx_pc_world_idk_64 = in_ml(u32(o + 64), g.hwvx_pc_world_idk_array, im_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk);
    x[i].unordered_hwvx_pc_world_idk_68 = in_ml(u32(o + 68), g.hwvx_pc_world_idk_array, im_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk);
    x[i].unordered_hwvx_pc_world_idk_72 = in_ml(u32(o + 72), g.hwvx_pc_world_idk_array, im_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk);
    x[i].unordered_hwvx_pc_world_idk_76 = in_ml(u32(o + 76), g.hwvx_pc_world_idk_array, im_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk);

}
function im_hwvx_pc_world_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "E:0u",
        u32_0: u32(o + 0),
        unordered_hwvx_pc_model_anims_1_4: 0,
        f32_8: f32(o + 8),
        unordered_hwvx_pc_model_car_sound_link_12: 0,
        u8_20: u8(o + 20),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        f32_28: f32(o + 28),
    });

    x[i].unordered_hwvx_pc_model_anims_1_4 = in_ml(u32(o + 4), g.hwvx_pc_model_anims_1_array, im_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1);
    x[i].unordered_hwvx_pc_model_car_sound_link_12 = in_ml(u32(o + 12), g.hwvx_pc_model_car_sound_link_array, im_hwvx_pc_model_car_sound_link, g.unordered_ref.hwvx_pc_model_car_sound_link);
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_world_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";jv0",
        u32_0: u32(o + 0),
        u32_12: u32(o + 12),
        u32_24: u32(o + 24),
        //amount?
        unordered_hwvx_pc_world_36_28_28: [],
        u32_32: u32(o + 32),
        //amount?
        unordered_hwvx_pc_world_36_36_36: 0,
        unordered_hwvx_pc_world_36_48_48: 0,
        u8_56: u8(o + 56),
        u8_57: u8(o + 57),
        u8_58: u8(o + 58),
        u8_59: u8(o + 59),
    });

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_world_36_28(u32(o + 28) + (ii * 32) + g.m, ii, x[i].unordered_hwvx_pc_world_36_28_28);
    }

    // x[i].unordered_hwvx_pc_world_36_28_28 = in_ml(u32(o + 28), g.hwvx_pc_world_36_28_array, im_hwvx_pc_world_36_28, g.unordered_ref.hwvx_pc_world_36_28);
    x[i].unordered_hwvx_pc_world_36_36_36 = in_ml(u32(o + 36), g.hwvx_pc_world_36_36_array, im_hwvx_pc_world_36_36, g.unordered_ref.hwvx_pc_world_36_36);
    x[i].unordered_hwvx_pc_world_36_48_48 = in_ml(u32(o + 48), g.hwvx_pc_world_36_48_array, im_hwvx_pc_world_36_48, g.unordered_ref.hwvx_pc_world_36_48);

}
function im_hwvx_pc_world_36_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7V?m",
        u32_4: u32(o + 4),
        //amount?
        unordered_hwvx_pc_Airbox_8: 0,
        u32_12: u32(o + 12),
        //amount?
        unordered_hwvx_pc_world_36_48_16: 0,
        u32_20: u32(o + 20),
        //amount?
        unordered_hwvx_pc_world_36_48_24: 0,
    });

    x[i].unordered_hwvx_pc_Airbox_8 = in_ml(u32(o + 8), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);

    for (let ii = 0; ii < u32(o + 12); ii++) {
        x[i].unordered_hwvx_pc_world_36_48_16 = in_ml(u32(o + 16) + (ii * 64), g.hwvx_pc_world_36_48_16_array, im_hwvx_pc_world_36_48_16, g.unordered_ref.hwvx_pc_world_36_48_16);
    }
    for (let ii = 0; ii < u32(o + 12); ii++) {
        x[i].unordered_hwvx_pc_world_36_48_24 = in_ml(u32(o + 24) + (ii * 64), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
    }
    // u32(o + 24) && im_hwvx_pc_world_36_48_24(u32(o + 24) + g.m,x[i].section_24); // offset? 
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_Airbox(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "huaA",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        hwvx_pc_world_model_related_section: 0,
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
    });

    x[i].hwvx_pc_world_model_related_section = in_ml(u32(o + 36), g.hwvx_pc_world_model_related_array, im_hwvx_pc_world_model_related, g.unordered_ref.hwvx_pc_world_model_related);

    // u32(o + 36) && im_hwvx_pc_world_model_related( + g.m,x[i].section_36); // offset? 
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_world_36_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "c@^f",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_world_36_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "yhnO",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

}
function im_hwvx_pc_world_36_48_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Hz?v",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        section_36: [],
        f32_44: f32(o + 44),
        u32_52: u32(o + 52),
        u8_56: u8(o + 56),
    });
    x[i].section_36 = in_ml(u32(o + 36), g.hwvx_pc_strange_array, im_hwvx_pc_strange, g.unordered_ref.hwvx_pc_strange);

    // u32(o + 36) && im_hwvx_pc_strange(u32(o + 36) + g.m,x[i].section_36); // offset? 
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_world_36_48_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "OCZ5",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        f32_32: f32(o + 32),
        u32_40: u32(o + 40),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
    });

    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_world_76(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^ooJ",
        unordered_hwvx_pc_world_small_section_0: 0,
    });

    x[i].unordered_hwvx_pc_world_small_section_0 = in_ml(u32(o + 0), g.hwvx_pc_world_small_section_array, im_hwvx_pc_world_small_section, g.unordered_ref.hwvx_pc_world_small_section);
    return x[i].id
    // 4 bytes;

}
function im_hwvx_pc_world_92(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "M8W@",
        unordered_hwvx_pc_world_text_link_4: 0,
    });

    x[i].unordered_hwvx_pc_world_text_link_4 = in_ml(u32(o + 4), g.hwvx_pc_world_text_link_array, im_hwvx_pc_world_text_link, g.unordered_ref.hwvx_pc_world_text_link);

}
function im_hwvx_pc_world_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "_LnX",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        u32_64: u32(o + 64),
        f32_76: f32(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
        section_88: [],
        u32_92: u32(o + 92),
    });

    switch (u32(o + 80)) {
    case 0:
        x[i].section_88 = in_ml(u32(o + 88), g.hwvx_pc_world_52_array, im_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52);
        break;
    case 1:
        u32(o + 88) && im_hwvx_pc_world_52_88t1(u32(o + 88) + g.m, x[i].section_88);
        break;
    }
    return x[i].id
    // 112 bytes;

}
function im_hwvx_pc_world_52_88t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yb=a",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_world_100(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "H3j]",
        u32_0: u32(o + 0),
        unordered_hwvx_pc_world_color_section_4: 0,
        u32_8: u32(o + 8),
    });

    x[i].unordered_hwvx_pc_world_color_section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_color_section_array, im_hwvx_pc_world_color_section, g.unordered_ref.hwvx_pc_world_color_section);

}
function im_hwvx_pc_world_108(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";GIU",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        section_40: [],
        section_44: [],
    });

    u32(o + 40) && im_hwvx_pc_world_108_40(u32(o + 40) + g.m, x[i].section_40);
    switch (u32(o + 12)) {
    case 1:
        u32(o + 44) && im_hwvx_pc_world_108_44t1(u32(o + 44) + g.m, x[i].section_44);
        break;
    case 2:
        u32(o + 44) && im_hwvx_pc_world_108_44t2(u32(o + 44) + g.m, x[i].section_44);
        break;
    case 3:
        u32(o + 44) && im_hwvx_pc_world_108_44t3(u32(o + 44) + g.m, x[i].section_44);
        break;
    case 6:
        x[i].section_44 = in_ml(u32(o + 44), g.hwvx_pc_world_108_44t6_array, im_hwvx_pc_world_108_44t6, g.unordered_ref.hwvx_pc_world_108_44t6);
        break;
    }
    return x[i].id
    // 48 bytes;

}
function im_hwvx_pc_world_108_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8Af;",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_50: u8(o + 50),
        u8_51: u8(o + 51),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        u8_56: u8(o + 56),
        u8_57: u8(o + 57),
        u8_58: u8(o + 58),
        u8_59: u8(o + 59),
        u8_60: u8(o + 60),
        u8_61: u8(o + 61),
        u8_62: u8(o + 62),
        u8_63: u8(o + 63),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        u8_80: u8(o + 80),
        u8_81: u8(o + 81),
        u8_82: u8(o + 82),
        u8_83: u8(o + 83),
        u8_84: u8(o + 84),
        u8_85: u8(o + 85),
        u8_86: u8(o + 86),
        u8_87: u8(o + 87),
        u8_88: u8(o + 88),
        u8_89: u8(o + 89),
        u8_90: u8(o + 90),
        u8_91: u8(o + 91),
        u8_92: u8(o + 92),
        u8_93: u8(o + 93),
        u8_94: u8(o + 94),
        u8_95: u8(o + 95),
        f32_96: f32(o + 96),
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        u8_112: u8(o + 112),
        u8_113: u8(o + 113),
        u8_114: u8(o + 114),
        u8_115: u8(o + 115),
        u8_116: u8(o + 116),
        u8_117: u8(o + 117),
        u8_118: u8(o + 118),
        u8_119: u8(o + 119),
        u8_120: u8(o + 120),
        u8_121: u8(o + 121),
        u8_122: u8(o + 122),
        u8_123: u8(o + 123),
        u8_124: u8(o + 124),
        u8_125: u8(o + 125),
        u8_126: u8(o + 126),
        u8_127: u8(o + 127),
        f32_128: f32(o + 128),
        f32_132: f32(o + 132),
        f32_136: f32(o + 136),
        f32_140: f32(o + 140),
        u8_144: u8(o + 144),
        u8_145: u8(o + 145),
        u8_146: u8(o + 146),
        u8_147: u8(o + 147),
        u8_148: u8(o + 148),
        u8_149: u8(o + 149),
        u8_150: u8(o + 150),
        u8_151: u8(o + 151),
        u8_152: u8(o + 152),
        u8_153: u8(o + 153),
        u8_154: u8(o + 154),
        u8_155: u8(o + 155),
        u8_156: u8(o + 156),
        u8_157: u8(o + 157),
        u8_158: u8(o + 158),
        u8_159: u8(o + 159),
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        f32_172: f32(o + 172),
        u8_176: u8(o + 176),
        u8_177: u8(o + 177),
        u8_178: u8(o + 178),
        u8_179: u8(o + 179),
        u8_180: u8(o + 180),
        u8_181: u8(o + 181),
        u8_182: u8(o + 182),
        u8_183: u8(o + 183),
        u8_184: u8(o + 184),
        u8_185: u8(o + 185),
        u8_186: u8(o + 186),
        u8_187: u8(o + 187),
        u8_188: u8(o + 188),
        u8_189: u8(o + 189),
        u8_190: u8(o + 190),
        u8_191: u8(o + 191),
        f32_192: f32(o + 192),
        f32_196: f32(o + 196),
        f32_200: f32(o + 200),
        f32_204: f32(o + 204),
        u8_208: u8(o + 208),
        u8_209: u8(o + 209),
        u8_210: u8(o + 210),
        u8_211: u8(o + 211),
        u8_212: u8(o + 212),
        u8_213: u8(o + 213),
        u8_214: u8(o + 214),
        u8_215: u8(o + 215),
        u8_216: u8(o + 216),
        u8_217: u8(o + 217),
        u8_218: u8(o + 218),
        u8_219: u8(o + 219),
        u8_220: u8(o + 220),
        u8_221: u8(o + 221),
        u8_222: u8(o + 222),
        u8_223: u8(o + 223),
        f32_224: f32(o + 224),
        f32_228: f32(o + 228),
        f32_232: f32(o + 232),
        f32_236: f32(o + 236),
        u8_240: u8(o + 240),
        u8_241: u8(o + 241),
        u8_242: u8(o + 242),
        u8_243: u8(o + 243),
        u8_244: u8(o + 244),
        u8_245: u8(o + 245),
        u8_246: u8(o + 246),
        u8_247: u8(o + 247),
        u8_248: u8(o + 248),
        u8_249: u8(o + 249),
        u8_250: u8(o + 250),
        u8_251: u8(o + 251),
        u8_252: u8(o + 252),
        u8_253: u8(o + 253),
        u8_254: u8(o + 254),
        u8_255: u8(o + 255),
        f32_256: f32(o + 256),
        f32_260: f32(o + 260),
        f32_264: f32(o + 264),
        f32_268: f32(o + 268),
        u8_272: u8(o + 272),
        u8_273: u8(o + 273),
        u8_274: u8(o + 274),
        u8_275: u8(o + 275),
        u8_276: u8(o + 276),
        u8_277: u8(o + 277),
        u8_278: u8(o + 278),
        u8_279: u8(o + 279),
        u8_280: u8(o + 280),
        u8_281: u8(o + 281),
        u8_282: u8(o + 282),
        u8_283: u8(o + 283),
        u8_284: u8(o + 284),
        u8_285: u8(o + 285),
        u8_286: u8(o + 286),
        u8_287: u8(o + 287),
        f32_288: f32(o + 288),
        f32_292: f32(o + 292),
        f32_296: f32(o + 296),
        f32_300: f32(o + 300),
        u8_304: u8(o + 304),
        u8_305: u8(o + 305),
        u8_306: u8(o + 306),
        u8_307: u8(o + 307),
        u8_308: u8(o + 308),
        u8_309: u8(o + 309),
        u8_310: u8(o + 310),
        u8_311: u8(o + 311),
        u8_312: u8(o + 312),
        u8_313: u8(o + 313),
        u8_314: u8(o + 314),
        u8_315: u8(o + 315),
        u8_316: u8(o + 316),
        u8_317: u8(o + 317),
        u8_318: u8(o + 318),
        u8_319: u8(o + 319),
        f32_320: f32(o + 320),
        f32_324: f32(o + 324),
        f32_328: f32(o + 328),
        f32_332: f32(o + 332),
        u8_336: u8(o + 336),
        u8_337: u8(o + 337),
        u8_338: u8(o + 338),
        u8_339: u8(o + 339),
        u8_340: u8(o + 340),
        u8_341: u8(o + 341),
        u8_342: u8(o + 342),
        u8_343: u8(o + 343),
        u8_344: u8(o + 344),
        u8_345: u8(o + 345),
        u8_346: u8(o + 346),
        u8_347: u8(o + 347),
        u8_348: u8(o + 348),
        u8_349: u8(o + 349),
        u8_350: u8(o + 350),
        u8_351: u8(o + 351),
        f32_352: f32(o + 352),
        f32_356: f32(o + 356),
        f32_360: f32(o + 360),
        f32_364: f32(o + 364),
        u8_368: u8(o + 368),
        u8_369: u8(o + 369),
        u8_370: u8(o + 370),
        u8_371: u8(o + 371),
        u8_372: u8(o + 372),
        u8_373: u8(o + 373),
        u8_374: u8(o + 374),
        u8_375: u8(o + 375),
        u8_376: u8(o + 376),
        u8_377: u8(o + 377),
        u8_378: u8(o + 378),
        u8_379: u8(o + 379),
        u8_380: u8(o + 380),
        u8_381: u8(o + 381),
        u8_382: u8(o + 382),
        u8_383: u8(o + 383),
    });

    // 384 bytes;

}
function im_hwvx_pc_world_108_44t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UW;E",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u8_16: u8(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_pc_world_108_44t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3erz",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
    });

    // 16 bytes;

}
function im_hwvx_pc_world_108_44t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2W6Y",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_world_108_44t6(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "M?B6",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u32_20: u32(o + 20),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
    });

    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_world_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[]7N",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        section_16: [],
        section_20: [],
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
    });

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_pc_world_4_16(u32(o + 16) + (i * 56) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_pc_world_4_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

    // 64 bytes;

}
function im_hwvx_pc_world_4_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "C6mn",
        u32_0: u32(o + 0),
    });

}
function im_hwvx_pc_world_4_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "WM;j",
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_pc_world_4_16_4(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_pc_world_4_16_4(u32(o + 20) + (ii * 4) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_world_4_16_4(u32(o + 28) + (ii * 4) + g.m, ii, x[i].section_28);
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_hwvx_pc_world_4_16_4(u32(o + 52) + (ii * 4) + g.m, ii, x[i].section_52);
    }

}
function im_hwvx_pc_world_4_16_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "I1I4",
        unordered_hwvx_pc_world_108_0: 0,
    });

    x[i].unordered_hwvx_pc_world_108_0 = in_ml(u32(o + 0), g.hwvx_pc_world_108_array, im_hwvx_pc_world_108, g.unordered_ref.hwvx_pc_world_108);

}
function im_hwvx_pc_world_120(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rtsI",
        unordered_hwvx_pc_world_routes_0: 0,
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
    });

    x[0].unordered_hwvx_pc_world_routes_0 = in_ml(u32(o + 0), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);

    // 16 bytes;

}
function im_hwvx_pc_world_routes(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "H>:s",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u32_76: u32(o + 76),
        u8_80: u8(o + 80),
        u8_81: u8(o + 81),
    });

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_pc_world_routes_20(u32(o + 20) + (ii * 4) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_pc_world_routes_24(u32(o + 24) + (ii * 4) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_hwvx_pc_world_routes_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 96 bytes;

}
function im_hwvx_pc_world_routes_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "pgig",
        u32_0: u32(o + 0),
    });

}
function im_hwvx_pc_world_routes_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "YBM0",
        f32_0: f32(o + 0),
    });

}
function im_hwvx_pc_world_routes_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "axYu",
        u32_0: u32(o + 0),
    });

}

function hwvx_pc_return_if_value_in_multilink(o) {
    let value_object = {
        section: [],
        type: "no link ?",
    }
    let check_val = u32(o)
    if (check_val === 0) {
        return value_object
    }
    if (g.models_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.models_array, im_models, g.unordered_ref.models);
        value_object.type = "models"
    } else if (g.hwvx_pc_models_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_models_array, im_hwvx_pc_models, g.unordered_ref.hwvx_pc_models);
        value_object.type = "hwvx_pc_models"
    } else if (g.hwvx_pc_world_12_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        value_object.type = "hwvx_pc_world_12"
    } else if (g.hwvx_pc_world_20_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);
        value_object.type = "hwvx_pc_world_20"
    } else if (g.hwvx_pc_world_36_48_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_36_48_array, im_hwvx_pc_world_36_48, g.unordered_ref.hwvx_pc_world_36_48);
        value_object.type = "hwvx_pc_world_36_48"
    } else if (g.hwvx_pc_Airbox_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
        value_object.type = "hwvx_pc_Airbox"
    } else if (g.hwvx_pc_world_36_36_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_36_36_array, im_hwvx_pc_world_36_36, g.unordered_ref.hwvx_pc_world_36_36);
        value_object.type = "hwvx_pc_world_36_36"
    } else if (g.hwvx_pc_world_36_48_16_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_36_48_16_array, im_hwvx_pc_world_36_48_16, g.unordered_ref.hwvx_pc_world_36_48_16);
        value_object.type = "hwvx_pc_world_36_48_16"
    } else if (g.hwvx_pc_world_36_48_24_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        value_object.type = "hwvx_pc_world_36_48_24"
    } else if (g.hwvx_pc_world_76_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
        value_object.type = "hwvx_pc_world_76"
    } else if (g.hwvx_pc_world_52_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_52_array, im_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52);
        value_object.type = "hwvx_pc_world_52"
    } else if (g.hwvx_pc_world_108_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_108_array, im_hwvx_pc_world_108, g.unordered_ref.hwvx_pc_world_108);
        value_object.type = "hwvx_pc_world_108"
    } else if (g.hwvx_pc_world_108_44t6_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_108_44t6_array, im_hwvx_pc_world_108_44t6, g.unordered_ref.hwvx_pc_world_108_44t6);
        value_object.type = "hwvx_pc_world_108_44t6"
    } else if (g.hwvx_pc_world_routes_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        value_object.type = "hwvx_pc_world_routes"
    } else if (g.hwvx_pc_triggers_and_actions_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_triggers_and_actions_array, im_hwvx_pc_triggers_and_actions, g.unordered_ref.hwvx_pc_triggers_and_actions);
        value_object.type = "hwvx_pc_triggers_and_actions"
    } else if (g.hwvx_pc_collision_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_collision_related_array, im_hwvx_pc_collision_related, g.unordered_ref.hwvx_pc_collision_related);
        value_object.type = "hwvx_pc_collision_related"
    } else if (g.hwvx_pc_collision_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_collision_link_array, im_hwvx_pc_collision_link, g.unordered_ref.hwvx_pc_collision_link);
        value_object.type = "hwvx_pc_collision_link"
    } else if (g.hwvx_pc_model_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_model_array, im_hwvx_pc_model, g.unordered_ref.hwvx_pc_model);
        value_object.type = "hwvx_pc_model"
    } else if (g.hwvx_pc_texture_anims_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_texture_anims_array, im_hwvx_pc_texture_anims, g.unordered_ref.hwvx_pc_texture_anims);
        value_object.type = "hwvx_pc_texture_anims"
    } else if (g.hwvx_pc_model_anims_1_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_model_anims_1_array, im_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1);
        value_object.type = "hwvx_pc_model_anims_1"
    } else if (g.hwvx_pc_model_anims_2_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);
        value_object.type = "hwvx_pc_model_anims_2"
    } else if (g.hwvx_pc_world_text_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_text_link_array, im_hwvx_pc_world_text_link, g.unordered_ref.hwvx_pc_world_text_link);
        value_object.type = "hwvx_pc_world_text_link"
    } else if (g.hwvx_pc_model_car_sound_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_model_car_sound_link_array, im_hwvx_pc_model_car_sound_link, g.unordered_ref.hwvx_pc_model_car_sound_link);
        value_object.type = "hwvx_pc_model_car_sound_link"
    } else if (g.hwvx_pc_world_color_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_color_section_array, im_hwvx_pc_world_color_section, g.unordered_ref.hwvx_pc_world_color_section);
        value_object.type = "hwvx_pc_world_color_section"
    } else if (g.hwvx_pc_world_idk_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_idk_array, im_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk);
        value_object.type = "hwvx_pc_world_idk"
    } else if (g.hwvx_pc_some_world_thing_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_some_world_thing_array, im_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing);
        value_object.type = "hwvx_pc_some_world_thing"
    } else if (g.hwvx_pc_world_small_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_small_section_array, im_hwvx_pc_world_small_section, g.unordered_ref.hwvx_pc_world_small_section);
        value_object.type = "hwvx_pc_world_small_section"
    } else if (g.hwvx_pc_world_model_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_model_related_array, im_hwvx_pc_world_model_related, g.unordered_ref.hwvx_pc_world_model_related);
        value_object.type = "hwvx_pc_world_model_related"
    } else if (g.hwvx_pc_geo_list_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_geo_list_array, im_hwvx_pc_geo_list, g.unordered_ref.hwvx_pc_geo_list);
        value_object.type = "hwvx_pc_geo_list"
    } else if (g.hwvx_pc_collision_settings_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_collision_settings_array, im_hwvx_pc_collision_settings, g.unordered_ref.hwvx_pc_collision_settings);
        value_object.type = "hwvx_pc_collision_settings"
    } else if (g.hwvx_pc_car_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_car_array, im_hwvx_pc_car, g.unordered_ref.hwvx_pc_car);
        value_object.type = "hwvx_pc_car"
    } else if (g.hwvx_pc_car_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_car_related_array, im_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related);
        value_object.type = "hwvx_pc_car_related"
    } else if (g.hwvx_pc_car_path_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_car_path_related_array, im_hwvx_pc_car_path_related, g.unordered_ref.hwvx_pc_car_path_related);
        value_object.type = "hwvx_pc_car_path_related"
    } else if (g.hwvx_pc_car_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_car_link_array, im_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link);
        value_object.type = "hwvx_pc_car_link"
    } else if (g.hwvx_pc_car_unknown_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_car_unknown_link_array, im_hwvx_pc_car_unknown_link, g.unordered_ref.hwvx_pc_car_unknown_link);
        value_object.type = "hwvx_pc_car_unknown_link"
    } else if (g.hwvx_pc_model_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_model_link_array, im_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link);
        value_object.type = "hwvx_pc_model_link"
    } else if (g.hwvx_pc_text_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
        value_object.type = "hwvx_pc_text"
    } else if (g.hwvx_pc_font_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_font_array, im_hwvx_pc_font, g.unordered_ref.hwvx_pc_font);
        value_object.type = "hwvx_pc_font"
    } else if (g.hwvx_pc_mysterious_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_mysterious_array, im_hwvx_pc_mysterious, g.unordered_ref.hwvx_pc_mysterious);
        value_object.type = "hwvx_pc_mysterious"
    } else if (g.hwvx_pc_strange_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_strange_array, im_hwvx_pc_strange, g.unordered_ref.hwvx_pc_strange);
        value_object.type = "hwvx_pc_strange"
    } else if (g.hwvx_pc_unknown_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
        value_object.type = "hwvx_pc_unknown"
    } else if (g.hwvx_pc_unknown_thing_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_unknown_thing_array, im_hwvx_pc_unknown_thing, g.unordered_ref.hwvx_pc_unknown_thing);
        value_object.type = "hwvx_pc_unknown_thing"
    } else if (g.hwvx_pc_asdf_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_asdf_array, im_hwvx_pc_asdf, g.unordered_ref.hwvx_pc_asdf);
        value_object.type = "hwvx_pc_asdf"
    } else if (g.hwvx_pc_unknown_idk_sec_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_unknown_idk_sec_array, im_hwvx_pc_unknown_idk_sec, g.unordered_ref.hwvx_pc_unknown_idk_sec);
        value_object.type = "hwvx_pc_unknown_idk_sec"
    } else if (g.hwvx_pc_grand_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_grand_section_array, im_hwvx_pc_grand_section, g.unordered_ref.hwvx_pc_grand_section);
        value_object.type = "hwvx_pc_grand_section"
    } else if (g.hwvx_pc_unknown_whatever_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_unknown_whatever_array, im_hwvx_pc_unknown_whatever, g.unordered_ref.hwvx_pc_unknown_whatever);
        value_object.type = "hwvx_pc_unknown_whatever"
    } else if (g.hwvx_pc_unknown_small_model_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_unknown_small_model_link_array, im_hwvx_pc_unknown_small_model_link, g.unordered_ref.hwvx_pc_unknown_small_model_link);
        value_object.type = "hwvx_pc_unknown_small_model_link"
    } else if (g.hwvx_pc_unknown_link_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_unknown_link_section_array, im_hwvx_pc_unknown_link_section, g.unordered_ref.hwvx_pc_unknown_link_section);
        value_object.type = "hwvx_pc_unknown_link_section"
    } else if (g.hwvx_pc_item_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_item_array, im_hwvx_pc_item, g.unordered_ref.hwvx_pc_item);
        value_object.type = "hwvx_pc_item"
    } else if (g.hwvx_pc_sound_controls_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
        value_object.type = "hwvx_pc_sound_controls"
    } else if (g.hwvx_pc_sound_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
        value_object.type = "hwvx_pc_sound_section"
    } else if (g.hwvx_pc_world_settings_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_world_settings_array, im_hwvx_pc_world_settings, g.unordered_ref.hwvx_pc_world_settings);
        value_object.type = "hwvx_pc_world_settings"
    } else if (g.hwvx_pc_interface_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
        value_object.type = "hwvx_pc_interface"
    } else if (g.hwvx_pc_interface_unknown_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_interface_unknown_array, im_hwvx_pc_interface_unknown, g.unordered_ref.hwvx_pc_interface_unknown);
        value_object.type = "hwvx_pc_interface_unknown"
    } else if (g.hwvx_pc_interface_text_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_interface_text_related_array, im_hwvx_pc_interface_text_related, g.unordered_ref.hwvx_pc_interface_text_related);
        value_object.type = "hwvx_pc_interface_text_related"
    } else if (g.hwvx_pc_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_link_array, im_hwvx_pc_link, g.unordered_ref.hwvx_pc_link);
        value_object.type = "hwvx_pc_link"
    } else if (g.hwvx_pc_texture_anims_0_array.includes(check_val)) {
        value_object.section = in_ml(u32(o), g.hwvx_pc_texture_anims_0_array, im_hwvx_pc_texture_anims_0, g.unordered_ref.hwvx_pc_texture_anims_0);
        value_object.type = "hwvx_pc_texture_anims_0"
    }

    // if (g.models_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.models_array, im_models, g.unordered_ref.models);
    //     value_object.type = "models"
    // } else if (g.hwvx_pc_models_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_models_array, im_hwvx_pc_models, g.unordered_ref.hwvx_pc_models);
    //     value_object.type = "hwvx_pc_models"
    // } else if (g.hwvx_pc_world_12_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
    //     value_object.type = "hwvx_pc_world_12"
    // } else if (g.hwvx_pc_world_20_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);
    //     value_object.type = "hwvx_pc_world_20"
    // } else if (g.hwvx_pc_world_36_48_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_36_48_array, im_hwvx_pc_world_36_48, g.unordered_ref.hwvx_pc_world_36_48);
    //     value_object.type = "hwvx_pc_world_36_48"
    // } else if (g.hwvx_pc_Airbox_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
    //     value_object.type = "hwvx_pc_Airbox"
    // } else if (g.hwvx_pc_world_36_36_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_36_36_array, im_hwvx_pc_world_36_36, g.unordered_ref.hwvx_pc_world_36_36);
    //     value_object.type = "hwvx_pc_world_36_36"
    // } else if (g.hwvx_pc_world_36_48_16_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_36_48_16_array, im_hwvx_pc_world_36_48_16, g.unordered_ref.hwvx_pc_world_36_48_16);
    //     value_object.type = "hwvx_pc_world_36_48_16"
    // } else if (g.hwvx_pc_world_36_48_24_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
    //     value_object.type = "hwvx_pc_world_36_48_24"
    // } else if (g.hwvx_pc_world_76_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
    //     value_object.type = "hwvx_pc_world_76"
    // } else if (g.hwvx_pc_world_52_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_52_array, im_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52);
    //     value_object.type = "hwvx_pc_world_52"
    // } else if (g.hwvx_pc_world_108_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_108_array, im_hwvx_pc_world_108, g.unordered_ref.hwvx_pc_world_108);
    //     value_object.type = "hwvx_pc_world_108"
    // } else if (g.hwvx_pc_world_108_44t6_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_108_44t6_array, im_hwvx_pc_world_108_44t6, g.unordered_ref.hwvx_pc_world_108_44t6);
    //     value_object.type = "hwvx_pc_world_108_44t6"
    // } else if (g.hwvx_pc_world_routes_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
    //     value_object.type = "hwvx_pc_world_routes"
    // } else if (g.hwvx_pc_triggers_and_actions_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_triggers_and_actions_array, im_hwvx_pc_triggers_and_actions, g.unordered_ref.hwvx_pc_triggers_and_actions);
    //     value_object.type = "hwvx_pc_triggers_and_actions"
    // } else if (g.hwvx_pc_collision_related_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_collision_related_array, im_hwvx_pc_collision_related, g.unordered_ref.hwvx_pc_collision_related);
    //     value_object.type = "hwvx_pc_collision_related"
    // } else if (g.hwvx_pc_collision_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_collision_link_array, im_hwvx_pc_collision_link, g.unordered_ref.hwvx_pc_collision_link);
    //     value_object.type = "hwvx_pc_collision_link"
    // } else if (g.hwvx_pc_model_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_model_array, im_hwvx_pc_model, g.unordered_ref.hwvx_pc_model);
    //     value_object.type = "hwvx_pc_model"
    // } else if (g.hwvx_pc_texture_anims_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_texture_anims_array, im_hwvx_pc_texture_anims, g.unordered_ref.hwvx_pc_texture_anims);
    //     value_object.type = "hwvx_pc_texture_anims"
    // } else if (g.hwvx_pc_model_anims_1_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_model_anims_1_array, im_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1);
    //     value_object.type = "hwvx_pc_model_anims_1"
    // } else if (g.hwvx_pc_model_anims_2_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);
    //     value_object.type = "hwvx_pc_model_anims_2"
    // } else if (g.hwvx_pc_world_text_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_text_link_array, im_hwvx_pc_world_text_link, g.unordered_ref.hwvx_pc_world_text_link);
    //     value_object.type = "hwvx_pc_world_text_link"
    // } else if (g.hwvx_pc_model_car_sound_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_model_car_sound_link_array, im_hwvx_pc_model_car_sound_link, g.unordered_ref.hwvx_pc_model_car_sound_link);
    //     value_object.type = "hwvx_pc_model_car_sound_link"
    // } else if (g.hwvx_pc_world_color_section_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_color_section_array, im_hwvx_pc_world_color_section, g.unordered_ref.hwvx_pc_world_color_section);
    //     value_object.type = "hwvx_pc_world_color_section"
    // } else if (g.hwvx_pc_world_idk_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_idk_array, im_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk);
    //     value_object.type = "hwvx_pc_world_idk"
    // } else if (g.hwvx_pc_some_world_thing_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_some_world_thing_array, im_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing);
    //     value_object.type = "hwvx_pc_some_world_thing"
    // } else if (g.hwvx_pc_world_small_section_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_small_section_array, im_hwvx_pc_world_small_section, g.unordered_ref.hwvx_pc_world_small_section);
    //     value_object.type = "hwvx_pc_world_small_section"
    // } else if (g.hwvx_pc_world_model_related_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_model_related_array, im_hwvx_pc_world_model_related, g.unordered_ref.hwvx_pc_world_model_related);
    //     value_object.type = "hwvx_pc_world_model_related"
    // } else if (g.hwvx_pc_geo_list_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_geo_list_array, im_hwvx_pc_geo_list, g.unordered_ref.hwvx_pc_geo_list);
    //     value_object.type = "hwvx_pc_geo_list"
    // } else if (g.hwvx_pc_collision_settings_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_collision_settings_array, im_hwvx_pc_collision_settings, g.unordered_ref.hwvx_pc_collision_settings);
    //     value_object.type = "hwvx_pc_collision_settings"
    // } else if (g.hwvx_pc_car_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_car_array, im_hwvx_pc_car, g.unordered_ref.hwvx_pc_car);
    //     value_object.type = "hwvx_pc_car"
    // } else if (g.hwvx_pc_car_related_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_car_related_array, im_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related);
    //     value_object.type = "hwvx_pc_car_related"
    // } else if (g.hwvx_pc_car_path_related_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_car_path_related_array, im_hwvx_pc_car_path_related, g.unordered_ref.hwvx_pc_car_path_related);
    //     value_object.type = "hwvx_pc_car_path_related"
    // } else if (g.hwvx_pc_car_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_car_link_array, im_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link);
    //     value_object.type = "hwvx_pc_car_link"
    // } else if (g.hwvx_pc_car_unknown_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_car_unknown_link_array, im_hwvx_pc_car_unknown_link, g.unordered_ref.hwvx_pc_car_unknown_link);
    //     value_object.type = "hwvx_pc_car_unknown_link"
    // } else if (g.hwvx_pc_model_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_model_link_array, im_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link);
    //     value_object.type = "hwvx_pc_model_link"
    // } else if (g.hwvx_pc_text_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    //     value_object.type = "hwvx_pc_text"
    // } else if (g.hwvx_pc_font_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_font_array, im_hwvx_pc_font, g.unordered_ref.hwvx_pc_font);
    //     value_object.type = "hwvx_pc_font"
    // } else if (g.hwvx_pc_mysterious_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_mysterious_array, im_hwvx_pc_mysterious, g.unordered_ref.hwvx_pc_mysterious);
    //     value_object.type = "hwvx_pc_mysterious"
    // } else if (g.hwvx_pc_strange_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_strange_array, im_hwvx_pc_strange, g.unordered_ref.hwvx_pc_strange);
    //     value_object.type = "hwvx_pc_strange"
    // } else if (g.hwvx_pc_unknown_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    //     value_object.type = "hwvx_pc_unknown"
    // } else if (g.hwvx_pc_unknown_thing_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_unknown_thing_array, im_hwvx_pc_unknown_thing, g.unordered_ref.hwvx_pc_unknown_thing);
    //     value_object.type = "hwvx_pc_unknown_thing"
    // } else if (g.hwvx_pc_asdf_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_asdf_array, im_hwvx_pc_asdf, g.unordered_ref.hwvx_pc_asdf);
    //     value_object.type = "hwvx_pc_asdf"
    // } else if (g.hwvx_pc_unknown_idk_sec_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_unknown_idk_sec_array, im_hwvx_pc_unknown_idk_sec, g.unordered_ref.hwvx_pc_unknown_idk_sec);
    //     value_object.type = "hwvx_pc_unknown_idk_sec"
    // } else if (g.hwvx_pc_grand_section_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_grand_section_array, im_hwvx_pc_grand_section, g.unordered_ref.hwvx_pc_grand_section);
    //     value_object.type = "hwvx_pc_grand_section"
    // } else if (g.hwvx_pc_unknown_whatever_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_unknown_whatever_array, im_hwvx_pc_unknown_whatever, g.unordered_ref.hwvx_pc_unknown_whatever);
    //     value_object.type = "hwvx_pc_unknown_whatever"
    // } else if (g.hwvx_pc_unknown_small_model_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_unknown_small_model_link_array, im_hwvx_pc_unknown_small_model_link, g.unordered_ref.hwvx_pc_unknown_small_model_link);
    //     value_object.type = "hwvx_pc_unknown_small_model_link"
    // } else if (g.hwvx_pc_unknown_link_section_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_unknown_link_section_array, im_hwvx_pc_unknown_link_section, g.unordered_ref.hwvx_pc_unknown_link_section);
    //     value_object.type = "hwvx_pc_unknown_link_section"
    // } else if (g.hwvx_pc_item_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_item_array, im_hwvx_pc_item, g.unordered_ref.hwvx_pc_item);
    //     value_object.type = "hwvx_pc_item"
    // } else if (g.hwvx_pc_sound_controls_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    //     value_object.type = "hwvx_pc_sound_controls"
    // } else if (g.hwvx_pc_sound_section_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    //     value_object.type = "hwvx_pc_sound_section"
    // } else if (g.hwvx_pc_world_settings_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_world_settings_array, im_hwvx_pc_world_settings, g.unordered_ref.hwvx_pc_world_settings);
    //     value_object.type = "hwvx_pc_world_settings"
    // } else if (g.hwvx_pc_interface_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
    //     value_object.type = "hwvx_pc_interface"
    // } else if (g.hwvx_pc_interface_unknown_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_interface_unknown_array, im_hwvx_pc_interface_unknown, g.unordered_ref.hwvx_pc_interface_unknown);
    //     value_object.type = "hwvx_pc_interface_unknown"
    // } else if (g.hwvx_pc_interface_text_related_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_interface_text_related_array, im_hwvx_pc_interface_text_related, g.unordered_ref.hwvx_pc_interface_text_related);
    //     value_object.type = "hwvx_pc_interface_text_related"
    // } else if (g.hwvx_pc_link_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_link_array, im_hwvx_pc_link, g.unordered_ref.hwvx_pc_link);
    //     value_object.type = "hwvx_pc_link"
    // } else if (g.hwvx_pc_texture_anims_0_array.includes(check_val)) {
    //     value_object.section = in_ml(u32(o - g.m), g.hwvx_pc_texture_anims_0_array, im_hwvx_pc_texture_anims_0, g.unordered_ref.hwvx_pc_texture_anims_0);
    //     value_object.type = "hwvx_pc_texture_anims_0"
    // }
    return value_object
}

function im_hwvx_pc_triggers_and_actions(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Ow;Q",
        u32_0: u32(o + 0),
        //check this
        section_4: [],
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_28: u32(o + 28),
        //amount?
        u8_40: u8(o + 40),
    });

    switch (u32(o + 8)) {
    case 1:
        u32(o + 4) && im_hwvx_pc_triggers_and_actions_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 3:
        u32(o + 4) && im_hwvx_pc_triggers_and_actions_4t3(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 5:
        u32(o + 4) && im_hwvx_pc_triggers_and_actions_4t5(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 6:
        u32(o + 4) && im_hwvx_pc_triggers_and_actions_4t6(u32(o + 4) + g.m, x[i].section_4);
        break;
    default:
        u32(o + 4) && im_hwvx_pc_triggers_and_actions_4trest(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_pc_triggers_and_actions_12(u32(o + 12) + (ii * 44) + g.m, ii, x[i].section_12);
    }
    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_hwvx_pc_actions(u32(o + 20) + (ii * 24) + g.m, ii, x[i].section_20);
    }
    return x[i].id
    // 44 bytes;

}
function im_hwvx_pc_triggers_and_actions_4t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ljKo",
        unordered_hwvx_pc_interface_0: 0,
    });

    x[0].unordered_hwvx_pc_interface_0 = in_ml(u32(o + 0), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);

    // 16 bytes;

}
function im_hwvx_pc_triggers_and_actions_4t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "mcgD",
        u32_0: u32(o + 0),
        unordered_hwvx_pc_Airbox_4: 0,
        u32_8: u32(o + 8),
    });

    x[0].unordered_hwvx_pc_Airbox_4 = in_ml(u32(o + 4), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);

    // 16 bytes;

}
function im_hwvx_pc_triggers_and_actions_4t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "y@YQ",
        u32_0: u32(o + 0),
        section_4: [],
        section_4_type: [],
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
    });
    let type_object = hwvx_pc_return_if_value_in_multilink(o + 4)
    x[0].section_4 = type_object.section
    x[0].section_4_type = type_object.type

    switch (u32(o + 16)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break
    case 21:
    case 22:
        x[0].section_12 = f32(o + 12);
        break
    }

    // 32 bytes;

}
function im_hwvx_pc_triggers_and_actions_4t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "spCK",
        u32_0: u32(o + 0),
        section: [],
    });

    switch (u32(o)) {
    case 1:
    case 2:
        im_hwvx_pc_triggers_and_actions_4trest(o, x[0].section)
        break
    case 4:
        im_hwvx_pc_triggers_and_actions_4t6t4(o, x[0].section)
        break
    case 20:
    case 21:
        im_hwvx_pc_triggers_and_actions_4t6t20(o, x[0].section)
        break
    }

    // 4 bytes;

}
function im_hwvx_pc_triggers_and_actions_4t6t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "BdCW",
        unordered_hwvx_pc_Airbox_4: 0,
        unordered_hwvx_pc_Airbox_8: 0,
        unordered_hwvx_pc_Airbox_12: 0,
        unordered_hwvx_pc_Airbox_16: 0,
        u32_20: u32(o + 20),
    });

    x[0].unordered_hwvx_pc_Airbox_4 = in_ml(u32(o + 4), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
    x[0].unordered_hwvx_pc_Airbox_8 = in_ml(u32(o + 8), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
    x[0].unordered_hwvx_pc_Airbox_12 = in_ml(u32(o + 12), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
    x[0].unordered_hwvx_pc_Airbox_16 = in_ml(u32(o + 16), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);

    // 28 bytes;

}
function im_hwvx_pc_triggers_and_actions_4t6t20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "No@_",
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_hwvx_pc_world_12_12: 0,
        f32_20: f32(o + 20),
        //check this
    });

    x[0].unordered_hwvx_pc_world_12_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);

    // 28 bytes;

}
function im_hwvx_pc_triggers_and_actions_4trest(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_qnL",
        u32_0: u32(o + 0),
        section_2: [],
        section_3: [],
        section_4: [],
        //amount?
    });

    let _1st_amnt = u32(o)
    let _1st_length = (_1st_amnt * 4) + 4 + o

    for (let i = 0; i < _1st_amnt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 4 + (i * 4), i, x[0].section_2)
    }

    let _2nd_amnt = 0
    let _2nd_length = 0
    _2nd_amnt = u32(_1st_length)
    _2nd_length = (_2nd_amnt * 4) + _1st_length + 4

    o = _1st_length
    for (let i = 0; i < _2nd_amnt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 4 + (i * 4), i, x[0].section_4)
    }
    // 4 bytes;
}

function im_hwvx_pc_triggers_and_actions_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7jf[",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        u32_44: u32(o + 44),
    });

    u32(o + 4) && im_hwvx_pc_triggers_and_actions_12_4(u32(o + 4) + g.m, x[i].section_4);
    return x[i].id
    // ([0] *4) bytes;

}
function im_hwvx_pc_triggers_and_actions_12_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gIZv",
        u32_0: u32(o + 0),
        section_4: [],
        section_4_type: [],
        u32_8: u32(o + 8),
        section_12: [],
        section_12_type: [],
        section_16: [],
    });

    let type_object = hwvx_pc_return_if_value_in_multilink(o + 4)
    x[0].section_4 = type_object.section
    x[0].section_4_type = type_object.type

    // 4 = type
    type_object = hwvx_pc_return_if_value_in_multilink(o + 12)
    x[0].section_12 = type_object.section
    x[0].section_12_type = type_object.type
    // 12 = type

    switch (u32(o + 0)) {
    case 1:
        x[0].section_16 = u32(o + 16)
        break;
    case 22:
        x[0].section_16 = f32(o + 16)
        break;
    default:
        x[0].section_16 = u32(o + 16)
    }

    // 4 bytes;

}
function im_hwvx_pc_actions(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "06f=",
        u32_0: u32(o + 0),
        //check this
        section_4: [],
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u32_20: u32(o + 20),
    });

    switch (u32(o)) {
    case 0:
        u32(o + 4) && im_hwvx_pc_actions_4tAirboxChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 1:
        switch (u32(o + 8)) {
        case 13:
            u32(o + 4) && im_hwvx_pc_actions_4tCameraSetTargetst13(u32(o + 4) + g.m, x[i].section_4);
            break
        case 14:
            u32(o + 4) && im_hwvx_pc_actions_4tCameraSetTargetst14(u32(o + 4) + g.m, x[i].section_4);
            break
        case 17:
            u32(o + 4) && im_hwvx_pc_actions_4tCameraSetTargetst17(u32(o + 4) + g.m, x[i].section_4);
            break
        default:
            console.log(o)
        }
        break
    case 2:
        u32(o + 4) && im_hwvx_pc_actions_4tDestructibleChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 3:
        u32(o + 4) && im_hwvx_pc_actions_4tFXPointChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 4:
        u32(o + 4) && im_hwvx_pc_actions_4tInterfacePlay(u32(o + 4) + g.m, x[i].section_4);
        break
    case 5:
        u32(o + 4) && im_hwvx_pc_actions_4tItemChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 7:
        u32(o + 4) && im_hwvx_pc_actions_4tTimerChangevalue(u32(o + 4) + g.m, x[i].section_4);
        break
    case 8:
        u32(o + 4) && im_hwvx_pc_actions_4tTimerChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 9:
        u32(o + 4) && im_hwvx_pc_actions_4tMoveableChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 10:
        switch (u32(o + 8)) {
        case 10:
            u32(o + 4) && im_hwvx_pc_actions_4tMusicChanget10(u32(o + 4) + g.m, x[i].section_4);
            break
        case 20:
            u32(o + 4) && im_hwvx_pc_actions_4tMusicChanget20(u32(o + 4) + g.m, x[i].section_4);
            break
        default:
            console.log(o)
        }
        break
    case 12:
        u32(o + 4) && im_hwvx_pc_actions_4tNavPointChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 15:
        switch (u32(o + 8)) {
        case 1:
            u32(o + 4) && im_hwvx_pc_actions_4tTargetArrowSetTargett1(u32(o + 4) + g.m, x[i].section_4);
            break
        case 5:
            u32(o + 4) && im_hwvx_pc_actions_4tTargetArrowSetTargett5(u32(o + 4) + g.m, x[i].section_4);
            break
        }
        break
    case 16:
        u32(o + 4) && im_hwvx_pc_actions_4tVariableChangeValue(u32(o + 4) + g.m, x[i].section_4);
        break
    case 17:
        u32(o + 4) && im_hwvx_pc_actions_4tVehicleChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 20:
        u32(o + 4) && im_hwvx_pc_actions_4tPrintDebugString(u32(o + 4) + g.m, x[i].section_4);
        break
    case 21:
        u32(o + 4) && im_hwvx_pc_actions_4tVehicleTeleport(u32(o + 4) + g.m, x[i].section_4);
        break
    case 22:
        u32(o + 4) && im_hwvx_pc_actions_4tVehicleChangeControl(u32(o + 4) + g.m, x[i].section_4);
        break
    case 24:
        u32(o + 4) && im_hwvx_pc_actions_4tVehicleRemoveItem(u32(o + 4) + g.m, x[i].section_4);
        break
    case 26:
        u32(o + 4) && im_hwvx_pc_actions_4tVariableChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 31:
        u32(o + 4) && im_hwvx_pc_actions_4tEndInterface(u32(o + 4) + g.m, x[i].section_4);
        break
    case 32:
        u32(o + 4) && im_hwvx_pc_actions_4tHUDChangeMode(u32(o + 4) + g.m, x[i].section_4);
        break
    case 34:
        switch (u32(o + 8)) {
        case 5:
            u32(o + 4) && im_hwvx_pc_actions_4tCodeVariableModifyValuet5(u32(o + 4) + g.m, x[i].section_4);
            break
        case 6:
            u32(o + 4) && im_hwvx_pc_actions_4tCodeVariableModifyValuet6(u32(o + 4) + g.m, x[i].section_4);
            break
        }
        break
    case 36:
        u32(o + 4) && im_hwvx_pc_actions_4tPauseTACSystem(u32(o + 4) + g.m, x[i].section_4);
        break
    case 38:
        u32(o + 4) && im_hwvx_pc_actions_4tResetGameRound(u32(o + 4) + g.m, x[i].section_4);
        break
    case 39:
        u32(o + 4) && im_hwvx_pc_actions_4tRoundComplete(u32(o + 4) + g.m, x[i].section_4);
        break
    case 40:
        u32(o + 4) && im_hwvx_pc_actions_4tVehicleGiveItem(u32(o + 4) + g.m, x[i].section_4);
        break
    case 41:
        u32(o + 4) && im_hwvx_pc_actions_4tSetPlayerOrder(u32(o + 4) + g.m, x[i].section_4);
        break
    }

    // ([0] *4) bytes;

}
function im_hwvx_pc_actions_4tAirboxChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ":O[[",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
        //amount?
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 8 + (i * 4), i, x[0].section_2)
    }

}

function get_hwvx_pc_triggers_and_actions_sub_list(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "sub?",
        section_0: [],
        type: "?",
        //amount?
    });
    let type_object = hwvx_pc_return_if_value_in_multilink(o)
    x[i].section_0 = type_object.section
    x[i].type = type_object.type
}

function im_hwvx_pc_actions_4tCameraSetTargetst13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LGOJ",
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        section_12: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
    });

    switch (u32(o + 8)) {
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    case 6:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        break;
    }
    switch (u32(o + 28)) {
    case 1:
        x[0].section_32 = in_ml(u32(o + 32), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    }
    return x[0].id
    // 64 bytes;

}
function im_hwvx_pc_actions_4tCameraSetTargetst14(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "E[LH",
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        section_36: [],
        f32_44: f32(o + 44),
        u32_52: u32(o + 52),
    });

    switch (u32(o + 12)) {
    case 1:
        x[0].section_16 = in_ml(u32(o + 16), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    case 2:
        x[0].section_16 = in_ml(u32(o + 16), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
        break;
    case 3:
        x[0].section_16 = in_ml(u32(o + 16), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        break;
    case 6:
        x[0].section_16 = in_ml(u32(o + 16), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        break;
    }
    switch (u32(o + 32)) {
    case 1:
        x[0].section_36 = in_ml(u32(o + 36), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    case 2:
        x[0].section_36 = in_ml(u32(o + 36), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
        break;
    case 3:
        x[0].section_36 = in_ml(u32(o + 36), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        break;
    case 4:
        x[0].section_36 = in_ml(u32(o + 36), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);
        break;
    case 6:
        x[0].section_36 = in_ml(u32(o + 36), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        break;
    }
    // 64 bytes;

}
function im_hwvx_pc_actions_4tCameraSetTargetst17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "g9Bl",
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_44: u32(o + 44),
        section_48: [],
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        u32_64: u32(o + 64),
    });

    switch (u32(o + 24)) {
    case 1:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    case 2:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
        break;
    case 3:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        break;
    case 6:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        break;
    }
    switch (u32(o + 44)) {
    case 1:
        x[0].section_48 = in_ml(u32(o + 48), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    case 2:
        x[0].section_48 = in_ml(u32(o + 48), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
        break;
    case 3:
        x[0].section_48 = in_ml(u32(o + 48), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        break;
    case 6:
        x[0].section_48 = in_ml(u32(o + 48), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        break;
    }
    // 80 bytes;
}
function im_hwvx_pc_actions_4tDestructibleChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tokw",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 8 + (i * 4), i, x[0].section_2)
    }
    // ([4] *4) bytes;

}
function im_hwvx_pc_actions_4tFXPointChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Mlm9",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 8 + (i * 4), i, x[0].section_2)
    }

}
function im_hwvx_pc_actions_4tInterfacePlay(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W_H0",
        unordered_hwvx_pc_interface_0: 0,
    });

    x[0].unordered_hwvx_pc_interface_0 = in_ml(u32(o + 0), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);

    // 16 bytes;

}
function im_hwvx_pc_actions_4tItemChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fX>L",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 8 + (i * 4), i, x[0].section_2)
    }

}
function im_hwvx_pc_actions_4tTimerChangevalue(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fgHH",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_pc_world_76_8: 0,
        u32_12: u32(o + 12),
        section_16: [],
    });

    x[0].unordered_hwvx_pc_world_76_8 = in_ml(u32(o + 8), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
    switch (u32(o + 12)) {
    case 1:
        x[0].section_16 = in_ml(u32(o + 16), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
        break;
    }
    return x[0].id
    // 32 bytes;
}
function im_hwvx_pc_actions_4tTimerChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5a;y",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_hwvx_pc_world_76_12: 0,
    });

    x[0].unordered_hwvx_pc_world_76_12 = in_ml(u32(o + 12), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);

    // 16 bytes;
}
function im_hwvx_pc_actions_4tMoveableChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Nn0L",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_16: u32(o + 16),
        unordered_hwvx_pc_world_20_20: 0,
        unordered_hwvx_pc_world_20_24: 0,
    });

    x[0].unordered_hwvx_pc_world_20_20 = in_ml(u32(o + 20), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);
    x[0].unordered_hwvx_pc_world_20_24 = in_ml(u32(o + 24), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);

    // 32 bytes;
}
function im_hwvx_pc_actions_4tMusicChanget10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FFn^",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
    });

    // 48 bytes;
}
function im_hwvx_pc_actions_4tMusicChanget20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "QGo>",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_48: u32(o + 48),
        f32_52: f32(o + 52),
        u32_76: u32(o + 76),
    });

    // 80 bytes;

}
function im_hwvx_pc_actions_4tNavPointChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iN;x",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 8 + (i * 4), i, x[0].section_2)
    }
    // 8 bytes;

}
function im_hwvx_pc_actions_4tTargetArrowSetTargett1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "a8@U",
    });
    // 16 bytes;

}
function im_hwvx_pc_actions_4tTargetArrowSetTargett5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_diC",
        u32_0: u32(o + 0),
        section_4: [],
    });

    switch (u32(o + 0)) {
    case 1:
        x[0].section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
        break;
    case 2:
        x[0].section_4 = in_ml(u32(o + 4), g.hwvx_pc_Airbox_array, im_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox);
        break;
    case 3:
        x[0].section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        break;
    case 4:
        x[0].section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_20_array, im_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20);
        break;
    case 6:
        x[0].section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_routes_array, im_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes);
        break;
    }
    // 32 bytes;

}
function im_hwvx_pc_actions_4tVariableChangeValue(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ACYg",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_pc_world_76_8: 0,
        u32_12: u32(o + 12),
        section_16: [],
        unordered_hwvx_pc_world_12_20: 0,
    });

    x[0].unordered_hwvx_pc_world_76_8 = in_ml(u32(o + 8), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
    switch (u32(o + 12)) {
    case 1:
        x[0].section_16 = in_ml(u32(o + 16), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
        break;
    }
    x[0].unordered_hwvx_pc_world_12_20 = in_ml(u32(o + 20), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);

    // 32 bytes;
}
function im_hwvx_pc_actions_4tVehicleChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "e^ln",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 8 + (i * 4), i, x[0].section_2)
    }

}
function im_hwvx_pc_actions_4tPrintDebugString(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4Yri",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_pc_text_8: 0,
    });

    x[0].unordered_hwvx_pc_text_8 = in_ml(u32(o + 8), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    // 16 bytes;
}
function im_hwvx_pc_actions_4tVehicleTeleport(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">8[6",
        u32_0: u32(o + 0),
        unordered_hwvx_pc_world_52_4: 0,
        u32_8: u32(o + 8),
        unordered_hwvx_pc_world_12_12: 0,
    });

    x[0].unordered_hwvx_pc_world_52_4 = in_ml(u32(o + 4), g.hwvx_pc_world_52_array, im_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52);
    x[0].unordered_hwvx_pc_world_12_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);

    // 32 bytes;
}
function im_hwvx_pc_actions_4tVehicleChangeControl(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PQm;",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 8)
    for (let i = 0; i < amt; i++) {
        get_hwvx_pc_triggers_and_actions_sub_list(o + 12 + (i * 4), i, x[0].section_2)
    }
}
function im_hwvx_pc_actions_4tVehicleRemoveItem(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">QCg",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_pc_world_12_8: 0,
    });

    x[0].unordered_hwvx_pc_world_12_8 = in_ml(u32(o + 8), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
}
function im_hwvx_pc_actions_4tVariableChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "H:9G",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_pc_world_76_8: 0,
    });

    x[0].unordered_hwvx_pc_world_76_8 = in_ml(u32(o + 8), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);

    // 16 bytes;
}
function im_hwvx_pc_actions_4tEndInterface(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "C;l7",
        u32_0: u32(o + 0),
        unordered_hwvx_pc_interface_4: 0,
    });

    x[0].unordered_hwvx_pc_interface_4 = in_ml(u32(o + 4), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);

    // 16 bytes;

}
function im_hwvx_pc_actions_4tHUDChangeMode(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dSi>",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_pc_actions_4tCodeVariableModifyValuet5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "j8XE",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;
}
function im_hwvx_pc_actions_4tCodeVariableModifyValuet6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "d?ko",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_hwvx_pc_world_12_12: 0,
        u32_16: u32(o + 16),
        section_20: [],
    });

    x[0].unordered_hwvx_pc_world_12_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);

    if (g.hwvx_pc_world_76_array.includes(o + 20)) {
        x[0].section_20 = in_ml(u32(o + 20), g.hwvx_pc_world_76_array, im_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76);
    } else {
        x[0].section_20 = f32(o + 20)
    }

    // 32 bytes;
}
function im_hwvx_pc_actions_4tPauseTACSystem(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ujJ^",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_actions_4tResetGameRound(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HmcY",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_pc_actions_4tRoundComplete(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jnUt",
        u32_0: u32(o + 0),
    });

    // 16 bytes;
}
function im_hwvx_pc_actions_4tVehicleGiveItem(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tQ@M",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        unordered_hwvx_pc_world_12_12: 0,
    });

    switch (u32(o + 0)) {
    case 0:
        x[0].section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_36_48_24_array, im_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24);
        break;
    }
    x[0].unordered_hwvx_pc_world_12_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);

    // 32 bytes;
}
function im_hwvx_pc_actions_4tSetPlayerOrder(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "idke",
        unordered_hwvx_pc_world_12_0: 0,
        unordered_hwvx_pc_world_12_4: 0,
        unordered_hwvx_pc_world_12_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
    });

    x[0].unordered_hwvx_pc_world_12_0 = in_ml(u32(o + 0), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
    x[0].unordered_hwvx_pc_world_12_4 = in_ml(u32(o + 4), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
    x[0].unordered_hwvx_pc_world_12_8 = in_ml(u32(o + 8), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);
    x[0].unordered_hwvx_pc_world_12_12 = in_ml(u32(o + 12), g.hwvx_pc_world_12_array, im_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12);

    // 16 bytes;
}
function im_hwvx_pc_collision(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "e8[m",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        section_32: [],
        u32_36: u32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        u32_52: u32(o + 52),
        //amount?
        u32_56: u32(o + 56),
        //amount?
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        u32_68: u32(o + 68),
        //amount?
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        u32_88: u32(o + 88),
        unordered_hwvx_pc_collision_link_92: 0,
    });

    for (let i = 0; i < u32(o + 68); i++) {
        im_hwvx_pc_collision_32(u32(o + 32) + (i * 80) + g.m, i, x[0].section_32);
    }

    let collision_amount = u32(o + 52) * u32(o + 56) * u32(o + 60)

    for (let i = 0; i < collision_amount; i++) {
        im_hwvx_pc_collision_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }

    for (let i = 0; i < u32(o + 72); i++) {
        im_hwvx_pc_collision_76(u32(o + 76) + (i * 32) + g.m, i, x[0].section_76);
    }

    for (let i = 0; i < u32(o + 80); i++) {
        im_hwvx_pc_collision_84(u32(o + 84) + (i * 48) + g.m, i, x[0].section_84);
    }
    x[0].unordered_hwvx_pc_collision_link_92 = in_ml(u32(o + 92), g.hwvx_pc_collision_link_array, im_hwvx_pc_collision_link, g.unordered_ref.hwvx_pc_collision_link);

    // 96 bytes;
}
function im_hwvx_pc_collision_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "D[zz",

        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        unordered_hwvx_pc_collision_related_48: 0,
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        u32_64: u32(o + 64),
        unordered_hwvx_pc_collision_related_68: 0,
    });

    x[i].unordered_hwvx_pc_collision_related_48 = in_ml(u32(o + 48), g.hwvx_pc_collision_related_array, im_hwvx_pc_collision_related, g.unordered_ref.hwvx_pc_collision_related);

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_hwvx_pc_collision_32_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
    }
    x[i].unordered_hwvx_pc_collision_related_68 = in_ml(u32(o + 68), g.hwvx_pc_collision_related_array, im_hwvx_pc_collision_related, g.unordered_ref.hwvx_pc_collision_related);

}
function im_hwvx_pc_collision_32_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ilFa",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_collision_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Hmgf",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_hwvx_pc_collision_76(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WKVo",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
    });

    u32(o + 16) && im_hwvx_pc_collision_76_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_pc_collision_76_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0@vU",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
    });

    // 48 bytes;

}
function im_hwvx_pc_collision_84(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "qn0E",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        u32_36: u32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        u8_43: u8(o + 43),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
    });
}
function im_hwvx_pc_collision_related(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "4[M<",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_19: u8(o + 19),
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_collision_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7WTA",
        unordered_hwvx_pc_collision_settings_0: 0,
        unordered_hwvx_pc_collision_settings_4: 0,
    });

    x[i].unordered_hwvx_pc_collision_settings_0 = in_ml(u32(o + 0), g.hwvx_pc_collision_settings_array, im_hwvx_pc_collision_settings, g.unordered_ref.hwvx_pc_collision_settings);
    x[i].unordered_hwvx_pc_collision_settings_4 = in_ml(u32(o + 4), g.hwvx_pc_collision_settings_array, im_hwvx_pc_collision_settings, g.unordered_ref.hwvx_pc_collision_settings);
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_geo_basic(o, x, model_amt) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KEpY",
        section_0: [],
        section_4: [],
    });

    for (let i = 0; i < model_amt; i++) {
        im_hwvx_pc_geo_basic_0(u32(o + 0) + (i * 12) + g.m, i, x[0].section_0);
    }
    u32(o + 4) && im_hwvx_pc_geo_list(u32(o + 4) + g.m, x[0].section_4);

    // x[0].unordered_hwvx_pc_geo_list_4 = in_ml(u32(o + 4), g.hwvx_pc_geo_list_array, , g.unordered_ref.hwvx_pc_geo_list);

    // 8 bytes;

}
function im_hwvx_pc_geo_basic_0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "SV]u",
        u32_0: u32(o + 0),
        model_8: in_models(o + 8, g.hwvx_pc_models_array, im_hwvx_pc_models, g.datapack_ref.hwvx_pc_models),
    });

}
function im_hwvx_pc_share(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "mWmA",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
    });

}
function im_hwvx_pc_models(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7iX0",
        u16_0: u16(o + 0),
        //check this
        u16_2: u16(o + 2),
        //amount?
        u16_4: u16(o + 4),
        //amount?
        section_8: [],
        section_12: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    switch (u16(o + 0)) {
    case 2:
        for (let ii = 0; ii < u16(o + 2); ii++) {
            im_hwvx_pc_model_pc_8(u32(o + 8) + (ii * 24) + g.m, ii, x[i].section_8);
        }
        break;
    case 4101:
        for (let ii = 0; ii < u16(o + 2); ii++) {
            im_hwvx_pc_model_ps2_8(u32(o + 8) + (ii * 24) + g.m, ii, x[i].section_8);
        }
        break;
    case 8195:
        for (let ii = 0; ii < u16(o + 2); ii++) {
            im_hwvx_pc_model_gc_8(u32(o + 8) + (ii * 24) + g.m, ii, x[i].section_8);
        }
        break;
    }
    for (let ii = 0; ii < u16(o + 2); ii++) {
        im_hwvx_pc_model_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_model_gc_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "49_D",
        u8_3: u8(o + 3),
        section_8: [],
        section_12: [],
        section_16: [],
        section_20: im_string(u32(o + 20), 0, false),
    });

    u32(o + 8) && im_hwvx_pc_model_gc_8_8(u32(o + 8) + g.m, x[i].section_8);
    u32(o + 12) && im_hwvx_pc_model_gc_8_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 16) && im_hwvx_pc_model_gc_8_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_pc_model_gc_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bzYZ",
        animation_0: im_patch(g.animation_patch_ref, o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        section_28: [],
    });

    u32(o + 12) && im_hwvx_pc_model_gc_8_8_12(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 28) && im_hwvx_pc_model_gc_8_8_28(u32(o + 28) + g.m, x[0].section_28);

    // 32 bytes;

}
function im_hwvx_pc_model_gc_8_8_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "N6sV",
    });

    // 16 bytes;

}
function im_hwvx_pc_model_gc_8_8_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}

function im_hwvx_pc_model_gc_8_12(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}

function im_hwvx_pc_model_gc_8_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "qgcH",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 16 bytes;
}
function im_hwvx_pc_model_gc_8_16sec1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "sh0M",
        f32_0: f32(o + 0),
    });

    // ([0] /4) bytes;

}
function im_hwvx_pc_model_gc_8_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LFg=",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
    });

    // 32 bytes;

}
function im_hwvx_pc_model_ps2_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4qqw",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        section_8: [],
        u32_12: u32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        section_20: im_string(u32(o + 20), 0, false),
    });

    for (let ii = 0; ii < u8(o + 2); ii++) {
        im_hwvx_pc_model_ps2_8_8(u32(o + 8) + (ii * 32) + g.m, ii.x[i].section_8);
    }
    x[i].unordered_hwvx_pc_model_ps2_8_20_20 = in_ml(u32(o + 20), g.hwvx_pc_model_ps2_8_20_array, im_hwvx_pc_model_ps2_8_20, g.unordered_ref.hwvx_pc_model_ps2_8_20);

    // 32 bytes;

}
function im_hwvx_pc_model_ps2_8_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CSz^",
        animation_0: im_patch(g.animation_patch_ref, o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

    u32(o + 12) && im_hwvx_pc_model_ps2_8_8_12(u32(o + 12) + g.m, x[i].section_12);

    // 32 bytes;

}
function im_hwvx_pc_model_ps2_8_8_12(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}

function im_hwvx_pc_model_pc_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "UTX:",
        u8_2: u8(o + 2),
        section_8: [],
        section_12: [],
        section_16: [],
        section_20: 0,
    });

    if (u32(o + 20) + g.m === o) {
        x[i].section_20 = x[i].id
    } else {
        x[i].section_20 = im_string(u32(o + 20), 0, false)
    }

    for (let ii = 0; ii < u8(o + 2); ii++) {
        im_hwvx_pc_model_pc_8_8(u32(o + 8) + (ii * 32) + g.m, ii, x[i].section_8);
    }
    u32(o + 12) && im_hwvx_pc_model_pc_8_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 16) && im_hwvx_pc_model_pc_8_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_pc_model_pc_8_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "<9^0",
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        section_28: [],
    });

    u32(o + 12) && im_hwvx_pc_model_pc_8_8_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 28) && im_hwvx_pc_model_pc_8_8_28(u32(o + 28) + g.m, x[i].section_28);

}
function im_hwvx_pc_model_pc_8_8_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PXaM",
    });

    // 16 bytes;

}

function im_hwvx_pc_model_pc_8_8_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}

function im_hwvx_pc_model_pc_8_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "amrw",
        type: 0,
        section: [],
    });
    if (log_array.p_offset.array.includes(o + 0 - g.m)) {
        x[0].type = "a"
        im_hwvx_pc_model_pc_8_12_type_a(o, x[0].section);
    } else {
        x[0].type = "b"
        im_hwvx_pc_model_pc_8_12_type_b(o, x[0].section);
    }
}

function im_hwvx_pc_model_pc_8_12_type_a(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VMfD",
        section_0: [],
        section_4: [],
        section_8: [],
        section_12: [],
    });

    u32(o + 0) && unordered_hwvx_pc_model_pc_8_12_type_a_0_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && unordered_hwvx_pc_model_pc_8_12_type_a_0_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && unordered_hwvx_pc_model_pc_8_12_type_a_0_8(u32(o + 8) + g.m, x[0].section_8);
    u32(o + 12) && unordered_hwvx_pc_model_pc_8_12_type_a_0_12(u32(o + 12) + g.m, x[0].section_12);

    // 32 bytes;

}

function unordered_hwvx_pc_model_pc_8_12_type_a_0_0(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}
function unordered_hwvx_pc_model_pc_8_12_type_a_0_4(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}
function unordered_hwvx_pc_model_pc_8_12_type_a_0_8(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}
function unordered_hwvx_pc_model_pc_8_12_type_a_0_12(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}

function im_hwvx_pc_model_pc_8_12_type_b(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}

function im_hwvx_pc_model_pc_8_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Lp_B",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
    });

    // 32 bytes;

}
function im_hwvx_pc_model_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Q8UA",
        f32_0: f32(o + 0),
    });

}
function im_hwvx_pc_texture_anims(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "@2Uu",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_pc_texture_anims_0(u32(o + 0) + g.m, 0, x[i].section_0);
    // offset? 
    return x[i].id
    // 12 bytes;

}
function im_hwvx_pc_model_anims_1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "[m@P",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        //amount?
        u32_20: u32(o + 20),
        section_24: [],
        section_28: [],
        section_32: [],
        section_36: [],
        u32_40: u32(o + 40),
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        u8_56: u8(o + 56),
        u8_57: u8(o + 57),
        u8_58: u8(o + 58),
        u8_59: u8(o + 59),
        u8_60: u8(o + 60),
        u8_61: u8(o + 61),
        u8_62: u8(o + 62),
        u8_63: u8(o + 63),
    });

    // x[i].unordered_hwvx_pc_model_anims_1_24_24 = in_ml(u32(o + 24), g.hwvx_pc_model_anims_1_24_array, im_hwvx_pc_model_anims_1_24, g.unordered_ref.hwvx_pc_model_anims_1_24);
    u32(o + 24) && im_hwvx_pc_model_anims_1_28(u32(o + 24) + g.m, x[i].section_24);
    u32(o + 28) && im_hwvx_pc_model_anims_1_28(u32(o + 28) + g.m, x[i].section_28);
    u32(o + 28) && im_hwvx_pc_model_anims_1_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_hwvx_pc_model_anims_1_36(u32(o + 36) + g.m, x[i].section_36);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_pc_model_anims_1_44(u32(o + 44) + (ii * 16) + g.m, ii, x[i].section_44);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_model_anims_1_24(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}
function im_hwvx_pc_model_anims_1_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}
function im_hwvx_pc_model_anims_1_32(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ??? bytes;

}
function im_hwvx_pc_model_anims_1_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "De[c",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // ??? bytes;

}
function im_hwvx_pc_model_anims_1_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8ebo",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_model_anims_2(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "9Dh0",
        u32_0: u32(o + 0),
        //amount?
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u32_8: u32(o + 8),
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_model_anims_2_16(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_model_anims_2_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "J6YM",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u32_8: u32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

}
function im_hwvx_pc_texture(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "w_ld",
        u16_0: u16(o + 0),
        //check this
        u16_2: u16(o + 2),
        u16_4: u16(o + 4),
        u16_6: u16(o + 6),
        texture_section: [],
        u32_12: u32(o + 12),
    });

    // calculate texture length
    let texture_x = u16(o + 2)
    let texture_y = u16(o + 4)
    let total_length = 0
    switch (u16(o + 0)) {
    case 0:
        total_length = texture_x * texture_y * 3
        break
    case 1:
        total_length = texture_x * texture_y * 4
        break
    case 2:
        total_length = texture_x * texture_y
        break
    case 4:
        total_length = texture_x * texture_y / 2
        break
    case 5:
        total_length = texture_x * texture_y
        break
    default:
        console.pk_log(`unknown texture type ${u8(o + 4)}`)
    }
    let start_08_texture = u32(o + 8) + g.m
    let end_08_texture = start_08_texture + total_length
    // 20 and 16 has mips
    // 12 no mips

    if (u16(o + 6) === 0) {
        // no mipmaps
        if (u32(o + 8)) {
            im_hwvx_pc_Texture_8(start_08_texture, x[i].texture_section, end_08_texture)
            // x[i].texture_section.push(convert_arraybuffer_base64(buffer.slice(start_08_texture, end_08_texture)))
        }

    } else {
        let mipmap_offset = total_length

        for (let ii = 0; ii < u16(o + 6) - 1; ii++) {

            if (u32(o + 8)) {
                im_hwvx_pc_Texture_8(start_08_texture, x[i].texture_section, end_08_texture)
                // x[i].texture_section.push(convert_arraybuffer_base64(buffer.slice(start_08_texture, end_08_texture)))
            }
            start_08_texture += mipmap_offset
            mipmap_offset = Math.round(mipmap_offset / 4)
            if (u16(o + 6) !== ii) {
                end_08_texture += mipmap_offset
            }

        }

    }

    // 32 bytes;

    return x[i].id
    // 16 bytes;
}
function im_hwvx_pc_Texture_8(o, x, end) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, end)),
    });

}

function im_hwvx_pc_share_end(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "v=q<",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_pc_share_end_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    for (let i = 0; i < u32(o + 12); i++) {
        im_hwvx_pc_share_end_16(u32(o + 16) + (i * 8) + g.m, i, x[0].section_16);
    }

    // 32 bytes;

}
function im_hwvx_pc_share_end_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "eU1@",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_pc_share_end_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8Taq",
        sound_0: im_patch(g.sound_patch_ref, o + 0),
    });

}
function im_hwvx_pc_world_text_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "MADG",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_8: u32(o + 8),
        unordered_hwvx_pc_world_small_section_12: 0,
        unordered_hwvx_pc_world_small_section_16: 0,
        unordered_hwvx_pc_text_20: 0,
        unordered_hwvx_pc_text_24: 0,
    });

    x[i].unordered_hwvx_pc_world_small_section_12 = in_ml(u32(o + 12), g.hwvx_pc_world_small_section_array, im_hwvx_pc_world_small_section, g.unordered_ref.hwvx_pc_world_small_section);
    x[i].unordered_hwvx_pc_world_small_section_16 = in_ml(u32(o + 16), g.hwvx_pc_world_small_section_array, im_hwvx_pc_world_small_section, g.unordered_ref.hwvx_pc_world_small_section);
    x[i].unordered_hwvx_pc_text_20 = in_ml(u32(o + 20), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    x[i].unordered_hwvx_pc_text_24 = in_ml(u32(o + 24), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_model_car_sound_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "oo5d",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        u8_5: u8(o + 5),
        unordered_hwvx_pc_car_link_16: 0,
        u32_24: u32(o + 24),
        section_28: [],
    });

    x[i].unordered_hwvx_pc_car_link_16 = in_ml(u32(o + 16), g.hwvx_pc_car_link_array, im_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link);
    u32(o + 28) && im_hwvx_pc_model_car_sound_link_28(u32(o + 28) + g.m, x[i].section_28);
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_model_car_sound_link_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=fbU",
        u8_16: u8(o + 16),
        unordered_hwvx_pc_sound_controls_24: 0,
    });

    x[0].unordered_hwvx_pc_sound_controls_24 = in_ml(u32(o + 24), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);

    // 32 bytes;

}
function im_hwvx_pc_world_color_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "aFli",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_world_color_section_4(u32(o + 4) + (ii * 12) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_world_color_section_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "OyRE",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_world_idk(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "eugV",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_36: u8(o + 36),
        u8_38: u8(o + 38),
        u8_39: u8(o + 39),
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
    });

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_pc_world_idk_48(u32(o + 48) + (ii * 12) + g.m, ii, x[i].section_48);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_world_idk_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8j8v",
        unordered_hwvx_pc_some_world_thing_0: 0,
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    x[i].unordered_hwvx_pc_some_world_thing_0 = in_ml(u32(o + 0), g.hwvx_pc_some_world_thing_array, im_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing);

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_pc_world_idk_48_8(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_pc_world_idk_48_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Rfa7",
        unordered_hwvx_pc_some_world_thing_0: 0,
        u32_4: u32(o + 4),
        section_8: [],
    });

    x[i].unordered_hwvx_pc_some_world_thing_0 = in_ml(u32(o + 0), g.hwvx_pc_some_world_thing_array, im_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing);
    u32(o + 8) && im_hwvx_pc_world_idk_48_8_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_pc_world_idk_48_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]Pkr",
        unordered_hwvx_pc_some_world_thing_0: 0,
    });

    x[0].unordered_hwvx_pc_some_world_thing_0 = in_ml(u32(o + 0), g.hwvx_pc_some_world_thing_array, im_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing);

    // 16 bytes;

}
function im_hwvx_pc_some_world_thing(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "P9kZ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_5: u8(o + 5),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_52: u32(o + 52),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        section_88: [],
        section_116: im_string(u32(o + 116), 0, false),
    });

    u32(o + 88) && im_hwvx_pc_some_world_thing_88(u32(o + 88) + g.m, x[i].section_88);
    return x[i].id
    // 128 bytes;

}
function im_hwvx_pc_some_world_thing_88(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[LuX",
        u8_2: u8(o + 2),
        u16_6: u16(o + 6),
    });

    // 32 bytes;

}
function im_hwvx_pc_world_small_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "EU_i",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_hwvx_pc_world_small_section_12(u32(o + 12) + g.m, x[i].section_12);
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_world_small_section_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LcQw",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

    // 16 bytes;

}
function im_hwvx_pc_world_model_related(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "s7s<",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        f32_8: f32(o + 8),
        unordered_hwvx_pc_sound_controls_12: 0,
        unordered_hwvx_pc_car_link_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    switch (u8(o + 4)) {
    case 1:
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_model_link_array, im_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link);
        break;
    }
    x[0].unordered_hwvx_pc_sound_controls_12 = in_ml(u32(o + 12), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    x[0].unordered_hwvx_pc_car_link_16 = in_ml(u32(o + 16), g.hwvx_pc_car_link_array, im_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link);
    x[0].unordered_hwvx_pc_model_anims_2_20 = in_ml(u32(o + 20), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_mysterious(u32(o + 28) + (ii * 32) + g.m, ii, x[i].section_28);
    }

    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_geo_list(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8[Hz",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_geo_list_4(u32(o + 4) + (ii * 20) + g.m, ii, x[0].section_4);
    }
    return x[0].id
    // 16 bytes;

}
function im_hwvx_pc_geo_list_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "9=zw",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        section_8: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
    });

    u32(o + 4) && im_hwvx_pc_geo_list_4_4(u32(o + 4) + g.m, x[i].section_4);

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_geo_list_4_8(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_pc_geo_list_4_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "?DFi",
        f32_0: f32(o + 0),
    });

}
function im_hwvx_pc_geo_list_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WU;K",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_hwvx_pc_collision_settings(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "x:>N",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        unordered_hwvx_pc_unknown_48: 0,
        unordered_hwvx_pc_unknown_thing_52: 0,
        unordered_hwvx_pc_sound_section_60: 0,
        unordered_hwvx_pc_unknown_64: 0,
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        u32_76: u32(o + 76),
        //amount?
        section_80: [],
    });

    x[i].unordered_hwvx_pc_unknown_48 = in_ml(u32(o + 48), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    x[i].unordered_hwvx_pc_unknown_thing_52 = in_ml(u32(o + 52), g.hwvx_pc_unknown_thing_array, im_hwvx_pc_unknown_thing, g.unordered_ref.hwvx_pc_unknown_thing);
    x[i].unordered_hwvx_pc_sound_section_60 = in_ml(u32(o + 60), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    x[i].unordered_hwvx_pc_unknown_64 = in_ml(u32(o + 64), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_hwvx_pc_collision_settings_72(u32(o + 72) + (ii * 4) + g.m, ii, x[i].section_72);
    }

    for (let ii = 0; ii < u32(o + 76); ii++) {
        im_hwvx_pc_collision_settings_72(u32(o + 80) + (ii * 4) + g.m, ii, x[i].section_80);
    }
    return x[i].id
    // 96 bytes;

}
function im_hwvx_pc_collision_settings_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "GyBQ",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_car(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7Fjr",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        texture_68: im_patch(g.texture_patch_ref, o + 68),
        unordered_hwvx_pc_model_anims_1_72: 0,
        unordered_hwvx_pc_model_anims_2_76: 0,
        texture_80: im_patch(g.texture_patch_ref, o + 80),
        model_84: in_models(o + 84, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        unordered_hwvx_pc_sound_section_92: 0,
        unordered_hwvx_pc_sound_section_96: 0,
        unordered_hwvx_pc_sound_section_100: 0,
        section_108: [],
        section_120: [],
        section_124: [],
        section_128: [],
        section_132: [],
        section_136: [],
        section_140: [],
        unordered_hwvx_pc_car_related_144: 0,
        unordered_hwvx_pc_car_related_148: 0,
        unordered_hwvx_pc_car_related_152: 0,
        unordered_hwvx_pc_car_related_156: 0,
        unordered_hwvx_pc_car_link_160: 0,
        section_164: [],
        section_172: [],
        unordered_hwvx_pc_unknown_176: 0,
        u32_208: u32(o + 208),
        //amount?
        section_212: [],
        u32_216: u32(o + 216),
        //amount?
        section_220: [],
        u32_224: u32(o + 224),
        //amount?
        section_228: [],
        u32_232: u32(o + 232),
        //amount?
        section_236: [],
        u32_248: u32(o + 248),
        section_252: [],
        u32_256: u32(o + 256),
        section_260: [],
        u32_264: u32(o + 264),
        section_268: [],
        u32_280: u32(o + 280),
        //amount?
        section_284: [],
    });

    x[i].unordered_hwvx_pc_model_anims_1_72 = in_ml(u32(o + 72), g.hwvx_pc_model_anims_1_array, im_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1);
    x[i].unordered_hwvx_pc_model_anims_2_76 = in_ml(u32(o + 76), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);
    x[i].unordered_hwvx_pc_sound_section_92 = in_ml(u32(o + 92), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    x[i].unordered_hwvx_pc_sound_section_96 = in_ml(u32(o + 96), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    x[i].unordered_hwvx_pc_sound_section_100 = in_ml(u32(o + 100), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    u32(o + 108) && im_hwvx_pc_car_108(u32(o + 108) + g.m, x[i].section_108);
    u32(o + 120) && im_hwvx_pc_car_120(u32(o + 120) + g.m, x[i].section_120);
    u32(o + 124) && im_hwvx_pc_car_124(u32(o + 124) + g.m, x[i].section_124);
    u32(o + 128) && im_hwvx_pc_car_128(u32(o + 128) + g.m, x[i].section_128);
    u32(o + 132) && im_hwvx_pc_car_132(u32(o + 132) + g.m, x[i].section_132);
    u32(o + 136) && im_hwvx_pc_car_136(u32(o + 136) + g.m, x[i].section_136);
    u32(o + 140) && im_hwvx_pc_car_140(u32(o + 140) + g.m, x[i].section_140);
    x[i].unordered_hwvx_pc_car_related_144 = in_ml(u32(o + 144), g.hwvx_pc_car_related_array, im_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related);
    x[i].unordered_hwvx_pc_car_related_148 = in_ml(u32(o + 148), g.hwvx_pc_car_related_array, im_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related);
    x[i].unordered_hwvx_pc_car_related_152 = in_ml(u32(o + 152), g.hwvx_pc_car_related_array, im_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related);
    x[i].unordered_hwvx_pc_car_related_156 = in_ml(u32(o + 156), g.hwvx_pc_car_related_array, im_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related);
    x[i].unordered_hwvx_pc_car_link_160 = in_ml(u32(o + 160), g.hwvx_pc_car_link_array, im_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link);
    u32(o + 164) && im_hwvx_pc_car_164(u32(o + 164) + g.m, x[i].section_164);
    u32(o + 172) && im_hwvx_pc_car_172(u32(o + 172) + g.m, x[i].section_172);
    x[i].unordered_hwvx_pc_unknown_176 = in_ml(u32(o + 176), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    for (let ii = 0; ii < u32(o + 208); ii++) {
        im_hwvx_pc_car_212(u32(o + 212) + (ii * 80) + g.m, ii, x[i].section_212);
    }

    for (let ii = 0; ii < u32(o + 216); ii++) {
        im_hwvx_pc_car_220(u32(o + 220) + (ii * 8) + g.m, ii, x[i].section_220);
    }

    for (let ii = 0; ii < u32(o + 224); ii++) {
        im_hwvx_pc_car_228(u32(o + 228) + (ii * 12) + g.m, ii, x[i].section_228);
    }

    for (let ii = 0; ii < u32(o + 232); ii++) {
        im_hwvx_pc_car_228(u32(o + 236) + (ii * 12) + g.m, ii, x[i].section_236);
    }
    u32(o + 252) && im_hwvx_pc_car_252(u32(o + 252) + g.m, x[i].section_252);
    u32(o + 260) && im_hwvx_pc_car_260(u32(o + 260) + g.m, x[i].section_260);
    u32(o + 268) && im_hwvx_pc_car_268(u32(o + 268) + g.m, x[i].section_268);

    for (let ii = 0; ii < u32(o + 280); ii++) {
        im_hwvx_pc_car_220(u32(o + 284) + (ii * 8) + g.m, ii, x[i].section_284);
    }
    return x[i].id
    // 288 bytes;

}
function im_hwvx_pc_car_108(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "hQfb",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_car_120(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "EZIQ",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        unordered_hwvx_pc_model_link_16: 0,
        u8_36: u8(o + 36),
        u8_37: u8(o + 37),
        u8_38: u8(o + 38),
    });

    x[0].unordered_hwvx_pc_model_link_16 = in_ml(u32(o + 16), g.hwvx_pc_model_link_array, im_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link);

    // 112 bytes;

}
function im_hwvx_pc_car_124(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "BJzR",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_hwvx_pc_car_128(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":cKe",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_92: f32(o + 92),
        unordered_hwvx_pc_model_anims_2_96: 0,
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        u32_128: u32(o + 128),
        //amount?
        section_132: [],
        u32_136: u32(o + 136),
        //amount?
        section_140: [],
        section_144: [],
    });

    x[0].unordered_hwvx_pc_model_anims_2_96 = in_ml(u32(o + 96), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);

    for (let i = 0; i < u32(o + 128); i++) {
        im_hwvx_pc_car_128_132(u32(o + 132) + (i * 12) + g.m, i, x[0].section_132);
    }

    for (let i = 0; i < u32(o + 136); i++) {
        im_hwvx_pc_car_128_132(u32(o + 140) + (i * 12) + g.m, i, x[0].section_140);
    }
    u32(o + 144) && im_hwvx_pc_car_128_144(u32(o + 144) + g.m, x[0].section_144);

    // 160 bytes;

}
function im_hwvx_pc_car_128_132(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "d[9p",
        u8_0: u8(o + 0),
        section_4: [],
    });

    switch (u8(o + 0)) {
    case 0:
        u32(o + 4) && im_hwvx_pc_car_128_132_4t0(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 4:
        u32(o + 4) && im_hwvx_pc_car_128_132_4t4(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_hwvx_pc_car_128_132_4t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MlN:",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_hwvx_pc_car_128_132_4t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9>@X",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 32 bytes;

}
function im_hwvx_pc_car_128_144(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DZps",
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_car_128_144_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_car_128_144_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ef=R",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_hwvx_pc_car_132(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4R^H",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        unordered_hwvx_pc_interface_16: 0,
        unordered_hwvx_pc_interface_24: 0,
        unordered_hwvx_pc_interface_28: 0,
        section_44: [],
        f32_52: f32(o + 52),
    });

    x[0].unordered_hwvx_pc_interface_16 = in_ml(u32(o + 16), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
    x[0].unordered_hwvx_pc_interface_24 = in_ml(u32(o + 24), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
    x[0].unordered_hwvx_pc_interface_28 = in_ml(u32(o + 28), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
    u32(o + 44) && im_hwvx_pc_car_132_44(u32(o + 44) + g.m, x[0].section_44);

    // 64 bytes;

}
function im_hwvx_pc_car_132_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pbIx",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_car_136(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SLy_",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_72: f32(o + 72),
    });

    // 96 bytes;

}
function im_hwvx_pc_car_140(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]w><",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        unordered_hwvx_pc_text_72: 0,
        u32_76: u32(o + 76),
        //amount?
        section_80: [],
        f32_84: f32(o + 84),
    });

    for (let i = 0; i < u32(o + 52); i++) {
        im_hwvx_pc_car_140_56(u32(o + 56) + (i * 4) + g.m, i, x[0].section_56);
    }

    for (let i = 0; i < u32(o + 60); i++) {
        im_hwvx_pc_car_140_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }
    x[0].unordered_hwvx_pc_text_72 = in_ml(u32(o + 72), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);

    for (let i = 0; i < u32(o + 76); i++) {
        im_hwvx_pc_car_140_64(u32(o + 80) + (i * 4) + g.m, i, x[0].section_80);
    }

    // 112 bytes;

}
function im_hwvx_pc_car_140_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "@^Ua",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_car_140_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "zRSI",
        unordered_hwvx_pc_text_0: 0,
    });

    x[i].unordered_hwvx_pc_text_0 = in_ml(u32(o + 0), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);

}
function im_hwvx_pc_car_164(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "h?>h",
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_car_164_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_hwvx_pc_car_164_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pZ_:",
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        f32_20: f32(o + 20),
    });

    // 48 bytes;

}
function im_hwvx_pc_car_172(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "JB2T",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 48 bytes;

}
function im_hwvx_pc_car_212(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "KTBx",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_56: f32(o + 56),
        u8_60: u8(o + 60),
        u8_62: u8(o + 62),
        u8_63: u8(o + 63),
        u16_64: u16(o + 64),
        u8_66: u8(o + 66),
    });

}
function im_hwvx_pc_car_220(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "n?=<",
        f32_0: f32(o + 0),
        unordered_hwvx_pc_sound_section_4: 0,
    });

    x[i].unordered_hwvx_pc_sound_section_4 = in_ml(u32(o + 4), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);

}
function im_hwvx_pc_car_228(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "5F7:",
        unordered_hwvx_pc_model_anims_2_0: 0,
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    x[i].unordered_hwvx_pc_model_anims_2_0 = in_ml(u32(o + 0), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_pc_mysterious(u32(o + 8) + (ii * 32) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_pc_car_252(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eeqI",
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_car_252_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_car_252_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "d<Z6",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_car_252_4_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_car_252_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "K?5t",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_car_260(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "og:n",
        u32_52: u32(o + 52),
        section_56: [],
    });

    u32(o + 56) && im_hwvx_pc_car_260_56(u32(o + 56) + g.m, x[0].section_56);

    // 80 bytes;

}
function im_hwvx_pc_car_260_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "R01L",
    });

    // 16 bytes;

}
function im_hwvx_pc_car_268(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Dzpl",
    });

    // 16 bytes;

}
function im_hwvx_pc_car_related(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Jv>F",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_36: u8(o + 36),
        u8_38: u8(o + 38),
        u8_39: u8(o + 39),
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
    });

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_pc_car_related_48(u32(o + 48) + (ii * 12) + g.m, ii, x[i].section_48);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_car_related_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7TM5",
        unordered_hwvx_pc_car_path_related_0: 0,
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    x[i].unordered_hwvx_pc_car_path_related_0 = in_ml(u32(o + 0), g.hwvx_pc_car_path_related_array, im_hwvx_pc_car_path_related, g.unordered_ref.hwvx_pc_car_path_related);

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_pc_car_related_48_8(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_pc_car_related_48_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Y1j;",
        unordered_hwvx_pc_car_path_related_0: 0,
    });

    x[i].unordered_hwvx_pc_car_path_related_0 = in_ml(u32(o + 0), g.hwvx_pc_car_path_related_array, im_hwvx_pc_car_path_related, g.unordered_ref.hwvx_pc_car_path_related);

}
function im_hwvx_pc_car_path_related(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "HFhM",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_5: u8(o + 5),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_52: u32(o + 52),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        section_88: [],
        section_116: im_string(u32(o + 116), 0, false),
    });

    u32(o + 88) && im_hwvx_pc_car_path_related_88(u32(o + 88) + g.m, x[i].section_88);
    return x[i].id
    // 128 bytes;

}
function im_hwvx_pc_car_path_related_88(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "y67c",
        u8_2: u8(o + 2),
        u16_6: u16(o + 6),
    });

    // 32 bytes;

}
function im_hwvx_pc_car_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "uz0f",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        unordered_hwvx_pc_car_unknown_link_48: 0,
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
        u32_60: u32(o + 60),
        section_64: [],
        section_68: [],
    });

    x[i].unordered_hwvx_pc_car_unknown_link_48 = in_ml(u32(o + 48), g.hwvx_pc_car_unknown_link_array, im_hwvx_pc_car_unknown_link, g.unordered_ref.hwvx_pc_car_unknown_link);

    for (let ii = 0; ii < u32(o + 52); ii++) {
        im_hwvx_pc_car_link_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
    }
    u32(o + 64) && im_hwvx_pc_car_link_64(u32(o + 64) + g.m, x[i].section_64);
    u32(o + 68) && im_hwvx_pc_car_link_68(u32(o + 68) + g.m, x[i].section_68);
    return x[i].id
    // 80 bytes;

}
function im_hwvx_pc_car_link_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "4U0;",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_car_link_64(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "U4vm",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[0].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    // 16 bytes;

}
function im_hwvx_pc_car_link_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9Ojd",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_hwvx_pc_car_unknown_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "<D=[",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        unordered_hwvx_pc_unknown_48: 0,
        unordered_hwvx_pc_sound_section_60: 0,
        unordered_hwvx_pc_unknown_64: 0,
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        u32_76: u32(o + 76),
        //amount?
        section_80: [],
    });

    x[i].unordered_hwvx_pc_unknown_48 = in_ml(u32(o + 48), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    x[i].unordered_hwvx_pc_sound_section_60 = in_ml(u32(o + 60), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    x[i].unordered_hwvx_pc_unknown_64 = in_ml(u32(o + 64), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_hwvx_pc_car_unknown_link_72(u32(o + 72) + (ii * 4) + g.m, ii, x[i].section_72);
    }

    for (let ii = 0; ii < u32(o + 76); ii++) {
        im_hwvx_pc_car_unknown_link_72(u32(o + 80) + (ii * 4) + g.m, ii, x[i].section_80);
    }
    return x[i].id
    // 96 bytes;

}
function im_hwvx_pc_car_unknown_link_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "zeEf",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_model_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "b0xQ",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        unordered_hwvx_pc_model_anims_1_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_31: u8(o + 31),
        section_32: [],
        section_36: [],
        u32_44: u32(o + 44),
        section_48: [],
        section_52: [],
        section_56: [],
    });

    u32(o + 4) && im_hwvx_pc_model_link_4(u32(o + 4) + g.m, x[i].section_4);

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_pc_model_link_12(u32(o + 12) + (ii * 8) + g.m, ii, x[i].section_12);
    }
    x[i].unordered_hwvx_pc_model_anims_1_16 = in_ml(u32(o + 16), g.hwvx_pc_model_anims_1_array, im_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1);
    x[i].unordered_hwvx_pc_model_anims_2_20 = in_ml(u32(o + 20), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);
    u32(o + 32) && im_hwvx_pc_model_link_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_hwvx_pc_model_link_36(u32(o + 36) + g.m, x[i].section_36);
    u32(o + 48) && im_hwvx_pc_model_link_48(u32(o + 48) + g.m, x[i].section_48);
    u32(o + 52) && im_hwvx_pc_model_link_52(u32(o + 52) + g.m, x[i].section_52);
    u32(o + 56) && im_hwvx_pc_model_link_56(u32(o + 56) + g.m, x[i].section_56);
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_model_link_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "<k5r",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
    });

    // 16 bytes;

}
function im_hwvx_pc_model_link_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "L@Xs",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        u32_4: u32(o + 4),
    });

}
function im_hwvx_pc_model_link_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?i?9",
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_model_link_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "V4T]",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_model_link_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "st=p",
        u8_16: u8(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_pc_model_link_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wQly",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 48 bytes;

}
function im_hwvx_pc_model_link_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "492S",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        unordered_hwvx_pc_model_anims_2_8: 0,
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_model_link_56_4(u32(o + 4) + (i * 28) + g.m, i, x[0].section_4);
    }
    x[0].unordered_hwvx_pc_model_anims_2_8 = in_ml(u32(o + 8), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);

    // 16 bytes;

}
function im_hwvx_pc_model_link_56_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "PQhP",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        model_8: in_models(o + 8, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        section_12: [],
        section_16: [],
    });

    u32(o + 12) && im_hwvx_pc_model_link_56_4_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 16) && im_hwvx_pc_model_link_56_4_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_pc_model_link_56_4_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jb_T",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_pc_model_link_56_4_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "IHUi",
    });

    // 16 bytes;

}
function im_hwvx_pc_text(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^PC1",
        section_0: im_string(u32(o + 0), 0, false),
    });

    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_font(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "BtPG",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
        unordered_hwvx_pc_sound_section_4: 0,
        u32_8: u32(o + 8),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        f32_40: f32(o + 40),
    });

    x[i].unordered_hwvx_pc_sound_section_4 = in_ml(u32(o + 4), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
    u32(o + 28) && im_hwvx_pc_font_28(u32(o + 28) + g.m, x[i].section_28);

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_hwvx_pc_font_36(u32(o + 36) + (ii * 12) + g.m, ii, x[i].section_36);
    }
    return x[i].id
    // 48 bytes;

}
function im_hwvx_pc_font_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=OMm",
        f32_0: f32(o + 0),
    });

    // 32 bytes;

}
function im_hwvx_pc_font_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "oMJW",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
    });

}
function im_hwvx_pc_mysterious(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Pydv",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u16_18: u16(o + 18),
        f32_20: f32(o + 20),
        section_24: [],
    });

    switch (u8(o + 16)) {
    case 1:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
        break;
    case 2:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_pc_strange_array, im_hwvx_pc_strange, g.unordered_ref.hwvx_pc_strange);
        break;
    case 3:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
        break;
    case 5:
        u32(o + 24) && im_hwvx_pc_mysterious_24t5(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 6:
        u32(o + 24) && im_hwvx_pc_mysterious_24t6(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 7:
        u32(o + 24) && im_hwvx_pc_mysterious_24t7(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 8:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_pc_model_link_array, im_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link);
        break;
    case 9:
        u32(o + 24) && im_hwvx_pc_mysterious_24t9(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 10:
        u32(o + 24) && im_hwvx_pc_mysterious_24t10(u32(o + 24) + g.m, x[i].section_24);
        break;
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_mysterious_24t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "U=7b",
        u32_8: u32(o + 8),
        u32_20: u32(o + 20),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
        section_44: [],
    });

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_pc_mysterious_24t5_24(u32(o + 24) + (i * 32) + g.m, x[0].section_24);
    }
    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_pc_mysterious_24t5_32(u32(o + 32) + (i * 12) + g.m, x[0].section_32);
    }
    u32(o + 44) && im_hwvx_pc_mysterious_24t5_44(u32(o + 44) + g.m, x[0].section_44);

    // 48 bytes;

}
function im_hwvx_pc_mysterious_24t5_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ekvA",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_pc_mysterious_24t5_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";P7G",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

    // 12 bytes;

}
function im_hwvx_pc_mysterious_24t5_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SJ43",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}

function im_hwvx_pc_mysterious_24t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=o?j",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        texture_8: im_patch(g.texture_patch_ref, o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_36: [],
        section_40: [],
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    for (let i = 0; i < u32(o + 12); i++) {
        im_hwvx_pc_mysterious_24t6_16(u32(o + 16) + (i * 32) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_pc_mysterious_24t6_16(u32(o + 24) + (i * 32) + g.m, i, x[0].section_24);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_pc_mysterious_24t6_32(u32(o + 32) + (i * 12) + g.m, i, x[0].section_32);
    }
    u32(o + 36) && im_hwvx_pc_mysterious_24t6_36(u32(o + 36) + g.m, x[0].section_36);
    u32(o + 40) && im_hwvx_pc_mysterious_24t6_40(u32(o + 40) + g.m, x[0].section_40);

    // 64 bytes;

}
function im_hwvx_pc_mysterious_24t6_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "k0iY",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_mysterious_24t6_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "hY?B",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_mysterious_24t6_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[ClP",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_mysterious_24t6_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zV<t",
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_pc_mysterious_24t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[sZX",
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u32_36: u32(o + 36),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        u32_76: u32(o + 76),
        section_80: [],
        u32_84: u32(o + 84),
        section_88: [],
    });

    for (let i = 0; i < u32(o + 68); i++) {
        im_hwvx_pc_mysterious_24t7_72(u32(o + 72) + (i * 12) + g.m, i, x[0].section_72);
    }
    u32(o + 80) && im_hwvx_pc_mysterious_24t7_80(u32(o + 80) + g.m, x[0].section_80);
    u32(o + 88) && im_hwvx_pc_mysterious_24t7_88(u32(o + 88) + g.m, x[0].section_88);

    // 96 bytes;

}
function im_hwvx_pc_mysterious_24t7_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "xV]Y",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_mysterious_24t7_80(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "BNyM",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
    });

    // 12 bytes;

}
function im_hwvx_pc_mysterious_24t7_88(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KcWa",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_mysterious_24t9(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HmOL",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        section_28: [],
        section_32: [],
        u8_36: u8(o + 36),
        u8_37: u8(o + 37),
        u8_38: u8(o + 38),
        u8_39: u8(o + 39),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u8_48: u8(o + 48),
    });

    u32(o + 28) && im_hwvx_pc_mysterious_24t9_28(u32(o + 28) + g.m, x[0].section_28);
    u32(o + 32) && im_hwvx_pc_mysterious_24t9_32(u32(o + 32) + g.m, x[0].section_32);

    // 64 bytes;

}
function im_hwvx_pc_mysterious_24t9_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "a<[>",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_mysterious_24t9_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "seH@",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 4 bytes;

}
function im_hwvx_pc_mysterious_24t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yf<j",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_pc_mysterious_24t10_8(u32(o + 8) + (i * 32) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_hwvx_pc_mysterious_24t10_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "LVG;",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        section_24: [],
    });

    u32(o + 24) && im_hwvx_pc_mysterious_24t10_8_24(u32(o + 24) + g.m, x[i].section_24);

}
function im_hwvx_pc_mysterious_24t10_8_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "GCMk",
        u8_1: u8(o + 1),
        u8_4: u8(o + 4),
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_44: [],
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    false
    for (let i = 0; i < u32(o + 12); i++) {
        im_hwvx_pc_mysterious_24t10_8_24_16(u32(o + 16) + (i * 32) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_pc_mysterious_24t10_8_24_16(u32(o + 24) + (i * 32) + g.m, i, x[0].section_24);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_pc_mysterious_24t10_8_24_32(u32(o + 32) + (i * 12) + g.m, i, x[0].section_32);
    }
    u32(o + 44) && im_hwvx_pc_mysterious_24t10_8_24_44(u32(o + 44) + g.m, x[0].section_44);

    // 64 bytes;

}
function im_hwvx_pc_mysterious_24t10_8_24_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "oR@@",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_mysterious_24t10_8_24_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "oY<2",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_mysterious_24t10_8_24_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "YGch",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_pc_strange(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "SeUk",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
    });

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_strange_28(u32(o + 28) + (ii * 4) + g.m, ii, x[i].section_28);
    }
    x[i].unordered_hwvx_pc_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    return x[i].id
    // 48 bytes;

}
function im_hwvx_pc_strange_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "0RVf",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_unknown(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Nxin",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_unknown_4(u32(o + 4) + (ii * 12) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_unknown_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "McWu",
        u32_0: u32(o + 0),
        section_4: [],
        section_8: [],
    });

    switch (u32(o + 0)) {
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_unknown_thing_array, im_hwvx_pc_unknown_thing, g.unordered_ref.hwvx_pc_unknown_thing);
        break;
    case 2:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_asdf_array, im_hwvx_pc_asdf, g.unordered_ref.hwvx_pc_asdf);
        break;
    case 3:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
        break;
    case 4:
        u32(o + 4) && im_hwvx_pc_unknown_4_4t4(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 5:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_unknown_idk_sec_array, im_hwvx_pc_unknown_idk_sec, g.unordered_ref.hwvx_pc_unknown_idk_sec);
        break;
    case 6:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_world_model_related_array, im_hwvx_pc_world_model_related, g.unordered_ref.hwvx_pc_world_model_related);
        break;
    case 7:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_grand_section_array, im_hwvx_pc_grand_section, g.unordered_ref.hwvx_pc_grand_section);
        break;
    case 8:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_unknown_whatever_array, im_hwvx_pc_unknown_whatever, g.unordered_ref.hwvx_pc_unknown_whatever);
        break;
    case 10:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);
        break;
    case 26:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
        break;
    case 29:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_unknown_small_model_link_array, im_hwvx_pc_unknown_small_model_link, g.unordered_ref.hwvx_pc_unknown_small_model_link);
        break;
    }
    switch (u32(o + 0)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 7:
    case 10:
    case 29:
        u32(o + 8) && im_hwvx_pc_unknown_4_8t1(u32(o + 8) + g.m, x[i].section_8);
        break;
    case 5:
    case 6:
    case 8:
    case 26:
        u32(o + 8) && im_hwvx_pc_unknown_4_8t5(u32(o + 8) + g.m, x[i].section_8);
        break;
    }
}
function im_hwvx_pc_unknown_4_4t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "1NM>",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_24: u32(o + 24),
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
    });

    u32(o + 28) && im_hwvx_pc_unknown_4_4t4_28(u32(o + 28) + g.m, x[0].section_28);
    x[0].unordered_hwvx_pc_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);

    // 48 bytes;

}
function im_hwvx_pc_unknown_4_4t4_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "n?3D",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[0].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    // 16 bytes;

}
function im_hwvx_pc_unknown_4_8t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "U]Qo",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        f32_36: f32(o + 36),
        section_40: [],
        section_44: [],
    });

    switch (u8(o + 33)) {
    case 1:
        u32(o + 40) && im_hwvx_pc_unknown_4_8t1_40t1(u32(o + 40) + g.m, x[0].section_40);
        break;
    case 2:
        u32(o + 40) && im_hwvx_pc_unknown_4_8t1_40t2(u32(o + 40) + g.m, x[0].section_40);
        break;
    }
    u32(o + 44) && im_hwvx_pc_unknown_4_8t1_44(u32(o + 44) + g.m, x[0].section_44);

    // 48 bytes;

}
function im_hwvx_pc_unknown_4_8t1_40t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2De^",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_pc_unknown_4_8t1_40t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gLz:",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_9: u8(o + 9),
        section_12: [],
    });

    switch (u8(o + 9)) {
    case 0:
        u32(o + 12) && im_hwvx_pc_unknown_4_8t1_40t2_12t0(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1:
        u32(o + 12) && im_hwvx_pc_unknown_4_8t1_40t2_12t1(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 2:
        u32(o + 12) && im_hwvx_pc_unknown_4_8t1_40t2_12t2(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    // 16 bytes;

}
function im_hwvx_pc_unknown_4_8t1_40t2_12t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "E8nv",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_pc_unknown_4_8t1_40t2_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FhYK",
        f32_0: f32(o + 0),
        u8_16: u8(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_pc_unknown_4_8t1_40t2_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9kqe",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
    });

    // 32 bytes;

}
function im_hwvx_pc_unknown_4_8t1_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";RF:",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_pc_unknown_4_8t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "w<T^",
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        section_28: [],
    });

    u32(o + 28) && im_hwvx_pc_unknown_4_8t5_28(u32(o + 28) + g.m, x[0].section_28);

    // 48 bytes;

}
function im_hwvx_pc_unknown_4_8t5_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "JCe3",
        u32_0: u32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_pc_unknown_thing(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e?22",
        u8_0: u8(o + 0),
        u8_3: u8(o + 3),
        section_4: [],
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    switch (u8(o + 0)) {
    case 0:
        u32(o + 4) && im_hwvx_pc_unknown_thing_4t0(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 1:
        u32(o + 4) && im_hwvx_pc_unknown_thing_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_pc_unknown_thing_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }
    u32(o + 32) && im_hwvx_pc_unknown_thing_32(u32(o + 32) + g.m, x[i].section_32);
    return x[i].id
    // 48 bytes;

}
function im_hwvx_pc_unknown_thing_4t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eWKC",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        unordered_hwvx_pc_sound_controls_24: 0,
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
    });

    x[0].unordered_hwvx_pc_sound_controls_24 = in_ml(u32(o + 24), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_pc_unknown_thing_4t0_36(u32(o + 36) + (i * 4) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_hwvx_pc_unknown_thing_4t0_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }

    // 64 bytes;

}
function im_hwvx_pc_unknown_thing_4t0_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "81tK",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
    });

}
function im_hwvx_pc_unknown_thing_4t0_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "XnWM",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_unknown_thing_4t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "<5bC",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
    });

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_pc_unknown_thing_4t1_36(u32(o + 36) + (i * 4) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_hwvx_pc_unknown_thing_4t1_44(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    // 48 bytes;

}
function im_hwvx_pc_unknown_thing_4t1_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "r^sH",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_pc_unknown_thing_4t1_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "ffDE",
        f32_0: f32(o + 0),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_thing_4t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VHxw",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    for (let i = 0; i < u32(o + 12); i++) {
        im_hwvx_pc_unknown_thing_4t2_16(u32(o + 16) + (i * 12) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_pc_unknown_thing_4t2_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
    }

    // 32 bytes;

}
function im_hwvx_pc_unknown_thing_4t2_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "JF0;",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_thing_4t2_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "sQ5X",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_thing_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";89_",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_thing_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xZCS",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[0].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    // 16 bytes;

}
function im_hwvx_pc_asdf(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7XAL",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u8_8: u8(o + 8),
        section_12: [],
        model_16: in_models(o + 16, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        u32_56: u32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        u32_84: u32(o + 84),
        texture_92: im_patch(g.texture_patch_ref, o + 92),
        unordered_hwvx_pc_unknown_112: 0,
        unordered_hwvx_pc_unknown_116: 0,
        unordered_hwvx_pc_unknown_120: 0,
        u32_140: u32(o + 140),
        //amount?
        section_144: [],
        u32_148: u32(o + 148),
        //amount?
        section_152: [],
        u32_156: u32(o + 156),
        //amount?
        section_160: [],
        section_164: [],
        section_168: [],
        section_172: [],
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 12) && im_hwvx_pc_asdf_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 2:
        u32(o + 12) && im_hwvx_pc_asdf_12t2(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
    x[i].unordered_hwvx_pc_unknown_112 = in_ml(u32(o + 112), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    x[i].unordered_hwvx_pc_unknown_116 = in_ml(u32(o + 116), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    x[i].unordered_hwvx_pc_unknown_120 = in_ml(u32(o + 120), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    for (let ii = 0; ii < u32(o + 140); ii++) {
        im_hwvx_pc_asdf_144(u32(o + 144) + (ii * 32) + g.m, ii, x[i].section_144);
    }

    for (let ii = 0; ii < u32(o + 148); ii++) {
        im_hwvx_pc_asdf_152(u32(o + 152) + (ii * 12) + g.m, ii, x[i].section_152);
    }

    for (let ii = 0; ii < u32(o + 156); ii++) {
        im_hwvx_pc_mysterious(u32(o + 160) + (ii * 32) + g.m, ii, x[i].section_160);
    }
    u32(o + 164) && im_hwvx_pc_asdf_164(u32(o + 164) + g.m, x[i].section_164);
    u32(o + 168) && im_hwvx_pc_asdf_168(u32(o + 168) + g.m, x[i].section_168);
    u32(o + 172) && im_hwvx_pc_asdf_172(u32(o + 172) + g.m, x[i].section_172);
    return x[i].id
    // 176 bytes;

}
function im_hwvx_pc_asdf_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "IZJx",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_asdf_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2nh]",
        f32_0: f32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_asdf_144(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "LG>d",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_asdf_152(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "]Bz4",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_asdf_164(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]6bl",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
    });

    // 48 bytes;

}
function im_hwvx_pc_asdf_168(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zSUy",
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_44: f32(o + 44),
    });

    // 48 bytes;

}
function im_hwvx_pc_asdf_172(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7:uu",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_unknown_idk_sec(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7xDZ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: u32(o + 44),
        section_48: [],
    });

    u32(o + 28) && im_hwvx_pc_unknown_idk_sec_28(u32(o + 28) + g.m, x[i].section_28);
    u32(o + 32) && im_hwvx_pc_unknown_idk_sec_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_hwvx_pc_unknown_idk_sec_36(u32(o + 36) + g.m, x[i].section_36);
    u32(o + 40) && im_hwvx_pc_unknown_idk_sec_40(u32(o + 40) + g.m, x[i].section_40);
    u32(o + 48) && im_hwvx_pc_unknown_idk_sec_48(u32(o + 48) + g.m, x[i].section_48);
    return x[i].id
    // 80 bytes;

}
function im_hwvx_pc_unknown_idk_sec_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "omVp",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        unordered_hwvx_pc_unknown_24: 0,
        u32_28: u32(o + 28),
    });

    x[0].unordered_hwvx_pc_unknown_24 = in_ml(u32(o + 24), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    // 64 bytes;

}
function im_hwvx_pc_unknown_idk_sec_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "mIEQ",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_pc_unknown_idk_sec_32_8(u32(o + 8) + (i * 12) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_hwvx_pc_unknown_idk_sec_32_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "F@go",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_idk_sec_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Qk6S",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_unknown_idk_sec_36_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_unknown_idk_sec_36_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "U4:B",
        f32_0: f32(o + 0),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_pc_unknown_idk_sec_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tVDG",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_unknown_idk_sec_40_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_unknown_idk_sec_40_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0XIR",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_unknown_idk_sec_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DVnq",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_grand_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "X4YZ",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        unordered_hwvx_pc_car_link_16: 0,
        u32_24: u32(o + 24),
        section_28: [],
    });

    // u32(o + 16) && im_hwvx_pc_car_link(u32(o + 16) + g.m,x[i].section_16); // offset? 
    x[i].unordered_hwvx_pc_car_link_16 = in_ml(u32(o + 16), g.hwvx_pc_car_link_array, im_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link);

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_mysterious(u32(o + 28) + (ii * 32) + g.m, ii, x[i].section_28);
    }

    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_unknown_whatever(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "ch1T",
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_hwvx_pc_unknown_whatever_16(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_pc_unknown_whatever_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_unknown_whatever_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "OiQ6",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_whatever_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "jGiO",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_unknown_small_model_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ">4Dm",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_pc_unknown_small_model_link_12(u32(o + 12) + (ii * 48) + g.m, ii, x[i].section_12);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_unknown_small_model_link_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "V<tN",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        model_28: in_models(o + 28, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        unordered_hwvx_pc_unknown_link_section_32: 0,
    });

    x[i].unordered_hwvx_pc_unknown_link_section_32 = in_ml(u32(o + 32), g.hwvx_pc_unknown_link_section_array, im_hwvx_pc_unknown_link_section, g.unordered_ref.hwvx_pc_unknown_link_section);

}
function im_hwvx_pc_unknown_link_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "vhSy",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_unknown_link_section_28(u32(o + 28) + (ii * 4) + g.m, ii, x[i].section_28);
    }
    return x[i].id
    // 48 bytes;

}
function im_hwvx_pc_unknown_link_section_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "12@v",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_item(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "6U;Y",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        unordered_hwvx_pc_text_32: 0,
        unordered_hwvx_pc_unknown_36: 0,
        unordered_hwvx_pc_unknown_44: 0,
        section_48: [],
        unordered_hwvx_pc_model_anims_2_52: 0,
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
    });

    x[i].unordered_hwvx_pc_text_32 = in_ml(u32(o + 32), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    x[i].unordered_hwvx_pc_unknown_36 = in_ml(u32(o + 36), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    x[i].unordered_hwvx_pc_unknown_44 = in_ml(u32(o + 44), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);
    u32(o + 48) && im_hwvx_pc_item_48(u32(o + 48) + g.m, x[i].section_48);
    x[i].unordered_hwvx_pc_model_anims_2_52 = in_ml(u32(o + 52), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);

    //     switch(u32(o + 44)){
    //     case offset (hwvx_pc_mysterious)</a> based on type [44]:
    // x[i].section_60 = in_ml(u32(o + 60), g.hwvx_pc_mysterious_array, im_hwvx_pc_mysterious, g.unordered_ref.hwvx_pc_mysterious);
    //     break;
    // }
    for (let ii = 0; ii < u32(o + 56); ii++) {
        im_hwvx_pc_mysterious(u32(o + 60) + (ii * 32) + g.m, ii, x[i].section_60);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_item_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "QiCE",
        section_0: [],
        unordered_hwvx_pc_text_16: 0,
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        unordered_hwvx_pc_model_anims_2_28: 0,
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        u32_48: u32(o + 48),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
    });

    u32(o + 0) && im_hwvx_pc_item_48_0(u32(o + 0) + g.m, x[0].section_0);
    x[0].unordered_hwvx_pc_text_16 = in_ml(u32(o + 16), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    x[0].unordered_hwvx_pc_model_anims_2_28 = in_ml(u32(o + 28), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);

    // 96 bytes;

}
function im_hwvx_pc_item_48_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@bCK",
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        unordered_hwvx_pc_model_anims_1_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        section_52: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_pc_item_48_0_12(u32(o + 12) + (i * 8) + g.m, i, x[0].section_12);
    }
    x[0].unordered_hwvx_pc_model_anims_1_16 = in_ml(u32(o + 16), g.hwvx_pc_model_anims_1_array, im_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1);
    x[0].unordered_hwvx_pc_model_anims_2_20 = in_ml(u32(o + 20), g.hwvx_pc_model_anims_2_array, im_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2);
    u32(o + 32) && im_hwvx_pc_item_48_0_32(u32(o + 32) + g.m, x[0].section_32);
    u32(o + 36) && im_hwvx_pc_item_48_0_36(u32(o + 36) + g.m, x[0].section_36);
    u32(o + 40) && im_hwvx_pc_item_48_0_40(u32(o + 40) + g.m, x[0].section_40);

    for (let i = 0; i < u32(o + 44); i++) {
        im_hwvx_pc_mysterious(u32(o + 48) + (i * 32) + g.m, i, x[0].section_48);
    }
    u32(o + 52) && im_hwvx_pc_item_48_0_52(u32(o + 52) + g.m, x[0].section_52);

    // 64 bytes;

}
function im_hwvx_pc_item_48_0_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "eU:n",
        model_0: in_models(o + 0, g.hwvx_pc_models_array, im_hwvx_pc_models, g.ordered_ref.hwvx_pc_models),
        u16_4: u16(o + 4),
    });

}
function im_hwvx_pc_item_48_0_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5hOa",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_item_48_0_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oj_I",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_item_48_0_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "A<W2",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_item_48_0_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "BpEB",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 48 bytes;

}
function im_hwvx_pc_sound_controls(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "WxQT",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_pc_sound_controls_12(u32(o + 12) + (ii * 16) + g.m, ii, x[i].section_12);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_pc_sound_controls_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "usZx",
        f32_0: f32(o + 0),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_pc_sound_controls_12_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

}
function im_hwvx_pc_sound_controls_12_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "9Sj]",
        unordered_hwvx_pc_sound_section_0: 0,
    });

    x[i].unordered_hwvx_pc_sound_section_0 = in_ml(u32(o + 0), g.hwvx_pc_sound_section_array, im_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section);

}
function im_hwvx_pc_sound_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "h]CS",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        sound_20: im_patch(g.sound_patch_ref, o + 20),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    u32(o + 24) && im_hwvx_pc_sound_section_24(u32(o + 24) + g.m, x[i].section_24);
    u32(o + 32) && im_hwvx_pc_sound_section_32(u32(o + 32) + g.m, x[i].section_32);
    return x[i].id
    // 48 bytes;

}
function im_hwvx_pc_sound_section_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@kyl",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
    });

    // 12 bytes;

}
function im_hwvx_pc_sound_section_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5lG]",
        f32_0: f32(o + 0),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}
function im_hwvx_pc_world_settings(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "MRbS",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        u32_36: u32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        f32_112: f32(o + 112),
        f32_116: f32(o + 116),
        texture_120: im_patch(g.texture_patch_ref, o + 120),
        texture_124: im_patch(g.texture_patch_ref, o + 124),
        texture_128: im_patch(g.texture_patch_ref, o + 128),
        texture_132: im_patch(g.texture_patch_ref, o + 132),
        texture_136: im_patch(g.texture_patch_ref, o + 136),
        texture_140: im_patch(g.texture_patch_ref, o + 140),
        texture_144: im_patch(g.texture_patch_ref, o + 144),
        texture_148: im_patch(g.texture_patch_ref, o + 148),
        texture_152: im_patch(g.texture_patch_ref, o + 152),
        section_156: [],
        section_160: im_string(u32(o + 160), 0, false),
        section_164: im_string(u32(o + 164), 0, false),
        section_192: [],
        section_196: [],
        unordered_hwvx_pc_font_200: 0,
        unordered_hwvx_pc_interface_204: 0,
        section_224: [],
        section_228: [],
        u32_240: u32(o + 240),
        //amount?
        section_244: [],
        u32_248: u32(o + 248),
        //amount?
        section_252: [],
        section_272: [],
    });

    // u32(o + 156) && im_hwvx_pc_world(u32(o + 156) + g.m,x[i].section_156); // offset? 
    u32(o + 192) && im_hwvx_pc_world_settings_192(u32(o + 192) + g.m, x[i].section_192);
    u32(o + 196) && im_hwvx_pc_world_settings_196(u32(o + 196) + g.m, x[i].section_196);
    x[i].unordered_hwvx_pc_font_200 = in_ml(u32(o + 200), g.hwvx_pc_font_array, im_hwvx_pc_font, g.unordered_ref.hwvx_pc_font);
    x[i].unordered_hwvx_pc_interface_204 = in_ml(u32(o + 204), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
    u32(o + 224) && im_hwvx_pc_world_settings_224(u32(o + 224) + g.m, x[i].section_224);
    u32(o + 228) && im_hwvx_pc_world_settings_228(u32(o + 228) + g.m, x[i].section_228);

    for (let ii = 0; ii < u32(o + 240); ii++) {
        im_hwvx_pc_world_settings_244(u32(o + 244) + (ii * 4) + g.m, ii, x[i].section_244);
    }

    for (let ii = 0; ii < u32(o + 248); ii++) {
        im_hwvx_pc_world_settings_244(u32(o + 252) + (ii * 4) + g.m, ii, x[i].section_252);
    }
    u32(o + 272) && im_hwvx_pc_world_settings_272(u32(o + 272) + g.m, x[i].section_272);
    return x[i].id
    // 304 bytes;

}
function im_hwvx_pc_world_settings_192(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0@I_",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_world_settings_196(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W^vn",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        u32_24: u32(o + 24),
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
    });

    u32(o + 28) && im_hwvx_pc_world_settings_196_28(u32(o + 28) + g.m, x[0].section_28);
    x[0].unordered_hwvx_pc_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);

    // 48 bytes;

}
function im_hwvx_pc_world_settings_196_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "NnQY",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[0].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

    // 16 bytes;

}
function im_hwvx_pc_world_settings_224(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Y8pi",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_hwvx_pc_world_settings_228(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "cb?L",
    });

    // 16 bytes;

}
function im_hwvx_pc_world_settings_244(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "MxQJ",
        unordered_hwvx_pc_unknown_0: 0,
    });

    x[i].unordered_hwvx_pc_unknown_0 = in_ml(u32(o + 0), g.hwvx_pc_unknown_array, im_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown);

}
function im_hwvx_pc_world_settings_272(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Q8hJ",
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_world_settings_272_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_world_settings_272_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ED?;",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_hwvx_pc_interface(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";5u1",
        u16_0: u16(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
        unordered_hwvx_pc_sound_controls_36: 0,
        unordered_hwvx_pc_sound_controls_40: 0,
        unordered_hwvx_pc_sound_controls_44: 0,
        section_48: [],
        u32_52: u32(o + 52),
        f32_56: f32(o + 56),
        u8_60: u8(o + 60),
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_hwvx_pc_interface_16(u32(o + 16) + (ii * 108) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_pc_interface_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }
    u32(o + 28) && im_hwvx_pc_interface_28(u32(o + 28) + g.m, x[i].section_28);
    x[i].unordered_hwvx_pc_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    x[i].unordered_hwvx_pc_sound_controls_36 = in_ml(u32(o + 36), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    x[i].unordered_hwvx_pc_sound_controls_40 = in_ml(u32(o + 40), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    x[i].unordered_hwvx_pc_sound_controls_44 = in_ml(u32(o + 44), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    u32(o + 48) && im_hwvx_pc_interface_48(u32(o + 48) + g.m, x[i].section_48);
    return x[i].id
    // 80 bytes;

}
function im_hwvx_pc_interface_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "dTr=",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u32_16: u32(o + 16),
        section_20: [],
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        u8_36: u8(o + 36),
        u8_37: u8(o + 37),
        u8_38: u8(o + 38),
        u8_39: u8(o + 39),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        u8_43: u8(o + 43),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        section_60: [],
        section_68: [],
        section_72: [],
        section_96: [],
        u32_100: u32(o + 100),
        //amount?
        section_104: [],
    });

    switch (u8(o + 1)) {
    case 0:
        u32(o + 20) && im_hwvx_pc_interface_16_20t0(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 1:
    case 12:
        u32(o + 20) && im_hwvx_pc_interface_16_20t1(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 2:
        u32(o + 20) && im_hwvx_pc_interface_16_20t2(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 10:
        u32(o + 20) && im_hwvx_pc_interface_16_20t10(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 11:
        u32(o + 20) && im_hwvx_pc_interface_16_20t11(u32(o + 20) + g.m, x[i].section_20);
        break;
    }
    u32(o + 60) && im_hwvx_pc_interface_16_60(u32(o + 60) + g.m, x[i].section_60);
    u32(o + 68) && im_hwvx_pc_interface_16_68(u32(o + 68) + g.m, x[i].section_68);
    u32(o + 72) && im_hwvx_pc_interface_16_72(u32(o + 72) + g.m, x[i].section_72);
    u32(o + 96) && im_hwvx_pc_interface_16_96(u32(o + 96) + g.m, x[i].section_96);

    for (let ii = 0; ii < u32(o + 100); ii++) {
        im_hwvx_pc_interface_16_104(u32(o + 104) + (ii * 12) + g.m, ii, x[i].section_104);
    }

}
function im_hwvx_pc_interface_16_20t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":pm=",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        texture_4: im_patch(g.texture_patch_ref, o + 4),
        section_16: [],
    });

    u32(o + 16) && im_hwvx_pc_interface_16_20t0_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_hwvx_pc_interface_16_20t0_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "q]Nf",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        u8_12: u8(o + 12),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_16_20t0_16_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_16_20t0_16_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "gOrX",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_pc_interface_16_20t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ZAy9",
        unordered_hwvx_pc_text_0: 0,
        unordered_hwvx_pc_font_4: 0,
        section_8: [],
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        f32_24: f32(o + 24),
    });

    x[0].unordered_hwvx_pc_text_0 = in_ml(u32(o + 0), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    x[0].unordered_hwvx_pc_font_4 = in_ml(u32(o + 4), g.hwvx_pc_font_array, im_hwvx_pc_font, g.unordered_ref.hwvx_pc_font);
    u32(o + 8) && im_hwvx_pc_interface_16_20t1_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_hwvx_pc_interface_16_20t1_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Kpo9",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_16_20t1_8_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_16_20t1_8_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "M0nC",
        unordered_hwvx_pc_text_0: 0,
    });

    x[i].unordered_hwvx_pc_text_0 = in_ml(u32(o + 0), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);

}
function im_hwvx_pc_interface_16_20t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "D[kC",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_16_20t2_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_16_20t2_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8]NM",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        section_12: im_string(u32(o + 12), 0, false),
        unordered_hwvx_pc_text_16: 0,
        unordered_hwvx_pc_interface_text_related_20: 0,
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    x[i].unordered_hwvx_pc_text_16 = in_ml(u32(o + 16), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    x[i].unordered_hwvx_pc_interface_text_related_20 = in_ml(u32(o + 20), g.hwvx_pc_interface_text_related_array, im_hwvx_pc_interface_text_related, g.unordered_ref.hwvx_pc_interface_text_related);

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_interface_16_20t2_4_28(u32(o + 28) + (ii * 8) + g.m, ii, x[i].section_28);
    }

}
function im_hwvx_pc_interface_16_20t2_4_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "WlGZ",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_interface_16_20t2_4_28_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_hwvx_pc_interface_16_20t2_4_28_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "E61g",
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_20t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "if9m",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        unordered_hwvx_pc_font_16: 0,
    });

    x[0].unordered_hwvx_pc_font_16 = in_ml(u32(o + 16), g.hwvx_pc_font_array, im_hwvx_pc_font, g.unordered_ref.hwvx_pc_font);

    // 64 bytes;

}
function im_hwvx_pc_interface_16_20t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "is9G",
        u8_0: u8(o + 0),
    });

    // 32 bytes;

}
function im_hwvx_pc_interface_16_60(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "R:nq",
        unordered_hwvx_pc_interface_0: 0,
    });

    x[0].unordered_hwvx_pc_interface_0 = in_ml(u32(o + 0), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lQ71",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_pc_interface_16_68_12(u32(o + 12) + (i * 20) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_hwvx_pc_interface_16_68_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    // 48 bytes;

}
function im_hwvx_pc_interface_16_68_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^Swx",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
    });

}
function im_hwvx_pc_interface_16_68_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "YPDx",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_interface_16_68_20_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_pc_interface_16_68_20_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ANLl",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_8: [],
        section_12: im_string(u32(o + 12), 0, false),
        unordered_hwvx_pc_sound_controls_20: 0,
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
        u32_36: u32(o + 36),
    });

    switch (u8(o + 5)) {
    case 1:
    case 32:
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
        break;
    case 11:
        u32(o + 0) && im_hwvx_pc_interface_16_68_20_8_0t11(u32(o + 0) + g.m, x[0].section_0);
        break;
    }
    switch (u8(o + 5)) {
    case 6:
    case 15:
        u32(o + 8) && im_hwvx_pc_interface_16_68_20_8_8t15(u32(o + 8) + g.m, x[0].section_8);
        break;
    case 17:
        u32(o + 8) && im_hwvx_pc_interface_16_68_20_8_8t17(u32(o + 8) + g.m, x[0].section_8);
        break;
    }
    x[0].unordered_hwvx_pc_sound_controls_20 = in_ml(u32(o + 20), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    u32(o + 24) && im_hwvx_pc_interface_16_68_20_8_24(u32(o + 24) + g.m, x[0].section_24);
    u32(o + 32) && im_hwvx_pc_interface_16_68_20_8_32(u32(o + 32) + g.m, x[0].section_32);

    // 64 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_0t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "V6Oh",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_16_68_20_8_0t11_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_0t11_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "X[a4",
        u8_0: u8(o + 0),
        section_4: [],
    });

    switch (u8(o + 0)) {
    case 2:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_pc_interface_unknown_array, im_hwvx_pc_interface_unknown, g.unordered_ref.hwvx_pc_interface_unknown);
        break;
    case 3:
        u32(o + 4) && im_hwvx_pc_interface_16_68_20_8_0t11_4_4t3(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_hwvx_pc_interface_16_68_20_8_0t11_4_4t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "EdB_",
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_8t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7VAU",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_hwvx_pc_interface_16_68_20_8_8t15_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_hwvx_pc_interface_16_68_20_8_8t15_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_8t15_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zrKF",
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_8t15_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oz89",
        u8_0: u8(o + 0),
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_8t17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^juu",
        u8_0: u8(o + 0),
        u8_3: u8(o + 3),
    });

    // 32 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "GqFT",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_68_20_8_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "F[mB",
        u8_0: u8(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_72(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Tkt7",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_pc_interface_16_72_8(u32(o + 8) + (i * 28) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_16_72_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ":LtZ",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_interface_16_72_8_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_pc_interface_16_72_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "A:iN",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_interface_16_72_8_8_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_pc_interface_16_72_8_8_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "U[_H",
        u8_0: u8(o + 0),
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_16_96(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bK:?",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_16_96_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_pc_interface_16_96_4(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_hwvx_pc_interface_16_96_4(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_hwvx_pc_interface_16_96_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_pc_interface_16_96_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }

    // 48 bytes;

}
function im_hwvx_pc_interface_16_96_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "f8ur",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_interface_16_96_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "p=Is",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_interface_16_96_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "J@pY",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        f32_36: f32(o + 36),
    });

}
function im_hwvx_pc_interface_16_104(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "h5vx",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_interface_16_104_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_pc_interface_16_104_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MCag",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        unordered_hwvx_pc_sound_controls_48: 0,
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_16_104_8_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_pc_interface_16_104_8_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_hwvx_pc_interface_16_104_8_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_hwvx_pc_interface_16_104_8_28(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_pc_interface_16_104_8_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_hwvx_pc_interface_16_104_8_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }
    x[0].unordered_hwvx_pc_sound_controls_48 = in_ml(u32(o + 48), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);

    // 60 bytes;

}
function im_hwvx_pc_interface_16_104_8_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "]WeR",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
    });

}
function im_hwvx_pc_interface_16_104_8_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^olX",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_interface_16_104_8_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "yjO=",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_interface_16_104_8_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "kBT?",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_interface_16_104_8_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Mkj4",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        f32_36: f32(o + 36),
    });

}
function im_hwvx_pc_interface_16_104_8_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "ramv",
        f32_0: f32(o + 0),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_pc_interface_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "llE9",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_interface_24_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_pc_interface_24_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8cj[",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_8: [],
        unordered_hwvx_pc_sound_section_20: 0,
        u32_28: u32(o + 28),
        section_32: [],
        u32_36: u32(o + 36),
    });

    switch (u8(o + 5)) {
    case 1:
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_pc_interface_array, im_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface);
        break;
    case 11:
        u32(o + 0) && im_hwvx_pc_interface_24_8_0t11(u32(o + 0) + g.m, x[0].section_0);
        break;
    }
    u32(o + 8) && im_hwvx_pc_interface_24_8_8t17(u32(o + 8) + g.m, x[0].section_8);
    x[0].unordered_hwvx_pc_sound_controls_20 = in_ml(u32(o + 20), g.hwvx_pc_sound_controls_array, im_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls);
    u32(o + 32) && im_hwvx_pc_interface_24_8_32(u32(o + 32) + g.m, x[0].section_32);

    // 64 bytes;

}
function im_hwvx_pc_interface_24_8_0t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ZA6O",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_24_8_0t11_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_24_8_0t11_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "2b>B",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_interface_24_8_0t11_4_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_hwvx_pc_interface_24_8_0t11_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "U7Vg",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_hwvx_pc_interface_24_8_0t11_4_4_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_hwvx_pc_interface_24_8_0t11_4_4_4(u32(o + 4) + g.m, x[0].section_4);

    // 32 bytes;

}
function im_hwvx_pc_interface_24_8_0t11_4_4_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "T=Pm",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_interface_24_8_0t11_4_4_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 32 bytes;

}
function im_hwvx_pc_interface_24_8_0t11_4_4_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]UNA",
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_24_8_0t11_4_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "z^S1",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_24_8_8t17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "1mE^",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
    });

    u32(o + 24) && im_hwvx_pc_interface_24_8_8t17_24(u32(o + 24) + g.m, x[0].section_24);

    // 32 bytes;

}
function im_hwvx_pc_interface_24_8_8t17_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9ynB",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_24_8_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OMjB",
        u8_0: u8(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "6D?u",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_interface_28_4(u32(o + 4) + (i * 52) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_interface_28_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "WPq8",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u16_2: u16(o + 2),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) && im_hwvx_pc_interface_28_4_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_pc_interface_28_4_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ILv2",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_interface_28_4_16_4(u32(o + 4) + g.m, x[0].section_4);

    // 32 bytes;

}
function im_hwvx_pc_interface_28_4_16_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yNAf",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m?Hg",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_unknown(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "lt@9",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_hwvx_pc_interface_unknown_0(u32(o + 0) + g.m, x[i].section_0);
    u32(o + 4) && im_hwvx_pc_interface_unknown_4(u32(o + 4) + g.m, x[i].section_4);
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_interface_unknown_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "umJB",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_pc_interface_unknown_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 32 bytes;

}
function im_hwvx_pc_interface_unknown_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "I3WJ",
        u8_0: u8(o + 0),
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_unknown_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KCs;",
        u8_0: u8(o + 0),
        u16_2: u16(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_text_related(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "EjH9",
        unordered_hwvx_pc_text_0: 0,
        unordered_hwvx_pc_font_8: 0,
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        section_52: [],
    });

    x[i].unordered_hwvx_pc_text_0 = in_ml(u32(o + 0), g.hwvx_pc_text_array, im_hwvx_pc_text, g.unordered_ref.hwvx_pc_text);
    x[i].unordered_hwvx_pc_font_8 = in_ml(u32(o + 8), g.hwvx_pc_font_array, im_hwvx_pc_font, g.unordered_ref.hwvx_pc_font);
    u32(o + 12) && im_hwvx_pc_interface_text_related_12(u32(o + 12) + g.m, x[i].section_12);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_pc_interface_text_related_20(u32(o + 20) + (ii * 16) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_pc_interface_text_related_20(u32(o + 28) + (ii * 16) + g.m, ii, x[i].section_28);
    }

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_pc_interface_text_related_20(u32(o + 48) + (ii * 16) + g.m, ii, x[i].section_48);
    }
    u32(o + 52) && im_hwvx_pc_interface_text_related_52(u32(o + 52) + g.m, x[i].section_52);
    return x[i].id
    // 64 bytes;

}
function im_hwvx_pc_interface_text_related_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[X_S",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_pc_interface_text_related_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "=YxD",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_interface_text_related_20_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

}
function im_hwvx_pc_interface_text_related_20_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "WBd7",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_pc_interface_text_related_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "qU9>",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_pc_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "vt;Z",
        section_4: im_string(u32(o + 4), 0, false),
        section_8: im_string(u32(o + 8), 0, false),
        section_12: im_string(u32(o + 12), 0, false),
        section_16: im_string(u32(o + 16), 0, false),
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        section_36: [],
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    u32(o + 36) && im_hwvx_pc_link_36(u32(o + 36) + g.m, x[i].section_36);

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_pc_link_48(u32(o + 48) + (ii * 12) + g.m, ii, x[i].section_48);
    }

    for (let ii = 0; ii < u32(o + 52); ii++) {
        im_hwvx_pc_link_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
    }

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_hwvx_pc_link_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    return x[i].id
    // 80 bytes;

}
function im_hwvx_pc_link_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m>6O",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_link_36_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_hwvx_pc_link_36_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nVd;",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_link_36_8_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_link_36_8_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ">8x;",
        section_8: [],
        section_12: im_string(u32(o + 12), 0, false),
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
    });

    u32(o + 8) && im_hwvx_pc_link_36_8_4_8(u32(o + 8) + g.m, x[i].section_8);
    u32(o + 20) && im_hwvx_pc_link_36_8_4_20(u32(o + 20) + g.m, x[i].section_20);
    u32(o + 28) && im_hwvx_pc_link_36_8_4_28(u32(o + 28) + g.m, x[i].section_28);

}
function im_hwvx_pc_link_36_8_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WA6S",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_36_8_4_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gi^r",
        u16_8: u16(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_36_8_4_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":MNf",
    });

    // 16 bytes;

}
function im_hwvx_pc_link_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "apsD",
        u8_0: u8(o + 0),
        section_4: im_string(u32(o + 4), 0, false),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_pc_link_48_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_pc_link_48_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jQNS",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "J_lu",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_pc_link_56_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_pc_link_56_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Gm;v",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_link_56_0_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_link_56_0_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "<>B;",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        section_8: [],
        section_12: im_string(u32(o + 12), 0, false),
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_pc_link_56_0_4_4(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_4);
    }
    u32(o + 8) && im_hwvx_pc_link_56_0_4_8(u32(o + 8) + g.m, x[i].section_8);
    u32(o + 20) && im_hwvx_pc_link_56_0_4_20(u32(o + 20) + g.m, x[i].section_20);
    u32(o + 28) && im_hwvx_pc_link_56_0_4_28(u32(o + 28) + g.m, x[i].section_28);

}
function im_hwvx_pc_link_56_0_4_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "gldE",
        u8_0: u8(o + 0),
        section_4: [],
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) && im_hwvx_pc_link_56_0_4_4_4(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_hwvx_pc_link_56_0_4_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wgj]",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_56_0_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">0qA",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_56_0_4_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dNb?",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u16_8: u16(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_link_56_0_4_20_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_link_56_0_4_20_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ":7]c",
        u8_0: u8(o + 0),
        section_4: [],
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) && im_hwvx_pc_link_56_0_4_20_4_4(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_hwvx_pc_link_56_0_4_20_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9fy?",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_56_0_4_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "O^;<",
    });

    // 16 bytes;

}
function im_hwvx_pc_link_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";r>i",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_pc_link_64_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_pc_link_64_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "XbZm",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_pc_link_64_0_0(u32(o + 0) + g.m, x[0].section_0);

    // 16 bytes;

}
function im_hwvx_pc_link_64_0_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">X0g",
        section_0: [],
        section_4: [],
        section_8: [],
    });

    u32(o + 0) && im_hwvx_pc_link_64_0_0_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_hwvx_pc_link_64_0_0_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_hwvx_pc_link_64_0_0_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_hwvx_pc_link_64_0_0_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0fEE",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_15: u8(o + 15),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_64_0_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "BiTC",
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_7: u8(o + 7),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
    });

    // 16 bytes;

}
function im_hwvx_pc_link_64_0_0_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LlZ4",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
    });

    // 16 bytes;

}
function im_hwvx_pc_texture_anims_0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "BSWG",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        section_20: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_pc_texture_anims_0_8(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_8);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_hwvx_pc_texture_anims_0_16(u32(o + 16) + (ii * 16) + g.m, ii, x[i].section_16);
    }
    u32(o + 20) && im_hwvx_pc_texture_anims_0_20(u32(o + 20) + g.m, x[i].section_20);
    return x[i].id
    // 32 bytes;

}
function im_hwvx_pc_texture_anims_0_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ":KKi",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_pc_texture_anims_0_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "PPT7",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
    });

}
function im_hwvx_pc_texture_anims_0_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "L:FW",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_pc_texture_anims_0_20_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_pc_texture_anims_0_20_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "wBx]",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function add_hwvx_pc_file_header() {
    return {

        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_hwvx_pc_directory() {
    return {

        sec_id: "]7Zf",
        u32_0: 0,
        u32_4: 0,
        //check this
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}

function add_hwvx_pc_basic() {
    return {

        sec_id: "l^d@",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_basic_4() {
    return {
        sec_id: "L@8_",
        section_0: [],
        u32_4: 0,
    };

}
function add_hwvx_pc_world() {
    return {
        sec_id: "Y5cc",
        unordered_hwvx_pc_world_4_4: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        unordered_hwvx_pc_world_20_20: 0,
        u32_32: 0,
        unordered_hwvx_pc_world_36_36: 0,
        u32_48: 0,
        unordered_hwvx_pc_world_52_52: 0,
        u32_72: 0,
        unordered_hwvx_pc_world_76_76: 0,
        u32_80: 0,
        unordered_hwvx_pc_world_76_84: 0,
        u32_88: 0,
        unordered_hwvx_pc_world_92_92: 0,
        u32_96: 0,
        unordered_hwvx_pc_world_100_100: 0,
        u32_104: 0,
        unordered_hwvx_pc_world_108_108: 0,
        unordered_hwvx_pc_world_120_120: 0,
        section_124: ["Pac-Kart"],
        section_132: ["Pac-Kart"],
        section_140: ["Pac-Kart"],
        unordered_hwvx_pc_world_settings_156: 0,
    };

}
function add_hwvx_pc_world_12() {
    return {

        sec_id: "LTSU",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        u32_32: 0,
        u32_44: 0,
        u8_48: 0,
        u8_49: 0,
        u8_50: 0,
        u8_51: 0,
        u8_52: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        f32_56: 0,
        f32_60: 0,
        unordered_hwvx_pc_world_idk_64: 0,
        unordered_hwvx_pc_world_idk_68: 0,
        unordered_hwvx_pc_world_idk_72: 0,
        unordered_hwvx_pc_world_idk_76: 0,
        u8_92: 0,
        u8_93: 0,
        u8_94: 0,
    };

}
function add_hwvx_pc_world_20() {
    return {

        sec_id: "E:0u",
        u32_0: 0,
        unordered_hwvx_pc_model_anims_1_4: 0,
        f32_8: 0,
        unordered_hwvx_pc_model_car_sound_link_12: 0,
        u8_20: 0,
        u8_24: 0,
        u8_25: 0,
        f32_28: 0,
    };

}
function add_hwvx_pc_world_36() {
    return {

        sec_id: ";jv0",
        u32_0: 0,
        u32_12: 0,
        u32_24: 0,
        unordered_hwvx_pc_world_36_28_28: 0,
        u32_32: 0,
        unordered_hwvx_pc_world_36_36_36: 0,
        unordered_hwvx_pc_world_36_48_48: 0,
        u8_56: 0,
        u8_57: 0,
        u8_58: 0,
        u8_59: 0,
    };

}
function add_hwvx_pc_world_36_48() {
    return {

        sec_id: "7V?m",
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_pc_Airbox() {
    return {

        sec_id: "huaA",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        section_36: [],
        f32_40: 0,
        u32_48: 0,
        u8_52: 0,
        u8_53: 0,
    };

}
function add_hwvx_pc_world_36_36() {
    return {

        sec_id: "c@^f",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_pc_world_36_28() {
    return {

        sec_id: "yhnO",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function add_hwvx_pc_world_36_48_16() {
    return {

        sec_id: "Hz?v",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        section_36: [],
        f32_44: 0,
        u32_52: 0,
        u8_56: 0,
    };

}
function add_hwvx_pc_world_36_48_24() {
    return {

        sec_id: "OCZ5",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        f32_32: 0,
        u32_40: 0,
        u32_48: 0,
        u32_52: 0,
    };

}
function add_hwvx_pc_world_76() {
    return {

        sec_id: "^ooJ",
        unordered_hwvx_pc_world_small_section_0: 0,
    };

}
function add_hwvx_pc_world_92() {
    return {

        sec_id: "M8W@",
        unordered_hwvx_pc_world_text_link_4: 0,
    };

}
function add_hwvx_pc_world_52() {
    return {

        sec_id: "_LnX",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_64: 0,
        f32_76: 0,
        u32_80: 0,
        u32_84: 0,
        section_88: [],
        u32_92: 0,
    };

}
function add_hwvx_pc_world_52_88t1() {
    return {
        sec_id: "yb=a",
        u32_0: 0,
    };

}
function add_hwvx_pc_world_100() {
    return {

        sec_id: "H3j]",
        u32_0: 0,
        unordered_hwvx_pc_world_color_section_4: 0,
        u32_8: 0,
    };

}
function add_hwvx_pc_world_108() {
    return {

        sec_id: ";GIU",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        f32_32: 0,
        f32_36: 0,
        section_40: [],
        section_44: [],
    };

}
function add_hwvx_pc_world_108_40() {
    return {
        sec_id: "8Af;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        u8_48: 0,
        u8_49: 0,
        u8_50: 0,
        u8_51: 0,
        u8_52: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        u8_56: 0,
        u8_57: 0,
        u8_58: 0,
        u8_59: 0,
        u8_60: 0,
        u8_61: 0,
        u8_62: 0,
        u8_63: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        u8_80: 0,
        u8_81: 0,
        u8_82: 0,
        u8_83: 0,
        u8_84: 0,
        u8_85: 0,
        u8_86: 0,
        u8_87: 0,
        u8_88: 0,
        u8_89: 0,
        u8_90: 0,
        u8_91: 0,
        u8_92: 0,
        u8_93: 0,
        u8_94: 0,
        u8_95: 0,
        f32_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        u8_112: 0,
        u8_113: 0,
        u8_114: 0,
        u8_115: 0,
        u8_116: 0,
        u8_117: 0,
        u8_118: 0,
        u8_119: 0,
        u8_120: 0,
        u8_121: 0,
        u8_122: 0,
        u8_123: 0,
        u8_124: 0,
        u8_125: 0,
        u8_126: 0,
        u8_127: 0,
        f32_128: 0,
        f32_132: 0,
        f32_136: 0,
        f32_140: 0,
        u8_144: 0,
        u8_145: 0,
        u8_146: 0,
        u8_147: 0,
        u8_148: 0,
        u8_149: 0,
        u8_150: 0,
        u8_151: 0,
        u8_152: 0,
        u8_153: 0,
        u8_154: 0,
        u8_155: 0,
        u8_156: 0,
        u8_157: 0,
        u8_158: 0,
        u8_159: 0,
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        f32_172: 0,
        u8_176: 0,
        u8_177: 0,
        u8_178: 0,
        u8_179: 0,
        u8_180: 0,
        u8_181: 0,
        u8_182: 0,
        u8_183: 0,
        u8_184: 0,
        u8_185: 0,
        u8_186: 0,
        u8_187: 0,
        u8_188: 0,
        u8_189: 0,
        u8_190: 0,
        u8_191: 0,
        f32_192: 0,
        f32_196: 0,
        f32_200: 0,
        f32_204: 0,
        u8_208: 0,
        u8_209: 0,
        u8_210: 0,
        u8_211: 0,
        u8_212: 0,
        u8_213: 0,
        u8_214: 0,
        u8_215: 0,
        u8_216: 0,
        u8_217: 0,
        u8_218: 0,
        u8_219: 0,
        u8_220: 0,
        u8_221: 0,
        u8_222: 0,
        u8_223: 0,
        f32_224: 0,
        f32_228: 0,
        f32_232: 0,
        f32_236: 0,
        u8_240: 0,
        u8_241: 0,
        u8_242: 0,
        u8_243: 0,
        u8_244: 0,
        u8_245: 0,
        u8_246: 0,
        u8_247: 0,
        u8_248: 0,
        u8_249: 0,
        u8_250: 0,
        u8_251: 0,
        u8_252: 0,
        u8_253: 0,
        u8_254: 0,
        u8_255: 0,
        f32_256: 0,
        f32_260: 0,
        f32_264: 0,
        f32_268: 0,
        u8_272: 0,
        u8_273: 0,
        u8_274: 0,
        u8_275: 0,
        u8_276: 0,
        u8_277: 0,
        u8_278: 0,
        u8_279: 0,
        u8_280: 0,
        u8_281: 0,
        u8_282: 0,
        u8_283: 0,
        u8_284: 0,
        u8_285: 0,
        u8_286: 0,
        u8_287: 0,
        f32_288: 0,
        f32_292: 0,
        f32_296: 0,
        f32_300: 0,
        u8_304: 0,
        u8_305: 0,
        u8_306: 0,
        u8_307: 0,
        u8_308: 0,
        u8_309: 0,
        u8_310: 0,
        u8_311: 0,
        u8_312: 0,
        u8_313: 0,
        u8_314: 0,
        u8_315: 0,
        u8_316: 0,
        u8_317: 0,
        u8_318: 0,
        u8_319: 0,
        f32_320: 0,
        f32_324: 0,
        f32_328: 0,
        f32_332: 0,
        u8_336: 0,
        u8_337: 0,
        u8_338: 0,
        u8_339: 0,
        u8_340: 0,
        u8_341: 0,
        u8_342: 0,
        u8_343: 0,
        u8_344: 0,
        u8_345: 0,
        u8_346: 0,
        u8_347: 0,
        u8_348: 0,
        u8_349: 0,
        u8_350: 0,
        u8_351: 0,
        f32_352: 0,
        f32_356: 0,
        f32_360: 0,
        f32_364: 0,
        u8_368: 0,
        u8_369: 0,
        u8_370: 0,
        u8_371: 0,
        u8_372: 0,
        u8_373: 0,
        u8_374: 0,
        u8_375: 0,
        u8_376: 0,
        u8_377: 0,
        u8_378: 0,
        u8_379: 0,
        u8_380: 0,
        u8_381: 0,
        u8_382: 0,
        u8_383: 0,
    };

}
function add_hwvx_pc_world_108_44t1() {
    return {
        sec_id: "UW;E",
        f32_0: 0,
        f32_4: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u8_16: 0,
    };

}
function add_hwvx_pc_world_108_44t2() {
    return {
        sec_id: "3erz",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function add_hwvx_pc_world_108_44t3() {
    return {
        sec_id: "2W6Y",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_world_108_44t6() {
    return {

        sec_id: "M?B6",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
        u8_24: 0,
        u8_25: 0,
    };

}
function add_hwvx_pc_world_4() {
    return {
        sec_id: "[]7N",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        section_16: [],
        section_20: [],
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_44: 0,
        u32_48: 0,
        u32_52: 0,
    };

}
function add_hwvx_pc_world_4_20() {
    return {

        sec_id: "C6mn",
        u32_0: 0,
    };

}
function add_hwvx_pc_world_4_16() {
    return {

        sec_id: "WM;j",
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
        u32_48: 0,
        section_52: [],
    };

}
function add_hwvx_pc_world_4_16_4() {
    return {

        sec_id: "I1I4",
        unordered_hwvx_pc_world_108_0: 0,
    };

}
function add_hwvx_pc_world_120() {
    return {
        sec_id: "rtsI",
        unordered_hwvx_pc_world_routes_0: 0,
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
    };

}
function add_hwvx_pc_world_routes() {
    return {

        sec_id: "H>:s",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        section_20: [],
        section_24: [],
        u32_28: 0,
        section_32: [],
        f32_36: 0,
        u32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u8_52: 0,
        u8_53: 0,
        u32_76: 0,
        u8_80: 0,
        u8_81: 0,
    };

}
function add_hwvx_pc_world_routes_32() {
    return {

        sec_id: "pgig",
        u32_0: 0,
    };

}
function add_hwvx_pc_world_routes_20() {
    return {

        sec_id: "YBM0",
        f32_0: 0,
    };

}
function add_hwvx_pc_world_routes_24() {
    return {

        sec_id: "axYu",
        u32_0: 0,
    };

}
function add_hwvx_pc_triggers_and_actions() {
    return {

        sec_id: "Ow;Q",
        u32_0: u32(o + 0),
        //check this
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_28: 0,
        u8_40: 0,
    };

}
function add_hwvx_pc_triggers_and_actions_4t1() {
    return {
        sec_id: "ljKo",
        unordered_hwvx_pc_triggers_and_actions_4t1_0_0: 0,
    };

}
function add_hwvx_pc_triggers_and_actions_4t3() {
    return {
        sec_id: "mcgD",
        u32_0: 0,
        unordered_hwvx_pc_Airbox_4: 0,
        u32_8: 0,
    };

}
function add_hwvx_pc_triggers_and_actions_4t5() {
    return {
        sec_id: "y@YQ",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
    };

}
function add_hwvx_pc_triggers_and_actions_4t6() {
    return {
        sec_id: "spCK",
        section_0: [],
    };

}
function add_hwvx_pc_triggers_and_actions_4t6t4() {
    return {
        sec_id: "BdCW",
        unordered_hwvx_pc_Airbox_4: 0,
        unordered_hwvx_pc_Airbox_8: 0,
        unordered_hwvx_pc_Airbox_12: 0,
        unordered_hwvx_pc_Airbox_16: 0,
        u32_20: 0,
    };

}
function add_hwvx_pc_triggers_and_actions_4t6t20() {
    return {
        sec_id: "No@_",
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
        f32_20: f32(o + 20),
        //check this
    };

}
function add_hwvx_pc_triggers_and_actions_4trest() {
    return {
        sec_id: "_qnL",
        u32_0: 0,
    };

}
function add_hwvx_pc_triggers_and_actions_12() {
    return {
        sec_id: "7jf[",
        section_0: [],
    };

}
function add_hwvx_pc_triggers_and_actions_12_4() {
    return {
        sec_id: "gIZv",
        u32_0: 0,
    };

}
function add_hwvx_pc_actions() {
    return {
        sec_id: "06f=",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tAirboxChangeMode() {
    return {

        sec_id: ":O[[",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u32_44: 0,
    };

}
function add_hwvx_pc_actions_4tCameraSetTargetst13() {
    return {
        sec_id: "LGOJ",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        section_16: [],
    };

}
function add_hwvx_pc_actions_4tCameraSetTargetst14() {
    return {

        sec_id: "E[LH",
        u32_0: u32(o + 0),
        //check this
        section_4: [],
        u32_8: 0,
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function add_hwvx_pc_actions_4tCameraSetTargetst17() {
    return {
        sec_id: "g9Bl",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_actions_4tDestructibleChangeMode() {
    return {
        sec_id: "tokw",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tFXPointChangeMode() {
    return {
        sec_id: "Mlm9",
        u32_4: 0,
        u32_8: 0,
        section_12: [],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: [],
        f32_40: 0,
        u32_48: 0,
    };

}
function add_hwvx_pc_actions_4tInterfacePlay() {
    return {
        sec_id: "W_H0",
        u32_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: [],
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        section_36: [],
        f32_44: 0,
        u32_52: 0,
    };

}
function add_hwvx_pc_actions_4tItemChangeMode() {
    return {
        sec_id: "fX>L",
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: [],
        f32_32: 0,
        f32_36: 0,
        u32_44: 0,
        section_48: [],
        f32_52: 0,
        f32_56: 0,
        u32_64: 0,
    };

}
function add_hwvx_pc_actions_4tTimerChangevalue() {
    return {
        sec_id: "fgHH",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_actions_4tTimerChangeMode() {
    return {
        sec_id: "5a;y",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tMoveableChangeMode() {
    return {
        sec_id: "Nn0L",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_actions_4tMusicChanget10() {
    return {
        sec_id: "FFn^",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tMusicChanget20() {
    return {
        sec_id: "QGo>",
        unordered_hwvx_pc_interface_0: 0,
    };

}
function add_hwvx_pc_actions_4tNavPointChangeMode() {
    return {
        sec_id: "iN;x",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_actions_4tTargetArrowSetTargett1() {
    return {
        sec_id: "a8@U",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tTargetArrowSetTargett5() {
    return {
        sec_id: "_diC",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_76_8: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_hwvx_pc_actions_4tVariableChangeValue() {
    return {
        sec_id: "ACYg",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_76_12: 0,
    };

}
function add_hwvx_pc_actions_4tVehicleChangeMode() {
    return {
        sec_id: "e^ln",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_16: 0,
        unordered_hwvx_pc_world_20_20: 0,
        unordered_hwvx_pc_world_20_24: 0,
    };

}
function add_hwvx_pc_actions_4tPrintDebugString() {
    return {
        sec_id: "4Yri",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
    };

}
function add_hwvx_pc_actions_4tVehicleTeleport() {
    return {
        sec_id: ">8[6",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_48: 0,
        f32_52: 0,
        u32_76: 0,
    };

}
function add_hwvx_pc_actions_4tVehicleChangeControl() {
    return {
        sec_id: "PQm;",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_actions_4tVehicleRemoveItem() {
    return {
        sec_id: ">QCg",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tVariableChangeMode() {
    return {
        sec_id: "H:9G",
    };

}
function add_hwvx_pc_actions_4tEndInterface() {
    return {
        sec_id: "C;l7",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_actions_4tHUDChangeMode() {
    return {
        sec_id: "dSi>",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_76_8: 0,
        u32_12: 0,
        section_16: [],
        unordered_hwvx_pc_world_12_20: 0,
    };

}
function add_hwvx_pc_actions_4tCodeVariableModifyValuet5() {
    return {
        sec_id: "j8XE",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_actions_4tCodeVariableModifyValuet6() {
    return {
        sec_id: "d?ko",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tPauseTACSystem() {
    return {
        sec_id: "ujJ^",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_text_8: 0,
    };

}
function add_hwvx_pc_actions_4tResetGameRound() {
    return {
        sec_id: "HmcY",
        u32_0: 0,
        unordered_hwvx_pc_world_52_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
    };

}
function add_hwvx_pc_actions_4tRoundComplete() {
    return {
        sec_id: "jnUt",
        u32_0: 0,
        u32_8: 0,
    };

}
function add_hwvx_pc_actions_4tVehicleGiveItem() {
    return {
        sec_id: "tQ@M",
        section_0: [],
    };

}
function add_hwvx_pc_actions_4tSetPlayerOrder() {
    return {
        sec_id: "idke",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_12_8: 0,
    };

}
function add_hwvx_pc_collision() {
    return {
        sec_id: "e8[m",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_76_8: 0,
    };

}
function add_hwvx_pc_collision_32() {
    return {
        sec_id: "D[zz",
        u32_0: 0,
        unordered_hwvx_pc_interface_4: 0,
    };

}
function add_hwvx_pc_collision_32_56() {
    return {
        sec_id: "ilFa",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function add_hwvx_pc_collision_64() {
    return {
        sec_id: "Hmgf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        f32_16: 0,
    };

}
function add_hwvx_pc_collision_76() {
    return {
        sec_id: "WKVo",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
        u32_16: 0,
        section_20: [],
    };

}
function add_hwvx_pc_collision_76_16() {
    return {
        sec_id: "0@vU",
        u32_0: 0,
    };

}
function add_hwvx_pc_collision_84() {
    return {
        sec_id: "qn0E",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function add_hwvx_pc_collision_related() {
    return {

        sec_id: "4[M<",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_19: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function add_hwvx_pc_collision_link() {
    return {

        sec_id: "7WTA",
        unordered_hwvx_pc_collision_settings_0: 0,
        unordered_hwvx_pc_collision_settings_4: 0,
    };

}
function add_hwvx_pc_geo_basic() {
    return {
        sec_id: "KEpY",
        section_0: [],
        unordered_hwvx_pc_geo_list_4: 0,
    };

}
function add_hwvx_pc_geo_basic_0() {
    return {

        sec_id: "SV]u",
        u32_0: 0,
        model_8: [0, 0, 0, 'm'],
    };

}
function add_hwvx_pc_share() {
    return {

        sec_id: "mWmA",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_hwvx_pc_model() {
    return {

        sec_id: "7iX0",
        u16_0: u16(o + 0),
        //check this
        u16_2: 0,
        section_8: [],
        section_12: [],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function add_hwvx_pc_model_gc_8() {
    return {

        sec_id: "49_D",
        u8_3: 0,
        section_8: [],
        section_12: [],
        section_16: [],
        unordered_hwvx_pc_model_gc_8_20_20: 0,
    };

}
function add_hwvx_pc_model_gc_8_8() {
    return {
        sec_id: "bzYZ",
        animation_0: [0, 0, 0, 'a'],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_12: [],
        u32_16: 0,
        u32_20: 0,
        texture_24: [0, 0, 0, 't'],
        unordered_hwvx_pc_model_gc_8_8_28_28: 0,
    };

}
function add_hwvx_pc_model_gc_8_8_12() {
    return {
        sec_id: "N6sV",
    };

}
function add_hwvx_pc_model_gc_8_12() {
    return {
        sec_id: "qgcH",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_pc_model_gc_8_16sec1() {
    return {
        sec_id: "sh0M",
        f32_0: 0,
    };

}
function add_hwvx_pc_model_gc_8_16() {
    return {
        sec_id: "LFg=",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
    };

}
function add_hwvx_pc_model_ps2_8() {
    return {
        sec_id: "4qqw",
        u8_0: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        unordered_hwvx_pc_model_ps2_8_20_20: 0,
    };

}
function add_hwvx_pc_model_ps2_8_8() {
    return {
        sec_id: "CSz^",
        animation_0: [0, 0, 0, 'a'],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        unordered_hwvx_pc_model_ps2_8_8_12_12: 0,
        u32_16: 0,
        u32_20: 0,
        texture_24: [0, 0, 0, 't'],
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function add_hwvx_pc_model_pc_8() {
    return {

        sec_id: "UTX:",
        u8_2: 0,
        section_8: [],
        section_12: [],
        section_16: [],
        unordered_hwvx_pc_model_string_20: 0,
    };

}
function add_hwvx_pc_model_pc_8_8() {
    return {

        sec_id: "<9^0",
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_12: [],
        u32_16: 0,
        u32_20: 0,
        texture_24: [0, 0, 0, 't'],
        unordered_hwvx_pc_model_pc_8_8_28_28: 0,
    };

}
function add_hwvx_pc_model_pc_8_8_12() {
    return {
        sec_id: "PXaM",
    };

}
function add_hwvx_pc_model_pc_8_12_type_a() {
    return {
        sec_id: "VMfD",
        unordered_hwvx_pc_model_pc_8_12_type_a_0_0: 0,
        unordered_hwvx_pc_model_pc_8_12_type_a_4_4: 0,
        unordered_hwvx_pc_model_pc_8_12_type_a_8_8: 0,
        unordered_hwvx_pc_model_pc_8_12_type_a_12_12: 0,
    };

}
function add_hwvx_pc_model_pc_8_16() {
    return {
        sec_id: "Lp_B",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
    };

}
function add_hwvx_pc_model_12() {
    return {

        sec_id: "Q8UA",
        f32_0: 0,
    };

}
function add_hwvx_pc_texture_anims() {
    return {

        sec_id: "@2Uu",
        section_0: [],
    };

}
function add_hwvx_pc_model_anims_1() {
    return {

        sec_id: "[m@P",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        u32_20: 0,
        unordered_hwvx_pc_model_anims_1_24_24: 0,
        section_28: [],
        unordered_hwvx_pc_model_anims_1_32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        u8_52: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        u8_56: 0,
        u8_57: 0,
        u8_58: 0,
        u8_59: 0,
        u8_60: 0,
        u8_61: 0,
        u8_62: 0,
        u8_63: 0,
    };

}
function add_hwvx_pc_model_anims_1_28() {
    return {
        sec_id: "L2=n",
        u16_0: 0,
    };

}
function add_hwvx_pc_model_anims_1_36() {
    return {
        sec_id: "De[c",
        section_0: ["Pac-Kart"],
    };

}
function add_hwvx_pc_model_anims_1_44() {
    return {

        sec_id: "8ebo",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function add_hwvx_pc_model_anims_2() {
    return {

        sec_id: "9Dh0",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_16: [],
    };

}
function add_hwvx_pc_model_anims_2_16() {
    return {

        sec_id: "J6YM",
        f32_0: 0,
        f32_4: 0,
        u32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function add_hwvx_pc_texture() {
    return {

        sec_id: "w_ld",
        u16_0: u16(o + 0),
        //check this
        u16_2: 0,
        u16_4: 0,
        u16_6: 0,
        unordered_hwvx_pc_texture_data_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_pc_share_end() {
    return {
        sec_id: "v=q<",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
    };

}
function add_hwvx_pc_share_end_8() {
    return {

        sec_id: "eU1@",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_pc_share_end_16() {
    return {

        sec_id: "8Taq",
        sound_0: [0, 0, 0, 's'],
    };

}
function add_hwvx_pc_world_text_link() {
    return {

        sec_id: "MADG",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_8: 0,
        section_12: [],
        section_16: [],
        section_20: [],
        section_24: [],
    };

}
function add_hwvx_pc_model_car_sound_link() {
    return {

        sec_id: "oo5d",
        model_0: [0, 0, 0, 'm'],
        u8_5: 0,
        unordered_hwvx_pc_car_link_16: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_model_car_sound_link_28() {
    return {
        sec_id: "=fbU",
        u8_16: 0,
        unordered_hwvx_pc_sound_controls_24: 0,
    };

}
function add_hwvx_pc_world_color_section() {
    return {

        sec_id: "aFli",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_world_color_section_4() {
    return {

        sec_id: "OyRE",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_world_idk() {
    return {

        sec_id: "eugV",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: 0,
        section_48: [],
    };

}
function add_hwvx_pc_world_idk_48() {
    return {

        sec_id: "8j8v",
        unordered_hwvx_pc_some_world_thing_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_world_idk_48_8() {
    return {

        sec_id: "Rfa7",
        unordered_hwvx_pc_some_world_thing_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_world_idk_48_8_8() {
    return {
        sec_id: "]Pkr",
        unordered_hwvx_pc_some_world_thing_0: 0,
    };

}
function add_hwvx_pc_some_world_thing() {
    return {

        sec_id: "P9kZ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_5: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_52: 0,
        u32_64: 0,
        u32_68: 0,
        section_88: [],
        section_116: ["Pac-Kart"],
    };

}
function add_hwvx_pc_some_world_thing_88() {
    return {
        sec_id: "[LuX",
        u8_2: 0,
        u16_6: 0,
    };

}
function add_hwvx_pc_world_small_section() {
    return {

        sec_id: "EU_i",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        f32_8: 0,
        section_12: [],
    };

}
function add_hwvx_pc_world_small_section_12() {
    return {
        sec_id: "LcQw",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_hwvx_pc_world_model_related() {
    return {

        sec_id: "s7s<",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        f32_8: 0,
        section_12: [],
        section_16: [],
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_geo_list() {
    return {

        sec_id: "8[Hz",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_geo_list_4() {
    return {

        sec_id: "9=zw",
        u32_0: 0,
        section_4: [],
        section_8: [],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        section_16: [],
    };

}
function add_hwvx_pc_geo_list_4_8() {
    return {

        sec_id: "?DFi",
        f32_0: 0,
    };

}
function add_hwvx_pc_geo_list_4_4() {
    return {
        sec_id: "WU;K",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_pc_geo_list_4_16() {
    return {
        sec_id: "6suT",
        u8_0: 0,
    };

}
function add_hwvx_pc_collision_settings() {
    return {

        sec_id: "x:>N",
        u8_0: 0,
        u8_1: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_pc_unknown_48: 0,
        unordered_hwvx_pc_unknown_thing_52: 0,
        unordered_hwvx_pc_sound_section_60: 0,
        unordered_hwvx_pc_unknown_64: 0,
        u32_68: 0,
        section_72: [],
        u32_76: 0,
        section_80: [],
    };

}
function add_hwvx_pc_collision_settings_72() {
    return {

        sec_id: "GyBQ",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_car() {
    return {

        sec_id: "7Fjr",
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u32_20: 0,
        u32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        texture_68: [0, 0, 0, 't'],
        unordered_hwvx_pc_model_anims_1_72: 0,
        unordered_hwvx_pc_model_anims_2_76: 0,
        texture_80: [0, 0, 0, 't'],
        model_84: [0, 0, 0, 'm'],
        unordered_hwvx_pc_sound_section_92: 0,
        unordered_hwvx_pc_sound_section_96: 0,
        unordered_hwvx_pc_sound_section_100: 0,
        section_108: [],
        section_120: [],
        section_124: [],
        section_128: [],
        section_132: [],
        section_136: [],
        section_140: [],
        unordered_hwvx_pc_car_related_144: 0,
        unordered_hwvx_pc_car_related_148: 0,
        unordered_hwvx_pc_car_related_152: 0,
        unordered_hwvx_pc_car_related_156: 0,
        unordered_hwvx_pc_car_link_160: 0,
        section_164: [],
        section_172: [],
        unordered_hwvx_pc_unknown_176: 0,
        u32_208: 0,
        section_212: [],
        u32_216: 0,
        section_220: [],
        u32_224: 0,
        section_228: [],
        u32_232: 0,
        section_236: [],
        u32_248: 0,
        section_252: [],
        u32_256: 0,
        section_260: [],
        u32_264: 0,
        section_268: [],
        u32_280: 0,
        section_284: [],
    };

}
function add_hwvx_pc_car_108() {
    return {
        sec_id: "hQfb",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_car_120() {
    return {
        sec_id: "EZIQ",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        unordered_hwvx_pc_model_link_16: 0,
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
    };

}
function add_hwvx_pc_car_124() {
    return {
        sec_id: "BJzR",
        f32_0: 0,
        f32_4: 0,
        f32_12: 0,
    };

}
function add_hwvx_pc_car_128() {
    return {
        sec_id: ":cKe",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        f32_20: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_92: 0,
        unordered_hwvx_pc_model_anims_2_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        u32_128: 0,
        section_132: [],
        u32_136: 0,
        section_140: [],
        section_144: [],
    };

}
function add_hwvx_pc_car_128_132() {
    return {

        sec_id: "d[9p",
        u8_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_car_128_132_4t0() {
    return {
        sec_id: "MlN:",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_car_128_132_4t4() {
    return {
        sec_id: "9>@X",
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_car_128_144() {
    return {
        sec_id: "DZps",
        section_4: [],
    };

}
function add_hwvx_pc_car_128_144_4() {
    return {
        sec_id: "ef=R",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_car_132() {
    return {
        sec_id: "4R^H",
        f32_4: 0,
        f32_8: 0,
        unordered_hwvx_pc_interface_16: 0,
        unordered_hwvx_pc_interface_24: 0,
        unordered_hwvx_pc_interface_28: 0,
        section_44: [],
        f32_52: 0,
    };

}
function add_hwvx_pc_car_132_44() {
    return {
        sec_id: "pbIx",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_car_136() {
    return {
        sec_id: "SLy_",
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        u32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_72: 0,
    };

}
function add_hwvx_pc_car_140() {
    return {
        sec_id: "]w><",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        u32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
        unordered_hwvx_pc_text_72: 0,
        u32_76: 0,
        section_80: [],
        f32_84: 0,
    };

}
function add_hwvx_pc_car_140_56() {
    return {

        sec_id: "@^Ua",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_car_140_64() {
    return {

        sec_id: "zRSI",
        unordered_hwvx_pc_text_0: 0,
    };

}
function add_hwvx_pc_car_164() {
    return {
        sec_id: "h?>h",
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_car_164_8() {
    return {
        sec_id: "pZ_:",
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_car_172() {
    return {
        sec_id: "JB2T",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_car_212() {
    return {

        sec_id: "KTBx",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_56: 0,
        u8_60: 0,
        u8_62: 0,
        u8_63: 0,
        u16_64: 0,
        u8_66: 0,
    };

}
function add_hwvx_pc_car_220() {
    return {

        sec_id: "n?=<",
        f32_0: 0,
        unordered_hwvx_pc_sound_section_4: 0,
    };

}
function add_hwvx_pc_car_228() {
    return {

        sec_id: "5F7:",
        unordered_hwvx_pc_model_anims_2_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_car_252() {
    return {
        sec_id: "eeqI",
        section_4: [],
    };

}
function add_hwvx_pc_car_252_4() {
    return {
        sec_id: "d<Z6",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_car_252_4_4() {
    return {
        sec_id: "K?5t",
        u32_0: 0,
    };

}
function add_hwvx_pc_car_260() {
    return {
        sec_id: "og:n",
        u32_52: 0,
        section_56: [],
    };

}
function add_hwvx_pc_car_260_56() {
    return {
        sec_id: "R01L",
    };

}
function add_hwvx_pc_car_268() {
    return {
        sec_id: "Dzpl",
    };

}
function add_hwvx_pc_car_related() {
    return {

        sec_id: "Jv>F",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: 0,
        section_48: [],
    };

}
function add_hwvx_pc_car_related_48() {
    return {

        sec_id: "7TM5",
        unordered_hwvx_pc_car_path_related_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_car_related_48_8() {
    return {

        sec_id: "Y1j;",
        unordered_hwvx_pc_car_path_related_0: 0,
    };

}
function add_hwvx_pc_car_path_related() {
    return {

        sec_id: "HFhM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_5: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_52: 0,
        u32_64: 0,
        u32_68: 0,
        section_88: [],
        section_116: ["Pac-Kart"],
    };

}
function add_hwvx_pc_car_path_related_88() {
    return {
        sec_id: "y67c",
        u8_2: 0,
        u16_6: 0,
    };

}
function add_hwvx_pc_car_link() {
    return {

        sec_id: "uz0f",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u32_20: 0,
        u32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        unordered_hwvx_pc_car_unknown_link_48: 0,
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
        section_68: [],
    };

}
function add_hwvx_pc_car_link_56() {
    return {

        sec_id: "4U0;",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_car_link_64() {
    return {
        sec_id: "U4vm",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_car_link_68() {
    return {
        sec_id: "9Ojd",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_hwvx_pc_car_unknown_link() {
    return {

        sec_id: "<D=[",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_pc_unknown_48: 0,
        unordered_hwvx_pc_sound_section_60: 0,
        unordered_hwvx_pc_unknown_64: 0,
        u32_68: 0,
        section_72: [],
        u32_76: 0,
        section_80: [],
    };

}
function add_hwvx_pc_car_unknown_link_72() {
    return {

        sec_id: "zeEf",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_model_link() {
    return {

        sec_id: "b0xQ",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        unordered_hwvx_pc_model_anims_1_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_31: 0,
        section_32: [],
        section_36: [],
        u32_44: 0,
        section_48: [],
        section_52: [],
        section_56: [],
    };

}
function add_hwvx_pc_model_link_4() {
    return {
        sec_id: "<k5r",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_hwvx_pc_model_link_12() {
    return {

        sec_id: "L@Xs",
        model_0: [0, 0, 0, 'm'],
        u32_4: 0,
    };

}
function add_hwvx_pc_model_link_32() {
    return {
        sec_id: "?i?9",
        f32_4: 0,
    };

}
function add_hwvx_pc_model_link_36() {
    return {
        sec_id: "V4T]",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_model_link_48() {
    return {
        sec_id: "st=p",
        u8_16: 0,
    };

}
function add_hwvx_pc_model_link_52() {
    return {
        sec_id: "wQly",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_model_link_56() {
    return {
        sec_id: "492S",
        u32_0: 0,
        section_4: [],
        unordered_hwvx_pc_model_anims_2_8: 0,
    };

}
function add_hwvx_pc_model_link_56_4() {
    return {

        sec_id: "PQhP",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        model_8: [0, 0, 0, 'm'],
        section_12: [],
        section_16: [],
    };

}
function add_hwvx_pc_model_link_56_4_12() {
    return {
        sec_id: "jb_T",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_model_link_56_4_16() {
    return {
        sec_id: "IHUi",
    };

}
function add_hwvx_pc_text() {
    return {

        sec_id: "^PC1",
        section_0: ["Pac-Kart"],
    };

}
function add_hwvx_pc_font() {
    return {

        sec_id: "BtPG",
        texture_0: [0, 0, 0, 't'],
        unordered_hwvx_pc_sound_section_4: 0,
        u32_8: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
        f32_40: 0,
    };

}
function add_hwvx_pc_font_28() {
    return {
        sec_id: "=OMm",
        f32_0: 0,
    };

}
function add_hwvx_pc_font_36() {
    return {

        sec_id: "oMJW",
        u32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_mysterious() {
    return {

        sec_id: "Pydv",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u16_18: 0,
        f32_20: 0,
        section_24: [],
    };

}
function add_hwvx_pc_mysterious_24t6() {
    return {
        sec_id: "=o?j",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        texture_8: [0, 0, 0, 't'],
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        section_36: [],
        section_40: [],
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function add_hwvx_pc_mysterious_24t6_16() {
    return {

        sec_id: "k0iY",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_mysterious_24t6_32() {
    return {

        sec_id: "hY?B",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_mysterious_24t6_36() {
    return {
        sec_id: "[ClP",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_mysterious_24t6_40() {
    return {
        sec_id: "zV<t",
        f32_8: 0,
        f32_16: 0,
    };

}
function add_hwvx_pc_mysterious_24t7() {
    return {
        sec_id: "[sZX",
        u8_32: 0,
        u8_33: 0,
        u32_36: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        u32_68: 0,
        section_72: [],
        u32_76: 0,
        section_80: [],
        u32_84: 0,
        section_88: [],
    };

}
function add_hwvx_pc_mysterious_24t7_72() {
    return {

        sec_id: "xV]Y",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_mysterious_24t7_80() {
    return {
        sec_id: "BNyM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function add_hwvx_pc_mysterious_24t7_88() {
    return {
        sec_id: "KcWa",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_pc_mysterious_24t9() {
    return {
        sec_id: "HmOL",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        texture_20: [0, 0, 0, 't'],
        texture_24: [0, 0, 0, 't'],
        section_28: [],
        section_32: [],
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        u32_40: 0,
        u32_44: 0,
        u8_48: 0,
    };

}
function add_hwvx_pc_mysterious_24t9_28() {
    return {
        sec_id: "a<[>",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_mysterious_24t9_32() {
    return {
        sec_id: "seH@",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_mysterious_24t10() {
    return {
        sec_id: "yf<j",
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_mysterious_24t10_8() {
    return {

        sec_id: "LVG;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        section_24: [],
    };

}
function add_hwvx_pc_mysterious_24t10_8_24() {
    return {
        sec_id: "GCMk",
        u8_1: 0,
        u8_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        section_44: [],
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function add_hwvx_pc_mysterious_24t10_8_24_16() {
    return {

        sec_id: "oR@@",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_mysterious_24t10_8_24_32() {
    return {

        sec_id: "oY<2",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_mysterious_24t10_8_24_44() {
    return {
        sec_id: "YGch",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_strange() {
    return {

        sec_id: "SeUk",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
    };

}
function add_hwvx_pc_strange_28() {
    return {

        sec_id: "0RVf",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_unknown() {
    return {

        sec_id: "Nxin",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_unknown_4() {
    return {

        sec_id: "McWu",
        u32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_hwvx_pc_unknown_4_4t4() {
    return {
        sec_id: "1NM>",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: 0,
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
    };

}
function add_hwvx_pc_unknown_4_4t4_28() {
    return {
        sec_id: "n?3D",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_unknown_4_8t1() {
    return {
        sec_id: "U]Qo",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        f32_36: 0,
        section_40: [],
        section_44: [],
    };

}
function add_hwvx_pc_unknown_4_8t1_40t1() {
    return {
        sec_id: "2De^",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_unknown_4_8t1_40t2() {
    return {
        sec_id: "gLz:",
        f32_0: 0,
        f32_4: 0,
        u8_9: 0,
        section_12: [],
    };

}
function add_hwvx_pc_unknown_4_8t1_40t2_12t0() {
    return {
        sec_id: "E8nv",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_4_8t1_40t2_12t1() {
    return {
        sec_id: "FhYK",
        f32_0: 0,
        u8_16: 0,
    };

}
function add_hwvx_pc_unknown_4_8t1_40t2_12t2() {
    return {
        sec_id: "9kqe",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
    };

}
function add_hwvx_pc_unknown_4_8t1_44() {
    return {
        sec_id: ";RF:",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_unknown_4_8t5() {
    return {
        sec_id: "w<T^",
        u8_24: 0,
        u8_25: 0,
        section_28: [],
    };

}
function add_hwvx_pc_unknown_4_8t5_28() {
    return {
        sec_id: "JCe3",
        u32_0: 0,
        f32_8: 0,
        f32_16: 0,
    };

}
function add_hwvx_pc_unknown_thing() {
    return {

        sec_id: "e?22",
        u8_0: 0,
        u8_3: 0,
        section_4: [],
        u32_8: 0,
        u32_12: 0,
        f32_16: 0,
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
    };

}
function add_hwvx_pc_unknown_thing_4t0() {
    return {
        sec_id: "eWKC",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        unordered_hwvx_pc_sound_controls_24: 0,
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
    };

}
function add_hwvx_pc_unknown_thing_4t0_36() {
    return {

        sec_id: "81tK",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_hwvx_pc_unknown_thing_4t0_44() {
    return {

        sec_id: "XnWM",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_unknown_thing_4t1() {
    return {
        sec_id: "<5bC",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
    };

}
function add_hwvx_pc_unknown_thing_4t1_36() {
    return {

        sec_id: "r^sH",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_pc_unknown_thing_4t1_44() {
    return {

        sec_id: "ffDE",
        f32_0: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_thing_4t2() {
    return {
        sec_id: "VHxw",
        u8_0: 0,
        u8_1: 0,
        f32_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_pc_unknown_thing_4t2_16() {
    return {

        sec_id: "JF0;",
        f32_0: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_thing_4t2_24() {
    return {

        sec_id: "sQ5X",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_thing_24() {
    return {

        sec_id: ";89_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_thing_32() {
    return {
        sec_id: "xZCS",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_asdf() {
    return {

        sec_id: "7XAL",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u8_8: 0,
        section_12: [],
        model_16: [0, 0, 0, 'm'],
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        u32_56: 0,
        f32_60: 0,
        f32_64: 0,
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        f32_72: 0,
        f32_76: 0,
        u32_84: 0,
        texture_92: [0, 0, 0, 't'],
        unordered_hwvx_pc_unknown_112: 0,
        unordered_hwvx_pc_unknown_116: 0,
        unordered_hwvx_pc_unknown_120: 0,
        u32_140: 0,
        section_144: [],
        u32_148: 0,
        section_152: [],
        u32_156: 0,
        section_160: [],
        section_164: [],
        section_168: [],
        section_172: [],
    };

}
function add_hwvx_pc_asdf_12t1() {
    return {
        sec_id: "IZJx",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_pc_asdf_12t2() {
    return {
        sec_id: "2nh]",
        f32_0: 0,
    };

}
function add_hwvx_pc_asdf_144() {
    return {

        sec_id: "LG>d",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_asdf_152() {
    return {

        sec_id: "]Bz4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_asdf_164() {
    return {
        sec_id: "]6bl",
        f32_0: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
    };

}
function add_hwvx_pc_asdf_168() {
    return {
        sec_id: "zSUy",
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_44: 0,
    };

}
function add_hwvx_pc_asdf_172() {
    return {
        sec_id: "7:uu",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_unknown_idk_sec() {
    return {

        sec_id: "7xDZ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: [],
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: 0,
        section_48: [],
    };

}
function add_hwvx_pc_unknown_idk_sec_28() {
    return {
        sec_id: "omVp",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        unordered_hwvx_pc_unknown_24: 0,
        u32_28: 0,
    };

}
function add_hwvx_pc_unknown_idk_sec_32() {
    return {
        sec_id: "mIEQ",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_unknown_idk_sec_32_8() {
    return {

        sec_id: "F@go",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_idk_sec_36() {
    return {
        sec_id: "Qk6S",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_unknown_idk_sec_36_4() {
    return {
        sec_id: "U4:B",
        f32_0: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_unknown_idk_sec_40() {
    return {
        sec_id: "tVDG",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_unknown_idk_sec_40_4() {
    return {
        sec_id: "0XIR",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_unknown_idk_sec_48() {
    return {
        sec_id: "DVnq",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_grand_section() {
    return {

        sec_id: "X4YZ",
        model_0: [0, 0, 0, 'm'],
        u8_5: 0,
        u8_6: 0,
        u8_10: 0,
        u8_11: 0,
        section_16: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_unknown_whatever() {
    return {

        sec_id: "ch1T",
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_pc_unknown_whatever_16() {
    return {

        sec_id: "OiQ6",
        f32_0: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_whatever_24() {
    return {

        sec_id: "jGiO",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_unknown_small_model_link() {
    return {

        sec_id: ">4Dm",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_hwvx_pc_unknown_small_model_link_12() {
    return {

        sec_id: "V<tN",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        model_28: [0, 0, 0, 'm'],
        unordered_hwvx_pc_unknown_link_section_32: 0,
    };

}
function add_hwvx_pc_unknown_link_section() {
    return {

        sec_id: "vhSy",
        u32_0: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_unknown_link_section_28() {
    return {

        sec_id: "12@v",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_item() {
    return {

        sec_id: "6U;Y",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        unordered_hwvx_pc_text_32: 0,
        unordered_hwvx_pc_unknown_36: 0,
        unordered_hwvx_pc_unknown_44: 0,
        section_48: [],
        unordered_hwvx_pc_model_anims_2_52: 0,
        u32_56: 0,
        section_60: [],
    };

}
function add_hwvx_pc_item_48() {
    return {
        sec_id: "QiCE",
        section_0: [],
        unordered_hwvx_pc_text_16: 0,
        texture_24: [0, 0, 0, 't'],
        unordered_hwvx_pc_model_anims_2_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u8_44: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
        u32_48: 0,
        u8_52: 0,
        u8_53: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        f32_80: 0,
    };

}
function add_hwvx_pc_item_48_0() {
    return {
        sec_id: "@bCK",
        u32_8: 0,
        section_12: [],
        unordered_hwvx_pc_model_anims_1_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: 0,
        section_48: [],
        section_52: [],
    };

}
function add_hwvx_pc_item_48_0_12() {
    return {

        sec_id: "eU:n",
        model_0: [0, 0, 0, 'm'],
        u16_4: 0,
    };

}
function add_hwvx_pc_item_48_0_32() {
    return {
        sec_id: "5hOa",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_item_48_0_36() {
    return {
        sec_id: "oj_I",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_item_48_0_40() {
    return {
        sec_id: "A<W2",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_item_48_0_52() {
    return {
        sec_id: "BpEB",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_sound_controls() {
    return {

        sec_id: "WxQT",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_hwvx_pc_sound_controls_12() {
    return {

        sec_id: "usZx",
        f32_0: 0,
        u8_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_hwvx_pc_sound_controls_12_12() {
    return {

        sec_id: "9Sj]",
        unordered_hwvx_pc_sound_section_0: 0,
    };

}
function add_hwvx_pc_sound_section() {
    return {

        sec_id: "h]CS",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        sound_20: [0, 0, 0, 's'],
        section_24: [],
        u32_28: 0,
        section_32: [],
    };

}
function add_hwvx_pc_sound_section_24() {
    return {
        sec_id: "@kyl",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_sound_section_32() {
    return {
        sec_id: "5lG]",
        f32_0: 0,
        f32_12: 0,
    };

}
function add_hwvx_pc_world_settings() {
    return {

        sec_id: "MRbS",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        u32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        u32_64: 0,
        u32_68: 0,
        u32_72: 0,
        f32_88: 0,
        f32_92: 0,
        f32_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        f32_112: 0,
        f32_116: 0,
        texture_120: [0, 0, 0, 't'],
        texture_124: [0, 0, 0, 't'],
        texture_128: [0, 0, 0, 't'],
        texture_132: [0, 0, 0, 't'],
        texture_136: [0, 0, 0, 't'],
        texture_140: [0, 0, 0, 't'],
        texture_144: [0, 0, 0, 't'],
        texture_148: [0, 0, 0, 't'],
        texture_152: [0, 0, 0, 't'],
        section_156: [],
        section_160: ["Pac-Kart"],
        section_164: ["Pac-Kart"],
        section_192: [],
        section_196: [],
        unordered_hwvx_pc_font_200: 0,
        unordered_hwvx_pc_interface_204: 0,
        section_224: [],
        section_228: [],
        u32_240: 0,
        section_244: [],
        u32_248: 0,
        section_252: [],
        section_272: [],
    };

}
function add_hwvx_pc_world_settings_192() {
    return {
        sec_id: "0@I_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_world_settings_196() {
    return {
        sec_id: "W^vn",
        u32_0: 0,
        u32_8: 0,
        u32_24: 0,
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
    };

}
function add_hwvx_pc_world_settings_196_28() {
    return {
        sec_id: "NnQY",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_world_settings_224() {
    return {
        sec_id: "Y8pi",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_world_settings_228() {
    return {
        sec_id: "cb?L",
    };

}
function add_hwvx_pc_world_settings_244() {
    return {

        sec_id: "MxQJ",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function add_hwvx_pc_world_settings_272() {
    return {
        sec_id: "Q8hJ",
        section_4: [],
    };

}
function add_hwvx_pc_world_settings_272_4() {
    return {
        sec_id: "ED?;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_interface() {
    return {

        sec_id: ";5u1",
        u16_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
        section_28: [],
        unordered_hwvx_pc_sound_controls_32: 0,
        unordered_hwvx_pc_sound_controls_36: 0,
        unordered_hwvx_pc_sound_controls_40: 0,
        unordered_hwvx_pc_sound_controls_44: 0,
        section_48: [],
        u32_52: 0,
        f32_56: 0,
        u8_60: 0,
    };

}
function add_hwvx_pc_interface_16() {
    return {

        sec_id: "dTr=",
        u8_0: 0,
        u8_1: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u32_16: 0,
        section_20: [],
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        u8_40: 0,
        u8_41: 0,
        u8_42: 0,
        u8_43: 0,
        u8_44: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
        f32_48: 0,
        f32_52: 0,
        section_60: [],
        section_68: [],
        section_72: [],
        section_96: [],
        u32_100: 0,
        section_104: [],
    };

}
function add_hwvx_pc_interface_16_20t0() {
    return {
        sec_id: ":pm=",
        u8_0: 0,
        u8_1: 0,
        texture_4: [0, 0, 0, 't'],
        section_16: [],
    };

}
function add_hwvx_pc_interface_16_20t0_16() {
    return {
        sec_id: "q]Nf",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u8_12: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function add_hwvx_pc_interface_16_20t0_16_4() {
    return {

        sec_id: "gOrX",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_pc_interface_16_20t1() {
    return {
        sec_id: "ZAy9",
        unordered_hwvx_pc_text_0: 0,
        unordered_hwvx_pc_font_4: 0,
        section_8: [],
        u8_14: 0,
        u8_15: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        f32_24: 0,
    };

}
function add_hwvx_pc_interface_16_20t1_8() {
    return {
        sec_id: "Kpo9",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_10: 0,
        u8_11: 0,
    };

}
function add_hwvx_pc_interface_16_20t1_8_4() {
    return {

        sec_id: "M0nC",
        unordered_hwvx_pc_text_0: 0,
    };

}
function add_hwvx_pc_interface_16_20t2() {
    return {
        sec_id: "D[kC",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_16_20t2_4() {
    return {

        sec_id: "8]NM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: ["Pac-Kart"],
        unordered_hwvx_pc_text_16: 0,
        unordered_hwvx_pc_interface_text_related_20: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_interface_16_20t2_4_28() {
    return {

        sec_id: "WlGZ",
        u8_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_16_20t2_4_28_4() {
    return {
        sec_id: "E61g",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_interface_16_20t10() {
    return {
        sec_id: "if9m",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        unordered_hwvx_pc_font_16: 0,
    };

}
function add_hwvx_pc_interface_16_20t11() {
    return {
        sec_id: "is9G",
        u8_0: 0,
    };

}
function add_hwvx_pc_interface_16_60() {
    return {
        sec_id: "R:nq",
        unordered_hwvx_pc_interface_0: 0,
    };

}
function add_hwvx_pc_interface_16_68() {
    return {
        sec_id: "lQ71",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
    };

}
function add_hwvx_pc_interface_16_68_12() {
    return {

        sec_id: "^Swx",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
    };

}
function add_hwvx_pc_interface_16_68_20() {
    return {

        sec_id: "YPDx",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_interface_16_68_20_8() {
    return {
        sec_id: "ANLl",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: [],
        section_12: ["Pac-Kart"],
        unordered_hwvx_pc_sound_controls_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        u32_36: 0,
    };

}
function add_hwvx_pc_interface_16_68_20_8_0t11() {
    return {
        sec_id: "V6Oh",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_16_68_20_8_0t11_4() {
    return {

        sec_id: "X[a4",
        u8_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_16_68_20_8_0t11_4_4t3() {
    return {
        sec_id: "EdB_",
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_16_68_20_8_8t15() {
    return {
        sec_id: "7VAU",
        section_0: [],
        section_4: [],
    };

}
function add_hwvx_pc_interface_16_68_20_8_8t15_0() {
    return {
        sec_id: "zrKF",
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_16_68_20_8_8t15_4() {
    return {
        sec_id: "oz89",
        u8_0: 0,
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_16_68_20_8_8t17() {
    return {
        sec_id: "^juu",
        u8_0: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_interface_16_68_20_8_24() {
    return {
        sec_id: "GqFT",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function add_hwvx_pc_interface_16_68_20_8_32() {
    return {
        sec_id: "F[mB",
        u8_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function add_hwvx_pc_interface_16_72() {
    return {
        sec_id: "Tkt7",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_interface_16_72_8() {
    return {

        sec_id: ":LtZ",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_interface_16_72_8_8() {
    return {
        sec_id: "A:iN",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_16_72_8_8_4() {
    return {
        sec_id: "U[_H",
        u8_0: 0,
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_16_96() {
    return {
        sec_id: "bK:?",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
    };

}
function add_hwvx_pc_interface_16_96_4() {
    return {

        sec_id: "f8ur",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_interface_16_96_28() {
    return {

        sec_id: "p=Is",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_interface_16_96_36() {
    return {

        sec_id: "J@pY",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        f32_36: 0,
    };

}
function add_hwvx_pc_interface_16_104() {
    return {

        sec_id: "h5vx",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_interface_16_104_8() {
    return {
        sec_id: "MCag",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
        unordered_hwvx_pc_sound_controls_48: 0,
    };

}
function add_hwvx_pc_interface_16_104_8_4() {
    return {

        sec_id: "]WeR",
        u8_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_pc_interface_16_104_8_12() {
    return {

        sec_id: "^olX",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_interface_16_104_8_20() {
    return {

        sec_id: "yjO=",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_interface_16_104_8_28() {
    return {

        sec_id: "kBT?",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_interface_16_104_8_36() {
    return {

        sec_id: "Mkj4",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        f32_36: 0,
    };

}
function add_hwvx_pc_interface_16_104_8_44() {
    return {

        sec_id: "ramv",
        f32_0: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_hwvx_pc_interface_24() {
    return {

        sec_id: "llE9",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_interface_24_8() {
    return {
        sec_id: "8cj[",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: [],
        unordered_hwvx_pc_sound_section_20: 0,
        u32_28: 0,
        section_32: [],
        u32_36: 0,
    };

}
function add_hwvx_pc_interface_24_8_0t11() {
    return {
        sec_id: "ZA6O",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_24_8_0t11_4() {
    return {

        sec_id: "2b>B",
        u8_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_24_8_0t11_4_4() {
    return {
        sec_id: "U7Vg",
        section_0: [],
        section_4: [],
    };

}
function add_hwvx_pc_interface_24_8_0t11_4_4_0() {
    return {
        sec_id: "T=Pm",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_24_8_0t11_4_4_0_4() {
    return {
        sec_id: "]UNA",
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_24_8_0t11_4_4_4() {
    return {
        sec_id: "z^S1",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_interface_24_8_8t17() {
    return {
        sec_id: "1mE^",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u32_16: 0,
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_pc_interface_24_8_8t17_24() {
    return {
        sec_id: "9ynB",
        u32_0: 0,
    };

}
function add_hwvx_pc_interface_24_8_32() {
    return {
        sec_id: "OMjB",
        u8_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function add_hwvx_pc_interface_28() {
    return {
        sec_id: "6D?u",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_28_4() {
    return {

        sec_id: "WPq8",
        u8_0: 0,
        u8_1: 0,
        u16_2: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_hwvx_pc_interface_28_4_16() {
    return {
        sec_id: "ILv2",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_28_4_16_4() {
    return {
        sec_id: "yNAf",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_interface_48() {
    return {
        sec_id: "m?Hg",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_pc_interface_unknown() {
    return {

        sec_id: "lt@9",
        section_0: [],
        section_4: [],
    };

}
function add_hwvx_pc_interface_unknown_0() {
    return {
        sec_id: "umJB",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_interface_unknown_0_4() {
    return {
        sec_id: "I3WJ",
        u8_0: 0,
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_unknown_4() {
    return {
        sec_id: "KCs;",
        u8_0: 0,
        u16_2: 0,
    };

}
function add_hwvx_pc_interface_text_related() {
    return {

        sec_id: "EjH9",
        unordered_hwvx_pc_text_0: 0,
        unordered_hwvx_pc_font_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
        u32_44: 0,
        section_48: [],
        section_52: [],
    };

}
function add_hwvx_pc_interface_text_related_12() {
    return {
        sec_id: "[X_S",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_pc_interface_text_related_20() {
    return {

        sec_id: "=YxD",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_hwvx_pc_interface_text_related_20_4() {
    return {

        sec_id: "WBd7",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_pc_interface_text_related_52() {
    return {
        sec_id: "qU9>",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_link() {
    return {

        sec_id: "vt;Z",
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
        section_12: ["Pac-Kart"],
        section_16: ["Pac-Kart"],
        texture_20: [0, 0, 0, 't'],
        texture_24: [0, 0, 0, 't'],
        section_36: [],
        u32_40: 0,
        u32_44: 0,
        section_48: [],
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
    };

}
function add_hwvx_pc_link_36() {
    return {
        sec_id: "m>6O",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_pc_link_36_8() {
    return {
        sec_id: "nVd;",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_link_36_8_4() {
    return {

        sec_id: ">8x;",
        section_8: [],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_link_36_8_4_8() {
    return {
        sec_id: "WA6S",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_pc_link_36_8_4_20() {
    return {
        sec_id: "gi^r",
        u16_8: 0,
    };

}
function add_hwvx_pc_link_36_8_4_28() {
    return {
        sec_id: ":MNf",
    };

}
function add_hwvx_pc_link_48() {
    return {

        sec_id: "apsD",
        u8_0: 0,
        section_4: ["Pac-Kart"],
        section_8: [],
    };

}
function add_hwvx_pc_link_48_8() {
    return {
        sec_id: "jQNS",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_pc_link_56() {
    return {

        sec_id: "J_lu",
        section_0: [],
    };

}
function add_hwvx_pc_link_56_0() {
    return {
        sec_id: "Gm;v",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_link_56_0_4() {
    return {

        sec_id: "<>B;",
        u32_0: 0,
        section_4: [],
        section_8: [],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_pc_link_56_0_4_4() {
    return {

        sec_id: "gldE",
        u8_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_link_56_0_4_4_4() {
    return {
        sec_id: "wgj]",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_pc_link_56_0_4_8() {
    return {
        sec_id: ">0qA",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_pc_link_56_0_4_20() {
    return {
        sec_id: "dNb?",
        u32_0: 0,
        section_4: [],
        u16_8: 0,
    };

}
function add_hwvx_pc_link_56_0_4_20_4() {
    return {

        sec_id: ":7]c",
        u8_0: 0,
        section_4: [],
    };

}
function add_hwvx_pc_link_56_0_4_20_4_4() {
    return {
        sec_id: "9fy?",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_pc_link_56_0_4_28() {
    return {
        sec_id: "O^;<",
    };

}
function add_hwvx_pc_link_64() {
    return {

        sec_id: ";r>i",
        section_0: [],
    };

}
function add_hwvx_pc_link_64_0() {
    return {
        sec_id: "XbZm",
        section_0: [],
    };

}
function add_hwvx_pc_link_64_0_0() {
    return {
        sec_id: ">X0g",
        section_0: [],
        section_4: [],
        section_8: [],
    };

}
function add_hwvx_pc_link_64_0_0_0() {
    return {
        sec_id: "0fEE",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_15: 0,
    };

}
function add_hwvx_pc_link_64_0_0_4() {
    return {
        sec_id: "BiTC",
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_7: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
    };

}
function add_hwvx_pc_link_64_0_0_8() {
    return {
        sec_id: "LlZ4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function add_hwvx_pc_texture_anims_0() {
    return {

        sec_id: "BSWG",
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
        section_20: [],
    };

}
function add_hwvx_pc_texture_anims_0_8() {
    return {

        sec_id: ":KKi",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_hwvx_pc_texture_anims_0_16() {
    return {

        sec_id: "PPT7",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
    };

}
function add_hwvx_pc_texture_anims_0_20() {
    return {
        sec_id: "L:FW",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_hwvx_pc_texture_anims_0_20_4() {
    return {

        sec_id: "wBx]",
        texture_0: [0, 0, 0, 't'],
    };

}

/* end add list */
/////////////////////
/* start info list */

function info_hwvx_pc_file_header() {
    return {
        sec_id: "gjbf",
        multi: 0,
        u32_0: {
            n: "magic 1"
        },
        u32_4: {
            n: "magic 2"
        },
        u32_8: {
            n: "version"
        },
        section_12: ["]7Zf"],
    };

}

function info_hwvx_pc_directory() {
    return {
        sec_id: "]7Zf",
        multi: 1,
        u32_0: {
            n: "version"
        },
        u32_4: {
            n: "file type"
        },
        u32_8: {
            n: "index"
        },
        u32_12: 0,
        u32_16: {
            n: "length"
        },
        section_datapack: {
            s: null
        },
    };

}

function info_hwvx_pc_basic() {
    return {
        sec_id: "l^d@",
        u32_0: 0,
        section_4: ["L@8_"],
    };

}
function info_hwvx_pc_basic_4() {
    return {
        sec_id: "L@8_",
        section_0: ["change this"],
        u32_4: 0,
    };

}
function info_hwvx_pc_world() {
    return {
        sec_id: "Y5cc",
        unordered_hwvx_pc_world_4_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["LTSU"],
        u32_16: {
            a: null
        },
        unordered_hwvx_pc_world_20_20: 0,
        u32_32: {
            a: null
        },
        unordered_hwvx_pc_world_36_36: 0,
        u32_48: {
            a: null
        },
        unordered_hwvx_pc_world_52_52: 0,
        u32_72: {
            a: null
        },
        unordered_hwvx_pc_world_76_76: 0,
        u32_80: {
            a: null
        },
        unordered_hwvx_pc_world_76_84: 0,
        u32_88: {
            a: null
        },
        unordered_hwvx_pc_world_92_92: 0,
        u32_96: {
            a: null
        },
        unordered_hwvx_pc_world_100_100: 0,
        u32_104: {
            a: null
        },
        unordered_hwvx_pc_world_108_108: 0,
        unordered_hwvx_pc_world_120_120: 0,
        section_124: ["Pac-Kart"],
        section_132: ["Pac-Kart"],
        section_140: ["Pac-Kart"],
        unordered_hwvx_pc_world_settings_156: 0,
    };

}
function info_hwvx_pc_world_12() {
    return {
        sec_id: "LTSU",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        u32_32: 0,
        u32_44: 0,
        u8_48: 0,
        u8_49: 0,
        u8_50: 0,
        u8_51: 0,
        u8_52: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        f32_56: 0,
        f32_60: 0,
        unordered_hwvx_pc_world_idk_64: 0,
        unordered_hwvx_pc_world_idk_68: 0,
        unordered_hwvx_pc_world_idk_72: 0,
        unordered_hwvx_pc_world_idk_76: 0,
        u8_92: 0,
        u8_93: 0,
        u8_94: 0,
    };

}
function info_hwvx_pc_world_20() {
    return {
        sec_id: "E:0u",
        u32_0: 0,
        unordered_hwvx_pc_model_anims_1_4: 0,
        f32_8: 0,
        unordered_hwvx_pc_model_car_sound_link_12: 0,
        u8_20: 0,
        u8_24: 0,
        u8_25: 0,
        f32_28: 0,
    };

}
function info_hwvx_pc_world_36() {
    return {
        sec_id: ";jv0",
        u32_0: 0,
        u32_12: 0,
        u32_24: {
            a: null
        },
        unordered_hwvx_pc_world_36_28_28: 0,
        u32_32: {
            a: null
        },
        unordered_hwvx_pc_world_36_36_36: 0,
        unordered_hwvx_pc_world_36_48_48: 0,
        u8_56: 0,
        u8_57: 0,
        u8_58: 0,
        u8_59: 0,
    };

}
function info_hwvx_pc_world_36_48() {
    return {
        sec_id: "7V?m",
        u32_4: {
            a: null
        },
        section_8: ["change this"],
        u32_12: {
            a: null
        },
        section_16: ["change this"],
        u32_20: {
            a: null
        },
        section_24: ["change this"],
    };

}
function info_hwvx_pc_Airbox() {
    return {
        sec_id: "huaA",
        f32_0: {
            n: "x position"
        },
        f32_4: {n: "y position"},
        f32_8: {n: "z position"},
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        f32_16: {n: "f32_16 | rotation?"},
        f32_20: {n: "f32_20 | rotation?"},
        f32_24: {n: "f32_24 | rotation?"},
        f32_28: {n: "f32_28 | rotation?"},
        u32_32: 0,
        section_36: ["change this"],
        f32_40: 0,
        u32_48: 0,
        u8_52: 0,
        u8_53: 0,
    };

}
function info_hwvx_pc_world_36_36() {
    return {
        sec_id: "c@^f",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_pc_world_36_28() {
    return {
        sec_id: "yhnO",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function info_hwvx_pc_world_36_48_16() {
    return {
        sec_id: "Hz?v",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        section_36: ["change this"],
        f32_44: 0,
        u32_52: 0,
        u8_56: 0,
    };

}
function info_hwvx_pc_world_36_48_24() {
    return {
        sec_id: "OCZ5",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        f32_32: 0,
        u32_40: 0,
        u32_48: 0,
        u32_52: 0,
    };

}
function info_hwvx_pc_world_76() {
    return {
        sec_id: "^ooJ",
        unordered_hwvx_pc_world_small_section_0: 0,
    };

}
function info_hwvx_pc_world_92() {
    return {
        sec_id: "M8W@",
        unordered_hwvx_pc_world_text_link_4: 0,
    };

}
function info_hwvx_pc_world_52() {
    return {
        sec_id: "_LnX",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_64: 0,
        f32_76: 0,
        u32_80: 0,
        u32_84: 0,
        section_88: {
            s: 0
        },
        u32_92: 0,
    };

}
function info_hwvx_pc_world_52_88t1() {
    return {
        sec_id: "yb=a",
        u32_0: 0,
    };

}
function info_hwvx_pc_world_100() {
    return {
        sec_id: "H3j]",
        u32_0: 0,
        unordered_hwvx_pc_world_color_section_4: 0,
        u32_8: 0,
    };

}
function info_hwvx_pc_world_108() {
    return {
        sec_id: ";GIU",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        f32_32: 0,
        f32_36: 0,
        section_40: ["8Af;"],
        section_44: {
            s: 0
        },
    };

}
function info_hwvx_pc_world_108_40() {
    return {
        sec_id: "8Af;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        u8_48: 0,
        u8_49: 0,
        u8_50: 0,
        u8_51: 0,
        u8_52: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        u8_56: 0,
        u8_57: 0,
        u8_58: 0,
        u8_59: 0,
        u8_60: 0,
        u8_61: 0,
        u8_62: 0,
        u8_63: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        u8_80: 0,
        u8_81: 0,
        u8_82: 0,
        u8_83: 0,
        u8_84: 0,
        u8_85: 0,
        u8_86: 0,
        u8_87: 0,
        u8_88: 0,
        u8_89: 0,
        u8_90: 0,
        u8_91: 0,
        u8_92: 0,
        u8_93: 0,
        u8_94: 0,
        u8_95: 0,
        f32_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        u8_112: 0,
        u8_113: 0,
        u8_114: 0,
        u8_115: 0,
        u8_116: 0,
        u8_117: 0,
        u8_118: 0,
        u8_119: 0,
        u8_120: 0,
        u8_121: 0,
        u8_122: 0,
        u8_123: 0,
        u8_124: 0,
        u8_125: 0,
        u8_126: 0,
        u8_127: 0,
        f32_128: 0,
        f32_132: 0,
        f32_136: 0,
        f32_140: 0,
        u8_144: 0,
        u8_145: 0,
        u8_146: 0,
        u8_147: 0,
        u8_148: 0,
        u8_149: 0,
        u8_150: 0,
        u8_151: 0,
        u8_152: 0,
        u8_153: 0,
        u8_154: 0,
        u8_155: 0,
        u8_156: 0,
        u8_157: 0,
        u8_158: 0,
        u8_159: 0,
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        f32_172: 0,
        u8_176: 0,
        u8_177: 0,
        u8_178: 0,
        u8_179: 0,
        u8_180: 0,
        u8_181: 0,
        u8_182: 0,
        u8_183: 0,
        u8_184: 0,
        u8_185: 0,
        u8_186: 0,
        u8_187: 0,
        u8_188: 0,
        u8_189: 0,
        u8_190: 0,
        u8_191: 0,
        f32_192: 0,
        f32_196: 0,
        f32_200: 0,
        f32_204: 0,
        u8_208: 0,
        u8_209: 0,
        u8_210: 0,
        u8_211: 0,
        u8_212: 0,
        u8_213: 0,
        u8_214: 0,
        u8_215: 0,
        u8_216: 0,
        u8_217: 0,
        u8_218: 0,
        u8_219: 0,
        u8_220: 0,
        u8_221: 0,
        u8_222: 0,
        u8_223: 0,
        f32_224: 0,
        f32_228: 0,
        f32_232: 0,
        f32_236: 0,
        u8_240: 0,
        u8_241: 0,
        u8_242: 0,
        u8_243: 0,
        u8_244: 0,
        u8_245: 0,
        u8_246: 0,
        u8_247: 0,
        u8_248: 0,
        u8_249: 0,
        u8_250: 0,
        u8_251: 0,
        u8_252: 0,
        u8_253: 0,
        u8_254: 0,
        u8_255: 0,
        f32_256: 0,
        f32_260: 0,
        f32_264: 0,
        f32_268: 0,
        u8_272: 0,
        u8_273: 0,
        u8_274: 0,
        u8_275: 0,
        u8_276: 0,
        u8_277: 0,
        u8_278: 0,
        u8_279: 0,
        u8_280: 0,
        u8_281: 0,
        u8_282: 0,
        u8_283: 0,
        u8_284: 0,
        u8_285: 0,
        u8_286: 0,
        u8_287: 0,
        f32_288: 0,
        f32_292: 0,
        f32_296: 0,
        f32_300: 0,
        u8_304: 0,
        u8_305: 0,
        u8_306: 0,
        u8_307: 0,
        u8_308: 0,
        u8_309: 0,
        u8_310: 0,
        u8_311: 0,
        u8_312: 0,
        u8_313: 0,
        u8_314: 0,
        u8_315: 0,
        u8_316: 0,
        u8_317: 0,
        u8_318: 0,
        u8_319: 0,
        f32_320: 0,
        f32_324: 0,
        f32_328: 0,
        f32_332: 0,
        u8_336: 0,
        u8_337: 0,
        u8_338: 0,
        u8_339: 0,
        u8_340: 0,
        u8_341: 0,
        u8_342: 0,
        u8_343: 0,
        u8_344: 0,
        u8_345: 0,
        u8_346: 0,
        u8_347: 0,
        u8_348: 0,
        u8_349: 0,
        u8_350: 0,
        u8_351: 0,
        f32_352: 0,
        f32_356: 0,
        f32_360: 0,
        f32_364: 0,
        u8_368: 0,
        u8_369: 0,
        u8_370: 0,
        u8_371: 0,
        u8_372: 0,
        u8_373: 0,
        u8_374: 0,
        u8_375: 0,
        u8_376: 0,
        u8_377: 0,
        u8_378: 0,
        u8_379: 0,
        u8_380: 0,
        u8_381: 0,
        u8_382: 0,
        u8_383: 0,
    };

}
function info_hwvx_pc_world_108_44t1() {
    return {
        sec_id: "UW;E",
        f32_0: 0,
        f32_4: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u8_16: 0,
    };

}
function info_hwvx_pc_world_108_44t2() {
    return {
        sec_id: "3erz",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function info_hwvx_pc_world_108_44t3() {
    return {
        sec_id: "2W6Y",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_world_108_44t6() {
    return {
        sec_id: "M?B6",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
        u8_24: 0,
        u8_25: 0,
    };

}
function info_hwvx_pc_world_4() {
    return {
        sec_id: "[]7N",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        section_16: ["WM;j"],
        section_20: ["C6mn"],
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_44: 0,
        u32_48: 0,
        u32_52: 0,
    };

}
function info_hwvx_pc_world_4_20() {
    return {
        sec_id: "C6mn",
        u32_0: 0,
    };

}
function info_hwvx_pc_world_4_16() {
    return {
        sec_id: "WM;j",
        u32_8: {
            a: null
        },
        section_12: ["I1I4"],
        u32_16: {
            a: null
        },
        section_20: ["I1I4"],
        u32_24: {
            a: null
        },
        section_28: ["I1I4"],
        u32_48: {
            a: null
        },
        section_52: ["I1I4"],
    };

}
function info_hwvx_pc_world_4_16_4() {
    return {
        sec_id: "I1I4",
        unordered_hwvx_pc_world_108_0: 0,
    };

}
function info_hwvx_pc_world_120() {
    return {
        sec_id: "rtsI",
        unordered_hwvx_pc_world_routes_0: 0,
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
    };

}
function info_hwvx_pc_world_routes() {
    return {
        sec_id: "H>:s",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: {
            a: null
        },
        section_20: ["YBM0"],
        section_24: ["axYu"],
        u32_28: {
            a: null
        },
        section_32: ["pgig"],
        f32_36: 0,
        u32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u8_52: 0,
        u8_53: 0,
        u32_76: 0,
        u8_80: 0,
        u8_81: 0,
    };

}
function info_hwvx_pc_world_routes_32() {
    return {
        sec_id: "pgig",
        u32_0: 0,
    };

}
function info_hwvx_pc_world_routes_20() {
    return {
        sec_id: "YBM0",
        f32_0: 0,
    };

}
function info_hwvx_pc_world_routes_24() {
    return {
        sec_id: "axYu",
        u32_0: 0,
    };

}
function info_hwvx_pc_triggers_and_actions() {
    return {
        sec_id: "Ow;Q",
        u32_0: u32(o + 0),
        //check this
        section_4: {
            s: 0
        },
        u32_8: 0,
        section_12: ["7jf["],
        u32_16: {
            a: null
        },
        section_20: ["06f="],
        u32_28: {
            a: null
        },
        u8_40: 0,
    };

}
function info_hwvx_pc_triggers_and_actions_4t1() {
    return {
        sec_id: "ljKo",
        unordered_hwvx_pc_triggers_and_actions_4t1_0_0: 0,
    };

}
function info_hwvx_pc_triggers_and_actions_4t3() {
    return {
        sec_id: "mcgD",
        u32_0: 0,
        unordered_hwvx_pc_Airbox_4: 0,
        u32_8: 0,
    };

}
function info_hwvx_pc_triggers_and_actions_4t5() {
    return {
        sec_id: "y@YQ",
        u32_0: 0,
        section_4: ["change this"],
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
    };

}
function info_hwvx_pc_triggers_and_actions_4t6() {
    return {
        sec_id: "spCK",
        section_0: ["_qnL"],
    };

}
function info_hwvx_pc_triggers_and_actions_4t6t4() {
    return {
        sec_id: "BdCW",
        unordered_hwvx_pc_Airbox_4: 0,
        unordered_hwvx_pc_Airbox_8: 0,
        unordered_hwvx_pc_Airbox_12: 0,
        unordered_hwvx_pc_Airbox_16: 0,
        u32_20: 0,
    };

}
function info_hwvx_pc_triggers_and_actions_4t6t20() {
    return {
        sec_id: "No@_",
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
        f32_20: f32(o + 20),
        //check this
    };

}
function info_hwvx_pc_triggers_and_actions_4trest() {
    return {
        sec_id: "_qnL",
        u32_0: {
            a: null
        },
    };

}
function info_hwvx_pc_triggers_and_actions_12() {
    return {
        sec_id: "7jf[",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_triggers_and_actions_12_4() {
    return {
        sec_id: "gIZv",
        u32_0: {
            a: null
        },
    };

}
function info_hwvx_pc_actions() {
    return {
        sec_id: "06f=",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tAirboxChangeMode() {
    return {
        sec_id: ":O[[",
        u32_0: 0,
        section_4: ["gIZv"],
        u32_8: 0,
        u32_44: 0,
    };

}
function info_hwvx_pc_actions_4tCameraSetTargetst13() {
    return {
        sec_id: "LGOJ",
        u32_0: 0,
        section_4: {
            s: 0
        },
        u32_8: 0,
        section_12: {
            s: 0
        },
        section_16: {
            s: 0
        },
    };

}
function info_hwvx_pc_actions_4tCameraSetTargetst14() {
    return {
        sec_id: "E[LH",
        u32_0: u32(o + 0),
        //check this
        section_4: {
            s: 0
        },
        u32_8: 0,
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function info_hwvx_pc_actions_4tCameraSetTargetst17() {
    return {
        sec_id: "g9Bl",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tDestructibleChangeMode() {
    return {
        sec_id: "tokw",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tFXPointChangeMode() {
    return {
        sec_id: "Mlm9",
        u32_4: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: {
            s: 0
        },
        f32_40: 0,
        u32_48: 0,
    };

}
function info_hwvx_pc_actions_4tInterfacePlay() {
    return {
        sec_id: "W_H0",
        u32_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: {
            s: 0
        },
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        section_36: {
            s: 0
        },
        f32_44: 0,
        u32_52: 0,
    };

}
function info_hwvx_pc_actions_4tItemChangeMode() {
    return {
        sec_id: "fX>L",
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: {
            s: 0
        },
        f32_32: 0,
        f32_36: 0,
        u32_44: 0,
        section_48: {
            s: 0
        },
        f32_52: 0,
        f32_56: 0,
        u32_64: 0,
    };

}
function info_hwvx_pc_actions_4tTimerChangevalue() {
    return {
        sec_id: "fgHH",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tTimerChangeMode() {
    return {
        sec_id: "5a;y",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tMoveableChangeMode() {
    return {
        sec_id: "Nn0L",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tMusicChanget10() {
    return {
        sec_id: "FFn^",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tMusicChanget20() {
    return {
        sec_id: "QGo>",
        unordered_hwvx_pc_interface_0: 0,
    };

}
function info_hwvx_pc_actions_4tNavPointChangeMode() {
    return {
        sec_id: "iN;x",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tTargetArrowSetTargett1() {
    return {
        sec_id: "a8@U",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tTargetArrowSetTargett5() {
    return {
        sec_id: "_diC",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_76_8: 0,
        u32_12: 0,
        section_16: {
            s: 0
        },
    };

}
function info_hwvx_pc_actions_4tVariableChangeValue() {
    return {
        sec_id: "ACYg",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_76_12: 0,
    };

}
function info_hwvx_pc_actions_4tVehicleChangeMode() {
    return {
        sec_id: "e^ln",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_16: 0,
        unordered_hwvx_pc_world_20_20: 0,
        unordered_hwvx_pc_world_20_24: 0,
    };

}
function info_hwvx_pc_actions_4tPrintDebugString() {
    return {
        sec_id: "4Yri",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
    };

}
function info_hwvx_pc_actions_4tVehicleTeleport() {
    return {
        sec_id: ">8[6",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_48: 0,
        f32_52: 0,
        u32_76: 0,
    };

}
function info_hwvx_pc_actions_4tVehicleChangeControl() {
    return {
        sec_id: "PQm;",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tVehicleRemoveItem() {
    return {
        sec_id: ">QCg",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tVariableChangeMode() {
    return {
        sec_id: "H:9G",
    };

}
function info_hwvx_pc_actions_4tEndInterface() {
    return {
        sec_id: "C;l7",
        u32_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_pc_actions_4tHUDChangeMode() {
    return {
        sec_id: "dSi>",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_76_8: 0,
        u32_12: 0,
        section_16: {
            s: 0
        },
        unordered_hwvx_pc_world_12_20: 0,
    };

}
function info_hwvx_pc_actions_4tCodeVariableModifyValuet5() {
    return {
        sec_id: "j8XE",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tCodeVariableModifyValuet6() {
    return {
        sec_id: "d?ko",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tPauseTACSystem() {
    return {
        sec_id: "ujJ^",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_text_8: 0,
    };

}
function info_hwvx_pc_actions_4tResetGameRound() {
    return {
        sec_id: "HmcY",
        u32_0: 0,
        unordered_hwvx_pc_world_52_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
    };

}
function info_hwvx_pc_actions_4tRoundComplete() {
    return {
        sec_id: "jnUt",
        u32_0: 0,
        u32_8: {
            a: null
        },
    };

}
function info_hwvx_pc_actions_4tVehicleGiveItem() {
    return {
        sec_id: "tQ@M",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_actions_4tSetPlayerOrder() {
    return {
        sec_id: "idke",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_12_8: 0,
    };

}
function info_hwvx_pc_collision() {
    return {
        sec_id: "e8[m",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_pc_world_76_8: 0,
    };

}
function info_hwvx_pc_collision_32() {
    return {
        sec_id: "D[zz",
        u32_0: 0,
        unordered_hwvx_pc_interface_4: 0,
    };

}
function info_hwvx_pc_collision_32_56() {
    return {
        sec_id: "ilFa",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function info_hwvx_pc_collision_64() {
    return {
        sec_id: "Hmgf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        f32_16: 0,
    };

}
function info_hwvx_pc_collision_76() {
    return {
        sec_id: "WKVo",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_pc_world_12_12: 0,
        u32_16: 0,
        section_20: ["change this"],
    };

}
function info_hwvx_pc_collision_76_16() {
    return {
        sec_id: "0@vU",
        u32_0: 0,
    };

}
function info_hwvx_pc_collision_84() {
    return {
        sec_id: "qn0E",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function info_hwvx_pc_collision_related() {
    return {
        sec_id: "4[M<",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_19: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function info_hwvx_pc_collision_link() {
    return {
        sec_id: "7WTA",
        unordered_hwvx_pc_collision_settings_0: 0,
        unordered_hwvx_pc_collision_settings_4: 0,
    };

}
function info_hwvx_pc_geo_basic() {
    return {
        sec_id: "KEpY",
        section_0: ["SV]u"],
        unordered_hwvx_pc_geo_list_4: 0,
    };

}
function info_hwvx_pc_geo_basic_0() {
    return {
        sec_id: "SV]u",
        u32_0: 0,
        model_8: "model_patch",
    };

}
function info_hwvx_pc_share() {
    return {
        sec_id: "mWmA",
        model_0: "model_patch",
    };

}
function info_hwvx_pc_model() {
    return {
        sec_id: "7iX0",
        u16_0: u16(o + 0),
        //check this
        u16_2: {
            a: null
        },
        section_8: {
            s: 0
        },
        section_12: ["Q8UA"],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function info_hwvx_pc_model_gc_8() {
    return {
        sec_id: "49_D",
        u8_3: 0,
        section_8: ["bzYZ"],
        section_12: ["qgcH"],
        section_16: ["LFg="],
        unordered_hwvx_pc_model_gc_8_20_20: 0,
    };

}
function info_hwvx_pc_model_gc_8_8() {
    return {
        sec_id: "bzYZ",
        animation_0: "animation_patch",
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_12: ["N6sV"],
        u32_16: 0,
        u32_20: 0,
        texture_24: "texture_patch",
        unordered_hwvx_pc_model_gc_8_8_28_28: 0,
    };

}
function info_hwvx_pc_model_gc_8_8_12() {
    return {
        sec_id: "N6sV",
    };

}
function info_hwvx_pc_model_gc_8_12() {
    return {
        sec_id: "qgcH",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_pc_model_gc_8_16sec1() {
    return {
        sec_id: "sh0M",
        f32_0: 0,
    };

}
function info_hwvx_pc_model_gc_8_16() {
    return {
        sec_id: "LFg=",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
    };

}
function info_hwvx_pc_model_ps2_8() {
    return {
        sec_id: "4qqw",
        u8_0: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["CSz^"],
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        unordered_hwvx_pc_model_ps2_8_20_20: 0,
    };

}
function info_hwvx_pc_model_ps2_8_8() {
    return {
        sec_id: "CSz^",
        animation_0: "animation_patch",
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        unordered_hwvx_pc_model_ps2_8_8_12_12: 0,
        u32_16: 0,
        u32_20: 0,
        texture_24: "texture_patch",
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function info_hwvx_pc_model_pc_8() {
    return {
        sec_id: "UTX:",
        u8_2: 0,
        section_8: ["<9^0"],
        section_12: ["VMfD"],
        section_16: ["Lp_B"],
        unordered_hwvx_pc_model_string_20: 0,
    };

}
function info_hwvx_pc_model_pc_8_8() {
    return {
        sec_id: "<9^0",
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_12: ["PXaM"],
        u32_16: 0,
        u32_20: 0,
        texture_24: "texture_patch",
        unordered_hwvx_pc_model_pc_8_8_28_28: 0,
    };

}
function info_hwvx_pc_model_pc_8_8_12() {
    return {
        sec_id: "PXaM",
    };

}
function info_hwvx_pc_model_pc_8_12_type_a() {
    return {
        sec_id: "VMfD",
        unordered_hwvx_pc_model_pc_8_12_type_a_0_0: 0,
        unordered_hwvx_pc_model_pc_8_12_type_a_4_4: 0,
        unordered_hwvx_pc_model_pc_8_12_type_a_8_8: 0,
        unordered_hwvx_pc_model_pc_8_12_type_a_12_12: 0,
    };

}
function info_hwvx_pc_model_pc_8_16() {
    return {
        sec_id: "Lp_B",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
    };

}
function info_hwvx_pc_model_12() {
    return {
        sec_id: "Q8UA",
        f32_0: 0,
    };

}
function info_hwvx_pc_texture_anims() {
    return {
        sec_id: "@2Uu",
        section_0: ["change this"],
    };

}
function info_hwvx_pc_model_anims_1() {
    return {
        sec_id: "[m@P",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: {
            a: null
        },
        u32_20: 0,
        unordered_hwvx_pc_model_anims_1_24_24: 0,
        section_28: ["L2=n"],
        unordered_hwvx_pc_model_anims_1_32_32: 0,
        section_36: ["De[c"],
        u32_40: 0,
        section_44: ["8ebo"],
        u32_48: {
            a: null
        },
        u8_52: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        u8_56: 0,
        u8_57: 0,
        u8_58: 0,
        u8_59: 0,
        u8_60: 0,
        u8_61: 0,
        u8_62: 0,
        u8_63: 0,
    };

}
function info_hwvx_pc_model_anims_1_28() {
    return {
        sec_id: "L2=n",
        u16_0: 0,
    };

}
function info_hwvx_pc_model_anims_1_36() {
    return {
        sec_id: "De[c",
        section_0: ["Pac-Kart"],
    };

}
function info_hwvx_pc_model_anims_1_44() {
    return {
        sec_id: "8ebo",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function info_hwvx_pc_model_anims_2() {
    return {
        sec_id: "9Dh0",
        u32_0: {
            a: null
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_16: ["J6YM"],
    };

}
function info_hwvx_pc_model_anims_2_16() {
    return {
        sec_id: "J6YM",
        f32_0: 0,
        f32_4: 0,
        u32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function info_hwvx_pc_texture() {
    return {
        sec_id: "w_ld",
        u16_0: u16(o + 0),
        //check this
        u16_2: 0,
        u16_4: 0,
        u16_6: 0,
        unordered_hwvx_pc_texture_data_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_pc_share_end() {
    return {
        sec_id: "v=q<",
        section_0: ["Pac-Kart"],
        u32_4: {
            a: null
        },
        section_8: ["eU1@"],
        u32_12: {
            a: null
        },
        section_16: ["8Taq"],
    };

}
function info_hwvx_pc_share_end_8() {
    return {
        sec_id: "eU1@",
        texture_0: "texture_patch",
    };

}
function info_hwvx_pc_share_end_16() {
    return {
        sec_id: "8Taq",
        sound_0: "sound_patch",
    };

}
function info_hwvx_pc_world_text_link() {
    return {
        sec_id: "MADG",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_8: 0,
        section_12: ["change this"],
        section_16: ["change this"],
        section_20: ["change this"],
        section_24: ["change this"],
    };

}
function info_hwvx_pc_model_car_sound_link() {
    return {
        sec_id: "oo5d",
        model_0: "model_patch",
        u8_5: 0,
        unordered_hwvx_pc_car_link_16: 0,
        u32_24: 0,
        section_28: ["=fbU"],
    };

}
function info_hwvx_pc_model_car_sound_link_28() {
    return {
        sec_id: "=fbU",
        u8_16: 0,
        unordered_hwvx_pc_sound_controls_24: 0,
    };

}
function info_hwvx_pc_world_color_section() {
    return {
        sec_id: "aFli",
        u32_0: {
            a: null
        },
        section_4: ["OyRE"],
    };

}
function info_hwvx_pc_world_color_section_4() {
    return {
        sec_id: "OyRE",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_world_idk() {
    return {
        sec_id: "eugV",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: {
            a: null
        },
        section_48: ["8j8v"],
    };

}
function info_hwvx_pc_world_idk_48() {
    return {
        sec_id: "8j8v",
        unordered_hwvx_pc_some_world_thing_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["Rfa7"],
    };

}
function info_hwvx_pc_world_idk_48_8() {
    return {
        sec_id: "Rfa7",
        unordered_hwvx_pc_some_world_thing_0: 0,
        u32_4: 0,
        section_8: ["]Pkr"],
    };

}
function info_hwvx_pc_world_idk_48_8_8() {
    return {
        sec_id: "]Pkr",
        unordered_hwvx_pc_some_world_thing_0: 0,
    };

}
function info_hwvx_pc_some_world_thing() {
    return {
        sec_id: "P9kZ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_5: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_52: 0,
        u32_64: 0,
        u32_68: 0,
        section_88: ["[LuX"],
        section_116: ["Pac-Kart"],
    };

}
function info_hwvx_pc_some_world_thing_88() {
    return {
        sec_id: "[LuX",
        u8_2: 0,
        u16_6: 0,
    };

}
function info_hwvx_pc_world_small_section() {
    return {
        sec_id: "EU_i",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        f32_8: 0,
        section_12: ["LcQw"],
    };

}
function info_hwvx_pc_world_small_section_12() {
    return {
        sec_id: "LcQw",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_hwvx_pc_world_model_related() {
    return {
        sec_id: "s7s<",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        f32_8: 0,
        section_12: ["change this"],
        section_16: ["change this"],
        section_20: ["change this"],
        u32_24: {
            a: null
        },
        section_28: ["change this"],
    };

}
function info_hwvx_pc_geo_list() {
    return {
        sec_id: "8[Hz",
        u32_0: {
            a: null
        },
        section_4: ["9=zw"],
    };

}
function info_hwvx_pc_geo_list_4() {
    return {
        sec_id: "9=zw",
        u32_0: {
            a: null
        },
        section_4: ["WU;K"],
        section_8: ["?DFi"],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        section_16: ["6suT"],
    };

}
function info_hwvx_pc_geo_list_4_8() {
    return {
        sec_id: "?DFi",
        f32_0: 0,
    };

}
function info_hwvx_pc_geo_list_4_4() {
    return {
        sec_id: "WU;K",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_pc_geo_list_4_16() {
    return {
        sec_id: "6suT",
        u8_0: 0,
    };

}
function info_hwvx_pc_collision_settings() {
    return {
        sec_id: "x:>N",
        u8_0: 0,
        u8_1: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_pc_unknown_48: 0,
        unordered_hwvx_pc_unknown_thing_52: 0,
        unordered_hwvx_pc_sound_section_60: 0,
        unordered_hwvx_pc_unknown_64: 0,
        u32_68: {
            a: null
        },
        section_72: ["GyBQ"],
        u32_76: {
            a: null
        },
        section_80: ["GyBQ"],
    };

}
function info_hwvx_pc_collision_settings_72() {
    return {
        sec_id: "GyBQ",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_car() {
    return {
        sec_id: "7Fjr",
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u32_20: 0,
        u32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        texture_68: "texture_patch",
        unordered_hwvx_pc_model_anims_1_72: 0,
        unordered_hwvx_pc_model_anims_2_76: 0,
        texture_80: "texture_patch",
        model_84: "model_patch",
        unordered_hwvx_pc_sound_section_92: 0,
        unordered_hwvx_pc_sound_section_96: 0,
        unordered_hwvx_pc_sound_section_100: 0,
        section_108: ["hQfb"],
        section_120: ["EZIQ"],
        section_124: ["BJzR"],
        section_128: [":cKe"],
        section_132: ["4R^H"],
        section_136: ["SLy_"],
        section_140: ["]w><"],
        unordered_hwvx_pc_car_related_144: 0,
        unordered_hwvx_pc_car_related_148: 0,
        unordered_hwvx_pc_car_related_152: 0,
        unordered_hwvx_pc_car_related_156: 0,
        unordered_hwvx_pc_car_link_160: 0,
        section_164: ["h?>h"],
        section_172: ["JB2T"],
        unordered_hwvx_pc_unknown_176: 0,
        u32_208: {
            a: null
        },
        section_212: ["KTBx"],
        u32_216: {
            a: null
        },
        section_220: ["n?=<"],
        u32_224: {
            a: null
        },
        section_228: ["5F7:"],
        u32_232: {
            a: null
        },
        section_236: ["5F7:"],
        u32_248: 0,
        section_252: ["eeqI"],
        u32_256: 0,
        section_260: ["og:n"],
        u32_264: 0,
        section_268: ["Dzpl"],
        u32_280: {
            a: null
        },
        section_284: ["n?=<"],
    };

}
function info_hwvx_pc_car_108() {
    return {
        sec_id: "hQfb",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_car_120() {
    return {
        sec_id: "EZIQ",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        unordered_hwvx_pc_model_link_16: 0,
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
    };

}
function info_hwvx_pc_car_124() {
    return {
        sec_id: "BJzR",
        f32_0: 0,
        f32_4: 0,
        f32_12: 0,
    };

}
function info_hwvx_pc_car_128() {
    return {
        sec_id: ":cKe",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        f32_20: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_92: 0,
        unordered_hwvx_pc_model_anims_2_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        u32_128: {
            a: null
        },
        section_132: ["d[9p"],
        u32_136: {
            a: null
        },
        section_140: ["d[9p"],
        section_144: ["DZps"],
    };

}
function info_hwvx_pc_car_128_132() {
    return {
        sec_id: "d[9p",
        u8_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_pc_car_128_132_4t0() {
    return {
        sec_id: "MlN:",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_car_128_132_4t4() {
    return {
        sec_id: "9>@X",
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_car_128_144() {
    return {
        sec_id: "DZps",
        section_4: ["ef=R"],
    };

}
function info_hwvx_pc_car_128_144_4() {
    return {
        sec_id: "ef=R",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_car_132() {
    return {
        sec_id: "4R^H",
        f32_4: 0,
        f32_8: 0,
        unordered_hwvx_pc_interface_16: 0,
        unordered_hwvx_pc_interface_24: 0,
        unordered_hwvx_pc_interface_28: 0,
        section_44: ["pbIx"],
        f32_52: 0,
    };

}
function info_hwvx_pc_car_132_44() {
    return {
        sec_id: "pbIx",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_car_136() {
    return {
        sec_id: "SLy_",
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        u32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_72: 0,
    };

}
function info_hwvx_pc_car_140() {
    return {
        sec_id: "]w><",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        u32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u32_52: {
            a: null
        },
        section_56: ["@^Ua"],
        u32_60: {
            a: null
        },
        section_64: ["zRSI"],
        unordered_hwvx_pc_text_72: 0,
        u32_76: {
            a: null
        },
        section_80: ["zRSI"],
        f32_84: 0,
    };

}
function info_hwvx_pc_car_140_56() {
    return {
        sec_id: "@^Ua",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_car_140_64() {
    return {
        sec_id: "zRSI",
        unordered_hwvx_pc_text_0: 0,
    };

}
function info_hwvx_pc_car_164() {
    return {
        sec_id: "h?>h",
        u32_4: 0,
        section_8: ["pZ_:"],
    };

}
function info_hwvx_pc_car_164_8() {
    return {
        sec_id: "pZ_:",
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_car_172() {
    return {
        sec_id: "JB2T",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_car_212() {
    return {
        sec_id: "KTBx",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_56: 0,
        u8_60: 0,
        u8_62: 0,
        u8_63: 0,
        u16_64: 0,
        u8_66: 0,
    };

}
function info_hwvx_pc_car_220() {
    return {
        sec_id: "n?=<",
        f32_0: 0,
        unordered_hwvx_pc_sound_section_4: 0,
    };

}
function info_hwvx_pc_car_228() {
    return {
        sec_id: "5F7:",
        unordered_hwvx_pc_model_anims_2_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["change this"],
    };

}
function info_hwvx_pc_car_252() {
    return {
        sec_id: "eeqI",
        section_4: ["d<Z6"],
    };

}
function info_hwvx_pc_car_252_4() {
    return {
        sec_id: "d<Z6",
        u32_0: 0,
        section_4: ["K?5t"],
    };

}
function info_hwvx_pc_car_252_4_4() {
    return {
        sec_id: "K?5t",
        u32_0: 0,
    };

}
function info_hwvx_pc_car_260() {
    return {
        sec_id: "og:n",
        u32_52: 0,
        section_56: ["R01L"],
    };

}
function info_hwvx_pc_car_260_56() {
    return {
        sec_id: "R01L",
    };

}
function info_hwvx_pc_car_268() {
    return {
        sec_id: "Dzpl",
    };

}
function info_hwvx_pc_car_related() {
    return {
        sec_id: "Jv>F",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: {
            a: null
        },
        section_48: ["7TM5"],
    };

}
function info_hwvx_pc_car_related_48() {
    return {
        sec_id: "7TM5",
        unordered_hwvx_pc_car_path_related_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["Y1j;"],
    };

}
function info_hwvx_pc_car_related_48_8() {
    return {
        sec_id: "Y1j;",
        unordered_hwvx_pc_car_path_related_0: 0,
    };

}
function info_hwvx_pc_car_path_related() {
    return {
        sec_id: "HFhM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_5: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_52: 0,
        u32_64: 0,
        u32_68: 0,
        section_88: ["y67c"],
        section_116: ["Pac-Kart"],
    };

}
function info_hwvx_pc_car_path_related_88() {
    return {
        sec_id: "y67c",
        u8_2: 0,
        u16_6: 0,
    };

}
function info_hwvx_pc_car_link() {
    return {
        sec_id: "uz0f",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u32_20: 0,
        u32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        unordered_hwvx_pc_car_unknown_link_48: 0,
        u32_52: {
            a: null
        },
        section_56: ["4U0;"],
        u32_60: 0,
        section_64: ["U4vm"],
        section_68: ["9Ojd"],
    };

}
function info_hwvx_pc_car_link_56() {
    return {
        sec_id: "4U0;",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_car_link_64() {
    return {
        sec_id: "U4vm",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_car_link_68() {
    return {
        sec_id: "9Ojd",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_hwvx_pc_car_unknown_link() {
    return {
        sec_id: "<D=[",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_pc_unknown_48: 0,
        unordered_hwvx_pc_sound_section_60: 0,
        unordered_hwvx_pc_unknown_64: 0,
        u32_68: {
            a: null
        },
        section_72: ["zeEf"],
        u32_76: {
            a: null
        },
        section_80: ["zeEf"],
    };

}
function info_hwvx_pc_car_unknown_link_72() {
    return {
        sec_id: "zeEf",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_model_link() {
    return {
        sec_id: "b0xQ",
        u32_0: 0,
        section_4: ["<k5r"],
        u32_8: {
            a: null
        },
        section_12: ["L@Xs"],
        unordered_hwvx_pc_model_anims_1_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_31: 0,
        section_32: ["?i?9"],
        section_36: ["V4T]"],
        u32_44: 0,
        section_48: ["st=p"],
        section_52: ["wQly"],
        section_56: ["492S"],
    };

}
function info_hwvx_pc_model_link_4() {
    return {
        sec_id: "<k5r",
        model_0: "model_patch",
    };

}
function info_hwvx_pc_model_link_12() {
    return {
        sec_id: "L@Xs",
        model_0: "model_patch",
        u32_4: 0,
    };

}
function info_hwvx_pc_model_link_32() {
    return {
        sec_id: "?i?9",
        f32_4: 0,
    };

}
function info_hwvx_pc_model_link_36() {
    return {
        sec_id: "V4T]",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_model_link_48() {
    return {
        sec_id: "st=p",
        u8_16: 0,
    };

}
function info_hwvx_pc_model_link_52() {
    return {
        sec_id: "wQly",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_model_link_56() {
    return {
        sec_id: "492S",
        u32_0: {
            a: null
        },
        section_4: ["PQhP"],
        unordered_hwvx_pc_model_anims_2_8: 0,
    };

}
function info_hwvx_pc_model_link_56_4() {
    return {
        sec_id: "PQhP",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        model_8: "model_patch",
        section_12: ["jb_T"],
        section_16: ["IHUi"],
    };

}
function info_hwvx_pc_model_link_56_4_12() {
    return {
        sec_id: "jb_T",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_model_link_56_4_16() {
    return {
        sec_id: "IHUi",
    };

}
function info_hwvx_pc_text() {
    return {
        sec_id: "^PC1",
        section_0: ["Pac-Kart"],
    };

}
function info_hwvx_pc_font() {
    return {
        sec_id: "BtPG",
        texture_0: "texture_patch",
        unordered_hwvx_pc_sound_section_4: 0,
        u32_8: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: ["=OMm"],
        u32_32: {
            a: null
        },
        section_36: ["oMJW"],
        f32_40: 0,
    };

}
function info_hwvx_pc_font_28() {
    return {
        sec_id: "=OMm",
        f32_0: 0,
    };

}
function info_hwvx_pc_font_36() {
    return {
        sec_id: "oMJW",
        u32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_mysterious() {
    return {
        sec_id: "Pydv",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u16_18: 0,
        f32_20: 0,
        section_24: {
            s: 0
        },
    };

}
function info_hwvx_pc_mysterious_24t6() {
    return {
        sec_id: "=o?j",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        texture_8: "texture_patch",
        u32_12: {
            a: null
        },
        section_16: ["k0iY"],
        u32_20: {
            a: null
        },
        section_24: ["k0iY"],
        u32_28: {
            a: null
        },
        section_32: ["hY?B"],
        section_36: ["[ClP"],
        section_40: ["zV<t"],
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function info_hwvx_pc_mysterious_24t6_16() {
    return {
        sec_id: "k0iY",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_mysterious_24t6_32() {
    return {
        sec_id: "hY?B",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_mysterious_24t6_36() {
    return {
        sec_id: "[ClP",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_mysterious_24t6_40() {
    return {
        sec_id: "zV<t",
        f32_8: 0,
        f32_16: 0,
    };

}
function info_hwvx_pc_mysterious_24t7() {
    return {
        sec_id: "[sZX",
        u8_32: 0,
        u8_33: 0,
        u32_36: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        u32_68: {
            a: null
        },
        section_72: ["xV]Y"],
        u32_76: 0,
        section_80: ["BNyM"],
        u32_84: 0,
        section_88: ["KcWa"],
    };

}
function info_hwvx_pc_mysterious_24t7_72() {
    return {
        sec_id: "xV]Y",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_mysterious_24t7_80() {
    return {
        sec_id: "BNyM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function info_hwvx_pc_mysterious_24t7_88() {
    return {
        sec_id: "KcWa",
        texture_0: "texture_patch",
    };

}
function info_hwvx_pc_mysterious_24t9() {
    return {
        sec_id: "HmOL",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        texture_20: "texture_patch",
        texture_24: "texture_patch",
        section_28: ["a<[>"],
        section_32: ["seH@"],
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        u32_40: 0,
        u32_44: 0,
        u8_48: 0,
    };

}
function info_hwvx_pc_mysterious_24t9_28() {
    return {
        sec_id: "a<[>",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_mysterious_24t9_32() {
    return {
        sec_id: "seH@",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_mysterious_24t10() {
    return {
        sec_id: "yf<j",
        u32_4: {
            a: null
        },
        section_8: ["LVG;"],
    };

}
function info_hwvx_pc_mysterious_24t10_8() {
    return {
        sec_id: "LVG;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        section_24: ["GCMk"],
    };

}
function info_hwvx_pc_mysterious_24t10_8_24() {
    return {
        sec_id: "GCMk",
        u8_1: 0,
        u8_4: 0,
        section_8: {
            s: 0
        },
        u32_12: {
            a: null
        },
        section_16: ["oR@@"],
        u32_20: {
            a: null
        },
        section_24: ["oR@@"],
        u32_28: {
            a: null
        },
        section_32: ["oY<2"],
        section_44: ["YGch"],
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function info_hwvx_pc_mysterious_24t10_8_24_16() {
    return {
        sec_id: "oR@@",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_mysterious_24t10_8_24_32() {
    return {
        sec_id: "oY<2",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_mysterious_24t10_8_24_44() {
    return {
        sec_id: "YGch",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_strange() {
    return {
        sec_id: "SeUk",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        f32_20: 0,
        u32_24: {
            a: null
        },
        section_28: ["0RVf"],
        unordered_hwvx_pc_sound_controls_32: 0,
    };

}
function info_hwvx_pc_strange_28() {
    return {
        sec_id: "0RVf",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_unknown() {
    return {
        sec_id: "Nxin",
        u32_0: {
            a: null
        },
        section_4: ["McWu"],
    };

}
function info_hwvx_pc_unknown_4() {
    return {
        sec_id: "McWu",
        u32_0: 0,
        section_4: {
            s: 0
        },
        section_8: {
            s: 0
        },
    };

}
function info_hwvx_pc_unknown_4_4t4() {
    return {
        sec_id: "1NM>",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: 0,
        section_28: ["n?3D"],
        unordered_hwvx_pc_sound_controls_32: 0,
    };

}
function info_hwvx_pc_unknown_4_4t4_28() {
    return {
        sec_id: "n?3D",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_unknown_4_8t1() {
    return {
        sec_id: "U]Qo",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        f32_36: 0,
        section_40: {
            s: 0
        },
        section_44: [";RF:"],
    };

}
function info_hwvx_pc_unknown_4_8t1_40t1() {
    return {
        sec_id: "2De^",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_unknown_4_8t1_40t2() {
    return {
        sec_id: "gLz:",
        f32_0: 0,
        f32_4: 0,
        u8_9: 0,
        section_12: {
            s: 0
        },
    };

}
function info_hwvx_pc_unknown_4_8t1_40t2_12t0() {
    return {
        sec_id: "E8nv",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_4_8t1_40t2_12t1() {
    return {
        sec_id: "FhYK",
        f32_0: 0,
        u8_16: 0,
    };

}
function info_hwvx_pc_unknown_4_8t1_40t2_12t2() {
    return {
        sec_id: "9kqe",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
    };

}
function info_hwvx_pc_unknown_4_8t1_44() {
    return {
        sec_id: ";RF:",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_unknown_4_8t5() {
    return {
        sec_id: "w<T^",
        u8_24: 0,
        u8_25: 0,
        section_28: ["JCe3"],
    };

}
function info_hwvx_pc_unknown_4_8t5_28() {
    return {
        sec_id: "JCe3",
        u32_0: 0,
        f32_8: 0,
        f32_16: 0,
    };

}
function info_hwvx_pc_unknown_thing() {
    return {
        sec_id: "e?22",
        u8_0: 0,
        u8_3: 0,
        section_4: {
            s: 0
        },
        u32_8: 0,
        u32_12: 0,
        f32_16: 0,
        u32_20: {
            a: null
        },
        section_24: [";89_"],
        u32_28: 0,
        section_32: ["xZCS"],
    };

}
function info_hwvx_pc_unknown_thing_4t0() {
    return {
        sec_id: "eWKC",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        unordered_hwvx_pc_sound_controls_24: 0,
        u32_32: {
            a: null
        },
        section_36: ["81tK"],
        u32_40: {
            a: null
        },
        section_44: ["XnWM"],
    };

}
function info_hwvx_pc_unknown_thing_4t0_36() {
    return {
        sec_id: "81tK",
        model_0: "model_patch",
    };

}
function info_hwvx_pc_unknown_thing_4t0_44() {
    return {
        sec_id: "XnWM",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_unknown_thing_4t1() {
    return {
        sec_id: "<5bC",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: {
            a: null
        },
        section_36: ["r^sH"],
        u32_40: {
            a: null
        },
        section_44: ["ffDE"],
    };

}
function info_hwvx_pc_unknown_thing_4t1_36() {
    return {
        sec_id: "r^sH",
        texture_0: "texture_patch",
    };

}
function info_hwvx_pc_unknown_thing_4t1_44() {
    return {
        sec_id: "ffDE",
        f32_0: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_thing_4t2() {
    return {
        sec_id: "VHxw",
        u8_0: 0,
        u8_1: 0,
        f32_4: 0,
        f32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["JF0;"],
        u32_20: {
            a: null
        },
        section_24: ["sQ5X"],
    };

}
function info_hwvx_pc_unknown_thing_4t2_16() {
    return {
        sec_id: "JF0;",
        f32_0: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_thing_4t2_24() {
    return {
        sec_id: "sQ5X",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_thing_24() {
    return {
        sec_id: ";89_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_thing_32() {
    return {
        sec_id: "xZCS",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_asdf() {
    return {
        sec_id: "7XAL",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u8_8: 0,
        section_12: {
            s: 0
        },
        model_16: "model_patch",
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        u32_56: 0,
        f32_60: 0,
        f32_64: 0,
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        f32_72: 0,
        f32_76: 0,
        u32_84: 0,
        texture_92: "texture_patch",
        unordered_hwvx_pc_unknown_112: 0,
        unordered_hwvx_pc_unknown_116: 0,
        unordered_hwvx_pc_unknown_120: 0,
        u32_140: {
            a: null
        },
        section_144: ["LG>d"],
        u32_148: {
            a: null
        },
        section_152: ["]Bz4"],
        u32_156: {
            a: null
        },
        section_160: ["change this"],
        section_164: ["]6bl"],
        section_168: ["zSUy"],
        section_172: ["7:uu"],
    };

}
function info_hwvx_pc_asdf_12t1() {
    return {
        sec_id: "IZJx",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_hwvx_pc_asdf_12t2() {
    return {
        sec_id: "2nh]",
        f32_0: 0,
    };

}
function info_hwvx_pc_asdf_144() {
    return {
        sec_id: "LG>d",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_asdf_152() {
    return {
        sec_id: "]Bz4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_asdf_164() {
    return {
        sec_id: "]6bl",
        f32_0: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
    };

}
function info_hwvx_pc_asdf_168() {
    return {
        sec_id: "zSUy",
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_44: 0,
    };

}
function info_hwvx_pc_asdf_172() {
    return {
        sec_id: "7:uu",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_unknown_idk_sec() {
    return {
        sec_id: "7xDZ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: ["omVp"],
        section_32: ["mIEQ"],
        section_36: ["Qk6S"],
        section_40: ["tVDG"],
        u32_44: 0,
        section_48: ["DVnq"],
    };

}
function info_hwvx_pc_unknown_idk_sec_28() {
    return {
        sec_id: "omVp",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        unordered_hwvx_pc_unknown_24: 0,
        u32_28: 0,
    };

}
function info_hwvx_pc_unknown_idk_sec_32() {
    return {
        sec_id: "mIEQ",
        u8_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["F@go"],
    };

}
function info_hwvx_pc_unknown_idk_sec_32_8() {
    return {
        sec_id: "F@go",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_idk_sec_36() {
    return {
        sec_id: "Qk6S",
        u32_0: 0,
        section_4: ["U4:B"],
    };

}
function info_hwvx_pc_unknown_idk_sec_36_4() {
    return {
        sec_id: "U4:B",
        f32_0: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_unknown_idk_sec_40() {
    return {
        sec_id: "tVDG",
        u32_0: 0,
        section_4: ["0XIR"],
    };

}
function info_hwvx_pc_unknown_idk_sec_40_4() {
    return {
        sec_id: "0XIR",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_unknown_idk_sec_48() {
    return {
        sec_id: "DVnq",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_grand_section() {
    return {
        sec_id: "X4YZ",
        model_0: "model_patch",
        u8_5: 0,
        u8_6: 0,
        u8_10: 0,
        u8_11: 0,
        section_16: ["change this"],
        u32_24: 0,
        section_28: ["change this"],
    };

}
function info_hwvx_pc_unknown_whatever() {
    return {
        sec_id: "ch1T",
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        u32_12: {
            a: null
        },
        section_16: ["OiQ6"],
        u32_20: {
            a: null
        },
        section_24: ["jGiO"],
    };

}
function info_hwvx_pc_unknown_whatever_16() {
    return {
        sec_id: "OiQ6",
        f32_0: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_whatever_24() {
    return {
        sec_id: "jGiO",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_unknown_small_model_link() {
    return {
        sec_id: ">4Dm",
        u32_0: 0,
        u32_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["V<tN"],
    };

}
function info_hwvx_pc_unknown_small_model_link_12() {
    return {
        sec_id: "V<tN",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        model_28: "model_patch",
        unordered_hwvx_pc_unknown_link_section_32: 0,
    };

}
function info_hwvx_pc_unknown_link_section() {
    return {
        sec_id: "vhSy",
        u32_0: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: {
            a: null
        },
        section_28: ["12@v"],
    };

}
function info_hwvx_pc_unknown_link_section_28() {
    return {
        sec_id: "12@v",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_item() {
    return {
        sec_id: "6U;Y",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        unordered_hwvx_pc_text_32: 0,
        unordered_hwvx_pc_unknown_36: 0,
        unordered_hwvx_pc_unknown_44: 0,
        section_48: ["QiCE"],
        unordered_hwvx_pc_model_anims_2_52: 0,
        u32_56: {
            a: null
        },
        section_60: ["change this"],
    };

}
function info_hwvx_pc_item_48() {
    return {
        sec_id: "QiCE",
        section_0: ["@bCK"],
        unordered_hwvx_pc_text_16: 0,
        texture_24: "texture_patch",
        unordered_hwvx_pc_model_anims_2_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u8_44: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
        u32_48: 0,
        u8_52: 0,
        u8_53: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        f32_80: 0,
    };

}
function info_hwvx_pc_item_48_0() {
    return {
        sec_id: "@bCK",
        u32_8: {
            a: null
        },
        section_12: ["eU:n"],
        unordered_hwvx_pc_model_anims_1_16: 0,
        unordered_hwvx_pc_model_anims_2_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        section_32: ["5hOa"],
        section_36: ["oj_I"],
        section_40: ["A<W2"],
        u32_44: {
            a: null
        },
        section_48: ["change this"],
        section_52: ["BpEB"],
    };

}
function info_hwvx_pc_item_48_0_12() {
    return {
        sec_id: "eU:n",
        model_0: "model_patch",
        u16_4: 0,
    };

}
function info_hwvx_pc_item_48_0_32() {
    return {
        sec_id: "5hOa",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_item_48_0_36() {
    return {
        sec_id: "oj_I",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_item_48_0_40() {
    return {
        sec_id: "A<W2",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_item_48_0_52() {
    return {
        sec_id: "BpEB",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_sound_controls() {
    return {
        sec_id: "WxQT",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u32_8: {
            a: null
        },
        section_12: ["usZx"],
    };

}
function info_hwvx_pc_sound_controls_12() {
    return {
        sec_id: "usZx",
        f32_0: 0,
        u8_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["9Sj]"],
    };

}
function info_hwvx_pc_sound_controls_12_12() {
    return {
        sec_id: "9Sj]",
        unordered_hwvx_pc_sound_section_0: 0,
    };

}
function info_hwvx_pc_sound_section() {
    return {
        sec_id: "h]CS",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        sound_20: "sound_patch",
        section_24: ["@kyl"],
        u32_28: 0,
        section_32: ["5lG]"],
    };

}
function info_hwvx_pc_sound_section_24() {
    return {
        sec_id: "@kyl",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_sound_section_32() {
    return {
        sec_id: "5lG]",
        f32_0: 0,
        f32_12: 0,
    };

}
function info_hwvx_pc_world_settings() {
    return {
        sec_id: "MRbS",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        u32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        u32_64: 0,
        u32_68: 0,
        u32_72: 0,
        f32_88: 0,
        f32_92: 0,
        f32_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        f32_112: 0,
        f32_116: 0,
        texture_120: "texture_patch",
        texture_124: "texture_patch",
        texture_128: "texture_patch",
        texture_132: "texture_patch",
        texture_136: "texture_patch",
        texture_140: "texture_patch",
        texture_144: "texture_patch",
        texture_148: "texture_patch",
        texture_152: "texture_patch",
        section_156: ["change this"],
        section_160: ["Pac-Kart"],
        section_164: ["Pac-Kart"],
        section_192: ["0@I_"],
        section_196: ["W^vn"],
        unordered_hwvx_pc_font_200: 0,
        unordered_hwvx_pc_interface_204: 0,
        section_224: ["Y8pi"],
        section_228: ["cb?L"],
        u32_240: {
            a: null
        },
        section_244: ["MxQJ"],
        u32_248: {
            a: null
        },
        section_252: ["MxQJ"],
        section_272: ["Q8hJ"],
    };

}
function info_hwvx_pc_world_settings_192() {
    return {
        sec_id: "0@I_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_world_settings_196() {
    return {
        sec_id: "W^vn",
        u32_0: 0,
        u32_8: 0,
        u32_24: 0,
        section_28: ["NnQY"],
        unordered_hwvx_pc_sound_controls_32: 0,
    };

}
function info_hwvx_pc_world_settings_196_28() {
    return {
        sec_id: "NnQY",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_world_settings_224() {
    return {
        sec_id: "Y8pi",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_world_settings_228() {
    return {
        sec_id: "cb?L",
    };

}
function info_hwvx_pc_world_settings_244() {
    return {
        sec_id: "MxQJ",
        unordered_hwvx_pc_unknown_0: 0,
    };

}
function info_hwvx_pc_world_settings_272() {
    return {
        sec_id: "Q8hJ",
        section_4: ["ED?;"],
    };

}
function info_hwvx_pc_world_settings_272_4() {
    return {
        sec_id: "ED?;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_interface() {
    return {
        sec_id: ";5u1",
        u16_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["dTr="],
        u32_20: {
            a: null
        },
        section_24: ["llE9"],
        section_28: ["6D?u"],
        unordered_hwvx_pc_sound_controls_32: 0,
        unordered_hwvx_pc_sound_controls_36: 0,
        unordered_hwvx_pc_sound_controls_40: 0,
        unordered_hwvx_pc_sound_controls_44: 0,
        section_48: ["m?Hg"],
        u32_52: 0,
        f32_56: 0,
        u8_60: 0,
    };

}
function info_hwvx_pc_interface_16() {
    return {
        sec_id: "dTr=",
        u8_0: 0,
        u8_1: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u32_16: 0,
        section_20: {
            s: 0
        },
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        u8_40: 0,
        u8_41: 0,
        u8_42: 0,
        u8_43: 0,
        u8_44: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
        f32_48: 0,
        f32_52: 0,
        section_60: ["R:nq"],
        section_68: ["lQ71"],
        section_72: ["Tkt7"],
        section_96: ["bK:?"],
        u32_100: {
            a: null
        },
        section_104: ["h5vx"],
    };

}
function info_hwvx_pc_interface_16_20t0() {
    return {
        sec_id: ":pm=",
        u8_0: 0,
        u8_1: 0,
        texture_4: "texture_patch",
        section_16: ["q]Nf"],
    };

}
function info_hwvx_pc_interface_16_20t0_16() {
    return {
        sec_id: "q]Nf",
        u32_0: {
            a: null
        },
        section_4: ["gOrX"],
        u32_8: 0,
        u8_12: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function info_hwvx_pc_interface_16_20t0_16_4() {
    return {
        sec_id: "gOrX",
        texture_0: "texture_patch",
    };

}
function info_hwvx_pc_interface_16_20t1() {
    return {
        sec_id: "ZAy9",
        unordered_hwvx_pc_text_0: 0,
        unordered_hwvx_pc_font_4: 0,
        section_8: ["Kpo9"],
        u8_14: 0,
        u8_15: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        f32_24: 0,
    };

}
function info_hwvx_pc_interface_16_20t1_8() {
    return {
        sec_id: "Kpo9",
        u32_0: {
            a: null
        },
        section_4: ["M0nC"],
        u8_8: 0,
        u8_10: 0,
        u8_11: 0,
    };

}
function info_hwvx_pc_interface_16_20t1_8_4() {
    return {
        sec_id: "M0nC",
        unordered_hwvx_pc_text_0: 0,
    };

}
function info_hwvx_pc_interface_16_20t2() {
    return {
        sec_id: "D[kC",
        u32_0: {
            a: null
        },
        section_4: ["8]NM"],
    };

}
function info_hwvx_pc_interface_16_20t2_4() {
    return {
        sec_id: "8]NM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: ["Pac-Kart"],
        unordered_hwvx_pc_text_16: 0,
        unordered_hwvx_pc_interface_text_related_20: 0,
        u32_24: {
            a: null
        },
        section_28: ["WlGZ"],
    };

}
function info_hwvx_pc_interface_16_20t2_4_28() {
    return {
        sec_id: "WlGZ",
        u8_0: 0,
        section_4: ["E61g"],
    };

}
function info_hwvx_pc_interface_16_20t2_4_28_4() {
    return {
        sec_id: "E61g",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_interface_16_20t10() {
    return {
        sec_id: "if9m",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        unordered_hwvx_pc_font_16: 0,
    };

}
function info_hwvx_pc_interface_16_20t11() {
    return {
        sec_id: "is9G",
        u8_0: 0,
    };

}
function info_hwvx_pc_interface_16_60() {
    return {
        sec_id: "R:nq",
        unordered_hwvx_pc_interface_0: 0,
    };

}
function info_hwvx_pc_interface_16_68() {
    return {
        sec_id: "lQ71",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["^Swx"],
        u32_16: {
            a: null
        },
        section_20: ["YPDx"],
    };

}
function info_hwvx_pc_interface_16_68_12() {
    return {
        sec_id: "^Swx",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
    };

}
function info_hwvx_pc_interface_16_68_20() {
    return {
        sec_id: "YPDx",
        u8_0: 0,
        u32_4: 0,
        section_8: ["ANLl"],
    };

}
function info_hwvx_pc_interface_16_68_20_8() {
    return {
        sec_id: "ANLl",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: {
            s: 0
        },
        section_12: ["Pac-Kart"],
        unordered_hwvx_pc_sound_controls_20: 0,
        section_24: ["GqFT"],
        u32_28: 0,
        section_32: ["F[mB"],
        u32_36: 0,
    };

}
function info_hwvx_pc_interface_16_68_20_8_0t11() {
    return {
        sec_id: "V6Oh",
        u32_0: {
            a: null
        },
        section_4: ["X[a4"],
    };

}
function info_hwvx_pc_interface_16_68_20_8_0t11_4() {
    return {
        sec_id: "X[a4",
        u8_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_pc_interface_16_68_20_8_0t11_4_4t3() {
    return {
        sec_id: "EdB_",
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_16_68_20_8_8t15() {
    return {
        sec_id: "7VAU",
        section_0: ["zrKF"],
        section_4: ["oz89"],
    };

}
function info_hwvx_pc_interface_16_68_20_8_8t15_0() {
    return {
        sec_id: "zrKF",
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_16_68_20_8_8t15_4() {
    return {
        sec_id: "oz89",
        u8_0: 0,
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_16_68_20_8_8t17() {
    return {
        sec_id: "^juu",
        u8_0: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_interface_16_68_20_8_24() {
    return {
        sec_id: "GqFT",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function info_hwvx_pc_interface_16_68_20_8_32() {
    return {
        sec_id: "F[mB",
        u8_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function info_hwvx_pc_interface_16_72() {
    return {
        sec_id: "Tkt7",
        u8_0: 0,
        u32_4: {
            a: null
        },
        section_8: [":LtZ"],
    };

}
function info_hwvx_pc_interface_16_72_8() {
    return {
        sec_id: ":LtZ",
        u8_0: 0,
        u32_4: 0,
        section_8: ["A:iN"],
    };

}
function info_hwvx_pc_interface_16_72_8_8() {
    return {
        sec_id: "A:iN",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: ["U[_H"],
    };

}
function info_hwvx_pc_interface_16_72_8_8_4() {
    return {
        sec_id: "U[_H",
        u8_0: 0,
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_16_96() {
    return {
        sec_id: "bK:?",
        u32_0: {
            a: null
        },
        section_4: ["f8ur"],
        u32_8: {
            a: null
        },
        section_12: ["f8ur"],
        u32_16: {
            a: null
        },
        section_20: ["f8ur"],
        u32_24: {
            a: null
        },
        section_28: ["p=Is"],
        u32_32: {
            a: null
        },
        section_36: ["J@pY"],
    };

}
function info_hwvx_pc_interface_16_96_4() {
    return {
        sec_id: "f8ur",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_interface_16_96_28() {
    return {
        sec_id: "p=Is",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_interface_16_96_36() {
    return {
        sec_id: "J@pY",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        f32_36: 0,
    };

}
function info_hwvx_pc_interface_16_104() {
    return {
        sec_id: "h5vx",
        u8_0: 0,
        u32_4: 0,
        section_8: ["MCag"],
    };

}
function info_hwvx_pc_interface_16_104_8() {
    return {
        sec_id: "MCag",
        u32_0: {
            a: null
        },
        section_4: ["]WeR"],
        u32_8: {
            a: null
        },
        section_12: ["^olX"],
        u32_16: {
            a: null
        },
        section_20: ["yjO="],
        u32_24: {
            a: null
        },
        section_28: ["kBT?"],
        u32_32: {
            a: null
        },
        section_36: ["Mkj4"],
        u32_40: {
            a: null
        },
        section_44: ["ramv"],
        unordered_hwvx_pc_sound_controls_48: 0,
    };

}
function info_hwvx_pc_interface_16_104_8_4() {
    return {
        sec_id: "]WeR",
        u8_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_pc_interface_16_104_8_12() {
    return {
        sec_id: "^olX",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_interface_16_104_8_20() {
    return {
        sec_id: "yjO=",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_interface_16_104_8_28() {
    return {
        sec_id: "kBT?",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_interface_16_104_8_36() {
    return {
        sec_id: "Mkj4",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        u8_33: 0,
        f32_36: 0,
    };

}
function info_hwvx_pc_interface_16_104_8_44() {
    return {
        sec_id: "ramv",
        f32_0: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_hwvx_pc_interface_24() {
    return {
        sec_id: "llE9",
        u8_0: 0,
        u32_4: 0,
        section_8: ["8cj["],
    };

}
function info_hwvx_pc_interface_24_8() {
    return {
        sec_id: "8cj[",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: ["1mE^"],
        unordered_hwvx_pc_sound_section_20: 0,
        u32_28: 0,
        section_32: ["OMjB"],
        u32_36: 0,
    };

}
function info_hwvx_pc_interface_24_8_0t11() {
    return {
        sec_id: "ZA6O",
        u32_0: {
            a: null
        },
        section_4: ["2b>B"],
    };

}
function info_hwvx_pc_interface_24_8_0t11_4() {
    return {
        sec_id: "2b>B",
        u8_0: 0,
        section_4: ["U7Vg"],
    };

}
function info_hwvx_pc_interface_24_8_0t11_4_4() {
    return {
        sec_id: "U7Vg",
        section_0: ["T=Pm"],
        section_4: ["z^S1"],
    };

}
function info_hwvx_pc_interface_24_8_0t11_4_4_0() {
    return {
        sec_id: "T=Pm",
        u32_0: 0,
        section_4: ["]UNA"],
    };

}
function info_hwvx_pc_interface_24_8_0t11_4_4_0_4() {
    return {
        sec_id: "]UNA",
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_24_8_0t11_4_4_4() {
    return {
        sec_id: "z^S1",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_interface_24_8_8t17() {
    return {
        sec_id: "1mE^",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u32_16: 0,
        u32_20: 0,
        section_24: ["9ynB"],
    };

}
function info_hwvx_pc_interface_24_8_8t17_24() {
    return {
        sec_id: "9ynB",
        u32_0: 0,
    };

}
function info_hwvx_pc_interface_24_8_32() {
    return {
        sec_id: "OMjB",
        u8_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function info_hwvx_pc_interface_28() {
    return {
        sec_id: "6D?u",
        u32_0: {
            a: null
        },
        section_4: ["WPq8"],
    };

}
function info_hwvx_pc_interface_28_4() {
    return {
        sec_id: "WPq8",
        u8_0: 0,
        u8_1: 0,
        u16_2: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: ["ILv2"],
    };

}
function info_hwvx_pc_interface_28_4_16() {
    return {
        sec_id: "ILv2",
        u32_0: 0,
        section_4: ["yNAf"],
    };

}
function info_hwvx_pc_interface_28_4_16_4() {
    return {
        sec_id: "yNAf",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_interface_48() {
    return {
        sec_id: "m?Hg",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_pc_interface_unknown() {
    return {
        sec_id: "lt@9",
        section_0: ["umJB"],
        section_4: ["KCs;"],
    };

}
function info_hwvx_pc_interface_unknown_0() {
    return {
        sec_id: "umJB",
        u32_0: 0,
        section_4: ["I3WJ"],
    };

}
function info_hwvx_pc_interface_unknown_0_4() {
    return {
        sec_id: "I3WJ",
        u8_0: 0,
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_unknown_4() {
    return {
        sec_id: "KCs;",
        u8_0: 0,
        u16_2: 0,
    };

}
function info_hwvx_pc_interface_text_related() {
    return {
        sec_id: "EjH9",
        unordered_hwvx_pc_text_0: 0,
        unordered_hwvx_pc_font_8: 0,
        section_12: ["[X_S"],
        u32_16: {
            a: null
        },
        section_20: ["=YxD"],
        u32_24: {
            a: null
        },
        section_28: ["=YxD"],
        u32_44: {
            a: null
        },
        section_48: ["=YxD"],
        section_52: ["qU9>"],
    };

}
function info_hwvx_pc_interface_text_related_12() {
    return {
        sec_id: "[X_S",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_pc_interface_text_related_20() {
    return {
        sec_id: "=YxD",
        u32_0: {
            a: null
        },
        section_4: ["WBd7"],
        u32_8: 0,
    };

}
function info_hwvx_pc_interface_text_related_20_4() {
    return {
        sec_id: "WBd7",
        texture_0: "texture_patch",
    };

}
function info_hwvx_pc_interface_text_related_52() {
    return {
        sec_id: "qU9>",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_link() {
    return {
        sec_id: "vt;Z",
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
        section_12: ["Pac-Kart"],
        section_16: ["Pac-Kart"],
        texture_20: "texture_patch",
        texture_24: "texture_patch",
        section_36: ["m>6O"],
        u32_40: 0,
        u32_44: {
            a: null
        },
        section_48: ["apsD"],
        u32_52: {
            a: null
        },
        section_56: ["J_lu"],
        u32_60: {
            a: null
        },
        section_64: [";r>i"],
    };

}
function info_hwvx_pc_link_36() {
    return {
        sec_id: "m>6O",
        u8_0: 0,
        u32_4: 0,
        section_8: ["nVd;"],
    };

}
function info_hwvx_pc_link_36_8() {
    return {
        sec_id: "nVd;",
        u32_0: {
            a: null
        },
        section_4: [">8x;"],
    };

}
function info_hwvx_pc_link_36_8_4() {
    return {
        sec_id: ">8x;",
        section_8: ["WA6S"],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: ["gi^r"],
        u32_24: 0,
        section_28: [":MNf"],
    };

}
function info_hwvx_pc_link_36_8_4_8() {
    return {
        sec_id: "WA6S",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_pc_link_36_8_4_20() {
    return {
        sec_id: "gi^r",
        u16_8: 0,
    };

}
function info_hwvx_pc_link_36_8_4_28() {
    return {
        sec_id: ":MNf",
    };

}
function info_hwvx_pc_link_48() {
    return {
        sec_id: "apsD",
        u8_0: 0,
        section_4: ["Pac-Kart"],
        section_8: ["jQNS"],
    };

}
function info_hwvx_pc_link_48_8() {
    return {
        sec_id: "jQNS",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_pc_link_56() {
    return {
        sec_id: "J_lu",
        section_0: ["Gm;v"],
    };

}
function info_hwvx_pc_link_56_0() {
    return {
        sec_id: "Gm;v",
        u32_0: {
            a: null
        },
        section_4: ["<>B;"],
    };

}
function info_hwvx_pc_link_56_0_4() {
    return {
        sec_id: "<>B;",
        u32_0: {
            a: null
        },
        section_4: ["gldE"],
        section_8: [">0qA"],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: ["dNb?"],
        u32_24: 0,
        section_28: ["O^;<"],
    };

}
function info_hwvx_pc_link_56_0_4_4() {
    return {
        sec_id: "gldE",
        u8_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_pc_link_56_0_4_4_4() {
    return {
        sec_id: "wgj]",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_pc_link_56_0_4_8() {
    return {
        sec_id: ">0qA",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_pc_link_56_0_4_20() {
    return {
        sec_id: "dNb?",
        u32_0: {
            a: null
        },
        section_4: [":7]c"],
        u16_8: 0,
    };

}
function info_hwvx_pc_link_56_0_4_20_4() {
    return {
        sec_id: ":7]c",
        u8_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_pc_link_56_0_4_20_4_4() {
    return {
        sec_id: "9fy?",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_pc_link_56_0_4_28() {
    return {
        sec_id: "O^;<",
    };

}
function info_hwvx_pc_link_64() {
    return {
        sec_id: ";r>i",
        section_0: ["XbZm"],
    };

}
function info_hwvx_pc_link_64_0() {
    return {
        sec_id: "XbZm",
        section_0: [">X0g"],
    };

}
function info_hwvx_pc_link_64_0_0() {
    return {
        sec_id: ">X0g",
        section_0: ["0fEE"],
        section_4: ["BiTC"],
        section_8: ["LlZ4"],
    };

}
function info_hwvx_pc_link_64_0_0_0() {
    return {
        sec_id: "0fEE",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_15: 0,
    };

}
function info_hwvx_pc_link_64_0_0_4() {
    return {
        sec_id: "BiTC",
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_7: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
    };

}
function info_hwvx_pc_link_64_0_0_8() {
    return {
        sec_id: "LlZ4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function info_hwvx_pc_texture_anims_0() {
    return {
        sec_id: "BSWG",
        u32_4: {
            a: null
        },
        section_8: [":KKi"],
        u32_12: {
            a: null
        },
        section_16: ["PPT7"],
        section_20: ["L:FW"],
    };

}
function info_hwvx_pc_texture_anims_0_8() {
    return {
        sec_id: ":KKi",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_hwvx_pc_texture_anims_0_16() {
    return {
        sec_id: "PPT7",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
    };

}
function info_hwvx_pc_texture_anims_0_20() {
    return {
        sec_id: "L:FW",
        u32_0: {
            a: null
        },
        section_4: ["wBx]"],
        u32_8: 0,
    };

}
function info_hwvx_pc_texture_anims_0_20_4() {
    return {
        sec_id: "wBx]",
        texture_0: "texture_patch",
    };

}

/* end info list */
/////////////////////
/* start export list */
function ex_hwvx_pc_x(o, x) {
    console.pk_log("save not finished")

    return null

    g = {
        divisibility: 16,
        divisible_prev_value: [],
        type_string: g.type_string,
        debug: pk_debug,
        endian: g.endian,
        file_dir_type: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        tex_anims: 0,
        hwvx_pc_world_12_array: [],
        hwvx_pc_world_20_array: [],
        hwvx_pc_world_36_48_array: [],
        hwvx_pc_Airbox_array: [],
        hwvx_pc_world_36_36_array: [],
        hwvx_pc_world_36_48_16_array: [],
        hwvx_pc_world_36_48_24_array: [],
        hwvx_pc_world_76_array: [],
        hwvx_pc_world_52_array: [],
        hwvx_pc_world_108_array: [],
        hwvx_pc_world_108_44t6_array: [],
        hwvx_pc_world_routes_array: [],
        hwvx_pc_triggers_and_actions_array: [],
        hwvx_pc_collision_related_array: [],
        hwvx_pc_collision_link_array: [],
        hwvx_pc_model_array: [],
        hwvx_pc_texture_anims_array: [],
        hwvx_pc_model_anims_1_array: [],
        hwvx_pc_model_anims_2_array: [],
        hwvx_pc_world_text_link_array: [],
        hwvx_pc_model_car_sound_link_array: [],
        hwvx_pc_world_color_section_array: [],
        hwvx_pc_world_idk_array: [],
        hwvx_pc_some_world_thing_array: [],
        hwvx_pc_world_small_section_array: [],
        hwvx_pc_world_model_related_array: [],
        hwvx_pc_geo_list_array: [],
        hwvx_pc_collision_settings_array: [],
        hwvx_pc_car_array: [],
        hwvx_pc_car_related_array: [],
        hwvx_pc_car_path_related_array: [],
        hwvx_pc_car_link_array: [],
        hwvx_pc_car_unknown_link_array: [],
        hwvx_pc_model_link_array: [],
        hwvx_pc_text_array: [],
        hwvx_pc_font_array: [],
        hwvx_pc_mysterious_array: [],
        hwvx_pc_strange_array: [],
        hwvx_pc_unknown_array: [],
        hwvx_pc_unknown_thing_array: [],
        hwvx_pc_asdf_array: [],
        hwvx_pc_unknown_idk_sec_array: [],
        hwvx_pc_grand_section_array: [],
        hwvx_pc_unknown_whatever_array: [],
        hwvx_pc_unknown_small_model_link_array: [],
        hwvx_pc_unknown_link_section_array: [],
        hwvx_pc_item_array: [],
        hwvx_pc_sound_controls_array: [],
        hwvx_pc_sound_section_array: [],
        hwvx_pc_world_settings_array: [],
        hwvx_pc_interface_array: [],
        hwvx_pc_interface_unknown_array: [],
        hwvx_pc_interface_text_related_array: [],
        hwvx_pc_link_array: [],
        hwvx_pc_texture_anims_0_array: [],
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    ex_hwvx_pc_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_hwvx_pc_file_header(o, x) {
    let e = o + 16
    su32(0, x.u32_0)
    su32(4, x.u32_4)
    su32(8, x.u32_8)
    su32(12, x[0].directory.length)

    let global = ((x[0].directory.length) * 24) + 16
    e = e + (x[0].directory.length * 24)

    let time_array = []
    for (let i = 0; i < x[0].directory.length; i++) {
        let a = Date.now()

        e = ex_hwvx_pc_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_pc_directory(o, e, x, global) {
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    g.hwvx_pc_world_12_array = []
    g.hwvx_pc_world_20_array = []
    g.hwvx_pc_world_36_48_array = []
    g.hwvx_pc_Airbox_array = []
    g.hwvx_pc_world_36_36_array = []
    g.hwvx_pc_world_36_48_16_array = []
    g.hwvx_pc_world_36_48_24_array = []
    g.hwvx_pc_world_76_array = []
    g.hwvx_pc_world_52_array = []
    g.hwvx_pc_world_108_array = []
    g.hwvx_pc_world_108_44t6_array = []
    g.hwvx_pc_world_routes_array = []
    g.hwvx_pc_triggers_and_actions_array = []
    g.hwvx_pc_collision_related_array = []
    g.hwvx_pc_collision_link_array = []
    g.hwvx_pc_model_array = []
    g.hwvx_pc_texture_anims_array = []
    g.hwvx_pc_model_anims_1_array = []
    g.hwvx_pc_model_anims_2_array = []
    g.hwvx_pc_world_text_link_array = []
    g.hwvx_pc_model_car_sound_link_array = []
    g.hwvx_pc_world_color_section_array = []
    g.hwvx_pc_world_idk_array = []
    g.hwvx_pc_some_world_thing_array = []
    g.hwvx_pc_world_small_section_array = []
    g.hwvx_pc_world_model_related_array = []
    g.hwvx_pc_geo_list_array = []
    g.hwvx_pc_collision_settings_array = []
    g.hwvx_pc_car_array = []
    g.hwvx_pc_car_related_array = []
    g.hwvx_pc_car_path_related_array = []
    g.hwvx_pc_car_link_array = []
    g.hwvx_pc_car_unknown_link_array = []
    g.hwvx_pc_model_link_array = []
    g.hwvx_pc_text_array = []
    g.hwvx_pc_font_array = []
    g.hwvx_pc_mysterious_array = []
    g.hwvx_pc_strange_array = []
    g.hwvx_pc_unknown_array = []
    g.hwvx_pc_unknown_thing_array = []
    g.hwvx_pc_asdf_array = []
    g.hwvx_pc_unknown_idk_sec_array = []
    g.hwvx_pc_grand_section_array = []
    g.hwvx_pc_unknown_whatever_array = []
    g.hwvx_pc_unknown_small_model_link_array = []
    g.hwvx_pc_unknown_link_section_array = []
    g.hwvx_pc_item_array = []
    g.hwvx_pc_sound_controls_array = []
    g.hwvx_pc_sound_section_array = []
    g.hwvx_pc_world_settings_array = []
    g.hwvx_pc_interface_array = []
    g.hwvx_pc_interface_unknown_array = []
    g.hwvx_pc_interface_text_related_array = []
    g.hwvx_pc_link_array = []
    g.hwvx_pc_texture_anims_0_array = []

    let ce = e
    g.file_dir_type = return_directory_type(x.u32_4)

    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 20, e - global)
    switch (x.u32_4) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        e = ex_hwvx_pc_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    case 7:
        e = ex_hwvx_pc_geo_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    }

    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + patch_buffer.byteLength + ordered_buffer.byteLength)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_pc_ordered(o, x) {
    globalThis.ordered_buffer = new ArrayBuffer(268435455)

    buffer_array.push(ordered_buffer)
    dynamic_buffer = ordered_buffer

    let aftero = o
    let e = o
    o = 0
    g.m = o
    g.unordered_ref = x.unordered[0]
    g.ordered_ref = x

    ex_hwvx_pc_unordered(x.unordered[0])

    switch (g.file_dir_type) {

    case "car":
        e = ex_hwvx_pc_basic(o, x.hwvx_pc_file_specific_section[0])
        break

    case "interface":
        e = ex_hwvx_pc_basic(o, x.hwvx_pc_file_specific_section[0])
        break

    case "item":
        e = ex_hwvx_pc_basic(o, x.hwvx_pc_file_specific_section[0])
        break

    case "link":
        e = ex_hwvx_pc_basic(o, x.hwvx_pc_file_specific_section[0])
        break

    case "world":
        e = ex_hwvx_pc_world(o, x.hwvx_pc_file_specific_section[0])
        break

    case "colliders":
        e = ex_hwvx_pc_collision(o, x.hwvx_pc_file_specific_section[0])
        break

    case "geometry":
        e = ex_hwvx_pc_geo_basic(o, x.hwvx_pc_file_specific_section[0])
        break

    case "share":
        e = ex_hwvx_pc_share(o, x.hwvx_pc_file_specific_section[0])
        break

    case "audio":
        e = ex_hwvx_pc_basic(o, x.hwvx_pc_file_specific_section[0])
        break

    case "music":
        e = ex_hwvx_pc_basic(o, x.hwvx_pc_file_specific_section[0])
        break
    default:
        console.pk_log('file type is not set')
    }

    let current_patch_list_divis = divisible(g.divisible_prev_value[0], g.divisible_prev_value[1])
    let patch_list_divis = divisible(g.divisible_prev_value[0] + 1, 4)
    e -= current_patch_list_divis
    e += patch_list_divis

    ordered_buffer = ordered_buffer.slice(0, e)

    buffer_array[buffer_array.length - 1] = ordered_buffer

    return e + aftero
}
function ex_hwvx_pc_unordered(x) {
    generate_id_offset_array(g.hwvx_pc_world_12_array = [], x.hwvx_pc_world_12)
    generate_id_offset_array(g.hwvx_pc_world_20_array = [], x.hwvx_pc_world_20)
    generate_id_offset_array(g.hwvx_pc_world_36_48_array = [], x.hwvx_pc_world_36_48)
    generate_id_offset_array(g.hwvx_pc_Airbox_array = [], x.hwvx_pc_Airbox)
    generate_id_offset_array(g.hwvx_pc_world_36_36_array = [], x.hwvx_pc_world_36_36)
    generate_id_offset_array(g.hwvx_pc_world_36_48_16_array = [], x.hwvx_pc_world_36_48_16)
    generate_id_offset_array(g.hwvx_pc_world_36_48_24_array = [], x.hwvx_pc_world_36_48_24)
    generate_id_offset_array(g.hwvx_pc_world_76_array = [], x.hwvx_pc_world_76)
    generate_id_offset_array(g.hwvx_pc_world_52_array = [], x.hwvx_pc_world_52)
    generate_id_offset_array(g.hwvx_pc_world_108_array = [], x.hwvx_pc_world_108)
    generate_id_offset_array(g.hwvx_pc_world_108_44t6_array = [], x.hwvx_pc_world_108_44t6)
    generate_id_offset_array(g.hwvx_pc_world_routes_array = [], x.hwvx_pc_world_routes)
    generate_id_offset_array(g.hwvx_pc_triggers_and_actions_array = [], x.hwvx_pc_triggers_and_actions)
    generate_id_offset_array(g.hwvx_pc_collision_related_array = [], x.hwvx_pc_collision_related)
    generate_id_offset_array(g.hwvx_pc_collision_link_array = [], x.hwvx_pc_collision_link)
    generate_id_offset_array(g.hwvx_pc_model_array = [], x.hwvx_pc_model)
    generate_id_offset_array(g.hwvx_pc_texture_anims_array = [], x.hwvx_pc_texture_anims)
    generate_id_offset_array(g.hwvx_pc_model_anims_1_array = [], x.hwvx_pc_model_anims_1)
    generate_id_offset_array(g.hwvx_pc_model_anims_2_array = [], x.hwvx_pc_model_anims_2)
    generate_id_offset_array(g.hwvx_pc_world_text_link_array = [], x.hwvx_pc_world_text_link)
    generate_id_offset_array(g.hwvx_pc_model_car_sound_link_array = [], x.hwvx_pc_model_car_sound_link)
    generate_id_offset_array(g.hwvx_pc_world_color_section_array = [], x.hwvx_pc_world_color_section)
    generate_id_offset_array(g.hwvx_pc_world_idk_array = [], x.hwvx_pc_world_idk)
    generate_id_offset_array(g.hwvx_pc_some_world_thing_array = [], x.hwvx_pc_some_world_thing)
    generate_id_offset_array(g.hwvx_pc_world_small_section_array = [], x.hwvx_pc_world_small_section)
    generate_id_offset_array(g.hwvx_pc_world_model_related_array = [], x.hwvx_pc_world_model_related)
    generate_id_offset_array(g.hwvx_pc_geo_list_array = [], x.hwvx_pc_geo_list)
    generate_id_offset_array(g.hwvx_pc_collision_settings_array = [], x.hwvx_pc_collision_settings)
    generate_id_offset_array(g.hwvx_pc_car_array = [], x.hwvx_pc_car)
    generate_id_offset_array(g.hwvx_pc_car_related_array = [], x.hwvx_pc_car_related)
    generate_id_offset_array(g.hwvx_pc_car_path_related_array = [], x.hwvx_pc_car_path_related)
    generate_id_offset_array(g.hwvx_pc_car_link_array = [], x.hwvx_pc_car_link)
    generate_id_offset_array(g.hwvx_pc_car_unknown_link_array = [], x.hwvx_pc_car_unknown_link)
    generate_id_offset_array(g.hwvx_pc_model_link_array = [], x.hwvx_pc_model_link)
    generate_id_offset_array(g.hwvx_pc_text_array = [], x.hwvx_pc_text)
    generate_id_offset_array(g.hwvx_pc_font_array = [], x.hwvx_pc_font)
    generate_id_offset_array(g.hwvx_pc_mysterious_array = [], x.hwvx_pc_mysterious)
    generate_id_offset_array(g.hwvx_pc_strange_array = [], x.hwvx_pc_strange)
    generate_id_offset_array(g.hwvx_pc_unknown_array = [], x.hwvx_pc_unknown)
    generate_id_offset_array(g.hwvx_pc_unknown_thing_array = [], x.hwvx_pc_unknown_thing)
    generate_id_offset_array(g.hwvx_pc_asdf_array = [], x.hwvx_pc_asdf)
    generate_id_offset_array(g.hwvx_pc_unknown_idk_sec_array = [], x.hwvx_pc_unknown_idk_sec)
    generate_id_offset_array(g.hwvx_pc_grand_section_array = [], x.hwvx_pc_grand_section)
    generate_id_offset_array(g.hwvx_pc_unknown_whatever_array = [], x.hwvx_pc_unknown_whatever)
    generate_id_offset_array(g.hwvx_pc_unknown_small_model_link_array = [], x.hwvx_pc_unknown_small_model_link)
    generate_id_offset_array(g.hwvx_pc_unknown_link_section_array = [], x.hwvx_pc_unknown_link_section)
    generate_id_offset_array(g.hwvx_pc_item_array = [], x.hwvx_pc_item)
    generate_id_offset_array(g.hwvx_pc_sound_controls_array = [], x.hwvx_pc_sound_controls)
    generate_id_offset_array(g.hwvx_pc_sound_section_array = [], x.hwvx_pc_sound_section)
    generate_id_offset_array(g.hwvx_pc_world_settings_array = [], x.hwvx_pc_world_settings)
    generate_id_offset_array(g.hwvx_pc_interface_array = [], x.hwvx_pc_interface)
    generate_id_offset_array(g.hwvx_pc_interface_unknown_array = [], x.hwvx_pc_interface_unknown)
    generate_id_offset_array(g.hwvx_pc_interface_text_related_array = [], x.hwvx_pc_interface_text_related)
    generate_id_offset_array(g.hwvx_pc_link_array = [], x.hwvx_pc_link)
    generate_id_offset_array(g.hwvx_pc_texture_anims_0_array = [], x.hwvx_pc_texture_anims_0)

}
function ex_hwvx_pc_ordered_list_layout(o) {

    if (g.ordered_ref.hwvx_pc_model.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_model, g.hwvx_pc_model_array, ex_hwvx_pc_model, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_texture_anims.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_texture_anims, g.hwvx_pc_texture_anims_array, ex_hwvx_pc_texture_anims, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_model_anims_1.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_model_anims_1, g.hwvx_pc_model_anims_1_array, ex_hwvx_pc_model_anims_1, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_model_anims_2.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_model_anims_2, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_texture.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_texture, g.hwvx_pc_texture_array, ex_hwvx_pc_texture, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_texture_data.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_texture_data, g.hwvx_pc_texture_data_array, ex_hwvx_pc_texture_data, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_color_table.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_color_table, g.hwvx_pc_color_table_array, ex_hwvx_pc_color_table, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_share_end.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_share_end, g.hwvx_pc_share_end_array, ex_hwvx_pc_share_end, e, g.m)
    }

    if (g.ordered_ref.hwvx_pc_texture_anims_0.length) {
        e = ex_ma(g.ordered_ref.hwvx_pc_texture_anims_0, g.hwvx_pc_texture_anims_0_array, ex_hwvx_pc_texture_anims_0, e, g.m)
    }

}

function ex_hwvx_pc_basic(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_basic_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_basic_4(o, x) {
    let e = o + 8
    su32(o + 4, x.u32_4)

    e = ex_hwvx_pc_ordered_list_layout(e)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_directory, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world(o, x) {
    let e = o + 160
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    //amount?   su32(o +88, x.u32_88)
    //amount?   su32(o +96, x.u32_96)
    //amount?   su32(o +104, x.u32_104)

    e = ex_ml(x.unordered_hwvx_pc_world_4_4, g.hwvx_pc_world_4_array, ex_hwvx_pc_world_4, g.unordered_ref.hwvx_pc_world_4, o + 4, e, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 96, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_world_12(temp_offset + (i * 96), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_world_20_20, g.hwvx_pc_world_20_array, ex_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20, o + 20, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_36_36, g.hwvx_pc_world_36_array, ex_hwvx_pc_world_36, g.unordered_ref.hwvx_pc_world_36, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_52_52, g.hwvx_pc_world_52_array, ex_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52, o + 52, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_76_76, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 76, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_76_84, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 84, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_92_92, g.hwvx_pc_world_92_array, ex_hwvx_pc_world_92, g.unordered_ref.hwvx_pc_world_92, o + 92, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_100_100, g.hwvx_pc_world_100_array, ex_hwvx_pc_world_100, g.unordered_ref.hwvx_pc_world_100, o + 100, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_108_108, g.hwvx_pc_world_108_array, ex_hwvx_pc_world_108, g.unordered_ref.hwvx_pc_world_108, o + 108, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_120_120, g.hwvx_pc_world_120_array, ex_hwvx_pc_world_120, g.unordered_ref.hwvx_pc_world_120, o + 120, e, 'down');
    e = ex_string(o + 124, e, x.section_124)
    e = ex_string(o + 132, e, x.section_132)
    e = ex_string(o + 140, e, x.section_140)
    e = ex_ml(x.unordered_hwvx_pc_world_settings_156, g.hwvx_pc_world_settings_array, ex_hwvx_pc_world_settings, g.unordered_ref.hwvx_pc_world_settings, o + 156, e, 'down');

    e = ex_hwvx_pc_ordered_list_layout(e)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    su32(o + 32, x.u32_32)
    su32(o + 44, x.u32_44)
    su8(o + 48, x.u8_48)
    su8(o + 49, x.u8_49)
    su8(o + 50, x.u8_50)
    su8(o + 51, x.u8_51)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su8(o + 54, x.u8_54)
    su8(o + 55, x.u8_55)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su8(o + 92, x.u8_92)
    su8(o + 93, x.u8_93)
    su8(o + 94, x.u8_94)

    e = ex_ml(x.unordered_hwvx_pc_world_idk_64, g.hwvx_pc_world_idk_array, ex_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk, o + 64, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_idk_68, g.hwvx_pc_world_idk_array, ex_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk, o + 68, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_idk_72, g.hwvx_pc_world_idk_array, ex_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk, o + 72, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_idk_76, g.hwvx_pc_world_idk_array, ex_hwvx_pc_world_idk, g.unordered_ref.hwvx_pc_world_idk, o + 76, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_20(o, e, x) {
    su32(o + 0, x.u32_0)
    sf32(o + 8, x.f32_8)
    su8(o + 20, x.u8_20)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    sf32(o + 28, x.f32_28)

    e = ex_ml(x.unordered_hwvx_pc_model_anims_1_4, g.hwvx_pc_model_anims_1_array, ex_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1, o + 4, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_car_sound_link_12, g.hwvx_pc_model_car_sound_link_array, ex_hwvx_pc_model_car_sound_link, g.unordered_ref.hwvx_pc_model_car_sound_link, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_36(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 12, x.u32_12)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    su8(o + 56, x.u8_56)
    su8(o + 57, x.u8_57)
    su8(o + 58, x.u8_58)
    su8(o + 59, x.u8_59)

    e = ex_ml(x.unordered_hwvx_pc_world_36_28_28, g.hwvx_pc_world_36_28_array, ex_hwvx_pc_world_36_28, g.unordered_ref.hwvx_pc_world_36_28, o + 28, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_36_36_36, g.hwvx_pc_world_36_36_array, ex_hwvx_pc_world_36_36, g.unordered_ref.hwvx_pc_world_36_36, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_36_48_48, g.hwvx_pc_world_36_48_array, ex_hwvx_pc_world_36_48, g.unordered_ref.hwvx_pc_world_36_48, o + 48, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_36_48(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_Airbox, x.section_8, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_pc_world_36_48_16, x.section_16, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_pc_world_36_48_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_Airbox(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 32, x.u32_32)
    sf32(o + 40, x.f32_40)
    su32(o + 48, x.u32_48)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)

    e = ex_s_offset(o + 36, e, ex_hwvx_pc_world_model_related, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_36_36(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_36_28(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_36_48_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 32, x.u32_32)
    sf32(o + 44, x.f32_44)
    su32(o + 52, x.u32_52)
    su8(o + 56, x.u8_56)

    e = ex_s_offset(o + 36, e, ex_hwvx_pc_strange, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_36_48_24(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    sf32(o + 32, x.f32_32)
    su32(o + 40, x.u32_40)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_76(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_world_small_section_0, g.hwvx_pc_world_small_section_array, ex_hwvx_pc_world_small_section, g.unordered_ref.hwvx_pc_world_small_section, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_92(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_world_text_link_4, g.hwvx_pc_world_text_link_array, ex_hwvx_pc_world_text_link, g.unordered_ref.hwvx_pc_world_text_link, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_52(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su32(o + 64, x.u32_64)
    sf32(o + 76, x.f32_76)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)
    su32(o + 92, x.u32_92)

    switch (x.u32_80) {
    case 0:
        e = ex_ml(x.section_88, g.hwvx_pc_world_52_array, ex_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52, o + 88, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 88, e, ex_hwvx_pc_world_52_88t1, x.section_88, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_52_88t1(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_100(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_pc_world_color_section_4, g.hwvx_pc_world_color_section_array, ex_hwvx_pc_world_color_section, g.unordered_ref.hwvx_pc_world_color_section, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_108(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)

    e = ex_s_offset(o + 40, e, ex_hwvx_pc_world_108_40, x.section_40, 'down');
    switch (x.u32_12) {
    case 1:
        e = ex_s_offset(o + 44, e, ex_hwvx_pc_world_108_44t1, x.section_44, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 44, e, ex_hwvx_pc_world_108_44t2, x.section_44, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 44, e, ex_hwvx_pc_world_108_44t3, x.section_44, 'down');
        break;
    case 6:
        e = ex_ml(x.section_44, g.hwvx_pc_world_108_44t6_array, ex_hwvx_pc_world_108_44t6, g.unordered_ref.hwvx_pc_world_108_44t6, o + 44, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_108_40(o, x) {
    let e = o + 384
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su8(o + 48, x.u8_48)
    su8(o + 49, x.u8_49)
    su8(o + 50, x.u8_50)
    su8(o + 51, x.u8_51)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su8(o + 54, x.u8_54)
    su8(o + 55, x.u8_55)
    su8(o + 56, x.u8_56)
    su8(o + 57, x.u8_57)
    su8(o + 58, x.u8_58)
    su8(o + 59, x.u8_59)
    su8(o + 60, x.u8_60)
    su8(o + 61, x.u8_61)
    su8(o + 62, x.u8_62)
    su8(o + 63, x.u8_63)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    su8(o + 80, x.u8_80)
    su8(o + 81, x.u8_81)
    su8(o + 82, x.u8_82)
    su8(o + 83, x.u8_83)
    su8(o + 84, x.u8_84)
    su8(o + 85, x.u8_85)
    su8(o + 86, x.u8_86)
    su8(o + 87, x.u8_87)
    su8(o + 88, x.u8_88)
    su8(o + 89, x.u8_89)
    su8(o + 90, x.u8_90)
    su8(o + 91, x.u8_91)
    su8(o + 92, x.u8_92)
    su8(o + 93, x.u8_93)
    su8(o + 94, x.u8_94)
    su8(o + 95, x.u8_95)
    sf32(o + 96, x.f32_96)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)
    su8(o + 112, x.u8_112)
    su8(o + 113, x.u8_113)
    su8(o + 114, x.u8_114)
    su8(o + 115, x.u8_115)
    su8(o + 116, x.u8_116)
    su8(o + 117, x.u8_117)
    su8(o + 118, x.u8_118)
    su8(o + 119, x.u8_119)
    su8(o + 120, x.u8_120)
    su8(o + 121, x.u8_121)
    su8(o + 122, x.u8_122)
    su8(o + 123, x.u8_123)
    su8(o + 124, x.u8_124)
    su8(o + 125, x.u8_125)
    su8(o + 126, x.u8_126)
    su8(o + 127, x.u8_127)
    sf32(o + 128, x.f32_128)
    sf32(o + 132, x.f32_132)
    sf32(o + 136, x.f32_136)
    sf32(o + 140, x.f32_140)
    su8(o + 144, x.u8_144)
    su8(o + 145, x.u8_145)
    su8(o + 146, x.u8_146)
    su8(o + 147, x.u8_147)
    su8(o + 148, x.u8_148)
    su8(o + 149, x.u8_149)
    su8(o + 150, x.u8_150)
    su8(o + 151, x.u8_151)
    su8(o + 152, x.u8_152)
    su8(o + 153, x.u8_153)
    su8(o + 154, x.u8_154)
    su8(o + 155, x.u8_155)
    su8(o + 156, x.u8_156)
    su8(o + 157, x.u8_157)
    su8(o + 158, x.u8_158)
    su8(o + 159, x.u8_159)
    sf32(o + 160, x.f32_160)
    sf32(o + 164, x.f32_164)
    sf32(o + 168, x.f32_168)
    sf32(o + 172, x.f32_172)
    su8(o + 176, x.u8_176)
    su8(o + 177, x.u8_177)
    su8(o + 178, x.u8_178)
    su8(o + 179, x.u8_179)
    su8(o + 180, x.u8_180)
    su8(o + 181, x.u8_181)
    su8(o + 182, x.u8_182)
    su8(o + 183, x.u8_183)
    su8(o + 184, x.u8_184)
    su8(o + 185, x.u8_185)
    su8(o + 186, x.u8_186)
    su8(o + 187, x.u8_187)
    su8(o + 188, x.u8_188)
    su8(o + 189, x.u8_189)
    su8(o + 190, x.u8_190)
    su8(o + 191, x.u8_191)
    sf32(o + 192, x.f32_192)
    sf32(o + 196, x.f32_196)
    sf32(o + 200, x.f32_200)
    sf32(o + 204, x.f32_204)
    su8(o + 208, x.u8_208)
    su8(o + 209, x.u8_209)
    su8(o + 210, x.u8_210)
    su8(o + 211, x.u8_211)
    su8(o + 212, x.u8_212)
    su8(o + 213, x.u8_213)
    su8(o + 214, x.u8_214)
    su8(o + 215, x.u8_215)
    su8(o + 216, x.u8_216)
    su8(o + 217, x.u8_217)
    su8(o + 218, x.u8_218)
    su8(o + 219, x.u8_219)
    su8(o + 220, x.u8_220)
    su8(o + 221, x.u8_221)
    su8(o + 222, x.u8_222)
    su8(o + 223, x.u8_223)
    sf32(o + 224, x.f32_224)
    sf32(o + 228, x.f32_228)
    sf32(o + 232, x.f32_232)
    sf32(o + 236, x.f32_236)
    su8(o + 240, x.u8_240)
    su8(o + 241, x.u8_241)
    su8(o + 242, x.u8_242)
    su8(o + 243, x.u8_243)
    su8(o + 244, x.u8_244)
    su8(o + 245, x.u8_245)
    su8(o + 246, x.u8_246)
    su8(o + 247, x.u8_247)
    su8(o + 248, x.u8_248)
    su8(o + 249, x.u8_249)
    su8(o + 250, x.u8_250)
    su8(o + 251, x.u8_251)
    su8(o + 252, x.u8_252)
    su8(o + 253, x.u8_253)
    su8(o + 254, x.u8_254)
    su8(o + 255, x.u8_255)
    sf32(o + 256, x.f32_256)
    sf32(o + 260, x.f32_260)
    sf32(o + 264, x.f32_264)
    sf32(o + 268, x.f32_268)
    su8(o + 272, x.u8_272)
    su8(o + 273, x.u8_273)
    su8(o + 274, x.u8_274)
    su8(o + 275, x.u8_275)
    su8(o + 276, x.u8_276)
    su8(o + 277, x.u8_277)
    su8(o + 278, x.u8_278)
    su8(o + 279, x.u8_279)
    su8(o + 280, x.u8_280)
    su8(o + 281, x.u8_281)
    su8(o + 282, x.u8_282)
    su8(o + 283, x.u8_283)
    su8(o + 284, x.u8_284)
    su8(o + 285, x.u8_285)
    su8(o + 286, x.u8_286)
    su8(o + 287, x.u8_287)
    sf32(o + 288, x.f32_288)
    sf32(o + 292, x.f32_292)
    sf32(o + 296, x.f32_296)
    sf32(o + 300, x.f32_300)
    su8(o + 304, x.u8_304)
    su8(o + 305, x.u8_305)
    su8(o + 306, x.u8_306)
    su8(o + 307, x.u8_307)
    su8(o + 308, x.u8_308)
    su8(o + 309, x.u8_309)
    su8(o + 310, x.u8_310)
    su8(o + 311, x.u8_311)
    su8(o + 312, x.u8_312)
    su8(o + 313, x.u8_313)
    su8(o + 314, x.u8_314)
    su8(o + 315, x.u8_315)
    su8(o + 316, x.u8_316)
    su8(o + 317, x.u8_317)
    su8(o + 318, x.u8_318)
    su8(o + 319, x.u8_319)
    sf32(o + 320, x.f32_320)
    sf32(o + 324, x.f32_324)
    sf32(o + 328, x.f32_328)
    sf32(o + 332, x.f32_332)
    su8(o + 336, x.u8_336)
    su8(o + 337, x.u8_337)
    su8(o + 338, x.u8_338)
    su8(o + 339, x.u8_339)
    su8(o + 340, x.u8_340)
    su8(o + 341, x.u8_341)
    su8(o + 342, x.u8_342)
    su8(o + 343, x.u8_343)
    su8(o + 344, x.u8_344)
    su8(o + 345, x.u8_345)
    su8(o + 346, x.u8_346)
    su8(o + 347, x.u8_347)
    su8(o + 348, x.u8_348)
    su8(o + 349, x.u8_349)
    su8(o + 350, x.u8_350)
    su8(o + 351, x.u8_351)
    sf32(o + 352, x.f32_352)
    sf32(o + 356, x.f32_356)
    sf32(o + 360, x.f32_360)
    sf32(o + 364, x.f32_364)
    su8(o + 368, x.u8_368)
    su8(o + 369, x.u8_369)
    su8(o + 370, x.u8_370)
    su8(o + 371, x.u8_371)
    su8(o + 372, x.u8_372)
    su8(o + 373, x.u8_373)
    su8(o + 374, x.u8_374)
    su8(o + 375, x.u8_375)
    su8(o + 376, x.u8_376)
    su8(o + 377, x.u8_377)
    su8(o + 378, x.u8_378)
    su8(o + 379, x.u8_379)
    su8(o + 380, x.u8_380)
    su8(o + 381, x.u8_381)
    su8(o + 382, x.u8_382)
    su8(o + 383, x.u8_383)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_108_44t1(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su8(o + 16, x.u8_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_108_44t2(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_108_44t3(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_108_44t6(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su32(o + 20, x.u32_20)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_4(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)

    if (x.section_16.length) {
        su32(o + 28, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 56, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_world_4_16(temp_offset + (i * 56), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 28, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_world_4_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_4_20(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_4_16(o, e, x) {
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +48, x.u32_48)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_world_4_16_4(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_world_4_16_4(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 4, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_world_4_16_4(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e - g.m)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 4, 16)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_hwvx_pc_world_4_16_4(temp_offset + (i * 4), e, x.section_52[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_4_16_4(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_world_108_0, g.hwvx_pc_world_108_array, ex_hwvx_pc_world_108, g.unordered_ref.hwvx_pc_world_108, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_120(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)

    e = ex_ml(x.unordered_hwvx_pc_world_routes_0, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_routes(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 36, x.f32_36)
    su32(o + 40, x.u32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su32(o + 76, x.u32_76)
    su8(o + 80, x.u8_80)
    su8(o + 81, x.u8_81)

    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_world_routes_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 16, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 4, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_world_routes_24(temp_offset + (i * 4), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 4, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_hwvx_pc_world_routes_32(temp_offset + (i * 4), e, x.section_32[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_routes_32(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_routes_20(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_routes_24(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions(o, e, x) {
    su32(o + 0, x.u32_0)
    //?
    su32(o + 8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +28, x.u32_28)
    su8(o + 40, x.u8_40)

    switch (x.u32_8) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_triggers_and_actions_4t1, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_triggers_and_actions_4t3, x.section_4, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_triggers_and_actions_4t5, x.section_4, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_triggers_and_actions_4t6, x.section_4, 'down');
        break;
    case rest:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_triggers_and_actions_4trest, x.section_4, 'down');
        break;
    }
    e = ex_s_offset(o + 12, e, ex_hwvx_pc_triggers_and_actions_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_hwvx_pc_actions, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4t1(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_triggers_and_actions_4t1_0_0, g.hwvx_pc_triggers_and_actions_4t1_0_array, ex_hwvx_pc_triggers_and_actions_4t1_0, g.unordered_ref.hwvx_pc_triggers_and_actions_4t1_0, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4t3(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_pc_Airbox_4, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4t5(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_world_108, x.section_4, 'down');
    switch (x.u32_16) {
    case 0:
        e = ex_ml(x.section_12, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 12, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4t6(o, x) {
    let e = o + 4

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_triggers_and_actions_4trest, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4t6t4(o, x) {
    let e = o + 28
    su32(o + 20, x.u32_20)

    e = ex_ml(x.unordered_hwvx_pc_Airbox_4, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 4, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_Airbox_8, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 8, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_Airbox_12, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 12, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_Airbox_16, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4t6t20(o, x) {
    let e = o + 28
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 20, x.f32_20)
    //?

    e = ex_ml(x.unordered_hwvx_pc_world_12_12, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_4trest(o, x) {
    let e = o + 4
    //amount?   su32(o +0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_12(o, x) {
    let e = o + ([0] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_36_48, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_triggers_and_actions_12_4(o, x) {
    let e = o + 4
    //amount?   su32(o +0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions(o, x) {
    let e = o + ([0] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_12, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tAirboxChangeMode(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 44, x.u32_44)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_triggers_and_actions_12_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tCameraSetTargetst13(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.hwvx_pc_triggers_and_actions_12_4_4_array, ex_hwvx_pc_triggers_and_actions_12_4_4, g.unordered_ref.hwvx_pc_triggers_and_actions_12_4_4, o + 4, e, 'down');
        break;
    }
    falsefalse
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tCameraSetTargetst14(o, e, x) {
    su32(o + 0, x.u32_0)
    //?
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su32(o + 20, x.u32_20)

    switch (x.u32_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tAirboxChangeMode, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tCameraSetTargetst13, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tCameraSetTargetst14, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tCameraSetTargetst17, x.section_4, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tDestructibleChangeMode, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tFXPointChangeMode, x.section_4, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tInterfacePlay, x.section_4, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tItemChangeMode, x.section_4, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tTimerChangevalue, x.section_4, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tTimerChangeMode, x.section_4, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tMoveableChangeMode, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tMusicChanget10, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tMusicChanget20, x.section_4, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tNavPointChangeMode, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tTargetArrowSetTargett1, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tTargetArrowSetTargett5, x.section_4, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVariableChangeValue, x.section_4, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVehicleChangeMode, x.section_4, 'down');
        break;
    case 20:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tPrintDebugString, x.section_4, 'down');
        break;
    case 21:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVehicleTeleport, x.section_4, 'down');
        break;
    case 22:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVehicleChangeControl, x.section_4, 'down');
        break;
    case 24:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVehicleRemoveItem, x.section_4, 'down');
        break;
    case 26:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVariableChangeMode, x.section_4, 'down');
        break;
    case 31:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tEndInterface, x.section_4, 'down');
        break;
    case 32:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tHUDChangeMode, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tCodeVariableModifyValuet5, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tCodeVariableModifyValuet6, x.section_4, 'down');
        break;
    case 36:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tPauseTACSystem, x.section_4, 'down');
        break;
    case 38:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tResetGameRound, x.section_4, 'down');
        break;
    case 39:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tRoundComplete, x.section_4, 'down');
        break;
    case 40:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tVehicleGiveItem, x.section_4, 'down');
        break;
    case 41:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_actions_4tSetPlayerOrder, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tCameraSetTargetst17(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tDestructibleChangeMode(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_108, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tFXPointChangeMode(o, x) {
    let e = o + 64
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 40, x.f32_40)
    su32(o + 48, x.u32_48)

    switch (x.u32_8) {
    case 1:
        e = ex_ml(x.section_12, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 12, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_12, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 12, e, 'down');
        break;
    }
    switch (x.u32_28) {
    case 1:
        e = ex_ml(x.section_32, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 32, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tInterfacePlay(o, x) {
    let e = o + 64
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 32, x.u32_32)
    sf32(o + 44, x.f32_44)
    su32(o + 52, x.u32_52)

    switch (x.u32_12) {
    case 1:
        e = ex_ml(x.section_16, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 16, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_16, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 16, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_16, g.hwvx_pc_world_36_48_24_array, ex_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24, o + 16, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_16, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 16, e, 'down');
        break;
    }
    switch (x.u32_32) {
    case 1:
        e = ex_ml(x.section_36, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 36, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_36, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 36, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_36, g.hwvx_pc_world_36_48_24_array, ex_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24, o + 36, e, 'down');
        break;
    case 4:
        e = ex_ml(x.section_36, g.hwvx_pc_world_20_array, ex_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20, o + 36, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_36, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 36, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tItemChangeMode(o, x) {
    let e = o + 80
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    su32(o + 24, x.u32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su32(o + 44, x.u32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    su32(o + 64, x.u32_64)

    switch (x.u32_24) {
    case 1:
        e = ex_ml(x.section_28, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 28, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_28, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 28, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_28, g.hwvx_pc_world_36_48_24_array, ex_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24, o + 28, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_28, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 28, e, 'down');
        break;
    }
    switch (x.u32_44) {
    case 1:
        e = ex_ml(x.section_48, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 48, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_48, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 48, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_48, g.hwvx_pc_world_36_48_24_array, ex_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24, o + 48, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_48, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 48, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tTimerChangevalue(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tTimerChangeMode(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_Airbox, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tMoveableChangeMode(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tMusicChanget10(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_Airbox, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tMusicChanget20(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_interface_0, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tNavPointChangeMode(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tTargetArrowSetTargett1(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_36_48_24, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tTargetArrowSetTargett5(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_hwvx_pc_world_76_8, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 8, e, 'down');
    switch (x.u32_12) {
    case 1:
        e = ex_ml(x.section_16, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 16, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVariableChangeValue(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_pc_world_76_12, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVehicleChangeMode(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)

    e = ex_ml(x.unordered_hwvx_pc_world_20_20, g.hwvx_pc_world_20_array, ex_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20, o + 20, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_20_24, g.hwvx_pc_world_20_array, ex_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tPrintDebugString(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVehicleTeleport(o, x) {
    let e = o + 80
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 48, x.u32_48)
    sf32(o + 52, x.f32_52)
    su32(o + 76, x.u32_76)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVehicleChangeControl(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVehicleRemoveItem(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_routes, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVariableChangeMode(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tEndInterface(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_4, g.hwvx_pc_Airbox_array, ex_hwvx_pc_Airbox, g.unordered_ref.hwvx_pc_Airbox, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_4, g.hwvx_pc_world_36_48_24_array, ex_hwvx_pc_world_36_48_24, g.unordered_ref.hwvx_pc_world_36_48_24, o + 4, e, 'down');
        break;
    case 4:
        e = ex_ml(x.section_4, g.hwvx_pc_world_20_array, ex_hwvx_pc_world_20, g.unordered_ref.hwvx_pc_world_20, o + 4, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_4, g.hwvx_pc_world_routes_array, ex_hwvx_pc_world_routes, g.unordered_ref.hwvx_pc_world_routes, o + 4, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tHUDChangeMode(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_hwvx_pc_world_76_8, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 8, e, 'down');
    switch (x.u32_12) {
    case 1:
        e = ex_ml(x.section_16, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 16, e, 'down');
        break;
    }
    e = ex_ml(x.unordered_hwvx_pc_world_12_20, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tCodeVariableModifyValuet5(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tCodeVariableModifyValuet6(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_routes, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tPauseTACSystem(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_text_8, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tResetGameRound(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_pc_world_52_4, g.hwvx_pc_world_52_array, ex_hwvx_pc_world_52, g.unordered_ref.hwvx_pc_world_52, o + 4, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_world_12_12, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tRoundComplete(o, x) {
    let e = o + 12
    su32(o + 0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tVehicleGiveItem(o, x) {
    let e = o + ([8] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_world_12, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_actions_4tSetPlayerOrder(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_world_12_8, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_world_76_8, g.hwvx_pc_world_76_array, ex_hwvx_pc_world_76, g.unordered_ref.hwvx_pc_world_76, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_32(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_ml(x.unordered_hwvx_pc_interface_4, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_32_56(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_64(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_76(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)

    e = ex_ml(x.unordered_hwvx_pc_world_12_12, g.hwvx_pc_world_12_array, ex_hwvx_pc_world_12, g.unordered_ref.hwvx_pc_world_12, o + 12, e, 'down');
    e = ex_s_offset(o + 20, e, ex_hwvx_pc_world_76, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_76_16(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_84(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_related(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 19, x.u8_19)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_link(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_collision_settings_0, g.hwvx_pc_collision_settings_array, ex_hwvx_pc_collision_settings, g.unordered_ref.hwvx_pc_collision_settings, o + 0, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_collision_settings_4, g.hwvx_pc_collision_settings_array, ex_hwvx_pc_collision_settings, g.unordered_ref.hwvx_pc_collision_settings, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_basic(o, x) {
    let e = o + 8

    if (x.section_0.length) {
        su32(o + ___$$$___, x.section_0.length)
        su32(o + 0, e - g.m)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_0.length * 12, 16)
        for (let i = 0; i < x.section_0.length; i++) {
            e = ex_hwvx_pc_geo_basic_0(temp_offset + (i * 12), e, x.section_0[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_geo_list_4, g.hwvx_pc_geo_list_array, ex_hwvx_pc_geo_list, g.unordered_ref.hwvx_pc_geo_list, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_basic_0(o, e, x) {
    su32(o + 0, x.u32_0)
    ex_patch(o + 8, g.model_array, x.model_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_share(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model(o, x) {
    let e = o + 64
    su16(o + 0, x.u16_0)
    //?
    //amount?   su16(o +2, x.u16_2)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)

    switch (x.u16_0) {
    case 8195:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_model_gc_8, x.section_8, 'down');
        break;
    case 4101:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_model_ps2_8, x.section_8, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_model_pc_8, x.section_8, 'down');
        break;
    }
    if (x.section_12.length) {
        su32(o + 2, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_model_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_gc_8(o, e, x) {
    su8(o + 3, x.u8_3)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_model_gc_8_8, x.section_8, 'down');
    e = ex_s_offset(o + 12, e, ex_hwvx_pc_model_gc_8_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_pc_model_gc_8_16, x.section_16, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_gc_8_20_20, g.hwvx_pc_model_gc_8_20_array, ex_hwvx_pc_model_gc_8_20, g.unordered_ref.hwvx_pc_model_gc_8_20, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_gc_8_8(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.animation_patch_array, x.animation_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)

    e = ex_s_offset(o + 12, e, ex_hwvx_pc_model_gc_8_8_12, x.section_12, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_gc_8_8_28_28, g.hwvx_pc_model_gc_8_8_28_array, ex_hwvx_pc_model_gc_8_8_28, g.unordered_ref.hwvx_pc_model_gc_8_8_28, o + 28, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_gc_8_8_12(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_gc_8_12(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_gc_8_16sec1(o, x) {
    let e = o + ([0] / 4)
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_gc_8_16(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_ps2_8(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_model_ps2_8_8, x.section_8, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_ps2_8_20_20, g.hwvx_pc_model_ps2_8_20_array, ex_hwvx_pc_model_ps2_8_20, g.unordered_ref.hwvx_pc_model_ps2_8_20, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_ps2_8_8(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.animation_patch_array, x.animation_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)

    e = ex_ml(x.unordered_hwvx_pc_model_ps2_8_8_12_12, g.hwvx_pc_model_ps2_8_8_12_array, ex_hwvx_pc_model_ps2_8_8_12, g.unordered_ref.hwvx_pc_model_ps2_8_8_12, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_pc_8(o, e, x) {
    su8(o + 2, x.u8_2)

    if (x.section_8.length) {
        su32(o + ___$$$___, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 32, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_model_pc_8_8(temp_offset + (i * 32), e, x.section_8[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 12, e, ex_hwvx_pc_model_pc_8_12_type_a, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_pc_model_pc_8_16, x.section_16, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_string_20, g.hwvx_pc_model_string_array, ex_hwvx_pc_model_string, g.unordered_ref.hwvx_pc_model_string, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_pc_8_8(o, e, x) {
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)

    e = ex_s_offset(o + 12, e, ex_hwvx_pc_model_pc_8_8_12, x.section_12, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_pc_8_8_28_28, g.hwvx_pc_model_pc_8_8_28_array, ex_hwvx_pc_model_pc_8_8_28, g.unordered_ref.hwvx_pc_model_pc_8_8_28, o + 28, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_pc_8_8_12(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_pc_8_12_type_a(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_hwvx_pc_model_pc_8_12_type_a_0_0, g.hwvx_pc_model_pc_8_12_0_array, ex_hwvx_pc_model_pc_8_12_type_a_0, g.unordered_ref.hwvx_pc_model_pc_8_12_0, o + 0, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_pc_8_12_type_a_4_4, g.hwvx_pc_model_pc_8_12_4_array, ex_hwvx_pc_model_pc_8_12_type_a_4, g.unordered_ref.hwvx_pc_model_pc_8_12_4, o + 4, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_pc_8_12_type_a_8_8, g.hwvx_pc_model_pc_8_12_8_array, ex_hwvx_pc_model_pc_8_12_type_a_8, g.unordered_ref.hwvx_pc_model_pc_8_12_8, o + 8, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_pc_8_12_type_a_12_12, g.hwvx_pc_model_pc_8_12_12_array, ex_hwvx_pc_model_pc_8_12_type_a_12, g.unordered_ref.hwvx_pc_model_pc_8_12_12, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_pc_8_16(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_12(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture_anims(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_texture_anims_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_anims_1(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su8(o + 54, x.u8_54)
    su8(o + 55, x.u8_55)
    su8(o + 56, x.u8_56)
    su8(o + 57, x.u8_57)
    su8(o + 58, x.u8_58)
    su8(o + 59, x.u8_59)
    su8(o + 60, x.u8_60)
    su8(o + 61, x.u8_61)
    su8(o + 62, x.u8_62)
    su8(o + 63, x.u8_63)

    e = ex_ml(x.unordered_hwvx_pc_model_anims_1_24_24, g.hwvx_pc_model_anims_1_24_array, ex_hwvx_pc_model_anims_1_24, g.unordered_ref.hwvx_pc_model_anims_1_24, o + 24, e, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_model_anims_1_28, x.section_28, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_anims_1_32_32, g.hwvx_pc_model_anims_1_32_array, ex_hwvx_pc_model_anims_1_32, g.unordered_ref.hwvx_pc_model_anims_1_32, o + 32, e, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_pc_model_anims_1_36, x.section_36, 'down');
    if (x.section_44.length) {
        su32(o + 16, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 16, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_hwvx_pc_model_anims_1_44(temp_offset + (i * 16), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_anims_1_28(o, x) {
    let e = o + 0
    su16(o + 0, x.u16_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_anims_1_36(o, x) {
    let e = o + 0
    // ???

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_anims_1_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_anims_2(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 8, x.u32_8)

    if (x.section_16.length) {
        su32(o + 0, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 32, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_model_anims_2_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_anims_2_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture(o, e, x) {
    su16(o + 0, x.u16_0)
    //?
    su16(o + 2, x.u16_2)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_hwvx_pc_texture_data_8, g.hwvx_pc_texture_data_array, ex_hwvx_pc_texture_data, g.unordered_ref.hwvx_pc_texture_data, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_share_end(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +12, x.u32_12)

    e = ex_string(o + 0, e, x.section_0)
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_share_end_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_share_end_16(temp_offset + (i * 8), e, x.section_16[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_share_end_8(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_share_end_16(o, e, x) {
    ex_patch(o + 0, g.sound_patch_array, x.sound_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_text_link(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_hwvx_pc_world_small_section, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_pc_world_small_section, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_hwvx_pc_text, x.section_20, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_pc_text, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_car_sound_link(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.model_array, x.model_0)
    su8(o + 5, x.u8_5)
    su32(o + 24, x.u32_24)

    e = ex_ml(x.unordered_hwvx_pc_car_link_16, g.hwvx_pc_car_link_array, ex_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link, o + 16, e, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_model_car_sound_link_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_car_sound_link_28(o, x) {
    let e = o + 32
    su8(o + 16, x.u8_16)

    e = ex_ml(x.unordered_hwvx_pc_sound_controls_24, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_color_section(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_world_color_section_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_color_section_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_idk(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 36, x.u8_36)
    su8(o + 38, x.u8_38)
    su8(o + 39, x.u8_39)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 12, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_pc_world_idk_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_idk_48(o, e, x) {
    //amount?   su32(o +4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_some_world_thing_0, g.hwvx_pc_some_world_thing_array, ex_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing, o + 0, e, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_world_idk_48_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_idk_48_8(o, e, x) {
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_some_world_thing_0, g.hwvx_pc_some_world_thing_array, ex_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing, o + 0, e, 'down');
    e = ex_s_offset(o + 8, e, ex_hwvx_pc_world_idk_48_8_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_idk_48_8_8(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_some_world_thing_0, g.hwvx_pc_some_world_thing_array, ex_hwvx_pc_some_world_thing, g.unordered_ref.hwvx_pc_some_world_thing, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_some_world_thing(o, x) {
    let e = o + 128
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 5, x.u8_5)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 52, x.u32_52)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)

    e = ex_s_offset(o + 88, e, ex_hwvx_pc_some_world_thing_88, x.section_88, 'down');
    e = ex_string(o + 116, e, x.section_116)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_some_world_thing_88(o, x) {
    let e = o + 32
    su8(o + 2, x.u8_2)
    su16(o + 6, x.u16_6)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_small_section(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    e = ex_s_offset(o + 12, e, ex_hwvx_pc_world_small_section_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_small_section_12(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_model_related(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    sf32(o + 8, x.f32_8)
    //amount?   su32(o +24, x.u32_24)

    switch (x.u8_4) {
    case 1:
        e = ex_ml(x.section_0, g.hwvx_pc_model_link_array, ex_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link, o + 0, e, 'down');
        break;
    }
    e = ex_s_offset(o + 12, e, ex_hwvx_pc_sound_controls, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_pc_car_link, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_hwvx_pc_model_anims_2, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_mysterious, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_list(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_geo_list_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_list_4(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_geo_list_4_4, x.section_4, 'down');
    if (x.section_8.length) {
        su32(o + 0, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_geo_list_4_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 16, e, ex_hwvx_pc_geo_list_4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_list_4_8(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_list_4_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_geo_list_4_16(o, x) {
    let e = o + 0
    // ???
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_settings(o, x) {
    let e = o + 96
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    //amount?   su32(o +68, x.u32_68)
    //amount?   su32(o +76, x.u32_76)

    e = ex_ml(x.unordered_hwvx_pc_unknown_48, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 48, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_thing_52, g.hwvx_pc_unknown_thing_array, ex_hwvx_pc_unknown_thing, g.unordered_ref.hwvx_pc_unknown_thing, o + 52, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_section_60, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 60, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_64, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 64, e, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 4, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_hwvx_pc_collision_settings_72(temp_offset + (i * 4), e, x.section_72[i])
        }
        ;
    }
    ;if (x.section_80.length) {
        su32(o + 76, x.section_80.length)
        su32(o + 80, e - g.m)
        g.oa.push(o + 80)
        let temp_offset = e
        e += divisible(x.section_80.length * 4, 16)
        for (let i = 0; i < x.section_80.length; i++) {
            e = ex_hwvx_pc_collision_settings_72(temp_offset + (i * 4), e, x.section_80[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_collision_settings_72(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car(o, x) {
    let e = o + 288
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    ex_patch(o + 68, g.texture_patch_array, x.texture_68)
    ex_patch(o + 80, g.texture_patch_array, x.texture_80)
    ex_patch(o + 84, g.model_array, x.model_84)
    //amount?   su32(o +208, x.u32_208)
    //amount?   su32(o +216, x.u32_216)
    //amount?   su32(o +224, x.u32_224)
    //amount?   su32(o +232, x.u32_232)
    su32(o + 248, x.u32_248)
    su32(o + 256, x.u32_256)
    su32(o + 264, x.u32_264)
    //amount?   su32(o +280, x.u32_280)

    e = ex_ml(x.unordered_hwvx_pc_model_anims_1_72, g.hwvx_pc_model_anims_1_array, ex_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1, o + 72, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_76, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 76, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_section_92, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 92, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_section_96, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 96, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_section_100, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 100, e, 'down');
    e = ex_s_offset(o + 108, e, ex_hwvx_pc_car_108, x.section_108, 'down');
    e = ex_s_offset(o + 120, e, ex_hwvx_pc_car_120, x.section_120, 'down');
    e = ex_s_offset(o + 124, e, ex_hwvx_pc_car_124, x.section_124, 'down');
    e = ex_s_offset(o + 128, e, ex_hwvx_pc_car_128, x.section_128, 'down');
    e = ex_s_offset(o + 132, e, ex_hwvx_pc_car_132, x.section_132, 'down');
    e = ex_s_offset(o + 136, e, ex_hwvx_pc_car_136, x.section_136, 'down');
    e = ex_s_offset(o + 140, e, ex_hwvx_pc_car_140, x.section_140, 'down');
    e = ex_ml(x.unordered_hwvx_pc_car_related_144, g.hwvx_pc_car_related_array, ex_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related, o + 144, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_car_related_148, g.hwvx_pc_car_related_array, ex_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related, o + 148, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_car_related_152, g.hwvx_pc_car_related_array, ex_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related, o + 152, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_car_related_156, g.hwvx_pc_car_related_array, ex_hwvx_pc_car_related, g.unordered_ref.hwvx_pc_car_related, o + 156, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_car_link_160, g.hwvx_pc_car_link_array, ex_hwvx_pc_car_link, g.unordered_ref.hwvx_pc_car_link, o + 160, e, 'down');
    e = ex_s_offset(o + 164, e, ex_hwvx_pc_car_164, x.section_164, 'down');
    e = ex_s_offset(o + 172, e, ex_hwvx_pc_car_172, x.section_172, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_176, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 176, e, 'down');
    if (x.section_212.length) {
        su32(o + 208, x.section_212.length)
        su32(o + 212, e - g.m)
        g.oa.push(o + 212)
        let temp_offset = e
        e += divisible(x.section_212.length * 80, 16)
        for (let i = 0; i < x.section_212.length; i++) {
            e = ex_hwvx_pc_car_212(temp_offset + (i * 80), e, x.section_212[i])
        }
        ;
    }
    ;if (x.section_220.length) {
        su32(o + 216, x.section_220.length)
        su32(o + 220, e - g.m)
        g.oa.push(o + 220)
        let temp_offset = e
        e += divisible(x.section_220.length * 8, 16)
        for (let i = 0; i < x.section_220.length; i++) {
            e = ex_hwvx_pc_car_220(temp_offset + (i * 8), e, x.section_220[i])
        }
        ;
    }
    ;if (x.section_228.length) {
        su32(o + 224, x.section_228.length)
        su32(o + 228, e - g.m)
        g.oa.push(o + 228)
        let temp_offset = e
        e += divisible(x.section_228.length * 12, 16)
        for (let i = 0; i < x.section_228.length; i++) {
            e = ex_hwvx_pc_car_228(temp_offset + (i * 12), e, x.section_228[i])
        }
        ;
    }
    ;if (x.section_236.length) {
        su32(o + 232, x.section_236.length)
        su32(o + 236, e - g.m)
        g.oa.push(o + 236)
        let temp_offset = e
        e += divisible(x.section_236.length * 12, 16)
        for (let i = 0; i < x.section_236.length; i++) {
            e = ex_hwvx_pc_car_228(temp_offset + (i * 12), e, x.section_236[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 252, e, ex_hwvx_pc_car_252, x.section_252, 'down');
    e = ex_s_offset(o + 260, e, ex_hwvx_pc_car_260, x.section_260, 'down');
    e = ex_s_offset(o + 268, e, ex_hwvx_pc_car_268, x.section_268, 'down');
    if (x.section_284.length) {
        su32(o + 280, x.section_284.length)
        su32(o + 284, e - g.m)
        g.oa.push(o + 284)
        let temp_offset = e
        e += divisible(x.section_284.length * 8, 16)
        for (let i = 0; i < x.section_284.length; i++) {
            e = ex_hwvx_pc_car_220(temp_offset + (i * 8), e, x.section_284[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_108(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_120(o, x) {
    let e = o + 112
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 36, x.u8_36)
    su8(o + 37, x.u8_37)
    su8(o + 38, x.u8_38)

    e = ex_ml(x.unordered_hwvx_pc_model_link_16, g.hwvx_pc_model_link_array, ex_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_124(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_128(o, x) {
    let e = o + 160
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 92, x.f32_92)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)
    //amount?   su32(o +128, x.u32_128)
    //amount?   su32(o +136, x.u32_136)

    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_96, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 96, e, 'down');
    if (x.section_132.length) {
        su32(o + 128, x.section_132.length)
        su32(o + 132, e - g.m)
        g.oa.push(o + 132)
        let temp_offset = e
        e += divisible(x.section_132.length * 12, 16)
        for (let i = 0; i < x.section_132.length; i++) {
            e = ex_hwvx_pc_car_128_132(temp_offset + (i * 12), e, x.section_132[i])
        }
        ;
    }
    ;if (x.section_140.length) {
        su32(o + 136, x.section_140.length)
        su32(o + 140, e - g.m)
        g.oa.push(o + 140)
        let temp_offset = e
        e += divisible(x.section_140.length * 12, 16)
        for (let i = 0; i < x.section_140.length; i++) {
            e = ex_hwvx_pc_car_128_132(temp_offset + (i * 12), e, x.section_140[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 144, e, ex_hwvx_pc_car_128_144, x.section_144, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_128_132(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_car_128_132_4t0, x.section_4, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_car_128_132_4t4, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_128_132_4t0(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_128_132_4t4(o, x) {
    let e = o + 32
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_128_144(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_car_128_144_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_128_144_4(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_132(o, x) {
    let e = o + 64
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 52, x.f32_52)

    e = ex_ml(x.unordered_hwvx_pc_interface_16, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_interface_24, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 24, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_interface_28, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 28, e, 'down');
    e = ex_s_offset(o + 44, e, ex_hwvx_pc_car_132_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_132_44(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_136(o, x) {
    let e = o + 96
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 48, x.u32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 72, x.f32_72)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_140(o, x) {
    let e = o + 112
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su32(o + 40, x.u32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    //amount?   su32(o +52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)
    //amount?   su32(o +76, x.u32_76)
    sf32(o + 84, x.f32_84)

    if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 4, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_hwvx_pc_car_140_56(temp_offset + (i * 4), e, x.section_56[i])
        }
        ;
    }
    ;if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_hwvx_pc_car_140_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_text_72, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 72, e, 'down');
    if (x.section_80.length) {
        su32(o + 76, x.section_80.length)
        su32(o + 80, e - g.m)
        g.oa.push(o + 80)
        let temp_offset = e
        e += divisible(x.section_80.length * 4, 16)
        for (let i = 0; i < x.section_80.length; i++) {
            e = ex_hwvx_pc_car_140_64(temp_offset + (i * 4), e, x.section_80[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_140_56(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_140_64(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_text_0, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_164(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_car_164_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_164_8(o, x) {
    let e = o + 48
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_172(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_212(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 56, x.f32_56)
    su8(o + 60, x.u8_60)
    su8(o + 62, x.u8_62)
    su8(o + 63, x.u8_63)
    su16(o + 64, x.u16_64)
    su8(o + 66, x.u8_66)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_220(o, e, x) {
    sf32(o + 0, x.f32_0)

    e = ex_ml(x.unordered_hwvx_pc_sound_section_4, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_228(o, e, x) {
    //amount?   su32(o +4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_0, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 0, e, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 64, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_mysterious(temp_offset + (i * 64), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_252(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_car_252_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_252_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_car_252_4_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_252_4_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_260(o, x) {
    let e = o + 80
    su32(o + 52, x.u32_52)

    e = ex_s_offset(o + 56, e, ex_hwvx_pc_car_260_56, x.section_56, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_260_56(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_268(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_related(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 36, x.u8_36)
    su8(o + 38, x.u8_38)
    su8(o + 39, x.u8_39)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 12, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_pc_car_related_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_related_48(o, e, x) {
    //amount?   su32(o +4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_pc_car_path_related_0, g.hwvx_pc_car_path_related_array, ex_hwvx_pc_car_path_related, g.unordered_ref.hwvx_pc_car_path_related, o + 0, e, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_car_related_48_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_related_48_8(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_car_path_related_0, g.hwvx_pc_car_path_related_array, ex_hwvx_pc_car_path_related, g.unordered_ref.hwvx_pc_car_path_related, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_path_related(o, x) {
    let e = o + 128
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 5, x.u8_5)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 52, x.u32_52)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)

    e = ex_s_offset(o + 88, e, ex_hwvx_pc_car_path_related_88, x.section_88, 'down');
    e = ex_string(o + 116, e, x.section_116)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_path_related_88(o, x) {
    let e = o + 32
    su8(o + 2, x.u8_2)
    su16(o + 6, x.u16_6)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_link(o, x) {
    let e = o + 80
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    //amount?   su32(o +52, x.u32_52)
    su32(o + 60, x.u32_60)

    e = ex_ml(x.unordered_hwvx_pc_car_unknown_link_48, g.hwvx_pc_car_unknown_link_array, ex_hwvx_pc_car_unknown_link, g.unordered_ref.hwvx_pc_car_unknown_link, o + 48, e, 'down');
    if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 4, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_hwvx_pc_car_link_56(temp_offset + (i * 4), e, x.section_56[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 64, e, ex_hwvx_pc_car_link_64, x.section_64, 'down');
    e = ex_s_offset(o + 68, e, ex_hwvx_pc_car_link_68, x.section_68, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_link_56(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_link_64(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_link_68(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_unknown_link(o, x) {
    let e = o + 96
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    //amount?   su32(o +68, x.u32_68)
    //amount?   su32(o +76, x.u32_76)

    e = ex_ml(x.unordered_hwvx_pc_unknown_48, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 48, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_section_60, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 60, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_64, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 64, e, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 4, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_hwvx_pc_car_unknown_link_72(temp_offset + (i * 4), e, x.section_72[i])
        }
        ;
    }
    ;if (x.section_80.length) {
        su32(o + 76, x.section_80.length)
        su32(o + 80, e - g.m)
        g.oa.push(o + 80)
        let temp_offset = e
        e += divisible(x.section_80.length * 4, 16)
        for (let i = 0; i < x.section_80.length; i++) {
            e = ex_hwvx_pc_car_unknown_link_72(temp_offset + (i * 4), e, x.section_80[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_car_unknown_link_72(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 31, x.u8_31)
    su32(o + 44, x.u32_44)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_model_link_4, x.section_4, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 8, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_model_link_12(temp_offset + (i * 8), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_model_anims_1_16, g.hwvx_pc_model_anims_1_array, ex_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_20, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 20, e, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_model_link_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_pc_model_link_36, x.section_36, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_pc_model_link_48, x.section_48, 'down');
    e = ex_s_offset(o + 52, e, ex_hwvx_pc_model_link_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_hwvx_pc_model_link_56, x.section_56, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_4(o, x) {
    let e = o + 16
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_12(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_32(o, x) {
    let e = o + 16
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_36(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_48(o, x) {
    let e = o + 32
    su8(o + 16, x.u8_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_52(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_56(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + ___$$$___, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 28, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_model_link_56_4(temp_offset + (i * 28), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_model_anims_2_8, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_56_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    ex_patch(o + 8, g.model_array, x.model_8)

    e = ex_s_offset(o + 12, e, ex_hwvx_pc_model_link_56_4_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_pc_model_link_56_4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_56_4_12(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_model_link_56_4_16(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_text(o, x) {
    let e = o + 16

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_font(o, x) {
    let e = o + 48
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    sf32(o + 40, x.f32_40)

    e = ex_ml(x.unordered_hwvx_pc_sound_section_4, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 4, e, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_font_28, x.section_28, 'down');
    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_pc_font_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_font_28(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_font_36(o, e, x) {
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su16(o + 18, x.u16_18)
    sf32(o + 20, x.f32_20)

    switch (x.u8_16) {
    case 1:
        e = ex_ml(x.section_24, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 24, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_24, g.hwvx_pc_strange_array, ex_hwvx_pc_strange, g.unordered_ref.hwvx_pc_strange, o + 24, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_24, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 24, e, 'down');
        break;
    case 5:
        e = ex_ml(x.section_24, g.hwvx_pc_mysterious_24t5_array, ex_hwvx_pc_mysterious_24t5, g.unordered_ref.hwvx_pc_mysterious_24t5, o + 24, e, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 24, e, ex_hwvx_pc_mysterious_24t6, x.section_24, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 24, e, ex_hwvx_pc_mysterious_24t7, x.section_24, 'down');
        break;
    case 8:
        e = ex_ml(x.section_24, g.hwvx_pc_model_link_array, ex_hwvx_pc_model_link, g.unordered_ref.hwvx_pc_model_link, o + 24, e, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 24, e, ex_hwvx_pc_mysterious_24t9, x.section_24, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 24, e, ex_hwvx_pc_mysterious_24t10, x.section_24, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t6(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    ex_patch(o + 8, g.texture_patch_array, x.texture_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 32, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_mysterious_24t6_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 32, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_mysterious_24t6_16(temp_offset + (i * 32), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 12, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_hwvx_pc_mysterious_24t6_32(temp_offset + (i * 12), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 36, e, ex_hwvx_pc_mysterious_24t6_36, x.section_36, 'down');
    e = ex_s_offset(o + 40, e, ex_hwvx_pc_mysterious_24t6_40, x.section_40, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t6_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t6_32(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t6_36(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t6_40(o, x) {
    let e = o + 32
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t7(o, x) {
    let e = o + 96
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su32(o + 36, x.u32_36)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    //amount?   su32(o +68, x.u32_68)
    su32(o + 76, x.u32_76)
    su32(o + 84, x.u32_84)

    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 12, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_hwvx_pc_mysterious_24t7_72(temp_offset + (i * 12), e, x.section_72[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 80, e, ex_hwvx_pc_mysterious_24t7_80, x.section_80, 'down');
    e = ex_s_offset(o + 88, e, ex_hwvx_pc_mysterious_24t7_88, x.section_88, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t7_72(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t7_80(o, x) {
    let e = o + 12
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t7_88(o, x) {
    let e = o + 16
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t9(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    ex_patch(o + 20, g.texture_patch_array, x.texture_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    su8(o + 36, x.u8_36)
    su8(o + 37, x.u8_37)
    su8(o + 38, x.u8_38)
    su8(o + 39, x.u8_39)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    su8(o + 48, x.u8_48)

    e = ex_s_offset(o + 28, e, ex_hwvx_pc_mysterious_24t9_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_mysterious_24t9_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t9_28(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t9_32(o, x) {
    let e = o + 4
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t10(o, x) {
    let e = o + 16
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 32, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_mysterious_24t10_8(temp_offset + (i * 32), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t10_8(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)

    e = ex_s_offset(o + 24, e, ex_hwvx_pc_mysterious_24t10_8_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t10_8_24(o, x) {
    let e = o + 64
    su8(o + 1, x.u8_1)
    su8(o + 4, x.u8_4)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 32, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_mysterious_24t10_8_24_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 32, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_mysterious_24t10_8_24_16(temp_offset + (i * 32), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 12, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_hwvx_pc_mysterious_24t10_8_24_32(temp_offset + (i * 12), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 44, e, ex_hwvx_pc_mysterious_24t10_8_24_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t10_8_24_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t10_8_24_32(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_mysterious_24t10_8_24_44(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_strange(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)
    //amount?   su32(o +24, x.u32_24)

    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 4, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_strange_28(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_sound_controls_32, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_strange_28(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_unknown_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4(o, e, x) {
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.hwvx_pc_unknown_thing_array, ex_hwvx_pc_unknown_thing, g.unordered_ref.hwvx_pc_unknown_thing, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_4, g.hwvx_pc_asdf_array, ex_hwvx_pc_asdf, g.unordered_ref.hwvx_pc_asdf, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_4, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 4, e, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_unknown_4_4t4, x.section_4, 'down');
        break;
    case 5:
        e = ex_ml(x.section_4, g.hwvx_pc_unknown_idk_sec_array, ex_hwvx_pc_unknown_idk_sec, g.unordered_ref.hwvx_pc_unknown_idk_sec, o + 4, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_4, g.hwvx_pc_world_model_related_array, ex_hwvx_pc_world_model_related, g.unordered_ref.hwvx_pc_world_model_related, o + 4, e, 'down');
        break;
    case 7:
        e = ex_ml(x.section_4, g.hwvx_pc_grand_section_array, ex_hwvx_pc_grand_section, g.unordered_ref.hwvx_pc_grand_section, o + 4, e, 'down');
        break;
    case 8:
        e = ex_ml(x.section_4, g.hwvx_pc_unknown_whatever_array, ex_hwvx_pc_unknown_whatever, g.unordered_ref.hwvx_pc_unknown_whatever, o + 4, e, 'down');
        break;
    case 10:
        e = ex_ml(x.section_4, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 4, e, 'down');
        break;
    case 26:
        e = ex_ml(x.section_4, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 4, e, 'down');
        break;
    case 29:
        e = ex_ml(x.section_4, g.hwvx_pc_unknown_small_model_link_array, ex_hwvx_pc_unknown_small_model_link, g.unordered_ref.hwvx_pc_unknown_small_model_link, o + 4, e, 'down');
        break;
    }
    switch (x.u32_0) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 7:
    case 10:
    case 29:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_unknown_4_8t1, x.section_8, 'down');
        break;
    case 5:
    case 6:
    case 8:
    case 26:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_unknown_4_8t5, x.section_8, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_4t4(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 28, e, ex_hwvx_pc_unknown_4_4t4_28, x.section_28, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_32, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_4t4_28(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    sf32(o + 36, x.f32_36)

    switch (x.u8_33) {
    case 1:
        e = ex_s_offset(o + 40, e, ex_hwvx_pc_unknown_4_8t1_40t1, x.section_40, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 40, e, ex_hwvx_pc_unknown_4_8t1_40t2, x.section_40, 'down');
        break;
    }
    e = ex_s_offset(o + 44, e, ex_hwvx_pc_unknown_4_8t1_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1_40t1(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1_40t2(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 9, x.u8_9)

    switch (x.u8_9) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_hwvx_pc_unknown_4_8t1_40t2_12t0, x.section_12, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 12, e, ex_hwvx_pc_unknown_4_8t1_40t2_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_hwvx_pc_unknown_4_8t1_40t2_12t2, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1_40t2_12t0(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1_40t2_12t1(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su8(o + 16, x.u8_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1_40t2_12t2(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t1_44(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t5(o, x) {
    let e = o + 48
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)

    e = ex_s_offset(o + 28, e, ex_hwvx_pc_unknown_4_8t5_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_4_8t5_28(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su8(o + 3, x.u8_3)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    //amount?   su32(o +20, x.u32_20)
    su32(o + 28, x.u32_28)

    switch (x.u8_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_unknown_thing_4t0, x.section_4, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_unknown_thing_4t1, x.section_4, 'down');
        break;
    }
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_unknown_thing_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 32, e, ex_hwvx_pc_unknown_thing_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t0(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    e = ex_ml(x.unordered_hwvx_pc_sound_controls_24, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 24, e, 'down');
    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 4, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_pc_unknown_thing_4t0_36(temp_offset + (i * 4), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 32, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_hwvx_pc_unknown_thing_4t0_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t0_36(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t0_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t1(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 4, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_pc_unknown_thing_4t1_36(temp_offset + (i * 4), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 12, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_hwvx_pc_unknown_thing_4t1_44(temp_offset + (i * 12), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t1_36(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t1_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t2(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_unknown_thing_4t2_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_unknown_thing_4t2_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t2_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_4t2_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_thing_32(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf(o, x) {
    let e = o + 176
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su8(o + 8, x.u8_8)
    ex_patch(o + 16, g.model_array, x.model_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    su32(o + 56, x.u32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 70, x.u8_70)
    su8(o + 71, x.u8_71)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    su32(o + 84, x.u32_84)
    ex_patch(o + 92, g.texture_patch_array, x.texture_92)
    //amount?   su32(o +140, x.u32_140)
    //amount?   su32(o +148, x.u32_148)
    //amount?   su32(o +156, x.u32_156)

    switch (x.u8_4) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_hwvx_pc_asdf_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_hwvx_pc_asdf_12t2, x.section_12, 'down');
        break;
    }
    e = ex_ml(x.unordered_hwvx_pc_unknown_112, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 112, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_116, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 116, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_120, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 120, e, 'down');
    if (x.section_144.length) {
        su32(o + 140, x.section_144.length)
        su32(o + 144, e - g.m)
        g.oa.push(o + 144)
        let temp_offset = e
        e += divisible(x.section_144.length * 32, 16)
        for (let i = 0; i < x.section_144.length; i++) {
            e = ex_hwvx_pc_asdf_144(temp_offset + (i * 32), e, x.section_144[i])
        }
        ;
    }
    ;if (x.section_152.length) {
        su32(o + 148, x.section_152.length)
        su32(o + 152, e - g.m)
        g.oa.push(o + 152)
        let temp_offset = e
        e += divisible(x.section_152.length * 12, 16)
        for (let i = 0; i < x.section_152.length; i++) {
            e = ex_hwvx_pc_asdf_152(temp_offset + (i * 12), e, x.section_152[i])
        }
        ;
    }
    ;if (x.section_160.length) {
        su32(o + 156, x.section_160.length)
        su32(o + 160, e - g.m)
        g.oa.push(o + 160)
        let temp_offset = e
        e += divisible(x.section_160.length * 64, 16)
        for (let i = 0; i < x.section_160.length; i++) {
            e = ex_hwvx_pc_mysterious(temp_offset + (i * 64), e, x.section_160[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 164, e, ex_hwvx_pc_asdf_164, x.section_164, 'down');
    e = ex_s_offset(o + 168, e, ex_hwvx_pc_asdf_168, x.section_168, 'down');
    e = ex_s_offset(o + 172, e, ex_hwvx_pc_asdf_172, x.section_172, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_12t1(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_12t2(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_144(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_152(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_164(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_168(o, x) {
    let e = o + 48
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 44, x.f32_44)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_asdf_172(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec(o, x) {
    let e = o + 80
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 44, x.u32_44)

    e = ex_s_offset(o + 28, e, ex_hwvx_pc_unknown_idk_sec_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_unknown_idk_sec_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_pc_unknown_idk_sec_36, x.section_36, 'down');
    e = ex_s_offset(o + 40, e, ex_hwvx_pc_unknown_idk_sec_40, x.section_40, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_pc_unknown_idk_sec_48, x.section_48, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_28(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    su32(o + 28, x.u32_28)

    e = ex_ml(x.unordered_hwvx_pc_unknown_24, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_32(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_unknown_idk_sec_32_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_32_8(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_36(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_unknown_idk_sec_36_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_36_4(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_40(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_unknown_idk_sec_40_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_40_4(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_idk_sec_48(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_grand_section(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.model_array, x.model_0)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 16, e, ex_hwvx_pc_car_link, x.section_16, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_mysterious, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_whatever(o, x) {
    let e = o + 32
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_unknown_whatever_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_unknown_whatever_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_whatever_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_whatever_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_small_model_link(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 48, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_unknown_small_model_link_12(temp_offset + (i * 48), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_small_model_link_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    ex_patch(o + 28, g.model_array, x.model_28)

    e = ex_ml(x.unordered_hwvx_pc_unknown_link_section_32, g.hwvx_pc_unknown_link_section_array, ex_hwvx_pc_unknown_link_section, g.unordered_ref.hwvx_pc_unknown_link_section, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_link_section(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    //amount?   su32(o +24, x.u32_24)

    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 4, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_unknown_link_section_28(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_unknown_link_section_28(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +56, x.u32_56)

    e = ex_ml(x.unordered_hwvx_pc_text_32, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 32, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_36, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_unknown_44, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 44, e, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_pc_item_48, x.section_48, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_52, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 52, e, 'down');

    //     switch(x.u32_44){
    //     case offset (hwvx_pc_mysterious)</a> based on type [44]:
    //     e = ex_ml(x.section_60,g.hwvx_pc_mysterious_array ,ex_hwvx_pc_mysterious,g.unordered_ref.hwvx_pc_mysterious, o + 60, e, 'down');
    //     break;
    // }

    if (x.section_60.length) {
        su32(o + ___$$$___, x.section_60.length)
        su32(o + 60, e - g.m)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 64, 16)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_hwvx_pc_mysterious(temp_offset + (i * 64), e, x.section_60[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48(o, x) {
    let e = o + 96
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)
    su8(o + 46, x.u8_46)
    su8(o + 47, x.u8_47)
    su32(o + 48, x.u32_48)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_item_48_0, x.section_0, 'down');
    e = ex_ml(x.unordered_hwvx_pc_text_16, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_28, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 28, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48_0(o, x) {
    let e = o + 64
    //amount?   su32(o +8, x.u32_8)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 8, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_item_48_0_12(temp_offset + (i * 8), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_model_anims_1_16, g.hwvx_pc_model_anims_1_array, ex_hwvx_pc_model_anims_1, g.unordered_ref.hwvx_pc_model_anims_1, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_model_anims_2_20, g.hwvx_pc_model_anims_2_array, ex_hwvx_pc_model_anims_2, g.unordered_ref.hwvx_pc_model_anims_2, o + 20, e, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_item_48_0_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_pc_item_48_0_36, x.section_36, 'down');
    e = ex_s_offset(o + 40, e, ex_hwvx_pc_item_48_0_40, x.section_40, 'down');
    // switch(x.u32_44){
    //     case offset (hwvx_pc_mysterious)</a> based on type [44]:
    //     e = ex_ml(x.section_48,g.hwvx_pc_mysterious_array ,ex_hwvx_pc_mysterious,g.unordered_ref.hwvx_pc_mysterious, o + 48, e, 'down');
    //     break;
    // }  

    if (x.section_48.length) {
        su32(o + ___$$$___, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 64, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_pc_mysterious(temp_offset + (i * 64), e, x.section_48[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 52, e, ex_hwvx_pc_item_48_0_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48_0_12(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)
    su16(o + 4, x.u16_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48_0_32(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48_0_36(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48_0_40(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_item_48_0_52(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_sound_controls(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    //amount?   su32(o +8, x.u32_8)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 16, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_sound_controls_12(temp_offset + (i * 16), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_sound_controls_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 4, x.u8_4)
    //amount?   su32(o +8, x.u32_8)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_sound_controls_12_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_sound_controls_12_12(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_sound_section_0, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_sound_section(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    ex_patch(o + 20, g.sound_patch_array, x.sound_20)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 24, e, ex_hwvx_pc_sound_section_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_sound_section_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_sound_section_24(o, x) {
    let e = o + 12
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_sound_section_32(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings(o, x) {
    let e = o + 304
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    su32(o + 36, x.u32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)
    su32(o + 72, x.u32_72)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 96, x.f32_96)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)
    sf32(o + 112, x.f32_112)
    sf32(o + 116, x.f32_116)
    ex_patch(o + 120, g.texture_patch_array, x.texture_120)
    ex_patch(o + 124, g.texture_patch_array, x.texture_124)
    ex_patch(o + 128, g.texture_patch_array, x.texture_128)
    ex_patch(o + 132, g.texture_patch_array, x.texture_132)
    ex_patch(o + 136, g.texture_patch_array, x.texture_136)
    ex_patch(o + 140, g.texture_patch_array, x.texture_140)
    ex_patch(o + 144, g.texture_patch_array, x.texture_144)
    ex_patch(o + 148, g.texture_patch_array, x.texture_148)
    ex_patch(o + 152, g.texture_patch_array, x.texture_152)
    //amount?   su32(o +240, x.u32_240)
    //amount?   su32(o +248, x.u32_248)

    e = ex_s_offset(o + 156, e, ex_hwvx_pc_world, x.section_156, 'down');
    e = ex_string(o + 160, e, x.section_160)
    e = ex_string(o + 164, e, x.section_164)
    e = ex_s_offset(o + 192, e, ex_hwvx_pc_world_settings_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_hwvx_pc_world_settings_196, x.section_196, 'down');
    e = ex_ml(x.unordered_hwvx_pc_font_200, g.hwvx_pc_font_array, ex_hwvx_pc_font, g.unordered_ref.hwvx_pc_font, o + 200, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_interface_204, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 204, e, 'down');
    e = ex_s_offset(o + 224, e, ex_hwvx_pc_world_settings_224, x.section_224, 'down');
    e = ex_s_offset(o + 228, e, ex_hwvx_pc_world_settings_228, x.section_228, 'down');
    if (x.section_244.length) {
        su32(o + 240, x.section_244.length)
        su32(o + 244, e - g.m)
        g.oa.push(o + 244)
        let temp_offset = e
        e += divisible(x.section_244.length * 4, 16)
        for (let i = 0; i < x.section_244.length; i++) {
            e = ex_hwvx_pc_world_settings_244(temp_offset + (i * 4), e, x.section_244[i])
        }
        ;
    }
    ;if (x.section_252.length) {
        su32(o + 248, x.section_252.length)
        su32(o + 252, e - g.m)
        g.oa.push(o + 252)
        let temp_offset = e
        e += divisible(x.section_252.length * 4, 16)
        for (let i = 0; i < x.section_252.length; i++) {
            e = ex_hwvx_pc_world_settings_244(temp_offset + (i * 4), e, x.section_252[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 272, e, ex_hwvx_pc_world_settings_272, x.section_272, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_192(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_196(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 28, e, ex_hwvx_pc_world_settings_196_28, x.section_28, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_32, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_196_28(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_224(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_228(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_244(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_unknown_0, g.hwvx_pc_unknown_array, ex_hwvx_pc_unknown, g.unordered_ref.hwvx_pc_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_272(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_world_settings_272_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_world_settings_272_4(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface(o, x) {
    let e = o + 80
    su16(o + 0, x.u16_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    su32(o + 52, x.u32_52)
    sf32(o + 56, x.f32_56)
    su8(o + 60, x.u8_60)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 108, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_interface_16(temp_offset + (i * 108), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_pc_interface_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 28, e, ex_hwvx_pc_interface_28, x.section_28, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_32, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 32, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_36, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_40, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 40, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_44, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 44, e, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_pc_interface_48, x.section_48, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su32(o + 16, x.u32_16)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    su8(o + 36, x.u8_36)
    su8(o + 37, x.u8_37)
    su8(o + 38, x.u8_38)
    su8(o + 39, x.u8_39)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)
    su8(o + 43, x.u8_43)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)
    su8(o + 46, x.u8_46)
    su8(o + 47, x.u8_47)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    //amount?   su32(o +100, x.u32_100)

    switch (x.u8_1) {
    case 0:
        e = ex_s_offset(o + 20, e, ex_hwvx_pc_interface_16_20t0, x.section_20, 'down');
        break;
    case 1:
    case 12:
        e = ex_s_offset(o + 20, e, ex_hwvx_pc_interface_16_20t1, x.section_20, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 20, e, ex_hwvx_pc_interface_16_20t2, x.section_20, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 20, e, ex_hwvx_pc_interface_16_20t10, x.section_20, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 20, e, ex_hwvx_pc_interface_16_20t11, x.section_20, 'down');
        break;
    }
    e = ex_s_offset(o + 60, e, ex_hwvx_pc_interface_16_60, x.section_60, 'down');
    e = ex_s_offset(o + 68, e, ex_hwvx_pc_interface_16_68, x.section_68, 'down');
    e = ex_s_offset(o + 72, e, ex_hwvx_pc_interface_16_72, x.section_72, 'down');
    e = ex_s_offset(o + 96, e, ex_hwvx_pc_interface_16_96, x.section_96, 'down');
    if (x.section_104.length) {
        su32(o + 100, x.section_104.length)
        su32(o + 104, e - g.m)
        g.oa.push(o + 104)
        let temp_offset = e
        e += divisible(x.section_104.length * 12, 16)
        for (let i = 0; i < x.section_104.length; i++) {
            e = ex_hwvx_pc_interface_16_104(temp_offset + (i * 12), e, x.section_104[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    ex_patch(o + 4, g.texture_patch_array, x.texture_4)

    e = ex_s_offset(o + 16, e, ex_hwvx_pc_interface_16_20t0_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t0_16(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)
    su8(o + 12, x.u8_12)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_16_20t0_16_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t0_16_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t1(o, x) {
    let e = o + 32
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_hwvx_pc_text_0, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 0, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_font_4, g.hwvx_pc_font_array, ex_hwvx_pc_font, g.unordered_ref.hwvx_pc_font, o + 4, e, 'down');
    e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_16_20t1_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t1_8(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_16_20t1_8_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t1_8_4(o, e, x) {

    e = ex_ml(x.unordered_hwvx_pc_text_0, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t2(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_16_20t2_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t2_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +24, x.u32_24)

    e = ex_string(o + 12, e, x.section_12)
    e = ex_ml(x.unordered_hwvx_pc_text_16, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_interface_text_related_20, g.hwvx_pc_interface_text_related_array, ex_hwvx_pc_interface_text_related, g.unordered_ref.hwvx_pc_interface_text_related, o + 20, e, 'down');
    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 8, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_interface_16_20t2_4_28(temp_offset + (i * 8), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t2_4_28(o, e, x) {
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_16_20t2_4_28_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t2_4_28_4(o, x) {
    let e = o + 16
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t10(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_hwvx_pc_font_16, g.hwvx_pc_font_array, ex_hwvx_pc_font, g.unordered_ref.hwvx_pc_font, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_20t11(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_60(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_pc_interface_0, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 20, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_interface_16_68_12(temp_offset + (i * 20), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_interface_16_68_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_12(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_16_68_20_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8(o, x) {
    let e = o + 64
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 28, x.u32_28)
    su32(o + 36, x.u32_36)

    switch (x.u8_5) {
    case 1:
    case 32:
        e = ex_ml(x.section_0, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 0, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 0, e, ex_hwvx_pc_interface_16_68_20_8_0t11, x.section_0, 'down');
        break;
    }
    switch (x.u8_5) {
    case 6:
    case 15:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_16_68_20_8_8t15, x.section_8, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_16_68_20_8_8t17, x.section_8, 'down');
        break;
    }
    e = ex_string(o + 12, e, x.section_12)
    e = ex_ml(x.unordered_hwvx_pc_sound_controls_20, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 20, e, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_pc_interface_16_68_20_8_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_interface_16_68_20_8_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_0t11(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_16_68_20_8_0t11_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_0t11_4(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 2:
        e = ex_ml(x.section_4, g.hwvx_pc_interface_unknown_array, ex_hwvx_pc_interface_unknown, g.unordered_ref.hwvx_pc_interface_unknown, o + 4, e, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_16_68_20_8_0t11_4_4t3, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_0t11_4_4t3(o, x) {
    let e = o + 16
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_8t15(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_interface_16_68_20_8_8t15_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_16_68_20_8_8t15_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_8t15_0(o, x) {
    let e = o + 16
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_8t15_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_8t17(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_24(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_68_20_8_32(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_72(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 28, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_interface_16_72_8(temp_offset + (i * 28), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_72_8(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_16_72_8_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_72_8_8(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_16_72_8_8_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_72_8_8_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_96(o, x) {
    let e = o + 48
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_16_96_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 32, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_interface_16_96_4(temp_offset + (i * 32), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_interface_16_96_4(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_interface_16_96_28(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 40, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_pc_interface_16_96_36(temp_offset + (i * 40), e, x.section_36[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_96_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_96_28(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_96_36(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    sf32(o + 36, x.f32_36)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_16_104_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8(o, x) {
    let e = o + 60
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_16_104_8_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 32, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_pc_interface_16_104_8_12(temp_offset + (i * 32), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_interface_16_104_8_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 32, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_interface_16_104_8_28(temp_offset + (i * 32), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 40, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_pc_interface_16_104_8_36(temp_offset + (i * 40), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 32, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_hwvx_pc_interface_16_104_8_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_pc_sound_controls_48, g.hwvx_pc_sound_controls_array, ex_hwvx_pc_sound_controls, g.unordered_ref.hwvx_pc_sound_controls, o + 48, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8_4(o, e, x) {
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8_20(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8_28(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8_36(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    sf32(o + 36, x.f32_36)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_16_104_8_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_24_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8(o, x) {
    let e = o + 64
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 28, x.u32_28)
    su32(o + 36, x.u32_36)

    switch (x.u8_5) {
    case 1:
        e = ex_ml(x.section_0, g.hwvx_pc_interface_array, ex_hwvx_pc_interface, g.unordered_ref.hwvx_pc_interface, o + 0, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 0, e, ex_hwvx_pc_interface_24_8_0t11, x.section_0, 'down');
        break;
    }
    e = ex_s_offset(o + 8, e, ex_hwvx_pc_interface_24_8_8t17, x.section_8, 'down');
    e = ex_ml(x.unordered_hwvx_pc_sound_section_20, g.hwvx_pc_sound_section_array, ex_hwvx_pc_sound_section, g.unordered_ref.hwvx_pc_sound_section, o + 20, e, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_pc_interface_24_8_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_0t11(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_24_8_0t11_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_0t11_4(o, e, x) {
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_24_8_0t11_4_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_0t11_4_4(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_interface_24_8_0t11_4_4_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_24_8_0t11_4_4_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_0t11_4_4_0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_24_8_0t11_4_4_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_0t11_4_4_0_4(o, x) {
    let e = o + 16
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_0t11_4_4_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_8t17(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    e = ex_s_offset(o + 24, e, ex_hwvx_pc_interface_24_8_8t17_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_8t17_24(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_24_8_32(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_28(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 52, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_28_4(temp_offset + (i * 52), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_28_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su16(o + 2, x.u16_2)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_hwvx_pc_interface_28_4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_28_4_16(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_28_4_16_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_28_4_16_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_48(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_unknown(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_interface_unknown_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_unknown_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_unknown_0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_pc_interface_unknown_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_unknown_0_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_unknown_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su16(o + 2, x.u16_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_text_related(o, x) {
    let e = o + 64
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +44, x.u32_44)

    e = ex_ml(x.unordered_hwvx_pc_text_0, g.hwvx_pc_text_array, ex_hwvx_pc_text, g.unordered_ref.hwvx_pc_text, o + 0, e, 'down');
    e = ex_ml(x.unordered_hwvx_pc_font_8, g.hwvx_pc_font_array, ex_hwvx_pc_font, g.unordered_ref.hwvx_pc_font, o + 8, e, 'down');
    e = ex_s_offset(o + 12, e, ex_hwvx_pc_interface_text_related_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_pc_interface_text_related_20(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 16, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_pc_interface_text_related_20(temp_offset + (i * 16), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 16, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_pc_interface_text_related_20(temp_offset + (i * 16), e, x.section_48[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 52, e, ex_hwvx_pc_interface_text_related_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_text_related_12(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_text_related_20(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_interface_text_related_20_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_text_related_20_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_interface_text_related_52(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link(o, x) {
    let e = o + 80
    ex_patch(o + 20, g.texture_patch_array, x.texture_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    su32(o + 40, x.u32_40)
    //amount?   su32(o +44, x.u32_44)
    //amount?   su32(o +52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)

    e = ex_string(o + 4, e, x.section_4)
    e = ex_string(o + 8, e, x.section_8)
    e = ex_string(o + 12, e, x.section_12)
    e = ex_string(o + 16, e, x.section_16)
    e = ex_s_offset(o + 36, e, ex_hwvx_pc_link_36, x.section_36, 'down');
    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 12, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_pc_link_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 4, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_hwvx_pc_link_56(temp_offset + (i * 4), e, x.section_56[i])
        }
        ;
    }
    ;if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_hwvx_pc_link_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_36(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_link_36_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_36_8(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_link_36_8_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_36_8_4(o, e, x) {
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 8, e, ex_hwvx_pc_link_36_8_4_8, x.section_8, 'down');
    e = ex_string(o + 12, e, x.section_12)
    e = ex_s_offset(o + 20, e, ex_hwvx_pc_link_36_8_4_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_link_36_8_4_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_36_8_4_8(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_36_8_4_20(o, x) {
    let e = o + 16
    su16(o + 8, x.u16_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_36_8_4_28(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_48(o, e, x) {
    su8(o + 0, x.u8_0)

    e = ex_string(o + 4, e, x.section_4)
    e = ex_s_offset(o + 8, e, ex_hwvx_pc_link_48_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_48_8(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_link_56_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_link_56_0_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_link_56_0_4_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 8, e, ex_hwvx_pc_link_56_0_4_8, x.section_8, 'down');
    e = ex_string(o + 12, e, x.section_12)
    e = ex_s_offset(o + 20, e, ex_hwvx_pc_link_56_0_4_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_pc_link_56_0_4_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_4(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_link_56_0_4_4_4, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_4_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_8(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_20(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su16(o + 8, x.u16_8)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_link_56_0_4_20_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_20_4(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_pc_link_56_0_4_20_4_4, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_20_4_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_56_0_4_28(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_64(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_link_64_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_64_0(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_link_64_0_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_64_0_0(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_pc_link_64_0_0_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_pc_link_64_0_0_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_hwvx_pc_link_64_0_0_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_64_0_0_0(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 15, x.u8_15)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_64_0_0_4(o, x) {
    let e = o + 16
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 7, x.u8_7)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_link_64_0_0_8(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture_anims_0(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_pc_texture_anims_0_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 16, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_pc_texture_anims_0_16(temp_offset + (i * 16), e, x.section_16[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 20, e, ex_hwvx_pc_texture_anims_0_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture_anims_0_8(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture_anims_0_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture_anims_0_20(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_pc_texture_anims_0_20_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_pc_texture_anims_0_20_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
/* end export list */
