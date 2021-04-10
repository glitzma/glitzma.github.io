(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{547:function(e,r,o){"use strict";o.r(r);var t=o(25),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("a",{attrs:{href:"https://live.bilibili.com/record/R18x411w7gr?from=996000",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端圈分享的webpack优化实践"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"webpack打包流程"}},[e._v("webpack打包流程")]),e._v(" "),o("ol",[o("li",[e._v("根据配置文件找到入口文件")]),e._v(" "),o("li",[e._v("通过loader对入口文件进行解析")]),e._v(" "),o("li",[e._v("通过acorn解析js代码，生成ast语法树，根据语法树找到依赖文件，生成依赖图{id,filename,dependency,code}")]),e._v(" "),o("li",[e._v("根据依赖图打包生成chunk包")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("抽象语法树演示"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("可以通过importDeclaration下的source下的value获取引用模块。直到文件没有任何依赖时停止")]),e._v(" "),o("p",[e._v("耗时步骤：loader解析耗时、搜索耗时、打包耗时")]),e._v(" "),o("h3",{attrs:{id:"缩短解析时间"}},[e._v("缩短解析时间")]),e._v(" "),o("ol",[o("li",[e._v("rules.include exclude指写哪些文件需要与不需要解析")]),e._v(" "),o("li",[e._v("多进程加速loader解析时间\n因为happyPack作者已经不再维护，所以推荐使用"),o("code",[e._v("thread-loader")]),o("br"),e._v("\nput this loader in front of other loaders. the following loaders run in a worker pool.")])]),e._v(" "),o("p",[e._v("可以通过预热worker pool将指定模块载入缓存")]),e._v(" "),o("p",[e._v("To prevent the high delay when booting workers it possible to warmup the worker pool.")]),e._v(" "),o("p",[e._v("This boots the max number of workers in the pool and loads specified modules into the node.js module cache.")]),e._v(" "),o("p",[o("code",[e._v("cache-loader")]),e._v(" 也要放在最前面，如果与thread-loader同时的时候，建议thread-loader先开启。")]),e._v(" "),o("p",[e._v("开启webpack的cache")]),e._v(" "),o("p",[e._v("Cache the generated webpack modules and chunks to improve build speed.")]),e._v(" "),o("p",[o("code",[e._v("cache-loader")]),e._v(" 根据版本号文件名生成cacheKey做为文件的文件名，看文件是否存在，存在则通过对比mtime（modify time），如果相同return缓存，如果不同走下面的loader，它是一个轻量的，不对比内容的。\n"),o("code",[e._v("babel-loader")]),e._v(" 通过文件内、option、版本号生成cacheKey做为文件的文件名，读文件是否已经存在，存在则使用缓存，不存在用bable-core转义、zlib压缩、fs写入缓存，它根据文件内容来缓存。它不影响其它loader。")]),e._v(" "),o("h4",{attrs:{id:"webpack-loader详解点击"}},[o("a",{attrs:{href:"https://segmentfault.com/a/1190000018458388",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack loader详解点击"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("loader先从左往右执行它的pitch方法，再去执行它们的normal方法从右往左")]),e._v(" "),o("h3",{attrs:{id:"缩短搜索时间"}},[e._v("缩短搜索时间")]),e._v(" "),o("ol",[o("li",[e._v("resolve.module")]),e._v(" "),o("li",[e._v("resolve.alias 别名")]),e._v(" "),o("li",[e._v("resolve.extension 后缀")])]),e._v(" "),o("h3",{attrs:{id:"缩短打包时间"}},[e._v("缩短打包时间")]),e._v(" "),o("ol",[o("li",[e._v("生成缓存chunk\n当mode是development时默认配置cache:true")]),e._v(" "),o("li",[e._v("smaller == faster\n使用数量更少、体积更小的library。 在多页面程序中使用SplitChunksPlugin移除未引用代码")])]),e._v(" "),o("div",{staticClass:"language-$xslt extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("optimization:{\n    splitchunks: {\n        maxInitialRequesta:6,\n        ...\n    }\n}\n")])])]),o("h3",{attrs:{id:"其他"}},[e._v("其他")]),e._v(" "),o("p",[e._v("DLL 在webpack4性能提升的情况下，它已经作用不大了")]),e._v(" "),o("p",[e._v("noParse 不用解析的文件")]),e._v(" "),o("p",[e._v("IgnorePlugin 忽略语言文件之类的")])])}),[],!1,null,null,null);r.default=a.exports}}]);