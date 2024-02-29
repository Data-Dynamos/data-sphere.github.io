"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[8959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,authors:["syed","kmok"],minutesToComplete:20},r="Checkpointing",s={unversionedId:"beyond-the-batch/checkpointing",id:"beyond-the-batch/checkpointing",title:"Checkpointing",description:"We now understand that stream processing applications in Spark run in an infinite loop of micro-batches. These applications run on a continuous basis on an unbounded set of real time data. We also know that any application in general cannot run for an infinite amount of time even if we want them to do that, for two practical reasons:",source:"@site/docs/beyond-the-batch/checkpointing.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/checkpointing",permalink:"/docs/beyond-the-batch/checkpointing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/beyond-the-batch/checkpointing.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,authors:["syed","kmok"],minutesToComplete:20},sidebar:"tutorialSidebar",previous:{title:"Stateful vs. Stateless Streaming",permalink:"/docs/beyond-the-batch/stateful-vs-stateless-streaming"},next:{title:"Handling Late Data",permalink:"/docs/beyond-the-batch/handling-late-data"}},c={},l=[{value:"Checkpointing Requirements",id:"checkpointing-requirements",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"checkpointing"},"Checkpointing"),(0,o.kt)("p",null,"We now understand that stream processing applications in Spark run in an infinite loop of micro-batches. These applications run on a continuous basis on an unbounded set of real time data. We also know that any application in general cannot run for an infinite amount of time even if we want them to do that, for two practical reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Applications often suffer system failures or cluster crashes."),(0,o.kt)("li",{parentName:"ol"},"Systems sometimes need to be brought down for periodic maintenance.")),(0,o.kt)("p",null,"This means that our applications need to be able to handle stoppages and when they do happen due to the aforementioned reasons, we would want them to recover gracefully. This is where checkpointing comes into picture."),(0,o.kt)("p",null,"Spark Checkpointing provides the ability to 'bookmark' a data stream when a streaming application stops and uses the bookmark to pick up where the application left off when the application is restarted. It accomplishes that by maintaining a checkpoint location either locally or remotely (more on local/remote bit in the later sections). Spark checkpoints comprise two key items :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Read position")," - the start and end date range of the current micro-batch."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"State information")," - the state that applications would want to maintain across micro-batches, when working with Stateful Streams")),(0,o.kt)("h2",{id:"checkpointing-requirements"},"Checkpointing Requirements"),(0,o.kt)("p",null,"Checkpoints in Spark can be leveraged to their full benefit if we fulfill the following requirements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reliably update the checkpoint location when new data has been processed (starting an application from an old location will result in duplicate data processing)"),(0,o.kt)("li",{parentName:"ol"},"Use a source (e.g. File Source, Kafka Source) from which data can be replayed (this is useful for incomplete data in a certain micro-batch)."),(0,o.kt)("li",{parentName:"ol"},"Processing logic is consistent and idempotent (the same result is obtained when given the same input data)")),(0,o.kt)("p",null,"Let us now look at an example of how checkpoints are actually created. We will use the same Stateful Streaming Wordcount code from previous sections","[hyperlink]"," and add checkpointing code to it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the writestream code of Stateful Streaming Wordcount example, add one more option to enable checkpoints when the program runs as shown below (make sure that you are giving a location somewhere in the user directory of your local machine as the other locations might not give the privilege to your program to create a directory and write data to it)\n",(0,o.kt)("img",{alt:"Checkpoint-Code.png",src:n(9942).Z,width:"2086",height:"504"})),(0,o.kt)("li",{parentName:"ol"},"Start a fresh terminal with netcat and start your program from pycharm as done in the previous sections. You should see the all familiar empty batch in the pycharm output. More importantly, you should be able to see the checkpoint folder created in the location given in your code above."),(0,o.kt)("li",{parentName:"ol"},"Send some data from your netcat terminal as before\n",(0,o.kt)("img",{alt:"Stateful-data1.png",src:n(7098).Z,width:"1776",height:"140"})),(0,o.kt)("li",{parentName:"ol"},"Like before, you should see this in your program\u2019s output\n",(0,o.kt)("img",{alt:"Stateful-Output1.png",src:n(8161).Z,width:"2032",height:"686"})),(0,o.kt)("li",{parentName:"ol"},"Stop and restart netcat and the PyCharm program. Your program should be able to read the previous data from the checkpoint and show the output in PyCharm."),(0,o.kt)("li",{parentName:"ol"},"Now try sending similar data with repeated words from the terminal\n",(0,o.kt)("img",{alt:"Stateful-data2.png",src:n(1836).Z,width:"1826",height:"178"})),(0,o.kt)("li",{parentName:"ol"},"You should see the usual stateful aggregation happening in the output as we saw in the previous section.")),(0,o.kt)("p",null,"Congratulations! You\u2019ve implemented a Spark streaming application that uses checkpoints! Your application is now resilient to restarts and can restart where it has left off."))}h.isMDXComponent=!0},9942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Checkpoint-Code-adcc9f3ac470b7872804ab6a282ce66f.png"},8161:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Stateful-Output1-bba4113b94bf1b97a8f2cd07b0bb8145.png"},7098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Stateful-data1-bafb3bfee6ad982f0028182d6509d0cd.png"},1836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Stateful-data2-4263b895b6c9a3e391af210fd065b607.png"}}]);