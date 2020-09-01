(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{pqKB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return j}));var a=n("Fcif"),c=n("+I+c"),i=(n("mXGw"),n("/FXl")),b=n("TjRS"),l=n("ZFoC"),s=(n("7xDH"),n("+5+m")),r=(n("VaD+"),n("BbnS")),o=n("/+8G"),p=(n("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Stack/README.mdx"}});var d={_frontmatter:p},m=b.a;function j(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)(m,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"stack"},"Stack"),Object(i.b)("p",null,"Control vertical spacing between Stack items. Supports all ",Object(i.b)("inlineCode",{parentName:"p"},"Box")," style props."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(l.c,{mdxType:"Playground"},Object(i.b)(o.a,{spacing:"xxs",mdxType:"Stack"},Object(i.b)(r.a,{href:"#",mdxType:"TextLink"},Object(i.b)("p",null,"Home")),Object(i.b)(r.a,{href:"#",mdxType:"TextLink"},Object(i.b)("p",null,"Projects")),Object(i.b)(r.a,{href:"#",mdxType:"TextLink"},Object(i.b)("p",null,"About us")))),Object(i.b)("h2",{id:"conditionally-rendering-stack-items"},"Conditionally rendering Stack items"),Object(i.b)("p",null,"To conditionally render Stack items, simply ensure that a falsy value is returned as a direct child of the Stack component in place of the respective item."),Object(i.b)("pre",null,Object(i.b)("code",{className:"language-jsx",parentName:"pre"},'<Stack spacing="s">\n    <>Milk</>\n    <>Eggs</>\n    {shouldRenderItem && <>Cheese</>}\n</Stack>\n')),Object(i.b)("p",null,"Please note that a nested falsy return as shown in the next example will ",Object(i.b)("strong",{parentName:"p"},"not")," work, and will generate superfluous spacing:"),Object(i.b)("pre",null,Object(i.b)("code",{className:"language-jsx",parentName:"pre"},'<Stack spacing="s">\n    <Item>Milk</Item>\n    <Item>Eggs</Item>\n    {/* Don\'t do this, it will create extra spacing for the hidden item: */}\n    <Item isHidden={shouldRenderItem}>Cheese</Item>\n</Stack>\n')),Object(i.b)("h2",{id:"responsively-hiding-stack-items"},"Responsively hiding Stack items"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"Hidden")," component to hide Stack items below or above a certain breakpoint.\nThe following list has a third list item that will be hidden on larger screens."),Object(i.b)(l.c,{mdxType:"Playground"},Object(i.b)(o.a,{as:"list",spacing:[0,"s","xl"],breakpoints:["m","l"],mdxType:"Stack"},Object(i.b)(r.a,{href:"#",mdxType:"TextLink"},Object(i.b)("p",null,"Milch")),Object(i.b)(r.a,{href:"#",mdxType:"TextLink"},Object(i.b)("p",null,"Eier")),Object(i.b)(s.a,{above:"xl",mdxType:"Hidden"},Object(i.b)(r.a,{href:"#",mdxType:"TextLink"},Object(i.b)("p",null,"Käse"))))),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)(l.d,{of:o.a,mdxType:"Props"}))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Stack/README.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-stack-readme-mdx-6794f5c5b918c5ebe190.js.map