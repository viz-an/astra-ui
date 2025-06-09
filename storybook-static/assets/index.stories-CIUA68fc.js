import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as _,a as q}from"./index-HL85PlG8.js";import{r as B}from"./index-DmM0KDA7.js";const E=q("inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-in-out transform-gpu focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]",{variants:{variant:{primary:"bg-primary text-primary-foreground hover:brightness-110 focus:ring-primary/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/50",ghost:"bg-transparent hover:bg-secondary focus:ring-secondary/50",outline:"bg-transparent border border-input hover:bg-secondary focus:ring-secondary/50",destructive:"bg-destructive text-destructive-foreground hover:brightness-110 focus:ring-destructive/50"},size:{sm:"text-xs px-3 py-1.5 gap-1.5",md:"text-sm px-4 py-2 gap-2",lg:"text-base px-5 py-2.5 gap-2.5"},fullWidth:{true:"w-full"}},defaultVariants:{variant:"primary",fullWidth:!1,size:"md"}}),j=B.forwardRef(({children:i,className:N,variant:R,size:l,fullWidth:w,icon:e,iconPosition:d="left",isLoading:c=!1,disabled:V,...T},O)=>{const P=!i&&e?l==="sm"?"p-1.5":l==="md"?"p-2":"p-2.5":"";return r.jsxs("button",{className:_(E({variant:R,size:l,fullWidth:w}),P,(V||c)&&"opacity-50 cursor-not-allowed pointer-events-none",N),ref:O,children:[!c&&e&&d==="left"&&r.jsx("span",{className:"inline-flex",children:e}),i&&r.jsx("span",{children:i}),!c&&e&&d==="right"&&r.jsx("span",{className:"inline-flex",children:e})]})});j.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}},composes:["ComponentProps","VariantProps"]};const F={title:"Components/Button",component:j,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"Click me",variant:"primary",size:"md",fullWidth:!1}},s={args:{children:"Click me",variant:"secondary",size:"md",fullWidth:!1}},t={args:{children:"Click me",variant:"ghost",size:"md",fullWidth:!1}},n={args:{children:"Click me",variant:"outline",size:"md",fullWidth:!1}},o={args:{children:"Click me",variant:"destructive",size:"md",fullWidth:!1}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "primary",
    size: "md",
    fullWidth: false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "secondary",
    size: "md",
    fullWidth: false
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "ghost",
    size: "md",
    fullWidth: false
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,C,W;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "outline",
    size: "md",
    fullWidth: false
  }
}`,...(W=(C=n.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var k,z,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "destructive",
    size: "md",
    fullWidth: false
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const H=["Primary","Secondary","Ghost","Outline","Destructive"];export{o as Destructive,t as Ghost,n as Outline,a as Primary,s as Secondary,H as __namedExportsOrder,F as default};
