(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{470:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("TOC"),a._v(" "),s("h2",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),s("ol",[s("li",[a._v("组件库，公司内部使用")]),a._v(" "),s("li",[a._v("npm公开库乱发东西不太好，在私有库测试发布自己的包")])]),a._v(" "),s("h2",{attrs:{id:"用verdaccio搭建私服"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用verdaccio搭建私服"}},[a._v("#")]),a._v(" 用verdaccio搭建私服")]),a._v(" "),s("p",[a._v("网上看到sinopia，在github上查了一下，已经多年没有维护。 而verdaccio是sinopia的分支，如果想要深入了解可以去看看源码和详细介绍")]),a._v(" "),s("h3",{attrs:{id:"_1-环境需要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境需要"}},[a._v("#")]),a._v(" 1. 环境需要")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1. 安装node环境\n2. 安装verdaccio\n")])])]),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install verdaccio -g\n")])])]),s("h3",{attrs:{id:"_2-个性verdaccio配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-个性verdaccio配置"}},[a._v("#")]),a._v(" 2. 个性verdaccio配置")]),a._v(" "),s("p",[a._v("修改配置的目的就是让我们的私库可以通过公网的ip访问，首先查看npm全局安装包的所在位置：")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm root -g\n\n/usr/local/node/node_modules\n")])])]),s("p",[a._v("其中/usr/local/node/node_modules是我们全局安装的地址。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("pwd\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("node_modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("verdaccio"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("conf\n")])])]),s("p",[a._v("下面的 default.yaml中加入可访问端口")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim default.yaml\n")])])]),s("p",[a._v("然后对 default.yaml 问题")]),a._v(" "),s("h3",{attrs:{id:"_3-对外开放4873端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-对外开放4873端口"}},[a._v("#")]),a._v(" 3.对外开放4873端口")]),a._v(" "),s("p",[a._v("verdaccio继承了sinopia，端口号4873依然不变。")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("firewall-cmd --state                # 先查看防火墙状态，\nservice firewalld start              # 开启防火墙:\nfirewall-cmd --zone=public --add-port=4873/tcp –permanent  #开放4873端口\nfirewall-cmd --reload              #重新载入\nfirewall-cmd --zone=public --query-port=4873/tcp    #查看是否添加成功\n")])])]),s("p",[a._v("在配置的最后一行加入")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("listen: 0.0.0.0:4873\n")])])]),s("p",[a._v("然后:wq保存并退出vim模式。")]),a._v(" "),s("h4",{attrs:{id:"入口文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入口文件"}},[a._v("#")]),a._v(" 入口文件")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" CustomSwitch "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./custom-switch.vue'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* istanbul ignore next */")]),a._v("\nCustomSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CustomSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" CustomSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" CustomSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h4",{attrs:{id:"改下入-webpack-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改下入-webpack-config-js"}},[a._v("#")]),a._v(" 改下入 webpack.config.js")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" webpack "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'webpack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NODE_ENV")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NODE_ENV")]),a._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 修改打包入口")]),a._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NODE_ENV")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'development'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/main.js'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./packages/switch/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/dist/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'custom-switch.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    library"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'custom-switch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 指定的就是你使用require时的模块名")]),a._v("\n    libraryTarget"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'umd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的")]),a._v("\n    umdNamedDefine"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("激动人心的时刻到了，切换到项目根目录运行 npm run build 看有没有生成dist目录，我这里是运行成功了")]),a._v(" "),s("h2",{attrs:{id:"发布到私服"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布到私服"}},[a._v("#")]),a._v(" 发布到私服")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("npm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" registry http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.29")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("39")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4873")]),a._v(" \n\nnpm install xxxx \n")])])]),s("p",[a._v("npm install 发布的名称")]),a._v(" "),s("p",[a._v("还原镜像")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("npm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" registry http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("npmjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("org　\n")])])]),s("h2",{attrs:{id:"使用pm2守护verdaccio进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用pm2守护verdaccio进程"}},[a._v("#")]),a._v(" 使用pm2守护verdaccio进程")]),a._v(" "),s("p",[a._v("常用命令")]),a._v(" "),s("ul",[s("li",[a._v("安装：npm install pm2 -g")]),a._v(" "),s("li",[a._v("启动：pm2 start verdaccio")]),a._v(" "),s("li",[a._v("停止：pm2 stop verdaccio")]),a._v(" "),s("li",[a._v("重启：pm2 restart verdaccio")]),a._v(" "),s("li",[a._v("删除应用：pm2 delete verdaccio")]),a._v(" "),s("li",[a._v("查看日志：pm2 logs verdaccio")])]),a._v(" "),s("h3",{attrs:{id:"启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[a._v("#")]),a._v(" 启动服务")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pm2 start verdaccio \n")])])]),s("h3",{attrs:{id:"展示页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展示页面"}},[a._v("#")]),a._v(" 展示页面")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("http://localhost:4873/\n")])])]),s("h3",{attrs:{id:"添加用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加用户"}},[a._v("#")]),a._v(" 添加用户")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm adduser --registry http://192.168.XX.XX:4873        //后面是我们的私服地址\n类似如下：\nUsername: lk\nPassword: \nEmail: (this IS public) lk@qq.com\nLogged in as rong on http://192.168.XX.XX:4873/.\n")])])]),s("h3",{attrs:{id:"发布包到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布包到本地"}},[a._v("#")]),a._v(" 发布包到本地")]),a._v(" "),s("p",[a._v("发布包到本地其实也npm发包是一样的只是加了--registry http://loaclhost:4873")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm publish --register http://localhot:4873\n")])])]),s("p",[a._v("具体的npm发包配置，可以自行查阅其它文档，这里就不在讲解。")]),a._v(" "),s("h2",{attrs:{id:"结束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[a._v("#")]),a._v(" 结束")]),a._v(" "),s("p",[a._v("经过上面的流程下来，就可以用自己的私有包了")]),a._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install xxx --register http://localhot:4873\n")])])]),s("h2",{attrs:{id:"引入文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入文件"}},[a._v("#")]),a._v(" 引入文件")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("Import xxx "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'名字/路径'")]),a._v("\n")])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);