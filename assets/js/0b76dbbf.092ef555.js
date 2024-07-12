"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[448],{7293:(e,t,n)=>{n.d(t,{A:()=>B});var o=n(6540),i=n(4848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var s=n(8215),c=n(1312),r=n(7559);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function l(e){let{type:t,className:n,children:o}=e;return(0,i.jsx)("div",{className:(0,s.A)(r.G.common.admonition,r.G.common.admonitionType(t),d.admonition,n),children:o})}function h(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:d.admonitionHeading,children:[(0,i.jsx)("span",{className:d.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:d.admonitionContent,children:t}):null}function p(e){const{type:t,icon:n,title:o,children:a,className:s}=e;return(0,i.jsxs)(l,{type:t,className:s,children:[o||n?(0,i.jsx)(h,{title:o,icon:n}):null,(0,i.jsx)(u,{children:a})]})}function m(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,i.jsx)(m,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,i.jsx)(p,{...x,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,i.jsx)(p,{...j,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function y(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,i.jsx)(y,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function D(e){return(0,i.jsx)(p,{...w,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function k(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const b={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const T={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const A={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const N={...{note:f,tip:v,info:D,warning:function(e){return(0,i.jsx)(p,{...b,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...T,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(f,{title:"secondary",...e}),important:e=>(0,i.jsx)(D,{title:"important",...e}),success:e=>(0,i.jsx)(v,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{...A,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};var H=n(6763);function B(e){const t=a(e),n=(o=t.type,N[o]||(H.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),N.info));var o;return(0,i.jsx)(n,{...t})}},4871:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>h,assets:()=>l,chCodeConfig:()=>u,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});n(6540);var o=n(4848),i=n(8453),a=n(4754),s=n(7293);const c={},r="Text and Data",d={id:"components/text-and-record",title:"Text and Data",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/components/text-and-record.mdx",sourceDirName:"components",slug:"/components/text-and-record",permalink:"/components/text-and-record",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Inputs and Outputs",permalink:"/components/inputs-and-outputs"},next:{title:"Data",permalink:"/components/data"}},l={},h={annotations:a.hk,Code:a.Cy,InlineCode:a.R0},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Data To Text",id:"data-to-text",level:2},{value:"Create Data",id:"create-data",level:2},{value:"Documents To Data",id:"documents-to-data",level:2},{value:"Why is this useful?",id:"why-is-this-useful",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function m(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,i.RP)(),e.components);return h||f("CH",!1),h.Code||f("CH.Code",!0),h.InlineCode||f("CH.InlineCode",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,o.jsx)(t.h1,{id:"text-and-data",children:"Text and Data"}),"\n",(0,o.jsx)(s.A,{type:"warning",title:"warning",children:(0,o.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,o.jsxs)(t.p,{children:["There are two main input and output types: ",(0,o.jsx)(t.code,{children:"Text"})," and ",(0,o.jsx)(t.code,{children:"Data"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Text"})," is a simple string input and output type, while ",(0,o.jsx)(t.code,{children:"Data"})," is a structure very similar to a dictionary in Python. It is a key-value pair data structure."]}),"\n",(0,o.jsx)(t.p,{children:"We've created a few components to help you work with these types. Let's see how a few of them work."}),"\n",(0,o.jsx)(t.h2,{id:"data-to-text",children:"Data To Text"}),"\n",(0,o.jsxs)(t.p,{children:["This is a component that takes in Data and outputs a ",(0,o.jsx)(t.code,{children:"Text"}),". It does this using a template string and concatenating the values of the ",(0,o.jsx)(t.code,{children:"Data"}),", one per line."]}),"\n",(0,o.jsx)(t.p,{children:"If we have the following Data:"}),"\n",(0,o.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "sender_name"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Alice"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "message"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Hello!"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "sender_name"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"John"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "message"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Hi!"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,o.jsxs)(t.p,{children:["And the template string is: ",(0,o.jsx)(h.InlineCode,{codeConfig:u,code:{lines:[{tokens:[{content:"{sender_name}: {message}",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"{sender_name}: {message}"})]}),"\n",(0,o.jsx)(t.p,{children:"The output is:"}),"\n",(0,o.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Alice: Hello!",props:{}}]},{tokens:[{content:"John: Hi!",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsx)(t.h2,{id:"create-data",children:"Create Data"}),"\n",(0,o.jsxs)(t.p,{children:["This component allows you to create a ",(0,o.jsx)(t.code,{children:"Data"})," from a number of inputs. You can add as many key-value pairs as you want (as long as it is less than 15). Once you've picked that number you'll need to write the name of the Key and can pass ",(0,o.jsx)(t.code,{children:"Text"})," values from other components to it."]}),"\n",(0,o.jsx)(t.h2,{id:"documents-to-data",children:"Documents To Data"}),"\n",(0,o.jsxs)(t.p,{children:["This component takes in a LangChain ",(0,o.jsx)(t.code,{children:"Document"})," and outputs a ",(0,o.jsx)(t.code,{children:"Data"}),". It does this by extracting the ",(0,o.jsx)(t.code,{children:"page_content"})," and the ",(0,o.jsx)(t.code,{children:"metadata"})," from the ",(0,o.jsx)(t.code,{children:"Document"})," and adding them to the ",(0,o.jsx)(t.code,{children:"Data"})," as text and data respectively."]}),"\n",(0,o.jsx)(t.h2,{id:"why-is-this-useful",children:"Why is this useful?"}),"\n",(0,o.jsx)(t.p,{children:"The idea was to create a unified way to work with complex data in Langflow and to make it easier to work with data that is not just a simple string. This way you can create more complex workflows and use the data in more ways."}),"\n",(0,o.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,o.jsx)(t.p,{children:"We are planning to integrate an array of modalities to Langflow, such as images, audio, and video. This will allow you to create even more complex workflows and use cases. Stay tuned for more updates! \ud83d\ude80"})]})}const x=function(e={}){const{wrapper:t}=Object.assign({},(0,i.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(m,e)})):m(e)};function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);