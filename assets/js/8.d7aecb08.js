(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{424:function(t,n,s){},425:function(t,n,s){"use strict";s(54);var a=s(21),e={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:function(t,n){var s=n.props,e=s.name,i=s.icon,o=s.size;return t("span",{class:"post-tag",attrs:{title:e}},[t(a.a,{class:"post-tag-icon",attrs:{name:i,size:o}}),t("span",{class:"post-tag-name"},[e])])}},i=(s(429),s(4)),o=Object(i.a)(e,void 0,void 0,!1,null,null,null);n.a=o.exports},429:function(t,n,s){"use strict";s(424)},464:function(t,n,s){"use strict";s.r(n);var a={name:"Tags",components:{IconTag:s(425).a}},e=s(4),i=Object(e.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tags"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.tags))]),this._v(" "),this._l(this.$tags.list,(function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"tag",name:t.name}})],1)}))],2)])}),[],!1,null,null,null);n.default=i.exports}}]);