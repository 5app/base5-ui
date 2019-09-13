(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/Text/README.mdx":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return c}));var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),o=i("./node_modules/docz/dist/index.esm.js"),s=i("./src/Text/index.js"),a={},l="wrapper";function c(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)(l,Object.assign({},a,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"text"},"Text"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Text")," is a helper component for formatting text. It supports styling props for the following styles:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Text styles (bold, dimmed, fontSize, lineHeight, textAlign, overflow, caps)"),Object(r.b)("li",{parentName:"ul"},"Display (block, inline, inline-block)"),Object(r.b)("li",{parentName:"ul"},"Margin and padding")),Object(r.b)("p",null,"In addition to the ",Object(r.b)("inlineCode",{parentName:"p"},"fontSize")," and ",Object(r.b)("inlineCode",{parentName:"p"},"textAlign")," props, this component also supports the shorthands ",Object(r.b)("inlineCode",{parentName:"p"},"size")," and ",Object(r.b)("inlineCode",{parentName:"p"},"align"),"."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(o.c,{__position:0,__code:'<Text as="h1" size="xl" lineHeight={1.3}>\n  Extra-large text with a smaller line height\n</Text>\n<Text dimmed as="p">\n  A dimmed subtitle with a{\' \'}\n  <Text bold dimmed={false}>\n    non-dimmed segment\n  </Text>\n</Text>\n<Text bold as="p" mt="m">\n  Bold text with some nested <Text bold={false}>non-bold</Text> text\n</Text>\n<Text as="p" caps="all" mt="m">\n  this text is all-lowercase, but displays in uppercase\n</Text>\n<Text as="p" caps="first">\n  this text is all-lowercase, but is displayed in title-case{\' \'}\n  <Text caps={false}>(unless overwritten)</Text>\n</Text>\n<Text as="p" overflow="wrap" mt="m">\n  OverflowWrapWillMakeLongWordsWithNoSpacesForExampleUrlsBreakIntoANewLineInsteadOfGoingOnAndBreakingOutOfTheirContainerWhichUsuallyDoesntLookVeryGood.\n</Text>\n<Text display="block" overflow="ellipsis" mt="m">\n  An overflow value of \'ellipsis\' will prevent line-breaks and cut off\n  overflowing text with an ellipsis (\u2026). This only works with "block-level"\n  elements (e.g. div, p). If you want to use it with a non-block element like\n  `span`, set the `display` prop to \'block\'.\n</Text>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Text:s.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZLGwKU3XaD04AEchJBIrAXxVVBCPVdhA0lLDZXlM12jBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ0UgAWdT2AANnUzT1jAYCADFvWgRJFP4ZxDgRB1MBgoR-CWIhqEoOAdIRCzqysmhnAgXDLnYABGAytPkXj-KmABBOYJPYCMoPIGwoHQMN2HkDkJLEdLoxkdgUTEmBuGAPCRMquB5C3GtgCy6BcuCAAyDrxkSeZKGaVqcry7gRrlMBkMlAZUHadgAH4NjasMI0Kq5Bva1B4urKQZCrN8zBhFjMDAMIoCmZaipKraUuXasEzYggcGszIUivAgmprWs6Kmfw-BAPAov4crwqq_gsCgQGoDQGAAAkYAgFJCGqqKcCTRqVw-s96Myc04Lk7paHovNcRCcqogSDJ2Eh51fDhhHRFumspC-97Ga-45-SPHIfv4GZxHRmskvZohOfKt4YgIWAiYLVxgBm9pNo-j7GDZrwcqFznquOqA4BgNGGcV9hUGoS0OdzHWXv0fnt2Z_mmdIlmExVyg1e5kBeZAdgiAIX6iD5_Wa2vZ2cgJqZ8zxOBIm6Z0UVzZXSPYVWeGALWdcao3UHNRO7fo4qQ9t2j7dttnXfd1Y7l--JwY9r2fb9g2LAmWxxnjpvK5x0YMjiHWlg8cJ2f8uDEjsNBcjmTuKXzm3_bjwmS8BuJy_4SABBROv68buwQ84Ow26gDvqIpHu-6blgB_g3MR_F2BzS7mBZblBX65nqYF7gTX4lThtkKxOxKFYDIRj9BuHQRcBcc6T0LtPYub8eaAz_hkMAe8Ri_UAbMQGNd-C-xAA7GsOp_4CEQaMAA6pkGYRDoBQD1K4bYMAAAy1AUhEKFOgOA5CJgADlKDOACvAayQpMbejJDAAAqgIbW15TTbAaDQSgSV2EwBGLQqG0iY4dh1GAAA4pQAoOpUBJQwBI8U2wdHhHUdYOGAhHA0FcFDAQRCbBZWEfSSuiQtSUHgDQehlBtgADUMiJC0U4HAEDwFQPjqfMk8FfoeD3jsOB-DCHIP4POSGdxbDoO9pgteBt9F7ASUg9grB4gMj2M0doKSIBpLgDNHECQ-xdH_pmKmMBM6SJ3hgHofd-pgCtnkhBSCCjN0JmHEI5gKlVPSoAMgIOT1GsE3agSQ8xCm2NiXEvT-AxNONsHGMB_5V2hJefQdgIx_hSPUGQpIZmNGaK0KEIx3BTAiLkHWnBQ7E1cL09OmdYm7HnDAV6lMIA0PYMUfy7hihLB1o8zYIKImD2KPUygMwhxyk2TsCiIS3orikPdR6z1XpNSkNdXaZgvwgCojRL6khVDYH_FoCgwF9AMGYvaNCSLLC9XgBxOU_YkXmlEvMapjEWVTAqrAHIRpOJiuyDfR01Ajl-ltCxaS_oCBwvgmyu4WleDAPopquA2riCuDkmgfVhqdKdgKGaswmFJXukoqJWA-rFV8WoAJNmklpXoBwGC1AxQwQEAACQ1VsJExI-rNo6uDbywc3Aqw6p1SHfVGUA0JoejgHAMaDWptELqggSVIYpAUoiu4OB4jw3MAAH0rSWuAOAQ4ForYatNIUCBhQilcLNPrgbsGrbWnArb20wGbQQAqkag3AFkvJCNAbo26StehTaxRGJmC-pmgcHLBVpRVTqxOVxNWbvgDgLwztDWv33Ruzldb5VmM5RGAA2jmg9V6cA3rAA-9oldNJjQgCvF8ABdDkI7n2CuPcIKAhrAOGpYMLbIF72UvpPRBgN6qHIeQQ6Bt9H60XbG_e0NAzS8MEaht8rZ7QoMBsHcDeDMxD11pRNOFIhrmmw3hoQGjdGcCoFCEQQIAhDXwIIUgjjL6sP3vKQkSp-RqlLHaKgmY5GgMBobYW4tIGj1ifaLAMAL5ZMIj0AIPD_Q6aKbiiu50WAiLHBgMdUIp0rCkUYmSilkhpX6upeGDQ9KgJ6FAuBKzXgBBTn1dyiikhAvBfQgRCC_cw0hbtWF1DzrhUxcQdgeL5EPRpawMlpV9oLV6RSBl7CHoCsLqRUKvLUxBT5G7KgYrnFSt-ReFNXLTEYtTtNehULHpOv1aiylqzSbusJY9MNirLqDr2h3QQCLGRrWqqS-hQ12WFs6rKzONbtxmt1a231rb42tU2qc0ocl1FXOOpgO5ubAh9V0sAroECBgwIiqkllLY2xzFHltZlj04RoBwEkBMf5MAXWveADdnxxTdY9d6xALAaBKv-ldagASN2ADSMAh7buU0ixSN3LBIqCjq7TBB8fMIyLQmzumA1eBuJEcnQWMiB3p9aQ1xn2OoopwIEUbGacbXM-NPidWE7c-TVmwqM3EpSRu0sYH320pZvMzq97OwvswAjPLmAH5eI6ogM0CMABCDHWO4D3pu4BqSOaugED6OYbjCQV2jt16iUcdureqp1eb7nmOh7e6ZwIf9_6riQ-h5rzYR4lOqvkIxSNFmrNHROlMG7-qTvKBc259CO4z7hvQvd7Qj2mVgWl_SOY6pshalDYPKHUAGR2EkuJnDRHUCEdk8R50pH0X_sFxNEXS2KsRglx7lXbrIKocwpJJXLv9fpUN6hwqNv3cO6gMrmIBvS9EQr1X-CNe684DQOQWv5QIzz8l9bt3AhzAzbTahkdMeA2YXnC86_BB-LOz_Pcy_UZPe5uKLoxZ7QTebeLeUM36lQco7eLSTeIQXQosZeOYEqQoOaiaMKOE2-iQM0YqgyMa9QsE4oLyeQ3QgBFIAArOaKEBAJINZLABpHsEcL0CiMaPYM4M4MgQQFZEcD5LAZ8EIj4FgTODgP6j_jrtHjarxFNlMInnZpIeganqSqdhnpdu5qtnngBAXoyn5uDupITmKEQD9iVn9jENrJIMhC8EjvtJZixNLuWkWlQsipJDNhEDMIpNluaCiMavziTtTi4TQW4QQB4cTq_voBkIpPprQIZoanThEEQD4dgOaHQOgIERzmTmNL4QkUFPfsjkLpNMyCoQPkPlLqPlJNlo2kWj3P4LYEsIhKMJCngNONsBPrWqvovpfsPrmsYKxPAKOIaDQSijyDmtlopOnKDiOh0WhLsi6IJokoMoXpmHajCJUIMtlq8v8nYP0T_kQGgOQugBMFcEpCOtlteBUfcAnMcXNH2FgDof8hGB4McStLkOGJAM6IsAMTQRokICMFcNUWMPNFFOwFcMhEdFDC8T_tls4HUWgNsFcHABCagLsL8f8Q8UCc8SOjYagM4POGAFcGiXYfeiUapv-r2jWviU2g_rHuIZYfaFIfZnkXcGnmdjRJnhVpIBtkVqod5rMc9v5sqqeNwhKAUPoY1oYQDq5gFAUNFlZi1JsGrhHjDqNsKcYVri6tkSLqyeLuhGfqqtLsADMKSCSH2IkKSAQKSPxn2B4KSBBviCDo0VPsjirtKZ9rKeHiDiIQGi0VfjmqyZ2ucbyWKTOIPnLrKfcYCTZsCSOqyYTs4QaWwfNL6fyf6TMIaVaZHmwZ2vTGmjqrGaOHyeQAUIPsacmdrqmUiaGSiZ6fOjOLznTJ2lgDGSOG2n6SkIPvqVrntLmjqp2gIHWXGbmQmaaa2cWSGU8dkOGRWSkCztEZ2okN2dmY2YPkmQOT_h2WaTOQ2fGU2TMOaYWW2WmgCY8WGeWZajOFTjpjWauTmXmepIGS6cWWSOeXOWSNeSmUuSkUOQedHuScjhIdZrZvZmqehPSYoZVO5jVi1tQHdmoQyr5lyeDj2QKbDiYUYYDmCr2SkBKcqqro6daQhf9oqbKcqb3lNH2Dtq1uhIPhqW0dqTVqSCRdQHLkiksKTj3CINEUsMkUsLhE-TDpPgBS7phers6ZHs0Rfh6T_qBXVp2n5EScRbVkRX2m-WWXabmk4VcE4T6bOeuZrgxduYiQpSOTmqTlcKTupWuahRGExTpXucifpT_lEQzqLqziZRef6XZUQFxcGfuYpWmskVcMkU5XOexZZSWcOSCTmrhNImoFcIJacnvLcdrDgLhOwF1IWSeLFR_AlferhJbn2olfJZ5TZTqpkXHt-dSdVrRf1hVoBedkyXcJIPtuyQ9hoTBTFsAHBTOIKfaohSKSheKYNhhQ6erh1RRAqYDkqT3sLkRfVfkRRYUajpBG5Z7PqUQEmV7N5Kabxt5JaVrjabxUpfxU6a2cJbbq0S_n1lcLKFmaZXmQta2bpflaFbmn1pGeddOS-Zdc5U2cte5cWV7PeZpatduYOfdSOn1lWZzkQLWW9fWR9RGBDd9S-edV2VDW1Z9f2UGUDdZQ9Tqn1hOfZctX9WZV9YDQjZ7B4ATddVuYuRma-cDTmn1ieSkRDeTf6XDcTdTedeDMjRpYTVtejSTXpQ9UVRSQnjZknp7MatOrtc5tVUoVnodnWpBT5k9syi1fEDMH4ENRml1cYVQHvCvOhdNvtdhfKdraNfhX1dNuMtJksFMUgiQrMCENiKQprXDgjqji6tLiHJYJkKjhwUQHYTjqqpXIpKEGPAfDrIEcvCiKEbMC8OWhFBkeZtLrbaMHVFiAHQ4QGlbZUQGvJmZrxCqURfLeRRVpqSPnNW0bukHCOq_COjBpzAccBEOiOixrTIQCOinSMCOipqSUpSgSDoajtZVXxQNQdUGUde7i_j3WUQMU3dRoaHPRFOcVrqlZQHFXWgKjAM4HELAHiYvTAISVZaWQVbmq2kQm3SkYnOcYAUHDNCHkHBJKNCnN0PNO0EbAIGTHfcFe-Wmq3Xzt3aRN7e4HAH7atLMHAHWV7T7SA0KP7bMPeq_P-sWa_I_ZJM_XWW_fKjxPzbTT_rrUKFcPXdkHWWrX4NFfWqRFxRQ_RJXkQCJGGCkBMDubmoQ6bDkCNGgx_IyFDSvXnDg5jSOhmjgBGJ3ecZ3WnfALiZ3Yfd_c8VHoVZ-RYSLb-Y8qRHIagNLTRLhWbSDvnlBcrS9i1erhiTkagGeAIEIAIC7bRLKSY3VgRRNcyEbUeNFWXWvrPlrtJYbivZiGvR_G4ygR8YbAolYLY1sHVuY5Y8tE7ptMVZSZBM47rFVTRJsW7YDjSl5o1dBSrQFtzrvt0KNuFnk9DgbS_MEZYtlOtD1t8OU_YJU2GKUwcqktJtU9nUjq9pAAkNBMai6IU501AN02GAxFVpwDAFFFFNDBKLsIUxAGMxM1M4053fbcioU0s6Qo06wLYKEC4tDFwJgOYIU5s84gkIkLs52HQJNvE20aHrXsOgGmERkHU4tHQIam0ythQoM_oIarM-M5MzsAJvksQqQoakc9syc2c_s_nRowoedtoyYUxAQArRyU1QwNLkICIHwqFD2pJFFCZONaYxOP8oTtBFgBGF0EQG42i6sWlOSz6m8AxnmfsYS0QDgLADOAWOaKpK6a7sdeYAANTktrETjPiYttrAyKOoCF3MjaGUBihwQxD_zNnlE6yivN0PEvDsLeja5tHukXHnHGSSCnEqv73sB8vqsECatHh3WY0SvS4yu6GK4-BxoXFXHytsAa5XnCsYv72ybkuvhJ1FEytniyiSRKtGvdCSTosECqvAyFTOv2vzjRDuthu3Hdxyj_L-u8TGCmDmBGBWB247x9idz6CuBpDlSogFBLCnL1DtAkEADsAApN-mgE8q4K6GaERRGEpDgPW2-OwDm_2-wAAAI6SZCyjAAMvtVFvUQltlucvQTFvWJltFK3PQgYCDIjLtBNtFADt5tDvul2DADca8YZCYQLsztLuIh2DSgdvMhdsZpRR9vrFmBSvmCwhhGlswCE5PS3uoCD6Lv-FpBuMz5G7vuzvdB9qb39TTsftluG6jTtCTtoUL4iWGx2Yr4u66vsI8Z8b_sXuAd_hwCQwIhdtLDmiPuFSGtRRKRKQSvfnABRsxsRRsVEuUAkt6lXELVBtccAefvfuZCmOZGaOm2inrl6NK1F7cnTYJt6HVOmGIse2Bv-BwDWBIQIz5P17sDiZhARDkb4si4o0RgwnqiOCYDuVtEgfGfCimcRujQC3SVWcEA2eoNod1J9qOfOccOGhcMBM8vu4eeAgxPT4G45qa6crQcBfuTweSRv04cZAzTJVQfNCRfdDRdyhIevhEk5opcufKTYM6q-e6t5dBdKUgdJflTDDWeAi5fHt8aZcv66sydGeVdOeAjctx564G46RwAqd1FtDqfQ51oZPqLNcmdtfsDFTkeFeocpclcBqWctc2cfB-ACBJQEBdtxsIfmj1fn68tyjbemspW-Pr0-qNn3opd0seBIcRiPvd4P4HLP67fu4-NpXxU9UzjneLeAh3eiEbTC08nc0CnJMif4Mrzieck5NWF9dRChZZQyiuDmiaCKcV2kNtuhug9LDehtA0Bxvxqv7Q-uARig_MNlpQDq2E9Y_IQEAk9nBwDRMJRFGpNpRE_OxChLCg85kRtyh4BEeZfOs3EUiOB62Y8-RU-4_3ME84CpMC86xC9s-FjC8hCi80Ds-s8CCc-uko4CToDGo0LmCSTS-AFwToq-spAeCZvI7S6FqEDBAG_w6PgjA2C0BGZm8W9mDS62Bai69pSg8XRw-RCE_E-ss8ZoDuAkeFSMDsDdsGRJiMQe9wBKJ0w-9q8XSG6e-68s962a-PCdF7dtuPaZAoiDJby-8cEkzPCNKnE7DVGAkK-HAM8V0F_-BTChv3Nq_Qa69y9HAxdyS3GkdR9LBMvdt1sciBHW-td61pRyZO-g5mC4_pTp8CDbCZ9CiFTzTj9d-Ik69L9d_Z-GtULAr58p9tseDjjj8UxCjHC68ZBaQ5-YDzDrszh7DmCO-jibBHDjitxX9L90GApJ-g8N8BINgBGOP2Z4Y9vOkoS_pJG7aPsio83OAF7yX4r8BAa_P_jbz_bgDjokAlAVv2v4YD2-EAiICgP05EVTwXfa8D8mQHmcZsurLXAgzV6ElIOspVeid1B4UCtkZuUHowJrSg86OVzGbKj0NSpMO-S_F5gGnP6oAz0wEQvsaQDTAC8A4_b5ggN15KDE-7dANGQLV7sD_mx2eQunnOzGNwmU0DzGoHB4otDGVme6EsGACEF7AlcW4jsCGqmhFQFtKYOpmvbkQY0_KK9I02ADq42UmzKcENS9Syp0wCqVwaExBx2MpokTS_oUwyCWMwcMWU8IGB14xIYAXfHDNUxSHig0hsATIT8gcYEtDBpjEuncEpZFEIcFIdXOz3qYvM6-AgbQdsCWB-A4A14FIA0CiBpAlgqALVkPTpJ8UiiiUNEJKHoQ711caUWwfYKmbf400g-HpjQAmGSRU2X7IMhdBfzl0BIbAn5HggSFcAuUkkHIR2FcDpCChWyWYe2VzSjt9A6uFgelW2EcCR0aaB4ToJfI6pWh7QzoZ-zYKa9qaurDYbmiEbXDFhspJ4YCIzTAiCAtwnWKYzNy9Cjw_6METqiEYvDtguwixvsOzQvlMiaaJQDmnNzVDQRDQpoS0P8CfCuhw6Q2FqyQaqpfhfnVohcJ1TKxZSAQ_YUcC1zVRhhoQUYacHiCDUxAUpZ5htCZgsihAgQjIHjxEJx4ShdWddBhgOHXNCRIOETKBhhKzANcL-Y7h_BVEaYPA6gcJvvjgBigAAjhQS6BY1EWRgt1DqOvR6iDRtgE0WaJPoFQpBetJoTaJ9QVsZwhqD4R0IpEeikMhqeEZFHcGejGMhox0b-hso4j48h0UWtIUiFHhoh1ARiPRxlExCLGQoITjCxSbw5EcRTAPPkzMHZMLByqVHtYzhag9zCkrQisyBuYMhXGOrVDsUCijGQI4kMHIMGlR7kM1RZnFKs0noZ0BGGeADkPIGXRiEvyVzUqqLkLHQ5geqTfMQ8wqZCjixBjHzFsNqZ1D9ebRVDLEQ0iGo0STYVYqEXKaBF1AeQNfIkCsRPYTxBmROv9ypLxj7MS4p5kNDoDzi8xqOT0JJiqSrjJO0uNpoHR1Sd1FINgc5tNENQhx0RiSRSG00CKO8XgW9HhEMVGDrMoWSjOMSoyaZSZbAH4tJpIH6afMaAf4vzNLkIkLCW-bRcSlNEUgnD2x4QEYrjijL7E3SfOPYpERYr2UWJqqQygP10GTjlGYtciUMzwn5ifm8zHYCRK5IdEnE-MAkI7RJicwIAbbU0f4hRSzAyQyIS7L_BbzJBmQDQM8NFD-LPsteY4OZn812B8BVUiHcgF0GCDgEIw5oIgHAHNDyDZUNAGQdiUmj_wgM6UJyS5LclN9o6hseVKP3MwlUnxZk35lM1Elfi1mswKSaiyKLxT7CbRFKfjkkTmgRgzCeCcwmWYZSjEWUnKdqlVTZSgshiahAVOoRFSgs94gSZhLFopTYpgOUFjsz2Z0BEpxeIoq1PBbtTtxM2aidQFolXdnYDEwIiBO559T4JXAXYtFB9EX0rgUUc1GOXYn3NUkikLoJKC7ZR8dpSkUfhxIDyrSBcD4yQpFMKRbM2p4E4HumOoCehMxAgTqToDgg9dExW9K0WY3unQh6ICROwLEKODAA4mgkhMTdI-mWNrpYTUxk8FHCpCTh-QtXjhkeng4gpo6HCkhQBB61qxr7esjDNOHwzKBqIg1MSJ-SWtKRvor4UBws4G5DcqIkmV4wJn0C3RxM6kdNz24Ay5uWpIoqaDyEZCU-kkMmRSJzSv0EJzvHNKtGkHN9kBTQzgVoKZkIi6R_wnNCHF8q5DYZPM4XgZUhInEuZqsrviOgcHbAa-GAMWYzI4EMyhQTQkmYiLJITiMJj4rCUcO5lnCdg9JAKNsE_Z0pqAWTNcSqgsD8Bgx_AK4PwB-DFhqgGQeIlgEESwAvI6wfgPgnyDUAA57AfgN2xTnRzqw_AcoLZMqR1ZE5_AQWPkF_BfTI53Qe_nvESC5g8ggyZwRaGDl_BSwac32SACiBoBc5KgTzHSgblJyQA9_BIvCFmYQMkAHuD6BnKEityAAesjAABMOAJSJ3MbnVzW5uLHAAAE4Z5c8ruV4M3oDzA5IAKKCQRwB1scAk89efwBCE8F5UNAbeV3IMgowj5J8nQAT0R5Xz-AY86edH3vnVzLQkQReSZBXlryQA6wWJs5jrm4BdAkAM5JoE9nqESxIAaSCAFoA-gsgAcoOaaFoDmhP5Gk_gPIAUDyB5AQAA",mdxType:"Playground"},Object(r.b)(s.a,{as:"h1",size:"xl",lineHeight:1.3,mdxType:"Text"},"Extra-large text with a smaller line height"),Object(r.b)(s.a,{dimmed:!0,as:"p",mdxType:"Text"},"A dimmed subtitle with a"," ",Object(r.b)(s.a,{bold:!0,dimmed:!1,mdxType:"Text"},"non-dimmed segment")),Object(r.b)(s.a,{bold:!0,as:"p",mt:"m",mdxType:"Text"},"Bold text with some nested ",Object(r.b)(s.a,{bold:!1,mdxType:"Text"},"non-bold")," text"),Object(r.b)(s.a,{as:"p",caps:"all",mt:"m",mdxType:"Text"},"this text is all-lowercase, but displays in uppercase"),Object(r.b)(s.a,{as:"p",caps:"first",mdxType:"Text"},"this text is all-lowercase, but is displayed in title-case"," ",Object(r.b)(s.a,{caps:!1,mdxType:"Text"},"(unless overwritten)")),Object(r.b)(s.a,{as:"p",overflow:"wrap",mt:"m",mdxType:"Text"},"OverflowWrapWillMakeLongWordsWithNoSpacesForExampleUrlsBreakIntoANewLineInsteadOfGoingOnAndBreakingOutOfTheirContainerWhichUsuallyDoesntLookVeryGood."),Object(r.b)(s.a,{display:"block",overflow:"ellipsis",mt:"m",mdxType:"Text"},"An overflow value of 'ellipsis' will prevent line-breaks and cut off overflowing text with an ellipsis (\u2026). This only works with \"block-level\" elements (e.g. div, p). If you want to use it with a non-block element like `span`, set the `display` prop to 'block'.")),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(o.d,{of:s.a,mdxType:"Props"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Text/README.mdx"}}),c.isMDXComponent=!0},"./src/Text/index.js":function(e,t,i){"use strict";var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=i("./node_modules/prop-types/index.js"),o=i.n(r),s=i("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=i("./src/styleProps/index.js");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var c=s.d.span.withConfig({displayName:"Text",componentId:"e14vha-0"})([""," "," "," ",""],a.b,(function(e){return Object(a.g)(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(i,!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e,{textAlign:e.align||e.textAlign,fontSize:e.size||e.fontSize}))}),a.d,a.e);c.propTypes={bold:o.a.bool,caps:o.a.oneOfType([o.a.oneOf(["all","first"]),o.a.bool]),dimmed:o.a.bool,display:o.a.oneOf(["block","inline","inline-block"]),fontSize:o.a.string,lineHeight:o.a.number,overflow:o.a.oneOf(["ellipsis","wrap"]),textAlign:o.a.oneOf(["left","center","right"])},t.a=c,"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/Text/index.js"}})},"./src/mixins/index.js":function(e,t,i){"use strict";var n=i("./src/utils/colors.js");function r(e){return"1px solid ".concat(Object(n.a)(e.shade,e.lineStrength))}var o=r;r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var s={display:"flex",alignItems:"center",justifyContent:"center"},a=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var l={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b={position:"absolute",top:0,right:0,bottom:0,left:0},p=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var d="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",m=d;d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var f={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},u=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var j={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},A=j;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return p})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return A})),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("./src/utils/units.js"),r={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function o(e){var t=e.flexAlign,i=e.basis,o=e.grow,s=e.shrink;return{flex:"none",minWidth:0,flexBasis:i?Object(n.c)(i):void 0,flexGrow:o?1:void 0,flexShrink:s?1:void 0,alignSelf:r[t]||t}}"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,i){"use strict";var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=i("./src/ThemeSection/index.js");function o(e){if(!e||!e.globals)throw new r.a}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var s=i("./src/mixins/index.js"),a={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function l(e){var t=e.border,i=e.theme;return o(i),a[t]?Object(n.a)({},a[t],Object(s.a)(i)):null}var c=l;l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=["block","inline","inline-block"];function p(e){var t=e.display;return t?b.includes(t)?{display:t}:void console.warn("Only 'block', 'inline', and 'inline-block' are supported for\n\t\t\tthe 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS\n\t\t\tfor more complex styling."):null}var d=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/displayProps.js"}});var m=i("./src/styleProps/flexProps.js"),f=i("./src/utils/spacing.js");function u(e){var t=e.p,i=e.px,n=e.py,r=e.pt,s=e.pr,a=e.pb,l=e.pl,c=e.theme;return o(c),{padding:t?Object(f.a)(t,c):void 0,paddingTop:n?Object(f.a)(n,c):r?Object(f.a)(r,c):void 0,paddingRight:i?Object(f.a)(i,c):s?Object(f.a)(s,c):void 0,paddingBottom:n?Object(f.a)(n,c):a?Object(f.a)(a,c):void 0,paddingLeft:i?Object(f.a)(i,c):l?Object(f.a)(l,c):void 0}}var j=u;function A(e){var t=e.pos,i=e.position,n=e.top,r=e.left,s=e.bottom,a=e.right,l=e.z,c=e.theme;return o(c),{position:t||i||void 0,top:n?Object(f.a)(n,c):void 0,left:r?Object(f.a)(r,c):void 0,bottom:s?Object(f.a)(s,c):void 0,right:a?Object(f.a)(a,c):void 0,zIndex:c.globals.z&&c.globals.z[l]||l||void 0}}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var O=A;function g(e){var t=e.m,i=e.mx,n=e.my,r=e.mt,s=e.mr,a=e.mb,l=e.ml,c=e.theme;return o(c),{margin:t?Object(f.a)(t,c):void 0,marginTop:n?Object(f.a)(n,c):r?Object(f.a)(r,c):void 0,marginRight:i?Object(f.a)(i,c):s?Object(f.a)(s,c):void 0,marginBottom:n?Object(f.a)(n,c):a?Object(f.a)(a,c):void 0,marginLeft:i?Object(f.a)(i,c):l?Object(f.a)(l,c):void 0}}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var x=g;g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var h=i("./src/utils/colors.js");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var y={all:"uppercase",first:"capitalize"},B={ellipsis:s.b,wrap:s.d};function E(e){var t=e.bold,i=e.caps,r=e.dimmed,s=e.fontSize,a=e.lineHeight,l=e.overflow,c=e.textAlign,b=e.theme;return o(b),function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(i,!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({textAlign:c,fontSize:s?b.globals.typeScale[s]:void 0,fontWeight:t?"bold":!1===t?"normal":void 0,lineHeight:a,textTransform:i?y[i]:!1===i?"none":void 0,color:r?Object(h.a)(b.text,b.textDimStrength):!1===r?b.text:void 0},l?B[l]:void 0)}var D=E;E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return m.b})),i.d(t,"e",(function(){return j})),i.d(t,"f",(function(){return O})),i.d(t,"d",(function(){return x})),i.d(t,"g",(function(){return D})),"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof m.b&&m.b&&m.b===Object(m.b)&&Object.isExtensible(m.b)&&Object.defineProperty(m.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("./src/utils/units.js"),r=["auto"];function o(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(n.c)(e):r.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-text-readme.f65c09b4c09eb465940b.js.map