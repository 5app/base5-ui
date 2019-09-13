(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/CenterContent/README.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/react/dist/index.es.js"),s=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=n("./src/utils/units.js"),p=n("./src/styleProps/index.js");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var u=l.d.div.withConfig({displayName:"CenterContent__Wrapper",componentId:"sc-13673lz-0"})(["display:flex;flex:1;"," "," "," box-sizing:border-box;"],(function(e){return e.height&&Object(l.c)(["min-height:",";"],Object(b.c)(e.height))}),(function(e){var t=e.spacing,n=e.p,o=Object(i.a)(e,["spacing","p"]);return Object(p.e)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({p:t||n},o))}),(function(e){return e.fillParent&&Object(l.c)(["position:absolute;top:0;left:0;width:100%;min-height:100%;"])})),m=l.d.div.withConfig({displayName:"CenterContent__Content",componentId:"sc-13673lz-1"})(["width:",";max-width:100%;flex-shrink:0;margin:auto;"],(function(e){return e.width?Object(b.c)(e.width):"auto"}));function f(e){var t=e.contentWidth,n=e.fillParent,o=e.height,a=e.spacing,s=e.children,c=Object(i.a)(e,["contentWidth","fillParent","height","spacing","children"]);return r.a.createElement(u,Object.assign({fillParent:n,height:o,spacing:a},c),r.a.createElement(m,{width:t},s))}f.defaultProps={spacing:"m"};var j=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CenterContent",filename:"src/CenterContent/index.js"}});var A=n("./src/icons/AssetPodcast.js");n.d(t,"default",(function(){return y}));var g={},O="wrapper";function y(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(O,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"centercontent"},"CenterContent"),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"CenterContent")," component to center arbitrarily sized content horizontally and vertically inside of its container."),Object(a.b)("h2",{id:"usage-notes"},"Usage notes"),Object(a.b)("p",null,"The component renders two wrapper ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"s and is meant to be used for large components with an unpredictable height (e.g. modal popups or headlines in a banner). Don't use it for centering an icon within a circle or text within a button."),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"height")," prop to define a minimum height for the component. If the content is taller than the height specified, the component will grow accordingly."),Object(a.b)("p",null,"Instead of defining a height, you can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"fillParent")," prop which will make the component grow to match the width and height of its container. When using this, make sure the container has a position other than ",Object(a.b)("inlineCode",{parentName:"p"},"static")," (",Object(a.b)("inlineCode",{parentName:"p"},"relative"),", ",Object(a.b)("inlineCode",{parentName:"p"},"absolute"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"fixed")," all work), and is not set to ",Object(a.b)("inlineCode",{parentName:"p"},"overflow: hidden")," as that could lead to longer content being cut off."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(s.c,{__position:0,__code:"<CenterContent height={350}>\n  <PodcastIcon vAlign /> Hello\n</CenterContent>\n<div\n  style={{\n    position: 'relative',\n    width: 200,\n    height: 200,\n    backgroundColor: 'aliceblue',\n    border: '1px solid grey',\n    overflow: 'auto',\n  }}\n>\n  <CenterContent fillParent spacing=\"s\">\n    I'm centred in my little square container, but if I get\n    <br />\n    too looooo\n    <br />\n    ooooooooooooo\n    <br />\n    ooooooooooooo\n    <br />\n    oooooooooong,\n    <br />I just make it grow.\n  </CenterContent>\n</div>",__scope:{props:this?this.props:n,Playground:s.c,Props:s.d,CenterContent:j,PodcastIcon:A.default},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ7H0DJHD0TMjVldoPTgARyEkEi9AEciQJfFVUEI9UYKcOIUQaXQsOo2j6MkWJqDgSQAEE4DgUdoN4_x2NtbjA0lISTU1dowVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGcHIAFjc9gADY3I89YwGAgAxb1oESBz-GcQ4EQdTAYKEfgliIahKDgbyEXC6tIpoZwIFwy52AARn8zz5B0vSpikuZzPYCMoPIGwoHQMN2HkDlzLEVroxkdgUVMmBuGAPDjPGuB5C3GtgA66BuuCAAyNbxkSeZKGaZaup67gjrlMBkMlAZUHadgAH4NhWsMI36q59tW1A6urKQZCrN8zBhbjMDAMIoCmR6BqGj6muXasEzUggcCizIUivAgFprVdSJY4CXU2CAUkISakwAVkc-aVzRxgFPQPiCAE5lWCkqBcfMTd2AACXnKBKDJ2tGIx1j9FRmsY1YbmLDG2BJqs6G0ZrQV8m7ezNLgmJWBgQqZZlnF0AmK4ACZHMczyNbRnG8YIPWDaN42LA8CVtkQtoMEcTmyzleJYhgDwoAZdXrfYLwBCnBzKqCuBKEZnJEJgRJfetyhVYEMBOZGBywgiWOZfkd6NcF8mmNoTGKKlaAoGg1wwymPKJQKPgQDgcRRZrBp2llBEaC6HI0HYIhkkZm5YFGgBHUJy-6XQCFcNAMiWDxwk4ZoGhHURpY1xgPCOTdG4sCJh054RhC32t1_YTeV5l_eL8vrmz_J4_T79vYr6vw-1433Pz6f4QZyt63X5PsRF7qDyM2Vw2xujjgdiMHAjcpD5zIljGg79PqxhXFIWG8NEbIwWlISG30zBfjrqJOBhc2JiXDBoLQFAEEGDAlxe0sMNLyjNARCC6VKAzEsNteAjD-zsPNCZeYcAWFEVGiZWAixLJnDmow8W2RzSfHXDQIRHEVL2mAG5SwlAxREEwlRd0HpwjQEkshF4yidJ0Mgt5TsBQ0LsOkXomitExEwFsXcP0ZgGrsAAOqZDmBkFqsj0A4BkMUMEBAWB5TgvFQ0sAsAqIIEnbAVxKoqP9AQAAJOogaYTeC3HwDAXGhB2AbRyQQKRoS0m5NyUQNA5pTaECuJkjRWiYBEAjDMfJhSCAcnkPE3JxR3phMyW1Ku5ACikiWDgKZIhNgCFcXNfq3AqxVNuD5Gx6E2qlNyTMK4oyCjsAAD4HL7J5FZuSpk4BmRkeZpzRAED6oMtJTTsmVLyZABIZcK7FLWqU8pWzbi5ReBdK4rgPBh29rQPpdyIg7PYI5KFuTYBgHNnChFBAtY6yqgbAApGimpqA6kFLNsknFUKBk5LSdUc0-RcIFCuAHKc5pqgcWKKkzx_NMwWUCcEtgFTckYrwI0rJSzWodIFTdPsWBNHaPaTgAVT03bhEoK-XpYSohYHNAKkljlcU6VycYdgAA5IImAciRSOA0M8lVKpDkLDQSe5g4K2XAbQIg9xri3HuI8FEdt44ZCTqMD4kRJCuEkP5XW_kACc_kkxJkjewHkYTEkargHgac2wrjwr1QQA11hbAGW4RMMeGN9lRGeOQK4ia0k2TsiCpVLLUmnV0grBwfNqHtPQv1KWuTPHdruePfQXiuATFubk95pdR40FHUWrp069nf1-Z1V606LlXLmehMJmELK8LuKk3JXQCB9HMFGV5jAfGzFhP88dnz9CTWvZO-5_z6kEEms-wZdzcnzpSJNL976VnAFXUW9ddi_0o3-YwDlUwBWTQHTQId2s8DzSWkusM8hYHUOWXcqQ56_ECEwx-MwjziGQeCTAQGoRgbzJan2r9DlrS1VScR6hOAd2cMEdRsJsGCDwcxa4tj8AcCoFCEQQIAhbn3orlcPjXC4A4C8OHW5z6pMDn47JoTInp5hNo2wjhMmcAomnCkBjOk_r2gBkDYibai4cQIXRBi4lUCSRknJAglNqb_koUBIuDALHsFhksYA5qRjl3QGKMAui3RMMVKk3zzhWCzgcR6a8FI4spHcbpCSjVZLyUUvxQSFkgshbCxGDtdilhdDAIswafbe00pgEsKgLtJnTKA_MrdfZ0J7tRKOI94MVmMFS_8gDLXZltf-RVyaFXQO5NYBAGAIxrzeFrs5ZylUAAcVU1v8H-dB4AdXpszrNj-sqMADvjpg-HIUZ2S4igoxNfgMBVaoCcOgbbrye2MxmLdiWD2nsvbeyszD_XvIFh4PwPUAB2RQlVCZQEqjgaqSZFCOSgI5HAEPKrBUUOaQmOBHKVXIOaNH_k1tY6J3j4K8bydrcJpG7HxPSfsGp7T-nOBI2RvIIbcnhNCa6zhTgfyJPsc2sqsLznOAee62R1VZHAuScy4J4bNHxN_JM7R0mCHSO0eRt1ja5ndPteRtR-jzHihcf47hwjmNyPUfQ6gOaGqKOueVQAFpEHNPDyqUPyeRscsFQn8PKd049xTpnuscBraR-acP0bgph4j1H830bOfY6TDgJM1r2Dh-Cmt4Pceyf-7Txn0XzksfZ9zyFRQ_vDbh-qhtkPlUM-KH8njpMqvo8J7N3j6N9u0e6zW2t4XePHIc_h_30XPvHKEyzwj9b2Pw9xo27XufDu8c05Tx3iHceO8Rux9PnHe_Cfh639Lg_4eI1M8JmblPge1sQ_55HqHaf1sz-tYPlvjkae95wP3wf8ODaRpu7K5rY1Qd6OQxqE5o6k5X7k6a7t7w7-TVRD5ra6xU4IFIHmhp5T6K7z4_6f5VTo467Y6q6gH-TkDn6f7S41Tw4Q467sA1RkGGxj66x87c5RqKAL5e5M7oE1RYGEyVTf4Z5R7_7J7E6ExR7K66xx5o4Q66ze5j42oyFyFD6RqEwQ4b6B6Ezb7w5t6gFJhM5R5JgB44DBRaGn5I46GC4GGKBGFK7o7-T3594Q7UEC4Z786yFQ7w6qEQ6CGN7Q7d7-Qu78D_ylJSCpb4YcR9SpLOY5ZUxKS0yoA8qRLwSGrejdAWTtAxGua5Y0y6DpZZFubxG6CkbkaUboQcZpJ1bJKD6caXauztC9ACAVyNZCiFSqr-jOhYAiLmYUZZYuaFF5bUA2ZKCEIMSGJQDGKcQECyYATaBcYMCeJCAiBRTASlTlQtSY6NpnQtpdBECaLQRYARi7Fdq1GOZTC7F2AWS7H6ZvAGYFARiGwTitI4CwAzgFjmguQEZpIHq9YADUFxCaE4z4KxJUJ2kROkTa50zIzSYoysbAMA7SJI_sFIIJBAax9WuQUxqRR4Jx3xPWAg5gQUt0QUkgyJckqJ6J7AvxmJLw2J3QVwyEAMU86A4JHRniMJrSLUQUIqHJcJqsiJ5WwJqxJ2Sw8o1oXxHimWkqmiZ4soFkApZJ6RQJyxwp5UVW0pLSfJCJbkM8FIoprSr4qSxgpg5gRgVgR6dgrgfYGQbcE8aQoihmSwf4KQ9Q7Qah2KHknANAw4Vp0oZoF0rUyuEOb4CaRQZpAAAt5JkLKHtqiAUJhLCLaa4PaR8dBDafoMmd0KwPEAyNCBgPsvmHiO0B6WGWGewOGT8QSXYMAOpqJphGmfRBmfaf4K6P6cyA8VMpVCGVWmYJCS2omU2TAJogjG2agO0umfamkLibkhAM0BGAAIQDmTndBHJbQ7TNBLl2ndDznHTtB3EzivhPGHoEnsBCYJBdaVnmCGrCaibjmNnLn6aMwIgPFLAe4cj9SkmVQGysm_RdHcTABLEEAUkilPF7GUAHGkhSotJECQUykwXWn3lbnDmZBQlvTDHKB2aSCyLzJkJqAeaATzG0KsIMrXLlGJaSAkXAZuIcS-YRJkjwRUbkV0VRLzLCLcTJqMWRYegcXoRsX2hWK-QpCcXYQegCXrJ2J8VTByxArUDCXCSSDSUKysU0WsI1poByXuiSBqWoDKWqJTC0BYCuZkVcWSAGVGUSWpKmaQRhKUU3JhLMUMXoTiaxJ2VpJiUziuXbKApKVOVqrlx2SeU3DYDmV3DGaoC2aiQOaSTJZySpb4VzHUI-asLSbsYOI7r8IyaSWiLjQSJLSyQRbYSBLyKOjUD6BmIdG-bqJQXaKwWUCykFXCQGIxATGSAmLTHpaeIOaUkWTrZspSmpYBLOJBJwDxY4DRCohwCbLfHhwVTtD9jwAZkKxtEch8rhK2D0XRJoCMzOhMqcw7DxIJwxBxD27uwpCKw1KdiwBdbJqZpwohD1phIGoACq-QM40Ibq3coChamwnAgkcAx1iInMb1hZ-I3Q9ITRjsglhowEo0J2CavIaSWqVUrS8SSmyNRAXWzySypSHSX6AAMmRlMCUq8n8u9sQP5bUkiiik0vpvlAUATciu0SsuSk8sKkDnkl-iKF0t8r8rJKtSstpeaP0MSuwDTZzV0kzXcizUmsBNSidkKjMC8isrjQDewDuRZM5MSVBbKRGF1XDWaSrfEDAAqhyW0nrWqUzazYrdja8h0vTIzGdTzSTXzf8s9XJLaqdbSHpHmLiKNH0EhPmW9V4OgMkGZfDf8opcCk8VqWijClcOTpVLrCjaUizayjpHFT0WUXYhUZ-gDckmFWYHFaxjJjndMXnTpqpoJjeZpmkvbUzMpuwpXfJlALcvjYTQ3bpoIpcs6DqGAPxhGAANopUCb7lGYV16aQkAC6HIrddNM4XNItw9smpVvd_dQ9Kmemo9qEG9XdU9M9hGllf5ZmZGFm7AqW6FoxWFziOFtl6E8VVC3mRFIiyGWw2w1grSp2jCUyrVzVkkRaR46WlVlFAAajmZ_Ylh6DUlgGgOVZKWcf7EKFOAANLRyXGWRhJx1yiUWaIzCFSIrt1YOIMZAM0vi3JeA3CRAOSUWLYUP0ZhLC0NKEOBwZAL2EBtFbHNoBm312KlZ3DTllJSnACUVLD_2f3bqdbZodSv3v1HgRiiMSlpKzmtTzmUUoOJBwAD2UXT3oOvKXmnkUZQDxKPL7r4nmB9q5KaNEMCBqMaNaOT30pWOgPewInyO3LtGPJWXHAn29EIPMNUVwAX2YXYXoQ7jJGJDzL31eZsQLFSn0hzDqjZBajrVRJOMMhoMD3tBeynDbCentBbVTy5P5M7VZM7DtCT0cOoXHDJOOU8M7pwD8O9oOWJDtZ1NdZKMLlNP9R6NnmGPZrtNxNESJPVOJCpMCZoDkDezlARidP8MmPHlmP_JNPTqS2YTzju3mMCOOYzVyrlxjn_LFA6ioBJBYN7U5OilFNqxLCVBygXO7XZNXSjx-3xM5hmpCj_JFpyhNNXTiz7I7r1CwTiju15DdCZMUiEzmihAQCSBRSxJXRCg9DALGj2DODOBXrwvZRdCFi_g-A_Mzg4D83dJGOEYmZH1TCZ1kvDPzKBOiTBN2KSA8V2KROEXgTP2m0NX6I_1GKtVTGwOdEiKeKe16izCl2YPtDJrUoTzCh4MEBU0OTis-pSu3K2kZAOTKsCDSvkMRBEByuxLmh0DoDSsMMopiu6v6vsMQnbEBkMt3C8P1M6M9qCPJoMxMy6n5BwBLCQJLCprpotMSMdFzO9YbMGpiguYxLYC2o9l3I3VyjPbOjSv6pmloSPYuh-qJzJz7JcYaQwiVD7LJqcCup2CRvVJoA8aCpwrTrJoxW2D0r-D5pa3SqtIRi2xusKqMlkbMkVuxIADiQgKcqQvbEqNqDJ4YkAzoiwpSyazgaaaAGao007qAuwt0Q7mJTJY706ntzg84YAIKDtqAQrMwA9Tru7k9hyxyR7Lrm6P5fL_03jwMYbWAVL-CIxQT19IT7lQld9sxD90TT9_5p4zgc9KQ7LjinLLVX6WVL9OwMj4DXFTVXLoj6WfZAZ778ytrDTgjMwkFpIiQpIBApIYmfYHgpILdoNR4vrdiXWUjUHmwsj8jF5pj9rdy77Vwitt0_7gH7SIjNHxt7Aw7q72Q0677ODLHiQ_ybHo4AH1cM47SOHpHxt_yLHy8ZyBA4naJHHMweHcnP0H6KKbbo7AnONay89XSLHWAYnS8knYy0nOpWnCnHW5n7HUnKQHaXHH92nKyfH7ba7hn1iM4NDWrInDnEn6nsn8jdnMwHgQXanTn7SRHtnZNnn-n47ttRnKQJDpnUXln9xNnYXCXfYUAmX6nJHuXyniXHbl7xLHRnj5LfYqXj74Vz7NLr7dLkdsln7nmzLlVjnVnQHX9cHYHgHEHVHb93HwH394xf93HiHlr0J3lF0qHdT6H8D6iuUpIc31AIj7CSwVNM8IgWr5Ws67AuErnZHXJfrnGmw1HH9cj3HCjAbJ5GzrXiscsp7fY635gq5en5X_r0K7CVwMKEq3X9xMKJ3PHZX3nrysr7AVNgPwXMXO3WnvHK7XnBnrymrlDCDtDsP0XPXTbe3kQoPrbI733KyRrVwRr2PWX0nRrhPSPX3EPpSuEDQ5CVwN3H9J4nMtsExOAuE3ycnHPlAXPsmuEA9uE2jq5vPn3xPDP9yV71Xt7Ul739XEVDEtLdwWlFNOl7XBFiVv7aiQPM4Y3_Xkk4HKlz9w30HRvoHk3H903nDzI2lC3najHva8FRASJPcWUmnRABHImWUxXo3Z3FHkjl3I313dH2aejGz2lVwsoqnVPzn8F8jdP0vqPAtmvwn3conZN8fHHnv8XpX3cSnOnufMXRAmnJXOn4Pafdy2lrDKK7vhXZfSJlfHn3cAgTfuPPvhPdn9PNf1Smv_nGPPcnf9x-frfdysfkXOfFnefcXE_uS1fyX6ftkaA6X3cZnM_BvifLft3dnJAo_0nJAPfeXffy_svlXv53RCvn1q_WvwfDXGFTX40OFZlETX7UT-gSVz98QMwfgVvE3AEC7HKqVULegfCBtb1MpTcze_5DmBADuC2AlgqbANCMBwwhBsQviK3lAxgYdUpSZlSwJkEczmoiA-7UuvECgAORQguGPiJcyTQQABAKIVVrMBeDuxyo5rNklKWQHJwZoWIUgRZD7RwCEB7rMJCMF8QF1UASHZkG_w2SLcXegjUpF4C6jTo4goVUpCwCIBHhz-Y6VUvVlKTbUYA7MWdKUi4GjBp0ZlZ1mdVOSvJRGbjIPruhD7SNuObPHEvR3maMdck5g3dhWx0FXBioaJOGrdFEYC8heOAARDAGcAA1D2Ogk9kv28FwYiUjDRQTkFuiZNw4BrJHkkPMjHRAYExboCkOewCAogUAK6LEL0FTxDBZsMwcFQIHuA4AxA56LMHrgz98BhAuoUKBIGzAB6KguAJPTs7dCshBWeIHJHM7tBY2asXvqny0ECMXYVwdQZoPM6_8_Azgv8GZVB6hDgqSTIgMZDDApAJg7nSflUw0G5gjogw3IeZyCFmUJh_HKYRcgjAmCxgt0e4TwPgD7sB69wmIcjyS7700k7jEltf1KL6VgqyvRrmMV_pQD2eH_TrqwmADQdN2qFM8BDQEBW9YRWwJahUxbRgDw-t3Rju03nKiNXueI7jsEKGGzMbgaaUYKeXmxWBuOcIhWAiKEACBHoRLN6H8P_KYiyO1LBiNgMcy4VsATLXXiy24ggMwGX9Cio4zAZZU1W9gFDMEHIpSiZRl0GAfaEEFutRRKo2wFlQkwuhyKWomgFlTmzWpWYdsUUQaMqhGjSmSog4AnBQFoDyK9wnDFlVmz0hyBiQVmFwEwDmByKTokeAkFdHui6A6WTxn2mFHOMlWfMBUbcnVHCC0kuovDmElNHmjtgtye0WILCTeiXRbozsHQDCoq9IBX6fkY_UFFqI2Wootqry3ZL-A4A1gJCHjFGbpN2gacZVOUwtb29zA2_CMKmnVCOBMAtPPtP02GDChux6RY6Gf1e6djBxgIAYfowSBjiBxBAIcVOJyFyRSRejccfOMBDMj4xc5UpHIy4S7Q52XYycerRjbV11WfPMIfuLXELjjxe5OMgeX6hHJSkV4ycScLlCORtIaSFcQxycjuJH0P3dpheOaDPi0or40YaeMPIbM9GptDsXOKHESk_xW40VJWOrFtBaxYDWTKoGwC90YJh4zAP1EGhvl3B3WNwcBJgCbjFGc5UiR8D8ACApIBAB4osl3LmgIJpSPRu0GYlUl-emIQXkMNppOcB6VE-kGCjvHOcuyzYn4dCFyFES9GQQ7iSEK_QCTYJgIcSbknegeNSWlkbfu0VzGACWiDAgsT-yLFTAOoMoX0pFhMmRBXA5oTQLgPgaLCrS8pPSVc2yjIRukStMpOSKiARg9J-wsalAD_6uAIw3oR2N0lKQfBZITI-qFKSgYtRvJdRBrHUUs5Kl2geAOAMUPVJNsKQzsIUM5JClVYLupknAFA0ylyRspBHJySEBclTpCwLsJKQo08ToBy4YCcwBZGKmZM4IpTUUrZA8CGkop8DB2oQGCCtSIAhxdoCMBsC0Bcm3U3qRwPga2AtQTUlqHpLBgWSvJPkl4sJjQDuBny_URgPzhjQcROqcAPGtzQsjLSRU85eaU1LikuwFGjwPzAxytLjxMgKIfZGHWWnmoQgLIJ7MiR2AOxGSNUw4H1P0jPSlIsU2ok1nspNSypLUToCkFtgvly2SMmQhyGlYDT1xLsWGeNJeDjD3wYMXWnAAWkCBtgN0oUP1FujoyYZsw6GXUTumkkhWYCL6ctKtIeBxw6M_xPC0anEya690zAPMEDqzhmQ400cLMnzacBLSxwRafC3RmAyO-s0_SDYDxgyzHJ8Uw0GaHhYa0Ec-UxRoTOuk-SJU7MschVMBiSgyZSPLmc1NJkEcTZEQAQAo0kFtjRwZU68Kcytm9j6GDHURl0LqIntVyskznrxL0kuzsmGjPSb7OOR6S5eGkvtPZNuRQNbkFs7MWEkNlKtgIL0uMWkkVl4B0ZtyK6cTNznHSjBaSU8M7NOY5iQRkgFEahV5EUIdehY3zP5ksjAt7A5A22DsGA6mhoselceqlUizpUwhIA6EdB1sSzYpwwHIqgolKpKIsqVcukYiLVGIjAGrCU8IGEalewYAZUkprsHIorzxQa82AJvNOZ29Kms8i6GhzkHLdm2Q5bjg1gjGyzg5OwJYH4DgDXgUgDQMtBiVQBpFyO9gn7p4gahohJQeNU4PEGg4tRm5rcu2CehWTtIH0YCiyFfOg7qkNmDreBkHNOY6gE4_QcoC1F3kdhQUB8uolvOgU6dtkcCokXJMDl1EH52waMcpwdYuwaF06FZM_NfnvzMy_yO7jpyj7_JzkUyKMvoGg7MK7kFyARTQGg76ZURF0DRl_KPCT1hFfCoNIwowVYKuA8AYRZLVUnTpNGFIIRffLLnTAX5b8j-UsFkUwBehn41wb1hIW5JGAw8oQKPP8SiMLsZxQBQQGAXHVLeYgZDPdDoBoZK53HEeWorwxhIvijyU-dQBYw71uE_Amyrou44d1K6qaWYAiQ2aUKJiiSvTIL3UCoicAtgMUMPHoH99piUiiSJkq7rZLcl-SmAIUo7huNvhDCoUDQvKUj0RJimfwGwo_ktLZMzdW5GYu6X6YRJeSuAAUshZ1KD6rI4-gCOpEf1aRF0DiEGIiWoB6RV2TkVpRGkwMxRfjUZgZK_569II9kgAWCL0m8sHZvjKcKM2WH8M9GxQEODi3DhcBRawAeycsP0x-Aex_PfQdsLoC7C8APSNOiyKq4aSauIYhkGsu5GSR5RvixIpCIFH_zwx0K0uk0x1bYBpWntJsK0ndQNEMY0rIBK9LACJBIMqrHFeIPl7TKoVB0OgOCo2U8ioxuy0CF5n0hRjS69whyDYCzGXRbkZlTBf6mTgOQox0rbGbQCSkORnsog2YOwKv43tplUY6ldAx5Gxj6VNCRlcXA-QPpS6T3VOGCnDjhBaBaSTBobHoYmdy2NlfHtqxNVpIoehqtCpMrJY39YxcqzZQmLthKrDAZpF6t0AmD5oWyVpTQRACtLDwMgodH0nMGOayI7A1AY5syEtRVQbUPZDLHNJgCGjjRfANJHuXIBdBgg1zCMOaDdR1JCkxVduEpBBTnRVYM9VqLmrgD5q8Yha1EMWtPKlVUZh9f4afWdX7Un2T_LkTSskgpjZgrqsCJ4l7XW1GOQ6qhqaG2CapEGgqxBjhjHXigJ1IwKdVYP5SINrw46udaAknWBxJV17KZafSHWOqeR6Y30ZmI9H9qVV7AY9UkFPVDTGOmqt2NqohR6rckrKuUOyo9GCrh0ZbUXGEjRo_q3KqXTNEq0-wOQugkoB4ndRWyoyyGVjIDRMqBUtqfGV6v0RyrWVLLPQiI89RM0rEzKjwcy6gCsqODBV9WdgQjZZHUmIa72SywjWhppGlLUATwUcKvIIUbyiFpzc9aALTlKQjlXLE5cfJbR4L95rGl2MQvQUhyEpyi7JnSSfkdLjFmZfhriLE07A6SBIpTbQu9mSblNaRbRpBIY7AAVmkjKUqaCE0wyLIrCuTWkFKQpChVuMtvqDJRBWyaFoc6haczpLT0rFD3UpGZXJ57yWNZU6dNtVoU-b8F68_zQoLtj_SMAz0FzSHI01NLXN2mtxlHMo1TBBNfmtjdkwvr5RtgmZDzNQDrmGSpYFgfgGYv4BXB-APwYsNUAyB6ssA3oMkIyBABWx-ACcfINQDK3sB-AaObrZlHWD8BygGa-AQrA638ApIsNX8NCDq0Ta-ZnMRILmDyD7JO5FoSrX8FLC9bqw_AKIGgBG0qByEHmdbcVpAB8z9W8IObPXCQA6M0Y_WwyDtoAB6Y-PHAdprD8AltO2zHGzke1NaVw_AfuTJje244IcP-J7YdonklUMw0xHbS3jTy6xgdnWnQJ5KsmaA7t4eYnLDpe2ahLQkQN7cFA-2OQ3sFgNSbZlW24BdAkAF0poHy0JVCxVkEAK6noq0AytFW00LQCFoY6L0_AeQAoCzhAA",mdxType:"Playground"},Object(a.b)(j,{height:350,mdxType:"CenterContent"},Object(a.b)(A.default,{vAlign:!0,mdxType:"PodcastIcon"})," Hello"),Object(a.b)("div",{style:{position:"relative",width:200,height:200,backgroundColor:"aliceblue",border:"1px solid grey",overflow:"auto"}},Object(a.b)(j,{fillParent:!0,spacing:"s",mdxType:"CenterContent"},"I'm centred in my little square container, but if I get",Object(a.b)("br",null),"too looooo",Object(a.b)("br",null),"ooooooooooooo",Object(a.b)("br",null),"ooooooooooooo",Object(a.b)("br",null),"oooooooooong,",Object(a.b)("br",null),"I just make it grow."))),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(s.d,{of:j,mdxType:"Props"}))}y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/CenterContent/README.mdx"}}),y.isMDXComponent=!0},"./src/icons/AssetPodcast.js":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./src/icons/BaseSvg.js"),s=Object(o.forwardRef)((function(e,t){var n=e.size,o=e.color,s=Object(i.a)(e,["size","color"]);return r.a.createElement(a.a,Object.assign({},s,{ref:t,viewBox:"0 0 18 18",width:n,height:n,fill:o,fillRule:"evenodd",clipRule:"evenodd"}),r.a.createElement("path",{d:"M7,15l1.143,0l0.716,-5.01c-0.486,-0.069 -0.859,-0.486 -0.859,-0.99c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1c0,0.504 -0.373,0.921 -0.859,0.99l0.716,5.01l1.143,0l0,1l-4,0l0,-1Zm-1.17,-0.906c-1.699,-1.06 -2.83,-2.946 -2.83,-5.094c0,-3.311 2.689,-6 6,-6c3.311,0 6,2.689 6,6c0,2.148 -1.131,4.034 -2.83,5.094l-0.288,-1.009c1.281,-0.905 2.118,-2.398 2.118,-4.085c0,-2.76 -2.24,-5 -5,-5c-2.76,0 -5,2.24 -5,5c0,1.687 0.837,3.18 2.118,4.085l-0.288,1.009Zm0.584,-2.043c-0.865,-0.734 -1.414,-1.829 -1.414,-3.051c0,-2.208 1.792,-4 4,-4c2.208,0 4,1.792 4,4c0,1.222 -0.549,2.317 -1.414,3.051l-0.313,-1.094c0.453,-0.526 0.727,-1.21 0.727,-1.957c0,-1.656 -1.344,-3 -3,-3c-1.656,0 -3,1.344 -3,3c0,0.747 0.274,1.431 0.727,1.957l-0.313,1.094Z"}))}));s.displayName="AssetPodcastIcon",s.defaultProps={size:18,color:"currentcolor"},t.default=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AssetPodcastIcon",filename:"src/icons/AssetPodcast.js"}})},"./src/icons/BaseSvg.js":function(e,t,n){"use strict";var i=n("./node_modules/prop-types/index.js"),o=n.n(i),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/utils/units.js"),s=r.d.svg.attrs({role:"presentation"}).withConfig({displayName:"BaseSvg__Svg",componentId:"sc-1bxcwkl-0"})(["display:inline-block;vertical-align:middle;flex:0 0 auto;width:1em;height:1em;"," "," font-size:",";",""],(function(e){return e.spacingLeft&&Object(r.c)(["margin-left:",";"],e.spacingLeft)}),(function(e){return e.spacingRight&&Object(r.c)(["margin-right:",";"],e.spacingRight)}),(function(e){return 0!==e.scale?Object(a.b)(18*e.scale):Object(a.c)(18)}),(function(e){return e.vAlign&&Object(r.c)(["position:relative;top:-0.12em;"])}));s.defaultProps={scale:1},s.propTypes={scale:o.a.number,vAlign:o.a.bool,spacingLeft:o.a.oneOfType([o.a.string,o.a.func]),spacingRight:o.a.oneOfType([o.a.string,o.a.func])},t.a=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}})},"./src/mixins/index.js":function(e,t,n){"use strict";var i=n("./src/utils/colors.js");function o(e){return"1px solid ".concat(Object(i.a)(e.shade,e.lineStrength))}var r=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/borderValue.js"}});var a={display:"flex",alignItems:"center",justifyContent:"center"},s=a;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/centerChildren.js"}});var c={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},l=c;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/ellipsis.js"}});var b={position:"absolute",top:0,right:0,bottom:0,left:0},p=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/fillParent.js"}});var d="screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",u=d;d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/ie11Hack.js"}});var m={overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word"},f=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/overflowWrap.js"}});var j={position:"absolute",overflow:"hidden",width:1,height:1,padding:0,clip:"rect(0 0 0 0)",border:0},A=j;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/visuallyHidden.js"}}),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return A})),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"visuallyHidden",filename:"src/mixins/index.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"overflowWrap",filename:"src/mixins/index.js"}}),u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ie11Hack",filename:"src/mixins/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fillParent",filename:"src/mixins/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ellipsis",filename:"src/mixins/index.js"}}),"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerChildren",filename:"src/mixins/index.js"}}),"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderValue",filename:"src/mixins/index.js"}})},"./src/styleProps/flexProps.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("./src/utils/units.js"),o={top:"flex-start",left:"flex-start",center:"center",bottom:"flex-end",right:"flex-end"};function r(e){var t=e.flexAlign,n=e.basis,r=e.grow,a=e.shrink;return{flex:"none",minWidth:0,flexBasis:n?Object(i.c)(n):void 0,flexGrow:r?1:void 0,flexShrink:a?1:void 0,alignSelf:o[t]||t}}"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alignMap",filename:"src/styleProps/flexProps.js"}}),t.b=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/flexProps.js"}})},"./src/styleProps/index.js":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=n("./src/ThemeSection/index.js");function r(e){if(!e||!e.globals)throw new o.a}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkTheme",filename:"src/utils/theme.js"}});var a=n("./src/mixins/index.js"),s={top:"borderTop",left:"borderLeft",bottom:"borderBottom",right:"borderRight"};function c(e){var t=e.border,n=e.theme;return r(n),s[t]?Object(i.a)({},s[t],Object(a.a)(n)):null}var l=c;c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/borderProps.js"}});var b=["block","inline","inline-block"];function p(e){var t=e.display;return t?b.includes(t)?{display:t}:void console.warn("Only 'block', 'inline', and 'inline-block' are supported for\n\t\t\tthe 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS\n\t\t\tfor more complex styling."):null}var d=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/displayProps.js"}});var u=n("./src/styleProps/flexProps.js"),m=n("./src/utils/spacing.js");function f(e){var t=e.p,n=e.px,i=e.py,o=e.pt,a=e.pr,s=e.pb,c=e.pl,l=e.theme;return r(l),{padding:t?Object(m.a)(t,l):void 0,paddingTop:i?Object(m.a)(i,l):o?Object(m.a)(o,l):void 0,paddingRight:n?Object(m.a)(n,l):a?Object(m.a)(a,l):void 0,paddingBottom:i?Object(m.a)(i,l):s?Object(m.a)(s,l):void 0,paddingLeft:n?Object(m.a)(n,l):c?Object(m.a)(c,l):void 0}}var j=f;function A(e){var t=e.pos,n=e.position,i=e.top,o=e.left,a=e.bottom,s=e.right,c=e.z,l=e.theme;return r(l),{position:t||n||void 0,top:i?Object(m.a)(i,l):void 0,left:o?Object(m.a)(o,l):void 0,bottom:a?Object(m.a)(a,l):void 0,right:s?Object(m.a)(s,l):void 0,zIndex:l.globals.z&&l.globals.z[c]||c||void 0}}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/paddingProps.js"}});var g=A;function O(e){var t=e.m,n=e.mx,i=e.my,o=e.mt,a=e.mr,s=e.mb,c=e.ml,l=e.theme;return r(l),{margin:t?Object(m.a)(t,l):void 0,marginTop:i?Object(m.a)(i,l):o?Object(m.a)(o,l):void 0,marginRight:n?Object(m.a)(n,l):a?Object(m.a)(a,l):void 0,marginBottom:i?Object(m.a)(i,l):s?Object(m.a)(s,l):void 0,marginLeft:n?Object(m.a)(n,l):c?Object(m.a)(c,l):void 0}}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/positionProps.js"}});var y=O;O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/marginProps.js"}});var h=n("./src/utils/colors.js");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var P={all:"uppercase",first:"capitalize"},x={ellipsis:a.b,wrap:a.d};function w(e){var t=e.bold,n=e.caps,o=e.dimmed,a=e.fontSize,s=e.lineHeight,c=e.overflow,l=e.textAlign,b=e.theme;return r(b),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({textAlign:l,fontSize:a?b.globals.typeScale[a]:void 0,fontWeight:t?"bold":!1===t?"normal":void 0,lineHeight:s,textTransform:n?P[n]:!1===n?"none":void 0,color:o?Object(h.a)(b.text,b.textDimStrength):!1===o?b.text:void 0},c?x[c]:void 0)}var B=w;w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/textProps.js"}}),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u.b})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"g",(function(){return B})),"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"textProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"marginProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"positionProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"paddingProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof u.b&&u.b&&u.b===Object(u.b)&&Object.isExtensible(u.b)&&Object.defineProperty(u.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayProps",filename:"src/styleProps/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderProps",filename:"src/styleProps/index.js"}})},"./src/utils/spacing.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("./src/utils/units.js"),o=["auto"];function r(e,t){return void 0===e||null===e||!1===e?e:"number"!==typeof e&&"string"!==typeof e||"0"===e?"0":"number"===typeof e?Object(i.c)(e):o.indexOf(e)>-1?e:"-"===e.charAt(0)?"-"+t.globals.spacing[e.substring(1)]:t.globals.spacing[e]}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/utils/spacing.js"}})}}]);
//# sourceMappingURL=src-center-content-readme.f65c09b4c09eb465940b.js.map