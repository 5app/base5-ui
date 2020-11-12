(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{sH2e:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t("Fcif"),a=t("+I+c"),r=t("mXGw"),u=t("/FXl"),i=t("TjRS"),b=t("ZFoC"),s=t("+Sxb"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Combobox/README.mdx"}});var l={_frontmatter:c},m=i.a;function p(e){var n,t=e.components,p=Object(a.a)(e,["components"]);return Object(u.b)(m,Object(o.a)({},l,p,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"combobox"},"Combobox"),Object(u.b)("p",null,"An accessible combobox component that can be used with any input element."),Object(u.b)("p",null,"Implemented based on the recommendations from the ",Object(u.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"}),"WAI-ARIA Authoring Practices 1.2 working draft"),"."),Object(u.b)("h2",{id:"examples"},"Examples"),Object(u.b)(b.c,{__position:0,__code:"() => {\n  const defaultOptions = [\n    'Apple',\n    'Apricot',\n    'Banana',\n    'Blueberry',\n    'Cherry',\n    'Fig',\n    'Feijoa',\n    'Gooseberry',\n    'Jackfruit',\n    'Jujube',\n    'Kiwi',\n    'Kumquat',\n    'Lingonberry',\n    'Lychee',\n    'Mandarin',\n    'Mango',\n    'Melon',\n    'Nectarine',\n    'Orange',\n    'Papaya',\n    'Passion Fruit',\n    'Pear',\n    'Persimmon',\n    'Physalis',\n    'Pineapple',\n    'Plum',\n    'Pomegranate',\n    'Pomelo',\n    'Raspberry',\n    'Starfruit',\n    'Strawberry',\n    'Watermelon',\n    'Wumpa',\n  ]\n  const inputRef = React.useRef()\n  const [value, setValue] = React.useState('')\n  const [options, setOptions] = React.useState(defaultOptions)\n  React.useEffect(() => {\n    const filteredOptions = defaultOptions.filter(option =>\n      option.toLowerCase().includes(value.toLowerCase()),\n    )\n    setOptions(filteredOptions)\n  }, [value])\n  return (\n    <form>\n      <label htmlFor=\"fruit-selector\" style={{ display: 'block' }}>\n        Pick a fruit\n      </label>\n      <Combobox\n        id=\"fruit-selector\"\n        inputValue={value}\n        resultCount={options.length}\n        shouldShowStatusMessage={!options.length}\n        onSelect={selectedItem => {\n          setValue(selectedItem.value)\n          inputRef.current.focus()\n        }}\n      >\n        <ComboboxInput\n          ref={inputRef}\n          onChange={e => setValue(e.target.value)}\n        />\n        <ComboboxMenu aria-label=\"Fruits\">\n          {options.map(item => (\n            <ComboboxMenuItem key={item}>{item}</ComboboxMenuItem>\n          ))}\n        </ComboboxMenu>\n      </Combobox>\n    </form>\n  )\n}",__scope:(n={props:p,DefaultLayout:i.a,Playground:b.c,Props:b.d,Combobox:s.a,ComboboxInput:s.b,ComboboxMenu:s.c,ComboboxMenuItem:s.d},n.DefaultLayout=i.a,n._frontmatter=c,n),mdxType:"Playground"},(function(){var e=["Apple","Apricot","Banana","Blueberry","Cherry","Fig","Feijoa","Gooseberry","Jackfruit","Jujube","Kiwi","Kumquat","Lingonberry","Lychee","Mandarin","Mango","Melon","Nectarine","Orange","Papaya","Passion Fruit","Pear","Persimmon","Physalis","Pineapple","Plum","Pomegranate","Pomelo","Raspberry","Starfruit","Strawberry","Watermelon","Wumpa"],n=r.useRef(),t=r.useState(""),o=t[0],a=t[1],i=r.useState(e),b=i[0],c=i[1];return r.useEffect((function(){var n=e.filter((function(e){return e.toLowerCase().includes(o.toLowerCase())}));c(n)}),[o]),Object(u.b)("form",null,Object(u.b)("label",{htmlFor:"fruit-selector",style:{display:"block"}},"Pick a fruit"),Object(u.b)(s.a,{id:"fruit-selector",inputValue:o,resultCount:b.length,shouldShowStatusMessage:!b.length,onSelect:function(e){a(e.value),n.current.focus()},mdxType:"Combobox"},Object(u.b)(s.b,{ref:n,onChange:function(e){return a(e.target.value)},mdxType:"ComboboxInput"}),Object(u.b)(s.c,{"aria-label":"Fruits",mdxType:"ComboboxMenu"},b.map((function(e){return Object(u.b)(s.d,{key:e,mdxType:"ComboboxMenuItem"},e)})))))})),Object(u.b)("h2",{id:"props"},"Props"),Object(u.b)(b.d,{of:s.a,mdxType:"Props"}))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Combobox/README.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-combobox-readme-mdx-dd2c7a788b03501b4fa0.js.map