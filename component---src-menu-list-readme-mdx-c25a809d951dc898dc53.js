(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{nUPZ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return m})),t.d(n,"default",(function(){return f}));var i=t("Fcif"),a=t("+I+c"),o=t("mXGw"),s=t("/FXl"),r=t("TjRS"),c=t("ZFoC"),l=t("2mC/"),u=t("jhWh"),d=t("BbnS"),b=t("G16n"),m=(t("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/MenuList/README.mdx"}});var p={_frontmatter:m},O=r.a;function f(e){var n,t=e.components,f=Object(a.a)(e,["components"]);return Object(s.b)(O,Object(i.a)({},p,f,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"menulist"},"MenuList"),Object(s.b)("p",null,"MenuList is a set of components used for building dropdown menus:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"MenuList.Wrapper"),Object(s.b)("li",{parentName:"ul"},"MenuList.Item"),Object(s.b)("li",{parentName:"ul"},"MenuList.ItemIcon"),Object(s.b)("li",{parentName:"ul"},"MenuList.Link")),Object(s.b)("p",null,"They don't come with any built-in behaviour. See the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"src-menu-readme"}),"Menu")," and ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"src-nav-menu-readme"}),"NavMenu")," components to see the MenuList component in use."),Object(s.b)(c.c,{__position:0,__code:"() => {\n  const [highlightedItem, setHighlightedItem] = React.useState(0)\n  const [selectedItem, setSelectedItem] = React.useState(0)\n  const menuItems = [\n    { id: 0, label: 'Insert', icon: 'plus' },\n    { id: 1, label: 'Favourite', icon: 'star' },\n    { id: 2, label: 'Insights', icon: 'trending', isDisabled: true },\n    { id: 3, label: 'Download', icon: 'download' },\n  ]\n  return (\n    <PopoverCard isOpen renderInPlace>\n      <MenuList.Wrapper>\n        {menuItems.map((item, index) => (\n          <MenuList.Item key={item.id}>\n            <MenuList.Link\n              isActive={item.id === selectedItem}\n              isHighlighted={item.id === highlightedItem}\n              isDisabled={item.isDisabled}\n              onMouseEnter={() => setHighlightedItem(item.id)}\n            >\n              <MenuList.ItemIcon name={item.icon} />\n              {item.label}\n            </MenuList.Link>\n          </MenuList.Item>\n        ))}\n      </MenuList.Wrapper>\n    </PopoverCard>\n  )\n}",__scope:(n={props:f,DefaultLayout:r.a,Playground:c.c,Props:c.d,Icon:l.a,PopoverCard:u.a,TextLink:d.a,MenuList:b},n.DefaultLayout=r.a,n._frontmatter=m,n),mdxType:"Playground"},(function(){var e=o.useState(0),n=e[0],t=e[1],i=o.useState(0),a=i[0];i[1];return Object(s.b)(u.a,{isOpen:!0,renderInPlace:!0,mdxType:"PopoverCard"},Object(s.b)(b.Wrapper,null,[{id:0,label:"Insert",icon:"plus"},{id:1,label:"Favourite",icon:"star"},{id:2,label:"Insights",icon:"trending",isDisabled:!0},{id:3,label:"Download",icon:"download"}].map((function(e,i){return Object(s.b)(b.Item,{key:e.id},Object(s.b)(b.Link,{isActive:e.id===a,isHighlighted:e.id===n,isDisabled:e.isDisabled,onMouseEnter:function(){return t(e.id)}},Object(s.b)(b.ItemIcon,{name:e.icon}),e.label))}))))})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/MenuList/README.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-menu-list-readme-mdx-c25a809d951dc898dc53.js.map