"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[4090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,authors:["syed","kmok"],minutesToComplete:15},s="Intro to Streaming",o={unversionedId:"beyond-the-batch/intro-to-streaming",id:"beyond-the-batch/intro-to-streaming",title:"Intro to Streaming",description:"What we have seen until now was only Spark SQL API which deals with batch use cases (scenarios where we deal with high volume, scheduled, high volume and repetitive jobs). Spark also has an API for streaming (i.e data in motion) use cases, called the Spark Structured Streaming API. Before we jump into the specifics of this API and see what it looks like, let us first understand why we do streaming, as in, what are the use cases which tells us that we have a streaming problem on hand.",source:"@site/docs/beyond-the-batch/intro-to-streaming.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/intro-to-streaming",permalink:"/data-sphere.github.io/docs/beyond-the-batch/intro-to-streaming",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/beyond-the-batch/intro-to-streaming.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,authors:["syed","kmok"],minutesToComplete:15},sidebar:"tutorialSidebar",previous:{title:"Exercise 5",permalink:"/data-sphere.github.io/docs/data-visualisation/Streamlit/Excercise-5"},next:{title:"Spark Structured Streaming",permalink:"/data-sphere.github.io/docs/beyond-the-batch/spark-structured-streaming"}},l={},c=[{value:"Streaming Use Cases",id:"streaming-use-cases",level:2},{value:"Streaming Concepts",id:"streaming-concepts",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro-to-streaming"},"Intro to Streaming"),(0,r.kt)("p",null,"What we have seen until now was only Spark SQL API which deals with batch use cases (scenarios where we deal with high volume, scheduled, high volume and repetitive jobs). Spark also has an API for streaming (i.e data in motion) use cases, called the Spark Structured Streaming API. Before we jump into the specifics of this API and see what it looks like, let us first understand why we do streaming, as in, what are the use cases which tells us that we have a streaming problem on hand."),(0,r.kt)("h2",{id:"streaming-use-cases"},"Streaming Use Cases"),(0,r.kt)("p",null,"Some of the key characteristics of streaming use cases would be when data under consideration is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"required to be delivered in real-time or near real-time"),(0,r.kt)("li",{parentName:"ol"},"unbounded and continuous"),(0,r.kt)("li",{parentName:"ol"},"ephemeral and not replayable")),(0,r.kt)("p",null,"There are many use cases across many domains where streaming applications are useful. The following are some of the scenarios for streaming use cases :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Fraud Detection")," - Industries across the globe collectively lose trillions of dollars in revenue annually due to fraud, and it is only getting worse as fraudsters become increasingly sophisticated. Stream processing frameworks here can minimize cases of fraud by processing and analysing real-time streams of records, recognising patterns, uncovering suspicious transactions and creating predictive and timely alerts for possible fraud."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Log Analysis")," - With log analysis, streaming frameworks can analyze the network logs in real time to detect anomalies and incidents before it affects the user. For e.g, log analysis of routers in real time can tell us about any suspicious activity and take preventive measures before it is too late."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Online Advertising")," - e-commerce and social network applications track user behaviour, clicks and interests in real time using streaming systems. These systems then promote personalized ad campaigns which the users might be interested in, in an expectation of increased revenues.")),(0,r.kt)("p",null,"Details of the above scenarios and a few others can be seen ",(0,r.kt)("a",{parentName:"p",href:"https://datastorageasean.com/blogs/5-use-cases-stream-processing-demonstrate-its-business-value-0"},"here")),(0,r.kt)("h2",{id:"streaming-concepts"},"Streaming Concepts"),(0,r.kt)("p",null,"Let us now shed some light on what streaming actually looks like. To start with, we will need to understand concepts like Data Streams, Streaming Systems and types of these systems."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Stream")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A data stream is the transmission of a sequence of digitally encoded signals to convey information. Typically, the transmitted symbols are grouped into a series of packets.\n-- ",(0,r.kt)("cite",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_stream"},"wiki")))),(0,r.kt)("p",null,"Such data streams are often created on a real-time or near real-time basis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Streaming System")),(0,r.kt)("p",null,"A Streaming system computes data directly as it is produced or received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Types of Streaming Systems")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Stateless")," - processing stream of events without maintaining any state or knowledge of previous events. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Events from an IOT device where each event is individually processed "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Stateful"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"processing stream of events and maintaining state or knowledge of previous events. "),(0,r.kt)("li",{parentName:"ul"},"Examples:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Number of users using the application at given point of time (This is super critical for OTT applications like netflix where password sharing is quite common and the application would want to restrict it)"),(0,r.kt)("li",{parentName:"ul"},"The volumes of a particular product (an iphone, ipad etc.) sold in a particular time interval like an hour for an e-commerce application, requiring real-time analytics and aggregation.")))))))}p.isMDXComponent=!0}}]);