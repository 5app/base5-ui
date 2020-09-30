(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{sRFY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n("Fcif"),r=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("TjRS"),s=(n("ZFoC"),n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/useAriaFeedProps/README.mdx"}});var p={_frontmatter:s},c=o.a;function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"useariafeedprops"},"useAriaFeedProps"),Object(i.b)("p",null,"A React hook for implementing the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#feed"}),"WAI-ARIA 'Feed' pattern"),"."),Object(i.b)("p",null,"Supports the keyboard shortcuts recommended in the references:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Page up/down")," to navigate to the previous/next item"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Ctrl + Home/End")," to navigate to the first/last item\n(To do: Provide a way to pass in refs to first focusable elements before and after the feed & focus those instead)")),Object(i.b)("h2",{id:"example-usage"},"Example usage"),Object(i.b)("p",null,"Initialise ",Object(i.b)("inlineCode",{parentName:"p"},"useAriaFeedProps")," with an object containing the ",Object(i.b)("inlineCode",{parentName:"p"},"isLoading")," state of your feed, and, if available, the ",Object(i.b)("inlineCode",{parentName:"p"},"totalItemCount")," of the feed."),Object(i.b)("p",null,"The hook returns two ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters"}),"prop getters")," that have to be spread onto the wrapper of the feed and each item ('article')."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const {getWrapperProps, getItemProps} = useAriaFeedProps({\n    isLoading: hasMoreItems,\n    totalItemCount,\n});\n\nreturn (\n    <>\n        <h1 id={HEADING_ID}>My thrilling feed</h1>\n        <div {...getWrapperProps({labelledBy: HEADING_ID})}>\n            {items.map((item, index) => {\n                const ITEM_HEADING_ID = `${item.id}-title`;\n                const ITEM_DESC_ID = `${item.id}-description`;\n                return (\n                    <article\n                        key={item.id}\n                        {...getItemProps({\n                            index,\n                            labelledBy: ITEM_HEADING_ID,\n                            describedBy: ITEM_HEADING_ID,\n                        })}\n                    >\n                        <h2 id={ITEM_HEADING_ID}>{item.name}</h2>\n                        <p id={ITEM_DESC_ID}>{item.desc}</p>\n                    </article>\n                );\n            })}\n        </div>\n    </>\n);\n")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/useAriaFeedProps/README.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-aria-feed-props-readme-mdx-a17ae23858296acdad1f.js.map