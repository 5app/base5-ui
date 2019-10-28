(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/Box/index.js":function(e,n,t){"use strict";var i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=t("./node_modules/prop-types/index.js"),r=t.n(o),s=t("./src/styleProps/index.js"),a=i.d.div.withConfig({displayName:"Box",componentId:"sc-1uuktcw-0"})([""," "," "," "," "," "," ",""],s.f,s.b,s.c,s.d,s.e,s.a,s.g);a.propTypes={position:r.a.oneOf(["static","relative","absolute","fixed"]),display:r.a.oneOf(["block","inline","inline-block"]),border:r.a.oneOf(["top","right","bottom","left"]),flexAlign:r.a.oneOf(["top","left","center","bottom","right"]),basis:r.a.oneOfType([r.a.number,r.a.string]),grow:r.a.bool,shrink:r.a.bool,bold:r.a.bool,caps:r.a.oneOfType([r.a.oneOf(["all","first"]),r.a.bool]),dimmed:r.a.bool,fontSize:r.a.string,lineHeight:r.a.number,overflow:r.a.oneOf(["ellipsis","wrap"]),textAlign:r.a.oneOf(["left","center","right"])},n.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/Box/index.js"}})},"./src/DocumentClickListener/README.mdx":function(e,n,t){"use strict";t.r(n);var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),r=t.n(o),s=t("./node_modules/@mdx-js/react/dist/index.es.js"),a=t("./node_modules/docz/dist/index.esm.js"),l=t("./node_modules/prop-types/index.js"),c=t.n(l);function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,i=Object(o.useRef)(n);Object(o.useEffect)((function(){i.current=n}),[n]),Object(o.useEffect)((function(){var n=function(e){return i.current(e)};return t.addEventListener(e,n),function(){t.removeEventListener(e,n)}}),[e,t])}var b=d;function m(e){var n=e.onClick,t=e.excludedElementRef;return b("click",(function(e){var i=t&&t.current;if(i&&(i===e.target||i.contains(e.target)||i===document.activeElement||i.contains(document.activeElement)))return null;n(e)})),null}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEventListener",filename:"src/useEventListener/index.js"}}),m.propTypes={onClick:c.a.func.isRequired,excludedElementRef:c.a.object};var u=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DocumentClickListener",filename:"src/DocumentClickListener/index.js"}});var p=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),f=t("./src/Switch/index.js"),g=t("./src/Box/index.js");function A(){var e=Object(o.useState)(0),n=Object(p.a)(e,2),t=n[0],i=n[1],s=Object(o.useState)(!0),a=Object(p.a)(s,2),l=a[0],c=a[1],d=Object(o.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Document clicks: ",t),r.a.createElement("p",{ref:d,style:{padding:"1em",border:"2px dashed grey"}},"Clicks inside this box will be ignored."),l&&r.a.createElement(u,{onClick:function(){return i(t+1)},excludedElementRef:d}),r.a.createElement(g.a,{mt:"m"},r.a.createElement(f.a,{checked:l,onChange:function(){return c((function(e){return!e}))},id:"switch"})," ",r.a.createElement("label",{htmlFor:"switch"},"Count clicks")))}var j=A;A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DocumentClickExample",filename:"src/DocumentClickListener/Example.js"}}),t.d(n,"default",(function(){return E}));var O={},h="wrapper";function E(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)(h,Object.assign({},O,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"documentclicklistener"},"DocumentClickListener"),Object(s.b)("p",null,"A helper component that does not render any elements, but sets up a click listener on the body.\nIf you want to ignore clicks on a certain element, you can pass in the ref of that element using the ",Object(s.b)("inlineCode",{parentName:"p"},"excludedElementRef")," prop."),Object(s.b)("p",null,"Useful for tooltips and dropdown menus."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("p",null,'The below example shows how to use this component and also demonstrates why this is a component and not just a hook: Due to the "',Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-rules.html"}),"rules of hooks"),"\", it's not possible to conditionally call a hook, while it's very easy to conditionally render a component."),Object(s.b)(a.c,{__position:0,__code:"<Example />",__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,DocumentClickListener:u,Example:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYtVOUIrwIewoFibYABlbBAjIsNldoPTgARyEkEjD30SjqLolF0gEAiIPYM8sG9MluiNZjWPYzjSPI3idn4hiBEkMSJN9FVUEI9V2EDSUmJNTV2jBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZy8gAWAL2AANgCoL1jAYCADFvWgRIvP4ZxDgRB1MBgoR-CWIhqEoOBQoRRLq2SmhnAgXDLnYABGSLgvkMyLKmABBOZHPYCMoPIGwoHQMN2HkDlHLEAboxkdgUXsmBuGAPDbKWuB5C3GtgGG6AxuCAAyQ7xkSeZKGaPbRvG7hbrlMBkMlAZUHadgAH4Nn2sMIymq4roO1AOurKQZCrN8zBhPTMDAMIoCmH7ptm4HeuXasEwMggcBSzIUnI7aa1rDTf3YTcVykDGsZxvHo0kFGwbML8QDYjiuLIniqOU-jBMkVRsH_LQKGA_QGF0-00MoGZLDO-AjPafsJfNOz5jgP1bT0vIYDPVh9BUwTZZwD0Na1nWuedITtLMYxTHMIx2AACXnWFC3TF0JmiBbRzsUIZhCVIoEoDxe3IDndhgbXMyogSzZwIpbYAVTgboJm6YpsGD0JMHQC8YHI4o-wHIdOBSVAhW6YPqLsZk3amecc-PWPeX9VAHvM7tzFZxSQ91s3BuoJTtiWNOoAz7Js_IsUwEm5ywQII3w4IbvI3acudiC6F58Rlz_VEAguuhLB08zseXT4bfeB3oeR6zy99An9hjv3w_R5vmgJ4-PowwIC2d8edhr1caAexwicGaMnHoIdcy13InsI4YDegCE_kkQ0pFE45CgfoGe59f62E4KgfIBULqP2HkfF-mN2AAHVuhthyBEDYWxdhgOSr0VB0JSGYIIL_Wh_Yw4uncJwOA9JuhoAcHgGU3QRibC6Lgl4EBogFF9mNVws40D4O6IQtYZ8OGSFwTMYBEZaGJ1gIZMBtAsBjjwVwNRzQXhTUqNCDA8jq7HBxkAggqj2G_0IWAtAuipQQC6HYVw4DqLr30EsDwpptjyMOEQq-x9MxolgDHTREBmhRk0efS-JC66ZmOuw8-EYsnPxyVMW6TkeE0BwAQVw7lRzsAAD71PyRfA-xDinkQ-MBABeDCnzyqTU08U1GnNMya0uJpDHJ3QPGzSpZo2CawmcMjJLSn7XxKZ0mg3S4ARmmR0uZ2t4kEA5ODHeU0t7nwuaiUcfRzCoFCAkb-58gbsL7iHXp-gPwz0mhbbeXRZ4CFufcqA2lnmoA7uzPipsMg4HlpLaWdgnLnIiKgfuVxxZwuVjgFu5AcC2DFAAR1CP47IwVRmrMORPNFA4paYoDuoLYBB2o_MhvaaGsNiIKQhZzKOGRtKM2ZvJbiNB-6LzUkTSS_NAK6BAgYMCosNRmiWMADWtkshLA1hPTC0ljJmmEkRdg4LhVdyhUcbVLFJB6r0s4fMw19YemtS8Yalr7TXm8HayQrrAo_OxW3A1nKjXUXFbABGSK94AG0qDIUZR7CibQaAAF1-oquqbQCM3lPnb3DbYbqT1tZLETgQHNMRtaJqcsmrI-i0QwAzefPeRS1nQLLYnCeEY7kLh-efP5NykaXMYFWS559EzNTEIaqYK9tj3GcpGmg8gKzDuaXWEZVywArXrYc55O9LmLVgCtYAoVOwFC8s1HOa8vACCnF5AATDFdA_hNg5EQjARI7R5Absuf2zdO9-52BUZY_EODqh5mgFAdggQi4ly6OgZJA6CBLg_Zc4A2bc3dAfukmDg7R0ipNUu8-rzqIrQRtwGaBbHBRojNOqYABqFqHI32frJW0htt8YAruAGu0hdHLmk2WbRhdnr2BEAIHwEARBxBLsYA63eeAcNSfodkFaSHi0wE45-vufgZzLWAIR4jo4i3zIjNw1gentaIwAISGeM9WlTlyuDCbgDa6TIAl2bmAK9F94m4KBBA4QEgKUhR2Yc-IUjmZx1wCkJ5-c8Gd5SE9VFqQH6M2gpZVMNl9yOVCooiHINMA-VKCZnJOeJseVqV5hoAWQE9CgXAvq5ViczxgDAAy9VzaWNardPKXV3rHq-sKzQUV7yaAADlvQwCWHEBIgcdiDwmU5XZHzp6ZuoJZcbUBJvbDvk2mALaVtrZrdvI2DWGURm0wty5O2JTrZY-_BBJ9VgTYu9_JQ7AI3xFWxd-Ne3z4Hca5KY7U0iOnZ3nveBn97CvbW_1CppSZrnZ2G_EH-gBtHI7RfUhOAwrGz6yapHw2jxjY_jxcHF3Ps7y7QCw03XnrgPFKgOOMwQ3NPQZUropUDnz361D3Ho2egE-FUTnYNad7yEe0sMNnORvTZKR9kFZlkvHBY-y3IdX2cmty8oAVknho83DGVqVQsqvyv0pqJVyUBAjBqegTVstTSKm0ob7dJKp0CLa9hB36BzSfHXDQFWPzDfAHiDMPwY3gKZBRC7mShsYhQDgACf2Agfdq3tHurAlhKBiiIOH90kfoAx-Qi8BPTdDc6m2A0XQ7rYhLckMX1W5kltTAaKgXx_U3e4sb-EYoM9BT5DblcVwHg4CUGHrQb-EsJQvEyuwby2lig_L3uQzIcxGJORbxFqAHft5d5kdQK4XQ4JKe_iwCqcEJ9oCos6c0Hh_Y7G_jidAEwriXpwJFFn39NgQBSIQK4zUn8v872FQ97AAAJMnqnunhGJerRijmehei1DFAPlRDkMAT7ADgHn4AZlUpsEeDgHAH4JgEsN5DgEmJATPNARkOaJkCwHkF_j_jnCjqiO4N3s9L3gkOwJegAKzeREB2Bn7igCDfzVDmj5C4QAGkECAX7eAo5IHTTsLmY4CH596wA5B5KaJnBwDr4waHSIBMJ5Dmj5g2CoCkqfqaHDDaxHBIowZraIRxroBXBSEoFQCB6uDoHJxYE4Edjc4zAYF1zYG4EwC2RhgpATDEHLJ0bFCgrnyaHaFwC6G4jCLmEECiEe6D5Ci2F7qIyeEuF_hn4TrC5fJmAz6dR172yVCwDN52SKHYGhSoDqEECH5kjwRXBgCwBYCv4wDv6f4tTeTeQACkN-XA9-7AHBvRJBQoU45BHYEAVBnRPRI-phTRowVwNgnYdAKOVAceqRyBMOIe_gBAzhmBWRaAE6wR58lhSEGASR6xQBaR9hjhex3hpi0aGR-xVS2A2o_I_hdAgReAxx28OICQHu6maQVw9BeCpuRA38IJjB2-4wmQoJQosozUHBXB0IFI5o-wKOPi4QiAw0cmOQ1GJ08Rpx1hFxKRVxmxfYXhWB2Rm0jyNwsJcAYJwJ9Je-MAAAGhGM1F0d0YLuETEG3gQIgPIZfrmPiYDrhpVOPlcAQWwY9vkbPkUZrngKXsyMvuUdkBGMXsqe-DUZvj3hOPOHItrBCRLBsSnmnjnByccQQLAGAAKWSWaWAc1D8eKWPnZFKRCfSYyTCQwSyQAJoRjmick9FTRCApowARiRRsGYApCC5_FQAAnuBAnelwkCBEBLCj7kDj4ekMFb6eTJkMnwmT7cFoC8EtRIlwDpkSl2TTHIk8E1KSHXFRaeE4k7C5jKFnYCI1GXIZmSktS0nnyQleklzOj9l0k5l6mvY1l2DiiJxonAKImcFwC0lhFylmQ-pU6KmDQtnbCO5CmKFLBcBLAGw4AiCSLoqbRLBdBgBnIzxk7mBobRbz6zBOw-ZQB-YCAKboCYR7nyarS2AKHZBbQLoN6-JLpKzLT8DbnVD8BLpXkrRXnWYxA8CIZflLrbm_noWoXLLnw_nIW4WIXADHmnkZDnkqbcYwaMB2wlEwBRa9qKlakLTjaaYEEAAcmEmFK0mFmE5Fn6UgVFGAsAcWkgT5i-AgCWMuTccuqWcMyCZuFuLaipGa_Kcknq2uagkq2g0qwscqIkbussbuSRLs3uzqUw6KNKMsZqsKis8KNefune5UuZ55hhdRx-TlM8TR2Abl28bkHkXl58-64UKQflCRoxJF6EhhDxXlmeLErEap55Nee8_GqpS0UGMgNRSBDlbcpFM8wBLl8E2V28wBHlWABV58wBPlaApVBASB_-M4VVwBoh9VwAkV6EQMBRTcnqMK1K8K_USKupTBhUEs5lcAJ5zoOoYAEYYa7QKIci5Aa88oe-8y81fe8B4QMA81kANQ6A7QH2zltg9RE-Zl8Ko1MA41k17Ql-pw2w81p-JZN1qAPBF-V-11u1Ix56GQVKQ1x11Ap1E1U1EQMw81_QH-L4SwF1IgEQ1oYNNpL4r128xV3UVExcn1GK8AJ1Z1_1Es81MN81CIegQkYNXgNwkQQN7RsNHIhhgc-Qk6R1tKY1YA5lk1tNaNdyRAgQAgqE3VmKKI04KQcN58VhIwKNw1OAXgg-hhOB042wwtx1YtUAlNg-Nhg1qNI1cthhcQdwMtdNv1jNYa7CzNI1P1GN7Qr2G1_iKIO1FN-tXNaNatM8_NtR_IR4StBtotwg8t7lwE9UjUWtaNPNBQhhPBDsZNvtI1rN7NhhlAcx_sQtytItRtf17Q84VEdwtg81IwC-ltEVrxiN7-eZrtCd51ONYNeNtABNJoZNWdZguRklWA-q0lUwnqau-WHE4QOeseQoI1AEml-usq1Wekw0MoQSZqg9kQrg5omgCVRRqBQSTk5GyRHNIQpUUa_2H6o9UQ89ceJy586ODhaB3ocaRy7CHwAiP08peCzYEAPgc9axQowecezglU3QTk7QeAcAUAr4iMEYVNMAjgceSwB9K90hmaoiY9OARAV939FIf9d9hY_9S9h999Qoj9Eo1a59lkt6AgO55gTkEDWAj4l-F2QNKQHgr46DUwSNhAwQuDkD7QEiLw61YN7kpDe2e8tgWoNSuwTkt9RwAO69ThPDHIOAw8EDqA7gCICMjAk-T-SY2kbDcAdEIN_UPDZm7DnDm9Qoe2v8Yo_y5gQS0qoefJs4DxcDQoslvszw4coGF2VhyEOQt9fQhRF9hYNAhj_UD5PDzlnDMDvDJoJDTh3k-BQT0jAA7ByNVOfJQ7GnHv1HQzYLQKZO-F_Wo1gxowIFNB9FEz4-wFcJg9sD41o9onqK4Dub7Co0Eh4OOFE4xGY3kxkMFL_JgPMA4jOHsOYBIqOJIpwGOIEscJwzAuwFE6YwIE45ZDYB_kMzfQvUsDDJKGY05AQU6cA-fCk9sGkxk4M2TXQGkzM2aJozk301g9s544aHs-k11q3FTqeD49eM9Ts_iHXDeb8tcuTpkRGgvYmo0g81gZiAHPECNTw7c1dXAO83Hp8_UsMxJWYOucyKeP_DsLYxgM4L4fovsU852i83o3vU4ZkT4e4UsLi24S4FcjOEEVC83JTrC6ODlAgfC9sIi-gMi-4ai484DneQJpA4S74UwyQ6-Cy1gUSXYwS88US34SS18YlrLnXXpEijPYYXg140cwYTPNU8q4tq4zsYYeM3gFE4Yas3qwo2TYYdcwvUC1NjPHCzY2cYy9yxa9S4PlwHSwy0y3gdXc3QKm3dHpIHnm4hpYLJVn3XvEICIH5nVA1M_S1LFBc09MyCzqntBPgyzui7vEUSzgivqUQNgW8P7TOGmpeTnMI58QWOaH5ILuy5Rmm-wLbMGwQKGwQN7TltXWuZS-YAFKAQaUpgZiSNY4nHWw2-qjpAQFzsm-yzFB9DFNoj_X2-G-wNRj61zgc3YyxiWegOS3vG2-abKE5DFADhu2KItdrF25ec-NO41Ewyeqw0URu2eFuwNAFOEhSP1DW6e9WukQ6R2_pvez29zkndaHtnLsAM-17eG_m0QPG923uznKSGaTezXcpRxBXnglXtsH6xVjKiLCJBjCbkKObuelbmajbi-L7iJM4KwLOGah6P_InKRykFPc45qWXk5Kbrh5bixsdrChWfqdeZvDPHvMAEIdzic0RcnAIKRf1Bxyjuyw-YOjR80oRQbMRaJ61c0nBYB61s0qwBADACMJ6sJr5L5M1CxS1CxTBcsrfhMCtAJypm_iDZZ-GyppAAkJxQvQ58BiKPchBSABUk4OgKZzBuXDMO5zuvwN552H5zvLRbBqFAWDwPwHqCxU_rFCE4oM1I_t5CE81FAGwTgOwW1OaAAJw4DNTkAEFJhJjJfmjSksWRQtQ4DeQsVsGKCVc4AhPVe1exSxQsVNcEGRSRQhMlc4BsHVeKClflehPDff71dsHSO9fJff4df5fxmxR1eRkpc9cZfkDNeXqRTNQjdP7NSxTsDNexT5d7exRJhGeBlFdtQEGxT1ebelcnd7feTbdHcEEhO9fddFeGdHeTfeR5c9fNSLfmiRSEGRSnfmjZfeQHcPdP47dfdsHNRveEEsWxRNff6XosWXrSOpdJjo8teXpJgDeI9fe9fY8Y9Y9fcXchO1chOE97e49QBJiEH0_M8sVJiRQABa_AJMQlNH4l1de2DH1Ach-1x-C7L9wvL0PyUvchCuaW55vVM8AnX-XXvHC9XkCONAPD1UNdEM0rrK8vMlUv7rckDu55alfM3d_r6HOl-qjV6E-skgDvEsBehueViQivFHO4R--V6EJlhozRXv7WHoxV8VduIkAVBQwf2EHoUfdV_vEf-q_V1AMfMkkgKfqA4fiezYAylVjv3vFVWfifOf4wrxaf7okgLVrvNeAHb1U4wVHvwVYf4Vf-B6CfrvhhmfwVRfwV1fdwTKDMeWAqiHMeVHfhZHqHWlBuIkBtssVl4FbvulapiwTum0-lK_hlXubitlIkIBm70HqesH7qnrueg7BeZgbDugDb_Uhn5D7ANHZRKV2Bk_0QqI2ySKQgsAXk3CicmybcuvDkDUQ95XBbq5-S6tfhnimEYg42c0PEDzpXAIGnYWACjmKpSlJ8IQcIJQG_jGB2ACceRDnDsBRAdydgbxGXjgBMUQg_sVpnoQeYLQP41heRLVCmACcq2jcc-OZzwBf5aCM8Gzh0WPTgkzIZVRsuwk8IVQx8M4GiCximDtkgcnZZpEX3NAw0NilRCQSkCkG2k9eO8FcoVREGaIxBEpGcCKDJr3xDo7CVQl2R3iKDgaHRJAqoMzJGCyaWg8-DoM9o0BBC4bDYssx3hiDKBpmO6L5HHYwciAEYRDjf1ti-D4gr7K4JBxCFhDw2zpaqnoMuSeEjMSNcwLINrTyDlkuAhOEnGHDwDi4nACyEBgLD0gEEjA1pl4HQDJATGPIZpJnx3wfsjSzSAGlcGa6pceBmiHQe1TMA0c5eMMBXo70RTK8mKX-Qfk3H6GwphqSvbeBQKiGh0cA4deplANzrI046std2hLUMHqDpBiwhOrrVdo5sUgnNL6pimxQO1xBDglIMYJBr7D6ahwm2iNWOGnCVaWKR6HDT17OgDeKWI3lMBo6m8OI5vdCM71CpKdXeU_XuhhxqzblrAdcaKgbG9ZR4Y8mRXfjVlEIAA1eIAyAREeg8GKiOjpZFEIABpJ9OmyRRtC5QohVPIDUDp7CqRYIjQaDRGLE0iAXkUQq6lZERNUQIdBke9QEC3DCAuvaNr6hd53ADM6EZNnx1ELCt4R4ndCKsU2A7A4RR4flmgyEExA0kpmEkWSLDSiEPsYpK5Lo3YBtpgUeRJuBi2NHxE9RYI0kYkBBb6j40VwTEdiPDKZEra28Guklh-Hy5BhMlMUUuSH7q4zecVEEU33QiQiA2DAPePSDmDqhsgWoMXvBCxHDwZYTkKahAOupg0wBjDOUDmKepXUdqIoqnOGNd4SjXeUooon-V96JBMI27BURqNSQDRTMHvEMpixNFAoMSaSWMURATFJjEgKYhkCNTQBPxtkrY5NpaO7TxEcK_Ywwk8keysJE4hoiyIPj_C4dUA0nbQTqAerJALqz1e6jwTXh2J2g-YzMa9BqTdAex8YnIKblaGbA5QHvV6NunkSwp6gsEGct0A1hUiKQbBc0ESkkApRmir0MxswkhoOBnAzgZpKbgEylxnYkkHwM-JnA4BLBPJJtrXXrp_Djg_Y88oCMkDAjXekgFvhCOt5odtK_dJPLENxFIj26PrC_t8P1R7xChqAYpsgUByUj2gxVQQtUmFDcjlB90ZolxJqTMjM0-gD6nKFLoZBuRRNSGl5E4l0BtqhhGwXaQ4kCT5Jwo5tpc2ZBETxRHHSsc42AAI10hD7amksEFr5pREhxOsfnFd6Sd2x8RXAWKALSB9sAhceoZojQFyhhyjDDxLbDQhQ49g0dUYPImn5Sg3QMISoEwOaLdNCBbA9hKI3IT9EuBk-OcQQGKpUdbAzo_wDgiCHtsQhVNWwL9FyDhhIAzoRYOwmKoABxIQLHUFrvQWoi7YqSuxSnFVkWUtK4JLUOJ1SkeVwJdiVJJTsImJzgecGAGYJ50WJYaQyXnXBbOSsAawtVvOLQn68MJfoqUEHwbGoB4OeE0MQRPj5BUIxJEkKdCJlangUG1wqiafzwk7CA-u0JUdsBVHKYT-yIqvvsRrwwtW2tVPaWWN0mA4-OMwaDqSESCkhHii9GYB4FJDy1vmD0-sTZI1Gwj9iaoknOy3iK7SYhdUk6TsIMyyijwhU3qU1NEEfSaRMQxIM0g-joy1BBmQGZDO3o7wYhogZZKTOpYYyZg0ad0c0h6mNTSpKU3aYKLtIBQSZI4etkzO7aszlkMQkZvTIFmnSCgEorGdWjZlFToYeM_QR9M5EyS-wxMiWWTOuEUzZZ1M8-DEI8D8ytZ0s0GbrPlm4zOZ-M9vrsNtIxCsARsxmeTK_YiyYMMQqAA7MFlOyIZLsz9OzMVmWzPR5LKSphN2k4SgxLdLaUtAt7d99p5WQ6Xb2OmOyzpj09ulcIKDXS4Zcoijtni9aojixzIGOV9MlE_SqxXeUkJlWegEsJYSwGGuEghqRBLyRrdgLhFllWSJOsM26fdIRm2SrRogiudCS7wNIIWmfIeQrOXYBz2ElIgGmjKTnSyAaushqf7P6maI-JMNGeZ7O1m1yqZi88ecvMuTSTIgzo-ubKAZkbzpZB8tMtvL9m7yypmiJSTvhMGnypZubJSQvOvl9Tb57CXCA3jUBXA1RJ4f2IHGjw4BcIpgyGQAr-bALcIYaXCAaK-agKvmFsveQQC9FStlpiuQuXcFwn4S7gkgXvrHL1xRiE5SeY2TOHOlPS05M4DOZ3P2LkL26ecjSTG3MD4Ki5FYkufpMvlEBu2RASmYJhKiL02aJUb2bQvlEwyLRsmZUfDPdE9ypxcUvPnmRPmSyMZl890TvI_kpSi-hMgTBrJgxPzlFlMn2ZckQF0zdFSi8mXwqpnmyOZyC8-EXx5mID7Zms2ebmy4VmzRZAmcWaYtIUpAIwRAReoYppljz1Fci9yGgFVmHztFHs5-T4p4VuLXZAmQ2U4rPkuKwZli9xUgs_lWD5FTIhxVEuUXCy0W8skgHkvMXCLHmVipeZktQXoSoYmElhVgvDkCocFKI8vgQp7pELyJkEGenQq9Y8Ml-MImhVnJD45yURL0pPjK2ToQBU6nHKOhkHmIjARKIQbEAvion4i8EhIqYA8UsCel4SLE2YefFexeRvYsIOIInG5GQB48ykjWi8HgGNR1JTcPeLMoEDzL1oWIPZSMO3iTLplhhDOrMAmHQsW2ZfMxOeXLF3A9JlkQkorRSka0Ky7CFgEQGdrNTgOZ7dhEHTaIg0UpTy-ZSlIeJzTSUmiTIoYTbnrTeOgy1UdIo1FIzJ5OdIyeVORVNRmBN_D6Li1-ZAKRq4FZwExQmn0rE078pWZcmYGUJeRXgUaHVPBqjRXoR80VWUlObR5ugH0doBBiiAf01F_KneGiqNbUqzE2yhgl6RhX8ytlOy1MuNJhXxp5ZMKyZEx3-aMgJZiqn6ok3iUZLoVGvLCQiuyD8yZ6_8h4rLJeJmJExRAD4qS2-Lyz4VztS1bKsTgGrniDxCpTfJSnHkIwWKmOnVKTWjBXl8AcaampGC8qglK7D0QtMBhoLalK0oFQQDDkbTh-BWJ6biwOlQjiFkEe6UNKYVngKhAgKiY2oZTPRXpgKzOeSrRaA4mxEYUzJkVHnDrnirK_5hOJuCgMxgzoMYB2ubWtqz65o70QMvoT3S4OlajiGspjylZIxtvTpaBjBGDipIIfUEfyJPUB8JJAgewCNABhO9r1t6r6HQAD5fLqaTvN9WnXGX2hHOUAaCBeMzDe9f1_6z-AHy07NRmoVFHYE73A2QaiG36g4IFIWUL4neWakSgH0070hXsiQO2FwEwDmBvemG0INhtw3LFpeRapPPXwyAnr1aokm9XerDCGFP1sK-GsBhA1hIZ4sGqDQPBnhoaF8hhIjSRrw10AJhm0i6ZQpSD7qyJfuSiU71okbK-w_gOANYCQgf4T16bKamEAiBFjGFvqbxRGBwLqhHAeBbeUikHWGbhQxm5-ndAyWjyLNsaAqDKtNF2bhglmwEOGphhyqp17LezVZtlLiLB17CfRNLEIS-b3N_gl-ssKEhgLwKoW1zQ5u6ARa5Qxwz-ksi3TxarN4anyA6qOSGj2W2W_zZxrSSxbmgYWxzXdEVVkR2an9eIqO3fYhCyt6oz0Y2LSShQBEKmtoGptdHDidcZ1RrVNBmiBlvN7YxrYVu3jmaMtgID4H4AEDdRdi6aLLeaBq3sJ8tS22duAonXAKJNYaRrVm37w8jc2TpeNAuPnBLjat7YllYAv-b2CCgO2ybZgGO0rqKNkEbxZuuDEcQF1bcS3rrnaUHrDcWHZyBrDBz3Ydg0VQjgHzn6WUBw1lZWNdPunixNOU4aKgZU9w_VjKCGqwPsSbVtwW1QgU1GeoyB460RekU8IGFvTCkfGmYp3qTvFDk7YAlO_cfnPMCfbnooKuAOCsgg_17pY2BjSJuGZmsB40wOANeBSANAogaQJYGIyPDEqxF6vZxl1DRCSgaIpweIPdKTSJxgdb2HYJuIMwAaCAaupyFzv7UA5pxKbeXaa2eo6hTC_QcoP1Bp0dgAKDOq6puJSF677pECtlZ0jjwC6WN6GFNt7ueopTLkfgYXaLvF02qYMJOS5FSuwqYwDYoUT-NzqXTHkE9-gd3YnCYUgspdMAeNEHp3jHlAWlu63ZYl92fpnBKClKXqIpDc7-dgeoXSLrF1KJuc2es1dvERntjNxjAeHUIER2MRMiznC-oroXgq6oAG6sQDdOfWAwpA3eqOpYjEozxJWTcFnSL2mE9UPlJxavfsUWFuF5gg0dhJtpppPCTyHgelJKFxRwACURKSDClIz1txD9ZwtGnSgZTn7L9xKKpfmv91CgBd2-g7ScN4H-AG94exYXbW3jZ6f9vNF_TAEJRv7_l9E4tYrmX2oBtIAHRA7jqFBvaI5O689VOBPVSaZ-NWbpSnN6UL06Jb0o9RetdEIy2W7Y4oM1DgIOtEC_ubFv_NFY-qeCgaiVvIHaqrr4DaWcgzgddG4SsDj63nagDwOBsiiIhyffssdo1jZJQEwwkxKbCEDNedG7keoDyCajEgjgANqofxr3KlpvBmSlIeugrFGlckLA8xvEPRiiizGmQ1mq8hLF8N3Ih4lbrmUx0vIzG7kfQ1oCnSmodq35bSLdbPbfRiuZjUIavoqJCJbGvXdYbAh7xgNeumQ40LlArVB8a1FwyaWSm3leRgTFkWrLyPbw-JhRr4cHJLWJHP4ERrAFEa40XY4jIAXIUuImA4J_AvsZ2rInYCEoMgtQgoXMCQQO5K4O4tpo0DPAtQkebky_kUVqPQbT458aauQC6DBA7EAZLguaG1ZJENWKIXvMhgpoDRzQqx9YwYx2JXAvJ4TZlD6IbqcAYAEG7jVUaiN8bZg9Rx5UhsWXr6IgLxhfOyMiS6FRi3h0YiJS-PihtgPx89BE1-KjFrwkSQEyUxBMKTgjNSw3iWoeMzA7jSHQTQkBw3CaxDtajpXvHRNJBSN-G5I_3LzIm1-86RhJpHSQ2OGsT3hxKeMN4Hor-BXfD6VKXVop0vIXQX7PpwwHpopJYItk_CcMOInFc-JzE2RtwmIHPQrap43BAESY6642O56GgaOCvF5JdgFU85B4Mim-DqB1tZKax2drqATwUcGTsd0L1Mx9Rv3EcbDxEGY8fS7tZpPMD266dv9C03c0L3AskGAgAXVziWAh7ADTe5NoOtMyemdgC7L5qGYt3AtQWX-56lzgNHnarRWg3kkG1p3mmYmTkAM2Hqb3sIFVPh9auwj-jbEUQaTH3bGZ9PxmRs0uSlXZK1V2lTQrpnxilOpJNCHdFO6ZuwkFYYBizAemM2Ge2AJmiVQci45hJdMZmhQmY5upVG2BN7-Y1AQhQeq3gWB-A2e_gFcEgpFg_gpYc0D-EkjFR1g_AUwvkGoDrn2A_AAgpeYPPVh-A5QBY1Mrbhnn-A3UBaIRFKJ7nSiTTf2IkFzB5B5EhHJIuUG3M1ARmIAYKCuZEzdInzKgHXPzGvMQWmm8k-EFpzgBnnlzNYW89ZGgsAA9b_Mz0vTwWMLggTUNBYO7fc6uhFiCwv3hSkXsuITHLpRfPNMxN-qOjMG4mgug9Qe3kRi5BVAZRAJ6qFpAExewtpcn8PF4i2aEtCRBSLy3CDRRaczVggY8gflMBY2SQBJNmgBc79rIkuQQAtAH0FkHXOQVTQtAcgpqDgFzB-Ayl19PICAA",mdxType:"Playground"},Object(s.b)(j,{mdxType:"Example"})),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"function DocumentClickExample() {\n    const [count, setCount] = useState(0);\n    const [isActive, setActive] = useState(true);\n    const excludedElement = useRef(null);\n    return (\n        <>\n            <h1>Document clicks: {count}</h1>\n            <p\n                ref={excludedElement}\n                style={{padding: '1em', border: '2px dashed grey'}}\n            >\n                Clicks inside this box will be ignored.\n            </p>\n            {isActive && (\n                <DocumentClickListener\n                    onClick={() => setCount(count + 1)}\n                    excludedElementRef={excludedElement}\n                />\n            )}\n            <Box mt=\"m\">\n                <Switch\n                    checked={isActive}\n                    onChange={() => setActive(prevActive => !prevActive)}\n                    id=\"switch\"\n                />{' '}\n                <label htmlFor=\"switch\">Count clicks</label>\n            </Box>\n        </>\n    );\n}\n")),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)(a.d,{of:u,mdxType:"Props"}))}E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/DocumentClickListener/README.mdx"}}),E.isMDXComponent=!0},"./src/Switch/index.js":function(e,n,t){"use strict";var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),r=t.n(o),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("./src/utils/colors.js"),l=t("./src/utils/units.js"),c=t("./src/icons/Ok.js"),d=s.d.input.withConfig({displayName:"Switch__Input",componentId:"sc-19hdplp-0"})(["position:absolute;opacity:0;"]),b=s.d.label.withConfig({displayName:"Switch__Wrapper",componentId:"sc-19hdplp-1"})(["position:relative;display:inline-block;width:2.4rem;height:1.4rem;padding:",";border:1px solid ",";border-radius:1.4rem;transition:all 250ms linear;box-sizing:border-box;"," &:focus-within{border-color:",";}"],Object(l.b)(2),(function(e){return Object(a.a)(e.theme.shade,.3)}),(function(e){return!e.disabled&&Object(s.c)(["&:focus-within,&:hover{background:",";}"],(function(e){return Object(a.a)(e.theme.shade,e.theme.shadeStrength)}))}),(function(e){return e.theme.links})),m=s.d.span.withConfig({displayName:"Switch__Handle",componentId:"sc-19hdplp-2"})(["display:flex;height:100%;width:50%;border-radius:100%;overflow:hidden;color:",";background-color:",";will-change:transform;transition:transform 150ms ease-out;input:checked + &{background-color:",";transform:translateX(100%);}input:disabled + &{opacity:0.5;}"],(function(e){return Object(a.b)(e.theme.links)}),(function(e){return Object(a.a)(e.theme.text,e.theme.textDimStrength)}),(function(e){return e.theme.links})),u=Object(s.d)(c.default).withConfig({displayName:"Switch__SwitchIcon",componentId:"sc-19hdplp-3"})(["position:relative;top:",";left:",";opacity:0;transform:translateY(-100%) rotate(45deg);will-change:transform,opacity;transition:transform 0s linear 150ms,opacity 100ms linear;",""],Object(l.b)(1),Object(l.b)(1),(function(e){return e.checked&&Object(s.c)(["opacity:1;transform:none;transition:all 100ms ease-out 150ms;"])}));n.a=Object(o.forwardRef)((function(e,n){var t=e.checked,o=e.disabled,s=e.id,a=Object(i.a)(e,["checked","disabled","id"]);return r.a.createElement(b,{htmlFor:s,disabled:o},r.a.createElement(d,Object.assign({type:"checkbox",ref:n,id:s,checked:t,disabled:o},a)),r.a.createElement(m,null,r.a.createElement(u,{scale:.8,checked:t})))}))},"./src/icons/BaseSvg.js":function(e,n,t){"use strict";var i=t("./node_modules/prop-types/index.js"),o=t.n(i),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./src/utils/units.js"),a=r.d.svg.attrs({role:"presentation"}).withConfig({displayName:"BaseSvg__Svg",componentId:"sc-1bxcwkl-0"})(["display:inline-block;vertical-align:middle;flex:0 0 auto;width:1em;height:1em;"," "," font-size:",";",""],(function(e){return e.spacingLeft&&Object(r.c)(["margin-left:",";"],e.spacingLeft)}),(function(e){return e.spacingRight&&Object(r.c)(["margin-right:",";"],e.spacingRight)}),(function(e){return 0!==e.scale?Object(s.a)(18*e.scale):Object(s.b)(18)}),(function(e){return e.vAlign&&Object(r.c)(["position:relative;top:-0.12em;"])}));a.defaultProps={scale:1},a.propTypes={scale:o.a.number,vAlign:o.a.bool,spacingLeft:o.a.oneOfType([o.a.string,o.a.func]),spacingRight:o.a.oneOfType([o.a.string,o.a.func])},n.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}})},"./src/icons/Ok.js":function(e,n,t){"use strict";t.r(n);var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),r=t.n(o),s=t("./src/icons/BaseSvg.js"),a=Object(o.forwardRef)((function(e,n){var t=e.size,o=e.color,a=Object(i.a)(e,["size","color"]);return r.a.createElement(s.a,Object.assign({},a,{ref:n,viewBox:"0 0 18 18",width:t,height:t,fill:o,fillRule:"evenodd",clipRule:"evenodd"}),r.a.createElement("path",{d:"M8.467,12.071l5.254,-9.1c0.337,-0.584 1.085,-0.784 1.668,-0.447c0.584,0.337 0.784,1.085 0.447,1.669l-6.045,10.471c-0.241,0.416 -0.69,0.638 -1.14,0.608c-0.369,0.024 -0.744,-0.118 -1.004,-0.419l-4.349,-5.016c-0.441,-0.51 -0.386,-1.282 0.123,-1.723c0.51,-0.442 1.282,-0.387 1.723,0.123l3.323,3.834Z"}))}));a.displayName="OkIcon",a.defaultProps={size:18,color:"currentcolor"},n.default=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OkIcon",filename:"src/icons/Ok.js"}})},"./src/mixins/index.js":function(e,n,t){"use strict";var i=t("./src/utils/colors.js");function o(e){return"1px solid ".concat(Object(i.a)(e.shade,e.lineStrength))}var r=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var s={display:"flex",alignItems:"center",justifyContent:"center"},a=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var l={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var d={position:"absolute",top:0,right:0,bottom:0,left:0},b=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var m="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",u=m;m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var p={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},f=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var g={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},A=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return b})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return f})),t.d(n,"f",(function(){return A})),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i=t("./src/utils/units.js"),o={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function r(e){var n=e.flexAlign,t=e.basis,r=e.grow,s=e.shrink;return{flex:"none",minWidth:0,flexBasis:t?Object(i.b)(t):void 0,flexGrow:r?1:void 0,flexShrink:s?1:void 0,alignSelf:o[n]||n}}"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),n.b=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,n,t){"use strict";var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./src/ThemeSection/index.js");function r(e){if(!e||!e.globals)throw new o.a}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var s=t("./src/mixins/index.js"),a={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function l(e){var n=e.border,t=e.theme;return r(t),a[n]?Object(i.a)({},a[n],Object(s.a)(t)):null}var c=l;l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var d=["block","inline","inline-block"];function b(e){var n=e.display;return n?d.includes(n)?{display:n}:void console.warn("Only 'block', 'inline', and 'inline-block' are supported for\n\t\t\tthe 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS\n\t\t\tfor more complex styling."):null}var m=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/displayProps.js"}});var u=t("./src/styleProps/flexProps.js"),p=t("./src/utils/spacing.js");function f(e){var n=e.p,t=e.px,i=e.py,o=e.pt,s=e.pr,a=e.pb,l=e.pl,c=e.theme;return r(c),{padding:n?Object(p.a)(n,c):void 0,paddingTop:i?Object(p.a)(i,c):o?Object(p.a)(o,c):void 0,paddingRight:t?Object(p.a)(t,c):s?Object(p.a)(s,c):void 0,paddingBottom:i?Object(p.a)(i,c):a?Object(p.a)(a,c):void 0,paddingLeft:t?Object(p.a)(t,c):l?Object(p.a)(l,c):void 0}}var g=f;function A(e){var n=e.pos,t=e.position,i=e.top,o=e.left,s=e.bottom,a=e.right,l=e.z,c=e.theme;return r(c),{position:n||t||void 0,top:i?Object(p.a)(i,c):void 0,left:o?Object(p.a)(o,c):void 0,bottom:s?Object(p.a)(s,c):void 0,right:a?Object(p.a)(a,c):void 0,zIndex:c.globals.z&&c.globals.z[l]||l||void 0}}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var j=A;function O(e){var n=e.m,t=e.mx,i=e.my,o=e.mt,s=e.mr,a=e.mb,l=e.ml,c=e.theme;return r(c),{margin:n?Object(p.a)(n,c):void 0,marginTop:i?Object(p.a)(i,c):o?Object(p.a)(o,c):void 0,marginRight:t?Object(p.a)(t,c):s?Object(p.a)(s,c):void 0,marginBottom:i?Object(p.a)(i,c):a?Object(p.a)(a,c):void 0,marginLeft:t?Object(p.a)(t,c):l?Object(p.a)(l,c):void 0}}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var h=O;O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var E=t("./src/utils/colors.js");function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}var w={all:"uppercase",first:"capitalize"},y={ellipsis:s.b,wrap:s.e};function B(e){var n=e.bold,t=e.caps,o=e.dimmed,s=e.fontSize,a=e.lineHeight,l=e.overflow,c=e.textAlign,d=e.theme;return r(d),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(t,!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({textAlign:c,fontSize:s?d.globals.typeScale[s]:void 0,fontWeight:n?"bold":!1===n?"normal":void 0,lineHeight:a,textTransform:t?w[t]:!1===t?"none":void 0,color:o?Object(E.a)(d.text,d.textDimStrength):!1===o?d.text:void 0},l?y[l]:void 0)}var v=B;B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m})),t.d(n,"c",(function(){return u.b})),t.d(n,"e",(function(){return g})),t.d(n,"f",(function(){return j})),t.d(n,"d",(function(){return h})),t.d(n,"g",(function(){return v})),"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof u.b&&u.b&&u.b===Object(u.b)&&Object.isExtensible(u.b)&&Object.defineProperty(u.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var i=t("./src/utils/units.js"),o=["auto"];function r(e,n){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(i.b)(e):o.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+n.globals.spacing[e.substring(1)]:n.globals.spacing[e]}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-document-click-listener-readme.44f45577e3bf5072c398.js.map