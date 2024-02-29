"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[3596],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:4},i="The analytical and operational planes (Optional)",s={unversionedId:"data-mesh/types-of-data",id:"data-mesh/types-of-data",title:"The analytical and operational planes (Optional)",description:"Throughout Data Mesh you'll hear a lot of references to analytical data and operational data. Looking back to the",source:"@site/docs/data-mesh/types-of-data.mdx",sourceDirName:"data-mesh",slug:"/data-mesh/types-of-data",permalink:"/data-dynamos.github.io/docs/data-mesh/types-of-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-mesh/types-of-data.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"What is Data Mesh? (Optional)",permalink:"/data-dynamos.github.io/docs/data-mesh/overview"},next:{title:"Want to learn more? (Optional)",permalink:"/data-dynamos.github.io/docs/data-mesh/resources"}},l={},c=[{value:"Operational data",id:"operational-data",level:3},{value:"Analytical data",id:"analytical-data",level:3},{value:"Bringing them together",id:"bringing-them-together",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-analytical-and-operational-planes-optional"},"The analytical and operational planes (Optional)"),(0,o.kt)("p",null,"Throughout Data Mesh you'll hear a lot of references to ",(0,o.kt)("strong",{parentName:"p"},"analytical data")," and ",(0,o.kt)("strong",{parentName:"p"},"operational data"),". Looking back to the\nData Mesh introduction, we see that it is a paradigm shift in analytical data management at scale. Let's dive into how those\ntypes of data are different, and how Data Mesh works to bring them closer together."),(0,o.kt)("h3",{id:"operational-data"},"Operational data"),(0,o.kt)("p",null,"Operational data is data that are produced by the day-to-day operations of the business. Operational systems may change the data,\nupdating the state of the data to represent the latest current values within a system (e.g. CRUD through transacstions). The data\nin this space is often transactional in nature and optimised for applications / services to interact with."),(0,o.kt)("h3",{id:"analytical-data"},"Analytical data"),(0,o.kt)("p",null,"Analytical data on the other hand is often more complex than operational data. It is the data that are used to make business\ndecisions - it remains read-only and historic. This data is optimised for analytical logic so would be aggregated or structured\nin such a way so as to answer particular business questions (i.e. not a raw transaction log)."),(0,o.kt)("h2",{id:"bringing-them-together"},"Bringing them together"),(0,o.kt)("p",null,"Traditionally organisations would use ETL processes to move across their data that was generated by operational systems to\nship it to the analytical space. Once in the analytical space, the data would be used to answer data-consumers' questions or provide insights to those consumers.\nThe consumers would then be able to act on those insights. "),(0,o.kt)("p",null,"This process of moving through the phases of Data > Information > Insight > Decision > Action is known as the ",(0,o.kt)("strong",{parentName:"p"},"cycle of intelligence"),".\nIn order to improve how well value is being realised from data, we would work to reduce friction in this cycle, making the cycle provide\nas fast feedback as possible. Data Mesh as an approach pushes to do this by bringing the source systems and their consumers closer\ntogether. To reduce the distance between our producers and consumers, we also need to bring the operational and analytical planes\ninto closer alignment. "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/AqZ3Hhnr-cY",id:"ytplayer",allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:!0,mozallowfullscreen:!0,webkitallowfullscreen:!0,oallowfullscreen:!0,msallowfullscreen:!0,width:"620",height:"349"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://youtu.be/AqZ3Hhnr-cY"},"Bringing operational and analytical data closer")))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cycle-of-intelligence-basic.png",src:a(2072).Z,width:"569",height:"385"}))),(0,o.kt)("p",null,"To learn more about the cycle of intelligence, read\n",(0,o.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/insights/articles/intelligent-enterprise-series-models-enterprise-intelligence"},"Intelligent Enterprise Series"),"."))}h.isMDXComponent=!0},2072:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cycle-of-intelligence-basic-192705177c039af0e727bcb6757c5403.png"}}]);