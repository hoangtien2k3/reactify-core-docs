"use strict";(self.webpackChunkReactifydocs=self.webpackChunkReactifydocs||[]).push([[3981],{1450:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=i(5893),t=i(1151),d=i(7618);const c={sidebar_label:"Optional dependencies"},r="Optional dependencies",s={id:"inject/optional-dependencies",title:"Optional dependencies",description:"What are optional dependencies?",source:"@site/docs/inject/optional-dependencies.mdx",sourceDirName:"inject",slug:"/inject/optional-dependencies",permalink:"/inject/optional-dependencies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Optional dependencies"},sidebar:"docs",previous:{title:"Transforming bindings",permalink:"/inject/binding-transformation"},next:{title:"Scopes",permalink:"/inject/scopes"}},a={},l=[{value:"What are optional dependencies?",id:"what-are-optional-dependencies",level:2},{value:"Providing an optional dependency",id:"providing-an-optional-dependency",level:2},{value:"Implicit optional dependency",id:"implicit-optional-dependency",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,o.jsx)(n.h2,{id:"what-are-optional-dependencies",children:"What are optional dependencies?"}),"\n",(0,o.jsx)(n.p,{children:"There are situations where you create a standalone module and do not know whether a component should be provided or not.\nThis may dependent on the runtime configuration or on whether a component has been provided by another module."}),"\n",(0,o.jsx)(n.p,{children:"Or, alternatively, a provided component may depend on another component that could potentially not be provided by some\nother module."}),"\n",(0,o.jsxs)(n.p,{children:["In this case, you can use an ",(0,o.jsx)(d.Z,{url:"/core-inject/src/main/java/io/Reactify/inject/binding/OptionalDependency.java",children:(0,o.jsx)(n.code,{children:"OptionalDependency"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.code,{children:"OptionalDependency"})," is similar to the ",(0,o.jsx)(n.code,{children:"Optional"})," class in Java. It can either have a component provided or not."]}),"\n",(0,o.jsx)(n.h2,{id:"providing-an-optional-dependency",children:"Providing an optional dependency"}),"\n",(0,o.jsx)(n.p,{children:"Your module can explicitly provide an optional dependency, and another module can depend on it.\nLet's say we have some kind of service that needs to be provided based on the runtime configuration."}),"\n",(0,o.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class ServiceModule extends AbstractModule {\n\n    @Provides\n    OptionalDependency<Service> service(Config config) {\n        boolean shouldBeProvided = config.get(ofBoolean(), "service.isProvided");\n        if (shouldBeProvided) {\n            return OptionalDependency.of(new Service());\n        } else {\n            return OptionalDependency.empty();\n        }\n    }\n}\n\npublic class ServiceStringModule extends AbstractModule {\n\n    @Provides\n    String serviceString(OptionalDependency<Service> optionalService) {\n        if (optionalService.isPresent()) {\n            Service service = optionalService.get();\n            return service.getString();\n        } else {\n            return "none";\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"service.isProvided"})," is set to ",(0,o.jsx)(n.code,{children:"true"})," in the configuration, the ",(0,o.jsx)(n.code,{children:"Service"})," will be provided and the ServiceStringModule\nwill provide the String form the Service. Otherwise, the default String will be provided."]}),"\n",(0,o.jsx)(n.h2,{id:"implicit-optional-dependency",children:"Implicit optional dependency"}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes, when creating a standalone module you do not know beforehand whether some dependency is provided by another module.\nIn this case, you can still use ",(0,o.jsx)(n.code,{children:"OptionalDependency"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Suppose we have a ",(0,o.jsx)(n.code,{children:"ServiceModule"})," which may or may not be installed in the ",(0,o.jsx)(n.code,{children:"Injector"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public class ServiceModule extends AbstractModule {\n\n    @Provides\n    Service service() {\n        return new Service();\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And the ",(0,o.jsx)(n.code,{children:"ServiceStringModule"}),", which does not know if ",(0,o.jsx)(n.code,{children:"ServiceModule"})," is installed:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class ServiceStringModule extends AbstractModule {\n\n    @Provides\n    String serviceString(OptionalDependency<Service> optionalService) {\n        if (optionalService.isPresent()) {\n            Service service = optionalService.get();\n            return service.getString();\n        } else {\n            return "none";\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Although, we have not provided an ",(0,o.jsx)(n.code,{children:"OptionalDependency<Service>"})," explicitly, Reactify Inject automatically resolves such dependencies.\nThus, if a ",(0,o.jsx)(n.code,{children:"ServiceModule"})," is installed and ",(0,o.jsx)(n.code,{children:"Service"})," is actually provided, a ",(0,o.jsx)(n.code,{children:"ServiceStringModule"})," will receive an ",(0,o.jsx)(n.code,{children:"OptionalDependency"}),"\nof the provided ",(0,o.jsx)(n.code,{children:"Service"}),". Otherwise, if no ",(0,o.jsx)(n.code,{children:"ServiceModule"})," is installed and no ",(0,o.jsx)(n.code,{children:"Service"})," is provided, the ",(0,o.jsx)(n.code,{children:"ServiceStringModule"})," will receive an\nempty ",(0,o.jsx)(n.code,{children:"OptionalDependency"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You may wonder why we had to come up with an explicit ",(0,o.jsx)(n.code,{children:"OptionalDependency"})," class instead of using the ",(0,o.jsx)(n.code,{children:"Optional"})," class from Java.\nThe reason is that ",(0,o.jsx)(n.code,{children:"OptionalDependency"})," is explicitly handled in the ",(0,o.jsx)(n.a,{href:"/boot/servicegraph",children:(0,o.jsx)(n.code,{children:"Service Graph"})})," and also\nwhen registering JMX components. Another reason is that ",(0,o.jsx)(n.code,{children:"Optional"})," was designed to be used mainly as a return type.\nOn the other hand, it is perfectly fine to use ",(0,o.jsx)(n.code,{children:"OptionalDependency"})," as a method parameter."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},7618:(e,n,i)=>{i.d(n,{Z:()=>d});i(7294);var o=i(9962),t=i(5893);const d=e=>{let{url:n,text:i,isInline:d=!0,children:c}=e;const{siteConfig:r}=(0,o.Z)(),s=n.startsWith("/examples")?r.customFields.githubExamplesBranch:r.customFields.githubBranch;return(0,t.jsx)("a",{style:d?{}:{display:"block",marginBottom:"16px"},href:r.customFields.githubUrl+"/"+s+n,target:"_blank",children:i||c})}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var o=i(7294);const t={},d=o.createContext(t);function c(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);