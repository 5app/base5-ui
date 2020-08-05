(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HKRM:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n("Fcif"),c=n("+I+c"),i=(n("mXGw"),n("/FXl")),s=n("TjRS"),l=n("ZFoC"),a=n("7DY4"),r=n("CRV5"),u=(n("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/DocumentClickListener/README.mdx"}});var m={_frontmatter:u},p=s.a;function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)(p,Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"documentclicklistener"},"DocumentClickListener"),Object(i.b)("p",null,"A helper component that does not render any elements, but sets up a click listener on the body.\nIf you want to ignore clicks on a certain element, you can pass in the ref of that element using the ",Object(i.b)("inlineCode",{parentName:"p"},"excludedElementRef")," prop."),Object(i.b)("p",null,"This is a thin component wrapper around the ",Object(i.b)("inlineCode",{parentName:"p"},"useOnClickOutside")," hook that's especially useful for tooltips and dropdown menus."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,'The below example shows how to use this component and also demonstrates why this is a component and not just a hook: Due to the "',Object(i.b)("a",{href:"https://reactjs.org/docs/hooks-rules.html",parentName:"p"},"rules of hooks"),"\", it's not possible to conditionally call a hook, while it's very easy to conditionally render a component."),Object(i.b)(l.c,{mdxType:"Playground"},Object(i.b)(r.a,{mdxType:"Example"})),Object(i.b)("pre",null,Object(i.b)("code",{className:"language-jsx",parentName:"pre"},'function DocumentClickExample() {\n    const [count, setCount] = useState(0);\n    const [isActive, setActive] = useState(true);\n    const excludedElement = useRef(null);\n    return (\n        <>\n            <h1>Document clicks: {count}</h1>\n            <Box ref={excludedElement} p="m" border="dashed">\n                Clicks inside this box will be ignored.\n            </Box>\n            {isActive && (\n                <DocumentClickListener\n                    onClick={() => setCount(count + 1)}\n                    excludedElementRef={excludedElement}\n                />\n            )}\n            <Box mt="m">\n                <Switch\n                    checked={isActive}\n                    onChange={() => setActive(prevActive => !prevActive)}\n                    id="switch"\n                />{\' \'}\n                <label htmlFor="switch">Count clicks</label>\n            </Box>\n        </>\n    );\n}\n')),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)(l.d,{of:a.a,mdxType:"Props"}))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/DocumentClickListener/README.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-document-click-listener-readme-mdx-8c7467a56f7560d0998e.js.map