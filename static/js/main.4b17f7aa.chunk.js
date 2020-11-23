(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{127:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(28),i=t.n(c),o=t(33),u=t(4),l=t(2),s=t(1),f={colors:{javascript:"#efda4d",scala:"#de3423",ruby:"#731a16",typescript:"#3572A5",java:"#f8981d"},theme:{font:{dark:"#fff",light:"#000"},bg:{dark:"#2a2b2b",light:"#f8f9fa"}}};function d(){var e=Object(l.a)(["\n    .bg-darker {\n        background-color: ",";\n    }\n    p, li, span, h3, h4, h2 {\n        color: ",';\n    }\n    img[alt="BANNER"] {\n        width: 100%;\n        height: auto;\n    }\n']);return d=function(){return e},e}var m=f.theme,h=m.bg,p=m.font,v=Object(s.b)(d(),(function(e){return e.darkThemeOn?h.dark:"white"}),(function(e){return e.darkThemeOn?p.dark:p.light})),g=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),c=t[0],i=t[1];return Object(r.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&i(!0),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?i(!0):i(!1)}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{theme:Object(o.a)({},f,{darkThemeOn:c})},null===e||void 0===e?void 0:e.children,a.a.createElement(v,{darkThemeOn:c})))};function b(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    @media only screen and (max-width: 1180px) {\n        flex-direction: column;\n    }\n"]);return b=function(){return e},e}var w=s.c.section(b());function E(){var e=Object(l.a)(["\n    background-color: ",";\n    overflow-y: auto;\n"]);return E=function(){return e},e}function k(){var e=Object(l.a)(["\n    background-color: ",";\n    width: 25vw;\n    @media only screen and (max-width: 1180px) {\n        width: 100%;\n        min-height: fit-content;\n    }\n    min-height: 100vh;\n    max-height: 100vh;\n    /* should be 1180px its max */\n"]);return k=function(){return e},e}var x=s.c.div(k(),(function(e){return e.theme.darkThemeOn?"#343a40":e.theme.theme.bg.light})),O=s.c.div.attrs({className:"card card-body"})(E(),(function(e){return e.theme.darkThemeOn?"#343a40":"#fff"}));function j(){var e=Object(l.a)(["\n    color: ",";\n"]);return j=function(){return e},e}function y(){var e=Object(l.a)(["\n    color: ",";\n"]);return y=function(){return e},e}var N=s.c.h2(y(),(function(e){return e.theme.darkThemeOn?e.theme.theme.font.dark:e.theme.theme.font.light})),T=s.c.h4(j(),(function(e){return e.theme.darkThemeOn?e.theme.theme.font.dark:e.theme.theme.font.light})),S=t(6),W=t.n(S),A=t(11),B=function(){var e=Object(A.a)(W.a.mark((function e(){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.t.bind(null,128,3));case 2:return n=e.sent,e.abrupt("return",n.author);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(A.a)(W.a.mark((function e(){var n,t,r,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return n=e.sent,t="https://api.github.com/users/".concat(n.name,"/repos?visibility=public"),e.next=6,fetch(t);case 6:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a.filter((function(e){return null!==e.language})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(A.a)(W.a.mark((function e(){var n,t,r,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return n=e.sent,t="https://raw.githubusercontent.com/".concat(n.name,"/githiago-f/master/README.md"),e.next=6,fetch(t);case 6:return r=e.sent,e.next=9,r.text();case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=function(){var e=Object(r.useState)(""),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){B().then((function(e){a(e.url),l(e.name)}))}),[]),{profileLink:t,userName:o}}(),n=e.profileLink,t=e.userName;return a.a.createElement(x,null,a.a.createElement("div",{className:"pt-5 p-2 text-center"},a.a.createElement("img",{src:"https://github.com/".concat(t,".png"),height:"120",alt:"profile pic",className:"rounded-circle"}),a.a.createElement("div",{className:"py-3"},a.a.createElement("div",{className:"py-3"},a.a.createElement(T,null,"Thiago Farias"),a.a.createElement("a",{href:n,target:"_blanck"},"@githiago-f")))))};function C(){var e=Object(l.a)(["\n    padding-top: 3rem;\n    min-height: 100vh;\n    @media only screen and (min-width: 1180px) {\n        max-height: 100vh;\n    }\n    @media only screen and (max-width: 1180px) {\n        width: 100%;\n    }\n    padding-bottom: 3rem;\n    position: relative;\n    overflow: auto;\n    width: 75vw;\n"]);return C=function(){return e},e}var F=s.c.div.attrs({className:"bg-darker"})(C());function U(){var e=Object(l.a)(["\n    padding-left: 15px;\n    padding-right: 15px;\n"]);return U=function(){return e},e}var _=s.c.div(U()),I=function(e){return a.a.createElement(w,null,a.a.createElement(R,null),a.a.createElement(F,null,a.a.createElement(_,null,null===e||void 0===e?void 0:e.children)))},J={default:t(41),"chat-dos-guri-native":t(42),"react-ts":t(43),"scalatra-test":t(44)};function P(){var e=Object(l.a)(["\n    float: right;\n"]);return P=function(){return e},e}function z(){var e=Object(l.a)(["\n    border-radius: 4px;\n    max-height: 267px;\n    max-width: 400;\n"]);return z=function(){return e},e}function D(){var e=Object(l.a)(["\n    background-color: ",";\n    font-size: 50%;\n"]);return D=function(){return e},e}function V(){var e=Object(l.a)(["\n    padding: 10px;\n"]);return V=function(){return e},e}function $(){var e=Object(l.a)(["\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 4px;\n    padding: 10px;\n    margin-bottom: 5px;\n    background-color: ",";\n"]);return $=function(){return e},e}var q=s.c.div($(),(function(e){return e.theme.darkThemeOn?"#343a40":e.theme.theme.bg.light})),G=s.c.div(V()),H=s.c.span.attrs({className:"badge badge-pill"})(D(),(function(e){return e.theme.colors[e.lang]})),K=s.c.img(z()),Q=s.c.a.attrs({className:"btn btn-dark",target:"_blank"})(P()),X=function(e){var n=Object(r.useState)(J.default),t=Object(u.a)(n,2),c=t[0],i=t[1];return Object(r.useEffect)((function(){var n=Object.keys(J);n&&void 0!==n.find((function(n){return n===e.title}))&&i(J[e.title])}),[e.title]),a.a.createElement(q,null,a.a.createElement(K,{className:"img-fluid",src:c,alt:e.title+" - "+e.lang}),a.a.createElement(G,null,a.a.createElement(T,null,e.title),a.a.createElement("p",{style:{maxWidth:380}},e.description),a.a.createElement("span",null,a.a.createElement(H,{lang:e.lang},"\xa0"),"\xa0",e.lang),a.a.createElement(Q,{href:e.href}," Ver projeto ")))};function Y(){var e=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: flex-start;\n"]);return Y=function(){return e},e}var Z=s.c.div(Y()),ee=t(32),ne=t.n(ee),te=function(){var e=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){L().then((function(e){var n=e.map((function(e){return{lang:e.language.toLowerCase().trim(),description:e.description,title:e.name,href:e.html_url}}));a(n)})),M().then(l)}),[]),{cards:t,markdown:o}}(),n=e.cards,t=e.markdown;return a.a.createElement(I,null,a.a.createElement(O,null,a.a.createElement(ne.a,{source:t})),a.a.createElement("div",{className:"py-5"},a.a.createElement(N,null,"Meus projetos")),a.a.createElement(Z,null,n.map((function(e,n){return a.a.createElement(X,Object.assign({key:n},e))}))),a.a.createElement(O,null,a.a.createElement("p",null,"Icons made by"," ",a.a.createElement("a",{href:"https://creativemarket.com/Becris",title:"Becris"},"Becris")," ","from"," ",a.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))))},re=function(){return a.a.createElement(g,null,a.a.createElement(te,null))},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=function(){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(re,null))};i.a.render(a.a.createElement(ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/portfolio","/service-worker.js");ae?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(n,e)}))}}()},34:function(e,n,t){e.exports=t(127)},41:function(e,n,t){e.exports=t.p+"static/media/default.0953bcf5.jpg"},42:function(e,n,t){e.exports=t.p+"static/media/chat-dos-guri-native.65557d33.png"},43:function(e,n,t){e.exports=t.p+"static/media/react-ts.2afee9b9.png"},44:function(e,n,t){e.exports=t.p+"static/media/scalatra-test.499d6178.png"}},[[34,1,2]]]);
//# sourceMappingURL=main.4b17f7aa.chunk.js.map