(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{549:function(e,n,s){"use strict";s.r(n);var t=s(7),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"vue-cli-使用-json-server-搭建-mock-服务器"}},[e._v("vue-cli  使用 JSON Server 搭建 Mock 服务器")]),e._v(" "),s("p",[e._v("JSON Server 是一个创建伪RESTful服务器的工具，具体使用方法可以看官方文档，这里直接讲在vue-cli 中的用法。")]),e._v(" "),s("h3",{attrs:{id:"配置流程"}},[e._v("配置流程")]),e._v(" "),s("p",[e._v("全局安装 $ npm install -g json-server\n项目目录下创建 mock 文件夹\nmock 文件夹下添加 db.json 文件，内容如下")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "posts": [\n    { "id": 1, "title": "json-server", "author": "typicode" }\n  ],\n  "comments": [\n    { "id": 1, "body": "some comment", "postId": 1 }\n  ],\n  "profile": { "name": "typicode" }\n}\n')])])]),s("p",[e._v("package.json 添加命令")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    "mock": "json-server --watch mock/db.json",\n    "mockdev": "npm run mock & npm run dev"\n')])])]),s("p",[e._v("启动 mock 服务器")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm run mock 命令 运行 mock server\n\n访问 http://localhost:3000/\n发现 db.json 下第一级 json 对象被解析成为可访问路径\nGET请求具体路径 如：http://localhost:3000/posts 可获取数据\n")])])]),s("h2",{attrs:{id:"faker-js-批量生成伪数据"}},[e._v("faker.js 批量生成伪数据")]),e._v(" "),s("p",[e._v("如果需要大量的伪数据，手动构造比较费时费力，可以使用 faker.js 批量生成。faker.js 的具体使用参见官方文档，这里做一个示例。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('```\n$ cnpm install faker -G 全局安装 faker\nmock 目录下创建 faker-data.js，内容如下\n```\n\n```\nmodule.exports = function () {\n    var faker = require("faker");\n    faker.locale = "zh_CN";\n    var _ = require("lodash");\n    return {\n        people: _.times(100, function (n) {\n            return {\n                id: n,\n                name: faker.name.findName(),\n                avatar: faker.internet.avatar()\n            }\n        }),\n        address: _.times(100, function (n) {\n            return {\n                id: faker.random.uuid(),\n                city: faker.address.city(),\n                county: faker.address.county()\n            }\n        })\n    }\n}\n```\n\n$ json-server mock/faker-data.js 在 json server 中使用 faker\n请求 http://localhost:3000/address 可以获取到随机生成的100组伪数据\n')])])]),s("h2",{attrs:{id:"添加中间件"}},[e._v("添加中间件")]),e._v(" "),s("p",[e._v("json server 使用 RESTful 架构，GET请求可以获取数据，POST 请求则是添加数据。\n在开发过程中，有时候想直接模拟获取POST请求返回结果，可以添加 express 中间件 将POST请求转为GET请求。")]),e._v(" "),s("p",[e._v("mock 目录下创建 post-to-get.js，内容如下")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('module.exports = function (req, res, next) {\n  req.method = "GET";\n  next();\n}\n')])])]),s("p",[e._v("启动命令添加运行中间件 --m mock/post-to-get.js")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"mock": "json-server --watch mock/db.json --m mock/post-to-get.js",\n')])])]),s("p",[e._v("重新启动服务，POST请求就被转换为GET请求了")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("文章借鉴自：https://www.jianshu.com/p/ccd53488a61b\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);