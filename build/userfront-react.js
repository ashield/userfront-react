function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("react")),t=e(require("@anymod/core")),n=e(require("@userfront/core"));const o=function(){try{return c.isScript1Loading?Promise.resolve():Promise.resolve(d()).then(function(e){return Promise.resolve(l(e)).then(function(e){return Promise.resolve(a(e)).then(function(){m(),f()})})})}catch(e){return Promise.reject(e)}},{Singleton:c,alias:s,render:i,processPage:a,addScript1ToDocument:u,createOrReturnPage:d,checkPageAndUpdate:l,executeCallbacks:m,logErrorsAndTips:f}=t,{registerUrlChangedEventListener:p,addInitCallback:g}=n;s.setAlias("Userfront"),c.Opts.api=!0,g(({tenantId:e})=>{c.External.project=e,u("https://cdn.userfront.com/toolkit/page/",e,o)}),p(),"object"==typeof window&&window.addEventListener("urlchanged",i);const P={build:function({toolId:e}){return class extends r.PureComponent{componentDidMount(){!function(){try{try{o()}catch(e){console.warn(e&&e.message?e.message:"Problem loading page",e)}Promise.resolve()}catch(e){return Promise.reject(e)}}()}render(){return r.createElement("div",null,r.createElement("div",{id:"userfront-"+e}))}}}};for(const e in n)P[e]||(P[e]=n[e]);module.exports=P;
//# sourceMappingURL=userfront-react.js.map
