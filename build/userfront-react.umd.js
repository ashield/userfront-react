!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("react"),require("@anymod/core"),require("@userfront/core")):"function"==typeof define&&define.amd?define(["react","@anymod/core","@userfront/core"],r):(e=e||self).react=r(e.react,e.AnyMod,e.Core)}(this,function(e,r,t){var n="default"in e?e.default:e;r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const o=function(){try{return a.isScript1Loading?Promise.resolve():Promise.resolve(l()).then(function(e){return Promise.resolve(u(e)).then(function(e){return Promise.resolve(i(e)).then(function(){f(),m()})})})}catch(e){return Promise.reject(e)}},{Singleton:a,alias:c,render:s,processPage:i,addScript1ToDocument:d,createOrReturnPage:l,checkPageAndUpdate:u,executeCallbacks:f,logErrorsAndTips:m}=r,{registerUrlChangedEventListener:p,addInitCallback:g}=t;c.setAlias("Userfront"),a.Opts.api=!0,g(({tenantId:e})=>{a.External.project=e,d("https://mod.userfront.com/v3/page/",e,o)}),p(),window.addEventListener("urlchanged",s);const h={build({toolId:r}){class t extends n.Component{componentDidMount(){!function(){try{try{o()}catch(e){console.warn(e&&e.message?e.message:"Problem loading page",e)}Promise.resolve()}catch(e){return Promise.reject(e)}}()}render(){return n.createElement("div",null,n.createElement("div",{id:"userfront-"+r}))}}return e.memo(t)}};for(const e in t)h[e]||(h[e]=t[e]);return h});
//# sourceMappingURL=userfront-react.umd.js.map
