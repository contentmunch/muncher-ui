import{j as n}from"./jsx-runtime-6eef64cc.js";import{D as e}from"./DropdownButton-0b3917ad.js";import{r as o}from"./index-c013ead5.js";/* empty css                            */import{I as t}from"./Icon-477e2faa.js";import{B as s}from"./Button-0a2baa73.js";import"./commonjsHelpers-725317a4.js";const F={component:e,title:"Buttons/Dropdown Button Toolbar"},a=()=>{const[h,r]=o.useState(!1),[d,m]=o.useState(!1),[w,C]=o.useState(!1),[u,x]=o.useState(!1),[S,j]=o.useState(!1),[p,B]=o.useState(!1),[_,z]=o.useState(!1),[b,v]=o.useState(!1),[g,f]=o.useState(!1),[D,I]=o.useState(!1),[N,T]=o.useState(!1);return n.jsxs("div",{className:"muncher-toolbar",children:[n.jsx(e,{element:n.jsx(t,{name:"code"}),showContent:h,setShowContent:r,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"undo"}),showContent:d,setShowContent:m,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"redo"}),showContent:w,setShowContent:C,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"ordered-list"}),showContent:u,setShowContent:x,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"unordered-list"}),showContent:S,setShowContent:j,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"align-center"}),showContent:p,setShowContent:B,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"align-center"}),showContent:_,setShowContent:z,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"alert"}),showContent:b,setShowContent:v,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"grid"}),showContent:g,setShowContent:f,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"print"}),showContent:D,setShowContent:I,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})}),n.jsx(e,{element:n.jsx(t,{name:"settings"}),showContent:N,setShowContent:T,size:"small",children:n.jsx("div",{className:"block__content",children:n.jsxs(s,{size:"small",children:["This is text1 and two and three ",n.jsx(t,{name:"align-center"})]})})})]})};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);
  const [showContent7, setShowContent7] = useState(false);
  const [showContent8, setShowContent8] = useState(false);
  const [showContent9, setShowContent9] = useState(false);
  const [showContent10, setShowContent10] = useState(false);
  return <div className="muncher-toolbar">
            <DropdownButton element={<Icon name="code" />} showContent={showContent} setShowContent={setShowContent} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
            <DropdownButton element={<Icon name="undo" />} showContent={showContent1} setShowContent={setShowContent1} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
            <DropdownButton element={<Icon name="redo" />} showContent={showContent2} setShowContent={setShowContent2} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>

            <DropdownButton element={<Icon name="ordered-list" />} showContent={showContent3} setShowContent={setShowContent3} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>

            <DropdownButton element={<Icon name="unordered-list" />} showContent={showContent4} setShowContent={setShowContent4} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
            <DropdownButton element={<Icon name="align-center" />} showContent={showContent5} setShowContent={setShowContent5} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>

            <DropdownButton element={<Icon name="align-center" />} showContent={showContent6} setShowContent={setShowContent6} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>

            <DropdownButton element={<Icon name="alert" />} showContent={showContent7} setShowContent={setShowContent7} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
            <DropdownButton element={<Icon name="grid" />} showContent={showContent8} setShowContent={setShowContent8} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
            <DropdownButton element={<Icon name="print" />} showContent={showContent9} setShowContent={setShowContent9} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
            <DropdownButton element={<Icon name="settings" />} showContent={showContent10} setShowContent={setShowContent10} size="small">
                <div className="block__content">
                    <Button size="small">
                        This is text1 and two and three&nbsp;<Icon name="align-center" />
                    </Button>
                </div>
            </DropdownButton>
        </div>;
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,F as default};
//# sourceMappingURL=DropDownButtonToolbar.stories-b066e680.js.map
