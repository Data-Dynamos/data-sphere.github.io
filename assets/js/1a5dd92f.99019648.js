"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5537],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>m});var i=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,i,n=function(t,a){if(null==t)return{};var e,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=i.createContext({}),u=function(t){var a=i.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=u(t.components);return i.createElement(s.Provider,{value:a},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return i.createElement(i.Fragment,{},a)}},b=i.forwardRef((function(t,a){var e=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(e),b=n,m=c["".concat(s,".").concat(b)]||c[b]||d[b]||r;return e?i.createElement(m,o(o({ref:a},p),{},{components:e})):i.createElement(m,o({ref:a},p))}));function m(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var r=e.length,o=new Array(r);o[0]=b;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=t,l[c]="string"==typeof t?t:n,o[1]=l;for(var u=2;u<r;u++)o[u]=e[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}b.displayName="MDXCreateElement"},3872:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=e(7462),n=(e(7294),e(3905));const r={sidebar_position:2},o="Visualization Tools",l={unversionedId:"data-visualisation/visualization-tools",id:"data-visualisation/visualization-tools",title:"Visualization Tools",description:"Plotting and Visualization Libraries",source:"@site/docs/data-visualisation/visualization-tools.md",sourceDirName:"data-visualisation",slug:"/data-visualisation/visualization-tools",permalink:"/data-sphere.github.io/docs/data-visualisation/visualization-tools",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-visualisation/visualization-tools.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Understanding Your Data",permalink:"/data-sphere.github.io/docs/data-visualisation/understanding-your-data"},next:{title:"Exercise",permalink:"/data-sphere.github.io/docs/data-visualisation/exercise"}},s={},u=[{value:"Plotting and Visualization Libraries",id:"plotting-and-visualization-libraries",level:2},{value:"Analytics and Visualization Dashboards",id:"analytics-and-visualization-dashboards",level:2},{value:"Analytical web apps (for data science)",id:"analytical-web-apps-for-data-science",level:2}],p={toc:u},c="wrapper";function d(t){let{components:a,...e}=t;return(0,n.kt)(c,(0,i.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visualization-tools"},"Visualization Tools"),(0,n.kt)("h2",{id:"plotting-and-visualization-libraries"},"Plotting and Visualization Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://matplotlib.org/"},"Matplotlib")," Visualization library in python"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seaborn.pydata.org/"},"Seaborn")," statistical data Visualization in python built upon matplotlib"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://plotly.com/graphing-libraries/"},"Plotly"),": build beautiful interactive visualizations without needing loads and loads of Javascript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://plotly.com/python/plotly-express/"},"Plotly Express"),": build beautiful interactive visualizations in literally a few lines!")),(0,n.kt)("h2",{id:"analytics-and-visualization-dashboards"},"Analytics and Visualization Dashboards"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tableau.com/"},"Tableau")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://powerbi.microsoft.com/en-au/"},"Microsoft Power BI"))),(0,n.kt)("h2",{id:"analytical-web-apps-for-data-science"},"Analytical web apps (for data science)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dash-gallery.plotly.host/Portal/"},"Dash")," building dashboards and data apps in python (uses plotly)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://streamlit.io/"},"streamlit")," build interactive data apps in python"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://anvil.works/learn/tutorials"},"anvil")," build powerful web apps in python"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shiny.rstudio.com/"},"shiny")," interactive web apps in R")))}d.isMDXComponent=!0}}]);