(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/useBreakpoints/README.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o=(t("./node_modules/docz/dist/index.esm.js"),{}),i="wrapper";function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(i,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"usebreakpoints"},"useBreakpoints"),Object(a.b)("p",null,"A hook that returns an object containing the state of the current theme's media query breakpoints.\nThis can be useful when you need to render different markup depending on the user's screen width."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const {m, xl} = useBreakpoints();\n\nconsole.log(m, xl); // e.g. true, false\n")),Object(a.b)("p",null,'The breakpoint states are resolved using "mobile-first" ',Object(a.b)("inlineCode",{parentName:"p"},"min-width")," queries, i.e. they are reported as matching (",Object(a.b)("inlineCode",{parentName:"p"},"true"),") when the viewport width is ",Object(a.b)("strong",{parentName:"p"},"wider")," than the breakpoint."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Word of warning:")," Due to its reliance on client-side JS, this hook is not compatible with server-side rendering."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Choose your own breakpoints and breakpoint names"),Object(a.b)("li",{parentName:"ul"},"Works without resize event listeners (It uses the ",Object(a.b)("inlineCode",{parentName:"li"},"window.matchMedia")," API)"),Object(a.b)("li",{parentName:"ul"},"Keeps track of Media Query state in a single place, minimising the number of Media Query change listeners on the page")),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"In order to use the ",Object(a.b)("inlineCode",{parentName:"p"},"useBreakpoints")," hook, wrap your React app with the ",Object(a.b)("inlineCode",{parentName:"p"},"BreakpointsProvider")," component and initialise it with a configuration object that contains the widths of your breakpoints."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import {BreakpointsProvider} from 'base5-ui/useBreakpoints';\n...\nconst myBreakpoints = {\n    smol: '360px',\n    medium: '480px',\n    largo: '840px',\n};\n\nfunction MyApp() {\n    return (\n        <BreakpointsProvider breakpoints={myBreakpoints}>\n            <App />\n        </BreakpointsProvider>\n    )\n}\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Once your app has been set up as described above, the ",Object(a.b)("inlineCode",{parentName:"p"},"useBreakpoints")," hook is ready to be used."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import useBreakpoints from 'base5-ui/useBreakpoints';\n\n...\n\nfunction Component() {\n    const {smol, medium, largo} = useBreakpoints();\n\n    return (\n        <nav>\n            {medium ? (\n                <DesktopMenu />\n            ) : (\n                <MobileMenu />\n            )}\n        </nav>\n    )\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tip:")," Rename your breakpoints while destructuring for a more readable variable:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const {medium: isDesktop} = useBreakpoints();\n")),Object(a.b)("h2",{id:"getting-the-current-breakpoint"},"Getting the current breakpoint"),Object(a.b)("p",null,"If you need to read the currently active breakpoint, you need to provide the hook with an array of the breakpoint names you're interested in, ordered from smallest to largest."),Object(a.b)("p",null,"The hook will then return the name of the largest matching breakpoint under the ",Object(a.b)("inlineCode",{parentName:"p"},"currentBreakpoint")," key."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"    const {currentBreakpoint} = useBreakpoints(['smol', 'largo']);\n\n    return (\n        <p>\n            The current breakpoint is {currentBreakpoint}!\n        </p>\n    )\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useBreakpoints/README.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-use-breakpoints-readme.f65c09b4c09eb465940b.js.map