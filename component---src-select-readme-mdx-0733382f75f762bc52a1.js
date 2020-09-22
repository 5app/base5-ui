(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{shIj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));var o=n("Fcif"),a=n("+I+c"),l=n("mXGw"),c=n("/FXl"),i=n("TjRS"),r=n("ZFoC"),b=n("VaD+"),p=n("yvnz"),s=(n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Select/README.mdx"}});var d={_frontmatter:s},u=i.a;function m(e){var t,n=e.components,m=Object(a.a)(e,["components"]);return Object(c.b)(u,Object(o.a)({},d,m,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"select"},"Select"),Object(c.b)("p",null,"A custom select menu component that allows users to select one option from a list of predefined options."),Object(c.b)("p",null,"This component largely follows the implementation recommendations from the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"}),"WAI-ARIA Authoring Practices 1.2 working draft"),", with adjustments made based on Sarah Higley's article ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.24a11y.com/2019/select-your-poison-part-2/"}),"Select Your Poison Part 2"),"."),Object(c.b)("p",null,"There are known issues around this pattern when using VoiceOver with Safari on macOS."),Object(c.b)(r.c,{__position:0,__code:'() => {\n  const [selectedValue, setSelectedValue] = React.useState(0)\n  return (\n    <>\n      <Text as="label" id="demo-menu-label" display="block" bold>\n        Select time period\n      </Text>\n      <Select\n        id="demo-menu"\n        labelledById="demo-menu-label"\n        value={selectedValue}\n        onChange={setSelectedValue}\n      >\n        <Option value={0}>Hourly</Option>\n        <Option value={1}>Daily</Option>\n        <Option value={2}>Weekly</Option>\n        <Option value={3}>Monthly</Option>\n        <Option value={4}>Yearly</Option>\n      </Select>\n    </>\n  )\n}',__scope:(t={props:m,DefaultLayout:i.a,Playground:r.c,Props:r.d,Text:b.a,Select:p.b,Option:p.a},t.DefaultLayout=i.a,t._frontmatter=s,t),mdxType:"Playground"},(function(){var e=l.useState(0),t=e[0],n=e[1];return Object(c.b)(l.Fragment,null,Object(c.b)(b.a,{as:"label",id:"demo-menu-label",display:"block",bold:!0,mdxType:"Text"},"Select time period"),Object(c.b)(p.b,{id:"demo-menu",labelledById:"demo-menu-label",value:t,onChange:n,mdxType:"Select"},Object(c.b)(p.a,{value:0,mdxType:"Option"},"Hourly"),Object(c.b)(p.a,{value:1,mdxType:"Option"},"Daily"),Object(c.b)(p.a,{value:2,mdxType:"Option"},"Weekly"),Object(c.b)(p.a,{value:3,mdxType:"Option"},"Monthly"),Object(c.b)(p.a,{value:4,mdxType:"Option"},"Yearly")))})),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"select-1"},"Select"),Object(c.b)(r.d,{isToggle:!0,of:p.b,mdxType:"Props"}),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)(r.d,{isToggle:!0,of:p.a,mdxType:"Props"}))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Select/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-select-readme-mdx-0733382f75f762bc52a1.js.map