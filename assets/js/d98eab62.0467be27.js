"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:7,minutesToComplete:5,authors:["plaosunthara"]},o="ETL vs ELT",s={unversionedId:"batch-processing/etl-vs-elt",id:"batch-processing/etl-vs-elt",title:"ETL vs ELT",description:"Let's Be Pragmatic",source:"@site/docs/batch-processing/etl-vs-elt.md",sourceDirName:"batch-processing",slug:"/batch-processing/etl-vs-elt",permalink:"/data-dynamos.github.io/docs/batch-processing/etl-vs-elt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/batch-processing/etl-vs-elt.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,minutesToComplete:5,authors:["plaosunthara"]},sidebar:"tutorialSidebar",previous:{title:"Exercise: Silver",permalink:"/data-dynamos.github.io/docs/batch-processing/exercise-silver"},next:{title:"Data Testing",permalink:"/data-dynamos.github.io/docs/batch-processing/data-testing"}},l={},c=[{value:"Let&#39;s Be Pragmatic",id:"lets-be-pragmatic",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"etl-vs-elt"},"ETL vs ELT"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("figure",{class:"video-container"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/IqXqe7ZbcM8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,n.kt)("h2",{id:"lets-be-pragmatic"},"Let's Be Pragmatic"),(0,n.kt)("p",null,"Rather than obsessing over this ETL vs ELT cage fight, just try to take away the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sometimes you may want to optimize/reshape your data sooner (because it is a common use-case/denominator for your consumers or your consumers don't have the capabilities to aggregate data on their own)"),(0,n.kt)("li",{parentName:"ul"},"Other times, you want to leave the schema flexible (and just let the user\u2019s queries/views do the work) to avoid having to maintain lots of tables/views/jobs")),(0,n.kt)("p",null,"To bring it back to our context (3-hop architecture), it is totally and completely acceptable for Consumers read directly from the Silver layer resulting in an ELT architecture. These Consumers must have the technical capabilities within their team to handle the respective amount of data according to their data requirements (timeliness, amount of data, compute power). Some organisations might also opt to push the results of the Silver layer to queryable sources like PowerBI so that Business Intelligence departments can use their own tools to gain insights on this data. The Silver layer is powerful to its consumers and accelerates the time to delivering insights/value because of its curated nature. Somewhere, some ",(0,n.kt)("strong",{parentName:"p"},"lightweight")," governance team (comprising domain, business, and technical representatives from multiple teams within the network of data) will have likely made a standarisation decision about how to represent certain domain objects, for example, that all unique identifiers must be lowercase and case-insensitive or that values of a certain measure must be of ",(0,n.kt)("inlineCode",{parentName:"p"},"double")," type and have 2 significant digits. The Silver layer delivers this level of standardisation and curation while still maintaining the granularity of the data so that consumers have the flexibility to run their own aggregations. This is one form of an ELT architecture."),(0,n.kt)("p",null,"For complex aggregations or for teams without the big data capabilities, we might take yet another step to transform our data from the Silver layer, in the form of any number of Gold layers which is then used by a consumer. Usually, there is a 1:1 relationship between the Gold layer and a use-case, and is our classical ETL representation. In this case, it's important to understand exactly what is requested or what question is being answered by the data in order to determine the correct aggregation. Understanding what questions are to be answered by data is also important in determining what shape the data takes in the Silver layer as well (common denominator), but it is more granular and specific in the Gold layer."))}p.isMDXComponent=!0}}]);