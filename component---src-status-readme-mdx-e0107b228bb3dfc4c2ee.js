(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{F3iY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("mXGw"),a=n("/FXl"),r=n("TjRS"),s=n("ZFoC"),i=n("hTy3"),c=n("nraw");n("aD51");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Status/README.mdx"}});var b={_frontmatter:l},p=r.a;function d(e){var t,n=e.components,d=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(a.b)(p,u({},b,d,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"status"},"Status"),Object(a.b)("p",null,"Any changes to the textual content of this component are reported to users of screen readers. It's equivalent to a div with the following props:"),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{className:"language-jsx"}),'<div role="status" aria-live="polite" aria-relevant="additions text" />\n')),Object(a.b)("p",null,"For more control you can override each of these props."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(s.c,{__position:0,__code:"() => {\n  const [showConfirmation, setShowConfirmation] = React.useState(false)\n  return (\n    <>\n      <Button\n        isActive={showConfirmation}\n        onClick={() => setShowConfirmation(v => !v)}\n      >\n        Click me\n      </Button>\n      <Status>\n        {showConfirmation &&\n          'Congrats, you have clicked the button! This message will be read out by screen readers.'}\n      </Status>\n    </>\n  )\n}",__scope:(t={props:d,DefaultLayout:r.a,Playground:s.c,Props:s.d,Status:i.a,Button:c.a},t.DefaultLayout=r.a,t._frontmatter=l,t),mdxType:"Playground"},(function(){var e=o.useState(!1),t=e[0],n=e[1];return Object(a.b)(o.Fragment,null,Object(a.b)(c.a,{isActive:t,onClick:function(){return n((function(e){return!e}))},mdxType:"Button"},"Click me"),Object(a.b)(i.a,{mdxType:"Status"},t&&"Congrats, you have clicked the button! This message will be read out by screen readers."))})),Object(a.b)("h2",{id:"usage-note"},"Usage note"),Object(a.b)("p",null,"Make sure that the ",Object(a.b)("inlineCode",{parentName:"p"},"Status")," component is always rendered – even when it's empty – before you update its contents. If the element is added alongside its content, screen readers will ",Object(a.b)("strong",{parentName:"p"},"not")," announce it!"),Object(a.b)("p",null,"The example below would not work:"),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{className:"language-jsx"}),"{\n    showConfirmation && <Status>This status will NOT BE announced :(</Status>;\n}\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(s.d,{of:i.a,mdxType:"Props"}))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Status/README.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-status-readme-mdx-e0107b228bb3dfc4c2ee.js.map