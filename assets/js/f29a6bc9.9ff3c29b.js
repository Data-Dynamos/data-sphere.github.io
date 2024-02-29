"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[1531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:9,authors:["syed","kmok"],minutesToComplete:10},o="Stateful Streaming in a Nutshell",l={unversionedId:"beyond-the-batch/stateful-streaming-nutshell",id:"beyond-the-batch/stateful-streaming-nutshell",title:"Stateful Streaming in a Nutshell",description:"stateful-streaming-in-a-nutshell.png",source:"@site/docs/beyond-the-batch/stateful-streaming-nutshell.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/stateful-streaming-nutshell",permalink:"/data-sphere.github.io/docs/beyond-the-batch/stateful-streaming-nutshell",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/beyond-the-batch/stateful-streaming-nutshell.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,authors:["syed","kmok"],minutesToComplete:10},sidebar:"tutorialSidebar",previous:{title:"Handling Late Data",permalink:"/data-sphere.github.io/docs/beyond-the-batch/handling-late-data"},next:{title:"Sharing Streaming Data",permalink:"/data-sphere.github.io/docs/beyond-the-batch/sharing-streaming-data"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stateful-streaming-in-a-nutshell"},"Stateful Streaming in a Nutshell"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"stateful-streaming-in-a-nutshell.png",src:a(9744).Z,width:"512",height:"392"}))),(0,r.kt)("p",null,"We have come a long way, haven't we? We started with learning the basics of Streaming as a concept. We then moved on to Spark Structured Streaming and appreciated its similarities with Spark SQL with the help of a few examples. Next, we differentiated between Stateless and Stateful programs and lastly, how to handle late data using windows aggregations and fault tolerance through checkpointing."),(0,r.kt)("p",null,"To summarise, we may use some or all of the above topics in our applications but the typical elements of a Spark Streaming Application would look like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Streaming Source (production-grade applications typically use Apache Kafka or a similar technology)"),(0,r.kt)("li",{parentName:"ol"},"Spark Streaming Application (Stateless or Stateful, depending upon the use case)"),(0,r.kt)("li",{parentName:"ol"},"Checkpointing for Fault Tolerance"),(0,r.kt)("li",{parentName:"ol"},"Output Sink (production-grade applications will dump the data into a data store to be picked up by the end users of this data)"),(0,r.kt)("li",{parentName:"ol"},"End Users of Data (Tableau, Matplotlib, ML Pipelines, etc) pick up the near real-time data to drive insights or other products requiring near-real time data")))}d.isMDXComponent=!0},9744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stateful-streaming-in-a-nutshell-4df8b807a01ac0db4ce4b07fd3550d9d.png"}}]);