"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5031],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9736:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8,minutesToComplete:10,authors:["kmok"]},o="Data Testing",s={unversionedId:"batch-processing/data-testing",id:"batch-processing/data-testing",title:"Data Testing",description:"By now, you might have been acutely aware that there were a number of tests used throughout the previous exercises. They took the shape of either a (1) unit test or (2) an E2E (end-to-end) test. Just like traditional software development, there is a time and place to use either of those tests and it increases the readability and accountability of the transformations and additionally aids your colleagues (or yourself!) in future months to understand what had been implemented in the past (and ensures that existing functionality is not broken).",source:"@site/docs/batch-processing/data-testing.mdx",sourceDirName:"batch-processing",slug:"/batch-processing/data-testing",permalink:"/data-sphere.github.io/docs/batch-processing/data-testing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/batch-processing/data-testing.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,minutesToComplete:10,authors:["kmok"]},sidebar:"tutorialSidebar",previous:{title:"ETL vs ELT",permalink:"/data-sphere.github.io/docs/batch-processing/etl-vs-elt"},next:{title:"Want to learn more about the Spark UI? (Bonus)",permalink:"/data-sphere.github.io/docs/batch-processing/learn-more-about-the-spark-ui"}},l={},u=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"E2E Tests",id:"e2e-tests",level:2},{value:"Advanced Topics (Bonus)",id:"advanced-topics-bonus",level:2},{value:"Shift Left Testing: Building Reliable Pipelines",id:"shift-left-testing-building-reliable-pipelines",level:3},{value:"Building reliable data pipelines without access to real data",id:"building-reliable-data-pipelines-without-access-to-real-data",level:3}],c={toc:u},d="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-testing"},"Data Testing"),(0,r.kt)("p",null,"By now, you might have been acutely aware that there were a number of tests used throughout the previous exercises. They took the shape of either a (1) ",(0,r.kt)("strong",{parentName:"p"},"unit test")," or (2) an ",(0,r.kt)("strong",{parentName:"p"},"E2E (end-to-end) test"),". Just like traditional software development, there is a time and place to use either of those tests and it increases the readability and accountability of the transformations and additionally aids your colleagues (or yourself!) in future months to understand what had been implemented in the past (and ensures that existing functionality is not broken). "),(0,r.kt)("p",null,"We often use both to ensure the full functionality of a data application. Unit Tests verify the behaviour of a small piece of code, making deliberate assumptions the starting shape of data, whereas E2E Tests often test a flow from the start to finish to ensure that the individual pieces, when put together, result in the expected behaviour. Per the ",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/practical-test-pyramid.html"},"testing pyramid"),", there are often many more unit tests than E2E tests (E2E tests are more expensive and slower to run)."),(0,r.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"Take for example the following transformation code. It first filters a DataFrame on action and message type, unpacks a json string into json, selects/drops certain columns, and then casts a timestamp column (type String) into a timestamp type. For explanatory purposes, this is not too complex, but it has a variety of behaviours."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'input_df.filter((input_df.action == "StartTransaction") & (input_df.message_type == 2))\n.withColumn("new_body",from_json(col("body"), StructType([\n        StructField("connector_id", IntegerType(), True),\n        StructField("id_tag", StringType(), True),\n        StructField("meter_start", IntegerType(), True),\n        StructField("timestamp", StringType(), True),\n        StructField("reservation_id", IntegerType(), True),\n    ])\n)). \\\nwithColumn("connector_id", input_df.new_body.connector_id). \\\nwithColumn("id_tag", input_df.new_body.id_tag). \\\nwithColumn("meter_start", input_df.new_body.meter_start). \\\nwithColumn("timestamp", input_df.new_body.timestamp). \\\nwithColumn("reservation_id", input_df.new_body.reservation_id). \\\ndrop("new_body"). \\\ndrop("body"). \\\nwithColumn("timestamp", to_timestamp(col("timestamp")))\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Would you be able to write a 1 simple unit test that tests the entirety of this logic?")),(0,r.kt)("p",null,"If you answered no, you're correct. While you could hypothetically write a single unit test, it would be terribly long, would miss edge cases, and it would be a nightmare to debug. The more ideal approach would be to write a variety of unit tests that would further improve future development by breaking up the logic. By doing this, it ensures that when new transformations are added, it would be easy to understand what it does (self-describing function name) and to debug when something has gone wrong."),(0,r.kt)("p",null,"We would need to break down this logic into several testable parts. For example, we'll first extract the filtering logic into its own function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'def filter_by_start_transaction_and_request(input_df: DataFrame) -> DataFrame:\n    return input_df.filter((input_df.action == "StartTransaction") & (input_df.message_type == 2))\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that the input AND output are both DataFrames.  ")),(0,r.kt)("p",null,"A unit test provides a mock of the incoming data and tests ONLY that the expected data is returned, namely the number of resulting records and the values of significant columns."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The following test is written in the format that is used in the previously-used Databricks exercises which might look different than invocations from testing frameworks like Pytest.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import pandas as pd\nfrom typing import Callable\nfrom pyspark.sql.types import StructType, StructField, StringType, IntegerType\n\ndef test_filter_by_start_transaction_and_request_unit(spark, f: Callable):\n    input_pandas = pd.DataFrame([\n        {\n            "action": "StartTransaction",\n            "message_type": 2,\n            "charge_point_id": "123"\n        },\n        {\n            "action": "StartTransaction",\n            "message_type": 3,\n            "charge_point_id": "123"\n        },\n    ])\n\n    input_df = spark.createDataFrame(\n        input_pandas,\n        StructType([\n            StructField("action", StringType()),\n            StructField("message_type", IntegerType()),\n            StructField("charge_point_id", StringType()),\n        ])\n    )\n\n    result = input_df.transform(f)\n    print("Transformed DF")\n    result.show()\n\n    result_count = result.count()\n    expected_count = 1\n    assert result_count == expected_count, f"Expected {expected_count}, but got {result_count}"\n\n    result_data = [(x.action, x.message_type) for x in result.collect()]\n    expected_data = [("StartTransaction", 2)]\n    assert result_data == expected_data, f"Expected {expected_data}, but got {result_data}"\n\n    print("All tests pass! :)")\n    \ntest_filter_by_start_transaction_and_request_unit(spark, filter_by_start_transaction_and_request)  \n#=> ^^^ This call could be replaced by a testing framework, such as Pytest.\n')),(0,r.kt)("p",null,"In our production code, we can call our custom function via the ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.4.0/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.transform.html"},"transform function"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df.transform(filter_by_start_transaction_and_request)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.4.0/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.transform.html"},"transform function")," is powerful in that it allows us to chain custom Dataframe functions (which are in turn, independent and testable)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df.transform(filter_by_start_transaction_and_request).transform(some_other_awesome_function)\n")),(0,r.kt)("p",null,"We would then proceed with testing the remainder of the logic in a similar fashion. "),(0,r.kt)("h2",{id:"e2e-tests"},"E2E Tests"),(0,r.kt)("p",null,"An E2E works similarly but we test the output of the entire transformation journey, from the start to a designated target/end, instead of a single transformation function (as we did with Unit Tests). There are two important aspects that differentiate E2E tests from Unit tests:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"E2E tests make an assertion on the output of data based on multiple functions called together, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"df.transform(filter_by_start_transaction_and_request).transform(some_other_awesome_function)"),", as opposed to unit tests which test a single function"),(0,r.kt)("li",{parentName:"ol"},'In order to test the "full journey", including all functions transformations, the dataset under test might need to be more comprehensive and shaped closer to production data to capture nuances, as opposed to unit test data which heavily mocks data to truly test one aspect of the logic.')),(0,r.kt)("p",null,"For E2E tests, some Data Engineers sometimes choose to use real production data which is dangerous because it could contain confidential and personal information (which gets checked into version control). On the other hand, testing data that is only somewhat production-like could result in inaccurate or missing logic due to the nuances in production data. The sensible to default is to first truly understand the data and its nature and create a representation of data that is production-like and contains such nuances. Sometimes, it takes time to construct a representation of production data as the longer you work with the data, the more you learn about it. This is still magnitudes better practice (and safer!) than using real production data for your E2E tests. "),(0,r.kt)("p",null,"Let's say we'd like to test the journey, with our E2E data under test stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"df"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df.transform(filter_by_start_transaction_and_request).transform(some_other_awesome_function)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The following test is written in the format that is used in the previously-used Databricks exercises which might look different than invocations from testing frameworks like Pytest.")),(0,r.kt)("p",null,"Our E2E test might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'def test_e2e(result_df: DataFrame):\n    result_count = result_df.count()\n    expected_count = 2599\n    assert result_count == expected_count, f"Expected {expected_count}, but got {result_count}"\n\n    result_action = [x.action for x in result_df.select("action").distinct().collect()]\n    expected_action = ["StartTransaction"]\n    assert result_action == expected_action, f"Expected {expected_action}, but got {result_action}"\n\n    result_message_type = [x.message_type for x in result_df.select("message_type").distinct().collect()]\n    expected_message_type = [2]\n    assert result_message_type == expected_message_type, f"Expected {expected_message_type}, but got {result_message_type}"\n\n    print("All tests pass! :)")\n\ntest_e2e(df.transform(filter_by_start_transaction_and_request).transform(some_other_awesome_function))  \n#=> ^^^ This call could be replaced by a testing framework, such as Pytest.\n')),(0,r.kt)("p",null,"Our E2E test takes the full transformation of our production-like dataset and validates the expected count and expected significant values in the DataFrame (similar to the Unit Test, with the only difference that the Unit test uses mocked data, devoid of most other columns). Because E2E tests are often expensive (time and compute) to run, these are often used sparingly. In the previous exercises, we ran E2E tests after every function definition and Unit Test for the benefit of learning, but in reality, we might abstain from running it at that level of frequency. "),(0,r.kt)("h2",{id:"advanced-topics-bonus"},"Advanced Topics (Bonus)"),(0,r.kt)("h3",{id:"shift-left-testing-building-reliable-pipelines"},"Shift Left Testing: Building Reliable Pipelines"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("figure",{class:"video-container"},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/MR50CEFqZZo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})),(0,r.kt)("p",null,"Read (optional): ",(0,r.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/en-de/insights/blog/testing/get-back-to-basics-with-testing-data-pipelines-two-orthogonal-planes"},"Get back to basics with testing data pipelines: two orthogonal planes"))),(0,r.kt)("h3",{id:"building-reliable-data-pipelines-without-access-to-real-data"},"Building reliable data pipelines without access to real data"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("figure",{class:"video-container"},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kr9kWB2aJNM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}))))}p.isMDXComponent=!0}}]);