function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("react")),r=e(require("@anymod/core")),o=e(require("@userfront/core"));const n=function(){try{try{s()}catch(e){console.warn(e&&e.message?e.message:"Problem loading page",e)}return Promise.resolve()}catch(e){return Promise.reject(e)}},s=function(){try{return c.isScript1Loading?Promise.resolve():Promise.resolve(a()).then(function(e){return Promise.resolve(m(e)).then(function(e){return Promise.resolve(l(e)).then(function(){p(),f()})})})}catch(e){return Promise.reject(e)}},{Singleton:c,alias:u,render:i,processPage:l,addScript1ToDocument:d,createOrReturnPage:a,checkPageAndUpdate:m,executeCallbacks:p,logErrorsAndTips:f}=r,{registerUrlChangedEventListener:g,addInitCallback:P}=o;u.setAlias("Userfront"),c.Opts.api=!0,P(({tenantId:e})=>{c.External.project=e,d("https://cdn.userfront.com/toolkit/page/",e,s)}),g(),"object"==typeof window&&window.addEventListener("urlchanged",i);class v extends t.PureComponent{constructor(e){super(e)}componentDidMount(){n()}render(){return t.createElement("div",null,t.createElement("div",{id:"userfront-"+this.props.toolId}))}}function E({toolId:e}){return class extends t.PureComponent{componentDidMount(){n()}render(){return t.createElement("div",null,t.createElement("div",{id:"userfront-"+e}))}}}function I({toolId:e}){return t.createElement(v,{toolId:e})}function h({toolId:e}){return t.createElement(v,{toolId:e})}function x({toolId:e}){return t.createElement(v,{toolId:e})}function b({toolId:e}){return t.createElement(v,{toolId:e})}const w={build:E,SignupForm:I,LoginForm:h,PasswordResetForm:x,LogoutButton:b};for(const e in o)w[e]||(w[e]=o[e]);module.exports=w,exports.LoginForm=h,exports.LogoutButton=b,exports.PasswordResetForm=x,exports.SignupForm=I,exports.build=E,exports.default=w;
//# sourceMappingURL=userfront-react.js.map
