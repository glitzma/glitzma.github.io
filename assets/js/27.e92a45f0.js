(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{569:function(e,n,t){"use strict";t.r(n);var s=t(4),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"windows下管理多个版本nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows下管理多个版本nodejs"}},[e._v("#")]),e._v(" windows下管理多个版本nodejs")]),e._v(" "),t("h3",{attrs:{id:"多版本node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多版本node"}},[e._v("#")]),e._v(" 多版本node")]),e._v(" "),t("p",[e._v("工作中我们可能需要用到一些工具，但这些工具依赖不同版本的node环境，那我们需要来为的切换node的环境吗， window msi安装的用户需要卸载重装的循环吗？ 一切都变得很好，只是因为有了GNVM\nwhat is GNVM\nNode.js version manager on Windows by GO(一个windows上用Go语言实现的node版本管理工具)")]),e._v(" "),t("h3",{attrs:{id:"怎样获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎样获取"}},[e._v("#")]),e._v(" 怎样获取")]),e._v(" "),t("p",[e._v("● 下载")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("32-bit | 64-bit Box.com 源\n32-bit | 64-bit Github.com 源 https://github.com/Kenshin/gnvm-bin/blob/master/64-bit/gnvm.exe?raw=true\n")])])]),t("p",[e._v("● 源代码生成")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("○ go语言用户\ngo get github.com/Kenshin/gnvm\n○ git 用户\ngit clone git@github.com:Kenshin/gnvm-bin.git\n○ curl 用户\n// 32位curl -L https://github.com/Kenshin/gnvm-bin/blob/master/32-bit/gnvm.exe?raw=true -o gnvm.exe// 64位curl -L https://github.com/Kenshin/gnvm-bin/blob/master/64-bit/gnvm.exe?raw=true -o gnvm.exe\n")])])]),t("h3",{attrs:{id:"怎么安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么安装"}},[e._v("#")]),e._v(" 怎么安装")]),e._v(" "),t("p",[e._v("● 安装过node且已加入环境变量把下载下来的gnvm.exe放到node.exe所在的目录下\n● 没有安装过node把gnvm.exe放到自定义的一个目录下，并把这个目录添加到环境变量path中\n然后打开命令行，运行gnvm version输出Current version x.x.x则表示安装成功\nnote:")]),e._v(" "),t("blockquote",[t("p",[e._v("通过图形界面设置的环境变量需要在确定并关掉环境变量设置窗口后打开的cmd中才会生效。")])]),e._v(" "),t("h3",{attrs:{id:"使用gnvm安装node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用gnvm安装node"}},[e._v("#")]),e._v(" 使用gnvm安装node")]),e._v(" "),t("h5",{attrs:{id:"gnvm的命令集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnvm的命令集"}},[e._v("#")]),e._v(" gnvm的命令集")]),e._v(" "),t("p",[e._v("Usage:  gnvm  gnvm [command]Available Commands:  version                   :: 输出当前gnvm的版本  install                   :: 安装指定版本的nodejs  uninstall                 :: 卸载指定版本的nodejs  use                       :: 切换使用已安装的指定版本的nodejs  update                    :: Update latest node.exe  ls                        :: 显示所有已安装的nodejs版本  node-version              :: 显示 的nodejs版本  config                    :: Setter and getter registry  help [command]            :: Help about any command")]),e._v(" "),t("h5",{attrs:{id:"安装前可能要做一些资源源的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装前可能要做一些资源源的配置"}},[e._v("#")]),e._v(" 安装前可能要做一些资源源的配置")]),e._v(" "),t("blockquote",[t("p",[e._v("gnvm config INIT Config file C:\\Program Files\\nodejs\\.gnvmrc init success.\ngnvm config registry http://dist.u.qiniudn.comSet success, registry new value is http://dist.u.qiniudn.com/\ngnvm update latest> gnvm ls> gnvm node-versionNode.exe latest version is 0.12.2.Node.exe global version is 0.10.25.\nglobal 当前node.exe版本 == node -v.latest 已安装的可用node.exe版本，可通过gnvm use x.x.x切换成global.\ngnvm install 0.11.1 0.11.2 0.11.3")])]),e._v(" "),t("h5",{attrs:{id:"批量安装多个nodejs版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量安装多个nodejs版本"}},[e._v("#")]),e._v(" 批量安装多个nodejs版本")]),e._v(" "),t("blockquote",[t("p",[e._v("gnvm use 0.11.1")])]),e._v(" "),t("h5",{attrs:{id:"通过use使用指定nodejs版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过use使用指定nodejs版本"}},[e._v("#")]),e._v(" 通过use使用指定nodejs版本")]),e._v(" "),t("blockquote",[t("p",[e._v("gnvm uninstall 0.11.1")])]),e._v(" "),t("h5",{attrs:{id:"卸载指定node版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载指定node版本"}},[e._v("#")]),e._v(" 卸载指定node版本")]),e._v(" "),t("p",[e._v("最好使用gnvm use x.x.x切换版本\n我们可以愉快的安装和使用依赖各种nodejs版本的工具或库了")]),e._v(" "),t("h3",{attrs:{id:"相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[e._v("#")]),e._v(" 相关链接")]),e._v(" "),t("p",[e._v("gnvm官网: http://ksria.com/gnvm/\ngnvm github: https://github.com/kenshin/gnvm")]),e._v(" "),t("p",[e._v("文章地址：http://shalles.github.io/blog/tools/2015/04/27/windows-nodejs-version-controller")])])}),[],!1,null,null,null);n.default=a.exports}}]);