(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{472:function(a,t,n){"use strict";n.r(t);var e=n(5),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("TOC"),a._v(" "),n("h2",{attrs:{id:"正则基本语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正则基本语法"}},[a._v("#")]),a._v(" 正则基本语法")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('^ 匹配一个输入或一行的开头，/^a/匹配"an A"，而不匹配"An a" \n$ 匹配一个输入或一行的结尾，/a$/匹配"An a"，而不匹配"an A" \n* 匹配前面元字符0次或多次，/ba*/将匹配b,ba,baa,baaa \n+ 匹配前面元字符1次或多次，/ba*/将匹配ba,baa,baaa \n? 匹配前面元字符0次或1次，/ba*/将匹配b,ba \n(x) 匹配x保存x在名为$1...$9的变量中 \nx|y 匹配x或y \n{n} 精确匹配n次 \n{n,} 匹配n次以上 \n{n,m} 匹配n-m次 \n[xyz] 字符集(character set)，匹配这个集合中的任一一个字符(或元字符) \n[^xyz] 不匹配这个集合中的任何一个字符 \n[\\b] 匹配一个退格符 \n\\b 匹配一个单词的边界 \n\\B 匹配一个单词的非边界 \n\\cX 这儿，X是一个控制符，/\\cM/匹配Ctrl-M \n\\d 匹配一个字数字符，/\\d/ = /[0-9]/ \n\\D 匹配一个非字数字符，/\\D/ = /[^0-9]/ \n\\n 匹配一个换行符 \n\\r 匹配一个回车符 \n\\s 匹配一个空白字符，包括\\n,\\r,\\f,\\t,\\v等 \n\\S 匹配一个非空白字符，等于/[^\\n\\f\\r\\t\\v]/ \n\\t 匹配一个制表符 \n\\v 匹配一个重直制表符 \n\\w 匹配一个可以组成单词的字符(alphanumeric，这是我的意译，含数字)，包括下划线，如[\\w]匹配"$5.98"中的5，等于[a-zA-Z0-9] \n\\W 匹配一个不可以组成单词的字符，如[\\W]匹配"$5.98"中的$，等于[^a-zA-Z0-9]。\n')])])]),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n(x)\t\n像下面的例子展示的那样，它会匹配 'x' 并且记住匹配项。其中括号被称为捕获括号。\n\n模式 /(foo) (bar) \\1 \\2/ 中的 '(foo)' 和 '(bar)' 匹配并记住字符串 \"foo bar foo bar\" 中前两个单词。模式中的 \\1 和 \\2 表示第一个和第二个被捕获括号匹配的子字符串，即 foo 和 bar，匹配了原字符串中的后两个单词。注意 \\1、\\2、...、\\n 是用在正则表达式的匹配环节，详情可以参阅后文的 \\n 条目。而在正则表达式的替换环节，则要使用像 $1、$2、...、$n 这样的语法，例如，'bar foo'.replace(/(...) (...)/, '$2 $1')。$& 表示整个用于匹配的原字符串。\n---------------------------------------\n(?:x)\t\n匹配 'x' 但是不记住匹配项。这种括号叫作非捕获括号，使得你能够定义与正则表达式运算符一起使用的子表达式。看看这个例子 /(?:foo){1,2}/。如果表达式是 /foo{1,2}/，{1,2} 将只应用于 'foo' 的最后一个字符 'o'。如果使用非捕获括号，则 {1,2} 会应用于整个 'foo' 单词。更多信息，可以参阅下文的 Using parentheses 条目.\n---------------------------------------\nx(?=y)\t\n匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。\n\n例如，/Jack(?=Sprat)/会匹配到'Jack'仅仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。\n---------------------------------------\n(?<=y)x\t\n匹配'x'仅仅当'x'前面是'y'.这种叫做后行断言。\n\n例如，/(?<=Jack)Sprat/会匹配到' Sprat '仅仅当它前面是' Jack '。/(?<=Jack|Tom)Sprat/匹配‘ Sprat ’仅仅当它前面是'Jack'或者是‘Tom’。但是‘Jack’和‘Tom’都不是匹配结果的一部分。\n---------------------------------------\nx(?!y)\t\n仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。\n\n例如，仅仅当这个数字后面没有跟小数点的时候，/\\d+(?!\\.)/ 匹配一个数字。正则表达式/\\d+(?!\\.)/.exec(\"3.141\")匹配‘141’而不是‘3.141’\n---------------------------------------\n(?<!y)x\t\n仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。\n\n例如, 仅仅当这个数字前面没有负号的时候，/(?<!-)\\d+/ 匹配一个数字。\n/(?<!-)\\d+/.exec('3') 匹配到 \"3\".\n/(?<!-)\\d+/.exec('-3') 因为这个数字前有负号，所以没有匹配到。\n---------------------------------------\nx|y\t\n匹配‘x’或者‘y’。\n\n例如，/green|red/匹配“green apple”中的‘green’和“red apple”中的‘red’\n\n")])])]),n("h2",{attrs:{id:"应用总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用总结"}},[a._v("#")]),a._v(" 应用总结")]),a._v(" "),n("h3",{attrs:{id:"验证连续数字是否有重复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证连续数字是否有重复"}},[a._v("#")]),a._v(" 验证连续数字是否有重复")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('"bcae1958fiefadf1958fef".match(/^.*?(\\d{4})(?:(?!\\1).)*\\1/)\n')])])]),n("h3",{attrs:{id:"验证是否有重复字符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证是否有重复字符"}},[a._v("#")]),a._v(" 验证是否有重复字符")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('\n"bcae1958fiqpdljwrxy".match(/^.*?(\\w)(?:(?!\\1).)*\\1/)\n\n')])])]),n("h3",{attrs:{id:"_12位数字，其中不能出现6位连续相同数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12位数字，其中不能出现6位连续相同数字"}},[a._v("#")]),a._v(" 12位数字，其中不能出现6位连续相同数字")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n'123777890987'.match(/^(?:([0-9])(?!\\1{5})){12}$/)\n\n")])])]),n("h3",{attrs:{id:"a-z以内不重复的10个字母"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-z以内不重复的10个字母"}},[a._v("#")]),a._v(" A-Z以内不重复的10个字母")]),a._v(" "),n("p",[a._v("方法一：")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("^(?:([A-Z])(?!.*?\\1)){10}$\n")])])]),n("p",[a._v("方法二：")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("'asdfghjklp'.match(/^(?:([a-z])(?=((?!\\1).)*$)){10}$/)\n")])])]),n("h3",{attrs:{id:"千位分隔符-js-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#千位分隔符-js-实现"}},[a._v("#")]),a._v(" 千位分隔符(js 实现)")]),a._v(" "),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('\nfunction thousandBitSeparator(num) {\n    return num && num\n        .toString()\n        .replace(/(\\d)(?=(\\d{3})+\\.)/g, function($0, $1) {\n            return $1 + ",";\n        });\n}\nconsole.log(thousandBitSeparator(-1234567.9012));\n')])])]),n("div",{staticClass:"language-metadata json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\nvar a = 1;\nfunction b(){\n    var a=2;\n    function c(){\n        console.log(a)\n    }\n    return c;\n}\n\nb()();\n")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);