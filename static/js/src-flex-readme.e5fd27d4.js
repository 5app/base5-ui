(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/Box/index.js":function(e,i,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/prop-types/index.js"),o=t.n(r),s=t("./src/styleProps/index.js"),a=n.d.div.withConfig({displayName:"Box",componentId:"sc-1uuktcw-0"})([""," "," "," "," "," ",""],s.e,s.b,s.c,s.d,s.a,s.f);a.propTypes={position:o.a.oneOf(["static","relative","absolute","fixed"]),border:o.a.oneOf(["top","right","bottom","left"]),flexAlign:o.a.oneOf(["top","left","center","bottom","right"]),basis:o.a.oneOfType([o.a.number,o.a.string]),grow:o.a.bool,shrink:o.a.bool,bold:o.a.bool,caps:o.a.oneOf(["all","first"]),dimmed:o.a.bool,fontSize:o.a.string,lineHeight:o.a.number,overflow:o.a.oneOf(["ellipsis","wrap"]),textAlign:o.a.oneOf(["left","center","right"])},i.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/Box/index.js"}})},"./src/Flex/README.mdx":function(e,i,t){"use strict";t.r(i);var n=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("./node_modules/prop-types/index.js"),l=t.n(a),c=t("./src/styleProps/index.js"),b=t("./src/styleProps/flexProps.js"),d=t("./src/Box/index.js"),f=s.d.div.withConfig({displayName:"Flex",componentId:"sc-1ffxtt1-0"})([""," display:flex;"," "," align-items:",";"," "," "," ",""],c.e,function(e){return e.wrap&&"\n\t\tflex-wrap: wrap;\n\t"},function(e){return e.column&&"\n\t\tflex-direction: column;\n\t\theight: 100%;\n\t"},function(e){return b.a[e.align]||e.align},c.c,c.d,c.a,c.f);f.defaultProps={align:"center"},f.propTypes={align:l.a.oneOf(["top","left","center","bottom","right","stretch"]),column:l.a.bool,wrap:l.a.bool},"undefined"!==typeof d.a&&d.a&&d.a===Object(d.a)&&Object.isExtensible(d.a)&&Object.defineProperty(d.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/Flex/index.js"}});var j=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/Flex/index.js"}}),t.d(i,"default",function(){return p});var u={},m="wrapper";function p(e){var i=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(m,Object.assign({},u,t,{components:i,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"flex"},"Flex"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Flex")," is a container component for building simple layouts using CSS flexbox. It's especially useful when used with the ",Object(r.b)("inlineCode",{parentName:"p"},"Box")," component which provides controls for laying out the children."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(o.c,{__position:0,__code:'<Flex align="top">\n  <Box grow shrink>\n    I take up all the space and push other Boxes away! \ud83d\udc49\n  </Box>\n  <Box>\ud83d\udc40 I\'m smol.</Box>\n</Flex>',__scope:{props:this?this.props:t,Playground:o.c,Props:o.d,Flex:j,Box:d.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYADFYBJdgoOvbx2Ewo1ZXaD04AEchJFI7ACIg9hA0lLD6NNRUwVQXQUWOU5cOcAhEixdhuAo9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnFSABYtPYAA2LSdPWMBgOI71oESFT-GcQ4EQdTAYKEfgliIahKDgfSEWs6tbJoZwIFwy52AARmM3T5EE4SpgAQTmGT2AjKDyBsKB0DDGiORksRMujGR2BRKSYG4YA8Ikqq4HkLca2AHLoHy4IADJOvGRJ5koZo2rygruFGuUwGQyUBlQdp2AAfg2dqwwjIqriGjrUES6spBkKs3zMGF1WOGAwDCKAphW4rSu2tLl2rBNuIIHBiMyFIrwIZqa1rNifHiCAUlQPgQAiGZxBXL7GConxENGCq8GnbZPq-msGnGVxtm6UIZhCBJ8W6QKJRpHIZjyPERE2I4ofgEIRnggBCdhAF4NwBJHfBmspChpGIc5xnAAEdxp2llOA_KgHAOe8Lna1YsikakR7nte97mqkW69rML8QCYlifskVRsH_LQKGA_QGEIo7KtgHI6LlC3snNT51xoOAOKIrzKBmSw-up632n7d3zUk-ZnZVf1UDN-1gDBW4Apeaa0PduBdN4AgvAEKd47uJPiFcRS0AzxOo_0zsCnzrPaCwAhS7MWi3QYxjJNgfO_VtI7gD-gG9VmGvsJweuqvzyQwDIpuQ5b-0od490PSh5uhOoESfoy230BwGRiijgASYBBXybtUHzrbk5YQK4Kcw0yNH_0CC37HuCrZPk5mHARkybHuqj5P16v5Oh-wc0X9mFcABMxR4EGKIfK-N9iof1uB8SgUBQhEHMO_b-YCYG_ywJaCAXQprUDWvAxBqBQHJ02P9QgVwYqqVUgAUlAeAwSyd26oHNC8GARB7jsCgXfHG_1UCdxmAAbSfkwgAuuwAAPuIvsOAmHyEvsnLeCklIH03tvAyJd0KH2vsAVO6dNGqPLpXfRqBiiXx-qvE6Z0jEJwypHK-TCVIIj0AIEKcjBLmL9h7L2dhZJ2OTsYIw7AUpQF4YtYawRmQTG6OQIQcA7CuCwLYdgPIo4OLdl4oOOBqAwB1GACMAiYHtBBiFB-L5YBgBfFnZO7QnG0BcVUl8XgbiRBKaIF8_QUiEFadUlEXQCA5VaSIjkWcAlBIEJkGc0TcobU4OYVwhYEFINmSicUOQBohAnKMHAUdknsGcKOGIM58RJPiHAYccBRx2CiXmV-sJ2jnDIVMCI7BiiUJocUZJvIr5UEWcpdJntMleHgSMkwQSEiw3WgVZ5BB0aY2xn5Lo-J3B7GdJssYKSr7AKuBnAF8AcBAqgAlS-h0I5QzcaHElUxMCnVCOddgP0Q4ay1pIW2A89YaENkBPQoFwKu10RkfOk8GKSH5QIEeY8pTD3QkKj0GDxVh04kXQyKRBU-w9EqjRCcXZHR3rHagqra7qpjnveV4dmw52UdKtVkglF53Qtq-0hiDU90kE6-1xKsCuz8SnIUeiE5ZzlehLOGqZxVyvrqk1Qao62v3lGq-br_XV0ZUoTWzEWUNxgAPQNCcDaAV0CBAwYEzUUS0pYSgYoiDd3or3SQ4RoBwFrWHAgwdBKUsLKgESTD-G2KjiDFSGDzQohzpUqO5SCD9rIoOmFwpWm1IyI4_QGRWlNIiEQCdf86DoFaR08h41J2btcZfCaQk97n2wPnCMni4BFW9clCiGDgm8KWB4fwtglgwxGEsOA8M0DbEwrJK98jUSjj6OYb1_jAliguZK7AQ5PnoLIipVA2TukEGMF5GArAXSUCwwIIeowCjtoLZPGElRCMYM4LQdh8HUFEDQAAdS4BMK4qkGkYOvK-jhL78h2AWqW8tbCIzcdsKtXI4ZIDOkWAh7AABxIQIwrgfvmrFdgVxkLUrQNkNjZFnA_tQNsK436EbKZiqpsTGnJMNKYfsqAYArhdtmAIh9ISAZiMkWerAj6AZZ3JRAtt1KrEefzsm5QzKoa63DByvNxseXFuXkK5e9tHTZKdg6qYOLvFCs8QHbxs9i3eojXHONP8pWJqvjGsNj91GhuKz6tOArasJsztXGVfdG7uqSvPKYE9ZLL1XmwL-Cjt7GqKwnLRW9s13HG8ACrxihshpVXN7RoqVGQOAE1xqZhTGCShjgTxuKfFyXDSNvB_zvFZOdLk_J9yYUxHIDpE085ohsBgA99orgPBnIQbQN7kAahbqGVnUV2KBwHYuzkvJAiinuzezuypcoV0tKWO0Md7RAdR2c7wkH7swfZKu1D4pyPUfI7nfUhHIhV2w8eWj4ZUdhMcIy5kvHYBcX5MZ3i1AiDAgCFQqD87vSCjo6vh-7HGS8UEqzkZ39ouwcS7p_A9AMvzty--bMBnfOmeXch-9hIv3sEohp1nFgRAjyK7O4C4QhKMfAQilFJXmSBcziziE50AAJGAjz7cc65xkLOOGMj4YU-bvFzPrvzhCXcWwb3gGG97dgAgXm_ns7gOD_HKOTrw5qYusnnRqdC_JQdT1R0Au0u694ELqaWKsvQiK31DWc0AW0Pmk2RbOKtU2DsawbCYBVqnrWmIUAG1RKPHltvoqABq8QGS97rjaiAiSO2zzvaKgA0jARIh3vV9vJ_VgQZaZitLHSpUVAAZDPy6KeRGP3XgQVFmnWiznD6_u-RTU6JYJY9uDzArfQpe9CN6o470dEb8lhh8e8MpAMGF-kO9tgu8jwIwwCPwoCIBmgIw6ZV9184ABFRUhkjtSk-lQN2BOcEhQEIFk4CCBAwMYFsCb818N8aDd8RERErgJ8p8YAEDNgjxacr5fNW0i97QS86Uf8E4K9mVq8E5JAFt85c0m8YtC1eVW5TxnAgoCgZ8a061B8WUVCZw0sKIcothYDODwC1UPQNCh8jDZ5P9T0pDf8r0ADvkusS1SRyIZhEhSQCBSQec-wPBSRCU8Yjx_0-x0IgN9DO8jCODu8kDQ5yCQNKC8C2kFsrhsYFolDtCUhL1QCjDRN1MTpNMpNUEFt98kjEgYFk4UjRxlCJQChL03D_CYB9o2lk4kjRBUEyiRwCBKjyBqiZgPC6iGjSk1NxM8iGkFtX9Olx0-wsBSiCByiOi0jL1yJEDpikiBBpjZjOjuivCljWiJiciJMtMYEFs79V1ii1j2iNiZwajMjIjljvCzjUiqjLiZgfC-jbi9jhjDjqsUgz8Kkkipidj1j5itJriuDbiyR7iKigS_DtjSkmjzNcjLMo5eCKV-CqVLFS8-wvjgt1YU0xCM0B5Ct9V0IZCjZuV5D8sHiuiZw1DTCB8G0CYqSUhdD28DC4DjDDVaT61XULCj1JprCTtY0E4_8E57Dk4gCd5SQBTQD3Ylgx1n1L8iAlg4clhcIQTwCANgioDQjDDu8IiuCgMKCqCCiBSkiAoJEpFCTzB3N3jEToi2lt8QZlNKTqiQY1TsihjbTSkj92Ax0nTITHj0i5S-izMbSDjUFEc112AIy_S5iAyhMFS3SQyPSwz8DPcJxHkYyLj0jlTgzBiLMUzUFcIGhIsrg9S_xMRKAX1B8cBcJ2Buo6iTwoBKzTkayBFcJcD3NazrTkz8jk5kTC9XZBCphLTsTUAmU01xC7gbULU7UG9OVm9Ys29nTqTWt-8uSGSChmTtS2SaS1zNCwDLC-Tpp2BZshS7D4igDFSTzyIiBaiiBeiiAvCiAXiSA1TAjIC7TtzwjECDTYijTSkY0rhZRAS4yrzECkz8zey2kY0iiTySiATzj5jby3Tbj7yITYzGSIx7yUKdi8yESUzoKZzUAxjd0iB_jYSZjELQLFisjULViELlz0jHycKKK8L9ioLk4Y1jir84L0KsysLaiYTGiJjny-KkKXihKBj4T2KGkY0fiRLyLhKQLMKyKWLhKgKoAxLQLoTaLcLpKPieCQ4_NUTjoaU6VTy7hRCJz8Sa8NsSSuUC1TY294gZg_BdyzCAQmyBAW0FUvUvzu93K6TuTu9mTw8IBI9E49hcNA96NX5dy6MF8fKzA71DFLAJk4BbIBAiBu1fFUkEgVIsZYQ4gLlWlIBvKJialZgXg_oopD1OsO0DhoqmyRh6osQcr4iwqIqrhwMCBj4yR4Jj8mydhUNe4cBOqeMfMs4sV4ij5bB-qz52gPAhrtgRre5_c8NmrYrZhJqk0P8jzIl48L1zzb1HCeqvA8oGk4hmtUFjdTc2MbdIoYAGkXcYB3dHkGl1rA8GlDFE8k5UEwCfMIDNTPyYC2SyyojR1RweEAZWr4BQEUDMofqXN3wZqYVkbYbN9pi-rT5BrTgVqGlk4cR0BmM5Q3lqFUNk4kan0YEC8CAyDgMCBCCerRrrMM0C5UEwoOjHqrhObbdugFowDGzmzqzA4YBnA4hYAnMHqooxE2KDLSlOb6MPdxiWCFdlNFqFdZo5bPS2kXq3rxjvr480r3AMqhRIyrreNxgjb0rMrsrHMLbZb9KdaxT4EhQrhbrcwFoXK_AyycBDE1S_b48tR-QJIwwUgJh3TIKGlRqIxPrmrlM47RgMb-EBFE6RhHbQz0BuC-yjK-DBz0S6UNsrKWIPLkIXgU9G9STHKwI70hARBiJpbuhZIYpzJeST1jyugiAy1oIsAIxO7RT-lHDO7DtO6cB6RPtURqjWMJw2EcBYAZwCxzQNIIaGbCCABqYe3ZOuggBu8KR63O0OKw48_jMUOCGILDBY59CkXermqKJYMuggAAOW9HqPiMNMmOUzMkkCjOvsbvYDXrExeGfqPAgvwvQAPuSscJPrYQgJ8G4WgbPpe0vs2XrsbuR07tfEvjvX4zPFlFkmQe4ybpQZ3sbqKngawDLVPuewvuBJ_ouWRzYUwbztbm3pvr5qVLYW7pcIoYEyvJwcrWLr3PMO73soXPJLbzZP2S_zPHGSFF3Mka2D3kPPbuZH8vgPAu9QRrQLAPNPYDpkForKrOvVRomHkyIJgDGAUekdkYEBWlIOrmYYjjUZ70EYSrQAbXZVEbkKcr5Rv0nwQW6GtVYICd0NJ3sGmQKmtTCYiboF0PGqSWtXiZ8uLUgASGghzhdGtVSagHSbDBfBDmLQgBgBihildwlF2GtSKZKbKeGoKc4jTq2uxmtQadfl0NYFsFCHiCSFdy4EwHMGtXafpC6cSB6c7FiY9S9Xl1338YZCzmiaWjoCziSYDWgByYyZoCziqdKfKb9yatGEaazkGc6YSBGd6cWd2rHNxLTQ8o3JnC8bJJ8dbmgcrRlUbXLqXygf8DgGsCQk6RmeplkihzCAiDRzbq_yoswu_XVEcEwETM0dQKheFBhabrGkzt0cRYIGRZkjGmIKgHReGCRcBGxdklOkH1fp6vfoxeRfsbtK0ZgQQK9nWSpaJbpjGnaE52fKXTrJ6lFqZYJcxZZbZcdyZKKkkRgWZc8lGlkjUnaCjgHpiMZriJlZpaji0d5eaAlZRelY5e51fFRvfueYjE1ZXvpq0f0jiR-baD-bYJT3ZSu2NfYBKnNBinldXriM1ZVavi0c1Y-D8AEBSgIAjFUjIbZfND1Ypb_LlDDf_obMMZbNuZSAER9fHuFYjBdZEVIOhDJf1cjYMabKMbHrSKTf5eRYzaRIcZRK9UYvJXHJLqCp-SFArvnO8db1dhyhlHmR9nbciFcHNE0A-YapxlcvmXwYba8O9DaBoDIfvmgI7YjDHf6Kem9tcAjAneQgIEXY-DiTsfqpEgSoynnddq8LHc6KIfaDwDgCgD1e4SEwpEcC8qWDXanegW-Xhh7ZwAStvYuXvaFCWDHcfb8nXb_aPdPYhrnkHfQBzgxnMFkk_cWrgmGvQZSA8CYdDjvRc0IGCFg_n0fBGBsB-yQ5Q7A7vVsC1Cg4yjHaum7aiEPa8o5DnsQTQHcAREukYHYFUhwGMiTBDhI7gBPwzNkko-4TplI6g9o6FDA8eC4kjfmXzUyBREI0MQWSFENBU_mWeCw2_3KZhnU2U76F3amDk_8CmHwcAKPaNyg5_aOGlcUhfSDaWGnsc5wAAHYORD9HkrOMp2g8PWFZWUab3ROBBthxOBAioFoMOBWvKzNIOgurPJPv7O4MYNlKP5kPBxwIuMg9gjgYuMYeczApPMB5gMBCNmQ8PRwKZKNOB4ljhyOVOIvlP6LIHB2bBOl6vR3zPDQzQVPZIOOXWX3k5AvguF3lMMvUAQulhTpJQJPouoO6BxvOupvQuwXT1TwrPrxlr5uNGo536wCBEx23MpE83haU8x31u8asD9vdGx2IHnQTLvVl2s4EqLOgvzmr5Ru5ngJ5OPCo4Wu8AIvNm4AyOguAf-ODao5Vuj2zudh39LnQs00rG94Is1B7nq6FD7RHolhgA8gYB7AumX0dgZ9-J8mJVg87AfZstRbkmJGjD452mpwZ9EsHYUtm1dCEfpoZGhAjhEmbHR9XZTxAxIOlqcej2lq8bXn-fVkPtYArPRfam9qVHzA2fqBhS7gB6gDCG2S_2YnUBgOvKoftglg_A4BrwUgGgog0glhUAX73zgazPB3ko0RJQT9Th4g2SMpsfceEh8fgv6X9I8m3fZINesiroeqXb7fIflqdRcN-hygMoJeOwpfhevLZefediqt_ejChaC3Tvlr2aKKXa9flqCa2kjeTezfXA0hpiwOKL37Q-2lRq_f9BNfpjk4G_1mCA2Sx7FHposCrejwRFi_W_e4c-8ao-MgY_4Bi_aa-yGlsCKRNeGv9fDf_Ay_zenqiCX6RE5XfzFXzAoxUFGA2TaeuBMuwCaoHfQgneXeoAdyxB28FnNopAj-hA6eMgZ2oiIElfUA9sNcAX4ig_u8XuFPN-lmDsEeqcbQfEAKyQeB1AijHALYDFAABHUINggIrJwLkX-dXDjnOyVlYBkoeAXACQEoCugUFeQNnUHqF88aUA4VlnFL6m81-UAlXMnD77RRk8Y9SencwQEwBkBqA_IgXlu750zKUwL_iHDbTAAv-HPORq43nzuNa80zNgijxbxo9IIy7QKlyTHZJVUAR9ZkMEwZDg036kbV5GZC-xcBOEbcKAMO19ogDYWDZF6qHToDh08AHIeQNtk2iOM0SQgqMn4zYLSDEq3wbPOEwf6KCeUd6eZuEhg7xFsaA1PdOxCzhMImwbCDhFnmcStJ1AeQGIGAESCOAySC6FITDwHLF4C6hnAIdr18GyCkmwQ-QneiSY9or4adFSDYDGYzQy48eMfhtVGAqQkmrSHzrQFPZIZRgrTfIQIMKGeCkmZQjtIPFWa5NjwldBykoLvTZNphmYXKsdl3jTQVIH2L7OEFexlx3YLGR_GmVYzy578-wyGr8XY5DD_MRQw0FMPb7jCPGxTbZjsEqGGBAkAAVQuTHJ4k1XU3BAHmTICMgyQZ5LMDJDIg2aKKJICikaBnhYopmDFE1xEhbMamuwPgFfHuQxIggcyDAJlHNDsJzQv3JLDQC-72YpoWGYZDiLxEEijOKIK4MhmdBucJmIwwLEiPKb3DJALTWYC8JrqOEORt8eIryOPymhtg_8X1N0N9SNNBR4oYUSMFFF_VCavqa8EKMlHowRRacOqpWyZEYleRbIo5sM1GZ9MuRXKESLqJOb6isO8RS0hsM-wEICOUceoXKEaF9NuhTGPABQloHK1d0MUYNF8VOHfII8KkHBIG3UjBj2ObnIHDfl9H8Crhngk0d0zOZEIcScPFiF_09A2NDR5AOCHEisBGEpGe8SQUcHjybo7A-YiiMZUEGBYJBNjQRimPj6C9peIvZaoaPyzUi6aq5DyhoOUbgtaxifGXhtxH47BIq_Y7YMA3X50Dy-aQAelozphDiRxujacRH3O57cFxOwEcbgQja79SxnrMPiJFNB1ik-3XaYMb3oEV9GQqCBaN53w6vYYE-CIkcZxC768Luy44cZv2r5ut_y9pePFcF3E9jzOMCF3NsA4TfiheVnBpN7x04YB8ElAgcUuKgnPj--PmG7tGMCzdjgJDYvGhXiCjbATxBsagNFgeZgQ7EFgfgCwP4BXB-APwYsNUAyDmgfwZIRkCAF0hESQAuGfINQFInsB-AHHLiT5HWD8BygMScKnvHYn8AUoFUQiLAGhBYBvQdE46GSEoCJBcweQQjETySzlA_gpYHidWH4BRA0AwklQJFgNiaSmJhXTdPCCKZwB2JhEmsHxLEh6SAAejFBwAAAmHAKpCMnWTBAmoPSS3RwAAAOHAOZHclMTGeyWDMM2j0nGQcASYZyUFI4kgAKe3ibyQAFYXOMUhiSuHIlvsogfbCyUgDil2SXJHHYyLFP4AqSrQ3k8yH5ICn8B1gW0eQEynUm4BdAkAFIDhLHKyF8JIASOMDDYT9VaApE8iaaFoDmgVJII_gPVPkCTSgAA",mdxType:"Playground"},Object(r.b)(j,{align:"top",mdxType:"Flex"},Object(r.b)(d.a,{grow:!0,shrink:!0,mdxType:"Box"},"I take up all the space and push other Boxes away! \ud83d\udc49"),Object(r.b)(d.a,{mdxType:"Box"},"\ud83d\udc40 I'm smol."))),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(o.d,{of:j,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Flex/README.mdx"}}),p.isMDXComponent=!0},"./src/mixins/index.js":function(e,i,t){"use strict";var n=t("./src/utils/colors.js");function r(e){return"1px solid ".concat(Object(n.a)(e.shade,e.lineStrength))}var o=r;r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var s={display:"flex",alignItems:"center",justifyContent:"center"},a=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var l={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},c=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b={position:"absolute",top:0,right:0,bottom:0,left:0},d=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var f="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",j=f;f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var u={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},m=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var p={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},A=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),t.d(i,"a",function(){return o}),t.d(i,"b",function(){return c}),t.d(i,"c",function(){return d}),t.d(i,"d",function(){return m}),t.d(i,"e",function(){return A}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,i,t){"use strict";t.d(i,"a",function(){return r});var n=t("./src/utils/units.js"),r={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function o(e){var i=e.flexAlign,t=e.basis,o=e.grow,s=e.shrink;return{flex:"none",minWidth:0,flexBasis:t?Object(n.b)(t):void 0,flexGrow:o?1:void 0,flexShrink:s?1:void 0,alignSelf:r[i]||i}}"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),i.b=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,i,t){"use strict";var n=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=t("./src/ThemeSection/index.js");function o(e){if(!e||!e.globals)throw new r.a}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var s=t("./src/mixins/index.js"),a={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function l(e){var i=e.border,t=e.theme;return o(t),a[i]?Object(n.a)({},a[i],Object(s.a)(t)):null}var c=l;l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=t("./src/styleProps/flexProps.js"),d=t("./src/utils/spacing.js");function f(e){var i=e.p,t=e.px,n=e.py,r=e.pt,s=e.pr,a=e.pb,l=e.pl,c=e.theme;return o(c),{padding:i?Object(d.a)(i,c):void 0,paddingTop:n?Object(d.a)(n,c):r?Object(d.a)(r,c):void 0,paddingRight:t?Object(d.a)(t,c):s?Object(d.a)(s,c):void 0,paddingBottom:n?Object(d.a)(n,c):a?Object(d.a)(a,c):void 0,paddingLeft:t?Object(d.a)(t,c):l?Object(d.a)(l,c):void 0}}var j=f;function u(e){var i=e.pos,t=e.position,n=e.top,r=e.left,s=e.bottom,a=e.right,l=e.z,c=e.theme;return o(c),{position:i||t||void 0,top:n?Object(d.a)(n,c):void 0,left:r?Object(d.a)(r,c):void 0,bottom:s?Object(d.a)(s,c):void 0,right:a?Object(d.a)(a,c):void 0,zIndex:c.globals.z&&c.globals.z[l]||l||void 0}}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var m=u;function p(e){var i=e.m,t=e.mx,n=e.my,r=e.mt,s=e.mr,a=e.mb,l=e.ml,c=e.theme;return o(c),{margin:i?Object(d.a)(i,c):void 0,marginTop:n?Object(d.a)(n,c):r?Object(d.a)(r,c):void 0,marginRight:t?Object(d.a)(t,c):s?Object(d.a)(s,c):void 0,marginBottom:n?Object(d.a)(n,c):a?Object(d.a)(a,c):void 0,marginLeft:t?Object(d.a)(t,c):l?Object(d.a)(l,c):void 0}}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var A=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var g=t("./src/utils/colors.js");function O(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?O(t,!0).forEach(function(i){Object(n.a)(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var y={all:"uppercase",first:"capitalize"},B={ellipsis:x({display:"block"},s.b),wrap:x({display:"block"},s.d)};function h(e){var i,t=e.bold,n=e.caps,r=e.dimmed,s=e.fontSize,a=e.lineHeight,l=e.overflow,c=e.textAlign,b=e.theme;return o(b),c&&(i={display:"block",width:"100%",textAlign:c}),x({},i,{fontSize:s?b.globals.typeScale[s]:void 0,fontWeight:t?"bold":void 0,lineHeight:a,textTransform:n?y[n]:void 0,color:r?Object(g.a)(b.text,b.textDimStrength):void 0},l?B[l]:void 0)}var E=h;h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),t.d(i,"a",function(){return c}),t.d(i,"b",function(){return b.b}),t.d(i,"d",function(){return j}),t.d(i,"e",function(){return m}),t.d(i,"c",function(){return A}),t.d(i,"f",function(){return E}),"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof b.b&&b.b&&b.b===Object(b.b)&&Object.isExtensible(b.b)&&Object.defineProperty(b.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,i,t){"use strict";t.d(i,"a",function(){return o});var n=t("./src/utils/units.js"),r=["auto"];function o(e,i){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(n.b)(e):r.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+i.globals.spacing[e.substring(1)]:i.globals.spacing[e]}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-flex-readme.d5a794b6f13c2090d2a8.js.map