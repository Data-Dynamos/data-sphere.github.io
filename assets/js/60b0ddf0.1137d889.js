"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[4682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var n=a.createContext({}),s=function(e){var t=a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(n.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,n=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,k=u["".concat(n,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var n in t)hasOwnProperty.call(t,n)&&(c[n]=t[n]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));const l={sidebar_position:30,minutesToComplete:190,authors:["syed"]},o="Vanilla Spark on your Local Machine (Bonus)",c={unversionedId:"batch-processing/demo-vanilla-spark",id:"batch-processing/demo-vanilla-spark",title:"Vanilla Spark on your Local Machine (Bonus)",description:"Every wonder what Spark looks like when it's run on your local machine? Let's join Syed as he walks you through some of the Vanilla Spark basics!",source:"@site/docs/batch-processing/011-demo-vanilla-spark.md",sourceDirName:"batch-processing",slug:"/batch-processing/demo-vanilla-spark",permalink:"/data-sphere.github.io/docs/batch-processing/demo-vanilla-spark",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/batch-processing/011-demo-vanilla-spark.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,minutesToComplete:190,authors:["syed"]},sidebar:"tutorialSidebar",previous:{title:"UDFs (Bonus)",permalink:"/data-sphere.github.io/docs/batch-processing/udfs"},next:{title:"Additional Spark Functions (Bonus)",permalink:"/data-sphere.github.io/docs/batch-processing/exercise-additional-spark-functions"}},n={},s=[{value:"Running Spark locally: Spark Shell &amp; UI",id:"running-spark-locally-spark-shell--ui",level:2},{value:"Spark Ecosystem, Spark Session (Spark Object)",id:"spark-ecosystem-spark-session-spark-object",level:2},{value:"Spark Program Structure",id:"spark-program-structure",level:2},{value:"Spark Applications and Jobs",id:"spark-applications-and-jobs",level:2},{value:"Spark Input Partitions, Stages, and DAGs",id:"spark-input-partitions-stages-and-dags",level:2},{value:"Spark Tasks and Operations",id:"spark-tasks-and-operations",level:2},{value:"Do it yourself!",id:"do-it-yourself",level:2},{value:"Spark Read data from files - Part 1",id:"spark-read-data-from-files---part-1",level:2},{value:"Spark Read data from files - Part 2",id:"spark-read-data-from-files---part-2",level:2},{value:"Spark groupBy and Shuffle Partitions - Part 1",id:"spark-groupby-and-shuffle-partitions---part-1",level:2},{value:"Spark groupBy and Shuffle Partitions - Part 2",id:"spark-groupby-and-shuffle-partitions---part-2",level:2},{value:"Spark Repartitions - Part 1",id:"spark-repartitions---part-1",level:2},{value:"Spark Repartitions - Part 2",id:"spark-repartitions---part-2",level:2},{value:"Spark Program on the cluster - detailed explanation",id:"spark-program-on-the-cluster---detailed-explanation",level:2},{value:"Spark PartitionBy",id:"spark-partitionby",level:2},{value:"Spark BucketBy",id:"spark-bucketby",level:2},{value:"Spark Submit - Part 1",id:"spark-submit---part-1",level:2},{value:"Spark Submit - Part 2",id:"spark-submit---part-2",level:2},{value:"Spark Submit - Part 3",id:"spark-submit---part-3",level:2},{value:"Spark Structured Streaming - Introduction",id:"spark-structured-streaming---introduction",level:2},{value:"Spark Structured Streaming - Example 1",id:"spark-structured-streaming---example-1",level:2},{value:"Spark Structured Streaming - Example 2",id:"spark-structured-streaming---example-2",level:2},{value:"Spark Structured Streaming - Example 3",id:"spark-structured-streaming---example-3",level:2},{value:"Spark Caching - Introduction",id:"spark-caching---introduction",level:2},{value:"Spark Caching - Example 1",id:"spark-caching---example-1",level:2},{value:"Spark Caching - Example 2",id:"spark-caching---example-2",level:2},{value:"Spark Caching - Example 3",id:"spark-caching---example-3",level:2},{value:"Summary",id:"summary",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vanilla-spark-on-your-local-machine-bonus"},"Vanilla Spark on your Local Machine (Bonus)"),(0,i.kt)("p",null,"Every wonder what Spark looks like when it's run on your local machine? Let's join Syed as he walks you through some of the Vanilla Spark basics!"),(0,i.kt)("h2",{id:"running-spark-locally-spark-shell--ui"},"Running Spark locally: Spark Shell & UI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basics of Spark Shell"),(0,i.kt)("li",{parentName:"ul"},"Basics of Spark UI",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Can be seen through Spark Shells"),(0,i.kt)("li",{parentName:"ul"},"Also in the Databricks Notebooks")))),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/y2M6nYhpPPg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("p",null,"To practice the concepts and examples that are demonstrated in the above video, specific versions of Apache Spark and Java Standard Edition are required to be installed on your machines. Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/data-derp/exercise-vanilla-spark/tree/main#readme"},"here")," to do so."),(0,i.kt)("h2",{id:"spark-ecosystem-spark-session-spark-object"},"Spark Ecosystem, Spark Session (Spark Object)"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2KlydmMU9ko",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-program-structure"},"Spark Program Structure"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/T1pD6lwssXc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-applications-and-jobs"},"Spark Applications and Jobs"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/byMySPRrPB4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-input-partitions-stages-and-dags"},"Spark Input Partitions, Stages, and DAGs"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zOZtmc-yOnw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-tasks-and-operations"},"Spark Tasks and Operations"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/dSuNVxwl9FU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"do-it-yourself"},"Do it yourself!"),(0,i.kt)("p",null,"Starting from the video below, a Git repo is used to demonstrate the examples in Pycharm. If you would like to follow along on your local machine, set up the repo in Pycharm by following the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/data-derp/exercise-vanilla-spark/tree/main#repo-set-up-in-pycharm"},"here"),"."),(0,i.kt)("h2",{id:"spark-read-data-from-files---part-1"},"Spark Read data from files - Part 1"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/koW-Wq7WULs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-read-data-from-files---part-2"},"Spark Read data from files - Part 2"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/KuMf9wevWcI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-groupby-and-shuffle-partitions---part-1"},"Spark groupBy and Shuffle Partitions - Part 1"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XKK4DIIUkeo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-groupby-and-shuffle-partitions---part-2"},"Spark groupBy and Shuffle Partitions - Part 2"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kamn0HUnosw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-repartitions---part-1"},"Spark Repartitions - Part 1"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eJlFlVbRIPI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-repartitions---part-2"},"Spark Repartitions - Part 2"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6u8k4gfDYmY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-program-on-the-cluster---detailed-explanation"},"Spark Program on the cluster - detailed explanation"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UjAonolAYgU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-partitionby"},"Spark PartitionBy"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YZEel_twezA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-bucketby"},"Spark BucketBy"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LT8TUMbZvoo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-submit---part-1"},"Spark Submit - Part 1"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/52BVRpcv85A",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-submit---part-2"},"Spark Submit - Part 2"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/W-_WtKQ4kL8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-submit---part-3"},"Spark Submit - Part 3"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iA0V-zZ38QQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-structured-streaming---introduction"},"Spark Structured Streaming - Introduction"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4X5rRI4M_II",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-structured-streaming---example-1"},"Spark Structured Streaming - Example 1"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/HdoBE2EhvIQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-structured-streaming---example-2"},"Spark Structured Streaming - Example 2"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/J2s8k40X2GA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-structured-streaming---example-3"},"Spark Structured Streaming - Example 3"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/F5XzssAX8UI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-caching---introduction"},"Spark Caching - Introduction"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Lecq2uhQrTM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-caching---example-1"},"Spark Caching - Example 1"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Qjvl0j3Bcns",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-caching---example-2"},"Spark Caching - Example 2"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/huD72RkWA24",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"spark-caching---example-3"},"Spark Caching - Example 3"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/7A6cOKoadME",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JiZPOYYBZ0U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))))}d.isMDXComponent=!0}}]);