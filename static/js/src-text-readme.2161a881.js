(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/Text/README.mdx":function(e,t,i){"use strict";i.r(t);var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),o=i("./node_modules/docz/dist/index.esm.js"),a=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=i("./node_modules/prop-types/index.js"),s=i.n(r),c=i("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=i("./src/styleProps/index.js"),d=c.d.span.withConfig({displayName:"Text",componentId:"e14vha-0"})([""," "," ",""],function(e){return Object(b.f)(Object(a.a)({},e,{textAlign:e.align,fontSize:e.size}))},b.c,b.d);d.propTypes={bold:s.a.bool,caps:s.a.oneOf(["all","first"]),dimmed:s.a.bool,fontSize:s.a.string,lineHeight:s.a.number,overflow:s.a.oneOf(["ellipsis","wrap"]),textAlign:s.a.oneOf(["left","center","right"])};var p=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/Text/index.js"}}),i.d(t,"default",function(){return f});var m={},A="wrapper";function f(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(l.b)(A,Object.assign({},m,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"text"},"Text"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Text")," is a helper component for formatting text."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Margin and padding"),Object(l.b)("li",{parentName:"ul"},"Text styles (bold, dimmed, fontSize, lineHeight, textAlign, overflow, caps)")),Object(l.b)("p",null,"In addition to the ",Object(l.b)("inlineCode",{parentName:"p"},"fontSize")," and ",Object(l.b)("inlineCode",{parentName:"p"},"textAlign")," props, this component also supports the shortcuts ",Object(l.b)("inlineCode",{parentName:"p"},"size")," and ",Object(l.b)("inlineCode",{parentName:"p"},"align"),"."),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(o.c,{__position:0,__code:'<Text as="div" bold>\n  Bold text\n</Text>\n<Text as="div" dimmed lineHeight={2}>\n  Dimmed text with a line height of 2\n</Text>\n<Text as="h1" size="xl">\n  Extra-large text\n</Text>\n<Text as="div" caps="all">\n  this text is all-lowercase, but displays in uppercase\n</Text>\n<Text as="div" caps="first">\n  this text is all-lowercase, but is displayed in title-case\n</Text>\n<Text as="div" overflow="wrap" mt="m">\n  An overflow value of \'wrap\' will make long words with no spaces break into a\n  new line.\n</Text>\n<Text as="div" overflow="ellipsis" mt="m">\n  An overflow value of \'ellipsis\' will prevent line-breaks and cut off\n  overflowing text with an ellipsis (\u2026)\n</Text>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Text:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZLGwKU3XaD04AEchJBIrAXxVVBCPVdhA0lLDZXlM12jBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ0UgAWdT2AANnUzT1jAYCADFvWgRJFP4ZxDgRB1MBgoR-CWIhqEoOAdIRCzqysmhnAgXDLnYABGAytPkXj-KmABBOYJPYCMoPIGwoHQMN2HkDkJLEdLoxkdgUTEmBuGAPCRMquB5C3GtgCy6BcuCAAyDrxkSeZKGaVqcry7gRrlMBkMlAZUHadgAH4NjasMI0Kq5Bva1B4urKQZCrN8zBhFjMDAMIoCmZaipKraUuXasEzYggcGszIUivAgmprWs6Kmfw-BAGR-HYLwcvej72GvSgcvGUiV23L6QYTL6QjgX7_pAY5-SPHIoDQGAAAkYAgFJCGqgAmRqYZrLUMdzWh6LzXEQnYbHnV8AmiYOZoSYpqQ4e5xGfv4PAooB_IIt-rAoHECmLDPejMnNOC5O6WnRFumsedI-HPtIpGUbYAG4juX74klkAtYsCZbChumrZNhXRgyOI4BgJYPHCdH_LgxI7DQXI5kdiludozW-Z1gW_v1tHDeR_hIAEFEpbVj7LbsFXODsO2oAd6iKVd92rZYT34NzX2YgIWBzSdxkk9rYP6K1xh-ZjiPWAByhWAyMAs5GX6RkyGYAaIAhfqIRPQZrJLzHbzvu_YVh4gZPZmnaPvZhmnEEnYKJtm6LOZzzIV0GxBnUGHfyJXgQHTW2aXOBoYdXHYZ0xmZv8g95mvG7D5vUb2DuBC7qMX685sZ3FsIPYe_BR5m1vpPP-M9RhzwXt0fqcoQEQDAXAde0AoB9i6B3TMr9zQeGvhnDAPR3b9TALfaeADu4FGtlMfMeJ3DQgSBg_IdgIyADICN848Nb1xXFIe6j1nqvSalIa6u0zBfhAFRGiX1JCqGwP-LQFBgL6AYMxe0aFKAzEsL1S-RpOL9j0eaUS8wsGMW0VMCqsAcjGLlHY7IldHTUH0FY3iNipIq10Xcbyrg5JoD8XAUkukCghMwo4iilFRKwBCX6MwiUrA60ks49AOBz6oGKGCAgAASYApjBzcCrLwUQNxSIhIyrkspZScD1KKaEmp5SVZJWxikBSeC9FwBwPEQmqAtK1PKSFAgYUIpXEaZk8KLtmkFU2mUgpsl5KRNyQUnSnYInoU2sURiZgvo4CKQYyxaVpL-gIEDdAVw_FHPgDgLwENBkEGjlcgcNyenuJ1GACMABtdoJtNJjQgPHF8ABdDkjyWBEExi8vRby7nCCgI8kZYzIrXMMT0lE04UiPNfvjQmhAYX6PRTgVAoQiCBAEI82hgCRiErhR8r5vz0GYIBSvfu7QwWPNae0zpaLLE4AZT89osAwAviWO0BEegBCsv6OzDl4KzDyF2c6LARFjgwGOqEU6KT6KMVkfIyQziQlKPDBoNRQE9CgXAmqrwAgpwhI4u6SQtr7XoQIhBQ0sAsAOuiR6Lu2AEnWI9esvSKQfXkQ9CGzZ3T3VqsFPkbsqBw3YUjX5F4U1A22hYks4J6FHUUUkDmpNbqg1qt8Xm31khy0xuVQde0pyykuoyCEpFXqW25KjTOdtZz43puoN2spRaB0VPot2pVMilByOooauJMBjVNoECE1RgFdAgQMGBbxwB4gzD8FEiNHpwjQDgACLO8dY0sRapsHY1gYBHj3Smg9MQoDHomLemAiS-LUAEgugA0jAb2JzckRBmIpBdlg9FBTKSKggoHD4ZAADIarFbkrwNxIiwbtRkcGaHrSPNlQSuUC6RT4uQxtZV40-KJsBnBxd6EIyNMKg2p5X7IILqWK-u9aVGnKrKVlLY2wb1HgjBxmAH5eJlIgM0CMABCX9_64DfIXWCqSzSugED6OYUlCRdkEHmWctTGmVNnLKYpmjf7vamcwwIEFIKrjFCisZOAEMuDsAKduvwUZjMtM2EeTJfhMCPKGSJnAr8RJhhSBMZpHJ5DFEeeOjavE61TCOidKYC6Ql6snQao16FJD-u9ehZd2hV2aI3R6wpWBwNiiIPezi9TJCHufQ1piBBPH-hVWq5JfSOl6lmIBs5wHFL5fNCiQJpGoNIaG16kbBAxuQaefoDIilJW0GlY81DEQiBTewOaOg6B5v4Zg2Nabe2grxbMBRyazJ8tVIY0Z3jLGpL5baf012_hbBLEQqMJYcA8DTm2JhSS3HxOolHIZpjZTjCsXgKOT12AhzsB5M0_LilT7Onm5DowHkYAEIOP_GlDCSuZkcTCSoDD8ucFoEQOwSOvNEDQAAdS4BMK4SlAsEHy9ed79xAbc7mn2SrlBqsRg8NzlauRwyQGdIsZHXqADiQhaWpEV_zqK7ArjISOjjGXXn8vOD-2gbYVxfv_dV-riXWvpfs-66gZw84wBXBt71mY3zns8pBewAAPp7uHWAXsdLi4xPTSX1Wau1Td9CmXlDZdncaztYbCsAWKxoq1m7TzOACgUWr7pH1HsNZnmc57618evT5mA2eYkNafS-svH7LtUfj7d9CjHcnJMKaSEkfZEikgIKSSlfYPCkkRfiN9gOul3B408q9Amy_CbL2J9rZSDMCHMBD244T9J9n5-ngvKR6Psfn-bzXGrtfs_j-BkDXfmllPmjviUBR6Pd5H0ePa5SykTNVkMm_I5Rm7_o735_UTa_I7Y_KXbIM_DfFIYjdmCZLAYA2_UcDPe_GcejTvETV_IZCZAQeAn_JA8gB_fsA_N9DA8pDXSXU_ZpePbDTbCZRIHAu_fAlAmYJ_dA4AiZDwegxAv_GYQfQAkg9_C3E_K3SgyAxDUVWAzg3_ZAvfdSIgl_NgvsSWLzb_Bggg4fVg5QkA8g4Qs5eLYPVVQ6DVVLPsSAjLCdaPadHLbpSQXtRNJdJPdRS1dda1C9VQmcCverRrY9c-RglIIvSCEvGfUffNTw6vKtWvcjCaBvNNOwujO7JjNveNUkGIqadjPRJYaDV2EQTbJYQ7JYXCOQ8vLjSPEHQIwTGAOfYgyfZfVfSglI6gCZPyL3H3WwqaZowQsAnXZpQbIcGYbfLg6Q4TdIvgo_bQ8A5paDK4aDfoqQ3wiMTIkYsgy3cYrzDbdDajHDGYvAh_NYogQo8XUAigrzQ7K4Q7LYv_PIxYjoo45pXCBoU1K4So3zTESgUXZ9HAXCdgLqQAk8LON4npXCb5XCZTb3dgT40Ew4nQspPQxLAw-0FLLVKYVo_tEo1AfVSw2PXLIdRPc1InZwtPAY3wjw3PJrHwgofwqSMosvYkqvPPETOvKIto7E7pejZve7ZjVAASYAPYreTvIgJ_IebyfvclbydQ6k4o7pSfKkt9J40TaosHFfdkwdQJeSK4WUBA2Yh_Hk9A0Y5Yro8pItC_NUugzQjU7YlA_k_YhQoeSQ80vfQUvghQyElYoZItaAgjIgOA003Av_T0q0zQtU7A70tw-0_vDQr_LQvU9nItag9Y_k2030lg-fa0jg4MwkrU3g8Mt_SMoQl0g0lUtAMQo7T0hMwYv0x0gMreJQiMs030sU4gp0sY_UmE9rEPBE7VZkifcwqdGiKwu4KtSpHEldFPfE8rdzVwGkrwk9IUNrTdaUzjX1EkmvN9Ck4AZlThJYalbuBnfuGk-nLANANrJJR7FWSwTITkqyAQIgZ3frMpE2RSUIf2HOZ2ebOOFEZbWYF4PpCKM7ZVZJLc0YOqLEG8ySJjdc2wK4NfQuMkeCUDLOHYDHB6epcCppXQx5VeS_KC2wGChyQjeC7YRC-pAVfHbc_uOLOKSIyjNo6tO4Vk7pFvM5NvZpC5dnaOdnSFTGdnZFaZdnXFNmQgdnACkYdnblV7EHMpETOLCUrsxfKffjco2UhfXJWAb6HlIC-AHTSTdKUSjpBioZG3dSuwUC4A6Cr2OC04Ai9nMpHEdAFnOUKKJSJSAAUkQoktIn9wGVmR0z0yXwVNqK8yIoMtnVQqGW4vGUNGAhRX52CxeP-JwAsRgGcDiFgFd0iumQ9yWNzP1LKRGQZ34qOwuX53aAuRmkys6N4pxjxXZhEtIjPPcDgEvK21WEHHmlPPPIaqFGvNmG-WjgyuuKhPKSoFPSuA4tzHmnHNlPitIkKKmvoipiIDCzoAizwAOKbPZyIojCEv5yEsMud2-SEr6udPQAVV0KD1hLVXbKmBorgCjx7NpKayGpnKK0cLXS0Q9SyhlEfmiQ-siFcHNE0A_S6ygB3UfkkgjEev729DaBoEKhKVbz-1-vBohiFBIN6WBo8yhuQgIFRrODgGWj_Me33LSiRtPSWAhrwO6EknaDwDgCgFfAuhFwpEcFJpCB8ixthtKSn0-pwH3MZudmZqFDJuRshrZpoCFtPQpqUs_U5OS0CR3nMEkl5uKrggQvFTkg8FfAJplqZhI2CEVogCwEfBGBsFoBlRSA1qluSVsC1DlrSghouh-qiBJpRpCzJTQHcARHOkYHYCUhwAMiTEYitrgHgxIztuFoumk2trludoEClseGh3U0VMflXUyBRAYTTntsvMZmeAIV5x2C-010LCzj6ASkexTv8CmDBtb2FohTloFqOCpvVtcAjDZx9qWFbt9oAHYOR5t2lCB660oV4Tb30zAOb0oo6BBtgY7Cp5o-6CAB6Rq67ha47JB2Besd5GZ7bH4PBxw56Mg9gjh0A5aMgtJ47MB5gMAGFmRjbRxNgjhxxbZjhbahQdb2Yi6hRS7tabAiY57iaIalhjpJQX7JJfaooObckJ6p6IaZ7X7CA6AY6AGzQUbzcj7J74H_7DQkHY7a04TIJxzvIDalhUH5aMjdaBlCwaBU6ADv68A56lhIH6Hg6SN4t0SaIpzgsHCLVXqys1VgByi7crtUAzwBAhABAaT-GthE0GSqLmR5yKidSmMtKZMRN2jpMYq_j4g4A9LvMVdn4rAy8BHE1hHRH8bclNp9DeG5GWGstp0pzkIXgelOG8SGBkkhARBrI0qIo0oooTJKLBGJxb1wNoJDaugiBtHXHb0jKAmiBMk3hMUH9W7QmQslqCxzRVIlLQdE7zAABqUJmnCcZ8Dx0KaZM69revNo9SKrecaINgCo2Q3nZ2Ip0ZHiiXF4AAOW9FE3ZJqIF352MlXtF0ac8e6GydaYIA6aPF1KytKePO1sqaF1vS4x8BKQFyqbghiA7lQNyMKeGbVtvU1s_oEnmbPFlDBvqcGcpoKfceGbHvmbFHWdqa2YaZdjQWtClpD2ADcYICaZRVyMCcoGCY7yqZ5OOZq1uoNSnLJJnGeq4dKxcPrTudvQ8OawccBsex0jgDgGsCQiJgADVkEonfkwgIgOU_GqMQyIxft1RHAAsRjFGpMqXhQaXKbRojr2jGX57AQJJRotNcFQSOXmXuXJJjpn0um18emBXARvKQclHmlhNDFUFJX3JpNRp2hSVyUMgZpviErFXhgmWuWVWqb4nC9CpvdmklWWWqalIeIzltHfKsm5RrXpXZKlGdXmgLWhW5R1WKV6bxW_LVmFmiBKW9XOXMAMmfKYgpMMWsWEb0Q8B8WoAGQellEsBPlg3qXARCpipzQwGlTMnDMLXnWIGGWQ3mWPg_ABAkoCAW7YbVXzRfXVN_X2h632BRn1HXjNHMld9vkLXYmPBjW98wGQVvK2FnY82en224qoWUge3S3ARh2zHFVzrXD0z3DwXp19zDyTU1AYXnGeGWIF0QjnUaMKSVsMh7Bsp1oj2z2BAL3Fo6AKSUKj2UKKTIAEhoJAkXRK032oAP2wwGIs17QIAYAooopcYJRdhK1gPQPwOELS0WIhKdy-tK1EP2V4P7RWBbBQgTZEhcYuBMBzBK1MP6QcO8POwH30Opg7jTUj3qO1AP0PmUMaNHkb272ho6BHkUKkUcE_39BHloOwOIOqUSLRgkOZhHliPsOEhcP8OOPck6PsAKLuyDUJHBHt2VEnGRy3q1V7olhgA8gYB7ATZRcdgK9TRFRKOPJYV0V80ilzF0VVzyjdFMOpwK90lXF0wPEKTVOjGRGX7K0MhRGP1vFTxAwj6PBYB66IuLKj3QvxRwvIvhbou4PeJynmQfOpo6K7hwnHtgALnyiybL2wxxahRrx8Klg_A4BrwUgGgog0glhUBOmx9gdZLklEo0RJR4NTh4hyi0oDOjOEgTOp65WdJ_3evJJ8vD8Vm18HttaIayuLKdR_5-hyg0o4uOxXAIvDOkv8LPMIyylRv9ByjfiO33j5v8KQrsyHtT0FudgrLylKvqvavXA0hgCpaIyemZvykiLDuaACvgC6kGlP2_uy9MlJGpoFNGujwQV7vAePhhbbvtglvAuuB4B7vztyklBmlFMKQCv36BBEeKv_Anu6uXmoeYAQVcl3v83FS9vylG4y9nPUejgRNqp2vQhOvuuoByjGpL172NoeZGehAXOMhOaF89MMvqADlXkbPjKzlJu306ViVftZgKi19YrNGlf-VXj1BJGcBbAxQABHUIIFPMspZ2QRnnPlW5HXvXg3mAY3035sk6670r_CrX25Adx5R7mr0nj3npe5RFXJcn_3zJVEAofXuAI3k3roHXc7DrQwsPYiAx8H6gRiD5yXoRvzsR9dmiTdzk49qzXdrT_d4vTFtz2ddADz9cGgI8piMc9GickIpc6cs9LW79GjNKFgBu4qXGnJeXmjc0Apbv-QK4BzHwJzbGHINZC6CamYeK0HlX2l-f4LULUHGcCYaLRiHZZd-EowxE6jKzXPwtA2rd1jorugYvpw7Ti9XGivyqKvz4Gv1rNFubxbW9i_hWnoTF_vspUy2C33DphtzmgXgkTVaO_x0zqA8gkbRIK4icLgCpU2_HBhdX37apz-_PY_vn2PQoUr-3DC1AJCfZy8ykQlRSDYHI7TQuUpEZHnQlGCKQX26FYehTVRyjB2USnVsrg1DzGEUKmA0_gXx_a8caAuAuFnOXL75p3OT_dxLX1f4CR-BwPSut_zgC_9bg9RTpJt0n7hAYAOmHokpB0wnEfaOmXYqzh0yTF9BZgHfuwJQFJ9DQPHOQTwIPIF8BOsHbYEIKtRQ4AAqmOxThIxGYmMCAI_GN4ZBkgEQEIHMCSDlRgqewVAGEOZANAzw0UNXLTlmYCRHBEHCSLknaBwByAXQYIJUHSjmhqc5oGhnANRAV1Hck0DuOCjyEFCih5dd8k_HcQ91kBifYwikJ2B2Ct2qHWYC4NHKWNRB0ScQW4gzAv92-eOBBCMDE520f-uSISuaAwpXASE4obYLMMPg6YRgh8WYf3HmHXxlhdqSfGsLtTEJr4WwxYTsPQBIDd-yWVAaMJoHjD-47QgvpJ1I6ydUA3Qm_mXwahiDK-1fSQcMMOZTBHh0nMjgR0mGKCO0Kgx3P2whgaCdMJA3wM8NWHM48AY_dSDpk2AkZkRWAHTPHiMGt5QEpxSRi3R9pEilIGTBdDiOyRNC9-VggEUkCBF0B7hx6BTmamHLX9S-ARPoeRAGGecpBIwsEvcTUAgilBuEEAQ8VcyFILoK_UHhr3eKAl5-wJeLOYP2gcDLqfI01Mf0z6ehs-rwsCOQDgiYt9Gb6QxlNGMYv1SIe2OwCaKODAALGzQg_pn0tHqiU-andbgl226npkuzgzTqyPhYBFgIVDScmEQhp180u5gF0Zt0S7ujdu53CyqEnx6I8JmLzH3s9zSDaMlG0maMTsATGqMMx2wBTDmITHKY_WDra0UW0YqPZTQrogepJCTGk9mk80IeqAJtaYEKGJQlEDHUR55iEe-FAsdT0-7dFSI-Ijblt3roVVUAuYwcZWJrrMUIOBdDAKtC7ExieqC4zMZ0xh5mMZmCfKkcYTDHDiduFlW6gFG2Avc_wmgagCyLwGnILA_AcnvwCuD8AfgxYaoBkF2xYBvQZIRkCAC0hXiQA_8fINQFvHsB-AvtYCV5HWD8BygWQjBImgAn8Ako5UQiLAGhCvjfw6qMkJQESC5g8gDCczhaAfF_BSwoE6sFAlcBoAYJKgU1KokInfjz6e2eEMBzgAATLxNYcCUJDIkAA9KKDgBJg4AlIVE5iYIE1BkSfGOAAABw4ATIfE78XZwSoMSkAgEkAFFAACsOATulxMknySuRz_WSXeJAAGQcASYNSZ-JXD3iEaUQf6tpPklsTuJvtAyOpP4A4TLQkQISSZFEniT-A6wcxvqnwm4BdAkAFIKojPHJ5vR0kEAFThgq0Bbx9400LQHNAOTZgA8BQAoHkDyAgAA",mdxType:"Playground"},Object(l.b)(p,{as:"div",bold:!0,mdxType:"Text"},"Bold text"),Object(l.b)(p,{as:"div",dimmed:!0,lineHeight:2,mdxType:"Text"},"Dimmed text with a line height of 2"),Object(l.b)(p,{as:"h1",size:"xl",mdxType:"Text"},"Extra-large text"),Object(l.b)(p,{as:"div",caps:"all",mdxType:"Text"},"this text is all-lowercase, but displays in uppercase"),Object(l.b)(p,{as:"div",caps:"first",mdxType:"Text"},"this text is all-lowercase, but is displayed in title-case"),Object(l.b)(p,{as:"div",overflow:"wrap",mt:"m",mdxType:"Text"},"An overflow value of 'wrap' will make long words with no spaces break into a new line."),Object(l.b)(p,{as:"div",overflow:"ellipsis",mt:"m",mdxType:"Text"},"An overflow value of 'ellipsis' will prevent line-breaks and cut off overflowing text with an ellipsis (\u2026)")),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)(o.d,{of:p,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Text/README.mdx"}}),f.isMDXComponent=!0},"./src/mixins/index.js":function(e,t,i){"use strict";var n=i("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=i("./src/utils/colors.js"),o=function(e){return Object(n.c)(["border-",":1px solid ",";"],e,function(e){return Object(l.a)(e.theme.shade,e.theme.lineStrength)})},a=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/border.js"}});var r=Object(n.c)(["display:flex;align-items:center;justify-content:center;"]),s=r;"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var c={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},b=c;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var d=Object(n.c)(["position:absolute;top:0;right:0;bottom:0;left:0;"]),p=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var m="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",A=m;m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var f=Object(n.c)(["overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;"]),g=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var u=Object(n.c)(["position:absolute;overflow:hidden;width:1px;height:1px;padding:0;clip:rect(0 0 0 0);border:0;"]),j=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}});var O=Object(n.c)(["z-index:",";"],function(e){return e.theme.globals.z[e.z]}),x=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/zIndex.js"}}),i.d(t,"a",function(){return b}),i.d(t,"b",function(){return p}),i.d(t,"c",function(){return g}),"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var n=i("./src/utils/units.js"),l={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function o(e){var t=e.flexAlign,i=e.basis,o=e.grow,a=e.shrink;return{flex:"none",minWidth:0,flexBasis:i?Object(n.b)(i):void 0,flexGrow:o?1:void 0,flexShrink:a?1:void 0,alignSelf:l[t]||t}}"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,i){"use strict";var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=i("./src/utils/colors.js"),o=i("./src/ThemeSection/index.js");function a(e){if(!e||!e.globals)throw new o.a}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var r={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function s(e){var t=e.border,i=e.theme;return a(i),r[t]?Object(n.a)({},r[t],"1px solid ".concat(Object(l.a)(i.shade,i.lineStrength))):null}var c=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=i("./src/styleProps/flexProps.js"),d=i("./src/utils/spacing.js");function p(e){var t=e.p,i=e.px,n=e.py,l=e.pt,o=e.pr,r=e.pb,s=e.pl,c=e.theme;return a(c),{padding:t?Object(d.a)(t,c):void 0,paddingTop:n?Object(d.a)(n,c):l?Object(d.a)(l,c):void 0,paddingRight:i?Object(d.a)(i,c):o?Object(d.a)(o,c):void 0,paddingBottom:n?Object(d.a)(n,c):r?Object(d.a)(r,c):void 0,paddingLeft:i?Object(d.a)(i,c):s?Object(d.a)(s,c):void 0}}var m=p;function A(e){var t=e.pos,i=e.position,n=e.top,l=e.left,o=e.bottom,r=e.right,s=e.z,c=e.theme;return a(c),{position:t||i||void 0,top:n?Object(d.a)(n,c):void 0,left:l?Object(d.a)(l,c):void 0,bottom:o?Object(d.a)(o,c):void 0,right:r?Object(d.a)(r,c):void 0,zIndex:c.globals.z&&c.globals.z[s]||s||void 0}}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var f=A;function g(e){var t=e.m,i=e.mx,n=e.my,l=e.mt,o=e.mr,r=e.mb,s=e.ml,c=e.theme;return a(c),{margin:t?Object(d.a)(t,c):void 0,marginTop:n?Object(d.a)(n,c):l?Object(d.a)(l,c):void 0,marginRight:i?Object(d.a)(i,c):o?Object(d.a)(o,c):void 0,marginBottom:n?Object(d.a)(n,c):r?Object(d.a)(r,c):void 0,marginLeft:i?Object(d.a)(i,c):s?Object(d.a)(s,c):void 0}}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var u=g;g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var j=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),O=i("./src/mixins/index.js"),x={all:"uppercase",first:"capitalize"},v={ellipsis:Object(j.a)({display:"block"},O.a),wrap:Object(j.a)({display:"block"},O.c)};function B(e){var t,i=e.bold,n=e.caps,o=e.dimmed,r=e.fontSize,s=e.lineHeight,c=e.overflow,b=e.textAlign,d=e.theme;return a(d),b&&(t={display:"block",width:"100%",textAlign:b}),Object(j.a)({},t,{fontSize:r?d.globals.typeScale[r]:void 0,fontWeight:i?"bold":void 0,lineHeight:s,textTransform:n?x[n]:void 0,color:o?Object(l.a)(d.text,d.textDimStrength):void 0},c?v[c]:void 0)}var y=B;B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),i.d(t,"a",function(){return c}),i.d(t,"b",function(){return b.b}),i.d(t,"d",function(){return m}),i.d(t,"e",function(){return f}),i.d(t,"c",function(){return u}),i.d(t,"f",function(){return y}),"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof b.b&&b.b&&b.b===Object(b.b)&&Object.isExtensible(b.b)&&Object.defineProperty(b.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("./src/utils/units.js"),l=["auto"];function o(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(n.b)(e):l.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-text-readme.3843214b152df0bef04f.js.map