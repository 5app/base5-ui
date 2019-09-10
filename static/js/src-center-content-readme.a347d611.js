(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/CenterContent/README.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),c=n("./node_modules/docz/dist/index.esm.js"),a=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=n("./src/utils/units.js"),d=n("./src/styleProps/index.js");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var u=l.d.div.withConfig({displayName:"CenterContent__Wrapper",componentId:"sc-13673lz-0"})(["display:flex;flex:1;"," "," "," box-sizing:border-box;"],function(e){return e.height&&Object(l.c)(["min-height:",";"],Object(b.b)(e.height))},function(e){var t=e.spacing,n=e.p,o=Object(i.a)(e,["spacing","p"]);return Object(d.e)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({p:t||n},o))},function(e){return e.fillParent&&Object(l.c)(["position:absolute;top:0;left:0;width:100%;min-height:100%;"])}),m=l.d.div.withConfig({displayName:"CenterContent__Content",componentId:"sc-13673lz-1"})(["width:",";max-width:100%;flex-shrink:0;margin:auto;"],function(e){return e.width?Object(b.b)(e.width):"auto"});function f(e){var t=e.contentWidth,n=e.fillParent,o=e.height,s=e.spacing,c=e.children,a=Object(i.a)(e,["contentWidth","fillParent","height","spacing","children"]);return r.a.createElement(u,Object.assign({fillParent:n,height:o,spacing:s},a),r.a.createElement(m,{width:t},c))}f.defaultProps={spacing:"m"};var A=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CenterContent",filename:"src/CenterContent/index.js"}});var g=n("./src/icons/AssetPodcast.js");n.d(t,"default",function(){return h});var j={},O="wrapper";function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)(O,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"centercontent"},"CenterContent"),Object(s.b)("p",null,"Use the ",Object(s.b)("inlineCode",{parentName:"p"},"CenterContent")," component to center arbitrarily sized content horizontally and vertically inside of its container."),Object(s.b)("h2",{id:"usage-notes"},"Usage notes"),Object(s.b)("p",null,"The component renders two wrapper ",Object(s.b)("inlineCode",{parentName:"p"},"div"),"s and is meant to be used for large components with an unpredictable height (e.g. modal popups or headlines in a banner). Don't use it for centering an icon within a circle or text within a button."),Object(s.b)("p",null,"Use the ",Object(s.b)("inlineCode",{parentName:"p"},"height")," prop to define a minimum height for the component. If the content is taller than the height specified, the component will grow accordingly."),Object(s.b)("p",null,"Instead of defining a height, you can also use the ",Object(s.b)("inlineCode",{parentName:"p"},"fillParent")," prop which will make the component grow to match the width and height of its container. When using this, make sure the container has a position other than ",Object(s.b)("inlineCode",{parentName:"p"},"static")," (",Object(s.b)("inlineCode",{parentName:"p"},"relative"),", ",Object(s.b)("inlineCode",{parentName:"p"},"absolute"),", or ",Object(s.b)("inlineCode",{parentName:"p"},"fixed")," all work), and is not set to ",Object(s.b)("inlineCode",{parentName:"p"},"overflow: hidden")," as that could lead to longer content being cut off."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)(c.c,{__position:0,__code:"<CenterContent height={350}>\n  <PodcastIcon vAlign /> Hello\n</CenterContent>\n<div\n  style={{\n    position: 'relative',\n    width: 200,\n    height: 200,\n    backgroundColor: 'aliceblue',\n    border: '1px solid grey',\n    overflow: 'auto',\n  }}\n>\n  <CenterContent fillParent spacing=\"s\">\n    I'm centred in my little square container, but if I get\n    <br />\n    too looooo\n    <br />\n    ooooooooooooo\n    <br />\n    ooooooooooooo\n    <br />\n    oooooooooong,\n    <br />I just make it grow.\n  </CenterContent>\n</div>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,CenterContent:A,PodcastIcon:g.default},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ7H0DJHD0TMjVldoPTgARyEkEi9AEciQJfFVUEI9UYKcOIUQaXQsOo2j6MkWJqDgSQAEE4DgUdoN4_x2NtbjA0lISTU1dowVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGcHIAFjc9gADY3I89YwGAgAxb1oESBz-GcQ4EQdTAYKEfgliIahKDgbyEXC6tIpoZwIFwy52AARn8zz5B0vSpikuZzPYCMoPIGwoHQMN2HkDlzLEVroxkdgUVMmBuGAPDjPGuB5C3GtgA66BuuCAAyNbxkSeZKGaZaup67gjrlMBkMlAZUHadgAH4NhWsMI36q59tW1A6urKQZCrN8zBhbjMDAMIoCmR6BqGj6muXasEzUggcCizIUivAgFprVdSJY4CXU2CAUkISakwAVkc-aVzRxgFPQPiCAE5lWCkqBcfMTd2AACXnKBKDJ2tGIx1j9FRmsY1YbmLDG2BJqs6G0ZrQV8m7ezNLgmJWBgQqZZlnF0AmK4ACZHMczyNbRnG8YIPWDaN42LA8CVtkQtoMEcTmyzleJYhgDwoAZdXrfYLwBCnBzKqCuBKEZnJEJgRJfetyhVYEMBOZGBywgiWOZfkd6NcF8mmNoTGKKlaAoGg1wwymPKJQKPgQDgcRRZrBp2llBEaC6HI0HYIhkkZm5YFGgBHUJy-6XQCFcNAMiWDxwk4ZoGhHURpY1xgPCOTdG4sCJh054RhC32t1_YTeV5l_eL8vrmz_J4_T79vYr6vw-1433Pz6f4QZyt63X5PsRF7qDyM2Vw2xujjgdiMHAjcpD5zIljGg79PqxhXFIWG8NEbIwWlISG30zBfjrqJOBhc2JiXDBoLQFAEEGDAlxe0sMNLyjNARCC6VKAzEsNteAjD-zsPNCZeYcAWFEVGiZWAixLJnDmow8W2RzSfHXDQIRHEVL2mAG5SwlAxREEwlRd0HpwjQEkshF4yidJ0Mgt5TsBQ0LsOkXomitExEwFsXcP0ZgGrsAAOqZDmBkFqsj0A4BkMUMEBAWB5TgvFQ0sAsAqIIEnbAVxKoqP9AQAAJOogaYTeC3HwDAXGhB2AbRyQQKRoS0m5NyUQNA5pTaECuJkjRWiYBEAjDMfJhSCAcnkPE3JxR3phMyW1Ku5ACikiWDgKZIhNgCFcXNfq3AqxVNuD5Gx6E2qlNyTMK4oyCjsAAD4HL7J5FZuSpk4BmRkeZpzRAED6oMtJTTsmVLyZABIZcK7FLWqU8pWzbi5ReBdK4rgPBh29rQPpdyIg7PYI5KFuTYBgHNnChFBAtY6yqgbAApGimpqA6kFLNsknFUKBk5LSdUc0-RcIFCuAHKc5pqgcWKKkzx_NMwWUCcEtgFTckYrwI0rJSzWodIFTdPsWBNHaPaTgAVT03bhEoK-XpYSohYHNAKkljlcU6VycYdgAA5IImAciRSOA0M8lVKpDkLDQSe5g4K2XAbQIg9xri3HuI8FEdt44ZCTqMD4kRJCuEkP5XW_kACc_kkxJkjewHkYTEkargHgac2wrjwr1QQA11hbAGW4RMMeGN9lRGeOQK4ia0k2TsiCpVLLUmnV0grBwfNqHtPQv1KWuTPHdruePfQXiuATFubk95pdR40FHUWrp069nf1-Z1V606LlXLmehMJmELK8LuKk3JXQCB9HMFGV5jAfGzFhP88dnz9CTWvZO-5_z6kEEms-wZdzcnzpSJNL976VnAFXUW9ddi_0o3-YwDlUwBWTQHTQId2s8DzSWkusM8hYHUOWXcqQ56_ECEwx-MwjziGQeCTAQGoRgbzJan2r9DlrS1VScR6hOAd2cMEdRsJsGCDwcxa4tj8AcCoFCEQQIAhbn3orlcPjXC4A4C8OHW5z6pMDn47JoTInp5hNo2wjhMmcAomnCkBjOk_r2gBkDYibai4cQIXRBi4lUCSRknJAglNqb_koUBIuDALHsFhksYA5qRjl3QGKMAui3RMMVKk3zzhWCzgcR6a8FI4spHcbpCSjVZLyUUvxQSFkgshbCxGDtdilhdDAIswafbe00pgEsKgLtJnTKA_MrdfZ0J7tRKOI94MVmMFS_8gDLXZltf-RVyaFXQO5NYBAGAIxrzeFrs5ZylUAAcVU1v8H-dB4AdXpszrNj-sqMADvjpg-HIUZ2S4igoxNfgMBVaoCcOgbbrye2MxmLdiWD2nsvbeyszD_XvIFh4PwPUAB2RQlVCZQEqjgaqSZFCOSgI5HAEPKrBUUOaQmOBHKVXIOaNH_k1tY6J3j4K8bydrcJpG7HxPSfsGp7T-nOBI2RvIIbcnhNCa6zhTgfyJPsc2sqsLznOAee62R1VZHAuScy4J4bNHxN_JM7R0mCHSO0eRt1ja5ndPteRtR-jzHihcf47hwjmNyPUfQ6gOaGqKOueVQAFpEHNPDyqUPyeRscsFQn8PKd049xTpnuscBraR-acP0bgph4j1H830bOfY6TDgJM1r2Dh-Cmt4Pceyf-7Txn0XzksfZ9zyFRQ_vDbh-qhtkPlUM-KH8njpMqvo8J7N3j6N9u0e6zW2t4XePHIc_h_30XPvHKEyzwj9b2Pw9xo27XufDu8c05Tx3iHceO8Rux9PnHe_Cfh639Lg_4eI1M8JmblPge1sQ_55HqHaf1sz-tYPlvjkae95wP3wf8ODaRpu7K5rY1Qd6OQxqE5o6k5X7k6a7t7w7-TVRD5ra6xU4IFIHmhp5T6K7z4_6f5VTo467Y6q6gH-TkDn6f7S41Tw4Q467sA1RkGGxj66x87c5RqKAL5e5M7oE1RYGEyVTf4Z5R7_7J7E6ExR7K66xx5o4Q66ze5j42oyFyFD6RqEwQ4b6B6Ezb7w5t6gFJhM5R5JgB44DBRaGn5I46GC4GGKBGFK7o7-T3594Q7UEC4Z786yFQ7w6qEQ6CGN7Q7d7-Qu78D_ylJSCpb4YcR9SpLOY5ZUxKS0yoA8qRLwSGrejdAWTtAxGua5Y0y6DpZZFubxG6CkbkaUboQcZpJ1bJKD6caXauztC9ACAVyNZCiFSqr-jOhYAiLmYUZZYuaFF5bUA2ZKCEIMSGJQDGKcQECyYATaBcYMCeJCAiBRTASlTlQtSY6NpnQtpdBECaLQRYARi7Fdq1GOZTC7F2AWS7H6ZvAGYFARiGwTitI4CwAzgFjmguQEZpIHq9YADUFxCaE4z4KxJUJ2kROkTa50zIzSYoysbAMA7SJI_sFIIJBAax9WuQUxqRR4Jx3xPWAg5gQUt0QUkgyJckqJ6J7AvxmJLw2J3QVwyEAMU86A4JHRniMJrSLUQUIqHJcJqsiJ5WwJqxJ2Sw8o1oXxHimWkqmiZ4soFkApZJ6RQJyxwp5UVW0pLSfJCJbkM8FIoprSr4qSpmkESxBAFJIpTxexlABxpIUqLSRAtpMpOiwxygdmkgsi8yZCagHmgE8xtCrCDK1y5RiWkggZwGbiHEvmESZI8EVGIZ0ZUS8ywi3EyacZkWHoqZ6EyZ9oVivkKQaZ2EHouZ6ydi2ZUwcsQK1ABZwkkgFZCsSZkZrCNaaA1Z7okgzZqADZqiUwtAWArmwZ6ZkgvZ_ZpZRpXR3EfaYZNyYSCZsZ6E4msS05aSxZM4S52ygK9Z85aq5cdka5Nw2AI5dwxmqAtmokDmkkyWckqWPpcx1CPmrC0m7GDiO6_CMmZZoi40EiS0skEW2EgS8ijo1A-gZiHRvm6idp2ijplAspv5wkBiMQExkgJi0x6WniDmlJFk62bKUpqWASziQScA8WOA0QqIcAmy3x4cFU7Q_Y8A-g0QF0bRHIfK4StgMZ0SaAjMzoTKnMOw8SCcMQcQ9u7sKQisNSnYsAXWyamacKIQ9aYSBqAAqvkDONCG6t3KAoWpsJwIJHAIJYiJzCpfmHiEWqNH0EhBgPssVJXCdgmryGklqlVK0vEkpo5UQF1s8ksqUh0l-gADJkZTAlKvJ_LvbEA7m1JIoopNL6b5QFB-XIrtErLkpPLCpA55JfoihdLfK_KyTMUrIdnmj9DErsBRXpVdIJV3JJVJrATUonZCozAvIrLeV6XsAACEx0zkxJdpspEY6FNlRgfY-melCqHJbSvVapCVyV9VnlryHS9MjMIlWVQVOV_yilcktqwltIekeYuIplTRjseZ_sTgyQw5tl_ydZwKTxWpaKMKVw5OlUusTlpSSVrKOk15PRZRdiFRn6elySx5Zg15rGMmX10xP1Omqmgmwmomtyc1TMym7C4N8mUAtyvl_lcNumgilyzoOoYA_GEYAA2o-QJncd_GDXppCQALocjI0xUzgZVFWE2yZAXY240E0qZ6bE1Gak0Y0U1U2EZjndFkYWbsCpYumjHunOKelTnoQ3lULeb-kiLIZbDbDWCtKnaMJTJIUIWSRFpHjpZgVhkABq8QDIsF-i7ZEAWAaAIFkpZxh1gcGQAA0tHJcZZGEjdXKGGZojMIVIiqjR7UKFOHFS-Lcl4DcJEA5GGYtmHfRmEoVQ0v7fbQIHTYQG0Vsc2hdHbVOPMqVncLiT2lKcAGGUsDrWrdup1tmh1ErSrUeBGCXRKWkhAM0BGC1WGU7YkHAHjWGZTa7a8j8QSewEJgkPEo8vuvieYH2rkp3QHY7c7VPYneTeTfStPQIEbd7AiXXbcu0Y8saccILb0ZnUGXYqLW6R6ehDuMkYkPMjLV5mxAsVKfSHMOqNkFqKxVEqvQyC7Xje0F7KcNsB5HKBxVPP_e0IA1xT_TsO0OTWnVCeYLOZfRsjunAHnWUgXXA-1og11o3a1C1XA_1H3eYIPVAJg03Q_URM_a_fBO_QJmgOQN7OUBGLg8g6PYev3RPXcnA9OuVZhPOGtWw3pJRXKuXKgCemcgQMUDqKgEkB7TxX_aKaA2rEsJUAA5I1PNxb_VdKPKZY_TmGakKP8iZThBQzHB-ZxbODuvULBOKGtXkN0N_RSITOaKEBAJIFFLEldEKD0MAsaPYM4M4Feh49lF0IWL-D4OLAUDgLld0sPYRiZuOWZnvcDMcEY_MsfaJKfXYpIJmXYtfX6eBArSNabY4prUYkhVMdbZ0SIp4htXqLMMDe7e0MmtShPMKD7QQBFQ5I0z6i07cm3AXA5L0xkK06HREEQB07EuaHQOgK03HSig0-M5M6nRCdsRnVk3cDnUgz3fnbbYFrEgzEzLqfkHAEsJAksKmumug-XR0cw71mwwamKC5jEtgLalWislJXKM9s6K0_qv1WhI9i6H6onMnPslxhpDCJUJZbEpwK6nYC83cvijxoKnCtOsmpebYPSv4Pmp1dKq0hGLbIcwqoyWRsyci7EgAOJCApypAUsSo2oMnhiQDOiLClLJrOBppoAZqjRsuoC7C3S0uYlMmMvTobXODzhgAgrzWoA1MzB43Jp7MiXk2HLHKysSub2sm_RxNTDvVSiLmXOnkMTpN3C1lrKrnS2zGy233y0TmnjOA00pCFMa3jGSRfrvmK07DV1q2JbwUlMl3paQktorn5kIOdqbMoPbMzC2mkiJCkgECkhiZ9geCkhI34iq0XNH0V2bBuubA1111db4MhvbLGspBXD1W3TWu2vtLF1ZswAEv0vEteWFte3FuJD_Klujg2vVwzjtJRvJs4n_LFvLyiOttonlszAxs9vVt9v8tEuCv1vWK01dLFtYAttLzttjKds6njs_Qfoor9jLtlsdspAdqVuq1bsrJ0sCvZDToBtR0jNNt7ttsjvdt12TszAeD3vDsHvtIJubuTuEsMuXuzt5lB2Lvvurv3EbvPshXFtQCgcjtJuQeiPnvTsAdpJb2xMC2lHlmFspP4IjEn0S1n3nVVmmuea5NgX7trt2vq1euIXOuNkK2V2ZspvUfFOIU-vQP-sbkXTZ2IPIO9pyykhcfUDF3sJLARUzwiAjPlazrsC4THtHipu7rptV1Vu11Vv13XOsNeVCeKxyyKt9g6f6d_t1tXPQrsJXAwoSoUf3EwryfVvsBIf_tMuvLtPsARVWcPufviebsOdTtOfTrDPh2HXR0ecfuUe4uSeRB2c1sXvOcrIzNXAzOhdgedszPRe-fGczume5K4QNDkJXBqeq0nicy2wTE4C4TfLjvFeUCleya4R424Td1HKydGe1tZe5JocdE71asGfyzce6t4dpMEcZMdlX1ms336D3kK3Wczj2s0dOu2suuMfK1Vtzesfa1Vu-vLPMijdBt2J8cF0OndxIk9xZRjtEBxsiZZTwerdcmXOcYZsreq2Fc4m5tj35uhW2RoBXCyhDspeHtHd10Zdtcod5VhWoCNvdzNshV_flunc_tQfdwDvbuw-ftEBjsIfbuOcmdg9feoDJ0opEBLsw8rtw9ImY9nvdwCCwdo9xsU93LY_tdwvg83tBc9w0_hfw_0-5I_dvsk8zcA_fvc8oqZeg_M94_AfHcc_3FE_ReTskDS-dskBy-I-i9xf3JqsVP_QJMgJ484cnmDf6vDeGvDljekd3mWtqLxAzB-BreOsAguwgVgXLfut29a1Dmbf0cTkcwQB3C2BLAAsBojA4YhDYi-Jrc1KW2OaoVSnDmWCZCObmpEBSvA3xBQAOShC4Z8QKNJoQACAoj9OzAvDuzlSLNslSmB_JwzRYgp8WR9o-9-9HNhIjC-J_WoB-sZ2m97e50hu9qlJeBdTTpxBHmlIsBEBHjq9jqqn1alKcUwDsyzqlKV-jDTrDlyuoCnKvIl2b13dpumcu-qc5vZp5tsNr8qvMvT9XBWWUm3Ql3Ve1c4ACIwDOB6UyvT8KuM9i9T9wZErx0D85C3Rv64cKZr53_7mRjogMCYt0EAHPYBAUQKAFdE_6T82mU8BfmbFX4Hl4-7gOAEn2eizB64JPOPgnxwFChk-swPGsPzgDk1J2lA8AQVniByRl27QD5mrF_Yg9kBLRV2GPwn7LtrefgF7n-GHJ2dH-B5F-kQGMhhgUgEwU9gzySbj9cwR0egVAOXZ39hybA2LiuimQRhl-YwW6DoOr7wApWeNHQR_z87MleaqHTXt1x17jADy-vPVutw95FdxuZHVhMAHdYisYGZ4PagIDW4eCtgCsLbunWZAH9nuQPPtFg2bol19OLVO_piBq4MCmGNwNNKMAHrzYrAVbTwQrG8FCABAj0aJm9HQ4TlQhCnVJgxEj5W0vS2AHJhbzybcRDaxtboCGQaFr13yAzFiChmCAhl2h9gToZdC972gG-hzdWp6ASC-9Dm75CTC6BDJTCaA75ObNalZh2wRhCwyqEsIgYDCDgCcIPiHxDI6CcM75WbPSDT6JBWYXATAOYBDJHCR4CQU4ecLoDpYd6k5ZelQx6Z8w-htyIYf71z4fIH0tyVYesO2C3J9hrfMJNcJOFnDOwdAY8g4Pt5foahctOoWogKYjDkK5Tdkv4DgDWAkIeMKhp_XaBpxlUUDJZsEPMAC8IwqadUI4EwDpcIhJDYYMKGpHpFjoavfTpSMZGAg6BA9CjFADZEMiCATIrkZALkhJC827IgUYCAKFhJIhpSWulwl2icsqRnItqhkXUyiYroG0LaDtGaDijBRKouUBzVfCKtSkuozkYoLlCORtIaSUUe9ycjuJH0pnSIU_wVGmi0o5o5gZDUGY2iWGhJCCji1dHVspRDdJut5FkjYi2guIxobJlUDYBsaFI_kUyP6iDQPc3o3rAGKDG5JIhAYj4H4AEBSQCADxRZMdHaDmgjRbDPNiWKujUk4hJXBgdFQPZ41sx9IMFKiHuKVQOQxI1DtCCgEfc82NYhIWVy_SNiExgITsR1xiZdcNWlkAXu0VhHu9OBMxc3oiN8wdQZQrgRhKuMiCuBzQmgGPrbT4Hrj5SnAxRtlGQjdIGqZSFIVEAjCcCZBxFKADb1cARhvQjsbpKUg-CyR8h9UKUpHxag3i6iDWOoquyVLtA8AcABAeqVxYUhnYQoE8a-KqwPc1xOASPlBLkgwS42x4kIKeKnSFgXYwE-up4nQDlwwE5gCyChO_pwQIGopWyB4ENLfjba81QgMEDIkW1HwIwGwLQGAY0S6J5fW2rYC1DESWonAsGJuOvG3iXiwmNAO4ARCgxGA_OGNBxDQpwAfKmVCyMJJFQtV-JxE_8S7HrqPA_M73dcePEyAoh9kJ1YSeahCAsgnsyJHYA7EZK4TDg9E_SMZKUh_jaiTWGcsRPQktROgKQW2A8SWCPFgp6ODkK00YkSiXYvk9iS8FYHvgwYPVOAAJIEDbAdJQofqLdAik-SrgRElKehL0mkkamYCKycJPXEeBxwEU_xB41ylgIxMZgfSZgHmAWUVKzIdiaOFmRQtOAdgdcTVL2BHAIpjk6nrxP0g2A8YA0o8QBMNBmgPGFkNHO2IvFaSUpaUgQBlLc5dI6Ay0pYIDElDpTfONUjaZhO2kRAVpHHDOqeHQnXgZGm0nzn2j7FVsKBdRBVs137EP9OBl03-h3U4FPTjknAqwVOL7QHjbkkfW5PtI35hJKpYMtJK5JRCKZCkEU_4UlOIkIyVJ6AsJOdLqLvSdgMIw3pIH8EwMqhFCX0rUN8z-ZLINjewGn1tg7BCmpoaLN2S5rcJnyA4V8oIhdbutbEs2KcIU3_IKIgKSid8njOyE-CRhGQXIXrVYSnhAwREr2DAHQngNdgIZSWeKGlmwA5ZMjIITAwyGq0shF0dZgd22Z4sYA7rBrB8MGmYygR0wOANeBSANAy0GJVAGkUU5wAusniBqGiElA-VTg8Qd1i1HJmUy7YIjO5O0gfQ-yLIhs91uqTYZbMXJGMmRjqATj9BygLUJWR2FBSqy6i8swOaI28gVx3W9_OsW9JkZN8Qq-dF2ObOnQrI_AVsm2XbP-Qadt2J_f5OcimQ5z9AxspuXDBbkhyq2-mAIRdA7oOyjw5NCuXcguSFzf68c0WVwHgAjzyqHXadJ3QpDGyzZMjJYFXOtm2zXAaQJYIPJgDUDrRb3H0X1iwzsyhAnM_xCXQuxnF3ZBAT2YJVd5iBkM90OgGhlxlVsOZ08vDGEi-KPJBZF0FjGzXYx18wk4cqtmjXBqppZgCJNhvENq7gK9MNXdQAEJwC2AxQw8PPl_2mJ9yJI8CjGoguQWoKYA6CjuJvQsGlyhQ5s3BUTVbELo0k68muVvIqgM05MwgJGmEl3lULZMHNFBXADQVOMSFfNIofE0w5ayjwOsoYuqwVp_zqAOQq7GUPNpR9JILQhkAiItZIjIIB4t3iUwXEayW0yi9eupxDZ5tigIcUJuHC4DFVgAB4gQfpj8A0iquc_CQXQCkF4AekL1QoZOIw5C19F8iioY5m-DvDn5iRFwbUNdmBKDozEkNnAzGbYBWmG1JsK0ndQNEMYrTIBKZLACJBIM_TFJW32sEiKehfQ3xRbUqFfDFxRMxEZ4lKXA0dBDkGwFCMui3Jhyk8wFqMAcilLWmMU2gMBIcjPYW-swMvpIu14iLSlRSxRZkxLg3oaAqiybmBE8SzCpgwC5cjp1Thgpw44QHPmkndqGxY6C7JFiAsi6jM9laSVztsrej80hlQteZaMsqEAi7Y0y0CCAFWrdAJg-afwFZIn4QB1xw8DIMdWHAXopGsiOwNQCkbMhLUVUG1C8wyx8SYAiw5YXwDSTtBdKXQYIEowjDmg3UdSQpABXbhKQQU50VWFTVajoq4AmKvGNitRC4qB6QFMKecuEVC1blvFXDq6VEh-LJIII2YPcpoReZ9I7KqaiG15UR1TQ2wTVAHQ6UB0cMgq8UMKpGCirN-_KAOteCFWSrQEIqwOAMq150r96vK65f4vBG3DIRFwzlXfVtp6qkgBqyJX2iI6KwCRqyiFBstyQ1K5QdSi4R0uHSItRcYSFyh6uXKFtM0PTT7A5C6CSgHiMlFbGFJDrL0_VgizxRcv3qmq7h9S-RdItQCegfBRq2ZXBFkiiLn-2C1ALIqOAHlJmdgfNZZG3pTieuya_NUmsyG5qngo4KWWnNlkZyZG6a9RZImAgmT7kLHe3jotOnMgU5KsptS7EznjydgRzFeb_TpJrz_AG8u2cg0iEtVR12wOkjEKXWfTY5k6tIt3XLHvdgAXDCulKVNCDqfJFkehZvLSClJABnSuKZT2hkFi11D0suTIzpKU1D5NzUpMOUS7KzG16E6dJxW2Duoj1P6gCf3ztj2SMAz0DdWOsfUULn1W61VhOMGWarEmA64DcOpkai18o2wRhR5moDlK1FUsCwPwF3n8Arg_AH4MWGqAZAJmWAb0GSEZAgArY_ABOPkGoCkb2A_ANHFxsyjrB-A5QcgP0FHYXR2N_AKSKNEIgDwfw9G3emSEoCJBcweQfZLTItAUa_gpYHjdWH4BRA0AImlQOQg8waaiNIARqZM3hBzZ64SAHumjD42GRdNAAPTHx45DNNYfgMpt02Y42cTmxjSuH4Avkn-FmsjSABhzo4f8zmozTzMAoZhpiumlvGnl1hhaONOgK8duM0D2bw8xOBLa5s1CWhIg7m4KJ5schvYLA70eQLZjU24BdAkAFILhpPK3lERVkEAK6hjK0BSN5G00LQAKrZaL0_AUrVnHkBAA",mdxType:"Playground"},Object(s.b)(A,{height:350,mdxType:"CenterContent"},Object(s.b)(g.default,{vAlign:!0,mdxType:"PodcastIcon"})," Hello"),Object(s.b)("div",{style:{position:"relative",width:200,height:200,backgroundColor:"aliceblue",border:"1px solid grey",overflow:"auto"}},Object(s.b)(A,{fillParent:!0,spacing:"s",mdxType:"CenterContent"},"I'm centred in my little square container, but if I get",Object(s.b)("br",null),"too looooo",Object(s.b)("br",null),"ooooooooooooo",Object(s.b)("br",null),"ooooooooooooo",Object(s.b)("br",null),"oooooooooong,",Object(s.b)("br",null),"I just make it grow."))),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)(c.d,{of:A,mdxType:"Props"}))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/CenterContent/README.mdx"}}),h.isMDXComponent=!0},"./src/icons/AssetPodcast.js":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./src/icons/BaseSvg.js"),c=Object(o.forwardRef)(function(e,t){var n=e.size,o=e.color,c=Object(i.a)(e,["size","color"]);return r.a.createElement(s.a,Object.assign({},c,{ref:t,viewBox:"0 0 18 18",width:n,height:n,fill:o,fillRule:"evenodd",clipRule:"evenodd"}),r.a.createElement("path",{d:"M7,15l1.143,0l0.716,-5.01c-0.486,-0.069 -0.859,-0.486 -0.859,-0.99c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1c0,0.504 -0.373,0.921 -0.859,0.99l0.716,5.01l1.143,0l0,1l-4,0l0,-1Zm-1.17,-0.906c-1.699,-1.06 -2.83,-2.946 -2.83,-5.094c0,-3.311 2.689,-6 6,-6c3.311,0 6,2.689 6,6c0,2.148 -1.131,4.034 -2.83,5.094l-0.288,-1.009c1.281,-0.905 2.118,-2.398 2.118,-4.085c0,-2.76 -2.24,-5 -5,-5c-2.76,0 -5,2.24 -5,5c0,1.687 0.837,3.18 2.118,4.085l-0.288,1.009Zm0.584,-2.043c-0.865,-0.734 -1.414,-1.829 -1.414,-3.051c0,-2.208 1.792,-4 4,-4c2.208,0 4,1.792 4,4c0,1.222 -0.549,2.317 -1.414,3.051l-0.313,-1.094c0.453,-0.526 0.727,-1.21 0.727,-1.957c0,-1.656 -1.344,-3 -3,-3c-1.656,0 -3,1.344 -3,3c0,0.747 0.274,1.431 0.727,1.957l-0.313,1.094Z"}))});c.displayName="AssetPodcastIcon",c.defaultProps={size:18,color:"currentcolor"},t.default=c,"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AssetPodcastIcon",filename:"src/icons/AssetPodcast.js"}})},"./src/icons/BaseSvg.js":function(e,t,n){"use strict";var i=n("./node_modules/prop-types/index.js"),o=n.n(i),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/utils/units.js"),c=r.d.svg.attrs({role:"presentation"}).withConfig({displayName:"BaseSvg__Svg",componentId:"sc-1bxcwkl-0"})(["display:inline-block;vertical-align:middle;flex:0 0 auto;width:1em;height:1em;"," "," font-size:",";",""],function(e){return e.spacingLeft&&Object(r.c)(["margin-left:",";"],e.spacingLeft)},function(e){return e.spacingRight&&Object(r.c)(["margin-right:",";"],e.spacingRight)},function(e){return 0!==e.scale?Object(s.a)(18*e.scale):Object(s.b)(18)},function(e){return e.vAlign&&Object(r.c)(["position:relative;top:-0.12em;"])});c.defaultProps={scale:1},c.propTypes={scale:o.a.number,vAlign:o.a.bool,spacingLeft:o.a.oneOfType([o.a.string,o.a.func]),spacingRight:o.a.oneOfType([o.a.string,o.a.func])},t.a=c,"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}})},"./src/mixins/index.js":function(e,t,n){"use strict";var i=n("./src/utils/colors.js");function o(e){return"1px solid ".concat(Object(i.a)(e.shade,e.lineStrength))}var r=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var s={display:"flex",alignItems:"center",justifyContent:"center"},c=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var a={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},l=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b={position:"absolute",top:0,right:0,bottom:0,left:0},d=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var p="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",u=p;p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var m={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},f=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var A={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},g=A;"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return g}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("./src/utils/units.js"),o={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function r(e){var t=e.flexAlign,n=e.basis,r=e.grow,s=e.shrink;return{flex:"none",minWidth:0,flexBasis:n?Object(i.b)(n):void 0,flexGrow:r?1:void 0,flexShrink:s?1:void 0,alignSelf:o[t]||t}}"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=n("./src/ThemeSection/index.js");function r(e){if(!e||!e.globals)throw new o.a}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var s=n("./src/mixins/index.js"),c={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function a(e){var t=e.border,n=e.theme;return r(n),c[t]?Object(i.a)({},c[t],Object(s.a)(n)):null}var l=a;a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=["block","inline","inline-block"];function d(e){var t=e.display;return t?b.includes(t)?{display:t}:void console.warn("Only 'block', 'inline', and 'inline-block' are supported for\n\t\t\tthe 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS\n\t\t\tfor more complex styling."):null}var p=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/displayProps.js"}});var u=n("./src/styleProps/flexProps.js"),m=n("./src/utils/spacing.js");function f(e){var t=e.p,n=e.px,i=e.py,o=e.pt,s=e.pr,c=e.pb,a=e.pl,l=e.theme;return r(l),{padding:t?Object(m.a)(t,l):void 0,paddingTop:i?Object(m.a)(i,l):o?Object(m.a)(o,l):void 0,paddingRight:n?Object(m.a)(n,l):s?Object(m.a)(s,l):void 0,paddingBottom:i?Object(m.a)(i,l):c?Object(m.a)(c,l):void 0,paddingLeft:n?Object(m.a)(n,l):a?Object(m.a)(a,l):void 0}}var A=f;function g(e){var t=e.pos,n=e.position,i=e.top,o=e.left,s=e.bottom,c=e.right,a=e.z,l=e.theme;return r(l),{position:t||n||void 0,top:i?Object(m.a)(i,l):void 0,left:o?Object(m.a)(o,l):void 0,bottom:s?Object(m.a)(s,l):void 0,right:c?Object(m.a)(c,l):void 0,zIndex:l.globals.z&&l.globals.z[a]||a||void 0}}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var j=g;function O(e){var t=e.m,n=e.mx,i=e.my,o=e.mt,s=e.mr,c=e.mb,a=e.ml,l=e.theme;return r(l),{margin:t?Object(m.a)(t,l):void 0,marginTop:i?Object(m.a)(i,l):o?Object(m.a)(o,l):void 0,marginRight:n?Object(m.a)(n,l):s?Object(m.a)(s,l):void 0,marginBottom:i?Object(m.a)(i,l):c?Object(m.a)(c,l):void 0,marginLeft:n?Object(m.a)(n,l):a?Object(m.a)(a,l):void 0}}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var h=O;O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var y=n("./src/utils/colors.js");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var C={all:"uppercase",first:"capitalize"},E={ellipsis:s.b,wrap:s.d};function w(e){var t=e.bold,n=e.caps,o=e.dimmed,s=e.fontSize,c=e.lineHeight,a=e.overflow,l=e.textAlign,b=e.theme;return r(b),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({textAlign:l,fontSize:s?b.globals.typeScale[s]:void 0,fontWeight:t?"bold":!1===t?"normal":void 0,lineHeight:c,textTransform:n?C[n]:!1===n?"none":void 0,color:o?Object(y.a)(b.text,b.textDimStrength):!1===o?b.text:void 0},a?E[a]:void 0)}var v=w;w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return u.b}),n.d(t,"e",function(){return A}),n.d(t,"f",function(){return j}),n.d(t,"d",function(){return h}),n.d(t,"g",function(){return v}),"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof u.b&&u.b&&u.b===Object(u.b)&&Object.isExtensible(u.b)&&Object.defineProperty(u.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("./src/utils/units.js"),o=["auto"];function r(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(i.b)(e):o.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-center-content-readme.77d2417c80bd2aa276c3.js.map