(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"22ds":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),o=n("TjRS"),r=n("ZFoC"),i=n("inYB"),c=n("4Kil"),b=n("nraw"),p=n("BbnS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/BackButton/README.mdx"}});var u={_frontmatter:l},h=o.a;function m(e){var t,n=e.components,m=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(h,s({},u,m,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"backbutton"},"BackButton"),Object(a.b)("p",null,"A component for handling backlinks for navigation in apps."),Object(a.b)("h2",{id:"the-problem"},"The problem"),Object(a.b)("p",null,'Hard-coding back links in an app where pages may have different entry points can quickly lead to a bad user experience. Users expect a link or button labelled "Back" to take them back to the page they came from – just like their browser\'s back button.'),Object(a.b)("p",null,"So, one might think, why not just trigger the browser's back button using ",Object(a.b)("inlineCode",{parentName:"p"},"history.back"),"? The answer is that we need back buttons to have a sensible fallback for when there's no browser history yet, for example after a link has been opened in a new window, or when a page was reached via a link in an email."),Object(a.b)("p",null,"This is where this component comes in. Wrap your app with the ",Object(a.b)("inlineCode",{parentName:"p"},"BackButtonProvider")," component and pass it the current pathname. In react-router, you can get it from the ",Object(a.b)("inlineCode",{parentName:"p"},"useLocation")," hook:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-js"}),"import {useLocation} from 'react-router';\nimport {BackButtonProvider} from 'base5-ui/BackButton';\n\nfunction YourApp({children}) {\n    const {pathname} = useLocation();\n\n    return (\n        <BackButtonProvider pathname={pathname}>{children}</BackButtonProvider>\n    );\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"BackButtonProvider")," tracks whether the user has navigated in the app. It then provides this information to the ",Object(a.b)("inlineCode",{parentName:"p"},"BackButton")," component via context. ",Object(a.b)("inlineCode",{parentName:"p"},"BackButton")," then either renders a ",Object(a.b)("inlineCode",{parentName:"p"},"<button>")," element, or the fallback link specified by you."),Object(a.b)("p",null,"For visual customisation, you can pass a ",Object(a.b)("inlineCode",{parentName:"p"},"baseComponent")," prop which changes the component that's rendered by default (",Object(a.b)("a",s({parentName:"p"},{href:"src-button-core-readme"}),Object(a.b)("inlineCode",{parentName:"a"},"ButtonCore")),"). Please make sure that this component has support for changing the rendered element type using the '",Object(a.b)("inlineCode",{parentName:"p"},"as"),"' prop (by default this is the case for any components built using styled-components)."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(r.c,{__position:0,__code:'<BackButtonProvider pathname="/current/url">\n  <BackButton\n    baseComponent={Button}\n    as="a"\n    href="/fallback-link"\n    icon="arrow"\n  >\n    Back button\n  </BackButton>\n  <br />\n  <br />\n  <BackButton baseComponent={TextLink} as="a" href="/fallback-link">\n    Backlink\n  </BackButton>\n</BackButtonProvider>',__scope:(t={props:m,DefaultLayout:o.a,Playground:r.c,Props:r.d,InlineList:i.a,BackButton:c.b,BackButtonProvider:c.a,Button:b.a,TextLink:p.a},t.DefaultLayout=o.a,t._frontmatter=l,t),mdxType:"Playground"},Object(a.b)(c.a,{pathname:"/current/url",mdxType:"BackButtonProvider"},Object(a.b)(c.b,{baseComponent:b.a,as:"a",href:"/fallback-link",icon:"arrow",mdxType:"BackButton"},"Back button"),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(c.b,{baseComponent:p.a,as:"a",href:"/fallback-link",mdxType:"BackButton"},"Backlink"))),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(r.d,{of:c.b,mdxType:"Props"}))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/BackButton/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-back-button-readme-mdx-d8efaa09f607e05fa81f.js.map