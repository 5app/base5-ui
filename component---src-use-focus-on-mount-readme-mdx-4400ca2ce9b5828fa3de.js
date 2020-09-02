(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{ZPkA:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return p})),o.d(n,"default",(function(){return m}));var t=o("Fcif"),a=o("+I+c"),c=o("mXGw"),s=o("/FXl"),i=o("TjRS"),u=o("ZFoC"),l=o("nraw"),r=o("/+8G"),b=o("aTK6"),p=(o("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/useFocusOnMount/README.mdx"}});var d={_frontmatter:p},f=i.a;function m(e){var n,o=e.components,m=Object(a.a)(e,["components"]);return Object(s.b)(f,Object(t.a)({},d,m,{components:o,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"usefocusonmount"},"useFocusOnMount"),Object(s.b)("p",null,"A hook that will focus a chosen element when the component it is in is mounted, and crucially, will move focus back to where it was before when the component unmounts."),Object(s.b)("p",null,"This is useful for moving focus into non-modal dialogs (for modal dialogs, please use the Modal component)."),Object(s.b)("p",null,"Note: This hook can only restore focus to the previously focused element if that element has not been unmounted or replaced by the dialog. If your design requires this, you can additionally use the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"src-use-return-to-init-effect-readme"}),Object(s.b)("inlineCode",{parentName:"a"},"useReturnToInitEffect")," hook")," in the parent component to explicitly set focus when the dialog is closed."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"See below for a live example of the ",Object(s.b)("inlineCode",{parentName:"p"},"Dialog")," component in action."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'function Dialog({onClose}) {\n    const buttonRef = useFocusOnMount();\n    return (\n        <Box role="dialog" aria-labelledby="heading" p="s" background="shaded">\n            <Stack spacing="s">\n                <Text as="h2" bold size="l" id="heading">\n                    Do you really want to hrmpf!?\n                </Text>\n                <InlineList spacing="s">\n                    <Button\n                        ref={buttonRef}\n                        icon="x"\n                        size="medium"\n                        onClick={onClose}\n                    >\n                        Nah\n                    </Button>\n                    <Button\n                        icon="ok"\n                        color="primary"\n                        size="medium"\n                        onClick={onClose}\n                    >\n                        Sure\n                    </Button>\n                </InlineList>\n            </Stack>\n        </Box>\n    );\n}\n')),Object(s.b)(u.c,{__position:0,__code:'() => {\n  const [hasDialog, setHasDialog] = React.useState(false)\n  return (\n    <Stack spacing="s">\n      <Button\n        icon="eye-open"\n        isActive={hasDialog}\n        onClick={() => setHasDialog(prev => !prev)}\n      >\n        Show non-modal dialog\n      </Button>\n      {hasDialog && <Dialog onClose={() => setHasDialog(false)} />}\n    </Stack>\n  )\n}',__scope:(n={props:m,DefaultLayout:i.a,Playground:u.c,Props:u.d,Button:l.a,Stack:r.a,Dialog:b.a},n.DefaultLayout=i.a,n._frontmatter=p,n),mdxType:"Playground"},(function(){var e=c.useState(!1),n=e[0],o=e[1];return Object(s.b)(r.a,{spacing:"s",mdxType:"Stack"},Object(s.b)(l.a,{icon:"eye-open",isActive:n,onClick:function(){return o((function(e){return!e}))},mdxType:"Button"},"Show non-modal dialog"),n&&Object(s.b)(b.a,{onClose:function(){return o(!1)},mdxType:"Dialog"}))})),Object(s.b)("h2",{id:"options"},"Options"),Object(s.b)("h3",{id:"using-your-own-ref"},"Using your own ref"),Object(s.b)("p",null,"Instead of attaching the ref returned by the hook, you can also pass in your own ref to the hook."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"function Dialog() {\n    const buttonRef = React.useRef();\n    useFocusOnMount({ref: buttonRef});\n    return (\n        // Your Dialog code\n    )\n}\n")),Object(s.b)("h3",{id:"hooking-into-onfocus-and-onrestorefocus"},"Hooking into ",Object(s.b)("inlineCode",{parentName:"h3"},"onFocus")," and ",Object(s.b)("inlineCode",{parentName:"h3"},"onRestoreFocus")),Object(s.b)("p",null,"If you need more control over what happens when focus is (re-)set, you can pass in your own callbacks ",Object(s.b)("inlineCode",{parentName:"p"},"onFocus")," and ",Object(s.b)("inlineCode",{parentName:"p"},"onRestoreFocus"),". These will be called after focus was set. They are called with the focused element."),Object(s.b)("p",null,"This can be useful if, for example, you want to set focus to an input field, and not just move focus to it, but also select its contents."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"function Dialog() {\n    const inputRef = useFocusOnMount({\n        onFocus: focusedElement => focusedElement.select(),\n    });\n\n    return (\n        // Your Dialog code\n    )\n}\n")),Object(s.b)("h3",{id:"disabling-the-hook"},"Disabling the hook"),Object(s.b)("p",null,"You can disable the hook by passing in the ",Object(s.b)("inlineCode",{parentName:"p"},"disable")," option:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"function Dialog({focusInputOnMount}) {\n    const inputRef = useFocusOnMount({\n        disable: focusInputOnMount,\n    });\n\n    return (\n        // Your Dialog code\n    )\n}\n")))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/useFocusOnMount/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-focus-on-mount-readme-mdx-4400ca2ce9b5828fa3de.js.map