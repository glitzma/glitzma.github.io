(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{525:function(t,o,n){"use strict";n.r(o);var e=n(7),l=Object(e.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"爬虫难点1-环路"}},[t._v("爬虫难点1    环路")]),t._v(" "),n("p",[t._v("网络爬虫有时候会陷入循环或者环路中，比如从页面A，A链接到页面B，B链接到页面C，页面C又会链接到页面A。这样就陷入到环路中。")]),t._v(" "),n("blockquote",[n("p",[t._v("环路影响：\n消耗网络带宽，无法获取其他页面\n对Web服务器也是负担，可能击垮该站点，可能阻止正常用户访问该站点\n即使没有性能影响，但获取大量重复页面也导致数据冗余")])]),t._v(" "),n("ul",[n("li",[t._v("解决方案：\n简单限定爬虫的最大循环次数，对于某web站点访问超过一定阈值就跳出，避免无限循环\n保存一个已访问url列表，记录页面是否被访问过的技术")])]),t._v(" "),n("blockquote",[n("p",[t._v("1、二叉树和散列表，快速判定某个url是否访问过\n2、存在位图就是new int[length]，然后把第几个数置为1，表示已经访问过了。可不可以再优化，int是32位，32位可以表示32个数字。HashCode会存在冲突的情况，两个URL映射到同一个存在位上，冲突的后果是某个页面被忽略（这比死循环的恶作用小）\n3、保存检查一定要及时把已访问的URL列表保存到硬盘上，防止爬虫崩溃，内存里的数据会丢失\n4、集群，分而治之多台机器一起爬虫，可以根据URL计算HashCode，然后根据HashCode映射到相应机器的id（第0台、第1台、第2台等等）")])]),t._v(" "),n("ul",[n("li",[t._v("难点2    URL别名\n有些URL名称不一样，但是指向同一个资源。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("URl 1\tURL 2\t什么时候是别名\nwww.foo.com/bar.html\twww.foo.com:80/bar.html\t默认端口是80\nwww.foo.com/~fred\twww.foo.com/%7Ffred\t%7F与~相同\nwww.foo.com/x.html#top\twww.foo.com/x.html#middle\t%7F与~相同\nhttps://www.baidu.com/\thttps://www.BAIDU.com/\t服务器是大小写无关\nwww.foo.com/index.html\twww.foo.com\t默认页面为 index.html\nwww.foo.com/index.html\t209.123.123/index.html\tip和域名相同\n")])])]),n("ul",[n("li",[t._v("难点3    动态虚拟空间")])]),t._v(" "),n("p",[t._v("比如日历程序，它会生成一个指向下一个月的链接，真正的用户是不会不停地请求下个月的链接的。但是不了解这些内容特性的爬虫蜘蛛可能会不断向这些资源发出无穷的请求。")]),t._v(" "),n("h6",{attrs:{id:"抓取策略"}},[t._v("抓取策略")]),t._v(" "),n("blockquote",[n("p",[t._v("一般策略是深度优先或者广度优先。有些技术能使得爬虫蜘蛛有更好的表现")])]),t._v(" "),n("blockquote",[n("p",[t._v("广度优先的爬行，避免深度优先陷入某个站点的环路中，无法访问其他站点。\n限制访问次数，限定一段时间内机器人可以从一个web站点获取的页面数量。\n内容指纹，根据页面的内容计算出一个校验和，但是动态的内容（日期，评论数目）会阻碍重复检测\n维护黑名单\n人工监视，特殊情况发出邮件通知\n动态变化，根据当前热点新闻等等\n规范化URL，把一些转义字符、ip与域名之类的统一\n限制URL大小，环路可能会使得URL长度增加，比如/index.html，/folder/index.html，/folder/folder/index.html……")])]),t._v(" "),n("p",[t._v("全文索引\n全文索引就是一个数据库，给它一个单词，它可以立刻提供包含那个单词的所有文字。创建了索引后，就不必对文档自身进行扫描了。\n比如：文章A包含了Java、学习、程序员；文章B包含了Java、Python、面试、招聘。\n如果搜索了Java，可以知道得到文章A和文章B，而不必对文章A、B全文扫描。")])])}),[],!1,null,null,null);o.default=l.exports}}]);