(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/1-introduction.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},s="wrapper";function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(o.b)("img",{alt:"Greenkeeper badge",src:"https://badges.greenkeeper.io/5app/base5-ui.svg"}))),Object(o.b)("p",null,"Welcome to base5-UI, 5app's library of reusable React components. base5-UI's focus lies on providing easy-to-use base & layout components for building highly themeable pages."),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://5app.github.io/base5-ui"}),"View the component library online")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"base5-UI is built on styled-components, so if you're not using it already, install it along with base5-UI."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm i base5-ui styled-components\n")),Object(o.b)("h2",{id:"running-the-component-library-locally"},"Running the component library locally"),Object(o.b)("p",null,"base5-UI comes with its own documentation tool & development playground powered by ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.docz.site/"}),"docz"),". To check it out locally, clone this repo to your local machine, install all needed dependencies using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," (Docz is currently ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/pedronauck/docz/issues/276"}),"buggy when using plain old npm"),") and then run:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"yarn docz:dev\n")),Object(o.b)("p",null,"The documentation environment will then be available at ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),", letting you browse all available components to inspect their API and see usage examples."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"To use the components of base5-UI, your app needs to be wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"<ThemeSection>")," that provides each component with global and local theme information."),Object(o.b)("p",null,"A basic app setup using the default base5-UI theme looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport ThemeSection from \'base5-ui/ThemeSection\';\nimport Button from \'base5-ui/Button\';\n\nimport theme from \'base5-ui/theme\';\n\nfunction App() {\n  return (\n    <ThemeSection name="page" baseTheme={theme}>\n        <Button>Hello world!</Button>\n    </ThemeSection>\n  );\n}\n\nconst rootElement = document.getElementById("root");\n\nReactDOM.render(<App />, rootElement);\n')),Object(o.b)("h2",{id:"updating-the-repo"},"Updating the repo"),Object(o.b)("p",null,"Want to add/edit icons? Please follow the steps outlined in the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/src/icons/README.mdx"}),"icons README")," before continuing here."),Object(o.b)("p",null,"To publish changes to the components in this repo, please follow these steps. The docs will automatically be updated after the changes were published."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Commit your changes using semantic versioning prefixes:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"fix:")," or ",Object(o.b)("inlineCode",{parentName:"li"},"refactor:")," for a patch release (x.x.+1)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"feat:")," for a minor release (x.+1.0)"),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"BREAKING CHANGE:")," to the beginning of the commit message's body for a major release: +1.0.0)"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"chore:")," or ",Object(o.b)("inlineCode",{parentName:"li"},"style:")," for housekeeping tasks that don't require a release"))),Object(o.b)("li",{parentName:"ul"},"Submit a PR or push to the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch")),Object(o.b)("h2",{id:"updating-just-the-docs"},"Updating just the docs"),Object(o.b)("p",null,"If you did not make any changes to components and only want to update the docs in our online ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://5app.github.io/base5-ui"}),"component library"),", just submit a PR or push to the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch directly using a ",Object(o.b)("inlineCode",{parentName:"p"},"docs:")," prefix for the commit message."),Object(o.b)("h2",{id:"tests"},"Tests"),Object(o.b)("p",null,"Execute ",Object(o.b)("inlineCode",{parentName:"p"},"npm test")," or ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test")," to run the tests"),Object(o.b)("p",null,"Execute ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test:cover")," to run the tests with coverage analysis."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A summary report such as the following will be available in the terminal:")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"=============================== Coverage summary ===============================\nStatements   : 76.38% ( 524/686 )\nBranches     : 53.81% ( 120/223 )\nFunctions    : 87.06% ( 148/170 )\nLines        : 77.04% ( 520/675 )\n================================================================================\nTest Suites: 12 passed, 12 total\nTests:       3 skipped, 32 passed, 35 total\nSnapshots:   0 total\nTime:        3.818s\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A detailed html code analysis report will be available at ",Object(o.b)("inlineCode",{parentName:"li"},"./test/coverage/index.html"),"\nThe detailed report provides a good insight on what to test and how well the component is tested.")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),l.isMDXComponent=!0,n.d(t,"default",(function(){return r}));var b={},c="wrapper";function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"ReadMe"}))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docz/1-introduction.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=docz-1-introduction.ee16fe92cefaad05c97a.js.map