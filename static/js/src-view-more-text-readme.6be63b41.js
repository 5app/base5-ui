(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/ButtonCore/index.js":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./node_modules/classnames/index.js"),c=n.n(s),l=(n("./node_modules/focus-visible/dist/focus-visible.js"),a.d.button.withConfig({displayName:"ButtonCore__Clickable",componentId:"sc-2a784h-0"})(["display:inline-block;margin:0;padding:0;vertical-align:middle;font:inherit;text-decoration:none;text-align:inherit;color:inherit;background-color:transparent;border:none;border-radius:0;cursor:pointer;appearance:none;&:focus:not(.focus-visible){outline:none;}&.focus-visible{outline:3px solid currentColor;outline-offset:3px;}&::-moz-focus-inner{padding:0;border:0;}"])),b=Object(r.forwardRef)(function(e,t){var n=e.as,r=e.type,a=e.isActive,s=e.isDisabled,b=e.disabled,d=e.className,u=Object(i.a)(e,["as","type","isActive","isDisabled","disabled","className"]),p=c()(d,{"is-active":a,"is-disabled":s||b}),f=r||"button"!==n?r:n;return delete u.color,o.a.createElement(l,Object.assign({},u,{ref:t,as:n,type:f,disabled:s||b,className:p}))});b.defaultProps={as:"button"},t.a=b,"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonCore",filename:"src/ButtonCore/index.js"}})},"./src/TextLink/index.js":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/styleProps/index.js"),c=n("./src/ButtonCore/index.js"),l=Object(a.c)([""," text-align:inherit;text-decoration:none;transition:color 0.25s ease-in;color:",";&:hover,&:active,&:focus{"," text-decoration:underline;transition-timing-function:ease-out;}"],function(e){return e.bold&&"\n\t\tfont-weight: bold;\n\t"},function(e){return e.stealthy?"inherit":e.theme.links},function(e){return e.stealthy&&"\n\t\t\tcolor: ".concat(e.theme.links,";\n\t\t")}),b=Object(a.d)(function(e){var t=e.linkRef,n=(e.bold,e.stealthy,Object(i.a)(e,["linkRef","bold","stealthy"]));return o.a.createElement(c.a,Object.assign({ref:t},n))}).withConfig({displayName:"TextLink__Wrapper",componentId:"sc-18jo2wb-0"})([""," display:inline;vertical-align:baseline;"," ",""],s.e,s.c,l);"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textLinkStyles",filename:"src/TextLink/index.js"}}),t.a=Object(r.forwardRef)(function(e,t){var n=e.as,r=Object(i.a)(e,["as"]);return o.a.createElement(b,Object.assign({},r,{linkRef:t,forwardedAs:n||"a"}))})},"./src/ViewMoreText/README.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/react/dist/index.es.js"),s=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function l(e,t){return e?null!==t&&e.length>t?e.substring(0,t)+"\u2026":e:null}var b=l;l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"truncateText",filename:"src/utils/truncateText.js"}});var d=n("./src/TextLink/index.js");function u(e){var t=e.content,n=e.truncateBy,i=void 0===n?110:n,a=e.viewMoreLabel,s=void 0===a?"View more":a,l=e.viewLessLabel,u=void 0===l?"View less":l,p=Object(r.useState)(!1),f=Object(c.a)(p,2),m=f[0],A=f[1];var g=t&&t.length>i;return o.a.createElement(r.Fragment,null,b(t,m?null:i)," ",g&&o.a.createElement(d.a,{as:"button",onClick:function(){A(function(e){return!e})}},m?u:s))}var p=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMoreText",filename:"src/ViewMoreText/index.js"}}),n.d(t,"default",function(){return A});var f={},m="wrapper";function A(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(m,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"viewmoretext"},"ViewMoreText"),Object(a.b)("p",null,'Truncates a piece of text by a specified amount and displays a "View more" button at the end of it, which will reveal the rest of the text when clicked.'),Object(a.b)("p",null,'The labels of the "View more" and "View less" buttons can be customised using the props ',Object(a.b)("inlineCode",{parentName:"p"},"viewMoreLabel")," and ",Object(a.b)("inlineCode",{parentName:"p"},"viewLessLabel"),"."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(s.c,{__position:0,__code:'<ViewMoreText\n  content="This is a short example text with a disappointing reveal."\n  truncateBy={26}\n/>\n<br />\n<br />\n<ViewMoreText\n  content="Here comes a longer, tastier example. Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula."\n  truncateBy={150}\n  viewMoreLabel="Read more"\n  viewLessLabel="I don\'t care about any of that"\n/>',__scope:{props:this?this.props:n,Playground:s.c,Props:s.d,ViewMoreText:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYADUIBgEY9SFGBLGwKU3XaD04AEchJFI8jKK6GisBfFVUEI9V2EDSUsNleUzXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnXSABZjPYAA2YzTPWMBgIAMW9aBEl0_hnEOBEHUwGChH4JYiGoSg4AshEXOrNyaGcCBcMudgAEYbLM-RJOkqYAEE5hU9gIyg8gbCgdAw3YeQORUsRiujGR2BRJSYG4YA8IU1q4HkLca2AMroEq4IADIRvGRJ5koZpBoqqruAWuUwGQyUBlQdp2AAfg2IawwjWqrlm4bUGy6spBkKs3zMGEBMwMAwigKZ9rqhqzoK5dqwTISCBwdzMhSK8CD6mtazYiiqK40RPpBws9BoPgQGsWxODsVxmuGe0fzJbpaG4vNcRCY5bFmQU0BiGcJxgVhxSgHB-BXEHURWrJb3agAmBzTph9hNwZ2sPCOXnoYTAWeeBmtGDBjjqNovmLF0ECCARgAJC5CyPVH2Cgag0gEJYCH8GIMmhLBvWx-pryCVFnzzLIjmitAJTxShtkyW3aCOMr4AIVBwgnWIYECdw-3FVYCDgcVPcOU9aGa0IiCPI4Zj6OA4OdeoAHU7eamZHbKkI0RSUI4JDtGDfDygIBCN4Mm07pounWdqDW9gPDyPEIiiCJ2G2eJKQ7WJBuHAg-j4mYdqoARkXifIwGSeY0Yb_Y7Hu1g0aD1B6i1Sp5xb3DQnIQa-NbvoD12RJXAEIQxkGnYF-OHeoBbuAhS6KBCz6GOcdHiBx8QoJUB2BiLrX2UwX6JA3hOAecA8SXxiGVF23QRjRAILAZqQQch0BkN0RCbQMCgNbkIQ-lAn4F3RMXVwdMQBy3GGiKSLNEjtTSgAVj0lzbm7BWBkXBl0AAMq4QIUAEaBhyBFLo9NhY1i4eRXh8A4D8MEQjBosl1pTDiF0EIXg_ZIj2M0CY0QJHcyFiDKQ31fr_UBn1KQ71LpmC_CAJiLEpYQ1opIVQ2B_xaAoMBfQDB-L2m-ksYAf1XAA30EsPIMAFJZEwkaUSppFS8X8VMNClAZiWEmvAEScp-xpPNIpeYcA_S2gEkzehtBIbZIYh6cI0A4CSDKXECptECIQSsLRXhaBdhxPdB6SGnTUDbGKagZaUluzmGcZxWiEZcl3Fqupf0BBcpqTBKIJZPiaBmV4GsxpDCippTSnpLZazpE8JgAo-cRV2hg3YGImAcVtnbNObIuA8iBGXNUtc7hWs5EPIIJhVSsy4C8VWcsgA2jA0Y0slgRwIM4YYIw7kAF0iqROibQCM90oARw_JJbZozVrMgiBiWA8KoVUWegsx54dRxksRRS_sVN0XdG4PVAAhIy1gzLcWLNOqC6gMlIXF3QJDS2lg6FNNzKpBWLoxqw0VjgWAM4Cz1V2bQW8ILFldBHgIcwUZFnbMYCEsJNAqzUu2cANVMtuIRhlZs9G5KNHbV9gkdgVwrW3g5PIYAG12h8rWRaoVFVRXUQlVkHIcr9XmrWYwfpXSQhwARm3G41B-B7FQPYJ-Ox2rEsxFEhF0teqrOjYGgtVEtqcO4S8t5gi3WVvYlRC5UB_XRqkHGwZZqA0EC9cWggUhjWWNWTyvlqBJnWp-rMjJhSipUvWXDAgVxUnpMyXAHAKJG44FsGKAAjqECAXRFirI9T5EKaSp3wBwL7IggQ9arNOdLJti6BzntXeugoxznlyMfae5dhS12onfWYeQmqbr2jug9Ei3DpaQ14vYxxkhanYoaWG5p3FPGATtQYMCBLxm0OZqhggEZ11LCVSkCY8zVkQGaBGNl66KMGtRKOUe7AXVQBBf8yj1HSMFjZYtVj7A5XrsVXQMjeJ6rcbwPR6l2rmNCfpB4N9M4IxHJ-cqyT7AADUcpABkBMU_50JsXdFndsmTurmqonY6dEdoGpjgeLlMK1MG7FKAccxSQ7bthuPDBoLxQF51-LaYEtSbkBDIIEOgMUYBYn0QSTxEp9oWqwEWGpM4PUqmJeyOaT464aBFM1cktSgp8jjKXXAcKl9tKlei9hHAjFFKwFK8Mgr15wgRAzeWnp1TJAtZTe1rowzlm4wIAM7YXVlLStecUVZAASYA49WW9pmDgLwFUBMjV7VNhjCULQjBgBAFIhArgrfQOx4oI7tlDfNPEfbOlOCoE2P0Ag7HLuYEntENaVxUDUBgM9zIgCXgfcLNrI4ekcBs2YXYcUEdzRoHY1QYHVxZvzfqjM_9NMJjJG2u0NAD2XgbSuEtiYMAjyKq6XAL1mrtkjUQMMamt7FnU7NGwGAxzqduV6HYYzBAkd1V7dspbKJ0d4GSGNPnBBNvRvh0KRHc2cBE5J0_QZPV2PbLO72l7WwhTveoFcZCU5Fc_fV394ra18n8gKOaHDgOocwHNPsSzZhiiauWRnTIcxjaqQyw-EqivtiRaWMdmFtB4gY6WLVnAIgHtVdqqy16hqettccBoroYB2q-8i5hYA4fI8ZCq2LMwHIOQS-53NqKAPqBVdWSwaKcET1oAN-xun8D4hXafikW7HgKQN5m8ATSlX0LnZL0NkbY34CnSd5JK3zIPMzPQksFPUm50yWAP4MPtWc8CDz4C9ClPGM6vMIwV3JNjZZ_X0TzfA-tZdMi-1FPsShRhcwOgPKiaV92AAD7v7lK4P1YteIjseHYDygSFGHVhy3DiHEpnNEiWakIjQSGyv0GXM26muiwCIjUmHy6VH2V1QPQLs0ekNAf0vgixgDAAjA8x5Tgzcwy1Ky8zUHQ20EwwC3QK8HC1z3QiqQ9FYKnEaySTaTAFgCwFK04MkAEOwF4PiymAsk7AKGEM6w9GkKshSAkL4jaSK3L1QDkPogULLxK3QlaXQL7zQC0Jq0kCMM0P0L4PQKGxMNEg9BsMsMkhsxWUWW4PYLSTK1WTEKELn1WUUNkN8MWXUL0I8OOXMNK2OQcNCKA1gxc3gwT2oCTxgDoI8QAkYI2Sw3AnQKC2ABC0fwzyqViwMIEi93S3q0y2y2-1y2KPtHIDgleQADlvQslOs6j_A4BUBmi8tJICt2h2c8hzQuF8gPBfRncBUphM1Yhe4RiWVkCktltWtqBi9q8yR4Irh680BbcRjThth2NzCrg9J2N_DrJ2BDi70Mhm8oBW8bsrgiAuB0BYBd9tt1j7sMgXhntaJLRNdMhxlPtvsPjuJrj28Xjccns8V1kEc7tQT2NO8dhcE9cssSFpdaF3BopL59AYShQpw_jnRMS2CBBzRMgWA8gDi4cU5kTSY9ABBd9j9L53AEQcTDd_QGdEB-j7gvtCMcA2TBjbAIAZjF9tl9gDdGSHdmSqcuTTgBihi-S0EuchTNirgjIfAX4n4chegr59BHBgcVcIhwgDc7cwAwBYVFTjJRTVljB2AGihQogn4I47tnQjhk02sc4JQCg7t2AABxLYbYYcAWUYCOAQOwHkVZanRAc0CKXCS3SUuAGHVAB0lw6lY4lIUk3tNwssU40UifZk5ZBIvrWYvI4gyLCMWfUIymMAGPeqWdZZLnVfdXTJY5bZWwPKVaamBsmIOALUYmGYw9BjavARJLNstoxo5ots7Pc_UrVZAFPsHfcE5ZIciOOwaVeouAJojWW1Zc1clnBMtZbHGMpnamdodYuAZsmIVs3tXcy0LspLQ8lGTsiobs9gT_Ime8gcycnlflQBWzUgiDc9IqNlApboOVfwFSRadoJ06gDabaYC91TJXfQArUecUcbocC8wIFfEaIPMNoVbLBXIceNAdgYMY4BkIcc0yQOYiox0Ko8ODaSgOnJIEOAQO415ZnEIG4foZNJBGwWgW0qGbZTAWAWODfUrD4JE6k8E0zPVXtRgSYnYfsxkBjC1McqPAfMXFPW_UgltNZfwdqfwTSi7TJdqfAggc9PSggPs7s9qWwO8uSnIJ88ypLUy-czc9qecsfXtIWbZYdd81AXMpInAIy4Q1SWdfwXSFCuKYDJwtA26b8-zdgXyqiWI5QeDGg9CSQNM4StI7xfzMCArAaTYHYawYnGAarOwmpGIJDeXe5fLNpYANM4ieIBkEq3pMwiALANAbo7M8Y1uLEjIAAaRgESEXO3IiBmFCp6oEEsDST-VgDAAXTlDTNkVmr-S8BTSIDGvxOvBEE7j-X6AOzmrAvGpFH20IHCs1Sn3MHSvQhLLmW3OrLTP1k2CPCnKBV3y9gKsepgAjEqu8sbOozZTTP6sGrBTTKRQFL32Y1YzNK1SYzMy52BvGsBrgHhvxKRSRSO3GvqqgAZC-o-o5GOQipOkirwJioIMuo8MStcxYhSo8NEMEIyt8yYJypquMkmrFCICaq60Q3qWQheA6twIEmWWu3bz1FmBnSPTSV0m8PNBRDgWmtIP2qlpluFD-QRCpN0lVo9mWq2siElsEPNCwR2uOoVr1oNqyjOpWlw28NK2uvJ1uq6tyMEOAJuwD38FsCWFwRGBhTwGnG2GepnLFPBthvcqMEEngFHENEEMgODK20EN0i-2dD-W2QtLQiphdFooyAENGDdMw2yRhEqDdO8M4FoCICDN5AYzuNQAzi4AmAOLbO8OvFdvuFbkborRZsoDZojE73yFtt13DEgGdB7OpW8I9OviuA9orTSjrT11IM2MHrWW8PhR9quBgR9onqnr7tnrbKFtQGcHnDACuG3pFpmDBW8KdvbxRSfNPrb1QHxv_yJuivuliqtv9qoKpvKNoKTPpowwyOYIEmAFPGcBigKA5tqwQ3KvqTRPIAKBqMgjeu2EKqes4LKrqQaQ-uGXOr7EsgCI8JtsX2rJmFJBJD7ESFJAIFJD1j7A8FJCgAeqKr9vJtnPyvgY-pxqKp-sDvMC5yTIJwrQAaAaUwIfxDYfXruk3sWywZnEmtGuIbF22j4ddIEZIaEaPCui7QJ14q7TkdpX4ZSBmTIeUZgFUepV7tEYHrbKTKOr2oJywFkZHDhR0ZmSIe-rFwJwEFsfkagYEYoecYUrmunv7uyHMYkZSE2tWoJ0SHce0YUd0ZmCUZ8ejQJw8EifseiZmSoYMaMbWRMZnrMfEZkJnEWrmuMmScAdSeMloZUZcb7CgBKYcbJAqcMaqf8bEd5TvuZOcKMswfyeUJfriOoPftSuCLWi_vSOyqyL_o8eAaQbAZQcgegasL_rgYQeKuma5tQaKvQYtpbiGYryuqBTwftqK1JF0LWn1jSRI3loD21qIHnyNqWFwgafobuFeqYeWdYZUd3wku3P5xOZ1z7CikfK_x2fMCfOadyYDouwlqHHHi0ZSc8d0ZGoaYOlyA3vBepRmrmoxd4aifhYjAxaRZEZycCdTOufRtWuxbhYKE7uuYJeyYCbnpMyNquF2sIApdKdxZZf0e-sJfpa2QY1wgaG8yuHeb_ExEoE72xRwFwjWwMZPG1gldXVwjBVwlBsBfYGldBdReJdaaA3vrAxJqkN-YsIYdQFfskGpruDMIq2MPQgYKysVl_vtH_pxamfkOQaQzmZnBgZS1eY-pAfdfqUqs2bGRbnCL2fQgOc_LUhuduSIaICUaIH0aIAoevXChoYMaeeBUYe9Lee-s-Zhs4d7X2NuTZYcZje5bpZaepXMKkduIid8dhfZapfjaRaqcTdqdScTdbd8crbRbWXMMscO1jY7dxaICcdxrbbcYbbsabaU2Te7YSZRdMe1eretZ8tJduXrejUbbLbiYnZ7duSSencmbnfSfibUaXaJYZeIDXcKduJsePZdbnfHbYbbZqcfcpbnfTfPeMcvd5cnLaf5v1cfoILDZNbNYtcDdohGftd8SZvQJXygBmD8H9ZmaQyl0DO9bypzb9dWfAfWaPCw_nCfjuDdr2Dp0zpGCPxmFQ7uLasAQGy6qG3FVRJCyICPrFsWXiCgF0lCHd2YgpD-UgEDP2riFzgNifhSlOpyi6vToEEo-wI46CtWWI9_m7quC5xWNr1Cu1h2ETp-lq1U9I88N5WORGDdw097S07WPmt06GVHPXwo-1io7d3xrNsny2aJWg_DY8MjeXxJYqkHNmBM-pRYAThXfnuAiShSjbIN1Vjud7Tk8o7bKGzPpvvBIuw-vxqKheuzfeqKpFfYYEpCGvuwPYyo2KlS-vrBu3uwM4-jWs5PTArs_0-2RxHQBrrlEOT0gAFJWubhaI0u2yCbtlB8vmudw9avyiQvIvEpkpUpttovuhtpKq5XxWZ45dMlnA4hYAT6ov5uUVe2Iv8VgIM49srHurVssdjt8c_2q21k4vzvCAUvaIWPAE2PDpguK1mPjc2Oj6wUxO4BDu7u-3tkMOrgwujwcgoKkO_ARW5daIGmEfuJOyiAFIwxRNkWwXjuDOcAIwkvnOK0CfRhFPZgwVieRhgfsf0A8aAPdX2morgOINxhvPwO-mWI1nVvMq_MHX4O_7lnd7CVUAzwr4hRUOBethxlg2heNgcOCvuXZ0KuaNKq1X_yPq1uFWwaJhr4WNyIrAPrBfxkRehABB9pRTrNGfYHfW6GKb4M6P2qUifNv6xmCs6qGruh5C0qMb3fvWNaMh7BypjoRC_eBAA_do6BvWjPu6RCo_bBvXIAEhoJ0TMxPeE-oAk-ww4tVD0CyIDllYJRultC3EYA8-C_vWKfqORCK-3dvWhjQhuPEhlZ7jghPe6-G-m_OwI-QNLfty3esaWdQV9B_fA-wxjlY-Zu0-M_wlKMS-0p8-dhjlq_ZgP1bB6-EhG_m_0uTpbe3M1mebw47Wee4O_MZIhARB3J9uUp9kHJzaQ3mQugiBJroIsAIwH-_OpgH-hqH-103hFNdGVNv-EmdgOaEMjvkOGmmT_uwBDpn8CAF_ObilEA4jJPOqFLAKzXnDvZqYjjF2hHDgFwp5uESPiAQE3KL4vm9kbaPZDIpd0YAuApbpphRYvBNyPLWeogOWRt02aOXHwLHjYHoDTyn1cphOGfA0D8BJoYnK-DGJRs26Z4WUKpCwHN07SqkGAUIJSgVk-wqA9ujwOZyyCqBSwdoKIO8rOFgAigy_luQf5P8iG3AmNpIPZo78Oe-HT1ikEP6M1xmTrCwSAwQyEC-aUkLqhZFeTWAkIB2TGgyCGpgp2gYQCIO0CRS38ZeJ7XRpCmFCOBMABLRXtRjiEEAEhLKRaNTzVapD0hIFVSPxifI5DAQeQw0DPEMbfNwBRQzAFDV-px41kX1TJNNAdTxDihvGT5FehvQbQ5UAFJoVUO6BtC5Qf_V8IC17R9CSh-kCSIsjBpfMJhNQmINRh6HNAxhC0dofHE6HTCC2qgtAUQCIwYw0hgIMAYPiV4-C4AfgtoAEPd6rp3EWAHUGQT6G1R6o5oNKBsP3zND9h1QycuCSV59CPgfgAQHlEIx6QY8oFc0MMK5wzDQRdA1bmKwVZrodGEKPYekJ_4KYAMSmZ4ZEMnIGY7S4IzYdCPlYbd7BCI9UOkIxG8p6eQHSCDEIJpms1mGHVdNzycEFYyoMoNGK0W9qRBXA5oTQIxyjbxBkOaMGQRhyWDeg8E3aXnIsmZEcjbUolTJjgD5Fw8RRyEbtL2g-CvIzeMnKNnRyKjSjgcSwDDuy1mLtA8AqcYYbHk7oUgtSQoYURFCVEVlQU7IqIDgDo7miI4loihkKJCA2j7U-omKIY3EEyR0Al8bYMEFUjOjmuZfHQVpA8BiCNRMkNvIQBDG3JWqj4EYFxXuSRiUg0Y7yssispBiioGHF6JKKiA6ihQHIRVPHEdhSRPqtURgKcRwA2QkwvEHMfIiNr5jRKL0NlLmIEDbASxAgbyoATFCvC0YCsTICiDdIIECxIWQmM8GpgXUC-8JDAEDkOCxi1EwEUcVMBkH8pdRVeIMW6KuRRjXAymJYCphPE4AAA7ByGmpG09xnyVMS8HuQF4XoEYLsT2Iw61Rto8Y_YcDjrSBjuxbo_sWRRFrBjCYBY9eOOE_HGwhQD8bsRkDMiAFMA8wDAG6WZCpjRwD2IuijEJi_jdgUEz8UuKnZmBlkNgA7HhMFGiUlg90SUFBNUig5nh4oxsh2SDG9j3xV-PanQF7EUSzQpYn8UGPYkejKJEQPsVENwyng3R14OzhxIybbkvmlVAHqJQvpf48R63SVhh3Ek7EkaGHBSfhMQEGDVk8o1wGEVarHJsJdAY5BBK35g81xhsY5MRLwCfjjkL4hyS2L2rHJRJolNSQvxiLOYkqbmCXkL0d6OCf6fPAJJqCCSRJ7A3HWEr7UKKahvWS6F9FUlmT5IV0WHZZqki4RTgOaXuREumH0AdUCsfko3qLyOCe8MgJvJrG0lPAiI5Kbo7YjsBEJVTxQgYmYrVJa7CSW4hUtaLgztpRtaqFIZZnqJH6mT8JHk7YEsD8BwBrwKQBoFEDSBLBOiiDbfCaw_IyRcoaISULwlODxBlmqKV0ZFIL5Rp6hFkTPjtNUhUDlmKgrnJZKjaqS7OOoOnP0HKBFRGpHYGqaJTqk9ixc_OZPsZXV4wiNut09SW2WpSAzPJvjbZBNKmkzTQk8laNOw2kybCrpaycPMdP0ADSvpuPVGTQGWZrpJea0JGgtJgBIpgZyM2rKDO2D3SypXAeACTJG5rIlAvaYGv1Ky4jS7O40_wFDNmlblCZSKIdPm1eGHTDUaUoQBlONiVUXK4xdacNi2lQBlmvUPKuHxOhtoPq6U6mQIE7TDpJInU6gDgEnQrp6uBAc6R9SfRnoV0a6PwPMBKi9p_p2KE2b-gvTit1AkvTdHAB3R7oD0bZCOELybrxSzZjs52VuhgC7p90EXGqMcnJl2yX0_6RuDZI5nTSuZkcs2V4BITHJCZicv9H_xdluyQ5PZEbs6B76dNtZqAXiAYKLnG8xeNglqvR3qR98GQgUl3jVX0modaRolTwRg1rmfUFeqyL5sUDSj2QVSXAdgLNn0nw8YEHYLcqtwNzo8RM5GeQFmQt7E0QOUwDuZXPt6AJvgQ_UPkNM3gMigpJ_NRJvLD5zRExs6RrrrWwB_Jt6TYYnE3XaAh8_k6gPIPMMSCOB506tTedJwZ6LzmeIfI-cdFXmtUHe4_eubz33kGYSO0fZTosgp66QbAnfdaJEVoiUz5OznXSOPz-R3jaABouOqMBr7ucv5D9ZnuPwAXVzRC0AdPj9JAXH9lkk_H6QbOBa6QBEKpcIOmPFrSMjk3cplqcWOQrVO4tdVZBi34Xb89WX5JeYaHIVT8aAJCh3rnzn4F8qFoEEABaQACqdpCYMjGApowoeEANGLugyDJBu4JMeihljsDUB6KzIBoGeHSiT1o6hErqrIvn67A-AiydoHAHIBdBgglQYqOGRjK2TESNAdcQfRbKGMlgEYHxeaD8UjjDYjJS8d32_mxUHFBfaRevKX5LZd5YzZZKkoNmpLQqpobYOaBGBYkMFWJajrkvFD5LCl4WB5IskqXoBrweSspa4AqVFL8FFI44Aa3I4Z1nO1HZJfUjb7r8O-mAHeQzT3nLJ-lSQQZSfL8JGtGFCmEhCwr-QwK5QcCoZRgurp4ArgaUGyU9zmpbK_CwTIRWDxI66QugkoZTKcQuVAita-JIRXnI6YdLxlG_eBZXKLmehipCizIvOX15FVDea0cuUcFohYI7A_ytSAvMIWxUy5xUl5QbzxnUAngo4aqS1Pel2cPljrWBlZJRDNz8OdI6XiJIRVNS3pwOD6b2NGllZWZOxTcuzMmnxyYZi-JXmynJmMCnyDK9yXZw0msqKVzRVVjiNeHAA6Zg-ZZKaGamwAbx0waldDLSC9oscmCh8QxkOgYrCM5M9lcDlGmblQa_M5jFziGzMsCVSK7cQxl9xN0hVhKq0amXnFIQMA8qlVWyrknWrOVR4YmXT0JoEKmesVF6cKpgCtSdiFNGKL3DSCeJqAzvUBQsgsD8BCZ_AK4PwB-DFhqgGQfWqbF_BhR1g_AOnPkFTRIB2A_AUHNmqTXVh-A5Qdxb_HGQRrM1IAPKLAV_AmwzYaCBCdrESC5g8gbpWLIiXKB_BSwua0NSACiBoAS1_Aa4Z4g7WlqEJWCeEGRDgAlqQ1NYfNXJF7UgAAAemlDBw4A9Ig6ztbFlnVpQHIOAAAJzLrV1papKQBXHUZr-ALCc8WDn3X8BsplRDMOHFnU2QcASYC9SADMggwo1y5QmcesjXzq2YS6hyJevADRkeSwxWALOrnUPrF1zCADUWM5GaAwNv60HDZAA3NqrQG6rdbupXXUJqwVmODG2twC6BIADgzQIGtGbBr-AxdVYrQAjVRrTQtAQkpqCuxzB-A8gBQPIHkBAA",mdxType:"Playground"},Object(a.b)(p,{content:"This is a short example text with a disappointing reveal.",truncateBy:26,mdxType:"ViewMoreText"}),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(p,{content:"Here comes a longer, tastier example. Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.",truncateBy:150,viewMoreLabel:"Read more",viewLessLabel:"I don't care about any of that",mdxType:"ViewMoreText"})),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(s.d,{of:p,mdxType:"Props"}))}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/ViewMoreText/README.mdx"}}),A.isMDXComponent=!0},"./src/mixins/index.js":function(e,t,n){"use strict";var i=n("./src/utils/colors.js");function r(e){return"1px solid ".concat(Object(i.a)(e.shade,e.lineStrength))}var o=r;r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var a={display:"flex",alignItems:"center",justifyContent:"center"},s=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var c={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},l=c;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b={position:"absolute",top:0,right:0,bottom:0,left:0},d=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var u="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",p=u;u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var f={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},m=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var A={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},g=A;"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return g}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("./src/utils/units.js"),r={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function o(e){var t=e.flexAlign,n=e.basis,o=e.grow,a=e.shrink;return{flex:"none",minWidth:0,flexBasis:n?Object(i.b)(n):void 0,flexGrow:o?1:void 0,flexShrink:a?1:void 0,alignSelf:r[t]||t}}"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./src/ThemeSection/index.js");function o(e){if(!e||!e.globals)throw new r.a}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var a=n("./src/mixins/index.js"),s={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function c(e){var t=e.border,n=e.theme;return o(n),s[t]?Object(i.a)({},s[t],Object(a.a)(n)):null}var l=c;c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=n("./src/styleProps/flexProps.js"),d=n("./src/utils/spacing.js");function u(e){var t=e.p,n=e.px,i=e.py,r=e.pt,a=e.pr,s=e.pb,c=e.pl,l=e.theme;return o(l),{padding:t?Object(d.a)(t,l):void 0,paddingTop:i?Object(d.a)(i,l):r?Object(d.a)(r,l):void 0,paddingRight:n?Object(d.a)(n,l):a?Object(d.a)(a,l):void 0,paddingBottom:i?Object(d.a)(i,l):s?Object(d.a)(s,l):void 0,paddingLeft:n?Object(d.a)(n,l):c?Object(d.a)(c,l):void 0}}var p=u;function f(e){var t=e.pos,n=e.position,i=e.top,r=e.left,a=e.bottom,s=e.right,c=e.z,l=e.theme;return o(l),{position:t||n||void 0,top:i?Object(d.a)(i,l):void 0,left:r?Object(d.a)(r,l):void 0,bottom:a?Object(d.a)(a,l):void 0,right:s?Object(d.a)(s,l):void 0,zIndex:l.globals.z&&l.globals.z[c]||c||void 0}}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var m=f;function A(e){var t=e.m,n=e.mx,i=e.my,r=e.mt,a=e.mr,s=e.mb,c=e.ml,l=e.theme;return o(l),{margin:t?Object(d.a)(t,l):void 0,marginTop:i?Object(d.a)(i,l):r?Object(d.a)(r,l):void 0,marginRight:n?Object(d.a)(n,l):a?Object(d.a)(a,l):void 0,marginBottom:i?Object(d.a)(i,l):s?Object(d.a)(s,l):void 0,marginLeft:n?Object(d.a)(n,l):c?Object(d.a)(c,l):void 0}}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var g=A;A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var j=n("./src/utils/colors.js");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x={all:"uppercase",first:"capitalize"},h={ellipsis:B({display:"block"},a.b),wrap:B({display:"block"},a.d)};function y(e){var t,n=e.bold,i=e.caps,r=e.dimmed,a=e.fontSize,s=e.lineHeight,c=e.overflow,l=e.textAlign,b=e.theme;return o(b),l&&(t={display:"block",width:"100%",textAlign:l}),B({},t,{fontSize:a?b.globals.typeScale[a]:void 0,fontWeight:n?"bold":void 0,lineHeight:s,textTransform:i?x[i]:void 0,color:r?Object(j.a)(b.text,b.textDimStrength):void 0},c?h[c]:void 0)}var w=y;y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return b.b}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"f",function(){return w}),"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof b.b&&b.b&&b.b===Object(b.b)&&Object.isExtensible(b.b)&&Object.defineProperty(b.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("./src/utils/units.js"),r=["auto"];function o(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(i.b)(e):r.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-view-more-text-readme.737bfaac334bc001b784.js.map