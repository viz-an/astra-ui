import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as S,a as A}from"./index-HL85PlG8.js";import{r as d}from"./index-DmM0KDA7.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B=(...o)=>o.filter((a,i,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===i).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=d.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:u="",children:p,iconNode:N,...f},b)=>d.createElement("svg",{ref:b,...Z,width:a,height:a,stroke:o,strokeWidth:c?Number(i)*24/Number(a):i,className:B("lucide",u),...f},[...N.map(([m,s])=>d.createElement(m,s)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=(o,a)=>{const i=d.forwardRef(({className:c,...u},p)=>d.createElement(z,{ref:p,iconNode:a,className:B(`lucide-${P(o)}`,c),...u}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],J=q("Check",G);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],U=q("ChevronDown",Q);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],te=q("X",ee),re=A("flex min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",{variants:{state:{default:"",error:"border-red-500 focus:ring-red-500",disabled:"cursor-not-allowed opacity-50"},width:{default:"",full:"w-full"},focused:{true:"outline-none ring-2 ring-primary ring-offset-2",false:""}},defaultVariants:{state:"default",width:"default",focused:!1}}),se=A("absolute z-50 mt-1 w-full bg-popover rounded-md border border-input shadow-md",{variants:{position:{bottom:"top-full",top:"bottom-full"}},defaultVariants:{position:"bottom"}}),ae=A("px-3 py-2 text-sm cursor-pointer flex items-center justify-between",{variants:{selected:{true:"bg-primary/10 text-primary",false:"hover:bg-muted"},disabled:{true:"opacity-50 cursor-not-allowed pointer-events-none",false:""},highlighted:{true:"bg-primary/20 text-primary",false:""}},defaultVariants:{selected:!1,disabled:!1,highlighted:!1}}),H=({className:o,options:a,label:i,helperText:c,error:u,fullWidth:p=!1,placeholder:N="Select an option",disabled:f=!1,value:b,multiple:m=!1,onChange:s,maxHeight:K=300,...E})=>{const y=E.id||`select-${Math.random().toString(36).substr(2,9)}`,[x,j]=d.useState(!1),[l,g]=d.useState(b||(m?[]:"")),O=d.useRef(null);d.useEffect(()=>{b!==void 0&&g(b)},[b]),d.useEffect(()=>{const e=r=>{O.current&&!O.current.contains(r.target)&&j(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const V=()=>{f||j(!x)},X=e=>{if(!f)if(m){const r=Array.isArray(l)?[...l]:[];if(r.includes(e)){const n=r.filter(k=>k!==e);g(n),s==null||s(n)}else{const n=[...r,e];g(n),s==null||s(n)}}else g(e),s==null||s(e),j(!1)},C=(e,r)=>{if(r.stopPropagation(),!f&&m&&Array.isArray(l)){const n=l.filter(k=>k!==e);g(n),s==null||s(n)}},F=(()=>{if(!l||Array.isArray(l)&&l.length===0)return null;if(m&&Array.isArray(l))return t.jsx("div",{className:"flex flex-wrap gap-1",children:l.map(e=>{const r=a.find(n=>n.value===e);return r?t.jsxs("div",{className:"flex items-center bg-primary/10 text-primary rounded-full px-2 py-0.5 text-sm",children:[t.jsx("span",{children:r.label}),t.jsx("button",{type:"button",onClick:n=>C(e,n),className:"ml-1 p-0.5 hover:bg-primary/20 rounded-full transition-colors","aria-label":`Remove ${r.label}`,children:t.jsx(te,{className:"h-3 w-3"})})]},e):null})});{const e=a.find(r=>r.value===l);return e?t.jsx("span",{children:e.label}):null}})();return t.jsxs("div",{className:S("space-y-2",p&&"w-full"),ref:O,children:[i&&t.jsx("label",{htmlFor:y,className:"block text-sm font-medium",children:i}),t.jsxs("div",{className:"relative",children:[t.jsxs("div",{id:y,className:S(re({state:u?"error":f?"disabled":"default",width:p?"full":"default",focused:x}),o),onClick:V,tabIndex:0,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(V(),e.preventDefault())},role:"combobox","aria-expanded":x,"aria-controls":`${y}-dropdown`,...E,children:[t.jsx("div",{className:"flex-grow truncate",children:F||t.jsx("span",{className:"text-muted-foreground",children:N})}),t.jsx(U,{className:S("h-4 w-4 text-muted-foreground transition-transform duration-200",x&&"transform rotate-180")})]}),x&&t.jsx("div",{id:`${y}-dropdown`,className:se(),style:{maxHeight:`${K}px`,overflowY:"auto"},children:t.jsx("div",{className:"py-1",children:a.map(e=>{const r=m?Array.isArray(l)&&l.includes(e.value):l===e.value;return t.jsxs("div",{className:ae({selected:r,disabled:e.disabled}),onClick:()=>!e.disabled&&X(e.value),children:[t.jsx("span",{children:e.label}),r&&t.jsx(J,{className:"h-4 w-4"})]},e.value)})})})]}),c&&!u&&t.jsx("p",{className:"text-sm text-muted-foreground",children:c}),u&&t.jsx("p",{className:"text-sm text-red-500",children:u})]})};H.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select an option"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}},composes:["Omit"]};const T=[{value:"",label:"Choose an option",disabled:!0},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],de={title:"Components/Select",component:H,parameters:{layout:"centered"},tags:["autodocs"]},w={args:{options:T,className:"w-64",label:"Single select"}},v={args:{options:T,className:"w-64",multiple:!0,label:"Multiple select with helper text at bottom",helperText:"You can choose multiple options"}},h={args:{options:T,className:"w-64",label:"With error",error:"Option is required"}};var $,_,L;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: selectOptions,
    className: "w-64",
    label: "Single select"
  }
}`,...(L=(_=w.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,R,D;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: selectOptions,
    className: "w-64",
    multiple: true,
    label: "Multiple select with helper text at bottom",
    helperText: "You can choose multiple options"
  }
}`,...(D=(R=v.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var I,W,Y;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options: selectOptions,
    className: "w-64",
    label: "With error",
    error: "Option is required"
  }
}`,...(Y=(W=h.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const ce=["Single","Multi","Error"];export{h as Error,v as Multi,w as Single,ce as __namedExportsOrder,de as default};
