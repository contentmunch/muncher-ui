"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[1396],{"./src/input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Date:()=>Input_stories_Date,DateTime:()=>DateTime,Default:()=>Default,Email:()=>Email,Float:()=>Float,Month:()=>Month,Number:()=>Input_stories_Number,Password:()=>Password,Range:()=>Range,Search:()=>Search,Tel:()=>Tel,TextWithHoverIcon:()=>TextWithHoverIcon,TextWithIcon:()=>TextWithIcon,TextWithLabel:()=>TextWithLabel,TextWithLabelOnTheSide:()=>TextWithLabelOnTheSide,Time:()=>Time,Url:()=>Url,Week:()=>Week,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var Input=__webpack_require__("./src/input/Input.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_stories={component:Input.I,title:"Input/Input",decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"div-input-stories",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(Input.I,{...args})},Default={args:{name:"query",type:"text",placeholder:"Type your query"}},TextWithLabel={args:{...Default.args,label:"Search",required:!0}},TextWithLabelOnTheSide={args:{...Default.args,label:"Search the string",required:!0,labelPosition:"side"}},TextWithIcon={args:{...TextWithLabel.args,icon:"muncher"}},TextWithHoverIcon={args:{...TextWithLabel.args,hoverIcon:"muncher",onHoverIconClick:()=>{console.log("hover icon clicked")}}},WithError={args:{...TextWithIcon.args,error:"Provide value for Search"}},Color={args:{...Default.args,type:"color"}},Input_stories_Date={args:{...Default.args,type:"date"}},DateTime={args:{...Default.args,type:"datetime-local"}},Email={args:{...Default.args,type:"email",placeholder:"Email",icon:"mail"}},Month={args:{...Default.args,type:"month"}},Input_stories_Number={args:{...Default.args,type:"number",placeholder:"Phone number",icon:"phone"}},Float={args:{...Default.args,type:"number",step:.5,placeholder:"Floating point number"}},Password={args:{...Default.args,type:"password",placeholder:"Type password"}},Range={args:{...Default.args,type:"range"}},Search={args:{...Default.args,type:"search"}},Tel={args:{...Default.args,type:"tel"}},Time={args:{...Default.args,type:"time"}},Url={args:{...Default.args,type:"url",placeholder:"type url"}},Week={args:{...Default.args,type:"week"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "query",\n    type: "text",\n    placeholder: "Type your query"\n  }\n}',...Default.parameters?.docs?.source}}},TextWithLabel.parameters={...TextWithLabel.parameters,docs:{...TextWithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    label: 'Search',\n    required: true\n  }\n}",...TextWithLabel.parameters?.docs?.source}}},TextWithLabelOnTheSide.parameters={...TextWithLabelOnTheSide.parameters,docs:{...TextWithLabelOnTheSide.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    label: 'Search the string',\n    required: true,\n    labelPosition: 'side'\n  }\n}",...TextWithLabelOnTheSide.parameters?.docs?.source}}},TextWithIcon.parameters={...TextWithIcon.parameters,docs:{...TextWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...TextWithLabel.args,\n    icon: "muncher"\n  }\n}',...TextWithIcon.parameters?.docs?.source}}},TextWithHoverIcon.parameters={...TextWithHoverIcon.parameters,docs:{...TextWithHoverIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...TextWithLabel.args,\n    hoverIcon: "muncher",\n    onHoverIconClick: () => {\n      console.log("hover icon clicked");\n    }\n  }\n}',...TextWithHoverIcon.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...TextWithIcon.args,\n    error: "Provide value for Search"\n  }\n}',...WithError.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'color'\n  }\n}",...Color.parameters?.docs?.source}}},Input_stories_Date.parameters={...Input_stories_Date.parameters,docs:{...Input_stories_Date.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'date'\n  }\n}",...Input_stories_Date.parameters?.docs?.source}}},DateTime.parameters={...DateTime.parameters,docs:{...DateTime.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'datetime-local'\n  }\n}",...DateTime.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: \'email\',\n    placeholder: "Email",\n    icon: "mail"\n  }\n}',...Email.parameters?.docs?.source}}},Month.parameters={...Month.parameters,docs:{...Month.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'month'\n  }\n}",...Month.parameters?.docs?.source}}},Input_stories_Number.parameters={...Input_stories_Number.parameters,docs:{...Input_stories_Number.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: \'number\',\n    placeholder: "Phone number",\n    icon: "phone"\n  }\n}',...Input_stories_Number.parameters?.docs?.source}}},Float.parameters={...Float.parameters,docs:{...Float.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'number',\n    step: 0.5,\n    placeholder: \"Floating point number\"\n  }\n}",...Float.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'password',\n    placeholder: \"Type password\"\n  }\n}",...Password.parameters?.docs?.source}}},Range.parameters={...Range.parameters,docs:{...Range.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'range'\n  }\n}",...Range.parameters?.docs?.source}}},Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'search'\n  }\n}",...Search.parameters?.docs?.source}}},Tel.parameters={...Tel.parameters,docs:{...Tel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'tel'\n  }\n}",...Tel.parameters?.docs?.source}}},Time.parameters={...Time.parameters,docs:{...Time.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'time'\n  }\n}",...Time.parameters?.docs?.source}}},Url.parameters={...Url.parameters,docs:{...Url.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'url',\n    placeholder: 'type url'\n  }\n}",...Url.parameters?.docs?.source}}},Week.parameters={...Week.parameters,docs:{...Week.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'week'\n  }\n}",...Week.parameters?.docs?.source}}};const __namedExportsOrder=["Default","TextWithLabel","TextWithLabelOnTheSide","TextWithIcon","TextWithHoverIcon","WithError","Color","Date","DateTime","Email","Month","Number","Float","Password","Range","Search","Tel","Time","Url","Week"]},"./src/input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/input/assets/Input.scss");var _Label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/input/Label.tsx"),_icon_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=_ref=>{let{name,label,required,readOnly,icon,hoverIcon,onHoverIconClick,type,list,onBlur,labelPosition,onKeyDown,error,focus,placeholder,onChange,step,value,maxLength,...props}=_ref;const hasError=()=>error&&""!==error,addLabel=()=>label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_2__._,{label,required,id:name}):"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"muncher-input--div",children:["side"!==labelPosition?addLabel():"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"muncher-input-element",children:["side"===labelPosition?addLabel():"",icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:icon}):"",hoverIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:"muncher-icon-hover",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:hoverIcon,onClick:onHoverIconClick})," "]}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{id:name,className:(()=>{let inputClass="muncher-input";return(icon||hoverIcon)&&(inputClass+=" muncher-input-icon"),hasError()&&(inputClass+=" muncher-input-error"),"side"===labelPosition&&(inputClass+=" muncher-label-side"),inputClass})(),name,autoFocus:focus,value,type:type||"text",autoComplete:"off",placeholder,onChange,required,readOnly,list,onKeyDown,onBlur,step,maxLength,...props})]}),hasError()?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"muncher-input-error-message",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:"alert",children:error})}):""]})};Input.defaultProps={type:"text",focus:!1,labelPosition:"top"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"repeat"'},{value:'"link"'},{value:'"at"'},{value:'"play"'},{value:'"max"'},{value:'"type"'},{value:'"align-center"'},{value:'"align-justify"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"ordered-list"'},{value:'"unordered-list"'},{value:'"table"'},{value:'"undo"'},{value:'"redo"'},{value:'"unlink"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"hamburger"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"fast-forward"'},{value:'"pause"'},{value:'"power"'},{value:'"rewind"'},{value:'"shuffle"'},{value:'"skip-back"'},{value:'"skip-forward"'},{value:'"youtube"'},{value:'"clock"'},{value:'"camera"'},{value:'"camera-off"'},{value:'"video"'},{value:'"video-off"'},{value:'"tv"'},{value:'"truck"'},{value:'"umbrella"'},{value:'"maximize"'},{value:'"minimize"'},{value:'"zoom-in"'},{value:'"zoom-out"'},{value:'"move"'},{value:'"mixer"'},{value:'"volume"'},{value:'"mute"'},{value:'"alert"'},{value:'"check"'},{value:'"help"'},{value:'"info"'},{value:'"close"'},{value:'"code"'},{value:'"database"'},{value:'"file"'},{value:'"terminal"'},{value:'"edit"'},{value:'"pencil"'},{value:'"image"'},{value:'"print"'},{value:'"loading"'},{value:'"sun"'},{value:'"plus"'},{value:'"minus"'},{value:'"external-link"'},{value:'"filter"'},{value:'"reset"'},{value:'"refresh"'},{value:'"rotate"'},{value:'"sort-asc"'},{value:'"sort-desc"'},{value:'"scissor"'},{value:'"slash"'},{value:'"sidebar"'},{value:'"dollar"'},{value:'"box"'},{value:'"key"'},{value:'"layers"'},{value:'"github"'},{value:'"code-pen"'},{value:'"instagram"'},{value:'"linkedin"'},{value:'"slack"'},{value:'"facebook"'},{value:'"twitter"'},{value:'"grid"'},{value:'"user"'},{value:'"log-in"'},{value:'"log-out"'},{value:'"home"'},{value:'"bed"'},{value:'"bath"'},{value:'"bike"'},{value:'"building"'},{value:'"car"'},{value:'"more"'},{value:'"dot"'},{value:'"share"'},{value:'"trash"'},{value:'"muncher"'},{value:'"save"'},{value:'"copy"'},{value:'"clipboard"'},{value:'"bookmark"'},{value:'"rss"'},{value:'"calendar"'},{value:'"mail"'},{value:'"phone"'},{value:'"inbox"'},{value:'"upload"'},{value:'"download"'},{value:'"send"'},{value:'"archive"'},{value:'"lock"'},{value:'"unlock"'},{value:'"bell"'},{value:'"bell-off"'},{value:'"star"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"flag"'},{value:'"tag"'},{value:'"heart"'},{value:'"map"'},{value:'"settings"'},{value:'"tool"'},{value:'"toggle-left"'},{value:'"toggle-right"'},{value:'"smile"'},{value:'"frown"'},{value:'"meh"'},{value:'"award"'},{value:'"shopping-cart"'},{value:'"pie-chart"'},{value:'"gift"'},{value:'"bulb"'},{value:'"360"'}]}},hoverIcon:{defaultValue:null,description:"",name:"hoverIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"repeat"'},{value:'"link"'},{value:'"at"'},{value:'"play"'},{value:'"max"'},{value:'"type"'},{value:'"align-center"'},{value:'"align-justify"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"ordered-list"'},{value:'"unordered-list"'},{value:'"table"'},{value:'"undo"'},{value:'"redo"'},{value:'"unlink"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"hamburger"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"fast-forward"'},{value:'"pause"'},{value:'"power"'},{value:'"rewind"'},{value:'"shuffle"'},{value:'"skip-back"'},{value:'"skip-forward"'},{value:'"youtube"'},{value:'"clock"'},{value:'"camera"'},{value:'"camera-off"'},{value:'"video"'},{value:'"video-off"'},{value:'"tv"'},{value:'"truck"'},{value:'"umbrella"'},{value:'"maximize"'},{value:'"minimize"'},{value:'"zoom-in"'},{value:'"zoom-out"'},{value:'"move"'},{value:'"mixer"'},{value:'"volume"'},{value:'"mute"'},{value:'"alert"'},{value:'"check"'},{value:'"help"'},{value:'"info"'},{value:'"close"'},{value:'"code"'},{value:'"database"'},{value:'"file"'},{value:'"terminal"'},{value:'"edit"'},{value:'"pencil"'},{value:'"image"'},{value:'"print"'},{value:'"loading"'},{value:'"sun"'},{value:'"plus"'},{value:'"minus"'},{value:'"external-link"'},{value:'"filter"'},{value:'"reset"'},{value:'"refresh"'},{value:'"rotate"'},{value:'"sort-asc"'},{value:'"sort-desc"'},{value:'"scissor"'},{value:'"slash"'},{value:'"sidebar"'},{value:'"dollar"'},{value:'"box"'},{value:'"key"'},{value:'"layers"'},{value:'"github"'},{value:'"code-pen"'},{value:'"instagram"'},{value:'"linkedin"'},{value:'"slack"'},{value:'"facebook"'},{value:'"twitter"'},{value:'"grid"'},{value:'"user"'},{value:'"log-in"'},{value:'"log-out"'},{value:'"home"'},{value:'"bed"'},{value:'"bath"'},{value:'"bike"'},{value:'"building"'},{value:'"car"'},{value:'"more"'},{value:'"dot"'},{value:'"share"'},{value:'"trash"'},{value:'"muncher"'},{value:'"save"'},{value:'"copy"'},{value:'"clipboard"'},{value:'"bookmark"'},{value:'"rss"'},{value:'"calendar"'},{value:'"mail"'},{value:'"phone"'},{value:'"inbox"'},{value:'"upload"'},{value:'"download"'},{value:'"send"'},{value:'"archive"'},{value:'"lock"'},{value:'"unlock"'},{value:'"bell"'},{value:'"bell-off"'},{value:'"star"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"flag"'},{value:'"tag"'},{value:'"heart"'},{value:'"map"'},{value:'"settings"'},{value:'"tool"'},{value:'"toggle-left"'},{value:'"toggle-right"'},{value:'"smile"'},{value:'"frown"'},{value:'"meh"'},{value:'"award"'},{value:'"shopping-cart"'},{value:'"pie-chart"'},{value:'"gift"'},{value:'"bulb"'},{value:'"360"'}]}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"color"'},{value:'"search"'},{value:'"date"'},{value:'"datetime-local"'},{value:'"email"'},{value:'"month"'},{value:'"password"'},{value:'"range"'},{value:'"tel"'},{value:'"text"'},{value:'"time"'},{value:'"url"'},{value:'"week"'}]}},focus:{defaultValue:{value:"false"},description:"",name:"focus",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"string"}},onHoverIconClick:{defaultValue:null,description:"",name:"onHoverIconClick",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: ChangeEvent<HTMLInputElement>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"side"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=_ref=>{let{label,onClick,id,required}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:id,onClick,children:[label,required?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"required",children:"*"}):""]})};Label.defaultProps={required:!1};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{id:{defaultValue:null,description:"name of the element that uses the label",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/input/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/input/assets/Input.scss":()=>{}}]);