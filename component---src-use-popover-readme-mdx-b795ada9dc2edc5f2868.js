(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"f/+s":function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return c})),o.d(n,"default",(function(){return b}));var t=o("Fcif"),r=o("+I+c"),p=(o("mXGw"),o("/FXl")),a=o("TjRS"),c=(o("ZFoC"),o("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/usePopover/README.mdx"}});var i={_frontmatter:c},s=a.a;function b(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(p.b)(s,Object(t.a)({},i,o,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"usepopover"},"usePopover"),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"usePopover")," hook uses ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/FezVrasta/react-popper"}),"react-popper")," and the ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://5app.github.io/base5-ui/src-arrow-readme"}),"Arrow component")," to make it easy to create your own Popover component."),Object(p.b)("p",null,"Here's a simple implementation of a Popover using ",Object(p.b)("inlineCode",{parentName:"p"},"usePopover"),", not dissimilar to the ",Object(p.b)("inlineCode",{parentName:"p"},"Popover"),' you\'ll find under "Components":'),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Box from \'base5-ui/Box\';\nimport Portal from \'base5-ui/Portal\';\nimport usePopover from \'base5-ui/usePopover\';\n\nfunction Popover({isOpen, content, placement}) {\n    const popover = usePopover({\n        placement,\n    });\n\n    return (\n        <>\n            {children({\n                ref: popover.setReferenceRef,\n                update: popover.update,\n            })}\n            {isOpen &&\n                <Portal>\n                    <Box\n                        {...popover.props}\n                        ref={popover.setRef}\n                        background="black"\n                        color="white"\n                        borderRadius={3}\n                        px="s"\n                        py="xs"\n                        maxWidth="100%"\n                    >\n                        {content}\n                        {popover.arrow}\n                    </Box>\n                </Portal>\n            }\n        </>\n    );\n});\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/usePopover/README.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-popover-readme-mdx-b795ada9dc2edc5f2868.js.map