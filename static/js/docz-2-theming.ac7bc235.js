(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docz/2-theming.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),m={},c="wrapper";function a(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(c,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"theming"},"Theming"),Object(s.b)("p",null,"Being able to adapt the colours of base5-UI's components is a big focus of the library."),Object(s.b)("p",null,"This section is still a work in progress, we'll try to add documentation around our theme system as soon as possible."),Object(s.b)("h2",{id:"global-theme"},"Global theme"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport ThemeSection from \'base5-icons/ThemeSection\';\nimport Button from \'base5-icons/Button\';\n\nimport theme from \'base5-icons/theme\';\n\nfunction App() {\n  return (\n    <ThemeSection name="page" baseTheme={theme}>\n        <Button>Hello world!</Button>\n    </ThemeSection>\n  );\n}\n\nconst rootElement = document.getElementById("root");\n\nReactDOM.render(<App />, rootElement);\n')),Object(s.b)("h2",{id:"theme-section-local-themes"},"Theme section (local themes)"),Object(s.b)("p",null,"Hoo ha"))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docz/2-theming.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=docz-2-theming.32d4825f61f969955a63.js.map