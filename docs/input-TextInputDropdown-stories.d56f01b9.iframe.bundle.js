"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[208],{"./src/input/TextInputDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInputDropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),TextInputDropdown=__webpack_require__("./src/input/TextInputDropdown.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInputDropdown_stories={component:TextInputDropdown.h,title:"Input/TextInputDropdown",decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"muncher-input-drop-down-story",children:(0,jsx_runtime.jsx)(Story,{})})]},Default=args=>{const[showContent,setShowContent]=(0,react.useState)(!1),[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsxs)("div",{className:"muncher-dropdown-story",children:[(0,jsx_runtime.jsx)("span",{children:"a long text "}),(0,jsx_runtime.jsxs)(TextInputDropdown.h,{...args,showContent,setShowContent,handleInputChange:value=>{setValue(value)},value,label:"country",required:!0,error:"This is an error",children:[(0,jsx_runtime.jsx)("p",{children:"Drop down content"}),(0,jsx_runtime.jsx)("p",{children:"Drop down content"}),(0,jsx_runtime.jsx)("p",{children:"Drop down content"}),(0,jsx_runtime.jsx)("p",{children:"Drop down content"}),(0,jsx_runtime.jsx)("p",{onClick:()=>{setValue("Tese"),setShowContent(!1)},children:"Drop down content"})]})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [showContent, setShowContent] = useState(false);\n  const [value, setValue] = useState("");\n  return <div className="muncher-dropdown-story">\n            <span>a long text&nbsp;</span>\n            <TextInputDropdown {...args} showContent={showContent} setShowContent={setShowContent} handleInputChange={value => {\n      setValue(value);\n    }} value={value} label="country" required={true} error={"This is an error"}>\n                <p>Drop down content</p>\n                <p>Drop down content</p>\n                <p>Drop down content</p>\n                <p>Drop down content</p>\n                <p onClick={() => {\n        setValue("Tese");\n        setShowContent(false);\n      }}>Drop down content</p>\n\n            </TextInputDropdown>\n        </div>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);