import e,{memo as r}from"react";import t from"@anymod/core";import n from"@userfront/core";const o=function(){try{return s.isScript1Loading?Promise.resolve():Promise.resolve(l()).then(function(e){return Promise.resolve(m(e)).then(function(e){return Promise.resolve(i(e)).then(function(){u(),p()})})})}catch(e){return Promise.reject(e)}},{Singleton:s,alias:c,render:a,processPage:i,addScript1ToDocument:d,createOrReturnPage:l,checkPageAndUpdate:m,executeCallbacks:u,logErrorsAndTips:p}=t,{registerUrlChangedEventListener:f,addInitCallback:g}=n;c.setAlias("Userfront"),s.Opts.api=!0,g(({tenantId:e})=>{s.External.project=e,d("https://mod.userfront.com/v3/page/",e,o)}),f(),window.addEventListener("urlchanged",a);const P={build({toolId:t}){class n extends e.Component{componentDidMount(){!function(){try{try{o()}catch(e){console.warn(e&&e.message?e.message:"Problem loading page",e)}Promise.resolve()}catch(e){return Promise.reject(e)}}()}render(){return e.createElement("div",null,e.createElement("div",{id:"userfront-"+t}))}}return r(n)}};for(const e in n)P[e]||(P[e]=n[e]);export default P;
//# sourceMappingURL=userfront-react.module.js.map
