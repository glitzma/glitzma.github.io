(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{586:function(t,e,a){"use strict";a.r(e);var n=a(4),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http简介"}},[t._v("#")]),t._v(" HTTP简介")]),t._v(" "),a("p",[t._v("HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。")]),t._v(" "),a("p",[t._v("HTTP协议的主要特点可概括如下：")]),t._v(" "),a("ol",[a("li",[t._v("支持客户/服务器模式。")]),t._v(" "),a("li",[t._v("简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。")]),t._v(" "),a("li",[t._v("灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。")]),t._v(" "),a("li",[t._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),t._v(" "),a("li",[t._v("无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快")])]),t._v(" "),a("p",[t._v("http持久连接：")]),t._v(" "),a("p",[t._v("HTTP协议采用“请求-应答”模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务都要新建一个连接，完成之后立刻断开连接（http协议为无连接协议）")]),t._v(" "),a("p",[t._v("在HTTP1.1时，当使用Keep-Alive模式（又称持久连接、连接重用）时，Keep-Alive功能使客户端到服务器端的连接持久有效，当出现服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接")]),t._v(" "),a("p",[t._v("管线化：")]),t._v(" "),a("p",[t._v("在使用持久连接的情况下，某个连接上消息的传递类似于"),a("br"),t._v("\n请求1 -> 响应1 -> 请求2 -> 响应2 -> 请求3 -> 响应3")]),t._v(" "),a("p",[t._v("管线化通道是持久建立的，消息变成了类似这样。把现在请求打包一次传输过去，一次性响应回来\n请求1 -> 请求2 -> 请求3 -> 响应1 -> 响应2 -> 响应3")]),t._v(" "),a("p",[t._v("管线化特点：")]),t._v(" "),a("ol",[a("li",[t._v("管线化机制通过持久连接完成，仅HTTP/1.1支持此技术")]),t._v(" "),a("li",[t._v("只有get和head请求支持管线化，而post则有所限制")]),t._v(" "),a("li",[t._v("初次创建连接时不应启动管线机制，因为对方（服务器）不一定支持HTTP/1.1版本的协议")]),t._v(" "),a("li",[t._v("管线化不会影响响应到来的顺序，如上面例子所示，响应返回的顺序并未改变")]),t._v(" "),a("li",[t._v("HTTP/1.1要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可")]),t._v(" "),a("li",[t._v("由于上面提到的服务器端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不友好，因此现化浏览器如Chrome和Firefox默认并未开启管线化支持")])]),t._v(" "),a("h3",{attrs:{id:"http协议详解之url篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解之url篇"}},[t._v("#")]),t._v(" HTTP协议详解之URL篇")]),t._v(" "),a("p",[t._v("http（超文本传输协议）是一个基于请求与响应模式的、无状态的、应用层的协议，常基于TCP的连接方式，HTTP1.1版本中给出一种持续连接的机制，绝大多数的Web开发，都是构建在HTTP协议之上的Web应用。")]),t._v(" "),a("p",[t._v("HTTP URL (URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息)的格式如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('http://host[":"port][abs_path]\n')])])]),a("p",[t._v("http表示要通过HTTP协议来定位网络资源；")]),t._v(" "),a("p",[t._v("host表示合法的Internet主机域名或者IP地址；")]),t._v(" "),a("p",[t._v("port指定一个端口号，为空则使用缺省端口80；")]),t._v(" "),a("p",[t._v("abs_path指定请求资源的URI；")]),t._v(" "),a("p",[t._v("如果URL中没有给出abs_path，那么当它作为请求URI时，必须以“/”的形式给出，通常这个工作浏览器自动帮我们完成。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eg:\n1、输入：www.guet.edu.cn\n浏览器自动转换成：http://www.guet.edu.cn/\n2、http:192.168.0.116:8080/index.jsp\n")])])]),a("h3",{attrs:{id:"http协议详解之请求篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解之请求篇"}},[t._v("#")]),t._v(" HTTP协议详解之请求篇")]),t._v(" "),a("p",[t._v("http请求由三部分组成，分别是：请求行、消息报头、请求正文")]),t._v(" "),a("blockquote",[a("p",[t._v("1、请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本，格式如下：Method Request-URI HTTP-Version CRLF\n其中 Method表示请求方法；Request-URI是一个统一资源标识符；HTTP-Version表示请求的HTTP协议版本；CRLF表示回车和换行（除了作为结尾的CRLF外，不允许出现单独的CR或LF字符）。")])]),t._v(" "),a("p",[t._v("请求方法（所有方法全为大写）有多种，各个方法的解释如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET     请求获取Request-URI所标识的资源\nPOST    在Request-URI所标识的资源后附加新的数据\nHEAD    请求获取由Request-URI所标识的资源的响应消息报头\nPUT     请求服务器存储一个资源，并用Request-URI作为其标识\nDELETE  请求服务器删除Request-URI所标识的资源\nTRACE   请求服务器回送收到的请求信息，主要用于测试或诊断\nCONNECT 保留将来使用\nOPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求\n应用举例：\n")])])]),a("h3",{attrs:{id:"http协议详解之响应篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解之响应篇"}},[t._v("#")]),t._v(" HTTP协议详解之响应篇")]),t._v(" "),a("p",[t._v("在接收和解释请求消息后，服务器返回一个HTTP响应消息。")]),t._v(" "),a("p",[t._v("HTTP响应也是由三个部分组成，分别是：状态行、消息报头、响应正文")]),t._v(" "),a("ol",[a("li",[t._v("状态行格式如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP-Version Status-Code Reason-Phrase CRLF\n")])])]),a("p",[t._v("其中，HTTP-Version表示服务器HTTP协议的版本；")]),t._v(" "),a("p",[t._v("Status-Code表示服务器发回的响应状态代码；")]),t._v(" "),a("p",[t._v("Reason-Phrase表示状态代码的文本描述。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：\n1xx：指示信息--表示请求已接收，继续处理\n2xx：成功--表示请求已被成功接收、理解、接受\n3xx：重定向--要完成请求必须进行更进一步的操作\n4xx：客户端错误--请求有语法错误或请求无法实现\n5xx：服务器端错误--服务器未能实现合法的请求\n常见状态代码、状态描述、说明：\n200 OK      //客户端请求成功\n206 Partial Content // 客服发起了一个带有range头的get请求，服务器完成了它，用于视频音频很大时，基本返回206\n301 Moved Permanently // 所请求的页面已转移至新的url，永久重定向\n302 Found // 所请求的页面已经临时转移至新的url，临时重定向\n304 Not Modified // 客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用\n400 Bad Request  // 客户端请求有语法错误，不能被服务器所理解\n401 Unauthorized // 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用\n403 Forbidden  // 服务器收到请求，但是拒绝提供服务\n404 Not Found  // 请求资源不存在，eg：输入了错误的URL\n500 Internal Server Error // 服务器发生不可预期的错误\n503 Server Unavailable  // 服务器当前不能处理客户端的请求，服务器临时过载或当机 ，一段时间后可能恢复正常\neg：HTTP/1.1 200 OK （CRLF）\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("响应报头后述")])]),t._v(" "),a("li",[a("p",[t._v("响应正文就是服务器返回的资源的内容")])])]),t._v(" "),a("h4",{attrs:{id:"四、-http协议详解之消息报头篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、-http协议详解之消息报头篇"}},[t._v("#")]),t._v(" 四、 HTTP协议详解之消息报头篇")]),t._v(" "),a("p",[t._v("HTTP消息由客户端到服务器的请求和服务器到客户端的响应组成。请求消息和响应消息都是由开始行（对于请求消息，开始行就是请求行，对于响应消息，开始行就是状态行），消息报头（可选），空行（只有CRLF的行），消息正文（可选）组成。")]),t._v(" "),a("p",[t._v("HTTP消息报头包括普通报头、请求报头、响应报头、实体报头。")]),t._v(" "),a("p",[t._v("每一个报头域都是由名字+“：”+空格+值 组成，消息报头域的名字是大小写无关的。")]),t._v(" "),a("ol",[a("li",[t._v("普通报头\n在普通报头中，有少数报头域用于所有的请求和响应消息，但并不用于被传输的实体，只用于传输的消息。")])]),t._v(" "),a("p",[t._v("eg："),a("br"),t._v("\nCache-Control   用于指定缓存指令，缓存指令是单向的（响应中出现的缓存指令在请求中未必会出现），且是独立的（一个消息的缓存指令不会影响另一个消息处理的缓存机制），HTTP1.0使用的类似的报头域为Pragma。")]),t._v(" "),a("p",[t._v("请求时的缓存指令包括：no-cache（用于指示请求或响应消息不能缓存）、no-store、max-age、max-stale、min-fresh、only-if-cached;")]),t._v(" "),a("p",[t._v("响应时的缓存指令包括：public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age、s-maxage.")]),t._v(" "),a("p",[t._v("eg：为了指示IE浏览器（客户端）不要缓存页面，服务器端的JSP程序可以编写如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sehHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache-Control"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//response.setHeader("Pragma","no-cache");作用相当于上述代码，通常两者合用')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这句代码将在发送的响应消息中设置普通报头域：Cache-Control:no-cache")]),t._v("\n")])])]),a("p",[t._v("Date普通报头域表示消息产生的日期和时间")]),t._v(" "),a("p",[t._v("Connection普通报头域允许发送指定连接的选项。例如指定连接是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("请求报头\n请求报头允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。")])]),t._v(" "),a("p",[t._v("常用的请求报头")]),t._v(" "),a("h4",{attrs:{id:"accept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept"}},[t._v("#")]),t._v(" Accept")]),t._v(" "),a("p",[t._v("Accept请求报头域用于指定客户端接受哪些类型的信息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eg：Accept：image/gif，表明客户端希望接受GIF图象格式的资源；\nAccept：text/html，表明客户端希望接受html文本。\nAccept-Charset\nAccept-Charset请求报头域用于指定客户端接受的字符集。\neg：Accept-Charset:iso-8859-1,gb2312.如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。\nAccept-Encoding\nAccept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。\neg：Accept-Encoding:gzip.deflate.如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。\nAccept-Language\nAccept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。\neg：Accept-Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。\n")])])]),a("h4",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[t._v("Authorization请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401（未授权），可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。\nHost（发送请求时，该报头域是必需的）\nHost请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，eg：\n我们在浏览器中输入：http://www.guet.edu.cn/index.html\n浏览器发送的请求消息中，就会包含Host请求报头域，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Host：www.guet.edu.cn\n")])])]),a("p",[t._v("此处使用缺省端口号80，若指定了端口号，则变成：Host：www.guet.edu.cn:指定端口号")]),t._v(" "),a("h4",{attrs:{id:"user-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-agent"}},[t._v("#")]),t._v(" User-Agent")]),t._v(" "),a("p",[t._v("我们上网登陆论坛的时候，往往会看到一些欢迎信息，其中列出了你的操作系统的名称和版本，你所使用的浏览器的名称和版本，这往往让很多人感到很神奇，实际上，服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息。User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过，这个报头域不是必需的，如果我们自己编写一个浏览器，不使用User-Agent请求报头域，那么服务器端就无法得知我们的信息了。")]),t._v(" "),a("p",[t._v("请求报头举例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /form.html HTTP/1.1 (CRLF)\nAccept:image/gif,image/x-xbitmap,image/jpeg,application/x-shockwave-flash,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/msword,*/* (CRLF)\nAccept-Language:zh-cn (CRLF)\nAccept-Encoding:gzip,deflate (CRLF)\nIf-Modified-Since:Wed,05 Jan 2007 11:21:25 GMT (CRLF)\nIf-None-Match:W/"80b1a4c018f3c41:8317" (CRLF)\nUser-Agent:Mozilla/4.0(compatible;MSIE6.0;Windows NT 5.0) (CRLF)\nHost:www.guet.edu.cn (CRLF)\nConnection:Keep-Alive (CRLF)\n(CRLF)\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("响应报头\n响应报头允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。\n常用的响应报头")])]),t._v(" "),a("p",[t._v("Location")]),t._v(" "),a("p",[t._v("Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。")]),t._v(" "),a("p",[t._v("Server")]),t._v(" "),a("p",[t._v("Server响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的。下面是\nServer响应报头域的一个例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Server：Apache-Coyote/1.1\n")])])]),a("p",[t._v("WWW-Authenticate")]),t._v(" "),a("p",[t._v("WWW-Authenticate响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('eg：WWW-Authenticate:Basic realm="Basic Auth Test!"  //可以看出服务器对请求资源采用的是基本验证机制。\n')])])]),a("p",[t._v("4、实体报头\n请求和响应消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文（eg：有无实体正文）和请求所标识的资源的元信息。")]),t._v(" "),a("p",[t._v("常用的实体报头")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Content-Encoding\nContent-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。Content-Encoding这样用于记录文档的压缩方法，\neg：Content-Encoding：gzip\nContent-Language\nContent-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读\n者。eg：Content-Language:da\nContent-Length\nContent-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。\nContent-Type\nContent-Type实体报头域用语指明发送给接收者的实体正文的媒体类型。\neg：\nContent-Type:text/html;charset=ISO-8859-1\nContent-Type:text/html;charset=GB2312\nLast-Modified\nLast-Modified实体报头域用于指示资源的最后修改日期和时间。\n")])])]),a("p",[t._v("Expires")]),t._v(" "),a("p",[t._v("Expires实体报头域给出响应过期的日期和时间。为了让代理服务器或浏览器在一段时间以后更新缓存中(再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载)的页面，我们可以使用Expires实体报头域指定页面过期的时间。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eg：Expires：Thu，15 Sep 2006 16:23:12 GMT\n")])])]),a("p",[t._v('HTTP1.1的客户端和缓存必须将其他非法的日期格式（包括0）看作已经过期。\neg：为了让浏览器不要缓存页面，我们也可以利用Expires实体报头域，设置为0，\njsp中程序如下：response.setDateHeader("Expires","0");')])])}),[],!1,null,null,null);e.default=s.exports}}]);