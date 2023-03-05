import{n}from"./vueComponentNormalizer.58b0a173.js";import{C as u}from"./Blur.404d53ce.js";import{C as p}from"./SettingsRow.8a127375.js";import{S as d}from"./External.1af3387c.js";import{B as m}from"./RadioToggle.18d51233.js";import{R as v}from"./RequiredPlans.a8f6c47f.js";import{C as $}from"./Card.9d319c36.js";import{C as f}from"./ProBadge.d6147ee5.js";import{C as S}from"./Index.97438b3f.js";import{A as h}from"./ToolsSettings.fc44d740.js";import"./index.f5a89b52.js";import"./Row.dfea53f7.js";import"./index.d42c878d.js";import"./client.d00863cc.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./default-i18n.0e73c33c.js";import"./constants.9efee5f7.js";import"./isArrayLikeObject.5268a676.js";import"./portal-vue.esm.272b3133.js";import"./Tooltip.a1ab116b.js";import"./Slide.8aaa5049.js";import"./attachments.8194ef98.js";import"./cleanForSlug.788b395f.js";import"./Index.c9d66bbe.js";const _={data(){return{strings:{customFieldSupport:this.$t.__("Custom Field Support",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),video:this.$t.__("Video Sitemap",this.$td),description:this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open Video Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Video Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Video Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td)}}}};var g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},x=[];const y={},i={};var L=n(y,g,x,!1,k,null,null,null);function k(t){for(let s in i)this[s]=i[s]}const b=function(){return L.exports}();var C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-blur",[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0))}})]),e("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-toggle",{attrs:{value:!0}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"aioseo-sitemap-preview"},[e("base-button",{attrs:{size:"medium",type:"blue"}},[e("svg-external"),t._v(" "+t._s(t.strings.openSitemap)+" ")],1)],1),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.noIndexDisplayed)+" "),e("br"),t._v(" "+t._s(t.strings.doYou404)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.enableSitemapIndexes},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"sitemapIndexes",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.sitemapIndexes)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0))}})])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.linksPerSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{staticClass:"aioseo-links-per-site",attrs:{type:"number",size:"medium",min:1,max:5e4}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.maxLinks)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0))}})])]},proxy:!0}])})],1)},R=[];const w={components:{CoreBlur:u,CoreSettingsRow:p,SvgExternal:d,BaseRadioToggle:m},mixins:[_]},o={};var A=n(w,C,R,!1,I,null,null,null);function I(t){for(let s in o)this[s]=o[s]}const M=function(){return A.exports}();var P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-video-sitemap-lite"},[e("core-card",{attrs:{slug:"videoSitemap",noSlide:!0},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.video))]),e("core-pro-badge")]},proxy:!0}])},[e("blur"),e("cta",{attrs:{"feature-list":[t.strings.customFieldSupport,t.strings.exclude],"cta-link":t.$links.getPricingUrl("video-sitemap","video-sitemap-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("video-sitemap",null,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-video-sitemap"}}),t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0}])})],1)],1)},T=[];const B={components:{Blur:M,RequiredPlans:v,CoreCard:$,CoreProBadge:f,Cta:S},mixins:[_]},r={};var G=n(B,P,T,!1,V,null,null,null);function V(t){for(let s in r)this[s]=r[s]}const a=function(){return G.exports}();var E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},O=[];const F={},l={};var N=n(F,E,O,!1,U,null,null,null);function U(t){for(let s in l)this[s]=l[s]}const D=function(){return N.exports}();var H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-video-sitemap"},[t.shouldShowMain?e("video-sitemap"):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)},j=[];const z={mixins:[h],components:{Activate:b,Lite:a,VideoSitemap:a,Update:D},data(){return{addonSlug:"aioseo-video-sitemap"}}},c={};var q=n(z,H,j,!1,X,null,null,null);function X(t){for(let s in c)this[s]=c[s]}const ht=function(){return q.exports}();export{ht as default};
