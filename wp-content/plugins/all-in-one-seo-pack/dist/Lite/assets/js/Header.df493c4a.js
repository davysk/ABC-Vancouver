import"./ToolsSettings.fc44d740.js";import{a as i,m,e as g,b as a}from"./index.f5a89b52.js";import{g as o,r as l}from"./params.bea1a08d.js";import{n as r}from"./vueComponentNormalizer.58b0a173.js";import{C as h,a as f}from"./LicenseKeyBar.1eaa4b0d.js";import{U as v}from"./AnimatedNumber.fb66de3f.js";import{S as $}from"./LogoGear.fa7af154.js";import{S as C,g as y}from"./index.d42c878d.js";import{S as b}from"./Logo.a7c6e95c.js";const x={mounted(){if(o()["aioseo-scroll"]&&setTimeout(()=>{this.$scrollTo(`#${o()["aioseo-scroll"]}`,{offset:-130}),l("aioseo-scroll")},500),o()["aioseo-highlight"]){const e=o()["aioseo-scroll"]?1500:500;setTimeout(()=>{const s=document.querySelector(`#${o()["aioseo-highlight"]}`);s&&(s.classList.add("aioseo-row-highlight"),setTimeout(()=>{s.classList.remove("aioseo-row-highlight")},1500)),l("aioseo-highlight")},e)}}};var k=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-percent-circle"},[t("transition",{attrs:{name:"fill-percent-circle"}},[t("svg",{staticClass:"aioseo-seo-site-score-svg",attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{staticClass:"aioseo-percent-circle-score__background",attrs:{stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}),t("circle",{staticClass:"aioseo-percent-circle-score__circle",attrs:{stroke:"#005AE0","stroke-width":"2","stroke-dasharray":`${e.suggestionsScan.percent},100`,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}})])]),t("div",{staticClass:"aioseo-percent-circle-percent"},[t("div",[t("util-animated-number",{attrs:{number:e.number,"from-number":e.fromNumber}}),e._v("% ")],1)])],1)},S=[];const w={components:{UtilAnimatedNumber:v},data(){return{fromNumber:0,number:0}},watch:{suggestionsScan:{deep:!0,handler(e){e.percent!==this.number&&(this.fromNumber=this.number,this.number=e.percent)}}},computed:{...i("linkAssistant",["suggestionsScan"])},mounted(){this.number=this.suggestionsScan.percent}},c={};var B=r(w,k,S,!1,P,null,null,null);function P(e){for(let s in c)this[s]=c[s]}const A=function(){return B.exports}();var U=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-upgrade-bar"},[t("div",{staticClass:"upgrade-text"},[t("svg-aioseo-logo-gear"),t("div",{domProps:{innerHTML:e._s(e.upgradeText)}})],1),t("svg-close",{on:{click:e.processHideUpgradeBar}})],1)},N=[];const H={components:{SvgAioseoLogoGear:$,SvgClose:C},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),url:this.$links.utmUrl("lite-upgrade-bar"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro")}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("You're using %1$s. To unlock more features, consider %2$s",this.$td),this.strings.boldText,this.link)}},methods:{...m(["hideUpgradeBar"]),processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}},u={};var M=r(H,U,N,!1,L,null,null,null);function L(e){for(let s in u)this[s]=u[s]}const T=function(){return M.exports}();var E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:e.classes},[e._t("default")],2)},F=[];const j={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let e=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return e+=this.hero?"aioseo-hero ":"",e+=this.fullWidth?"full-width ":"",e+=this.small?"small ":"",e}}},_={};var R=r(j,E,F,!1,V,null,null,null);function V(e){for(let s in _)this[s]=_[s]}const q=function(){return R.exports}();var G=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-notifications",attrs:{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"}})])},O=[];const W={},d={};var Z=r(W,G,O,!1,Y,null,null,null);function Y(e){for(let s in d)this[s]=d[s]}const z=function(){return Z.exports}();var D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-header"},[!e.$isPro&&e.settings.showUpgradeBar&&e.upgradeBar&&e.pong?t("core-upgrade-bar"):e._e(),e.$isPro&&e.isUnlicensed&&e.pong?t("core-license-key-bar"):e._e(),e.pong?e._e():t("core-api-bar"),t("grid-container",{attrs:{"full-width":e.fullWidth,small:e.small}},[t("div",{staticClass:"aioseo-header-content"},[e.isUnlicensed?t("a",{attrs:{href:e.$links.utmUrl("header-logo"),target:"_blank"}},[t("svg-aioseo-logo")],1):e._e(),e.isUnlicensed?e._e():t("svg-aioseo-logo"),e.pageName?t("span",{staticClass:"spacer"}):e._e(),e.pageName?t("span",{staticClass:"page-name"},[e._v(e._s(e.pageName))]):e._e(),e.actions?t("div",{staticClass:"header-actions"},[t("transition",{attrs:{name:"fade-percent-circle"}},[e.canShowPercentCircle?t("core-percent-circle",{nativeOn:{click:function(n){return e.toggleProcessingPopup.apply(null,arguments)}}}):e._e()],1),t("span",{staticClass:"round",on:{click:function(n){return n.stopPropagation(),e.toggleNotifications.apply(null,arguments)}}},[e.activeNotificationsCount?t("span",{staticClass:"round number"},[e._v(" "+e._s(e.activeNotificationsCount>9?"!":e.activeNotificationsCount)+" ")]):e._e(),t("svg-notifications",{on:{click:function(n){return n.stopPropagation(),e.toggleNotifications.apply(null,arguments)}}})],1),e.helpPanel.docs&&Object.keys(e.helpPanel.docs).length?t("span",{staticClass:"round",on:{click:function(n){return n.stopPropagation(),e.toggleModal.apply(null,arguments)}}},[t("svg-circle-question-mark")],1):e._e()],1):e._e()],1)])],1)},I=[];const K={components:{CoreApiBar:h,CorePercentCircle:A,CoreLicenseKeyBar:f,CoreUpgradeBar:T,GridContainer:q,SvgAioseoLogo:b,SvgCircleQuestionMark:y,SvgNotifications:z},mixins:[x],props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},computed:{...g(["settings","activeNotificationsCount","isUnlicensed","helpPanel"]),...i(["notifications","pong"]),...i("linkAssistant",["suggestionsScan"]),canShowPercentCircle(){return this.$addons.isActive("aioseo-link-assistant")&&!this.$addons.requiresUpgrade("aioseo-link-assistant")&&this.$addons.hasMinimumVersion("aioseo-link-assistant")&&(this.$route.name==="links-report"||this.$route.name==="overview")&&this.suggestionsScan.percent!==100}},methods:{...a(["toggleNotifications"]),...a("linkAssistant",["toggleProcessingPopup"]),debounce(e){let s;return(...t)=>{s&&cancelAnimationFrame(s),s=requestAnimationFrame(()=>{e(...t)})}},storeScroll(){document.documentElement.dataset.scroll=window.scrollY},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")}},mounted(){this.storeScroll(),document.addEventListener("scroll",this.debounce(this.storeScroll),{passive:!0})}},p={};var Q=r(K,D,I,!1,J,null,null,null);function J(e){for(let s in p)this[s]=p[s]}const le=function(){return Q.exports}();export{le as C,q as G,T as a};
