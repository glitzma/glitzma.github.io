(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{522:function(t,e,n){"use strict";n.r(e);var i=n(25),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"css实现单行、多行文本溢出显示省略号"}},[t._v("css实现单行、多行文本溢出显示省略号(…)")]),t._v(" "),n("p",[t._v("一、 单行文本溢出显示省略号(…)")]),t._v(" "),n("blockquote",[n("p",[t._v("省略号在ie中可以使用text-overflow:ellipsis了，但有很多的浏览器都需要固定宽度了，同时ff这些浏览器并不支持text-overflow:ellipsis设置了，下文来给各位整理一下兼容各浏览器显示省略号教程。大家应该都知道用text-overflow:ellipsis属性来实现单行文本的溢出显示省略号(…)。当然部分浏览器还需要加宽度width属性。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("p{\n     overflow: hidden;\n     white-space: nowrap;\n     text-overflow: ellipsis;\n }\n // 一定要设置width\n // 但是这个属性并不支持多行文本溢出显示省略号。\n")])])]),n("p",[t._v("二、 多行文本溢出显示省略号(…)")]),t._v(" "),n("blockquote",[n("p",[t._v("在WebKit浏览器或移动端（绝大部分是WebKit内核的浏览器）的页面实现比较简单，可以直接使用WebKit的CSS扩展属性(WebKit是私有属性)-webkit-line-clamp ；注意：这是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。")])]),t._v(" "),n("blockquote",[n("p",[t._v("-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：")])]),t._v(" "),n("blockquote",[n("p",[t._v("display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。")])]),t._v(" "),n("blockquote",[n("p",[t._v("-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。")])]),t._v(" "),n("blockquote",[n("p",[t._v("text-overflow: ellipsis;，可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本。")])]),t._v(" "),n("blockquote",[n("p",[t._v("这个属性只合适WebKit浏览器或移动端（绝大部分是WebKit内核的）浏览器")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("p{\ndisplay: -webkit-box; //必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。\n-webkit-box-orient; //必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。\ntext-overflow: ellipsis; //可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。\noverflow : hidden;\ntext-overflow: ellipsis;\ndisplay: -webkit-box;\n-webkit-line-clamp: 2;\n-webkit-box-orient: vertical;\n}\n")])])]),n("p",[t._v("垮浏览器兼容的方案\n比较靠谱简单的做法就是设置相对定位的容器高度，用包含省略号(…)的元素模拟实现；")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('p {\n    position:relative;\n    line-height:1.4em;\n    /* 3 times the line-height to show 3 lines */\n    height:4.2em;\n    overflow:hidden;\n}\np::after {\n    content:"...";\n    font-weight:bold;\n    position:absolute;\n    bottom:0;\n    right:0;\n    padding:0 20px 1px 45px;\n\n}\n')])])]),n("p",[t._v("另外一种方法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('p{position: relative; line-height: 20px; max-height: 40px;overflow: hidden;}\np::after{content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;\nbackground: -webkit-linear-gradient(left, transparent, #fff 55%);\nbackground: -o-linear-gradient(right, transparent, #fff 55%);\nbackground: -moz-linear-gradient(right, transparent, #fff 55%);\nbackground: linear-gradient(to right, transparent, #fff 55%);\n}\n')])])]),n("h2",{attrs:{id:"img-间的磕磕碰碰"}},[t._v("img 间的磕磕碰碰")]),t._v(" "),n("p",[t._v("当很多图片放到一起的时候")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("margin:0;\npadding:0;\nfontsize:0;\n全设置了，但还是有一个间隙\n")])])]),n("p",[t._v("实际上是inline元素搞的鬼")]),t._v(" "),n("blockquote",[n("p",[t._v("任何不是块级元素的可见元素都是内联元素，其表现的特性是“行布局”形式。\n—-《CSS权威指南》")])]),t._v(" "),n("p",[t._v("意思就是，其实如图片文字等内联元素，它默认对齐方式都是和它的父级的 baseline 去进行对齐的，但是你对齐的是 baseline，撑开高度的却是元素整体的高度（bottom line），这样肯定就会造成一定的间隙，也就是我们上文出现的问题了。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("top line\nmiddle line\nbase line\nbottom line\n\n行高：两行文字“基线”之间的垂直距离\n行距：一行“底线”至下一行的“顶线”的垂直距离\n半行间距：“底线”至“行内框”垂直距离\n半行间距：（行高-字体大小）/2\n本例：30px= (160px-100px)/2\n")])])]),n("p",[t._v("vertical-align 的默认属性就是 baseline ，我们只要设置了跟 baseline 不一样的属性，都可以避免这个问题。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("baseline\t默认。元素放置在父元素的基线上。\nsub\t垂直对齐文本的下标。\nsuper\t垂直对齐文本的上标\ntop\t把元素的顶端与行中最高元素的顶端对齐\ntext-top\t把元素的顶端与父元素字体的顶端对齐\nmiddle\t把此元素放置在父元素的中部。\nbottom\t把元素的顶端与行中最低的元素的顶端对齐。\ntext-bottom\t把元素的底端与父元素字体的底端对齐。\nlength\n%\t使用 “line-height” 属性的百分比值来排列此元素。允许使用负值。\ninherit\t规定应该从父元素继承 vertical-align 属性的值。\n")])])]),n("p",[t._v("除了可以修改display：block以后还可以设置浮动来解决")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<style type="text/css">\n    img{\n        height: 200px;\n        margin: 0;\n        padding: 0;\n        border-bottom: 1px solid red;\n\n        float: left;\n    }\n    ul li {\n        overflow: hidden;\n    }\n    ul{\n        border: 1px solid blue;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n    }\n</style>\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);