(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/PopOver/README.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),o=t.n(i),a=t("./node_modules/@mdx-js/react/dist/index.es.js"),l=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=t("./node_modules/react-popper/lib/esm/index.js"),A=t("./node_modules/react-dom/index.js"),m=t.n(A),d=t("./node_modules/prop-types/index.js"),p=t.n(d);function b(e){var n=e.targetElement,t=e.children;return function(){return Boolean("undefined"!==typeof window&&window.document)}?n?m.a.createPortal(t,n):t:null}b.defaultProps={targetElement:document.body},b.propTypes={targetElement:p.a.object};var u=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Portal",filename:"src/Portal/index.js"}});var j=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function f(e){return e.indexOf("-")>-1?e.split("-")[0]:e}var g=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPrimaryPlacement",filename:"src/PopOver/getPrimaryPlacement.js"}});var O={top:"translateY(-50%) rotate(135deg)",right:"translateX(50%) rotate(225deg)",bottom:"translateY(50%) rotate(-45deg)",left:"translateX(-50%) rotate(45deg)"},E=o.a.forwardRef(function(e,n){var t=e.placement,r=e.size,i=e.style,a=function(e,n){var t,r=g(e);return t={position:"absolute"},Object(j.a)(t,r,"100%"),Object(j.a)(t,"display","inline-block"),Object(j.a)(t,"width",n+"px"),Object(j.a)(t,"height",n+"px"),Object(j.a)(t,"backgroundColor","inherit"),Object(j.a)(t,"border","inherit"),Object(j.a)(t,"borderLeftColor","transparent"),Object(j.a)(t,"borderBottomColor","transparent"),Object(j.a)(t,"transform",O[r]),Object(j.a)(t,"transformOrigin","50%"),Object(j.a)(t,"clipPath","polygon(0 0, 100% 0, 100% 100%)"),t}(t,r),l=Object(s.a)({},i,a);return o.a.createElement("span",{ref:n,style:l})});E.displayName="Arrow",E.defaultProps={placement:"top",size:8};var B=E;"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Arrow",filename:"src/PopOver/Arrow.js"}});var y=t("./node_modules/react-hook-size/dist/index.js"),w=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),x=t("./src/mixins/index.js"),h=w.d.div.withConfig({displayName:"ResizeAware__Measurer",componentId:"sc-6r08qw-0"})([""," opacity:0;overflow:hidden;pointer-events:none;z-index:-1;"],x.b);function D(e){var n=e.onResize,t=Object(i.useRef)(),r=Object(y.useSize)(t),a=r.width,l=r.height;return Object(i.useEffect)(function(){n()},[a,l,n]),o.a.createElement(h,{ref:t})}var I=D;function G(e){var n=e.arrowSize,t=e.children,r=e.content,i=e.distance,a=e.innerRef,l=e.isOpen,s=e.offset,A=e.placement,m=e.positionFixed,d=e.renderer,p=+n/2+ +i;return o.a.createElement(c.a,null,o.a.createElement(c.c,{innerRef:a},t),o.a.createElement(c.b,{positionFixed:m,placement:A,modifiers:{offset:{offset:"".concat(s,", ").concat(p)},computeStyle:{gpuAcceleration:!1}}},function(e){var t=e.ref,i=e.style,a=e.placement,s=e.arrowProps,c=e.scheduleUpdate,A=n>0&&o.a.createElement(B,{size:n,placement:a,ref:s.ref,style:s.style}),m=o.a.createElement(I,{onResize:c});return o.a.createElement(d,{popOverRef:t,style:i,isOpen:l,content:r,arrow:A,resizeWatcher:m})}))}D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResizeAware",filename:"src/PopOver/ResizeAware.js"}}),G.defaultProps={arrowSize:12,distance:0,offset:0,placement:"top",positionFixed:!0,renderer:function(e){var n=e.popOverRef,t=e.isOpen,r=e.style,i=e.content,a=e.arrow,l=e.resizeWatcher;return t?o.a.createElement(u,{targetElement:document.body},o.a.createElement("span",{ref:n,style:Object(s.a)({background:"black",color:"white",borderRadius:"3px",padding:"5px 10px"},r)},i,a,l)):null}},G.Arrow=B;var R=G;G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopOver",filename:"src/PopOver/index.js"}}),t.d(n,"default",function(){return M});var H={},C="wrapper";function M(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(C,Object.assign({},H,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"popover"},"PopOver"),Object(a.b)("p",null,"PopOver is a low-level building block used to attach an element (the 'popover') to another element (the 'reference element')."),Object(a.b)("p",null,"It's a wrapper around ",Object(a.b)("inlineCode",{parentName:"p"},"react-popper"),"."),Object(a.b)(l.c,{__position:0,__code:'<PopOver\n  isOpen\n  content="I\'m a popover. I\'ll try to always open in a direction that keeps me visible."\n  placement="top-start"\n>\n  {popover => <span ref={popover.ref}>I\'m a reference element</span>}\n</PopOver>',__scope:{props:this?this.props:t,useEffect:i.useEffect,Playground:l.c,Props:l.d,PopOver:R},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGAzzAMAtimeRXWNeUzT9fk7Ug9gAAUoFcRIUiEUIMCWHCBzsZCjVldoDwALwwiDcMoGYdVYDIUJoj04AEchJBwli2IyRisPYQNJU4k1NXaMFUF0FFjlOOjnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnQyABZzPYAA2czLPWMBgIAMW9aBEkM_hnEOBEHUwXChH4JYiGoSg4BshEPOrLyaGcCA6MudgAEYHKs-RZPkqYAEE5g09gIyg8gbCgdAw3YeQOQ0sRyujGR2BRNSYG4YB6JUzq4HkLca2AKroFq4IADIJvGRJ5koZpRpquruBWuUwBIyUBlQdp2AAfg2MawwjRqrkW8bUHy6spBkKs3zMGF1WOGAwDCKApmOpqWqukrl2rBNxIIHBvMyFIrwIIaa1rATWPYgQV0h2wdXmf0_shws9BoPgQAadpZVcPsWMoWH6hxhJxgEZIIhCKARgIuwWOCNAQmOCAuk25kJmidhtiCQcj3YVhbAgDxYBwfh4ZrMkJRgMGsYiGZzRRVxhXF1GLAhtHgEFQVYc-xh4vcCdnu67WiYyUNnsGnG8aNhCw1C-cZf0KQDdQMRLrR2t-ME2GNakAGgZBsGhqkH7brML8QB4vjoaEgRJFUbB_y0ChgP0BhMMegHJLQxUVVQTP7WAPV3FcNIBCWMU7fhGAyJY2FSXwhEwYGnPTUlc1tdhETHvIljLFm-Ac_7FjzVU-Y4D9W1e_VXtqPdD0BOFeIp4LpiioEIQxnn9oPQ3ree_tMV8gyoraa6HOPWP9KYDP5WYFX9a5O7cxY9hiMR7uRrtP9AhCq0sEogCDKy3mlDKVleBALOmGCBUC040FgZAlgSs5K10AZAtAzoBBV0QTEOASM6C4PmmAGCBBcFS2bvochcUXhbW8hAGoix0GojoFODIVw34ZDFOGLoFdAHIU0p_OA-dAH_zCBELUthgGoLKgAahAaMMB3RJDsAAEzsFkRo5B0iEQiN_l0AgfRzBRl_pAxgJdUBlwyFWSBtiCCMCrhcGRmCuHG2AC47BlsxAjWqudeQ_tnpOIRDYoBZjoawmYXYwU-QX70MYSbGhsSGHZEunYqJTcnaYy1hksGqTQlAJiiwSAGQ4DdR_mk_JxDSFXGAFU0cVxigABJanwVIUodgzTxGUEkSghE8hihKEifkz4MxwgwD6rAGpKRRlFXIAiWAmQX5XBelAGCgzTH5PkHkuxISKnAAql0MASwOqwEbtLMGSwFEjD7ncY5VVsihFgAAVRmOgLIDVPrlPyXYsRm9RhlSuUo9gzUTJTS-hUipjB96jCGRCggJ8urAEBTfbZ3z8kUMyQQE2OT9CorhZAw53Urk3LgBbMAeK0WQJOYi4lFEcDUopRUzcsKgEflkviv-1AFJdARQAdWiPco4mkTEcrMdfU-59ujUHFYiuA9z0CPJgC8t5tBkLMo2RUtlKMOUGKMeCylQDGCcM8Tw0EGqDXazjlXbqhzGVoupd1BlLKKmI2Rt1V1dA7UVN0CBLFI14EEC9fkq5RK_kjCDXYnlN9-V_02AIG18Bo0CrjRGgg6qOVarhVsoZUhwnWOYVICxViBAhK1ak1AT92bmC1M9V6BBoZmwEBVQBlrYY4MAR61AsDqWwJ9VQwBVzYFRoyjGwVeVv4duaBGAAhJ2xquqBDmFQI8qAeiCWjj1SKw1S9gFQHGMrU8F5MXdQPKEMGOAvDoESINHNrsWWEq1j7Vx5KWUOuAF8uFHgJTbCIm0DAhkRbfqShyqgUAhSGRGDYWgwGDVeAEFOEUHYIB5EMmZCyuCKk2U7AUQyABWZyWUjLuQw_knAZGe0suzea3Z-T_UY0DSypFYa7XAGHTAUdKac2SFdjR3Ns8oClvzuW41OBMAvUefWiiZUvnIoylcLKqjYHaPcAiK4RlYF1IIGp2BGKwaGXljB6JtDqBxOyFcVEDIh2sIuGWdgNbxNvQbbDPKeiROfwHhPaTgDjBGAdDQIQe6JjdFNrDdodgrntRvuwHkA6w1KI4QODz8AcDLqIIEPhv8fMOF8YaDaL9SRCEFnZWc-NDn4i5m2dAdgqaBD7P4GCOQqZBbzJkOYuZDlBO6CM6gLoYu_2gXQBL_dB6ksrTgWwYoACOoRWbZFgVl5wo58RdYDXsZozWQscT65AvtNAhszCS6S1AgJ5smD86iSggXNgEx1sJOwymZHzxeHYDr9tuiOzBtF3kv8HuqYisNieKWz3pdO752ZCI4DVeu69muhZ0z6DC7bL7HbUBYKrvtw7OAes6jAEliMABtG5mPKAeHUIhMiiWRs4ErQAXQ5KD87AW8ybCC0cDbhNda2HasMEY5ghTsGO1MbbeCCEGX-wdqnXhLsM-cDYMAUx2e3aOPEags5mtUAEJD80rgsAMOR7_TTGOqepZB95s7OpnRrblAZpY7QvA3EiJZOUsB5dO_550CAKRCC73YEVTsIQ-czBfr2ek8E9ftEVsA4UO13fmlYTtKm8RPfmEV42ocy32pR4OEcVhVv1fDBguYFgbMX71GF7p_QRvAfY7AB_HFNA4D07N75xw_nLvM9HHGjPm2jhwGGI8nItWjMv1zHkAo7B-DD62lcVwHg4CXbGfwPYRxJ-JOn4aZJ6Al_l7XyZzfVfktS6gKDwB0WHB5AiEQakN20-TgyOPiMf4Uj1C8kcXoKJjQnIKEsVE7gYlbTgCWFHHIA5DFl_jP1lzaBqnYFq3xmzm6wzAV0mH3R5ih2CwolP182KFbWfWKCWGKE7TwPYGKGpSINKADTIKuTILYw41qEwO-3XVNVsyJypw-30CSxc1khE2hTGE0h4L0QentDEzrWYhhgyHzkjmjm9mXigATnDA0BTiAnowziYgBmDDbk1EtEd3zkLimBYM8x3k_jHhG0fjyy2lWFQCeRgi1EiA-i-QXXMGvGEHJFQAjHHhgHmjzFUH-WnVWnaBIjEzQGyB2jBRxAwFGFE1ODPX0DLVkkrRfmYhkIqij0PUvCoQOiWk9QnV_ggCnWnTiEsOsMiHnQ3UXQFxXRERiDyJSNHCPTBhKMMTKIG1QDXRYUaPMDUP1A-FNFoB3XiAjGaJ_wPVqLSJoFiJRj6KgFE1rQkxJS81_hqPPFGK00UkPGPEvUSE4ImP4xwHcxG3mMgR80wPYDqJdCpjvzZ2u0mMR2aM4BoEoDAMgTPz1AvxgJpD2FJ3J2hBPHqGax5Qkyt3xlSMxVvHvA-jiASHoMAUWNOL23F2J0-MlC2PuiwFEmEIBMmIkKUCjl4m9jEPjh4OTkAl2wMDAl0LEk1A0PQj0XJNPHIn5GVkSDwnORdB3g9DpP6F0iZPrxfD0X_l_1QDgFfyIBLhmAOIdxmH00yEFPwloAAE0IxzRcMjIABSedEQLICMLKJMXDTAFIDkGDfoL3FY9oAUuAWUmAAADQjGVLVInA1NoAjFUVUV1JgH1Jg3t0vylL_wtIVNtPVOAUdPNAcldPdNgRdxNLNItOtKVNVIDM1JDL1INORLki5SmFPB4ImSHmFQrwQRCDixvkam4Gai-X_n7AZIpmZMoUzE0g5IrO5JZJoDr0bIIEzX0VKPMA_VuF3zF3aFn3nygDGRg0gXx3LK5KrMxRp0MkI1VOAw2WQSlgCjlDQCgCCPNBFlOG2GHIIBxHQAmBnwLIyg0TlGI2YU2E90IAPNASi00XaFPO1SAS_R2F_QCMcDA1s3aDQDjReG3LgynEMi_PvxfFwT_IyAABlnoCA3zwNrdpSDYwxgLmFQKBAnCHciBoKPyzSbIEK5y7EzThTzM4LhTRTRzOTGSJywYadcF8KhQiAdQjS0A8NZzcFyBVyZgcJog8BDJBQkgUhqAIwTJ1NsojJVT2AhKZyVThK4yYN5AhM-S0zfcw0yoA5X9z50Aq4IwP4KIlhDkiySzREFLskWzjkb5jlVJYABE-wKJWj_4ohnhyAsyyoMy4tzL4BmzqyyFIsMpM1OVBSphAVXLxTIEyN6VXLcEQq7LYgszYFZL2U2i9V9YbJzAH1bVM9OpQ1QFXK1UxAhM2zCSFz8JEgAA5b0boTSdoHg1efKmYxzKTTSL5XMyMliGDBFK4AADhTMEKmHRLekUq3ixOUCkONUkBlTvi6CJO0BJJUNEgBiWGADyFgngi-IWqriojdFzl5OniLgWqUTWtQnbgtGGEoG2EVhvkPimGpRyB3kuvNAQP0Enh0KYn0KHkMIHGMInlXnJOAEgASA4oQr2q4g9Cv110FNXn_j1HFHpF4TKkutEzYGKEAWaR-qgD-txTipYglBeCXKMkqMbTADAxGCuBsE7DoEqMFDQFoAEDj3YgbyuGO2dEqLonNETiwCuHNCynzmKD0XiPMNGslQqmlUTQyg-VLIUrK00hWuemOkqP_mAF3ImCWHPONMsp2pvgjF0taIWrggQklE0r0oAQ2UFoRWlv4SWHx3lrwEVpgAvM8qNpvjp1aIcNrAhv8D6A4hSstnYE3CE1kj5vvl2Mp083qsATtrk3hKpzGwmxgGm1myYQugENRMeh6o1ARTGpgAGpxJjifXjjrPHJ5ImtTmULAmMHYAAHE2Bgh8Yu5zZNA-weTM9pwUgf8CRctn4toihfMHC0CrL6yWYS9zDPDmsIhLsYgZglgIBGRzBfNmtIBNcphsKDh1trsURG6wDosO6TisBvQyRLgN7c7yKeTHxPTIhI9lYXxGpHgjZ2i7A7cRBL8ZIp6RxJN6yKL9BHwIy48MBXwvaVEu7ndIKH79czAebmR97KzD7GrsiMEp1Grxt5CcdHxzRv7mp2aoG4E_Ke686WyypYH4pVyCBEHXx8cjIadKj112jMGD6WzKjkJ5wYIDbI0Oy67qH-EzBy0uqnoHN0zRx6SsGPKM6pDga0A4A5C1AC6lDfVprHpkLL5JBkLzqeh9AMh7BfE6o2TvglGBAVHDo6AFH5w2L8g7B1H9GIA7hbAFHkbUbMx1HLH74aAFGJ6sosoAAJb9WRxxlxoDR60SPGgm3lVrWR3x0Yfx2YBRwWekeIJIZxrgTAcwdR8J0ISJxIaJkm7abxx6OiBoeQ2RzJ-Q1eDhr5ZC3tTR7RzIrtQBExsxwAwBWxhC2BDx1xnYDTWGfG4J1rWBBJpJlJ2J2BXJtQLYyQ3EoRwUuRoUKccRqaskpiEaSHAGuUG6u6hvT66Z-IGYPwOZ3eD0cIaAER0DIUB6gqBSmRzSYvT6M4OABG3-ZC80ZpYveQeTZyAcrgDpLWT6VZvwD-HAILI8elPwTAUkL5zYH51c50FSMMFICYDkWK1ALm2SDh5OmAsZ8QiObEwRhhYRjRvQLR1RugCZgNKRouc5jZhZx0HrJZ-SjBhELF0p86Mqc5y5pBWwRc5ZWALASopPFIVAZm2gIge4RRrFyo9QC_XIxIW6gNU6TRzmhOtEmqqYKlymmlsMARoZ9FkZypwxvFoupQhSdVrnYOg3FpgmwyYm2JmDWgLAAgOOVpwmuUXVyeWBSDF4cZBKTKdoY7EYVrJKaFlEmVrh6EBIUxwx5VviYZkR2p48ACSa_FqZ0SGZ1ua61y9AMV-Hclw5jB8NmsnoSHBl7s__agGfOfBfWgSo-WNTSoo0y8sSyo4-ogMtwBCMutmF6VpO2VjfX6uxggYNyQUNhOGAJxxp7YTVyR4u3zKw7oCYLnfwZmI8FgfGabDISmYcWYMkZEVy-mVAJIPYcwBoM8bKLKIB1MjBhptxvgX-MLcgLoSujAcqc0Xl80GwL3MV_zfwFYs0Cu-nG9u9h9vAJ93_FEOmnrA05toQ1t49nYLtntoJkYEJmYId9OGNx6ON4lxN5N9cVNlGf-KDmDul7NkOw10Yc0D12YK4DwU0E6kYMZyoij-DQj1rEjsjwjyjuK6jpN0j8UbYej9jxj-DKVuFxOkDv1rD1rCD1VkRzphIZJmJ3FyNwu4d8CWNolnOEllN-FMGhS8TqJqT8wTSelltHsgtgcsZXG_Dm1k10mwBC2h5tlwBJWytrKcyMm2yHDKt0RNiq4EvASsSrzoyHy5Cxt2FlGeF1tjTyT1JkTkGkRvppOGTiR-D-TxDxThNzqJNxZ1TilhSKLnwHT3D3-Jmlmq4ZpMU4svsQFp2E8MDL9VZHAOiUc6rmnaFgLn1ltv1zLrt7Z1ZAEd80lGLyZ-L-0KqGUfGHeAbyIVwc0TQNTjB95_GYVPZiuEIGKEiVspqURPAQbgYy7IUO6IBHAabiMb0P9Vs5hD4SHE2jDhS4GsqDb98pYOb5wF1sqdoPAc07-4riML9GCDCy5RbsYlb_rNb0bnAYG97ikL7wsG7hbw727zbgQe76WNs_-N5AQHmbT9gYHu3JuLc23PSDwV8dLqYVc404ITSdHx16DbHlIXHhHhS2wLUZWXYHTmHs5gHqIa7rbnAQcq_SxVBD6RgMSnAByJMfOf-WwMCm2ulpn4r2dOAOn5HtngQNsy-sUCh_GH1TIFEcfc1uVpn1_ZmZ4GmmA79F869vZvoNNhSNXl9q7gym7wBJH7YDCx7nH1wASpYIS93nAAAdmTPrZtsd_KrJ4fjMH1ojFp_p_l8an2kJ8IEd6uHt4wsV5URLh5mZjm-Zg8HHGj8puX2OHp4yCskvswGRmKy3Y71Z04DHHC1z-R5z6z_B6FHN6mG_br9m5h6WBeklH500iMhwCyj0o7Rl_D7m8j_YCz7oHl_b7NC2_YDj7z9cLm8n874V-A8gmm-igYSWHt8IVH5tu38t5REVovKz_HsH-R5P7F-VozoSm2CsWTmoGJOjZAB_gsH4EsSPH4CuH4B-GLGqAyDjy3t_BRR1g_AWGPkGoAf8J8IAHvtAKAHVh-A5QC9qYxfgQD-ARUSLL-GhAACd6T0MkJQESCj58gM4I2GaDFblA_gpYWAS_xABRA0AKAlQPIWTiUDIBRfazHJAnpwAIBz_GsPwAOp0CsoLkHAG1RwAuQmBVA-iHQIAB6WUHAKohwBGRRBkAg6p3HriggkAkA6QUmBwBJgFBk-N6u4Q4FqD-AWUXDF7xkE6DBAmhK0HwIEFCCRBIAKyJDB4GaEjqJ1BFHwK0FyDzBynNDvCjoEOQPBqicwSNyiDjcDBn_EABINkE98HIqsCwJdHkCSFyBuAXQJAGfyaB7-UbLVtpBAA8spYtAD_l_x6IwBzQSg5dvwASFbJ5AQAA",mdxType:"Playground"},Object(a.b)(R,{isOpen:!0,content:"I'm a popover. I'll try to always open in a direction that keeps me visible.",placement:"top-start",mdxType:"PopOver"},function(e){return Object(a.b)("span",{ref:e.ref},"I'm a reference element")})),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(l.d,{of:R,mdxType:"Props"}))}M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/PopOver/README.mdx"}}),M.isMDXComponent=!0},"./src/mixins/index.js":function(e,n,t){"use strict";var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./src/utils/colors.js"),o=function(e){return Object(r.c)(["border-",":1px solid ",";"],e,function(e){return Object(i.a)(e.theme.shade,e.theme.lineStrength)})},a=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/border.js"}});var l=Object(r.c)(["display:flex;align-items:center;justify-content:center;"]),s=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var c={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},A=c;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var m=Object(r.c)(["position:absolute;top:0;right:0;bottom:0;left:0;"]),d=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var p="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",b=p;p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var u=Object(r.c)(["overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;"]),j=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var f=Object(r.c)(["position:absolute;overflow:hidden;width:1px;height:1px;padding:0;clip:rect(0 0 0 0);border:0;"]),g=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}});var O=Object(r.c)(["z-index:",";"],function(e){return e.theme.globals.z[e.z]}),E=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/zIndex.js"}}),t.d(n,"a",function(){return A}),t.d(n,"b",function(){return d}),t.d(n,"c",function(){return j}),"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/index.js"}})}}]);
//# sourceMappingURL=src-pop-over-readme.e67671db8fdd6519cef5.js.map