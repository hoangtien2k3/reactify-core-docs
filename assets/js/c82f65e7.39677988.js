"use strict";(self.webpackChunkReactifydocs=self.webpackChunkReactifydocs||[]).push([[6105],{2360:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=i(5893),s=i(1151),n=i(7815),a=i(3149);const o={description:"Reactify FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",sidebar_label:"Overview",keywords:["storage","distributed storage","redundancy","rebelancing","kernel-space","java framework","ftp protocol","append-only"],slug:"/fs"},l="Overview",c={id:"fs/overview",title:"Overview",description:"Reactify FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",source:"@site/docs/fs/overview.mdx",sourceDirName:"fs",slug:"/fs",permalink:"/fs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Reactify FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",sidebar_label:"Overview",keywords:["storage","distributed storage","redundancy","rebelancing","kernel-space","java framework","ftp protocol","append-only"],slug:"/fs"},sidebar:"docs",previous:{title:"Memcached-like Application",permalink:"/rpc/memcached-like-application"},next:{title:"Examples",permalink:"/fs/examples"}},d={},h=[{value:"Why Reactify FS?",id:"why-Reactify-fs",level:2},{value:"Where Reactify FS can be used?",id:"where-Reactify-fs-can-be-used",level:2},{value:"Streaming file access",id:"streaming-file-access",level:2},{value:"Add Reactify FS to your project",id:"add-Reactify-fs-to-your-project",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Reactify FS is a lightweight asynchronous Java library that provides a tiny abstraction on top of common file operations. It provides methods for uploading, downloading, appending, listing, copying, moving, deleting and other methods for working with local, remote or distributed storages."}),"\n",(0,r.jsx)(t.h2,{id:"why-Reactify-fs",children:"Why Reactify FS?"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Asynchronous file system"}),"\n",(0,r.jsx)(t.li,{children:"Lightweight by design"}),"\n",(0,r.jsx)(t.li,{children:"Intuitive API consisting of well-known file operations"}),"\n",(0,r.jsx)(t.li,{children:"Supports atomic file uploads"}),"\n",(0,r.jsx)(t.li,{children:"Supports client-server communication using the custom binary protocol as well as the HTTP protocol"}),"\n",(0,r.jsx)(t.li,{children:"Can be launched as a distributed file system cluster"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"where-Reactify-fs-can-be-used",children:"Where Reactify FS can be used?"}),"\n",(0,r.jsx)(t.p,{children:"There are several Reactify FS implementations:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Local Reactify FS"})," is designed to work with file systems located on a single machine. Ideal for implementing ",(0,r.jsx)(t.strong,{children:"local file storage for your application"}),", such as database storage, data backup storage, local logs storage, etc."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Client/Server implementations"})," for working with files that are stored remotely. This implementation supports two protocols:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A custom ",(0,r.jsx)(t.strong,{children:"binary protocol based on TCP"})," with zero overhead. Similar to FTP, but simpler and more efficient."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"HTTP protocol"})," that allows you to define a REST API. It also provides third-party clients, such as browsers, with access to remote Reactify FS servers."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Reactify FS Cluster"})," is designed for distributed big data workloads. It is optimized to handle large immutable datasets or append-only files. Cluster Reactify FS has been intentionally made ",(0,r.jsx)(t.strong,{children:"not POSIX-compilant"})," and works only with ",(0,r.jsx)(t.strong,{children:"immutable files"}),". This makes the entire system simple, lightweight, and resilient to server or network failures. Moreover, this approach avoids the overhead of master-slave architecture and synchronization of mutable files. With Reactify FS you can create distributed, scalable P2P file systems with built-in support for rebalancing, fault tolerance, and scalability."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Reactify FS Adapters"})," allow you to filter, mount, transform file names, add and remove prefixes, subdirectories, etc."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"streaming-file-access",children:"Streaming file access"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"upload()"})," and ",(0,r.jsx)(t.code,{children:"download()"})," operations use the ",(0,r.jsx)(t.a,{href:"/async-io/csp",children:"CSP"})," module, so files are uploaded/downloaded using asynchronous data streams."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'String filename = "hello.txt";\n\nEventloop eventloop = Eventloop.builder().withCurrentThread().build();\nExecutor executor = Executors.newSingleThreadExecutor();\n\nFileSystem fileSystem = FileSystem.create(eventloop, executor, Paths.get("/tmp/file-storage"));\n\nfileSystem.start()\n\t\t.then(() -> ChannelSupplier.of(ByteBufStrings.wrapAscii("Hello World"))\n\t\t\t\t.streamTo(fileSystem.upload(filename)))\n\t\t.then(() -> fileSystem.download(filename))\n\t\t.map(supplier -> supplier.map(buf -> buf.asString(StandardCharsets.US_ASCII)))\n\t\t.then(supplier -> supplier.streamTo(ChannelConsumer.ofConsumer(System.out::println)));\n\neventloop.run();\n'})}),"\n",(0,r.jsx)(t.h2,{id:"add-Reactify-fs-to-your-project",children:"Add Reactify FS to your project"}),"\n",(0,r.jsxs)(t.p,{children:["You can add Reactify FS to your project by importing its Maven repository.\nThese docs cover the most recent release of Reactify FS ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(n.Z,{name:"currentVersion"})})," (see on ",(0,r.jsx)(a.Z,{href:"https://github.com/hoangtien2k3/reactify-core/tree/{{currentVersion}}/cloud-fs",children:"Github"})," or ",(0,r.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.Reactify/Reactify-fs",children:"Maven"}),")."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3149:(e,t,i)=>{i.d(t,{Z:()=>c});i(7294);var r=i(9962),s=i(1106),n=i.n(s),a=i(5835),o=i.n(a),l=i(5893);o().interpolate=/{{([\s\S]+?)}}/g;const c=function(e){let{href:t,children:i,target:s="_blank"}=e;const{siteConfig:a}=(0,r.Z)(),o=n()(t);return(0,l.jsx)("a",{href:o(a.customFields),target:s,children:i})}},7815:(e,t,i)=>{i.d(t,{Z:()=>s});i(7294);var r=i(9962);const s=e=>{let{name:t}=e;const{siteConfig:i}=(0,r.Z)();if(!t)throw new Error("Variable name is required");if(void 0===i.customFields[t])throw new Error(`Variable ${t} not exist`);return i.customFields[t]}}}]);