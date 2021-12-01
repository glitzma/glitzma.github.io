(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{552:function(e,n,t){"use strict";t.r(n);var o=t(7),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"通过webpack的code-spliting实现vue组件异步按需懒加载"}},[e._v("通过Webpack的code-spliting实现Vue组件异步按需懒加载")]),e._v(" "),t("p",[e._v("因为VueJs的核心是组件，通过Webpack打包工具最后会生成一个特别大的vendor.js文件，在用户网络不太好的情况下，想要在2s内加载完这个特大"),t("code",[e._v("js")]),e._v("文件几乎是不可能的，所以同样需要做按需懒加载，幸好，Webpack提供了code-spliting功能可以帮助我们做到这一点。")]),e._v(" "),t("h5",{attrs:{id:"方法"}},[e._v("方法：")]),e._v(" "),t("p",[e._v("使用vue-cli脚手架构建一个vue项目，然后使用vue官网提供的方法，通过异步来引入组件，即可实现按需加载")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://router.vuejs.org/zh-cn/advanced/lazy-loading.html",title:"Vue路由懒加载方法",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue路由懒加载方法"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("实现方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//代码引用时\nconst Foo = () => import('./Foo.vue')\n")])])]),t("p",[e._v("在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const router = new VueRouter({\n  routes: [\n    { path: '/foo', component: Foo }\n  ]\n})\n")])])]),t("p",[e._v("webpack 路由配置注意事项：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n   entry:  {\n       app: ['babel-polyfill', './src/main.js']\n   }, //如果写多个入品文件，会让网站同事加载多个文件\n   output: {\n        path: __dirname + '/src/build/',//打包后的文件存放的地方\n        filename: \"[chunkhash].build.js\",//打包后输出文件的文件名\n        publicPath: './build/'\n    },\n};\n\n\n//此段代码为vue-cli使用时需要注释掉的。详见webpack code-split\n// new webpack.optimize.CommonsChunkPlugin({\n//   name: 'vendor',\n//   minChunks (module) {\n//     // any required modules inside node_modules are extracted to vendor\n//     console.log(module.resource);\n//     return (\n//       module.resource &&\n//       /\\.js$/.test(module.resource) &&\n//       module.resource.indexOf(\n//         path.join(__dirname, '../node_modules')\n//       ) === 0\n//     )\n//   }\n// }),\n")])])]),t("p",[t("a",{attrs:{href:"https://doc.webpack-china.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack code split"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=a.exports}}]);