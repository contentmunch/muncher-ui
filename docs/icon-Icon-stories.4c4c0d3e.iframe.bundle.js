"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[3292],{"./src/icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Default:()=>Default,IconWithText:()=>IconWithText,Medium:()=>Medium,Search:()=>Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/Icon.tsx"),_input_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/input/Input.tsx"),_Drawings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/Drawings.tsx"),_button_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Icon__WEBPACK_IMPORTED_MODULE_1__.J,title:"Visual/Icons",argTypes:{color:{control:"color"}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.J,{...args})})},Search=()=>{const[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"icon-search-story",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_input_Input__WEBPACK_IMPORTED_MODULE_2__.I,{name:query,onChange:e=>setQuery(e.target.value),icon:"search"}),Object.keys(_Drawings__WEBPACK_IMPORTED_MODULE_3__.I).filter((key=>key.search(new RegExp(query.replace(/\s*/g,""),"i"))>-1)).map((key=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_4__.z,{size:"small",rounded:!0,title:key,variant:"tertiary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.J,{iconString:key})},key)))]})},Default={args:{name:"muncher",size:"small"}},Medium={args:{...Default.args,size:"medium",weight:1}},Dark={args:{...Medium.args,weight:2}},IconWithText={args:{name:"muncher",size:"small",orientation:"left"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.J,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Text"})})})};Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:'() => {\n  const [query, setQuery] = useState("");\n  return <div className="icon-search-story">\n            <Input name={query} onChange={e => setQuery(e.target.value)} icon={"search"} />\n            {Object.keys(drawings).filter(key => key.search(new RegExp(query.replace(/\\s*/g, ""), "i")) > -1).map(key => <Button key={key} size="small" rounded={true} title={key} variant={"tertiary"}>\n                        <Icon iconString={key} />\n                    </Button>)}\n\n        </div>;\n}',...Search.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'muncher',\n    size: 'small'\n  }\n}",...Default.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    size: 'medium',\n    weight: 1\n  }\n}",...Medium.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Medium.args,\n    weight: 2\n  }\n}",...Dark.parameters?.docs?.source}}},IconWithText.parameters={...IconWithText.parameters,docs:{...IconWithText.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'muncher',\n    size: 'small',\n    orientation: 'left'\n  },\n  render: args => <div><Icon {...args}><p>Text</p></Icon></div>\n}",...IconWithText.parameters?.docs?.source}}};const __namedExportsOrder=["Search","Default","Medium","Dark","IconWithText"]},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=_ref=>{let{type,variant,size,title,active,disabled,rounded,onClick,onMouseDown,onMouseEnter,onMouseLeave,children,...props}=_ref;const className="muncher-button"+(type&&"nav"===type?" muncher-button--nav":"")+(variant?" muncher-button--"+variant:"")+(size?" muncher-button--"+size:"")+(active?" muncher-button--active":"")+(rounded?" muncher-button--rounded":"");return(0,jsx_runtime.jsx)("button",{type:type&&"nav"!==type?type:"button",className,disabled:!!disabled,title,onClick,onMouseDown,onMouseEnter,onMouseLeave,...props,children})};Button_Button.defaultProps={type:"button",size:"medium"};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"reset"'},{value:'"button"'},{value:'"submit"'},{value:'"nav"'}]}},onClick:{defaultValue:null,description:"button click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"button mouse down handler",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/input/assets/Input.scss");var _Label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/input/Label.tsx"),_icon_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=_ref=>{let{name,label,required,readOnly,icon,hoverIcon,onHoverIconClick,type,list,onBlur,labelPosition,onKeyDown,error,focus,placeholder,onChange,step,value,maxLength,...props}=_ref;const hasError=()=>error&&""!==error,addLabel=()=>label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_2__._,{label,required,id:name}):"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"muncher-input--div",children:["side"!==labelPosition?addLabel():"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"muncher-input-element",children:["side"===labelPosition?addLabel():"",icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:icon}):"",hoverIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:"muncher-icon-hover",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:hoverIcon,onClick:onHoverIconClick})," "]}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{id:name,className:(()=>{let inputClass="muncher-input";return(icon||hoverIcon)&&(inputClass+=" muncher-input-icon"),hasError()&&(inputClass+=" muncher-input-error"),"side"===labelPosition&&(inputClass+=" muncher-label-side"),inputClass})(),name,autoFocus:focus,value,type:type||"text",autoComplete:"off",placeholder,onChange,required,readOnly,list,onKeyDown,onBlur,step,maxLength,...props})]}),hasError()?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"muncher-input-error-message",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:"alert",children:error})}):""]})};Input.defaultProps={type:"text",focus:!1,labelPosition:"top"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"repeat"'},{value:'"link"'},{value:'"at"'},{value:'"play"'},{value:'"max"'},{value:'"type"'},{value:'"align-center"'},{value:'"align-justify"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"ordered-list"'},{value:'"unordered-list"'},{value:'"table"'},{value:'"undo"'},{value:'"redo"'},{value:'"unlink"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"hamburger"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"fast-forward"'},{value:'"pause"'},{value:'"power"'},{value:'"rewind"'},{value:'"shuffle"'},{value:'"skip-back"'},{value:'"skip-forward"'},{value:'"youtube"'},{value:'"clock"'},{value:'"camera"'},{value:'"camera-off"'},{value:'"video"'},{value:'"video-off"'},{value:'"tv"'},{value:'"truck"'},{value:'"umbrella"'},{value:'"maximize"'},{value:'"minimize"'},{value:'"zoom-in"'},{value:'"zoom-out"'},{value:'"move"'},{value:'"mixer"'},{value:'"volume"'},{value:'"mute"'},{value:'"alert"'},{value:'"check"'},{value:'"help"'},{value:'"info"'},{value:'"close"'},{value:'"code"'},{value:'"database"'},{value:'"file"'},{value:'"terminal"'},{value:'"edit"'},{value:'"pencil"'},{value:'"image"'},{value:'"print"'},{value:'"loading"'},{value:'"sun"'},{value:'"plus"'},{value:'"minus"'},{value:'"external-link"'},{value:'"filter"'},{value:'"reset"'},{value:'"refresh"'},{value:'"rotate"'},{value:'"sort-asc"'},{value:'"sort-desc"'},{value:'"scissor"'},{value:'"slash"'},{value:'"sidebar"'},{value:'"dollar"'},{value:'"box"'},{value:'"key"'},{value:'"layers"'},{value:'"github"'},{value:'"code-pen"'},{value:'"instagram"'},{value:'"linkedin"'},{value:'"slack"'},{value:'"facebook"'},{value:'"twitter"'},{value:'"grid"'},{value:'"user"'},{value:'"log-in"'},{value:'"log-out"'},{value:'"home"'},{value:'"bed"'},{value:'"bath"'},{value:'"bike"'},{value:'"building"'},{value:'"car"'},{value:'"more"'},{value:'"dot"'},{value:'"share"'},{value:'"trash"'},{value:'"muncher"'},{value:'"save"'},{value:'"copy"'},{value:'"clipboard"'},{value:'"bookmark"'},{value:'"rss"'},{value:'"calendar"'},{value:'"mail"'},{value:'"phone"'},{value:'"inbox"'},{value:'"upload"'},{value:'"download"'},{value:'"send"'},{value:'"archive"'},{value:'"lock"'},{value:'"unlock"'},{value:'"bell"'},{value:'"bell-off"'},{value:'"star"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"flag"'},{value:'"tag"'},{value:'"heart"'},{value:'"map"'},{value:'"settings"'},{value:'"tool"'},{value:'"toggle-left"'},{value:'"toggle-right"'},{value:'"smile"'},{value:'"frown"'},{value:'"meh"'},{value:'"award"'},{value:'"shopping-cart"'},{value:'"pie-chart"'},{value:'"gift"'},{value:'"bulb"'},{value:'"360"'}]}},hoverIcon:{defaultValue:null,description:"",name:"hoverIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"repeat"'},{value:'"link"'},{value:'"at"'},{value:'"play"'},{value:'"max"'},{value:'"type"'},{value:'"align-center"'},{value:'"align-justify"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"ordered-list"'},{value:'"unordered-list"'},{value:'"table"'},{value:'"undo"'},{value:'"redo"'},{value:'"unlink"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"hamburger"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"fast-forward"'},{value:'"pause"'},{value:'"power"'},{value:'"rewind"'},{value:'"shuffle"'},{value:'"skip-back"'},{value:'"skip-forward"'},{value:'"youtube"'},{value:'"clock"'},{value:'"camera"'},{value:'"camera-off"'},{value:'"video"'},{value:'"video-off"'},{value:'"tv"'},{value:'"truck"'},{value:'"umbrella"'},{value:'"maximize"'},{value:'"minimize"'},{value:'"zoom-in"'},{value:'"zoom-out"'},{value:'"move"'},{value:'"mixer"'},{value:'"volume"'},{value:'"mute"'},{value:'"alert"'},{value:'"check"'},{value:'"help"'},{value:'"info"'},{value:'"close"'},{value:'"code"'},{value:'"database"'},{value:'"file"'},{value:'"terminal"'},{value:'"edit"'},{value:'"pencil"'},{value:'"image"'},{value:'"print"'},{value:'"loading"'},{value:'"sun"'},{value:'"plus"'},{value:'"minus"'},{value:'"external-link"'},{value:'"filter"'},{value:'"reset"'},{value:'"refresh"'},{value:'"rotate"'},{value:'"sort-asc"'},{value:'"sort-desc"'},{value:'"scissor"'},{value:'"slash"'},{value:'"sidebar"'},{value:'"dollar"'},{value:'"box"'},{value:'"key"'},{value:'"layers"'},{value:'"github"'},{value:'"code-pen"'},{value:'"instagram"'},{value:'"linkedin"'},{value:'"slack"'},{value:'"facebook"'},{value:'"twitter"'},{value:'"grid"'},{value:'"user"'},{value:'"log-in"'},{value:'"log-out"'},{value:'"home"'},{value:'"bed"'},{value:'"bath"'},{value:'"bike"'},{value:'"building"'},{value:'"car"'},{value:'"more"'},{value:'"dot"'},{value:'"share"'},{value:'"trash"'},{value:'"muncher"'},{value:'"save"'},{value:'"copy"'},{value:'"clipboard"'},{value:'"bookmark"'},{value:'"rss"'},{value:'"calendar"'},{value:'"mail"'},{value:'"phone"'},{value:'"inbox"'},{value:'"upload"'},{value:'"download"'},{value:'"send"'},{value:'"archive"'},{value:'"lock"'},{value:'"unlock"'},{value:'"bell"'},{value:'"bell-off"'},{value:'"star"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"flag"'},{value:'"tag"'},{value:'"heart"'},{value:'"map"'},{value:'"settings"'},{value:'"tool"'},{value:'"toggle-left"'},{value:'"toggle-right"'},{value:'"smile"'},{value:'"frown"'},{value:'"meh"'},{value:'"award"'},{value:'"shopping-cart"'},{value:'"pie-chart"'},{value:'"gift"'},{value:'"bulb"'},{value:'"360"'}]}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"color"'},{value:'"search"'},{value:'"date"'},{value:'"datetime-local"'},{value:'"email"'},{value:'"month"'},{value:'"password"'},{value:'"range"'},{value:'"tel"'},{value:'"text"'},{value:'"time"'},{value:'"url"'},{value:'"week"'}]}},focus:{defaultValue:{value:"false"},description:"",name:"focus",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"string"}},onHoverIconClick:{defaultValue:null,description:"",name:"onHoverIconClick",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: ChangeEvent<HTMLInputElement>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"side"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=_ref=>{let{label,onClick,id,required}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:id,onClick,children:[label,required?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"required",children:"*"}):""]})};Label.defaultProps={required:!1};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{id:{defaultValue:null,description:"name of the element that uses the label",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/input/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/assets/Input.scss":()=>{}}]);