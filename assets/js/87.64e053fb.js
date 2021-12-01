(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{577:function(t,s,a){"use strict";a.r(s);var r=a(7),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('注：\n  官方一共提供了插件用以拦劫请求的接口\n  1、<script src="http://rap.tounick.com/rap.plugin.js?projectId=项目ID"><\/script>这个地址可通过配置获取。RAP提供了 Mock插件（暂时仅支持Kissy和jQuery），使用只需要一步,将以下代码写在KISSY或jQuery js代码之后即可。\n  2、AngularJS版本插件 ng-rap  这个是ng插件\n  3、rap-node-plugin 地址：https://www.npmjs.com/package/rap-node-plugin\n')])])]),a("h2",{attrs:{id:"用法"}},[t._v("用法")]),t._v(" "),a("p",[t._v("一. 直接复制插件代码(项目路由 24,56,32 通过逗号隔开) 将以下代码写在KISSY或jQuery js代码之后即可：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("通常情况下，引入顺序为: `KISSY/jQuery库` => `RAP插件`\n\n在使用Magix等附加框架时，请注意引入顺序为：`KISSY/jQuery库` => `RAP插件` => `Magix`\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script src="http://rap.xx.com/rap.plugin.js?projectId=xx"><\/script>\n')])])]),a("h4",{attrs:{id:"_1-项目路由的作用"}},[t._v("1. 项目路由的作用")]),t._v(" "),a("p",[t._v("项目路由帮助多项目之间共享数据。比如项目A想借用项目B的数据，则在项目A的项目路由中添加B的projectId(在URL中可以查看到当前项目ID）")]),t._v(" "),a("p",[t._v("更复杂的例子，项目A的项目路由设置了23,35,38，则：")]),t._v(" "),a("p",[t._v("当请求项目A的MOCK数据时，若在A中找不到，则会去ID为23的项目找，若依然找不到会去ID为35的项目中，一直到ID为38的项目依然找不到则无结果返回。")]),t._v(" "),a("p",[t._v("二. 引用jquery")]),t._v(" "),a("p",[t._v("文件中会有白名单。白名单会根据RAP中已经编辑的接口文档，自动配置，RAP中未录入的接口不会做拦截")]),t._v(" "),a("h2",{attrs:{id:"rap中实现mock数据的原理"}},[t._v("RAP中实现mock数据的原理")]),t._v(" "),a("ol",[a("li",[t._v("rap是扩展了jquery的ajax方法，通过拦截并测试请求路径是否处在白名单中，如果在则进行请求转发。如果不在不做处理直接请求")]),t._v(" "),a("li",[t._v("rap返回的数据如果是mockjs，则是带有javascript方法的，需要调用mock方法。如果是mockjsdata，则返回可用的正常数据")])]),t._v(" "),a("h2",{attrs:{id:"boss-后台"}},[t._v("boss 后台")]),t._v(" "),a("ol",[a("li",[t._v("加入了一个httpRap.js文件。用于做相当于rap需要引入的js的功能。如拦截功能，mock数据功能")]),t._v(" "),a("li",[t._v("在公共http.js中引用httpRap.js做相应的事情实现拦截")]),t._v(" "),a("li",[t._v("在process.env.xxx 中做一些环境的限制")])]),t._v(" "),a("p",[t._v("遇到问题：同源问题\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials")]),t._v(" "),a("p",[t._v("还遇到了自定义头（header）的问题。 通过区分环境来控制类似问题")])])}),[],!1,null,null,null);s.default=e.exports}}]);