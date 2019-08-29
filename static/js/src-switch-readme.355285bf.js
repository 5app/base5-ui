(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/InlineList/index.js":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),c=n.n(o),s=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=s.d.li.withConfig({displayName:"InlineList__Item",componentId:"sc-1u39lrg-0"})(["display:inline-block;max-width:100%;"]),r=s.d.ul.withConfig({displayName:"InlineList__Wrapper",componentId:"sc-1u39lrg-1"})(["list-style:none;margin:0;padding:0;"," & > ","{vertical-align:",";"," "," ","}"],function(e){return e.spacing&&Object(s.c)(["margin-left:-",";margin-bottom:-",";"],function(e){return e.theme.globals.spacing[e.spacing]},function(e){return e.theme.globals.spacing[e.spacing]})},a,function(e){return e.align||"top"},function(e){return e.spacing&&Object(s.c)(["padding-left:",";padding-bottom:",";"],function(e){return e.theme.globals.spacing[e.spacing]},function(e){return e.theme.globals.spacing[e.spacing]})},function(e){return"comma"===e.splitBy&&Object(s.c)(["&:not(:last-of-type)::after{content:',';margin-right:0.3em;}"])},function(e){return"dot"===e.splitBy&&Object(s.c)(["&:not(:last-of-type)::after{content:'\xb7';margin:0 0.35em;}"])}),l=function(e){var t=e.children,n=Object(i.a)(e,["children"]);return c.a.createElement(r,n,c.a.Children.map(t,function(e,t){if(e)return c.a.createElement(a,{key:t},e)}))};l.Wrapper=r,l.Item=a,t.a=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InlineList",filename:"src/InlineList/index.js"}})},"./src/Switch/README.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),c=n.n(o),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),a=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/InlineList/index.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=n("./src/utils/colors.js"),A=n("./src/utils/units.js"),g=n("./src/icons/Ok.js"),p=l.d.input.withConfig({displayName:"Switch__Input",componentId:"sc-19hdplp-0"})(["position:absolute;opacity:0;"]),m=l.d.label.withConfig({displayName:"Switch__Wrapper",componentId:"sc-19hdplp-1"})(["position:relative;display:inline-block;width:2.4rem;height:1.4rem;padding:",";border:1px solid ",";border-radius:1.4rem;transition:all 250ms linear;box-sizing:border-box;"," &:focus-within{border-color:",";}"],Object(A.b)(2),function(e){return Object(d.a)(e.theme.shade,.3)},function(e){return!e.disabled&&Object(l.c)(["&:focus-within,&:hover{background:",";}"],function(e){return Object(d.a)(e.theme.shade,e.theme.shadeStrength)})},function(e){return e.theme.links}),u=l.d.span.withConfig({displayName:"Switch__Handle",componentId:"sc-19hdplp-2"})(["display:flex;height:100%;width:50%;border-radius:100%;overflow:hidden;color:",";background-color:",";will-change:transform;transition:transform 150ms ease-out;input:checked + &{background-color:",";transform:translateX(100%);}input:disabled + &{opacity:0.5;}"],function(e){return Object(d.b)(e.theme.links)},function(e){return Object(d.a)(e.theme.text,e.theme.textDimStrength)},function(e){return e.theme.links}),b=Object(l.d)(g.default).withConfig({displayName:"Switch__SwitchIcon",componentId:"sc-19hdplp-3"})(["position:relative;top:",";left:",";opacity:0;transform:translateY(-100%) rotate(45deg);will-change:transform,opacity;transition:transform 0s linear 150ms,opacity 100ms linear;",""],Object(A.b)(1),Object(A.b)(1),function(e){return e.checked&&Object(l.c)(["opacity:1;transform:none;transition:all 100ms ease-out 150ms;"])});var h=Object(o.forwardRef)(function(e,t){var n=e.checked,o=e.disabled,s=e.id,a=Object(i.a)(e,["checked","disabled","id"]);return c.a.createElement(m,{htmlFor:s,disabled:o},c.a.createElement(p,Object.assign({type:"checkbox",ref:t,id:s,checked:n,disabled:o},a)),c.a.createElement(u,null,c.a.createElement(b,{scale:.8,checked:n})))});n.d(t,"default",function(){return w});var j={},O="wrapper";function w(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)(O,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"switch"},"Switch"),Object(s.b)("p",null,"Simple accessible mobile-style switch that can be used like an ",Object(s.b)("inlineCode",{parentName:"p"},'<input type="checkbox" />')," element."),Object(s.b)(a.c,{__position:0,__code:'<InlineList spacing="s">\n  On: <Switch checked />\n  Disabled On: <Switch checked disabled />\n  Off: <Switch checked={false} />\n  Disabled Off: <Switch disabled />\n</InlineList>',__scope:{props:this?this.props:n,Playground:a.c,InlineList:r.a,Switch:h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYGlQKA0BgAAZWwpTddoPTgARyEkQjiOdciUVwiD2GcfNyDxI1ZWoyRaPoziXm4tj8PYQNJXQvjTUVMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnYyABZLPYAA2SzrPWMBgIAMW9aBEmM_hnEOBEHUwGChH4JYiGoSg4DshEvOrHyaGcCAsMudgAEYnJs-R5MUqYAEE5i09gIyg7joHQMNUI5LSxEq6MZHYFENJgbhgGwtTOrgeQtxrYAaqgOrggAMgm8ZEnmShmlG8bzG4Fa5TAZDJQGVB2nYAB-DZarDCNGquRaw0K6spBkKs3zMGF1WOGAwDCKApmOpqWsusrl2rBNJIIHBfMyFIrwIIaa1rRiSJYqZEolAo-BAOBxBXCGdSM2thIIbiNi2bZc03VGay1WxXA8WAcnRq5GCxnHuLx3MWAqcmCfBiH2B1MAwGp2m8XpnZsm656oDgGA0MJ372ZJ5mKY5rmea4vEmbJ2WJfZ2sGKI6GKLZqR_sB4HQaGqRvpuswvyRujNaYsiKMkVRsH_LQKGA_QGDwh7_ukk1NTEh7oIHSxZvgb32n7SgZnNdT5jgP37Q6imlhGuABtDhPsnNT51xoWOVX9BTqCUpsYFlbT0_QHBiOKMECCZsl4KuNAbfNcnTm2PPeGIVwsHNHF0AmK4cpMkyAFI8-KDuC9QJSAHVMjmDIKvLnBQigav_QIYiUXNdOrlQagYA7ruDLQK4TLziG7M7Aoz8nzuABJgBmJqa87mYcDh8gCnYKbX-xlP16dyAQQYwDoBR0AqLQQ0QpGi0GtHYK-DlZw8j_p3fShlzSwDAAQK45pH7P24M1d-EwS5_kxJQDw8Q4AfySgUAA2u_T-BQAC68gj7APQWgFuIgIhEFwfgj6xDNhHhPFAChVCaHwxnAwyRX8ZysPYQQYoF0a7TWao_YuRA0K6Q3p3VgGQYhxCgOaeIEAUgYwEYQvsOBTHmPYAAH3sXKCIMx2hsPksAyxVZgFv1kd_X-ujRD_zgIAoJwDEEFEwU9HB7AvHWJISI8hlCRZ-OkYw2h8j3GBPCfZSJXgbiRCuHEoRpDRHiJSUwtJqSUgKNQUolRgSvF1PScRAgt4tKrXaJ8KIO0Ak-OCaE_pE1ED7wIBGRAcFt7zSjsHDkiBECuGwYvHR_TgG6BAjE6yfpVlBM4agc0_QUiEDPjgJMJdFHAJUWE-pHiglNOybcGhrT2krW0phEQvSJp1LOCEupndhmjPGZMi00zo4wDmQspZRwVnXLWa7GgxkADt2zYW7NcCfDGZkTKnIAKznL-QQK5wDlE1wuhPIqhcCJa2YhRCqVUzp0CWDgZlIhNgCADhHAajUrEwq6AQPo5goyBMYHPWYsIdLMpwKyjIHK7iDTqcAfW9gbBjTDDgKIMwIwMtQEsLVKrFicG5c1GF_SIDND1bVRqJrUV8oFZDOB7B8aJG6hAQaI19XyCkJosQFyglEr9Ryf1UhRULwEN4ggH4zBZKhjSlEOBw4zCDjHCqMLbEY1lUm-AH9UQFBsp3SpKQrgZuDtQlE04Uh5oIIlZ5QUooR0zdQg-nMIx0K6ZEHpSx3kvmYRyAqk8Y22zjSG8V2lh0ZDzgOmGOBNEVU0ZPe69pMDPVXlSm2MM84W0EpIXm9twwaGdkBPQoFwLiX-knHyAgRjovQGKMAaFeI-zNHHWG6lE46R-feqi5dM6OgPjnbZqAPb2mAPEGYfgljrMyCiT9GFmWSHCNAOAAIxECFzraB6T8sCWEoGKLRoc4MIZFvBwDVaANAamDqbYDRdD4Y9LEQukhKMAeKo0VAMxwhL1fdkHAaB2NKJroKfI3YMZkzgJQKA4RD41wjvDdSt8zDkvzixsdRwy5cYrnBQIa8BMJReFtK4XQ4IxH0UfOucFa1NxIi3MROwj59wHuwAATDgJyXQiBH02GY45uUXNuaPhExysTMPYdwxGRzga74EC8AIKcg9XJieIjkOJoG_ARhKSIuAfhMBLGxUmCLNdotTgOR2CAeRB6-fxfnTuqJ3BCf0yEBITmcUmSIHYG26Kj7VB3plG-7BCsZG4VgSL9zgEAEJ37KxZjkPpQSfmDKCcMnyvQ4C91xGgStwDhnDH0dCgllCdiITaBgIpT8PopdcGlnACS_yZY7DAUkV3hE3ayzANSYYUgTHyw8_1JKqsEEW6cPIq2JhoB0n_frAgf0oZOwQohj3SlMW2ANI-ZLJ4sYABKVFgJxzqFc4aoFCWZhuhpYBDZrp5o5MSh6jzs1wBzzWx4FaFEVzILAyu5WHozjelAdtgDESMK4NhOx0Ei1QaHQXYeFhoFBsZ6W_yI7gF9zu-3tiHeQugKHQoYdnagGBi7curvYAIA967husDan5G9ugH28BK43jiBImc_AzmyjV6eF73M1zd3V6gVxvce9ys11r0IKTmn2JF3j4RED83xjkAA1D_MHgSVdq4wJrssEvBHw5EQrrJwD_dCj4eMTI08jMwAABoRmpyPSNG8Gmd0jzgybssE_TWtTJr-cn2DYpxSjhTaPKUcUVtR5kanccRkoyP98oTBN6d9xOec0Q2BSY3i4mHWGcMlyr0rze0T18ha3zlO3ncO8vFrefL3Je4Ae791fsvABNCM5pq-NSEAQLIEYnI4swCkWvncHfGLcTuBpC361Ye5LCn7qRHze5z4YwF4CCygmRtYkToqB4tZwAQG0LqQc7oHsDtYCDDanaEJ_zvwx65gzadxzZ1KQG1o5S-rwFF77zOj0FX6wFXDxBQA4HB7iiixh4cY5RB5wCKK_aKZmDrQKTCZD4iR4D0qbACwGrN7ZBLBcBMosokLsoDgDRLBdBgBWo1y2oCCCp_wirzziqEAkC-RCguroBoSKE8A9SkxTbyoPKMCER8YEpgqIwx7VD8AEo6HdQ6H-rAJcDWFBGzZyGx7dRkE2EEp2HdR2FhGdzACSrSoaGcphESz9KMCY4YCwDhpZG8xT7tRGJdTADYoAAcaE0RURER2Q4s-RQSUgOR6AeRxhkgKm4ateDSC6UwS6L0UoQoV6MWt6EYvMtem6VshGSGYuQo1CAE2g6ybsYE5GGwMorgoc3Eax5omgzGg-52dKMxAgSw3oR2EaL8G8mxkQF2hxt0QSNiuuqWJxyEEaf8HwKcx0A-08zYEAPg2kWq4mQoEGAJAgzgSU3QbyeAcAUAr4H0EYlCosjgKGxxcUzxRqNclxUQ6qPxcJFIiJgJhYSJIQKJNAQJKGoJEo4KnxSk6A6K-My07ARA2J7Q5MEo2w1kJoKQHgr4VJUwxElOwQ2kjJWAj4IwNgtA7JnQnJ3JFKXxnAcAWotJFUhxH0GJ1xwJHIlcoQjJqA7gCI70jA3eLmSYecLGtg5ElOSpwJH0o2tgCpAg2w_xKGf-qAjwEko4dq6xkG_gMQM44wRuBJMCF6IQLI-i5gKeSEKEMxfQMpSkXpSkfx6JwJlaNJ9peJqmHJlCEYJkOWOZhpAA7ByClJ3HyYQGmRVO0KKS8DAO0GYEapVLabSY6UKI1PtCWQQGWVcCmdsGmc6a6XqK4PjMGcqesR4OOG2YvDAl2RkDZK6ZgPMBgN_MyKKaOGypwGOHYOsV2XsEcG2QGQIDGVMDYEcruX8YcUsM9JKDAtpNikfucQ3vKY2TcXtHgV5iBE2UcYaGaM2ewJ2bSXQO-eeV-QIM6eIZtMyKeGmdeDZg6WefiKQnoRvAYeYNdnQoccwg4k4qbkkhIocVBW3HAKhcCehY4nuXnN0VgOJKmg8a4JWkKcmX-TqjXOOYxRccBDLpWkeXgG2ZWg2faTxXAOaYQJWhBcCXhTsH2ubEoJbPRFMcRi8HMQeosceixkICIJYelJlOCblG5JPKBZIW5thtBMKW5ghZQYPm5nYNpG5h_G8GWgUFmdoSXJXNbgWOaOZH_qiO6YYewHHhZewEYBOM-OpQQBlFlGRfJHpVtH2BvmKEZsvmliSH1hSMFaFfdrkCRgAHLejgpJ6dxIXRXPmuSSBJWiwpWaU-XpUvBZVHg_npVLokToDhVKaD6WQH6lwFVWKtWb5xX6IJXaFBXASpWdpubSnNWyldVnjtV9UlVaWqUEBlVZR1ldWxVL69WWRLDwlpXtAlyjV3QUUYZzULVpUGWUBGWkgxUlznXYaTVZITH0T0bTyMbbBOyARKUGDLHsRno6QXpDE3pPQwYyS-yTwrHOCsCzgPr8TXgUig0pC7GymT40baQ_XXojFpaaGOW6EfQwosbAD5BZSkn4kpHqGyqpzaQJpCG3L5VCrAI0xg0KpE1sok1hH-HACBF1KsAQAwAjDXjeCIxYq5TlEC2-EPL2Z4DdR41ix1IU6EDi2aVhGQAJBRHAny3QBQAiirxdT8AwChlODoDC39LkDEQzDq2wCIza10C6361BINGdx1jRBKyIx6jlEuZ5luSKA5Q5Q4BuQ4o5RQBOSnImSOaKDmh5kuY4rkDYqOau3B3YpOR5mC0VHlHlEx1e1OSOY-ZJhuRu3mi5ZZ0R0u3J2R2u2GluRp2KCJ0J2nJZ3u1V1uTGL-0ACcOKigztOKeZTk5AOdOAOUDdeZ5dpyTkOU7AXdOK3t_dOKjm6dXdDdSYSY_dTkvdnduWgd_dgdw92KbkJkDdKdW9bk69OA5Rjmc9XdSYadxiSYOAo9wd_tQ85RS9VdOUKdg9eZ-9SYOU2dntJkC9hpQ8j9z-LmOU-dz9Kdmd6dn9C9IDOUL9ntg9_dvtzmeZjmj9F9OUSYDdAAWvwOwJkY0dumDZ0WRc6QjdQDgETokNVVpe0MQ9tJPNQ6Q09P0STSmjXBLYPMnYmeLl0n0GGNjMCSlHns6PtYugwyuhzFRroBulJVug9UhlDaLDDS9QsfCu9Sev7IHCWqHAmjMjHM-u1OpknB-mnOpj-umPoGhvnCscFpvkQFdZQDdbRvBjEERshPJXDUpA9alRVDlOUTyRxGDTjhTB_GDTYjcKhlVPoeJtlGHF0KLDQEvtQPwxyITrYPXBZtSjANZm3EfDtoYvECYnyRjIyZ2LAJFnztgGfN3iEOEJQEfKAgAKr5C-klx2BRD4x2AkKcA0ZwAlENbUCzj5h4gdP0gCARlILQKZgS3-W8j25054CDyVadzS1U4LMbwjZBLpJSIpCkTRI_xfKBJUEPJ7JRLYIw7VLbPYJ55BK_YPxEENEbNyIpAiivm7N_wHP9JHOHLeb4LVJPOU6XOdzXMbxpQWisOZ7EGBKMI9OjarRmT7QTVEARgePlUBWQvxA5VXDLVb5IuLUCM3Ow4kE4CsAlQFMvP7MAJ1L1OixDgNZmK0iKR5i4jtTcNHZjNeDoDJC0Dm5TPNK6bCYGaL7GYr79Jr7705SOYLNXOo7yQKN9ErpMPaQwrdNouDwSX5wKMJoNrMMbxKuwBFrqMxw4CoBamBBHE1xEsFN6v1olo4BeDiaVoFrnMxLFoGtNpgCZotrOtZp2UzhLCevUKgU9r2sZKPOvmWuJrWuuvut0J-vZrlq-v6tZoBu9pRrzpCO9EiOvR-MpCSPKBJTbCuBpBOzUCvXKMMA6IWD8A6lHj8BXD8A_DFjVADY_hkiMggA2QVsgA7b5DUA1vsD8DYoDsxTrD8DlDkD9AzDCa9v8AlTtR4TY7NvY5zliKJC5h5DfyyQWj1t_ClhDvVj8BRBoBTsqB7pOy7sdtzl0CYAKSc3IxIBJ4QwjsqRHsAB6ntzmJkZ7NY_AG7R779B9Xtn7HbWjYKt7tbIAAhOAodjmgHfbSMxjWcf6VaR7_tF90HbbK4dbeAWxmgL777LmMH37molokQv7bk_7bkwtFgF08gm627uAugkAKQRbqAJbR6KjukIAcC9ctANbdbpotAByRHYq_ANH8gYnQAA",mdxType:"Playground"},Object(s.b)(r.a,{spacing:"s",mdxType:"InlineList"},"On: ",Object(s.b)(h,{checked:!0,mdxType:"Switch"}),"Disabled On: ",Object(s.b)(h,{checked:!0,disabled:!0,mdxType:"Switch"}),"Off: ",Object(s.b)(h,{checked:!1,mdxType:"Switch"}),"Disabled Off: ",Object(s.b)(h,{disabled:!0,mdxType:"Switch"}))))}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Switch/README.mdx"}}),w.isMDXComponent=!0},"./src/icons/BaseSvg.js":function(e,t,n){"use strict";var i=n("./node_modules/prop-types/index.js"),o=n.n(i),c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/utils/units.js"),a=c.d.svg.attrs({role:"presentation"}).withConfig({displayName:"BaseSvg__Svg",componentId:"sc-1bxcwkl-0"})(["display:inline-block;vertical-align:middle;flex:0 0 auto;width:1em;height:1em;"," "," font-size:",";",""],function(e){return e.spacingLeft&&Object(c.c)(["margin-left:",";"],e.spacingLeft)},function(e){return e.spacingRight&&Object(c.c)(["margin-right:",";"],e.spacingRight)},function(e){return 0!==e.scale?Object(s.a)(18*e.scale):Object(s.b)(18)},function(e){return e.vAlign&&Object(c.c)(["position:relative;top:-0.12em;"])});a.defaultProps={scale:1},a.propTypes={scale:o.a.number,vAlign:o.a.bool,spacingLeft:o.a.oneOfType([o.a.string,o.a.func]),spacingRight:o.a.oneOfType([o.a.string,o.a.func])},t.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}})},"./src/icons/Ok.js":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),c=n.n(o),s=n("./src/icons/BaseSvg.js"),a=Object(o.forwardRef)(function(e,t){var n=e.size,o=e.color,a=Object(i.a)(e,["size","color"]);return c.a.createElement(s.a,Object.assign({},a,{ref:t,viewBox:"0 0 18 18",width:n,height:n,fill:o,fillRule:"evenodd",clipRule:"evenodd"}),c.a.createElement("path",{d:"M8.476,11.651l4.302,-7.45c0.276,-0.478 0.888,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-4.95,8.574c-0.197,0.341 -0.565,0.522 -0.933,0.497c-0.302,0.02 -0.609,-0.096 -0.823,-0.342l-3.56,-4.108c-0.361,-0.417 -0.316,-1.049 0.101,-1.41c0.417,-0.362 1.049,-0.317 1.41,0.1l2.721,3.139Z"}))});a.displayName="OkIcon",a.defaultProps={size:18,color:"currentcolor"},t.default=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OkIcon",filename:"src/icons/Ok.js"}})}}]);
//# sourceMappingURL=src-switch-readme.ba0c57562c205ed2cca6.js.map