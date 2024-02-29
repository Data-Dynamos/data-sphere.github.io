"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[3809],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:7},o="Exercise 4",l={unversionedId:"data-quality/Exercise-4",id:"data-quality/Exercise-4",title:"Exercise 4",description:"To create singular test to validate business rule check on AverageTemperature column in aggregatecountrytemperatures model",source:"@site/docs/data-quality/Exercise-4.mdx",sourceDirName:"data-quality",slug:"/data-quality/Exercise-4",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-quality/Exercise-4.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Exercise 3",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-3"},next:{title:"Exercise 5",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-5"}},c={},u=[{value:"To create singular test to validate <code>business rule check</code> on <code>AverageTemperature</code> column in <code>aggregate_country_temperatures</code> model",id:"to-create-singular-test-to-validate-business-rule-check-on-averagetemperature-column-in-aggregate_country_temperatures-model",level:4}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exercise-4"},"Exercise 4"),(0,n.kt)("h4",{id:"to-create-singular-test-to-validate-business-rule-check-on-averagetemperature-column-in-aggregate_country_temperatures-model"},"To create singular test to validate ",(0,n.kt)("inlineCode",{parentName:"h4"},"business rule check")," on ",(0,n.kt)("inlineCode",{parentName:"h4"},"AverageTemperature")," column in ",(0,n.kt)("inlineCode",{parentName:"h4"},"aggregate_country_temperatures")," model"),(0,n.kt)("p",null,"Follow the instructions below using DBT:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your dbt project and navigate to the tests folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file called ",(0,n.kt)("inlineCode",{parentName:"p"},"assert_leeny_face_aggregate_country_temperatures.sql")," or any suitable name for the singular test file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the file, define the query to check whether the ",(0,n.kt)("inlineCode",{parentName:"p"},"AverageTemperature")," column has leeny face ",(0,n.kt)("inlineCode",{parentName:"p"},"( \u0361\xb0 \u035c\u0296 \u0361\xb0)")," string in its value in ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," table.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the table name in the query by referencing the ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," table. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ref()")," function to refer to the table. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"FROM {{ ref('aggregate_country_temperatures') }}"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Define the query in such a way that it should result output if any row has leeny face in ",(0,n.kt)("inlineCode",{parentName:"p"},"AverageTemperature")," column.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the dbt test project to validate the result. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt test")," command in your terminal to see if test case is successfully completed."))))}m.isMDXComponent=!0}}]);