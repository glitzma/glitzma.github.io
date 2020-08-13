(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{466:function(t,a,s){"use strict";s.r(a);var r=s(5),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("TOC"),t._v(" "),s("h2",{attrs:{id:"_1-概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概要"}},[t._v("#")]),t._v(" 1.概要")]),t._v(" "),s("p",[t._v("我经常都适用flex布局，flex可以看作是一维布局，它主要针对轴线的位置进行布局，grid把布局划分成行和列，产生单元格，可以看成是二维布局。grid远比flex布局强大")]),t._v(" "),s("h3",{attrs:{id:"行和列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行和列"}},[t._v("#")]),t._v(" 行和列")]),t._v(" "),s("p",[t._v("容器水平称为行（row），垂直称为列（column），行和列交叉的地方称为单元格")]),t._v(" "),s("h3",{attrs:{id:"网格线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网格线"}},[t._v("#")]),t._v(" 网格线")]),t._v(" "),s("p",[t._v("网格线（grid line)网格线，水平网格线划分出行，垂直网格线划分出列，正常情况下，n行会有（n+1）根水平网格线，m列，会有（m+1）根垂直网格线")]),t._v(" "),s("h2",{attrs:{id:"_2-容器的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器的属性"}},[t._v("#")]),t._v(" 2.容器的属性")]),t._v(" "),s("p",[t._v("display: grid指定一个容器采用网格布局。")]),t._v(" "),s("p",[t._v("除了使用绝对单位，还能使用百分比")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33.33% 33.33% 33.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33.33% 33.33% 33.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-repeat"}},[t._v("#")]),t._v(" 1. repeat()")]),t._v(" "),s("p",[t._v("有时候写重复的值非常麻烦，尤其多网格时，使用repeat()函数")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 33.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 33.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("repeat接受两个参数，第一个是重复的次数，第三个是所要重复的值")]),t._v(" "),s("p",[t._v("重复某种模式也是可以的")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grid-template-columns: repeat(2, 100px 20px 80px);\n")])])]),s("p",[t._v("上述代码定义了6列。其中第一列和第四列的宽度为100px，第二列和第五列为20px，第三列和第六列为80px。")]),t._v(" "),s("h4",{attrs:{id:"_2-autofill-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-autofill-关键字"}},[t._v("#")]),t._v(" 2. autofill() 关键字")]),t._v(" "),s("p",[t._v("有时单元格大小是固定的，但是容器大小是不确定的。如果希望每一行容纳尽可能多的单元格，可以使用auto-fill关键字填充")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-fr关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-fr关键字"}},[t._v("#")]),t._v(" 3. fr关键字")]),t._v(" "),s("p",[t._v("为了方便表示比例关系，网格布局提供了fr关键字（fraction意为片段），如果两列的宽度为1fr和2fr，表示后者是前者的两倍")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_4-minmax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-minmax"}},[t._v("#")]),t._v(" 4. minmax()")]),t._v(" "),s("p",[t._v("minmax()函数产生一个长度范围，它接受两个参数，分别表示最大值和最小值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grid-template-columns: 1fr 1fr minmax(100px, 1fr);\n")])])]),s("p",[t._v("代码中的minmax表示宽不小于100，不大于1fr")]),t._v(" "),s("h4",{attrs:{id:"_5-auto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-auto"}},[t._v("#")]),t._v(" 5. auto()")]),t._v(" "),s("p",[t._v("表示由浏览器自己决定长度")]),t._v(" "),s("p",[t._v("上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。")]),t._v(" "),s("h4",{attrs:{id:"_6-网格线的名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-网格线的名称"}},[t._v("#")]),t._v(" 6.网格线的名称")]),t._v(" "),s("p",[t._v("grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [c1] 100px [c2] 100px [c3] auto [c4]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [r1] 100px [r2] 100px [r3] auto [r4]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_7-布局实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-布局实例"}},[t._v("#")]),t._v(" 7. 布局实例")]),t._v(" "),s("p",[t._v("grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 70% 30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-grid-row-gap-属性，grid-column-gap-属性，grid-gap-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-grid-row-gap-属性，grid-column-gap-属性，grid-gap-属性"}},[t._v("#")]),t._v(" 3. grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性")]),t._v(" "),s("p",[t._v("grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。")])]),t._v(" "),s("h4",{attrs:{id:"_3-1-grid-template-areas-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-grid-template-areas-属性"}},[t._v("#")]),t._v(" 3.1 grid-template-areas 属性")]),t._v(" "),s("p",[t._v('网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。')]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 100px 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 100px 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a b c'")]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d e f'")]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g h i'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-2-grid-auto-flow-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-grid-auto-flow-属性"}},[t._v("#")]),t._v(" 3.2 grid-auto-flow 属性")]),t._v(" "),s("p",[t._v('这个顺序由grid-auto-flow属性决定，默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。')]),t._v(" "),s("p",[t._v("grid-auto-flow属性除了设置成row和column，还可以设成row dense和column dense。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-justify-items-属性，align-items-属性，place-items-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-justify-items-属性，align-items-属性，place-items-属性"}},[t._v("#")]),t._v(" 3.3 justify-items 属性，align-items 属性，place-items 属性")]),t._v(" "),s("p",[t._v("justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。")]),t._v(" "),s("p",[t._v("align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);