"use strict";

function get_pmwr_gc_sec_id(string) {
    switch (string) {
    case 'gjbf':
        return "pmwr_gc_file_header"
        break
    case ']7Zf':
        return "pmwr_gc_directory"
        break
    case 'dtpk':
        return "pmwr_gc_datapack"
        break
    case 'ordr':
        return "pmwr_gc_ordered"
        break
    case '4unr':
        return "pmwr_gc_unordered"
        break
    case 'bsck':
        return 'pmwr_gc_basic'
        break
    case 'unrd':
        return 'pmwr_gc_basic_04'
        break
    case 'ipll':
        return 'pmwr_gc_index_patch_list'
        break
    case 'opll':
        return 'pmwr_gc_offset_patch_list'
        break
    case 'txtr':
        return 'pmwr_gc_texture'
        break
    case 'audi':
        return 'pmwr_gc_audio'
        break
    case 'ad00':
        return 'pmwr_gc_audio_00'
        break
    case 'anm2':
        return 'pmwr_gc_model_animation_2'
        break
    case 'ma21':
        return 'pmwr_gc_model_animation_2_1'
        break

    case 'du1v':
        return "pmwr_gc_world"
        break
    case '95=m':
        return "pmwr_gc_collision"
        break
    case 'ttK_':
        return "pmwr_gc_collision_76"
        break
    case '?A6W':
        return "pmwr_gc_collision_76_16"
        break
    case 'Zn7D':
        return "pmwr_gc_collision_84"
        break
    case 'b0x8':
        return "pmwr_gc_collision_64"
        break
    case 'TUtL':
        return "pmwr_gc_collision_32t0"
        break
    case 'FXrY':
        return "pmwr_gc_collision_32t0_40"
        break
    case '40Qc':
        return "pmwr_gc_collision_32t1"
        break
    case 'prHh':
        return "pmwr_gc_collision_32t1_40"
        break
    case 'Hqdp':
        return "pmwr_gc_collision_32t1_40_00"
        break
    case 'kt_A':
        return "pmwr_gc_collision_32t1_36"
        break
    case 'm^_@':
        return "pmwr_gc_world_20"
        break
    case 'kYS7':
        return "pmwr_gc_type_entry_header"
        break
    case '5GU7':
        return "pmwr_gc_world_20_12t0"
        break
    case 'c6h0':
        return "pmwr_gc_world_20_12t1"
        break
    case '^PxM':
        return "pmwr_gc_world_20_12t2"
        break
    case '@<rE':
        return "pmwr_gc_world_20_12t2_100"
        break
    case 'r49S':
        return "pmwr_gc_world_20_12t2_56"
        break
    case 'Iw[p':
        return "pmwr_gc_world_20_12t2_64"
        break
    case 'L>23':
        return "pmwr_gc_world_20_12t2_76"
        break
    case '035Z':
        return "pmwr_gc_world_20_12t2_76_12"
        break
    case 'DQJ]':
        return "pmwr_gc_world_20_12t2_72"
        break
    case '=A]N':
        return "pmwr_gc_world_20_12t2_72_00"
        break
    case '0oiV':
        return "pmwr_gc_world_20_12t3"
        break
    case 'OEXF':
        return "pmwr_gc_world_20_12t4"
        break
    case 'jLKZ':
        return "pmwr_gc_world_20_12t4_128t1"
        break
    case 'nq>j':
        return "pmwr_gc_world_20_12t5"
        break
    case 'b:GC':
        return "pmwr_gc_world_20_12t8"
        break
    case 'CTtL':
        return "pmwr_gc_world_20_12t8_72"
        break
    case 'xs_c':
        return "pmwr_gc_world_20_12t8_76t1"
        break
    case '5S>P':
        return "pmwr_gc_world_20_12t8_76t7"
        break
    case 'vkwM':
        return "pmwr_gc_world_20_12t8_76t8"
        break
    case 'n4sv':
        return "pmwr_gc_world_20_12t8_76t8_04"
        break
    case 'SIFl':
        return "pmwr_gc_world_20_12t8_76t8_08"
        break
    case 'erOP':
        return "pmwr_gc_world_20_12t10"
        break
    case '1c0L':
        return "pmwr_gc_world_20_12t11"
        break
    case '?M7H':
        return "pmwr_gc_world_20_12t13"
        break
    case 'AEAO':
        return "pmwr_gc_world_20_12t14"
        break
    case 'n^Vl':
        return "pmwr_gc_world_20_12t15"
        break
    case '9L>=':
        return "pmwr_gc_world_08"
        break
    case 'gwmz':
        return "pmwr_gc_world_08_20"
        break
    case 'QpqG':
        return "pmwr_gc_world_08_16"
        break
    case '0vK5':
        return "pmwr_gc_world_08_16_12"
        break
    case 'UPu2':
        return "pmwr_gc_world_12"
        break
    case '4[mB':
        return "pmwr_gc_world_12_00"
        break
    case 'avV2':
        return "pmwr_gc_world_12_00_64"
        break
    case 'lzPS':
        return "pmwr_gc_world_12_00_52"
        break
    case 'nX@v':
        return "pmwr_gc_world_12_00_56"
        break
    case 'e=lK':
        return "pmwr_gc_world_32"
        break
    case ']n4k':
        return "pmwr_gc_world_24"
        break
    case 'WeH]':
        return "pmwr_gc_world_24_04"
        break
    case 'LEGR':
        return "pmwr_gc_world_24_12"
        break
    case 'oKj7':
        return "pmwr_gc_texture_animation_section"
        break
    case 'oVKp':
        return "pmwr_gc_pmwr_gc_texture_anim_1"
        break
    case 'W9gN':
        return "pmwr_gc_pmwr_gc_texture_anim_1_1"
        break
    case 'DUGU':
        return "pmwr_gc_pmwr_gc_texture_anim_1_1_1"
        break
    case 'bce@':
        return "pmwr_gc_pmwr_gc_texture_anim_1_2"
        break
    case 'tmZz':
        return "pmwr_gc_pmwr_gc_texture_anim_1_3"
        break
    case '<Fcc':
        return "pmwr_gc_model_animation_1"
        break
    case '8obt':
        return "pmwr_gc_model_animation_1_24t1"
        break
    case 'Y4yk':
        return "pmwr_gc_model_animation_1_24t28"
        break
    case 'br5g':
        return "pmwr_gc_model_animation_1_28t1"
        break
    case '2A$3':
        return "pmwr_gc_model_animation_1_28t3"
        break
    case '9Bv[':
        return "pmwr_gc_model_animation_1_28t28"
        break
    case 'q60>':
        return "pmwr_gc_model_animation_1_24t3"
        break
    case 'eL7H':
        return "pmwr_gc_model_animation_1_32"
        break
    case 'ToYt':
        return "pmwr_gc_model_animation_1_44"
        break
    case 'n1EB':
        return "pmwr_gc_model_animation_1_36"
        break
    case 'T3gz':
        return "pmwr_gc_model_animation_1_36t3"
        break
    case 'kiIB':
        return "pmwr_gc_model_animation_1_52t35"
        break
    case 'NyD=':
        return "pmwr_gc_model_animation_1_52t35_12"
        break
    case 'ck0b':
        return "pmwr_gc_model_animation_1_52t35_24"
        break
    case 'CUSG':
        return "pmwr_gc_model_animation_1_52t35_20"
        break
    case ':86P':
        return "pmwr_gc_model_animation_1_52t35_28"
        break
    case '2@wl':
        return "pmwr_gc_model_animation_1_52t35_16"
        break
    case 'tWQ4':
        return "pmwr_gc_model_animation_1_52t35_32"
        break
    case 'RsCY':
        return "pmwr_gc_model_animation_1_52t163"
        break
    case '?0jr':
        return "pmwr_gc_model_animation_1_52t163_08"
        break
    case '5D^0':
        return "pmwr_gc_model_animation_1_52t163_12"
        break
    case 'q1hz':
        return "pmwr_gc_GC_models_04_04_00"
        break
    case 'Oe30':
        return "pmwr_gc_GC_models_04_04_00_80"
        break
    case '?7i;':
        return "pmwr_gc_GC_models_04_04_00_80_04"
        break
    case 'Z2tc':
        return "pmwr_gc_GC_models_04_04_00_80_00"
        break
    case 'dfnV':
        return "pmwr_gc_GC_models_04_04_00_60"
        break
    case 'XEyN':
        return "pmwr_gc_GC_models_04_04_00_64"
        break
    case '6h2p':
        return "pmwr_gc_GC_models_04_04_00_68"
        break
    case 'FJ<O':
        return "pmwr_gc_GC_models_04_04_00_72"
        break
    case 'Pa1o':
        return "pmwr_gc_GC_models_04_04_00_76"
        break
    case 'QBm4':
        return "pmwr_gc_GC_models_04_04_00_76_08"
        break
    case 'MVXS':
        return "pmwr_gc_GC_models_04_04_00_76_12"
        break
    case 'sqK;':
        return "pmwr_gc_GC_models_04_04_00_76_16"
        break
    case 'f>0G':
        return "pmwr_gc_texture_animation_section"
        break
    case 'DO;O':
        return "pmwr_gc_models_old"
        break
    case 'vL>O':
        return "pmwr_gc_models"
        break
    case '8t?7':
        return "pmwr_gc_models_04"
        break
    case 'YdA;':
        return "pmwr_gc_models_12"
        break
    case 'FCg6':
        return "pmwr_gc_models_04_04"
        break
    case 'b9Et':
        return "pmwr_gc_models_04_04_00"
        break
    case 'loJ5':
        return "pmwr_gc_models_04_04_00_68"
        break
    case 'W5eQ':
        return "pmwr_gc_models_04_04_00_72"
        break
    case 'vcdi':
        return "pmwr_gc_models_04_04_00_76"
        break
    case 'y3Em':
        return "pmwr_gc_models_04_04_00_80"
        break
    case 'ZXhq':
        return "pmwr_gc_models_04_04_00_84"
        break
    case '=vXT':
        return "pmwr_gc_models_04_04_00_92"
        break
    case 'LSXh':
        return "pmwr_gc_models_04_04_00_92_12"
        break
    case 'l<;x':
        return "pmwr_gc_activator"
        break
    case 'glMF':
        return "pmwr_gc_activator_24"
        break
    case 'bGu2':
        return "pmwr_gc_activator_24_04t4"
        break
    case 'adhQ':
        return "pmwr_gc_activator_24_04t4_04"
        break
    case 'X4]]':
        return "pmwr_gc_activator_24_04t6"
        break
    case 'cLCA':
        return "pmwr_gc_activator_32"
        break
    case 'I0GU':
        return "pmwr_gc_activator_32_04"
        break
    case 'TW8<':
        return "pmwr_gc_activator_32_20"
        break
    case 'lwQw':
        return "pmwr_gc_activator_32_20_08"
        break
    case '@Rl9':
        return "pmwr_gc_activator_108"
        break
    case 'nWhz':
        return "pmwr_gc_activator_108_08t1"
        break
    case 'a^w<':
        return "pmwr_gc_activator_108_08t2"
        break
    case 'JK60':
        return "pmwr_gc_activator_108_08t2_08"
        break
    case 'Hjii':
        return "pmwr_gc_activator_116"
        break
    case '>YDp':
        return "pmwr_gc_activator_124"
        break
    case 'oS0Q':
        return "pmwr_gc_activator_144"
        break
    case '[]R5':
        return "pmwr_gc_activator_176"
        break
    case 'qe;J':
        return "pmwr_gc_activator_176_08"
        break
    case 'f<Az':
        return "pmwr_gc_activator_176_08t0"
        break
    case 'm==1':
        return "pmwr_gc_activator_176_08t13"
        break
    case '_27H':
        return "pmwr_gc_activator_176_08t19"
        break
    case '@?i9':
        return "pmwr_gc_activator_184"
        break
    case '?z[q':
        return "pmwr_gc_activator_248"
        break
    case 'eFj[':
        return "pmwr_gc_activator_248_04"
        break
    case '^8L8':
        return "pmwr_gc_activator_248_04_04t0"
        break
    case 'efdJ':
        return "pmwr_gc_activator_248_04_04t1"
        break
    case 'Kasf':
        return "pmwr_gc_activator_248_04_04t2"
        break
    case 'WwhE':
        return "pmwr_gc_activator_248_04_04t3"
        break
    case 'NlMB':
        return "pmwr_gc_activator_248_04_04t4"
        break
    case 'l^7U':
        return "pmwr_gc_activator_248_04_04t5"
        break
    case 'E4l6':
        return "pmwr_gc_activator_248_04_04t6"
        break
    case 'fG?:':
        return "pmwr_gc_activator_248_04_04t9"
        break
    case 'fza6':
        return "pmwr_gc_activator_248_04_04t11"
        break
    case '^SbD':
        return "pmwr_gc_activator_248_04_04t12"
        break
    case 'x^VU':
        return "pmwr_gc_activator_248_04_04t13"
        break
    case '=3BZ':
        return "pmwr_gc_activator_248_04_04t13_00"
        break
    case 'R<zK':
        return "pmwr_gc_activator_248_04_04t13_00_04"
        break
    case 'Gyl2':
        return "pmwr_gc_activator_248_04_04t15"
        break
    case '[YtQ':
        return "pmwr_gc_activator_248_32"
        break
    case 'b1U_':
        return "pmwr_gc_activator_248_32_08"
        break
    case ';Cj[':
        return "pmwr_gc_activator_248_32_16"
        break
    case 'gYJ6':
        return "pmwr_gc_activator_248_32_32"
        break
    case 'bL44':
        return "pmwr_gc_activator_248_32_36"
        break
    case 'Jyqr':
        return "pmwr_gc_activator_248_32_52"
        break
    case 'nEkh':
        return "pmwr_gc_activator_248_32_72"
        break
    case 'aZvb':
        return "pmwr_gc_activator_248_32_72_08t0"
        break
    case 'p;V@':
        return "pmwr_gc_activator_248_32_72_08t2"
        break
    case 'SI@e':
        return "pmwr_gc_activator_248_32_72_08t08"
        break
    case '5m=S':
        return "pmwr_gc_activator_248_32_72_08t10"
        break
    case ':EX6':
        return "pmwr_gc_activator_248_32_72_08t12"
        break
    case 'kgg>':
        return "pmwr_gc_activator_248_32_72_08t13"
        break
    case 'C0jR':
        return "pmwr_gc_activator_248_32_72_08t14"
        break
    case 'Rvzj':
        return "pmwr_gc_activator_248_32_72_08t15"
        break
    case 'UN>>':
        return "pmwr_gc_activator_248_32_72_08t16"
        break
    case '<JlD':
        return "pmwr_gc_activator_248_32_72_08t17"
        break
    case 'Cuaw':
        return "pmwr_gc_activator_248_32_72_08t18"
        break
    case '0DjR':
        return "pmwr_gc_activator_248_32_72_08t18_08"
        break
    case 'zTx1':
        return "pmwr_gc_activator_248_32_72_08t18_08_04t0"
        break
    case 'dDkA':
        return "pmwr_gc_activator_248_32_72_08t18_08_04t6"
        break
    case 'WtoY':
        return "pmwr_gc_activator_248_32_72_08t18_08_04t6_08"
        break
    case '6ST2':
        return "pmwr_gc_activator_248_32_72_08t20"
        break
    case '3GdC':
        return "pmwr_gc_activator_248_32_72_08t20_00t1"
        break
    case '?eVk':
        return "pmwr_gc_activator_248_32_72_08t22"
        break
    case 'lzmB':
        return "pmwr_gc_activator_248_32_72_08t22_00"
        break
    case 'dB@:':
        return "pmwr_gc_activator_248_32_72_08t22_00_04"
        break
    case 'VVui':
        return "pmwr_gc_activator_248_32_72_08t23"
        break
    case 'G:q=':
        return "pmwr_gc_activator_248_32_72_08t25"
        break
    case '8Mt3':
        return "pmwr_gc_activator_248_32_72_08t25_04"
        break
    case '3Zr0':
        return "pmwr_gc_activator_248_32_72_08t25_04_08"
        break
    case 'y_sB':
        return "pmwr_gc_activator_248_32_72_08t32"
        break
    case 'XAur':
        return "pmwr_gc_activator_248_32_76"
        break
    case '5xm<':
        return "pmwr_gc_activator_248_04_04t0_04"
        break
    case 'wOXy':
        return "pmwr_gc_activator_248_04_04t0_04_04"
        break
    case '=M;:':
        return "pmwr_gc_activator_248_04_04t0_04_04_04"
        break
    case '>phr':
        return "pmwr_gc_activator_248_04_04t0_04_04_04_04"
        break
    case 'HfAo':
        return "pmwr_gc_car"
        break
    case 'RA<?':
        return "pmwr_gc_car_00"
        break
    case '5bdf':
        return "pmwr_gc_car_00_180"
        break
    case 'ZbsY':
        return "pmwr_gc_car_00_180_00"
        break
    case '_>ez':
        return "pmwr_gc_car_00_180_00_08"
        break
    case 'O0LK':
        return "pmwr_gc_car_00_180_00_16"
        break
    case 'f[@[':
        return "pmwr_gc_car_00_180_00_16_08"
        break
    case '32;U':
        return "pmwr_gc_car_00_180_00_16_12"
        break
    case 'KPK3':
        return "pmwr_gc_car_00_180_04"
        break
    case 'UHO=':
        return "pmwr_gc_car_00_180_04_56"
        break
    case 'XN1m':
        return "pmwr_gc_car_00_180_04_80"
        break
    case '@p?P':
        return "pmwr_gc_car_00_180_04_84"
        break
    case '0CvZ':
        return "pmwr_gc_car_00_180_04_92"
        break
    case '7<Bd':
        return "pmwr_gc_car_00_180_20"
        break
    case 'SbaL':
        return "pmwr_gc_car_00_180_20_04t1"
        break
    case 'Yr?m':
        return "pmwr_gc_car_00_180_20_04t3"
        break
    case ';ljS':
        return "pmwr_gc_car_00_184"
        break
    case 'LRdo':
        return "pmwr_gc_car_00_184_04"
        break
    case '2ji0':
        return "pmwr_gc_car_00_184_04_00"
        break
    case '^HVp':
        return "pmwr_gc_car_00_184_04_00_16"
        break
    case 'oVHV':
        return "pmwr_gc_car_00_184_04_04"
        break
    case 'y5Pt':
        return "pmwr_gc_car_00_184_04_08"
        break
    case 'W[ZE':
        return "pmwr_gc_car_00_188"
        break
    case 'Z5qA':
        return "pmwr_gc_car_00_188_52"
        break
    case 'OwVo':
        return "pmwr_gc_car_00_188_52_04"
        break
    case '>uIC':
        return "pmwr_gc_car_00_188_52_04_04"
        break
    case 'po2W':
        return "pmwr_gc_car_00_188_60"
        break
    case '8QeR':
        return "pmwr_gc_car_00_188_68"
        break
    case 'P[9^':
        return "pmwr_gc_car_00_192"
        break
    case 'HCJ2':
        return "pmwr_gc_car_00_192_16"
        break
    case 'Io]5':
        return "pmwr_gc_car_00_192_24"
        break
    case 'i]Cj':
        return "pmwr_gc_car_00_196"
        break
    case 'i=si':
        return "pmwr_gc_car_00_200"
        break
    case 'Fv88':
        return "pmwr_gc_car_00_208"
        break
    case 'z3;b':
        return "pmwr_gc_car_00_208_04"
        break
    case 'OXT[':
        return "pmwr_gc_car_00_216"
        break
    case 't@XW':
        return "pmwr_gc_flag"
        break
    case 'UnoN':
        return "pmwr_gc_flag_12t2"
        break
    case 'NX>w':
        return "pmwr_gc_flag_12t3"
        break
    case 'n8]n':
        return "pmwr_gc_flag_12t3_12"
        break
    case 'VArk':
        return "pmwr_gc_flag_12t4"
        break
    case 'O7hZ':
        return "pmwr_gc_frame_font"
        break
    case '?KgJ':
        return "pmwr_gc_frame_font_28"
        break
    case '?HV;':
        return "pmwr_gc_frame_font_36"
        break
    case '28N;':
        return "pmwr_gc_frame_multi_font"
        break
    case 'usq_':
        return "pmwr_gc_frame_multi_font_04"
        break
    case 'uMI8':
        return "pmwr_gc_frame_sparkler"
        break
    case 't3JQ':
        return "pmwr_gc_frame_sparkler_16"
        break
    case 'akbg':
        return "pmwr_gc_frame_sparkler_16_48"
        break
    case 'P_ng':
        return "pmwr_gc_frame_sparkler_16_56"
        break
    case 'gOyr':
        return "pmwr_gc_frame_text"
        break
    case 'ykoP':
        return "pmwr_gc_gate"
        break
    case '10md':
        return "pmwr_gc_gate_24"
        break
    case 'l<e]':
        return "pmwr_gc_gate_84"
        break
    case 'd1fw':
        return "pmwr_gc_gate_84_04"
        break
    case '66sn':
        return "pmwr_gc_idk"
        break
    case ']5[d':
        return "pmwr_gc_idk_12"
        break
    case 'kSMq':
        return "pmwr_gc_idk_12_16"
        break
    case '627B':
        return "pmwr_gc_idk_20"
        break
    case 'F0T<':
        return "pmwr_gc_idk_20_08"
        break
    case 'FL91':
        return "pmwr_gc_idk_20_16"
        break
    case 'DE>T':
        return "pmwr_gc_interface"
        break
    case 'RY2Q':
        return "pmwr_gc_xdx_interface"
        break
    case 't[O_':
        return "pmwr_gc_interface_04"
        break
    case 'E>z=':
        return "pmwr_gc_interface_04_04"
        break
    case 'ff@u':
        return "pmwr_gc_interface_04_04_12t1"
        break
    case 'iRTP':
        return "pmwr_gc_interface_04_04_12t1_04"
        break
    case 'Y83X':
        return "pmwr_gc_interface_04_04_12t5"
        break
    case '_C8D':
        return "pmwr_gc_interface_04_04_12t7"
        break
    case 'c761':
        return "pmwr_gc_interface_04_04_12t8"
        break
    case 'hj0[':
        return "pmwr_gc_interface_04_04_12t8_04"
        break
    case 'iMTM':
        return "pmwr_gc_interface_04_04_12t9"
        break
    case 'ur09':
        return "pmwr_gc_interface_12"
        break
    case 'eM8<':
        return "pmwr_gc_interface_12_04t1026"
        break
    case 'MOIH':
        return "pmwr_gc_interface_12_04t1026_08"
        break
    case 'OfCN':
        return "pmwr_gc_interface_12_04t1026_08_04"
        break
    case 'CrJX':
        return "pmwr_gc_interface_12_04t1027"
        break
    case 'D;AX':
        return "pmwr_gc_interface_12_16"
        break
    case 'zuhf':
        return "pmwr_gc_interface_12_24"
        break
    case 'n1Ib':
        return "pmwr_gc_interface_12_24_04t11"
        break
    case 'iW5E':
        return "pmwr_gc_interface_12_24_04t11_04"
        break
    case 'APBG':
        return "pmwr_gc_xdx_interface_12_24_04t11_04"
        break
    case 'V9M^':
        return "pmwr_gc_demo_interface_12_24_04t11_04"
        break
    case 'a[6^':
        return "pmwr_gc_interface_12_24_04t11_04_00"
        break
    case 'N6j5':
        return "pmwr_gc_xdx_interface_12_24_04t11_04_04t0"
        break
    case 'cVgG':
        return "pmwr_gc_xdx_interface_12_24_04t11_04_04t1"
        break
    case 'prT=':
        return "pmwr_gc_xdx_interface_12_24_04t11_04_04t1_00"
        break
    case 'cTVw':
        return "pmwr_gc_xdx_interface_12_24_04t11_04_04t1_00_04"
        break
    case 'b6fO':
        return "pmwr_gc_xdx_interface_12_24_04t11_04_04t1_04"
        break
    case 'oDAO':
        return "pmwr_gc_interface_12_24_04t11_04_08t0"
        break
    case 'yeXP':
        return "pmwr_gc_interface_12_24_04t11_04_08t1"
        break
    case 'vc]9':
        return "pmwr_gc_interface_12_24_04t11_04_08t1_00"
        break
    case '2x:w':
        return "pmwr_gc_interface_12_24_04t11_04_08t1_00_04"
        break
    case '=[l3':
        return "pmwr_gc_interface_12_24_08"
        break
    case 'V1Qy':
        return "pmwr_gc_interface_12_24_08_00"
        break
    case 'pHeY':
        return "pmwr_gc_interface_48"
        break
    case 'a7PK':
        return "pmwr_gc_interface_56"
        break
    case 'T39]':
        return "pmwr_gc_xdx_interface_56"
        break
    case 'pm0N':
        return "pmwr_gc_interface_72"
        break
    case 'OOdl':
        return "pmwr_gc_xdx_interface_72"
        break
    case 'N0DQ':
        return "pmwr_gc_interface_72_08"
        break
    case 'KIz?':
        return "pmwr_gc_interface_72_08_08"
        break
    case 'kZ@D':
        return "pmwr_gc_xdx_interface_72_08_08_04t1"
        break
    case ']SvT':
        return "pmwr_gc_interface_72_08_08_04t2"
        break
    case 'ayw6':
        return "pmwr_gc_interface_72_08_08_04t2_04"
        break
    case 'VVT5':
        return "pmwr_gc_interface_72_08_08_04t6"
        break
    case 'Rogp':
        return "pmwr_gc_interface_72_20t4"
        break
    case '0qHw':
        return "pmwr_gc_interface_72_20t7"
        break
    case '86Z1':
        return "pmwr_gc_interface_72_20t38"
        break
    case 'kfIQ':
        return "pmwr_gc_interface_72_24t0"
        break
    case 'TDHb':
        return "pmwr_gc_interface_72_24t0_08"
        break
    case 'UDFi':
        return "pmwr_gc_interface_72_24t0_08_04"
        break
    case '42bp':
        return "pmwr_gc_interface_72_24t1"
        break
    case 'cisK':
        return "pmwr_gc_interface_72_24t1_08t1"
        break
    case 'Fw>1':
        return "pmwr_gc_interface_72_24t1_08t1_04"
        break
    case 'Rf>C':
        return "pmwr_gc_xdx_interface_72_24t1_08t1_04"
        break
    case 'DT6;':
        return "pmwr_gc_interface_72_24t1_08t3"
        break
    case 'QQ4F':
        return "pmwr_gc_interface_72_24t3"
        break
    case '51Zd':
        return "pmwr_gc_interface_72_24t3_04"
        break
    case 'B1Q2':
        return "pmwr_gc_interface_72_24t3_16"
        break
    case 'W<pr':
        return "pmwr_gc_interface_72_24t3_16_08"
        break
    case '9g_z':
        return "pmwr_gc_interface_72_24t5"
        break
    case 'Nz3x':
        return "pmwr_gc_interface_72_24t6"
        break
    case 'tcGx':
        return "pmwr_gc_interface_72_24t6_12"
        break
    case '4]MB':
        return "pmwr_gc_interface_72_24t10"
        break
    case 'l=Y3':
        return "pmwr_gc_interface_72_24t12"
        break
    case '9XxD':
        return "pmwr_gc_interface_72_24t13"
        break
    case 'p;K^':
        return "pmwr_gc_interface_72_24t13_04"
        break
    case '3W6^':
        return "pmwr_gc_interface_72_24t13_12"
        break
    case 'Voj:':
        return "pmwr_gc_interface_72_24t14"
        break
    case 'OOt:':
        return "pmwr_gc_interface_72_24t14_276"
        break
    case 'rjV^':
        return "pmwr_gc_interface_72_24t15"
        break
    case 'C=3B':
        return "pmwr_gc_interface_72_32"
        break
    case 'PnqU':
        return "pmwr_gc_interface_72_32_12"
        break
    case 'agcn':
        return "pmwr_gc_interface_72_32_20"
        break
    case 'is@t':
        return "pmwr_gc_interface_72_32_20_08t0"
        break
    case 'ux:5':
        return "pmwr_gc_interface_72_32_20_08t1"
        break
    case 'QnAj':
        return "pmwr_gc_interface_72_32_20_08t1_00"
        break
    case 'OqrU':
        return "pmwr_gc_interface_72_32_20_08t1_00_04"
        break
    case '5An;':
        return "pmwr_gc_interface_72_32_20_08t1_04"
        break
    case '5@r1':
        return "pmwr_gc_interface_72_44"
        break
    case 'h;wV':
        return "pmwr_gc_interface_72_52"
        break
    case 'Ngna':
        return "pmwr_gc_interface_72_52_04"
        break
    case '8p?F':
        return "pmwr_gc_interface_72_52_28"
        break
    case '3[sl':
        return "pmwr_gc_interface_72_52_36"
        break
    case ':zxj':
        return "pmwr_gc_interface_72_72"
        break
    case 'fW[L':
        return "pmwr_gc_interface_72_72_04"
        break
    case 'Sxdb':
        return "pmwr_gc_interface_72_72_04_04"
        break
    case 'i@qk':
        return "pmwr_gc_interface_72_72_04_04_16"
        break
    case 'KDcA':
        return "pmwr_gc_xdx_interface_72_72_04_04_16"
        break
    case 'IeC2':
        return "pmwr_gc_interface_72_72_04_04_16_08t0"
        break
    case 'CtGF':
        return "pmwr_gc_interface_72_72_04_12"
        break
    case 'Nz]g':
        return "pmwr_gc_interface_72_72_04_36"
        break
    case 'iY8;':
        return "pmwr_gc_interface_72_72_04_44"
        break
    case 'eRqr':
        return "pmwr_gc_link"
        break
    case ':0CB':
        return "pmwr_gc_link_00"
        break
    case '2x1F':
        return "pmwr_gc_link_00_04"
        break
    case 'CmW<':
        return "pmwr_gc_link_00_04_00"
        break
    case 'O7u_':
        return "pmwr_gc_link_00_04_00_04"
        break
    case '0ihg':
        return "pmwr_gc_link_intro"
        break
    case 'PZKL':
        return "pmwr_gc_link_intro_08"
        break
    case ']iPe':
        return "pmwr_gc_link_offset_index"
        break
    case ';qMw':
        return "pmwr_gc_link_32"
        break
    case '9oPY':
        return "pmwr_gc_link_32_00"
        break
    case 'S6c:':
        return "pmwr_gc_link_32_00_04"
        break
    case 'h2<4':
        return "pmwr_gc_link_32_00_04_04"
        break
    case 'k1X3':
        return "pmwr_gc_link_32_00_04_20"
        break
    case 'Qws_':
        return "pmwr_gc_link_32_00_04_20_04"
        break
    case 'CUqO':
        return "pmwr_gc_link_demo"
        break
    case 'KxuO':
        return "pmwr_gc_model_link"
        break
    case 'tiD5':
        return "pmwr_gc_model_link_24"
        break
    case 'kCx3':
        return "pmwr_gc_model_link_32"
        break
    case 'zdTo':
        return "pmwr_gc_model_link_52"
        break
    case 'FZJ=':
        return "pmwr_gc_model_link_56"
        break
    case 'DC4@':
        return "pmwr_gc_model_link_64"
        break
    case 'm6Wg':
        return "pmwr_gc_model_sub_link"
        break
    case '6HXc':
        return "pmwr_gc_mysterious"
        break
    case '9Ath':
        return "pmwr_gc_mysterious_04t5"
        break
    case 'A=jF':
        return "pmwr_gc_mysterious_04t5_56"
        break
    case 'EKNY':
        return "pmwr_gc_mysterious_04t5_16t0"
        break
    case '3?>d':
        return "pmwr_gc_mysterious_04t5_16t2"
        break
    case 'v_QQ':
        return "pmwr_gc_mysterious_04t5_16t3"
        break
    case 'm2pQ':
        return "pmwr_gc_mysterious_04t5_16t5"
        break
    case 'HvTH':
        return "pmwr_gc_mysterious_04t5_28"
        break
    case 'ppEO':
        return "pmwr_gc_mysterious_04t5_36"
        break
    case 'y8JQ':
        return "pmwr_gc_mysterious_04t5_44"
        break
    case 'I>8i':
        return "pmwr_gc_mysterious_04t5_52"
        break
    case 'LHk@':
        return "pmwr_gc_mysterious_04t7"
        break
    case 'VsIs':
        return "pmwr_gc_mysterious_04t7_12"
        break
    case 'MkA:':
        return "pmwr_gc_mysterious_04t7_36"
        break
    case 'tcdy':
        return "pmwr_gc_mysterious_04t10"
        break
    case 't@mD':
        return "pmwr_gc_mysterious_04t16"
        break
    case 'ha1^':
        return "pmwr_gc_mysterious_04t16_08"
        break
    case 'dY3z':
        return "pmwr_gc_mysterious_04t16_12"
        break
    case 'c7na':
        return "pmwr_gc_mysterious_04t16_36"
        break
    case '>>D@':
        return "pmwr_gc_mysterious_04t16_36_04"
        break
    case 't?fG':
        return "pmwr_gc_mysterious_04t16_36_04_04"
        break
    case 'YpBH':
        return "pmwr_gc_mysterious_04t16_36_04_04_04"
        break
    case '8JdH':
        return "pmwr_gc_mysterious_04t16_36_04_04_04_04"
        break
    case 'XMTK':
        return "pmwr_gc_mysterious_04t16_36_04_04_04_12"
        break
    case 'ToIp':
        return "pmwr_gc_mysterious_08t8"
        break
    case 'xp6s':
        return "pmwr_gc_mysterious_08t8t13"
        break
    case '4LSN':
        return "pmwr_gc_mysterious_04t9"
        break
    case 'VN@A':
        return "pmwr_gc_mysterious_04t9_08"
        break
    case 'i3=D':
        return "pmwr_gc_mysterious_04t9_08_08"
        break
    case ']HMa':
        return "pmwr_gc_mysterious_04t9_12"
        break
    case 'VjOc':
        return "pmwr_gc_mysterious_04t9_12_04"
        break
    case 'VGSK':
        return "pmwr_gc_mysterious_04t9_12_04_08"
        break
    case 'kN8O':
        return "pmwr_gc_mysterious_04t9_12_04_44"
        break
    case 'nnQh':
        return "pmwr_gc_mysterious_04t9_12_04_44_08"
        break
    case '=hI9':
        return "pmwr_gc_mysterious_04t9_12_04_44_12"
        break
    case 'yf_P':
        return "pmwr_gc_mysterious_04t9_12_12"
        break
    case '5qX^':
        return "pmwr_gc_object"
        break
    case 'GT<B':
        return "pmwr_gc_object_12"
        break
    case '9=vr':
        return "pmwr_gc_object_12_16"
        break
    case 'UB;s':
        return "pmwr_gc_object_32t15"
        break
    case '@CqO':
        return "pmwr_gc_object_32t15_04"
        break
    case 'MiLs':
        return "pmwr_gc_object_32t15_04_04"
        break
    case 'QIEy':
        return "pmwr_gc_object_32t16"
        break
    case '0Bai':
        return "pmwr_gc_object_32t17"
        break
    case 'zm@Z':
        return "pmwr_gc_object_32t18"
        break
    case 'z0[4':
        return "pmwr_gc_object_32t18_00"
        break
    case 'rGfM':
        return "pmwr_gc_sound_controls"
        break
    case 'wiT0':
        return "pmwr_gc_sound_controls_16"
        break
    case 'v;rj':
        return "pmwr_gc_sound_controls_16_04"
        break
    case 'zQp=':
        return "pmwr_gc_sound_section"
        break
    case 'SaUz':
        return "pmwr_gc_sound_section_08"
        break
    case 'lA@o':
        return "pmwr_gc_strange"
        break
    case '>_aO':
        return "pmwr_gc_um"
        break
    case 'ca0n':
        return "pmwr_gc_unknown"
        break
    case 'G0]Y':
        return "pmwr_gc_unknown_00"
        break
    case 'bE?F':
        return "pmwr_gc_unknown_00_04"
        break
    case 'T9qE':
        return "pmwr_gc_unknown_00_04_04t2"
        break
    case 'n7V5':
        return "pmwr_gc_unknown_00_04_04t2_80"
        break
    case '8FSQ':
        return "pmwr_gc_unknown_00_04_04t29"
        break
    case '8D5x':
        return "pmwr_gc_unknown_00_04_04t29_04"
        break
    case '0UVP':
        return "pmwr_gc_unknown_00_04_08t1"
        break
    case 'L;>l':
        return "pmwr_gc_unknown_00_04_08t1_48"
        break
    case 'FeqH':
        return "pmwr_gc_unknown_00_04_08t1_52t1"
        break
    case 'SIPI':
        return "pmwr_gc_unknown_00_04_08t1_52t2"
        break
    case '_h_0':
        return "pmwr_gc_unknown_00_04_08t1_52t2_12t0"
        break
    case 'g3ss':
        return "pmwr_gc_unknown_00_04_08t1_52t2_12t1"
        break
    case '8o2h':
        return "pmwr_gc_unknown_00_04_08t1_52t2_12t2"
        break
    case 'aeXG':
        return "pmwr_gc_unknown_00_04_08t2"
        break
    case 'HNBG':
        return "pmwr_gc_unknown_00_04_08t2_48"
        break
    case 'xOsA':
        return "pmwr_gc_unknown_00_04_08t2_52t1"
        break
    case 'ot?B':
        return "pmwr_gc_unknown_00_04_08t2_52t2"
        break
    case 'mK]d':
        return "pmwr_gc_unknown_00_04_08t2_52t2_12"
        break
    case '[@Qe':
        return "pmwr_gc_unknown_00_04_08t3"
        break
    case 'HNsk':
        return "pmwr_gc_unknown_00_04_08t3_48"
        break
    case '[nPw':
        return "pmwr_gc_unknown_00_04_08t3_52"
        break
    case '?edl':
        return "pmwr_gc_unknown_00_04_08t4"
        break
    case ':jnI':
        return "pmwr_gc_unknown_00_04_08t5"
        break
    case 'boTV':
        return "pmwr_gc_unknown_00_04_08t5_04"
        break
    case 'xjr9':
        return "pmwr_gc_unknown_00_04_08t6"
        break
    case 'bS<J':
        return "pmwr_gc_unknown_00_04_08t26"
        break
    case '^<K0':
        return "pmwr_gc_unknown_00_04_08t29"
        break
    case 'STBQ':
        return "pmwr_gc_unknown_00_04_08t29_52"
        break
    case '9NDF':
        return "pmwr_gc_unknown_00_04_08t31"
        break
    case 'bYj6':
        return "pmwr_gc_unknown_00_04_08t31_52"
        break
    case 'MG??':
        return "pmwr_gc_unknown_00_04_08t32"
        break
    case 'bOav':
        return "pmwr_gc_unknown_00_04_08t34"
        break
    case 'eQkl':
        return "pmwr_gc_unknown_00_04_08t34_16"
        break
    case '8LcL':
        return "pmwr_gc_unknown_00_04_04t1"
        break
    case 'P9tx':
        return "pmwr_gc_unknown_00_04_04t1_04t0"
        break
    case '3C4>':
        return "pmwr_gc_unknown_00_04_04t1_04t0_04"
        break
    case 'jtv[':
        return "pmwr_gc_unknown_00_04_04t1_04t0_40"
        break
    case '4M_t':
        return "pmwr_gc_unknown_00_04_04t1_04t0_48"
        break
    case '@B[a':
        return "pmwr_gc_unknown_00_04_04t1_04t0_56"
        break
    case ']49q':
        return "pmwr_gc_unknown_00_04_04t1_04t0_64"
        break
    case ':oQ<':
        return "pmwr_gc_unknown_00_04_04t1_04t0_64_04"
        break
    case 'd:QD':
        return "pmwr_gc_unknown_00_04_04t1_04t1"
        break
    case '5K;B':
        return "pmwr_gc_unknown_00_04_04t1_04t1_04"
        break
    case 'pt1V':
        return "pmwr_gc_unknown_00_04_04t1_04t1_44"
        break
    case 'DBM]':
        return "pmwr_gc_unknown_00_04_04t1_04t1_56"
        break
    case 'GPE3':
        return "pmwr_gc_unknown_00_04_04t1_04t1_64"
        break
    case '5mr_':
        return "pmwr_gc_unknown_00_04_04t1_04t1_64_04"
        break
    case 'wX4A':
        return "pmwr_gc_unknown_00_04_04t1_04t2"
        break
    case 'V]Ki':
        return "pmwr_gc_unknown_00_04_04t1_04t2_04"
        break
    case 'z91l':
        return "pmwr_gc_unknown_00_04_04t1_04t2_20"
        break
    case 'bA]>':
        return "pmwr_gc_unknown_00_04_04t1_24"
        break
    case 'iL8Y':
        return "pmwr_gc_unknown_00_04_04t1_32"
        break
    case 'fptO':
        return "pmwr_gc_unknown_00_04_04t5"
        break
    case '7d4l':
        return "pmwr_gc_unknown_00_04_04t5_04"
        break
    case 'H>2U':
        return "pmwr_gc_unknown_00_04_04t5_04_12t103"
        break
    case 'Yz^8':
        return "pmwr_gc_unknown_00_04_04t5_04_12t105"
        break
    case 'kluT':
        return "pmwr_gc_unknown_00_04_04t5_04_20"
        break
    case 'VkuS':
        return "pmwr_gc_unknown_00_04_04t5_12"
        break
    case 'g=BX':
        return "pmwr_gc_unknown_00_04_04t5_12_04"
        break
    case ';pec':
        return "pmwr_gc_unknown_00_04_04t5_20"
        break
    case 'TuTs':
        return "pmwr_gc_unknown_00_04_04t5_20_04"
        break
    case 'db:b':
        return "pmwr_gc_unknown_00_04_04t5_28"
        break
    case 'h8pJ':
        return "pmwr_gc_unknown_00_04_04t5_28_04"
        break
    case 'WosI':
        return "pmwr_gc_unknown_00_04_04t5_36"
        break
    case '?SSF':
        return "pmwr_gc_unknown_00_04_04t5_28_04_00"
        break
    case '^[HJ':
        return "pmwr_gc_unknown_00_04_04t5_28_04_00_04t1"
        break
    case 'NOjR':
        return "pmwr_gc_unknown_00_04_04t5_28_04_00_04t2"
        break
    case 'x?E:':
        return "pmwr_gc_var"
        break
    case 'MsNU':
        return "pmwr_gc_var_148"
        break
    case 'ntGe':
        return "pmwr_gc_var_164"
        break
    case '0I;q':
        return "pmwr_gc_var_164_12"
        break
    case '3vQU':
        return "pmwr_gc_var_164_12_12t1"
        break
    case 'vrd]':
        return "pmwr_gc_var_164_12_12t1_00"
        break
    case 'UmFo':
        return "pmwr_gc_var_164_12_12t1_00_00"
        break
    case '0G7L':
        return "pmwr_gc_var_164_12_12t2"
        break
    case ';w[y':
        return "pmwr_gc_var_164_12_12t2_04t1"
        break
    case 'i7Ed':
        return "pmwr_gc_var_164_12_12t2_04t1_12"
        break
    case 'hY6P':
        return "pmwr_gc_var_164_12_12t2_04t1_16"
        break
    case 'FLXC':
        return "pmwr_gc_var_164_12_12t2_04t4"
        break
    case '[J^i':
        return "pmwr_gc_var_164_12_12t2_04t4_16"
        break
    case '_Wx1':
        return "pmwr_gc_var_164_12_12t2_04t7"
        break
    case 'Mb29':
        return "pmwr_gc_var_164_12_12t2_04t8"
        break
    case 'xSo?':
        return "pmwr_gc_var_164_12_12t2_04t8_16"
        break
    case 'pWAh':
        return "pmwr_gc_var_164_12_12t2_04t16"
        break
    case 'CfjJ':
        return "pmwr_gc_var_164_12_12t5"
        break
    case 'WOhQ':
        return "pmwr_gc_var_164_12_12t5_04"
        break
    case 'gfcx':
        return "pmwr_gc_var_164_12_12t5_04_08"
        break
    case 'MtmS':
        return "pmwr_gc_var_164_12_12t6"
        break
    case 'rG4V':
        return "pmwr_gc_var_164_12_12t6_00t1"
        break
    case 'yEjl':
        return "pmwr_gc_var_164_12_12t6_00t1_08"
        break
    case '0FaK':
        return "pmwr_gc_var_164_12_12t6_00t2"
        break
    case 'CjLK':
        return "pmwr_gc_var_164_12_12t7"
        break
    case 'N@a:':
        return "pmwr_gc_var_164_12_12t7_00"
        break
    case 'g7MX':
        return "pmwr_gc_var_164_12_12t8"
        break
    case '<A3S':
        return "pmwr_gc_var_164_12_12t8_00t2"
        break
    case 't2xr':
        return "pmwr_gc_var_164_12_12t8_00t2_04"
        break
    case '^GKV':
        return "pmwr_gc_var_164_12_12t8_00t2_12"
        break
    case '];<:':
        return "pmwr_gc_var_164_12_12t8_04t3"
        break
    case '9>rf':
        return "pmwr_gc_var_164_12_12t8_04t3_12"
        break
    case '7P4K':
        return "pmwr_gc_var_164_12_12t14"
        break
    case 'kfsV':
        return "pmwr_gc_var_164_12_12t14_00"
        break
    case 'C]5S':
        return "pmwr_gc_var_164_12_12t15"
        break
    case 'MQ=j':
        return "pmwr_gc_var_164_12_12t16"
        break
    case 'z>10':
        return "pmwr_gc_var_164_12_12t24"
        break
    case 'DDNr':
        return "pmwr_gc_var_164_12_12t24_04"
        break
    case 'Ez35':
        return "pmwr_gc_var_164_20"
        break
    case '5Rfm':
        return "pmwr_gc_var_164_20_04"
        break
    case 'sWpE':
        return "pmwr_gc_var_164_20_04_12t1604"
        break
    case 'e:KD':
        return "pmwr_gc_var_164_20_04_12t1608"
        break
    case 'aFXA':
        return "pmwr_gc_var_164_20_04_12t1618"
        break
    case 'VGa8':
        return "pmwr_gc_var_164_20_04_12t1618_00t1"
        break
    case '9]Mz':
        return "pmwr_gc_var_164_20_04_12t1618_00t1_12"
        break
    case ']C5i':
        return "pmwr_gc_var_164_20_04_12t1620"
        break
    case 'KNRF':
        return "pmwr_gc_var_164_20_04_12t1620_00"
        break
    case 'TWdw':
        return "pmwr_gc_var_164_20_04_12t1636"
        break
    case '3bc6':
        return "pmwr_gc_var_164_20_04_12t1636_00"
        break
    case 'M^bs':
        return "pmwr_gc_var_164_20_04_20"
        break
    case '2yh2':
        return "pmwr_gc_var_164_20_04_20_08t5"
        break
    case 't_Kv':
        return "pmwr_gc_var_164_20_04_20_08t5_00t1"
        break
    case 'yef>':
        return "pmwr_gc_var_164_20_04_20_08t5_00t1_04"
        break
    case 'T3WN':
        return "pmwr_gc_var_164_20_04_20_08t5_00t1_12"
        break
    case 'nWhu':
        return "pmwr_gc_var_164_20_04_20_08t6"
        break
    case 'tnxV':
        return "pmwr_gc_var_164_20_04_20_08t6_00"
        break
    case 'rqP<':
        return "pmwr_gc_var_168"
        break
    case 'w4lc':
        return "pmwr_gc_world_settings"
        break
    case '>d2d':
        return "pmwr_gc_world_settings_04"
        break
    case '^f[:':
        return "pmwr_gc_world_settings_12"
        break
    case 'v[_>':
        return "pmwr_gc_world_settings_36"
        break
    case 'mQo9':
        return "pmwr_gc_world_settings_48"
        break
    case '8>lm':
        return "pmwr_gc_world_settings_48_00"
        break
    case '0WjQ':
        return "pmwr_gc_world_settings_52"
        break
    case 'WR@L':
        return "pmwr_gc_world_settings_56"
        break
    case 'RY>]':
        return "pmwr_gc_world_settings_60"
        break
    case 'gLBs':
        return "pmwr_gc_world_settings_64"
        break
    case 'S19K':
        return "pmwr_gc_world_settings_68"
        break
    case 'TeAb':
        return "pmwr_gc_world_settings_72"
        break
    case '3P>U':
        return "pmwr_gc_world_settings_192"
        break
    case 'ur=P':
        return "pmwr_gc_world_settings_192_40"
        break
    case 'fX1=':
        return "pmwr_gc_world_settings_196"
        break
    case '[wZG':
        return "pmwr_gc_world_settings_196_04"
        break
    case '@mN[':
        return "pmwr_gc_world_settings_196_04_04"
        break
    case 'Bx@2':
        return "pmwr_gc_wtf"
        break
    case 'i3[;':
        return "pmwr_gc_wtf_04"
        break
    case 'LLg4':
        return "pmwr_gc_wtf_08"
        break
    case 'W]Kg':
        return "pmwr_gc_wtf_08_00"
        break
    case ']W;V':
        return "pmwr_gc_wtf_08_00_04"
        break
    case 'Ec5z':
        return "pmwr_gc_wtf_08_00_12"
        break
    case 'gQCH':
        return "pmwr_gc_wtf_08_08t1"
        break
    case 'ao0G':
        return "pmwr_gc_wtf_08_08t1_00"
        break
    case 'tc8t':
        return "pmwr_gc_wtf_08_08t1_00_04"
        break
    case 'MFhc':
        return "pmwr_gc_wtf_08_08t1_00_12"
        break
    case 'ImCk':
        return "pmwr_gc_wtf_08_08t1_08"
        break
    case '3;Ty':
        return "pmwr_gc_wtf_08_08t1_08_08"
        break
    case '?400':
        return "pmwr_gc_wtf_08_08t1_08_20t0"
        break
    case 'g<lB':
        return "pmwr_gc_wtf_08_08t3"
        break
    case '[A]p':
        return "pmwr_gc_wtf_08_08t3_00"
        break
    case 'q]]Z':
        return "pmwr_gc_wtf_08_08t3_00_04"
        break
    case '555;':
        return "pmwr_gc_wtf_08_08t3_00_12"
        break
    case '20?^':
        return "pmwr_gc_wtf_08_08t3_08"
        break
    case 'YaP2':
        return "pmwr_gc_wtf_08_08t3_08_08"
        break
    case 'Ypzz':
        return "pmwr_gc_wtf_08_08t3_08_20"
        break
    case '>?Pg':
        return "pmwr_gc_wtf_08_08t3_12"
        break
    case 'AJtY':
        return "pmwr_gc_wtf_08_08t3_12_04"
        break
    case 'Eph7':
        return "pmwr_gc_wtf_08_08t3_20"
        break
    case 'ei^6':
        return "pmwr_gc_wtf_08_08t3_20_08"
        break
    case '5]W2':
        return "pmwr_gc_wtf_08_08t3_24"
        break
    case 'p8F?':
        return "pmwr_gc_wtf_08_08t3_24_04"
        break
    case 'l4ZW':
        return "pmwr_gc_wtf_08_08t3_24_12"
        break
    case 'N=Kn':
        return "pmwr_gc_wtf_08_08t3_32"
        break
    case '>vXm':
        return "pmwr_gc_wtf_08_08t3_32_08"
        break
    case '5DxE':
        return "pmwr_gc_wtf_12"
        break
    case 'kMV6':
        return "pmwr_gc_wtf_12_00"
        break
    case 'xu1^':
        return "pmwr_gc_wtf_12_00_04"
        break
    default:
        return null
    }
}
async function im_pmwr_gc_x(index) {
    id_offset.push(0);
    x.push({
        id: gen_id(),
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_pmwr_gc_file_header(0, 0, x[index].format)
}

function im_pmwr_gc_file_header(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        version: u32(o + 8),
        directory: [],
    });

    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let ii = 0; ii < u32(12); ii++) {
        let a = Date.now()
        im_pmwr_gc_directory(16 + (ii * 24), ii, x[0].directory, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log("saved in " + time_array)

    return x[i].id
    // 16 bytes;

}

function im_pmwr_gc_directory(o, i, x, directory_offset) {
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
        pmwr_gc_texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
        temp_pmwr_gc_world_offset_holder: [],
        temp_pmwr_gc_world_offset_holder_5: [],
        pmwr_gc_models_array: [],
        pmwr_gc_car_array: [],
        pmwr_gc_link_array: [],
        pmwr_gc_idk_array: [],
        pmwr_gc_interface_array: [],
        pmwr_gc_frame_sparkler_array: [],
        pmwr_gc_frame_font_array: [],
        pmwr_gc_frame_multi_font_array: [],
        pmwr_gc_frame_text_array: [],
        pmwr_gc_sound_controls_array: [],
        pmwr_gc_sound_section_array: [],
        pmwr_gc_model_link_array: [],
        pmwr_gc_model_sub_link_array: [],
        pmwr_gc_wtf_array: [],
        pmwr_gc_unknown_array: [],
        pmwr_gc_unknown_00_array: [],
        pmwr_gc_unknown_00_04_04t1_array: [],
        pmwr_gc_unknown_00_04_04t5_array: [],
        pmwr_gc_unknown_00_04_04t5_28_04_00_array: [],
        pmwr_gc_activator_array: [],
        pmwr_gc_activator_248_04_04t0_04_array: [],
        pmwr_gc_flag_array: [],
        pmwr_gc_var_array: [],
        pmwr_gc_gate_array: [],
        pmwr_gc_strange_array: [],
        pmwr_gc_object_array: [],
        pmwr_gc_um_array: [],
        pmwr_gc_world_settings_array: [],
        pmwr_gc_world_20_12t0_array: [],
        pmwr_gc_world_20_12t1_array: [],
        pmwr_gc_world_20_12t4_array: [],
        pmwr_gc_world_20_12t8_array: [],
        pmwr_gc_world_20_12t10_array: [],
        pmwr_gc_world_20_12t11_array: [],
        pmwr_gc_world_20_12t13_array: [],
        pmwr_gc_world_20_12t14_array: [],
        pmwr_gc_world_20_12t15_array: [],
        pmwr_gc_world_20_12t8_76t8_04_array: [],
        pmwr_gc_world_20_12t8_76t8_08_array: [],
        pmwr_gc_model_animation_1_array: [],
        pmwr_gc_model_animation_2_array: [],
        pmwr_gc_models_array: [],
        pmwr_gc_mysterious_array: [],
        pmwr_gc_mysterious_04t9_array: [],
        pmwr_gc_world_20_12t0_array: [],
        pmwr_gc_world_20_12t1_array: [],
        pmwr_gc_world_20_12t2_array: [],
        pmwr_gc_world_20_12t3_array: [],
        pmwr_gc_world_20_12t4_array: [],
        pmwr_gc_world_20_12t5_array: [],
        pmwr_gc_world_20_12t8_array: [],
        pmwr_gc_world_20_12t10_array: [],
        pmwr_gc_world_20_12t11_array: [],
        pmwr_gc_world_20_12t13_array: [],
        pmwr_gc_world_20_12t14_array: [],
        pmwr_gc_world_20_12t15_array: [],
        temp72end: [],
        temp72arry: [],
        pmwr_gc_car_00_180_04_84_array: [],
        pmwr_gc_car_00_180_array: [],
        pmwr_gc_car_00_192_16_array: [],
        pmwr_gc_car_00_184_array: [],
        pmwr_gc_unknown_00_04_04t2_array: [],
        pmwr_gc_activator_248_32_72_08t18_08_04t0_array: [],
        pmwr_gc_object_32t15_array: [],
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
        version: u32(o),
        type: g.file_dir_type,
        index: u32(o + 8),
        unknown_12: u32(o + 12),
        datapack: [],
    });

    im_pmwr_gc_datapack(u32(o + 20) + directory_offset, x[i].datapack)

    // im_pmwr_gc_datapack(u32(o + 20) + global, x[i].section_datapack)

    return x[i].id
    // 24 bytes;

}

function im_pmwr_gc_datapack(o, x) {
    g.m = 0
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dtpk",

        pmwr_gc_audio: [],
        pmwr_gc_index_patch_list: [],
        pmwr_gc_audio_index_patch_padding: 0,
        ordered: [],
        string_1: im_string(o + 80, o + 91),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        string_2: im_string(o + 100, o + 111),
        u32_112: u32(o + 112),
        u32_116: u32(o + 116),
        offset_patch_list: [],
    })

    g.datapack_offset = o
    g.datapack_ref = x[0]

    //calulate end of datapack
    let offset_after_datapack = get_datapack_end(o)
    let offset_after_pmwr_gc_audio = offset_after_datapack + divisible(u32(o + 8) * 4, 32)
    let offset_index_patch = offset_after_pmwr_gc_audio + u32(o + 4)

    g.m = offset_index_patch + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

    //pmwr_gc_audio
    let padding_test = im_pmwr_gc_audio(offset_after_datapack, x[0].pmwr_gc_audio, u32(o + 8))

    x[0].pmwr_gc_audio_index_patch_padding = offset_index_patch - padding_test
    //pmwr_gc_index_patch_list
    im_pmwr_gc_index_patch_list(offset_index_patch, x[0].pmwr_gc_index_patch_list)
    im_pmwr_demo_get_offset_patch_list(o, g.m + u32(o), x[0].offset_patch_list)

    //ordered
    im_pmwr_gc_ordered(g.m, x[0].ordered)

    return

    function get_datapack_end(o) {
        if (g.console === "ps2") {
            o = divisible(o + 120, 2048)
        } else if (g.console === "psp") {
            o += 128
        } else if (g.datapack_version === "geometry") {
            o += 84
        } else {
            o += 120
        }
        return o
    }

    function im_pmwr_gc_index_patch_list(o, x) {
        let pmwr_gc_texture_animation_offset = o + (u32(g.datapack_offset + 16) * 8)
        let sound_offset = o + ((u32(g.datapack_offset + 16) + u32(g.datapack_offset + 52)) * 8)

        id_offset.push(o);
        x.push({
            id: gen_id(),
            sec_id: "ipll",
            pmwr_gc_texture: im_patch_list(o, u32(g.datapack_offset + 16), 't'),
            pmwr_gc_texture_animation: im_patch_list(pmwr_gc_texture_animation_offset, u32(g.datapack_offset + 52), 'a'),
            sound: im_patch_list(sound_offset, u32(g.datapack_offset + 28), 's'),
        })

        g.pmwr_gc_texture_patch_ref = x[0].pmwr_gc_texture
        g.animation_patch_ref = x[0].pmwr_gc_texture_animation
        g.sound_patch_ref = x[0].sound

        // no reason to keep this in x
    }
}

function im_pmwr_demo_get_offset_patch_list(o, patch_offset, x) {
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

function im_pmwr_gc_ordered(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ordr",

        file_specific: [],
        pmwr_gc_models: [],
        pmwr_gc_texture_animation: [],
        pmwr_gc_model_animation_1: [],
        pmwr_gc_model_animation_2: [],
        pmwr_gc_textures: [],
        pmwr_gc_share_end_section: [],
        pmwr_gc_texturepadding: 0,
        unordered: [{
            sec_id: "4unr",
            pmwr_gc_car: [],
            pmwr_gc_link: [],
            pmwr_gc_idk: [],
            pmwr_gc_interface: [],
            pmwr_gc_frame_sparkler: [],
            pmwr_gc_frame_font: [],
            pmwr_gc_frame_multi_font: [],
            pmwr_gc_frame_text: [],
            pmwr_gc_sound_controls: [],
            pmwr_gc_sound_section: [],
            pmwr_gc_model_link: [],
            pmwr_gc_model_sub_link: [],
            pmwr_gc_wtf: [],
            pmwr_gc_unknown: [],
            pmwr_gc_unknown_00: [],
            pmwr_gc_unknown_00_04_04t1: [],
            pmwr_gc_unknown_00_04_04t5: [],
            pmwr_gc_unknown_00_04_04t5_28_04_00: [],
            pmwr_gc_activator: [],
            pmwr_gc_activator_248_04_04t0_04: [],
            pmwr_gc_flag: [],
            pmwr_gc_var: [],
            pmwr_gc_gate: [],
            pmwr_gc_strange: [],
            pmwr_gc_object: [],
            pmwr_gc_um: [],
            pmwr_gc_world_settings: [],
            pmwr_gc_world_20_12t0: [],
            pmwr_gc_world_20_12t1: [],
            pmwr_gc_world_20_12t4: [],
            pmwr_gc_world_20_12t8: [],
            pmwr_gc_world_20_12t10: [],
            pmwr_gc_world_20_12t11: [],
            pmwr_gc_world_20_12t13: [],
            pmwr_gc_world_20_12t14: [],
            pmwr_gc_world_20_12t15: [],
            pmwr_gc_world_20_12t8_76t8_04: [],
            pmwr_gc_world_20_12t8_76t8_08: [],
            pmwr_gc_car_00_180_04_84: [],
            pmwr_gc_car_00_180: [],
            pmwr_gc_car_00_192_16: [],
            pmwr_gc_car_00_184: [],

            pmwr_gc_mysterious: [],
            pmwr_gc_mysterious_04t9: [],
            //move o ordered later
            pmwr_gc_world_20_12t0: [],
            pmwr_gc_world_20_12t1: [],
            pmwr_gc_world_20_12t2: [],
            pmwr_gc_world_20_12t3: [],
            pmwr_gc_world_20_12t4: [],
            pmwr_gc_world_20_12t5: [],
            pmwr_gc_world_20_12t8: [],
            pmwr_gc_world_20_12t10: [],
            pmwr_gc_world_20_12t11: [],
            pmwr_gc_world_20_12t13: [],
            pmwr_gc_world_20_12t14: [],
            pmwr_gc_world_20_12t15: [],
            pmwr_gc_unknown_00_04_04t2: [],
            pmwr_gc_activator_248_32_72_08t18_08_04t0: [],
            pmwr_gc_object_32t15: [],
        }],
        pmwr_gc_offset_patch_list: [],
    })

    g.ordered_ref = x[0]
    g.unordered_ref = x[0].unordered[0]

    im_pmwr_gc_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].pmwr_gc_offset_patch_list)

    im_pmwr_gc_texture(u32(g.datapack_offset + 24) + g.m, x[0].pmwr_gc_textures)

    im_pmwr_gc_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].pmwr_gc_offset_patch_list)

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "link":
        im_pmwr_gc_basic(o, x[0].file_specific)
        break
    case "share":
        let i = 0
        let is_not_0 = true
        let first_offset = u32(o)
        if (first_offset === 0) {
            is_not_0 = false
        }
        while (is_not_0) {
            im_pmwr_gc_share(o + (i * 4), i, x[0].file_specific)
            i++
            if (u32(o + (i * 4)) === first_offset) {
                is_not_0 = false
            }
            if (u32(o + (i * 4)) !== 0) {
                is_not_0 = false
            }
        }
        if (g.file_name.includes("gShared")) {
            let set_offset = 0
            if (g.console === "pc") {
                set_offset = 2380244
            } else if (g.console === "gamecube") {
                set_offset = 1076836
            } else if (g.console === "psp") {
                set_offset = 720012
            } else if (g.console === "ps2") {
                set_offset = 843056
            }

            im_pmwr_gc_share_end(set_offset, x[0].pmwr_gc_share_end_section)

        }
        break
    case "world":
        im_pmwr_gc_world(o, 0, x[0].file_specific)
        break
    default:
        console.log("later")
    }

    // if (g.pmwr_gc_model_animation_1_array.length) {
    //     model_animation_padding()
    // }

    for (let i = 0; i < u32(g.datapack_offset + 48); i++) {
        im_pmwr_gc_texture_animation_section(u32(g.datapack_offset + 60) + (i * 12) + g.m, i, x[0].pmwr_gc_texture_animation)
    }

    return

    function im_pmwr_gc_offset_patch_list(o, x) {
        id_offset.push(o);
        x.push({
            id: gen_id(),
            sec_id: "opll",
            model: im_patch_list(o, u32(g.datapack_offset + 56), 'm'),
        })
        g.model_patch_ref = x[0].model

    }
}
function im_pmwr_gc_share_end(o, x) {
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
        u32_20: u32(o + 20),
        section_24: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_share_end_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    for (let i = 0; i < u32(o + 12); i++) {
        im_pmwr_gc_share_end_16(u32(o + 16) + (i * 4) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_pmwr_gc_share_end_24(u32(o + 24) + (i * 4) + g.m, i, x[0].section_24);
    }

    // 32 bytes;

}
function im_pmwr_gc_share_end_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "eU1@",
        texture_0: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_share_end_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8Taq",
        sound_0: im_patch(g.sound_patch_ref, o + 0),
    });

}
function im_pmwr_gc_share_end_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8Taq",
        ordered_pmwr_gc_models_0: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
    });

}
function get_pmwr_share_end(o) {
    if (u32(o + 4) !== 62 || u32(o + 12) !== 14 || u32(o + 20) !== 7 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_pmwr_share_end_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_pmwr_share_end_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_pmwr_share_end_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_pmwr_share_end_24)
    }

}

function get_pmwr_share_end_0(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
// string
}
function get_pmwr_share_end_8(o) {
    /*ü(1,], o)*/
    ß('p_texture', o, 0)
}
function get_pmwr_share_end_16(o) {
    /*ü(1,], o)*/
    ß('p_sound', o, 0)
}
function get_pmwr_share_end_24(o) {
    /*ü(1,], o)*/
    ß('p_model', o, 0)
}

function im_pmwr_gc_basic(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bsck",
        u32_00: u32(o + 0),
        pmwr_gc_basic_04: [],
    });

    im_pmwr_gc_basic_04(u32(o + 4) + o, x[0].pmwr_gc_basic_04)

    return

    function im_pmwr_gc_basic_04(o, x) {
        id_offset.push(o);
        x.push({
            id: gen_id(),
            sec_id: "unrd",
            unordered_pmwr_gc_link: 0,
            u32_04: u32(o + 4),
        });

        switch (g.file_dir_type) {
        case "car":
            x[0].unordered_pmwr_gc_link = in_ml(u32(o), g.pmwr_gc_car_array, im_pmwr_gc_car, g.unordered_ref.pmwr_gc_car)
            break
        case "interface":
            x[0].unordered_pmwr_gc_link = in_ml(u32(o), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface)
            break
        case "link":
            x[0].unordered_pmwr_gc_link = in_ml(u32(o), g.pmwr_gc_link_array, im_pmwr_gc_link, g.unordered_ref.pmwr_gc_link)
            break
        default:
            console.log("later")
        }

    }

}

function model_animation_padding() {
    g.pmwr_gc_model_animation_1_array = g.pmwr_gc_model_animation_1_array.sort()
    let array = g.pmwr_gc_model_animation_1_array
    let tempx = g.ordered_ref.pmwr_gc_model_animation_1

    let i = 0
    for (; i < array.length - 1; i++) {
        tempx[i].padding = ((array[i + 1] + g.m) - tempx[i].padding)
    }
    if (g.pmwr_gc_model_animation_2_array) {
        g.pmwr_gc_model_animation_2_array = g.pmwr_gc_model_animation_2_array.sort()
        tempx[i].padding = ((g.pmwr_gc_model_animation_2_array[0] + g.m) - tempx[i].padding)
    } else {
        tempx[i].padding = 0
    }

}

function im_pmwr_gc_world(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "du1v",

        unordered_pmwr_gc_world_settings_00: 0,
        section_04: [],
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [{
            type_0: [],
            type_1: [],
            type_2: [],
            type_3: [],
            type_4: [],
            type_5: [],
            type_8: [],
            type_10: [],
            type_11: [],
            type_13: [],
            type_14: [],
            type_15: [],
        }],
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
        u32_104: u32(o + 104),
        u32_108: u32(o + 108),
        u32_112: u32(o + 112),
        u32_116: u32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        u32_128: u32(o + 128),
        u32_132: u32(o + 132),
        u32_136: u32(o + 136),
        u32_140: u32(o + 140),
        u32_144: u32(o + 144),
        u32_148: u32(o + 148),
        u32_152: u32(o + 152),
        u32_156: u32(o + 156),
    });

    if (g.pmwr_gc_texture_patch_ref.length !== 899) {
        x[i].unordered_pmwr_gc_world_settings_00 = in_ml(u32(o + 0), g.pmwr_gc_world_settings_array, im_pmwr_gc_world_settings, g.unordered_ref.pmwr_gc_world_settings);
        //award why
    }

    u32(o + 4) && im_pmwr_gc_collision(u32(o + 4) + g.m, x[i].section_04);
    u32(o + 12) && im_pmwr_gc_world_12(u32(o + 12) + g.m, x[i].section_12);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_pmwr_gc_world_20(u32(o + 20) + (ii * 16) + g.m, ii, x[i].section_20);
    }

    if (g.pmwr_gc_texture_patch_ref.length === 899) {
        //award why
        x[i].unordered_pmwr_gc_world_settings_00 = in_ml(u32(o + 0), g.pmwr_gc_world_settings_array, im_pmwr_gc_world_settings, g.unordered_ref.pmwr_gc_world_settings);
    }

    u32(o + 8) && im_pmwr_gc_world_08(u32(o + 8) + g.m, x[i].section_08);

    if (g.temp72arry.length) {
        for (let i = 0; i < g.temp72arry.length; i++) {
            im_pmwr_gc_world_20_12t8_72(g.temp72arry[i][0], g.temp72arry[i][1]['section_72'])
        }
    }

    u32(o + 24) && im_pmwr_gc_world_24(u32(o + 24) + g.m, x[i].section_24);
    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_world_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    return x[i].id
}
function im_pmwr_gc_collision(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "95=m",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
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
    });

    // switch(u32(o + 88)){
    //    case 0:
    //        u32(o + 32) && im_pmwr_gc_collision_32t0(u32(o + 32) + g.m,x[0].section_32); 
    //    break;
    //    case 1:
    //        u32(o + 32) && im_pmwr_gc_collision_32t1(u32(o + 32) + g.m,x[0].section_32); 
    //    break;

    let typefunction
    switch (u32(o + 88)) {
    case 0:
        typefunction = im_pmwr_gc_collision_32t0
        break;
    case 1:
        typefunction = im_pmwr_gc_collision_32t1
        break;
    }

    for (let i = 0; i < u32(o + 68); i++) {
        typefunction(u32(o + 32) + (i * 48) + g.m, i, x[0].section_32);
    }

    for (let i = 0; i < (u32(o + 52) * u32(o + 56) * u32(o + 60)); i++) {
        im_pmwr_gc_collision_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }

    for (let i = 0; i < u32(o + 72); i++) {
        im_pmwr_gc_collision_76(u32(o + 76) + (i * 32) + g.m, i, x[0].section_76);
    }

    for (let i = 0; i < u32(o + 80); i++) {
        im_pmwr_gc_collision_84(u32(o + 84) + (i * 64) + g.m, i, x[0].section_84);
    }
}

function im_pmwr_gc_collision_76(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ttK_",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        u16_24: u16(o + 24),
        u16_26: u16(o + 26),
    });

    u32(o + 16) && im_pmwr_gc_collision_76_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_pmwr_gc_collision_76_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?A6W",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
    });

}
function im_pmwr_gc_collision_84(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Zn7D",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
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
    });

}
function im_pmwr_gc_collision_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "b0x8",

        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_collision_32t0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TUtL",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
    });

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_pmwr_gc_collision_32t0_40(u32(o + 40) + (ii * 4) + g.m, ii, x[i].section_40);
    }

}
function im_pmwr_gc_collision_32t0_40(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FXrY",

        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_collision_32t1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "40Qc",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        //amount?
        section_36: [],
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
    });

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_pmwr_gc_collision_32t1_36(u32(o + 36) + (ii * 2) + g.m, ii, x[i].section_36);
    }

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_pmwr_gc_collision_32t1_40(u32(o + 40) + (ii * 12) + g.m, ii, x[i].section_40);
    }

}
function im_pmwr_gc_collision_32t1_40(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "prHh",

        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_pmwr_gc_collision_32t1_40_00(u32(o + 0) + (ii * 32) + g.m, ii, x[i].section_00);
    }

}
function im_pmwr_gc_collision_32t1_40_00(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Hqdp",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
    });

}
function im_pmwr_gc_collision_32t1_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kt_A",

        u16_00: u16(o + 0),
    });

}
function im_pmwr_gc_world_20(o, i, x) {
    if (u32(o + 4) && u32(o + 8)) {

        let typefunction
        let typeamount
        let typex;

        switch (u32(o + 0)) {
        case 0:
            typefunction = im_pmwr_gc_world_20_12t0
            typeamount = 128
            typex = x[0].type_0;
            break;
        case 1:
            typefunction = im_pmwr_gc_world_20_12t1
            typeamount = 96
            typex = x[0].type_1;
            break;
        case 2:
            typefunction = im_pmwr_gc_world_20_12t2
            typeamount = 112
            typex = x[0].type_2;
            break;
        case 3:
            typefunction = im_pmwr_gc_world_20_12t3
            typeamount = 64
            typex = x[0].type_3;
            break;
        case 4:
            typefunction = im_pmwr_gc_world_20_12t4
            typeamount = 144
            typex = x[0].type_4;
            break;
        case 5:
            typefunction = im_pmwr_gc_world_20_12t5
            typeamount = 112
            typex = x[0].type_5;
            break;
        case 8:
            typefunction = im_pmwr_gc_world_20_12t8
            typeamount = 80
            typex = x[0].type_8;
            break;
        case 10:
            typefunction = im_pmwr_gc_world_20_12t10
            typeamount = 96
            typex = x[0].type_10;
            break;
        case 11:
            typefunction = im_pmwr_gc_world_20_12t11
            typeamount = 80
            typex = x[0].type_11;
            break;
        case 13:
            typefunction = im_pmwr_gc_world_20_12t13
            typeamount = 96
            typex = x[0].type_13;
            break;
        case 14:
            typefunction = im_pmwr_gc_world_20_12t14
            typeamount = 80
            typex = x[0].type_14;
            break;
        case 15:
            typefunction = im_pmwr_gc_world_20_12t15
            typeamount = 80
            typex = x[0].type_15;
            break;
        default:
            console.log("??")
            break
        }
        g.temp72end.push(u32(o + 12) + g.m)
        for (let ii = 0; ii < u32(o + 8); ii++) {
            // typex.push()
            typefunction(u32(o + 12) + (ii * typeamount) + g.m, ii, typex);
        }

    }
}
function im_type_entry_header(o) {
    return {
        u32_00: u32(o + 0),
        u16_04: u16(o + 4),
        u16_06: u16(o + 6),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
    }
}

function im_pmwr_gc_world_20_12t0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5GU7",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        u16_74: u16(o + 74),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        u8_112: u8(o + 112),
        u8_113: u8(o + 113),
        u8_114: u8(o + 114),
        u8_120: u8(o + 120),
        u8_121: u8(o + 121),
        //check this
    });
    g.pmwr_gc_world_20_12t0_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t0.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "c6h0",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        ordered_pmwr_gc_model_animation_1_64: 0,
        f32_68: f32(o + 68),
        unordered_pmwr_gc_idk_72: 0,
        u8_76: u8(o + 76),
        u8_77: u8(o + 77),
        u8_78: u8(o + 78),
        f32_80: f32(o + 80),
    });

    x[i].ordered_pmwr_gc_model_animation_1_64 = in_ml(u32(o + 64), g.pmwr_gc_model_animation_1_array, im_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1);
    x[i].unordered_pmwr_gc_idk_72 = in_ml(u32(o + 72), g.pmwr_gc_idk_array, im_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk);

    g.pmwr_gc_world_20_12t1_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t1.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t2(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^PxM",

        section_00: [im_type_entry_header(o)],
        u32_40: u32(o + 40),
        u32_52: u32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        section_72: [],
        section_76: [],
        u32_84: u32(o + 84),
        section_100: [],
        u32_104: u32(o + 104),
        //amount?
    });

    u32(o + 56) && im_pmwr_gc_world_20_12t2_56(u32(o + 56) + g.m, x[i].section_56, u32(o + 52));

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_pmwr_gc_world_20_12t2_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    u32(o + 72) && im_pmwr_gc_world_20_12t2_72(u32(o + 72) + g.m, x[i].section_72, u32(o + 40));
    u32(o + 76) && im_pmwr_gc_world_20_12t2_76(u32(o + 76) + g.m, x[i].section_76);

    for (let ii = 0; ii < u32(o + 104); ii++) {
        im_pmwr_gc_world_20_12t2_100(u32(o + 100) + (ii * 4) + g.m, ii, x[i].section_100);
    }

    g.pmwr_gc_world_20_12t2_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t2.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t2_100(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@<rE",

        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_world_20_12t2_56(o, x, a) {

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "r49S",
        buffer: convert_arraybuffer_base64(buffer.slice(o, o + a))
    });

    // id_offset.push(o);x.push({id: gen_id(),
    //     f32_00: f32(o + 0),
    //     f32_04: f32(o + 4),
    //     f32_08: f32(o + 8),
    //     f32_12: f32(o + 12),
    //     u8_16: u8(o + 16),
    //     u8_17: u8(o + 17),
    //     u16_18: u16(o + 18),
    //     u32_20: u32(o + 20),
    //     u32_24: u32(o + 24),
    //     u32_28: u32(o + 28),
    //     f32_32: f32(o + 32),
    //     f32_36: f32(o + 36),
    //     f32_40: f32(o + 40),
    //     f32_44: f32(o + 44),
    //     u8_48: u8(o + 48),
    //     u8_49: u8(o + 49),
    //     u16_50: u16(o + 50),
    //     u32_52: u32(o + 52),
    //     u32_56: u32(o + 56),
    //     u32_60: u32(o + 60),
    //     f32_64: f32(o + 64),
    //     f32_68: f32(o + 68),
    //     f32_72: f32(o + 72),
    //     f32_76: f32(o + 76),
    //     u8_80: u8(o + 80),
    //     u8_81: u8(o + 81),
    //     u16_82: u16(o + 82),
    //     u32_84: u32(o + 84),
    //     u32_88: u32(o + 88),
    //     u32_92: u32(o + 92),
    //     f32_96: f32(o + 96),
    //     f32_100: f32(o + 100),
    //     f32_104: f32(o + 104),
    //     f32_108: f32(o + 108),
    //     u8_112: u8(o + 112),
    //     u8_113: u8(o + 113),
    //     u16_114: u16(o + 114),
    //     u32_116: u32(o + 116),
    //     u32_120: u32(o + 120),
    //     u32_124: u32(o + 124),
    //     f32_128: f32(o + 128),
    //     f32_132: f32(o + 132),
    //     f32_136: f32(o + 136),
    //     f32_140: f32(o + 140),
    //     u8_144: u8(o + 144),
    //     u8_145: u8(o + 145),
    //     u16_146: u16(o + 146),
    //     u32_148: u32(o + 148),
    //     u32_152: u32(o + 152),
    //     u32_156: u32(o + 156),
    //     f32_160: f32(o + 160),
    //     f32_164: f32(o + 164),
    //     f32_168: f32(o + 168),
    //     f32_172: f32(o + 172),
    //     u8_176: u8(o + 176),
    //     u8_177: u8(o + 177),
    //     u16_178: u16(o + 178),
    //     u32_180: u32(o + 180),
    //     u32_184: u32(o + 184),
    //     u32_188: u32(o + 188),
    // });

}
function im_pmwr_gc_world_20_12t2_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Iw[p",

        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_world_20_12t2_76(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "L>23",
        u16_02: u16(o + 2),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_world_20_12t2_76_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

}
function im_pmwr_gc_world_20_12t2_76_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "035Z",

        section_00: [],
        type: 0,
    });

    let offset = u32(o + 0)

    if (offset) {
        let ii
        if (g.pmwr_gc_world_20_12t13_array.includes(offset)) {
            ii = g.pmwr_gc_world_20_12t13_array.indexOf(offset)
            x[i].section_00 = g.unordered_ref.pmwr_gc_world_20_12t13[ii].id
            x[i].type = 13
        } else if (g.pmwr_gc_world_20_12t14_array.includes(offset)) {
            ii = g.pmwr_gc_world_20_12t14_array.indexOf(offset)
            x[i].section_00 = g.unordered_ref.pmwr_gc_world_20_12t14[ii].id
            x[i].type = 14
        } else if (g.pmwr_gc_world_20_12t15_array.includes(offset)) {
            ii = g.pmwr_gc_world_20_12t15_array.indexOf(offset)
            x[i].section_00 = g.unordered_ref.pmwr_gc_world_20_12t15[ii].id
            x[i].type = 15
        } else {
            console.log('?')
        }

    }

}
function im_pmwr_gc_world_20_12t2_72(o, x, t) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DQJ]",
        section_00: [],
    });

    for (let i = 0; i < t; i++) {
        im_pmwr_gc_world_20_12t2_72_00(u32(o + 0) + (i * 4) + g.m, i, x[0].section_00);
    }

}
function im_pmwr_gc_world_20_12t2_72_00(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=A]N",

        section_00: [],
    });

    x[i].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t5_array, im_pmwr_gc_world_20_12t5, g.unordered_ref.pmwr_gc_world_20_12t5);

    // im_pmwr_gc_world_20_12t5(u32(o + 0) + (ii * 112) + g.m, ii, x[i].section_00);

}
function im_pmwr_gc_world_20_12t3(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0oiV",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        unordered_pmwr_gc_sound_controls_48: 0,
    });

    x[i].unordered_pmwr_gc_sound_controls_48 = in_ml(u32(o + 48), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);

    g.pmwr_gc_world_20_12t3_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t3.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OEXF",

        section_00: [im_type_entry_header(o)],
        u32_32: u32(o + 32),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        unordered_pmwr_gc_unknown_00_96: 0,
        unordered_pmwr_gc_interface_104: 0,
        f32_116: f32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        section_128: [],
    });

    g.pmwr_gc_world_20_12t4_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t4.push(x[i])

    x[i].unordered_pmwr_gc_unknown_00_96 = in_ml(u32(o + 96), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_interface_104 = in_ml(u32(o + 104), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    switch (u32(o + 120)) {
    case 0:
        x[i].section_128 = in_ml(u32(o + 128), g.pmwr_gc_world_20_12t4_array, im_pmwr_gc_world_20_12t4, g.unordered_ref.pmwr_gc_world_20_12t4);
        break;
    case 1:
        u32(o + 128) && im_pmwr_gc_world_20_12t4_128t1(u32(o + 128) + g.m, x[i].section_128);
        break;
    }

    return x[i].id
}
function im_pmwr_gc_world_20_12t4_128t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jLKZ",
        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_world_20_12t5(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nq>j",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_52: f32(o + 52),
        f32_72: f32(o + 72),
        f32_92: f32(o + 92),
        u8_96: u8(o + 96),
        ordered_pmwr_gc_models_100: in_models(o + 100, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
    });

    g.pmwr_gc_world_20_12t5_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t5.push(x[i])

    return x[i].id
}
function im_pmwr_gc_world_20_12t8(o, i, x) {
    g.temp72end.push(o + 80)

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "b:GC",

        section_00: [im_type_entry_header(o)],
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        section_72: [],
        section_76: [],
    });

    // console.log(u32(o + 36))

    switch (u32(o + 36)) {
    case 1:
        u32(o + 76) && im_pmwr_gc_world_20_12t8_76t1(u32(o + 76) + g.m, x[i].section_76);
        break;
    case 7:
        u32(o + 76) && im_pmwr_gc_world_20_12t8_76t7(u32(o + 76) + g.m, x[i].section_76);
        break;
    case 8:
        u32(o + 76) && im_pmwr_gc_world_20_12t8_76t8(u32(o + 76) + g.m, x[i].section_76);
        break;
    }

    switch (u32(o + 32)) {
    case 0:
        if (u32(o + 72)) {
            g.temp72arry.push([u32(o + 72) + g.m, x[i]])
            g.temp72end.push(u32(o + 72) + g.m)
        }

        break;
    }
    g.pmwr_gc_world_20_12t8_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t8.push(x[i])

    return x[i].id
}
function im_pmwr_gc_world_20_12t8_72(o, x) {
    let temparray = g.temp72end.sort()
    while (o > temparray[0] - 1) {
        temparray.splice(0, 1)
    }

    let endoffset = temparray[0]

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CTtL",
        buffer: convert_arraybuffer_base64(buffer.slice(o, endoffset))
    });

}
function im_pmwr_gc_world_20_12t8_76t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xs_c",
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        //check this
    });
    g.temp72end.push(o)

}
function im_pmwr_gc_world_20_12t8_76t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5S>P",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    g.temp72end.push(o)

}
function im_pmwr_gc_world_20_12t8_76t8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "vkwM",
        u32_00: u32(o + 0),
        unordered_pmwr_gc_world_20_12t8_76t8_04_04: 0,
        unordered_pmwr_gc_world_20_12t8_76t8_08_08: 0,
    });

    x[0].unordered_pmwr_gc_world_20_12t8_76t8_04_04 = in_ml(u32(o + 4), g.pmwr_gc_world_20_12t8_76t8_04_array, im_pmwr_gc_world_20_12t8_76t8_04, g.unordered_ref.pmwr_gc_world_20_12t8_76t8_04);
    x[0].unordered_pmwr_gc_world_20_12t8_76t8_08_08 = in_ml(u32(o + 8), g.pmwr_gc_world_20_12t8_76t8_08_array, im_pmwr_gc_world_20_12t8_76t8_08, g.unordered_ref.pmwr_gc_world_20_12t8_76t8_08);

    g.temp72end.push(o)
}
function im_pmwr_gc_world_20_12t8_76t8_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "n4sv",

        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    return x[i].id
    // 48 bytes;

}

function im_pmwr_gc_world_20_12t8_76t8_08(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SIFl",

        u32_00: u32(o + 0),
        u16_04: u16(o + 4),
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        unordered_pmwr_gc_unknown_00_16: 0,
        unordered_pmwr_gc_unknown_00_20: 0,
    });

    x[i].unordered_pmwr_gc_unknown_00_16 = in_ml(u32(o + 16), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_unknown_00_20 = in_ml(u32(o + 20), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    // offset? 
    return x[i].id
    // 32 bytes;

}

function im_pmwr_gc_world_20_12t10(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "erOP",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        unordered_pmwr_gc_activator_64: 0,
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        u8_76: u8(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
    });

    x[i].unordered_pmwr_gc_activator_64 = in_ml(u32(o + 64), g.pmwr_gc_activator_array, im_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator);

    g.pmwr_gc_world_20_12t10_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t10.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t11(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "1c0L",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        u32_64: u32(o + 64),
        section_68: [],
    });

    x[i].section_68 = in_ml(u32(o + 68), g.pmwr_gc_world_20_12t0_array, im_pmwr_gc_world_20_12t0, g.unordered_ref.pmwr_gc_world_20_12t0);

    g.pmwr_gc_world_20_12t11_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t11.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t13(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?M7H",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        unordered_pmwr_gc_idk_64: 0,
        f32_68: f32(o + 68),
        u8_73: u8(o + 73),
        u8_77: u8(o + 77),
    });

    x[i].unordered_pmwr_gc_idk_64 = in_ml(u32(o + 64), g.pmwr_gc_idk_array, im_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk);

    g.pmwr_gc_world_20_12t13_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t13.push(x[i])
    return x[i].id
}
function im_pmwr_gc_world_20_12t14(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AEAO",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        //check this
        f32_44: f32(o + 44),
        //check this
        f32_48: f32(o + 48),
        //check this
        f32_52: f32(o + 52),
        //check this
        f32_56: f32(o + 56),
        //check this
        f32_60: f32(o + 60),
        //check this
        unordered_pmwr_gc_strange_64: 0,
        f32_72: f32(o + 72),
        u8_76: u8(o + 76),
    });

    x[i].unordered_pmwr_gc_strange_64 = in_ml(u32(o + 64), g.pmwr_gc_strange_array, im_pmwr_gc_strange, g.unordered_ref.pmwr_gc_strange);

    g.pmwr_gc_world_20_12t14_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t14.push(x[i])

    return x[i].id
}
function im_pmwr_gc_world_20_12t15(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "n^Vl",

        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        unordered_pmwr_gc_object_56: 0,
        f32_60: f32(o + 60),
        //check this
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_72: u8(o + 72),
        u8_73: u8(o + 73),
        u8_74: u8(o + 74),
        u8_75: u8(o + 75),
    });

    x[i].unordered_pmwr_gc_object_56 = in_ml(u32(o + 56), g.pmwr_gc_object_array, im_pmwr_gc_object, g.unordered_ref.pmwr_gc_object);

    g.pmwr_gc_world_20_12t15_array.push(o - g.m)
    g.unordered_ref.pmwr_gc_world_20_12t15.push(x[i])

    return x[i].id
}
function im_pmwr_gc_world_08(o, x) {
    g.temp72end.push(o)

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9L>=",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        section_16: [],
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        u32_28: u32(o + 28),
        //amount?
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
    });

    for (let i = 0; i < u32(o + 28); i++) {
        im_pmwr_gc_world_08_16(u32(o + 16) + (i * 80) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_pmwr_gc_world_08_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

}
function im_pmwr_gc_world_08_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gwmz",

        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_world_08_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "QpqG",

        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_pmwr_gc_world_08_16_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

    for (let ii = 0; ii < u32(o + 56); ii++) {
        im_pmwr_gc_world_08_16_12(u32(o + 60) + (ii * 4) + g.m, ii, x[i].section_60);
    }

    for (let ii = 0; ii < u32(o + 64); ii++) {
        im_pmwr_gc_world_08_16_12(u32(o + 68) + (ii * 4) + g.m, ii, x[i].section_68);
    }

}

function im_pmwr_gc_world_08_16_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0vK5",

        section_00: [],
    });

    x[i].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t8_array, im_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8);

}
function im_pmwr_gc_world_12(o, x) {
    g.temp72end.push(o)

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UPu2",
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        u32_08: u32(o + 8),
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_world_12_00(u32(o + 0) + (i * 128) + g.m, i, x[0].section_00);
    }

}
function im_pmwr_gc_world_12_00(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4[mB",
        section_00: [im_type_entry_header(o)],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        f32_68: f32(o + 68),
        //check this
        u16_72: u16(o + 72),
        //check this
        u16_74: u16(o + 74),
        u8_76: u8(o + 76),
        f32_80: f32(o + 80),
        u32_116: u32(o + 116),
    });

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_pmwr_gc_world_12_00_52(u32(o + 52) + (ii * 4) + g.m, ii, x[i].section_52);
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_pmwr_gc_world_12_00_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
    }

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_pmwr_gc_world_12_00_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
}
function im_pmwr_gc_world_12_00_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "avV2",

        u32_00: u32(o + 0),
        //check this
    });

}
function im_pmwr_gc_world_12_00_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lzPS",

        f32_00: f32(o + 0),
        //check this
    });

}
function im_pmwr_gc_world_12_00_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nX@v",

        u32_00: u32(o + 0),
        //check this
    });

}
function im_pmwr_gc_world_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "e=lK",

        unordered_pmwr_gc_gate_00: 0,
    });

    x[i].unordered_pmwr_gc_gate_00 = in_ml(u32(o + 0), g.pmwr_gc_gate_array, im_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate);

}
function im_pmwr_gc_world_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]n4k",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_world_24_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_world_24_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

}
function im_pmwr_gc_world_24_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WeH]",

        unordered_pmwr_gc_flag_00: 0,
    });

    x[i].unordered_pmwr_gc_flag_00 = in_ml(u32(o + 0), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);

}
function im_pmwr_gc_world_24_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LEGR",

        unordered_pmwr_gc_var_00: 0,
    });

    x[i].unordered_pmwr_gc_var_00 = in_ml(u32(o + 0), g.pmwr_gc_var_array, im_pmwr_gc_var, g.unordered_ref.pmwr_gc_var);

}

function im_pmwr_gc_texture(o, x) {
    let e = o + (u32(g.datapack_offset + 20) * 64)

    if (u32(g.datapack_offset + 20)) {
        g.ordered_ref.pmwr_gc_texturepadding = (u32(o + 8) + g.m) - e
    }
    for (let ti = 0; ti < u32(g.datapack_offset + 20); ti++) {

        let pmwr_gc_texture_settings_offset = o + (ti * 64)
        // for (let ti = 0; ti < u32(g.datapack_offset + 20); ti++) {
        //     end_block = get_pmwr_gc_texture(g.m + u32(offset + 24) + (ti * 64), x[x_index].pmwr_gc_textures, i)
        // }

        let pmwr_gc_texture_name = im_string(pmwr_gc_texture_settings_offset + 12 - g.m, 0, false)

        pmwr_gc_texture_name.string = pmwr_gc_texture_name.string.substr(0, 51)
        id_offset.push(o);
        x.push({
            id: gen_id(),
            sec_id: "txtr",

            type: u8(pmwr_gc_texture_settings_offset),
            mipmaps: u8(pmwr_gc_texture_settings_offset + 1),
            x: u8(pmwr_gc_texture_settings_offset + 2),
            y: u8(pmwr_gc_texture_settings_offset + 3),
            alpha: [],
            pmwr_gc_texture: [],
            name: pmwr_gc_texture_name,
            start: u32(pmwr_gc_texture_settings_offset + 8) + g.m,
            padding: e
        })

        let pmwr_gc_texture_x = Math.pow(2, u8(pmwr_gc_texture_settings_offset + 2))
        let pmwr_gc_texture_y = Math.pow(2, u8(pmwr_gc_texture_settings_offset + 3))

        let temp_value
        let temp_alpha = 0;
        let type = u8(pmwr_gc_texture_settings_offset)
        if (type === 65) {
            // dxt1
            type = 'dxt1'
            temp_value = pmwr_gc_texture_x * pmwr_gc_texture_y / 2

        } else if (type === 160) {
            //rgba888
            temp_value = pmwr_gc_texture_x * pmwr_gc_texture_y * 4
            type = 'rgba8888'
        } else if (type === 24) {
            //rgba888
            temp_value = pmwr_gc_texture_x * pmwr_gc_texture_y * 3
            type = 'rgb888'
        } else if (type === 68) {
            //dxt5
            type = '???'
            temp_value = 1024 + pmwr_gc_texture_x * pmwr_gc_texture_y

        } else if (type === 72) {
            //dxt5
            type = '???'
            temp_value = 1024 + pmwr_gc_texture_x * pmwr_gc_texture_y

        } else if (type === 193) {
            type = 'dxt1'
            temp_value = pmwr_gc_texture_x * pmwr_gc_texture_y / 2
            temp_alpha = temp_value

        } else if (type === 194) {
            type = 'dxt1'
            temp_value = pmwr_gc_texture_x * pmwr_gc_texture_y / 2
            temp_alpha = temp_value
        } else if (type === 196) {
            //dxt5
            type = '???'
            temp_value = 1024 + pmwr_gc_texture_x * pmwr_gc_texture_y
        } else if (type === 197) {
            //dxt5
            type = 'dxt5'
            temp_value = pmwr_gc_texture_x * pmwr_gc_texture_y
        } else if (type === 200) {
            //dxt5
            type = '???'
            temp_value = 1024 + pmwr_gc_texture_x * pmwr_gc_texture_y
        }
        let pmwr_gc_texture_offset;
        let temp_pmwr_gc_texture_array;
        let temp_2 = temp_value

        // console.log(u32(pmwr_gc_texture_settings_offset + 8) + g.m +temp_value,'t')
        // console.log(u32(pmwr_gc_texture_settings_offset + 4) + g.m +temp_alpha,'a')

        if (temp_alpha) {
            pmwr_gc_texture_offset = u32(pmwr_gc_texture_settings_offset + 4) + g.m
            temp_pmwr_gc_texture_array = convert_arraybuffer_base64(buffer.slice(pmwr_gc_texture_offset, pmwr_gc_texture_offset + temp_alpha))
            x[ti].alpha.push(temp_pmwr_gc_texture_array)
        }
        if (u8(pmwr_gc_texture_settings_offset + 1) === 0) {

            pmwr_gc_texture_offset = u32(pmwr_gc_texture_settings_offset + 8) + g.m
            temp_pmwr_gc_texture_array = convert_arraybuffer_base64(buffer.slice(pmwr_gc_texture_offset, pmwr_gc_texture_offset + temp_value))

            x[ti].pmwr_gc_texture.push(temp_pmwr_gc_texture_array)
            e = pmwr_gc_texture_offset + temp_value
        } else {

            let mip_map_pmwr_gc_idk = 1

            if (type === "rgb888") {
                mip_map_pmwr_gc_idk = 0
            }

            let mipmap_start = u32(pmwr_gc_texture_settings_offset + 8) + g.m
            let mipmap_end = mipmap_start + temp_value

            let temp_mipmap_offset = 0

            let pmwr_gc_texture_offset = u32(pmwr_gc_texture_settings_offset + 8) + g.m
            for (let i = 0; i < u8(pmwr_gc_texture_settings_offset + 1) + 1; i++) {

                let temp_pmwr_gc_texture_array = convert_arraybuffer_base64(buffer.slice(mipmap_start, mipmap_end))

                // let temp_pmwr_gc_texture_array = new ArrayBuffer(temp_2)

                x[ti].pmwr_gc_texture.push(temp_pmwr_gc_texture_array)
                mipmap_start += temp_2
                temp_mipmap_offset += temp_2
                temp_2 = Math.round(temp_2 / 4)
                if (u8(pmwr_gc_texture_settings_offset + 1) !== i) {
                    mipmap_end += temp_2
                }

            }
            e = mipmap_end

        }
        if (g.file_dir_type === 'share' && g.pmwr_gc_texture_patch_ref.length === 69) {
            e += divisible(e - o, 16) - (e - o)
        }
        x[ti].padding = e
    }

    //padding

    if (x.length) {

        let i = 0
        for (; i < x.length - 1; i++) {
            if (x[i].alpha.length === 0) {
                x[i].padding = ((x[i + 1].start) - x[i].padding)
            } else {
                x[i].padding = 0
            }

        }
        x[i].padding = 0
    }

    return e
}

function im_pmwr_gc_texture_animation_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oKj7",

        section_00: [],
    });

    u32(o + 0) && im_pmwr_gc_pmwr_gc_texture_anim_1(u32(o + 0) + g.m, x[i].section_00);

}

function im_pmwr_gc_pmwr_gc_texture_anim_1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oVKp",
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 4) && im_pmwr_gc_pmwr_gc_texture_anim_1_1(u32(o + 4) + g.m, x[0].section_04);

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_pmwr_gc_texture_anim_1_2(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_pmwr_gc_texture_anim_1_3(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 48 bytes;

}
function im_pmwr_gc_pmwr_gc_texture_anim_1_1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W9gN",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_11: u8(o + 11),
        u32_20: u32(o + 20),
        //amount?
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_pmwr_gc_texture_anim_1_1_1(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    // 32 bytes;

}
function im_pmwr_gc_pmwr_gc_texture_anim_1_1_1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DUGU",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_pmwr_gc_texture_anim_1_2(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bce@",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        f32_08: f32(o + 8),
        //amount?
    });

}
function im_pmwr_gc_pmwr_gc_texture_anim_1_3(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tmZz",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
        //amount?
    });

}

function im_pmwr_gc_audio(o, x, a) {

    const after_offset_list = o + divisible(a * 4, 32)
    let padding_test = after_offset_list + (a * 32)

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "audi",
        sound: []
    })

    for (let i = 0; i < a; i++) {
        padding_test = im_pmwr_gc_audio_00(after_offset_list + u32(o + (i * 4)), x[0].sound, i)
    }

    return padding_test

    function im_pmwr_gc_audio_00(o, x, i) {
        id_offset.push(o);
        x.push({
            id: gen_id(),
            sec_id: "ad00",

            pmwr_gc_unknown1: u32(o + 8),
            soundsamplerate: u32(o + 12),
            pmwr_gc_unknown2: u32(o + 16),
            pmwr_gc_unknown3: u32(o + 20),
            sound_data: [],
            padding: (u32(o + 0) + after_offset_list) - padding_test
        })
        const start_offset = u32(o + 0) + after_offset_list
        const sound_buffer = convert_arraybuffer_base64(buffer.slice(start_offset, start_offset + u32(o + 4)))

        x[i].sound_data.push(sound_buffer)

        return start_offset + u32(o + 4)

    }

}

function im_pmwr_gc_share(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^YZ2",
        model_0: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
    });

}
function im_pmwr_gc_models(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        magic: u16(o),
        name: get_string(u32(o + 8) + g.m, 0, false),
        section_4: [],
        section_12: [],
        second_names: [],
        name_padding: 0,
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
        f32_60: f32(o + 60),
    })

    for (let ii = 0; ii < u16(o + 2); ii++) {
        im_pmwr_gc_models_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }
    for (let ii = 0; ii < u16(o + 2); ii++) {
        im_pmwr_gc_models_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_4);
    }

}

function im_pmwr_gc_models_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "afa2",

        u32_00: u32(o + 0),
        section_4: [],
    });
    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_models_04_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

}

function im_pmwr_gc_models_04_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "afa2",

        section_0: [],
    });

    if (g.console === "pc") {// ö(u32(o + 0), get_models_04_4_0_pc)
    } else if (g.console === "gamecube") {
        u32(o + 0) && im_pmwr_gc_models_04_4_0_gc(u32(o + 0) + g.m, 0, x[i].section_0);
        // offset?
    } else if (g.console === "psp") {// set_offset = 720012
    } else if (g.console === "ps2") {
        function get_models_04_4_0_ps2(o) {
            switch (u32(o)) {
            case 0:
                u32(o + 0) && im_models_04_4_0_ps2_t0(u32(o + 0) + g.m, 0, x[i].section_0);
                break
            case 1:
                u32(o + 0) && im_models_04_4_0_ps2_t1(u32(o + 0) + g.m, 0, x[i].section_0);
                break
            case 2:
                u32(o + 0) && im_models_04_4_0_ps2_t2(u32(o + 0) + g.m, 0, x[i].section_0);
                break
            }
        }
    }

}

function im_models_04_4_0_ps2_t0(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "C65L",
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        animation_24: im_patch(g.animation_patch_ref, o + 24),
        u32_28: u32(o + 28),
        texture_40: im_patch(g.texture_patch_ref, o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        u8_43: u8(o + 43),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        section_64: [],
        section_68: [],
        section_72: [],
        section_76: [],
    });

    u32(o + 64) && im_models_04_4_0_ps2_model_buffer(u32(o + 64) + g.m, x[i].section_64);
    // offset? 
    u32(o + 68) && im_models_04_4_0_ps2_model_buffer(u32(o + 68) + g.m, x[i].section_68);
    // offset? 
    u32(o + 72) && im_models_04_4_0_ps2_model_buffer(u32(o + 72) + g.m, x[i].section_72);
    // offset? 
    u32(o + 76) && im_models_04_4_0_ps2_model_buffer(u32(o + 76) + g.m, x[i].section_76);
    // offset? 
    return x[i].id
    // 80 bytes;

}
function im_models_04_4_0_ps2_t1(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5N8t",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        animation_24: im_patch(g.animation_patch_ref, o + 24),
        u32_28: u32(o + 28),
        texture_40: im_patch(g.texture_patch_ref, o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        u8_43: u8(o + 43),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        section_64: [],
        section_68: [],
        section_72: [],
        section_80: [],
    });

    u32(o + 64) && im_models_04_4_0_ps2_model_buffer(u32(o + 64) + g.m, x[i].section_64);
    // offset? 
    u32(o + 68) && im_models_04_4_0_ps2_model_buffer(u32(o + 68) + g.m, x[i].section_68);
    // offset? 
    u32(o + 72) && im_models_04_4_0_ps2_model_buffer(u32(o + 72) + g.m, x[i].section_72);
    // offset? 
    u32(o + 80) && im_models_04_4_0_ps2_t1_80(u32(o + 80) + g.m, 0, x[i].section_80);
    // offset? 
    return x[i].id
    // 96 bytes;

}
function im_models_04_4_0_ps2_t1_80(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "9UB0",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_models_04_4_0_ps2_model_buffer(u32(o + 8) + g.m, x[i].section_8);
    // offset? 
    return x[i].id
    // 16 bytes;

}
function im_models_04_4_0_ps2_t2(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "<4g_",
        u32_0: u32(o + 0),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_40: u32(o + 40),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        u32_48: u32(o + 48),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        u32_68: u32(o + 68),
        section_72: [],
        u32_76: u32(o + 76),
        section_80: [],
        section_84: [],
    });

    u32(o + 72) && im_models_04_4_0_ps2_model_buffer(u32(o + 72) + g.m, x[i].section_72);
    // offset? 
    u32(o + 80) && im_models_04_4_0_ps2_model_buffer(u32(o + 80) + g.m, x[i].section_80);
    // offset? 
    u32(o + 84) && im_models_04_4_0_ps2_model_buffer(u32(o + 84) + g.m, x[i].section_84);
    // offset? 
    return x[i].id
    // 96 bytes;

}

function im_models_04_4_0_ps2_model_buffer(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_pmwr_gc_models_04_4_0_gc(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "<Gsc",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        pmwr_gc_unknown_24_animation: im_patch(g.animation_patch_ref, o + 24),
        u32_28: u32(o + 28),
        pmwr_gc_texture_40: im_patch(g.pmwr_gc_texture_patch_ref, o + 40),
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        u32_56: u32(o + 56),
        section_60: [],
        section_64: [],
        section_68: [],
        section_72: [],
        section_76: [],
        section_80: [],
        u16_84: u16(o + 84),
        //amount?
        u16_86: u16(o + 86),
    });

    u32(o + 60) && im_pmwr_gc_models_04_4_0_gc_60(u32(o + 60) + g.m, x[i].section_60);
    // offset? 
    u32(o + 64) && im_pmwr_gc_models_04_4_0_gc_64(u32(o + 64) + g.m, x[i].section_64);
    // offset? 
    u32(o + 68) && im_pmwr_gc_models_04_4_0_gc_68(u32(o + 68) + g.m, x[i].section_68);
    // offset? 
    u32(o + 72) && im_pmwr_gc_models_04_4_0_gc_72(u32(o + 72) + g.m, x[i].section_72);
    // offset? 
    for (let ii = 0; ii < u16(o + 84); ii++) {
        im_pmwr_gc_models_04_4_0_gc_76(u32(o + 76) + (ii * 24) + g.m, ii, x[i].section_76);
        // offset? 
    }
    u32(o + 80) && im_pmwr_gc_models_04_4_0_gc_80(u32(o + 80) + g.m, 0, x[i].section_80);
    // offset? 

    return x[i].id
    // 96 bytes;

}

function im_pmwr_gc_models_04_4_0_gc_60(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_pmwr_gc_models_04_4_0_gc_64(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_pmwr_gc_models_04_4_0_gc_68(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_pmwr_gc_models_04_4_0_gc_72(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_pmwr_gc_models_04_4_0_gc_76(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "JToz",
        u32_4: u32(o + 4),
        section_8: [],
        section_12: [],
        section_16: [],
        u8_20: u8(o + 20),
    });

    u32(o + 8) && im_GC_models_04_04_00_76_08(u32(o + 8) + g.m, x[i].section_8);
    // offset? 
    u32(o + 12) && im_GC_models_04_04_00_76_12(u32(o + 12) + g.m, x[i].section_12);
    // offset? 
    u32(o + 16) && im_GC_models_04_04_00_76_16(u32(o + 16) + g.m, x[i].section_16);
    // offset? 
    return x[i].id
    // 24 bytes;

}
function im_GC_models_04_04_00_76_08(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_GC_models_04_04_00_76_12(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_GC_models_04_04_00_76_16(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}

function im_pmwr_gc_models_04_4_0_gc_80(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "AHhc",
        section_0: [],
        section_4: [],
        u32_8: u32(o + 8),
    });

    u32(o + 0) && im_GC_models_04_04_00_80_00(u32(o + 0) + g.m, x[i].section_0);
    // offset? 
    u32(o + 4) && im_GC_models_04_04_00_80_04(u32(o + 4) + g.m, x[i].section_4);
    // offset? 
    return x[i].id
    // 16 bytes;

}
function im_GC_models_04_04_00_80_00(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_GC_models_04_04_00_80_04(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}

function im_pmwr_gc_models_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "afas",

        f32_00: f32(o + 0),
    });
}

function im_pmwr_gc_model_animation_2(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "anm2",

        u32_00: u32(o + 0),
        //amount?
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_model_animation_2_1(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
}

function im_pmwr_gc_model_animation_2_1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ma21",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
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
//

function im_pmwr_gc_model_animation_1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "<Fcc",

        u32_00: u32(o + 0),
        //check this
        u32_04: u32(o + 4),
        //check this
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        section_28: [],
        section_32: [],
        section_32_padding: 0,
        section_36: [],
        u32_40: u32(o + 40),
        section_44: [],
        u32_48: u32(o + 48),
        section_52: [],
        u32_56: u32(o + 56),
        //check this
        u32_60: u32(o + 60),
        padding: 0,
        //check this
    });

    if (log_array.p_offset.array.includes(o + 24 - g.m)) {
        u32(o + 24) && im_pmwr_gc_model_animation_1_24(u32(o + 24) + g.m, x[i].section_24);
    }
    if (log_array.p_offset.array.includes(o + 28 - g.m)) {
        u32(o + 28) && im_pmwr_gc_model_animation_1_28(u32(o + 28) + g.m, x[i].section_28);
    }
    if (log_array.p_offset.array.includes(o + 32 - g.m)) {
        u32(o + 32) && im_pmwr_gc_model_animation_1_32(u32(o + 32) + g.m, x[i].section_32);
    }
    if (log_array.p_offset.array.includes(o + 36 - g.m)) {
        u32(o + 36) && im_pmwr_gc_model_animation_1_36(u32(o + 36) + g.m, x[i].section_36);
    }
    if (log_array.p_offset.array.includes(o + 44 - g.m)) {
        u32(o + 44) && im_pmwr_gc_model_animation_1_44(u32(o + 44) + g.m, x[i].section_44);
    }
    if (log_array.p_offset.array.includes(o + 52 - g.m)) {

        switch (u32(o + 0)) {
        case 1:
            u32(o + 52) && im_pmwr_gc_model_animation_1_52t1_gc(u32(o + 52) + g.m, x[i].section_52);
            break
        case 5:
            u32(o + 52) && im_pmwr_gc_model_animation_1_52t5_gc(u32(o + 52) + g.m, x[i].section_52);
            break
        default:
            if (u32(o + 52)) {
                sü(u32, 0, o, 52)
            }
        }
    }

    return x[i].id

}
function im_pmwr_gc_model_animation_1_24(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;
}
function im_pmwr_gc_model_animation_1_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;
}

function im_pmwr_gc_model_animation_1_32(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;

}
function im_pmwr_gc_model_animation_1_36(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;
}

function im_pmwr_gc_model_animation_1_44(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
    // ? bytes;
}

function im_pmwr_gc_model_animation_1_52t1_gc(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kiIB",
        u8_00: u8(o + 0),
        u8_04: u8(o + 4),
        section_8: [],
        section_12: [],
    });

    if (log_array.p_offset.array.includes(o + 8 - g.m)) {
        im_pmwr_gc_model_animation_1_52t1_gc_8(u32(o + 8) + g.m, x[0].section_8)
    } else {
        x[0].section_8 = u32(o + 8)
    }

    if (log_array.p_offset.array.includes(o + 12 - g.m)) {
        im_pmwr_gc_model_animation_1_52t1_gc_12(u32(o + 12) + g.m, x[0].section_12)
    } else {
        x[0].section_12 = u32(o + 12)
    }

}
function im_pmwr_gc_model_animation_1_52t1_gc_8(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}
function im_pmwr_gc_model_animation_1_52t1_gc_12(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}

function im_pmwr_gc_model_animation_1_52t5_gc(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kiIB",
        u32_00: u32(o + 0),
        //amount?
        u32_04: u32(o + 4),
        //amount?
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        section_16: [],
        section_20: [],
        section_24: [],
        section_28: [],
        section_32: [],
    });

    if (log_array.p_offset.array.includes(o + 12 - g.m)) {
        im_pmwr_gc_model_animation_1_52t5_12(u32(o + 12) + g.m, x[0].section_12)
    } else {
        x[0].section_12 = u32(o + 12)
    }

    if (log_array.p_offset.array.includes(o + 16 - g.m)) {
        im_pmwr_gc_model_animation_1_52t5_16(u32(o + 16) + g.m, x[0].section_16)
    } else {
        x[0].section_16 = u32(o + 16)
    }

    if (log_array.p_offset.array.includes(o + 20 - g.m)) {
        im_pmwr_gc_model_animation_1_52t5_20(u32(o + 20) + g.m, x[0].section_20)
    } else {
        x[0].section_20 = u32(o + 20)
    }

    if (log_array.p_offset.array.includes(o + 24 - g.m)) {
        im_pmwr_gc_model_animation_1_52t5_24(u32(o + 24) + g.m, x[0].section_24)
    } else {
        x[0].section_24 = u32(o + 24)
    }

    if (log_array.p_offset.array.includes(o + 28 - g.m)) {
        im_pmwr_gc_model_animation_1_52t5_28(u32(o + 28) + g.m, x[0].section_28)
    } else {
        x[0].section_28 = u32(o + 28)
    }

    if (log_array.p_offset.array.includes(o + 32 - g.m)) {
        im_pmwr_gc_model_animation_1_52t5_32(u32(o + 32) + g.m, x[0].section_32)
    } else {
        x[0].section_32 = u32(o + 32)
    }

}
function im_pmwr_gc_model_animation_1_52t5_12(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}
function im_pmwr_gc_model_animation_1_52t5_16(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}
function im_pmwr_gc_model_animation_1_52t5_20(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}
function im_pmwr_gc_model_animation_1_52t5_24(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}
function im_pmwr_gc_model_animation_1_52t5_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}
function im_pmwr_gc_model_animation_1_52t5_32(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });
}

function im_pmwr_gc_activator(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "l<;x",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        ordered_pmwr_gc_model_animation_2_04: 0,
        section_08: im_string(u32(o + 8), 0, false),
        u32_12: u32(o + 12),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u32_48: u32(o + 48),
        u32_56: u32(o + 56),
        u32_64: u32(o + 64),
        f32_72: f32(o + 72),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        u32_100: u32(o + 100),
        f32_104: f32(o + 104),
        section_108: [],
        u32_112: u32(o + 112),
        //amount?
        section_116: [],
        u8_120: u8(o + 120),
        u8_121: u8(o + 121),
        u8_122: u8(o + 122),
        u8_123: u8(o + 123),
        section_124: [],
        f32_128: f32(o + 128),
        f32_132: f32(o + 132),
        f32_136: f32(o + 136),
        u32_140: u32(o + 140),
        //amount?
        section_144: [],
        unordered_pmwr_gc_wtf_148: 0,
        u8_153: u8(o + 153),
        u8_154: u8(o + 154),
        u8_155: u8(o + 155),
        u32_172: u32(o + 172),
        //amount?
        section_176: [],
        u32_180: u32(o + 180),
        //amount?
        section_184: [],
        u32_188: u32(o + 188),
        //amount?
        section_192: [],
        f32_204: f32(o + 204),
        u32_208: u32(o + 208),
        //amount?
        section_212: [],
        u32_224: u32(o + 224),
        section_228: [],
        u32_244: u32(o + 244),
        //amount?
        section_248: [],
    });

    x[i].ordered_pmwr_gc_model_animation_2_04 = in_ml(u32(o + 4), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_pmwr_gc_activator_24(u32(o + 24) + (ii * 24) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_activator_32(u32(o + 32) + (ii * 24) + g.m, ii, x[i].section_32);
    }
    u32(o + 108) && im_pmwr_gc_activator_108(u32(o + 108) + g.m, x[i].section_108);
    u32(o + 116) && im_pmwr_gc_activator_116(u32(o + 116) + g.m, x[i].section_116);
    u32(o + 124) && im_pmwr_gc_activator_124(u32(o + 124) + g.m, x[i].section_124);
    u32(o + 144) && im_pmwr_gc_activator_144(u32(o + 144) + g.m, x[i].section_144);
    x[i].unordered_pmwr_gc_wtf_148 = in_ml(u32(o + 148), g.pmwr_gc_wtf_array, im_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf);

    for (let ii = 0; ii < u32(o + 172); ii++) {
        im_pmwr_gc_activator_176(u32(o + 176) + (ii * 20) + g.m, ii, x[i].section_176);
    }

    for (let ii = 0; ii < u32(o + 180); ii++) {
        im_pmwr_gc_activator_184(u32(o + 184) + (ii * 12) + g.m, ii, x[i].section_184);
    }

    for (let ii = 0; ii < u32(o + 188); ii++) {
        im_pmwr_gc_activator_184(u32(o + 192) + (ii * 12) + g.m, ii, x[i].section_192);
    }

    for (let ii = 0; ii < u32(o + 208); ii++) {
        im_pmwr_gc_unknown(u32(o + 212) + (ii * 4) + g.m, ii, x[i].section_212);
    }

    for (let ii = 0; ii < u32(o + 224); ii++) {
        im_pmwr_gc_unknown(u32(o + 228) + (ii * 4) + g.m, ii, x[i].section_228);
    }

    for (let ii = 0; ii < u32(o + 244); ii++) {
        im_pmwr_gc_activator_248(u32(o + 248) + (ii * 36) + g.m, ii, x[i].section_248);
    }
    return x[i].id
    // 256 bytes;

}
function im_pmwr_gc_activator_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "glMF",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        f32_08: f32(o + 8),
        f32_20: f32(o + 20),
    });

    switch (u8(o + 0)) {
    case 4:
        u32(o + 4) && im_pmwr_gc_activator_24_04t4(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 6:
        u32(o + 4) && im_pmwr_gc_activator_24_04t6(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
}
function im_pmwr_gc_activator_24_04t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bGu2",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_24_04t4_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_activator_24_04t4_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "adhQ",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_24_04t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "X4]]",
        u8_00: u8(o + 0),
        section_08: im_string(u32(o + 8), 0, false),
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "cLCA",

        u8_00: u8(o + 0),
        section_04: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_32_04(u32(o + 4) + g.m, x[i].section_04);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_pmwr_gc_activator_32_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

}
function im_pmwr_gc_activator_32_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "I0GU",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_32_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TW8<",

        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_activator_32_20_08(u32(o + 8) + g.m, x[i].section_08);

}
function im_pmwr_gc_activator_32_20_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lwQw",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_108(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@Rl9",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    switch (u32(o + 4)) {
    case 1:
        u32(o + 8) && im_pmwr_gc_activator_108_08t1(u32(o + 8) + g.m, x[0].section_08);
        break;
    case 2:
        u32(o + 8) && im_pmwr_gc_activator_108_08t2(u32(o + 8) + g.m, x[0].section_08);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_activator_108_08t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nWhz",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_108_08t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "a^w<",
        u8_04: u8(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
    });

    u32(o + 8) && im_pmwr_gc_activator_108_08t2_08(u32(o + 8) + g.m, x[0].section_08);

    // 32 bytes;

}
function im_pmwr_gc_activator_108_08t2_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "JK60",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_116(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Hjii",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_124(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">YDp",
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_pmwr_gc_activator_144(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oS0Q",
        f32_00: f32(o + 0),
    });

    // 48 bytes;

}
function im_pmwr_gc_activator_176(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[]R5",

        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_pmwr_gc_activator_176_08(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_pmwr_gc_activator_176_08(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

}
function im_pmwr_gc_activator_176_08(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "qe;J",

        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        section_08: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 8) && im_pmwr_gc_activator_176_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 13:
        u32(o + 8) && im_pmwr_gc_activator_176_08t13(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 19:
        u32(o + 8) && im_pmwr_gc_activator_176_08t19(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}
function im_pmwr_gc_activator_176_08t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "f<Az",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_176_08t13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m==1",
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_176_08t19(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_27H",
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_184(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@?i9",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }

}
function im_pmwr_gc_activator_248(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?z[q",

        u32_00: u32(o + 0),
        section_04: [],
        section_08: im_string(u32(o + 8), 0, false),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        unordered_pmwr_gc_sound_controls_20: 0,
        u8_24: u8(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_activator_248_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }
    x[i].unordered_pmwr_gc_sound_controls_20 = in_ml(u32(o + 20), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_activator_248_32(u32(o + 32) + (ii * 80) + g.m, ii, x[i].section_32);
    }

}
function im_pmwr_gc_activator_248_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eFj[",

        u8_00: u8(o + 0),
        //check this
        u8_01: u8(o + 1),
        section_04: [],
    });

    switch (u8(o + 0)) {
    case 0:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t0(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 1:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t1(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 2:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t2(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 3:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t3(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 4:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t4(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 5:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t5(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 6:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t6(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 9:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t9(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 11:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t11(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 12:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t12(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 13:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t13(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 15:
        u32(o + 4) && im_pmwr_gc_activator_248_04_04t15(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
}
function im_pmwr_gc_activator_248_04_04t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^8L8",
        u32_00: u32(o + 0),
        unordered_pmwr_gc_activator_248_04_04t0_04_04: 0,
    });

    x[0].unordered_pmwr_gc_activator_248_04_04t0_04_04 = in_ml(u32(o + 4), g.pmwr_gc_activator_248_04_04t0_04_array, im_pmwr_gc_activator_248_04_04t0_04, g.unordered_ref.pmwr_gc_activator_248_04_04t0_04);

    // 16 bytes;

}

function im_pmwr_gc_activator_248_04_04t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "efdJ",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Kasf",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WwhE",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "NlMB",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "l^7U",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "E4l6",
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t9(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fG?:",
        f32_04: f32(o + 4),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
        u8_20: u8(o + 20),
        u8_22: u8(o + 22),
    });

    // 32 bytes;

}
function im_pmwr_gc_activator_248_04_04t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fza6",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^SbD",
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "x^VU",
        section_00: [],
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
    });

    u32(o + 0) && im_pmwr_gc_activator_248_04_04t13_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t13_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=3BZ",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_248_04_04t13_00_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t13_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "R<zK",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Gyl2",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[YtQ",

        section_00: im_string(u32(o + 0), 0, false),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        section_16: [],
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        section_36: [],
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        section_52: [],
        f32_56: f32(o + 56),
        u8_61: u8(o + 61),
        f32_64: f32(o + 64),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        section_76: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_pmwr_gc_activator_248_32_08(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_08);
    }
    u32(o + 16) && im_pmwr_gc_activator_248_32_16(u32(o + 16) + g.m, x[i].section_16);
    u32(o + 32) && im_pmwr_gc_activator_248_32_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_pmwr_gc_activator_248_32_36(u32(o + 36) + g.m, x[i].section_36);
    // offset? 
    u32(o + 52) && im_pmwr_gc_activator_248_32_52(u32(o + 52) + g.m, x[i].section_52);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_pmwr_gc_activator_248_32_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
    }
    u32(o + 76) && im_pmwr_gc_activator_248_32_76(u32(o + 76) + g.m, x[i].section_76);

}
function im_pmwr_gc_activator_248_32_08(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "b1U_",

        unordered_pmwr_gc_model_link_00: 0,
    });

    x[i].unordered_pmwr_gc_model_link_00 = in_ml(u32(o + 0), g.pmwr_gc_model_link_array, im_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link);

}
function im_pmwr_gc_activator_248_32_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";Cj[",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gYJ6",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bL44",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Jyqr",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nEkh",

        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        section_08: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 2:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t2(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 4:
        x[i].section_08 = in_ml(u32(o + 8), g.pmwr_gc_activator_array, im_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator);
        break;
    case 5:
        x[i].section_08 = in_ml(u32(o + 8), g.pmwr_gc_activator_array, im_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator);
        break;
    case 8:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t08(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 10:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t10(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 12:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t12(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 13:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t13(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 14:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t14(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 15:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t15(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 16:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t16(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 17:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t17(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 18:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t18(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 20:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t20(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 22:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t22(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 23:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t23(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 25:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t25(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 32:
        u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t32(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}
function im_pmwr_gc_activator_248_32_72_08t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "aZvb",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "p;V@",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SI@e",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5m=S",
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":EX6",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kgg>",
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t14(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "C0jR",
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
    });

    // 32 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Rvzj",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UN>>",
        u16_00: u16(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "<JlD",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t18(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Cuaw",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t18_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t18_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0DjR",
        u32_00: u32(o + 0),
        //check this
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 0:
        x[0].section_04 = in_ml(u32(o + 4), g.pmwr_gc_activator_248_32_72_08t18_08_04t0_array, im_pmwr_gc_activator_248_32_72_08t18_08_04t0, g.unordered_ref.pmwr_gc_activator_248_32_72_08t18_08_04t0);
        break;
    case 6:
        u32(o + 4) && im_pmwr_gc_activator_248_32_72_08t18_08_04t6(u32(o + 4) + g.m, x[0].section_04);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t18_08_04t0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zTx1",

        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
    });

    return x[i].id
    // 48 bytes;

}

function im_pmwr_gc_activator_248_32_72_08t18_08_04t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dDkA",
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t18_08_04t6_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t18_08_04t6_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WtoY",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "6ST2",
        section_00: [],
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    switch (u8(o + 8)) {
    case 0:
        x[0].section_00 = f32(o + 0);
        break;
    case 1:
        u32(o + 0) && im_pmwr_gc_activator_248_32_72_08t20_00t1(u32(o + 0) + g.m, x[0].section_00);
        break;
    }
    // 16 bytes;

}

function im_pmwr_gc_activator_248_32_72_08t20_00t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3GdC",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t22(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?eVk",
        section_00: [],
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
    });

    u32(o + 0) && im_pmwr_gc_activator_248_32_72_08t22_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t22_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lzmB",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_248_32_72_08t22_00_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t22_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dB@:",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t23(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VVui",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}

function im_pmwr_gc_activator_248_32_72_08t25(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "G:q=",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_248_32_72_08t25_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t25_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8Mt3",
        u8_04: u8(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_activator_248_32_72_08t25_04_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t25_04_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3Zr0",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_72_08t32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "y_sB",
        u32_00: u32(o + 0),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_activator_248_32_76(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "XAur",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}

function im_pmwr_gc_activator_248_04_04t0_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5xm<",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        u8_24: u8(o + 24),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_activator_248_04_04t0_04_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 48 bytes;

}
function im_pmwr_gc_activator_248_04_04t0_04_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wOXy",

        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_248_04_04t0_04_04_04(u32(o + 4) + g.m, x[i].section_04);

}
function im_pmwr_gc_activator_248_04_04t0_04_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=M;:",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_activator_248_04_04t0_04_04_04_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_activator_248_04_04t0_04_04_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">phr",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
    });

    // 16 bytes;

}

function im_pmwr_gc_car(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HfAo",

        section_00: [],
        u8_04: u8(o + 4),
    });

    u32(o + 0) && im_pmwr_gc_car_00(u32(o + 0) + g.m, x[i].section_00);
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_car_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "RA<?",
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        u32_76: u32(o + 76),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
        u32_104: u32(o + 104),
        u32_108: u32(o + 108),
        u32_112: u32(o + 112),
        u32_116: u32(o + 116),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        u32_128: u32(o + 128),
        u32_132: u32(o + 132),
        u32_136: u32(o + 136),
        u32_140: u32(o + 140),
        u32_144: u32(o + 144),
        u32_148: u32(o + 148),
        u32_152: u32(o + 152),
        u32_156: u32(o + 156),
        u32_160: u32(o + 160),
        u32_168: u32(o + 168),
        u32_172: u32(o + 172),
        ordered_pmwr_gc_model_animation_2_176: 0,
        unordered_pmwr_gc_car_00_180_180: 0,
        unordered_pmwr_gc_car_00_184_184: 0,
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        u32_204: u32(o + 204),
        //amount?
        section_208: [],
        u32_212: u32(o + 212),
        //amount?
        section_216: [],
        u32_220: u32(o + 220),
        //amount?
        section_224: [],
        u32_228: u32(o + 228),
        //amount?
        section_232: [],
    });

    x[0].ordered_pmwr_gc_model_animation_2_176 = in_ml(u32(o + 176), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);

    x[0].unordered_pmwr_gc_car_00_180_180 = in_ml(u32(o + 180), g.pmwr_gc_car_00_180_array, im_pmwr_gc_car_00_180, g.unordered_ref.pmwr_gc_car_00_180);
    x[0].unordered_pmwr_gc_car_00_184_184 = in_ml(u32(o + 184), g.pmwr_gc_car_00_184_array, im_pmwr_gc_car_00_184, g.unordered_ref.pmwr_gc_car_00_184);
    u32(o + 188) && im_pmwr_gc_car_00_188(u32(o + 188) + g.m, x[0].section_188);
    u32(o + 192) && im_pmwr_gc_car_00_192(u32(o + 192) + g.m, x[0].section_192);
    u32(o + 196) && im_pmwr_gc_car_00_196(u32(o + 196) + g.m, x[0].section_196);
    u32(o + 200) && im_pmwr_gc_car_00_200(u32(o + 200) + g.m, x[0].section_200);

    for (let i = 0; i < u32(o + 204); i++) {
        im_pmwr_gc_car_00_208(u32(o + 208) + (i * 8) + g.m, i, x[0].section_208);
    }

    for (let i = 0; i < u32(o + 212); i++) {
        im_pmwr_gc_car_00_216(u32(o + 216) + (i * 12) + g.m, i, x[0].section_216);
    }

    for (let i = 0; i < u32(o + 220); i++) {
        im_pmwr_gc_car_00_216(u32(o + 224) + (i * 12) + g.m, i, x[0].section_224);
    }

    for (let i = 0; i < u32(o + 228); i++) {
        im_pmwr_gc_unknown(u32(o + 232) + (i * 4) + g.m, i, x[0].section_232);
    }

    // 240 bytes;

}
function im_pmwr_gc_car_00_180(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5bdf",

        section_00: [],
        section_04: [],
        unordered_pmwr_gc_sound_section_08: 0,
        unordered_pmwr_gc_sound_section_12: 0,
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
    });

    u32(o + 0) && im_pmwr_gc_car_00_180_00(u32(o + 0) + g.m, x[i].section_00);
    u32(o + 4) && im_pmwr_gc_car_00_180_04(u32(o + 4) + g.m, x[i].section_04);
    x[i].unordered_pmwr_gc_sound_section_08 = in_ml(u32(o + 8), g.pmwr_gc_sound_section_array, im_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section);
    x[i].unordered_pmwr_gc_sound_section_12 = in_ml(u32(o + 12), g.pmwr_gc_sound_section_array, im_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_pmwr_gc_car_00_180_20(u32(o + 20) + (ii * 8) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_pmwr_gc_car_00_180_20(u32(o + 28) + (ii * 8) + g.m, ii, x[i].section_28);
    }

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_pmwr_gc_car_00_180_20(u32(o + 36) + (ii * 8) + g.m, ii, x[i].section_36);
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_pmwr_gc_car_00_180_20(u32(o + 44) + (ii * 8) + g.m, ii, x[i].section_44);
    }
    return x[i].id
    // 48 bytes;

}
function im_pmwr_gc_car_00_180_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ZbsY",
        f32_00: f32(o + 0),
        pmwr_gc_texture_04: im_patch(g.pmwr_gc_texture_patch_ref, o + 4),
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        unordered_pmwr_gc_unknown_00_20: 0,
        u32_24: u32(o + 24),
        unordered_pmwr_gc_unknown_00_28: 0,
        unordered_pmwr_gc_unknown_00_32: 0,
        unordered_pmwr_gc_unknown_00_36: 0,
    });

    u32(o + 8) && im_pmwr_gc_car_00_180_00_08(u32(o + 8) + g.m, x[0].section_08);

    for (let i = 0; i < u32(o + 12); i++) {
        im_pmwr_gc_car_00_180_00_16(u32(o + 16) + (i * 20) + g.m, i, x[0].section_16);
    }
    x[0].unordered_pmwr_gc_unknown_00_20 = in_ml(u32(o + 20), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[0].unordered_pmwr_gc_unknown_00_28 = in_ml(u32(o + 28), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[0].unordered_pmwr_gc_unknown_00_32 = in_ml(u32(o + 32), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[0].unordered_pmwr_gc_unknown_00_36 = in_ml(u32(o + 36), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);

    // 48 bytes;

}
function im_pmwr_gc_car_00_180_00_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_>ez",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_car_00_180_00_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "O0LK",

        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 8) && im_pmwr_gc_car_00_180_00_16_08(u32(o + 8) + g.m, x[i].section_08);
    u32(o + 12) && im_pmwr_gc_car_00_180_00_16_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 16) && im_pmwr_gc_car_00_180_00_16_12(u32(o + 16) + g.m, x[i].section_16);

}
function im_pmwr_gc_car_00_180_00_16_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "f[@[",
        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_pmwr_gc_car_00_180_00_16_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "32;U",
        u32_00: u32(o + 0),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_car_00_180_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KPK3",
        f32_00: f32(o + 0),
        //check this
        f32_04: f32(o + 4),
        //check this
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        //check this
        f32_16: f32(o + 16),
        //check this
        f32_20: f32(o + 20),
        //check this
        u32_24: u32(o + 24),
        //check this
        f32_32: f32(o + 32),
        //check this
        f32_36: f32(o + 36),
        //check this
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        section_64: [],
        unordered_pmwr_gc_unknown_00_68: 0,
        f32_72: f32(o + 72),
        //amount?
        f32_76: f32(o + 76),
        section_80: [],
        unordered_pmwr_gc_car_00_180_04_84_84: 0,
        unordered_pmwr_gc_car_00_180_04_84_88: 0,
        section_92: [],
    });

    u32(o + 56) && im_pmwr_gc_car_00_180_04_56(u32(o + 56) + g.m, x[0].section_56);
    u32(o + 64) && im_pmwr_gc_car_00_180_04_56(u32(o + 64) + g.m, x[0].section_64);
    x[0].unordered_pmwr_gc_unknown_00_68 = in_ml(u32(o + 68), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    u32(o + 80) && im_pmwr_gc_car_00_180_04_80(u32(o + 80) + g.m, x[0].section_80);

    x[0].unordered_pmwr_gc_car_00_180_04_84_84 = in_ml(u32(o + 84), g.pmwr_gc_car_00_180_04_84_array, im_pmwr_gc_car_00_180_04_84, g.unordered_ref.pmwr_gc_car_00_180_04_84);
    x[0].unordered_pmwr_gc_car_00_180_04_84_88 = in_ml(u32(o + 88), g.pmwr_gc_car_00_180_04_84_array, im_pmwr_gc_car_00_180_04_84, g.unordered_ref.pmwr_gc_car_00_180_04_84);

    u32(o + 92) && im_pmwr_gc_car_00_180_04_92(u32(o + 92) + g.m, x[0].section_92);

    // 96 bytes;

}
function im_pmwr_gc_car_00_180_04_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UHO=",
        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_pmwr_gc_car_00_180_04_80(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "XN1m",
        u32_00: u32(o + 0),
        f32_08: f32(o + 8),
        unordered_pmwr_gc_unknown_00_16: 0,
    });

    x[0].unordered_pmwr_gc_unknown_00_16 = in_ml(u32(o + 16), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);

    // 32 bytes;

}
function im_pmwr_gc_car_00_180_04_84(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@p?P",

        u32_00: u32(o + 0),
    });

    return x[i].id
    // 16 bytes;

}

function im_pmwr_gc_car_00_180_04_92(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0CvZ",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_car_00_180_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7<Bd",

        u8_00: u8(o + 0),
        section_04: [],
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) && im_pmwr_gc_car_00_180_20_04t1(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 3:
        u32(o + 4) && im_pmwr_gc_car_00_180_20_04t3(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
}
function im_pmwr_gc_car_00_180_20_04t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SbaL",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        f32_36: f32(o + 36),
    });

    // 64 bytes;

}
function im_pmwr_gc_car_00_180_20_04t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Yr?m",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_car_00_184(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";ljS",

        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_car_00_184_04(u32(o + 4) + g.m, x[i].section_04);
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_car_00_184_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LRdo",
        section_00: [],
        section_04: [],
        section_08: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
    });

    u32(o + 0) && im_pmwr_gc_car_00_184_04_00(u32(o + 0) + g.m, x[0].section_00);
    u32(o + 4) && im_pmwr_gc_car_00_184_04_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 8) && im_pmwr_gc_car_00_184_04_08(u32(o + 8) + g.m, x[0].section_08);

    // 64 bytes;

}
function im_pmwr_gc_car_00_184_04_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2ji0",
        section_16: [],
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        f32_40: f32(o + 40),
        unordered_pmwr_gc_gate_44: 0,
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    u32(o + 16) && im_pmwr_gc_car_00_184_04_00_16(u32(o + 16) + g.m, x[0].section_16);
    x[0].unordered_pmwr_gc_gate_44 = in_ml(u32(o + 44), g.pmwr_gc_gate_array, im_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate);

    // 80 bytes;

}
function im_pmwr_gc_car_00_184_04_00_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^HVp",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_pmwr_gc_car_00_184_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oVHV",
        f32_00: f32(o + 0),
        //check this
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_car_00_184_04_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "y5Pt",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
    });

    // 96 bytes;

}
function im_pmwr_gc_car_00_188(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W[ZE",
        ordered_pmwr_gc_model_animation_2_00: 0,
        unordered_pmwr_gc_model_link_04: 0,
        ordered_pmwr_gc_model_animation_1_08: 0,
        ordered_pmwr_gc_model_animation_1_12: 0,
        ordered_pmwr_gc_model_animation_1_16: 0,
        u8_20: u8(o + 20),
        ordered_pmwr_gc_model_animation_1_24: 0,
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
    });

    x[0].ordered_pmwr_gc_model_animation_2_00 = in_ml(u32(o + 0), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);
    x[0].unordered_pmwr_gc_model_link_04 = in_ml(u32(o + 4), g.pmwr_gc_model_link_array, im_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link);
    x[0].ordered_pmwr_gc_model_animation_1_08 = in_ml(u32(o + 8), g.pmwr_gc_model_animation_1_array, im_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1);
    x[0].ordered_pmwr_gc_model_animation_1_12 = in_ml(u32(o + 12), g.pmwr_gc_model_animation_1_array, im_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1);
    x[0].ordered_pmwr_gc_model_animation_1_16 = in_ml(u32(o + 16), g.pmwr_gc_model_animation_1_array, im_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1);
    x[0].ordered_pmwr_gc_model_animation_1_24 = in_ml(u32(o + 24), g.pmwr_gc_model_animation_1_array, im_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1);

    for (let i = 0; i < u32(o + 48); i++) {
        im_pmwr_gc_car_00_188_52(u32(o + 52) + (i * 8) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 56); i++) {
        im_pmwr_gc_car_00_188_60(u32(o + 60) + (i * 20) + g.m, i, x[0].section_60);
    }

    for (let i = 0; i < u32(o + 64); i++) {
        im_pmwr_gc_car_00_188_68(u32(o + 68) + (i * 32) + g.m, i, x[0].section_68);
    }

    for (let i = 0; i < u32(o + 72); i++) {
        im_pmwr_gc_car_00_188_68(u32(o + 76) + (i * 32) + g.m, i, x[0].section_76);
    }

    for (let i = 0; i < u32(o + 80); i++) {
        im_pmwr_gc_car_00_188_68(u32(o + 84) + (i * 32) + g.m, i, x[0].section_84);
    }

    // 128 bytes;

}
function im_pmwr_gc_car_00_188_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Z5qA",

        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_car_00_188_52_04(u32(o + 4) + g.m, x[i].section_04);

}
function im_pmwr_gc_car_00_188_52_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OwVo",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_car_00_188_52_04_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_car_00_188_52_04_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">uIC",

        unordered_pmwr_gc_model_link_00: 0,
    });

    x[i].unordered_pmwr_gc_model_link_00 = in_ml(u32(o + 0), g.pmwr_gc_model_link_array, im_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link);

}
function im_pmwr_gc_car_00_188_60(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "po2W",

        u16_00: u16(o + 0),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
    });

}
function im_pmwr_gc_car_00_188_68(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8QeR",

        u32_00: u32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_pmwr_gc_car_00_192(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "P[9^",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        unordered_pmwr_gc_car_00_192_16_16: 0,
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u8_28: u8(o + 28),
        unordered_pmwr_gc_wtf_32: 0,
    });

    x[0].unordered_pmwr_gc_car_00_192_16_16 = in_ml(u32(o + 16), g.pmwr_gc_car_00_192_16_array, im_pmwr_gc_car_00_192_16, g.unordered_ref.pmwr_gc_car_00_192_16);

    for (let i = 0; i < u32(o + 20); i++) {
        im_pmwr_gc_car_00_192_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
    }
    x[0].unordered_pmwr_gc_wtf_32 = in_ml(u32(o + 32), g.pmwr_gc_wtf_array, im_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf);

    // 48 bytes;

}
function im_pmwr_gc_car_00_192_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HCJ2",

        u32_04: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    return x[i].id
    // 48 bytes;

}

function im_pmwr_gc_car_00_192_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Io]5",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_car_00_196(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i]Cj",
        unordered_pmwr_gc_sound_section_00: 0,
        f32_04: f32(o + 4),
        //check this
        unordered_pmwr_gc_sound_section_08: 0,
        f32_12: f32(o + 12),
        //check this
        f32_16: f32(o + 16),
        //check this
        f32_20: f32(o + 20),
        //check this
    });

    x[0].unordered_pmwr_gc_sound_section_00 = in_ml(u32(o + 0), g.pmwr_gc_sound_section_array, im_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section);
    x[0].unordered_pmwr_gc_sound_section_08 = in_ml(u32(o + 8), g.pmwr_gc_sound_section_array, im_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section);

    // 32 bytes;

}
function im_pmwr_gc_car_00_200(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i=si",
        unordered_pmwr_gc_interface_00: 0,
        unordered_pmwr_gc_interface_04: 0,
        unordered_pmwr_gc_interface_08: 0,
        unordered_pmwr_gc_interface_12: 0,
        unordered_pmwr_gc_interface_16: 0,
        unordered_pmwr_gc_interface_20: 0,
    });

    x[0].unordered_pmwr_gc_interface_00 = in_ml(u32(o + 0), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_04 = in_ml(u32(o + 4), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_08 = in_ml(u32(o + 8), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_12 = in_ml(u32(o + 12), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_16 = in_ml(u32(o + 16), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_20 = in_ml(u32(o + 20), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);

    // 32 bytes;

}
function im_pmwr_gc_car_00_208(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Fv88",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_car_00_208_04(u32(o + 4) + (ii * 32) + g.m, ii, x[i].section_04);
    }

}
function im_pmwr_gc_car_00_208_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "z3;b",

        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_pmwr_gc_car_00_216(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OXT[",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }

}

function im_pmwr_gc_flag(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t@XW",

        u32_00: u32(o + 0),
        section_04: im_string(u32(o + 4), 0, false),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
        f32_16: f32(o + 16),
        f32_28: f32(o + 28),
        u8_40: u8(o + 40),
    });

    switch (u8(o + 8)) {
    case 2:
        u32(o + 12) && im_pmwr_gc_flag_12t2(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 3:
        u32(o + 12) && im_pmwr_gc_flag_12t3(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 4:
        u32(o + 12) && im_pmwr_gc_flag_12t4(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
    return x[i].id
    // 48 bytes;

}
function im_pmwr_gc_flag_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UnoN",
        u8_00: u8(o + 0),
        u8_02: u8(o + 2),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_flag_12t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "NX>w",
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_pmwr_gc_flag_12t3_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_flag_12t3_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "n8]n",
    });

    // 32 bytes;

}
function im_pmwr_gc_flag_12t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pmwr_gc_vark",
        f32_00: f32(o + 0),
    });

    // 16 bytes;

}

function im_pmwr_gc_frame_font(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "O7hZ",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        //patch?
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        //amount?
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
    });

    u32(o + 28) && im_pmwr_gc_frame_font_28(u32(o + 28) + g.m, x[i].section_28);

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_pmwr_gc_frame_font_36(u32(o + 36) + (ii * 12) + g.m, ii, x[i].section_36);
    }
    return x[i].id
    // 48 bytes;

}
function im_pmwr_gc_frame_font_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?KgJ",
        f32_00: f32(o + 0),
    });

    // 32 bytes;

}
function im_pmwr_gc_frame_font_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?HV;",

        u8_00: u8(o + 0),
        //check this
        f32_04: f32(o + 4),
        //check this
        f32_08: f32(o + 8),
        //check this
    });

}

function im_pmwr_gc_frame_multi_font(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "28N;",

        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_frame_multi_font_04(u32(o + 4) + g.m, x[i].section_04);
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_frame_multi_font_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "usq_",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        unordered_pmwr_gc_frame_font_12: 0,
        f32_24: f32(o + 24),
        unordered_pmwr_gc_frame_font_28: 0,
        unordered_pmwr_gc_frame_font_32: 0,
    });

    x[0].unordered_pmwr_gc_frame_font_12 = in_ml(u32(o + 12), g.pmwr_gc_frame_font_array, im_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font);
    x[0].unordered_pmwr_gc_frame_font_28 = in_ml(u32(o + 28), g.pmwr_gc_frame_font_array, im_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font);
    x[0].unordered_pmwr_gc_frame_font_32 = in_ml(u32(o + 32), g.pmwr_gc_frame_font_array, im_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font);

    // 48 bytes;

}

function im_pmwr_gc_frame_sparkler(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "uMI8",

        f32_00: f32(o + 0),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) && im_pmwr_gc_frame_sparkler_16(u32(o + 16) + g.m, x[i].section_16);
    return x[i].id
    // 32 bytes;

}
function im_pmwr_gc_frame_sparkler_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t3JQ",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
    });

    for (let i = 0; i < u32(o + 44); i++) {
        im_pmwr_gc_frame_sparkler_16_48(u32(o + 48) + (i * 12) + g.m, i, x[0].section_48);
    }

    for (let i = 0; i < u32(o + 52); i++) {
        im_pmwr_gc_frame_sparkler_16_56(u32(o + 56) + (i * 32) + g.m, i, x[0].section_56);
    }

    // 64 bytes;

}
function im_pmwr_gc_frame_sparkler_16_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "akbg",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_frame_sparkler_16_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "P_ng",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_20: f32(o + 20),
    });

}

function im_pmwr_gc_frame_text(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gOyr",

        section_00: im_string(u32(o + 0), 0, false),
    });

    return x[i].id
    // 16 bytes;

}

function im_pmwr_gc_gate(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ykoP",

        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_17: u8(o + 17),
        section_24: [],
        unordered_pmwr_gc_unknown_00_28: 0,
        f32_32: f32(o + 32),
        unordered_pmwr_gc_unknown_00_36: 0,
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_56: f32(o + 56),
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        unordered_pmwr_gc_sound_section_76: 0,
        unordered_pmwr_gc_sound_controls_80: 0,
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        u8_105: u8(o + 105),
        u8_107: u8(o + 107),
    });

    u32(o + 24) && im_pmwr_gc_gate_24(u32(o + 24) + g.m, x[i].section_24);
    x[i].unordered_pmwr_gc_unknown_00_28 = in_ml(u32(o + 28), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_unknown_00_36 = in_ml(u32(o + 36), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_pmwr_gc_unknown(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    x[i].unordered_pmwr_gc_sound_section_76 = in_ml(u32(o + 76), g.pmwr_gc_sound_section_array, im_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section);
    x[i].unordered_pmwr_gc_sound_controls_80 = in_ml(u32(o + 80), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    u32(o + 84) && im_pmwr_gc_gate_84(u32(o + 84) + g.m, x[i].section_84);
    return x[i].id
    // 128 bytes;

}
function im_pmwr_gc_gate_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "10md",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_gate_84(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "l<e]",
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    u32(o + 4) && im_pmwr_gc_gate_84_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_gate_84_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "d1fw",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}

function im_pmwr_gc_idk(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "66sn",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        section_04: [],
        ordered_pmwr_gc_model_animation_2_08: 0,
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u8_64: u8(o + 64),
        u8_65: u8(o + 65),
        u8_66: u8(o + 66),
        u8_67: u8(o + 67),
    });

    switch (u8(o + 0)) {
    case 0:
        x[i].section_04 = in_models(o + 4, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models)
        break;
    case 1:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_model_link_array, im_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link);
        break;
    }
    x[i].ordered_pmwr_gc_model_animation_2_08 = in_ml(u32(o + 8), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);
    u32(o + 12) && im_pmwr_gc_idk_12(u32(o + 12) + g.m, x[i].section_12);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_pmwr_gc_idk_20(u32(o + 20) + (ii * 32) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_mysterious(u32(o + 32) + (ii * 64) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 80 bytes;

}
function im_pmwr_gc_idk_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]5[d",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        section_16: [],
        ordered_pmwr_gc_models_20: in_models(o + 20, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
        unordered_pmwr_gc_wtf_28: 0,
        f32_32: f32(o + 32),
        unordered_pmwr_gc_gate_44: 0,
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        u32_64: u32(o + 64),
        section_68: [],
    });

    u32(o + 16) && im_pmwr_gc_idk_12_16(u32(o + 16) + g.m, x[0].section_16);
    x[0].unordered_pmwr_gc_wtf_28 = in_ml(u32(o + 28), g.pmwr_gc_wtf_array, im_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf);
    x[0].unordered_pmwr_gc_gate_44 = in_ml(u32(o + 44), g.pmwr_gc_gate_array, im_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate);

    for (let i = 0; i < u32(o + 64); i++) {
        im_pmwr_gc_unknown(u32(o + 68) + (i * 4) + g.m, i, x[0].section_68);
    }

    // 80 bytes;

}
function im_pmwr_gc_idk_12_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kSMq",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_pmwr_gc_idk_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "627B",

        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_24: u32(o + 24),
        section_28: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_pmwr_gc_idk_20_08(u32(o + 8) + (ii * 32) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_pmwr_gc_idk_20_16(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_pmwr_gc_mysterious(u32(o + 28) + (ii * 64) + g.m, ii, x[i].section_28);
    }

}
function im_pmwr_gc_idk_20_08(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "F0T<",

        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_pmwr_gc_idk_20_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FL91",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}

function im_pmwr_gc_interface(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DE>T",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u16_02: u16(o + 2),
        section_04: [],
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        unordered_pmwr_gc_sound_controls_28: 0,
        unordered_pmwr_gc_sound_controls_36: 0,
        unordered_pmwr_gc_sound_controls_40: 0,
        u32_44: u32(o + 44),
        section_48: [],
        unordered_pmwr_gc_sound_controls_52: 0,
        section_56: [],
        f32_60: f32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_04(u32(o + 4) + g.m, x[i].section_04);

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_pmwr_gc_interface_12(u32(o + 12) + (ii * 28) + g.m, ii, x[i].section_12);
    }
    x[i].unordered_pmwr_gc_sound_controls_28 = in_ml(u32(o + 28), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    x[i].unordered_pmwr_gc_sound_controls_36 = in_ml(u32(o + 36), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    x[i].unordered_pmwr_gc_sound_controls_40 = in_ml(u32(o + 40), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    u32(o + 48) && im_pmwr_gc_interface_48(u32(o + 48) + g.m, x[i].section_48);
    x[i].unordered_pmwr_gc_sound_controls_52 = in_ml(u32(o + 52), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    u32(o + 56) && im_pmwr_gc_interface_56(u32(o + 56) + g.m, x[i].section_56);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_pmwr_gc_interface_72(u32(o + 72) + (ii * 100) + g.m, ii, x[i].section_72);
    }
    // 80 bytes;

    return x[i].id
}

function im_pmwr_gc_interface_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t[O_",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_04_04(u32(o + 4) + (i * 36) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_04_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "E>z=",

        section_00: im_string(u32(o + 0), 0, false),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 12) && im_pmwr_gc_interface_04_04_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 5:
        u32(o + 12) && im_pmwr_gc_interface_04_04_12t5(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 7:
        u32(o + 12) && im_pmwr_gc_interface_04_04_12t7(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 8:
        u32(o + 12) && im_pmwr_gc_interface_04_04_12t8(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 9:
        u32(o + 12) && im_pmwr_gc_interface_04_04_12t9(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
}
function im_pmwr_gc_interface_04_04_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ff@u",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_04_04_12t1_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_04_04_12t1_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iRTP",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}

function im_pmwr_gc_interface_04_04_12t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Y83X",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_04_04_12t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_C8D",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_04_04_12t8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "c761",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_04_04_12t8_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_04_04_12t8_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "hj0[",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        section_08: im_string(u32(o + 8), 0, false),
    });

}
function im_pmwr_gc_interface_04_04_12t9(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iMTM",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: im_string(u32(o + 4), 0, false),
        section_08: im_string(u32(o + 8), 0, false),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ur09",

        u32_00: u32(o + 0),
        //check this
        section_04: [],
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    switch (u32(o + 0)) {
    case 1026:
        u32(o + 4) && im_pmwr_gc_interface_12_04t1026(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 1027:
        u32(o + 4) && im_pmwr_gc_interface_12_04t1027(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_pmwr_gc_interface_12_16(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_pmwr_gc_interface_12_24(u32(o + 24) + (ii * 36) + g.m, ii, x[i].section_24);
    }

}
function im_pmwr_gc_interface_12_04t1026(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eM8<",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u32_04: u32(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
    });

    u32(o + 8) && im_pmwr_gc_interface_12_04t1026_08(u32(o + 8) + g.m, x[0].section_08);
    // offset? 
    // 32 bytes;

}
function im_pmwr_gc_interface_12_04t1026_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MOIH",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_12_04t1026_08_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_12_04t1026_08_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OfCN",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_12_04t1027(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CrJX",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_12_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "D;AX",

        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_12_04t1026(u32(o + 4) + g.m, x[i].section_04);

}
function im_pmwr_gc_interface_12_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zuhf",

        u8_00: u8(o + 0),
        //check this
        u8_01: u8(o + 1),
        u16_02: u16(o + 2),
        section_04: [],
        section_08: [],
        u32_20: u32(o + 20),
        //check this
        unordered_pmwr_gc_sound_controls_24: 0,
    });

    switch (u8(o + 0)) {
    case 1:
    case 31:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
        break;
    case 11:
        u32(o + 4) && im_pmwr_gc_interface_12_24_04t11(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
    u32(o + 8) && im_pmwr_gc_interface_12_24_08(u32(o + 8) + g.m, x[i].section_08);
    // offset? 
    x[i].unordered_pmwr_gc_sound_controls_24 = in_ml(u32(o + 24), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);

}
function im_pmwr_gc_interface_12_24_04t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "n1Ib",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_12_24_04t11_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_12_24_04t11_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iW5E",

        section_00: [],
        u16_04: u16(o + 4),
        //check this
        section_08: [],
    });

    u32(o + 0) && im_pmwr_gc_interface_12_24_04t11_04_00(u32(o + 0) + g.m, x[i].section_00);
    switch (u16(o + 4)) {
    case 0:
        u32(o + 8) && im_pmwr_gc_interface_12_24_04t11_04_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 1:
        u32(o + 8) && im_pmwr_gc_interface_12_24_04t11_04_08t1(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 3:
        x[i].section_08 = in_ml(u32(o + 8), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
        break;
    case 100:
        x[i].section_08 = in_ml(u32(o + 8), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
        break;
    case 101:
        x[i].section_08 = in_ml(u32(o + 8), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
        break;
    }
}

function im_pmwr_gc_interface_12_24_04t11_04_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "a[6^",
    });
    // 16 bytes;

}

function im_pmwr_gc_interface_12_24_04t11_04_08t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oDAO",
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_12_24_04t11_04_08t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yeXP",
        section_00: [],
        section_04: [],
    });

    u32(o + 0) && im_pmwr_gc_interface_12_24_04t11_04_08t1_00(u32(o + 0) + g.m, x[0].section_00);
    u32(o + 4) && im_pmwr_gc_interface_12_24_04t11_04_08t1_00_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_12_24_04t11_04_08t1_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "vc]9",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_12_24_04t11_04_08t1_00_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_12_24_04t11_04_08t1_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2x:w",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_12_24_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=[l3",
        section_00: [],
        section_04: [],
    });

    u32(o + 0) && im_pmwr_gc_interface_12_24_08_00(u32(o + 0) + g.m, x[0].section_00);
    u32(o + 4) && im_pmwr_gc_interface_12_24_08_00(u32(o + 4) + g.m, x[0].section_04);
    // offset? 
    // 16 bytes;

}
function im_pmwr_gc_interface_12_24_08_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "V1Qy",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pHeY",
        f32_00: f32(o + 0),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "a7PK",
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pm0N",

        section_00: im_string(u32(o + 0), 0, false),
        u32_04: u32(o + 4),
        section_08: [],
        u32_12: u32(o + 12),
        u16_16: u16(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        //check this
        section_20: [],
        section_24: [],
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        section_32: [],
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        section_44: [],
        section_48: im_string(u32(o + 48), 0, false),
        section_52: [],
        u8_56: u8(o + 56),
        u32_60: u32(o + 60),
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 8) && im_pmwr_gc_interface_72_08(u32(o + 8) + g.m, x[i].section_08);
    switch (u32(o + 12)) {
    case 4:
        u32(o + 20) && im_pmwr_gc_interface_72_20t4(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 7:
        u32(o + 20) && im_pmwr_gc_interface_72_20t7(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 38:
    case 106:
    case 107:
        u32(o + 20) && im_pmwr_gc_interface_72_20t38(u32(o + 20) + g.m, x[i].section_20);
        break;
    }
    switch (u8(o + 19)) {
    case 0:
        u32(o + 24) && im_pmwr_gc_interface_72_24t0(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 1:
        u32(o + 24) && im_pmwr_gc_interface_72_24t1(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 3:
        u32(o + 24) && im_pmwr_gc_interface_72_24t3(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 5:
        u32(o + 24) && im_pmwr_gc_interface_72_24t5(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 6:
    case 7:
        u32(o + 24) && im_pmwr_gc_interface_72_24t6(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 10:
        u32(o + 24) && im_pmwr_gc_interface_72_24t10(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 12:
        u32(o + 24) && im_pmwr_gc_interface_72_24t12(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 13:
        u32(o + 24) && im_pmwr_gc_interface_72_24t13(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 14:
        u32(o + 24) && im_pmwr_gc_interface_72_24t14(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 15:
        u32(o + 24) && im_pmwr_gc_interface_72_24t15(u32(o + 24) + g.m, x[i].section_24);
        break;
    }
    u32(o + 32) && im_pmwr_gc_interface_72_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 44) && im_pmwr_gc_interface_72_44(u32(o + 44) + g.m, x[i].section_44);
    u32(o + 52) && im_pmwr_gc_interface_72_52(u32(o + 52) + g.m, x[i].section_52);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_pmwr_gc_interface_72_72(u32(o + 72) + (ii * 12) + g.m, ii, x[i].section_72);
    }

}

function im_pmwr_gc_interface_72_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "N0DQ",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_interface_72_08_08(u32(o + 8) + (i * 12) + g.m, i, x[0].section_08);
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_72_08_08(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KIz?",

        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    switch (u8(o + 0)) {
    case 2:
        u32(o + 4) && im_pmwr_gc_interface_72_08_08_04t2(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 6:
        u32(o + 4) && im_pmwr_gc_interface_72_08_08_04t6(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
}
function im_pmwr_gc_interface_72_08_08_04t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]SvT",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_72_08_08_04t2_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_72_08_08_04t2_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ayw6",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_08_08_04t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VVT5",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_20t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Rogp",
        f32_00: f32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });
    // 32 bytes;

}
function im_pmwr_gc_interface_72_20t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0qHw",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_20t38(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "86Z1",
        u32_00: u32(o + 0),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kfIQ",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        section_08: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
    });

    switch (u8(o + 0)) {
    case 0:
        x[0].section_04 = im_patch(g.pmwr_gc_texture_patch_ref, o + 4)
        break;
    case 1:
        x[0].section_04 = in_models(o + 4, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models)
        break;
    case 3:
        u32(o + 8) && im_pmwr_gc_interface_72_24t0_08(u32(o + 8) + g.m, x[0].section_08);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t0_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TDHb",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_11: u8(o + 11),
        u8_16: u8(o + 16),
        u16_18: u16(o + 18),
        u32_20: u32(o + 20),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_72_24t0_08_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }
    // 32 bytes;

}
function im_pmwr_gc_interface_72_24t0_08_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UDFi",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_interface_72_24t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "42bp",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [],
        section_08: [],
        section_12: [],
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u16_18: u16(o + 18),
        u16_20: u16(o + 20),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        f32_24: f32(o + 24),
    });

    switch (u8(o + 0)) {
    case 0:
        x[0].section_04 = in_ml(u32(o + 4), g.pmwr_gc_frame_text_array, im_pmwr_gc_frame_text, g.unordered_ref.pmwr_gc_frame_text);
        break;
    }
    switch (u8(o + 0)) {
    case 1:
        u32(o + 8) && im_pmwr_gc_interface_72_24t1_08t1(u32(o + 8) + g.m, x[0].section_08);
        break;
    case 3:
        u32(o + 8) && im_pmwr_gc_interface_72_24t1_08t3(u32(o + 8) + g.m, x[0].section_08);
        break;
    }
    switch (u8(o + 2)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.pmwr_gc_frame_font_array, im_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font);
        break;
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.pmwr_gc_frame_multi_font_array, im_pmwr_gc_frame_multi_font, g.unordered_ref.pmwr_gc_frame_multi_font);
        break;
    }
    // 32 bytes;

}
function im_pmwr_gc_interface_72_24t1_08t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "cisK",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u16_10: u16(o + 10),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_72_24t1_08t1_04(u32(o + 4) + (i * 8) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t1_08t1_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Fw>1",

        unordered_pmwr_gc_frame_text_00: 0,
    });

    x[i].unordered_pmwr_gc_frame_text_00 = in_ml(u32(o + 0), g.pmwr_gc_frame_text_array, im_pmwr_gc_frame_text, g.unordered_ref.pmwr_gc_frame_text);

}
function im_pmwr_gc_interface_72_24t1_08t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DT6;",
        u8_00: u8(o + 0),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "QQ4F",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_72_24t3_04(u32(o + 4) + (i * 8) + g.m, i, x[0].section_04);
    }
    u32(o + 16) && im_pmwr_gc_interface_72_24t3_16(u32(o + 16) + g.m, x[0].section_16);
    // 32 bytes;

}
function im_pmwr_gc_interface_72_24t3_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "51Zd",

        unordered_pmwr_gc_model_link_00: 0,
        unordered_pmwr_gc_sound_controls_04: 0,
    });

    x[i].unordered_pmwr_gc_model_link_00 = in_ml(u32(o + 0), g.pmwr_gc_model_link_array, im_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link);
    x[i].unordered_pmwr_gc_sound_controls_04 = in_ml(u32(o + 4), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);

}
function im_pmwr_gc_interface_72_24t3_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "B1Q2",
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_interface_72_24t3_16_08(u32(o + 8) + g.m, x[0].section_08);
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t3_16_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W<pr",
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9g_z",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Nz3x",
        unordered_pmwr_gc_interface_00: 0,
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    x[0].unordered_pmwr_gc_interface_00 = in_ml(u32(o + 0), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_interface_72_24t6_12(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t6_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tcGx",

        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
    });

}
function im_pmwr_gc_interface_72_24t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4]MB",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "l=Y3",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9XxD",
        u8_01: u8(o + 1),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_72_24t13_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_interface_72_24t13_12(u32(o + 12) + g.m, x[0].section_12);
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t13_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "p;K^",
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        u32_08: u32(o + 8),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t13_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3W6^",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t14(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Voj:",
        u8_272: u8(o + 272),
        u8_273: u8(o + 273),
        section_276: [],
    });

    u32(o + 276) && im_pmwr_gc_interface_72_24t14_276(u32(o + 276) + g.m, x[0].section_276);

    // 288 bytes;

}
function im_pmwr_gc_interface_72_24t14_276(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OOt:",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_08: u8(o + 8),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_24t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rjV^",
        unordered_pmwr_gc_frame_sparkler_00: 0,
    });

    x[0].unordered_pmwr_gc_frame_sparkler_00 = in_ml(u32(o + 0), g.pmwr_gc_frame_sparkler_array, im_pmwr_gc_frame_sparkler, g.unordered_ref.pmwr_gc_frame_sparkler);
    // 16 bytes;

}
function im_pmwr_gc_interface_72_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "C=3B",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u32_08: u32(o + 8),
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

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_interface_72_32_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_interface_72_32_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_pmwr_gc_interface_72_32_20(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_pmwr_gc_interface_12(u32(o + 36) + (i * 28) + g.m, i, x[0].section_36);
    }
    // 48 bytes;

}
function im_pmwr_gc_interface_72_32_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PnqU",

        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

}
function im_pmwr_gc_interface_72_32_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "agcn",

        u16_04: u16(o + 4),
        section_08: [],
    });

    switch (u16(o + 4)) {
    case 0:
        u32(o + 8) && im_pmwr_gc_interface_72_32_20_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 1:
        u32(o + 8) && im_pmwr_gc_interface_72_32_20_08t1(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}
function im_pmwr_gc_interface_72_32_20_08t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "is@t",
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u16_06: u16(o + 6),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_32_20_08t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ux:5",
        section_00: [],
        section_04: [],
    });

    u32(o + 0) && im_pmwr_gc_interface_72_32_20_08t1_00(u32(o + 0) + g.m, x[0].section_00);
    u32(o + 4) && im_pmwr_gc_interface_72_32_20_08t1_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_72_32_20_08t1_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "QnAj",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_interface_72_32_20_08t1_00_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_interface_72_32_20_08t1_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OqrU",
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_32_20_08t1_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5An;",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5@r1",
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "h;wV",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
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
        im_pmwr_gc_interface_72_52_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_interface_72_52_04(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_interface_72_52_04(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_pmwr_gc_interface_72_52_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_pmwr_gc_interface_72_52_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }
    // 48 bytes;

}
function im_pmwr_gc_interface_72_52_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Ngna",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_pmwr_gc_interface_72_52_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8p?F",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_interface_72_52_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3[sl",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_pmwr_gc_interface_72_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":zxj",

        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    u32(o + 4) && im_pmwr_gc_interface_72_72_04(u32(o + 4) + g.m, x[i].section_04);

}
function im_pmwr_gc_interface_72_72_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fW[L",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
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
        unordered_pmwr_gc_sound_controls_48: 0,
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_interface_72_72_04_04(u32(o + 4) + (i * 20) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_interface_72_72_04_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_interface_72_72_04_12(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_pmwr_gc_interface_72_72_04_12(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_pmwr_gc_interface_72_72_04_36(u32(o + 36) + (i * 12) + g.m, i, x[0].section_36);
    }
    u32(o + 44) && im_pmwr_gc_interface_72_72_04_44(u32(o + 44) + g.m, x[0].section_44);
    x[0].unordered_pmwr_gc_sound_controls_48 = in_ml(u32(o + 48), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    // 64 bytes;

}
function im_pmwr_gc_interface_72_72_04_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Sxdb",

        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_pmwr_gc_interface_72_72_04_04_16(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }

}
function im_pmwr_gc_interface_72_72_04_04_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i@qk",

        u32_04: u32(o + 4),
        section_08: [],
    });

    switch (u32(o + 4)) {
    case 0:
        u32(o + 8) && im_pmwr_gc_interface_72_72_04_04_16_08t0(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 3:
        x[i].section_08 = in_ml(u32(o + 8), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
        break;
    }
}
function im_pmwr_gc_interface_72_72_04_04_16_08t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "IeC2",
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u16_06: u16(o + 6),
        u8_08: u8(o + 8),
    });
    // 16 bytes;

}
function im_pmwr_gc_interface_72_72_04_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CtGF",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_pmwr_gc_interface_72_72_04_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Nz]g",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_interface_72_72_04_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iY8;",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });
    // 48 bytes;

}

function im_pmwr_gc_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eRqr",

        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
        section_12: im_string(u32(o + 12), 0, false),
        u32_16: u32(o + 16),
        section_20: im_string(u32(o + 20), 0, false),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_36: im_string(u32(o + 36), 0, false),
        section_40: im_string(u32(o + 40), 0, false),
        pmwr_gc_texture_44: im_patch(g.pmwr_gc_texture_patch_ref, o + 44),
        section_48: [],
        pmwr_gc_texture_52: im_patch(g.pmwr_gc_texture_patch_ref, o + 52),
        pmwr_gc_texture_56: im_patch(g.pmwr_gc_texture_patch_ref, o + 56),
        unordered_pmwr_gc_frame_font_60: 0,
        u32_64: u32(o + 64),
        section_68: im_string(u32(o + 68), 0, false),
        section_72: im_string(u32(o + 72), 0, false),
    });

    u32(o + 0) && im_pmwr_gc_link_00(u32(o + 0) + g.m, x[i].section_00);

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_pmwr_gc_link_intro(u32(o + 8) + (ii * 16) + g.m, ii, x[i].section_08);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_link_32(u32(o + 32) + (ii * 8) + g.m, ii, x[i].section_32);
    }
    u32(o + 48) && im_pmwr_gc_link_demo(u32(o + 48) + g.m, x[i].section_48);
    x[i].unordered_pmwr_gc_frame_font_60 = in_ml(u32(o + 60), g.pmwr_gc_frame_font_array, im_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font);
    return x[i].id
}

function im_pmwr_gc_link_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":0CB",
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_link_00_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_link_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2x1F",
        section_00: [],
    });

    u32(o + 0) && im_pmwr_gc_link_00_04_00(u32(o + 0) + g.m, x[0].section_00);
    // 16 bytes;

}
function im_pmwr_gc_link_00_04_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CmW<",
        section_04: [],
        u8_08: u8(o + 8),
    });

    u32(o + 4) && im_pmwr_gc_link_00_04_00_04(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_link_00_04_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "O7u_",
        u32_20: u32(o + 20),
    });
    // 32 bytes;

}

function im_pmwr_gc_link_intro(o, i, x) {
    // let str = [""]
    // if (u8(o + 0) === 0) {
    //     str = im_string(u32(o + 4), 0, false)
    // }
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0ihg",

        u8_00: u8(o + 0),
        section_04: im_string(u32(o + 4), 0, false),
        section_08: [],
        section_12: [],
    });

    u32(o + 8) && im_pmwr_gc_link_intro_08(u32(o + 8) + g.m, x[i].section_08);
    u32(o + 12) && im_pmwr_gc_link_offset_index(u32(o + 12) + g.m, x[i].section_12);

}
function im_pmwr_gc_link_intro_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PZKL",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });
    // 16 bytes;

}
function im_pmwr_gc_link_offset_index(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]iPe",
        section_00: im_string(u32(o + 0), 0, false),
        u32_04: u32(o + 4),
    });
    // 16 bytes;

}

function im_pmwr_gc_link_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";qMw",

        section_00: [],
    });

    u32(o + 0) && im_pmwr_gc_link_32_00(u32(o + 0) + g.m, x[i].section_00);

}
function im_pmwr_gc_link_32_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9oPY",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_link_32_00_04(u32(o + 4) + (i * 32) + g.m, i, x[0].section_04);
    }
    // 16 bytes;

}
function im_pmwr_gc_link_32_00_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "S6c:",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        section_08: [],
        section_12: im_string(u32(o + 12), 0, false),
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    u32(o + 4) && im_pmwr_gc_link_32_00_04_04(u32(o + 4) + g.m, x[i].section_04);
    u32(o + 8) && im_pmwr_gc_link_offset_index(u32(o + 8) + g.m, x[i].section_08);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_pmwr_gc_link_32_00_04_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_pmwr_gc_link_32_00_04_20(u32(o + 28) + (ii * 12) + g.m, ii, x[i].section_28);
    }

}
function im_pmwr_gc_link_32_00_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "h2<4",
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_link_offset_index(u32(o + 4) + g.m, x[0].section_04);
    // 16 bytes;

}
function im_pmwr_gc_link_32_00_04_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "k1X3",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u16_08: u16(o + 8),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_link_32_00_04_20_04(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_04);
    }

}
function im_pmwr_gc_link_32_00_04_20_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Qws_",

        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_link_offset_index(u32(o + 4) + g.m, x[i].section_04);

}
function im_pmwr_gc_link_demo(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CUqO",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_link_32_00(u32(o + 8) + g.m, x[0].section_08);
    // 16 bytes;

}

function im_pmwr_gc_model_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KxuO",

        u32_00: u32(o + 0),
        section_04: im_string(u32(o + 4), 0, false),
        unordered_pmwr_gc_model_sub_link_08: 0,
        ordered_pmwr_gc_model_animation_1_12: 0,
        ordered_pmwr_gc_model_animation_2_16: 0,
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_50: u8(o + 50),
        section_52: [],
        section_56: [],
        section_64: [],
    });

    x[i].unordered_pmwr_gc_model_sub_link_08 = in_ml(u32(o + 8), g.pmwr_gc_model_sub_link_array, im_pmwr_gc_model_sub_link, g.unordered_ref.pmwr_gc_model_sub_link);
    x[i].ordered_pmwr_gc_model_animation_1_12 = in_ml(u32(o + 12), g.pmwr_gc_model_animation_1_array, im_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1);
    x[i].ordered_pmwr_gc_model_animation_2_16 = in_ml(u32(o + 16), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_pmwr_gc_model_link_24(u32(o + 24) + (ii * 4) + g.m, ii, x[i].section_24, u32(o + 24) + g.m);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_model_link_32(u32(o + 32) + (ii * 8) + g.m, ii, x[i].section_32, u32(o + 32) + g.m);
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_pmwr_gc_mysterious(u32(o + 44) + (ii * 64) + g.m, ii, x[i].section_44);
    }
    u32(o + 52) && im_pmwr_gc_model_link_52(u32(o + 52) + g.m, x[i].section_52);
    u32(o + 56) && im_pmwr_gc_model_link_56(u32(o + 56) + g.m, x[i].section_56);
    u32(o + 64) && im_pmwr_gc_model_link_64(u32(o + 64) + g.m, x[i].section_64);
    return x[i].id
    // 80 bytes;

}
function im_pmwr_gc_model_link_24(o, i, x, tempoffset) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tiD5",

        ordered_pmwr_gc_models_00: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
    });

}
function im_pmwr_gc_model_link_32(o, i, x, tempoffset) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kCx3",

        ordered_pmwr_gc_models_00: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
        u16_04: u16(o + 4),
    });

}
function im_pmwr_gc_model_link_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zdTo",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_model_link_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FZJ=",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_model_link_64(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DC4@",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}

function im_pmwr_gc_model_sub_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m6Wg",

        ordered_pmwr_gc_model_animation_2_00: 0,
        section_08: [],
        section_16: [],
    });

    x[i].ordered_pmwr_gc_model_animation_2_00 = in_ml(u32(o + 0), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);
    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_pmwr_gc_model_link_24(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_08, u32(o + 8) + g.m);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_pmwr_gc_model_link_32(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16, u32(o + 16) + g.m);
    }
    return x[i].id
    // 32 bytes;

}

function im_pmwr_gc_mysterious(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "6HXc",

        u8_00: u8(o + 0),
        //check this
        u16_02: u16(o + 2),
        section_04: [],
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
    });

    switch (u8(o + 0)) {
    case 1:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
        break;
    case 2:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_strange_array, im_pmwr_gc_strange, g.unordered_ref.pmwr_gc_strange);
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
        break;
    case 5:
    case 6:
        u32(o + 4) && im_pmwr_gc_mysterious_04t5(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 7:
        u32(o + 4) && im_pmwr_gc_mysterious_04t7(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 8:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_model_link_array, im_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link);
        break;
    case 9:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_mysterious_04t9_array, im_pmwr_gc_mysterious_04t9, g.unordered_ref.pmwr_gc_mysterious_04t9);
        break;
    case 10:
        u32(o + 4) && im_pmwr_gc_mysterious_04t10(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 11:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_activator_array, im_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator);
        break;
    case 13:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_object_array, im_pmwr_gc_object, g.unordered_ref.pmwr_gc_object);
        break;
    case 16:
        u32(o + 4) && im_pmwr_gc_mysterious_04t16(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
    switch (u8(o + 0)) {
    case 8:
        u32(o + 8) && im_pmwr_gc_mysterious_08t8(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 13:
        u32(o + 8) && im_pmwr_gc_mysterious_08t8t13(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
    return x[i].id
    // 64 bytes;

}
function im_pmwr_gc_mysterious_04t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9Ath",
        u8_00: u8(o + 0),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u32_04: u32(o + 4),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
    });

    let temp_function
    switch (u8(o + 3)) {
    case 0:
        temp_function = im_pmwr_gc_mysterious_04t5_16t0
        break;
    case 2:
        temp_function = im_pmwr_gc_mysterious_04t5_16t2
        break;
    case 3:
        temp_function = im_pmwr_gc_mysterious_04t5_16t3
        break;
    case 5:
        temp_function = im_pmwr_gc_mysterious_04t5_16t5
        break;
    }

    for (let i = 0; i < u32(o + 12); i++) {
        temp_function(u32(o + 16) + (i * 4) + g.m, i, x[0].section_16);
    }

    u32(o + 28) && im_pmwr_gc_mysterious_04t5_28(u32(o + 28) + g.m, x[0].section_28);

    for (let i = 0; i < u32(o + 32); i++) {
        im_pmwr_gc_mysterious_04t5_36(u32(o + 36) + (i * 32) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_pmwr_gc_mysterious_04t5_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }
    for (let i = 0; i < u32(o + 48); i++) {
        im_pmwr_gc_mysterious_04t5_52(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) && im_pmwr_gc_mysterious_04t5_56(u32(o + 56) + g.m, x[0].section_56);

    // 64 bytes;

}
function im_pmwr_gc_mysterious_04t5_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "A=jF",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_mysterious_04t5_16t0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "EKNY",

        ordered_pmwr_gc_models_00: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
    });

}
function im_pmwr_gc_mysterious_04t5_16t2(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3?>d",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_mysterious_04t5_16t3(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "v_QQ",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_mysterious_04t5_16t5(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m2pQ",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_mysterious_04t5_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HvTH",
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_pmwr_gc_mysterious_04t5_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ppEO",

        f32_00: f32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_pmwr_gc_mysterious_04t5_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "y8JQ",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_mysterious_04t5_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "I>8i",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

    // 12 bytes;

}
function im_pmwr_gc_mysterious_04t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LHk@",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
    });

    u32(o + 12) && im_pmwr_gc_mysterious_04t7_12(u32(o + 12) + g.m, x[0].section_12);

    for (let i = 0; i < u32(o + 32); i++) {
        im_pmwr_gc_mysterious_04t7_36(u32(o + 36) + (i * 12) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_pmwr_gc_mysterious_04t7_36(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    // 64 bytes;

}
function im_pmwr_gc_mysterious_04t7_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VsIs",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t7_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MkA:",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_08: f32(o + 8),
    });

}

function im_pmwr_gc_mysterious_04t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tcdy",
        u32_00: u32(o + 0),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t@mD",
        u32_00: u32(o + 0),
        section_08: [],
        section_12: [],
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        section_36: [],
    });

    u32(o + 8) && im_pmwr_gc_mysterious_04t16_08(u32(o + 8) + g.m, x[0].section_08);
    u32(o + 12) && im_pmwr_gc_mysterious_04t16_12(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 36) && im_pmwr_gc_mysterious_04t16_36(u32(o + 36) + g.m, x[0].section_36);

    // 48 bytes;

}
function im_pmwr_gc_mysterious_04t16_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ha1^",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dY3z",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "c7na",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_mysterious_04t16_36_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16_36_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">>D@",
        u32_00: u32(o + 0),
        section_04: [],
        f32_12: f32(o + 12),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
    });

    u32(o + 4) && im_pmwr_gc_mysterious_04t16_36_04_04(u32(o + 4) + g.m, x[0].section_04);

    // 48 bytes;

}
function im_pmwr_gc_mysterious_04t16_36_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t?fG",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_mysterious_04t16_36_04_04_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16_36_04_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "YpBH",
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_mysterious_04t16_36_04_04_04_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_mysterious_04t16_36_04_04_04_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16_36_04_04_04_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8JdH",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t16_36_04_04_04_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "XMTK",
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_08t8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ToIp",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_08t8t13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xp6s",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}

function im_pmwr_gc_mysterious_04t9(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4LSN",

        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_08: [],
        section_12: [],
    });

    u32(o + 8) && im_pmwr_gc_mysterious_04t9_08(u32(o + 8) + g.m, x[i].section_08);
    u32(o + 12) && im_pmwr_gc_mysterious_04t9_12(u32(o + 12) + g.m, x[i].section_12);
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t9_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VN@A",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
    });

    u32(o + 8) && im_pmwr_gc_mysterious_04t9_08_08(u32(o + 8) + g.m, x[0].section_08);

    // 32 bytes;

}
function im_pmwr_gc_mysterious_04t9_08_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i3=D",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t9_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]HMa",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_10: u8(o + 10),
        section_12: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_mysterious_04t9_12_04(u32(o + 4) + (i * 56) + g.m, i, x[0].section_04);
    }
    u32(o + 12) && im_pmwr_gc_mysterious_04t9_12_12(u32(o + 12) + g.m, x[0].section_12);

    // 32 bytes;

}
function im_pmwr_gc_mysterious_04t9_12_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VjOc",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        u8_07: u8(o + 7),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u8_36: u8(o + 36),
        u8_39: u8(o + 39),
        section_44: [],
    });

    u32(o + 8) && im_pmwr_gc_mysterious_04t9_12_04_08(u32(o + 8) + g.m, x[i].section_08);
    u32(o + 44) && im_pmwr_gc_mysterious_04t9_12_04_44(u32(o + 44) + g.m, x[i].section_44);

}
function im_pmwr_gc_mysterious_04t9_12_04_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VGSK",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t9_12_04_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kN8O",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    u32(o + 8) && im_pmwr_gc_mysterious_04t9_12_04_44_08(u32(o + 8) + g.m, x[0].section_08);
    u32(o + 12) && im_pmwr_gc_mysterious_04t9_12_04_44_12(u32(o + 12) + g.m, x[0].section_12);

    // 32 bytes;

}
function im_pmwr_gc_mysterious_04t9_12_04_44_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nnQh",
        u8_00: u8(o + 0),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t9_12_04_44_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=hI9",
        u8_01: u8(o + 1),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_mysterious_04t9_12_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yf_P",
        u32_00: u32(o + 0),
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_mysterious_04t9_12_04(u32(o + 4) + (i * 56) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}

function im_pmwr_gc_object(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5qX^",

        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_11: u8(o + 11),
        section_12: [],
        ordered_pmwr_gc_model_animation_2_16: 0,
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        section_32: [],
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        unordered_pmwr_gc_unknown_00_48: 0,
        f32_52: f32(o + 52),
        u8_56: u8(o + 56),
        u8_57: u8(o + 57),
        u8_58: u8(o + 58),
        unordered_pmwr_gc_frame_text_60: 0,
        unordered_pmwr_gc_unknown_00_68: 0,
        f32_76: f32(o + 76),
        u8_84: u8(o + 84),
        u8_85: u8(o + 85),
        unordered_pmwr_gc_wtf_88: 0,
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u8_108: u8(o + 108),
        u8_109: u8(o + 109),
        u8_110: u8(o + 110),
        u8_111: u8(o + 111),
    });

    u32(o + 12) && im_pmwr_gc_object_12(u32(o + 12) + g.m, x[i].section_12);
    x[i].ordered_pmwr_gc_model_animation_2_16 = in_ml(u32(o + 16), g.pmwr_gc_model_animation_2_array, im_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2);
    switch (u8(o + 11)) {
    case 15:
        x[i].section_32 = in_ml(u32(o + 32), g.pmwr_gc_object_32t15_array, im_pmwr_gc_object_32t15, g.unordered_ref.pmwr_gc_object_32t15);
        break;
    case 16:
        u32(o + 32) && im_pmwr_gc_object_32t16(u32(o + 32) + g.m, x[i].section_32);
        break;
    case 17:
        u32(o + 32) && im_pmwr_gc_object_32t17(u32(o + 32) + g.m, x[i].section_32);
        break;
    case 18:
        u32(o + 32) && im_pmwr_gc_object_32t18(u32(o + 32) + g.m, x[i].section_32);
        break;
    }
    x[i].unordered_pmwr_gc_unknown_00_48 = in_ml(u32(o + 48), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_frame_text_60 = in_ml(u32(o + 60), g.pmwr_gc_frame_text_array, im_pmwr_gc_frame_text, g.unordered_ref.pmwr_gc_frame_text);
    x[i].unordered_pmwr_gc_unknown_00_68 = in_ml(u32(o + 68), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_wtf_88 = in_ml(u32(o + 88), g.pmwr_gc_wtf_array, im_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf);

    for (let ii = 0; ii < u32(o + 96); ii++) {
        im_pmwr_gc_mysterious(u32(o + 100) + (ii * 64) + g.m, ii, x[i].section_100);
    }
    return x[i].id
    // 112 bytes;

}
function im_pmwr_gc_object_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "GT<B",
        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
        section_16: [],
    });

    u32(o + 16) && im_pmwr_gc_object_12_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_pmwr_gc_object_12_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9=vr",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_object_32t15(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UB;s",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        unordered_pmwr_gc_unknown_00_08: 0,
        unordered_pmwr_gc_unknown_00_12: 0,
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_object_32t15_04(u32(o + 4) + (ii * 28) + g.m, ii, x[i].section_04);
    }
    x[i].unordered_pmwr_gc_unknown_00_08 = in_ml(u32(o + 8), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_unknown_00_12 = in_ml(u32(o + 12), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_object_32t15_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@CqO",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        f32_24: f32(o + 24),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_object_32t15_04_04(u32(o + 4) + (ii * 12) + g.m, ii, x[i].section_04);
    }

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_pmwr_gc_object_32t15_04_04(u32(o + 12) + (ii * 12) + g.m, ii, x[i].section_12);
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_pmwr_gc_object_32t15_04_04(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }

}
function im_pmwr_gc_object_32t15_04_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MiLs",

        unordered_pmwr_gc_um_00: 0,
        unordered_pmwr_gc_um_04: 0,
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
    });

    x[i].unordered_pmwr_gc_um_00 = in_ml(u32(o + 0), g.pmwr_gc_um_array, im_pmwr_gc_um, g.unordered_ref.pmwr_gc_um);
    x[i].unordered_pmwr_gc_um_04 = in_ml(u32(o + 4), g.pmwr_gc_um_array, im_pmwr_gc_um, g.unordered_ref.pmwr_gc_um);

}
function im_pmwr_gc_object_32t16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "QIEy",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_object_32t17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0Bai",
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_object_32t18(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zm@Z",
        section_00: [],
    });

    u32(o + 0) && im_pmwr_gc_object_32t18_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_object_32t18_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "z0[4",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}

function im_pmwr_gc_sound_controls(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rGfM",

        u32_00: u32(o + 0),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_pmwr_gc_sound_controls_16(u32(o + 16) + (ii * 16) + g.m, ii, x[i].section_16);
    }

    return x[i].id
    // 32 bytes;

}
function im_pmwr_gc_sound_controls_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wiT0",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_sound_controls_16_04(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_sound_controls_16_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "v;rj",

        unordered_pmwr_gc_sound_section_00: 0,
    });

    x[i].unordered_pmwr_gc_sound_section_00 = in_ml(u32(o + 0), g.pmwr_gc_sound_section_array, im_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section);

}

function im_pmwr_gc_sound_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zQp=",

        sound_00: im_patch(g.sound_patch_ref, o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
        section_08: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        //check this
    });

    u32(o + 8) && im_pmwr_gc_sound_section_08(u32(o + 8) + g.m, x[i].section_08);
    return x[i].id
    // 32 bytes;

}
function im_pmwr_gc_sound_section_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SaUz",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}

function im_pmwr_gc_strange(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lA@o",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        unordered_pmwr_gc_sound_controls_28: 0,
        f32_32: f32(o + 32),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_unknown(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_04);
    }

    x[i].unordered_pmwr_gc_sound_controls_28 = in_ml(u32(o + 28), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
    // 48 bytes;

    return x[i].id
}

function im_pmwr_gc_um(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">_aO",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        u32_20: u32(o + 20),
        u8_24: u8(o + 24),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 32 bytes;

}

function im_pmwr_gc_unknown(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ca0n",

        unordered_pmwr_gc_unknown_00_00: 0,
    });

    x[i].unordered_pmwr_gc_unknown_00_00 = in_ml(u32(o + 0), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    return x[i].id
}

function im_pmwr_gc_unknown_00(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "G0]Y",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_unknown_00_04(u32(o + 4) + (ii * 16) + g.m, ii, x[i].section_04);
    }
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bE?F",

        u32_00: u32(o + 0),
        //check this
        section_04: [],
        section_08: [],
        u32_12: u32(o + 12),
        //check this
    });

    switch (u32(o + 0)) {
    case 1:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_unknown_00_04_04t1_array, im_pmwr_gc_unknown_00_04_04t1, g.unordered_ref.pmwr_gc_unknown_00_04_04t1);
        break;
    case 2:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_unknown_00_04_04t2_array, im_pmwr_gc_unknown_00_04_04t2, g.unordered_ref.pmwr_gc_unknown_00_04_04t2);
        break;
    case 3:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
        break;
    case 4:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_strange_array, im_pmwr_gc_strange, g.unordered_ref.pmwr_gc_strange);
        break;
    case 5:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_unknown_00_04_04t5_array, im_pmwr_gc_unknown_00_04_04t5, g.unordered_ref.pmwr_gc_unknown_00_04_04t5);
        break;
    case 6:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_idk_array, im_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk);
        break;
    case 26:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_sound_controls_array, im_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls);
        break;
    case 29:
        u32(o + 4) && im_pmwr_gc_unknown_00_04_04t29(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 31:
        x[i].section_04 = in_ml(u32(o + 4), g.pmwr_gc_activator_array, im_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator);
        break;
    }
    switch (u32(o + 0)) {
    case 1:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t1(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 2:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t2(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 3:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t3(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 4:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t4(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 5:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t5(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 6:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t6(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 26:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t26(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 29:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t29(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 31:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t31(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 32:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t32(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 34:
        u32(o + 8) && im_pmwr_gc_unknown_00_04_08t34(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}

function im_pmwr_gc_unknown_00_04_04t2(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "T9qE",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        unordered_pmwr_gc_unknown_00_32: 0,
        f32_40: f32(o + 40),
        unordered_pmwr_gc_wtf_48: 0,
        f32_52: f32(o + 52),
        unordered_pmwr_gc_unknown_00_56: 0,
        unordered_pmwr_gc_unknown_00_68: 0,
        u8_72: u8(o + 72),
        unordered_pmwr_gc_unknown_00_76: 0,
        section_80: [],
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u32_108: u32(o + 108),
    });

    x[i].unordered_pmwr_gc_unknown_00_32 = in_ml(u32(o + 32), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_wtf_48 = in_ml(u32(o + 48), g.pmwr_gc_wtf_array, im_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf);
    x[i].unordered_pmwr_gc_unknown_00_56 = in_ml(u32(o + 56), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_unknown_00_68 = in_ml(u32(o + 68), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    x[i].unordered_pmwr_gc_unknown_00_76 = in_ml(u32(o + 76), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    u32(o + 80) && im_pmwr_gc_unknown_00_04_04t2_80(u32(o + 80) + g.m, x[i].section_80);

    for (let ii = 0; ii < u32(o + 96); ii++) {
        im_pmwr_gc_mysterious(u32(o + 100) + (ii * 64) + g.m, ii, x[i].section_100);
    }
    return x[i].id
    // 112 bytes;

}
function im_pmwr_gc_unknown_00_04_04t2_80(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "n7V5",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t29(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8FSQ",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_unknown_00_04_04t29_04(u32(o + 4) + (i * 48) + g.m, i, x[0].section_04);
    }

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_04t29_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8D5x",

        ordered_pmwr_gc_models_00: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_pmwr_gc_unknown_00_04_08t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0UVP",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) && im_pmwr_gc_unknown_00_04_08t1_48(u32(o + 48) + g.m, x[0].section_48);
    // offset? 
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) && im_pmwr_gc_unknown_00_04_08t1_52t1(u32(o + 52) + g.m, x[0].section_52);
        break;
    case 2:
        u32(o + 52) && im_pmwr_gc_unknown_00_04_08t1_52t2(u32(o + 52) + g.m, x[0].section_52);
        break;
    }
    // 64 bytes;

}
function im_pmwr_gc_unknown_00_04_08t1_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "L;>l",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t1_52t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FeqH",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t1_52t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SIPI",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        section_12: [],
    });

    switch (u8(o + 8)) {
    case 0:
        u32(o + 12) && im_pmwr_gc_unknown_00_04_08t1_52t2_12t0(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1:
        u32(o + 12) && im_pmwr_gc_unknown_00_04_08t1_52t2_12t1(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 2:
        u32(o + 12) && im_pmwr_gc_unknown_00_04_08t1_52t2_12t2(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t1_52t2_12t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_h_0",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t1_52t2_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "g3ss",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t1_52t2_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8o2h",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "aeXG",
        u32_00: u32(o + 0),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        //check this
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) && im_pmwr_gc_unknown_00_04_08t2_48(u32(o + 48) + g.m, x[0].section_48);
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) && im_pmwr_gc_unknown_00_04_08t2_52t1(u32(o + 52) + g.m, x[0].section_52);
        break;
    case 2:
        u32(o + 52) && im_pmwr_gc_unknown_00_04_08t2_52t2(u32(o + 52) + g.m, x[0].section_52);
        break;
    }
    // 64 bytes;

}
function im_pmwr_gc_unknown_00_04_08t2_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HNBG",
        f32_00: f32(o + 0),
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t2_52t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xOsA",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t2_52t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ot?B",
        f32_00: f32(o + 0),
        u8_08: u8(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_pmwr_gc_unknown_00_04_08t2_52t2_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t2_52t2_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "mK]d",
        f32_00: f32(o + 0),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[@Qe",
        u32_00: u32(o + 0),
        u8_40: u8(o + 40),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    switch (u8(o + 40)) {
    case 2:
        u32(o + 48) && im_pmwr_gc_unknown_00_04_08t3_48(u32(o + 48) + g.m, x[0].section_48);
        break;
    }
    u32(o + 52) && im_pmwr_gc_unknown_00_04_08t3_52(u32(o + 52) + g.m, x[0].section_52);

    // 64 bytes;

}
function im_pmwr_gc_unknown_00_04_08t3_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HNsk",
        f32_00: f32(o + 0),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t3_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[nPw",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?edl",
        u32_00: u32(o + 0),
    });

    // 64 bytes;

}
function im_pmwr_gc_unknown_00_04_08t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":jnI",
        u8_01: u8(o + 1),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_unknown_00_04_08t5_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t5_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "boTV",
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xjr9",
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t26(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bS<J",
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_08t29(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^<K0",
        u32_00: u32(o + 0),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_42: u8(o + 42),
        section_52: [],
    });

    u32(o + 52) && im_pmwr_gc_unknown_00_04_08t29_52(u32(o + 52) + g.m, x[0].section_52);

    // 64 bytes;

}
function im_pmwr_gc_unknown_00_04_08t29_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "STBQ",
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t31(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9NDF",
        u32_00: u32(o + 0),
        u32_08: u32(o + 8),
        f32_24: f32(o + 24),
        u8_42: u8(o + 42),
        section_52: [],
    });

    u32(o + 52) && im_pmwr_gc_unknown_00_04_08t31_52(u32(o + 52) + g.m, x[0].section_52);

    // 64 bytes;

}
function im_pmwr_gc_unknown_00_04_08t31_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bYj6",
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MG??",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        f32_04: f32(o + 4),
        section_08: im_string(u32(o + 8), 0, false),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t34(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bOav",
        u8_00: u8(o + 0),
        unordered_pmwr_gc_interface_04: 0,
        unordered_pmwr_gc_interface_08: 0,
        unordered_pmwr_gc_interface_12: 0,
        section_16: [],
    });

    x[0].unordered_pmwr_gc_interface_04 = in_ml(u32(o + 4), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_08 = in_ml(u32(o + 8), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_12 = in_ml(u32(o + 12), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    u32(o + 16) && im_pmwr_gc_unknown_00_04_08t34_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_08t34_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eQkl",
    });

    // 16 bytes;

}

function im_pmwr_gc_unknown_00_04_04t1(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8LcL",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        section_04: [],
        u32_08: u32(o + 8),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    switch (u8(o + 0)) {
    case 0:
        u32(o + 4) && im_pmwr_gc_unknown_00_04_04t1_04t0(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 1:
        u32(o + 4) && im_pmwr_gc_unknown_00_04_04t1_04t1(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 2:
        u32(o + 4) && im_pmwr_gc_unknown_00_04_04t1_04t2(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_pmwr_gc_unknown_00_04_04t1_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_pmwr_gc_unknown(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 48 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "P9tx",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
        u32_44: u32(o + 44),
        section_48: [],
        u8_52: u8(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t0_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04, u32(o + 4) + g.m);
    }

    for (let i = 0; i < u32(o + 36); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t0_40(u32(o + 40) + (i * 32) + g.m, i, x[0].section_40);
    }

    for (let i = 0; i < u32(o + 44); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t0_48(u32(o + 48) + (i * 16) + g.m, i, x[0].section_48);
    }

    u32(o + 56) && im_pmwr_gc_unknown_00_04_04t1_04t0_56(u32(o + 56) + g.m, x[0].section_56);

    for (let i = 0; i < u32(o + 60); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t0_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
    }

    // 80 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t0_04(o, i, x, tempoffset) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3C4>",

        ordered_pmwr_gc_models_00: in_models(o + 0, g.pmwr_gc_models_array, im_pmwr_gc_models, g.ordered_ref.pmwr_gc_models),
    });

}
function im_pmwr_gc_unknown_00_04_04t1_04t0_40(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jtv[",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_pmwr_gc_unknown_00_04_04t1_04t0_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4M_t",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t0_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@B[a",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t0_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]49q",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_unknown_00_04_04t1_04t0_64_04(u32(o + 4) + (ii * 20) + g.m, ii, x[i].section_04);
    }

}
function im_pmwr_gc_unknown_00_04_04t1_04t0_64_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":oQ<",

    });

}
function im_pmwr_gc_unknown_00_04_04t1_04t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "d:QD",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t1_04(u32(o + 4) + (i * 4) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t1_44(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t1_44(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) && im_pmwr_gc_unknown_00_04_04t1_04t1_56(u32(o + 56) + g.m, x[0].section_56);

    for (let i = 0; i < u32(o + 60); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t1_64(u32(o + 64) + (i * 8) + g.m, i, x[0].section_64);
    }

    // 80 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t1_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5K;B",

        pmwr_gc_texture_00: im_patch(g.pmwr_gc_texture_patch_ref, o + 0),
    });

}
function im_pmwr_gc_unknown_00_04_04t1_04t1_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pt1V",

        f32_00: f32(o + 0),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_unknown_00_04_04t1_04t1_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DBM]",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t1_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "GPE3",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_unknown_00_04_04t1_04t1_64_04(u32(o + 4) + (ii * 20) + g.m, ii, x[i].section_04);
    }

}
function im_pmwr_gc_unknown_00_04_04t1_04t1_64_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5mr_",

        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

}
function im_pmwr_gc_unknown_00_04_04t1_04t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wX4A",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u8_24: u8(o + 24),
        u8_26: u8(o + 26),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t2_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_unknown_00_04_04t1_04t2_20(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t2_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "V]Ki",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        f32_08: f32(o + 8),
    });

    // 12 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_04t2_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "z91l",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

}
function im_pmwr_gc_unknown_00_04_04t1_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bA]>",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        f32_08: f32(o + 8),
    });

    // 12 bytes;

}
function im_pmwr_gc_unknown_00_04_04t1_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iL8Y",
    });

    // 16 bytes;

}

function im_pmwr_gc_unknown_00_04_04t5(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fptO",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        section_36: [],
        u8_40: u8(o + 40),
    });

    u32(o + 4) && im_pmwr_gc_unknown_00_04_04t5_04(u32(o + 4) + g.m, x[i].section_04);
    u32(o + 12) && im_pmwr_gc_unknown_00_04_04t5_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 20) && im_pmwr_gc_unknown_00_04_04t5_20(u32(o + 20) + g.m, x[i].section_20);
    u32(o + 28) && im_pmwr_gc_unknown_00_04_04t5_28(u32(o + 28) + g.m, x[i].section_28);
    u32(o + 36) && im_pmwr_gc_unknown_00_04_04t5_36(u32(o + 36) + g.m, x[i].section_36);
    return x[i].id
    // 48 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7d4l",
        u32_00: u32(o + 0),
        f32_04: f32(o + 4),
        u8_08: u8(o + 8),
        //check this
        u8_09: u8(o + 9),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    switch (u8(o + 8)) {
    case 103:
        u32(o + 12) && im_pmwr_gc_unknown_00_04_04t5_04_12t103(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 105:
        u32(o + 12) && im_pmwr_gc_unknown_00_04_04t5_04_12t105(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_unknown_00_04_04t5_04_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_pmwr_gc_mysterious(u32(o + 32) + (i * 64) + g.m, i, x[0].section_32);
    }

    // 48 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_04_12t103(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "H>2U",
        u32_04: u32(o + 4),
        u32_12: u32(o + 12),
        u32_28: u32(o + 28),
    });

    // 48 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_04_12t105(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Yz^8",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_04_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kluT",

        u32_00: u32(o + 0),
    });

}
function im_pmwr_gc_unknown_00_04_04t5_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VkuS",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u8_08: u8(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_unknown_00_04_04t5_12_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_12_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "g=BX",

        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
        u8_04: u8(o + 4),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_unknown_00_04_04t5_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";pec",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_unknown_00_04_04t5_20_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_20_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TuTs",

        f32_00: f32(o + 0),
        f32_08: f32(o + 8),
    });

}
function im_pmwr_gc_unknown_00_04_04t5_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "db:b",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_unknown_00_04_04t5_28_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_28_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "h8pJ",
        unordered_pmwr_gc_unknown_00_04_04t5_28_04_00_00: 0,
    });

    x[0].unordered_pmwr_gc_unknown_00_04_04t5_28_04_00_00 = in_ml(u32(o + 0), g.pmwr_gc_unknown_00_04_04t5_28_04_00_array, im_pmwr_gc_unknown_00_04_04t5_28_04_00, g.unordered_ref.pmwr_gc_unknown_00_04_04t5_28_04_00);

    // 16 bytes;

}

// function im_pmwr_gc_unknown_00_04_04t5_28_04_00(o, x) {
//     id_offset.push(o);x.push({id: gen_id(),sec_id: "?SSF",
//         u8_00: u8(o + 0),
//         section_04: [],
//         u32_08: u32(o + 8),
//     });

//     switch (u8(o + 0)) {
//     case 1:
//         u32(o + 4) && im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t1(u32(o + 4) + g.m, x[0].section_04);
//         break;
//     case 2:
//         u32(o + 4) && im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t2(u32(o + 4) + g.m, x[0].section_04);
//         break;
//     }
//     // 16 bytes;

// }
// function im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t1(o, x) {
//     id_offset.push(o);x.push({id: gen_id(),sec_id: "^[HJ",
//         u8_00: u8(o + 0),
//         u32_04: u32(o + 4),
//         u32_08: u32(o + 8),
//     });

//     // 16 bytes;

// }
// function im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t2(o, x) {
//     id_offset.push(o);x.push({id: gen_id(),sec_id: "NOjR",
//         u32_00: u32(o + 0),
//         u8_04: u8(o + 4),
//     });

//     // 16 bytes;

// }
function im_pmwr_gc_unknown_00_04_04t5_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WosI",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
    });

    // 16 bytes;

}

function im_pmwr_gc_unknown_00_04_04t5_28_04_00(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?SSF",

        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) && im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t1(u32(o + 4) + g.m, x[i].section_04);
        break;
    case 2:
        u32(o + 4) && im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t2(u32(o + 4) + g.m, x[i].section_04);
        break;
    }
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^[HJ",
        u8_00: u8(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_unknown_00_04_04t5_28_04_00_04t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "NOjR",
        u32_00: u32(o + 0),
        u8_04: u8(o + 4),
    });

    // 16 bytes;

}

function im_pmwr_gc_var(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "x?E:",

        u8_11: u8(o + 11),
        section_140: im_string(u32(o + 140), 0, false),
        u32_144: u32(o + 144),
        section_148: [],
        section_152: im_string(u32(o + 152), 0, false),
        //check this
        section_164: [],
        section_168: [],
    });

    u32(o + 148) && im_pmwr_gc_var_148(u32(o + 148) + g.m, x[i].section_148);
    u32(o + 164) && im_pmwr_gc_var_164(u32(o + 164) + g.m, x[i].section_164);
    u32(o + 168) && im_pmwr_gc_var_168(u32(o + 168) + g.m, x[i].section_168);
    return x[i].id
    // 176 bytes;

}
function im_pmwr_gc_var_148(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MsNU",
        unordered_pmwr_gc_var_00: 0,
    });

    x[0].unordered_pmwr_gc_var_00 = in_ml(u32(o + 0), g.pmwr_gc_var_array, im_pmwr_gc_var, g.unordered_ref.pmwr_gc_var);

    // 16 bytes;

}
function im_pmwr_gc_var_164(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ntGe",
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_var_164_12(u32(o + 12) + (i * 24) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_var_164_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_pmwr_gc_var_164_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0I;q",

        section_00: im_string(u32(o + 0), 0, false),
        u32_04: u32(o + 4),
        section_08: im_string(u32(o + 8), 0, false),
        //check this
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    switch (u32(o + 4)) {
    case 1:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 2:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t2(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 5:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t5(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 6:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t6(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 7:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t7(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 8:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t8(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 14:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t14(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 15:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t15(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 16:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t16(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 24:
        u32(o + 12) && im_pmwr_gc_var_164_12_12t24(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
}
function im_pmwr_gc_var_164_12_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3vQU",
        section_00: [],
        u8_04: u8(o + 4),
    });

    u32(o + 0) && im_pmwr_gc_var_164_12_12t1_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t1_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "vrd]",
        section_00: [],
        u8_04: u8(o + 4),
        u8_06: u8(o + 6),
    });

    u32(o + 0) && im_pmwr_gc_var_164_12_12t1_00_00(u32(o + 0) + g.m, x[0].section_00);

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t1_00_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "UmFo",
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0G7L",
        u32_00: u32(o + 0),
        section_04: [],
    });

    switch (u32(o + 0)) {
    case 1:
        u32(o + 4) && im_pmwr_gc_var_164_12_12t2_04t1(u32(o + 4) + g.m, x[0].section_04);
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        u32(o + 4) && im_pmwr_gc_var_164_12_12t2_04t4(u32(o + 4) + g.m, x[0].section_04);
        break;
    case 7:
        u32(o + 4) && im_pmwr_gc_var_164_12_12t2_04t7(u32(o + 4) + g.m, x[0].section_04);
        break;
    case 8:
        u32(o + 4) && im_pmwr_gc_var_164_12_12t2_04t8(u32(o + 4) + g.m, x[0].section_04);
        break;
    case 16:
        u32(o + 4) && im_pmwr_gc_var_164_12_12t2_04t16(u32(o + 4) + g.m, x[0].section_04);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";w[y",
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        f32_08: f32(o + 8),
        section_12: [],
        section_16: [],
        section_20: [],
        u32_24: u32(o + 24),
        f32_28: f32(o + 28),
    });

    u32(o + 12) && im_pmwr_gc_var_164_12_12t2_04t1_12(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 16) && im_pmwr_gc_var_164_12_12t2_04t1_16(u32(o + 16) + g.m, x[0].section_16);
    u32(o + 20) && im_pmwr_gc_var_164_12_12t2_04t1_16(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t1_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i7Ed",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t1_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "hY6P",
        section_00: [],
        u8_04: u8(o + 4),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    switch (u8(o + 4)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t1_array, im_pmwr_gc_world_20_12t1, g.unordered_ref.pmwr_gc_world_20_12t1);
        break;
    case 10:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t10_array, im_pmwr_gc_world_20_12t10, g.unordered_ref.pmwr_gc_world_20_12t10);
        break;
    case 11:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t11_array, im_pmwr_gc_world_20_12t11, g.unordered_ref.pmwr_gc_world_20_12t11);
        break;
    }
    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FLXC",
        u8_01: u8(o + 1),
        u8_03: u8(o + 3),
        f32_04: f32(o + 4),
        u32_08: u32(o + 8),
        section_16: [],
    });

    u32(o + 16) && im_pmwr_gc_var_164_12_12t2_04t4_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t4_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[J^i",
        section_00: [],
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 1:
            x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t1_array, im_pmwr_gc_world_20_12t1, g.unordered_ref.pmwr_gc_world_20_12t1);
            break;
        case 8:
            x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t8_array, im_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8);
            break;
        case 10:
            x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t10_array, im_pmwr_gc_world_20_12t10, g.unordered_ref.pmwr_gc_world_20_12t10);
            break;
        case 13:
            x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t13_array, im_pmwr_gc_world_20_12t13, g.unordered_ref.pmwr_gc_world_20_12t13);
            break;
        case 14:
            x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t14_array, im_pmwr_gc_world_20_12t14, g.unordered_ref.pmwr_gc_world_20_12t14);
            break;
        case 15:
            x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t15_array, im_pmwr_gc_world_20_12t15, g.unordered_ref.pmwr_gc_world_20_12t15);
            break;
        }
        break
    case 2:
        x[0].section_00 = u32(o + 0)
        break
    }
    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_Wx1",
        u8_03: u8(o + 3),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Mb29",
        u8_03: u8(o + 3),
        section_16: [],
    });

    u32(o + 16) && im_pmwr_gc_var_164_12_12t2_04t8_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t8_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xSo?",
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t2_04t16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pWAh",
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        unordered_pmwr_gc_flag_24: 0,
    });

    x[0].unordered_pmwr_gc_flag_24 = in_ml(u32(o + 24), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CfjJ",
        u8_00: u8(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_var_164_12_12t5_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t5_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WOhQ",
        u8_00: u8(o + 0),
        section_08: [],
    });

    u32(o + 8) && im_pmwr_gc_var_164_12_12t5_04_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t5_04_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gfcx",
        u8_00: u8(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MtmS",
        section_00: [],
        u8_04: u8(o + 4),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 0) && im_pmwr_gc_var_164_12_12t6_00t1(u32(o + 0) + g.m, x[0].section_00);
        break;
    case 2:
        u32(o + 0) && im_pmwr_gc_var_164_12_12t6_00t2(u32(o + 0) + g.m, x[0].section_00);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t6_00t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rG4V",
        unordered_pmwr_gc_interface_00: 0,
        u8_05: u8(o + 5),
        section_08: [],
    });

    x[0].unordered_pmwr_gc_interface_00 = in_ml(u32(o + 0), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    u32(o + 8) && im_pmwr_gc_var_164_12_12t6_00t1_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t6_00t1_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yEjl",
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t6_00t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0FaK",
        u8_00: u8(o + 0),
        unordered_pmwr_gc_interface_04: 0,
    });

    x[0].unordered_pmwr_gc_interface_04 = in_ml(u32(o + 4), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "CjLK",
        section_00: [],
        unordered_pmwr_gc_object_04: 0,
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    u32(o + 0) && im_pmwr_gc_var_164_12_12t7_00(u32(o + 0) + g.m, x[0].section_00);
    x[0].unordered_pmwr_gc_object_04 = in_ml(u32(o + 4), g.pmwr_gc_object_array, im_pmwr_gc_object, g.unordered_ref.pmwr_gc_object);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t7_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "N@a:",
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "g7MX",
        section_00: [],
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 8)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);
        break;
    case 2:
        u32(o + 0) && im_pmwr_gc_var_164_12_12t8_00t2(u32(o + 0) + g.m, x[0].section_00);
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 2:
        x[0].section_04 = in_ml(u32(o + 4), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);
        break;
    case 3:
        u32(o + 4) && im_pmwr_gc_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04);
        break;
    }

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t8_00t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "<A3S",
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_var_164_12_12t8_00t2_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_var_164_12_12t8_00t2_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t8_00t2_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t2xr",
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t8_00t2_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^GKV",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t8_04t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "];<:",
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_pmwr_gc_var_164_12_12t8_04t3_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t8_04t3_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9>rf",
    });

    // 32 bytes;

}
function im_pmwr_gc_var_164_12_12t14(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7P4K",
        section_00: [],
        u8_04: u8(o + 4),
        unordered_pmwr_gc_world_20_12t4_08: 0,
    });

    u32(o + 0) && im_pmwr_gc_var_164_12_12t14_00(u32(o + 0) + g.m, x[0].section_00);
    x[0].unordered_pmwr_gc_world_20_12t4_08 = in_ml(u32(o + 8), g.pmwr_gc_world_20_12t4_array, im_pmwr_gc_world_20_12t4, g.unordered_ref.pmwr_gc_world_20_12t4);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t14_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kfsV",
        section_00: [],
        u8_08: u8(o + 8),
    });

    switch (u8(o + 8)) {
    case 1:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_world_20_12t0_array, im_pmwr_gc_world_20_12t0, g.unordered_ref.pmwr_gc_world_20_12t0);
        break;
    case 5:
        x[0].section_00 = u32(o + 0)
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "C]5S",
        u32_00: u32(o + 0),
        //check this
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MQ=j",
        unordered_pmwr_gc_var_00: 0,
        u32_04: u32(o + 4),
    });

    x[0].unordered_pmwr_gc_var_00 = in_ml(u32(o + 0), g.pmwr_gc_var_array, im_pmwr_gc_var, g.unordered_ref.pmwr_gc_var);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "z>10",
        unordered_pmwr_gc_unknown_00_00: 0,
        section_04: [],
    });

    x[0].unordered_pmwr_gc_unknown_00_00 = in_ml(u32(o + 0), g.pmwr_gc_unknown_00_array, im_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00);
    u32(o + 4) && im_pmwr_gc_var_164_12_12t24_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_var_164_12_12t24_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DDNr",
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Ez35",

        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_var_164_20_04(u32(o + 4) + g.m, x[i].section_04, u32(o + 0));

}
function im_pmwr_gc_var_164_20_04(o, x, t) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5Rfm",
        section_08: im_string(u32(o + 8), 0, false),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    switch (t) {
    case 1604:
        u32(o + 12) && im_pmwr_gc_var_164_20_04_12t1604(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1608:
        u32(o + 12) && im_pmwr_gc_var_164_20_04_12t1608(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1618:
        u32(o + 12) && im_pmwr_gc_var_164_20_04_12t1618(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1620:
        u32(o + 12) && im_pmwr_gc_var_164_20_04_12t1620(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1636:
        u32(o + 12) && im_pmwr_gc_var_164_20_04_12t1636(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        im_pmwr_gc_var_164_20_04_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_pmwr_gc_var_164_12(u32(o + 28) + (i * 24) + g.m, i, x[0].section_28);
    }

    // 32 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1604(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "sWpE",
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1608(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "e:KD",
        u8_00: u8(o + 0),
        unordered_pmwr_gc_interface_04: 0,
        unordered_pmwr_gc_world_20_12t1_08: 0,
    });

    x[0].unordered_pmwr_gc_interface_04 = in_ml(u32(o + 4), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_world_20_12t1_08 = in_ml(u32(o + 8), g.pmwr_gc_world_20_12t1_array, im_pmwr_gc_world_20_12t1, g.unordered_ref.pmwr_gc_world_20_12t1);

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1618(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "aFXA",
        section_00: [],
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 8)) {
    case 0:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);
        break;
    case 1:
        u32(o + 0) && im_pmwr_gc_var_164_20_04_12t1618_00t1(u32(o + 0) + g.m, x[0].section_00);
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 1:
        x[0].section_04 = in_ml(u32(o + 4), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);
        break;
    case 3:
        // u32(o + 4) && im_pmwr_gc_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04);
        break;
    }

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1618_00t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VGa8",
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_pmwr_gc_var_164_20_04_12t1618_00t1_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1618_00t1_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9]Mz",
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1620(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]C5i",
        section_00: [],
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        unordered_pmwr_gc_world_20_12t8_08: 0,
    });

    u32(o + 0) && im_pmwr_gc_var_164_20_04_12t1620_00(u32(o + 0) + g.m, x[0].section_00);
    x[0].unordered_pmwr_gc_world_20_12t8_08 = in_ml(u32(o + 8), g.pmwr_gc_world_20_12t8_array, im_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8);

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1620_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KNRF",
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1636(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TWdw",
        section_00: [],
        u8_04: u8(o + 4),
        u8_05: u8(o + 5),
        u8_06: u8(o + 6),
    });

    u32(o + 0) && im_pmwr_gc_var_164_20_04_12t1636_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_12t1636_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3bc6",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "M^bs",

        u32_00: u32(o + 0),
        section_04: im_string(u32(o + 4), 0, false),
        section_08: [],
    });

    switch (u32(o + 0)) {
    case 5:
        u32(o + 8) && im_pmwr_gc_var_164_20_04_20_08t5(u32(o + 8) + g.m, x[i].section_08);
        break;
    case 6:
        u32(o + 8) && im_pmwr_gc_var_164_20_04_20_08t6(u32(o + 8) + g.m, x[i].section_08);
        break;
    }
}
function im_pmwr_gc_var_164_20_04_20_08t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2yh2",
        section_00: [],
        section_04: [],
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
    });

    switch (u8(o + 8)) {
    case 0:
        x[0].section_00 = in_ml(u32(o + 0), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);
        break;
    case 1:
        u32(o + 0) && im_pmwr_gc_var_164_20_04_20_08t5_00t1(u32(o + 0) + g.m, x[0].section_00);
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        x[0].section_04 = f32(o + 4)
        break;
    case 1:
        x[0].section_04 = in_ml(u32(o + 4), g.pmwr_gc_flag_array, im_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag);
        break;
    case 3:
        // u32(o + 4) && im_pmwr_gc_var_164_12_12t8_04t3(u32(o + 4) + g.m, x[0].section_04);
        break;
    }

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_20_08t5_00t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "t_Kv",
        u8_00: u8(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_var_164_20_04_20_08t5_00t1_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_var_164_20_04_20_08t5_00t1_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_20_08t5_00t1_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "yef>",
        u32_04: u32(o + 4),
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_20_08t5_00t1_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "T3WN",
        u8_00: u8(o + 0),
        f32_04: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_var_164_20_04_20_08t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nWhu",
        section_00: [],
        u8_05: u8(o + 5),
        unordered_pmwr_gc_world_20_12t8_08: 0,
    });

    u32(o + 0) && im_pmwr_gc_var_164_20_04_20_08t6_00(u32(o + 0) + g.m, x[0].section_00);
    x[0].unordered_pmwr_gc_world_20_12t8_08 = in_ml(u32(o + 8), g.pmwr_gc_world_20_12t8_array, im_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8);

    // 16 bytes;

}
function im_pmwr_gc_var_164_20_04_20_08t6_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tnxV",
        u8_08: u8(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_var_168(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rqP<",
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_pmwr_gc_var_164_12(u32(o + 8) + (i * 24) + g.m, i, x[0].section_08);
    }

    // 16 bytes;

}

function im_pmwr_gc_world_settings(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "w4lc",

        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        f32_08: f32(o + 8),
        section_12: [],
        pmwr_gc_texture_16: im_patch(g.pmwr_gc_texture_patch_ref, o + 16),
        pmwr_gc_texture_20: im_patch(g.pmwr_gc_texture_patch_ref, o + 20),
        pmwr_gc_texture_24: im_patch(g.pmwr_gc_texture_patch_ref, o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        section_36: [],
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        section_48: [],
        section_52: [],
        section_56: [],
        section_60: [],
        section_64: [],
        section_68: [],
        section_72: [],
        section_76: im_string(u32(o + 76), 0, false),
        u16_82: u16(o + 82),
        unordered_pmwr_gc_frame_font_88: 0,
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        f32_112: f32(o + 112),
        f32_116: f32(o + 116),
        f32_120: f32(o + 120),
        u8_126: u8(o + 126),
        pmwr_gc_texture_136: im_patch(g.pmwr_gc_texture_patch_ref, o + 136),
        f32_140: f32(o + 140),
        //check this
        f32_144: f32(o + 144),
        //check this
        f32_148: f32(o + 148),
        //check this
        f32_152: f32(o + 152),
        //check this
        f32_156: f32(o + 156),
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        section_192: [],
        section_196: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_pmwr_gc_world_settings_04(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_04);
    }
    u32(o + 12) && im_pmwr_gc_world_settings_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 36) && im_pmwr_gc_world_settings_36(u32(o + 36) + g.m, x[i].section_36);
    u32(o + 48) && im_pmwr_gc_world_settings_48(u32(o + 48) + g.m, x[i].section_48);
    u32(o + 52) && im_pmwr_gc_world_settings_52(u32(o + 52) + g.m, x[i].section_52);
    u32(o + 56) && im_pmwr_gc_world_settings_56(u32(o + 56) + g.m, x[i].section_56);
    u32(o + 60) && im_pmwr_gc_world_settings_60(u32(o + 60) + g.m, x[i].section_60);
    u32(o + 64) && im_pmwr_gc_world_settings_64(u32(o + 64) + g.m, x[i].section_64);
    u32(o + 68) && im_pmwr_gc_world_settings_68(u32(o + 68) + g.m, x[i].section_68);
    u32(o + 72) && im_pmwr_gc_world_settings_72(u32(o + 72) + g.m, x[i].section_72);
    x[i].unordered_pmwr_gc_frame_font_88 = in_ml(u32(o + 88), g.pmwr_gc_frame_font_array, im_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font);
    u32(o + 192) && im_pmwr_gc_world_settings_192(u32(o + 192) + g.m, x[i].section_192);
    u32(o + 196) && im_pmwr_gc_world_settings_196(u32(o + 196) + g.m, x[i].section_196);
    return x[i].id
    // 208 bytes;

}
function im_pmwr_gc_world_settings_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">d2d",

        u8_00: u8(o + 0),
        u8_08: u8(o + 8),
        u8_09: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
    });

}
function im_pmwr_gc_world_settings_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^f[:",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "v[_>",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "mQo9",
        section_00: [],
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    u32(o + 0) && im_pmwr_gc_world_settings_48_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_world_settings_48_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8>lm",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0WjQ",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WR@L",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_60(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "RY>]",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u8_02: u8(o + 2),
        u8_03: u8(o + 3),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_64(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gLBs",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "S19K",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_pmwr_gc_world_settings_72(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TeAb",
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_world_settings_192(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3P>U",
        unordered_pmwr_gc_interface_00: 0,
        unordered_pmwr_gc_interface_04: 0,
        u32_08: u32(o + 8),
        section_12: im_string(u32(o + 12), 0, false),
        section_16: im_string(u32(o + 16), 0, false),
        pmwr_gc_texture_20: im_patch(g.pmwr_gc_texture_patch_ref, o + 20),
        unordered_pmwr_gc_car_24: 0,
        unordered_pmwr_gc_car_28: 0,
        unordered_pmwr_gc_car_32: 0,
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
    });

    x[0].unordered_pmwr_gc_interface_00 = in_ml(u32(o + 0), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_interface_04 = in_ml(u32(o + 4), g.pmwr_gc_interface_array, im_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface);
    x[0].unordered_pmwr_gc_car_24 = in_ml(u32(o + 24), g.pmwr_gc_car_array, im_pmwr_gc_car, g.unordered_ref.pmwr_gc_car);
    x[0].unordered_pmwr_gc_car_28 = in_ml(u32(o + 28), g.pmwr_gc_car_array, im_pmwr_gc_car, g.unordered_ref.pmwr_gc_car);
    x[0].unordered_pmwr_gc_car_32 = in_ml(u32(o + 32), g.pmwr_gc_car_array, im_pmwr_gc_car, g.unordered_ref.pmwr_gc_car);

    for (let i = 0; i < u32(o + 36); i++) {
        im_pmwr_gc_world_settings_192_40(u32(o + 40) + (i * 8) + g.m, i, x[0].section_40);
    }

    // 48 bytes;

}
function im_pmwr_gc_world_settings_192_40(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ur=P",

        section_00: im_string(u32(o + 0), 0, false),
        u32_04: u32(o + 4),
    });

}
function im_pmwr_gc_world_settings_196(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "fX1=",
        u32_00: u32(o + 0),
        section_04: [],
        section_08: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 4) && im_pmwr_gc_world_settings_196_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 8) && im_pmwr_gc_world_settings_196_04(u32(o + 8) + g.m, x[0].section_08);
    u32(o + 12) && im_pmwr_gc_world_settings_196_04(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 16) && im_pmwr_gc_world_settings_196_04(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_pmwr_gc_world_settings_196_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[wZG",
        u32_00: u32(o + 0),
        //amount?
        section_04: [],
        u32_08: u32(o + 8),
        //amount?
        section_12: [],
        f32_16: f32(o + 16),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_pmwr_gc_world_settings_196_04_04(u32(o + 4) + (i * 12) + g.m, i, x[0].section_04);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_pmwr_gc_world_settings_196_04_04(u32(o + 12) + (i * 12) + g.m, i, x[0].section_12);
    }

    // 32 bytes;

}
function im_pmwr_gc_world_settings_196_04_04(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@mN[",

        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
    });

}

function im_pmwr_gc_wtf(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Bx@2",

        f32_00: f32(o + 0),
        section_04: [],
        section_08: [],
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_04(u32(o + 4) + g.m, x[i].section_04);
    u32(o + 8) && im_pmwr_gc_wtf_08(u32(o + 8) + g.m, x[i].section_08);
    u32(o + 12) && im_pmwr_gc_wtf_12(u32(o + 12) + g.m, x[i].section_12);
    return x[i].id
    // 16 bytes;

}
function im_pmwr_gc_wtf_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i3[;",
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_pmwr_gc_wtf_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LLg4",
        section_00: [],
        u32_04: u32(o + 4),
        section_08: [],
    });

    u32(o + 0) && im_pmwr_gc_wtf_08_00(u32(o + 0) + g.m, x[0].section_00);
    switch (u32(o + 4)) {
    case 1:
        u32(o + 8) && im_pmwr_gc_wtf_08_08t1(u32(o + 8) + g.m, x[0].section_08);
        break;
    case 3:
        u32(o + 8) && im_pmwr_gc_wtf_08_08t3(u32(o + 8) + g.m, x[0].section_08);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_wtf_08_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W]Kg",
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_08_00_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_wtf_08_00_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "]W;V",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_00_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Ec5z",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gQCH",
        section_00: [],
        u32_04: u32(o + 4),
        //amount?
        section_08: [],
    });

    u32(o + 0) && im_pmwr_gc_wtf_08_08t1_00(u32(o + 0) + g.m, x[0].section_00);
    u32(o + 8) && im_pmwr_gc_wtf_08_08t1_08(u32(o + 8) + g.m, x[0].section_08);

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t1_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ao0G",
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_08_08t1_00_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_wtf_08_08t1_00_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t1_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tc8t",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t1_00_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MFhc",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t1_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ImCk",
        u8_01: u8(o + 1),
        section_08: [],
        unordered_pmwr_gc_gate_12: 0,
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) && im_pmwr_gc_wtf_08_08t1_08_08(u32(o + 8) + g.m, x[0].section_08);
    x[0].unordered_pmwr_gc_gate_12 = in_ml(u32(o + 12), g.pmwr_gc_gate_array, im_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate);

    switch (u8(o + 1)) {
    case 0:
        u32(o + 20) && im_pmwr_gc_wtf_08_08t1_08_20t0(u32(o + 20) + g.m, x[0].section_20);
        break;
    case 2:
        x[0].section_20 = f32(o + 20)
        break
    }
    // 32 bytes;

}
function im_pmwr_gc_wtf_08_08t1_08_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3;Ty",
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}

function im_pmwr_gc_wtf_08_08t1_08_20t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?400",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}

function im_pmwr_gc_wtf_08_08t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "g<lB",
        section_00: [],
        u32_04: u32(o + 4),
        section_08: [],
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    u32(o + 0) && im_pmwr_gc_wtf_08_08t3_00(u32(o + 0) + g.m, x[0].section_00);
    u32(o + 8) && im_pmwr_gc_wtf_08_08t3_08(u32(o + 8) + g.m, x[0].section_08);
    u32(o + 12) && im_pmwr_gc_wtf_08_08t3_12(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 20) && im_pmwr_gc_wtf_08_08t3_20(u32(o + 20) + g.m, x[0].section_20);
    u32(o + 24) && im_pmwr_gc_wtf_08_08t3_24(u32(o + 24) + g.m, x[0].section_24);
    u32(o + 32) && im_pmwr_gc_wtf_08_08t3_32(u32(o + 32) + g.m, x[0].section_32);

    // 48 bytes;

}
function im_pmwr_gc_wtf_08_08t3_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[A]p",
        u32_00: u32(o + 0),
        //check this
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_08_08t3_00_04(u32(o + 4) + g.m, x[0].section_04);
    u32(o + 12) && im_pmwr_gc_wtf_08_08t3_00_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "q]]Z",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_00_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "555;",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "20?^",
        section_08: [],
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) && im_pmwr_gc_wtf_08_08t3_08_08(u32(o + 8) + g.m, x[0].section_08);
    u32(o + 20) && im_pmwr_gc_wtf_08_08t3_08_20(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_pmwr_gc_wtf_08_08t3_08_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "YaP2",
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_wtf_08_08t3_08_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Ypzz",
        f32_00: f32(o + 0),
        f32_04: f32(o + 4),
        f32_08: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_pmwr_gc_wtf_08_08t3_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">?Pg",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_08_08t3_12_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_12_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AJtY",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Eph7",
        u8_00: u8(o + 0),
        u8_01: u8(o + 1),
        u32_04: u32(o + 4),
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 8) && im_pmwr_gc_wtf_08_08t3_20_08(u32(o + 8) + g.m, x[0].section_08);

    // 32 bytes;

}
function im_pmwr_gc_wtf_08_08t3_20_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ei^6",
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_wtf_08_08t3_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5]W2",
        u32_00: u32(o + 0),
        section_04: [],
        u32_08: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_08_08t3_24_04(u32(o + 4) + g.m, x[0].section_04);
    switch (u32(o + 8)) {
    case 3:
        u32(o + 12) && im_pmwr_gc_wtf_08_08t3_24_12(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_24_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "p8F?",
        u32_00: u32(o + 0),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_24_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "l4ZW",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
    });

    // 16 bytes;

}
function im_pmwr_gc_wtf_08_08t3_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "N=Kn",
        u8_01: u8(o + 1),
        section_08: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    u32(o + 8) && im_pmwr_gc_wtf_08_08t3_32_08(u32(o + 8) + g.m, x[0].section_08);

    // 32 bytes;

}
function im_pmwr_gc_wtf_08_08t3_32_08(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ">vXm",
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_pmwr_gc_wtf_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5DxE",
        section_00: [],
    });

    u32(o + 0) && im_pmwr_gc_wtf_12_00(u32(o + 0) + g.m, x[0].section_00);

    // 16 bytes;

}
function im_pmwr_gc_wtf_12_00(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kMV6",
        u32_00: u32(o + 0),
        section_04: [],
    });

    u32(o + 4) && im_pmwr_gc_wtf_12_00_04(u32(o + 4) + g.m, x[0].section_04);

    // 16 bytes;

}
function im_pmwr_gc_wtf_12_00_04(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xu1^",
    });

    // 16 bytes;

}

function add_pmwr_gc_file_header() {
    return {

        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_pmwr_gc_directory() {
    return {

        sec_id: "]7Zf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}

function info_pmwr_gc_file_header() {
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

function info_pmwr_gc_directory() {
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
        section_datapack: ['E@3Z'],
    };

}

function ex_pmwr_gc_x(o, x) {
    let binary_size = (x.directory.length * 24) + 16

    globalThis.directory_buffer = new ArrayBuffer(binary_size)

    dynamic_buffer = directory_buffer
    buffer_array.push(directory_buffer)

    ex_pmwr_gc_file_header(o, x)

    let array_reorder = [buffer_array[0]]

    for (let i = 1; i < buffer_array.length; i += 4) {
        // datapack
        array_reorder.push(buffer_array[i])
        // index patch list
        array_reorder.push(buffer_array[i + 2])
        // ordered
        array_reorder.push(buffer_array[i + 1])
        // offset patch list
        array_reorder.push(buffer_array[i + 3])
    }

    buffer_array = array_reorder

    globalThis.end_buffer = new ArrayBuffer(128)
    dynamic_buffer = end_buffer

    let i = 0
    for (; i < end_buffer.byteLength; i++) {
        su8(i, 32)
    }

    buffer_array.push(end_buffer)

}

function ex_pmwr_gc_file_header(o, x) {
    let e = 16
    g = {
        divisibility: 16,
        divisible_prev_value: [],
        debug: pk_debug,
        type_string: g.type_string,
        game: g.game,
        endian: g.endian,
        console: g.console,
        file_version: g.version,
        file_dir_type: 0,
        file_name: g.name,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        mmm: 0,
        link_array: [],
        idk_array: [],
        interface_array: [],
        car_array: [],
        frame_sparkler_array: [],
        frame_font_array: [],
        frame_multi_font_array: [],
        frame_text_array: [],
        sound_controls_array: [],
        sound_section_array: [],
        model_link_array: [],
        model_sub_link_array: [],
        unknown_00_array: [],
        unknown_00_04_04t1_array: [],
        unknown_00_04_04t5_array: [],
        unknown_00_04_04t5_28_04_00_array: [],
        activator_array: [],
        activator_248_04_04t0_04_array: [],
        flag_array: [],
        var_array: [],
        gate_array: [],
        strange_array: [],
        object_array: [],
        um_array: [],
        wtf_array: [],
        mysterious_04t9_array: [],
        // nothing_array: [],
        world_settings_array: [],
        world_settings_array: [],
        world_20_12t0_array: [],
        world_20_12t1_array: [],
        world_20_12t2_array: [],
        world_20_12t3_array: [],
        world_20_12t4_array: [],
        world_20_12t5_array: [],
        world_20_12t8_array: [],
        world_20_12t10_array: [],
        world_20_12t11_array: [],
        world_20_12t13_array: [],
        world_20_12t14_array: [],
        world_20_12t15_array: [],
        car_00_180_04_84_array: [],
        car_00_180_array: [],
        car_00_192_16_array: [],
        car_00_184_array: [],
        world_20_12t8_76t8_04_array: [],
        world_20_12t8_76t8_08_array: [],
        world_20_12t8_76t8_04_array: [],
        world_20_12t8_76t8_08_array: [],
        unknown_00_04_04t2_array: [],
        texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        model_animation_1_array: [],
        model_animation_2_array: [],
        models_array: [],
        tex_anims: 0,
        activator_248_32_72_08t18_08_04t0_array: [],
        object_32t15_array: [],
        temp_pmwr_gc_world_offset_holder: [],
        temp_pmwr_gc_world_offset_holder_5: [],
    }

    // g = null
    //global pmwr_gc_object
    su32(0, 33620128)
    su32(4, 67174575)
    su32(8, x.version)
    su32(12, x.directory.length)

    let temp_offset = e
    let global = ((x.directory.length) * 24) + 16
    e = e + (x.directory.length * 24)

    let time_array = []
    for (let i = 0; i < x.directory.length; i++) {
        let a = Date.now()

        e = ex_pmwr_gc_directory(temp_offset + (i * 24), e, x.directory[i], global)
        time_array.push(Date.now() - a)

    }
    delete g.oa
    delete g.model_patch_array
    delete g.sound_patch_array
    delete g.pmwr_gc_texture_patch_array
    delete g.animation_patch_array

    console.pk_log("saved in " + time_array)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_directory(o, e, x, global) {

    g.pmwr_gc_wtf_array = []
    g.pmwr_gc_mysterious_04t9_array = []
    g.pmwr_gc_link_array = []
    g.pmwr_gc_idk_array = []
    g.pmwr_gc_interface_array = []
    g.pmwr_gc_car_array = []
    g.pmwr_gc_frame_sparkler_array = []
    g.pmwr_gc_frame_font_array = []
    g.pmwr_gc_frame_multi_font_array = []
    g.pmwr_gc_frame_text_array = []
    g.pmwr_gc_sound_controls_array = []
    g.pmwr_gc_sound_section_array = []
    g.pmwr_gc_model_link_array = []
    g.pmwr_gc_model_sub_link_array = []
    g.pmwr_gc_unknown_00_array = []
    g.pmwr_gc_unknown_00_04_04t1_array = []
    g.pmwr_gc_unknown_00_04_04t5_array = []
    g.pmwr_gc_unknown_00_04_04t5_28_04_00_array = []
    g.pmwr_gc_activator_array = []
    g.pmwr_gc_activator_248_04_04t0_04_array = []
    g.pmwr_gc_flag_array = []
    g.pmwr_gc_var_array = []
    g.pmwr_gc_gate_array = []
    g.pmwr_gc_strange_array = []
    g.pmwr_gc_object_array = []
    g.pmwr_gc_um_array = []
    g.pmwr_gc_world_settings_array = []
    g.pmwr_gc_world_20_12t0_array = []
    g.pmwr_gc_world_20_12t1_array = []
    g.pmwr_gc_world_20_12t2_array = []
    g.pmwr_gc_world_20_12t3_array = []
    g.pmwr_gc_world_20_12t4_array = []
    g.pmwr_gc_world_20_12t5_array = []
    g.pmwr_gc_world_20_12t8_array = []
    g.pmwr_gc_world_20_12t10_array = []
    g.pmwr_gc_world_20_12t11_array = []
    g.pmwr_gc_world_20_12t13_array = []
    g.pmwr_gc_world_20_12t14_array = []
    g.pmwr_gc_world_20_12t15_array = []
    g.pmwr_gc_unknown_00_04_04t2_array = []
    g.pmwr_gc_car_00_180_04_84_array = []
    g.pmwr_gc_car_00_180_array = []
    g.pmwr_gc_car_00_192_16_array = []
    g.pmwr_gc_car_00_184_array = []
    g.pmwr_gc_world_20_12t8_76t8_04_array = []
    g.pmwr_gc_world_20_12t8_76t8_08_array = []
    g.pmwr_gc_world_20_12t8_76t8_04_array = []
    g.pmwr_gc_world_20_12t8_76t8_08_array = []
    g.pmwr_gc_texture_patch_ref = 0
    g.animation_patch_ref = 0
    g.sound_patch_ref = 0
    g.model_patch_ref = 0
    g.oa = []
    g.pmwr_gc_texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    g.pmwr_gc_model_animation_1_array = []
    g.pmwr_gc_model_animation_2_array = []
    g.pmwr_gc_models_array = []
    g.pmwr_gc_activator_248_32_72_08t18_08_04t0_array = []
    g.pmwr_gc_object_32t15_array = []

    // let ce = e
    // g.file_dir_type = x.type
    // su32(o + 0, x.version)
    // su32(o + 4, ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world_texture', 'geometry', 'share', 'audio', 'music'].indexOf(x.type))
    // su32(o + 8, x.index)

    // if (g.console === 'ps2') {
    //     e = divisible(e, 2048)
    //     ce = e
    // }

    // su32(o + 20, e - global)
    // e = ex_pmwr_gc_datapack(e, x.datapack[0])

    // dynamic_buffer = directory_buffer

    // // g.file_dir_type = type
    // // im_datapack(u32(o + 20) + directory_offset, x[i].datapack)

    // // su32(o + 16, e - ce)

    // if (g.console === 'ps2') {
    //     e = divisible(e, 2048)
    // }

    // return e
    let ce = e
    g.file_dir_type = x.type
    su32(o + 0, x.version)
    su32(o + 4, ['car', 'interface', 'item', 'link', 'world', 'colliders', 'world texture', 'geometry', 'share', 'audio', 'music'].indexOf(x.type))
    su32(o + 8, x.index)

    if (g.console === 'ps2') {
        e = divisible(e, 2048)
        ce = e
    }

    su32(o + 20, e - global)
    e = ex_pmwr_gc_datapack(e, x.datapack[0])

    dynamic_buffer = directory_buffer

    // g.file_dir_type = type
    // global = dyn_sub_file_header(offset, x.datapack[0])
    // im_datapack(u32(o + 20) + directory_offset, x[i].datapack)

    // su32(o + 16, e - ce)
    su32(o + 16, datapack_buffer.byteLength + index_patch_buffer.byteLength + ordered_buffer.byteLength + offset_patch_buffer.byteLength)

    if (g.console === 'ps2') {
        e = divisible(e, 2048)
    }

    return e

}

function ex_pmwr_gc_datapack(o, x) {
    globalThis.datapack_buffer = new ArrayBuffer(268435455)

    buffer_array.push(datapack_buffer)
    dynamic_buffer = datapack_buffer

    let e = o
    g.datapack_offset = o
    let io = get_datapack_end() + o

    ex_string(80, 80, x.string_1, 1, 0)
    su32(92, x.u32_92)
    su32(96, x.u32_96)
    ex_string(100, 100, x.string_2, 1, 0)
    su32(112, x.u32_112)
    su32(116, x.u32_116)

    e = ex_sound(io, x.pmwr_gc_audio[0].sound, o)

    e += x.pmwr_gc_audio_index_patch_padding

    su32(4, e - (io + divisible(x.pmwr_gc_audio[0].sound.length * 4, 32)))

    io = e

    // e = e + get_index_array_amount(x.pmwr_gc_index_patch_list[0])

    // if (g.file_dir_type === 'share' && x.ordered[0].pmwr_gc_textures.length === 62) {
    //     e += 4
    // }

    datapack_buffer = datapack_buffer.slice(0, io - o)

    buffer_array[buffer_array.length - 1] = datapack_buffer

    e = ex_ordered(e, x.ordered[0])

    dynamic_buffer = datapack_buffer

    su32(8, x.pmwr_gc_audio[0].sound.length)
    su32(12, g.oa.length)
    su32(16, g.pmwr_gc_texture_patch_array.length)
    su32(28, g.sound_patch_array.length)
    su32(32, x.pmwr_gc_audio[0].sound.length)
    su32(48, g.ordered_ref.pmwr_gc_texture_animation.length)
    su32(52, g.animation_patch_array.length)
    su32(56, g.model_patch_array.length)

    ex_pmwr_gc_index_patch_list(io)

    dynamic_buffer = datapack_buffer

    // g.pmwr_gc_texture_patch_array

    // patch list is 4 bytes dibisible instead of 16 for some reason
    // let current_patch_list_divis = divisible(g.divisible_prev_value[0], g.divisible_prev_value[1])
    // let patch_list_divis = divisible(g.divisible_prev_value[0] + 1, 4)
    // e -= current_patch_list_divis
    // e += patch_list_divis

    // if (e === 162996) {
    //     e+=4
    // }

    su32(0, ordered_buffer.byteLength)
    e = ex_pmwr_gc_offset_patch_list(e) + index_patch_buffer.byteLength

    return e

    function get_datapack_end() {
        let offset = 0
        if (g.console === "ps2") {
            offset += 2048
        } else if (g.console === "psp") {
            offset += 128
        } else if (g.file_dir_type === "geometry") {
            offset += 84
        } else {
            offset += 120
        }
        return offset
    }

    function get_index_array_amount(x) {
        return divisible(((x.pmwr_gc_texture.length + x.pmwr_gc_texture_animation.length + x.sound.length) * 8), 32)
    }

}

function ex_ordered(o, x) {
    globalThis.ordered_buffer = new ArrayBuffer(268435455)

    buffer_array.push(ordered_buffer)
    dynamic_buffer = ordered_buffer

    // if (x.file_specific.length && g.file_dir_type === 'share') {
    //     o -= 4
    // }
    let aftero = o
    let e = o
    o = 0
    g.m = o
    g.unordered_ref = x.unordered[0]
    g.ordered_ref = x

    generate_id_offset_array(g.pmwr_gc_link_array = [], x.unordered[0].pmwr_gc_link)
    generate_id_offset_array(g.pmwr_gc_wtf_array = [], x.unordered[0].pmwr_gc_wtf)
    generate_id_offset_array(g.pmwr_gc_mysterious_04t9_array = [], x.unordered[0].pmwr_gc_mysterious_04t9)

    generate_id_offset_array(g.pmwr_gc_idk_array = [], x.unordered[0].pmwr_gc_idk)
    generate_id_offset_array(g.pmwr_gc_interface_array = [], x.unordered[0].pmwr_gc_interface)
    generate_id_offset_array(g.pmwr_gc_car_array = [], x.unordered[0].pmwr_gc_car)
    generate_id_offset_array(g.pmwr_gc_frame_sparkler_array = [], x.unordered[0].pmwr_gc_frame_sparkler)
    generate_id_offset_array(g.pmwr_gc_frame_font_array = [], x.unordered[0].pmwr_gc_frame_font)
    generate_id_offset_array(g.pmwr_gc_frame_multi_font_array = [], x.unordered[0].pmwr_gc_frame_multi_font)
    generate_id_offset_array(g.pmwr_gc_frame_text_array = [], x.unordered[0].pmwr_gc_frame_text)
    generate_id_offset_array(g.pmwr_gc_sound_controls_array = [], x.unordered[0].pmwr_gc_sound_controls)
    generate_id_offset_array(g.pmwr_gc_sound_section_array = [], x.unordered[0].pmwr_gc_sound_section)
    generate_id_offset_array(g.pmwr_gc_model_link_array = [], x.unordered[0].pmwr_gc_model_link)
    generate_id_offset_array(g.pmwr_gc_model_sub_link_array = [], x.unordered[0].pmwr_gc_model_sub_link)
    generate_id_offset_array(g.pmwr_gc_unknown_00_array = [], x.unordered[0].pmwr_gc_unknown_00)
    generate_id_offset_array(g.pmwr_gc_unknown_00_04_04t1_array = [], x.unordered[0].pmwr_gc_unknown_00_04_04t1)
    generate_id_offset_array(g.pmwr_gc_unknown_00_04_04t5_array = [], x.unordered[0].pmwr_gc_unknown_00_04_04t5)
    generate_id_offset_array(g.pmwr_gc_unknown_00_04_04t5_28_04_00_array = [], x.unordered[0].pmwr_gc_unknown_00_04_04t5_28_04_00)
    generate_id_offset_array(g.pmwr_gc_activator_array = [], x.unordered[0].pmwr_gc_activator)
    generate_id_offset_array(g.pmwr_gc_activator_248_04_04t0_04_array = [], x.unordered[0].pmwr_gc_activator_248_04_04t0_04)
    generate_id_offset_array(g.pmwr_gc_flag_array = [], x.unordered[0].pmwr_gc_flag)
    generate_id_offset_array(g.pmwr_gc_var_array = [], x.unordered[0].pmwr_gc_var)
    generate_id_offset_array(g.pmwr_gc_gate_array = [], x.unordered[0].pmwr_gc_gate)
    generate_id_offset_array(g.pmwr_gc_strange_array = [], x.unordered[0].pmwr_gc_strange)
    generate_id_offset_array(g.pmwr_gc_object_array = [], x.unordered[0].pmwr_gc_object)
    generate_id_offset_array(g.pmwr_gc_um_array = [], x.unordered[0].pmwr_gc_um)
    // generate_id_offset_array(g.nothing_array = [], x.unordered[0].nothing)
    generate_id_offset_array(g.pmwr_gc_world_settings_array = [], x.unordered[0].pmwr_gc_world_settings)
    generate_id_offset_array(g.pmwr_gc_car_00_180_04_84_array = [], x.unordered[0].pmwr_gc_car_00_180_04_84)
    generate_id_offset_array(g.pmwr_gc_car_00_180_array = [], x.unordered[0].pmwr_gc_car_00_180)
    generate_id_offset_array(g.pmwr_gc_car_00_192_16_array = [], x.unordered[0].pmwr_gc_car_00_192_16)
    generate_id_offset_array(g.pmwr_gc_car_00_184_array = [], x.unordered[0].pmwr_gc_car_00_184)
    generate_id_offset_array(g.pmwr_gc_world_20_12t8_76t8_04_array = [], x.unordered[0].pmwr_gc_world_20_12t8_76t8_04)
    generate_id_offset_array(g.pmwr_gc_world_20_12t8_76t8_08_array = [], x.unordered[0].pmwr_gc_world_20_12t8_76t8_08)
    generate_id_offset_array(g.pmwr_gc_unknown_00_04_04t2_array = [], x.unordered[0].pmwr_gc_unknown_00_04_04t2)
    generate_id_offset_array(g.pmwr_gc_activator_248_32_72_08t18_08_04t0_array = [], x.unordered[0].pmwr_gc_activator_248_32_72_08t18_08_04t0)
    generate_id_offset_array(g.pmwr_gc_object_32t15_array = [], x.unordered[0].pmwr_gc_object_32t15)

    if (g.file_dir_type === "world") {

        generate_id_offset_array(g.pmwr_gc_world_20_12t0_array = [], x.file_specific[0].section_20[0].type_0)
        generate_id_offset_array(g.pmwr_gc_world_20_12t1_array = [], x.file_specific[0].section_20[0].type_1)
        generate_id_offset_array(g.pmwr_gc_world_20_12t2_array = [], x.file_specific[0].section_20[0].type_2)
        generate_id_offset_array(g.pmwr_gc_world_20_12t3_array = [], x.file_specific[0].section_20[0].type_3)
        generate_id_offset_array(g.pmwr_gc_world_20_12t4_array = [], x.file_specific[0].section_20[0].type_4)
        generate_id_offset_array(g.pmwr_gc_world_20_12t5_array = [], x.file_specific[0].section_20[0].type_5)
        generate_id_offset_array(g.pmwr_gc_world_20_12t8_array = [], x.file_specific[0].section_20[0].type_8)
        generate_id_offset_array(g.pmwr_gc_world_20_12t10_array = [], x.file_specific[0].section_20[0].type_10)
        generate_id_offset_array(g.pmwr_gc_world_20_12t11_array = [], x.file_specific[0].section_20[0].type_11)
        generate_id_offset_array(g.pmwr_gc_world_20_12t13_array = [], x.file_specific[0].section_20[0].type_13)
        generate_id_offset_array(g.pmwr_gc_world_20_12t14_array = [], x.file_specific[0].section_20[0].type_14)
        generate_id_offset_array(g.pmwr_gc_world_20_12t15_array = [], x.file_specific[0].section_20[0].type_15)
        generate_id_offset_array(g.pmwr_gc_world_20_12t8_76t8_04_array = [], x.unordered[0].pmwr_gc_world_20_12t8_76t8_04)
        generate_id_offset_array(g.pmwr_gc_world_20_12t8_76t8_08_array = [], x.unordered[0].pmwr_gc_world_20_12t8_76t8_08)
    }

    generate_id_offset_array(g.pmwr_gc_model_animation_1_array = [], g.ordered_ref.pmwr_gc_model_animation_1)
    generate_id_offset_array(g.pmwr_gc_model_animation_2_array = [], g.ordered_ref.pmwr_gc_model_animation_2)
    generate_id_offset_array(g.pmwr_gc_models_array = [], g.ordered_ref.pmwr_gc_models)

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "link":
        e = ex_pmwr_gc_basic(o, x.file_specific[0])
        break
    case "share":
        e = ex_pmwr_gc_share(o, x)
        break
    case "world":
        e = ex_pmwr_gc_world(o, x.file_specific[0])
        break
    default:
        console.log("later")
    }

    if (g.ordered_ref.pmwr_gc_texture_animation.length) {
        dynamic_buffer = datapack_buffer

        let temp_offset = e
        su32(60, g.tex_anims)
        dynamic_buffer = ordered_buffer

        for (let i = 0; i < g.ordered_ref.pmwr_gc_texture_animation.length; i++) {

            e = ex_pmwr_gc_texture_animation_section(g.tex_anims + (i * 12), e, g.ordered_ref.pmwr_gc_texture_animation[i])
        }
    }

    // patch list is 4 bytes dibisible instead of 16 for some reason
    let current_patch_list_divis = divisible(g.divisible_prev_value[0], g.divisible_prev_value[1])
    let patch_list_divis = divisible(g.divisible_prev_value[0] + 1, 4)
    e -= current_patch_list_divis
    e += patch_list_divis

    ordered_buffer = ordered_buffer.slice(0, e)

    buffer_array[buffer_array.length - 1] = ordered_buffer
    // ordered_buffer = ordered_buffer.slice(0,e)

    return e + aftero

}

function ex_pmwr_gc_basic(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(0, x.u32_00)

    e = ex_s_offset(4, e, ex_pmwr_gc_basic_04, x.pmwr_gc_basic_04, 'up')

    return e

    function ex_pmwr_gc_basic_04(o, x) {
        let e = o + divisible(16, g.divisibility)

        e = ex_byte_alignment_testing(e)

        if (x.unordered_pmwr_gc_link) {
            g.oa.push(o)
        }

        e = ex_ordered_list(e)

        switch (g.file_dir_type) {
        case "car":
            e = ex_ml(x.unordered_pmwr_gc_link, g.pmwr_gc_car_array, ex_pmwr_gc_car, g.unordered_ref.pmwr_gc_car, o + 0, e, 'null');
            break
        case "interface":
            e = ex_ml(x.unordered_pmwr_gc_link, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 0, e, 'null');
            break
        case "link":
            e = ex_ml(x.unordered_pmwr_gc_link, g.pmwr_gc_link_array, ex_pmwr_gc_link, g.unordered_ref.pmwr_gc_link, o + 0, e, 'null');
            break
        default:
            console.log("later")
        }

        su32(o + 4, x.u32_04)

        return e

    }

}

function ex_pmwr_gc_index_patch_list(o) {
    let section_length = divisible((g.pmwr_gc_texture_patch_array.length + g.animation_patch_array.length + g.sound_patch_array.length) * 8, 32)
    globalThis.index_patch_buffer = new ArrayBuffer(section_length)

    buffer_array.push(index_patch_buffer)
    dynamic_buffer = index_patch_buffer

    let i = 0
    for (let t_i = 0; t_i < g.pmwr_gc_texture_patch_array.length; t_i++,
    i++) {
        su32(i * 8, g.pmwr_gc_texture_patch_array[t_i][0])
        su16((i * 8) + 4, g.pmwr_gc_texture_patch_array[t_i][1])
        su16((i * 8) + 6, g.pmwr_gc_texture_patch_array[t_i][2])
    }
    for (let ta_i = 0; ta_i < g.animation_patch_array.length; ta_i++,
    i++) {
        su32((i * 8), g.animation_patch_array[ta_i][0])
        su16((i * 8) + 4, g.animation_patch_array[ta_i][1])
        su16((i * 8) + 6, g.animation_patch_array[ta_i][2])
    }
    for (let s_i = 0; s_i < g.sound_patch_array.length; s_i++,
    i++) {
        su32((i * 8), g.sound_patch_array[s_i][0])
        su16((i * 8) + 4, g.sound_patch_array[s_i][1])
        su16((i * 8) + 6, g.sound_patch_array[s_i][2])
    }
    // buffer_array[buffer_array.length -1] = index_patch_buffer.slice(0,i*8)
    // index_patch_buffer = index_patch_buffer.slice(0,i*8)
}

function ex_ordered_list(o) {
    let e = o

    if (g.ordered_ref.pmwr_gc_models.length) {
        e = ex_ma(g.ordered_ref.pmwr_gc_models, g.pmwr_gc_models_array, dyn_model, e, g.m)
    }

    if (g.ordered_ref.pmwr_gc_texture_animation.length) {
        //this is calculated later
        g.tex_anims = e
        for (let i = 0; i < g.ordered_ref.pmwr_gc_texture_animation.length; i++) {
            g.oa.push(g.tex_anims + (i * 12))
        }
        e += divisible(g.ordered_ref.pmwr_gc_texture_animation.length * 12, 16)
    }

    if (g.ordered_ref.pmwr_gc_model_animation_1.length) {
        e = ex_ma(g.ordered_ref.pmwr_gc_model_animation_1, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, e, g.m)
    }
    if (g.ordered_ref.pmwr_gc_model_animation_2.length) {
        e = ex_ma(g.ordered_ref.pmwr_gc_model_animation_2, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, e, g.m)
    }

    if (g.ordered_ref.pmwr_gc_textures.length) {
        dynamic_buffer = datapack_buffer

        su32(20, g.ordered_ref.pmwr_gc_textures.length)
        su32(24, e)
        dynamic_buffer = ordered_buffer

        let temp_offset = e
        e += divisible(g.ordered_ref.pmwr_gc_textures.length * 64, g.divisibility) + g.ordered_ref.pmwr_gc_texturepadding
        for (let i = 0; i < g.ordered_ref.pmwr_gc_textures.length; i++) {
            e = ex_pmwr_gc_textures(temp_offset + (i * 64), e, g.ordered_ref.pmwr_gc_textures[i])
        }
        ;if (g.console === 'ps2') {
            e += 16
        }
    }

    // e = ex_ml(g.ordered_ref.pmwr_gc_models, g.pmwr_gc_link_array, ex_pmwr_gc_link, g.unordered_ref.pmwr_gc_link, o + 0, e, 'up');

    // e = ex_s_offset(g.datapack_offset + 24, e, ex_pmwr_gc_textures, g.ordered_ref.pmwr_gc_textures, null)

    // e = ex_ml(g.ordered_ref.pmwr_gc_textures, null , ex_pmwr_gc_texture, g.ordered_ref.pmwr_gc_textures, g.datapack_offset + 0, e, 'up');

    return e
}

function ex_pmwr_gc_offset_patch_list(o) {
    globalThis.offset_patch_buffer = new ArrayBuffer((g.oa.length * 4) + (g.model_patch_array.length * 8))

    buffer_array.push(offset_patch_buffer)
    dynamic_buffer = offset_patch_buffer

    let e = o + (g.oa.length * 4) + (g.model_patch_array.length * 8)
    let i = 0
    for (let m_i = 0; m_i < g.model_patch_array.length; m_i++,
    i += 8) {
        // su32(offset + (i * 8), g.model_patch_array[i])
        su32(i, g.model_patch_array[m_i][0])
        su16(i + 4, g.model_patch_array[m_i][1])
        su16(i + 6, g.model_patch_array[m_i][2])
    }
    for (let g_i = 0; g_i < g.oa.length; g_i++,
    i += 4) {
        su32(i, g.oa[g_i])
    }

    // buffer_array[buffer_array.length -1] = offset_patch_buffer.slice(0,(g.oa.length * 4) + (g.model_patch_array.length * 8))

    // index_patch_buffer = index_patch_buffer.slice(0,(g.oa.length * 4) + (g.model_patch_array.length * 8))

    return e

}

function ex_pmwr_gc_world(o, x) {
    let e = o + divisible(160, g.divisibility)
    su32(o + 16, x.u32_16)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)
    su32(o + 104, x.u32_104)
    su32(o + 108, x.u32_108)
    su32(o + 112, x.u32_112)
    su32(o + 116, x.u32_116)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)
    su32(o + 128, x.u32_128)
    su32(o + 132, x.u32_132)
    su32(o + 136, x.u32_136)
    su32(o + 140, x.u32_140)
    su32(o + 144, x.u32_144)
    su32(o + 148, x.u32_148)
    su32(o + 152, x.u32_152)
    su32(o + 156, x.u32_156)

    //amount?
    //amount?   su32(o +28, x.u32_28)
    // pmwr_gc_unknown(o +96-160, x.// pmwr_gc_unknown_96-160) //?
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_collision, x.section_04, 'up');
    e = ex_byte_alignment_testing(e)

    if (x.section_20.length) {
        su32(o + 20, e)
        g.oa.push(o + 20)
        e = ex_pmwr_gc_world_20(e, x.section_20);
    }

    if (x.unordered_pmwr_gc_world_settings_00) {
        g.oa.push(o + 0)
    }

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_world_08, x.section_08, 'up');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_world_12, x.section_12, 'up');
    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 4, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_world_32(temp_offset + (i * 4), e, x.section_32[i])
        }
        ;
    }
    if (g.file_name === 'Award.xpc') {
        g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_world_settings_00, g.pmwr_gc_world_settings_array, ex_pmwr_gc_world_settings, g.unordered_ref.pmwr_gc_world_settings, o + 0, e, 'none']);

    }

    e = ex_s_offset(o + 24, e, ex_pmwr_gc_world_24, x.section_24, 'up');

    e = ex_ordered_list(e)

    // e = ex_ml(x.unordered_pmwr_gc_world_settings_00, g.pmwr_gc_world_settings_array, ex_pmwr_gc_world_settings, g.unordered_ref.pmwr_gc_world_settings, o + 0, e, 'none');

    for (let i = 0; i < g.temp_pmwr_gc_world_offset_holder_5.length; i++) {
        e = ex_ml(g.temp_pmwr_gc_world_offset_holder_5[i][0], g.temp_pmwr_gc_world_offset_holder_5[i][1], g.temp_pmwr_gc_world_offset_holder_5[i][2], g.temp_pmwr_gc_world_offset_holder_5[i][3], g.temp_pmwr_gc_world_offset_holder_5[i][4], e, g.temp_pmwr_gc_world_offset_holder_5[i][6], g.temp_pmwr_gc_world_offset_holder_5[i][7], g.temp_pmwr_gc_world_offset_holder_5[i][8])
    }
    if (g.file_name === 'Award.xpc') {

        for (let i = 0; i < g.temp_pmwr_gc_world_offset_holder.length; i++) {
            if (g.temp_pmwr_gc_world_offset_holder[i][2].name === "ex_pmwr_gc_world_20_12t4") {
                e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6], true)
            } else if (g.temp_pmwr_gc_world_offset_holder[i][2].name === "ex_pmwr_gc_world_20_12t8") {
                e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6], true)
            } else if (g.temp_pmwr_gc_world_offset_holder[i][2].name === "ex_pmwr_gc_model_animation_1") {
                e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6], true)
            } else {
                e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6])
            }
        }

    }

    e = ex_ml(x.unordered_pmwr_gc_world_settings_00, g.pmwr_gc_world_settings_array, ex_pmwr_gc_world_settings, g.unordered_ref.pmwr_gc_world_settings, o + 0, e, 'none');
    if (g.file_name !== 'Award.xpc') {
        e = ex_ml(x.unordered_pmwr_gc_world_settings_00, g.pmwr_gc_world_settings_array, ex_pmwr_gc_world_settings, g.unordered_ref.pmwr_gc_world_settings, o + 0, e, 'none');
    }

    for (let i = 0; i < g.temp_pmwr_gc_world_offset_holder.length; i++) {
        if (g.temp_pmwr_gc_world_offset_holder[i][2].name === "ex_pmwr_gc_world_20_12t4") {
            e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6], true)
        } else if (g.temp_pmwr_gc_world_offset_holder[i][2].name === "ex_pmwr_gc_world_20_12t8") {
            e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6], true)
        } else if (g.temp_pmwr_gc_world_offset_holder[i][2].name === "ex_pmwr_gc_model_animation_1") {
            e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6], true)
        } else {
            e = ex_ml(g.temp_pmwr_gc_world_offset_holder[i][0], g.temp_pmwr_gc_world_offset_holder[i][1], g.temp_pmwr_gc_world_offset_holder[i][2], g.temp_pmwr_gc_world_offset_holder[i][3], g.temp_pmwr_gc_world_offset_holder[i][4], e, g.temp_pmwr_gc_world_offset_holder[i][6])
        }
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision(o, x) {
    let e = o + divisible(96, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 36, x.u32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su32(o + 60, x.u32_60)
    su32(o + 88, x.u32_88);
    if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 32, g.divisibility)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_pmwr_gc_collision_76(temp_offset + (i * 32), e, x.section_76[i])
        }
        ;
    }

    ;if (x.section_84.length) {
        su32(o + 80, x.section_84.length)
        su32(o + 84, e)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 64, g.divisibility)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_pmwr_gc_collision_84(temp_offset + (i * 64), e, x.section_84[i])
        }
        ;
    }

    if (x.section_64.length) {
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_pmwr_gc_collision_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }

    let temp_function = ex_pmwr_gc_collision_32t0

    switch (x.u32_88) {
    case 0:
        temp_function = ex_pmwr_gc_collision_32t0
        // e = ex_s_offset(o + 32, e, ex_pmwr_gc_collision_32t0, x.section_32, 'down');
        break;
    case 1:
        temp_function = ex_pmwr_gc_collision_32t1
        // e = ex_s_offset(o + 32, e, ex_pmwr_gc_collision_32t1, x.section_32, 'down');
        break;
    }

    if (x.section_32.length) {
        su32(o + 68, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 48, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = temp_function(temp_offset + (i * 48), e, x.section_32[i], i === x.section_32.length - 1)
        }
        ;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_76(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su32(o + 20, x.u32_20)
    su16(o + 24, x.u16_24)
    su16(o + 26, x.u16_26)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_collision_76_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_76_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_84(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
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

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_64(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_32t0(o, e, x, islast) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_40.length) {
        su32(o + 44, x.section_40.length)
        su32(o + 40, e)
        g.oa.push(o + 40)
        let temp_offset = e
        if (islast) {
            e += divisible(x.section_40.length * 4, g.divisibility)
        } else {
            e += x.section_40.length * 4
        }
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_pmwr_gc_collision_32t0_40(temp_offset + (i * 4), e, x.section_40[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_32t0_40(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_32t1(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_40.length || x.section_36.length) {
        su32(o + 40, e)
        g.oa.push(o + 40)
    }

    if (x.section_40.length) {
        su32(o + 44, x.section_40.length)
        // su32(o + 40, e  )
        // g.oa.push(o + 40)
        let temp_offset = e
        // e += divisible(x.section_40.length * 12, 16)
        e += replacement_divisibility(x.section_40.length * 12, 16, x.section_40.length * 12 + e, 205)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_pmwr_gc_collision_32t1_40(temp_offset + (i * 12), e, x.section_40[i])
        }
        ;
    }

    if (x.section_40.length || x.section_36.length) {
        su32(o + 36, e)
        g.oa.push(o + 36)
    }

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        // su32(o + 36, e  )
        // g.oa.push(o + 36)
        let temp_offset = e
        // e += divisible(x.section_36.length * 2, 16)
        e += replacement_divisibility(x.section_36.length * 2, 16, x.section_36.length * 2 + e, 205)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_collision_32t1_36(temp_offset + (i * 2), e, x.section_36[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_32t1_40(o, e, x) {
    //amount?   su32(o +04, x.u32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)

    if (x.section_00.length) {
        su32(o + 4, x.section_00.length)
        su32(o + 0, e)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_00.length * 32, g.divisibility)

        for (let i = 0; i < x.section_00.length; i++) {
            e = ex_pmwr_gc_collision_32t1_40_00(temp_offset + (i * 32), e, x.section_00[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_32t1_40_00(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_collision_32t1_36(o, e, x) {
    su16(o + 0, x.u16_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20(o, x) {
    let e = o + divisible(256, g.divisibility)

    if (x[0].type_0.length) {
        su32(o + 0, 0)
        //type
        su32(o + 4, 128)
        //bytes per entry
        su32(o + 8, x[0].type_0.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)
        e = ex_ma(x[0].type_0, g.pmwr_gc_world_20_12t0_array, ex_pmwr_gc_world_20_12t0, e, g.m)
        o += 16
    }
    if (x[0].type_1.length) {
        su32(o + 0, 1)
        //type
        su32(o + 4, 96)
        //bytes per entry
        su32(o + 8, x[0].type_1.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)
        e = ex_ma(x[0].type_1, g.pmwr_gc_world_20_12t1_array, ex_pmwr_gc_world_20_12t1, e, g.m)
        o += 16
    }
    if (x[0].type_13.length) {
        su32(o + 0, 13)
        //type
        su32(o + 4, 96)
        //bytes per entry
        su32(o + 8, x[0].type_13.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_13, g.pmwr_gc_world_20_12t13_array, ex_pmwr_gc_world_20_12t13, e, g.m)
        o += 16
    }
    if (x[0].type_14.length) {
        su32(o + 0, 14)
        //type
        su32(o + 4, 80)
        //bytes per entry
        su32(o + 8, x[0].type_14.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_14, g.pmwr_gc_world_20_12t14_array, ex_pmwr_gc_world_20_12t14, e, g.m)
        o += 16
    }
    if (x[0].type_15.length) {
        su32(o + 0, 15)
        //type
        su32(o + 4, 80)
        //bytes per entry
        su32(o + 8, x[0].type_15.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_15, g.pmwr_gc_world_20_12t15_array, ex_pmwr_gc_world_20_12t15, e, g.m)
        o += 16
    }

    if (x[0].type_5.length) {
        su32(o + 0, 5)
        //type
        su32(o + 4, 112)
        //bytes per entry
        su32(o + 8, x[0].type_5.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_5, g.pmwr_gc_world_20_12t5_array, ex_pmwr_gc_world_20_12t5, e, g.m)
        o += 16
    }

    if (x[0].type_2.length) {
        su32(o + 0, 2)
        su32(o + 4, 112)
        su32(o + 8, x[0].type_2.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x[0].type_2.length * 112, g.divisibility)
        for (let i = 0; i < x[0].type_2.length; i++) {
            e = ex_pmwr_gc_world_20_12t2(temp_offset + (i * 112), e, x[0].type_2[i])
        }
        o += 16
    }

    if (x[0].type_10.length) {
        su32(o + 0, 10)
        //type
        su32(o + 4, 96)
        //bytes per entry
        su32(o + 8, x[0].type_10.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_10, g.pmwr_gc_world_20_12t10_array, ex_pmwr_gc_world_20_12t10, e, g.m)
        o += 16
    }

    if (x[0].type_3.length) {
        su32(o + 0, 3)
        //type
        su32(o + 4, 64)
        //bytes per entry
        su32(o + 8, x[0].type_3.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_3, g.pmwr_gc_world_20_12t3_array, ex_pmwr_gc_world_20_12t3, e, g.m)
        o += 16
    }

    if (x[0].type_4.length) {
        su32(o + 0, 4)
        su32(o + 4, 144)
        su32(o + 8, x[0].type_4.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x[0].type_4.length * 144, g.divisibility)
        for (let i = 0; i < x[0].type_4.length; i++) {
            let temp_index = g.pmwr_gc_world_20_12t4_array[0].a_ids.indexOf(x[0].type_4[i].id)
            g.pmwr_gc_world_20_12t4_array[0].a_offsets[temp_index] = (temp_offset + (i * 144))

            e = ex_pmwr_gc_world_20_12t4(temp_offset + (i * 144), e, x[0].type_4[i])
        }
        o += 16

    }

    if (x[0].type_11.length) {
        su32(o + 0, 11)
        //type
        su32(o + 4, 80)
        //bytes per entry
        su32(o + 8, x[0].type_11.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_11, g.pmwr_gc_world_20_12t11_array, ex_pmwr_gc_world_20_12t11, e, g.m)
        o += 16
    }

    if (x[0].type_8.length) {
        su32(o + 0, 8)
        su32(o + 4, 80)
        su32(o + 8, x[0].type_8.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x[0].type_8.length * 80, g.divisibility)
        for (let i = 0; i < x[0].type_8.length; i++) {
            let temp_index = g.pmwr_gc_world_20_12t8_array[0].a_ids.indexOf(x[0].type_8[i].id)
            g.pmwr_gc_world_20_12t8_array[0].a_offsets[temp_index] = (temp_offset + (i * 80))

            e = ex_pmwr_gc_world_20_12t8(temp_offset + (i * 80), e, x[0].type_8[i])
        }
        o += 16

    }

    //0 , 1, 13,14,15,5,2,10,3,4,11,8
    // x[0].type_0

    //0 , 1, 13,14,15,5,2,10,3,4,11,8

    // if (x[0].length) {

    // }

    // su32(o + 4, x.u32_04)
    //?
    //amount?   su32(o +08, x.u32_08)
    // su32(o + 12, x.u32_12)

    // e = ex_s_offset(o + 0, e, ex_pmwr_gc_world_20_12t0, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_type_entry_header(o, x) {
    su32(o + 0, x.u32_00)
    su16(o + 4, x.u16_04)
    su16(o + 6, x.u16_06)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)

    g.debug && ex_debug(o, x.sec_id);
}
function ex_pmwr_gc_world_20_12t0(o, x) {
    let e = o + divisible(128, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su32(o + 68, x.u32_68)
    su16(o + 74, x.u16_74)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)
    su8(o + 112, x.u8_112)
    su8(o + 113, x.u8_113)
    su8(o + 114, x.u8_114)
    su8(o + 120, x.u8_120)
    su8(o + 121, x.u8_121)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t1(o, x) {
    let e = o + divisible(96, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    su8(o + 76, x.u8_76)
    su8(o + 77, x.u8_77)
    su8(o + 78, x.u8_78)
    sf32(o + 80, x.f32_80)

    if (x.ordered_pmwr_gc_model_animation_1_64) {
        g.oa.push(o + 64)
    }
    if (x.unordered_pmwr_gc_idk_72) {
        g.oa.push(o + 72)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.ordered_pmwr_gc_model_animation_1_64, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 64, e, 'none'])
    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_idk_72, g.pmwr_gc_idk_array, ex_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk, o + 72, e, 'none'])

    // e = ex_ml(x.ordered_pmwr_gc_model_animation_1_64, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 64, e, 'down');
    // e = ex_ml(x.unordered_pmwr_gc_idk_72, g.pmwr_gc_idk_array, ex_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk, o + 72, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2(o, e, x) {
    ex_type_entry_header(o, x.section_00[0])

    su32(o + 40, x.u32_40)
    su32(o + 52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)
    su32(o + 84, x.u32_84)
    //amount?   su32(o +104, x.u32_104)

    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_pmwr_gc_world_20_12t2_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    if (x.section_100.length) {
        su32(o + 104, x.section_100.length)
        su32(o + 100, e)
        g.oa.push(o + 100)
        let temp_offset = e
        e += divisible(x.section_100.length * 4, g.divisibility)
        for (let i = 0; i < x.section_100.length; i++) {
            e = ex_pmwr_gc_world_20_12t2_100(temp_offset + (i * 4), e, x.section_100[i])
        }
        ;
    }

    e = ex_s_offset(o + 56, e, ex_pmwr_gc_world_20_12t2_56, x.section_56, 'down');
    e = ex_s_offset(o + 76, e, ex_pmwr_gc_world_20_12t2_76, x.section_76, 'up');
    ;e = ex_s_offset(o + 72, e, ex_pmwr_gc_world_20_12t2_72, x.section_72, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_100(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_56(o, x) {
    let buffer = convert_base64_arraybuffer(x.buffer)
    let e = o + buffer.byteLength

    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_64(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_76(o, x) {
    let e = o + divisible(16, g.divisibility)
    su16(o + 2, x.u16_02)
    //amount?   su32(o +08, x.u32_08)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_world_20_12t2_76_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_76_12(o, e, x) {

    switch (x.type) {
    case 13:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t13_array, ex_pmwr_gc_world_20_12t13, g.unordered_ref.pmwr_gc_world_20_12t13, o + 0, e, 'down', true);
        break
    case 14:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t14_array, ex_pmwr_gc_world_20_12t14, g.unordered_ref.pmwr_gc_world_20_12t14, o + 0, e, 'down', true);
        break
    case 15:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t15_array, ex_pmwr_gc_world_20_12t15, g.unordered_ref.pmwr_gc_world_20_12t15, o + 0, e, 'down', true);
        break
    }

    // if (offset) {
    //     if (g.pmwr_gc_world_20_12t13_array.includes(offset)) {
    //         x[i].section_00 = g.pmwr_gc_world_20_12t13_array.indexOf(offset)
    //         x[i].type = 13
    //     } else if (g.pmwr_gc_world_20_12t14_array.includes(offset)) {
    //         x[i].section_00 = g.pmwr_gc_world_20_12t14_array.indexOf(offset)
    //         x[i].type = 14
    //     } else if (g.pmwr_gc_world_20_12t15_array.includes(offset)) {
    //         x[i].section_00 = g.pmwr_gc_world_20_12t15_array.indexOf(offset)
    //         x[i].type = 15
    //     } else {
    //         console.log('?')
    //     }

    // }

    // e = ex_ml(x.section_00t13, g.pmwr_gc_world_20_12t13_array, ex_pmwr_gc_world_20_12t13, g.unordered_ref.pmwr_gc_world_20_12t13, o + 0, e, 'down', true);
    // e = ex_ml(x.section_00t14, g.pmwr_gc_world_20_12t14_array, ex_pmwr_gc_world_20_12t14, g.unordered_ref.pmwr_gc_world_20_12t14, o + 0, e, 'down', true);
    // e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t15_array, ex_pmwr_gc_world_20_12t15, g.unordered_ref.pmwr_gc_world_20_12t15, o + 0, e, 'down', true);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_72(o, x) {
    let e = o + divisible(16, g.divisibility)

    if (x.section_00.length) {
        // su32(o + ___$$$___, x.section_00.length)
        su32(o + 0, e)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_00.length * 4, g.divisibility)
        for (let i = 0; i < x.section_00.length; i++) {
            e = ex_pmwr_gc_world_20_12t2_72_00(temp_offset + (i * 4), e, x.section_00[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t2_72_00(o, e, x) {

    e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t5_array, ex_pmwr_gc_world_20_12t5, g.unordered_ref.pmwr_gc_world_20_12t5, o + 0, e, 'down', true);

    // if (x.section_00.length) {
    //     // su32(o + ___$$$___, x.section_00.length)
    //     su32(o + 0, e  )
    //     g.oa.push(o + 0)
    //     let temp_offset = e
    //     e += divisible(x.section_00.length * 112, 16)
    //     for (let i = 0; i < x.section_00.length; i++) {
    //         e = ex_pmwr_gc_world_20_12t5(temp_offset + (i * 112), e, x.section_00[i])
    //     }
    //     ;
    // }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t3(o, x) {
    let e = o + divisible(64, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)

    if (x.unordered_pmwr_gc_sound_controls_48) {
        g.oa.push(o + 48)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_sound_controls_48, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 48, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t4(o, e, x) {
    // let e = o + 144

    ex_type_entry_header(o, x.section_00[0])

    su32(o + 32, x.u32_32)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 116, x.f32_116)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)

    if (x.unordered_pmwr_gc_unknown_00_96) {
        g.oa.push(o + 96)
    }
    if (x.unordered_pmwr_gc_interface_104) {
        g.oa.push(o + 104)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_unknown_00_96, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 96, e, 'none']);
    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_interface_104, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 104, e, 'none']);
    switch (x.u32_120) {
    case 0:
        if (x.section_128) {
            g.oa.push(o + 128)
        }
        g.temp_pmwr_gc_world_offset_holder.push([x.section_128, g.pmwr_gc_world_20_12t4_array, ex_pmwr_gc_world_20_12t4, g.unordered_ref.pmwr_gc_world_20_12t4, o + 128, e, 'none'])

        // e = ex_s_offset(o + 128, e, ex_pmwr_gc_world_20_12t4, x.section_128, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 128, e, ex_pmwr_gc_world_20_12t4_128t1, x.section_128, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t4_128t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t5(o, x) {
    let e = o + divisible(112, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    sf32(o + 52, x.f32_52)
    sf32(o + 72, x.f32_72)
    sf32(o + 92, x.f32_92)
    su8(o + 96, x.u8_96)

    g.temp_pmwr_gc_world_offset_holder_5.push([x.ordered_pmwr_gc_models_100, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 100, e, 'none', true, "model"]);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8(o, e, x) {
    // let e = o + 80

    ex_type_entry_header(o, x.section_00[0])

    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)

    switch (x.u32_32) {
    case 0:
        e = ex_s_offset(o + 72, e, ex_pmwr_gc_world_20_12t8_72, x.section_72, 'down');
        break;
    }

    switch (x.u32_36) {
    case 1:
        e = ex_s_offset(o + 76, e, ex_pmwr_gc_world_20_12t8_76t1, x.section_76, 'up');
        break;
    case 7:
        e = ex_s_offset(o + 76, e, ex_pmwr_gc_world_20_12t8_76t7, x.section_76, 'up');
        break;
    case 8:
        e = ex_s_offset(o + 76, e, ex_pmwr_gc_world_20_12t8_76t8, x.section_76, 'up');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8_72(o, x) {
    let buffer = convert_base64_arraybuffer(x.buffer)
    let e = o + buffer.byteLength

    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8_76t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    su32(o + 12, x.u32_12)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8_76t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8_76t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    //  e = ex_ml(x.unordered_pmwr_gc_world_20_12t8_76t8_04_04,g.pmwr_gc_world_20_12t8_76t8_04_array ,ex_pmwr_gc_world_20_12t8_76t8_04,g.unordered_ref.pmwr_gc_world_20_12t8_76t8_04, o + 4, e, 'down');
    // e = ex_ml(x.unordered_pmwr_gc_world_20_12t8_76t8_08_08,g.pmwr_gc_world_20_12t8_76t8_08_array ,ex_pmwr_gc_world_20_12t8_76t8_08,g.unordered_ref.pmwr_gc_world_20_12t8_76t8_08, o + 8, e, 'down');

    if (x.unordered_pmwr_gc_world_20_12t8_76t8_04_04) {
        g.oa.push(o + 4)
    }
    if (x.unordered_pmwr_gc_world_20_12t8_76t8_08_08) {
        g.oa.push(o + 8)
    }
    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_world_20_12t8_76t8_04_04, g.pmwr_gc_world_20_12t8_76t8_04_array, ex_pmwr_gc_world_20_12t8_76t8_04, g.unordered_ref.pmwr_gc_world_20_12t8_76t8_04, o + 4, e, 'none']);
    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_world_20_12t8_76t8_08_08, g.pmwr_gc_world_20_12t8_76t8_08_array, ex_pmwr_gc_world_20_12t8_76t8_08, g.unordered_ref.pmwr_gc_world_20_12t8_76t8_08, o + 8, e, 'none']);

    // g.temp_pmwr_gc_world_offset_holder.push([o + 4, e, ex_pmwr_gc_world_20_12t8_76t8_04, x.section_04, 'down']);
    // g.temp_pmwr_gc_world_offset_holder.push([o + 8, e, ex_pmwr_gc_world_20_12t8_76t8_08, x.section_08, 'down']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8_76t8_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t8_76t8_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)
    su16(o + 4, x.u16_04)
    sf32(o + 8, x.f32_08)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_pmwr_gc_unknown_00_16, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 16, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_20, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 20, e, 'down');

    // g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_unknown_00_16, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 16, e, 'down']);
    // g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_unknown_00_20, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 20, e, 'down']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t10(o, x) {
    let e = o + divisible(96, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    su8(o + 76, x.u8_76)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)

    if (x.unordered_pmwr_gc_activator_64) {
        g.oa.push(o + 64)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_activator_64, g.pmwr_gc_activator_array, ex_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator, o + 64, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t11(o, x) {
    let e = o + divisible(80, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    su32(o + 64, x.u32_64)

    e = ex_ml(x.section_68, g.pmwr_gc_world_20_12t0_array, ex_pmwr_gc_world_20_12t0, g.unordered_ref.pmwr_gc_world_20_12t0, o + 68, e, 'down', true);

    // e = ex_s_offset(o + 68, e, ex_pmwr_gc_world_20_12t0, x.section_68, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t13(o, x) {
    let e = o + divisible(96, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    sf32(o + 68, x.f32_68)
    su8(o + 73, x.u8_73)
    su8(o + 77, x.u8_77)

    if (x.unordered_pmwr_gc_idk_64) {
        g.oa.push(o + 64)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_idk_64, g.pmwr_gc_idk_array, ex_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk, o + 64, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t14(o, x) {
    let e = o + divisible(80, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    sf32(o + 72, x.f32_72)
    su8(o + 76, x.u8_76)

    if (x.unordered_pmwr_gc_strange_64) {
        g.oa.push(o + 64)
    }
    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_strange_64, g.pmwr_gc_strange_array, ex_pmwr_gc_strange, g.unordered_ref.pmwr_gc_strange, o + 64, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_20_12t15(o, x) {
    let e = o + divisible(80, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    sf32(o + 60, x.f32_60)
    //?
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 72, x.u8_72)
    su8(o + 73, x.u8_73)
    su8(o + 74, x.u8_74)
    su8(o + 75, x.u8_75)

    if (x.unordered_pmwr_gc_object_56) {
        g.oa.push(o + 56)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_object_56, g.pmwr_gc_object_array, ex_pmwr_gc_object, g.unordered_ref.pmwr_gc_object, o + 56, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_08(o, x) {
    let e = o + divisible(64, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52);
    if (x.section_20.length) {
        su32(o + 24, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_world_08_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    } else {
        su32(o + 20, o)
        g.oa.push(o + 20)
    }

    if (x.section_16.length) {
        su32(o + 28, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 80, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_world_08_16(temp_offset + (i * 80), e, x.section_16[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_08_20(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_08_16(o, e, x) {
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +64, x.u32_64)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_world_08_16_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 4, g.divisibility)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_pmwr_gc_world_08_16_12(temp_offset + (i * 4), e, x.section_60[i])
        }
        ;
    }
    ;if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 4, g.divisibility)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_pmwr_gc_world_08_16_12(temp_offset + (i * 4), e, x.section_68[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_08_16_12(o, e, x) {

    ex_ml(x.section_00, g.pmwr_gc_world_20_12t8_array, ex_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8, o + 0, e, 'down', true)
    // e = ex_ml();

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +04, x.u32_04)
    su32(o + 8, x.u32_08)
    let tempsectionsection = []

    if (x.section_00.length) {
        su32(o + 4, x.section_00.length)
        su32(o + 0, e)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_00.length * 128, g.divisibility)
        for (let i = 0; i < x.section_00.length; i++) {
            e = ex_pmwr_gc_world_12_00(temp_offset + (i * 128), e, x.section_00[i])
        }
        ;
    }

    for (let i = 0; i < tempsectionsection.length; i++) {
        e = ex_pmwr_gc_world_12_00_temp(i, e)
    }

    g.debug && ex_debug(o, x.sec_id);
    return e

    function ex_pmwr_gc_world_12_00(o, e, x) {
        ex_type_entry_header(o, x.section_00[0])

        sf32(o + 32, x.f32_32)
        sf32(o + 36, x.f32_36)
        sf32(o + 40, x.f32_40)
        sf32(o + 44, x.f32_44)
        //amount?   su32(o +48, x.u32_48)
        //amount?   su32(o +60, x.u32_60)
        sf32(o + 68, x.f32_68)
        //?
        su16(o + 72, x.u16_72)
        //?
        su16(o + 74, x.u16_74)
        su8(o + 76, x.u8_76)
        sf32(o + 80, x.f32_80)
        su32(o + 116, x.u32_116)

        if (x.section_64.length) {
            su32(o + 60, x.section_64.length)
            su32(o + 64, e)
            g.oa.push(o + 64)
            let temp_offset = e
            e += divisible(x.section_64.length * 4, g.divisibility)
            for (let i = 0; i < x.section_64.length; i++) {
                e = ex_pmwr_gc_world_12_00_64(temp_offset + (i * 4), e, x.section_64[i])
            }
            ;
        }
        tempsectionsection.push([o, x]);
        if (x.section_52.length) {}
        ;if (x.section_56.length) {}
        g.debug && ex_debug(o, x.sec_id);
        return e
    }

    function ex_pmwr_gc_world_12_00_temp(i, e) {

        ;if (tempsectionsection[i][1].section_52.length) {
            su32(tempsectionsection[i][0] + 48, tempsectionsection[i][1].section_52.length)
            su32(tempsectionsection[i][0] + 52, e)
            g.oa.push(tempsectionsection[i][0] + 52)
            let temp_offset = e
            e += divisible(tempsectionsection[i][1].section_52.length * 4, g.divisibility)
            for (let ii = 0; ii < tempsectionsection[i][1].section_52.length; ii++) {
                e = ex_pmwr_gc_world_12_00_52(temp_offset + (ii * 4), e, tempsectionsection[i][1].section_52[ii])
            }
            ;

        }

        ;if (tempsectionsection[i][1].section_56.length) {
            su32(tempsectionsection[i][0] + 48, tempsectionsection[i][1].section_56.length)
            su32(tempsectionsection[i][0] + 56, e)
            g.oa.push(tempsectionsection[i][0] + 56)
            let temp_offset = e
            e += divisible(tempsectionsection[i][1].section_56.length * 4, g.divisibility)
            for (let ii = 0; ii < tempsectionsection[i][1].section_56.length; ii++) {
                e = ex_pmwr_gc_world_12_00_56(temp_offset + (ii * 4), e, tempsectionsection[i][1].section_56[ii])
            }
            ;
        }

        return e

    }

}

function ex_pmwr_gc_world_12_00_64(o, e, x) {
    su32(o + 0, x.u32_00)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_12_00_52(o, e, x) {
    sf32(o + 0, x.f32_00)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_12_00_56(o, e, x) {
    su32(o + 0, x.u32_00)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_32(o, e, x) {

    if (x.unordered_pmwr_gc_gate_00) {
        g.oa.push(o + 0)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_gate_00, g.pmwr_gc_gate_array, ex_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate, o + 0, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_24(o, x) {
    let e = o + divisible(112, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_world_24_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_world_24_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_24_04(o, e, x) {

    if (x.unordered_pmwr_gc_flag_00) {
        g.oa.push(o + 0)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_flag_00, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 0, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_24_12(o, e, x) {

    if (x.unordered_pmwr_gc_var_00) {
        g.oa.push(o + 0)
    }

    g.temp_pmwr_gc_world_offset_holder.push([x.unordered_pmwr_gc_var_00, g.pmwr_gc_var_array, ex_pmwr_gc_var, g.unordered_ref.pmwr_gc_var, o + 0, e, 'none']);

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_texture_animation_section(o, e, x) {
    e = ex_s_offset(o + 0, e, ex_pmwr_gc_pmwr_gc_texture_anim_1, x.section_00, 'none');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_pmwr_gc_texture_anim_1(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_pmwr_gc_texture_anim_1_1, x.section_04, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_pmwr_gc_texture_anim_1_2(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_pmwr_gc_texture_anim_1_3(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_pmwr_gc_texture_anim_1_1(o, x) {
    let e = o + 32
    //amount?   su32(o +00, x.u32_00)

    su8(o + 11, x.u8_11)
    su32(o + 20, x.u32_20)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_pmwr_gc_texture_anim_1_1_1(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_pmwr_gc_texture_anim_1_1_1(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_pmwr_gc_texture_anim_1_2(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_pmwr_gc_texture_anim_1_3(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_textures(o, e, x) {

    // e+= x.padding

    e = ex_byte_alignment_testing(e)

    su8(o + 0, x.type)
    su8(o + 1, x.mipmaps)
    su8(o + 2, x.x)
    su8(o + 3, x.y)

    // dyn_string(o + 12 + (i * 64), x.name, mid)

    ex_string(o + 12, o + 12, x.name, 1, 0)

    su32(o + 8, e)

    g.oa.push(o + 8)

    let iii = 0
    for (let ii = 0; ii < x.pmwr_gc_texture.length; ii++) {
        let iii = 0
        let buffer = convert_base64_arraybuffer(x.pmwr_gc_texture[ii])

        new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), e + iii)
        iii += buffer.byteLength

        if (ii + 1 === x.pmwr_gc_texture.length) {
            iii += x.padding
            // iii = divisible(iii, 32)
        }

        // iii = divisible(iii, 16)
        e += iii;

    }
    // iii = divisible(iii, 32)
    // end_block += iii;

    e = ex_byte_alignment_testing(e)

    if (x.alpha.length) {
        let buffer = convert_base64_arraybuffer(x.alpha[0])
        su32(o + 4, e)
        g.oa.push(o + 4)

        new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), e)

        e += buffer.byteLength

    }

    return e

}

function ex_sound(o, XFA, m) {
    o -= m
    //calculate block length
    let e = o + divisible(XFA.length * 4, 32)
    let base_offset = e
    e += XFA.length * 32

    // e = ex_byte_alignment_testing(e)

    for (let i = 0; i < XFA.length; i++) {
        su32(o + (i * 4), i * 32)
        e = dyn_sound_00(base_offset + (i * 32), XFA[i], e)
    }

    return e + m

    function dyn_sound_00(offset, XFA, e) {
        e = e + XFA.padding
        let buffer = convert_base64_arraybuffer(XFA.sound_data[0])

        su32(offset, e - base_offset)
        su32(offset + 4, buffer.byteLength)
        su32(offset + 8, XFA.pmwr_gc_unknown1)
        su32(offset + 12, XFA.soundsamplerate)
        su32(offset + 16, XFA.pmwr_gc_unknown2)
        su32(offset + 20, XFA.pmwr_gc_unknown3)

        e = dyn_sound_00_00(e, buffer)

        return e
    }

    function dyn_sound_00_00(offset, buffer) {
        new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), offset)

        return offset + buffer.byteLength
    }

}

function ex_pmwr_gc_share(o, x) {
    // calculate how many pmwr_gc_models
    // first offset is always 0?

    let end_block = (x.pmwr_gc_models.length)
    let temp_offset = (end_block * 4) + o
    end_block = divisible(end_block, 8)
    end_block = (end_block * 4) + o

    let share_model_offset_index_list = []

    for (let i = 0; i < x.pmwr_gc_models.length; i++) {
        su32(o + (i * 4), end_block)
        g.model_patch_array.push([o + (i * 4), i, 0])
        share_model_offset_index_list.push(end_block)
        // FIX imperfect ?
        end_block = dyn_model(end_block, x.pmwr_gc_models[i])

    }

    if (g.ordered_ref.pmwr_gc_texture_animation.length) {
        //this is calculated later
        g.tex_anims = end_block
        g.oa.push(g.tex_anims)
        end_block += divisible(g.ordered_ref.pmwr_gc_texture_animation.length * 12, g.divisibility)
    }

    end_block = ex_byte_alignment_testing(end_block)

    if (g.ordered_ref.pmwr_gc_textures.length) {
        dynamic_buffer = datapack_buffer

        su32(20, g.ordered_ref.pmwr_gc_textures.length)
        su32(24, end_block)
        dynamic_buffer = ordered_buffer

        let temp_offset = end_block
        end_block += divisible(g.ordered_ref.pmwr_gc_textures.length * 64, g.divisibility) + g.ordered_ref.pmwr_gc_texturepadding
        for (let i = 0; i < g.ordered_ref.pmwr_gc_textures.length; i++) {
            end_block = ex_pmwr_gc_textures(temp_offset + (i * 64), end_block, g.ordered_ref.pmwr_gc_textures[i])
        }
        ;
    }

    end_block = ex_byte_alignment_testing(end_block)
    if (x.file_specific.length) {
        end_block = share_low_header(end_block - 16, x.file_specific[0])
    }

    return end_block

    function share_low_header(o, x) {
        let e = o + 32

        e = ex_string(o + 0, e, x.name)

        if (x.pmwr_gc_texture_array.length) {
            su32(o + 4, x.pmwr_gc_texture_array.length)
            su32(o + 8, e)
            g.oa.push(o + 8)
            let temp_offset = e
            e += divisible(x.pmwr_gc_texture_array.length * 4, g.divisibility)
            for (let i = 0; i < x.pmwr_gc_texture_array.length; i++) {
                sharegetpmwr_gc_texture(temp_offset + (i * 4), e, x.pmwr_gc_texture_array[i])
            }
            ;
        }

        if (x.sound_array.length) {
            su32(o + 12, x.sound_array.length)
            su32(o + 16, e)
            g.oa.push(o + 16)
            let temp_offset = e
            e += divisible(x.sound_array.length * 4, g.divisibility)
            for (let i = 0; i < x.sound_array.length; i++) {
                sharegetsound(temp_offset + (i * 4), e, x.sound_array[i])
            }
            ;
        }

        if (x.model_array.length) {
            su32(o + 20, x.model_array.length)
            su32(o + 24, e)
            g.oa.push(o + 24)
            let temp_offset = e
            e += divisible(x.model_array.length * 4, g.divisibility)
            for (let i = 0; i < x.model_array.length; i++) {
                sharegetmodel(temp_offset + (i * 4), e, x.model_array[i])
            }
            ;
        }

        return e
    }

    function sharegetpmwr_gc_texture(o, e, x) {
        ex_patch(o, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture);
    }
    function sharegetsound(o, e, x) {
        ex_patch(o, g.sound_patch_array, x.pmwr_gc_texture);
    }
    function sharegetmodel(o, e, x) {// e = ex_ml(x.ordered_pmwr_gc_models_00, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 0, e, 'none',true,"model",temp_offset);

    // ex_patch(o, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture);
    }

}

function ex_pmwr_gc_model_animation_2(offset, XFA) {
    offset = ex_byte_alignment_testing(offset)

    let end_block = offset + 32

    su32(offset + 4, XFA.u32_04)
    su32(offset + 8, XFA.u32_08)

    if (XFA.section_16.length) {
        let temp_offset = end_block
        su32(offset + 0, XFA.section_16.length)
        su32(offset + 16, end_block)
        g.oa.push(offset + 16)
        end_block += XFA.section_16.length * 32

        for (let i = 0; i < XFA.section_16.length; i++) {
            dyn_pmwr_gc_model_animation_2_16(temp_offset + (i * 32), XFA.section_16[i])
        }
    }

    return end_block

    function dyn_pmwr_gc_model_animation_2_16(offset, XFA) {

        sf32(offset + 0, XFA.f32_00)
        sf32(offset + 4, XFA.f32_04)
        sf32(offset + 8, XFA.f32_08)
        sf32(offset + 12, XFA.f32_12)
        sf32(offset + 16, XFA.f32_16)
        sf32(offset + 20, XFA.f32_20)
        sf32(offset + 24, XFA.f32_24)
        su8(offset + 28, XFA.u8_28)
        su8(offset + 29, XFA.u8_29)
        su8(offset + 30, XFA.u8_30)
        su8(offset + 31, XFA.u8_31)

    }

}

function ex_pmwr_gc_model_animation_1(o, x) {
    // console.log(o)
    o = ex_byte_alignment_testing(o)
    globalThis.exmodeltemp_divisible = o

    if (o === 15516800) {
        console.log('y')
    }

    let e = o + 64
    su32(o + 0, x.u32_00)
    //?
    su32(o + 4, x.u32_04)
    //?
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 48, x.u32_48)
    //?
    su32(o + 56, x.u32_56)
    //?
    su32(o + 60, x.u32_60)
    //?
    if (o === 10874492) {
        console.log('?')
    }

    if (x.u32_00 === 3) {
        if (x.section_24.length) {// g.oa.push(o + 24)
        //this comes first for some reason
        }

        e = ex_s_offset(o + 28, e, ex_pmwr_gc_model_animation_1_28t3, x.section_28, 'down');
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_model_animation_1_24t3, x.section_24, 'down');

    }

    // switch (x.u32_00) {
    // case 1:
    // case 3:
    // case 4:
    //     if (x.u32_16 === 1) {
    //         e = ex_s_offset(o + 28, e, ex_pmwr_gc_model_animation_1_28t1, x.section_28, 'down');
    //     } else if (x.u32_16 === 28) {
    //         e = ex_s_offset(o + 28, e, ex_pmwr_gc_model_animation_1_28t28, x.section_28, 'down');
    //     }
    //     break;
    // case 5:
    //     su32(o + 28, x.section_28)
    //     break;
    // }

    switch (x.u32_00) {
    case 1:
    case 4:
        if (x.u32_16 === 1) {
            e = ex_s_offset(o + 24, e, ex_pmwr_gc_model_animation_1_24t1, x.section_24, 'down');
        } else if (x.u32_16 === 28) {
            e = ex_s_offset(o + 24, e, ex_pmwr_gc_model_animation_1_24t28, x.section_24, 'down');
        }
        break;
    case 3:
        break;
    case 5:
        su32(o + 24, x.section_24)
    }

    switch (x.u32_00) {
    case 1:
    case 4:
        if (x.u32_16 === 1) {
            e = ex_s_offset(o + 28, e, ex_pmwr_gc_model_animation_1_28t1, x.section_28, 'down');
        } else if (x.u32_16 === 28) {
            e = ex_s_offset(o + 28, e, ex_pmwr_gc_model_animation_1_28t28, x.section_28, 'down');
        }
        break;
    case 3:
        break
    case 5:
        su32(o + 28, x.section_28)
        break;
    }

    if (x.section_32.length) {
        let buffer = convert_base64_arraybuffer(x.section_32[0].temp_buffer)

        su32(o + 40, buffer.byteLength / 4)
        e = ex_s_offset(o + 32, e, ex_pmwr_gc_model_animation_1_32, x.section_32, 'down');
    }
    replacement_divisibility(e, e + x.section_32_padding, e, 205)
    e += x.section_32_padding

    switch (x.u32_00) {
    case 1:
    case 4:
        if (x.section_32.length) {
            let buffer = convert_base64_arraybuffer(x.section_32[0].temp_buffer)

            e += divisible(buffer.byteLength, g.divisibility) - buffer.byteLength
        }
        e = ex_s_offset(o + 44, e, ex_pmwr_gc_model_animation_1_44, x.section_44, 'down');
        break;
    case 3:
    case 5:
        su32(o + 44, x.section_44)
        break;
    }

    switch (x.u32_00) {
    case 1:
    case 4:
        e = ex_s_offset(o + 36, e, ex_pmwr_gc_model_animation_1_36, x.section_36, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 36, e, ex_pmwr_gc_model_animation_1_36t3, x.section_36, 'down');
        break;
    case 5:
        su32(o + 36, x.section_36)
        break;
    }

    e = ex_byte_alignment_testing(e)
    switch (x.u32_04) {
    case 291:
    case 35:
        e = ex_s_offset(o + 52, e, ex_pmwr_gc_model_animation_1_52t35, x.section_52, 'up');
        break;
    case 163:
    case 419:
        e = ex_s_offset(o + 52, e, ex_pmwr_gc_model_animation_1_52t163, x.section_52, 'up');
        break;
    case 11:
    case 67:
        su32(o + 52, x.section_52)

        break;
    }

    // e += x.padding

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_24t1(o, x) {
    let e = o + 4
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_24t28(o, x) {
    let e = o + 28
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_model_animation_1_28t1(o, x) {
    let e = o + 12
    su16(o + 0, x.u16_00)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_28t3(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    // su8(o + 2, x.u8_02)
    // su8(o + 3, x.u8_03)
    // su8(o + 4, x.u8_04)
    // su8(o + 5, x.u8_05)
    // su8(o + 6, x.u8_06)
    // su8(o + 7, x.u8_07)
    // su8(o + 8, x.u8_08)
    // su8(o + 9, x.u8_09)
    // su8(o + 10, x.u8_10)
    // su8(o + 11, x.u8_11)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_model_animation_1_28t28(o, x) {
    let e = o + 68
    su16(o + 0, x.u16_00)
    su16(o + 2, x.u16_02)
    su16(o + 4, x.u16_04)
    su16(o + 6, x.u16_06)
    su16(o + 8, x.u16_08)
    su16(o + 10, x.u16_10)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    su16(o + 24, x.u16_24)
    su16(o + 26, x.u16_26)
    su16(o + 28, x.u16_28)
    su16(o + 30, x.u16_30)
    su16(o + 32, x.u16_32)
    su16(o + 34, x.u16_34)
    su16(o + 36, x.u16_36)
    su16(o + 38, x.u16_38)
    su16(o + 40, x.u16_40)
    su16(o + 42, x.u16_42)
    su16(o + 44, x.u16_44)
    su16(o + 46, x.u16_46)
    su16(o + 48, x.u16_48)
    su16(o + 50, x.u16_50)
    su16(o + 52, x.u16_52)
    su16(o + 54, x.u16_54)
    su32(o + 56, x.u16_56)
    su32(o + 60, x.u16_60)
    su32(o + 64, x.u16_64)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_24t3(o, x) {
    let e = o + 4
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_32(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o
}
function ex_pmwr_gc_model_animation_1_44(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o
}
function ex_pmwr_gc_model_animation_1_36(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o

}
function ex_pmwr_gc_model_animation_1_36t3(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o
}
function ex_pmwr_gc_model_animation_1_52t35(o, x) {
    let e = o + 36
    if (o === 6799356) {
        console.log('?')
    }
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +08, x.u32_08)

    e = ex_byte_alignment_testing(e)

    replacement_divisibility(e, e + x.padding, e, 205)

    e += x.padding

    if (x.section_12.length) {
        let buffer = convert_base64_arraybuffer(x.section_12[0].temp_buffer)
        let temp_offset = e

        su32(o + 0, buffer.byteLength / 2)
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_model_animation_1_52t35_12, x.section_12, 'down');

    } else {
        su32(o + 12, x.section_12)
    }

    replacement_divisibility(e, e + x.padding_12, e, 205)
    e += x.padding_12

    if (o === 12520468) {
        console.log('?')
    }

    e = ex_byte_alignment_testing(e);
    if (x.section_24.length) {
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_model_animation_1_52t35_24, x.section_24, 'down');
    } else {
        su32(o + 24, x.section_24)
    }
    e = ex_byte_alignment_testing(e)
    replacement_divisibility(e, e + x.padding_24, e, 205)
    e += x.padding_24

    if (x.section_20.length) {
        let buffer = convert_base64_arraybuffer(x.section_20[0].temp_buffer)
        let temp_offset = e

        su32(o + 4, buffer.byteLength / 2)
        e = ex_s_offset(o + 20, e, ex_pmwr_gc_model_animation_1_52t35_20, x.section_20, 'down');

    } else {
        su32(o + 20, x.section_20)
    }

    replacement_divisibility(e, e + x.padding_20, e, 205)
    e += x.padding_20

    e = ex_byte_alignment_testing(e)

    if (x.section_28.length) {
        e = ex_s_offset(o + 28, e, ex_pmwr_gc_model_animation_1_52t35_28, x.section_28, 'down');
    } else {
        su32(o + 28, x.section_28)
    }
    e = ex_byte_alignment_testing(e)
    replacement_divisibility(e, e + x.padding_28, e, 205)

    e += x.padding_28

    if (x.section_16.length) {
        let buffer = convert_base64_arraybuffer(x.section_16[0].temp_buffer)
        su32(o + 8, buffer.byteLength / 2)
        e = ex_s_offset(o + 16, e, ex_pmwr_gc_model_animation_1_52t35_16, x.section_16, 'down');
    } else {
        su32(o + 16, x.section_16)
    }

    // e = ex_byte_alignment_testing(e)
    replacement_divisibility(e, e + x.padding_16, e, 205)

    e += x.padding_16

    if (x.section_32.length) {
        let buffer = convert_base64_arraybuffer(x.section_32[0].temp_buffer)
        let temp_offset = e

        ex_s_offset(o + 32, e, ex_pmwr_gc_model_animation_1_52t35_32, x.section_32, 'down');

        let end = e + buffer.byteLength - exmodeltemp_divisible

        e = e + buffer.byteLength
    } else {
        su32(o + 32, x.section_32)
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_52t35_12(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);
    return buffer.byteLength + o

}
function ex_pmwr_gc_model_animation_1_52t35_24(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);
    return buffer.byteLength + o

}
function ex_pmwr_gc_model_animation_1_52t35_20(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o

}
function ex_pmwr_gc_model_animation_1_52t35_28(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o
}
function ex_pmwr_gc_model_animation_1_52t35_16(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o
}
function ex_pmwr_gc_model_animation_1_52t35_32(o, x) {
    let buffer = convert_base64_arraybuffer(x.temp_buffer)
    new Uint8Array(dynamic_buffer).set(new Uint8Array(buffer), o)

    g.debug && ex_debug(o, x.sec_id);

    return buffer.byteLength + o
}
function ex_pmwr_gc_model_animation_1_52t163(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_00)
    //amount?
    su8(o + 4, x.u8_04)
    //amount?

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += x.section_08.length
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_model_animation_1_52t163_08(temp_offset + (i * 1), e, x.section_08[i])
        }
        ;
    }
    if (x.u8_00 === 0) {
        x.section_12
        su32(o + 12, x.section_12)
    } else {

        if (x.section_12.length) {
            su32(o + 12, e)
            g.oa.push(o + 12)
            let temp_offset = e
            e += x.section_12.length
            for (let i = 0; i < x.section_12.length; i++) {
                e = ex_pmwr_gc_model_animation_1_52t163_12(temp_offset + (i * 1), e, x.section_12[i])
            }
            ;
        }
    }
    // ;e = ex_s_offset(o + 12, e, ex_pmwr_gc_model_animation_1_52t163_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_52t163_08(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_animation_1_52t163_12(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function dyn_model(offset, XFA) {
    let mid = g.m
    // pmwr_gc_idk
    let end_block = offset + 64

    su16(offset, XFA.magic)
    sf32(offset + 16, XFA.visibility.x1)
    sf32(offset + 20, XFA.visibility.y1)
    sf32(offset + 24, XFA.visibility.z1)
    sf32(offset + 28, XFA.visibility.w1)
    sf32(offset + 32, XFA.visibility.x2)
    sf32(offset + 36, XFA.visibility.y2)
    sf32(offset + 40, XFA.visibility.z2)
    sf32(offset + 44, XFA.visibility.w2)
    sf32(offset + 48, XFA.visibility.x3)
    sf32(offset + 52, XFA.visibility.y3)
    sf32(offset + 56, XFA.visibility.z3)
    sf32(offset + 60, XFA.visibility.w3)

    if (XFA.sections.length) {
        let temp_offset = end_block
        g.oa.push(offset + 4)
        su16(offset + 2, XFA.sections.length)
        su32(offset + 4, offset + 64 - mid)
        g.oa.push(offset + 12)
        end_block += divisible(XFA.sections.length * 8, 16)
        let render_offset = end_block
        end_block += divisible(XFA.sections.length * 4, 16)

        for (let i = 0; i < XFA.sections.length; i++) {
            end_block = dyn_model_04(temp_offset + (i * 8), XFA.sections[i], end_block)
        }

        su32(offset + 12, render_offset - mid)

        for (let i = 0; i < XFA.sections.length; i++) {
            sf32(render_offset + (i * 4), XFA.sections[i].render)
        }

        if (XFA.second_names.length) {
            let start_offset = end_block

            for (let i = 0; i < XFA.second_names.length; i++) {
                end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)

            }
            end_block += 1

            end_block = start_offset + divisible(end_block - start_offset, 16)

        }

        if (XFA.second_names.length === 0) {
            end_block += XFA.name_padding
        }

        end_block = ex_byte_alignment_testing(end_block)
        su32(offset + 8, end_block - mid)
        g.oa.push(offset + 8)

        end_block = dyn_string(end_block, XFA.name, mid)

        return end_block
        // end model

        function dyn_model_04(offset, XFA, end_block) {

            if (XFA.sub_section.length) {
                let temp_offset = end_block
                su32(offset + 0, XFA.sub_section.length)
                su32(offset + 4, end_block - mid)
                g.oa.push(offset + 4)
                end_block += divisible(XFA.sub_section.length * 4, 16)

                for (let i = 0; i < XFA.sub_section.length; i++) {
                    end_block = dyn_model_04_04(temp_offset + (i * 4), XFA.sub_section[i], end_block)
                }

            }
            return end_block

        }

        function dyn_model_04_04(offset, XFA, end_block) {

            su32(offset, end_block - mid)
            g.oa.push(offset)
            end_block = dyn_model_04_04_00(end_block, XFA)

            return end_block

            // let end_block = jump_offset + divisible(XFA.sub_section.length * 4, 16)
            // let sub_sub_section_end = divisible(XFA.sub_section.length * 4, 16) + offset

            // su32(offset, XFA.sub_section.length )
            // su32(offset + 4, jump_offset - mid )

            // for (let i = 0; i < XFA.sub_section.length; i++) {
            //     end_block = dyn_model_04_04_00(jump_offset + (i * 4), XFA.sub_section[i], sub_sub_section_end, end_block)
            // }

            // return end_block
        }

        function dyn_model_04_04_00(offset, XFA) {
            end_block = offset + 96

            su32(offset + 0, XFA.pmwr_gc_unknown_00)
            su32(offset + 8, XFA.pmwr_gc_unknown_08)
            su8(offset + 12, XFA.pmwr_gc_unknown_12)
            su8(offset + 13, XFA.pmwr_gc_unknown_13)
            su8(offset + 15, XFA.pmwr_gc_unknown_15)
            su32(offset + 16, XFA.pmwr_gc_unknown_16)
            su32(offset + 24, XFA.pmwr_gc_unknown_24)
            su32(offset + 28, XFA.pmwr_gc_unknown_28)
            su8(offset + 44, XFA.pmwr_gc_unknown_44)
            su8(offset + 45, XFA.pmwr_gc_unknown_45)
            su8(offset + 46, XFA.pmwr_gc_unknown_46)
            su8(offset + 47, XFA.pmwr_gc_unknown_47)
            su8(offset + 48, XFA.pmwr_gc_unknown_48)
            su8(offset + 49, XFA.pmwr_gc_unknown_49)
            su8(offset + 52, XFA.pmwr_gc_unknown_52)
            su8(offset + 53, XFA.pmwr_gc_unknown_53)
            su8(offset + 54, XFA.pmwr_gc_unknown_54)
            su8(offset + 55, XFA.pmwr_gc_unknown_55)
            su32(offset + 56, XFA.pmwr_gc_unknown_56)
            su32(offset + 60, XFA.pmwr_gc_unknown_60)
            su32(offset + 64, XFA.pmwr_gc_unknown_64)
            su32(offset + 88, XFA.pmwr_gc_unknown_88)

            if (XFA.pmwr_gc_texture !== -1) {
                ex_patch(offset + 40, g.pmwr_gc_texture_patch_array, XFA.pmwr_gc_texture)
            } else {
                su16(offset + 40, 65535)
            }
            if (XFA.animation !== -1) {
                su16(offset + 36, XFA.pmwr_gc_texture[0][1])
                // console.log(XFA.pmwr_gc_texture,XFA.pmwr_gc_texture[0],XFA.pmwr_gc_texture[0][1])
                su16(offset + 38, 52428)
                g.animation_patch_array.push([offset + 36, XFA.animation[0][1], XFA.animation[0][2]])
            }
            if (XFA.pmwr_gc_unknown_24_animation !== -1) {
                g.animation_patch_array.push([offset + 24, XFA.pmwr_gc_unknown_24_animation[0][1], XFA.pmwr_gc_unknown_24_animation[0][2]])
            }

            let v_buffer = convert_base64_arraybuffer(XFA.v_array)

            if (v_buffer.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 68)
                su32(offset + 68, end_block - mid)
                end_block += divisible((v_buffer.byteLength), 16)

                new Uint8Array(dynamic_buffer).set(new Uint8Array(v_buffer), temp_offset)

            }

            let c_buffer = convert_base64_arraybuffer(XFA.c_array)

            if (c_buffer.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 72)
                su32(offset + 72, end_block - mid)
                end_block += divisible((c_buffer.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(c_buffer), temp_offset)

            }

            let n_buffer = convert_base64_arraybuffer(XFA.n_array)

            if (n_buffer.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 76)
                su32(offset + 76, end_block - mid)
                end_block += divisible((n_buffer.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(n_buffer), temp_offset)

            }
            let u_buffer = convert_base64_arraybuffer(XFA.u_array)

            if (u_buffer.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 80)
                su32(offset + 80, end_block - mid)
                end_block += divisible((u_buffer.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(u_buffer), temp_offset)

            }
            let s_buffer = convert_base64_arraybuffer(XFA.s_array)

            if (s_buffer.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 84)
                su32(offset + 84, end_block - mid)
                end_block += divisible((s_buffer.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(s_buffer), temp_offset)

            }

            if (XFA.section_92.length) {
                g.oa.push(offset + 92)
                su32(offset + 92, end_block - mid)
                end_block = dyn_model_04_04_00_92(end_block, XFA.section_92[0])
            }

            g.debug && ex_debug(offset, "MODL");

            return end_block
        }

        function dyn_model_04_04_00_92(offset, XFA) {
            let end_block = offset + 16

            su32(offset + 0, XFA.amount_00)

            if (XFA.section_12.length) {
                let temp_offset = end_block
                g.oa.push(offset + 12)
                su32(offset + 8, XFA.section_12.length)
                su32(offset + 12, end_block - mid)

                end_block += divisible(XFA.section_12.length, 16)
                for (let i = 0; i < XFA.section_12.length; i++) {
                    su8(temp_offset + i, XFA.section_12[i].pmwr_gc_unknown_00)
                }

            }

            return end_block
        }

        function ex_pmwr_gc_texture_animation_section(o, e, x) {

            e = ex_ml(x.unordered_pmwr_gc_pmwr_gc_texture_anim_1_00, g.pmwr_gc_pmwr_gc_texture_anim_1_array, ex_pmwr_gc_pmwr_gc_texture_anim_1, g.unordered_ref.pmwr_gc_pmwr_gc_texture_anim_1, o + 0, e, 'down');

            g.debug && ex_debug(o, x.sec_id);
            return e
        }

    }
}

function ex_pmwr_gc_models(o, x) {
    let e = o + 64
    let render_o = o
    su16(o + 0, x.u16_00)
    //amount?   su16(o +02, x.u16_02)
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
    sf32(o + 60, x.f32_60)

    if (x.section_04.length) {
        su16(o + 2, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_models_04(temp_offset + (i * 8), e, x.section_04[i], i)
        }
        ;
    }
    ;e = ex_string(o + 8, e, x.section_08)
    if (x.section_12.length) {
        su16(o + 2, x.section_12.length)
        su32(o + 12, render_o)
        g.oa.push(o + 12)
        let temp_offset = render_o
        for (let i = 0; i < x.section_12.length; i++) {
            render_o = ex_pmwr_gc_models_12(temp_offset + (i * 4), render_o, x.section_12[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e

    function ex_pmwr_gc_models_04(o, e, x, i) {
        //amount?   su32(o +00, x.u32_00)
        // calculate render
        let render_offset = 0
        if (i === 0) {
            render_offset = divisible(x.section_04.length * 4, 16)
            render_o = o + render_offset
        }

        if (x.section_04.length) {
            su32(o + 0, x.section_04.length)
            su32(o + 4, e + render_offset)
            g.oa.push(o + 4)
            let temp_offset = e
            e += divisible(x.section_04.length * 4, 16) + render_offset
            for (let i = 0; i < x.section_04.length; i++) {
                e = ex_pmwr_gc_models_04_04(temp_offset + (i * 4), e, x.section_04[i])
            }
            ;
        }
        g.debug && ex_debug(o, x.sec_id);
        return e
    }
}

function ex_pmwr_gc_models_12(o, e, x) {
    sf32(o + 0, x.f32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_models_04_04_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    ex_patch(o + 36, g.animation_patch_array, x.animation_36)
    ex_patch(o + 40, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_40)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)
    su8(o + 46, x.u8_46)
    su8(o + 47, x.u8_47)
    su8(o + 49, x.u8_49)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su8(o + 54, x.u8_54)
    su8(o + 55, x.u8_55)
    //amount?   su32(o +56, x.u32_56)
    su32(o + 60, x.u32_60)
    su32(o + 64, x.u32_64)
    su32(o + 88, x.u32_88)

    if (x.section_68.length) {
        // su32(o + 56, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 36, 16)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_pmwr_gc_models_04_04_00_68(temp_offset + (i * 36), e, x.section_68[i])
        }
        ;
    }
    ;if (x.section_72.length) {
        su32(o + 56, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 4, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_pmwr_gc_models_04_04_00_72(temp_offset + (i * 4), e, x.section_72[i])
        }
        ;
    }
    ;if (x.section_76.length) {
        // su32(o + 56, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 12, 16)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_pmwr_gc_models_04_04_00_76(temp_offset + (i * 12), e, x.section_76[i])
        }
        ;
    }
    ;if (x.section_80.length) {
        // su32(o + 56, x.section_80.length)
        su32(o + 80, e)
        g.oa.push(o + 80)
        let temp_offset = e
        e += divisible(x.section_80.length * 8, 16)
        for (let i = 0; i < x.section_80.length; i++) {
            e = ex_pmwr_gc_models_04_04_00_80(temp_offset + (i * 8), e, x.section_80[i])
        }
        ;
    }
    ;if (x.section_84.length) {
        // su32(o + 56, x.section_84.length)
        su32(o + 84, e)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 1, 16)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_pmwr_gc_models_04_04_00_84(temp_offset + (i * 1), e, x.section_84[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 92, e, ex_pmwr_gc_models_04_04_00_92, x.section_92, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_68(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_72(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_76(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_80(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_84(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_92(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_00)
    //amount?   su32(o +08, x.u32_08)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 1, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_models_04_04_00_92_12(temp_offset + (i * 1), e, x.section_12[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_models_04_04_00_92_12(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_byte_alignment_testing(o) {
    let e = o
    if (g.file_name === 'Autosave.xgc') {
        switch (o) {
        case 376:
        case 216384:
            e += 544
            break
        }
    }

    if (g.file_name === 'mcp.xgc') {
        switch (o) {
        case 224:
            e += 224
            break
        }
    }
    if (g.file_name === 'mcp.xpc') {
        switch (o) {
        case 32:
            e += 192
            break
        }
    }

    // if (g.file_name === 'gShared.xpc') {
    //     switch (o) {
    //     case 687972:
    //         o -= 16
    //         break
    //     case 950117:
    //         o += 16
    //         break
    //     }

    // }

    if (g.file_name === 'MCP.XPS') {
        switch (o) {
        case 4160:
            e += 192
            break
        }

    }
    if (g.file_name === 'AUTOSAVE.XPS') {
        switch (o) {
        case 4288:
        case 192704:
            e += 512
            break
        }

    }
    if (g.file_name === 'Autosave.xpc') {
        switch (o) {
        case 32:
            if (g.m === 208) {
                e += 512
            } else {
                e += 576
            }
            break
        }

    }
    // if (g.file_name === 'LOADING.XPS') {
    //     switch (o) {
    //     case 9184:
    //         e += 16
    //         break
    //     }

    // }

    if (g.file_name === 'mcp.xpp') {
        switch (o) {
        case 232:
            e += 192
            break
        }

    }

    if (g.file_name === 'MMa.xpc') {
        switch (o) {
        case 5796580:
            e += 8
            break
        }

    }
    if (g.file_name === "GMa.xpc") {
        switch (o) {
        case 6840016:
            e += 12
            break
        case 6857724:
            e += 16
            break
        }

    }
    if (g.file_name === "CCa.xpc") {
        switch (o) {
        case 9705448:
            e += 8
        }
    }
    // if (g.file_name === "Award.xpc") {
    //     switch (o) {
    //     case 1186356:
    //         e += 12
    //         break
    //     case 8201032:
    //         e += 8
    //         break

    //     }
    // }
    if (g.file_name === "SCa.xpc") {
        switch (o) {
        case 8334056:
            e += 8
            break
        }
    }
    if (g.file_name === "CG_l1.xpc") {
        switch (o) {
            // case 7925800:
            //     e += 8
            //     break
            // case 12648268:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "RH_l1.xpc") {
        switch (o) {
        case 8258152:
            e += 8
            break
            // case 13031660:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "FT_l1.xpc") {
        switch (o) {
        case 5497512:
            e += 8
            break
            // case 11302216:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "JS_L1.xpc") {
        switch (o) {
        case 7845884:
            e += 4
            break
        }
    }
    if (g.file_name === "WW_l1.xpc") {
        switch (o) {
        case 7170668:
            e += 4
            break
            // case 12063756:
            //     e += 16
            //     break
        }
    }
    if (g.file_name === "TF_l1.xpc") {
        switch (o) {
        case 6507032:
            e += 8
            break
            // case 12063756:
            //     e+=16
            //     break
        }
    }
    if (g.file_name === "FH_l1.xpc") {
        switch (o) {
            // case 11877468:
            //     e += 16
            //     break
            // case 12063756:
            //     e+=16
            //     break
        }
    }
    if (g.file_name === "SC_l1.xpc") {
        switch (o) {
        case 12137172:
            e += 8
            break
        case 12159868:
            e += 16
            break
        }
    }
    if (g.file_name === "LL_l1.xpc") {
        switch (o) {
        case 13832224:
            e += 12
            break
        case 13853100:
            e += 16
            break
        }
    }
    if (g.file_name === "LLa.xpc") {
        switch (o) {
        case 6170156:
            e += 16
            break
        }
    }

    if (g.file_name === "MM_l1.xpc") {
        switch (o) {
        case 6130808:
            e += 8
            break
            // case 13853100:
            //     e+=16
            //     break
        }
    }

    if (g.file_name === "GM_l1.xpc") {
        switch (o) {
        case 7982260:
            e += 12
            break
            // case 13853100:
            //     e+=16
            //     break
        }
    }
    if (g.file_name === "CC_l1.xpc") {
        switch (o) {
        case 8100540:
            e += 4
            break
        case 14136264:
            e += 8
            break
        }
    }
    if (g.file_name === "PC_l1.xpc") {
        switch (o) {
        case 8337880:
            e += 8
            break
            // case 19336884:
            //     e+=8
            //     break
        }
    }
    if (g.file_name === "KK_l1.xpc") {
        switch (o) {
        case 9576516:
            e += 8
            break
        case 9596300:
            e += 16
            break
        }
    }
    if (g.file_name === "KartWorks.xpc") {
        switch (o) {
        case 536672:
            e += 16
            break
        }
    }
    if (g.file_name === "gShared.xgc") {
        switch (o) {
        case 532404:
            e += 16
            break
        }
    }
    if (g.file_name === "Intrface.xgc") {
        switch (o) {
        case 568:
            e += 64
            break
        }
    }

    // if (g.file_name === "Kart.xpc") {
    //     switch (o) {
    //     case 875344:
    //     case 1087920:
    //     case 1610576:
    //     case 3259408:
    //     case 4884780:
    //     case 6422780:
    //     case 8569808:
    //     case 10171192:
    //     case 12011680:
    //     case 12012720:
    //     case 12020928:
    //     case 14019976:
    //     case 15984336:
    //     case 17911252:
    //     case 20020604:
    //     case 21863008:
    //     case 23669864:
    //     case 25474492:
    //         case 27308204:
    //         case 28683348:
    //         case 30462808:
    //         case 32202820:
    //         case 33635648:
    //         case 34939860:
    //         case 38187680:
    //         case 39772628:
    //         case 39798452:
    //                     case 36708948:
    //         case 41504368:
    //         case 43081424:
    //         case 44682808:
    //         case 46441228:
    //         case 47977752:
    //         case 49513556:
    //         case 51096992:
    //             case 52774956:
    //         case 54043008:
    //             case 55689448:
    //         e -= 16
    //         break
    //     case 12012716:
    //         case 39773664:
    //         e -= 12
    //         break
    //     case 15548580:
    //     case 15548580:
    //     case 15580356:
    //     case 15612132:
    //     case 21514068:
    //     case 21562580:
    //         case 42823364:
    //         case 42855140:
    //         case 47771724:
    //         case 47795980:
    //         e -= 4
    //         break
    //     case 12977412:
    //     case 15010892:
    //     case 16758640:
    //     case 19562040:
    //     case 20910524:
    //     case 21538324:
    //     case 24949832:
    //     case 26941960:
    //     case 37959724:
    //         case 46166568:
    //         case 50800588:
    //         case 52538120:
    //         e += 4
    //         break
    //     case 15516792:
    //     case 21507880:
    //     case 21508168:
    //     case 21532136:
    //     case 21532424:
    //     case 21556392:
    //     case 21556680:
    //         case 28457580:
    //         case 42791576:
    //         case 47765536:
    //         case 47765824:
    //         case 47789792:
    //         case 47790080:
    //         case 53917944: 
    //         e += 8
    //         break
    //     case 2826932:
    //     case 4550816:
    //     case 6166016:
    //     case 6167104:
    //     case 8105364:
    //     case 9794300:
    //     case 11668692:
    //     case 13558812:
    //     case 15516948:
    //     case 15516996:
    //     case 15517284:
    //     case 15548724:
    //     case 15548772:
    //     case 15549060:
    //     case 15580500:
    //     case 15580548:
    //     case 15580836:
    //     case 17408728:
    //     case 21489796:
    //     case 21489956:
    //     case 21490004:
    //     case 21490228:
    //     case 21514212:
    //     case 21514260:
    //     case 21514484:
    //     case 21538468:
    //     case 21538516:
    //     case 21538740:
    //     case 23271436:
    //     case 23275500:
    //     case 24942800:
    //     case 24949936:
    //     case 26935456:
    //         case 28460248:
    //         case 30087212:
    //         case 30091820:
    //         case 31942872:
    //         case 33388628:
    //         case 34779336:
    //         case 34780424:
    //         case 36400344:
    //         case 37956020:
    //         case 39572936:
    //         case 41260772:
    //         case 42791732:
    //         case 42791780:
    //         case 42792068:
    //         case 42823508:
    //         case 42823556:
    //         case 42823844:
    //         case 44408636:
    //         case 47747452:
    //         case 47747612:
    //         case 47747660:
    //         case 47747884:
    //         case 47771868:
    //         case 47771916:
    //         case 47772140:
    //         case 49268424:
    //         case 49272488:
    //         case 50793556:
    //         case 50800692:
    //         case 52531616:
    //         case 55402940:
    //             case 55407548:
    //         e += 12
    //         break
    //     case 536672:
    //     case 924480:
    //     case 1186208:
    //     case 2231040:
    //     case 2310992:
    //     case 2329984:
    //     case 2330848:
    //     case 2334560:
    //     case 2341792:
    //     case 2353312:
    //     case 2359232:
    //     case 2383168:
    //     case 2394688:
    //     case 2450720:
    //     case 2595792:
    //     case 2636608:
    //     case 2665440:
    //     case 2721936:
    //     case 2733056:
    //     case 2816592:
    //     case 2820336:
    //     case 2822512:
    //     case 4169644:
    //     case 4176604:
    //     case 4186044:
    //     case 4263596:
    //     case 4277164:
    //     case 4304620:
    //     case 4478556:
    //     case 4509804:
    //     case 4535868:
    //     case 4539900:
    //     case 5649708:
    //     case 5668828:
    //     case 5688412:
    //     case 5694876:
    //     case 5696044:
    //     case 5759852:
    //     case 5864236:
    //     case 5865404:
    //     case 5881980:
    //     case 5921884:
    //     case 5963804:
    //     case 6009740:
    //     case 6057532:
    //     case 6159436:
    //     case 7486608:
    //     case 7646960:
    //     case 7686560:
    //     case 7688736:
    //     case 7752976:
    //     case 7837168:
    //     case 7900752:
    //     case 7933312:
    //     case 7965424:
    //     case 7997536:
    //     case 8055344:
    //     case 8100784:
    //     case 9468168:
    //     case 9471784:
    //     case 9502904:
    //     case 9522616:
    //     case 9645432:
    //     case 9666488:
    //     case 9680040:
    //     case 9737752:
    //     case 9768200:
    //     case 9785976:
    //     case 9790008:
    //     case 11289360:
    //     case 11292976:
    //     case 11316208:
    //     case 11348176:
    //     case 11494928:
    //     case 11524000:
    //     case 11560304:
    //     case 11597024:
    //     case 11633744:
    //     case 11657504:
    //     case 11661536:
    //     case 11663840:
    //     case 13260712:
    //     case 13262552:
    //     case 13265448:
    //     case 13274792:
    //     case 13293112:
    //     case 13458424:
    //     case 13467768:
    //     case 15213552:
    //     case 15232448:
    //     case 15242832:
    //     case 15324288:
    //     case 15432944:
    //     case 15510480:
    //     case 16942260:
    //     case 17040212:
    //     case 17066580:
    //     case 17102324:
    //     case 17107908:
    //     case 17109780:
    //     case 17113828:
    //     case 17178500:
    //     case 17297732:
    //     case 17374900:
    //     case 17399252:
    //     case 17403012:
    //     case 19086348:
    //     case 19196588:
    //     case 19357276:
    //     case 19376748:
    //     case 19397164:
    //     case 19446556:
    //     case 19491820:
    //     case 19531036:
    //     case 19552364:
    //     case 21077392:
    //     case 21314256:
    //     case 21326928:
    //     case 21461504:
    //     case 21483760:
    //     case 22727704:
    //     case 22952536:
    //     case 23019608:
    //     case 23028968:
    //     case 23041944:
    //     case 23063992:
    //     case 23191704:
    //     case 23233784:
    //     case 26881612:
    //         case 27923732:
    //         case 27927492:
    //         case 27938148:
    //         case 27945076:
    //         case 27955028:
    //         case 27961956:
    //         case 27972772:
    //         case 28016868:
    //         case 28027796:
    //         case 28037028:
    //         case 28040804:
    //         case 28051460:
    //         case 28058388:
    //         case 28068340:
    //         case 28075268:
    //         case 28086100:
    //         case 28130196:
    //         case 28141124:
    //         case 28154628:
    //         case 28162980:
    //         case 28186148:
    //         case 28193076:
    //         case 28200004:
    //         case 28206932:
    //         case 29662824:
    //         case 29665016:
    //         case 29668504:
    //         case 29779144:
    //         case 29781352:
    //         case 29784840:
    //         case 30023944:
    //         case 31352884:
    //         case 31432836:
    //         case 31451828:
    //         case 31452692:
    //         case 31456404:
    //         case 31463636:
    //         case 31475156:
    //         case 31481076:
    //         case 31505012:
    //         case 31516532:
    //         case 31572564:
    //         case 31717636:
    //         case 31758452:
    //         case 31787284:
    //         case 31843780:
    //         case 31854900:
    //         case 31938436:
    //         case 33013664:
    //         case 33020624:
    //         case 33030064:
    //         case 33107616:
    //         case 33121184:
    //         case 33148640:
    //         case 33322576:
    //         case 33353824:
    //         case 34296964:
    //         case 34316084:
    //         case 34335668:
    //         case 34342132:
    //         case 34343300:
    //         case 34407108:
    //         case 34511492:
    //         case 34512660:
    //         case 34529236:
    //         case 34569140:
    //         case 34611060:
    //         case 34656996:
    //         case 34757716:
    //         case 35781588:
    //         case 35941940:
    //         case 35981540:
    //         case 35983716:
    //         case 36047956:
    //         case 36132148:
    //         case 36195732:
    //         case 36228292:
    //         case 36260404:
    //         case 36292516:
    //         case 36350324:
    //         case 36395764:
    //         case 37633936:
    //         case 37637552:
    //         case 37668672:
    //         case 37688384:
    //         case 37811200:
    //         case 37832256:
    //         case 37845808:
    //         case 37903520:
    //         case 37933968:
    //         case 37951744:
    //         case 39152196:
    //         case 39155812:
    //         case 39179044:
    //         case 39211012:
    //         case 39357764:
    //         case 39386836:
    //         case 39423140:
    //         case 39459860:
    //         case 39496580:
    //         case 39520340:
    //         case 40953840:
    //         case 40955680:
    //         case 40958576:
    //         case 40967920:
    //         case 40986240:
    //         case 41151552:
    //         case 41160896:
    //         e += 16
    //         break
    //     case 3658876:
    //     case 5279340:
    //     case 6819920:
    //     case 8970392:
    //     case 10570480:
    //     case 12417988:
    //     case 14418284:
    //     case 16376576:
    //     case 18307996:
    //     case 20417084:
    //         e += 608
    //         break
    //     case 2824736:
    //         // e += 2096
    //         break
    //         case 49413972:
    //             e+= 6592
    //             break
    //         case 36619972:
    //         case 50994544:
    //             e+= 6608
    //             break
    //     case 8478032:
    //     case 23567464:
    //     case 25369244:
    //         case 30341016:
    //         case 32132516:
    //         case 33494048:
    //         case 38124800:
    //         case 39725428:
    //         case 41421904:
    //         case 52707020:
    //         case 54019776:
    //         e += 6656
    //         break
    //     case 27240252:
    //         case 34882404:
    //         case 43031328:
    //         case 44626856:
    //         case 46362460:
    //         case 47926344:
    //         case 55573112:
    //         e += 6672
    //         break
    //     case 13934696:
    //     case 21808800:
    //         case 28660052:
    //         e += 6720
    //         break
    //     case 3186272:
    //     case 4740348:
    //     case 6362508:
    //     case 10105480:
    //     case 11961648:
    //     case 15931424:
    //     case 17852484:
    //     case 19939020:
    //         e += 6736
    //         break
    //     }
    // }

    return e

}

function ex_pmwr_gc_activator(o, x) {
    let e = o + divisible(256, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    su32(o + 48, x.u32_48)
    su32(o + 56, x.u32_56)
    su32(o + 64, x.u32_64)
    sf32(o + 72, x.f32_72)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 96, x.f32_96)
    su32(o + 100, x.u32_100)
    sf32(o + 104, x.f32_104)
    su32(o + 112, x.u32_112)
    su8(o + 120, x.u8_120)
    su8(o + 121, x.u8_121)
    su8(o + 122, x.u8_122)
    su8(o + 123, x.u8_123)
    sf32(o + 128, x.f32_128)
    sf32(o + 132, x.f32_132)
    sf32(o + 136, x.f32_136)
    su32(o + 140, x.u32_140)
    su8(o + 153, x.u8_153)
    su8(o + 154, x.u8_154)
    su8(o + 155, x.u8_155)
    //amount?   su32(o +172, x.u32_172)
    //amount?   su32(o +180, x.u32_180)
    //amount?   su32(o +188, x.u32_188)
    sf32(o + 204, x.f32_204)
    //amount?   su32(o +208, x.u32_208)
    su32(o + 224, x.u32_224)
    //amount?   su32(o +244, x.u32_244)

    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_04, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 4, e, 'down', true);
    e = ex_string(o + 8, e, x.section_08)
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 24, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_pmwr_gc_activator_24(temp_offset + (i * 24), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 24, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_activator_32(temp_offset + (i * 24), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 108, e, ex_pmwr_gc_activator_108, x.section_108, 'down');
    e = ex_s_offset(o + 116, e, ex_pmwr_gc_activator_116, x.section_116, 'down');
    e = ex_s_offset(o + 124, e, ex_pmwr_gc_activator_124, x.section_124, 'down');
    e = ex_s_offset(o + 144, e, ex_pmwr_gc_activator_144, x.section_144, 'down');
    e = ex_ml(x.unordered_pmwr_gc_wtf_148, g.pmwr_gc_wtf_array, ex_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf, o + 148, e, 'down');
    if (x.section_176.length) {
        su32(o + 172, x.section_176.length)
        su32(o + 176, e)
        g.oa.push(o + 176)
        let temp_offset = e
        e += divisible(x.section_176.length * 20, g.divisibility)
        for (let i = 0; i < x.section_176.length; i++) {
            e = ex_pmwr_gc_activator_176(temp_offset + (i * 20), e, x.section_176[i])
        }
        ;
    }
    ;if (x.section_184.length) {
        su32(o + 180, x.section_184.length)
        su32(o + 184, e)
        g.oa.push(o + 184)
        let temp_offset = e
        e += divisible(x.section_184.length * 12, g.divisibility)
        for (let i = 0; i < x.section_184.length; i++) {
            e = ex_pmwr_gc_activator_184(temp_offset + (i * 12), e, x.section_184[i])
        }
        ;
    }
    ;if (x.section_192.length) {
        su32(o + 188, x.section_192.length)
        su32(o + 192, e)
        g.oa.push(o + 192)
        let temp_offset = e
        e += divisible(x.section_192.length * 12, g.divisibility)
        for (let i = 0; i < x.section_192.length; i++) {
            e = ex_pmwr_gc_activator_184(temp_offset + (i * 12), e, x.section_192[i])
        }
        ;
    }
    ;if (x.section_212.length) {
        su32(o + 208, x.section_212.length)
        su32(o + 212, e)
        g.oa.push(o + 212)
        let temp_offset = e
        e += divisible(x.section_212.length * 4, g.divisibility)
        for (let i = 0; i < x.section_212.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_212[i])
        }
        ;
    }
    ;if (x.section_228.length) {
        su32(o + 224, x.section_228.length)
        su32(o + 228, e)
        g.oa.push(o + 228)
        let temp_offset = e
        e += divisible(x.section_228.length * 4, g.divisibility)
        for (let i = 0; i < x.section_228.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_228[i])
        }
        ;
    }

    if (x.section_248.length) {
        su32(o + 244, x.section_248.length)
        su32(o + 248, e)
        g.oa.push(o + 248)
        let temp_offset = e
        e += divisible(x.section_248.length * 36, g.divisibility)
        for (let i = 0; i < x.section_248.length; i++) {
            e = ex_pmwr_gc_activator_248(temp_offset + (i * 36), e, x.section_248[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_24(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    sf32(o + 8, x.f32_08)
    sf32(o + 20, x.f32_20)

    switch (x.u8_00) {
    case 4:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_24_04t4, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_24_04t6, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_24_04t4(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_24_04t4_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_24_04t4_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_24_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 12, x.u32_12)

    e = ex_string(o + 8, e, x.section_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_32(o, e, x) {
    su8(o + 0, x.u8_00)
    //amount?   su32(o +16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_32_04, x.section_04, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_activator_32_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_32_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_32_20(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_32_20_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_32_20_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_108(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    switch (x.u32_04) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_108_08t1, x.section_08, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_108_08t2, x.section_08, 'up');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_108_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_108_08t2(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 4, x.u8_04)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_108_08t2_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_108_08t2_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_116(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_124(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_144(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_176(o, e, x) {
    su32(o + 0, x.u32_00)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 12, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_activator_176_08(temp_offset + (i * 12), e, x.section_08[i])
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_activator_176_08(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_176_08(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    switch (x.u32_00) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_176_08t0, x.section_08, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_176_08t13, x.section_08, 'down');
        break;
    case 19:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_176_08t19, x.section_08, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_176_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_176_08t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_176_08t19(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_184(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248(o, e, x) {
    su32(o + 0, x.u32_00)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su8(o + 24, x.u8_24)
    //amount?   su32(o +28, x.u32_28)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_activator_248_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }

    e = ex_string(o + 8, e, x.section_08)

    e = ex_ml(x.unordered_pmwr_gc_sound_controls_20, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 20, e, 'down');
    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 80, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_activator_248_32(temp_offset + (i * 80), e, x.section_32[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_activator_248_04(o, e, x) {
    su8(o + 0, x.u8_00)
    //?
    su8(o + 1, x.u8_01)

    switch (x.u8_00) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t0, x.section_04, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t2, x.section_04, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t3, x.section_04, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t4, x.section_04, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t5, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t6, x.section_04, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t9, x.section_04, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t11, x.section_04, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t12, x.section_04, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t13, x.section_04, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t15, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_ml(x.unordered_pmwr_gc_activator_248_04_04t0_04_04, g.pmwr_gc_activator_248_04_04t0_04_array, ex_pmwr_gc_activator_248_04_04t0_04, g.unordered_ref.pmwr_gc_activator_248_04_04t0_04, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_activator_248_04_04t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t4(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t9(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)
    su8(o + 20, x.u8_20)
    su8(o + 22, x.u8_22)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t11(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t12(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_activator_248_04_04t13_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t13_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t13_00_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t13_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32(o, e, x) {
    //amount?   su32(o +04, x.u32_04)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 56, x.f32_56)
    su8(o + 61, x.u8_61)
    sf32(o + 64, x.f32_64)
    //amount?   su32(o +68, x.u32_68)

    e = ex_string(o + 0, e, x.section_00)
    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 4, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_activator_248_32_08(temp_offset + (i * 4), e, x.section_08[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 16, e, ex_pmwr_gc_activator_248_32_16, x.section_16, 'down');
    e = ex_s_offset(o + 32, e, ex_pmwr_gc_activator_248_32_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_pmwr_gc_activator_248_32_36, x.section_36, 'down');
    e = ex_s_offset(o + 52, e, ex_pmwr_gc_activator_248_32_52, x.section_52, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 12, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_pmwr_gc_activator_248_32_72(temp_offset + (i * 12), e, x.section_72[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 76, e, ex_pmwr_gc_activator_248_32_76, x.section_76, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_08(o, e, x) {

    e = ex_ml(x.unordered_pmwr_gc_model_link_00, g.pmwr_gc_model_link_array, ex_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_32(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_52(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    switch (x.u32_00) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t0, x.section_08, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t2, x.section_08, 'down');
        break;
    case 4:
        e = ex_ml(x.section_08, g.pmwr_gc_activator_array, ex_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator, o + 8, e, 'down');
        break;
    case 5:
        e = ex_ml(x.section_08, g.pmwr_gc_activator_array, ex_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator, o + 8, e, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t08, x.section_08, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t10, x.section_08, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t12, x.section_08, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t13, x.section_08, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t14, x.section_08, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t15, x.section_08, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t16, x.section_08, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t17, x.section_08, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t18, x.section_08, 'down');
        break;
    case 20:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t20, x.section_08, 'down');
        break;
    case 22:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t22, x.section_08, 'down');
        break;
    case 23:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t23, x.section_08, 'down');
        break;
    case 25:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t25, x.section_08, 'down');
        break;
    case 32:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t32, x.section_08, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t08(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t10(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t14(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su16(o + 0, x.u16_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t17(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 64, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_08[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t18(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t18_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t18_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //?

    switch (x.u32_00) {
    case 0:
        e = ex_ml(x.section_04, g.pmwr_gc_activator_248_32_72_08t18_08_04t0_array, ex_pmwr_gc_activator_248_32_72_08t18_08_04t0, g.unordered_ref.pmwr_gc_activator_248_32_72_08t18_08_04t0, o + 4, e, 'down');
        // e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_32_72_08t18_08_04t0, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_32_72_08t18_08_04t6, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t18_08_04t0(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)
    su8(o + 32, x.u8_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t18_08_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t18_08_04t6_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t18_08_04t6_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t20(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 0:
        sf32(o + 0, x.section_00)
        break;
    case 1:
        e = ex_s_offset(o + 0, e, ex_pmwr_gc_activator_248_32_72_08t20_00t1, x.section_00, 'down');
        break;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_activator_248_32_72_08t20_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_activator_248_32_72_08t22(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_activator_248_32_72_08t22_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t22_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_32_72_08t22_00_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t22_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t23(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t25(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_32_72_08t25_04, x.section_04, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t25_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_activator_248_32_72_08t25_04_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t25_04_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_72_08t32(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_32_76(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_activator_248_04_04t0_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    su8(o + 24, x.u8_24)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_activator_248_04_04t0_04_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t0_04_04(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t0_04_04_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t0_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_activator_248_04_04t0_04_04_04_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_activator_248_04_04t0_04_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_car(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_car_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00(o, x) {
    let e = o + divisible(240, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su32(o + 60, x.u32_60)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)
    su32(o + 72, x.u32_72)
    su32(o + 76, x.u32_76)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)
    su32(o + 88, x.u32_88)
    su32(o + 92, x.u32_92)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)
    su32(o + 104, x.u32_104)
    su32(o + 108, x.u32_108)
    su32(o + 112, x.u32_112)
    su32(o + 116, x.u32_116)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)
    su32(o + 128, x.u32_128)
    su32(o + 132, x.u32_132)
    su32(o + 136, x.u32_136)
    su32(o + 140, x.u32_140)
    su32(o + 144, x.u32_144)
    su32(o + 148, x.u32_148)
    su32(o + 152, x.u32_152)
    su32(o + 156, x.u32_156)
    su32(o + 160, x.u32_160)
    su32(o + 168, x.u32_168)
    su32(o + 172, x.u32_172)
    //amount?   su32(o +204, x.u32_204)
    //amount?   su32(o +212, x.u32_212)
    //amount?   su32(o +220, x.u32_220)
    //amount?   su32(o +228, x.u32_228)

    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_176, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 176, e, 'down', true);

    e = ex_ml(x.unordered_pmwr_gc_car_00_180_180, g.pmwr_gc_car_00_180_array, ex_pmwr_gc_car_00_180, g.unordered_ref.pmwr_gc_car_00_180, o + 180, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_car_00_184_184, g.pmwr_gc_car_00_184_array, ex_pmwr_gc_car_00_184, g.unordered_ref.pmwr_gc_car_00_184, o + 184, e, 'down');
    // e = ex_s_offset(o + 180, e, ex_pmwr_gc_car_00_180, x.section_180, 'down');
    // e = ex_s_offset(o + 184, e, ex_pmwr_gc_car_00_184, x.section_184, 'down');
    e = ex_s_offset(o + 188, e, ex_pmwr_gc_car_00_188, x.section_188, 'down');
    e = ex_s_offset(o + 192, e, ex_pmwr_gc_car_00_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_pmwr_gc_car_00_196, x.section_196, 'down');
    e = ex_s_offset(o + 200, e, ex_pmwr_gc_car_00_200, x.section_200, 'down');
    if (x.section_208.length) {
        su32(o + 204, x.section_208.length)
        su32(o + 208, e)
        g.oa.push(o + 208)
        let temp_offset = e
        e += divisible(x.section_208.length * 8, g.divisibility)
        for (let i = 0; i < x.section_208.length; i++) {
            e = ex_pmwr_gc_car_00_208(temp_offset + (i * 8), e, x.section_208[i])
        }
        ;
    }
    ;if (x.section_216.length) {
        su32(o + 212, x.section_216.length)
        su32(o + 216, e)
        g.oa.push(o + 216)
        let temp_offset = e
        e += divisible(x.section_216.length * 12, g.divisibility)
        for (let i = 0; i < x.section_216.length; i++) {
            e = ex_pmwr_gc_car_00_216(temp_offset + (i * 12), e, x.section_216[i])
        }
        ;
    }
    ;if (x.section_224.length) {
        su32(o + 220, x.section_224.length)
        su32(o + 224, e)
        g.oa.push(o + 224)
        let temp_offset = e
        e += divisible(x.section_224.length * 12, g.divisibility)
        for (let i = 0; i < x.section_224.length; i++) {
            e = ex_pmwr_gc_car_00_216(temp_offset + (i * 12), e, x.section_224[i])
        }
        ;
    }
    ;if (x.section_232.length) {
        su32(o + 228, x.section_232.length)
        su32(o + 232, e)
        g.oa.push(o + 232)
        let temp_offset = e
        e += divisible(x.section_232.length * 4, g.divisibility)
        for (let i = 0; i < x.section_232.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_232[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_car_00_180_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_car_00_180_04, x.section_04, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_section_08, g.pmwr_gc_sound_section_array, ex_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section, o + 8, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_section_12, g.pmwr_gc_sound_section_array, ex_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section, o + 12, e, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 8, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_car_00_180_20(temp_offset + (i * 8), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 8, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_car_00_180_20(temp_offset + (i * 8), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 8, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_car_00_180_20(temp_offset + (i * 8), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 8, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_pmwr_gc_car_00_180_20(temp_offset + (i * 8), e, x.section_44[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_00(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    ex_patch(o + 4, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_04)
    //amount?   su32(o +12, x.u32_12)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_car_00_180_00_08, x.section_08, 'down');
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 20, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_car_00_180_00_16(temp_offset + (i * 20), e, x.section_16[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_pmwr_gc_unknown_00_20, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 20, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_28, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 28, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_32, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 32, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_36, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 36, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_00_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_00_16(o, e, x) {
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_car_00_180_00_16_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_car_00_180_00_16_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_pmwr_gc_car_00_180_00_16_12, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_00_16_08(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_00_16_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_04(o, x) {
    let e = o + divisible(96, g.divisibility)
    sf32(o + 0, x.f32_00)
    //?
    sf32(o + 4, x.f32_04)
    //?
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    //?
    sf32(o + 16, x.f32_16)
    //?
    sf32(o + 20, x.f32_20)
    //?
    su32(o + 24, x.u32_24)
    //?
    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    su32(o + 60, x.u32_60)
    sf32(o + 72, x.f32_72)
    //amount?
    sf32(o + 76, x.f32_76)

    e = ex_s_offset(o + 56, e, ex_pmwr_gc_car_00_180_04_56, x.section_56, 'down');
    e = ex_s_offset(o + 64, e, ex_pmwr_gc_car_00_180_04_56, x.section_64, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_68, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 68, e, 'down');
    e = ex_s_offset(o + 80, e, ex_pmwr_gc_car_00_180_04_80, x.section_80, 'down');

    e = ex_ml(x.unordered_pmwr_gc_car_00_180_04_84_84, g.pmwr_gc_car_00_180_04_84_array, ex_pmwr_gc_car_00_180_04_84, g.unordered_ref.pmwr_gc_car_00_180_04_84, o + 84, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_car_00_180_04_84_88, g.pmwr_gc_car_00_180_04_84_array, ex_pmwr_gc_car_00_180_04_84, g.unordered_ref.pmwr_gc_car_00_180_04_84, o + 88, e, 'down');
    // e = ex_s_offset(o + 84, e, ex_pmwr_gc_car_00_180_04_84, x.section_84, 'down');
    // e = ex_s_offset(o + 88, e, ex_pmwr_gc_car_00_180_04_88, x.section_88, 'down');
    e = ex_s_offset(o + 92, e, ex_pmwr_gc_car_00_180_04_92, x.section_92, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_04_56(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_04_80(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 8, x.f32_08)

    e = ex_ml(x.unordered_pmwr_gc_unknown_00_16, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_04_84(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_04_92(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_20(o, e, x) {
    su8(o + 0, x.u8_00)

    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_car_00_180_20_04t1, x.section_04, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_car_00_180_20_04t3, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_20_04t1(o, x) {
    let e = o + divisible(64, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    sf32(o + 36, x.f32_36)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_180_20_04t3(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_184(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_car_00_184_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_184_04(o, x) {
    let e = o + divisible(64, g.divisibility)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_car_00_184_04_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_car_00_184_04_04, x.section_04, 'down');
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_car_00_184_04_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_184_04_00(o, x) {
    let e = o + divisible(80, g.divisibility)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_car_00_184_04_00_16, x.section_16, 'down');
    e = ex_ml(x.unordered_pmwr_gc_gate_44, g.pmwr_gc_gate_array, ex_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate, o + 44, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_184_04_00_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_184_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    //?
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_184_04_08(o, x) {
    let e = o + divisible(96, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_188(o, x) {
    let e = o + divisible(128, g.divisibility)
    su8(o + 20, x.u8_20)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +64, x.u32_64)
    //amount?   su32(o +72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)

    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_00, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 0, e, 'down', true);

    e = ex_ml(x.unordered_pmwr_gc_model_link_04, g.pmwr_gc_model_link_array, ex_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link, o + 4, e, 'down');
    e = ex_ml(x.ordered_pmwr_gc_model_animation_1_08, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 8, e, 'down', true);
    e = ex_ml(x.ordered_pmwr_gc_model_animation_1_12, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 12, e, 'down', true);
    e = ex_ml(x.ordered_pmwr_gc_model_animation_1_16, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 16, e, 'down', true);
    e = ex_ml(x.ordered_pmwr_gc_model_animation_1_24, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 24, e, 'down', true);
    if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 8, g.divisibility)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_pmwr_gc_car_00_188_52(temp_offset + (i * 8), e, x.section_52[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 20, g.divisibility)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_pmwr_gc_car_00_188_60(temp_offset + (i * 20), e, x.section_60[i])
        }
        ;
    }
    ;if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 32, g.divisibility)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_pmwr_gc_car_00_188_68(temp_offset + (i * 32), e, x.section_68[i])
        }
        ;
    }
    ;if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 32, g.divisibility)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_pmwr_gc_car_00_188_68(temp_offset + (i * 32), e, x.section_76[i])
        }
        ;
    }
    ;if (x.section_84.length) {
        su32(o + 80, x.section_84.length)
        su32(o + 84, e)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 32, g.divisibility)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_pmwr_gc_car_00_188_68(temp_offset + (i * 32), e, x.section_84[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_188_52(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_car_00_188_52_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_188_52_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_car_00_188_52_04_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_188_52_04_04(o, e, x) {

    e = ex_ml(x.unordered_pmwr_gc_model_link_00, g.pmwr_gc_model_link_array, ex_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_188_60(o, e, x) {
    su16(o + 0, x.u16_00)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_188_68(o, e, x) {
    su32(o + 0, x.u32_00)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_192(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +20, x.u32_20)
    su8(o + 28, x.u8_28)

    e = ex_ml(x.unordered_pmwr_gc_car_00_192_16_16, g.pmwr_gc_car_00_192_16_array, ex_pmwr_gc_car_00_192_16, g.unordered_ref.pmwr_gc_car_00_192_16, o + 16, e, 'down');

    // e = ex_s_offset(o + 16, e, ex_pmwr_gc_car_00_192_16, x.section_16, 'down');
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_pmwr_gc_car_00_192_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_pmwr_gc_wtf_32, g.pmwr_gc_wtf_array, ex_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_192_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_192_24(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_196(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    //?
    sf32(o + 12, x.f32_12)
    //?
    sf32(o + 16, x.f32_16)
    //?
    sf32(o + 20, x.f32_20)
    //?

    e = ex_ml(x.unordered_pmwr_gc_sound_section_00, g.pmwr_gc_sound_section_array, ex_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section, o + 0, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_section_08, g.pmwr_gc_sound_section_array, ex_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_200(o, x) {
    let e = o + divisible(32, g.divisibility)

    e = ex_ml(x.unordered_pmwr_gc_interface_00, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 0, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_04, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 4, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_08, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 8, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_12, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 12, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_16, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 16, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_20, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_208(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 32, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_car_00_208_04(temp_offset + (i * 32), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_208_04(o, e, x) {
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_car_00_216(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_flag(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 16, x.f32_16)
    sf32(o + 28, x.f32_28)
    su8(o + 40, x.u8_40)

    e = ex_string(o + 4, e, x.section_04)
    switch (x.u8_08) {
    case 2:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_flag_12t2, x.section_12, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_flag_12t3, x.section_12, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_flag_12t4, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_flag_12t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 2, x.u8_02)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_flag_12t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_flag_12t3_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_flag_12t3_12(o, x) {
    let e = o + divisible(32, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_flag_12t4(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_frame_font(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    su32(o + 24, x.u32_24)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00);

    e = ex_s_offset(o + 28, e, ex_pmwr_gc_frame_font_28, x.section_28, 'up')

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_frame_font_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_frame_font_28(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_frame_font_36(o, e, x) {
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_frame_multi_font(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_frame_multi_font_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_frame_multi_font_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_pmwr_gc_frame_font_12, g.pmwr_gc_frame_font_array, ex_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font, o + 12, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_frame_font_28, g.pmwr_gc_frame_font_array, ex_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font, o + 28, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_frame_font_32, g.pmwr_gc_frame_font_array, ex_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_frame_sparkler(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_frame_sparkler_16, x.section_16, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_frame_sparkler_16(o, x) {
    let e = o + divisible(64, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)
    su8(o + 4, x.u8_04)
    su32(o + 8, x.u32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su32(o + 40, x.u32_40)
    // su32(o + 44, x.u32_44)
    //amount?   su32(o +52, x.u32_52)

    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 12, g.divisibility)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_pmwr_gc_frame_sparkler_16_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 32, g.divisibility)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_pmwr_gc_frame_sparkler_16_56(temp_offset + (i * 32), e, x.section_56[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_frame_sparkler_16_48(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_frame_sparkler_16_56(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_frame_text(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_string(o + 0, e, x.section_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_gate(o, x) {
    let e = o + divisible(128, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su8(o + 17, x.u8_17)
    sf32(o + 32, x.f32_32)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 56, x.f32_56)
    //amount?   su32(o +60, x.u32_60)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 96, x.f32_96)
    su8(o + 105, x.u8_105)
    su8(o + 107, x.u8_107)

    e = ex_s_offset(o + 24, e, ex_pmwr_gc_gate_24, x.section_24, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_28, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 28, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_36, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 36, e, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_pmwr_gc_sound_section_76, g.pmwr_gc_sound_section_array, ex_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section, o + 76, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_80, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 80, e, 'down');
    e = ex_s_offset(o + 84, e, ex_pmwr_gc_gate_84, x.section_84, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_gate_24(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_gate_84(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_gate_84_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_gate_84_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_idk(o, x) {
    let e = o + divisible(80, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    //amount?   su32(o +16, x.u32_16)
    sf32(o + 24, x.f32_24)
    //amount?   su32(o +28, x.u32_28)
    su8(o + 64, x.u8_64)
    su8(o + 65, x.u8_65)
    su8(o + 66, x.u8_66)
    su8(o + 67, x.u8_67)

    switch (x.u8_00) {
    case 0:
        e = ex_ml(x.section_04, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 4, e, 'none', true, "model");
        break;
    case 1:
        e = ex_ml(x.section_04, g.pmwr_gc_model_link_array, ex_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link, o + 4, e, 'down');
        break;
    }
    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_08, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 8, e, 'down', true);
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_idk_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_idk_20(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 64, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_32[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_idk_12(o, x) {
    let e = o + divisible(80, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    sf32(o + 32, x.f32_32)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    //amount?   su32(o +64, x.u32_64)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_idk_12_16, x.section_16, 'down');
    e = ex_ml(x.ordered_pmwr_gc_models_20, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 20, e, 'none', true, "model");
    e = ex_ml(x.unordered_pmwr_gc_wtf_28, g.pmwr_gc_wtf_array, ex_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf, o + 28, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_gate_44, g.pmwr_gc_gate_array, ex_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate, o + 44, e, 'down');
    if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 4, g.divisibility)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_68[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_idk_12_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_idk_20(o, e, x) {
    su8(o + 0, x.u8_00)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +24, x.u32_24)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 32, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_idk_20_08(temp_offset + (i * 32), e, x.section_08[i])
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 32, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_idk_20_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 64, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_28[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_idk_20_08(o, e, x) {
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_idk_20_16(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface(o, x) {
    let e = o + divisible(80, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su16(o + 2, x.u16_02)
    //amount?   su32(o +08, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 44, x.u32_44)
    sf32(o + 60, x.f32_60)
    //amount?   su32(o +68, x.u32_68)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_04, x.section_04, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 28, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_interface_12(temp_offset + (i * 28), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_pmwr_gc_sound_controls_28, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 28, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_36, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 36, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_40, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 40, e, 'down');
    e = ex_s_offset(o + 48, e, ex_pmwr_gc_interface_48, x.section_48, 'up');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_52, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 52, e, 'down');
    e = ex_s_offset(o + 56, e, ex_pmwr_gc_interface_56, x.section_56, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 100, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_pmwr_gc_interface_72(temp_offset + (i * 100), e, x.section_72[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 36, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_04_04(temp_offset + (i * 36), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04(o, e, x) {

    su8(o + 4, x.u8_04)
    //?
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 8, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)

    e = ex_string(o + 0, e, x.section_00)
    switch (x.u8_04) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_interface_04_04_12t1, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_interface_04_04_12t5, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_interface_04_04_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_interface_04_04_12t8, x.section_12, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_interface_04_04_12t9, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_04_04_12t1_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_04_04_12t8_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t8_04(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)

    e = ex_string(o + 8, e, x.section_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_04_04_12t9(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    e = ex_string(o + 4, e, x.section_04)
    e = ex_string(o + 8, e, x.section_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12(o, e, x) {
    su32(o + 0, x.u32_00)
    //?
    su32(o + 8, x.u32_08)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    switch (x.u32_00) {
    case 1026:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_04t1026, x.section_04, 'down');
        break;
    case 1027:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_04t1027, x.section_04, 'down');
        break;
    }
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_interface_12_16(temp_offset + (i * 8), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 36, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_pmwr_gc_interface_12_24(temp_offset + (i * 36), e, x.section_24[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_04t1026(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su32(o + 4, x.u32_04)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_12_04t1026_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_04t1026_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_04t1026_08_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_04t1026_08_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_04t1027(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_16(o, e, x) {
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_04t1026, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24(o, e, x) {
    su8(o + 0, x.u8_00)
    //?
    su8(o + 1, x.u8_01)
    su16(o + 2, x.u16_02)
    su32(o + 20, x.u32_20)
    //?

    switch (x.u8_00) {
    case 1:
    case 31:
        e = ex_ml(x.section_04, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 4, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_24_04t11, x.section_04, 'down');
        break;
    }
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_12_24_08, x.section_08, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_24, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_04t11(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_12_24_04t11_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_04t11_04(o, e, x) {
    su16(o + 4, x.u16_04)
    //?

    switch (x.u16_04) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_12_24_04t11_04_08t0, x.section_08, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_12_24_04t11_04_08t1, x.section_08, 'down');
        break;
    case 3:
        e = ex_ml(x.section_08, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 8, e, 'down');
        break;
    case 100:
        e = ex_ml(x.section_08, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 8, e, 'down');
        break;
    case 101:
        e = ex_ml(x.section_08, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 8, e, 'down');
        break;
    }
    e = ex_s_offset(o + 0, e, ex_pmwr_gc_interface_12_24_04t11_04_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_12_24_04t11_04_00(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_12_24_04t11_04_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su16(o + 6, x.u16_06)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_04t11_04_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_interface_12_24_04t11_04_08t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_24_04t11_04_08t1_00_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_04t11_04_08t1_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_24_04t11_04_08t1_00_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_04t11_04_08t1_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_08(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_interface_12_24_08_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_12_24_08_00, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_12_24_08_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_48(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_56(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_72(o, e, x) {
    su32(o + 4, x.u32_04)
    su32(o + 12, x.u32_12)
    su16(o + 16, x.u16_16)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    //?
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 48, x.u32_48)
    //?
    su8(o + 56, x.u8_56)
    su32(o + 60, x.u32_60)
    //amount?   su32(o +68, x.u32_68)

    for (let i = 76; i < 100; i += 4) {
        su32(o + i, 0xffffffff)
    }

    e = ex_string(o + 0, e, x.section_00)
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_08, x.section_08, 'down');
    switch (x.u32_12) {
    case 4:
        e = ex_s_offset(o + 20, e, ex_pmwr_gc_interface_72_20t4, x.section_20, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 20, e, ex_pmwr_gc_interface_72_20t7, x.section_20, 'down');
        break;
    case 38:
    case 106:
    case 107:
        e = ex_s_offset(o + 20, e, ex_pmwr_gc_interface_72_20t38, x.section_20, 'down');
        break;
    }
    switch (x.u8_19) {
    case 0:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t0, x.section_24, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t1, x.section_24, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t3, x.section_24, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t5, x.section_24, 'down');
        break;
    case 6:
    case 7:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t6, x.section_24, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t10, x.section_24, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t12, x.section_24, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t13, x.section_24, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t14, x.section_24, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 24, e, ex_pmwr_gc_interface_72_24t15, x.section_24, 'down');
        break;
    }
    e = ex_s_offset(o + 32, e, ex_pmwr_gc_interface_72_32, x.section_32, 'down');
    e = ex_string(o + 48, e, x.section_48)
    e = ex_s_offset(o + 44, e, ex_pmwr_gc_interface_72_44, x.section_44, 'down');

    e = ex_s_offset(o + 52, e, ex_pmwr_gc_interface_72_52, x.section_52, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 12, g.divisibility)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_pmwr_gc_interface_72_72(temp_offset + (i * 12), e, x.section_72[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_72_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 12, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_interface_72_08_08(temp_offset + (i * 12), e, x.section_08[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_08_08(o, e, x) {
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)
    //?

    switch (x.u8_00) {
    case 2:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_08_08_04t2, x.section_04, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_08_08_04t6, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_72_08_08_04t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_08_08_04t2_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_08_08_04t2_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_08_08_04t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_20t4(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_20t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_20t38(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)

    switch (x.u8_00) {
    case 0:
        ex_patch(o + 4, g.pmwr_gc_texture_patch_array, x.section_04)
        break;
    case 1:
        e = ex_ml(x.section_04, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 4, e, 'none', true, "model");
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_24t0_08, x.section_08, 'down');
        break;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t0_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 11, x.u8_11)
    su8(o + 16, x.u8_16)
    su16(o + 18, x.u16_18)
    su32(o + 20, x.u32_20)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_72_24t0_08_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t0_08_04(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    //?
    su8(o + 3, x.u8_03)
    //?
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su16(o + 18, x.u16_18)
    su16(o + 20, x.u16_20)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    sf32(o + 24, x.f32_24)

    switch (x.u8_00) {
    case 0:
        e = ex_ml(x.section_04, g.pmwr_gc_frame_text_array, ex_pmwr_gc_frame_text, g.unordered_ref.pmwr_gc_frame_text, o + 4, e, 'down');
        break;
    }
    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_24t1_08t1, x.section_08, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_24t1_08t3, x.section_08, 'down');
        break;
    }
    switch (x.u8_02) {
    case 0:
        e = ex_ml(x.section_12, g.pmwr_gc_frame_font_array, ex_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font, o + 12, e, 'down');
        break;
    case 1:
        e = ex_ml(x.section_12, g.pmwr_gc_frame_multi_font_array, ex_pmwr_gc_frame_multi_font, g.unordered_ref.pmwr_gc_frame_multi_font, o + 12, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t1_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su16(o + 10, x.u16_10)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_72_24t1_08t1_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t1_08t1_04(o, e, x) {

    e = ex_ml(x.unordered_pmwr_gc_frame_text_00, g.pmwr_gc_frame_text_array, ex_pmwr_gc_frame_text, g.unordered_ref.pmwr_gc_frame_text, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_interface_72_24t1_08t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t3(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su32(o + 12, x.u32_12)
    //amount?

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_72_24t3_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 16, e, ex_pmwr_gc_interface_72_24t3_16, x.section_16, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t3_04(o, e, x) {

    e = ex_ml(x.unordered_pmwr_gc_model_link_00, g.pmwr_gc_model_link_array, ex_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link, o + 0, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_04, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t3_16(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_24t3_16_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t3_16_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su16(o + 6, x.u16_06)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    //amount?   su32(o +08, x.u32_08)

    e = ex_ml(x.unordered_pmwr_gc_interface_00, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 0, e, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_interface_72_24t6_12(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t6_12(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t10(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 1, x.u8_01)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_24t13_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_interface_72_24t13_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t13_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t13_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t14(o, x) {
    let e = o + divisible(288, g.divisibility)
    su8(o + 272, x.u8_272)
    su8(o + 273, x.u8_273)

    e = ex_s_offset(o + 276, e, ex_pmwr_gc_interface_72_24t14_276, x.section_276, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t14_276(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_24t15(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_pmwr_gc_frame_sparkler_00, g.pmwr_gc_frame_sparkler_array, ex_pmwr_gc_frame_sparkler, g.unordered_ref.pmwr_gc_frame_sparkler, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 24, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_interface_72_32_12(temp_offset + (i * 24), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_interface_72_32_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_interface_72_32_20(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 28, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_interface_12(temp_offset + (i * 28), e, x.section_36[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_12(o, e, x) {
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_20(o, e, x) {
    su16(o + 4, x.u16_04)

    switch (x.u16_04) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_32_20_08t0, x.section_08, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_32_20_08t1, x.section_08, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_20_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su16(o + 6, x.u16_06)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_20_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_interface_72_32_20_08t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_32_20_08t1_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_20_08t1_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_32_20_08t1_00_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_20_08t1_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_32_20_08t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_44(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_52(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 32, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_72_52_04(temp_offset + (i * 32), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 32, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_interface_72_52_04(temp_offset + (i * 32), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_interface_72_52_04(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_interface_72_52_28(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 40, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_interface_72_52_36(temp_offset + (i * 40), e, x.section_36[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_52_04(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_52_28(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_52_36(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72(o, e, x) {
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_interface_72_72_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04(o, x) {
    let e = o + divisible(64, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    su32(o + 40, x.u32_40)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 20, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_interface_72_72_04_04(temp_offset + (i * 20), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 32, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_interface_72_72_04_12(temp_offset + (i * 32), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_interface_72_72_04_12(temp_offset + (i * 32), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 32, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_interface_72_72_04_12(temp_offset + (i * 32), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_interface_72_72_04_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 44, e, ex_pmwr_gc_interface_72_72_04_44, x.section_44, 'down');
    e = ex_ml(x.unordered_pmwr_gc_sound_controls_48, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 48, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04_04(o, e, x) {
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_interface_72_72_04_04_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04_04_16(o, e, x) {
    su32(o + 4, x.u32_04)

    switch (x.u32_04) {
    case 0:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_interface_72_72_04_04_16_08t0, x.section_08, 'down');
        break;
    case 3:
        e = ex_ml(x.section_08, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 8, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04_04_16_08t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su16(o + 6, x.u16_06)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04_12(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04_36(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_interface_72_72_04_44(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_link(o, x) {
    let e = o + divisible(80, g.divisibility)

    // let e = o + 80
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 64, x.u32_64)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_link_00, x.section_00, 'up')

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 16, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_link_intro(temp_offset + (i * 16), e, x.section_08[i])
        }
        ;
    }
    ;e = ex_string(o + 12, e, x.section_12)
    e = ex_string(o + 20, e, x.section_20)

    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 8, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_link_32(temp_offset + (i * 8), e, x.section_32[i])
        }
        ;
    }

    e = ex_string(o + 36, e, x.section_36)
    e = ex_string(o + 40, e, x.section_40)

    e = ex_s_offset(o + 48, e, ex_pmwr_gc_link_demo, x.section_48, 'down')

    ex_patch(o + 52, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_52);
    ex_patch(o + 56, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_56);

    e = ex_ml(x.unordered_pmwr_gc_frame_font_60, g.pmwr_gc_frame_font_array, ex_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font, o + 60, e, 'down');

    e = ex_string(o + 68, e, x.section_68)
    e = ex_string(o + 72, e, x.section_72)

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_link_00_04, x.section_04, 'up')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    e = ex_s_offset(o + 0, e, ex_pmwr_gc_link_00_04_00, x.section_00, 'down')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_00_04_00(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 8, x.u8_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_link_00_04_00_04, x.section_04, 'up')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_00_04_00_04(o, x) {
    let e = o + 32

    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_intro(o, e, x) {
    su8(o + 0, x.u8_00)

    e = ex_string(o + 4, e, x.section_04)
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_link_intro_08, x.section_08, 'up')
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_link_offset_index, x.section_12, 'down')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_intro_08(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_offset_index(o, x) {
    let e = o + divisible(16, g.divisibility)

    su32(o + 4, x.u32_04)
    e = ex_string(o + 0, e, x.section_00)

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_32(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_link_32_00, x.section_00, 'down')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_32_00(o, x) {
    let e = divisible(o + 8, g.divisibility)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 32, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_link_32_00_04(temp_offset + (i * 32), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_32_00_04(o, e, x) {
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_link_32_00_04_04, x.section_04, 'up')
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_link_offset_index, x.section_08, 'down')

    e = ex_string(o + 12, e, x.section_12)

    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_link_32_00_04_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_link_32_00_04_20(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_32_00_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_link_offset_index, x.section_04, 'down')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_32_00_04_20(o, e, x) {
    su16(o + 8, x.u16_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_link_32_00_04_20_04(temp_offset + (i * 8), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_32_00_04_20_04(o, e, x) {
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_link_offset_index, x.section_04, 'down')

    g.debug && ex_debug(o, x.sec_id);

    return e

}

function ex_pmwr_gc_link_demo(o, x) {
    let e = o + divisible(16, g.divisibility)

    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_link_32_00, x.section_08, 'down')

    g.debug && ex_debug(o, x.sec_id);
    return e

}

function ex_pmwr_gc_model_link(o, x) {
    let e = o + divisible(80, g.divisibility)
    su32(o + 0, x.u32_00)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 36, x.f32_36)
    //amount?   su32(o +40, x.u32_40)
    su8(o + 48, x.u8_48)
    su8(o + 49, x.u8_49)
    su8(o + 50, x.u8_50)

    e = ex_string(o + 4, e, x.section_04)
    e = ex_ml(x.unordered_pmwr_gc_model_sub_link_08, g.pmwr_gc_model_sub_link_array, ex_pmwr_gc_model_sub_link, g.unordered_ref.pmwr_gc_model_sub_link, o + 8, e, 'down');
    e = ex_ml(x.ordered_pmwr_gc_model_animation_1_12, g.pmwr_gc_model_animation_1_array, ex_pmwr_gc_model_animation_1, g.ordered_ref.pmwr_gc_model_animation_1, o + 12, e, 'down', true);
    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_16, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 16, e, 'down', true);
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 4, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_pmwr_gc_model_link_24(temp_offset + (i * 4), e, x.section_24[i], temp_offset)
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 8, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_model_link_32(temp_offset + (i * 8), e, x.section_32[i], temp_offset)
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 64, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_44[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 52, e, ex_pmwr_gc_model_link_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_pmwr_gc_model_link_56, x.section_56, 'down');
    e = ex_s_offset(o + 64, e, ex_pmwr_gc_model_link_64, x.section_64, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_link_24(o, e, x, temp_offset) {

    e = ex_ml(x.ordered_pmwr_gc_models_00, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_link_32(o, e, x, temp_offset) {
    su16(o + 4, x.u16_04)

    e = ex_ml(x.ordered_pmwr_gc_models_00, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_link_52(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_link_56(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_model_link_64(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_model_sub_link(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +04, x.u32_04)
    //amount?   su32(o +12, x.u32_12)

    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_00, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 0, e, 'down', true);
    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 4, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_model_link_24(temp_offset + (i * 4), e, x.section_08[i], temp_offset)
        }
        ;
    }
    ;if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_model_link_32(temp_offset + (i * 8), e, x.section_16[i], temp_offset)
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_mysterious(o, e, x) {
    su8(o + 0, x.u8_00)
    //?
    su16(o + 2, x.u16_02)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)

    switch (x.u8_00) {
    case 1:
        e = ex_ml(x.section_04, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_04, g.pmwr_gc_strange_array, ex_pmwr_gc_strange, g.unordered_ref.pmwr_gc_strange, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_04, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 4, e, 'down');
        break;
    case 5:
    case 6:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t5, x.section_04, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t7, x.section_04, 'down');
        break;
    case 8:
        e = ex_ml(x.section_04, g.pmwr_gc_model_link_array, ex_pmwr_gc_model_link, g.unordered_ref.pmwr_gc_model_link, o + 4, e, 'down');
        break;
    case 9:
        e = ex_ml(x.section_04, g.pmwr_gc_mysterious_04t9_array, ex_pmwr_gc_mysterious_04t9, g.unordered_ref.pmwr_gc_mysterious_04t9, o + 4, e, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t10, x.section_04, 'down');
        break;
    case 11:
        e = ex_ml(x.section_04, g.pmwr_gc_activator_array, ex_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator, o + 4, e, 'down');
        break;
    case 13:
        e = ex_ml(x.section_04, g.pmwr_gc_object_array, ex_pmwr_gc_object, g.unordered_ref.pmwr_gc_object, o + 4, e, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t16, x.section_04, 'down');
        break;
    }
    switch (x.u8_00) {
    case 8:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_08t8, x.section_08, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_08t8t13, x.section_08, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5(o, x) {
    let e = o + divisible(64, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 4, x.u32_04)
    //amount?   su32(o +12, x.u32_12)
    su32(o + 20, x.u32_20)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su32(o + 32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)

    let temp_function = ex_pmwr_gc_mysterious_04t5_16t0

    switch (x.u8_03) {
    case 0:
        temp_function = ex_pmwr_gc_mysterious_04t5_16t0
        // e = ex_s_offset(o + 16, e, ex_pmwr_gc_mysterious_04t5_16t0, x.section_16, 'down');
        break;
    case 2:
        temp_function = ex_pmwr_gc_mysterious_04t5_16t2
        break;
    case 3:
        temp_function = ex_pmwr_gc_mysterious_04t5_16t3
        break;
    case 5:
        temp_function = ex_pmwr_gc_mysterious_04t5_16t5
        break;
    }

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 4, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = temp_function(temp_offset + (i * 4), e, x.section_16[i], temp_offset)
        }
        ;
    }

    e = ex_s_offset(o + 56, e, ex_pmwr_gc_mysterious_04t5_56, x.section_56, 'down');

    e = ex_s_offset(o + 28, e, ex_pmwr_gc_mysterious_04t5_28, x.section_28, 'down');

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 32, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_mysterious_04t5_36(temp_offset + (i * 32), e, x.section_36[i])
        }
        ;
    }
    ;// e = ex_s_offset(o + 36, e, ex_pmwr_gc_mysterious_04t5_36, x.section_36, 'down');

    if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 32, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_pmwr_gc_mysterious_04t5_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 12, g.divisibility)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_pmwr_gc_mysterious_04t5_52(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_56(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_16t0(o, e, x, temp_offset) {

    e = ex_ml(x.ordered_pmwr_gc_models_00, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_16t2(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_16t3(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_16t5(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_28(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_36(o, e, x) {
    sf32(o + 0, x.f32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_44(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t5_52(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t7(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_mysterious_04t7_12, x.section_12, 'down');
    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_pmwr_gc_mysterious_04t7_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 12, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_pmwr_gc_mysterious_04t7_36(temp_offset + (i * 12), e, x.section_44[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t7_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t7_36(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_mysterious_04t10(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_04t16_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_mysterious_04t16_12, x.section_12, 'down');
    e = ex_s_offset(o + 36, e, ex_pmwr_gc_mysterious_04t16_36, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t16_36_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_36_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 12, x.f32_12)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t16_36_04_04, x.section_04, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_36_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t16_36_04_04_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_36_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_mysterious_04t16_36_04_04_04_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_mysterious_04t16_36_04_04_04_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_36_04_04_04_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t16_36_04_04_04_12(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_08t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_08t8t13(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_mysterious_04t9(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_04t9_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_mysterious_04t9_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_04t9_08_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_08_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 10, x.u8_10)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 56, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious_04t9_12_04(temp_offset + (i * 56), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 12, e, ex_pmwr_gc_mysterious_04t9_12_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12_04(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su8(o + 7, x.u8_07)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    su8(o + 36, x.u8_36)
    su8(o + 39, x.u8_39)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_04t9_12_04_08, x.section_08, 'down');
    e = ex_s_offset(o + 44, e, ex_pmwr_gc_mysterious_04t9_12_04_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12_04_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12_04_44(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)
    su8(o + 4, x.u8_04)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_mysterious_04t9_12_04_44_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_mysterious_04t9_12_04_44_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12_04_44_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12_04_44_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 1, x.u8_01)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_mysterious_04t9_12_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 56, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious_04t9_12_04(temp_offset + (i * 56), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_object(o, x) {
    let e = o + divisible(112, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 11, x.u8_11)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    su8(o + 56, x.u8_56)
    su8(o + 57, x.u8_57)
    su8(o + 58, x.u8_58)
    sf32(o + 76, x.f32_76)
    su8(o + 84, x.u8_84)
    su8(o + 85, x.u8_85)
    //amount?   su32(o +96, x.u32_96)
    su8(o + 108, x.u8_108)
    su8(o + 109, x.u8_109)
    su8(o + 110, x.u8_110)
    su8(o + 111, x.u8_111)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_object_12, x.section_12, 'down');
    e = ex_ml(x.ordered_pmwr_gc_model_animation_2_16, g.pmwr_gc_model_animation_2_array, ex_pmwr_gc_model_animation_2, g.ordered_ref.pmwr_gc_model_animation_2, o + 16, e, 'down', true);
    switch (x.u8_11) {
    case 15:
        e = ex_ml(x.section_32, g.pmwr_gc_object_32t15_array, ex_pmwr_gc_object_32t15, g.unordered_ref.pmwr_gc_object_32t15, o + 32, e, 'down');

        // e = ex_s_offset(o + 32, e, ex_pmwr_gc_object_32t15, x.section_32, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 32, e, ex_pmwr_gc_object_32t16, x.section_32, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 32, e, ex_pmwr_gc_object_32t17, x.section_32, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 32, e, ex_pmwr_gc_object_32t18, x.section_32, 'down');
        break;
    }
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_48, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 48, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_frame_text_60, g.pmwr_gc_frame_text_array, ex_pmwr_gc_frame_text, g.unordered_ref.pmwr_gc_frame_text, o + 60, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_68, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 68, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_wtf_88, g.pmwr_gc_wtf_array, ex_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf, o + 88, e, 'down');
    if (x.section_100.length) {
        su32(o + 96, x.section_100.length)
        su32(o + 100, e)
        g.oa.push(o + 100)
        let temp_offset = e
        e += divisible(x.section_100.length * 64, g.divisibility)
        for (let i = 0; i < x.section_100.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_100[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_object_12_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_12_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 28, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_object_32t15_04(temp_offset + (i * 28), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_pmwr_gc_unknown_00_08, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 8, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_12, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t15_04(o, e, x) {
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)
    sf32(o + 24, x.f32_24)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_object_32t15_04_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_object_32t15_04_04(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_object_32t15_04_04(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t15_04_04(o, e, x) {
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)

    e = ex_ml(x.unordered_pmwr_gc_um_00, g.pmwr_gc_um_array, ex_pmwr_gc_um, g.unordered_ref.pmwr_gc_um, o + 0, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_um_04, g.pmwr_gc_um_array, ex_pmwr_gc_um, g.unordered_ref.pmwr_gc_um, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t17(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t18(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_object_32t18_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_object_32t18_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 64, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_08[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_sound_controls(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su32(o + 12, x.u32_12)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 16, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_pmwr_gc_sound_controls_16(temp_offset + (i * 16), e, x.section_16[i])
        }
        ;
    }
    // ;e = ex_s_offset(o + 16, e, ex_pmwr_gc_sound_controls_16, x.section_16, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_sound_controls_16(o, e, x) {
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    sf32(o + 12, x.f32_12)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_sound_controls_16_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_sound_controls_16_04(o, e, x) {

    e = ex_ml(x.unordered_pmwr_gc_sound_section_00, g.pmwr_gc_sound_section_array, ex_pmwr_gc_sound_section, g.unordered_ref.pmwr_gc_sound_section, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_sound_section(o, x) {
    let e = o + divisible(32, g.divisibility)
    ex_patch(o + 0, g.sound_patch_array, x.sound_00, 'sound')
    let v = x.f32_16
    if (v > 5) {
        v = 1
        // should probably limit this
    }
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)
    su32(o + 12, x.u32_12)
    sf32(o + 16, v)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    //?

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_sound_section_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_sound_section_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_strange(o, x) {
    let e = o + divisible(48, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_pmwr_gc_sound_controls_28, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 28, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_um(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su32(o + 8, x.u32_08)
    su32(o + 20, x.u32_20)
    su8(o + 24, x.u8_24)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown(o, e, x) {

    e = ex_ml(x.unordered_pmwr_gc_unknown_00_00, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 16, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04(temp_offset + (i * 16), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04(o, e, x) {
    su32(o + 0, x.u32_00)
    //?
    su32(o + 12, x.u32_12)
    //?

    switch (x.u32_00) {
    case 1:
        e = ex_ml(x.section_04, g.pmwr_gc_unknown_00_04_04t1_array, ex_pmwr_gc_unknown_00_04_04t1, g.unordered_ref.pmwr_gc_unknown_00_04_04t1, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_04, g.pmwr_gc_unknown_00_04_04t2_array, ex_pmwr_gc_unknown_00_04_04t2, g.unordered_ref.pmwr_gc_unknown_00_04_04t2, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_04, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 4, e, 'down');
        break;
    case 4:
        e = ex_ml(x.section_04, g.pmwr_gc_strange_array, ex_pmwr_gc_strange, g.unordered_ref.pmwr_gc_strange, o + 4, e, 'down');
        break;
    case 5:
        e = ex_ml(x.section_04, g.pmwr_gc_unknown_00_04_04t5_array, ex_pmwr_gc_unknown_00_04_04t5, g.unordered_ref.pmwr_gc_unknown_00_04_04t5, o + 4, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_04, g.pmwr_gc_idk_array, ex_pmwr_gc_idk, g.unordered_ref.pmwr_gc_idk, o + 4, e, 'down');
        break;
    case 26:
        e = ex_ml(x.section_04, g.pmwr_gc_sound_controls_array, ex_pmwr_gc_sound_controls, g.unordered_ref.pmwr_gc_sound_controls, o + 4, e, 'down');
        break;
    case 29:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t29, x.section_04, 'down');
        break;
    case 31:
        e = ex_ml(x.section_04, g.pmwr_gc_activator_array, ex_pmwr_gc_activator, g.unordered_ref.pmwr_gc_activator, o + 4, e, 'down');
        break;
    }
    switch (x.u32_00) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t1, x.section_08, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t2, x.section_08, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t3, x.section_08, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t4, x.section_08, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t5, x.section_08, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t6, x.section_08, 'down');
        break;
    case 26:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t26, x.section_08, 'down');
        break;
    case 29:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t29, x.section_08, 'down');
        break;
    case 31:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t31, x.section_08, 'down');
        break;
    case 32:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t32, x.section_08, 'down');
        break;
    case 34:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_unknown_00_04_08t34, x.section_08, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t2(o, x) {
    let e = o + divisible(112, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 40, x.f32_40)
    sf32(o + 52, x.f32_52)
    su8(o + 72, x.u8_72)
    //amount?   su32(o +96, x.u32_96)
    su32(o + 108, x.u32_108)

    e = ex_ml(x.unordered_pmwr_gc_unknown_00_32, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 32, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_wtf_48, g.pmwr_gc_wtf_array, ex_pmwr_gc_wtf, g.unordered_ref.pmwr_gc_wtf, o + 48, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_56, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 56, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_68, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 68, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_unknown_00_76, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 76, e, 'down');
    e = ex_s_offset(o + 80, e, ex_pmwr_gc_unknown_00_04_04t2_80, x.section_80, 'down');
    if (x.section_100.length) {
        su32(o + 96, x.section_100.length)
        su32(o + 100, e)
        g.oa.push(o + 100)
        let temp_offset = e
        e += divisible(x.section_100.length * 64, g.divisibility)
        for (let i = 0; i < x.section_100.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_100[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t2_80(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t29(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 48, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t29_04(temp_offset + (i * 48), e, x.section_04[i], temp_offset)
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t29_04(o, e, x, temp_offset) {
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.ordered_pmwr_gc_models_00, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1(o, x) {
    let e = divisible(63, 16) + o
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 48, e, ex_pmwr_gc_unknown_00_04_08t1_48, x.section_48, 'down');
    switch (x.u8_42) {
    case 1:
        e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t1_52t1, x.section_52, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t1_52t2, x.section_52, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1_48(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1_52t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1_52t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_08t1_52t2_12t0, x.section_12, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_08t1_52t2_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_08t1_52t2_12t2, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1_52t2_12t0(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1_52t2_12t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t1_52t2_12t2(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t2(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    //?
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 48, e, ex_pmwr_gc_unknown_00_04_08t2_48, x.section_48, 'down');
    switch (x.u8_42) {
    case 1:
        e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t2_52t1, x.section_52, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t2_52t2, x.section_52, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t2_48(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t2_52t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t2_52t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    su8(o + 8, x.u8_08)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_08t2_52t2_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t2_52t2_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t3(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 40, x.u8_40)
    su8(o + 42, x.u8_42)

    switch (x.u8_40) {
    case 2:
        e = ex_s_offset(o + 48, e, ex_pmwr_gc_unknown_00_04_08t3_48, x.section_48, 'down');
        break;
    }
    e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t3_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t3_48(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t3_52(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t4(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 1, x.u8_01)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_08t5_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t5_04(o, x) {
    let e = o + divisible(32, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t6(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t26(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t29(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t29_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t29_52(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t31(o, x) {
    let e = o + divisible(64, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)
    sf32(o + 24, x.f32_24)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 52, e, ex_pmwr_gc_unknown_00_04_08t31_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t31_52(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t32(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    sf32(o + 4, x.f32_04)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    sf32(o + 16, x.f32_16)

    e = ex_string(o + 8, e, x.section_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t34(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_ml(x.unordered_pmwr_gc_interface_04, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 4, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_08, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 8, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_12, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 12, e, 'down');
    e = ex_s_offset(o + 16, e, ex_pmwr_gc_unknown_00_04_08t34_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_08t34_16(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t1(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 8, x.u32_08)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)

    switch (x.u8_00) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t1_04t0, x.section_04, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t1_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t1_04t2, x.section_04, 'down');
        break;
    }
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, g.divisibility)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 4, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_unknown(temp_offset + (i * 4), e, x.section_32[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t1_04t0(o, x) {
    let e = o + divisible(80, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    //amount?   su32(o +36, x.u32_36)
    su32(o + 44, x.u32_44)
    su8(o + 52, x.u8_52)
    //amount?   su32(o +60, x.u32_60)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t0_04(temp_offset + (i * 4), e, x.section_04[i], temp_offset)
        }
        ;
    }
    ;if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 32, g.divisibility)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t0_40(temp_offset + (i * 32), e, x.section_40[i])
        }
        ;
    }
    // ;e = ex_s_offset(o + 48, e, ex_pmwr_gc_unknown_00_04_04t1_04t0_48, x.section_48, 'down');
    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 16, g.divisibility)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t0_48(temp_offset + (i * 16), e, x.section_48[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_pmwr_gc_unknown_00_04_04t1_04t0_56, x.section_56, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 8, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t0_64(temp_offset + (i * 8), e, x.section_64[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t0_04(o, e, x, temp_offset) {

    e = ex_ml(x.ordered_pmwr_gc_models_00, g.pmwr_gc_models_array, ex_pmwr_gc_models, g.ordered_ref.pmwr_gc_models, o + 0, e, 'none', true, "model", temp_offset);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t0_40(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t0_48(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t0_56(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t0_64(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 20, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t0_64_04(temp_offset + (i * 20), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t0_64_04(o, e, x) {

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t1(o, x) {
    let e = o + divisible(80, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +60, x.u32_60)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t1_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 12, g.divisibility)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t1_44(temp_offset + (i * 12), e, x.section_44[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 12, g.divisibility)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t1_44(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_pmwr_gc_unknown_00_04_04t1_04t1_56, x.section_56, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 8, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t1_64(temp_offset + (i * 8), e, x.section_64[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t1_04(o, e, x) {
    ex_patch(o + 0, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t1_44(o, e, x) {
    sf32(o + 0, x.f32_00)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t1_56(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t1_64(o, e, x) {
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 20, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t1_64_04(temp_offset + (i * 20), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t1_64_04(o, e, x) {
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t2(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +16, x.u32_16)
    su8(o + 24, x.u8_24)
    su8(o + 26, x.u8_26)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t2_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t1_04t2_20(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t2_04(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_04t2_20(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_24(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t1_32(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t5(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 8, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 32, x.u32_32)
    su8(o + 40, x.u8_40)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t5_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_04t5_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_pmwr_gc_unknown_00_04_04t5_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_pmwr_gc_unknown_00_04_04t5_28, x.section_28, 'down');
    e = ex_s_offset(o + 36, e, ex_pmwr_gc_unknown_00_04_04t5_36, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    //?
    su8(o + 9, x.u8_09)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +28, x.u32_28)

    switch (x.u8_08) {
    case 103:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_04t5_04_12t103, x.section_12, 'down');
        break;
    case 105:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_unknown_00_04_04t5_04_12t105, x.section_12, 'down');
        break;
    }
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t5_04_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 64, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_32[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_04_12t103(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 12, x.u32_12)
    su32(o + 28, x.u32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_04_12t105(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 64, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_mysterious(temp_offset + (i * 64), e, x.section_08[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_04_20(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t5_12_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_12_04(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_20(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_unknown_00_04_04t5_20_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_20_04(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_28(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t5_28_04, x.section_04, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_28_04(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_pmwr_gc_unknown_00_04_04t5_28_04_00_00, g.pmwr_gc_unknown_00_04_04t5_28_04_00_array, ex_pmwr_gc_unknown_00_04_04t5_28_04_00, g.unordered_ref.pmwr_gc_unknown_00_04_04t5_28_04_00, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t5_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_unknown_00_04_04t5_28_04_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    switch (x.u8_00) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t5_28_04_00_04t1, x.section_04, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_unknown_00_04_04t5_28_04_00_04t2, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_28_04_00_04t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_unknown_00_04_04t5_28_04_00_04t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su8(o + 4, x.u8_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_var(o, x) {
    let e = o + divisible(176, g.divisibility)
    su8(o + 11, x.u8_11)
    su32(o + 144, x.u32_144)
    su32(o + 152, x.u32_152)
    //?

    e = ex_string(o + 140, e, x.section_140)
    e = ex_string(o + 152, e, x.section_152)
    e = ex_s_offset(o + 148, e, ex_pmwr_gc_var_148, x.section_148, 'up');
    e = ex_s_offset(o + 164, e, ex_pmwr_gc_var_164, x.section_164, 'down');
    e = ex_s_offset(o + 168, e, ex_pmwr_gc_var_168, x.section_168, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_148(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_pmwr_gc_var_00, g.pmwr_gc_var_array, ex_pmwr_gc_var, g.unordered_ref.pmwr_gc_var, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +16, x.u32_16)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 24, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_var_164_12(temp_offset + (i * 24), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 8, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_var_164_20(temp_offset + (i * 8), e, x.section_20[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12(o, e, x) {
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    //?
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    e = ex_string(o + 0, e, x.section_00)
    e = ex_string(o + 8, e, x.section_08)
    switch (x.u32_04) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t2, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t5, x.section_12, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t6, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t8, x.section_12, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t14, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t15, x.section_12, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t16, x.section_12, 'down');
        break;
    case 24:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t24, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t1_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t1_00(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 4, x.u8_04)
    su8(o + 6, x.u8_06)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t1_00_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t1_00_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    switch (x.u32_00) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t2_04t1, x.section_04, 'down');
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t2_04t4, x.section_04, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t2_04t7, x.section_04, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t2_04t8, x.section_04, 'down');
        break;
    case 16:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t2_04t16, x.section_04, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    sf32(o + 8, x.f32_08)
    su32(o + 24, x.u32_24)
    sf32(o + 28, x.f32_28)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t2_04t1_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_pmwr_gc_var_164_12_12t2_04t1_16, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_pmwr_gc_var_164_12_12t2_04t1_16, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t1_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t1_16(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 4, x.u8_04)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    switch (x.u8_04) {
    case 1:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t1_array, ex_pmwr_gc_world_20_12t1, g.unordered_ref.pmwr_gc_world_20_12t1, o + 0, e, 'down', true);
        break;
    case 10:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t10_array, ex_pmwr_gc_world_20_12t10, g.unordered_ref.pmwr_gc_world_20_12t10, o + 0, e, 'down', true);
        break;
    case 11:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t11_array, ex_pmwr_gc_world_20_12t11, g.unordered_ref.pmwr_gc_world_20_12t11, o + 0, e, 'down', true);
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t4(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 1, x.u8_01)
    su8(o + 3, x.u8_03)
    sf32(o + 4, x.f32_04)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_var_164_12_12t2_04t4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t4_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 1:
        switch (x.u32_04) {
        case 1:
            e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t1_array, ex_pmwr_gc_world_20_12t1, g.unordered_ref.pmwr_gc_world_20_12t1, o + 0, e, 'down', true);
            break;
        case 8:
            e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t8_array, ex_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8, o + 0, e, 'down', true);
            break;
        case 10:
            e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t10_array, ex_pmwr_gc_world_20_12t10, g.unordered_ref.pmwr_gc_world_20_12t10, o + 0, e, 'down', true);
            break;
        case 13:
            e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t13_array, ex_pmwr_gc_world_20_12t13, g.unordered_ref.pmwr_gc_world_20_12t13, o + 0, e, 'down', true);
            break;
        case 14:
            e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t14_array, ex_pmwr_gc_world_20_12t14, g.unordered_ref.pmwr_gc_world_20_12t14, o + 0, e, 'down', true);
            break;
        case 15:
            e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t15_array, ex_pmwr_gc_world_20_12t15, g.unordered_ref.pmwr_gc_world_20_12t15, o + 0, e, 'down', true);
            break;
        }
        break
    case 2:
        su32(o + 0, x.section_00)
        break
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t7(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 3, x.u8_03)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t8(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 3, x.u8_03)

    e = ex_s_offset(o + 16, e, ex_pmwr_gc_var_164_12_12t2_04t8_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t8_16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t2_04t16(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)

    e = ex_ml(x.unordered_pmwr_gc_flag_24, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t5_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t5_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_var_164_12_12t5_04_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t5_04_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)

    switch (x.u8_04) {
    case 1:
        e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t6_00t1, x.section_00, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t6_00t2, x.section_00, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t6_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 5, x.u8_05)

    e = ex_ml(x.unordered_pmwr_gc_interface_00, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 0, e, 'down');
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_var_164_12_12t6_00t1_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t6_00t1_08(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t6_00t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_ml(x.unordered_pmwr_gc_interface_04, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t7_00, x.section_00, 'down');
    e = ex_ml(x.unordered_pmwr_gc_object_04, g.pmwr_gc_object_array, ex_pmwr_gc_object, g.unordered_ref.pmwr_gc_object, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t7_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    switch (x.u8_08) {
    case 1:
        e = ex_ml(x.section_00, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 0, e, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t8_00t2, x.section_00, 'down');
        break;
    }

    switch (x.u8_10) {
    case 0:
        sf32(o + 4, x.section_04)
        break;
    case 2:
        e = ex_ml(x.section_04, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 4, e, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t8_04t3, x.section_04, 'down');
        break;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t8_00t2(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t8_00t2_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t8_00t2_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t8_00t2_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t8_00t2_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t8_04t3(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_12_12t8_04t3_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t8_04t3_12(o, x) {
    let e = o + divisible(32, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t14(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    if (o === 11092932) {
        console.log('?')
    }

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_12_12t14_00, x.section_00, 'down');
    e = ex_ml(x.unordered_pmwr_gc_world_20_12t4_08, g.pmwr_gc_world_20_12t4_array, ex_pmwr_gc_world_20_12t4, g.unordered_ref.pmwr_gc_world_20_12t4, o + 8, e, 'down', true);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t14_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    switch (x.u8_08) {
    case 1:
        e = ex_ml(x.section_00, g.pmwr_gc_world_20_12t0_array, ex_pmwr_gc_world_20_12t0, g.unordered_ref.pmwr_gc_world_20_12t0, o + 0, e, 'down', true);
        break;
    case 5:
        su32(o + 0, x.section_00)
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t15(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t16(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    e = ex_ml(x.unordered_pmwr_gc_var_00, g.pmwr_gc_var_array, ex_pmwr_gc_var, g.unordered_ref.pmwr_gc_var, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t24(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_pmwr_gc_unknown_00_00, g.pmwr_gc_unknown_00_array, ex_pmwr_gc_unknown_00, g.unordered_ref.pmwr_gc_unknown_00, o + 0, e, 'down');
    e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t24_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_12_12t24_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20(o, e, x) {
    su32(o + 0, x.u32_00)

    if (x.section_04.length) {
        su32(o + 4, e)
        e = ex_pmwr_gc_var_164_20_04(e, x.section_04[0], x.u32_00)
        g.oa.push(o + 4)
    }

    // e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_20_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04(o, x, v) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)

    e = ex_string(o + 8, e, x.section_08)
    switch (v) {
    case 1604:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_12t1604, x.section_12, 'down');
        break;
    case 1608:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_12t1608, x.section_12, 'down');
        break;
    case 1618:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_12t1618, x.section_12, 'down');
        break;
    case 1620:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_12t1620, x.section_12, 'down');
        break;
    case 1636:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_12t1636, x.section_12, 'down');
        break;
    }
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 12, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_pmwr_gc_var_164_20_04_20(temp_offset + (i * 12), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 24, g.divisibility)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_pmwr_gc_var_164_12(temp_offset + (i * 24), e, x.section_28[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1604(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1608(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)

    e = ex_ml(x.unordered_pmwr_gc_interface_04, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 4, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_world_20_12t1_08, g.pmwr_gc_world_20_12t1_array, ex_pmwr_gc_world_20_12t1, g.unordered_ref.pmwr_gc_world_20_12t1, o + 8, e, 'down', true);

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1618(o, x) {
    let e = o + divisible(16, g.divisibility)
    // sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    switch (x.u8_08) {
    case 0:
        e = ex_ml(x.section_00, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 0, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_20_04_12t1618_00t1, x.section_00, 'down');
        break;
    }

    switch (x.u8_10) {
    case 0:
        sf32(o + 4, x.section_04)
        break;
    case 1:
        e = ex_ml(x.section_04, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 4, e, 'down');
        break;
    case 3:
        // e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t8_04t3, x.section_04, 'down');
        break;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1618_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_12t1618_00t1_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1618_00t1_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1620(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)

    e = ex_ml(x.unordered_pmwr_gc_world_20_12t8_08, g.pmwr_gc_world_20_12t8_array, ex_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8, o + 8, e, 'down', true);
    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_20_04_12t1620_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1620_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1636(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 4, x.u8_04)
    su8(o + 5, x.u8_05)
    su8(o + 6, x.u8_06)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_20_04_12t1636_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_12t1636_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20(o, e, x) {
    su32(o + 0, x.u32_00)
    if (o === 19418732) {
        console.log('?')
    }

    e = ex_string(o + 4, e, x.section_04)
    switch (x.u32_00) {
    case 5:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_var_164_20_04_20_08t5, x.section_08, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_var_164_20_04_20_08t6, x.section_08, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20_08t5(o, x) {
    let e = o + divisible(16, g.divisibility)
    // sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)

    switch (x.u8_08) {
    case 0:
        e = ex_ml(x.section_00, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 0, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_20_04_20_08t5_00t1, x.section_00, 'down');
        break;
    }

    switch (x.u8_10) {
    case 0:
        sf32(o + 4, x.section_04)
        break;
    case 1:
        e = ex_ml(x.section_04, g.pmwr_gc_flag_array, ex_pmwr_gc_flag, g.unordered_ref.pmwr_gc_flag, o + 4, e, 'down');
        break;
    case 3:
        // e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_12_12t8_04t3, x.section_04, 'down');
        break;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20_08t5_00t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_var_164_20_04_20_08t5_00t1_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_var_164_20_04_20_08t5_00t1_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20_08t5_00t1_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20_08t5_00t1_12(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20_08t6(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 5, x.u8_05)

    e = ex_ml(x.unordered_pmwr_gc_world_20_12t8_08, g.pmwr_gc_world_20_12t8_array, ex_pmwr_gc_world_20_12t8, g.unordered_ref.pmwr_gc_world_20_12t8, o + 8, e, 'down', true);
    e = ex_s_offset(o + 0, e, ex_pmwr_gc_var_164_20_04_20_08t6_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_164_20_04_20_08t6_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 8, x.u8_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_var_168(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 24, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_pmwr_gc_var_164_12(temp_offset + (i * 24), e, x.section_08[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_world_settings(o, x) {
    let e = o + divisible(208, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    sf32(o + 8, x.f32_08)
    ex_patch(o + 16, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_16)
    ex_patch(o + 20, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_20)
    ex_patch(o + 24, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su16(o + 82, x.u16_82)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)
    sf32(o + 112, x.f32_112)
    sf32(o + 116, x.f32_116)
    sf32(o + 120, x.f32_120)
    su8(o + 126, x.u8_126)
    sf32(o + 140, x.f32_140)
    //?
    sf32(o + 144, x.f32_144)
    //?
    sf32(o + 148, x.f32_148)
    //?
    sf32(o + 152, x.f32_152)
    //?
    sf32(o + 156, x.f32_156)
    sf32(o + 160, x.f32_160)
    sf32(o + 164, x.f32_164)
    sf32(o + 168, x.f32_168)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 64, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_world_settings_04(temp_offset + (i * 64), e, x.section_04[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 12, e, ex_pmwr_gc_world_settings_12, x.section_12, 'down');
    e = ex_s_offset(o + 36, e, ex_pmwr_gc_world_settings_36, x.section_36, 'down');
    e = ex_s_offset(o + 48, e, ex_pmwr_gc_world_settings_48, x.section_48, 'down');
    e = ex_s_offset(o + 52, e, ex_pmwr_gc_world_settings_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_pmwr_gc_world_settings_56, x.section_56, 'down');
    e = ex_s_offset(o + 60, e, ex_pmwr_gc_world_settings_60, x.section_60, 'down');
    e = ex_s_offset(o + 64, e, ex_pmwr_gc_world_settings_64, x.section_64, 'down');
    e = ex_s_offset(o + 68, e, ex_pmwr_gc_world_settings_68, x.section_68, 'down');
    e = ex_s_offset(o + 72, e, ex_pmwr_gc_world_settings_72, x.section_72, 'down');
    e = ex_string(o + 76, e, x.section_76)
    e = ex_ml(x.unordered_pmwr_gc_frame_font_88, g.pmwr_gc_frame_font_array, ex_pmwr_gc_frame_font, g.unordered_ref.pmwr_gc_frame_font, o + 88, e, 'down');
    ex_patch(o + 136, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_136)

    e = ex_s_offset(o + 192, e, ex_pmwr_gc_world_settings_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_pmwr_gc_world_settings_196, x.section_196, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_04(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    su32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_48(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_world_settings_48_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_48_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_52(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_56(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_60(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_64(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_68(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_72(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_192(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 8, x.u32_08)
    //amount?   su32(o +36, x.u32_36)

    e = ex_ml(x.unordered_pmwr_gc_interface_00, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 0, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_interface_04, g.pmwr_gc_interface_array, ex_pmwr_gc_interface, g.unordered_ref.pmwr_gc_interface, o + 4, e, 'down');
    e = ex_string(o + 12, e, x.section_12)
    e = ex_string(o + 16, e, x.section_16)
    ex_patch(o + 20, g.pmwr_gc_texture_patch_array, x.pmwr_gc_texture_20)

    e = ex_ml(x.unordered_pmwr_gc_car_24, g.pmwr_gc_car_array, ex_pmwr_gc_car, g.unordered_ref.pmwr_gc_car, o + 24, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_car_28, g.pmwr_gc_car_array, ex_pmwr_gc_car, g.unordered_ref.pmwr_gc_car, o + 28, e, 'down');
    e = ex_ml(x.unordered_pmwr_gc_car_32, g.pmwr_gc_car_array, ex_pmwr_gc_car, g.unordered_ref.pmwr_gc_car, o + 32, e, 'down');
    if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 8, g.divisibility)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_pmwr_gc_world_settings_192_40(temp_offset + (i * 8), e, x.section_40[i])
        }
        ;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_192_40(o, e, x) {
    su32(o + 4, x.u32_04)

    e = ex_string(o + 0, e, x.section_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_196(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_world_settings_196_04, x.section_04, 'down');
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_world_settings_196_04, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_world_settings_196_04, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_pmwr_gc_world_settings_196_04, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_196_04(o, x) {
    let e = o + divisible(32, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)
    sf32(o + 16, x.f32_16)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_pmwr_gc_world_settings_196_04_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 12, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_pmwr_gc_world_settings_196_04_04(temp_offset + (i * 12), e, x.section_12[i])
        }
        ;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_world_settings_196_04_04(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_pmwr_gc_wtf(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_04, x.section_04, 'down');
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08, x.section_08, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_wtf_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_04(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_wtf_08_00, x.section_00, 'down');
    switch (x.u32_04) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t1, x.section_08, 'up');
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t3, x.section_08, 'up');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_08_00_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_wtf_08_00_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_00_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 4, x.u32_04)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_wtf_08_08t1_00, x.section_00, 'down');
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t1_08, x.section_08, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_08_08t1_00_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_wtf_08_08t1_00_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1_00_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 1, x.u8_01)
    sf32(o + 16, x.f32_16)
    // sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t1_08_08, x.section_08, 'down');
    e = ex_ml(x.unordered_pmwr_gc_gate_12, g.pmwr_gc_gate_array, ex_pmwr_gc_gate, g.unordered_ref.pmwr_gc_gate, o + 12, e, 'down');

    switch (x.u8_01) {
    case 0:
        e = ex_s_offset(o + 20, e, ex_pmwr_gc_wtf_08_08t1_08_20t0, x.section_20, 'down');
        break;
    case 2:
        sf32(o + 20, x.section_20)
        break
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1_08_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t1_08_20t0(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 16, x.u32_16)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_wtf_08_08t3_00, x.section_00, 'down');
    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t3_08, x.section_08, 'up');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_wtf_08_08t3_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_pmwr_gc_wtf_08_08t3_20, x.section_20, 'up');
    e = ex_s_offset(o + 24, e, ex_pmwr_gc_wtf_08_08t3_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_pmwr_gc_wtf_08_08t3_32, x.section_32, 'up');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //?
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_08_08t3_00_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_pmwr_gc_wtf_08_08t3_00_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_00_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t3_08_08, x.section_08, 'down');
    e = ex_s_offset(o + 20, e, ex_pmwr_gc_wtf_08_08t3_08_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_08_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_08_20(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_08_08t3_12_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_12_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_20(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su32(o + 4, x.u32_04)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t3_20_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_20_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_24(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_08_08t3_24_04, x.section_04, 'down');
    switch (x.u32_08) {
    case 3:
        e = ex_s_offset(o + 12, e, ex_pmwr_gc_wtf_08_08t3_24_12, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_24_04(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_24_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_32(o, x) {
    let e = o + divisible(32, g.divisibility)
    su8(o + 1, x.u8_01)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 8, e, ex_pmwr_gc_wtf_08_08t3_32_08, x.section_08, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_08_08t3_32_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_12(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_s_offset(o + 0, e, ex_pmwr_gc_wtf_12_00, x.section_00, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_12_00(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_pmwr_gc_wtf_12_00_04, x.section_04, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_pmwr_gc_wtf_12_00_04(o, x) {
    let e = o + divisible(16, g.divisibility)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
