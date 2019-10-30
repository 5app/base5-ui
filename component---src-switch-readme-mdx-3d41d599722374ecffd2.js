(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2blx":function(t,n,e){"use strict";e("PJhk");var r=e("W0B4"),i=e.n(r),c=e("UutA"),a=e("HhCC");function o(){var t=f(["\n\t\t\t/* Use to align icons with surrounding body text */\n\t\t\tposition: relative;\n\t\t\ttop: -0.12em;\n\t\t"]);return o=function(){return t},t}function u(){var t=f(["\n\t\t\tmargin-right: ",";\n\t\t"]);return u=function(){return t},t}function l(){var t=f(["\n\t\t\tmargin-left: ",";\n\t\t"]);return l=function(){return t},t}function s(){var t=f(["\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\n\tflex: 0 0 auto;\n\t/* Using ems makes the icon scale along with the surrounding font size */\n\twidth: 1em;\n\theight: 1em;\n\n\t","\n\t","\n\n\tfont-size: ",";\n\n\t","\n"]);return s=function(){return t},t}function f(t,n){return n||(n=t.slice(0)),t.raw=n,t}var b=c.d.svg.attrs({role:"presentation"})(s(),(function(t){return t.spacingLeft&&Object(c.c)(l(),t.spacingLeft)}),(function(t){return t.spacingRight&&Object(c.c)(u(),t.spacingRight)}),(function(t){return 0!==t.scale?Object(a.a)(18*t.scale):Object(a.b)(18)}),(function(t){return t.vAlign&&Object(c.c)(o())}));b.defaultProps={scale:1},b.propTypes={scale:i.a.number,vAlign:i.a.bool,spacingLeft:i.a.oneOfType([i.a.string,i.a.func]),spacingRight:i.a.oneOfType([i.a.string,i.a.func])},n.a=b,void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}}),void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"Svg",filename:"src/icons/BaseSvg.js"}})},"6krs":function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return l})),e.d(n,"default",(function(){return b}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk"),e("mXGw");var r=e("SAVP"),i=e("TjRS"),c=e("ZFoC"),a=e("inYB"),o=e("KhRu");e("aD51");function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Switch/README.mdx"}});var s={_frontmatter:l},f=i.a;function b(t){var n=t.components,e=function(t,n){if(null==t)return{};var e,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["components"]);return Object(r.b)(f,u({},s,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"switch"},"Switch"),Object(r.b)("p",null,"Simple accessible mobile-style switch that can be used like an ",Object(r.b)("inlineCode",{parentName:"p"},'<input type="checkbox" />')," element."),Object(r.b)(c.c,{__position:0,__code:'<InlineList spacing="s">\n  On: <Switch checked />\n  Disabled On: <Switch checked disabled />\n  Off: <Switch checked={false} />\n  Disabled Off: <Switch disabled />\n</InlineList>',__scope:{props:e,DefaultLayout:i.a,Playground:c.c,InlineList:a.a,Switch:o.a},mdxType:"Playground"},Object(r.b)(a.a,{spacing:"s",mdxType:"InlineList"},"On: ",Object(r.b)(o.a,{checked:!0,mdxType:"Switch"}),"Disabled On: ",Object(r.b)(o.a,{checked:!0,disabled:!0,mdxType:"Switch"}),"Off: ",Object(r.b)(o.a,{checked:!1,mdxType:"Switch"}),"Disabled Off: ",Object(r.b)(o.a,{disabled:!0,mdxType:"Switch"}))))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Switch/README.mdx"}}),b.isMDXComponent=!0},KhRu:function(t,n,e){"use strict";e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("5hJT");var r=e("mXGw"),i=e("UutA"),c=e("BEJJ"),a=e("HhCC"),o=e("WfUm"),u=e("aD51");function l(){return(l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(){var t=h(["\n\t\t\topacity: 1;\n\t\t\ttransform: none;\n\t\t\ttransition: all 100ms ease-out 150ms;\n\t\t"]);return s=function(){return t},t}function f(){var t=h(["\n\tposition: relative;\n\ttop: ",";\n\tleft: ",";\n\n\topacity: 0;\n\ttransform: translateY(-100%) rotate(45deg);\n\twill-change: transform, opacity;\n\ttransition: transform 0s linear 150ms, opacity 100ms linear;\n\n\t","\n"]);return f=function(){return t},t}function b(){var t=h(["\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 50%;\n\tborder-radius: 100%;\n\toverflow: hidden;\n\n\tcolor: ",";\n\tbackground-color: ",";\n\n\twill-change: transform;\n\ttransition: transform 150ms ease-out;\n\n\tinput:checked + & {\n\t\tbackground-color: ",";\n\t\ttransform: translateX(100%);\n\t}\n\n\tinput:disabled + & {\n\t\topacity: 0.5;\n\t}\n"]);return b=function(){return t},t}function d(){var t=h(["\n\t\t\t&:focus-within,\n\t\t\t&:hover {\n\t\t\t\tbackground: ",";\n\t\t\t}\n\t\t"]);return d=function(){return t},t}function p(){var t=h(["\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 2.4rem;\n\theight: 1.4rem;\n\tpadding: ",";\n\n\tborder: 1px solid ",";\n\tborder-radius: 1.4rem;\n\n\ttransition: all 250ms linear;\n\tbox-sizing: border-box;\n\n\t","\n\n\t&:focus-within {\n\t\tborder-color: ",";\n\t}\n"]);return p=function(){return t},t}function m(){var t=h(["\n\tposition: absolute;\n\topacity: 0;\n"]);return m=function(){return t},t}function h(t,n){return n||(n=t.slice(0)),t.raw=n,t}var O=i.d.input(m()),g=i.d.label(p(),Object(a.b)(2),(function(t){return Object(c.a)(t.theme.shade,.3)}),(function(t){return!t.disabled&&Object(i.c)(d(),(function(t){return Object(c.a)(t.theme.shade,t.theme.shadeStrength)}))}),(function(t){return t.theme.links})),j=i.d.span(b(),(function(t){return Object(c.b)(t.theme.links)}),(function(t){return Object(c.a)(t.theme.text,t.theme.textDimStrength)}),(function(t){return t.theme.links})),v=Object(i.d)(o.default)(f(),Object(a.b)(1),Object(a.b)(1),(function(t){return t.checked&&Object(i.c)(s())}));n.a=Object(r.forwardRef)((function(t,n){var e=t.checked,r=t.disabled,i=t.id,c=function(t,n){if(null==t)return{};var e,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["checked","disabled","id"]);return Object(u.c)(g,{htmlFor:i,disabled:r},Object(u.c)(O,l({type:"checkbox",ref:n,id:i,checked:e,disabled:r},c)),Object(u.c)(j,null,Object(u.c)(v,{scale:.8,checked:e})))}))},WfUm:function(t,n,e){"use strict";e.r(n);e("PJhk"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("5hJT");var r=e("mXGw"),i=e("2blx"),c=e("aD51");function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var o=Object(r.forwardRef)((function(t,n){var e=t.size,r=t.color,o=function(t,n){if(null==t)return{};var e,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["size","color"]);return Object(c.c)(i.a,a({},o,{ref:n,viewBox:"0 0 18 18",width:e,height:e,fill:r,fillRule:"evenodd",clipRule:"evenodd"}),Object(c.c)("path",{d:"M8.467,12.071l5.254,-9.1c0.337,-0.584 1.085,-0.784 1.668,-0.447c0.584,0.337 0.784,1.085 0.447,1.669l-6.045,10.471c-0.241,0.416 -0.69,0.638 -1.14,0.608c-0.369,0.024 -0.744,-0.118 -1.004,-0.419l-4.349,-5.016c-0.441,-0.51 -0.386,-1.282 0.123,-1.723c0.51,-0.442 1.282,-0.387 1.723,0.123l3.323,3.834Z"}))}));o.displayName="OkIcon",o.defaultProps={size:18,color:"currentcolor"},n.default=o,void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"OkIcon",filename:"src/icons/Ok.js"}}),void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"OkIcon",filename:"src/icons/Ok.js"}})},inYB:function(t,n,e){"use strict";e("PJhk"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO");var r=e("mXGw"),i=e.n(r),c=e("UutA"),a=e("aD51");function o(){var t=d(["\n\t\t\t\t&:not(:last-of-type)::after {\n\t\t\t\t\tcontent: '·';\n\t\t\t\t\tmargin: 0 0.35em;\n\t\t\t\t}\n\t\t\t"]);return o=function(){return t},t}function u(){var t=d(["\n\t\t\t\t&:not(:last-of-type)::after {\n\t\t\t\t\tcontent: ',';\n\t\t\t\t\tmargin-right: 0.3em;\n\t\t\t\t}\n\t\t\t"]);return u=function(){return t},t}function l(){var t=d(["\n\t\t\t\tpadding-left: ",";\n\t\t\t\tpadding-bottom: ",";\n\t\t\t"]);return l=function(){return t},t}function s(){var t=d(["\n\t\t\t/* Compensate for Item's padding */\n\t\t\tmargin-left: -",";\n\t\t\tmargin-bottom: -",";\n\t\t"]);return s=function(){return t},t}function f(){var t=d(["\n\tlist-style: none;\n\tmargin: 0;\n    padding: 0;\n\n\t","\n\n\t& > "," {\n\t\tvertical-align: ",";\n\n\t\t","\n\n\t\t","\n\n\t\t","\n\t}\n"]);return f=function(){return t},t}function b(){var t=d(["\n\tdisplay: inline-block;\n\tmax-width: 100%;\n"]);return b=function(){return t},t}function d(t,n){return n||(n=t.slice(0)),t.raw=n,t}var p=c.d.li(b()),m=c.d.ul(f(),(function(t){return t.spacing&&Object(c.c)(s(),(function(t){return t.theme.globals.spacing[t.spacing]}),(function(t){return t.theme.globals.spacing[t.spacing]}))}),p,(function(t){return t.align||"top"}),(function(t){return t.spacing&&Object(c.c)(l(),(function(t){return t.theme.globals.spacing[t.spacing]}),(function(t){return t.theme.globals.spacing[t.spacing]}))}),(function(t){return"comma"===t.splitBy&&Object(c.c)(u())}),(function(t){return"dot"===t.splitBy&&Object(c.c)(o())})),h=function(t){var n=t.children,e=function(t,n){if(null==t)return{};var e,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["children"]);return Object(a.c)(m,e,i.a.Children.map(n,(function(t,n){if(t)return Object(a.c)(p,{key:n},t)})))};h.Wrapper=m,h.Item=p,n.a=h,h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"InlineList",filename:"src/InlineList/index.js"}}),h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"InlineList",filename:"src/InlineList/index.js"}})}}]);
//# sourceMappingURL=component---src-switch-readme-mdx-3d41d599722374ecffd2.js.map