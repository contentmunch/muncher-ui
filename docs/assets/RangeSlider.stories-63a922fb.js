import{j as r}from"./jsx-runtime-6eef64cc.js";import{R as o}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import"./Button-0a2baa73.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import{r as t}from"./index-c013ead5.js";/* empty css                          */import"./commonjsHelpers-725317a4.js";const G={component:o,title:"Slider/Range Slider"},e=i=>{const[n,u]=t.useState(20),[l,p]=t.useState(600);return r.jsx("div",{className:"slider-story",children:r.jsx(o,{...i,min:1,max:1e3,minValue:n,maxValue:l,setMinValue:u,setMaxValue:p,numberFormatter:c=>new Intl.NumberFormat("en-UK",{style:"currency",currency:"GBP"}).format(c)})})};var a,m,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(600);
  return <div className="slider-story">
            <RangeSlider {...args} min={1} max={1000} minValue={minValue} maxValue={maxValue} setMinValue={setMinValue} setMaxValue={setMaxValue} numberFormatter={num => new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP'
    }).format(num)} />
        </div>;
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
//# sourceMappingURL=RangeSlider.stories-63a922fb.js.map
