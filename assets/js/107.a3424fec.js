(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{585:function(e,n,a){"use strict";a.r(n);var t=a(4),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TOC"),e._v(" "),a("h2",{attrs:{id:"官方文档位置"}},[e._v("官方文档位置")]),e._v(" "),a("p",[e._v("https://panjiachen.gitee.io/vue-element-admin-site/zh/feature/component/tree-table.html#props-%E8%AF%B4%E6%98%8E")]),e._v(" "),a("h2",{attrs:{id:"mock-数据"}},[e._v("mock 数据")]),e._v(" "),a("div",{staticClass:"language-metadata json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n语法规则\t| 说明\n'name|min-max': string\t通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max\n'name|count': string\t通过重复 string 生成一个字符串，重复次数等于 count\n'name|min-max': number\t生成一个大于等于 min、小于等于 max 的整数，属性值 number 用来确定类型\n'name|+1': number\t初始值为 number，以后每次请求在前面的基础上+1\n'name|min-max.dmin-dmax': number\t生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位\n'name|1': boolean\t随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2\n'name|count': object\t从属性值 object 中随机选取 count 个属性\n'name|min-max': object\t从属性值 object 中随机选取 min 到 max 个属性\n'name|1': array\t从属性值 array 中随机选取 1 个元素，作为最终值\n'name|+1': array\t从属性值 array 中按照顺序选取 1 个元素，作为最终值\n'name|count': array\t通过重复属性值 array 生成一个新数组，重复次数为 count\n'name|min-max': array\t通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max\n\n")])])]),a("p",[e._v("示例")]),e._v(" "),a("div",{staticClass:"language-metadata json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//数据占位符使用\n{\n  "string|1-2": "@string",     //随机生成字符串\n  "integer": "@integer(10, 30)",  //随机生成一个10～30之间的正整数\n  "float": "@float(60, 100, 2, 2)",  //随机生成浮点数，参数分别为整数部分最小值和最大值、小数部分保留最小位数和最大位数\n  "boolean": "@boolean",       //随机生成boolean\n  "date": "@date(yyyy-MM-dd)", //按照格式随机生成时间\n  "datetime": "@datetime",     //随机生成时间\n  "now": "@now",               //当前时间\n  "url": "@url",               //随机生成url字符串\n  "email": "@email",           //随机生成邮箱\n  "region": "@region",         //随机生成地区\n  "city": "@city",             //随机生成城市\n  "province": "@province",     //随机生成省会\n  "county": "@county",         //随机生成一个（中国）县\n  "upper": "@upper(@title)",   //把生随机成的标题全部转为大写\n  "guid": "@guid",             //随机生成一个 GUID\n  "id": "@id",                 //随机生成一个 18 位身份证\n  "image": "@image(200x200)",  //随机生成一个大小为200x200的图片链接\n  "title": "@title",           //随机生成一句标题，其中每个单词的首字母大写\n  "cparagraph": "@cparagraph", //随机生成一段中文文本\n  "csentence": "@csentence",   //随机生成一段中文文本\n  "range": "@range(2, 10)"     //返回一个内容从2开始到9的整型数组\n}\n')])])]),a("h2",{attrs:{id:"换皮肤一波三折"}},[e._v("换皮肤一波三折")]),e._v(" "),a("ol",[a("li",[e._v("安装主题工具")])]),e._v(" "),a("p",[e._v("首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动。\n"),a("code",[e._v("metadata json yarn add element-theme --dev")]),e._v("\n2. 安装chalk主题")]),e._v(" "),a("p",[e._v("安装白垩主题，可以从 npm 安装或者从 GitHub 拉取最新代码，这里从 npm 安装。")]),e._v(" "),a("div",{staticClass:"language-metadata json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    yarn add element-theme-chalk -D\n")])])]),a("p",[e._v("3.初始化变量文件")]),e._v(" "),a("p",[e._v("主题生成工具安装成功后，如果全局安装可以在命令行里通过 et 调用工具，如果安装在当前目录下，需要通过 node_modules/.bin/et 访问到命令。执行 -i 初始化变量文件。默认输出到 element-variables.scss，当然你可以传参数指定文件输出目录。")]),e._v(" "),a("div",{staticClass:"language-metadata json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    node_modules/.bin/et -i\n")])])]),a("p",[e._v("命令执行成功之后，会在根目录生成 scss文件 element-variables.scss 。")]),e._v(" "),a("p",[e._v("4、修改主题色")]),e._v(" "),a("p",[e._v("在 element-variables.scss 文件里修改 $–color-primary:#4b5f6e，即你想要的主题颜色")]),e._v(" "),a("p",[e._v("5、编译主题\n执行主题编译命令生成主题，根目录会生成一个theme的文件夹 。")]),e._v(" "),a("p",[e._v("node_modules/.bin/et")]),e._v(" "),a("p",[e._v("6、引入自定义主题\n把生成的主题按颜色改名放置 src/theme 目录下。")]),e._v(" "),a("p",[e._v("在 main.js 中 import ‘所在路径/index.css’。")]),e._v(" "),a("p",[e._v("7、效果展示\n重新加载后，我们看到按钮颜色已经不是默认的蓝色了。")])],1)}),[],!1,null,null,null);n.default=r.exports}}]);