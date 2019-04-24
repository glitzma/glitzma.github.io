(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{365:function(e,t,o){"use strict";o.r(t);var r=o(2),d=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"fiddler原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fiddler原理","aria-hidden":"true"}},[e._v("#")]),e._v(" Fiddler原理")]),e._v(" "),o("p",[e._v("Fiddler 是目前最强大最好用的 Web 调试工具之一，它能记录所有客户端和服务器的http和https请求，允许你监视，设置 CGI 请求的断点，甚至修改输入输出数据。同类的工具还有httpwatch，firebug，wireshark，google审查元素。与这些基于网页浏览器的工具不同，fiddler是一个富客户端桌面工具，不仅能监听浏览器对网页的请求和对浏览器的响应（http和https请求），而且可以监听其他程序（比如java桌面应用）的http请求（当然需要额外的设置，在此不赘述）。另外，值得一提的是，即便在浏览器的调试中，它也能胜任其他工具，比如IE浏览器，当我们需要弹出一个模式对话框（modalDialog）时，这些浏览器监听插件就派不上用场了，还得fiddler出场。如果你还未曾听说过这个工具，请先阅读这篇科普文：《WEB 调试利器：Fiddler 教程》")]),e._v(" "),o("p",[e._v("fiddler 和常见的底层抓包（网卡） 工具不一样（如 wincap、wireshark），它是在 web server 和 web browser 之间搭了一层 proxy，所有的请求都会经过它\n##一些常用技巧介绍：")]),e._v(" "),o("p",[e._v("（1）Fiddler中设置断点修改Request")]),e._v(" "),o("p",[e._v("第一种：打开Fiddler 点击Rules-> Automatic Breakpoint  ->Before Requests(这种方法会中断所有的会话)\n如何消除命令呢？  点击Rules-> Automatic Breakpoint  ->Disabled\n第二种:  在命令行中输入命令:  bpu www.baidu.com   (这种方法只会中断www.baidu.com)\n如何消除命令呢？  在命令行中输入命令 bpu")]),e._v(" "),o("p",[e._v("（2）Fiddler中设置断点修改Response")]),e._v(" "),o("p",[e._v("第一种：打开Fiddler 点击Rules-> Automatic Breakpoint  ->After Response  (这种方法会中断所有的会话)\n如何消除命令呢？  点击Rules-> Automatic Breakpoint  ->Disabled\n第二种:  在命令行中输入命令:  bpafter www.baidu.com   (这种方法只会中断www.baidu.com)\n如何消除命令呢？  在命令行中输入命令 bpafter,")]),e._v(" "),o("p",[e._v("（3）自动重定向 AutoResponder 到本地文件")]),e._v(" "),o("p",[e._v("创建重定向规则，例如将目标请求是这个js的HTTP请求重定向到本地文件")]),e._v(" "),o("p",[e._v("请参考阿里 UED 的这篇：使用Fiddler提高前端工作效率 (实例篇)")]),e._v(" "),o("p",[e._v("http://www.aliued.cn/2010/04/25/use-fiddler-to-improve-efficiency-of-front-development-example.html")]),e._v(" "),o("p",[e._v("（4）过滤会话 session list filter：")]),e._v(" "),o("p",[e._v("比如你可能在debug某些网页时，会遇到上百个请求，看的你眼花缭乱，这是你可以启用 fiddler 强大的过滤机制，还可以依据正则来过滤，\n（5）请求构建器（Request Builder）、对两个数据流进行比较")]),e._v(" "),o("p",[e._v("（6）文本编码和解码：开启Tools -> Text Encode/Decode")]),e._v(" "),o("p",[e._v("（7）模拟user-agent：Rules->Customize Rules、模拟慢速网络")]),e._v(" "),o("p",[e._v("（8）fiddler 打印 cgi log：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("       http://my.oschina.net/leejun2005/blog/65259\n")])])]),o("p",[e._v("（9）fiddler-使用技巧：")]),e._v(" "),o("pre",[o("code",[e._v("     http://vdisk.weibo.com/s/CcitC7ClCn_vr\n\n     http://vdisk.weibo.com/s/CcitC7ClCopIM\n")])]),e._v(" "),o("p",[e._v("（10）FiddlerScript：")]),e._v(" "),o("pre",[o("code",[e._v("       http://fiddler2.com/blog/blog/2013/07/15/understanding-fiddlerscript\n")])]),e._v(" "),o("p",[e._v("（11）Filters Reference：")]),e._v(" "),o("pre",[o("code",[e._v("        http://fiddler2.com/documentation/KnowledgeBase/Filters\n")])]),e._v(" "),o("p",[e._v("（12）自定义列：Add Columns to the Web Sessions List：")]),e._v(" "),o("pre",[o("code",[e._v("可以看上图的蓝色方框就是自定义列\n")])]),e._v(" "),o("p",[e._v("http://fiddler2.com/documentation/KnowledgeBase/FiddlerScript/AddColumns")]),e._v(" "),o("p",[e._v("举个栗子：")]),e._v(" "),o("p",[e._v('在 rule规则脚本的 static function Main() 函数中添加 3 列：远程ip、referer、ReturnedCookie\n```\n// The Main() function runs everytime your FiddlerScript compiles\nstatic function Main() {\nvar today: Date = new Date();\nFiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;')]),e._v(" "),o("pre",[o("code",[e._v('      FiddlerObject.UI.lvSessions.AddBoundColumn("remoteIP", 200, "X-HOSTIP");\n      FiddlerObject.UI.lvSessions.AddBoundColumn("Referer", 200, "@request.Referer");\n      FiddlerObject.UI.lvSessions.AddBoundColumn("ReturnedCookie", 200, "@response.Set-Cookie");\n\n      // Uncomment to add a "Server" column containing the response "Server" header, if present\n      // UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");\n\n      // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...\n      // UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot");\n  }\n  ```\n')])]),e._v(" "),o("p",[e._v("（13）常用fiddler命令：")]),e._v(" "),o("p",[e._v("选择类：?text、>size、<size、=status、@host、\nblod text、select、allbut、keeponly\n断点类：bpafter、bps、bpv、bpm、bpu\n控制类：hide、start、stop、show、quit\n其他：cls/clear、dump、g/go、help、urlreplace")]),e._v(" "),o("p",[e._v("(14)fiddler可以做为代理让手机有权限访问配置host才能访问的内网内容 remote\n##注意的问题及解决方法")]),e._v(" "),o("p",[e._v("（1）chrome和firefox浏览器无法被监听")]),e._v(" "),o("p",[e._v("fiddler安装之后，默认会在IE浏览器中安装一个fiddler的插件，所以它对IE及国内基于IE内核的各类浏览器都能实现监听，但其他内核的浏览器无法被监听。\n解决办法：禁用chrome和firefox中具有代理功能的插件，比如我的chrome安装了switchSharp，禁用它或选择“使用系统代理设置”，或在switchSharp中新配置一个代理项（比如名为fiddler，用于指向代理127.0.0.1，端口8888，如下图），即可实现监听。")]),e._v(" "),o("p",[e._v("（2）无法代理本地web服务器的访问请求")]),e._v(" "),o("p",[e._v("使用fiddler的时候，我们更多的是基于本地程序的调试，可惜fiddler捕捉不了本地（localhost或127.0.0.1）的http请求。难道fiddler就束手无策了吗？当然不是。\n一般我们访问安装在本地的服务器程序时，使用的localhost或127.0.0.1，默认会绕过代理，直接访问目标服务器，通过fiddler特有的请求方式，可以使本地请求及响应都被fiddler拦截。")]),e._v(" "),o("p",[e._v("方法一：在localhost后增加.fiddler\n比如请求http://localhost:8080改为http://localhost.fiddler:8080即可\n方法二：更简单，在localhost或127.0.0.1后增加一个点即可\n比如http://localhost.:8080")]),e._v(" "),o("p",[e._v("具体请参考：http://www.ichatter.cn/2013/06/19/666/")]),e._v(" "),o("p",[e._v("（3）Fiddler不能监听Java HttpURLConnection请求，请看：")]),e._v(" "),o("p",[e._v("http://www.cnblogs.com/tt-0411/archive/2012/03/18/2404355.html")]),e._v(" "),o("p",[e._v("http://stackoverflow.com/questions/8549749/how-to-capture-https-with-fiddler-in-java")]),e._v(" "),o("p",[e._v("（4）Fiddler 不能监听、捕获 python urllib2 proxy、ProxyHandler 的问题：")]),e._v(" "),o("p",[e._v('In Fiddler2, go to the page Tools->Fiddler Options ...->Connections, remove the trailing semicolon from the value in the "IE should bypass Fiddler for ..." field and restart Fiddler2.')]),e._v(" "),o("p",[e._v("http://stackoverflow.com/questions/7681305/fiddler-does-not-capture-my-scripts-requests")]),e._v(" "),o("p",[e._v("也就是说，去掉 <-loopback> 后面的那个分号，保存然后重启你的 fiddler 即可。")]),e._v(" "),o("p",[e._v("文章出处："),o("a",{attrs:{href:"https://my.oschina.net/leejun2005/blog/151103"}},[e._v("https://my.oschina.net/leejun2005/blog/151103")])])])},[],!1,null,null,null);t.default=d.exports}}]);