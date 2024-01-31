/*! For license information please see input-Textarea-stories.74fa1da8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[4284],{"./src/input/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Textarea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/input/Textarea.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Textarea__WEBPACK_IMPORTED_MODULE_0__.g,title:"Input/Textarea",render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...args})},Default={args:{name:"question",placeholder:"Type your question"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "question",\n    placeholder: "Type your question"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/input/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=_ref=>{let{label,onClick,id,required}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:id,onClick,children:[label,required?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"required",children:"*"}):""]})};Label.defaultProps={required:!1};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{id:{defaultValue:null,description:"name of the element that uses the label",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/input/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Label__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/input/assets/Input.scss"),__webpack_require__("./src/input/Label.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea=_ref=>{let{name,label,required,readOnly,rows,maxLength,focus,placeholder,onChange,value,...props}=_ref;const[textareaValue,setTextareaValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"muncher-input--div",children:[label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_2__._,{label,required,id:name}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea",{id:name,className:"muncher-textarea",rows,maxLength,name,autoFocus:focus,value,placeholder,onChange:event=>{setTextareaValue(event.target.value),onChange&&onChange(event)},required,readOnly,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:[textareaValue?maxLength?maxLength-textareaValue.length:1e3:maxLength," characters left"]})]})};Textarea.defaultProps={readOnly:!1,focus:!1,rows:6,maxLength:1e3};try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"6"},description:"",name:"rows",required:!1,type:{name:"number"}},maxLength:{defaultValue:{value:"1000"},description:"",name:"maxLength",required:!1,type:{name:"number"}},focus:{defaultValue:{value:"false"},description:"",name:"focus",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLTextAreaElement>) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/input/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/assets/Input.scss":()=>{},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);