(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{16413:(e,t,r)=>{Promise.resolve().then(r.bind(r,31851))},31851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var a=r(95155),s=r(72857),l=r(22678),i=r(43038),n=r(60075),o=r(5480),d=r(12115);let h=e=>{let{label:t="Select an option",options:r,onChange:h,error:u=!1,helperText:x=""}=e,[c,p]=d.useState("");return(0,a.jsxs)(l.A,{fullWidth:!0,error:u,children:[(0,a.jsx)(i.A,{children:t}),(0,a.jsx)(n.A,{value:c,onChange:e=>{let t=e.target.value;p(t),null==h||h(t)},displayEmpty:!0,sx:{borderRadius:"8px",transition:"border 0.3s ease",width:"100%"},children:r.map(e=>(0,a.jsx)(o.A,{value:e.value,children:e.label},e.value))}),x&&(0,a.jsx)(s.A,{children:x})]})};var u=r(5861),x=r(91570),c=r(16847),p=r(67663),b=r(28858);let g=e=>{let{label:t="Select a time",value:r,onChange:s,error:l=!1}=e;return(0,a.jsx)(u.A,{error:l,children:(0,a.jsxs)(p.$,{dateAdapter:c.R,children:[(0,a.jsx)(x.A,{children:t}),(0,a.jsx)(b.A,{sx:{borderRadius:"8px",transition:"border 0.3s ease",width:"100%"},ampm:!1,value:r,onChange:s,slotProps:{textField:{inputProps:{readOnly:!0},error:!!l,helperText:l?"Date is required":""}}})]})})};var m=r(63699),v=r(50008),A=r(23540),j=r(59894),f=r(35309),w=r(10810),C=r(22282),D=r(76046);function S(){let e=(0,D.useRouter)(),t=(0,m.r)(e=>e.setUserData),[r,s]=d.useState(null),[l,i]=d.useState(""),[n,o]=d.useState({birthTime:!1,astroInterest:!1}),{userData:u}=(0,m.r)();return(0,d.useEffect)(()=>{u.birthDate&&u.birthLocation||e.replace("/onboarding/form")},[u,e]),(0,a.jsx)(v.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",flexGrow:1,overflow:"auto"},children:(0,a.jsxs)(A.A,{sx:{width:{xs:"90%"},maxHeight:"80vh",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)",backgroundColor:"white",padding:"20px",overflowY:"auto"},children:[(0,a.jsxs)(j.A,{children:[(0,a.jsx)(w.A,{variant:"h4",component:"div",sx:{fontWeight:"bold",mb:2,textAlign:"center"},children:"Go Deeper!"}),(0,a.jsx)(w.A,{sx:{color:"text.secondary",mb:3,textAlign:"center"},children:"Let's keep going with the deep details of your astrological profile."}),(0,a.jsx)(v.A,{sx:{marginBottom:"20px",height:100},children:(0,a.jsx)(g,{label:"Birth Time",onChange:e=>{s(e),e&&o(e=>({...e,birthTime:!1}))},error:n.birthTime})}),(0,a.jsx)(v.A,{sx:{marginBottom:"20px",height:80},children:(0,a.jsx)(h,{label:"Select an Interest",options:[{value:"career",label:"Career & Ambitions"},{value:"love",label:"Love & Relationships"},{value:"health",label:"Health & Wellness"},{value:"wealth",label:"Wealth & Abundance"},{value:"spiritual",label:"Spiritual Growth"}],onChange:e=>{i(e||""),o(t=>({...t,astroInterest:!e}))},error:n.astroInterest,helperText:n.astroInterest?"Please add an interest":""})})]}),(0,a.jsx)(f.A,{children:(0,a.jsx)(C.A,{onClick:()=>{let a=!0,s={birthTime:!1,astroInterest:!1};r||(s.birthTime=!0,a=!1),l.trim()||(s.astroInterest=!0,a=!1),o(s),a&&(t({birthTime:r?r.toISOString():null,astroInterest:l}),e.push("/onboarding/resume"))},variant:"contained",sx:{backgroundColor:"#6B73FF",color:"white",borderRadius:"8px",width:"100%","&:hover":{backgroundColor:"#556cd6"}},children:"Next"})})]})})}},63699:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});let a=(0,r(99827).v)((e,t)=>({userData:{},setUserData:t=>e(e=>({userData:{...e.userData,...t}})),clearUserData:()=>e({userData:{}}),getUserData:()=>t().userData}))}},e=>{var t=t=>e(e.s=t);e.O(0,[810,818,201,405,858,441,517,358],()=>t(16413)),_N_E=e.O()}]);