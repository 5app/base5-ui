(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0ioR":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return d})),o.d(t,"default",(function(){return m}));var n=o("Fcif"),i=o("+I+c"),a=(o("mXGw"),o("/FXl")),r=o("TjRS"),c=o("ZFoC"),b=o("Q+Gn"),l=o("7xDH"),s=o("6gg0"),d=(o("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/CenterContent/README.mdx"}});var p={_frontmatter:d},h=r.a;function m(e){var t,o=e.components,m=Object(i.a)(e,["components"]);return Object(a.b)(h,Object(n.a)({},p,m,{components:o,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"centercontent"},"CenterContent"),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"CenterContent")," component to center arbitrarily sized content horizontally and vertically inside of its container."),Object(a.b)("h2",{id:"usage-notes"},"Usage notes"),Object(a.b)("p",null,"The component renders two wrapper ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"s and is meant to be used for large components with an unpredictable height (e.g. modal popups or headlines in a banner). Don't use it for centering an icon within a circle or text within a button."),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"height")," prop to define a minimum height for the component. If the content is taller than the height specified, the component will grow accordingly."),Object(a.b)("p",null,"Instead of defining a height, you can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"fillParent")," prop which will make the component grow to match the width and height of its container. When using this, make sure the container has a position other than ",Object(a.b)("inlineCode",{parentName:"p"},"static")," (",Object(a.b)("inlineCode",{parentName:"p"},"relative"),", ",Object(a.b)("inlineCode",{parentName:"p"},"absolute"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"fixed")," all work), and is not set to ",Object(a.b)("inlineCode",{parentName:"p"},"overflow: hidden")," as that could lead to longer content being cut off."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(c.c,{__position:0,__code:'<Box background="shaded" mb="m">\n  <CenterContent height={350}>\n    <PodcastIcon vAlign /> Hello\n  </CenterContent>\n</Box>\n<Box\n  position="relative"\n  width={200}\n  height={200}\n  border="thin"\n  overflow="auto"\n>\n  <CenterContent fillParent spacing="s">\n    This text is centred in its little square container, but if it gets too\n    looooo\n    <br />\n    ooooooooooooo\n    <br />\n    ooooooooooooo\n    <br />\n    oooooooooong,\n    <br />\n    it just makes it grow with no cut-off edges.\n  </CenterContent>\n</Box>',__scope:(t={props:m,DefaultLayout:r.a,Playground:c.c,Props:c.d,CenterContent:b.a,Box:l.a,PodcastIcon:s.default},t.DefaultLayout=r.a,t._frontmatter=d,t),mdxType:"Playground"},Object(a.b)(l.a,{background:"shaded",mb:"m",mdxType:"Box"},Object(a.b)(b.a,{height:350,mdxType:"CenterContent"},Object(a.b)(s.default,{vAlign:!0,mdxType:"PodcastIcon"})," Hello")),Object(a.b)(l.a,{position:"relative",width:200,height:200,border:"thin",overflow:"auto",mdxType:"Box"},Object(a.b)(b.a,{fillParent:!0,spacing:"s",mdxType:"CenterContent"},"This text is centred in its little square container, but if it gets too looooo",Object(a.b)("br",null),"ooooooooooooo",Object(a.b)("br",null),"ooooooooooooo",Object(a.b)("br",null),"oooooooooong,",Object(a.b)("br",null),"it just makes it grow with no cut-off edges."))),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(c.d,{of:b.a,mdxType:"Props"}))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/CenterContent/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-center-content-readme-mdx-d0e2e35924fe16038f81.js.map