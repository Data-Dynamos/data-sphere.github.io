"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[7620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Exercise 1",s={unversionedId:"data-quality/Exercise-1",id:"data-quality/Exercise-1",title:"Exercise 1",description:"To create singular test to validate uniqueness check on surrogate keys in co2emissionsby_country model",source:"@site/docs/data-quality/Exercise-1.mdx",sourceDirName:"data-quality",slug:"/data-quality/Exercise-1",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-quality/Exercise-1.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Quality test",permalink:"/data-dynamos.github.io/docs/data-quality/dq_test"},next:{title:"Exercise 2",permalink:"/data-dynamos.github.io/docs/data-quality/Exercise-2"}},c={},l=[{value:"To create singular test to validate <code>uniqueness check</code> on surrogate keys in <code>co2_emissions_by_country</code> model",id:"to-create-singular-test-to-validate-uniqueness-check-on-surrogate-keys-in-co2_emissions_by_country-model",level:4}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exercise-1"},"Exercise 1"),(0,a.kt)("h4",{id:"to-create-singular-test-to-validate-uniqueness-check-on-surrogate-keys-in-co2_emissions_by_country-model"},"To create singular test to validate ",(0,a.kt)("inlineCode",{parentName:"h4"},"uniqueness check")," on surrogate keys in ",(0,a.kt)("inlineCode",{parentName:"h4"},"co2_emissions_by_country")," model"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Surrogate Key")," refers to primary combinations of two or more columns which on combination should be unique across the table.\nEg: Year and Country column together make the unique combination in ",(0,a.kt)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," table")),(0,a.kt)("p",null,"Follow the instructions below using DBT:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your dbt project and navigate to the tests folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"assert_surrogate_key_co2_emissions_by_country.sql")," or any suitable name for the singular test file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the file, define the query to check the uniqueness of primary key combination. In this case, Primary key combination (Surrogate key) is ",(0,a.kt)("inlineCode",{parentName:"p"},"Year")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Country")," columns.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specify the table name in the query by referencing the ",(0,a.kt)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," table. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref()")," function to refer to the table. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM {{ ref('co2_emissions_by_country') }}"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the query in such a way that it should result output if there are duplicate records found for the surrogate keys."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To check uniqueness or to detect duplicates, use ",(0,a.kt)("inlineCode",{parentName:"p"},"group by")," clause on primary key columns together with ",(0,a.kt)("inlineCode",{parentName:"p"},"having")," clause and count check.")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the dbt test project to validate the result. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt test")," command in your terminal to see if test case is successfully completed."))))}d.isMDXComponent=!0}}]);