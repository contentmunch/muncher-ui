import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as v}from"./index-c013ead5.js";import{B as f}from"./Button-0a2baa73.js";import{I as t}from"./Icon-477e2faa.js";const r=({variant:n,size:u,title:i,sortAsc:s,active:a,rounded:d,onClick:m,children:p})=>{const[o,l]=v.useState(!1),c=()=>!a||a&&!o?s?e.jsx(t,{name:"sort-asc"}):e.jsx(t,{name:"sort-desc"}):s?e.jsx(t,{name:"sort-desc"}):e.jsx(t,{name:"sort-asc"});return e.jsxs(f,{variant:n,size:u,title:i,rounded:d,onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},onClick:m,children:[p,a||o?e.jsx(c,{}):""]})};r.defaultProps={variant:"transparent",size:"small",sortAsc:!0};try{r.displayName="SortButton",r.__docgenInfo={description:"",displayName:"SortButton",props:{variant:{defaultValue:{value:"transparent"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},sortAsc:{defaultValue:{value:"true"},description:"",name:"sortAsc",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}export{r as S};
//# sourceMappingURL=SortButton-98d62a47.js.map
