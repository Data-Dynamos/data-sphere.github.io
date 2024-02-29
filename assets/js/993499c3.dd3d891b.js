"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[7480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:23,minutesToComplete:30,authors:["plaosunthara"]},s="UDFs (Bonus)",i={unversionedId:"batch-processing/udfs",id:"batch-processing/udfs",title:"UDFs (Bonus)",description:"What's missing?",source:"@site/docs/batch-processing/udfs.mdx",sourceDirName:"batch-processing",slug:"/batch-processing/udfs",permalink:"/docs/batch-processing/udfs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/batch-processing/udfs.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,minutesToComplete:30,authors:["plaosunthara"]},sidebar:"tutorialSidebar",previous:{title:"Production Code (Bonus)",permalink:"/docs/batch-processing/production-code-example"},next:{title:"Additional Spark Functions (Bonus)",permalink:"/docs/batch-processing/exercise-additional-spark-functions"}},l={},c=[{value:"What&#39;s missing?",id:"whats-missing",level:2},{value:"Python UDFs",id:"python-udfs",level:2},{value:"How can I bring in my own custom Python logic?",id:"how-can-i-bring-in-my-own-custom-python-logic",level:3},{value:"But..how can we be more efficient when switching between the JVM and Python??",id:"buthow-can-we-be-more-efficient-when-switching-between-the-jvm-and-python",level:3},{value:"Wowww, how do I actually use Pandas UDFs then?",id:"wowww-how-do-i-actually-use-pandas-udfs-then",level:3},{value:"Try it yourself (optional)",id:"try-it-yourself-optional",level:3},{value:"A Deeper Reference",id:"a-deeper-reference",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"udfs-bonus"},"UDFs (Bonus)"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("figure",{class:"video-container"},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/r418tWNnAq8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,r.kt)("h2",{id:"whats-missing"},"What's missing?"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cool-stuff-missing.png",src:a(2163).Z,width:"500",height:"512"}))),(0,r.kt)("p",null,"Short Answer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pandas UDFs (Vectorised UDFs)")),(0,r.kt)("h2",{id:"python-udfs"},"Python UDFs"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"python-udfs.png",src:a(5661).Z,width:"512",height:"249"}))),(0,r.kt)("h3",{id:"how-can-i-bring-in-my-own-custom-python-logic"},"How can I bring in my own custom Python logic?"),(0,r.kt)("p",null,"(needs other libraries, not available as pyspark built-in functions)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic Answer:")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/spark/latest/spark-sql/udf-python-pandas.html"},"Python UDFs")),(0,r.kt)("p",null,"How does this work?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JVM serializes data and sends it to the Python process"),(0,r.kt)("li",{parentName:"ul"},"Python process deserializes, then serializes it back to the JVM"),(0,r.kt)("li",{parentName:"ul"},"JVM deserializes the data for running next operations/steps")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"python-udf-execution.png",src:a(4020).Z,width:"512",height:"288"}))),(0,r.kt)("h3",{id:"buthow-can-we-be-more-efficient-when-switching-between-the-jvm-and-python"},"But..how can we be more efficient when switching between the JVM and Python??"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic Answer:")," Vectorization"),(0,r.kt)("p",null,"How does this work? (the Apache Arrow project is basically dedicated to this!)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Batches/chunks of a single/multiple column(s) are serialized compactly/efficiently then sent to the Python process"),(0,r.kt)("li",{parentName:"ul"},"Which Python library is really good at vectorized operations on data again?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pandas! uses NumPy (written in C) under the hood"))),(0,r.kt)("li",{parentName:"ul"},"Chunks of data are serialized then finally sent back to the JVM")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A pandas user-defined function (UDF)\u2014also known as vectorized UDF\u2014is a user-defined function that uses Apache Arrow to transfer data and pandas to work with the data. pandas UDFs allow vectorized operations that can increase performance up to 100x compared to row-at-a-time Python UDFs. (",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/spark/latest/spark-sql/udf-python-pandas.html#pandas-user-defined-functions"},"Reference"),")")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply-in-pandas.png",src:a(8832).Z,width:"512",height:"286"}))),(0,r.kt)("p",null,"This even allows you to run custom logic per each group of data in a distributed manner:"),(0,r.kt)("p",null,"Pandas DataFrame ",(0,r.kt)("strong",{parentName:"p"},"IN"),"\nPandas DataFrame ",(0,r.kt)("strong",{parentName:"p"},"OUT"),"\nThis is ",(0,r.kt)("strong",{parentName:"p"},"massive"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/spark/latest/spark-sql/pandas-function-apis.html"},"Reference Docs")),(0,r.kt)("h3",{id:"wowww-how-do-i-actually-use-pandas-udfs-then"},"Wowww, how do I actually use Pandas UDFs then?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic Answer:")," Learn the different types of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/spark/latest/spark-sql/udf-python-pandas.html"},"Pandas UDFs")," AND ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/spark/latest/spark-sql/pandas-function-apis.html"},"Pandas Functions APIs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example blog post (",(0,r.kt)("a",{parentName:"li",href:"https://databricks.com/blog/2017/10/30/introducing-vectorized-udfs-for-pyspark.html"},"potentially outdated"),")"),(0,r.kt)("li",{parentName:"ul"},"Series to Series (these can often directly replace your Python UDFs)"),(0,r.kt)("li",{parentName:"ul"},"Grouped Map (Pandas Functions APIs)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is ",(0,r.kt)("strong",{parentName:"li"},"THE holy grail"),", you can parallelize data processing by treating each \u201cgroup\u201d as an independent Pandas DataFrame"),(0,r.kt)("li",{parentName:"ul"})))),(0,r.kt)("h3",{id:"try-it-yourself-optional"},"Try it yourself (optional)"),(0,r.kt)("p",null,"Import the following Pandas UDF benchmark notebook into Databricks using the URL method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/1281142885375883/2174302049319883/7729323681064935/latest.html?_gl=1*1dt6rri*_gcl_aw*R0NMLjE2NTgwNTYzNjguRUFJYUlRb2JDaE1JME1mR24tWF8tQUlWVHRrUkNCMHdqd05IRUFFWUFTQUFFZ0pJM3ZEX0J3RQ..&_ga=2.69934608.18112261.1660751261-1602603096.1651760939&_gac=1.262850872.1658056369.EAIaIQobChMI0MfGn-X_-AIVTtkRCB0wjwNHEAEYASAAEgJI3vD_BwE\n")),(0,r.kt)("h2",{id:"a-deeper-reference"},"A Deeper Reference"),(0,r.kt)("p",null,"Check out O'Reilly's ",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/learning-spark/9781449359034/"},'"Learning Spark" book')))}d.isMDXComponent=!0},8832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-in-pandas-d69add633d5ca73e8e6cb0442685790d.png"},2163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cool-stuff-missing-0ee10a3baedda8a05b77b46c3c1c2b5e.png"},4020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-udf-execution-f2d17b957a120678fb004c7574df7a3d.png"},5661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-udfs-b7abfb9be3f6289696de0eb5a55a3939.png"}}]);