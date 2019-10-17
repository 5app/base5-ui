(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/Arrow/index.js":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/react/index.js"),a=t.n(i);function s(e){var n,t=e;if(e.indexOf("-")>-1){var r=e.split("-"),i=Object(o.a)(r,2);t=i[0],n=i[1]}return[t,n]}function l(e,n){var t,i,a,l=n.defaultPrimaryValue,c=void 0===l?"100%":l,A=n.defaultSecondaryValue,p=void 0===A?8:A,d=n.centerOffset,f=s(e),m=Object(o.a)(f,2),b=m[0],u=m[1],g=(a=u,"left"===(i=b)||"right"===i?"end"===a?"bottom":"top":"end"===a?"right":"left");return t={},Object(r.a)(t,b,c),Object(r.a)(t,g,u?p:d?"calc(50% + ".concat(d,")"):"50%"),t}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPlacements",filename:"src/Arrow/getArrowPosition.js"}});var c=l;function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getArrowPosition",filename:"src/Arrow/getArrowPosition.js"}});var p={top:"translateY(-50%) rotate(135deg)",right:"translateX(50%) rotate(225deg)",bottom:"translateY(50%) rotate(-45deg)",left:"translateX(-50%) rotate(45deg)"};var d=Object(i.forwardRef)((function(e,n){var t=e.placement,l=e.size,d=e.distanceFromEdge,f=e.style,m=s(t),b=Object(o.a)(m,1)[0],u=function(e,n){return Object(i.useMemo)((function(){return{position:"absolute",display:"inline-block",width:n+"px",height:n+"px",backgroundColor:"inherit",border:"inherit",borderLeftColor:"transparent",borderBottomColor:"transparent",transform:p[e],transformOrigin:"50%",clipPath:"polygon(0 0, 100% 0, 100% 100%)"}}),[n,e])}(b,l),g=Object(i.useMemo)((function(){return c(t,{centerOffset:"-".concat(l/2,"px"),defaultSecondaryValue:d})}),[d,t,l]);f&&""===f[b]&&delete f[b];var O=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(t,!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},u,{},g,{},f);return a.a.createElement("span",{ref:n,style:O})}));d.displayName="Arrow",d.defaultProps={placement:"top",size:8,distanceFromEdge:8};n.a=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Arrow",filename:"src/Arrow/index.js"}})},"./src/PopOver/README.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/PopOver/index.js"),s={},l="wrapper";function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(l,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"popover"},"PopOver"),Object(o.b)("p",null,"PopOver is a low-level building block used to attach an element (the 'popover') to another element (the 'reference element')."),Object(o.b)("p",null,"It's a wrapper around ",Object(o.b)("inlineCode",{parentName:"p"},"react-popper"),"."),Object(o.b)(i.c,{__position:0,__code:'<PopOver\n  isOpen\n  content="I\'m a popover. I\'ll try to always open in a direction that keeps me visible."\n  placement="top-start"\n>\n  {popover => <span ref={popover.ref}>I\'m a reference element</span>}\n</PopOver>',__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,PopOver:a.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZoMoGYdVYDIsNldoPTgARyEkEiyIogQCIg9hA0lKiTU1dowVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdlIAFk09gADZNO09YwGAgAxb1oESZT-GcQ4EQdTAYKEfgliIahKDgPSESs6sbJoZwIFwy52AARiMnT5H4wSpgAQTmKT2AjKDyBsKB0DDdh5A5KSxEy6MZHYFEJJgbhgDwsTqrgeQtxrYAcugfLggAMi68ZEnmShmnavKCu4Ma5TAZDJQGVB2nYAB-DYOrDCNiquYbOtQRLqykGQqzfMwYXVY4YDAMIoCmVaSrKna0uXasE04ggcFszIUivAgWprWsmPI0EHu-zg4B1eZ_QB77dBAgg-BABp2llVw-1IygWPqOGEnGARkgiEIoBGeC7FI4I0BCY4IC6abmQmaJ2G2IJByPdhWFsCAPFgHB-BXb6yQlGAPphiIZnNFFXGFTnwfYL7AeAQVBRY67GEC9wJ1O2rZZRjJQ1O5q4YRlWwAuATunnPn9CkJXUDEbbAdrRjSL-gQpakJ6Xrej6WqkO79rML8QDohjfpYyRVGwf8tAoYD9AYQjjqepZgDyGAxKyTCjWo01FRVVAY_tYA9XcVw0gEJYxQNsMEVQ0jYVJOCEQ-pruPlM1zVl2E2KIrzSMsfr4Eb_tSPNcT5jgP1bWOlKBCEMY0_dD0J6n9vjpI4VexnmiPWXgh4lH7P2LFfIopS_Gukbj198imAj9FmAd8mgTu3MQPI37u5itk_0CGSmSwVELfJ9GCKUUdK8F_htMMwDQGRxoBAkBLARZGxgTEVAzoBCl0QbYEGdBEGDTAHAUciCeZ130AQ-2LE0E_xAYKfID9bIQBqIsChqJTqGwROQj-IDJwXDLDBUhGQxThi6MXH-mFpIvzgFnH-X8wgRC1LYLeRsMoAGpRZT0Ad0SQ7AABM7BFE6LgfIhEEiP5fwANpdDAHqcU9Iuj1yWHgggpdLH-D6KbGgcAAC6GVE7J1oFlIqRiQFf1PI4pwEBICUWku_EBIC6CuDZtkK4qIGTYIEFOK4ABOAArCpRBYAlLHGiIjbgpUom_xAWEzK6BCk4BwfYuwPUClbxqWAXBo44BazLvCGAb9GHRIIPYxxViXH1wjFUpptS2kdJYd0iRZSCDbT6Rw0cfRzBjNcLMkBShhEBKYQQFZN0-mMHzqgQuGQqyLIIIwUu0zODIL4arYA5jpml3YAAH1ebclBpdmq9N_m1XKm0FlzOdsw8uMBznAqYrCX55S7moIebLB23yYW3ACi8GatD6FqzRTQuh2QgUXMIa46GMta7EoJXMvyLBwkCDgLVUpFyQETIIFcYAzKrjFAACRspafYpQ7BuXSMoLI-BCJ5DFC2ewuZgTHThCTuJWArKUgzFCClcgCJYCZAflcM6UA8GSsZb_MAUAIAzFZca01AA1UWEBogzXuJjZJhoTUzGtf0O11A4C3kcHoGgiS0QwANdK3-wTTp6lCTSxBfT5AUpARCi5wAsrmLsQqmANdeYfSWCo0YaFSJwDsTlbIoRYAAFUZhjMDcVYp38pUXKkf_MY0ls0jDUZLdgakGlRlrcGxg89RgoouQfGqwBm1qNjcGyhZL-akozfocdhrzG1Wbbmu4HT53BqqrAJdDaV3tM3YGgdv9NyHo_PxQ1MrUBCS6EOgA6tEQtRxpJdvPb_K58AL5XxPtQc-UVapwELegYtMAy0Vswse7tfTT1gxfV0PZAhzDPona-p-8KBH_RfX0xFZCHnmPXYO1Nf7U14bmRg0GtVSN0GI30yG-hao0ZoFR3-zbt1T0Y0sixQybH6DpY8sNnHiVNUPX069F872f02AIWqImopiYfYx8DL6oOGpjb8qQUKzmMKkMc05jsf5QYWagO-lNzBalOudAgTENYCCyj_LD9ywAQIo6gCB-6IH0YIBA5tEDpMwFkxJhKPSP4VIjAAQic8VWD-zUDFqgDsyL8GDnIfVL2P-p4LzEtqgeUIH0cBeHQIkH53bFZ6Wg8GxdMteHwrAOu_d9LD0eAlNsRCbQMDKTZo1kKL6qBQCFMpEYNhaCdaQ14VJfCOwQDyMpDSWko1zL0p2AoylMmmRiipSys2-lRCwDergExlKrZUgAUiG4anAZ3XMopU92-Ncy2pQPmSikdDb128dvfeiT47zYlZu2p5LUAIX6f4ihnAmAzrFos-hDKpTR0XyuDFTRED9HuARFcHJP92XtogUSj6ylBZDaoei6gmKEmOrTT_ThgirimbBxdSzLEEpGOBy_buw8oc_2MEYB0NAhBQHxN0dWLF2h2GbZVC-7AeQ_xh1FK4K6WfwBwNFoggQhEfw5w4AFhopoP1JEIZmBlZyI3MfiGmbZ0B2BxoEPs_g8E5BxhMboIxMhzFzE8sFhZ0wugl8YgFYYZcDjl-0ozOBbBigAI6hHJtkCBavnCjj54WX1Bxmj26RnLSiXuL1Qz913Hu7TUCAmjyYLnqJKC85TwLjIQuyaiu6DPF4dhXddOhJeT3vIP5I6NtnmYAeFfZeV4XznPqS-8_66OCT8eK9HFsJVYYIxzBCnYPnqYGeYjA1Bl3nvXhS8D_YM4GwYApjl-RvLeI1BZwp6oLSuA5pXBYDoeLtvTLeWjg37n3vSuMg751M6PYzR2h46WHaC8BuEiG0jlFgAPzAIX06AgBSEIBonYBSk7BCHnxmAfl7HpBaXv3aGFj_hfD2COBwLoHQDmhxniFgPMCPzTyODt02EqjwIIOhAwF_3jxygCmCBYApgfnqBX2x30Ff2HhqWdB1DAAjD4LcQ5B3zVQRDgHNzoMnyrxNg-gf1s0q1LgEPl2oBgBELlwjBMVlzf0oA8HUC2A807m7zfyM3cUkPZyLyHx5zzE2HtxoPkOP0ojgGGGLRyEtwJwflzDyAKHYH4F8JmiuDiTgFLzlX4EYOCJxVCMNDxXQGiN4LiKJ0SI0PaS3ygCkPVXgDkMpFBSb0-HXBoEUJb0zBX0byNnUPMJ7y0J0J7j0IMMEKMJMMlFQn90sKmmsIHx_nFwcDyAiCIGpFTysxVgEUCIjD_BSHqBsiOF6BRGNE3QKCWFRHcGoXtSWFHHIA5A5g_n6L3zaDynYEt0RiendxKMP0mHGFcDpnyL7HQj6M52KDsyq2KCWGKCc3ePYGKH3W-NKHu3-ObX-J8z81qAgX6MqB-PMScWsQE2KCeMfyYTQ24WaPlyUP0DlwZ34iOlzj7RGHkCMVxKmFB3Mx4WYgyCzl9n9kkHxODnDA0HDiAkT2jj3k1HjjmOPnQDQVyDwUsT8lTjdCbkzjHntDRLsDXhfkHlzx3hzimFPHxJIg2OoHjlPFglnTcUFOwg9AVJ3VSNmiMS_jWMvTmKIHzhmDZw_kFlx0yEvTgloAAE0IxzRslDsIsRAsgIwYokxMlMAUgOQht-g4CWU5RjS4B7SYAAANCMV090reXxTRTRX0mAf0obYAoYm09YiMp02MicD03xc0IyZM1MiBCAkM__W08MrIaMl0o7OMz0osv0gM7EsGIzB-Xky-BtBqLEMQ_oeSRIdUohaBEILsi-QLC9ISUdVNOwaSROfkygRDEBK6atGzbtEI6gZScIyIwbYBbtOBHmJyOUNAE1Z0c0NmU4bYE7X-HEdAPbEc1RMXXRdodbX5TYWAwgMI0cqKHROUF80rPpBrHYZrZCdARwHrbhdoNACTF4K8kBEbNJI81AaCl8WbeCjIAAGVOgIDAt61DMrL0jDBQt-TQoEGvBECGJwogrDIIv0E627TDNNP9XWNNPNJMX7H5FFgHKnX0HcVmwYqFCIB1CDLQCWyO1gs_hdWgmiDwGUkFCSBSGoAjDUhyVihUiO0x1UvUoOzdKvKKkQRMSlzTQeI4qxkHOJXcT0zi2WQSynMaizgMy_nxIyk5NFm5NOgjF7LzSWHMSrRKUkU9UgnELMKHSWA7wRFekiDPHQDSBTWqhEQeLzR2VMXYv7LMo-k8WkjVO4rcTEOyoICU0_gCpOIpHxO7N7lnLwVKunN7JMq4o1OCrHNmS_lJPB0VP1K8T5L5gXMYWXJuxAV1KniVMJ1QFyvqvjhRQRD0AEBENaRDOKHNG5SHXYA0U0XkE0neJRRaoulj10CqSxmtSgAZCuDCpgAiqICipit-T0sYRMROrOouqMqCrsQvgso_gKseHYC1GoH_3YFgCmGVj5jQOSBSs4qRmVPMGiFRFZjlRVnsXjy2tECC2aAjH3XYAaX3TYr7M4rSp4qknGnaFfBrT6UwD-u6AxpBtMryvcVmSBXrVUVTUtL6TO1yxKq7OnMQWZoRravBo5vO1TQgUJLPV2X2WK2VnK1w3oOqhYwASI2WrEHsqU1QHxJB1sAPIADlvRuhpJ2h8Sd5laEbd1Gbbg8rcdSIhsh0rgAAORHORZHU6mUB6q2lsswZW5nXPI2tXew0vIYUYQ0UWePEXafIlHIGeC_YCVwNASvOwbINIRw4IcvPKhPLeNAYXOUXA0WfA6A80YguaTAyAXAFQ9vW2o2e66K6KcU9_fvWwznawREBtPMaAXnHwslHIKmOgquNFGcUXTyQaeG06SOnITg0w-I__M2wA9M0AwAssqAwgoM-A-oJAnIZWUidA3nPO7A9O4UOaLOnOocXGCggO-u2gsmhghfYglgi_YYPBVZSPYzHgpEoKjInAFEacFIHfL2svOgkXJaiMWAGcAsXu_ITAYqFfC22ot_RXKuraIkrADuBGxAhtKkpQP2eiO2FeKAektQMOQCdzVkjuJ6YMRuDOC0K0ReMUzo1nSUgcaU4eW-LXGaVYVAEtPBL6ogK6UpeLcwMi0vcUEaoeGAXunEDAX2kLfGkC_u50EgtG3qIRk4EYEHU4bLfQQHVs-h5kTeeILKVLUcdLTNJaEaSjccmIZGkLOIJhlhyICLay8waLBIWZYLELbR88co_KlWODcwMBOgKy9xjiTUYMD4U0WgDRqACMTx5zG4hSHRlxlRswYJkHMzcHQ2yJH-Jx3R_g4SQ8Y8PLRIZ21AOJt21nZJ1XEwJ49gNJzMHGCnePYJqvMJ25CIPYkBfovUQYk4mkPYYw0wrYk8eoFPa9cHFgxGNLFx28e8K6OIBIRElJ0WYZ4lJ-1orpswQWsGYkk6GnYiP7JB5QGklDSQH9S-Y-P8ACbQXBsCOU3xs0eOROM8FpLpjs75Ih3iLOc5hOPBMdR55uYYSgbYYWC-MhqYfdEOoUwF80YorQtxf58ByhoUqU_hkeIxF5yABIKSwirU6iM7SQYYu_S9HeL-WElxR9SW2AdAFW1gBEj-blJFqAFFudIW0iCUF4Q8lSWZKzY1UYK4GwTsLx1QtAWgAQbOiiNxK4fPZ0WZXCc0EOLAK4c0GKLOYoIxNshh_Zz9GALKb9d9KKIqImwqy9KYI3CqmAUuVaJqoq4AG8iYJYN84M-K7xC-CMHynZa525yUDy3y7VplVAfZ414RJYExc1vAS1mAd8sw9Vodaw7xkW_FwRfWKTbWOW-y_iZVw5nAAp8q7V0N2HKF-XIPEPGAcPSPBhaBnE2B46eBpN6-LZlBhiOkganNfU7Bk5-7QwTnAAcTYGCERlbk1k0D7ETpfpWPxGn0VeoCKE504dTvsGcGcCJe6AWa4khgjuzi7uvvyHiTWfM1HZnYlIXwTvqvoNfr2PF03drsygWKGNsDiVgGKgRuFy6EQE3fNE0sO0NB3fkKxqxjJi4JmgffYEtr7DxT1RfZcLJq2GoD2uSCHuM1Hc3ZvU2BseHDwV2tBsg_bOn1BwHtiskjmJ6H0AyAKE3evjcZWVzH61iDxDMbaZ6EGMiGpByHzDxGXufxZU3dKHiHIBjPUt0W5Umr5Zmr5Q5HJaPfME5zPCwG9DJHgHveE5HAIG5uGsfAnqIE3pfGKg-vHZkkU_2zUuOyWDLKtutk51rZGCGofgU_IsiGU7ALqgSe2tA4wE4oOqOvYCMi1bU-sbsGAE07lG0rAL0-c4M5k7k9M_aDLOzowEJrc_cY878_aB86WC88toC6M5M5mkfDnpU-Wo0XU8eWDa07EtWNIiuFdKS9HCC9S5gODKs544yD45fzTpMi0lc6y_c5knS7y506HDNVWCgHY9dPYEfYa45AM8f0MzUfMFPB2rA84tkS_cUoppycqjs_A6MeC3m7xu1unreQ-TW7Gm1vS8JoZWFoS0Q6m4_d27lF3sWiAPM-tHYFNpmFHnmWbzwXdaO_MBO_s7O_xsu5NGDbmmUmnppqWeLY7mHfG9HBxpyqCqMb-uMtSsTtETytmVh4-_A8h4IHseRqCuDwZJEMfHNEJtKhlaMZAUxtqvR7sSW-xqpoymx8ChNQIHx9fCB4_k4fYDJ_h7GsW6Q8pvqupuB9UfvgYeS_1MQyep_ms_WbQlqsc61u8-07AIRsm8-8SFl4ymtpw6mtq4e3fG1eSvfbqqHOCqp956N4ypk_R7gFGqN4Kq_lR-m9vvbMytHGV_A5m-HsUsYXm4p8YXt9N-JUsqFrZ8O45-p75-Ops4hxl_iGSRur98SHd-M3cSuHj_R9-UWiV5N9V5j8ZG7XWlw-mqY_T5-Imd6844FTagL-16KnJYuVEp0-2QF8OhLftHgZF_BsrZpKxZTswdDmOYjhZLOfYhIrV7Xg9BH5z8heq4EHsB92CDH--AL9n-WjoEhfnBdXyAlKFI9HX9NU38hapZpczAX8P-vlKOefYggBgBihigAAlGtT5g5r-7-OsL-O5WWesRgb0ndH-P_Rhv_ZgkLZmPSHiBJBb-XATAOYAX7ADQgoAxIOAK5YGkQex0UpBP0Opk5jES_Ofs5h_i787gtgCBKf0IqOZn-9_HYBAj_5f8ncECGAXAIQGQCWy1JVBt30vSSA0BDIBtgPyhh4MUB8QGYH4DRazxJA4QaAHAABDgV4W_EMHicSFBThZeEYe3EeCMZs9igMUUyBERNQ5BBUUAfga4AUGbAjwz9PwJgFWIGC_wJ5eVGGBSATAhu8rJvs6Bb4klI-Mg0bAIFl6d9mBdCHvtP2X4GNUAnA5ktwLAhfwfB2Ao2vuTgiHl2gxqbAENnIIpBUATYPmA6naDT8hs6gQYmEkSBD50mqQgviFGWbN84Gzg0ISv1QAeCGILAsQXgM34BDTmzJISDUOnxFMmULENliMGUictIBQ2WgFgAIAOx2hykJoSPAgSkdaAzgIKNFHaD55HcgA3Jqs3gbDCKhmLLwawKIHHh--gQqOMEKKrrDMwLQ1FODU3IeANBcqHoYV0xzk5culwj-F5zRwfw_O9wwoQ4OKHrMEiyLM_hjx9jIMu-qwsQVfxv5kDtgdQptmBGMDsBmG3QCYNPn8CkwjwLARGOHgyDYxhwswMkMiGnJ7BUASQLEY0DPCxQYohdMwF_ABEv8dgUkH-ELnIBdAO2zBZ0kQGvw2A4CoLYCJkBRBhFpoFESQplHNAMjzQTIvACyO5z-AQyIrbpDvAWHODSRQI5YVUMkCUCABMwEEYPwaEHA2hn_RUUbQVFO42spoH5iMFkFDYDRqSRUbqPFD6jDRu5EBMaPQDXg9RZo24uaBtEFCYGrwsktqNmCyi_hkgWgQkHgEQC6AyooIaqKZi2BYBfo-gcEAOHrl8k7QLcodR3Lo51R7LOUF0NX6jDdsMlWKBAitYflsxtmfSIthuGBIXUykLgkpXbSViVIzZH-CRVRzzDHB67AZr6LAEBjyh3w7ZqgxEF6pxBQodpJsPqHnMcoMoRGGvGHGRBXA5oTQLiyKp8C_AGUUJqXiFBZo_IyEVxsUkkR4ARxi48CgdF_g4A5xeg70C1nyqMIPgshb1mDC_hYsFx3WZcYWHAoTDeYGUdoHgHDKE0VyDWPBJRRXEnjfKm4kcTgCxYRgvxMAH8Q-PvHHi1xSwO8QICfEIhFazVUWHTHMDSRgJQBWuJeUAIKQPAzPJKEVRNTBkox7AdCWMJvjYSUguExCUVVsBahkJGUWCddHHFRAdxQoXYodWGInIjYV0RgO2hwBGQkwWcEkXAHQrBsGJS4x9KVDCxwA6JAgbYKxIECK0PqYoHxojEhhsikE5-bAFMEYnYchm7bcwIBSaxIRmCd4voPhN1ZJ0NJC4_yuBURzITKKL4nCXoJUquSlgKkHAAAHYaxDw4No5O1pkS-IuvFcrROQkKTioi0QiYQEcnHUHJEkpSRonzh0xSYjExGB4HHBRS-WjBPanTBVwfVMAoMfXLiNHzOFOAY4VOjlMYKZSIJAgCyUJAFHVSn0sEpYGdElAL5pIHkmKP-KCwySwpsEiKb9WDZ0AFJLUs0GxLu4FI5Jw05qX7TamKSFWY3GTpRWvA9YdgI0vnEoO1Zs9FBMAExLBM8TvINp0xHrA1j1QfAJJK0i8nAD2kSSDpHyWCQm0F7GYZO14RrMBQwB74OwqrHacoOsa4xdB-g02EYK-mmCgZHhL6WJCsE2DHpZgaQRN1LxcBXpQFEyegE-mYBAZm0jhn9OAk7TgZJgk0JRNfAYy_wRk96YsCOl4zLBdAawXgBiYvCUBkuHQX4AgRYt7JU0nAb5KIkczM8GknMe-UymOZepckwWaJODIQJTwy01adsHFmjgkZxklrKjOMEYD-qLvBGbaLekoy0ZGA5Zr7CCjbBTkYcagDg1BEgB34FgfgCciPD8Arg_AH4MWGqAZBs6YnX8D5HWD8AWI-QEdkgCCIgAPJfs12dWH4DlBqRpqB-NbJ9kpRRcv4aEM7Ik4nQyQlARIP4XyBd1iGLI8oH8FLABzzZIAKIGgHDn8BJWYcbOT7IKnEF4QV_OAOHLNk1gg5IkAuSAAAB6MUHAEmBwCaIS5Oc4hg3JihmQcAq2duZ3J9lpyu2tU72fwBbltyjIQ84ItQzhY9zMkXkweSAB0jfR-Aacq0D3L7kDyO5K8lcOvM1D8jhAPzIdD3Nbk4AVIM8v2KmnQAsiPcbiBuUZH4kXyr5zEycZoAbmNzNEF8_ieLAsDbR5A1JTObgF0CQAZimgI2Y2xVGyQQAtAH0FkGtm2zAmMAc0GnLRH8BAFMaeQEAA",mdxType:"Playground"},Object(o.b)(a.a,{isOpen:!0,content:"I'm a popover. I'll try to always open in a direction that keeps me visible.",placement:"top-start",mdxType:"PopOver"},(function(e){return Object(o.b)("span",{ref:e.ref},"I'm a reference element")}))),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)(i.d,{of:a.a,mdxType:"Props"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/PopOver/README.mdx"}}),c.isMDXComponent=!0},"./src/PopOver/index.js":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/react/index.js"),a=t.n(i),s=t("./node_modules/react-popper/lib/esm/index.js"),l=t("./src/Arrow/index.js"),c=t("./node_modules/react-dom/index.js"),A=t.n(c),p=t("./node_modules/prop-types/index.js"),d=t.n(p);function f(){return Boolean("undefined"!==typeof window&&window.document)}function m(e){var n=e.targetElement,t=e.children;return f?n?A.a.createPortal(t,n):t:null}m.defaultProps={targetElement:document.body},m.propTypes={targetElement:d.a.object};var b=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Portal",filename:"src/Portal/index.js"}});var u=t("./node_modules/react-hook-size/dist/index.js"),g=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),O=t("./src/mixins/index.js"),j=g.d.div.withConfig({displayName:"ResizeAware__Measurer",componentId:"sc-6r08qw-0"})([""," opacity:0;overflow:hidden;pointer-events:none;z-index:-1;"],O.c);function B(e){var n=e.onResize,t=Object(i.useRef)(),r=Object(u.useSize)(t),o=r.width,s=r.height;return Object(i.useEffect)((function(){n()}),[o,s,n]),a.a.createElement(j,{ref:t})}var E=B;function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=e.arrowSize,t=e.children,r=e.content,c=e.distance,A=e.innerRef,p=e.isOpen,d=e.offset,f=e.placement,m=e.popOverRef,b=e.positionFixed,u=e.referenceRef,g=e.renderer,O=+n/2+ +c,j=Object(i.useState)({}),B=Object(o.a)(j,2),y=B[0],w=B[1],x={enabled:!0,order:950,fn:function(e){return e.offsets&&e.offsets.reference&&w(e.offsets.reference),e}};return a.a.createElement(s.a,null,a.a.createElement(s.c,{innerRef:u||A},t),a.a.createElement(s.b,{innerRef:m,positionFixed:b,placement:f,modifiers:{offset:{offset:"".concat(d,", ").concat(O)},computeStyle:{gpuAcceleration:!1},flip:{flipVariations:!0,flipVariationsByContent:!0},getRefModifier:x}},(function(e){var t=e.ref,o=e.style,i=e.placement,s=e.arrowProps,c=e.scheduleUpdate,A=n>0&&a.a.createElement(l.a,{size:n,placement:i,ref:s.ref,style:s.style}),d=a.a.createElement(E,{onResize:c});return a.a.createElement(g,{popOverRef:t,style:o,isOpen:p,content:r,arrow:A,refMeasurements:y,resizeWatcher:d})})))}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResizeAware",filename:"src/PopOver/ResizeAware.js"}}),x.defaultProps={arrowSize:12,distance:0,offset:0,placement:"top",positionFixed:!0,renderer:function(e){var n=e.popOverRef,t=e.isOpen,r=e.style,o=e.content,i=e.arrow,s=e.resizeWatcher;return t?a.a.createElement(b,{targetElement:document.body},a.a.createElement("span",{ref:n,style:w({background:"black",color:"white",borderRadius:"3px",padding:"5px 10px",maxWidth:"100%"},r)},o,i,s)):null}},"undefined"!==typeof l.a&&l.a&&l.a===Object(l.a)&&Object.isExtensible(l.a)&&Object.defineProperty(l.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Arrow",filename:"src/PopOver/index.js"}});n.a=x;x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopOver",filename:"src/PopOver/index.js"}})},"./src/mixins/index.js":function(e,n,t){"use strict";var r=t("./src/utils/colors.js");function o(e){return"1px solid ".concat(Object(r.a)(e.shade,e.lineStrength))}var i=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var a={display:"flex",alignItems:"center",justifyContent:"center"},s=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var l={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var A={position:"absolute",top:0,right:0,bottom:0,left:0},p=A;"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var d="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",f=d;d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var m={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},b=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var u={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},g=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return b})),t.d(n,"f",(function(){return g})),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})}}]);
//# sourceMappingURL=src-pop-over-readme.adbfd01a8e5c0cb38742.js.map