"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5145],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,d=u["".concat(o,".").concat(m)]||u[m]||h[m]||p;return t?r.createElement(d,i(i({ref:a},l),{},{components:t})):r.createElement(d,i({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5956:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const p={sidebar_position:30,minutesToComplete:5,authors:["kmok"]},i="Additional Spark Functions (Bonus)",s={unversionedId:"batch-processing/exercise-additional-spark-functions",id:"batch-processing/exercise-additional-spark-functions",title:"Additional Spark Functions (Bonus)",description:"There are quite a few more Spark functions that haven't been covered in the previous exercises. Have a quick browse (this is more of an FYI), just to get familiarised with it:",source:"@site/docs/batch-processing/exercise-additional-spark-functions.md",sourceDirName:"batch-processing",slug:"/batch-processing/exercise-additional-spark-functions",permalink:"/data-sphere.github.io/docs/batch-processing/exercise-additional-spark-functions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/batch-processing/exercise-additional-spark-functions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,minutesToComplete:5,authors:["kmok"]},sidebar:"tutorialSidebar",previous:{title:"Vanilla Spark on your Local Machine (Bonus)",permalink:"/data-sphere.github.io/docs/batch-processing/demo-vanilla-spark"},next:{title:"Spark Advanced Topics (Bonus)",permalink:"/data-sphere.github.io/docs/batch-processing/spark-advanced-topics"}},o={},c=[{value:"More Advanced Functions",id:"more-advanced-functions",level:2}],l={toc:c},u="wrapper";function h(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"additional-spark-functions-bonus"},"Additional Spark Functions (Bonus)"),(0,n.kt)("p",null,"There are quite a few more Spark functions that haven't been covered in the previous exercises. Have a quick browse (this is more of an FYI), just to get familiarised with it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.DataFrame.dropna.html"},"na.drop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.DataFrameNaFunctions.fill.html"},"na.fill")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.DataFrame.replace.html"},"replace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.functions.array_contains.html"},"array_contains")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.functions.to_date.html"},"to_date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.2.1/api/python/reference/api/pyspark.sql.functions.stddev.html"},"stddev")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.variance.html"},"variance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.1/api/python/reference/api/pyspark.sql.functions.mean.html"},"mean")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.1/api/python/reference/api/pyspark.sql.functions.regexp_replace.html"},"regexp_replace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.functions.regexp_extract.html"},"regexp_extract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.1/api/python/reference/api/pyspark.sql.functions.coalesce.html"},"coalesce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.3/api/python/reference/api/pyspark.sql.functions.udf.html"},"UDF"))),(0,n.kt)("h2",{id:"more-advanced-functions"},"More Advanced Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.2.0/api/python/reference/pyspark.pandas/api/pyspark.pandas.DataFrame.spark.cache.html"},"cache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.unpersist.html"},"unpersist")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.2/api/python/reference/api/pyspark.sql.DataFrame.createOrReplaceGlobalTempView.html"},"createOrReplaceGlobalTempView")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.1.3/api/python/reference/api/pyspark.sql.DataFrame.createOrReplaceTempView.html"},"createOrReplaceTempView"))))}h.isMDXComponent=!0}}]);