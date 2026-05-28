(()=>{"use strict";var e,t={545(e,t,o){var r,n=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||(r=function(e){return r=Object.getOwnPropertyNames||function(e){var t=[];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[t.length]=o);return t},r(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o=r(e),i=0;i<o.length;i++)"default"!==o[i]&&n(t,e,o[i]);return l(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const a=o(325),c=o(489),d=i(o(691)),s=o(224),u=d.default.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.bg};
`,p=d.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
`,f=(0,d.default)(p)`
  flex: unset;
  padding-top: 40px;
  padding-bottom: 20px;
`;t.App=()=>(0,a.jsxs)(d.ThemeProvider,{theme:s.theme,children:[(0,a.jsx)(s.GlobalStyle,{}),(0,a.jsx)(c.StrictMode,{children:(0,a.jsxs)(u,{children:[(0,a.jsx)(p,{children:(0,a.jsx)("div",{children:"Typescript React Template"})}),(0,a.jsx)(f,{as:"footer",children:"licensed under the MIT license."})]})})]})},44(e,t,o){const r=o(325),n=o(978),l=o(545);o(451);const i=document.querySelector("#root")||document.body;i.children.length?(0,n.hydrateRoot)(i,(0,r.jsx)(l.App,{})):(0,n.createRoot)(i).render((0,r.jsx)(l.App,{}))},451(){console.group("Build info"),console.log("Project:","typescript-react-template"),console.log("Build date:",new Date("2026-05-28T16:31:03.172Z").toLocaleString()),console.log("Environment:","production(ci)"),console.log("Version:","1b8f88f"),console.log("Coverage:",`${document.location.href}coverage/lcov-report/index.html`),console.log("Bundle report:",`${document.location.href}report.html`),console.groupEnd()},224(e,t,o){t.theme=t.GlobalStyle=void 0;const r=o(691);t.GlobalStyle=r.createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, Icons16, sans-serif;
    margin: 0;
    padding: 0;
    font-style: normal;
    scrollbar-gutter: stable;
  }

a {
  color: inherit;
  text-decoration: none;
}
`,t.theme={bg:"white"}}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var i=1/0;for(s=0;s<e.length;s++){for(var[o,n,l]=e[s],a=!0,c=0;c<o.length;c++)(!1&l||i>=l)&&Object.keys(r.O).every(e=>r.O[e](o[c]))?o.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,n,l]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[i,a,c]=o,d=0;if(i.some(t=>0!==e[t])){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(c)var s=c(r)}for(t&&t(o);d<i.length;d++)l=i[d],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},o=self.webpackChunktypescript_react_template=self.webpackChunktypescript_react_template||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.nc=void 0;var n=r.O(void 0,[96],()=>r(44));n=r.O(n)})();
//# sourceMappingURL=main.81570240.js.map