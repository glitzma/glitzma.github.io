(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{621:function(e,r,t){"use strict";t.r(r);var n=t(7),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("📖文章目录\n"),t("TOC")],1),e._v(" "),t("h2",{attrs:{id:"v8垃圾回收机制"}},[e._v("V8垃圾回收机制")]),e._v(" "),t("p",[e._v("概括："),t("br"),e._v("\nv8的垃圾回收机制策略主要是基于分布式垃圾回收机制，其根据对象的存活时间，将内存的垃圾回收进行不同的分代，然后对不同的分代进行不同的垃圾回收算法。"),t("br"),e._v("\nv8内存结构由以下几个部分组成：新生代(new_space)、老生代(old_space)、大对象区(large_object_space)、代码区(code_space)、map区(map_space)")]),e._v(" "),t("h4",{attrs:{id:"新生代"}},[e._v("新生代：")]),e._v(" "),t("p",[e._v("垃圾回收过程中主要采用了Scavenge算法。在Scavenge算法的具体实现中，主要采用了Cheney算法，它将新生代内存一分为二，一个叫From，一个叫To。当From中某对象没有其它引用时，将其它活跃对象复制到To空间，然后将From中所有非存活对象清除。清空后To与From进行角色互换，再有垃圾数据时重复刚才的做法。")]),e._v(" "),t("h4",{attrs:{id:"对象晋升"}},[e._v("对象晋升：")]),e._v(" "),t("p",[e._v("一个对象复制多次后依旧存活，该对象在下一次垃圾回收时直接转移到老生代中，这个过程叫"),t("code",[e._v("晋升")])]),e._v(" "),t("p",[e._v("晋升条件：")]),e._v(" "),t("ul",[t("li",[e._v("对象是否经历过一次Scavenge算法")]),e._v(" "),t("li",[e._v("To空间的内存占比是否已经超过25%")])]),e._v(" "),t("h4",{attrs:{id:"老生代"}},[e._v("老生代：")]),e._v(" "),t("p",[e._v("在老生代中，因为管理着大量的存活对象，如果依旧使用Scavenge算法的话，很明显会浪费一半的内存，因此已经不再使用Scavenge算法，而是采用新的算法"),t("code",[e._v("Mark-Sweep")]),e._v("(标记清除)和"),t("code",[e._v("Mark-Compact")]),e._v("(标记整理)来进行管理。早前我们听过引用计数的算法，但碰到循环引用时无法被回收。截至2012年所有的现代浏览器均放弃了这种算法，转而采用新的"),t("code",[e._v("Mark-Sweep")]),e._v("(标记清除)和"),t("code",[e._v("Mark-Compact")]),e._v("(标记整理)算法。"),t("br"),e._v(" "),t("code",[e._v("Mark-Sweep")]),e._v("(标记清除)分为标记和清除两个阶段，在标记阶段会遍历堆中的所有对象，然后标记活着的对象，在清除阶段中，会将死亡的对象进行清除。")]),e._v(" "),t("ul",[t("li",[e._v("垃圾回收器会在内部构建一个根列表，用于从根节点出发去寻找那些可以被访问到的变量。比如在"),t("code",[e._v("JavaScript")]),e._v("中，"),t("code",[e._v("window")]),e._v("全局对象可以看成一个根节点。")]),e._v(" "),t("li",[e._v("然后，垃圾回收器从所有根节点出发，遍历其可以访问到的子节点，并将其标记为活动的，根节点不能到达的地方即为非活动的，将会被视为垃圾。")]),e._v(" "),t("li",[e._v("最后，垃圾回收器将会释放所有非活动的内存块，并将其归还给操作系统。")])]),e._v(" "),t("p",[e._v("这种方式会出现内存碎片如果需要很大的空间，但不足以分配时就会提前触发垃圾回收，因此"),t("code",[e._v("Mark-Compact(标记整理)")]),e._v("就出现了。解决方式为将活动对象住内存的一端移动，移动后清理掉边界外的所有内存。"),t("br"),e._v("\n由于JS的单线程机制，垃圾回收的过程会阻碍主线程同步任务的执行，待执行完垃圾回收后才会再次恢复执行主任务的逻辑，这种行为被称为全停顿("),t("code",[e._v("stop-the-world")]),e._v(")。在标记阶段同样会阻碍主线程的执行，老生代会保存大量存活的对象，如果在标记阶段将整个堆内存遍历一遍，那么势必会造成严重的卡顿。"),t("br"),e._v("\n为了减少卡顿，v8引入了"),t("code",[e._v("Incremental Marking")]),e._v("(增量标记)，先标记内存中的了部分对象，然后将权交给js主线程。当主线程任务执行完后，再从原来标记的地方继续标记，直到标记完整个内存。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("这个理念其实有点像React框架中的Fiber架构，只有在浏览器的空闲时间才会去遍历"),t("code",[e._v("Fiber Tree")]),e._v("执行对应的任务，否则延迟执行，尽可能少地影响主线程的任务，避免应用卡顿，提升应用性能。")])]),e._v(" "),t("p",[e._v("得益于增量标记的好处，V8引擎后续继续引入了延迟清理(lazy sweeping)和增量式整理(incremental compaction)，让清理和整理的过程也变成增量式的。同时为了充分利用多核CPU的性能，也将引入并行标记和并行清理，进一步地减少垃圾回收对主线程的影响，为应用提升了更多的性能。")]),e._v(" "),t("h4",{attrs:{id:"如何避免内存泄漏"}},[e._v("如何避免内存泄漏")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("当进行垃圾回收时，在标记阶段因为window对象可以作为根节点，在window上挂载的属性均可以被访问到，并将其标记为活动的从而常驻内存，因此也就不会被垃圾回收，只有在整个进程退出时全局作用域才会被销毁。如果你遇到需要必须使用全局变量的场景，那么请保证一定要在全局变量使用完毕后将其设置为null从而触发回收机制。")])]),e._v(" "),t("li",[t("p",[e._v("经常会有使用setTimeout或者setInterval等定时器的场景，定时器本身是一个非常有用的功能，忘记在适当的时间手动清除定时器，那么很有可能就会导致内存泄漏。")])]),e._v(" "),t("li",[t("p",[e._v("少用闭包")])]),e._v(" "),t("li",[t("p",[e._v("我们在操作DOM元素时，为了避免多次获取DOM元素，我们会将DOM元素存储在一个数据字典中。我们手动清除对button元素的引用才会被垃圾回收。")])]),e._v(" "),t("li",[t("p",[e._v("在ES6中为我们新增了两个有效的数据结构WeakMap和WeakSet，就是为了解决内存泄漏的问题而诞生的弱引用")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904016325902344",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章地址"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"event-loop"}},[e._v("event Loop")]),e._v(" "),t("img",{attrs:{width:"80%",src:e.$withBase("/assets/img/event-loop.jpeg")}}),e._v(" "),t("p",[e._v("这张图将浏览器的Event Loop完整的描述了出来，我来讲执行一个JavaScript代码的具体流程：")]),e._v(" "),t("ol",[t("li",[e._v("执行全局Script同步代码，这些同步代码有一些是同步语句，有一些是异步语句（比如setTimeout等）；")]),e._v(" "),t("li",[e._v("全局"),t("code",[e._v("Script")]),e._v("代码执行完毕后，调用栈"),t("code",[e._v("Stack")]),e._v("会清空；")]),e._v(" "),t("li",[e._v("从微队列"),t("code",[e._v("microtask queue")]),e._v("中取出位于队首的回调任务，放入调用栈Stack中执行，执行完后"),t("code",[e._v("microtask queue")]),e._v("长度减1；")]),e._v(" "),t("li",[e._v("继续取出位于队首的任务，放入调用栈Stack中执行，以此类推，直到直到把microtask queue中的所有任务都执行完毕。注意，如果在执行microtask的过程中，又产生了microtask，那么会加入到队列的末尾，也会在这个周期被调用执行；")]),e._v(" "),t("li",[e._v("microtask queue中的所有任务都执行完毕，此时microtask queue为空队列，调用栈Stack也为空；")]),e._v(" "),t("li",[e._v("取出宏队列macrotask queue中位于队首的任务，放入Stack中执行；")]),e._v(" "),t("li",[e._v("执行完毕后，调用栈Stack为空；")]),e._v(" "),t("li",[e._v("重复第3-7个步骤；")]),e._v(" "),t("li",[e._v("重复第3-7个步骤；")]),e._v(" "),t("li",[t("code",[e._v("......")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("3个重点")]),e._v(" "),t("p",[e._v("有微则微无微则宏")]),e._v(" "),t("ol",[t("li",[e._v("宏队列macrotask一次只从队列中取一个任务执行，执行完后就去执行微任务队列中的任务；")]),e._v(" "),t("li",[e._v("微任务队列中所有的任务都会被依次取出来执行，知道microtask queue为空；")]),e._v(" "),t("li",[e._v("图中没有画UI rendering的节点，因为这个是由浏览器自行判断决定的，但是只要执行"),t("code",[e._v("UI rendering")]),e._v("，它的节点是在执行完所有的"),t("code",[e._v("microtask")]),e._v("之后，下一个macrotask之前，紧跟着执行UI render。")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000016278115",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章1"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/184988903562",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章2"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"其它文章链接总结"}},[e._v("其它文章链接总结")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://www.liweiliang.com/962.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("事件循环如何影响渲染"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903811232825357",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端跨页面通信文章地址"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://javascript.ruanyifeng.com/dom/event.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("事件模型文章地址"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome 浏览器架构"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器的工作原理：新式网络浏览器幕后揭秘"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6850037273312886797",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端性能优化 - 用RAIL模型分析性能"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844904083212468238",target:"_blank",rel:"noopener noreferrer"}},[e._v("重排(reflow)和重绘(repaint)"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1508941",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端性能优化之白屏时间"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33370207",target:"_blank",rel:"noopener noreferrer"}},[e._v("网页图片加载优化方案"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/d616d887953a",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器工作原理：从 URL 输入到页面展现到底发生了什么"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/d24a891d4de6",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端浏览器动画性能优化"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://segmentfault.com/a/1190000014520786",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器渲染流程&Composite（渲染层合并）简单总结"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"工程化"}},[e._v("工程化")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000017466120",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端模块化详解(完整版)"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903544756109319",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tree-Shaking性能优化实践 - 原理篇"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.h5w3.com/19480.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("uglify原理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://my.oschina.net/u/4088983/blog/4545928",target:"_blank",rel:"noopener noreferrer"}},[e._v("你不知道的 Babel（7000字，详解原理并手写插件）"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://developer.aliyun.com/article/61047",target:"_blank",rel:"noopener noreferrer"}},[e._v("细说 webpack 之流程篇"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903789804126222",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-插件机制杂记"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/youngwind/blog/issues/101",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack源码学习系列之三：loader 机制"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://tech.antfin.com/community/articles/536",target:"_blank",rel:"noopener noreferrer"}},[e._v("可能是你见过最完善的微前端解决方案"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"react"}},[e._v("react")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903988794671117",target:"_blank",rel:"noopener noreferrer"}},[e._v("由浅到深的React合成事件"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://segmentfault.com/a/1190000019994425",target:"_blank",rel:"noopener noreferrer"}},[e._v("React系列 --- virtualdom diff算法实现分析(三)"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903781813993486",target:"_blank",rel:"noopener noreferrer"}},[e._v("【React深入】setState的执行机制"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/57346388",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("[译]")]),e._v("深入React fiber架构及源码"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24776678",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解 React 高阶组件"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/HuJiaoHJ/blog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[e._v("从源码看React异常处理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/brickspert/blog/issues/36",target:"_blank",rel:"noopener noreferrer"}},[e._v("React 项目性能分析及优化"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"redux"}},[e._v("redux")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://cn.redux.js.org/docs/introduction/ThreePrinciples.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux核心原则"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://tech.meituan.com/2017/07/14/redux-design-code.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redux从设计到源码"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"vue"}},[e._v("vue")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903869730799629",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue数据绑定原理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/11760466.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue系列---理解Vue中的computed,watch,methods的区别及源码实现(六)"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903927129849864",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入剖析Vue源码 - Vue插槽，你想了解的都在这里!"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/cmt/p/14553189.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("nextTick原理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903950886371342",target:"_blank",rel:"noopener noreferrer"}},[e._v("彻底搞懂Vue中keep-alive"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"操作系统"}},[e._v("操作系统")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903801321685000",target:"_blank",rel:"noopener noreferrer"}},[e._v("进程和线程"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/c1015f5ffa74",target:"_blank",rel:"noopener noreferrer"}},[e._v("进程通信"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/qq_35642036/article/details/82809812",target:"_blank",rel:"noopener noreferrer"}},[e._v("进程调度策略"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/44125bb12ebf",target:"_blank",rel:"noopener noreferrer"}},[e._v("死锁"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://imageslr.github.io/2020/02/27/select-poll-epoll.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IO多路复用"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"网络"}},[e._v("网络")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32059190",target:"_blank",rel:"noopener noreferrer"}},[e._v("七层网络模型"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://coolshell.cn/articles/19840.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26682342",target:"_blank",rel:"noopener noreferrer"}},[e._v("https"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903984524705800",target:"_blank",rel:"noopener noreferrer"}},[e._v("http2.0"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/wolfGuiDao/article/details/108729560",target:"_blank",rel:"noopener noreferrer"}},[e._v("http3.0"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/LL845876425/article/details/106393358",target:"_blank",rel:"noopener noreferrer"}},[e._v("websocket"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://coolshell.cn/articles/11564.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tcp"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/337678680",target:"_blank",rel:"noopener noreferrer"}},[e._v("udp"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"node"}},[e._v("node")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904030905303054",target:"_blank",rel:"noopener noreferrer"}},[e._v("模块机制"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/05/require.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("require原理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://learnku.com/articles/38802",target:"_blank",rel:"noopener noreferrer"}},[e._v("事件循环"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/dashnowords/p/10958457.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cluster原理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.barretlee.com/blog/2017/06/06/dive-to-nodejs-at-stream-module/",target:"_blank",rel:"noopener noreferrer"}},[e._v("流机制"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1630068",target:"_blank",rel:"noopener noreferrer"}},[e._v("pipe原理"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903444839399438",target:"_blank",rel:"noopener noreferrer"}},[e._v("守护进程"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://www.ayqy.net/blog/nodejs%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("进程通信"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://www.alloyteam.com/2013/12/node-js-series-exception-caught/",target:"_blank",rel:"noopener noreferrer"}},[e._v("异常处理"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"架构设计"}},[e._v("架构设计")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("常用设计模式"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/f667ea3e4a11",target:"_blank",rel:"noopener noreferrer"}},[e._v("重构"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/79899786",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVVM"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/zhangli_/article/details/50419783",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVC"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/4b754ea48a40",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVP"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/febobo/web-interview",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端面试题"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);