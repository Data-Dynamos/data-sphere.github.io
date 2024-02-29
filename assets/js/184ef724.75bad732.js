"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[9969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:8},i="Exercise 5",s={unversionedId:"data-quality/Exercise-5",id:"data-quality/Exercise-5",title:"Exercise 5",description:"To create singular test to validate consistency check on Country column in aggregatecountryemissions_temperatures model",source:"@site/docs/data-quality/Exercise-5.mdx",sourceDirName:"data-quality",slug:"/data-quality/Exercise-5",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-quality/Exercise-5.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Exercise 4",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-4"},next:{title:"Exercise 6",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-6"}},c={},l=[{value:"To create singular test to validate <code>consistency check</code> on <code>Country</code> column in <code>aggregate_country_emissions_temperatures</code> model",id:"to-create-singular-test-to-validate-consistency-check-on-country-column-in-aggregate_country_emissions_temperatures-model",level:4}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exercise-5"},"Exercise 5"),(0,a.kt)("h4",{id:"to-create-singular-test-to-validate-consistency-check-on-country-column-in-aggregate_country_emissions_temperatures-model"},"To create singular test to validate ",(0,a.kt)("inlineCode",{parentName:"h4"},"consistency check")," on ",(0,a.kt)("inlineCode",{parentName:"h4"},"Country")," column in ",(0,a.kt)("inlineCode",{parentName:"h4"},"aggregate_country_emissions_temperatures")," model"),(0,a.kt)("p",null,"Follow the instructions below using DBT:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your dbt project and navigate to the tests folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"assert_initcap_aggregate_country_emissions_temperatures.sql")," or any suitable name for the singular test file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the file, define the query to check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"country")," column is in InitCap format in ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate_country_emissions_temperatures")," table.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specify the table name in the query by referencing the ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate_country_emissions_temperatures")," table. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref()")," function to refer to the table. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM {{ ref('aggregate_country_emissions_temperatures') }}"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the query in such a way that it should result output if any row has ",(0,a.kt)("inlineCode",{parentName:"p"},"country")," column other than InitCap format.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the dbt test project to validate the result. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt test")," command in your terminal to see if test case is successfully completed."))))}m.isMDXComponent=!0}}]);