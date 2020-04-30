(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"90pL":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docz/1-introduction.mdx"}});var r={_frontmatter:l},s=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(s,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(o.b)("img",{alt:"Greenkeeper badge",src:"https://badges.greenkeeper.io/5app/base5-ui.svg"}))),Object(o.b)("p",null,"Welcome to base5-ui, 5app's library of reusable React components. base5-ui's focus lies on providing easy-to-use base & layout components for building highly themeable pages."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"base5-ui is built on styled-components, so if you're not using it already, install it along with base5-ui."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{}),"npm i base5-ui styled-components\n")),Object(o.b)("h2",{id:"running-the-component-library-locally"},"Running the component library locally"),Object(o.b)("p",null,"base5-ui comes with its own documentation tool & development playground powered by ",Object(o.b)("a",i({parentName:"p"},{href:"https://www.docz.site/"}),"docz"),". To check it out locally, clone this repo to your local machine, install its dependencies (",Object(o.b)("inlineCode",{parentName:"p"},"npm i"),"), and finally run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{}),"npm run docz:dev\n")),Object(o.b)("p",null,"The documentation environment should then open in your browser at http://localhost:3000, letting you browse all available components to inspect their API and see usage examples."),Object(o.b)("h2",{id:"using-base5-ui"},"Using base5-ui"),Object(o.b)("p",null,"To use the components of base5-ui, your app needs to be wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"<ThemeSection>")," that provides each component with global and local theme information."),Object(o.b)("p",null,"A basic app setup using the default base5-ui theme looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport ThemeSection from 'base5-ui/ThemeSection';\nimport Button from 'base5-ui/Button';\n\nimport theme from 'base5-ui/theme';\n\nfunction App() {\n    return (\n        <ThemeSection name=\"page\" baseTheme={theme}>\n            <Button>Hello world!</Button>\n        </ThemeSection>\n    );\n}\n\nconst rootElement = document.getElementById('root');\n\nReactDOM.render(<App />, rootElement);\n")),Object(o.b)("h2",{id:"updating-the-repo"},"Updating the repo"),Object(o.b)("p",null,"Want to add/edit icons? Please follow the steps outlined in the ",Object(o.b)("a",i({parentName:"p"},{href:"/base5-ui/src/icons/README.mdx"}),"icons README")," before continuing here."),Object(o.b)("p",null,"To publish changes to the components in this repo, please follow these steps. The docs will automatically be updated after the changes were published."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Commit your changes using semantic versioning prefixes:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"fix:")," or ",Object(o.b)("inlineCode",{parentName:"li"},"refactor:")," for a patch release (x.x.+1)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"feat:")," for a minor release (x.+1.0)"),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"BREAKING CHANGE:")," to the beginning of the commit message's body for a major release: +1.0.0)"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"chore:")," or ",Object(o.b)("inlineCode",{parentName:"li"},"style:")," for housekeeping tasks that don't require a release"))),Object(o.b)("li",{parentName:"ul"},"Submit a PR or push to the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch")),Object(o.b)("h2",{id:"updating-just-the-docs"},"Updating just the docs"),Object(o.b)("p",null,"If you did not make any changes to components and only want to update the docs in our online ",Object(o.b)("a",i({parentName:"p"},{href:"https://5app.github.io/base5-ui"}),"component library"),", just submit a PR or push to the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch directly using a ",Object(o.b)("inlineCode",{parentName:"p"},"docs:")," prefix for the commit message."),Object(o.b)("h2",{id:"tests"},"Tests"),Object(o.b)("p",null,"Execute ",Object(o.b)("inlineCode",{parentName:"p"},"npm test")," or ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test")," to run the tests"),Object(o.b)("p",null,"Execute ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test:cover")," to run the tests with coverage analysis."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A summary report such as the following will be available in the terminal:")),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{}),"=============================== Coverage summary ===============================\nStatements   : 76.38% ( 524/686 )\nBranches     : 53.81% ( 120/223 )\nFunctions    : 87.06% ( 148/170 )\nLines        : 77.04% ( 520/675 )\n================================================================================\nTest Suites: 12 passed, 12 total\nTests:       3 skipped, 32 passed, 35 total\nSnapshots:   0 total\nTime:        3.818s\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A detailed html code analysis report will be available at ",Object(o.b)("inlineCode",{parentName:"li"},"./test/coverage/index.html"),"\nThe detailed report provides a good insight on what to test and how well the component is tested.")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docz/1-introduction.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-1-introduction-mdx-ba421995d65a79868ed3.js.map