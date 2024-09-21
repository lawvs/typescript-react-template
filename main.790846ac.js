(()=>{"use strict";var e,t={34:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&r(t,e,o);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=o(70),a=o(758),c=l(o(620)),d=o(311),s=c.default.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.bg};
`,u=c.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
`,p=(0,c.default)(u)`
  flex: unset;
  padding-top: 40px;
  padding-bottom: 20px;
`;t.App=()=>(0,i.jsxs)(c.ThemeProvider,{theme:d.theme,children:[(0,i.jsx)(d.GlobalStyle,{}),(0,i.jsx)(a.StrictMode,{children:(0,i.jsxs)(s,{children:[(0,i.jsx)(u,{children:(0,i.jsx)("div",{children:"Typescript React Template"})}),(0,i.jsx)(p,{as:"footer",children:"licensed under the MIT license."})]})})]})},435:(e,t,o)=>{const r=o(70),n=o(576),l=o(34);o(94);const i=document.querySelector("#root")||document.body;i.children.length?(0,n.hydrateRoot)(i,(0,r.jsx)(l.App,{})):(0,n.createRoot)(i).render((0,r.jsx)(l.App,{}))},94:()=>{console.group("Build info"),console.log("Project:","typescript-react-template"),console.log("Build date:",new Date("2024-09-21T17:38:55.700Z").toLocaleString()),console.log("Environment:","production(ci)"),console.log("Version:","a4726ad"),console.log("Coverage:",`${document.location.href}coverage/lcov-report/index.html`),console.log("Bundle report:",`${document.location.href}report.html`),console.groupEnd()},311:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.GlobalStyle=void 0;const r=o(620);t.GlobalStyle=r.createGlobalStyle`
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
`,t.theme={bg:"white"}}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var i=1/0;for(s=0;s<e.length;s++){for(var[o,n,l]=e[s],a=!0,c=0;c<o.length;c++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,n,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[i,a,c]=o,d=0;if(i.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(c)var s=c(r)}for(t&&t(o);d<i.length;d++)l=i[d],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},o=self.webpackChunktypescript_react_template=self.webpackChunktypescript_react_template||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.nc=void 0;var n=r.O(void 0,[96],(()=>r(435)));n=r.O(n)})();
//# sourceMappingURL=main.790846ac.js.map