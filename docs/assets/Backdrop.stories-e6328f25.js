import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as i}from"./index-c013ead5.js";import{B as p}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import{B as m}from"./Button-0a2baa73.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import"./commonjsHelpers-725317a4.js";const F={title:"Feedback/Backdrop",component:p,parameters:{layout:"fullscreen"}},o=c=>{const[t,e]=i.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(m,{onClick:()=>{e(!0)},...c,children:[" ",t?"Click anywhere in the backdrop":"Click to see backdrop"]}),r.jsx(p,{show:t,backdropClickHandler:()=>{e(!1)}})]})};var s,a,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(false);
  return <>

            <Button onClick={() => {
      setShow(true);
    }} {...args}> {show ? "Click anywhere in the backdrop" : "Click to see backdrop"}</Button>
            <Backdrop show={show} backdropClickHandler={() => {
      setShow(false);
    }} />
        </>;
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,F as default};
//# sourceMappingURL=Backdrop.stories-e6328f25.js.map
