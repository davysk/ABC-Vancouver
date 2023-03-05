import"./ToolsSettings.fc44d740.js";import{m as l}from"./index.f5a89b52.js";import{J as p}from"./JsonValues.08065e69.js";import{n as c}from"./vueComponentNormalizer.58b0a173.js";import{S as u}from"./AddPlus.a5cc22bc.js";import{S as _}from"./index.d42c878d.js";import{S as g}from"./External.1af3387c.js";var m=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"aioseo-exclude-posts"},[s("base-select",{attrs:{options:t.excludeOptions,"ajax-search":t.processGetObjects,customLabel:t.searchableLabel,size:"medium",multiple:"",value:t.getJsonValues(t.optionName),placeholder:t.strings.typeToSearch},on:{input:function(o){return t.optionName=t.setJsonValues(o)}},scopedSlots:t._u([{key:"noOptions",fn:function(){return[t._v(" "+t._s(t.noOptions)+" ")]},proxy:!0},{key:"noResult",fn:function(){return[t._v(" "+t._s(t.strings.noResult)+" ")]},proxy:!0},{key:"caret",fn:function(o){var e=o.toggle;return[s("base-button",{staticClass:"multiselect-toggle",staticStyle:{padding:"10px 13px",width:"40px",position:"absolute",height:"36px",right:"2px",top:"2px","text-align":"center",transition:"transform .2s ease"},attrs:{type:"gray"},on:{click:e}},[s("svg-add-plus",{staticStyle:{width:"14px",height:"14px",color:"black"}})],1)]}},{key:"option",fn:function(o){var e=o.option,r=o.search;return[s("div",{staticClass:"option"},[s("div",{staticClass:"option-title",domProps:{innerHTML:t._s(t.getOptionTitle(e.label,r))}}),s("div",{staticClass:"option-details"},[s("span",[t._v(t._s(t.strings.id)+": #"+t._s(e.value))]),s("span",[t._v(t._s(t.strings.type)+": "+t._s(e.type))])])]),s("a",{staticClass:"option-permalink",attrs:{href:e.link,target:"_blank"},on:{click:function(i){return i.stopPropagation(),function(){}.apply(null,arguments)}}},[s("svg-external")],1)]}},{key:"tag",fn:function(o){var e=o.option,r=o.remove;return[s("div",{staticClass:"multiselect__tag"},[s("div",{staticClass:"multiselect__tag-value"},[t._v(" "+t._s(e.label)+" - #"+t._s(e.value)+" ")]),s("div",{staticClass:"multiselect__tag-remove",on:{click:function(i){return i.stopPropagation(),r(e)}}},[s("svg-close",{nativeOn:{click:function(i){return i.stopPropagation(),r(e)}}})],1)])]}}])}),s("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(o){t.optionName=[]}}},[t._v(" "+t._s(t.strings.clear)+" ")])],1)},h=[];const d={components:{SvgAddPlus:u,SvgClose:_,SvgExternal:g},mixins:[p],props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data(){return{excludeOptions:[],strings:{typeToSearch:this.$t.__("Type to search...",this.$td),noOptionsPosts:this.$t.__("Begin typing a post ID, title or slug to search...",this.$td),noOptionsTerms:this.$t.__("Begin typing a term ID or name to search...",this.$td),noResult:this.$t.__("No results found for your search. Try again!",this.$td),clear:this.$t.__("Clear",this.$td),id:this.$t.__("ID",this.$td),type:this.$t.__("Type",this.$td)}}},computed:{optionName:{get(){return this.type==="posts"?this.options.excludePosts:this.options.excludeTerms},set(t){if(this.type==="posts"){this.options.excludePosts=t;return}this.options.excludeTerms=t}},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{...l(["getObjects"]),processGetObjects(t){return this.getObjects({query:t,type:this.type}).then(n=>{this.excludeOptions=n.body.objects})},getOptionTitle(t,n){const s=new RegExp(`(${n})`,"gi");return t.replace(s,'<span class="search-term">$1</span>')},searchableLabel({value:t,label:n,slug:s}){return`${t} ${n} ${s}`}}},a={};var y=c(d,m,h,!1,v,null,null,null);function v(t){for(let n in a)this[n]=a[n]}const S=function(){return y.exports}();export{S as C};
