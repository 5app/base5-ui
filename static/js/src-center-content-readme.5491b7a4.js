(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/CenterContent/README.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),r=n.n(o),l=n("./node_modules/@mdx-js/react/dist/index.es.js"),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=n("./src/utils/units.js"),d=n("./src/styleProps/index.js"),m=c.d.div.withConfig({displayName:"CenterContent__Wrapper",componentId:"sc-13673lz-0"})(["display:flex;"," "," "," box-sizing:border-box;"],function(e){return e.height&&Object(c.c)(["min-height:",";"],Object(b.b)(e.height))},function(e){var t=e.spacing,n=e.p,o=Object(i.a)(e,["spacing","p"]);return Object(d.d)(Object(s.a)({p:t||n},o))},function(e){return e.fillParent&&Object(c.c)(["position:absolute;top:0;left:0;width:100%;min-height:100%;"])}),p=c.d.div.withConfig({displayName:"CenterContent__Content",componentId:"sc-13673lz-1"})(["max-width:",";flex-shrink:0;margin:auto;"],function(e){return e.width?Object(b.b)(e.width):"100%"});function A(e){var t=e.contentWidth,n=e.fillParent,o=e.height,l=e.spacing,a=e.children,s=Object(i.a)(e,["contentWidth","fillParent","height","spacing","children"]);return r.a.createElement(m,Object.assign({fillParent:n,height:o,spacing:l},s),r.a.createElement(p,{width:t},a))}A.defaultProps={spacing:"m"};var g=A;A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CenterContent",filename:"src/CenterContent/index.js"}});var u=n("./src/icons/Android.js");n.d(t,"default",function(){return O});var f={},j="wrapper";function O(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(j,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"centercontent"},"CenterContent"),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"CenterContent")," component to center arbitrarily sized content horizontally and vertically inside of its container."),Object(l.b)("h2",{id:"usage-notes"},"Usage notes"),Object(l.b)("p",null,"The component renders two wrapper ",Object(l.b)("inlineCode",{parentName:"p"},"div"),"s and is meant to be used for large components with an unpredictable height (e.g. modal popups or headlines in a banner). Don't use it for centering an icon within a circle or text within a button."),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"height")," prop to define a minimum height for the component. If the content is taller than the height specified, the component will grow accordingly."),Object(l.b)("p",null,"Instead of defining a height, you can also use the ",Object(l.b)("inlineCode",{parentName:"p"},"fillParent")," prop which will make the component grow to match the width and height of its container. When using this, make sure the container has a position other than ",Object(l.b)("inlineCode",{parentName:"p"},"static")," (",Object(l.b)("inlineCode",{parentName:"p"},"relative"),", ",Object(l.b)("inlineCode",{parentName:"p"},"absolute"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"fixed")," all work), and is not set to ",Object(l.b)("inlineCode",{parentName:"p"},"overflow: hidden")," as that could lead to longer content being cut off."),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(a.c,{__position:0,__code:"<CenterContent height={350}>\n  Hello <AndroidIcon />\n</CenterContent>\n<div\n  style={{\n    position: 'relative',\n    width: 200,\n    height: 200,\n    backgroundColor: 'aliceblue',\n    border: '1px solid grey',\n    overflow: 'auto',\n  }}\n>\n  <CenterContent fillParent spacing=\"s\">\n    I'm centred in my little square container, but if I get\n    <br />\n    too looooo\n    <br />\n    ooooooooooooo\n    <br />\n    ooooooooooooo\n    <br />\n    oooooooooong,\n    <br />I just make it grow.\n  </CenterContent>\n</div>",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,CenterContent:g,AndroidIcon:u.default},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ7H0DJHD0TMjVldoPTgARyEkEi9AEciQJfFVUEI9V2AAQQwIQuAaXQsOo2j6MkWJqDgSQ-PQAT0AIiD2EDSURJNTV2jBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZzsgAWFz2AANhctz1jAYCADFvWgRI7P4ZxDgRB1MBgoR-CWIhqEoOBPIRULq3CmhnAgXDLnYABGXz3PkLSdKmHi5lM9gIyg8gbCgOTgnkDlTLEZroxkdgUWMmBuGAPDDJGuB5C3GtgDa6BOvMAAyZbxkSeZKGaBaOrDUzuDM9owGQyUBlQdp2AAfg2RawwjHqrh2paaurKQZCrN8zBhbjMDAMIoCme7ev616GuXasExUggcAizIUivAhZprVdSJY4CXU2CAUkIMakwAVnsmaV2RgAJecoGHRhZPkoTmU3Yna0Y1HWP0JGaxjVgGYsYbYDGiyIeRmtBXybtbPUuCYlYGB8sFwWcXQCYrgAJns-z3Nl5HMexghldV9WNYsDwJW2RC2gwRwKbLOV4liGAPCgBkZYN9gvAEKc7PKgK4EoKAuFSLpEidg3KClgQwApkY7LCCIg8F-QXtltnkcYJjaDRiipWgKBoNcMMphyiUCj4EA4HELmawadpZQRGguhyNB2CIZJfZuWAhoAR1CXPul0AhXDQDIlg8cJOGaBoR1EAXZcYDwjnpqfBYiYcKeEYRy4TWf2Hn529lXvf9_X2tN-35397PteF-T4-k8F8_V5nfWDZnuexHH9Q8mbVxtm6cdTZGHBy5SFTmRdGNAb5vVjCuKQUMYZwwRrNKQYMPpmC_CXcSwD05sQkuGDQWgKCgIMGBLi9ooZqXlGaRSRFUqUBmJYDa8AyH9hoeaIy8w4CUO4jzbISx5pwGmmQrh6BzSfHXDQdhHFbTcWAC5SwlAxREEwlRd0HpwjQGkshF44itLEMgp5TsBQ0I0P4UomitEjKwEMXcP0Zg6rsAAOqZDmBkJqgicAyGKGCAgLAcpwVioaWAWAJEEAACTSN6p43gtx8AwCxoQdgq0IkEDOHADx_pRDpKIGgc0WtCBXFCTIuRMAiARhmNE2JBAOTyCCZE4oL1PGhJagXcgBRSRLBwO0kQmwBCWOmj1bgVZImRL0d5FIPSWqJKGVcJpBR2AAB9Zl9ncoM9J7ScCdIyD0pZ6Tup1LSfk8JaShk4EgAkHOed4nLUSck1JyyhnZReGdK4rgPDewdrQap6SIgzCuPZD5kTYBgB1uwX5EyCDy0VhVVWABSP5xAsk5KBeVaFHzakRLSdUc0-RcIFCuK7Kc5pqgcWKBI7SUliIEJceY7Ibi2A3OIK4LA5pwV4DyWE_pzVSnMqun2LAsj5ElJwMyh6cokX2Sha-KpWlInGHYAAOSCJgHI4UjgNDPOVcqQ5Cw0H7uYOC1kf60CIPca4tx7iPBRMbEOGRw6jA-JESQrhJC-SVr5AAnL5JMSZXXsB5J48O2BMV4GnNsH5JLpVGCsASPSDCJg91RjMqIzxyBXF9WkqyNknnhEoESklx1tKiwcMzAhJT0I9X5pE2x5b0m930HYrgEwtmRJOdnbuNBG2xvKe26ZD8rntSWu21Z6zunoU8ZhMyTC7hhtRKOPo5goyHIIIwBxsxYSgubWc_QY112toIHU9JkSEVjQRXu5Z3aUhjTPSe9JwBB2xuHUYq9Az92LpZpmZlY0a00DrQrPAM15p9rDPIIBBCn2RKkMupxAgn0fjMLsjBr7oa_X-gQHpTUq1nrstaaqJL4MEJwBOuhbC0OeM_QQb9ELLGEfgDgVAoQiCBAEFs7decriUfoXAHAXgfZbIRaxgcVGOO0fo4PTxGHqG0PYzgFE04UjYa0t9e0SHQgA0LcxBDHFUF0QYpJVA0lqaUC4P-PBQEM4MB0cpTUZDTSKhJeZ5wrBZwmI9NeCk9mUjWNJbp-q_EDPoFpuYMyMDlUjFzugMUYAIwlqMUsLoYA-l9SrZWrFMAlhUEtm0jpd6eljr7OhKdXQCCzpBssxgbnQU3sy107LoLYtjVi1eyJrAIAwBGNebwxdHKOXKgADgqt1_goL33AGSw1jt2sL0lRgKN5tH6fZCmm1nEUynRr8BgFLVATh0ADYXRW32Mwlu81W-tzb23lmgfSXWaIeIeD8D1AAdhwATcqig8Y4HsuVJM5B7I4Eqs9zrOAlaBSVooc0337J42BTgJMgUkwg--5VV1X2fv2WB6Dt7rrvXw7xqj77SseuQ_KtjuHUO8aBS-8Tj7vW0fg-J0rPGd32Bo8JzjknZOmfvYp4z3HSsWcI651DmHFO3XkCZ75P7_O6eusUGDt1_P8aBWlz94X1PXV3cV_ZDH_PKp40V3jqn8PfI6--_L8n8Oky9Zl913X9OCeG8VybsHqv1ea9x4TxXfPjek_d26gAWnqJFj2Ucvbex9pHv3peQ8B8T8HkP5dC8R47tXKvMdK4V2jvXtu0-e7J2rJn5v-f2TdbTm3ous-s5F47svGr09u9F96tHce68V6V-L9PQP1ey4b4Lg3iP2d_fR_XrHwPXf65-0T7Ppufv57B3jfvdOGdD_t6TsPHPHcp558PpXKfoew5737pMOA3VS7u2HpMav_t06qmDu72_Z-67P0jjXVuscW9T_b3yC-3_fdJ91qAasD9epKyT486BQF6-TP6H746i676PZ3Zs6V7u54yj545X4A7Q5y54yoFKzQ7N6VQR7p5IHR53aj6N6444Eq5J4v5a6-Rl74zUFl706BR_4g4AGupAG57c4aoy5S5o5i6Z7E4_6P6upW5M5IGR7lRl7YGf6kFoF3Z-7lRKw4AY7H7MF4yT5A6gFo5IFq7V7PblRQDmh_Z_5vZB6KH2SBRqFqy46BTV7cGK7gFKz0GK6BSBS-TN5P7u7daOE14K6453ZJgYG-EA7-G4FX4S6EEq62Gs604hEUEU5eFOG8H2QBGl7E4uG-TGGqyo5mEWEGHD6ZGF6KA5GWG642FgFS7fYOFOHfbpHuHCGeHeGu5BFKz-GBG66xFm7n7hFVSREYHPbp4dHo4iHw4JGpFJEpEG5l7pEGFg407mjFEGF_bN5eq-GM79GVF3YM6GEg76G554xQDP7yHfauqBRW4H7lQhE1E9a64JHlQ_YKHOFwEVSH7dZ6E_bdZI5n6K4EwQ7f54w653Hg6v7_EAk4AWF3YGHdYh5G7k5aEu7vE66GFj6OF_E9F3HgmfGUGB6-SQ7daBRYndbCHPFur9F3E9YzFgm16An2Qn7U5i7R74kF5R5M744y6w6iFuHX6Ilg4BFm7slg6E4E7-Ed5ME1EuqKCAmE5I6YE8Gu4Q5klKyylQ7YHPF3bOrE5JjYFI42HD7PHlSuowFIq9Z3Fqn96alJjGFA5onQmP70nU5lGO7DFvZPHw5qnR40GP6BQVFvboFg7dYwH2Tdaf6F6GmYEUk2GgmqxyH-6vaqyw4Pbdbg7MGsHsG66A7lH2FQGTHfFwF1EQGE7IEXH36aHZ7Fm4FfGOQEE9HX4kF37p7kGOkU5iFjGe6JHf5wHMHmgpmwnc6gGW7E5i6f6VQMF3bsHo5YmE6_EA54H1m8kk7rFoGfZm4VGR6EE1mx5e5kFLnjmIFTnDnv59lf6wFKw-78BbznZSBubQYcTdQkr6aCS6A0o-LwSyrejdCHT3l-a6Aeafn-ZuIwB_TKYoboTEZpLJZXDXEkZzZWztC9ACB5xpZCj5SSr-jOhYBUJKYqa_m6AaZKBoIMSqJQDqKcQEAcYATaCkYMC2JCAiARTATFSlRNQSG5onQFpdBECyLQRYARjsVlpQVeYThFJ2BmTsVSZvDSYFARhqyCVEA4CwAzgFjmhOQwZpIFZFYADU7FdgEaNFBAdFRUk2N5Wkeap0zIBSYoEsbAMAJSJILsFI-lBADFKWuQJFr5R4fFqlM6Ag5gAU10AUkgdlcAMADlTl7A6lLlLwbl3QVwyEv0A86ARlqFti5lRSTUAU7KKVllUsNlMWz4IVk2Sw8o1oKlNiZKPKsiZ4soZkOVgV75E4eV9Fk28W5VhSWV1lLkQ8FIhVRSr4JKCmkEul-VpUMWRSnFtlKVRApIvKlAlVKFmm4kXCPS2CagRmgElFRCSkeKGyIFTmkgW196ViHE5m_qWAqGu1J1PSHC9owyBiO1boNEkgN1M4l1R1SkwsDy1AZ191Ho71osL1ki9o6aaAX12EHoQNqA_1nESktAWAwFRiZCHoMNcNh18m6FUini-1myfqASWNaST1oy6EWyv1Z0uNkS4NpNNw2AyNcAcmqA812mOkkgLmQVbmq1FFBCZmSkbGRGJiE6LC7GV1-cVKiw5kySii91giwijo1A-gWiqF5m0i018iU1FVCiCNKiMQRFkgGipFHmtiOmoVZkPWJKtibmlKI06AUmDmOA0QqIcA4yqlPsZU7Q_Y8A-g0QZ0yFHIdK3iZI8EVwaAvszoBKFMOwQSocMQcQBhNsKQYsmSnYsAU6J1PywKIQWaQSMqAAqvkDONCEao3F_DGpsJwMJHAFHYiBTLnfmHiLGkNH0EhBgDMoVPnJNj6ryGksyhBUUkErxhVN3VKiEmyudqUmegADIAVTAJILrXKgrg3mgApAr5JSa5QFDj2AooXLKop7JD2JIj0r0zgijlIXJXJ8J0rLJz39Daysp72FwH3lIb3pJb1-rASYqTbX0HLLIj3l3sAACEB0qdfl01lVEYBtrdEaX98QMAwqE1IDugTllSU6-y_Su9OArAPEvssdx909p9oKWdQVmqMdtIOkeYuIdd8FZsIyLsTgyQSNbdoKxN1AVwXQbVsKXyVwTOSs_dC6W9xKWkrNmF1NoFkSZdkDEFtNZgrNBG7GQjpF5dfGNCAmNGdGDGWyaDGDYs3N1GXGUAWyY9E98jEmbCayzoOoYAVGEYAA2poxxhJQ_OJooyZQALoci6P70pCH1X32OSYy2mPmNWP8aSa2OyZeNGNOMuOwZ9Vo2KYAXIbsBua4XKBaaSCLXoR7VChTg9Js34KmYbVULADxAzB-Di2g0a1qIAiWxy0K1tRbDbDWBFJTbq3a2a3SSxpHh61lX7UADSMAiQwl5knibDco-1siMw-U_y-jQz6TGQa9L4WyXgNwkQdk-1bWCzWGnil9uSkzbsGQHjhAyFLF-aZ0VD2zB19tE6cAHlFaZVwA-1SwrTDT46eWA91TOwdTR4EY9zJVaSEAzQEYP9XTPTcAFj-1zj_TC6al3l7AtGCQQSuykSEL5gVakSwLUzAg3TvTKLJzjjjjVwxQnsPgryfsoSBTfg86tyNwmwR4UmfgmA7akS9zclA8hkYYKQEwiSlSxQWyKFuy_VxwMTQFxzGTTzdNeFSTKTRikgF16EWTJmbEnNeTE1xTokpTWtOtctX0UTUwtihDeoswMjgzR0ASmKfcwoYzBAC9dkJ1xrucszJGqMdkNcacZr8zEQRAlrRrdACkWyGzQKhrAanr-zxlrFRzUrRiUWdwlzSS1zJ16DWMqAnV-QNN_sowSwcAQaaA2wOW5z-WXliLiSMqYoQVUoASmqqayyydcoG2zoZr4aqUa2LoVqYcEcMypGakMIlQTdJbLwQldDC6mSqA5GLKwK7aJ1zNtguK_gtg3KMDRsibwqsVAF8VI7ASAA4kIJHMm2MNdBqjFeGJAM6IsIkidc4Om6gCGkNKe7sNu-wLu3FQe-2oQ84POGAE8uo7qzMBYzG-o443Mgsl-3G1y4lRqxhfyypqG5OigqKwtVSktfjZk-Rdk3K7k1IqeM4G40q8ok02U2eoLaLZsK85Sw005iqy04Rx5iZQWnB-hOGxc2C1cwJdIlNaSIkKSAQKSIxn2B4KSDo_iPU1m8KyRvh7U4Rx84R18_C7m3R-kvjVcDMNyqh24yUnc2Jzey5Xe9wrvV5AUCM7J4kKCtdAp7fSkCUix7x-5aCrJ5POSwZ6OGh0ZyUmx2Z1AxZ2p4u_e5p_onfZ4y5PpxPHZ80jODVZ8y5_2L54ZwF8Z_2Mp_U59M-re25xpwuvjSs667p2F7Z4pzMKZ8FztkCjMB4Ol45Zl1x057F8svF_u4l5_VpzODM7J1gIV_55JR1aVyF1AI15lzxzl-SxV0u6OkB2hSB4BSplR0Ygk_hckzB6kwwxDdKwh7K_oPKyhxl0Zxh6Ylh1rTh69Xky88J3x404RaR_U-R8G2Zfcn9dR-c5G5WsLKSOd2dHczQksAvUPCIK6zFp2uwLhNF0ePx2N880J289ZZ8zm4VpC0i7cPd4w32NlL-zDyLEc_Mq55V4e6hcsoM18vJytxFx8096V6pwuyj-2ha-wAvVj0V_Zy9_j71-5wui64s1Q6s-T014F_T5NdT8j31-C-Ukw0fTZxTzjz6z91AwT3u1z4krhA0DglcKJ_UyeBTEbERTgLhBck5_L5QIrxxrhBY7hKC0jyr0j4T-L7ugN7ywI_Dx9bN_9yK4k9ByNEteTXN8ZuteBHk-FwUGt-0ht9JFtwDZBLt0D57yR5IPcyd4c8yI72G1d1J5Wuz0QLZU3BlI50QBx_RhlF14R39xB2j0koDyJyDwPQi1J2TbnBmo3Mz4p-z586L-p6j-faX2gDp43Hp7l_zyz8Z4n617l1cEQFZ8-m35X45913F5z7T_X9ZGgLs0CvHx1_Z_H8L2V-kj3wILPzjynwvy50b2Pxkg36gClwz03Kv5JZ38P-V43AV63355XyV6f0v6P1VzvxP6gHV43A15f-74F_P13z143O1-_9j8fwz4xdN-Yvbfty1RpDdYmkfbPvTUm729UmSNeDs7w5rId7Q-TKAIU1cBB9ve5TIUJUyUj_oamgfA7s0xD5kdtuUicmBADuC2AlgjbG1CMAgzYDMkWANAOq08y6QkalgTILpmVREB32MjeIFADsihBIMcQIKma0gACAUQDrWYC8BtilRA2SVMqvQIjiTQsQAgsyFWioE0DjUEPX2r4iWah1tgNbaGO0h0GJsuWWyEYI4iuD6DbAftPxO0HtinATBA6DpKHAYEQYrBETINuH3MCIDLupaGPtc0SReAOo7aOIHcHbQsAiAR4OvukmbpOVieA8MmJ2kSSqCU2iSJGrG1jpLIF09zLlmlQE5pIA--fMTlOlgBTBH2VKOAEEh-bNQch6jSNpEhqFTQZGyyAwf7SGbGDTBkSTuiKmhR9DKasNXIfG0SQP04W06MHnmwXSrI2hWIEdo1VKhXAkhrda6Ay0xAa94gHGVhDAGcDl1P2ywmAD-xp4P8m0wEOxDEk8bhCcg10ZwT7AUg18EuCQ_5KkOuGEB20XAngXAD4GPRZgdgDYVTW4HuBfhQofgbMAsZRC4Apw-_q8KjaWwrgsQ-IdyhJauBZeVLJGsLxwBI0tQ_IZlnQFZZ4B52oA84WYJwARhMhW7PYJ4LUG1D32FjKkbCK37ZBwmaScAahTN6gcpggQ63rAMO64DpBMrF3uZjagyhXAZCMUZEFcDmhNA7TASmiKagRhEKHHb0GbAqQf1c-4o5UdBUX420MBpLNUchAqSJIPgfCe6CbTKosClRKo1LNBX851V2geAOAFAFfDAwIws7GABbCFBLAjRNAeLIJ3FE4AWBHoikN6I462iQgmUY0XaMtgOivmtidALnG_gBZG4EAbis4Lgg7A3IJoFIB4F6q1QyqGDQgMEDMghj2gIwGwLQBzGdA8xBY5QQJVsBahkxTUFUcDClFRAdRlsDkHJToxoB3ACIIGIwEhweoOI-tOAKPSPpmQ2x7KH-k2OTFdihQXzR4BZhmEhAtUqIfwDEFzq0M2xyqdcc8HWx2UdgpsWKoWAph9BCxAlXuJkF0jVUoK6WTxEmIEDbBwxTUWsUbCkpLBpKP4nAHdg5BmtixBAN8YdErHdtNI74d0fOJfGLiBAPUa6EBLfFIjkx4Y5cQFV1bfx1xbYiUR4HHBATnEQoY4MmJEyoAVxmAeYI3VzrMhKxo4LpJwDHB2AJRz43YIRKAnnihQV43SDYGxhsTqqkYv6JKEIlmR4cAY75nAGbEwSVR8E0nuUjoCwSlgAkiIHBNU7MS5J_Es0EuMiZ5M0RGUdMUsFUnxsZJ2sOgHaNrhbilg3EvAEBKWDQTtgNkicffXG5JMBRDLebiKIIFA8n2plVAGeHIYCBsBnkrYKLDD7eSNgRA8oTFyk4NC_m9zOHj_U2EK8dhLQiluuyhYtZI09TLyaLF8lCABAFo0dLBggFSIyhfHJyeJAFFnphRKA13lIkVYI1taJFdgclX8BwBrASEbGAADV4gDIPphY3aDRxKA7QRxgc1Ckf9jOabdUI4Fpb48q00UiacKCmnvl_6LInIEj3mnATAQ-0MyNCygBw91pi0raYaB2Ei8IeRffaYCFhYD1opiSD5vQi2gXtJpm0v-odCEwMYLoq0daJtGaDnSUoz0uUEEzdHzJEkP0paYdHsgQTIkyUovg5GsS7orpvzPYfdJBmHT2gr0jIG6NOmScYGIMkqnDJz7RTPIfCNqW0E6ndTqMqgbAKYwjA4z2AfUQwlDMk4gzLp-M35iDI-B-ABAPEAgFJT6T_12g5oDGYkmhkCywqavLYZr2XpGcLGbM-kC8lRCSVyoHIYaaOmhBEVugmMtcQlO2FK8z00s4YAtMBDKz2RhUzkZq3MhjS5qUHBiCwLYHLVsAVUnJjVPtD7V6p-1XDo6zIgAZggu1D2SxC9nnQKB9oCwVO12rBz8BVCZjC6HOpZwN0NAXDs1nVQkxjY9UhOeVCTnZjA5BwWkaMAgz1SqREGXDk1npBCDEgJMLgJgHMC7Ui5XcBIKXPLl0BcOkvHBPVKblqAPMvLKtLcztZqZ_ZWyMOUxhjk7otkqc9OXZM8T5zHEqjWwDXKSBlzOwJkzxK3OwC01YBgU7yXbNwRrVqp5mKGDwjyBeihBRsHYGt2szsQ_eITBhLzQHD802EuHYAED0MRNYpwa3SWiIhlpiJcOa87KX5PqkZBcpHmczKeEDBJj7YXo6Ci4J2D1SgF4oEBbAHDEQKTBI0gtF_LOg0dru1zT0UD1Sy9z2JAga8MYIsn-BrwKQBoImmcqoA3yWfOoc8zKp1Q0QkoUeqcHiBA8mo-8-wIfONhkt0kJSHdCwrMiYKVO7KCHvR10gqj8FrgnUKHH6DlAmo0CjsM8jgXgLjBXC8lp5DzhA91eEssRcYJpqgormlscRTsDpbpI_AcAYhaQtcBpBQU4nZ9EX2EUrJ2kai_QFgr0XkinFNADRUFW8lAsKFR4RxsYsiSrJtFEiqRVwHgDGKH6kSJQIkmBYUgsFuCwxXZOmBmKSFZCpYL4pOGeIbFRfFRYugflCAn5zie5rNi8z0KCAjCqOoHzED_pbodAIDJIHyUhwwlUGLJQNxQXUB8MATIjFoIxpxLCOBjRRmm1mDWUIe4snYQMu8YeB1AQUnALYDFCdwIAdcLtEFLOjGprGayKZTMrmUwAFlSy0dGyP0VChElEyoxkEx4xELUllisqOsu0ZbIMlJy6jEE1mVwB5loQRZYlw3qDcfo3IjKUeCylnQOIHc9pT5L8mWzbe1s9MbbP2oOykOTs_3nwhfnC0pa6YWWgAoIFojsBAolUU1I6aosmoLAI4OyhnropUW5oUJASvkAQUvYPsIlkPRCAGj0RpSBlkMumlMrCOjLZ0ASIUrEiUKvDU2ZAIFb7UypEK1gbpm-DMx_ZMKxbqgPhXGIJaSKt-RmF1qWjrxEq2pamOJWRIuhfiE6kEkIbmhu2RqR6KjCCTvwUQPzRIFLQzjGrmIOaIqdE2G5as1Vu0OgMKskA2yxVYcqVaBBMy6Qw5MjKkXZBsDzzzoWyJGpIutQRw7IYcs1mBNoAOi7IG2GwbMCUHAdvljq1WXtkTZuqPV0kSOTQG9WEI4VotBFQIgVXS0lVOKgSvmqmDTicGeNKHmLGeSvJwgMAIJIMxBSqUeewKIJGz1DSeISenavlWmodWxMa1OayFWKpHnGxC1hgCNNnW6ATAp2_gdcfEIgASjO4GQGhsOBXRJAhotQvYKgD3XMhVUFUDVGWw4FjgYAic5OXwDSTtAy6XQYIJUGajmgjU2SWJFas3EyCQgp0KWC41fXvrLJX628UCirZQN25Zs83tOrDqQdwV7qyddJAnmzBZ1MqktXKuwivyK1qKlVbpGQ1yc61KScednJGBMpbBLsU0NsCZTpMgkIwdJmRtmC4pKN1Gt2FOjo1uwCUlGpjeKCo3saEqZgYdV8tHUCt8NE60VdJGrkly55Fc1DcWt4QYbqIWGlFR_Nw1TBJNtc6TaWJ6D1q7kCPaHs2p9itqgkga3wPXNQC0b60Q7fFj3Q-GIoXIQSGTj2pIx7YmGQUqSqnU6y4z9q_a1AIJq5EZr1Ns8szWJttlLzN57NR2VU1LUmIlNoiZVZxKmBhbWxOmggLhANXS92ASDPqGyrl5jKle2vUpLr15VaT01sTMLW6uBWeg_Jsm8gHBD4S_L9hKy6gDlMIlU1PWdgFrUcGAA8soNPy4FZ1oq2Ed_l1AJ4KOGAUKKwFlsBBbJqqbARQNmK0gdipCkFo5FsCybUKAQWwTElSbYJTsCiqEKUlFitIJG2ik_1dt2wKKnFPO1AtztUVUFhrKKzdbmZ_FXSKaDW0gTkl5ishYknuFxrpYiSR6HNq3FbadFUI6Cokru3ZLJOEPJGq5vkWgLwxKQs9saje0TbEdYQ42KeIwCA6DFoO27W-X8X9cTZI6qYOb1W1o6lFrg8brlG2BXKjM1ALeY7P5gWB-AGS_gFcH4A_Biw1QDIOaB_BkhGQIAfWPwFDj5BqA7O9gPwDBxvZ0o6wfgOUHID9AZgosCXfwB4hDRCIbcfnW3HIkUxEguYPIDMlPlS1ygfwUsLLurD8AogaAVXSoBwRGYLdLOkAORM9bwhmspcJAGC2Rjy79ItugAHp3EzCjumsPwFPm26JCOAKEoFGD1O6-aewj3RzpACE4_xAOGPZLpLjlrlNpFW3b5Chyp6hdK4TnUGmlGyiE96ev3WYUPxp7Q9moS0JEHD2BRI9YJbbBYBejyBNMZu3ALoEgApB6ddNCLbCosggBDUftWgOzs52mhaA5oY3Sun4Dt7448gIAA",mdxType:"Playground"},Object(l.b)(g,{height:350,mdxType:"CenterContent"},"Hello ",Object(l.b)(u.default,{mdxType:"AndroidIcon"})),Object(l.b)("div",{style:{position:"relative",width:200,height:200,backgroundColor:"aliceblue",border:"1px solid grey",overflow:"auto"}},Object(l.b)(g,{fillParent:!0,spacing:"s",mdxType:"CenterContent"},"I'm centred in my little square container, but if I get",Object(l.b)("br",null),"too looooo",Object(l.b)("br",null),"ooooooooooooo",Object(l.b)("br",null),"ooooooooooooo",Object(l.b)("br",null),"oooooooooong,",Object(l.b)("br",null),"I just make it grow."))),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)(a.d,{of:g,mdxType:"Props"}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/CenterContent/README.mdx"}}),O.isMDXComponent=!0},"./src/icons/Android.js":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),r=n.n(o),l=n("./src/icons/BaseSvg.js"),a=r.a.forwardRef(function(e,t){var n=e.size,o=e.color,a=Object(i.a)(e,["size","color"]);return r.a.createElement(l.a,Object.assign({},a,{ref:t,viewBox:"0 0 18 18",width:n,height:n,fill:o,fillRule:"evenodd",clipRule:"evenodd"}),r.a.createElement("path",{d:"M7.501,5.013c0.141,0 0.262,-0.05 0.363,-0.149c0.102,-0.099 0.152,-0.218 0.152,-0.356c0,-0.138 -0.05,-0.257 -0.152,-0.356c-0.101,-0.1 -0.222,-0.149 -0.363,-0.149c-0.141,0 -0.259,0.049 -0.356,0.149c-0.097,0.099 -0.145,0.218 -0.145,0.356c0,0.138 0.048,0.257 0.145,0.356c0.097,0.099 0.215,0.149 0.356,0.149ZM10.502,5.013c0.141,0 0.26,-0.05 0.356,-0.149c0.097,-0.099 0.146,-0.218 0.146,-0.356c0,-0.138 -0.049,-0.257 -0.146,-0.356c-0.096,-0.1 -0.215,-0.149 -0.356,-0.149c-0.141,0 -0.262,0.049 -0.363,0.149c-0.101,0.099 -0.152,0.218 -0.152,0.356c0,0.138 0.051,0.257 0.152,0.356c0.101,0.099 0.222,0.149 0.363,0.149ZM3.499,7c0.137,0 0.254,0.079 0.351,0.237c0.098,0.158 0.146,0.347 0.146,0.568l0,3.392c0,0.226 -0.048,0.418 -0.143,0.576c-0.096,0.158 -0.214,0.236 -0.354,0.236c-0.14,0 -0.258,-0.078 -0.356,-0.236c-0.097,-0.158 -0.146,-0.35 -0.146,-0.576l0,-3.392c0,-0.221 0.049,-0.41 0.146,-0.568c0.098,-0.158 0.216,-0.237 0.356,-0.237ZM12.999,7l0,5c0,0.626 -0.587,1 -1,1l-1,0l0.002,2.065c0,0.261 -0.049,0.482 -0.146,0.664c-0.098,0.182 -0.216,0.273 -0.356,0.273c-0.14,0 -0.258,-0.091 -0.356,-0.273c-0.097,-0.182 -0.146,-0.403 -0.146,-0.664l0.002,-2.065l-2,0l0.004,2.065c0,0.261 -0.049,0.482 -0.146,0.664c-0.098,0.182 -0.216,0.273 -0.356,0.273c-0.137,0 -0.254,-0.091 -0.351,-0.273c-0.098,-0.182 -0.146,-0.403 -0.146,-0.664l-0.005,-2.065l-1,0c-0.396,0 -1,-0.477 -1,-1l0,-5l8,0ZM10.968,3.173c0.618,0.282 1.112,0.676 1.481,1.18c0.37,0.505 0.555,1.058 0.555,1.657l-8.015,0c0,-0.599 0.185,-1.152 0.554,-1.657c0.37,-0.504 0.867,-0.898 1.491,-1.18l-0.615,-1.007c-0.041,-0.067 -0.026,-0.118 0.043,-0.154c0.075,-0.03 0.133,-0.015 0.173,0.046l0.624,1.015c0.549,-0.215 1.129,-0.323 1.742,-0.323c0.612,0 1.193,0.108 1.741,0.323l0.624,-1.015c0.041,-0.061 0.098,-0.076 0.174,-0.046c0.069,0.036 0.083,0.087 0.043,0.154l-0.615,1.007ZM15.003,7.805l0,3.392c0,0.226 -0.049,0.418 -0.146,0.576c-0.098,0.158 -0.217,0.236 -0.356,0.236c-0.137,0 -0.254,-0.078 -0.351,-0.236c-0.098,-0.158 -0.146,-0.35 -0.146,-0.576l0,-3.392c0,-0.226 0.048,-0.417 0.146,-0.572c0.097,-0.155 0.214,-0.233 0.351,-0.233c0.139,0 0.258,0.078 0.356,0.233c0.097,0.155 0.146,0.346 0.146,0.572Z"}))});a.displayName="AndroidIcon",a.defaultProps={size:18,color:"currentcolor"},t.default=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AndroidIcon",filename:"src/icons/Android.js"}})},"./src/icons/BaseSvg.js":function(e,t,n){"use strict";var i=n("./node_modules/prop-types/index.js"),o=n.n(i),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/utils/units.js"),a=r.d.svg.attrs({role:"presentation"}).withConfig({displayName:"BaseSvg__Svg",componentId:"sc-1bxcwkl-0"})(["display:inline-block;vertical-align:middle;flex:0 0 auto;width:1em;height:1em;"," "," font-size:",";",""],function(e){return e.spacingLeft&&Object(r.c)(["margin-left:",";"],e.spacingLeft)},function(e){return e.spacingRight&&Object(r.c)(["margin-right:",";"],e.spacingRight)},function(e){return 0!==e.scale?Object(l.a)(18*e.scale):Object(l.b)(18)},function(e){return e.vAlign&&Object(r.c)(["position:relative;top:-0.12em;"])});a.defaultProps={scale:1},a.propTypes={scale:o.a.number,vAlign:o.a.bool,spacingLeft:o.a.oneOfType([o.a.string,o.a.func]),spacingRight:o.a.oneOfType([o.a.string,o.a.func])},t.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}})},"./src/mixins/index.js":function(e,t,n){"use strict";var i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./src/utils/colors.js"),r=function(e){return Object(i.c)(["border-",":1px solid ",";"],e,function(e){return Object(o.a)(e.theme.shade,e.theme.lineStrength)})},l=r;r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/border.js"}});var a=Object(i.c)(["display:flex;align-items:center;justify-content:center;"]),s=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var c={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},b=c;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var d=Object(i.c)(["position:absolute;top:0;right:0;bottom:0;left:0;"]),m=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var p="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",A=p;p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var g=Object(i.c)(["overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;"]),u=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var f=Object(i.c)(["position:absolute;overflow:hidden;width:1px;height:1px;padding:0;clip:rect(0 0 0 0);border:0;"]),j=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}});var O=Object(i.c)(["z-index:",";"],function(e){return e.theme.globals.z[e.z]}),y=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/zIndex.js"}}),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return u}),"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("./src/utils/units.js"),o={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function r(e){var t=e.flexAlign,n=e.basis,r=e.grow,l=e.shrink;return{flex:"none",minWidth:0,flexBasis:n?Object(i.b)(n):void 0,flexGrow:r?1:void 0,flexShrink:l?1:void 0,alignSelf:o[t]||t}}"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=n("./src/utils/colors.js"),r=n("./src/ThemeSection/index.js");function l(e){if(!e||!e.globals)throw new r.a}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var a={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function s(e){var t=e.border,n=e.theme;return l(n),a[t]?Object(i.a)({},a[t],"1px solid ".concat(Object(o.a)(n.shade,n.lineStrength))):null}var c=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=n("./src/styleProps/flexProps.js"),d=n("./src/utils/spacing.js");function m(e){var t=e.p,n=e.px,i=e.py,o=e.pt,r=e.pr,a=e.pb,s=e.pl,c=e.theme;return l(c),{padding:t?Object(d.a)(t,c):void 0,paddingTop:i?Object(d.a)(i,c):o?Object(d.a)(o,c):void 0,paddingRight:n?Object(d.a)(n,c):r?Object(d.a)(r,c):void 0,paddingBottom:i?Object(d.a)(i,c):a?Object(d.a)(a,c):void 0,paddingLeft:n?Object(d.a)(n,c):s?Object(d.a)(s,c):void 0}}var p=m;function A(e){var t=e.pos,n=e.position,i=e.top,o=e.left,r=e.bottom,a=e.right,s=e.z,c=e.theme;return l(c),{position:t||n||void 0,top:i?Object(d.a)(i,c):void 0,left:o?Object(d.a)(o,c):void 0,bottom:r?Object(d.a)(r,c):void 0,right:a?Object(d.a)(a,c):void 0,zIndex:c.globals.z&&c.globals.z[s]||s||void 0}}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var g=A;function u(e){var t=e.m,n=e.mx,i=e.my,o=e.mt,r=e.mr,a=e.mb,s=e.ml,c=e.theme;return l(c),{margin:t?Object(d.a)(t,c):void 0,marginTop:i?Object(d.a)(i,c):o?Object(d.a)(o,c):void 0,marginRight:n?Object(d.a)(n,c):r?Object(d.a)(r,c):void 0,marginBottom:i?Object(d.a)(i,c):a?Object(d.a)(a,c):void 0,marginLeft:n?Object(d.a)(n,c):s?Object(d.a)(s,c):void 0}}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var f=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var j=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),O=n("./src/mixins/index.js"),y={all:"uppercase",first:"capitalize"},h={ellipsis:Object(j.a)({display:"block"},O.a),wrap:Object(j.a)({display:"block"},O.c)};function E(e){var t,n=e.bold,i=e.caps,r=e.dimmed,a=e.fontSize,s=e.lineHeight,c=e.overflow,b=e.textAlign,d=e.theme;return l(d),b&&(t={display:"block",width:"100%",textAlign:b}),Object(j.a)({},t,{fontSize:a?d.globals.typeScale[a]:void 0,fontWeight:n?"bold":void 0,lineHeight:s,textTransform:i?y[i]:void 0,color:r?Object(o.a)(d.text,d.textDimStrength):void 0},c?h[c]:void 0)}var w=E;E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return b.b}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return g}),n.d(t,"c",function(){return f}),n.d(t,"f",function(){return w}),"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof b.b&&b.b&&b.b===Object(b.b)&&Object.isExtensible(b.b)&&Object.defineProperty(b.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("./src/utils/units.js"),o=["auto"];function r(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(i.b)(e):o.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-center-content-readme.4ecc35228c402e3e86a7.js.map