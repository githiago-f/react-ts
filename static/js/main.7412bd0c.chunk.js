(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{123:function(e,t,n){e.exports=n.p+"static/media/default.0953bcf5.jpg"},124:function(e,t,n){e.exports=n.p+"static/media/chat-dos-guri-native.65557d33.png"},125:function(e,t,n){e.exports=n.p+"static/media/react-ts.2afee9b9.png"},126:function(e,t,n){e.exports=n.p+"static/media/scalatra-test.499d6178.png"},127:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),i=n.n(c),o=n(33),l=n(5),u=n(2),s=n(1),f={colors:{javascript:"#efda4d",scala:"#de3423",ruby:"#731a16",typescript:"#3572A5",java:"#f8981d"},theme:{font:{dark:"#fff",light:"#000"},bg:{dark:"#2a2b2b",light:"#f8f9fa"}}};function d(){var e=Object(u.a)(["\n    .bg-darker {\n        background-color: ",";\n    }\n    p, li, span, h3, h4 {\n        color: ",";\n    }\n"]);return d=function(){return e},e}var h=f.theme,m=h.bg,p=h.font,g=Object(s.b)(d(),(function(e){return e.darkThemeOn?m.dark:"white"}),(function(e){return e.darkThemeOn?p.dark:p.light})),v=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&i(!0),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?i(!0):i(!1)}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{theme:Object(o.a)({},f,{darkThemeOn:c})},null===e||void 0===e?void 0:e.children,a.a.createElement(g,{darkThemeOn:c})))};function b(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    @media only screen and (max-width: 1180px) {\n        flex-direction: column;\n    }\n"]);return b=function(){return e},e}var w=s.c.section(b());function E(){var e=Object(u.a)(["\n    background-color: ",";\n    overflow-y: auto;\n"]);return E=function(){return e},e}function k(){var e=Object(u.a)(["\n    background-color: ",";\n    width: 25vw;\n    @media only screen and (max-width: 1180px) {\n        width: 100%;\n        min-height: fit-content;\n    }\n    min-height: 100vh;\n    max-height: 100vh;\n    /* should be 1180px its max */\n"]);return k=function(){return e},e}var x=s.c.div(k(),(function(e){return e.theme.darkThemeOn?"#343a40":e.theme.theme.bg.light})),O=s.c.div.attrs({className:"card card-body"})(E(),(function(e){return e.theme.darkThemeOn?e.theme.theme.bg.dark:"#fff"}));function j(){var e=Object(u.a)(["\n    color: ",";\n"]);return j=function(){return e},e}function y(){var e=Object(u.a)(["\n    color: ",";\n"]);return y=function(){return e},e}var N=s.c.h2(y(),(function(e){return e.theme.darkThemeOn?e.theme.theme.font.dark:e.theme.theme.font.light})),T=s.c.h4(j(),(function(e){return e.theme.darkThemeOn?e.theme.theme.font.dark:e.theme.theme.font.light})),S=n(8),W=n.n(S),A=n(18),M=function(){var e=Object(A.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users/githiago-f/repos?visibility=public",e.next=3,fetch("https://api.github.com/users/githiago-f/repos?visibility=public");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.filter((function(e){return null!==e.language})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(A.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://raw.githubusercontent.com/githiago-f/githiago-f/master/README.md",e.next=3,fetch("https://raw.githubusercontent.com/githiago-f/githiago-f/master/README.md");case 3:return t=e.sent,e.next=6,t.text();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=n(32),C=n.n(R),L=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){B().then(c).catch(console.error)}),[]),a.a.createElement(x,null,a.a.createElement("div",{className:"pt-5 p-2 text-center"},a.a.createElement("img",{src:"https://github.com/githiago-f.png",height:"120",alt:"profile pic",className:"rounded-circle"}),a.a.createElement("div",{className:"py-3"},a.a.createElement("div",{className:"py-3"},a.a.createElement(T,null,"Thiago Farias"),a.a.createElement("a",{href:"https://github.com/githiago-f",target:"_blanck"},"@githiago-f")))),a.a.createElement("div",{className:"p-2"},a.a.createElement(O,null,a.a.createElement(C.a,{source:n}))))};function F(){var e=Object(u.a)(["\n    padding-top: 3rem;\n    min-height: 100vh;\n    @media only screen and (min-width: 1180px) {\n        max-height: 100vh;\n    }\n    @media only screen and (max-width: 1180px) {\n        width: 100%;\n    }\n    padding-bottom: 3rem;\n    position: relative;\n    overflow: auto;\n    width: 75vw;\n"]);return F=function(){return e},e}var U=s.c.div.attrs({className:"bg-darker"})(F());function _(){var e=Object(u.a)(["\n    padding-left: 15px;\n    padding-right: 15px;\n"]);return _=function(){return e},e}var D=s.c.div(_()),I=function(e){return a.a.createElement(w,null,a.a.createElement(L,null),a.a.createElement(U,null,a.a.createElement(D,null,null===e||void 0===e?void 0:e.children)))},J={default:n(123),"chat-dos-guri-native":n(124),"react-ts":n(125),"scalatra-test":n(126)};function P(){var e=Object(u.a)(["\n    float: right;\n"]);return P=function(){return e},e}function z(){var e=Object(u.a)(["\n    border-radius: 4px;\n    max-height: 267px;\n    max-width: 400;\n"]);return z=function(){return e},e}function V(){var e=Object(u.a)(["\n    background-color: ",";\n    font-size: 50%;\n"]);return V=function(){return e},e}function $(){var e=Object(u.a)(["\n    padding: 10px;\n"]);return $=function(){return e},e}function q(){var e=Object(u.a)(["\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 4px;\n    padding: 10px;\n    margin-bottom: 5px;\n    background-color: ",";\n"]);return q=function(){return e},e}var G=s.c.div(q(),(function(e){return e.theme.darkThemeOn?"#343a40":e.theme.theme.bg.light})),H=s.c.div($()),K=s.c.span.attrs({className:"badge badge-pill"})(V(),(function(e){return e.theme.colors[e.lang]})),Q=s.c.img(z()),X=s.c.a.attrs({className:"btn btn-dark",target:"_blank"})(P()),Y=function(e){var t=Object(r.useState)(J.default),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var t=Object.keys(J);t&&void 0!==t.find((function(t){return t===e.title}))&&i(J[e.title])}),[e.title]),a.a.createElement(G,null,a.a.createElement(Q,{className:"img-fluid",src:c,alt:e.title+" - "+e.lang}),a.a.createElement(H,null,a.a.createElement(T,null,e.title),a.a.createElement("p",{style:{maxWidth:380}},e.description),a.a.createElement("span",null,a.a.createElement(K,{lang:e.lang},"\xa0"),"\xa0",e.lang),a.a.createElement(X,{href:e.href}," Ver projeto ")))};function Z(){var e=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: flex-start;\n"]);return Z=function(){return e},e}var ee=s.c.div(Z()),te=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){M().then((function(e){var t=e.map((function(e){return{lang:e.language.toLowerCase().trim(),description:e.description,title:e.name,href:e.html_url}}));c(t)}))}),[]),a.a.createElement(I,null,a.a.createElement(N,null,"Meus projetos"),a.a.createElement(ee,null,n.map((function(e,t){return a.a.createElement(Y,Object.assign({key:t},e))}))),a.a.createElement(O,null,a.a.createElement("p",null,"Icons made by"," ",a.a.createElement("a",{href:"https://creativemarket.com/Becris",title:"Becris"},"Becris")," ","from"," ",a.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))))},ne=function(){return a.a.createElement(v,null,a.a.createElement(te,null))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=function(){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(ne,null))};i.a.render(a.a.createElement(ce,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-ts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-ts","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(t,e)}))}}()},34:function(e,t,n){e.exports=n(127)}},[[34,1,2]]]);
//# sourceMappingURL=main.7412bd0c.chunk.js.map