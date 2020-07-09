(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{xVui:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return d})),o.d(n,"default",(function(){return p}));var a=o("Fcif"),t=o("+I+c"),l=(o("mXGw"),o("/FXl")),r=o("TjRS"),i=o("ZFoC"),s=(o("oGIA"),o("iY1x")),d=(o("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Modal/README.mdx"}});var c={_frontmatter:d},b=r.a;function p(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},c,o,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"modal"},"Modal"),Object(l.b)("p",null,"React components and hooks for building accessible modals (dialogs)."),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Supports multiple (stacked) modals"),Object(l.b)("li",{parentName:"ul"},"Handles focus management:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Contain keyboard focus inside of the topmost modal"),Object(l.b)("li",{parentName:"ul"},"Return keyboard focus to the element that triggered the modal after it is closed"),Object(l.b)("li",{parentName:"ul"},"Contain screen reader navigation within the topmost modal"))),Object(l.b)("li",{parentName:"ul"},"Close the topmost modal when the ",Object(l.b)("kbd",null,"Esc")," key is pressed"),Object(l.b)("li",{parentName:"ul"},'Prevent scrolling "behind" the modal')),Object(l.b)("h2",{id:"demo"},"Demo"),Object(l.b)("p",null,"View a demo of the modal in action on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/base5-ui-modal-example-hdjk9?file=/src/App.js"}),"Codesandbox"),"."),Object(l.b)("h2",{id:"how-to-use"},"How to use"),Object(l.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(l.b)("p",null,"Wrap your app with the ",Object(l.b)("inlineCode",{parentName:"p"},"ModalManager")," and ",Object(l.b)("inlineCode",{parentName:"p"},"BodyScrollLock")," components. ",Object(l.b)("inlineCode",{parentName:"p"},"ModalManager")," does not render an element to the DOM and can be as high up as you want. It keeps track of all the open modals and makes sure that focus is properly locked & restored."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"BodyScrollLock")," renders a ",Object(l.b)("inlineCode",{parentName:"p"},"div")," by default and should wrap the main content of your app. The HTML elements of your modals need to be rendered outside of this container. (If you use base5-ui's Portal or the built-in Modal component, this will be the case by default.) You can customise the rendered element using the ",Object(l.b)("inlineCode",{parentName:"p"},"as")," prop as seen below."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {ModalManager, BodyScrollLock} from 'base5-ui/Modal';\n\nfunction App() {\n    return (\n        <ModalManager>\n            <BodyScrollLock as=\"main\">\n                {/* The rest of your app */}\n            </BodyScrollLock>\n        </ModalManager>\n    );\n}\n")),Object(l.b)("h4",{id:"bodyscrolllock-styling-requirements"},"BodyScrollLock styling requirements"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"BodyScrollLock")," component prevents the page body from being scrolled when a modal is open. The method it uses is very robust and works even if your app has elements with a fixed position, like navigation bars."),Object(l.b)("p",null,"One trade-off to make this work seamlessly is that we require the vertical scrollbar on your root element to be visible always (even if the page content isn't long enough to cause a scrollbar). Without the below CSS, opening a modal in your app may cause the page in the background to shift slightly as the scrollbar disappears."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"html {\n    overflow-y: scroll;\n}\n")),Object(l.b)("p",null,"(Btw: Having this CSS on your page may be a good idea anyway – it ensures that centered elements don't jump around ever so slightly when navigating between long pages with a vertical scrollbar and short pages without one.)"),Object(l.b)("h3",{id:"rendering-modals"},"Rendering modals"),Object(l.b)("p",null,"Once the above preparations are done, you can either use the built-in ",Object(l.b)("inlineCode",{parentName:"p"},"Modal")," component (built on styled-components) to render your modals, or build your own using the ",Object(l.b)("inlineCode",{parentName:"p"},"useModalManager")," hook."),Object(l.b)("p",null,"Keep in mind that you're responsible for opening & closing your modals. We recommend that you keep your modal display logic tied to a router location or React state, as shown below."),Object(l.b)("h4",{id:"modal-component-example"},"Modal component example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Modal from \'base5-ui/Modal\';\n\nfunction MyPage() {\n    const [hasModal, setHasModal] = useState(false);\n\n    function toggleModal() {\n        setHasModal(prev => !prev);\n    }\n\n    return (\n        <>\n            <Button onClick={toggleModal}>Toggle Modal</Button>\n            {hasModal && (\n                <Modal\n                    name="my-modal"\n                    onRequestClose={toggleModal}\n                    aria-labelledby="heading-id"\n                >\n                    <Card>\n                        <Heading id="heading-id">My first modal dialog</Heading>\n                        <p>This is a modal.</p>\n                        <Button onClick={toggleModal}>Got it.</Button>\n                    </Card>\n                </Modal>\n            )}\n        </>\n    );\n}\n')),Object(l.b)("h4",{id:"modal-props"},"Modal props"),Object(l.b)(i.d,{of:s.a,mdxType:"Props"}),Object(l.b)("h4",{id:"custom-modal-example"},"Custom modal example"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Modal")," component is a wrapper around the ",Object(l.b)("inlineCode",{parentName:"p"},"useModalManager")," hook and the external dependency ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/theKashey/react-focus-lock"}),"FocusLock"),". If you want to customise how your modals are rendered, you can easily do so by re-composing its elements in a different way. The example below is a slightly simplified version of the built-in ",Object(l.b)("inlineCode",{parentName:"p"},"Modal")," component that you can use as a guide."),Object(l.b)("p",null,"Be sure to include the ",Object(l.b)("inlineCode",{parentName:"p"},'role="dialog"')," and ",Object(l.b)("inlineCode",{parentName:"p"},'aria-modal="true"')," attributes on your modal component, as well as ",Object(l.b)("inlineCode",{parentName:"p"},"aria-label")," or ",Object(l.b)("inlineCode",{parentName:"p"},"aria-labelledby"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Portal from 'base5-ui/Portal';\nimport CenterContent from 'base5-ui/CenterContent';\nimport {useModalManager} from 'base5-ui/Modal/ModalManager';\nimport FocusLock from 'react-focus-lock';\n\nconst ModalWrapper = /* Your custom modal wrapper styling. */\nconst Overlay = /* Your custom overlay styling. */\n\nfunction Modal({children, name, onRequestClose, ...otherProps}) {\n    /**\n     * useModalManager returns a ref that must be\n     * passed to the modal wrapper component, and\n     * an `isAtTop` flag that's true when this modal\n     * is at the top (when multiple modals are open).\n     */\n    const {modalRef, isAtTop} = useModalManager({\n        name,\n        onRequestClose,\n    });\n\n    return (\n        <Portal>\n            <ModalWrapper\n                ref={modalRef}\n                id={name}\n                {...otherProps}\n                role=\"dialog\"\n                aria-modal=\"true\"\n            >\n                <CenterContent fillParent>\n                    <FocusLock>\n                        {isAtTop && <Overlay onClick={onRequestClose} />}\n                        {children}\n                    </FocusLock>\n                </CenterContent>\n            </ModalWrapper>\n        </Portal>\n    );\n}\n")),Object(l.b)("h3",{id:"preventing-content-outside-of-modals-from-being-hidden-to-screen-readers"},"Preventing content outside of modals from being hidden to screen readers"),Object(l.b)("p",null,"When a modal is open, the ",Object(l.b)("inlineCode",{parentName:"p"},"aria-hidden")," attribute will be applied to any elements outside of it. This is done to prevent users of screen reader software from accidentally navigating outside of the modal boundaries."),Object(l.b)("p",null,"If you want to prevent some elements (such as a live region used for accessible status updates) from being hidden in this way, you can wrap them in the ",Object(l.b)("inlineCode",{parentName:"p"},"PreventModalAriaHidden")," component:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {PreventModalAriaHidden} from 'base5-ui/Modal';\n\n<PreventModalAriaHidden>\n    <Status>...</Status>\n<PreventModalAriaHidden>\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Modal/README.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-modal-readme-mdx-6b4a4bcf39c4aa23b0fd.js.map