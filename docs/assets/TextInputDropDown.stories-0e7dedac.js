import{j as n}from"./jsx-runtime-6eef64cc.js";import{k as d}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import"./Button-0a2baa73.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import{r as s}from"./index-c013ead5.js";import"./commonjsHelpers-725317a4.js";const E={component:d,title:"Input/TextInputDropdown",decorators:[o=>n.jsx("div",{className:"muncher-input-drop-down-story",children:n.jsx(o,{})})]},t=o=>{const[i,e]=s.useState(!1),[l,r]=s.useState("");return n.jsxs("div",{className:"muncher-dropdown-story",children:[n.jsx("span",{children:"a long text "}),n.jsxs(d,{...o,showContent:i,setShowContent:e,handleInputChange:u=>{r(u)},value:l,label:"country",required:!0,error:"This is an error",children:[n.jsx("p",{children:"Drop down content"}),n.jsx("p",{children:"Drop down content"}),n.jsx("p",{children:"Drop down content"}),n.jsx("p",{children:"Drop down content"}),n.jsx("p",{onClick:()=>{r("Tese"),e(!1)},children:"Drop down content"})]})]})};var p,a,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [showContent, setShowContent] = useState(false);
  const [value, setValue] = useState("");
  return <div className="muncher-dropdown-story">
            <span>a long text&nbsp;</span>
            <TextInputDropdown {...args} showContent={showContent} setShowContent={setShowContent} handleInputChange={value => {
      setValue(value);
    }} value={value} label="country" required={true} error={"This is an error"}>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p onClick={() => {
        setValue("Tese");
        setShowContent(false);
      }}>Drop down content</p>

            </TextInputDropdown>
        </div>;
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,E as default};
//# sourceMappingURL=TextInputDropDown.stories-0e7dedac.js.map
