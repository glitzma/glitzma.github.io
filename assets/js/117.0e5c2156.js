(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{581:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("TOC"),t._v(" "),s("h2",{attrs:{id:"进度"}},[t._v("进度")]),t._v(" "),s("p",[t._v("https://github.com/dream2023/vue-ele-form-generator\nhttp://mint-ui.github.io/#!/zh-cn")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nimport codemirror from './codemirror' \n\n")])])]),s("p",[t._v("codeMirror是代码展示格式的插件")]),t._v(" "),s("p",[t._v("经过多方调研，我们决定用survey.js来当我的们组件工具，通过更新和维护以及运营模式来分析出来的。")]),t._v(" "),s("p",[t._v("移动端用的是uni-app/wepy/原生小程序，我们还在调研阶段，并没有真正使用。")]),t._v(" "),s("h2",{attrs:{id:"_2019-10-24日diary"}},[t._v("2019-10-24日diary")]),t._v(" "),s("h3",{attrs:{id:"为什么封装第三方库"}},[t._v("为什么封装第三方库")]),t._v(" "),s("ol",[s("li",[t._v("很多第三方封装的组件参数配置项是不能完美契合需求的。 如一些富文本或者图表组件，配置项远比你想想中的多，第三方封装组件很难覆盖所有配置。")]),t._v(" "),s("li",[t._v("第三方组件的更新频率很难保证。很多第三方封装组件并不能一直和原始组件保持同步更新，有时候原始组件更新了某个你需要的功能，但是第三方并没有更新，而且很多第三方组件维护一段时间后不再维护。")]),t._v(" "),s("li",[t._v("录活性和针对性。比如对富文本会有一些定制化需求。如，将图片上传到七牛，需要给图片打水印，针对不同业务满足不同的需求，使用第三方包装的组件是不完全合适的，基于第三方封装的组件是很难扩展的。")]),t._v(" "),s("li",[t._v("自己封装的组件，会更灵活一些")])]),t._v(" "),s("h3",{attrs:{id:"如何实现第三方库的封装"}},[t._v("如何实现第三方库的封装")]),t._v(" "),s("p",[t._v("首先我们用官方提供的vue-cli来构建项目，这里选择了 webpack-simple(组件相对比较简单，不需要复杂的功能，所以用了webpack-simple就满足需求)")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -g vue-cli\nvue init webpack-simple my-project\ncd my-project  # 或者 cd $_\nnpm install \n")])])]),s("p",[t._v("我们先选择一个比较简单的库来进行学习。不能一口吃个大胖子。")]),t._v(" "),s("p",[t._v("安装 countup.js")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install countup.js\nnpm run dev\n")])])]),s("p",[t._v("启动项目之后按照countup.js官方demo初始化插件")]),t._v(" "),s("p",[t._v("App.vue")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("countup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CountUp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'countup.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count-to'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Welcome to Your Vue.js App'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      numAnim"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initCountUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initCountUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" countUp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("countup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        startVal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("countUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        countUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("p",[t._v("此时刷新页面，发现countUp.js已经生效了")]),t._v(" "),s("p",[t._v("回过头来我们再看看countup.js的配置项")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("On npm: countup.js\n\nParams:\n\ntarget: string | HTMLElement | HTMLInputElement - id of html element, input, svg text element, or DOM element reference where counting occurs\nendVal: number - the value you want to arrive at\noptions?: CountUpOptions - optional configuration object for fine-grain control\n")])])]),s("p",[t._v("其中Options(defaults in parentheses);")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("interface CountUpOptions {\n  startVal?: number; // number to start at (0)\n  decimalPlaces?: number; // number of decimal places (0)\n  duration?: number; // animation duration in seconds (2)\n  useGrouping?: boolean; // example: 1,000 vs 1000 (true)\n  useEasing?: boolean; // ease animation (true)\n  smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)\n  smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)\n  separator?: string; // grouping separator (',')\n  decimal?: string; // decimal ('.')\n  // easingFn: easing function for animation (easeOutExpo)\n  easingFn?: (t: number, b: number, c: number, d: number) => number;\n  formattingFn?: (n: number) => string; // this function formats result\n  prefix?: string; // text prepended to result\n  suffix?: string; // text appended to result\n  numerals?: string[]; // numeral glyph substitution\n}\n")])])]),s("p",[t._v("我们可以将props按文档进行初始化")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("props: {\n  start: {\n    type: Number,\n    default: 0\n  },\n  duration: {\n    type: Number,\n    default: 2.5\n  }\n}\n")])])]),s("p",[t._v("然后将之前写死的配置项替换成props就可以了。")]),t._v(" "),s("h5",{attrs:{id:"使用组件"}},[t._v("使用组件")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<vue-count-up :end="2500" :duration="2.5"></vue-count-up>\n')])])]),s("h3",{attrs:{id:"开始改造轮子"}},[t._v("开始改造轮子")]),t._v(" "),s("p",[t._v("首先当然是阅读源码了")]),t._v(" "),s("p",[t._v("其实源码也就两部分核心代码")]),t._v(" "),s("p",[t._v("第一部分：主要是就是 requestAnimationFrame，在游览器不支持requestAnimationFrame 的情况下使用 setTimeout 来模拟，这段代码值得仔细阅读，自己在平时的项目中也能借鉴使用这段代码。")]),t._v(" "),s("p",[t._v("第二部分：就是 count 函数")]),t._v(" "),s("p",[t._v("看懂这两部分之后造轮子就相当的简单了, demo")]),t._v(" "),s("p",[t._v("造轮子过程中发现 countUp,并没有 autoplay 这个参数项可以让组件自动开始count，没关系。。。我们可以自己来撸，我们首先定义 autoplay 这个props为布尔值，默认所有组件 autoplay 为 true")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" props:{\n   autoplay: {\n     type: Boolean,\n     required: false,\n     default: true\n   }\n }\n")])])]),s("p",[t._v("定义好 props 之后只要在 mounted 生命周期内加一个判断就完事了。")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mounted() {\n  if (this.autoplay) {\n    this.start();\n  }\n}\n")])])]),s("p",[t._v("我们的 countUp 组件可以自动 count 了！")]),t._v(" "),s("h3",{attrs:{id:"上传npm"}},[t._v("上传npm")]),t._v(" "),s("p",[t._v("在不跨项目的情况下之前所做的已经满足需求了。但我们不能就此满足，我想让世界上更多的人来使用我的插件，这时候就要上传 npm了 demo 。")]),t._v(" "),s("p",[t._v("首先我们新建一个index.js")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import CountTo from './App.vue'  // 做实验时并没有加新的文件，所以直接引App.vue，如果是其它文件的话，可以 直接引对应的文件。\n\n// 导出模块\nexport default CountTo\n\n//global 情况下 自动安装\nif (typeof window !== 'undefined' && window.Vue) {\n  window.Vue.component('count-to', CountTo)\n}\n\n")])])]),s("p",[t._v("同时我们也要改造一下 webpack 的配置，因为不是所有使用你组件的人都是通过 npm 安装使用 import 引入组件的的。")]),t._v(" "),s("p",[t._v("还有很多人是通过 "),s("code",[t._v("<script>")]),t._v(" 标签的方式直接引入的，所以我们要将 libraryTarget 改为 umd 格式")]),t._v(" "),s("p",[t._v("下面的配置在output中")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("library: 'CountTo',\nlibraryTarget: 'umd',\numdNamedDefine: true\n\n")])])]),s("p",[t._v("大功告成，现在只要将它发布到 npm 就可以了，首先注册一个npm 账号，\n之后配置自己的 package.json (注意填写 version，每次发布的 version 不能相同；main 为入口文件地址)。\n之后只要一行命令 npm publish 你的项目就发到 npm 了，快让小伙伴们一起来用你的vue component 吧！")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  "main": "dist/build.js",\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("main的入口是一定要写的，不然上传后找不到目录src下面的入口")])]),t._v(" "),s("h3",{attrs:{id:"如何进行测试呀"}},[t._v("如何进行测试呀？")]),t._v(" "),s("p",[t._v("如果没有现成的项目重复上面vue-cli生成项目的步骤，生成新的项目")]),t._v(" "),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install 你自己的npm包名字\n")])])]),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  import app from 'my-project-simple-component'\n")])])]),s("div",{staticClass:"language-metadata json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  components:{\n    app\n  }\n")])])]),s("p",[t._v("这样就可以像平时用的组件一样用了。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事件")]),t._v(" "),s("p",[t._v("引用包时候因为npm配置的时候是export default所以，我这面无论是叫app还是叫什么全可以。 如果export带上名字的话，引用的时候也要固定的名字")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);