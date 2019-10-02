(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/Meter/README.mdx":function(e,n,i){"use strict";i.r(n);var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=i("./node_modules/react/index.js"),o=i.n(r),a=i("./node_modules/@mdx-js/react/dist/index.es.js"),s=i("./node_modules/docz/dist/index.esm.js"),l=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=i("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=i("./src/utils/colors.js"),A=i("./src/VisuallyHidden/index.js");var m=c.d.div.attrs({role:"presentation"}).withConfig({displayName:"Meter__Wrapper",componentId:"sc-8fz7m0-0"})(["width:100%;height:0.3rem;background-color:rgba(0,0,0,0.1);"]),b=c.d.div.attrs({role:"presentation","aria-hidden":"true"}).withConfig({displayName:"Meter__MockMeter",componentId:"sc-8fz7m0-1"})(["width:",";height:0.3rem;background:",";transition:width 300ms ease-out;"],(function(e){var n=e.value,i=e.min,t=void 0===i?0:i,r=e.max,o=void 0===r?1:r,a=e.visualMin,s=void 0===a?0:a;if(null===n||void 0===n)return"0%";var l=o-t,c=Math.max(n,s);return"".concat(100*((c-t)/l),"%")}),(function(e){return e.color?Object(d.c)(e.color,e.theme):(i=(n=e).value,t=n.low,r=n.high,o=n.min,a=n.max,s=n.theme,null===i?null:i<=t||i===o?Object(d.c)("negative",s):i>=r||i===a?Object(d.c)("positive",s):Object(d.c)("neutral",s));var n,i,t,r,o,a,s})),u=function(e){var n=Object(l.a)({},e);return o.a.createElement(m,null,o.a.createElement(b,n),o.a.createElement(A.a,Object.assign({as:"meter"},n)))},j=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Meter",filename:"src/Meter/index.js"}}),i.d(n,"default",(function(){return E}));var f={},p="wrapper";function E(e){var n=e.components,i=Object(t.a)(e,["components"]);return Object(a.b)(p,Object.assign({},f,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"meter"},"Meter"),Object(a.b)("p",null,"A stand-in for the native ",Object(a.b)("inlineCode",{parentName:"p"},"<meter>")," HTML element built to ensure consistent visuals across browsers."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(s.c,{__position:0,__code:'<Meter value={0.3} max={1} />\n<br />\n<Meter value={39} min={-100} max={100} high={33} />\n<br />\n<Meter value={80} min={0} max={100} color="links" />',__scope:{props:this?this.props:i,Playground:s.c,Props:s.d,Meter:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKY9VHDIsNldoPTgARyEkEjaAEAiIPYQNJXIk1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBneSABZVPYAA2VT1PWMBgIAMW9aBEnk_hnEOBEHUwGChH4JYiGoSg4C0hEzOrCyaGcCBcMudgAEY9I0-RuN4qYAEE5jE9gIyg8gbCgdAw3YeQOTEsRUujGR2BRESYG4YA8KE8q4HkLca2ADLoGy4IADI2vGRJ5koZpmqynLuCGuUwGQyUBlQdp2AAfg2FqwwjfKrn61rUFi6spBkKs3zMGF1WOGAwDCKApkWgqio2pLl2rBNWIIHBLMyFIrwIBqa1reiyNYeIGUqhScCTTCoiwSqIswzcVwTDwjghm6a0YT6jm-qBfuAJMAE4gbQSrzQihSFKB1wQeAPGCd8CAUjwSqk0B9hYfeqGYbe-HEfYZHUYADjJohseAbmidB_HMKoKAhT4EAoDQbY4H4OnmakO6Hqel6GqkK7trML8QGo2jEckVRsH_LQKGA_QGEI_a7vY-UzSYojSuE2AciNCiyqd81PnXGg4Dt_a0MoGZLG6-Brf7APzWE-YfZVf1UAt-1gFPRxRYEa9RZ2TCXfdD1wmgOAART6PuPjqYADVbFCeIkgACS4TBzCzyiPXL-kq8SWvOzoP0zFGnju3MU9EeToU0vZmAllFkYlhsSnPLQTyiaWCYYCPPKJLBGJmgjMexOG1BQgXdf_VEVFRz6cx94SGPeAIdab4gLed8YcTJ_YAAfN-2Z-7ohvEnn3yPjfG-XQCDnxHAQYeqd07bEfM6FI0Q2AwHUviFeMAPwb0wvOOA3QH6pR3mIcSM88Qfy_ijH-w1gb5UksfYBZ8BAD1HJAtOpwYHtEFPkGIrAkFL02EedBx9MFQGwYAk-ICwFJ0oCnZhOxYEwHCJkKAyDl58OvrfMwd9UC93GsyQepEBAAHUuATFHt_Oe5hxIKQXj4cSEUlisArvEPUaAUoEyoRvXB29v673EpfKA79P471_rkcMkBnToHymI-hcoFIAFJu7H3iscB-YALg8R_uwYG7BzQZLQKoxJ5A4ICmyKXLx4k9TRDwDgYGniyF2IcVAJx748nUD4tKM0E0UoRgKd6eY6ASlkKyTkgBkgklgBSWGBE19j6RPMMUAAJMANp2jzBGEikLGJxQY4aMSfozIcwyLiTdtkHAMgcDRFRHANKG8hCwHkv2eA-gEHUACnlYoG8cToAmFcUmMTVGbApoQK4_0kxdCIKojwEptiITaBgD2kihRXBkhCiMlj2CovRTgCK_DNlxRacRFhrNDmO2Oac85AhLnUOAZI8KbCujYJoE8yaGkb7tFcP0Vw5obCd0mvJVEDIXkcjecfD5Xz2ALN0QxQxny8DyD-TAAFBAgUA1BVMm-EKdjQuQugK4CyZgFQ3jfGYHx4VHFmhIqR0CIxGpFkKUkOBlFoPYFcCVGRIFWo5LKjeqJ3AcImlcEVeIkz4yIHYcU2DzT7Bjji2OiTCWpWADgRNYc7hr24IVSlp9QFRKjDQggjBdmzFhFWIBJ8EYEr0RJRNOBk11Tlga0tLdK4JHbnXYI_hxZHgYrLBNSb0Lg2LaWyQBb9kCAHfwz1sdEbVoHEHKOKUM02rLG5AOs74A4BRNOFIzKJgAquP7QOwc4A4H3kQQIAht2Tz3TOw9x7QinoyNu4GV6V03pPWex9aBn0Hqjre-956N4BxiEQO9X7V1HrfQ-jeY9QOvrve-qD9TGkwZ_RB_9a0pl7XtJgI6B9iJ6JjlrHWkhc5CILkKI9AFtC6BAgYMCJcNgylcNbDKjHzSaHiYk-IMw_CdMXUsb0MKCD5TTRvFjkRXBdJNTtE-ZyoDcYkwJ5CQn60fDgJc_hZhEk82salPjhYU7OD8uk9oeA4CKOE4VCMELsGQP415JTFnRN4EY1UiAWArMUls_p21IR7M0CWIuwzEo0FTMSegNl2xgh_zc4-DwcEdjIM6CkDwr5Qt4vYJLSmIEUracfCMGwtBEtItS7i1AfFbBagiylRd50xNREkynDkOAUb_3cAiM6jA0U4D0kmGOiTbAABkFXVZNedAAhBViLDWhQadQI8FidDzBMeo5kFEBRxjYCmDViyRwmPPC4eYdVUKkIYG830UrfEVv-CmOJHNN8-Mb3CwIbYkCUpJeReipYGKADsHIAo30y4QV74l2j5ZeEgswFnUqTee9NgQ-VZqA4gaNq4T2XtSamfN8pkWQjed2-wDw44kdkSFMcCLkG5sjMwPMDA63mT5dHJsI445bC47R3sI4SO8cXamEQrnt29NHUlKTixmLHPHxhzAxdCOMsKroHDpYQuIjw6dWT578vBdmhm1MrR_dwFMMtXph1bjpmLZQUeAA2ougAuv483f5MSUAhUI41FqWFwCtya23JDF1bO4phyCG8uN-A_SSR75PUAXrl5H0TwFVsEG3XzhV27Jcp7gENrL27zVCmkdsGKBGlDaxopIRtbcO7131uGDQxsgJ6FAuBe2RznZunaE3uF6Z9BFzjsxYA9jW7NvL22uwfem011bagJxWA0CZxb4myQ2m0Bd80-l0vA_x8pSb-urSqAhU3wWSPsv4_J_T7MNG3aWB7bYeOmXepY_uUF-UERhfZXK9qCNoBajZs6PMS8AIKc_SGRrYPRf9_9v5fZ7QEQ9ABB7BMpVogDvh9BXVYCwxwCph5xJY7hWdG4PR0CIBMCu96NIAEhoI2UXRsDJAiCoASCwwXwY56MIAYAIoIpq5IV4CGCmCWCEs6DmJKAuEBAwBJ5h14DeCMgBDRhh1UC2Zb8W1uV4CD819uV4kA8REQCMgADx5RNEDoDkC6Bt1cD8Dt1KDqD9AU9GDmDIVt0RD-DBC9lt15C796589NZC8n83NF9JBVCBB1D38qNTZ696NgBg9XAZ9sI58SN85F0l9NExo9dPD1CIxjcREZl2BigIpDI4BJEuAxVAi5M_AEjeE_w4A_BMAeFUFms0AYAhIwwUgJgPVo0NFlCr9cMCchRQCyEH8i9aJn8IitCYD5o6AfCTY69aNa9LteidDzEREWBfI4I7IRpYA1Jt14gKZUAmwV57g5RICGJ_sCB1A8hN5EhHBhj5ItiMgXkMML99omiToehxj-jUAOjXCp8X99D8gKMa9P969ElXjWdxIM0rCxCRh5IuV64djaAsACAdQ-DAT5IfifZt0wdaAgsER5JUBRg9lzj_dLisNDpr9oQEg8C3jHji9uiKDoAqDSCaBBja8aMGBEkjDKSbsRF2EXg_U5RXAPAMiUZCtt0IgZggVt1-gssBSN4vAbhIgRTj5YAwBFU0UnDY5GjcTmiGSaDiSui3CX92DzCdhqTPiRjjB2AABVYRHdOwfwXHI8FgJjAARwZAEGSAiBCDmCSAdlqj2FQBdOZAaDPEiginYB5B504DMM4N2D4GPlb3IC6DbVOwjHNBDU5QBThRoHjyuHaS4Q5CWFjPjKISTO9RRCuDROdD-wuMvyVJuK1JDLVPnw1PzgBJsNmF1L8JGMSTrPEL2XnQA2hPrP5LlGhnFG2HNBGFaJ2KHL_2HXkj7NcAHNHPQH-2FVaOvFNG2AnKXMHOHPlPP1LJwxuNbJGGHSrNJPsJkPrkbOGLpPSyPMH0mIzRZP7nkg5K5PCG4U7NEMvTlBBK7gRKMTwG-UT3lWFMim3S0k7AKElPuwwPki6ElBRTRVgoUj-23U8MlInU3KuLLKmEvPHw6L8m2FcDSCNmoA_ybIYGoQsH4FQG9EZCQHYH4B-GLGqAyHNB_DJCoo0jIpAD4PyGoH4CuH4H-n4o8nWH4HKEjLwP7h4popAASlKkIlgGhCwB6Tkup1FkSFzDyHW1NElDhXKD-FLEEurH4CiDQAkv4ANmr30vYupzoHrnIAYJlmotIprGEoEhMpAAAD0IoAYcAAAmCypywQTUVyiKIyHAdGHABSPy9itvT2agTvVyvSbrcKyKyS5NCOQ9IKgAVhwG-x8uStouc3EzY3st4vcu8vCu6zyoCrNEtEiCCpCrCoipAHWHWnkEI10twF0EgBSAItQCIrPLAkkhAFoB9CyB4totNFoHNE0otELX4FavkAWqAA",mdxType:"Playground"},Object(a.b)(j,{value:.3,max:1,mdxType:"Meter"}),Object(a.b)("br",null),Object(a.b)(j,{value:39,min:-100,max:100,high:33,mdxType:"Meter"}),Object(a.b)("br",null),Object(a.b)(j,{value:80,min:0,max:100,color:"links",mdxType:"Meter"})),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(s.d,{of:j,mdxType:"Props"}))}E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Meter/README.mdx"}}),E.isMDXComponent=!0},"./src/VisuallyHidden/index.js":function(e,n,i){"use strict";var t=i("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=i("./src/mixins/index.js"),o=t.d.span.withConfig({displayName:"VisuallyHidden",componentId:"sc-1ywxjzt-0"})(["",""],r.e);n.a=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisuallyHidden",filename:"src/VisuallyHidden/index.js"}})},"./src/mixins/index.js":function(e,n,i){"use strict";var t=i("./src/utils/colors.js");function r(e){return"1px solid ".concat(Object(t.a)(e.shade,e.lineStrength))}var o=r;r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var a={display:"flex",alignItems:"center",justifyContent:"center"},s=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var l={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var d={position:"absolute",top:0,right:0,bottom:0,left:0},A=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var m="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",b=m;m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var u={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},j=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var f={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},p=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),i.d(n,"a",(function(){return o})),i.d(n,"b",(function(){return c})),i.d(n,"c",(function(){return A})),i.d(n,"d",(function(){return j})),i.d(n,"e",(function(){return p})),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})}}]);
//# sourceMappingURL=src-meter-readme.7655692ed2217c1ef8e7.js.map