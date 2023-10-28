import{j as v}from"./jsx-runtime-6eef64cc.js";import{c as s}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import"./Button-0a2baa73.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import"./index-c013ead5.js";import"./commonjsHelpers-725317a4.js";const y={component:s,title:"Input/Select",render:a=>v.jsx(s,{...a})},r={args:{name:"select",label:"select what",required:!0,options:["Option1","Option2","Option3"],onChange:a=>{console.log(a.target.value)}}},e={args:{...r.args,multiple:!0}},t={args:{...r.args,error:"Provide value for select"}},o={args:{...r.args,value:"Option2"}};var n,p,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "select",
    label: "select what",
    required: true,
    options: ["Option1", "Option2", "Option3"],
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,g,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: "Provide value for select"
  }
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var f,O,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "Option2"
  }
}`,...(h=(O=o.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const z=["Default","Multiple","WithError","WithValue"];export{r as Default,e as Multiple,t as WithError,o as WithValue,z as __namedExportsOrder,y as default};
//# sourceMappingURL=Select.stories-dd45fbdb.js.map
