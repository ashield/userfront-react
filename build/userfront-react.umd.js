!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@anymod/core"),require("@userfront/core")):"function"==typeof define&&define.amd?define(["exports","react","@anymod/core","@userfront/core"],t):t((e=e||self).react={},e.react,e.AnyMod,e.Core)}(this,function(e,t,r,o){t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;const n=function(){try{try{c()}catch(e){console.warn(e&&e.message?e.message:"Problem loading page",e)}return Promise.resolve()}catch(e){return Promise.reject(e)}},c=function(){try{return s.isScript1Loading?Promise.resolve():Promise.resolve(i()).then(function(e){return Promise.resolve(p(e)).then(function(e){return Promise.resolve(d(e)).then(function(){f(),m()})})})}catch(e){return Promise.reject(e)}},{Singleton:s,alias:u,render:a,processPage:d,addScript1ToDocument:l,createOrReturnPage:i,checkPageAndUpdate:p,executeCallbacks:f,logErrorsAndTips:m}=r,{registerUrlChangedEventListener:g,addInitCallback:P}=o;u.setAlias("Userfront"),s.Opts.api=!0,P(({tenantId:e})=>{s.External.project=e,l("https://cdn.userfront.com/toolkit/page/",e,c)}),g(),"object"==typeof window&&window.addEventListener("urlchanged",a);class y extends t.PureComponent{constructor(e){super(e)}componentDidMount(){n()}render(){return t.createElement("div",null,t.createElement("div",{id:"userfront-"+this.props.toolId}))}}function h({toolId:e}){return class extends t.PureComponent{componentDidMount(){n()}render(){return t.createElement("div",null,t.createElement("div",{id:"userfront-"+e}))}}}function E({toolId:e}){return t.createElement(y,{toolId:e})}function I({toolId:e}){return t.createElement(y,{toolId:e})}function v({toolId:e}){return t.createElement(y,{toolId:e})}function b({toolId:e}){return t.createElement(y,{toolId:e})}const w={build:h,SignupForm:E,LoginForm:I,PasswordResetForm:v,LogoutButton:b};for(const e in o)w[e]||(w[e]=o[e]);module.exports=w,e.LoginForm=I,e.LogoutButton=b,e.PasswordResetForm=v,e.SignupForm=E,e.build=h,e.default=w});
//# sourceMappingURL=userfront-react.umd.js.map
