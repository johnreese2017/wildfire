!function(i){function e(I){if(t[I])return t[I].exports;var l=t[I]={i:I,l:!1,exports:{}};return i[I].call(l.exports,l,l.exports,e),l.l=!0,l.exports}var t={};e.m=i,e.c=t,e.i=function(i){return i},e.d=function(i,t,I){e.o(i,t)||Object.defineProperty(i,t,{configurable:!1,enumerable:!0,get:I})},e.n=function(i){var t=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(t,"a",t),t},e.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},e.p="",e(e.s=0)}([function(i,e){(()=>{function i(i){if(void 0===i||null===i)return;let e=null,t=null;"object"==typeof i?(e=i.url,t=i.loaded):"string"==typeof i&&(e=i);let I=document.createElement("link");I.rel="stylesheet",I.type="text/css",I.href=e,I.media="all",I.onload=(()=>{t&&t()}),document.head.appendChild(I)}function e(i,t){if(0===i.length)return void(t&&t());let I=i.shift(),l=document.createElement("script"),n=null,a=null,M=null;"object"==typeof I?(({url:n,shouldSkip:a,loaded:M}=I),a()?(M&&M(),e(i,t)):l.onload=(()=>{M&&M(),e(i,t)})):"string"==typeof I&&(n=I,l.onload=(()=>{e(i,t)})),l.src=n,document.head.appendChild(l)}function t(i){this.message=i,this.toString=(()=>this.message)}function I(){i(`https://unpkg.com/@chengkang/wildfire/dist/${n}/static/wildfire.css`);let t=[];window.Vue||t.push("https://unpkg.com/vue"),t.push("firebase"===n?"https://www.gstatic.com/firebasejs/4.6.2/firebase.js":"https://cdn.wilddog.com/sdk/js/2.5.17/wilddog.js"),t.push(`https://unpkg.com/@chengkang/wildfire/dist/${n}/wildfire.min.js`),e(t,()=>{window.wildfire.default.install(window.Vue,{databaseProvider:n,databaseConfig:a,pageURL:o,pageTitle:M,theme:d,locale:g}),new window.Vue({el:"#wildfire"})})}function l(i){const e=window._i18n.t(i);let t=document.getElementById("wf-loading-modal");t.className=`wf wf-theme-${d}`;let I=t.children[1];I.innerHTML=e,I.style.color="red"}const{databaseProvider:n,databaseConfig:a,pageTitle:M=document.title,pageURL:o=window.location.href,locale:g="en",theme:d="light"}=window.wildfireConfig();window._i18n=new function(i={},e=null,I="en"){return this.translation=i,this.locale=I,this.fallback=e,this.t=(i=>{let e=this.translation[this.locale];if(e||(e=this.translation[this.fallback]),!e)throw new t(`Translation for locale "${this.locale}" not found.`);const I=i.split(".");if(0===I.length)throw new t("Empty translation key.");for(let l=0;l<I.length;l++)if(!(e=e[I[l]]))return setTimeout(()=>{throw new t(`Translation for key "${i}" not found.`)}),i;return e}),{t:this.t}}({en:{error:{invalidDatabaseProvider:'Please check your config: "databaseProvider" should be "firebase" or "wilddog".',multipleWildfireThread:'"wildfire-thread" not found, please follow the steps in documentation.',noDatabaseConfig:'Please check your config: missing "databaseConfig"'},text:{poweringWildfire:"Powering Wildfire..."}},"zh-CN":{error:{invalidDatabaseProvider:'请检查你的配置： "databaseProvider" 应该为 "firebase" 或者 "wilddog"。',multipleWildfireThread:"未检测到 “wildfire-thread”，请依照文档所示步骤添加。",noDatabaseConfig:'请检查你的配置： 找不到 "databaseConfig"'},text:{poweringWildfire:"正在启动 Wildfire……"}}},"en",g),function(){const i=`.wildfire_thread{font-family:'Helvetica Neue',arial,sans-serif;width: 100%;margin:0 auto}[v-cloak]{display:none}#wf-loading-modal{font-size:12px;display:flex;flex-direction:column;height:300px;color:#656c7a;justify-content:center;align-items:center}#wf-loading-modal img{width:66px;height:66px}@keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-o-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-moz-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-webkit-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}.animate-flicker{-webkit-animation:flickerAnimation 1.5s infinite;-moz-animation:flickerAnimation 1.5s infinite;-o-animation:flickerAnimation 1.5s infinite;animation:flickerAnimation 1.5s infinite}`;let e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),document.head.appendChild(e),document.getElementsByClassName("wildfire_thread")[0].innerHTML=`\n      <div id="wf-loading-modal" class="wf wf-theme-${d} animate-flicker">\n        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjM1MXB4IiB2aWV3Qm94PSIwIDAgMjU2IDM1MSIgdmVyc2lvbj0iMS4xIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+DQogIDxkZWZzPg0KICAgIDxwYXRoIGQ9Ik0xLjI1MjczNDM3IDI4MC43MzE2NDFMMi44NTgzNDUzMyAyNzcuNjAwODU4IDEwMi4yMTExNzcgODkuMDgzMzU0NiA1OC4wNjEzMjY2IDUuNjA4MjAzM0M1NC4zOTIwMDExLTEuMjgzMDQ1NzggNDUuMDc0MTI0NSAwLjQ3MzY3NDM5OCA0My44Njk5MjAzIDguMTg3ODkwODZMMS4yNTI3MzQzNyAyODAuNzMxNjQxWiIgaWQ9InBhdGgtMSIgLz4NCiAgICA8ZmlsdGVyIHg9Ii01MCUiIHk9Ii01MCUiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4NCiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjE3LjUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dCbHVySW5uZXIxIiAvPg0KICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49InNoYWRvd0JsdXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIiAvPg0KICAgICAgPGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRJbm5lcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIiByZXN1bHQ9InNoYWRvd0lubmVySW5uZXIxIiAvPg0KICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMDYgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93SW5uZXJJbm5lcjEiIC8+DQogICAgPC9maWx0ZXI+DQogICAgPHBhdGggZD0iTTEzNC40MTcxMDMgMTQ4Ljk3NDIzNUwxNjYuNDU1NzIyIDExNi4xNjE3MzggMTM0LjQxNzEwNCA1NS4xNTQ2ODc0QzEzMS4zNzQ4MjggNDkuMzYzNTkxMSAxMjMuOTgzOTExIDQ4Ljc1NjgzNjIgMTIwLjk3MzgyOCA1NC41NjQ2NDgzTDEwMy4yNjg3NSA4OC42NzM4Mjk2IDEwMi43Mzk0MjMgOTAuNDE3NTQ3MyAxMzQuNDE3MTAzIDE0OC45NzQyMzVaIiBpZD0icGF0aC0zIiAvPg0KICAgIDxmaWx0ZXIgeD0iLTUwJSIgeT0iLTUwJSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTQiPg0KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMy41IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93Qmx1cklubmVyMSIgLz4NCiAgICAgIDxmZU9mZnNldCBkeD0iMSIgZHk9Ii05IiBpbj0ic2hhZG93Qmx1cklubmVyMSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRJbm5lcjEiIC8+DQogICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd09mZnNldElubmVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiIHJlc3VsdD0ic2hhZG93SW5uZXJJbm5lcjEiIC8+DQogICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4wOSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dJbm5lcklubmVyMSIgLz4NCiAgICA8L2ZpbHRlcj4NCiAgPC9kZWZzPg0KICA8cGF0aCBkPSJNMCAyODIuOTk3NjJMMi4xMjI1MDc0NiAyODAuMDI1NiAxMDIuNTI3MzYzIDg5LjUxMTkyODQgMTAyLjczOTQyMyA4Ny40OTUxMzIzIDU4LjQ3ODgwNiA0LjM1ODE3NzExQzU0Ljc3MDYyNjktMi42MDYwNDE3OSA0NC4zMzEzMDM1LTAuODQ1MjQ1NzcxIDQzLjExNDM0ODMgNi45NTA2NTQ3M0wwIDI4Mi45OTc2MloiIGZpbGw9IiNEQjQ1MEQiIC8+DQogIDx1c2UgZmlsbD0iI0RCNDUwRCIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIiAvPg0KICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiIC8+DQogIDx1c2UgZmlsbD0iI0RCNDUwRCIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0zIiAvPg0KICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNCkiIHhsaW5rOmhyZWY9IiNwYXRoLTMiIC8+DQogIDxwb2x5Z29uIGZpbGw9IiNCMTMxMDEiIHBvaW50cz0iMCAyODIuOTk3NjIgMC45NjIwOTcxNjggMjgyLjAzMDM5NiA0LjQ1NzcxMTQ0IDI4MC42MDk1NiAxMzIuOTM1MzIzIDE1Mi42MDk1NiAxMzQuNTYzMDI1IDE0OC4xNzg1OTUgMTAyLjUxMzEyMyA4Ny4xMDQ4NTg0IiAvPg0KICA8cGF0aCBkPSJNMTM5LjEyMDk3MSAzNDcuNTUxMjY4TDI1NS4zOTU5MTYgMjgyLjcwMzY2NiAyMjIuMTkxNjk4IDc4LjIwOTMzNzNDMjIxLjE1MzA1MSA3MS44MTEyNDc4IDIxMy4zMDM2NTggNjkuMjgxODE0OSAyMDguNzI0MzE0IDczLjg2OTQzNjhMMC4wMDAyNTQ3MjYzNjggMjgyLjk5Nzg3NSAxMTUuNjA4NDU0IDM0Ny41NDU1MzZDMTIyLjkxNDY0MyAzNTEuNjI0OTc5IDEzMS44MTI4NzIgMzUxLjYyNjg5IDEzOS4xMjA5NzEgMzQ3LjU1MTI2OE0yNTQuMzU0MDg0IDI4Mi4xNTk4MzdMMjIxLjQwMTkzNyA3OS4yMTc5MzY5QzIyMC4zNzExNzUgNzIuODY4NDE4OCAyMTMuODQzNzkyIDcwLjI0MDk1NTMgMjA5LjI5OTIxMyA3NC43OTM3NUwxLjI4OTQ1MzEyIDI4Mi42MDA3ODUgMTE1LjYyNzgyNSAzNDYuNTA5NDU4QzEyMi44Nzg1NDggMzUwLjU1NzkzMSAxMzEuNzA5MjI2IDM1MC41NTk4MjcgMTM4Ljk2MTg0NiAzNDYuNTE1MTQ2TDI1NC4zNTQwODQgMjgyLjE1OTgzN1oiIGZpbGw9IiNGMzZBMzgiIC8+DQo8L3N2Zz4=" title="Wildfire - Provided by Lahk">\n        <span>${window._i18n.t("text.poweringWildfire")}</span>\n      </div>\n      <div id="wildfire" v-cloak><wildfire></wildfire></div>\n      `}(),setTimeout(function(){0!==document.getElementsByClassName("wildfire_thread").length?"firebase"===n||"wilddog"===n?a?I():l("error.noDatabaseConfig"):l("error.invalidDatabaseProvider"):l("error.wildfireThreadNotFound")},1e3)})()}]);