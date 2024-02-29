"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[2973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:12},o="Exercise 9 (Optional)",s={unversionedId:"data-quality/Exercise-9",id:"data-quality/Exercise-9",title:"Exercise 9 (Optional)",description:"Exercise: Creating Unit Tests with dbt-unit-test",source:"@site/docs/data-quality/Exercise-9.mdx",sourceDirName:"data-quality",slug:"/data-quality/Exercise-9",permalink:"/docs/data-quality/Exercise-9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-quality/Exercise-9.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Exercise 8",permalink:"/docs/data-quality/Exercise-8"},next:{title:"Understanding Your Data",permalink:"/docs/data-visualisation/understanding-your-data"}},l={},c=[{value:"Exercise: Creating Unit Tests with <code>dbt-unit-test</code>",id:"exercise-creating-unit-tests-with-dbt-unit-test",level:2},{value:"Objective",id:"objective",level:3},{value:"Essential Reading \ud83d\udcd8 Prior to Starting the Exercise",id:"essential-reading--prior-to-starting-the-exercise",level:3},{value:"Instructions",id:"instructions",level:3},{value:"Tips for Mock Data and Expectations",id:"tips-for-mock-data-and-expectations",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercise-9-optional"},"Exercise 9 (Optional)"),(0,r.kt)("h2",{id:"exercise-creating-unit-tests-with-dbt-unit-test"},"Exercise: Creating Unit Tests with ",(0,r.kt)("inlineCode",{parentName:"h2"},"dbt-unit-test")),(0,r.kt)("h3",{id:"objective"},"Objective"),(0,r.kt)("p",null,"In this exercise, you will create unit tests for the ",(0,r.kt)("inlineCode",{parentName:"p"},"co2_emissions_and_temperatures_by_country")," model in your DBT project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt-unit-test")," package. You will mock the dependencies (",(0,r.kt)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_country_temperatures"),") and define the expected results to validate the model's logic."),(0,r.kt)("h3",{id:"essential-reading--prior-to-starting-the-exercise"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/EqualExperts/dbt-unit-testing"},"Essential Reading \ud83d\udcd8 Prior to Starting the Exercise")),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set Up the ",(0,r.kt)("inlineCode",{parentName:"strong"},"dbt-unit-test")," Package:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure you have the ",(0,r.kt)("inlineCode",{parentName:"li"},"dbt-unit-test")," package installed and configured in your DBT project."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a New Unit Test File:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"unit-test")," directory in your DBT project."),(0,r.kt)("li",{parentName:"ul"},"Create a new file for your test, for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"test_co2_emissions_and_temperatures.sql"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write the Unit Test:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open the new file and start framing your unit test using the provided template."),(0,r.kt)("li",{parentName:"ul"},"Mock the dependencies and provide mock data for ",(0,r.kt)("inlineCode",{parentName:"li"},"co2_emissions_by_country")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_country_temperatures"),"."),(0,r.kt)("li",{parentName:"ul"},"Specify the expected outcomes for the ",(0,r.kt)("inlineCode",{parentName:"li"},"co2_emissions_and_temperatures_by_country")," model.")),(0,r.kt)("p",{parentName:"li"},"Example template to start with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n    config(\n        tags=['unit-test']\n    )\n}}\n\n{% call dbt_unit_testing.test('co2_emissions_and_temperatures_by_country', 'assert_co2_emissions_and_temperatures_by_country') %}\n  {% call dbt_unit_testing.mock_ref('co2_emissions_by_country') %}\n    -- Provide Mock data for co2_emissions_by_country\n  {% endcall %}\n\n  {% call dbt_unit_testing.mock_ref('aggregate_country_temperatures') %}\n    -- Provide Mock data for aggregate_country_temperatures\n  {% endcall %}\n\n  {% call dbt_unit_testing.expect() %}\n    -- Provide expected mock data for the test\n  {% endcall %} \n{% endcall %}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Implement Mock Data:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Inside each ",(0,r.kt)("inlineCode",{parentName:"li"},"mock_ref")," block, insert the mock data relevant for the respective models."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"expect")," block, define the expected outcome of the test."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run the Test:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the DBT CLI to execute your unit test and validate the functionality of your model.")))),(0,r.kt)("h3",{id:"tips-for-mock-data-and-expectations"},"Tips for Mock Data and Expectations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When providing mock data, consider the structure of your source models and the transformations applied in your ",(0,r.kt)("inlineCode",{parentName:"li"},"co2_emissions_and_temperatures_by_country")," model."),(0,r.kt)("li",{parentName:"ul"},"Your expected data should reflect the intended output of the model, considering the input mock data.")))}d.isMDXComponent=!0}}]);