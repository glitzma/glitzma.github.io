(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{384:function(t,a,n){"use strict";n.r(a);var e=n(2),s=Object(e.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"vue学习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue学习","aria-hidden":"true"}},[t._v("#")]),t._v(" vue学习")]),t._v(" "),n("h3",{attrs:{id:"框架和库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#框架和库","aria-hidden":"true"}},[t._v("#")]),t._v(" 框架和库")]),t._v(" "),n("ul",[n("li",[t._v("框架 vue 拥有完整的解决方案")]),t._v(" "),n("li",[t._v("库 jquery underscore zepto animate.css")])]),t._v(" "),n("h3",{attrs:{id:"渐进式-（渐进增强）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渐进式-（渐进增强）","aria-hidden":"true"}},[t._v("#")]),t._v(" 渐进式 （渐进增强）")]),t._v(" "),n("ul",[n("li",[t._v("vue全家桶 vuejs + vue-router + vuex + axios (获取数据)")]),t._v(" "),n("li",[t._v("通过组合 完成一个完整的框架")]),t._v(" "),n("li",[t._v("构建工具 （vue-cli）")]),t._v(" "),n("li",[t._v("大规模状态里(vuex)")]),t._v(" "),n("li",[t._v("声明式渲染")])]),t._v(" "),n("h2",{attrs:{id:"mvc-（backbone）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvc-（backbone）","aria-hidden":"true"}},[t._v("#")]),t._v(" mvc （backbone）")]),t._v(" "),n("ul",[n("li",[t._v("model 数据")]),t._v(" "),n("li",[t._v("view 视图")]),t._v(" "),n("li",[t._v("controller 控制器")])]),t._v(" "),n("h2",{attrs:{id:"mvvm-angular-vue-双向数据绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-angular-vue-双向数据绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" MVVM (angular,vue) 双向数据绑定")]),t._v(" "),n("ul",[n("li",[t._v("model 数据")]),t._v(" "),n("li",[t._v("view 视图")]),t._v(" "),n("li",[t._v("view Model 视图模型")])]),t._v(" "),n("h2",{attrs:{id:"安装vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装vue","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装vue")]),t._v(" "),n("ul",[n("li",[t._v("cdn 的方式")]),t._v(" "),n("li",[t._v("npm 安装node package manager")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm init\n//初始化，会产生一个package.json ,此文件是描述项目的依赖\n\n# 最新稳定版\n$ npm install vue\n\nnpm init -y #文件夹名字来命名package.json中的内容\n")])])]),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("vm => viewModel 数据最终会被vm所代理。")])]),t._v(" "),n("li",[n("p",[t._v(t._s(t.a)+"取值表达式，通过{{}}来进行取值，默认可以不写this,表达式，赋值运算 计算 三元表达式 尽量少写逻辑计算")])]),t._v(" "),n("li",[n("p",[t._v("指令必须 v-开头，后面的值均为变更")])]),t._v(" "),n("li",[n("p",[t._v("(表单元素) 忽略掉value,checked,selected,将数据绑定到视图上，视图修改后会影响数据变化")])]),t._v(" "),n("li",[n("p",[t._v("v-text 取代 {{}} v-cloak 解决闪烁（块）问题 (了解)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签\n")])])])]),t._v(" "),n("li",[n("p",[t._v("v-once")]),t._v(" "),n("ul",[n("li",[t._v("不需要表达式")]),t._v(" "),n("li",[t._v("只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。")])])]),t._v(" "),n("li",[n("p",[t._v("v-html 将html字符串转化成html")])]),t._v(" "),n("li",[n("p",[t._v("v-for 虚幻（数组，对象，字符串，数字）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <div v-for = "value in/of 数组"></div>\n    <div v-for = "(value,index) in/of 数组"></div>\n')])])])])]),t._v(" "),n("h2",{attrs:{id:"vue中checkbox用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue中checkbox用法","aria-hidden":"true"}},[t._v("#")]),t._v(" vue中checkbox用法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(' <input type = "checkbox" v-model = "b" value ="语文">语文\n <input type = "checkbox" v-model = "b" value ="数学">数学\n <input type = "checkbox" v-model = "b" value ="英语">英语\n\n script:\n\n let vm = new Vue({\n    el:"#app",\n    data:{\n        a:false,\n        b:[]\n    }\n })\n')])])]),n("h2",{attrs:{id:"vue-中-select-用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-中-select-用法","aria-hidden":"true"}},[t._v("#")]),t._v(" vue 中 select 用法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<select id = "select">\n    <option value = "1">你好</option>\n    <option value = "2">哈</option>\n    <option value = "3">嘿</option>\n</select>\n\njavascript:\nlet oSElect = document.getElementById(\'select\');\noSelect.onChange = function(){\nalert(this.value)\n}\n\nvue:\n  <select v-model="a">\n      <option value = "1" disabled >请选择</option>\n      <option value = "1">你好</option>\n      <option value = "2">哈</option>\n      <option value = "3">嘿</option>\n  </select>\n//禁用请选择选项\n//如果没写value就是option中间内容\n//multiple 多选 数据变成数组类型 绑定数据时注意变成数组\n\n let vm = new Vue({\n    el:"#app",\n    data:{\n        a:\'1\'\n    }\n })\n\n')])])]),n("h2",{attrs:{id:"radio-用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#radio-用法","aria-hidden":"true"}},[t._v("#")]),t._v(" radio 用法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<input type = "radio" v-model="a" value="1">女\n<input type = "radio" v-model="a" value="2">男\n\n let vm = new Vue({\n    el:"#app",\n    data:{\n        a:\'1\'\n    }\n })\n')])])]),n("h2",{attrs:{id:"事件-v-on"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件-v-on","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件 v-on (@)")]),t._v(" "),n("ul",[n("li",[t._v("绑定给dom元素,函数需要定义在methods中，不能和data里的内容重名，this指向的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则只能手动传入$event")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div @事件名="fn"></div>\n')])])]),n("h2",{attrs:{id:"vue-defineproperty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-defineproperty","aria-hidden":"true"}},[t._v("#")]),t._v(" vue DefineProperty")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let obj = {};\nObject.defineProperty(obj,'name',{\n    configurable: true,//是否可配置、可删除否\n    writable: true,//是否可写\n    enumerable:false,//是否可枚举\n    value : 1 ,\n})\n\nObject.defineProperty(obj,'name',{\n    get(){//取obj值时触发\n\n    },\n    set(){//给obj赋值会触发get方法\n\n    }\n})\n\n")])])]),n("h2",{attrs:{id:"双向绑定的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定的原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向绑定的原理")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<input type = "text" id = "input">\n<script>\nlet obj = {};\nlet temp = {};\nObject.defineProperty(obj,\'name\',{\n    get(){\n        return temp["name"];\n    },set(val){\n        temp["name"] = val;\n        input.value = obj.name;\n    }\n});\ninput.value = obj.name;\ninput.addEventListener(\'input\',function(){  //oninput事件，输入框正在输入时触发\n    obj.name = this.value\n})\n<\/script>\n')])])]),n("h2",{attrs:{id:"vm中data赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vm中data赋值","aria-hidden":"true"}},[t._v("#")]),t._v(" vm中data赋值")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1、 let vm = new Vue({\n    el:\"#app\",\n    data:{\n        a:{\n          school: ''\n        }\n    }\n})\n2、 vm.$set(vm.a,'school',1)\n3、 vm.a = {school:'lalaa',age:8,address:'xx'}\n")])])]),n("h2",{attrs:{id:"vm赋值注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vm赋值注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" vm赋值注意事项")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let vm = new Vue({\n    el:\"#app\",\n    data:{\n        arr:[1,2,3,4,5,6]\n    }\n})\n\n//因为改变数组中的某一项，get 与 set监控不到，改变数组的长度，也无法被监控到\n//错误例子：vm.arr[0] = 100; vm.arr.length -= 2;\n//管用的方法：pop push shift unshift sort reserve splice\n// methods 和data 中的数据都会放到vm上，而且名字不能冲突，冲突会报错。methods中的this指向的都是实例\n//带事件源的： 不带参数 不要写小括号，此时事件源自动传入，如果写括号需要手动传入$event属性\n//回车添加时： if(e.keyCodes === 13) this.arr.unshift(this.val);\n// @keyup.ctrl.enter 为ctrl + enter同时按\n\n<input type = 'number' v-model.number.lazy = ''> //其中.number让输入框的值变成数字类型 .lazy当输入框失去焦点时更新数据\n")])])]),n("h2",{attrs:{id:"购物车-计算机总价的写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#购物车-计算机总价的写法","aria-hidden":"true"}},[t._v("#")]),t._v(" 购物车 计算机总价的写法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("computed:{\n    sum:{\n        get(){\n            return this.products.reduce((prev,next) =>{\n                if(!next.isSelected) return prev;\n                return prev + next.productPrice * next.productCount\n            })\n        }\n    }\n}\n\n//如果把属性写成函数 默认调用的就是get方法\ncomputed:{\n    sum:{\n        return this.products.reduce((prev,next) =>{\n            if(!next.isSelected) return prev;\n            return prev + next.productPrice * next.productCount\n        })\n    }\n}\n\n\n")])])]),n("h2",{attrs:{id:"动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),n("ul",[n("li",[t._v("动画根据name设置,用name 替换v的位置")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("过渡的类名\n\n在进入/离开的过渡中，会有 6 个 class 切换。\nv-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。\nv-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。\nv-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。\nv-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。\nv-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。\nv-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。\n")])])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("v-model(checkbox,select 多选是数组，提供一个value属性) (radio checkbox 分组靠的是v-model),checked selected 不存在")]),t._v(" "),n("li",[t._v("修饰符 .number .lazy")]),t._v(" "),n("li",[t._v("按键修饰符 .enter.ctrl.keyCode")]),t._v(" "),n("li",[t._v("事件"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("- 事件.stop\n  stopPropagation, cancelBabel = true ;\n- 事件.capture  (捕获)\n  xx.addEventListener('click',fn)\n- 事件.prevent\n  preventDefault, returnValue = false\n- 事件.self\n  if (event.target !== event.currentTarget) return\n")])])])]),t._v(" "),n("li",[t._v("jquery once 每个元素只能运行一次事件处理器函数。")]),t._v(" "),n("li",[t._v("e.srcElement && e.target 判断事件源绑定事件")]),t._v(" "),n("li",[t._v("npm init -y 自动创建package.json")]),t._v(" "),n("li",[t._v("全局过滤器(挂多个实例可以用的filter）需要放到实例上面才会生效"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.filter('my',(data)=>{\n return 'lalala' + data;\n})\n")])])])]),t._v(" "),n("li",[t._v("computed 是属性不是方法"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("- 方法不会有缓存，computed会根据依赖（归vue管理的数据，可以响应式变化）的属性进行缓存\n- 两部分组成，有get和set 一般情况下通过js赋值影响其它表单元素。 通过 set方法\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<div class=\"static\" v-bind:class=\"{ active: isActive, 'text-danger': hasError }\"></div>\ndata: {\n  isActive: true,\n  hasError: false\n}\n\n<div v-bind:class=\"[activeClass, errorClass]\"></div>\ndata: {\n  activeClass: 'active',\n  errorClass: 'text-danger'\n}\n\n<div v-bind:class=\"[isActive ? activeClass : '', errorClass]\"></div>\n\n")])])]),n("h2",{attrs:{id:"指令-（用来操作dom）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指令-（用来操作dom）","aria-hidden":"true"}},[t._v("#")]),t._v(" 指令 （用来操作dom）")]),t._v(" "),n("p",[t._v("！！ 下面代码只用来参考，不要复制粘贴！！！")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-color.13")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-focus")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cur == todo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("变色"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    directives"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bindings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//el 指代的是button按钮")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("background "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bidings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drag")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmousedown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" disx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" disy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmouseMove")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" disx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" disy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmouseup")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onmousemove "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onmouseup "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bindings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bindings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取焦点")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),t._v("，\n    data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"localstorage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#localstorage","aria-hidden":"true"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let vm = new Vue({\n    el:\"#app\",\n    data:{\n        todos:[1,2,3,4,5,6]\n    },\n    created(){\n        this.todos = JSON.parse(localStorage.getItem('data') || this.todos );\n    },\n    watch:{\n        //todos(){ //watch默认只监控一层的数据，数组增加减少会监控到。 更改内容不会发生变化。此时需要深度监控\n        //    alert('aaaaa');\n        //}\n        todos:{ //实现深度监控\n            handler(){//写成函数就默认写了个handler\n                 localStorage.setItem('data',JSON.stringfy(this.todos));\n            },ddep:true\n\n        }\n    }\n})\n//localStorage.getItem\n\n")])])]),n("h2",{attrs:{id:"history-相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#history-相关","aria-hidden":"true"}},[t._v("#")]),t._v(" history 相关")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let vm = new Vue({\n    el:\"#app\",\n    data:{\n        todos:[1,2,3,4,5,6]\n    },\n    created(){\n        //监控hash值的变化\n        window.addEventListener('hashchange',()=>{\n            console.log(1\n            )\n        },false);\n    },\n    watch:{\n        //todos(){ //watch默认只监控一层的数据，数组增加减少会监控到。 更改内容不会发生变化。此时需要深度监控\n        //    alert('aaaaa');\n        //}\n        todos:{ //实现深度监控\n            handler(){//写成函数就默认写了个handler\n                 localStorage.setItem('data',JSON.stringfy(this.todos));\n            },ddep:true\n\n        }\n    }\n})\n")])])]),n("h2",{attrs:{id:"vue生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" vue生命周期")]),t._v(" "),n("ul",[n("li",[t._v("共八个")]),t._v(" "),n("li",[t._v("beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let vm = new Vue({\n    el:\"#app\",\n    data:{\n        todos:[1,2,3,4,5,6]\n    },\n    created(){//放ajax初始化数据\n        //监控hash值的变化\n        window.addEventListener('hashchange',()=>{\n            console.log(1\n            )\n        },false);\n    },\n    template:'<div>{{todos}}</div>' //如果有template属性会用模板替换掉外部html,只要有template 则app中的见容没有意义\n})\n")])])]),n("h2",{attrs:{id:"this-nexttick-保证dom渲染完成后再执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this-nexttick-保证dom渲染完成后再执行","aria-hidden":"true"}},[t._v("#")]),t._v(" this.$nextTick() 保证dom渲染完成后再执行")]),t._v(" "),n("ul",[n("li",[t._v("可以用在mounted中获取vm")]),t._v(" "),n("li",[t._v("数据变化后想获取真实dom内容，需要等待页面渲染完毕后去获取所有dom操作  此时用nextTick")])]),t._v(" "),n("h2",{attrs:{id:"this-refs-xxx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this-refs-xxx","aria-hidden":"true"}},[t._v("#")]),t._v(" this.$refs.xxx")]),t._v(" "),n("p",[t._v("在mounted同样也可以通过this.$rfs.hahaha 获取")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("如果dom元素不是通过v-for循环出来的，只能获取一个，通过v-for循环可以获得多个\n\nthis.$refs.wrap.children.length\n")])])]),n("h2",{attrs:{id:"全局组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//1.组件名不要带大写。多个单词用 - 分割 （首字母是可以大写的）\n//2.组件名和定义名字相同\n//3.html采用- 命名法， js中用驼峰命名法\n<mycomponent></mycomponent>\n\nVue.component('mycomponent',{\n    template:'<div>msg</div>',\n    data(){//组建中的数据必须是函数类型，返回一个实例作为组建的数据\n        return {msg:'啦啦'}\n    }\n})\n//全局组件\n")])])]),n("h2",{attrs:{id:"局部组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#局部组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 1.创建组件\n// 2.注册组建\n// 3.引用组件\n\n<hhh></hhh>\n或者<hhh/>  不能两个挨着，\n\nlet hhh = {template:'<div>哈哈哈</div>'}\nlet haha = {template:'<div>呵呵呵</div>'}\nlet vm = new Vue({\n    el:'#app',\n    components:{\n       hhh,\n       haha\n    },\n    data:{\n    }\n})\n\nVue.component('mycomponent',{\n    template:'<div>msg</div>',\n    data(){//组建中的数据必须是函数类型，返回一个实例作为组建的数据\n        return {msg:'啦啦'}\n    }\n})\n")])])]),n("ul",[n("li",[t._v("组件中拥有生命周期函数")])]),t._v(" "),n("h2",{attrs:{id:"sync-修饰符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" .sync 修饰符")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('2.3.0+\n在一些情况下，我们可能会需要对一个 prop 进行“双向绑定”。事实上，这正是 Vue 1.x 中的 .sync 修饰符所提供的功能。当一个子组件改变了一个带 .sync 的 prop 的值时，这个变化也会同步到父组件中所绑定的值。这很方便，但也会导致问题，因为它破坏了单向数据流。由于子组件改变 prop 的代码和普通的状态改动代码毫无区别，当光看子组件的代码时，你完全不知道它何时悄悄地改变了父组件的状态。这在 debug 复杂结构的应用时会带来很高的维护成本。\n上面所说的正是我们在 2.0 中移除 .sync 的理由。但是在 2.0 发布之后的实际应用中，我们发现 .sync 还是有其适用之处，比如在开发可复用的组件库时。我们需要做的只是让子组件改变父组件状态的代码更容易被区分。\n从 2.3.0 起我们重新引入了 .sync 修饰符， 但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。\n如下代码\n<comp :foo.sync="bar"></comp>\n会被扩展为：\n<comp :foo="bar" @update:foo="val => bar = val"></comp>\n当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：\nthis.$emit(\'update:foo\', newValue)\n')])])])])},[],!1,null,null,null);a.default=s.exports}}]);