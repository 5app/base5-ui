(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/Box/index.js":function(e,t,n){"use strict";var i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/prop-types/index.js"),o=n.n(r),l=n("./src/styleProps/index.js"),s=i.d.div.withConfig({displayName:"Box",componentId:"sc-1uuktcw-0"})([""," "," "," "," "," "," ",""],l.f,l.b,l.c,l.d,l.e,l.a,l.g);s.propTypes={position:o.a.oneOf(["static","relative","absolute","fixed"]),display:o.a.oneOf(["block","inline","inline-block"]),border:o.a.oneOf(["top","right","bottom","left"]),flexAlign:o.a.oneOf(["top","left","center","bottom","right"]),basis:o.a.oneOfType([o.a.number,o.a.string]),grow:o.a.bool,shrink:o.a.bool,bold:o.a.bool,caps:o.a.oneOfType([o.a.oneOf(["all","first"]),o.a.bool]),dimmed:o.a.bool,fontSize:o.a.string,lineHeight:o.a.number,overflow:o.a.oneOf(["ellipsis","wrap"]),textAlign:o.a.oneOf(["left","center","right"])},t.a=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/Box/index.js"}})},"./src/Flex/README.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./node_modules/prop-types/index.js"),a=n.n(s),c=n("./src/styleProps/index.js"),b=n("./src/styleProps/flexProps.js"),d=n("./src/Box/index.js"),f=l.d.div.withConfig({displayName:"Flex",componentId:"sc-1ffxtt1-0"})([""," display:flex;"," "," align-items:",";"," "," "," ",""],c.f,(function(e){return e.wrap&&"\n\t\tflex-wrap: wrap;\n\t"}),(function(e){return e.column&&"\n\t\tflex-direction: column;\n\t\theight: 100%;\n\t"}),(function(e){return b.a[e.align]||e.align}),c.d,c.e,c.a,c.g);f.defaultProps={align:"center"},f.propTypes={align:a.a.oneOf(["top","left","center","bottom","right","stretch"]),column:a.a.bool,wrap:a.a.bool},"undefined"!==typeof d.a&&d.a&&d.a===Object(d.a)&&Object.isExtensible(d.a)&&Object.defineProperty(d.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/Flex/index.js"}});var p=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/Flex/index.js"}}),n.d(t,"default",(function(){return m}));var u={},g="wrapper";function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(g,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"flex"},"Flex"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Flex")," is a container component for building simple layouts using CSS flexbox. It's especially useful when used with the ",Object(r.b)("inlineCode",{parentName:"p"},"Box")," component which provides controls for laying out the children."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(o.c,{__position:0,__code:'<Flex align="top">\n  <Box grow shrink>\n    I take up all the space and push other Boxes away! \ud83d\udc49\n  </Box>\n  <Box>\ud83d\udc40 I\'m smol.</Box>\n</Flex>',__scope:{props:this?this.props:n,Playground:o.c,Props:o.d,Flex:p,Box:d.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYADFYBJdgoOvbx2Ewo1ZXaD04AEchJFI7ACIg9hA0lLD6NNRUwVQXQUWOU5cOcAhEixdhuAo9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnFSABYtPYAA2LSdPWMBgOI71oESFT-GcQ4EQdTAYKEfgliIahKDgfSEWs6tbJoZwIFwy52AARmM3T5EE4SpgAQTmGT2AjKDyBsKB0DDGiORksRMujGR2BRKSYG4YA8Ikqq4HkLca2AHLoHy4IADJOvGRJ5koZo2rygruFGuUwGQyUBlQdp2AAfg2dqwwjIqriGjrUES6spBkKs3zMGF1WOGAwDCKAphW4rSu2tLl2rBNuIIHBiMyFIrwIZqa1rNifHiCAUlQPgQAiGZxBXL7GConxENGCq8GnbZPq-msGnGVxtm6UIZhCBJ8W6QKJRpHIZjyPERE2I4ofgEIRnggBCdhAF4NwBJHfBmspChpGIc5xnAAEdxp2llOA_KgHAOe8Lna1YsikakR7nte97mqkW69rML8QCYlifskVRsH_LQKGA_QGEIo7KtgHI6LlC3snNT51xoOAOKIrzKBmSw-up632n7d3zUk-ZnZVf1UDN-1gDBW4Apeaa0PduBdN4AgvAEKd47uJPiFcRS0AzxOo_0zsCnzrPaCwAhS7MWi3QYxjJNgfO_VtI7gD-gG9VmGvsJweuqvzyQwDIpuQ5b-0od490PSh5uhOoESfoy230BwGRiijgASYBBXybtUHzrbk5YQK4Kcw0yNH_0CC37HuCrZPk5mHARkybHuqj5P16v5Oh-wc0X9mFcABMxR4EGKIfK-N9iof1uB8SgUBQhEHMO_b-YCYG_ywJaCAXQprUDWvAxBqBQHJ02P9QgVwYqqVUgAUlAeAwSyd26oHNC8GARB7jsCgXfHG_1UCdxmAAbSfkwgAuuwAAPuIvsOAmHyEvsnLeCklIH03tvAyJd0KH2vsAVO6dNGqPLpXfRqBiiXx-qvE6Z0jEJwypHK-TCVIIj0AIEKcjBLmL9h7L2dhZJ2OTsYIw7AUpQF4YtYawRmQTG6OQIQcA7CuCwLYdgPIo4OLdl4oOOBqAwB1GACMAiYHtBBiFB-L5YBgBfFnZO7QnG0BcVUl8XgbiRBKaIF8_QUiEFadUlEXQCA5VaSIjkWcAlBIEJkGc0TcobU4OYVwhYEFINmSicUOQBohAnKMHAUdknsGcKOGIM58RJPiHAYccBRx2CiXmV-sJ2jnDIVMCI7BiiUJocUZJvIr5UEWcpdJntMleHgSMkwQSEiw3WgVZ5BB0aY2xn5Lo-J3B7GdJssYKSr7AKuBnAF8AcBAqgAlS-h0I5QzcaHElUxMCnVCOddgP0Q4ay1pIW2A89YaENkBPQoFwKu10RkfOk8GKSH5QIEeY8qW2DJPBQVPsPTH2lYkcVYdOIYNlbXD0ar0IuyOkXQyKR1U90kHqjRCcdX2h3rHaghr6IektXvZV4dmw52UehIVHolF521SHJ14xsDWMHHKyQhjlUHSwK7PxKchR6ITlnBVp8q5Xy1bGwu6iZyJsfjHB16Es6ev3jmqOIaC2bUZUoTWzEWUNxgAPZNdwDaAV0CBAwYFfXbywJYSgYoiDd1tR6cI0A4CSGQi8YOglKWFlQCJJh_DbGFvdipDB5oUQ50qVHcpBAF1kSXTC4UrTakZEcfoDIrSmkRCIJuv-dB0CtI6eQ8aW6r2uMvhNISe9z7YHzhGTxcAiqRuShRDBwTeFLA8P4WwSwYYjCWHAeGaBtiYVkt--RqJRx9HMJG_xgSxQXKlGRIcnz0FkRUqgbJ3SCDGC8jAVgLpKDUYEEPUYBQJ1NsnjCSoTGMGcFoOwgjqCiBoAAOpcAmFcVSDSMHXjAxw0D-Q7ALS0h2rtEYZO2FWrkcMkBnSLEI9gAA4kIEYVxIPzViuwK4yFqVoGyOJsizhYOoG2FcGDCMTMxTM-pyzWmGlMP2VAMAVxp2zAEYBkJAMxGSPfVgIDAMs7kogeO6lVjIv51LcoZlUNdbhg5Q242PLfXLyFcve2jpslO3NVMHF3ihWeIDt42erbC5ZrjsWo-UqE0tYILWguV880ZtuGmg1HXRV9aLSmza7q-6N29UleeUwJ6yWXqvNgX8FHbya9a4xq340ys29orrWjFEuq9QnA7aji7pt21vYbl3gCjbuFtUxgkoY4E8binxckr72umtigcb2snOlyfk-5MKYjkB0iaec0Q2AwHB-0VwHgzkINoLDyANRr1DLjW1-CP33Z_eyYDgR7QPBQFONsWHaAQnOnJ6gSnMBzTE9J-0DHUdRU44yXi_HeTCfFKWJ0R5sPT0tN5-upnwyo4hd4WzvHAOudFPdrDkXvP931LlIL60vPb0vmZ1fFTHDKuZM57i_J-u8WoEQYEAQqFfveJwL0go2vk6QalzbglWdnNwed4C4QhKWfwPQJ7vFruo5xDuAHuA_2clgCNwU1BJvw-c6B_EKAKPsEolFw0uP-LvdZwdwQFgRAjz-_-S77P4vgIRSimH23qIChZ1pwACRgI8qvZuiAW6zrRjIDHDPF4NzLoH84Ql3FsLD4B6fC3-ui38zPCfCeK7lMr2Hmvx8lrHeGo6iXaVze8Kl8tLFWXoRFdGgV6F63aEbSbFtnFWqbB2NYNhMAe1TyHTEKAg6olHnq9f0VAA1eIDIn865JB-NElJ1Z5_1RUABpGARId7SNEGFSUVDtGYVpddRA4_AQAAGROlXR1xEDPXQLTgyComaXVyjk10IKnBFH5yJUEhfVwXMGuwTi_XQl_WD1mwolFSWA_0fwyiQwYX6Vv22HvyPAjB4I_AEIgGaAjDpigJgLgAEVFSGQ-1KT6TQ3YDNwSFAQgWTjUIEHQxgUUIwOgNgKMKIIEBERESuF_3_xgDEM2CPDFyvjizX1dk3zpSYLuF32ZQPwTh3BPh2wTjPyNm5WbS5REnpDmHVGyC1Cx0SD_wQWplkkJwZx2Gp1p3SKs3pxJzSJEWfUmjfW2yVXQhYITjYO-Q4NqjiIQz7HQmQykMyjpiKKKj0PME0KgHqOkMiKIhiLiISIZHDzQHIAQXKAjGaPKNUNQ30JULaVawCMSAaXJWTkwnnAuRmOTmEngT_Fpn0KjFQU_h1Bp2SCJxyLJ15wpys3B0qDlAuOdGyMZxCERW6OiKtiFBgWTmuRwjiNmgtiY08XqFgnFDWLyG6CJwpAAFZzRQgIBpZ2I9gjhegURjR7BnBnB3jOshR2AEVolHQ8NfiZwcAVs2kJDnDq5XCN9LEt9jg4iUt1Yy0fCq0B4TULsgiAJz9cswjW1TxnAgoChADe4X8B0WVeSZxysKIcothhCHDeC5U-1X939pTZ56C31mTBtmDv0Jj-lKiZhSRyIZgFi-wCBSRLc-wPBSRCU8Yjwaj-DQ4NihCRC7DxDkNWj1j-tzsUgrhsYFpuSRSUgv1uDpS1MLMTorNtNUFVTkDPTEh0TvTRweSJQCgv0DTxD0TPTRB9iCBYyCB4zyBEyZgjTLSYB9pZiN0PMQyvMYFVTqDOlSytIYyRxszfSv1yIUyMzPSBB6yfSEyZwWCAyH9izSlzMNNQyGlVSSCCC-xoyMysycy8zkzAzUzTTOy4ymyZgzTCyBy2khzPNrNKyBtsCKlPSsBlzGzuy_StI-zHDFyyQTzZyeyyRLyizFzgzNNdznCQ54t197R3CphVTaTUAmUK1fC7hjV1t81WTOUL88tr8uzcyZx-S5ShSCY4KUgxSb9JSHSELBS39g1FT8jX1po-wwLP0NSZj_01tE4iLd5ppuD3Ylh10QN8DIglhNclhcJHzrS6iBCJS79pT7D-znSpiDDwywLPSAoJEpEvtmQIsXyRyBCPj50hwvSGy7y_SQZHygzhyKzUE0D2B10TNYLEyGKNz3NZLtLSk1drCmLZQZymy1cNLTKtK3zVDm8JxHkDKVyzyIxWKTLtzyznLUFcIGgssrh-KjwTwSdQM38cBcJ2BupCyIrKAorw9cIBFcJlCItYqZKnKwzliPzyTvzKS6UpLwKvC6S0sgLGTD9etT82SQim1TYYLPKUKsL-0cLkKCg0KeKpSH9Wr5TcKH8lSCjCKar1TWCyLKiiBfJyIiADSiACyiATS29fILSeDOKE5kNuqHSwqizBKCB1CMNs5c4_kbKVKmyprfKyzXzcq2k81IysSpzSlk5bKvLZqNLFz5rbzzqCzWynrSyzLnLbqjtUBqy70iBjzpyzrXqWyFy2ysSOzIbDKezFr3q4aAabrk481xzIgrhZqvrXr5z-yPqPB8aUKIxlqNznycqGk80DzSzwbSbEzwbUa_rcaoBGbkbVrYbWarq5L3yySKUvyqUirnVjr_zAL98qq_C7tw86quUGqr8I14gZg_A-qhSfkhRR0VUI0trpS1acKeC0LB8IBh9KLO96MScRgBNX4QhsRX4sKQC0AtazB_1DFLAJk4BbIBAiAZ1fFUkEgVIsZYQ4gLlWlIABAURHFZgXg_ooon0ZtJ0Dg6Nu96osRfaZjjbTas5gFaDQ5lTCKZbSi7hNTyKYEvA8oGkQ9utSl89C9xNy9IoYAGkG8m8ayGlzbu8GlDEp8k5UEeDYs-CuLbTBCMK-KnSBCXTDru7QtUB67wpG6rgwpszG6TMeDErkqcBA4YBnA4hYBgsG6ooxE_Lrq56CABNW671y6cgFoic_dZorK8oZIxpTo39ugb6SNvb4h77ebzK2kW7Hku7_V3b3BPahRz1Vg7h6y3aPavafagsq6RFFyq6n7ZIX6Ll6z2gSMqcqadyMatSScyxqSC9sh6zla_AdrN7_VHzKGK5YiiAJIwwUgJhNzk4rha7cxRpUHTlGRIa17DEcH_K8He4cAIwO7LaTMxHRhU74B-EBFJGRgj6f7sgnC8qBaw03CRa_UK5xb6SK02rB1h0CBZbIKOSGB_0hARBiID7uhZIYpzJ8KGCJw2EO1oIsBvK2ES6OCugeNZJvHbc3g7ceyxMnGiAcBYAZwCxzQNISTdChL2AABqbxuwQJCxggKx-eqKfKvO4a5kBTTtSHGIajZskDCkdJ5eqKJYQxgAOW9CLJmJdLMnkx8EkHYBkxgDKYr26HifUxeBqaPEctwayZdo4Lya7T4J8G4VGYKeh2Kc2UsesY1zYVfEvn_TybPFlFklmbaYylSY6cbqKkmfbXybgkKbsIvNaYpF5yWZiedCFool2YWZCZcb1KOa7V1I7XWfJQluwoVIf2CPlsv15VbgdP2QYLPHGSFCwpBa2D3iGoIuZF1ofx2s1IaJkJ4IkvYDpjXsxCStOU1I-PhlhmdDGGhbBYhYEBWm0LUduZ1vtL1u8IrUdsnUyzUH-ags5M4hsMSPdSP3MP6Jhx9U4mV3sGmQKiDWFdFboDFMztkx5ZlZH0FddkgASGghzhdCDWVagFVbDBfEVaOggBgBihinrwlF2CDQNaNZNbSL1ftHkettmB5btdfjFNYFsFCCT0SHry4EwHMCDVdfpA9a9c7CleJTucjS5YZCzglaWjoCznlers62gC1bVZoCzgteNdNY72TstvtZ1Kjn9fdYSE9e9djergZZYn0eFLPLZdMcVtbime7R5cMedrnkTr7H8DgGsCQk6X5fe0JzCAiCZwcbfSRr9Jg3VEcEwAcsjVRfHeFEnZsbGnRoxbnYIAXZQY0NpSgBXeGHncBA3bQbqcOpdNXYXapeHtRZgTEK9nWVPf3bpjGkwfN2PTip6i3tvd3bXfvcfcCdQqKkkRgTvc8k4blFUnaCjnxZQ32umLUmbgIB0JiGkPfeaCA8Xdkifbb2PUg4adebYQjFQ5ifg8kOkP0jiS7baB7dsMGKy0BwI_YBKnNBimw7idQ_Pajlnc_YXY-D8AEBSgIAjFUgOcffNFfFdJdPaBE4SYSpxY3o6pnAEVQ_8YRxrx7KY7yKjhWNfrE7iexcitOVt19IU848BHU9JM2gKsglHa-d0Yrf6o1ojprdCMatdhyhlHmR9lc8iFcHNE0HAI4LIfmU2fs6WG9DaBoAOfvkELc4jHs83JkSgBVtcAjFC-QgIDi7ODgEpYTpEhAIyhi_gSFCWHs5zJsblDwDgGTwi8yjaccAIZC78lS4i-D0JaiBwBAOUwpFq8K4WW65S9TZ64EBK5uf_XQBzgxnMFkna5ONNaXxSA8GWey6mFC0IGCEm4gDcfaBGBsGRw1zm4W9Dn_VsC1DG4yns6uk86iHy4IY5DCcQTQHcAREukYHYFUhwGMiTBDkO7gEwPctkjO-4TpiO7G6u6FBuceC4jifmUbUyBRCY0MQG8NExPmWeGo0YNNZhgsx676EW-Yxh6mE2fYLq6jlG4EG2C66OHQ8UlAwE6WGCbp5wAAHYORUDHlyeMpNvtuYczAquIwgfSeQeBAioFpluv2CH3MSeyeCvBfL5wfO4MYNkzv5kPBxwReMh4TjgxuMhdJwfMB5gMAmNmQtvRwKYuNOB4kNfSf1eReBucebBOlregupelhTpJRMTZJXumPoEr4-ftgBehe9LHk6ABfnezRQfxfNfUBg_DRQ_pe6CcnzBTxyfrxTio_xD6mdPpSBF7PwspFdPcXor7Pk_ScFDs-MX7OhnUB87mRTxJMdgMeMA7MOxHTAz0_oO5kEvyG16YMm_qHu-XAUMIm8ASSIEq-E-4z4EuBa_th6_0BG_MBkXW_1D2uu-_Ap2TQ9uOQKHQM6-kIUIEq-_t6B-mGh-K_x1I0Avc11u40I-69A_Z72CaA8es47e8ARe024BjvSf3-fu26o5E-pei-OwLODX3R679Z-q_Jun_3H4hJ0AU_GfnP0gGr4AKNnSQKSz3gst9Yctdls5yOiPQlgwAEEvYCTzb94MQqfiLqwlS95vYtcGrFvS1qtoHS8cV1lOEAJFYHYpWIxmKTQHTRwWQgI4EGgyB8Cv8rsU8IGFG7E4YA5PVImaw1RPBRwYg-HLACkGnE4WjjbgdQCLo_oJqbbHRBSAdJFdJWs9AboAO2BLA_AcAa8CkAaBRA0gSwVALU3WplVh6_6ZKGiElCYFTg8QB0hlEIHEDTWexUpF-hTYEBvBskNpg6Sq6HUNiHBQvqcR1B0Z-g5QDKKINWSKDJBUvaQQEJLKPxghDpdevp1iHF8GkpSQoUAPRIkJ_Alg6wa4DSDokbmf1SeuUKei9x9IOrfQU0OEatD9AeQi5AwQUL2CjwIiYoW0mEalDtg8QwQVwHgDDClibSJQIYXCHSkiuAA04mYMqFWCbBTdDQrU0QZXx6hUHdQlkOTiMBGBQgZgWrx4I1RXBoQdwZ4KgCYUxAN-GNptCkCnDaMUwgQJF2H6CR1BqAF7NbiDizodceg6UlXm77zAsoMCGTqcirxJV1AMLHALYDFAABHaEl0Dwa9C94euAERzg8DwjJQiIuACiLRGA15AKjfBkKBMFgiVOKQZ_usOqFpAq8QeK-AMOiiZ5f2hI4kdgjfJLEaWFJGlHSl-Ehwz-vw3gZC3LbAF1uTtXllOH5aOcFaQLCOAF31qDp7OLbUfq0wwL8sF-kaF0q8jMiI4uAnCNuB3yS4r8e-CVWnAwzoDH8OQ8gR7OZ0FoaMBRUwCNjAAlFMtVRR6AQCK2eHyjAWLg70b6PCQTcZiRRC9NpCzhMImwbCDhDUm9GtJ1AeQRDokEcChFD0zieOk6P5FJZo2IYj0VKOZbxt_RPKf9PGyBHJx5GKkGwMGxmhlx_UEwi2qMBUjxtWkW3VhCV2IyjBnWuddRjmKpLxsCxoBQdJq21bHgsBtbcIlKCTZjjMwftT7KJTlDw5Ec4QGHGXEUpiZyCrlTcXgVIKiY68OBfcWWws7HQXRhoGccEKHHSj02VrbYCWLCIUYAAqmsQmAnJzeheCAPMlREZBkgzyWYGSGRBVo7A1AJICikaBnhYobmDFMMzbY3jTWMkKOPchiRBA5kGATKOaHYTmgX-xWR_v4FLJmhocwydCZhOwnQ88JVwLBkWVngJZNGcEnYFeOZZOtZg94sxhwSYm3wZi7ExAqaG2D_xo0bY6NLm24niheJIwfib3WThiS0414HicJPRh8S04WYvsYVTPHsSGJg6AtoGxLZ_CJxTnMCP-k0lFsg2PrCsdHGop4IlxCOAhDtyjhViyu2ktscJjwAUJn-F9UsjFCziqkjx3yIfCpBwT8d1IgUl7szyzis4XuvYvkSpKSyGSkgxkugBKN-GehyWLE_SXBDiRWBpSoLPeGKKOD-or0dgHKRRE_LOiksoo8lglMykwtpocgggAoIkHKDScKUxUZBDIkogVRAIAhuqPj4Nk6pSgjISnzGGUUxhfTLYeYKqGbCUW0hOmMNNqYYtppKw4vlnwWk7ARpyhY9nE2ACzCEO5jVIfVKl4ZQxpGwmoTw1KQ312xyOGBPglwkogBeJgkvstO2CrT9hjQvuv6iuCmhxBfUonjpTgwcIPpaQ8ng0hIEz98EBDO6UtLBmnFVpsWU_ncx_I9TdpX0oUNIN3xBRtgx0g2NQByx6SQAdiCwPwFZH8Arg_AH4MWGqAZBzQP4MkIyBAC6R8ZIAOjPkGoBEz2A_AV7uzJ8jrB-A5QGJCbT3gsz-AKUCqIRFgDQgsA3oamcdDJCUBEguYPIExnIHFZygfwUsJzOrD8AogaAAWSoCywGw1Z9M3XlenhAGs4ALMvGTWG5liRtZAAPRig4AkwOAAAEz6yLZggTUNrLsY4BKETsl2fTLYElYMwRjbWcZDe44BVIvs1mSAFoHeIPZ4JRnj7NpkrgSZLXbzpoBtmOyw5b3COfwEVlWgPZ5kL2a92dkgB1gW0eQEyhVm4BdAkAFIJjIArskcZkcYGGwmlS0AiZJM00LQHNCKz_x_AcufIAHlAA",mdxType:"Playground"},Object(r.b)(p,{align:"top",mdxType:"Flex"},Object(r.b)(d.a,{grow:!0,shrink:!0,mdxType:"Box"},"I take up all the space and push other Boxes away! \ud83d\udc49"),Object(r.b)(d.a,{mdxType:"Box"},"\ud83d\udc40 I'm smol."))),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(o.d,{of:p,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Flex/README.mdx"}}),m.isMDXComponent=!0},"./src/mixins/index.js":function(e,t,n){"use strict";var i=n("./src/utils/colors.js");function r(e){return"1px solid ".concat(Object(i.a)(e.shade,e.lineStrength))}var o=r;r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var l={display:"flex",alignItems:"center",justifyContent:"center"},s=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var a={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b={position:"absolute",top:0,right:0,bottom:0,left:0},d=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var f="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",p=f;f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var u={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},g=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var m={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},j=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return j})),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("./src/utils/units.js"),r={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function o(e){var t=e.flexAlign,n=e.basis,o=e.grow,l=e.shrink;return{flex:"none",minWidth:0,flexBasis:n?Object(i.b)(n):void 0,flexGrow:o?1:void 0,flexShrink:l?1:void 0,alignSelf:r[t]||t}}"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./src/ThemeSection/index.js");function o(e){if(!e||!e.globals)throw new r.a}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var l=n("./src/mixins/index.js"),s={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function a(e){var t=e.border,n=e.theme;return o(n),s[t]?Object(i.a)({},s[t],Object(l.a)(n)):null}var c=a;a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=["block","inline","inline-block"];function d(e){var t=e.display;return t?b.includes(t)?{display:t}:void console.warn("Only 'block', 'inline', and 'inline-block' are supported for\n\t\t\tthe 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS\n\t\t\tfor more complex styling."):null}var f=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/displayProps.js"}});var p=n("./src/styleProps/flexProps.js"),u=n("./src/utils/spacing.js");function g(e){var t=e.p,n=e.px,i=e.py,r=e.pt,l=e.pr,s=e.pb,a=e.pl,c=e.theme;return o(c),{padding:t?Object(u.a)(t,c):void 0,paddingTop:i?Object(u.a)(i,c):r?Object(u.a)(r,c):void 0,paddingRight:n?Object(u.a)(n,c):l?Object(u.a)(l,c):void 0,paddingBottom:i?Object(u.a)(i,c):s?Object(u.a)(s,c):void 0,paddingLeft:n?Object(u.a)(n,c):a?Object(u.a)(a,c):void 0}}var m=g;function j(e){var t=e.pos,n=e.position,i=e.top,r=e.left,l=e.bottom,s=e.right,a=e.z,c=e.theme;return o(c),{position:t||n||void 0,top:i?Object(u.a)(i,c):void 0,left:r?Object(u.a)(r,c):void 0,bottom:l?Object(u.a)(l,c):void 0,right:s?Object(u.a)(s,c):void 0,zIndex:c.globals.z&&c.globals.z[a]||a||void 0}}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var A=j;function y(e){var t=e.m,n=e.mx,i=e.my,r=e.mt,l=e.mr,s=e.mb,a=e.ml,c=e.theme;return o(c),{margin:t?Object(u.a)(t,c):void 0,marginTop:i?Object(u.a)(i,c):r?Object(u.a)(r,c):void 0,marginRight:n?Object(u.a)(n,c):l?Object(u.a)(l,c):void 0,marginBottom:i?Object(u.a)(i,c):s?Object(u.a)(s,c):void 0,marginLeft:n?Object(u.a)(n,c):a?Object(u.a)(a,c):void 0}}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var O=y;y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var x=n("./src/utils/colors.js");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var w={all:"uppercase",first:"capitalize"},C={ellipsis:l.b,wrap:l.d};function E(e){var t=e.bold,n=e.caps,r=e.dimmed,l=e.fontSize,s=e.lineHeight,a=e.overflow,c=e.textAlign,b=e.theme;return o(b),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({textAlign:c,fontSize:l?b.globals.typeScale[l]:void 0,fontWeight:t?"bold":!1===t?"normal":void 0,lineHeight:s,textTransform:n?w[n]:!1===n?"none":void 0,color:r?Object(x.a)(b.text,b.textDimStrength):!1===r?b.text:void 0},a?C[a]:void 0)}var h=E;E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p.b})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return A})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return h})),"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof p.b&&p.b&&p.b===Object(p.b)&&Object.isExtensible(p.b)&&Object.defineProperty(p.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("./src/utils/units.js"),r=["auto"];function o(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(i.b)(e):r.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-flex-readme.a31de16773d75e13fe00.js.map