"use strict"; (self.webpackChunkactivejdocs = self.webpackChunkactivejdocs || []).push([[3465], { 6609: (e, t, n) => { n.r(t), n.d(t, { assets: () => h, contentTitle: () => l, default: () => p, frontMatter: () => o, metadata: () => c, toc: () => d }); var r = n(5893), s = n(1151), i = n(7618), a = n(7815); const o = { title: "Reactify-Core | Simple app with authorization and session management", sidebar_label: "Authorization and Session Management", keywords: ["java", "for beginners", "java framework", "guide", "tutorial", "web application", "async", "spring", "spring alternative", "netty alternative", "jetty alternative", "authorization", "server", "client", "servlet"], description: "Create a Java web application with authorization and session management in about 100 lines of code using Reactify-Core platform." }, l = "Authorization and Session Management", c = { id: "tutorials/authorization-tutorial", title: "Reactify-Core | Simple app with authorization and session management", description: "Create a Java web application with authorization and session management in about 100 lines of code using Reactify-Core platform.", source: "@site/docs/tutorials/authorization-tutorial.mdx", sourceDirName: "tutorials", slug: "/tutorials/authorization-tutorial", permalink: "/tutorials/authorization-tutorial", draft: !1, unlisted: !1, tags: [], version: "current", frontMatter: { title: "Reactify-Core | Simple app with authorization and session management", sidebar_label: "Authorization and Session Management", keywords: ["java", "for beginners", "java framework", "guide", "tutorial", "web application", "async", "spring", "spring alternative", "netty alternative", "jetty alternative", "authorization", "server", "client", "servlet"], description: "Create a Java web application with authorization and session management in about 100 lines of code using Reactify-Core platform." }, sidebar: "tutorials", previous: { title: "HTTP Decoder", permalink: "/tutorials/http-decoder" }, next: { title: "Reactify-Core + Docker + AWS", permalink: "/tutorials/getting-started-advanced" } }, h = {}, d = [{ value: "Creating Launcher", id: "creating-launcher", level: 2 }, { value: "Running the application", id: "running-the-application", level: 2 }]; function u(e) { const t = { a: "a", admonition: "admonition", code: "code", em: "em", h1: "h1", h2: "h2", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, s.a)(), ...e.components }; return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.h1, { id: "authorization-and-session-management", children: "Authorization and Session Management" }), "\n", (0, r.jsxs)(t.p, { children: ["In this example we will create a simple authorization app with ", (0, r.jsx)(t.strong, { children: "login" }), "/", (0, r.jsx)(t.strong, { children: "sign up" }), " scenarios\nand session management."] }), "\n", (0, r.jsxs)(t.p, { children: ["Reactify-Core doesn't include built-in authorization modules or solutions, as this process may significantly vary depending\non the project's business logic. This example represents a simple \"best practice\" which you\ncan extend and modify depending on your needs. You can find full example sources on ", (0, r.jsx)(i.Z, { text: "GitHub", url: "/examples/tutorials/auth" })] }), "\n", (0, r.jsxs)(t.p, { children: ["In the example we will consider only the ", (0, r.jsx)(t.a, { href: "#creating-launcher", children: "server" }), " which was created using Reactify-Core ", (0, r.jsx)(t.code, { children: "HttpServerLauncher" }), " and\n", (0, r.jsx)(t.code, { children: "AsyncServlet" }), ". This approach allows to create an embedded application server in about 100 lines of code with no\nadditional XML configurations or third-party dependencies."] }), "\n", (0, r.jsx)(t.h2, { id: "creating-launcher", children: "Creating Launcher" }), "\n", (0, r.jsxs)(t.p, { children: ["Let's create an ", (0, r.jsx)(t.code, { children: "AuthLauncher" }), ", which is the main part of the application as it manages the application lifecycle, routing\nand authorization processes. We will use Reactify-Core ", (0, r.jsx)(t.code, { children: "HttpServerLauncher" }), " and extend it:"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_1", children: 'public final class AuthLauncher extends HttpServerLauncher {\n  public static final String SESSION_ID = "SESSION_ID";\n\n  @Provides\n  AuthService loginService() {\n    return new AuthServiceImpl();\n  }\n\n  @Provides\n  Executor executor() {\n    return newSingleThreadExecutor();\n  }\n\n  @Provides\n  IStaticLoader staticLoader(Reactor reactor, Executor executor) {\n    return IStaticLoader.ofClassPath(reactor, executor, "site/");\n  }\n\n  @Provides\n  ISessionStore<String> sessionStore(Reactor reactor) {\n    return InMemorySessionStore.<String>builder(reactor)\n      .withLifetime(Duration.ofDays(30))\n      .build();\n  }\n\n  @Provides\n  AsyncServlet servlet(Reactor reactor, ISessionStore<String> sessionStore,\n    @Named("public") AsyncServlet publicServlet, @Named("private") AsyncServlet privateServlet) {\n\n    return SessionServlet.create(reactor, sessionStore, SESSION_ID, publicServlet, privateServlet);\n  }\n' }) }), "\n", (0, r.jsx)(t.p, { children: "Let's explore the provided objects in more detail:" }), "\n", (0, r.jsxs)(t.ul, { children: ["\n", (0, r.jsxs)(t.li, { children: ["\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.strong, { children: "AuthService" }), " - authorization and register logic"] }), "\n"] }), "\n", (0, r.jsxs)(t.li, { children: ["\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.strong, { children: "Executor" }), " - needed for StaticLoader"] }), "\n"] }), "\n", (0, r.jsxs)(t.li, { children: ["\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.strong, { children: (0, r.jsx)(i.Z, { text: "StaticLoader", url: "/core-http/src/main/java/io/activej/http/loader/StaticLoader.java" }) }), " - loads static content from ", (0, r.jsx)(t.code, { children: "/site" }), " directory"] }), "\n"] }), "\n", (0, r.jsxs)(t.li, { children: ["\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.strong, { children: (0, r.jsx)(i.Z, { text: "SessionStore", url: "/core-http/src/main/java/io/activej/http/session/SessionStore.java" }) }), " - handy storage for information about sessions"] }), "\n"] }), "\n", (0, r.jsxs)(t.li, { children: ["\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.strong, { children: (0, r.jsx)(i.Z, { text: "AsyncServlet", url: "/core-http/src/main/java/io/activej/http/AsyncServlet.java" }) }), " ", (0, r.jsx)(t.em, { children: "servlet" }), " - the main servlet that combines public and private servlets (for authorized and unauthorized sessions). As you can see, due to DI, this servlet only requires two servlets without their own dependencies"] }), "\n"] }), "\n"] }), "\n", (0, r.jsxs)(t.p, { children: ["Now let's provide the ", (0, r.jsx)(t.strong, { children: "public" }), " and ", (0, r.jsx)(t.strong, { children: "private" }), " servlets."] }), "\n", (0, r.jsxs)(t.ul, { children: ["\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "AsyncServlet" }), " ", (0, r.jsx)(t.em, { children: "publicServlet" }), " - manages unauthorized sessions:"] }), "\n"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_2", children: '@Provides\n@Named("public")\nAsyncServlet publicServlet(Reactor reactor, AuthService authService, ISessionStore<String> store, IStaticLoader staticLoader) {\n  StaticServlet staticServlet = StaticServlet.create(reactor, staticLoader, "errorPage.html");\n  return RoutingServlet.builder(reactor)\n    //[START REGION_3]\n    .with("/", request -> HttpResponse.redirect302("/login").toPromise())\n    //[END REGION_3]\n    .with(GET, "/signup", StaticServlet.create(reactor, staticLoader, "signup.html"))\n    .with(GET, "/login", StaticServlet.create(reactor, staticLoader, "login.html"))\n    //[START REGION_4]\n    .with(POST, "/login", request -> request.loadBody()\n      .then(() -> {\n        Map<String, String> params = request.getPostParameters();\n        String username = params.get("username");\n        String password = params.get("password");\n        if (authService.authorize(username, password)) {\n          String sessionId = UUID.randomUUID().toString();\n\n          return store.save(sessionId, "My object saved in session")\n            .then($ -> HttpResponse.redirect302("/members")\n              .withCookie(HttpCookie.of(SESSION_ID, sessionId))\n              .toPromise());\n        }\n        return staticServlet.serve(request);\n      }))\n    //[END REGION_4]\n    .with(POST, "/signup", request -> request.loadBody()\n      .then($ -> {\n        Map<String, String> params = request.getPostParameters();\n        String username = params.get("username");\n        String password = params.get("password");\n\n        if (username != null && password != null) {\n          authService.register(username, password);\n        }\n        return HttpResponse.redirect302("/login").toPromise();\n      }))\n    .build();\n}\n' }) }), "\n", (0, r.jsx)(t.p, { children: "Let's take a closer look at how we set up routing for servlets. Reactify-Core approach resembles Express. For example,\nhere's the request to the homepage for unauthorized users:" }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_3", children: '.with("/", request -> HttpResponse.redirect302("/login").toPromise())\n' }) }), "\n", (0, r.jsxs)(t.p, { children: ["Method ", (0, r.jsx)(t.code, { children: "with(@Nullable HttpMethod method, String path, AsyncServlet servlet)" }), " of ", (0, r.jsx)(t.code, { children: "RoutingServlet" }), "'s builderadds the route to the ", (0, r.jsx)(i.Z, { url: "/core-http/src/main/java/io/activej/http/RoutingServlet.java", children: (0, r.jsx)(t.code, { children: "RoutingServlet" }) })] }), "\n", (0, r.jsxs)(t.ul, { children: ["\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "method" }), " (optional) is one of the HTTP methods (", (0, r.jsx)(t.code, { children: "GET" }), ", ", (0, r.jsx)(t.code, { children: "POST" }), ", etc.)"] }), "\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "path" }), " is the path on the server"] }), "\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "servlet" }), " defines the logic of request processing. If you need to get some data from the ", (0, r.jsx)(t.em, { children: "request" }), " while processing you can use:", "\n", (0, r.jsxs)(t.ul, { children: ["\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "request.getPathParameter(String key)" }), "/", (0, r.jsx)(t.code, { children: "request.getQueryParameter(String key)" }), " (", (0, r.jsx)(t.a, { href: "/http/examples#request-parameters-example", children: "see example of query parameter usage" }), ")\nto provide the key of the needed parameter and receive back a corresponding String"] }), "\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "request.getPostParameters()" }), " to get a Map of all request parameters"] }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.code, { children: "GET" }), " requests with paths ", (0, r.jsx)(t.strong, { children: '"/login"' }), " and ", (0, r.jsx)(t.strong, { children: '"/signup"' }), " upload the needed HTML pages.\n", (0, r.jsx)(t.code, { children: "POST" }), " requests with paths ", (0, r.jsx)(t.strong, { children: '"/login"' }), " and ", (0, r.jsx)(t.strong, { children: '"/signup"' }), " take care of log in and sign up logic respectively:"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_4", children: '.with(POST, "/login", request -> request.loadBody()\n  .then(() -> {\n    Map<String, String> params = request.getPostParameters();\n    String username = params.get("username");\n    String password = params.get("password");\n    if (authService.authorize(username, password)) {\n      String sessionId = UUID.randomUUID().toString();\n\n      return store.save(sessionId, "My object saved in session")\n        .then($ -> HttpResponse.redirect302("/members")\n          .withCookie(HttpCookie.of(SESSION_ID, sessionId))\n          .toPromise());\n    }\n    return staticServlet.serve(request);\n  }))\n' }) }), "\n", (0, r.jsxs)(t.p, { children: ["Pay attention at ", (0, r.jsx)(t.code, { children: "POST" }), " ", (0, r.jsx)(t.strong, { children: '"/login"' }), " route. ", (0, r.jsx)(t.em, { children: "serveFirstSuccessful()" }), " takes two servlets and waits until one of them\nfinishes processing successfully. So if authorization fails, a Promise of ", (0, r.jsx)(t.strong, { children: "null" }), " will be returned (", (0, r.jsx)(t.strong, { children: "AsyncServlet.NEXT" }), "),\nwhich means fail. In this case, a simple ", (0, r.jsx)(t.code, { children: "StaticServlet" }), " will be created to load the ", (0, r.jsx)(t.em, { children: "errorPage" }), ".\nSuccessful log in will generate a session ", (0, r.jsx)(t.em, { children: "id" }), " for the user and will save string ", (0, r.jsx)(t.code, { children: '"My saved object in session"' }), " to session store.\nAlso it will redirect user to ", (0, r.jsx)(t.strong, { children: '"/members"' }), "."] }), "\n", (0, r.jsx)(t.p, { children: "Now, let's get to the next servlet that handles authorized sessions." }), "\n", (0, r.jsxs)(t.ul, { children: ["\n", (0, r.jsxs)(t.li, { children: [(0, r.jsx)(t.code, { children: "AsyncServlet" }), " ", (0, r.jsx)(t.em, { children: "privateServlet" }), " - manages authorized sessions:"] }), "\n"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_5", children: '@Provides\n@Named("private")\nAsyncServlet privateServlet(Reactor reactor, IStaticLoader staticLoader) {\n  return RoutingServlet.builder(reactor)\n    //[START REGION_6]\n    .with("/", request -> HttpResponse.redirect302("/members").toPromise())\n    //[END REGION_6]\n    //[START REGION_7]\n    .with("/members/*", RoutingServlet.builder(reactor)\n      .with(GET, "/", StaticServlet.create(reactor, staticLoader, "index.html"))\n      //[START REGION_8]\n      .with(GET, "/cookie", request ->\n        HttpResponse.ok200()\n          .withBody(wrapUtf8(request.getAttachment(String.class)))\n          .toPromise())\n      //[END REGION_8]\n      .with(POST, "/logout", request ->\n        HttpResponse.redirect302("/")\n          .withCookie(HttpCookie.builder(SESSION_ID)\n            .withPath("/")\n            .withMaxAge(Duration.ZERO)\n            .build())\n          .toPromise())\n      .build())\n    .build();\n  //[END REGION_7]\n}\n' }) }), "\n", (0, r.jsxs)(t.p, { children: ["First, it redirects requests from homepage to ", (0, r.jsx)(t.strong, { children: '"/members"' }), ":"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_6", children: '.with("/", request -> HttpResponse.redirect302("/members").toPromise())\n' }) }), "\n", (0, r.jsxs)(t.p, { children: ["Next, it takes care of all of the requests that go after ", (0, r.jsx)(t.strong, { children: '"/members"' }), " path:"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_7", children: '.with("/members/*", RoutingServlet.builder(reactor)\n  .with(GET, "/", StaticServlet.create(reactor, staticLoader, "index.html"))\n  //[START REGION_8]\n  .with(GET, "/cookie", request ->\n    HttpResponse.ok200()\n      .withBody(wrapUtf8(request.getAttachment(String.class)))\n      .toPromise())\n  //[END REGION_8]\n  .with(POST, "/logout", request ->\n    HttpResponse.redirect302("/")\n      .withCookie(HttpCookie.builder(SESSION_ID)\n        .withPath("/")\n        .withMaxAge(Duration.ZERO)\n        .build())\n      .toPromise())\n  .build())\n.build();\n' }) }), "\n", (0, r.jsxs)(t.p, { children: ["Pay attention to the path ", (0, r.jsx)(t.strong, { children: '"/members/*"' }), ".\n", (0, r.jsx)(t.code, { children: "*" }), " is a variable for the next part of the path. It states that this servlet will process any path segment that goes after ", (0, r.jsx)(t.strong, { children: '"/members/"' }), ".\nFor example, this route:"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_8", children: '.with(GET, "/cookie", request ->\n  HttpResponse.ok200()\n    .withBody(wrapUtf8(request.getAttachment(String.class)))\n    .toPromise())\n' }) }), "\n", (0, r.jsxs)(t.p, { children: ["is a GET request for ", (0, r.jsx)(t.strong, { children: '"/members/cookie"' }), " path. This request shows all cookies stored in the session."] }), "\n", (0, r.jsx)(t.admonition, { type: "caution", children: (0, r.jsxs)(t.p, { children: ["A request can have an attachment map where any content can be mapped to some type, i.e. String. By default, requests have no attachments. In this case, the request contains 'cookies' as an attachment that's mapped to the ", (0, r.jsx)(t.code, { children: "String" }), " type."] }) }), "\n", (0, r.jsxs)(t.p, { children: [(0, r.jsx)(t.strong, { children: '"/members/logout"' }), " logs the user out, deletes all cookies related to this session and redirects the user to the homepage."] }), "\n", (0, r.jsxs)(t.p, { children: ["After ", (0, r.jsx)(t.strong, { children: "public" }), " and ", (0, r.jsx)(t.strong, { children: "private" }), " servlets are set up, we define ", (0, r.jsx)(t.code, { children: "main()" }), " method, which will start our launcher:"] }), "\n", (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: "language-java", metastring: "url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_9", children: "public static void main(String[] args) throws Exception {\n  AuthLauncher launcher = new AuthLauncher();\n  launcher.launch(args);\n}\n" }) }), "\n", (0, r.jsx)(t.h2, { id: "running-the-application", children: "Running the application" }), "\n", (0, r.jsxs)(t.p, { children: ["If you want to run the example, ", (0, r.jsx)(t.a, { href: "https://github.com/hoangtien2k3/reactify-core/tree/v6.0-beta2", children: "clone Reactify-Core" }), " and import it\nas a Maven project. Check out branch ", (0, r.jsx)(t.strong, { children: (0, r.jsx)(a.Z, { name: "currentVersion" }) }), ". Before running the example, build the project (", (0, r.jsx)(t.strong, { children: "Ctrl + F9" }), " for IntelliJ IDEA)."] }), "\n", (0, r.jsxs)(t.p, { children: ["Open ", (0, r.jsx)(t.code, { children: "AuthLauncher" }), " class and run its ", (0, r.jsx)(t.em, { children: "main()" }), " method.\nThen open your favorite browser and go to ", (0, r.jsx)(t.a, { href: "http://localhost:8080", children: "localhost:8080" }), ". Try to sign up and then log in. When\nlogged in, check out your saved cookies for session. You will see the following content: ", (0, r.jsx)(t.code, { children: "My saved object in session" }), ".\nFinally, try to log out. You can also try to log in with an invalid login or password."] })] }) } function p(e = {}) { const { wrapper: t } = { ...(0, s.a)(), ...e.components }; return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e) } }, 7618: (e, t, n) => { n.d(t, { Z: () => i }); n(7294); var r = n(9962), s = n(5893); const i = e => { let { url: t, text: n, isInline: i = !0, children: a } = e; const { siteConfig: o } = (0, r.Z)(), l = t.startsWith("/examples") ? o.customFields.githubExamplesBranch : o.customFields.githubBranch; return (0, s.jsx)("a", { style: i ? {} : { display: "block", marginBottom: "16px" }, href: o.customFields.githubUrl + "/" + l + t, target: "_blank", children: n || a }) } }, 7815: (e, t, n) => { n.d(t, { Z: () => s }); n(7294); var r = n(9962); const s = e => { let { name: t } = e; const { siteConfig: n } = (0, r.Z)(); if (!t) throw new Error("Variable name is required"); if (void 0 === n.customFields[t]) throw new Error(`Variable ${t} not exist`); return n.customFields[t] } }, 1151: (e, t, n) => { n.d(t, { Z: () => o, a: () => a }); var r = n(7294); const s = {}, i = r.createContext(s); function a(e) { const t = r.useContext(i); return r.useMemo((function () { return "function" == typeof e ? e(t) : { ...t, ...e } }), [t, e]) } function o(e) { let t; return t = e.disableParentContext ? "function" == typeof e.components ? e.components(s) : e.components || s : a(e.components), r.createElement(i.Provider, { value: t }, e.children) } } }]);