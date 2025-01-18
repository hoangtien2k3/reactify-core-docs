"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9473],{7766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(5893),r=n(1151),a=n(7618);const c={sidebar_label:"Benchmarks"},i="Benchmarks",o={id:"http/benchmarks",title:"Benchmarks",description:"We have measured the performance of HTTP GET request using JMH as a benchmark tool:",source:"@site/docs/http/benchmarks.mdx",sourceDirName:"http",slug:"/http/benchmarks",permalink:"/http/benchmarks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Benchmarks"},sidebar:"docs",previous:{title:"Overview",permalink:"/http"},next:{title:"Examples",permalink:"/http/examples"}},h={},l=[];function m(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,s.jsxs)(t.p,{children:["We have measured the performance of ",(0,s.jsx)(t.strong,{children:"HTTP"})," ",(0,s.jsx)(t.em,{children:"GET"})," request using JMH as a benchmark tool:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"Time: 29112ms;\nAverage time: 5822.4ms;\nBest time: 5757ms;\nWorst time: 5892ms;\nRequests per second: 171750;\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ActiveJ"}),"'s result is ",(0,s.jsx)(t.strong,{children:"171.8K RPS"})," on a single CPU. This is not only faster than the highly specialized ",(0,s.jsx)(t.strong,{children:"Vert.x\n(162.9K RPS)"}),", but also with 50% less CPU load."]}),"\n",(0,s.jsxs)(t.p,{children:["When using HTTP pipelining, performance reaches ",(0,s.jsx)(t.strong,{children:"1.5M RPS"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["ActiveJ has placed ",(0,s.jsx)(t.strong,{children:"first"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/the-benchmarker/web-frameworks",children:"the-benchmarker's web frameworks benchmark"})," as per ",(0,s.jsx)(t.strong,{children:"2023-05-01"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["According to the results of the ",(0,s.jsx)(t.a,{href:"https://github.com/TechEmpower/FrameworkBenchmarks",children:"TechEmpower"}),"'s continuous benchmark runs, ActiveJ HTTP ranks among the top Java servers in\nthe ",(0,s.jsx)(t.a,{href:"https://www.techempower.com/benchmarks/#section=data-r21&test=json&l=zik0vz-6bj",children:"JSON"})," and\n",(0,s.jsx)(t.a,{href:"https://www.techempower.com/benchmarks/#section=data-r21&test=plaintext&l=zik0vz-6bj",children:"Plaintext"})," categories."]}),"\n",(0,s.jsxs)(t.p,{children:["You can find HTTP benchmark sources on ",(0,s.jsx)(a.Z,{text:"GitHub",url:"/benchmarks/http/src/main/java/io/activej/http/HttpServerWorkloadBenchmark.java"})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},7618:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var s=n(9962),r=n(5893);const a=e=>{let{url:t,text:n,isInline:a=!0,children:c}=e;const{siteConfig:i}=(0,s.Z)(),o=t.startsWith("/examples")?i.customFields.githubExamplesBranch:i.customFields.githubBranch;return(0,r.jsx)("a",{style:a?{}:{display:"block",marginBottom:"16px"},href:i.customFields.githubUrl+"/"+o+t,target:"_blank",children:n||c})}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var s=n(7294);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);