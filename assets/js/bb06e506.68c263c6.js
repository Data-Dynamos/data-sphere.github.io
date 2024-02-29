"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[1699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="Streamlit Local Setup",o={unversionedId:"data-visualisation/Streamlit/Local-setup",id:"data-visualisation/Streamlit/Local-setup",title:"Streamlit Local Setup",description:"There are two ways to setup and run the code in this repository:",source:"@site/docs/data-visualisation/Streamlit/Local-setup.mdx",sourceDirName:"data-visualisation/Streamlit",slug:"/data-visualisation/Streamlit/Local-setup",permalink:"/docs/data-visualisation/Streamlit/Local-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-visualisation/Streamlit/Local-setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Streamlit: Simplifying Data Visualization",permalink:"/docs/data-visualisation/Streamlit/intro-streamlit"},next:{title:"Problem Statement \ud83e\udd89",permalink:"/docs/data-visualisation/Streamlit/Problem-statement"}},s={},u=[{value:"Setup Directly on the Machine",id:"setup-directly-on-the-machine",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Pyenv v2.3.22",id:"install-pyenv-v2322",level:4},{value:"Load pyenv automatically",id:"load-pyenv-automatically",level:5},{value:"For bash",id:"for-bash",level:6},{value:"For Zsh",id:"for-zsh",level:6},{value:"Install Python 3.8.16",id:"install-python-3816",level:4},{value:"Install Poetry 1.5.1",id:"install-poetry-151",level:4},{value:"Add Poetry bin directory to PATH",id:"add-poetry-bin-directory-to-path",level:5},{value:"For bash:",id:"for-bash-1",level:6},{value:"For Zsh:",id:"for-zsh-1",level:6},{value:"Usage",id:"usage",level:3},{value:"Create virtualenv and Install Dependencies",id:"create-virtualenv-and-install-dependencies",level:4},{value:"Data Visualizations",id:"data-visualizations",level:4},{value:"Setup Using Docker",id:"setup-using-docker",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Data Transformations",id:"data-transformations",level:4},{value:"Data Visualizations",id:"data-visualizations-1",level:4},{value:"Reference",id:"reference",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"streamlit-local-setup"},"Streamlit Local Setup"),(0,r.kt)("p",null,"There are two ways to setup and run the code in this repository:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#setup-directly-on-the-machine"},"Setup Directly on the Machine"),": Install all the Software directly on your machine and run the code."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#setup-using-docker"},"Setup Using Docker"),": Use a pre-built Docker image containing all the Software already and run the code inside Docker container.")),(0,r.kt)("h2",{id:"setup-directly-on-the-machine"},"Setup Directly on the Machine"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pyenv"),(0,r.kt)("li",{parentName:"ul"},"Python"),(0,r.kt)("li",{parentName:"ul"},"Poetry")),(0,r.kt)("h4",{id:"install-pyenv-v2322"},"Install Pyenv v2.3.22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://pyenv.run | PYENV_GIT_TAG=v2.3.22 bash\n")),(0,r.kt)("h5",{id:"load-pyenv-automatically"},"Load pyenv automatically"),(0,r.kt)("h6",{id:"for-bash"},"For bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'export PYENV_ROOT="$HOME/.pyenv"\' >> ~/.bashrc\necho \'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\' >> ~/.bashrc\necho \'eval "$(pyenv init -)"\' >> ~/.bashrc\nexec "$SHELL"\n')),(0,r.kt)("h6",{id:"for-zsh"},"For Zsh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'export PYENV_ROOT="$HOME/.pyenv"\' >> ~/.zshrc\necho \'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\' >> ~/.zshrc\necho \'eval "$(pyenv init -)"\' >> ~/.zshrc\nexec "$SHELL"\n')),(0,r.kt)("p",null,"If you are using shells other than bash or Zsh refer: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv"},"https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv")),(0,r.kt)("h4",{id:"install-python-3816"},"Install Python 3.8.16"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pyenv --version\npyenv install 3.8.16\npyenv versions # should list Python 3.8.16 version\n")),(0,r.kt)("h4",{id:"install-poetry-151"},"Install Poetry 1.5.1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://install.python-poetry.org | POETRY_VERSION=1.5.1 python3 -\n")),(0,r.kt)("h5",{id:"add-poetry-bin-directory-to-path"},"Add Poetry bin directory to PATH"),(0,r.kt)("h6",{id:"for-bash-1"},"For bash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'export PATH="$HOME/.local/bin/:$PATH"\' >> ~/.bashrc\nexec "$SHELL"\n')),(0,r.kt)("h6",{id:"for-zsh-1"},"For Zsh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'export PATH="$HOME/.local/bin/:$PATH"\' >> ~/.zshrc\nexec "$SHELL"\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("h4",{id:"create-virtualenv-and-install-dependencies"},"Create virtualenv and Install Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# setup virtualenv and install the dependencies\npoetry install\n\n# run a command inside the virtualenv\npoetry run dbt --version\n\n# start a virtualenv shell and run commands inside it\npoetry shell\ndbt --version\n\n# install dbt packages\ncd data_transformation\ndbt deps\n")),(0,r.kt)("h4",{id:"data-visualizations"},"Data Visualizations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"poetry shell\n\nexport SNOWFLAKE_ACCOUNT='<your-snowflake-account-name>'\nexport SNOWFLAKE_DATABASE='<your-database-name>'\nexport SNOWFLAKE_USER='<your-user-name>'\nexport SNOWFLAKE_PASSWORD='<your-password>'\n\ncd data_visualization\nstreamlit run DataDynamos.py # should be able to access the UI\n")),(0,r.kt)("h2",{id:"setup-using-docker"},"Setup Using Docker"),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker \ud83d\udc33")),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The code will be mounted inside the container so whatever changes you make in your local machine will be synced to the container.")),(0,r.kt)("h4",{id:"data-transformations"},"Data Transformations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it -v $PWD:/opt/data_dynamos_exercise quay.io/data-dynamos/data_dynamos_exercise bash\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the code inside the container")),(0,r.kt)("h4",{id:"data-visualizations-1"},"Data Visualizations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it -v $PWD:/opt/data_dynamos_exercise quay.io/data-dynamos/data_dynamos_exercise -p 8501:8501 bash\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the code inside the container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export SNOWFLAKE_ACCOUNT='<your-snowflake-account-name>'\nexport SNOWFLAKE_DATABASE='<your-database-name>'\nexport SNOWFLAKE_USER='<your-user-name>'\nexport SNOWFLAKE_PASSWORD='<your-password>'\n\ncd data_visualization\nstreamlit run DataDynamos.py # should be able to access the UI\n")),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Follow this Instruction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.streamlit.io/library/get-started/installation"},"https://docs.streamlit.io/library/get-started/installation")),(0,r.kt)("h1",{id:"connect-streamlit-to-snowflake"},"Connect Streamlit to Snowflake"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SgWxkAdjK78",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"Link:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.streamlit.io/knowledge-base/tutorials/databases/snowflake"},"https://docs.streamlit.io/knowledge-base/tutorials/databases/snowflake")))}d.isMDXComponent=!0}}]);