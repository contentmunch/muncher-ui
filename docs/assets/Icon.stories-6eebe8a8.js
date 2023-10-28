import{j as e}from"./jsx-runtime-6eef64cc.js";import{I as c,d as z}from"./Icon-477e2faa.js";import{r as D}from"./index-c013ead5.js";import{I as E}from"./Input-e3d3db6c.js";import{B as T}from"./Button-0a2baa73.js";import"./commonjsHelpers-725317a4.js";import"./CsvInput-c8ff3419.js";import"./Badge-8c8fbc9d.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CopyButton-d015da46.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./NavigateButton-92eb82a4.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";const K={component:c,title:"Visual/Icons",argTypes:{color:{control:"color"}},render:s=>e.jsx("div",{children:e.jsx(c,{...s})})},n=()=>{const[s,w]=D.useState("");return e.jsxs("div",{className:"icon-search-story",children:[e.jsx(E,{name:s,onChange:r=>w(r.target.value),icon:"search"}),Object.keys(z).filter(r=>r.search(new RegExp(s.replace(/\s*/g,""),"i"))>-1).map(r=>e.jsx(T,{size:"small",rounded:!0,title:r,variant:"tertiary",children:e.jsx(c,{iconString:r})},r))]})},a={args:{name:"muncher",size:"small"}},t={args:{...a.args,size:"medium",weight:1}},o={args:{...t.args,weight:2}},i={args:{name:"muncher",size:"small",orientation:"left"},render:s=>e.jsx("div",{children:e.jsx(c,{...s,children:e.jsx("p",{children:"Text"})})})};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState("");
  return <div className="icon-search-story">
            <Input name={query} onChange={e => setQuery(e.target.value)} icon={"search"} />
            {Object.keys(drawings).filter(key => key.search(new RegExp(query.replace(/\\s*/g, ""), "i")) > -1).map(key => <Button key={key} size="small" rounded={true} title={key} variant={"tertiary"}>
                        <Icon iconString={key} />
                    </Button>)}

        </div>;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'muncher',
    size: 'small'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'medium',
    weight: 1
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,j,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Medium.args,
    weight: 2
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,S,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'muncher',
    size: 'small',
    orientation: 'left'
  },
  render: args => <div><Icon {...args}><p>Text</p></Icon></div>
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const L=["Search","Default","Medium","Dark","IconWithText"];export{o as Dark,a as Default,i as IconWithText,t as Medium,n as Search,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Icon.stories-6eebe8a8.js.map
