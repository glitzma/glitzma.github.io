(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{396:function(e,t,n){"use strict";n.r(t);var a=n(3),i=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"nexttick"}},[e._v("nextTick")]),e._v(" "),t("p",[e._v("nextTick排在当前队列的底部")]),e._v(" "),t("p",[e._v("setTimeout 排在下一个队列的顶部")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("process.nextTick(function(){\nconsole.log('a')\n    process.nextTick(function(){\n    console.log('b')\n    })\n})\n")])])]),t("p",[e._v("setImmediate 比io 异步高。比setTimeout 优先级要低")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// nextTick>setTimeout>setImmediate>异步io\n")])])]),t("h2",{attrs:{id:"模块"}},[e._v("模块")]),e._v(" "),t("p",[e._v("require")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if(是否在文件模板缓存区中)｛\n//是\n返回extend\n｝else{\n    if(是否原生模块){\n        //是\n        if(是否在原生模块缓存区中){\n            //否\n            1.加载原生模块\n            2.缓存原生模块\n        }else{\n            //是\n            返回extend\n        }\n    }esle{\n        //否\n        1.查找文件模块\n        2.根据扩展名载入文件模块\n        3.缓存文件模块\n        4.返回extend\n    }\n}\n")])])]),t("h5",{attrs:{id:"文件的查找"}},[e._v("文件的查找")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("开始查找文件\n\n1.查找已缓存路径\n2.尝试直接查找该文件\n3.尝试添加扩展名后查找该文件\n4.尝试根据包查找该文件\n5.从包描述文件获取文名 (main入口)\n6.查找该目录下的index(js/node)\n")])])]),t("h5",{attrs:{id:"包"}},[e._v("包")]),e._v(" "),t("p",[e._v("在nodejs中通过包来对一级具有相互依赖关系的模块进行统一管理。一个包就是一个目录。")]),e._v(" "),t("ul",[t("li",[e._v("package.json包描述文件")]),e._v(" "),t("li",[e._v("bin二进制")]),e._v(" "),t("li",[e._v("lib存放javascript文件")]),e._v(" "),t("li",[e._v("doc说明文档")]),e._v(" "),t("li",[e._v("test单元测试和其它测试")])]),e._v(" "),t("h5",{attrs:{id:"npm包管理"}},[e._v("npm包管理")]),e._v(" "),t("ul",[t("li",[e._v("npm search xxx  查找包")]),e._v(" "),t("li",[e._v("npm view gulp 查看包")]),e._v(" "),t("li",[e._v("npm install gulp 安装包")]),e._v(" "),t("li",[e._v("npm install -g express-generator 全局安装包\nnpm config ls 列出所有的配置\nprefix 全局安装目录\ncliconfig 命令行配置文件\nuserconfig 用户配置文件\nbuiltin 内置配置文件\nnpm root -g 查看全局路径")]),e._v(" "),t("li",[e._v('npm config set prefix "d:\\global" 修改全局路径')]),e._v(" "),t("li",[e._v("npmlist 显示当前目录下所有包")]),e._v(" "),t("li",[e._v("npmlist -g 显示全局下所有包")]),e._v(" "),t("li",[e._v("npm unistall gulp 卸载本地版本")]),e._v(" "),t("li",[e._v("npm unistall gulp -g 卸载全局下的包")]),e._v(" "),t("li",[e._v("npm update gulp 更新本地gulp")]),e._v(" "),t("li",[e._v("npm update -g gulp 更新全局下的gulp")]),e._v(" "),t("li",[e._v("npm update 更新当前目录下所有的包")]),e._v(" "),t("li",[e._v("npm shrinkwrap  使版本不升级 利用shrinkwrap锁定依赖版本")]),e._v(" "),t("li",[e._v("npm prune 移除掉不在package.json中的模块")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/aafd6f198cd7",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用shrinkwrap锁定依赖版本"),t("OutboundLink")],1)]),e._v(" "),t("h6",{attrs:{id:"npm获取配置的6种方式-优先级由高到低"}},[e._v("npm获取配置的6种方式，优先级由高到低")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("命令行参数, --proxy http://server:port 即将proxy的值设为http://server:port\n环境变量，以npm_config_为前缀的环境变量将会被认为是npm的配置属性。如设置proxy可以加入这样的环境变量npm_config\n用户配置文件。可以通过npm config get userconfig查看文件路径，如果是mac系统的话默认路径就是$HOME/.npmrc.\n全局配置文件。可以npm config get globalconfig查看文件路径，mac系统的默认路径是/usr/local/etc/npmrc\n内置配置文件。安装npm的目录的的npmrc文件\n默认配置。 npm本身有默认配置参数，如果以上5条都没设置，则npm会使用默认参数。\n为npm设置代理\n- npm config set proxy htpp://server:port\n")])])]),t("p",[e._v("npm add user 输入用户名邮箱注册 发布包")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009315989",target:"_blank",rel:"noopener noreferrer"}},[e._v("发布包及一些处理"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"buffer-对象进行二进制数据处理"}},[e._v("buffer 对象进行二进制数据处理")]),e._v(" "),t("ul",[t("li",[e._v("缓存区Buffer是暂时存放输入输出数据的一段内存")]),e._v(" "),t("li",[e._v("JS语言自身只有字符串数据类型，没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据")]),e._v(" "),t("li",[e._v("NodeJS提供了一个Buffer对象来提供对二进制数据的操作")]),e._v(" "),t("li",[e._v("是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定")])]),e._v(" "),t("h2",{attrs:{id:"fs模块中几种流的读写方法的区别"}},[e._v("fs模块中几种流的读写方法的区别")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("                             异步           同步\n\n- 将文件作为整体读入缓存区    readFile    readFileSync\n- 将文件部分读入缓存区        read         readSync\n- 将数据完整写入文件          writeFile    writeFileSync\n- 将缓存区的部分内容写入文件  write         writeSync\n")])])]),t("h2",{attrs:{id:"stram"}},[e._v("stram")]),e._v(" "),t("ul",[t("li",[e._v("流是一组有序的，有起点和终点的字节数据传输手段")]),e._v(" "),t("li",[e._v("不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理")]),e._v(" "),t("li",[e._v("流是一个抽象接口，被Node中的很多对象所实现。比如对一个HTTP服务器的请求对象request是一个流，stdout也是一个流。")]),e._v(" "),t("li",[e._v("流是可读、可写或者兼具两者的。所有流都是EventEmitter的实例。“几乎所有Node程序，无论多简单，都在某种途径用到了流”")])]),e._v(" "),t("p",[e._v("stream.Readable可读流")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("fs.ReadStream 读取文件")])]),e._v(" "),t("li",[t("p",[e._v("http.IncomingMessage客户端的请求或服务器端的响应")])]),e._v(" "),t("li",[t("p",[e._v("net.Scoket tcp连接中的socket对象")])]),e._v(" "),t("li",[t("p",[e._v("process.stdin 标准输入流")])]),e._v(" "),t("li",[t("p",[e._v("Gzip 数据压缩")])]),e._v(" "),t("li",[t("p",[e._v("可读流 有两种，内部有flowing(流动)步和非flowing(暂停)模式来读取数据。")])]),e._v(" "),t("li",[t("p",[e._v("flowing 模式使用操作系统珠内部IO机制来读取数据，并尽可能快地提供给您")])]),e._v(" "),t("li",[t("p",[e._v("非flowing 模式时流默认处于暂停步，必须显式调用read方法来读取数据")])])]),e._v(" "),t("blockquote",[t("p",[e._v("“注意”\n如果没有绑定data事件处理器，并且没有pipe()目标，同时流被切换到流动模式，那么数据会流失。")])]),e._v(" "),t("h2",{attrs:{id:"中间件"}},[e._v("中间件")]),e._v(" "),t("ul",[t("li",[e._v("中间件（middleware）就是处理HTTP请求的函数，用业完成各种特定任务，比如检查用户是否登录、分析数据、以及其它在需 要最终将数据发送给用户之前完成的任务")]),e._v(" "),t("li",[e._v("它最大的特点就是，一个中间件处理完，可以把相应数据再传递给下一个中间件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var express = require('express');\nvar app = express();\n//中央\napp.use(function(req,res,next){\n    console.log('中央');\n  req.mny = 100;\n  next();\n});\n")])])]),t("p",[e._v("2.特点")]),e._v(" "),t("ul",[t("li",[t("ol",[t("li",[e._v("每个中间件都可以控制流程是否继续执行 next();才会继续执行")])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[e._v("req res 相同对象")])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[e._v("如果出错了，转交错误处理中间件进行处理")])])])]),e._v(" "),t("h2",{attrs:{id:"cookie"}},[e._v("cookie")]),e._v(" "),t("ul",[t("li",[e._v("通过响应头向客户端设置cookie\nSet-Cookie:name=abc")]),e._v(" "),t("li",[e._v("读取客户端过来的cookie\nCooke:key1=value1;key2=value2")])]),e._v(" "),t("h2",{attrs:{id:"referer"}},[e._v("referer")]),e._v(" "),t("p",[e._v("可以通过设置ip白名单控制用户访问权限")]),e._v(" "),t("h2",{attrs:{id:"etag"}},[e._v("etag")]),e._v(" "),t("p",[e._v("当最后修改时间存在问题")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. 某些服务器不能精确得到文件的最后修改时间，这样就无法通过最后修改时间来判断文件是否更新了\n2. 某些文件的修改非常频繁，在秒以后的时间内进行修改，Last-Modified只能精确到秒\n3. 一些文件的最后修改时间改变了，但是内容并未改弯。我们不希望客户端认为这个文件修改\n4. 如果同样的一个文件位于多个CDN服务器上的时候内容虽一样，修改时间不一样\n")])])]),t("p",[e._v("ETag是实体标签的缩写，根据实体内容生成的一段，字符串，可以标识资源的状态。当资源发送改变时，ETag也随之发生变化。ETag是web服务端产生的，然后发给浏览器客户端")]),e._v(" "),t("ol",[t("li",[e._v("客户端想判断缓存是否可用可以先获取缓存中文档的ETag,然后通过If-None-Match发送请求给Web服务器询问此缓存是否可用。")]),e._v(" "),t("li",[e._v("服务器收到请求，将服务器中的此文件的ETag，跟请求头中的If-None-Match相比较，如果值是一样的，说明缓存还是最新的，web服务器将发送304 Not Modified 响应码给客户端表示缓存未修改过，可以使用")]),e._v(" "),t("li",[e._v("如果不一样，则web服务器将发送该文档的最新版本给浏览器客户端")])]),e._v(" "),t("h2",{attrs:{id:"浏览器如何不发请求"}},[e._v("浏览器如何不发请求")]),e._v(" "),t("p",[e._v("浏览器会将文件缓存到Cache目录，第二次请求时浏览器会先检查Cache目录下是否含有该文件，如果有，并且还没到Expires设置时间，即文件还没有过期，那么此时浏览器将直接从Cache目录中读取文件，而不再发送请求")]),e._v(" "),t("ul",[t("li",[e._v("Expires是服务器响应消息头字段，在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求")]),e._v(" "),t("li",[e._v("Cache-Control与Expires的作用一致，都是指明当前资源的有效期，控制浏览器是否直接从浏览器缓存取数据还是重新发请求到服务器取数据，如果同时设置的话，其优先级高于Expires")])]),e._v(" "),t("h2",{attrs:{id:"authorization"}},[e._v("authorization")]),e._v(" "),t("p",[e._v("Authentication：认证，就是验证一个用户是不是它所声明的身份的过程。\nAuthorization：授权，就是判断是否用户有做某件事的权利。")])])}),[],!1,null,null,null);t.default=i.exports}}]);