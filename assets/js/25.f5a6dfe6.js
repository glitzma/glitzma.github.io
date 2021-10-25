(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{502:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"参考文章"}},[t._v("参考文章")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.websiteoptimization.com/speed/tweak/psychology-web-performance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Psychology of Web Performance"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://csspod.com/frontend-performance-best-practices/#content-http",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化最佳实践"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://alienzhou.com/projects/fe-performance-journey/6-runtime/#_4-%E5%96%84%E7%94%A8-composite",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"目录"}},[t._v("目录：")]),t._v(" "),e("ul",[e("li",[t._v("页面内容\n"),e("ul",[e("li",[t._v("减少 HTTP 请求数")]),t._v(" "),e("li",[t._v("减少 DNS 查询")]),t._v(" "),e("li",[t._v("避免重定向")]),t._v(" "),e("li",[t._v("缓存 Ajax 请求")]),t._v(" "),e("li",[t._v("延迟加载")]),t._v(" "),e("li",[t._v("预先加载")]),t._v(" "),e("li",[t._v("资源懒加载")]),t._v(" "),e("li",[t._v("减少 DOM 元素数量")]),t._v(" "),e("li",[t._v("缓存DOM查询")]),t._v(" "),e("li",[t._v("合并DOM插入")]),t._v(" "),e("li",[t._v("划分内容到不同域名")]),t._v(" "),e("li",[t._v("尽量减少 iframe 使用")]),t._v(" "),e("li",[t._v("避免 404 错误")])])]),t._v(" "),e("li",[t._v("服务器\n"),e("ul",[e("li",[t._v("使用 CDN")]),t._v(" "),e("li",[t._v("添加 Expires 或 Cache-Control 响应头")]),t._v(" "),e("li",[t._v("启用 Gzip")]),t._v(" "),e("li",[t._v("配置 Etag")]),t._v(" "),e("li",[t._v("尽早输出缓冲")]),t._v(" "),e("li",[t._v("Ajax 请求使用 GET 方法")]),t._v(" "),e("li",[t._v("避免图片 src 为空")])])]),t._v(" "),e("li",[t._v("Cookie\n"),e("ul",[e("li",[t._v("减少 Cookie 大小")]),t._v(" "),e("li",[t._v("静态资源使用无 Cookie 域名")])])]),t._v(" "),e("li",[t._v("CSS\n"),e("ul",[e("li",[t._v("把样式表放在 "),e("code",[t._v("<head>")]),t._v(" 中")]),t._v(" "),e("li",[t._v("不要使用 CSS 表达式")]),t._v(" "),e("li",[t._v("使用 "),e("code",[t._v("<link>")]),t._v(" 替代 "),e("code",[t._v("@import")])]),t._v(" "),e("li",[t._v("不要使用 filter")])])]),t._v(" "),e("li",[t._v("JavaScript\n"),e("ul",[e("li",[t._v("把脚本放在页面底部")]),t._v(" "),e("li",[t._v("使用外部 JavaScript 和 CSS")]),t._v(" "),e("li",[t._v("压缩 JavaScript 和 CSS")]),t._v(" "),e("li",[t._v("移除重复脚本")]),t._v(" "),e("li",[t._v("减少 DOM 操作")]),t._v(" "),e("li",[t._v("使用高效的事件处理")])])]),t._v(" "),e("li",[t._v("图片\n"),e("ul",[e("li",[t._v("优化图片")]),t._v(" "),e("li",[t._v("优化 CSS Sprite")]),t._v(" "),e("li",[t._v("不要在 HTML 中缩放图片")]),t._v(" "),e("li",[t._v("使用体积小、可缓存的 favicon.ico")])])]),t._v(" "),e("li",[t._v("移动端\n"),e("ul",[e("li",[t._v("保持单个文件小于 25 KB")]),t._v(" "),e("li",[t._v("打包内容为分段（multipart）文档")])])])]),t._v(" "),e("h2",{attrs:{id:"页面内容"}},[t._v("页面内容")]),t._v(" "),e("h5",{attrs:{id:"减少-http-请求数"}},[t._v("减少 HTTP 请求数")]),t._v(" "),e("p",[t._v("Web 前端 80% 的响应时间花在图片、样式、脚本等资源下载上。浏览器对每个域名的连接数是有限制的，减少请求次数是缩短响应时间的关键。")]),t._v(" "),e("p",[t._v("通过简洁的设计减少页面所需资源，进而减少 HTTP 请求，这是最直接的方式，前提是你的 Boss、设计师同事不打死你。所以，还是另辟蹊径吧：")]),t._v(" "),e("ul",[e("li",[t._v("合并 "),e("code",[t._v("JavaScript")]),t._v("、"),e("code",[t._v("CSS")]),t._v(" 等文件；\n"),e("ul",[e("li",[t._v("服务器端（CDN）自动合并")]),t._v(" "),e("li",[t._v("基于 "),e("code",[t._v("Node.js")]),t._v(" 的文件合并工具一抓一大把")])])]),t._v(" "),e("li",[t._v("使用CSS Sprite：将背景图片合并成一个文件，通过background-image 和 background-position 控制显示；\n"),e("ul",[e("li",[t._v("Sprite Cow")]),t._v(" "),e("li",[t._v("Spritebox")])]),t._v(" "),e("blockquote",[e("p",[t._v("逐步被 Icon Font 和 SVG Sprite 取代。")])])]),t._v(" "),e("li",[t._v("Image Map：合并图片，然后使用坐标映射不同的区域（演示）。\n"),e("blockquote",[e("p",[t._v("缺点：仅适用于相连的图片；设置坐标过程乏味且易出错；可访性问题。不推荐使用这种过时的技术。")])])]),t._v(" "),e("li",[t._v("Inline Assets：使用 Data URI scheme 将图片嵌入 HTML 或者 CSS 中；或者将 CSS、"),e("code",[t._v("JS")]),t._v("、图片直接嵌入 HTML 中。\n"),e("blockquote",[e("p",[t._v("会增加文件大小，也可能产生浏览器兼容及其他性能问题（有待整理补充）。")])])])]),t._v(" "),e("h6",{attrs:{id:"未来的趋势是使用内嵌-svg。"}},[t._v("未来的趋势是使用内嵌 SVG。")]),t._v(" "),e("ul",[e("li",[t._v("内容分片，将请求划分到不同的域名上。")])]),t._v(" "),e("blockquote",[e("p",[t._v("HTTP/2 通过多路复用大幅降低了多个请求的开销。通过数据分帧层，客户端和服务器之间只需要建立一个 TCP 连接，即可同时收发多个文件，而且，该连接在相当长的时间周期内保持打开（持久化），以便复用。")])]),t._v(" "),e("blockquote",[e("p",[t._v("HTTP/2 的新特性意味着上述优化实践不再适用，但考虑到客户端对 HTTP/2 的支持覆盖程度，还需根据实际数据权衡。")])]),t._v(" "),e("h5",{attrs:{id:"减少-dns-查询"}},[t._v("减少 DNS 查询")]),t._v(" "),e("p",[t._v("用户输入 URL 以后，浏览器首先要查询域名（hostname）对应服务器的 IP 地址，一般需要耗费 20-120 毫秒 时间。DNS 查询完成之前，浏览器无法从服务器下载任何数据。")]),t._v(" "),e("p",[t._v("基于性能考虑，ISP、局域网、操作系统、浏览器都会有相应的 DNS 缓存机制。")]),t._v(" "),e("ul",[e("li",[t._v("IE 缓存 30 分钟，可以通过注册表中 DnsCacheTimeout 项设置；")]),t._v(" "),e("li",[t._v("Firefox 混存 1 分钟，通过 network.dnsCacheExpiration 配置；")]),t._v(" "),e("li",[t._v("（TODO：补充其他浏览器缓存信息）")])]),t._v(" "),e("p",[t._v("首次访问、没有相应的 DNS 缓存时，域名越多，查询时间越长。所以应尽量减少域名数量。但基于并行下载考虑，把资源分布到 2 个域名上（最多不超过 4 个）。这是减少 DNS 查询同时保证并行下载的折衷方案。")]),t._v(" "),e("h5",{attrs:{id:"避免重定向"}},[t._v("避免重定向")]),t._v(" "),e("p",[t._v("HTTP 重定向通过 301/302 状态码实现。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 301 Moved Permanently\nLocation: http://example.com/newuri\nContent-Type: text/html\n")])])]),e("p",[t._v("客户端收到服务器的重定向响应后，会根据响应头中 Location 的地址再次发送请求。重定向会影响用户体验，尤其是多次重定向时，用户在一段时间内看不到任何内容，只看到浏览器进度条一直在刷新。")]),t._v(" "),e("p",[t._v("有时重定向无法避免，在糟糕也比抛出 404 好。虽然通过 HTML meta refresh 和 JavaScript 也能实现，但首选 HTTP 3xx 跳转，以保证浏览器「后退」功能正常工作（也利于 SEO）。")]),t._v(" "),e("ul",[e("li",[t._v("最浪费的重定向经常发生、而且很容易被忽略：URL 末尾应该添加 / 但未添加。比如，访问 http://astrology.yahoo.com/astrology 将被 301 重定向到 http://astrology.yahoo.com/astrology/（注意末尾的 /）。如果使用 Apache，可以通过 Alias 或 mod_rewrite 或 DirectorySlash 解决这个问题。")]),t._v(" "),e("li",[t._v("网站域名变更：CNAME 结合 Alias 或 mod_rewrite 或者其他服务器类似功能实现跳转。")])]),t._v(" "),e("h5",{attrs:{id:"缓存-ajax-请求"}},[t._v("缓存 Ajax 请求")]),t._v(" "),e("p",[t._v("Ajax 可以提高用户体验。但「异步」不意味着「及时」，优化 Ajax 响应速度提高性能仍是需要关注的主题。")]),t._v(" "),e("p",[t._v("最重要的的优化方式是缓存响应结果，详见 添加 Expires 或 Cache-Control 响应头。")]),t._v(" "),e("p",[t._v("以下规则也关乎 Ajax 响应速度：")]),t._v(" "),e("ul",[e("li",[t._v("启用 Gzip")]),t._v(" "),e("li",[t._v("减少 DNS 查询")]),t._v(" "),e("li",[t._v("压缩 JavaScript 和 CSS")]),t._v(" "),e("li",[t._v("避免重定向")]),t._v(" "),e("li",[t._v("配置 Etag")])]),t._v(" "),e("h5",{attrs:{id:"延迟加载"}},[t._v("延迟加载")]),t._v(" "),e("p",[t._v("页面初始加载时哪些内容是绝对必需的？不在答案之列的资源都可以延迟加载。比如：")]),t._v(" "),e("ul",[e("li",[t._v("非首屏使用的数据、样式、脚本、图片等；")]),t._v(" "),e("li",[t._v("用户交互时才会显示的内容。")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preview.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-realsrc")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("abc.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imag1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data-realsrc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("遵循「渐进增强」理念开发的网站：JavaScript 用于增强用用户体验，但没有（不支持） JavaScript 也能正常工作，完全可以延迟加载 JavaScript。")]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("延迟渲染")])])]),t._v(" "),e("blockquote",[e("p",[t._v("将首屏以外的 HTML 放在不渲染的元素中，如隐藏的 "),e("code",[t._v("<textarea>")]),t._v("，或者 type 属性为非执行脚本的 "),e("code",[t._v("<script>")]),t._v(" 标签中，减少初始渲染的 DOM 元素数量，提高速度。等首屏加载完成或者用户操作时，再去渲染剩余的页面内容。")])]),t._v(" "),e("h5",{attrs:{id:"预先加载"}},[t._v("预先加载")]),t._v(" "),e("p",[t._v("预先加载利用浏览器空闲时间请求将来要使用的资源，以便用户访问下一页面时更快地响应。")]),t._v(" "),e("ul",[e("li",[t._v("无条件预先加载：页面加载完成（load）后，马上获取其他资源。以 google.com 为例，首页加载完成后会立即下载一个 Sprite 图片，此图首页不需要，但是搜索结果页要用到。")]),t._v(" "),e("li",[t._v("有条件预先加载：根据用户行为预判用户去向，预载相关资源。比如 search.yahoo.com 开始输入时会有额外的资源加载。\n"),e("blockquote",[e("p",[t._v("Chrome 等浏览器的地址栏也有类似的机制。")])])]),t._v(" "),e("li",[t._v("有「阴谋」的预先加载：页面即将上线新版前预先加载新版内容。网站改版后由于缓存、使用习惯等原因，会有旧版的网站更快更流畅的反馈。为缓解这一问题，在新版上线之前，旧版可以利用空闲提前加载一些新版的资源缓存到客户端，以便新版正式上线后更快的载入（好一个「心机猿」😱）。\n"),e("blockquote",[e("p",[t._v("「双十一」、「黑五」这类促销日来临之前，也可以预先下载一些相关资源到客户端（浏览器、App 等），有效利用浏览器缓存和本地存储，降低活动当日请求压力，提高用户体验。")])])])]),t._v(" "),e("p",[t._v("预解析DNS")]),t._v(" "),e("p",[t._v("https开头的域名下很多浏览器默认是关闭预解析的。需要加入")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-controll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//host_name_to_prefetch.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"https://www.w3.org/TR/resource-hints/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resource Hints Spec"),e("OutboundLink")],1)])]),t._v(" "),e("h5",{attrs:{id:"缓存dom查询"}},[t._v("缓存dom查询")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BAD 未缓存")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// todo")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GOOD 缓存")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pList "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// todo")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n\n")])])]),e("h5",{attrs:{id:"减少-dom-元素数量"}},[t._v("减少 DOM 元素数量")]),t._v(" "),e("p",[t._v("复杂的页面不仅下载的字节更多，JavaScript DOM 操作也更慢。例如，同是添加一个事件处理器，500 个元素和 5000 个元素的页面速度上会有很大区别。")]),t._v(" "),e("p",[t._v("从以下几个角度考虑移除不必要的标记：")]),t._v(" "),e("ul",[e("li",[t._v("是否还在使用表格布局？")]),t._v(" "),e("li",[t._v("塞进去更多的 "),e("code",[t._v("<div>")]),t._v(" 仅为了处理布局问题？也许有更好、更语义化的标记。")]),t._v(" "),e("li",[t._v("能通过伪元素实现的功能，就没必要添加额外元素，如清除浮动。\n浏览器控制台中输入以下代码可以计算出页面中有多少 DOM 元素：")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("对比标记良好的的网站，看看差距是多少。")]),t._v(" "),e("p",[t._v("为什么不使用表格布局？")]),t._v(" "),e("ul",[e("li",[t._v("更多的标签，增加文件大小；")]),t._v(" "),e("li",[t._v("不易维护，无法适应响应式设计；")]),t._v(" "),e("li",[t._v("性能考量，默认的表格布局算法会产生大量重绘（参见表格布局算法）。")])]),t._v(" "),e("h5",{attrs:{id:"合并dom插入"}},[t._v("合并DOM插入")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" listNode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" frag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" docuemanager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" li"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    li "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    li"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' list Item '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    frag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlistNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h5",{attrs:{id:"划分内容到不同域名"}},[t._v("划分内容到不同域名")]),t._v(" "),e("p",[t._v("浏览器一般会限制每个域的并行线程（一般为 6 个，甚至更少），使用不同的域名可以最大化下载线程，但注意保持在 2-4 个域名内，以避免 DNS 查询损耗。")]),t._v(" "),e("p",[t._v("例如，动态内容放在 csspod.com 上，静态资源放在 static.csspod.com 上。这样还可以禁用静态资源域下的 Cookie，减少数据传输，详见 "),e("a",{attrs:{href:"https://csspod.com/frontend-performance-best-practices/#cookie-free",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 优化"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("更多信息参考 "),e("a",{attrs:{href:"https://yuiblog.com/blog/2007/04/11/performance-research-part-4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maximizing Parallel Downloads in the Carpool Lane"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"尽量减少-iframe-使用"}},[t._v("尽量减少 iframe 使用")]),t._v(" "),e("p",[t._v("使用 iframe 可以在页面中嵌入 HTML 文档，但有利有弊。")]),t._v(" "),e("p",[e("code",[t._v("<iframe>")]),t._v(" 优点：")]),t._v(" "),e("ul",[e("li",[t._v("可以用来加载速度较慢的第三方资源，如广告、徽章；")]),t._v(" "),e("li",[t._v("可用作安全沙箱；")]),t._v(" "),e("li",[t._v("可以并行下载脚本。")])]),t._v(" "),e("p",[e("code",[t._v("<iframe>")]),t._v(" 缺点：")]),t._v(" "),e("ul",[e("li",[t._v("加载代价昂贵，即使是空的页面；")]),t._v(" "),e("li",[t._v("阻塞页面 load 事件触发；")])]),t._v(" "),e("blockquote",[e("p",[t._v("Iframe 完全加载以后，父页面才会触发 load 事件。 Safari、Chrome 中通过 JavaScript 动态设置 iframe src 可以避免这个问题。")])]),t._v(" "),e("ul",[e("li",[t._v("缺乏语义。")])]),t._v(" "),e("h5",{attrs:{id:"避免-404-错误"}},[t._v("避免 404 错误")]),t._v(" "),e("p",[t._v("HTTP 请求很昂贵，返回无效的响应（如 404 未找到）完全没必要，降低用户体验而且毫无益处。")]),t._v(" "),e("p",[t._v("一些网站设计很酷炫、有提示信息的 404 页面，有助于提高用户体验，但还是浪费服务器资源。尤其糟糕的是外部脚本返回 404，不仅阻塞其他资源下载，浏览器还会尝试把 404 页面内容当作 JavaScript 解析，消耗更多资源。")]),t._v(" "),e("p",[e("em",[t._v("补充规则")]),t._v("：")]),t._v(" "),e("p",[t._v("定义字符集，并放在 "),e("code",[t._v("<head>")]),t._v(" 顶部。大多数浏览器会暂停页面渲染，直到找到字符集定义。")]),t._v(" "),e("h2",{attrs:{id:"服务器"}},[t._v("服务器")]),t._v(" "),e("p",[t._v("服务器相关优化设置可参考 H5BP 相关项目：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/h5bp/server-configs-nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx HTTP server boilerplate configs"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/h5bp/server-configs-apache",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache HTTP server boilerplate configs"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/h5bp/server-configs-iis",target:"_blank",rel:"noopener noreferrer"}},[t._v("IIS Web.Config Boilerplates"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"使用-cdn"}},[t._v("使用 CDN")]),t._v(" "),e("p",[t._v("网站 80-90% 响应时间消耗在资源下载上，减少资源下载时间是性能优化的黄金发则。")]),t._v(" "),e("p",[t._v("相比分布式架构的复杂和巨大投入，静态内容分发网络（CDN）可以以较低的投入，获得加载速度有效提升。")]),t._v(" "),e("h5",{attrs:{id:"添加-expires-或-cache-control-响应头"}},[t._v("添加 Expires 或 Cache-Control 响应头")]),t._v(" "),e("ul",[e("li",[t._v("静态内容：将 Expires 响应头设置为将来很远的时间，实现「永不过期」策略；")]),t._v(" "),e("li",[t._v("动态内容：设置合适的 Cache-Control 响应头，让浏览器有条件地发起请求。")])]),t._v(" "),e("blockquote",[e("p",[t._v("Cache-Control 头在 HTTP/1.1 规范中定义，取代了之前用来定义响应缓存策略的头（例如 Expires、Pragma）。当前的所有浏览器都支持 Cache-Control，因此，使用它就够了。\n鉴于静态内容和动态内容不同的缓存策略，实践中一般会把二者部署在不同的服务器（域名）以方便管理。")])]),t._v(" "),e("p",[t._v("参考链接：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 缓存 | Web Fundamentals - Google Developers"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/h5bp/server-configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("H5BP - Server Configs"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"启用-gzip"}},[t._v("启用 Gzip")]),t._v(" "),e("p",[t._v("Gzip 压缩通常可以减少 70% 的响应大小，对某些文件更可能高达 90%，比 Deflate 更高效。主流 Web 服务器都有相应模块，而且绝大多数浏览器支持 gzip 解码。所以，应该对 HTML、CSS、"),e("code",[t._v("JS")]),t._v("、XML、JSON 等文本类型的内容启用压缩。")]),t._v(" "),e("p",[t._v("注意，图片和 PDF 文件不要使用 gzip。它们本身已经压缩过，再使用 gzip 压缩不仅浪费 CPU 资源，而且还可能增加文件体积。")]),t._v(" "),e("p",[t._v("对于不支持的 Gzip 的用户代理，通过设置 Vary 响应头，返回为未压缩的数据：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Vary: *\n")])])]),e("h5",{attrs:{id:"配置-etag"}},[t._v("配置 Etag")]),t._v(" "),e("p",[t._v("Etag 通过文件版本标识，方便服务器判断请求的内容是否有更新，如果没有就响应 304，避免重新下载。")]),t._v(" "),e("p",[t._v("当然，启用 Etag 可能会导致其他问题，还需要根据具体情况做判断。（TODO：补充相关内容）")]),t._v(" "),e("h5",{attrs:{id:"尽早输出-flush-缓冲"}},[t._v("尽早输出（flush）缓冲")]),t._v(" "),e("p",[t._v("用户请求页面时，服务器通常需要花费 200 ~ 500 毫秒来组合 HTML 页面。在此期间，浏览器处于空闲、等待数据状态。使用PHP 中的 flush() 函数，可以发送部分已经准备好的 HTML 到浏览器，以便服务器还在忙于处理剩余页面时，浏览器可以提前开始获取资源。")]),t._v(" "),e("p",[t._v("可以考虑在 "),e("code",[t._v("</head>")]),t._v(" 之后输出一次缓冲，HTML head 一般比较容易生成，先发送以便浏览器开始获取 "),e("code",[t._v("<head>")]),t._v(" 里引用的 CSS 等资源。")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- css, js --\x3e\n</head>\n<?php flush(); ?>\n<body>\n\x3c!-- content --\x3e\n")])])]),e("h5",{attrs:{id:"ajax-请求使用-get-方法"}},[t._v("Ajax 请求使用 GET 方法")]),t._v(" "),e("p",[t._v("浏览器执行 XMLHttpRequest POST 请求时分成两步，先发送 Header，再发送数据。而 GET 只使用一个 TCP 数据包发送数据，所以首选 GET 方法。")]),t._v(" "),e("p",[t._v("根据 "),e("a",{attrs:{href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 规范"),e("OutboundLink")],1),t._v("，GET 用于获取数据，POST 则用于向服务器发送数据，所以 Ajax 请求数据时使用 GET 更符合规范（"),e("a",{attrs:{href:"http://www.w3schools.com/tags/ref_httpmethods.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("GET 和 POST 对比"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("p",[t._v("IE 中最大 URL 长度为 2K，如果超出 2K，则需要考虑使用 POST 方法。")]),t._v(" "),e("h5",{attrs:{id:"避免图片-src-为空"}},[t._v("避免图片 src 为空")]),t._v(" "),e("p",[t._v("图片 src 属性值为空字符串可能以下面两种形式出现：")]),t._v(" "),e("p",[t._v("HTML:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("JavaScript：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("虽然 src 属性为空字符串，但浏览器仍然会向服务器发起一个 HTTP 请求：")]),t._v(" "),e("ul",[e("li",[t._v("IE 向页面所在的目录发送请求；")]),t._v(" "),e("li",[t._v("Safari、Chrome、Firefox 向页面本身发送请求；")]),t._v(" "),e("li",[t._v("Opera 不执行任何操作。")])]),t._v(" "),e("blockquote",[e("p",[t._v("以上数据较老，当下主流版本可能会有改变。")])]),t._v(" "),e("p",[t._v("空 src 产生请求的后果不容小觑：")]),t._v(" "),e("ul",[e("li",[t._v("给服务器造成意外的流量负担，尤其时日 PV 较大时；")]),t._v(" "),e("li",[t._v("浪费服务器计算资源；")]),t._v(" "),e("li",[t._v("可能产生报错。\n当然，浏览器如此实现也是根据 "),e("a",{attrs:{href:"https://www.ietf.org/rfc/rfc3986.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 3986 - Uniform Resource Identifiers"),e("OutboundLink")],1),t._v("，当空字符串作为 URI 出现时，被当成相对 URI，具体算法参见规范 5.2 节。")])]),t._v(" "),e("p",[t._v("参考链接：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Empty image src can destroy your site"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("空的 href 属性也存在类似问题。用户点击空链接时，浏览器也会向服务器发送 HTTP 请求，可以通过 JavaScript 阻止空链接的默认的行为。")])]),t._v(" "),e("h2",{attrs:{id:"cookie"}},[t._v("Cookie")]),t._v(" "),e("h5",{attrs:{id:"减少-cookie-大小"}},[t._v("减少 Cookie 大小")]),t._v(" "),e("p",[t._v("Cookie 被用于身份认证、个性化设置等诸多用途。Cookie 通过 HTTP 头在服务器和浏览器间来回传送，减少 Cookie 大小可以降低其对响应速度的影响。")]),t._v(" "),e("ul",[e("li",[t._v("去除不必要的 Cookie；")]),t._v(" "),e("li",[t._v("尽量压缩 Cookie 大小；")]),t._v(" "),e("li",[t._v("注意设置 Cookie 的 domain 级别，如无必要，不要影响到 sub-domain；")]),t._v(" "),e("li",[t._v("设置合适的过期时间。")])]),t._v(" "),e("p",[t._v("更多细节参考 "),e("a",{attrs:{href:"http://yuiblog.com/blog/2007/03/01/performance-research-part-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("When the Cookie Crumbles。"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("HTTP/2 首部压缩在客户端和服务器端使用「首部表」来跟踪和存储之前发送的键值对，对于相同的数据，不再随每次请求和响应发送。")])]),t._v(" "),e("h5",{attrs:{id:"静态资源使用无-cookie-域名"}},[t._v("静态资源使用无 Cookie 域名")]),t._v(" "),e("p",[t._v("静态资源一般无需使用 Cookie，可以把它们放在使用二级域名或者专门域名的无 Cookie 服务器上，降低 Cookie 传送的造成的流量浪费，提高响应速度。")]),t._v(" "),e("h2",{attrs:{id:"css"}},[t._v("CSS")]),t._v(" "),e("h5",{attrs:{id:"把样式表放在-head-中"}},[t._v("把样式表放在 "),e("code",[t._v("<head>")]),t._v(" 中")]),t._v(" "),e("p",[t._v("把样式表放在 "),e("code",[t._v("<head>")]),t._v(" 中可以让页面渐进渲染，尽早呈现视觉反馈，给用户加载速度很快的感觉。")]),t._v(" "),e("p",[t._v("这对内容比较多的页面尤为重要，用户可以先查看已经下载渲染的内容，而不是盯着白屏等待。")]),t._v(" "),e("p",[t._v("如果把样式表放在页面底部，一些浏览器为减少重绘，会在 CSS 加载完成以后才渲染页面，用户只能对着白屏干瞪眼，用户体验极差。")]),t._v(" "),e("h5",{attrs:{id:"不要使用-css-表达式"}},[t._v("不要使用 CSS 表达式")]),t._v(" "),e("p",[t._v("CSS 表达式可以在 CSS 里执行 JavaScript，仅 IE5-IE7 支持，IE8 标准模式已经废弃。")]),t._v(" "),e("p",[t._v("CSS 表达式超出预期的频繁执行，页面滚动、鼠标移动时都会不断执行，带来很大的性能损耗。")]),t._v(" "),e("blockquote",[e("p",[t._v("IE7 及更低版本的浏览器已经逐渐成为历史，忘记它吧。")])]),t._v(" "),e("h5",{attrs:{id:"使用-link-替代-import"}},[t._v("使用 "),e("code",[t._v("<link>")]),t._v(" 替代 @import")]),t._v(" "),e("p",[t._v("对于 IE 某些版本，@import 的行为和 "),e("code",[t._v("<link>")]),t._v("放在页面底部一样。所以，不要用它。")]),t._v(" "),e("h5",{attrs:{id:"不要使用-filter"}},[t._v("不要使用 filter")]),t._v(" "),e("p",[t._v("AlphaImageLoader 为 IE5.5-IE8 专有的技术，和 CSS 表达式一样，放进博物馆吧。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：")])]),t._v(" "),e("blockquote",[e("p",[t._v("这里所说的不是 "),e("a",{attrs:{href:"https://www.w3.org/TR/filter-effects-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3 Filter"),e("OutboundLink")],1),t._v("，参考文章 "),e("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/filters/understanding-css/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding CSS Filter Effects"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"javascript"}},[t._v("JavaScript")]),t._v(" "),e("h5",{attrs:{id:"把脚本放在页面底部"}},[t._v("把脚本放在页面底部")]),t._v(" "),e("p",[t._v("浏览器下载脚本时，会阻塞其他资源并行下载，即使是来自不同域名的资源。因此，最好将脚本放在底部，以提高页面加载速度。")]),t._v(" "),e("p",[t._v("一些特殊场景无法将脚本放到页面底部的，可以考虑 "),e("code",[t._v("<script>")]),t._v(" 的以下属性：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#defer_property",target:"_blank",rel:"noopener noreferrer"}},[t._v("defer 属性"),e("OutboundLink")],1),t._v("；")])]),t._v(" "),e("p",[t._v("defer是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行")]),t._v(" "),e("ul",[e("li",[t._v("HTML5 新增的 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#async_property",target:"_blank",rel:"noopener noreferrer"}},[t._v("async 属性"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("async是在加载完之后立刻执行，如果是多个，执行顺序和加载顺序无关")]),t._v(" "),e("h5",{attrs:{id:"使用外部-javascript-和-css"}},[t._v("使用外部 JavaScript 和 CSS")]),t._v(" "),e("p",[t._v("外部 JavaScript 和 CSS 文件可以被浏览器缓存，在不同页面间重用，也能降低页面大小。")]),t._v(" "),e("p",[t._v("当然，实际中也需要考虑代码的重用程度。如果仅仅是某个页面使用到的代码，可以考虑内嵌在页面中，减少 HTTP 请求数。另外，可以在首页加载完成以后，预先加载子页面的资源。")]),t._v(" "),e("h5",{attrs:{id:"压缩-javascript-和-css"}},[t._v("压缩 JavaScript 和 CSS")]),t._v(" "),e("p",[t._v("压缩代码可以移除非功能性的字符（注释、空格、空行等），减少文件大小，提高载入速度。")]),t._v(" "),e("blockquote",[e("p",[t._v("得益于 "),e("code",[t._v("Node.js")]),t._v(" 的流行，开源社区涌现出许多高效、易用的前端优化工具，JavaScript 和 CSS 压缩类的，不敢说多如牛毛，多入鸡毛倒是一点不夸张，如 "),e("a",{attrs:{href:"https://github.com/mishoo/UglifyJS2",target:"_blank",rel:"noopener noreferrer"}},[t._v("UglifyJS 2"),e("OutboundLink")],1),t._v("、csso、cssnano 等。")])]),t._v(" "),e("blockquote",[e("p",[t._v("对于内嵌的 CSS 和 "),e("code",[t._v("JavaScript")]),t._v("，也可以通过 "),e("a",{attrs:{href:"https://www.npmjs.com/package/htmlmin",target:"_blank",rel:"noopener noreferrer"}},[t._v("htmlmin"),e("OutboundLink")],1),t._v(" 等工具压缩。")])]),t._v(" "),e("blockquote",[e("p",[t._v("这些项目都有 "),e("code",[t._v("Gulp、Webpack")]),t._v("等流行构建工具的配套版本。")])]),t._v(" "),e("h5",{attrs:{id:"移除重复脚本"}},[t._v("移除重复脚本")]),t._v(" "),e("p",[t._v("重复的脚本不仅产生不必要的 HTTP 请求，而且重复解析执行浪费时间和计算资源。")]),t._v(" "),e("h5",{attrs:{id:"减少-dom-操作"}},[t._v("减少 DOM 操作")]),t._v(" "),e("p",[t._v("JavaScript 操作 DOM 很慢，尤其是 DOM 节点很多时。")]),t._v(" "),e("p",[t._v("使用时应该注意：")]),t._v(" "),e("ul",[e("li",[t._v("缓存已经访问过的元素；")]),t._v(" "),e("li",[t._v("使用 DocumentFragment 暂存 DOM，整理好以后再插入 DOM 树；")]),t._v(" "),e("li",[t._v("操作 className，而不是多次读写 style；")]),t._v(" "),e("li",[t._v("避免使用 JavaScript 修复布局。")])]),t._v(" "),e("h5",{attrs:{id:"使用高效的事件处理"}},[t._v("使用高效的事件处理")]),t._v(" "),e("ul",[e("li",[t._v("减少绑定事件监听的节点，如通过事件委托；")]),t._v(" "),e("li",[t._v("尽早处理事件，在 DOMContentLoaded 即可进行，不用等到 load 以后。")])]),t._v(" "),e("blockquote",[e("p",[t._v("对于 resize、scroll 等触发频率极高的事件，应该通过 debounce 等机制降低处理程序执行频率。")])]),t._v(" "),e("blockquote",[e("p",[t._v("TODO: 补充相关内容 http://demo.nimius.net/debounce_throttle/")])]),t._v(" "),e("h2",{attrs:{id:"图片"}},[t._v("图片")]),t._v(" "),e("h5",{attrs:{id:"优化图片"}},[t._v("优化图片")]),t._v(" "),e("blockquote",[e("p",[t._v("YDN "),e("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html#opt_images",target:"_blank",rel:"noopener noreferrer"}},[t._v("列出的相关工具"),e("OutboundLink")],1),t._v(" 缺乏易用性，建议参考以下工具。")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/imagemin/imagemin",target:"_blank",rel:"noopener noreferrer"}},[t._v("imagemin"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://imageoptim.com/mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImageOptim"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("TODO:")])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("PNG 终极优化；")]),t._v(" "),e("li",[t._v("Webp 相关内容；")]),t._v(" "),e("li",[t._v("SVG 相关内容。")])])]),t._v(" "),e("h5",{attrs:{id:"png-终极优化"}},[t._v("PNG 终极优化：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.queness.com/post/2507/most-effective-method-to-reduce-and-optimize-png-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("Most Effective Method to Reduce and Optimize PNG Images"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.smashingmagazine.com/2009/07/clever-png-optimization-techniques/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clever PNG Optimization Techniques"),e("OutboundLink")],1)])]),t._v(" "),e("h5",{attrs:{id:"优化-css-sprite"}},[t._v("优化 CSS Sprite")]),t._v(" "),e("ul",[e("li",[t._v("水平排列 Sprite 中的图片，垂直排列会增加图片大小；")]),t._v(" "),e("li",[t._v("Spirite 中把颜色较近的组合在一起可以降低颜色数，理想状况是低于 256 色以适用 PNG8 格式；")]),t._v(" "),e("li",[t._v("不要在 Spirite 的图像中间留有较大空隙。减少空隙虽然不太影响文件大小，但可以降低用户代理把图片解压为像素图的内存消耗，对移动设备更友好。")])]),t._v(" "),e("h5",{attrs:{id:"不要在-html-中缩放图片"}},[t._v("不要在 HTML 中缩放图片")]),t._v(" "),e("p",[t._v("不要使用 "),e("code",[t._v("<img>")]),t._v(" 的 width、height 缩放图片，如果用到小图片，就使用相应大小的图片。")]),t._v(" "),e("blockquote",[e("p",[t._v("很多 CMS 和 CDN 都提供图片裁切功能。")])]),t._v(" "),e("h5",{attrs:{id:"使用体积小、可缓存的-favicon-ico"}},[t._v("使用体积小、可缓存的 favicon.ico")]),t._v(" "),e("p",[t._v("Favicon.ico 一般存放在网站根目录下，无论是否在页面中设置，浏览器都会尝试请求这个文件。")]),t._v(" "),e("p",[t._v("所以确保这个图标：")]),t._v(" "),e("ul",[e("li",[t._v("存在（避免 404）；")]),t._v(" "),e("li",[t._v("尽量小，最好小于 1K；")]),t._v(" "),e("li",[t._v("设置较长的过期时间。")]),t._v(" "),e("li",[t._v("对于较新的浏览器，可以使用 PNG 格式的 favicon。")])]),t._v(" "),e("p",[t._v("参考链接：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://css-tricks.com/favicon-quiz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Favicons, Touch Icons, Tile Icons, etc. Which Do You Need?"),e("OutboundLink")],1)])]),t._v(" "),e("h5",{attrs:{id:"图片相关补充"}},[t._v("图片相关补充")]),t._v(" "),e("blockquote",[e("p",[t._v("设置图片的宽和高，以免浏览器按照「猜」的宽高给图片保留的区域和实际宽高差异，产生重绘。")])]),t._v(" "),e("h2",{attrs:{id:"移动端"}},[t._v("移动端")]),t._v(" "),e("blockquote",[e("p",[t._v("移动端优化相关内容有待进一步整理补充。")])]),t._v(" "),e("h5",{attrs:{id:"保持单个文件小于-25-kb"}},[e("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html#under25",target:"_blank",rel:"noopener noreferrer"}},[t._v("保持单个文件小于 25 KB"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"打包内容为分段-multipart-文档"}},[e("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html#multipart",target:"_blank",rel:"noopener noreferrer"}},[t._v("打包内容为分段（multipart）文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("建议关注更新"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);