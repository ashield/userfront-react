!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("@anymod/core"),require("@userfront/core")):"function"==typeof define&&define.amd?define(["react","@anymod/core","@userfront/core"],t):(e=e||self).react=t(e.react,e.AnyMod,e.Core)}(this,function(e,t,r){var n="default"in e?e.default:e;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;const{Singleton:o,alias:c,render:a,processPage:s,createOrReturnPage:i,checkPageAndUpdate:u,executeCallbacks:d,logErrorsAndTips:l}=t;c.setAlias("Userfront"),o.Opts.api=!0,r.registerUrlChangedEventListener(),window.addEventListener("urlchanged",a);const f={build({toolId:t}){class r extends n.Component{componentDidMount(){!function(){try{const e=function(e,t){try{var r=Promise.resolve(i()).then(function(e){return Promise.resolve(u(e)).then(function(e){return Promise.resolve(s(e)).then(function(){d(),l()})})})}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){console.warn(e&&e.message?e.message:"Problem loading page",e)});Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}()}render(){return n.createElement("div",null,n.createElement("div",{id:"userfront-"+t}))}}return e.memo(r)}};for(const e in r)f[e]||(f[e]=r[e]);return f});
//# sourceMappingURL=userfront-react.umd.js.map
