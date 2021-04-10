(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{575:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("TOC"),t._v(" "),a("h2",{attrs:{id:"概要"}},[t._v("概要")]),t._v(" "),a("p",[t._v("我经常都适用flex布局，flex可以看作是一维布局，它主要针对轴线的位置进行布局，grid把布局划分成行和列，产生单元格，可以看成是二维布局。grid远比flex布局强大")]),t._v(" "),a("h3",{attrs:{id:"行和列"}},[t._v("行和列")]),t._v(" "),a("p",[t._v("容器水平称为行（row），垂直称为列（column），行和列交叉的地方称为单元格")]),t._v(" "),a("h3",{attrs:{id:"网格线"}},[t._v("网格线")]),t._v(" "),a("p",[t._v("网格线（grid line)网格线，水平网格线划分出行，垂直网格线划分出列，正常情况下，n行会有（n+1）根水平网格线，m列，会有（m+1）根垂直网格线")]),t._v(" "),a("h2",{attrs:{id:"容器的属性"}},[t._v("容器的属性")]),t._v(" "),a("p",[t._v("display: grid指定一个容器采用网格布局。")]),t._v(" "),a("p",[t._v("除了使用绝对单位，还能使用百分比")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33.33% 33.33% 33.33%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33.33% 33.33% 33.33%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_1-repeat"}},[t._v("1. repeat()")]),t._v(" "),a("p",[t._v("有时候写重复的值非常麻烦，尤其多网格时，使用repeat()函数")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 33.33%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 33.33%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("repeat接受两个参数，第一个是重复的次数，第三个是所要重复的值")]),t._v(" "),a("p",[t._v("重复某种模式也是可以的")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("grid-template-columns: repeat(2, 100px 20px 80px);\n")])])]),a("p",[t._v("上述代码定义了6列。其中第一列和第四列的宽度为100px，第二列和第五列为20px，第三列和第六列为80px。")]),t._v(" "),a("h4",{attrs:{id:"_2-autofill-关键字"}},[t._v("2. autofill() 关键字")]),t._v(" "),a("p",[t._v("有时单元格大小是固定的，但是容器大小是不确定的。如果希望每一行容纳尽可能多的单元格，可以使用auto-fill关键字填充")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-fr关键字"}},[t._v("3. fr关键字")]),t._v(" "),a("p",[t._v("为了方便表示比例关系，网格布局提供了fr关键字（fraction意为片段），如果两列的宽度为1fr和2fr，表示后者是前者的两倍")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_4-minmax"}},[t._v("4. minmax()")]),t._v(" "),a("p",[t._v("minmax()函数产生一个长度范围，它接受两个参数，分别表示最大值和最小值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("grid-template-columns: 1fr 1fr minmax(100px, 1fr);\n")])])]),a("p",[t._v("代码中的minmax表示宽不小于100，不大于1fr")]),t._v(" "),a("h4",{attrs:{id:"_5-auto"}},[t._v("5. auto()")]),t._v(" "),a("p",[t._v("表示由浏览器自己决定长度")]),t._v(" "),a("p",[t._v("上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。")]),t._v(" "),a("h4",{attrs:{id:"_6-网格线的名称"}},[t._v("6.网格线的名称")]),t._v(" "),a("p",[t._v("grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [c1] 100px [c2] 100px [c3] auto [c4]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [r1] 100px [r2] 100px [r3] auto [r4]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_7-布局实例"}},[t._v("7. 布局实例")]),t._v(" "),a("p",[t._v("grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 70% 30%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-常用属性"}},[t._v("3. 常用属性")]),t._v(" "),a("p",[t._v("grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性")]),t._v(" "),a("p",[t._v("grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-gap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-gap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。")])]),t._v(" "),a("h4",{attrs:{id:"_3-1-grid-template-areas-属性"}},[t._v("3.1 grid-template-areas 属性")]),t._v(" "),a("p",[t._v('网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。')]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 100px 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 100px 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a b c'")]),t._v("\n                       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d e f'")]),t._v("\n                       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g h i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-2-grid-auto-flow-属性"}},[t._v("3.2 grid-auto-flow 属性")]),t._v(" "),a("p",[t._v('这个顺序由grid-auto-flow属性决定，默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。')]),t._v(" "),a("p",[t._v("grid-auto-flow属性除了设置成row和column，还可以设成row dense和column dense。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。")]),t._v(" "),a("h4",{attrs:{id:"_3-3-justify-items-属性-align-items-属性-place-items-属性"}},[t._v("3.3 justify-items 属性，align-items 属性，place-items 属性")]),t._v(" "),a("p",[t._v("justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。")]),t._v(" "),a("p",[t._v("align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。")]),t._v(" "),a("h2",{attrs:{id:"css-性能优化"}},[t._v("css 性能优化")]),t._v(" "),a("ol",[a("li",[t._v("合并css文件，如果页面加载10个css文件,每个文件1k，那么也要比只加载一个100k的css文件慢。")]),t._v(" "),a("li",[t._v("减少css嵌套，最好不要嵌套三层以上。")]),t._v(" "),a("li",[t._v("不要在ID选择器前面进行嵌套，ID本来就是唯一的而且权限值大，嵌套完全是浪费性能。")]),t._v(" "),a("li",[t._v("建立公共样式类，把相同样式提取出来作为公共类使用。")]),t._v(" "),a("li",[t._v('减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？')]),t._v(" "),a("li",[t._v("巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。")]),t._v(" "),a("li",[t._v("拆分出公共css文件，对于比较大的项目可以将大部分页面的公共结构样式提取出来放到单独css文件里，这样一次下载 后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。")]),t._v(" "),a("li",[t._v("不用css表达式，表达式只是让你的代码显得更加酷炫，但是对性能的浪费可能是超乎你想象的。")]),t._v(" "),a("li",[t._v("少用css rest，可能会觉得重置样式是规范，但是其实其中有很多操作是不必要不友好的，有需求有兴趣，可以选择normolize.css。")]),t._v(" "),a("li",[t._v("cssSprite，合成所有icon图片，用宽高加上background-position的背景图方式显现icon图，这样很实用，减少了http请求。")]),t._v(" "),a("li",[t._v("善后工作，css压缩(在线压缩工具 YUI Compressor)")]),t._v(" "),a("li",[t._v("GZIP压缩，是一种流行的文件压缩算法。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_43883485/article/details/103504171",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文连接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"css3动画加速"}},[t._v("css3动画加速")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/d1e16a2e88c1",target:"_blank",rel:"noopener noreferrer"}},[t._v("css3动画GPU加速"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"css层叠"}},[t._v("css层叠")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css层叠原文链接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"div居中总结"}},[t._v("div居中总结")]),t._v(" "),a("ol",[a("li",[t._v("flex(元素已经宽ß度)")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("position(元素已知宽度)\n父元素设置为：position: relative;"),a("br"),t._v("\n子元素设置为：position: absolute;"),a("br"),t._v("\n距上50%，据左50%，然后减去元素自身宽度的一半距离就可以实现")]),t._v(" "),a("li",[t._v("position transform （元素未知宽度）\n如果元素未知宽度，只需将上面例子中的 margin: -50px 0 0 -50px;替换为：transform: translate(-50%,-50%);")]),t._v(" "),a("li",[t._v("position（元素已知宽度）（left，right，top，bottom为0，maigin：auto ）")]),t._v(" "),a("li",[t._v("table-cell 布局实现,父display:table,子display: table-cell;vertical-align: middle;text-align: center;")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903821529841671",target:"_blank",rel:"noopener noreferrer"}},[t._v("div居中总结"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"浮动"}},[t._v("浮动")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012739764",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=r.exports}}]);