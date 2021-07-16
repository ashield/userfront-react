import e from"react";import t from"@anymod/core";import o from"@userfront/core";const{Singleton:n,alias:r,render:a,processPage:c,addScript1ToDocument:d,createOrReturnPage:i,checkPageAndUpdate:s,executeCallbacks:l,logErrorsAndTips:u}=t,{registerUrlChangedEventListener:m,addInitCallback:p}=o;async function f(){if(n.isScript1Loading)return;const e=await i(),t=await s(e);await c(t),l(),u()}async function g(){try{f()}catch(e){console.warn(e&&e.message?e.message:"Problem loading page",e)}}r.setAlias("Userfront"),n.Opts.api=!0,p(({tenantId:e})=>{n.External.project=e,d("https://cdn.userfront.com/toolkit/page/",e,f)}),m(),"object"==typeof window&&window.addEventListener("urlchanged",a);class E extends e.PureComponent{constructor(e){super(e)}componentDidMount(){g()}render(){return e.createElement("div",null,e.createElement("div",{id:"userfront-"+this.props.toolId}))}}function I({toolId:t}){return class extends e.PureComponent{componentDidMount(){g()}render(){return e.createElement("div",null,e.createElement("div",{id:"userfront-"+t}))}}}function w({toolId:t}){return e.createElement(E,{toolId:t})}function x({toolId:t}){return e.createElement(E,{toolId:t})}function P({toolId:t}){return e.createElement(E,{toolId:t})}function h({toolId:t}){return e.createElement(E,{toolId:t})}const v={build:I,SignupForm:w,LoginForm:x,PasswordResetForm:P,LogoutButton:h};for(const e in o)v[e]||(v[e]=o[e]);module.exports=v;export default v;export{x as LoginForm,h as LogoutButton,P as PasswordResetForm,w as SignupForm,I as build};
//# sourceMappingURL=userfront-react.modern.js.map
