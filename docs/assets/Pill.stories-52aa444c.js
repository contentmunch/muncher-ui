import{j as r}from"./jsx-runtime-6eef64cc.js";import{i as c}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import{B as u}from"./Button-0a2baa73.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import{r as P}from"./index-c013ead5.js";import"./commonjsHelpers-725317a4.js";const N={component:c,title:"Data Display/Pill"},t=()=>{const[i,n]=P.useState(["Pill 1"]),a=()=>{const l=[...i];l.push("Pill "+(l.length+1)),n(l)},m=l=>{const s=[...i],d=s.indexOf(l);s.splice(d,1),n(s)};return r.jsxs("div",{className:"muncher-pill-story",children:[r.jsx(u,{variant:"tertiary",onClick:a,children:"Add pills"}),r.jsx("br",{}),r.jsx("br",{}),i.map(l=>r.jsx(c,{pillCloseHandler:()=>m(l),children:l},l))]})};var e,o,p;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [pills, setPills] = useState(["Pill 1"]);
  const addPills = () => {
    const currentPills = [...pills];
    currentPills.push("Pill " + (currentPills.length + 1));
    setPills(currentPills);
  };
  const removePill = (pill: string) => {
    const currentPills = [...pills];
    const index = currentPills.indexOf(pill);
    currentPills.splice(index, 1);
    setPills(currentPills);
  };
  return <div className="muncher-pill-story">

            <Button variant={"tertiary"} onClick={addPills}>Add pills</Button>
            <br /><br />
            {pills.map(pill => <Pill key={pill} pillCloseHandler={() => removePill(pill)}>{pill}</Pill>)}

        </div>;
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,N as default};
//# sourceMappingURL=Pill.stories-52aa444c.js.map
