import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as t}from"./index-c013ead5.js";import{B as d}from"./Button-0a2baa73.js";import{I as y}from"./Icon-477e2faa.js";const v=e=>{navigator.clipboard.writeText(e)},a=({text:e,variant:s,size:l})=>{const[i,r]=t.useState(),[u,o]=t.useState("copy"),[c,p]=t.useState("copy link"),m=()=>{v(e),r("green"),o("check"),p("copied!"),setTimeout(function(){r(""),o("copy")},2e3)};return n.jsx(d,{size:l,variant:s,title:c,onClick:m,children:n.jsx(y,{name:u,color:i})})};a.defaultProps={size:"small",variant:"secondary"};try{a.displayName="CopyButton",a.__docgenInfo={description:"",displayName:"CopyButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}export{a as C};
//# sourceMappingURL=CopyButton-d015da46.js.map