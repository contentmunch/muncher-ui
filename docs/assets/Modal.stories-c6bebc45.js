import{j as e}from"./jsx-runtime-6eef64cc.js";import{M as n}from"./Input-e3d3db6c.js";import"./Badge-8c8fbc9d.js";import{B as m}from"./Button-0a2baa73.js";import"./DropdownButton-0b3917ad.js";import"./DropdownNavButton-5a78218b.js";import"./ShareButton-40f815a2.js";import"./CsvButton-7c425d08.js";import"./SortButton-98d62a47.js";import"./CopyButton-d015da46.js";import"./NavigateButton-92eb82a4.js";import"./Icon-477e2faa.js";import"./IconBadge-155be096.js";import"./Accordion-174a0889.js";import"./CsvInput-c8ff3419.js";import{r as o}from"./index-c013ead5.js";import"./commonjsHelpers-725317a4.js";const S={component:n,title:"Feedback/Modal",decorators:[t=>e.jsx("div",{style:{padding:"2rem",background:"#f5f5f5"},children:e.jsx(t,{})})]},i=()=>{const[t,a]=o.useState(!1);return e.jsxs("div",{className:"muncher-modal-story",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet turpis et quam viverra rhoncus vel eu tellus. Maecenas vel urna mi. Mauris sollicitudin hendrerit purus, vitae ullamcorper nisl pharetra maximus. Vestibulum nec aliquet neque. Nullam in nunc ac augue fermentum semper. Mauris ante felis, dictum scelerisque tempus vitae, sollicitudin vitae sapien. Aenean vehicula risus sed sem bibendum viverra."}),e.jsx("p",{children:"Proin auctor, felis eget malesuada pellentesque, metus magna pharetra augue, consequat fermentum diam velit eget eros. Proin sagittis rutrum arcu, nec interdum urna condimentum vitae. In sit amet nibh quis mauris malesuada gravida eu viverra nibh. Nullam non nunc et tellus sagittis rhoncus. Donec efficitur nunc nulla, eget faucibus leo blandit a. Aenean mauris nulla, tristique quis diam ut, euismod convallis arcu. In maximus purus vitae pulvinar commodo. Donec id sapien tristique, varius dolor ut, feugiat metus. Nullam semper vehicula sem et ornare. Praesent eget purus ut dui efficitur laoreet. Cras et ipsum sed ipsum rutrum laoreet mollis facilisis justo."}),e.jsx("p",{children:"Vivamus eget vehicula ex. Phasellus bibendum mi nec purus tincidunt luctus. Donec ornare facilisis rutrum. Fusce mollis luctus felis sit amet euismod. Donec ut elit lorem. Morbi eu quam massa. Praesent auctor massa orci, et lacinia magna vestibulum tempus. Vivamus dapibus dignissim tortor, in condimentum enim. Fusce ligula neque, fermentum sit amet nisi non, gravida gravida tortor."}),e.jsx("p",{children:"Integer rutrum scelerisque rutrum. Nam pretium sem enim, non rhoncus massa viverra id. Morbi pellentesque in arcu et semper. Nunc euismod finibus leo nec efficitur. Mauris justo tortor, suscipit a tempor eget, ultricies at orci. Praesent lobortis gravida quam, sed vehicula dui. Ut porttitor sapien vitae lobortis pharetra. Cras congue nunc nisi, quis gravida orci sollicitudin vitae. Integer dictum venenatis porta. In dictum et elit eget ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Aliquam ac cursus felis."}),e.jsx(m,{variant:"tertiary",onClick:()=>{a(!0)},children:"Show Modal"}),e.jsxs(n,{show:t,setShow:a,children:[e.jsx("h2",{children:"Modal title"}),e.jsx("section",{children:"Modal Body"})]})]})};var s,u,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  return <div className="muncher-modal-story">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet turpis et quam viverra rhoncus
                vel eu tellus. Maecenas vel urna mi. Mauris sollicitudin hendrerit purus, vitae ullamcorper nisl
                pharetra maximus. Vestibulum nec aliquet neque. Nullam in nunc ac augue fermentum semper. Mauris ante
                felis, dictum scelerisque tempus vitae, sollicitudin vitae sapien. Aenean vehicula risus sed sem
                bibendum viverra.</p>
            <p>Proin auctor, felis eget malesuada pellentesque, metus magna pharetra augue, consequat fermentum diam
                velit eget eros. Proin sagittis rutrum arcu, nec interdum urna condimentum vitae. In sit amet nibh quis
                mauris malesuada gravida eu viverra nibh. Nullam non nunc et tellus sagittis rhoncus. Donec efficitur
                nunc nulla, eget faucibus leo blandit a. Aenean mauris nulla, tristique quis diam ut, euismod convallis
                arcu. In maximus purus vitae pulvinar commodo. Donec id sapien tristique, varius dolor ut, feugiat
                metus. Nullam semper vehicula sem et ornare. Praesent eget purus ut dui efficitur laoreet. Cras et ipsum
                sed ipsum rutrum laoreet mollis facilisis justo.</p>
            <p>Vivamus eget vehicula ex. Phasellus bibendum mi nec purus tincidunt luctus. Donec ornare facilisis
                rutrum. Fusce mollis luctus felis sit amet euismod. Donec ut elit lorem. Morbi eu quam massa. Praesent
                auctor massa orci, et lacinia magna vestibulum tempus. Vivamus dapibus dignissim tortor, in condimentum
                enim. Fusce ligula neque, fermentum sit amet nisi non, gravida gravida tortor.</p>
            <p>Integer rutrum scelerisque rutrum. Nam pretium sem enim, non rhoncus massa viverra id. Morbi pellentesque
                in arcu et semper. Nunc euismod finibus leo nec efficitur. Mauris justo tortor, suscipit a tempor eget,
                ultricies at orci. Praesent lobortis gravida quam, sed vehicula dui. Ut porttitor sapien vitae lobortis
                pharetra. Cras congue nunc nisi, quis gravida orci sollicitudin vitae. Integer dictum venenatis porta.
                In dictum et elit eget ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac
                habitasse platea dictumst. Aliquam ac cursus felis.</p>
            <Button variant="tertiary" onClick={() => {
      setShow(true);
    }}>Show Modal</Button>
            <Modal show={show} setShow={setShow}><h2>Modal title</h2>
                <section>Modal Body</section>
            </Modal>
        </div>;
}`,...(r=(u=i.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};const D=["Default"];export{i as Default,D as __namedExportsOrder,S as default};
//# sourceMappingURL=Modal.stories-c6bebc45.js.map
