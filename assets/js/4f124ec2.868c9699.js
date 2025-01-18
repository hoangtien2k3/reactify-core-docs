"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6487],{6579:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(5893),s=i(1151),c=i(7618);const a={sidebar_label:"Speeding up dependency injection"},r="Speeding up dependency injection",o={id:"inject/speeding-up-injection",title:"Speeding up dependency injection",description:"ActiveJ Specializer optimization",source:"@site/docs/inject/speeding-up-injection.mdx",sourceDirName:"inject",slug:"/inject/speeding-up-injection",permalink:"/inject/speeding-up-injection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Speeding up dependency injection"},sidebar:"docs",previous:{title:"Transient bindings",permalink:"/inject/transient-bindings"},next:{title:"Under the hood",permalink:"/inject/under-the-hood"}},l={},d=[{value:"ActiveJ Specializer optimization",id:"activej-specializer-optimization",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Speeding up RPC request processing",id:"speeding-up-rpc-request-processing",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"speeding-up-dependency-injection",children:"Speeding up dependency injection"}),"\n",(0,t.jsx)(n.h2,{id:"activej-specializer-optimization",children:"ActiveJ Specializer optimization"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/specializer",children:(0,t.jsx)(n.strong,{children:"ActiveJ Specializer"})})," is a library that optimizes code for the JVM. You can simply combine\nit with ActiveJ Inject and speed up your code by ",(0,t.jsx)(c.Z,{text:"up to 30%",url:"/benchmarks/inject/src/main/java/io/activej/inject/ActiveJDirectScopebindBenchmark.java"}),"\nTo set up ActiveJ Specializer, simply use ",(0,t.jsx)(n.code,{children:"Injector.useSpecializer()"})," before instantiating the ",(0,t.jsx)(n.strong,{children:"Injector"}),".\nActiveJ Inject compiles bindings at runtime into a highly efficient representation. When combined with ActiveJ Specializer,\nbindings can be turned into bytecode, which will be just as efficient as manually written code. This way, you get\nmaximum performance in real-life projects without having to maintain complex manual code."]}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsxs)(n.p,{children:["To understand how ActiveJ Specializer works, you can read the ",(0,t.jsx)(n.a,{href:"/specializer",children:"specializer documentation"}),".\nHere we will use a simple example to try to explain how the specializer works in relation to ActiveJ Inject."]}),"\n",(0,t.jsxs)(n.p,{children:["The specializer transforms class instances into a special classes in which instance methods are replaced with static methods\nand instance fields are replaced with static fields. Instances that are specialized are actually instances of a ",(0,t.jsx)(c.Z,{text:"CompiledBinding",url:"/core-inject/src/main/java/io/activej/inject/impl/CompiledBinding"})," class."]}),"\n",(0,t.jsx)(n.p,{children:"Suppose we have a module that defines the following binding:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Provides\nInteger length(String string) {\n    return string.length();\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The compiled bindings here may look like this (a simplified version):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class CompiledBindingImpl<R, U> implements CompiledBinding<R> {\n    private final CompiledBinding<U> otherBinding;\n\n    private R instance;\n\n    public CompiledBindingImpl(CompiledBinding<U> otherBinding) {\n        this.otherBinding = otherBinding;\n    }\n\n    public R getInstance() {\n        if (instance != null) {\n            return instance;\n        } else {\n            U otherInstance = otherBinding.getInstance();\n            this.instance = createInstance(otherInstance);\n            return this.instance;\n        }\n    }\n\n    protected R createInstance(U otherInstance) {\n        // ...\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If we use ",(0,t.jsx)(n.code,{children:"Injector.useSpecializer()"})," before creating the injector, we get a specialized compiled binding (a simplified version):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class CompiledBindingInteger implements CompiledBinding<Integer> {\n    private static Integer instance;\n\n    public Integer getInstance() {\n        return getInstanceSpecialized();\n    }\n\n    public static Integer getInstanceSpecialized() {\n        if (instance != null) {\n            return instance;\n        } else {\n            String stringInstance = CompiledBindingString.getInstanceSpecialized();\n            this.instance = createInstance(stringInstance);\n            return this.instance;\n        }\n    }\n\n    public static Integer createInstance(String otherInstance) {\n        // ...\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Because the specializer replaced instance methods with static methods and instance fields with static fields, this allows for\nadditional JVM optimizations and also neglects the overhead of dynamic dispatching. Also, this may seem like minimal\noptimization, but imagine if you have a huge dependency graph and need to create instances at runtime. For example, when\nusing ActiveJ Inject to handle HTTP requests, when you need to instantiate new objects at every HTTP request. In this\nscenario, the performance boost of using the specializer would be significant."}),"\n",(0,t.jsx)(n.h2,{id:"speeding-up-rpc-request-processing",children:"Speeding up RPC request processing"}),"\n",(0,t.jsxs)(n.p,{children:["We created an ",(0,t.jsx)(c.Z,{text:"example",url:"/examples/cloud/rpc/src/main/java/specializer/ScopedRpcServerExample.java"})," of\nusing ActiveJ Inject + ActiveJ Specializer to improve the performance of an RPC server that uses dependency injection to process RPC\nrequests. To learn more about ActiveJ RPC you can visit ",(0,t.jsx)(n.a,{href:"/rpc",children:"this page"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The dependency graph on the server is similar to the one show in the ",(0,t.jsx)(n.a,{href:"/inject/cookbook-example",children:"Cookbook example"}),". Each incoming RPC\nrequest is handled within the RPC ",(0,t.jsx)(n.a,{href:"/inject/scopes",children:"scope"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The example also comes with a dedicated ",(0,t.jsx)(c.Z,{text:"benchmark tool",url:"/examples/cloud/rpc/src/main/java/specializer/ScopedRpcBenchmarkClient.java"})," that\nyou can run to measure server performance."]}),"\n",(0,t.jsxs)(n.p,{children:["Try running the server and the benchmark tool as-is and measure the performance. Then comment out the ",(0,t.jsx)(n.code,{children:"Injector.useSpecializer()"})," line\nin ",(0,t.jsx)(c.Z,{text:"ScopedRpcServerExample",url:"/examples/cloud/rpc/src/main/java/specializer/ScopedRpcServerExample.java"})," and run\nthe server and the benchmark tool again. You should see significant performance gains over not using ActiveJ Specializer.\nWe have measured server performance gains of up to 2x."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7618:(e,n,i)=>{i.d(n,{Z:()=>c});i(7294);var t=i(9962),s=i(5893);const c=e=>{let{url:n,text:i,isInline:c=!0,children:a}=e;const{siteConfig:r}=(0,t.Z)(),o=n.startsWith("/examples")?r.customFields.githubExamplesBranch:r.customFields.githubBranch;return(0,s.jsx)("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:r.customFields.githubUrl+"/"+o+n,target:"_blank",children:i||a})}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var t=i(7294);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);