(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{586:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("TOC"),t._v(" "),a("h2",{attrs:{id:"webpack应用总结二"}},[t._v("webpack应用总结二")]),t._v(" "),a("h3",{attrs:{id:"module、chunk、bundle区别"}},[a("code",[t._v("module")]),t._v("、"),a("code",[t._v("chunk")]),t._v("、"),a("code",[t._v("bundle")]),t._v("区别")]),t._v(" "),a("ul",[a("li",[t._v("module --\x3e 各个源代码文件都是模块，webpack中一切都是模块")]),t._v(" "),a("li",[t._v("chunk --\x3e 多模块合并成的，如 entry、import、splitChunk。类似于内存中还未产出的代码块")]),t._v(" "),a("li",[t._v("bundle最终输出的文件，每个chunk都会产生一个bundle文件")])]),t._v(" "),a("p",[t._v("entry是webpack的入口文件可以按键名生成chunk名。\nimport可以生成一个chunk，默认引入到html中\n在optimization中定义splitChunks通过cacheGroups缓存分组并命名chunk，然后在htmlWebpackPlugin中引入或排除某个chunk文件。")]),t._v(" "),a("h3",{attrs:{id:"loader和plugins的区别"}},[t._v("loader和plugins的区别")]),t._v(" "),a("ul",[a("li",[t._v("loader模块转换器，如less --\x3e css、识别图片格式")]),t._v(" "),a("li",[t._v("plugins扩展插件，如htmlWebpackPlugin")])]),t._v(" "),a("p",[t._v("常用的laoder有哪些"),a("a",{attrs:{href:"https://www.webpackjs.com/loaders/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.webpackjs.com/loaders/"),a("OutboundLink")],1),t._v("\n常用的plugins有哪些"),a("a",{attrs:{href:"https://www.webpackjs.com/plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.webpackjs.com/plugins/"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"优化babel-loader"}},[t._v("优化babel-loader")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" /\\.js$/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'babel-loader?cacheDirectory'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有修改的es6代码不会重新编译")]),t._v("\n    include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" srcPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exclude: /node_modules/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("配置bable-loader时include 和exclude写一个，这样减少不必要代码")]),t._v(" "),a("h3",{attrs:{id:"ignoreplugin和noparse"}},[t._v("ignorePlugin和noParse")]),t._v(" "),a("p",[t._v("忽略掉不需要的插件。 比如jquery引入时如果不需要解析可以在noParse中声明")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    noParse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("/jquery/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不去解析jquery中的依赖库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"happypack"}},[t._v("happyPack")]),t._v(" "),a("ul",[a("li",[t._v("js单线程，开启多进程打包")]),t._v(" "),a("li",[t._v("提高构建速度（特别是多核cpu）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HappyPack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例")]),t._v("\n                use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack/loader?id=babel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" srcPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exclude: /node_modules/")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// happyPack 开启多进程打包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如何处理 .js 文件，用法和 Loader 配置中一样")]),t._v("\n    loaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader?cacheDirectory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),a("h3",{attrs:{id:"paralleluglifyplugin"}},[t._v("ParallelUglifyPlugin")]),t._v(" "),a("ul",[a("li",[t._v("webpack内置Uglify工具压缩js")]),t._v(" "),a("li",[t._v("js单线程，开启多线程更快")]),t._v(" "),a("li",[t._v("和happyPack同理")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ParallelUglifyPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-parallel-uglify-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins中配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParallelUglifyPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递给 UglifyJS 的参数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）")]),t._v("\n    uglifyJS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            beautify"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最紧凑的输出")]),t._v("\n            comments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除所有的注释")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        compress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除所有的 `console` 语句，可以兼容ie浏览器")]),t._v("\n            drop_console"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内嵌定义了但是只用到一次的变量")]),t._v("\n            collapse_vars"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提取出出现多次但是没有定义成变量去引用的静态值")]),t._v("\n            reduce_vars"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"关于开启多进程"}},[t._v("关于开启多进程")]),t._v(" "),a("p",[t._v("如果项目较大时，打包慢，开启多进程能提高速度。但如果项目小，打包快的情况使用，开启多进程会降低速度（进程开销），要按需使用。")]),t._v(" "),a("h3",{attrs:{id:"自动刷新"}},[t._v("自动刷新")]),t._v(" "),a("p",[t._v("修改代码后变更的代码显示到浏览器，如果用了webpack-dev-server时会watch自动开启自动刷新")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启监听，默认为 false")]),t._v("\n watchOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     ignored"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略哪些")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为 300ms")]),t._v("\n     aggregateTimeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认每隔1000毫秒询问一次")]),t._v("\n     poll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n")])])]),a("h3",{attrs:{id:"热更新"}},[t._v("热更新")]),t._v(" "),a("p",[t._v("正常的刷新，整个页面全部刷新，速度比较慢，而且状态会丢失。热更新的话，网页不刷新，新代码生效，状态不丢失。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一步引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HotModuleReplacementPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/lib/HotModuleReplacementPlugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二步")]),t._v("\n entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index: path.join(srcPath, 'index.js'),")]),t._v("\n         index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-dev-server/client?http://localhost:8080/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/hot/dev-server'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三步 在devServer中设置 开启")]),t._v("\nhot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("以上开启热更新，修改css样式时能热更新，且不刷新页面，但是修改js还是会刷新页面")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // 开启热更新之后的代码逻辑")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (module.hot) {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     module.hot.accept(['./math'], () => {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         const sumRes = sum(10, 30)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         console.log('sumRes in hot', sumRes)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     })")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),a("p",[t._v("上面指有指定的math模块代码修改时会回掉callback函数，显示结果。其它的都会刷新页面。")]),t._v(" "),a("p",[t._v("如果页面确实很复杂，状态很多的情况下可以开启热更新")]),t._v(" "),a("h3",{attrs:{id:"dllplugin动态链接库"}},[t._v("DllPlugin动态链接库")]),t._v(" "),a("ul",[a("li",[t._v("前端框架如Vue、React，体积大构建慢")]),t._v(" "),a("li",[t._v("比较稳定，不常升级版本")]),t._v(" "),a("li",[t._v("同一版本只需要构建一次不需要多次构建")]),t._v(" "),a("li",[t._v("webpack已经内置DllPlugin支持")]),t._v(" "),a("li",[t._v("（1）DllPlugin --\x3e 打包出dll文件（先预打包）")]),t._v(" "),a("li",[t._v("（2）DllReferencePlugin --\x3e 使用dll文件（无论做多少改动与升级，只要版本不升级文件不变就一直用那个结果）")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("无论配置不配置dllPlugin是对程序的源代码没有影响的。")])]),t._v(" "),a("p",[t._v("（1）、首先配置webpack.dll.js ，通过dll插件打包出dll文件")]),t._v(" "),a("details",[a("summary",[t._v("点击展开配置示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DllPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/lib/DllPlugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" srcPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./paths'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JS 执行入口文件")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 React 相关模块的放到一个单独的动态链接库")]),t._v("\n    react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也就是 entry 中配置的 react 和 polyfill")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].dll.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的文件都放到 dist 目录下")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" distPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之所以在前面加上 _dll_ 是为了防止全局变量冲突")]),t._v("\n    library"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_dll_[name]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lib全局变量名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接入 DllPlugin")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DllPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态链接库的全局变量名称，需要和 output.library 中保持一致")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 例如 react.manifest.json 中就有 "name": "_dll_react"')]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_dll_[name]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描述动态链接库的 manifest.json 文件输出时的文件名称")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].manifest.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v('在package.json中配置script。设置"dll": "webpack --config build/webpack.dll.js"')]),t._v(" "),a("p",[t._v("执行npm run dll")]),t._v(" "),a("p",[t._v("此时dist中会生成react.dll.js和react.manifest.json")]),t._v(" "),a("p",[t._v("（2）、dll的用法：如下\n首先在index.html引用react.dll.js文件（产出的js内容 ）也可以动态标签方式引入文件。")]),t._v(" "),a("p",[t._v("在dev环境的plugin中AddAssetHtmlPlugin可以将文件动态插入到html中")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddAssetHtmlPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" filepath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react.dll.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("然后配置manifest的地址")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一，引入 DllReferencePlugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DllReferencePlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/lib/DllReferencePlugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" srcPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二，不要再转换 node_modules 的代码")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三，在plugins中，告诉 Webpack 使用了哪些动态链接库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DllReferencePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描述 react 动态链接库的文件内容")]),t._v("\n       manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react.manifest.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"webpack-优化构建速度"}},[t._v("webpack 优化构建速度")]),t._v(" "),a("p",[t._v("可用于生产环境的有哪些？")]),t._v(" "),a("ul",[a("li",[t._v("优化babel-loader 缓存可以用开发环境也可用于生产环境")]),t._v(" "),a("li",[t._v("IgnorePlugin 可以避免一些模块的引入")]),t._v(" "),a("li",[t._v("noParse webpack精准过滤不需要解析的文件")]),t._v(" "),a("li",[t._v("happyPack开启多进程打包会快一些")]),t._v(" "),a("li",[t._v("parallelUglifyPlugin 压缩代码")])]),t._v(" "),a("p",[t._v("不可用于生产环境的配置有哪些？")]),t._v(" "),a("ul",[a("li",[t._v("自动刷新")]),t._v(" "),a("li",[t._v("热更新")]),t._v(" "),a("li",[t._v("dllPlugin")])]),t._v(" "),a("h3",{attrs:{id:"webpack-性能优化"}},[t._v("webpack 性能优化")]),t._v(" "),a("p",[t._v("目标：")]),t._v(" "),a("ul",[a("li",[t._v("体积更小")]),t._v(" "),a("li",[t._v("合理分包，不重复加载")]),t._v(" "),a("li",[t._v("速度更快，内存使用更少")])]),t._v(" "),a("p",[t._v("实践：")]),t._v(" "),a("ul",[a("li",[t._v("小图片base64编码 用url-loader设置limit")]),t._v(" "),a("li",[t._v("bundle加hash值，如果没有变的文件hash不变，加载时会命中缓存。")]),t._v(" "),a("li",[t._v("懒加载，先把基本文件加载出来，对于大的文件可以异步加载")]),t._v(" "),a("li",[t._v("提取公共代码，在optimization中配置splitChunks分割代码块")]),t._v(" "),a("li",[t._v("ignorePlugin 如：引moment库，里面有多语言忽略掉，自己引入需要的语言")]),t._v(" "),a("li",[t._v("使用cdn加速。设置output的publicPath，然后将文件上传到cdn服务器上去。如果是图片的话在配置url-loader时在options中配置publicPatch")]),t._v(" "),a("li",[t._v("使用Production，设置mode为production时会自动压缩代码。webpack4.x之后出现的。如果觉得慢可以用ParallelUglifyPlugin开启多线程压缩，根据自已情况如果已经很快了就不要添加了。mode=production的时候，vue、react会自动删除掉调试代码（如开发环境的warning）。production状态会自动开启tree-shaking(必须es6 module才能让tree-shaking生效，如果用commonjs就不行)")]),t._v(" "),a("li",[t._v("使用Scope Hosting")])]),t._v(" "),a("h3",{attrs:{id:"es6-module和commonjs的区别"}},[t._v("es6 module和commonjs的区别")]),t._v(" "),a("ul",[a("li",[t._v("前端常用的是es6 module，nodejs常用的是commonjs")]),t._v(" "),a("li",[t._v("es6 module是静态引入，是编译时引入")]),t._v(" "),a("li",[t._v("commonjs是动态引入，执行时引入")]),t._v(" "),a("li",[t._v("只有es6 module静态引用才能做静态分析，实现tree-shaking")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commonjs方式引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../config/api.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isDev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以执行时动态引入")]),t._v("\n  apiList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../config/api_dev.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// es6 module方式引入")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" apiList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../config/api.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isDev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译时报错，因为只能静态引入")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" apiList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../config/api.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"scope-hosting"}},[t._v("scope Hosting")]),t._v(" "),a("p",[t._v("把多个js的内容放到一个函数中去，这样作用域的数量更少一些，耗费的内存更少一些，也不用频繁的跨作用域去调用")]),t._v(" "),a("ul",[a("li",[t._v("代码体积更小")]),t._v(" "),a("li",[t._v("创建函数作用域更少")]),t._v(" "),a("li",[t._v("代码可读性更好")])]),t._v(" "),a("p",[t._v("配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ModuleConcatenationPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/lib/optimize/ModuleConcatenatoinPlugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对npm中的第三方模块优先采用jsnext：main中指向的es6 module模块化语法文件")]),t._v("\n    mainFields"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsnext:main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启scope hosting")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleConcatenationPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n")])])]),a("h3",{attrs:{id:"为什么要进行打包和构建"}},[t._v("为什么要进行打包和构建")]),t._v(" "),a("ul",[a("li",[t._v("体积更小（Tree-shaking、压缩、合并），加载更快")]),t._v(" "),a("li",[t._v("编译高级语言或语法（TS、es6+，模块化、scss）")]),t._v(" "),a("li",[t._v("兼容性和错误提示（Pollyfill、postcss、eslint）")]),t._v(" "),a("li",[t._v("统一高效的开发环境")]),t._v(" "),a("li",[t._v("统一的构建流程和产出标准")]),t._v(" "),a("li",[t._v("集成公司构建规范（提测、上线等）")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);