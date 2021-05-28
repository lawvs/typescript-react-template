(()=>{"use strict";var e,t={632:function(e,t,l){var o=this&&this.__createBinding||(Object.create?function(e,t,l,o){void 0===o&&(o=l),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[l]}})}:function(e,t,l,o){void 0===o&&(o=l),e[o]=t[l]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&o(t,e,l);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=a(l(294)),u=r(l(163)),c=l(299),d=u.default.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.bg};
`,f=u.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
`,s=u.default(f)`
  flex: unset;
  padding-top: 40px;
  padding-bottom: 20px;
`;t.App=()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(u.ThemeProvider,{theme:c.theme},i.default.createElement(c.GlobalStyle,null),i.default.createElement(i.default.StrictMode,null,i.default.createElement(d,null,i.default.createElement(f,null,i.default.createElement("div",null,"Typescript React Template")),i.default.createElement(s,{as:"footer"},"licensed under the MIT license.")))))},629:function(e,t,l){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(l(294)),r=l(935),a=l(632);l(562);const i=document.querySelector("#root")||document.body;i.children.length?r.hydrate(n.default.createElement(a.App,null),i):r.render(n.default.createElement(a.App,null),i)},562:()=>{console.group("Build info"),console.log("Project:","typescript-react-template"),console.log("Build date:",new Date("2021-05-28T17:30:28.080Z").toLocaleString()),console.log("Environment:","production(ci)"),console.log("Version:","v0.4.0-23-g0877c37"),console.log("Coverage:",`${document.location.href}coverage/lcov-report/index.html`),console.log("Bundle report:",`${document.location.href}report.html`),console.groupEnd()},299:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.GlobalStyle=void 0;const o=l(163);t.GlobalStyle=o.createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, Icons16, sans-serif;
    margin: 0;
    padding: 0;
    font-style: normal;
  }

a {
  color: inherit;
  text-decoration: none;
}
`,t.theme={bg:"white"}}},l={};function o(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,l,n,r)=>{if(!l){var a=1/0;for(c=0;c<e.length;c++){for(var[l,n,r]=e[c],i=!0,u=0;u<l.length;u++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](l[u])))?l.splice(u--,1):(i=!1,r<a&&(a=r));i&&(e.splice(c--,1),t=n())}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[a,i,u]=l,c=0;for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(u)var d=u(o);for(t&&t(l);c<a.length;c++)r=a[c],o.o(e,r)&&e[r]&&e[r][0](),e[a[c]]=0;return o.O(d)},l=self.webpackChunktypescript_react_template=self.webpackChunktypescript_react_template||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=o.O(void 0,[216],(()=>o(629)));n=o.O(n)})();
//# sourceMappingURL=main.455bcfec.js.map