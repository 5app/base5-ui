(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/Duration/README.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/react/index.js"),A=a.n(o),r=a("./node_modules/@mdx-js/react/dist/index.es.js"),i=a("./node_modules/docz/dist/index.esm.js");function u(e,n){var a=e%n;return a<10?String(a).padStart(2,"0"):a}function c(e){var n=Math.floor(e/3600),a=Math.floor(e/60);return{hours:n,minutes:a=n?u(a,60):a,seconds:u(Math.round(e),60)}}var l=c;function s(e){var n=e.value,a=e.getLabel,o=e.as,r=Object(t.a)(e,["value","getLabel","as"]),i=l(n),u=i.hours,c=i.minutes,s=i.seconds,b=u?[u,c,s]:[c,s];return A.a.createElement(o,Object.assign({},r,{"aria-label":a(Number(c),Number(u))}),b.join(":"))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDuration",filename:"src/Duration/getDuration.js"}}),s.defaultProps={as:"span",getLabel:function(e,n){var a=function(e){return 1===e?"":"s"},t="".concat(e," minute").concat(a(e));return n?"".concat(n," hour").concat(a(e),", ").concat(t):t},value:0},"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDuration",filename:"src/Duration/index.js"}});var b=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Duration",filename:"src/Duration/index.js"}}),a.d(n,"default",(function(){return j}));var d={},g="wrapper";function j(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(r.b)(g,Object.assign({},d,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"duration"},"Duration"),Object(r.b)("p",null,"A simple component that renders a duration (e.g. of a video) in the format ",Object(r.b)("inlineCode",{parentName:"p"},"m:s")," or ",Object(r.b)("inlineCode",{parentName:"p"},"h:m:s")," with an accessible label. Takes a ",Object(r.b)("inlineCode",{parentName:"p"},"value")," prop in seconds."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(i.c,{__position:0,__code:'<Duration value={null} />\n<br />\n<Duration value={2.7245} />\n<br />\n<Duration value={27} />\n<br />\n<Duration value="489" />\n<br />\n<Duration value={1104} />\n<br />\n<Duration value={7329} />',__scope:{props:this?this.props:a,Playground:i.c,Props:i.d,Duration:b},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYtT6aIBnMI1ZXaD04AEchJBIzJu1QAiIPYQNJSwqjTUVMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnJSABYNPYAA2DStPWMBgIAMW9aBEiU_hnEOBEHUwGChH4JYiGoSg4F0hFLOrayaGcCBcMudgAEZDO0-Q-IEqYAEE5kk9gIyg8gbCgdAw3YeQOUksQMujGR2BRcSYG4YA8NEqq4HkLca2AbLoDy4IADJOvGRJ5koZo2ty_LuFGuUwGQyVyPadgAH4NnasMIyKq4ho61AEurKQZCrN8zBhdVjhgMAwigKZluK0qttS5dqwTDiCBwGzMhSK8CGamta0YsjmVYeIGRq1BQgSTDNxXBMPCOMG7prRhvuY9g_qgAHgAAJhwAB2VHDIAVlBj7Ych9hoc-hN4fIxH_uqtGMfx8HayJknSbh0iEaRgH-EMgAOABOfhiYJiGocFr7WYp9nqei6LlMMumYaFgX6ZZpjxapmqMaTVGeblz6pAep6Xre5qpBu3azC_EBaPo8nqEkVRsH_LQKGA_QGEIw6Hq4k1NVYojPMoGZLD6-AvfafsA_NMT5jgX3DtPG2KLdainlHBO_TMCb-IR-PjtOggABlXECKAIyINBwngJZhj6OAipk_0CCSkJO1g0ioGcdKqGQqZuBKiMu8zUapOiua5RmpSY4_PjeEb6hBNNdAi9gPU0DsKTigAEmAMugdoRr2B3iut701vMnb0vy73jl5GKFUG4gZoI2rgRa-ksFRFRUc-nMTfgGf_fn7HxbsjM-zgL673gNfJYW8F5LxgCvVAjVb7v0wvOOAlIv4CHMLAjwy9V5302hnSaCME4RnDncOu78m7AAlksU8hdi5LH8FcNc1B9BLBwJwkQmwBBoQDvvKS5C4B3xntQ_-PlL6Vwqlsag6ABEjm1GLagEYJZT39A3Ju6AlHmCkv_UeABtcRB9JFwCWOg3QciAC67Arj6MPnvMxMiMBwEsSIhuXQCDfyujPGejBWEZlEA3HxBBgCcJwNwjIfC7iEI_jPVw_RXDmjgsXGq9Ci7zgjAAOVCEQQIAhwEV1rksbJuTIz_w5Nfd-M8qzBJnrVbR_5KBoEfIgV8MTfGSH8foGpBA1GENQAnHAmATrAwIFEteb8G7MLlAFdwwUZ5pOLlcHOIyzoMPnNpGeEsrjKXim4wZ5Cg7R3SvXGexgjAOD8DOboExujzhgG9CcdApy5g8MkW5hZ0wuh5O_aZUSjnwHCc6HUYAAURn0f84OcAcAomnCkVCA4AXQvuW9AFliOSbIIOchweQIhl3QfiRE5AERwHyLg7oySNmcBwH-Q0Qp2BQFOPEWwP1zA_Ibos-cVxIXRxwJncgmLsUJ04OYcxsi7Dsq2VTbliKoVApgCCsFELZW8qBqUgQCKA5IphaiAo6K9l8QOvaYA8dtHyDcUaqYwy87sATnfC2VsGLaJToolW1BHaAV0CBAwYF-XZ1HAALQyJQaCelshihRCoqmSwPAUkoRoueUwuhRDQAUdKEt2AAFJ2CxvQSImIj9k2uFTTOWsMVlLxuCR4rxok4URiLSWlIHIcC6XQKJeJBAIyoyWCpV8-bUFQAJdWrBTyU2oAKAQvifqKamrdagCMWi50NFQM4JxcjK2z0QVMPRUk9TRDwHyxlQoF3aOXauixdhJAZVMqpC5N6Kn5tgM2Ex6U90TEPcIfJi7WVnrXZesyFb832JDrow4dh5qniDUIUNnZw3wE7cB0xAGVrGIgcIqhibpEXvSpB4NMHMDoAjZ2t9B6kIYBPUuldf6MXIbcTPYd5hTkf3EVU4gJjMUzzFc4zF5qzD9MtUdVZUxZ2svtUoEAgVtiuDSI7agnqXagRAPXCw_BUDekZEgdg_AfjFmqBkc0P4yQae0ipkArAMj5GoPwK4_BlI4Ds8pby6x-DlHIP0GYzFrNaZAMlCqhFYDQiwN6IzR0ySUESLmPIaaeIWh038UsTnqz8DHV5_g9sNBwES6ZzA8xwz8QgPALzymawueEqlkAAA9aKOAkw4FRllkrghNTleiqZHAPN7MNdM-QyOUKWs40xnVrr3mYuWkiC1trHXHMgHWJteQDr4u4F0JAFIsnUDyb0IpmSIBaA-iyNZ7TppaDmlG7MGY_B5vyCu0AA",mdxType:"Playground"},Object(r.b)(b,{value:null,mdxType:"Duration"}),Object(r.b)("br",null),Object(r.b)(b,{value:2.7245,mdxType:"Duration"}),Object(r.b)("br",null),Object(r.b)(b,{value:27,mdxType:"Duration"}),Object(r.b)("br",null),Object(r.b)(b,{value:"489",mdxType:"Duration"}),Object(r.b)("br",null),Object(r.b)(b,{value:1104,mdxType:"Duration"}),Object(r.b)("br",null),Object(r.b)(b,{value:7329,mdxType:"Duration"})),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(i.d,{of:b,mdxType:"Props"}))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Duration/README.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=src-duration-readme.ee16fe92cefaad05c97a.js.map