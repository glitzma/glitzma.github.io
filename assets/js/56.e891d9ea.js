(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{355:function(s,a,t){"use strict";t.r(a);var o=t(2),e=Object(o.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"shadowsocks-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-go","aria-hidden":"true"}},[s._v("#")]),s._v(" Shadowsocks-go")]),s._v(" "),t("h4",{attrs:{id:"本脚本适用环境："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本脚本适用环境：","aria-hidden":"true"}},[s._v("#")]),s._v(" 本脚本适用环境：")]),s._v(" "),t("p",[s._v("系统支持：CentOS，Debian，Ubuntu\n内存要求：≥64M\n日期：2017 年 02 月 18 日")]),s._v(" "),t("h4",{attrs:{id:"关于本脚本："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于本脚本：","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于本脚本：")]),s._v(" "),t("p",[s._v("一键安装 Go 版的 shadowsocks 最新版本 1.2.1。与 Python 版不同的是，其客户端程序能使用多个服务端配置，本脚本安装的是服务端程序。\n友情提示：如果你有问题，请先参考这篇《Shadowsocks Troubleshooting》后再问。")]),s._v(" "),t("h4",{attrs:{id:"默认配置："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认配置：","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认配置：")]),s._v(" "),t("p",[s._v("服务器端口：自己设定（如不设定，默认为 8989）\n客户端端口：1080\n密码：自己设定（如不设定，默认为teddysun.com）")]),s._v(" "),t("h4",{attrs:{id:"客户端下载："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端下载：","aria-hidden":"true"}},[s._v("#")]),s._v(" 客户端下载：")]),s._v(" "),t("p",[s._v("https://github.com/shadowsocks/shadowsocks-windows/releases")]),s._v(" "),t("h4",{attrs:{id:"使用方法："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法：","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用方法：")]),s._v(" "),t("p",[s._v("使用root用户登录，运行以下命令：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wget --no-check-certificate -O shadowsocks-go.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-go.sh\nchmod +x shadowsocks-go.sh\n./shadowsocks-go.sh 2>&1 | tee shadowsocks-go.log\n安装完成后，脚本提示如下：\nCongratulations, Shadowsocks-go install completed!\nYour Server IP:your_server_ip\nYour Server Port:your_server_port\nYour Password:your_password\nYour Local Port:1080\nYour Encryption Method:aes-256-cfb\n\nWelcome to visit:https://teddysun.com/392.html\nEnjoy it!\n")])])]),t("h4",{attrs:{id:"卸载方法："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载方法：","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载方法：")]),s._v(" "),t("p",[s._v("使用 root 用户登录，运行以下命令：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./shadowsocks-go.sh uninstall\n")])])]),t("h4",{attrs:{id:"其他事项："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他事项：","aria-hidden":"true"}},[s._v("#")]),s._v(" 其他事项：")]),s._v(" "),t("p",[s._v("客户端配置的参考链接：https://teddysun.com/339.html\n安装完成后即已后台启动 Shadowsocks-go ，运行：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/etc/init.d/shadowsocks status\n")])])]),t("p",[s._v("可以查看 Shadowsocks-go 进程是否已经启动。\n本脚本安装完成后，已将 shadowsocks-go 加入开机自启动。")]),s._v(" "),t("h4",{attrs:{id:"使用命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用命令：","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用命令：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("启动：/etc/init.d/shadowsocks start\n停止：/etc/init.d/shadowsocks stop\n重启：/etc/init.d/shadowsocks restart\n状态：/etc/init.d/shadowsocks status\n")])])]),t("p",[s._v("多用户多端口配置文件示例：\n配置文件路径：/etc/shadowsocks/config.json")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "port_password":{\n         "8989":"password0",\n         "9001":"password1",\n         "9002":"password2",\n         "9003":"password3",\n         "9004":"password4"\n    },\n    "method":"aes-256-cfb",\n    "timeout":600\n}\n')])])])])},[],!1,null,null,null);a.default=e.exports}}]);