function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=require("react"),r=e(n),t=e(require("@anymod/core")),o=e(require("@userfront/core"));const{Singleton:s,alias:c,render:a,processPage:i,addScript1ToDocument:u,createOrReturnPage:d,checkPageAndUpdate:l,executeCallbacks:m,logErrorsAndTips:f}=t,{registerUrlChangedEventListener:p,addInitCallback:g}=o;c.setAlias("Userfront"),s.Opts.api=!0,g(({tenantId:e})=>{s.External.project=e,u("https://mod.userfront.com/v3/page/",e)}),p(),window.addEventListener("urlchanged",a);const h={build({toolId:e}){class t extends r.Component{componentDidMount(){!function(){try{const e=function(e,n){try{var r=Promise.resolve(d()).then(function(e){return Promise.resolve(l(e)).then(function(e){return Promise.resolve(i(e)).then(function(){m(),f()})})})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){console.warn(e&&e.message?e.message:"Problem loading page",e)});Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}()}render(){return r.createElement("div",null,r.createElement("div",{id:"userfront-"+e}))}}return n.memo(t)}};for(const e in o)h[e]||(h[e]=o[e]);module.exports=h;
//# sourceMappingURL=userfront-react.js.map
