(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{80871:(e,t,r)=>{Promise.resolve().then(r.bind(r,2549))},2549:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var o=r(95155),a=r(62093),n=r.n(a),i=r(27735),s=r.n(i),l=r(12983);let p=(0,l.A)((0,o.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");var c=r(12115),d=r(43463),u=r(26288),x=r(89142),f=r(52091),m=r(49019),b=r(37410),g=r(31628),v=r(78562),h=r(75250),A=r(33318);function y(e){return(0,A.Ay)("MuiAppBar",e)}(0,h.A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);let k=e=>{let{color:t,position:r,classes:o}=e,a={root:["root","color".concat((0,b.A)(t)),"position".concat((0,b.A)(r))]};return(0,u.A)(a,y,o)},B=(e,t)=>e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t,S=(0,x.Ay)(v.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["position".concat((0,b.A)(r.position))],t["color".concat((0,b.A)(r.color))]]}})((0,f.A)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter((0,g.A)(["contrastText"])).map(e=>{var r,o;let[a]=e;return{props:{color:a},style:{"--AppBar-background":(null!==(r=t.vars)&&void 0!==r?r:t).palette[a].main,"--AppBar-color":(null!==(o=t.vars)&&void 0!==o?o:t).palette[a].contrastText}}}),{props:e=>!0===e.enableColorOnDark&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:e=>!1===e.enableColorOnDark&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?B(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?B(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}})),j=c.forwardRef(function(e,t){let r=(0,m.b)({props:e,name:"MuiAppBar"}),{className:a,color:n="primary",enableColorOnDark:i=!1,position:s="fixed",...l}=r,p={...r,color:n,position:s,enableColorOnDark:i},c=k(p);return(0,o.jsx)(S,{square:!0,component:"header",ownerState:p,elevation:4,className:(0,d.A)(c.root,a,"fixed"===s&&"mui-fixed"),ref:t,...l})});var C=r(70636),W=r(92648);let w=(0,r(76492).Ay)(),M=(0,r(51073).A)(),_=w("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,C.A)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),R=e=>(0,W.A)({props:e,name:"MuiContainer",defaultTheme:M}),N=(e,t)=>{let{classes:r,fixed:o,disableGutters:a,maxWidth:n}=e,i={root:["root",n&&"maxWidth".concat((0,C.A)(String(n))),o&&"fixed",a&&"disableGutters"]};return(0,u.A)(i,e=>(0,A.Ay)(t,e),r)},z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{createStyledComponent:t=_,useThemeProps:r=R,componentName:a="MuiContainer"}=e,n=t(e=>{let{theme:t,ownerState:r}=e;return{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}},e=>{let{theme:t,ownerState:r}=e;return r.fixed&&Object.keys(t.breakpoints.values).reduce((e,r)=>{let o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e},{})},e=>{let{theme:t,ownerState:r}=e;return{..."xs"===r.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...r.maxWidth&&"xs"!==r.maxWidth&&{[t.breakpoints.up(r.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}}}});return c.forwardRef(function(e,t){let i=r(e),{className:s,component:l="div",disableGutters:p=!1,fixed:c=!1,maxWidth:u="lg",classes:x,...f}=i,m={...i,component:l,disableGutters:p,fixed:c,maxWidth:u},b=N(m,a);return(0,o.jsx)(n,{as:l,ownerState:m,className:(0,d.A)(b.root,s),ref:t,...f})})}({createStyledComponent:(0,x.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,b.A)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,m.b)({props:e,name:"MuiContainer"})});function G(e){return(0,A.Ay)("MuiToolbar",e)}(0,h.A)("MuiToolbar",["root","gutters","regular","dense"]);let I=e=>{let{classes:t,disableGutters:r,variant:o}=e;return(0,u.A)({root:["root",!r&&"gutters",o]},G,t)},T=(0,x.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((0,f.A)(e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",variants:[{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}})),F=c.forwardRef(function(e,t){let r=(0,m.b)({props:e,name:"MuiToolbar"}),{className:a,component:n="div",disableGutters:i=!1,variant:s="regular",...l}=r,p={...r,component:n,disableGutters:i,variant:s},c=I(p);return(0,o.jsx)(T,{as:n,className:(0,d.A)(c.root,a),ref:t,ownerState:p,...l})});var L=r(10810);function D(){return(0,o.jsx)(j,{position:"static",sx:{backgroundColor:"#1a1a2e",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.5)"},children:(0,o.jsx)(z,{maxWidth:"xl",children:(0,o.jsxs)(F,{disableGutters:!0,children:[(0,o.jsx)(p,{sx:{display:{xs:"none",md:"flex"},color:"#f9c74f",mr:1,fontSize:"40px"}}),(0,o.jsx)(L.A,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"#f9c74f",textDecoration:"none",fontSize:"1.5rem"},children:"AstroClub"}),(0,o.jsx)(L.A,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{display:{xs:"flex",md:"none"},fontFamily:"monospace",fontWeight:700,color:"#f9c74f",textDecoration:"none"},children:"AstroClub"})]})})})}r(30347);let O=(0,l.A)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite");function E(){return(0,o.jsx)("footer",{className:"bg-[#23234d] py-4 text-center w-full flex justify-center",children:(0,o.jsxs)(L.A,{variant:"body2",color:"white",className:"flex items-center",children:["\xa9 Made with"," ",(0,o.jsx)(O,{sx:{color:"#fa8cf6",mx:1,fontSize:"30px"}})," ","by Yan"]})})}function P(e){let{children:t}=e;return(0,o.jsx)("html",{lang:"en",children:(0,o.jsxs)("body",{className:"".concat(n().variable," ").concat(s().variable," antialiased bg-[#1a1a2e] text-white overflow-x-hidden flex flex-col h-screen"),children:[(0,o.jsx)(D,{}),(0,o.jsx)("div",{className:"flex-grow flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16",children:(0,o.jsx)("main",{className:"flex flex-col gap-4 row-start-2 items-center sm:items-start",children:t})}),(0,o.jsx)(E,{})]})})}},30347:()=>{},62093:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},27735:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[360,810,201,441,517,358],()=>t(80871)),_N_E=e.O()}]);