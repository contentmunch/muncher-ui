"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[9298],{"./src/slider/ItemSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SingleItem:()=>SingleItem,Tranparent:()=>Tranparent,WithArrowIcon:()=>WithArrowIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/slider/assets/ItemSliderStories.scss");var _ItemSlider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/slider/ItemSlider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_ItemSlider__WEBPACK_IMPORTED_MODULE_1__.G,title:"Slider/Item Slider",decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-story",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ItemSlider__WEBPACK_IMPORTED_MODULE_1__.G,{...args})},Default={args:{sliderItems:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-story--item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://www.renaissancerentals.com/api/asset/download/1s5-NPYxlB5NRsMMhX8MB-pDsN1bqEoZ_",className:"slide"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-story--item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_",className:"slide"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-story--item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://www.renaissancerentals.com/api/asset/download/1rtcmnLUABimyLpQ6kWm2GD3kJLNMBjKB",className:"slide"})})]}},WithArrowIcon={args:{...Default.args,navIcon:"arrow"}},Tranparent={args:{...Default.args,navIcon:"arrow",navButtonWeight:1,variant:"transparent"}},SingleItem={args:{sliderItems:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_",className:"slide",width:"500",height:"300"})]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    sliderItems: [<div className="slider-story--item"><img src="https://www.renaissancerentals.com/api/asset/download/1s5-NPYxlB5NRsMMhX8MB-pDsN1bqEoZ_" className="slide" /></div>, <div className="slider-story--item"><img src="https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_" className="slide" /></div>, <div className="slider-story--item"><img src="https://www.renaissancerentals.com/api/asset/download/1rtcmnLUABimyLpQ6kWm2GD3kJLNMBjKB" className="slide" /></div>]\n  }\n}',...Default.parameters?.docs?.source}}},WithArrowIcon.parameters={...WithArrowIcon.parameters,docs:{...WithArrowIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    navIcon: "arrow"\n  }\n}',...WithArrowIcon.parameters?.docs?.source}}},Tranparent.parameters={...Tranparent.parameters,docs:{...Tranparent.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    navIcon: "arrow",\n    navButtonWeight: 1,\n    variant: "transparent"\n  }\n}',...Tranparent.parameters?.docs?.source}}},SingleItem.parameters={...SingleItem.parameters,docs:{...SingleItem.parameters?.docs,source:{originalSource:'{\n  args: {\n    sliderItems: [<img src="https://www.renaissancerentals.com/api/asset/download/1n0NNoyBnzt-nfECziwiuPxz7k-InaMq_" className="slide" width="500" height="300" />]\n  }\n}',...SingleItem.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithArrowIcon","Tranparent","SingleItem"]},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=_ref=>{let{type,variant,size,title,active,disabled,rounded,onClick,onMouseDown,onMouseEnter,onMouseLeave,children,...props}=_ref;const className="muncher-button"+(type&&"nav"===type?" muncher-button--nav":"")+(variant?" muncher-button--"+variant:"")+(size?" muncher-button--"+size:"")+(active?" muncher-button--active":"")+(rounded?" muncher-button--rounded":"");return(0,jsx_runtime.jsx)("button",{type:type&&"nav"!==type?type:"button",className,disabled:!!disabled,title,onClick,onMouseDown,onMouseEnter,onMouseLeave,...props,children})};Button_Button.defaultProps={type:"button",size:"medium"};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"reset"'},{value:'"button"'},{value:'"submit"'},{value:'"nav"'}]}},onClick:{defaultValue:null,description:"button click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"button mouse down handler",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/NavigateButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>NavigateButton_NavigateButton});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/button/Button.tsx"),Icon=__webpack_require__("./src/icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavigateButton_NavigateButton=_ref=>{let{direction,size,weight,isDisabled,variant,navIcon,onClick}=_ref;return(0,jsx_runtime.jsx)("div",{className:"left"===direction?"muncher-button--navigate muncher-button--navigate-left":"muncher-button--navigate muncher-button--navigate-right",children:(0,jsx_runtime.jsx)(Button.z,{onClick,disabled:isDisabled,size:"small",variant,title:"left"===direction?"Navigate Left":"Navigate Right",children:(0,jsx_runtime.jsx)(Icon.J,{name:(()=>{switch(navIcon){case"arrow":return"left"===direction?"arrow-left":"arrow-right";case"skip":return"left"===direction?"skip-back":"skip-forward";case"forward":return"left"===direction?"rewind":"fast-forward";default:return"left"===direction?"chevron-left":"chevron-right"}})(),size,weight})})})};NavigateButton_NavigateButton.defaultProps={size:"small",navIcon:"chevron",variant:"primary"};try{NavigateButton_NavigateButton.displayName="NavigateButton",NavigateButton_NavigateButton.__docgenInfo={description:"",displayName:"NavigateButton",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},navIcon:{defaultValue:{value:"chevron"},description:"",name:"navIcon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"chevron"'},{value:'"skip"'},{value:'"forward"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/NavigateButton.tsx#NavigateButton"]={docgenInfo:NavigateButton_NavigateButton.__docgenInfo,name:"NavigateButton",path:"src/button/NavigateButton.tsx#NavigateButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/slider/ItemSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ItemSlider_ItemSlider});var react=__webpack_require__("./node_modules/react/index.js"),NavigateButton=__webpack_require__("./src/button/NavigateButton.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ItemSlider_ItemSlider=_ref=>{let{sliderItems,navButtonSize,navButtonWeight,variant,navIcon}=_ref;const[currentIndex,setCurrentIndex]=(0,react.useState)(0),[translate,setTranslate]=(0,react.useState)(0);return(0,jsx_runtime.jsxs)("div",{className:"muncher-item-slider",children:[sliderItems.length>1&&currentIndex>0?(0,jsx_runtime.jsx)(NavigateButton.D,{direction:"left",size:navButtonSize,variant,navIcon,weight:navButtonWeight,onClick:()=>{0===currentIndex?(setTranslate(100*-(sliderItems.length-1)),setCurrentIndex(sliderItems.length-1)):(setTranslate(translate+100),setCurrentIndex(currentIndex-1))}}):"",(0,jsx_runtime.jsx)("div",{className:"slider-container",style:{width:"".concat(100*sliderItems.length,"%")},children:sliderItems.map(((sliderItem,index)=>(0,jsx_runtime.jsx)("div",{className:"slider-item",style:{transform:"translateX(".concat(translate,"%)")},children:sliderItem},"slider-item"+index)))}),sliderItems.length>1&&currentIndex<sliderItems.length-1?(0,jsx_runtime.jsx)(NavigateButton.D,{direction:"right",size:navButtonSize,weight:navButtonWeight,navIcon,variant,onClick:()=>{currentIndex===sliderItems.length-1?(setCurrentIndex(0),setTranslate(0)):(setTranslate(translate-100),setCurrentIndex(currentIndex+1))}}):""]})};ItemSlider_ItemSlider.defaultProps={navButtonSize:"large",navButtonWeight:2};try{ItemSlider_ItemSlider.displayName="ItemSlider",ItemSlider_ItemSlider.__docgenInfo={description:"",displayName:"ItemSlider",props:{sliderItems:{defaultValue:null,description:"",name:"sliderItems",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},navButtonSize:{defaultValue:{value:"large"},description:"",name:"navButtonSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},navButtonWeight:{defaultValue:{value:"2"},description:"",name:"navButtonWeight",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},navIcon:{defaultValue:null,description:"",name:"navIcon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"chevron"'},{value:'"skip"'},{value:'"forward"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/slider/ItemSlider.tsx#ItemSlider"]={docgenInfo:ItemSlider_ItemSlider.__docgenInfo,name:"ItemSlider",path:"src/slider/ItemSlider.tsx#ItemSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/slider/assets/ItemSliderStories.scss":()=>{}}]);