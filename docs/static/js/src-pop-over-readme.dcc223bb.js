(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/PopOver/README.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),o=t.n(i),a=t("./node_modules/@mdx-js/react/dist/index.es.js"),s=t("./node_modules/docz/dist/index.esm.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=t("./node_modules/react-popper/lib/esm/index.js"),A=t("./node_modules/react-dom/index.js"),b=t.n(A),p=t("./node_modules/prop-types/index.js"),d=t.n(p);function m(e){var n=e.targetElement,t=e.children;return function(){return Boolean("undefined"!==typeof window&&window.document)}?n?b.a.createPortal(t,n):t:null}m.defaultProps={targetElement:document.body},m.propTypes={targetElement:d.a.object};var u=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Portal",filename:"src/Portal/index.js"}});var g=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function f(e){return e.indexOf("-")>-1?e.split("-")[0]:e}var j=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPrimaryPlacement",filename:"src/PopOver/getPrimaryPlacement.js"}});var O={top:"translateY(-50%) rotate(135deg)",right:"translateX(50%) rotate(225deg)",bottom:"translateY(50%) rotate(-45deg)",left:"translateX(-50%) rotate(45deg)"},B=o.a.forwardRef(function(e,n){var t=e.placement,r=e.size,i=e.style,a=function(e,n){var t,r=j(e);return t={position:"absolute"},Object(g.a)(t,r,"100%"),Object(g.a)(t,"display","inline-block"),Object(g.a)(t,"width",n+"px"),Object(g.a)(t,"height",n+"px"),Object(g.a)(t,"backgroundColor","inherit"),Object(g.a)(t,"border","inherit"),Object(g.a)(t,"borderLeftColor","transparent"),Object(g.a)(t,"borderBottomColor","transparent"),Object(g.a)(t,"transform",O[r]),Object(g.a)(t,"transformOrigin","50%"),Object(g.a)(t,"clipPath","polygon(0 0, 100% 0, 100% 100%)"),t}(t,r),s=Object(l.a)({},i,a);return o.a.createElement("span",{ref:n,style:s})});B.displayName="Arrow",B.defaultProps={placement:"top",size:8};var E=B;"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Arrow",filename:"src/PopOver/Arrow.js"}});var y=t("./node_modules/react-hook-size/dist/index.js"),w=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),x=t("./src/mixins/index.js"),I=w.d.div.withConfig({displayName:"ResizeAware__Measurer",componentId:"sc-6r08qw-0"})([""," opacity:0;overflow:hidden;pointer-events:none;z-index:-1;"],x.b);function C(e){var n=e.onResize,t=Object(i.useRef)(),r=Object(y.useSize)(t),a=r.width,s=r.height;return Object(i.useEffect)(function(){n()},[a,s]),o.a.createElement(I,{ref:t})}var h=C;function Q(e){var n=e.arrowSize,t=e.children,r=e.content,i=e.distance,a=e.innerRef,s=e.isOpen,l=e.offset,A=e.placement,b=e.positionFixed,p=e.renderer,d=+n/2+ +i;return o.a.createElement(c.a,null,o.a.createElement(c.c,{innerRef:a},t),o.a.createElement(c.b,{positionFixed:b,placement:A,modifiers:{offset:{offset:"".concat(l,", ").concat(d)},computeStyle:{gpuAcceleration:!1}}},function(e){var t=e.ref,i=e.style,a=e.placement,l=e.arrowProps,c=e.scheduleUpdate,A=n>0&&o.a.createElement(E,{size:n,placement:a,ref:l.ref,style:l.style}),b=o.a.createElement(h,{onResize:c});return o.a.createElement(p,{popOverRef:t,style:i,isOpen:s,content:r,arrow:A,resizeWatcher:b})}))}C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResizeAware",filename:"src/PopOver/ResizeAware.js"}}),Q.defaultProps={arrowSize:12,distance:0,offset:0,placement:"top",positionFixed:!0,renderer:function(e){var n=e.popOverRef,t=e.isOpen,r=e.style,i=e.content,a=e.arrow,s=e.resizeWatcher;return t?o.a.createElement(u,{targetElement:document.body},o.a.createElement("span",{ref:n,style:Object(l.a)({background:"black",color:"white",borderRadius:"3px",padding:"5px 10px"},r)},i,a,s)):null}},Q.Arrow=E;var v=Q;Q&&Q===Object(Q)&&Object.isExtensible(Q)&&Object.defineProperty(Q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopOver",filename:"src/PopOver/index.js"}}),t.d(n,"default",function(){return P});var D={},H="wrapper";function P(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(H,Object.assign({},D,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"popover"},"PopOver"),Object(a.b)("p",null,"PopOver is a low-level building block used to attach an element (the 'popover') to another element (the 'reference element')."),Object(a.b)("p",null,"It's a wrapper around ",Object(a.b)("inlineCode",{parentName:"p"},"react-popper"),"."),Object(a.b)(s.c,{__position:0,__code:'<PopOver\n  isOpen\n  content="I\'m a popover. I\'ll try to always stay visible."\n  placement="top-start"\n>\n  {popover => (\n    <button type="button" ref={popover.ref}>\n      I\'m a reference element\n    </button>\n  )}\n</PopOver>',__scope:{props:this?this.props:t,useEffect:i.useEffect,Playground:s.c,Props:s.d,PopOver:v},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGAzzAMAtimeRXWNeUzT9fk7Ug9gAAUoFcRIUiEUIMCWHCBzsZCjVldoDwALwwiDcMoGYdVYDIUJoj04AEchJBwli2IyRisPYQNJU4k1NXaMFUF0FFjlOOjnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnQyABZzPYAA2czLPWMBgIAMW9aBEkM_hnEOBEHUwXChH4JYiGoSg4BshEPOrLyaGcCA6MudgAEYHKs-RZPkqYAEE5g09gIyg8gbCgdAw3YeQOQ0sRyujGR2BRNSYG4YB6JUzq4HkLca2AKroFq4IADIJvGRJ5koZpRpquruBWuUwBIyUBlQdp2AAfg2MawwjRqrkW8bUHy6spBkKs3zMGF1WOGAwDCKApmOpqWqukrl2rBNxIIHBvMyFIrwIIaa1rATWPYgQV0h2wdXmf0_shws9BoPgQAadpZVcPsWMoWH6hxhJxgEZIIhCKARgIwkCAI9hWFsCAPFgHB-HhmsyQlGAwaxiIZnNFFXGFTnUYsCG0eAQVBVhz6owltHGA8cIInMVT5ix1WbmofgJ2e7rZaJjJQ2ewaubRxpcZCA2ELDUL5z5_RLZrKQdfVqXIY5S6rakaGhIEKWpABoGQbBoapB-26zC_EAeL4gPYckVRsH_LQKGA_QGEwx6AcktDFRVVBc_tYA9XcVw0gEJYxXt-EYDIljYVJfCETBgaC9NSVzVl2ERMe8iWMsWb4AL_sWPNTX4D9W1B_VXtqPdD0BOFeJZ5LpiioEIQxiX9oPW33eB_tMV8gyoraa6AuPTP9KYEv0WYA39a5O7cwk8jCe7ka7T_QIQqWkwSiAZjvUYaUMpWV4CAs6YYoEwKzjQeB0CWAizko3YB0C0DOgEHXZBMQ4BIzoPg-aYAYIEHwTzdu-hKFxReFtbyEAaiLEwaiOgU4MhXE_rg9hFwa7AOQppb-cBi7AMAWECIWpbAM3QWVAA1KLXeEDuiSHYAAJnYHIzRqCZEIlEf_LoBA-jmEVtA6BjAK6oCrhkKsZiQGMDrhcWR2CMh126i4nhYALb_zsdAka1VzqXV8QQEOz0nEIlsSA8x0NYSsLsYKfI79GHMKNnQpJTDshBKiSAqhztMYyzbnkggWTgkxRYJADIcBup_2CXY0h5CrjAHqaOK4xQAAkTT4LkKUOwDpEjKBSLQQieQxQlBxOyZ8GY4QYB9VgI0lIUyirkARLATI78rgvSgDBMZPjsnyBKSAyJwTgAVS6GAJYHVYCt15mDJYijRhDzuBcqq2RQiwAAKozHQFkBqn0anZLseIsBYxNL3JGMo9gzUTJTS-rU7JjAj6jHGXC8-XVgBguUQcuF0Dcn8wKTc_QWKAUgLOd1MFjy4Bmy8ci4lly0XkoojgOlRLgmbhpdAj8slsUAOoApLoqKADq0QXlHE0g4-A99H7X2oHfDK3U4AvPQG8mAnzvm0GQpufR3LDHGNhcSuxjBuFinDF0OGuzuWy0Dm44AZyWW0tUrAeVDqYB2uCYjZG7jCHI1dRMxBBBuq6BAsU9l2SwVkuBT6ux_L75CoAZsAQ3Vo0ZVjSKyNBA2XmuyZyzN0D9njP9s3GxrCpCWOsUHYB2agmoFfptZkWpnqvQINDE2AgKqWthngzgXriHtWdUsQNNCQjAqWEmmAKb42_P-RAZoEYACE7q6CNR1QIcwqA3lQC1WwoxK69XRIXlAcYotTwXiKd1A8oQwY4C8OgRI3jgmMHiu4O2qSYauPNr2zq1SaUeAlNsIibQMCGTZr-pKcKqBQCFIZEYNhaCgeJV4AQU4RQdggHkQyZkLL4PibZAohkACszkspGXclhkBOByN0vGfso52SRp-rteiiNNKbUSuTcKid-bJCPtQDRgta8oCRMrbJbhOBMAvTeU2iiZV_kYvvlcLKaj4E6PcAiK4Rl4HNIIGp-BuL9CGUFnBhJ9DqDJOyFcVEDJ4GTj4Vcet4m3rNthnlfRInv4j3mHYTS_zjBGAdDQIQB6JjdGNrDdodgwXtXvuwHkwDZMZS4QOdz8AcBrqIIEfh_8fMOACYaDa79SRCGZnZWc-Mzn4miOwNs6A7BU0CH2fwMEchUyC3mTIcxcxnPCd0SZ1AXQxf_rAugCXh6j0pTWnAtgxQAEdQgQC6CwzLJh2DOFHPibrfq9jNBayFji_XoEDpoMNmYSXKWoEBPArLjh_OUEC5sAmcthJ2GU7IpeLw7CdYdt0J2YNou8n_s91TEURseZSxe9LF2ltLIRHAGrd2PsN0LOmfQYW7a_eAR4uuR2Ts4F6zqMASWIwAG1WGPOx5QDw6hEL4NJ6NnANb4EAF0OQQ981d1EN28ybCC0cbbhN5a2HasMEY5ghSVZEGj_-C6DJA-O7TrwN2WfLZsGAKYvOHtHHiNQWcLWqACBh-aVwWAmES-gZprHtPUvg-AVlnUzpNtygM0sdoXhdbWid7AFXlk9hHE6BAFIhAD7sCKp2EIIuZjv17PSeCxv2jC1AS-b3cpzTsJ2lTeIfuNZ3Z2zz4cLWRb2lF-w-3OvhgwXMCwLotbUD1D27cQpYNzcg9x2ACMumaBwGZ9bpbbOAuc9HPGtb92W2C7aDVdgdWjPv1zHkAo7B-CT62lcVwHg4A3emfrUX8-0mL8NBk9A-ta8L5M3vxvyX5dQEV_YPIEQiDUiH_Laz05ZwRj_CkeoXkji9BRMaS5BRGq18f04Rl2x2-30CS2c2E0EmJkRRBSD2BX0QentDE0bWYlfQEGLjjgTn4n3RTnDA0AziAgxgMDAlLg1CDH1C7k1EtEiBPimBpw83HgHCnlGxfjyy2lWFQHeRgi1EiA-n-WXXMGvGEHJFQFMRAWnnmjzFUFGHYFnVWnaBIjEzQGyB2imlYRxAwFGFE1OAvRdn_iExRhrXfmYn4wqlAWPUvEHUGwul_nRxnVnTiE4O4MiCXVHF1TXQSFERiHsPMNHBPTBlcO3XMGsM3QELEk1GDA-FNFoFXgZigAjGsKWF8PPEsJoAMLMFiPiFEwbQkwpWk2AWSP8L00UkPGPGvUSAgJRkyKgBwDc1G3yMW18yKMzCpkf0H2qJR2sM4BoEoA5n_mi3YD1Gv3HxpD2Apyp2hBPHqBa35Qk3t3xgsKKVvHvA-jiASGARNxuCPT8NSK02ANp3J0p0lEqPuiwFEmQLmOqIwKUHjl4mwLQMkBgPTkAgO2IPAlEnzn3m7hfH0VIJHEk35FFkSDwgJUzH3g9FPHIkBIphBOoRoA3kAVRHcDgA_yIArhmAaOgUFn00yFQDgHwloAAE0IxzQ8MjIABSJdEQLICMLKJMPDTAFIDkODfof3PY9oJEvEgkmAAADQjDJMpInGpNoAjDUTUQZJgCZLgxdxvxxORO5OJIFKpIZhFPNAcglKlPgQ93ZM5PxKyD5NJIpOVJpPVMZOZJOLkl5SmFPBgNmTHk0lb3r0HTixgEam4Gan-UAX7GhOBKdMzE0khP6F0l9NBIIEdNDOzWATCP-RxW32oEMmX1XygGmTg2gUJ29ODNhKKQZ0MiIwpNA12VQR5gCjlDQCgGUPNDZlOG2FTIIBxHQAmCX2BQhS0XaBI1YU2D90ICbKUSi1bPbJRjsR_R2H_UUMcAgzLFLNQHjReFrIQynEMjQBnJfHwXnIyAABlnoCBxzIMHdcTH0wwVzWE1yBAhDXcdzJyOT9ybJDyCy7FdTUTzN9zUT0T0ygygSsywYGd8EHyhQiAdRWS0B8N8z8FyByyZgcJog8BDJBQkgUhqAIwTJ1NsojIKT2BkK8zySUKjS4N5Bi48KCorS4Dd4ypQ4P8r50A64IxW8KIR1no3SPSxEiKYy69Qz8FUV2LnUBEyphFN1AEohnhyA7SyobTmznU4Bwy4SKFIsMpIyeU8SpgMVnVMSyMKM-1WFyMcABLYg7T4ECLByt1dUH0bJzBSUWMvEP1HVGMlFnUNUxB8LIzUAniiz8JEgAA5b0boTSdoGAjeZynIhzKTLzYBNvHUliODVFK4AADgtMQKmAuLemItGGuOUCwO4UkFlQfivj_AAm0FeJziYgBiWGADyFgnggmNKrriojdELh-LnjLlKsxUoLNHNGGEoG2GFnvloMstzH3jpXQHNB6wzAIDgG6voLHn3m_mYI8w3j-OAEgASEgsPOqtQnI0kFvyNzxIRKIr1HFHpFNTKn6tEzYGKGAQ6QWqgCWsJS5UFglBeBLKMi8JbTAAgxGCuBsE7DoC8MFDQFoAEGT3YnbyuDO2dC8LonNFTiwCuHNCymLmKH0SMPYMyqlRgAqhlVYxdVsIGyIrK00kquemOi8MAWAHrImCWE7LZMEWghmXvgjDOUcugVKrggQklGooYqAV2XRtRUJoESWEJ1JrwHJpgC7IICZ1CLcJ3TEPMV2v8D6A4jMttXYAzQ5XwtkmRuytqMS3qOCv_i5rk32JB3G0mxgBmzm2yFirOMegSo1FRRRpStuMTigIyCeFHChMzL9MBlysziIIYDMGMHYAAHE2Bgh8Y-5TZNA-wPbe0n8kiCRcs34toihfMBDYdgt3yKZjgzaq9i87sIgbsYgZglgIBGRzBfMWtIA9cpgbyDgts7sUQn8-josk72AzwsBvQyRLhm7AyfTPz9BHwZTIg49RYXxGpHgDYgi7BncRAb8ZJS7_i3aPyPbHxtTk8MBXwlbVEU65RtTZ69tq02DmRu73bQzJKiksasEZ1QqJs8C8dHxzR17moYbz6EEFK-x06QypKeKPamUyQXg77XxCcjIGcvDoEwiMzF7QyvCsl5wYIOao0JbzBQqoGzAq04qnp7NrTXb37e6aB7asCNq0A4BcC1Bni8q_UCrRITyb5JATzuqEQ9ABB7AAk6pwTvh9AMgmHDo6Bur5xwL8g7BWHeGIA7hbBuqLqrqwSaqPRxGn54Ti4_ji6sosoAAJX9ahxRlRkDeRpiZ616gVNrah3R0YfR2Ybq5mekeIJIZRrgTAcwVh8x0ISxxIaxz67abR0SOiBoPA6hzxvAjeNB_5E8-Behv6zhpaYhYBIRkRuAeBGRw8-BDR1RnYDTWGF64xtreBBxpxlx2x-BXxtQSozAu4ghvEmhoUKcUh72oNChx6EaGHFamifqwax0XrdvWapidFKAGYPwBp5eSQcIaAIh8DIUUa_RQBKhh0ivdms4OAU6_-E880DpCveQeTZyJMrgXpGWT6eIbp1wVvHAILI8JlPwTAUkA5zYI58s50FSMMFICYH2OGhAy2pAgKqYE8vB4pphQhthhhsJ86Spwg6pkgjpmZ3psLZ1Aaoa_QUZwi1-kJjh5h4ITSGZuZlBWwYsjZWALALw9PFIVACG2gIge4Hodh9A4BdQa_adRIZpog06Ulx52SNB62kl35xF1AD5viEpohqJ_hgF_K4F0SOpzuPqiF5ppHNpsZoinlgXZFmHVFiIVJ1696mxr6go7AC0Ixt66EBIYR_hrw6DF4GAYWBKTKM7EYNrBllGJl157Vvh2wDl9ar50puJ48L2wF7OAV2p0FguJpqFiV2FhSF1_0noOVkKuM6XRMtfWgLw7E9Crw1k7suN4BAeogNTLw7UtNsweGxl55-Km1oNggB1rllOGAJRpJ7YPl8hsCP23zLg7oCYAXfwW2I8FgfGGbDISmYcWYMkZEcSvYVAJIftxoM8bKLKE3S01-xJtR7yhVLoEOjAcqc0Il1qrsmlpElEJfTadiZnRd5dmwf3NdzIDdsXZ0Zkp584m1qdnYItp1ohzVkxmYStn2z1sub1kVzqSFlp4amFlGQBe9gx2V2Z4BTV80c12YK4DwU0DqkYcp_V8p0DtrCDqD0D2Dm6mDxDSsqDpD8UaD1D1AbNq13N9BlA_92YG9zaohrJhIZxlV6vN1_l94r1-pn10Vv1ka7a1-qjqx2jsqFFsNxJHfSN5M6N4DxV0YZV1x_VrgRs7KcyLwimxNrKOTkKnDeyJNgbcCq4SvMMpC9C9CuSk8zN_D89q2m1rjmjyT2OG4_B29yQfJtOejqtxj195j992AT98V9jyV1--znwQD-V8GyGq4DpDE90vsc552E8CDH9LZHAOidMuLhnfSgj04i9jB9gXzh1gZrZAECcylRz595zqYKqGUfGfeEryIVwc0TQDjhSHZvwMqBIm7IUO5GKEiAgBisRPAUrpricjkHAervZ70ADDrj4GHHm39oijaxr4ZmuQsCc5wE1sqdoPAfE9esLiMH9GCC81rkbzrgbbryrrSphTbikHb-blrkINrpBC7gQRb3mRywBb5AQbYJF9gDa_utuGsp3PSDwV8bzhScstkt7j79oA12DH7lIP7x7oi2wLUUWXYB02b6Zw7qIXroUfr5M2_KxdBD6RgdCnAByJMYuQBWwdckWmb5rgQdm-dOAeHl79H6n_RMesUII22QNI9mIGccYdV27w0UXBY4O8wYcv9YiBd4ZvoAN4r4CTnynicpYZ77YC85b37vZ5C9XpYIyHAAAdnNPYCB8IGV-8vB-fnZrELh4R8Z8an2gN-3Kp_YCuEV4vLMEcrHorle_Z_t_xg8HHFt44lF0V4yCsjHswGRmKyHeg37w4nHEbeOAR8T1t9u6l98C7MT6R6p6WBeklFF00i16yjN_Rzp8t-R72n15FroEZ8z7NAx4d7j5e4r9m6r-z-p5d5M7Lliy6b8HgQ2qUwR4if_j99QGCZl_8AoWAX3bwFt4SaL5e-n_J7ZMKZuISm2GsXTmoBeKc7_gsH4CsSPH4CuH4B-GLGqAyGTzbt_CinWH4FhnyD1iQDnxAC16f8v-rH4HKHIH6HD0Tvv_4CKki1_GhDn8O6T0MkJQESDT58g3Pb4s03KB_BSwL_bfiACiBoB9-D_SGunAQEP9Q-vCOSMXTgCoCt-NYfgN8VQH8AAAellBcg4AoqOALKJgMQH0RSBIACgTgDUQ4AjI9Ah_tALDpwwf-zArKDgCTCCDOB8-JgtPHwF8CKBeGHXqwJEGCAqCVoJgRQKoE0C6BIAKyJDGIFUE2qHVVFEoIEFCCOB6glcPwF9ZftoWSghyOwNoHmgjBGgogToFR5VdNA-gwQTr3FgWBLo8gTAnANwC6BIAb-TQOvzIaFdtIIAQljzFoD79D-0RI1tAO7b8BvB-yeQEAA",mdxType:"Playground"},Object(a.b)(v,{isOpen:!0,content:"I'm a popover. I'll try to always stay visible.",placement:"top-start",mdxType:"PopOver"},function(e){return Object(a.b)("button",{type:"button",ref:e.ref},"I'm a reference element")})),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(s.d,{of:v,mdxType:"Props"}))}P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/PopOver/README.mdx"}}),P.isMDXComponent=!0},"./src/mixins/index.js":function(e,n,t){"use strict";var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./src/utils/colors.js"),o=function(e){return Object(r.c)(["border-",":1px solid ",";"],e,function(e){return Object(i.a)(e.theme.shade,e.theme.lineStrength)})},a=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/border.js"}});var s=Object(r.c)(["display:flex;align-items:center;justify-content:center;"]),l=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var c=Object(r.c)(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]),A=c;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b=Object(r.c)(["position:absolute;top:0;right:0;bottom:0;left:0;"]),p=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var d="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",m=d;d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var u=Object(r.c)(["overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;"]),g=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var f=Object(r.c)(["position:absolute;overflow:hidden;width:1px;height:1px;padding:0;clip:rect(0 0 0 0);border:0;"]),j=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}});var O=Object(r.c)(["z-index:",";"],function(e){return e.theme.globals.z[e.z]}),B=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/zIndex.js"}}),t.d(n,"a",function(){return A}),t.d(n,"b",function(){return p}),"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"zIndex",filename:"src/mixins/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/mixins/index.js"}})}}]);
//# sourceMappingURL=src-pop-over-readme.7fb582a7849cb03002fd.js.map