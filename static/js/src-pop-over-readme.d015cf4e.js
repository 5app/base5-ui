(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/Arrow/index.js":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/react/index.js"),a=n.n(o);function l(e){var t,n=e;if(e.indexOf("-")>-1){var r=e.split("-"),o=Object(i.a)(r,2);n=o[0],t=o[1]}return[n,t]}function s(e,t){var n,o,a,s=t.defaultPrimaryValue,c=void 0===s?"100%":s,A=t.defaultSecondaryValue,d=void 0===A?8:A,m=t.centerOffset,b=l(e),p=Object(i.a)(b,2),f=p[0],u=p[1],g=(a=u,"left"===(o=f)||"right"===o?"end"===a?"bottom":"top":"end"===a?"right":"left");return n={},Object(r.a)(n,f,c),Object(r.a)(n,g,u?d:m?"calc(50% + ".concat(m,")"):"50%"),n}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPlacements",filename:"src/Arrow/getArrowPosition.js"}});var c=s;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getArrowPosition",filename:"src/Arrow/getArrowPosition.js"}});var d={top:"translateY(-50%) rotate(135deg)",right:"translateX(50%) rotate(225deg)",bottom:"translateY(50%) rotate(-45deg)",left:"translateX(-50%) rotate(45deg)"};var m=Object(o.forwardRef)(function(e,t){var n=e.placement,s=e.size,m=e.distanceFromEdge,b=e.style,p=l(n),f=Object(i.a)(p,1)[0],u=function(e,t){return Object(o.useMemo)(function(){return{position:"absolute",display:"inline-block",width:t+"px",height:t+"px",backgroundColor:"inherit",border:"inherit",borderLeftColor:"transparent",borderBottomColor:"transparent",transform:d[e],transformOrigin:"50%",clipPath:"polygon(0 0, 100% 0, 100% 100%)"}},[t,e])}(f,s),g=Object(o.useMemo)(function(){return c(n,{centerOffset:"-".concat(s/2,"px"),defaultSecondaryValue:m})},[m,n,s]);b&&""===b[f]&&delete b[f];var j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u,{},g,{},b);return a.a.createElement("span",{ref:t,style:j})});m.displayName="Arrow",m.defaultProps={placement:"top",size:8,distanceFromEdge:8};t.a=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Arrow",filename:"src/Arrow/index.js"}})},"./src/PopOver/README.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/PopOver/index.js"),l={},s="wrapper";function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"popover"},"PopOver"),Object(i.b)("p",null,"PopOver is a low-level building block used to attach an element (the 'popover') to another element (the 'reference element')."),Object(i.b)("p",null,"It's a wrapper around ",Object(i.b)("inlineCode",{parentName:"p"},"react-popper"),"."),Object(i.b)(o.c,{__position:0,__code:'<PopOver\n  isOpen\n  content="I\'m a popover. I\'ll try to always open in a direction that keeps me visible."\n  placement="top-start"\n>\n  {popover => <span ref={popover.ref}>I\'m a reference element</span>}\n</PopOver>',__scope:{props:this?this.props:n,Playground:o.c,Props:o.d,PopOver:a.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoMoGYdVYDIsNldoPTgARyEkEiyIogQCIg9hA0lKiTU1dowVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdlIAFk09gADZNO09YwGAgAxb1oESZT-GcQ4EQdTAYKEfgliIahKDgPSESs6sbJoZwIFwy52AARiMnT5H4wSpgAQTmKT2AjKDyBsKB0DDdh5A5KSxEy6MZHYFEJJgbhgDwsTqrgeQtxrYAcugfLggAMi68ZEnmShmnavKCu4Ma5TAZDJQGVB2nYAB-DYOrDCNiquYbOtQRLqykGQqzfMwYXVY4YDAMIoCmVaSrKna0uXasE04ggcFszIUivAgWprWsmPI0EHu-zg4B1eZ_QB77dBAgg-BABp2llVw-1IygWPqOGEnGARkgiEIoBGeC7FI4I0BCY4IC6abmQmaJ2G2IJByPdhWFsCAPFgHB-BXb6yQlGAPphiIZnNFFXGFTnwfYL7AeAQVBRY67GEC9wJ1O2rZZRjJQ1O5q4YRlWwAuATunnPn9CkJXUDEbbAdrRjSL-gQpakJ6Xrej6WqkO79rML8QDohjfpYyRVGwf8tAoYD9AYQjjqepZgDyGAxKyTCjWo01FRVVAY_tYA9XcVw0gEJYxQNsMEVQ0jYVJOCEQ-pruPlM1zVl2E2KIrzSMsfr4Eb_tSPNcT5jgP1bWOlKBCEMY0_dD0J6n9vjpI4VexnmiPWXgh4lH7P2LFfIopS_Gukbj198imAj9FmAd8mgTu3MQPI37u5itk_0CGSmSwVELfJ9GCKUUdK8F_htMMwDQGRxoBAkBLARZGxgTEVAzoBCl0QbYEGdBEGDTAHAUciCeZ130AQgKLwZq2QgDURYP8QGTguGWGC9sWJinDF0YuP9MLSRfnALOP8v5hAiFqWwW8jYZQANSiynoA7okh2AACZ2BiMUXAkRCJeEfy_gAbS6GAPU4p6RdHrksPBBBS56P8H0U2NA4AAF0MqJ2TrQLKRV1EgK_qeMxTgICQEotJd-ICQF0FcGzbIVxUQMmwQIKcVwACcABWFSiCwBKWONERG3BSr-N_iA7xmV0BpJwDgkxdgeqpK3oUsAuDRxwC1mXeEMA340OyQQExZj9GWPrhGfJ5SinVNqYbBEH4mkgO2gE3-XQCB9HMN01wvDf5KA4a41Eo4pk3TGYwfOqBC4ZCrGMkBjBS4DO6GgFBpdaonIyKXZqbVcqbXkM7U6RzdnNMYExWEwzf6CnyA_ChVC1akJ-ZQ7IozmkgMIVY6GMta4QpBXs4gXifECDgLVLJcKQG9IIFcYAGKrjFAACTYsqSYpQ7ACUCMoEI-BCJ5DFAWR_NFn9HThCTuJWAWKUgzFCClcgCJYCZAflcM6UA8F0oZSAsAUAIAzCxRKqVAA1UWEBogzXuJjCJhpJUzAVf0ZV1A4C3kcHoGgYS0QwFFaC3-HjTp6gRRADIiCxnyFhb_Z5cLgBZR0cY1lMAa68w-ksSRow0KkTgMYnK2RQiwAAKozG6Wa4qGTv70otfw_-YxpKBpGNIyW7A1KlKjMmhljB56jA-Qyg-NVgCZukc6sVtxoX8yhX6_QtaLW0NVlWtNwa7i1NbeW71tVM3dpqVVWAfbmmbjLb_IZYM61fy6BWgA6tEcNRxpIFrrfs8-h9j7dGoNuytcBw3oEjTAGNcbMKTsLc0mdU722TIEOYDdbbf6vKYZcugU5_qbs-e-1BHadHjrhaOw93qgPNIwaDc5wNQbgbGZDfQtUEM0Dg7_TNg602ofbbo9phj9DIuADo8xBiIVNTvc0hdF9l2f02AIWqlGorUdXahq9dbb0WqdR8qQbydlNKkJs7Zjsf4ztGagO-lNzBalOudAgTENYCCyj_WWDs0E_0g1gn-IGIHIYIBAzNECGMwCY7RhKjSP65IjAAQnU--FWD7zCoEjVAJZEzVnPv2ZvXsf9TwXghbVA8oQPo4C8OgRIzUuMWynTo_5zEP1gHHSBlF5GPASm2IhNoGBlJs1SyFOdlAoBCmUiMGwtBcsvq8FEy5HYIB5GUhpLSDrml6U7AUZScTTIxRUpZRrYyohYEXVwCYylOsqQAKRlYZTgKbWmp2ceva65pbUoEEHHZ2qeq3DPGYyK282elLZ8btivKAzyRP8SfgIHAmAzqRtk-hDKWTq0XyuDFORECVHuARFcRJP8cW5ogeCj6ylBZla-WQ6gvzQlqp9T_OhbCrhSeuxdOTLEErqPOzgF-3dh73Z_sYIwDoaBCCgPibo6sWLtDsJmyqF92A8h_o9qKVxu1Y_gDgRzRBAjsI_njhwtzDRTQfqSIQzMDKzkRjo_ENM2zoDsDjQIfZ_B4JyDjCY3QRiZDmLmHRRzCzphdHTjRtywxM4HCzmp4mcC2DFAAR1COTbIECefOFHCTwsRqDjNFV0jOWlEDduOWybruPcamoEBI7kwBPUT5dd2TjIFOyZUu6DPF4dhtfl2NpefXvIP7vaNoHmYZu2eBc5-H_H3KERwFl5sfWOvPjrhoPHiXfukGnNOvnwv1AYA6jACziMmjmfB8KR4dQWxdOdwL4P8TNiOSl8j0TvMmxVdHC97Ho4thKrDBGOYIU7BQ9TGbzZ9vg-vD5dn84GwYApgr-RvLeI1BZxe6oEiuA5pXBYEobT7P6KiWjiP8PIvHO9quOEeOozoewzQ7QwOSw7QXgNwkQ2kcosAl-CBO-nQEAKQhANE7AKUnYIQ2-MwD8vY9IlSH-7Qwsf8L4ewRwZBn6c0OM8Q6B5g1-Puy-w4XuIs9oO-n64BruOUAUwQLAFMD89QzeAO-gf-rOne3eEYYh1iM-wB-OhqUexOxWo4tGMeN-lEcAwwkaOQ8uoOD8uYeQBQ7A_ABhM0VwwScA-WzK_AVBphIA5h1AgqQK6AdhohAK5CrhEhNSJ-UApeP8tODgeQEQRA1I3u8mKsrCJhEYf4KQ9QNkRwvQKIxoo6BQSwqI7g3yKqSwo45AHIHMH8QR5-bQeU7A8uiMT0uu9eV-kw4wrgdMVepO6EgR-OxQymzCp0xQSwxQNm3R7AxQIG_RpQy2wxmawxm2K6tG3RrReBOQxQRGuGpGxQrRX-yyrCGQPhOAJsH0LOqO_ER0ucJaIw8g6ihxUwV2MmjCsWAgWcvs_skgxxwc4YGg4cQE7u0ce8mo8ciRx86AaCuQeCeifkqcboTcmcY89oA-2Oa8L8g8weO8OcUwp4xxJE2R1A8cp4sEza1ioJ2EHoKJXanh1AO8X8mRqAcAiRRA-cMwOOH8gsQOmQFJcEtAAAmhGOaAkqNsVEIFvE4jFEmHEpgCkByGVv0BgZinKOSXACyTAAABoRhck8kiBZARhyJyJCkwAillawGhGMlZGynslKkTgqlOLmhGSanakQJIGSmQFMkylZAKmcljbKl8kwARgWnCmin7FgziYPyAmXxpoNRYgyH9DySJDYlELQIhBBkXxmb-4UlTDVrep2DSSJzAmUDuYEBXSJqKbXpOEpLtBWE2GlbALXpwI8xORyhoCSrOjmhsynDbATa_w4joBDYxlSI05KLtDdYfKbDoGECWGxlRSKJyi9mzrNIpY7DpbIToCOAFYMLtBoC0YvDNkgIVbRLVmoArkviNYbkZAAAyp0BA85hWUp9pekYYu5Hy-5Ag14IgoRp5i50pl5-guW160pVJJqWRVJNJmi_Y_IosEZDa-gNijWn5QoRAOo4paAbWY2a5n8mq0E0QeAykgoSQKQ1AEYakiSsUKkY2f2eFBFI23JzZRUiCmiDOPqfYYZQFkZEKNiwmLmKyj6HZACKZWcomX8xxGUvxos_xp0EYoZIaSwOiCamSfCeqkEshY-FaSwueCIr0kQZ46AaQXq1UnCNFIaSyWiAF4Z9FH0di0kWJIF1iMhplBA7GX8KWeCxxwZvcaZtlQZKZoZgFWMBlxC1OUUVlUlJ0iOBAqJxJ5gjlMAGZWZOZC2IChJU8aJYOqA5lOJY-qKzSCIegAg3eVSkpxQ5oBKFa7Asici8gmkMx16sC0mN2zuug-SWMCqUADIVwClMASlRAKlalHy5FTSmijVzVrV1FMlxiF8jFH87Gjw7AWoJJUwsASZ5gfMBByQelQFSM6J5g0QqIrMzKKsJirulxN2amzQEYIG7ApSIG_5tF7lFlRl407Qr4SaYymAU13QJ1C151iVNicyIKqaUi3qdJYyU2wWFIdlKZiCf1O1F0gVy1wN023qECpx_E96qyise2-s9G2slUA6a27FGl-VYgnFt6qAxxl2tglZAAct6N0NJO0McTvATaDbdiGj9fWolUDqRGVhWlcAABxvbCIfZNUyi9Uc0-lmAE2Y7B4M085KFE5DCjCGiiyu5U7r7go5AzyP7ASuBoBx52DZBpAL7BAr4WVu5bxoCU5yjkGiyUGoHmi0GVShAkG4Cf4_zdV82qXRTQms7s4l4KFWDV5U44gYz6HQo5BUzV5VykIzjU6eSDTbWnTq05CCGj4WFSks3QG6nwHQE2koHUHimYH1A4E5DKykSEHE7EGQA-BkEcHm3UGW0YB0HDgMEpBMHe1ppDiu7l32HcGR2P7DB4LTL24SYiFrEyVbEojTgpCz4S3R5e5U55URiwAzgFiR35CYDFTN5s3j6F7u1AFbRnFYAdy03YFpp3FKB-z0SHZbxQDPFqBhyAQ6afEdxPTBiNwZwWhWiLxQmm6i2wkDjwnDy3wC4zSrCoBRp4LjVEBXRZKuasX3n5bijxVDwwCR04gYDS2WZXWznR3OjoBzSlKIMnAjCXanCBb6Cna-l_3MieZQBZTeaji-b-pLQjR0BFS3UxD7WWZxCAPAORA8ksUOZOZzIWaWZUPniZ40BcP2Z0ObTMViP336gfCmi0DkMRhgJYL1EKTUPCOWWcVnbqjxCXblVI53Z-I_yCM0PiHCSHjHghaJCC2oDkMY7v3Y6GPc4mCzEmOZg4yw6u7kPx5KO0g0CUCFEgJBF6ghHlE0h7DD6j65Enj1Be4Lo3Y8GIw-bqO3j3hXRxAJCrFGOixJMQpbGUAROSjWPnF-VXHkOH3KAPHnaSAHpXxdBX3aA31gRIkcTfEySJxniVKRMBlXKP28RZzNMJx4I1q9PNzDCUDbDCwXyv1TAgZK1gmzPmh16d7WLTNr0f1glwlwMjzqIDOQAJDIVXl4nURTaSBhHv4Umkm-XEaWJrpo3VToCE2sArEfwEp7NQAHMtpw2CwSgvBVkqRzLyYSqjBXA2Cdh0BzKChoC0ACCW0UTWJXCh7OhzK4TmghxYBXDmgxRZzFDqJ-n_01O7pZT7rwAXyMNZLzqnT2J4KlyrRzJfzACtkTBLD9kSmaUOIXwRhiVLLtOdOShCXiVMPoqoAHq0scJLCaKMt4DMswADlj7EsVrT6SMI3XNsLI2Eao2biaNgwEvXx2NB4ONMPytPZrP_4W5W4wC2727UJb0HE73HR706tdDlPH0MRPHRVBpBX1MRwfFgTGDsAADibAwQiMrcmsmgfY-tw96R-I6-eL1ARQ-OEDFJpM9gzgzgdzsA4TI-XEkMat2cYd3d-QISJTu15g-OIGdgiRMekba1M4hRtOCbXt3QijIRkQtgwSsAxUtNlOXQiAjb5oRFo2hoO-K-Z1yQcdEm_b7A7NfYQKwqw7y-1eeCVVi1E7D8Cbjbi6mwDmw4y71A1V47vd_p6-V2Md6lkkVbqV0LBQjb18dmUyuYxWsQeIbDoTPQrbYRSueYuIeB4BmVfbZbAx6T5AipBFSiBKV7GQGVxKHIzzDbgHZ4WA3oZI8AAHQR7rIwsVD8j4KdRAptwoN1o1SbdgwAuHw2-F42SwNpHN1s-OGHWHM0OHD5kQ-Hu5MktNlV-7QFtV9V7ARkjDRH3DJHZHcoJFCB1HfHtHI4AVRJy1j4NpVdmDxUgn9mJHEn7QYnSwIn7NUn9HQVj4WdL4ynsixHMkhn5H8FGRpEVwXJuno44NcVBnsrCBbU-gUHP-tp5plkAnJnQnZnsrFnlHQ40qqwUAIHXJ7AA7JkWAHItHX-YmpD5gp4nHGAQFQiQhjHz1VjlUWwXHWM8ZzDmUWXUkV16d7AAAPuVzRW5ckGNBTYZzdclUmzlyu1jCVxTVbYtDAcx9aOwMzTMKPCttCMKt0E19wy13l7V1dZ1yaM5314gceYN9tKJsU3G0l6OB5WZTJQV1NdV_pfrVwhZXMrt3u6ly9VGQQHw_tTJZbi8dIWQTdaVJiwVyAqdTV5t7Jbl2d8Ba9RlDd4FJKtmQ9-xiCs129_t4lcYl9wex929WYKJmt9Jw59h0phZRAnVHo7djVzx-TaJxRwgRx9D9x_EAyBlJzT0G5-lR59tAV7pWOx91D61z9xd0ZdJx93AAlRdz5YmRN99-l_HcyMZaOClwe_zxJlmVlwz00qdzDxZUxV8818leD3RRdQ1Zj2hNjyT9DsmpojL2l0ezNDYlcHr-dxCh8otIT0zzjx8utJT9B6OOb0B_EOF2B6Sq52lfbytrBzb3KFyWVrDVtLa7vZj0j7J3Fc6w8Wc0bRfaHABA08trfcdLeTj6fJIMn1r6s5BwIPYEbsEGvB6Fnzn8tHQKs_OJqvkJW2CR6GX1KhX6s28x85mPn5IA39fA3v0-xHajFDFAABKpap9d-985Yd8dyAsFYjCLoa6p9j-jCT-zCrPMz0jxBJA99cCYDmDN-L-hDL-JCr9guzTb0dxZLp91Xa9uKU9F_0OoAQI193C2AQKt9XkQKD9987AQIz8T8a4QJb8797_r8-n3ET6UfCkmnyFBTgceXrd4lDET65x4gMwPwEc1niSBwg0AOAACAXLbN-IiPE_gyAjCq4jwBXZrsUBiimRrCkqHIGSigDwDXAeAzYEeBwDaEOw1FfAX-FrIsowwKQCYLFxxbw8g-9rEPjgJgAR8gBlCaPoX1z6oBIBjTd4kJHEHF9gqTDCsnBCrLtAJU2AMrHXVQBNg-YqqdoFnzKzqAQi3iRIEoVMZ6DKeIUAPodDtb2g96cgq_sIIYjAC0Bt_CvlIIT5gQv4rg9fI43RQsQgWIwZSKC3X5lZaAWAAgA7ACHKRvBI8CBE-1oDOAgo0UdoKHnVzz8imNgi4iHxiGODTmogkAY_2PBx9vW0Azwb5UKGZhfBtwIKspGLJ1VSyRjazn9hhwBdmhH8ETt9g_gSdOhVg50JkJLYXRDQ0Ad5m30u4-wj6kffIWgJf6pZ3BPrEAH6yAbdAJg6-fwKTCPAsBEYtuDINjFrpzAkgGbXuNQAOHMgGgZ4WKDFHtpgwv4MwnYFJB_gU5yAXQYNhgEyjmgiAL-GwBgUWbARMgKISwtNAogz43hHw80F8LwA_DCc_gSUoiwaQ7xime9W4dsFyHODJAH_OfjMDmGlCZBBwfwePwxEM10RGuLLKaAmYjAwBZWckVEgxEkjxQZIikWWRARUj0A14UkbSIaLmhmRlgw_vwP8p7A8Rs_DXCiKmGSAf-CQXfmvzoBYio4ZQnnmKJX6SiFBWSAsrUI8BkDmUZWD_kEMVGUjBsqFWKBAhZaDkDRSmfSK1jaFuJNUykIQthVzR2iVI3pH-LeS-wZDg-fI-URKP365CUBwqdAUKBqTFCoBMo8CB3BygyhEYa8MMZEFcDmhNAlzHnnAL8AZRFG-WIUAGj8jIRLKJUPhHgHDEpiFyB0X-DgETE0DvQGWSyk0g-CV5RW1w3ymc2TFUAFySwRsUKESG8wMo7QPADKRuq5kbKMAJ8umPLHiUcx4YnAGcwjB9iBxhYJsSEAzHRkWxAgNsYMnURfxqqdMBQeOJgK1wmy0BBSB4FfArjfKkqCUsEGkibj4hN8XcSkH3F40bhcALUKLF2DSQFx10KMVEHzFCgCidVMIlsiNhXRGAuaHAEZCTBZw7xB5WVhlBfGJprM94x8R-IEB41RqYoMRojEhh_CkED-bAFMBfFVtEmQbcwFOTSxIRXhLYvoElF8poToRyYySk2IdqPinyHYvcTQNwosSlgKkHAAAHZHRXQ2VgxIpoXi-ItmXMrYAfECBtg8E4qItGPGEAGJDVeiamIQnqJRq-cOmKTBfGIwPA44aSdC3sJrjN6o1TAKDFFx7BzAqhJfJwDHDG01x9hbSdOKFDkSee4I2yeugXFLAzokoHfNJHYkxRhx5mWCWJIkkLR2A2kugPBLclmhPx83PSfFVcky0PJikrAYl2k5PlrwBWHYGFJJwECmGzXFgZogXF2JKumUuIgVhSzCoPgCk1KY2TgB5SFJBUqrguK1bWCj-9OKgX4AgRnM3sj4jTDxJPHX9JKUIlEIaIHLaTn-_k7YKNPAkSkIEp4FKWlPGnw9nWQUbYNsjDjUBr6HgkAO_AsD8AtkR4fgFcH4A_Biw1QDIJbSQ6_gfI6wfgCxHyDxskADhdiY9MunVh-A5QJ4VKnXb3T-AKUanL-GhDnSUOJ0MkJQESBGF8gYdJ-j8PKB_BSwz07aSACiBoB9pDhNFmHDhkOFDJn6eEHajgDIytpNYV6SJGRn8AAAejFBwByIcAKkdGfDKfrEyQAMUMyDgHZo4AzINMhwpDNDYCB6Z5MpMEBPZlmEv6WzHmXEk4kUyBZggTUJaEiA8ymZLMtmSAB0jfR-AkMsZhMwrQ8ycAfM6mYrJXD8AFmSzDMC0nplGQtZ4s3WQDEOm5joxsY3GV9JAAkzKZ7EoyOLAsDLd7iMM3ALoEgDxFNAa0-PvMNkggBaAPoLIPtMOlyMYA5oSGbMBmD8B5ACgJ1EAA",mdxType:"Playground"},Object(i.b)(a.a,{isOpen:!0,content:"I'm a popover. I'll try to always open in a direction that keeps me visible.",placement:"top-start",mdxType:"PopOver"},function(e){return Object(i.b)("span",{ref:e.ref},"I'm a reference element")})),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)(o.d,{of:a.a,mdxType:"Props"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/PopOver/README.mdx"}}),c.isMDXComponent=!0},"./src/PopOver/index.js":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/react/index.js"),a=n.n(o),l=n("./node_modules/react-popper/lib/esm/index.js"),s=n("./src/Arrow/index.js"),c=n("./node_modules/react-dom/index.js"),A=n.n(c),d=n("./node_modules/prop-types/index.js"),m=n.n(d);function b(e){var t=e.targetElement,n=e.children;return function(){return Boolean("undefined"!==typeof window&&window.document)}?t?A.a.createPortal(n,t):n:null}b.defaultProps={targetElement:document.body},b.propTypes={targetElement:m.a.object};var p=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Portal",filename:"src/Portal/index.js"}});var f=n("./node_modules/react-hook-size/dist/index.js"),u=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),g=n("./src/mixins/index.js"),j=u.d.div.withConfig({displayName:"ResizeAware__Measurer",componentId:"sc-6r08qw-0"})([""," opacity:0;overflow:hidden;pointer-events:none;z-index:-1;"],g.c);function O(e){var t=e.onResize,n=Object(o.useRef)(),r=Object(f.useSize)(n),i=r.width,l=r.height;return Object(o.useEffect)(function(){t()},[i,l,t]),a.a.createElement(j,{ref:n})}var w=O;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(e){var t=e.arrowSize,n=e.children,r=e.content,c=e.distance,A=e.innerRef,d=e.isOpen,m=e.offset,b=e.placement,p=e.positionFixed,f=e.renderer,u=+t/2+ +c,g=Object(o.useState)({}),j=Object(i.a)(g,2),O=j[0],E=j[1],B={enabled:!0,order:950,fn:function(e){return e.offsets&&e.offsets.reference&&E(e.offsets.reference),e}};return a.a.createElement(l.a,null,a.a.createElement(l.c,{innerRef:A},n),a.a.createElement(l.b,{positionFixed:p,placement:b,modifiers:{offset:{offset:"".concat(m,", ").concat(u)},computeStyle:{gpuAcceleration:!1},flip:{flipVariations:!0,flipVariationsByContent:!0},getRefModifier:B}},function(e){var n=e.ref,i=e.style,o=e.placement,l=e.arrowProps,c=e.scheduleUpdate,A=t>0&&a.a.createElement(s.a,{size:t,placement:o,ref:l.ref,style:l.style}),m=a.a.createElement(w,{onResize:c});return a.a.createElement(f,{popOverRef:n,style:i,isOpen:d,content:r,arrow:A,refMeasurements:O,resizeWatcher:m})}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResizeAware",filename:"src/PopOver/ResizeAware.js"}}),y.defaultProps={arrowSize:12,distance:0,offset:0,placement:"top",positionFixed:!0,renderer:function(e){var t=e.popOverRef,n=e.isOpen,r=e.style,i=e.content,o=e.arrow,l=e.resizeWatcher;return n?a.a.createElement(p,{targetElement:document.body},a.a.createElement("span",{ref:t,style:B({background:"black",color:"white",borderRadius:"3px",padding:"5px 10px",maxWidth:"100%"},r)},i,o,l)):null}},"undefined"!==typeof s.a&&s.a&&s.a===Object(s.a)&&Object.isExtensible(s.a)&&Object.defineProperty(s.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Arrow",filename:"src/PopOver/index.js"}});t.a=y;y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopOver",filename:"src/PopOver/index.js"}})},"./src/mixins/index.js":function(e,t,n){"use strict";var r=n("./src/utils/colors.js");function i(e){return"1px solid ".concat(Object(r.a)(e.shade,e.lineStrength))}var o=i;i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var a={display:"flex",alignItems:"center",justifyContent:"center"},l=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var s={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var A={position:"absolute",top:0,right:0,bottom:0,left:0},d=A;"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var m="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",b=m;m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var p={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},f=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var u={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},g=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return g}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})}}]);
//# sourceMappingURL=src-pop-over-readme.bf9e751fc7aafdacc814.js.map