"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6335],{7136:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var a=i(5893),n=i(1151);const c={title:"ActiveJ 4.1 - Optimization and simplification",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/2021/03/19/v4.1",source:"@site/blog/2021-03-19-v4.1.md",title:"ActiveJ 4.1 - Optimization and simplification",description:"ActiveJ v4.1 was released Mar 19, 2021 (see on Maven).",date:"2021-03-19T00:00:00.000Z",formattedDate:"March 19, 2021",tags:[],readingTime:.83,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ActiveJ 4.1 - Optimization and simplification",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"ActiveJ 4.2 - Expanded functionality",permalink:"/blog/2021/04/13/v4.2"},nextItem:{title:"ActiveJ 4.0 - Refactoring of exceptions",permalink:"/blog/2021/02/16/v4.0"}},r={authorsImageUrls:[]},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["ActiveJ v4.1 was released Mar 19, 2021 (",(0,a.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.activej/activej/4.1",children:"see on Maven"}),").\nThis release included optimization and simplification of HTTP code, expanding functionality of some components."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"HTTP refactoring and optimizations"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Optimized and simplified processing of incoming HTTP messages, headers and URLs"}),"\n",(0,a.jsx)(t.li,{children:"Added preconditions for an HTTP message which guard against using recycled messages"}),"\n",(0,a.jsxs)(t.li,{children:["User-created HTTP messages (",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpRequest.java",children:"HttpRequest"}),"\nfor ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncHttpClient.java",children:"AsyncHttpClient"})," /\n",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpResponse.java",children:"HttpResponse"})," in\n",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncServlet.java",children:"AsyncServlet"}),") are not recycled anymore\n(only message body is recycled if present), thus making it possible to cache and reuse them"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Added ",(0,a.jsx)(t.code,{children:"Promise<Void> fetch()"})," method to ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/extra/cloud-ot/src/main/java/io/activej/ot/OTStateManager.java",children:"OTStateManager"}),".\nFetched changes are stored without being applied to the current state."]}),"\n",(0,a.jsxs)(t.li,{children:["Improved casting of deserialized fields in ",(0,a.jsx)(t.a,{href:"https://serializer.activej.io/",children:"ActiveJ Serializer"})]}),"\n",(0,a.jsxs)(t.li,{children:["Added default ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/api/Initializer.java",children:"Initializer"}),"s\nfor common components"]}),"\n",(0,a.jsxs)(t.li,{children:["Added preconditions when applying operations to ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/extra/cloud-etl/src/main/java/io/activej/etl/LogOTState.java",children:"LogOTState"})]}),"\n",(0,a.jsxs)(t.li,{children:["Removed ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/boot-jmx/src/main/java/io/activej/jmx/JmxModule.java",children:"JmxModule"})," from common HTTP launchers"]}),"\n",(0,a.jsxs)(t.li,{children:["Added new JMX stats to ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/cloud-rpc/src/main/java/io/activej/rpc/client/RpcClient.java",children:"RpcClient"}),"\nfor monitoring unresponsive RPC servers"]}),"\n",(0,a.jsxs)(t.li,{children:["Added ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/ApplicationSettings.java",children:"ApplicationSettings"}),"\nmethod for obtaining a default ",(0,a.jsx)(t.code,{children:"Locale"})]}),"\n",(0,a.jsxs)(t.li,{children:["Stick to using ",(0,a.jsx)(t.code,{children:"en-US"})," locale when formatting ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/EventStats.java",children:"EventStats"}),"\nand ",(0,a.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/ValueStats.java",children:"ValueStats"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var a=i(7294);const n={},c=a.createContext(n);function o(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);