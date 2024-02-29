"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:6},o="Exercise 3",l={unversionedId:"data-quality/Exercise-3",id:"data-quality/Exercise-3",title:"Exercise 3",description:"To create singular test to validate type check on all column in aggregateglobalemissions_temperatures model",source:"@site/docs/data-quality/Exercise-3.mdx",sourceDirName:"data-quality",slug:"/data-quality/Exercise-3",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-quality/Exercise-3.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Exercise 2",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-2"},next:{title:"Exercise 4",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-4"}},s={},c=[{value:"To create singular test to validate <code>type check</code> on all column in <code>aggregate_global_emissions_temperatures</code> model",id:"to-create-singular-test-to-validate-type-check-on-all-column-in-aggregate_global_emissions_temperatures-model",level:4}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exercise-3"},"Exercise 3"),(0,n.kt)("h4",{id:"to-create-singular-test-to-validate-type-check-on-all-column-in-aggregate_global_emissions_temperatures-model"},"To create singular test to validate ",(0,n.kt)("inlineCode",{parentName:"h4"},"type check")," on all column in ",(0,n.kt)("inlineCode",{parentName:"h4"},"aggregate_global_emissions_temperatures")," model"),(0,n.kt)("p",null,"Follow the instructions below using DBT:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your dbt project and navigate to the tests folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file called ",(0,n.kt)("inlineCode",{parentName:"p"},"assert_type_check_aggregate_global_emissions_temperatures.sql")," or any suitable name for the singular test file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the file, define the query to check whether all the columns are in below specified type in ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures")," table."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"YEAR: INTEGER\nTOTALEMISSIONS: DOUBLE\nLANDAVERAGETEMPERATURE: DOUBLE\nLANDMAXTEMPERATURE: DOUBLE\nLANDMINTEMPERATURE: DOUBLE\nLANDANDOCEANAVERAGETEMPERATURE: DOUBLE\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the table name in the query by referencing the ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures")," table. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ref()")," function to refer to the table. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"FROM {{ ref('aggregate_global_emissions_temperatures') }}"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Define the query in such a way that it should result output if any column has different format whicb is specified in the requirement.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the dbt test project to validate the result. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt test")," command in your terminal to see if test case is successfully completed."))))}m.isMDXComponent=!0}}]);