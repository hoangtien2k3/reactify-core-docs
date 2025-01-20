"use strict";(self.webpackChunkReactifydocs=self.webpackChunkReactifydocs||[]).push([[9255],{925:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=i(5893),o=i(1151),a=i(7618),r=i(7815);const s={title:"Reactify | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with Reactify Config",sidebar_label:"Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"]},c="Config",l={id:"boot/config",title:"Reactify | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with Reactify Config",source:"@site/docs/boot/config.mdx",sourceDirName:"boot",slug:"/boot/config",permalink:"/boot/config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Reactify | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with Reactify Config",sidebar_label:"Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"]},sidebar:"docs",previous:{title:"Workers",permalink:"/boot/workers"},next:{title:"Overview",permalink:"/http"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Example",id:"example",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"application.yml"})," configuration file in Spring Boot centralizes application settings. It enables developers to define properties in a structured, hierarchical format, ensuring clarity and consistency across environments."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Environment-Specific Configurations"}),"\n",(0,t.jsx)(n.li,{children:"Readability: Clean, YAML-based syntax for easy readability"}),"\n",(0,t.jsx)(n.li,{children:"Nested Structures: Organizes complex properties into logical hierarchies."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"To run the examples, you need to clone Reactify from GitHub"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/hoangtien2k3/reactify-core\n"})}),(0,t.jsxs)(n.p,{children:["And import it as a Maven project. Check out tag ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(r.Z,{name:"currentVersion"})}),". Before running the examples, build the project.\nThese examples are located at ",(0,t.jsx)(n.code,{children:"Reactify/examples/core/boot"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Sample `application.yml` file configuration ",(0,t.jsx)(a.Z,{url:"/boot-config/src/main/java/io/Reactify/config/Config.java",children:(0,t.jsx)(n.code,{children:"Config"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:"url=/examples/core/boot/src/main/java/ConfigModuleExample.java tag=EXAMPLE",children:'server:\n' +
                    '  port: 8089\n' +
                    'logging:\n' +
                    '  pattern:\n' +
                    '    console: "%d{dd/MM/yy HH:mm:ss}|%X{traceId}|%m%n"\n' +
                    '  level:\n' +
                    '    root: INFO\n' +
                    '    io.r2dbc.postgresql.QUERY: DEBUG\n' +
                    '    io.r2dbc.postgresql.PARAM: DEBUG\n' +
                    '\n' +
                    '# spring config\n' +
                    'spring:\n' +
                    '  application:\n' +
                    '    name: auth-service\n' +
                    '  main:\n' +
                    '    web-application-type: reactive\n' +
                    '    allow-bean-definition-overriding: true\n' +
                    '  messages:\n' +
                    '    basename: i18n/messages\n' +
                    '\n' +
                    '  #connect db r2dbc\n' +
                    '  r2dbc:\n' +
                    '    url: r2dbc:postgresql://localhost:5434/auth\n' +
                    '    username: admin\n' +
                    '    password: admin\n' +
                    '    pool:\n' +
                    '      max-size: 10\n' +
                    '      initial-size: 5\n' +
                    '\n' +
                    '  codec:\n' +
                    '    max-in-memory-size: 100MB\n' +
                    '\n' +
                    '  security:\n' +
                    '    oauth2:\n' +
                    '      client:\n' +
                    '        provider:\n' +
                    '          oidc:\n' +
                    '            token-uri: ${keycloak.serverUrl}/realms/${keycloak.realm}/protocol/openid-connect/token\n' +
                    '        registration:\n' +
                    '          oidc:\n' +
                    '            client-id: ${keycloak.clientId}\n' +
                    '            client-secret: ${keycloak.clientSecret}\n' +
                    '            authorization-grant-type: ${keycloak.grantType} #password || #client_credentials\n' +
                    '      resourceserver:\n' +
                    '        jwt:\n' +
                    '          jwk-set-uri: ${keycloak.serverUrl}/realms/${keycloak.realm}/protocol/openid-connect/certs\n' +
                    '      keycloak:\n' +
                    '        client-id: ${keycloak.clientId}\n' +
                    '\n' +
                    '  plugin:\n' +
                    '    config:\n' +
                    '      readRequestData: true\n' +
                    '      readResponseData: true\n' +
                    '      logRequest: true\n' +
                    '      logResponse: true\n' +
                    '\n' +
                    '# web client config\n' +
                    'client:\n' +
                    '  #keycloak\n' +
                    '  keycloak:\n' +
                    '    address: http://localhost:8080/realms/ezbuy-server/protocol/openid-connect\n' +
                    '    name: keycloak\n' +
                    '    auth:\n' +
                    '      client-id: ezbuy-client\n' +
                    '      client-secret: mI92QDfvi20tZgFtjpRAPWu8TR6eMHmw\n' +
                    '  #notification\n' +
                    '  notification:\n' +
                    '    internal-oauth: true\n' +
                    '    address: http://localhost:7777/v1/transmission\n' +
                    '    name: notiServiceClient\n' +
                    '    pool:\n' +
                    '      max-size: 100\n' +
                    '      max-pending-acquire: 100\n' +
                    '    timeout:\n' +
                    '      read: 60000\n' +
                    '      write: 1000\n' +
                    '  #setting\n' +
                    '  setting:\n' +
                    '    address: http://localhost:8081/\n' +
                    '    name: settingClient\n' +
                    '\n' +
                    '# unauthenticated endpoints config\n' +
                    'application:\n' +
                    '  http-logging:\n' +
                    '    request:\n' +
                    '      enable: true\n' +
                    '      header: true\n' +
                    '      param: true\n' +
                    '      body: true\n' +
                    '    response:\n' +
                    '      enable: true\n' +
                    '      body: true\n' +
                    '  whiteList:\n' +
                    '    - uri: /v1/auth/swagger-ui.html\n' +
                    '      methods:\n' +
                    '        - GET\n' +
                    '    - uri: /v1/auth/webjars\n' +
                    '      methods:\n' +
                    '        - GET\n' +
                    '    - uri: /actuator/health\n' +
                    '      methods:\n' +
                    '        - GET\n' +
                    '    - uri: /v1/auth/generate-otp\n' +
                    '      methods:\n' +
                    '        - POST\n' +
                    '    - uri: /v1/individual/current\n' +
                    '      methods:\n' +
                    '        - GET\n' +
                    '    - uri: /v1/permission-policy\n' +
                    '      methods:\n' +
                    '        - GET\n' +
                    '    - uri: /v1/auth/receive-sign-result\n' +
                    '      methods:\n' +
                    '        - POST\n' +
                    '  data:\n' +
                    '    sync-data:\n' +
                    '      limit: 500\n' +
                    '\n' +
                    '#keycloak client config\n' +
                    'keycloak:\n' +
                    '  clientId: ezbuy-client\n' +
                    '  clientSecret: mI92QDfvi20tZgFtjpRAPWu8TR6eMHmw\n' +
                    '  realm: ezbuy-server\n' +
                    '  serverUrl: http://localhost:8080\n' +
                    '  grantType: password\n' +
                    '  host: localhost\n' +
                    '\n' +
                    '# minio server config\n' +
                    'minio:\n' +
                    '  bucket: ezbuy-bucket\n' +
                    '  enabled: true\n' +
                    '  baseUrl: http://localhost:9000\n' +
                    '  publicUrl: http://localhost:9000/ezbuy-bucket\n' +
                    '  accessKey: 4DoaZ0KdzpXdDlVK104t\n' +
                    '  secretKey: nuRiQUIJNVygMOHhmtR4LT1etAa7F8PQOsRGP5oj\n' +
                    '  private:\n' +
                    '    bucket: ezbuy-private\n' +
                    '\n' +
                    '#config hash password\n' +
                    'hashing-password:\n' +
                    '  public-key: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4qGLPEGMdbDlYrc+Ud3w8Y2CobSLKAIfSBsX6bcV3bCxKZI8scW2gfr8ZMMXOxgQ0nXpIOQ0p0fb/hVHXMEnTu4Z5UEsF76eDfA80VPd96ujiZWyWYAeyIUelqPEZIWxM4MlBOPJDcCVDtwLKIoMbvVnXoHyjmOq93mHOoii24a2m0qt6jrvAYOvjNUijtofgjewYds/h74LfphDY/hNRq+4M6lI4RMZ4HiRn06P+GnvnwkxA3JL1bVRRqZ3gxB0VWiIj7I5likqnJfWnqn43mrMxfSdNI+6MpgR7L6djFOnjZiNP5bb6a3F17hwBeeLBTPs+akem/shlfoGYIbJOwIDAQAB\n' +
                    '#proxy\n' +
                    'proxy-client:\n' +
                    '  host: 10.207.156.52\n' +
                    '  port: 3128\n' +
                    '\n' +
                    '# swagger-ui custom path\n' +
                    'springdoc:\n' +
                    '  api-docs:\n' +
                    '    path: /v1/auth/v3/api-docs\n' +
                    '  swagger-ui:\n' +
                    '    path: /v1/auth/swagger-ui.html\n' +
                    '    url: /v1/auth/v3/api-docs\n' +
                    '\n' +
                    'management:\n' +
                    '  endpoints:\n' +
                    '    web:\n' +
                    '      exposure:\n' +
                    '        include: "*"\n' +
                    '  endpoint:\n' +
                    '    health:\n' +
                    '      show-details: always'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.Z,{url:"/examples/core/boot/src/main/java/ConfigModuleExample.java",children:"See full example on GitHub"})})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},7618:(e,n,i)=>{i.d(n,{Z:()=>a});i(7294);var t=i(9962),o=i(5893);const a=e=>{let{url:n,text:i,isInline:a=!0,children:r}=e;const{siteConfig:s}=(0,t.Z)(),c=n.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return(0,o.jsx)("a",{style:a?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+c+n,target:"_blank",children:i||r})}},7815:(e,n,i)=>{i.d(n,{Z:()=>o});i(7294);var t=i(9962);const o=e=>{let{name:n}=e;const{siteConfig:i}=(0,t.Z)();if(!n)throw new Error("Variable name is required");if(void 0===i.customFields[n])throw new Error(`Variable ${n} not exist`);return i.customFields[n]}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var t=i(7294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);