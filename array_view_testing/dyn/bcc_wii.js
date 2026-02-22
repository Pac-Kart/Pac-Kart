"use strict";
/* start sec id list */

function get_bcc_wii_sec_id(string) {
    switch (string) {
    case 'gjbf':
        return "bcc_wii_file_header"
        break
    case ']7Zf':
        return "bcc_wii_directory"
        break
    case '[zyM':
        return "bcc_wii_datapack"
        break
    case 'opll':
        return "bcc_wii_get_offset_patch_list"
        break
    case "buff":
        return "bcc_wii_Texture_8"
        break
    case "buf3":
        return "bcc_wii_Texture_12"
        break
    case "buf5":
        return "bcc_wii_Texture_20"
        break
    case "ordr":
        return "bcc_wii_ordered"
        break
    case "4unr":
        return "bcc_wii_unordered"
        break
    case "e6Dh":
        return "bcc_wii_model_buffer"
        break
    case "ipll":
        return "bcc_wii_index_patch_list"
        break
    case '<ral':
        return "bcc_wii_basic_audio"
        break
    case 'Nrm4':
        return "bcc_wii_basic_audio_0"
        break
    case 'B8:F':
        return "bcc_wii_basic_audio_4"
        break
    case 'Z5>0':
        return "bcc_wii_datapack_108"
        break
    case 'Om@3':
        return "bcc_wii_texture_offset_list"
        break
    case 'i3wP':
        return "bcc_wii_texture_offset_list_0"
        break
    case '6f2N':
        return "bcc_wii_share"
        break
    case '=?bn':
        return "bcc_wii_share_16"
        break
    case 'eARE':
        return "bcc_wii_world"
        break
    case '<cCj':
        return "bcc_wii_world_12"
        break
    case '0s3t':
        return "bcc_wii_world_92"
        break
    case 'W1lX':
        return "bcc_wii_world_184"
        break
    case '?wsl':
        return "bcc_wii_world_108"
        break
    case 'R>hQ':
        return "bcc_wii_world_116"
        break
    case '0b_V':
        return "bcc_wii_world_28"
        break
    case 'WhJ]':
        return "bcc_wii_world_28_84"
        break
    case 'o4Qp':
        return "bcc_wii_world_28_84_8"
        break
    case 'iBhm':
        return "bcc_wii_world_28_84_24"
        break
    case 'debX':
        return "bcc_wii_world_28_80"
        break
    case 'DtZP':
        return "bcc_wii_world_28_80_0"
        break
    case 'DKln':
        return "bcc_wii_world_84"
        break
    case 'TUmX':
        return "bcc_wii_world_60"
        break
    case 'L1Hi':
        return "bcc_wii_world_4"
        break
    case '[RLj':
        return "bcc_wii_world_4_20t1"
        break
    case 'Z;DI':
        return "bcc_wii_world_4_16"
        break
    case 'eIVe':
        return "bcc_wii_world_120"
        break
    case 'KIme':
        return "bcc_wii_world_120_0"
        break
    case 'Np]f':
        return "bcc_wii_world_120_0_80"
        break
    case '8XXd':
        return "bcc_wii_world_120_0_68"
        break
    case 'm4[=':
        return "bcc_wii_world_120_0_72"
        break
    case 'B]6F':
        return "bcc_wii_world_120_12"
        break
    case 'Am9Z':
        return "bcc_wii_world_208"
        break
    case 'g4Tp':
        return "bcc_wii_world_176"
        break
    case 'o>h9':
        return "bcc_wii_world_176_4"
        break
    case 'Ok:_':
        return "bcc_wii_world_176_12"
        break
    case '[IaM':
        return "bcc_wii_world_176_20"
        break
    case 'jPMA':
        return "bcc_wii_world_176_28"
        break
    case 'ppcY':
        return "bcc_wii_basic"
        break
    case 'EAzn':
        return "bcc_wii_basic_4"
        break
    case 'X_Pk':
        return "bcc_wii_model"
        break
    case 'lsi;':
        return "bcc_wii_model_20"
        break
    case '[nOl':
        return "bcc_wii_model_20_4"
        break
    case 'AJop':
        return "bcc_wii_model_20_4_0tpc"
        break
    case ';ROy':
        return "bcc_wii_model_20_4_0tpc_188"
        break
    case 'vSOt':
        return "bcc_wii_model_20_4_0tpc_192"
        break
    case 'jQ>S':
        return "bcc_wii_model_20_4_0tpc_196"
        break
    case 'MeGr':
        return "bcc_wii_model_20_4_0tpc_200"
        break
    case 'NxSR':
        return "bcc_wii_model_20_4_0tpc_204"
        break
    case '8i?L':
        return "bcc_wii_model_20_4_0tpc_220"
        break
    case '85FT':
        return "bcc_wii_model_20_4_0tpc_220_12"
        break
    case 'kqvF':
        return "bcc_wii_model_20_4_0tpc_228"
        break
    case 'uupO':
        return "bcc_wii_model_20_4_0twii"
        break
    case '9sEe':
        return "bcc_wii_model_20_4_0twiit0"
        break
    case 'OO3s':
        return "bcc_wii_model_20_4_0twiit0_180"
        break
    case 'v9E6':
        return "bcc_wii_model_20_4_0twiit0_188"
        break
    case '=AR^':
        return "bcc_wii_model_20_4_0twiit0_192"
        break
    case 'X]56':
        return "bcc_wii_model_20_4_0twiit0_196"
        break
    case 'DJ=b':
        return "bcc_wii_model_20_4_0twiit0_200"
        break
    case 'CXDY':
        return "bcc_wii_model_20_4_0twiit0_200_8"
        break
    case '8qlu':
        return "bcc_wii_model_20_4_0twiit0_208"
        break
    case 'MnF3':
        return "bcc_wii_model_20_4_0twiit1"
        break
    case 'A5sG':
        return "bcc_wii_model_20_4_0twiit1_180"
        break
    case 'MZDL':
        return "bcc_wii_model_20_4_0twiit1_184"
        break
    case '3f2V':
        return "bcc_wii_model_20_4_0twiit1_192"
        break
    case '_hF?':
        return "bcc_wii_model_20_4_0twiit1_196"
        break
    case '0;Eh':
        return "bcc_wii_model_20_4_0twiit1_200"
        break
    case 'qas3':
        return "bcc_wii_model_20_4_0twiit1_200_8"
        break
    case 'TYqi':
        return "bcc_wii_model_20_4_0twiit1_208"
        break
    case 'HRcV':
        return "bcc_wii_model_20_4_0twiit2"
        break
    case 'M@pS':
        return "bcc_wii_model_20_4_0twiit2_180"
        break
    case 'u<l_':
        return "bcc_wii_model_20_4_0twiit2_188"
        break
    case ':1PM':
        return "bcc_wii_model_20_4_0twiit2_196"
        break
    case ']ZJU':
        return "bcc_wii_model_20_4_0twiit2_204"
        break
    case 'ua@T':
        return "bcc_wii_model_24"
        break
    case 'F;6<':
        return "bcc_wii_datapack_text_link"
        break
    case 'VJF;':
        return "bcc_wii_some_model_anim"
        break
    case 'f>ce':
        return "bcc_wii_some_model_anim_32"
        break
    case '2nS@':
        return "bcc_wii_some_model_anim_36"
        break
    case 'fTx1':
        return "bcc_wii_model_anim_2_type_b"
        break
    case 'pU;;':
        return "bcc_wii_model_anim_2_type_b_16"
        break
    case '?B2y':
        return "bcc_wii_model_anim_2_type_b_20"
        break
    case '8Qeg':
        return "bcc_wii_model_anim_2_type_b_20_40"
        break
    case '3pDR':
        return "bcc_wii_model_anim_2_type_b_20_40_0"
        break
    case '9:gV':
        return "bcc_wii_model_anim_2_type_b_20_40_0_40"
        break
    case 'KB;w':
        return "bcc_wii_model_anim_2_type_b_20_40_0_40_0"
        break
    case 'q<vl':
        return "bcc_wii_model_anim_2_type_c"
        break
    case 'V@SC':
        return "bcc_wii_model_anim_2_type_c_24"
        break
    case '9AKU':
        return "bcc_wii_model_anim_2_type_c_32"
        break
    case 'CFq>':
        return "bcc_wii_something"
        break
    case 'Pmr>':
        return "bcc_wii_var"
        break
    case 'gddb':
        return "bcc_wii_var_156"
        break
    case '@?Yc':
        return "bcc_wii_var_168"
        break
    case 'e8Y^':
        return "bcc_wii_var_168_16"
        break
    case 'f?MQ':
        return "bcc_wii_var_168_16_12t7"
        break
    case '8AG^':
        return "bcc_wii_var_168_16_16"
        break
    case '[s<N':
        return "bcc_wii_var_168_24"
        break
    case 'gDue':
        return "bcc_wii_var_168_24_12t1"
        break
    case 'em=L':
        return "bcc_wii_var_168_24_12t1_0"
        break
    case '?re[':
        return "bcc_wii_var_168_24_12t1_0_0"
        break
    case 'o?UJ':
        return "bcc_wii_var_168_24_12t5"
        break
    case '@9ZY':
        return "bcc_wii_var_168_24_12t5_0"
        break
    case 'oI^7':
        return "bcc_wii_var_168_24_12t5_0_8"
        break
    case 'wRKz':
        return "bcc_wii_var_168_24_12t15"
        break
    case 'EN9k':
        return "bcc_wii_var_168_24_12t17"
        break
    case 'jaO?':
        return "bcc_wii_var_168_24_12t18"
        break
    case 'ZZi^':
        return "bcc_wii_var_168_24_12t18_8"
        break
    case 'qZhz':
        return "bcc_wii_idk"
        break
    case 'AI]P':
        return "bcc_wii_idk_36"
        break
    case '^v4p':
        return "bcc_wii_idk_36_60"
        break
    case 'ulHl':
        return "bcc_wii_idk_36_60_4"
        break
    case 'Spst':
        return "bcc_wii_idk_36_60_8"
        break
    case '88wN':
        return "bcc_wii_idk_36_60_8_4"
        break
    case ':h:6':
        return "bcc_wii_idk_36_60_8_4_0"
        break
    case 'bl?B':
        return "bcc_wii_idk_36_60_8_4_0_4"
        break
    case 'hpE3':
        return "bcc_wii_idk_36_60_8_4_8"
        break
    case 'op;Z':
        return "bcc_wii_idk_36_60_8_4_8_8"
        break
    case 'eRnZ':
        return "bcc_wii_idk_36_60_8_4_8_20"
        break
    case 'a36q':
        return "bcc_wii_idk_36_68"
        break
    case 'XGOk':
        return "bcc_wii_world_settings"
        break
    case '_PmP':
        return "bcc_wii_world_settings_0"
        break
    case '>VG;':
        return "bcc_wii_world_settings_0_40"
        break
    case 'qwj<':
        return "bcc_wii_world_settings_4"
        break
    case 'PZin':
        return "bcc_wii_world_settings_4_4"
        break
    case 'zRtN':
        return "bcc_wii_world_settings_4_4_4"
        break
    case 'mv7c':
        return "bcc_wii_world_settings_4_4_12"
        break
    case 'xF5=':
        return "bcc_wii_world_settings_60"
        break
    case 'YeZe':
        return "bcc_wii_world_settings_64"
        break
    case '@dfA':
        return "bcc_wii_world_settings_76"
        break
    case 'dgeh':
        return "bcc_wii_world_settings_84"
        break
    case 'xIGR':
        return "bcc_wii_world_settings_112"
        break
    case 'H]fG':
        return "bcc_wii_world_settings_124"
        break
    case ';>L7':
        return "bcc_wii_world_settings_132"
        break
    case ';F2O':
        return "bcc_wii_object"
        break
    case 'Q4US':
        return "bcc_wii_object_4t17"
        break
    case 'SLpY':
        return "bcc_wii_object_44"
        break
    case '=non':
        return "bcc_wii_object_44_4"
        break
    case '1c7N':
        return "bcc_wii_object_44_8"
        break
    case 'WFpa':
        return "bcc_wii_object_44_8_4"
        break
    case 'XiPr':
        return "bcc_wii_object_44_8_4_0"
        break
    case 'cPUY':
        return "bcc_wii_object_44_8_4_0_4"
        break
    case 'rmRi':
        return "bcc_wii_object_44_8_4_8"
        break
    case 'vXEm':
        return "bcc_wii_object_44_8_4_8_8"
        break
    case 'q:^h':
        return "bcc_wii_object_44_8_4_8_20"
        break
    case 'm<yg':
        return "bcc_wii_a_single_section"
        break
    case 'bIIT':
        return "bcc_wii_world_thing"
        break
    case 'k6g6':
        return "bcc_wii_world_thing_20"
        break
    case 'OoNP':
        return "bcc_wii_world_thing_76"
        break
    case 'dYoS':
        return "bcc_wii_car"
        break
    case ';Ipi':
        return "bcc_wii_car_0"
        break
    case 'OhSr':
        return "bcc_wii_car_0_20"
        break
    case '_04m':
        return "bcc_wii_car_0_20_0"
        break
    case '@<q4':
        return "bcc_wii_car_0_20_0_8"
        break
    case 'EQAQ':
        return "bcc_wii_car_0_20_0_16"
        break
    case 'aXMK':
        return "bcc_wii_car_0_20_0_16_12"
        break
    case 'IR2D':
        return "bcc_wii_car_0_20_0_16_16"
        break
    case 'nJw[':
        return "bcc_wii_car_0_20_4"
        break
    case '4?JD':
        return "bcc_wii_car_0_20_4_68"
        break
    case 'SrlY':
        return "bcc_wii_car_0_20_4_80"
        break
    case 'v0S5':
        return "bcc_wii_car_0_20_4_84"
        break
    case 'm5lT':
        return "bcc_wii_car_0_20_4_88"
        break
    case 'nx9Y':
        return "bcc_wii_car_0_20_4_92"
        break
    case 'rOui':
        return "bcc_wii_car_0_20_20"
        break
    case 'tj]M':
        return "bcc_wii_car_0_20_20_4t1"
        break
    case 'P?4F':
        return "bcc_wii_car_0_20_20_4t3"
        break
    case 'AkNi':
        return "bcc_wii_car_0_24"
        break
    case 'XQZp':
        return "bcc_wii_car_0_24_4"
        break
    case 'aew^':
        return "bcc_wii_car_0_24_4_0"
        break
    case 'KbAu':
        return "bcc_wii_car_0_24_4_0_40"
        break
    case 'leP;':
        return "bcc_wii_car_0_24_4_0_40_76"
        break
    case 'ZN7z':
        return "bcc_wii_car_0_24_4_0_48"
        break
    case 'iaho':
        return "bcc_wii_car_0_24_4_4"
        break
    case '[OP>':
        return "bcc_wii_car_0_24_4_8"
        break
    case 'KetN':
        return "bcc_wii_car_0_28"
        break
    case 'tj=:':
        return "bcc_wii_car_0_28_52"
        break
    case 'tvUq':
        return "bcc_wii_car_0_28_60"
        break
    case 'Monb':
        return "bcc_wii_car_0_28_68"
        break
    case 'Z1p?':
        return "bcc_wii_car_0_28_76"
        break
    case 'HfwH':
        return "bcc_wii_car_0_28_84"
        break
    case '[JhY':
        return "bcc_wii_car_0_32"
        break
    case 'x4Ew':
        return "bcc_wii_car_0_32_24"
        break
    case 'ijPx':
        return "bcc_wii_car_0_32_32"
        break
    case '[E]x':
        return "bcc_wii_car_0_32_32_4"
        break
    case 'mBT]':
        return "bcc_wii_car_0_32_32_8"
        break
    case '^[^0':
        return "bcc_wii_car_0_32_32_8_4"
        break
    case '8Sh=':
        return "bcc_wii_car_0_32_32_8_4_0"
        break
    case ':5xc':
        return "bcc_wii_car_0_32_32_8_4_0_4"
        break
    case '8[@N':
        return "bcc_wii_car_0_32_32_8_4_0_12"
        break
    case 'AF]z':
        return "bcc_wii_car_0_32_32_8_4_8"
        break
    case 'K>Ib':
        return "bcc_wii_car_0_32_32_8_4_8_8"
        break
    case 'Zefa':
        return "bcc_wii_car_0_32_32_8_4_8_20t0"
        break
    case 'IEb[':
        return "bcc_wii_car_0_36"
        break
    case 'SSuB':
        return "bcc_wii_car_0_40"
        break
    case 'XxTU':
        return "bcc_wii_car_0_48"
        break
    case '?tK?':
        return "bcc_wii_car_0_48_4"
        break
    case '02m_':
        return "bcc_wii_car_0_56"
        break
    case 'Ns7]':
        return "bcc_wii_car_0_64"
        break
    case 'pyQj':
        return "bcc_wii_car_0_72"
        break
    case 'w>nd':
        return "bcc_wii_mysterious"
        break
    case 'Qaln':
        return "bcc_wii_mysterious_4t6"
        break
    case 'j7qF':
        return "bcc_wii_mysterious_4t6_16t0"
        break
    case 'pqe5':
        return "bcc_wii_mysterious_4t6_16t2"
        break
    case '8c@:':
        return "bcc_wii_mysterious_4t6_28"
        break
    case '[_GT':
        return "bcc_wii_mysterious_4t6_36"
        break
    case 'EMvG':
        return "bcc_wii_mysterious_4t6_44"
        break
    case 'wYQW':
        return "bcc_wii_mysterious_4t6_52"
        break
    case 'nU45':
        return "bcc_wii_mysterious_4t6_56"
        break
    case '@V:6':
        return "bcc_wii_mysterious_4t9"
        break
    case 'h5tA':
        return "bcc_wii_mysterious_4t9_8"
        break
    case '0vr>':
        return "bcc_wii_mysterious_4t9_8_8"
        break
    case '[W[y':
        return "bcc_wii_strange"
        break
    case 'BQ[s':
        return "bcc_wii_strange_4"
        break
    case '@I0t':
        return "bcc_wii_link"
        break
    case 'vK8Y':
        return "bcc_wii_link_16"
        break
    case '3MWe':
        return "bcc_wii_link_16_4"
        break
    case 'T__]':
        return "bcc_wii_link_56"
        break
    case 'f948':
        return "bcc_wii_link_56_12"
        break
    case 'PPZq':
        return "bcc_wii_link_64"
        break
    case 'wY_q':
        return "bcc_wii_link_64_0"
        break
    case 'g2Zp':
        return "bcc_wii_link_64_0_4"
        break
    case 'dX@Y':
        return "bcc_wii_link_64_0_4_8"
        break
    case 'M4e3':
        return "bcc_wii_link_64_0_4_20"
        break
    case 'FfRf':
        return "bcc_wii_link_64_0_4_20_4"
        break
    case 'X339':
        return "bcc_wii_link_64_0_4_20_4_4"
        break
    case '9=EG':
        return "bcc_wii_link_64_0_4_28"
        break
    case 'Y0_a':
        return "bcc_wii_link_68"
        break
    case '7C>4':
        return "bcc_wii_link_68_8"
        break
    case '3vkt':
        return "bcc_wii_font"
        break
    case 'NxrC':
        return "bcc_wii_font_20"
        break
    case '5YZr':
        return "bcc_wii_font_28"
        break
    case 'P@4o':
        return "bcc_wii_flag"
        break
    case 'Jbcu':
        return "bcc_wii_flag_20t0"
        break
    case 'MV@T':
        return "bcc_wii_flag_20t2"
        break
    case 'P1]T':
        return "bcc_wii_flag_20t3"
        break
    case 'DPD=':
        return "bcc_wii_flag_20t7"
        break
    case 'Zg[=':
        return "bcc_wii_interface"
        break
    case '3CmU':
        return "bcc_wii_interface_52"
        break
    case 'qokw':
        return "bcc_wii_interface_76"
        break
    case 'h66T':
        return "bcc_wii_interface_76_4"
        break
    case 'tgKG':
        return "bcc_wii_interface_76_4_12t1"
        break
    case 'Ab_O':
        return "bcc_wii_interface_76_4_12t1_4"
        break
    case 'Go?E':
        return "bcc_wii_interface_76_4_12t5"
        break
    case 'x963':
        return "bcc_wii_interface_76_4_12t7"
        break
    case 'NBwm':
        return "bcc_wii_interface_76_4_12t8"
        break
    case 'O0SJ':
        return "bcc_wii_interface_76_4_12t8_4"
        break
    case '@zqp':
        return "bcc_wii_interface_76_4_12t9"
        break
    case 'xsDn':
        return "bcc_wii_interface_76_4_12t10"
        break
    case 'Y9tK':
        return "bcc_wii_interface_84"
        break
    case 'Nbiu':
        return "bcc_wii_interface_84_4"
        break
    case 'K6QX':
        return "bcc_wii_interface_84_4_12"
        break
    case 'EuLy':
        return "bcc_wii_interface_84_4_12_4"
        break
    case 'Y0XC':
        return "bcc_wii_interface_84_16"
        break
    case 'YPxK':
        return "bcc_wii_interface_84_16_4"
        break
    case 'tney':
        return "bcc_wii_interface_84_16_4_12t7"
        break
    case 'iENQ':
        return "bcc_wii_interface_84_16_4_12t7_4"
        break
    case '5gHG':
        return "bcc_wii_interface_84_24"
        break
    case 'zIou':
        return "bcc_wii_interface_84_24_4t11"
        break
    case 'hIeS':
        return "bcc_wii_interface_84_24_4t11_4"
        break
    case '@gqv':
        return "bcc_wii_interface_84_24_4t11_4_4"
        break
    case 'PjuG':
        return "bcc_wii_interface_84_24_4t11_4_12t1"
        break
    case 'wAaf':
        return "bcc_wii_interface_84_24_4t11_4_12t2"
        break
    case 'gWt7':
        return "bcc_wii_interface_84_24_4t11_4_12t2_0"
        break
    case 'aR37':
        return "bcc_wii_interface_84_24_4t11_4_12t2_0_4"
        break
    case 'Ah5f':
        return "bcc_wii_interface_84_24_4t11_4_12t2_4"
        break
    case 'AYKa':
        return "bcc_wii_interface_84_24_4t11_4_12t102"
        break
    case 'e1wv':
        return "bcc_wii_interface_84_24_4t11_4_12t102_8"
        break
    case 'gl^8':
        return "bcc_wii_interface_84_24_12t6"
        break
    case 'HqxL':
        return "bcc_wii_interface_84_24_12t6_0"
        break
    case '[h0X':
        return "bcc_wii_interface_84_24_12t6_4"
        break
    case '^f0C':
        return "bcc_wii_interface_84_24_12t15"
        break
    case 'M@D=':
        return "bcc_wii_interface_84_24_12t15_0"
        break
    case 'Vg7t':
        return "bcc_wii_interface_84_24_12t15_4"
        break
    case 'YQn9':
        return "bcc_wii_interface_84_24_12t41"
        break
    case '=@<V':
        return "bcc_wii_interface_92"
        break
    case 'S1S5':
        return "bcc_wii_interface_92_12"
        break
    case 'K?FO':
        return "bcc_wii_interface_92_32"
        break
    case 'E4[N':
        return "bcc_wii_interface_92_32_8"
        break
    case 'RAZm':
        return "bcc_wii_interface_92_32_8_4"
        break
    case '5Shy':
        return "bcc_wii_interface_92_32_8_4_12"
        break
    case 'idO=':
        return "bcc_wii_interface_92_32_8_4_12_4"
        break
    case 'o@Wq':
        return "bcc_wii_interface_92_36t0"
        break
    case '4A0R':
        return "bcc_wii_interface_92_36t0_8"
        break
    case '9CnE':
        return "bcc_wii_interface_92_36t0_8_4"
        break
    case 'obHn':
        return "bcc_wii_interface_92_36t1"
        break
    case '0Td9':
        return "bcc_wii_interface_92_36t1_8t1"
        break
    case 'GinK':
        return "bcc_wii_interface_92_36t1_8t1_4"
        break
    case 'k803':
        return "bcc_wii_interface_92_36t1_8t3"
        break
    case 'm?S^':
        return "bcc_wii_interface_92_36t1_16"
        break
    case 'LdgG':
        return "bcc_wii_interface_92_36t3"
        break
    case 'Kgg3':
        return "bcc_wii_interface_92_36t3_4"
        break
    case 'wb3F':
        return "bcc_wii_interface_92_36t6"
        break
    case '7x8U':
        return "bcc_wii_interface_92_36t6_12"
        break
    case '7vha':
        return "bcc_wii_interface_92_36t10"
        break
    case '@QnV':
        return "bcc_wii_interface_92_36t12"
        break
    case '@ZfX':
        return "bcc_wii_interface_92_36t13"
        break
    case 'gz;e':
        return "bcc_wii_interface_92_36t13_4"
        break
    case '_H_N':
        return "bcc_wii_interface_92_36t13_12"
        break
    case 'RVUa':
        return "bcc_wii_interface_92_36t14"
        break
    case '=t[F':
        return "bcc_wii_interface_92_36t14_4"
        break
    case 'ueYq':
        return "bcc_wii_interface_92_36t15"
        break
    case 'jTMt':
        return "bcc_wii_interface_92_40"
        break
    case '^NKx':
        return "bcc_wii_interface_92_40_48"
        break
    case 'JLx0':
        return "bcc_wii_interface_92_40_72"
        break
    case 'f7DI':
        return "bcc_wii_interface_92_40_72_16"
        break
    case '8]DV':
        return "bcc_wii_interface_92_40_72_16_4"
        break
    case '4fSg':
        return "bcc_wii_interface_92_40_72_24"
        break
    case ';JzX':
        return "bcc_wii_interface_92_40_72_24_4t11"
        break
    case 'Evcn':
        return "bcc_wii_interface_92_40_72_24_4t11_4"
        break
    case 'lGYE':
        return "bcc_wii_interface_92_40_72_24_4t11_4_12t1"
        break
    case '4PaN':
        return "bcc_wii_interface_92_52"
        break
    case '_[wd':
        return "bcc_wii_interface_92_52_4"
        break
    case 'S0_F':
        return "bcc_wii_interface_92_52_12"
        break
    case 'xUNy':
        return "bcc_wii_interface_92_52_20"
        break
    case '^QM0':
        return "bcc_wii_interface_92_52_28"
        break
    case 'FOq0':
        return "bcc_wii_interface_92_52_36"
        break
    case 'eCBi':
        return "bcc_wii_interface_92_68"
        break
    case '4;GK':
        return "bcc_wii_interface_92_68_4"
        break
    case 'f?<n':
        return "bcc_wii_interface_92_68_4_4"
        break
    case 'DOp<':
        return "bcc_wii_interface_92_68_4_4_16"
        break
    case 'hndJ':
        return "bcc_wii_interface_92_68_4_4_16_12t1"
        break
    case '5KeD':
        return "bcc_wii_interface_92_68_4_12"
        break
    case ';bBT':
        return "bcc_wii_interface_92_68_4_20"
        break
    case '1dxp':
        return "bcc_wii_interface_92_68_4_28"
        break
    case 'PYVC':
        return "bcc_wii_interface_92_68_4_36"
        break
    case 'O1b1':
        return "bcc_wii_interface_92_68_4_44"
        break
    case 'ZsN5':
        return "bcc_wii_sound_controls"
        break
    case 'l4:C':
        return "bcc_wii_sound_controls_16"
        break
    case '6yp[':
        return "bcc_wii_sound_controls_16_4"
        break
    case '_>Nj':
        return "bcc_wii_text"
        break
    case 'nrpk':
        return "bcc_wii_multi_font"
        break
    case 'VoJk':
        return "bcc_wii_multi_font_4t0"
        break
    case 'siCP':
        return "bcc_wii_multi_font_4t1"
        break
    case 'M<Mx':
        return "bcc_wii_emitter"
        break
    case 'm=Hn':
        return "bcc_wii_emitter_16"
        break
    case 'Y]DN':
        return "bcc_wii_emitter_16_48"
        break
    case 'ufGi':
        return "bcc_wii_emitter_16_56"
        break
    case '1]_V':
        return "bcc_wii_model_link"
        break
    case '6z5R':
        return "bcc_wii_model_link_4"
        break
    case 'k4f6':
        return "bcc_wii_model_link_12"
        break
    case 'DOXz':
        return "bcc_wii_model_link_12_8"
        break
    case 'Z2ua':
        return "bcc_wii_model_link_48"
        break
    case 'Nn6;':
        return "bcc_wii_unknown"
        break
    case 'I1Nn':
        return "bcc_wii_unknown_4"
        break
    case 'jR^q':
        return "bcc_wii_unknown_4_8t1"
        break
    case 'z2@k':
        return "bcc_wii_unknown_4_8t1_48"
        break
    case 'ayfD':
        return "bcc_wii_unknown_4_8t1_52t1"
        break
    case 'gQ6e':
        return "bcc_wii_unknown_4_8t1_52t2"
        break
    case 'N1dN':
        return "bcc_wii_unknown_4_8t1_52t2_12t0"
        break
    case 'LwXz':
        return "bcc_wii_unknown_4_8t1_52t2_12t2"
        break
    case 'u2SG':
        return "bcc_wii_unknown_4_8t1_52t3"
        break
    case 'AElH':
        return "bcc_wii_unknown_4_8t4"
        break
    case 'u19K':
        return "bcc_wii_unknown_4_8t5"
        break
    case 'rC:k':
        return "bcc_wii_unknown_4_8t9"
        break
    case '^R6O':
        return "bcc_wii_unknown_4_8t26"
        break
    case 'F9[K':
        return "bcc_wii_unknown_thing"
        break
    case 'eOBQ':
        return "bcc_wii_unknown_thing_16"
        break
    case 'WVN6':
        return "bcc_wii_unknown_thing_24t1"
        break
    case 'dfSO':
        return "bcc_wii_unknown_thing_24t1_4"
        break
    case 'QoEf':
        return "bcc_wii_unknown_thing_24t1_52"
        break
    case '?pp_':
        return "bcc_wii_unknown_thing_24t1_60"
        break
    case 'ns^c':
        return "bcc_wii_unknown_thing_24t1_64"
        break
    case 'DW0_':
        return "bcc_wii_unknown_thing_24t1_72"
        break
    case 'WT6x':
        return "bcc_wii_unknown_thing_24t1_72_4"
        break
    case 'tlrZ':
        return "bcc_wii_unknown_thing_24t2"
        break
    case 'oyTu':
        return "bcc_wii_unknown_thing_24t2_4"
        break
    case '26q:':
        return "bcc_wii_unknown_thing_24t2_20"
        break
    case 'FZ6s':
        return "bcc_wii_unknown_thing_32"
        break
    case 'xVV3':
        return "bcc_wii_sound_section"
        break
    case 'zLhM':
        return "bcc_wii_sound_section_24"
        break
    case 'Lhja':
        return "bcc_wii_unknown_idk_sec"
        break
    case 'm8fp':
        return "bcc_wii_unknown_idk_sec_8"
        break
    case 'PTxj':
        return "bcc_wii_unknown_idk_sec_8_12"
        break
    case '=wt0':
        return "bcc_wii_unknown_idk_sec_8_20"
        break
    case '=]z:':
        return "bcc_wii_unknown_idk_sec_24"
        break
    case 'iaii':
        return "bcc_wii_unknown_idk_sec_24_4"
        break
    case 'Sxav':
        return "bcc_wii_unknown_idk_sec_32"
        break
    case 'i:j<':
        return "bcc_wii_unknown_idk_sec_32_4"
        break
    case 'H@Se':
        return "bcc_wii_unknown_idk_sec_32_4_0"
        break
    case 'k_N7':
        return "bcc_wii_unknown_idk_sec_32_4_0_4t1"
        break
    case 'A=3c':
        return "bcc_wii_unknown_idk_sec_32_4_0_4t2"
        break
    case 'm^6n':
        return "bcc_wii_unknown_idk_sec_40"
        break
    default:
        return null
    }
}
/* end sec id list */
/////////////////////
/* start import list */
async function im_bcc_wii_x(index) {
    id_offset.push(0);
    x.push({
        id: gen_id(),

        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    im_bcc_wii_file_header(0, 0, x[index].format)
}

function im_bcc_wii_file_header(o, i, x) {

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
        im_bcc_wii_directory(16 + (ii * 24), ii, x[i].directory, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log("saved in " + time_array)

    return x[i].id
    // 16 bytes;

}

function im_bcc_wii_directory(o, i, x, global) {
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

        bcc_wii_world_12_array: [],
        bcc_wii_world_92_array: [],
        bcc_wii_world_108_array: [],
        bcc_wii_world_116_array: [],
        bcc_wii_world_4_array: [],
        bcc_wii_model_array: [],
        bcc_wii_datapack_text_link_array: [],
        bcc_wii_some_model_anim_array: [],
        bcc_wii_model_anim_2_type_b_array: [],
        bcc_wii_model_anim_2_type_c_array: [],
        bcc_wii_something_array: [],
        bcc_wii_var_array: [],
        bcc_wii_idk_array: [],
        bcc_wii_world_settings_array: [],
        bcc_wii_object_array: [],
        bcc_wii_a_single_section_array: [],
        bcc_wii_world_thing_array: [],
        bcc_wii_car_array: [],
        bcc_wii_mysterious_array: [],
        bcc_wii_strange_array: [],
        bcc_wii_link_array: [],
        bcc_wii_font_array: [],
        bcc_wii_flag_array: [],
        bcc_wii_interface_array: [],
        bcc_wii_sound_controls_array: [],
        bcc_wii_text_array: [],
        bcc_wii_multi_font_array: [],
        bcc_wii_emitter_array: [],
        bcc_wii_model_link_array: [],
        bcc_wii_unknown_array: [],
        bcc_wii_unknown_thing_array: [],
        bcc_wii_sound_section_array: [],
        bcc_wii_unknown_idk_sec_array: [],
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

    im_bcc_wii_datapack(global + u32(o + 20), 0, x[i].section_datapack, u32(o + 16));

    return x[i].id
    // 24 bytes;

}
function im_bcc_wii_datapack(o, i, x, e) {

    let end_datapack = o + e
    let offset_patch_list = end_datapack - (u32(o + 12) * 4 + (u32(o + 56) * 8))
    g.m = offset_patch_list - u32(o)
    let index_patch_list_amount = u32(o + 16) + u32(o + 52) + u32(o + 28)
    index_patch_list_amount *= 8
    if (g.console === 'wii') {
        index_patch_list_amount = divisible(index_patch_list_amount, 32)
    } else {
        index_patch_list_amount = divisible(index_patch_list_amount, 16)
    }
    let index_patch_list = g.m - index_patch_list_amount

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "[zyM",
        section_0: [],
        u32_4: u32(o + 4),
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        u32_16: u32(o + 16),
        //amount?
        u32_20: u32(o + 20),
        //amount?
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        u32_56: u32(o + 56),
        //amount?
        u32_100: u32(o + 100),
        //amount?
        section_104: [],
        section_108: [],
        u32_132: u32(o + 132),
        u32_136: u32(o + 136),
        u32_140: u32(o + 140),
        section_148: im_string(o + 148 - g.m, o + 159 - g.m),
        u32_160: u32(o + 160),
        section_168: im_string(o + 168 - g.m, o + 179 - g.m),
        u32_180: u32(o + 180),
        index_patch_list: [],
        offset_patch_list: [],
        ordered_section: [],
        section_audio: [],
        textures: [],
    });

    g.datapack_offset = o
    g.datapack_ref = x

    im_bcc_wii_get_index_patch_list(o, index_patch_list, x[i].index_patch_list)
    im_bcc_wii_get_offset_patch_list(o, g.m + u32(o), x[i].offset_patch_list)

    im_bcc_wii_ordered(g.m, x[i].ordered_section)

    // globalThis.old_log_array = structuredClone(log_array)

    globalThis.temp_array_for_unkown_lengths = [index_patch_list]

    let amt_offset = g.console === "pc" ? 188 : 192

    let after_datapack = amt_offset + o
    globalThis.end_after_datapack = after_datapack
    // let end_after_datapack = after_datapack

    if (u32(o + 4)) {
        if (g.console === "pc") {
            end_after_datapack = after_datapack + divisible((u32(o + 8) * 4), 16)
        } else {
            end_after_datapack = after_datapack + divisible((u32(o + 8) * 4), 32)
        }

        for (let ii = 0; ii < u32(o + 32); ii++) {
            im_bcc_wii_basic_audio(after_datapack + (ii * 8), ii, x[i].section_audio)
        }

        if (g.console === "pc") {
            end_after_datapack = end_after_datapack + u32(o + 4)
        } else {
            end_after_datapack = divisible(end_after_datapack + u32(o + 4), 32)

        }

        // ö(u32(o + 24), get_test_temp)
        // ä(test_temp, u32(o + 24), get_test_temp)
        // ä(test_temp, u32(o + 24), get_test_temp)
        // get_bcc_wii_world_60 ?
    }

    // after the audio section

    if (u32(o + 108)) {
        for (let ii = 0; ii < u32(o + 108); ii++) {
            im_bcc_wii_datapack_108(end_after_datapack + (ii * 4), ii, x[i].section_108)
        }
        if (g.console === "pc") {
            end_after_datapack += divisible(u32(o + 108) * 4, 16)
        } else {
            end_after_datapack += divisible(u32(o + 108) * 4, 32)
        }
    }

    // what about texture offset ?
    if (u32(o + 20)) {
        for (let ii = 0; ii < u32(o + 20); ii++) {
            im_bcc_wii_texture_offset_list(end_after_datapack + (ii * 4), ii, x[i].textures)
        }
    }

    // for (let ii = 0; ii < u32(o + 100); ii++) {
    //     im_bcc_wii_datapack_text_link(g.m + u32(o + 132) + (ii * 8),ii,)
    // }

    //  u32(o + 0) && im_bcc_wii_ordered_list(u32(o + 0) + g.m,x[i].section_0); // offset? 
    // u32(o + 104) && im_bcc_wii_datapack_text_link(u32(o + 104) + g.m,x[i].section_104); // offset? 
    // u32(o + 108) && im_bcc_wii_datapack_108(u32(o + 108) + g.m,x[i].section_108); // offset? 
    return x[i].id
    // 188 bytes;

}
function im_bcc_wii_basic_audio(o, i, x) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "<ral",
        section_0: [],
        section_4: [],
    });

    let e = end_after_datapack

    im_bcc_wii_basic_audio_0(e + u32(o), x[i].section_0)
    im_bcc_wii_basic_audio_4(e + u32(o + 4), x[i].section_4)
    return x[i].id
    // 8 bytes;

}
function im_bcc_wii_basic_audio_0(o, x) {
    let e = end_after_datapack
    let start = e + u32(o + 0)
    let end = start + u32(o + 4)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Nrm4",
        section_0: [],
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        temp_buffer: convert_arraybuffer_base64(buffer.slice(start, end)),
    });

    // 16 bytes;

}
function im_bcc_wii_basic_audio_4(o, x) {
    let e = end_after_datapack

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "B8:F",
        section_0: im_string(e + u32(o + 0) - g.m, 0, false),
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
    });
}
function im_bcc_wii_datapack_108(o, i, x) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Z5>0",
        u32_0: u32(o + 0),
    });

    return x[i].id
    // 4 bytes;

}
function im_bcc_wii_texture_offset_list(o, i, x) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Om@3",
        section_0: [],
    });

    u32(o + 0) && im_bcc_wii_texture_offset_list_0(u32(o + 0) + end_after_datapack, x[i].section_0);

    // 4 bytes;

}
function im_bcc_wii_texture_offset_list_0(o, x) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "i3wP",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        texture_section_8: [],
        texture_section_12: [],
        u32_16: im_string(u32(o + 16) + end_after_datapack - g.m, 0, false),
        texture_section_20: [],
        end_padding: [],
    });

    // calculate texture length
    let texture_x = Math.pow(2, u8(o + 6))
    let texture_y = Math.pow(2, u8(o + 7))
    let total_length = 0
    switch (u8(o + 4)) {
    case 24:
        total_length = texture_x * texture_y * 3
        break
    case 69:
        total_length = texture_x * texture_y / 2
        break
    case 160:
        total_length = texture_x * texture_y * 4
        break
    case 197:
        total_length = texture_x * texture_y / 2
        break
    case 198:
        total_length = texture_x * texture_y / 2
        break
    case 202:
        total_length = texture_x * texture_y
        break
    default:
        console.pk_log(`unknown texture type ${u8(o + 4)}`)
    }
    let start_08_texture = u32(o + 8)
    let start_20_texture = u32(o + 20)
    let end_20_texture = start_20_texture + total_length
    let end_08_texture = start_08_texture + total_length
    // 20 and 16 has mips
    // 12 no mips

    if (u32(o + 12)) {
        let calculate_12_length = total_length * 2
        let start = u32(o + 12) + end_after_datapack
        let end = calculate_12_length + start
        im_bcc_wii_Texture_12(start, x[0].texture_section_12, end)
        // x[0].texture_section_12 = convert_arraybuffer_base64(buffer.slice(start, end))
    }
    if (u8(o + 5) === 0) {
        // no mipmaps
        if (u32(o + 8)) {
            im_bcc_wii_Texture_8(start_08_texture, x[0].texture_section_8, end_08_texture)
            // x[0].texture_section_8.push(convert_arraybuffer_base64(buffer.slice(start_08_texture, end_08_texture)))
        }
        if (u32(o + 20)) {
            im_bcc_wii_Texture_20(start_20_texture, x[0].texture_section_20, end_20_texture)
            // x[0].texture_section_20.push(convert_arraybuffer_base64(buffer.slice(start_20_texture, end_20_texture)))
        }

    } else {
        let mipmap_offset = total_length

        for (let i = 0; i < u8(o + 5) + 1; i++) {

            if (u32(o + 8)) {
                im_bcc_wii_Texture_8(start_08_texture, x[0].texture_section_8, end_08_texture)
                // x[0].texture_section_8.push(convert_arraybuffer_base64(buffer.slice(start_08_texture, end_08_texture)))
            }
            if (u32(o + 20)) {
                im_bcc_wii_Texture_20(start_20_texture, x[0].texture_section_20, end_20_texture)
                // x[0].texture_section_20.push(convert_arraybuffer_base64(buffer.slice(start_20_texture, end_20_texture)))
            }
            start_08_texture += mipmap_offset
            start_20_texture += mipmap_offset
            mipmap_offset = Math.round(mipmap_offset / 4)
            if (u8(o + 5) !== i) {
                end_08_texture += mipmap_offset
                end_20_texture += mipmap_offset
            }

        }

    }

    if (g.console === "pc") {
        let after_padding = u32(o + 16) + end_after_datapack
        while (u8(after_padding) !== 0) {
            after_padding++
        }
        x[0].end_padding = get_next_value_in_array(temp_array_for_unkown_lengths, after_padding) - after_padding
    } else {
        if (u32(o + 20)) {
            x[0].end_padding = get_next_value_in_array(temp_array_for_unkown_lengths, end_20_texture) - end_20_texture
        } else {
            x[0].end_padding = get_next_value_in_array(temp_array_for_unkown_lengths, end_08_texture) - end_08_texture
        }
    }

    // 32 bytes;

}
function im_bcc_wii_Texture_8(o, x, end) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buff",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, end)),
    });

}
function im_bcc_wii_Texture_12(o, x, end) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buf3",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, end)),
    });

}
function im_bcc_wii_Texture_20(o, x, end) {

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "buf5",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, end)),
    });

}
function im_bcc_wii_get_texture_offsets(o, section_offset) {
    get_bcc_wii_texture_offset_list_0(u32(o) + section_offset, section_offset)

    // 4 bytes;

}
function get_bcc_wii_texture_offset_list_0(o, section_offset) {
    temp_array_for_unkown_lengths.push(o)
    if (u32(o + 8)) {
        temp_array_for_unkown_lengths.push(u32(o + 8) + section_offset)
    }
    if (u32(o + 12)) {
        temp_array_for_unkown_lengths.push(u32(o + 8) + section_offset)
    }
    if (u32(o + 16)) {
        temp_array_for_unkown_lengths.push(u32(o + 8) + section_offset)
    }
    if (u32(o + 20)) {
        temp_array_for_unkown_lengths.push(u32(o + 8) + section_offset)
    }

    // 32 bytes;

}

function im_bcc_wii_get_index_patch_list(o, patch_offset, x) {
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

function im_bcc_wii_get_offset_patch_list(o, patch_offset, x) {
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
function im_bcc_wii_ordered(o, x) {

    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ordr",

        bcc_wii_file_specific_section: [],
        bcc_wii_ordered_list: [],
        bcc_wii_model: [],
        bcc_wii_datapack_text_link: [],
        bcc_wii_some_model_anim: [],
        bcc_wii_model_anim_2_type_b: [],
        bcc_wii_model_anim_2_type_c: [],
        bcc_wii_unordered_list: [],

    })

    im_bcc_wii_unordered(o, x[0].bcc_wii_unordered_list)
    g.ordered_ref = x[0]

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "link":
        im_bcc_wii_basic(o, x[0].bcc_wii_file_specific_section)
        break
    case "world":
        im_bcc_wii_world(o, x[0].bcc_wii_file_specific_section)
        break
    case "share":
        im_bcc_wii_share(o, 0, x[0].bcc_wii_file_specific_section)
        break
    default:
        console.pk_log('file type is not set')
    }

}

function im_bcc_wii_unordered(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4unr",
        bcc_wii_world_12: [],
        bcc_wii_world_92: [],
        bcc_wii_world_108: [],
        bcc_wii_world_116: [],
        bcc_wii_world_4: [],
        bcc_wii_model: [],
        bcc_wii_datapack_text_link: [],
        bcc_wii_some_model_anim: [],
        bcc_wii_model_anim_2_type_b: [],
        bcc_wii_model_anim_2_type_c: [],
        bcc_wii_something: [],
        bcc_wii_var: [],
        bcc_wii_idk: [],
        bcc_wii_world_settings: [],
        bcc_wii_object: [],
        bcc_wii_a_single_section: [],
        bcc_wii_world_thing: [],
        bcc_wii_car: [],
        bcc_wii_mysterious: [],
        bcc_wii_strange: [],
        bcc_wii_link: [],
        bcc_wii_font: [],
        bcc_wii_flag: [],
        bcc_wii_interface: [],
        bcc_wii_sound_controls: [],
        bcc_wii_text: [],
        bcc_wii_multi_font: [],
        bcc_wii_emitter: [],
        bcc_wii_model_link: [],
        bcc_wii_unknown: [],
        bcc_wii_unknown_thing: [],
        bcc_wii_sound_section: [],
        bcc_wii_unknown_idk_sec: [],

    })
    g.unordered_ref = x[0]

}

/*
in baisc
*/
function im_bcc_wii_share(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "6f2N",
        section_0: im_string(u32(o + 0), 0, false),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bcc_wii_share_16(u32(o + 16) + (ii * 4) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}
function im_bcc_wii_share_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "=?bn",
        sound_0: im_patch(g.sound_patch_ref, o + 0),
    });

}
function im_bcc_wii_world(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eARE",
        unordered_bcc_wii_world_4_4: 0,
        u32_8: u32(o + 8),
        //amount?
        unordered_bcc_wii_world_12_12: 0,
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        u32_88: u32(o + 88),
        //amount?
        unordered_bcc_wii_world_92_92: 0,
        u32_104: u32(o + 104),
        //amount?
        unordered_bcc_wii_world_108_108: 0,
        u32_112: u32(o + 112),
        //amount?
        unordered_bcc_wii_world_116_116: 0,
        section_120: [],
        unordered_bcc_wii_world_settings_172: 0,
        section_176: [],
        u32_180: u32(o + 180),
        //amount?
        section_184: [],
        u32_204: u32(o + 204),
        //amount?
        section_208: [],
    });

    x[0].unordered_bcc_wii_world_4_4 = in_ml(u32(o + 4), g.bcc_wii_world_4_array, im_bcc_wii_world_4, g.unordered_ref.bcc_wii_world_4);

    for (let i = 0; i < u32(o + 8); i++) {
        x[0].unordered_bcc_wii_world_12_12 = in_ml(u32(o + 12) + (i * 160), g.bcc_wii_world_12_array, im_bcc_wii_world_12, g.unordered_ref.bcc_wii_world_12);
    }
    u32(o + 28) && im_bcc_wii_world_28(u32(o + 28) + g.m, x[0].section_28);
    u32(o + 60) && im_bcc_wii_world_60(u32(o + 60) + g.m, x[0].section_60);

    for (let ii = 0; ii < u32(o + 80); ii++) {
        im_bcc_wii_world_84(u32(o + 84) + (ii * 96) + g.m, ii, x[0].section_84);
    }
    for (let ii = 0; ii < u32(o + 88); ii++) {
        x[0].unordered_bcc_wii_world_92_92 = in_ml(u32(o + 92) + (ii * 112), g.bcc_wii_world_92_array, im_bcc_wii_world_92, g.unordered_ref.bcc_wii_world_92);
    }

    for (let ii = 0; ii < u32(o + 104); ii++) {
        x[0].unordered_bcc_wii_world_108_108 = in_ml(u32(o + 108) + (ii * 96), g.bcc_wii_world_108_array, im_bcc_wii_world_108, g.unordered_ref.bcc_wii_world_108);
    }

    for (let ii = 0; ii < u32(o + 112); ii++) {
        x[0].unordered_bcc_wii_world_116_116 = in_ml(u32(o + 116) + (ii * 128), g.bcc_wii_world_116_array, im_bcc_wii_world_116, g.unordered_ref.bcc_wii_world_116);
    }
    u32(o + 120) && im_bcc_wii_world_120(u32(o + 120) + g.m, x[0].section_120);

    x[0].unordered_bcc_wii_world_settings_172 = in_ml(u32(o + 172), g.bcc_wii_world_settings_array, im_bcc_wii_world_settings, g.unordered_ref.bcc_wii_world_settings);
    u32(o + 176) && im_bcc_wii_world_176(u32(o + 176) + g.m, x[0].section_176);
    u32(o + 184) && im_bcc_wii_world_184(u32(o + 184) + g.m, x[0].section_184);

    for (let ii = 0; ii < u32(o + 204); ii++) {
        im_bcc_wii_world_208(u32(o + 208) + (ii * 4) + g.m, ii, x[0].section_208);
    }
    // 304 bytes;

}
function im_bcc_wii_world_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "<cCj",
        u32_0: u32(o + 0),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        unordered_bcc_wii_car_76: 0,
        u32_80: u32(o + 80),
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
        u8_126: u8(o + 126),
        u8_127: u8(o + 127),
        u8_130: u8(o + 130),
        u32_140: u32(o + 140),
        u32_148: u32(o + 148),
    });

    x[i].unordered_bcc_wii_car_76 = in_ml(u32(o + 76), g.bcc_wii_car_array, im_bcc_wii_car, g.unordered_ref.bcc_wii_car);

}
function im_bcc_wii_world_92(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "0s3t",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        unordered_bcc_wii_idk_80: 0,
        f32_84: f32(o + 84),
    });

    x[i].unordered_bcc_wii_idk_80 = in_ml(u32(o + 80), g.bcc_wii_idk_array, im_bcc_wii_idk, g.unordered_ref.bcc_wii_idk);
    return x[i].id
    // 112 bytes;

}
function im_bcc_wii_world_184(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "W1lX",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        f32_60: f32(o + 60),
        f32_76: f32(o + 76),
        u8_80: u8(o + 80),
        f32_92: f32(o + 92),
    });

    // 96 bytes;

}
function im_bcc_wii_world_108(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "?wsl",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        u32_64: u32(o + 64),
        u32_68: u32(o + 68),
        unordered_bcc_wii_object_72: 0,
        f32_76: f32(o + 76),
        u8_84: u8(o + 84),
        u8_85: u8(o + 85),
        u8_88: u8(o + 88),
        u8_89: u8(o + 89),
        u8_91: u8(o + 91),
    });

    x[i].unordered_bcc_wii_object_72 = in_ml(u32(o + 72), g.bcc_wii_object_array, im_bcc_wii_object, g.unordered_ref.bcc_wii_object);
    return x[i].id
    // 96 bytes;

}
function im_bcc_wii_world_116(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "R>hQ",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        f32_48: f32(o + 48),
        f32_68: f32(o + 68),
        f32_88: f32(o + 88),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
        model_116: in_models(o + 116, g.models_array, im_bcc_wii_model, g.ordered_ref.bcc_wii_model),
    });

    return x[i].id
    // 128 bytes;

}
function im_bcc_wii_world_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0b_V",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        u32_48: u32(o + 48),
        //amount?
        section_80: [],
        section_84: [],
        u32_92: u32(o + 92),
    });
    globalThis.get_bcc_wii_world_28_48_count = u32(o + 48)

    u32(o + 80) && im_bcc_wii_world_28_80(u32(o + 80) + g.m, x[0].section_80);
    u32(o + 84) && im_bcc_wii_world_28_84(u32(o + 84) + g.m, x[0].section_84);

    delete globalThis.get_bcc_wii_world_28_48_count

    // 128 bytes;

}
function im_bcc_wii_world_28_84(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WhJ]",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bcc_wii_world_28_84_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    for (let i = 0; i < u32(o + 20); i++) {
        im_bcc_wii_world_28_84_24(u32(o + 24) + (i * 4) + g.m, i, x[0].section_24);
    }

    // 32 bytes;

}
function im_bcc_wii_world_28_84_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "o4Qp",
        unordered_bcc_wii_world_92_0: 0,
    });

    x[i].unordered_bcc_wii_world_92_0 = in_ml(u32(o + 0), g.bcc_wii_world_92_array, im_bcc_wii_world_92, g.unordered_ref.bcc_wii_world_92);

}
function im_bcc_wii_world_28_84_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "iBhm",
        unordered_bcc_wii_world_108_0: 0,
    });

    x[i].unordered_bcc_wii_world_108_0 = in_ml(u32(o + 0), g.bcc_wii_world_108_array, im_bcc_wii_world_108, g.unordered_ref.bcc_wii_world_108);

}
function im_bcc_wii_world_28_80(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "debX",
        section_0: [],
    });

    for (let i = 0; i < get_bcc_wii_world_28_48_count; i++) {
        im_bcc_wii_world_28_80_0(u32(o + 0) + (i * 4) + g.m, i, x[0].section_0);
        // offset? 
    }

    // 16 bytes;

}
function im_bcc_wii_world_28_80_0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "DtZP",
        unordered_bcc_wii_world_116_0: 0,
    });

    x[i].unordered_bcc_wii_world_116_0 = in_ml(u32(o + 0), g.bcc_wii_world_116_array, im_bcc_wii_world_116, g.unordered_ref.bcc_wii_world_116);

}
function im_bcc_wii_world_84(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "DKln",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        u32_76: u32(o + 76),
        unordered_bcc_wii_world_12_80: 0,
    });

    x[i].unordered_bcc_wii_world_12_80 = in_ml(u32(o + 80), g.bcc_wii_world_12_array, im_bcc_wii_world_12, g.unordered_ref.bcc_wii_world_12);

}
function im_bcc_wii_world_60(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "TUmX",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_20: u16(o + 20),
        u16_22: u16(o + 22),
        u32_40: u32(o + 40),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
    });

    // 96 bytes;

}
function im_bcc_wii_world_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "L1Hi",
        f32_0: f32(o + 0),
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

    u32(o + 16) && im_bcc_wii_world_4_16(u32(o + 16) + g.m, x[i].section_16);
    switch (u32(o + 24)) {
    case 0:
        x[i].section_20 = in_ml(u32(o + 20), g.bcc_wii_world_4_array, im_bcc_wii_world_4, g.unordered_ref.bcc_wii_world_4);
        break;
    case 1:
        u32(o + 20) && im_bcc_wii_world_4_20t1(u32(o + 20) + g.m, x[i].section_20);
        break;
    }
    return x[i].id
    // 64 bytes;

}
function im_bcc_wii_world_4_20t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[RLj",
    });

    // 16 bytes;

}
function im_bcc_wii_world_4_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Z;DI",
    });

    // 96 bytes;

}
function im_bcc_wii_world_120(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eIVe",
        section_0: [],
        u32_4: u32(o + 4),
        //amount?
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
        u32_16: u32(o + 16),
        //amount?
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bcc_wii_world_120_0(u32(o + 0) + (i * 144) + g.m, i, x[0].section_0);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_bcc_wii_world_120_12(u32(o + 12) + (i * 8) + g.m, i, x[0].section_12);
    }

    // 32 bytes;

}
function im_bcc_wii_world_120_0(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "KIme",
        u32_0: u32(o + 0),
        u16_4: u16(o + 4),
        u16_12: u16(o + 12),
        u16_20: u16(o + 20),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        f32_60: f32(o + 60),
        u32_64: u32(o + 64),
        section_68: [],
        section_72: [],
        u32_76: u32(o + 76),
        section_80: [],
        f32_84: f32(o + 84),
        u16_88: u16(o + 88),
        u8_92: u8(o + 92),
        u32_132: u32(o + 132),
    });

    u32(o + 68) && im_bcc_wii_world_120_0_68(u32(o + 68) + g.m, x[i].section_68);
    u32(o + 72) && im_bcc_wii_world_120_0_72(u32(o + 72) + g.m, x[i].section_72);
    u32(o + 80) && im_bcc_wii_world_120_0_80(u32(o + 80) + g.m, x[i].section_80);

}
function im_bcc_wii_world_120_0_80(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Np]f",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_world_120_0_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8XXd",
        f32_0: f32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_world_120_0_72(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m4[=",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_world_120_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "B]6F",
        u32_0: u32(o + 0),
    });

}
function im_bcc_wii_world_208(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Am9Z",
        unordered_bcc_wii_world_thing_0: 0,
    });

    x[i].unordered_bcc_wii_world_thing_0 = in_ml(u32(o + 0), g.bcc_wii_world_thing_array, im_bcc_wii_world_thing, g.unordered_ref.bcc_wii_world_thing);

}
function im_bcc_wii_world_176(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "g4Tp",
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

    u32(o + 4) && im_bcc_wii_world_176_4(u32(o + 4) + g.m, x[0].section_4);

    for (let i = 0; i < u32(o + 8); i++) {
        im_bcc_wii_world_176_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }
    u32(o + 20) && im_bcc_wii_world_176_20(u32(o + 20) + g.m, x[0].section_20);

    for (let i = 0; i < u32(o + 24); i++) {
        im_bcc_wii_world_176_28(u32(o + 28) + (i * 4) + g.m, i, x[0].section_28);
    }

    // 112 bytes;

}
function im_bcc_wii_world_176_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "o>h9",
        unordered_bcc_wii_flag_0: 0,
    });

    x[0].unordered_bcc_wii_flag_0 = in_ml(u32(o + 0), g.bcc_wii_flag_array, im_bcc_wii_flag, g.unordered_ref.bcc_wii_flag);

    // 16 bytes;

}
function im_bcc_wii_world_176_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Ok:_",
        unordered_bcc_wii_var_0: 0,
    });

    x[i].unordered_bcc_wii_var_0 = in_ml(u32(o + 0), g.bcc_wii_var_array, im_bcc_wii_var, g.unordered_ref.bcc_wii_var);

}
function im_bcc_wii_world_176_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[IaM",
        unordered_bcc_wii_something_0: 0,
    });

    x[0].unordered_bcc_wii_something_0 = in_ml(u32(o + 0), g.bcc_wii_something_array, im_bcc_wii_something, g.unordered_ref.bcc_wii_something);

    // 4 bytes;

}
function im_bcc_wii_world_176_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "jPMA",
        unordered_bcc_wii_flag_0: 0,
    });

    x[i].unordered_bcc_wii_flag_0 = in_ml(u32(o + 0), g.bcc_wii_flag_array, im_bcc_wii_flag, g.unordered_ref.bcc_wii_flag);

}
function im_bcc_wii_basic(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ppcY",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_basic_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_basic_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "EAzn",
        section_0: [],
        u32_4: u32(o + 4),
    });

    switch (g.file_dir_type) {
    case "car":
        x[0].section_0 = in_ml(u32(o + 0), g.bcc_wii_car_array, im_bcc_wii_car, g.unordered_ref.bcc_wii_car);
        break
    case "interface":
        x[0].section_0 = in_ml(u32(o + 0), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
        break
    case "link":
        x[0].section_0 = in_ml(u32(o + 0), g.bcc_wii_link_array, im_bcc_wii_link, g.unordered_ref.bcc_wii_link);
        break
    default:
        console.pk_log('file type is not set')
    }

    // 16 bytes;

}
function im_bcc_wii_model(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "X_Pk",
        u32_0: u32(o + 0),
        section_4: im_string(u32(o + 4), 0, false),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_16: u32(o + 16),
        section_20: [],
        section_24: [],
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        f32_56: f32(o + 56),
        u8_60: u8(o + 60),
        u8_61: u8(o + 61),
        u8_62: u8(o + 62),
        u8_63: u8(o + 63),
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        u8_76: u8(o + 76),
        u8_77: u8(o + 77),
        u8_78: u8(o + 78),
        u8_79: u8(o + 79),
    });

    u32(o + 20) && im_bcc_wii_model_20(u32(o + 20) + g.m, x[i].section_20);
    u32(o + 24) && im_bcc_wii_model_24(u32(o + 24) + g.m, x[i].section_24);
    return x[i].id
    // 80 bytes;

}
function im_bcc_wii_model_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lsi;",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_model_20_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_model_20_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "[nOl",
        section_0: [],
    });

    switch (g.console) {
    case "wii":
        u32(o + 0) && im_bcc_wii_model_20_4_0twii(u32(o + 0) + g.m, x[i].section_0);
        // offset? 
        break
    case "pc":
        u32(o + 0) && im_bcc_wii_model_20_4_0tpc(u32(o + 0) + g.m, x[i].section_0);
        // offset? 
        break
    }

}
function im_bcc_wii_model_20_4_0tpc(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AJop",
        u32_0: u32(o + 0),
        f32_8: f32(o + 8),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u32_16: u32(o + 16),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        texture_48: im_patch(g.texture_patch_ref, o + 48),
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        u8_73: u8(o + 73),
        u8_74: u8(o + 74),
        u8_75: u8(o + 75),
        f32_96: f32(o + 96),
        f32_116: f32(o + 116),
        f32_136: f32(o + 136),
        f32_156: f32(o + 156),
        u8_160: u8(o + 160),
        u8_161: u8(o + 161),
        u8_162: u8(o + 162),
        u8_163: u8(o + 163),
        u32_176: u32(o + 176),
        u32_180: u32(o + 180),
        u32_184: u32(o + 184),
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        section_204: [],
        u32_216: u32(o + 216),
        section_220: [],
        u32_224: u32(o + 224),
        section_228: [],
    });

    u32(o + 188) && im_bcc_wii_model_20_4_0tpc_188(u32(o + 188) + g.m, x[0].section_188);
    u32(o + 192) && im_bcc_wii_model_20_4_0tpc_192(u32(o + 192) + g.m, x[0].section_192);
    u32(o + 196) && im_bcc_wii_model_20_4_0tpc_196(u32(o + 196) + g.m, x[0].section_196);
    u32(o + 200) && im_bcc_wii_model_20_4_0tpc_200(u32(o + 200) + g.m, x[0].section_200);
    u32(o + 204) && im_bcc_wii_model_20_4_0tpc_204(u32(o + 204) + g.m, x[0].section_204);
    u32(o + 220) && im_bcc_wii_model_20_4_0tpc_220(u32(o + 220) + g.m, x[0].section_220);
    for (let i = 0; i < u32(o + 224); i++) {
        im_bcc_wii_model_20_4_0tpc_228(u32(o + 228) + (i * 64) + g.m, x[0].section_228);
    }

    // 304 bytes;

}
function im_bcc_wii_model_20_4_0tpc_188(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0tpc_192(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0tpc_196(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0tpc_200(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0tpc_204(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0tpc_220(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8i?L",
        u32_0: u32(o + 0),
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 12) && im_bcc_wii_model_20_4_0tpc_220_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_bcc_wii_model_20_4_0tpc_220_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "85FT",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_bcc_wii_model_20_4_0tpc_228(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "kqvF",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
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
    });

    // 64 bytes;

}
function im_bcc_wii_model_20_4_0twii(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "uupO",
        section_0: [],
        section_0_type: u32(o),
    });

    switch (u32(o)) {
    case 0:
        im_bcc_wii_model_20_4_0twiit0(o, x[0].section_0);
        break
    case 1:
        im_bcc_wii_model_20_4_0twiit1(o, x[0].section_0);
        break
    case 2:
        im_bcc_wii_model_20_4_0twiit2(o, x[0].section_0);
        break
    default:
        console.pk_log("im_bcc_wii_model_20_4_0twii")
    }

}
function im_bcc_wii_model_20_4_0twiit0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9sEe",
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        texture_48: im_patch(g.texture_patch_ref, o + 48),
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        u32_72: u32(o + 72),
        f32_96: f32(o + 96),
        f32_116: f32(o + 116),
        f32_136: f32(o + 136),
        u32_156: u32(o + 156),
        u8_160: u8(o + 160),
        u8_161: u8(o + 161),
        u8_162: u8(o + 162),
        u8_163: u8(o + 163),
        u32_176: u32(o + 176),
        section_180: [],
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        section_208: [],
        u32_212: u32(o + 212),
        u32_216: u32(o + 216),
        u8_220: u8(o + 220),
        //amount?
        u8_221: u8(o + 221),
    });

    u32(o + 180) && im_bcc_wii_model_20_4_0twiit0_180(u32(o + 180) + g.m, x[0].section_180);
    u32(o + 188) && im_bcc_wii_model_20_4_0twiit0_188(u32(o + 188) + g.m, x[0].section_188);
    u32(o + 192) && im_bcc_wii_model_20_4_0twiit0_192(u32(o + 192) + g.m, x[0].section_192);
    u32(o + 196) && im_bcc_wii_model_20_4_0twiit0_196(u32(o + 196) + g.m, x[0].section_196);
    u32(o + 200) && im_bcc_wii_model_20_4_0twiit0_200(u32(o + 200) + g.m, x[0].section_200);

    if (u32(o + 208)) {
    for (let i = 0; i < u32(o + 220); i++) {
        im_bcc_wii_model_20_4_0twiit0_208(u32(o + 208) + (i * 64) + g.m, i, x[0].section_208);
    }
    }

    // 224 bytes;

}
function im_bcc_wii_model_20_4_0twiit0_180(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit0_188(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit0_192(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit0_196(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit0_200(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DJ=b",
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_bcc_wii_model_20_4_0twiit0_200_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_model_20_4_0twiit0_200_8(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit0_208(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8qlu",
        f32_0: f32(o + 0),
        f32_20: f32(o + 20),
        f32_40: f32(o + 40),
        f32_60: f32(o + 60),
    });

}
function im_bcc_wii_model_20_4_0twiit1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MnF3",
        u32_0: u32(o + 0),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_32: u32(o + 32),
        u32_36: u32(o + 36),
        texture_48: im_patch(g.texture_patch_ref, o + 48),
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        u32_72: u32(o + 72),
        f32_96: f32(o + 96),
        f32_116: f32(o + 116),
        f32_136: f32(o + 136),
        u32_156: u32(o + 156),
        u8_160: u8(o + 160),
        u8_161: u8(o + 161),
        u8_162: u8(o + 162),
        u8_163: u8(o + 163),
        u32_176: u32(o + 176),
        section_180: [],
        section_184: [],
        section_192: [],
        section_196: [],
        section_200: [],
        section_208: [],
        u32_212: u32(o + 212),
        u32_216: u32(o + 216),
        u8_220: u8(o + 220),
        u8_221: u8(o + 221),
    });

    u32(o + 180) && im_bcc_wii_model_20_4_0twiit1_180(u32(o + 180) + g.m, x[0].section_180);
    u32(o + 184) && im_bcc_wii_model_20_4_0twiit1_184(u32(o + 184) + g.m, x[0].section_184);
    u32(o + 192) && im_bcc_wii_model_20_4_0twiit1_192(u32(o + 192) + g.m, x[0].section_192);
    u32(o + 196) && im_bcc_wii_model_20_4_0twiit1_196(u32(o + 196) + g.m, x[0].section_196);
    u32(o + 200) && im_bcc_wii_model_20_4_0twiit1_200(u32(o + 200) + g.m, x[0].section_200);
    u32(o + 208) && im_bcc_wii_model_20_4_0twiit1_208(u32(o + 208) + g.m, x[0].section_208);

    // 224 bytes;

}
function im_bcc_wii_model_20_4_0twiit1_180(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit1_184(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit1_192(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit1_196(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit1_200(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0;Eh",
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bcc_wii_model_20_4_0twiit1_200_8(u32(o + 8) + (i * 1) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_bcc_wii_model_20_4_0twiit1_200_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "qas3",
        u8_0: u8(o + 0),
    });

}
function im_bcc_wii_model_20_4_0twiit1_208(o, x) {
    let find_next_offset_i = (o + 1) - g.m

    find_next_offset_i = get_next_value_in_array(log_array.p_offset.array, find_next_offset_i)

    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "e6Dh",
        temp_buffer: convert_arraybuffer_base64(buffer.slice(o, find_next_offset_i + g.m)),
    });

    // ??? bytes;

}
function im_bcc_wii_model_20_4_0twiit2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HRcV",
        u32_0: u32(o + 0),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u8_68: u8(o + 68),
        u8_69: u8(o + 69),
        u8_70: u8(o + 70),
        u8_71: u8(o + 71),
        u32_72: u32(o + 72),
        f32_96: f32(o + 96),
        f32_116: f32(o + 116),
        f32_136: f32(o + 136),
        u32_156: u32(o + 156),
        u8_160: u8(o + 160),
        u8_161: u8(o + 161),
        u8_162: u8(o + 162),
        u8_163: u8(o + 163),
        u32_176: u32(o + 176),
        //amount?
        section_180: [],
        u32_184: u32(o + 184),
        //amount?
        section_188: [],
        u32_192: u32(o + 192),
        //amount?
        section_196: [],
        u32_200: u32(o + 200),
        //amount?
        section_204: [],
    });

    for (let i = 0; i < u32(o + 176); i++) {
        im_bcc_wii_model_20_4_0twiit2_180(u32(o + 180) + (i * 12) + g.m, i, x[0].section_180);
    }

    for (let i = 0; i < u32(o + 184); i++) {
        im_bcc_wii_model_20_4_0twiit2_188(u32(o + 188) + (i * 12) + g.m, i, x[0].section_188);
    }

    for (let i = 0; i < u32(o + 192); i++) {
        im_bcc_wii_model_20_4_0twiit2_196(u32(o + 196) + (i * 8) + g.m, i, x[0].section_196);
    }

    for (let i = 0; i < u32(o + 200); i++) {
        im_bcc_wii_model_20_4_0twiit2_204(u32(o + 204) + (i * 8) + g.m, i, x[0].section_204);
    }

    // 224 bytes;

}
function im_bcc_wii_model_20_4_0twiit2_180(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "M@pS",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_model_20_4_0twiit2_188(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "u<l_",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_model_20_4_0twiit2_196(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ":1PM",
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        u8_5: u8(o + 5),
        u8_7: u8(o + 7),
    });

}
function im_bcc_wii_model_20_4_0twiit2_204(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "]ZJU",
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        u8_5: u8(o + 5),
        u8_7: u8(o + 7),
    });

}
function im_bcc_wii_model_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ua@T",
        f32_0: f32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_datapack_text_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "F;6<",
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_text(u32(o + 4) + g.m, x[i].section_4);
    // offset? 
    return x[i].id
    // 8 bytes;

}
function im_bcc_wii_some_model_anim(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "VJF;",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u32_12: u32(o + 12),
        //amount?
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_28: f32(o + 28),
        section_32: [],
        section_36: [],
        section_40: im_string(u32(o + 40), 0, false),
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bcc_wii_some_model_anim_32(u32(o + 32) + (ii * 4) + g.m, ii, x[i].section_32);
    }
    u32(o + 36) && im_bcc_wii_some_model_anim_36(u32(o + 36) + g.m, x[i].section_36);
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_some_model_anim_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "f>ce",
        section_0: im_string(u32(o + 0), 0, false),
    });

}
function im_bcc_wii_some_model_anim_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "2nS@",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        section_4: [],
        f32_8: f32(o + 8),
    });

    u32(o + 4) && im_bcc_wii_some_model_anim_36(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_model_anim_2_type_b(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "fTx1",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_8: im_string(u32(o + 8), 0, false),
        section_16: [],
        section_20: [],
    });

    u32(o + 16) && im_bcc_wii_model_anim_2_type_b_16(u32(o + 16) + g.m, x[i].section_16);
    u32(o + 20) && im_bcc_wii_model_anim_2_type_b_20(u32(o + 20) + g.m, x[i].section_20);
    return x[i].id
    // 32 bytes;

}
function im_bcc_wii_model_anim_2_type_b_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pU;;",
    });

    // 16 bytes;

}
function im_bcc_wii_model_anim_2_type_b_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?B2y",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        f32_20: f32(o + 20),
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
    });

    for (let i = 0; i < u32(o + 36); i++) {
        im_bcc_wii_model_anim_2_type_b_20_40(u32(o + 40) + (i * 4) + g.m, i, x[0].section_40);
    }

    // 48 bytes;

}
function im_bcc_wii_model_anim_2_type_b_20_40(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "8Qeg",
        section_0: [],
    });

    u32(o + 0) && im_bcc_wii_model_anim_2_type_b_20_40_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_bcc_wii_model_anim_2_type_b_20_40_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3pDR",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        section_40: [],
    });

    u32(o + 40) && im_bcc_wii_model_anim_2_type_b_20_40_0_40(u32(o + 40) + g.m, x[0].section_40);

    // 48 bytes;

}
function im_bcc_wii_model_anim_2_type_b_20_40_0_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9:gV",
        section_0: [],
    });

    u32(o + 0) && im_bcc_wii_model_anim_2_type_b_20_40_0_40_0(u32(o + 0) + g.m, x[0].section_0);

    // 16 bytes;

}
function im_bcc_wii_model_anim_2_type_b_20_40_0_40_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KB;w",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 48 bytes;

}
function im_bcc_wii_model_anim_2_type_c(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "q<vl",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u32_28: u32(o + 28),
        //amount?
        section_32: [],
        section_36: im_string(u32(o + 36), 0, false),
    });

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bcc_wii_model_anim_2_type_c_24(u32(o + 24) + (ii * 2) + g.m, ii, x[i].section_24);
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        im_bcc_wii_model_anim_2_type_c_32(u32(o + 32) + (ii * 24) + g.m, ii, x[i].section_32);
    }
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_model_anim_2_type_c_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "V@SC",
        u16_0: u16(o + 0),
    });

}
function im_bcc_wii_model_anim_2_type_c_32(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "9AKU",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
    });

}
function im_bcc_wii_something(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "CFq>",
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u32_28: u32(o + 28),
        u32_32: u32(o + 32),
    });

    return x[i].id
    // 64 bytes;

}
function im_bcc_wii_var(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Pmr>",
        section_148: im_string(u32(o + 148), 0, false),
        u32_152: u32(o + 152),
        section_156: [],
        u32_164: u32(o + 164),
        //amount?
        section_168: [],
    });

    u32(o + 156) && im_bcc_wii_var_156(u32(o + 156) + g.m, x[i].section_156);

    for (let ii = 0; ii < u32(o + 164); ii++) {
        im_bcc_wii_var_168(u32(o + 168) + (ii * 36) + g.m, ii, x[i].section_168);
    }
    return x[i].id
    // 176 bytes;

}
function im_bcc_wii_var_156(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gddb",
        unordered_bcc_wii_var_0: 0,
    });

    x[0].unordered_bcc_wii_var_0 = in_ml(u32(o + 0), g.bcc_wii_var_array, im_bcc_wii_var, g.unordered_ref.bcc_wii_var);

    // 16 bytes;

}
function im_bcc_wii_var_168(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "@?Yc",
        u32_12: u32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    u32(o + 16) && im_bcc_wii_var_168_16(u32(o + 16) + g.m, x[i].section_16);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bcc_wii_var_168_24(u32(o + 24) + (ii * 24) + g.m, ii, x[i].section_24);
    }

}
function im_bcc_wii_var_168_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "e8Y^",
        u32_4: u32(o + 4),
        section_12: [],
        section_16: [],
    });

    switch (u32(o + 4)) {
    case 7:
        u32(o + 12) && im_bcc_wii_var_168_16_12t7(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 21:
        x[0].section_12 = in_ml(u32(o + 12), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
        break;
    }
    u32(o + 16) && im_bcc_wii_var_168_16_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_bcc_wii_var_168_16_12t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "f?MQ",
    });

    // 16 bytes;

}
function im_bcc_wii_var_168_16_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8AG^",
    });

    // 16 bytes;

}
function im_bcc_wii_var_168_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "[s<N",
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u32_8: u32(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    switch (u32(o + 8)) {
    case 1:
        u32(o + 12) && im_bcc_wii_var_168_24_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 5:
        u32(o + 12) && im_bcc_wii_var_168_24_12t5(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 15:
        u32(o + 12) && im_bcc_wii_var_168_24_12t15(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 17:
        u32(o + 12) && im_bcc_wii_var_168_24_12t17(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 18:
        u32(o + 12) && im_bcc_wii_var_168_24_12t18(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
}
function im_bcc_wii_var_168_24_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gDue",
        section_0: [],
        u8_4: u8(o + 4),
    });

    u32(o + 0) && im_bcc_wii_var_168_24_12t1_0(u32(o + 0) + g.m, x[0].section_0);

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t1_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "em=L",
        section_0: [],
        u8_4: u8(o + 4),
        u8_6: u8(o + 6),
    });

    u32(o + 0) && im_bcc_wii_var_168_24_12t1_0_0(u32(o + 0) + g.m, x[0].section_0);

    // 32 bytes;

}
function im_bcc_wii_var_168_24_12t1_0_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "?re[",
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "o?UJ",
        section_0: [],
        u8_4: u8(o + 4),
    });

    u32(o + 0) && im_bcc_wii_var_168_24_12t5_0(u32(o + 0) + g.m, x[0].section_0);

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t5_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@9ZY",
        unordered_bcc_wii_interface_0: 0,
        u8_5: u8(o + 5),
        section_8: [],
    });

    x[0].unordered_bcc_wii_interface_0 = in_ml(u32(o + 0), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    u32(o + 8) && im_bcc_wii_var_168_24_12t5_0_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t5_0_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "oI^7",
    });

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wRKz",
        unordered_bcc_wii_var_0: 0,
        u32_4: u32(o + 4),
    });

    x[0].unordered_bcc_wii_var_0 = in_ml(u32(o + 0), g.bcc_wii_var_array, im_bcc_wii_var, g.unordered_ref.bcc_wii_var);

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "EN9k",
    });

    // 16 bytes;

}
function im_bcc_wii_var_168_24_12t18(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jaO?",
        unordered_bcc_wii_something_4: 0,
        section_8: [],
        u32_16: u32(o + 16),
    });

    x[0].unordered_bcc_wii_something_4 = in_ml(u32(o + 4), g.bcc_wii_something_array, im_bcc_wii_something, g.unordered_ref.bcc_wii_something);
    u32(o + 8) && im_bcc_wii_var_168_24_12t18_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_bcc_wii_var_168_24_12t18_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ZZi^",
    });

    // 16 bytes;

}
function im_bcc_wii_idk(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "qZhz",
        section_0: im_string(u32(o + 0), 0, false),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        model_16: in_models(o + 16, g.models_array, im_bcc_wii_model, g.ordered_ref.bcc_wii_model),
        f32_24: f32(o + 24),
        section_36: [],
        unordered_bcc_wii_idk_44: 0,
        u8_80: u8(o + 80),
        u8_81: u8(o + 81),
        u8_82: u8(o + 82),
        u8_83: u8(o + 83),
    });

    u32(o + 36) && im_bcc_wii_idk_36(u32(o + 36) + g.m, x[i].section_36);
    x[i].unordered_bcc_wii_idk_44 = in_ml(u32(o + 44), g.bcc_wii_idk_array, im_bcc_wii_idk, g.unordered_ref.bcc_wii_idk);
    return x[i].id
    // 96 bytes;

}
function im_bcc_wii_idk_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AI]P",
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
        unordered_bcc_wii_world_thing_40: 0,
        u8_44: u8(o + 44),
        u8_45: u8(o + 45),
        section_60: [],
        u32_64: u32(o + 64),
        section_68: [],
    });

    x[0].unordered_bcc_wii_world_thing_40 = in_ml(u32(o + 40), g.bcc_wii_world_thing_array, im_bcc_wii_world_thing, g.unordered_ref.bcc_wii_world_thing);
    u32(o + 60) && im_bcc_wii_idk_36_60(u32(o + 60) + g.m, x[0].section_60);
    u32(o + 68) && im_bcc_wii_idk_36_68(u32(o + 68) + g.m, x[0].section_68);

    // 80 bytes;

}
function im_bcc_wii_idk_36_60(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^v4p",
        f32_0: f32(o + 0),
        section_4: [],
        section_8: [],
    });

    u32(o + 4) && im_bcc_wii_idk_36_60_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_bcc_wii_idk_36_60_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_idk_36_60_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ulHl",
    });

    // 48 bytes;

}
function im_bcc_wii_idk_36_60_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Spst",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_idk_36_60_8_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_idk_36_60_8_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "88wN",
        section_0: [],
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 0) && im_bcc_wii_idk_36_60_8_4_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 8) && im_bcc_wii_idk_36_60_8_4_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_idk_36_60_8_4_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":h:6",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_idk_36_60_8_4_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_idk_36_60_8_4_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "bl?B",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_idk_36_60_8_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "hpE3",
        section_8: [],
        unordered_bcc_wii_world_thing_12: 0,
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) && im_bcc_wii_idk_36_60_8_4_8_8(u32(o + 8) + g.m, x[0].section_8);
    x[0].unordered_bcc_wii_world_thing_12 = in_ml(u32(o + 12), g.bcc_wii_world_thing_array, im_bcc_wii_world_thing, g.unordered_ref.bcc_wii_world_thing);
    u32(o + 20) && im_bcc_wii_idk_36_60_8_4_8_20(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_bcc_wii_idk_36_60_8_4_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "op;Z",
    });

    // 48 bytes;

}
function im_bcc_wii_idk_36_60_8_4_8_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "eRnZ",
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
function im_bcc_wii_idk_36_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "a36q",
        unordered_bcc_wii_unknown_0: 0,
    });

    x[0].unordered_bcc_wii_unknown_0 = in_ml(u32(o + 0), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

    // 16 bytes;

}
function im_bcc_wii_world_settings(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "XGOk",
        section_0: [],
        section_4: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u8_37: u8(o + 37),
        u8_39: u8(o + 39),
        u32_56: u32(o + 56),
        //amount?
        section_60: [],
        section_64: [],
        texture_68: im_patch(g.texture_patch_ref, o + 68),
        f32_72: f32(o + 72),
        section_76: [],
        section_84: [],
        texture_88: im_patch(g.texture_patch_ref, o + 88),
        texture_92: im_patch(g.texture_patch_ref, o + 92),
        texture_96: im_patch(g.texture_patch_ref, o + 96),
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        u16_110: u16(o + 110),
        section_112: [],
        f32_116: f32(o + 116),
        f32_120: f32(o + 120),
        section_124: [],
        u32_128: u32(o + 128),
        section_132: [],
        f32_160: f32(o + 160),
        f32_164: f32(o + 164),
        f32_168: f32(o + 168),
        f32_172: f32(o + 172),
        f32_176: f32(o + 176),
        u8_182: u8(o + 182),
        texture_184: im_patch(g.texture_patch_ref, o + 184),
        f32_188: f32(o + 188),
        f32_192: f32(o + 192),
        f32_196: f32(o + 196),
        f32_200: f32(o + 200),
        f32_204: f32(o + 204),
        f32_208: f32(o + 208),
        f32_212: f32(o + 212),
        f32_216: f32(o + 216),
        unordered_bcc_wii_font_228: 0,
    });

    u32(o + 0) && im_bcc_wii_world_settings_0(u32(o + 0) + g.m, x[i].section_0);
    u32(o + 4) && im_bcc_wii_world_settings_4(u32(o + 4) + g.m, x[i].section_4);

    for (let ii = 0; ii < u32(o + 56); ii++) {
        im_bcc_wii_world_settings_60(u32(o + 60) + (ii * 64) + g.m, ii, x[i].section_60);
    }
    u32(o + 64) && im_bcc_wii_world_settings_64(u32(o + 64) + g.m, x[i].section_64);
    u32(o + 76) && im_bcc_wii_world_settings_76(u32(o + 76) + g.m, x[i].section_76);
    u32(o + 84) && im_bcc_wii_world_settings_84(u32(o + 84) + g.m, x[i].section_84);
    u32(o + 112) && im_bcc_wii_world_settings_112(u32(o + 112) + g.m, x[i].section_112);
    u32(o + 124) && im_bcc_wii_world_settings_124(u32(o + 124) + g.m, x[i].section_124);
    u32(o + 132) && im_bcc_wii_world_settings_132(u32(o + 132) + g.m, x[i].section_132);
    x[i].unordered_bcc_wii_font_228 = in_ml(u32(o + 228), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
    return x[i].id
    // 240 bytes;

}
function im_bcc_wii_world_settings_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_PmP",
        unordered_bcc_wii_interface_0: 0,
        u32_8: u32(o + 8),
        section_12: im_string(u32(o + 12), 0, false),
        texture_20: im_patch(g.texture_patch_ref, o + 20),
        u32_36: u32(o + 36),
        //amount?
        section_40: [],
    });

    x[0].unordered_bcc_wii_interface_0 = in_ml(u32(o + 0), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);

    for (let i = 0; i < u32(o + 36); i++) {
        im_bcc_wii_world_settings_0_40(u32(o + 40) + (i * 8) + g.m, i, x[0].section_40);
    }

    // 48 bytes;

}
function im_bcc_wii_world_settings_0_40(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ">VG;",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

}
function im_bcc_wii_world_settings_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "qwj<",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        section_4: [],
        section_8: [],
        section_12: [],
        section_16: [],
    });

    u32(o + 4) && im_bcc_wii_world_settings_4_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_bcc_wii_world_settings_4_4(u32(o + 8) + g.m, x[0].section_8);
    u32(o + 12) && im_bcc_wii_world_settings_4_4(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 16) && im_bcc_wii_world_settings_4_4(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_bcc_wii_world_settings_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PZin",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_world_settings_4_4_4(u32(o + 4) + (i * 16) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_bcc_wii_world_settings_4_4_12(u32(o + 12) + (i * 16) + g.m, i, x[0].section_12);
    }

    // 32 bytes;

}
function im_bcc_wii_world_settings_4_4_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "zRtN",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
    });

}
function im_bcc_wii_world_settings_4_4_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "mv7c",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
    });

}
function im_bcc_wii_world_settings_60(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "xF5=",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_36: f32(o + 36),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
    });

}
function im_bcc_wii_world_settings_64(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "YeZe",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_world_settings_76(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@dfA",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_bcc_wii_world_settings_84(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dgeh",
    });

    // 16 bytes;

}
function im_bcc_wii_world_settings_112(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xIGR",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
    });

    // 16 bytes;

}
function im_bcc_wii_world_settings_124(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "H]fG",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_world_settings_132(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";>L7",
        section_0: im_string(u32(o + 0), 0, false),
    });

    // 16 bytes;

}
function im_bcc_wii_object(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";F2O",
        section_4: [],
        f32_12: f32(o + 12),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        section_44: [],
        u8_62: u8(o + 62),
        f32_76: f32(o + 76),
        f32_84: f32(o + 84),
        unordered_bcc_wii_unknown_88: 0,
        u8_97: u8(o + 97),
        u8_99: u8(o + 99),
        unordered_bcc_wii_text_100: 0,
        u32_104: u32(o + 104),
        //amount?
        section_108: [],
        u8_116: u8(o + 116),
        u8_117: u8(o + 117),
        u8_118: u8(o + 118),
        u8_119: u8(o + 119),
    });

    switch (u8(o + 19)) {
    case 17:
        u32(o + 4) && im_bcc_wii_object_4t17(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 20:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_a_single_section_array, im_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section);
        break;
    }
    u32(o + 44) && im_bcc_wii_object_44(u32(o + 44) + g.m, x[i].section_44);
    x[i].unordered_bcc_wii_unknown_88 = in_ml(u32(o + 88), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);
    x[i].unordered_bcc_wii_text_100 = in_ml(u32(o + 100), g.bcc_wii_text_array, im_bcc_wii_text, g.unordered_ref.bcc_wii_text);

    for (let ii = 0; ii < u32(o + 104); ii++) {
        im_bcc_wii_mysterious(u32(o + 108) + (ii * 64) + g.m, ii, x[i].section_108);
    }
    return x[i].id
    // 128 bytes;

}
function im_bcc_wii_object_4t17(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Q4US",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_object_44(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SLpY",
        f32_0: f32(o + 0),
        section_4: [],
        section_8: [],
    });

    u32(o + 4) && im_bcc_wii_object_44_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_bcc_wii_object_44_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_object_44_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=non",
    });

    // 48 bytes;

}
function im_bcc_wii_object_44_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "1c7N",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_object_44_8_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_object_44_8_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WFpa",
        section_0: [],
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 0) && im_bcc_wii_object_44_8_4_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 8) && im_bcc_wii_object_44_8_4_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_object_44_8_4_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "XiPr",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_object_44_8_4_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_object_44_8_4_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "cPUY",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_object_44_8_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rmRi",
        section_8: [],
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) && im_bcc_wii_object_44_8_4_8_8(u32(o + 8) + g.m, x[0].section_8);
    u32(o + 20) && im_bcc_wii_object_44_8_4_8_20(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_bcc_wii_object_44_8_4_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "vXEm",
    });

    // 48 bytes;

}
function im_bcc_wii_object_44_8_4_8_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "q:^h",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_bcc_wii_a_single_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "m<yg",
        u32_4: u32(o + 4),
        u16_12: u16(o + 12),
        u32_20: u32(o + 20),
    });

    return x[i].id
    // 32 bytes;

}
function im_bcc_wii_world_thing(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "bIIT",
        u32_0: u32(o + 0),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        u32_36: u32(o + 36),
        unordered_bcc_wii_unknown_40: 0,
        f32_44: f32(o + 44),
        unordered_bcc_wii_unknown_48: 0,
        f32_52: f32(o + 52),
        f32_60: f32(o + 60),
        f32_68: f32(o + 68),
        u32_72: u32(o + 72),
        //amount?
        section_76: [],
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        unordered_bcc_wii_sound_section_88: 0,
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
    });

    u32(o + 20) && im_bcc_wii_world_thing_20(u32(o + 20) + g.m, x[i].section_20);
    x[i].unordered_bcc_wii_unknown_40 = in_ml(u32(o + 40), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);
    x[i].unordered_bcc_wii_unknown_48 = in_ml(u32(o + 48), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

    for (let ii = 0; ii < u32(o + 72); ii++) {
        im_bcc_wii_world_thing_76(u32(o + 76) + (ii * 4) + g.m, ii, x[i].section_76);
    }
    x[i].unordered_bcc_wii_sound_section_88 = in_ml(u32(o + 88), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);
    return x[i].id
    // 144 bytes;

}
function im_bcc_wii_world_thing_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "k6g6",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_world_thing_76(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "OoNP",
        unordered_bcc_wii_unknown_0: 0,
    });

    x[i].unordered_bcc_wii_unknown_0 = in_ml(u32(o + 0), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

}
function im_bcc_wii_car(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "dYoS",
        section_0: [],
        u8_4: u8(o + 4),
    });

    u32(o + 0) && im_bcc_wii_car_0(u32(o + 0) + g.m, x[i].section_0);
    return x[i].id
    // 16 bytes;

}
function im_bcc_wii_car_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";Ipi",
        unordered_bcc_wii_model_anim_2_type_b_16: 0,
        section_20: [],
        section_24: [],
        section_28: [],
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: u32(o + 44),
        //amount?
        section_48: [],
        u32_52: u32(o + 52),
        //amount?
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        u32_68: u32(o + 68),
        section_72: [],
    });

    x[0].unordered_bcc_wii_model_anim_2_type_b_16 = in_ml(u32(o + 16), g.bcc_wii_model_anim_2_type_b_array, im_bcc_wii_model_anim_2_type_b, g.unordered_ref.bcc_wii_model_anim_2_type_b);
    u32(o + 20) && im_bcc_wii_car_0_20(u32(o + 20) + g.m, x[0].section_20);
    u32(o + 24) && im_bcc_wii_car_0_24(u32(o + 24) + g.m, x[0].section_24);
    u32(o + 28) && im_bcc_wii_car_0_28(u32(o + 28) + g.m, x[0].section_28);
    u32(o + 32) && im_bcc_wii_car_0_32(u32(o + 32) + g.m, x[0].section_32);
    u32(o + 36) && im_bcc_wii_car_0_36(u32(o + 36) + g.m, x[0].section_36);
    u32(o + 40) && im_bcc_wii_car_0_40(u32(o + 40) + g.m, x[0].section_40);

    for (let i = 0; i < u32(o + 44); i++) {
        im_bcc_wii_car_0_48(u32(o + 48) + (i * 8) + g.m, i, x[0].section_48);
    }

    for (let i = 0; i < u32(o + 52); i++) {
        im_bcc_wii_car_0_56(u32(o + 56) + (i * 12) + g.m, i, x[0].section_56);
    }

    for (let i = 0; i < u32(o + 60); i++) {
        im_bcc_wii_car_0_64(u32(o + 64) + (i * 12) + g.m, i, x[0].section_64);
    }
    u32(o + 72) && im_bcc_wii_car_0_72(u32(o + 72) + g.m, x[0].section_72);

    // 80 bytes;

}
function im_bcc_wii_car_0_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "OhSr",
        section_0: [],
        section_4: [],
        unordered_bcc_wii_sound_section_8: 0,
        unordered_bcc_wii_sound_section_12: 0,
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

    u32(o + 0) && im_bcc_wii_car_0_20_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_bcc_wii_car_0_20_4(u32(o + 4) + g.m, x[0].section_4);
    x[0].unordered_bcc_wii_sound_section_8 = in_ml(u32(o + 8), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);
    x[0].unordered_bcc_wii_sound_section_12 = in_ml(u32(o + 12), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);

    for (let i = 0; i < u32(o + 16); i++) {
        im_bcc_wii_car_0_20_20(u32(o + 20) + (i * 8) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_bcc_wii_car_0_20_20(u32(o + 28) + (i * 8) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_bcc_wii_car_0_20_20(u32(o + 36) + (i * 8) + g.m, i, x[0].section_36);
    }

    for (let i = 0; i < u32(o + 40); i++) {
        im_bcc_wii_car_0_20_20(u32(o + 44) + (i * 8) + g.m, i, x[0].section_44);
    }

    // 48 bytes;

}
function im_bcc_wii_car_0_20_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_04m",
        f32_0: f32(o + 0),
        texture_4: im_patch(g.texture_patch_ref, o + 4),
        section_8: [],
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u32_24: u32(o + 24),
        unordered_bcc_wii_unknown_28: 0,
        unordered_bcc_wii_unknown_32: 0,
        unordered_bcc_wii_unknown_36: 0,
    });

    u32(o + 8) && im_bcc_wii_car_0_20_0_8(u32(o + 8) + g.m, x[0].section_8);

    for (let i = 0; i < u32(o + 12); i++) {
        im_bcc_wii_car_0_20_0_16(u32(o + 16) + (i * 20) + g.m, i, x[0].section_16);
    }
    x[0].unordered_bcc_wii_unknown_28 = in_ml(u32(o + 28), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);
    x[0].unordered_bcc_wii_unknown_32 = in_ml(u32(o + 32), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);
    x[0].unordered_bcc_wii_unknown_36 = in_ml(u32(o + 36), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

    // 48 bytes;

}
function im_bcc_wii_car_0_20_0_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@<q4",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_20_0_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "EQAQ",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        unordered_bcc_wii_a_single_section_8: 0,
        section_12: [],
        section_16: [],
    });

    x[i].unordered_bcc_wii_a_single_section_8 = in_ml(u32(o + 8), g.bcc_wii_a_single_section_array, im_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section);
    u32(o + 12) && im_bcc_wii_car_0_20_0_16_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 16) && im_bcc_wii_car_0_20_0_16_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_bcc_wii_car_0_20_0_16_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "aXMK",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_car_0_20_0_16_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "IR2D",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_mysterious(u32(o + 4) + (i * 64) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_car_0_20_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nJw[",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_20: f32(o + 20),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
        f32_52: f32(o + 52),
        u32_60: u32(o + 60),
        unordered_bcc_wii_a_single_section_64: 0,
        section_68: [],
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        section_80: [],
        section_84: [],
        section_88: [],
        section_92: [],
    });

    x[0].unordered_bcc_wii_a_single_section_64 = in_ml(u32(o + 64), g.bcc_wii_a_single_section_array, im_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section);
    u32(o + 68) && im_bcc_wii_car_0_20_4_68(u32(o + 68) + g.m, x[0].section_68);
    u32(o + 80) && im_bcc_wii_car_0_20_4_80(u32(o + 80) + g.m, x[0].section_80);
    u32(o + 84) && im_bcc_wii_car_0_20_4_84(u32(o + 84) + g.m, x[0].section_84);
    u32(o + 88) && im_bcc_wii_car_0_20_4_88(u32(o + 88) + g.m, x[0].section_88);
    u32(o + 92) && im_bcc_wii_car_0_20_4_92(u32(o + 92) + g.m, x[0].section_92);

    // 96 bytes;

}
function im_bcc_wii_car_0_20_4_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4?JD",
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_20_4_80(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SrlY",
        u32_0: u32(o + 0),
        f32_8: f32(o + 8),
        unordered_bcc_wii_unknown_16: 0,
    });

    x[0].unordered_bcc_wii_unknown_16 = in_ml(u32(o + 16), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

    // 32 bytes;

}
function im_bcc_wii_car_0_20_4_84(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "v0S5",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_20_4_88(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m5lT",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_20_4_92(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nx9Y",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_20_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "rOui",
        u8_0: u8(o + 0),
        section_4: [],
    });

    switch (u8(o + 0)) {
    case 1:
        u32(o + 4) && im_bcc_wii_car_0_20_20_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 3:
        u32(o + 4) && im_bcc_wii_car_0_20_20_4t3(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
}
function im_bcc_wii_car_0_20_20_4t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tj]M",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        u8_32: u8(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_64: f32(o + 64),
    });

    // 80 bytes;

}
function im_bcc_wii_car_0_20_20_4t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "P?4F",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
    });

    // 32 bytes;

}
function im_bcc_wii_car_0_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AkNi",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_car_0_24_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_car_0_24_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "XQZp",
        section_0: [],
        section_4: [],
        section_8: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
        f32_48: f32(o + 48),
    });

    u32(o + 0) && im_bcc_wii_car_0_24_4_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_bcc_wii_car_0_24_4_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_bcc_wii_car_0_24_4_8(u32(o + 8) + g.m, x[0].section_8);

    // 64 bytes;

}
function im_bcc_wii_car_0_24_4_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "aew^",
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        section_40: [],
        section_48: [],
    });

    u32(o + 40) && im_bcc_wii_car_0_24_4_0_40(u32(o + 40) + g.m, x[0].section_40);
    u32(o + 48) && im_bcc_wii_car_0_24_4_0_48(u32(o + 48) + g.m, x[0].section_48);

    // 80 bytes;

}
function im_bcc_wii_car_0_24_4_0_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KbAu",
        u32_0: u32(o + 0),
        u8_7: u8(o + 7),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u32_24: u32(o + 24),
        u32_28: u32(o + 28),
        f32_32: f32(o + 32),
        f32_44: f32(o + 44),
        f32_52: f32(o + 52),
        f32_60: f32(o + 60),
        f32_68: f32(o + 68),
        u32_72: u32(o + 72),
        section_76: [],
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
        unordered_bcc_wii_sound_section_88: 0,
        f32_100: f32(o + 100),
        f32_104: f32(o + 104),
        f32_108: f32(o + 108),
    });

    u32(o + 76) && im_bcc_wii_car_0_24_4_0_40_76(u32(o + 76) + g.m, x[0].section_76);
    x[0].unordered_bcc_wii_sound_section_88 = in_ml(u32(o + 88), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);

    // 144 bytes;

}
function im_bcc_wii_car_0_24_4_0_40_76(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "leP;",
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_24_4_0_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ZN7z",
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
function im_bcc_wii_car_0_24_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iaho",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_24_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[OP>",
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
        f32_64: f32(o + 64),
        f32_68: f32(o + 68),
        f32_72: f32(o + 72),
        f32_76: f32(o + 76),
        f32_80: f32(o + 80),
        f32_84: f32(o + 84),
    });

    // 92 bytes;

}
function im_bcc_wii_car_0_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "KetN",
        unordered_bcc_wii_model_anim_2_type_b_0: 0,
        unordered_bcc_wii_model_link_4: 0,
        u8_20: u8(o + 20),
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
        section_68: [],
        u32_72: u32(o + 72),
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        f32_88: f32(o + 88),
        f32_92: f32(o + 92),
    });

    x[0].unordered_bcc_wii_model_anim_2_type_b_0 = in_ml(u32(o + 0), g.bcc_wii_model_anim_2_type_b_array, im_bcc_wii_model_anim_2_type_b, g.unordered_ref.bcc_wii_model_anim_2_type_b);
    x[0].unordered_bcc_wii_model_link_4 = in_ml(u32(o + 4), g.bcc_wii_model_link_array, im_bcc_wii_model_link, g.unordered_ref.bcc_wii_model_link);

    for (let i = 0; i < u32(o + 48); i++) {
        im_bcc_wii_car_0_28_52(u32(o + 52) + (i * 24) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 56); i++) {
        im_bcc_wii_car_0_28_60(u32(o + 60) + (i * 8) + g.m, i, x[0].section_60);
    }
    u32(o + 68) && im_bcc_wii_car_0_28_68(u32(o + 68) + g.m, x[0].section_68);
    u32(o + 76) && im_bcc_wii_car_0_28_76(u32(o + 76) + g.m, x[0].section_76);

    for (let i = 0; i < u32(o + 80); i++) {
        im_bcc_wii_car_0_28_84(u32(o + 84) + (i * 32) + g.m, i, x[0].section_84);
    }

    // 112 bytes;

}
function im_bcc_wii_car_0_28_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "tj=:",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        u8_20: u8(o + 20),
    });

}
function im_bcc_wii_car_0_28_60(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "tvUq",
        u16_0: u16(o + 0),
        u16_2: u16(o + 2),
        u16_4: u16(o + 4),
    });

}
function im_bcc_wii_car_0_28_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Monb",
        u32_0: u32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_bcc_wii_car_0_28_76(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Z1p?",
        u32_0: u32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

    // 32 bytes;

}
function im_bcc_wii_car_0_28_84(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "HfwH",
        u32_0: u32(o + 0),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_bcc_wii_car_0_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[JhY",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        unordered_bcc_wii_a_single_section_16: 0,
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
        u8_28: u8(o + 28),
        section_32: [],
    });

    x[0].unordered_bcc_wii_a_single_section_16 = in_ml(u32(o + 16), g.bcc_wii_a_single_section_array, im_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section);

    for (let i = 0; i < u32(o + 20); i++) {
        im_bcc_wii_car_0_32_24(u32(o + 24) + (i * 12) + g.m, i, x[0].section_24);
    }
    u32(o + 32) && im_bcc_wii_car_0_32_32(u32(o + 32) + g.m, x[0].section_32);

    // 48 bytes;

}
function im_bcc_wii_car_0_32_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "x4Ew",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_car_0_32_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ijPx",
        f32_0: f32(o + 0),
        section_4: [],
        section_8: [],
    });

    u32(o + 4) && im_bcc_wii_car_0_32_32_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 8) && im_bcc_wii_car_0_32_32_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_car_0_32_32_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[E]x",
        f32_20: f32(o + 20),
    });

    // 48 bytes;

}
function im_bcc_wii_car_0_32_32_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "mBT]",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_car_0_32_32_8_4(u32(o + 4) + (i * 12) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_car_0_32_32_8_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^[^0",
        section_0: [],
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 0) && im_bcc_wii_car_0_32_32_8_4_0(u32(o + 0) + g.m, x[i].section_0);
    u32(o + 8) && im_bcc_wii_car_0_32_32_8_4_8(u32(o + 8) + g.m, x[i].section_8);

}
function im_bcc_wii_car_0_32_32_8_4_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8Sh=",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
        section_12: [],
    });

    u32(o + 4) && im_bcc_wii_car_0_32_32_8_4_0_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 12) && im_bcc_wii_car_0_32_32_8_4_0_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_bcc_wii_car_0_32_32_8_4_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ":5xc",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_32_32_8_4_0_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8[@N",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_car_0_32_32_8_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AF]z",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        section_8: [],
        f32_16: f32(o + 16),
        section_20: [],
    });

    u32(o + 8) && im_bcc_wii_car_0_32_32_8_4_8_8(u32(o + 8) + g.m, x[0].section_8);
    switch (u8(o + 0)) {
    case 0:
        u32(o + 20) && im_bcc_wii_car_0_32_32_8_4_8_20t0(u32(o + 20) + g.m, x[0].section_20);
        break;
    }
    // 32 bytes;

}
function im_bcc_wii_car_0_32_32_8_4_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "K>Ib",
        f32_20: f32(o + 20),
    });

    // 48 bytes;

}
function im_bcc_wii_car_0_32_32_8_4_8_20t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Zefa",
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
function im_bcc_wii_car_0_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "IEb[",
        unordered_bcc_wii_sound_section_0: 0,
        f32_4: f32(o + 4),
        unordered_bcc_wii_sound_section_8: 0,
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    x[0].unordered_bcc_wii_sound_section_0 = in_ml(u32(o + 0), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);
    x[0].unordered_bcc_wii_sound_section_8 = in_ml(u32(o + 8), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);

    // 32 bytes;

}
function im_bcc_wii_car_0_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "SSuB",
        unordered_bcc_wii_interface_0: 0,
        unordered_bcc_wii_interface_4: 0,
        unordered_bcc_wii_interface_8: 0,
        unordered_bcc_wii_interface_12: 0,
        unordered_bcc_wii_interface_16: 0,
        unordered_bcc_wii_interface_20: 0,
    });

    x[0].unordered_bcc_wii_interface_0 = in_ml(u32(o + 0), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    x[0].unordered_bcc_wii_interface_4 = in_ml(u32(o + 4), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    x[0].unordered_bcc_wii_interface_8 = in_ml(u32(o + 8), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    x[0].unordered_bcc_wii_interface_12 = in_ml(u32(o + 12), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    x[0].unordered_bcc_wii_interface_16 = in_ml(u32(o + 16), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    x[0].unordered_bcc_wii_interface_20 = in_ml(u32(o + 20), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);

    // 32 bytes;

}
function im_bcc_wii_car_0_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "XxTU",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bcc_wii_car_0_48_4(u32(o + 4) + (ii * 32) + g.m, ii, x[i].section_4);
    }

}
function im_bcc_wii_car_0_48_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "?tK?",
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
    });

}
function im_bcc_wii_car_0_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "02m_",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bcc_wii_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_4);
    }

}
function im_bcc_wii_car_0_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Ns7]",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bcc_wii_mysterious(u32(o + 4) + (ii * 64) + g.m, ii, x[i].section_4);
    }

}
function im_bcc_wii_car_0_72(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pyQj",
        unordered_bcc_wii_unknown_0: 0,
    });

    x[0].unordered_bcc_wii_unknown_0 = in_ml(u32(o + 0), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

    // 16 bytes;

}
function im_bcc_wii_mysterious(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "w>nd",
        u8_0: u8(o + 0),
        u16_2: u16(o + 2),
        section_4: [],
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        f32_40: f32(o + 40),
        f32_44: f32(o + 44),
    });

    switch (u8(o + 0)) {
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);
        break;
    case 2:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_strange_array, im_bcc_wii_strange, g.unordered_ref.bcc_wii_strange);
        break;
    case 3:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
        break;
    case 5:
    case 6:
        u32(o + 4) && im_bcc_wii_mysterious_4t6(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 9:
        u32(o + 4) && im_bcc_wii_mysterious_4t9(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    return x[i].id
    // 64 bytes;

}
function im_bcc_wii_mysterious_4t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Qaln",
        u8_0: u8(o + 0),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_12: u32(o + 12),
        section_16: [],
        u8_25: u8(o + 25),
        section_28: [],
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
        u32(o + 16) && im_bcc_wii_mysterious_4t6_16t0(u32(o + 16) + g.m, x[0].section_16);
        break;
    case 2:
        u32(o + 16) && im_bcc_wii_mysterious_4t6_16t2(u32(o + 16) + g.m, x[0].section_16);
        break;
    }
    u32(o + 28) && im_bcc_wii_mysterious_4t6_28(u32(o + 28) + g.m, x[0].section_28);
    u32(o + 36) && im_bcc_wii_mysterious_4t6_36(u32(o + 36) + g.m, x[0].section_36);

    for (let i = 0; i < u32(o + 40); i++) {
        im_bcc_wii_mysterious_4t6_44(u32(o + 44) + (i * 32) + g.m, i, x[0].section_44);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_bcc_wii_mysterious_4t6_52(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }
    u32(o + 56) && im_bcc_wii_mysterious_4t6_56(u32(o + 56) + g.m, x[0].section_56);

    // 64 bytes;

}
function im_bcc_wii_mysterious_4t6_16t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "j7qF",
        model_0: in_models(o + 0, g.models_array, im_bcc_wii_model, g.ordered_ref.bcc_wii_model),
    });

    // 16 bytes;

}
function im_bcc_wii_mysterious_4t6_16t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "pqe5",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_mysterious_4t6_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8c@:",
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_mysterious_4t6_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[_GT",
    });

    // 32 bytes;

}
function im_bcc_wii_mysterious_4t6_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "EMvG",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_mysterious_4t6_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "wYQW",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_mysterious_4t6_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "nU45",
        f32_4: f32(o + 4),
        f32_16: f32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_mysterious_4t9(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@V:6",
        u8_2: u8(o + 2),
        section_8: [],
    });

    u32(o + 8) && im_bcc_wii_mysterious_4t9_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_mysterious_4t9_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "h5tA",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_8: [],
        u32_12: u32(o + 12),
        f32_16: f32(o + 16),
    });

    u32(o + 8) && im_bcc_wii_mysterious_4t9_8_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_bcc_wii_mysterious_4t9_8_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0vr>",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
    });

    // 16 bytes;

}
function im_bcc_wii_strange(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "[W[y",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bcc_wii_strange_4(u32(o + 4) + (ii * 4) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_strange_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "BQ[s",
        unordered_bcc_wii_unknown_0: 0,
    });

    x[i].unordered_bcc_wii_unknown_0 = in_ml(u32(o + 0), g.bcc_wii_unknown_array, im_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown);

}
function im_bcc_wii_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "@I0t",
        u32_4: u32(o + 4),
        section_16: [],
        unordered_bcc_wii_font_28: 0,
        unordered_bcc_wii_interface_32: 0,
        section_36: im_string(u32(o + 36), 0, false),
        u32_40: u32(o + 40),
        section_44: im_string(u32(o + 44), 0, false),
        u32_52: u32(o + 52),
        section_56: [],
        u32_60: u32(o + 60),
        //amount?
        section_64: [],
        section_68: [],
        u32_72: u32(o + 72),
        //check this
    });

    u32(o + 16) && im_bcc_wii_link_16(u32(o + 16) + g.m, x[i].section_16);
    x[i].unordered_bcc_wii_font_28 = in_ml(u32(o + 28), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
    x[i].unordered_bcc_wii_interface_32 = in_ml(u32(o + 32), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
    u32(o + 56) && im_bcc_wii_link_56(u32(o + 56) + g.m, x[i].section_56);

    for (let ii = 0; ii < u32(o + 60); ii++) {
        im_bcc_wii_link_64(u32(o + 64) + (ii * 4) + g.m, ii, x[i].section_64);
    }
    u32(o + 68) && im_bcc_wii_link_68(u32(o + 68) + g.m, x[i].section_68);
    return x[i].id
    // 80 bytes;

}
function im_bcc_wii_link_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "vK8Y",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_link_16_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_link_16_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "3MWe",
        unordered_bcc_wii_flag_0: 0,
    });

    x[i].unordered_bcc_wii_flag_0 = in_ml(u32(o + 0), g.bcc_wii_flag_array, im_bcc_wii_flag, g.unordered_ref.bcc_wii_flag);

}
function im_bcc_wii_link_56(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "T__]",
        u8_0: u8(o + 0),
        section_12: [],
    });

    u32(o + 12) && im_bcc_wii_link_56_12(u32(o + 12) + g.m, x[0].section_12);

    // 16 bytes;

}
function im_bcc_wii_link_56_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "f948",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_link_64(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "PPZq",
        section_0: [],
    });

    u32(o + 0) && im_bcc_wii_link_64_0(u32(o + 0) + g.m, x[i].section_0);

}
function im_bcc_wii_link_64_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wY_q",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_link_64_0_4(u32(o + 4) + (i * 32) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_link_64_0_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "g2Zp",
        section_8: [],
        section_12: im_string(u32(o + 12), 0, false),
        u32_16: u32(o + 16),
        //amount?
        section_20: [],
        u32_24: u32(o + 24),
        section_28: [],
    });

    u32(o + 8) && im_bcc_wii_link_64_0_4_8(u32(o + 8) + g.m, x[i].section_8);

    for (let ii = 0; ii < u32(o + 16); ii++) {
        im_bcc_wii_link_64_0_4_20(u32(o + 20) + (ii * 12) + g.m, ii, x[i].section_20);
    }
    u32(o + 28) && im_bcc_wii_link_64_0_4_28(u32(o + 28) + g.m, x[i].section_28);

}
function im_bcc_wii_link_64_0_4_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "dX@Y",
        section_0: im_string(u32(o + 0), 0, false),
    });

    // 16 bytes;

}
function im_bcc_wii_link_64_0_4_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "M4e3",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u16_8: u16(o + 8),
    });

    u32(o + 4) && im_bcc_wii_link_64_0_4_20_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_bcc_wii_link_64_0_4_20_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FfRf",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_link_64_0_4_20_4_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_link_64_0_4_20_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "X339",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_link_64_0_4_28(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "9=EG",
        u16_8: u16(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_link_68(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Y0_a",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_bcc_wii_link_68_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_link_68_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7C>4",
    });

    // 16 bytes;

}
function im_bcc_wii_font(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "3vkt",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
        unordered_bcc_wii_model_anim_2_type_c_4: 0,
        u8_8: u8(o + 8),
        u16_9: u16(o + 9),
        f32_12: f32(o + 12),
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
        //amount?
        section_28: [],
    });

    x[i].unordered_bcc_wii_model_anim_2_type_c_4 = in_ml(u32(o + 4), g.bcc_wii_model_anim_2_type_c_array, im_bcc_wii_model_anim_2_type_c, g.unordered_ref.bcc_wii_model_anim_2_type_c);
    u32(o + 20) && im_bcc_wii_font_20(u32(o + 20) + g.m, x[i].section_20);

    for (let ii = 0; ii < u32(o + 24); ii++) {
        im_bcc_wii_font_28(u32(o + 28) + (ii * 12) + g.m, ii, x[i].section_28);
    }
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_font_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "NxrC",
        f32_0: f32(o + 0),
    });

    // 32 bytes;

}
function im_bcc_wii_font_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "5YZr",
        u8_0: u8(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_flag(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "P@4o",
        section_8: im_string(u32(o + 8), 0, false),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        section_20: [],
        u8_25: u8(o + 25),
        u8_27: u8(o + 27),
        u8_30: u8(o + 30),
        u8_31: u8(o + 31),
        u8_40: u8(o + 40),
        u8_42: u8(o + 42),
    });

    switch (u32(o + 16)) {
    case 0:
        u32(o + 20) && im_bcc_wii_flag_20t0(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 2:
        u32(o + 20) && im_bcc_wii_flag_20t2(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 3:
        u32(o + 20) && im_bcc_wii_flag_20t3(u32(o + 20) + g.m, x[i].section_20);
        break;
    case 7:
        u32(o + 20) && im_bcc_wii_flag_20t7(u32(o + 20) + g.m, x[i].section_20);
        break;
    }
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_flag_20t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Jbcu",
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_bcc_wii_flag_20t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "MV@T",
        u8_0: u8(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_flag_20t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "P1]T",
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        section_4: im_string(u32(o + 4), 0, false),
    });

    // 16 bytes;

}
function im_bcc_wii_flag_20t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DPD=",
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_interface(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Zg[=",
        section_0: im_string(u32(o + 0), 0, false),
        u8_5: u8(o + 5),
        u16_6: u16(o + 6),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        unordered_bcc_wii_sound_controls_20: 0,
        unordered_bcc_wii_sound_controls_24: 0,
        unordered_bcc_wii_sound_controls_32: 0,
        f32_36: f32(o + 36),
        u32_40: u32(o + 40),
        u32_44: u32(o + 44),
        u32_48: u32(o + 48),
        section_52: [],
        u8_57: u8(o + 57),
        f32_68: f32(o + 68),
        u32_72: u32(o + 72),
        section_76: [],
        u32_80: u32(o + 80),
        //amount?
        section_84: [],
        u32_88: u32(o + 88),
        //amount?
        section_92: [],
    });

    x[i].unordered_bcc_wii_sound_controls_20 = in_ml(u32(o + 20), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
    x[i].unordered_bcc_wii_sound_controls_24 = in_ml(u32(o + 24), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
    x[i].unordered_bcc_wii_sound_controls_32 = in_ml(u32(o + 32), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
    u32(o + 52) && im_bcc_wii_interface_52(u32(o + 52) + g.m, x[i].section_52);
    u32(o + 76) && im_bcc_wii_interface_76(u32(o + 76) + g.m, x[i].section_76);

    for (let ii = 0; ii < u32(o + 80); ii++) {
        im_bcc_wii_interface_84(u32(o + 84) + (ii * 28) + g.m, ii, x[i].section_84);
    }

    for (let ii = 0; ii < u32(o + 88); ii++) {
        im_bcc_wii_interface_92(u32(o + 92) + (ii * 100) + g.m, ii, x[i].section_92);
    }
    return x[i].id
    // 96 bytes;

}
function im_bcc_wii_interface_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "3CmU",
        f32_0: f32(o + 0),
        u8_5: u8(o + 5),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_76(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "qokw",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_76_4(u32(o + 4) + (i * 36) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_76_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "h66T",
        section_0: im_string(u32(o + 0), 0, false),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        u32_8: u32(o + 8),
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
        u32(o + 12) && im_bcc_wii_interface_76_4_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 5:
        u32(o + 12) && im_bcc_wii_interface_76_4_12t5(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 7:
        u32(o + 12) && im_bcc_wii_interface_76_4_12t7(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 8:
        u32(o + 12) && im_bcc_wii_interface_76_4_12t8(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 9:
        u32(o + 12) && im_bcc_wii_interface_76_4_12t9(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 10:
        u32(o + 12) && im_bcc_wii_interface_76_4_12t10(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
}
function im_bcc_wii_interface_76_4_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tgKG",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_76_4_12t1_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_76_4_12t1_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Ab_O",
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_76_4_12t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Go?E",
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_76_4_12t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "x963",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_76_4_12t8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "NBwm",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_76_4_12t8_4(u32(o + 4) + (i * 12) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_76_4_12t8_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "O0SJ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
    });

}
function im_bcc_wii_interface_76_4_12t9(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@zqp",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        section_4: im_string(u32(o + 4), 0, false),
        section_8: im_string(u32(o + 8), 0, false),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_76_4_12t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "xsDn",
        unordered_bcc_wii_flag_0: 0,
    });

    x[0].unordered_bcc_wii_flag_0 = in_ml(u32(o + 0), g.bcc_wii_flag_array, im_bcc_wii_flag, g.unordered_ref.bcc_wii_flag);

    // 16 bytes;

}
function im_bcc_wii_interface_84(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Y9tK",
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

    u32(o + 4) && im_bcc_wii_interface_84_4(u32(o + 4) + g.m, x[i].section_4);

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bcc_wii_interface_84_16(u32(o + 16) + (ii * 8) + g.m, ii, x[i].section_16);
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bcc_wii_interface_84_24(u32(o + 24) + (ii * 36) + g.m, ii, x[i].section_24);
    }

}
function im_bcc_wii_interface_84_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Nbiu",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: im_string(u32(o + 20), 0, false),
    });

    u32(o + 12) && im_bcc_wii_interface_84_4_12(u32(o + 12) + g.m, x[0].section_12);

    // 32 bytes;

}
function im_bcc_wii_interface_84_4_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "K6QX",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_84_4_12_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_84_4_12_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "EuLy",
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Y0XC",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_84_16_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_bcc_wii_interface_84_16_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "YPxK",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: im_string(u32(o + 20), 0, false),
    });

    switch (u8(o + 0)) {
    case 4:
        x[0].section_12 = in_ml(u32(o + 12), g.bcc_wii_flag_array, im_bcc_wii_flag, g.unordered_ref.bcc_wii_flag);
        break;
    case 7:
        u32(o + 12) && im_bcc_wii_interface_84_16_4_12t7(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    // 32 bytes;

}
function im_bcc_wii_interface_84_16_4_12t7(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tney",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_84_16_4_12t7_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_84_16_4_12t7_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iENQ",
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "5gHG",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        section_4: [],
        section_12: [],
        unordered_bcc_wii_sound_controls_24: 0,
    });

    switch (u8(o + 0)) {
    case 1:
    case 31:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
        break;
    case 11:
        u32(o + 4) && im_bcc_wii_interface_84_24_4t11(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    switch (u8(o + 0)) {
    case 6:
        u32(o + 12) && im_bcc_wii_interface_84_24_12t6(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 15:
        u32(o + 12) && im_bcc_wii_interface_84_24_12t15(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 41:
        u32(o + 12) && im_bcc_wii_interface_84_24_12t41(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
    x[i].unordered_bcc_wii_sound_controls_24 = in_ml(u32(o + 24), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);

}
function im_bcc_wii_interface_84_24_4t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zIou",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_84_24_4t11_4(u32(o + 4) + (i * 20) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "hIeS",
        section_0: im_string(u32(o + 0), 0, false),
        section_4: [],
        u16_8: u16(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
    });

    u32(o + 4) && im_bcc_wii_interface_84_24_4t11_4_4(u32(o + 4) + g.m, x[i].section_4);
    switch (u16(o + 8)) {
    case 1:
        u32(o + 12) && im_bcc_wii_interface_84_24_4t11_4_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 2:
        u32(o + 12) && im_bcc_wii_interface_84_24_4t11_4_12t2(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 4:
        x[i].section_12 = in_ml(u32(o + 12), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
        break;
    case 100:
    case 101:
        x[i].section_12 = in_ml(u32(o + 12), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
        break;
    case 102:
        u32(o + 12) && im_bcc_wii_interface_84_24_4t11_4_12t102(u32(o + 12) + g.m, x[i].section_12);
        break;
    }
}
function im_bcc_wii_interface_84_24_4t11_4_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@gqv",
    });

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PjuG",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
        unordered_bcc_wii_flag_12: 0,
        u32_16: u32(o + 16),
        section_20: im_string(u32(o + 20), 0, false),
    });

    x[0].unordered_bcc_wii_flag_12 = in_ml(u32(o + 12), g.bcc_wii_flag_array, im_bcc_wii_flag, g.unordered_ref.bcc_wii_flag);

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wAaf",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_bcc_wii_interface_84_24_4t11_4_12t2_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_bcc_wii_interface_84_24_4t11_4_12t2_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t2_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gWt7",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_84_24_4t11_4_12t2_0_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t2_0_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "aR37",
        u8_12: u8(o + 12),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t2_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Ah5f",
        u8_12: u8(o + 12),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t102(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AYKa",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        section_8: [],
    });

    u32(o + 8) && im_bcc_wii_interface_84_24_4t11_4_12t102_8(u32(o + 8) + g.m, x[0].section_8);

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_4t11_4_12t102_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "e1wv",
        u8_0: u8(o + 0),
        section_4: im_string(u32(o + 4), 0, false),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_12t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gl^8",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_bcc_wii_interface_84_24_12t6_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_bcc_wii_interface_84_24_12t6_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_12t6_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "HqxL",
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_12t6_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "[h0X",
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_12t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^f0C",
        section_0: [],
        section_4: [],
    });

    u32(o + 0) && im_bcc_wii_interface_84_24_12t15_0(u32(o + 0) + g.m, x[0].section_0);
    u32(o + 4) && im_bcc_wii_interface_84_24_12t15_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_84_24_12t15_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "M@D=",
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_12t15_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Vg7t",
    });

    // 32 bytes;

}
function im_bcc_wii_interface_84_24_12t41(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "YQn9",
        u8_0: u8(o + 0),
        section_4: im_string(u32(o + 4), 0, false),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "=@<V",
        section_0: im_string(u32(o + 0), 0, false),
        u32_4: u32(o + 4),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u8_11: u8(o + 11),
        section_12: [],
        section_16: im_string(u32(o + 16), 0, false),
        u32_20: u32(o + 20),
        u8_24: u8(o + 24),
        u8_25: u8(o + 25),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        section_28: im_string(u32(o + 28), 0, false),
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

    u32(o + 12) && im_bcc_wii_interface_92_12(u32(o + 12) + g.m, x[i].section_12);
    u32(o + 32) && im_bcc_wii_interface_92_32(u32(o + 32) + g.m, x[i].section_32);
    switch (u8(o + 26)) {
    case 0:
        u32(o + 36) && im_bcc_wii_interface_92_36t0(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 1:
        u32(o + 36) && im_bcc_wii_interface_92_36t1(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 3:
        u32(o + 36) && im_bcc_wii_interface_92_36t3(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 6:
        u32(o + 36) && im_bcc_wii_interface_92_36t6(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 10:
        u32(o + 36) && im_bcc_wii_interface_92_36t10(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 12:
        u32(o + 36) && im_bcc_wii_interface_92_36t12(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 13:
        u32(o + 36) && im_bcc_wii_interface_92_36t13(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 14:
        u32(o + 36) && im_bcc_wii_interface_92_36t14(u32(o + 36) + g.m, x[i].section_36);
        break;
    case 15:
        u32(o + 36) && im_bcc_wii_interface_92_36t15(u32(o + 36) + g.m, x[i].section_36);
        break;
    }
    u32(o + 40) && im_bcc_wii_interface_92_40(u32(o + 40) + g.m, x[i].section_40);
    u32(o + 52) && im_bcc_wii_interface_92_52(u32(o + 52) + g.m, x[i].section_52);

    for (let ii = 0; ii < u32(o + 64); ii++) {
        im_bcc_wii_interface_92_68(u32(o + 68) + (ii * 12) + g.m, ii, x[i].section_68);
    }

}
function im_bcc_wii_interface_92_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "S1S5",
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "K?FO",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bcc_wii_interface_92_32_8(u32(o + 8) + (i * 12) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_92_32_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "E4[N",
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_92_32_8_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_bcc_wii_interface_92_32_8_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "RAZm",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u32_4: u32(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: im_string(u32(o + 20), 0, false),
    });

    u32(o + 12) && im_bcc_wii_interface_92_32_8_4_12(u32(o + 12) + g.m, x[0].section_12);

    // 32 bytes;

}
function im_bcc_wii_interface_92_32_8_4_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "5Shy",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_92_32_8_4_12_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_92_32_8_4_12_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "idO=",
        u8_12: u8(o + 12),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_36t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "o@Wq",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        section_4: [],
        section_8: [],
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
    });

    switch (u8(o)) {
    case 0:
        x[0].section_4 = im_patch(g.texture_patch_ref, o + 4)
        break
    case 1:
        x[0].section_4 = in_models(o + 4, g.models_array, im_bcc_wii_model, g.ordered_ref.bcc_wii_model)
        break
    default:
        if (u32(o + 4)) {
            console.pk_log("? im_bcc_wii_interface_92_36t0")
        }
    }

    u32(o + 8) && im_bcc_wii_interface_92_36t0_8(u32(o + 8) + g.m, x[0].section_8);

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t0_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4A0R",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_11: u8(o + 11),
        u8_16: u8(o + 16),
        u8_18: u8(o + 18),
        u8_19: u8(o + 19),
        u32_20: u32(o + 20),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_92_36t0_8_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bcc_wii_interface_92_36t0_8_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "9CnE",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_bcc_wii_interface_92_36t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "obHn",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        unordered_bcc_wii_text_4: 0,
        section_8: [],
        section_12: [],
        section_16: [],
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        u16_22: u16(o + 22),
        u16_24: u16(o + 24),
        u8_26: u8(o + 26),
        u8_27: u8(o + 27),
        f32_28: f32(o + 28),
    });

    x[0].unordered_bcc_wii_text_4 = in_ml(u32(o + 4), g.bcc_wii_text_array, im_bcc_wii_text, g.unordered_ref.bcc_wii_text);
    switch (u8(o + 0)) {
    case 1:
        u32(o + 8) && im_bcc_wii_interface_92_36t1_8t1(u32(o + 8) + g.m, x[0].section_8);
        break;
    case 3:
        u32(o + 8) && im_bcc_wii_interface_92_36t1_8t3(u32(o + 8) + g.m, x[0].section_8);
        break;
    }
    switch (u8(o + 2)) {
    case 0:
        x[0].section_12 = in_ml(u32(o + 12), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
        break;
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.bcc_wii_multi_font_array, im_bcc_wii_multi_font, g.unordered_ref.bcc_wii_multi_font);
        break;
    }
    u32(o + 16) && im_bcc_wii_interface_92_36t1_16(u32(o + 16) + g.m, x[0].section_16);

    // 32 bytes;

}
function im_bcc_wii_interface_92_36t1_8t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "0Td9",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u16_10: u16(o + 10),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_92_36t1_8t1_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t1_8t1_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "GinK",
        unordered_bcc_wii_text_0: 0,
    });

    x[i].unordered_bcc_wii_text_0 = in_ml(u32(o + 0), g.bcc_wii_text_array, im_bcc_wii_text, g.unordered_ref.bcc_wii_text);

}
function im_bcc_wii_interface_92_36t1_8t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "k803",
        u8_0: u8(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t1_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m?S^",
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LdgG",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_92_36t3_4(u32(o + 4) + (i * 8) + g.m, i, x[0].section_4);
    }

    // 32 bytes;

}
function im_bcc_wii_interface_92_36t3_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Kgg3",
        unordered_bcc_wii_model_link_0: 0,
    });

    x[i].unordered_bcc_wii_model_link_0 = in_ml(u32(o + 0), g.bcc_wii_model_link_array, im_bcc_wii_model_link, g.unordered_ref.bcc_wii_model_link);

}
function im_bcc_wii_interface_92_36t6(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "wb3F",
        unordered_bcc_wii_interface_0: 0,
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    x[0].unordered_bcc_wii_interface_0 = in_ml(u32(o + 0), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);

    for (let i = 0; i < u32(o + 8); i++) {
        im_bcc_wii_interface_92_36t6_12(u32(o + 12) + (i * 16) + g.m, i, x[0].section_12);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t6_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "7x8U",
        u8_0: u8(o + 0),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

}
function im_bcc_wii_interface_92_36t10(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "7vha",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@QnV",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t13(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "@ZfX",
        u8_1: u8(o + 1),
        section_4: [],
        u32_8: u32(o + 8),
        //amount?
        section_12: [],
    });

    u32(o + 4) && im_bcc_wii_interface_92_36t13_4(u32(o + 4) + g.m, x[0].section_4);

    for (let i = 0; i < u32(o + 8); i++) {
        im_bcc_wii_interface_92_36t13_12(u32(o + 12) + (i * 4) + g.m, i, x[0].section_12);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t13_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gz;e",
        u32_0: u32(o + 0),
        f32_4: f32(o + 4),
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t13_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "_H_N",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_bcc_wii_interface_92_36t14(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "RVUa",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_92_36t14_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t14_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=t[F",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_8: u8(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_interface_92_36t15(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ueYq",
        unordered_bcc_wii_emitter_0: 0,
    });

    x[0].unordered_bcc_wii_emitter_0 = in_ml(u32(o + 0), g.bcc_wii_emitter_array, im_bcc_wii_emitter, g.unordered_ref.bcc_wii_emitter);

    // 16 bytes;

}
function im_bcc_wii_interface_92_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jTMt",
        u8_0: u8(o + 0),
        u8_2: u8(o + 2),
        u8_12: u8(o + 12),
        u8_14: u8(o + 14),
        u32_32: u32(o + 32),
        u32_44: u32(o + 44),
        section_48: [],
        u32_68: u32(o + 68),
        //amount?
        section_72: [],
    });

    u32(o + 48) && im_bcc_wii_interface_92_40_48(u32(o + 48) + g.m, x[0].section_48);

    for (let i = 0; i < u32(o + 68); i++) {
        im_bcc_wii_interface_92_40_72(u32(o + 72) + (i * 28) + g.m, i, x[0].section_72);
    }

    // 96 bytes;

}
function im_bcc_wii_interface_92_40_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^NKx",
        u32_0: u32(o + 0),
        u8_6: u8(o + 6),
        u32_8: u32(o + 8),
        u8_12: u8(o + 12),
        u8_13: u8(o + 13),
        u8_14: u8(o + 14),
        u8_15: u8(o + 15),
        u32_16: u32(o + 16),
        u32_20: u32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_40_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "JLx0",
        u32_0: u32(o + 0),
        u32_12: u32(o + 12),
        section_16: [],
        u32_20: u32(o + 20),
        //amount?
        section_24: [],
    });

    u32(o + 16) && im_bcc_wii_interface_92_40_72_16(u32(o + 16) + g.m, x[i].section_16);

    for (let ii = 0; ii < u32(o + 20); ii++) {
        im_bcc_wii_interface_92_40_72_24(u32(o + 24) + (ii * 36) + g.m, ii, x[i].section_24);
    }

}
function im_bcc_wii_interface_92_40_72_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "f7DI",
        u8_0: u8(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_interface_92_40_72_16_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_interface_92_40_72_16_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "8]DV",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_40_72_24(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "4fSg",
        u8_0: u8(o + 0),
        section_4: [],
        u32_20: u32(o + 20),
        unordered_bcc_wii_sound_controls_24: 0,
    });

    switch (u8(o + 0)) {
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
        break;
    case 11:
        u32(o + 4) && im_bcc_wii_interface_92_40_72_24_4t11(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    x[i].unordered_bcc_wii_sound_controls_24 = in_ml(u32(o + 24), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);

}
function im_bcc_wii_interface_92_40_72_24_4t11(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: ";JzX",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_interface_92_40_72_24_4t11_4(u32(o + 4) + (i * 20) + g.m, i, x[0].section_4);
    }

    // 16 bytes;

}
function im_bcc_wii_interface_92_40_72_24_4t11_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Evcn",
        section_0: im_string(u32(o + 0), 0, false),
        u16_8: u16(o + 8),
        section_12: [],
    });

    switch (u16(o + 8)) {
    case 1:
        u32(o + 12) && im_bcc_wii_interface_92_40_72_24_4t11_4_12t1(u32(o + 12) + g.m, x[i].section_12);
        break;
    case 101:
        x[i].section_12 = in_ml(u32(o + 12), g.bcc_wii_interface_array, im_bcc_wii_interface, g.unordered_ref.bcc_wii_interface);
        break;
    }
}
function im_bcc_wii_interface_92_40_72_24_4t11_4_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "lGYE",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_4: u8(o + 4),
        section_8: im_string(u32(o + 8), 0, false),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_52(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4PaN",
        u32_0: u32(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
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

    u32(o + 4) && im_bcc_wii_interface_92_52_4(u32(o + 4) + g.m, x[0].section_4);
    u32(o + 12) && im_bcc_wii_interface_92_52_12(u32(o + 12) + g.m, x[0].section_12);

    for (let i = 0; i < u32(o + 16); i++) {
        im_bcc_wii_interface_92_52_20(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_bcc_wii_interface_92_52_28(u32(o + 28) + (i * 12) + g.m, i, x[0].section_28);
    }

    for (let i = 0; i < u32(o + 32); i++) {
        im_bcc_wii_interface_92_52_36(u32(o + 36) + (i * 40) + g.m, i, x[0].section_36);
    }

    // 48 bytes;

}
function im_bcc_wii_interface_92_52_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "_[wd",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_52_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "S0_F",
        f32_0: f32(o + 0),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_52_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "xUNy",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_interface_92_52_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "^QM0",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_interface_92_52_36(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "FOq0",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_interface_92_68(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "eCBi",
        u8_0: u8(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
    });

    u32(o + 4) && im_bcc_wii_interface_92_68_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_bcc_wii_interface_92_68_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "4;GK",
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
        im_bcc_wii_interface_92_68_4_4(u32(o + 4) + (i * 20) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 8); i++) {
        im_bcc_wii_interface_92_68_4_12(u32(o + 12) + (i * 32) + g.m, i, x[0].section_12);
    }

    for (let i = 0; i < u32(o + 16); i++) {
        im_bcc_wii_interface_92_68_4_20(u32(o + 20) + (i * 32) + g.m, i, x[0].section_20);
    }

    for (let i = 0; i < u32(o + 24); i++) {
        im_bcc_wii_interface_92_68_4_28(u32(o + 28) + (i * 32) + g.m, i, x[0].section_28);
    }
    u32(o + 36) && im_bcc_wii_interface_92_68_4_36(u32(o + 36) + g.m, x[0].section_36);

    for (let i = 0; i < u32(o + 40); i++) {
        im_bcc_wii_interface_92_68_4_44(u32(o + 44) + (i * 40) + g.m, i, x[0].section_44);
    }

    // 64 bytes;

}
function im_bcc_wii_interface_92_68_4_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "f?<n",
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) && im_bcc_wii_interface_92_68_4_4_16(u32(o + 16) + g.m, x[i].section_16);

}
function im_bcc_wii_interface_92_68_4_4_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "DOp<",
        section_0: im_string(u32(o + 0), 0, false),
        u16_8: u16(o + 8),
        section_12: [],
    });

    switch (u16(o + 8)) {
    case 1:
        u32(o + 12) && im_bcc_wii_interface_92_68_4_4_16_12t1(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 1:
        x[0].section_12 = in_ml(u32(o + 12), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
        break;
    }
    // 20 bytes;

}
function im_bcc_wii_interface_92_68_4_4_16_12t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "hndJ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_3: u8(o + 3),
        u32_4: u32(o + 4),
        u32_16: u32(o + 16),
    });

    // 32 bytes;

}
function im_bcc_wii_interface_92_68_4_12(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "5KeD",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_16: u8(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_interface_92_68_4_20(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: ";bBT",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_interface_92_68_4_28(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "1dxp",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        u8_17: u8(o + 17),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_interface_92_68_4_36(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PYVC",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        u8_5: u8(o + 5),
        f32_8: f32(o + 8),
    });

    // 12 bytes;

}
function im_bcc_wii_interface_92_68_4_44(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "O1b1",
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_sound_controls(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "ZsN5",
        u32_0: u32(o + 0),
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bcc_wii_sound_controls_16(u32(o + 16) + (ii * 16) + g.m, ii, x[i].section_16);
    }
    return x[i].id
    // 32 bytes;

}
function im_bcc_wii_sound_controls_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "l4:C",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u32_8: u32(o + 8),
        f32_12: f32(o + 12),
    });

    u32(o + 4) && im_bcc_wii_sound_controls_16_4(u32(o + 4) + g.m, x[i].section_4);

}
function im_bcc_wii_sound_controls_16_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "6yp[",
        unordered_bcc_wii_sound_section_0: 0,
    });

    x[0].unordered_bcc_wii_sound_section_0 = in_ml(u32(o + 0), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);

    // 4 bytes;

}
function im_bcc_wii_text(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "_>Nj",
        section_0: im_string(u32(o + 0), 0, false),
    });

    return x[i].id
    // 16 bytes;

}
function im_bcc_wii_multi_font(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "nrpk",
        u32_0: u32(o + 0),
        section_4: [],
    });

    switch (u32(o + 0)) {
    case 0:
        u32(o + 4) && im_bcc_wii_multi_font_4t0(u32(o + 4) + g.m, x[i].section_4);
        break;
    case 1:
        u32(o + 4) && im_bcc_wii_multi_font_4t1(u32(o + 4) + g.m, x[i].section_4);
        break;
    }
    return x[i].id
    // 16 bytes;

}
function im_bcc_wii_multi_font_4t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "VoJk",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_bcc_wii_font_12: 0,
        f32_24: f32(o + 24),
        unordered_bcc_wii_font_28: 0,
        unordered_bcc_wii_font_32: 0,
    });

    x[0].unordered_bcc_wii_font_12 = in_ml(u32(o + 12), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
    x[0].unordered_bcc_wii_font_28 = in_ml(u32(o + 28), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
    x[0].unordered_bcc_wii_font_32 = in_ml(u32(o + 32), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);

    // 48 bytes;

}
function im_bcc_wii_multi_font_4t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "siCP",
        u8_1: u8(o + 1),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        unordered_bcc_wii_font_12: 0,
        unordered_bcc_wii_font_16: 0,
        unordered_bcc_wii_font_20: 0,
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
    });

    x[0].unordered_bcc_wii_font_12 = in_ml(u32(o + 12), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
    x[0].unordered_bcc_wii_font_16 = in_ml(u32(o + 16), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);
    x[0].unordered_bcc_wii_font_20 = in_ml(u32(o + 20), g.bcc_wii_font_array, im_bcc_wii_font, g.unordered_ref.bcc_wii_font);

    // 32 bytes;

}
function im_bcc_wii_emitter(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "M<Mx",
        f32_0: f32(o + 0),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        section_16: [],
    });

    u32(o + 16) && im_bcc_wii_emitter_16(u32(o + 16) + g.m, x[i].section_16);
    return x[i].id
    // 32 bytes;

}
function im_bcc_wii_emitter_16(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m=Hn",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
        u8_4: u8(o + 4),
        u32_8: u32(o + 8),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
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
        im_bcc_wii_emitter_16_48(u32(o + 48) + (i * 12) + g.m, i, x[0].section_48);
    }

    for (let i = 0; i < u32(o + 52); i++) {
        im_bcc_wii_emitter_16_56(u32(o + 56) + (i * 32) + g.m, i, x[0].section_56);
    }

    // 64 bytes;

}
function im_bcc_wii_emitter_16_48(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Y]DN",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_emitter_16_56(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "ufGi",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        u8_16: u8(o + 16),
        f32_20: f32(o + 20),
    });

}
function im_bcc_wii_model_link(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "1]_V",
        section_4: [],
        section_8: im_string(u32(o + 8), 0, false),
        section_12: [],
        unordered_bcc_wii_some_model_anim_16: 0,
        f32_20: f32(o + 20),
        u8_25: u8(o + 25),
        section_48: [],
    });

    u32(o + 4) && im_bcc_wii_model_link_4(u32(o + 4) + g.m, x[i].section_4);
    u32(o + 12) && im_bcc_wii_model_link_12(u32(o + 12) + g.m, x[i].section_12);
    x[i].unordered_bcc_wii_some_model_anim_16 = in_ml(u32(o + 16), g.bcc_wii_some_model_anim_array, im_bcc_wii_some_model_anim, g.unordered_ref.bcc_wii_some_model_anim);
    u32(o + 48) && im_bcc_wii_model_link_48(u32(o + 48) + g.m, x[i].section_48);
    return x[i].id
    // 64 bytes;

}
function im_bcc_wii_model_link_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "6z5R",
    });

    // 16 bytes;

}
function im_bcc_wii_model_link_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "k4f6",
        unordered_bcc_wii_model_anim_2_type_b_0: 0,
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    x[0].unordered_bcc_wii_model_anim_2_type_b_0 = in_ml(u32(o + 0), g.bcc_wii_model_anim_2_type_b_array, im_bcc_wii_model_anim_2_type_b, g.unordered_ref.bcc_wii_model_anim_2_type_b);

    for (let i = 0; i < u32(o + 4); i++) {
        im_bcc_wii_model_link_12_8(u32(o + 8) + (i * 4) + g.m, i, x[0].section_8);
    }

    // 32 bytes;

}
function im_bcc_wii_model_link_12_8(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "DOXz",
        model_0: in_models(o + 0, g.models_array, im_bcc_wii_model, g.ordered_ref.bcc_wii_model),
    });

}
function im_bcc_wii_model_link_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Z2ua",
        f32_0: f32(o + 0),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        f32_24: f32(o + 24),
        f32_32: f32(o + 32),
    });

    // 48 bytes;

}
function im_bcc_wii_unknown(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Nn6;",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bcc_wii_unknown_4(u32(o + 4) + (ii * 16) + g.m, ii, x[i].section_4);
    }
    return x[i].id
    // 16 bytes;

}
function im_bcc_wii_unknown_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "I1Nn",
        u32_0: u32(o + 0),
        section_4: [],
        section_8: [],
        u32_12: u32(o + 12),
    });

    switch (u32(o + 0)) {
    case 1:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_unknown_thing_array, im_bcc_wii_unknown_thing, g.unordered_ref.bcc_wii_unknown_thing);
        break;
    case 4:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_strange_array, im_bcc_wii_strange, g.unordered_ref.bcc_wii_strange);
        break;
    case 5:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_unknown_idk_sec_array, im_bcc_wii_unknown_idk_sec, g.unordered_ref.bcc_wii_unknown_idk_sec);
        break;
    case 9:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_sound_section_array, im_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section);
        break;
    case 26:
        x[i].section_4 = in_ml(u32(o + 4), g.bcc_wii_sound_controls_array, im_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls);
        break;
    }
    switch (u32(o + 0)) {
    case 1:
        u32(o + 8) && im_bcc_wii_unknown_4_8t1(u32(o + 8) + g.m, x[i].section_8);
        break;
    case 4:
        u32(o + 8) && im_bcc_wii_unknown_4_8t4(u32(o + 8) + g.m, x[i].section_8);
        break;
    case 5:
        u32(o + 8) && im_bcc_wii_unknown_4_8t5(u32(o + 8) + g.m, x[i].section_8);
        break;
    case 9:
        u32(o + 8) && im_bcc_wii_unknown_4_8t9(u32(o + 8) + g.m, x[i].section_8);
        break;
    case 26:
        u32(o + 8) && im_bcc_wii_unknown_4_8t26(u32(o + 8) + g.m, x[i].section_8);
        break;
    }
}
function im_bcc_wii_unknown_4_8t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "jR^q",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_24: f32(o + 24),
        f32_28: f32(o + 28),
        f32_32: f32(o + 32),
        f32_36: f32(o + 36),
        u8_40: u8(o + 40),
        u8_41: u8(o + 41),
        u8_42: u8(o + 42),
        u8_43: u8(o + 43),
        section_48: [],
        section_52: [],
    });

    u32(o + 48) && im_bcc_wii_unknown_4_8t1_48(u32(o + 48) + g.m, x[0].section_48);
    switch (u8(o + 42)) {
    case 1:
        u32(o + 52) && im_bcc_wii_unknown_4_8t1_52t1(u32(o + 52) + g.m, x[0].section_52);
        break;
    case 2:
        u32(o + 52) && im_bcc_wii_unknown_4_8t1_52t2(u32(o + 52) + g.m, x[0].section_52);
        break;
    case 3:
        u32(o + 52) && im_bcc_wii_unknown_4_8t1_52t3(u32(o + 52) + g.m, x[0].section_52);
        break;
    }
    // 64 bytes;

}
function im_bcc_wii_unknown_4_8t1_48(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "z2@k",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_unknown_4_8t1_52t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ayfD",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_unknown_4_8t1_52t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "gQ6e",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_8: u8(o + 8),
        section_12: [],
    });

    switch (u8(o + 8)) {
    case 0:
        u32(o + 12) && im_bcc_wii_unknown_4_8t1_52t2_12t0(u32(o + 12) + g.m, x[0].section_12);
        break;
    case 2:
        u32(o + 12) && im_bcc_wii_unknown_4_8t1_52t2_12t2(u32(o + 12) + g.m, x[0].section_12);
        break;
    }
    // 16 bytes;

}
function im_bcc_wii_unknown_4_8t1_52t2_12t0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "N1dN",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_4_8t1_52t2_12t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "LwXz",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        u8_8: u8(o + 8),
    });

    // 32 bytes;

}
function im_bcc_wii_unknown_4_8t1_52t3(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "u2SG",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_4_8t4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "AElH",
        u32_0: u32(o + 0),
    });

    // 64 bytes;

}
function im_bcc_wii_unknown_4_8t5(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "u19K",
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_4_8t9(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "rC:k",
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_4_8t26(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "^R6O",
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_thing(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "F9[K",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        f32_8: f32(o + 8),
        u32_12: u32(o + 12),
        //amount?
        section_16: [],
        u8_20: u8(o + 20),
        u8_21: u8(o + 21),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
    });

    for (let ii = 0; ii < u32(o + 12); ii++) {
        im_bcc_wii_unknown_thing_16(u32(o + 16) + (ii * 12) + g.m, ii, x[i].section_16);
    }
    switch (u8(o + 20)) {
    case 1:
        u32(o + 24) && im_bcc_wii_unknown_thing_24t1(u32(o + 24) + g.m, x[i].section_24);
        break;
    case 2:
        u32(o + 24) && im_bcc_wii_unknown_thing_24t2(u32(o + 24) + g.m, x[i].section_24);
        break;
    }
    u32(o + 32) && im_bcc_wii_unknown_thing_32(u32(o + 32) + g.m, x[i].section_32);
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_unknown_thing_16(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "eOBQ",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_unknown_thing_24t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "WVN6",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        u8_8: u8(o + 8),
        u8_9: u8(o + 9),
        u8_11: u8(o + 11),
        u32_12: u32(o + 12),
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
        im_bcc_wii_unknown_thing_24t1_4(u32(o + 4) + (i * 4) + g.m, i, x[0].section_4);
    }

    for (let i = 0; i < u32(o + 48); i++) {
        im_bcc_wii_unknown_thing_24t1_52(u32(o + 52) + (i * 12) + g.m, i, x[0].section_52);
    }

    for (let i = 0; i < u32(o + 56); i++) {
        im_bcc_wii_unknown_thing_24t1_60(u32(o + 60) + (i * 12) + g.m, i, x[0].section_60);
    }
    u32(o + 64) && im_bcc_wii_unknown_thing_24t1_64(u32(o + 64) + g.m, x[0].section_64);

    for (let i = 0; i < u32(o + 68); i++) {
        im_bcc_wii_unknown_thing_24t1_72(u32(o + 72) + (i * 8) + g.m, i, x[0].section_72);
    }

    // 80 bytes;

}
function im_bcc_wii_unknown_thing_24t1_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "dfSO",
        texture_0: im_patch(g.texture_patch_ref, o + 0),
    });

}
function im_bcc_wii_unknown_thing_24t1_52(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "QoEf",
        f32_0: f32(o + 0),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_unknown_thing_24t1_60(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "?pp_",
        f32_0: f32(o + 0),
        u8_4: u8(o + 4),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_unknown_thing_24t1_64(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "ns^c",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
        f32_8: f32(o + 8),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
    });

    // 32 bytes;

}
function im_bcc_wii_unknown_thing_24t1_72(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "DW0_",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
    });

    for (let ii = 0; ii < u32(o + 0); ii++) {
        im_bcc_wii_unknown_thing_24t1_72_4(u32(o + 4) + (ii * 20) + g.m, ii, x[i].section_4);
    }

}
function im_bcc_wii_unknown_thing_24t1_72_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "WT6x",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

}
function im_bcc_wii_unknown_thing_24t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "tlrZ",
        u32_0: u32(o + 0),
        //amount?
        section_4: [],
        f32_8: f32(o + 8),
        u32_16: u32(o + 16),
        section_20: [],
        u32_24: u32(o + 24),
    });

    for (let i = 0; i < u32(o + 0); i++) {
        im_bcc_wii_unknown_thing_24t2_4(u32(o + 4) + (i * 12) + g.m, i, x[0].section_4);
    }
    u32(o + 20) && im_bcc_wii_unknown_thing_24t2_20(u32(o + 20) + g.m, x[0].section_20);

    // 32 bytes;

}
function im_bcc_wii_unknown_thing_24t2_4(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "oyTu",
        u8_0: u8(o + 0),
        u8_1: u8(o + 1),
        u8_2: u8(o + 2),
        u8_3: u8(o + 3),
        f32_8: f32(o + 8),
    });

}
function im_bcc_wii_unknown_thing_24t2_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "26q:",
        f32_0: f32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_thing_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "FZ6s",
    });

    // 16 bytes;

}
function im_bcc_wii_sound_section(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "xVV3",
        sound_0: im_patch(g.sound_patch_ref, o + 0),
        u32_4: u32(o + 4),
        u8_9: u8(o + 9),
        u8_10: u8(o + 10),
        f32_12: f32(o + 12),
        f32_16: f32(o + 16),
        f32_20: f32(o + 20),
        section_24: [],
    });

    u32(o + 24) && im_bcc_wii_sound_section_24(u32(o + 24) + g.m, x[i].section_24);
    return x[i].id
    // 32 bytes;

}
function im_bcc_wii_sound_section_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "zLhM",
        f32_0: f32(o + 0),
        u8_4: u8(o + 4),
        u8_8: u8(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec(o, i, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),

        sec_id: "Lhja",
        u8_4: u8(o + 4),
        u8_6: u8(o + 6),
        u8_7: u8(o + 7),
        section_8: [],
        u32_20: u32(o + 20),
        section_24: [],
        u32_28: u32(o + 28),
        section_32: [],
        u32_36: u32(o + 36),
        section_40: [],
        u8_44: u8(o + 44),
    });

    u32(o + 8) && im_bcc_wii_unknown_idk_sec_8(u32(o + 8) + g.m, x[i].section_8);
    u32(o + 24) && im_bcc_wii_unknown_idk_sec_24(u32(o + 24) + g.m, x[i].section_24);
    u32(o + 32) && im_bcc_wii_unknown_idk_sec_32(u32(o + 32) + g.m, x[i].section_32);
    u32(o + 40) && im_bcc_wii_unknown_idk_sec_40(u32(o + 40) + g.m, x[i].section_40);
    return x[i].id
    // 48 bytes;

}
function im_bcc_wii_unknown_idk_sec_8(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m8fp",
        u8_8: u8(o + 8),
        section_12: [],
        u32_16: u32(o + 16),
        section_20: [],
    });

    u32(o + 12) && im_bcc_wii_unknown_idk_sec_8_12(u32(o + 12) + g.m, x[0].section_12);
    u32(o + 20) && im_bcc_wii_unknown_idk_sec_8_20(u32(o + 20) + g.m, x[0].section_20);

    // 48 bytes;

}
function im_bcc_wii_unknown_idk_sec_8_12(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "PTxj",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        //amount?
        section_8: [],
    });

    for (let i = 0; i < u32(o + 4); i++) {
        im_bcc_wii_mysterious(u32(o + 8) + (i * 64) + g.m, i, x[0].section_8);
    }

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_8_20(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=wt0",
        u32_0: u32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_24(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "=]z:",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_unknown_idk_sec_24_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_24_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "iaii",
        f32_0: f32(o + 0),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_32(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "Sxav",
        u32_0: u32(o + 0),
        section_4: [],
    });

    u32(o + 4) && im_bcc_wii_unknown_idk_sec_32_4(u32(o + 4) + g.m, x[0].section_4);

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_32_4(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "i:j<",
        section_0: [],
    });

    u32(o + 0) && im_bcc_wii_unknown_idk_sec_32_4_0(u32(o + 0) + g.m, x[0].section_0);

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_32_4_0(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "H@Se",
        u8_0: u8(o + 0),
        section_4: [],
        u32_8: u32(o + 8),
    });

    u32(o + 4) && im_bcc_wii_unknown_idk_sec_32_4_0_4t1(u32(o + 4) + g.m, x[0].section_4);
    // offset? 

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_32_4_0_4t1(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "k_N7",
        u8_0: u8(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_32_4_0_4t2(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "A=3c",
        u32_0: u32(o + 0),
        u8_4: u8(o + 4),
    });

    // 16 bytes;

}
function im_bcc_wii_unknown_idk_sec_40(o, x) {
    id_offset.push(o);
    x.push({
        id: gen_id(),
        sec_id: "m^6n",
        f32_0: f32(o + 0),
        f32_4: f32(o + 4),
    });

    // 16 bytes;

}
/* end import list */
/////////////////////
/* start add list */
function add_bcc_wii_file_header() {
    return {

        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

function add_bcc_wii_directory() {
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

function add_bcc_wii_share() {
    return {

        sec_id: "6f2N",
        section_0: ["Pac-Kart"],
        u32_12: 0,
        section_16: [],
    };

}
function add_bcc_wii_share_16() {
    return {

        sec_id: "=?bn",
        sound_0: [0, 0, 0, 's'],
    };

}
function add_bcc_wii_world() {
    return {
        sec_id: "eARE",
        unordered_bcc_wii_world_4_4: 0,
        u32_8: 0,
        section_12: [],
        u32_24: 0,
        unordered_bcc_wii_world_28_28: 0,
        u32_56: 0,
        unordered_bcc_wii_world_60_60: 0,
        u32_80: 0,
        unordered_bcc_wii_world_84_84: 0,
        u32_88: 0,
        unordered_bcc_wii_world_92_92: 0,
        u32_104: 0,
        unordered_bcc_wii_world_108_108: 0,
        u32_112: 0,
        unordered_bcc_wii_world_116_116: 0,
        unordered_bcc_wii_world_120_120: 0,
        unordered_bcc_wii_world_settings_172: 0,
        unordered_bcc_wii_world_176_176: 0,
        u32_180: 0,
        unordered_bcc_wii_world_184_184: 0,
        u32_204: 0,
        unordered_bcc_wii_world_208_208: 0,
    };

}
function add_bcc_wii_world_12() {
    return {

        sec_id: "<cCj",
        u32_0: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        unordered_bcc_wii_car_76: 0,
        u32_80: 0,
        f32_88: 0,
        f32_92: 0,
        u8_126: 0,
        u8_127: 0,
        u8_130: 0,
        u32_140: 0,
        u32_148: 0,
    };

}
function add_bcc_wii_world_92() {
    return {

        sec_id: "0s3t",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        unordered_bcc_wii_idk_80: 0,
        f32_84: 0,
    };

}
function add_bcc_wii_world_184() {
    return {
        sec_id: "W1lX",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_60: 0,
        f32_76: 0,
        u8_80: 0,
        f32_92: 0,
    };

}
function add_bcc_wii_world_108() {
    return {

        sec_id: "?wsl",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_64: 0,
        u32_68: 0,
        section_72: [],
        f32_76: 0,
        u8_84: 0,
        u8_85: 0,
        u8_88: 0,
        u8_89: 0,
        u8_91: 0,
    };

}
function add_bcc_wii_world_116() {
    return {

        sec_id: "R>hQ",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_68: 0,
        f32_88: 0,
        f32_104: 0,
        f32_108: 0,
        model_116: [0, 0, 0, 'm'],
    };

}
function add_bcc_wii_world_28() {
    return {
        sec_id: "0b_V",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        u32_48: 0,
        section_80: [],
        section_84: [],
        u32_92: 0,
    };

}
function add_bcc_wii_world_28_84() {
    return {
        sec_id: "WhJ]",
        u32_4: 0,
        section_8: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_bcc_wii_world_28_84_8() {
    return {

        sec_id: "o4Qp",
        unordered_bcc_wii_world_92_0: 0,
    };

}
function add_bcc_wii_world_28_84_24() {
    return {

        sec_id: "iBhm",
        unordered_bcc_wii_world_108_0: 0,
    };

}
function add_bcc_wii_world_28_80() {
    return {
        sec_id: "debX",
        section_0: [],
    };

}
function add_bcc_wii_world_28_80_0() {
    return {

        sec_id: "DtZP",
        unordered_bcc_wii_world_116_0: 0,
    };

}
function add_bcc_wii_world_84() {
    return {

        sec_id: "DKln",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_76: 0,
        unordered_bcc_wii_world_12_80: 0,
    };

}
function add_bcc_wii_world_60() {
    return {
        sec_id: "TUmX",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        u32_40: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        f32_80: 0,
        f32_84: 0,
    };

}
function add_bcc_wii_world_4() {
    return {

        sec_id: "L1Hi",
        f32_0: 0,
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
function add_bcc_wii_world_4_20t1() {
    return {
        sec_id: "[RLj",
    };

}
function add_bcc_wii_world_4_16() {
    return {
        sec_id: "Z;DI",
    };

}
function add_bcc_wii_world_120() {
    return {
        sec_id: "eIVe",
        section_0: [],
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: [],
        u32_16: 0,
    };

}
function add_bcc_wii_world_120_0() {
    return {

        sec_id: "KIme",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_20: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_64: 0,
        section_68: [],
        section_72: [],
        u32_76: 0,
        section_80: [],
        f32_84: 0,
        u16_88: 0,
        u8_92: 0,
        u32_132: 0,
    };

}
function add_bcc_wii_world_120_0_80() {
    return {
        sec_id: "Np]f",
        u32_0: 0,
    };

}
function add_bcc_wii_world_120_0_68() {
    return {
        sec_id: "8XXd",
        f32_0: 0,
    };

}
function add_bcc_wii_world_120_0_72() {
    return {
        sec_id: "m4[=",
        u32_0: 0,
    };

}
function add_bcc_wii_world_120_12() {
    return {

        sec_id: "B]6F",
        u32_0: 0,
    };

}
function add_bcc_wii_world_208() {
    return {

        sec_id: "Am9Z",
        unordered_bcc_wii_world_thing_0: 0,
    };

}
function add_bcc_wii_world_176() {
    return {
        sec_id: "g4Tp",
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
function add_bcc_wii_world_176_4() {
    return {
        sec_id: "o>h9",
        unordered_bcc_wii_flag_0: 0,
    };

}
function add_bcc_wii_world_176_12() {
    return {

        sec_id: "Ok:_",
        unordered_bcc_wii_var_0: 0,
    };

}
function add_bcc_wii_world_176_20() {
    return {
        sec_id: "[IaM",
        unordered_bcc_wii_something_0: 0,
    };

}
function add_bcc_wii_world_176_28() {
    return {

        sec_id: "jPMA",
        unordered_bcc_wii_flag_0: 0,
    };

}
function add_bcc_wii_basic() {
    return {
        sec_id: "ppcY",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_basic_4() {
    return {
        sec_id: "EAzn",
        section_0: [],
        u32_4: 0,
    };

}
function add_bcc_wii_model() {
    return {

        sec_id: "X_Pk",
        u32_0: 0,
        section_4: ["Pac-Kart"],
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_16: 0,
        section_20: [],
        section_24: [],
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        u8_60: 0,
        u8_61: 0,
        u8_62: 0,
        u8_63: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        u8_76: 0,
        u8_77: 0,
        u8_78: 0,
        u8_79: 0,
    };

}
function add_bcc_wii_model_20() {
    return {
        sec_id: "lsi;",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_model_20_4() {
    return {

        sec_id: "[nOl",
        section_0: [],
    };

}
function add_bcc_wii_model_20_4_0tpc() {
    return {
        sec_id: "AJop",
        u32_0: 0,
        f32_8: 0,
        u8_13: 0,
        u8_14: 0,
        u32_16: 0,
        u32_32: 0,
        u32_36: 0,
        texture_48: [0, 0, 0, 't'],
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u8_73: 0,
        u8_74: 0,
        u8_75: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        f32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        u32_180: 0,
        u32_184: 0,
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        section_204: [],
        u32_216: 0,
        section_220: [],
        u32_224: 0,
        section_228: [],
    };

}
function add_bcc_wii_model_20_4_0tpc_188() {
    return {
        sec_id: ";ROy",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0tpc_192() {
    return {
        sec_id: "vSOt",
        u8_0: 0,
    };

}
function add_bcc_wii_model_20_4_0tpc_196() {
    return {
        sec_id: "jQ>S",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0tpc_200() {
    return {
        sec_id: "MeGr",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0tpc_204() {
    return {
        sec_id: "NxSR",
        u32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0tpc_220() {
    return {
        sec_id: "8i?L",
        u32_0: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_model_20_4_0tpc_220_12() {
    return {
        sec_id: "85FT",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function add_bcc_wii_model_20_4_0tpc_228() {
    return {
        sec_id: "kqvF",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
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
        f32_60: 0,
    };

}
function add_bcc_wii_model_20_4_0twii() {
    return {
        sec_id: "uupO",
        section_0: [],
    };

}
function add_bcc_wii_model_20_4_0twiit0() {
    return {
        sec_id: "9sEe",
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u32_32: 0,
        u32_36: 0,
        texture_48: [0, 0, 0, 't'],
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u32_72: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        u32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        section_180: [],
        section_188: [],
        section_192: [],
        section_196: [],
        section_200: [],
        section_208: [],
        u32_212: 0,
        u32_216: 0,
        u8_220: 0,
        u8_221: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit0_180() {
    return {
        sec_id: "OO3s",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit0_188() {
    return {
        sec_id: "v9E6",
        u8_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit0_192() {
    return {
        sec_id: "=AR^",
        u32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit0_196() {
    return {
        sec_id: "X]56",
        u16_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit0_200() {
    return {
        sec_id: "DJ=b",
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_model_20_4_0twiit0_200_8() {
    return {
        sec_id: "CXDY",
        u32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit0_208() {
    return {

        sec_id: "8qlu",
        f32_0: 0,
        f32_20: 0,
        f32_40: 0,
        f32_60: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1() {
    return {
        sec_id: "MnF3",
        u32_0: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u32_32: 0,
        u32_36: 0,
        texture_48: [0, 0, 0, 't'],
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u32_72: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        u32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        section_180: [],
        section_184: [],
        section_192: [],
        section_196: [],
        section_200: [],
        section_208: [],
        u32_212: 0,
        u32_216: 0,
        u8_220: 0,
        u8_221: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1_180() {
    return {
        sec_id: "A5sG",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1_184() {
    return {
        sec_id: "MZDL",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1_192() {
    return {
        sec_id: "3f2V",
        f32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1_196() {
    return {
        sec_id: "_hF?",
        u16_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1_200() {
    return {
        sec_id: "0;Eh",
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_model_20_4_0twiit1_200_8() {
    return {

        sec_id: "qas3",
        u8_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit1_208() {
    return {
        sec_id: "TYqi",
        u32_0: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit2() {
    return {
        sec_id: "HRcV",
        u32_0: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u32_72: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        u32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        section_180: [],
        u32_184: 0,
        section_188: [],
        u32_192: 0,
        section_196: [],
        u32_200: 0,
        section_204: [],
    };

}
function add_bcc_wii_model_20_4_0twiit2_180() {
    return {

        sec_id: "M@pS",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit2_188() {
    return {

        sec_id: "u<l_",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit2_196() {
    return {

        sec_id: ":1PM",
        u8_1: 0,
        u8_3: 0,
        u8_5: 0,
        u8_7: 0,
    };

}
function add_bcc_wii_model_20_4_0twiit2_204() {
    return {

        sec_id: "]ZJU",
        u8_1: 0,
        u8_3: 0,
        u8_5: 0,
        u8_7: 0,
    };

}
function add_bcc_wii_model_24() {
    return {
        sec_id: "ua@T",
        f32_0: 0,
    };

}
function add_bcc_wii_datapack_text_link() {
    return {

        sec_id: "F;6<",
        section_4: [],
    };

}
function add_bcc_wii_some_model_anim() {
    return {

        sec_id: "VJF;",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_28: 0,
        section_32: [],
        section_36: [],
        section_40: ["Pac-Kart"],
    };

}
function add_bcc_wii_some_model_anim_32() {
    return {

        sec_id: "f>ce",
        section_0: ["Pac-Kart"],
    };

}
function add_bcc_wii_some_model_anim_36() {
    return {
        sec_id: "2nS@",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        section_4: [],
        f32_8: 0,
    };

}
function add_bcc_wii_model_anim_2_type_b() {
    return {

        sec_id: "fTx1",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: ["Pac-Kart"],
        section_16: [],
        section_20: [],
    };

}
function add_bcc_wii_model_anim_2_type_b_16() {
    return {
        sec_id: "pU;;",
    };

}
function add_bcc_wii_model_anim_2_type_b_20() {
    return {
        sec_id: "?B2y",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_20: 0,
        u32_36: 0,
        section_40: [],
    };

}
function add_bcc_wii_model_anim_2_type_b_20_40() {
    return {

        sec_id: "8Qeg",
        section_0: [],
    };

}
function add_bcc_wii_model_anim_2_type_b_20_40_0() {
    return {
        sec_id: "3pDR",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        u32_36: 0,
        section_40: [],
    };

}
function add_bcc_wii_model_anim_2_type_b_20_40_0_40() {
    return {
        sec_id: "9:gV",
        section_0: [],
    };

}
function add_bcc_wii_model_anim_2_type_b_20_40_0_40_0() {
    return {
        sec_id: "KB;w",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_8: 0,
        u32_12: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bcc_wii_model_anim_2_type_c() {
    return {

        sec_id: "q<vl",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        section_36: ["Pac-Kart"],
    };

}
function add_bcc_wii_model_anim_2_type_c_24() {
    return {

        sec_id: "V@SC",
        u16_0: 0,
    };

}
function add_bcc_wii_model_anim_2_type_c_32() {
    return {

        sec_id: "9AKU",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_18: 0,
        u8_19: 0,
    };

}
function add_bcc_wii_something() {
    return {

        sec_id: "CFq>",
        u8_8: 0,
        u8_9: 0,
        u32_28: 0,
        u32_32: 0,
    };

}
function add_bcc_wii_var() {
    return {

        sec_id: "Pmr>",
        section_148: ["Pac-Kart"],
        u32_152: 0,
        section_156: [],
        u32_164: 0,
        section_168: [],
    };

}
function add_bcc_wii_var_156() {
    return {
        sec_id: "gddb",
        unordered_bcc_wii_var_0: 0,
    };

}
function add_bcc_wii_var_168() {
    return {

        sec_id: "@?Yc",
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_bcc_wii_var_168_16() {
    return {
        sec_id: "e8Y^",
        u32_4: 0,
        section_12: [],
        section_16: [],
    };

}
function add_bcc_wii_var_168_16_12t7() {
    return {
        sec_id: "f?MQ",
    };

}
function add_bcc_wii_var_168_16_16() {
    return {
        sec_id: "8AG^",
    };

}
function add_bcc_wii_var_168_24() {
    return {

        sec_id: "[s<N",
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        u32_20: 0,
    };

}
function add_bcc_wii_var_168_24_12t1() {
    return {
        sec_id: "gDue",
        section_0: [],
        u8_4: 0,
    };

}
function add_bcc_wii_var_168_24_12t1_0() {
    return {
        sec_id: "em=L",
        section_0: [],
        u8_4: 0,
        u8_6: 0,
    };

}
function add_bcc_wii_var_168_24_12t1_0_0() {
    return {
        sec_id: "?re[",
        u32_4: 0,
        u8_8: 0,
    };

}
function add_bcc_wii_var_168_24_12t5() {
    return {
        sec_id: "o?UJ",
        section_0: [],
        u8_4: 0,
    };

}
function add_bcc_wii_var_168_24_12t5_0() {
    return {
        sec_id: "@9ZY",
        unordered_bcc_wii_interface_0: 0,
        u8_5: 0,
        section_8: [],
    };

}
function add_bcc_wii_var_168_24_12t5_0_8() {
    return {
        sec_id: "oI^7",
    };

}
function add_bcc_wii_var_168_24_12t15() {
    return {
        sec_id: "wRKz",
        unordered_bcc_wii_var_0: 0,
        u32_4: 0,
    };

}
function add_bcc_wii_var_168_24_12t17() {
    return {
        sec_id: "EN9k",
    };

}
function add_bcc_wii_var_168_24_12t18() {
    return {
        sec_id: "jaO?",
        unordered_bcc_wii_something_4: 0,
        section_8: [],
        u32_16: 0,
    };

}
function add_bcc_wii_var_168_24_12t18_8() {
    return {
        sec_id: "ZZi^",
    };

}
function add_bcc_wii_idk() {
    return {

        sec_id: "qZhz",
        section_0: ["Pac-Kart"],
        u8_14: 0,
        u8_15: 0,
        model_16: [0, 0, 0, 'm'],
        f32_24: 0,
        section_36: [],
        unordered_bcc_wii_idk_44: 0,
        u8_80: 0,
        u8_81: 0,
        u8_82: 0,
        u8_83: 0,
    };

}
function add_bcc_wii_idk_36() {
    return {
        sec_id: "AI]P",
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
        unordered_bcc_wii_world_thing_40: 0,
        u8_44: 0,
        u8_45: 0,
        section_60: [],
        u32_64: 0,
        section_68: [],
    };

}
function add_bcc_wii_idk_36_60() {
    return {
        sec_id: "^v4p",
        f32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bcc_wii_idk_36_60_4() {
    return {
        sec_id: "ulHl",
    };

}
function add_bcc_wii_idk_36_60_8() {
    return {
        sec_id: "Spst",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_idk_36_60_8_4() {
    return {
        sec_id: "88wN",
        section_0: [],
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_idk_36_60_8_4_0() {
    return {
        sec_id: ":h:6",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_idk_36_60_8_4_0_4() {
    return {
        sec_id: "bl?B",
        u32_0: 0,
    };

}
function add_bcc_wii_idk_36_60_8_4_8() {
    return {
        sec_id: "hpE3",
        section_8: [],
        unordered_bcc_wii_world_thing_12: 0,
        f32_16: 0,
        section_20: [],
    };

}
function add_bcc_wii_idk_36_60_8_4_8_8() {
    return {
        sec_id: "op;Z",
    };

}
function add_bcc_wii_idk_36_60_8_4_8_20() {
    return {
        sec_id: "eRnZ",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bcc_wii_idk_36_68() {
    return {
        sec_id: "a36q",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function add_bcc_wii_world_settings() {
    return {

        sec_id: "XGOk",
        section_0: [],
        section_4: [],
        f32_12: 0,
        f32_16: 0,
        u8_37: 0,
        u8_39: 0,
        u32_56: 0,
        section_60: [],
        section_64: [],
        texture_68: [0, 0, 0, 't'],
        f32_72: 0,
        section_76: [],
        section_84: [],
        texture_88: [0, 0, 0, 't'],
        texture_92: [0, 0, 0, 't'],
        texture_96: [0, 0, 0, 't'],
        f32_100: 0,
        f32_104: 0,
        u16_110: 0,
        section_112: [],
        f32_116: 0,
        f32_120: 0,
        section_124: [],
        u32_128: 0,
        section_132: [],
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        f32_172: 0,
        f32_176: 0,
        u8_182: 0,
        texture_184: [0, 0, 0, 't'],
        f32_188: 0,
        f32_192: 0,
        f32_196: 0,
        f32_200: 0,
        f32_204: 0,
        f32_208: 0,
        f32_212: 0,
        f32_216: 0,
        unordered_bcc_wii_font_228: 0,
    };

}
function add_bcc_wii_world_settings_0() {
    return {
        sec_id: "_PmP",
        unordered_bcc_wii_interface_0: 0,
        u32_8: 0,
        section_12: ["Pac-Kart"],
        texture_20: [0, 0, 0, 't'],
        u32_36: 0,
        section_40: [],
    };

}
function add_bcc_wii_world_settings_0_40() {
    return {

        sec_id: ">VG;",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bcc_wii_world_settings_4() {
    return {
        sec_id: "qwj<",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: [],
        section_8: [],
        section_12: [],
        section_16: [],
    };

}
function add_bcc_wii_world_settings_4_4() {
    return {
        sec_id: "PZin",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_world_settings_4_4_4() {
    return {

        sec_id: "zRtN",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function add_bcc_wii_world_settings_4_4_12() {
    return {

        sec_id: "mv7c",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function add_bcc_wii_world_settings_60() {
    return {

        sec_id: "xF5=",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        f32_12: 0,
        u32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_36: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
    };

}
function add_bcc_wii_world_settings_64() {
    return {
        sec_id: "YeZe",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bcc_wii_world_settings_76() {
    return {
        sec_id: "@dfA",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_bcc_wii_world_settings_84() {
    return {
        sec_id: "dgeh",
    };

}
function add_bcc_wii_world_settings_112() {
    return {
        sec_id: "xIGR",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function add_bcc_wii_world_settings_124() {
    return {
        sec_id: "H]fG",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bcc_wii_world_settings_132() {
    return {
        sec_id: ";>L7",
        section_0: ["Pac-Kart"],
    };

}
function add_bcc_wii_object() {
    return {

        sec_id: ";F2O",
        section_4: [],
        f32_12: 0,
        u8_18: 0,
        u8_19: 0,
        section_44: [],
        u8_62: 0,
        f32_76: 0,
        f32_84: 0,
        unordered_bcc_wii_unknown_88: 0,
        u8_97: 0,
        u8_99: 0,
        unordered_bcc_wii_text_100: 0,
        u32_104: 0,
        section_108: [],
        u8_116: 0,
        u8_117: 0,
        u8_118: 0,
        u8_119: 0,
    };

}
function add_bcc_wii_object_4t17() {
    return {
        sec_id: "Q4US",
        u8_0: 0,
        u32_4: 0,
    };

}
function add_bcc_wii_object_44() {
    return {
        sec_id: "SLpY",
        f32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bcc_wii_object_44_4() {
    return {
        sec_id: "=non",
    };

}
function add_bcc_wii_object_44_8() {
    return {
        sec_id: "1c7N",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_object_44_8_4() {
    return {
        sec_id: "WFpa",
        section_0: [],
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_object_44_8_4_0() {
    return {
        sec_id: "XiPr",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_object_44_8_4_0_4() {
    return {
        sec_id: "cPUY",
        u32_0: 0,
    };

}
function add_bcc_wii_object_44_8_4_8() {
    return {
        sec_id: "rmRi",
        section_8: [],
        f32_16: 0,
        section_20: [],
    };

}
function add_bcc_wii_object_44_8_4_8_8() {
    return {
        sec_id: "vXEm",
    };

}
function add_bcc_wii_object_44_8_4_8_20() {
    return {
        sec_id: "q:^h",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bcc_wii_a_single_section() {
    return {

        sec_id: "m<yg",
        u32_4: 0,
        u16_12: 0,
        u32_20: 0,
    };

}
function add_bcc_wii_world_thing() {
    return {

        sec_id: "bIIT",
        u32_0: 0,
        u8_6: 0,
        u8_7: 0,
        f32_12: 0,
        f32_16: 0,
        section_20: [],
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        u32_36: 0,
        unordered_bcc_wii_unknown_40: 0,
        f32_44: 0,
        unordered_bcc_wii_unknown_48: 0,
        f32_52: 0,
        f32_60: 0,
        f32_68: 0,
        u32_72: 0,
        section_76: [],
        f32_80: 0,
        f32_84: 0,
        unordered_bcc_wii_sound_section_88: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
    };

}
function add_bcc_wii_world_thing_20() {
    return {
        sec_id: "k6g6",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bcc_wii_world_thing_76() {
    return {

        sec_id: "OoNP",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function add_bcc_wii_car() {
    return {

        sec_id: "dYoS",
        section_0: [],
        u8_4: 0,
    };

}
function add_bcc_wii_car_0() {
    return {
        sec_id: ";Ipi",
        unordered_bcc_wii_model_anim_2_type_b_16: 0,
        section_20: [],
        section_24: [],
        section_28: [],
        section_32: [],
        section_36: [],
        section_40: [],
        u32_44: 0,
        section_48: [],
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
        u32_68: 0,
        section_72: [],
    };

}
function add_bcc_wii_car_0_20() {
    return {
        sec_id: "OhSr",
        section_0: [],
        section_4: [],
        unordered_bcc_wii_sound_section_8: 0,
        unordered_bcc_wii_sound_section_12: 0,
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
function add_bcc_wii_car_0_20_0() {
    return {
        sec_id: "_04m",
        f32_0: 0,
        texture_4: [0, 0, 0, 't'],
        section_8: [],
        u32_12: 0,
        section_16: [],
        u32_24: 0,
        unordered_bcc_wii_unknown_28: 0,
        unordered_bcc_wii_unknown_32: 0,
        unordered_bcc_wii_unknown_36: 0,
    };

}
function add_bcc_wii_car_0_20_0_8() {
    return {
        sec_id: "@<q4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_bcc_wii_car_0_20_0_16() {
    return {

        sec_id: "EQAQ",
        u32_0: 0,
        u32_4: 0,
        unordered_bcc_wii_a_single_section_8: 0,
        section_12: [],
        section_16: [],
    };

}
function add_bcc_wii_car_0_20_0_16_12() {
    return {
        sec_id: "aXMK",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_20_0_16_16() {
    return {
        sec_id: "IR2D",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_20_4() {
    return {
        sec_id: "nJw[",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_20: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        u32_60: 0,
        unordered_bcc_wii_a_single_section_64: 0,
        section_68: [],
        f32_72: 0,
        f32_76: 0,
        section_80: [],
        section_84: [],
        section_88: [],
        section_92: [],
    };

}
function add_bcc_wii_car_0_20_4_68() {
    return {
        sec_id: "4?JD",
    };

}
function add_bcc_wii_car_0_20_4_80() {
    return {
        sec_id: "SrlY",
        u32_0: 0,
        f32_8: 0,
        unordered_bcc_wii_unknown_16: 0,
    };

}
function add_bcc_wii_car_0_20_4_84() {
    return {
        sec_id: "v0S5",
        u32_0: 0,
    };

}
function add_bcc_wii_car_0_20_4_88() {
    return {
        sec_id: "m5lT",
        u32_0: 0,
    };

}
function add_bcc_wii_car_0_20_4_92() {
    return {
        sec_id: "nx9Y",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_car_0_20_20() {
    return {

        sec_id: "rOui",
        u8_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_20_20_4t1() {
    return {
        sec_id: "tj]M",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_64: 0,
    };

}
function add_bcc_wii_car_0_20_20_4t3() {
    return {
        sec_id: "P?4F",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function add_bcc_wii_car_0_24() {
    return {
        sec_id: "AkNi",
        u8_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_24_4() {
    return {
        sec_id: "XQZp",
        section_0: [],
        section_4: [],
        section_8: [],
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
    };

}
function add_bcc_wii_car_0_24_4_0() {
    return {
        sec_id: "aew^",
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        section_40: [],
        section_48: [],
    };

}
function add_bcc_wii_car_0_24_4_0_40() {
    return {
        sec_id: "KbAu",
        u32_0: 0,
        u8_7: 0,
        f32_12: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        f32_44: 0,
        f32_52: 0,
        f32_60: 0,
        f32_68: 0,
        u32_72: 0,
        section_76: [],
        f32_80: 0,
        f32_84: 0,
        unordered_bcc_wii_sound_section_88: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
    };

}
function add_bcc_wii_car_0_24_4_0_40_76() {
    return {
        sec_id: "leP;",
    };

}
function add_bcc_wii_car_0_24_4_0_48() {
    return {
        sec_id: "ZN7z",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bcc_wii_car_0_24_4_4() {
    return {
        sec_id: "iaho",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_car_0_24_4_8() {
    return {
        sec_id: "[OP>",
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
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        f32_80: 0,
        f32_84: 0,
    };

}
function add_bcc_wii_car_0_28() {
    return {
        sec_id: "KetN",
        unordered_bcc_wii_model_anim_2_type_b_0: 0,
        unordered_bcc_wii_model_link_4: 0,
        u8_20: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_48: 0,
        section_52: [],
        u32_56: 0,
        section_60: [],
        u32_64: 0,
        section_68: [],
        u32_72: 0,
        section_76: [],
        u32_80: 0,
        section_84: [],
        f32_88: 0,
        f32_92: 0,
    };

}
function add_bcc_wii_car_0_28_52() {
    return {

        sec_id: "tj=:",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u8_20: 0,
    };

}
function add_bcc_wii_car_0_28_60() {
    return {

        sec_id: "tvUq",
        u16_0: 0,
        u16_2: 0,
        u16_4: 0,
    };

}
function add_bcc_wii_car_0_28_68() {
    return {
        sec_id: "Monb",
        u32_0: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bcc_wii_car_0_28_76() {
    return {
        sec_id: "Z1p?",
        u32_0: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bcc_wii_car_0_28_84() {
    return {

        sec_id: "HfwH",
        u32_0: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bcc_wii_car_0_32() {
    return {
        sec_id: "[JhY",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        unordered_bcc_wii_a_single_section_16: 0,
        u32_20: 0,
        section_24: [],
        u8_28: 0,
        section_32: [],
    };

}
function add_bcc_wii_car_0_32_24() {
    return {

        sec_id: "x4Ew",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_car_0_32_32() {
    return {
        sec_id: "ijPx",
        f32_0: 0,
        section_4: [],
        section_8: [],
    };

}
function add_bcc_wii_car_0_32_32_4() {
    return {
        sec_id: "[E]x",
        f32_20: 0,
    };

}
function add_bcc_wii_car_0_32_32_8() {
    return {
        sec_id: "mBT]",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_32_32_8_4() {
    return {

        sec_id: "^[^0",
        section_0: [],
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_car_0_32_32_8_4_0() {
    return {
        sec_id: "8Sh=",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_car_0_32_32_8_4_0_4() {
    return {
        sec_id: ":5xc",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_bcc_wii_car_0_32_32_8_4_0_12() {
    return {
        sec_id: "8[@N",
        u32_0: 0,
        u32_4: 0,
    };

}
function add_bcc_wii_car_0_32_32_8_4_8() {
    return {
        sec_id: "AF]z",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        section_8: [],
        f32_16: 0,
        section_20: [],
    };

}
function add_bcc_wii_car_0_32_32_8_4_8_8() {
    return {
        sec_id: "K>Ib",
        f32_20: 0,
    };

}
function add_bcc_wii_car_0_32_32_8_4_8_20t0() {
    return {
        sec_id: "Zefa",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bcc_wii_car_0_36() {
    return {
        sec_id: "IEb[",
        unordered_bcc_wii_sound_section_0: 0,
        f32_4: 0,
        unordered_bcc_wii_sound_section_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_car_0_40() {
    return {
        sec_id: "SSuB",
        unordered_bcc_wii_interface_0: 0,
        unordered_bcc_wii_interface_4: 0,
        unordered_bcc_wii_interface_8: 0,
        unordered_bcc_wii_interface_12: 0,
        unordered_bcc_wii_interface_16: 0,
        unordered_bcc_wii_interface_20: 0,
    };

}
function add_bcc_wii_car_0_48() {
    return {

        sec_id: "XxTU",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_48_4() {
    return {

        sec_id: "?tK?",
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function add_bcc_wii_car_0_56() {
    return {

        sec_id: "02m_",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_64() {
    return {

        sec_id: "Ns7]",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_car_0_72() {
    return {
        sec_id: "pyQj",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function add_bcc_wii_mysterious() {
    return {

        sec_id: "w>nd",
        u8_0: 0,
        u16_2: 0,
        section_4: [],
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
    };

}
function add_bcc_wii_mysterious_4t6() {
    return {
        sec_id: "Qaln",
        u8_0: 0,
        u8_3: 0,
        u32_4: 0,
        u32_12: 0,
        section_16: [],
        u8_25: 0,
        section_28: [],
        u32_32: 0,
        section_36: [],
        u32_40: 0,
        section_44: [],
        u32_48: 0,
        section_52: [],
        section_56: [],
    };

}
function add_bcc_wii_mysterious_4t6_16t0() {
    return {
        sec_id: "j7qF",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_bcc_wii_mysterious_4t6_16t2() {
    return {
        sec_id: "pqe5",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bcc_wii_mysterious_4t6_28() {
    return {
        sec_id: "8c@:",
        f32_8: 0,
        f32_16: 0,
    };

}
function add_bcc_wii_mysterious_4t6_36() {
    return {
        sec_id: "[_GT",
    };

}
function add_bcc_wii_mysterious_4t6_44() {
    return {

        sec_id: "EMvG",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_mysterious_4t6_52() {
    return {

        sec_id: "wYQW",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_mysterious_4t6_56() {
    return {
        sec_id: "nU45",
        f32_4: 0,
        f32_16: 0,
    };

}
function add_bcc_wii_mysterious_4t9() {
    return {
        sec_id: "@V:6",
        u8_2: 0,
        section_8: [],
    };

}
function add_bcc_wii_mysterious_4t9_8() {
    return {
        sec_id: "h5tA",
        texture_0: [0, 0, 0, 't'],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: [],
        u32_12: 0,
        f32_16: 0,
    };

}
function add_bcc_wii_mysterious_4t9_8_8() {
    return {
        sec_id: "0vr>",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function add_bcc_wii_strange() {
    return {

        sec_id: "[W[y",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bcc_wii_strange_4() {
    return {

        sec_id: "BQ[s",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function add_bcc_wii_link() {
    return {

        sec_id: "@I0t",
        u32_4: 0,
        section_16: [],
        unordered_bcc_wii_font_28: 0,
        unordered_bcc_wii_interface_32: 0,
        section_36: ["Pac-Kart"],
        u32_40: 0,
        section_44: ["Pac-Kart"],
        u32_52: 0,
        section_56: [],
        u32_60: 0,
        section_64: [],
        section_68: [],
        u32_72: u32(o + 72),
        //check this
    };

}
function add_bcc_wii_link_16() {
    return {
        sec_id: "vK8Y",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_link_16_4() {
    return {

        sec_id: "3MWe",
        unordered_bcc_wii_flag_0: 0,
    };

}
function add_bcc_wii_link_56() {
    return {
        sec_id: "T__]",
        u8_0: 0,
        section_12: [],
    };

}
function add_bcc_wii_link_56_12() {
    return {
        sec_id: "f948",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bcc_wii_link_64() {
    return {

        sec_id: "PPZq",
        section_0: [],
    };

}
function add_bcc_wii_link_64_0() {
    return {
        sec_id: "wY_q",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_link_64_0_4() {
    return {

        sec_id: "g2Zp",
        section_8: [],
        section_12: ["Pac-Kart"],
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_bcc_wii_link_64_0_4_8() {
    return {
        sec_id: "dX@Y",
        section_0: ["Pac-Kart"],
    };

}
function add_bcc_wii_link_64_0_4_20() {
    return {

        sec_id: "M4e3",
        u32_0: 0,
        section_4: [],
        u16_8: 0,
    };

}
function add_bcc_wii_link_64_0_4_20_4() {
    return {
        sec_id: "FfRf",
        u8_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_link_64_0_4_20_4_4() {
    return {
        sec_id: "X339",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function add_bcc_wii_link_64_0_4_28() {
    return {
        sec_id: "9=EG",
        u16_8: 0,
    };

}
function add_bcc_wii_link_68() {
    return {
        sec_id: "Y0_a",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_link_68_8() {
    return {
        sec_id: "7C>4",
    };

}
function add_bcc_wii_font() {
    return {

        sec_id: "3vkt",
        texture_0: [0, 0, 0, 't'],
        unordered_bcc_wii_model_anim_2_type_c_4: 0,
        u8_8: 0,
        u16_9: 0,
        f32_12: 0,
        u32_16: 0,
        section_20: [],
        u32_24: 0,
        section_28: [],
    };

}
function add_bcc_wii_font_20() {
    return {
        sec_id: "NxrC",
        f32_0: 0,
    };

}
function add_bcc_wii_font_28() {
    return {

        sec_id: "5YZr",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_flag() {
    return {

        sec_id: "P@4o",
        section_8: ["Pac-Kart"],
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        section_20: [],
        u8_25: 0,
        u8_27: 0,
        u8_30: 0,
        u8_31: 0,
        u8_40: 0,
        u8_42: 0,
    };

}
function add_bcc_wii_flag_20t0() {
    return {
        sec_id: "Jbcu",
        u32_12: 0,
    };

}
function add_bcc_wii_flag_20t2() {
    return {
        sec_id: "MV@T",
        u8_0: 0,
    };

}
function add_bcc_wii_flag_20t3() {
    return {
        sec_id: "P1]T",
        u8_1: 0,
        u8_2: 0,
        section_4: ["Pac-Kart"],
    };

}
function add_bcc_wii_flag_20t7() {
    return {
        sec_id: "DPD=",
        f32_20: 0,
    };

}
function add_bcc_wii_interface() {
    return {

        sec_id: "Zg[=",
        section_0: ["Pac-Kart"],
        u8_5: 0,
        u16_6: 0,
        u32_8: 0,
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        unordered_bcc_wii_sound_controls_20: 0,
        unordered_bcc_wii_sound_controls_24: 0,
        unordered_bcc_wii_sound_controls_32: 0,
        f32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        section_52: [],
        u8_57: 0,
        f32_68: 0,
        u32_72: 0,
        section_76: [],
        u32_80: 0,
        section_84: [],
        u32_88: 0,
        section_92: [],
    };

}
function add_bcc_wii_interface_52() {
    return {
        sec_id: "3CmU",
        f32_0: 0,
        u8_5: 0,
    };

}
function add_bcc_wii_interface_76() {
    return {
        sec_id: "qokw",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_76_4() {
    return {

        sec_id: "h66T",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_12: [],
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u8_32: 0,
        u8_33: 0,
    };

}
function add_bcc_wii_interface_76_4_12t1() {
    return {
        sec_id: "tgKG",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_76_4_12t1_4() {
    return {
        sec_id: "Ab_O",
        u8_12: 0,
        u8_13: 0,
        u32_16: 0,
        u32_20: 0,
    };

}
function add_bcc_wii_interface_76_4_12t5() {
    return {
        sec_id: "Go?E",
        u32_4: 0,
    };

}
function add_bcc_wii_interface_76_4_12t7() {
    return {
        sec_id: "x963",
        u8_0: 0,
        u8_1: 0,
    };

}
function add_bcc_wii_interface_76_4_12t8() {
    return {
        sec_id: "NBwm",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_76_4_12t8_4() {
    return {

        sec_id: "O0SJ",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_76_4_12t9() {
    return {
        sec_id: "@zqp",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_76_4_12t10() {
    return {
        sec_id: "xsDn",
        unordered_bcc_wii_flag_0: 0,
    };

}
function add_bcc_wii_interface_84() {
    return {

        sec_id: "Y9tK",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_bcc_wii_interface_84_4() {
    return {
        sec_id: "Nbiu",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_12: [],
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_84_4_12() {
    return {
        sec_id: "K6QX",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_84_4_12_4() {
    return {
        sec_id: "EuLy",
    };

}
function add_bcc_wii_interface_84_16() {
    return {

        sec_id: "Y0XC",
        u8_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_84_16_4() {
    return {
        sec_id: "YPxK",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_12: [],
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_84_16_4_12t7() {
    return {
        sec_id: "tney",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_84_16_4_12t7_4() {
    return {
        sec_id: "iENQ",
    };

}
function add_bcc_wii_interface_84_24() {
    return {

        sec_id: "5gHG",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: [],
        section_12: [],
        unordered_bcc_wii_sound_controls_24: 0,
    };

}
function add_bcc_wii_interface_84_24_4t11() {
    return {
        sec_id: "zIou",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_84_24_4t11_4() {
    return {

        sec_id: "hIeS",
        section_0: ["Pac-Kart"],
        section_4: [],
        u16_8: 0,
        section_12: [],
        u32_16: 0,
    };

}
function add_bcc_wii_interface_84_24_4t11_4_4() {
    return {
        sec_id: "@gqv",
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t1() {
    return {
        sec_id: "PjuG",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        unordered_bcc_wii_flag_12: 0,
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t2() {
    return {
        sec_id: "wAaf",
        section_0: [],
        section_4: [],
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t2_0() {
    return {
        sec_id: "gWt7",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t2_0_4() {
    return {
        sec_id: "aR37",
        u8_12: 0,
        u32_16: 0,
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t2_4() {
    return {
        sec_id: "Ah5f",
        u8_12: 0,
        u32_16: 0,
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t102() {
    return {
        sec_id: "AYKa",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_interface_84_24_4t11_4_12t102_8() {
    return {
        sec_id: "e1wv",
        u8_0: 0,
        section_4: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_84_24_12t6() {
    return {
        sec_id: "gl^8",
        section_0: [],
        section_4: [],
    };

}
function add_bcc_wii_interface_84_24_12t6_0() {
    return {
        sec_id: "HqxL",
    };

}
function add_bcc_wii_interface_84_24_12t6_4() {
    return {
        sec_id: "[h0X",
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u32_16: 0,
    };

}
function add_bcc_wii_interface_84_24_12t15() {
    return {
        sec_id: "^f0C",
        section_0: [],
        section_4: [],
    };

}
function add_bcc_wii_interface_84_24_12t15_0() {
    return {
        sec_id: "M@D=",
        u32_16: 0,
    };

}
function add_bcc_wii_interface_84_24_12t15_4() {
    return {
        sec_id: "Vg7t",
    };

}
function add_bcc_wii_interface_84_24_12t41() {
    return {
        sec_id: "YQn9",
        u8_0: 0,
        section_4: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_92() {
    return {

        sec_id: "=@<V",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: [],
        section_16: ["Pac-Kart"],
        u32_20: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        section_28: ["Pac-Kart"],
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
function add_bcc_wii_interface_92_12() {
    return {
        sec_id: "S1S5",
    };

}
function add_bcc_wii_interface_92_32() {
    return {
        sec_id: "K?FO",
        u8_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_interface_92_32_8() {
    return {

        sec_id: "E4[N",
        section_4: [],
    };

}
function add_bcc_wii_interface_92_32_8_4() {
    return {
        sec_id: "RAZm",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_12: [],
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function add_bcc_wii_interface_92_32_8_4_12() {
    return {
        sec_id: "5Shy",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_92_32_8_4_12_4() {
    return {
        sec_id: "idO=",
        u8_12: 0,
        u32_16: 0,
    };

}
function add_bcc_wii_interface_92_36t0() {
    return {
        sec_id: "o@Wq",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        section_4: [],
        section_8: [],
        u8_12: 0,
        u8_13: 0,
    };

}
function add_bcc_wii_interface_92_36t0_8() {
    return {
        sec_id: "4A0R",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_9: 0,
        u8_11: 0,
        u8_16: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function add_bcc_wii_interface_92_36t0_8_4() {
    return {

        sec_id: "9CnE",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bcc_wii_interface_92_36t1() {
    return {
        sec_id: "obHn",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        unordered_bcc_wii_text_4: 0,
        section_8: [],
        section_12: [],
        section_16: [],
        u8_20: 0,
        u8_21: 0,
        u16_22: 0,
        u16_24: 0,
        u8_26: 0,
        u8_27: 0,
        f32_28: 0,
    };

}
function add_bcc_wii_interface_92_36t1_8t1() {
    return {
        sec_id: "0Td9",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u16_10: 0,
    };

}
function add_bcc_wii_interface_92_36t1_8t1_4() {
    return {

        sec_id: "GinK",
        unordered_bcc_wii_text_0: 0,
    };

}
function add_bcc_wii_interface_92_36t1_8t3() {
    return {
        sec_id: "k803",
        u8_0: 0,
    };

}
function add_bcc_wii_interface_92_36t1_16() {
    return {
        sec_id: "m?S^",
    };

}
function add_bcc_wii_interface_92_36t3() {
    return {
        sec_id: "LdgG",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_9: 0,
    };

}
function add_bcc_wii_interface_92_36t3_4() {
    return {

        sec_id: "Kgg3",
        unordered_bcc_wii_model_link_0: 0,
    };

}
function add_bcc_wii_interface_92_36t6() {
    return {
        sec_id: "wb3F",
        unordered_bcc_wii_interface_0: 0,
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_interface_92_36t6_12() {
    return {

        sec_id: "7x8U",
        u8_0: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_bcc_wii_interface_92_36t10() {
    return {
        sec_id: "7vha",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function add_bcc_wii_interface_92_36t12() {
    return {
        sec_id: "@QnV",
        u8_0: 0,
        u32_4: 0,
    };

}
function add_bcc_wii_interface_92_36t13() {
    return {
        sec_id: "@ZfX",
        u8_1: 0,
        section_4: [],
        u32_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_interface_92_36t13_4() {
    return {
        sec_id: "gz;e",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
    };

}
function add_bcc_wii_interface_92_36t13_12() {
    return {

        sec_id: "_H_N",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bcc_wii_interface_92_36t14() {
    return {
        sec_id: "RVUa",
        u8_0: 0,
        u8_1: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_92_36t14_4() {
    return {
        sec_id: "=t[F",
        u8_0: 0,
        u8_2: 0,
        u8_8: 0,
    };

}
function add_bcc_wii_interface_92_36t15() {
    return {
        sec_id: "ueYq",
        unordered_bcc_wii_emitter_0: 0,
    };

}
function add_bcc_wii_interface_92_40() {
    return {
        sec_id: "jTMt",
        u8_0: 0,
        u8_2: 0,
        u8_12: 0,
        u8_14: 0,
        u32_32: 0,
        u32_44: 0,
        section_48: [],
        u32_68: 0,
        section_72: [],
    };

}
function add_bcc_wii_interface_92_40_48() {
    return {
        sec_id: "^NKx",
        u32_0: 0,
        u8_6: 0,
        u32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        u32_20: 0,
    };

}
function add_bcc_wii_interface_92_40_72() {
    return {

        sec_id: "JLx0",
        u32_0: 0,
        u32_12: 0,
        section_16: [],
        u32_20: 0,
        section_24: [],
    };

}
function add_bcc_wii_interface_92_40_72_16() {
    return {
        sec_id: "f7DI",
        u8_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_92_40_72_16_4() {
    return {
        sec_id: "8]DV",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u32_16: 0,
    };

}
function add_bcc_wii_interface_92_40_72_24() {
    return {

        sec_id: "4fSg",
        u8_0: 0,
        section_4: [],
        u32_20: 0,
        unordered_bcc_wii_sound_controls_24: 0,
    };

}
function add_bcc_wii_interface_92_40_72_24_4t11() {
    return {
        sec_id: ";JzX",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_interface_92_40_72_24_4t11_4() {
    return {

        sec_id: "Evcn",
        section_0: ["Pac-Kart"],
        u16_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_interface_92_40_72_24_4t11_4_12t1() {
    return {
        sec_id: "lGYE",
        u8_0: 0,
        u8_1: 0,
        u8_4: 0,
        section_8: ["Pac-Kart"],
        u32_16: 0,
    };

}
function add_bcc_wii_interface_92_52() {
    return {
        sec_id: "4PaN",
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
function add_bcc_wii_interface_92_52_4() {
    return {
        sec_id: "_[wd",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_52_12() {
    return {
        sec_id: "S0_F",
        f32_0: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_52_20() {
    return {

        sec_id: "xUNy",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_52_28() {
    return {

        sec_id: "^QM0",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_interface_92_52_36() {
    return {

        sec_id: "FOq0",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_68() {
    return {

        sec_id: "eCBi",
        u8_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_bcc_wii_interface_92_68_4() {
    return {
        sec_id: "4;GK",
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
function add_bcc_wii_interface_92_68_4_4() {
    return {

        sec_id: "f?<n",
        u8_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_bcc_wii_interface_92_68_4_4_16() {
    return {
        sec_id: "DOp<",
        section_0: ["Pac-Kart"],
        u16_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_interface_92_68_4_4_16_12t1() {
    return {
        sec_id: "hndJ",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        u32_16: 0,
    };

}
function add_bcc_wii_interface_92_68_4_12() {
    return {

        sec_id: "5KeD",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_68_4_20() {
    return {

        sec_id: ";bBT",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_68_4_28() {
    return {

        sec_id: "1dxp",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_interface_92_68_4_36() {
    return {
        sec_id: "PYVC",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_interface_92_68_4_44() {
    return {

        sec_id: "O1b1",
        f32_8: 0,
        f32_12: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_sound_controls() {
    return {

        sec_id: "ZsN5",
        u32_0: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_bcc_wii_sound_controls_16() {
    return {

        sec_id: "l4:C",
        u32_0: 0,
        section_4: [],
        u32_8: 0,
        f32_12: 0,
    };

}
function add_bcc_wii_sound_controls_16_4() {
    return {
        sec_id: "6yp[",
        unordered_bcc_wii_sound_section_0: 0,
    };

}
function add_bcc_wii_text() {
    return {

        sec_id: "_>Nj",
        section_0: ["Pac-Kart"],
    };

}
function add_bcc_wii_multi_font() {
    return {

        sec_id: "nrpk",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_multi_font_4t0() {
    return {
        sec_id: "VoJk",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bcc_wii_font_12: 0,
        f32_24: 0,
        unordered_bcc_wii_font_28: 0,
        unordered_bcc_wii_font_32: 0,
    };

}
function add_bcc_wii_multi_font_4t1() {
    return {
        sec_id: "siCP",
        u8_1: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bcc_wii_font_12: 0,
        unordered_bcc_wii_font_16: 0,
        unordered_bcc_wii_font_20: 0,
        f32_24: 0,
        f32_28: 0,
    };

}
function add_bcc_wii_emitter() {
    return {

        sec_id: "M<Mx",
        f32_0: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: [],
    };

}
function add_bcc_wii_emitter_16() {
    return {
        sec_id: "m=Hn",
        texture_0: [0, 0, 0, 't'],
        u8_4: 0,
        u32_8: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        u32_40: 0,
        u32_44: 0,
        section_48: [],
        u32_52: 0,
        section_56: [],
    };

}
function add_bcc_wii_emitter_16_48() {
    return {

        sec_id: "Y]DN",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_emitter_16_56() {
    return {

        sec_id: "ufGi",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_model_link() {
    return {

        sec_id: "1]_V",
        section_4: [],
        section_8: ["Pac-Kart"],
        section_12: [],
        unordered_bcc_wii_some_model_anim_16: 0,
        f32_20: 0,
        u8_25: 0,
        section_48: [],
    };

}
function add_bcc_wii_model_link_4() {
    return {
        sec_id: "6z5R",
    };

}
function add_bcc_wii_model_link_12() {
    return {
        sec_id: "k4f6",
        unordered_bcc_wii_model_anim_2_type_b_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_model_link_12_8() {
    return {

        sec_id: "DOXz",
        model_0: [0, 0, 0, 'm'],
    };

}
function add_bcc_wii_model_link_48() {
    return {
        sec_id: "Z2ua",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function add_bcc_wii_unknown() {
    return {

        sec_id: "Nn6;",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_unknown_4() {
    return {

        sec_id: "I1Nn",
        u32_0: 0,
        section_4: [],
        section_8: [],
        u32_12: 0,
    };

}
function add_bcc_wii_unknown_4_8t1() {
    return {
        sec_id: "jR^q",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        u8_40: 0,
        u8_41: 0,
        u8_42: 0,
        u8_43: 0,
        section_48: [],
        section_52: [],
    };

}
function add_bcc_wii_unknown_4_8t1_48() {
    return {
        sec_id: "z2@k",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_unknown_4_8t1_52t1() {
    return {
        sec_id: "ayfD",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_unknown_4_8t1_52t2() {
    return {
        sec_id: "gQ6e",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
        section_12: [],
    };

}
function add_bcc_wii_unknown_4_8t1_52t2_12t0() {
    return {
        sec_id: "N1dN",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_unknown_4_8t1_52t2_12t2() {
    return {
        sec_id: "LwXz",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
    };

}
function add_bcc_wii_unknown_4_8t1_52t3() {
    return {
        sec_id: "u2SG",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bcc_wii_unknown_4_8t4() {
    return {
        sec_id: "AElH",
        u32_0: 0,
    };

}
function add_bcc_wii_unknown_4_8t5() {
    return {
        sec_id: "u19K",
    };

}
function add_bcc_wii_unknown_4_8t9() {
    return {
        sec_id: "rC:k",
    };

}
function add_bcc_wii_unknown_4_8t26() {
    return {
        sec_id: "^R6O",
    };

}
function add_bcc_wii_unknown_thing() {
    return {

        sec_id: "F9[K",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: [],
        u8_20: 0,
        u8_21: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
    };

}
function add_bcc_wii_unknown_thing_16() {
    return {

        sec_id: "eOBQ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_unknown_thing_24t1() {
    return {
        sec_id: "WVN6",
        u32_0: 0,
        section_4: [],
        u8_8: 0,
        u8_9: 0,
        u8_11: 0,
        u32_12: 0,
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
function add_bcc_wii_unknown_thing_24t1_4() {
    return {

        sec_id: "dfSO",
        texture_0: [0, 0, 0, 't'],
    };

}
function add_bcc_wii_unknown_thing_24t1_52() {
    return {

        sec_id: "QoEf",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_unknown_thing_24t1_60() {
    return {

        sec_id: "?pp_",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_unknown_thing_24t1_64() {
    return {
        sec_id: "ns^c",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function add_bcc_wii_unknown_thing_24t1_72() {
    return {

        sec_id: "DW0_",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_unknown_thing_24t1_72_4() {
    return {

        sec_id: "WT6x",
        f32_0: 0,
        f32_4: 0,
    };

}
function add_bcc_wii_unknown_thing_24t2() {
    return {
        sec_id: "tlrZ",
        u32_0: 0,
        section_4: [],
        f32_8: 0,
        u32_16: 0,
        section_20: [],
        u32_24: 0,
    };

}
function add_bcc_wii_unknown_thing_24t2_4() {
    return {

        sec_id: "oyTu",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function add_bcc_wii_unknown_thing_24t2_20() {
    return {
        sec_id: "26q:",
        f32_0: 0,
    };

}
function add_bcc_wii_unknown_thing_32() {
    return {
        sec_id: "FZ6s",
    };

}
function add_bcc_wii_sound_section() {
    return {

        sec_id: "xVV3",
        sound_0: [0, 0, 0, 's'],
        u32_4: 0,
        u8_9: 0,
        u8_10: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        section_24: [],
    };

}
function add_bcc_wii_sound_section_24() {
    return {
        sec_id: "zLhM",
        f32_0: 0,
        u8_4: 0,
        u8_8: 0,
    };

}
function add_bcc_wii_unknown_idk_sec() {
    return {

        sec_id: "Lhja",
        u8_4: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: [],
        u32_20: 0,
        section_24: [],
        u32_28: 0,
        section_32: [],
        u32_36: 0,
        section_40: [],
        u8_44: 0,
    };

}
function add_bcc_wii_unknown_idk_sec_8() {
    return {
        sec_id: "m8fp",
        u8_8: 0,
        section_12: [],
        u32_16: 0,
        section_20: [],
    };

}
function add_bcc_wii_unknown_idk_sec_8_12() {
    return {
        sec_id: "PTxj",
        u32_0: 0,
        u32_4: 0,
        section_8: [],
    };

}
function add_bcc_wii_unknown_idk_sec_8_20() {
    return {
        sec_id: "=wt0",
        u32_0: 0,
    };

}
function add_bcc_wii_unknown_idk_sec_24() {
    return {
        sec_id: "=]z:",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_unknown_idk_sec_24_4() {
    return {
        sec_id: "iaii",
        f32_0: 0,
    };

}
function add_bcc_wii_unknown_idk_sec_32() {
    return {
        sec_id: "Sxav",
        u32_0: 0,
        section_4: [],
    };

}
function add_bcc_wii_unknown_idk_sec_32_4() {
    return {
        sec_id: "i:j<",
        section_0: [],
    };

}
function add_bcc_wii_unknown_idk_sec_32_4_0() {
    return {
        sec_id: "H@Se",
        u8_0: 0,
        section_4: [],
        u32_8: 0,
    };

}
function add_bcc_wii_unknown_idk_sec_32_4_0_4t1() {
    return {
        sec_id: "k_N7",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function add_bcc_wii_unknown_idk_sec_32_4_0_4t2() {
    return {
        sec_id: "A=3c",
        u32_0: 0,
        u8_4: 0,
    };

}
function add_bcc_wii_unknown_idk_sec_40() {
    return {
        sec_id: "m^6n",
        f32_0: 0,
        f32_4: 0,
    };

}
/* end add list */
/////////////////////
/* start info list */
function info_bcc_wii_file_header() {
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

function info_bcc_wii_directory() {
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
function info_bcc_wii_share() {
    return {
        sec_id: "6f2N",
        section_0: ["Pac-Kart"],
        u32_12: {
            a: null
        },
        section_16: ["=?bn"],
    };

}
function info_bcc_wii_share_16() {
    return {
        sec_id: "=?bn",
        sound_0: "sound_patch",
    };

}
function info_bcc_wii_world() {
    return {
        sec_id: "eARE",
        unordered_bcc_wii_world_4_4: 0,
        u32_8: {
            a: null
        },
        section_12: ["<cCj"],
        u32_24: {
            a: null
        },
        unordered_bcc_wii_world_28_28: 0,
        u32_56: {
            a: null
        },
        unordered_bcc_wii_world_60_60: 0,
        u32_80: {
            a: null
        },
        unordered_bcc_wii_world_84_84: 0,
        u32_88: {
            a: null
        },
        unordered_bcc_wii_world_92_92: 0,
        u32_104: {
            a: null
        },
        unordered_bcc_wii_world_108_108: 0,
        u32_112: {
            a: null
        },
        unordered_bcc_wii_world_116_116: 0,
        unordered_bcc_wii_world_120_120: 0,
        unordered_bcc_wii_world_settings_172: 0,
        unordered_bcc_wii_world_176_176: 0,
        u32_180: {
            a: null
        },
        unordered_bcc_wii_world_184_184: 0,
        u32_204: {
            a: null
        },
        unordered_bcc_wii_world_208_208: 0,
    };

}
function info_bcc_wii_world_12() {
    return {
        sec_id: "<cCj",
        u32_0: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        unordered_bcc_wii_car_76: 0,
        u32_80: 0,
        f32_88: 0,
        f32_92: 0,
        u8_126: 0,
        u8_127: 0,
        u8_130: 0,
        u32_140: 0,
        u32_148: 0,
    };

}
function info_bcc_wii_world_92() {
    return {
        sec_id: "0s3t",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        unordered_bcc_wii_idk_80: 0,
        f32_84: 0,
    };

}
function info_bcc_wii_world_184() {
    return {
        sec_id: "W1lX",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_60: 0,
        f32_76: 0,
        u8_80: 0,
        f32_92: 0,
    };

}
function info_bcc_wii_world_108() {
    return {
        sec_id: "?wsl",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_64: 0,
        u32_68: 0,
        section_72: ["change this"],
        f32_76: 0,
        u8_84: 0,
        u8_85: 0,
        u8_88: 0,
        u8_89: 0,
        u8_91: 0,
    };

}
function info_bcc_wii_world_116() {
    return {
        sec_id: "R>hQ",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_68: 0,
        f32_88: 0,
        f32_104: 0,
        f32_108: 0,
        model_116: "model_patch",
    };

}
function info_bcc_wii_world_28() {
    return {
        sec_id: "0b_V",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        u32_48: {
            a: null
        },
        section_80: ["debX"],
        section_84: ["WhJ]"],
        u32_92: 0,
    };

}
function info_bcc_wii_world_28_84() {
    return {
        sec_id: "WhJ]",
        u32_4: {
            a: null
        },
        section_8: ["o4Qp"],
        u32_20: {
            a: null
        },
        section_24: ["iBhm"],
    };

}
function info_bcc_wii_world_28_84_8() {
    return {
        sec_id: "o4Qp",
        unordered_bcc_wii_world_92_0: 0,
    };

}
function info_bcc_wii_world_28_84_24() {
    return {
        sec_id: "iBhm",
        unordered_bcc_wii_world_108_0: 0,
    };

}
function info_bcc_wii_world_28_80() {
    return {
        sec_id: "debX",
        section_0: ["DtZP"],
    };

}
function info_bcc_wii_world_28_80_0() {
    return {
        sec_id: "DtZP",
        unordered_bcc_wii_world_116_0: 0,
    };

}
function info_bcc_wii_world_84() {
    return {
        sec_id: "DKln",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_76: 0,
        unordered_bcc_wii_world_12_80: 0,
    };

}
function info_bcc_wii_world_60() {
    return {
        sec_id: "TUmX",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_14: 0,
        u16_20: 0,
        u16_22: 0,
        u32_40: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        f32_80: 0,
        f32_84: 0,
    };

}
function info_bcc_wii_world_4() {
    return {
        sec_id: "L1Hi",
        f32_0: 0,
        f32_8: 0,
        section_16: ["Z;DI"],
        section_20: {
            s: 0
        },
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
function info_bcc_wii_world_4_20t1() {
    return {
        sec_id: "[RLj",
    };

}
function info_bcc_wii_world_4_16() {
    return {
        sec_id: "Z;DI",
    };

}
function info_bcc_wii_world_120() {
    return {
        sec_id: "eIVe",
        section_0: ["KIme"],
        u32_4: {
            a: null
        },
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: ["B]6F"],
        u32_16: {
            a: null
        },
    };

}
function info_bcc_wii_world_120_0() {
    return {
        sec_id: "KIme",
        u32_0: 0,
        u16_4: 0,
        u16_12: 0,
        u16_20: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        f32_60: 0,
        u32_64: 0,
        section_68: ["8XXd"],
        section_72: ["m4[="],
        u32_76: 0,
        section_80: ["Np]f"],
        f32_84: 0,
        u16_88: 0,
        u8_92: 0,
        u32_132: 0,
    };

}
function info_bcc_wii_world_120_0_80() {
    return {
        sec_id: "Np]f",
        u32_0: 0,
    };

}
function info_bcc_wii_world_120_0_68() {
    return {
        sec_id: "8XXd",
        f32_0: 0,
    };

}
function info_bcc_wii_world_120_0_72() {
    return {
        sec_id: "m4[=",
        u32_0: 0,
    };

}
function info_bcc_wii_world_120_12() {
    return {
        sec_id: "B]6F",
        u32_0: 0,
    };

}
function info_bcc_wii_world_208() {
    return {
        sec_id: "Am9Z",
        unordered_bcc_wii_world_thing_0: 0,
    };

}
function info_bcc_wii_world_176() {
    return {
        sec_id: "g4Tp",
        u32_0: {
            a: null
        },
        section_4: ["o>h9"],
        u32_8: {
            a: null
        },
        section_12: ["Ok:_"],
        u32_16: {
            a: null
        },
        section_20: ["[IaM"],
        u32_24: {
            a: null
        },
        section_28: ["jPMA"],
    };

}
function info_bcc_wii_world_176_4() {
    return {
        sec_id: "o>h9",
        unordered_bcc_wii_flag_0: 0,
    };

}
function info_bcc_wii_world_176_12() {
    return {
        sec_id: "Ok:_",
        unordered_bcc_wii_var_0: 0,
    };

}
function info_bcc_wii_world_176_20() {
    return {
        sec_id: "[IaM",
        unordered_bcc_wii_something_0: 0,
    };

}
function info_bcc_wii_world_176_28() {
    return {
        sec_id: "jPMA",
        unordered_bcc_wii_flag_0: 0,
    };

}
function info_bcc_wii_basic() {
    return {
        sec_id: "ppcY",
        u32_0: 0,
        section_4: ["EAzn"],
    };

}
function info_bcc_wii_basic_4() {
    return {
        sec_id: "EAzn",
        section_0: ["change this"],
        u32_4: 0,
    };

}
function info_bcc_wii_model() {
    return {
        sec_id: "X_Pk",
        u32_0: 0,
        section_4: ["Pac-Kart"],
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_16: 0,
        section_20: ["lsi;"],
        section_24: ["ua@T"],
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        f32_56: 0,
        u8_60: 0,
        u8_61: 0,
        u8_62: 0,
        u8_63: 0,
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        u8_76: 0,
        u8_77: 0,
        u8_78: 0,
        u8_79: 0,
    };

}
function info_bcc_wii_model_20() {
    return {
        sec_id: "lsi;",
        u32_0: {
            a: null
        },
        section_4: ["[nOl"],
    };

}
function info_bcc_wii_model_20_4() {
    return {
        sec_id: "[nOl",
        section_0: ["X_Pk"],
    };

}
function info_bcc_wii_model_20_4_0tpc() {
    return {
        sec_id: "AJop",
        u32_0: 0,
        f32_8: 0,
        u8_13: 0,
        u8_14: 0,
        u32_16: 0,
        u32_32: 0,
        u32_36: 0,
        texture_48: "texture_patch",
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u8_73: 0,
        u8_74: 0,
        u8_75: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        f32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        u32_180: 0,
        u32_184: 0,
        section_188: [";ROy"],
        section_192: ["vSOt"],
        section_196: ["jQ>S"],
        section_200: ["MeGr"],
        section_204: ["NxSR"],
        u32_216: 0,
        section_220: ["8i?L"],
        u32_224: 0,
        section_228: ["kqvF"],
    };

}
function info_bcc_wii_model_20_4_0tpc_188() {
    return {
        sec_id: ";ROy",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0tpc_192() {
    return {
        sec_id: "vSOt",
        u8_0: 0,
    };

}
function info_bcc_wii_model_20_4_0tpc_196() {
    return {
        sec_id: "jQ>S",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0tpc_200() {
    return {
        sec_id: "MeGr",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0tpc_204() {
    return {
        sec_id: "NxSR",
        u32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0tpc_220() {
    return {
        sec_id: "8i?L",
        u32_0: 0,
        u32_8: 0,
        section_12: ["85FT"],
    };

}
function info_bcc_wii_model_20_4_0tpc_220_12() {
    return {
        sec_id: "85FT",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function info_bcc_wii_model_20_4_0tpc_228() {
    return {
        sec_id: "kqvF",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
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
        f32_60: 0,
    };

}
function info_bcc_wii_model_20_4_0twii() {
    return {
        sec_id: "uupO",
        section_0: ["9sEe"],
    };

}
function info_bcc_wii_model_20_4_0twiit0() {
    return {
        sec_id: "9sEe",
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u32_32: 0,
        u32_36: 0,
        texture_48: "texture_patch",
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u32_72: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        u32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        section_180: ["OO3s"],
        section_188: ["v9E6"],
        section_192: ["=AR^"],
        section_196: ["X]56"],
        section_200: ["DJ=b"],
        section_208: ["8qlu"],
        u32_212: 0,
        u32_216: 0,
        u8_220: {
            a: null
        },
        u8_221: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit0_180() {
    return {
        sec_id: "OO3s",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit0_188() {
    return {
        sec_id: "v9E6",
        u8_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit0_192() {
    return {
        sec_id: "=AR^",
        u32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit0_196() {
    return {
        sec_id: "X]56",
        u16_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit0_200() {
    return {
        sec_id: "DJ=b",
        u32_4: 0,
        section_8: ["CXDY"],
    };

}
function info_bcc_wii_model_20_4_0twiit0_200_8() {
    return {
        sec_id: "CXDY",
        u32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit0_208() {
    return {
        sec_id: "8qlu",
        f32_0: 0,
        f32_20: 0,
        f32_40: 0,
        f32_60: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1() {
    return {
        sec_id: "MnF3",
        u32_0: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u32_32: 0,
        u32_36: 0,
        texture_48: "texture_patch",
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u32_72: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        u32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: 0,
        section_180: ["A5sG"],
        section_184: ["MZDL"],
        section_192: ["3f2V"],
        section_196: ["_hF?"],
        section_200: ["0;Eh"],
        section_208: ["TYqi"],
        u32_212: 0,
        u32_216: 0,
        u8_220: 0,
        u8_221: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1_180() {
    return {
        sec_id: "A5sG",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1_184() {
    return {
        sec_id: "MZDL",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1_192() {
    return {
        sec_id: "3f2V",
        f32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1_196() {
    return {
        sec_id: "_hF?",
        u16_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1_200() {
    return {
        sec_id: "0;Eh",
        u32_4: {
            a: null
        },
        section_8: ["qas3"],
    };

}
function info_bcc_wii_model_20_4_0twiit1_200_8() {
    return {
        sec_id: "qas3",
        u8_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit1_208() {
    return {
        sec_id: "TYqi",
        u32_0: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit2() {
    return {
        sec_id: "HRcV",
        u32_0: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u8_68: 0,
        u8_69: 0,
        u8_70: 0,
        u8_71: 0,
        u32_72: 0,
        f32_96: 0,
        f32_116: 0,
        f32_136: 0,
        u32_156: 0,
        u8_160: 0,
        u8_161: 0,
        u8_162: 0,
        u8_163: 0,
        u32_176: {
            a: null
        },
        section_180: ["M@pS"],
        u32_184: {
            a: null
        },
        section_188: ["u<l_"],
        u32_192: {
            a: null
        },
        section_196: [":1PM"],
        u32_200: {
            a: null
        },
        section_204: ["]ZJU"],
    };

}
function info_bcc_wii_model_20_4_0twiit2_180() {
    return {
        sec_id: "M@pS",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit2_188() {
    return {
        sec_id: "u<l_",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit2_196() {
    return {
        sec_id: ":1PM",
        u8_1: 0,
        u8_3: 0,
        u8_5: 0,
        u8_7: 0,
    };

}
function info_bcc_wii_model_20_4_0twiit2_204() {
    return {
        sec_id: "]ZJU",
        u8_1: 0,
        u8_3: 0,
        u8_5: 0,
        u8_7: 0,
    };

}
function info_bcc_wii_model_24() {
    return {
        sec_id: "ua@T",
        f32_0: 0,
    };

}
function info_bcc_wii_datapack_text_link() {
    return {
        sec_id: "F;6<",
        section_4: ["change this"],
    };

}
function info_bcc_wii_some_model_anim() {
    return {
        sec_id: "VJF;",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_12: {
            a: null
        },
        f32_16: 0,
        f32_20: 0,
        f32_28: 0,
        section_32: ["f>ce"],
        section_36: ["2nS@"],
        section_40: ["Pac-Kart"],
    };

}
function info_bcc_wii_some_model_anim_32() {
    return {
        sec_id: "f>ce",
        section_0: ["Pac-Kart"],
    };

}
function info_bcc_wii_some_model_anim_36() {
    return {
        sec_id: "2nS@",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        section_4: ["2nS@"],
        f32_8: 0,
    };

}
function info_bcc_wii_model_anim_2_type_b() {
    return {
        sec_id: "fTx1",
        u32_0: 0,
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: ["Pac-Kart"],
        section_16: ["pU;;"],
        section_20: ["?B2y"],
    };

}
function info_bcc_wii_model_anim_2_type_b_16() {
    return {
        sec_id: "pU;;",
    };

}
function info_bcc_wii_model_anim_2_type_b_20() {
    return {
        sec_id: "?B2y",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_20: 0,
        u32_36: {
            a: null
        },
        section_40: ["8Qeg"],
    };

}
function info_bcc_wii_model_anim_2_type_b_20_40() {
    return {
        sec_id: "8Qeg",
        section_0: ["3pDR"],
    };

}
function info_bcc_wii_model_anim_2_type_b_20_40_0() {
    return {
        sec_id: "3pDR",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        u32_36: 0,
        section_40: ["9:gV"],
    };

}
function info_bcc_wii_model_anim_2_type_b_20_40_0_40() {
    return {
        sec_id: "9:gV",
        section_0: ["KB;w"],
    };

}
function info_bcc_wii_model_anim_2_type_b_20_40_0_40_0() {
    return {
        sec_id: "KB;w",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        f32_8: 0,
        u32_12: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bcc_wii_model_anim_2_type_c() {
    return {
        sec_id: "q<vl",
        u32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u32_20: {
            a: null
        },
        section_24: ["V@SC"],
        u32_28: {
            a: null
        },
        section_32: ["9AKU"],
        section_36: ["Pac-Kart"],
    };

}
function info_bcc_wii_model_anim_2_type_c_24() {
    return {
        sec_id: "V@SC",
        u16_0: 0,
    };

}
function info_bcc_wii_model_anim_2_type_c_32() {
    return {
        sec_id: "9AKU",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_18: 0,
        u8_19: 0,
    };

}
function info_bcc_wii_something() {
    return {
        sec_id: "CFq>",
        u8_8: 0,
        u8_9: 0,
        u32_28: 0,
        u32_32: 0,
    };

}
function info_bcc_wii_var() {
    return {
        sec_id: "Pmr>",
        section_148: ["Pac-Kart"],
        u32_152: 0,
        section_156: ["gddb"],
        u32_164: {
            a: null
        },
        section_168: ["@?Yc"],
    };

}
function info_bcc_wii_var_156() {
    return {
        sec_id: "gddb",
        unordered_bcc_wii_var_0: 0,
    };

}
function info_bcc_wii_var_168() {
    return {
        sec_id: "@?Yc",
        u32_12: 0,
        section_16: ["e8Y^"],
        u32_20: {
            a: null
        },
        section_24: ["[s<N"],
    };

}
function info_bcc_wii_var_168_16() {
    return {
        sec_id: "e8Y^",
        u32_4: 0,
        section_12: {
            s: 0
        },
        section_16: ["8AG^"],
    };

}
function info_bcc_wii_var_168_16_12t7() {
    return {
        sec_id: "f?MQ",
    };

}
function info_bcc_wii_var_168_16_16() {
    return {
        sec_id: "8AG^",
    };

}
function info_bcc_wii_var_168_24() {
    return {
        sec_id: "[s<N",
        u8_4: 0,
        u8_5: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
        u32_20: 0,
    };

}
function info_bcc_wii_var_168_24_12t1() {
    return {
        sec_id: "gDue",
        section_0: ["em=L"],
        u8_4: 0,
    };

}
function info_bcc_wii_var_168_24_12t1_0() {
    return {
        sec_id: "em=L",
        section_0: ["?re["],
        u8_4: 0,
        u8_6: 0,
    };

}
function info_bcc_wii_var_168_24_12t1_0_0() {
    return {
        sec_id: "?re[",
        u32_4: 0,
        u8_8: 0,
    };

}
function info_bcc_wii_var_168_24_12t5() {
    return {
        sec_id: "o?UJ",
        section_0: ["@9ZY"],
        u8_4: 0,
    };

}
function info_bcc_wii_var_168_24_12t5_0() {
    return {
        sec_id: "@9ZY",
        unordered_bcc_wii_interface_0: 0,
        u8_5: 0,
        section_8: ["oI^7"],
    };

}
function info_bcc_wii_var_168_24_12t5_0_8() {
    return {
        sec_id: "oI^7",
    };

}
function info_bcc_wii_var_168_24_12t15() {
    return {
        sec_id: "wRKz",
        unordered_bcc_wii_var_0: 0,
        u32_4: 0,
    };

}
function info_bcc_wii_var_168_24_12t17() {
    return {
        sec_id: "EN9k",
    };

}
function info_bcc_wii_var_168_24_12t18() {
    return {
        sec_id: "jaO?",
        unordered_bcc_wii_something_4: 0,
        section_8: ["ZZi^"],
        u32_16: 0,
    };

}
function info_bcc_wii_var_168_24_12t18_8() {
    return {
        sec_id: "ZZi^",
    };

}
function info_bcc_wii_idk() {
    return {
        sec_id: "qZhz",
        section_0: ["Pac-Kart"],
        u8_14: 0,
        u8_15: 0,
        model_16: "model_patch",
        f32_24: 0,
        section_36: ["AI]P"],
        unordered_bcc_wii_idk_44: 0,
        u8_80: 0,
        u8_81: 0,
        u8_82: 0,
        u8_83: 0,
    };

}
function info_bcc_wii_idk_36() {
    return {
        sec_id: "AI]P",
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
        unordered_bcc_wii_world_thing_40: 0,
        u8_44: 0,
        u8_45: 0,
        section_60: ["^v4p"],
        u32_64: 0,
        section_68: ["a36q"],
    };

}
function info_bcc_wii_idk_36_60() {
    return {
        sec_id: "^v4p",
        f32_0: 0,
        section_4: ["ulHl"],
        section_8: ["Spst"],
    };

}
function info_bcc_wii_idk_36_60_4() {
    return {
        sec_id: "ulHl",
    };

}
function info_bcc_wii_idk_36_60_8() {
    return {
        sec_id: "Spst",
        u32_0: 0,
        section_4: ["88wN"],
    };

}
function info_bcc_wii_idk_36_60_8_4() {
    return {
        sec_id: "88wN",
        section_0: [":h:6"],
        u32_4: 0,
        section_8: ["hpE3"],
    };

}
function info_bcc_wii_idk_36_60_8_4_0() {
    return {
        sec_id: ":h:6",
        u32_0: 0,
        section_4: ["bl?B"],
    };

}
function info_bcc_wii_idk_36_60_8_4_0_4() {
    return {
        sec_id: "bl?B",
        u32_0: 0,
    };

}
function info_bcc_wii_idk_36_60_8_4_8() {
    return {
        sec_id: "hpE3",
        section_8: ["op;Z"],
        unordered_bcc_wii_world_thing_12: 0,
        f32_16: 0,
        section_20: ["eRnZ"],
    };

}
function info_bcc_wii_idk_36_60_8_4_8_8() {
    return {
        sec_id: "op;Z",
    };

}
function info_bcc_wii_idk_36_60_8_4_8_20() {
    return {
        sec_id: "eRnZ",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bcc_wii_idk_36_68() {
    return {
        sec_id: "a36q",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function info_bcc_wii_world_settings() {
    return {
        sec_id: "XGOk",
        section_0: ["_PmP"],
        section_4: ["qwj<"],
        f32_12: 0,
        f32_16: 0,
        u8_37: 0,
        u8_39: 0,
        u32_56: {
            a: null
        },
        section_60: ["xF5="],
        section_64: ["YeZe"],
        texture_68: "texture_patch",
        f32_72: 0,
        section_76: ["@dfA"],
        section_84: ["dgeh"],
        texture_88: "texture_patch",
        texture_92: "texture_patch",
        texture_96: "texture_patch",
        f32_100: 0,
        f32_104: 0,
        u16_110: 0,
        section_112: ["xIGR"],
        f32_116: 0,
        f32_120: 0,
        section_124: ["H]fG"],
        u32_128: 0,
        section_132: [";>L7"],
        f32_160: 0,
        f32_164: 0,
        f32_168: 0,
        f32_172: 0,
        f32_176: 0,
        u8_182: 0,
        texture_184: "texture_patch",
        f32_188: 0,
        f32_192: 0,
        f32_196: 0,
        f32_200: 0,
        f32_204: 0,
        f32_208: 0,
        f32_212: 0,
        f32_216: 0,
        unordered_bcc_wii_font_228: 0,
    };

}
function info_bcc_wii_world_settings_0() {
    return {
        sec_id: "_PmP",
        unordered_bcc_wii_interface_0: 0,
        u32_8: 0,
        section_12: ["Pac-Kart"],
        texture_20: "texture_patch",
        u32_36: {
            a: null
        },
        section_40: [">VG;"],
    };

}
function info_bcc_wii_world_settings_0_40() {
    return {
        sec_id: ">VG;",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bcc_wii_world_settings_4() {
    return {
        sec_id: "qwj<",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: ["PZin"],
        section_8: ["PZin"],
        section_12: ["PZin"],
        section_16: ["PZin"],
    };

}
function info_bcc_wii_world_settings_4_4() {
    return {
        sec_id: "PZin",
        u32_0: {
            a: null
        },
        section_4: ["zRtN"],
        u32_8: {
            a: null
        },
        section_12: ["mv7c"],
    };

}
function info_bcc_wii_world_settings_4_4_4() {
    return {
        sec_id: "zRtN",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function info_bcc_wii_world_settings_4_4_12() {
    return {
        sec_id: "mv7c",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function info_bcc_wii_world_settings_60() {
    return {
        sec_id: "xF5=",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        f32_12: 0,
        u32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_36: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
    };

}
function info_bcc_wii_world_settings_64() {
    return {
        sec_id: "YeZe",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bcc_wii_world_settings_76() {
    return {
        sec_id: "@dfA",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_bcc_wii_world_settings_84() {
    return {
        sec_id: "dgeh",
    };

}
function info_bcc_wii_world_settings_112() {
    return {
        sec_id: "xIGR",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
    };

}
function info_bcc_wii_world_settings_124() {
    return {
        sec_id: "H]fG",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bcc_wii_world_settings_132() {
    return {
        sec_id: ";>L7",
        section_0: ["Pac-Kart"],
    };

}
function info_bcc_wii_object() {
    return {
        sec_id: ";F2O",
        section_4: {
            s: 0
        },
        f32_12: 0,
        u8_18: 0,
        u8_19: 0,
        section_44: ["SLpY"],
        u8_62: 0,
        f32_76: 0,
        f32_84: 0,
        unordered_bcc_wii_unknown_88: 0,
        u8_97: 0,
        u8_99: 0,
        unordered_bcc_wii_text_100: 0,
        u32_104: {
            a: null
        },
        section_108: ["change this"],
        u8_116: 0,
        u8_117: 0,
        u8_118: 0,
        u8_119: 0,
    };

}
function info_bcc_wii_object_4t17() {
    return {
        sec_id: "Q4US",
        u8_0: 0,
        u32_4: 0,
    };

}
function info_bcc_wii_object_44() {
    return {
        sec_id: "SLpY",
        f32_0: 0,
        section_4: ["=non"],
        section_8: ["1c7N"],
    };

}
function info_bcc_wii_object_44_4() {
    return {
        sec_id: "=non",
    };

}
function info_bcc_wii_object_44_8() {
    return {
        sec_id: "1c7N",
        u32_0: 0,
        section_4: ["WFpa"],
    };

}
function info_bcc_wii_object_44_8_4() {
    return {
        sec_id: "WFpa",
        section_0: ["XiPr"],
        u32_4: 0,
        section_8: ["rmRi"],
    };

}
function info_bcc_wii_object_44_8_4_0() {
    return {
        sec_id: "XiPr",
        u32_0: 0,
        section_4: ["cPUY"],
    };

}
function info_bcc_wii_object_44_8_4_0_4() {
    return {
        sec_id: "cPUY",
        u32_0: 0,
    };

}
function info_bcc_wii_object_44_8_4_8() {
    return {
        sec_id: "rmRi",
        section_8: ["vXEm"],
        f32_16: 0,
        section_20: ["q:^h"],
    };

}
function info_bcc_wii_object_44_8_4_8_8() {
    return {
        sec_id: "vXEm",
    };

}
function info_bcc_wii_object_44_8_4_8_20() {
    return {
        sec_id: "q:^h",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bcc_wii_a_single_section() {
    return {
        sec_id: "m<yg",
        u32_4: 0,
        u16_12: 0,
        u32_20: 0,
    };

}
function info_bcc_wii_world_thing() {
    return {
        sec_id: "bIIT",
        u32_0: 0,
        u8_6: 0,
        u8_7: 0,
        f32_12: 0,
        f32_16: 0,
        section_20: ["k6g6"],
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        u32_36: 0,
        unordered_bcc_wii_unknown_40: 0,
        f32_44: 0,
        unordered_bcc_wii_unknown_48: 0,
        f32_52: 0,
        f32_60: 0,
        f32_68: 0,
        u32_72: {
            a: null
        },
        section_76: ["OoNP"],
        f32_80: 0,
        f32_84: 0,
        unordered_bcc_wii_sound_section_88: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
    };

}
function info_bcc_wii_world_thing_20() {
    return {
        sec_id: "k6g6",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bcc_wii_world_thing_76() {
    return {
        sec_id: "OoNP",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function info_bcc_wii_car() {
    return {
        sec_id: "dYoS",
        section_0: [";Ipi"],
        u8_4: 0,
    };

}
function info_bcc_wii_car_0() {
    return {
        sec_id: ";Ipi",
        unordered_bcc_wii_model_anim_2_type_b_16: 0,
        section_20: ["OhSr"],
        section_24: ["AkNi"],
        section_28: ["KetN"],
        section_32: ["[JhY"],
        section_36: ["IEb["],
        section_40: ["SSuB"],
        u32_44: {
            a: null
        },
        section_48: ["XxTU"],
        u32_52: {
            a: null
        },
        section_56: ["02m_"],
        u32_60: {
            a: null
        },
        section_64: ["Ns7]"],
        u32_68: 0,
        section_72: ["pyQj"],
    };

}
function info_bcc_wii_car_0_20() {
    return {
        sec_id: "OhSr",
        section_0: ["_04m"],
        section_4: ["nJw["],
        unordered_bcc_wii_sound_section_8: 0,
        unordered_bcc_wii_sound_section_12: 0,
        u32_16: {
            a: null
        },
        section_20: ["rOui"],
        u32_24: {
            a: null
        },
        section_28: ["rOui"],
        u32_32: {
            a: null
        },
        section_36: ["rOui"],
        u32_40: {
            a: null
        },
        section_44: ["rOui"],
    };

}
function info_bcc_wii_car_0_20_0() {
    return {
        sec_id: "_04m",
        f32_0: 0,
        texture_4: "texture_patch",
        section_8: ["@<q4"],
        u32_12: {
            a: null
        },
        section_16: ["EQAQ"],
        u32_24: 0,
        unordered_bcc_wii_unknown_28: 0,
        unordered_bcc_wii_unknown_32: 0,
        unordered_bcc_wii_unknown_36: 0,
    };

}
function info_bcc_wii_car_0_20_0_8() {
    return {
        sec_id: "@<q4",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_bcc_wii_car_0_20_0_16() {
    return {
        sec_id: "EQAQ",
        u32_0: 0,
        u32_4: 0,
        unordered_bcc_wii_a_single_section_8: 0,
        section_12: ["aXMK"],
        section_16: ["IR2D"],
    };

}
function info_bcc_wii_car_0_20_0_16_12() {
    return {
        sec_id: "aXMK",
        u32_0: {
            a: null
        },
        section_4: ["change this"],
    };

}
function info_bcc_wii_car_0_20_0_16_16() {
    return {
        sec_id: "IR2D",
        u32_0: {
            a: null
        },
        section_4: ["change this"],
    };

}
function info_bcc_wii_car_0_20_4() {
    return {
        sec_id: "nJw[",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_20: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
        f32_52: 0,
        u32_60: 0,
        unordered_bcc_wii_a_single_section_64: 0,
        section_68: ["4?JD"],
        f32_72: 0,
        f32_76: 0,
        section_80: ["SrlY"],
        section_84: ["v0S5"],
        section_88: ["m5lT"],
        section_92: ["nx9Y"],
    };

}
function info_bcc_wii_car_0_20_4_68() {
    return {
        sec_id: "4?JD",
    };

}
function info_bcc_wii_car_0_20_4_80() {
    return {
        sec_id: "SrlY",
        u32_0: 0,
        f32_8: 0,
        unordered_bcc_wii_unknown_16: 0,
    };

}
function info_bcc_wii_car_0_20_4_84() {
    return {
        sec_id: "v0S5",
        u32_0: 0,
    };

}
function info_bcc_wii_car_0_20_4_88() {
    return {
        sec_id: "m5lT",
        u32_0: 0,
    };

}
function info_bcc_wii_car_0_20_4_92() {
    return {
        sec_id: "nx9Y",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_car_0_20_20() {
    return {
        sec_id: "rOui",
        u8_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_bcc_wii_car_0_20_20_4t1() {
    return {
        sec_id: "tj]M",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        u8_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_64: 0,
    };

}
function info_bcc_wii_car_0_20_20_4t3() {
    return {
        sec_id: "P?4F",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
    };

}
function info_bcc_wii_car_0_24() {
    return {
        sec_id: "AkNi",
        u8_0: 0,
        section_4: ["XQZp"],
    };

}
function info_bcc_wii_car_0_24_4() {
    return {
        sec_id: "XQZp",
        section_0: ["aew^"],
        section_4: ["iaho"],
        section_8: ["[OP>"],
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
        f32_48: 0,
    };

}
function info_bcc_wii_car_0_24_4_0() {
    return {
        sec_id: "aew^",
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        section_40: ["KbAu"],
        section_48: ["ZN7z"],
    };

}
function info_bcc_wii_car_0_24_4_0_40() {
    return {
        sec_id: "KbAu",
        u32_0: 0,
        u8_7: 0,
        f32_12: 0,
        f32_16: 0,
        u32_24: 0,
        u32_28: 0,
        f32_32: 0,
        f32_44: 0,
        f32_52: 0,
        f32_60: 0,
        f32_68: 0,
        u32_72: 0,
        section_76: ["leP;"],
        f32_80: 0,
        f32_84: 0,
        unordered_bcc_wii_sound_section_88: 0,
        f32_100: 0,
        f32_104: 0,
        f32_108: 0,
    };

}
function info_bcc_wii_car_0_24_4_0_40_76() {
    return {
        sec_id: "leP;",
    };

}
function info_bcc_wii_car_0_24_4_0_48() {
    return {
        sec_id: "ZN7z",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bcc_wii_car_0_24_4_4() {
    return {
        sec_id: "iaho",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_car_0_24_4_8() {
    return {
        sec_id: "[OP>",
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
        f32_64: 0,
        f32_68: 0,
        f32_72: 0,
        f32_76: 0,
        f32_80: 0,
        f32_84: 0,
    };

}
function info_bcc_wii_car_0_28() {
    return {
        sec_id: "KetN",
        unordered_bcc_wii_model_anim_2_type_b_0: 0,
        unordered_bcc_wii_model_link_4: 0,
        u8_20: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        u32_48: {
            a: null
        },
        section_52: ["tj=:"],
        u32_56: {
            a: null
        },
        section_60: ["tvUq"],
        u32_64: 0,
        section_68: ["Monb"],
        u32_72: 0,
        section_76: ["Z1p?"],
        u32_80: {
            a: null
        },
        section_84: ["HfwH"],
        f32_88: 0,
        f32_92: 0,
    };

}
function info_bcc_wii_car_0_28_52() {
    return {
        sec_id: "tj=:",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        u8_20: 0,
    };

}
function info_bcc_wii_car_0_28_60() {
    return {
        sec_id: "tvUq",
        u16_0: 0,
        u16_2: 0,
        u16_4: 0,
    };

}
function info_bcc_wii_car_0_28_68() {
    return {
        sec_id: "Monb",
        u32_0: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bcc_wii_car_0_28_76() {
    return {
        sec_id: "Z1p?",
        u32_0: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bcc_wii_car_0_28_84() {
    return {
        sec_id: "HfwH",
        u32_0: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bcc_wii_car_0_32() {
    return {
        sec_id: "[JhY",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        unordered_bcc_wii_a_single_section_16: 0,
        u32_20: {
            a: null
        },
        section_24: ["x4Ew"],
        u8_28: 0,
        section_32: ["ijPx"],
    };

}
function info_bcc_wii_car_0_32_24() {
    return {
        sec_id: "x4Ew",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_car_0_32_32() {
    return {
        sec_id: "ijPx",
        f32_0: 0,
        section_4: ["[E]x"],
        section_8: ["mBT]"],
    };

}
function info_bcc_wii_car_0_32_32_4() {
    return {
        sec_id: "[E]x",
        f32_20: 0,
    };

}
function info_bcc_wii_car_0_32_32_8() {
    return {
        sec_id: "mBT]",
        u32_0: {
            a: null
        },
        section_4: ["^[^0"],
    };

}
function info_bcc_wii_car_0_32_32_8_4() {
    return {
        sec_id: "^[^0",
        section_0: ["8Sh="],
        u32_4: 0,
        section_8: ["AF]z"],
    };

}
function info_bcc_wii_car_0_32_32_8_4_0() {
    return {
        sec_id: "8Sh=",
        u32_0: 0,
        section_4: [":5xc"],
        u32_8: 0,
        section_12: ["8[@N"],
    };

}
function info_bcc_wii_car_0_32_32_8_4_0_4() {
    return {
        sec_id: ":5xc",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_bcc_wii_car_0_32_32_8_4_0_12() {
    return {
        sec_id: "8[@N",
        u32_0: 0,
        u32_4: 0,
    };

}
function info_bcc_wii_car_0_32_32_8_4_8() {
    return {
        sec_id: "AF]z",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        section_8: ["K>Ib"],
        f32_16: 0,
        section_20: {
            s: 0
        },
    };

}
function info_bcc_wii_car_0_32_32_8_4_8_8() {
    return {
        sec_id: "K>Ib",
        f32_20: 0,
    };

}
function info_bcc_wii_car_0_32_32_8_4_8_20t0() {
    return {
        sec_id: "Zefa",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bcc_wii_car_0_36() {
    return {
        sec_id: "IEb[",
        unordered_bcc_wii_sound_section_0: 0,
        f32_4: 0,
        unordered_bcc_wii_sound_section_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_car_0_40() {
    return {
        sec_id: "SSuB",
        unordered_bcc_wii_interface_0: 0,
        unordered_bcc_wii_interface_4: 0,
        unordered_bcc_wii_interface_8: 0,
        unordered_bcc_wii_interface_12: 0,
        unordered_bcc_wii_interface_16: 0,
        unordered_bcc_wii_interface_20: 0,
    };

}
function info_bcc_wii_car_0_48() {
    return {
        sec_id: "XxTU",
        u32_0: {
            a: null
        },
        section_4: ["?tK?"],
    };

}
function info_bcc_wii_car_0_48_4() {
    return {
        sec_id: "?tK?",
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
    };

}
function info_bcc_wii_car_0_56() {
    return {
        sec_id: "02m_",
        u32_0: {
            a: null
        },
        section_4: ["change this"],
    };

}
function info_bcc_wii_car_0_64() {
    return {
        sec_id: "Ns7]",
        u32_0: {
            a: null
        },
        section_4: ["change this"],
    };

}
function info_bcc_wii_car_0_72() {
    return {
        sec_id: "pyQj",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function info_bcc_wii_mysterious() {
    return {
        sec_id: "w>nd",
        u8_0: 0,
        u16_2: 0,
        section_4: {
            s: 0
        },
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        f32_40: 0,
        f32_44: 0,
    };

}
function info_bcc_wii_mysterious_4t6() {
    return {
        sec_id: "Qaln",
        u8_0: 0,
        u8_3: 0,
        u32_4: 0,
        u32_12: 0,
        section_16: {
            s: 0
        },
        u8_25: 0,
        section_28: ["8c@:"],
        u32_32: 0,
        section_36: ["[_GT"],
        u32_40: {
            a: null
        },
        section_44: ["EMvG"],
        u32_48: {
            a: null
        },
        section_52: ["wYQW"],
        section_56: ["nU45"],
    };

}
function info_bcc_wii_mysterious_4t6_16t0() {
    return {
        sec_id: "j7qF",
        model_0: "model_patch",
    };

}
function info_bcc_wii_mysterious_4t6_16t2() {
    return {
        sec_id: "pqe5",
        texture_0: "texture_patch",
    };

}
function info_bcc_wii_mysterious_4t6_28() {
    return {
        sec_id: "8c@:",
        f32_8: 0,
        f32_16: 0,
    };

}
function info_bcc_wii_mysterious_4t6_36() {
    return {
        sec_id: "[_GT",
    };

}
function info_bcc_wii_mysterious_4t6_44() {
    return {
        sec_id: "EMvG",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_mysterious_4t6_52() {
    return {
        sec_id: "wYQW",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_mysterious_4t6_56() {
    return {
        sec_id: "nU45",
        f32_4: 0,
        f32_16: 0,
    };

}
function info_bcc_wii_mysterious_4t9() {
    return {
        sec_id: "@V:6",
        u8_2: 0,
        section_8: ["h5tA"],
    };

}
function info_bcc_wii_mysterious_4t9_8() {
    return {
        sec_id: "h5tA",
        texture_0: "texture_patch",
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: ["0vr>"],
        u32_12: 0,
        f32_16: 0,
    };

}
function info_bcc_wii_mysterious_4t9_8_8() {
    return {
        sec_id: "0vr>",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
    };

}
function info_bcc_wii_strange() {
    return {
        sec_id: "[W[y",
        u32_0: {
            a: null
        },
        section_4: ["BQ[s"],
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        u32_12: 0,
        u32_16: 0,
        u32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bcc_wii_strange_4() {
    return {
        sec_id: "BQ[s",
        unordered_bcc_wii_unknown_0: 0,
    };

}
function info_bcc_wii_link() {
    return {
        sec_id: "@I0t",
        u32_4: 0,
        section_16: ["vK8Y"],
        unordered_bcc_wii_font_28: 0,
        unordered_bcc_wii_interface_32: 0,
        section_36: ["Pac-Kart"],
        u32_40: 0,
        section_44: ["Pac-Kart"],
        u32_52: 0,
        section_56: ["T__]"],
        u32_60: {
            a: null
        },
        section_64: ["PPZq"],
        section_68: ["Y0_a"],
        u32_72: u32(o + 72),
        //check this
    };

}
function info_bcc_wii_link_16() {
    return {
        sec_id: "vK8Y",
        u32_0: {
            a: null
        },
        section_4: ["3MWe"],
    };

}
function info_bcc_wii_link_16_4() {
    return {
        sec_id: "3MWe",
        unordered_bcc_wii_flag_0: 0,
    };

}
function info_bcc_wii_link_56() {
    return {
        sec_id: "T__]",
        u8_0: 0,
        section_12: ["f948"],
    };

}
function info_bcc_wii_link_56_12() {
    return {
        sec_id: "f948",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bcc_wii_link_64() {
    return {
        sec_id: "PPZq",
        section_0: ["wY_q"],
    };

}
function info_bcc_wii_link_64_0() {
    return {
        sec_id: "wY_q",
        u32_0: {
            a: null
        },
        section_4: ["g2Zp"],
    };

}
function info_bcc_wii_link_64_0_4() {
    return {
        sec_id: "g2Zp",
        section_8: ["dX@Y"],
        section_12: ["Pac-Kart"],
        u32_16: {
            a: null
        },
        section_20: ["M4e3"],
        u32_24: 0,
        section_28: ["9=EG"],
    };

}
function info_bcc_wii_link_64_0_4_8() {
    return {
        sec_id: "dX@Y",
        section_0: ["Pac-Kart"],
    };

}
function info_bcc_wii_link_64_0_4_20() {
    return {
        sec_id: "M4e3",
        u32_0: {
            a: null
        },
        section_4: ["FfRf"],
        u16_8: 0,
    };

}
function info_bcc_wii_link_64_0_4_20_4() {
    return {
        sec_id: "FfRf",
        u8_0: 0,
        section_4: ["X339"],
    };

}
function info_bcc_wii_link_64_0_4_20_4_4() {
    return {
        sec_id: "X339",
        section_0: ["Pac-Kart"],
        u32_4: 0,
    };

}
function info_bcc_wii_link_64_0_4_28() {
    return {
        sec_id: "9=EG",
        u16_8: 0,
    };

}
function info_bcc_wii_link_68() {
    return {
        sec_id: "Y0_a",
        u8_0: 0,
        u32_4: 0,
        section_8: ["7C>4"],
    };

}
function info_bcc_wii_link_68_8() {
    return {
        sec_id: "7C>4",
    };

}
function info_bcc_wii_font() {
    return {
        sec_id: "3vkt",
        texture_0: "texture_patch",
        unordered_bcc_wii_model_anim_2_type_c_4: 0,
        u8_8: 0,
        u16_9: 0,
        f32_12: 0,
        u32_16: 0,
        section_20: ["NxrC"],
        u32_24: {
            a: null
        },
        section_28: ["5YZr"],
    };

}
function info_bcc_wii_font_20() {
    return {
        sec_id: "NxrC",
        f32_0: 0,
    };

}
function info_bcc_wii_font_28() {
    return {
        sec_id: "5YZr",
        u8_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_flag() {
    return {
        sec_id: "P@4o",
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
        u8_27: 0,
        u8_30: 0,
        u8_31: 0,
        u8_40: 0,
        u8_42: 0,
    };

}
function info_bcc_wii_flag_20t0() {
    return {
        sec_id: "Jbcu",
        u32_12: 0,
    };

}
function info_bcc_wii_flag_20t2() {
    return {
        sec_id: "MV@T",
        u8_0: 0,
    };

}
function info_bcc_wii_flag_20t3() {
    return {
        sec_id: "P1]T",
        u8_1: 0,
        u8_2: 0,
        section_4: ["Pac-Kart"],
    };

}
function info_bcc_wii_flag_20t7() {
    return {
        sec_id: "DPD=",
        f32_20: 0,
    };

}
function info_bcc_wii_interface() {
    return {
        sec_id: "Zg[=",
        section_0: ["Pac-Kart"],
        u8_5: 0,
        u16_6: 0,
        u32_8: 0,
        u32_12: 0,
        u8_16: 0,
        u8_17: 0,
        u8_18: 0,
        u8_19: 0,
        unordered_bcc_wii_sound_controls_20: 0,
        unordered_bcc_wii_sound_controls_24: 0,
        unordered_bcc_wii_sound_controls_32: 0,
        f32_36: 0,
        u32_40: 0,
        u32_44: 0,
        u32_48: 0,
        section_52: ["3CmU"],
        u8_57: 0,
        f32_68: 0,
        u32_72: 0,
        section_76: ["qokw"],
        u32_80: {
            a: null
        },
        section_84: ["Y9tK"],
        u32_88: {
            a: null
        },
        section_92: ["=@<V"],
    };

}
function info_bcc_wii_interface_52() {
    return {
        sec_id: "3CmU",
        f32_0: 0,
        u8_5: 0,
    };

}
function info_bcc_wii_interface_76() {
    return {
        sec_id: "qokw",
        u32_0: {
            a: null
        },
        section_4: ["h66T"],
    };

}
function info_bcc_wii_interface_76_4() {
    return {
        sec_id: "h66T",
        section_0: ["Pac-Kart"],
        u8_4: 0,
        u8_5: 0,
        u8_6: 0,
        u8_7: 0,
        u32_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
        u32_20: 0,
        u32_24: 0,
        u32_28: 0,
        u8_32: 0,
        u8_33: 0,
    };

}
function info_bcc_wii_interface_76_4_12t1() {
    return {
        sec_id: "tgKG",
        u32_0: 0,
        section_4: ["Ab_O"],
    };

}
function info_bcc_wii_interface_76_4_12t1_4() {
    return {
        sec_id: "Ab_O",
        u8_12: 0,
        u8_13: 0,
        u32_16: 0,
        u32_20: 0,
    };

}
function info_bcc_wii_interface_76_4_12t5() {
    return {
        sec_id: "Go?E",
        u32_4: 0,
    };

}
function info_bcc_wii_interface_76_4_12t7() {
    return {
        sec_id: "x963",
        u8_0: 0,
        u8_1: 0,
    };

}
function info_bcc_wii_interface_76_4_12t8() {
    return {
        sec_id: "NBwm",
        u32_0: {
            a: null
        },
        section_4: ["O0SJ"],
    };

}
function info_bcc_wii_interface_76_4_12t8_4() {
    return {
        sec_id: "O0SJ",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_76_4_12t9() {
    return {
        sec_id: "@zqp",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: ["Pac-Kart"],
        section_8: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_76_4_12t10() {
    return {
        sec_id: "xsDn",
        unordered_bcc_wii_flag_0: 0,
    };

}
function info_bcc_wii_interface_84() {
    return {
        sec_id: "Y9tK",
        u32_0: 0,
        section_4: ["Nbiu"],
        u32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["Y0XC"],
        u32_20: {
            a: null
        },
        section_24: ["5gHG"],
    };

}
function info_bcc_wii_interface_84_4() {
    return {
        sec_id: "Nbiu",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_12: ["K6QX"],
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_84_4_12() {
    return {
        sec_id: "K6QX",
        u32_0: 0,
        section_4: ["EuLy"],
    };

}
function info_bcc_wii_interface_84_4_12_4() {
    return {
        sec_id: "EuLy",
    };

}
function info_bcc_wii_interface_84_16() {
    return {
        sec_id: "Y0XC",
        u8_0: 0,
        section_4: ["YPxK"],
    };

}
function info_bcc_wii_interface_84_16_4() {
    return {
        sec_id: "YPxK",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_12: {
            s: 0
        },
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_84_16_4_12t7() {
    return {
        sec_id: "tney",
        u32_0: 0,
        section_4: ["iENQ"],
    };

}
function info_bcc_wii_interface_84_16_4_12t7_4() {
    return {
        sec_id: "iENQ",
    };

}
function info_bcc_wii_interface_84_24() {
    return {
        sec_id: "5gHG",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        section_4: {
            s: 0
        },
        section_12: {
            s: 0
        },
        unordered_bcc_wii_sound_controls_24: 0,
    };

}
function info_bcc_wii_interface_84_24_4t11() {
    return {
        sec_id: "zIou",
        u32_0: {
            a: null
        },
        section_4: ["hIeS"],
    };

}
function info_bcc_wii_interface_84_24_4t11_4() {
    return {
        sec_id: "hIeS",
        section_0: ["Pac-Kart"],
        section_4: ["@gqv"],
        u16_8: 0,
        section_12: {
            s: 0
        },
        u32_16: 0,
    };

}
function info_bcc_wii_interface_84_24_4t11_4_4() {
    return {
        sec_id: "@gqv",
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t1() {
    return {
        sec_id: "PjuG",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        unordered_bcc_wii_flag_12: 0,
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t2() {
    return {
        sec_id: "wAaf",
        section_0: ["gWt7"],
        section_4: ["Ah5f"],
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t2_0() {
    return {
        sec_id: "gWt7",
        u32_0: 0,
        section_4: ["aR37"],
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t2_0_4() {
    return {
        sec_id: "aR37",
        u8_12: 0,
        u32_16: 0,
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t2_4() {
    return {
        sec_id: "Ah5f",
        u8_12: 0,
        u32_16: 0,
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t102() {
    return {
        sec_id: "AYKa",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        section_8: ["e1wv"],
    };

}
function info_bcc_wii_interface_84_24_4t11_4_12t102_8() {
    return {
        sec_id: "e1wv",
        u8_0: 0,
        section_4: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_84_24_12t6() {
    return {
        sec_id: "gl^8",
        section_0: ["HqxL"],
        section_4: ["[h0X"],
    };

}
function info_bcc_wii_interface_84_24_12t6_0() {
    return {
        sec_id: "HqxL",
    };

}
function info_bcc_wii_interface_84_24_12t6_4() {
    return {
        sec_id: "[h0X",
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u32_16: 0,
    };

}
function info_bcc_wii_interface_84_24_12t15() {
    return {
        sec_id: "^f0C",
        section_0: ["M@D="],
        section_4: ["Vg7t"],
    };

}
function info_bcc_wii_interface_84_24_12t15_0() {
    return {
        sec_id: "M@D=",
        u32_16: 0,
    };

}
function info_bcc_wii_interface_84_24_12t15_4() {
    return {
        sec_id: "Vg7t",
    };

}
function info_bcc_wii_interface_84_24_12t41() {
    return {
        sec_id: "YQn9",
        u8_0: 0,
        section_4: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_92() {
    return {
        sec_id: "=@<V",
        section_0: ["Pac-Kart"],
        u32_4: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u8_11: 0,
        section_12: ["S1S5"],
        section_16: ["Pac-Kart"],
        u32_20: 0,
        u8_24: 0,
        u8_25: 0,
        u8_26: 0,
        u8_27: 0,
        section_28: ["Pac-Kart"],
        section_32: ["K?FO"],
        section_36: {
            s: 0
        },
        section_40: ["jTMt"],
        f32_44: 0,
        f32_48: 0,
        section_52: ["4PaN"],
        u32_56: 0,
        u32_64: {
            a: null
        },
        section_68: ["eCBi"],
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
function info_bcc_wii_interface_92_12() {
    return {
        sec_id: "S1S5",
    };

}
function info_bcc_wii_interface_92_32() {
    return {
        sec_id: "K?FO",
        u8_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["E4[N"],
    };

}
function info_bcc_wii_interface_92_32_8() {
    return {
        sec_id: "E4[N",
        section_4: ["RAZm"],
    };

}
function info_bcc_wii_interface_92_32_8_4() {
    return {
        sec_id: "RAZm",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u32_4: 0,
        section_8: ["Pac-Kart"],
        section_12: ["5Shy"],
        u32_16: 0,
        section_20: ["Pac-Kart"],
    };

}
function info_bcc_wii_interface_92_32_8_4_12() {
    return {
        sec_id: "5Shy",
        u32_0: 0,
        section_4: ["idO="],
    };

}
function info_bcc_wii_interface_92_32_8_4_12_4() {
    return {
        sec_id: "idO=",
        u8_12: 0,
        u32_16: 0,
    };

}
function info_bcc_wii_interface_92_36t0() {
    return {
        sec_id: "o@Wq",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        section_4: {
            s: 0
        },
        section_8: ["4A0R"],
        u8_12: 0,
        u8_13: 0,
    };

}
function info_bcc_wii_interface_92_36t0_8() {
    return {
        sec_id: "4A0R",
        u32_0: {
            a: null
        },
        section_4: ["9CnE"],
        u8_8: 0,
        u8_9: 0,
        u8_11: 0,
        u8_16: 0,
        u8_18: 0,
        u8_19: 0,
        u32_20: 0,
    };

}
function info_bcc_wii_interface_92_36t0_8_4() {
    return {
        sec_id: "9CnE",
        texture_0: "texture_patch",
    };

}
function info_bcc_wii_interface_92_36t1() {
    return {
        sec_id: "obHn",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        unordered_bcc_wii_text_4: 0,
        section_8: {
            s: 0
        },
        section_12: {
            s: 0
        },
        section_16: ["m?S^"],
        u8_20: 0,
        u8_21: 0,
        u16_22: 0,
        u16_24: 0,
        u8_26: 0,
        u8_27: 0,
        f32_28: 0,
    };

}
function info_bcc_wii_interface_92_36t1_8t1() {
    return {
        sec_id: "0Td9",
        u32_0: {
            a: null
        },
        section_4: ["GinK"],
        u8_8: 0,
        u16_10: 0,
    };

}
function info_bcc_wii_interface_92_36t1_8t1_4() {
    return {
        sec_id: "GinK",
        unordered_bcc_wii_text_0: 0,
    };

}
function info_bcc_wii_interface_92_36t1_8t3() {
    return {
        sec_id: "k803",
        u8_0: 0,
    };

}
function info_bcc_wii_interface_92_36t1_16() {
    return {
        sec_id: "m?S^",
    };

}
function info_bcc_wii_interface_92_36t3() {
    return {
        sec_id: "LdgG",
        u32_0: {
            a: null
        },
        section_4: ["Kgg3"],
        u8_8: 0,
        u8_9: 0,
    };

}
function info_bcc_wii_interface_92_36t3_4() {
    return {
        sec_id: "Kgg3",
        unordered_bcc_wii_model_link_0: 0,
    };

}
function info_bcc_wii_interface_92_36t6() {
    return {
        sec_id: "wb3F",
        unordered_bcc_wii_interface_0: 0,
        u8_4: 0,
        u8_5: 0,
        u32_8: {
            a: null
        },
        section_12: ["7x8U"],
    };

}
function info_bcc_wii_interface_92_36t6_12() {
    return {
        sec_id: "7x8U",
        u8_0: 0,
        u8_3: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_bcc_wii_interface_92_36t10() {
    return {
        sec_id: "7vha",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
    };

}
function info_bcc_wii_interface_92_36t12() {
    return {
        sec_id: "@QnV",
        u8_0: 0,
        u32_4: 0,
    };

}
function info_bcc_wii_interface_92_36t13() {
    return {
        sec_id: "@ZfX",
        u8_1: 0,
        section_4: ["gz;e"],
        u32_8: {
            a: null
        },
        section_12: ["_H_N"],
    };

}
function info_bcc_wii_interface_92_36t13_4() {
    return {
        sec_id: "gz;e",
        u32_0: 0,
        f32_4: 0,
        u32_8: 0,
    };

}
function info_bcc_wii_interface_92_36t13_12() {
    return {
        sec_id: "_H_N",
        texture_0: "texture_patch",
    };

}
function info_bcc_wii_interface_92_36t14() {
    return {
        sec_id: "RVUa",
        u8_0: 0,
        u8_1: 0,
        section_4: ["=t[F"],
    };

}
function info_bcc_wii_interface_92_36t14_4() {
    return {
        sec_id: "=t[F",
        u8_0: 0,
        u8_2: 0,
        u8_8: 0,
    };

}
function info_bcc_wii_interface_92_36t15() {
    return {
        sec_id: "ueYq",
        unordered_bcc_wii_emitter_0: 0,
    };

}
function info_bcc_wii_interface_92_40() {
    return {
        sec_id: "jTMt",
        u8_0: 0,
        u8_2: 0,
        u8_12: 0,
        u8_14: 0,
        u32_32: 0,
        u32_44: 0,
        section_48: ["^NKx"],
        u32_68: {
            a: null
        },
        section_72: ["JLx0"],
    };

}
function info_bcc_wii_interface_92_40_48() {
    return {
        sec_id: "^NKx",
        u32_0: 0,
        u8_6: 0,
        u32_8: 0,
        u8_12: 0,
        u8_13: 0,
        u8_14: 0,
        u8_15: 0,
        u32_16: 0,
        u32_20: 0,
    };

}
function info_bcc_wii_interface_92_40_72() {
    return {
        sec_id: "JLx0",
        u32_0: 0,
        u32_12: 0,
        section_16: ["f7DI"],
        u32_20: {
            a: null
        },
        section_24: ["4fSg"],
    };

}
function info_bcc_wii_interface_92_40_72_16() {
    return {
        sec_id: "f7DI",
        u8_0: 0,
        section_4: ["8]DV"],
    };

}
function info_bcc_wii_interface_92_40_72_16_4() {
    return {
        sec_id: "8]DV",
        u8_0: 0,
        u8_1: 0,
        u32_4: 0,
        u32_16: 0,
    };

}
function info_bcc_wii_interface_92_40_72_24() {
    return {
        sec_id: "4fSg",
        u8_0: 0,
        section_4: {
            s: 0
        },
        u32_20: 0,
        unordered_bcc_wii_sound_controls_24: 0,
    };

}
function info_bcc_wii_interface_92_40_72_24_4t11() {
    return {
        sec_id: ";JzX",
        u32_0: {
            a: null
        },
        section_4: ["Evcn"],
    };

}
function info_bcc_wii_interface_92_40_72_24_4t11_4() {
    return {
        sec_id: "Evcn",
        section_0: ["Pac-Kart"],
        u16_8: 0,
        section_12: {
            s: 0
        },
    };

}
function info_bcc_wii_interface_92_40_72_24_4t11_4_12t1() {
    return {
        sec_id: "lGYE",
        u8_0: 0,
        u8_1: 0,
        u8_4: 0,
        section_8: ["Pac-Kart"],
        u32_16: 0,
    };

}
function info_bcc_wii_interface_92_52() {
    return {
        sec_id: "4PaN",
        u32_0: 0,
        section_4: ["_[wd"],
        u32_8: 0,
        section_12: ["S0_F"],
        u32_16: {
            a: null
        },
        section_20: ["xUNy"],
        u32_24: {
            a: null
        },
        section_28: ["^QM0"],
        u32_32: {
            a: null
        },
        section_36: ["FOq0"],
    };

}
function info_bcc_wii_interface_92_52_4() {
    return {
        sec_id: "_[wd",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_52_12() {
    return {
        sec_id: "S0_F",
        f32_0: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_52_20() {
    return {
        sec_id: "xUNy",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_52_28() {
    return {
        sec_id: "^QM0",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_interface_92_52_36() {
    return {
        sec_id: "FOq0",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_68() {
    return {
        sec_id: "eCBi",
        u8_0: 0,
        section_4: ["4;GK"],
        u32_8: 0,
    };

}
function info_bcc_wii_interface_92_68_4() {
    return {
        sec_id: "4;GK",
        u32_0: {
            a: null
        },
        section_4: ["f?<n"],
        u32_8: {
            a: null
        },
        section_12: ["5KeD"],
        u32_16: {
            a: null
        },
        section_20: [";bBT"],
        u32_24: {
            a: null
        },
        section_28: ["1dxp"],
        u32_32: {
            a: null
        },
        section_36: ["PYVC"],
        u32_40: {
            a: null
        },
        section_44: ["O1b1"],
    };

}
function info_bcc_wii_interface_92_68_4_4() {
    return {
        sec_id: "f?<n",
        u8_4: 0,
        f32_8: 0,
        u32_12: 0,
        section_16: ["DOp<"],
    };

}
function info_bcc_wii_interface_92_68_4_4_16() {
    return {
        sec_id: "DOp<",
        section_0: ["Pac-Kart"],
        u16_8: 0,
        section_12: {
            s: 0
        },
    };

}
function info_bcc_wii_interface_92_68_4_4_16_12t1() {
    return {
        sec_id: "hndJ",
        u8_0: 0,
        u8_1: 0,
        u8_3: 0,
        u32_4: 0,
        u32_16: 0,
    };

}
function info_bcc_wii_interface_92_68_4_12() {
    return {
        sec_id: "5KeD",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_68_4_20() {
    return {
        sec_id: ";bBT",
        f32_0: 0,
        f32_4: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_68_4_28() {
    return {
        sec_id: "1dxp",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        u8_17: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_interface_92_68_4_36() {
    return {
        sec_id: "PYVC",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        u8_5: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_interface_92_68_4_44() {
    return {
        sec_id: "O1b1",
        f32_8: 0,
        f32_12: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_sound_controls() {
    return {
        sec_id: "ZsN5",
        u32_0: 0,
        u8_8: 0,
        u8_9: 0,
        u8_10: 0,
        u32_12: {
            a: null
        },
        section_16: ["l4:C"],
    };

}
function info_bcc_wii_sound_controls_16() {
    return {
        sec_id: "l4:C",
        u32_0: {
            a: null
        },
        section_4: ["6yp["],
        u32_8: 0,
        f32_12: 0,
    };

}
function info_bcc_wii_sound_controls_16_4() {
    return {
        sec_id: "6yp[",
        unordered_bcc_wii_sound_section_0: 0,
    };

}
function info_bcc_wii_text() {
    return {
        sec_id: "_>Nj",
        section_0: ["Pac-Kart"],
    };

}
function info_bcc_wii_multi_font() {
    return {
        sec_id: "nrpk",
        u32_0: 0,
        section_4: {
            s: 0
        },
    };

}
function info_bcc_wii_multi_font_4t0() {
    return {
        sec_id: "VoJk",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bcc_wii_font_12: 0,
        f32_24: 0,
        unordered_bcc_wii_font_28: 0,
        unordered_bcc_wii_font_32: 0,
    };

}
function info_bcc_wii_multi_font_4t1() {
    return {
        sec_id: "siCP",
        u8_1: 0,
        u32_4: 0,
        u32_8: 0,
        unordered_bcc_wii_font_12: 0,
        unordered_bcc_wii_font_16: 0,
        unordered_bcc_wii_font_20: 0,
        f32_24: 0,
        f32_28: 0,
    };

}
function info_bcc_wii_emitter() {
    return {
        sec_id: "M<Mx",
        f32_0: 0,
        u32_8: 0,
        u32_12: 0,
        section_16: ["m=Hn"],
    };

}
function info_bcc_wii_emitter_16() {
    return {
        sec_id: "m=Hn",
        texture_0: "texture_patch",
        u8_4: 0,
        u32_8: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        u32_40: 0,
        u32_44: {
            a: null
        },
        section_48: ["Y]DN"],
        u32_52: {
            a: null
        },
        section_56: ["ufGi"],
    };

}
function info_bcc_wii_emitter_16_48() {
    return {
        sec_id: "Y]DN",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_emitter_16_56() {
    return {
        sec_id: "ufGi",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        u8_16: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_model_link() {
    return {
        sec_id: "1]_V",
        section_4: ["6z5R"],
        section_8: ["Pac-Kart"],
        section_12: ["k4f6"],
        unordered_bcc_wii_some_model_anim_16: 0,
        f32_20: 0,
        u8_25: 0,
        section_48: ["Z2ua"],
    };

}
function info_bcc_wii_model_link_4() {
    return {
        sec_id: "6z5R",
    };

}
function info_bcc_wii_model_link_12() {
    return {
        sec_id: "k4f6",
        unordered_bcc_wii_model_anim_2_type_b_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["DOXz"],
    };

}
function info_bcc_wii_model_link_12_8() {
    return {
        sec_id: "DOXz",
        model_0: "model_patch",
    };

}
function info_bcc_wii_model_link_48() {
    return {
        sec_id: "Z2ua",
        f32_0: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_32: 0,
    };

}
function info_bcc_wii_unknown() {
    return {
        sec_id: "Nn6;",
        u32_0: {
            a: null
        },
        section_4: ["I1Nn"],
    };

}
function info_bcc_wii_unknown_4() {
    return {
        sec_id: "I1Nn",
        u32_0: 0,
        section_4: {
            s: 0
        },
        section_8: {
            s: 0
        },
        u32_12: 0,
    };

}
function info_bcc_wii_unknown_4_8t1() {
    return {
        sec_id: "jR^q",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_24: 0,
        f32_28: 0,
        f32_32: 0,
        f32_36: 0,
        u8_40: 0,
        u8_41: 0,
        u8_42: 0,
        u8_43: 0,
        section_48: ["z2@k"],
        section_52: {
            s: 0
        },
    };

}
function info_bcc_wii_unknown_4_8t1_48() {
    return {
        sec_id: "z2@k",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_unknown_4_8t1_52t1() {
    return {
        sec_id: "ayfD",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_unknown_4_8t1_52t2() {
    return {
        sec_id: "gQ6e",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
        section_12: {
            s: 0
        },
    };

}
function info_bcc_wii_unknown_4_8t1_52t2_12t0() {
    return {
        sec_id: "N1dN",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_unknown_4_8t1_52t2_12t2() {
    return {
        sec_id: "LwXz",
        f32_0: 0,
        f32_4: 0,
        u8_8: 0,
    };

}
function info_bcc_wii_unknown_4_8t1_52t3() {
    return {
        sec_id: "u2SG",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bcc_wii_unknown_4_8t4() {
    return {
        sec_id: "AElH",
        u32_0: 0,
    };

}
function info_bcc_wii_unknown_4_8t5() {
    return {
        sec_id: "u19K",
    };

}
function info_bcc_wii_unknown_4_8t9() {
    return {
        sec_id: "rC:k",
    };

}
function info_bcc_wii_unknown_4_8t26() {
    return {
        sec_id: "^R6O",
    };

}
function info_bcc_wii_unknown_thing() {
    return {
        sec_id: "F9[K",
        u32_0: 0,
        u32_4: 0,
        f32_8: 0,
        u32_12: {
            a: null
        },
        section_16: ["eOBQ"],
        u8_20: 0,
        u8_21: 0,
        section_24: {
            s: 0
        },
        u32_28: 0,
        section_32: ["FZ6s"],
    };

}
function info_bcc_wii_unknown_thing_16() {
    return {
        sec_id: "eOBQ",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_unknown_thing_24t1() {
    return {
        sec_id: "WVN6",
        u32_0: {
            a: null
        },
        section_4: ["dfSO"],
        u8_8: 0,
        u8_9: 0,
        u8_11: 0,
        u32_12: 0,
        f32_16: 0,
        f32_20: 0,
        f32_24: 0,
        f32_28: 0,
        f32_40: 0,
        f32_44: 0,
        u32_48: {
            a: null
        },
        section_52: ["QoEf"],
        u32_56: {
            a: null
        },
        section_60: ["?pp_"],
        section_64: ["ns^c"],
        u32_68: {
            a: null
        },
        section_72: ["DW0_"],
    };

}
function info_bcc_wii_unknown_thing_24t1_4() {
    return {
        sec_id: "dfSO",
        texture_0: "texture_patch",
    };

}
function info_bcc_wii_unknown_thing_24t1_52() {
    return {
        sec_id: "QoEf",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_unknown_thing_24t1_60() {
    return {
        sec_id: "?pp_",
        f32_0: 0,
        u8_4: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_unknown_thing_24t1_64() {
    return {
        sec_id: "ns^c",
        f32_0: 0,
        f32_4: 0,
        f32_8: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
    };

}
function info_bcc_wii_unknown_thing_24t1_72() {
    return {
        sec_id: "DW0_",
        u32_0: {
            a: null
        },
        section_4: ["WT6x"],
    };

}
function info_bcc_wii_unknown_thing_24t1_72_4() {
    return {
        sec_id: "WT6x",
        f32_0: 0,
        f32_4: 0,
    };

}
function info_bcc_wii_unknown_thing_24t2() {
    return {
        sec_id: "tlrZ",
        u32_0: {
            a: null
        },
        section_4: ["oyTu"],
        f32_8: 0,
        u32_16: 0,
        section_20: ["26q:"],
        u32_24: 0,
    };

}
function info_bcc_wii_unknown_thing_24t2_4() {
    return {
        sec_id: "oyTu",
        u8_0: 0,
        u8_1: 0,
        u8_2: 0,
        u8_3: 0,
        f32_8: 0,
    };

}
function info_bcc_wii_unknown_thing_24t2_20() {
    return {
        sec_id: "26q:",
        f32_0: 0,
    };

}
function info_bcc_wii_unknown_thing_32() {
    return {
        sec_id: "FZ6s",
    };

}
function info_bcc_wii_sound_section() {
    return {
        sec_id: "xVV3",
        sound_0: "sound_patch",
        u32_4: 0,
        u8_9: 0,
        u8_10: 0,
        f32_12: 0,
        f32_16: 0,
        f32_20: 0,
        section_24: ["zLhM"],
    };

}
function info_bcc_wii_sound_section_24() {
    return {
        sec_id: "zLhM",
        f32_0: 0,
        u8_4: 0,
        u8_8: 0,
    };

}
function info_bcc_wii_unknown_idk_sec() {
    return {
        sec_id: "Lhja",
        u8_4: 0,
        u8_6: 0,
        u8_7: 0,
        section_8: ["m8fp"],
        u32_20: 0,
        section_24: ["=]z:"],
        u32_28: 0,
        section_32: ["Sxav"],
        u32_36: 0,
        section_40: ["m^6n"],
        u8_44: 0,
    };

}
function info_bcc_wii_unknown_idk_sec_8() {
    return {
        sec_id: "m8fp",
        u8_8: 0,
        section_12: ["PTxj"],
        u32_16: 0,
        section_20: ["=wt0"],
    };

}
function info_bcc_wii_unknown_idk_sec_8_12() {
    return {
        sec_id: "PTxj",
        u32_0: 0,
        u32_4: {
            a: null
        },
        section_8: ["change this"],
    };

}
function info_bcc_wii_unknown_idk_sec_8_20() {
    return {
        sec_id: "=wt0",
        u32_0: 0,
    };

}
function info_bcc_wii_unknown_idk_sec_24() {
    return {
        sec_id: "=]z:",
        u32_0: 0,
        section_4: ["iaii"],
    };

}
function info_bcc_wii_unknown_idk_sec_24_4() {
    return {
        sec_id: "iaii",
        f32_0: 0,
    };

}
function info_bcc_wii_unknown_idk_sec_32() {
    return {
        sec_id: "Sxav",
        u32_0: 0,
        section_4: ["i:j<"],
    };

}
function info_bcc_wii_unknown_idk_sec_32_4() {
    return {
        sec_id: "i:j<",
        section_0: ["H@Se"],
    };

}
function info_bcc_wii_unknown_idk_sec_32_4_0() {
    return {
        sec_id: "H@Se",
        u8_0: 0,
        section_4: ["k_N7"],
        u32_8: 0,
    };

}
function info_bcc_wii_unknown_idk_sec_32_4_0_4t1() {
    return {
        sec_id: "k_N7",
        u8_0: 0,
        u32_4: 0,
        u32_8: 0,
    };

}
function info_bcc_wii_unknown_idk_sec_32_4_0_4t2() {
    return {
        sec_id: "A=3c",
        u32_0: 0,
        u8_4: 0,
    };

}
function info_bcc_wii_unknown_idk_sec_40() {
    return {
        sec_id: "m^6n",
        f32_0: 0,
        f32_4: 0,
    };

}

/* end info list */
/////////////////////
/* start export list */
function ex_bcc_wii_x(o, x) {
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

        bcc_wii_world_12_array: [],
        bcc_wii_world_92_array: [],
        bcc_wii_world_108_array: [],
        bcc_wii_world_116_array: [],
        bcc_wii_world_4_array: [],
        bcc_wii_model_array: [],
        bcc_wii_datapack_text_link_array: [],
        bcc_wii_some_model_anim_array: [],
        bcc_wii_model_anim_2_type_b_array: [],
        bcc_wii_model_anim_2_type_c_array: [],
        bcc_wii_something_array: [],
        bcc_wii_var_array: [],
        bcc_wii_idk_array: [],
        bcc_wii_world_settings_array: [],
        bcc_wii_object_array: [],
        bcc_wii_a_single_section_array: [],
        bcc_wii_world_thing_array: [],
        bcc_wii_car_array: [],
        bcc_wii_mysterious_array: [],
        bcc_wii_strange_array: [],
        bcc_wii_link_array: [],
        bcc_wii_font_array: [],
        bcc_wii_flag_array: [],
        bcc_wii_interface_array: [],
        bcc_wii_sound_controls_array: [],
        bcc_wii_text_array: [],
        bcc_wii_multi_font_array: [],
        bcc_wii_emitter_array: [],
        bcc_wii_model_link_array: [],
        bcc_wii_unknown_array: [],
        bcc_wii_unknown_thing_array: [],
        bcc_wii_sound_section_array: [],
        bcc_wii_unknown_idk_sec_array: [],
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    ex_bcc_wii_file_header(o, x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

function ex_bcc_wii_file_header(o, x) {
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

        e = ex_bcc_wii_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_bcc_wii_directory(o, e, x, global) {
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    g.bcc_wii_world_12_array = []
    g.bcc_wii_world_92_array = []
    g.bcc_wii_world_108_array = []
    g.bcc_wii_world_116_array = []
    g.bcc_wii_world_4_array = []
    g.bcc_wii_model_array = []
    g.bcc_wii_datapack_text_link_array = []
    g.bcc_wii_some_model_anim_array = []
    g.bcc_wii_model_anim_2_type_b_array = []
    g.bcc_wii_model_anim_2_type_c_array = []
    g.bcc_wii_something_array = []
    g.bcc_wii_var_array = []
    g.bcc_wii_idk_array = []
    g.bcc_wii_world_settings_array = []
    g.bcc_wii_object_array = []
    g.bcc_wii_a_single_section_array = []
    g.bcc_wii_world_thing_array = []
    g.bcc_wii_car_array = []
    g.bcc_wii_mysterious_array = []
    g.bcc_wii_strange_array = []
    g.bcc_wii_link_array = []
    g.bcc_wii_font_array = []
    g.bcc_wii_flag_array = []
    g.bcc_wii_interface_array = []
    g.bcc_wii_sound_controls_array = []
    g.bcc_wii_text_array = []
    g.bcc_wii_multi_font_array = []
    g.bcc_wii_emitter_array = []
    g.bcc_wii_model_link_array = []
    g.bcc_wii_unknown_array = []
    g.bcc_wii_unknown_thing_array = []
    g.bcc_wii_sound_section_array = []
    g.bcc_wii_unknown_idk_sec_array = []
    let ce = e
    g.file_dir_type = return_directory_type(x.u32_4)

    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 20, e - global)

    e = ex_bcc_wii_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)

    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + index_patch_buffer.byteLength + ordered_buffer.byteLength + offset_patch_buffer.byteLength)

    g.debug && ex_debug(o, x.sec_id);
    return e
}

function ex_bcc_wii_ordered(o, x) {
    globalThis.ordered_buffer = new ArrayBuffer(268435455)

    buffer_array.push(ordered_buffer)
    dynamic_buffer = ordered_buffer

    let aftero = o
    let e = o
    o = 0
    g.m = o
    g.unordered_ref = x.unordered[0]
    g.ordered_ref = x

    ex_bcc_wii_unordered(x.unordered[0])

    switch (g.file_dir_type) {
    case "car":
    case "interface":
    case "link":
        e = ex_bcc_wii_basic(o, x.bcc_wii_file_specific_section[0])
        break
    case "world":
        e = ex_bcc_wii_world(o, x.bcc_wii_file_specific_section[0])
        break

    case "share":
        e = ex_bcc_wii_share(o, x.bcc_wii_file_specific_section[0])
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
function ex_bcc_wii_unordered(x) {
    generate_id_offset_array(g.bcc_wii_world_12_array = [], x.bcc_wii_world_12)
    generate_id_offset_array(g.bcc_wii_world_92_array = [], x.bcc_wii_world_92)
    generate_id_offset_array(g.bcc_wii_world_108_array = [], x.bcc_wii_world_108)
    generate_id_offset_array(g.bcc_wii_world_116_array = [], x.bcc_wii_world_116)
    generate_id_offset_array(g.bcc_wii_world_4_array = [], x.bcc_wii_world_4)
    generate_id_offset_array(g.bcc_wii_model_array = [], x.bcc_wii_model)
    generate_id_offset_array(g.bcc_wii_datapack_text_link_array = [], x.bcc_wii_datapack_text_link)
    generate_id_offset_array(g.bcc_wii_some_model_anim_array = [], x.bcc_wii_some_model_anim)
    generate_id_offset_array(g.bcc_wii_model_anim_2_type_b_array = [], x.bcc_wii_model_anim_2_type_b)
    generate_id_offset_array(g.bcc_wii_model_anim_2_type_c_array = [], x.bcc_wii_model_anim_2_type_c)
    generate_id_offset_array(g.bcc_wii_something_array = [], x.bcc_wii_something)
    generate_id_offset_array(g.bcc_wii_var_array = [], x.bcc_wii_var)
    generate_id_offset_array(g.bcc_wii_idk_array = [], x.bcc_wii_idk)
    generate_id_offset_array(g.bcc_wii_world_settings_array = [], x.bcc_wii_world_settings)
    generate_id_offset_array(g.bcc_wii_object_array = [], x.bcc_wii_object)
    generate_id_offset_array(g.bcc_wii_a_single_section_array = [], x.bcc_wii_a_single_section)
    generate_id_offset_array(g.bcc_wii_world_thing_array = [], x.bcc_wii_world_thing)
    generate_id_offset_array(g.bcc_wii_car_array = [], x.bcc_wii_car)
    generate_id_offset_array(g.bcc_wii_mysterious_array = [], x.bcc_wii_mysterious)
    generate_id_offset_array(g.bcc_wii_strange_array = [], x.bcc_wii_strange)
    generate_id_offset_array(g.bcc_wii_link_array = [], x.bcc_wii_link)
    generate_id_offset_array(g.bcc_wii_font_array = [], x.bcc_wii_font)
    generate_id_offset_array(g.bcc_wii_flag_array = [], x.bcc_wii_flag)
    generate_id_offset_array(g.bcc_wii_interface_array = [], x.bcc_wii_interface)
    generate_id_offset_array(g.bcc_wii_sound_controls_array = [], x.bcc_wii_sound_controls)
    generate_id_offset_array(g.bcc_wii_text_array = [], x.bcc_wii_text)
    generate_id_offset_array(g.bcc_wii_multi_font_array = [], x.bcc_wii_multi_font)
    generate_id_offset_array(g.bcc_wii_emitter_array = [], x.bcc_wii_emitter)
    generate_id_offset_array(g.bcc_wii_model_link_array = [], x.bcc_wii_model_link)
    generate_id_offset_array(g.bcc_wii_unknown_array = [], x.bcc_wii_unknown)
    generate_id_offset_array(g.bcc_wii_unknown_thing_array = [], x.bcc_wii_unknown_thing)
    generate_id_offset_array(g.bcc_wii_sound_section_array = [], x.bcc_wii_sound_section)
    generate_id_offset_array(g.bcc_wii_unknown_idk_sec_array = [], x.bcc_wii_unknown_idk_sec)

}
function ex_bcc_wii_ordered_list_layout(o) {

    if (g.ordered_ref.bcc_wii_ordered_list.length) {
        e = ex_ma(g.ordered_ref.bcc_wii_ordered_list, g.bcc_wii_ordered_list_array, ex_bcc_wii_ordered_list, e, g.m)
    }

    if (g.ordered_ref.bcc_wii_model.length) {
        e = ex_ma(g.ordered_ref.bcc_wii_model, g.bcc_wii_model_array, ex_bcc_wii_model, e, g.m)
    }

    if (g.ordered_ref.bcc_wii_datapack_text_link.length) {
        e = ex_ma(g.ordered_ref.bcc_wii_datapack_text_link, g.bcc_wii_datapack_text_link_array, ex_bcc_wii_datapack_text_link, e, g.m)
    }

    if (g.ordered_ref.bcc_wii_some_model_anim.length) {
        e = ex_ma(g.ordered_ref.bcc_wii_some_model_anim, g.bcc_wii_some_model_anim_array, ex_bcc_wii_some_model_anim, e, g.m)
    }

    if (g.ordered_ref.bcc_wii_model_anim_2_type_b.length) {
        e = ex_ma(g.ordered_ref.bcc_wii_model_anim_2_type_b, g.bcc_wii_model_anim_2_type_b_array, ex_bcc_wii_model_anim_2_type_b, e, g.m)
    }

    if (g.ordered_ref.bcc_wii_model_anim_2_type_c.length) {
        e = ex_ma(g.ordered_ref.bcc_wii_model_anim_2_type_c, g.bcc_wii_model_anim_2_type_c_array, ex_bcc_wii_model_anim_2_type_c, e, g.m)
    }

}

function ex_bcc_wii_share(o, x) {
    let e = o + 32
    //amount?   su32(o +12, x.u32_12)

    e = ex_string(o + 0, e, x.section_0)
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 4, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bcc_wii_share_16(temp_offset + (i * 4), e, x.section_16[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_share_16(o, e, x) {
    ex_patch(o + 0, g.sound_patch_array, x.sound_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world(o, x) {
    let e = o + 304
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +80, x.u32_80)
    //amount?   su32(o +88, x.u32_88)
    //amount?   su32(o +104, x.u32_104)
    //amount?   su32(o +112, x.u32_112)
    //amount?   su32(o +180, x.u32_180)
    //amount?   su32(o +204, x.u32_204)

    e = ex_bcc_wii_ordered_list_layout(e)

    e = ex_ml(x.unordered_bcc_wii_world_4_4, g.bcc_wii_world_4_array, ex_bcc_wii_world_4, g.unordered_ref.bcc_wii_world_4, o + 4, e, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 160, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bcc_wii_world_12(temp_offset + (i * 160), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_bcc_wii_world_28_28, g.bcc_wii_world_28_array, ex_bcc_wii_world_28, g.unordered_ref.bcc_wii_world_28, o + 28, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_60_60, g.bcc_wii_world_60_array, ex_bcc_wii_world_60, g.unordered_ref.bcc_wii_world_60, o + 60, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_84_84, g.bcc_wii_world_84_array, ex_bcc_wii_world_84, g.unordered_ref.bcc_wii_world_84, o + 84, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_92_92, g.bcc_wii_world_92_array, ex_bcc_wii_world_92, g.unordered_ref.bcc_wii_world_92, o + 92, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_108_108, g.bcc_wii_world_108_array, ex_bcc_wii_world_108, g.unordered_ref.bcc_wii_world_108, o + 108, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_116_116, g.bcc_wii_world_116_array, ex_bcc_wii_world_116, g.unordered_ref.bcc_wii_world_116, o + 116, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_120_120, g.bcc_wii_world_120_array, ex_bcc_wii_world_120, g.unordered_ref.bcc_wii_world_120, o + 120, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_settings_172, g.bcc_wii_world_settings_array, ex_bcc_wii_world_settings, g.unordered_ref.bcc_wii_world_settings, o + 172, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_176_176, g.bcc_wii_world_176_array, ex_bcc_wii_world_176, g.unordered_ref.bcc_wii_world_176, o + 176, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_184_184, g.bcc_wii_world_184_array, ex_bcc_wii_world_184, g.unordered_ref.bcc_wii_world_184, o + 184, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_208_208, g.bcc_wii_world_208_array, ex_bcc_wii_world_208, g.unordered_ref.bcc_wii_world_208, o + 208, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_12(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    su32(o + 80, x.u32_80)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    su8(o + 126, x.u8_126)
    su8(o + 127, x.u8_127)
    su8(o + 130, x.u8_130)
    su32(o + 140, x.u32_140)
    su32(o + 148, x.u32_148)

    e = ex_ml(x.unordered_bcc_wii_car_76, g.bcc_wii_car_array, ex_bcc_wii_car, g.unordered_ref.bcc_wii_car, o + 76, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_92(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    sf32(o + 84, x.f32_84)

    e = ex_ml(x.unordered_bcc_wii_idk_80, g.bcc_wii_idk_array, ex_bcc_wii_idk, g.unordered_ref.bcc_wii_idk, o + 80, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_184(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    sf32(o + 60, x.f32_60)
    sf32(o + 76, x.f32_76)
    su8(o + 80, x.u8_80)
    sf32(o + 92, x.f32_92)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_108(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su32(o + 64, x.u32_64)
    su32(o + 68, x.u32_68)
    sf32(o + 76, x.f32_76)
    su8(o + 84, x.u8_84)
    su8(o + 85, x.u8_85)
    su8(o + 88, x.u8_88)
    su8(o + 89, x.u8_89)
    su8(o + 91, x.u8_91)

    e = ex_s_offset(o + 72, e, ex_bcc_wii_object, x.section_72, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_116(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    sf32(o + 48, x.f32_48)
    sf32(o + 68, x.f32_68)
    sf32(o + 88, x.f32_88)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)
    ex_patch(o + 116, g.model_array, x.model_116)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_28(o, x) {
    let e = o + 128
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    //amount?   su32(o +48, x.u32_48)
    su32(o + 92, x.u32_92)

    e = ex_s_offset(o + 80, e, ex_bcc_wii_world_28_80, x.section_80, 'down');
    e = ex_s_offset(o + 84, e, ex_bcc_wii_world_28_84, x.section_84, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_28_84(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    //amount?   su32(o +20, x.u32_20)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bcc_wii_world_28_84_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 4, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bcc_wii_world_28_84_24(temp_offset + (i * 4), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_28_84_8(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_world_92_0, g.bcc_wii_world_92_array, ex_bcc_wii_world_92, g.unordered_ref.bcc_wii_world_92, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_28_84_24(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_world_108_0, g.bcc_wii_world_108_array, ex_bcc_wii_world_108, g.unordered_ref.bcc_wii_world_108, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_28_80(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_bcc_wii_world_28_80_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_28_80_0(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_world_116_0, g.bcc_wii_world_116_array, ex_bcc_wii_world_116, g.unordered_ref.bcc_wii_world_116, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_84(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su32(o + 76, x.u32_76)

    e = ex_ml(x.unordered_bcc_wii_world_12_80, g.bcc_wii_world_12_array, ex_bcc_wii_world_12, g.unordered_ref.bcc_wii_world_12, o + 80, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_60(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    su32(o + 40, x.u32_40)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_4(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)

    e = ex_s_offset(o + 16, e, ex_bcc_wii_world_4_16, x.section_16, 'down');
    switch (x.u32_24) {
    case 0:
        e = ex_ml(x.section_20, g.bcc_wii_world_4_array, ex_bcc_wii_world_4, g.unordered_ref.bcc_wii_world_4, o + 20, e, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 20, e, ex_bcc_wii_world_4_20t1, x.section_20, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_4_20t1(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_4_16(o, x) {
    let e = o + 96

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_120(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    //amount?   su32(o +16, x.u32_16)

    if (x.section_0.length) {
        su32(o + 4, x.section_0.length)
        su32(o + 0, e - g.m)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_0.length * 144, 16)
        for (let i = 0; i < x.section_0.length; i++) {
            e = ex_bcc_wii_world_120_0(temp_offset + (i * 144), e, x.section_0[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 16, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 8, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bcc_wii_world_120_12(temp_offset + (i * 8), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_120_0(o, e, x) {
    su32(o + 0, x.u32_0)
    su16(o + 4, x.u16_4)
    su16(o + 12, x.u16_12)
    su16(o + 20, x.u16_20)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su32(o + 64, x.u32_64)
    su32(o + 76, x.u32_76)
    sf32(o + 84, x.f32_84)
    su16(o + 88, x.u16_88)
    su8(o + 92, x.u8_92)
    su32(o + 132, x.u32_132)

    e = ex_s_offset(o + 68, e, ex_bcc_wii_world_120_0_68, x.section_68, 'down');
    e = ex_s_offset(o + 72, e, ex_bcc_wii_world_120_0_72, x.section_72, 'down');
    e = ex_s_offset(o + 80, e, ex_bcc_wii_world_120_0_80, x.section_80, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_120_0_80(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_120_0_68(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_120_0_72(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_120_12(o, e, x) {
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_208(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_world_thing_0, g.bcc_wii_world_thing_array, ex_bcc_wii_world_thing, g.unordered_ref.bcc_wii_world_thing, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_176(o, x) {
    let e = o + 112
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_world_176_4, x.section_4, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bcc_wii_world_176_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 20, e, ex_bcc_wii_world_176_20, x.section_20, 'down');
    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 4, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_bcc_wii_world_176_28(temp_offset + (i * 4), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_176_4(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_bcc_wii_flag_0, g.bcc_wii_flag_array, ex_bcc_wii_flag, g.unordered_ref.bcc_wii_flag, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_176_12(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_var_0, g.bcc_wii_var_array, ex_bcc_wii_var, g.unordered_ref.bcc_wii_var, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_176_20(o, x) {
    let e = o + 4

    e = ex_ml(x.unordered_bcc_wii_something_0, g.bcc_wii_something_array, ex_bcc_wii_something, g.unordered_ref.bcc_wii_something, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_176_28(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_flag_0, g.bcc_wii_flag_array, ex_bcc_wii_flag, g.unordered_ref.bcc_wii_flag, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_basic(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_basic_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_basic_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_bcc_wii_ordered_list_layout(e)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_directory, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model(o, x) {
    let e = o + 80
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 16, x.u32_16)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    su8(o + 60, x.u8_60)
    su8(o + 61, x.u8_61)
    su8(o + 62, x.u8_62)
    su8(o + 63, x.u8_63)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    su8(o + 76, x.u8_76)
    su8(o + 77, x.u8_77)
    su8(o + 78, x.u8_78)
    su8(o + 79, x.u8_79)

    e = ex_string(o + 4, e, x.section_4)
    e = ex_s_offset(o + 20, e, ex_bcc_wii_model_20, x.section_20, 'down');
    e = ex_s_offset(o + 24, e, ex_bcc_wii_model_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_model_20_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_bcc_wii_model, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc(o, x) {
    let e = o + 304
    su32(o + 0, x.u32_0)
    sf32(o + 8, x.f32_8)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su32(o + 16, x.u32_16)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    ex_patch(o + 48, g.texture_patch_array, x.texture_48)
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 70, x.u8_70)
    su8(o + 71, x.u8_71)
    su8(o + 73, x.u8_73)
    su8(o + 74, x.u8_74)
    su8(o + 75, x.u8_75)
    sf32(o + 96, x.f32_96)
    sf32(o + 116, x.f32_116)
    sf32(o + 136, x.f32_136)
    sf32(o + 156, x.f32_156)
    su8(o + 160, x.u8_160)
    su8(o + 161, x.u8_161)
    su8(o + 162, x.u8_162)
    su8(o + 163, x.u8_163)
    su32(o + 176, x.u32_176)
    su32(o + 180, x.u32_180)
    su32(o + 184, x.u32_184)
    su32(o + 216, x.u32_216)
    su32(o + 224, x.u32_224)

    e = ex_s_offset(o + 188, e, ex_bcc_wii_model_20_4_0tpc_188, x.section_188, 'down');
    e = ex_s_offset(o + 192, e, ex_bcc_wii_model_20_4_0tpc_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_bcc_wii_model_20_4_0tpc_196, x.section_196, 'down');
    e = ex_s_offset(o + 200, e, ex_bcc_wii_model_20_4_0tpc_200, x.section_200, 'down');
    e = ex_s_offset(o + 204, e, ex_bcc_wii_model_20_4_0tpc_204, x.section_204, 'down');
    e = ex_s_offset(o + 220, e, ex_bcc_wii_model_20_4_0tpc_220, x.section_220, 'down');
    e = ex_s_offset(o + 228, e, ex_bcc_wii_model_20_4_0tpc_228, x.section_228, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_188(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_192(o, x) {
    let e = o + 0
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_196(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_200(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_204(o, x) {
    let e = o + 0
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_220(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 12, e, ex_bcc_wii_model_20_4_0tpc_220_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_220_12(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0tpc_228(o, x) {
    let e = o + 64
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
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

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twii(o, x) {
    let e = o + 4

    e = ex_s_offset(o + 0, e, ex_bcc_wii_model_20_4_0twiit0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0(o, x) {
    let e = o + 224
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    ex_patch(o + 48, g.texture_patch_array, x.texture_48)
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 70, x.u8_70)
    su8(o + 71, x.u8_71)
    su32(o + 72, x.u32_72)
    sf32(o + 96, x.f32_96)
    sf32(o + 116, x.f32_116)
    sf32(o + 136, x.f32_136)
    su32(o + 156, x.u32_156)
    su8(o + 160, x.u8_160)
    su8(o + 161, x.u8_161)
    su8(o + 162, x.u8_162)
    su8(o + 163, x.u8_163)
    su32(o + 176, x.u32_176)
    su32(o + 212, x.u32_212)
    su32(o + 216, x.u32_216)
    //amount?   su8(o +220, x.u8_220)
    su8(o + 221, x.u8_221)

    e = ex_s_offset(o + 180, e, ex_bcc_wii_model_20_4_0twiit0_180, x.section_180, 'down');
    e = ex_s_offset(o + 188, e, ex_bcc_wii_model_20_4_0twiit0_188, x.section_188, 'down');
    e = ex_s_offset(o + 192, e, ex_bcc_wii_model_20_4_0twiit0_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_bcc_wii_model_20_4_0twiit0_196, x.section_196, 'down');
    e = ex_s_offset(o + 200, e, ex_bcc_wii_model_20_4_0twiit0_200, x.section_200, 'down');
    if (x.section_208.length) {
        su32(o + 220, x.section_208.length)
        su32(o + 208, e - g.m)
        g.oa.push(o + 208)
        let temp_offset = e
        e += divisible(x.section_208.length * 64, 16)
        for (let i = 0; i < x.section_208.length; i++) {
            e = ex_bcc_wii_model_20_4_0twiit0_208(temp_offset + (i * 64), e, x.section_208[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_180(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_188(o, x) {
    let e = o + 0
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_192(o, x) {
    let e = o + 0
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_196(o, x) {
    let e = o + 0
    su16(o + 0, x.u16_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_200(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_model_20_4_0twiit0_200_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_200_8(o, x) {
    let e = o + 0
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit0_208(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 20, x.f32_20)
    sf32(o + 40, x.f32_40)
    sf32(o + 60, x.f32_60)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1(o, x) {
    let e = o + 224
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    ex_patch(o + 48, g.texture_patch_array, x.texture_48)
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 70, x.u8_70)
    su8(o + 71, x.u8_71)
    su32(o + 72, x.u32_72)
    sf32(o + 96, x.f32_96)
    sf32(o + 116, x.f32_116)
    sf32(o + 136, x.f32_136)
    su32(o + 156, x.u32_156)
    su8(o + 160, x.u8_160)
    su8(o + 161, x.u8_161)
    su8(o + 162, x.u8_162)
    su8(o + 163, x.u8_163)
    su32(o + 176, x.u32_176)
    su32(o + 212, x.u32_212)
    su32(o + 216, x.u32_216)
    su8(o + 220, x.u8_220)
    su8(o + 221, x.u8_221)

    e = ex_s_offset(o + 180, e, ex_bcc_wii_model_20_4_0twiit1_180, x.section_180, 'down');
    e = ex_s_offset(o + 184, e, ex_bcc_wii_model_20_4_0twiit1_184, x.section_184, 'down');
    e = ex_s_offset(o + 192, e, ex_bcc_wii_model_20_4_0twiit1_192, x.section_192, 'down');
    e = ex_s_offset(o + 196, e, ex_bcc_wii_model_20_4_0twiit1_196, x.section_196, 'down');
    e = ex_s_offset(o + 200, e, ex_bcc_wii_model_20_4_0twiit1_200, x.section_200, 'down');
    e = ex_s_offset(o + 208, e, ex_bcc_wii_model_20_4_0twiit1_208, x.section_208, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_180(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_184(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_192(o, x) {
    let e = o + 0
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_196(o, x) {
    let e = o + 0
    su16(o + 0, x.u16_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_200(o, x) {
    let e = o + 16
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 1, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bcc_wii_model_20_4_0twiit1_200_8(temp_offset + (i * 1), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_200_8(o, e, x) {
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit1_208(o, x) {
    let e = o + 0
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit2(o, x) {
    let e = o + 224
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 70, x.u8_70)
    su8(o + 71, x.u8_71)
    su32(o + 72, x.u32_72)
    sf32(o + 96, x.f32_96)
    sf32(o + 116, x.f32_116)
    sf32(o + 136, x.f32_136)
    su32(o + 156, x.u32_156)
    su8(o + 160, x.u8_160)
    su8(o + 161, x.u8_161)
    su8(o + 162, x.u8_162)
    su8(o + 163, x.u8_163)
    //amount?   su32(o +176, x.u32_176)
    //amount?   su32(o +184, x.u32_184)
    //amount?   su32(o +192, x.u32_192)
    //amount?   su32(o +200, x.u32_200)

    if (x.section_180.length) {
        su32(o + 176, x.section_180.length)
        su32(o + 180, e - g.m)
        g.oa.push(o + 180)
        let temp_offset = e
        e += divisible(x.section_180.length * 12, 16)
        for (let i = 0; i < x.section_180.length; i++) {
            e = ex_bcc_wii_model_20_4_0twiit2_180(temp_offset + (i * 12), e, x.section_180[i])
        }
        ;
    }
    ;if (x.section_188.length) {
        su32(o + 184, x.section_188.length)
        su32(o + 188, e - g.m)
        g.oa.push(o + 188)
        let temp_offset = e
        e += divisible(x.section_188.length * 12, 16)
        for (let i = 0; i < x.section_188.length; i++) {
            e = ex_bcc_wii_model_20_4_0twiit2_188(temp_offset + (i * 12), e, x.section_188[i])
        }
        ;
    }
    ;if (x.section_196.length) {
        su32(o + 192, x.section_196.length)
        su32(o + 196, e - g.m)
        g.oa.push(o + 196)
        let temp_offset = e
        e += divisible(x.section_196.length * 8, 16)
        for (let i = 0; i < x.section_196.length; i++) {
            e = ex_bcc_wii_model_20_4_0twiit2_196(temp_offset + (i * 8), e, x.section_196[i])
        }
        ;
    }
    ;if (x.section_204.length) {
        su32(o + 200, x.section_204.length)
        su32(o + 204, e - g.m)
        g.oa.push(o + 204)
        let temp_offset = e
        e += divisible(x.section_204.length * 8, 16)
        for (let i = 0; i < x.section_204.length; i++) {
            e = ex_bcc_wii_model_20_4_0twiit2_204(temp_offset + (i * 8), e, x.section_204[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit2_180(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit2_188(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit2_196(o, e, x) {
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    su8(o + 5, x.u8_5)
    su8(o + 7, x.u8_7)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_20_4_0twiit2_204(o, e, x) {
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    su8(o + 5, x.u8_5)
    su8(o + 7, x.u8_7)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_24(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_datapack_text_link(o, e, x) {

    e = ex_s_offset(o + 4, e, ex_bcc_wii_text, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_some_model_anim(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    //amount?   su32(o +12, x.u32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 28, x.f32_28)

    if (x.section_32.length) {
        su32(o + 12, x.section_32.length)
        su32(o + 32, e - g.m)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 4, 16)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_bcc_wii_some_model_anim_32(temp_offset + (i * 4), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 36, e, ex_bcc_wii_some_model_anim_36, x.section_36, 'down');
    e = ex_string(o + 40, e, x.section_40)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_some_model_anim_32(o, e, x) {

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_some_model_anim_36(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    sf32(o + 8, x.f32_8)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_some_model_anim_36, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)

    e = ex_string(o + 8, e, x.section_8)
    e = ex_s_offset(o + 16, e, ex_bcc_wii_model_anim_2_type_b_16, x.section_16, 'down');
    e = ex_s_offset(o + 20, e, ex_bcc_wii_model_anim_2_type_b_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b_16(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b_20(o, x) {
    let e = o + 48
    su8(o + 4, x.u8_4)
    sf32(o + 20, x.f32_20)
    //amount?   su32(o +36, x.u32_36)

    e = ex_string(o + 0, e, x.section_0)
    if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e - g.m)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 4, 16)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_bcc_wii_model_anim_2_type_b_20_40(temp_offset + (i * 4), e, x.section_40[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b_20_40(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_bcc_wii_model_anim_2_type_b_20_40_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b_20_40_0(o, x) {
    let e = o + 48
    su8(o + 4, x.u8_4)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    su32(o + 36, x.u32_36)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 40, e, ex_bcc_wii_model_anim_2_type_b_20_40_0_40, x.section_40, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b_20_40_0_40(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_bcc_wii_model_anim_2_type_b_20_40_0_40_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_b_20_40_0_40_0(o, x) {
    let e = o + 48
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)
    su32(o + 12, x.u32_12)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_c(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    //amount?   su32(o +20, x.u32_20)
    //amount?   su32(o +28, x.u32_28)

    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 2, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bcc_wii_model_anim_2_type_c_24(temp_offset + (i * 2), e, x.section_24[i])
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
            e = ex_bcc_wii_model_anim_2_type_c_32(temp_offset + (i * 24), e, x.section_32[i])
        }
        ;
    }
    ;e = ex_string(o + 36, e, x.section_36)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_c_24(o, e, x) {
    su16(o + 0, x.u16_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_anim_2_type_c_32(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_something(o, x) {
    let e = o + 64
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su32(o + 28, x.u32_28)
    su32(o + 32, x.u32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var(o, x) {
    let e = o + 176
    su32(o + 152, x.u32_152)
    //amount?   su32(o +164, x.u32_164)

    e = ex_string(o + 148, e, x.section_148)
    e = ex_s_offset(o + 156, e, ex_bcc_wii_var_156, x.section_156, 'down');
    if (x.section_168.length) {
        su32(o + 164, x.section_168.length)
        su32(o + 168, e - g.m)
        g.oa.push(o + 168)
        let temp_offset = e
        e += divisible(x.section_168.length * 36, 16)
        for (let i = 0; i < x.section_168.length; i++) {
            e = ex_bcc_wii_var_168(temp_offset + (i * 36), e, x.section_168[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_156(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_bcc_wii_var_0, g.bcc_wii_var_array, ex_bcc_wii_var, g.unordered_ref.bcc_wii_var, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168(o, e, x) {
    su32(o + 12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_s_offset(o + 16, e, ex_bcc_wii_var_168_16, x.section_16, 'down');
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 24, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bcc_wii_var_168_24(temp_offset + (i * 24), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_16(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    switch (x.u32_4) {
    case 7:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_var_168_16_12t7, x.section_12, 'down');
        break;
    case 21:
        e = ex_ml(x.section_12, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 12, e, 'down');
        break;
    }
    e = ex_s_offset(o + 16, e, ex_bcc_wii_var_168_16_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_16_12t7(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_16_16(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24(o, e, x) {
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    switch (x.u32_8) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_var_168_24_12t1, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_var_168_24_12t5, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_var_168_24_12t15, x.section_12, 'down');
        break;
    case 17:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_var_168_24_12t17, x.section_12, 'down');
        break;
    case 18:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_var_168_24_12t18, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t1(o, x) {
    let e = o + 16
    su8(o + 4, x.u8_4)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_var_168_24_12t1_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t1_0(o, x) {
    let e = o + 32
    su8(o + 4, x.u8_4)
    su8(o + 6, x.u8_6)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_var_168_24_12t1_0_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t1_0_0(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t5(o, x) {
    let e = o + 16
    su8(o + 4, x.u8_4)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_var_168_24_12t5_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t5_0(o, x) {
    let e = o + 16
    su8(o + 5, x.u8_5)

    e = ex_ml(x.unordered_bcc_wii_interface_0, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 0, e, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_var_168_24_12t5_0_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t5_0_8(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t15(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_bcc_wii_var_0, g.bcc_wii_var_array, ex_bcc_wii_var, g.unordered_ref.bcc_wii_var, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t17(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t18(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    e = ex_ml(x.unordered_bcc_wii_something_4, g.bcc_wii_something_array, ex_bcc_wii_something, g.unordered_ref.bcc_wii_something, o + 4, e, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_var_168_24_12t18_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_var_168_24_12t18_8(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk(o, x) {
    let e = o + 96
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    ex_patch(o + 16, g.model_array, x.model_16)
    sf32(o + 24, x.f32_24)
    su8(o + 80, x.u8_80)
    su8(o + 81, x.u8_81)
    su8(o + 82, x.u8_82)
    su8(o + 83, x.u8_83)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 36, e, ex_bcc_wii_idk_36, x.section_36, 'down');
    e = ex_ml(x.unordered_bcc_wii_idk_44, g.bcc_wii_idk_array, ex_bcc_wii_idk, g.unordered_ref.bcc_wii_idk, o + 44, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36(o, x) {
    let e = o + 80
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
    su32(o + 64, x.u32_64)

    e = ex_ml(x.unordered_bcc_wii_world_thing_40, g.bcc_wii_world_thing_array, ex_bcc_wii_world_thing, g.unordered_ref.bcc_wii_world_thing, o + 40, e, 'down');
    e = ex_s_offset(o + 60, e, ex_bcc_wii_idk_36_60, x.section_60, 'down');
    e = ex_s_offset(o + 68, e, ex_bcc_wii_idk_36_68, x.section_68, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_idk_36_60_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_idk_36_60_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_4(o, x) {
    let e = o + 48

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_idk_36_60_8_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_idk_36_60_8_4_0, x.section_0, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_idk_36_60_8_4_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8_4_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_idk_36_60_8_4_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8_4_0_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8_4_8(o, x) {
    let e = o + 32
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_idk_36_60_8_4_8_8, x.section_8, 'down');
    e = ex_ml(x.unordered_bcc_wii_world_thing_12, g.bcc_wii_world_thing_array, ex_bcc_wii_world_thing, g.unordered_ref.bcc_wii_world_thing, o + 12, e, 'down');
    e = ex_s_offset(o + 20, e, ex_bcc_wii_idk_36_60_8_4_8_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8_4_8_8(o, x) {
    let e = o + 48

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_idk_36_60_8_4_8_20(o, x) {
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
function ex_bcc_wii_idk_36_68(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_bcc_wii_unknown_0, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings(o, x) {
    let e = o + 240
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su8(o + 37, x.u8_37)
    su8(o + 39, x.u8_39)
    //amount?   su32(o +56, x.u32_56)
    ex_patch(o + 68, g.texture_patch_array, x.texture_68)
    sf32(o + 72, x.f32_72)
    ex_patch(o + 88, g.texture_patch_array, x.texture_88)
    ex_patch(o + 92, g.texture_patch_array, x.texture_92)
    ex_patch(o + 96, g.texture_patch_array, x.texture_96)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    su16(o + 110, x.u16_110)
    sf32(o + 116, x.f32_116)
    sf32(o + 120, x.f32_120)
    su32(o + 128, x.u32_128)
    sf32(o + 160, x.f32_160)
    sf32(o + 164, x.f32_164)
    sf32(o + 168, x.f32_168)
    sf32(o + 172, x.f32_172)
    sf32(o + 176, x.f32_176)
    su8(o + 182, x.u8_182)
    ex_patch(o + 184, g.texture_patch_array, x.texture_184)
    sf32(o + 188, x.f32_188)
    sf32(o + 192, x.f32_192)
    sf32(o + 196, x.f32_196)
    sf32(o + 200, x.f32_200)
    sf32(o + 204, x.f32_204)
    sf32(o + 208, x.f32_208)
    sf32(o + 212, x.f32_212)
    sf32(o + 216, x.f32_216)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_world_settings_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bcc_wii_world_settings_4, x.section_4, 'down');
    if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e - g.m)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 64, 16)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_bcc_wii_world_settings_60(temp_offset + (i * 64), e, x.section_60[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 64, e, ex_bcc_wii_world_settings_64, x.section_64, 'down');
    e = ex_s_offset(o + 76, e, ex_bcc_wii_world_settings_76, x.section_76, 'down');
    e = ex_s_offset(o + 84, e, ex_bcc_wii_world_settings_84, x.section_84, 'down');
    e = ex_s_offset(o + 112, e, ex_bcc_wii_world_settings_112, x.section_112, 'down');
    e = ex_s_offset(o + 124, e, ex_bcc_wii_world_settings_124, x.section_124, 'down');
    e = ex_s_offset(o + 132, e, ex_bcc_wii_world_settings_132, x.section_132, 'down');
    e = ex_ml(x.unordered_bcc_wii_font_228, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 228, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_0(o, x) {
    let e = o + 48
    su32(o + 8, x.u32_8)
    ex_patch(o + 20, g.texture_patch_array, x.texture_20)
    //amount?   su32(o +36, x.u32_36)

    e = ex_ml(x.unordered_bcc_wii_interface_0, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 0, e, 'down');
    e = ex_string(o + 12, e, x.section_12)
    if (x.section_40.length) {
        su32(o + 36, x.section_40.length)
        su32(o + 40, e - g.m)
        g.oa.push(o + 40)
        let temp_offset = e
        e += divisible(x.section_40.length * 8, 16)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_bcc_wii_world_settings_0_40(temp_offset + (i * 8), e, x.section_40[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_0_40(o, e, x) {
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_world_settings_4_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_world_settings_4_4, x.section_8, 'down');
    e = ex_s_offset(o + 12, e, ex_bcc_wii_world_settings_4_4, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_bcc_wii_world_settings_4_4, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_4_4(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    //amount?   su32(o +8, x.u32_8)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 16, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_world_settings_4_4_4(temp_offset + (i * 16), e, x.section_4[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 16, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bcc_wii_world_settings_4_4_12(temp_offset + (i * 16), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_4_4_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_4_4_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_60(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 36, x.f32_36)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_64(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_76(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_84(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_112(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_124(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_settings_132(o, x) {
    let e = o + 16

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object(o, x) {
    let e = o + 128
    sf32(o + 12, x.f32_12)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su8(o + 62, x.u8_62)
    sf32(o + 76, x.f32_76)
    sf32(o + 84, x.f32_84)
    su8(o + 97, x.u8_97)
    su8(o + 99, x.u8_99)
    //amount?   su32(o +104, x.u32_104)
    su8(o + 116, x.u8_116)
    su8(o + 117, x.u8_117)
    su8(o + 118, x.u8_118)
    su8(o + 119, x.u8_119)

    switch (x.u8_19) {
    case 17:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_object_4t17, x.section_4, 'down');
        break;
    case 20:
        e = ex_ml(x.section_4, g.bcc_wii_a_single_section_array, ex_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section, o + 4, e, 'down');
        break;
    }
    e = ex_s_offset(o + 44, e, ex_bcc_wii_object_44, x.section_44, 'down');
    e = ex_ml(x.unordered_bcc_wii_unknown_88, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 88, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_text_100, g.bcc_wii_text_array, ex_bcc_wii_text, g.unordered_ref.bcc_wii_text, o + 100, e, 'down');
    if (x.section_108.length) {
        su32(o + 104, x.section_108.length)
        su32(o + 108, e - g.m)
        g.oa.push(o + 108)
        let temp_offset = e
        e += divisible(x.section_108.length * 64, 16)
        for (let i = 0; i < x.section_108.length; i++) {
            e = ex_bcc_wii_mysterious(temp_offset + (i * 64), e, x.section_108[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_4t17(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_object_44_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_object_44_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_4(o, x) {
    let e = o + 48

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_object_44_8_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_object_44_8_4_0, x.section_0, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_object_44_8_4_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8_4_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_object_44_8_4_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8_4_0_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8_4_8(o, x) {
    let e = o + 32
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_object_44_8_4_8_8, x.section_8, 'down');
    e = ex_s_offset(o + 20, e, ex_bcc_wii_object_44_8_4_8_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8_4_8_8(o, x) {
    let e = o + 48

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_object_44_8_4_8_20(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_a_single_section(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)
    su16(o + 12, x.u16_12)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_thing(o, x) {
    let e = o + 144
    su32(o + 0, x.u32_0)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    su32(o + 36, x.u32_36)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    //amount?   su32(o +72, x.u32_72)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)

    e = ex_s_offset(o + 20, e, ex_bcc_wii_world_thing_20, x.section_20, 'down');
    e = ex_ml(x.unordered_bcc_wii_unknown_40, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 40, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_unknown_48, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 48, e, 'down');
    if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e - g.m)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 4, 16)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_bcc_wii_world_thing_76(temp_offset + (i * 4), e, x.section_76[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_bcc_wii_sound_section_88, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 88, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_thing_20(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_world_thing_76(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_unknown_0, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car(o, x) {
    let e = o + 16
    su8(o + 4, x.u8_4)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_car_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0(o, x) {
    let e = o + 80
    //amount?   su32(o +44, x.u32_44)
    //amount?   su32(o +52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)
    su32(o + 68, x.u32_68)

    e = ex_ml(x.unordered_bcc_wii_model_anim_2_type_b_16, g.bcc_wii_model_anim_2_type_b_array, ex_bcc_wii_model_anim_2_type_b, g.unordered_ref.bcc_wii_model_anim_2_type_b, o + 16, e, 'down');
    e = ex_s_offset(o + 20, e, ex_bcc_wii_car_0_20, x.section_20, 'down');
    e = ex_s_offset(o + 24, e, ex_bcc_wii_car_0_24, x.section_24, 'down');
    e = ex_s_offset(o + 28, e, ex_bcc_wii_car_0_28, x.section_28, 'down');
    e = ex_s_offset(o + 32, e, ex_bcc_wii_car_0_32, x.section_32, 'down');
    e = ex_s_offset(o + 36, e, ex_bcc_wii_car_0_36, x.section_36, 'down');
    e = ex_s_offset(o + 40, e, ex_bcc_wii_car_0_40, x.section_40, 'down');
    if (x.section_48.length) {
        su32(o + 44, x.section_48.length)
        su32(o + 48, e - g.m)
        g.oa.push(o + 48)
        let temp_offset = e
        e += divisible(x.section_48.length * 8, 16)
        for (let i = 0; i < x.section_48.length; i++) {
            e = ex_bcc_wii_car_0_48(temp_offset + (i * 8), e, x.section_48[i])
        }
        ;
    }
    ;if (x.section_56.length) {
        su32(o + 52, x.section_56.length)
        su32(o + 56, e - g.m)
        g.oa.push(o + 56)
        let temp_offset = e
        e += divisible(x.section_56.length * 12, 16)
        for (let i = 0; i < x.section_56.length; i++) {
            e = ex_bcc_wii_car_0_56(temp_offset + (i * 12), e, x.section_56[i])
        }
        ;
    }
    ;if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 12, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_bcc_wii_car_0_64(temp_offset + (i * 12), e, x.section_64[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 72, e, ex_bcc_wii_car_0_72, x.section_72, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20(o, x) {
    let e = o + 48
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_car_0_20_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_20_4, x.section_4, 'down');
    e = ex_ml(x.unordered_bcc_wii_sound_section_8, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 8, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_sound_section_12, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 12, e, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 8, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bcc_wii_car_0_20_20(temp_offset + (i * 8), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 8, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_bcc_wii_car_0_20_20(temp_offset + (i * 8), e, x.section_28[i])
        }
        ;
    }
    ;if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e - g.m)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 8, 16)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_bcc_wii_car_0_20_20(temp_offset + (i * 8), e, x.section_36[i])
        }
        ;
    }
    ;if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 8, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_bcc_wii_car_0_20_20(temp_offset + (i * 8), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_0(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    ex_patch(o + 4, g.texture_patch_array, x.texture_4)
    //amount?   su32(o +12, x.u32_12)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_car_0_20_0_8, x.section_8, 'down');
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 20, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bcc_wii_car_0_20_0_16(temp_offset + (i * 20), e, x.section_16[i])
        }
        ;
    }
    ;e = ex_ml(x.unordered_bcc_wii_unknown_28, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 28, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_unknown_32, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 32, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_unknown_36, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 36, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_0_8(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_0_16(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    e = ex_ml(x.unordered_bcc_wii_a_single_section_8, g.bcc_wii_a_single_section_array, ex_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section, o + 8, e, 'down');
    e = ex_s_offset(o + 12, e, ex_bcc_wii_car_0_20_0_16_12, x.section_12, 'down');
    e = ex_s_offset(o + 16, e, ex_bcc_wii_car_0_20_0_16_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_0_16_12(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 64, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_mysterious(temp_offset + (i * 64), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_0_16_16(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 64, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_mysterious(temp_offset + (i * 64), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_4(o, x) {
    let e = o + 96
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 20, x.f32_20)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    su32(o + 60, x.u32_60)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)

    e = ex_ml(x.unordered_bcc_wii_a_single_section_64, g.bcc_wii_a_single_section_array, ex_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section, o + 64, e, 'down');
    e = ex_s_offset(o + 68, e, ex_bcc_wii_car_0_20_4_68, x.section_68, 'down');
    e = ex_s_offset(o + 80, e, ex_bcc_wii_car_0_20_4_80, x.section_80, 'down');
    e = ex_s_offset(o + 84, e, ex_bcc_wii_car_0_20_4_84, x.section_84, 'down');
    e = ex_s_offset(o + 88, e, ex_bcc_wii_car_0_20_4_88, x.section_88, 'down');
    e = ex_s_offset(o + 92, e, ex_bcc_wii_car_0_20_4_92, x.section_92, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_4_68(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_4_80(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    sf32(o + 8, x.f32_8)

    e = ex_ml(x.unordered_bcc_wii_unknown_16, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 16, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_4_84(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_4_88(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_4_92(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_20(o, e, x) {
    su8(o + 0, x.u8_0)

    switch (x.u8_0) {
    case 1:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_20_20_4t1, x.section_4, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_20_20_4t3, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_20_4t1(o, x) {
    let e = o + 80
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su8(o + 32, x.u8_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 64, x.f32_64)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_20_20_4t3(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_24_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24_4(o, x) {
    let e = o + 64
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_car_0_24_4_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_24_4_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_car_0_24_4_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24_4_0(o, x) {
    let e = o + 80
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    e = ex_s_offset(o + 40, e, ex_bcc_wii_car_0_24_4_0_40, x.section_40, 'down');
    e = ex_s_offset(o + 48, e, ex_bcc_wii_car_0_24_4_0_48, x.section_48, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24_4_0_40(o, x) {
    let e = o + 144
    su32(o + 0, x.u32_0)
    su8(o + 7, x.u8_7)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 44, x.f32_44)
    sf32(o + 52, x.f32_52)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    su32(o + 72, x.u32_72)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 100, x.f32_100)
    sf32(o + 104, x.f32_104)
    sf32(o + 108, x.f32_108)

    e = ex_s_offset(o + 76, e, ex_bcc_wii_car_0_24_4_0_40_76, x.section_76, 'down');
    e = ex_ml(x.unordered_bcc_wii_sound_section_88, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 88, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24_4_0_40_76(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24_4_0_48(o, x) {
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
function ex_bcc_wii_car_0_24_4_4(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_24_4_8(o, x) {
    let e = o + 92
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
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_28(o, x) {
    let e = o + 112
    su8(o + 20, x.u8_20)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    //amount?   su32(o +48, x.u32_48)
    //amount?   su32(o +56, x.u32_56)
    su32(o + 64, x.u32_64)
    su32(o + 72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)

    e = ex_ml(x.unordered_bcc_wii_model_anim_2_type_b_0, g.bcc_wii_model_anim_2_type_b_array, ex_bcc_wii_model_anim_2_type_b, g.unordered_ref.bcc_wii_model_anim_2_type_b, o + 0, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_model_link_4, g.bcc_wii_model_link_array, ex_bcc_wii_model_link, g.unordered_ref.bcc_wii_model_link, o + 4, e, 'down');
    if (x.section_52.length) {
        su32(o + 48, x.section_52.length)
        su32(o + 52, e - g.m)
        g.oa.push(o + 52)
        let temp_offset = e
        e += divisible(x.section_52.length * 24, 16)
        for (let i = 0; i < x.section_52.length; i++) {
            e = ex_bcc_wii_car_0_28_52(temp_offset + (i * 24), e, x.section_52[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e - g.m)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 8, 16)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_bcc_wii_car_0_28_60(temp_offset + (i * 8), e, x.section_60[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 68, e, ex_bcc_wii_car_0_28_68, x.section_68, 'down');
    e = ex_s_offset(o + 76, e, ex_bcc_wii_car_0_28_76, x.section_76, 'down');
    if (x.section_84.length) {
        su32(o + 80, x.section_84.length)
        su32(o + 84, e - g.m)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 32, 16)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_bcc_wii_car_0_28_84(temp_offset + (i * 32), e, x.section_84[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_28_52(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    su8(o + 20, x.u8_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_28_60(o, e, x) {
    su16(o + 0, x.u16_0)
    su16(o + 2, x.u16_2)
    su16(o + 4, x.u16_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_28_68(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_28_76(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_28_84(o, e, x) {
    su32(o + 0, x.u32_0)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    //amount?   su32(o +20, x.u32_20)
    su8(o + 28, x.u8_28)

    e = ex_ml(x.unordered_bcc_wii_a_single_section_16, g.bcc_wii_a_single_section_array, ex_bcc_wii_a_single_section, g.unordered_ref.bcc_wii_a_single_section, o + 16, e, 'down');
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 12, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bcc_wii_car_0_32_24(temp_offset + (i * 12), e, x.section_24[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 32, e, ex_bcc_wii_car_0_32_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_24(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_32_32_4, x.section_4, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_car_0_32_32_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_4(o, x) {
    let e = o + 48
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_car_0_32_32_8_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4(o, e, x) {
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 0, e, ex_bcc_wii_car_0_32_32_8_4_0, x.section_0, 'down');
    e = ex_s_offset(o + 8, e, ex_bcc_wii_car_0_32_32_8_4_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_car_0_32_32_8_4_0_4, x.section_4, 'down');
    e = ex_s_offset(o + 12, e, ex_bcc_wii_car_0_32_32_8_4_0_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4_0_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4_0_12(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4_8(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_car_0_32_32_8_4_8_8, x.section_8, 'down');
    switch (x.u8_0) {
    case 0:
        e = ex_s_offset(o + 20, e, ex_bcc_wii_car_0_32_32_8_4_8_20t0, x.section_20, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4_8_8(o, x) {
    let e = o + 48
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_32_32_8_4_8_20t0(o, x) {
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
function ex_bcc_wii_car_0_36(o, x) {
    let e = o + 32
    sf32(o + 4, x.f32_4)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_ml(x.unordered_bcc_wii_sound_section_0, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 0, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_sound_section_8, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 8, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_40(o, x) {
    let e = o + 32

    e = ex_ml(x.unordered_bcc_wii_interface_0, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 0, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_interface_4, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 4, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_interface_8, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 8, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_interface_12, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 12, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_interface_16, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 16, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_interface_20, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_48(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_car_0_48_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_48_4(o, e, x) {
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_56(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 64, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_mysterious(temp_offset + (i * 64), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_64(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 64, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_mysterious(temp_offset + (i * 64), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_car_0_72(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_bcc_wii_unknown_0, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious(o, e, x) {
    su8(o + 0, x.u8_0)
    su16(o + 2, x.u16_2)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)

    switch (x.u8_0) {
    case 1:
        e = ex_ml(x.section_4, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 4, e, 'down');
        break;
    case 2:
        e = ex_ml(x.section_4, g.bcc_wii_strange_array, ex_bcc_wii_strange, g.unordered_ref.bcc_wii_strange, o + 4, e, 'down');
        break;
    case 3:
        e = ex_ml(x.section_4, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 4, e, 'down');
        break;
    case 5:
    case 6:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_mysterious_4t6, x.section_4, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_mysterious_4t9, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6(o, x) {
    let e = o + 64
    su8(o + 0, x.u8_0)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    su32(o + 12, x.u32_12)
    su8(o + 25, x.u8_25)
    su32(o + 32, x.u32_32)
    //amount?   su32(o +40, x.u32_40)
    //amount?   su32(o +48, x.u32_48)

    switch (x.u8_3) {
    case 0:
        e = ex_s_offset(o + 16, e, ex_bcc_wii_mysterious_4t6_16t0, x.section_16, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 16, e, ex_bcc_wii_mysterious_4t6_16t2, x.section_16, 'down');
        break;
    }
    e = ex_s_offset(o + 28, e, ex_bcc_wii_mysterious_4t6_28, x.section_28, 'down');
    e = ex_s_offset(o + 36, e, ex_bcc_wii_mysterious_4t6_36, x.section_36, 'down');
    if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 32, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_bcc_wii_mysterious_4t6_44(temp_offset + (i * 32), e, x.section_44[i])
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
            e = ex_bcc_wii_mysterious_4t6_52(temp_offset + (i * 12), e, x.section_52[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 56, e, ex_bcc_wii_mysterious_4t6_56, x.section_56, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_16t0(o, x) {
    let e = o + 16
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_16t2(o, x) {
    let e = o + 16
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_28(o, x) {
    let e = o + 32
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_36(o, x) {
    let e = o + 32

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_44(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_52(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t6_56(o, x) {
    let e = o + 32
    sf32(o + 4, x.f32_4)
    sf32(o + 16, x.f32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t9(o, x) {
    let e = o + 16
    su8(o + 2, x.u8_2)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_mysterious_4t9_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t9_8(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 12, x.u32_12)
    sf32(o + 16, x.f32_16)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_mysterious_4t9_8_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_mysterious_4t9_8_8(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_strange(o, x) {
    let e = o + 48
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_strange_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_strange_4(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_unknown_0, g.bcc_wii_unknown_array, ex_bcc_wii_unknown, g.unordered_ref.bcc_wii_unknown, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link(o, x) {
    let e = o + 80
    su32(o + 4, x.u32_4)
    su32(o + 40, x.u32_40)
    su32(o + 52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)
    su32(o + 72, x.u32_72)
    //?

    e = ex_s_offset(o + 16, e, ex_bcc_wii_link_16, x.section_16, 'down');
    e = ex_ml(x.unordered_bcc_wii_font_28, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 28, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_interface_32, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 32, e, 'down');
    e = ex_string(o + 36, e, x.section_36)
    e = ex_string(o + 44, e, x.section_44)
    e = ex_s_offset(o + 56, e, ex_bcc_wii_link_56, x.section_56, 'down');
    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e - g.m)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, 16)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_bcc_wii_link_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 68, e, ex_bcc_wii_link_68, x.section_68, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_16(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_link_16_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_16_4(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_flag_0, g.bcc_wii_flag_array, ex_bcc_wii_flag, g.unordered_ref.bcc_wii_flag, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_56(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 12, e, ex_bcc_wii_link_56_12, x.section_12, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_56_12(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_bcc_wii_link_64_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 32, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_link_64_0_4(temp_offset + (i * 32), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0_4(o, e, x) {
    //amount?   su32(o +16, x.u32_16)
    su32(o + 24, x.u32_24)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_link_64_0_4_8, x.section_8, 'down');
    e = ex_string(o + 12, e, x.section_12)
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 16, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bcc_wii_link_64_0_4_20(temp_offset + (i * 16), e, x.section_20[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 28, e, ex_bcc_wii_link_64_0_4_28, x.section_28, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0_4_8(o, x) {
    let e = o + 16

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0_4_20(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su16(o + 8, x.u16_8)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_link_64_0_4_20_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0_4_20_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_link_64_0_4_20_4_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0_4_20_4_4(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_64_0_4_28(o, x) {
    let e = o + 16
    su16(o + 8, x.u16_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_68(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_link_68_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_link_68_8(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_font(o, x) {
    let e = o + 48
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su8(o + 8, x.u8_8)
    su16(o + 9, x.u16_9)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)

    e = ex_ml(x.unordered_bcc_wii_model_anim_2_type_c_4, g.bcc_wii_model_anim_2_type_c_array, ex_bcc_wii_model_anim_2_type_c, g.unordered_ref.bcc_wii_model_anim_2_type_c, o + 4, e, 'down');
    e = ex_s_offset(o + 20, e, ex_bcc_wii_font_20, x.section_20, 'down');
    if (x.section_28.length) {
        su32(o + 24, x.section_28.length)
        su32(o + 28, e - g.m)
        g.oa.push(o + 28)
        let temp_offset = e
        e += divisible(x.section_28.length * 12, 16)
        for (let i = 0; i < x.section_28.length; i++) {
            e = ex_bcc_wii_font_28(temp_offset + (i * 12), e, x.section_28[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_font_20(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_font_28(o, e, x) {
    su8(o + 0, x.u8_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_flag(o, x) {
    let e = o + 48
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su8(o + 25, x.u8_25)
    su8(o + 27, x.u8_27)
    su8(o + 30, x.u8_30)
    su8(o + 31, x.u8_31)
    su8(o + 40, x.u8_40)
    su8(o + 42, x.u8_42)

    e = ex_string(o + 8, e, x.section_8)
    switch (x.u32_16) {
    case 0:
        e = ex_s_offset(o + 20, e, ex_bcc_wii_flag_20t0, x.section_20, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 20, e, ex_bcc_wii_flag_20t2, x.section_20, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 20, e, ex_bcc_wii_flag_20t3, x.section_20, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 20, e, ex_bcc_wii_flag_20t7, x.section_20, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_flag_20t0(o, x) {
    let e = o + 16
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_flag_20t2(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_flag_20t3(o, x) {
    let e = o + 16
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)

    e = ex_string(o + 4, e, x.section_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_flag_20t7(o, x) {
    let e = o + 32
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface(o, x) {
    let e = o + 96
    su8(o + 5, x.u8_5)
    su16(o + 6, x.u16_6)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    sf32(o + 36, x.f32_36)
    su32(o + 40, x.u32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su8(o + 57, x.u8_57)
    sf32(o + 68, x.f32_68)
    su32(o + 72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    //amount?   su32(o +88, x.u32_88)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_ml(x.unordered_bcc_wii_sound_controls_20, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 20, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_sound_controls_24, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 24, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_sound_controls_32, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 32, e, 'down');
    e = ex_s_offset(o + 52, e, ex_bcc_wii_interface_52, x.section_52, 'down');
    e = ex_s_offset(o + 76, e, ex_bcc_wii_interface_76, x.section_76, 'down');
    if (x.section_84.length) {
        su32(o + 80, x.section_84.length)
        su32(o + 84, e - g.m)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 28, 16)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_bcc_wii_interface_84(temp_offset + (i * 28), e, x.section_84[i])
        }
        ;
    }
    ;if (x.section_92.length) {
        su32(o + 88, x.section_92.length)
        su32(o + 92, e - g.m)
        g.oa.push(o + 92)
        let temp_offset = e
        e += divisible(x.section_92.length * 100, 16)
        for (let i = 0; i < x.section_92.length; i++) {
            e = ex_bcc_wii_interface_92(temp_offset + (i * 100), e, x.section_92[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_52(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    su8(o + 5, x.u8_5)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 36, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_76_4(temp_offset + (i * 36), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4(o, e, x) {
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 8, x.u32_8)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    su8(o + 32, x.u8_32)
    su8(o + 33, x.u8_33)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u8_4) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_76_4_12t1, x.section_12, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_76_4_12t5, x.section_12, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_76_4_12t7, x.section_12, 'down');
        break;
    case 8:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_76_4_12t8, x.section_12, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_76_4_12t9, x.section_12, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_76_4_12t10, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t1(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_76_4_12t1_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t1_4(o, x) {
    let e = o + 32
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t5(o, x) {
    let e = o + 16
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t7(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t8(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_76_4_12t8_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t8_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)

    e = ex_string(o + 8, e, x.section_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t9(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    e = ex_string(o + 4, e, x.section_4)
    e = ex_string(o + 8, e, x.section_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_76_4_12t10(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_bcc_wii_flag_0, g.bcc_wii_flag_array, ex_bcc_wii_flag, g.unordered_ref.bcc_wii_flag, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_4, x.section_4, 'down');
    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 8, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bcc_wii_interface_84_16(temp_offset + (i * 8), e, x.section_16[i])
        }
        ;
    }
    ;if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 36, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bcc_wii_interface_84_24(temp_offset + (i * 36), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 16, x.u32_16)

    e = ex_string(o + 8, e, x.section_8)
    e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_4_12, x.section_12, 'down');
    e = ex_string(o + 20, e, x.section_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_4_12(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_4_12_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_4_12_4(o, x) {
    let e = o + 32

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_16(o, e, x) {
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_16_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_16_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 16, x.u32_16)

    e = ex_string(o + 8, e, x.section_8)
    switch (x.u8_0) {
    case 4:
        e = ex_ml(x.section_12, g.bcc_wii_flag_array, ex_bcc_wii_flag, g.unordered_ref.bcc_wii_flag, o + 12, e, 'down');
        break;
    case 7:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_16_4_12t7, x.section_12, 'down');
        break;
    }
    e = ex_string(o + 20, e, x.section_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_16_4_12t7(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_16_4_12t7_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_16_4_12t7_4(o, x) {
    let e = o + 32

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)

    switch (x.u8_0) {
    case 1:
    case 31:
        e = ex_ml(x.section_4, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 4, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_24_4t11, x.section_4, 'down');
        break;
    }
    switch (x.u8_0) {
    case 6:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_24_12t6, x.section_12, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_24_12t15, x.section_12, 'down');
        break;
    case 41:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_24_12t41, x.section_12, 'down');
        break;
    }
    e = ex_ml(x.unordered_bcc_wii_sound_controls_24, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_84_24_4t11_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4(o, e, x) {
    su16(o + 8, x.u16_8)
    su32(o + 16, x.u32_16)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_24_4t11_4_4, x.section_4, 'down');
    switch (x.u16_8) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_24_4t11_4_12t1, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_24_4t11_4_12t2, x.section_12, 'down');
        break;
    case 4:
        e = ex_ml(x.section_12, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 12, e, 'down');
        break;
    case 100:
    case 101:
        e = ex_ml(x.section_12, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 12, e, 'down');
        break;
    case 102:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_84_24_4t11_4_12t102, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_4(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 16, x.u32_16)

    e = ex_string(o + 8, e, x.section_8)
    e = ex_ml(x.unordered_bcc_wii_flag_12, g.bcc_wii_flag_array, ex_bcc_wii_flag, g.unordered_ref.bcc_wii_flag, o + 12, e, 'down');
    e = ex_string(o + 20, e, x.section_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t2(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_bcc_wii_interface_84_24_4t11_4_12t2_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_24_4t11_4_12t2_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t2_0(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_24_4t11_4_12t2_0_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t2_0_4(o, x) {
    let e = o + 32
    su8(o + 12, x.u8_12)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t2_4(o, x) {
    let e = o + 32
    su8(o + 12, x.u8_12)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t102(o, x) {
    let e = o + 32
    su32(o + 4, x.u32_4)

    e = ex_string(o + 0, e, x.section_0)
    e = ex_s_offset(o + 8, e, ex_bcc_wii_interface_84_24_4t11_4_12t102_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_4t11_4_12t102_8(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    e = ex_string(o + 4, e, x.section_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t6(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_bcc_wii_interface_84_24_12t6_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_24_12t6_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t6_0(o, x) {
    let e = o + 32

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t6_4(o, x) {
    let e = o + 32
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t15(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_bcc_wii_interface_84_24_12t15_0, x.section_0, 'down');
    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_84_24_12t15_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t15_0(o, x) {
    let e = o + 32
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t15_4(o, x) {
    let e = o + 32

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_84_24_12t41(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    e = ex_string(o + 4, e, x.section_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92(o, e, x) {
    su32(o + 4, x.u32_4)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    su8(o + 11, x.u8_11)
    su32(o + 20, x.u32_20)
    su8(o + 24, x.u8_24)
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
    e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_92_12, x.section_12, 'down');
    e = ex_string(o + 16, e, x.section_16)
    e = ex_string(o + 28, e, x.section_28)
    e = ex_s_offset(o + 32, e, ex_bcc_wii_interface_92_32, x.section_32, 'down');
    switch (x.u8_26) {
    case 0:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t0, x.section_36, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t1, x.section_36, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t3, x.section_36, 'down');
        break;
    case 6:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t6, x.section_36, 'down');
        break;
    case 10:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t10, x.section_36, 'down');
        break;
    case 12:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t12, x.section_36, 'down');
        break;
    case 13:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t13, x.section_36, 'down');
        break;
    case 14:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t14, x.section_36, 'down');
        break;
    case 15:
        e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_36t15, x.section_36, 'down');
        break;
    }
    e = ex_s_offset(o + 40, e, ex_bcc_wii_interface_92_40, x.section_40, 'down');
    e = ex_s_offset(o + 52, e, ex_bcc_wii_interface_92_52, x.section_52, 'down');
    if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e - g.m)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 12, 16)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_bcc_wii_interface_92_68(temp_offset + (i * 12), e, x.section_68[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_12(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_32(o, x) {
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
            e = ex_bcc_wii_interface_92_32_8(temp_offset + (i * 12), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_32_8(o, e, x) {

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_32_8_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_32_8_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su32(o + 4, x.u32_4)
    su32(o + 16, x.u32_16)

    e = ex_string(o + 8, e, x.section_8)
    e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_92_32_8_4_12, x.section_12, 'down');
    e = ex_string(o + 20, e, x.section_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_32_8_4_12(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_32_8_4_12_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_32_8_4_12_4(o, x) {
    let e = o + 32
    su8(o + 12, x.u8_12)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t0(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)

    falsee = ex_s_offset(o + 8, e, ex_bcc_wii_interface_92_36t0_8, x.section_8, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t0_8(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 11, x.u8_11)
    su8(o + 16, x.u8_16)
    su8(o + 18, x.u8_18)
    su8(o + 19, x.u8_19)
    su32(o + 20, x.u32_20)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_92_36t0_8_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t0_8_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su16(o + 22, x.u16_22)
    su16(o + 24, x.u16_24)
    su8(o + 26, x.u8_26)
    su8(o + 27, x.u8_27)
    sf32(o + 28, x.f32_28)

    e = ex_ml(x.unordered_bcc_wii_text_4, g.bcc_wii_text_array, ex_bcc_wii_text, g.unordered_ref.bcc_wii_text, o + 4, e, 'down');
    switch (x.u8_0) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_interface_92_36t1_8t1, x.section_8, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_interface_92_36t1_8t3, x.section_8, 'down');
        break;
    }
    switch (x.u8_2) {
    case 0:
        e = ex_ml(x.section_12, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 12, e, 'down');
        break;
    case 1:
        e = ex_ml(x.section_12, g.bcc_wii_multi_font_array, ex_bcc_wii_multi_font, g.unordered_ref.bcc_wii_multi_font, o + 12, e, 'down');
        break;
    }
    e = ex_s_offset(o + 16, e, ex_bcc_wii_interface_92_36t1_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t1_8t1(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su16(o + 10, x.u16_10)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 4, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_92_36t1_8t1_4(temp_offset + (i * 4), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t1_8t1_4(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_text_0, g.bcc_wii_text_array, ex_bcc_wii_text, g.unordered_ref.bcc_wii_text, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t1_8t3(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t1_16(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t3(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 8, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_92_36t3_4(temp_offset + (i * 8), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t3_4(o, e, x) {

    e = ex_ml(x.unordered_bcc_wii_model_link_0, g.bcc_wii_model_link_array, ex_bcc_wii_model_link, g.unordered_ref.bcc_wii_model_link, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t6(o, x) {
    let e = o + 16
    su8(o + 4, x.u8_4)
    su8(o + 5, x.u8_5)
    //amount?   su32(o +8, x.u32_8)

    e = ex_ml(x.unordered_bcc_wii_interface_0, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 0, e, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 16, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bcc_wii_interface_92_36t6_12(temp_offset + (i * 16), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t6_12(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t10(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t12(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t13(o, x) {
    let e = o + 16
    su8(o + 1, x.u8_1)
    //amount?   su32(o +8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_36t13_4, x.section_4, 'down');
    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e - g.m)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_bcc_wii_interface_92_36t13_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t13_4(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    sf32(o + 4, x.f32_4)
    su32(o + 8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t13_12(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t14(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_36t14_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t14_4(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 8, x.u8_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_36t15(o, x) {
    let e = o + 16

    e = ex_ml(x.unordered_bcc_wii_emitter_0, g.bcc_wii_emitter_array, ex_bcc_wii_emitter, g.unordered_ref.bcc_wii_emitter, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40(o, x) {
    let e = o + 96
    su8(o + 0, x.u8_0)
    su8(o + 2, x.u8_2)
    su8(o + 12, x.u8_12)
    su8(o + 14, x.u8_14)
    su32(o + 32, x.u32_32)
    su32(o + 44, x.u32_44)
    //amount?   su32(o +68, x.u32_68)

    e = ex_s_offset(o + 48, e, ex_bcc_wii_interface_92_40_48, x.section_48, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 28, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_bcc_wii_interface_92_40_72(temp_offset + (i * 28), e, x.section_72[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_48(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su8(o + 6, x.u8_6)
    su32(o + 8, x.u32_8)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 14, x.u8_14)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su32(o + 20, x.u32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 12, x.u32_12)
    //amount?   su32(o +20, x.u32_20)

    e = ex_s_offset(o + 16, e, ex_bcc_wii_interface_92_40_72_16, x.section_16, 'down');
    if (x.section_24.length) {
        su32(o + 20, x.section_24.length)
        su32(o + 24, e - g.m)
        g.oa.push(o + 24)
        let temp_offset = e
        e += divisible(x.section_24.length * 36, 16)
        for (let i = 0; i < x.section_24.length; i++) {
            e = ex_bcc_wii_interface_92_40_72_24(temp_offset + (i * 36), e, x.section_24[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72_16(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_40_72_16_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72_16_4(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72_24(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 20, x.u32_20)

    switch (x.u8_0) {
    case 1:
        e = ex_ml(x.section_4, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 4, e, 'down');
        break;
    case 11:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_40_72_24_4t11, x.section_4, 'down');
        break;
    }
    e = ex_ml(x.unordered_bcc_wii_sound_controls_24, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 24, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72_24_4t11(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_92_40_72_24_4t11_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72_24_4t11_4(o, e, x) {
    su16(o + 8, x.u16_8)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u16_8) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_92_40_72_24_4t11_4_12t1, x.section_12, 'down');
        break;
    case 101:
        e = ex_ml(x.section_12, g.bcc_wii_interface_array, ex_bcc_wii_interface, g.unordered_ref.bcc_wii_interface, o + 12, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_40_72_24_4t11_4_12t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 4, x.u8_4)
    su32(o + 16, x.u32_16)

    e = ex_string(o + 8, e, x.section_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_52(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 8, x.u32_8)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +32, x.u32_32)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_52_4, x.section_4, 'down');
    e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_92_52_12, x.section_12, 'down');
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e - g.m)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 32, 16)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_bcc_wii_interface_92_52_20(temp_offset + (i * 32), e, x.section_20[i])
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
            e = ex_bcc_wii_interface_92_52_28(temp_offset + (i * 12), e, x.section_28[i])
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
            e = ex_bcc_wii_interface_92_52_36(temp_offset + (i * 40), e, x.section_36[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_52_4(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_52_12(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_52_20(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_52_28(o, e, x) {
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
function ex_bcc_wii_interface_92_52_36(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68(o, e, x) {
    su8(o + 0, x.u8_0)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_interface_92_68_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4(o, x) {
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
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_interface_92_68_4_4(temp_offset + (i * 20), e, x.section_4[i])
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
            e = ex_bcc_wii_interface_92_68_4_12(temp_offset + (i * 32), e, x.section_12[i])
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
            e = ex_bcc_wii_interface_92_68_4_20(temp_offset + (i * 32), e, x.section_20[i])
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
            e = ex_bcc_wii_interface_92_68_4_28(temp_offset + (i * 32), e, x.section_28[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 36, e, ex_bcc_wii_interface_92_68_4_36, x.section_36, 'down');
    if (x.section_44.length) {
        su32(o + 40, x.section_44.length)
        su32(o + 44, e - g.m)
        g.oa.push(o + 44)
        let temp_offset = e
        e += divisible(x.section_44.length * 40, 16)
        for (let i = 0; i < x.section_44.length; i++) {
            e = ex_bcc_wii_interface_92_68_4_44(temp_offset + (i * 40), e, x.section_44[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_4(o, e, x) {
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_bcc_wii_interface_92_68_4_4_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_4_16(o, x) {
    let e = o + 20
    su16(o + 8, x.u16_8)

    e = ex_string(o + 0, e, x.section_0)
    switch (x.u16_8) {
    case 1:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_interface_92_68_4_4_16_12t1, x.section_12, 'down');
        break;
    case 1:
        e = ex_ml(x.section_12, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 12, e, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_4_16_12t1(o, x) {
    let e = o + 32
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 3, x.u8_3)
    su32(o + 4, x.u32_4)
    su32(o + 16, x.u32_16)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_12(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 16, x.u8_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_20(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_28(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    su8(o + 17, x.u8_17)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_interface_92_68_4_36(o, x) {
    let e = o + 12
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
function ex_bcc_wii_interface_92_68_4_44(o, e, x) {
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_sound_controls(o, x) {
    let e = o + 32
    su32(o + 0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    //amount?   su32(o +12, x.u32_12)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 16, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bcc_wii_sound_controls_16(temp_offset + (i * 16), e, x.section_16[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_sound_controls_16(o, e, x) {
    //amount?   su32(o +0, x.u32_0)
    su32(o + 8, x.u32_8)
    sf32(o + 12, x.f32_12)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_sound_controls_16_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_sound_controls_16_4(o, x) {
    let e = o + 4

    e = ex_ml(x.unordered_bcc_wii_sound_section_0, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 0, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_text(o, x) {
    let e = o + 16

    e = ex_string(o + 0, e, x.section_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_multi_font(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    switch (x.u32_0) {
    case 0:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_multi_font_4t0, x.section_4, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 4, e, ex_bcc_wii_multi_font_4t1, x.section_4, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_multi_font_4t0(o, x) {
    let e = o + 48
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 24, x.f32_24)

    e = ex_ml(x.unordered_bcc_wii_font_12, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 12, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_font_28, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 28, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_font_32, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 32, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_multi_font_4t1(o, x) {
    let e = o + 32
    su8(o + 1, x.u8_1)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)

    e = ex_ml(x.unordered_bcc_wii_font_12, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 12, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_font_16, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 16, e, 'down');
    e = ex_ml(x.unordered_bcc_wii_font_20, g.bcc_wii_font_array, ex_bcc_wii_font, g.unordered_ref.bcc_wii_font, o + 20, e, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_emitter(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)

    e = ex_s_offset(o + 16, e, ex_bcc_wii_emitter_16, x.section_16, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_emitter_16(o, x) {
    let e = o + 64
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)
    su8(o + 4, x.u8_4)
    su32(o + 8, x.u32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
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
            e = ex_bcc_wii_emitter_16_48(temp_offset + (i * 12), e, x.section_48[i])
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
            e = ex_bcc_wii_emitter_16_56(temp_offset + (i * 32), e, x.section_56[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_emitter_16_48(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_emitter_16_56(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    su8(o + 16, x.u8_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_link(o, x) {
    let e = o + 64
    sf32(o + 20, x.f32_20)
    su8(o + 25, x.u8_25)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_model_link_4, x.section_4, 'down');
    e = ex_string(o + 8, e, x.section_8)
    e = ex_s_offset(o + 12, e, ex_bcc_wii_model_link_12, x.section_12, 'down');
    e = ex_ml(x.unordered_bcc_wii_some_model_anim_16, g.bcc_wii_some_model_anim_array, ex_bcc_wii_some_model_anim, g.unordered_ref.bcc_wii_some_model_anim, o + 16, e, 'down');
    e = ex_s_offset(o + 48, e, ex_bcc_wii_model_link_48, x.section_48, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_link_4(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_link_12(o, x) {
    let e = o + 32
    //amount?   su32(o +4, x.u32_4)

    e = ex_ml(x.unordered_bcc_wii_model_anim_2_type_b_0, g.bcc_wii_model_anim_2_type_b_array, ex_bcc_wii_model_anim_2_type_b, g.unordered_ref.bcc_wii_model_anim_2_type_b, o + 0, e, 'down');
    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 4, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bcc_wii_model_link_12_8(temp_offset + (i * 4), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_link_12_8(o, e, x) {
    ex_patch(o + 0, g.model_array, x.model_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_model_link_48(o, x) {
    let e = o + 48
    sf32(o + 0, x.f32_0)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 32, x.f32_32)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown(o, x) {
    let e = o + 16
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 16, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_unknown_4(temp_offset + (i * 16), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4(o, e, x) {
    su32(o + 0, x.u32_0)
    su32(o + 12, x.u32_12)

    switch (x.u32_0) {
    case 1:
        e = ex_ml(x.section_4, g.bcc_wii_unknown_thing_array, ex_bcc_wii_unknown_thing, g.unordered_ref.bcc_wii_unknown_thing, o + 4, e, 'down');
        break;
    case 4:
        e = ex_ml(x.section_4, g.bcc_wii_strange_array, ex_bcc_wii_strange, g.unordered_ref.bcc_wii_strange, o + 4, e, 'down');
        break;
    case 5:
        e = ex_ml(x.section_4, g.bcc_wii_unknown_idk_sec_array, ex_bcc_wii_unknown_idk_sec, g.unordered_ref.bcc_wii_unknown_idk_sec, o + 4, e, 'down');
        break;
    case 9:
        e = ex_ml(x.section_4, g.bcc_wii_sound_section_array, ex_bcc_wii_sound_section, g.unordered_ref.bcc_wii_sound_section, o + 4, e, 'down');
        break;
    case 26:
        e = ex_ml(x.section_4, g.bcc_wii_sound_controls_array, ex_bcc_wii_sound_controls, g.unordered_ref.bcc_wii_sound_controls, o + 4, e, 'down');
        break;
    }
    switch (x.u32_0) {
    case 1:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_unknown_4_8t1, x.section_8, 'down');
        break;
    case 4:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_unknown_4_8t4, x.section_8, 'down');
        break;
    case 5:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_unknown_4_8t5, x.section_8, 'down');
        break;
    case 9:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_unknown_4_8t9, x.section_8, 'down');
        break;
    case 26:
        e = ex_s_offset(o + 8, e, ex_bcc_wii_unknown_4_8t26, x.section_8, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t1(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    su8(o + 40, x.u8_40)
    su8(o + 41, x.u8_41)
    su8(o + 42, x.u8_42)
    su8(o + 43, x.u8_43)

    e = ex_s_offset(o + 48, e, ex_bcc_wii_unknown_4_8t1_48, x.section_48, 'down');
    switch (x.u8_42) {
    case 1:
        e = ex_s_offset(o + 52, e, ex_bcc_wii_unknown_4_8t1_52t1, x.section_52, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 52, e, ex_bcc_wii_unknown_4_8t1_52t2, x.section_52, 'down');
        break;
    case 3:
        e = ex_s_offset(o + 52, e, ex_bcc_wii_unknown_4_8t1_52t3, x.section_52, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t1_48(o, x) {
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
function ex_bcc_wii_unknown_4_8t1_52t1(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t1_52t2(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 8, x.u8_8)

    switch (x.u8_8) {
    case 0:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_unknown_4_8t1_52t2_12t0, x.section_12, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 12, e, ex_bcc_wii_unknown_4_8t1_52t2_12t2, x.section_12, 'down');
        break;
    }
    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t1_52t2_12t0(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t1_52t2_12t2(o, x) {
    let e = o + 32
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)
    su8(o + 8, x.u8_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t1_52t3(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t4(o, x) {
    let e = o + 64
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t5(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t9(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_4_8t26(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing(o, x) {
    let e = o + 48
    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    sf32(o + 8, x.f32_8)
    //amount?   su32(o +12, x.u32_12)
    su8(o + 20, x.u8_20)
    su8(o + 21, x.u8_21)
    su32(o + 28, x.u32_28)

    if (x.section_16.length) {
        su32(o + 12, x.section_16.length)
        su32(o + 16, e - g.m)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 12, 16)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_bcc_wii_unknown_thing_16(temp_offset + (i * 12), e, x.section_16[i])
        }
        ;
    }
    ;switch (x.u8_20) {
    case 1:
        e = ex_s_offset(o + 24, e, ex_bcc_wii_unknown_thing_24t1, x.section_24, 'down');
        break;
    case 2:
        e = ex_s_offset(o + 24, e, ex_bcc_wii_unknown_thing_24t2, x.section_24, 'down');
        break;
    }
    e = ex_s_offset(o + 32, e, ex_bcc_wii_unknown_thing_32, x.section_32, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_16(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t1(o, x) {
    let e = o + 80
    //amount?   su32(o +0, x.u32_0)
    su8(o + 8, x.u8_8)
    su8(o + 9, x.u8_9)
    su8(o + 11, x.u8_11)
    su32(o + 12, x.u32_12)
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
            e = ex_bcc_wii_unknown_thing_24t1_4(temp_offset + (i * 4), e, x.section_4[i])
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
            e = ex_bcc_wii_unknown_thing_24t1_52(temp_offset + (i * 12), e, x.section_52[i])
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
            e = ex_bcc_wii_unknown_thing_24t1_60(temp_offset + (i * 12), e, x.section_60[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 64, e, ex_bcc_wii_unknown_thing_24t1_64, x.section_64, 'down');
    if (x.section_72.length) {
        su32(o + 68, x.section_72.length)
        su32(o + 72, e - g.m)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 8, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_bcc_wii_unknown_thing_24t1_72(temp_offset + (i * 8), e, x.section_72[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t1_4(o, e, x) {
    ex_patch(o + 0, g.texture_patch_array, x.texture_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t1_52(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t1_60(o, e, x) {
    sf32(o + 0, x.f32_0)
    su8(o + 4, x.u8_4)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t1_64(o, x) {
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
function ex_bcc_wii_unknown_thing_24t1_72(o, e, x) {
    //amount?   su32(o +0, x.u32_0)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 20, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_unknown_thing_24t1_72_4(temp_offset + (i * 20), e, x.section_4[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t1_72_4(o, e, x) {
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t2(o, x) {
    let e = o + 32
    //amount?   su32(o +0, x.u32_0)
    sf32(o + 8, x.f32_8)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)

    if (x.section_4.length) {
        su32(o + 0, x.section_4.length)
        su32(o + 4, e - g.m)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_4.length * 12, 16)
        for (let i = 0; i < x.section_4.length; i++) {
            e = ex_bcc_wii_unknown_thing_24t2_4(temp_offset + (i * 12), e, x.section_4[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 20, e, ex_bcc_wii_unknown_thing_24t2_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t2_4(o, e, x) {
    su8(o + 0, x.u8_0)
    su8(o + 1, x.u8_1)
    su8(o + 2, x.u8_2)
    su8(o + 3, x.u8_3)
    sf32(o + 8, x.f32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_24t2_20(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_thing_32(o, x) {
    let e = o + 16

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_sound_section(o, x) {
    let e = o + 32
    ex_patch(o + 0, g.sound_patch_array, x.sound_0)
    su32(o + 4, x.u32_4)
    su8(o + 9, x.u8_9)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)

    e = ex_s_offset(o + 24, e, ex_bcc_wii_sound_section_24, x.section_24, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_sound_section_24(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    su8(o + 4, x.u8_4)
    su8(o + 8, x.u8_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec(o, x) {
    let e = o + 48
    su8(o + 4, x.u8_4)
    su8(o + 6, x.u8_6)
    su8(o + 7, x.u8_7)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)
    su32(o + 36, x.u32_36)
    su8(o + 44, x.u8_44)

    e = ex_s_offset(o + 8, e, ex_bcc_wii_unknown_idk_sec_8, x.section_8, 'down');
    e = ex_s_offset(o + 24, e, ex_bcc_wii_unknown_idk_sec_24, x.section_24, 'down');
    e = ex_s_offset(o + 32, e, ex_bcc_wii_unknown_idk_sec_32, x.section_32, 'down');
    e = ex_s_offset(o + 40, e, ex_bcc_wii_unknown_idk_sec_40, x.section_40, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_8(o, x) {
    let e = o + 48
    su8(o + 8, x.u8_8)
    su32(o + 16, x.u32_16)

    e = ex_s_offset(o + 12, e, ex_bcc_wii_unknown_idk_sec_8_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_bcc_wii_unknown_idk_sec_8_20, x.section_20, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_8_12(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    //amount?   su32(o +4, x.u32_4)

    if (x.section_8.length) {
        su32(o + 4, x.section_8.length)
        su32(o + 8, e - g.m)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_8.length * 64, 16)
        for (let i = 0; i < x.section_8.length; i++) {
            e = ex_bcc_wii_mysterious(temp_offset + (i * 64), e, x.section_8[i])
        }
        ;
    }
    ;g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_8_20(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_24(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_unknown_idk_sec_24_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_24_4(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_32(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_unknown_idk_sec_32_4, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_32_4(o, x) {
    let e = o + 16

    e = ex_s_offset(o + 0, e, ex_bcc_wii_unknown_idk_sec_32_4_0, x.section_0, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_32_4_0(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su32(o + 8, x.u32_8)

    e = ex_s_offset(o + 4, e, ex_bcc_wii_unknown_idk_sec_32_4_0_4t1, x.section_4, 'down');

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_32_4_0_4t1(o, x) {
    let e = o + 16
    su8(o + 0, x.u8_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_32_4_0_4t2(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_0)
    su8(o + 4, x.u8_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}
function ex_bcc_wii_unknown_idk_sec_40(o, x) {
    let e = o + 16
    sf32(o + 0, x.f32_0)
    sf32(o + 4, x.f32_4)

    g.debug && ex_debug(o, x.sec_id);
    return e
}