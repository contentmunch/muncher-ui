import{j as t}from"./jsx-runtime-6eef64cc.js";import{R as i}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import"./Button-0a2baa73.js";import{D as V}from"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import{r}from"./index-c013ead5.js";import"./commonjsHelpers-725317a4.js";const G={component:i,title:"Slider/Dropdown Range Slider"},e=u=>{const[l,p]=r.useState(!1),[o,c]=r.useState(20),[a,d]=r.useState(600);return t.jsx("div",{className:"slider-stories",children:t.jsx(V,{showContent:l,setShowContent:p,element:"slider(min: "+o+" max: "+a+")",children:t.jsx(i,{...u,min:1,max:1e3,minValue:o,maxValue:a,setMinValue:c,setMaxValue:d,numberFormatter:x=>new Intl.NumberFormat("en-UK",{style:"currency",currency:"GBP"}).format(x)})})})};var n,s,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [showContent, setShowContent] = useState(false);
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(600);
  return <div className="slider-stories">
            <DropdownButton showContent={showContent} setShowContent={setShowContent} element={"slider(min: " + minValue + " max: " + maxValue + ")"}>
                <RangeSlider {...args} min={1} max={1000} minValue={minValue} maxValue={maxValue} setMinValue={setMinValue} setMaxValue={setMaxValue} numberFormatter={num => new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP'
      }).format(num)} />
            </DropdownButton>
        </div>;
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
//# sourceMappingURL=DropDownRangeSlider.stories-b9d033b1.js.map
