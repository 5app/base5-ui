(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{UsKE:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return u})),o.d(n,"default",(function(){return b}));var t=o("Fcif"),r=o("+I+c"),a=(o("mXGw"),o("/FXl")),p=o("TjRS"),s=o("ZFoC"),c=o("7xDH"),l=o("4Pxj"),i=o("rYwh"),u=(o("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/usePopoverState/README.mdx"}});var m={_frontmatter:u},f=p.a;function b(e){var n,o=e.components,b=Object(r.a)(e,["components"]);return Object(a.b)(f,Object(t.a)({},m,b,{components:o,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"usepopoverstate"},"usePopoverState"),Object(a.b)("p",null,"Easily handle the state of popover menus or tooltips."),Object(a.b)("p",null,"Supports specifying a delay after which the popover is opened, and automatically closes the popover when the ",Object(a.b)("inlineCode",{parentName:"p"},"Esc")," key is pressed."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(s.c,{__position:0,__code:'() => {\n  const { isOpen, open, close } = usePopoverState({\n    openDelay: 200,\n    onOpen: () => console.log(\'Opening!\'),\n    onClose: () => console.log(\'Closing!\'),\n  })\n  return (\n    <Box p="l">\n      <Popover\n        renderWhenClosed\n        isOpen={isOpen}\n        content="I\'m a popover. I\'ll always stick to my reference element!"\n        placement="top-start"\n        p="s"\n        variant="inverted"\n      >\n        {popover => (\n          <span ref={popover.ref} onMouseEnter={open} onMouseLeave={close}>\n            I\'m a reference element\n          </span>\n        )}\n      </Popover>\n    </Box>\n  )\n}',__scope:(n={props:b,DefaultLayout:p.a,Playground:s.c,Props:s.d,Box:c.a,Popover:l.a,usePopoverState:i.a},n.DefaultLayout=p.a,n._frontmatter=u,n),mdxType:"Playground"},(function(){var e=Object(i.a)({openDelay:200,onOpen:function(){return console.log("Opening!")},onClose:function(){return console.log("Closing!")}}),n=e.isOpen,o=e.open,t=e.close;return Object(a.b)(c.a,{p:"l",mdxType:"Box"},Object(a.b)(l.a,{renderWhenClosed:!0,isOpen:n,content:"I'm a popover. I'll always stick to my reference element!",placement:"top-start",p:"s",variant:"inverted",mdxType:"Popover"},(function(e){return Object(a.b)("span",{ref:e.ref,onMouseEnter:o,onMouseLeave:t},"I'm a reference element")})))})))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/usePopoverState/README.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-popover-state-readme-mdx-96fc779f0d3e7a827d5a.js.map