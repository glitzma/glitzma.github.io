(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{504:function(e,t,a){"use strict";a.r(t);var r=a(5),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"tcp报文格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文格式"}},[e._v("#")]),e._v(" TCP报文格式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("（1）序号：Seq序号占32位，用来标识源端发送的字节流，发起方发送数据时对此进行标记。\n（2）确认序号：Ack序号占32位，只有ACK标志为1时，确认序号字段才有效，Ack=Seq+1\n（3）标志位：共6个，即URG、ACK、PSH、RST、SYN、FIN等，具体含义如下：\n        （A）URG：紧急指针（urgent pointer）有效\n        （B）ACK：确认序号有效\n        （C）PSH：接收方应该尽快将这个报文交给应用层\n        （D）RST：重置连接\n        （E）SYN：发起一个新连接\n        （F）FIN：释放一个连接\n    注意：\n        （A）不要将砍认序号ACK与标志位中的ACK搞混\n        （B）确认方ACK=发起方Req+1，两端配对\n")])])]),a("h2",{attrs:{id:"tcp三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[e._v("#")]),e._v(" TCP三次握手")]),e._v(" "),a("p",[e._v("所谓三次握手（Tree-Way Handshake）即建立TCP连接时，需要客户端和服务端共发3个包来确认连接的建立。在socket变成中，这一过程由客户端执行connect来触发。")]),e._v(" "),a("p",[e._v("如下图所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://blog.mamingjuan.cn/assets/images/seq-img.png",alt:"image03"}})]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("（1）第一次握手：client将标志位SYN置为1，随机产生一个值seq=J,并将该数据包发送给Server,Client进入SYN_SENT状态，等待Server确认\n（2）第二次握手：Server收到数据包后由标志位SYN=1知道Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K,并将该数据包发送给Client以确认连接请求，Server进入SYN_RCVD状态\n（3）第三次握手：Client收到确认后，检查ack是否为J+1 ，ACK是否为1，如果正确则将标志位ACK置为1，ack=K+1,并将该数据包发送给Server,Server检查ack是否为K+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client与Server之间可以开始传输数据了。\n")])])]),a("h2",{attrs:{id:"syn攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syn攻击"}},[e._v("#")]),e._v(" SYN攻击")]),e._v(" "),a("p",[e._v("在三次握手过程中，Server发送SYN-ACK之后，收到Client的ACK之前的TCP连接称为半连接（half-open connect）此时Server处于SYN_RCVD状态，当收到ACK后，Server转入ESTABLISHED状态。SYN攻击就是Client在短时间内伪造大量不存在的IP地址，并向Server不断地发送SYN包，Server回复确认包，并等待Client的确认，由于源地址是不存在的，因此，Server需 要不断得发直至超时，这些伪造的SYN包将产生时间占用未连接队列，导致正常的SYN请求因为队列满而被丢弃，从而引起网络堵塞甚至系统瘫痪。SYN攻击时一种典型的DDOS攻击，检测SYN攻击的方式非常简单，即当Server上有大量半连接状态且源IP地址是随机的，则可以断定遭到SYN攻击了，使用如下命令可以让之现行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#netstat -nap | grep SYN_RECV\n")])])]),a("h2",{attrs:{id:"四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[e._v("#")]),e._v(" 四次挥手")]),e._v(" "),a("p",[e._v("所谓四次挥手（Four-Way Wavehand）即终止TCP连接，就是指断开一个TCP连接时，需要客户端和服务端总共发送4个包以确认连接的断开。在socket编程中，这一过程由客户端或服务端任一方执行close来触发，整个流程如下图所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://blog.mamingjuan.cn/assets/images/four-wave-seq.png",alt:"image03"}})]),e._v(" "),a("p",[e._v("由于TCP连接时全双工，因此，每个方向都必须要单独进行关闭，这一原则是当一方完成数据发送任务后，发送一个FIN来终止这一方向的连接，收到一个FIN只是意味着这一方向上没有数据流动了，即不会再收到数据了，但是在这个TCP连接上仍然能够发送数据，直到这一方向也发送了FIN。首先进行关闭的这方将执行主动关闭，而另一方则执行被动关闭，上图描述就是如此。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("（1）第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态\n（2）第二次挥手：Server收到FIN后，Client,确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）,Server进入CLOSE_WAIT状态\n（3）第三次挥手：Sever发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。\n（4）第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手\n")])])]),a("p",[e._v("上面一方主动关闭，另一方被动关闭的情况，实际中还会出现同时发起主动关闭的情况，具体流程如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://blog.mamingjuan.cn/assets/images/all-close-seq.png",alt:"image03"}})]),e._v(" "),a("p",[e._v("流程和状态在上图中已经很明了，在此不再赘述，可以参考前面的四次挥手解析步骤。")]),e._v(" "),a("h2",{attrs:{id:"为什么建立是三次握手，而关闭是四次挥手呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立是三次握手，而关闭是四次挥手呢？"}},[e._v("#")]),e._v(" 为什么建立是三次握手，而关闭是四次挥手呢？")]),e._v(" "),a("p",[e._v("因为服务端在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。而关闭连接时，当收到对方的FIN报文时，仅仅表示对方不再发送数据了，但还是能接收数据，已方也未必全部数据都发送给对方了，所以已方可以立即close,也可以发送一些数据给对方后再发送FIN保温给对方来表示同意现在关闭连接，因此，已方ACK和FIN一般都会分开发送。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/renzhenhuai/article/details/12105457",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章借鉴"),a("OutboundLink")],1),e._v(" https://blog.csdn.net/renzhenhuai/article/details/12105457")])])}),[],!1,null,null,null);t.default=s.exports}}]);