"use strict";

/* start sec id list */
function get_hwvx_proto_sec_id(string) {
    switch (string) {
    case 'gjbf':
        return "hwvx_proto_file_header"
        break
    case ']7Zf':
        return "hwvx_proto_directory"
        break
    case 'E@3Z':
        return "hwvx_proto_datapack"
        break
    case 'PcI:':
        return "hwvx_proto_geo_datapack"
        break
    case 'ipll':
        return "patch_list"
        break
    case 'audi':
        return "hwvx_proto_audio"
        break
    case 'ad00':
        return "hwvx_proto_audio_00"
        break
    case 'imps':
        return "hwvx_proto_impulse_tracker"
        break
    case 'ad2o':
        return "hwvx_proto_audio_data_2"
        break
    case 'ordr':
        return "hwvx_proto_ordered"
        break
    case '4unr':
        return "hwvx_proto_unordered"
        break
    case 'uZNx':
        return "hwvx_proto_basic"
        break
    case 'j3qp':
        return "hwvx_proto_basic_4"
        break
    case 'rwx_':
        return "hwvx_proto_geo_basic"
        break
    case 'nMcM':
        return "hwvx_proto_geo_basic_0"
        break
    case 'FNM8':
        return "hwvx_proto_share"
        break
    case 'rjJj':
        return "hwvx_proto_world"
        break
    case '=>48':
        return "hwvx_proto_world_12"
        break
    case 'eBnd':
        return "hwvx_proto_world_20"
        break
    case 'taFF':
        return "hwvx_proto_world_20_12"
        break
    case '>je2':
        return "hwvx_proto_world_36"
        break
    case 'vH^o':
        return "hwvx_proto_world_36_36"
        break
    case 'U<>y':
        return "hwvx_proto_world_36_48"
        break
    case '00LC':
        return "hwvx_proto_world_36_48_16"
        break
    case '>8l?':
        return "hwvx_proto_world_36_28"
        break
    case 'HY@p':
        return "hwvx_proto_world_36_48_8"
        break
    case 'S;d?':
        return "hwvx_proto_world_36_48_24"
        break
    case 'zBaW':
        return "hwvx_proto_world_44"
        break
    case '7K=p':
        return "hwvx_proto_world_116"
        break
    case 'ZEh]':
        return "hwvx_proto_world_76"
        break
    case 'TQ0O':
        return "hwvx_proto_world_52"
        break
    case 'ESX3':
        return "hwvx_proto_world_52_88t1"
        break
    case '=Xx@':
        return "hwvx_proto_world_92"
        break
    case '1ctA':
        return "hwvx_proto_world_100"
        break
    case '6uH?':
        return "hwvx_proto_world_108"
        break
    case 'oqWI':
        return "hwvx_proto_world_108_40"
        break
    case 'M=7v':
        return "hwvx_proto_world_108_44t1"
        break
    case 'IENC':
        return "hwvx_proto_world_108_44t2"
        break
    case 'E=O_':
        return "hwvx_proto_world_108_44t3"
        break
    case 'VGH4':
        return "hwvx_proto_world_108_44t6"
        break
    case 'rWN=':
        return "hwvx_proto_world_4"
        break
    case 'rjvv':
        return "hwvx_proto_world_4_20"
        break
    case 'Nxlg':
        return "hwvx_proto_world_4_16"
        break
    case '09ci':
        return "hwvx_proto_world_4_16_4"
        break
    case '?R3u':
        return "hwvx_proto_world_120"
        break
    case 'xQij':
        return "hwvx_proto_world_120_0"
        break
    case '56Am':
        return "hwvx_proto_collision"
        break
    case 'G_SO':
        return "hwvx_proto_collision_32"
        break
    case 'jPo9':
        return "hwvx_proto_collision_32_48"
        break
    case 'yQx5':
        return "hwvx_proto_collision_32_56"
        break
    case '0lq8':
        return "hwvx_proto_collision_64"
        break
    case 'JRcn':
        return "hwvx_proto_collision_76"
        break
    case '5i:=':
        return "hwvx_proto_collision_76_16"
        break
    case 'FN^k':
        return "hwvx_proto_collision_84"
        break
    case 'Gx;=':
        return "hwvx_proto_collision_link"
        break
    case '3aN[':
        return "hwvx_proto_triggers_and_actions"
        break
    case 'fN<n':
        return "hwvx_proto_triggers_and_actions_4t1"
        break
    case 't:LV':
        return "hwvx_proto_triggers_and_actions_4t3"
        break
    case '7u;j':
        return "hwvx_proto_triggers_and_actions_4t5"
        break
    case 'xXSo':
        return "hwvx_proto_triggers_and_actions_4t6"
        break
    case '4Fw^':
        return "hwvx_proto_triggers_and_actions_4trest"
        break
    case 'X5:_':
        return "hwvx_proto_triggers_and_actions_12"
        break
    case '4CPG':
        return "hwvx_proto_triggers_and_actions_12_4"
        break
    case 'zCiR':
        return "hwvx_proto_triggers_and_actions_20"
        break
    case 'nOZg':
        return "hwvx_proto_triggers_and_actions_20_4t0"
        break
    case 'pTQb':
        return "hwvx_proto_triggers_and_actions_20_4t1t12"
        break
    case 's@JO':
        return "hwvx_proto_triggers_and_actions_20_4t1t13"
        break
    case 'YM2p':
        return "hwvx_proto_triggers_and_actions_20_4t1t16"
        break
    case 'KqY>':
        return "hwvx_proto_triggers_and_actions_20_4t2"
        break
    case 'I^je':
        return "hwvx_proto_triggers_and_actions_20_4t3"
        break
    case 'Npx[':
        return "hwvx_proto_triggers_and_actions_20_4t4"
        break
    case 'LAop':
        return "hwvx_proto_triggers_and_actions_20_4t5"
        break
    case 'fCWU':
        return "hwvx_proto_triggers_and_actions_20_4t6"
        break
    case ':Hq]':
        return "hwvx_proto_triggers_and_actions_20_4t7"
        break
    case 'i5vu':
        return "hwvx_proto_triggers_and_actions_20_4t8"
        break
    case 'AQmR':
        return "hwvx_proto_triggers_and_actions_20_4t9"
        break
    case 'x21k':
        return "hwvx_proto_triggers_and_actions_20_4t10t10"
        break
    case 'r_Uv':
        return "hwvx_proto_triggers_and_actions_20_4t10t20"
        break
    case 'twr?':
        return "hwvx_proto_triggers_and_actions_20_4t12"
        break
    case '?t]q':
        return "hwvx_proto_triggers_and_actions_20_4t15"
        break
    case 'bitp':
        return "hwvx_proto_triggers_and_actions_20_4t17"
        break
    case 'ppf;':
        return "hwvx_proto_triggers_and_actions_20_4t20"
        break
    case 'kA7T':
        return "hwvx_proto_triggers_and_actions_20_4t21"
        break
    case '>Cf1':
        return "hwvx_proto_triggers_and_actions_20_4t22"
        break
    case '5]LU':
        return "hwvx_proto_triggers_and_actions_20_4t24"
        break
    case 'g1oO':
        return "hwvx_proto_triggers_and_actions_20_4t26"
        break
    case 'KT>V':
        return "hwvx_proto_triggers_and_actions_20_4t31"
        break
    case 'P5tz':
        return "hwvx_proto_triggers_and_actions_20_4t32"
        break
    case '4E^b':
        return "hwvx_proto_triggers_and_actions_20_4t34"
        break
    case 'MJOb':
        return "hwvx_proto_triggers_and_actions_20_4t36"
        break
    case '6Uxj':
        return "hwvx_proto_triggers_and_actions_20_4t38"
        break
    case '[g5w':
        return "hwvx_proto_triggers_and_actions_20_4t39"
        break
    case 'cffS':
        return "hwvx_proto_triggers_and_actions_24"
        break
    case 'pN<^':
        return "hwvx_proto_triggers_and_actions_24_4"
        break
    case 'NSr;':
        return "hwvx_proto_models"
        break
    case 'U>9;':
        return "hwvx_proto_model_8"
        break
    case 'HklA':
        return "hwvx_proto_model_12"
        break
    case '=AG@':
        return "hwvx_proto_model_8_8"
        break
    case '^te<':
        return "hwvx_proto_model_8_8_12t0"
        break
    case '<Plf':
        return "hwvx_proto_model_8_8_12t7"
        break
    case ';t0o':
        return "hwvx_proto_model_8_8_12t8"
        break
    case 'fR>T':
        return "hwvx_proto_model_8_8_12t7_20"
        break
    case '0goX':
        return "hwvx_proto_model_8_8_12_modeldata"
        break
    case 'eFdb':
        return "hwvx_proto_texture_anims"
        break
    case 'K??i':
        return "hwvx_proto_model_anims_1"
        break
    case ']Wot':
        return "hwvx_proto_model_anims_1_24"
        break
    case '<j<O':
        return "hwvx_proto_model_anims_1_28"
        break
    case 'ir<<':
        return "hwvx_proto_model_anims_1_32"
        break
    case '6jDb':
        return "hwvx_proto_model_anims_1_36"
        break
    case 'Ip4F':
        return "hwvx_proto_model_anims_1_44"
        break
    case 'X]2v':
        return "hwvx_proto_model_anims_2"
        break
    case '4PH5':
        return "hwvx_proto_model_anims_2_16"
        break
    case 'of0M':
        return "hwvx_proto_texture"
        break
    case 'clt5':
        return "hwvx_proto_color_table"
        break
    case 'eCFb':
        return "hwvx_proto_share_end"
        break
    case 'YJ<:':
        return "hwvx_proto_share_end_8"
        break
    case 'tBe]':
        return "hwvx_proto_world_color_section"
        break
    case 'Igau':
        return "hwvx_proto_world_color_section_4"
        break
    case 'om89':
        return "hwvx_proto_world_text_link"
        break
    case '6DwQ':
        return "hwvx_proto_world_settings"
        break
    case 'DnMC':
        return "hwvx_proto_world_settings_192"
        break
    case 'xmCF':
        return "hwvx_proto_world_settings_196"
        break
    case '4hhT':
        return "hwvx_proto_world_settings_196_28"
        break
    case 'KG?R':
        return "hwvx_proto_world_settings_224"
        break
    case 'D^@z':
        return "hwvx_proto_world_settings_228"
        break
    case 'P=hX':
        return "hwvx_proto_world_settings_236"
        break
    case '0gYO':
        return "hwvx_proto_world_settings_236_0"
        break
    case 'QHN[':
        return "hwvx_proto_world_settings_236_0_28"
        break
    case 'iHBt':
        return "hwvx_proto_world_settings_244"
        break
    case 'M<n9':
        return "hwvx_proto_world_settings_260"
        break
    case 'lI0j':
        return "hwvx_proto_world_settings_260_4"
        break
    case 'FhGs':
        return "hwvx_proto_world_small_section"
        break
    case '@oVM':
        return "hwvx_proto_world_small_section_12"
        break
    case 'Javg':
        return "hwvx_proto_world_model_related"
        break
    case 'ib0X':
        return "hwvx_proto_world_idk"
        break
    case '=Bq3':
        return "hwvx_proto_world_idk_48"
        break
    case 'NiNv':
        return "hwvx_proto_world_idk_48_8"
        break
    case 'k<bM':
        return "hwvx_proto_some_world_thing"
        break
    case 'WbBj':
        return "hwvx_proto_some_world_thing_88"
        break
    case '^UG0':
        return "hwvx_proto_geo_list"
        break
    case 'Gqys':
        return "hwvx_proto_geo_list_4"
        break
    case 'BT?c':
        return "hwvx_proto_geo_list_4_4"
        break
    case 'BVkg':
        return "hwvx_proto_geo_list_4_8"
        break
    case '@B[D':
        return "hwvx_proto_collision_settings"
        break
    case 'TrH@':
        return "hwvx_proto_collision_settings_72"
        break
    case 'i=g:':
        return "hwvx_proto_car"
        break
    case 'Q_rF':
        return "hwvx_proto_car_108"
        break
    case 'hJ^O':
        return "hwvx_proto_car_120"
        break
    case 'ZdHL':
        return "hwvx_proto_car_124"
        break
    case 'KQFs':
        return "hwvx_proto_car_128"
        break
    case 'U[<W':
        return "hwvx_proto_car_128_132"
        break
    case 'wxy:':
        return "hwvx_proto_car_128_132_4t1"
        break
    case '=CB9':
        return "hwvx_proto_car_128_132_4t2"
        break
    case 'ni0J':
        return "hwvx_proto_car_128_132_4t3"
        break
    case 'uVOT':
        return "hwvx_proto_car_128_132_4t4"
        break
    case 'DLjW':
        return "hwvx_proto_car_132"
        break
    case '0fgN':
        return "hwvx_proto_car_132_44"
        break
    case 'pT66':
        return "hwvx_proto_car_136"
        break
    case '<Xgk':
        return "hwvx_proto_car_140"
        break
    case 'GkK1':
        return "hwvx_proto_car_140_56"
        break
    case 'sq>I':
        return "hwvx_proto_car_140_64"
        break
    case 'cOSy':
        return "hwvx_proto_car_164"
        break
    case 'SBS0':
        return "hwvx_proto_car_164_8"
        break
    case 'O5O:':
        return "hwvx_proto_car_172"
        break
    case 'w?mc':
        return "hwvx_proto_car_212"
        break
    case 'Xtfw':
        return "hwvx_proto_car_220"
        break
    case 'P0mb':
        return "hwvx_proto_car_228"
        break
    case '6l:Y':
        return "hwvx_proto_car_252"
        break
    case 'L6vT':
        return "hwvx_proto_car_252_4"
        break
    case 'emW9':
        return "hwvx_proto_car_252_4_4"
        break
    case 'iIBS':
        return "hwvx_proto_car_260"
        break
    case 'K6P^':
        return "hwvx_proto_car_260_56"
        break
    case '=@aQ':
        return "hwvx_proto_car_268"
        break
    case 'jg>I':
        return "hwvx_proto_car_related"
        break
    case 'HYA?':
        return "hwvx_proto_car_related_48"
        break
    case 'VM^0':
        return "hwvx_proto_car_related_48_0"
        break
    case 'ZIP^':
        return "hwvx_proto_car_link"
        break
    case '2Ajg':
        return "hwvx_proto_car_link_48"
        break
    case '>a1]':
        return "hwvx_proto_car_link_48_72"
        break
    case ';10P':
        return "hwvx_proto_car_link_56"
        break
    case 'hezc':
        return "hwvx_proto_car_link_64"
        break
    case 'hxcM':
        return "hwvx_proto_car_link_68"
        break
    case 'CP>2':
        return "hwvx_proto_mysterious"
        break
    case 'jpuw':
        return "hwvx_proto_mysterious_24t5"
        break
    case 'wlid':
        return "hwvx_proto_mysterious_24t5_24"
        break
    case 'uUPO':
        return "hwvx_proto_mysterious_24t5_32"
        break
    case 'o7;i':
        return "hwvx_proto_mysterious_24t5_44"
        break
    case 'R<H4':
        return "hwvx_proto_mysterious_24t6"
        break
    case '8cdg':
        return "hwvx_proto_mysterious_24t6_16"
        break
    case 'oV==':
        return "hwvx_proto_mysterious_24t6_24"
        break
    case 'aQ]J':
        return "hwvx_proto_mysterious_24t6_32"
        break
    case 'XqiO':
        return "hwvx_proto_mysterious_24t6_36"
        break
    case '@ZZb':
        return "hwvx_proto_mysterious_24t7"
        break
    case 'QK;_':
        return "hwvx_proto_mysterious_24t7_72"
        break
    case '7L6J':
        return "hwvx_proto_mysterious_24t7_80"
        break
    case '_8[1':
        return "hwvx_proto_mysterious_24t7_88"
        break
    case 'r8AQ':
        return "hwvx_proto_mysterious_24t9"
        break
    case 'juG4':
        return "hwvx_proto_mysterious_24t9_28"
        break
    case 'FGQj':
        return "hwvx_proto_mysterious_24t9_32"
        break
    case 'fz_?':
        return "hwvx_proto_strange"
        break
    case 'Db4x':
        return "hwvx_proto_strange_28"
        break
    case 'Metw':
        return "hwvx_proto_model_link"
        break
    case 't5Jp':
        return "hwvx_proto_model_link_4"
        break
    case 'u66W':
        return "hwvx_proto_model_link_12"
        break
    case 'Imly':
        return "hwvx_proto_model_link_32"
        break
    case '4_C=':
        return "hwvx_proto_model_link_36"
        break
    case 'iS5S':
        return "hwvx_proto_model_link_52"
        break
    case 'z4bY':
        return "hwvx_proto_model_link_56"
        break
    case 's;ve':
        return "hwvx_proto_model_link_56_4"
        break
    case 'Q0z;':
        return "hwvx_proto_model_link_56_4_12"
        break
    case 'm8[T':
        return "hwvx_proto_model_link_56_4_16"
        break
    case 'I[]x':
        return "hwvx_proto_text"
        break
    case '494j':
        return "hwvx_proto_font"
        break
    case '7]7W':
        return "hwvx_proto_font_28"
        break
    case 'tHz_':
        return "hwvx_proto_font_36"
        break
    case 'qVyB':
        return "hwvx_proto_interface"
        break
    case '1d6S':
        return "hwvx_proto_interface_16"
        break
    case '8BNK':
        return "hwvx_proto_interface_16_20t0"
        break
    case 'kU0D':
        return "hwvx_proto_interface_16_20t0_16"
        break
    case 'UuC9':
        return "hwvx_proto_interface_16_20t0_16_4"
        break
    case 'Mh;=':
        return "hwvx_proto_interface_16_20t1"
        break
    case 'SGJ[':
        return "hwvx_proto_interface_16_20t1_8"
        break
    case 'q_on':
        return "hwvx_proto_interface_16_20t1_8_4"
        break
    case 'IYWn':
        return "hwvx_proto_interface_16_20t2"
        break
    case '>@=_':
        return "hwvx_proto_interface_16_20t2_4"
        break
    case 'YSsF':
        return "hwvx_proto_interface_16_20t2_4_28"
        break
    case 'Qzyz':
        return "hwvx_proto_interface_16_20t2_4_28_4"
        break
    case 'FM?k':
        return "hwvx_proto_interface_16_20t4"
        break
    case '?CuH':
        return "hwvx_proto_interface_16_20t4_4"
        break
    case '0ah;':
        return "hwvx_proto_interface_16_20t10"
        break
    case '>QXj':
        return "hwvx_proto_interface_16_20t11"
        break
    case ']Sms':
        return "hwvx_proto_interface_16_60"
        break
    case 'J_pJ':
        return "hwvx_proto_interface_16_68"
        break
    case 'lXU^':
        return "hwvx_proto_interface_16_68_12"
        break
    case 'bX^r':
        return "hwvx_proto_interface_16_68_20"
        break
    case 'H_sG':
        return "hwvx_proto_interface_16_68_20_8"
        break
    case '[cs^':
        return "hwvx_proto_interface_16_68_20_8_8"
        break
    case 'r__j':
        return "hwvx_proto_interface_16_68_20_8_8_0"
        break
    case '7xT1':
        return "hwvx_proto_interface_16_68_20_8_8_4"
        break
    case 'R=<n':
        return "hwvx_proto_interface_16_68_20_8_24"
        break
    case 'l3PK':
        return "hwvx_proto_interface_16_68_20_8_32"
        break
    case 'U=L=':
        return "hwvx_proto_interface_16_72"
        break
    case 'AlcH':
        return "hwvx_proto_interface_16_72_8"
        break
    case '3wEt':
        return "hwvx_proto_interface_16_72_8_8"
        break
    case 'P]zG':
        return "hwvx_proto_interface_16_72_8_8_4"
        break
    case 'Rkdk':
        return "hwvx_proto_interface_16_96"
        break
    case 'aTUt':
        return "hwvx_proto_interface_16_96_4"
        break
    case 'jdSj':
        return "hwvx_proto_interface_16_96_28"
        break
    case 'Z<<y':
        return "hwvx_proto_interface_16_96_36"
        break
    case 'M?r;':
        return "hwvx_proto_interface_16_104"
        break
    case 'sS_M':
        return "hwvx_proto_interface_16_104_8"
        break
    case 'i4Z@':
        return "hwvx_proto_interface_16_104_8_4"
        break
    case '8<A2':
        return "hwvx_proto_interface_16_104_8_12"
        break
    case 'RpkE':
        return "hwvx_proto_interface_16_104_8_20"
        break
    case 'vfDd':
        return "hwvx_proto_interface_16_104_8_28"
        break
    case 'HIn]':
        return "hwvx_proto_interface_16_104_8_36"
        break
    case 'LJw3':
        return "hwvx_proto_interface_16_104_8_44"
        break
    case 'hTcs':
        return "hwvx_proto_interface_16_104_8_56"
        break
    case 'Zg[j':
        return "hwvx_proto_interface_16_104_8_56_4"
        break
    case 'gwE5':
        return "hwvx_proto_interface_16_68_20_8_0t11"
        break
    case 'Qvak':
        return "hwvx_proto_interface_16_68_20_8_0t11_4"
        break
    case '5uGd':
        return "hwvx_proto_interface_16_68_20_8_0t11_4_4"
        break
    case 'HE?>':
        return "hwvx_proto_interface_16_68_20_8_0t11_4_4_0"
        break
    case 'vSGD':
        return "hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4"
        break
    case 'K=ks':
        return "hwvx_proto_interface_24"
        break
    case 'TCBf':
        return "hwvx_proto_interface_24_8"
        break
    case 'EQvy':
        return "hwvx_proto_interface_24_8_0t11"
        break
    case 'WMML':
        return "hwvx_proto_interface_24_8_0t11_4"
        break
    case 'P<e^':
        return "hwvx_proto_interface_24_8_0t11_4_4"
        break
    case '8lvN':
        return "hwvx_proto_interface_24_8_0t11_4_4_0"
        break
    case 'QW[=':
        return "hwvx_proto_interface_24_8_0t11_4_4_0_4"
        break
    case 'Xyg1':
        return "hwvx_proto_interface_24_8_8t15"
        break
    case 'q6pP':
        return "hwvx_proto_interface_24_8_8t15_0"
        break
    case '81GP':
        return "hwvx_proto_interface_24_8_8t15_4"
        break
    case '[@P4':
        return "hwvx_proto_interface_24_8_8t17"
        break
    case 'ZriU':
        return "hwvx_proto_interface_28"
        break
    case 'vX8@':
        return "hwvx_proto_interface_28_4"
        break
    case 'PfIg':
        return "hwvx_proto_interface_28_4_16"
        break
    case 'a=N3':
        return "hwvx_proto_interface_28_4_16_4"
        break
    case 'xJ=Y':
        return "hwvx_proto_interface_48"
        break
    case '3OW[':
        return "hwvx_proto_interface_text_related"
        break
    case '<J>V':
        return "hwvx_proto_interface_text_related_12"
        break
    case 'T8ye':
        return "hwvx_proto_interface_text_related_20"
        break
    case 'AYTy':
        return "hwvx_proto_interface_text_related_20_4"
        break
    case 'O];A':
        return "hwvx_proto_interface_text_related_52"
        break
    case '9me0':
        return "hwvx_proto_unknown"
        break
    case 'HP[]':
        return "hwvx_proto_unknown_4"
        break
    case 'oH:I':
        return "hwvx_proto_unknown_4_8t1"
        break
    case 'KKwn':
        return "hwvx_proto_unknown_4_8t1_40t1"
        break
    case 'fJ[T':
        return "hwvx_proto_unknown_4_8t1_40t2"
        break
    case 'qOTK':
        return "hwvx_proto_unknown_4_8t1_40t2_12t0"
        break
    case '1A8k':
        return "hwvx_proto_unknown_4_8t1_40t2_12t1"
        break
    case '8P[M':
        return "hwvx_proto_unknown_4_8t1_40t2_12t2"
        break
    case 'Cu>6':
        return "hwvx_proto_unknown_4_8t1_44"
        break
    case 'g>hN':
        return "hwvx_proto_unknown_4_8t5"
        break
    case ']b4a':
        return "hwvx_proto_unknown_4_8t5_28"
        break
    case 'VD@9':
        return "hwvx_proto_unknown_4_4t4"
        break
    case 'nTMN':
        return "hwvx_proto_unknown_4_4t4_28"
        break
    case 'd7nY':
        return "hwvx_proto_unknown_4_4t8"
        break
    case 'gS;?':
        return "hwvx_proto_unknown_4_4t8_16"
        break
    case 'e2Rn':
        return "hwvx_proto_unknown_4_4t8_24"
        break
    case 'NE9?':
        return "hwvx_proto_unknown_4_4t29"
        break
    case 'Pd2k':
        return "hwvx_proto_unknown_4_4t29_12"
        break
    case '^GRl':
        return "hwvx_proto_unknown_idk_sec"
        break
    case '3]3r':
        return "hwvx_proto_unknown_idk_sec_28"
        break
    case 'Q4<C':
        return "hwvx_proto_unknown_idk_sec_32"
        break
    case '6yHH':
        return "hwvx_proto_unknown_idk_sec_32_8"
        break
    case '7vmh':
        return "hwvx_proto_unknown_idk_sec_36"
        break
    case '8Wto':
        return "hwvx_proto_unknown_idk_sec_36_4"
        break
    case 'Zd;F':
        return "hwvx_proto_unknown_idk_sec_40"
        break
    case '3s]Q':
        return "hwvx_proto_unknown_idk_sec_40_4"
        break
    case 'pPZL':
        return "hwvx_proto_unknown_idk_sec_48"
        break
    case 'H8fI':
        return "hwvx_proto_unknown_link_section"
        break
    case 'AGOy':
        return "hwvx_proto_unknown_link_section_28"
        break
    case 'caGR':
        return "hwvx_proto_grand_section"
        break
    case 'tpqu':
        return "hwvx_proto_unknown_thing"
        break
    case 'vK>c':
        return "hwvx_proto_unknown_thing_4t0"
        break
    case '2SLk':
        return "hwvx_proto_unknown_thing_4t0_36"
        break
    case 'h;uV':
        return "hwvx_proto_unknown_thing_4t0_44"
        break
    case ']7y^':
        return "hwvx_proto_unknown_thing_4t1"
        break
    case 'X594':
        return "hwvx_proto_unknown_thing_4t1_36"
        break
    case 'I>Pm':
        return "hwvx_proto_unknown_thing_4t1_44"
        break
    case 'jbi0':
        return "hwvx_proto_unknown_thing_4t2"
        break
    case 'n?lz':
        return "hwvx_proto_unknown_thing_4t2_16"
        break
    case '8AvY':
        return "hwvx_proto_unknown_thing_4t2_24"
        break
    case '<dYK':
        return "hwvx_proto_unknown_thing_24"
        break
    case 'lLrJ':
        return "hwvx_proto_unknown_thing_32"
        break
    case 'Q7EE':
        return "hwvx_proto_asdf"
        break
    case 'x<;N':
        return "hwvx_proto_asdf_12t1"
        break
    case ':]L<':
        return "hwvx_proto_asdf_12t2"
        break
    case 'Rg6^':
        return "hwvx_proto_asdf_144"
        break
    case ';ZV3':
        return "hwvx_proto_asdf_152"
        break
    case 'n^l7':
        return "hwvx_proto_asdf_164"
        break
    case 'qO<v':
        return "hwvx_proto_asdf_168"
        break
    case 'UlWs':
        return "hwvx_proto_asdf_172"
        break
    case '1<NQ':
        return "hwvx_proto_item"
        break
    case '[Tf[':
        return "hwvx_proto_item_48"
        break
    case 'HU5e':
        return "hwvx_proto_item_48_0"
        break
    case 'rCXf':
        return "hwvx_proto_item_48_0_12"
        break
    case ']sCt':
        return "hwvx_proto_item_48_0_32"
        break
    case 'Rn4S':
        return "hwvx_proto_item_48_0_36"
        break
    case '<OmJ':
        return "hwvx_proto_item_48_0_40"
        break
    case '4diD':
        return "hwvx_proto_item_48_0_52"
        break
    case 'v8dg':
        return "hwvx_proto_link"
        break
    case ';1k?':
        return "hwvx_proto_link_44"
        break
    case '=Sj3':
        return "hwvx_proto_link_44_8"
        break
    case 'VveN':
        return "hwvx_proto_link_52"
        break
    case 'fPWs':
        return "hwvx_proto_link_52_0"
        break
    case '@QKQ':
        return "hwvx_proto_link_52_0_4"
        break
    case '5JG5':
        return "hwvx_proto_link_52_0_4_4"
        break
    case 'dqlY':
        return "hwvx_proto_link_52_0_4_4_4"
        break
    case 'LgjN':
        return "hwvx_proto_link_52_0_4_8"
        break
    case '0ic:':
        return "hwvx_proto_link_52_0_4_20"
        break
    case 'tXYf':
        return "hwvx_proto_link_52_0_4_28"
        break
    case '29=@':
        return "hwvx_proto_link_60"
        break
    case 'VLW2':
        return "hwvx_proto_link_60_0"
        break
    case 'f3Y0':
        return "hwvx_proto_link_60_0_0"
        break
    case ';cM0':
        return "hwvx_proto_link_60_0_0_0"
        break
    case 'hU]>':
        return "hwvx_proto_link_60_0_0_4"
        break
    case 'D_EH':
        return "hwvx_proto_link_60_0_0_8"
        break
    case 'aO>y':
        return "hwvx_proto_sound_controls"
        break
    case 'IT5f':
        return "hwvx_proto_sound_controls_12"
        break
    case ';2Q?':
        return "hwvx_proto_sound_controls_12_12"
        break
    case 'wg7F':
        return "hwvx_proto_sound_section"
        break
    case 'b[E5':
        return "hwvx_proto_sound_section_24"
        break
    case 'ZBz8':
        return "hwvx_proto_sound_section_32"
        break
    case 'D1YG':
        return "hwvx_proto_texture_anims_0"
        break
    case 'cMSE':
        return "hwvx_proto_texture_anims_0_20"
        break
    case '<4l9':
        return "hwvx_proto_texture_anims_0_20_4"
        break
    case '^^gk':
        return "hwvx_proto_texture_anims_0_8"
        break
    case 'a]cr':
        return "hwvx_proto_texture_anims_0_16"
        break
    default:
        return null
    }
}

/* end sec id list */
/////////////////////
/* start import list */
async function im_hwvx_proto_x(index) {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_hwvx_proto_file_header(0, 0, x[index].format)
}

function im_hwvx_proto_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        directory: [],
    });

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_hwvx_proto_directory(16 + (i * 24), i, x[0].directory)
        time_array.push(Date.now() - a)
    }
    console.pk_log(`saved in ${time_array}`)

    return x[0].id
    // 16 bytes;

}

function im_hwvx_proto_directory(o, i, x) {
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
        model_ref: 0,
        models_array: [],

        hwvx_proto_world_12_array: [],
        hwvx_proto_world_20_array: [],
        hwvx_proto_world_36_36_array: [],
        hwvx_proto_world_36_48_array: [],
        hwvx_proto_world_36_48_16_array: [],
        hwvx_proto_world_36_48_8_array: [],
        hwvx_proto_world_36_48_24_array: [],
        hwvx_proto_world_76_array: [],
        hwvx_proto_world_52_array: [],
        hwvx_proto_world_108_array: [],
        hwvx_proto_world_108_44t6_array: [],
        hwvx_proto_world_120_0_array: [],
        hwvx_proto_collision_32_48_array: [],
        hwvx_proto_collision_link_array: [],
        hwvx_proto_triggers_and_actions_array: [],
        hwvx_proto_texture_anims_array: [],
        hwvx_proto_model_anims_1_array: [],
        hwvx_proto_model_anims_2_array: [],
        hwvx_proto_texture_array: [],
        hwvx_proto_world_color_section_array: [],
        hwvx_proto_world_text_link_array: [],
        hwvx_proto_world_settings_array: [],
        hwvx_proto_world_small_section_array: [],
        hwvx_proto_world_model_related_array: [],
        hwvx_proto_world_idk_array: [],
        hwvx_proto_some_world_thing_array: [],
        hwvx_proto_geo_list_array: [],
        hwvx_proto_collision_settings_array: [],
        hwvx_proto_car_array: [],
        hwvx_proto_car_related_array: [],
        hwvx_proto_car_link_array: [],
        hwvx_proto_mysterious_array: [],
        hwvx_proto_strange_array: [],
        hwvx_proto_model_link_array: [],
        hwvx_proto_text_array: [],
        hwvx_proto_font_array: [],
        hwvx_proto_interface_array: [],
        hwvx_proto_interface_text_related_array: [],
        hwvx_proto_unknown_array: [],
        hwvx_proto_unknown_idk_sec_array: [],
        hwvx_proto_unknown_link_section_array: [],
        hwvx_proto_grand_section_array: [],
        hwvx_proto_unknown_thing_array: [],
        hwvx_proto_asdf_array: [],
        hwvx_proto_item_array: [],
        hwvx_proto_link_array: [],
        hwvx_proto_sound_controls_array: [],
        hwvx_proto_sound_section_array: [],
        hwvx_proto_texture_anims_0_array: [],
        hwvx_proto_models_array: [],
    }

    globalThis.log_array = {
        p_offset: {
            offset: 0,
            array: [],
            pointers: [],
        },

    }

    g.file_dir_type = return_directory_type(u32(o + 4))

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
        u32(o + 16) && im_hwvx_proto_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack);
        break;
    case 7:
        u32(o + 16) && im_hwvx_proto_geo_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack);
        break;
    }
    return x[i].id
    // 24 bytes;

}

function im_hwvx_proto_datapack(o, i, x) {
    let end_datapack = o + 120

    if (u32(o + 8) || u32(o + 4)) {
        end_datapack += (u32(o + 8) * 4 + u32(o + 4))
    }

    let offset_after_datapack = o + 120
    let offset_start_hwvx_proto_audio_list = offset_after_datapack + (u32(o + 8) * 4)
    let offset_start_impulse_tracker = offset_start_hwvx_proto_audio_list + u32(o + 72)
    let offset_start_hwvx_proto_audio_data_2 = offset_start_hwvx_proto_audio_list + u32(o + 76)

    let offset_index_patch = offset_start_hwvx_proto_audio_list + u32(o + 4)

    let offset_end_impulse_tracker;
    let offset_end_hwvx_proto_audio_data_2 = offset_index_patch
    if (u32(o + 76)) {
        offset_end_impulse_tracker = offset_start_hwvx_proto_audio_list + u32(o + 76)
    }else{
        offset_end_impulse_tracker = offset_index_patch
    }

    let patchlistoffset = end_datapack
    g.m = patchlistoffset + (u32(o + 12) * 4) + ((u32(o + 16) + u32(o + 28) + u32(o + 52) + u32(o + 56)) * 8);

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
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        u32_32: u32(o + 32),
        //amount?
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        u32_52: u32(o + 52),
        //amount?
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_64: u32(o + 64),
        //amount?
        section_68: [],
        section_72: [],
        section_76: [],
        section_80: im_string(o + 80 - g.m, o + 91 - g.m),
        u32_92: u32(o + 92),
        section_100: im_string(o + 100 - g.m, o + 111 - g.m),
        u32_112: u32(o + 112),
        ordered: [],
        patch_list: [],
        section_audio: [],
        hwvx_proto_audio_index_patch_padding: 0,
    });

    let padding_test = im_hwvx_proto_audio(offset_after_datapack, x[i].section_audio, u32(o + 8))

    // x[i].hwvx_proto_audio_index_patch_padding = offset_index_patch - padding_test

    g.datapack_offset = o
    g.datapack_ref = x

    im_hwvx_proto_get_combined_patch_list(o, patchlistoffset, x[i].patch_list)

    im_hwvx_proto_ordered(g.m, x[i].ordered)

    u32(o + 72) && im_hwvx_proto_impulse_tracker(offset_start_impulse_tracker, offset_end_impulse_tracker, x[i].section_72);
    u32(o + 76) && im_hwvx_proto_audio_data_2(offset_start_hwvx_proto_audio_data_2,offset_end_hwvx_proto_audio_data_2, x[i].section_76);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_proto_texture(u32(o + 24) + (ii * 16) + g.m, ii, x[i].section_24)
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_hwvx_proto_color_table(u32(o + 44) + (ii * 1024) + g.m, ii, x[i].section_44)
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_hwvx_proto_texture_anims(u32(o + 60) + (ii * 12) + g.m, ii, x[i].section_60)
    }
    if (u32(o + 68)) {
        for (let ii = 0; ii < u32(o + 64); ii++) {
            im_hwvx_proto_triggers_and_actions(u32(o + 68) + (ii * 44) + g.m, ii, x[i].section_68)
        }
    }

    return x[i].id
    // 120 bytes;

}

function im_hwvx_proto_geo_datapack(o, i, x) {
    let end_datapack = o + 84
    let patchlistoffset = end_datapack
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
    });

    let list1 = u32(o + 8) * 8
    let list2 = u32(o + 40) * 8
    let list3 = u32(o + 28) * 8
    let list4 = u32(o + 4) * 4
    let padding = u32(o + 36)

    let indexpatchlistlength = list1 + list2 + list3 + list4 + padding

    if (g.console === 'gamecube') {
        indexpatchlistlength = divisible(indexpatchlistlength, 16)
    }
    g.m = indexpatchlistlength + end_datapack

    g.datapack_offset = o
    g.datapack_ref = x[0]

    // get_hwvx_proto_get_combined_geo_patch_list(o)
    // globalThis.old_log_array = structuredClone(log_array)

    im_hwvx_proto_geo_patch_list(o, patchlistoffset, x[i].patch_list)

    im_hwvx_proto_geo_basic(g.m, x[i].ordered, u32(o + 40))

    return x[i].id
    // 84 bytes;

}

// function im_hwvx_proto_sound_offset_list(o, i, x, e) {
//     x.push({
//         id: gen_id(),
//         sec_id: "Fgpx",
//         section_0: [],
//     });

//     u32(o + 0) && im_hwvx_proto_audio_list(u32(o + 0) + g.m, 0, x[i].section_0);
//     // offset?
//     return x[i].id
//     // 4 bytes;

// }
// function im_hwvx_proto_audio_list(o, i, x) {
//     x.push({
//         id: gen_id(),
//         sec_id: "4IJg",
//         u32_0: u32(o + 0),
//         u32_4: u32(o + 4),
//         u32_8: u32(o + 8),
//         u32_12: u32(o + 12),
//         u16_16: u16(o + 16),
//         u16_18: u16(o + 18),
//     });

// }

function im_hwvx_proto_audio(o, x, a) {

    const after_offset_list = o + (a * 4)
    let padding_test = after_offset_list + (a * 32)

    x.push({
        sec_id: "audi",
        sound: []
    })

    for (let i = 0; i < a; i++) {
        padding_test = im_hwvx_proto_audio_00(after_offset_list + u32(o + (i * 4)), x[0].sound, i)
    }

    return padding_test

    function im_hwvx_proto_audio_00(o, x, i) {
        x.push({
            sec_id: "ad00",
            id: gen_id(),
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

function im_hwvx_proto_impulse_tracker(o,e,x) {
    x.push({
        id: gen_id(),
        sec_id: "imps",
        buffer: convert_arraybuffer_base64(buffer.slice(o, e)),
    });

}

function im_hwvx_proto_audio_data_2(o,e,x) {
    x.push({
        id: gen_id(),
        sec_id: "ad2o",
        buffer: convert_arraybuffer_base64(buffer.slice(o, e)),
    });

}

function im_hwvx_proto_get_combined_patch_list(o, patch_offset, x) {
    let texture_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 16) * 8
    let texture_animation_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 52) * 8
    let sound_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 28) * 8
    let model_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 56) * 8
    let general_offset = patch_offset

    x.push({
        sec_id: "ipll",
        texture: im_patch_list(texture_offset, u32(g.datapack_offset + 16), 't'),
        texture_animation: im_patch_list(texture_animation_offset, u32(g.datapack_offset + 52), 'a'),
        sound: im_patch_list(sound_offset, u32(g.datapack_offset + 28), 's'),
        model: im_patch_list(model_offset, u32(g.datapack_offset + 56), 'm'),
    })

    g.texture_patch_ref = x[0].texture
    g.animation_patch_ref = x[0].texture_animation
    g.sound_patch_ref = x[0].sound
    g.model_ref = x[0].model

    log_array.p_offset.offset = general_offset
    for (let i = 0; i < u32(g.datapack_offset + 12); i++) {
        log_array.p_offset.array.push(u32(general_offset + (i * 4)))
    }

    log_array.p_offset.array.sort(function(a, b) {
        return a - b;
    });
}

function im_hwvx_proto_geo_patch_list(o, patch_offset, x) {
    let texture_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 8) * 8
    let texture_animation_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 28) * 8
    let model_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 40) * 8
    let general_offset = patch_offset

    patch_offset += u32(g.datapack_offset + 4) * 4
    let padding = patch_offset

    x.push({
        sec_id: "ipll",
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
function im_hwvx_proto_ordered(o, x) {

    x.push({
        sec_id: "ordr",
        id: gen_id(),
        hwvx_proto_file_specific_section: [],
        hwvx_proto_models: [],
        hwvx_proto_unordered_list: [],
        hwvx_proto_share_end_section: [],
    })

    im_hwvx_proto_unordered(o, x[0].hwvx_proto_unordered_list)
    g.ordered_ref = x[0]

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "item":
    case "link":
    case "audio":
    case "music":
        im_hwvx_proto_basic(o, 0, x[0].hwvx_proto_file_specific_section)
        break
    case "world":
        im_hwvx_proto_world(o, x[0].hwvx_proto_file_specific_section)
        break
    case "colliders":
        im_hwvx_proto_collision(o, x[0].hwvx_proto_file_specific_section)
        break
    case "share":
        for (let i = 0; i < u32(g.datapack_offset + 56); i++) {
            im_hwvx_proto_share(o + (i * 4), i, x[0].hwvx_proto_file_specific_section)
        }
        let get_end = (u32(g.datapack_offset + 40) * 1024) + u32(g.datapack_offset + 44)
        if (u32(g.datapack_offset + 60) || u32(g.datapack_offset) === get_end) {// no shared section
        } else {
            im_hwvx_proto_share_end(get_end + g.m, x[0].hwvx_proto_share_end_section)
        }
        break
    default:
        console.pk_log('file type is not set')
    }

}

function im_hwvx_proto_unordered(o, x) {
    x.push({
        sec_id: "4unr",
        hwvx_proto_world_12: [],
        hwvx_proto_world_20: [],
        hwvx_proto_world_36_36: [],
        hwvx_proto_world_36_48: [],
        hwvx_proto_world_36_48_16: [],
        hwvx_proto_world_36_48_8: [],
        hwvx_proto_world_36_48_24: [],
        hwvx_proto_world_76: [],
        hwvx_proto_world_52: [],
        hwvx_proto_world_108: [],
        hwvx_proto_world_108_44t6: [],
        hwvx_proto_world_120_0: [],
        hwvx_proto_collision_32_48: [],
        hwvx_proto_collision_link: [],
        hwvx_proto_model_anims_1: [],
        hwvx_proto_model_anims_2: [],
        hwvx_proto_texture: [],
        hwvx_proto_world_text_link: [],
        hwvx_proto_world_settings: [],
        hwvx_proto_world_small_section: [],
        hwvx_proto_world_model_related: [],
        hwvx_proto_world_idk: [],
        hwvx_proto_some_world_thing: [],
        hwvx_proto_geo_list: [],
        hwvx_proto_collision_settings: [],
        hwvx_proto_car: [],
        hwvx_proto_car_related: [],
        hwvx_proto_car_link: [],
        hwvx_proto_mysterious: [],
        hwvx_proto_strange: [],
        hwvx_proto_model_link: [],
        hwvx_proto_text: [],
        hwvx_proto_font: [],
        hwvx_proto_interface: [],
        hwvx_proto_interface_text_related: [],
        hwvx_proto_unknown: [],
        hwvx_proto_unknown_idk_sec: [],
        hwvx_proto_unknown_link_section: [],
        hwvx_proto_grand_section: [],
        hwvx_proto_unknown_thing: [],
        hwvx_proto_asdf: [],
        hwvx_proto_item: [],
        hwvx_proto_link: [],
        hwvx_proto_sound_controls: [],
        hwvx_proto_sound_section: [],
    })
    g.unordered_ref = x[0]

}

function im_hwvx_proto_basic(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "uZNx",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_basic_4(u32(o + 4) + g.m, x[i].section_4);
    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_basic_4(o, x) {
    x.push({
        sec_id: "j3qp",
        section_0: [],
        u32_4: u32(o + 4),
    });

    switch (g.file_dir_type) {
    case "car":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_car_array, im_hwvx_proto_car, g.unordered_ref.hwvx_proto_car);
        break
    case "interface":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
        break
    case "item":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_item_array, im_hwvx_proto_item, g.unordered_ref.hwvx_proto_item);
        break
    case "link":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_link_array, im_hwvx_proto_link, g.unordered_ref.hwvx_proto_link);
        break
    case "audio":
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
        break
    case "music":
        // nothing ?
        // im_hwvx_proto_basic(o, x[0].file_specific)
        break
    default:
        console.pk_log('file type is not set')
    }
    // u32(o + 0) && im_hwvx_proto_directory(u32(o + 0) + g.m,x[0].section_0); // offset? 

    // 8 bytes;

}
function im_hwvx_proto_geo_basic(o, x, geo_model_amt) {
    x.push({
        sec_id: "rwx_",
        section_0: [],
        section_4: [],
    });

    for (let i = 0; i < geo_model_amt; i++) {
        im_hwvx_proto_geo_basic_0(u32(o + 0) + (i * 12) + g.m, i, x[0].section_0, u32(o + 0) + g.m);
    }

    u32(o + 4) && im_hwvx_proto_geo_list(u32(o + 4) + g.m, x[0].section_4);

    // 8 bytes;

}
function im_hwvx_proto_geo_basic_0(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "nMcM",
        u32_0: u32(o + 0),
        model_8: [],
    });

    x[i].model_8 = in_models(o + 8, g.hwvx_proto_models_array, im_hwvx_proto_models, g.datapack_ref.models);

}
function im_hwvx_proto_share(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "FNM8",
        model_0: [],
    });
    x[i].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);
    
}
function im_hwvx_proto_world(o, x) {
    x.push({
        sec_id: "rjJj",
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        unordered_hwvx_proto_world_20_20: 0,
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        unordered_hwvx_proto_world_76_84: 0,
        u32_88: u32(o + 88),
        //amount?
        section_92: [],
        u32_96: u32(o + 96),
        //amount?
        section_100: [],
        u32_104: u32(o + 104),
        //amount?
        unordered_hwvx_proto_world_108_108: 0,
        u32_112: u32(o + 112),
        //amount?
        section_116: [],
        section_120: [],
        section_124: im_string(u32(o + 124), 0, false),
        section_132: im_string(u32(o + 132), 0, false),
        section_140: im_string(u32(o + 140), 0, false),
        unordered_hwvx_proto_world_settings_156: 0,
    });

    u32(o + 4) && im_hwvx_proto_world_4(u32(o + 4) + g.m, x[0].section_4);

    for (let i = 0; i < u32(o + 8); i++) {
        x[0].section_12 = in_ml(u32(o + 12) + (i * 96), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
    }
    for (let ii = 0; ii < u32(o + 16); ii++) {
        x[0].unordered_hwvx_proto_world_20_20 = in_ml(u32(o + 20) + (ii * 20), g.hwvx_proto_world_20_array, im_hwvx_proto_world_20, g.unordered_ref.hwvx_proto_world_20);
    }

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_hwvx_proto_world_36(u32(o + 36) + (ii * 64) + g.m, ii, x[0].section_36);
        // x[0].unordered_hwvx_proto_world_36_36 = in_ml(, g.hwvx_proto_world_36_array, , g.unordered_ref.hwvx_proto_world_36);
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_hwvx_proto_world_44(u32(o + 44) + (ii * 64) + g.m, ii, x[0].section_44);
        // x[0].unordered_hwvx_proto_world_44_44 = in_ml( g.hwvx_proto_world_44_array, im_hwvx_proto_world_44, g.unordered_ref.hwvx_proto_world_44);
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        x[0].section_52 = in_ml(u32(o + 52) + (ii * 112), g.hwvx_proto_world_52_array, im_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52);
        // im_hwvx_proto_world_52(+ g.m, ii, x[0].)
    }

    for (let ii = 0; ii < u32(o + 72); ii++) {
        im_hwvx_proto_world_76(u32(o + 76) + (ii * 4) + g.m, ii, x[0].section_76);
        // x[0].unordered_hwvx_proto_world_76_76 = in_ml( g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);
    }
    x[0].unordered_hwvx_proto_world_76_84 = in_ml(u32(o + 84), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);
    for (let ii = 0; ii < u32(o + 88); ii++) {
        im_hwvx_proto_world_92(u32(o + 92) + (ii * 8) + g.m, ii, x[0].section_92)
        // x[0].unordered_hwvx_proto_world_92_92 = in_ml( g.hwvx_proto_world_92_array, im_hwvx_proto_world_92, g.unordered_ref.hwvx_proto_world_92);
    }

    for (let ii = 0; ii < u32(o + 96); ii++) {
        im_hwvx_proto_world_100(u32(o + 100) + (ii * 16) + g.m, ii, x[0].section_100)
        // x[0].unordered_hwvx_proto_world_100_100 = in_ml(u32(o + 100), g.hwvx_proto_world_100_array, im_hwvx_proto_world_100, g.unordered_ref.hwvx_proto_world_100);
    }
    for (let ii = 0; ii < u32(o + 104); ii++) {
        x[0].unordered_hwvx_proto_world_108_108 = in_ml(u32(o + 108) + (ii * 48), g.hwvx_proto_world_108_array, im_hwvx_proto_world_108, g.unordered_ref.hwvx_proto_world_108);
    }

    for (let ii = 0; ii < u32(o + 112); ii++) {
        u32(o + 116) && im_hwvx_proto_world_116(u32(o + 116) + (ii * 32) + g.m, ii, x[0].section_116);
        // x[0].unordered_hwvx_proto_world_116_116 = in_ml(u32(o + 116), g.hwvx_proto_world_116_array, im_hwvx_proto_world_116, g.unordered_ref.hwvx_proto_world_116);
    }
    u32(o + 120) && im_hwvx_proto_world_120(u32(o + 120) + g.m, x[0].section_120);
    // x[0].unordered_hwvx_proto_world_120_120 = in_ml(u32(o + ), g.hwvx_proto_world_120_array, , g.unordered_ref.hwvx_proto_world_120);

    x[0].unordered_hwvx_proto_world_settings_156 = in_ml(u32(o + 156), g.hwvx_proto_world_settings_array, im_hwvx_proto_world_settings, g.unordered_ref.hwvx_proto_world_settings);

    // 160 bytes;

}
function im_hwvx_proto_world_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=>48",
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
        unordered_hwvx_proto_world_idk_64: 0,
        unordered_hwvx_proto_world_idk_68: 0,
        unordered_hwvx_proto_world_idk_72: 0,
        unordered_hwvx_proto_world_idk_76: 0,
        u32_80: u32(o + 80),
        u32_92: u32(o + 92),
    });

    x[i].unordered_hwvx_proto_world_idk_64 = in_ml(u32(o + 64), g.hwvx_proto_world_idk_array, im_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk);
    x[i].unordered_hwvx_proto_world_idk_68 = in_ml(u32(o + 68), g.hwvx_proto_world_idk_array, im_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk);
    x[i].unordered_hwvx_proto_world_idk_72 = in_ml(u32(o + 72), g.hwvx_proto_world_idk_array, im_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk);
    x[i].unordered_hwvx_proto_world_idk_76 = in_ml(u32(o + 76), g.hwvx_proto_world_idk_array, im_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk);

}
function im_hwvx_proto_world_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "eBnd",
        u32_0: u32(o + 0),
        unordered_hwvx_proto_model_anims_1_4: 0,
        f32_8: f32(o + 8),
        section_12: [],
    });

    x[i].unordered_hwvx_proto_model_anims_1_4 = in_ml(u32(o + 4), g.hwvx_proto_model_anims_1_array, im_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1);
    u32(o + 12) && im_hwvx_proto_world_20_12(u32(o + 12) + g.m, x[i].section_12);
    return x[i].id
    // 20 bytes;

}
function im_hwvx_proto_world_20_12(o, x) {
    x.push({
        sec_id: "taFF",
        model_0: [],
        u8_5: u8(o + 5),
        u8_7: u8(o + 7),
        f32_8: f32(o + 8),
        unordered_hwvx_proto_car_link_16: 0,
    });
    x[0].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);
    x[0].unordered_hwvx_proto_car_link_16 = in_ml(u32(o + 16), g.hwvx_proto_car_link_array, im_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link);

    // 32 bytes;

}
function im_hwvx_proto_world_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ">je2",
        u32_0: u32(o + 0),
        u32_12: u32(o + 12),
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        unordered_hwvx_proto_world_36_36: 0,
        unordered_hwvx_proto_strange_world_36_48: 0,
    });

    for (let ii = 0; ii < u32(o + 24); ii += 32) {
        im_hwvx_proto_world_36_28(u32(o + 28) + (ii * 32) + g.m, ii, x[i].section_28);
    }
    x[i].unordered_hwvx_proto_world_36_36 = in_ml(u32(o + 36), g.hwvx_proto_world_36_36_array, im_hwvx_proto_world_36_36, g.unordered_ref.hwvx_proto_world_36_36);
    // u32(o + ) && im_hwvx_proto_world_36_36(u32(o + 36) + g.m,0, x[i].section_36);
    // // u32(o + 48) && im_hwvx_proto_world_36_48(u32(o + 48) + g.m,0, x[i].section_48);
    x[i].unordered_hwvx_proto_strange_world_36_48 = in_ml(u32(o + 48), g.hwvx_proto_world_36_48_array, im_hwvx_proto_world_36_48, g.unordered_ref.hwvx_proto_world_36_48);

}
function im_hwvx_proto_world_36_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "vH^o",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_world_36_48(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "U<>y",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });
    for (let ii = 0; ii < u32(o + 4); ii++) {
        x[i].section_8 = in_ml(u32(o + 8) + (ii * 64), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
    }
    // u32(o + 8) && im_hwvx_proto_world_36_48_8(u32(o + 8) + g.m,x[i].section_8); // offset? 
    u32(o + 16) && im_hwvx_proto_world_36_48_16(u32(o + 16) + g.m, 0, x[i].section_16);
    // offset? 
    // u32(o + 24) && im_hwvx_proto_world_36_48_24(u32(o + 24) + g.m,x[i].section_24); // offset? 
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_proto_world_36_48_24(u32(o + 24) + (ii * 64) + g.m, ii, x[i].section_24);
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_world_36_48_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "00LC",
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
        unordered_hwvx_proto_strange_36: 0,
        f32_44: f32(o + 44),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
    });

    x[i].unordered_hwvx_proto_strange_36 = in_ml(u32(o + 36), g.hwvx_proto_strange_array, im_hwvx_proto_strange, g.unordered_ref.hwvx_proto_strange);
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_world_36_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ">8l?",
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
function im_hwvx_proto_world_36_48_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "HY@p",
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
        unordered_hwvx_proto_world_model_related_36: 0,
        f32_40: f32(o + 40),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
    });

    x[i].unordered_hwvx_proto_world_model_related_36 = in_ml(u32(o + 36), g.hwvx_proto_world_model_related_array, im_hwvx_proto_world_model_related, g.unordered_ref.hwvx_proto_world_model_related);
    // u32(o + 36) && im_hwvx_proto_world_model_related(u32(o + 36) + g.m,x[i].section_36); // offset? 
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_world_36_48_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "S;d?",
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
function im_hwvx_proto_world_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "zBaW",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        unordered_hwvx_proto_sound_section_20: 0,
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
    });

    x[i].unordered_hwvx_proto_sound_section_20 = in_ml(u32(o + 20), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);

}
function im_hwvx_proto_world_116(o, i, x) {
    x.push({
        sec_id: "7K=p",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_proto_world_76(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "ZEh]",
        unordered_hwvx_proto_world_small_section_0: 0,
    });

    x[i].unordered_hwvx_proto_world_small_section_0 = in_ml(u32(o + 0), g.hwvx_proto_world_small_section_array, im_hwvx_proto_world_small_section, g.unordered_ref.hwvx_proto_world_small_section);
    // u32(o + 0) && im_hwvx_proto_world_small_section(u32(o + 0) + g.m,x[i].section_0); // offset? 
    return x[i].id
    // 4 bytes;

}
function im_hwvx_proto_world_52(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "TQ0O",
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
        x[i].section_88 = in_ml(u32(o + 88), g.hwvx_proto_world_52_array, im_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52);
        // u32(o + ) && im_hwvx_proto_world_52(u32(o + 88) + g.m,0, x[i].);
        break;
    case 1:
        u32(o + 88) && im_hwvx_proto_world_52_88t1(u32(o + 88) + g.m, x[i].section_88);
        break;
    }
    return x[i].id
    // 112 bytes;

}
function im_hwvx_proto_world_52_88t1(o, x) {
    x.push({
        sec_id: "ESX3",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_world_92(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=Xx@",
        unordered_hwvx_proto_world_text_link_4: 0,
    });

    x[i].unordered_hwvx_proto_world_text_link_4 = in_ml(u32(o + 4), g.hwvx_proto_world_text_link_array, im_hwvx_proto_world_text_link, g.unordered_ref.hwvx_proto_world_text_link);

}
function im_hwvx_proto_world_100(o, i, x) {
    x.push({
        sec_id: "1ctA",
        u32_0: u32(o + 0),
        unordered_hwvx_proto_world_color_section_4: 0,
        u32_8: u32(o + 8),
    });

    x[i].unordered_hwvx_proto_world_color_section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_color_section_array, im_hwvx_proto_world_color_section, g.unordered_ref.hwvx_proto_world_color_section);

    // 16 bytes;

}
function im_hwvx_proto_world_108(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "6uH?",
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

    u32(o + 40) && im_hwvx_proto_world_108_40(u32(o + 40) + g.m, x[i].section_40);
    switch (u32(o + 12)) {
    case 1:
        u32(o + 44) && im_hwvx_proto_world_108_44t1(u32(o + 44) + g.m, x[i].section_44);
        break;
    case 2:
        u32(o + 44) && im_hwvx_proto_world_108_44t2(u32(o + 44) + g.m, x[i].section_44);
        break;
    case 3:
        u32(o + 44) && im_hwvx_proto_world_108_44t3(u32(o + 44) + g.m, x[i].section_44);
        break;
    case 6:
        x[i].section_44 = in_ml(u32(o + 44), g.hwvx_proto_world_108_44t6_array, im_hwvx_proto_world_108_44t6, g.unordered_ref.hwvx_proto_world_108_44t6);
        break;
    }
    return x[i].id
    // 48 bytes;

}
function im_hwvx_proto_world_108_40(o, x) {
    x.push({
        sec_id: "oqWI",
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
function im_hwvx_proto_world_108_44t1(o, x) {
    x.push({
        sec_id: "M=7v",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_proto_world_108_44t2(o, x) {
    x.push({
        sec_id: "IENC",
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
function im_hwvx_proto_world_108_44t3(o, x) {
    x.push({
        sec_id: "E=O_",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_world_108_44t6(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "VGH4",
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
        u32_24: u32(o + 24),
    });

    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_world_4(o, x) {
    x.push({
        sec_id: "rWN=",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
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
        im_hwvx_proto_world_4_16(u32(o + 16) + (i * 56) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_proto_world_4_20(u32(o + 20) + (i * 4) + g.m, i, x[0].section_20);
    }

    // 64 bytes;

}
function im_hwvx_proto_world_4_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "rjvv",
        u32_0: u32(o + 0),
    });

}
function im_hwvx_proto_world_4_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Nxlg",
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
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_world_4_16_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_proto_world_4_16_4(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_proto_world_4_16_4(u32(o + 20) + (ii * 4) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_proto_world_4_16_4(u32(o + 28) + (ii * 4) + g.m, ii, x[i].section_28);
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_hwvx_proto_world_4_16_4(u32(o + 52) + (ii * 4) + g.m, ii, x[i].section_52);
    }

}
function im_hwvx_proto_world_4_16_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "09ci",
        unordered_hwvx_proto_world_108_0: 0,
    });

    x[i].unordered_hwvx_proto_world_108_0 = in_ml(u32(o + 0), g.hwvx_proto_world_108_array, im_hwvx_proto_world_108, g.unordered_ref.hwvx_proto_world_108);

}
function im_hwvx_proto_world_120(o, x) {
    x.push({
        sec_id: "?R3u",
        unordered_hwvx_proto_world_120_0_0: 0,
        u32_4: u32(o + 4),
        //amount?
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
    });

    for (let i = 0; i < u32(o + 4); i++) {
        x[0].unordered_hwvx_proto_world_120_0_0 = in_ml(u32(o + 0) + (i * 112), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
    }

    // 16 bytes;

}
function im_hwvx_proto_world_120_0(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "xQij",
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
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        f32_76: f32(o + 76),
        u32_80: u32(o + 80),
        u8_85: u8(o + 85),
        u8_86: u8(o + 86),
        u8_87: u8(o + 87),
        u32_96: u32(o + 96),
        u32_100: u32(o + 100),
    });

    return x[i].id
    // 112 bytes;

}
function im_hwvx_proto_collision(o, x) {
    x.push({
        sec_id: "56Am",
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
        unordered_hwvx_proto_collision_link_92: 0,
    });

    for (let i = 0; i < u32(o + 68); i++) {
        im_hwvx_proto_collision_32(u32(o + 32) + (i * 80) + g.m, i, x[0].section_32);
    }
    let collision_amount = u32(o + 52) * u32(o + 56) * u32(o + 60)
    for (let i = 0; i < collision_amount; i++) {
        im_hwvx_proto_collision_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }
    for (let ii = 0; ii < u32(o + 76); ii++) {
        im_hwvx_proto_collision_76(u32(o + 76) + (ii * 32) + g.m, ii, x[0].section_76);
    }
    for (let ii = 0; ii < u32(o + 80); ii++) {
        im_hwvx_proto_collision_84(u32(o + 84) + (ii * 48) + g.m, ii, x[0].section_84);
    }
    x[0].unordered_hwvx_proto_collision_link_92 = in_ml(u32(o + 92), g.hwvx_proto_collision_link_array, im_hwvx_proto_collision_link, g.unordered_ref.hwvx_proto_collision_link);

    // 96 bytes;

}
function im_hwvx_proto_collision_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "G_SO",
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
        hwvx_proto_collision_32_48_48: 0,
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        u32_64: u32(o + 64),
        hwvx_proto_collision_32_48_68: [],
    });

    if (u32(o + 48)) {
        for (let ii = 0; ii < u32(o + 60); ii++) {
            x[0].hwvx_proto_collision_32_48_48 = in_ml(u32(o + 48) + (ii * 32), g.hwvx_proto_collision_32_48_array, im_hwvx_proto_collision_32_48, g.unordered_ref.hwvx_proto_collision_32_48);
        }
    }

    if (u32(o + 56)) {
        for (let ii = 0; ii < u32(o + 60); ii++) {
            im_hwvx_proto_collision_32_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
        }
    }

    if (u32(o + 68)) {
        x[0].hwvx_proto_collision_32_48_68 = in_ml(u32(o + 68), g.hwvx_proto_collision_32_48_array, im_hwvx_proto_collision_32_48, g.unordered_ref.hwvx_proto_collision_32_48);
    }
}

function im_hwvx_proto_collision_32_48(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "jPo9",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
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
function im_hwvx_proto_collision_32_56(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "yQx5",
        u32_0: u32(o + 0),
    });

}
function im_hwvx_proto_collision_64(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "0lq8",
        u32_0: u32(o + 0),
    });

}
function im_hwvx_proto_collision_76(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "JRcn",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        u32_28: u32(o + 28),
    });

    u32(o + 16) && im_hwvx_proto_collision_76_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_proto_collision_76_16(o, x) {
    x.push({
        sec_id: "5i:=",
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
function im_hwvx_proto_collision_84(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "FN^k",
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
function im_hwvx_proto_collision_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Gx;=",
        unordered_hwvx_proto_collision_settings_0: 0,
        unordered_hwvx_proto_collision_settings_4: 0,
    });

    x[0].unordered_hwvx_proto_collision_settings_0 = in_ml(u32(o + 0), g.hwvx_proto_collision_settings_array, im_hwvx_proto_collision_settings, g.unordered_ref.hwvx_proto_collision_settings);
    x[0].unordered_hwvx_proto_collision_settings_4 = in_ml(u32(o + 4), g.hwvx_proto_collision_settings_array, im_hwvx_proto_collision_settings, g.unordered_ref.hwvx_proto_collision_settings);
    // offset?
    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "3aN[",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        u32_32: u32(o + 32),
        u32_40: u32(o + 40),
    });

    switch (u32(o + 8)) {
    case 1:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 3:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_4t3(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 5:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_4t5(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 6:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_4t6(u32(o + 4) + g.m, x[i].section_4);
        break;
    default:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_4trest(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_proto_triggers_and_actions_12(u32(o + 12) + (ii * 44) + g.m, ii, x[i].section_12);
    }
    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_hwvx_proto_triggers_and_actions_20(u32(o + 20) + (ii * 24) + g.m, ii, x[i].section_20);
    }

    u32(o + 24) && im_hwvx_proto_triggers_and_actions_24(u32(o + 24) + g.m, x[i].section_24);
    return x[i].id
    // 44 bytes;

}
function im_hwvx_proto_triggers_and_actions_4t1(o, x) {
    x.push({
        sec_id: "fN<n",
        unordered_hwvx_proto_interface_0: 0,
    });

    x[0].unordered_hwvx_proto_interface_0 = in_ml(u32(o + 0), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_4t3(o, x) {
    x.push({
        sec_id: "t:LV",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_4t5(o, x) {
    x.push({
        sec_id: "7u;j",
        u32_0: u32(o + 0),
        section_4_type: "?",
        section_4: [],
        u32_8: u32(o + 8),
        section_12: [],
        section_12_type: [],
        u32_16: u32(o + 16),
    });

    if (u32(o + 4)) {
        let check_val = u32(o + 4) + g.m
        if (g.hwvx_proto_world_108_array.includes(check_val)) {
            x[0].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_108_array, im_hwvx_proto_world_108, g.unordered_ref.hwvx_proto_world_108);
            x[0].section_type = "hwvx_proto_world_108"
        } else if (g.hwvx_proto_world_76_array.includes(check_val)) {
            x[0].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);
            x[0].section_type = "hwvx_proto_world_76"
        } else if (g.hwvx_proto_world_36_48_24_array.includes(check_val)) {
            x[0].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
            x[0].section_type = "hwvx_proto_world_36_48_24"
        } else {
            x[0].section_4 = u32(o + 4)
        }
    }

    switch (u32(o + 16)) {
    case 0:
        let check_val = u32(o + 16) + g.m
        if (g.hwvx_proto_world_12_array.includes(check_val)) {
            x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
            x[0].section_12_type = "hwvx_proto_world_12"
        } else if (g.hwvx_proto_world_36_48_24_array.includes(check_val)) {
            x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
            x[0].section_12_type = "hwvx_proto_world_36_48_24"
        } else {
            x[0].section_12 = u32(o + 12)
        }
        break
    case 22:
        x[0].section_12 = u32(o + 12)
        break
    }

    // u32(o + 4) && im_hwvx_proto_world_36_48_24(u32(o + 4) + g.m,x[0].section_4); // offset? 
    // switch(u32(o + 16)){
    //     case hwvx_proto_world_12</a><br>:
    // x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
    //     break;
    //     case hwvx_proto_world_36_48_24</a><br>:
    // x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
    //     break;
    // } 
    // 32 bytes;

}

function hwvx_proto_return_if_value_in_multilink(o) {
    let value_object = {
        section: [],
        type: "no link ?",
    }
    let check_val = o
    if (g.hwvx_proto_world_12_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        value_object.type = "hwvx_proto_world_12"
    } else if (g.hwvx_proto_world_20_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_20_array, im_hwvx_proto_world_20, g.unordered_ref.hwvx_proto_world_20);
        value_object.type = "hwvx_proto_world_20"
    } else if (g.hwvx_proto_world_36_36_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_36_36_array, im_hwvx_proto_world_36_36, g.unordered_ref.hwvx_proto_world_36_36);
        value_object.type = "hwvx_proto_world_36_36"
    } else if (g.hwvx_proto_world_36_48_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_36_48_array, im_hwvx_proto_world_36_48, g.unordered_ref.hwvx_proto_world_36_48);
        value_object.type = "hwvx_proto_world_36_48"
    } else if (g.hwvx_proto_world_36_48_16_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_36_48_16_array, im_hwvx_proto_world_36_48_16, g.unordered_ref.hwvx_proto_world_36_48_16);
        value_object.type = "hwvx_proto_world_36_48_16"
    } else if (g.hwvx_proto_world_36_48_8_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
        value_object.type = "hwvx_proto_world_36_48_8"
    } else if (g.hwvx_proto_world_36_48_24_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
        value_object.type = "hwvx_proto_world_36_48_24"
    } else if (g.hwvx_proto_world_76_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);
        value_object.type = "hwvx_proto_world_76"
    } else if (g.hwvx_proto_world_52_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_52_array, im_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52);
        value_object.type = "hwvx_proto_world_52"
    } else if (g.hwvx_proto_world_108_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_108_array, im_hwvx_proto_world_108, g.unordered_ref.hwvx_proto_world_108);
        value_object.type = "hwvx_proto_world_108"
    } else if (g.hwvx_proto_world_108_44t6_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_108_44t6_array, im_hwvx_proto_world_108_44t6, g.unordered_ref.hwvx_proto_world_108_44t6);
        value_object.type = "hwvx_proto_world_108_44t6"
    } else if (g.hwvx_proto_world_120_0_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
        value_object.type = "hwvx_proto_world_120_0"
    } else if (g.hwvx_proto_collision_32_48_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_collision_32_48_array, im_hwvx_proto_collision_32_48, g.unordered_ref.hwvx_proto_collision_32_48);
        value_object.type = "hwvx_proto_collision_32_48"
    } else if (g.hwvx_proto_collision_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_collision_link_array, im_hwvx_proto_collision_link, g.unordered_ref.hwvx_proto_collision_link);
        value_object.type = "hwvx_proto_collision_link"
    } else if (g.hwvx_proto_triggers_and_actions_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_triggers_and_actions_array, im_hwvx_proto_triggers_and_actions, g.unordered_ref.hwvx_proto_triggers_and_actions);
        value_object.type = "hwvx_proto_triggers_and_actions"
    } else if (g.hwvx_proto_texture_anims_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_texture_anims_array, im_hwvx_proto_texture_anims, g.unordered_ref.hwvx_proto_texture_anims);
        value_object.type = "hwvx_proto_texture_anims"
    } else if (g.hwvx_proto_model_anims_1_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_model_anims_1_array, im_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1);
        value_object.type = "hwvx_proto_model_anims_1"
    } else if (g.hwvx_proto_model_anims_2_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);
        value_object.type = "hwvx_proto_model_anims_2"
    } else if (g.hwvx_proto_texture_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_texture_array, im_hwvx_proto_texture, g.unordered_ref.hwvx_proto_texture);
        value_object.type = "hwvx_proto_texture"
    } else if (g.hwvx_proto_world_color_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_color_section_array, im_hwvx_proto_world_color_section, g.unordered_ref.hwvx_proto_world_color_section);
        value_object.type = "hwvx_proto_world_color_section"
    } else if (g.hwvx_proto_world_text_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_text_link_array, im_hwvx_proto_world_text_link, g.unordered_ref.hwvx_proto_world_text_link);
        value_object.type = "hwvx_proto_world_text_link"
    } else if (g.hwvx_proto_world_settings_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_settings_array, im_hwvx_proto_world_settings, g.unordered_ref.hwvx_proto_world_settings);
        value_object.type = "hwvx_proto_world_settings"
    } else if (g.hwvx_proto_world_small_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_small_section_array, im_hwvx_proto_world_small_section, g.unordered_ref.hwvx_proto_world_small_section);
        value_object.type = "hwvx_proto_world_small_section"
    } else if (g.hwvx_proto_world_model_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_model_related_array, im_hwvx_proto_world_model_related, g.unordered_ref.hwvx_proto_world_model_related);
        value_object.type = "hwvx_proto_world_model_related"
    } else if (g.hwvx_proto_world_idk_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_world_idk_array, im_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk);
        value_object.type = "hwvx_proto_world_idk"
    } else if (g.hwvx_proto_some_world_thing_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_some_world_thing_array, im_hwvx_proto_some_world_thing, g.unordered_ref.hwvx_proto_some_world_thing);
        value_object.type = "hwvx_proto_some_world_thing"
    } else if (g.hwvx_proto_geo_list_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_geo_list_array, im_hwvx_proto_geo_list, g.unordered_ref.hwvx_proto_geo_list);
        value_object.type = "hwvx_proto_geo_list"
    } else if (g.hwvx_proto_collision_settings_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_collision_settings_array, im_hwvx_proto_collision_settings, g.unordered_ref.hwvx_proto_collision_settings);
        value_object.type = "hwvx_proto_collision_settings"
    } else if (g.hwvx_proto_car_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_car_array, im_hwvx_proto_car, g.unordered_ref.hwvx_proto_car);
        value_object.type = "hwvx_proto_car"
    } else if (g.hwvx_proto_car_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_car_related_array, im_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related);
        value_object.type = "hwvx_proto_car_related"
    } else if (g.hwvx_proto_car_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_car_link_array, im_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link);
        value_object.type = "hwvx_proto_car_link"
    } else if (g.hwvx_proto_mysterious_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_mysterious_array, im_hwvx_proto_mysterious, g.unordered_ref.hwvx_proto_mysterious);
        value_object.type = "hwvx_proto_mysterious"
    } else if (g.hwvx_proto_strange_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_strange_array, im_hwvx_proto_strange, g.unordered_ref.hwvx_proto_strange);
        value_object.type = "hwvx_proto_strange"
    } else if (g.hwvx_proto_model_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_model_link_array, im_hwvx_proto_model_link, g.unordered_ref.hwvx_proto_model_link);
        value_object.type = "hwvx_proto_model_link"
    } else if (g.hwvx_proto_text_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
        value_object.type = "hwvx_proto_text"
    } else if (g.hwvx_proto_font_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_font_array, im_hwvx_proto_font, g.unordered_ref.hwvx_proto_font);
        value_object.type = "hwvx_proto_font"
    } else if (g.hwvx_proto_interface_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
        value_object.type = "hwvx_proto_interface"
    } else if (g.hwvx_proto_interface_text_related_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_interface_text_related_array, im_hwvx_proto_interface_text_related, g.unordered_ref.hwvx_proto_interface_text_related);
        value_object.type = "hwvx_proto_interface_text_related"
    } else if (g.hwvx_proto_unknown_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
        value_object.type = "hwvx_proto_unknown"
    } else if (g.hwvx_proto_unknown_idk_sec_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_unknown_idk_sec_array, im_hwvx_proto_unknown_idk_sec, g.unordered_ref.hwvx_proto_unknown_idk_sec);
        value_object.type = "hwvx_proto_unknown_idk_sec"
    } else if (g.hwvx_proto_unknown_link_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_unknown_link_section_array, im_hwvx_proto_unknown_link_section, g.unordered_ref.hwvx_proto_unknown_link_section);
        value_object.type = "hwvx_proto_unknown_link_section"
    } else if (g.hwvx_proto_grand_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_grand_section_array, im_hwvx_proto_grand_section, g.unordered_ref.hwvx_proto_grand_section);
        value_object.type = "hwvx_proto_grand_section"
    } else if (g.hwvx_proto_unknown_thing_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_unknown_thing_array, im_hwvx_proto_unknown_thing, g.unordered_ref.hwvx_proto_unknown_thing);
        value_object.type = "hwvx_proto_unknown_thing"
    } else if (g.hwvx_proto_asdf_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_asdf_array, im_hwvx_proto_asdf, g.unordered_ref.hwvx_proto_asdf);
        value_object.type = "hwvx_proto_asdf"
    } else if (g.hwvx_proto_item_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_item_array, im_hwvx_proto_item, g.unordered_ref.hwvx_proto_item);
        value_object.type = "hwvx_proto_item"
    } else if (g.hwvx_proto_link_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_link_array, im_hwvx_proto_link, g.unordered_ref.hwvx_proto_link);
        value_object.type = "hwvx_proto_link"
    } else if (g.hwvx_proto_sound_controls_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
        value_object.type = "hwvx_proto_sound_controls"
    } else if (g.hwvx_proto_sound_section_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
        value_object.type = "hwvx_proto_sound_section"
    } else if (g.hwvx_proto_texture_anims_0_array.includes(check_val)) {
        value_object.section = in_ml(u32(o - g.m), g.hwvx_proto_texture_anims_0_array, im_hwvx_proto_texture_anims_0, g.unordered_ref.hwvx_proto_texture_anims_0);
        value_object.type = "hwvx_proto_texture_anims_0"
    }
    return value_object
}

function im_hwvx_proto_triggers_and_actions_4t6(o, x) {
    x.push({
        sec_id: "xXSo",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_hwvx_proto_world_12_12: 0,
        f32_20: f32(o + 20),
    });

    x[0].unordered_hwvx_proto_world_12_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);

    // 32 bytes;

}
function im_hwvx_proto_triggers_and_actions_4trest(o, x) {
    x.push({
        sec_id: "4Fw^",
        u32_0: u32(o + 0),
        section_2: [],
        section_3: [],
        section_4: [],
        //amount?
    });
    let _1st_amnt = u32(o)
    let _1st_length = (_1st_amnt * 4) + 4 + o

    for (let i = 0; i < _1st_amnt; i++) {
        get_hwvx_proto_triggers_and_actions_4trest_1st(u32(o + 4) + (i * 4) + g.m, i, x[0].section_2)
    }

    let _2nd_amnt = 0
    let _2nd_length = 0
    _2nd_amnt = u32(_1st_length)
    _2nd_length = (_2nd_amnt * 4) + _1st_length + 4

    o = _1st_length
    for (let i = 0; i < _2nd_amnt; i++) {
        get_hwvx_proto_triggers_and_actions_4trest_2nd(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4)
    }
    // 4 bytes;

}
function get_hwvx_proto_triggers_and_actions_4trest_1st(o, i, x) {
    x.push({
        sec_id: "a????",
        section_0: [],
        type: "?",
        //amount?
    });
    let type_object = hwvx_proto_return_if_value_in_multilink(o)
    x[i].section_0 = type_object.section
    x[i].type = type_object.type
}
function get_hwvx_proto_triggers_and_actions_4trest_2nd(o, i, x) {
    x.push({
        sec_id: "b????",
        section_0: [],
        type: "?",
        //amount?
    });
    let type_object = hwvx_proto_return_if_value_in_multilink(o)
    x[i].section_0 = type_object.section
    x[i].type = type_object.type
}

function im_hwvx_proto_triggers_and_actions_12(o, i, x) {
    x.push({
        sec_id: "X5:_",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
    });

    u32(o + 4) && im_hwvx_proto_triggers_and_actions_12_4(u32(o + 4) + g.m, x[i].section_4);

    // ([0] *4) bytes;

}
function im_hwvx_proto_triggers_and_actions_12_4(o, x) {
    x.push({
        sec_id: "4CPG",
        u32_0: u32(o + 0),
        section_4: [],
        section_4_type: [],
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
    });

    let type_object = hwvx_proto_return_if_value_in_multilink(u32(o + 4) + g.m)
    x[0].section_4 = type_object.section
    x[0].section_4_type = type_object.type

    switch (u32(o + 16)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    default:
        x[0].section_12 = f32(o + 16)
    }

    // 4 bytes;

}
function im_hwvx_proto_triggers_and_actions_20(o, i, x) {
    x.push({
        sec_id: "zCiR",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        u32_12: u32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u32_20: u32(o + 20),
    });

    switch (u32(o)) {
    case 0:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t0(u32(o + 4) + g.m, x[i].section_4);
        break
    case 1:
        switch (u32(o + 8)) {
        case 12:
            u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t1t12(u32(o + 4) + g.m, x[i].section_4);
            break
        case 13:
            u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t1t13(u32(o + 4) + g.m, x[i].section_4);
            break
        case 16:
            u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t1t16(u32(o + 4) + g.m, x[i].section_4);
            break
        default:
            console.log(o)
        }
        break
    case 2:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t2(u32(o + 4) + g.m, x[i].section_4);
        break
    case 3:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t3(u32(o + 4) + g.m, x[i].section_4);
        break

    case 4:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t4(u32(o + 4) + g.m, x[i].section_4);
        break
    case 5:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t5(u32(o + 4) + g.m, x[i].section_4);
        break

    case 6:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t6(u32(o + 4) + g.m, x[i].section_4);
        break

    case 7:
    case 16:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t7(u32(o + 4) + g.m, x[i].section_4);
        break

    case 8:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t8(u32(o + 4) + g.m, x[i].section_4);
        break

    case 9:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t9(u32(o + 4) + g.m, x[i].section_4);
        break
    case 10:
        switch (u32(o + 8)) {
        case 10:
            u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t10t10(u32(o + 4) + g.m, x[i].section_4);
            break
        case 20:
            u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t10t20(u32(o + 4) + g.m, x[i].section_4);
            break
        default:
            console.log(o)
        }
        break
    case 12:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t12(u32(o + 4) + g.m, x[i].section_4);
        break
    case 15:
        for (let ii = 0; ii < u32(o + 8); ii++) {
            im_hwvx_proto_triggers_and_actions_20_4t15(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_4)
        }
        break
    case 17:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t17(u32(o + 4) + g.m, x[i].section_4);
        break
    case 20:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t20(u32(o + 4) + g.m, x[i].section_4);
        break
    case 21:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t21(u32(o + 4) + g.m, x[i].section_4);
        break
    case 22:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t22(u32(o + 4) + g.m, x[i].section_4);
        break
    case 24:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t24(u32(o + 4) + g.m, x[i].section_4);
        break
    case 26:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t26(u32(o + 4) + g.m, x[i].section_4);
        break
    case 31:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t31(u32(o + 4) + g.m, x[i].section_4);
        break
    case 32:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t32(u32(o + 4) + g.m, x[i].section_4);
        break
    case 34:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t34(u32(o + 4) + g.m, x[i].section_4);
        break
    case 36:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t36(u32(o + 4) + g.m, x[i].section_4);
        break
    case 38:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t38(u32(o + 4) + g.m, x[i].section_4);
        break
    case 39:
        u32(o + 4) && im_hwvx_proto_triggers_and_actions_20_4t39(u32(o + 4) + g.m, x[i].section_4);
        break
    }

    // offset? 

    // ([0] *4) bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t0(o, x) {
    x.push({
        id: gen_id(),
        sec_id: "nOZg",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)
    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(o + 8 + (i * 4)), g.hwvx_proto_world_108_44t6_array, im_hwvx_proto_world_108_44t6, g.unordered_ref.hwvx_proto_world_108_44t6);
    }

}
function im_hwvx_proto_triggers_and_actions_20_4t1t12(o, x) {
    x.push({
        sec_id: "pTQb",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //check this
        section_8: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
        f32_36: f32(o + 36),
        u32_44: u32(o + 44),
    });

    switch (u32(o + 4)) {
    case 1:
        x[0].section_8 = in_ml(u32(o + 8), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    case 6:
        x[0].section_8 = in_ml(u32(o + 8), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
        break;
    }

    switch (u32(o + 24)) {
    case 1:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    case 2:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
        break;
    case 6:
        x[0].section_28 = in_ml(u32(o + 28), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
        break;
    }
    // 32 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t1t13(o, x) {
    x.push({
        id: gen_id(),
        sec_id: "s@JO",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        u32_8: u32(o + 8),
        section_12: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        u32_48: u32(o + 48),
    });
    switch (u32(o + 8)) {
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    case 2:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
        break;
    case 6:
        x[0].section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
        break;
    }
    switch (u32(o + 28)) {
    case 1:
        x[0].section_32 = in_ml(u32(o + 32), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    case 2:
        x[0].section_32 = in_ml(u32(o + 32), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
        break;
    case 6:
        x[0].section_32 = in_ml(u32(o + 32), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
        break;
    }
}
function im_hwvx_proto_triggers_and_actions_20_4t1t16(o, x) {
    x.push({
        sec_id: "YM2p",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u32_40: u32(o + 40),
        section_44: [],
        f32_52: f32(o + 52),
        u32_60: u32(o + 60),
    });

    switch (u32(o + 20)) {
    case 1:
        x[0].section_24 = in_ml(u32(o + 24), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    case 2:
        x[0].section_24 = in_ml(u32(o + 24), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
        break;
    }
    switch (u32(o + 40)) {
    case 1:
        x[0].section_44 = in_ml(u32(o + 44), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
        break;
    case 2:
        x[0].section_44 = in_ml(u32(o + 44), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
        break;
    }

}
function im_hwvx_proto_triggers_and_actions_20_4t2(o, x) {
    x.push({
        sec_id: "KqY>",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(o + 8 + (i * 4)), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
    }

    // u32(o + 0) && im_hwvx_proto_world_108(u32(o + 0) + g.m, x[0].section_0);
    // offset? 

    // ([4] *4) bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t3(o, x) {
    x.push({
        sec_id: "I^je",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    if (o === 14381608) {
        console.log('this')
    }

    let amt = u32(o + 4)
    let new_o = o + 8

    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(new_o + (i * 4)), g.hwvx_proto_world_36_48_16_array, im_hwvx_proto_world_36_48_16, g.unordered_ref.hwvx_proto_world_36_48_16);
    }

}
function im_hwvx_proto_triggers_and_actions_20_4t4(o, x) {
    x.push({
        sec_id: "Npx[",
        unordered_hwvx_proto_interface_0: 0,
    });

    x[0].unordered_hwvx_proto_interface_0 = in_ml(u32(o + 0), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);

}
function im_hwvx_proto_triggers_and_actions_20_4t5(o, x) {
    x.push({
        sec_id: "LAop",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(o + 8 + (i * 4)), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
    }

}
function im_hwvx_proto_triggers_and_actions_20_4t6(o, x) {
    x.push({
        sec_id: "fCWU",
        u32_0: u32(o + 0),
    });

    // 8 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t7(o, x) {
    x.push({
        sec_id: ":Hq]",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_proto_world_76_8: 0,
        f32_16: f32(o + 16),
    });

    x[0].unordered_hwvx_proto_world_76_8 = in_ml(u32(o + 8), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);

    // 32 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t8(o, x) {
    x.push({
        sec_id: "i5vu",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_hwvx_proto_world_76_12: 0,
    });

    x[0].unordered_hwvx_proto_world_76_12 = in_ml(u32(o + 12), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);

    // 16 bytes;
}
function im_hwvx_proto_triggers_and_actions_20_4t9(o, x) {
    x.push({
        sec_id: "AQmR",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_16: u32(o + 16),
        unordered_hwvx_proto_world_20_20: 0,
    });

    x[0].unordered_hwvx_proto_world_20_20 = in_ml(u32(o + 20), g.hwvx_proto_world_20_array, im_hwvx_proto_world_20, g.unordered_ref.hwvx_proto_world_20);

    // 32 bytes;
}
function im_hwvx_proto_triggers_and_actions_20_4t10t10(o, x) {
    x.push({
        sec_id: "x21k",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
    });

    // 48 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t10t20(o, x) {
    x.push({
        sec_id: "r_Uv",
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
function im_hwvx_proto_triggers_and_actions_20_4t12(o, x) {
    x.push({
        sec_id: "twr?",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(o + 8 + (i * 4)), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
    }

    // ([4] *4) bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t15(o, i, x) {
    x.push({
        sec_id: "?t]q",
        u32_0: u32(o + 0),
        //check this
        section_4: [],
        section_4_type: [],
    });

    let type_object = hwvx_proto_return_if_value_in_multilink(u32(o + 4) + g.m)
    x[i].section_4 = type_object.section
    x[i].section_4_type = type_object.type

    // if (o === 14368084) {
    //     console.log("?")
    // }

    // switch (u32(o + 0)) {
    // case 1:
    //     // x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
    //     x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);
    //     break;
    // case 2:
    //     x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_36_48_8_array, im_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8);
    //     break;
    // case 3:
    //     x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
    //     break;
    // case 6:
    //     x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
    //     break;
    // }
    // [8] *4 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t17(o, x) {
    x.push({
        sec_id: "bitp",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_2: [],
    });

    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(o + 8 + (i * 4)), g.hwvx_proto_world_120_0_array, im_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0);
    }

}
function im_hwvx_proto_triggers_and_actions_20_4t20(o, x) {
    x.push({
        sec_id: "ppf;",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_proto_text_8: 0,
    });

    x[0].unordered_hwvx_proto_text_8 = in_ml(u32(o + 8), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t21(o, x) {
    x.push({
        sec_id: "kA7T",
        u32_0: u32(o + 0),
        unordered_hwvx_proto_world_52_4: 0,
        u32_8: u32(o + 8),
        unordered_hwvx_proto_world_12_12: 0,
    });

    x[0].unordered_hwvx_proto_world_52_4 = in_ml(u32(o + 4), g.hwvx_proto_world_52_array, im_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52);
    x[0].unordered_hwvx_proto_world_12_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);

}
function im_hwvx_proto_triggers_and_actions_20_4t22(o, x) {
    x.push({
        sec_id: ">Cf1",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        //amount?
        section_2: [],
    });
    let amt = u32(o + 8)

    for (let i = 0; i < amt; i++) {
        x[0].section_2 = in_ml(u32(o + 12 + (i * 4)), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);
    }

    // 12 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t24(o, x) {
    x.push({
        sec_id: "5]LU",
        u32_0: u32(o + 0),
        unordered_hwvx_proto_triggers_and_actions_20_4t24t5_4_4: 0,
        u32_8: u32(o + 8),
        unordered_hwvx_proto_triggers_and_actions_20_4t24t5_12_12: 0,
    });

    x[0].unordered_hwvx_proto_triggers_and_actions_20_4t24t5_4_4 = in_ml(u32(o + 4), g.hwvx_proto_world_36_48_24_array, im_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24);
    x[0].unordered_hwvx_proto_triggers_and_actions_20_4t24t5_12_12 = in_ml(u32(o + 12), g.hwvx_proto_world_12_array, im_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12);

    // 32 bytes;
}
function im_hwvx_proto_triggers_and_actions_20_4t26(o, x) {
    x.push({
        sec_id: "g1oO",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_hwvx_proto_world_76_8: 0,
    });

    x[0].unordered_hwvx_proto_world_76_8 = in_ml(u32(o + 8), g.hwvx_proto_world_76_array, im_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76);

    // 16 bytes;
}
function im_hwvx_proto_triggers_and_actions_20_4t31(o, x) {
    x.push({
        sec_id: "KT>V",
        u32_0: u32(o + 0),
        unordered_hwvx_proto_interface_4: 0,
    });

    x[0].unordered_hwvx_proto_interface_4 = in_ml(u32(o + 4), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t32(o, x) {
    x.push({
        sec_id: "P5tz",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t34(o, x) {
    x.push({
        sec_id: "4E^b",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t36(o, x) {
    x.push({
        sec_id: "MJOb",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t38(o, x) {
    x.push({
        sec_id: "6Uxj",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_20_4t39(o, x) {
    x.push({
        sec_id: "[g5w",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_triggers_and_actions_24(o, x) {
    x.push({
        sec_id: "cffS",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
    });

    u32(o + 4) && im_hwvx_proto_triggers_and_actions_24_4(u32(o + 4) + g.m, x[0].section_4);

    // 32 bytes;
}
function im_hwvx_proto_triggers_and_actions_24_4(o, x) {
    x.push({
        sec_id: "pN<^",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        u32_24: u32(o + 24),
    });

    // 48 bytes;
}
function im_hwvx_proto_models(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "NSr;",
        u16_0: u16(o + 0),
        u16_2: u16(o + 2),
        //amount?
        u32_4: u32(o + 4),
        section_8: [],
        section_12: [],
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
    });

    globalThis.model_type = u32(o + 4)

    for (let ii = 0; ii < u16(o + 2); ii++) {
        im_hwvx_proto_model_8(u32(o + 8) + (ii * 24) + g.m, ii, x[i].section_8);
    }

    for (let ii = 0; ii < u16(o + 2); ii++) {
        im_hwvx_proto_model_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_model_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "U>9;",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        //amount?
        u32_4: u32(o + 4),
        section_8: [],
        u32_12: u32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        section_20: im_string(u32(o + 20), 0, false),
    });

    // if (x[i].section_20.string.includes('blood')) {
    //     console.log("?")
    // }


    for (let ii = 0; ii < u16(o + 2); ii++) {
        im_hwvx_proto_model_8_8(u32(o + 8) + (ii * 32) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_proto_model_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "HklA",
        f32_0: f32(o + 0),
    });

}
function im_hwvx_proto_model_8_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=AG@",
        animation_0: im_patch(g.animation_patch_ref, o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        u32_28: u32(o + 28),
    });

    switch (model_type) {
    case 0:
        u32(o + 12) && im_hwvx_proto_model_8_8_12t0(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 7:
        u32(o + 12) && im_hwvx_proto_model_8_8_12t7(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 8:
        u32(o + 12) && im_hwvx_proto_model_8_8_12t8(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
}
function im_hwvx_proto_model_8_8_12t0(o, x) {
    x.push({
        sec_id: "^te<",
        u16_16: u16(o + 16),
        u8_19: u8(o + 19),
        u8_35: u8(o + 35),
        u8_36: u8(o + 36),
        u8_37: u8(o + 37),
        u8_39: u8(o + 39),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_43: u8(o + 43),
        u8_45: u8(o + 45),
        u8_46: u8(o + 46),
        u8_47: u8(o + 47),
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_53: u8(o + 53),
        u8_54: u8(o + 54),
        u8_55: u8(o + 55),
        u16_56: u16(o + 56),
        u8_64: u8(o + 64),
        u8_65: u8(o + 65),
        u8_67: u8(o + 67),
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        //amount?
        u8_71: u8(o + 71),
        section_model_data: [],
    });

    // 72 bytes;
    im_hwvx_proto_model_8_8_12_modeldata(o + 72, 0, x[0].section_model_data)

}
function im_hwvx_proto_model_8_8_12t7(o, x) {
    x.push({
        sec_id: "<Plf",
        u32_16: u32(o + 16),
        section_20: [],
    });

    u32(o + 20) && im_hwvx_proto_model_8_8_12t7_20(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_hwvx_proto_model_8_8_12t8(o, x) {
    x.push({
        sec_id: ";t0o",
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        section_36: [],
    });

    u32(o + 20) && im_hwvx_proto_model_8_8_12t7_20(u32(o + 20) + g.m, x[0].section_20);
    u32(o + 28) && im_hwvx_proto_model_8_8_12t7_20(u32(o + 28) + g.m, x[0].section_28);
    u32(o + 36) && im_hwvx_proto_model_8_8_12t7_20(u32(o + 36) + g.m, x[0].section_36);

    // 48 bytes;

}
function im_hwvx_proto_model_8_8_12t7_20(o, x) {
    x.push({
        sec_id: "fR>T",
        u16_0: u16(o + 0),
        u16_2: u16(o + 2),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u8_48: u8(o + 48),
        u8_49: u8(o + 49),
        u8_51: u8(o + 51),
        u8_52: u8(o + 52),
        u8_53: u8(o + 53),
        section_54: [],
        u8_55: u8(o + 55),
        section_model_data: [],
    });

    im_hwvx_proto_model_8_8_12_modeldata(o + 56, 0, x[0].section_model_data)

    // 56 bytes;

}
function im_hwvx_proto_model_8_8_12_modeldata(o, i, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        id: gen_id(),
        sec_id: "0goX",
        // f32_0: f32(o + 0),
        // f32_4: f32(o + 4),
        // u8_10: u8(o + 10),
        // u8_11: u8(o + 11),
        // u8_12: u8(o + 12),
        // u8_13: u8(o + 13),
        // u8_14: u8(o + 14),
        // u8_15: u8(o + 15),
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

}
function im_hwvx_proto_texture_anims(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "eFdb",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_texture_anims_0(u32(o + 0) + g.m, 0, x[i].section_0);
    // offset? 
    return x[i].id
    // 12 bytes;

}
function im_hwvx_proto_model_anims_1(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "K??i",
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

    u32(o + 24) && im_hwvx_proto_model_anims_1_24(u32(o + 24) + g.m, x[i].section_24);
    u32(o + 28) && im_hwvx_proto_model_anims_1_28(u32(o + 28) + g.m, x[i].section_28);
    u32(o + 32) && im_hwvx_proto_model_anims_1_32(u32(o + 32) + g.m, x[i].section_32);

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_hwvx_proto_model_anims_1_36(u32(o + 36) + (ii * 16) + g.m, ii, x[i].section_36);
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_proto_model_anims_1_44(u32(o + 44) + (ii * 24) + g.m, ii, x[i].section_44);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_model_anims_1_24(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "]Wot",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

}
function im_hwvx_proto_model_anims_1_28(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "<j<O",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_hwvx_proto_model_anims_1_32(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)
    x.push({
        sec_id: "ir<<",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // 16+ bytes;

}
function im_hwvx_proto_model_anims_1_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "6jDb",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
    });

}
function im_hwvx_proto_model_anims_1_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Ip4F",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_model_anims_2(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "X]2v",
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
        im_hwvx_proto_model_anims_2_16(u32(o + 16) + (ii * 32) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_model_anims_2_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "4PH5",
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
function im_hwvx_proto_texture(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "of0M",
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
            x[i].texture_section.push(convert_arraybuffer_base64(buffer.slice(start_08_texture, end_08_texture)))
        }

    } else {
        let mipmap_offset = total_length

        for (let ii = 0; ii < u16(o + 6) -1; ii++) {

            if (u32(o + 8)) {
                x[i].texture_section.push(convert_arraybuffer_base64(buffer.slice(start_08_texture, end_08_texture)))
            }
            start_08_texture += mipmap_offset
            mipmap_offset = Math.round(mipmap_offset / 4)
            if (u16(o + 6) !== ii) {
                end_08_texture += mipmap_offset
            }

        }

    }

    // 32 bytes;

    // x[i].unordered_hwvx_proto_texture_data_8 = in_ml(u32(o + 8), g.hwvx_proto_texture_data_array, im_hwvx_proto_texture_data, g.unordered_ref.hwvx_proto_texture_data);
    return x[i].id
    // 16 bytes;

}

function im_hwvx_proto_color_table(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "clt5",
        buffer: convert_arraybuffer_base64(buffer.slice(o, o + 1024)),
    });

    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_share_end(o, x) {
    x.push({
        sec_id: "eCFb",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_proto_share_end_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    // 32 bytes;

}
function im_hwvx_proto_share_end_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "YJ<:",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_proto_world_color_section(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "tBe]",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_world_color_section_4(u32(o + 4) + (ii * 12) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_world_color_section_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Igau",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_world_text_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "om89",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_8: u32(o + 8),
        unordered_hwvx_proto_world_small_section_12: 0,
        unordered_hwvx_proto_world_small_section_16: 0,
        unordered_hwvx_proto_text_20: 0,
        unordered_hwvx_proto_text_24: 0,
    });

    x[i].unordered_hwvx_proto_world_small_section_12 = in_ml(u32(o + 12), g.hwvx_proto_world_small_section_array, im_hwvx_proto_world_small_section, g.unordered_ref.hwvx_proto_world_small_section);
    x[i].unordered_hwvx_proto_world_small_section_16 = in_ml(u32(o + 16), g.hwvx_proto_world_small_section_array, im_hwvx_proto_world_small_section, g.unordered_ref.hwvx_proto_world_small_section);
    x[i].unordered_hwvx_proto_text_20 = in_ml(u32(o + 20), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    x[i].unordered_hwvx_proto_text_24 = in_ml(u32(o + 24), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    // offset? 
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_world_settings(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "6DwQ",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u8_33: u8(o + 33),
        u8_34: u8(o + 34),
        u8_35: u8(o + 35),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
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
        section_156_type: [],
        section_160: im_string(u32(o + 160), 0, false),
        section_164: im_string(u32(o + 164), 0, false),
        section_192: [],
        section_196: [],
        unordered_hwvx_proto_font_200: 0,
        unordered_hwvx_proto_interface_204: 0,
        section_224: [],
        section_228: [],
        u32_232: u32(o + 232),
        //amount?
        section_236: [],
        u32_240: u32(o + 240),
        //amount?
        section_244: [],
        u32_248: u32(o + 248),
        //amount?
        section_252: [],
        u32_256: u32(o + 256),
        //amount?
        section_260: [],
    });

    let type_object = hwvx_proto_return_if_value_in_multilink(u32(o + 156) + g.m)
    x[i].section_156 = type_object.section
    x[i].section_156_type = type_object.type

    u32(o + 192) && im_hwvx_proto_world_settings_192(u32(o + 192) + g.m, x[i].section_192);
    u32(o + 196) && im_hwvx_proto_world_settings_196(u32(o + 196) + g.m, x[i].section_196);
    x[i].unordered_hwvx_proto_font_200 = in_ml(u32(o + 200), g.hwvx_proto_font_array, im_hwvx_proto_font, g.unordered_ref.hwvx_proto_font);
    x[i].unordered_hwvx_proto_interface_204 = in_ml(u32(o + 204), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
    u32(o + 224) && im_hwvx_proto_world_settings_224(u32(o + 224) + g.m, x[i].section_224);
    u32(o + 228) && im_hwvx_proto_world_settings_228(u32(o + 228) + g.m, x[i].section_228);

    for (let ii = 0; ii < u32(o + 232); ii++) {
        im_hwvx_proto_world_settings_236(u32(o + 236) + (ii * 4) + g.m, ii, x[i].section_236);
    }

    for (let ii = 0; ii < u32(o + 240); ii++) {
        im_hwvx_proto_world_settings_244(u32(o + 244) + (ii * 4) + g.m, ii, x[i].section_244);
    }

    for (let ii = 0; ii < u32(o + 248); ii++) {
        im_hwvx_proto_world_settings_244(u32(o + 252) + (ii * 4) + g.m, ii, x[i].section_252);
    }

    for (let ii = 0; ii < u32(o + 256); ii++) {
        im_hwvx_proto_world_settings_260(u32(o + 260) + (ii * 12) + g.m, ii, x[i].section_260);
    }
    return x[i].id
    // 304 bytes;

}
function im_hwvx_proto_world_settings_192(o, x) {
    x.push({
        sec_id: "DnMC",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_proto_world_settings_196(o, x) {
    x.push({
        sec_id: "xmCF",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        f32_20: f32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
        unordered_hwvx_proto_sound_controls_32: 0,
    });

    u32(o + 28) && im_hwvx_proto_world_settings_196_28(u32(o + 28) + g.m, x[0].section_28);
    x[0].unordered_hwvx_proto_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);

    // 48 bytes;

}
function im_hwvx_proto_world_settings_196_28(o, x) {
    x.push({
        sec_id: "4hhT",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[0].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    // 16 bytes;

}
function im_hwvx_proto_world_settings_224(o, x) {
    x.push({
        sec_id: "KG?R",
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
function im_hwvx_proto_world_settings_228(o, x) {
    x.push({
        sec_id: "D^@z",
    });

    // 16 bytes;

}
function im_hwvx_proto_world_settings_236(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "P=hX",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_world_settings_236_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_proto_world_settings_236_0(o, x) {
    x.push({
        sec_id: "0gYO",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        f32_20: f32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
    });

    u32(o + 28) && im_hwvx_proto_world_settings_236_0_28(u32(o + 28) + g.m, x[0].section_28);

    // 48 bytes;

}
function im_hwvx_proto_world_settings_236_0_28(o, x) {
    x.push({
        sec_id: "QHN[",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[0].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    // 16 bytes;

}
function im_hwvx_proto_world_settings_244(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "iHBt",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_world_settings_260(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "M<n9",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_world_settings_260_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_hwvx_proto_world_settings_260_4(o, x) {
    x.push({
        sec_id: "lI0j",
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u8_22: u8(o + 22),
        u8_23: u8(o + 23),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
    });

    // 32 bytes;

}
function im_hwvx_proto_world_small_section(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "FhGs",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_hwvx_proto_world_small_section_12(u32(o + 12) + g.m, x[i].section_12);
    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_world_small_section_12(o, x) {
    x.push({
        sec_id: "@oVM",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_world_model_related(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Javg",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        f32_8: f32(o + 8),
        unordered_hwvx_proto_sound_controls_12: 0,
        unordered_hwvx_proto_car_link_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    switch (u8(o + 4)) {
    case 1:
        x[i].section_0 = in_ml(u32(o + 0), g.hwvx_proto_model_link_array, im_hwvx_proto_model_link, g.unordered_ref.hwvx_proto_model_link);
        break;
    }
    x[i].unordered_hwvx_proto_sound_controls_12 = in_ml(u32(o + 12), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
    x[i].unordered_hwvx_proto_car_link_16 = in_ml(u32(o + 16), g.hwvx_proto_car_link_array, im_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link);
    x[i].unordered_hwvx_proto_model_anims_2_20 = in_ml(u32(o + 20), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_proto_mysterious(u32(o + 28) + (ii * 32) + g.m, ii, x[i].section_28);
    }
    // offset? 
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_world_idk(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "ib0X",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        u32_32: u32(o + 32),
        u8_36: u8(o + 36),
        u8_38: u8(o + 38),
        u8_39: u8(o + 39),
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
    });

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_proto_world_idk_48(u32(o + 48) + (ii * 12) + g.m, ii, x[i].section_48);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_world_idk_48(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "=Bq3",
        unordered_hwvx_proto_some_world_thing_0: 0,
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    x[i].unordered_hwvx_proto_some_world_thing_0 = in_ml(u32(o + 0), g.hwvx_proto_some_world_thing_array, im_hwvx_proto_some_world_thing, g.unordered_ref.hwvx_proto_some_world_thing);

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_proto_world_idk_48_8(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_proto_world_idk_48_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "NiNv",
        unordered_hwvx_proto_some_world_thing_0: 0,
    });

    x[i].unordered_hwvx_proto_some_world_thing_0 = in_ml(u32(o + 0), g.hwvx_proto_some_world_thing_array, im_hwvx_proto_some_world_thing, g.unordered_ref.hwvx_proto_some_world_thing);

}
function im_hwvx_proto_some_world_thing(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "k<bM",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_44: u32(o + 44),
        u32_52: u32(o + 52),
        u32_56: u32(o + 56),
        u32_60: u32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        u32_72: u32(o + 72),
        u32_76: u32(o + 76),
        section_88: [],
        section_116: im_string(u32(o + 116), 0, false),
    });

    u32(o + 88) && im_hwvx_proto_some_world_thing_88(u32(o + 88) + g.m, x[i].section_88);
    return x[i].id
    // 128 bytes;

}
function im_hwvx_proto_some_world_thing_88(o, x) {
    x.push({
        sec_id: "WbBj",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 32 bytes;

}
function im_hwvx_proto_geo_list(o, x) {
    x.push({
        id: gen_id(),
        sec_id: "^UG0",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_geo_list_4(u32(o + 4) + (ii * 20) + g.m, ii, x[0].section_4);
    }
    return x[0].id
    // 16 bytes;

}
function im_hwvx_proto_geo_list_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Gqys",
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

    u32(o + 4) && im_hwvx_proto_geo_list_4_4(u32(o + 4) + g.m, x[i].section_4);

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_geo_list_4_8(u32(o + 8) + (ii * 4) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_proto_geo_list_4_4(o, x) {
    x.push({
        sec_id: "BT?c",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_hwvx_proto_geo_list_4_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "BVkg",
        f32_0: f32(o + 0),
    });

}
function im_hwvx_proto_collision_settings(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "@B[D",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        unordered_hwvx_proto_unknown_48: 0,
        unordered_hwvx_proto_unknown_thing_52: 0,
        unordered_hwvx_proto_sound_section_60: 0,
        unordered_hwvx_proto_unknown_64: 0,
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        u32_76: u32(o + 76),
        //amount?
        section_80: [],
    });

    x[i].unordered_hwvx_proto_unknown_48 = in_ml(u32(o + 48), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
    x[i].unordered_hwvx_proto_unknown_thing_52 = in_ml(u32(o + 52), g.hwvx_proto_unknown_thing_array, im_hwvx_proto_unknown_thing, g.unordered_ref.hwvx_proto_unknown_thing);
    // ä(hwvx_proto_sound_section, u32(o + 60), get_hwvx_proto_sound_section)
    x[i].unordered_hwvx_proto_sound_section_60 = in_ml(u32(o + 60), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
    x[i].unordered_hwvx_proto_unknown_64 = in_ml(u32(o + 64), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    for (let ii = 0; ii < u32(o + 68); ii++) {
        im_hwvx_proto_collision_settings_72(u32(o + 72) + (ii * 4) + g.m, ii, x[i].section_72);
    }

    for (let ii = 0; ii < u32(o + 76); ii++) {
        im_hwvx_proto_collision_settings_72(u32(o + 80) + (ii * 4) + g.m, ii, x[i].section_80);
    }
    return x[i].id
    // 96 bytes;

}
function im_hwvx_proto_collision_settings_72(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "TrH@",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_car(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "i=g:",
        u32_16: u32(o + 16),
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
        unordered_hwvx_proto_model_anims_1_72: 0,
        unordered_hwvx_proto_model_anims_2_76: 0,
        texture_80: im_patch(g.texture_patch_ref, o + 80),
        model_84: [],
        unordered_hwvx_proto_sound_section_92: 0,
        unordered_hwvx_proto_sound_section_96: 0,
        section_108: [],
        section_120: [],
        section_124: [],
        section_128: [],
        section_132: [],
        section_136: [],
        section_140: [],
        unordered_hwvx_proto_car_related_144: 0,
        unordered_hwvx_proto_car_related_148: 0,
        unordered_hwvx_proto_car_related_152: 0,
        unordered_hwvx_proto_car_related_156: 0,
        unordered_hwvx_proto_car_link_160: 0,
        section_164: [],
        section_172: [],
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
        u32_240: u32(o + 240),
        section_244: [],
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

    x[i].unordered_hwvx_proto_model_anims_1_72 = in_ml(u32(o + 72), g.hwvx_proto_model_anims_1_array, im_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1);
    x[i].unordered_hwvx_proto_model_anims_2_76 = in_ml(u32(o + 76), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    x[i].model_84 = in_models(o + 84, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

    x[i].unordered_hwvx_proto_sound_section_92 = in_ml(u32(o + 92), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
    x[i].unordered_hwvx_proto_sound_section_96 = in_ml(u32(o + 96), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
    u32(o + 108) && im_hwvx_proto_car_108(u32(o + 108) + g.m, x[i].section_108);
    u32(o + 120) && im_hwvx_proto_car_120(u32(o + 120) + g.m, x[i].section_120);
    u32(o + 124) && im_hwvx_proto_car_124(u32(o + 124) + g.m, x[i].section_124);
    u32(o + 128) && im_hwvx_proto_car_128(u32(o + 128) + g.m, x[i].section_128);
    u32(o + 132) && im_hwvx_proto_car_132(u32(o + 132) + g.m, x[i].section_132);
    u32(o + 136) && im_hwvx_proto_car_136(u32(o + 136) + g.m, x[i].section_136);
    u32(o + 140) && im_hwvx_proto_car_140(u32(o + 140) + g.m, x[i].section_140);
    x[i].unordered_hwvx_proto_car_related_144 = in_ml(u32(o + 144), g.hwvx_proto_car_related_array, im_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related);
    x[i].unordered_hwvx_proto_car_related_148 = in_ml(u32(o + 148), g.hwvx_proto_car_related_array, im_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related);
    x[i].unordered_hwvx_proto_car_related_152 = in_ml(u32(o + 152), g.hwvx_proto_car_related_array, im_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related);
    x[i].unordered_hwvx_proto_car_related_156 = in_ml(u32(o + 156), g.hwvx_proto_car_related_array, im_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related);
    x[i].unordered_hwvx_proto_car_link_160 = in_ml(u32(o + 160), g.hwvx_proto_car_link_array, im_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link);
    u32(o + 164) && im_hwvx_proto_car_164(u32(o + 164) + g.m, x[i].section_164);
    u32(o + 172) && im_hwvx_proto_car_172(u32(o + 172) + g.m, x[i].section_172);

    for (let ii = 0; ii < u32(o + 208); ii++) {
        im_hwvx_proto_car_212(u32(o + 212) + (ii * 80) + g.m, ii, x[i].section_212);
    }

    for (let ii = 0; ii < u32(o + 216); ii++) {
        im_hwvx_proto_car_220(u32(o + 220) + (ii * 8) + g.m, ii, x[i].section_220);
    }

    for (let ii = 0; ii < u32(o + 224); ii++) {
        im_hwvx_proto_car_228(u32(o + 228) + (ii * 12) + g.m, ii, x[i].section_228);
    }

    for (let ii = 0; ii < u32(o + 232); ii++) {
        im_hwvx_proto_car_228(u32(o + 236) + (ii * 12) + g.m, ii, x[i].section_236);
    }

    for (let ii = 0; ii < u32(o + 240); ii++) {
        im_hwvx_proto_car_228(u32(o + 244) + (ii * 12) + g.m, ii, x[i].section_244);
    }
    u32(o + 252) && im_hwvx_proto_car_252(u32(o + 252) + g.m, x[i].section_252);
    u32(o + 260) && im_hwvx_proto_car_260(u32(o + 260) + g.m, x[i].section_260);
    u32(o + 268) && im_hwvx_proto_car_268(u32(o + 268) + g.m, x[i].section_268);

    for (let ii = 0; ii < u32(o + 280); ii++) {
        im_hwvx_proto_car_220(u32(o + 284) + (ii * 8) + g.m, ii, x[i].section_284);
    }
    return x[i].id
    // 288 bytes;

}
function im_hwvx_proto_car_108(o, x) {
    x.push({
        sec_id: "Q_rF",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_proto_car_120(o, x) {
    x.push({
        sec_id: "hJ^O",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        unordered_hwvx_proto_model_link_16: 0,
        u32_36: u32(o + 36),
    });

    x[0].unordered_hwvx_proto_model_link_16 = in_ml(u32(o + 16), g.hwvx_proto_model_link_array, im_hwvx_proto_model_link, g.unordered_ref.hwvx_proto_model_link);

    // 112 bytes;

}
function im_hwvx_proto_car_124(o, x) {
    x.push({
        sec_id: "ZdHL",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_hwvx_proto_car_128(o, x) {
    x.push({
        sec_id: "KQFs",
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
        unordered_hwvx_proto_model_anims_2_96: 0,
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        u32_128: u32(o + 128),
        //amount?
        section_132: [],
        u32_136: u32(o + 136),
        //amount?
        section_140: [],
    });

    x[0].unordered_hwvx_proto_model_anims_2_96 = in_ml(u32(o + 96), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    for (let i = 0; i < u32(o + 128); i++) {
        im_hwvx_proto_car_128_132(u32(o + 132) + (i * 12) + g.m, i, x[0].section_132);
    }

    for (let i = 0; i < u32(o + 136); i++) {
        im_hwvx_proto_car_128_132(u32(o + 140) + (i * 12) + g.m, i, x[0].section_140);
    }

    // 160 bytes;

}
function im_hwvx_proto_car_128_132(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "U[<W",
        u32_0: u32(o + 0),
        section_4: [],
    });

    switch (u32(o + 0)) {
    case 1:
        u32(o + 4) && im_hwvx_proto_car_128_132_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 2:
        u32(o + 4) && im_hwvx_proto_car_128_132_4t2(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 3:
        u32(o + 4) && im_hwvx_proto_car_128_132_4t3(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 4:
        u32(o + 4) && im_hwvx_proto_car_128_132_4t4(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_hwvx_proto_car_128_132_4t1(o, x) {
    x.push({
        sec_id: "wxy:",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
    });

    // 48 bytes;

}
function im_hwvx_proto_car_128_132_4t2(o, x) {
    x.push({
        sec_id: "=CB9",
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_proto_car_128_132_4t3(o, x) {
    x.push({
        sec_id: "ni0J",
        f32_4: f32(o + 4),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
    });

    // 32 bytes;

}
function im_hwvx_proto_car_128_132_4t4(o, x) {
    x.push({
        sec_id: "uVOT",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 32 bytes;

}
function im_hwvx_proto_car_132(o, x) {
    x.push({
        sec_id: "DLjW",
        unordered_hwvx_proto_interface_16: 0,
        unordered_hwvx_proto_interface_24: 0,
        unordered_hwvx_proto_interface_28: 0,
        section_44: [],
        u32_52: u32(o + 52),
    });

    x[0].unordered_hwvx_proto_interface_16 = in_ml(u32(o + 16), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
    x[0].unordered_hwvx_proto_interface_24 = in_ml(u32(o + 24), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
    x[0].unordered_hwvx_proto_interface_28 = in_ml(u32(o + 28), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
    u32(o + 44) && im_hwvx_proto_car_132_44(u32(o + 44) + g.m, x[0].section_44);

    // 64 bytes;

}
function im_hwvx_proto_car_132_44(o, x) {
    x.push({
        sec_id: "0fgN",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_proto_car_136(o, x) {
    x.push({
        sec_id: "pT66",
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

    // 80 bytes;

}
function im_hwvx_proto_car_140(o, x) {
    x.push({
        sec_id: "<Xgk",
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
        u32_76: u32(o + 76),
        section_80: [],
        f32_84: f32(o + 84),
    });

    for (let i = 0; i < u32(o + 52); i++) {
        im_hwvx_proto_car_140_56(u32(o + 56) + (i * 4) + g.m, i, x[0].section_56);
    }

    for (let i = 0; i < u32(o + 60); i++) {
        im_hwvx_proto_car_140_64(u32(o + 64) + (i * 4) + g.m, i, x[0].section_64);
    }

    for (let i = 0; i < u32(o + 76); i++) {
        im_hwvx_proto_car_140_56(u32(o + 80) + (i * 4) + g.m, i, x[0].section_80);
    }

    // 112 bytes;

}
function im_hwvx_proto_car_140_56(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "GkK1",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_car_140_64(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "sq>I",
        unordered_hwvx_proto_text_0: 0,
    });

    x[i].unordered_hwvx_proto_text_0 = in_ml(u32(o + 0), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);

}
function im_hwvx_proto_car_164(o, x) {
    x.push({
        sec_id: "cOSy",
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_proto_car_164_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_hwvx_proto_car_164_8(o, x) {
    x.push({
        sec_id: "SBS0",
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

    // 48 bytes;

}
function im_hwvx_proto_car_172(o, x) {
    x.push({
        sec_id: "O5O:",
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
    });

    // 48 bytes;

}
function im_hwvx_proto_car_212(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "w?mc",
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
        u8_60: u8(o + 60),
        u8_62: u8(o + 62),
        u8_63: u8(o + 63),
        u8_64: u8(o + 64),
        u8_66: u8(o + 66),
    });

}
function im_hwvx_proto_car_220(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Xtfw",
        f32_0: f32(o + 0),
        unordered_hwvx_proto_sound_section_4: 0,
    });

    x[i].unordered_hwvx_proto_sound_section_4 = in_ml(u32(o + 4), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);

}
function im_hwvx_proto_car_228(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "P0mb",
        unordered_hwvx_proto_model_anims_2_0: 0,
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    x[i].unordered_hwvx_proto_model_anims_2_0 = in_ml(u32(o + 0), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_proto_mysterious(u32(o + 8) + (ii * 32) + g.m, ii, x[i].section_8);
    }

}
function im_hwvx_proto_car_252(o, x) {
    x.push({
        sec_id: "6l:Y",
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_car_252_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_car_252_4(o, x) {
    x.push({
        sec_id: "L6vT",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_car_252_4_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_car_252_4_4(o, x) {
    x.push({
        sec_id: "emW9",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_car_260(o, x) {
    x.push({
        sec_id: "iIBS",
        u32_52: u32(o + 52),
        section_56: [],
    });

    u32(o + 56) && im_hwvx_proto_car_260_56(u32(o + 56) + g.m, x[0].section_56);

    // 80 bytes;

}
function im_hwvx_proto_car_260_56(o, x) {
    x.push({
        sec_id: "K6P^",
    });

    // 16 bytes;

}
function im_hwvx_proto_car_268(o, x) {
    x.push({
        sec_id: "=@aQ",
    });

    // 16 bytes;

}
function im_hwvx_proto_car_related(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "jg>I",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
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
        im_hwvx_proto_car_related_48(u32(o + 48) + (ii * 12) + g.m, ii, x[i].section_48);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_car_related_48(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "HYA?",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_car_related_48_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_proto_car_related_48_0(o, x) {
    x.push({
        sec_id: "VM^0",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        u32_52: u32(o + 52),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        u32_116: u32(o + 116),
        //check this
    });

    // 128 bytes;

}
function im_hwvx_proto_car_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "ZIP^",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
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
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
        u32_60: u32(o + 60),
        section_64: [],
        section_68: [],
    });

    u32(o + 48) && im_hwvx_proto_car_link_48(u32(o + 48) + g.m, x[i].section_48);

    for (let ii = 0; ii < u32(o + 52); ii++) {
        im_hwvx_proto_car_link_56(u32(o + 56) + (ii * 4) + g.m, ii, x[i].section_56);
    }
    u32(o + 64) && im_hwvx_proto_car_link_64(u32(o + 64) + g.m, x[i].section_64);
    u32(o + 68) && im_hwvx_proto_car_link_68(u32(o + 68) + g.m, x[i].section_68);
    return x[i].id
    // 80 bytes;

}
function im_hwvx_proto_car_link_48(o, x) {
    x.push({
        sec_id: "2Ajg",
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        unordered_hwvx_proto_unknown_48: 0,
        unordered_hwvx_proto_sound_section_60: 0,
        unordered_hwvx_proto_unknown_64: 0,
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
        u32_76: u32(o + 76),
        //amount?
        section_80: [],
    });

    x[0].unordered_hwvx_proto_unknown_48 = in_ml(u32(o + 48), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
    x[0].unordered_hwvx_proto_sound_section_60 = in_ml(u32(o + 60), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
    x[0].unordered_hwvx_proto_unknown_64 = in_ml(u32(o + 64), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    for (let i = 0; i < u32(o + 68); i++) {
        im_hwvx_proto_car_link_48_72(u32(o + 72) + (i * 4) + g.m, i, x[0].section_72);
    }

    for (let i = 0; i < u32(o + 76); i++) {
        im_hwvx_proto_car_link_48_72(u32(o + 80) + (i * 4) + g.m, i, x[0].section_80);
    }

    // 96 bytes;

}
function im_hwvx_proto_car_link_48_72(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ">a1]",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_car_link_56(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ";10P",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_car_link_64(o, x) {
    x.push({
        sec_id: "hezc",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[0].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    // 16 bytes;

}
function im_hwvx_proto_car_link_68(o, x) {
    x.push({
        sec_id: "hxcM",
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
function im_hwvx_proto_mysterious(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "CP>2",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        f32_20: f32(o + 20),
        section_24: [],
    });

    switch (u8(o + 16)) {
    case 1:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
        break;
    case 2:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_proto_strange_array, im_hwvx_proto_strange, g.unordered_ref.hwvx_proto_strange);
        break;
    case 3:
        x[i].section_24 = in_ml(u32(o + 24), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
        break;
    case 5:
        u32(o + 24) && im_hwvx_proto_mysterious_24t5(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 6:
        u32(o + 24) && im_hwvx_proto_mysterious_24t6(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 7:
        u32(o + 24) && im_hwvx_proto_mysterious_24t7(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 9:
        u32(o + 24) && im_hwvx_proto_mysterious_24t9(u32(o + 24) + g.m, x[i].section_24);
        break;
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_mysterious_24t5(o, x) {
    x.push({
        sec_id: "jpuw",
        model_8: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_44: [],
    });

    x[0].model_8 = in_models(o + 8, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_proto_mysterious_24t5_24(u32(o + 24) + (i * 32) + g.m, i, x[0].section_24);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_proto_mysterious_24t5_32(u32(o + 32) + (i * 12) + g.m, i, x[0].section_32);
    }
    u32(o + 44) && im_hwvx_proto_mysterious_24t5_44(u32(o + 44) + g.m, x[0].section_44);

    // 48 bytes;

}
function im_hwvx_proto_mysterious_24t5_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "wlid",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_mysterious_24t5_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "uUPO",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_mysterious_24t5_44(o, x) {
    x.push({
        sec_id: "o7;i",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_proto_mysterious_24t6(o, x) {
    x.push({
        sec_id: "R<H4",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        texture_8: im_patch(g.texture_patch_ref, o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
        section_36: [],
    });

    for (let i = 0; i < u32(o + 12); i++) {
        im_hwvx_proto_mysterious_24t6_16(u32(o + 16) + (i * 32) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_proto_mysterious_24t6_24(u32(o + 24) + (i * 32) + g.m, i, x[0].section_24);
    }

    for (let i = 0; i < u32(o + 28); i++) {
        im_hwvx_proto_mysterious_24t6_32(u32(o + 32) + (i * 12) + g.m, i, x[0].section_32);
    }
    u32(o + 36) && im_hwvx_proto_mysterious_24t6_36(u32(o + 36) + g.m, x[0].section_36);

    // 48 bytes;

}
function im_hwvx_proto_mysterious_24t6_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "8cdg",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_mysterious_24t6_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "oV==",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_mysterious_24t6_32(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "aQ]J",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_mysterious_24t6_36(o, x) {
    x.push({
        sec_id: "XqiO",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_mysterious_24t7(o, x) {
    x.push({
        sec_id: "@ZZb",
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
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
        im_hwvx_proto_mysterious_24t7_72(u32(o + 72) + (i * 12) + g.m, i, x[0].section_72);
    }
    u32(o + 80) && im_hwvx_proto_mysterious_24t7_80(u32(o + 80) + g.m, x[0].section_80);
    u32(o + 88) && im_hwvx_proto_mysterious_24t7_88(u32(o + 88) + g.m, x[0].section_88);

    // 96 bytes;

}
function im_hwvx_proto_mysterious_24t7_72(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "QK;_",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_mysterious_24t7_80(o, x) {
    x.push({
        sec_id: "7L6J",
    });

    // 12 bytes;

}
function im_hwvx_proto_mysterious_24t7_88(o, x) {
    x.push({
        sec_id: "_8[1",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_mysterious_24t9(o, x) {
    x.push({
        sec_id: "r8AQ",
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
    });

    u32(o + 28) && im_hwvx_proto_mysterious_24t9_28(u32(o + 28) + g.m, x[0].section_28);
    u32(o + 32) && im_hwvx_proto_mysterious_24t9_32(u32(o + 32) + g.m, x[0].section_32);

    // 64 bytes;

}
function im_hwvx_proto_mysterious_24t9_28(o, x) {
    x.push({
        sec_id: "juG4",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_proto_mysterious_24t9_32(o, x) {
    x.push({
        sec_id: "FGQj",
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 4 bytes;

}
function im_hwvx_proto_strange(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "fz_?",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        f32_20: f32(o + 20),
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        unordered_hwvx_proto_sound_controls_32: 0,
    });

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_proto_strange_28(u32(o + 28) + (ii * 4) + g.m, ii, x[i].section_28);
    }
    x[i].unordered_hwvx_proto_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
    return x[i].id
    // 48 bytes;

}
function im_hwvx_proto_strange_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Db4x",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_model_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Metw",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        unordered_hwvx_proto_model_anims_1_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
        f32_24: f32(o + 24),
        u8_28: u8(o + 28),
        u8_29: u8(o + 29),
        u8_31: u8(o + 31),
        section_32: [],
        section_36: [],
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        section_52: [],
        section_56: [],
    });

    u32(o + 4) && im_hwvx_proto_model_link_4(u32(o + 4) + g.m, x[i].section_4);
    u32(o + 12) && im_hwvx_proto_model_link_12(u32(o + 12) + g.m, x[i].section_12);
    x[i].unordered_hwvx_proto_model_anims_1_16 = in_ml(u32(o + 16), g.hwvx_proto_model_anims_1_array, im_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1);
    x[i].unordered_hwvx_proto_model_anims_2_20 = in_ml(u32(o + 20), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);
    u32(o + 32) && im_hwvx_proto_model_link_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_hwvx_proto_model_link_36(u32(o + 36) + g.m, x[i].section_36);

    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_proto_mysterious(u32(o + 48) + (ii * 32) + g.m, ii, x[i].section_48);
    }
    u32(o + 52) && im_hwvx_proto_model_link_52(u32(o + 52) + g.m, x[i].section_52);
    u32(o + 56) && im_hwvx_proto_model_link_56(u32(o + 56) + g.m, x[i].section_56);
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_model_link_4(o, x) {
    x.push({
        sec_id: "t5Jp",
        model_0: [],
    });
    x[0].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

    // 16 bytes;

}
function im_hwvx_proto_model_link_12(o, x) {
    x.push({
        sec_id: "u66W",
        model_0: [],
        u32_4: u32(o + 4),
    });

    x[0].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

    // 8 bytes;

}
function im_hwvx_proto_model_link_32(o, x) {
    x.push({
        sec_id: "Imly",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_model_link_36(o, x) {
    x.push({
        sec_id: "4_C=",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_model_link_52(o, x) {
    x.push({
        sec_id: "iS5S",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 48 bytes;

}
function im_hwvx_proto_model_link_56(o, x) {
    x.push({
        sec_id: "z4bY",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        unordered_hwvx_proto_model_anims_2_8: 0,
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_model_link_56_4(u32(o + 4) + (i * 28) + g.m, i, x[0].section_4);
    }
    x[0].unordered_hwvx_proto_model_anims_2_8 = in_ml(u32(o + 8), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    // 16 bytes;

}
function im_hwvx_proto_model_link_56_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "s;ve",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        model_8: [],
        section_12: [],
        section_16: [],
    });

    x[i].model_8 = in_models(o + 8, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);
    u32(o + 12) && im_hwvx_proto_model_link_56_4_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 16) && im_hwvx_proto_model_link_56_4_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_proto_model_link_56_4_12(o, x) {
    x.push({
        sec_id: "Q0z;",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_proto_model_link_56_4_16(o, x) {
    x.push({
        sec_id: "m8[T",
    });

    // 16 bytes;

}
function im_hwvx_proto_text(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "I[]x",
        section_0: im_string(u32(o + 0), 0, false),
    });

    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_font(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "494j",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
        unordered_hwvx_proto_sound_section_4: 0,
        u32_8: u32(o + 8),
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        section_28: [],
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        f32_40: f32(o + 40),
    });

    x[i].unordered_hwvx_proto_sound_section_4 = in_ml(u32(o + 4), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
    u32(o + 28) && im_hwvx_proto_font_28(u32(o + 28) + g.m, x[i].section_28);

    for (let ii = 0; ii < u32(o + 32); ii++) {
        im_hwvx_proto_font_36(u32(o + 36) + (ii * 12) + g.m, ii, x[i].section_36);
    }
    return x[i].id
    // 48 bytes;

}
function im_hwvx_proto_font_28(o, x) {
    x.push({
        sec_id: "7]7W",
        f32_0: f32(o + 0),
    });

    // 32 bytes;

}
function im_hwvx_proto_font_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "tHz_",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
    });

}
function im_hwvx_proto_interface(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "qVyB",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        section_28: [],
        unordered_hwvx_proto_sound_controls_32: 0,
        unordered_hwvx_proto_sound_controls_36: 0,
        unordered_hwvx_proto_sound_controls_40: 0,
        unordered_hwvx_proto_sound_controls_44: 0,
        section_48: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_hwvx_proto_interface_16(u32(o + 16) + (ii * 108) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_proto_interface_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }
    u32(o + 28) && im_hwvx_proto_interface_28(u32(o + 28) + g.m, x[i].section_28);
    x[i].unordered_hwvx_proto_sound_controls_32 = in_ml(u32(o + 32), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
    x[i].unordered_hwvx_proto_sound_controls_36 = in_ml(u32(o + 36), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
    x[i].unordered_hwvx_proto_sound_controls_40 = in_ml(u32(o + 40), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
    x[i].unordered_hwvx_proto_sound_controls_44 = in_ml(u32(o + 44), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
    u32(o + 48) && im_hwvx_proto_interface_48(u32(o + 48) + g.m, x[i].section_48);
    return x[i].id
    // 80 bytes;

}
function im_hwvx_proto_interface_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "1d6S",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
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
        u32(o + 20) && im_hwvx_proto_interface_16_20t0(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 1:
    case 12:
        u32(o + 20) && im_hwvx_proto_interface_16_20t1(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 2:
        u32(o + 20) && im_hwvx_proto_interface_16_20t2(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 10:
        u32(o + 20) && im_hwvx_proto_interface_16_20t10(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 11:
        u32(o + 20) && im_hwvx_proto_interface_16_20t10(u32(o + 20) + g.m, x[i].section_20);
        break;
    }
    u32(o + 60) && im_hwvx_proto_interface_16_60(u32(o + 60) + g.m, x[i].section_60);
    u32(o + 68) && im_hwvx_proto_interface_16_68(u32(o + 68) + g.m, x[i].section_68);
    u32(o + 72) && im_hwvx_proto_interface_16_72(u32(o + 72) + g.m, x[i].section_72);
    u32(o + 96) && im_hwvx_proto_interface_16_96(u32(o + 96) + g.m, x[i].section_96);

    for (let ii = 0; ii < u32(o + 100); ii++) {
        im_hwvx_proto_interface_16_104(u32(o + 104) + (ii * 12) + g.m, ii, x[i].section_104);
    }

}
function im_hwvx_proto_interface_16_20t0(o, x) {
    x.push({
        sec_id: "8BNK",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: [],
        section_16: [],
    });

    switch (u8(o + 0)) {
    case 3:
        u32(o + 16) && im_hwvx_proto_interface_16_20t0_16(u32(o + 16) + g.m, x[0].section_16);
        break;
    }
    // 32 bytes;

}
function im_hwvx_proto_interface_16_20t0_16(o, x) {
    x.push({
        sec_id: "kU0D",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_16_20t0_16_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_16_20t0_16_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "UuC9",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_proto_interface_16_20t1(o, x) {
    x.push({
        sec_id: "Mh;=",
        unordered_hwvx_proto_text_0: 0,
        unordered_hwvx_proto_font_4: 0,
        section_8: [],
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
    });

    x[0].unordered_hwvx_proto_text_0 = in_ml(u32(o + 0), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    x[0].unordered_hwvx_proto_font_4 = in_ml(u32(o + 4), g.hwvx_proto_font_array, im_hwvx_proto_font, g.unordered_ref.hwvx_proto_font);
    u32(o + 8) && im_hwvx_proto_interface_16_20t1_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_hwvx_proto_interface_16_20t1_8(o, x) {
    x.push({
        sec_id: "SGJ[",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_10: u8(o + 10),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_16_20t1_8_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_16_20t1_8_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "q_on",
        unordered_hwvx_proto_text_0: 0,
    });

    x[i].unordered_hwvx_proto_text_0 = in_ml(u32(o + 0), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);

}
function im_hwvx_proto_interface_16_20t2(o, x) {
    x.push({
        sec_id: "IYWn",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_16_20t2_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_16_20t2_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ">@=_",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        section_12: im_string(u32(o + 12), 0, false),
        unordered_hwvx_proto_text_16: 0,
        unordered_hwvx_proto_interface_text_related_20: 0,
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    x[i].unordered_hwvx_proto_text_16 = in_ml(u32(o + 16), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    x[i].unordered_hwvx_proto_interface_text_related_20 = in_ml(u32(o + 20), g.hwvx_proto_interface_text_related_array, im_hwvx_proto_interface_text_related, g.unordered_ref.hwvx_proto_interface_text_related);

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_proto_interface_16_20t2_4_28(u32(o + 28) + (ii * 8) + g.m, ii, x[i].section_28);
    }

}
function im_hwvx_proto_interface_16_20t2_4_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "YSsF",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_interface_16_20t2_4_28_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_hwvx_proto_interface_16_20t2_4_28_4(o, x) {
    x.push({
        sec_id: "Qzyz",
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_20t4(o, x) {
    x.push({
        sec_id: "FM?k",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_16_20t4_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_16_20t4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "?CuH",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
    });

}
function im_hwvx_proto_interface_16_20t10(o, x) {
    x.push({
        sec_id: "0ah;",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        unordered_hwvx_proto_font_16: 0,
    });

    x[0].unordered_hwvx_proto_font_16 = in_ml(u32(o + 16), g.hwvx_proto_font_array, im_hwvx_proto_font, g.unordered_ref.hwvx_proto_font);

    // 64 bytes;

}
function im_hwvx_proto_interface_16_20t11(o, x) {
    x.push({
        sec_id: ">QXj",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 32 bytes;

}
function im_hwvx_proto_interface_16_60(o, x) {
    x.push({
        sec_id: "]Sms",
        unordered_hwvx_proto_interface_0: 0,
    });

    x[0].unordered_hwvx_proto_interface_0 = in_ml(u32(o + 0), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68(o, x) {
    x.push({
        sec_id: "J_pJ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_proto_interface_16_68_12(u32(o + 12) + (i * 20) + g.m, i, x[0].section_12);
    }
    u32(o + 20) && im_hwvx_proto_interface_16_68_20(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_hwvx_proto_interface_16_68_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "lXU^",
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
function im_hwvx_proto_interface_16_68_20(o, x) {
    x.push({
        sec_id: "bX^r",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_proto_interface_16_68_20_8(u32(o + 8) + g.m, x[0].section_8);

    // 12 bytes;

}
function im_hwvx_proto_interface_16_68_20_8(o, x) {
    x.push({
        sec_id: "H_sG",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        section_8: [],
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
        u32_36: u32(o + 36),
    });

    switch (u8(o + 5)) {
    case 1:
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
        break;
    case 11:
        u32(o + 0) && im_hwvx_proto_interface_16_68_20_8_0t11(u32(o + 0) + g.m, x[0].section_0);
        break;
    }
    u32(o + 8) && im_hwvx_proto_interface_16_68_20_8_8(u32(o + 8) + g.m, x[0].section_8);
    u32(o + 24) && im_hwvx_proto_interface_16_68_20_8_24(u32(o + 24) + g.m, x[0].section_24);
    u32(o + 32) && im_hwvx_proto_interface_16_68_20_8_32(u32(o + 32) + g.m, x[0].section_32);

    // 64 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_8(o, x) {
    x.push({
        sec_id: "[cs^",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_hwvx_proto_interface_16_68_20_8_8_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_hwvx_proto_interface_16_68_20_8_8_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_8_0(o, x) {
    x.push({
        sec_id: "r__j",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_8_4(o, x) {
    x.push({
        sec_id: "7xT1",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_24(o, x) {
    x.push({
        sec_id: "R=<n",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_32(o, x) {
    x.push({
        sec_id: "l3PK",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_72(o, x) {
    x.push({
        sec_id: "U=L=",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_proto_interface_16_72_8(u32(o + 8) + (i * 12) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_16_72_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "AlcH",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_proto_interface_16_72_8_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_proto_interface_16_72_8_8(o, x) {
    x.push({
        sec_id: "3wEt",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_interface_16_72_8_8_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_16_72_8_8_4(o, x) {
    x.push({
        sec_id: "P]zG",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_96(o, x) {
    x.push({
        sec_id: "Rkdk",
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
        im_hwvx_proto_interface_16_96_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_proto_interface_16_96_4(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_hwvx_proto_interface_16_96_4(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_hwvx_proto_interface_16_96_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_proto_interface_16_96_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }

    // 48 bytes;

}
function im_hwvx_proto_interface_16_96_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "aTUt",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_interface_16_96_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "jdSj",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_interface_16_96_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Z<<y",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        f32_36: f32(o + 36),
    });

}
function im_hwvx_proto_interface_16_104(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "M?r;",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_proto_interface_16_104_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_proto_interface_16_104_8(o, x) {
    x.push({
        sec_id: "sS_M",
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
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_16_104_8_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_proto_interface_16_104_8_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_hwvx_proto_interface_16_104_8_20(u32(o + 20) + (i * 12) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_hwvx_proto_interface_16_104_8_28(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_proto_interface_16_104_8_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_hwvx_proto_interface_16_104_8_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }
    u32(o + 56) && im_hwvx_proto_interface_16_104_8_56(u32(o + 56) + g.m, x[0].section_56);

    // 60 bytes;

}
function im_hwvx_proto_interface_16_104_8_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "i4Z@",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
    });

}
function im_hwvx_proto_interface_16_104_8_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "8<A2",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_interface_16_104_8_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "RpkE",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_interface_16_104_8_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "vfDd",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_interface_16_104_8_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "HIn]",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_32: u32(o + 32),
        f32_36: f32(o + 36),
    });

}
function im_hwvx_proto_interface_16_104_8_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "LJw3",
        f32_0: f32(o + 0),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_interface_16_104_8_56(o, x) {
    x.push({
        sec_id: "hTcs",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_interface_16_104_8_56_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_16_104_8_56_4(o, x) {
    x.push({
        sec_id: "Zg[j",
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_0t11(o, x) {
    x.push({
        sec_id: "gwE5",
        u32_0: u32(o + 0),
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_16_68_20_8_0t11_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_0t11_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Qvak",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_interface_16_68_20_8_0t11_4_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

}
function im_hwvx_proto_interface_16_68_20_8_0t11_4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5uGd",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_interface_16_68_20_8_0t11_4_4_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_proto_interface_16_68_20_8_0t11_4_4_0(o, x) {
    x.push({
        sec_id: "HE?>",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4(o, x) {
    x.push({
        sec_id: "vSGD",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "K=ks",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_hwvx_proto_interface_24_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_hwvx_proto_interface_24_8(o, x) {
    x.push({
        sec_id: "TCBf",
        section_0: [],
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        section_8: [],
    });

    switch (u8(o + 5)) {
    case 1:
        x[0].section_0 = in_ml(u32(o + 0), g.hwvx_proto_interface_array, im_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface);
        break;
    case 11:
        u32(o + 0) && im_hwvx_proto_interface_24_8_0t11(u32(o + 0) + g.m, x[0].section_0);
        break;
    }
    switch (u8(o + 5)) {
    case 15:
        u32(o + 8) && im_hwvx_proto_interface_24_8_8t15(u32(o + 8) + g.m, x[0].section_8);
        break;
    case 17:
        u32(o + 8) && im_hwvx_proto_interface_24_8_8t17(u32(o + 8) + g.m, x[0].section_8);
        break;
    }
    // 64 bytes;

}
function im_hwvx_proto_interface_24_8_0t11(o, x) {
    x.push({
        sec_id: "EQvy",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_24_8_0t11_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_24_8_0t11_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "WMML",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_interface_24_8_0t11_4_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

}
function im_hwvx_proto_interface_24_8_0t11_4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "P<e^",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_interface_24_8_0t11_4_4_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_proto_interface_24_8_0t11_4_4_0(o, x) {
    x.push({
        sec_id: "8lvN",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_interface_24_8_0t11_4_4_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_24_8_0t11_4_4_0_4(o, x) {
    x.push({
        sec_id: "QW[=",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_24_8_8t15(o, x) {
    x.push({
        sec_id: "Xyg1",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_hwvx_proto_interface_24_8_8t15_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_hwvx_proto_interface_24_8_8t15_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_24_8_8t15_0(o, x) {
    x.push({
        sec_id: "q6pP",
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_24_8_8t15_4(o, x) {
    x.push({
        sec_id: "81GP",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_24_8_8t17(o, x) {
    x.push({
        sec_id: "[@P4",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_28(o, x) {
    x.push({
        sec_id: "ZriU",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_interface_28_4(u32(o + 4) + (i * 52) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_interface_28_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "vX8@",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) && im_hwvx_proto_interface_28_4_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_hwvx_proto_interface_28_4_16(o, x) {
    x.push({
        sec_id: "PfIg",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_interface_28_4_16_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_interface_28_4_16_4(o, x) {
    x.push({
        sec_id: "a=N3",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_48(o, x) {
    x.push({
        sec_id: "xJ=Y",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_text_related(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "3OW[",
        unordered_hwvx_proto_text_0: 0,
        unordered_hwvx_proto_font_8: 0,
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

    x[i].unordered_hwvx_proto_text_0 = in_ml(u32(o + 0), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    x[i].unordered_hwvx_proto_font_8 = in_ml(u32(o + 8), g.hwvx_proto_font_array, im_hwvx_proto_font, g.unordered_ref.hwvx_proto_font);
    u32(o + 12) && im_hwvx_proto_interface_text_related_12(u32(o + 12) + g.m, x[i].section_12);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_hwvx_proto_interface_text_related_20(u32(o + 20) + (ii * 16) + g.m, ii, x[i].section_20);
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_proto_interface_text_related_20(u32(o + 28) + (ii * 16) + g.m, ii, x[i].section_28);
    }
    for (let ii = 0; ii < u32(o + 44); ii++) {
        im_hwvx_proto_interface_text_related_20(u32(o + 48) + (ii * 16) + g.m, ii, x[i].section_48);
    }
    u32(o + 52) && im_hwvx_proto_interface_text_related_52(u32(o + 52) + g.m, x[i].section_52);
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_interface_text_related_12(o, x) {
    x.push({
        sec_id: "<J>V",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_proto_interface_text_related_20(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "T8ye",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_interface_text_related_20_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }

}
function im_hwvx_proto_interface_text_related_20_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "AYTy",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_proto_interface_text_related_52(o, x) {
    x.push({
        sec_id: "O];A",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_proto_unknown(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "9me0",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_hwvx_proto_unknown_4(u32(o + 4) + (ii * 12) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_unknown_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "HP[]",
        u32_0: u32(o + 0),
        section_4: [],
        section_8: [],
    });

    switch (u32(o + 0)) {
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_unknown_thing_array, im_hwvx_proto_unknown_thing, g.unordered_ref.hwvx_proto_unknown_thing);
        break;
    case 2:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_asdf_array, im_hwvx_proto_asdf, g.unordered_ref.hwvx_proto_asdf);
        break;
    case 3:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
        break;
    case 4:
        u32(o + 4) && im_hwvx_proto_unknown_4_4t4(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 5:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_unknown_idk_sec_array, im_hwvx_proto_unknown_idk_sec, g.unordered_ref.hwvx_proto_unknown_idk_sec);
        break;
    case 6:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_world_model_related_array, im_hwvx_proto_world_model_related, g.unordered_ref.hwvx_proto_world_model_related);
        break;
    case 7:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_grand_section_array, im_hwvx_proto_grand_section, g.unordered_ref.hwvx_proto_grand_section);
        break;
    case 8:
        u32(o + 4) && im_hwvx_proto_unknown_4_4t8(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 10:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);
        break;
    case 26:
        x[i].section_4 = in_ml(u32(o + 4), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);
        break;
    case 29:
        u32(o + 4) && im_hwvx_proto_unknown_4_4t29(u32(o + 4) + g.m, x[i].section_4);
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
        u32(o + 8) && im_hwvx_proto_unknown_4_8t1(u32(o + 8) + g.m, x[i].section_8);
        break;
    case 5:
    case 6:
    case 8:
    case 26:
        u32(o + 8) && im_hwvx_proto_unknown_4_8t5(u32(o + 8) + g.m, x[i].section_8);
        break;
    }
}
function im_hwvx_proto_unknown_4_8t1(o, x) {
    x.push({
        sec_id: "oH:I",
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
        u32(o + 40) && im_hwvx_proto_unknown_4_8t1_40t1(u32(o + 40) + g.m, x[0].section_40);
        break;
    case 2:
        u32(o + 40) && im_hwvx_proto_unknown_4_8t1_40t2(u32(o + 40) + g.m, x[0].section_40);
        break;
    }
    u32(o + 44) && im_hwvx_proto_unknown_4_8t1_44(u32(o + 44) + g.m, x[0].section_44);

    // 48 bytes;

}
function im_hwvx_proto_unknown_4_8t1_40t1(o, x) {
    x.push({
        sec_id: "KKwn",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_proto_unknown_4_8t1_40t2(o, x) {
    x.push({
        sec_id: "fJ[T",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
    });

    switch (u8(o + 9)) {
    case 0:
        u32(o + 12) && im_hwvx_proto_unknown_4_8t1_40t2_12t0(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1:
        u32(o + 12) && im_hwvx_proto_unknown_4_8t1_40t2_12t1(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 2:
        u32(o + 12) && im_hwvx_proto_unknown_4_8t1_40t2_12t2(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    // 16 bytes;

}
function im_hwvx_proto_unknown_4_8t1_40t2_12t0(o, x) {
    x.push({
        sec_id: "qOTK",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_proto_unknown_4_8t1_40t2_12t1(o, x) {
    x.push({
        sec_id: "1A8k",
        f32_0: f32(o + 0),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_proto_unknown_4_8t1_40t2_12t2(o, x) {
    x.push({
        sec_id: "8P[M",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_proto_unknown_4_8t1_44(o, x) {
    x.push({
        sec_id: "Cu>6",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_proto_unknown_4_8t5(o, x) {
    x.push({
        sec_id: "g>hN",
        u32_24: u32(o + 24),
        section_28: [],
    });

    u32(o + 28) && im_hwvx_proto_unknown_4_8t5_28(u32(o + 28) + g.m, x[0].section_28);

    // 48 bytes;

}
function im_hwvx_proto_unknown_4_8t5_28(o, x) {
    x.push({
        sec_id: "]b4a",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_hwvx_proto_unknown_4_4t4(o, x) {
    x.push({
        sec_id: "VD@9",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_24: u32(o + 24),
        section_28: [],
    });

    u32(o + 28) && im_hwvx_proto_unknown_4_4t4_28(u32(o + 28) + g.m, x[0].section_28);

    // 48 bytes;

}
function im_hwvx_proto_unknown_4_4t4_28(o, x) {
    x.push({
        sec_id: "nTMN",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[0].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    // 16 bytes;

}
function im_hwvx_proto_unknown_4_4t8(o, x) {
    x.push({
        sec_id: "d7nY",
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

    for (let i = 0; i < u32(o + 12); i++) {
        im_hwvx_proto_unknown_4_4t8_16(u32(o + 16) + (i * 12) + g.m, i, x[0].section_16);
    }
    u32(o + 24) && im_hwvx_proto_unknown_4_4t8_24(u32(o + 24) + g.m, x[0].section_24);

    // 32 bytes;

}
function im_hwvx_proto_unknown_4_4t8_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gS;?",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_unknown_4_4t8_24(o, x) {
    x.push({
        sec_id: "e2Rn",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

    // 12 bytes;

}
function im_hwvx_proto_unknown_4_4t29(o, x) {
    x.push({
        sec_id: "NE9?",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_proto_unknown_4_4t29_12(u32(o + 12) + (i * 48) + g.m, i, x[0].section_12);
    }

    // 16 bytes;

}
function im_hwvx_proto_unknown_4_4t29_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Pd2k",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        model_28: [],
        unordered_hwvx_proto_unknown_link_section_32: 0,
    });

    x[i].model_28 = in_models(o + 28, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);
    x[i].unordered_hwvx_proto_unknown_link_section_32 = in_ml(u32(o + 32), g.hwvx_proto_unknown_link_section_array, im_hwvx_proto_unknown_link_section, g.unordered_ref.hwvx_proto_unknown_link_section);

}
function im_hwvx_proto_unknown_idk_sec(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "^GRl",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
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

    u32(o + 28) && im_hwvx_proto_unknown_idk_sec_28(u32(o + 28) + g.m, x[i].section_28);
    u32(o + 32) && im_hwvx_proto_unknown_idk_sec_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 36) && im_hwvx_proto_unknown_idk_sec_36(u32(o + 36) + g.m, x[i].section_36);
    u32(o + 40) && im_hwvx_proto_unknown_idk_sec_40(u32(o + 40) + g.m, x[i].section_40);
    u32(o + 48) && im_hwvx_proto_unknown_idk_sec_48(u32(o + 48) + g.m, x[i].section_48);
    return x[i].id
    // 80 bytes;

}
function im_hwvx_proto_unknown_idk_sec_28(o, x) {
    x.push({
        sec_id: "3]3r",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        unordered_hwvx_proto_unknown_24: 0,
    });

    x[0].unordered_hwvx_proto_unknown_24 = in_ml(u32(o + 24), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    // 64 bytes;

}
function im_hwvx_proto_unknown_idk_sec_32(o, x) {
    x.push({
        sec_id: "Q4<C",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_hwvx_proto_unknown_idk_sec_32_8(u32(o + 8) + (i * 12) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_hwvx_proto_unknown_idk_sec_32_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "6yHH",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_unknown_idk_sec_36(o, x) {
    x.push({
        sec_id: "7vmh",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_hwvx_proto_unknown_idk_sec_36_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_hwvx_proto_unknown_idk_sec_36_4(o, x) {
    x.push({
        sec_id: "8Wto",
        f32_0: f32(o + 0),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_hwvx_proto_unknown_idk_sec_40(o, x) {
    x.push({
        sec_id: "Zd;F",
        u32_0: u32(o + 0),
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_unknown_idk_sec_40_4(u32(o + 4) + (i * 16) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_unknown_idk_sec_40_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "3s]Q",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

}
function im_hwvx_proto_unknown_idk_sec_48(o, x) {
    x.push({
        sec_id: "pPZL",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_unknown_link_section(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "H8fI",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_hwvx_proto_unknown_link_section_28(u32(o + 28) + (ii * 4) + g.m, ii, x[i].section_28);
    }
    return x[i].id
    // 48 bytes;

}
function im_hwvx_proto_unknown_link_section_28(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "AGOy",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[i].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

}
function im_hwvx_proto_grand_section(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "caGR",
        model_0: [],
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        unordered_hwvx_proto_car_link_16: 0,
        u32_24: u32(o + 24),
        section_28: [],
    });

    x[i].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

    x[i].unordered_hwvx_proto_car_link_16 = in_ml(u32(o + 16), g.hwvx_proto_car_link_array, im_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link);

    for (let i = 0; i < u32(o + 24); i++) {
        im_hwvx_proto_mysterious(u32(o + 28) + (i * 32) + g.m, i, x[i].section_28);
    }
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_unknown_thing(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "tpqu",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 4) && im_hwvx_proto_unknown_thing_4t0(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 1:
        u32(o + 4) && im_hwvx_proto_unknown_thing_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 2:
        u32(o + 4) && im_hwvx_proto_unknown_thing_4t2(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_hwvx_proto_unknown_thing_24(u32(o + 24) + (ii * 12) + g.m, ii, x[i].section_24);
    }
    u32(o + 32) && im_hwvx_proto_unknown_thing_32(u32(o + 32) + g.m, x[i].section_32);
    return x[i].id
    // 48 bytes;

}
function im_hwvx_proto_unknown_thing_4t0(o, x) {
    x.push({
        sec_id: "vK>c",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        unordered_hwvx_proto_sound_controls_24: 0,
        u32_32: u32(o + 32),
        //amount?
        section_36: [],
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
    });

    x[0].unordered_hwvx_proto_sound_controls_24 = in_ml(u32(o + 24), g.hwvx_proto_sound_controls_array, im_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls);

    for (let i = 0; i < u32(o + 32); i++) {
        im_hwvx_proto_unknown_thing_4t0_36(u32(o + 36) + (i * 4) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_hwvx_proto_unknown_thing_4t0_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }

    // 64 bytes;

}
function im_hwvx_proto_unknown_thing_4t0_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "2SLk",
        model_0: [],
    });

    x[i].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

}
function im_hwvx_proto_unknown_thing_4t0_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "h;uV",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_unknown_thing_4t1(o, x) {
    x.push({
        sec_id: "]7y^",
        u32_0: u32(o + 0),
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
        im_hwvx_proto_unknown_thing_4t1_36(u32(o + 36) + (i * 4) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_hwvx_proto_unknown_thing_4t1_44(u32(o + 44) + (i * 12) + g.m, i, x[0].section_44);
    }

    // 48 bytes;

}
function im_hwvx_proto_unknown_thing_4t1_36(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "X594",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_proto_unknown_thing_4t1_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "I>Pm",
        f32_0: f32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_unknown_thing_4t2(o, x) {
    x.push({
        sec_id: "jbi0",
        u32_0: u32(o + 0),
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
        im_hwvx_proto_unknown_thing_4t2_16(u32(o + 16) + (i * 12) + g.m, i, x[0].section_16);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_hwvx_proto_unknown_thing_4t2_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
    }

    // 32 bytes;

}
function im_hwvx_proto_unknown_thing_4t2_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "n?lz",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_unknown_thing_4t2_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "8AvY",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_unknown_thing_24(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "<dYK",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_unknown_thing_32(o, x) {
    x.push({
        sec_id: "lLrJ",
        unordered_hwvx_proto_unknown_0: 0,
    });

    x[0].unordered_hwvx_proto_unknown_0 = in_ml(u32(o + 0), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    // 16 bytes;

}
function im_hwvx_proto_asdf(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Q7EE",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_12: [],
        model_16: [],
        u32_20: u32(o + 20),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        u32_56: u32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        u32_84: u32(o + 84),
        texture_92: im_patch(g.texture_patch_ref, o + 92),
        unordered_hwvx_proto_unknown_112: 0,
        unordered_hwvx_proto_unknown_116: 0,
        unordered_hwvx_proto_unknown_120: 0,
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
        u32(o + 12) && im_hwvx_proto_asdf_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 2:
        u32(o + 12) && im_hwvx_proto_asdf_12t2(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
    x[i].model_16 = in_models(o + 16, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

    x[i].unordered_hwvx_proto_unknown_112 = in_ml(u32(o + 112), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
    x[i].unordered_hwvx_proto_unknown_116 = in_ml(u32(o + 116), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
    x[i].unordered_hwvx_proto_unknown_120 = in_ml(u32(o + 120), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);

    for (let ii = 0; ii < u32(o + 140); ii++) {
        im_hwvx_proto_asdf_144(u32(o + 144) + (ii * 32) + g.m, ii, x[i].section_144);
    }

    for (let ii = 0; ii < u32(o + 148); ii++) {
        im_hwvx_proto_asdf_152(u32(o + 152) + (ii * 12) + g.m, ii, x[i].section_152);
    }

    for (let ii = 0; ii < u32(o + 156); ii++) {
        im_hwvx_proto_mysterious(u32(o + 160) + (ii * 32) + g.m, ii, x[i].section_160);
    }
    u32(o + 164) && im_hwvx_proto_asdf_164(u32(o + 164) + g.m, x[i].section_164);
    u32(o + 168) && im_hwvx_proto_asdf_168(u32(o + 168) + g.m, x[i].section_168);
    u32(o + 172) && im_hwvx_proto_asdf_172(u32(o + 172) + g.m, x[i].section_172);
    return x[i].id
    // 176 bytes;

}
function im_hwvx_proto_asdf_12t1(o, x) {
    x.push({
        sec_id: "x<;N",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_asdf_12t2(o, x) {
    x.push({
        sec_id: ":]L<",
        f32_0: f32(o + 0),
    });

    // 16 bytes;

}
function im_hwvx_proto_asdf_144(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "Rg6^",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_20: f32(o + 20),
    });

}
function im_hwvx_proto_asdf_152(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ";ZV3",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_asdf_164(o, x) {
    x.push({
        sec_id: "n^l7",
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
function im_hwvx_proto_asdf_168(o, x) {
    x.push({
        sec_id: "qO<v",
        u32_0: u32(o + 0),
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
function im_hwvx_proto_asdf_172(o, x) {
    x.push({
        sec_id: "UlWs",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_hwvx_proto_item(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "1<NQ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        unordered_hwvx_proto_text_32: 0,
        unordered_hwvx_proto_unknown_36: 0,
        unordered_hwvx_proto_unknown_44: 0,
        section_48: [],
        unordered_hwvx_proto_model_anims_2_52: 0,
        u32_56: u32(o + 56),
        section_60: [],
    });

    x[i].unordered_hwvx_proto_text_32 = in_ml(u32(o + 32), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    x[i].unordered_hwvx_proto_unknown_36 = in_ml(u32(o + 36), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
    x[i].unordered_hwvx_proto_unknown_44 = in_ml(u32(o + 44), g.hwvx_proto_unknown_array, im_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown);
    u32(o + 48) && im_hwvx_proto_item_48(u32(o + 48) + g.m, x[i].section_48);
    x[i].unordered_hwvx_proto_model_anims_2_52 = in_ml(u32(o + 52), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    for (let ii = 0; ii < u32(o + 56); ii++) {
        im_hwvx_proto_mysterious(u32(o + 60) + (ii * 32) + g.m, ii, x[i].section_60);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_item_48(o, x) {
    x.push({
        sec_id: "[Tf[",
        section_0: [],
        unordered_hwvx_proto_text_16: 0,
        texture_24: im_patch(g.texture_patch_ref, o + 24),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        unordered_hwvx_proto_model_anims_2_28: 0,
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        u32_52: u32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
    });

    u32(o + 0) && im_hwvx_proto_item_48_0(u32(o + 0) + g.m, x[0].section_0);
    x[0].unordered_hwvx_proto_text_16 = in_ml(u32(o + 16), g.hwvx_proto_text_array, im_hwvx_proto_text, g.unordered_ref.hwvx_proto_text);
    x[0].unordered_hwvx_proto_model_anims_2_28 = in_ml(u32(o + 28), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);

    // 96 bytes;

}
function im_hwvx_proto_item_48_0(o, x) {
    x.push({
        sec_id: "HU5e",
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
        unordered_hwvx_proto_model_anims_1_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
        f32_24: f32(o + 24),
        u32_28: u32(o + 28),
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        section_52: [],
    });

    for (let i = 0; i < u32(o + 8); i++) {
        im_hwvx_proto_item_48_0_12(u32(o + 12) + (i * 8) + g.m, i, x[0].section_12);
    }
    x[0].unordered_hwvx_proto_model_anims_1_16 = in_ml(u32(o + 16), g.hwvx_proto_model_anims_1_array, im_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1);
    x[0].unordered_hwvx_proto_model_anims_2_20 = in_ml(u32(o + 20), g.hwvx_proto_model_anims_2_array, im_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2);
    u32(o + 32) && im_hwvx_proto_item_48_0_32(u32(o + 32) + g.m, x[0].section_32);
    u32(o + 36) && im_hwvx_proto_item_48_0_36(u32(o + 36) + g.m, x[0].section_36);
    u32(o + 40) && im_hwvx_proto_item_48_0_40(u32(o + 40) + g.m, x[0].section_40);

    for (let i = 0; i < u32(o + 44); i++) {
        im_hwvx_proto_mysterious(u32(o + 48) + (i * 32) + g.m, i, x[0].section_48);
    }
    u32(o + 52) && im_hwvx_proto_item_48_0_52(u32(o + 52) + g.m, x[0].section_52);

    // 64 bytes;

}
function im_hwvx_proto_item_48_0_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "rCXf",
        model_0: [],
        u32_4: u32(o + 4),
    });
    x[i].model_0 = in_models(o + 0, g.hwvx_proto_models_array, im_hwvx_proto_models, g.ordered_ref.hwvx_proto_models);

}
function im_hwvx_proto_item_48_0_32(o, x) {
    x.push({
        sec_id: "]sCt",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_item_48_0_36(o, x) {
    x.push({
        sec_id: "Rn4S",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_item_48_0_40(o, x) {
    x.push({
        sec_id: "<OmJ",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_item_48_0_52(o, x) {
    x.push({
        sec_id: "4diD",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 48 bytes;

}
function im_hwvx_proto_link(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "v8dg",
        section_4: im_string(u32(o + 4), 0, false),
        section_8: im_string(u32(o + 8), 0, false),
        section_12: im_string(u32(o + 12), 0, false),
        texture_16: im_patch(g.texture_patch_ref, o + 16),
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u32_36: u32(o + 36),
        u32_40: u32(o + 40),
        //amount?
        section_44: [],
        u32_48: u32(o + 48),
        //amount?
        section_52: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
    });

    for (let ii = 0; ii < u32(o + 40); ii++) {
        im_hwvx_proto_link_44(u32(o + 44) + (ii * 12) + g.m, ii, x[i].section_44);
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        im_hwvx_proto_link_52(u32(o + 52) + (ii * 4) + g.m, ii, x[i].section_52);
    }

    for (let ii = 0; ii < u32(o + 56); ii++) {
        im_hwvx_proto_link_60(u32(o + 60) + (ii * 4) + g.m, ii, x[i].section_60);
    }
    return x[i].id
    // 64 bytes;

}
function im_hwvx_proto_link_44(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ";1k?",
        u32_0: u32(o + 0),
        section_4: [],
        section_8: [],
    });

    switch (u32(o + 0)) {
    case 1:
    case 4:
        u32(o + 8) && im_hwvx_proto_link_44_8(u32(o + 8) + g.m, x[i].section_8);
        break;
    }
}
function im_hwvx_proto_link_44_8(o, x) {
    x.push({
        sec_id: "=Sj3",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_link_52(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "VveN",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_link_52_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_proto_link_52_0(o, x) {
    x.push({
        sec_id: "fPWs",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_link_52_0_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_link_52_0_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "@QKQ",
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
        im_hwvx_proto_link_52_0_4_4(u32(o + 4) + (ii * 8) + g.m, ii, x[i].section_4);
    }
    u32(o + 8) && im_hwvx_proto_link_52_0_4_8(u32(o + 8) + g.m, x[i].section_8);
    u32(o + 20) && im_hwvx_proto_link_52_0_4_20(u32(o + 20) + g.m, x[i].section_20);
    u32(o + 28) && im_hwvx_proto_link_52_0_4_28(u32(o + 28) + g.m, x[i].section_28);

}
function im_hwvx_proto_link_52_0_4_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "5JG5",
        u32_0: u32(o + 0),
        section_4: [],
    });

    switch (u32(o + 0)) {
    case 1:
        u32(o + 4) && im_hwvx_proto_link_52_0_4_4_4(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_hwvx_proto_link_52_0_4_4_4(o, x) {
    x.push({
        sec_id: "dqlY",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_link_52_0_4_8(o, x) {
    x.push({
        sec_id: "LgjN",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_hwvx_proto_link_52_0_4_20(o, x) {
    x.push({
        sec_id: "0ic:",
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_hwvx_proto_link_52_0_4_28(o, x) {
    x.push({
        sec_id: "tXYf",
    });

    // 16 bytes;

}
function im_hwvx_proto_link_60(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "29=@",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_link_60_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_hwvx_proto_link_60_0(o, x) {
    x.push({
        sec_id: "VLW2",
        section_0: [],
    });

    u32(o + 0) && im_hwvx_proto_link_60_0_0(u32(o + 0) + g.m, x[0].section_0);

    // 16 bytes;

}
function im_hwvx_proto_link_60_0_0(o, x) {
    x.push({
        sec_id: "f3Y0",
        section_0: [],
        section_4: [],
        section_8: [],
    });

    u32(o + 0) && im_hwvx_proto_link_60_0_0_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_hwvx_proto_link_60_0_0_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_hwvx_proto_link_60_0_0_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_hwvx_proto_link_60_0_0_0(o, x) {
    x.push({
        sec_id: ";cM0",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_hwvx_proto_link_60_0_0_4(o, x) {
    x.push({
        sec_id: "hU]>",
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
function im_hwvx_proto_link_60_0_0_8(o, x) {
    x.push({
        sec_id: "D_EH",
        u8_0: u8(o + 0),
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
function im_hwvx_proto_sound_controls(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "aO>y",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_proto_sound_controls_12(u32(o + 12) + (ii * 16) + g.m, ii, x[i].section_12);
    }
    return x[i].id
    // 16 bytes;

}
function im_hwvx_proto_sound_controls_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "IT5f",
        f32_0: f32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let ii = 0; ii < u32(o + 8); ii++) {
        im_hwvx_proto_sound_controls_12_12(u32(o + 12) + (ii * 4) + g.m, ii, x[i].section_12);
    }

}
function im_hwvx_proto_sound_controls_12_12(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: ";2Q?",
        unordered_hwvx_proto_sound_section_0: 0,
    });

    x[i].unordered_hwvx_proto_sound_section_0 = in_ml(u32(o + 0), g.hwvx_proto_sound_section_array, im_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section);

}
function im_hwvx_proto_sound_section(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "wg7F",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        sound_20: im_patch(g.sound_patch_ref, o + 20),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    u32(o + 24) && im_hwvx_proto_sound_section_24(u32(o + 24) + g.m, x[i].section_24);
    u32(o + 32) && im_hwvx_proto_sound_section_32(u32(o + 32) + g.m, x[i].section_32);
    return x[i].id
    // 48 bytes;

}
function im_hwvx_proto_sound_section_24(o, x) {
    x.push({
        sec_id: "b[E5",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
    });

    // 12 bytes;

}
function im_hwvx_proto_sound_section_32(o, x) {
    x.push({
        sec_id: "ZBz8",
        f32_0: f32(o + 0),
    });

    // 12 bytes;

}
function im_hwvx_proto_texture_anims_0(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "D1YG",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        section_20: [],
    });

    for (let ii = 0; ii < u32(o + 4); ii++) {
        im_hwvx_proto_texture_anims_0_8(u32(o + 8) + (ii * 12) + g.m, ii, x[i].section_8);
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_hwvx_proto_texture_anims_0_16(u32(o + 16) + (ii * 16) + g.m, ii, x[i].section_16);
    }
    u32(o + 20) && im_hwvx_proto_texture_anims_0_20(u32(o + 20) + g.m, x[i].section_20);
    return x[i].id
    // 32 bytes;

}
function im_hwvx_proto_texture_anims_0_20(o, x) {
    x.push({
        sec_id: "cMSE",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_hwvx_proto_texture_anims_0_20_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_hwvx_proto_texture_anims_0_20_4(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "<4l9",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_hwvx_proto_texture_anims_0_8(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "^^gk",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_hwvx_proto_texture_anims_0_16(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "a]cr",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
    });

}

/* end import list */
/////////////////////
/* start add list */
function add_hwvx_proto_file_header() {
    return {
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_hwvx_proto_directory() {
    return {
        id: gen_id(),
        sec_id: "]7Zf",
        multi: 1,
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}
function add_hwvx_proto_datapack() {
    return {
        id: gen_id(),
        sec_id: "E@3Z",
        section_0: [],
        section_4: [],
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        u32_32: 0,
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        u32_52: 0,
        u32_56: 0,
        section_60: [],
        u32_64: 0,
        section_68: [],
        section_72: [],
        section_76: [],
        section_80: ["Pac-Kart"],
        u32_92: 0,
        section_100: ["Pac-Kart"],
        u32_112: 0,
        section_audio: [],
    };

}

function add_hwvx_proto_geo_datapack() {
    return {
        id: gen_id(),
        sec_id: "PcI:",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_28: 0,
        u32_36: 0,
        u32_40: 0,
        section_44: ["Pac-Kart"],
        section_56: ["Pac-Kart"],
    };

}

function add_hwvx_proto_sound_offset_list() {
    return {
        id: gen_id(),
        sec_id: "Fgpx",
        section_0: [],
    };

}
function add_hwvx_proto_audio_list() {
    return {
        id: gen_id(),
        sec_id: "4IJg",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u16_16: 0,
        u16_18: 0,
    };

}
function add_hwvx_proto_basic() {
    return {
        id: gen_id(),
        sec_id: "uZNx",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_basic_4() {
    return {
        sec_id: "j3qp",
        section_0: [],
        u32_4: 0,
    };

}
function add_hwvx_proto_geo_basic() {
    return {
        sec_id: "rwx_",
        section_0: [],
        unordered_hwvx_proto_geo_list_4: 0,
    };

}
function add_hwvx_proto_geo_basic_0() {
    return {
        id: gen_id(),
        sec_id: "nMcM",
        u32_0: 0,
        model_8: [0, 0, 0, 'm'],
    };

}
function add_hwvx_proto_share() {
    return {
        id: gen_id(),
        sec_id: "FNM8",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_hwvx_proto_world() {
    return {
        sec_id: "rjJj",
        unordered_hwvx_proto_world_4_4: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        unordered_hwvx_proto_world_20_20: 0,
        u32_32: 0,
        unordered_hwvx_proto_world_36_36: 0,
        u32_40: 0,
        unordered_hwvx_proto_world_44_44: 0,
        u32_48: 0,
        unordered_hwvx_proto_world_52_52: 0,
        u32_72: 0,
        unordered_hwvx_proto_world_76_76: 0,
        u32_80: 0,
        unordered_hwvx_proto_world_76_84: 0,
        u32_88: 0,
        unordered_hwvx_proto_world_92_92: 0,
        u32_96: 0,
        unordered_hwvx_proto_world_100_100: 0,
        u32_104: 0,
        unordered_hwvx_proto_world_108_108: 0,
        u32_112: 0,
        unordered_hwvx_proto_world_116_116: 0,
        unordered_hwvx_proto_world_120_120: 0,
        section_124: ["Pac-Kart"],
        section_132: ["Pac-Kart"],
        section_140: ["Pac-Kart"],
        unordered_hwvx_proto_world_settings_156: 0,
    };

}
function add_hwvx_proto_world_12() {
    return {
        id: gen_id(),
        sec_id: "=>48",
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
        unordered_hwvx_proto_world_idk_64: 0,
        unordered_hwvx_proto_world_idk_68: 0,
        unordered_hwvx_proto_world_idk_72: 0,
        unordered_hwvx_proto_world_idk_76: 0,
        u32_80: 0,
        u32_92: 0,
    };

}
function add_hwvx_proto_world_20() {
    return {
        id: gen_id(),
        sec_id: "eBnd",
        u32_0: 0,
        unordered_hwvx_proto_model_anims_1_4: 0,
        f32_8: 0,
        section_12: [],
    };

}
function add_hwvx_proto_world_20_12() {
    return {
        sec_id: "taFF",
        model_0: [0, 0, 0, 'm'],
        u8_5: 0,
        u8_7: 0,
        f32_8: 0,
        unordered_hwvx_proto_car_link_16: 0,
    };

}
function add_hwvx_proto_world_36() {
    return {
        id: gen_id(),
        sec_id: ">je2",
        u32_0: 0,
        u32_12: 0,
        u32_24: 0,
        unordered_hwvx_proto_world_36_28_28: 0,
        u32_32: 0,
        unordered_hwvx_proto_world_36_36_36: 0,
        unordered_hwvx_proto_world_36_48_48: 0,
    };

}
function add_hwvx_proto_world_36_36() {
    return {
        id: gen_id(),
        sec_id: "vH^o",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_proto_world_36_48() {
    return {
        id: gen_id(),
        sec_id: "U<>y",
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_proto_world_36_48_16() {
    return {
        id: gen_id(),
        sec_id: "00LC",
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
        unordered_hwvx_proto_strange_36: 0,
        f32_44: 0,
        u32_52: 0,
        u32_56: 0,
    };

}
function add_hwvx_proto_world_36_28() {
    return {
        id: gen_id(),
        sec_id: ">8l?",
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
function add_hwvx_proto_world_36_48_8() {
    return {
        id: gen_id(),
        sec_id: "HY@p",
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
        u32_52: 0,
    };

}
function add_hwvx_proto_world_36_48_24() {
    return {
        id: gen_id(),
        sec_id: "S;d?",
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
function add_hwvx_proto_world_44() {
    return {
        id: gen_id(),
        sec_id: "zBaW",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        unordered_hwvx_proto_sound_section_20: 0,
        u32_28: 0,
        u32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_48: 0,
    };

}
function add_hwvx_proto_world_116() {
    return {
        sec_id: "7K=p",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        u32_20: 0,
    };

}
function add_hwvx_proto_world_76() {
    return {
        id: gen_id(),
        sec_id: "ZEh]",
        section_0: [],
    };

}
function add_hwvx_proto_world_52() {
    return {
        id: gen_id(),
        sec_id: "TQ0O",
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
function add_hwvx_proto_world_52_88t1() {
    return {
        sec_id: "ESX3",
        u32_0: 0,
    };

}
function add_hwvx_proto_world_92() {
    return {
        id: gen_id(),
        sec_id: "=Xx@",
        unordered_hwvx_proto_world_text_link_4: 0,
    };

}
function add_hwvx_proto_world_100() {
    return {
        sec_id: "1ctA",
        u32_0: 0,
        unordered_hwvx_proto_world_color_section_4: 0,
        u32_8: 0,
    };

}
function add_hwvx_proto_world_108() {
    return {
        id: gen_id(),
        sec_id: "6uH?",
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
function add_hwvx_proto_world_108_40() {
    return {
        sec_id: "oqWI",
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
function add_hwvx_proto_world_108_44t1() {
    return {
        sec_id: "M=7v",
        f32_0: 0,
        f32_4: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
    };

}
function add_hwvx_proto_world_108_44t2() {
    return {
        sec_id: "IENC",
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
function add_hwvx_proto_world_108_44t3() {
    return {
        sec_id: "E=O_",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_world_108_44t6() {
    return {
        id: gen_id(),
        sec_id: "VGH4",
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
        u32_24: 0,
    };

}
function add_hwvx_proto_world_4() {
    return {
        sec_id: "rWN=",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
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
function add_hwvx_proto_world_4_20() {
    return {
        id: gen_id(),
        sec_id: "rjvv",
        u32_0: 0,
    };

}
function add_hwvx_proto_world_4_16() {
    return {
        id: gen_id(),
        sec_id: "Nxlg",
        u32_0: 0,
        section_4: [],
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
function add_hwvx_proto_world_4_16_4() {
    return {
        id: gen_id(),
        sec_id: "09ci",
        unordered_hwvx_proto_world_108_0: 0,
    };

}
function add_hwvx_proto_world_120() {
    return {
        sec_id: "?R3u",
        unordered_hwvx_proto_world_120_0_0: 0,
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
    };

}
function add_hwvx_proto_world_120_0() {
    return {
        id: gen_id(),
        sec_id: "xQij",
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
        u32_68: 0,
        u32_72: 0,
        f32_76: 0,
        u32_80: 0,
        u8_85: 0,
        u8_86: 0,
        u8_87: 0,
        u32_96: 0,
        u32_100: 0,
    };

}
function add_hwvx_proto_collision() {
    return {
        sec_id: "56Am",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        section_32: [],
        u32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        u32_52: 0,
        u32_56: 0,
        u32_60: 0,
        unordered_hwvx_proto_collision_64_64: 0,
        u32_68: 0,
        u32_72: 0,
        unordered_hwvx_proto_collision_76_76: 0,
        u32_80: 0,
        unordered_hwvx_proto_collision_84_84: 0,
        u32_88: 0,
        unordered_hwvx_proto_collision_link_92: 0,
    };

}
function add_hwvx_proto_collision_32() {
    return {
        id: gen_id(),
        sec_id: "G_SO",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        unordered_hwvx_proto_collision_32_48_48: 0,
        unordered_hwvx_proto_collision_32_56_56: 0,
        u32_60: 0,
        u32_64: 0,
        unordered_hwvx_proto_collision_32_48_68: 0,
    };

}
function add_hwvx_proto_collision_32_48() {
    return {
        id: gen_id(),
        sec_id: "jPo9",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
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
function add_hwvx_proto_collision_32_56() {
    return {
        id: gen_id(),
        sec_id: "yQx5",
        u32_0: 0,
    };

}
function add_hwvx_proto_collision_64() {
    return {
        id: gen_id(),
        sec_id: "0lq8",
        u32_0: 0,
    };

}
function add_hwvx_proto_collision_76() {
    return {
        id: gen_id(),
        sec_id: "JRcn",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        section_16: [],
        u32_20: 0,
        u32_28: 0,
    };

}
function add_hwvx_proto_collision_76_16() {
    return {
        sec_id: "5i:=",
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
    };

}
function add_hwvx_proto_collision_84() {
    return {
        id: gen_id(),
        sec_id: "FN^k",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        u8_40: 0,
        u8_41: 0,
        u8_42: 0,
        u8_43: 0,
        u8_44: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
    };

}
function add_hwvx_proto_collision_link() {
    return {
        id: gen_id(),
        sec_id: "Gx;=",
        section_0: [],
        section_4: [],
    };

}
function add_hwvx_proto_triggers_and_actions() {
    return {
        id: gen_id(),
        sec_id: "3aN[",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        section_24: [],
        u32_28: 0,
        u32_32: 0,
        u32_40: 0,
    };

}

function add_hwvx_proto_triggers_and_actions_4t1() {
    return {
        sec_id: "fN<n",
        unordered_hwvx_proto_interface_0: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_4t3() {
    return {
        sec_id: "t:LV",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_4t5() {
    return {
        sec_id: "7u;j",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        u32_16: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_4t6() {
    return {
        sec_id: "xXSo",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_proto_world_12_12: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_4trest() {
    return {
        sec_id: "4Fw^",
        u32_0: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_12() {
    return {
        sec_id: "X5:_",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_12_4() {
    return {
        sec_id: "4CPG",
        u32_0: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20() {
    return {
        sec_id: "zCiR",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t0() {
    return {
        id: gen_id(),
        sec_id: "nOZg",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t1t12() {
    return {
        sec_id: "pTQb",
        u32_0: 0,
        unordered_hwvx_proto_triggers_and_actions_12_4_4_4: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t1t13() {
    return {
        id: gen_id(),
        sec_id: "s@JO",
        u32_0: 0,
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
function add_hwvx_proto_triggers_and_actions_20_4t1t16() {
    return {
        sec_id: "YM2p",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t2() {
    return {
        sec_id: "KqY>",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t3() {
    return {
        sec_id: "I^je",
        u32_0: 0,
        u32_4: u32(o + 4),
        //check this
        section_8: [],
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: [],
        f32_36: 0,
        u32_44: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t4() {
    return {
        sec_id: "Npx[",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
        section_12: [],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: [],
        f32_40: 0,
        f32_44: 0,
        u32_48: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t5() {
    return {
        sec_id: "LAop",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        section_24: [],
        f32_28: 0,
        f32_32: 0,
        u32_40: 0,
        section_44: [],
        f32_52: 0,
        u32_60: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t6() {
    return {
        sec_id: "fCWU",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t7() {
    return {
        sec_id: ":Hq]",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t8() {
    return {
        sec_id: "i5vu",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t9() {
    return {
        sec_id: "AQmR",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t10t10() {
    return {
        sec_id: "x21k",
        unordered_hwvx_proto_interface_0: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t10t20() {
    return {
        sec_id: "r_Uv",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t12() {
    return {
        sec_id: "twr?",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t15() {
    return {
        sec_id: "?t]q",
        u32_0: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t17() {
    return {
        sec_id: "bitp",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_proto_world_76_8: 0,
        f32_16: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t20() {
    return {
        sec_id: "ppf;",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_proto_world_76_12: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t21() {
    return {
        sec_id: "kA7T",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_16: 0,
        unordered_hwvx_proto_world_20_20: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t22() {
    return {
        sec_id: ">Cf1",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t24() {
    return {
        sec_id: "5]LU",
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
function add_hwvx_proto_triggers_and_actions_20_4t26() {
    return {
        sec_id: "g1oO",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t31() {
    return {
        sec_id: "KT>V",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t32() {
    return {
        sec_id: "P5tz",
        u32_0: u32(o + 0),
        //check this
        section_4: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t34() {
    return {
        sec_id: "4E^b",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t36() {
    return {
        sec_id: "MJOb",
        section_0: [],
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t38() {
    return {
        sec_id: "6Uxj",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_proto_text_8: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_20_4t39() {
    return {
        sec_id: "[g5w",
        u32_0: 0,
        unordered_hwvx_proto_world_52_4: 0,
        u32_8: 0,
        unordered_hwvx_proto_world_12_12: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_24() {
    return {
        sec_id: "cffS",
        u32_0: 0,
        u32_8: 0,
    };

}
function add_hwvx_proto_triggers_and_actions_24_4() {
    return {
        sec_id: "pN<^",
        section_0: [],
    };

}
function add_hwvx_proto_models() {
    return {
        sec_id: "NSr;",
        u16_0: 0,
        u16_2: 0,
        u32_4: 0,
        section_8: [],
        section_12: [],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function add_hwvx_proto_model_8() {
    return {
        id: gen_id(),
        sec_id: "U>9;",
        u8_0: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        unordered_hwvx_proto_model_string_20: 0,
    };

}
function add_hwvx_proto_model_12() {
    return {
        id: gen_id(),
        sec_id: "HklA",
        f32_0: 0,
    };

}
function add_hwvx_proto_model_8_8() {
    return {
        id: gen_id(),
        sec_id: "=AG@",
        animation_0: [0, 0, 0, 'a'],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_12: [],
        u32_16: 0,
        u32_20: 0,
        texture_24: [0, 0, 0, 't'],
        u32_28: 0,
    };

}
function add_hwvx_proto_model_8_8_12t0() {
    return {
        sec_id: "^te<",
        u16_16: 0,
        u8_19: 0,
        u8_35: 0,
        u8_36: 0,
        u8_37: 0,
        u8_39: 0,
        u8_40: 0,
        u8_41: 0,
        u8_43: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
        u8_48: 0,
        u8_49: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        u16_56: 0,
        u8_64: 0,
        u8_65: 0,
        u8_67: 0,
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
    };

}
function add_hwvx_proto_model_8_8_12t7() {
    return {
        sec_id: "<Plf",
        u32_16: 0,
        section_20: [],
    };

}
function add_hwvx_proto_model_8_8_12t8() {
    return {
        sec_id: ";t0o",
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
    };

}
function add_hwvx_proto_model_8_8_12t7_20() {
    return {
        sec_id: "fR>T",
        u16_0: 0,
        u16_2: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u8_48: 0,
        u8_49: 0,
        u8_51: 0,
        u8_52: 0,
        u8_53: 0,
        section_54: [],
        u8_55: 0,
    };

}
function add_hwvx_proto_model_8_8_12_modeldata() {
    return {
        id: gen_id(),
        sec_id: "0goX",
        f32_0: 0,
        f32_4: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function add_hwvx_proto_texture_anims() {
    return {
        id: gen_id(),
        sec_id: "eFdb",
        section_0: [],
    };

}
function add_hwvx_proto_model_anims_1() {
    return {
        id: gen_id(),
        sec_id: "K??i",
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
function add_hwvx_proto_model_anims_1_24() {
    return {
        sec_id: "]Wot",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
    };

}
function add_hwvx_proto_model_anims_1_28() {
    return {
        sec_id: "<j<O",
        u16_0: 0,
    };

}
function add_hwvx_proto_model_anims_1_32() {
    return {
        sec_id: "ir<<",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_model_anims_1_36() {
    return {
        id: gen_id(),
        sec_id: "6jDb",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function add_hwvx_proto_model_anims_1_44() {
    return {
        id: gen_id(),
        sec_id: "Ip4F",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_model_anims_2() {
    return {
        id: gen_id(),
        sec_id: "X]2v",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_16: [],
    };

}
function add_hwvx_proto_model_anims_2_16() {
    return {
        id: gen_id(),
        sec_id: "4PH5",
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
function add_hwvx_proto_texture() {
    return {
        id: gen_id(),
        sec_id: "of0M",
        u16_0: u16(o + 0),
        //check this
        u16_2: 0,
        u16_4: 0,
        u16_6: 0,
        unordered_hwvx_proto_texture_data_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_proto_share_end() {
    return {
        sec_id: "eCFb",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_share_end_8() {
    return {
        id: gen_id(),
        sec_id: "YJ<:",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_proto_world_color_section() {
    return {
        id: gen_id(),
        sec_id: "tBe]",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_world_color_section_4() {
    return {
        id: gen_id(),
        sec_id: "Igau",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_world_text_link() {
    return {
        id: gen_id(),
        sec_id: "om89",
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
function add_hwvx_proto_world_settings() {
    return {
        id: gen_id(),
        sec_id: "6DwQ",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
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
        unordered_hwvx_proto_font_200: 0,
        unordered_hwvx_proto_interface_204: 0,
        section_224: [],
        section_228: [],
        u32_232: 0,
        section_236: [],
        u32_240: 0,
        section_244: [],
        u32_248: 0,
        section_252: [],
        u32_256: 0,
        section_260: [],
    };

}
function add_hwvx_proto_world_settings_192() {
    return {
        sec_id: "DnMC",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_world_settings_196() {
    return {
        sec_id: "xmCF",
        u32_0: 0,
        u32_8: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: [],
        unordered_hwvx_proto_sound_controls_32: 0,
    };

}
function add_hwvx_proto_world_settings_196_28() {
    return {
        sec_id: "4hhT",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_world_settings_224() {
    return {
        sec_id: "KG?R",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_proto_world_settings_228() {
    return {
        sec_id: "D^@z",
    };

}
function add_hwvx_proto_world_settings_236() {
    return {
        id: gen_id(),
        sec_id: "P=hX",
        section_0: [],
    };

}
function add_hwvx_proto_world_settings_236_0() {
    return {
        sec_id: "0gYO",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_world_settings_236_0_28() {
    return {
        sec_id: "QHN[",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_world_settings_244() {
    return {
        id: gen_id(),
        sec_id: "iHBt",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_world_settings_260() {
    return {
        id: gen_id(),
        sec_id: "M<n9",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_world_settings_260_4() {
    return {
        sec_id: "lI0j",
        u8_2: 0,
        u8_3: 0,
        u8_6: 0,
        u8_7: 0,
        u8_10: 0,
        u8_11: 0,
        u8_14: 0,
        u8_15: 0,
        u8_18: 0,
        u8_19: 0,
        u8_22: 0,
        u8_23: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function add_hwvx_proto_world_small_section() {
    return {
        id: gen_id(),
        sec_id: "FhGs",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        section_12: [],
    };

}
function add_hwvx_proto_world_small_section_12() {
    return {
        sec_id: "@oVM",
        u32_0: 0,
    };

}
function add_hwvx_proto_world_model_related() {
    return {
        id: gen_id(),
        sec_id: "Javg",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        f32_8: 0,
        section_12: [],
        section_16: [],
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_world_idk() {
    return {
        id: gen_id(),
        sec_id: "ib0X",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: 0,
        section_48: [],
    };

}
function add_hwvx_proto_world_idk_48() {
    return {
        id: gen_id(),
        sec_id: "=Bq3",
        unordered_hwvx_proto_some_world_thing_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_world_idk_48_8() {
    return {
        id: gen_id(),
        sec_id: "NiNv",
        unordered_hwvx_proto_some_world_thing_0: 0,
    };

}
function add_hwvx_proto_some_world_thing() {
    return {
        id: gen_id(),
        sec_id: "k<bM",
        u32_0: 0,
        u32_4: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_44: 0,
        u32_52: 0,
        u32_56: 0,
        u32_60: 0,
        u32_64: 0,
        u32_68: 0,
        u32_72: 0,
        u32_76: 0,
        section_88: [],
        section_116: ["Pac-Kart"],
    };

}
function add_hwvx_proto_some_world_thing_88() {
    return {
        sec_id: "WbBj",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function add_hwvx_proto_geo_list() {
    return {
        id: gen_id(),
        sec_id: "^UG0",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_geo_list_4() {
    return {
        id: gen_id(),
        sec_id: "Gqys",
        u32_0: 0,
        section_4: [],
        section_8: [],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function add_hwvx_proto_geo_list_4_4() {
    return {
        sec_id: "BT?c",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_proto_geo_list_4_8() {
    return {
        id: gen_id(),
        sec_id: "BVkg",
        f32_0: 0,
    };

}
function add_hwvx_proto_collision_settings() {
    return {
        id: gen_id(),
        sec_id: "@B[D",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_proto_unknown_48: 0,
        unordered_hwvx_proto_unknown_thing_52: 0,
        unordered_hwvx_proto_unknown_60: 0,
        unordered_hwvx_proto_unknown_64: 0,
        u32_68: 0,
        section_72: [],
        u32_76: 0,
        section_80: [],
    };

}
function add_hwvx_proto_collision_settings_72() {
    return {
        id: gen_id(),
        sec_id: "TrH@",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_car() {
    return {
        id: gen_id(),
        sec_id: "i=g:",
        u32_16: 0,
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
        unordered_hwvx_proto_model_anims_1_72: 0,
        unordered_hwvx_proto_model_anims_2_76: 0,
        texture_80: [0, 0, 0, 't'],
        model_84: [0, 0, 0, 'm'],
        unordered_hwvx_proto_sound_section_92: 0,
        unordered_hwvx_proto_sound_section_96: 0,
        section_108: [],
        section_120: [],
        section_124: [],
        section_128: [],
        section_132: [],
        section_136: [],
        section_140: [],
        unordered_hwvx_proto_car_related_144: 0,
        unordered_hwvx_proto_car_related_148: 0,
        unordered_hwvx_proto_car_related_152: 0,
        unordered_hwvx_proto_car_related_156: 0,
        unordered_hwvx_proto_car_link_160: 0,
        section_164: [],
        section_172: [],
        u32_208: 0,
        section_212: [],
        u32_216: 0,
        section_220: [],
        u32_224: 0,
        section_228: [],
        u32_232: 0,
        section_236: [],
        u32_240: 0,
        section_244: [],
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
function add_hwvx_proto_car_108() {
    return {
        sec_id: "Q_rF",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_car_120() {
    return {
        sec_id: "hJ^O",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        unordered_hwvx_proto_model_link_16: 0,
        u32_36: 0,
    };

}
function add_hwvx_proto_car_124() {
    return {
        sec_id: "ZdHL",
        f32_0: 0,
        f32_4: 0,
        f32_12: 0,
    };

}
function add_hwvx_proto_car_128() {
    return {
        sec_id: "KQFs",
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
        unordered_hwvx_proto_model_anims_2_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        u32_128: 0,
        section_132: [],
        u32_136: 0,
        section_140: [],
    };

}
function add_hwvx_proto_car_128_132() {
    return {
        id: gen_id(),
        sec_id: "U[<W",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_car_128_132_4t1() {
    return {
        sec_id: "wxy:",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
    };

}
function add_hwvx_proto_car_128_132_4t2() {
    return {
        sec_id: "=CB9",
        f32_16: 0,
    };

}
function add_hwvx_proto_car_128_132_4t3() {
    return {
        sec_id: "ni0J",
        f32_4: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
    };

}
function add_hwvx_proto_car_128_132_4t4() {
    return {
        sec_id: "uVOT",
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_car_132() {
    return {
        sec_id: "DLjW",
        unordered_hwvx_proto_interface_16: 0,
        unordered_hwvx_proto_interface_24: 0,
        unordered_hwvx_proto_interface_28: 0,
        section_44: [],
        u32_52: 0,
    };

}
function add_hwvx_proto_car_132_44() {
    return {
        sec_id: "0fgN",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_car_136() {
    return {
        sec_id: "pT66",
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
function add_hwvx_proto_car_140() {
    return {
        sec_id: "<Xgk",
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
        u32_76: 0,
        section_80: [],
        f32_84: 0,
    };

}
function add_hwvx_proto_car_140_56() {
    return {
        id: gen_id(),
        sec_id: "GkK1",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_car_140_64() {
    return {
        id: gen_id(),
        sec_id: "sq>I",
        unordered_hwvx_proto_text_0: 0,
    };

}
function add_hwvx_proto_car_164() {
    return {
        sec_id: "cOSy",
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_car_164_8() {
    return {
        sec_id: "SBS0",
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_car_172() {
    return {
        sec_id: "O5O:",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_car_212() {
    return {
        id: gen_id(),
        sec_id: "w?mc",
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
        u8_60: 0,
        u8_62: 0,
        u8_63: 0,
        u8_64: 0,
        u8_66: 0,
    };

}
function add_hwvx_proto_car_220() {
    return {
        id: gen_id(),
        sec_id: "Xtfw",
        f32_0: 0,
        unordered_hwvx_proto_sound_section_4: 0,
    };

}
function add_hwvx_proto_car_228() {
    return {
        id: gen_id(),
        sec_id: "P0mb",
        unordered_hwvx_proto_model_anims_2_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_car_252() {
    return {
        sec_id: "6l:Y",
        section_4: [],
    };

}
function add_hwvx_proto_car_252_4() {
    return {
        sec_id: "L6vT",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_car_252_4_4() {
    return {
        sec_id: "emW9",
        u32_0: 0,
    };

}
function add_hwvx_proto_car_260() {
    return {
        sec_id: "iIBS",
        u32_52: 0,
        section_56: [],
    };

}
function add_hwvx_proto_car_260_56() {
    return {
        sec_id: "K6P^",
    };

}
function add_hwvx_proto_car_268() {
    return {
        sec_id: "=@aQ",
    };

}
function add_hwvx_proto_car_related() {
    return {
        id: gen_id(),
        sec_id: "jg>I",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        u8_32: 0,
        u8_33: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: 0,
        section_48: [],
    };

}
function add_hwvx_proto_car_related_48() {
    return {
        id: gen_id(),
        sec_id: "HYA?",
        section_0: [],
    };

}
function add_hwvx_proto_car_related_48_0() {
    return {
        sec_id: "VM^0",
        u8_0: 0,
        u8_2: 0,
        u32_4: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_52: 0,
        u32_64: 0,
        u32_68: 0,
        u32_116: u32(o + 116),
        //check this
    };

}
function add_hwvx_proto_car_link() {
    return {
        id: gen_id(),
        sec_id: "ZIP^",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
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
        section_48: [],
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
        section_68: [],
    };

}
function add_hwvx_proto_car_link_48() {
    return {
        sec_id: "2Ajg",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_proto_unknown_48: 0,
        unordered_hwvx_proto_sound_section_60: 0,
        unordered_hwvx_proto_unknown_64: 0,
        u32_68: 0,
        section_72: [],
        u32_76: 0,
        section_80: [],
    };

}
function add_hwvx_proto_car_link_48_72() {
    return {
        id: gen_id(),
        sec_id: ">a1]",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_car_link_56() {
    return {
        id: gen_id(),
        sec_id: ";10P",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_car_link_64() {
    return {
        sec_id: "hezc",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_car_link_68() {
    return {
        sec_id: "hxcM",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_hwvx_proto_mysterious() {
    return {
        id: gen_id(),
        sec_id: "CP>2",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        f32_20: 0,
        section_24: [],
    };

}
function add_hwvx_proto_mysterious_24t5() {
    return {
        sec_id: "jpuw",
        model_8: [0, 0, 0, 'm'],
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        section_44: [],
    };

}
function add_hwvx_proto_mysterious_24t5_24() {
    return {
        id: gen_id(),
        sec_id: "wlid",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_mysterious_24t5_32() {
    return {
        id: gen_id(),
        sec_id: "uUPO",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_mysterious_24t5_44() {
    return {
        sec_id: "o7;i",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_mysterious_24t6() {
    return {
        sec_id: "R<H4",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        texture_8: [0, 0, 0, 't'],
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        section_36: [],
    };

}
function add_hwvx_proto_mysterious_24t6_16() {
    return {
        id: gen_id(),
        sec_id: "8cdg",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_mysterious_24t6_24() {
    return {
        id: gen_id(),
        sec_id: "oV==",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_mysterious_24t6_32() {
    return {
        id: gen_id(),
        sec_id: "aQ]J",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_mysterious_24t6_36() {
    return {
        sec_id: "XqiO",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_mysterious_24t7() {
    return {
        sec_id: "@ZZb",
        u32_32: 0,
        u32_36: 0,
        f32_48: 0,
        f32_52: 0,
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
function add_hwvx_proto_mysterious_24t7_72() {
    return {
        id: gen_id(),
        sec_id: "QK;_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_mysterious_24t7_80() {
    return {
        sec_id: "7L6J",
    };

}
function add_hwvx_proto_mysterious_24t7_88() {
    return {
        sec_id: "_8[1",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_proto_mysterious_24t9() {
    return {
        sec_id: "r8AQ",
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
    };

}
function add_hwvx_proto_mysterious_24t9_28() {
    return {
        sec_id: "juG4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_mysterious_24t9_32() {
    return {
        sec_id: "FGQj",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_strange() {
    return {
        id: gen_id(),
        sec_id: "fz_?",
        u32_0: 0,
        u32_8: 0,
        u32_12: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: [],
        unordered_hwvx_proto_sound_controls_32: 0,
    };

}
function add_hwvx_proto_strange_28() {
    return {
        id: gen_id(),
        sec_id: "Db4x",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_model_link() {
    return {
        id: gen_id(),
        sec_id: "Metw",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
        unordered_hwvx_proto_model_anims_1_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
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
function add_hwvx_proto_model_link_4() {
    return {
        sec_id: "t5Jp",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_hwvx_proto_model_link_12() {
    return {
        sec_id: "u66W",
        model_0: [0, 0, 0, 'm'],
        u32_4: 0,
    };

}
function add_hwvx_proto_model_link_32() {
    return {
        sec_id: "Imly",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_model_link_36() {
    return {
        sec_id: "4_C=",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_model_link_52() {
    return {
        sec_id: "iS5S",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_proto_model_link_56() {
    return {
        sec_id: "z4bY",
        u32_0: 0,
        section_4: [],
        unordered_hwvx_proto_model_anims_2_8: 0,
    };

}
function add_hwvx_proto_model_link_56_4() {
    return {
        id: gen_id(),
        sec_id: "s;ve",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        model_8: [0, 0, 0, 'm'],
        section_12: [],
        section_16: [],
    };

}
function add_hwvx_proto_model_link_56_4_12() {
    return {
        sec_id: "Q0z;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_model_link_56_4_16() {
    return {
        sec_id: "m8[T",
    };

}
function add_hwvx_proto_text() {
    return {
        id: gen_id(),
        sec_id: "I[]x",
        section_0: ["Pac-Kart"],
    };

}
function add_hwvx_proto_font() {
    return {
        id: gen_id(),
        sec_id: "494j",
        texture_0: [0, 0, 0, 't'],
        unordered_hwvx_proto_sound_section_4: 0,
        u32_8: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
        f32_40: 0,
    };

}
function add_hwvx_proto_font_28() {
    return {
        sec_id: "7]7W",
        f32_0: 0,
    };

}
function add_hwvx_proto_font_36() {
    return {
        id: gen_id(),
        sec_id: "tHz_",
        u32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_interface() {
    return {
        id: gen_id(),
        sec_id: "qVyB",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
        section_28: [],
        unordered_hwvx_proto_sound_controls_32: 0,
        unordered_hwvx_proto_sound_controls_36: 0,
        unordered_hwvx_proto_sound_controls_40: 0,
        unordered_hwvx_proto_sound_controls_44: 0,
        section_48: [],
    };

}
function add_hwvx_proto_interface_16() {
    return {
        id: gen_id(),
        sec_id: "1d6S",
        u8_0: 0,
        u8_1: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
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
function add_hwvx_proto_interface_16_20t0() {
    return {
        sec_id: "8BNK",
        u8_0: 0,
        u8_1: 0,
        section_4: [],
        section_16: [],
    };

}
function add_hwvx_proto_interface_16_20t0_16() {
    return {
        sec_id: "kU0D",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_proto_interface_16_20t0_16_4() {
    return {
        id: gen_id(),
        sec_id: "UuC9",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_proto_interface_16_20t1() {
    return {
        sec_id: "Mh;=",
        unordered_hwvx_proto_text_0: 0,
        unordered_hwvx_proto_font_4: 0,
        section_8: [],
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_proto_interface_16_20t1_8() {
    return {
        sec_id: "SGJ[",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_10: 0,
    };

}
function add_hwvx_proto_interface_16_20t1_8_4() {
    return {
        id: gen_id(),
        sec_id: "q_on",
        unordered_hwvx_proto_text_0: 0,
    };

}
function add_hwvx_proto_interface_16_20t2() {
    return {
        sec_id: "IYWn",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_20t2_4() {
    return {
        id: gen_id(),
        sec_id: ">@=_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: ["Pac-Kart"],
        unordered_hwvx_proto_text_16: 0,
        unordered_hwvx_proto_interface_text_related_20: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_interface_16_20t2_4_28() {
    return {
        id: gen_id(),
        sec_id: "YSsF",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_20t2_4_28_4() {
    return {
        sec_id: "Qzyz",
        u8_1: 0,
        u8_2: 0,
    };

}
function add_hwvx_proto_interface_16_20t4() {
    return {
        sec_id: "FM?k",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_20t4_4() {
    return {
        id: gen_id(),
        sec_id: "?CuH",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
    };

}
function add_hwvx_proto_interface_16_20t10() {
    return {
        sec_id: "0ah;",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        unordered_hwvx_proto_font_16: 0,
    };

}
function add_hwvx_proto_interface_16_20t11() {
    return {
        sec_id: ">QXj",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_interface_16_60() {
    return {
        sec_id: "]Sms",
        unordered_hwvx_proto_interface_0: 0,
    };

}
function add_hwvx_proto_interface_16_68() {
    return {
        sec_id: "J_pJ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
    };

}
function add_hwvx_proto_interface_16_68_12() {
    return {
        id: gen_id(),
        sec_id: "lXU^",
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
function add_hwvx_proto_interface_16_68_20() {
    return {
        sec_id: "bX^r",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_interface_16_68_20_8() {
    return {
        sec_id: "H_sG",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        section_8: [],
        section_24: [],
        u32_28: 0,
        section_32: [],
        u32_36: 0,
    };

}
function add_hwvx_proto_interface_16_68_20_8_8() {
    return {
        sec_id: "[cs^",
        section_0: [],
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_68_20_8_8_0() {
    return {
        sec_id: "r__j",
        u32_0: 0,
    };

}
function add_hwvx_proto_interface_16_68_20_8_8_4() {
    return {
        sec_id: "7xT1",
        u32_0: 0,
    };

}
function add_hwvx_proto_interface_16_68_20_8_24() {
    return {
        sec_id: "R=<n",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function add_hwvx_proto_interface_16_68_20_8_32() {
    return {
        sec_id: "l3PK",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function add_hwvx_proto_interface_16_72() {
    return {
        sec_id: "U=L=",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_interface_16_72_8() {
    return {
        id: gen_id(),
        sec_id: "AlcH",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_interface_16_72_8_8() {
    return {
        sec_id: "3wEt",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_72_8_8_4() {
    return {
        sec_id: "P]zG",
        u32_0: 0,
    };

}
function add_hwvx_proto_interface_16_96() {
    return {
        sec_id: "Rkdk",
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
function add_hwvx_proto_interface_16_96_4() {
    return {
        id: gen_id(),
        sec_id: "aTUt",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_interface_16_96_28() {
    return {
        id: gen_id(),
        sec_id: "jdSj",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_interface_16_96_36() {
    return {
        id: gen_id(),
        sec_id: "Z<<y",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        f32_36: 0,
    };

}
function add_hwvx_proto_interface_16_104() {
    return {
        id: gen_id(),
        sec_id: "M?r;",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_interface_16_104_8() {
    return {
        sec_id: "sS_M",
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
        u32_52: 0,
        section_56: [],
    };

}
function add_hwvx_proto_interface_16_104_8_4() {
    return {
        id: gen_id(),
        sec_id: "i4Z@",
        u32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_interface_16_104_8_12() {
    return {
        id: gen_id(),
        sec_id: "8<A2",
        f32_0: 0,
        f32_4: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_interface_16_104_8_20() {
    return {
        id: gen_id(),
        sec_id: "RpkE",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_interface_16_104_8_28() {
    return {
        id: gen_id(),
        sec_id: "vfDd",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_interface_16_104_8_36() {
    return {
        id: gen_id(),
        sec_id: "HIn]",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        f32_36: 0,
    };

}
function add_hwvx_proto_interface_16_104_8_44() {
    return {
        id: gen_id(),
        sec_id: "LJw3",
        f32_0: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_interface_16_104_8_56() {
    return {
        sec_id: "hTcs",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_104_8_56_4() {
    return {
        sec_id: "Zg[j",
    };

}
function add_hwvx_proto_interface_16_68_20_8_0t11() {
    return {
        sec_id: "gwE5",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_68_20_8_0t11_4() {
    return {
        id: gen_id(),
        sec_id: "Qvak",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_68_20_8_0t11_4_4() {
    return {
        id: gen_id(),
        sec_id: "5uGd",
        section_0: [],
    };

}
function add_hwvx_proto_interface_16_68_20_8_0t11_4_4_0() {
    return {
        sec_id: "HE?>",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4() {
    return {
        sec_id: "vSGD",
        u32_0: 0,
    };

}
function add_hwvx_proto_interface_24() {
    return {
        id: gen_id(),
        sec_id: "K=ks",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_interface_24_8() {
    return {
        sec_id: "TCBf",
        section_0: [],
        u8_4: 0,
        u8_5: 0,
        section_8: [],
    };

}
function add_hwvx_proto_interface_24_8_0t11() {
    return {
        sec_id: "EQvy",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_24_8_0t11_4() {
    return {
        id: gen_id(),
        sec_id: "WMML",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_24_8_0t11_4_4() {
    return {
        id: gen_id(),
        sec_id: "P<e^",
        section_0: [],
    };

}
function add_hwvx_proto_interface_24_8_0t11_4_4_0() {
    return {
        sec_id: "8lvN",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_24_8_0t11_4_4_0_4() {
    return {
        sec_id: "QW[=",
        u32_0: 0,
    };

}
function add_hwvx_proto_interface_24_8_8t15() {
    return {
        sec_id: "Xyg1",
        section_0: [],
        section_4: [],
    };

}
function add_hwvx_proto_interface_24_8_8t15_0() {
    return {
        sec_id: "q6pP",
        u8_2: 0,
    };

}
function add_hwvx_proto_interface_24_8_8t15_4() {
    return {
        sec_id: "81GP",
        u32_0: 0,
    };

}
function add_hwvx_proto_interface_24_8_8t17() {
    return {
        sec_id: "[@P4",
        u8_0: 0,
        u8_2: 0,
    };

}
function add_hwvx_proto_interface_28() {
    return {
        sec_id: "ZriU",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_28_4() {
    return {
        id: gen_id(),
        sec_id: "vX8@",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_hwvx_proto_interface_28_4_16() {
    return {
        sec_id: "PfIg",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_interface_28_4_16_4() {
    return {
        sec_id: "a=N3",
        u8_0: 0,
        u8_2: 0,
    };

}
function add_hwvx_proto_interface_48() {
    return {
        sec_id: "xJ=Y",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_proto_interface_text_related() {
    return {
        id: gen_id(),
        sec_id: "3OW[",
        unordered_hwvx_proto_text_0: 0,
        unordered_hwvx_proto_font_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
        u32_44: 0,
        unordered_hwvx_proto_interface_text_related_48_48: 0,
        section_52: [],
    };

}
function add_hwvx_proto_interface_text_related_12() {
    return {
        sec_id: "<J>V",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_interface_text_related_20() {
    return {
        id: gen_id(),
        sec_id: "T8ye",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_hwvx_proto_interface_text_related_20_4() {
    return {
        id: gen_id(),
        sec_id: "AYTy",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_proto_interface_text_related_52() {
    return {
        sec_id: "O];A",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown() {
    return {
        id: gen_id(),
        sec_id: "9me0",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_unknown_4() {
    return {
        id: gen_id(),
        sec_id: "HP[]",
        u32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_hwvx_proto_unknown_4_8t1() {
    return {
        sec_id: "oH:I",
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
function add_hwvx_proto_unknown_4_8t1_40t1() {
    return {
        sec_id: "KKwn",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_unknown_4_8t1_40t2() {
    return {
        sec_id: "fJ[T",
        f32_0: 0,
        f32_4: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: [],
    };

}
function add_hwvx_proto_unknown_4_8t1_40t2_12t0() {
    return {
        sec_id: "qOTK",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_4_8t1_40t2_12t1() {
    return {
        sec_id: "1A8k",
        f32_0: 0,
        u32_16: 0,
    };

}
function add_hwvx_proto_unknown_4_8t1_40t2_12t2() {
    return {
        sec_id: "8P[M",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
    };

}
function add_hwvx_proto_unknown_4_8t1_44() {
    return {
        sec_id: "Cu>6",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_unknown_4_8t5() {
    return {
        sec_id: "g>hN",
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_unknown_4_8t5_28() {
    return {
        sec_id: "]b4a",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
    };

}
function add_hwvx_proto_unknown_4_4t4() {
    return {
        sec_id: "VD@9",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_unknown_4_4t4_28() {
    return {
        sec_id: "nTMN",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_unknown_4_4t8() {
    return {
        sec_id: "d7nY",
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_proto_unknown_4_4t8_16() {
    return {
        id: gen_id(),
        sec_id: "gS;?",
        f32_0: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_4_4t8_24() {
    return {
        sec_id: "e2Rn",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_4_4t29() {
    return {
        sec_id: "NE9?",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_hwvx_proto_unknown_4_4t29_12() {
    return {
        id: gen_id(),
        sec_id: "Pd2k",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        model_28: [0, 0, 0, 'm'],
        unordered_hwvx_proto_unknown_link_section_32: 0,
    };

}
function add_hwvx_proto_unknown_idk_sec() {
    return {
        id: gen_id(),
        sec_id: "^GRl",
        u32_0: 0,
        u32_4: 0,
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
function add_hwvx_proto_unknown_idk_sec_28() {
    return {
        sec_id: "3]3r",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        unordered_hwvx_proto_unknown_24: 0,
    };

}
function add_hwvx_proto_unknown_idk_sec_32() {
    return {
        sec_id: "Q4<C",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_hwvx_proto_unknown_idk_sec_32_8() {
    return {
        id: gen_id(),
        sec_id: "6yHH",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_idk_sec_36() {
    return {
        sec_id: "7vmh",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_unknown_idk_sec_36_4() {
    return {
        sec_id: "8Wto",
        f32_0: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_unknown_idk_sec_40() {
    return {
        sec_id: "Zd;F",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_unknown_idk_sec_40_4() {
    return {
        id: gen_id(),
        sec_id: "3s]Q",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_unknown_idk_sec_48() {
    return {
        sec_id: "pPZL",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_unknown_link_section() {
    return {
        id: gen_id(),
        sec_id: "H8fI",
        u32_0: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_unknown_link_section_28() {
    return {
        id: gen_id(),
        sec_id: "AGOy",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_grand_section() {
    return {
        id: gen_id(),
        sec_id: "caGR",
        model_0: [0, 0, 0, 'm'],
        u32_4: 0,
        f32_8: 0,
        section_16: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_hwvx_proto_unknown_thing() {
    return {
        id: gen_id(),
        sec_id: "tpqu",
        u32_0: 0,
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
function add_hwvx_proto_unknown_thing_4t0() {
    return {
        sec_id: "vK>c",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        unordered_hwvx_proto_sound_controls_24: 0,
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
    };

}
function add_hwvx_proto_unknown_thing_4t0_36() {
    return {
        id: gen_id(),
        sec_id: "2SLk",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_hwvx_proto_unknown_thing_4t0_44() {
    return {
        id: gen_id(),
        sec_id: "h;uV",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_unknown_thing_4t1() {
    return {
        sec_id: "]7y^",
        u32_0: 0,
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
function add_hwvx_proto_unknown_thing_4t1_36() {
    return {
        id: gen_id(),
        sec_id: "X594",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_proto_unknown_thing_4t1_44() {
    return {
        id: gen_id(),
        sec_id: "I>Pm",
        f32_0: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_thing_4t2() {
    return {
        sec_id: "jbi0",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_hwvx_proto_unknown_thing_4t2_16() {
    return {
        id: gen_id(),
        sec_id: "n?lz",
        f32_0: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_thing_4t2_24() {
    return {
        id: gen_id(),
        sec_id: "8AvY",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_thing_24() {
    return {
        id: gen_id(),
        sec_id: "<dYK",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_unknown_thing_32() {
    return {
        sec_id: "lLrJ",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function add_hwvx_proto_asdf() {
    return {
        id: gen_id(),
        sec_id: "Q7EE",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
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
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        f32_72: 0,
        f32_76: 0,
        u32_84: 0,
        texture_92: [0, 0, 0, 't'],
        unordered_hwvx_proto_unknown_112: 0,
        unordered_hwvx_proto_unknown_116: 0,
        unordered_hwvx_proto_unknown_120: 0,
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
function add_hwvx_proto_asdf_12t1() {
    return {
        sec_id: "x<;N",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_hwvx_proto_asdf_12t2() {
    return {
        sec_id: ":]L<",
        f32_0: 0,
    };

}
function add_hwvx_proto_asdf_144() {
    return {
        id: gen_id(),
        sec_id: "Rg6^",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function add_hwvx_proto_asdf_152() {
    return {
        id: gen_id(),
        sec_id: ";ZV3",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_asdf_164() {
    return {
        sec_id: "n^l7",
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
function add_hwvx_proto_asdf_168() {
    return {
        sec_id: "qO<v",
        u32_0: 0,
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
function add_hwvx_proto_asdf_172() {
    return {
        sec_id: "UlWs",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_hwvx_proto_item() {
    return {
        id: gen_id(),
        sec_id: "1<NQ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        unordered_hwvx_proto_text_32: 0,
        unordered_hwvx_proto_unknown_36: 0,
        unordered_hwvx_proto_unknown_44: 0,
        section_48: [],
        unordered_hwvx_proto_model_anims_2_52: 0,
        u32_56: 0,
        section_60: [],
    };

}
function add_hwvx_proto_item_48() {
    return {
        sec_id: "[Tf[",
        section_0: [],
        unordered_hwvx_proto_text_16: 0,
        texture_24: [0, 0, 0, 't'],
        u8_26: 0,
        u8_27: 0,
        unordered_hwvx_proto_model_anims_2_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        u32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
    };

}
function add_hwvx_proto_item_48_0() {
    return {
        sec_id: "HU5e",
        u32_8: 0,
        section_12: [],
        unordered_hwvx_proto_model_anims_1_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: 0,
        section_48: [],
        section_52: [],
    };

}
function add_hwvx_proto_item_48_0_12() {
    return {
        id: gen_id(),
        sec_id: "rCXf",
        model_0: [0, 0, 0, 'm'],
        u32_4: 0,
    };

}
function add_hwvx_proto_item_48_0_32() {
    return {
        sec_id: "]sCt",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_item_48_0_36() {
    return {
        sec_id: "Rn4S",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_item_48_0_40() {
    return {
        sec_id: "<OmJ",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_item_48_0_52() {
    return {
        sec_id: "4diD",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_hwvx_proto_link() {
    return {
        id: gen_id(),
        sec_id: "v8dg",
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
        section_12: ["Pac-Kart"],
        texture_16: [0, 0, 0, 't'],
        texture_20: [0, 0, 0, 't'],
        f32_24: 0,
        f32_28: 0,
        u32_36: 0,
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        section_52: [],
        u32_56: 0,
        section_60: [],
    };

}
function add_hwvx_proto_link_44() {
    return {
        id: gen_id(),
        sec_id: ";1k?",
        u32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_hwvx_proto_link_44_8() {
    return {
        sec_id: "=Sj3",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_proto_link_52() {
    return {
        id: gen_id(),
        sec_id: "VveN",
        section_0: [],
    };

}
function add_hwvx_proto_link_52_0() {
    return {
        sec_id: "fPWs",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_link_52_0_4() {
    return {
        id: gen_id(),
        sec_id: "@QKQ",
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
function add_hwvx_proto_link_52_0_4_4() {
    return {
        id: gen_id(),
        sec_id: "5JG5",
        u32_0: 0,
        section_4: [],
    };

}
function add_hwvx_proto_link_52_0_4_4_4() {
    return {
        sec_id: "dqlY",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_proto_link_52_0_4_8() {
    return {
        sec_id: "LgjN",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_hwvx_proto_link_52_0_4_20() {
    return {
        sec_id: "0ic:",
        u32_8: 0,
    };

}
function add_hwvx_proto_link_52_0_4_28() {
    return {
        sec_id: "tXYf",
    };

}
function add_hwvx_proto_link_60() {
    return {
        id: gen_id(),
        sec_id: "29=@",
        section_0: [],
    };

}
function add_hwvx_proto_link_60_0() {
    return {
        sec_id: "VLW2",
        section_0: [],
    };

}
function add_hwvx_proto_link_60_0_0() {
    return {
        sec_id: "f3Y0",
        section_0: [],
        section_4: [],
        section_8: [],
    };

}
function add_hwvx_proto_link_60_0_0_0() {
    return {
        sec_id: ";cM0",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_hwvx_proto_link_60_0_0_4() {
    return {
        sec_id: "hU]>",
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
function add_hwvx_proto_link_60_0_0_8() {
    return {
        sec_id: "D_EH",
        u8_0: 0,
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
function add_hwvx_proto_sound_controls() {
    return {
        id: gen_id(),
        sec_id: "aO>y",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_hwvx_proto_sound_controls_12() {
    return {
        id: gen_id(),
        sec_id: "IT5f",
        f32_0: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_hwvx_proto_sound_controls_12_12() {
    return {
        id: gen_id(),
        sec_id: ";2Q?",
        unordered_hwvx_proto_sound_section_0: 0,
    };

}
function add_hwvx_proto_sound_section() {
    return {
        id: gen_id(),
        sec_id: "wg7F",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
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
function add_hwvx_proto_sound_section_24() {
    return {
        sec_id: "b[E5",
        u32_0: 0,
        f32_4: 0,
    };

}
function add_hwvx_proto_sound_section_32() {
    return {
        sec_id: "ZBz8",
        f32_0: 0,
    };

}
function add_hwvx_proto_texture_anims_0() {
    return {
        id: gen_id(),
        sec_id: "D1YG",
        u32_4: 0,
        section_8: [],
        u32_12: 0,
        section_16: [],
        section_20: [],
    };

}
function add_hwvx_proto_texture_anims_0_20() {
    return {
        sec_id: "cMSE",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_hwvx_proto_texture_anims_0_20_4() {
    return {
        id: gen_id(),
        sec_id: "<4l9",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_hwvx_proto_texture_anims_0_8() {
    return {
        id: gen_id(),
        sec_id: "^^gk",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function add_hwvx_proto_texture_anims_0_16() {
    return {
        id: gen_id(),
        sec_id: "a]cr",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_12: 0,
    };

}
/* end add list */
/////////////////////
/* start info list */
function info_hwvx_proto_file_header() {
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
function info_hwvx_proto_directory() {
    return {
        sec_id: "]7Zf",
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

function info_hwvx_proto_datapack() {
    return {
        sec_id: "E@3Z",
        section_0: ["change this"],
        section_4: ["change this"],
        u32_8: {
            a: null
        },
        u32_12: {
            a: null
        },
        u32_16: {
            a: null
        },
        u32_20: {
            a: null
        },
        section_24: ["change this"],
        u32_28: {
            a: null
        },
        u32_32: {
            a: null
        },
        u32_40: {
            a: null
        },
        section_44: ["change this"],
        u32_48: {
            a: null
        },
        u32_52: {
            a: null
        },
        u32_56: {
            a: null
        },
        section_60: ["change this"],
        u32_64: {
            a: null
        },
        section_68: ["change this"],
        section_72: ["change this"],
        section_76: ["change this"],
        section_80: ["Pac-Kart"],
        u32_92: 0,
        section_100: ["Pac-Kart"],
        u32_112: 0,
        section_audio: ["change this"],
    };

}

function info_hwvx_proto_geo_datapack() {
    return {
        sec_id: "PcI:",
        u32_0: 0,
        u32_4: {
            a: null
        },
        u32_8: {
            a: null
        },
        u32_28: {
            a: null
        },
        u32_36: {
            a: null
        },
        u32_40: {
            a: null
        },
        section_44: ["Pac-Kart"],
        section_56: ["Pac-Kart"],
    };

}

function info_hwvx_proto_sound_offset_list() {
    return {
        sec_id: "Fgpx",
        section_0: ["4IJg"],
    };

}
function info_hwvx_proto_audio_list() {
    return {
        sec_id: "4IJg",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u16_16: 0,
        u16_18: 0,
    };

}
function info_hwvx_proto_basic() {
    return {
        sec_id: "uZNx",
        u32_0: 0,
        section_4: ["j3qp"],
    };

}
function info_hwvx_proto_basic_4() {
    return {
        sec_id: "j3qp",
        section_0: ["change this"],
        u32_4: 0,
    };

}
function info_hwvx_proto_geo_basic() {
    return {
        sec_id: "rwx_",
        section_0: ["nMcM"],
        unordered_hwvx_proto_geo_list_4: 0,
    };

}
function info_hwvx_proto_geo_basic_0() {
    return {
        sec_id: "nMcM",
        u32_0: 0,
        model_8: "model_patch",
    };

}
function info_hwvx_proto_share() {
    return {
        sec_id: "FNM8",
        model_0: "model_patch",
    };

}
function info_hwvx_proto_world() {
    return {
        sec_id: "rjJj",
        unordered_hwvx_proto_world_4_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["=>48"],
        u32_16: {
            a: null
        },
        unordered_hwvx_proto_world_20_20: 0,
        u32_32: {
            a: null
        },
        unordered_hwvx_proto_world_36_36: 0,
        u32_40: {
            a: null
        },
        unordered_hwvx_proto_world_44_44: 0,
        u32_48: {
            a: null
        },
        unordered_hwvx_proto_world_52_52: 0,
        u32_72: {
            a: null
        },
        unordered_hwvx_proto_world_76_76: 0,
        u32_80: {
            a: null
        },
        unordered_hwvx_proto_world_76_84: 0,
        u32_88: {
            a: null
        },
        unordered_hwvx_proto_world_92_92: 0,
        u32_96: {
            a: null
        },
        unordered_hwvx_proto_world_100_100: 0,
        u32_104: {
            a: null
        },
        unordered_hwvx_proto_world_108_108: 0,
        u32_112: {
            a: null
        },
        unordered_hwvx_proto_world_116_116: 0,
        unordered_hwvx_proto_world_120_120: 0,
        section_124: ["Pac-Kart"],
        section_132: ["Pac-Kart"],
        section_140: ["Pac-Kart"],
        unordered_hwvx_proto_world_settings_156: 0,
    };

}
function info_hwvx_proto_world_12() {
    return {
        sec_id: "=>48",
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
        unordered_hwvx_proto_world_idk_64: 0,
        unordered_hwvx_proto_world_idk_68: 0,
        unordered_hwvx_proto_world_idk_72: 0,
        unordered_hwvx_proto_world_idk_76: 0,
        u32_80: 0,
        u32_92: 0,
    };

}
function info_hwvx_proto_world_20() {
    return {
        sec_id: "eBnd",
        u32_0: 0,
        unordered_hwvx_proto_model_anims_1_4: 0,
        f32_8: 0,
        section_12: ["taFF"],
    };

}
function info_hwvx_proto_world_20_12() {
    return {
        sec_id: "taFF",
        model_0: "model_patch",
        u8_5: 0,
        u8_7: 0,
        f32_8: 0,
        unordered_hwvx_proto_car_link_16: 0,
    };

}
function info_hwvx_proto_world_36() {
    return {
        sec_id: ">je2",
        u32_0: 0,
        u32_12: 0,
        u32_24: {
            a: null
        },
        unordered_hwvx_proto_world_36_28_28: 0,
        u32_32: {
            a: null
        },
        unordered_hwvx_proto_world_36_36_36: 0,
        unordered_hwvx_proto_world_36_48_48: 0,
    };

}
function info_hwvx_proto_world_36_36() {
    return {
        sec_id: "vH^o",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_proto_world_36_48() {
    return {
        sec_id: "U<>y",
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
function info_hwvx_proto_world_36_48_16() {
    return {
        sec_id: "00LC",
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
        unordered_hwvx_proto_strange_36: 0,
        f32_44: 0,
        u32_52: 0,
        u32_56: 0,
    };

}
function info_hwvx_proto_world_36_28() {
    return {
        sec_id: ">8l?",
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
function info_hwvx_proto_world_36_48_8() {
    return {
        sec_id: "HY@p",
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
        f32_40: 0,
        u32_48: 0,
        u32_52: 0,
    };

}
function info_hwvx_proto_world_36_48_24() {
    return {
        sec_id: "S;d?",
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
function info_hwvx_proto_world_44() {
    return {
        sec_id: "zBaW",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        unordered_hwvx_proto_sound_section_20: 0,
        u32_28: 0,
        u32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_48: 0,
    };

}
function info_hwvx_proto_world_116() {
    return {
        sec_id: "7K=p",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        u32_20: 0,
    };

}
function info_hwvx_proto_world_76() {
    return {
        sec_id: "ZEh]",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_world_52() {
    return {
        sec_id: "TQ0O",
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
function info_hwvx_proto_world_52_88t1() {
    return {
        sec_id: "ESX3",
        u32_0: 0,
    };

}
function info_hwvx_proto_world_92() {
    return {
        sec_id: "=Xx@",
        unordered_hwvx_proto_world_text_link_4: 0,
    };

}
function info_hwvx_proto_world_100() {
    return {
        sec_id: "1ctA",
        u32_0: 0,
        unordered_hwvx_proto_world_color_section_4: 0,
        u32_8: 0,
    };

}
function info_hwvx_proto_world_108() {
    return {
        sec_id: "6uH?",
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
        section_40: ["oqWI"],
        section_44: {
            s: 0
        },
    };

}
function info_hwvx_proto_world_108_40() {
    return {
        sec_id: "oqWI",
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
function info_hwvx_proto_world_108_44t1() {
    return {
        sec_id: "M=7v",
        f32_0: 0,
        f32_4: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
    };

}
function info_hwvx_proto_world_108_44t2() {
    return {
        sec_id: "IENC",
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
function info_hwvx_proto_world_108_44t3() {
    return {
        sec_id: "E=O_",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_world_108_44t6() {
    return {
        sec_id: "VGH4",
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
        u32_24: 0,
    };

}
function info_hwvx_proto_world_4() {
    return {
        sec_id: "rWN=",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        section_16: ["Nxlg"],
        section_20: ["rjvv"],
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
function info_hwvx_proto_world_4_20() {
    return {
        sec_id: "rjvv",
        u32_0: 0,
    };

}
function info_hwvx_proto_world_4_16() {
    return {
        sec_id: "Nxlg",
        u32_0: {
            a: null
        },
        section_4: ["09ci"],
        u32_8: {
            a: null
        },
        section_12: ["09ci"],
        u32_16: {
            a: null
        },
        section_20: ["09ci"],
        u32_24: {
            a: null
        },
        section_28: ["09ci"],
        u32_48: {
            a: null
        },
        section_52: ["09ci"],
    };

}
function info_hwvx_proto_world_4_16_4() {
    return {
        sec_id: "09ci",
        unordered_hwvx_proto_world_108_0: 0,
    };

}
function info_hwvx_proto_world_120() {
    return {
        sec_id: "?R3u",
        unordered_hwvx_proto_world_120_0_0: 0,
        u32_4: {
            a: null
        },
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
    };

}
function info_hwvx_proto_world_120_0() {
    return {
        sec_id: "xQij",
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
        u32_68: 0,
        u32_72: 0,
        f32_76: 0,
        u32_80: 0,
        u8_85: 0,
        u8_86: 0,
        u8_87: 0,
        u32_96: 0,
        u32_100: 0,
    };

}
function info_hwvx_proto_collision() {
    return {
        sec_id: "56Am",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        section_32: ["G_SO"],
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
        unordered_hwvx_proto_collision_64_64: 0,
        u32_68: {
            a: null
        },
        u32_72: {
            a: null
        },
        unordered_hwvx_proto_collision_76_76: 0,
        u32_80: {
            a: null
        },
        unordered_hwvx_proto_collision_84_84: 0,
        u32_88: 0,
        unordered_hwvx_proto_collision_link_92: 0,
    };

}
function info_hwvx_proto_collision_32() {
    return {
        sec_id: "G_SO",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        unordered_hwvx_proto_collision_32_48_48: 0,
        unordered_hwvx_proto_collision_32_56_56: 0,
        u32_60: {
            a: null
        },
        u32_64: 0,
        unordered_hwvx_proto_collision_32_48_68: 0,
    };

}
function info_hwvx_proto_collision_32_48() {
    return {
        sec_id: "jPo9",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
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
function info_hwvx_proto_collision_32_56() {
    return {
        sec_id: "yQx5",
        u32_0: 0,
    };

}
function info_hwvx_proto_collision_64() {
    return {
        sec_id: "0lq8",
        u32_0: 0,
    };

}
function info_hwvx_proto_collision_76() {
    return {
        sec_id: "JRcn",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        section_16: ["5i:="],
        u32_20: 0,
        u32_28: 0,
    };

}
function info_hwvx_proto_collision_76_16() {
    return {
        sec_id: "5i:=",
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
    };

}
function info_hwvx_proto_collision_84() {
    return {
        sec_id: "FN^k",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_32: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        u8_40: 0,
        u8_41: 0,
        u8_42: 0,
        u8_43: 0,
        u8_44: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
    };

}
function info_hwvx_proto_collision_link() {
    return {
        sec_id: "Gx;=",
        section_0: ["change this"],
        section_4: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions() {
    return {
        sec_id: "3aN[",
        u32_0: 0,
        section_4: {
            s: 0
        },
        u32_8: 0,
        section_12: ["X5:_"],
        u32_16: {
            a: null
        },
        section_20: ["zCiR"],
        section_24: ["cffS"],
        u32_28: {
            a: null
        },
        u32_32: 0,
        u32_40: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_4t1() {
    return {
        sec_id: "fN<n",
        unordered_hwvx_proto_interface_0: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_4t3() {
    return {
        sec_id: "t:LV",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_4t5() {
    return {
        sec_id: "7u;j",
        u32_0: 0,
        section_4: ["change this"],
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_4t6() {
    return {
        sec_id: "xXSo",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_proto_world_12_12: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_4trest() {
    return {
        sec_id: "4Fw^",
        u32_0: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_12() {
    return {
        sec_id: "X5:_",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_12_4() {
    return {
        sec_id: "4CPG",
        u32_0: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20() {
    return {
        sec_id: "zCiR",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t0() {
    return {
        sec_id: "nOZg",
        u32_0: 0,
        section_4: ["4CPG"],
        u32_8: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t1t12() {
    return {
        sec_id: "pTQb",
        u32_0: 0,
        unordered_hwvx_proto_triggers_and_actions_12_4_4_4: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t1t13() {
    return {
        sec_id: "s@JO",
        u32_0: 0,
        section_4: {
            s: 0
        },
        u32_8: {
            a: null
        },
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t1t16() {
    return {
        sec_id: "YM2p",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t2() {
    return {
        sec_id: "KqY>",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t3() {
    return {
        sec_id: "I^je",
        u32_0: 0,
        u32_4: u32(o + 4),
        //check this
        section_8: {
            s: 0
        },
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: {
            s: 0
        },
        f32_36: 0,
        u32_44: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t4() {
    return {
        sec_id: "Npx[",
        u32_0: 0,
        f32_4: 0,
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
        f32_44: 0,
        u32_48: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t5() {
    return {
        sec_id: "LAop",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        section_24: {
            s: 0
        },
        f32_28: 0,
        f32_32: 0,
        u32_40: 0,
        section_44: {
            s: 0
        },
        f32_52: 0,
        u32_60: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t6() {
    return {
        sec_id: "fCWU",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t7() {
    return {
        sec_id: ":Hq]",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t8() {
    return {
        sec_id: "i5vu",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t9() {
    return {
        sec_id: "AQmR",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t10t10() {
    return {
        sec_id: "x21k",
        unordered_hwvx_proto_interface_0: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t10t20() {
    return {
        sec_id: "r_Uv",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t12() {
    return {
        sec_id: "twr?",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t15() {
    return {
        sec_id: "?t]q",
        u32_0: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t17() {
    return {
        sec_id: "bitp",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_proto_world_76_8: 0,
        f32_16: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t20() {
    return {
        sec_id: "ppf;",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_hwvx_proto_world_76_12: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t21() {
    return {
        sec_id: "kA7T",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_16: 0,
        unordered_hwvx_proto_world_20_20: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t22() {
    return {
        sec_id: ">Cf1",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t24() {
    return {
        sec_id: "5]LU",
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
function info_hwvx_proto_triggers_and_actions_20_4t26() {
    return {
        sec_id: "g1oO",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t31() {
    return {
        sec_id: "KT>V",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t32() {
    return {
        sec_id: "P5tz",
        u32_0: u32(o + 0),
        //check this
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t34() {
    return {
        sec_id: "4E^b",
        u32_0: 0,
        u32_4: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t36() {
    return {
        sec_id: "MJOb",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t38() {
    return {
        sec_id: "6Uxj",
        u32_0: 0,
        u32_4: 0,
        unordered_hwvx_proto_text_8: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_20_4t39() {
    return {
        sec_id: "[g5w",
        u32_0: 0,
        unordered_hwvx_proto_world_52_4: 0,
        u32_8: 0,
        unordered_hwvx_proto_world_12_12: 0,
    };

}
function info_hwvx_proto_triggers_and_actions_24() {
    return {
        sec_id: "cffS",
        u32_0: 0,
        u32_8: {
            a: null
        },
    };

}
function info_hwvx_proto_triggers_and_actions_24_4() {
    return {
        sec_id: "pN<^",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_models() {
    return {
        sec_id: "NSr;",
        u16_0: 0,
        u16_2: {
            a: null
        },
        u32_4: 0,
        section_8: ["U>9;"],
        section_12: ["HklA"],
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
    };

}
function info_hwvx_proto_model_8() {
    return {
        sec_id: "U>9;",
        u8_0: 0,
        u8_2: {
            a: null
        },
        u32_4: 0,
        section_8: ["=AG@"],
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        unordered_hwvx_proto_model_string_20: 0,
    };

}
function info_hwvx_proto_model_12() {
    return {
        sec_id: "HklA",
        f32_0: 0,
    };

}
function info_hwvx_proto_model_8_8() {
    return {
        sec_id: "=AG@",
        animation_0: "animation_patch",
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
        u32_20: 0,
        texture_24: "texture_patch",
        u32_28: 0,
    };

}
function info_hwvx_proto_model_8_8_12t0() {
    return {
        sec_id: "^te<",
        u16_16: 0,
        u8_19: 0,
        u8_35: 0,
        u8_36: 0,
        u8_37: 0,
        u8_39: 0,
        u8_40: 0,
        u8_41: 0,
        u8_43: 0,
        u8_45: 0,
        u8_46: 0,
        u8_47: 0,
        u8_48: 0,
        u8_49: 0,
        u8_53: 0,
        u8_54: 0,
        u8_55: 0,
        u16_56: 0,
        u8_64: 0,
        u8_65: 0,
        u8_67: 0,
        u8_68: 0,
        u8_69: 0,
        u8_70: {
            a: null
        },
        u8_71: 0,
    };

}
function info_hwvx_proto_model_8_8_12t7() {
    return {
        sec_id: "<Plf",
        u32_16: 0,
        section_20: ["fR>T"],
    };

}
function info_hwvx_proto_model_8_8_12t8() {
    return {
        sec_id: ";t0o",
        u32_16: 0,
        section_20: ["fR>T"],
        u32_24: 0,
        section_28: ["fR>T"],
        u32_32: 0,
        section_36: ["fR>T"],
    };

}
function info_hwvx_proto_model_8_8_12t7_20() {
    return {
        sec_id: "fR>T",
        u16_0: 0,
        u16_2: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u8_48: 0,
        u8_49: 0,
        u8_51: 0,
        u8_52: 0,
        u8_53: 0,
        section_54: ["0goX"],
        u8_55: 0,
    };

}
function info_hwvx_proto_model_8_8_12_modeldata() {
    return {
        sec_id: "0goX",
        f32_0: 0,
        f32_4: 0,
        u8_10: 0,
        u8_11: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function info_hwvx_proto_texture_anims() {
    return {
        sec_id: "eFdb",
        section_0: ["change this"],
    };

}
function info_hwvx_proto_model_anims_1() {
    return {
        sec_id: "K??i",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: {
            a: null
        },
        u32_20: 0,
        section_24: ["]Wot"],
        section_28: ["<j<O"],
        section_32: ["ir<<"],
        section_36: ["6jDb"],
        u32_40: 0,
        section_44: ["Ip4F"],
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
function info_hwvx_proto_model_anims_1_24() {
    return {
        sec_id: "]Wot",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
    };

}
function info_hwvx_proto_model_anims_1_28() {
    return {
        sec_id: "<j<O",
        u16_0: 0,
    };

}
function info_hwvx_proto_model_anims_1_32() {
    return {
        sec_id: "ir<<",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_model_anims_1_36() {
    return {
        sec_id: "6jDb",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function info_hwvx_proto_model_anims_1_44() {
    return {
        sec_id: "Ip4F",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_model_anims_2() {
    return {
        sec_id: "X]2v",
        u32_0: {
            a: null
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_16: ["4PH5"],
    };

}
function info_hwvx_proto_model_anims_2_16() {
    return {
        sec_id: "4PH5",
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
function info_hwvx_proto_texture() {
    return {
        sec_id: "of0M",
        u16_0: u16(o + 0),
        //check this
        u16_2: 0,
        u16_4: 0,
        u16_6: 0,
        unordered_hwvx_proto_texture_data_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_proto_share_end() {
    return {
        sec_id: "eCFb",
        section_0: ["Pac-Kart"],
        u32_4: {
            a: null
        },
        section_8: ["YJ<:"],
    };

}
function info_hwvx_proto_share_end_8() {
    return {
        sec_id: "YJ<:",
        texture_0: "texture_patch",
    };

}
function info_hwvx_proto_world_color_section() {
    return {
        sec_id: "tBe]",
        u32_0: {
            a: null
        },
        section_4: ["Igau"],
    };

}
function info_hwvx_proto_world_color_section_4() {
    return {
        sec_id: "Igau",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_world_text_link() {
    return {
        sec_id: "om89",
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
function info_hwvx_proto_world_settings() {
    return {
        sec_id: "6DwQ",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u8_33: 0,
        u8_34: 0,
        u8_35: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
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
        section_192: ["DnMC"],
        section_196: ["xmCF"],
        unordered_hwvx_proto_font_200: 0,
        unordered_hwvx_proto_interface_204: 0,
        section_224: ["KG?R"],
        section_228: ["D^@z"],
        u32_232: {
            a: null
        },
        section_236: ["P=hX"],
        u32_240: {
            a: null
        },
        section_244: ["iHBt"],
        u32_248: {
            a: null
        },
        section_252: ["iHBt"],
        u32_256: {
            a: null
        },
        section_260: ["M<n9"],
    };

}
function info_hwvx_proto_world_settings_192() {
    return {
        sec_id: "DnMC",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_world_settings_196() {
    return {
        sec_id: "xmCF",
        u32_0: 0,
        u32_8: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: ["4hhT"],
        unordered_hwvx_proto_sound_controls_32: 0,
    };

}
function info_hwvx_proto_world_settings_196_28() {
    return {
        sec_id: "4hhT",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_world_settings_224() {
    return {
        sec_id: "KG?R",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_proto_world_settings_228() {
    return {
        sec_id: "D^@z",
    };

}
function info_hwvx_proto_world_settings_236() {
    return {
        sec_id: "P=hX",
        section_0: ["0gYO"],
    };

}
function info_hwvx_proto_world_settings_236_0() {
    return {
        sec_id: "0gYO",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        f32_20: 0,
        u32_24: 0,
        section_28: ["QHN["],
    };

}
function info_hwvx_proto_world_settings_236_0_28() {
    return {
        sec_id: "QHN[",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_world_settings_244() {
    return {
        sec_id: "iHBt",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_world_settings_260() {
    return {
        sec_id: "M<n9",
        u32_0: 0,
        section_4: ["lI0j"],
    };

}
function info_hwvx_proto_world_settings_260_4() {
    return {
        sec_id: "lI0j",
        u8_2: 0,
        u8_3: 0,
        u8_6: 0,
        u8_7: 0,
        u8_10: 0,
        u8_11: 0,
        u8_14: 0,
        u8_15: 0,
        u8_18: 0,
        u8_19: 0,
        u8_22: 0,
        u8_23: 0,
        u8_26: 0,
        u8_27: 0,
        u8_28: 0,
        u8_29: 0,
        u8_30: 0,
        u8_31: 0,
    };

}
function info_hwvx_proto_world_small_section() {
    return {
        sec_id: "FhGs",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        section_12: ["@oVM"],
    };

}
function info_hwvx_proto_world_small_section_12() {
    return {
        sec_id: "@oVM",
        u32_0: 0,
    };

}
function info_hwvx_proto_world_model_related() {
    return {
        sec_id: "Javg",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
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
function info_hwvx_proto_world_idk() {
    return {
        sec_id: "ib0X",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: {
            a: null
        },
        section_48: ["=Bq3"],
    };

}
function info_hwvx_proto_world_idk_48() {
    return {
        sec_id: "=Bq3",
        unordered_hwvx_proto_some_world_thing_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["NiNv"],
    };

}
function info_hwvx_proto_world_idk_48_8() {
    return {
        sec_id: "NiNv",
        unordered_hwvx_proto_some_world_thing_0: 0,
    };

}
function info_hwvx_proto_some_world_thing() {
    return {
        sec_id: "k<bM",
        u32_0: 0,
        u32_4: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_44: 0,
        u32_52: 0,
        u32_56: 0,
        u32_60: 0,
        u32_64: 0,
        u32_68: 0,
        u32_72: 0,
        u32_76: 0,
        section_88: ["WbBj"],
        section_116: ["Pac-Kart"],
    };

}
function info_hwvx_proto_some_world_thing_88() {
    return {
        sec_id: "WbBj",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function info_hwvx_proto_geo_list() {
    return {
        sec_id: "^UG0",
        u32_0: {
            a: null
        },
        section_4: ["Gqys"],
    };

}
function info_hwvx_proto_geo_list_4() {
    return {
        sec_id: "Gqys",
        u32_0: {
            a: null
        },
        section_4: ["BT?c"],
        section_8: ["BVkg"],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
    };

}
function info_hwvx_proto_geo_list_4_4() {
    return {
        sec_id: "BT?c",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_proto_geo_list_4_8() {
    return {
        sec_id: "BVkg",
        f32_0: 0,
    };

}
function info_hwvx_proto_collision_settings() {
    return {
        sec_id: "@B[D",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_proto_unknown_48: 0,
        unordered_hwvx_proto_unknown_thing_52: 0,
        unordered_hwvx_proto_unknown_60: 0,
        unordered_hwvx_proto_unknown_64: 0,
        u32_68: {
            a: null
        },
        section_72: ["TrH@"],
        u32_76: {
            a: null
        },
        section_80: ["TrH@"],
    };

}
function info_hwvx_proto_collision_settings_72() {
    return {
        sec_id: "TrH@",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_car() {
    return {
        sec_id: "i=g:",
        u32_16: 0,
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
        unordered_hwvx_proto_model_anims_1_72: 0,
        unordered_hwvx_proto_model_anims_2_76: 0,
        texture_80: "texture_patch",
        model_84: "model_patch",
        unordered_hwvx_proto_sound_section_92: 0,
        unordered_hwvx_proto_sound_section_96: 0,
        section_108: ["Q_rF"],
        section_120: ["hJ^O"],
        section_124: ["ZdHL"],
        section_128: ["KQFs"],
        section_132: ["DLjW"],
        section_136: ["pT66"],
        section_140: ["<Xgk"],
        unordered_hwvx_proto_car_related_144: 0,
        unordered_hwvx_proto_car_related_148: 0,
        unordered_hwvx_proto_car_related_152: 0,
        unordered_hwvx_proto_car_related_156: 0,
        unordered_hwvx_proto_car_link_160: 0,
        section_164: ["cOSy"],
        section_172: ["O5O:"],
        u32_208: {
            a: null
        },
        section_212: ["w?mc"],
        u32_216: {
            a: null
        },
        section_220: ["Xtfw"],
        u32_224: {
            a: null
        },
        section_228: ["P0mb"],
        u32_232: {
            a: null
        },
        section_236: ["P0mb"],
        u32_240: 0,
        section_244: ["P0mb"],
        u32_248: 0,
        section_252: ["6l:Y"],
        u32_256: 0,
        section_260: ["iIBS"],
        u32_264: 0,
        section_268: ["=@aQ"],
        u32_280: {
            a: null
        },
        section_284: ["Xtfw"],
    };

}
function info_hwvx_proto_car_108() {
    return {
        sec_id: "Q_rF",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_car_120() {
    return {
        sec_id: "hJ^O",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        unordered_hwvx_proto_model_link_16: 0,
        u32_36: 0,
    };

}
function info_hwvx_proto_car_124() {
    return {
        sec_id: "ZdHL",
        f32_0: 0,
        f32_4: 0,
        f32_12: 0,
    };

}
function info_hwvx_proto_car_128() {
    return {
        sec_id: "KQFs",
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
        unordered_hwvx_proto_model_anims_2_96: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
        u32_128: {
            a: null
        },
        section_132: ["U[<W"],
        u32_136: {
            a: null
        },
        section_140: ["U[<W"],
    };

}
function info_hwvx_proto_car_128_132() {
    return {
        sec_id: "U[<W",
        u32_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_proto_car_128_132_4t1() {
    return {
        sec_id: "wxy:",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
    };

}
function info_hwvx_proto_car_128_132_4t2() {
    return {
        sec_id: "=CB9",
        f32_16: 0,
    };

}
function info_hwvx_proto_car_128_132_4t3() {
    return {
        sec_id: "ni0J",
        f32_4: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
    };

}
function info_hwvx_proto_car_128_132_4t4() {
    return {
        sec_id: "uVOT",
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_car_132() {
    return {
        sec_id: "DLjW",
        unordered_hwvx_proto_interface_16: 0,
        unordered_hwvx_proto_interface_24: 0,
        unordered_hwvx_proto_interface_28: 0,
        section_44: ["0fgN"],
        u32_52: 0,
    };

}
function info_hwvx_proto_car_132_44() {
    return {
        sec_id: "0fgN",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_car_136() {
    return {
        sec_id: "pT66",
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
function info_hwvx_proto_car_140() {
    return {
        sec_id: "<Xgk",
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
        section_56: ["GkK1"],
        u32_60: {
            a: null
        },
        section_64: ["sq>I"],
        u32_76: 0,
        section_80: ["GkK1"],
        f32_84: 0,
    };

}
function info_hwvx_proto_car_140_56() {
    return {
        sec_id: "GkK1",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_car_140_64() {
    return {
        sec_id: "sq>I",
        unordered_hwvx_proto_text_0: 0,
    };

}
function info_hwvx_proto_car_164() {
    return {
        sec_id: "cOSy",
        u32_4: 0,
        section_8: ["SBS0"],
    };

}
function info_hwvx_proto_car_164_8() {
    return {
        sec_id: "SBS0",
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_car_172() {
    return {
        sec_id: "O5O:",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_car_212() {
    return {
        sec_id: "w?mc",
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
        u8_60: 0,
        u8_62: 0,
        u8_63: 0,
        u8_64: 0,
        u8_66: 0,
    };

}
function info_hwvx_proto_car_220() {
    return {
        sec_id: "Xtfw",
        f32_0: 0,
        unordered_hwvx_proto_sound_section_4: 0,
    };

}
function info_hwvx_proto_car_228() {
    return {
        sec_id: "P0mb",
        unordered_hwvx_proto_model_anims_2_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["change this"],
    };

}
function info_hwvx_proto_car_252() {
    return {
        sec_id: "6l:Y",
        section_4: ["L6vT"],
    };

}
function info_hwvx_proto_car_252_4() {
    return {
        sec_id: "L6vT",
        u32_0: 0,
        section_4: ["emW9"],
    };

}
function info_hwvx_proto_car_252_4_4() {
    return {
        sec_id: "emW9",
        u32_0: 0,
    };

}
function info_hwvx_proto_car_260() {
    return {
        sec_id: "iIBS",
        u32_52: 0,
        section_56: ["K6P^"],
    };

}
function info_hwvx_proto_car_260_56() {
    return {
        sec_id: "K6P^",
    };

}
function info_hwvx_proto_car_268() {
    return {
        sec_id: "=@aQ",
    };

}
function info_hwvx_proto_car_related() {
    return {
        sec_id: "jg>I",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        u8_32: 0,
        u8_33: 0,
        u8_36: 0,
        u8_38: 0,
        u8_39: 0,
        u32_44: {
            a: null
        },
        section_48: ["HYA?"],
    };

}
function info_hwvx_proto_car_related_48() {
    return {
        sec_id: "HYA?",
        section_0: ["VM^0"],
    };

}
function info_hwvx_proto_car_related_48_0() {
    return {
        sec_id: "VM^0",
        u8_0: 0,
        u8_2: 0,
        u32_4: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_52: 0,
        u32_64: 0,
        u32_68: 0,
        u32_116: u32(o + 116),
        //check this
    };

}
function info_hwvx_proto_car_link() {
    return {
        sec_id: "ZIP^",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
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
        section_48: ["2Ajg"],
        u32_52: {
            a: null
        },
        section_56: [";10P"],
        u32_60: 0,
        section_64: ["hezc"],
        section_68: ["hxcM"],
    };

}
function info_hwvx_proto_car_link_48() {
    return {
        sec_id: "2Ajg",
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        unordered_hwvx_proto_unknown_48: 0,
        unordered_hwvx_proto_sound_section_60: 0,
        unordered_hwvx_proto_unknown_64: 0,
        u32_68: {
            a: null
        },
        section_72: [">a1]"],
        u32_76: {
            a: null
        },
        section_80: [">a1]"],
    };

}
function info_hwvx_proto_car_link_48_72() {
    return {
        sec_id: ">a1]",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_car_link_56() {
    return {
        sec_id: ";10P",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_car_link_64() {
    return {
        sec_id: "hezc",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_car_link_68() {
    return {
        sec_id: "hxcM",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_hwvx_proto_mysterious() {
    return {
        sec_id: "CP>2",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        f32_20: 0,
        section_24: {
            s: 0
        },
    };

}
function info_hwvx_proto_mysterious_24t5() {
    return {
        sec_id: "jpuw",
        model_8: "model_patch",
        u32_20: {
            a: null
        },
        section_24: ["wlid"],
        u32_28: {
            a: null
        },
        section_32: ["uUPO"],
        section_44: ["o7;i"],
    };

}
function info_hwvx_proto_mysterious_24t5_24() {
    return {
        sec_id: "wlid",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_mysterious_24t5_32() {
    return {
        sec_id: "uUPO",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_mysterious_24t5_44() {
    return {
        sec_id: "o7;i",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_mysterious_24t6() {
    return {
        sec_id: "R<H4",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        texture_8: "texture_patch",
        u32_12: {
            a: null
        },
        section_16: ["8cdg"],
        u32_20: {
            a: null
        },
        section_24: ["oV=="],
        u32_28: 0,
        section_32: ["aQ]J"],
        section_36: ["XqiO"],
    };

}
function info_hwvx_proto_mysterious_24t6_16() {
    return {
        sec_id: "8cdg",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_mysterious_24t6_24() {
    return {
        sec_id: "oV==",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_mysterious_24t6_32() {
    return {
        sec_id: "aQ]J",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_mysterious_24t6_36() {
    return {
        sec_id: "XqiO",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_mysterious_24t7() {
    return {
        sec_id: "@ZZb",
        u32_32: 0,
        u32_36: 0,
        f32_48: 0,
        f32_52: 0,
        f32_60: 0,
        f32_64: 0,
        u32_68: {
            a: null
        },
        section_72: ["QK;_"],
        u32_76: 0,
        section_80: ["7L6J"],
        u32_84: 0,
        section_88: ["_8[1"],
    };

}
function info_hwvx_proto_mysterious_24t7_72() {
    return {
        sec_id: "QK;_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_mysterious_24t7_80() {
    return {
        sec_id: "7L6J",
    };

}
function info_hwvx_proto_mysterious_24t7_88() {
    return {
        sec_id: "_8[1",
        texture_0: "texture_patch",
    };

}
function info_hwvx_proto_mysterious_24t9() {
    return {
        sec_id: "r8AQ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        texture_20: "texture_patch",
        texture_24: "texture_patch",
        section_28: ["juG4"],
        section_32: ["FGQj"],
        u8_36: 0,
        u8_37: 0,
        u8_38: 0,
        u8_39: 0,
        u32_40: 0,
        u32_44: 0,
    };

}
function info_hwvx_proto_mysterious_24t9_28() {
    return {
        sec_id: "juG4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_mysterious_24t9_32() {
    return {
        sec_id: "FGQj",
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_strange() {
    return {
        sec_id: "fz_?",
        u32_0: 0,
        u32_8: 0,
        u32_12: 0,
        f32_20: 0,
        u32_24: {
            a: null
        },
        section_28: ["Db4x"],
        unordered_hwvx_proto_sound_controls_32: 0,
    };

}
function info_hwvx_proto_strange_28() {
    return {
        sec_id: "Db4x",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_model_link() {
    return {
        sec_id: "Metw",
        u32_0: 0,
        section_4: ["t5Jp"],
        u32_8: {
            a: null
        },
        section_12: ["u66W"],
        unordered_hwvx_proto_model_anims_1_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
        f32_24: 0,
        u8_28: 0,
        u8_29: 0,
        u8_31: 0,
        section_32: ["Imly"],
        section_36: ["4_C="],
        u32_44: {
            a: null
        },
        section_48: ["change this"],
        section_52: ["iS5S"],
        section_56: ["z4bY"],
    };

}
function info_hwvx_proto_model_link_4() {
    return {
        sec_id: "t5Jp",
        model_0: "model_patch",
    };

}
function info_hwvx_proto_model_link_12() {
    return {
        sec_id: "u66W",
        model_0: "model_patch",
        u32_4: 0,
    };

}
function info_hwvx_proto_model_link_32() {
    return {
        sec_id: "Imly",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_model_link_36() {
    return {
        sec_id: "4_C=",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_model_link_52() {
    return {
        sec_id: "iS5S",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_proto_model_link_56() {
    return {
        sec_id: "z4bY",
        u32_0: {
            a: null
        },
        section_4: ["s;ve"],
        unordered_hwvx_proto_model_anims_2_8: 0,
    };

}
function info_hwvx_proto_model_link_56_4() {
    return {
        sec_id: "s;ve",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        model_8: "model_patch",
        section_12: ["Q0z;"],
        section_16: ["m8[T"],
    };

}
function info_hwvx_proto_model_link_56_4_12() {
    return {
        sec_id: "Q0z;",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_model_link_56_4_16() {
    return {
        sec_id: "m8[T",
    };

}
function info_hwvx_proto_text() {
    return {
        sec_id: "I[]x",
        section_0: ["Pac-Kart"],
    };

}
function info_hwvx_proto_font() {
    return {
        sec_id: "494j",
        texture_0: "texture_patch",
        unordered_hwvx_proto_sound_section_4: 0,
        u32_8: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: ["7]7W"],
        u32_32: {
            a: null
        },
        section_36: ["tHz_"],
        f32_40: 0,
    };

}
function info_hwvx_proto_font_28() {
    return {
        sec_id: "7]7W",
        f32_0: 0,
    };

}
function info_hwvx_proto_font_36() {
    return {
        sec_id: "tHz_",
        u32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_interface() {
    return {
        sec_id: "qVyB",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["1d6S"],
        u32_20: {
            a: null
        },
        section_24: ["K=ks"],
        section_28: ["ZriU"],
        unordered_hwvx_proto_sound_controls_32: 0,
        unordered_hwvx_proto_sound_controls_36: 0,
        unordered_hwvx_proto_sound_controls_40: 0,
        unordered_hwvx_proto_sound_controls_44: 0,
        section_48: ["xJ=Y"],
    };

}
function info_hwvx_proto_interface_16() {
    return {
        sec_id: "1d6S",
        u8_0: 0,
        u8_1: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
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
        section_60: ["]Sms"],
        section_68: ["J_pJ"],
        section_72: ["U=L="],
        section_96: ["Rkdk"],
        u32_100: {
            a: null
        },
        section_104: ["M?r;"],
    };

}
function info_hwvx_proto_interface_16_20t0() {
    return {
        sec_id: "8BNK",
        u8_0: 0,
        u8_1: 0,
        section_4: {
            s: 0
        },
        section_16: {
            s: 0
        },
    };

}
function info_hwvx_proto_interface_16_20t0_16() {
    return {
        sec_id: "kU0D",
        u32_0: {
            a: null
        },
        section_4: ["UuC9"],
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_proto_interface_16_20t0_16_4() {
    return {
        sec_id: "UuC9",
        texture_0: "texture_patch",
    };

}
function info_hwvx_proto_interface_16_20t1() {
    return {
        sec_id: "Mh;=",
        unordered_hwvx_proto_text_0: 0,
        unordered_hwvx_proto_font_4: 0,
        section_8: ["SGJ["],
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_proto_interface_16_20t1_8() {
    return {
        sec_id: "SGJ[",
        u32_0: {
            a: null
        },
        section_4: ["q_on"],
        u8_8: 0,
        u8_10: 0,
    };

}
function info_hwvx_proto_interface_16_20t1_8_4() {
    return {
        sec_id: "q_on",
        unordered_hwvx_proto_text_0: 0,
    };

}
function info_hwvx_proto_interface_16_20t2() {
    return {
        sec_id: "IYWn",
        u32_0: {
            a: null
        },
        section_4: [">@=_"],
    };

}
function info_hwvx_proto_interface_16_20t2_4() {
    return {
        sec_id: ">@=_",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        section_12: ["Pac-Kart"],
        unordered_hwvx_proto_text_16: 0,
        unordered_hwvx_proto_interface_text_related_20: 0,
        u32_24: {
            a: null
        },
        section_28: ["YSsF"],
    };

}
function info_hwvx_proto_interface_16_20t2_4_28() {
    return {
        sec_id: "YSsF",
        u32_0: {
            a: null
        },
        section_4: ["Qzyz"],
    };

}
function info_hwvx_proto_interface_16_20t2_4_28_4() {
    return {
        sec_id: "Qzyz",
        u8_1: 0,
        u8_2: 0,
    };

}
function info_hwvx_proto_interface_16_20t4() {
    return {
        sec_id: "FM?k",
        u32_0: {
            a: null
        },
        section_4: ["?CuH"],
    };

}
function info_hwvx_proto_interface_16_20t4_4() {
    return {
        sec_id: "?CuH",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
    };

}
function info_hwvx_proto_interface_16_20t10() {
    return {
        sec_id: "0ah;",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        unordered_hwvx_proto_font_16: 0,
    };

}
function info_hwvx_proto_interface_16_20t11() {
    return {
        sec_id: ">QXj",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_hwvx_proto_interface_16_60() {
    return {
        sec_id: "]Sms",
        unordered_hwvx_proto_interface_0: 0,
    };

}
function info_hwvx_proto_interface_16_68() {
    return {
        sec_id: "J_pJ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["lXU^"],
        u32_16: {
            a: null
        },
        section_20: ["bX^r"],
    };

}
function info_hwvx_proto_interface_16_68_12() {
    return {
        sec_id: "lXU^",
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
function info_hwvx_proto_interface_16_68_20() {
    return {
        sec_id: "bX^r",
        u32_0: 0,
        u32_4: 0,
        section_8: ["H_sG"],
    };

}
function info_hwvx_proto_interface_16_68_20_8() {
    return {
        sec_id: "H_sG",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        section_8: ["[cs^"],
        section_24: ["R=<n"],
        u32_28: 0,
        section_32: ["l3PK"],
        u32_36: 0,
    };

}
function info_hwvx_proto_interface_16_68_20_8_8() {
    return {
        sec_id: "[cs^",
        section_0: ["r__j"],
        section_4: ["7xT1"],
    };

}
function info_hwvx_proto_interface_16_68_20_8_8_0() {
    return {
        sec_id: "r__j",
        u32_0: 0,
    };

}
function info_hwvx_proto_interface_16_68_20_8_8_4() {
    return {
        sec_id: "7xT1",
        u32_0: 0,
    };

}
function info_hwvx_proto_interface_16_68_20_8_24() {
    return {
        sec_id: "R=<n",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function info_hwvx_proto_interface_16_68_20_8_32() {
    return {
        sec_id: "l3PK",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
    };

}
function info_hwvx_proto_interface_16_72() {
    return {
        sec_id: "U=L=",
        u32_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["AlcH"],
    };

}
function info_hwvx_proto_interface_16_72_8() {
    return {
        sec_id: "AlcH",
        u32_0: 0,
        u32_4: 0,
        section_8: ["3wEt"],
    };

}
function info_hwvx_proto_interface_16_72_8_8() {
    return {
        sec_id: "3wEt",
        u32_0: 0,
        section_4: ["P]zG"],
    };

}
function info_hwvx_proto_interface_16_72_8_8_4() {
    return {
        sec_id: "P]zG",
        u32_0: 0,
    };

}
function info_hwvx_proto_interface_16_96() {
    return {
        sec_id: "Rkdk",
        u32_0: {
            a: null
        },
        section_4: ["aTUt"],
        u32_8: {
            a: null
        },
        section_12: ["aTUt"],
        u32_16: {
            a: null
        },
        section_20: ["aTUt"],
        u32_24: {
            a: null
        },
        section_28: ["jdSj"],
        u32_32: {
            a: null
        },
        section_36: ["Z<<y"],
    };

}
function info_hwvx_proto_interface_16_96_4() {
    return {
        sec_id: "aTUt",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_interface_16_96_28() {
    return {
        sec_id: "jdSj",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_interface_16_96_36() {
    return {
        sec_id: "Z<<y",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        f32_36: 0,
    };

}
function info_hwvx_proto_interface_16_104() {
    return {
        sec_id: "M?r;",
        u32_0: 0,
        u32_4: 0,
        section_8: ["sS_M"],
    };

}
function info_hwvx_proto_interface_16_104_8() {
    return {
        sec_id: "sS_M",
        u32_0: {
            a: null
        },
        section_4: ["i4Z@"],
        u32_8: {
            a: null
        },
        section_12: ["8<A2"],
        u32_16: {
            a: null
        },
        section_20: ["RpkE"],
        u32_24: {
            a: null
        },
        section_28: ["vfDd"],
        u32_32: {
            a: null
        },
        section_36: ["HIn]"],
        u32_40: {
            a: null
        },
        section_44: ["LJw3"],
        u32_52: {
            a: null
        },
        section_56: ["hTcs"],
    };

}
function info_hwvx_proto_interface_16_104_8_4() {
    return {
        sec_id: "i4Z@",
        u32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_interface_16_104_8_12() {
    return {
        sec_id: "8<A2",
        f32_0: 0,
        f32_4: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_interface_16_104_8_20() {
    return {
        sec_id: "RpkE",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_interface_16_104_8_28() {
    return {
        sec_id: "vfDd",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_interface_16_104_8_36() {
    return {
        sec_id: "HIn]",
        f32_0: 0,
        f32_4: 0,
        f32_24: 0,
        f32_28: 0,
        u32_32: 0,
        f32_36: 0,
    };

}
function info_hwvx_proto_interface_16_104_8_44() {
    return {
        sec_id: "LJw3",
        f32_0: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_interface_16_104_8_56() {
    return {
        sec_id: "hTcs",
        u32_0: 0,
        section_4: ["Zg[j"],
    };

}
function info_hwvx_proto_interface_16_104_8_56_4() {
    return {
        sec_id: "Zg[j",
    };

}
function info_hwvx_proto_interface_16_68_20_8_0t11() {
    return {
        sec_id: "gwE5",
        u32_0: 0,
        section_4: ["Qvak"],
    };

}
function info_hwvx_proto_interface_16_68_20_8_0t11_4() {
    return {
        sec_id: "Qvak",
        u32_0: {
            a: null
        },
        section_4: ["5uGd"],
    };

}
function info_hwvx_proto_interface_16_68_20_8_0t11_4_4() {
    return {
        sec_id: "5uGd",
        section_0: ["HE?>"],
    };

}
function info_hwvx_proto_interface_16_68_20_8_0t11_4_4_0() {
    return {
        sec_id: "HE?>",
        u32_0: 0,
        section_4: ["vSGD"],
    };

}
function info_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4() {
    return {
        sec_id: "vSGD",
        u32_0: 0,
    };

}
function info_hwvx_proto_interface_24() {
    return {
        sec_id: "K=ks",
        u32_0: 0,
        u32_4: 0,
        section_8: ["TCBf"],
    };

}
function info_hwvx_proto_interface_24_8() {
    return {
        sec_id: "TCBf",
        section_0: {
            s: 0
        },
        u8_4: 0,
        u8_5: 0,
        section_8: {
            s: 0
        },
    };

}
function info_hwvx_proto_interface_24_8_0t11() {
    return {
        sec_id: "EQvy",
        u32_0: {
            a: null
        },
        section_4: ["WMML"],
    };

}
function info_hwvx_proto_interface_24_8_0t11_4() {
    return {
        sec_id: "WMML",
        u32_0: {
            a: null
        },
        section_4: ["P<e^"],
    };

}
function info_hwvx_proto_interface_24_8_0t11_4_4() {
    return {
        sec_id: "P<e^",
        section_0: ["8lvN"],
    };

}
function info_hwvx_proto_interface_24_8_0t11_4_4_0() {
    return {
        sec_id: "8lvN",
        u32_0: 0,
        section_4: ["QW[="],
    };

}
function info_hwvx_proto_interface_24_8_0t11_4_4_0_4() {
    return {
        sec_id: "QW[=",
        u32_0: 0,
    };

}
function info_hwvx_proto_interface_24_8_8t15() {
    return {
        sec_id: "Xyg1",
        section_0: ["q6pP"],
        section_4: ["81GP"],
    };

}
function info_hwvx_proto_interface_24_8_8t15_0() {
    return {
        sec_id: "q6pP",
        u8_2: 0,
    };

}
function info_hwvx_proto_interface_24_8_8t15_4() {
    return {
        sec_id: "81GP",
        u32_0: 0,
    };

}
function info_hwvx_proto_interface_24_8_8t17() {
    return {
        sec_id: "[@P4",
        u8_0: 0,
        u8_2: 0,
    };

}
function info_hwvx_proto_interface_28() {
    return {
        sec_id: "ZriU",
        u32_0: {
            a: null
        },
        section_4: ["vX8@"],
    };

}
function info_hwvx_proto_interface_28_4() {
    return {
        sec_id: "vX8@",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: ["PfIg"],
    };

}
function info_hwvx_proto_interface_28_4_16() {
    return {
        sec_id: "PfIg",
        u32_0: 0,
        section_4: ["a=N3"],
    };

}
function info_hwvx_proto_interface_28_4_16_4() {
    return {
        sec_id: "a=N3",
        u8_0: 0,
        u8_2: 0,
    };

}
function info_hwvx_proto_interface_48() {
    return {
        sec_id: "xJ=Y",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_proto_interface_text_related() {
    return {
        sec_id: "3OW[",
        unordered_hwvx_proto_text_0: 0,
        unordered_hwvx_proto_font_8: 0,
        section_12: ["<J>V"],
        u32_16: {
            a: null
        },
        section_20: ["T8ye"],
        u32_24: {
            a: null
        },
        section_28: ["T8ye"],
        u32_44: {
            a: null
        },
        unordered_hwvx_proto_interface_text_related_48_48: 0,
        section_52: ["O];A"],
    };

}
function info_hwvx_proto_interface_text_related_12() {
    return {
        sec_id: "<J>V",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_interface_text_related_20() {
    return {
        sec_id: "T8ye",
        u32_0: {
            a: null
        },
        section_4: ["AYTy"],
        u32_8: 0,
    };

}
function info_hwvx_proto_interface_text_related_20_4() {
    return {
        sec_id: "AYTy",
        texture_0: "texture_patch",
    };

}
function info_hwvx_proto_interface_text_related_52() {
    return {
        sec_id: "O];A",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown() {
    return {
        sec_id: "9me0",
        u32_0: {
            a: null
        },
        section_4: ["HP[]"],
    };

}
function info_hwvx_proto_unknown_4() {
    return {
        sec_id: "HP[]",
        u32_0: 0,
        section_4: {
            s: 0
        },
        section_8: {
            s: 0
        },
    };

}
function info_hwvx_proto_unknown_4_8t1() {
    return {
        sec_id: "oH:I",
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
        section_44: ["Cu>6"],
    };

}
function info_hwvx_proto_unknown_4_8t1_40t1() {
    return {
        sec_id: "KKwn",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_unknown_4_8t1_40t2() {
    return {
        sec_id: "fJ[T",
        f32_0: 0,
        f32_4: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: {
            s: 0
        },
    };

}
function info_hwvx_proto_unknown_4_8t1_40t2_12t0() {
    return {
        sec_id: "qOTK",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_4_8t1_40t2_12t1() {
    return {
        sec_id: "1A8k",
        f32_0: 0,
        u32_16: 0,
    };

}
function info_hwvx_proto_unknown_4_8t1_40t2_12t2() {
    return {
        sec_id: "8P[M",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
    };

}
function info_hwvx_proto_unknown_4_8t1_44() {
    return {
        sec_id: "Cu>6",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_unknown_4_8t5() {
    return {
        sec_id: "g>hN",
        u32_24: 0,
        section_28: ["]b4a"],
    };

}
function info_hwvx_proto_unknown_4_8t5_28() {
    return {
        sec_id: "]b4a",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
    };

}
function info_hwvx_proto_unknown_4_4t4() {
    return {
        sec_id: "VD@9",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: 0,
        section_28: ["nTMN"],
    };

}
function info_hwvx_proto_unknown_4_4t4_28() {
    return {
        sec_id: "nTMN",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_unknown_4_4t8() {
    return {
        sec_id: "d7nY",
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        u32_12: {
            a: null
        },
        section_16: ["gS;?"],
        u32_20: {
            a: null
        },
        section_24: ["e2Rn"],
    };

}
function info_hwvx_proto_unknown_4_4t8_16() {
    return {
        sec_id: "gS;?",
        f32_0: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_4_4t8_24() {
    return {
        sec_id: "e2Rn",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_4_4t29() {
    return {
        sec_id: "NE9?",
        u32_0: 0,
        u32_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["Pd2k"],
    };

}
function info_hwvx_proto_unknown_4_4t29_12() {
    return {
        sec_id: "Pd2k",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        model_28: "model_patch",
        unordered_hwvx_proto_unknown_link_section_32: 0,
    };

}
function info_hwvx_proto_unknown_idk_sec() {
    return {
        sec_id: "^GRl",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        section_28: ["3]3r"],
        section_32: ["Q4<C"],
        section_36: ["7vmh"],
        section_40: ["Zd;F"],
        u32_44: 0,
        section_48: ["pPZL"],
    };

}
function info_hwvx_proto_unknown_idk_sec_28() {
    return {
        sec_id: "3]3r",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        unordered_hwvx_proto_unknown_24: 0,
    };

}
function info_hwvx_proto_unknown_idk_sec_32() {
    return {
        sec_id: "Q4<C",
        u32_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["6yHH"],
    };

}
function info_hwvx_proto_unknown_idk_sec_32_8() {
    return {
        sec_id: "6yHH",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_idk_sec_36() {
    return {
        sec_id: "7vmh",
        u32_0: 0,
        section_4: ["8Wto"],
    };

}
function info_hwvx_proto_unknown_idk_sec_36_4() {
    return {
        sec_id: "8Wto",
        f32_0: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_unknown_idk_sec_40() {
    return {
        sec_id: "Zd;F",
        u32_0: 0,
        section_4: ["3s]Q"],
    };

}
function info_hwvx_proto_unknown_idk_sec_40_4() {
    return {
        sec_id: "3s]Q",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_unknown_idk_sec_48() {
    return {
        sec_id: "pPZL",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_unknown_link_section() {
    return {
        sec_id: "H8fI",
        u32_0: 0,
        u32_8: 0,
        u32_12: 0,
        u32_24: {
            a: null
        },
        section_28: ["AGOy"],
    };

}
function info_hwvx_proto_unknown_link_section_28() {
    return {
        sec_id: "AGOy",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_grand_section() {
    return {
        sec_id: "caGR",
        model_0: "model_patch",
        u32_4: 0,
        f32_8: 0,
        section_16: ["change this"],
        u32_24: 0,
        section_28: ["change this"],
    };

}
function info_hwvx_proto_unknown_thing() {
    return {
        sec_id: "tpqu",
        u32_0: 0,
        section_4: {
            s: 0
        },
        u32_8: 0,
        u32_12: 0,
        f32_16: 0,
        u32_20: 0,
        section_24: ["<dYK"],
        u32_28: 0,
        section_32: ["lLrJ"],
    };

}
function info_hwvx_proto_unknown_thing_4t0() {
    return {
        sec_id: "vK>c",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        unordered_hwvx_proto_sound_controls_24: 0,
        u32_32: {
            a: null
        },
        section_36: ["2SLk"],
        u32_40: {
            a: null
        },
        section_44: ["h;uV"],
    };

}
function info_hwvx_proto_unknown_thing_4t0_36() {
    return {
        sec_id: "2SLk",
        model_0: "model_patch",
    };

}
function info_hwvx_proto_unknown_thing_4t0_44() {
    return {
        sec_id: "h;uV",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_16: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_unknown_thing_4t1() {
    return {
        sec_id: "]7y^",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        u32_32: {
            a: null
        },
        section_36: ["X594"],
        u32_40: {
            a: null
        },
        section_44: ["I>Pm"],
    };

}
function info_hwvx_proto_unknown_thing_4t1_36() {
    return {
        sec_id: "X594",
        texture_0: "texture_patch",
    };

}
function info_hwvx_proto_unknown_thing_4t1_44() {
    return {
        sec_id: "I>Pm",
        f32_0: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_thing_4t2() {
    return {
        sec_id: "jbi0",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["n?lz"],
        u32_20: {
            a: null
        },
        section_24: ["8AvY"],
    };

}
function info_hwvx_proto_unknown_thing_4t2_16() {
    return {
        sec_id: "n?lz",
        f32_0: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_thing_4t2_24() {
    return {
        sec_id: "8AvY",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_thing_24() {
    return {
        sec_id: "<dYK",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_unknown_thing_32() {
    return {
        sec_id: "lLrJ",
        unordered_hwvx_proto_unknown_0: 0,
    };

}
function info_hwvx_proto_asdf() {
    return {
        sec_id: "Q7EE",
        u8_0: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
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
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        f32_72: 0,
        f32_76: 0,
        u32_84: 0,
        texture_92: "texture_patch",
        unordered_hwvx_proto_unknown_112: 0,
        unordered_hwvx_proto_unknown_116: 0,
        unordered_hwvx_proto_unknown_120: 0,
        u32_140: {
            a: null
        },
        section_144: ["Rg6^"],
        u32_148: {
            a: null
        },
        section_152: [";ZV3"],
        u32_156: {
            a: null
        },
        section_160: ["change this"],
        section_164: ["n^l7"],
        section_168: ["qO<v"],
        section_172: ["UlWs"],
    };

}
function info_hwvx_proto_asdf_12t1() {
    return {
        sec_id: "x<;N",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_hwvx_proto_asdf_12t2() {
    return {
        sec_id: ":]L<",
        f32_0: 0,
    };

}
function info_hwvx_proto_asdf_144() {
    return {
        sec_id: "Rg6^",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function info_hwvx_proto_asdf_152() {
    return {
        sec_id: ";ZV3",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_asdf_164() {
    return {
        sec_id: "n^l7",
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
function info_hwvx_proto_asdf_168() {
    return {
        sec_id: "qO<v",
        u32_0: 0,
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
function info_hwvx_proto_asdf_172() {
    return {
        sec_id: "UlWs",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_hwvx_proto_item() {
    return {
        sec_id: "1<NQ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        unordered_hwvx_proto_text_32: 0,
        unordered_hwvx_proto_unknown_36: 0,
        unordered_hwvx_proto_unknown_44: 0,
        section_48: ["[Tf["],
        unordered_hwvx_proto_model_anims_2_52: 0,
        u32_56: 0,
        section_60: ["change this"],
    };

}
function info_hwvx_proto_item_48() {
    return {
        sec_id: "[Tf[",
        section_0: ["HU5e"],
        unordered_hwvx_proto_text_16: 0,
        texture_24: "texture_patch",
        u8_26: 0,
        u8_27: 0,
        unordered_hwvx_proto_model_anims_2_28: 0,
        u32_32: 0,
        u32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        u32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
    };

}
function info_hwvx_proto_item_48_0() {
    return {
        sec_id: "HU5e",
        u32_8: {
            a: null
        },
        section_12: ["rCXf"],
        unordered_hwvx_proto_model_anims_1_16: 0,
        unordered_hwvx_proto_model_anims_2_20: 0,
        f32_24: 0,
        u32_28: 0,
        section_32: ["]sCt"],
        section_36: ["Rn4S"],
        section_40: ["<OmJ"],
        u32_44: {
            a: null
        },
        section_48: ["change this"],
        section_52: ["4diD"],
    };

}
function info_hwvx_proto_item_48_0_12() {
    return {
        sec_id: "rCXf",
        model_0: "model_patch",
        u32_4: 0,
    };

}
function info_hwvx_proto_item_48_0_32() {
    return {
        sec_id: "]sCt",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_item_48_0_36() {
    return {
        sec_id: "Rn4S",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_item_48_0_40() {
    return {
        sec_id: "<OmJ",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_item_48_0_52() {
    return {
        sec_id: "4diD",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_hwvx_proto_link() {
    return {
        sec_id: "v8dg",
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
        section_12: ["Pac-Kart"],
        texture_16: "texture_patch",
        texture_20: "texture_patch",
        f32_24: 0,
        f32_28: 0,
        u32_36: 0,
        u32_40: {
            a: null
        },
        section_44: [";1k?"],
        u32_48: {
            a: null
        },
        section_52: ["VveN"],
        u32_56: {
            a: null
        },
        section_60: ["29=@"],
    };

}
function info_hwvx_proto_link_44() {
    return {
        sec_id: ";1k?",
        u32_0: 0,
        section_4: {
            s: 0
        },
        section_8: {
            s: 0
        },
    };

}
function info_hwvx_proto_link_44_8() {
    return {
        sec_id: "=Sj3",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_proto_link_52() {
    return {
        sec_id: "VveN",
        section_0: ["fPWs"],
    };

}
function info_hwvx_proto_link_52_0() {
    return {
        sec_id: "fPWs",
        u32_0: {
            a: null
        },
        section_4: ["@QKQ"],
    };

}
function info_hwvx_proto_link_52_0_4() {
    return {
        sec_id: "@QKQ",
        u32_0: {
            a: null
        },
        section_4: ["5JG5"],
        section_8: ["LgjN"],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: ["0ic:"],
        u32_24: 0,
        section_28: ["tXYf"],
    };

}
function info_hwvx_proto_link_52_0_4_4() {
    return {
        sec_id: "5JG5",
        u32_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_hwvx_proto_link_52_0_4_4_4() {
    return {
        sec_id: "dqlY",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_proto_link_52_0_4_8() {
    return {
        sec_id: "LgjN",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_hwvx_proto_link_52_0_4_20() {
    return {
        sec_id: "0ic:",
        u32_8: 0,
    };

}
function info_hwvx_proto_link_52_0_4_28() {
    return {
        sec_id: "tXYf",
    };

}
function info_hwvx_proto_link_60() {
    return {
        sec_id: "29=@",
        section_0: ["VLW2"],
    };

}
function info_hwvx_proto_link_60_0() {
    return {
        sec_id: "VLW2",
        section_0: ["f3Y0"],
    };

}
function info_hwvx_proto_link_60_0_0() {
    return {
        sec_id: "f3Y0",
        section_0: [";cM0"],
        section_4: ["hU]>"],
        section_8: ["D_EH"],
    };

}
function info_hwvx_proto_link_60_0_0_0() {
    return {
        sec_id: ";cM0",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_hwvx_proto_link_60_0_0_4() {
    return {
        sec_id: "hU]>",
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
function info_hwvx_proto_link_60_0_0_8() {
    return {
        sec_id: "D_EH",
        u8_0: 0,
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
function info_hwvx_proto_sound_controls() {
    return {
        sec_id: "aO>y",
        u32_0: 0,
        u32_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["IT5f"],
    };

}
function info_hwvx_proto_sound_controls_12() {
    return {
        sec_id: "IT5f",
        f32_0: 0,
        u32_4: 0,
        u32_8: {
            a: null
        },
        section_12: [";2Q?"],
    };

}
function info_hwvx_proto_sound_controls_12_12() {
    return {
        sec_id: ";2Q?",
        unordered_hwvx_proto_sound_section_0: 0,
    };

}
function info_hwvx_proto_sound_section() {
    return {
        sec_id: "wg7F",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        sound_20: "sound_patch",
        section_24: ["b[E5"],
        u32_28: 0,
        section_32: ["ZBz8"],
    };

}
function info_hwvx_proto_sound_section_24() {
    return {
        sec_id: "b[E5",
        u32_0: 0,
        f32_4: 0,
    };

}
function info_hwvx_proto_sound_section_32() {
    return {
        sec_id: "ZBz8",
        f32_0: 0,
    };

}
function info_hwvx_proto_texture_anims_0() {
    return {
        sec_id: "D1YG",
        u32_4: {
            a: null
        },
        section_8: ["^^gk"],
        u32_12: {
            a: null
        },
        section_16: ["a]cr"],
        section_20: ["cMSE"],
    };

}
function info_hwvx_proto_texture_anims_0_20() {
    return {
        sec_id: "cMSE",
        u32_0: {
            a: null
        },
        section_4: ["<4l9"],
        u32_8: 0,
    };

}
function info_hwvx_proto_texture_anims_0_20_4() {
    return {
        sec_id: "<4l9",
        texture_0: "texture_patch",
    };

}
function info_hwvx_proto_texture_anims_0_8() {
    return {
        sec_id: "^^gk",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u32_4: 0,
        f32_8: 0,
    };

}
function info_hwvx_proto_texture_anims_0_16() {
    return {
        sec_id: "a]cr",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u32_12: 0,
    };

}
/* end info list */
/////////////////////
/* start export list */
function ex_hwvx_proto_x(o, x) {

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
        hwvx_proto_world_12_array: [],
        hwvx_proto_world_20_array: [],
        hwvx_proto_world_36_36_array: [],
        hwvx_proto_world_36_48_array: [],
        hwvx_proto_world_36_48_16_array: [],
        hwvx_proto_world_36_48_8_array: [],
        hwvx_proto_world_36_48_24_array: [],
        hwvx_proto_world_76_array: [],
        hwvx_proto_world_52_array: [],
        hwvx_proto_world_108_array: [],
        hwvx_proto_world_108_44t6_array: [],
        hwvx_proto_world_120_0_array: [],
        hwvx_proto_collision_32_48_array: [],
        hwvx_proto_collision_link_array: [],
        hwvx_proto_triggers_and_actions_array: [],
        hwvx_proto_texture_anims_array: [],
        hwvx_proto_model_anims_1_array: [],
        hwvx_proto_model_anims_2_array: [],
        hwvx_proto_texture_array: [],
        hwvx_proto_world_color_section_array: [],
        hwvx_proto_world_text_link_array: [],
        hwvx_proto_world_settings_array: [],
        hwvx_proto_world_small_section_array: [],
        hwvx_proto_world_model_related_array: [],
        hwvx_proto_world_idk_array: [],
        hwvx_proto_some_world_thing_array: [],
        hwvx_proto_geo_list_array: [],
        hwvx_proto_collision_settings_array: [],
        hwvx_proto_car_array: [],
        hwvx_proto_car_related_array: [],
        hwvx_proto_car_link_array: [],
        hwvx_proto_mysterious_array: [],
        hwvx_proto_strange_array: [],
        hwvx_proto_model_link_array: [],
        hwvx_proto_text_array: [],
        hwvx_proto_font_array: [],
        hwvx_proto_interface_array: [],
        hwvx_proto_interface_text_related_array: [],
        hwvx_proto_unknown_array: [],
        hwvx_proto_unknown_idk_sec_array: [],
        hwvx_proto_unknown_link_section_array: [],
        hwvx_proto_grand_section_array: [],
        hwvx_proto_unknown_thing_array: [],
        hwvx_proto_asdf_array: [],
        hwvx_proto_item_array: [],
        hwvx_proto_link_array: [],
        hwvx_proto_sound_controls_array: [],
        hwvx_proto_sound_section_array: [],
        hwvx_proto_texture_anims_0_array: [],
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    ex_hwvx_proto_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_hwvx_proto_file_header(o, x) {
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

        e = ex_hwvx_proto_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_directory(o, e, x, global) {
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []

    g.hwvx_proto_world_12_array = []
    g.hwvx_proto_world_20_array = []
    g.hwvx_proto_world_36_36_array = []
    g.hwvx_proto_world_36_48_array = []
    g.hwvx_proto_world_36_48_16_array = []
    g.hwvx_proto_world_36_48_8_array = []
    g.hwvx_proto_world_36_48_24_array = []
    g.hwvx_proto_world_76_array = []
    g.hwvx_proto_world_52_array = []
    g.hwvx_proto_world_108_array = []
    g.hwvx_proto_world_108_44t6_array = []
    g.hwvx_proto_world_120_0_array = []
    g.hwvx_proto_collision_32_48_array = []
    g.hwvx_proto_collision_link_array = []
    g.hwvx_proto_triggers_and_actions_array = []
    g.hwvx_proto_texture_anims_array = []
    g.hwvx_proto_model_anims_1_array = []
    g.hwvx_proto_model_anims_2_array = []
    g.hwvx_proto_texture_array = []
    g.hwvx_proto_world_color_section_array = []
    g.hwvx_proto_world_text_link_array = []
    g.hwvx_proto_world_settings_array = []
    g.hwvx_proto_world_small_section_array = []
    g.hwvx_proto_world_model_related_array = []
    g.hwvx_proto_world_idk_array = []
    g.hwvx_proto_some_world_thing_array = []
    g.hwvx_proto_geo_list_array = []
    g.hwvx_proto_collision_settings_array = []
    g.hwvx_proto_car_array = []
    g.hwvx_proto_car_related_array = []
    g.hwvx_proto_car_link_array = []
    g.hwvx_proto_mysterious_array = []
    g.hwvx_proto_strange_array = []
    g.hwvx_proto_model_link_array = []
    g.hwvx_proto_text_array = []
    g.hwvx_proto_font_array = []
    g.hwvx_proto_interface_array = []
    g.hwvx_proto_interface_text_related_array = []
    g.hwvx_proto_unknown_array = []
    g.hwvx_proto_unknown_idk_sec_array = []
    g.hwvx_proto_unknown_link_section_array = []
    g.hwvx_proto_grand_section_array = []
    g.hwvx_proto_unknown_thing_array = []
    g.hwvx_proto_asdf_array = []
    g.hwvx_proto_item_array = []
    g.hwvx_proto_link_array = []
    g.hwvx_proto_sound_controls_array = []
    g.hwvx_proto_sound_section_array = []
    g.hwvx_proto_texture_anims_0_array = []
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
        e = ex_hwvx_proto_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    case 7:
        e = ex_hwvx_proto_geo_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    }

    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + patch_buffer.byteLength + ordered_buffer.byteLength)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_proto_datapack(o, x) {
    let e = o + 120
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 40, x.u32_40)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su32(o + 64, x.u32_64)
    su32(o + 92, x.u32_92)
    su32(o + 112, x.u32_112)

    // x.section_audio

    // e = ex_s_offset(o + 0, e, ex_ordered_list, x.section_0, 'down');
    // e = ex_s_offset(o + 4, e, ex_audio_section, x.section_4, 'down');
    // e = ex_s_offset(o + 24, e, ex_hwvx_proto_texture, x.section_24, 'down');
    // e = ex_s_offset(o + 44, e, ex_color_table, x.section_44, 'down');
    // e = ex_s_offset(o + 60, e, ex_hwvx_proto_texture_anims, x.section_60, 'down');
    // e = ex_s_offset(o + 68, e, ex_hwvx_proto_datapack_68, x.section_68, 'down');
    // e = ex_s_offset(o + 72, e, ex_impulse_tracker, x.section_72, 'down');
    // e = ex_s_offset(o + 76, e, ex_hwvx_proto_audio_data_2, x.section_76, 'down');
    // e = ex_string(o + 80, e, x.section_80)
    // e = ex_string(o + 100, e, x.section_100)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_proto_geo_datapack(o, x) {
    let e = o + 84
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +28, x.u32_28)
    //amount?   su32(o +36, x.u32_36)
    //amount?   su32(o +40, x.u32_40)

    // e = ex_string(o + 55, e, x.section_44)
    // e = ex_string(o + 56, e, x.section_56)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_proto_sound_offset_list(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_audio_list, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_audio_list(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_proto_ordered(o, x) {
    globalThis.ordered_buffer = new ArrayBuffer(268435455)

    buffer_array.push(ordered_buffer)
    dynamic_buffer = ordered_buffer

    let aftero = o
    let e = o
    o = 0
    g.m = o
    g.unordered_ref = x.unordered[0]
    g.ordered_ref = x

    ex_hwvx_proto_unordered(x.unordered[0])

    switch (g.file_dir_type) {

    case "car":
        e = ex_hwvx_proto_basic(o, x.file_specific[0])
        break

    case "interface":
        e = ex_hwvx_proto_basic(o, x.file_specific[0])
        break

    case "item":
        e = ex_hwvx_proto_basic(o, x.file_specific[0])
        break

    case "link":
        e = ex_hwvx_proto_basic(o, x.file_specific[0])
        break

    case "world":
        e = ex_hwvx_proto_world(o, x.file_specific[0])
        break

    case "colliders":
        e = ex_hwvx_proto_collision(o, x.file_specific[0])
        break

    case "geometry":
        e = ex_hwvx_proto_geo_basic(o, x.file_specific[0])
        break
    case "share":
        e = ex_hwvx_proto_share(o, x.file_specific[0])
        break

    case "audio":
        e = ex_hwvx_proto_basic(o, x.file_specific[0])
        break

    case "music":
        e = ex_hwvx_proto_basic(o, x.file_specific[0])
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
function ex_hwvx_proto_unordered(x) {
    generate_id_offset_array(g.hwvx_proto_world_12_array = [], x.hwvx_proto_world_12)
    generate_id_offset_array(g.hwvx_proto_world_20_array = [], x.hwvx_proto_world_20)
    generate_id_offset_array(g.hwvx_proto_world_36_36_array = [], x.hwvx_proto_world_36_36)
    generate_id_offset_array(g.hwvx_proto_world_36_48_array = [], x.hwvx_proto_world_36_48)
    generate_id_offset_array(g.hwvx_proto_world_36_48_16_array = [], x.hwvx_proto_world_36_48_16)
    generate_id_offset_array(g.hwvx_proto_world_36_48_8_array = [], x.hwvx_proto_world_36_48_8)
    generate_id_offset_array(g.hwvx_proto_world_36_48_24_array = [], x.hwvx_proto_world_36_48_24)
    generate_id_offset_array(g.hwvx_proto_world_76_array = [], x.hwvx_proto_world_76)
    generate_id_offset_array(g.hwvx_proto_world_52_array = [], x.hwvx_proto_world_52)
    generate_id_offset_array(g.hwvx_proto_world_108_array = [], x.hwvx_proto_world_108)
    generate_id_offset_array(g.hwvx_proto_world_108_44t6_array = [], x.hwvx_proto_world_108_44t6)
    generate_id_offset_array(g.hwvx_proto_world_120_0_array = [], x.hwvx_proto_world_120_0)
    generate_id_offset_array(g.hwvx_proto_collision_32_48_array = [], x.hwvx_proto_collision_32_48)
    generate_id_offset_array(g.hwvx_proto_collision_link_array = [], x.hwvx_proto_collision_link)
    generate_id_offset_array(g.hwvx_proto_triggers_and_actions_array = [], x.hwvx_proto_triggers_and_actions)
    generate_id_offset_array(g.hwvx_proto_texture_anims_array = [], x.hwvx_proto_texture_anims)
    generate_id_offset_array(g.hwvx_proto_model_anims_1_array = [], x.hwvx_proto_model_anims_1)
    generate_id_offset_array(g.hwvx_proto_model_anims_2_array = [], x.hwvx_proto_model_anims_2)
    generate_id_offset_array(g.hwvx_proto_texture_array = [], x.hwvx_proto_texture)
    generate_id_offset_array(g.hwvx_proto_world_color_section_array = [], x.hwvx_proto_world_color_section)
    generate_id_offset_array(g.hwvx_proto_world_text_link_array = [], x.hwvx_proto_world_text_link)
    generate_id_offset_array(g.hwvx_proto_world_settings_array = [], x.hwvx_proto_world_settings)
    generate_id_offset_array(g.hwvx_proto_world_small_section_array = [], x.hwvx_proto_world_small_section)
    generate_id_offset_array(g.hwvx_proto_world_model_related_array = [], x.hwvx_proto_world_model_related)
    generate_id_offset_array(g.hwvx_proto_world_idk_array = [], x.hwvx_proto_world_idk)
    generate_id_offset_array(g.hwvx_proto_some_world_thing_array = [], x.hwvx_proto_some_world_thing)
    generate_id_offset_array(g.hwvx_proto_geo_list_array = [], x.hwvx_proto_geo_list)
    generate_id_offset_array(g.hwvx_proto_collision_settings_array = [], x.hwvx_proto_collision_settings)
    generate_id_offset_array(g.hwvx_proto_car_array = [], x.hwvx_proto_car)
    generate_id_offset_array(g.hwvx_proto_car_related_array = [], x.hwvx_proto_car_related)
    generate_id_offset_array(g.hwvx_proto_car_link_array = [], x.hwvx_proto_car_link)
    generate_id_offset_array(g.hwvx_proto_mysterious_array = [], x.hwvx_proto_mysterious)
    generate_id_offset_array(g.hwvx_proto_strange_array = [], x.hwvx_proto_strange)
    generate_id_offset_array(g.hwvx_proto_model_link_array = [], x.hwvx_proto_model_link)
    generate_id_offset_array(g.hwvx_proto_text_array = [], x.hwvx_proto_text)
    generate_id_offset_array(g.hwvx_proto_font_array = [], x.hwvx_proto_font)
    generate_id_offset_array(g.hwvx_proto_interface_array = [], x.hwvx_proto_interface)
    generate_id_offset_array(g.hwvx_proto_interface_text_related_array = [], x.hwvx_proto_interface_text_related)
    generate_id_offset_array(g.hwvx_proto_unknown_array = [], x.hwvx_proto_unknown)
    generate_id_offset_array(g.hwvx_proto_unknown_idk_sec_array = [], x.hwvx_proto_unknown_idk_sec)
    generate_id_offset_array(g.hwvx_proto_unknown_link_section_array = [], x.hwvx_proto_unknown_link_section)
    generate_id_offset_array(g.hwvx_proto_grand_section_array = [], x.hwvx_proto_grand_section)
    generate_id_offset_array(g.hwvx_proto_unknown_thing_array = [], x.hwvx_proto_unknown_thing)
    generate_id_offset_array(g.hwvx_proto_asdf_array = [], x.hwvx_proto_asdf)
    generate_id_offset_array(g.hwvx_proto_item_array = [], x.hwvx_proto_item)
    generate_id_offset_array(g.hwvx_proto_link_array = [], x.hwvx_proto_link)
    generate_id_offset_array(g.hwvx_proto_sound_controls_array = [], x.hwvx_proto_sound_controls)
    generate_id_offset_array(g.hwvx_proto_sound_section_array = [], x.hwvx_proto_sound_section)
    generate_id_offset_array(g.hwvx_proto_texture_anims_0_array = [], x.hwvx_proto_texture_anims_0)

}
function ex_hwvx_proto_ordered_list_layout(o) {

    if (g.ordered_ref.hwvx_proto_model.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_model, g.hwvx_proto_model_array, ex_hwvx_proto_model, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_texture_anims.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_texture_anims, g.hwvx_proto_texture_anims_array, ex_hwvx_proto_texture_anims, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_model_anims_1.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_model_anims_1, g.hwvx_proto_model_anims_1_array, ex_hwvx_proto_model_anims_1, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_model_anims_2.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_model_anims_2, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_texture.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_texture, g.hwvx_proto_texture_array, ex_hwvx_proto_texture, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_texture_data.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_texture_data, g.hwvx_proto_texture_data_array, ex_hwvx_proto_texture_data, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_color_table.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_color_table, g.hwvx_proto_color_table_array, ex_hwvx_proto_color_table, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_share_end.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_share_end, g.hwvx_proto_share_end_array, ex_hwvx_proto_share_end, e, g.m)
    }

    if (g.ordered_ref.hwvx_proto_texture_anims_0.length) {
        e = ex_ma(g.ordered_ref.hwvx_proto_texture_anims_0, g.hwvx_proto_texture_anims_0_array, ex_hwvx_proto_texture_anims_0, e, g.m)
    }

}

function ex_hwvx_proto_basic(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_basic_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_basic_4(o, x) {
    let e = o + 8
    su32(o + 4, x.u32_4)

    e = ex_hwvx_proto_ordered_list_layout(e)
    e = ex_s_offset(o + 0, e, ex_hwvx_proto_directory, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_geo_basic(o, x) {
    let e = o + 8

    if (x.section_0.length) {
        su32(o + ___$$$___, x.section_0.length)
        su32(o + 0, e - g.m)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_0.length * 12, 16)
        for (let i = 0; i < x.section_0.length; i++) {
            e = ex_hwvx_proto_geo_basic_0(temp_offset + (i * 12), e, x.section_0[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_geo_list_4, g.hwvx_proto_geo_list_array, ex_hwvx_proto_geo_list, g.unordered_ref.hwvx_proto_geo_list, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_geo_basic_0(o, e, x) {
    su32(o + 0, x.u32_0)
    ex_patch(o + 8, g.model_array, x.model_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_share(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world(o, x) {
    let e = o + 160
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    //amount?   su32(o +88, x.u32_88)
    //amount?   su32(o +96, x.u32_96)
    //amount?   su32(o +104, x.u32_104)
    //amount?   su32(o +112, x.u32_112)

    e = ex_ml(x.unordered_hwvx_proto_world_4_4, g.hwvx_proto_world_4_array, ex_hwvx_proto_world_4, g.unordered_ref.hwvx_proto_world_4, o + 4, e, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 96, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_world_12(temp_offset + (i * 96), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_world_20_20, g.hwvx_proto_world_20_array, ex_hwvx_proto_world_20, g.unordered_ref.hwvx_proto_world_20, o + 20, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_36_36, g.hwvx_proto_world_36_array, ex_hwvx_proto_world_36, g.unordered_ref.hwvx_proto_world_36, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_44_44, g.hwvx_proto_world_44_array, ex_hwvx_proto_world_44, g.unordered_ref.hwvx_proto_world_44, o + 44, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_52_52, g.hwvx_proto_world_52_array, ex_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52, o + 52, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_76_76, g.hwvx_proto_world_76_array, ex_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76, o + 76, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_76_84, g.hwvx_proto_world_76_array, ex_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76, o + 84, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_92_92, g.hwvx_proto_world_92_array, ex_hwvx_proto_world_92, g.unordered_ref.hwvx_proto_world_92, o + 92, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_100_100, g.hwvx_proto_world_100_array, ex_hwvx_proto_world_100, g.unordered_ref.hwvx_proto_world_100, o + 100, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_108_108, g.hwvx_proto_world_108_array, ex_hwvx_proto_world_108, g.unordered_ref.hwvx_proto_world_108, o + 108, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_116_116, g.hwvx_proto_world_116_array, ex_hwvx_proto_world_116, g.unordered_ref.hwvx_proto_world_116, o + 116, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_120_120, g.hwvx_proto_world_120_array, ex_hwvx_proto_world_120, g.unordered_ref.hwvx_proto_world_120, o + 120, e, 'down');
    e = ex_string(o + 124, e, x.section_124)
    e = ex_string(o + 132, e, x.section_132)
    e = ex_string(o + 140, e, x.section_140)
    e = ex_ml(x.unordered_hwvx_proto_world_settings_156, g.hwvx_proto_world_settings_array, ex_hwvx_proto_world_settings, g.unordered_ref.hwvx_proto_world_settings, o + 156, e, 'down');

    e = ex_hwvx_proto_ordered_list_layout(e)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_12(o, e, x) {
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
    su32(o + 80, x.u32_80)
    su32(o + 92, x.u32_92)

    e = ex_ml(x.unordered_hwvx_proto_world_idk_64, g.hwvx_proto_world_idk_array, ex_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk, o + 64, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_idk_68, g.hwvx_proto_world_idk_array, ex_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk, o + 68, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_idk_72, g.hwvx_proto_world_idk_array, ex_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk, o + 72, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_idk_76, g.hwvx_proto_world_idk_array, ex_hwvx_proto_world_idk, g.unordered_ref.hwvx_proto_world_idk, o + 76, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_20(o, e, x) {
    su32(o + 0, x.u32_0)
    sf32(o + 8, x.f32_8)

    e = ex_ml(x.unordered_hwvx_proto_model_anims_1_4, g.hwvx_proto_model_anims_1_array, ex_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1, o + 4, e, 'down');
    e = ex_s_offset(o + 12, e, ex_hwvx_proto_world_20_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_20_12(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.model_array, x.model_0)
    su8(o + 5, x.u8_5)
    su8(o + 7, x.u8_7)
    sf32(o + 8, x.f32_8)

    e = ex_ml(x.unordered_hwvx_proto_car_link_16, g.hwvx_proto_car_link_array, ex_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_36(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 12, x.u32_12)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    e = ex_ml(x.unordered_hwvx_proto_world_36_28_28, g.hwvx_proto_world_36_28_array, ex_hwvx_proto_world_36_28, g.unordered_ref.hwvx_proto_world_36_28, o + 28, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_36_36_36, g.hwvx_proto_world_36_36_array, ex_hwvx_proto_world_36_36, g.unordered_ref.hwvx_proto_world_36_36, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_36_48_48, g.hwvx_proto_world_36_48_array, ex_hwvx_proto_world_36_48, g.unordered_ref.hwvx_proto_world_36_48, o + 48, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_36_36(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_36_48(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_s_offset(o + 8, e, ex_hwvx_proto_world_36_48_8, x.section_8, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_proto_world_36_48_16, x.section_16, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_proto_world_36_48_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_36_48_16(o, x) {
    let e = o + 64
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
    su32(o + 56, x.u32_56)

    e = ex_ml(x.unordered_hwvx_proto_strange_36, g.hwvx_proto_strange_array, ex_hwvx_proto_strange, g.unordered_ref.hwvx_proto_strange, o + 36, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_36_28(o, e, x) {
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
function ex_hwvx_proto_world_36_48_8(o, e, x) {
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
    su32(o + 52, x.u32_52)

    e = ex_s_offset(o + 36, e, ex_hwvx_proto_world_model_related, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_36_48_24(o, e, x) {
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
function ex_hwvx_proto_world_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)

    e = ex_ml(x.unordered_hwvx_proto_sound_section_20, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_116(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_76(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_small_section, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_52(o, e, x) {
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
        e = ex_ml(x.section_88, g.hwvx_proto_world_52_array, ex_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52, o + 88, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 88, e, ex_hwvx_proto_world_52_88t1, x.section_88, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_52_88t1(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_92(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_world_text_link_4, g.hwvx_proto_world_text_link_array, ex_hwvx_proto_world_text_link, g.unordered_ref.hwvx_proto_world_text_link, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_100(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_proto_world_color_section_4, g.hwvx_proto_world_color_section_array, ex_hwvx_proto_world_color_section, g.unordered_ref.hwvx_proto_world_color_section, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_108(o, e, x) {
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

    e = ex_s_offset(o + 40, e, ex_hwvx_proto_world_108_40, x.section_40, 'down');
    switch (x.u32_12) {
    case 1:
        e = ex_s_offset(o + 44, e, ex_hwvx_proto_world_108_44t1, x.section_44, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 44, e, ex_hwvx_proto_world_108_44t2, x.section_44, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 44, e, ex_hwvx_proto_world_108_44t3, x.section_44, 'down');
        break;
    case 6:
        e = ex_ml(x.section_44, g.hwvx_proto_world_108_44t6_array, ex_hwvx_proto_world_108_44t6, g.unordered_ref.hwvx_proto_world_108_44t6, o + 44, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_108_40(o, x) {
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
function ex_hwvx_proto_world_108_44t1(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_108_44t2(o, x) {
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
function ex_hwvx_proto_world_108_44t3(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_108_44t6(o, x) {
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
    su32(o + 24, x.u32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_4(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
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
            e = ex_hwvx_proto_world_4_16(temp_offset + (i * 56), e, x.section_16[i])
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
            e = ex_hwvx_proto_world_4_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_4_20(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_4_16(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +48, x.u32_48)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_world_4_16_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 12, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_world_4_16_4(temp_offset + (i * 4), e, x.section_12[i])
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
            e = ex_hwvx_proto_world_4_16_4(temp_offset + (i * 4), e, x.section_20[i])
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
            e = ex_hwvx_proto_world_4_16_4(temp_offset + (i * 4), e, x.section_28[i])
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
            e = ex_hwvx_proto_world_4_16_4(temp_offset + (i * 4), e, x.section_52[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_4_16_4(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_world_108_0, g.hwvx_proto_world_108_array, ex_hwvx_proto_world_108, g.unordered_ref.hwvx_proto_world_108, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_120(o, x) {
    let e = o + 16
    //amount?   su32(o +4, x.u32_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)

    e = ex_ml(x.unordered_hwvx_proto_world_120_0_0, g.hwvx_proto_world_120_0_array, ex_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_120_0(o, e, x) {
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
    su32(o + 68, x.u32_68)
    su32(o + 72, x.u32_72)
    sf32(o + 76, x.f32_76)
    su32(o + 80, x.u32_80)
    su8(o + 85, x.u8_85)
    su8(o + 86, x.u8_86)
    su8(o + 87, x.u8_87)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision(o, x) {
    let e = o + 96
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 36, x.u32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    //amount?   su32(o +52, x.u32_52)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +60, x.u32_60)
    //amount?   su32(o +68, x.u32_68)
    //amount?   su32(o +72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    su32(o + 88, x.u32_88)

    if (x.section_32.length) {
        su32(o + 68, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 80, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_hwvx_proto_collision_32(temp_offset + (i * 80), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_collision_64_64, g.hwvx_proto_collision_64_array, ex_hwvx_proto_collision_64, g.unordered_ref.hwvx_proto_collision_64, o + 64, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_collision_76_76, g.hwvx_proto_collision_76_array, ex_hwvx_proto_collision_76, g.unordered_ref.hwvx_proto_collision_76, o + 76, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_collision_84_84, g.hwvx_proto_collision_84_array, ex_hwvx_proto_collision_84, g.unordered_ref.hwvx_proto_collision_84, o + 84, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_collision_link_92, g.hwvx_proto_collision_link_array, ex_hwvx_proto_collision_link, g.unordered_ref.hwvx_proto_collision_link, o + 92, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_32(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    //amount?   su32(o +60, x.u32_60)
    su32(o + 64, x.u32_64)

    e = ex_ml(x.unordered_hwvx_proto_collision_32_48_48, g.hwvx_proto_collision_32_48_array, ex_hwvx_proto_collision_32_48, g.unordered_ref.hwvx_proto_collision_32_48, o + 48, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_collision_32_56_56, g.hwvx_proto_collision_32_56_array, ex_hwvx_proto_collision_32_56, g.unordered_ref.hwvx_proto_collision_32_56, o + 56, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_collision_32_48_68, g.hwvx_proto_collision_32_48_array, ex_hwvx_proto_collision_32_48, g.unordered_ref.hwvx_proto_collision_32_48, o + 68, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_32_48(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
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
function ex_hwvx_proto_collision_32_56(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_64(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_76(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 16, e, ex_hwvx_proto_collision_76_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_76_16(o, x) {
    let e = o + 48
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

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_84(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)
    su8(o + 43, x.u8_43)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)
    su8(o + 46, x.u8_46)
    su8(o + 47, x.u8_47)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_link(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_collision_settings, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_proto_collision_settings, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 40, x.u32_40)

    switch (x.u32_8) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_4t1, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_4t3, x.section_4, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_4t5, x.section_4, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_4t6, x.section_4, 'down');
        break;
    case "rest":
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_4trest, x.section_4, 'down');
        break;
    }
    e = ex_s_offset(o + 12, e, ex_hwvx_proto_triggers_and_actions_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_hwvx_proto_triggers_and_actions_20, x.section_20, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_proto_triggers_and_actions_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_4t1(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_interface_0, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_4t3(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_4t5(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)

    //  e = ex_s_offset(o + 4, e, ex_hwvx_proto_world_36_48_24,x.section_4, 'down');
    // switch(x.u32_16){
    //     case hwvx_proto_world_12</a><br>:
    //     e = ex_ml(x.section_12,g.hwvx_proto_world_12_array ,ex_hwvx_proto_world_12,g.unordered_ref.hwvx_proto_world_12, o + 12, e, 'down');
    //     break;
    //     case hwvx_proto_world_36_48_24</a><br>:
    //     e = ex_ml(x.section_12,g.hwvx_proto_world_36_48_24_array ,ex_hwvx_proto_world_36_48_24,g.unordered_ref.hwvx_proto_world_36_48_24, o + 12, e, 'down');
    //     break;
    // }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_4t6(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 20, x.f32_20)

    e = ex_ml(x.unordered_hwvx_proto_world_12_12, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_4trest(o, x) {
    let e = o + 4
    //amount?   su32(o +0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_12(o, x) {
    let e = o + ([0] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_36_48, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_12_4(o, x) {
    let e = o + 4
    //amount?   su32(o +0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20(o, x) {
    let e = o + ([0] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_12, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t0(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_12_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t1t12(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)

    e = ex_ml(x.unordered_hwvx_proto_triggers_and_actions_12_4_4_4, g.hwvx_proto_triggers_and_actions_12_4_4_array, ex_hwvx_proto_triggers_and_actions_12_4_4, g.unordered_ref.hwvx_proto_triggers_and_actions_12_4_4, o + 4, e, 'down');
    switch (x.u32_16) {
    case 0:
        e = ex_ml(x.section_12, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 12, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t1t13(o, e, x) {
    su32(o + 0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    su32(o + 12, x.u32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su32(o + 20, x.u32_20)

    switch (x.u32_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t0, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t1t12, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t1t13, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t1t16, x.section_4, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t2, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t3, x.section_4, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t4, x.section_4, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t5, x.section_4, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t6, x.section_4, 'down');
        break;
    case 7:
    case 16:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t7, x.section_4, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t8, x.section_4, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t9, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t10t10, x.section_4, 'down');
        break;
    case [8]:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t10t20, x.section_4, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t12, x.section_4, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t15, x.section_4, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t17, x.section_4, 'down');
        break;
    case 20:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t20, x.section_4, 'down');
        break;
    case 21:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t21, x.section_4, 'down');
        break;
    case 22:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t22, x.section_4, 'down');
        break;
    case 24:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t24, x.section_4, 'down');
        break;
    case 26:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t26, x.section_4, 'down');
        break;
    case 31:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t31, x.section_4, 'down');
        break;
    case 32:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t32, x.section_4, 'down');
        break;
    case 34:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t34, x.section_4, 'down');
        break;
    case 36:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t36, x.section_4, 'down');
        break;
    case 38:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t38, x.section_4, 'down');
        break;
    case 39:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_triggers_and_actions_20_4t39, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t1t16(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t2(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_108, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t3(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    //?
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    su32(o + 24, x.u32_24)
    sf32(o + 36, x.f32_36)
    su32(o + 44, x.u32_44)

    switch (x.u32_4) {
    case 1:
        e = ex_ml(x.section_8, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 8, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_8, g.hwvx_proto_world_120_0_array, ex_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0, o + 8, e, 'down');
        break;
    }
    switch (x.u32_24) {
    case 1:
        e = ex_ml(x.section_28, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 28, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_28, g.hwvx_proto_world_36_48_8_array, ex_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8, o + 28, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_28, g.hwvx_proto_world_120_0_array, ex_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0, o + 28, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t4(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 48, x.u32_48)

    switch (x.u32_8) {
    case 1:
        e = ex_ml(x.section_12, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 12, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_12, g.hwvx_proto_world_36_48_8_array, ex_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8, o + 12, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_12, g.hwvx_proto_world_120_0_array, ex_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0, o + 12, e, 'down');
        break;
    }
    switch (x.u32_28) {
    case 1:
        e = ex_ml(x.section_32, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 32, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_32, g.hwvx_proto_world_36_48_8_array, ex_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8, o + 32, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_32, g.hwvx_proto_world_120_0_array, ex_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0, o + 32, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t5(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    su32(o + 40, x.u32_40)
    sf32(o + 52, x.f32_52)
    su32(o + 60, x.u32_60)

    switch (x.u32_20) {
    case 1:
        e = ex_ml(x.section_24, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 24, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_24, g.hwvx_proto_world_36_48_8_array, ex_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8, o + 24, e, 'down');
        break;
    }
    switch (x.u32_40) {
    case 1:
        e = ex_ml(x.section_44, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 44, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_44, g.hwvx_proto_world_36_48_8_array, ex_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8, o + 44, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t6(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t7(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_36_48_8, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t8(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t9(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_36_48_8, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t10t10(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_interface_0, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t10t20(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t12(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_36_48_24, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t15(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t17(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 16, x.f32_16)

    e = ex_ml(x.unordered_hwvx_proto_world_76_8, g.hwvx_proto_world_76_array, ex_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t20(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_proto_world_76_12, g.hwvx_proto_world_76_array, ex_hwvx_proto_world_76, g.unordered_ref.hwvx_proto_world_76, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t21(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)

    e = ex_ml(x.unordered_hwvx_proto_world_20_20, g.hwvx_proto_world_20_array, ex_hwvx_proto_world_20, g.unordered_ref.hwvx_proto_world_20, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t22(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t24(o, x) {
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
function ex_hwvx_proto_triggers_and_actions_20_4t26(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t31(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_120_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t32(o, x) {
    let e = o + [8] * 4
    su32(o + 0, x.u32_0)
    //?

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_4, g.hwvx_proto_world_36_48_8_array, ex_hwvx_proto_world_36_48_8, g.unordered_ref.hwvx_proto_world_36_48_8, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_4, g.hwvx_proto_world_36_48_24_array, ex_hwvx_proto_world_36_48_24, g.unordered_ref.hwvx_proto_world_36_48_24, o + 4, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_4, g.hwvx_proto_world_120_0_array, ex_hwvx_proto_world_120_0, g.unordered_ref.hwvx_proto_world_120_0, o + 4, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t34(o, x) {
    let e = o + 8
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t36(o, x) {
    let e = o + ([4] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_120_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t38(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_proto_text_8, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_20_4t39(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_ml(x.unordered_hwvx_proto_world_52_4, g.hwvx_proto_world_52_array, ex_hwvx_proto_world_52, g.unordered_ref.hwvx_proto_world_52, o + 4, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_world_12_12, g.hwvx_proto_world_12_array, ex_hwvx_proto_world_12, g.unordered_ref.hwvx_proto_world_12, o + 12, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_24(o, x) {
    let e = o + 12
    su32(o + 0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_triggers_and_actions_24_4(o, x) {
    let e = o + ([8] * 4)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_12, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_hwvx_proto_models(o, x) {
    let e = o + 64
    su16(o + 0, x.u16_0)
    //amount?   su16(o +2, x.u16_2)
    su32(o + 4, x.u32_4)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)

    if (x.section_8.length) {
        su32(o + 2, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 24, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_model_8(temp_offset + (i * 24), e, x.section_8[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 2, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_model_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8(o, e, x) {
    su8(o + 0, x.u8_0)
    //amount?   su8(o +2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)

    globalThis.model_type = x.u32_4

    if (x.section_8.length) {
        su32(o + 2, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 32, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_model_8_8(temp_offset + (i * 32), e, x.section_8[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_model_string_20, g.hwvx_proto_model_string_array, ex_hwvx_proto_model_string, g.unordered_ref.hwvx_proto_model_string, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_12(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8_8(o, e, x) {
    ex_patch(o + 0, g.animation_patch_array, x.animation_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    su32(o + 28, x.u32_28)

    switch (model_type) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_model_8_8_12t0, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_model_8_8_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_model_8_8_12t8, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8_8_12t0(o, x) {
    let e = o + 72
    su16(o + 16, x.u16_16)
    su8(o + 19, x.u8_19)
    su8(o + 35, x.u8_35)
    su8(o + 36, x.u8_36)
    su8(o + 37, x.u8_37)
    su8(o + 39, x.u8_39)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 43, x.u8_43)
    su8(o + 45, x.u8_45)
    su8(o + 46, x.u8_46)
    su8(o + 47, x.u8_47)
    su8(o + 48, x.u8_48)
    su8(o + 49, x.u8_49)
    su8(o + 53, x.u8_53)
    su8(o + 54, x.u8_54)
    su8(o + 55, x.u8_55)
    su16(o + 56, x.u16_56)
    su8(o + 64, x.u8_64)
    su8(o + 65, x.u8_65)
    su8(o + 67, x.u8_67)
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    //amount?   su8(o +70, x.u8_70)
    su8(o + 71, x.u8_71)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8_8_12t7(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    e = ex_s_offset(o + 20, e, ex_hwvx_proto_model_8_8_12t7_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8_8_12t8(o, x) {
    let e = o + 48
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 32, x.u32_32)

    e = ex_s_offset(o + 20, e, ex_hwvx_proto_model_8_8_12t7_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_proto_model_8_8_12t7_20, x.section_28, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_proto_model_8_8_12t7_20, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8_8_12t7_20(o, x) {
    let e = o + 56
    su16(o + 0, x.u16_0)
    su16(o + 2, x.u16_2)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    su8(o + 48, x.u8_48)
    su8(o + 49, x.u8_49)
    su8(o + 51, x.u8_51)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su8(o + 55, x.u8_55)

    if (x.section_54.length) {
        // su32(o + ___$$$___, x.section_54.length)
        su32(o + 54, e - g.m)
        g.oa.push(o + 54)
        let temp_offset = e
        e += divisible(x.section_54.length * 16, 16)
        for (let i = 0; i < x.section_54.length; i++) {
            e = ex_hwvx_proto_model_8_8_12_modeldata(temp_offset + (i * 16), e, x.section_54[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_8_8_12_modeldata(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture_anims(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_texture_anims_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_1(o, x) {
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

    e = ex_s_offset(o + 24, e, ex_hwvx_proto_model_anims_1_24, x.section_24, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_proto_model_anims_1_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_model_anims_1_32, x.section_32, 'down');
    if (x.section_36.length) {
        su32(o + 48, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 16, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_proto_model_anims_1_36(temp_offset + (i * 16), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 16, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 24, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_hwvx_proto_model_anims_1_44(temp_offset + (i * 24), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_1_24(o, x) {
    let e = o + 8
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_1_28(o, x) {
    let e = o + 0
    su16(o + 0, x.u16_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_1_32(o, x) {
    let e = o + 16 + sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_1_36(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_1_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_2(o, x) {
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
            e = ex_hwvx_proto_model_anims_2_16(temp_offset + (i * 32), e, x.section_16[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_anims_2_16(o, e, x) {
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

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture(o, e, x) {
    su16(o + 0, x.u16_0)
    //?
    su16(o + 2, x.u16_2)
    su16(o + 4, x.u16_4)
    su16(o + 6, x.u16_6)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_hwvx_proto_texture_data_8, g.hwvx_proto_texture_data_array, ex_hwvx_proto_texture_data, g.unordered_ref.hwvx_proto_texture_data, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_share_end(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_share_end_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_share_end_8(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_color_section(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_world_color_section_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_color_section_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_text_link(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_hwvx_proto_world_small_section, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_proto_world_small_section, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_hwvx_proto_text, x.section_20, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_proto_text, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings(o, x) {
    let e = o + 304
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su8(o + 33, x.u8_33)
    su8(o + 34, x.u8_34)
    su8(o + 35, x.u8_35)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
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
    //amount?   su32(o +232, x.u32_232)
    //amount?   su32(o +240, x.u32_240)
    //amount?   su32(o +248, x.u32_248)
    //amount?   su32(o +256, x.u32_256)

    // e = ex_s_offset(o + 156, e, ex_hwvx_proto_world,x.section_156, 'down');
    e = ex_string(o + 160, e, x.section_160)
    e = ex_string(o + 164, e, x.section_164)
    e = ex_s_offset(o + 192, e, ex_hwvx_proto_world_settings_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_hwvx_proto_world_settings_196, x.section_196, 'down');
    e = ex_ml(x.unordered_hwvx_proto_font_200, g.hwvx_proto_font_array, ex_hwvx_proto_font, g.unordered_ref.hwvx_proto_font, o + 200, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_interface_204, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 204, e, 'down');
    e = ex_s_offset(o + 224, e, ex_hwvx_proto_world_settings_224, x.section_224, 'down');
    e = ex_s_offset(o + 228, e, ex_hwvx_proto_world_settings_228, x.section_228, 'down');
    if (x.section_236.length) {
        su32(o + 232, x.section_236.length)
        su32(o + 236, e - g.m)
        g.oa.push(o + 236)
        let temp_offset = e
        e += divisible(x.section_236.length * 4, 16)
        for (let i = 0; i < x.section_236.length; i++) {
            e = ex_hwvx_proto_world_settings_236(temp_offset + (i * 4), e, x.section_236[i])
        }
        ;
    }
    ;if (x.section_244.length) {
        su32(o + 240, x.section_244.length)
        su32(o + 244, e - g.m)
        g.oa.push(o + 244)
        let temp_offset = e
        e += divisible(x.section_244.length * 4, 16)
        for (let i = 0; i < x.section_244.length; i++) {
            e = ex_hwvx_proto_world_settings_244(temp_offset + (i * 4), e, x.section_244[i])
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
            e = ex_hwvx_proto_world_settings_244(temp_offset + (i * 4), e, x.section_252[i])
        }
        ;
    }
    ;if (x.section_260.length) {
        su32(o + 256, x.section_260.length)
        su32(o + 260, e - g.m)
        g.oa.push(o + 260)
        let temp_offset = e
        e += divisible(x.section_260.length * 12, 16)
        for (let i = 0; i < x.section_260.length; i++) {
            e = ex_hwvx_proto_world_settings_260(temp_offset + (i * 12), e, x.section_260[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_192(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_196(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    sf32(o + 20, x.f32_20)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 28, e, ex_hwvx_proto_world_settings_196_28, x.section_28, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_controls_32, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_196_28(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_224(o, x) {
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
function ex_hwvx_proto_world_settings_228(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_236(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_world_settings_236_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_236_0(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 20, x.f32_20)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 28, e, ex_hwvx_proto_world_settings_236_0_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_236_0_28(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_244(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_260(o, e, x) {
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_world_settings_260_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_settings_260_4(o, x) {
    let e = o + 32
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su8(o + 22, x.u8_22)
    su8(o + 23, x.u8_23)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_small_section(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    e = ex_s_offset(o + 12, e, ex_hwvx_proto_world_small_section_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_small_section_12(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_model_related(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    sf32(o + 8, x.f32_8)
    //amount?   su32(o +24, x.u32_24)

    switch (x.u8_4) {
    case 1:
        e = ex_ml(x.section_0, g.hwvx_proto_model_link_array, ex_hwvx_proto_model_link, g.unordered_ref.hwvx_proto_model_link, o + 0, e, 'down');
        break;
    }

    switch (x.u8_4) {
    case 1:
        e = ex_ml(x.section_0, g.hwvx_proto_model_link_array, ex_hwvx_proto_model_link, g.unordered_ref.hwvx_proto_model_link, o + 0, e, 'down');
        break;
    }
    e = ex_ml(x.unordered_hwvx_proto_sound_controls_12, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 12, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_car_link_16, g.hwvx_proto_car_link_array, ex_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_20, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 20, e, 'down');
    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 64, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_idk(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    su32(o + 32, x.u32_32)
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
            e = ex_hwvx_proto_world_idk_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_idk_48(o, e, x) {
    //amount?   su32(o +4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_proto_some_world_thing_0, g.hwvx_proto_some_world_thing_array, ex_hwvx_proto_some_world_thing, g.unordered_ref.hwvx_proto_some_world_thing, o + 0, e, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_world_idk_48_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_world_idk_48_8(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_some_world_thing_0, g.hwvx_proto_some_world_thing_array, ex_hwvx_proto_some_world_thing, g.unordered_ref.hwvx_proto_some_world_thing, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_some_world_thing(o, x) {
    let e = o + 128
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 44, x.u32_44)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su32(o + 60, x.u32_60)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)
    su32(o + 72, x.u32_72)
    su32(o + 76, x.u32_76)

    e = ex_s_offset(o + 88, e, ex_hwvx_proto_some_world_thing_88, x.section_88, 'down');
    e = ex_string(o + 116, e, x.section_116)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_some_world_thing_88(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_geo_list(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_geo_list_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_geo_list_4(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    s32(o + 16, x.u32_16)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_geo_list_4_4, x.section_4, 'down');
    if (x.section_8.length) {
        su32(o + 0, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_geo_list_4_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_geo_list_4_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_geo_list_4_8(o, e, x) {
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_settings(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_0)
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

    e = ex_ml(x.unordered_hwvx_proto_unknown_48, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 48, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_thing_52, g.hwvx_proto_unknown_thing_array, ex_hwvx_proto_unknown_thing, g.unordered_ref.hwvx_proto_unknown_thing, o + 52, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_60, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 60, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_64, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 64, e, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 4, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_hwvx_proto_collision_settings_72(temp_offset + (i * 4), e, x.section_72[i])
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
            e = ex_hwvx_proto_collision_settings_72(temp_offset + (i * 4), e, x.section_80[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_collision_settings_72(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car(o, x) {
    let e = o + 288
    su32(o + 16, x.u32_16)
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
    su32(o + 240, x.u32_240)
    su32(o + 248, x.u32_248)
    su32(o + 256, x.u32_256)
    su32(o + 264, x.u32_264)
    //amount?   su32(o +280, x.u32_280)

    e = ex_ml(x.unordered_hwvx_proto_model_anims_1_72, g.hwvx_proto_model_anims_1_array, ex_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1, o + 72, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_76, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 76, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_section_92, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 92, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_section_96, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 96, e, 'down');
    e = ex_s_offset(o + 108, e, ex_hwvx_proto_car_108, x.section_108, 'down');
    e = ex_s_offset(o + 120, e, ex_hwvx_proto_car_120, x.section_120, 'down');
    e = ex_s_offset(o + 124, e, ex_hwvx_proto_car_124, x.section_124, 'down');
    e = ex_s_offset(o + 128, e, ex_hwvx_proto_car_128, x.section_128, 'down');
    e = ex_s_offset(o + 132, e, ex_hwvx_proto_car_132, x.section_132, 'down');
    e = ex_s_offset(o + 136, e, ex_hwvx_proto_car_136, x.section_136, 'down');
    e = ex_s_offset(o + 140, e, ex_hwvx_proto_car_140, x.section_140, 'down');
    e = ex_ml(x.unordered_hwvx_proto_car_related_144, g.hwvx_proto_car_related_array, ex_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related, o + 144, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_car_related_148, g.hwvx_proto_car_related_array, ex_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related, o + 148, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_car_related_152, g.hwvx_proto_car_related_array, ex_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related, o + 152, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_car_related_156, g.hwvx_proto_car_related_array, ex_hwvx_proto_car_related, g.unordered_ref.hwvx_proto_car_related, o + 156, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_car_link_160, g.hwvx_proto_car_link_array, ex_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link, o + 160, e, 'down');
    e = ex_s_offset(o + 164, e, ex_hwvx_proto_car_164, x.section_164, 'down');
    e = ex_s_offset(o + 172, e, ex_hwvx_proto_car_172, x.section_172, 'down');
    if (x.section_212.length) {
        su32(o + 208, x.section_212.length)
        su32(o + 212, e - g.m)
        g.oa.push(o + 212)
        let temp_offset = e
        e += divisible(x.section_212.length * 80, 16)
        for (let i = 0; i < x.section_212.length; i++) {
            e = ex_hwvx_proto_car_212(temp_offset + (i * 80), e, x.section_212[i])
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
            e = ex_hwvx_proto_car_220(temp_offset + (i * 8), e, x.section_220[i])
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
            e = ex_hwvx_proto_car_228(temp_offset + (i * 12), e, x.section_228[i])
        }
        ;
    }
    ;if (x.section_236.length) {
        su32(o + 236, x.section_236.length)
        su32(o + 236, e - g.m)
        g.oa.push(o + 236)
        let temp_offset = e
        e += divisible(x.section_236.length * 12, 16)
        for (let i = 0; i < x.section_236.length; i++) {
            e = ex_hwvx_proto_car_228(temp_offset + (i * 12), e, x.section_236[i])
        }
        ;
    }
    ;if (x.section_244.length) {
        su32(o + 240, x.section_244.length)
        su32(o + 244, e - g.m)
        g.oa.push(o + 244)
        let temp_offset = e
        e += divisible(x.section_244.length * 12, 16)
        for (let i = 0; i < x.section_244.length; i++) {
            e = ex_hwvx_proto_car_228(temp_offset + (i * 12), e, x.section_244[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 252, e, ex_hwvx_proto_car_252, x.section_252, 'down');
    e = ex_s_offset(o + 260, e, ex_hwvx_proto_car_260, x.section_260, 'down');
    e = ex_s_offset(o + 268, e, ex_hwvx_proto_car_268, x.section_268, 'down');
    if (x.section_284.length) {
        su32(o + 280, x.section_284.length)
        su32(o + 284, e - g.m)
        g.oa.push(o + 284)
        let temp_offset = e
        e += divisible(x.section_284.length * 8, 16)
        for (let i = 0; i < x.section_284.length; i++) {
            e = ex_hwvx_proto_car_220(temp_offset + (i * 8), e, x.section_284[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_108(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_120(o, x) {
    let e = o + 112
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 36, x.u32_36)

    e = ex_ml(x.unordered_hwvx_proto_model_link_16, g.hwvx_proto_model_link_array, ex_hwvx_proto_model_link, g.unordered_ref.hwvx_proto_model_link, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_124(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_128(o, x) {
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

    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_96, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 96, e, 'down');
    if (x.section_132.length) {
        su32(o + 128, x.section_132.length)
        su32(o + 132, e - g.m)
        g.oa.push(o + 132)
        let temp_offset = e
        e += divisible(x.section_132.length * 12, 16)
        for (let i = 0; i < x.section_132.length; i++) {
            e = ex_hwvx_proto_car_128_132(temp_offset + (i * 12), e, x.section_132[i])
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
            e = ex_hwvx_proto_car_128_132(temp_offset + (i * 12), e, x.section_140[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_128_132(o, e, x) {
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_car_128_132_4t1, x.section_4, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_car_128_132_4t2, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_car_128_132_4t3, x.section_4, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_car_128_132_4t4, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_128_132_4t1(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_128_132_4t2(o, x) {
    let e = o + 32
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_128_132_4t3(o, x) {
    let e = o + 32
    sf32(o + 4, x.f32_4)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_128_132_4t4(o, x) {
    let e = o + 32
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_132(o, x) {
    let e = o + 64
    su32(o + 52, x.u32_52)

    e = ex_ml(x.unordered_hwvx_proto_interface_16, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_interface_24, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 24, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_interface_28, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 28, e, 'down');
    e = ex_s_offset(o + 44, e, ex_hwvx_proto_car_132_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_132_44(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_136(o, x) {
    let e = o + 80
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
function ex_hwvx_proto_car_140(o, x) {
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
    su32(o + 76, x.u32_76)
    sf32(o + 84, x.f32_84)

    if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 4, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_hwvx_proto_car_140_56(temp_offset + (i * 4), e, x.section_56[i])
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
            e = ex_hwvx_proto_car_140_64(temp_offset + (i * 4), e, x.section_64[i])
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
            e = ex_hwvx_proto_car_140_56(temp_offset + (i * 4), e, x.section_80[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_140_56(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_140_64(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_text_0, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_164(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_proto_car_164_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_164_8(o, x) {
    let e = o + 48
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_172(o, x) {
    let e = o + 48
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_212(o, e, x) {
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
    su8(o + 60, x.u8_60)
    su8(o + 62, x.u8_62)
    su8(o + 63, x.u8_63)
    su8(o + 64, x.u8_64)
    su8(o + 66, x.u8_66)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_220(o, e, x) {
    sf32(o + 0, x.f32_0)

    e = ex_ml(x.unordered_hwvx_proto_sound_section_4, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 4, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_228(o, e, x) {
    //amount?   su32(o +4, x.u32_4)

    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_0, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 0, e, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 64, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_252(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_car_252_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_252_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_car_252_4_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_252_4_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_260(o, x) {
    let e = o + 80
    su32(o + 52, x.u32_52)

    e = ex_s_offset(o + 56, e, ex_hwvx_proto_car_260_56, x.section_56, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_260_56(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_268(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_related(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
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
            e = ex_hwvx_proto_car_related_48(temp_offset + (i * 12), e, x.section_48[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_related_48(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_car_related_48_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_related_48_0(o, x) {
    let e = o + 128
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 52, x.u32_52)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)
    su32(o + 116, x.u32_116)
    //?

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_link(o, x) {
    let e = o + 80
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
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

    e = ex_s_offset(o + 48, e, ex_hwvx_proto_car_link_48, x.section_48, 'down');
    if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 4, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_hwvx_proto_car_link_56(temp_offset + (i * 4), e, x.section_56[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 64, e, ex_hwvx_proto_car_link_64, x.section_64, 'down');
    e = ex_s_offset(o + 68, e, ex_hwvx_proto_car_link_68, x.section_68, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_link_48(o, x) {
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

    e = ex_ml(x.unordered_hwvx_proto_unknown_48, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 48, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_section_60, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 60, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_64, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 64, e, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 4, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_hwvx_proto_car_link_48_72(temp_offset + (i * 4), e, x.section_72[i])
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
            e = ex_hwvx_proto_car_link_48_72(temp_offset + (i * 4), e, x.section_80[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_link_48_72(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_link_56(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_link_64(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_car_link_68(o, x) {
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
function ex_hwvx_proto_mysterious(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    sf32(o + 20, x.f32_20)

    switch (x.u8_16) {
    case 1:
        e = ex_ml(x.section_24, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 24, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_24, g.hwvx_proto_strange_array, ex_hwvx_proto_strange, g.unordered_ref.hwvx_proto_strange, o + 24, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_24, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 24, e, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 24, e, ex_hwvx_proto_mysterious_24t5, x.section_24, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 24, e, ex_hwvx_proto_mysterious_24t6, x.section_24, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 24, e, ex_hwvx_proto_mysterious_24t7, x.section_24, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 24, e, ex_hwvx_proto_mysterious_24t9, x.section_24, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t5(o, x) {
    let e = o + 48
    ex_patch(o + 8, g.model_array, x.model_8)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)

    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 32, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_proto_mysterious_24t5_24(temp_offset + (i * 32), e, x.section_24[i])
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
            e = ex_hwvx_proto_mysterious_24t5_32(temp_offset + (i * 12), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 44, e, ex_hwvx_proto_mysterious_24t5_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t5_24(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t5_32(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t5_44(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t6(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    ex_patch(o + 8, g.texture_patch_array, x.texture_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)
    su32(o + 28, x.u32_28)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 32, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_proto_mysterious_24t6_16(temp_offset + (i * 32), e, x.section_16[i])
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
            e = ex_hwvx_proto_mysterious_24t6_24(temp_offset + (i * 32), e, x.section_24[i])
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
            e = ex_hwvx_proto_mysterious_24t6_32(temp_offset + (i * 12), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 36, e, ex_hwvx_proto_mysterious_24t6_36, x.section_36, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t6_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t6_24(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t6_32(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t6_36(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t7(o, x) {
    let e = o + 96
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
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
            e = ex_hwvx_proto_mysterious_24t7_72(temp_offset + (i * 12), e, x.section_72[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 80, e, ex_hwvx_proto_mysterious_24t7_80, x.section_80, 'down');
    e = ex_s_offset(o + 88, e, ex_hwvx_proto_mysterious_24t7_88, x.section_88, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t7_72(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t7_80(o, x) {
    let e = o + 12

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t7_88(o, x) {
    let e = o + 16
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t9(o, x) {
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

    e = ex_s_offset(o + 28, e, ex_hwvx_proto_mysterious_24t9_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_mysterious_24t9_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t9_28(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_mysterious_24t9_32(o, x) {
    let e = o + 4
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_strange(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 20, x.f32_20)
    //amount?   su32(o +24, x.u32_24)

    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 4, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_proto_strange_28(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_sound_controls_32, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_strange_28(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    sf32(o + 24, x.f32_24)
    su8(o + 28, x.u8_28)
    su8(o + 29, x.u8_29)
    su8(o + 31, x.u8_31)
    //amount?   su32(o +44, x.u32_44)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_model_link_4, x.section_4, 'down');
    e = ex_s_offset(o + 12, e, ex_hwvx_proto_model_link_12, x.section_12, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_1_16, g.hwvx_proto_model_anims_1_array, ex_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_20, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 20, e, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_model_link_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_proto_model_link_36, x.section_36, 'down');
    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 64, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_48[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 52, e, ex_hwvx_proto_model_link_52, x.section_52, 'down');
    e = ex_s_offset(o + 56, e, ex_hwvx_proto_model_link_56, x.section_56, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_4(o, x) {
    let e = o + 16
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_12(o, x) {
    let e = o + 8
    ex_patch(o + 0, g.model_array, x.model_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_32(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_36(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_52(o, x) {
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
function ex_hwvx_proto_model_link_56(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 28, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_model_link_56_4(temp_offset + (i * 28), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_model_anims_2_8, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_56_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    ex_patch(o + 8, g.model_array, x.model_8)

    e = ex_s_offset(o + 12, e, ex_hwvx_proto_model_link_56_4_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_hwvx_proto_model_link_56_4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_56_4_12(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_model_link_56_4_16(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_text(o, x) {
    let e = o + 16

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_font(o, x) {
    let e = o + 48
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su32(o + 8, x.u32_8)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    sf32(o + 40, x.f32_40)

    e = ex_ml(x.unordered_hwvx_proto_sound_section_4, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 4, e, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_proto_font_28, x.section_28, 'down');
    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_proto_font_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_font_28(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_font_36(o, e, x) {
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface(o, x) {
    let e = o + 80
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 108, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_hwvx_proto_interface_16(temp_offset + (i * 108), e, x.section_16[i])
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
            e = ex_hwvx_proto_interface_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 28, e, ex_hwvx_proto_interface_28, x.section_28, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_controls_32, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 32, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_controls_36, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_controls_40, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 40, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_sound_controls_44, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 44, e, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_proto_interface_48, x.section_48, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
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
        e = ex_s_offset(o + 20, e, ex_hwvx_proto_interface_16_20t0, x.section_20, 'down');
        break;
    case 1:
    case 12:
        e = ex_s_offset(o + 20, e, ex_hwvx_proto_interface_16_20t1, x.section_20, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 20, e, ex_hwvx_proto_interface_16_20t2, x.section_20, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 20, e, ex_hwvx_proto_interface_16_20t10, x.section_20, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 20, e, ex_hwvx_proto_interface_16_20t10, x.section_20, 'down');
        break;
    }
    e = ex_s_offset(o + 60, e, ex_hwvx_proto_interface_16_60, x.section_60, 'down');
    e = ex_s_offset(o + 68, e, ex_hwvx_proto_interface_16_68, x.section_68, 'down');
    e = ex_s_offset(o + 72, e, ex_hwvx_proto_interface_16_72, x.section_72, 'down');
    e = ex_s_offset(o + 96, e, ex_hwvx_proto_interface_16_96, x.section_96, 'down');
    if (x.section_104.length) {
        su32(o + 100, x.section_104.length)
        su32(o + 104, e - g.m)
        g.oa.push(o + 104)
        let temp_offset = e
        e += divisible(x.section_104.length * 12, 16)
        for (let i = 0; i < x.section_104.length; i++) {
            e = ex_hwvx_proto_interface_16_104(temp_offset + (i * 12), e, x.section_104[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t0(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    switch (x.u8_0) {
    case 3:
        e = ex_s_offset(o + 16, e, ex_hwvx_proto_interface_16_20t0_16, x.section_16, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t0_16(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_20t0_16_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t0_16_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t1(o, x) {
    let e = o + 32
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_hwvx_proto_text_0, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 0, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_font_4, g.hwvx_proto_font_array, ex_hwvx_proto_font, g.unordered_ref.hwvx_proto_font, o + 4, e, 'down');
    e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_16_20t1_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t1_8(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 10, x.u8_10)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_20t1_8_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t1_8_4(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_text_0, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t2(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_20t2_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t2_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +24, x.u32_24)

    e = ex_string(o + 12, e, x.section_12)
    e = ex_ml(x.unordered_hwvx_proto_text_16, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_interface_text_related_20, g.hwvx_proto_interface_text_related_array, ex_hwvx_proto_interface_text_related, g.unordered_ref.hwvx_proto_interface_text_related, o + 20, e, 'down');
    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 8, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_proto_interface_16_20t2_4_28(temp_offset + (i * 8), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t2_4_28(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_16_20t2_4_28_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t2_4_28_4(o, x) {
    let e = o + 16
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t4(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_20t4_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t4_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t10(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_hwvx_proto_font_16, g.hwvx_proto_font_array, ex_hwvx_proto_font, g.unordered_ref.hwvx_proto_font, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_20t11(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_60(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_interface_0, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 20, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_interface_16_68_12(temp_offset + (i * 20), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 20, e, ex_hwvx_proto_interface_16_68_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_12(o, e, x) {
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
function ex_hwvx_proto_interface_16_68_20(o, x) {
    let e = o + 12
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_16_68_20_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8(o, x) {
    let e = o + 64
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su32(o + 28, x.u32_28)
    su32(o + 36, x.u32_36)

    switch (x.u8_5) {
    case 1:
        e = ex_ml(x.section_0, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 0, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 0, e, ex_hwvx_proto_interface_16_68_20_8_0t11, x.section_0, 'down');
        break;
    }
    e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_16_68_20_8_8, x.section_8, 'down');
    e = ex_s_offset(o + 24, e, ex_hwvx_proto_interface_16_68_20_8_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_interface_16_68_20_8_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_8(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_interface_16_68_20_8_8_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_16_68_20_8_8_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_8_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_8_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_24(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_32(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_72(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_interface_16_72_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_72_8(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_16_72_8_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_72_8_8(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_16_72_8_8_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_72_8_8_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_96(o, x) {
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
            e = ex_hwvx_proto_interface_16_96_4(temp_offset + (i * 32), e, x.section_4[i])
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
            e = ex_hwvx_proto_interface_16_96_4(temp_offset + (i * 32), e, x.section_12[i])
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
            e = ex_hwvx_proto_interface_16_96_4(temp_offset + (i * 32), e, x.section_20[i])
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
            e = ex_hwvx_proto_interface_16_96_28(temp_offset + (i * 12), e, x.section_28[i])
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
            e = ex_hwvx_proto_interface_16_96_36(temp_offset + (i * 40), e, x.section_36[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_96_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_96_28(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_96_36(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 32, x.u32_32)
    sf32(o + 36, x.f32_36)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_16_104_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8(o, x) {
    let e = o + 60
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +52, x.u32_52)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_104_8_4(temp_offset + (i * 8), e, x.section_4[i])
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
            e = ex_hwvx_proto_interface_16_104_8_12(temp_offset + (i * 32), e, x.section_12[i])
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
            e = ex_hwvx_proto_interface_16_104_8_20(temp_offset + (i * 12), e, x.section_20[i])
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
            e = ex_hwvx_proto_interface_16_104_8_28(temp_offset + (i * 32), e, x.section_28[i])
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
            e = ex_hwvx_proto_interface_16_104_8_36(temp_offset + (i * 40), e, x.section_36[i])
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
            e = ex_hwvx_proto_interface_16_104_8_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_hwvx_proto_interface_16_104_8_56, x.section_56, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_4(o, e, x) {
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_20(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_28(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_36(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 32, x.u32_32)
    sf32(o + 36, x.f32_36)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_56(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_16_104_8_56_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_104_8_56_4(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_0t11(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_68_20_8_0t11_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_0t11_4(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_16_68_20_8_0t11_4_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_0t11_4_4(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_interface_16_68_20_8_0t11_4_4_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_0t11_4_4_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_24_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8(o, x) {
    let e = o + 64
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)

    switch (x.u8_5) {
    case 1:
        e = ex_ml(x.section_0, g.hwvx_proto_interface_array, ex_hwvx_proto_interface, g.unordered_ref.hwvx_proto_interface, o + 0, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 0, e, ex_hwvx_proto_interface_24_8_0t11, x.section_0, 'down');
        break;
    }
    switch (x.u8_5) {
    case 15:
        e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_24_8_8t15, x.section_8, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 8, e, ex_hwvx_proto_interface_24_8_8t17, x.section_8, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_0t11(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_24_8_0t11_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_0t11_4(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_24_8_0t11_4_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_0t11_4_4(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_interface_24_8_0t11_4_4_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_0t11_4_4_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_24_8_0t11_4_4_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_0t11_4_4_0_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_8t15(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_interface_24_8_8t15_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_24_8_8t15_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_8t15_0(o, x) {
    let e = o + 16
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_8t15_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_24_8_8t17(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_28(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 52, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_28_4(temp_offset + (i * 52), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_28_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_hwvx_proto_interface_28_4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_28_4_16(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_interface_28_4_16_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_28_4_16_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_48(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_text_related(o, x) {
    let e = o + 64
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +44, x.u32_44)

    e = ex_ml(x.unordered_hwvx_proto_text_0, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 0, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_font_8, g.hwvx_proto_font_array, ex_hwvx_proto_font, g.unordered_ref.hwvx_proto_font, o + 8, e, 'down');
    e = ex_s_offset(o + 12, e, ex_hwvx_proto_interface_text_related_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_hwvx_proto_interface_text_related_20(temp_offset + (i * 16), e, x.section_20[i])
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
            e = ex_hwvx_proto_interface_text_related_20(temp_offset + (i * 16), e, x.section_28[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_interface_text_related_48_48, g.hwvx_proto_interface_text_related_48_array, ex_hwvx_proto_interface_text_related_48, g.unordered_ref.hwvx_proto_interface_text_related_48, o + 48, e, 'down');
    e = ex_s_offset(o + 52, e, ex_hwvx_proto_interface_text_related_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_text_related_12(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_text_related_20(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_interface_text_related_20_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_text_related_20_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_interface_text_related_52(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_unknown_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4(o, e, x) {
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.hwvx_proto_unknown_thing_array, ex_hwvx_proto_unknown_thing, g.unordered_ref.hwvx_proto_unknown_thing, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_4, g.hwvx_proto_asdf_array, ex_hwvx_proto_asdf, g.unordered_ref.hwvx_proto_asdf, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_4, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 4, e, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_4_4t4, x.section_4, 'down');
        break;
    case 5:
        e = ex_ml(x.section_4, g.hwvx_proto_unknown_idk_sec_array, ex_hwvx_proto_unknown_idk_sec, g.unordered_ref.hwvx_proto_unknown_idk_sec, o + 4, e, 'down');
        break;
    case 6:
        e = ex_ml(x.section_4, g.hwvx_proto_world_model_related_array, ex_hwvx_proto_world_model_related, g.unordered_ref.hwvx_proto_world_model_related, o + 4, e, 'down');
        break;
    case 7:
        e = ex_ml(x.section_4, g.hwvx_proto_grand_section_array, ex_hwvx_proto_grand_section, g.unordered_ref.hwvx_proto_grand_section, o + 4, e, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_4_4t8, x.section_4, 'down');
        break;
    case 10:
        e = ex_ml(x.section_4, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 4, e, 'down');
        break;
    case 26:
        e = ex_ml(x.section_4, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 4, e, 'down');
        break;
    case 29:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_4_4t29, x.section_4, 'down');
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
        e = ex_s_offset(o + 8, e, ex_hwvx_proto_unknown_4_8t1, x.section_8, 'down');
        break;
    case 5:
    case 6:
    case 8:
    case 26:
        e = ex_s_offset(o + 8, e, ex_hwvx_proto_unknown_4_8t5, x.section_8, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t1(o, x) {
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
        e = ex_s_offset(o + 40, e, ex_hwvx_proto_unknown_4_8t1_40t1, x.section_40, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 40, e, ex_hwvx_proto_unknown_4_8t1_40t2, x.section_40, 'down');
        break;
    }
    e = ex_s_offset(o + 44, e, ex_hwvx_proto_unknown_4_8t1_44, x.section_44, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t1_40t1(o, x) {
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
function ex_hwvx_proto_unknown_4_8t1_40t2(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)

    switch (x.u8_9) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_unknown_4_8t1_40t2_12t0, x.section_12, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_unknown_4_8t1_40t2_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_unknown_4_8t1_40t2_12t2, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t1_40t2_12t0(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t1_40t2_12t1(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t1_40t2_12t2(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t1_44(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t5(o, x) {
    let e = o + 48
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 28, e, ex_hwvx_proto_unknown_4_8t5_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_8t5_28(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t4(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 28, e, ex_hwvx_proto_unknown_4_4t4_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t4_28(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t8(o, x) {
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
            e = ex_hwvx_proto_unknown_4_4t8_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 24, e, ex_hwvx_proto_unknown_4_4t8_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t8_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t8_24(o, x) {
    let e = o + 12
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t29(o, x) {
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
            e = ex_hwvx_proto_unknown_4_4t29_12(temp_offset + (i * 48), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_4_4t29_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    ex_patch(o + 28, g.model_array, x.model_28)

    e = ex_ml(x.unordered_hwvx_proto_unknown_link_section_32, g.hwvx_proto_unknown_link_section_array, ex_hwvx_proto_unknown_link_section, g.unordered_ref.hwvx_proto_unknown_link_section, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec(o, x) {
    let e = o + 80
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 44, x.u32_44)

    e = ex_s_offset(o + 28, e, ex_hwvx_proto_unknown_idk_sec_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_unknown_idk_sec_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_proto_unknown_idk_sec_36, x.section_36, 'down');
    e = ex_s_offset(o + 40, e, ex_hwvx_proto_unknown_idk_sec_40, x.section_40, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_proto_unknown_idk_sec_48, x.section_48, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_28(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_ml(x.unordered_hwvx_proto_unknown_24, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_32(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 12, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_hwvx_proto_unknown_idk_sec_32_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_32_8(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_36(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_idk_sec_36_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_36_4(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_40(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 16, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_unknown_idk_sec_40_4(temp_offset + (i * 16), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_40_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_idk_sec_48(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_link_section(o, x) {
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
            e = ex_hwvx_proto_unknown_link_section_28(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_link_section_28(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_grand_section(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.model_array, x.model_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 24, x.u32_24)

    e = ex_ml(x.unordered_hwvx_proto_car_link_16, g.hwvx_proto_car_link_array, ex_hwvx_proto_car_link, g.unordered_ref.hwvx_proto_car_link, o + 16, e, 'down');
    if (x.section_28.length) {
        su32(o + ___$$$___, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 64, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    switch (x.u32_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_thing_4t0, x.section_4, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_thing_4t1, x.section_4, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_unknown_thing_4t2, x.section_4, 'down');
        break;
    }
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_hwvx_proto_unknown_thing_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 32, e, ex_hwvx_proto_unknown_thing_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t0(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    e = ex_ml(x.unordered_hwvx_proto_sound_controls_24, g.hwvx_proto_sound_controls_array, ex_hwvx_proto_sound_controls, g.unordered_ref.hwvx_proto_sound_controls, o + 24, e, 'down');
    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 4, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_hwvx_proto_unknown_thing_4t0_36(temp_offset + (i * 4), e, x.section_36[i])
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
            e = ex_hwvx_proto_unknown_thing_4t0_44(temp_offset + (i * 32), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t0_36(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t0_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t1(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
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
            e = ex_hwvx_proto_unknown_thing_4t1_36(temp_offset + (i * 4), e, x.section_36[i])
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
            e = ex_hwvx_proto_unknown_thing_4t1_44(temp_offset + (i * 12), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t1_36(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t1_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t2(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
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
            e = ex_hwvx_proto_unknown_thing_4t2_16(temp_offset + (i * 12), e, x.section_16[i])
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
            e = ex_hwvx_proto_unknown_thing_4t2_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t2_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_4t2_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_unknown_thing_32(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_hwvx_proto_unknown_0, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_asdf(o, x) {
    let e = o + 176
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
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
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_asdf_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_hwvx_proto_asdf_12t2, x.section_12, 'down');
        break;
    }
    e = ex_ml(x.unordered_hwvx_proto_unknown_112, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 112, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_116, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 116, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_120, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 120, e, 'down');
    if (x.section_144.length) {
        su32(o + 140, x.section_144.length)
        su32(o + 144, e - g.m)
        g.oa.push(o + 144)
        let temp_offset = e
        e += divisible(x.section_144.length * 32, 16)
        for (let i = 0; i < x.section_144.length; i++) {
            e = ex_hwvx_proto_asdf_144(temp_offset + (i * 32), e, x.section_144[i])
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
            e = ex_hwvx_proto_asdf_152(temp_offset + (i * 12), e, x.section_152[i])
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
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_160[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 164, e, ex_hwvx_proto_asdf_164, x.section_164, 'down');
    e = ex_s_offset(o + 168, e, ex_hwvx_proto_asdf_168, x.section_168, 'down');
    e = ex_s_offset(o + 172, e, ex_hwvx_proto_asdf_172, x.section_172, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_asdf_12t1(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_asdf_12t2(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_asdf_144(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_asdf_152(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_asdf_164(o, x) {
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
function ex_hwvx_proto_asdf_168(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
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
function ex_hwvx_proto_asdf_172(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 56, x.u32_56)

    e = ex_ml(x.unordered_hwvx_proto_text_32, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 32, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_36, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 36, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_unknown_44, g.hwvx_proto_unknown_array, ex_hwvx_proto_unknown, g.unordered_ref.hwvx_proto_unknown, o + 44, e, 'down');
    e = ex_s_offset(o + 48, e, ex_hwvx_proto_item_48, x.section_48, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_52, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 52, e, 'down');
    if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e - g.m)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 64, 16)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_60[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48(o, x) {
    let e = o + 96
    ex_patch(o + 24, g.texture_patch_array, x.texture_24)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_item_48_0, x.section_0, 'down');
    e = ex_ml(x.unordered_hwvx_proto_text_16, g.hwvx_proto_text_array, ex_hwvx_proto_text, g.unordered_ref.hwvx_proto_text, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_28, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 28, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48_0(o, x) {
    let e = o + 64
    //amount?   su32(o +8, x.u32_8)
    sf32(o + 24, x.f32_24)
    su32(o + 28, x.u32_28)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 8, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_item_48_0_12(temp_offset + (i * 8), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_hwvx_proto_model_anims_1_16, g.hwvx_proto_model_anims_1_array, ex_hwvx_proto_model_anims_1, g.unordered_ref.hwvx_proto_model_anims_1, o + 16, e, 'down');
    e = ex_ml(x.unordered_hwvx_proto_model_anims_2_20, g.hwvx_proto_model_anims_2_array, ex_hwvx_proto_model_anims_2, g.unordered_ref.hwvx_proto_model_anims_2, o + 20, e, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_item_48_0_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_hwvx_proto_item_48_0_36, x.section_36, 'down');
    e = ex_s_offset(o + 40, e, ex_hwvx_proto_item_48_0_40, x.section_40, 'down');
    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 64, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_hwvx_proto_mysterious(temp_offset + (i * 64), e, x.section_48[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 52, e, ex_hwvx_proto_item_48_0_52, x.section_52, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48_0_12(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48_0_32(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48_0_36(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48_0_40(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_item_48_0_52(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link(o, x) {
    let e = o + 64
    ex_patch(o + 16, g.texture_patch_array, x.texture_16)
    ex_patch(o + 20, g.texture_patch_array, x.texture_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 36, x.u32_36)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +56, x.u32_56)

    e = ex_string(o + 4, e, x.section_4)
    e = ex_string(o + 8, e, x.section_8)
    e = ex_string(o + 12, e, x.section_12)
    if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 12, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_hwvx_proto_link_44(temp_offset + (i * 12), e, x.section_44[i])
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
            e = ex_hwvx_proto_link_52(temp_offset + (i * 4), e, x.section_52[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e - g.m)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 4, 16)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_hwvx_proto_link_60(temp_offset + (i * 4), e, x.section_60[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_44(o, e, x) {
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
    case 4:
        e = ex_s_offset(o + 8, e, ex_hwvx_proto_link_44_8, x.section_8, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_44_8(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_link_52_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_hwvx_proto_link_52_0_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0_4(o, e, x) {
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
            e = ex_hwvx_proto_link_52_0_4_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 8, e, ex_hwvx_proto_link_52_0_4_8, x.section_8, 'down');
    e = ex_string(o + 12, e, x.section_12)
    e = ex_s_offset(o + 20, e, ex_hwvx_proto_link_52_0_4_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_hwvx_proto_link_52_0_4_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0_4_4(o, e, x) {
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_hwvx_proto_link_52_0_4_4_4, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0_4_4_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0_4_8(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0_4_20(o, x) {
    let e = o + 16
    su32(o + 8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_52_0_4_28(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_60(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_link_60_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_60_0(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_link_60_0_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_60_0_0(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_hwvx_proto_link_60_0_0_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_hwvx_proto_link_60_0_0_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_hwvx_proto_link_60_0_0_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_60_0_0_0(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_link_60_0_0_4(o, x) {
    let e = o + 16
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
function ex_hwvx_proto_link_60_0_0_8(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
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
function ex_hwvx_proto_sound_controls(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 16, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_sound_controls_12(temp_offset + (i * 16), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_sound_controls_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    su32(o + 4, x.u32_4)
    //amount?   su32(o +8, x.u32_8)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_hwvx_proto_sound_controls_12_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_sound_controls_12_12(o, e, x) {

    e = ex_ml(x.unordered_hwvx_proto_sound_section_0, g.hwvx_proto_sound_section_array, ex_hwvx_proto_sound_section, g.unordered_ref.hwvx_proto_sound_section, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_sound_section(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    ex_patch(o + 20, g.sound_patch_array, x.sound_20)
    su32(o + 28, x.u32_28)

    e = ex_s_offset(o + 24, e, ex_hwvx_proto_sound_section_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_hwvx_proto_sound_section_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_sound_section_24(o, x) {
    let e = o + 12
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_sound_section_32(o, x) {
    let e = o + 12
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture_anims_0(o, x) {
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
            e = ex_hwvx_proto_texture_anims_0_8(temp_offset + (i * 12), e, x.section_8[i])
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
            e = ex_hwvx_proto_texture_anims_0_16(temp_offset + (i * 16), e, x.section_16[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 20, e, ex_hwvx_proto_texture_anims_0_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture_anims_0_20(o, x) {
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
            e = ex_hwvx_proto_texture_anims_0_20_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture_anims_0_20_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture_anims_0_8(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_hwvx_proto_texture_anims_0_16(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

/* end export list */
