"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[4356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,u=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(u,r(r({ref:t},h),{},{components:n})):a.createElement(u,r({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,minutesToComplete:40},r="Problem Statement \ud83d\udca1",s={unversionedId:"Real-time-Problem-Statement/Problem-statement",id:"Real-time-Problem-Statement/Problem-statement",title:"Problem Statement \ud83d\udca1",description:"Now that we've covered the theory behind Data Engineering, we'll spend the next few sections putting that to practice in the context of a domain. We'll do that by asking some relevant domain questions, walking through the data processing steps and architectures required to answer those questions, and then implementing them in exercises for the rest of the training.",source:"@site/docs/Real-time-Problem-Statement/Problem-statement.mdx",sourceDirName:"Real-time-Problem-Statement",slug:"/Real-time-Problem-Statement/Problem-statement",permalink:"/data-sphere.github.io/docs/Real-time-Problem-Statement/Problem-statement",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Real-time-Problem-Statement/Problem-statement.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,minutesToComplete:40},sidebar:"tutorialSidebar",previous:{title:"Data Formats",permalink:"/data-sphere.github.io/docs/The-Art-of-Data-Engineering:Crafting-Robust-and-Scalable-Solutions/data-formats"},next:{title:"Exercise: Last Connection Time of Charge Points",permalink:"/data-sphere.github.io/docs/Real-time-Problem-Statement/exercise-last-connection-charge-points"}},l={},c=[{value:"Context",id:"context",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Some Core OCPP Actions and its Data",id:"some-core-ocpp-actions-and-its-data",level:2},{value:"Heartbeat Request",id:"heartbeat-request",level:3},{value:"Heartbeat Response",id:"heartbeat-response",level:3},{value:"BootNotification Request",id:"bootnotification-request",level:3},{value:"BootNotification Response",id:"bootnotification-response",level:3},{value:"MeterValues Request",id:"metervalues-request",level:3},{value:"MeterValues Response",id:"metervalues-response",level:3},{value:"StartTransaction Request",id:"starttransaction-request",level:3},{value:"StartTransaction Response",id:"starttransaction-response",level:3},{value:"StopTransaction Request",id:"stoptransaction-request",level:3},{value:"StopTransaction Response",id:"stoptransaction-response",level:3}],h={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"problem-statement-"},"Problem Statement \ud83d\udca1"),(0,o.kt)("p",null,"Now that we've covered the theory behind Data Engineering, we'll spend the next few sections putting that to practice in the context of a domain. We'll do that by asking some relevant domain questions, walking through the data processing steps and architectures required to answer those questions, and then implementing them in exercises for the rest of the training."),(0,o.kt)("p",null,"But first, a little more context about our domain..."),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,'In the time of climate change, the world is attempting to reduce its dependency on coal and gas (and thereby CO2 emissions) for energy by adopting green/renewable technologies. One of those technologies are Electric Vehicles (henceforth, "EVs" or "EV" ',"[singular]","). Governments have additionally announced bans on the sale of gasoline-powered vehicles, some effective in the next 15 years in order to reduce CO2 emissions, putting pressure of automobile companies to invest in the betterment of EV-technology to make it more widespread and accessible. Logistics and large city public transportation fleets are also becoming electrified and charging technology is becoming more widespread and efficient, allowing for an even larger spread of EVs. There are also a multitude of companies whose sole purpose is to coordinate the efforts of at-home Charger installations to make it even more convenient for the typical consumer, which also lays the groundwork for decentralised home energy management (leveraging bidirectional charging and home energy optimisers by way of home Photovoltaics and other energy generators). "),(0,o.kt)("p",null,"While the trend towards EVs seems optimistic, EVs aren't ","[yet]"," the hallmark of sustainability and socioeconomic equality: battery technology largely still uses precious minerals whose method of acquisition are questionable, EVs are expensive thereby making them only available to those who are wealthy enough to afford both the vehicle and access to an at-home charging station, and EV charging networks are more prolific in cities whose living costs are already relatively expensive. There are continued efforts to improve both aspects (sustainability, socioeconomic equality) and make it cheaper, more convenient, and accessible to the wider public which would even more reduce the dependency on oil and gas."),(0,o.kt)("p",null,"Charge Point Operators (CPOs), of which there are many, are responsible for installing Charge Points (Chargers) in strategic locations, maintaining security of the Charge Points, ensuring sufficient electricity flow and load management, managing reservations, handling bidirectional charging in compatible locations, and ensuring that charging an electric vehicle is a pleasant experience for the customer. There are four high-level components that a CPO might be concerned with in the space of Charge Management and optimisation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the Charge Point that dispenses electricity which contains its own hardware and software"),(0,o.kt)("li",{parentName:"ol"},"the Charging Station Management System (CSMS) with which the Charge Point communicates and interacts"),(0,o.kt)("li",{parentName:"ol"},"the charging data generated by the Charge Point"),(0,o.kt)("li",{parentName:"ol"},"intelligent solutions which offer cost-charging optimisations based on integrations with Photovoltaics and real-time and historic data on electricity usage in the vicinity")),(0,o.kt)("p",null,"The data collected by the CSMS is interesting for a variety of reasons. First, it offers drivers and fleet operators a view into their energy consumption and the ability to leverage scheduled/automated charging based on their own needs and charging patterns. Secondly, it offers some insight into charging behaviours which can feed into central electricity grids, allowing governments and electricity companies to better understand electricity consumption patterns and provide sufficient energy to these locations. Thirdly, as we slowly reduce our dependency on coal and gas, there could be interruptions of service from the electricity grid if there are spikes of demand which the grid cannot quickly compensate but a network of plugged-in EVs in a community can quickly resolve in the locality through bidirectional charging back to the grid and decentralised at-home energy generators. In order for these use-cases to become realised,  Charge Point data must be treated as a first-class citizen and architectures/technologies allowing for near-real time insights and recommendations will need to be chosen carefully."),(0,o.kt)("p",null,"In the next few sections, we'll talk about how the technology works, give an overview of the data that is generated by the Charge Point and sent to the CSMS, suggest some simple questions or insights that can be determined by the data, and describe some of the architectures that would be responsible for providing those insights in a timely manner. "),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"How it works, at a glance:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"EV plugs into a Charge Point"),(0,o.kt)("li",{parentName:"ol"},"Charge Point connects to and authenticates with a CSMS using Websockets and the OCPP Protocol"),(0,o.kt)("li",{parentName:"ol"},"The Charge Point sends a message to the CSMS according to the OCPP protocol"),(0,o.kt)("li",{parentName:"ol"},"The CSMS receives the message, processes/records it, and sends back a positive/negative response")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ev-charing_diagram.png",src:n(6225).Z,width:"872",height:"478"})),(0,o.kt)("p",null,"The OCPP Protocol is an open standard created by the Open Charge Alliance (OCA) as an effort to standardise communication and encourage interoperability. Both Charge Points (the actual devices) and CSMSs can be certified by the OCA as being compliant with the OCPP Protocol. Despite that, there seems to be some variation between implementations of both Charge Points and CSMSs which are the result of interpretations of OCPP. There is an official testing protocol on the path to certification - both testing and access to the User Acceptance Test (UAT) document provided as part of their OCTT (OCPP Testing Tool) require OCA membership and vetting by OCA. Every year, the OCA has an event called PlugFest where CSMS developers can come to a single place to test their implementations against various Charge Points."),(0,o.kt)("p",null,"The OCPP Protocol, at the time of writing have the following versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OCPP 1.5 - deemed out of date but many Charge Points still only support this (they're recommended to update to at least the next version)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.openchargealliance.org/protocols/ocpp-16/"},"OCPP 1.6")," - most widely implemented, supports both SOAP/JSON versions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.openchargealliance.org/protocols/ocpp-201/"},"OCPP 2.0.1")," - improvements made in security and smart charging, not all Charge Points and CSMS implement this but are encouraged to do so to stay competitive")),(0,o.kt)("p",null,"Staying true to versioning for APIs, version 2.0.1 is not backwards compatible with version 1.6, but they do have some core functionalities that they share."),(0,o.kt)("h2",{id:"some-core-ocpp-actions-and-its-data"},"Some Core OCPP Actions and its Data"),(0,o.kt)("p",null,"For every event that is generated by the Charge Point, the CSMS sends a response. The following are examples of raw OCPP data."),(0,o.kt)("h3",{id:"heartbeat-request"},"Heartbeat Request"),(0,o.kt)("p",null,"The Charge Point informs the CSMS it is still responsive. This is a configurable value on the Charge Point. If the Charge Point has not sent any other messages during that allotted time, it sends a Heartbeat to the CSMS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,o.kt)("h3",{id:"heartbeat-response"},"Heartbeat Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "current_time": "2023-01-01T09:00:00+00:00"\n}\n')),(0,o.kt)("h3",{id:"bootnotification-request"},"BootNotification Request"),(0,o.kt)("p",null,"Whenever a Charge Point boots/reboots, it sends a BootNotification message which lets the CSMS know what configuration it has. The CSMS sends back an ",(0,o.kt)("inlineCode",{parentName:"p"},"accepted")," response if all configuration values are suitable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "charge_point_model": "AwesomeModel",\n  "charge_point_vendor": "My Awesome Vendor"\n}\n')),(0,o.kt)("h3",{id:"bootnotification-response"},"BootNotification Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "current_time": "2023-01-01T09:00:00+00:00",\n  "interval": 300,\n  "registration_status": "Accepted"\n}\n')),(0,o.kt)("h3",{id:"metervalues-request"},"MeterValues Request"),(0,o.kt)("p",null,"Sampled readings from the energy meter/sensors to provide information about the amount of energy dispensed at a given time and connector. These readings are sampled while a Transaction is in progress."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "connector_id": 1,\n    "meter_value": [\n      {\n        "timestamp": "2022-01-01T08:00:06+00:00",\n        "sampled_value": [\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Voltage",\n            "phase": "L1-N",\n            "location": null,\n            "unit": "V"\n          },\n          {\n            "value": "7.21",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Current.Import",\n            "phase": "L1",\n            "location": null,\n            "unit": "A"\n          },\n          {\n            "value": "1400.77",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Power.Active.Import",\n            "phase": "L1",\n            "location": null,\n            "unit": "W"\n          },\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Voltage",\n            "phase": "L2-N",\n            "location": null,\n            "unit": "V"\n          },\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Current.Import",\n            "phase": "L2",\n            "location": null,\n            "unit": "A"\n          },\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Power.Active.Import",\n            "phase": "L2",\n            "location": null,\n            "unit": "W"\n          },\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Voltage",\n            "phase": "L3-N",\n            "location": null,\n            "unit": "V"\n          },\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Current.Import",\n            "phase": "L3",\n            "location": null,\n            "unit": "A"\n          },\n          {\n            "value": "0.0",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Power.Active.Import",\n            "phase": "L3",\n            "location": null,\n            "unit": "W"\n          },\n          {\n            "value": "1400.77",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Energy.Active.Import.Register",\n            "phase": null,\n            "location": null,\n            "unit": "Wh"\n          },\n          {\n            "value": "7.21",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Current.Import",\n            "phase": null,\n            "location": null,\n            "unit": "A"\n          },\n          {\n            "value": "1400.77",\n            "context": "Sample.Periodic",\n            "format": "Raw",\n            "measurand": "Power.Active.Import",\n            "phase": null,\n            "location": null,\n            "unit": "W"\n          }\n        ]\n      }\n    ],\n    "transaction_id": 1\n}\n')),(0,o.kt)("h3",{id:"metervalues-response"},"MeterValues Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{}\n")),(0,o.kt)("h3",{id:"starttransaction-request"},"StartTransaction Request"),(0,o.kt)("p",null,"The Charge Point informs the CSMS that a transaction has been started"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "connector_id": 1,\n    "id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",\n    "meter_start": 0,\n    "timestamp": "2022-01-01T08:00:00+00:00",\n    "reservation_id": null\n}\n\n')),(0,o.kt)("h3",{id:"starttransaction-response"},"StartTransaction Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "transaction_id": 1,\n    "id_tag_info": {\n      "status": "Accepted",\n      "parent_id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",\n      "expiry_date": null\n    }\n}\n')),(0,o.kt)("h3",{id:"stoptransaction-request"},"StopTransaction Request"),(0,o.kt)("p",null,"The Charge Point informs the CSMS that a transaction has been stopped"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meter_stop": 2780,\n    "timestamp": "2022-01-01T08:20:00+00:00",\n    "transaction_id": 1,\n    "reason": null,\n    "id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",\n    "transaction_data": null\n}\n')),(0,o.kt)("h3",{id:"stoptransaction-response"},"StopTransaction Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id_tag_info": {\n      "status": "Accepted",\n      "parent_id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",\n      "expiry_date": null\n    }\n}\n')))}m.isMDXComponent=!0},6225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ev-charing_diagram-42dfb5b8b0d134333955346172981bf8.png"}}]);