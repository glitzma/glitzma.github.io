(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{591:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("TOC"),t._v(" "),s("h2",{attrs:{id:"webpack文档"}},[t._v("webpack"),s("a",{attrs:{href:"https://webpack.js.org/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("最基础的配置是 加一个 entry  一个 output，但是打包时候会出现黄色的错误提示。mode需要配置")]),t._v(" "),s("blockquote",[s("p",[t._v("mode 分：production 打包后会压缩代码， treeshaking 的支持\ndevelopment 打包后不会被压缩")])]),t._v(" "),s("h3",{attrs:{id:"loader-是什么"}},[t._v("loader 是什么？")]),t._v(" "),s("p",[t._v("css-loader、style-loadr、sass-loader、postcc-load、imports-loader、file-load、url-loader、babel-loader、@babel/preset-env、babel-polyfill等。")]),t._v(" "),s("p",[t._v("@babel/preset-env 将es6转成es5")]),t._v(" "),s("p",[t._v("babel-polyfill 转成低版本浏览器可以支持的语法")]),t._v(" "),s("p",[t._v("它主要处理模块打包时的问题，可以自定义loader处理一些业务上的公共问题，查阅"),s("a",{attrs:{href:"https://webpack.js.org/api/loaders#examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("编写好自定义loader后也可以像第三方loader一样使用")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("遇到问题，文件中有引用嵌套时，加上了importLoaders:2")])]),t._v(" "),s("h3",{attrs:{id:"plugin-是什么"}},[t._v("plugin 是什么？")]),t._v(" "),s("p",[t._v("htmlWebpackPlugin、cleanWebpackPlugin、hotModuleReplacementPlugin、DllReferencePlugin、workbox-webpack-plugin")]),t._v(" "),s("p",[t._v("htmlWebpackPlugin打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html中\n可以指定template模板")]),t._v(" "),s("p",[t._v("cleanWebpackPlugin清除某个目录")]),t._v(" "),s("p",[t._v("HotModuleReplacementPlugin热更新文件")]),t._v(" "),s("p",[t._v("DllReferencePlugin插件去读取第三方依赖库。所以说它的打包速度会得到一个很大的提升。")]),t._v(" "),s("p",[t._v("workbox-webpack-plugin 进行pwa配置时使用")]),t._v(" "),s("p",[t._v("plugin是webpack在运行到某个生命周期hooks时要执行事情。一般是一个class，用的时候用new xxx")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("copyRightWebpackPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'插件被使用了'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compiler 是webpack的一个实例")]),t._v("\n    compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tapasync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("名字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行某些异步代码后需要调用cb回调")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("写好后，也可以去webpack.config.js中的plugin中使用")]),t._v(" "),s("h3",{attrs:{id:"webpackdevserver可以提升开发效率"}},[t._v("webpackDevServer可以提升开发效率")]),t._v(" "),s("p",[t._v("使用webpackDevServer 需要在webpack.config.js中做配置.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\ndevServer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  contentBase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  open"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  proxy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hotOnly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如：不刷新页面")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果只想刷新某个模块可以做单独处理")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也可以通过node 编写一个服务通过 webpack-dev-middleware 不过需要做特别多的配置，为了方便的话，不建议使用")]),t._v(" "),s("h3",{attrs:{id:"treeshaking-是什么"}},[t._v("treeShaking 是什么？")]),t._v(" "),s("p",[t._v("treeShaking把模块中没用的去掉，只支持ES module的方式，development mode是没有tree shaking功能的。")]),t._v(" "),s("p",[t._v(":::\n某些引用不想被tree shaking掉，需要在package中进行配置 sideEffects:[@babel/polly-fill] 如果将参数设置为false则都会被tree shaking掉\n:::")]),t._v(" "),s("p",[t._v("tree shaking运行进会把没有用到的先注释掉，当进行压缩时将这部分代码删除。")]),t._v(" "),s("h3",{attrs:{id:"代码分割"}},[t._v("代码分割")]),t._v(" "),s("ol",[s("li",[t._v("同步代码：要在webpack.common.js中配optimization")]),t._v(" "),s("li",[t._v("异步代码：无需 做任何配置就可以进行代码分割 require.ensure /  import")])]),t._v(" "),s("p",[t._v("魔法注释，可以对拆分代码命名等一系列操作")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackChunkName: 'lodash'，webpackPrefetch: true*/")]),t._v(" lodash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("上面内容魔法注释请参考"),s("a",{attrs:{href:"https://webpack.js.org/api/module-methods/#magic-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("MinicssExtractPlugin")]),t._v(" "),s("p",[t._v("optimize-css-assets-webpack-plugin")]),t._v(" "),s("h3",{attrs:{id:"shimming-垫片"}},[t._v("shimming 垫片")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpackProvidePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'query'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"打包分析"}},[t._v("打包分析")]),t._v(" "),s("p",[t._v("webpack-bundle-analyzer")]),t._v(" "),s("p",[t._v("webpack --profile --json > stats.json")]),t._v(" "),s("h3",{attrs:{id:"webpack性能优化"}},[t._v("webpack性能优化")]),t._v(" "),s("ol",[s("li",[t._v("跟上技术的迭代(Node, npm ,yarn) 要有最新的")]),t._v(" "),s("li",[t._v("尽可能少的用loader（loader范围要小）可以用 include 或者exclude指定")]),t._v(" "),s("li",[t._v("尽可能少的用plugin，如：dev环境不要压缩文件。 还要注意尽量使用官方推荐的性能比较好的，或者社区认可的插件。要保证插件的性能和可靠性")]),t._v(" "),s("li",[t._v("resolve参数要配置合理"),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resolve"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   extensions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'js'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'jsx'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   mainFiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'index'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'child'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定默认查找路径")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("使用Dllplugin指高打包速度（相同引用只打包一次）")]),t._v(" "),s("li",[t._v("控制文件大小 treeShaking splitChunksPlugin")]),t._v(" "),s("li",[t._v("thread-load paraller-webpack happypack 多进程打包")]),t._v(" "),s("li",[t._v("合理使用sourceMap 做map的时候会让打包变得非常慢\n"),s("blockquote",[s("p",[t._v("开发环境推荐： cheap-module-evel-source-map\n生产环境推荐： cheap-module-source-map 进行线上调试")])])]),t._v(" "),s("li",[t._v("使用stats分析打包结果")]),t._v(" "),s("li",[t._v("开发环境用webpackDevServer提升速度，开发环境中把没用的插件全删除")])]),t._v(" "),s("h3",{attrs:{id:"bundler是怎么实现的"}},[t._v("bundler是怎么实现的")]),t._v(" "),s("ol",[s("li",[t._v("引用fs")]),t._v(" "),s("li",[t._v("@babel/parser 转成抽象语法树")]),t._v(" "),s("li",[t._v("@babel/traverse 获取文件名，文件信息")]),t._v(" "),s("li",[t._v("@babel/preset-env 转码")]),t._v(" "),s("li",[t._v("运行环境隔离执行")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);