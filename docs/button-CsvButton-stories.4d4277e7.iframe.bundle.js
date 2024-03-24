"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[1676],{"./src/button/CsvButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _CsvButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/button/CsvButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_CsvButton__WEBPACK_IMPORTED_MODULE_0__.f,title:"Buttons/CSV Button",render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_CsvButton__WEBPACK_IMPORTED_MODULE_0__.f,{...args,children:"Button"})},Default={args:{title:"Download Csv",variant:"secondary",header:["Name","Email"],filename:"download",data:[["Sam Jackson","sam@gmail.com"],["Bob Levy","levy_bob@gmail.com"]]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Download Csv',\n    variant: 'secondary',\n    header: ['Name', 'Email'],\n    filename: 'download',\n    data: [['Sam Jackson', 'sam@gmail.com'], ['Bob Levy', 'levy_bob@gmail.com']]\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=_ref=>{let{type,variant,size,title,active,disabled,rounded,onClick,onMouseDown,onMouseEnter,onMouseLeave,children,...props}=_ref;const className="muncher-button"+(type&&"nav"===type?" muncher-button--nav":"")+(variant?" muncher-button--"+variant:"")+(size?" muncher-button--"+size:"")+(active?" muncher-button--active":"")+(rounded?" muncher-button--rounded":"");return(0,jsx_runtime.jsx)("button",{type:type&&"nav"!==type?type:"button",className,disabled:!!disabled,title,onClick,onMouseDown,onMouseEnter,onMouseLeave,...props,children})};Button_Button.defaultProps={type:"button",size:"medium"};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"reset"'},{value:'"button"'},{value:'"submit"'},{value:'"nav"'}]}},onClick:{defaultValue:null,description:"button click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"button mouse down handler",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/CsvButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>CsvButton_CsvButton});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/button/Button.tsx"),Icon=__webpack_require__("./src/icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CsvButton_CsvButton=_ref=>{let{header,data,filename,variant,size,title,active,disabled,rounded}=_ref;const csv=encodeURI("data:text/csv;charset=utf-8,"+header.join(",")+"\n"+data.map((row=>row.join(","))).join("\n"));return(0,jsx_runtime.jsx)("div",{className:"muncher-csv",children:(0,jsx_runtime.jsx)(Button.z,{variant,size,active,disabled,rounded,children:(0,jsx_runtime.jsx)("a",{href:csv,download:filename+".csv",children:(0,jsx_runtime.jsx)(Icon.J,{name:"download",children:title||"Download"})})})})};try{CsvButton_CsvButton.displayName="CsvButton",CsvButton_CsvButton.__docgenInfo={description:"",displayName:"CsvButton",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[][]"}},filename:{defaultValue:null,description:"",name:"filename",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/CsvButton.tsx#CsvButton"]={docgenInfo:CsvButton_CsvButton.__docgenInfo,name:"CsvButton",path:"src/button/CsvButton.tsx#CsvButton"})}catch(__react_docgen_typescript_loader_error){}}}]);