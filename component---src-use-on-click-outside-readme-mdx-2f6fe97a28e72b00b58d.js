(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{cBK8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return h}));var c=n("Fcif"),a=n("+I+c"),i=n("mXGw"),l=n("/FXl"),o=n("TjRS"),r=n("ZFoC"),s=n("yrBt"),b=n("7xDH"),u=n("/+8G"),d=n("KhRu"),m=(n("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/useOnClickOutside/README.mdx"}});var p={_frontmatter:m},O=o.a;function h(e){var t,n=e.components,h=Object(a.a)(e,["components"]);return Object(l.b)(O,Object(c.a)({},p,h,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"useonclickoutside"},"useOnClickOutside"),Object(l.b)("p",null,"This hook lets you run a callback whenever the body of the page (or any other element) is clicked, and allows you to ignore clicks on a certain element within it by specifying the ",Object(l.b)("inlineCode",{parentName:"p"},"excludedElementRef")," prop."),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"excludedElementRef")," - A React ref (as obtained from ",Object(l.b)("inlineCode",{parentName:"li"},"useRef")," or ",Object(l.b)("inlineCode",{parentName:"li"},"createRef"),") to an element that should be excluded from triggering the ",Object(l.b)("inlineCode",{parentName:"li"},"onClick")," callback"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"onClick")," - Function that's called when a click occurs outside of the excluded element"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"isEnabled"),"=true] - Set to false to disable the hook")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(r.c,{__position:0,__code:'() => {\n  const [count, setCount] = React.useState(0)\n  const [isEnabled, setIsEnabled] = React.useState(true)\n  const excludedElement = React.useRef(null)\n  useOnClickOutside(excludedElement, () => setCount(count + 1), isEnabled)\n  return (\n    <Stack spacing="m">\n      <h1>Document clicks: {count}</h1>\n      <Box ref={excludedElement} p="m" border="dashed">\n        Clicks inside this box will be ignored.\n      </Box>\n      <>\n        <Switch\n          checked={isEnabled}\n          onChange={() => setIsEnabled(prevEnabled => !prevEnabled)}\n          id="switch"\n        />{\' \'}\n        <label htmlFor="switch">Count clicks</label>\n      </>\n    </Stack>\n  )\n}',__scope:(t={props:h,DefaultLayout:o.a,Playground:r.c,Props:r.d,useOnClickOutside:s.a,Box:b.a,Stack:u.a,Switch:d.a},t.DefaultLayout=o.a,t._frontmatter=m,t),mdxType:"Playground"},(function(){var e=i.useState(0),t=e[0],n=e[1],c=i.useState(!0),a=c[0],o=c[1],r=i.useRef(null);return Object(s.a)(r,(function(){return n(t+1)}),a),Object(l.b)(u.a,{spacing:"m",mdxType:"Stack"},Object(l.b)("h1",null,"Document clicks: ",t),Object(l.b)(b.a,{ref:r,p:"m",border:"dashed",mdxType:"Box"},"Clicks inside this box will be ignored."),Object(l.b)(i.Fragment,null,Object(l.b)(d.a,{checked:a,onChange:function(){return o((function(e){return!e}))},id:"switch",mdxType:"Switch"})," ",Object(l.b)("label",{htmlFor:"switch"},"Count clicks")))})))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/useOnClickOutside/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-on-click-outside-readme-mdx-2f6fe97a28e72b00b58d.js.map