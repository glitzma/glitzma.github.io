(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(t,s,e){},381:function(t,s,e){"use strict";e(378)},385:function(t,s,e){"use strict";e.r(s);var n={name:"PostMeta",computed:{thisIndex(){return this.$posts.indexOf(this.$page)},prevPost(){const t=this.thisIndex+1;return t>this.$posts.length-1?null:this.$posts[t]},nextPost(){const t=this.thisIndex-1;return t<0?null:this.$posts[t]}}},i=(e(381),e(3)),a={name:"Post",components:{PostMeta:Object(i.a)(n,(function(){var t=this,s=t._self._c;return s("section",{staticClass:"post-meta main-div"},[s("section",{staticClass:"post-date clearfix"},[t.$page.createdAt?s("span",{staticClass:"create-date"},[t._v("\n      "+t._s(`${t.$themeConfig.lang.createdAt} : ${t.$page.createdAt}`)+"\n    ")]):t._e(),t._v(" "),t.$page.updatedAt?s("span",{staticClass:"update-date"},[t._v("\n      "+t._s(`${t.$themeConfig.lang.updatedAt} : ${t.$page.updatedAt}`)+"\n    ")]):t._e()]),t._v(" "),s("section",{staticClass:"post-links"},[t.nextPost?s("RouterLink",{staticClass:"post-link",attrs:{to:t.nextPost.path}},[t._v("\n      "+t._s(`${t.$themeConfig.lang.nextPost} : ${t.nextPost.title}`)+"\n    ")]):t._e(),t._v(" "),t.prevPost?s("RouterLink",{staticClass:"post-link",attrs:{to:t.prevPost.path}},[t._v("\n      "+t._s(`${t.$themeConfig.lang.prevPost} : ${t.prevPost.title}`)+"\n    ")]):t._e()],1)])}),[],!1,null,"12a4d4fc",null).exports},computed:{meta(){return!1!==this.$frontmatter.meta},vssue(){return!1!==this.$themeConfig.comments&&!1!==this.$frontmatter.vssue&&(this.vssueTitle||this.vssueId)},vssueTitle(){return this.$frontmatter["vssue-title"]||this.$frontmatter.title||void 0},vssueId(){return this.$frontmatter["vssue-id"]||void 0},vssueOptions(){if(this.$themeConfig.comments&&(void 0===this.$themeConfig.comments.platform||"github"===this.$themeConfig.comments.platform)){return{labels:(this.$themeConfig.comments&&this.$themeConfig.comments.labels||["Vssue"]).concat(this.vssueTitle.replace(/,/g,""))}}return{}}}},o=Object(i.a)(a,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"post"},[t.meta?s("PostMeta"):t._e(),t._v(" "),s("article",{staticClass:"main-div"},[s("Content",{key:t.$page.path,staticClass:"post-content"})],1),t._v(" "),t.meta?s("PostMeta"):t._e(),t._v(" "),t.vssue?s("div",{staticClass:"main-div",attrs:{id:"post-comments"}},[s("Vssue",{attrs:{title:t.vssueTitle,"issue-id":t.vssueId,options:t.vssueOptions}})],1):t._e()],1)}),[],!1,null,null,null);s.default=o.exports}}]);