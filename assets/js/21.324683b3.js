(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{505:function(t,e,a){"use strict";a.r(e);var n=a(4),_=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http协议详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解"}},[t._v("#")]),t._v(" HTTP协议详解")]),t._v(" "),a("p",[t._v("HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。")]),t._v(" "),a("p",[t._v("HTTP协议的主要特点可概括如下：")]),t._v(" "),a("ul",[a("li",[t._v("1.支持客户/服务器模式。")]),t._v(" "),a("li",[t._v("2.简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。")]),t._v(" "),a("li",[t._v("3.灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。")]),t._v(" "),a("li",[t._v("4.无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),t._v(" "),a("li",[t._v("5.无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),t._v(" "),a("h3",{attrs:{id:"一、http协议详解之url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、http协议详解之url"}},[t._v("#")]),t._v(" 一、HTTP协议详解之URL")]),t._v(" "),a("p",[t._v("http（超文本传输协议）是一个基于请求与响应模式的、无状态的、应用层的协议，常基于TCP的连接方式，HTTP1.1版本中给出一种持续连接的机制，绝大多数的Web开发，都是构建在HTTP协议之上的Web应用。")]),t._v(" "),a("p",[t._v("HTTP URL (URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息)的格式如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('http://host[":"port][abs_path]\n')])])]),a("ul",[a("li",[t._v("http表示要通过HTTP协议来定位网络资源；")]),t._v(" "),a("li",[t._v("host表示合法的Internet主机域名或者IP地址；")]),t._v(" "),a("li",[t._v("port指定一个端口号，为空则使用缺省端口80；abs_path指定请求资源的URI；")]),t._v(" "),a("li",[t._v("如果URL中没有给出abs_path，那么当它作为请求URI时，必须以“/”的形式给出，通常这个工作浏览器自动帮我们完成。")])]),t._v(" "),a("p",[t._v("eg:")]),t._v(" "),a("ul",[a("li",[t._v("1、输入：www.guet.edu.cn\n浏览器自动转换成：http://www.guet.edu.cn/")]),t._v(" "),a("li",[t._v("2、http:192.168.0.116:8080/index.jsp")])]),t._v(" "),a("h3",{attrs:{id:"二、http协议详解之请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、http协议详解之请求"}},[t._v("#")]),t._v(" 二、HTTP协议详解之请求")]),t._v(" "),a("p",[t._v("http请求由三部分组成，分别是：请求行、消息报头、请求正文")]),t._v(" "),a("h4",{attrs:{id:"_1、请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、请求行"}},[t._v("#")]),t._v(" 1、请求行")]),t._v(" "),a("p",[t._v("以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本，格式如下：Method Request-URI HTTP-Version CRLF\n其中 Method表示请求方法；Request-URI是一个统一资源标识符；HTTP-Version表示请求的HTTP协议版本；CRLF表示回车和换行（除了作为结尾的CRLF外，不允许出现单独的CR或LF字符）。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("请求方法（所有方法全为大写）有多种，各个方法的解释如下：\nGET     请求获取Request-URI所标识的资源\nPOST    在Request-URI所标识的资源后附加新的数据\nHEAD    请求获取由Request-URI所标识的资源的响应消息报头\nPUT     请求服务器存储一个资源，并用Request-URI作为其标识\nDELETE  请求服务器删除Request-URI所标识的资源\nTRACE   请求服务器回送收到的请求信息，主要用于测试或诊断\nCONNECT 保留将来使用\nOPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求\n应用举例：\nGET方法：在浏览器的地址栏中输入网址的方式访问网页时，浏览器采用GET方法向服务器获取资源，eg:GET /form.html HTTP/1.1 (CRLF)\n")])])]),a("p",[t._v("POST方法要求被请求服务器接受附在请求后面的数据，常用于提交表单。")]),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /reg.jsp HTTP/ (CRLF)\nAccept:image/gif,image/x-xbit,... (CRLF)\n...\nHOST:www.guet.edu.cn (CRLF)\nContent-Length:22 (CRLF)\nConnection:Keep-Alive (CRLF)\nCache-Control:no-cache (CRLF)\n(CRLF)         //该CRLF表示消息报头已经结束，在此之前为消息报头\nuser=jeffrey&pwd=1234  //此行以下为提交的数据\n")])])]),a("p",[t._v("HEAD方法与GET方法几乎是一样的，对于HEAD请求的回应部分来说，它的HTTP头部中包含的信息与通过GET请求所得到的信息是相同的。利用这个方法，不必传输整个资源内容，就可以得到Request-URI所标识的资源的信息。该方法常用于测试超链接的有效性，是否可以访问，以及最近是否更新。")]),t._v(" "),a("h4",{attrs:{id:"_2、请求报头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、请求报头"}},[t._v("#")]),t._v(" 2、请求报头")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mamingjuan.cn/posts/2015/04/29/http-message.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("请求头"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_3、请求正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、请求正文"}},[t._v("#")]),t._v(" 3、请求正文")]),t._v(" "),a("p",[t._v("请求数据不在GET方法中使用，而是在POST方法中使用。POST方法适用于需要客户填写表单的场合。与请求数据相关的最常使用的请求头是Content-Type和Content-Length。")]),t._v(" "),a("h3",{attrs:{id:"三、http协议详解之响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、http协议详解之响应"}},[t._v("#")]),t._v(" 三、HTTP协议详解之响应")]),t._v(" "),a("p",[t._v("在接收和解释请求消息后，服务器返回一个HTTP响应消息。")]),t._v(" "),a("p",[t._v("HTTP响应也是由三个部分组成，分别是：状态行、消息报头、响应正文")]),t._v(" "),a("p",[t._v("1、状态行格式如下：")]),t._v(" "),a("p",[t._v("HTTP-Version Status-Code Reason-Phrase CRLF\n其中，HTTP-Version表示服务器HTTP协议的版本；Status-Code表示服务器发回的响应状态代码；Reason-Phrase表示状态代码的文本描述。\n状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1xx：指示信息--表示请求已接收，继续处理\n2xx：成功--表示请求已被成功接收、理解、接受\n3xx：重定向--要完成请求必须进行更进一步的操作\n4xx：客户端错误--请求有语法错误或请求无法实现\n5xx：服务器端错误--服务器未能实现合法的请求\n常见状态代码、状态描述、说明：\n200 OK      //客户端请求成功\n400 Bad Request  //客户端请求有语法错误，不能被服务器所理解\n401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用\n403 Forbidden  //服务器收到请求，但是拒绝提供服务\n404 Not Found  //请求资源不存在，eg：输入了错误的URL\n500 Internal Server Error //服务器发生不可预期的错误\n503 Server Unavailable  //服务器当前不能处理客户端的请求，一段时间后可能恢复正常\neg：HTTP/1.1 200 OK （CRLF）\n")])])]),a("p",[t._v("2、响应报头后述")]),t._v(" "),a("p",[t._v("3、响应正文就是服务器返回的资源的内容")]),t._v(" "),a("h3",{attrs:{id:"四、http协议详解之消息报头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、http协议详解之消息报头"}},[t._v("#")]),t._v(" 四、HTTP协议详解之消息报头")]),t._v(" "),a("p",[t._v("HTTP消息由客户端到服务器的请求和服务器到客户端的响应组成。请求消息和响应消息都是由开始行（对于请求消息，开始行就是请求行，对于响应消息，开始行就是状态行），消息报头（可选），空行（只有CRLF的行），消息正文（可选）组成。")]),t._v(" "),a("p",[t._v("HTTP消息报头包括普通报头、请求报头、响应报头、实体报头。")]),t._v(" "),a("p",[t._v("每一个报头域都是由名字+“：”+空格+值 组成，消息报头域的名字是大小写无关的。")]),t._v(" "),a("h4",{attrs:{id:"_1、普通报头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、普通报头"}},[t._v("#")]),t._v(" 1、普通报头")]),t._v(" "),a("p",[t._v("在普通报头中，有少数报头域用于所有的请求和响应消息，但并不用于被传输的实体，只用于传输的消息。")]),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),a("p",[t._v("Cache-Control   用于指定缓存指令，缓存指令是单向的（响应中出现的缓存指令在请求中未必会出现），且是独立的（一个消息的缓存指令不会影响另一个消息处理的缓存机制），HTTP1.0使用的类似的报头域为Pragma。\n请求时的缓存指令包括：no-cache（用于指示请求或响应消息不能缓存）、no-store、max-age、max-stale、min-fresh、only-if-cached;\n响应时的缓存指令包括：public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age、s-maxage.")]),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),a("p",[t._v('为了指示IE浏览器（客户端）不要缓存页面，服务器端的JSP程序可以编写如下：response.sehHeader("Cache-Control","no-cache");\n//response.setHeader("Pragma","no-cache");作用相当于上述代码，通常两者//合用')]),t._v(" "),a("p",[t._v("这句代码将在发送的响应消息中设置普通报头域：Cache-Control:no-cache")]),t._v(" "),a("p",[t._v("Date普通报头域表示消息产生的日期和时间")]),t._v(" "),a("p",[t._v("Connection普通报头域允许发送指定连接的选项。例如指定连接是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接")]),t._v(" "),a("h4",{attrs:{id:"_2、请求报头-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、请求报头-2"}},[t._v("#")]),t._v(" 2、请求报头")]),t._v(" "),a("p",[t._v("请求报头允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。")]),t._v(" "),a("p",[t._v("常用的请求报头")]),t._v(" "),a("p",[t._v("Accept")]),t._v(" "),a("p",[t._v("Accept请求报头域用于指定客户端接受哪些类型的信息。eg：Accept：image/gif，表明客户端希望接受GIF图象格式的资源；Accept：text/html，表明客户端希望接受html文本。")]),t._v(" "),a("p",[t._v("Accept-Charset")]),t._v(" "),a("p",[t._v("Accept-Charset请求报头域用于指定客户端接受的字符集。eg：Accept-Charset:iso-8859-1,gb2312.如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。")]),t._v(" "),a("p",[t._v("Accept-Encoding")]),t._v(" "),a("p",[t._v("Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。eg：Accept-Encoding:gzip.deflate.如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。")]),t._v(" "),a("p",[t._v("Accept-Language")]),t._v(" "),a("p",[t._v("Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。eg：Accept-Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。")]),t._v(" "),a("p",[t._v("Authorization")]),t._v(" "),a("p",[t._v("Authorization请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401（未授权），可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。")]),t._v(" "),a("p",[t._v("Host（发送请求时，该报头域是必需的）")]),t._v(" "),a("p",[t._v("Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，eg：")]),t._v(" "),a("p",[t._v("我们在浏览器中输入：http://www.guet.edu.cn/index.html")]),t._v(" "),a("p",[t._v("浏览器发送的请求消息中，就会包含Host请求报头域，如下：")]),t._v(" "),a("p",[t._v("Host：www.guet.edu.cn")]),t._v(" "),a("p",[t._v("此处使用缺省端口号80，若指定了端口号，则变成：Host：www.guet.edu.cn:指定端口号")]),t._v(" "),a("p",[t._v("User-Agent")]),t._v(" "),a("p",[t._v("我们上网登陆论坛的时候，往往会看到一些欢迎信息，其中列出了你的操作系统的名称和版本，你所使用的浏览器的名称和版本，这往往让很多人感到很神奇，实际上，服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息。User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过，这个报头域不是必需的，如果我们自己编写一个浏览器，不使用User-Agent请求报头域，那么服务器端就无法得知我们的信息了。")]),t._v(" "),a("p",[t._v("请求报头举例：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /form.html HTTP/1.1 (CRLF)\nAccept:image/gif,image/x-xbitmap,image/jpeg,application/x-shockwave-flash,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/msword,*/* (CRLF)\nAccept-Language:zh-cn (CRLF)\nAccept-Encoding:gzip,deflate (CRLF)\nIf-Modified-Since:Wed,05 Jan 2007 11:21:25 GMT (CRLF)\nIf-None-Match:W/"80b1a4c018f3c41:8317" (CRLF)\nUser-Agent:Mozilla/4.0(compatible;MSIE6.0;Windows NT 5.0) (CRLF)\nHost:www.guet.edu.cn (CRLF)\nConnection:Keep-Alive (CRLF)\n(CRLF)\n')])])]),a("h4",{attrs:{id:"_3、响应报头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、响应报头"}},[t._v("#")]),t._v(" 3、响应报头")]),t._v(" "),a("p",[t._v("响应报头允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。")]),t._v(" "),a("p",[t._v("常用的响应报头")]),t._v(" "),a("p",[t._v("Location")]),t._v(" "),a("p",[t._v("Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。")]),t._v(" "),a("p",[t._v("Server")]),t._v(" "),a("p",[t._v("Server响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的。")]),t._v(" "),a("p",[t._v("下面是Server响应报头域的一个例子：")]),t._v(" "),a("div",{staticClass:"language-haml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-haml"}},[a("code",[t._v("Server：Apache-Coyote/1.1\nWWW-Authenticate\nWWW-Authenticate响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。\n")])])]),a("p",[t._v("eg：")]),t._v(" "),a("p",[t._v('WWW-Authenticate:Basic realm="Basic Auth Test!"  //可以看出服务器对请求资源采用的是基本验证机制。')]),t._v(" "),a("h4",{attrs:{id:"_4、实体报头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、实体报头"}},[t._v("#")]),t._v(" 4、实体报头")]),t._v(" "),a("p",[t._v("请求和响应消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文（eg：有无实体正文）和请求所标识的资源的元信息。")]),t._v(" "),a("p",[t._v("常用的实体报头")]),t._v(" "),a("p",[t._v("Content-Encoding")]),t._v(" "),a("p",[t._v("Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。Content-Encoding这样用于记录文档的压缩方法，eg：Content-Encoding：gzip")]),t._v(" "),a("p",[t._v("Content-Language")]),t._v(" "),a("p",[t._v("Content-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读\n者。eg：Content-Language:da")]),t._v(" "),a("p",[t._v("Content-Length")]),t._v(" "),a("p",[t._v("Content-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),t._v(" "),a("p",[t._v("Content-Type")]),t._v(" "),a("p",[t._v("Content-Type实体报头域用语指明发送给接收者的实体正文的媒体类型。")]),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),a("ul",[a("li",[t._v("Content-Type:text/html;charset=ISO-8859-1")]),t._v(" "),a("li",[t._v("Content-Type:text/html;charset=GB2312")]),t._v(" "),a("li",[t._v("Last-Modified")]),t._v(" "),a("li",[t._v("Last-Modified实体报头域用于指示资源的最后修改日期和时间。")])]),t._v(" "),a("p",[t._v("Expires")]),t._v(" "),a("p",[t._v("Expires实体报头域给出响应过期的日期和时间。为了让代理服务器或浏览器在一段时间以后更新缓存中(再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载)的页面，我们可以使用Expires实体报头域指定页面过期的时间。")]),t._v(" "),a("p",[t._v("eg：Expires：Thu，15 Sep 2006 16:23:12 GMT")]),t._v(" "),a("p",[t._v("HTTP1.1的客户端和缓存必须将其他非法的日期格式（包括0）看作已经过期。eg：为了让浏览器不要缓存页面，我们也可以利用Expires实体报头域，设置为0，jsp中程序")]),t._v(" "),a("p",[t._v("如下：")]),t._v(" "),a("p",[t._v('response.setDateHeader("Expires","0");')]),t._v(" "),a("h3",{attrs:{id:"五、利用telnet观察http协议的通讯过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、利用telnet观察http协议的通讯过程"}},[t._v("#")]),t._v(" 五、利用telnet观察http协议的通讯过程")]),t._v(" "),a("p",[t._v("实验目的及原理：")]),t._v(" "),a("p",[t._v("利用MS的telnet工具，通过手动输入http请求信息的方式，向服务器发出请求，服务器接收、解释和接受请求后，会返回一个响应，该响应会在telnet窗口上显示出来，从而从感性上加深对http协议的通讯过程的认识。")]),t._v(" "),a("p",[t._v("实验步骤：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1、打开telnet")])]),t._v(" "),a("li",[a("p",[t._v("1.1 打开telnet\n运行--\x3ecmd--\x3etelnet")])]),t._v(" "),a("li",[a("p",[t._v("1.2 打开telnet回显功能\nset localecho")])]),t._v(" "),a("li",[a("p",[t._v("2、连接服务器并发送请求")])]),t._v(" "),a("li",[a("p",[t._v("2.1 open www.guet.edu.cn 80  //注意端口号不能省略")]),t._v(" "),a("p",[t._v("HEAD /index.asp HTTP/1.0\nHost:www.guet.edu.cn")]),t._v(" "),a("p",[t._v("/"),a("em",[t._v("我们可以变换请求方法,请求桂林电子主页内容,输入消息如下")]),t._v("/\nopen www.guet.edu.cn 80")]),t._v(" "),a("p",[t._v("GET /index.asp HTTP/1.0  //请求资源的内容\nHost:www.guet.edu.cn")])]),t._v(" "),a("li",[a("p",[t._v("2.2 open www.sina.com.cn 80  //在命令提示符号下直接输入telnet www.sina.com.cn 80\nHEAD /index.asp HTTP/1.0\nHost:www.sina.com.cn")])]),t._v(" "),a("li",[a("p",[t._v("3 实验结果：")])]),t._v(" "),a("li",[a("p",[t._v("3.1 请求信息2.1得到的响应是:")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP/1.1 200 OK                                              //请求成功\nServer: Microsoft-IIS/5.0                                    //web服务器\nDate: Thu,08 Mar 200707:17:51 GMT\nConnection: Keep-Alive\nContent-Length: 23330\nContent-Type: text/html\nExpries: Thu,08 Mar 2007 07:16:51 GMT\nSet-Cookie: ASPSESSIONIDQAQBQQQB=BEJCDGKADEDJKLKKAJEOIMMH; path=/\nCache-control: private\n\n//资源内容省略\n")])])]),a("ul",[a("li",[t._v("3.2 请求信息2.2得到的响应是:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('HTTP/1.0 404 Not Found       //请求失败\nDate: Thu, 08 Mar 2007 07:50:50 GMT\nServer: Apache/2.0.54 <Unix>\nLast-Modified: Thu, 30 Nov 2006 11:35:41 GMT\nETag: "6277a-415-e7c76980"\nAccept-Ranges: bytes\nX-Powered-By: mod_xlayout_jh/0.0.1vhs.markII.remix\nVary: Accept-Encoding\nContent-Type: text/html\nX-Cache: MISS from zjm152-78.sina.com.cn\nVia: 1.0 zjm152-78.sina.com.cn:80<squid/2.6.STABLES-20061207>\nX-Cache: MISS from th-143.sina.com.cn\nConnection: close\n\n')])])]),a("p",[t._v("失去了跟主机的连接")]),t._v(" "),a("p",[t._v("按任意键继续...")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项：")]),t._v(" "),a("p",[t._v("1、出现输入错误，则请求不会成功。\n2、报头域不分大小写。\n3、更深一步了解HTTP协议，可以查看RFC2616，在http://www.letf.org/rfc上找到该文件。\n4、开发后台程序必须掌握http协议")])]),t._v(" "),a("h3",{attrs:{id:"六、http协议相关技术补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、http协议相关技术补充"}},[t._v("#")]),t._v(" 六、HTTP协议相关技术补充")]),t._v(" "),a("h4",{attrs:{id:"_1、基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基础"}},[t._v("#")]),t._v(" 1、基础：")]),t._v(" "),a("p",[t._v("高层协议有：文件传输协议FTP、电子邮件传输协议SMTP、域名系统服务DNS、网络新闻传输协议NNTP和HTTP协议等")]),t._v(" "),a("p",[t._v("中介由三种：代理(Proxy)、网关(Gateway)和通道(Tunnel)，一个代理根据URI的绝对格式来接受请求，重写全部或部分消息，通过 URI的标识把已格式化过的请求发送到服务器。网关是一个接收代理，作为一些其它服务器的上层，并且如果必须的话，可以把请求翻译给下层的服务器协议。一 个通道作为不改变消息的两个连接之间的中继点。当通讯需要通过一个中介(例如：防火墙等)或者是中介不能识别消息的内容时，通道经常被使用。")]),t._v(" "),a("p",[t._v("代理(Proxy)：一个中间程序，它可以充当一个服务器，也可以充当一个客户机，为其它客户机建立请求。请求是通过可能的翻译在内部或经过传递到其它的 服务器中。一个代理在发送请求信息之前，必须解释并且如果可能重写它。代理经常作为通过防火墙的客户机端的门户，代理还可以作为一个帮助应用来通过协议处 理没有被用户代理完成的请求。")]),t._v(" "),a("p",[t._v("网关(Gateway)：一个作为其它服务器中间媒介的服务器。与代理不同的是，网关接受请求就好象对被请求的资源来说它就是源服务器；发出请求的客户机并没有意识到它在同网关打交道。")]),t._v(" "),a("p",[t._v("网关经常作为通过防火墙的服务器端的门户，网关还可以作为一个协议翻译器以便存取那些存储在非HTTP系统中的资源。")]),t._v(" "),a("p",[t._v("通道(Tunnel)：是作为两个连接中继的中介程序。一旦激活，通道便被认为不属于HTTP通讯，尽管通道可能是被一个HTTP请求初始化的。当被中继 的连接两端关闭时，通道便消失。当一个门户(Portal)必须存在或中介(Intermediary)不能解释中继的通讯时通道被经常使用。")]),t._v(" "),a("h4",{attrs:{id:"_2、协议分析的优势-http分析器检测网络攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、协议分析的优势-http分析器检测网络攻击"}},[t._v("#")]),t._v(" 2、协议分析的优势—HTTP分析器检测网络攻击")]),t._v(" "),a("p",[t._v("以模块化的方式对高层协议进行分析处理，将是未来入侵检测的方向。\nHTTP及其代理的常用端口80、3128和8080在network部分用port标签进行了规定")]),t._v(" "),a("h4",{attrs:{id:"_3、http协议content-lenth限制漏洞导致拒绝服务攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、http协议content-lenth限制漏洞导致拒绝服务攻击"}},[t._v("#")]),t._v(" 3、HTTP协议Content Lenth限制漏洞导致拒绝服务攻击")]),t._v(" "),a("p",[t._v("使用POST方法时，可以设置ContentLenth来定义需要传送的数据长度，例如ContentLenth:999999999，在传送完成前，内 存不会释放，攻击者可以利用这个缺陷，连续向WEB服务器发送垃圾数据直至WEB服务器内存耗尽。这种攻击方法基本不会留下痕迹。\nhttp://www.cnpaf.net/Class/HTTP/0532918532667330.html")]),t._v(" "),a("h4",{attrs:{id:"_4、利用http协议的特性进行拒绝服务攻击的一些构思"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、利用http协议的特性进行拒绝服务攻击的一些构思"}},[t._v("#")]),t._v(" 4、利用HTTP协议的特性进行拒绝服务攻击的一些构思")]),t._v(" "),a("p",[t._v("服务器端忙于处理攻击者伪造的TCP连接请求而无暇理睬客户的正常请求（毕竟客户端的正常请求比率非常之小），此时从正常客户的角度看来，服务器失去响应，这种情况我们称作：服务器端受到了SYNFlood攻击（SYN洪水攻击）。")]),t._v(" "),a("p",[t._v("而Smurf、TearDrop等是利用ICMP报文来Flood和IP碎片攻击的。本文用“正常连接”的方法来产生拒绝服务攻击。")]),t._v(" "),a("p",[t._v("19端口在早期已经有人用来做Chargen攻击了，即Chargen_Denial_of_Service，但是！他们用的方法是在两台Chargen 服务器之间产生UDP连接，让服务器处理过多信息而DOWN掉，那么，干掉一台WEB服务器的条件就必须有2个：1.有Chargen服务2.有HTTP 服务")]),t._v(" "),a("p",[t._v("方法：攻击者伪造源IP给N台Chargen发送连接请求（Connect），Chargen接收到连接后就会返回每秒72字节的字符流（实际上根据网络实际情况，这个速度更快）给服务器。")]),t._v(" "),a("h4",{attrs:{id:"_5、http指纹识别技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、http指纹识别技术"}},[t._v("#")]),t._v(" 5、Http指纹识别技术")]),t._v(" "),a("p",[t._v("Http指纹识别的原理大致上也是相同的：记录不同服务器对Http协议执行中的微小差别进行识别.Http指纹识别比TCP/IP堆栈指纹识别复杂许 多,理由是定制Http服务器的配置文件、增加插件或组件使得更改Http的响应信息变的很容易,这样使得识别变的困难；然而定制TCP/IP堆栈的行为 需要对核心层进行修改,所以就容易识别.")]),t._v(" "),a("p",[t._v("要让服务器返回不同的Banner信息的设置是很简单的,象Apache这样的开放源代码的Http服务器,用户可以在源代码里修改Banner信息,然 后重起Http服务就生效了；对于没有公开源代码的Http服务器比如微软的IIS或者是Netscape,可以在存放Banner信息的Dll文件中修 改,相关的文章有讨论的,这里不再赘述,当然这样的修改的效果还是不错的.另外一种模糊Banner信息的方法是使用插件。")]),t._v(" "),a("p",[t._v("常用测试请求：")]),t._v(" "),a("ul",[a("li",[t._v("1：HEAD/Http/1.0发送基本的Http请求")]),t._v(" "),a("li",[t._v("2：DELETE/Http/1.0发送那些不被允许的请求,比如Delete请求")]),t._v(" "),a("li",[t._v("3：GET/Http/3.0发送一个非法版本的Http协议请求")]),t._v(" "),a("li",[t._v("4：GET/JUNK/1.0发送一个不正确规格的Http协议请求")])]),t._v(" "),a("p",[t._v("Http指纹识别工具Httprint,它通过运用统计学原理,组合模糊的逻辑学技术,能很有效的确定Http服务器的类型.它可以被用来收集和分析不同Http服务器产生的签名。")]),t._v(" "),a("h4",{attrs:{id:"_6、其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、其他"}},[t._v("#")]),t._v(" 6、其他")]),t._v(" "),a("p",[t._v("为了提高用户使用浏览器时的性能，现代浏览器还支持并发的访问方式，浏览一个网页时同时建立多个连接，以迅速获得一个网页上的多个图标，这样能更快速完成整个网页的传输。")]),t._v(" "),a("p",[t._v("HTTP1.1中提供了这种持续连接的方式，而下一代HTTP协议：HTTP-NG更增加了有关会话控制、丰富的内容协商等方式的支持，来提供更高效率的连接。")])])}),[],!1,null,null,null);e.default=_.exports}}]);