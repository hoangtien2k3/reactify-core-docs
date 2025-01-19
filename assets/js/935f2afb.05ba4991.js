"use strict"; (self.webpackChunkactivejdocs = self.webpackChunkactivejdocs || []).push([[53], { 1109: e => { e.exports = JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorials":[{"type":"link","label":"Getting Started","href":"/tutorials/getting-started","docId":"tutorials/getting-started","unlisted":false},{"type":"link","label":"Reactify-Core + Docker","href":"/tutorials/getting-started-advanced","docId":"tutorials/getting-started-advanced","unlisted":false},{"type":"link","label":"Reactify-Core + GraalVM native image","href":"/tutorials/native-image","docId":"tutorials/native-image","unlisted":false}],"docs":[{"type":"link","label":"Overview","href":"/overview","docId":"overview","unlisted":false},{"type":"category","label":"Async I/O","items":[{"type":"link","label":"Eventloop","href":"/async-io/eventloop","docId":"async-io/eventloop","unlisted":false},{"type":"link","label":"Promise","href":"/async-io/promise","docId":"async-io/promise","unlisted":false},{"type":"link","label":"CSP","href":"/async-io/csp","docId":"async-io/csp","unlisted":false},{"type":"link","label":"Datastream","href":"/async-io/datastream","docId":"async-io/datastream","unlisted":false},{"type":"link","label":"Net","href":"/async-io/net","docId":"async-io/net","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Boot","items":[{"type":"link","label":"Launcher","href":"/boot/launcher","docId":"boot/launcher","unlisted":false},{"type":"link","label":"Service Graph","href":"/boot/servicegraph","docId":"boot/servicegraph","unlisted":false},{"type":"link","label":"Workers","href":"/boot/workers","docId":"boot/workers","unlisted":false},{"type":"link","label":"Config","href":"/boot/config","docId":"boot/config","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"HTTP","items":[{"type":"link","label":"Overview","href":"/http","docId":"http/overview","unlisted":false},{"type":"link","label":"Benchmarks","href":"/http/benchmarks","docId":"http/benchmarks","unlisted":false},{"type":"link","label":"Examples","href":"/http/examples","docId":"http/examples","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Inject","items":[{"type":"link","label":"Overview","href":"/inject","docId":"inject/overview","unlisted":false},{"type":"link","label":"Basics","href":"/inject/basics","docId":"inject/basics","unlisted":false},{"type":"link","label":"Quick Start","href":"/inject/quick-start.html","docId":"inject/quick-start","unlisted":false},{"type":"link","label":"Injecting instances","href":"/inject/injecting-instances","docId":"inject/injecting-instances","unlisted":false},{"type":"link","label":"Class scanning","href":"/inject/class-scanning","docId":"inject/class-scanning","unlisted":false},{"type":"link","label":"Duplicate bindings","href":"/inject/duplicate-bindings","docId":"inject/duplicate-bindings","unlisted":false},{"type":"link","label":"Generating bindings","href":"/inject/binding-generation","docId":"inject/binding-generation","unlisted":false},{"type":"link","label":"Transforming bindings","href":"/inject/binding-transformation","docId":"inject/binding-transformation","unlisted":false},{"type":"link","label":"Optional dependencies","href":"/inject/optional-dependencies","docId":"inject/optional-dependencies","unlisted":false},{"type":"link","label":"Scopes","href":"/inject/scopes","docId":"inject/scopes","unlisted":false},{"type":"link","label":"Transient bindings","href":"/inject/transient-bindings","docId":"inject/transient-bindings","unlisted":false},{"type":"link","label":"Speeding up dependency injection","href":"/inject/speeding-up-injection","docId":"inject/speeding-up-injection","unlisted":false},{"type":"link","label":"Under the hood","href":"/inject/under-the-hood","docId":"inject/under-the-hood","unlisted":false},{"type":"link","label":"Cookbook example","href":"/inject/cookbook-example","docId":"inject/cookbook-example","unlisted":false},{"type":"link","label":"Benchmarks","href":"/inject/benchmarks","docId":"inject/benchmarks","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Codegen","items":[{"type":"link","label":"Overview","href":"/codegen","docId":"codegen/overview","unlisted":false},{"type":"link","label":"Examples","href":"/codegen/examples","docId":"codegen/examples","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Serializer","items":[{"type":"link","label":"Overview","href":"/serializer","docId":"serializer/overview","unlisted":false},{"type":"link","label":"Examples","href":"/serializer/examples","docId":"serializer/examples","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Specializer","items":[{"type":"link","label":"Overview","href":"/specializer","docId":"specializer/overview","unlisted":false},{"type":"link","label":"Examples","href":"/specializer/examples","docId":"specializer/examples","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"RPC","items":[{"type":"link","label":"Overview","href":"/rpc","docId":"rpc/overview","unlisted":false},{"type":"link","label":"Basic Examples","href":"/rpc/basic-examples","docId":"rpc/basic-examples","unlisted":false},{"type":"link","label":"Key-Value Storage","href":"/rpc/key-value-storage","docId":"rpc/key-value-storage","unlisted":false},{"type":"link","label":"Memcached-like Application","href":"/rpc/memcached-like-application","docId":"rpc/memcached-like-application","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"FS","items":[{"type":"link","label":"Overview","href":"/fs","docId":"fs/overview","unlisted":false},{"type":"link","label":"Examples","href":"/fs/examples","docId":"fs/examples","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Misc","items":[{"type":"link","label":"Bytebuf","href":"/misc/bytebuf","docId":"misc/bytebuf","unlisted":false}],"collapsed":true,"collapsible":true}]},"docs":{"async-io/csp":{"id":"async-io/csp","title":"Reactify-Core | CSP, efficient I/O communication between channels","description":"Efficient Java CSP (Communicating Sequential Process) implementation for I/O communication","sidebar":"docs"},"async-io/datastream":{"id":"async-io/datastream","title":"Reactify-Core | Datastream, asynchronous reactive Java streams with minimal overhead","description":"Asynchronous reactive Java streams with extremely low overhead","sidebar":"docs"},"async-io/eventloop":{"id":"async-io/eventloop","title":"Reactify-Core | Eventloop, single-threaded event loop for developing asynchronous Java applications","description":"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications","sidebar":"docs"},"async-io/net":{"id":"async-io/net","title":"Reactify-Core | Net, high-performance alternative to Netty for building async servers without overheads","description":"Abstraction layer for building asynchronous HTTP, RPC, TCP servers with no performance overhead.","sidebar":"docs"},"async-io/promise":{"id":"async-io/promise","title":"Reactify-Core | Promise, Java Promise for async programming model, alternative to Java Futures","description":"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster","sidebar":"docs"},"boot/config":{"id":"boot/config","title":"Reactify-Core | Config, efficiently manage application configuration and property values","description":"Efficiently manage your application configurations and properties values with Reactify-Core Config","sidebar":"docs"},"boot/launcher":{"id":"boot/launcher","title":"Reactify-Core | Launcher, efficiently manage application lifecycle","description":"Reactify-Core Launcher manages application lifecycle, starts and stops services and also has handy diagnostic tools.","sidebar":"docs"},"boot/servicegraph":{"id":"boot/servicegraph","title":"Reactify-Core | Service Graph, manages application services according to their dependency graph","description":"Service Graph starts and stops application services according to their dependency graph using multithreaded graph traversal algorithm.","sidebar":"docs"},"boot/workers":{"id":"boot/workers","title":"Reactify-Core | Workers, overcome the complexities and overheads of multithreaded programming model","description":"Reactify-Core Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities","sidebar":"docs"},"codegen/examples":{"id":"codegen/examples","title":"Reactify-Core Codegen Examples | Dynamic bytecode generator with minimal overhead","description":"Reactify-Core Codegen is a dynamic bytecode generator with minimal overhead and convenient API","sidebar":"docs"},"codegen/overview":{"id":"codegen/overview","title":"Reactify-Core Codegen Overview | Dynamic bytecode generator with minimal overhead","description":"Reactify-Core Codegen is a dynamic bytecode generator with minimal overhead and convenient API","sidebar":"docs"},"fs/examples":{"id":"fs/examples","title":"Examples","description":"Reactify-Core FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding","sidebar":"docs"},"fs/overview":{"id":"fs/overview","title":"Overview","description":"Reactify-Core FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding","sidebar":"docs"},"http/benchmarks":{"id":"http/benchmarks","title":"Benchmarks","description":"We have measured the performance of HTTP GET request using JMH as a benchmark tool:","sidebar":"docs"},"http/examples":{"id":"http/examples","title":"Examples","description":"* Simple \\"Hello World\\" Server - a simple asynchronous server created using","sidebar":"docs"},"http/overview":{"id":"http/overview","title":"Reactify-Core HTTP | Asynchronous HTTP server and client","description":"Create legacy-free asynchronous HTTP server and client applications with Reactify-Core","sidebar":"docs"},"inject/basics":{"id":"inject/basics","title":"Reactify-Core Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime","description":"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.","sidebar":"docs"},"inject/benchmarks":{"id":"inject/benchmarks","title":"Benchmarks","description":"We compared Reactify-Core Inject to Guice and Spring in the same scenario, using JMH as the benchmark tool.","sidebar":"docs"},"inject/binding-generation":{"id":"inject/binding-generation","title":"Generating bindings","description":"In this tutorial we will generate a binding for an arbitrary type Supplier.","sidebar":"docs"},"inject/binding-transformation":{"id":"inject/binding-transformation","title":"Binding transformations","description":"In this tutorial, we will transform bindings declared in a separate standalone module. We will intercept a dependency exported in another module and","sidebar":"docs"},"inject/class-scanning":{"id":"inject/class-scanning","title":"Class scanning","description":"In this tutorial we will define @Provides methods in arbitrary classes that do not implement the Module interface.","sidebar":"docs"},"inject/cookbook-example":{"id":"inject/cookbook-example","title":"Cookbook example","description":"To introduce the basic concepts and features of Reactify-Core Inject, we have created an example that starts","sidebar":"docs"},"inject/duplicate-bindings":{"id":"inject/duplicate-bindings","title":"Resolving duplicate bindings","description":"In this tutorial, we will look at resolution of duplicate bindings using .","sidebar":"docs"},"inject/injecting-instances":{"id":"inject/injecting-instances","title":"Injecting instances","description":"In this tutorial we will inject instances into classes. We will use 2 approaches:","sidebar":"docs"},"inject/optional-dependencies":{"id":"inject/optional-dependencies","title":"Optional dependencies","description":"What are optional dependencies?","sidebar":"docs"},"inject/overview":{"id":"inject/overview","title":"Reactify-Core Inject | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime","description":"Reactify-Core Inject is a lightweight dependency injection library that is optimized for performance and that has no third-party dependencies. It is multi-thread friendly, feature-rich, and boasts fast start-up time and runtime, far superior to Spring DI or Guice.","sidebar":"docs"},"inject/quick-start":{"id":"inject/quick-start","title":"Quick Start","description":"In this tutorial we will create an Injector from multiple DI modules.","sidebar":"docs"},"inject/scopes":{"id":"inject/scopes","title":"Scopes","description":"A Scope in Reactify-Core Inject allows you to reuse instances. A scoped instances are independent of instances in other scopes.","sidebar":"docs"},"inject/speeding-up-injection":{"id":"inject/speeding-up-injection","title":"Speeding up dependency injection","description":"Reactify-Core Specializer optimization","sidebar":"docs"},"inject/transient-bindings":{"id":"inject/transient-bindings","title":"Transient bindings","description":"By default, every instance obtained using Reactify-Core Inject is a singleton. This means that instances are cached the first time","sidebar":"docs"},"inject/under-the-hood":{"id":"inject/under-the-hood","title":"Reactify-Core Inject Advanced | Lightning-fast and ultimately powerful Dependency Injection Java library","description":"Extremely lightweight DI with powerful tools - support of nested scopes, singletons and transient bindings, modules, multi-threaded and single-threaded injectors","sidebar":"docs"},"misc/bytebuf":{"id":"misc/bytebuf","title":"Reactify-Core | ByteBuf, lightweight alternative to Java NIO ByteBuffers","description":"Lightweight alternative to Java NIO ByteBuffers with extremely low GC footprint.","sidebar":"docs"},"overview":{"id":"overview","title":"Reactify-Core | Platform Overview","description":"With Reactify-Core you can create web applications extremely fast and simply, which may resemble Node.js approach.","sidebar":"docs"},"rpc/basic-examples":{"id":"rpc/basic-examples","title":"Basic Examples","description":"Lightning-fast binary protocol for microservices architecture","sidebar":"docs"},"rpc/key-value-storage":{"id":"rpc/key-value-storage","title":"Key-Value Storage","description":"A key-value storage with high performance RPC communication protocol","sidebar":"docs"},"rpc/memcached-like-application":{"id":"rpc/memcached-like-application","title":"Reactify-Core RPC | Create a memcached-like application with RPC communication protocol using Reactify-Core RPC.","description":"Create a memcached-like application with RPC communication protocol using Reactify-Core RPC.","sidebar":"docs"},"rpc/overview":{"id":"rpc/overview","title":"Reactify-Core RPC | Lightning-fast binary protocol for high-load architecture","description":"Reactify-Core RPC is a lightning-fast binary protocol for high-load microservices architecture","sidebar":"docs"},"serializer/examples":{"id":"serializer/examples","title":"Reactify-Core Serializer | World\'s fastest JVM serializer","description":"Reactify-Core Serializer is world\'s fastest JVM serializer. It is streamlined and features powerful tools with intuitive DSL","sidebar":"docs"},"serializer/overview":{"id":"serializer/overview","title":"Reactify-Core Serializer | World\'s fastest JVM serializer","description":"Reactify-Core Serializer is world\'s fastest JVM serializer. It is streamlined and features powerful tools with intuitive DSL","sidebar":"docs"},"specializer/examples":{"id":"specializer/examples","title":"Examples","description":"Please keep in mind that Reactify-Core Specializer is an experimental project, use it with caution. It does not support lambda expressions and may have difficulty specializing non-trivial instances.","sidebar":"docs"},"specializer/overview":{"id":"specializer/overview","title":"Overview","description":"Reactify-Core Specializer is an innovative technology for improving class runtime performance for the JVM. It is one of the Reactify-Core technologies that has no third-party dependencies, so it can be used as a stand-alone component.","sidebar":"docs"},"tutorials/getting-started":{"id":"tutorials/getting-started","title":"Reactify-Core | Getting Started","description":"A high-performance asynchronous HTTP server in 10 lines of code using Reactify-Core Java platform.","sidebar":"tutorials"},"tutorials/getting-started-advanced":{"id":"tutorials/getting-started-advanced","title":"Reactify-Core | Deploying Reactify-Core using Docker","description":"Step-by-step guide of deploying an HTTP server written in Java to AWS using Docker.","sidebar":"tutorials"},"tutorials/http-decoder":{"id":"tutorials/http-decoder","title":"Reactify-Core | Form Validation Using HTTP Decoder","description":"Create an async Java servlet that can process validation form using Reactify-Core components.","sidebar":"tutorials"},"tutorials/native-image":{"id":"tutorials/native-image","title":"Reactify-Core | Building a GraalVM native image of an Reactify-Core HTTP Server","description":"Step-by-step guide of creating an Reactify-Core HTTP server written in Java and building it as a GraalVM native image.","sidebar":"tutorials"},"tutorials/template-engine-integration":{"id":"tutorials/template-engine-integration","title":"Reactify-Core | Simple web application with template engine integration","description":"Create poll web-application using Reactify-Core and Mustache template engine. The embedded application server in 100 lines of code and no xml configurations.","sidebar":"tutorials"},"tutorials/todo-list-tutorial":{"id":"tutorials/todo-list-tutorial","title":"Reactify-Core | To-Do list app using React","description":"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using Reactify-Core Java platform and React.js.","sidebar":"tutorials"},"tutorials/using-react":{"id":"tutorials/using-react","title":"Reactify-Core | Using React in Reactify-Core projects","description":"Integrate React.js in your Java web application. In the tutorial you will create a basic app using Reactify-Core Java framework and React.js.","sidebar":"tutorials"},"tutorials/using-svelte":{"id":"tutorials/using-svelte","title":"Reactify-Core | Using Svelte in Reactify-Core projects","description":"Integrate Svelte in your Java web application. In the tutorial you will create a basic app using Reactify-Core Java framework and Svelte.","sidebar":"tutorials"}}}') } }]);