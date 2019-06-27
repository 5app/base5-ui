(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/1-introduction.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},l="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Welcome to base5-UI, 5app's library of reusable React components. base5-UI's focus lies on providing easy-to-use base & layout components for building highly themeable pages."),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://5app.github.io/base-5-ui"}),"View the component library online")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"base5-UI is built on styled-components, so if you're not using it already, install it along with base5-UI."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"npm i base5-ui styled-components\n")),Object(a.b)("h2",{id:"running-the-component-library-locally"},"Running the component library locally"),Object(a.b)("p",null,"base5-UI comes with its own documentation tool & development playground powered by ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.docz.site/"}),"docz"),". To check it out locally, clone this repo to your local machine, install all needed dependencies using ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," (Docz is currently ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/pedronauck/docz/issues/276"}),"buggy when using plain old npm"),") and then run:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"yarn docz:dev\n")),Object(a.b)("p",null,"The documentation environment will then be available at ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),", letting you browse all available components to inspect their API and see usage examples."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"To use the components of base5-UI, your app needs to be wrapped in a ",Object(a.b)("inlineCode",{parentName:"p"},"<ThemeSection>")," that provides each component with global and local theme information."),Object(a.b)("p",null,"A basic app setup using the default base5-UI theme looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport ThemeSection from \'base5-ui/ThemeSection\';\nimport Button from \'base5-ui/Button\';\n\nimport theme from \'base5-ui/theme\';\n\nfunction App() {\n  return (\n    <ThemeSection name="page" baseTheme={theme}>\n        <Button>Hello world!</Button>\n    </ThemeSection>\n  );\n}\n\nconst rootElement = document.getElementById("root");\n\nReactDOM.render(<App />, rootElement);\n')),Object(a.b)("h2",{id:"updating-the-repo"},"Updating the repo"),Object(a.b)("p",null,"Want to add/edit icons? Please follow the steps outlined in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/src/icons/README.mdx"}),"icons README")," before continuing here."),Object(a.b)("p",null,"To publish changes to the components in this repo, please follow these steps. The docs will automatically be updated after the changes were published."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Commit your changes using semantic versioning prefixes:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"fix:")," or ",Object(a.b)("inlineCode",{parentName:"li"},"refactor:")," for a patch release (x.x.+1)"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"feat:")," for a minor release (x.+1.0)"),Object(a.b)("li",{parentName:"ol"},"Add ",Object(a.b)("inlineCode",{parentName:"li"},"BREAKING CHANGE:")," to the beginning of the commit message's body for a major release: +1.0.0)"),Object(a.b)("li",{parentName:"ol"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"chore:")," or ",Object(a.b)("inlineCode",{parentName:"li"},"style:")," for housekeeping tasks that don't require a release"))),Object(a.b)("li",{parentName:"ul"},"Submit a PR or push to the ",Object(a.b)("inlineCode",{parentName:"li"},"master")," branch")),Object(a.b)("h2",{id:"updating-just-the-docs"},"Updating just the docs"),Object(a.b)("p",null,"If you did not make any changes to components and only want to update the docs in our online ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://5app.github.io/base-5-ui"}),"component library"),", follow these steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Commit your changes using the prefix ",Object(a.b)("inlineCode",{parentName:"li"},"docs:")),Object(a.b)("li",{parentName:"ol"},"Push to the ",Object(a.b)("inlineCode",{parentName:"li"},"master")," branch"),Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"npm run deploy-docs"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),b.isMDXComponent=!0,n.d(t,"default",function(){return r});var c={},s="wrapper";function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"ReadMe"}))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docz/1-introduction.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=docz-1-introduction.7922badb619ed5e0ee9a.js.map