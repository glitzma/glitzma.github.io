(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{306:function(e,n,t){"use strict";t.r(n);var a=t(2),s=Object(a.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"repl-交互式解释器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repl-交互式解释器","aria-hidden":"true"}},[e._v("#")]),e._v(" REPL(交互式解释器)")]),e._v(" "),t("p",[e._v("Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。\nNode 自带了交互式解释器，可以执行以下任务：")]),e._v(" "),t("ul",[t("li",[e._v("读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。")]),e._v(" "),t("li",[e._v("执行 - 执行输入的数据结构")]),e._v(" "),t("li",[e._v("打印 - 输出结果")]),e._v(" "),t("li",[e._v("循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。")])]),e._v(" "),t("p",[e._v("Node 的交互式解释器可以很好的调试 Javascript 代码。\n开始学习 REPL\n我们可以输入以下命令来启动 Node 的终端：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ node\n>\n")])])]),t("p",[e._v("这时我们就可以在 > 后输入简单的表达式，并按下回车键来计算结果。")]),e._v(" "),t("h5",{attrs:{id:"简单的表达式运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的表达式运算","aria-hidden":"true"}},[e._v("#")]),e._v(" 简单的表达式运算")]),e._v(" "),t("p",[e._v("接下来让我们在 Node.js REPL 的命令行窗口中执行简单的数学运算：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ node\n> 1 +4\n5\n> 5 / 2\n2.5\n> 3 * 6\n18\n> 4 - 1\n3\n> 1 + ( 2 * 3 ) - 4\n3\n>\n")])])]),t("h5",{attrs:{id:"使用变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用变量")]),e._v(" "),t("p",[e._v("你可以将数据存储在变量中，并在你需要的时候使用它。\n变量声明需要使用 var 关键字，如果没有使用 var 关键字变量会直接打印出来。\n使用 var 关键字的变量可以使用 console.log() 来输出变量。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ node\n> x = 10\n10\n> var y = 10\nundefined\n> x + y\n20\n> console.log("Hello World")\nHello World\nundefined\n> console.log("www.runoob.com")\nwww.runoob.com\nundefined\n')])])]),t("h5",{attrs:{id:"多行表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多行表达式","aria-hidden":"true"}},[e._v("#")]),e._v(" 多行表达式")]),e._v(" "),t("p",[e._v("Node REPL 支持输入多行表达式，这就有点类似 JavaScript。接下来让我们来执行一个 do-while 循环：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ node\n> var x = 0\nundefined\n> do {\n... x++;\n... console.log("x: " + x);\n... } while ( x < 5 );\nx: 1\nx: 2\nx: 3\nx: 4\nx: 5\nundefined\n>\n')])])]),t("p",[e._v("... 三个点的符号是系统自动生成的，你回车换行后即可。Node 会自动检测是否为连续的表达式。")]),e._v(" "),t("h5",{attrs:{id:"下划线-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下划线-变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 下划线(_)变量")]),e._v(" "),t("p",[e._v("你可以使用下划线(_)获取上一个表达式的运算结果：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ node\n> var x = 10\nundefined\n> var y = 20\nundefined\n> x + y\n30\n> var sum = _\nundefined\n> console.log(sum)\n30\nundefined\n>\n")])])]),t("h5",{attrs:{id:"repl-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repl-命令","aria-hidden":"true"}},[e._v("#")]),e._v(" REPL 命令")]),e._v(" "),t("p",[e._v("ctrl + c - 退出当前终端。\nctrl + c 按下两次 - 退出 Node REPL。\nctrl + d - 退出 Node REPL.\n向上/向下 键 - 查看输入的历史命令\ntab 键 - 列出当前命令\n.help - 列出使用命令\n.break - 退出多行表达式\n.clear - 退出多行表达式\n.save filename - 保存当前的 Node REPL 会话到指定文件\n.load filename - 载入当前 Node REPL 会话的文件内容。")]),e._v(" "),t("h2",{attrs:{id:"控制台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制台","aria-hidden":"true"}},[e._v("#")]),e._v(" 控制台")]),e._v(" "),t("p",[e._v("保存日志的方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node x.console.log.js > 1.log\n")])])]),t("p",[e._v("node app 1>app.log 2>&1 或者 1>app.log 2>app.err")]),e._v(" "),t("p",[e._v("日志重定向")]),e._v(" "),t("h5",{attrs:{id:"new-console-stdout-stderr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-console-stdout-stderr","aria-hidden":"true"}},[e._v("#")]),e._v(" new Console(stdout[, stderr])#")]),e._v(" "),t("ul",[t("li",[e._v("stdout <stream.Writable>")]),e._v(" "),t("li",[e._v("stderr <stream.Writable>\nCreates a new Console with one or two writable stream instances. stdout is a writable stream to print log or info output. stderr is used for warning or error output. If stderr is not provided, stdout is used for stderr.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const output = fs.createWriteStream('./stdout.log');\nconst errorOutput = fs.createWriteStream('./stderr.log');\n// custom simple logger\nconst logger = new Console(output, errorOutput);\n// use it like console\nconst count = 5;\nlogger.log('count: %d', count);\n// in stdout.log: count 5\n")])])]),t("p",[e._v("The global console is a special Console whose output is sent to process.stdout and process.stderr. It is equivalent to calling:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("new Console(process.stdout, process.stderr);\n")])])]),t("h5",{attrs:{id:"console-count-label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console-count-label","aria-hidden":"true"}},[e._v("#")]),e._v(" console.count([label])#")]),e._v(" "),t("p",[e._v("Added in: v8.3.0")]),e._v(" "),t("ul",[t("li",[e._v("label "),t("string",[e._v(" The display label for the counter. Defaults to 'default'.\nMaintains an internal counter specific to label and outputs to stdout the number of times console.count() has been called with the given label.")])],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> console.count()\ndefault: 1\nundefined\n> console.count('default')\ndefault: 2\nundefined\n> console.count('abc')\nabc: 1\nundefined\n> console.count('xyz')\nxyz: 1\nundefined\n> console.count('abc')\nabc: 2\nundefined\n> console.count()\ndefault: 3\nundefined\n>\n")])])]),t("h5",{attrs:{id:"console-dir-obj-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console-dir-obj-options","aria-hidden":"true"}},[e._v("#")]),e._v(" console.dir(obj[, options])#")]),e._v(" "),t("p",[e._v("Added in: v0.1.101")]),e._v(" "),t("ul",[t("li",[e._v("obj "),t("any")],1),e._v(" "),t("li",[e._v("options "),t("Object",[t("ul",[t("li",[e._v("showHidden "),t("boolean")],1),e._v(" "),t("li",[e._v("depth "),t("number")],1),e._v(" "),t("li",[e._v("colors "),t("boolean",[e._v("\nUses util.inspect() on obj and prints the resulting string to stdout. This function bypasses any custom inspect() function defined on obj. An optional options object may be passed to alter certain aspects of the formatted string:")])],1)])])],1)]),e._v(" "),t("p",[e._v("showHidden - if true then the object's non-enumerable and symbol properties will be shown too. Defaults to false.")]),e._v(" "),t("p",[e._v("depth - tells util.inspect() how many times to recurse while formatting the object. This is useful for inspecting large complicated objects. Defaults to 2. To make it recurse indefinitely, pass null.")]),e._v(" "),t("p",[e._v("colors - if true, then the output will be styled with ANSI color codes. Defaults to false. Colors are customizable; see customizing util.inspect() colors.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://nodejs.org/api/console.html#console_console_clear",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考网站"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 一:页面代码\nconsole.log("log信息");\n//在页面中执行(node app.js)这个文件会在控制台中看到log信息:"log信息"\n//换个方式执行:node app.js 1>info.txt(1代表重定向标准输出流);\n//这个时候会在app.js的同级目录下看到一个info.txt文件,里面还有"log信息".\n//二:依次序输出所有字符串\nconsole.log("%s","first","second");\n//输出结果:first second\n//三.将对象转换为普通字符串后执行\nconsole.log("%s","guoyansi",{name:"思思博士"});\n//输出结果:guoyansi { name: \'思思博士\' }\n//四:\n//将字符串作为数值进行转换\nconsole.log("%d","25.6");\n//输出结果:25.6\nconsole.log("%d","guoyansi");\n//输出结果:guoyansi\n//五  输出%\nconsole.log("%%");\n//输出结果:%\nconsole.log("%%","gys");\n//输出结果:% gys\n//六 将console.error信息输出到文件中去\n//页面代码:\nconsole.error("guoyansi is error");\n//利用node app.js 2>err.txt启动这个页面\n//会在同级目录下多一个err.txt文件.文件里面还有"guoyansi is error"\n//七 直接在命令行启动一个并不存在的文件javascript.js,这样:\n// node javascript.js 2>info.txt\n//输出结果:会在命令行所在的目录下多出一个文件info.txt;\n//info.txt文件中的内容如下\n/*\n module.js:340\n throw err;\n ^\n Error: Cannot find module \'E:\\node\\gys\\javascript.js\'\n at Function.Module._resolveFilename (module.js:338:15)\n at Function.Module._load (module.js:280:25)\n at Function.Module.runMain (module.js:497:10)\n at startup (node.js:119:16)\n at node.js:906:3\n */\n//八:console.warn的用法和console.error()用法一样\n//九:console.time()和console.timeEnd()输出中间代码的执行时间(注意:time和timeEnd的参数必须完全一致)\nconsole.time("for循环的时间:")\nvar a=0;\nfor(var i=0;i<10000000000000;i++){\n    a++;\n}\nconsole.timeEnd("for循环的时间:")\n/*\n * 10.console.trace()方法将当前位置处的栈信息作为标准错误信息进行输出.\n *  */\nvar obj={\n    name:"guoyansi",\n    age:23,\n    eat:function(){}\n}\nconsole.trace(obj);\n//输出结果:\n')])])]),t("h2",{attrs:{id:"缓存区buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存区buffer","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓存区Buffer")]),e._v(" "),t("p",[e._v("JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。\n但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。\n在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var bf1 = new Buffer("a")\nvar bf2 = new Buffer("b")\nvar bf3 = new Buffer("c")\nvar r = Buffer.concat([bf1,bf2,bf3])\nconsole.log(r)\nr.toString()\n\n')])])]),t("h4",{attrs:{id:"创建-buffer-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-buffer-类","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建 Buffer 类")]),e._v(" "),t("ul",[t("li",[e._v("Buffer 提供了以下 API 来创建 Buffer 类：")]),e._v(" "),t("li",[e._v("Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0")]),e._v(" "),t("li",[e._v("Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据")]),e._v(" "),t("li",[e._v("Buffer.allocUnsafeSlow(size)")]),e._v(" "),t("li",[e._v("Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）")]),e._v(" "),t("li",[e._v("Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。")]),e._v(" "),t("li",[e._v("Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例")]),e._v(" "),t("li",[e._v("Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例")])]),e._v(" "),t("p",[e._v("Node.js 目前支持的字符编码包括：")]),e._v(" "),t("ul",[t("li",[e._v("ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。")]),e._v(" "),t("li",[e._v("utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。")]),e._v(" "),t("li",[e._v("utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。")]),e._v(" "),t("li",[e._v("ucs2 - utf16le 的别名。")]),e._v(" "),t("li",[e._v("base64 - Base64 编码。")]),e._v(" "),t("li",[e._v("latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。")]),e._v(" "),t("li",[e._v("binary - latin1 的别名。")]),e._v(" "),t("li",[e._v("hex - 将每个字节编码为两个十六进制字符。")])]),e._v(" "),t("h5",{attrs:{id:"写入缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写入缓冲区","aria-hidden":"true"}},[e._v("#")]),e._v(" 写入缓冲区")]),e._v(" "),t("h6",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),t("p",[e._v("写入 Node 缓冲区的语法如下所示：\nbuf.write(string[, offset[, length]][, encoding])")]),e._v(" "),t("h6",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),t("p",[e._v("参数描述如下：")]),e._v(" "),t("ul",[t("li",[e._v("string - 写入缓冲区的字符串。")]),e._v(" "),t("li",[e._v("offset - 缓冲区开始写入的索引值，默认为 0 。")]),e._v(" "),t("li",[e._v("length - 写入的字节数，默认为 buffer.length")]),e._v(" "),t("li",[e._v("encoding - 使用的编码。默认为 'utf8' 。")])]),e._v(" "),t("p",[e._v("根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。")]),e._v(" "),t("h6",{attrs:{id:"返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[e._v("#")]),e._v(" 返回值")]),e._v(" "),t("p",[e._v("返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('buf = Buffer.alloc(256);\nlen = buf.write("www.runoob.com");\n\nconsole.log("写入字节数 : "+  len);\n')])])]),t("h5",{attrs:{id:"缓冲区读取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区读取数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓冲区读取数据")]),e._v(" "),t("h6",{attrs:{id:"语法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),t("p",[e._v("读取 Node 缓冲区数据的语法如下所示：\nbuf.toString([encoding[, start[, end]]])")]),e._v(" "),t("h6",{attrs:{id:"参数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),t("p",[e._v("参数描述如下：")]),e._v(" "),t("ul",[t("li",[e._v("encoding - 使用的编码。默认为 'utf8' 。")]),e._v(" "),t("li",[e._v("start - 指定开始读取的索引位置，默认为 0。")]),e._v(" "),t("li",[e._v("end - 结束位置，默认为缓冲区的末尾。")])]),e._v(" "),t("h6",{attrs:{id:"返回值-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回值-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 返回值")]),e._v(" "),t("p",[e._v("解码缓冲区数据并使用指定的编码返回字符串。")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://www.runoob.com/nodejs/nodejs-buffer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档Node.js Buffer(缓冲区)"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"模块和包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块和包","aria-hidden":"true"}},[e._v("#")]),e._v(" 模块和包")]),e._v(" "),t("p",[e._v("代码运行时会变成")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function(exports,require,module,__filename,__dirname){\nvar sum = function(a,b){\nreturn a + b;\n}\nexports.sum = sum;\nreturn module.exports;\n}\n")])])]),t("p",[e._v("//exports 默认导出对象\n//require 是加载其它模块的方法\n//module代表当前的模块对象module.exports\n//__filename 是当前模块的绝对路径\n//_dirname 是当前模块的绝对目录")]),e._v(" "),t("p",[e._v("代码块的引用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var sum = require("sum");\n\n// 查找模块  会在当前目录的node_modules目录中查找sum文件夹 里面的index.js\n// 也可以在package.json 中设置main 来指定文件地址\n// 放置到node_modules中比指定路径会更加灵活\n\nconsole.log(sum(1,2));\nconsole.log(__filename);\nconsole.log(__dirname);\n')])])]),t("h2",{attrs:{id:"内置模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 内置模块")]),e._v(" "),t("p",[e._v("内置模块很多，"),t("a",{attrs:{href:"https://nodejs.org/dist/latest-v8.x/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("具体参考v8文档"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"内置模块fs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置模块fs","aria-hidden":"true"}},[e._v("#")]),e._v(" 内置模块fs")]),e._v(" "),t("h6",{attrs:{id:"文件模块方法参考手册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件模块方法参考手册","aria-hidden":"true"}},[e._v("#")]),e._v(" 文件模块方法参考手册")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("序号\t方法 & 描述\n1\tfs.rename(oldPath, newPath, callback)\n异步 rename().回调函数没有参数，但可能抛出异常。\n2\tfs.ftruncate(fd, len, callback)\n异步 ftruncate().回调函数没有参数，但可能抛出异常。\n3\tfs.ftruncateSync(fd, len)\n同步 ftruncate()\n4\tfs.truncate(path, len, callback)\n异步 truncate().回调函数没有参数，但可能抛出异常。\n5\tfs.truncateSync(path, len)\n同步 truncate()\n6\tfs.chown(path, uid, gid, callback)\n异步 chown().回调函数没有参数，但可能抛出异常。\n7\tfs.chownSync(path, uid, gid)\n同步 chown()\n8\tfs.fchown(fd, uid, gid, callback)\n异步 fchown().回调函数没有参数，但可能抛出异常。\n9\tfs.fchownSync(fd, uid, gid)\n同步 fchown()\n10\tfs.lchown(path, uid, gid, callback)\n异步 lchown().回调函数没有参数，但可能抛出异常。\n11\tfs.lchownSync(path, uid, gid)\n同步 lchown()\n12\tfs.chmod(path, mode, callback)\n异步 chmod().回调函数没有参数，但可能抛出异常。\n13\tfs.chmodSync(path, mode)\n同步 chmod().\n14\tfs.fchmod(fd, mode, callback)\n异步 fchmod().回调函数没有参数，但可能抛出异常。\n15\tfs.fchmodSync(fd, mode)\n同步 fchmod().\n16\tfs.lchmod(path, mode, callback)\n异步 lchmod().回调函数没有参数，但可能抛出异常。Only available on Mac OS X.\n17\tfs.lchmodSync(path, mode)\n同步 lchmod().\n18\tfs.stat(path, callback)\n异步 stat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象。\n19\tfs.lstat(path, callback)\n异步 lstat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象。\n20\tfs.fstat(fd, callback)\n异步 fstat(). 回调函数有两个参数 err, stats，stats 是 fs.Stats 对象。\n21\tfs.statSync(path)\n同步 stat(). 返回 fs.Stats 的实例。\n22\tfs.lstatSync(path)\n同步 lstat(). 返回 fs.Stats 的实例。\n23\tfs.fstatSync(fd)\n同步 fstat(). 返回 fs.Stats 的实例。\n24\tfs.link(srcpath, dstpath, callback)\n异步 link().回调函数没有参数，但可能抛出异常。\n25\tfs.linkSync(srcpath, dstpath)\n同步 link().\n26\tfs.symlink(srcpath, dstpath[, type], callback)\n异步 symlink().回调函数没有参数，但可能抛出异常。 type 参数可以设置为 'dir', 'file', 或 'junction' (默认为 'file') 。\n27\tfs.symlinkSync(srcpath, dstpath[, type])\n同步 symlink().\n28\tfs.readlink(path, callback)\n异步 readlink(). 回调函数有两个参数 err, linkString。\n29\tfs.realpath(path[, cache], callback)\n异步 realpath(). 回调函数有两个参数 err, resolvedPath。\n30\tfs.realpathSync(path[, cache])\n同步 realpath()。返回绝对路径。\n31\tfs.unlink(path, callback)\n异步 unlink().回调函数没有参数，但可能抛出异常。\n32\tfs.unlinkSync(path)\n同步 unlink().\n33\tfs.rmdir(path, callback)\n异步 rmdir().回调函数没有参数，但可能抛出异常。\n34\tfs.rmdirSync(path)\n同步 rmdir().\n35\tfs.mkdir(path[, mode], callback)\nS异步 mkdir(2).回调函数没有参数，但可能抛出异常。 mode defaults to 0777.\n36\tfs.mkdirSync(path[, mode])\n同步 mkdir().\n37\tfs.readdir(path, callback)\n异步 readdir(3). 读取目录的内容。\n38\tfs.readdirSync(path)\n同步 readdir().返回文件数组列表。\n39\tfs.close(fd, callback)\n异步 close().回调函数没有参数，但可能抛出异常。\n40\tfs.closeSync(fd)\n同步 close().\n41\tfs.open(path, flags[, mode], callback)\n异步打开文件。\n42\tfs.openSync(path, flags[, mode])\n同步 version of fs.open().\n43\tfs.utimes(path, atime, mtime, callback)\n\n44\tfs.utimesSync(path, atime, mtime)\n修改文件时间戳，文件通过指定的文件路径。\n45\tfs.futimes(fd, atime, mtime, callback)\n\n46\tfs.futimesSync(fd, atime, mtime)\n修改文件时间戳，通过文件描述符指定。\n47\tfs.fsync(fd, callback)\n异步 fsync.回调函数没有参数，但可能抛出异常。\n48\tfs.fsyncSync(fd)\n同步 fsync.\n49\tfs.write(fd, buffer, offset, length[, position], callback)\n将缓冲区内容写入到通过文件描述符指定的文件。\n50\tfs.write(fd, data[, position[, encoding]], callback)\n通过文件描述符 fd 写入文件内容。\n51\tfs.writeSync(fd, buffer, offset, length[, position])\n同步版的 fs.write()。\n52\tfs.writeSync(fd, data[, position[, encoding]])\n同步版的 fs.write().\n53\tfs.read(fd, buffer, offset, length, position, callback)\n通过文件描述符 fd 读取文件内容。\n54\tfs.readSync(fd, buffer, offset, length, position)\n同步版的 fs.read.\n55\tfs.readFile(filename[, options], callback)\n异步读取文件内容。\n56\tfs.readFileSync(filename[, options])\n57\tfs.writeFile(filename, data[, options], callback)\n异步写入文件内容。\n58\tfs.writeFileSync(filename, data[, options])\n同步版的 fs.writeFile。\n59\tfs.appendFile(filename, data[, options], callback)\n异步追加文件内容。\n60\tfs.appendFileSync(filename, data[, options])\nThe 同步 version of fs.appendFile.\n61\tfs.watchFile(filename[, options], listener)\n查看文件的修改。\n62\tfs.unwatchFile(filename[, listener])\n停止查看 filename 的修改。\n63\tfs.watch(filename[, options][, listener])\n查看 filename 的修改，filename 可以是文件或目录。返回 fs.FSWatcher 对象。\n64\tfs.exists(path, callback)\n检测给定的路径是否存在。\n65\tfs.existsSync(path)\n同步版的 fs.exists.\n66\tfs.access(path[, mode], callback)\n测试指定路径用户权限。\n67\tfs.accessSync(path[, mode])\n同步版的 fs.access。\n68\tfs.createReadStream(path[, options])\n返回ReadStream 对象。\n69\tfs.createWriteStream(path[, options])\n返回 WriteStream 对象。\n70\tfs.symlink(srcpath, dstpath[, type], callback)\n异步 symlink().回调函数没有参数，但可能抛出异常。\n")])])]),t("p",[t("a",{attrs:{href:"http://www.runoob.com/nodejs/nodejs-fs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档 "),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"内置模块path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置模块path","aria-hidden":"true"}},[e._v("#")]),e._v(" 内置模块path")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://nodejs.org/dist/latest-v8.x/docs/api/path.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),t("p",[e._v("例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var EventEmitter = require('events');\nvar em = new EventEmitter();\nfunction teacher(){\n   console.log('老师进教室');\n}\nfunction student(){\n    console.log('学生进教室');\n}\nem.addListener('bell',teacher);\nem.on('bell',);\nem.emit('bell');\n\n//on 与 addListener功能是一样的。on 是addListener的别名。\n//once 是只执行一次 触发后会被移除\n\nem.setMax\n\n")])])]),t("p",[t("a",{attrs:{href:"https://nodejs.org/dist/latest-v8.x/docs/api/events.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),t("OutboundLink")],1)])])},[],!1,null,null,null);n.default=s.exports}}]);