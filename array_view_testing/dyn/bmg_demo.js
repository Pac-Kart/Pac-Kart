"use strict";

/* start sec_id list */

function get_bmg_demo_sec_id(string) {
    switch (string) {
    case '5S25':
        return "bmg_demo_file_header"
        break
    case '^RrX':
        return "bmg_demo_directory"
        break
    case '4akv':
        return "bmg_demo_datapack"
        break
    case 'XH?<':
        return "bmg_demo_basic_audio"
        break
    case '11Hn':
        return "bmg_demo_basic_audio_0"
        break
    case 'Ry[O':
        return "bmg_demo_basic_audio_0_0"
        break
    case 'ordr':
        return "bmg_demo_ordered"
        break
    case '4unr':
        return "bmg_demo_unordered"
        break
    case 'F[:U':
        return "bmg_demo_world"
        break
    case 'n0@1':
        return "bmg_demo_world_0"
        break
    case 'hANj':
        return "bmg_demo_world_0_64"
        break
    case 'HX1h':
        return "bmg_demo_world_0_32"
        break
    case ';Hza':
        return "bmg_demo_world_12"
        break
    case 'l7_m':
        return "bmg_demo_world_20"
        break
    case '86I_':
        return "bmg_demo_world_92"
        break
    case 'XYmu':
        return "bmg_demo_world_116"
        break
    case ']JOR':
        return "bmg_demo_world_28"
        break
    case 'q6g]':
        return "bmg_demo_world_28_76"
        break
    case '<>FE':
        return "bmg_demo_world_28_72"
        break
    case 'd;;J':
        return "bmg_demo_world_28_72_0"
        break
    case '0F]x':
        return "bmg_demo_world_28_64"
        break
    case 'oZ7E':
        return "bmg_demo_world_28_56"
        break
    case 'c_qs':
        return "bmg_demo_world_28_76_8"
        break
    case '=oJn':
        return "bmg_demo_world_68"
        break
    case 'VUgJ':
        return "bmg_demo_world_84"
        break
    case 'fF;x':
        return "bmg_demo_world_4"
        break
    case '0tcr':
        return "bmg_demo_world_4_16"
        break
    case 'o7cm':
        return "bmg_demo_world_120"
        break
    case '3Ld8':
        return "bmg_demo_world_208"
        break
    case 'aLv<':
        return "bmg_demo_world_176"
        break
    case 'm<qQ':
        return "bmg_demo_world_176_4"
        break
    case '3T@A':
        return "bmg_demo_world_176_12"
        break
    case 'meiW':
        return "bmg_demo_world_176_20"
        break
    case 'EhAl':
        return "bmg_demo_world_176_28"
        break
    case 'JGGu':
        return "bmg_demo_activator"
        break
    case 'CRap':
        return "bmg_demo_activator_28"
        break
    case 'DmyF':
        return "bmg_demo_activator_108"
        break
    case 'VzcU':
        return "bmg_demo_activator_108_4"
        break
    case '3g?m':
        return "bmg_demo_activator_108_8"
        break
    case 'M?ZD':
        return "bmg_demo_activator_108_8_0"
        break
    case 'D6=0':
        return "bmg_demo_activator_108_8_0_4"
        break
    case ']ozp':
        return "bmg_demo_activator_188"
        break
    case 'Rib8':
        return "bmg_demo_activator_220"
        break
    case '25XZ':
        return "bmg_demo_activator_220_8"
        break
    case '264e':
        return "bmg_demo_activator_228"
        break
    case 'NGdp':
        return "bmg_demo_activator_228_4"
        break
    case '8H8=':
        return "bmg_demo_activator_228_12"
        break
    case '<6Dq':
        return "bmg_demo_activator_228_12_4"
        break
    case 'Qy1h':
        return "bmg_demo_activator_228_20"
        break
    case '^CJ9':
        return "bmg_demo_activator_228_20_12"
        break
    case 'Svsm':
        return "bmg_demo_activator_236"
        break
    case 'fT=6':
        return "bmg_demo_activator_236_4"
        break
    case '9>m>':
        return "bmg_demo_activator_236_4_4"
        break
    case 'H;;^':
        return "bmg_demo_activator_236_32"
        break
    case 'cGTs':
        return "bmg_demo_activator_236_32_8"
        break
    case 'lSqL':
        return "bmg_demo_activator_236_32_16"
        break
    case 'oMAW':
        return "bmg_demo_activator_236_32_76"
        break
    case ']CEB':
        return "bmg_demo_activator_236_32_76_12t0"
        break
    case '3XRv':
        return "bmg_demo_activator_236_32_76_12t8"
        break
    case 'g]4K':
        return "bmg_demo_activator_236_32_76_12t23"
        break
    case '9kL5':
        return "bmg_demo_activator_236_32_84"
        break
    case 'RcKR':
        return "bmg_demo_activator_252"
        break
    case 'PWSR':
        return "bmg_demo_event"
        break
    case 'mPi7':
        return "bmg_demo_event_12"
        break
    case 'foOa':
        return "bmg_demo_event_12_12t2"
        break
    case 'NIl[':
        return "bmg_demo_event_12_12t2_4"
        break
    case 'Mcru':
        return "bmg_demo_event_12_12t5"
        break
    case '@pJ=':
        return "bmg_demo_event_12_12t5_0t1"
        break
    case 'HApO':
        return "bmg_demo_event_12_12t5_0t1_8"
        break
    case 'GLw3':
        return "bmg_demo_event_12_12t5_0t1_8_12"
        break
    case '0Tx?':
        return "bmg_demo_event_12_12t5_0t2"
        break
    case 'hw>l':
        return "bmg_demo_event_12_12t7"
        break
    case 'K>L8':
        return "bmg_demo_event_12_12t14"
        break
    case '6aWN':
        return "bmg_demo_event_12_12t15"
        break
    case 'mFLG':
        return "bmg_demo_event_12_12t17"
        break
    case 'T<pZ':
        return "bmg_demo_event_12_12t19"
        break
    case '>Z:8':
        return "bmg_demo_event_12_12t23"
        break
    case 'Ii<L':
        return "bmg_demo_flag"
        break
    case 'nyyF':
        return "bmg_demo_flag_20t0"
        break
    case 'mcZh':
        return "bmg_demo_flag_20t1"
        break
    case 'ahXp':
        return "bmg_demo_flag_20t2"
        break
    case '[k3^':
        return "bmg_demo_flag_20t3"
        break
    case 'M:Th':
        return "bmg_demo_flag_20t8"
        break
    case 'Z:PL':
        return "bmg_demo_flag_20t9"
        break
    case 'Ea1X':
        return "bmg_demo_flag_20t9_12"
        break
    case '@XQf':
        return "bmg_demo_flag_20t10"
        break
    case 'YT1S':
        return "bmg_demo_flag_20t10_4"
        break
    case '>NJK':
        return "bmg_demo_font"
        break
    case ':AAO':
        return "bmg_demo_font_20"
        break
    case 'BfM^':
        return "bmg_demo_font_28"
        break
    case 'mD;@':
        return "bmg_demo_idk"
        break
    case 'MFNb':
        return "bmg_demo_idk_24"
        break
    case 'nX5W':
        return "bmg_demo_idk_24_48"
        break
    case 'CUh>':
        return "bmg_demo_idk_24_60"
        break
    case 'OUTT':
        return "bmg_demo_idk_24_60_4"
        break
    case 'MhZ4':
        return "bmg_demo_idk_24_60_8"
        break
    case 'LUxg':
        return "bmg_demo_idk_24_60_8_0"
        break
    case 'qGK^':
        return "bmg_demo_idk_24_60_8_0_4"
        break
    case 'kgDb':
        return "bmg_demo_interface"
        break
    case 'bbOk':
        return "bmg_demo_interface_48"
        break
    case 'PULi':
        return "bmg_demo_interface_52"
        break
    case 'nUas':
        return "bmg_demo_interface_52_0"
        break
    case ':1Jf':
        return "bmg_demo_interface_64"
        break
    case 'K83n':
        return "bmg_demo_interface_64_4"
        break
    case 'nwIY':
        return "bmg_demo_interface_64_4_12t1"
        break
    case 'Xs?:':
        return "bmg_demo_interface_64_4_12t1_4"
        break
    case '?e::':
        return "bmg_demo_interface_64_4_12t5"
        break
    case 'aSsb':
        return "bmg_demo_interface_64_4_12t7"
        break
    case 'NHow':
        return "bmg_demo_interface_64_4_12t8"
        break
    case 'YIZ?':
        return "bmg_demo_interface_64_4_12t8_4"
        break
    case 'lwc@':
        return "bmg_demo_interface_64_4_12t10"
        break
    case 'Y<8@':
        return "bmg_demo_interface_72"
        break
    case '_;ZI':
        return "bmg_demo_interface_72_4"
        break
    case 'oL04':
        return "bmg_demo_interface_72_16"
        break
    case 'tvJ[':
        return "bmg_demo_interface_72_16_4t2"
        break
    case 'qv?T':
        return "bmg_demo_interface_72_16_4t3"
        break
    case 'EtIN':
        return "bmg_demo_interface_72_24"
        break
    case 'qQUZ':
        return "bmg_demo_interface_72_24_4t11"
        break
    case 'O1Y0':
        return "bmg_demo_interface_72_24_4t11_4"
        break
    case 'k7ct':
        return "bmg_demo_interface_72_24_4t11_4_12t0"
        break
    case 'GZKz':
        return "bmg_demo_interface_72_24_4t11_4_12t1"
        break
    case ';4<O':
        return "bmg_demo_interface_72_24_4t11_4_12t1_0"
        break
    case 'V5bd':
        return "bmg_demo_interface_72_24_4t11_4_12t1_0_4"
        break
    case 'N^^c':
        return "bmg_demo_interface_72_24_4t11_4_12t1_4"
        break
    case 'lm@3':
        return "bmg_demo_interface_72_24_12"
        break
    case 'MlOH':
        return "bmg_demo_interface_72_24_12_0"
        break
    case 'v82V':
        return "bmg_demo_interface_72_24_12_4"
        break
    case 'mzy?':
        return "bmg_demo_interface_80"
        break
    case 'qTe7':
        return "bmg_demo_interface_80_12"
        break
    case 'seO0':
        return "bmg_demo_interface_80_32"
        break
    case 'B78f':
        return "bmg_demo_interface_80_32_8"
        break
    case 'mf[2':
        return "bmg_demo_interface_80_32_8_4"
        break
    case 'dv^o':
        return "bmg_demo_interface_80_36t0"
        break
    case 'eiDd':
        return "bmg_demo_interface_80_36t0_8"
        break
    case 'CfI=':
        return "bmg_demo_interface_80_36t0_8_4"
        break
    case '5t@<':
        return "bmg_demo_interface_80_36t1"
        break
    case 'fBV8':
        return "bmg_demo_interface_80_36t1_8t1"
        break
    case 'z1fL':
        return "bmg_demo_interface_80_36t1_8t1_4"
        break
    case 'Y[0P':
        return "bmg_demo_interface_80_36t1_8t3"
        break
    case 'dp5R':
        return "bmg_demo_interface_80_36t1_8t4"
        break
    case 'Ol^h':
        return "bmg_demo_interface_80_36t1_8t4_4"
        break
    case 'j]@5':
        return "bmg_demo_interface_80_36t1_8t4_4_4"
        break
    case 'qmc8':
        return "bmg_demo_interface_80_36t1_16"
        break
    case 'EKL9':
        return "bmg_demo_interface_80_36t6"
        break
    case 's92_':
        return "bmg_demo_interface_80_36t6_12"
        break
    case 't]yz':
        return "bmg_demo_interface_80_36t7"
        break
    case '2ana':
        return "bmg_demo_interface_80_36t10"
        break
    case 'Qlx3':
        return "bmg_demo_interface_80_36t12"
        break
    case 'HczP':
        return "bmg_demo_interface_80_36t13"
        break
    case '?663':
        return "bmg_demo_interface_80_36t13_4"
        break
    case 'Rsaj':
        return "bmg_demo_interface_80_36t13_12"
        break
    case '^iox':
        return "bmg_demo_interface_80_36t14"
        break
    case 'dSo;':
        return "bmg_demo_interface_80_36t14_4"
        break
    case 'dQjw':
        return "bmg_demo_interface_80_36t15"
        break
    case 'GXNZ':
        return "bmg_demo_interface_80_36t15_0"
        break
    case '?A6R':
        return "bmg_demo_interface_80_36t15_0_16"
        break
    case 'ZFdM':
        return "bmg_demo_interface_80_36t15_0_16_48"
        break
    case '=18X':
        return "bmg_demo_interface_80_36t15_0_16_56"
        break
    case 'BK]G':
        return "bmg_demo_interface_80_40"
        break
    case 'Avsl':
        return "bmg_demo_interface_80_40_36"
        break
    case '^<tm':
        return "bmg_demo_interface_80_40_36_24"
        break
    case 'dRqc':
        return "bmg_demo_interface_80_52"
        break
    case 'AdJp':
        return "bmg_demo_interface_80_52_4"
        break
    case 'KgwT':
        return "bmg_demo_interface_80_52_12"
        break
    case ']RpX':
        return "bmg_demo_interface_80_52_20"
        break
    case 'fR6A':
        return "bmg_demo_interface_80_52_28"
        break
    case 'pUGQ':
        return "bmg_demo_interface_80_52_36"
        break
    case '<WW1':
        return "bmg_demo_interface_80_68"
        break
    case 'AFOv':
        return "bmg_demo_interface_80_68_4"
        break
    case 'TX6A':
        return "bmg_demo_interface_80_68_4_4"
        break
    case 'zLRh':
        return "bmg_demo_interface_80_68_4_12"
        break
    case '^Z^T':
        return "bmg_demo_interface_80_68_4_20"
        break
    case 'Le=0':
        return "bmg_demo_interface_80_68_4_28"
        break
    case 'hP6U':
        return "bmg_demo_interface_80_68_4_36"
        break
    case 'ZOfD':
        return "bmg_demo_interface_80_68_4_44"
        break
    case '5Y1W':
        return "bmg_demo_model_link"
        break
    case 'AjF]':
        return "bmg_demo_model_link_28"
        break
    case '=PwC':
        return "bmg_demo_model_link_32"
        break
    case 'YOo>':
        return "bmg_demo_model_link_48"
        break
    case 'wTl>':
        return "bmg_demo_model_sub_link"
        break
    case '0l52':
        return "bmg_demo_model_sub_link_8"
        break
    case 't[=T':
        return "bmg_demo_model_sub_link_16"
        break
    case 'jR]N':
        return "bmg_demo_multi_font"
        break
    case 'rus:':
        return "bmg_demo_multi_font_4t0"
        break
    case 'GP]S':
        return "bmg_demo_multi_font_4t1"
        break
    case 'QpPx':
        return "bmg_demo_something"
        break
    case 'PxFV':
        return "bmg_demo_sound_controls"
        break
    case 'TDQy':
        return "bmg_demo_sound_controls_16"
        break
    case 'ucN2':
        return "bmg_demo_sound_controls_16_4"
        break
    case 'CV4:':
        return "bmg_demo_sound_section"
        break
    case 'z0CP':
        return "bmg_demo_sound_section_24"
        break
    case 'hmvb':
        return "bmg_demo_strange"
        break
    case 'b689':
        return "bmg_demo_strange_4"
        break
    case '8Pyg':
        return "bmg_demo_text"
        break
    case '^=9]':
        return "bmg_demo_unknown_thing"
        break
    case 'r1FF':
        return "bmg_demo_unknown_thing_16"
        break
    case 'GDjK':
        return "bmg_demo_unknown_thing_24t0"
        break
    case 'BR8h':
        return "bmg_demo_unknown_thing_24t0_4"
        break
    case 'J:N;':
        return "bmg_demo_unknown_thing_24t0_32"
        break
    case '?7=8':
        return "bmg_demo_unknown_thing_24t0_44"
        break
    case 'oVpB':
        return "bmg_demo_unknown_thing_24t1"
        break
    case 'KlIx':
        return "bmg_demo_unknown_thing_24t1_4"
        break
    case '3Bs?':
        return "bmg_demo_unknown_thing_24t1_52"
        break
    case 'oL?F':
        return "bmg_demo_unknown_thing_24t1_60"
        break
    case 'A[gL':
        return "bmg_demo_unknown_thing_24t1_64"
        break
    case 'xcWI':
        return "bmg_demo_unknown_thing_24t1_72"
        break
    case 'wN5Z':
        return "bmg_demo_unknown_thing_24t1_72_4"
        break
    case ']a9E':
        return "bmg_demo_unknown_thing_24t2"
        break
    case 'ud0<':
        return "bmg_demo_unknown_thing_24t2_4"
        break
    case 'FxZP':
        return "bmg_demo_unknown_thing_24t2_20"
        break
    case '2sj4':
        return "bmg_demo_unknown"
        break
    case 'q1x9':
        return "bmg_demo_unknown_4"
        break
    case 'qXiv':
        return "bmg_demo_unknown_4_4t5"
        break
    case 'gaN7':
        return "bmg_demo_unknown_4_4t5_0"
        break
    case 'fEf9':
        return "bmg_demo_unknown_4_4t5_24"
        break
    case 'rbdy':
        return "bmg_demo_unknown_4_4t5_24_4"
        break
    case 'W<m]':
        return "bmg_demo_unknown_4_4t5_32"
        break
    case 'IlPm':
        return "bmg_demo_unknown_4_4t5_32_4"
        break
    case 'Edvd':
        return "bmg_demo_unknown_4_4t5_32_4_0"
        break
    case 'H4:a':
        return "bmg_demo_unknown_4_4t5_32_4_0_4"
        break
    case 'D:g2':
        return "bmg_demo_unknown_4_4t5_40"
        break
    case 'Bhe_':
        return "bmg_demo_unknown_4_8t1"
        break
    case 'PMSx':
        return "bmg_demo_unknown_4_8t1_48"
        break
    case 'rjK;':
        return "bmg_demo_unknown_4_8t1_52"
        break
    case 'rW=z':
        return "bmg_demo_unknown_4_8t5"
        break
    case 'k8IO':
        return "bmg_demo_unknown_4_8t9"
        break
    case 'dFdS':
        return "bmg_demo_unknown_4_8t26"
        break
    case 'g_8V':
        return "bmg_demo_var"
        break
    case 'qkSo':
        return "bmg_demo_var_156"
        break
    case 'Ae6A':
        return "bmg_demo_var_168"
        break
    case ']2pK':
        return "bmg_demo_var_168_16"
        break
    case 'ec4E':
        return "bmg_demo_var_168_16_12t7"
        break
    case 'r:h4':
        return "bmg_demo_var_168_16_12t8"
        break
    case 'HL[>':
        return "bmg_demo_var_168_16_12t12"
        break
    case '@V<m':
        return "bmg_demo_var_168_16_12t12_4t7"
        break
    case '125X':
        return "bmg_demo_var_168_16_12t12_4t7_12"
        break
    case 'K?S:':
        return "bmg_demo_var_168_16_12t15"
        break
    case 'kGe8':
        return "bmg_demo_var_168_16_12t15_4"
        break
    case 'vH;a':
        return "bmg_demo_var_168_16_12t15_4_12t5"
        break
    case 'PRDe':
        return "bmg_demo_var_168_16_12t15_4_12t5_4"
        break
    case 'Q2>W':
        return "bmg_demo_var_168_16_12t15_4_16"
        break
    case 'HJ]e':
        return "bmg_demo_var_168_16_12t18"
        break
    case 'APtz':
        return "bmg_demo_var_168_16_12t18_0"
        break
    case 'PE9v':
        return "bmg_demo_var_168_16_12t25"
        break
    case 'cI:@':
        return "bmg_demo_var_168_16_16"
        break
    case 'Of]Y':
        return "bmg_demo_var_168_24"
        break
    case '4dQo':
        return "bmg_demo_var_168_24_12t2"
        break
    case '6YFB':
        return "bmg_demo_var_168_24_12t2_4t1"
        break
    case 'YGhq':
        return "bmg_demo_var_168_24_12t2_4t4"
        break
    case 'tzHh':
        return "bmg_demo_var_168_24_12t2_4t5"
        break
    case 'yBUE':
        return "bmg_demo_var_168_24_12t2_4t7"
        break
    case 'H>MT':
        return "bmg_demo_var_168_24_12t2_4t11"
        break
    case '_b3V':
        return "bmg_demo_var_168_24_12t2_4t12"
        break
    case '7GXa':
        return "bmg_demo_var_168_24_12t2_4t12_16"
        break
    case 'V6:C':
        return "bmg_demo_var_168_24_12t2_4t17"
        break
    case 'h>O]':
        return "bmg_demo_var_168_24_12t5"
        break
    case 'cnZN':
        return "bmg_demo_var_168_24_12t5_0t1"
        break
    case '4Q:z':
        return "bmg_demo_var_168_24_12t5_0t1_8"
        break
    case '7rWd':
        return "bmg_demo_var_168_24_12t5_0t1_8_12"
        break
    case 'g=If':
        return "bmg_demo_var_168_24_12t5_0t2"
        break
    case 'c;^7':
        return "bmg_demo_var_168_24_12t7"
        break
    case 'QwrS':
        return "bmg_demo_var_168_24_12t7_4t7"
        break
    case 'qX3A':
        return "bmg_demo_var_168_24_12t7_4t7_12"
        break
    case 'xkBV':
        return "bmg_demo_var_168_24_12t14"
        break
    case 'b;HD':
        return "bmg_demo_var_168_24_12t15"
        break
    case 'xpA_':
        return "bmg_demo_var_168_24_12t17"
        break
    case 'tPSa':
        return "bmg_demo_var_168_24_12t18"
        break
    case 'E[DU':
        return "bmg_demo_var_168_24_12t18_8"
        break
    case '^pw2':
        return "bmg_demo_var_168_24_12t23"
        break
    case 'QXg:':
        return "bmg_demo_var_168_24_12t33"
        break
    case '7EKG':
        return "bmg_demo_var_168_24_12t33_4"
        break
    case 'Gf9@':
        return "bmg_demo_var_168_24_12t33_4_16"
        break
    case '3Z8?':
        return "bmg_demo_var_168_24_12t33_4_16_12"
        break
    case 'Xn?5':
        return "bmg_demo_var_168_24_12t33_4_16_16"
        break
    case '?7o8':
        return "bmg_demo_var_168_24_12t33_4_24"
        break
    case ':dW?':
        return "bmg_demo_var_168_24_12t33_4_24_12t7"
        break
    case 'RfLW':
        return "bmg_demo_var_168_24_12t33_4_24_12t15"
        break
    case '6]HU':
        return "bmg_demo_var_168_24_12t33_4_24_12t23"
        break
    case 'c_=b':
        return "bmg_demo_var_168_24_12t33_4_32"
        break
    case 'COk4':
        return "bmg_demo_var_168_24_12t33_4_32_12t5"
        break
    case 'SvcM':
        return "bmg_demo_var_168_24_12t33_4_32_12t5_0"
        break
    case 'L4Wv':
        return "bmg_demo_var_168_24_12t33_4_32_12t15"
        break
    case 'XjwE':
        return "bmg_demo_var_168_24_12t33_4_32_12t23"
        break
    case '>;Xp':
        return "bmg_demo_world_thing"
        break
    case 'nU2K':
        return "bmg_demo_extended_world_link"
        break
    case 'nKTe':
        return "bmg_demo_link"
        break
    case 'c85^':
        return "bmg_demo_link_12"
        break
    case '>JpY':
        return "bmg_demo_link_20"
        break
    case 'hQuD':
        return "bmg_demo_link_20_4"
        break
    case 'KAPY':
        return "bmg_demo_link_44"
        break
    case 'UB1w':
        return "bmg_demo_link_44_12"
        break
    case 'MUW6':
        return "bmg_demo_link_52"
        break
    case 'C@Z0':
        return "bmg_demo_link_52_0"
        break
    case 'Jfcq':
        return "bmg_demo_link_52_0_4"
        break
    case 'e3G2':
        return "bmg_demo_link_52_0_4_4"
        break
    case 'Q?GH':
        return "bmg_demo_link_52_0_4_4_4t1"
        break
    case 'qQP>':
        return "bmg_demo_link_52_0_4_4_8"
        break
    case 'v7=R':
        return "bmg_demo_link_52_0_4_8"
        break
    case '_<q1':
        return "bmg_demo_link_52_0_4_20"
        break
    case '3Xzp':
        return "bmg_demo_link_52_0_4_20_4"
        break
    case '7?De':
        return "bmg_demo_link_52_0_4_20_4_4"
        break
    case 'NoF1':
        return "bmg_demo_link_52_0_4_28"
        break
    case 'T[48':
        return "bmg_demo_link_56"
        break
    case 'EeHt':
        return "bmg_demo_link_56_8"
        break
    case '4kfB':
        return "bmg_demo_mysterious"
        break
    case 'T_9f':
        return "bmg_demo_mysterious_4t5"
        break
    case 'YQ2o':
        return "bmg_demo_mysterious_4t5_16t0"
        break
    case 'UZlh':
        return "bmg_demo_mysterious_4t5_16t2"
        break
    case 'Gemm':
        return "bmg_demo_mysterious_4t5_36"
        break
    case 'IbM=':
        return "bmg_demo_mysterious_4t5_44"
        break
    case 't4Zr':
        return "bmg_demo_mysterious_4t5_52"
        break
    case '6s@3':
        return "bmg_demo_mysterious_4t5_56"
        break
    case 'n2Dn':
        return "bmg_demo_mysterious_8"
        break
    case '==?G':
        return "bmg_demo_world_link_type"
        break
    case 'cfjA':
        return "bmg_demo_world_link_type_0"
        break
    case '7IWl':
        return "bmg_demo_world_link_type_0_20"
        break
    case '_g^g':
        return "bmg_demo_world_link_type_0_20_4"
        break
    case '3rAJ':
        return "bmg_demo_world_link_type_0_20_4_4"
        break
    case '3kaU':
        return "bmg_demo_world_link_type_0_56"
        break
    case '<v4O':
        return "bmg_demo_world_link_type_0_56_4"
        break
    case 'QaV]':
        return "bmg_demo_world_settings"
        break
    case 'j[CS':
        return "bmg_demo_world_settings_0"
        break
    case 'Mu^w':
        return "bmg_demo_world_settings_4"
        break
    case 'sfsX':
        return "bmg_demo_world_settings_56"
        break
    case ']Nkf':
        return "bmg_demo_world_settings_60"
        break
    case 'SM65':
        return "bmg_demo_world_settings_88"
        break
    case 'jMbQ':
        return "bmg_demo_world_settings_100"
        break
    case 'Qkx]':
        return "bmg_demo_world_settings_108"
        break

    case 'tWK>':
        return "bmg_demo_texture_anim_0"
        break
    case '_fbe':
        return "bmg_demo_texture_anim_0_4"
        break
    case 'EtH5':
        return "bmg_demo_texture_anim_0_4_4"
        break
    case 'cyYC':
        return "bmg_demo_texture_anim_0_20"
        break
    case '7ivv':
        return "bmg_demo_basic"
        break
    case 'vdfC':
        return "bmg_demo_basic_4"
        break
    case 'dOo9':
        return "bmg_demo_texture_anim"
        break
    case 'CThc':
        return "bmg_demo_datapack_108"
        break
    case 'o[F3':
        return "bmg_demo_model_anim_3"
        break
    case 'xzyA':
        return "bmg_demo_model_anim_3_24"
        break
    case 'gZtS':
        return "bmg_demo_model_anim_3_32"
        break
    case 'mlao':
        return "bmg_demo_model_anim_1"
        break
    case 'fed9':
        return "bmg_demo_model_anim_1_type_a"
        break
    case 'e6Dh':
        return "bmg_demo_model_anim_1_type_a_24"
        break
    case 'ZOf5':
        return "bmg_demo_model_anim_1_type_a_28"
        break
    case '2k[k':
        return "bmg_demo_model_anim_1_type_a_32"
        break
    case 'JeUR':
        return "bmg_demo_model_anim_1_type_a_36"
        break
    case 'yToO':
        return "bmg_demo_model_anim_1_type_a_52"
        break
    case ']H0t':
        return "bmg_demo_model_anim_1_type_a_52_12"
        break
    case 'Rkkl':
        return "bmg_demo_model_anim_1_type_a_52_16"
        break
    case '=Kkb':
        return "bmg_demo_model_anim_1_type_a_52_20"
        break
    case '34M?':
        return "bmg_demo_model_anim_1_type_a_52_24"
        break
    case 'cbDb':
        return "bmg_demo_model_anim_1_type_a_52_28"
        break
    case ']ZtJ':
        return "bmg_demo_model_anim_1_type_a_52_32"
        break
    case 'n3ay':
        return "bmg_demo_model_anim_1_type_b"
        break
    case 'bJzj':
        return "bmg_demo_model_anim_1_type_b_32"
        break
    case 'GaI0':
        return "bmg_demo_model_anim_1_type_b_36"
        break
    case 'ktsB':
        return "bmg_demo_model_anim_1_type_b_36t0"
        break
    case 'kf_D':
        return "bmg_demo_model_anim_1_type_b_36t3"
        break
    case '5c1m':
        return "bmg_demo_model_anim_1_type_b_36t3_8"
        break
    case 'q3mS':
        return "bmg_demo_model_anim_1_type_b_36t5"
        break
    case 'uP2S':
        return "bmg_demo_model_anim_1_type_b_36t5_16"
        break
    case '3l7b':
        return "bmg_demo_model_anim_1_type_b_36t6"
        break
    case '2tpa':
        return "im_bmg_demo_model_anim_2"
        break
    case 'Ca2a':
        return "bmg_demo_model_anim_2_type_a"
        break
    case 'Ix:y':
        return "bmg_demo_model_anim_2_type_a_16"
        break
    case 'B5or':
        return "bmg_demo_model_anim_2_type_b"
        break
    case 'xLsQ':
        return "bmg_demo_model_anim_2_type_b_16"
        break
    case 'wh<4':
        return "bmg_demo_model_anim_2_type_b_20"
        break
    case 'L26x':
        return "bmg_demo_model_anim_2_type_b_20_40"
        break
    default:
        return null
    }
}

/* end sec_id list */
///////////////////////
/* start import list */

async function im_bmg_demo_x(index) {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_bmg_demo_file_header(0, 0, x[index].format)

    delete globalThis.buffer

}

function im_bmg_demo_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5S25",
        u32_00: u32(o + 0),
        u32_04: u32(o + 4),
        u32_08: u32(o + 8),
        section_12: [],
    })
    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_bmg_demo_directory(16 + (i * 24), x[0].section_12, i, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log(`time in ms each ${g.file_name} datapack imported ${time_array}`)

}

function im_bmg_demo_directory(o, x, i, directory_offset) {

    g = {
        divisible_prev_value: [],
        debug: false,
        game: g.game,
        console: g.console,
        file_version: u32(8),
        file_dir_type: 0,
        type_string: g.type_string,
        file_name: g.file_name,
        endian: g.endian,
        file_extension: g.file_name,
        datapack_offset: 0,
        datapack_ref: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        last_file: false,
        bmg_demo_model_anim_1_array: [],
        bmg_demo_model_anim_1_type_a_array: [],
        bmg_demo_model_anim_1_type_b_array: [],
        bmg_demo_model_anim_2_array: [],
        bmg_demo_model_anim_2_type_a_array: [],
        bmg_demo_model_anim_2_type_b_array: [],
        bmg_demo_model_anim_3_array: [],
        bmg_demo_world_0_64_array: [],
        bmg_demo_world_12_array: [],
        bmg_demo_world_20_array: [],
        bmg_demo_world_92_array: [],
        bmg_demo_world_116_array: [],
        bmg_demo_world_68_array: [],
        bmg_demo_world_84_array: [],
        bmg_demo_world_4_array: [],
        bmg_demo_activator_array: [],
        bmg_demo_event_array: [],
        bmg_demo_flag_array: [],
        bmg_demo_font_array: [],
        bmg_demo_idk_array: [],
        bmg_demo_interface_array: [],
        bmg_demo_model_link_array: [],
        bmg_demo_model_sub_link_array: [],
        bmg_demo_multi_font_array: [],
        bmg_demo_something_array: [],
        bmg_demo_sound_controls_array: [],
        bmg_demo_sound_section_array: [],
        bmg_demo_strange_array: [],
        bmg_demo_text_array: [],
        bmg_demo_thing_array: [],
        bmg_demo_unknown_array: [],
        bmg_demo_var_array: [],
        bmg_demo_world_thing_array: [],
        bmg_demo_extended_world_link_array: [],
        bmg_demo_link_array: [],
        bmg_demo_mysterious_array: [],
        bmg_demo_world_settings_array: [],
        bmg_demo_world_link_array: [],
        bmg_demo_world_link_type_array: [],
        bmg_demo_unknown_thing_array: [],
        model_ref: [],
        bmg_demo_texture_patch_ref: 0,
        animation_patch_ref: 0,
        sound_patch_ref: 0,
        model_patch_ref: 0,
    }

    globalThis.log_array = {
        p_offset: {
            offset: 0,
            array: [],
            pointers: [],
        },

    }

    x.push({
        id: gen_id(),
        sec_id: "^RrX",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_16: u32(o + 16),
        datapack: [],
    })

    g.file_dir_type = return_directory_type(u32(o + 4))

    im_bmg_demo_datapack(u32(o + 20) + directory_offset, 0, x[i].datapack, u32(o + 16))
}

function im_bmg_demo_datapack(o, i, x, e) {
    x.push({
        id: gen_id(),
        sec_id: "4akv",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        //amount?
        u32_12: u32(o + 12),
        //amount?
        u32_16: u32(o + 16),
        //amount?
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        u32_32: u32(o + 32),
        //amount?
        u32_48: u32(o + 48),
        //amount?
        u32_52: u32(o + 52),
        //amount?
        model_56: u32(o + 56),
        section_60: [],
        u32_80: u32(o + 80),
        //amount?
        u32_84: u32(o + 84),
        u32_88: u32(o + 88),
        u32_92: u32(o + 92),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
        u32_104: u32(o + 104),
        section_108: [],
        u32_124: u32(o + 124),
        u32_144: u32(o + 144),
        u32_144: u32(o + 144),
        ordered: [],
        index_patch_list: [],
        audio: [],
    });

    g.datapack_offset = o
    g.datapack_ref = x

    let end_datapack = o + e
    let audio_offset = o + 152
    let offset_patch_list = end_datapack - (u32(o + 12) * 4 + (u32(o + 56) * 8))
    g.m = offset_patch_list - u32(o)

    let index_patch_list_amount = u32(o + 16) + u32(o + 52) + u32(o + 28)
    index_patch_list_amount *= 8

    index_patch_list_amount = divisible(index_patch_list_amount, 32)
    let index_patch_list = g.m - index_patch_list_amount

    im_bmg_demo_get_general_offsets_list(o, g.m + u32(o))

    im_bmg_demo_index_patch_list(index_patch_list, x[0].index_patch_list)

    im_bmg_demo_ordered(g.m, x[i].ordered)

    x[i].index_patch_list.push({
    // index_patch_list_buffer: buffer.slice(o, endoffset),
    // ordered_list_buffer: buffer.slice(o, endoffset),
    // offset_patch_list: buffer.slice(o, endoffset)
    });

    if (u32(o + 4)) {
        let end_after_datapack = audio_offset + divisible((u32(o + 8) * 4), 32)
        for (let ii = 0; ii < u32(o + 32); ii++) {
            im_bmg_demo_basic_audio(audio_offset + (ii * 4), ii, x[i].audio, end_after_datapack)
        }
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_bmg_demo_texture_anim(u32(o + 60) + (ii * 12) + g.m, ii, x[i].section_60);
    }

    for (let ii = 0; ii < u32(o + 80); ii++) {
        im_bmg_demo_datapack_108(u32(o + 108) + (ii * 8) + g.m, ii, x[i].section_108);
    }

    return x[i].id
    // 152 bytes;

}

function im_bmg_demo_basic_audio(o, i, x, end) {
    x.push({
        id: gen_id(),
        sec_id: "XH?<",
        section_0: [],
    });

    im_bmg_demo_basic_audio_0(u32(o + 0) + end, x[i].section_0,end)
    // offset?
    return x[i].id
    // 4 bytes;

}
function im_bmg_demo_basic_audio_0(o, x,end) {
    let start = end + u32(o + 0)
    let start_string = start + u32(o + 4)
    x.push({
        sec_id: "11Hn",
        section_0: [],
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        string: im_string(start_string -g.m, 0, false),
    });

    u32(o + 0) ? im_bmg_demo_basic_audio_0_0(u32(o + 0) + end, x[0].section_0,end,u32(o + 4)) : 0;

    // 16 bytes;

}
function im_bmg_demo_basic_audio_0_0(o, x,end,length) {
    let e = o + 96
    let buffer_end_offset = e + length
    x.push({
        sec_id: "Ry[O",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
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
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        temp_buffer: convert_arraybuffer_base64(buffer.slice(e, buffer_end_offset)),
    });

    // 96 bytes;

}

function im_bmg_demo_index_patch_list(o, x) {
    let bmg_demo_texture_animation_offset = o + (u32(g.datapack_offset + 16) * 8)
    let sound_offset = o + ((u32(g.datapack_offset + 16) + u32(g.datapack_offset + 52)) * 8)

    x.push({
        sec_id: "ipll",
        bmg_demo_texture: im_patch_list(o, u32(g.datapack_offset + 16), 't'),
        bmg_demo_texture_animation: im_patch_list(bmg_demo_texture_animation_offset, u32(g.datapack_offset + 52), 'a'),
        sound: im_patch_list(sound_offset, u32(g.datapack_offset + 28), 's'),
    })

    g.bmg_demo_texture_patch_ref = x[0].bmg_demo_texture
    g.animation_patch_ref = x[0].bmg_demo_texture_animation
    g.sound_patch_ref = x[0].sound

    // no reason to keep this in x
}

function im_bmg_demo_get_general_offsets_list(o, patch_offset) {
    let patchlistoffset = patch_offset
    patchlistoffset += u32(o + 56) * 8

    log_array.p_offset.offset = patchlistoffset
    for (let i = 0; i < u32(o + 12); i++) {
        log_array.p_offset.array.push(u32(patchlistoffset + (i * 4)))
    }

    log_array.p_offset.array.sort(function(a, b) {
        return a - b;
    });

}

function im_bmg_demo_ordered(o, x) {

    x.push({
        sec_id: "ordr",
        id: gen_id(),
        bmg_demo_file_specific_section: [],
        bmg_demo_model_anim_1: [],
        bmg_demo_model_anim_2: [],
        bmg_demo_model_anim_3: [],
        bmg_demo_unordered_list: [],
        bmg_demo_offset_patch_list: [],

    })

    im_bmg_demo_offset_patch_list(u32(g.datapack_offset) + g.m, x[0].bmg_demo_offset_patch_list)

    im_bmg_demo_unordered(o, x[0].bmg_demo_unordered_list)
    g.ordered_ref = x[0]

    switch (g.file_dir_type) {
    case "interface":
        im_bmg_demo_basic(o, 0, x[0].bmg_demo_file_specific_section)
        break
    case "link":
        im_bmg_demo_basic(o, 0, x[0].bmg_demo_file_specific_section)
        break
    case "world":
        im_bmg_demo_world(o, 0, x[0].bmg_demo_file_specific_section)
        break
    default:
        console.pk_log('file type is not set')
    }

}

function im_bmg_demo_offset_patch_list(o, x) {
    x.push({
        sec_id: "opll",
        model: im_patch_list(o, u32(g.datapack_offset + 56), 'm'),
    })
    g.model_patch_ref = x[0].model

}

function im_bmg_demo_unordered(o, x) {
    x.push({
        sec_id: "4unr",
        bmg_demo_world_0_64: [],
        bmg_demo_world_12: [],
        bmg_demo_world_20: [],
        bmg_demo_world_92: [],
        bmg_demo_world_116: [],
        bmg_demo_world_68: [],
        bmg_demo_world_84: [],
        bmg_demo_world_4: [],
        bmg_demo_model_anim_1_type_a: [],
        bmg_demo_model_anim_2_type_a: [],
        bmg_demo_activator: [],
        bmg_demo_event: [],
        bmg_demo_flag: [],
        bmg_demo_font: [],
        bmg_demo_idk: [],
        bmg_demo_interface: [],
        bmg_demo_model_link: [],
        bmg_demo_model_sub_link: [],
        bmg_demo_multi_font: [],
        bmg_demo_something: [],
        bmg_demo_sound_controls: [],
        bmg_demo_sound_section: [],
        bmg_demo_strange: [],
        bmg_demo_text: [],
        bmg_demo_unknown_thing: [],
        bmg_demo_unknown: [],
        bmg_demo_var: [],
        bmg_demo_world_thing: [],
        bmg_demo_extended_world_link: [],
        bmg_demo_link: [],
        bmg_demo_mysterious: [],
        bmg_demo_world_link_type: [],
        bmg_demo_world_settings: [],
        bmg_demo_texture_anim_0: [],

    })
    g.unordered_ref = x[0]

}

function im_bmg_demo_activator(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "JGGu",
        section_0: im_string(u32(o + 0), 0, false),
        unordered_bmg_demo_model_anim_2_type_a_8: 0,
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        section_28: [],
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        section_108: [],
        u32_120: u32(o + 120),
        u32_148: u32(o + 148),
        u8_158: u8(o + 158),
        u8_180: u8(o + 180),
        f32_184: f32(o + 184),
        section_188: [],
        u32_216: u32(o + 216),
        //amount?
        section_220: [],
        u32_224: u32(o + 224),
        section_228: [],
        u32_232: u32(o + 232),
        //amount?
        section_236: [],
        u32_248: u32(o + 248),
        section_252: [],
    });

    x[i].unordered_bmg_demo_model_anim_2_type_a_8 = in_ml(u32(o + 8), g.bmg_demo_model_anim_2_type_a_array, im_bmg_demo_model_anim_2_type_a, g.unordered_ref.bmg_demo_model_anim_2_type_a);
    u32(o + 28) ? im_bmg_demo_activator_28(u32(o + 28) + g.m, x[i].section_28) : 0;
    u32(o + 108) ? im_bmg_demo_activator_108(u32(o + 108) + g.m, x[i].section_108) : 0;
    u32(o + 188) ? im_bmg_demo_activator_188(u32(o + 188) + g.m, x[i].section_188) : 0;

    for (let ii = 0; ii < u32(o + 216); ii++) {
        im_bmg_demo_activator_220(u32(o + 220) + (ii * 28) + g.m, ii, x[i].section_220);
    }
    u32(o + 228) ? im_bmg_demo_activator_228(u32(o + 228) + g.m, x[i].section_228) : 0;

    for (let ii = 0; ii < u32(o + 232); ii++) {
        im_bmg_demo_activator_236(u32(o + 236) + (ii * 36) + g.m, ii, x[i].section_236);
    }
    u32(o + 252) ? im_bmg_demo_activator_252(u32(o + 252) + g.m, x[i].section_252) : 0;
    return x[i].id
    // 256 bytes;

}
function im_bmg_demo_activator_28(o, x) {
    x.push({
        sec_id: "CRap",
        f32_8: f32(o + 8),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_108(o, x) {
    x.push({
        sec_id: "DmyF",
        f32_0: f32(o + 0),
        section_4: [],
        section_8: [],
    });

    u32(o + 4) ? im_bmg_demo_activator_108_4(u32(o + 4) + g.m, x[0].section_4) : 0;
    u32(o + 8) ? im_bmg_demo_activator_108_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_activator_108_4(o, x) {
    x.push({
        sec_id: "VzcU",
        u8_0: u8(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_108_8(o, x) {
    x.push({
        sec_id: "3g?m",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_activator_108_8_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_activator_108_8_0(o, x) {
    x.push({
        sec_id: "M?ZD",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_activator_108_8_0_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_activator_108_8_0_4(o, x) {
    x.push({
        sec_id: "D6=0",
    });

    // 32 bytes;

}
function im_bmg_demo_activator_188(o, x) {
    x.push({
        sec_id: "]ozp",
    });

    // 32 bytes;

}
function im_bmg_demo_activator_220(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Rib8",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        section_8: [],
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
    });

    u32(o + 8) ? im_bmg_demo_activator_220_8(u32(o + 8) + g.m, x[i].section_8) : 0;

}
function im_bmg_demo_activator_220_8(o, x) {
    x.push({
        sec_id: "25XZ",
        unordered_bmg_demo_flag_0: 0,
    });

    x[0].unordered_bmg_demo_flag_0 = in_ml(u32(o + 0), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

    // 32 bytes;

}
function im_bmg_demo_activator_228(o, x) {
    x.push({
        sec_id: "264e",
        u8_0: u8(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 4) ? im_bmg_demo_activator_228_4(u32(o + 4) + g.m, x[0].section_4) : 0;
    u32(o + 12) ? im_bmg_demo_activator_228_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    for (let i = 0; i < u32(o + 16); i++) {
        im_bmg_demo_activator_228_20(u32(o + 20) + (i * 16) + g.m, i, x[0].section_20);
    }

    // 32 bytes;

}
function im_bmg_demo_activator_228_4(o, x) {
    x.push({
        sec_id: "NGdp",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_228_12(o, x) {
    x.push({
        sec_id: "8H8=",
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_activator_228_12_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_activator_228_12_4(o, x) {
    x.push({
        sec_id: "<6Dq",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_228_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Qy1h",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_bmg_demo_activator_228_20_12(u32(o + 12) + g.m, x[i].section_12) : 0;

}
function im_bmg_demo_activator_228_20_12(o, x) {
    x.push({
        sec_id: "^CJ9",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_236(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Svsm",
        u32_0: u32(o + 0),
        section_4: [],
        section_8: im_string(u32(o + 8), 0, false),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u8_24: u8(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    u32(o + 4) ? im_bmg_demo_activator_236_4(u32(o + 4) + g.m, x[i].section_4) : 0;

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_bmg_demo_activator_236_32(u32(o + 32) + (ii * 88) + g.m, ii, x[i].section_32);
    }

}
function im_bmg_demo_activator_236_4(o, x) {
    x.push({
        sec_id: "fT=6",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_activator_236_4_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_activator_236_4_4(o, x) {
    x.push({
        sec_id: "9>m>",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_236_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "H;;^",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        section_8: [],
        section_16: [],
        f32_28: f32(o + 28),
        u32_40: u32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        u8_62: u8(o + 62),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        section_84: [],
    });

    u32(o + 8) ? im_bmg_demo_activator_236_32_8(u32(o + 8) + g.m, x[i].section_8) : 0;
    u32(o + 16) ? im_bmg_demo_activator_236_32_16(u32(o + 16) + g.m, x[i].section_16) : 0;

    for (let ii = 0; ii < u32(o + 72); ii++) {
        im_bmg_demo_activator_236_32_76(u32(o + 76) + (ii * 16) + g.m, ii, x[i].section_76);
    }
    u32(o + 84) ? im_bmg_demo_activator_236_32_84(u32(o + 84) + g.m, x[i].section_84) : 0;

}
function im_bmg_demo_activator_236_32_8(o, x) {
    x.push({
        sec_id: "cGTs",
        unordered_bmg_demo_model_link_0: 0,
    });

    x[0].unordered_bmg_demo_model_link_0 = in_ml(u32(o + 0), g.bmg_demo_model_link_array, im_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link);

    // 32 bytes;

}
function im_bmg_demo_activator_236_32_16(o, x) {
    x.push({
        sec_id: "lSqL",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_236_32_76(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "oMAW",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        section_12: [],
    });

    switch (u32(o + 4)) {
    case 0:
        u32(o + 12) ? im_bmg_demo_activator_236_32_76_12t0(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_bmg_demo_activator_236_32_76_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 23:
        u32(o + 12) ? im_bmg_demo_activator_236_32_76_12t23(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_bmg_demo_activator_236_32_76_12t0(o, x) {
    x.push({
        sec_id: "]CEB",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_236_32_76_12t8(o, x) {
    x.push({
        sec_id: "3XRv",
        u32_0: u32(o + 0),
        //amount?
        unordered_bmg_demo_mysterious_4: [],
    });


    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].unordered_bmg_demo_mysterious_4);
    }

    // 32 bytes;

}
function im_bmg_demo_activator_236_32_76_12t23(o, x) {
    x.push({
        sec_id: "g]4K",
        u32_0: u32(o + 0),
        //amount?
        unordered_bmg_demo_mysterious_4: [],
    });

for (let i = 0; i < u32(o + 0); i++) {
    im_bmg_demo_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].unordered_bmg_demo_mysterious_4);
}

    // 32 bytes;

}
function im_bmg_demo_activator_236_32_84(o, x) {
    x.push({
        sec_id: "9kL5",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_activator_252(o, x) {
    x.push({
        sec_id: "RcKR",
        u32_0: u32(o + 0),
        //amount?
        unordered_bmg_demo_mysterious_4: [],
    });

for (let i = 0; i < u32(o + 0); i++) {
    im_bmg_demo_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].unordered_bmg_demo_mysterious_4);
}

    // 32 bytes;

}
function im_bmg_demo_event(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "PWSR",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_bmg_demo_event_12(u32(o + 12) + (ii * 28) + g.m, ii, x[i].section_12);
    }
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_event_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "mPi7",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u32_8: u32(o + 8),
        section_12: [],
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    switch (u32(o + 8)) {
    case 2:
        u32(o + 12) ? im_bmg_demo_event_12_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_bmg_demo_event_12_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_bmg_demo_event_12_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 14:
        u32(o + 12) ? im_bmg_demo_event_12_12t14(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_bmg_demo_event_12_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 17:
        u32(o + 12) ? im_bmg_demo_event_12_12t17(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 19:
        u32(o + 12) ? im_bmg_demo_event_12_12t19(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 34:
        x[i].section_12 = in_ml(u32(o + 12), g.bmg_demo_event_array, im_bmg_demo_event, g.unordered_ref.bmg_demo_event);
        break;
    }
}
function im_bmg_demo_event_12_12t2(o, x) {
    x.push({
        sec_id: "foOa",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_event_12_12t2_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_event_12_12t2_4(o, x) {
    x.push({
        sec_id: "NIl[",
        u8_1: u8(o + 1),
        unordered_bmg_demo_extended_world_link_16: 0,
        u32_20: u32(o + 20),
    });

    x[0].unordered_bmg_demo_extended_world_link_16 = in_ml(u32(o + 16), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 64 bytes;

}
function im_bmg_demo_event_12_12t5(o, x) {
    x.push({
        sec_id: "Mcru",
        section_0: [],
        u8_4: u8(o + 4),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 0) ? im_bmg_demo_event_12_12t5_0t1(u32(o + 0) + g.m, x[0].section_0) : 0;
        break;
    case 2:
        u32(o + 0) ? im_bmg_demo_event_12_12t5_0t2(u32(o + 0) + g.m, x[0].section_0) : 0;
        break;
    }
    // 32 bytes;

}
function im_bmg_demo_event_12_12t5_0t1(o, x) {
    x.push({
        sec_id: "@pJ=",
        unordered_bmg_demo_interface_0: 0,
        u8_5: u8(o + 5),
        section_8: [],
    });

    x[0].unordered_bmg_demo_interface_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
    u32(o + 8) ? im_bmg_demo_event_12_12t5_0t1_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_event_12_12t5_0t1_8(o, x) {
    x.push({
        sec_id: "HApO",
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_bmg_demo_event_12_12t5_0t1_8_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_event_12_12t5_0t1_8_12(o, x) {
    x.push({
        sec_id: "GLw3",
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_event_12_12t5_0t2(o, x) {
    x.push({
        sec_id: "0Tx?",
        u8_0: u8(o + 0),
        unordered_bmg_demo_interface_4: 0,
    });

    x[0].unordered_bmg_demo_interface_4 = in_ml(u32(o + 4), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);

    // 32 bytes;

}
function im_bmg_demo_event_12_12t7(o, x) {
    x.push({
        sec_id: "hw>l",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        unordered_bmg_demo_flag_4: 0,
        f32_8: f32(o + 8),
    });

    x[0].unordered_bmg_demo_flag_4 = in_ml(u32(o + 4), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

    // 32 bytes;

}
function im_bmg_demo_event_12_12t14(o, x) {
    x.push({
        sec_id: "K>L8",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_event_12_12t15(o, x) {
    x.push({
        sec_id: "6aWN",
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_event_12_12t17(o, x) {
    x.push({
        sec_id: "mFLG",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_event_12_12t19(o, x) {
    x.push({
        sec_id: "T<pZ",
        u32_0: u32(o + 0),
        unordered_bmg_demo_extended_world_link_4: 0,
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        f32_12: f32(o + 12),
    });

    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_event_12_12t23(o, x) {
    x.push({
        sec_id: ">Z:8",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    });

    x[0].unordered_bmg_demo_unknown_0 = in_ml(u32(o + 0), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);
    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_flag(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Ii<L",
        u32_0: u32(o + 0),
        section_8: im_string(u32(o + 8), 0, false),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        section_20: [],
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        u8_44: u8(o + 44),
    });

    switch (u32(o + 16)) {
    case 0:
        u32(o + 20) ? im_bmg_demo_flag_20t0(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 1:
        u32(o + 20) ? im_bmg_demo_flag_20t1(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 2:
        u32(o + 20) ? im_bmg_demo_flag_20t2(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 3:
        u32(o + 20) ? im_bmg_demo_flag_20t3(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 8:
        u32(o + 20) ? im_bmg_demo_flag_20t8(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 9:
        u32(o + 20) ? im_bmg_demo_flag_20t9(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    case 10:
        u32(o + 20) ? im_bmg_demo_flag_20t10(u32(o + 20) + g.m, x[i].section_20) : 0;
        break;
    }
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_flag_20t0(o, x) {
    x.push({
        sec_id: "nyyF",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_flag_20t1(o, x) {
    x.push({
        sec_id: "mcZh",
    });

    // 32 bytes;

}
function im_bmg_demo_flag_20t2(o, x) {
    x.push({
        sec_id: "ahXp",
    });

    // 32 bytes;

}
function im_bmg_demo_flag_20t3(o, x) {
    x.push({
        sec_id: "[k3^",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_flag_20t8(o, x) {
    x.push({
        sec_id: "M:Th",
        unordered_bmg_demo_flag_0: 0,
    });

    x[0].unordered_bmg_demo_flag_0 = in_ml(u32(o + 0), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

    // 32 bytes;

}
function im_bmg_demo_flag_20t9(o, x) {
    x.push({
        sec_id: "Z:PL",
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_bmg_demo_flag_20t9_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_flag_20t9_12(o, x) {
    x.push({
        sec_id: "Ea1X",
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_flag_20t10(o, x) {
    x.push({
        sec_id: "@XQf",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_flag_20t10_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_flag_20t10_4(o, x) {
    x.push({
        sec_id: "YT1S",
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bmg_demo_font(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ">NJK",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
        unordered_bmg_demo_model_anim_3_4: 0,
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    x[i].unordered_bmg_demo_model_anim_3_4 = in_ml(u32(o + 4), g.bmg_demo_model_anim_3_array, im_bmg_demo_model_anim_3, g.ordered_ref.bmg_demo_model_anim_3);
    u32(o + 20) ? im_bmg_demo_font_20(u32(o + 20) + g.m, x[i].section_20) : 0;

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_bmg_demo_font_28(u32(o + 28) + (ii * 12) + g.m, ii, x[i].section_28);
    }
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_font_20(o, x) {
    x.push({
        sec_id: ":AAO",
        f32_0: f32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_font_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "BfM^",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_idk(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "mD;@",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: [],
        f32_12: f32(o + 12),
        section_24: [],
        u32_52: u32(o + 52),
        //amount?
        unordered_bmg_demo_mysterious_56: [],
        u8_64: u8(o + 64),
        u8_65: u8(o + 65),
        u8_66: u8(o + 66),
        u8_67: u8(o + 67),
    });

    switch (u8(o + 0)) {
    case 0:
        x[i].section_4 = im_patch(g.model_ref, o + 4)
        break;
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_model_link_array, im_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link);
        break;
    }
    u32(o + 24) ? im_bmg_demo_idk_24(u32(o + 24) + g.m, x[i].section_24) : 0;
for (let ii = 0; ii < u32(o + 52); ii++) {
    im_bmg_demo_mysterious(u32(o + 56) + (ii * 64) + g.m, ii, x[i].unordered_bmg_demo_mysterious_56);
}
    return x[i].id
    // 96 bytes;

}
function im_bmg_demo_idk_24(o, x) {
    x.push({
        sec_id: "MFNb",
        f32_4: f32(o + 4),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_32: u32(o + 32),
        u8_36: u8(o + 36),
        u8_37: u8(o + 37),
        u8_38: u8(o + 38),
        u8_39: u8(o + 39),
        unordered_bmg_demo_world_thing_40: 0,
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        section_48: [],
        section_60: [],
    });

    x[0].unordered_bmg_demo_world_thing_40 = in_ml(u32(o + 40), g.bmg_demo_world_thing_array, im_bmg_demo_world_thing, g.unordered_ref.bmg_demo_world_thing);
    u32(o + 48) ? im_bmg_demo_idk_24_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    u32(o + 60) ? im_bmg_demo_idk_24_60(u32(o + 60) + g.m, x[0].section_60) : 0;

    // 96 bytes;

}
function im_bmg_demo_idk_24_48(o, x) {
    x.push({
        sec_id: "nX5W",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 64 bytes;

}
function im_bmg_demo_idk_24_60(o, x) {
    x.push({
        sec_id: "CUh>",
        f32_0: f32(o + 0),
        section_4: [],
        section_8: [],
    });

    u32(o + 4) ? im_bmg_demo_idk_24_60_4(u32(o + 4) + g.m, x[0].section_4) : 0;
    u32(o + 8) ? im_bmg_demo_idk_24_60_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_idk_24_60_4(o, x) {
    x.push({
        sec_id: "OUTT",
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_bmg_demo_idk_24_60_8(o, x) {
    x.push({
        sec_id: "MhZ4",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_idk_24_60_8_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_idk_24_60_8_0(o, x) {
    x.push({
        sec_id: "LUxg",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_idk_24_60_8_0_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_idk_24_60_8_0_4(o, x) {
    x.push({
        sec_id: "qGK^",
    });

    // 32 bytes;

}
function im_bmg_demo_interface(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "kgDb",
        section_0: im_string(u32(o + 0), 0, false),
        u8_5: u8(o + 5),
        u8_7: u8(o + 7),
        u32_8: u32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        unordered_bmg_demo_sound_controls_16: 0,
        unordered_bmg_demo_sound_controls_20: 0,
        unordered_bmg_demo_sound_controls_28: 0,
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        section_48: [],
        section_52: [],
        f32_60: f32(o + 60),
        section_64: [],
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        u32_76: u32(o + 76),
        //amount?
        section_80: [],
    });

    x[i].unordered_bmg_demo_sound_controls_16 = in_ml(u32(o + 16), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);
    x[i].unordered_bmg_demo_sound_controls_20 = in_ml(u32(o + 20), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);
    x[i].unordered_bmg_demo_sound_controls_28 = in_ml(u32(o + 28), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);
    u32(o + 48) ? im_bmg_demo_interface_48(u32(o + 48) + g.m, x[i].section_48) : 0;
    u32(o + 52) ? im_bmg_demo_interface_52(u32(o + 52) + g.m, x[i].section_52) : 0;
    u32(o + 64) ? im_bmg_demo_interface_64(u32(o + 64) + g.m, x[i].section_64) : 0;

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_bmg_demo_interface_72(u32(o + 72) + (ii * 28) + g.m, ii, x[i].section_72);
    }

    for (let ii = 0; ii < u32(o + 76); ii++) {
        im_bmg_demo_interface_80(u32(o + 80) + (ii * 100) + g.m, ii, x[i].section_80);
    }
    return x[i].id
    // 96 bytes;

}
function im_bmg_demo_interface_48(o, x) {
    x.push({
        sec_id: "bbOk",
        f32_0: f32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_52(o, x) {
    x.push({
        sec_id: "PULi",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_interface_52_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_52_0(o, x) {
    x.push({
        sec_id: "nUas",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_64(o, x) {
    x.push({
        sec_id: ":1Jf",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_interface_64_4(u32(o + 4) + (i * 36) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_interface_64_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "K83n",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u8_7: u8(o + 7),
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        u32_24: u32(o + 24),
        u8_32: u8(o + 32),
        u8_33: u8(o + 33),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 12) ? im_bmg_demo_interface_64_4_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_bmg_demo_interface_64_4_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_bmg_demo_interface_64_4_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_bmg_demo_interface_64_4_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 10:
        u32(o + 12) ? im_bmg_demo_interface_64_4_12t10(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_bmg_demo_interface_64_4_12t1(o, x) {
    x.push({
        sec_id: "nwIY",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_64_4_12t1_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_64_4_12t1_4(o, x) {
    x.push({
        sec_id: "Xs?:",
        u8_12: u8(o + 12),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_64_4_12t5(o, x) {
    x.push({
        sec_id: "?e::",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_64_4_12t7(o, x) {
    x.push({
        sec_id: "aSsb",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_64_4_12t8(o, x) {
    x.push({
        sec_id: "NHow",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_interface_64_4_12t8_4(u32(o + 4) + (i * 12) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_interface_64_4_12t8_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "YIZ?",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
    });

}
function im_bmg_demo_interface_64_4_12t10(o, x) {
    x.push({
        sec_id: "lwc@",
        unordered_bmg_demo_flag_0: 0,
    });

    x[0].unordered_bmg_demo_flag_0 = in_ml(u32(o + 0), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

    // 32 bytes;

}
function im_bmg_demo_interface_72(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Y<8@",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_72_4(u32(o + 4) + g.m, x[i].section_4) : 0;

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bmg_demo_interface_72_16(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bmg_demo_interface_72_24(u32(o + 24) + (ii * 40) + g.m, ii, x[i].section_24);
    }

}
function im_bmg_demo_interface_72_4(o, x) {
    x.push({
        sec_id: "_;ZI",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "oL04",
        u8_0: u8(o + 0),
        section_4: [],
    });

    switch (u8(o + 0)) {
    case 2:
        u32(o + 4) ? im_bmg_demo_interface_72_16_4t2(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    case 3:
        u32(o + 4) ? im_bmg_demo_interface_72_16_4t3(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    }
}
function im_bmg_demo_interface_72_16_4t2(o, x) {
    x.push({
        sec_id: "tvJ[",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_16_4t3(o, x) {
    x.push({
        sec_id: "qv?T",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: im_string(u32(o + 4), 0, false),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "EtIN",
        u8_0: u8(o + 0),
        section_4: [],
        section_12: [],
        unordered_bmg_demo_sound_controls_28: 0,
    });

    switch (u8(o + 0)) {
    case 1:
    case 31:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
        break;
    case 11:
        u32(o + 4) ? im_bmg_demo_interface_72_24_4t11(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    }
    u32(o + 12) ? im_bmg_demo_interface_72_24_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    x[i].unordered_bmg_demo_sound_controls_28 = in_ml(u32(o + 28), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);

}
function im_bmg_demo_interface_72_24_4t11(o, x) {
    x.push({
        sec_id: "qQUZ",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_interface_72_24_4t11_4(u32(o + 4) + (i * 16) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_4t11_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "O1Y0",
        section_0: im_string(u32(o + 0), 0, false),
        u8_9: u8(o + 9),
        section_12: [],
    });

    switch (u8(o + 9)) {
    case 0:
        u32(o + 12) ? im_bmg_demo_interface_72_24_4t11_4_12t0(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 1:
        u32(o + 12) ? im_bmg_demo_interface_72_24_4t11_4_12t1(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_bmg_demo_interface_72_24_4t11_4_12t0(o, x) {
    x.push({
        sec_id: "k7ct",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u32_8: u32(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_4t11_4_12t1(o, x) {
    x.push({
        sec_id: "GZKz",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) ? im_bmg_demo_interface_72_24_4t11_4_12t1_0(u32(o + 0) + g.m, x[0].section_0) : 0;
    u32(o + 4) ? im_bmg_demo_interface_72_24_4t11_4_12t1_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_4t11_4_12t1_0(o, x) {
    x.push({
        sec_id: ";4<O",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_72_24_4t11_4_12t1_0_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_4t11_4_12t1_0_4(o, x) {
    x.push({
        sec_id: "V5bd",
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_4t11_4_12t1_4(o, x) {
    x.push({
        sec_id: "N^^c",
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_12(o, x) {
    x.push({
        sec_id: "lm@3",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) ? im_bmg_demo_interface_72_24_12_0(u32(o + 0) + g.m, x[0].section_0) : 0;
    u32(o + 4) ? im_bmg_demo_interface_72_24_12_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_12_0(o, x) {
    x.push({
        sec_id: "MlOH",
    });

    // 32 bytes;

}
function im_bmg_demo_interface_72_24_12_4(o, x) {
    x.push({
        sec_id: "v82V",
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "mzy?",
        section_0: im_string(u32(o + 0), 0, false),
        u8_8: u8(o + 8),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
        section_16: im_string(u32(o + 16), 0, false),
        u32_20: u32(o + 20),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        section_32: [],
        section_36: [],
        section_40: [],
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        section_52: [],
        u32_56: u32(o + 56),
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
        u8_72: u8(o + 72),
        u8_73: u8(o + 73),
        u8_74: u8(o + 74),
        u8_75: u8(o + 75),
        u8_76: u8(o + 76),
        u8_77: u8(o + 77),
        u8_78: u8(o + 78),
        u8_79: u8(o + 79),
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
    });

    u32(o + 12) ? im_bmg_demo_interface_80_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 32) ? im_bmg_demo_interface_80_32(u32(o + 32) + g.m, x[i].section_32) : 0;
    switch (u8(o + 26)) {
    case 0:
        u32(o + 36) ? im_bmg_demo_interface_80_36t0(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 1:
        u32(o + 36) ? im_bmg_demo_interface_80_36t1(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 6:
        u32(o + 36) ? im_bmg_demo_interface_80_36t6(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 7:
        u32(o + 36) ? im_bmg_demo_interface_80_36t7(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 10:
        u32(o + 36) ? im_bmg_demo_interface_80_36t10(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 12:
        u32(o + 36) ? im_bmg_demo_interface_80_36t12(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 13:
        u32(o + 36) ? im_bmg_demo_interface_80_36t13(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 14:
        u32(o + 36) ? im_bmg_demo_interface_80_36t14(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    case 15:
        u32(o + 36) ? im_bmg_demo_interface_80_36t15(u32(o + 36) + g.m, x[i].section_36) : 0;
        break;
    }
    u32(o + 40) ? im_bmg_demo_interface_80_40(u32(o + 40) + g.m, x[i].section_40) : 0;
    u32(o + 52) ? im_bmg_demo_interface_80_52(u32(o + 52) + g.m, x[i].section_52) : 0;

    for (let ii = 0; ii < u32(o + 64); ii++) {
        im_bmg_demo_interface_80_68(u32(o + 68) + (ii * 12) + g.m, ii, x[i].section_68);
    }

}
function im_bmg_demo_interface_80_12(o, x) {
    x.push({
        sec_id: "qTe7",
        u8_0: u8(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_32(o, x) {
    x.push({
        sec_id: "seO0",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bmg_demo_interface_80_32_8(u32(o + 8) + (i * 12) + g.m, i, x[0].section_8);
    }

    // 32 bytes;

}
function im_bmg_demo_interface_80_32_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "B78f",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_80_32_8_4(u32(o + 4) + g.m, x[i].section_4) : 0;

}
function im_bmg_demo_interface_80_32_8_4(o, x) {
    x.push({
        sec_id: "mf[2",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t0(o, x) {
    x.push({
        sec_id: "dv^o",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        texture_4: im_patch(g.bmg_demo_texture_patch_ref, o + 4),
        section_8: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
    });

    u32(o + 8) ? im_bmg_demo_interface_80_36t0_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t0_8(o, x) {
    x.push({
        sec_id: "eiDd",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        u8_16: u8(o + 16),
        u8_19: u8(o + 19),
        u32_20: u32(o + 20),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_interface_80_36t0_8_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t0_8_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "CfI=",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
    });

}
function im_bmg_demo_interface_80_36t1(o, x) {
    x.push({
        sec_id: "5t@<",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        unordered_bmg_demo_text_4: 0,
        section_8: [],
        section_12: [],
        section_16: [],
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        f32_28: f32(o + 28),
    });

    x[0].unordered_bmg_demo_text_4 = in_ml(u32(o + 4), g.bmg_demo_text_array, im_bmg_demo_text, g.unordered_ref.bmg_demo_text);
    switch (u8(o + 0)) {
    case 1:
        u32(o + 8) ? im_bmg_demo_interface_80_36t1_8t1(u32(o + 8) + g.m, x[0].section_8) : 0;
        break;
    case 3:
        u32(o + 8) ? im_bmg_demo_interface_80_36t1_8t3(u32(o + 8) + g.m, x[0].section_8) : 0;
        break;
    case 4:
        u32(o + 8) ? im_bmg_demo_interface_80_36t1_8t4(u32(o + 8) + g.m, x[0].section_8) : 0;
        break;
    }
    switch (u8(o + 2)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
        break;
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.bmg_demo_multi_font_array, im_bmg_demo_multi_font, g.unordered_ref.bmg_demo_multi_font);
        break;
    }
    u32(o + 16) ? im_bmg_demo_interface_80_36t1_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t1_8t1(o, x) {
    x.push({
        sec_id: "fBV8",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_11: u8(o + 11),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_interface_80_36t1_8t1_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t1_8t1_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "z1fL",
        unordered_bmg_demo_text_0: 0,
    });

    x[i].unordered_bmg_demo_text_0 = in_ml(u32(o + 0), g.bmg_demo_text_array, im_bmg_demo_text, g.unordered_ref.bmg_demo_text);

}
function im_bmg_demo_interface_80_36t1_8t3(o, x) {
    x.push({
        sec_id: "Y[0P",
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t1_8t4(o, x) {
    x.push({
        sec_id: "dp5R",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_80_36t1_8t4_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t1_8t4_4(o, x) {
    x.push({
        sec_id: "Ol^h",
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_80_36t1_8t4_4_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t1_8t4_4_4(o, x) {
    x.push({
        sec_id: "j]@5",
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t1_16(o, x) {
    x.push({
        sec_id: "qmc8",
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t6(o, x) {
    x.push({
        sec_id: "EKL9",
        unordered_bmg_demo_interface_0: 0,
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        section_12: [],
    });

    x[0].unordered_bmg_demo_interface_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
    u32(o + 12) ? im_bmg_demo_interface_80_36t6_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t6_12(o, x) {
    x.push({
        sec_id: "s92_",
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u8_16: u8(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t7(o, x) {
    x.push({
        sec_id: "t]yz",
        unordered_bmg_demo_interface_0: 0,
    });

    x[0].unordered_bmg_demo_interface_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t10(o, x) {
    x.push({
        sec_id: "2ana",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t12(o, x) {
    x.push({
        sec_id: "Qlx3",
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t13(o, x) {
    x.push({
        sec_id: "HczP",
        u8_1: u8(o + 1),
        section_4: [],
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_80_36t13_4(u32(o + 4) + g.m, x[0].section_4) : 0;
    u32(o + 12) ? im_bmg_demo_interface_80_36t13_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t13_4(o, x) {
    x.push({
        sec_id: "?663",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        u32_8: u32(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t13_12(o, x) {
    x.push({
        sec_id: "Rsaj",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t14(o, x) {
    x.push({
        sec_id: "^iox",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_interface_80_36t14_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t14_4(o, x) {
    x.push({
        sec_id: "dSo;",
        u8_2: u8(o + 2),
        u8_8: u8(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t15(o, x) {
    x.push({
        sec_id: "dQjw",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_interface_80_36t15_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t15_0(o, x) {
    x.push({
        sec_id: "GXNZ",
        f32_0: f32(o + 0),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) ? im_bmg_demo_interface_80_36t15_0_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_36t15_0_16(o, x) {
    x.push({
        sec_id: "?A6R",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        f32_28: f32(o + 28),
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
    });

    for (let i = 0; i < u32(o + 44); i++) {
        im_bmg_demo_interface_80_36t15_0_16_48(u32(o + 48) + (i * 12) + g.m, i, x[0].section_48);
    }

    for (let i = 0; i < u32(o + 52); i++) {
        im_bmg_demo_interface_80_36t15_0_16_56(u32(o + 56) + (i * 32) + g.m, i, x[0].section_56);
    }

    // 64 bytes;

}
function im_bmg_demo_interface_80_36t15_0_16_48(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "ZFdM",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_interface_80_36t15_0_16_56(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=18X",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_interface_80_40(o, x) {
    x.push({
        sec_id: "BK]G",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u32_32: u32(o + 32),
        section_36: [],
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
    });

    u32(o + 36) ? im_bmg_demo_interface_80_40_36(u32(o + 36) + g.m, x[0].section_36) : 0;

    // 64 bytes;

}
function im_bmg_demo_interface_80_40_36(o, x) {
    x.push({
        sec_id: "Avsl",
        u32_0: u32(o + 0),
        u32_20: u32(o + 20),
        section_24: [],
    });

    u32(o + 24) ? im_bmg_demo_interface_80_40_36_24(u32(o + 24) + g.m, x[0].section_24) : 0;

    // 32 bytes;

}
function im_bmg_demo_interface_80_40_36_24(o, x) {
    x.push({
        sec_id: "^<tm",
        u8_0: u8(o + 0),
    });

    // 64 bytes;

}
function im_bmg_demo_interface_80_52(o, x) {
    x.push({
        sec_id: "dRqc",
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
        im_bmg_demo_interface_80_52_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }
    u32(o + 12) ? im_bmg_demo_interface_80_52_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    for (let i = 0; i < u32(o + 16); i++) {
        im_bmg_demo_interface_80_52_20(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_bmg_demo_interface_80_52_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }
    u32(o + 36) ? im_bmg_demo_interface_80_52_36(u32(o + 36) + g.m, x[0].section_36) : 0;

    // 64 bytes;

}
function im_bmg_demo_interface_80_52_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "AdJp",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_interface_80_52_12(o, x) {
    x.push({
        sec_id: "KgwT",
        f32_0: f32(o + 0),
        u8_17: u8(o + 17),
    });

    // 32 bytes;

}
function im_bmg_demo_interface_80_52_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "]RpX",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_interface_80_52_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "fR6A",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_interface_80_52_36(o, x) {
    x.push({
        sec_id: "pUGQ",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_17: u8(o + 17),
    });

    // 64 bytes;

}
function im_bmg_demo_interface_80_68(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "<WW1",
        u8_0: u8(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
    });

    u32(o + 4) ? im_bmg_demo_interface_80_68_4(u32(o + 4) + g.m, x[i].section_4) : 0;

}
function im_bmg_demo_interface_80_68_4(o, x) {
    x.push({
        sec_id: "AFOv",
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
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_interface_80_68_4_4(u32(o + 4) + (i * 24) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_bmg_demo_interface_80_68_4_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_bmg_demo_interface_80_68_4_20(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_bmg_demo_interface_80_68_4_28(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_bmg_demo_interface_80_68_4_36(u32(o + 36) + (i * 12) + g.m, i, x[0].section_36);
    }
    u32(o + 44) ? im_bmg_demo_interface_80_68_4_44(u32(o + 44) + g.m, x[0].section_44) : 0;

    // 64 bytes;

}
function im_bmg_demo_interface_80_68_4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "TX6A",
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_interface_80_68_4_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "zLRh",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_interface_80_68_4_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "^Z^T",
        f32_0: f32(o + 0),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_interface_80_68_4_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Le=0",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_interface_80_68_4_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "hP6U",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_interface_80_68_4_44(o, x) {
    x.push({
        sec_id: "ZOfD",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 64 bytes;

}
function im_bmg_demo_model_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5Y1W",
        u32_0: u32(o + 0),
        section_4: im_string(u32(o + 4), 0, false),
        section_8: im_string(u32(o + 8), 0, false),
        unordered_bmg_demo_model_sub_link_12: 0,
        section_16: [],
        f32_20: f32(o + 20),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        section_28: [],
        section_32: [],
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        unordered_bmg_demo_mysterious_56: [],
    });

    x[i].unordered_bmg_demo_model_sub_link_12 = in_ml(u32(o + 12), g.bmg_demo_model_sub_link_array, im_bmg_demo_model_sub_link, g.unordered_ref.bmg_demo_model_sub_link);
    x[i].section_16 = in_ml(u32(o + 16), g.bmg_demo_model_anim_1_array, im_bmg_demo_model_anim_1, g.ordered_ref.bmg_demo_model_anim_1);

    u32(o + 28) ? im_bmg_demo_model_link_28(u32(o + 28) + g.m, x[i].section_28) : 0;
    u32(o + 32) ? im_bmg_demo_model_link_32(u32(o + 32) + g.m, x[i].section_32) : 0;
    u32(o + 48) ? im_bmg_demo_model_link_48(u32(o + 48) + g.m, x[i].section_48) : 0;
for (let ii = 0; ii < u32(o + 52); ii++) {
    im_bmg_demo_mysterious(u32(o + 56) + (ii * 64) + g.m, ii, x[i].unordered_bmg_demo_mysterious_56);
}
    return x[i].id
    // 64 bytes;

}

function im_bmg_demo_model_anim_1(o, i, x) {
    x.push({
        sec_id: "mlao",
        type: 0,
        section: [],
    });

    if (u32(o) === 2860548033) {
        x[i].type = "b"
        // x[i].section = in_ml(o - g.m, g.bmg_demo_model_anim_1_type_a_array, im_bmg_demo_model_anim_1_type_a, g.unordered_ref.bmg_demo_model_anim_1_type_a);
        im_bmg_demo_model_anim_1_type_b(o, 0, x[i].section)
    } else {
        x[i].type = "a"
        x[i].section = in_ml(o - g.m, g.bmg_demo_model_anim_1_type_a_array, im_bmg_demo_model_anim_1_type_a, g.unordered_ref.bmg_demo_model_anim_1_type_a);
    }

}

function im_bmg_demo_model_link_28(o, x) {
    x.push({
        sec_id: "AjF]",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_model_link_32(o, x) {
    x.push({
        sec_id: "=PwC",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_model_link_48(o, x) {
    x.push({
        sec_id: "YOo>",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 64 bytes;

}
function im_bmg_demo_model_sub_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "wTl>",
        section_0: [],
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    // x[0].unordered_bmg_demo_font_12 = in_ml(u32(o + 12), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
    x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_model_anim_2_array, im_bmg_demo_model_anim_2, g.ordered_ref.bmg_demo_model_anim_2);
    // u32(o + 0) ? bmg_demo_model_anim_2(u32(o + 0) + g.m, x[i].section_0) : 0;
    // offset?

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_bmg_demo_model_sub_link_8(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_8);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bmg_demo_model_sub_link_16(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}

function im_bmg_demo_model_anim_2(o, i, x) {
    x.push({
        sec_id: "2tpa",
        type: 0,
        section: [],
    });
    if (u32(o) === 2852208671) {
        x[0].type = "b"
        im_bmg_demo_model_anim_2_type_b(o, 0, x[i].section)
    } else {
        x[0].type = "a"
        x[i].section = in_ml(o - g.m, g.bmg_demo_model_anim_2_type_a_array, im_bmg_demo_model_anim_2_type_a, g.unordered_ref.bmg_demo_model_anim_2_type_a);
    }
}

function im_bmg_demo_model_sub_link_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "0l52",
        model_0: im_patch(g.model_ref, o + 0),
    });

}
function im_bmg_demo_model_sub_link_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "t[=T",
        model_0: im_patch(g.model_ref, o + 0),
        u8_5: u8(o + 5),
    });

}
function im_bmg_demo_multi_font(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "jR]N",
        u32_0: u32(o + 0),
        section_4: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 4) ? im_bmg_demo_multi_font_4t0(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    case 1:
        u32(o + 4) ? im_bmg_demo_multi_font_4t1(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    }
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_multi_font_4t0(o, x) {
    x.push({
        sec_id: "rus:",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_bmg_demo_font_12: 0,
        f32_24: f32(o + 24),
        unordered_bmg_demo_font_28: 0,
        unordered_bmg_demo_font_32: 0,
    });

    x[0].unordered_bmg_demo_font_12 = in_ml(u32(o + 12), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
    x[0].unordered_bmg_demo_font_28 = in_ml(u32(o + 28), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
    x[0].unordered_bmg_demo_font_32 = in_ml(u32(o + 32), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);

    // 64 bytes;

}
function im_bmg_demo_multi_font_4t1(o, x) {
    x.push({
        sec_id: "GP]S",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_bmg_demo_font_12: 0,
        unordered_bmg_demo_font_16: 0,
        unordered_bmg_demo_font_20: 0,
    });

    x[0].unordered_bmg_demo_font_12 = in_ml(u32(o + 12), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
    x[0].unordered_bmg_demo_font_16 = in_ml(u32(o + 16), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
    x[0].unordered_bmg_demo_font_20 = in_ml(u32(o + 20), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);

    // 32 bytes;

}
function im_bmg_demo_something(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "QpPx",
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_48: u32(o + 48),
    });

    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_sound_controls(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "PxFV",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bmg_demo_sound_controls_16(u32(o + 16) + (ii * 16) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_sound_controls_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "TDQy",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        f32_12: f32(o + 12),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bmg_demo_sound_controls_16_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

}
function im_bmg_demo_sound_controls_16_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "ucN2",
        unordered_bmg_demo_sound_section_0: 0,
    });

    x[i].unordered_bmg_demo_sound_section_0 = in_ml(u32(o + 0), g.bmg_demo_sound_section_array, im_bmg_demo_sound_section, g.unordered_ref.bmg_demo_sound_section);

}
function im_bmg_demo_sound_section(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "CV4:",
        sound_0: im_patch(g.sound_patch_ref, o + 0),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        section_24: [],
    });

    u32(o + 24) ? im_bmg_demo_sound_section_24(u32(o + 24) + g.m, x[i].section_24) : 0;
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_sound_section_24(o, x) {
    x.push({
        sec_id: "z0CP",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_bmg_demo_strange(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "hmvb",
        u32_0: u32(o + 0),
        section_4: [],
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        unordered_bmg_demo_sound_controls_28: 0,
        f32_32: f32(o + 32),
    });

    u32(o + 4) ? im_bmg_demo_strange_4(u32(o + 4) + g.m, x[i].section_4) : 0;
    x[i].unordered_bmg_demo_sound_controls_28 = in_ml(u32(o + 28), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_strange_4(o, x) {
    x.push({
        sec_id: "b689",
        unordered_bmg_demo_unknown_0: 0,
    });

    x[0].unordered_bmg_demo_unknown_0 = in_ml(u32(o + 0), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);

    // 32 bytes;

}
function im_bmg_demo_text(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "8Pyg",
        section_0: im_string(u32(o + 0), 0, false),
    });

    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_unknown_thing(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "^=9]",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        section_24: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bmg_demo_unknown_thing_16(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }
    switch (u8(o + 20)) {
    case 0:
        u32(o + 24) ? im_bmg_demo_unknown_thing_24t0(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 1:
        u32(o + 24) ? im_bmg_demo_unknown_thing_24t1(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    case 2:
        u32(o + 24) ? im_bmg_demo_unknown_thing_24t2(u32(o + 24) + g.m, x[i].section_24) : 0;
        break;
    }
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_unknown_thing_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "r1FF",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_unknown_thing_24t0(o, x) {
    x.push({
        sec_id: "GDjK",
        u32_0: u32(o + 0),
        section_4: [],
        u8_8: u8(o + 8),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        section_44: [],
        u8_60: u8(o + 60),
        f32_64: f32(o + 64),
    });

    u32(o + 4) ? im_bmg_demo_unknown_thing_24t0_4(u32(o + 4) + g.m, x[0].section_4) : 0;
    u32(o + 32) ? im_bmg_demo_unknown_thing_24t0_32(u32(o + 32) + g.m, x[0].section_32) : 0;
    u32(o + 44) ? im_bmg_demo_unknown_thing_24t0_44(u32(o + 44) + g.m, x[0].section_44) : 0;

    // 96 bytes;

}
function im_bmg_demo_unknown_thing_24t0_4(o, x) {
    x.push({
        sec_id: "BR8h",
        model_0: im_patch(g.model_ref, o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_thing_24t0_32(o, x) {
    x.push({
        sec_id: "J:N;",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_thing_24t0_44(o, x) {
    x.push({
        sec_id: "?7=8",
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_thing_24t1(o, x) {
    x.push({
        sec_id: "oVpB",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        section_64: [],
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_unknown_thing_24t1_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_bmg_demo_unknown_thing_24t1_52(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 56); i++) {
        im_bmg_demo_unknown_thing_24t1_60(u32(o + 60) + (i * 12) + g.m, i, x[0].section_60);
    }
    u32(o + 64) ? im_bmg_demo_unknown_thing_24t1_64(u32(o + 64) + g.m, x[0].section_64) : 0;

    for (let i = 0; i < u32(o + 68); i++) {
        im_bmg_demo_unknown_thing_24t1_72(u32(o + 72) + (i * 8) + g.m, i, x[0].section_72);
    }

    // 96 bytes;

}
function im_bmg_demo_unknown_thing_24t1_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "KlIx",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
    });

}
function im_bmg_demo_unknown_thing_24t1_52(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "3Bs?",
        f32_0: f32(o + 0),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_unknown_thing_24t1_60(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "oL?F",
        f32_0: f32(o + 0),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_unknown_thing_24t1_64(o, x) {
    x.push({
        sec_id: "A[gL",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_8: u8(o + 8),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_thing_24t1_72(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "xcWI",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bmg_demo_unknown_thing_24t1_72_4(u32(o + 4) + (ii * 20) + g.m, ii, x[i].section_4);
    }

}
function im_bmg_demo_unknown_thing_24t1_72_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "wN5Z",
    });

}
function im_bmg_demo_unknown_thing_24t2(o, x) {
    x.push({
        sec_id: "]a9E",
        u32_0: u32(o + 0),
        section_4: [],
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        section_20: [],
        u8_24: u8(o + 24),
    });

    u32(o + 4) ? im_bmg_demo_unknown_thing_24t2_4(u32(o + 4) + g.m, x[0].section_4) : 0;
    u32(o + 20) ? im_bmg_demo_unknown_thing_24t2_20(u32(o + 20) + g.m, x[0].section_20) : 0;

    // 32 bytes;

}
function im_bmg_demo_unknown_thing_24t2_4(o, x) {
    x.push({
        sec_id: "ud0<",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_thing_24t2_20(o, x) {
    x.push({
        sec_id: "FxZP",
        f32_0: f32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "2sj4",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bmg_demo_unknown_4(u32(o + 4) + (ii * 16) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_unknown_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "q1x9",
        u32_0: u32(o + 0),
        section_4: [],
        section_8: [],
    });

    switch (u32(o + 0)) {
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_unknown_thing_array, im_bmg_demo_unknown_thing, g.unordered_ref.bmg_demo_unknown_thing);
        break;
    case 5:
        u32(o + 4) ? im_bmg_demo_unknown_4_4t5(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    case 9:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_sound_section_array, im_bmg_demo_sound_section, g.unordered_ref.bmg_demo_sound_section);
        break;
    case 26:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);
        break;
    }
    switch (u32(o + 0)) {
    case 1:
        u32(o + 8) ? im_bmg_demo_unknown_4_8t1(u32(o + 8) + g.m, x[i].section_8) : 0;
        break;
    case 5:
        u32(o + 8) ? im_bmg_demo_unknown_4_8t5(u32(o + 8) + g.m, x[i].section_8) : 0;
        break;
    case 9:
        u32(o + 8) ? im_bmg_demo_unknown_4_8t9(u32(o + 8) + g.m, x[i].section_8) : 0;
        break;
    case 26:
        u32(o + 8) ? im_bmg_demo_unknown_4_8t26(u32(o + 8) + g.m, x[i].section_8) : 0;
        break;
    }
}
function im_bmg_demo_unknown_4_4t5(o, x) {
    x.push({
        sec_id: "qXiv",
        section_0: [],
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u32_20: u32(o + 20),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
        u32_36: u32(o + 36),
        section_40: [],
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
    });

    u32(o + 0) ? im_bmg_demo_unknown_4_4t5_0(u32(o + 0) + g.m, x[0].section_0) : 0;
    u32(o + 24) ? im_bmg_demo_unknown_4_4t5_24(u32(o + 24) + g.m, x[0].section_24) : 0;
    u32(o + 32) ? im_bmg_demo_unknown_4_4t5_32(u32(o + 32) + g.m, x[0].section_32) : 0;
    u32(o + 40) ? im_bmg_demo_unknown_4_4t5_40(u32(o + 40) + g.m, x[0].section_40) : 0;

    // 64 bytes;

}
function im_bmg_demo_unknown_4_4t5_0(o, x) {
    x.push({
        sec_id: "gaN7",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_4t5_24(o, x) {
    x.push({
        sec_id: "fEf9",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_unknown_4_4t5_24_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_unknown_4_4t5_24_4(o, x) {
    x.push({
        sec_id: "rbdy",
        f32_12: f32(o + 12),
        f32_20: f32(o + 20),
        u8_28: u8(o + 28),
        f32_32: f32(o + 32),
    });

    // 64 bytes;

}
function im_bmg_demo_unknown_4_4t5_32(o, x) {
    x.push({
        sec_id: "W<m]",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_unknown_4_4t5_32_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_unknown_4_4t5_32_4(o, x) {
    x.push({
        sec_id: "IlPm",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_unknown_4_4t5_32_4_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_unknown_4_4t5_32_4_0(o, x) {
    x.push({
        sec_id: "Edvd",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_unknown_4_4t5_32_4_0_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_unknown_4_4t5_32_4_0_4(o, x) {
    x.push({
        sec_id: "H4:a",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_4t5_40(o, x) {
    x.push({
        sec_id: "D:g2",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_8t1(o, x) {
    x.push({
        sec_id: "Bhe_",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_42: u8(o + 42),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) ? im_bmg_demo_unknown_4_8t1_48(u32(o + 48) + g.m, x[0].section_48) : 0;
    u32(o + 52) ? im_bmg_demo_unknown_4_8t1_52(u32(o + 52) + g.m, x[0].section_52) : 0;

    // 64 bytes;

}
function im_bmg_demo_unknown_4_8t1_48(o, x) {
    x.push({
        sec_id: "PMSx",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_8t1_52(o, x) {
    x.push({
        sec_id: "rjK;",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_8t5(o, x) {
    x.push({
        sec_id: "rW=z",
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_8t9(o, x) {
    x.push({
        sec_id: "k8IO",
    });

    // 32 bytes;

}
function im_bmg_demo_unknown_4_8t26(o, x) {
    x.push({
        sec_id: "dFdS",
    });

    // 32 bytes;

}
function im_bmg_demo_var(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "g_8V",
        section_148: im_string(u32(o + 148), 0, false),
        u32_152: u32(o + 152),
        section_156: [],
        u32_164: u32(o + 164),
        //amount?
        section_168: [],
    });

    u32(o + 156) ? im_bmg_demo_var_156(u32(o + 156) + g.m, x[i].section_156) : 0;

    for (let ii = 0; ii < u32(o + 164); ii++) {
        im_bmg_demo_var_168(u32(o + 168) + (ii * 36) + g.m, ii, x[i].section_168);
    }
    return x[i].id
    // 192 bytes;

}
function im_bmg_demo_var_156(o, x) {
    x.push({
        sec_id: "qkSo",
        unordered_bmg_demo_var_0: 0,
    });

    x[0].unordered_bmg_demo_var_0 = in_ml(u32(o + 0), g.bmg_demo_var_array, im_bmg_demo_var, g.unordered_ref.bmg_demo_var);

    // 32 bytes;

}
function im_bmg_demo_var_168(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Ae6A",
        section_8: im_string(u32(o + 8), 0, false),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bmg_demo_var_168_16(u32(o + 16) + (ii * 20) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bmg_demo_var_168_24(u32(o + 24) + (ii * 28) + g.m, ii, x[i].section_24);
    }

}
function im_bmg_demo_var_168_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "]2pK",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        section_12: [],
        section_16: [],
    });

    switch (u32(o + 4)) {
    case 7:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 8:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t8(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 12:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t12(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 18:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t18(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 21:
        x[i].section_12 = in_ml(u32(o + 12), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
        break;
    case 25:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t25(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
    u32(o + 16) ? im_bmg_demo_var_168_16_16(u32(o + 16) + g.m, x[i].section_16) : 0;

}
function im_bmg_demo_var_168_16_12t7(o, x) {
    x.push({
        sec_id: "ec4E",
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t8(o, x) {
    x.push({
        sec_id: "r:h4",
        u8_0: u8(o + 0),
        unordered_bmg_demo_world_20_8: 0,
    });

    x[0].unordered_bmg_demo_world_20_8 = in_ml(u32(o + 8), g.bmg_demo_world_20_array, im_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20);

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t12(o, x) {
    x.push({
        sec_id: "HL[>",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: [],
        f32_8: f32(o + 8),
    });

    switch (u8(o + 0)) {
    case 4:
        x[0].section_4 = in_ml(u32(o + 4), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);
        break;
    case 7:
        u32(o + 4) ? im_bmg_demo_var_168_16_12t12_4t7(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    }
    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t12_4t7(o, x) {
    x.push({
        sec_id: "@V<m",
        u8_0: u8(o + 0),
        unordered_bmg_demo_extended_world_link_4: 0,
        u32_8: u32(o + 8),
        section_12: [],
    });

    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);
    u32(o + 12) ? im_bmg_demo_var_168_16_12t12_4t7_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t12_4t7_12(o, x) {
    x.push({
        sec_id: "125X",
        u8_0: u8(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t15(o, x) {
    x.push({
        sec_id: "K?S:",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_var_168_16_12t15_4(u32(o + 4) + (i * 20) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t15_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "kGe8",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        section_12: [],
        section_16: [],
    });

    switch (u32(o + 4)) {
    case 5:
        u32(o + 12) ? im_bmg_demo_var_168_16_12t15_4_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 21:
        x[i].section_12 = in_ml(u32(o + 12), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
        break;
    }
    u32(o + 16) ? im_bmg_demo_var_168_16_12t15_4_16(u32(o + 16) + g.m, x[i].section_16) : 0;

}
function im_bmg_demo_var_168_16_12t15_4_12t5(o, x) {
    x.push({
        sec_id: "vH;a",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_var_168_16_12t15_4_12t5_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t15_4_12t5_4(o, x) {
    x.push({
        sec_id: "PRDe",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t15_4_16(o, x) {
    x.push({
        sec_id: "Q2>W",
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t18(o, x) {
    x.push({
        sec_id: "HJ]e",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

    u32(o + 0) ? im_bmg_demo_var_168_16_12t18_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t18_0(o, x) {
    x.push({
        sec_id: "APtz",
        unordered_bmg_demo_extended_world_link_4: 0,
    });

    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_var_168_16_12t25(o, x) {
    x.push({
        sec_id: "PE9v",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        unordered_bmg_demo_extended_world_link_4: 0,
        f32_16: f32(o + 16),
    });

    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_var_168_16_16(o, x) {
    x.push({
        sec_id: "cI:@",
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Of]Y",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u32_8: u32(o + 8),
        section_12: [],
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    switch (u32(o + 8)) {
    case 2:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t2(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 5:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 7:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 14:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t14(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 17:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t17(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 18:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t18(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 23:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t23(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 33:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 34:
        x[i].section_12 = in_ml(u32(o + 12), g.bmg_demo_event_array, im_bmg_demo_event, g.unordered_ref.bmg_demo_event);
        break;
    }
}
function im_bmg_demo_var_168_24_12t2(o, x) {
    x.push({
        sec_id: "4dQo",
        u32_0: u32(o + 0),
        section_4: [],
    });

    switch (u32(o + 0)) {
    case 1:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t1(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    case 4:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t4(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    case 5:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t5(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    case 7:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t7(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    case 11:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t11(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    case 12:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t12(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    case 17:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t2_4t17(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    }
    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t1(o, x) {
    x.push({
        sec_id: "6YFB",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        unordered_bmg_demo_world_84_4: 0,
        f32_8: f32(o + 8),
        unordered_bmg_demo_extended_world_link_16: 0,
        unordered_bmg_demo_extended_world_link_20: 0,
        u32_24: u32(o + 24),
        f32_28: f32(o + 28),
    });

    x[0].unordered_bmg_demo_world_84_4 = in_ml(u32(o + 4), g.bmg_demo_world_84_array, im_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84);
    x[0].unordered_bmg_demo_extended_world_link_16 = in_ml(u32(o + 16), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);
    x[0].unordered_bmg_demo_extended_world_link_20 = in_ml(u32(o + 20), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t4(o, x) {
    x.push({
        sec_id: "YGhq",
        u8_2: u8(o + 2),
        unordered_bmg_demo_extended_world_link_16: 0,
    });

    x[0].unordered_bmg_demo_extended_world_link_16 = in_ml(u32(o + 16), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t5(o, x) {
    x.push({
        sec_id: "tzHh",
        u8_2: u8(o + 2),
        unordered_bmg_demo_extended_world_link_16: 0,
    });

    x[0].unordered_bmg_demo_extended_world_link_16 = in_ml(u32(o + 16), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t7(o, x) {
    x.push({
        sec_id: "yBUE",
        u8_2: u8(o + 2),
        u32_12: u32(o + 12),
    });

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t11(o, x) {
    x.push({
        sec_id: "H>MT",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        u32_8: u32(o + 8),
        unordered_bmg_demo_extended_world_link_16: 0,
        u32_20: u32(o + 20),
        f32_40: f32(o + 40),
    });

    x[0].unordered_bmg_demo_extended_world_link_16 = in_ml(u32(o + 16), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t12(o, x) {
    x.push({
        sec_id: "_b3V",
        u8_2: u8(o + 2),
        section_16: [],
    });

    u32(o + 16) ? im_bmg_demo_var_168_24_12t2_4t12_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t12_16(o, x) {
    x.push({
        sec_id: "7GXa",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t2_4t17(o, x) {
    x.push({
        sec_id: "V6:C",
        u8_2: u8(o + 2),
        unordered_bmg_demo_extended_world_link_16: 0,
        u8_53: u8(o + 53),
    });

    x[0].unordered_bmg_demo_extended_world_link_16 = in_ml(u32(o + 16), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t5(o, x) {
    x.push({
        sec_id: "h>O]",
        section_0: [],
        u8_4: u8(o + 4),
    });

    switch (u8(o + 4)) {
    case 1:
        u32(o + 0) ? im_bmg_demo_var_168_24_12t5_0t1(u32(o + 0) + g.m, x[0].section_0) : 0;
        break;
    case 2:
        u32(o + 0) ? im_bmg_demo_var_168_24_12t5_0t2(u32(o + 0) + g.m, x[0].section_0) : 0;
        break;
    }
    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t5_0t1(o, x) {
    x.push({
        sec_id: "cnZN",
        unordered_bmg_demo_interface_0: 0,
        u8_5: u8(o + 5),
        section_8: [],
    });

    x[0].unordered_bmg_demo_interface_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
    u32(o + 8) ? im_bmg_demo_var_168_24_12t5_0t1_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t5_0t1_8(o, x) {
    x.push({
        sec_id: "4Q:z",
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_bmg_demo_var_168_24_12t5_0t1_8_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t5_0t1_8_12(o, x) {
    x.push({
        sec_id: "7rWd",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u32_12: u32(o + 12),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t5_0t2(o, x) {
    x.push({
        sec_id: "g=If",
        u8_0: u8(o + 0),
        unordered_bmg_demo_interface_4: 0,
    });

    x[0].unordered_bmg_demo_interface_4 = in_ml(u32(o + 4), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t7(o, x) {
    x.push({
        sec_id: "c;^7",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: [],
        f32_8: f32(o + 8),
    });

    switch (u8(o + 0)) {
    case 4:
        x[0].section_4 = in_ml(u32(o + 4), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);
        break;
    case 7:
        u32(o + 4) ? im_bmg_demo_var_168_24_12t7_4t7(u32(o + 4) + g.m, x[0].section_4) : 0;
        break;
    }
    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t7_4t7(o, x) {
    x.push({
        sec_id: "QwrS",
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) ? im_bmg_demo_var_168_24_12t7_4t7_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t7_4t7_12(o, x) {
    x.push({
        sec_id: "qX3A",
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t14(o, x) {
    x.push({
        sec_id: "xkBV",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t15(o, x) {
    x.push({
        sec_id: "b;HD",
        unordered_bmg_demo_var_0: 0,
        u32_4: u32(o + 4),
    });

    x[0].unordered_bmg_demo_var_0 = in_ml(u32(o + 0), g.bmg_demo_var_array, im_bmg_demo_var, g.unordered_ref.bmg_demo_var);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t17(o, x) {
    x.push({
        sec_id: "xpA_",
        u32_0: u32(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t18(o, x) {
    x.push({
        sec_id: "tPSa",
        unordered_bmg_demo_something_4: 0,
        section_8: [],
        u32_16: u32(o + 16),
    });

    x[0].unordered_bmg_demo_something_4 = in_ml(u32(o + 4), g.bmg_demo_something_array, im_bmg_demo_something, g.unordered_ref.bmg_demo_something);
    u32(o + 8) ? im_bmg_demo_var_168_24_12t18_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t18_8(o, x) {
    x.push({
        sec_id: "E[DU",
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t23(o, x) {
    x.push({
        sec_id: "^pw2",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    });

    x[0].unordered_bmg_demo_unknown_0 = in_ml(u32(o + 0), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);
    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33(o, x) {
    x.push({
        sec_id: "QXg:",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_var_168_24_12t33_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4(o, x) {
    x.push({
        sec_id: "7EKG",
        u32_12: u32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
    });

    u32(o + 16) ? im_bmg_demo_var_168_24_12t33_4_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    for (let i = 0; i < u32(o + 20); i++) {
        im_bmg_demo_var_168_24_12t33_4_24(u32(o + 24) + (i * 28) + g.m, i, x[0].section_24);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_bmg_demo_var_168_24_12t33_4_32(u32(o + 32) + (i * 28) + g.m, i, x[0].section_32);
    }

    // 64 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_16(o, x) {
    x.push({
        sec_id: "Gf9@",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        section_12: [],
        section_16: [],
    });

    u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_16_12(u32(o + 12) + g.m, x[0].section_12) : 0;
    u32(o + 16) ? im_bmg_demo_var_168_24_12t33_4_16_16(u32(o + 16) + g.m, x[0].section_16) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_16_12(o, x) {
    x.push({
        sec_id: "3Z8?",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        unordered_bmg_demo_flag_4: 0,
        f32_8: f32(o + 8),
    });

    x[0].unordered_bmg_demo_flag_4 = in_ml(u32(o + 4), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_16_16(o, x) {
    x.push({
        sec_id: "Xn?5",
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "?7o8",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        section_12: [],
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    switch (u32(o + 8)) {
    case 7:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_24_12t7(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_24_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 23:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_24_12t23(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_bmg_demo_var_168_24_12t33_4_24_12t7(o, x) {
    x.push({
        sec_id: ":dW?",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        unordered_bmg_demo_flag_4: 0,
        f32_8: f32(o + 8),
    });

    x[0].unordered_bmg_demo_flag_4 = in_ml(u32(o + 4), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_24_12t15(o, x) {
    x.push({
        sec_id: "RfLW",
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_24_12t23(o, x) {
    x.push({
        sec_id: "6]HU",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    });

    x[0].unordered_bmg_demo_unknown_0 = in_ml(u32(o + 0), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);
    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "c_=b",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        section_12: [],
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
    });

    switch (u32(o + 8)) {
    case 5:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_32_12t5(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 15:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_32_12t15(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    case 23:
        u32(o + 12) ? im_bmg_demo_var_168_24_12t33_4_32_12t23(u32(o + 12) + g.m, x[i].section_12) : 0;
        break;
    }
}
function im_bmg_demo_var_168_24_12t33_4_32_12t5(o, x) {
    x.push({
        sec_id: "COk4",
        section_0: [],
        u8_4: u8(o + 4),
    });

    u32(o + 0) ? im_bmg_demo_var_168_24_12t33_4_32_12t5_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_32_12t5_0(o, x) {
    x.push({
        sec_id: "SvcM",
        u8_0: u8(o + 0),
        unordered_bmg_demo_interface_4: 0,
    });

    x[0].unordered_bmg_demo_interface_4 = in_ml(u32(o + 4), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_32_12t15(o, x) {
    x.push({
        sec_id: "L4Wv",
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_var_168_24_12t33_4_32_12t23(o, x) {
    x.push({
        sec_id: "XjwE",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    });

    x[0].unordered_bmg_demo_unknown_0 = in_ml(u32(o + 0), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);
    x[0].unordered_bmg_demo_extended_world_link_4 = in_ml(u32(o + 4), g.bmg_demo_extended_world_link_array, im_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link);

    // 32 bytes;

}
function im_bmg_demo_world_thing(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ">;Xp",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        f32_44: f32(o + 44),
        section_48: [],
        f32_52: f32(o + 52),
        f32_60: f32(o + 60),
        f32_68: f32(o + 68),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        section_88: [],
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
    });

    x[0].section_48 = in_ml(u32(o + 48), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);
    x[0].section_88 = in_ml(u32(o + 88), g.bmg_demo_sound_section_array, im_bmg_demo_sound_section, g.unordered_ref.bmg_demo_sound_section);
    // offset? 
    return x[i].id
    // 160 bytes;

}
function im_bmg_demo_extended_world_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "nU2K",
        section_0: [],
        u8_4: u8(o + 4),
        u8_7: u8(o + 7),
        u8_8: u8(o + 8),
        f32_24: f32(o + 24),
    });

    switch (u8(o + 8)) {
    case 0:
        switch (u8(o + 4)) {
        case 1:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_20_array, im_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20);
            break
        case 11:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_84_array, im_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84);
            break
        default:
        }
        break
    case 1:
        switch (u8(o + 7)) {
        case 0:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_12_array, im_bmg_demo_world_12, g.unordered_ref.bmg_demo_world_12);
            break
        case 1:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_20_array, im_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20);
            break
        case 10:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_68_array, im_bmg_demo_world_68, g.unordered_ref.bmg_demo_world_68);
            break
        case 11:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_84_array, im_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84);
            break
        case 13:
            x[i].section_0 = in_ml(u32(o + 0), g.bmg_demo_world_92_array, im_bmg_demo_world_92, g.unordered_ref.bmg_demo_world_92);
            break
        default:
            if (u32(o + 0)) {
                ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28], o)
                sü(u32, 4, o, 0)
            }
        }
        break
    case 2:
    case 4:
        x[i].section_0 = u32(o + 0)
        break
    default:
    }

    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "nKTe",
        u8_8: u8(o + 8),
        section_12: [],
        section_20: [],
        section_24: im_string(u32(o + 24), 0, false),
        u32_28: u32(o + 28),
        section_32: im_string(u32(o + 32), 0, false),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        section_44: [],
        u32_48: u32(o + 48),
        section_52: [],
        section_56: [],
        u32_72: u32(o + 72),
        //check this
    });

    u32(o + 12) ? im_bmg_demo_link_12(u32(o + 12) + g.m, x[i].section_12) : 0;
    u32(o + 20) ? im_bmg_demo_link_20(u32(o + 20) + g.m, x[i].section_20) : 0;
    u32(o + 44) ? im_bmg_demo_link_44(u32(o + 44) + g.m, x[i].section_44) : 0;
    u32(o + 52) ? im_bmg_demo_link_52(u32(o + 52) + g.m, x[i].section_52) : 0;
    u32(o + 56) ? im_bmg_demo_link_56(u32(o + 56) + g.m, x[i].section_56) : 0;
    return x[i].id
    // 96 bytes;

}
function im_bmg_demo_link_12(o, x) {
    x.push({
        sec_id: "c85^",
    });

    // 32 bytes;

}
function im_bmg_demo_link_20(o, x) {
    x.push({
        sec_id: ">JpY",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_link_20_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_link_20_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "hQuD",
        unordered_bmg_demo_flag_0: 0,
    });

    x[i].unordered_bmg_demo_flag_0 = in_ml(u32(o + 0), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

}
function im_bmg_demo_link_44(o, x) {
    x.push({
        sec_id: "KAPY",
        u8_0: u8(o + 0),
        section_12: [],
    });

    u32(o + 12) ? im_bmg_demo_link_44_12(u32(o + 12) + g.m, x[0].section_12) : 0;

    // 32 bytes;

}
function im_bmg_demo_link_44_12(o, x) {
    x.push({
        sec_id: "UB1w",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_link_52(o, x) {
    x.push({
        sec_id: "MUW6",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_link_52_0(u32(o + 0) + g.m, x[0].section_0) : 0;

    // 32 bytes;

}
function im_bmg_demo_link_52_0(o, x) {
    x.push({
        sec_id: "C@Z0",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_link_52_0_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Jfcq",
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
        im_bmg_demo_link_52_0_4_4(u32(o + 4) + (ii * 16) + g.m, ii, x[i].section_4);
    }
    u32(o + 8) ? im_bmg_demo_link_52_0_4_8(u32(o + 8) + g.m, x[i].section_8) : 0;
    u32(o + 20) ? im_bmg_demo_link_52_0_4_20(u32(o + 20) + g.m, x[i].section_20) : 0;
    u32(o + 28) ? im_bmg_demo_link_52_0_4_28(u32(o + 28) + g.m, x[i].section_28) : 0;

}
function im_bmg_demo_link_52_0_4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "e3G2",
        u8_0: u8(o + 0),
        section_4: [],
        section_8: [],
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) ? im_bmg_demo_link_52_0_4_4_4t1(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    }
    u32(o + 8) ? im_bmg_demo_link_52_0_4_4_8(u32(o + 8) + g.m, x[i].section_8) : 0;

}
function im_bmg_demo_link_52_0_4_4_4t1(o, x) {
    x.push({
        sec_id: "Q?GH",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4_4_8(o, x) {
    x.push({
        sec_id: "qQP>",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4_8(o, x) {
    x.push({
        sec_id: "v7=R",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4_20(o, x) {
    x.push({
        sec_id: "_<q1",
        u32_0: u32(o + 0),
        section_4: [],
        u8_9: u8(o + 9),
    });

    u32(o + 4) ? im_bmg_demo_link_52_0_4_20_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4_20_4(o, x) {
    x.push({
        sec_id: "3Xzp",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_link_52_0_4_20_4_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4_20_4_4(o, x) {
    x.push({
        sec_id: "7?De",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_link_52_0_4_28(o, x) {
    x.push({
        sec_id: "NoF1",
        u8_9: u8(o + 9),
    });

    // 32 bytes;

}
function im_bmg_demo_link_56(o, x) {
    x.push({
        sec_id: "T[48",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) ? im_bmg_demo_link_56_8(u32(o + 8) + g.m, x[0].section_8) : 0;

    // 32 bytes;

}
function im_bmg_demo_link_56_8(o, x) {
    x.push({
        sec_id: "EeHt",
    });

    // 32 bytes;

}
function im_bmg_demo_mysterious(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "4kfB",
        u8_0: u8(o + 0),
        u8_3: u8(o + 3),
        section_4: [],
        section_8: [],
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
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_unknown_array, im_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown);
        break;
    case 2:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_strange_array, im_bmg_demo_strange, g.unordered_ref.bmg_demo_strange);
        break;
    case 3:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_sound_controls_array, im_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls);
        break;
    case 5:
    case 6:
        u32(o + 4) ? im_bmg_demo_mysterious_4t5(u32(o + 4) + g.m, x[i].section_4) : 0;
        break;
    case 8:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_model_link_array, im_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link);
        break;
    case 11:
        x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_activator_array, im_bmg_demo_activator, g.unordered_ref.bmg_demo_activator);
        break;
    }
    u32(o + 8) ? im_bmg_demo_mysterious_8(u32(o + 8) + g.m, x[i].section_8) : 0;
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_mysterious_4t5(o, x) {
    x.push({
        sec_id: "T_9f",
        u8_3: u8(o + 3),
        u32_12: u32(o + 12),
        section_16: [],
        u32_32: u32(o + 32),
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        section_56: [],
    });

    switch (u8(o + 3)) {
    case 0:
        u32(o + 16) ? im_bmg_demo_mysterious_4t5_16t0(u32(o + 16) + g.m, x[0].section_16) : 0;
        break;
    case 2:
        u32(o + 16) ? im_bmg_demo_mysterious_4t5_16t2(u32(o + 16) + g.m, x[0].section_16) : 0;
        break;
    }
    u32(o + 36) ? im_bmg_demo_mysterious_4t5_36(u32(o + 36) + g.m, x[0].section_36) : 0;

    for (let i = 0; i < u32(o + 40); i++) {
        im_bmg_demo_mysterious_4t5_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_bmg_demo_mysterious_4t5_52(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) ? im_bmg_demo_mysterious_4t5_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    // 64 bytes;

}
function im_bmg_demo_mysterious_4t5_16t0(o, x) {
    x.push({
        sec_id: "YQ2o",
        model_0: im_patch(g.model_ref, o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_mysterious_4t5_16t2(o, x) {
    x.push({
        sec_id: "UZlh",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_mysterious_4t5_36(o, x) {
    x.push({
        sec_id: "Gemm",
    });

    // 32 bytes;

}
function im_bmg_demo_mysterious_4t5_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "IbM=",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bmg_demo_mysterious_4t5_52(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "t4Zr",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_bmg_demo_mysterious_4t5_56(o, x) {
    x.push({
        sec_id: "6s@3",
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_bmg_demo_mysterious_8(o, x) {
    x.push({
        sec_id: "n2Dn",
        u8_0: u8(o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_world_link_type(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "==?G",
        section_0: [],
        u8_4: u8(o + 4),
    });

    u32(o + 0) ? im_bmg_demo_world_link_type_0(u32(o + 0) + g.m, x[i].section_0) : 0;
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_world_link_type_0(o, x) {
    x.push({
        sec_id: "cfjA",
        unordered_bmg_demo_model_sub_link_12: 0,
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        section_56: [],
        u32_60: u32(o + 60),
        f32_84: f32(o + 84),
        u32_88: u32(o + 88),
    });

    x[0].unordered_bmg_demo_model_sub_link_12 = in_ml(u32(o + 12), g.bmg_demo_model_sub_link_array, im_bmg_demo_model_sub_link, g.unordered_ref.bmg_demo_model_sub_link);

    for (let i = 0; i < u32(o + 16); i++) {
        im_bmg_demo_world_link_type_0_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
    }
    u32(o + 56) ? im_bmg_demo_world_link_type_0_56(u32(o + 56) + g.m, x[0].section_56) : 0;

    // 96 bytes;

}
function im_bmg_demo_world_link_type_0_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "7IWl",
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_world_link_type_0_20_4(u32(o + 4) + g.m, x[i].section_4) : 0;

}
function im_bmg_demo_world_link_type_0_20_4(o, x) {
    x.push({
        sec_id: "_g^g",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_world_link_type_0_20_4_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bmg_demo_world_link_type_0_20_4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "3rAJ",
        unordered_bmg_demo_model_link_0: 0,
    });

    x[i].unordered_bmg_demo_model_link_0 = in_ml(u32(o + 0), g.bmg_demo_model_link_array, im_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link);

}
function im_bmg_demo_world_link_type_0_56(o, x) {
    x.push({
        sec_id: "3kaU",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_world_link_type_0_56_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_world_link_type_0_56_4(o, x) {
    x.push({
        sec_id: "<v4O",
    });

    // 32 bytes;

}
function im_bmg_demo_world_settings(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "QaV]",
        section_0: [],
        section_4: [],
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_33: u8(o + 33),
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
        section_60: [],
        texture_68: im_patch(g.bmg_demo_texture_patch_ref, o + 68),
        texture_72: im_patch(g.bmg_demo_texture_patch_ref, o + 72),
        texture_76: im_patch(g.bmg_demo_texture_patch_ref, o + 76),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        section_88: [],
        f32_92: f32(o + 92),
        f32_96: f32(o + 96),
        section_100: [],
        u32_104: u32(o + 104),
        //amount?
        section_108: [],
        f32_120: f32(o + 120),
        f32_124: f32(o + 124),
        f32_128: f32(o + 128),
        f32_132: f32(o + 132),
        u8_137: u8(o + 137),
        f32_140: f32(o + 140),
        texture_144: im_patch(g.bmg_demo_texture_patch_ref, o + 144),
        f32_148: f32(o + 148),
        f32_152: f32(o + 152),
        f32_156: f32(o + 156),
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        unordered_bmg_demo_font_176: 0,
    });

    u32(o + 0) ? im_bmg_demo_world_settings_0(u32(o + 0) + g.m, x[i].section_0) : 0;
    u32(o + 4) ? im_bmg_demo_world_settings_4(u32(o + 4) + g.m, x[i].section_4) : 0;

    for (let ii = 0; ii < u32(o + 52); ii++) {
        im_bmg_demo_world_settings_56(u32(o + 56) + (ii * 64) + g.m, ii, x[i].section_56);
    }
    u32(o + 60) ? im_bmg_demo_world_settings_60(u32(o + 60) + g.m, x[i].section_60) : 0;
    u32(o + 88) ? im_bmg_demo_world_settings_88(u32(o + 88) + g.m, x[i].section_88) : 0;
    u32(o + 100) ? im_bmg_demo_world_settings_100(u32(o + 100) + g.m, x[i].section_100) : 0;

    for (let ii = 0; ii < u32(o + 104); ii++) {
        im_bmg_demo_world_settings_108(u32(o + 108) + (ii * 4) + g.m, ii, x[i].section_108);
    }
    x[i].unordered_bmg_demo_font_176 = in_ml(u32(o + 176), g.bmg_demo_font_array, im_bmg_demo_font, g.unordered_ref.bmg_demo_font);
    return x[i].id
    // 192 bytes;

}
function im_bmg_demo_world_settings_0(o, x) {
    x.push({
        sec_id: "j[CS",
        unordered_bmg_demo_interface_0: 0,
        unordered_bmg_demo_interface_4: 0,
    });

    x[0].unordered_bmg_demo_interface_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
    x[0].unordered_bmg_demo_interface_4 = in_ml(u32(o + 4), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);

    // 32 bytes;

}
function im_bmg_demo_world_settings_4(o, x) {
    x.push({
        sec_id: "Mu^w",
        unordered_bmg_demo_interface_0: 0,
        f32_12: f32(o + 12),
        u8_20: u8(o + 20),
        f32_24: f32(o + 24),
    });

    x[0].unordered_bmg_demo_interface_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);

    // 64 bytes;

}
function im_bmg_demo_world_settings_56(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "sfsX",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
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
function im_bmg_demo_world_settings_60(o, x) {
    x.push({
        sec_id: "]Nkf",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_world_settings_88(o, x) {
    x.push({
        sec_id: "SM65",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 32 bytes;

}
function im_bmg_demo_world_settings_100(o, x) {
    x.push({
        sec_id: "jMbQ",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 32 bytes;

}
function im_bmg_demo_world_settings_108(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Qkx]",
        section_0: im_string(u32(o + 0), 0, false),
    });

}

function im_bmg_demo_texture_anim_0(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "tWK>",
        section_4: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    u32(o + 4) ? im_bmg_demo_texture_anim_0_4(u32(o + 4) + g.m, x[i].section_4) : 0;

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_bmg_demo_texture_anim_0_20(u32(o + 20) + (ii * 16) + g.m, ii, x[i].section_20);
    }
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_texture_anim_0_4(o, x) {
    x.push({
        sec_id: "_fbe",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        u32_20: u32(o + 20),
    });

    u32(o + 4) ? im_bmg_demo_texture_anim_0_4_4(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 32 bytes;

}
function im_bmg_demo_texture_anim_0_4_4(o, x) {
    x.push({
        sec_id: "EtH5",
        texture_0: im_patch(g.bmg_demo_texture_patch_ref, o + 0),
    });

    // 32 bytes;

}
function im_bmg_demo_texture_anim_0_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "cyYC",
        f32_4: f32(o + 4),
        u8_9: u8(o + 9),
        f32_12: f32(o + 12),
    });

}

function im_bmg_demo_model_anim_3(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "o[F3",
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_36: im_string(u32(o + 36), 0, false),
    });

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bmg_demo_model_anim_3_24(u32(o + 24) + (ii * 2) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_bmg_demo_model_anim_3_32(u32(o + 32) + (ii * 24) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_model_anim_3_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "xzyA",
        u16_0: u16(o + 0),
    });

}
function im_bmg_demo_model_anim_3_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gZtS",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
    });

}

function im_bmg_demo_model_anim_1_type_a(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "fed9",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        section_28: [],
        section_32: [],
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        section_52: [],
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
    });

    if (log_array.p_offset.array.includes(o + 24 - g.m)) {
        im_bmg_demo_model_anim_1_type_a_24(u32(o + 24) + g.m, x[i].section_24)
    } else {
        x[i].section_24 = u32(o + 24)
    }

    if (log_array.p_offset.array.includes(o + 28 - g.m)) {
        im_bmg_demo_model_anim_1_type_a_28(u32(o + 28) + g.m, x[i].section_28)
    } else {
        x[i].section_28 = u32(o + 28)
    }

    if (log_array.p_offset.array.includes(o + 32 - g.m)) {
        for (let ii = 0; ii < u32(o + 16); ii++) {
            im_bmg_demo_model_anim_1_type_a_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
        }
    } else {
        x[i].section_32 = u32(o + 32)
    }

    if (log_array.p_offset.array.includes(o + 36 - g.m)) {
        im_bmg_demo_model_anim_1_type_a_36(u32(o + 36) + g.m, x[i].section_36)
    } else {
        x[i].section_36 = u32(o + 36)
    }

    if (log_array.p_offset.array.includes(o + 52 - g.m)) {
        im_bmg_demo_model_anim_1_type_a_52(u32(o + 52) + g.m, 0, x[i].section_52)
    } else {
        x[i].section_52 = u32(o + 52)
    }

    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_model_anim_1_type_a_24(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    x.push({
        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bmg_demo_model_anim_1_type_a_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "ZOf5",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

}
function im_bmg_demo_model_anim_1_type_a_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "2k[k",
        f32_0: f32(o + 0),
    });

}
function im_bmg_demo_model_anim_1_type_a_36(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "JeUR",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bmg_demo_model_anim_1_type_a_52(o, i, x) {
    x.push({
        sec_id: "yToO",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        section_12: [],
        section_16: [],
        section_20: [],
        section_24: [],
        section_28: [],
        section_32: [],
    });

    if (log_array.p_offset.array.includes(o + 12 - g.m)) {
        for (let ii = 0; ii < u32(o + 0); ii++) {
            im_bmg_demo_model_anim_1_type_a_52_12(u32(o + 12) + (ii * 2) + g.m, ii, x[i].section_12);
        }
    } else {
        x[i].section_12 = u32(o + 12)
    }

    if (log_array.p_offset.array.includes(o + 16 - g.m)) {
        for (let ii = 0; ii < u32(o + 8); ii++) {
            im_bmg_demo_model_anim_1_type_a_52_16(u32(o + 16) + (ii * 2) + g.m, ii, x[i].section_16);
        }
    } else {
        x[i].section_16 = u32(o + 16)
    }

    if (log_array.p_offset.array.includes(o + 20 - g.m)) {
        for (let ii = 0; ii < u32(o + 4); ii++) {
            im_bmg_demo_model_anim_1_type_a_52_20(u32(o + 20) + (ii * 2) + g.m, ii, x[i].section_20);
        }
    } else {
        x[i].section_20 = u32(o + 20)
    }

    if (log_array.p_offset.array.includes(o + 24 - g.m)) {
        for (let ii = 0; ii < u32(o + 0); ii++) {
            im_bmg_demo_model_anim_1_type_a_52_24(u32(o + 24) + (ii * 4) + g.m, ii, x[i].section_24);
        }
    } else {
        x[i].section_24 = u32(o + 24)
    }

    if (log_array.p_offset.array.includes(o + 28 - g.m)) {
        u32(o + 28) ? im_bmg_demo_model_anim_1_type_a_52_28(u32(o + 28) + g.m, x[0].section_28) : 0;
    } else {
        x[i].section_28 = u32(o + 28)
    }
    if (log_array.p_offset.array.includes(o + 32 - g.m)) {
        u32(o + 32) ? im_bmg_demo_model_anim_1_type_a_52_32(u32(o + 32) + g.m, x[0].section_32) : 0;
    } else {
        x[i].section_32 = u32(o + 32)
    }

    // offset? 
    // offset? 
    // offset? 
    // offset? 

    // 36 bytes;

}
function im_bmg_demo_model_anim_1_type_a_52_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "]H0t",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

}
function im_bmg_demo_model_anim_1_type_a_52_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Rkkl",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

}
function im_bmg_demo_model_anim_1_type_a_52_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=Kkb",
        u8_1: u8(o + 1),
    });

}
function im_bmg_demo_model_anim_1_type_a_52_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "34M?",
        f32_0: f32(o + 0),
    });

}
function im_bmg_demo_model_anim_1_type_a_52_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "cbDb",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bmg_demo_model_anim_1_type_a_52_32(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "]ZtJ",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // 00 bytes;

}

function im_bmg_demo_model_anim_1_type_b(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "n3ay",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u32_16: u32(o + 16),
        //amount?
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        section_32: [],
        section_36: [],
    });

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_bmg_demo_model_anim_1_type_b_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    u32(o + 36) ? im_bmg_demo_model_anim_1_type_b_36(u32(o + 36) + g.m, x[i].section_36) : 0;
    return x[i].id
    // 48 bytes;

}
function im_bmg_demo_model_anim_1_type_b_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "bJzj",
        section_0: im_string(u32(o + 0), 0, false),
    });

}
function im_bmg_demo_model_anim_1_type_b_36(o, x) {
    x.push({
        sec_id: "GaI0",
        type: u8(o),
        section_0: [],
    });

    switch (x[0].type) {
    case 0:
     im_bmg_demo_model_anim_1_type_b_36t0(o, x[0].section_0)
        break
    case 3:
     im_bmg_demo_model_anim_1_type_b_36t3(o, x[0].section_0)
        break
    case 5:
     im_bmg_demo_model_anim_1_type_b_36t5(o, x[0].section_0)
        break
    case 6:
     im_bmg_demo_model_anim_1_type_b_36t6(o, x[0].section_0)
        break
    }
    // 16/32 bytes;

}
function im_bmg_demo_model_anim_1_type_b_36t0(o, x) {
    x.push({
        sec_id: "ktsB",
        u8_1: u8(o + 1),
        section_4: [],
        f32_8: f32(o + 8),
    });

    u32(o + 4) ? im_bmg_demo_model_anim_1_type_b_36(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 16 bytes;

}
function im_bmg_demo_model_anim_1_type_b_36t3(o, x) {
    x.push({
        sec_id: "kf_D",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        //amount?
        section_4: [],
        section_8: [],
        f32_12: f32(o + 12),
    });

    u32(o + 4) ? im_bmg_demo_model_anim_1_type_b_36(u32(o + 4) + g.m, x[0].section_4) : 0;

    for (let i = 0; i < u8(o + 3); i++) {
        im_bmg_demo_model_anim_1_type_b_36t3_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_bmg_demo_model_anim_1_type_b_36t3_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5c1m",
        f32_0: f32(o + 0),
    });

}
function im_bmg_demo_model_anim_1_type_b_36t5(o, x) {
    x.push({
        sec_id: "q3mS",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        //amount?
        section_4: [],
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        section_16: [],
        f32_20: f32(o + 20),
    });

    u32(o + 4) ? im_bmg_demo_model_anim_1_type_b_36(u32(o + 4) + g.m, x[0].section_4) : 0;

    for (let i = 0; i < u8(o + 3); i++) {
        im_bmg_demo_model_anim_1_type_b_36t5_16(u32(o + 16) + (i * 1) + g.m, i, x[0].section_16);
    }

    // 32 bytes;

}
function im_bmg_demo_model_anim_1_type_b_36t5_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "uP2S",
        u8_0: u8(o + 0),
    });

}
function im_bmg_demo_model_anim_1_type_b_36t6(o, x) {
    x.push({
        sec_id: "3l7b",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        section_4: [],
        f32_8: f32(o + 8),
    });

    u32(o + 4) ? im_bmg_demo_model_anim_1_type_b_36(u32(o + 4) + g.m, x[0].section_4) : 0;

    // 16 bytes;

}

function im_bmg_demo_model_anim_2_type_a(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Ca2a",
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
        im_bmg_demo_model_anim_2_type_a_16(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_model_anim_2_type_a_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Ix:y",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
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

function im_bmg_demo_model_anim_2_type_b(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "B5or",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
        section_16: [],
        section_20: [],
    });

    u32(o + 16) ? im_bmg_demo_model_anim_2_type_b_16(u32(o + 16) + g.m, x[i].section_16) : 0;
    u32(o + 20) ? im_bmg_demo_model_anim_2_type_b_20(u32(o + 20) + g.m, x[i].section_20) : 0;
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_model_anim_2_type_b_16(o, x) {
    x.push({
        sec_id: "xLsQ",
    });

    // 16 bytes;

}
function im_bmg_demo_model_anim_2_type_b_20(o, x) {
    x.push({
        sec_id: "wh<4",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
    });

    for (let i = 0; i < u32(o + 36); i++) {
        im_bmg_demo_model_anim_2_type_b_20_40(u32(o + 40) + (i * 4) + g.m, i, x[0].section_40);
    }

    // 48 bytes;

}
function im_bmg_demo_model_anim_2_type_b_20_40(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "L26x",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_model_anim_2_type_b_20(u32(o + 0) + g.m, x[i].section_0) : 0;

}
/* end import list */
/////////////////////
/* start add_ list */

function add_bmg_demo_x() {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

}

function add_bmg_demo_file_header() {
    return {
        id: gen_id(),
        sec_id: "5S25",
        u32_00: 0,
        u32_04: 0,
        u32_08: 0,
        section_12: [],
    };

}

function add_bmg_demo_directory() {
    return {
        id: gen_id(),
        sec_id: "^RrX",
        u32_0: 0,
        u32_4: u32(o + 4),
        //check this
        u32_8: 0,
        u32_16: 0,
        section_20: [],
    };

}

function add_bmg_demo_datapack() {
    return {
        id: gen_id(),
        sec_id: "4akv",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_48: 0,
        u32_52: 0,
        model_56: [0, 0, 0, 'm'],
        section_60: [],
        u32_80: 0,
        u32_84: 0,
        u32_88: 0,
        u32_92: 0,
        u32_96: 0,
        u32_100: 0,
        u32_104: 0,
        section_108: [],
        u32_124: 0,
        u32_144: 0,
    };

}

function add_bmg_demo_basic_audio() {
    return {
        id: gen_id(),
        sec_id: "XH?<",
        section_0: [],
    };

}
function add_bmg_demo_basic_audio_0() {
    return {
        sec_id: "11Hn",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_bmg_demo_basic_audio_0_0() {
    return {
        sec_id: "Ry[O",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        u32_52: 0,
        u32_56: 0,
        u32_60: 0,
        u32_68: 0,
        u32_72: 0,
    };

}

function im_bmg_demo_basic(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "7ivv",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) ? im_bmg_demo_basic_4(u32(o + 4) + g.m, x[i].section_4) : 0;
    return x[i].id
    // 32 bytes;

}
function im_bmg_demo_basic_4(o, x) {
    x.push({
        sec_id: "vdfC",
        section_0: [],
        u32_4: u32(o + 4),
    });

    switch (g.file_dir_type) {
    case "interface":
        x[0].section_0 = in_ml(u32(o + 0), g.bmg_demo_interface_array, im_bmg_demo_interface, g.unordered_ref.bmg_demo_interface);
        break
    case "link":
        x[0].section_0 = in_ml(u32(o + 0), g.bmg_demo_link_array, im_bmg_demo_link, g.unordered_ref.bmg_demo_link);
        break
    default:
        console.pk_log('file type is not set')
    }
    // 32 bytes;

}

function im_bmg_demo_texture_anim(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "dOo9",
        section_0: [],
    });

    u32(o + 0) ? im_bmg_demo_texture_anim_0(u32(o + 0) + g.m, 0, x[i].section_0) : 0;
    // offset? 
    return x[i].id
    // 12 bytes;

}

function im_bmg_demo_datapack_108(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "CThc",
        section_4: [],
    });

    x[i].section_4 = in_ml(u32(o + 4), g.bmg_demo_text_array, im_bmg_demo_text, g.unordered_ref.bmg_demo_text);
    return x[i].id
    // 8 bytes;

}

function im_bmg_demo_world(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "F[:U",
        section_0: [],
        unordered_bmg_demo_world_4_4: 0,
        u32_8: u32(o + 8),
        //amount?
        unordered_bmg_demo_world_12_12: 0,
        u32_16: u32(o + 16),
        //amount?
        unordered_bmg_demo_world_20_20: 0,
        u32_24: u32(o + 24),
        //amount?
        unordered_bmg_demo_world_28_28: [],
        u32_64: u32(o + 64),
        //amount?
        unordered_bmg_demo_world_68_68: 0,
        u32_80: u32(o + 80),
        //amount?
        unordered_bmg_demo_world_84_84: 0,
        u32_88: u32(o + 88),
        //amount?
        unordered_bmg_demo_world_92_92: 0,
        u32_112: u32(o + 112),
        //amount?
        unordered_bmg_demo_world_116_116: 0,
        unordered_bmg_demo_world_120_120: [],
        unordered_bmg_demo_world_settings_172: 0,
        unordered_bmg_demo_world_176_176: [],
        u32_204: u32(o + 204),
        unordered_bmg_demo_world_208_208: [],
        u8_240: u8(o + 240),
        u8_241: u8(o + 241),
        u8_242: u8(o + 242),
        u8_243: u8(o + 243),
        u32_244: u32(o + 244),
        u32_248: u32(o + 248),
        u32_256: u32(o + 256),
        u8_260: u8(o + 260),
        u8_261: u8(o + 261),
        u8_262: u8(o + 262),
        u8_263: u8(o + 263),
        u8_264: u8(o + 264),
        u8_265: u8(o + 265),
        u8_266: u8(o + 266),
        u8_267: u8(o + 267),
        u32_272: u32(o + 272),
        u8_276: u8(o + 276),
        u8_277: u8(o + 277),
        u8_278: u8(o + 278),
        u8_279: u8(o + 279),
        u32_280: u32(o + 280),
        u8_284: u8(o + 284),
        u8_285: u8(o + 285),
        u8_286: u8(o + 286),
        u8_287: u8(o + 287),
        u8_288: u8(o + 288),
        u8_289: u8(o + 289),
        u8_290: u8(o + 290),
        u32_292: u32(o + 292),
        u8_296: u8(o + 296),
        u8_297: u8(o + 297),
        u8_298: u8(o + 298),
        u8_299: u8(o + 299),
        u32_300: u32(o + 300),
    });

    u32(o + 0) ? im_bmg_demo_world_0(u32(o + 0) + g.m, x[i].section_0) : 0;
    x[i].unordered_bmg_demo_world_4_4 = in_ml(u32(o + 4), g.bmg_demo_world_4_array, im_bmg_demo_world_4, g.unordered_ref.bmg_demo_world_4);
    x[i].unordered_bmg_demo_world_12_12 = in_ml(u32(o + 12), g.bmg_demo_world_12_array, im_bmg_demo_world_12, g.unordered_ref.bmg_demo_world_12);
    for (let ii = 0; ii < u32(o + 16); ii++) {
        x[i].section_20 = in_ml(u32(o + 20) + (ii * 128), g.bmg_demo_world_20_array, im_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20);
        // im_bmg_demo_world_20(u32(o + 20) + (ii * 128) + g.m, ii, x[i].section_20);
    }
    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_bmg_demo_world_28(u32(o + 28) + (ii * 112) + g.m, ii, x[i].unordered_bmg_demo_world_28_28);
    }
    for (let ii = 0; ii < u32(o + 64); ii++) {
        x[i].section_68 = in_ml(u32(o + 68) + (ii * 112), g.bmg_demo_world_68_array, im_bmg_demo_world_68, g.unordered_ref.bmg_demo_world_68);
        // im_bmg_demo_world_68(u32(o + 68)  + g.m, ii, x[i].);
    }
    x[i].unordered_bmg_demo_world_84_84 = in_ml(u32(o + 84), g.bmg_demo_world_84_array, im_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84);

    for (let ii = 0; ii < u32(o + 88); ii++) {
        x[i].section_92 = in_ml(u32(o + 92) + (ii * 96), g.bmg_demo_world_92_array, im_bmg_demo_world_92, g.unordered_ref.bmg_demo_world_92);
        // im_bmg_demo_world_92(u32(o + 92) + (ii * 96) + g.m, ii, x[i].section_92);
    }

    for (let ii = 0; ii < u32(o + 112); ii++) {
        x[i].unordered_bmg_demo_world_116_116 = in_ml(u32(o + 116) + (ii * 112), g.bmg_demo_world_116_array, im_bmg_demo_world_116, g.unordered_ref.bmg_demo_world_116);
        // im_bmg_demo_world_116(u32(o + 116) + (ii * 112) + g.m, ii, x[i].section_116);
    }
    u32(o + 120) ? im_bmg_demo_world_120(u32(o + 120) + g.m, x[i].unordered_bmg_demo_world_120_120) : 0;
    x[i].unordered_bmg_demo_world_settings_172 = in_ml(u32(o + 172), g.bmg_demo_world_settings_array, im_bmg_demo_world_settings, g.unordered_ref.bmg_demo_world_settings);

    u32(o + 176) ? im_bmg_demo_world_176(u32(o + 176) + g.m, x[i].unordered_bmg_demo_world_176_176) : 0;
    u32(o + 208) ? im_bmg_demo_world_208(u32(o + 208) + g.m, x[i].unordered_bmg_demo_world_208_208) : 0;
    return x[i].id
    // 320 bytes;

}
function im_bmg_demo_world_0(o, x) {
    x.push({
        sec_id: "n0@1",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
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
        section_76: [],
    });

    u32(o + 32) ? im_bmg_demo_world_0_32(u32(o + 32) + g.m, x[0].section_32) : 0;

    let amt = u32(o + 52) * u32(o + 56) * u32(o + 60)

    for (let i = 0; i < amt; i++) {
        im_bmg_demo_world_0_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }

    // for (let i = 0; i < u32(o + amt); i++) {
    //     im_bmg_demo_world_0_76(u32(o + 76) + (i * 4) + g.m, i, x[0].section_76);
    // }
    // u32(o + 76) ? x[i].section_64 = 
    //     im_bmg_demo_world_0_64(u32(o + 64) + g.m,x[i].section_64) : 0; // offset? 

    // 96 bytes;

}
function im_bmg_demo_world_0_64(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "hANj",
    });

}

// im_bmg_demo_world_0_76
function im_bmg_demo_world_0_32(o, x) {
    x.push({
        sec_id: "HX1h",
    });

    // 48 bytes;

}
function im_bmg_demo_world_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ";Hza",
        u32_0: u32(o + 0),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
        f32_44: f32(o + 44),
        unordered_bmg_demo_world_link_type_60: 0,
        u8_64: u8(o + 64),
        u8_65: u8(o + 65),
        u8_66: u8(o + 66),
        u8_67: u8(o + 67),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        u8_110: u8(o + 110),
        u8_111: u8(o + 111),
        u8_114: u8(o + 114),
        u32_120: u32(o + 120),
        u32_124: u32(o + 124),
        u32_132: u32(o + 132),
    });

    x[0].unordered_bmg_demo_world_link_type_60 = in_ml(u32(o + 60), g.bmg_demo_world_link_type_array, im_bmg_demo_world_link_type, g.unordered_ref.bmg_demo_world_link_type);
    // offset?
    return x[i].id
    // 160 bytes;

}
function im_bmg_demo_world_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "l7_m",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_6: u16(o + 6),
        u16_14: u16(o + 14),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_60: f32(o + 60),
        section_64: [],
        f32_68: f32(o + 68),
        section_72: [],
        section_76: [],
        u8_82: u8(o + 82),
        f32_84: f32(o + 84),
    });

    x[i].section_64 = in_ml(u32(o + 64), g.bmg_demo_model_anim_1_type_a_array, im_bmg_demo_model_anim_1_type_a, g.unordered_ref.bmg_demo_model_anim_1_type_a);
    x[i].section_72 = in_ml(u32(o + 72), g.bmg_demo_idk_array, im_bmg_demo_idk, g.unordered_ref.bmg_demo_idk);
    x[i].section_76 = in_ml(u32(o + 76), g.bmg_demo_model_link_array, im_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link);

    return x[i].id
    // 128 bytes;

}
function im_bmg_demo_world_92(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "86I_",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_6: u16(o + 6),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_44: f32(o + 44),
        f32_52: f32(o + 52),
        f32_60: f32(o + 60),
        section_64: [],
        f32_68: f32(o + 68),
    });

    x[i].section_64 = in_ml(u32(o + 64), g.bmg_demo_idk_array, im_bmg_demo_idk, g.unordered_ref.bmg_demo_idk);
    // offset? 
    return x[i].id
    // 96 bytes;

}
function im_bmg_demo_world_116(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "XYmu",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_6: u16(o + 6),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
        f32_32: f32(o + 32),
        f32_52: f32(o + 52),
        f32_72: f32(o + 72),
        f32_92: f32(o + 92),
        model_100: im_patch(g.model_ref, o + 100),
    });

    return x[i].id
    // 112 bytes;

}
function im_bmg_demo_world_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "]JOR",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_6: u16(o + 6),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
        u32_40: u32(o + 40),
        //amount?
        u32_52: u32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        section_72: [],
        section_76: [],
        u8_84: u8(o + 84),
        u8_85: u8(o + 85),
        u8_86: u8(o + 86),
        u8_87: u8(o + 87),
    });

    let bytelength = u32(o + 52)
    for (let ii = 0; ii < bytelength; ii += 32) {
        im_bmg_demo_world_28_56(u32(o + 56) + ii + g.m, ii, x[i].section_56);
    }

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_bmg_demo_world_28_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    globalThis.get_bmg_demo_world_28_72_count = u32(o + 40)

    u32(o + 72) ? im_bmg_demo_world_28_72(u32(o + 72) + g.m, x[i].section_72) : 0;

    delete globalThis.get_bmg_demo_world_28_72_count

    u32(o + 76) ? im_bmg_demo_world_28_76(u32(o + 76) + g.m, x[i].section_76) : 0;

}
function im_bmg_demo_world_28_76(o, x) {
    x.push({
        sec_id: "q6g]",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bmg_demo_world_28_76_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    // 32 bytes;

}
function im_bmg_demo_world_28_72(o, x) {
    x.push({
        sec_id: "<>FE",
        section_0: [],
    });

    if (u32(o)) {
        for (let i = 0; i < get_bmg_demo_world_28_72_count; i++) {
            im_bmg_demo_world_28_72_0(u32(o + 0) + (i * 4) + g.m, i, x[0].section_0);
        }
    }

    // 32 bytes;

}
function im_bmg_demo_world_28_72_0(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "d;;J",
        unordered_bmg_demo_world_116_0: 0,
    });

    x[i].unordered_bmg_demo_world_116_0 = in_ml(u32(o + 0), g.bmg_demo_world_116_array, im_bmg_demo_world_116, g.unordered_ref.bmg_demo_world_116);

}
function im_bmg_demo_world_28_64(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "0F]x",
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

}
function im_bmg_demo_world_28_56(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "oZ7E",
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
function im_bmg_demo_world_28_76_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "c_qs",
        unordered_bmg_demo_world_92_0: 0,
    });

    x[i].unordered_bmg_demo_world_92_0 = in_ml(u32(o + 0), g.bmg_demo_world_92_array, im_bmg_demo_world_92, g.unordered_ref.bmg_demo_world_92);

}
function im_bmg_demo_world_68(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=oJn",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_6: u16(o + 6),
        u16_14: u16(o + 14),
        u16_18: u16(o + 18),
        f32_44: f32(o + 44),
        f32_52: f32(o + 52),
        f32_60: f32(o + 60),
        section_64: [],
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        u32_80: u32(o + 80),
        u32_84: u32(o + 84),
    });

    x[i].section_64 = in_ml(u32(o + 64), g.bmg_demo_activator_array, im_bmg_demo_activator, g.unordered_ref.bmg_demo_activator);
    // offset? 
    return x[i].id
    // 112 bytes;

}
function im_bmg_demo_world_84(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "VUgJ",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
        f32_44: f32(o + 44),
        u32_60: u32(o + 60),
        section_64: [],
    });

    x[0].section_64 = in_ml(u32(o + 64), g.bmg_demo_world_12_array, im_bmg_demo_world_12, g.unordered_ref.bmg_demo_world_12);
    // offset? 
    return x[i].id
    // 96 bytes;

}
function im_bmg_demo_world_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "fF;x",
        section_16: [],
        unordered_bmg_demo_world_4_20: 0,
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
    });

    u32(o + 16) ? im_bmg_demo_world_4_16(u32(o + 16) + g.m, x[i].section_16) : 0;
    x[i].unordered_bmg_demo_world_4_20 = in_ml(u32(o + 20), g.bmg_demo_world_4_array, im_bmg_demo_world_4, g.unordered_ref.bmg_demo_world_4);
    return x[i].id
    // 64 bytes;

}
function im_bmg_demo_world_4_16(o, x) {
    x.push({
        sec_id: "0tcr",
    });

    // 96 bytes;

}
function im_bmg_demo_world_120(o, x) {
    x.push({
        sec_id: "o7cm",
    });

    // 32 bytes;

}
function im_bmg_demo_world_208(o, x) {
    x.push({
        sec_id: "3Ld8",
        unordered_bmg_demo_world_thing_0: 0,
    });

    x[0].unordered_bmg_demo_world_thing_0 = in_ml(u32(o + 0), g.bmg_demo_world_thing_array, im_bmg_demo_world_thing, g.unordered_ref.bmg_demo_world_thing);

    // 32 bytes;

}
function im_bmg_demo_world_176(o, x) {
    x.push({
        sec_id: "aLv<",
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
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bmg_demo_world_176_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_bmg_demo_world_176_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_bmg_demo_world_176_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_bmg_demo_world_176_28(u32(o + 28) + (i * 4) + g.m, i, x[0].section_28);
    }

    // 128 bytes;

}
function im_bmg_demo_world_176_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "m<qQ",
        unordered_bmg_demo_flag_0: 0,
    });

    x[i].unordered_bmg_demo_flag_0 = in_ml(u32(o + 0), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

}
function im_bmg_demo_world_176_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "3T@A",
        unordered_bmg_demo_var_0: 0,
    });

    x[i].unordered_bmg_demo_var_0 = in_ml(u32(o + 0), g.bmg_demo_var_array, im_bmg_demo_var, g.unordered_ref.bmg_demo_var);

}
function im_bmg_demo_world_176_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "meiW",
        unordered_bmg_demo_something_0: 0,
    });

    x[i].unordered_bmg_demo_something_0 = in_ml(u32(o + 0), g.bmg_demo_something_array, im_bmg_demo_something, g.unordered_ref.bmg_demo_something);

}
function im_bmg_demo_world_176_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "EhAl",
        unordered_bmg_demo_flag_0: 0,
    });

    x[i].unordered_bmg_demo_flag_0 = in_ml(u32(o + 0), g.bmg_demo_flag_array, im_bmg_demo_flag, g.unordered_ref.bmg_demo_flag);

}

function add_bmg_demo_basic() {
    return {
        id: gen_id(),
        sec_id: "7ivv",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_basic_4() {
    return {
        sec_id: "vdfC",
        section_0: [],
        u32_4: 0,
    };

}

function add_bmg_demo_texture_anim() {
    return {
        id: gen_id(),
        sec_id: "dOo9",
        section_0: [],
    };

}

function add_bmg_demo_datapack_108() {
    return {
        id: gen_id(),
        sec_id: "CThc",
        section_4: [],
    };

}

function add_bmg_demo_world() {
    return {
        id: gen_id(),
        sec_id: "F[:U",
        section_0: [],
        unordered_bmg_demo_world_4_4: 0,
        u32_8: 0,
        unordered_bmg_demo_world_12_12: 0,
        u32_16: 0,
        unordered_bmg_demo_world_20_20: 0,
        u32_24: 0,
        unordered_bmg_demo_world_28_28: 0,
        u32_64: 0,
        unordered_bmg_demo_world_68_68: 0,
        u32_80: 0,
        unordered_bmg_demo_world_84_84: 0,
        u32_88: 0,
        unordered_bmg_demo_world_92_92: 0,
        u32_112: 0,
        unordered_bmg_demo_world_116_116: 0,
        unordered_bmg_demo_world_120_120: 0,
        unordered_bmg_demo_world_settings_172: 0,
        unordered_bmg_demo_world_176_176: 0,
        u32_204: 0,
        unordered_bmg_demo_world_208_208: 0,
        u8_240: 0,
        u8_241: 0,
        u8_242: 0,
        u8_243: 0,
        u32_244: 0,
        u32_248: 0,
        u32_256: 0,
        u8_260: 0,
        u8_261: 0,
        u8_262: 0,
        u8_263: 0,
        u8_264: 0,
        u8_265: 0,
        u8_266: 0,
        u8_267: 0,
        u32_272: 0,
        u8_276: 0,
        u8_277: 0,
        u8_278: 0,
        u8_279: 0,
        u32_280: 0,
        u8_284: 0,
        u8_285: 0,
        u8_286: 0,
        u8_287: 0,
        u8_288: 0,
        u8_289: 0,
        u8_290: 0,
        u32_292: 0,
        u8_296: 0,
        u8_297: 0,
        u8_298: 0,
        u8_299: 0,
        u32_300: 0,
    };

}
function add_bmg_demo_world_0() {
    return {
        sec_id: "n0@1",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        section_32: [],
        u32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u32_52: 0,
        u32_56: 0,
        u32_60: 0,
        section_64: [],
        u32_68: 0,
        section_76: [],
    };

}
function add_bmg_demo_world_0_64() {
    return {
        id: gen_id(),
        sec_id: "hANj",
    };

}
function add_bmg_demo_world_0_32() {
    return {
        sec_id: "HX1h",
    };

}
function add_bmg_demo_world_12() {
    return {
        id: gen_id(),
        sec_id: ";Hza",
        u32_0: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_44: 0,
        unordered_bmg_demo_world_link_type_60: 0,
        u8_64: 0,
        u8_65: 0,
        u8_66: 0,
        u8_67: 0,
        u8_70: 0,
        u8_71: 0,
        f32_72: 0,
        f32_76: 0,
        u8_110: 0,
        u8_111: 0,
        u8_114: 0,
        u32_120: 0,
        u32_124: 0,
        u32_132: 0,
    };

}
function add_bmg_demo_world_20() {
    return {
        id: gen_id(),
        sec_id: "l7_m",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_14: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_60: 0,
        section_64: [],
        f32_68: 0,
        section_72: [],
        section_76: [],
        u8_82: 0,
        f32_84: 0,
    };

}
function add_bmg_demo_world_92() {
    return {
        id: gen_id(),
        sec_id: "86I_",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_32: 0,
        f32_36: 0,
        f32_44: 0,
        f32_52: 0,
        f32_60: 0,
        section_64: [],
        f32_68: 0,
    };

}
function add_bmg_demo_world_116() {
    return {
        id: gen_id(),
        sec_id: "XYmu",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_32: 0,
        f32_52: 0,
        f32_72: 0,
        f32_92: 0,
        model_100: [0, 0, 0, 'm'],
    };

}
function add_bmg_demo_world_28() {
    return {
        id: gen_id(),
        sec_id: "]JOR",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        u32_40: 0,
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
        section_72: [],
        section_76: [],
        u8_84: 0,
        u8_85: 0,
        u8_86: 0,
        u8_87: 0,
    };

}
function add_bmg_demo_world_28_76() {
    return {
        sec_id: "q6g]",
        u32_4: 0,
        section_8: [],
    };

}
function add_bmg_demo_world_28_72() {
    return {
        sec_id: "<>FE",
        section_0: [],
    };

}
function add_bmg_demo_world_28_72_0() {
    return {
        id: gen_id(),
        sec_id: "d;;J",
        unordered_bmg_demo_world_116_0: 0,
    };

}
function add_bmg_demo_world_28_64() {
    return {
        id: gen_id(),
        sec_id: "0F]x",
        u8_2: 0,
        u8_3: 0,
    };

}
function add_bmg_demo_world_28_56() {
    return {
        id: gen_id(),
        sec_id: "oZ7E",
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
function add_bmg_demo_world_28_76_8() {
    return {
        id: gen_id(),
        sec_id: "c_qs",
        unordered_bmg_demo_world_92_0: 0,
    };

}
function add_bmg_demo_world_68() {
    return {
        id: gen_id(),
        sec_id: "=oJn",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_14: 0,
        u16_18: 0,
        f32_44: 0,
        f32_52: 0,
        f32_60: 0,
        section_64: [],
        f32_68: 0,
        f32_72: 0,
        u32_80: 0,
        u32_84: 0,
    };

}
function add_bmg_demo_world_84() {
    return {
        id: gen_id(),
        sec_id: "VUgJ",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_44: 0,
        u32_60: 0,
        section_64: [],
    };

}
function add_bmg_demo_world_4() {
    return {
        id: gen_id(),
        sec_id: "fF;x",
        section_16: [],
        unordered_bmg_demo_world_4_20: 0,
        u32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_48: 0,
    };

}
function add_bmg_demo_world_4_16() {
    return {
        sec_id: "0tcr",
    };

}
function add_bmg_demo_world_120() {
    return {
        sec_id: "o7cm",
    };

}
function add_bmg_demo_world_208() {
    return {
        sec_id: "3Ld8",
        unordered_bmg_demo_world_thing_0: 0,
    };

}
function add_bmg_demo_world_176() {
    return {
        sec_id: "aLv<",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_bmg_demo_world_176_4() {
    return {
        id: gen_id(),
        sec_id: "m<qQ",
        unordered_bmg_demo_flag_0: 0,
    };

}
function add_bmg_demo_world_176_12() {
    return {
        id: gen_id(),
        sec_id: "3T@A",
        unordered_bmg_demo_var_0: 0,
    };

}
function add_bmg_demo_world_176_20() {
    return {
        id: gen_id(),
        sec_id: "meiW",
        unordered_bmg_demo_something_0: 0,
    };

}
function add_bmg_demo_world_176_28() {
    return {
        id: gen_id(),
        sec_id: "EhAl",
        unordered_bmg_demo_flag_0: 0,
    };

}

function add_bmg_demo_activator() {
    return {
        id: gen_id(),
        sec_id: "JGGu",
        section_0: ["Pac-Kart"],
        unordered_bmg_demo_model_anim_2_type_a_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        f32_16: 0,
        f32_24: 0,
        section_28: [],
        f32_32: 0,
        u32_36: 0,
        section_108: [],
        u32_120: 0,
        u32_148: 0,
        u8_158: 0,
        u8_180: 0,
        f32_184: 0,
        section_188: [],
        u32_216: 0,
        section_220: [],
        u32_224: 0,
        section_228: [],
        u32_232: 0,
        section_236: [],
        u32_248: 0,
        section_252: [],
    };

}
function add_bmg_demo_activator_28() {
    return {
        sec_id: "CRap",
        f32_8: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bmg_demo_activator_108() {
    return {
        sec_id: "DmyF",
        f32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bmg_demo_activator_108_4() {
    return {
        sec_id: "VzcU",
        u8_0: 0,
    };

}
function add_bmg_demo_activator_108_8() {
    return {
        sec_id: "3g?m",
        section_0: [],
    };

}
function add_bmg_demo_activator_108_8_0() {
    return {
        sec_id: "M?ZD",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_activator_108_8_0_4() {
    return {
        sec_id: "D6=0",
    };

}
function add_bmg_demo_activator_188() {
    return {
        sec_id: "]ozp",
    };

}
function add_bmg_demo_activator_220() {
    return {
        id: gen_id(),
        sec_id: "Rib8",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        section_8: [],
        f32_16: 0,
        f32_24: 0,
    };

}
function add_bmg_demo_activator_220_8() {
    return {
        sec_id: "25XZ",
        unordered_bmg_demo_flag_0: 0,
    };

}
function add_bmg_demo_activator_228() {
    return {
        sec_id: "264e",
        u8_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
    };

}
function add_bmg_demo_activator_228_4() {
    return {
        sec_id: "NGdp",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_bmg_demo_activator_228_12() {
    return {
        sec_id: "8H8=",
        section_4: [],
    };

}
function add_bmg_demo_activator_228_12_4() {
    return {
        sec_id: "<6Dq",
        u8_0: 0,
        u8_1: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_activator_228_20() {
    return {
        id: gen_id(),
        sec_id: "Qy1h",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        u8_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_activator_228_20_12() {
    return {
        sec_id: "^CJ9",
        u8_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_activator_236() {
    return {
        id: gen_id(),
        sec_id: "Svsm",
        u32_0: 0,
        section_4: [],
        section_8: ["Pac-Kart"],
        u32_12: 0,
        u32_16: 0,
        u8_24: 0,
        u32_28: 0,
        section_32: [],
    };

}
function add_bmg_demo_activator_236_4() {
    return {
        sec_id: "fT=6",
        u8_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_activator_236_4_4() {
    return {
        sec_id: "9>m>",
        u8_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_activator_236_32() {
    return {
        id: gen_id(),
        sec_id: "H;;^",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_8: [],
        section_16: [],
        f32_28: 0,
        u32_40: 0,
        f32_48: 0,
        f32_52: 0,
        u8_62: 0,
        f32_64: 0,
        f32_68: 0,
        u32_72: 0,
        section_76: [],
        u32_80: 0,
        section_84: [],
    };

}
function add_bmg_demo_activator_236_32_8() {
    return {
        sec_id: "cGTs",
        unordered_bmg_demo_model_link_0: 0,
    };

}
function add_bmg_demo_activator_236_32_16() {
    return {
        sec_id: "lSqL",
        u32_0: 0,
    };

}
function add_bmg_demo_activator_236_32_76() {
    return {
        id: gen_id(),
        sec_id: "oMAW",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: [],
    };

}
function add_bmg_demo_activator_236_32_76_12t0() {
    return {
        sec_id: "]CEB",
        u8_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_activator_236_32_76_12t8() {
    return {
        sec_id: "3XRv",
        u32_0: 0,
        unordered_bmg_demo_mysterious_4: 0,
    };

}
function add_bmg_demo_activator_236_32_76_12t23() {
    return {
        sec_id: "g]4K",
        u32_0: 0,
        unordered_bmg_demo_mysterious_4: 0,
    };

}
function add_bmg_demo_activator_236_32_84() {
    return {
        sec_id: "9kL5",
        u32_0: 0,
    };

}
function add_bmg_demo_activator_252() {
    return {
        sec_id: "RcKR",
        u32_0: 0,
        unordered_bmg_demo_mysterious_4: 0,
    };

}
function add_bmg_demo_event() {
    return {
        id: gen_id(),
        sec_id: "PWSR",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_event_12() {
    return {
        id: gen_id(),
        sec_id: "mPi7",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: [],
        u32_20: 0,
        u32_24: 0,
    };

}
function add_bmg_demo_event_12_12t2() {
    return {
        sec_id: "foOa",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_event_12_12t2_4() {
    return {
        sec_id: "NIl[",
        u8_1: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        u32_20: 0,
    };

}
function add_bmg_demo_event_12_12t5() {
    return {
        sec_id: "Mcru",
        section_0: [],
        u8_4: 0,
    };

}
function add_bmg_demo_event_12_12t5_0t1() {
    return {
        sec_id: "@pJ=",
        unordered_bmg_demo_interface_0: 0,
        u8_5: 0,
        section_8: [],
    };

}
function add_bmg_demo_event_12_12t5_0t1_8() {
    return {
        sec_id: "HApO",
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_event_12_12t5_0t1_8_12() {
    return {
        sec_id: "GLw3",
        u8_1: 0,
        u32_4: 0,
    };

}
function add_bmg_demo_event_12_12t5_0t2() {
    return {
        sec_id: "0Tx?",
        u8_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function add_bmg_demo_event_12_12t7() {
    return {
        sec_id: "hw>l",
        u8_0: 0,
        u8_1: 0,
        unordered_bmg_demo_flag_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_event_12_12t14() {
    return {
        sec_id: "K>L8",
        u32_0: 0,
    };

}
function add_bmg_demo_event_12_12t15() {
    return {
        sec_id: "6aWN",
        u32_4: 0,
    };

}
function add_bmg_demo_event_12_12t17() {
    return {
        sec_id: "mFLG",
        u32_0: 0,
    };

}
function add_bmg_demo_event_12_12t19() {
    return {
        sec_id: "T<pZ",
        u32_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
        u8_8: 0,
        u8_9: 0,
        f32_12: 0,
    };

}
function add_bmg_demo_event_12_12t23() {
    return {
        sec_id: ">Z:8",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function add_bmg_demo_flag() {
    return {
        id: gen_id(),
        sec_id: "Ii<L",
        u32_0: 0,
        section_8: ["Pac-Kart"],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        section_20: [],
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u32_28: 0,
        f32_32: 0,
        u8_44: 0,
    };

}
function add_bmg_demo_flag_20t0() {
    return {
        sec_id: "nyyF",
        u32_0: 0,
    };

}
function add_bmg_demo_flag_20t1() {
    return {
        sec_id: "mcZh",
    };

}
function add_bmg_demo_flag_20t2() {
    return {
        sec_id: "ahXp",
    };

}
function add_bmg_demo_flag_20t3() {
    return {
        sec_id: "[k3^",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_flag_20t8() {
    return {
        sec_id: "M:Th",
        unordered_bmg_demo_flag_0: 0,
    };

}
function add_bmg_demo_flag_20t9() {
    return {
        sec_id: "Z:PL",
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_flag_20t9_12() {
    return {
        sec_id: "Ea1X",
        f32_4: 0,
    };

}
function add_bmg_demo_flag_20t10() {
    return {
        sec_id: "@XQf",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_flag_20t10_4() {
    return {
        sec_id: "YT1S",
        u32_16: 0,
    };

}
function add_bmg_demo_font() {
    return {
        id: gen_id(),
        sec_id: ">NJK",
        texture_0: [0, 0, 0, 't'],
        unordered_bmg_demo_model_anim_3_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        f32_12: 0,
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_bmg_demo_font_20() {
    return {
        sec_id: ":AAO",
        f32_0: 0,
    };

}
function add_bmg_demo_font_28() {
    return {
        id: gen_id(),
        sec_id: "BfM^",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_idk() {
    return {
        id: gen_id(),
        sec_id: "mD;@",
        u8_0: 0,
        u8_1: 0,
        section_4: [],
        f32_12: 0,
        section_24: [],
        u32_52: 0,
        unordered_bmg_demo_mysterious_56: 0,
        u8_64: 0,
        u8_65: 0,
        u8_66: 0,
        u8_67: 0,
    };

}
function add_bmg_demo_idk_24() {
    return {
        sec_id: "MFNb",
        f32_4: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: 0,
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        unordered_bmg_demo_world_thing_40: 0,
        u8_44: 0,
        u8_45: 0,
        section_48: [],
        section_60: [],
    };

}
function add_bmg_demo_idk_24_48() {
    return {
        sec_id: "nX5W",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bmg_demo_idk_24_60() {
    return {
        sec_id: "CUh>",
        f32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bmg_demo_idk_24_60_4() {
    return {
        sec_id: "OUTT",
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bmg_demo_idk_24_60_8() {
    return {
        sec_id: "MhZ4",
        section_0: [],
    };

}
function add_bmg_demo_idk_24_60_8_0() {
    return {
        sec_id: "LUxg",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_idk_24_60_8_0_4() {
    return {
        sec_id: "qGK^",
    };

}
function add_bmg_demo_interface() {
    return {
        id: gen_id(),
        sec_id: "kgDb",
        section_0: ["Pac-Kart"],
        u8_5: 0,
        u8_7: 0,
        u32_8: 0,
        u8_12: 0,
        u8_13: 0,
        unordered_bmg_demo_sound_controls_16: 0,
        unordered_bmg_demo_sound_controls_20: 0,
        unordered_bmg_demo_sound_controls_28: 0,
        f32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        section_48: [],
        section_52: [],
        f32_60: 0,
        section_64: [],
        u32_68: 0,
        section_72: [],
        u32_76: 0,
        section_80: [],
    };

}
function add_bmg_demo_interface_48() {
    return {
        sec_id: "bbOk",
        f32_0: 0,
    };

}
function add_bmg_demo_interface_52() {
    return {
        sec_id: "PULi",
        section_0: [],
    };

}
function add_bmg_demo_interface_52_0() {
    return {
        sec_id: "nUas",
        u32_0: 0,
    };

}
function add_bmg_demo_interface_64() {
    return {
        sec_id: ":1Jf",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_64_4() {
    return {
        id: gen_id(),
        sec_id: "K83n",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_7: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        u32_24: 0,
        u8_32: 0,
        u8_33: 0,
    };

}
function add_bmg_demo_interface_64_4_12t1() {
    return {
        sec_id: "nwIY",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_64_4_12t1_4() {
    return {
        sec_id: "Xs?:",
        u8_12: 0,
        u32_16: 0,
    };

}
function add_bmg_demo_interface_64_4_12t5() {
    return {
        sec_id: "?e::",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_bmg_demo_interface_64_4_12t7() {
    return {
        sec_id: "aSsb",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_bmg_demo_interface_64_4_12t8() {
    return {
        sec_id: "NHow",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_64_4_12t8_4() {
    return {
        id: gen_id(),
        sec_id: "YIZ?",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
    };

}
function add_bmg_demo_interface_64_4_12t10() {
    return {
        sec_id: "lwc@",
        unordered_bmg_demo_flag_0: 0,
    };

}
function add_bmg_demo_interface_72() {
    return {
        id: gen_id(),
        sec_id: "Y<8@",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_bmg_demo_interface_72_4() {
    return {
        sec_id: "_;ZI",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        u32_12: 0,
    };

}
function add_bmg_demo_interface_72_16() {
    return {
        id: gen_id(),
        sec_id: "oL04",
        u8_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_72_16_4t2() {
    return {
        sec_id: "tvJ[",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        u32_12: 0,
    };

}
function add_bmg_demo_interface_72_16_4t3() {
    return {
        sec_id: "qv?T",
        u8_0: 0,
        u8_1: 0,
        section_4: ["Pac-Kart"],
    };

}
function add_bmg_demo_interface_72_24() {
    return {
        id: gen_id(),
        sec_id: "EtIN",
        u8_0: 0,
        section_4: [],
        section_12: [],
        unordered_bmg_demo_sound_controls_28: 0,
    };

}
function add_bmg_demo_interface_72_24_4t11() {
    return {
        sec_id: "qQUZ",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_72_24_4t11_4() {
    return {
        id: gen_id(),
        sec_id: "O1Y0",
        section_0: ["Pac-Kart"],
        u8_9: 0,
        section_12: [],
    };

}
function add_bmg_demo_interface_72_24_4t11_4_12t0() {
    return {
        sec_id: "k7ct",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u32_8: 0,
    };

}
function add_bmg_demo_interface_72_24_4t11_4_12t1() {
    return {
        sec_id: "GZKz",
        section_0: [],
        section_4: [],
    };

}
function add_bmg_demo_interface_72_24_4t11_4_12t1_0() {
    return {
        sec_id: ";4<O",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_72_24_4t11_4_12t1_0_4() {
    return {
        sec_id: "V5bd",
        u32_16: 0,
    };

}
function add_bmg_demo_interface_72_24_4t11_4_12t1_4() {
    return {
        sec_id: "N^^c",
    };

}
function add_bmg_demo_interface_72_24_12() {
    return {
        sec_id: "lm@3",
        section_0: [],
        section_4: [],
    };

}
function add_bmg_demo_interface_72_24_12_0() {
    return {
        sec_id: "MlOH",
    };

}
function add_bmg_demo_interface_72_24_12_4() {
    return {
        sec_id: "v82V",
        u32_16: 0,
    };

}
function add_bmg_demo_interface_80() {
    return {
        id: gen_id(),
        sec_id: "mzy?",
        section_0: ["Pac-Kart"],
        u8_8: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: [],
        section_16: ["Pac-Kart"],
        u32_20: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        section_32: [],
        section_36: [],
        section_40: [],
        f32_44: 0,
        f32_48: 0,
        section_52: [],
        u32_56: 0,
        u32_64: 0,
        section_68: [],
        u8_72: 0,
        u8_73: 0,
        u8_74: 0,
        u8_75: 0,
        u8_76: 0,
        u8_77: 0,
        u8_78: 0,
        u8_79: 0,
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
    };

}
function add_bmg_demo_interface_80_12() {
    return {
        sec_id: "qTe7",
        u8_0: 0,
    };

}
function add_bmg_demo_interface_80_32() {
    return {
        sec_id: "seO0",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_bmg_demo_interface_80_32_8() {
    return {
        id: gen_id(),
        sec_id: "B78f",
        u8_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_80_32_8_4() {
    return {
        sec_id: "mf[2",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
    };

}
function add_bmg_demo_interface_80_36t0() {
    return {
        sec_id: "dv^o",
        u8_0: 0,
        u8_1: 0,
        texture_4: [0, 0, 0, 't'],
        section_8: [],
        u8_12: 0,
        u8_13: 0,
    };

}
function add_bmg_demo_interface_80_36t0_8() {
    return {
        sec_id: "eiDd",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u8_16: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function add_bmg_demo_interface_80_36t0_8_4() {
    return {
        id: gen_id(),
        sec_id: "CfI=",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bmg_demo_interface_80_36t1() {
    return {
        sec_id: "5t@<",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        unordered_bmg_demo_text_4: 0,
        section_8: [],
        section_12: [],
        section_16: [],
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        f32_28: 0,
    };

}
function add_bmg_demo_interface_80_36t1_8t1() {
    return {
        sec_id: "fBV8",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_11: 0,
    };

}
function add_bmg_demo_interface_80_36t1_8t1_4() {
    return {
        id: gen_id(),
        sec_id: "z1fL",
        unordered_bmg_demo_text_0: 0,
    };

}
function add_bmg_demo_interface_80_36t1_8t3() {
    return {
        sec_id: "Y[0P",
    };

}
function add_bmg_demo_interface_80_36t1_8t4() {
    return {
        sec_id: "dp5R",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_80_36t1_8t4_4() {
    return {
        sec_id: "Ol^h",
        section_4: [],
    };

}
function add_bmg_demo_interface_80_36t1_8t4_4_4() {
    return {
        sec_id: "j]@5",
    };

}
function add_bmg_demo_interface_80_36t1_16() {
    return {
        sec_id: "qmc8",
    };

}
function add_bmg_demo_interface_80_36t6() {
    return {
        sec_id: "EKL9",
        unordered_bmg_demo_interface_0: 0,
        u8_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_interface_80_36t6_12() {
    return {
        sec_id: "s92_",
        u8_4: 0,
        u32_8: 0,
        u32_12: 0,
        u8_16: 0,
        u32_20: 0,
    };

}
function add_bmg_demo_interface_80_36t7() {
    return {
        sec_id: "t]yz",
        unordered_bmg_demo_interface_0: 0,
    };

}
function add_bmg_demo_interface_80_36t10() {
    return {
        sec_id: "2ana",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_bmg_demo_interface_80_36t12() {
    return {
        sec_id: "Qlx3",
    };

}
function add_bmg_demo_interface_80_36t13() {
    return {
        sec_id: "HczP",
        u8_1: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_interface_80_36t13_4() {
    return {
        sec_id: "?663",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
    };

}
function add_bmg_demo_interface_80_36t13_12() {
    return {
        sec_id: "Rsaj",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bmg_demo_interface_80_36t14() {
    return {
        sec_id: "^iox",
        u8_0: 0,
        u8_1: 0,
        section_4: [],
    };

}
function add_bmg_demo_interface_80_36t14_4() {
    return {
        sec_id: "dSo;",
        u8_2: 0,
        u8_8: 0,
    };

}
function add_bmg_demo_interface_80_36t15() {
    return {
        sec_id: "dQjw",
        section_0: [],
    };

}
function add_bmg_demo_interface_80_36t15_0() {
    return {
        sec_id: "GXNZ",
        f32_0: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_bmg_demo_interface_80_36t15_0_16() {
    return {
        sec_id: "?A6R",
        texture_0: [0, 0, 0, 't'],
        u8_4: 0,
        u32_8: 0,
        f32_28: 0,
        f32_36: 0,
        u32_40: 0,
        u32_44: 0,
        section_48: [],
        u32_52: 0,
        section_56: [],
    };

}
function add_bmg_demo_interface_80_36t15_0_16_48() {
    return {
        id: gen_id(),
        sec_id: "ZFdM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_interface_80_36t15_0_16_56() {
    return {
        id: gen_id(),
        sec_id: "=18X",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_interface_80_40() {
    return {
        sec_id: "BK]G",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        u32_44: 0,
    };

}
function add_bmg_demo_interface_80_40_36() {
    return {
        sec_id: "Avsl",
        u32_0: 0,
        u32_20: 0,
        section_24: [],
    };

}
function add_bmg_demo_interface_80_40_36_24() {
    return {
        sec_id: "^<tm",
        u8_0: 0,
    };

}
function add_bmg_demo_interface_80_52() {
    return {
        sec_id: "dRqc",
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
function add_bmg_demo_interface_80_52_4() {
    return {
        id: gen_id(),
        sec_id: "AdJp",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_interface_80_52_12() {
    return {
        sec_id: "KgwT",
        f32_0: 0,
        u8_17: 0,
    };

}
function add_bmg_demo_interface_80_52_20() {
    return {
        id: gen_id(),
        sec_id: "]RpX",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_interface_80_52_28() {
    return {
        id: gen_id(),
        sec_id: "fR6A",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_interface_80_52_36() {
    return {
        sec_id: "pUGQ",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_17: 0,
    };

}
function add_bmg_demo_interface_80_68() {
    return {
        id: gen_id(),
        sec_id: "<WW1",
        u8_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_bmg_demo_interface_80_68_4() {
    return {
        sec_id: "AFOv",
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
    };

}
function add_bmg_demo_interface_80_68_4_4() {
    return {
        id: gen_id(),
        sec_id: "TX6A",
        u8_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_interface_80_68_4_12() {
    return {
        id: gen_id(),
        sec_id: "zLRh",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_interface_80_68_4_20() {
    return {
        id: gen_id(),
        sec_id: "^Z^T",
        f32_0: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_interface_80_68_4_28() {
    return {
        id: gen_id(),
        sec_id: "Le=0",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_interface_80_68_4_36() {
    return {
        id: gen_id(),
        sec_id: "hP6U",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_interface_80_68_4_44() {
    return {
        sec_id: "ZOfD",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function add_bmg_demo_model_link() {
    return {
        id: gen_id(),
        sec_id: "5Y1W",
        u32_0: 0,
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
        unordered_bmg_demo_model_sub_link_12: 0,
        section_16: [],
        f32_20: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        section_28: [],
        section_32: [],
        section_48: [],
        u32_52: 0,
        unordered_bmg_demo_mysterious_56: 0,
    };

}
function add_bmg_demo_model_link_28() {
    return {
        sec_id: "AjF]",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_model_link_32() {
    return {
        sec_id: "=PwC",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_model_link_48() {
    return {
        sec_id: "YOo>",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bmg_demo_model_sub_link() {
    return {
        id: gen_id(),
        sec_id: "wTl>",
        section_0: [],
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
    };

}
function add_bmg_demo_model_sub_link_8() {
    return {
        id: gen_id(),
        sec_id: "0l52",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_bmg_demo_model_sub_link_16() {
    return {
        id: gen_id(),
        sec_id: "t[=T",
        model_0: [0, 0, 0, 'm'],
        u8_5: 0,
    };

}
function add_bmg_demo_multi_font() {
    return {
        id: gen_id(),
        sec_id: "jR]N",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_multi_font_4t0() {
    return {
        sec_id: "rus:",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bmg_demo_font_12: 0,
        f32_24: 0,
        unordered_bmg_demo_font_28: 0,
        unordered_bmg_demo_font_32: 0,
    };

}
function add_bmg_demo_multi_font_4t1() {
    return {
        sec_id: "GP]S",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bmg_demo_font_12: 0,
        unordered_bmg_demo_font_16: 0,
        unordered_bmg_demo_font_20: 0,
    };

}
function add_bmg_demo_something() {
    return {
        id: gen_id(),
        sec_id: "QpPx",
        u8_8: 0,
        u8_9: 0,
        u32_28: 0,
        u32_32: 0,
        u32_48: 0,
    };

}
function add_bmg_demo_sound_controls() {
    return {
        id: gen_id(),
        sec_id: "PxFV",
        u32_0: 0,
        u32_4: 0,
        u8_8: 0,
        u8_10: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_bmg_demo_sound_controls_16() {
    return {
        id: gen_id(),
        sec_id: "TDQy",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_9: 0,
        f32_12: 0,
    };

}
function add_bmg_demo_sound_controls_16_4() {
    return {
        id: gen_id(),
        sec_id: "ucN2",
        unordered_bmg_demo_sound_section_0: 0,
    };

}
function add_bmg_demo_sound_section() {
    return {
        id: gen_id(),
        sec_id: "CV4:",
        sound_0: [0, 0, 0, 's'],
        u8_9: 0,
        u8_10: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        section_24: [],
    };

}
function add_bmg_demo_sound_section_24() {
    return {
        sec_id: "z0CP",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
        u8_9: 0,
        f32_12: 0,
    };

}
function add_bmg_demo_strange() {
    return {
        id: gen_id(),
        sec_id: "hmvb",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        unordered_bmg_demo_sound_controls_28: 0,
        f32_32: 0,
    };

}
function add_bmg_demo_strange_4() {
    return {
        sec_id: "b689",
        unordered_bmg_demo_unknown_0: 0,
    };

}
function add_bmg_demo_text() {
    return {
        id: gen_id(),
        sec_id: "8Pyg",
        section_0: ["Pac-Kart"],
    };

}
function add_bmg_demo_unknown_thing() {
    return {
        id: gen_id(),
        sec_id: "^=9]",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: [],
        u8_20: 0,
        u8_21: 0,
        section_24: [],
    };

}
function add_bmg_demo_unknown_thing_16() {
    return {
        id: gen_id(),
        sec_id: "r1FF",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_unknown_thing_24t0() {
    return {
        sec_id: "GDjK",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_10: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: [],
        section_44: [],
        u8_60: 0,
        f32_64: 0,
    };

}
function add_bmg_demo_unknown_thing_24t0_4() {
    return {
        sec_id: "BR8h",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_bmg_demo_unknown_thing_24t0_32() {
    return {
        sec_id: "J:N;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_unknown_thing_24t0_44() {
    return {
        sec_id: "?7=8",
    };

}
function add_bmg_demo_unknown_thing_24t1() {
    return {
        sec_id: "oVpB",
        u32_0: 0,
        section_4: [],
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_40: 0,
        f32_44: 0,
        u32_48: 0,
        section_52: [],
        u32_56: 0,
        section_60: [],
        section_64: [],
        u32_68: 0,
        section_72: [],
    };

}
function add_bmg_demo_unknown_thing_24t1_4() {
    return {
        id: gen_id(),
        sec_id: "KlIx",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bmg_demo_unknown_thing_24t1_52() {
    return {
        id: gen_id(),
        sec_id: "3Bs?",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_unknown_thing_24t1_60() {
    return {
        id: gen_id(),
        sec_id: "oL?F",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_unknown_thing_24t1_64() {
    return {
        sec_id: "A[gL",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
        f32_12: 0,
    };

}
function add_bmg_demo_unknown_thing_24t1_72() {
    return {
        id: gen_id(),
        sec_id: "xcWI",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_unknown_thing_24t1_72_4() {
    return {
        id: gen_id(),
        sec_id: "wN5Z",
    };

}
function add_bmg_demo_unknown_thing_24t2() {
    return {
        sec_id: "]a9E",
        u32_0: 0,
        section_4: [],
        f32_8: 0,
        u32_16: 0,
        section_20: [],
        u8_24: 0,
    };

}
function add_bmg_demo_unknown_thing_24t2_4() {
    return {
        sec_id: "ud0<",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
    };

}
function add_bmg_demo_unknown_thing_24t2_20() {
    return {
        sec_id: "FxZP",
        f32_0: 0,
    };

}
function add_bmg_demo_unknown() {
    return {
        id: gen_id(),
        sec_id: "2sj4",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_unknown_4() {
    return {
        id: gen_id(),
        sec_id: "q1x9",
        u32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bmg_demo_unknown_4_4t5() {
    return {
        sec_id: "qXiv",
        section_0: [],
        u8_6: 0,
        u8_7: 0,
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        u32_36: 0,
        section_40: [],
        u8_44: 0,
        u8_45: 0,
    };

}
function add_bmg_demo_unknown_4_4t5_0() {
    return {
        sec_id: "gaN7",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
    };

}
function add_bmg_demo_unknown_4_4t5_24() {
    return {
        sec_id: "fEf9",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_unknown_4_4t5_24_4() {
    return {
        sec_id: "rbdy",
        f32_12: 0,
        f32_20: 0,
        u8_28: 0,
        f32_32: 0,
    };

}
function add_bmg_demo_unknown_4_4t5_32() {
    return {
        sec_id: "W<m]",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_unknown_4_4t5_32_4() {
    return {
        sec_id: "IlPm",
        section_0: [],
    };

}
function add_bmg_demo_unknown_4_4t5_32_4_0() {
    return {
        sec_id: "Edvd",
        u8_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_unknown_4_4t5_32_4_0_4() {
    return {
        sec_id: "H4:a",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function add_bmg_demo_unknown_4_4t5_40() {
    return {
        sec_id: "D:g2",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_unknown_4_8t1() {
    return {
        sec_id: "Bhe_",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        u8_40: 0,
        u8_42: 0,
        section_48: [],
        section_52: [],
    };

}
function add_bmg_demo_unknown_4_8t1_48() {
    return {
        sec_id: "PMSx",
        f32_0: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_unknown_4_8t1_52() {
    return {
        sec_id: "rjK;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_unknown_4_8t5() {
    return {
        sec_id: "rW=z",
    };

}
function add_bmg_demo_unknown_4_8t9() {
    return {
        sec_id: "k8IO",
    };

}
function add_bmg_demo_unknown_4_8t26() {
    return {
        sec_id: "dFdS",
    };

}
function add_bmg_demo_var() {
    return {
        id: gen_id(),
        sec_id: "g_8V",
        section_148: ["Pac-Kart"],
        u32_152: 0,
        section_156: [],
        u32_164: 0,
        section_168: [],
    };

}
function add_bmg_demo_var_156() {
    return {
        sec_id: "qkSo",
        unordered_bmg_demo_var_0: 0,
    };

}
function add_bmg_demo_var_168() {
    return {
        id: gen_id(),
        sec_id: "Ae6A",
        section_8: ["Pac-Kart"],
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_bmg_demo_var_168_16() {
    return {
        id: gen_id(),
        sec_id: "]2pK",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: [],
        section_16: [],
    };

}
function add_bmg_demo_var_168_16_12t7() {
    return {
        sec_id: "ec4E",
    };

}
function add_bmg_demo_var_168_16_12t8() {
    return {
        sec_id: "r:h4",
        u8_0: 0,
        unordered_bmg_demo_world_20_8: 0,
    };

}
function add_bmg_demo_var_168_16_12t12() {
    return {
        sec_id: "HL[>",
        u8_0: 0,
        u8_1: 0,
        section_4: [],
        f32_8: 0,
    };

}
function add_bmg_demo_var_168_16_12t12_4t7() {
    return {
        sec_id: "@V<m",
        u8_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_var_168_16_12t12_4t7_12() {
    return {
        sec_id: "125X",
        u8_0: 0,
    };

}
function add_bmg_demo_var_168_16_12t15() {
    return {
        sec_id: "K?S:",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_var_168_16_12t15_4() {
    return {
        id: gen_id(),
        sec_id: "kGe8",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: [],
        section_16: [],
    };

}
function add_bmg_demo_var_168_16_12t15_4_12t5() {
    return {
        sec_id: "vH;a",
        u8_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_var_168_16_12t15_4_12t5_4() {
    return {
        sec_id: "PRDe",
        u32_0: 0,
    };

}
function add_bmg_demo_var_168_16_12t15_4_16() {
    return {
        sec_id: "Q2>W",
    };

}
function add_bmg_demo_var_168_16_12t18() {
    return {
        sec_id: "HJ]e",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_var_168_16_12t18_0() {
    return {
        sec_id: "APtz",
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function add_bmg_demo_var_168_16_12t25() {
    return {
        sec_id: "PE9v",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
        f32_16: 0,
    };

}
function add_bmg_demo_var_168_16_16() {
    return {
        sec_id: "cI:@",
    };

}
function add_bmg_demo_var_168_24() {
    return {
        id: gen_id(),
        sec_id: "Of]Y",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: [],
        u32_20: 0,
        u32_24: 0,
    };

}
function add_bmg_demo_var_168_24_12t2() {
    return {
        sec_id: "4dQo",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_var_168_24_12t2_4t1() {
    return {
        sec_id: "6YFB",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        unordered_bmg_demo_world_84_4: 0,
        f32_8: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        unordered_bmg_demo_extended_world_link_20: 0,
        u32_24: 0,
        f32_28: 0,
    };

}
function add_bmg_demo_var_168_24_12t2_4t4() {
    return {
        sec_id: "YGhq",
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
    };

}
function add_bmg_demo_var_168_24_12t2_4t5() {
    return {
        sec_id: "tzHh",
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
    };

}
function add_bmg_demo_var_168_24_12t2_4t7() {
    return {
        sec_id: "yBUE",
        u8_2: 0,
        u32_12: 0,
    };

}
function add_bmg_demo_var_168_24_12t2_4t11() {
    return {
        sec_id: "H>MT",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        u32_20: 0,
        f32_40: 0,
    };

}
function add_bmg_demo_var_168_24_12t2_4t12() {
    return {
        sec_id: "_b3V",
        u8_2: 0,
        section_16: [],
    };

}
function add_bmg_demo_var_168_24_12t2_4t12_16() {
    return {
        sec_id: "7GXa",
        u32_0: 0,
        u32_4: 0,
        u8_8: 0,
    };

}
function add_bmg_demo_var_168_24_12t2_4t17() {
    return {
        sec_id: "V6:C",
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        u8_53: 0,
    };

}
function add_bmg_demo_var_168_24_12t5() {
    return {
        sec_id: "h>O]",
        section_0: [],
        u8_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t5_0t1() {
    return {
        sec_id: "cnZN",
        unordered_bmg_demo_interface_0: 0,
        u8_5: 0,
        section_8: [],
    };

}
function add_bmg_demo_var_168_24_12t5_0t1_8() {
    return {
        sec_id: "4Q:z",
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_var_168_24_12t5_0t1_8_12() {
    return {
        sec_id: "7rWd",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u32_12: 0,
    };

}
function add_bmg_demo_var_168_24_12t5_0t2() {
    return {
        sec_id: "g=If",
        u8_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t7() {
    return {
        sec_id: "c;^7",
        u8_0: 0,
        u8_1: 0,
        section_4: [],
        f32_8: 0,
    };

}
function add_bmg_demo_var_168_24_12t7_4t7() {
    return {
        sec_id: "QwrS",
        u32_8: 0,
        section_12: [],
    };

}
function add_bmg_demo_var_168_24_12t7_4t7_12() {
    return {
        sec_id: "qX3A",
    };

}
function add_bmg_demo_var_168_24_12t14() {
    return {
        sec_id: "xkBV",
        u32_0: 0,
    };

}
function add_bmg_demo_var_168_24_12t15() {
    return {
        sec_id: "b;HD",
        unordered_bmg_demo_var_0: 0,
        u32_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t17() {
    return {
        sec_id: "xpA_",
        u32_0: 0,
    };

}
function add_bmg_demo_var_168_24_12t18() {
    return {
        sec_id: "tPSa",
        unordered_bmg_demo_something_4: 0,
        section_8: [],
        u32_16: 0,
    };

}
function add_bmg_demo_var_168_24_12t18_8() {
    return {
        sec_id: "E[DU",
    };

}
function add_bmg_demo_var_168_24_12t23() {
    return {
        sec_id: "^pw2",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t33() {
    return {
        sec_id: "QXg:",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_var_168_24_12t33_4() {
    return {
        sec_id: "7EKG",
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
    };

}
function add_bmg_demo_var_168_24_12t33_4_16() {
    return {
        sec_id: "Gf9@",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: [],
        section_16: [],
    };

}
function add_bmg_demo_var_168_24_12t33_4_16_12() {
    return {
        sec_id: "3Z8?",
        u8_0: 0,
        u8_1: 0,
        unordered_bmg_demo_flag_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_16_16() {
    return {
        sec_id: "Xn?5",
    };

}
function add_bmg_demo_var_168_24_12t33_4_24() {
    return {
        id: gen_id(),
        sec_id: "?7o8",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u32_8: 0,
        section_12: [],
        u32_20: 0,
        u32_24: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_24_12t7() {
    return {
        sec_id: ":dW?",
        u8_0: 0,
        u8_1: 0,
        unordered_bmg_demo_flag_4: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_24_12t15() {
    return {
        sec_id: "RfLW",
        u32_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_24_12t23() {
    return {
        sec_id: "6]HU",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_32() {
    return {
        id: gen_id(),
        sec_id: "c_=b",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u32_8: 0,
        section_12: [],
        u32_20: 0,
        u32_24: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_32_12t5() {
    return {
        sec_id: "COk4",
        section_0: [],
        u8_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_32_12t5_0() {
    return {
        sec_id: "SvcM",
        u8_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_32_12t15() {
    return {
        sec_id: "L4Wv",
        u32_4: 0,
    };

}
function add_bmg_demo_var_168_24_12t33_4_32_12t23() {
    return {
        sec_id: "XjwE",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function add_bmg_demo_world_thing() {
    return {
        id: gen_id(),
        sec_id: ">;Xp",
        u32_0: 0,
        u32_4: 0,
        f32_12: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        f32_44: 0,
        section_48: [],
        f32_52: 0,
        f32_60: 0,
        f32_68: 0,
        f32_80: 0,
        f32_84: 0,
        section_88: [],
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
    };

}
function add_bmg_demo_extended_world_link() {
    return {
        id: gen_id(),
        sec_id: "nU2K",
        section_0: [],
        u8_4: 0,
        u8_7: 0,
        u8_8: 0,
        f32_24: 0,
    };

}
function add_bmg_demo_link() {
    return {
        id: gen_id(),
        sec_id: "nKTe",
        u8_8: 0,
        section_12: [],
        section_20: [],
        section_24: ["Pac-Kart"],
        u32_28: 0,
        section_32: ["Pac-Kart"],
        u32_36: 0,
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        section_52: [],
        section_56: [],
        u32_72: u32(o + 72),
        //check this
    };

}
function add_bmg_demo_link_12() {
    return {
        sec_id: "c85^",
    };

}
function add_bmg_demo_link_20() {
    return {
        sec_id: ">JpY",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_link_20_4() {
    return {
        id: gen_id(),
        sec_id: "hQuD",
        unordered_bmg_demo_flag_0: 0,
    };

}
function add_bmg_demo_link_44() {
    return {
        sec_id: "KAPY",
        u8_0: 0,
        section_12: [],
    };

}
function add_bmg_demo_link_44_12() {
    return {
        sec_id: "UB1w",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bmg_demo_link_52() {
    return {
        sec_id: "MUW6",
        section_0: [],
    };

}
function add_bmg_demo_link_52_0() {
    return {
        sec_id: "C@Z0",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_link_52_0_4() {
    return {
        id: gen_id(),
        sec_id: "Jfcq",
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
function add_bmg_demo_link_52_0_4_4() {
    return {
        id: gen_id(),
        sec_id: "e3G2",
        u8_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bmg_demo_link_52_0_4_4_4t1() {
    return {
        sec_id: "Q?GH",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bmg_demo_link_52_0_4_4_8() {
    return {
        sec_id: "qQP>",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_bmg_demo_link_52_0_4_8() {
    return {
        sec_id: "v7=R",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bmg_demo_link_52_0_4_20() {
    return {
        sec_id: "_<q1",
        u32_0: 0,
        section_4: [],
        u8_9: 0,
    };

}
function add_bmg_demo_link_52_0_4_20_4() {
    return {
        sec_id: "3Xzp",
        u8_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_link_52_0_4_20_4_4() {
    return {
        sec_id: "7?De",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bmg_demo_link_52_0_4_28() {
    return {
        sec_id: "NoF1",
        u8_9: 0,
    };

}
function add_bmg_demo_link_56() {
    return {
        sec_id: "T[48",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_bmg_demo_link_56_8() {
    return {
        sec_id: "EeHt",
    };

}
function add_bmg_demo_mysterious() {
    return {
        id: gen_id(),
        sec_id: "4kfB",
        u8_0: 0,
        u8_3: 0,
        section_4: [],
        section_8: [],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
    };

}
function add_bmg_demo_mysterious_4t5() {
    return {
        sec_id: "T_9f",
        u8_3: 0,
        u32_12: 0,
        section_16: [],
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        section_52: [],
        section_56: [],
    };

}
function add_bmg_demo_mysterious_4t5_16t0() {
    return {
        sec_id: "YQ2o",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_bmg_demo_mysterious_4t5_16t2() {
    return {
        sec_id: "UZlh",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bmg_demo_mysterious_4t5_36() {
    return {
        sec_id: "Gemm",
    };

}
function add_bmg_demo_mysterious_4t5_44() {
    return {
        id: gen_id(),
        sec_id: "IbM=",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bmg_demo_mysterious_4t5_52() {
    return {
        id: gen_id(),
        sec_id: "t4Zr",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_bmg_demo_mysterious_4t5_56() {
    return {
        sec_id: "6s@3",
        f32_8: 0,
        f32_16: 0,
    };

}
function add_bmg_demo_mysterious_8() {
    return {
        sec_id: "n2Dn",
        u8_0: 0,
    };

}
function add_bmg_demo_world_link_type() {
    return {
        id: gen_id(),
        sec_id: "==?G",
        section_0: [],
        u8_4: 0,
    };

}
function add_bmg_demo_world_link_type_0() {
    return {
        sec_id: "cfjA",
        unordered_bmg_demo_model_sub_link_12: 0,
        u32_16: 0,
        section_20: [],
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        section_56: [],
        u32_60: 0,
        f32_84: 0,
        u32_88: 0,
    };

}
function add_bmg_demo_world_link_type_0_20() {
    return {
        id: gen_id(),
        sec_id: "7IWl",
        section_4: [],
    };

}
function add_bmg_demo_world_link_type_0_20_4() {
    return {
        sec_id: "_g^g",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_world_link_type_0_20_4_4() {
    return {
        id: gen_id(),
        sec_id: "3rAJ",
        unordered_bmg_demo_model_link_0: 0,
    };

}
function add_bmg_demo_world_link_type_0_56() {
    return {
        sec_id: "3kaU",
        u32_0: 0,
        section_4: [],
    };

}
function add_bmg_demo_world_link_type_0_56_4() {
    return {
        sec_id: "<v4O",
    };

}
function add_bmg_demo_world_settings() {
    return {
        id: gen_id(),
        sec_id: "QaV]",
        section_0: [],
        section_4: [],
        f32_8: 0,
        f32_12: 0,
        u8_33: 0,
        u32_52: 0,
        section_56: [],
        section_60: [],
        texture_68: [0, 0, 0, 't'],
        texture_72: [0, 0, 0, 't'],
        texture_76: [0, 0, 0, 't'],
        f32_80: 0,
        f32_84: 0,
        section_88: [],
        f32_92: 0,
        f32_96: 0,
        section_100: [],
        u32_104: 0,
        section_108: [],
        f32_120: 0,
        f32_124: 0,
        f32_128: 0,
        f32_132: 0,
        u8_137: 0,
        f32_140: 0,
        texture_144: [0, 0, 0, 't'],
        f32_148: 0,
        f32_152: 0,
        f32_156: 0,
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        unordered_bmg_demo_font_176: 0,
    };

}
function add_bmg_demo_world_settings_0() {
    return {
        sec_id: "j[CS",
        unordered_bmg_demo_interface_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function add_bmg_demo_world_settings_4() {
    return {
        sec_id: "Mu^w",
        unordered_bmg_demo_interface_0: 0,
        f32_12: 0,
        u8_20: 0,
        f32_24: 0,
    };

}
function add_bmg_demo_world_settings_56() {
    return {
        id: gen_id(),
        sec_id: "sfsX",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
    };

}
function add_bmg_demo_world_settings_60() {
    return {
        sec_id: "]Nkf",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_world_settings_88() {
    return {
        sec_id: "SM65",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_bmg_demo_world_settings_100() {
    return {
        sec_id: "jMbQ",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bmg_demo_world_settings_108() {
    return {
        id: gen_id(),
        sec_id: "Qkx]",
        section_0: ["Pac-Kart"],
    };

}

function add_bmg_demo_texture_anim_0() {
    return {
        id: gen_id(),
        sec_id: "tWK>",
        section_4: [],
        u32_16: 0,
        section_20: [],
    };

}
function add_bmg_demo_texture_anim_0_4() {
    return {
        sec_id: "_fbe",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u32_20: 0,
    };

}
function add_bmg_demo_texture_anim_0_4_4() {
    return {
        sec_id: "EtH5",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bmg_demo_texture_anim_0_20() {
    return {
        id: gen_id(),
        sec_id: "cyYC",
        f32_4: 0,
        u8_9: 0,
        f32_12: 0,
    };

}

function add_bmg_demo_model_anim_1_type_a() {
    return {
        id: gen_id(),
        sec_id: "fed9",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        u32_20: 0,
        section_24: [],
        section_28: [],
        section_32: [],
        section_36: [],
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        section_52: [],
        u32_56: 0,
        u32_60: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_24() {
    return {
        sec_id: "e6Dh",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_28() {
    return {
        sec_id: "ZOf5",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_32() {
    return {
        id: gen_id(),
        sec_id: "2k[k",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_36() {
    return {
        sec_id: "JeUR",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_52() {
    return {
        sec_id: "yToO",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: [],
        section_16: [],
        section_20: [],
        section_24: [],
        section_28: [],
        section_32: [],
    };

}
function add_bmg_demo_model_anim_1_type_a_52_12() {
    return {
        id: gen_id(),
        sec_id: "]H0t",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_52_16() {
    return {
        id: gen_id(),
        sec_id: "Rkkl",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_52_20() {
    return {
        id: gen_id(),
        sec_id: "=Kkb",
        u8_1: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_52_24() {
    return {
        id: gen_id(),
        sec_id: "34M?",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_52_28() {
    return {
        sec_id: "cbDb",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_a_52_32() {
    return {
        sec_id: "]ZtJ",
        f32_0: 0,
    };

}

function add_bmg_demo_model_anim_1_type_b() {
    return {
        id: gen_id(),
        sec_id: "n3ay",
        u32_0: 0,
        u8_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u32_16: 0,
        f32_20: 0,
        f32_24: 0,
        section_32: [],
        section_36: [],
    };

}
function add_bmg_demo_model_anim_1_type_b_32() {
    return {
        id: gen_id(),
        sec_id: "bJzj",
        section_0: ["Pac-Kart"],
    };

}
function add_bmg_demo_model_anim_1_type_b_36() {
    return {
        sec_id: "GaI0",
        section_0: [],
    };

}
function add_bmg_demo_model_anim_1_type_b_36t0() {
    return {
        sec_id: "ktsB",
        u8_1: 0,
        section_4: [],
        f32_8: 0,
    };

}
function add_bmg_demo_model_anim_1_type_b_36t3() {
    return {
        sec_id: "kf_D",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        section_4: [],
        section_8: [],
        f32_12: 0,
    };

}
function add_bmg_demo_model_anim_1_type_b_36t3_8() {
    return {
        id: gen_id(),
        sec_id: "5c1m",
        f32_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_b_36t5() {
    return {
        sec_id: "q3mS",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        section_4: [],
        f32_8: 0,
        f32_12: 0,
        section_16: [],
        f32_20: 0,
    };

}
function add_bmg_demo_model_anim_1_type_b_36t5_16() {
    return {
        id: gen_id(),
        sec_id: "uP2S",
        u8_0: 0,
    };

}
function add_bmg_demo_model_anim_1_type_b_36t6() {
    return {
        sec_id: "3l7b",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        section_4: [],
        f32_8: 0,
    };

}

function add_bmg_demo_model_anim_2_type_a() {
    return {
        id: gen_id(),
        sec_id: "Ca2a",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_16: [],
    };

}
function add_bmg_demo_model_anim_2_type_a_16() {
    return {
        id: gen_id(),
        sec_id: "Ix:y",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
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

function add_bmg_demo_model_anim_2_type_b() {
    return {
        id: gen_id(),
        sec_id: "B5or",
        u32_0: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_16: [],
        section_20: [],
    };

}
function add_bmg_demo_model_anim_2_type_b_16() {
    return {
        sec_id: "xLsQ",
    };

}
function add_bmg_demo_model_anim_2_type_b_20() {
    return {
        sec_id: "wh<4",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        u32_36: 0,
        section_40: [],
    };

}
function add_bmg_demo_model_anim_2_type_b_20_40() {
    return {
        id: gen_id(),
        sec_id: "L26x",
        section_0: [],
    };

}

/* end add list */
/////////////////////
/* start info list */

function info_bmg_demo_file_header() {
    return {
        sec_id: "5S25",
        u32_00: 0,
        u32_04: 0,
        u32_08: 0,
        section_12: ["^RrX"],
    };

}
function info_bmg_demo_directory() {
    return {
        sec_id: "^RrX",
        u32_0: 0,
        u32_4: u32(o + 4),
        //check this
        u32_8: 0,
        u32_16: {
            a: null
        },
        section_20: ["null"],
    };

}

function info_bmg_demo_datapack() {
    return {
        sec_id: "4akv",
        u32_0: 0,
        u32_4: 0,
        u32_8: {
            a: null
        },
        u32_12: {
            a: null
        },
        u32_16: {
            a: null
        },
        u32_20: 0,
        u32_24: 0,
        u32_28: {
            a: null
        },
        u32_32: {
            a: null
        },
        u32_48: {
            a: null
        },
        u32_52: {
            a: null
        },
        model_56: "model_patch",
        section_60: ["change this"],
        u32_80: {
            a: null
        },
        u32_84: 0,
        u32_88: 0,
        u32_92: 0,
        u32_96: 0,
        u32_100: 0,
        u32_104: 0,
        section_108: ["change this"],
        u32_124: 0,
        u32_144: 0,
    };

}

function info_bmg_demo_basic_audio() {
    return {
        sec_id: "XH?<",
        section_0: ["11Hn"],
    };

}
function info_bmg_demo_basic_audio_0() {
    return {
        sec_id: "11Hn",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_bmg_demo_basic_audio_0_0() {
    return {
        sec_id: "Ry[O",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        u32_52: 0,
        u32_56: 0,
        u32_60: 0,
        u32_68: 0,
        u32_72: 0,
    };

}

function info_bmg_demo_basic() {
    return {
        sec_id: "7ivv",
        u32_0: 0,
        section_4: ["vdfC"],
    };

}
function info_bmg_demo_basic_4() {
    return {
        sec_id: "vdfC",
        section_0: ["change this"],
        u32_4: 0,
    };

}

function info_bmg_demo_texture_anim() {
    return {
        sec_id: "dOo9",
        section_0: ["change this"],
    };

}

function info_bmg_demo_datapack_108() {
    return {
        sec_id: "CThc",
        section_4: ["change this"],
    };

}

function info_bmg_demo_world() {
    return {
        sec_id: "F[:U",
        section_0: ["n0@1"],
        unordered_bmg_demo_world_4_4: 0,
        u32_8: {
            a: null
        },
        unordered_bmg_demo_world_12_12: 0,
        u32_16: {
            a: null
        },
        unordered_bmg_demo_world_20_20: 0,
        u32_24: {
            a: null
        },
        unordered_bmg_demo_world_28_28: 0,
        u32_64: {
            a: null
        },
        unordered_bmg_demo_world_68_68: 0,
        u32_80: {
            a: null
        },
        unordered_bmg_demo_world_84_84: 0,
        u32_88: {
            a: null
        },
        unordered_bmg_demo_world_92_92: 0,
        u32_112: {
            a: null
        },
        unordered_bmg_demo_world_116_116: 0,
        unordered_bmg_demo_world_120_120: 0,
        unordered_bmg_demo_world_settings_172: 0,
        unordered_bmg_demo_world_176_176: 0,
        u32_204: 0,
        unordered_bmg_demo_world_208_208: 0,
        u8_240: 0,
        u8_241: 0,
        u8_242: 0,
        u8_243: 0,
        u32_244: 0,
        u32_248: 0,
        u32_256: 0,
        u8_260: 0,
        u8_261: 0,
        u8_262: 0,
        u8_263: 0,
        u8_264: 0,
        u8_265: 0,
        u8_266: 0,
        u8_267: 0,
        u32_272: 0,
        u8_276: 0,
        u8_277: 0,
        u8_278: 0,
        u8_279: 0,
        u32_280: 0,
        u8_284: 0,
        u8_285: 0,
        u8_286: 0,
        u8_287: 0,
        u8_288: 0,
        u8_289: 0,
        u8_290: 0,
        u32_292: 0,
        u8_296: 0,
        u8_297: 0,
        u8_298: 0,
        u8_299: 0,
        u32_300: 0,
    };

}
function info_bmg_demo_world_0() {
    return {
        sec_id: "n0@1",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        section_32: ["HX1h"],
        u32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u32_52: {
            a: null
        },
        u32_56: {
            a: null
        },
        u32_60: {
            a: null
        },
        section_64: ["hANj"],
        u32_68: 0,
        section_76: ["hANj"],
    };

}
function info_bmg_demo_world_0_64() {
    return {
        sec_id: "hANj",
    };

}
function info_bmg_demo_world_0_32() {
    return {
        sec_id: "HX1h",
    };

}
function info_bmg_demo_world_12() {
    return {
        sec_id: ";Hza",
        u32_0: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_44: 0,
        unordered_bmg_demo_world_link_type_60: 0,
        u8_64: 0,
        u8_65: 0,
        u8_66: 0,
        u8_67: 0,
        u8_70: 0,
        u8_71: 0,
        f32_72: 0,
        f32_76: 0,
        u8_110: 0,
        u8_111: 0,
        u8_114: 0,
        u32_120: 0,
        u32_124: 0,
        u32_132: 0,
    };

}
function info_bmg_demo_world_20() {
    return {
        sec_id: "l7_m",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_14: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_60: 0,
        section_64: ["change this"],
        f32_68: 0,
        section_72: ["change this"],
        section_76: ["change this"],
        u8_82: 0,
        f32_84: 0,
    };

}
function info_bmg_demo_world_92() {
    return {
        sec_id: "86I_",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_32: 0,
        f32_36: 0,
        f32_44: 0,
        f32_52: 0,
        f32_60: 0,
        section_64: ["change this"],
        f32_68: 0,
    };

}
function info_bmg_demo_world_116() {
    return {
        sec_id: "XYmu",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_32: 0,
        f32_52: 0,
        f32_72: 0,
        f32_92: 0,
        model_100: "model_patch",
    };

}
function info_bmg_demo_world_28() {
    return {
        sec_id: "]JOR",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        u32_40: {
            a: null
        },
        u32_52: 0,
        section_56: ["oZ7E"],
        u32_60: {
            a: null
        },
        section_64: ["0F]x"],
        section_72: ["<>FE"],
        section_76: ["q6g]"],
        u8_84: 0,
        u8_85: 0,
        u8_86: 0,
        u8_87: 0,
    };

}
function info_bmg_demo_world_28_76() {
    return {
        sec_id: "q6g]",
        u32_4: {
            a: null
        },
        section_8: ["c_qs"],
    };

}
function info_bmg_demo_world_28_72() {
    return {
        sec_id: "<>FE",
        section_0: ["d;;J"],
    };

}
function info_bmg_demo_world_28_72_0() {
    return {
        sec_id: "d;;J",
        unordered_bmg_demo_world_116_0: 0,
    };

}
function info_bmg_demo_world_28_64() {
    return {
        sec_id: "0F]x",
        u8_2: 0,
        u8_3: 0,
    };

}
function info_bmg_demo_world_28_56() {
    return {
        sec_id: "oZ7E",
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
function info_bmg_demo_world_28_76_8() {
    return {
        sec_id: "c_qs",
        unordered_bmg_demo_world_92_0: 0,
    };

}
function info_bmg_demo_world_68() {
    return {
        sec_id: "=oJn",
        u32_0: 0,
        u16_4: 0,
        u16_6: 0,
        u16_14: 0,
        u16_18: 0,
        f32_44: 0,
        f32_52: 0,
        f32_60: 0,
        section_64: ["change this"],
        f32_68: 0,
        f32_72: 0,
        u32_80: 0,
        u32_84: 0,
    };

}
function info_bmg_demo_world_84() {
    return {
        sec_id: "VUgJ",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_16: 0,
        u16_18: 0,
        f32_44: 0,
        u32_60: 0,
        section_64: ["change this"],
    };

}
function info_bmg_demo_world_4() {
    return {
        sec_id: "fF;x",
        section_16: ["0tcr"],
        unordered_bmg_demo_world_4_20: 0,
        u32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_48: 0,
    };

}
function info_bmg_demo_world_4_16() {
    return {
        sec_id: "0tcr",
    };

}
function info_bmg_demo_world_120() {
    return {
        sec_id: "o7cm",
    };

}
function info_bmg_demo_world_208() {
    return {
        sec_id: "3Ld8",
        unordered_bmg_demo_world_thing_0: 0,
    };

}
function info_bmg_demo_world_176() {
    return {
        sec_id: "aLv<",
        u32_0: {
            a: null
        },
        section_4: ["m<qQ"],
        u32_8: {
            a: null
        },
        section_12: ["3T@A"],
        u32_16: {
            a: null
        },
        section_20: ["meiW"],
        u32_24: {
            a: null
        },
        section_28: ["EhAl"],
    };

}
function info_bmg_demo_world_176_4() {
    return {
        sec_id: "m<qQ",
        unordered_bmg_demo_flag_0: 0,
    };

}
function info_bmg_demo_world_176_12() {
    return {
        sec_id: "3T@A",
        unordered_bmg_demo_var_0: 0,
    };

}
function info_bmg_demo_world_176_20() {
    return {
        sec_id: "meiW",
        unordered_bmg_demo_something_0: 0,
    };

}
function info_bmg_demo_world_176_28() {
    return {
        sec_id: "EhAl",
        unordered_bmg_demo_flag_0: 0,
    };

}
function info_bmg_demo_activator() {
    return {
        sec_id: "JGGu",
        section_0: ["Pac-Kart"],
        unordered_bmg_demo_model_anim_2_type_a_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        f32_16: 0,
        f32_24: 0,
        section_28: ["CRap"],
        f32_32: 0,
        u32_36: 0,
        section_108: ["DmyF"],
        u32_120: 0,
        u32_148: 0,
        u8_158: 0,
        u8_180: 0,
        f32_184: 0,
        section_188: ["]ozp"],
        u32_216: {
            a: null
        },
        section_220: ["Rib8"],
        u32_224: 0,
        section_228: ["264e"],
        u32_232: {
            a: null
        },
        section_236: ["Svsm"],
        u32_248: 0,
        section_252: ["RcKR"],
    };

}
function info_bmg_demo_activator_28() {
    return {
        sec_id: "CRap",
        f32_8: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bmg_demo_activator_108() {
    return {
        sec_id: "DmyF",
        f32_0: 0,
        section_4: ["VzcU"],
        section_8: ["3g?m"],
    };

}
function info_bmg_demo_activator_108_4() {
    return {
        sec_id: "VzcU",
        u8_0: 0,
    };

}
function info_bmg_demo_activator_108_8() {
    return {
        sec_id: "3g?m",
        section_0: ["M?ZD"],
    };

}
function info_bmg_demo_activator_108_8_0() {
    return {
        sec_id: "M?ZD",
        u32_0: 0,
        section_4: ["D6=0"],
    };

}
function info_bmg_demo_activator_108_8_0_4() {
    return {
        sec_id: "D6=0",
    };

}
function info_bmg_demo_activator_188() {
    return {
        sec_id: "]ozp",
    };

}
function info_bmg_demo_activator_220() {
    return {
        sec_id: "Rib8",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        section_8: ["25XZ"],
        f32_16: 0,
        f32_24: 0,
    };

}
function info_bmg_demo_activator_220_8() {
    return {
        sec_id: "25XZ",
        unordered_bmg_demo_flag_0: 0,
    };

}
function info_bmg_demo_activator_228() {
    return {
        sec_id: "264e",
        u8_0: 0,
        section_4: ["NGdp"],
        u32_8: 0,
        section_12: ["8H8="],
        u32_16: {
            a: null
        },
        section_20: ["Qy1h"],
    };

}
function info_bmg_demo_activator_228_4() {
    return {
        sec_id: "NGdp",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_bmg_demo_activator_228_12() {
    return {
        sec_id: "8H8=",
        section_4: ["<6Dq"],
    };

}
function info_bmg_demo_activator_228_12_4() {
    return {
        sec_id: "<6Dq",
        u8_0: 0,
        u8_1: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_activator_228_20() {
    return {
        sec_id: "Qy1h",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        u8_8: 0,
        section_12: ["^CJ9"],
    };

}
function info_bmg_demo_activator_228_20_12() {
    return {
        sec_id: "^CJ9",
        u8_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_activator_236() {
    return {
        sec_id: "Svsm",
        u32_0: 0,
        section_4: ["fT=6"],
        section_8: ["Pac-Kart"],
        u32_12: 0,
        u32_16: 0,
        u8_24: 0,
        u32_28: {
            a: null
        },
        section_32: ["H;;^"],
    };

}
function info_bmg_demo_activator_236_4() {
    return {
        sec_id: "fT=6",
        u8_0: 0,
        section_4: ["9>m>"],
    };

}
function info_bmg_demo_activator_236_4_4() {
    return {
        sec_id: "9>m>",
        u8_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_activator_236_32() {
    return {
        sec_id: "H;;^",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_8: ["cGTs"],
        section_16: ["lSqL"],
        f32_28: 0,
        u32_40: 0,
        f32_48: 0,
        f32_52: 0,
        u8_62: 0,
        f32_64: 0,
        f32_68: 0,
        u32_72: {
            a: null
        },
        section_76: ["oMAW"],
        u32_80: 0,
        section_84: ["9kL5"],
    };

}
function info_bmg_demo_activator_236_32_8() {
    return {
        sec_id: "cGTs",
        unordered_bmg_demo_model_link_0: 0,
    };

}
function info_bmg_demo_activator_236_32_16() {
    return {
        sec_id: "lSqL",
        u32_0: 0,
    };

}
function info_bmg_demo_activator_236_32_76() {
    return {
        sec_id: "oMAW",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: {
            s: 0
        },
    };

}
function info_bmg_demo_activator_236_32_76_12t0() {
    return {
        sec_id: "]CEB",
        u8_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_activator_236_32_76_12t8() {
    return {
        sec_id: "3XRv",
        u32_0: {
            a: null
        },
        unordered_bmg_demo_mysterious_4: 0,
    };

}
function info_bmg_demo_activator_236_32_76_12t23() {
    return {
        sec_id: "g]4K",
        u32_0: {
            a: null
        },
        unordered_bmg_demo_mysterious_4: 0,
    };

}
function info_bmg_demo_activator_236_32_84() {
    return {
        sec_id: "9kL5",
        u32_0: 0,
    };

}
function info_bmg_demo_activator_252() {
    return {
        sec_id: "RcKR",
        u32_0: {
            a: null
        },
        unordered_bmg_demo_mysterious_4: 0,
    };

}
function info_bmg_demo_event() {
    return {
        sec_id: "PWSR",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["mPi7"],
    };

}
function info_bmg_demo_event_12() {
    return {
        sec_id: "mPi7",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_20: 0,
        u32_24: 0,
    };

}
function info_bmg_demo_event_12_12t2() {
    return {
        sec_id: "foOa",
        u32_0: 0,
        section_4: ["NIl["],
    };

}
function info_bmg_demo_event_12_12t2_4() {
    return {
        sec_id: "NIl[",
        u8_1: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        u32_20: 0,
    };

}
function info_bmg_demo_event_12_12t5() {
    return {
        sec_id: "Mcru",
        section_0: {
            s: 0
        },
        u8_4: 0,
    };

}
function info_bmg_demo_event_12_12t5_0t1() {
    return {
        sec_id: "@pJ=",
        unordered_bmg_demo_interface_0: 0,
        u8_5: 0,
        section_8: ["HApO"],
    };

}
function info_bmg_demo_event_12_12t5_0t1_8() {
    return {
        sec_id: "HApO",
        u32_8: 0,
        section_12: ["GLw3"],
    };

}
function info_bmg_demo_event_12_12t5_0t1_8_12() {
    return {
        sec_id: "GLw3",
        u8_1: 0,
        u32_4: 0,
    };

}
function info_bmg_demo_event_12_12t5_0t2() {
    return {
        sec_id: "0Tx?",
        u8_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function info_bmg_demo_event_12_12t7() {
    return {
        sec_id: "hw>l",
        u8_0: 0,
        u8_1: 0,
        unordered_bmg_demo_flag_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_event_12_12t14() {
    return {
        sec_id: "K>L8",
        u32_0: 0,
    };

}
function info_bmg_demo_event_12_12t15() {
    return {
        sec_id: "6aWN",
        u32_4: 0,
    };

}
function info_bmg_demo_event_12_12t17() {
    return {
        sec_id: "mFLG",
        u32_0: 0,
    };

}
function info_bmg_demo_event_12_12t19() {
    return {
        sec_id: "T<pZ",
        u32_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
        u8_8: 0,
        u8_9: 0,
        f32_12: 0,
    };

}
function info_bmg_demo_event_12_12t23() {
    return {
        sec_id: ">Z:8",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function info_bmg_demo_flag() {
    return {
        sec_id: "Ii<L",
        u32_0: 0,
        section_8: ["Pac-Kart"],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        section_20: {
            s: 0
        },
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        u32_28: 0,
        f32_32: 0,
        u8_44: 0,
    };

}
function info_bmg_demo_flag_20t0() {
    return {
        sec_id: "nyyF",
        u32_0: 0,
    };

}
function info_bmg_demo_flag_20t1() {
    return {
        sec_id: "mcZh",
    };

}
function info_bmg_demo_flag_20t2() {
    return {
        sec_id: "ahXp",
    };

}
function info_bmg_demo_flag_20t3() {
    return {
        sec_id: "[k3^",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_flag_20t8() {
    return {
        sec_id: "M:Th",
        unordered_bmg_demo_flag_0: 0,
    };

}
function info_bmg_demo_flag_20t9() {
    return {
        sec_id: "Z:PL",
        u32_8: 0,
        section_12: ["Ea1X"],
    };

}
function info_bmg_demo_flag_20t9_12() {
    return {
        sec_id: "Ea1X",
        f32_4: 0,
    };

}
function info_bmg_demo_flag_20t10() {
    return {
        sec_id: "@XQf",
        u32_0: 0,
        section_4: ["YT1S"],
    };

}
function info_bmg_demo_flag_20t10_4() {
    return {
        sec_id: "YT1S",
        u32_16: 0,
    };

}
function info_bmg_demo_font() {
    return {
        sec_id: ">NJK",
        texture_0: "texture_patch",
        unordered_bmg_demo_model_anim_3_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        f32_12: 0,
        u32_16: 0,
        section_20: [":AAO"],
        u32_24: {
            a: null
        },
        section_28: ["BfM^"],
    };

}
function info_bmg_demo_font_20() {
    return {
        sec_id: ":AAO",
        f32_0: 0,
    };

}
function info_bmg_demo_font_28() {
    return {
        sec_id: "BfM^",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_idk() {
    return {
        sec_id: "mD;@",
        u8_0: 0,
        u8_1: 0,
        section_4: {
            s: 0
        },
        f32_12: 0,
        section_24: ["MFNb"],
        u32_52: {
            a: null
        },
        unordered_bmg_demo_mysterious_56: 0,
        u8_64: 0,
        u8_65: 0,
        u8_66: 0,
        u8_67: 0,
    };

}
function info_bmg_demo_idk_24() {
    return {
        sec_id: "MFNb",
        f32_4: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: 0,
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        unordered_bmg_demo_world_thing_40: 0,
        u8_44: 0,
        u8_45: 0,
        section_48: ["nX5W"],
        section_60: ["CUh>"],
    };

}
function info_bmg_demo_idk_24_48() {
    return {
        sec_id: "nX5W",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bmg_demo_idk_24_60() {
    return {
        sec_id: "CUh>",
        f32_0: 0,
        section_4: ["OUTT"],
        section_8: ["MhZ4"],
    };

}
function info_bmg_demo_idk_24_60_4() {
    return {
        sec_id: "OUTT",
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bmg_demo_idk_24_60_8() {
    return {
        sec_id: "MhZ4",
        section_0: ["LUxg"],
    };

}
function info_bmg_demo_idk_24_60_8_0() {
    return {
        sec_id: "LUxg",
        u32_0: 0,
        section_4: ["qGK^"],
    };

}
function info_bmg_demo_idk_24_60_8_0_4() {
    return {
        sec_id: "qGK^",
    };

}
function info_bmg_demo_interface() {
    return {
        sec_id: "kgDb",
        section_0: ["Pac-Kart"],
        u8_5: 0,
        u8_7: 0,
        u32_8: 0,
        u8_12: 0,
        u8_13: 0,
        unordered_bmg_demo_sound_controls_16: 0,
        unordered_bmg_demo_sound_controls_20: 0,
        unordered_bmg_demo_sound_controls_28: 0,
        f32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        section_48: ["bbOk"],
        section_52: ["PULi"],
        f32_60: 0,
        section_64: [":1Jf"],
        u32_68: {
            a: null
        },
        section_72: ["Y<8@"],
        u32_76: {
            a: null
        },
        section_80: ["mzy?"],
    };

}
function info_bmg_demo_interface_48() {
    return {
        sec_id: "bbOk",
        f32_0: 0,
    };

}
function info_bmg_demo_interface_52() {
    return {
        sec_id: "PULi",
        section_0: ["nUas"],
    };

}
function info_bmg_demo_interface_52_0() {
    return {
        sec_id: "nUas",
        u32_0: 0,
    };

}
function info_bmg_demo_interface_64() {
    return {
        sec_id: ":1Jf",
        u32_0: {
            a: null
        },
        section_4: ["K83n"],
    };

}
function info_bmg_demo_interface_64_4() {
    return {
        sec_id: "K83n",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_7: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
        u32_24: 0,
        u8_32: 0,
        u8_33: 0,
    };

}
function info_bmg_demo_interface_64_4_12t1() {
    return {
        sec_id: "nwIY",
        u32_0: 0,
        section_4: ["Xs?:"],
    };

}
function info_bmg_demo_interface_64_4_12t1_4() {
    return {
        sec_id: "Xs?:",
        u8_12: 0,
        u32_16: 0,
    };

}
function info_bmg_demo_interface_64_4_12t5() {
    return {
        sec_id: "?e::",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_bmg_demo_interface_64_4_12t7() {
    return {
        sec_id: "aSsb",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_bmg_demo_interface_64_4_12t8() {
    return {
        sec_id: "NHow",
        u32_0: {
            a: null
        },
        section_4: ["YIZ?"],
    };

}
function info_bmg_demo_interface_64_4_12t8_4() {
    return {
        sec_id: "YIZ?",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
    };

}
function info_bmg_demo_interface_64_4_12t10() {
    return {
        sec_id: "lwc@",
        unordered_bmg_demo_flag_0: 0,
    };

}
function info_bmg_demo_interface_72() {
    return {
        sec_id: "Y<8@",
        u32_0: 0,
        section_4: ["_;ZI"],
        u32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["oL04"],
        u32_20: {
            a: null
        },
        section_24: ["EtIN"],
    };

}
function info_bmg_demo_interface_72_4() {
    return {
        sec_id: "_;ZI",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        u32_12: 0,
    };

}
function info_bmg_demo_interface_72_16() {
    return {
        sec_id: "oL04",
        u8_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_bmg_demo_interface_72_16_4t2() {
    return {
        sec_id: "tvJ[",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        u32_12: 0,
    };

}
function info_bmg_demo_interface_72_16_4t3() {
    return {
        sec_id: "qv?T",
        u8_0: 0,
        u8_1: 0,
        section_4: ["Pac-Kart"],
    };

}
function info_bmg_demo_interface_72_24() {
    return {
        sec_id: "EtIN",
        u8_0: 0,
        section_4: {
            s: 0
        },
        section_12: ["lm@3"],
        unordered_bmg_demo_sound_controls_28: 0,
    };

}
function info_bmg_demo_interface_72_24_4t11() {
    return {
        sec_id: "qQUZ",
        u32_0: {
            a: null
        },
        section_4: ["O1Y0"],
    };

}
function info_bmg_demo_interface_72_24_4t11_4() {
    return {
        sec_id: "O1Y0",
        section_0: ["Pac-Kart"],
        u8_9: 0,
        section_12: {
            s: 0
        },
    };

}
function info_bmg_demo_interface_72_24_4t11_4_12t0() {
    return {
        sec_id: "k7ct",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u32_8: 0,
    };

}
function info_bmg_demo_interface_72_24_4t11_4_12t1() {
    return {
        sec_id: "GZKz",
        section_0: [";4<O"],
        section_4: ["N^^c"],
    };

}
function info_bmg_demo_interface_72_24_4t11_4_12t1_0() {
    return {
        sec_id: ";4<O",
        u32_0: 0,
        section_4: ["V5bd"],
    };

}
function info_bmg_demo_interface_72_24_4t11_4_12t1_0_4() {
    return {
        sec_id: "V5bd",
        u32_16: 0,
    };

}
function info_bmg_demo_interface_72_24_4t11_4_12t1_4() {
    return {
        sec_id: "N^^c",
    };

}
function info_bmg_demo_interface_72_24_12() {
    return {
        sec_id: "lm@3",
        section_0: ["MlOH"],
        section_4: ["v82V"],
    };

}
function info_bmg_demo_interface_72_24_12_0() {
    return {
        sec_id: "MlOH",
    };

}
function info_bmg_demo_interface_72_24_12_4() {
    return {
        sec_id: "v82V",
        u32_16: 0,
    };

}
function info_bmg_demo_interface_80() {
    return {
        sec_id: "mzy?",
        section_0: ["Pac-Kart"],
        u8_8: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: ["qTe7"],
        section_16: ["Pac-Kart"],
        u32_20: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        section_32: ["seO0"],
        section_36: {
            s: 0
        },
        section_40: ["BK]G"],
        f32_44: 0,
        f32_48: 0,
        section_52: ["dRqc"],
        u32_56: 0,
        u32_64: {
            a: null
        },
        section_68: ["<WW1"],
        u8_72: 0,
        u8_73: 0,
        u8_74: 0,
        u8_75: 0,
        u8_76: 0,
        u8_77: 0,
        u8_78: 0,
        u8_79: 0,
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
    };

}
function info_bmg_demo_interface_80_12() {
    return {
        sec_id: "qTe7",
        u8_0: 0,
    };

}
function info_bmg_demo_interface_80_32() {
    return {
        sec_id: "seO0",
        u8_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["B78f"],
    };

}
function info_bmg_demo_interface_80_32_8() {
    return {
        sec_id: "B78f",
        u8_0: 0,
        section_4: ["mf[2"],
    };

}
function info_bmg_demo_interface_80_32_8_4() {
    return {
        sec_id: "mf[2",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
    };

}
function info_bmg_demo_interface_80_36t0() {
    return {
        sec_id: "dv^o",
        u8_0: 0,
        u8_1: 0,
        texture_4: "texture_patch",
        section_8: ["eiDd"],
        u8_12: 0,
        u8_13: 0,
    };

}
function info_bmg_demo_interface_80_36t0_8() {
    return {
        sec_id: "eiDd",
        u32_0: {
            a: null
        },
        section_4: ["CfI="],
        u32_8: 0,
        u8_16: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function info_bmg_demo_interface_80_36t0_8_4() {
    return {
        sec_id: "CfI=",
        texture_0: "texture_patch",
    };

}
function info_bmg_demo_interface_80_36t1() {
    return {
        sec_id: "5t@<",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        unordered_bmg_demo_text_4: 0,
        section_8: {
            s: 0
        },
        section_12: {
            s: 0
        },
        section_16: ["qmc8"],
        u8_20: 0,
        u8_21: 0,
        u8_22: 0,
        u8_23: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        f32_28: 0,
    };

}
function info_bmg_demo_interface_80_36t1_8t1() {
    return {
        sec_id: "fBV8",
        u32_0: {
            a: null
        },
        section_4: ["z1fL"],
        u8_8: 0,
        u8_11: 0,
    };

}
function info_bmg_demo_interface_80_36t1_8t1_4() {
    return {
        sec_id: "z1fL",
        unordered_bmg_demo_text_0: 0,
    };

}
function info_bmg_demo_interface_80_36t1_8t3() {
    return {
        sec_id: "Y[0P",
    };

}
function info_bmg_demo_interface_80_36t1_8t4() {
    return {
        sec_id: "dp5R",
        u32_0: 0,
        section_4: ["Ol^h"],
    };

}
function info_bmg_demo_interface_80_36t1_8t4_4() {
    return {
        sec_id: "Ol^h",
        section_4: ["j]@5"],
    };

}
function info_bmg_demo_interface_80_36t1_8t4_4_4() {
    return {
        sec_id: "j]@5",
    };

}
function info_bmg_demo_interface_80_36t1_16() {
    return {
        sec_id: "qmc8",
    };

}
function info_bmg_demo_interface_80_36t6() {
    return {
        sec_id: "EKL9",
        unordered_bmg_demo_interface_0: 0,
        u8_4: 0,
        u32_8: 0,
        section_12: ["s92_"],
    };

}
function info_bmg_demo_interface_80_36t6_12() {
    return {
        sec_id: "s92_",
        u8_4: 0,
        u32_8: 0,
        u32_12: 0,
        u8_16: 0,
        u32_20: 0,
    };

}
function info_bmg_demo_interface_80_36t7() {
    return {
        sec_id: "t]yz",
        unordered_bmg_demo_interface_0: 0,
    };

}
function info_bmg_demo_interface_80_36t10() {
    return {
        sec_id: "2ana",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_bmg_demo_interface_80_36t12() {
    return {
        sec_id: "Qlx3",
    };

}
function info_bmg_demo_interface_80_36t13() {
    return {
        sec_id: "HczP",
        u8_1: 0,
        section_4: ["?663"],
        u32_8: 0,
        section_12: ["Rsaj"],
    };

}
function info_bmg_demo_interface_80_36t13_4() {
    return {
        sec_id: "?663",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
    };

}
function info_bmg_demo_interface_80_36t13_12() {
    return {
        sec_id: "Rsaj",
        texture_0: "texture_patch",
    };

}
function info_bmg_demo_interface_80_36t14() {
    return {
        sec_id: "^iox",
        u8_0: 0,
        u8_1: 0,
        section_4: ["dSo;"],
    };

}
function info_bmg_demo_interface_80_36t14_4() {
    return {
        sec_id: "dSo;",
        u8_2: 0,
        u8_8: 0,
    };

}
function info_bmg_demo_interface_80_36t15() {
    return {
        sec_id: "dQjw",
        section_0: ["GXNZ"],
    };

}
function info_bmg_demo_interface_80_36t15_0() {
    return {
        sec_id: "GXNZ",
        f32_0: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: ["?A6R"],
    };

}
function info_bmg_demo_interface_80_36t15_0_16() {
    return {
        sec_id: "?A6R",
        texture_0: "texture_patch",
        u8_4: 0,
        u32_8: 0,
        f32_28: 0,
        f32_36: 0,
        u32_40: 0,
        u32_44: {
            a: null
        },
        section_48: ["ZFdM"],
        u32_52: {
            a: null
        },
        section_56: ["=18X"],
    };

}
function info_bmg_demo_interface_80_36t15_0_16_48() {
    return {
        sec_id: "ZFdM",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_interface_80_36t15_0_16_56() {
    return {
        sec_id: "=18X",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_interface_80_40() {
    return {
        sec_id: "BK]G",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u32_32: 0,
        section_36: ["Avsl"],
        u32_40: 0,
        u32_44: 0,
    };

}
function info_bmg_demo_interface_80_40_36() {
    return {
        sec_id: "Avsl",
        u32_0: 0,
        u32_20: 0,
        section_24: ["^<tm"],
    };

}
function info_bmg_demo_interface_80_40_36_24() {
    return {
        sec_id: "^<tm",
        u8_0: 0,
    };

}
function info_bmg_demo_interface_80_52() {
    return {
        sec_id: "dRqc",
        u32_0: {
            a: null
        },
        section_4: ["AdJp"],
        u32_8: {
            a: null
        },
        section_12: ["KgwT"],
        u32_16: {
            a: null
        },
        section_20: ["]RpX"],
        u32_24: {
            a: null
        },
        section_28: ["fR6A"],
        u32_32: {
            a: null
        },
        section_36: ["pUGQ"],
    };

}
function info_bmg_demo_interface_80_52_4() {
    return {
        sec_id: "AdJp",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_interface_80_52_12() {
    return {
        sec_id: "KgwT",
        f32_0: 0,
        u8_17: 0,
    };

}
function info_bmg_demo_interface_80_52_20() {
    return {
        sec_id: "]RpX",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_interface_80_52_28() {
    return {
        sec_id: "fR6A",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_interface_80_52_36() {
    return {
        sec_id: "pUGQ",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_17: 0,
    };

}
function info_bmg_demo_interface_80_68() {
    return {
        sec_id: "<WW1",
        u8_0: 0,
        section_4: ["AFOv"],
        u32_8: 0,
    };

}
function info_bmg_demo_interface_80_68_4() {
    return {
        sec_id: "AFOv",
        u32_0: {
            a: null
        },
        section_4: ["TX6A"],
        u32_8: {
            a: null
        },
        section_12: ["zLRh"],
        u32_16: {
            a: null
        },
        section_20: ["^Z^T"],
        u32_24: {
            a: null
        },
        section_28: ["Le=0"],
        u32_32: {
            a: null
        },
        section_36: ["hP6U"],
        u32_40: {
            a: null
        },
        section_44: ["ZOfD"],
    };

}
function info_bmg_demo_interface_80_68_4_4() {
    return {
        sec_id: "TX6A",
        u8_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_interface_80_68_4_12() {
    return {
        sec_id: "zLRh",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_interface_80_68_4_20() {
    return {
        sec_id: "^Z^T",
        f32_0: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_interface_80_68_4_28() {
    return {
        sec_id: "Le=0",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_interface_80_68_4_36() {
    return {
        sec_id: "hP6U",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_interface_80_68_4_44() {
    return {
        sec_id: "ZOfD",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function info_bmg_demo_model_link() {
    return {
        sec_id: "5Y1W",
        u32_0: 0,
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
        unordered_bmg_demo_model_sub_link_12: 0,
        section_16: ["change this"],
        f32_20: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        section_28: ["AjF]"],
        section_32: ["=PwC"],
        section_48: ["YOo>"],
        u32_52: {
            a: null
        },
        unordered_bmg_demo_mysterious_56: 0,
    };

}
function info_bmg_demo_model_link_28() {
    return {
        sec_id: "AjF]",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_model_link_32() {
    return {
        sec_id: "=PwC",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_model_link_48() {
    return {
        sec_id: "YOo>",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bmg_demo_model_sub_link() {
    return {
        sec_id: "wTl>",
        section_0: ["change this"],
        u32_4: {
            a: null
        },
        section_8: ["0l52"],
        u32_12: {
            a: null
        },
        section_16: ["t[=T"],
    };

}
function info_bmg_demo_model_sub_link_8() {
    return {
        sec_id: "0l52",
        model_0: "model_patch",
    };

}
function info_bmg_demo_model_sub_link_16() {
    return {
        sec_id: "t[=T",
        model_0: "model_patch",
        u8_5: 0,
    };

}
function info_bmg_demo_multi_font() {
    return {
        sec_id: "jR]N",
        u32_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_bmg_demo_multi_font_4t0() {
    return {
        sec_id: "rus:",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bmg_demo_font_12: 0,
        f32_24: 0,
        unordered_bmg_demo_font_28: 0,
        unordered_bmg_demo_font_32: 0,
    };

}
function info_bmg_demo_multi_font_4t1() {
    return {
        sec_id: "GP]S",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bmg_demo_font_12: 0,
        unordered_bmg_demo_font_16: 0,
        unordered_bmg_demo_font_20: 0,
    };

}
function info_bmg_demo_something() {
    return {
        sec_id: "QpPx",
        u8_8: 0,
        u8_9: 0,
        u32_28: 0,
        u32_32: 0,
        u32_48: 0,
    };

}
function info_bmg_demo_sound_controls() {
    return {
        sec_id: "PxFV",
        u32_0: 0,
        u32_4: 0,
        u8_8: 0,
        u8_10: 0,
        u32_12: {
            a: null
        },
        section_16: ["TDQy"],
    };

}
function info_bmg_demo_sound_controls_16() {
    return {
        sec_id: "TDQy",
        u32_0: {
            a: null
        },
        section_4: ["ucN2"],
        u8_8: 0,
        u8_9: 0,
        f32_12: 0,
    };

}
function info_bmg_demo_sound_controls_16_4() {
    return {
        sec_id: "ucN2",
        unordered_bmg_demo_sound_section_0: 0,
    };

}
function info_bmg_demo_sound_section() {
    return {
        sec_id: "CV4:",
        sound_0: "sound_patch",
        u8_9: 0,
        u8_10: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        section_24: ["z0CP"],
    };

}
function info_bmg_demo_sound_section_24() {
    return {
        sec_id: "z0CP",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
        u8_9: 0,
        f32_12: 0,
    };

}
function info_bmg_demo_strange() {
    return {
        sec_id: "hmvb",
        u32_0: 0,
        section_4: ["b689"],
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        unordered_bmg_demo_sound_controls_28: 0,
        f32_32: 0,
    };

}
function info_bmg_demo_strange_4() {
    return {
        sec_id: "b689",
        unordered_bmg_demo_unknown_0: 0,
    };

}
function info_bmg_demo_text() {
    return {
        sec_id: "8Pyg",
        section_0: ["Pac-Kart"],
    };

}
function info_bmg_demo_unknown_thing() {
    return {
        sec_id: "^=9]",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["r1FF"],
        u8_20: 0,
        u8_21: 0,
        section_24: {
            s: 0
        },
    };

}
function info_bmg_demo_unknown_thing_16() {
    return {
        sec_id: "r1FF",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_unknown_thing_24t0() {
    return {
        sec_id: "GDjK",
        u32_0: 0,
        section_4: ["BR8h"],
        u8_8: 0,
        u8_10: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: ["J:N;"],
        section_44: ["?7=8"],
        u8_60: 0,
        f32_64: 0,
    };

}
function info_bmg_demo_unknown_thing_24t0_4() {
    return {
        sec_id: "BR8h",
        model_0: "model_patch",
    };

}
function info_bmg_demo_unknown_thing_24t0_32() {
    return {
        sec_id: "J:N;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_unknown_thing_24t0_44() {
    return {
        sec_id: "?7=8",
    };

}
function info_bmg_demo_unknown_thing_24t1() {
    return {
        sec_id: "oVpB",
        u32_0: {
            a: null
        },
        section_4: ["KlIx"],
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_40: 0,
        f32_44: 0,
        u32_48: {
            a: null
        },
        section_52: ["3Bs?"],
        u32_56: {
            a: null
        },
        section_60: ["oL?F"],
        section_64: ["A[gL"],
        u32_68: {
            a: null
        },
        section_72: ["xcWI"],
    };

}
function info_bmg_demo_unknown_thing_24t1_4() {
    return {
        sec_id: "KlIx",
        texture_0: "texture_patch",
    };

}
function info_bmg_demo_unknown_thing_24t1_52() {
    return {
        sec_id: "3Bs?",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_unknown_thing_24t1_60() {
    return {
        sec_id: "oL?F",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_unknown_thing_24t1_64() {
    return {
        sec_id: "A[gL",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
        f32_12: 0,
    };

}
function info_bmg_demo_unknown_thing_24t1_72() {
    return {
        sec_id: "xcWI",
        u32_0: {
            a: null
        },
        section_4: ["wN5Z"],
    };

}
function info_bmg_demo_unknown_thing_24t1_72_4() {
    return {
        sec_id: "wN5Z",
    };

}
function info_bmg_demo_unknown_thing_24t2() {
    return {
        sec_id: "]a9E",
        u32_0: 0,
        section_4: ["ud0<"],
        f32_8: 0,
        u32_16: 0,
        section_20: ["FxZP"],
        u8_24: 0,
    };

}
function info_bmg_demo_unknown_thing_24t2_4() {
    return {
        sec_id: "ud0<",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
    };

}
function info_bmg_demo_unknown_thing_24t2_20() {
    return {
        sec_id: "FxZP",
        f32_0: 0,
    };

}
function info_bmg_demo_unknown() {
    return {
        sec_id: "2sj4",
        u32_0: {
            a: null
        },
        section_4: ["q1x9"],
    };

}
function info_bmg_demo_unknown_4() {
    return {
        sec_id: "q1x9",
        u32_0: 0,
        section_4: {
            s: 0
        },
        section_8: {
            s: 0
        },
    };

}
function info_bmg_demo_unknown_4_4t5() {
    return {
        sec_id: "qXiv",
        section_0: ["gaN7"],
        u8_6: 0,
        u8_7: 0,
        u32_20: 0,
        section_24: ["fEf9"],
        u32_28: 0,
        section_32: ["W<m]"],
        u32_36: 0,
        section_40: ["D:g2"],
        u8_44: 0,
        u8_45: 0,
    };

}
function info_bmg_demo_unknown_4_4t5_0() {
    return {
        sec_id: "gaN7",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
    };

}
function info_bmg_demo_unknown_4_4t5_24() {
    return {
        sec_id: "fEf9",
        u32_0: 0,
        section_4: ["rbdy"],
    };

}
function info_bmg_demo_unknown_4_4t5_24_4() {
    return {
        sec_id: "rbdy",
        f32_12: 0,
        f32_20: 0,
        u8_28: 0,
        f32_32: 0,
    };

}
function info_bmg_demo_unknown_4_4t5_32() {
    return {
        sec_id: "W<m]",
        u32_0: 0,
        section_4: ["IlPm"],
    };

}
function info_bmg_demo_unknown_4_4t5_32_4() {
    return {
        sec_id: "IlPm",
        section_0: ["Edvd"],
    };

}
function info_bmg_demo_unknown_4_4t5_32_4_0() {
    return {
        sec_id: "Edvd",
        u8_0: 0,
        section_4: ["H4:a"],
    };

}
function info_bmg_demo_unknown_4_4t5_32_4_0_4() {
    return {
        sec_id: "H4:a",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function info_bmg_demo_unknown_4_4t5_40() {
    return {
        sec_id: "D:g2",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_unknown_4_8t1() {
    return {
        sec_id: "Bhe_",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        u8_40: 0,
        u8_42: 0,
        section_48: ["PMSx"],
        section_52: ["rjK;"],
    };

}
function info_bmg_demo_unknown_4_8t1_48() {
    return {
        sec_id: "PMSx",
        f32_0: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_unknown_4_8t1_52() {
    return {
        sec_id: "rjK;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_unknown_4_8t5() {
    return {
        sec_id: "rW=z",
    };

}
function info_bmg_demo_unknown_4_8t9() {
    return {
        sec_id: "k8IO",
    };

}
function info_bmg_demo_unknown_4_8t26() {
    return {
        sec_id: "dFdS",
    };

}
function info_bmg_demo_var() {
    return {
        sec_id: "g_8V",
        section_148: ["Pac-Kart"],
        u32_152: 0,
        section_156: ["qkSo"],
        u32_164: {
            a: null
        },
        section_168: ["Ae6A"],
    };

}
function info_bmg_demo_var_156() {
    return {
        sec_id: "qkSo",
        unordered_bmg_demo_var_0: 0,
    };

}
function info_bmg_demo_var_168() {
    return {
        sec_id: "Ae6A",
        section_8: ["Pac-Kart"],
        u32_12: {
            a: null
        },
        section_16: ["]2pK"],
        u32_20: {
            a: null
        },
        section_24: ["Of]Y"],
    };

}
function info_bmg_demo_var_168_16() {
    return {
        sec_id: "]2pK",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: {
            s: 0
        },
        section_16: ["cI:@"],
    };

}
function info_bmg_demo_var_168_16_12t7() {
    return {
        sec_id: "ec4E",
    };

}
function info_bmg_demo_var_168_16_12t8() {
    return {
        sec_id: "r:h4",
        u8_0: 0,
        unordered_bmg_demo_world_20_8: 0,
    };

}
function info_bmg_demo_var_168_16_12t12() {
    return {
        sec_id: "HL[>",
        u8_0: 0,
        u8_1: 0,
        section_4: {
            s: 0
        },
        f32_8: 0,
    };

}
function info_bmg_demo_var_168_16_12t12_4t7() {
    return {
        sec_id: "@V<m",
        u8_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
        u32_8: 0,
        section_12: ["125X"],
    };

}
function info_bmg_demo_var_168_16_12t12_4t7_12() {
    return {
        sec_id: "125X",
        u8_0: 0,
    };

}
function info_bmg_demo_var_168_16_12t15() {
    return {
        sec_id: "K?S:",
        u32_0: {
            a: null
        },
        section_4: ["kGe8"],
    };

}
function info_bmg_demo_var_168_16_12t15_4() {
    return {
        sec_id: "kGe8",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: {
            s: 0
        },
        section_16: ["Q2>W"],
    };

}
function info_bmg_demo_var_168_16_12t15_4_12t5() {
    return {
        sec_id: "vH;a",
        u8_0: 0,
        section_4: ["PRDe"],
    };

}
function info_bmg_demo_var_168_16_12t15_4_12t5_4() {
    return {
        sec_id: "PRDe",
        u32_0: 0,
    };

}
function info_bmg_demo_var_168_16_12t15_4_16() {
    return {
        sec_id: "Q2>W",
    };

}
function info_bmg_demo_var_168_16_12t18() {
    return {
        sec_id: "HJ]e",
        section_0: ["APtz"],
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_var_168_16_12t18_0() {
    return {
        sec_id: "APtz",
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function info_bmg_demo_var_168_16_12t25() {
    return {
        sec_id: "PE9v",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
        f32_16: 0,
    };

}
function info_bmg_demo_var_168_16_16() {
    return {
        sec_id: "cI:@",
    };

}
function info_bmg_demo_var_168_24() {
    return {
        sec_id: "Of]Y",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_20: 0,
        u32_24: 0,
    };

}
function info_bmg_demo_var_168_24_12t2() {
    return {
        sec_id: "4dQo",
        u32_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_bmg_demo_var_168_24_12t2_4t1() {
    return {
        sec_id: "6YFB",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        unordered_bmg_demo_world_84_4: 0,
        f32_8: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        unordered_bmg_demo_extended_world_link_20: 0,
        u32_24: 0,
        f32_28: 0,
    };

}
function info_bmg_demo_var_168_24_12t2_4t4() {
    return {
        sec_id: "YGhq",
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
    };

}
function info_bmg_demo_var_168_24_12t2_4t5() {
    return {
        sec_id: "tzHh",
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
    };

}
function info_bmg_demo_var_168_24_12t2_4t7() {
    return {
        sec_id: "yBUE",
        u8_2: 0,
        u32_12: 0,
    };

}
function info_bmg_demo_var_168_24_12t2_4t11() {
    return {
        sec_id: "H>MT",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        u32_20: 0,
        f32_40: 0,
    };

}
function info_bmg_demo_var_168_24_12t2_4t12() {
    return {
        sec_id: "_b3V",
        u8_2: 0,
        section_16: ["7GXa"],
    };

}
function info_bmg_demo_var_168_24_12t2_4t12_16() {
    return {
        sec_id: "7GXa",
        u32_0: 0,
        u32_4: 0,
        u8_8: 0,
    };

}
function info_bmg_demo_var_168_24_12t2_4t17() {
    return {
        sec_id: "V6:C",
        u8_2: 0,
        unordered_bmg_demo_extended_world_link_16: 0,
        u8_53: 0,
    };

}
function info_bmg_demo_var_168_24_12t5() {
    return {
        sec_id: "h>O]",
        section_0: {
            s: 0
        },
        u8_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t5_0t1() {
    return {
        sec_id: "cnZN",
        unordered_bmg_demo_interface_0: 0,
        u8_5: 0,
        section_8: ["4Q:z"],
    };

}
function info_bmg_demo_var_168_24_12t5_0t1_8() {
    return {
        sec_id: "4Q:z",
        u32_8: 0,
        section_12: ["7rWd"],
    };

}
function info_bmg_demo_var_168_24_12t5_0t1_8_12() {
    return {
        sec_id: "7rWd",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u32_12: 0,
    };

}
function info_bmg_demo_var_168_24_12t5_0t2() {
    return {
        sec_id: "g=If",
        u8_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t7() {
    return {
        sec_id: "c;^7",
        u8_0: 0,
        u8_1: 0,
        section_4: {
            s: 0
        },
        f32_8: 0,
    };

}
function info_bmg_demo_var_168_24_12t7_4t7() {
    return {
        sec_id: "QwrS",
        u32_8: 0,
        section_12: ["qX3A"],
    };

}
function info_bmg_demo_var_168_24_12t7_4t7_12() {
    return {
        sec_id: "qX3A",
    };

}
function info_bmg_demo_var_168_24_12t14() {
    return {
        sec_id: "xkBV",
        u32_0: 0,
    };

}
function info_bmg_demo_var_168_24_12t15() {
    return {
        sec_id: "b;HD",
        unordered_bmg_demo_var_0: 0,
        u32_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t17() {
    return {
        sec_id: "xpA_",
        u32_0: 0,
    };

}
function info_bmg_demo_var_168_24_12t18() {
    return {
        sec_id: "tPSa",
        unordered_bmg_demo_something_4: 0,
        section_8: ["E[DU"],
        u32_16: 0,
    };

}
function info_bmg_demo_var_168_24_12t18_8() {
    return {
        sec_id: "E[DU",
    };

}
function info_bmg_demo_var_168_24_12t23() {
    return {
        sec_id: "^pw2",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t33() {
    return {
        sec_id: "QXg:",
        u32_0: 0,
        section_4: ["7EKG"],
    };

}
function info_bmg_demo_var_168_24_12t33_4() {
    return {
        sec_id: "7EKG",
        u32_12: 0,
        section_16: ["Gf9@"],
        u32_20: {
            a: null
        },
        section_24: ["?7o8"],
        u32_28: {
            a: null
        },
        section_32: ["c_=b"],
    };

}
function info_bmg_demo_var_168_24_12t33_4_16() {
    return {
        sec_id: "Gf9@",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_12: ["3Z8?"],
        section_16: ["Xn?5"],
    };

}
function info_bmg_demo_var_168_24_12t33_4_16_12() {
    return {
        sec_id: "3Z8?",
        u8_0: 0,
        u8_1: 0,
        unordered_bmg_demo_flag_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_16_16() {
    return {
        sec_id: "Xn?5",
    };

}
function info_bmg_demo_var_168_24_12t33_4_24() {
    return {
        sec_id: "?7o8",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_20: 0,
        u32_24: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_24_12t7() {
    return {
        sec_id: ":dW?",
        u8_0: 0,
        u8_1: 0,
        unordered_bmg_demo_flag_4: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_24_12t15() {
    return {
        sec_id: "RfLW",
        u32_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_24_12t23() {
    return {
        sec_id: "6]HU",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_32() {
    return {
        sec_id: "c_=b",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_20: 0,
        u32_24: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_32_12t5() {
    return {
        sec_id: "COk4",
        section_0: ["SvcM"],
        u8_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_32_12t5_0() {
    return {
        sec_id: "SvcM",
        u8_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_32_12t15() {
    return {
        sec_id: "L4Wv",
        u32_4: 0,
    };

}
function info_bmg_demo_var_168_24_12t33_4_32_12t23() {
    return {
        sec_id: "XjwE",
        unordered_bmg_demo_unknown_0: 0,
        unordered_bmg_demo_extended_world_link_4: 0,
    };

}
function info_bmg_demo_world_thing() {
    return {
        sec_id: ">;Xp",
        u32_0: 0,
        u32_4: 0,
        f32_12: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        f32_44: 0,
        section_48: ["change this"],
        f32_52: 0,
        f32_60: 0,
        f32_68: 0,
        f32_80: 0,
        f32_84: 0,
        section_88: ["change this"],
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
    };

}
function info_bmg_demo_extended_world_link() {
    return {
        sec_id: "nU2K",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_7: 0,
        u8_8: 0,
        f32_24: 0,
    };

}
function info_bmg_demo_link() {
    return {
        sec_id: "nKTe",
        u8_8: 0,
        section_12: ["c85^"],
        section_20: [">JpY"],
        section_24: ["Pac-Kart"],
        u32_28: 0,
        section_32: ["Pac-Kart"],
        u32_36: 0,
        u32_40: 0,
        section_44: ["KAPY"],
        u32_48: 0,
        section_52: ["MUW6"],
        section_56: ["T[48"],
        u32_72: u32(o + 72),
        //check this
    };

}
function info_bmg_demo_link_12() {
    return {
        sec_id: "c85^",
    };

}
function info_bmg_demo_link_20() {
    return {
        sec_id: ">JpY",
        u32_0: {
            a: null
        },
        section_4: ["hQuD"],
    };

}
function info_bmg_demo_link_20_4() {
    return {
        sec_id: "hQuD",
        unordered_bmg_demo_flag_0: 0,
    };

}
function info_bmg_demo_link_44() {
    return {
        sec_id: "KAPY",
        u8_0: 0,
        section_12: ["UB1w"],
    };

}
function info_bmg_demo_link_44_12() {
    return {
        sec_id: "UB1w",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bmg_demo_link_52() {
    return {
        sec_id: "MUW6",
        section_0: ["C@Z0"],
    };

}
function info_bmg_demo_link_52_0() {
    return {
        sec_id: "C@Z0",
        u32_0: {
            a: null
        },
        section_4: ["Jfcq"],
    };

}
function info_bmg_demo_link_52_0_4() {
    return {
        sec_id: "Jfcq",
        u32_0: {
            a: null
        },
        section_4: ["e3G2"],
        section_8: ["v7=R"],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: ["_<q1"],
        u32_24: 0,
        section_28: ["NoF1"],
    };

}
function info_bmg_demo_link_52_0_4_4() {
    return {
        sec_id: "e3G2",
        u8_0: 0,
        section_4: {
            s: 0
        },
        section_8: ["qQP>"],
    };

}
function info_bmg_demo_link_52_0_4_4_4t1() {
    return {
        sec_id: "Q?GH",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bmg_demo_link_52_0_4_4_8() {
    return {
        sec_id: "qQP>",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_bmg_demo_link_52_0_4_8() {
    return {
        sec_id: "v7=R",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bmg_demo_link_52_0_4_20() {
    return {
        sec_id: "_<q1",
        u32_0: 0,
        section_4: ["3Xzp"],
        u8_9: 0,
    };

}
function info_bmg_demo_link_52_0_4_20_4() {
    return {
        sec_id: "3Xzp",
        u8_0: 0,
        section_4: ["7?De"],
    };

}
function info_bmg_demo_link_52_0_4_20_4_4() {
    return {
        sec_id: "7?De",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bmg_demo_link_52_0_4_28() {
    return {
        sec_id: "NoF1",
        u8_9: 0,
    };

}
function info_bmg_demo_link_56() {
    return {
        sec_id: "T[48",
        u8_0: 0,
        u32_4: 0,
        section_8: ["EeHt"],
    };

}
function info_bmg_demo_link_56_8() {
    return {
        sec_id: "EeHt",
    };

}
function info_bmg_demo_mysterious() {
    return {
        sec_id: "4kfB",
        u8_0: 0,
        u8_3: 0,
        section_4: {
            s: 0
        },
        section_8: ["n2Dn"],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
    };

}
function info_bmg_demo_mysterious_4t5() {
    return {
        sec_id: "T_9f",
        u8_3: 0,
        u32_12: 0,
        section_16: {
            s: 0
        },
        u32_32: 0,
        section_36: ["Gemm"],
        u32_40: {
            a: null
        },
        section_44: ["IbM="],
        u32_48: {
            a: null
        },
        section_52: ["t4Zr"],
        section_56: ["6s@3"],
    };

}
function info_bmg_demo_mysterious_4t5_16t0() {
    return {
        sec_id: "YQ2o",
        model_0: "model_patch",
    };

}
function info_bmg_demo_mysterious_4t5_16t2() {
    return {
        sec_id: "UZlh",
        texture_0: "texture_patch",
    };

}
function info_bmg_demo_mysterious_4t5_36() {
    return {
        sec_id: "Gemm",
    };

}
function info_bmg_demo_mysterious_4t5_44() {
    return {
        sec_id: "IbM=",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bmg_demo_mysterious_4t5_52() {
    return {
        sec_id: "t4Zr",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_bmg_demo_mysterious_4t5_56() {
    return {
        sec_id: "6s@3",
        f32_8: 0,
        f32_16: 0,
    };

}
function info_bmg_demo_mysterious_8() {
    return {
        sec_id: "n2Dn",
        u8_0: 0,
    };

}
function info_bmg_demo_world_link_type() {
    return {
        sec_id: "==?G",
        section_0: ["cfjA"],
        u8_4: 0,
    };

}
function info_bmg_demo_world_link_type_0() {
    return {
        sec_id: "cfjA",
        unordered_bmg_demo_model_sub_link_12: 0,
        u32_16: {
            a: null
        },
        section_20: ["7IWl"],
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        section_56: ["3kaU"],
        u32_60: 0,
        f32_84: 0,
        u32_88: 0,
    };

}
function info_bmg_demo_world_link_type_0_20() {
    return {
        sec_id: "7IWl",
        section_4: ["_g^g"],
    };

}
function info_bmg_demo_world_link_type_0_20_4() {
    return {
        sec_id: "_g^g",
        u32_0: {
            a: null
        },
        section_4: ["3rAJ"],
    };

}
function info_bmg_demo_world_link_type_0_20_4_4() {
    return {
        sec_id: "3rAJ",
        unordered_bmg_demo_model_link_0: 0,
    };

}
function info_bmg_demo_world_link_type_0_56() {
    return {
        sec_id: "3kaU",
        u32_0: 0,
        section_4: ["<v4O"],
    };

}
function info_bmg_demo_world_link_type_0_56_4() {
    return {
        sec_id: "<v4O",
    };

}
function info_bmg_demo_world_settings() {
    return {
        sec_id: "QaV]",
        section_0: ["j[CS"],
        section_4: ["Mu^w"],
        f32_8: 0,
        f32_12: 0,
        u8_33: 0,
        u32_52: {
            a: null
        },
        section_56: ["sfsX"],
        section_60: ["]Nkf"],
        texture_68: "texture_patch",
        texture_72: "texture_patch",
        texture_76: "texture_patch",
        f32_80: 0,
        f32_84: 0,
        section_88: ["SM65"],
        f32_92: 0,
        f32_96: 0,
        section_100: ["jMbQ"],
        u32_104: {
            a: null
        },
        section_108: ["Qkx]"],
        f32_120: 0,
        f32_124: 0,
        f32_128: 0,
        f32_132: 0,
        u8_137: 0,
        f32_140: 0,
        texture_144: "texture_patch",
        f32_148: 0,
        f32_152: 0,
        f32_156: 0,
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        unordered_bmg_demo_font_176: 0,
    };

}
function info_bmg_demo_world_settings_0() {
    return {
        sec_id: "j[CS",
        unordered_bmg_demo_interface_0: 0,
        unordered_bmg_demo_interface_4: 0,
    };

}
function info_bmg_demo_world_settings_4() {
    return {
        sec_id: "Mu^w",
        unordered_bmg_demo_interface_0: 0,
        f32_12: 0,
        u8_20: 0,
        f32_24: 0,
    };

}
function info_bmg_demo_world_settings_56() {
    return {
        sec_id: "sfsX",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
    };

}
function info_bmg_demo_world_settings_60() {
    return {
        sec_id: "]Nkf",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_world_settings_88() {
    return {
        sec_id: "SM65",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_bmg_demo_world_settings_100() {
    return {
        sec_id: "jMbQ",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bmg_demo_world_settings_108() {
    return {
        sec_id: "Qkx]",
        section_0: ["Pac-Kart"],
    };

}

function info_bmg_demo_texture_anim_0() {
    return {
        sec_id: "tWK>",
        section_4: ["_fbe"],
        u32_16: {
            a: null
        },
        section_20: ["cyYC"],
    };

}
function info_bmg_demo_texture_anim_0_4() {
    return {
        sec_id: "_fbe",
        u32_0: {
            a: null
        },
        section_4: ["EtH5"],
        u32_8: 0,
        u32_20: 0,
    };

}
function info_bmg_demo_texture_anim_0_4_4() {
    return {
        sec_id: "EtH5",
        texture_0: "texture_patch",
    };

}
function info_bmg_demo_texture_anim_0_20() {
    return {
        sec_id: "cyYC",
        f32_4: 0,
        u8_9: 0,
        f32_12: 0,
    };

}

function add_bmg_demo_model_anim_3() {
    return {
        id: gen_id(),
        sec_id: "o[F3",
        u8_1: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        section_36: ["Pac-Kart"],
    };

}
function add_bmg_demo_model_anim_3_24() {
    return {
        id: gen_id(),
        sec_id: "xzyA",
        u16_0: 0,
    };

}
function add_bmg_demo_model_anim_3_32() {
    return {
        id: gen_id(),
        sec_id: "gZtS",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_18: 0,
        u8_19: 0,
    };

}

/* end add list */
/////////////////////
/* start info list */
function info_bmg_demo_model_anim_3() {
    return {
        sec_id: "o[F3",
        u8_1: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        u32_20: {
            a: null
        },
        section_24: ["xzyA"],
        u32_28: {
            a: null
        },
        section_32: ["gZtS"],
        section_36: ["Pac-Kart"],
    };

}
function info_bmg_demo_model_anim_3_24() {
    return {
        sec_id: "xzyA",
        u16_0: 0,
    };

}
function info_bmg_demo_model_anim_3_32() {
    return {
        sec_id: "gZtS",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_18: 0,
        u8_19: 0,
    };

}

function info_bmg_demo_model_anim_1_type_a() {
    return {
        sec_id: "fed9",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        u32_20: 0,
        section_24: ["e6Dh"],
        section_28: ["ZOf5"],
        section_32: ["2k[k"],
        section_36: ["JeUR"],
        u32_40: {
            a: null
        },
        u32_44: 0,
        u32_48: 0,
        section_52: ["yToO"],
        u32_56: 0,
        u32_60: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_24() {
    return {
        sec_id: "e6Dh",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_28() {
    return {
        sec_id: "ZOf5",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_32() {
    return {
        sec_id: "2k[k",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_36() {
    return {
        sec_id: "JeUR",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_52() {
    return {
        sec_id: "yToO",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: ["]H0t"],
        section_16: ["Rkkl"],
        section_20: ["=Kkb"],
        section_24: ["34M?"],
        section_28: ["cbDb"],
        section_32: ["]ZtJ"],
    };

}
function info_bmg_demo_model_anim_1_type_a_52_12() {
    return {
        sec_id: "]H0t",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_52_16() {
    return {
        sec_id: "Rkkl",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_52_20() {
    return {
        sec_id: "=Kkb",
        u8_1: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_52_24() {
    return {
        sec_id: "34M?",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_52_28() {
    return {
        sec_id: "cbDb",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_a_52_32() {
    return {
        sec_id: "]ZtJ",
        f32_0: 0,
    };

}

function info_bmg_demo_model_anim_1_type_b() {
    return {
        sec_id: "n3ay",
        u32_0: 0,
        u8_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u32_16: {
            a: null
        },
        f32_20: 0,
        f32_24: 0,
        section_32: ["bJzj"],
        section_36: ["GaI0"],
    };

}
function info_bmg_demo_model_anim_1_type_b_32() {
    return {
        sec_id: "bJzj",
        section_0: ["Pac-Kart"],
    };

}
function info_bmg_demo_model_anim_1_type_b_36() {
    return {
        sec_id: "GaI0",
        section_0: ["ktsB"],
    };

}
function info_bmg_demo_model_anim_1_type_b_36t0() {
    return {
        sec_id: "ktsB",
        u8_1: 0,
        section_4: ["GaI0"],
        f32_8: 0,
    };

}
function info_bmg_demo_model_anim_1_type_b_36t3() {
    return {
        sec_id: "kf_D",
        u8_0: 0,
        u8_1: 0,
        u8_3: {
            a: null
        },
        section_4: ["GaI0"],
        section_8: ["5c1m"],
        f32_12: 0,
    };

}
function info_bmg_demo_model_anim_1_type_b_36t3_8() {
    return {
        sec_id: "5c1m",
        f32_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_b_36t5() {
    return {
        sec_id: "q3mS",
        u8_0: 0,
        u8_1: 0,
        u8_3: {
            a: null
        },
        section_4: ["GaI0"],
        f32_8: 0,
        f32_12: 0,
        section_16: ["uP2S"],
        f32_20: 0,
    };

}
function info_bmg_demo_model_anim_1_type_b_36t5_16() {
    return {
        sec_id: "uP2S",
        u8_0: 0,
    };

}
function info_bmg_demo_model_anim_1_type_b_36t6() {
    return {
        sec_id: "3l7b",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        section_4: ["GaI0"],
        f32_8: 0,
    };

}

function info_bmg_demo_model_anim_2_type_a() {
    return {
        sec_id: "Ca2a",
        u32_0: {
            a: null
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_16: ["Ix:y"],
    };

}
function info_bmg_demo_model_anim_2_type_a_16() {
    return {
        sec_id: "Ix:y",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
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

function info_bmg_demo_model_anim_2_type_b() {
    return {
        sec_id: "B5or",
        u32_0: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_16: ["xLsQ"],
        section_20: ["wh<4"],
    };

}
function info_bmg_demo_model_anim_2_type_b_16() {
    return {
        sec_id: "xLsQ",
    };

}
function info_bmg_demo_model_anim_2_type_b_20() {
    return {
        sec_id: "wh<4",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        u32_36: {
            a: null
        },
        section_40: ["L26x"],
    };

}
function info_bmg_demo_model_anim_2_type_b_20_40() {
    return {
        sec_id: "L26x",
        section_0: ["wh<4"],
    };

}

/* end info list */
///////////////////
/* start ex list */

function ex_bmg_demo_x(o, x) {

    console.pk_log("save not finished")

    return null

    g = {
        divisibility: 16,
        divisible_prev_value: [],
        debug: pk_debug,
        endian: g.endian,
        file_dir_type: 0,
        type_string: g.type_string,
        ordered_ref: 0,
        unordered_ref: 0,
        datapack_ref: 0,
        m: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        tex_anims: 0,
        bmg_demo_world_0_64_array: [],
        bmg_demo_world_12_array: [],
        bmg_demo_world_20_array: [],
        bmg_demo_world_92_array: [],
        bmg_demo_world_116_array: [],
        bmg_demo_world_68_array: [],
        bmg_demo_world_84_array: [],
        bmg_demo_world_4_array: [],
        bmg_demo_model_anim_1_type_a_array: [],
        bmg_demo_model_anim_2_type_a_array: [],
        bmg_demo_model_anim_3_array: [],
        bmg_demo_activator_array: [],
        bmg_demo_event_array: [],
        bmg_demo_flag_array: [],
        bmg_demo_font_array: [],
        bmg_demo_idk_array: [],
        bmg_demo_interface_array: [],
        bmg_demo_model_link_array: [],
        bmg_demo_model_sub_link_array: [],
        bmg_demo_multi_font_array: [],
        bmg_demo_something_array: [],
        bmg_demo_sound_controls_array: [],
        bmg_demo_sound_section_array: [],
        bmg_demo_strange_array: [],
        bmg_demo_text_array: [],
        bmg_demo_unknown_thing_array: [],
        bmg_demo_unknown_array: [],
        bmg_demo_var_array: [],
        bmg_demo_world_thing_array: [],
        bmg_demo_extended_world_link_array: [],
        bmg_demo_link_array: [],
        bmg_demo_mysterious_array: [],
        bmg_demo_world_link_type_array: [],
        bmg_demo_world_settings_array: [],
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    ex_bmg_demo_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_bmg_demo_file_header(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_00)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)

    let temp_offset = e
    let global = ((x.section_12.length) * 24) + 16
    e = e + (x.section_12.length * 24)

    let time_array = []

    for (let i = 0; i < x.section_12.length; i++) {
        let a = Date.now()

        e = ex_bmg_demo_directory(temp_offset + (i * 24), e, x.section_12[i], global)
        time_array.push(Date.now() - a)
    }

    // e = ex_s_offset(o + 12, e, ex_bmg_demo_directory, x.section_12, 'down');

    console.pk_log(`time in ms each ${g.file_name} datapack exported ${time_array}`)

    g.debug ? ex_debug(o, x.sec_id) : 0;

    globalThis.end_buffer = new ArrayBuffer(128)

    let i = 0
    for (; i < end_buffer.byteLength; i++) {
        su8(i, 32)
    }

    return e
}

function ex_bmg_demo_directory(o, e, x, global) {

    g.bmg_demo_world_0_64_array = []
    g.bmg_demo_world_12_array = []
    g.bmg_demo_world_20_array = []
    g.bmg_demo_world_92_array = []
    g.bmg_demo_world_116_array = []
    g.bmg_demo_world_68_array = []
    g.bmg_demo_world_84_array = []
    g.bmg_demo_world_4_array = []
    g.bmg_demo_model_anim_1_type_a_array = []
    g.bmg_demo_model_anim_2_type_a_array = []
    g.bmg_demo_model_anim_3_array = []
    g.bmg_demo_activator_array = []
    g.bmg_demo_event_array = []
    g.bmg_demo_flag_array = []
    g.bmg_demo_font_array = []
    g.bmg_demo_idk_array = []
    g.bmg_demo_interface_array = []
    g.bmg_demo_model_link_array = []
    g.bmg_demo_model_sub_link_array = []
    g.bmg_demo_multi_font_array = []
    g.bmg_demo_something_array = []
    g.bmg_demo_sound_controls_array = []
    g.bmg_demo_sound_section_array = []
    g.bmg_demo_strange_array = []
    g.bmg_demo_text_array = []
    g.bmg_demo_unknown_thing_array = []
    g.bmg_demo_unknown_array = []
    g.bmg_demo_var_array = []
    g.bmg_demo_world_thing_array = []
    g.bmg_demo_extended_world_link_array = []
    g.bmg_demo_link_array = []
    g.bmg_demo_mysterious_array = []
    g.bmg_demo_world_link_type_array = []
    g.bmg_demo_world_settings_array = []

    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 20, e - global)

    e = ex_bmg_demo_datapack(e, x.datapack[0])
    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + index_patch_buffer.byteLength + ordered_buffer.byteLength + offset_patch_buffer.byteLength)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_datapack(o, x) {
    globalThis.datapack_buffer = new ArrayBuffer(268435455)

    buffer_array.push(datapack_buffer)
    dynamic_buffer = datapack_buffer

    let e = o + 152
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    //amount?   su32(o +28, x.u32_28)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +52, x.u32_52)
    ex_patch(o + 56, g.model_array, x.model_56)
    //amount?   su32(o +80, x.u32_80)
    su32(o + 84, x.u32_84)
    su32(o + 88, x.u32_88)
    su32(o + 92, x.u32_92)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)
    su32(o + 104, x.u32_104)
    su32(o + 124, x.u32_124)
    su32(o + 144, x.u32_144)

    g.datapack_ref = x

    // e = ex_s_offset(o + 60, e, ex_bmg_demo_texture_anim, x.section_60, 'down');
    // e = ex_s_offset(o + 108, e, ex_bmg_demo_datapack_108, x.section_108, 'down');

    g.m = 0
    datapack_buffer = datapack_buffer.slice(0, io - o)

    buffer_array[buffer_array.length - 1] = datapack_buffer

    e = ex_bmg_demo_ordered(g.m, x.ordered[0])

    if (x.section_60.length) {
        dynamic_buffer = datapack_buffer
        let temp_offset = e
        su32(48, x.section_60.length)
        dynamic_buffer = ordered_buffer

        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_bmg_demo_texture_anim(g.tex_anims + (i * 12), e, x.section_60[i])
        }
    }

    dynamic_buffer = datapack_buffer

    ex_bmg_demo_index_patch_list(io)

    dynamic_buffer = datapack_buffer

    su32(0, ordered_buffer.byteLength)
    e = ex_bmg_demo_offset_patch_list(e) + index_patch_buffer.byteLength

    g.debug ? ex_debug(o, x.sec_id) : 0;

    return e
}

function ex_bmg_demo_basic_audio(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_bmg_demo_basic_audio_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_basic_audio_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_basic_audio_0_0(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
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
    su32(o + 68, x.u32_68)
    su32(o + 72, x.u32_72)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_offset_patch_list(o) {
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
function ex_bmg_demo_index_patch_list(o) {
    let section_length = divisible((g.texture_patch_array.length + g.animation_patch_array.length + g.sound_patch_array.length) * 8, 32)
    globalThis.index_patch_buffer = new ArrayBuffer(section_length)

    buffer_array.push(index_patch_buffer)
    dynamic_buffer = index_patch_buffer

    let i = 0
    for (let t_i = 0; t_i < g.texture_patch_array.length; t_i++,
    i++) {
        su32(i * 8, g.texture_patch_array[t_i][0])
        su16((i * 8) + 4, g.texture_patch_array[t_i][1])
        su16((i * 8) + 6, g.texture_patch_array[t_i][2])
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

function ex_bmg_demo_ordered(o, x) {
    globalThis.ordered_buffer = new ArrayBuffer(268435455)

    buffer_array.push(ordered_buffer)
    dynamic_buffer = ordered_buffer

    let aftero = o
    let e = o
    o = 0
    g.m = o
    g.unordered_ref = x.bmg_demo_unordered_list[0]
    g.ordered_ref = x

    ex_bmg_demo_unordered(x.bmg_demo_unordered_list[0])

    switch (g.file_dir_type) {
    case "interface":
        e = ex_bmg_demo_basic(o, x.bmg_demo_file_specific_section[0])
        break
    case "link":
        e = ex_bmg_demo_basic(o, x.bmg_demo_file_specific_section[0])
        break
    case "world":
        e = ex_bmg_demo_world(o, x.bmg_demo_file_specific_section[0])
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
function ex_bmg_demo_unordered(x) {
    generate_id_offset_array(g.bmg_demo_world_0_64_array = [], x.bmg_demo_world_0_64)
    generate_id_offset_array(g.bmg_demo_world_12_array = [], x.bmg_demo_world_12)
    generate_id_offset_array(g.bmg_demo_world_20_array = [], x.bmg_demo_world_20)
    generate_id_offset_array(g.bmg_demo_world_92_array = [], x.bmg_demo_world_92)
    generate_id_offset_array(g.bmg_demo_world_116_array = [], x.bmg_demo_world_116)
    generate_id_offset_array(g.bmg_demo_world_68_array = [], x.bmg_demo_world_68)
    generate_id_offset_array(g.bmg_demo_world_84_array = [], x.bmg_demo_world_84)
    generate_id_offset_array(g.bmg_demo_world_4_array = [], x.bmg_demo_world_4)
    generate_id_offset_array(g.bmg_demo_model_anim_1_type_a_array = [], x.bmg_demo_model_anim_1_type_a)
    generate_id_offset_array(g.bmg_demo_model_anim_2_type_a_array = [], x.bmg_demo_model_anim_2_type_a)
    generate_id_offset_array(g.bmg_demo_model_anim_3_array = [], x.bmg_demo_model_anim_3)
    generate_id_offset_array(g.bmg_demo_activator_array = [], x.bmg_demo_activator)
    generate_id_offset_array(g.bmg_demo_event_array = [], x.bmg_demo_event)
    generate_id_offset_array(g.bmg_demo_flag_array = [], x.bmg_demo_flag)
    generate_id_offset_array(g.bmg_demo_font_array = [], x.bmg_demo_font)
    generate_id_offset_array(g.bmg_demo_idk_array = [], x.bmg_demo_idk)
    generate_id_offset_array(g.bmg_demo_interface_array = [], x.bmg_demo_interface)
    generate_id_offset_array(g.bmg_demo_model_link_array = [], x.bmg_demo_model_link)
    generate_id_offset_array(g.bmg_demo_model_sub_link_array = [], x.bmg_demo_model_sub_link)
    generate_id_offset_array(g.bmg_demo_multi_font_array = [], x.bmg_demo_multi_font)
    generate_id_offset_array(g.bmg_demo_something_array = [], x.bmg_demo_something)
    generate_id_offset_array(g.bmg_demo_sound_controls_array = [], x.bmg_demo_sound_controls)
    generate_id_offset_array(g.bmg_demo_sound_section_array = [], x.bmg_demo_sound_section)
    generate_id_offset_array(g.bmg_demo_strange_array = [], x.bmg_demo_strange)
    generate_id_offset_array(g.bmg_demo_text_array = [], x.bmg_demo_text)
    generate_id_offset_array(g.bmg_demo_unknown_thing_array = [], x.bmg_demo_unknown_thing)
    generate_id_offset_array(g.bmg_demo_unknown_array = [], x.bmg_demo_unknown)
    generate_id_offset_array(g.bmg_demo_var_array = [], x.bmg_demo_var)
    generate_id_offset_array(g.bmg_demo_world_thing_array = [], x.bmg_demo_world_thing)
    generate_id_offset_array(g.bmg_demo_extended_world_link_array = [], x.bmg_demo_extended_world_link)
    generate_id_offset_array(g.bmg_demo_link_array = [], x.bmg_demo_link)
    generate_id_offset_array(g.bmg_demo_mysterious_array = [], x.bmg_demo_mysterious)
    generate_id_offset_array(g.bmg_demo_world_link_type_array = [], x.bmg_demo_world_link_type)
    generate_id_offset_array(g.bmg_demo_world_settings_array = [], x.bmg_demo_world_settings)

}

function ex_bmg_demo_ordered_list(o) {
    let e = o

    if (g.datapack_ref.section_60.length) {
        //this is calculated later
        g.tex_anims = e
        for (let i = 0; i < g.datapack_ref.section_60.length; i++) {
            g.oa.push(g.tex_anims + (i * 12))
        }
        e += divisible(g.datapack_ref.section_60.length * 12, 16)
    }

    // if (g.ordered_ref.pmwr_pc_model_animation_1.length) {
    //     e = ex_ma(g.ordered_ref.pmwr_pc_model_animation_1, g.pmwr_pc_model_animation_1_array, ex_pmwr_pc_model_animation_1, e, g.m)
    // }
    // if (g.ordered_ref.pmwr_pc_model_animation_2.length) {
    //     e = ex_ma(g.ordered_ref.pmwr_pc_model_animation_2, g.pmwr_pc_model_animation_2_array, ex_pmwr_pc_model_animation_2, e, g.m)
    // }

    // if (g.ordered_ref.pmwr_pc_textures.length) {
    //     dynamic_buffer = datapack_buffer

    //     su32(20, g.ordered_ref.pmwr_pc_textures.length)
    //     su32(24, e)
    //     dynamic_buffer = ordered_buffer

    //     let temp_offset = e
    //     e += divisible(g.ordered_ref.pmwr_pc_textures.length * 64, g.divisibility) + g.ordered_ref.pmwr_pc_texturepadding
    //     for (let i = 0; i < g.ordered_ref.pmwr_pc_textures.length; i++) {
    //         e = ex_pmwr_pc_textures(temp_offset + (i * 64), e, g.ordered_ref.pmwr_pc_textures[i])
    //     }
    //     ;if (g.console === 'ps2') {
    //         e += 16
    //     }
    // }

    // e = dyn_multiappend(g.ordered_ref.pmwr_pc_models, model_array, dyn_model, mid_section_2 + 16, mid)
    // e = ex_ml(g.ordered_ref.pmwr_pc_models, g.pmwr_pc_link_array, ex_pmwr_pc_link, g.unordered_ref.pmwr_pc_link, o + 0, e, 'up');

    // e = ex_s_offset(g.datapack_offset + 24, e, ex_pmwr_pc_textures, g.ordered_ref.pmwr_pc_textures, null)

    // e = ex_ml(g.ordered_ref.pmwr_pc_textures, null , ex_pmwr_pc_texture, g.ordered_ref.pmwr_pc_textures, g.datapack_offset + 0, e, 'up');

    return e
}
function ex_bmg_demo_basic(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_basic_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_basic_4(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_bmg_demo_ordered_list(e)

    switch (g.file_dir_type) {
    case "interface":
        e = ex_ml(x.section_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');
        break
    case "link":
        e = ex_ml(x.section_0, g.bmg_demo_link_array, ex_bmg_demo_link, g.unordered_ref.bmg_demo_link, o + 0, e, 'down');
        break
    default:
        console.pk_log('file type is not set')
    }

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_texture_anim(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_bmg_demo_texture_anim_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_datapack_108(o, e, x) {

    e = ex_s_offset(o + 4, e, ex_bmg_demo_text, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_world(o, x) {
    let e = o + 320
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +64, x.u32_64)
    //amount?   su32(o +80, x.u32_80)
    //amount?   su32(o +88, x.u32_88)
    //amount?   su32(o +112, x.u32_112)
    su32(o + 204, x.u32_204)
    su8(o + 240, x.u8_240)
    su8(o + 241, x.u8_241)
    su8(o + 242, x.u8_242)
    su8(o + 243, x.u8_243)
    su32(o + 244, x.u32_244)
    su32(o + 248, x.u32_248)
    su32(o + 256, x.u32_256)
    su8(o + 260, x.u8_260)
    su8(o + 261, x.u8_261)
    su8(o + 262, x.u8_262)
    su8(o + 263, x.u8_263)
    su8(o + 264, x.u8_264)
    su8(o + 265, x.u8_265)
    su8(o + 266, x.u8_266)
    su8(o + 267, x.u8_267)
    su32(o + 272, x.u32_272)
    su8(o + 276, x.u8_276)
    su8(o + 277, x.u8_277)
    su8(o + 278, x.u8_278)
    su8(o + 279, x.u8_279)
    su32(o + 280, x.u32_280)
    su8(o + 284, x.u8_284)
    su8(o + 285, x.u8_285)
    su8(o + 286, x.u8_286)
    su8(o + 287, x.u8_287)
    su8(o + 288, x.u8_288)
    su8(o + 289, x.u8_289)
    su8(o + 290, x.u8_290)
    su32(o + 292, x.u32_292)
    su8(o + 296, x.u8_296)
    su8(o + 297, x.u8_297)
    su8(o + 298, x.u8_298)
    su8(o + 299, x.u8_299)
    su32(o + 300, x.u32_300)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_world_0, x.section_0, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_4_4, g.bmg_demo_world_4_array, ex_bmg_demo_world_4, g.unordered_ref.bmg_demo_world_4, o + 4, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_12_12, g.bmg_demo_world_12_array, ex_bmg_demo_world_12, g.unordered_ref.bmg_demo_world_12, o + 12, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_20_20, g.bmg_demo_world_20_array, ex_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20, o + 20, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_28_28, g.bmg_demo_world_28_array, ex_bmg_demo_world_28, g.unordered_ref.bmg_demo_world_28, o + 28, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_68_68, g.bmg_demo_world_68_array, ex_bmg_demo_world_68, g.unordered_ref.bmg_demo_world_68, o + 68, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_84_84, g.bmg_demo_world_84_array, ex_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84, o + 84, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_92_92, g.bmg_demo_world_92_array, ex_bmg_demo_world_92, g.unordered_ref.bmg_demo_world_92, o + 92, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_116_116, g.bmg_demo_world_116_array, ex_bmg_demo_world_116, g.unordered_ref.bmg_demo_world_116, o + 116, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_120_120, g.bmg_demo_world_120_array, ex_bmg_demo_world_120, g.unordered_ref.bmg_demo_world_120, o + 120, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_settings_172, g.bmg_demo_world_settings_array, ex_bmg_demo_world_settings, g.unordered_ref.bmg_demo_world_settings, o + 172, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_176_176, g.bmg_demo_world_176_array, ex_bmg_demo_world_176, g.unordered_ref.bmg_demo_world_176, o + 176, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_208_208, g.bmg_demo_world_208_array, ex_bmg_demo_world_208, g.unordered_ref.bmg_demo_world_208, o + 208, e, 'down');

    e = ex_bmg_demo_ordered_list(e)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_0(o, x) {
    let e = o + 96
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
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
    su32(o + 68, x.u32_68)

    e = ex_s_offset(o + 32, e, ex_bmg_demo_world_0_32, x.section_32, 'down');
    if (x.section_64.length) {
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_bmg_demo_world_0_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;//     if(x.section_76.length){
    //         su32(o + ___$$$___,x.section_76.length)
    //         su32(o + 76, e - g.m)
    //         g.oa.push(o + 76)
    //         let temp_offset = e 
    //         e += divisible(x.section_76.length * 4, 16) 
    //         for (let i = 0; i < x.section_76.length; i++) { 
    //             e = ex_bmg_demo_world_0_64(temp_offset + (i * 4), e, x.section_76[i])
    //         };
    // };

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_0_64(o, e, x) {

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_0_32(o, x) {
    let e = o + 48

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_12(o, x) {
    let e = o + 160
    su32(o + 0, x.u32_0)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    sf32(o + 44, x.f32_44)
    su8(o + 64, x.u8_64)
    su8(o + 65, x.u8_65)
    su8(o + 66, x.u8_66)
    su8(o + 67, x.u8_67)
    su8(o + 70, x.u8_70)
    su8(o + 71, x.u8_71)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    su8(o + 110, x.u8_110)
    su8(o + 111, x.u8_111)
    su8(o + 114, x.u8_114)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)
    su32(o + 132, x.u32_132)

    e = ex_ml(x.unordered_bmg_demo_world_link_type_60, g.bmg_demo_world_link_type_array, ex_bmg_demo_world_link_type, g.unordered_ref.bmg_demo_world_link_type, o + 60, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_20(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su16(o + 14, x.u16_14)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    su8(o + 82, x.u8_82)
    sf32(o + 84, x.f32_84)

    e = ex_s_offset(o + 64, e, ex_bmg_demo_model_anim_1_type_a, x.section_64, 'down');
    e = ex_s_offset(o + 72, e, ex_bmg_demo_idk, x.section_72, 'down');
    e = ex_s_offset(o + 76, e, ex_bmg_demo_model_link, x.section_76, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_92(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)

    e = ex_s_offset(o + 64, e, ex_bmg_demo_idk, x.section_64, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_116(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    sf32(o + 32, x.f32_32)
    sf32(o + 52, x.f32_52)
    sf32(o + 72, x.f32_72)
    sf32(o + 92, x.f32_92)
    ex_patch(o + 100, g.model_array, x.model_100)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    //amount?   su32(o +40, x.u32_40)
    su32(o + 52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)
    su8(o + 84, x.u8_84)
    su8(o + 85, x.u8_85)
    su8(o + 86, x.u8_86)
    su8(o + 87, x.u8_87)

    if (x.section_56.length) {
        // su32(o + ___$$$___,x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 32, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_bmg_demo_world_28_56(temp_offset + (i * 32), e, x.section_56[i])
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
            e = ex_bmg_demo_world_28_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 72, e, ex_bmg_demo_world_28_72, x.section_72, 'down');
    e = ex_s_offset(o + 76, e, ex_bmg_demo_world_28_76, x.section_76, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28_76(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bmg_demo_world_28_76_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28_72(o, x) {
    let e = o + 32

    if (x.section_0.length) {
        // su32(o + ???,x.section_0.length)
        // amount set in prior section
        su32(o + 0, e - g.m)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_0.length * 4, 16)
        for (let i = 0; i < x.section_0.length; i++) {
            e = ex_bmg_demo_world_28_72_0(temp_offset + (i * 4), e, x.section_0[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28_72_0(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_world_116_0, g.bmg_demo_world_116_array, ex_bmg_demo_world_116, g.unordered_ref.bmg_demo_world_116, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28_64(o, e, x) {
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28_56(o, e, x) {
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

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_28_76_8(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_world_92_0, g.bmg_demo_world_92_array, ex_bmg_demo_world_92, g.unordered_ref.bmg_demo_world_92, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_68(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su16(o + 14, x.u16_14)
    su16(o + 18, x.u16_18)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)

    e = ex_ml(x.section_64, g.bmg_demo_activator_array, ex_bmg_demo_activator, g.unordered_ref.bmg_demo_activator, o + 64, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_84(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)
    sf32(o + 44, x.f32_44)
    su32(o + 60, x.u32_60)

    e = ex_s_offset(o + 64, e, ex_bmg_demo_world_12, x.section_64, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_4(o, x) {
    let e = o + 64
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 48, x.u32_48)

    e = ex_s_offset(o + 16, e, ex_bmg_demo_world_4_16, x.section_16, 'down');
    e = ex_ml(x.unordered_bmg_demo_world_4_20, g.bmg_demo_world_4_array, ex_bmg_demo_world_4, g.unordered_ref.bmg_demo_world_4, o + 20, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_4_16(o, x) {
    let e = o + 96

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_120(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_208(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_world_thing_0, g.bmg_demo_world_thing_array, ex_bmg_demo_world_thing, g.unordered_ref.bmg_demo_world_thing, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_176(o, x) {
    let e = o + 128
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_world_176_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bmg_demo_world_176_12(temp_offset + (i * 4), e, x.section_12[i])
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
            e = ex_bmg_demo_world_176_20(temp_offset + (i * 4), e, x.section_20[i])
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
            e = ex_bmg_demo_world_176_28(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_176_4(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_flag_0, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_176_12(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_var_0, g.bmg_demo_var_array, ex_bmg_demo_var, g.unordered_ref.bmg_demo_var, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_176_20(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_something_0, g.bmg_demo_something_array, ex_bmg_demo_something, g.unordered_ref.bmg_demo_something, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_176_28(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_flag_0, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_activator(o, x) {
    let e = o + 256
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    su32(o + 36, x.u32_36)
    su32(o + 120, x.u32_120)
    su32(o + 148, x.u32_148)
    su8(o + 158, x.u8_158)
    su8(o + 180, x.u8_180)
    sf32(o + 184, x.f32_184)
    //amount?   su32(o +216, x.u32_216)
    su32(o + 224, x.u32_224)
    //amount?   su32(o +232, x.u32_232)
    su32(o + 248, x.u32_248)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_ml(x.unordered_bmg_demo_model_anim_2_type_a_8, g.bmg_demo_model_anim_2_type_a_array, ex_bmg_demo_model_anim_2_type_a, g.unordered_ref.bmg_demo_model_anim_2_type_a, o + 8, e, 'down');
    e = ex_s_offset(o + 28, e, ex_bmg_demo_activator_28, x.section_28, 'down');
    e = ex_s_offset(o + 108, e, ex_bmg_demo_activator_108, x.section_108, 'down');
    e = ex_s_offset(o + 188, e, ex_bmg_demo_activator_188, x.section_188, 'down');
    if (x.section_220.length) {
        su32(o + 216, x.section_220.length)
        su32(o + 220, e - g.m)
        g.oa.push(o + 220)
        let temp_offset = e
        e += divisible(x.section_220.length * 28, 16)
        for (let i = 0; i < x.section_220.length; i++) {
            e = ex_bmg_demo_activator_220(temp_offset + (i * 28), e, x.section_220[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 228, e, ex_bmg_demo_activator_228, x.section_228, 'down');
    if (x.section_236.length) {
        su32(o + 232, x.section_236.length)
        su32(o + 236, e - g.m)
        g.oa.push(o + 236)
        let temp_offset = e
        e += divisible(x.section_236.length * 36, 16)
        for (let i = 0; i < x.section_236.length; i++) {
            e = ex_bmg_demo_activator_236(temp_offset + (i * 36), e, x.section_236[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 252, e, ex_bmg_demo_activator_252, x.section_252, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_28(o, x) {
    let e = o + 32
    sf32(o + 8, x.f32_8)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_108(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_activator_108_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bmg_demo_activator_108_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_108_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_108_8(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_activator_108_8_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_108_8_0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_activator_108_8_0_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_108_8_0_4(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_188(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_220(o, e, x) {
    su8(o + 4, x.u8_4)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 8, e, ex_bmg_demo_activator_220_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_220_8(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_flag_0, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_228(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_activator_228_4, x.section_4, 'down');
    e = ex_s_offset(o + 12, e, ex_bmg_demo_activator_228_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bmg_demo_activator_228_20(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_228_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_228_12(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 4, e, ex_bmg_demo_activator_228_12_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_228_12_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_228_20(o, e, x) {
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 12, e, ex_bmg_demo_activator_228_20_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_228_20_12(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su8(o + 24, x.u8_24)
    //amount?   su32(o +28, x.u32_28)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_activator_236_4, x.section_4, 'down');
    e = ex_string(o + 8, e, x.section_8)
    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 88, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_bmg_demo_activator_236_32(temp_offset + (i * 88), e, x.section_32[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_activator_236_4_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_4_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32(o, e, x) {
    su32(o + 4, x.u32_4)
    sf32(o + 28, x.f32_28)
    su32(o + 40, x.u32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    su8(o + 62, x.u8_62)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    //amount?   su32(o +72, x.u32_72)
    su32(o + 80, x.u32_80)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 8, e, ex_bmg_demo_activator_236_32_8, x.section_8, 'down');
    e = ex_s_offset(o + 16, e, ex_bmg_demo_activator_236_32_16, x.section_16, 'down');
    if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e - g.m)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 16, 16)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_bmg_demo_activator_236_32_76(temp_offset + (i * 16), e, x.section_76[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 84, e, ex_bmg_demo_activator_236_32_84, x.section_84, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_8(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_model_link_0, g.bmg_demo_model_link_array, ex_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_16(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_76(o, e, x) {
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_4) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_activator_236_32_76_12t0, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_activator_236_32_76_12t8, x.section_12, 'down');
        break;
    case 23:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_activator_236_32_76_12t23, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_76_12t0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_76_12t8(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    e = ex_ml(x.unordered_bmg_demo_mysterious_4, g.bmg_demo_mysterious_array, ex_bmg_demo_mysterious, g.unordered_ref.bmg_demo_mysterious, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_76_12t23(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    e = ex_ml(x.unordered_bmg_demo_mysterious_4, g.bmg_demo_mysterious_array, ex_bmg_demo_mysterious, g.unordered_ref.bmg_demo_mysterious, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_236_32_84(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_activator_252(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    e = ex_ml(x.unordered_bmg_demo_mysterious_4, g.bmg_demo_mysterious_array, ex_bmg_demo_mysterious, g.unordered_ref.bmg_demo_mysterious, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    //amount?   su32(o +8, x.u32_8)

    e = ex_string(o + 0, e, x.section_0)
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 28, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bmg_demo_event_12(temp_offset + (i * 28), e, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12(o, e, x) {
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_8) {
    case 2:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t2, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t5, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t7, x.section_12, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t14, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t15, x.section_12, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t17, x.section_12, 'down');
        break;
    case 19:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t19, x.section_12, 'down');
        break;
    case 34:
        e = ex_ml(x.section_12, g.bmg_demo_event_array, ex_bmg_demo_event, g.unordered_ref.bmg_demo_event, o + 12, e, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t2(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_event_12_12t2_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t2_4(o, x) {
    let e = o + 64
    su8(o + 1, x.u8_1)
    su32(o + 20, x.u32_20)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_16, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 16, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t5(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)

    switch (x.u8_4) {
    case 1:
        e = ex_s_offset(o + 0, e, ex_bmg_demo_event_12_12t5_0t1, x.section_0, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 0, e, ex_bmg_demo_event_12_12t5_0t2, x.section_0, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t5_0t1(o, x) {
    let e = o + 32
    su8(o + 5, x.u8_5)

    e = ex_ml(x.unordered_bmg_demo_interface_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');
    e = ex_s_offset(o + 8, e, ex_bmg_demo_event_12_12t5_0t1_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t5_0t1_8(o, x) {
    let e = o + 32
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_bmg_demo_event_12_12t5_0t1_8_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t5_0t1_8_12(o, x) {
    let e = o + 32
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t5_0t2(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_ml(x.unordered_bmg_demo_interface_4, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t7(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 8, x.f32_8)

    e = ex_ml(x.unordered_bmg_demo_flag_4, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t14(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t15(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t17(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t19(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    sf32(o + 12, x.f32_12)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_event_12_12t23(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_unknown_0, g.bmg_demo_unknown_array, ex_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown, o + 0, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    su8(o + 44, x.u8_44)

    e = ex_string(o + 8, e, x.section_8)
    switch (x.u32_16) {
    case 0:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t0, x.section_20, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t1, x.section_20, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t2, x.section_20, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t3, x.section_20, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t8, x.section_20, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t9, x.section_20, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 20, e, ex_bmg_demo_flag_20t10, x.section_20, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t1(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t2(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t3(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t8(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_flag_0, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t9(o, x) {
    let e = o + 32
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_bmg_demo_flag_20t9_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t9_12(o, x) {
    let e = o + 32
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t10(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_flag_20t10_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_flag_20t10_4(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_font(o, x) {
    let e = o + 64
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)

    e = ex_ml(x.unordered_bmg_demo_model_anim_3_4, g.bmg_demo_model_anim_3_array, ex_bmg_demo_model_anim_3, g.ordered_ref.bmg_demo_model_anim_3, o + 4, e, 'down');
    e = ex_s_offset(o + 20, e, ex_bmg_demo_font_20, x.section_20, 'down');
    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_bmg_demo_font_28(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_font_20(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_font_28(o, e, x) {
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk(o, x) {
    let e = o + 96
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +52, x.u32_52)
    su8(o + 64, x.u8_64)
    su8(o + 65, x.u8_65)
    su8(o + 66, x.u8_66)
    su8(o + 67, x.u8_67)

    switch (x.u8_0) {
    case 1:
        e = ex_ml(x.section_4, g.bmg_demo_model_link_array, ex_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link, o + 4, e, 'down');
        break;
    }
    e = ex_s_offset(o + 24, e, ex_bmg_demo_idk_24, x.section_24, 'down');
    e = ex_ml(x.unordered_bmg_demo_mysterious_56, g.bmg_demo_mysterious_array, ex_bmg_demo_mysterious, g.unordered_ref.bmg_demo_mysterious, o + 56, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24(o, x) {
    let e = o + 96
    sf32(o + 4, x.f32_4)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 32, x.u32_32)
    su8(o + 36, x.u8_36)
    su8(o + 37, x.u8_37)
    su8(o + 38, x.u8_38)
    su8(o + 39, x.u8_39)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)

    e = ex_ml(x.unordered_bmg_demo_world_thing_40, g.bmg_demo_world_thing_array, ex_bmg_demo_world_thing, g.unordered_ref.bmg_demo_world_thing, o + 40, e, 'down');
    e = ex_s_offset(o + 48, e, ex_bmg_demo_idk_24_48, x.section_48, 'down');
    e = ex_s_offset(o + 60, e, ex_bmg_demo_idk_24_60, x.section_60, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24_48(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24_60(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_idk_24_60_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bmg_demo_idk_24_60_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24_60_4(o, x) {
    let e = o + 32
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24_60_8(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_idk_24_60_8_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24_60_8_0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_idk_24_60_8_0_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_idk_24_60_8_0_4(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface(o, x) {
    let e = o + 96
    su8(o + 5, x.u8_5)
    su8(o + 7, x.u8_7)
    su32(o + 8, x.u32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    sf32(o + 32, x.f32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    sf32(o + 60, x.f32_60)
    //amount?   su32(o +68, x.u32_68)
    //amount?   su32(o +76, x.u32_76)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_ml(x.unordered_bmg_demo_sound_controls_16, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 16, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_sound_controls_20, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 20, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_sound_controls_28, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 28, e, 'down');
    e = ex_s_offset(o + 48, e, ex_bmg_demo_interface_48, x.section_48, 'down');
    e = ex_s_offset(o + 52, e, ex_bmg_demo_interface_52, x.section_52, 'down');
    e = ex_s_offset(o + 64, e, ex_bmg_demo_interface_64, x.section_64, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 28, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_bmg_demo_interface_72(temp_offset + (i * 28), e, x.section_72[i])
        }
        ;
    }
    ;if (x.section_80.length) {
        su32(o + 76, x.section_80.length)
        su32(o + 80, e - g.m)
        g.oa.push(o + 80)
        let temp_offset = e
        e += divisible(x.section_80.length * 100, 16)
        for (let i = 0; i < x.section_80.length; i++) {
            e = ex_bmg_demo_interface_80(temp_offset + (i * 100), e, x.section_80[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_48(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_52(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_interface_52_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_52_0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 36, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_interface_64_4(temp_offset + (i * 36), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4(o, e, x) {
    su8(o + 4, x.u8_4)
    su8(o + 7, x.u8_7)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u8_4) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_64_4_12t1, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_64_4_12t5, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_64_4_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_64_4_12t8, x.section_12, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_64_4_12t10, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t1(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_64_4_12t1_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t1_4(o, x) {
    let e = o + 32
    su8(o + 12, x.u8_12)
    su32(o + 16, x.u32_16)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t5(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t7(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t8(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_interface_64_4_12t8_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t8_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_64_4_12t10(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_flag_0, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_4, x.section_4, 'down');
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bmg_demo_interface_72_16(temp_offset + (i * 8), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 40, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bmg_demo_interface_72_24(temp_offset + (i * 40), e, x.section_24[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_16(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 2:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_16_4t2, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_16_4t3, x.section_4, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_16_4t2(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_16_4t3(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    e = ex_string(o + 4, e, x.section_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 1:
    case 31:
        e = ex_ml(x.section_4, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 4, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_24_4t11, x.section_4, 'down');
        break;
    }
    e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_72_24_12, x.section_12, 'down');
    e = ex_ml(x.unordered_bmg_demo_sound_controls_28, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 28, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 16, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_interface_72_24_4t11_4(temp_offset + (i * 16), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11_4(o, e, x) {
    su8(o + 9, x.u8_9)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u8_9) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_72_24_4t11_4_12t0, x.section_12, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_72_24_4t11_4_12t1, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11_4_12t0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su32(o + 8, x.u32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11_4_12t1(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_interface_72_24_4t11_4_12t1_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_24_4t11_4_12t1_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11_4_12t1_0(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_24_4t11_4_12t1_0_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11_4_12t1_0_4(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_4t11_4_12t1_4(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_12(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_interface_72_24_12_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_72_24_12_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_12_0(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_72_24_12_4(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80(o, e, x) {
    su8(o + 8, x.u8_8)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 20, x.u32_20)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    su32(o + 56, x.u32_56)
    //amount?   su32(o +64, x.u32_64)
    su8(o + 72, x.u8_72)
    su8(o + 73, x.u8_73)
    su8(o + 74, x.u8_74)
    su8(o + 75, x.u8_75)
    su8(o + 76, x.u8_76)
    su8(o + 77, x.u8_77)
    su8(o + 78, x.u8_78)
    su8(o + 79, x.u8_79)
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

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_80_12, x.section_12, 'down');
    e = ex_string(o + 16, e, x.section_16)
    e = ex_s_offset(o + 32, e, ex_bmg_demo_interface_80_32, x.section_32, 'down');
    switch (x.u8_26) {
    case 0:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t0, x.section_36, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t1, x.section_36, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t6, x.section_36, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t7, x.section_36, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t10, x.section_36, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t12, x.section_36, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t13, x.section_36, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t14, x.section_36, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_36t15, x.section_36, 'down');
        break;
    }
    e = ex_s_offset(o + 40, e, ex_bmg_demo_interface_80_40, x.section_40, 'down');
    e = ex_s_offset(o + 52, e, ex_bmg_demo_interface_80_52, x.section_52, 'down');
    if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e - g.m)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 12, 16)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_bmg_demo_interface_80_68(temp_offset + (i * 12), e, x.section_68[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_12(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_32(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bmg_demo_interface_80_32_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_32_8(o, e, x) {
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_80_32_8_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_32_8_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    ex_patch(o + 4, g.texture_patch_array, x.texture_4)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)

    e = ex_s_offset(o + 8, e, ex_bmg_demo_interface_80_36t0_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t0_8(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)
    su8(o + 16, x.u8_16)
    su8(o + 19, x.u8_19)
    su32(o + 20, x.u32_20)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_interface_80_36t0_8_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t0_8_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    sf32(o + 28, x.f32_28)

    e = ex_ml(x.unordered_bmg_demo_text_4, g.bmg_demo_text_array, ex_bmg_demo_text, g.unordered_ref.bmg_demo_text, o + 4, e, 'down');
    switch (x.u8_0) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_interface_80_36t1_8t1, x.section_8, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_interface_80_36t1_8t3, x.section_8, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_interface_80_36t1_8t4, x.section_8, 'down');
        break;
    }
    switch (x.u8_2) {
    case 0:
        e = ex_ml(x.section_12, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 12, e, 'down');
        break;
    case 1:
        e = ex_ml(x.section_12, g.bmg_demo_multi_font_array, ex_bmg_demo_multi_font, g.unordered_ref.bmg_demo_multi_font, o + 12, e, 'down');
        break;
    }
    e = ex_s_offset(o + 16, e, ex_bmg_demo_interface_80_36t1_16, x.section_16, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_8t1(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 11, x.u8_11)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_interface_80_36t1_8t1_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_8t1_4(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_text_0, g.bmg_demo_text_array, ex_bmg_demo_text, g.unordered_ref.bmg_demo_text, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_8t3(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_8t4(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_80_36t1_8t4_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_8t4_4(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_80_36t1_8t4_4_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_8t4_4_4(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t1_16(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t6(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_bmg_demo_interface_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');
    e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_80_36t6_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t6_12(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su8(o + 16, x.u8_16)
    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t7(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_interface_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t10(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t12(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t13(o, x) {
    let e = o + 32
    su8(o + 1, x.u8_1)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_80_36t13_4, x.section_4, 'down');
    e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_80_36t13_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t13_4(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    su32(o + 8, x.u32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t13_12(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t14(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_80_36t14_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t14_4(o, x) {
    let e = o + 32
    su8(o + 2, x.u8_2)
    su8(o + 8, x.u8_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t15(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_interface_80_36t15_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t15_0(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_bmg_demo_interface_80_36t15_0_16, x.section_16, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t15_0_16(o, x) {
    let e = o + 64
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su8(o + 4, x.u8_4)
    su32(o + 8, x.u32_8)
    sf32(o + 28, x.f32_28)
    sf32(o + 36, x.f32_36)
    su32(o + 40, x.u32_40)
    //amount?   su32(o +44, x.u32_44)
    //amount?   su32(o +52, x.u32_52)

    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 12, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_bmg_demo_interface_80_36t15_0_16_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 32, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_bmg_demo_interface_80_36t15_0_16_56(temp_offset + (i * 32), e, x.section_56[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t15_0_16_48(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_36t15_0_16_56(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_40(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su32(o + 32, x.u32_32)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)

    e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_40_36, x.section_36, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_40_36(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 20, x.u32_20)

    e = ex_s_offset(o + 24, e, ex_bmg_demo_interface_80_40_36_24, x.section_24, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_40_36_24(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_52(o, x) {
    let e = o + 64
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
            e = ex_bmg_demo_interface_80_52_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 12, e, ex_bmg_demo_interface_80_52_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bmg_demo_interface_80_52_20(temp_offset + (i * 32), e, x.section_20[i])
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
            e = ex_bmg_demo_interface_80_52_28(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 36, e, ex_bmg_demo_interface_80_52_36, x.section_36, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_52_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_52_12(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su8(o + 17, x.u8_17)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_52_20(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_52_28(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_52_36(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 17, x.u8_17)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_interface_80_68_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4(o, x) {
    let e = o + 64
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
        e += divisible(x.section_4.length * 24, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_interface_80_68_4_4(temp_offset + (i * 24), e, x.section_4[i])
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
            e = ex_bmg_demo_interface_80_68_4_12(temp_offset + (i * 32), e, x.section_12[i])
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
            e = ex_bmg_demo_interface_80_68_4_20(temp_offset + (i * 32), e, x.section_20[i])
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
            e = ex_bmg_demo_interface_80_68_4_28(temp_offset + (i * 32), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_bmg_demo_interface_80_68_4_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 44, e, ex_bmg_demo_interface_80_68_4_44, x.section_44, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4_4(o, e, x) {
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4_20(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4_28(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4_36(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_interface_80_68_4_44(o, x) {
    let e = o + 64
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_link(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    sf32(o + 20, x.f32_20)
    su8(o + 24, x.u8_24)
    su8(o + 25, x.u8_25)
    su8(o + 26, x.u8_26)
    //amount?   su32(o +52, x.u32_52)

    e = ex_string(o + 4, e, x.section_4)
    e = ex_string(o + 8, e, x.section_8)
    e = ex_ml(x.unordered_bmg_demo_model_sub_link_12, g.bmg_demo_model_sub_link_array, ex_bmg_demo_model_sub_link, g.unordered_ref.bmg_demo_model_sub_link, o + 12, e, 'down');
    e = ex_s_offset(o + 16, e, ex_bmg_demo_model_anim_1_type_a, x.section_16, 'down');
    e = ex_s_offset(o + 28, e, ex_bmg_demo_model_link_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_bmg_demo_model_link_32, x.section_32, 'down');
    e = ex_s_offset(o + 48, e, ex_bmg_demo_model_link_48, x.section_48, 'down');
    e = ex_ml(x.unordered_bmg_demo_mysterious_56, g.bmg_demo_mysterious_array, ex_bmg_demo_mysterious, g.unordered_ref.bmg_demo_mysterious, o + 56, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_link_28(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_link_32(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_link_48(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_sub_link(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +12, x.u32_12)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_model_anim_2_type_b, x.section_0, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bmg_demo_model_sub_link_8(temp_offset + (i * 4), e, x.section_8[i])
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
            e = ex_bmg_demo_model_sub_link_16(temp_offset + (i * 8), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_sub_link_8(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_sub_link_16(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)
    su8(o + 5, x.u8_5)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_multi_font(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_multi_font_4t0, x.section_4, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_multi_font_4t1, x.section_4, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_multi_font_4t0(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_bmg_demo_font_12, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 12, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_font_28, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 28, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_font_32, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 32, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_multi_font_4t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_bmg_demo_font_12, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 12, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_font_16, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 16, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_font_20, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 20, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_something(o, x) {
    let e = o + 64
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 48, x.u32_48)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_sound_controls(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)
    su8(o + 10, x.u8_10)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 16, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bmg_demo_sound_controls_16(temp_offset + (i * 16), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_sound_controls_16(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    sf32(o + 12, x.f32_12)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_sound_controls_16_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_sound_controls_16_4(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_sound_section_0, g.bmg_demo_sound_section_array, ex_bmg_demo_sound_section, g.unordered_ref.bmg_demo_sound_section, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_sound_section(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.sound_patch_array, x.sound_0)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 24, e, ex_bmg_demo_sound_section_24, x.section_24, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_sound_section_24(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_strange(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 32, x.f32_32)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_strange_4, x.section_4, 'down');
    e = ex_ml(x.unordered_bmg_demo_sound_controls_28, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 28, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_strange_4(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_unknown_0, g.bmg_demo_unknown_array, ex_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_text(o, x) {
    let e = o + 32

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    //amount?   su32(o +12, x.u32_12)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bmg_demo_unknown_thing_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;switch (x.u8_20) {
    case 0:
        e = ex_s_offset(o + 24, e, ex_bmg_demo_unknown_thing_24t0, x.section_24, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 24, e, ex_bmg_demo_unknown_thing_24t1, x.section_24, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 24, e, ex_bmg_demo_unknown_thing_24t2, x.section_24, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_16(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t0(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    su8(o + 60, x.u8_60)
    sf32(o + 64, x.f32_64)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_unknown_thing_24t0_4, x.section_4, 'down');
    e = ex_s_offset(o + 32, e, ex_bmg_demo_unknown_thing_24t0_32, x.section_32, 'down');
    e = ex_s_offset(o + 44, e, ex_bmg_demo_unknown_thing_24t0_44, x.section_44, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t0_4(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t0_32(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t0_44(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1(o, x) {
    let e = o + 96
    //amount?   su32(o +0, x.u32_0)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +68, x.u32_68)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_unknown_thing_24t1_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e - g.m)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 12, 16)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_bmg_demo_unknown_thing_24t1_52(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e - g.m)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 12, 16)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_bmg_demo_unknown_thing_24t1_60(temp_offset + (i * 12), e, x.section_60[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 64, e, ex_bmg_demo_unknown_thing_24t1_64, x.section_64, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 8, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_bmg_demo_unknown_thing_24t1_72(temp_offset + (i * 8), e, x.section_72[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1_52(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1_60(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1_64(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 8, x.u8_8)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1_72(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_unknown_thing_24t1_72_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t1_72_4(o, e, x) {

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t2(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    su8(o + 24, x.u8_24)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_unknown_thing_24t2_4, x.section_4, 'down');
    e = ex_s_offset(o + 20, e, ex_bmg_demo_unknown_thing_24t2_20, x.section_20, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t2_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_thing_24t2_20(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 16, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_unknown_4(temp_offset + (i * 16), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4(o, e, x) {
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.bmg_demo_unknown_thing_array, ex_bmg_demo_unknown_thing, g.unordered_ref.bmg_demo_unknown_thing, o + 4, e, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_unknown_4_4t5, x.section_4, 'down');
        break;
    case 9:
        e = ex_ml(x.section_4, g.bmg_demo_sound_section_array, ex_bmg_demo_sound_section, g.unordered_ref.bmg_demo_sound_section, o + 4, e, 'down');
        break;
    case 26:
        e = ex_ml(x.section_4, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 4, e, 'down');
        break;
    }
    switch (x.u32_0) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_unknown_4_8t1, x.section_8, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_unknown_4_8t5, x.section_8, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_unknown_4_8t9, x.section_8, 'down');
        break;
    case 26:
        e = ex_s_offset(o + 8, e, ex_bmg_demo_unknown_4_8t26, x.section_8, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5(o, x) {
    let e = o + 64
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)
    su32(o + 36, x.u32_36)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_unknown_4_4t5_0, x.section_0, 'down');
    e = ex_s_offset(o + 24, e, ex_bmg_demo_unknown_4_4t5_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_bmg_demo_unknown_4_4t5_32, x.section_32, 'down');
    e = ex_s_offset(o + 40, e, ex_bmg_demo_unknown_4_4t5_40, x.section_40, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_24(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_unknown_4_4t5_24_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_24_4(o, x) {
    let e = o + 64
    sf32(o + 12, x.f32_12)
    sf32(o + 20, x.f32_20)
    su8(o + 28, x.u8_28)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_32(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_unknown_4_4t5_32_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_32_4(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_unknown_4_4t5_32_4_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_32_4_0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_unknown_4_4t5_32_4_0_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_32_4_0_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_4t5_40(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_8t1(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 40, x.u8_40)
    su8(o + 42, x.u8_42)

    e = ex_s_offset(o + 48, e, ex_bmg_demo_unknown_4_8t1_48, x.section_48, 'down');
    e = ex_s_offset(o + 52, e, ex_bmg_demo_unknown_4_8t1_52, x.section_52, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_8t1_48(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_8t1_52(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_8t5(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_8t9(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_unknown_4_8t26(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var(o, x) {
    let e = o + 192
    su32(o + 152, x.u32_152)
    //amount?   su32(o +164, x.u32_164)

    e = ex_string(o + 148, e, x.section_148)
    e = ex_s_offset(o + 156, e, ex_bmg_demo_var_156, x.section_156, 'down');
    if (x.section_168.length) {
        su32(o + 164, x.section_168.length)
        su32(o + 168, e - g.m)
        g.oa.push(o + 168)
        let temp_offset = e
        e += divisible(x.section_168.length * 36, 16)
        for (let i = 0; i < x.section_168.length; i++) {
            e = ex_bmg_demo_var_168(temp_offset + (i * 36), e, x.section_168[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_156(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_var_0, g.bmg_demo_var_array, ex_bmg_demo_var, g.unordered_ref.bmg_demo_var, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168(o, e, x) {
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_string(o + 8, e, x.section_8)
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 20, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bmg_demo_var_168_16(temp_offset + (i * 20), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 28, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bmg_demo_var_168_24(temp_offset + (i * 28), e, x.section_24[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16(o, e, x) {
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_4) {
    case 7:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t8, x.section_12, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t12, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t15, x.section_12, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t18, x.section_12, 'down');
        break;
    case 21:
        e = ex_ml(x.section_12, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 12, e, 'down');
        break;
    case 25:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t25, x.section_12, 'down');
        break;
    }
    e = ex_s_offset(o + 16, e, ex_bmg_demo_var_168_16_16, x.section_16, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t7(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t8(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_ml(x.unordered_bmg_demo_world_20_8, g.bmg_demo_world_20_array, ex_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20, o + 8, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t12(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 8, x.f32_8)

    switch (x.u8_0) {
    case 4:
        e = ex_ml(x.section_4, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 4, e, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_16_12t12_4t7, x.section_4, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t12_4t7(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');
    e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t12_4t7_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t12_4t7_12(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t15(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_var_168_16_12t15_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t15_4(o, e, x) {
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_4) {
    case 5:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_16_12t15_4_12t5, x.section_12, 'down');
        break;
    case 21:
        e = ex_ml(x.section_12, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 12, e, 'down');
        break;
    }
    e = ex_s_offset(o + 16, e, ex_bmg_demo_var_168_16_12t15_4_16, x.section_16, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t15_4_12t5(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_16_12t15_4_12t5_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t15_4_12t5_4(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t15_4_16(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t18(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_var_168_16_12t18_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t18_0(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_12t25(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    sf32(o + 16, x.f32_16)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_16_16(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24(o, e, x) {
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_8) {
    case 2:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t2, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t5, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t7, x.section_12, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t14, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t15, x.section_12, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t17, x.section_12, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t18, x.section_12, 'down');
        break;
    case 23:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t23, x.section_12, 'down');
        break;
    case 33:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33, x.section_12, 'down');
        break;
    case 34:
        e = ex_ml(x.section_12, g.bmg_demo_event_array, ex_bmg_demo_event, g.unordered_ref.bmg_demo_event, o + 12, e, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t1, x.section_4, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t4, x.section_4, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t5, x.section_4, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t7, x.section_4, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t11, x.section_4, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t12, x.section_4, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t2_4t17, x.section_4, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)
    su32(o + 24, x.u32_24)
    sf32(o + 28, x.f32_28)

    e = ex_ml(x.unordered_bmg_demo_world_84_4, g.bmg_demo_world_84_array, ex_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84, o + 4, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_extended_world_link_16, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 16, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_extended_world_link_20, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 20, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t4(o, x) {
    let e = o + 64
    su8(o + 2, x.u8_2)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_16, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 16, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t5(o, x) {
    let e = o + 64
    su8(o + 2, x.u8_2)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_16, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 16, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t7(o, x) {
    let e = o + 64
    su8(o + 2, x.u8_2)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t11(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    sf32(o + 40, x.f32_40)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_16, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 16, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t12(o, x) {
    let e = o + 64
    su8(o + 2, x.u8_2)

    e = ex_s_offset(o + 16, e, ex_bmg_demo_var_168_24_12t2_4t12_16, x.section_16, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t12_16(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t2_4t17(o, x) {
    let e = o + 64
    su8(o + 2, x.u8_2)
    su8(o + 53, x.u8_53)

    e = ex_ml(x.unordered_bmg_demo_extended_world_link_16, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 16, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t5(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)

    switch (x.u8_4) {
    case 1:
        e = ex_s_offset(o + 0, e, ex_bmg_demo_var_168_24_12t5_0t1, x.section_0, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 0, e, ex_bmg_demo_var_168_24_12t5_0t2, x.section_0, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t5_0t1(o, x) {
    let e = o + 32
    su8(o + 5, x.u8_5)

    e = ex_ml(x.unordered_bmg_demo_interface_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');
    e = ex_s_offset(o + 8, e, ex_bmg_demo_var_168_24_12t5_0t1_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t5_0t1_8(o, x) {
    let e = o + 32
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t5_0t1_8_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t5_0t1_8_12(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su32(o + 12, x.u32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t5_0t2(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_ml(x.unordered_bmg_demo_interface_4, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t7(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 8, x.f32_8)

    switch (x.u8_0) {
    case 4:
        e = ex_ml(x.section_4, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 4, e, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t7_4t7, x.section_4, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t7_4t7(o, x) {
    let e = o + 32
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t7_4t7_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t7_4t7_12(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t14(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t15(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_bmg_demo_var_0, g.bmg_demo_var_array, ex_bmg_demo_var, g.unordered_ref.bmg_demo_var, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t17(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t18(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    e = ex_ml(x.unordered_bmg_demo_something_4, g.bmg_demo_something_array, ex_bmg_demo_something, g.unordered_ref.bmg_demo_something, o + 4, e, 'down');
    e = ex_s_offset(o + 8, e, ex_bmg_demo_var_168_24_12t18_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t18_8(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t23(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_unknown_0, g.bmg_demo_unknown_array, ex_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown, o + 0, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_var_168_24_12t33_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4(o, x) {
    let e = o + 64
    su32(o + 12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)

    e = ex_s_offset(o + 16, e, ex_bmg_demo_var_168_24_12t33_4_16, x.section_16, 'down');
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 28, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bmg_demo_var_168_24_12t33_4_24(temp_offset + (i * 28), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 28, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_bmg_demo_var_168_24_12t33_4_32(temp_offset + (i * 28), e, x.section_32[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_16(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_16_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_bmg_demo_var_168_24_12t33_4_16_16, x.section_16, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_16_12(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 8, x.f32_8)

    e = ex_ml(x.unordered_bmg_demo_flag_4, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_16_16(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_24(o, e, x) {
    su8(o + 4, x.u8_4)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_8) {
    case 7:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_24_12t7, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_24_12t15, x.section_12, 'down');
        break;
    case 23:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_24_12t23, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_24_12t7(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    sf32(o + 8, x.f32_8)

    e = ex_ml(x.unordered_bmg_demo_flag_4, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_24_12t15(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_24_12t23(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_unknown_0, g.bmg_demo_unknown_array, ex_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown, o + 0, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_32(o, e, x) {
    su8(o + 4, x.u8_4)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u32_8) {
    case 5:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_32_12t5, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_32_12t15, x.section_12, 'down');
        break;
    case 23:
        e = ex_s_offset(o + 12, e, ex_bmg_demo_var_168_24_12t33_4_32_12t23, x.section_12, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_32_12t5(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_var_168_24_12t33_4_32_12t5_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_32_12t5_0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_ml(x.unordered_bmg_demo_interface_4, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_32_12t15(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_var_168_24_12t33_4_32_12t23(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_unknown_0, g.bmg_demo_unknown_array, ex_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown, o + 0, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_extended_world_link_4, g.bmg_demo_extended_world_link_array, ex_bmg_demo_extended_world_link, g.unordered_ref.bmg_demo_extended_world_link, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_thing(o, x) {
    let e = o + 160
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)

    e = ex_s_offset(o + 48, e, ex_bmg_demo_unknown, x.section_48, 'down');
    e = ex_s_offset(o + 88, e, ex_bmg_demo_sound_section, x.section_88, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_extended_world_link(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su8(o + 7, x.u8_7)
    su8(o + 8, x.u8_8)
    sf32(o + 24, x.f32_24)

    switch (x.u8_8) {
    case 1:
        e = ex_ml(x.section_0, g.bmg_demo_world_20_array, ex_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20, o + 0, e, 'down');
        break;
    case 11:
        e = ex_ml(x.section_0, g.bmg_demo_world_84_array, ex_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84, o + 0, e, 'down');
        break;
    case 0:
        e = ex_ml(x.section_0, g.bmg_demo_world_12_array, ex_bmg_demo_world_12, g.unordered_ref.bmg_demo_world_12, o + 0, e, 'down');
        break;
    case 1:
        e = ex_ml(x.section_0, g.bmg_demo_world_20_array, ex_bmg_demo_world_20, g.unordered_ref.bmg_demo_world_20, o + 0, e, 'down');
        break;
    case 10:
        e = ex_ml(x.section_0, g.bmg_demo_world_68_array, ex_bmg_demo_world_68, g.unordered_ref.bmg_demo_world_68, o + 0, e, 'down');
        break;
    case 11:
        e = ex_ml(x.section_0, g.bmg_demo_world_84_array, ex_bmg_demo_world_84, g.unordered_ref.bmg_demo_world_84, o + 0, e, 'down');
        break;
    case 13:
        e = ex_ml(x.section_0, g.bmg_demo_world_92_array, ex_bmg_demo_world_92, g.unordered_ref.bmg_demo_world_92, o + 0, e, 'down');
        break;
    }
    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link(o, x) {
    let e = o + 96
    su8(o + 8, x.u8_8)
    su32(o + 28, x.u32_28)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 48, x.u32_48)
    su32(o + 72, x.u32_72)
    //?

    e = ex_s_offset(o + 12, e, ex_bmg_demo_link_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_bmg_demo_link_20, x.section_20, 'down');
    e = ex_string(o + 24, e, x.section_24)
    e = ex_string(o + 32, e, x.section_32)
    e = ex_s_offset(o + 44, e, ex_bmg_demo_link_44, x.section_44, 'down');
    e = ex_s_offset(o + 52, e, ex_bmg_demo_link_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_bmg_demo_link_56, x.section_56, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_12(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_20(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_link_20_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_20_4(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_flag_0, g.bmg_demo_flag_array, ex_bmg_demo_flag, g.unordered_ref.bmg_demo_flag, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_44(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 12, e, ex_bmg_demo_link_44_12, x.section_12, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_44_12(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52(o, x) {
    let e = o + 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_link_52_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_link_52_0_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 16, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_link_52_0_4_4(temp_offset + (i * 16), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 8, e, ex_bmg_demo_link_52_0_4_8, x.section_8, 'down');
    e = ex_string(o + 12, e, x.section_12)
    e = ex_s_offset(o + 20, e, ex_bmg_demo_link_52_0_4_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_bmg_demo_link_52_0_4_28, x.section_28, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_4(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_link_52_0_4_4_4t1, x.section_4, 'down');
        break;
    }
    e = ex_s_offset(o + 8, e, ex_bmg_demo_link_52_0_4_4_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_4_4t1(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_4_8(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_8(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_20(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su8(o + 9, x.u8_9)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_link_52_0_4_20_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_20_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_link_52_0_4_20_4_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_20_4_4(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_52_0_4_28(o, x) {
    let e = o + 32
    su8(o + 9, x.u8_9)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_56(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_bmg_demo_link_56_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_link_56_8(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 3, x.u8_3)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)

    switch (x.u8_0) {
    case 1:
        e = ex_ml(x.section_4, g.bmg_demo_unknown_array, ex_bmg_demo_unknown, g.unordered_ref.bmg_demo_unknown, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_4, g.bmg_demo_strange_array, ex_bmg_demo_strange, g.unordered_ref.bmg_demo_strange, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_4, g.bmg_demo_sound_controls_array, ex_bmg_demo_sound_controls, g.unordered_ref.bmg_demo_sound_controls, o + 4, e, 'down');
        break;
    case 5:
    case 6:
        e = ex_s_offset(o + 4, e, ex_bmg_demo_mysterious_4t5, x.section_4, 'down');
        break;
    case 8:
        e = ex_ml(x.section_4, g.bmg_demo_model_link_array, ex_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link, o + 4, e, 'down');
        break;
    case 11:
        e = ex_ml(x.section_4, g.bmg_demo_activator_array, ex_bmg_demo_activator, g.unordered_ref.bmg_demo_activator, o + 4, e, 'down');
        break;
    }
    e = ex_s_offset(o + 8, e, ex_bmg_demo_mysterious_8, x.section_8, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5(o, x) {
    let e = o + 64
    su8(o + 3, x.u8_3)
    su32(o + 12, x.u32_12)
    su32(o + 32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)

    switch (x.u8_3) {
    case 0:
        e = ex_s_offset(o + 16, e, ex_bmg_demo_mysterious_4t5_16t0, x.section_16, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 16, e, ex_bmg_demo_mysterious_4t5_16t2, x.section_16, 'down');
        break;
    }
    e = ex_s_offset(o + 36, e, ex_bmg_demo_mysterious_4t5_36, x.section_36, 'down');
    if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 32, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_bmg_demo_mysterious_4t5_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e - g.m)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 12, 16)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_bmg_demo_mysterious_4t5_52(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_bmg_demo_mysterious_4t5_56, x.section_56, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5_16t0(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5_16t2(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5_36(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5_52(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 5, x.u8_5)
    sf32(o + 8, x.f32_8)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_4t5_56(o, x) {
    let e = o + 32
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_mysterious_8(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_world_link_type_0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type_0(o, x) {
    let e = o + 96
    //amount?   su32(o +16, x.u32_16)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 60, x.u32_60)
    sf32(o + 84, x.f32_84)
    su32(o + 88, x.u32_88)

    e = ex_ml(x.unordered_bmg_demo_model_sub_link_12, g.bmg_demo_model_sub_link_array, ex_bmg_demo_model_sub_link, g.unordered_ref.bmg_demo_model_sub_link, o + 12, e, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 8, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bmg_demo_world_link_type_0_20(temp_offset + (i * 8), e, x.section_20[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_bmg_demo_world_link_type_0_56, x.section_56, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type_0_20(o, e, x) {

    e = ex_s_offset(o + 4, e, ex_bmg_demo_world_link_type_0_20_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type_0_20_4(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bmg_demo_world_link_type_0_20_4_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type_0_20_4_4(o, e, x) {

    e = ex_ml(x.unordered_bmg_demo_model_link_0, g.bmg_demo_model_link_array, ex_bmg_demo_model_link, g.unordered_ref.bmg_demo_model_link, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type_0_56(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_world_link_type_0_56_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_link_type_0_56_4(o, x) {
    let e = o + 32

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings(o, x) {
    let e = o + 192
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 33, x.u8_33)
    //amount?   su32(o +52, x.u32_52)
    ex_patch(o + 68, g.texture_patch_array, x.texture_68)
    ex_patch(o + 72, g.texture_patch_array, x.texture_72)
    ex_patch(o + 76, g.texture_patch_array, x.texture_76)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 92, x.f32_92)
    sf32(o + 96, x.f32_96)
    //amount?   su32(o +104, x.u32_104)
    sf32(o + 120, x.f32_120)
    sf32(o + 124, x.f32_124)
    sf32(o + 128, x.f32_128)
    sf32(o + 132, x.f32_132)
    su8(o + 137, x.u8_137)
    sf32(o + 140, x.f32_140)
    ex_patch(o + 144, g.texture_patch_array, x.texture_144)
    sf32(o + 148, x.f32_148)
    sf32(o + 152, x.f32_152)
    sf32(o + 156, x.f32_156)
    sf32(o + 160, x.f32_160)
    sf32(o + 164, x.f32_164)
    sf32(o + 168, x.f32_168)

    e = ex_s_offset(o + 0, e, ex_bmg_demo_world_settings_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bmg_demo_world_settings_4, x.section_4, 'down');
    if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 64, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_bmg_demo_world_settings_56(temp_offset + (i * 64), e, x.section_56[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 60, e, ex_bmg_demo_world_settings_60, x.section_60, 'down');
    e = ex_s_offset(o + 88, e, ex_bmg_demo_world_settings_88, x.section_88, 'down');
    e = ex_s_offset(o + 100, e, ex_bmg_demo_world_settings_100, x.section_100, 'down');
    if (x.section_108.length) {
        su32(o + 104, x.section_108.length)
        su32(o + 108, e - g.m)
        g.oa.push(o + 108)
        let temp_offset = e
        e += divisible(x.section_108.length * 4, 16)
        for (let i = 0; i < x.section_108.length; i++) {
            e = ex_bmg_demo_world_settings_108(temp_offset + (i * 4), e, x.section_108[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_bmg_demo_font_176, g.bmg_demo_font_array, ex_bmg_demo_font, g.unordered_ref.bmg_demo_font, o + 176, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_0(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bmg_demo_interface_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');
    e = ex_ml(x.unordered_bmg_demo_interface_4, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 4, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_4(o, x) {
    let e = o + 64
    sf32(o + 12, x.f32_12)
    su8(o + 20, x.u8_20)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_bmg_demo_interface_0, g.bmg_demo_interface_array, ex_bmg_demo_interface, g.unordered_ref.bmg_demo_interface, o + 0, e, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_56(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
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

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_60(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_88(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_100(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_world_settings_108(o, e, x) {

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_texture_anim_0(o, x) {
    let e = o + 64
    //amount?   su32(o +16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_texture_anim_0_4, x.section_4, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bmg_demo_texture_anim_0_20(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_texture_anim_0_4(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_texture_anim_0_4_4, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_texture_anim_0_4_4(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_texture_anim_0_20(o, e, x) {
    sf32(o + 4, x.f32_4)
    su8(o + 9, x.u8_9)
    sf32(o + 12, x.f32_12)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_model_anim_3(o, x) {
    let e = o + 64
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)

    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 2, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bmg_demo_model_anim_3_24(temp_offset + (i * 2), e, x.section_24[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 24, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_bmg_demo_model_anim_3_32(temp_offset + (i * 24), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_string(o + 36, e, x.section_36)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_3_24(o, e, x) {
    su16(o + 0, x.u16_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_3_32(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_model_anim_1_type_a(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 40, x.u32_40)
    //amount?
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 56, x.u32_56)
    su32(o + 60, x.u32_60)

    if (Array.isArray(x.section_24)) {
        e = ex_s_offset(o + 24, e, ex_bmg_demo_model_anim_1_type_a_24, x.section_24, 'down');
    } else {
        su32(o + 24, x.section_24)
    }

    if (Array.isArray(x.section_28)) {
        e = ex_s_offset(o + 28, e, ex_bmg_demo_model_anim_1_type_a_28, x.section_28, 'down');
    } else {
        su32(o + 28, x.section_28)
    }

    if (Array.isArray(x.section_32)) {
        e = ex_s_offset(o + 32, e, ex_bmg_demo_model_anim_1_type_a_32, x.section_32, 'down');
    } else {
        su32(o + 32, x.section_32)
    }

    if (Array.isArray(x.section_36)) {
        e = ex_s_offset(o + 36, e, ex_bmg_demo_model_anim_1_type_a_36, x.section_36, 'down');
    } else {
        su32(o + 36, x.section_36)
    }

    if (Array.isArray(x.section_52)) {
        e = ex_s_offset(o + 52, e, ex_bmg_demo_model_anim_1_type_a_52, x.section_52, 'down');
    } else {
        su32(o + 52, x.section_52)
    }

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_24(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_28(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_32(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_36(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52(o, x) {
    let e = o + 36
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    if (Array.isArray(x.section_12)) {
        e = ex_s_offset(o + 12, e, ex_bmg_demo_model_anim_1_type_a_52_12, x.section_12, 'down');
    } else {
        su32(o + 12, x.section_12)
    }

    if (Array.isArray(x.section_16)) {
        e = ex_s_offset(o + 16, e, ex_bmg_demo_model_anim_1_type_a_52_16, x.section_16, 'down');
    } else {
        su32(o + 16, x.section_16)
    }

    if (Array.isArray(x.section_20)) {
        e = ex_s_offset(o + 20, e, ex_bmg_demo_model_anim_1_type_a_52_20, x.section_20, 'down');
    } else {
        su32(o + 20, x.section_20)
    }

    if (Array.isArray(x.section_24)) {
        e = ex_s_offset(o + 24, e, ex_bmg_demo_model_anim_1_type_a_52_24, x.section_24, 'down');
    } else {
        su32(o + 24, x.section_24)
    }

    if (Array.isArray(x.section_28)) {
        e = ex_s_offset(o + 28, e, ex_bmg_demo_model_anim_1_type_a_52_28, x.section_28, 'down');
    } else {
        su32(o + 28, x.section_28)
    }

    if (Array.isArray(x.section_32)) {
        e = ex_s_offset(o + 32, e, ex_bmg_demo_model_anim_1_type_a_52_32, x.section_32, 'down');
    } else {
        su32(o + 32, x.section_32)
    }

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52_12(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52_16(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52_20(o, e, x) {
    su8(o + 1, x.u8_1)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52_24(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52_28(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_a_52_32(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}

function ex_bmg_demo_model_anim_1_type_b(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    //amount?   su32(o +16, x.u32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    if (x.section_32.length) {
        su32(o + 16, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 4, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_bmg_demo_model_anim_1_type_b_32(temp_offset + (i * 4), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 36, e, ex_bmg_demo_model_anim_1_type_b_36, x.section_36, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_32(o, e, x) {

    e = ex_string(o + 0, e, x.section_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36(o, x) {
    let e = o + 16 / 32

    e = ex_s_offset(o + 0, e, ex_bmg_demo_model_anim_1_type_b_36t0, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36t0(o, x) {
    let e = o + 16
    su8(o + 1, x.u8_1)
    sf32(o + 8, x.f32_8)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_model_anim_1_type_b_36, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36t3(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    //amount?   su8(o +3, x.u8_3)
    sf32(o + 12, x.f32_12)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_model_anim_1_type_b_36, x.section_4, 'down');
    if (x.section_8.length) {
        su32(o + 3, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bmg_demo_model_anim_1_type_b_36t3_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36t3_8(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36t5(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    //amount?   su8(o +3, x.u8_3)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_model_anim_1_type_b_36, x.section_4, 'down');
    if (x.section_16.length) {
        su32(o + 3, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 1, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bmg_demo_model_anim_1_type_b_36t5_16(temp_offset + (i * 1), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36t5_16(o, e, x) {
    su8(o + 0, x.u8_0)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_1_type_b_36t6(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    sf32(o + 8, x.f32_8)

    e = ex_s_offset(o + 4, e, ex_bmg_demo_model_anim_1_type_b_36, x.section_4, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_2_type_a(o, x) {
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
            e = ex_bmg_demo_model_anim_2_type_a_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_2_type_a_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_2_type_b(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_string(o + 8, e, x.section_8)
    e = ex_s_offset(o + 16, e, ex_bmg_demo_model_anim_2_type_b_16, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_bmg_demo_model_anim_2_type_b_20, x.section_20, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_2_type_b_16(o, x) {
    let e = o + 16

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_2_type_b_20(o, x) {
    let e = o + 48
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    //amount?   su32(o +36, x.u32_36)

    e = ex_string(o + 0, e, x.section_0)
    if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e - g.m)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 4, 16)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_bmg_demo_model_anim_2_type_b_20_40(temp_offset + (i * 4), e, x.section_40[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
function ex_bmg_demo_model_anim_2_type_b_20_40(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_bmg_demo_model_anim_2_type_b_20, x.section_0, 'down');

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
/* end export list */