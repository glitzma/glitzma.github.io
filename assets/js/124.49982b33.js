(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{605:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"模板"}},[t._v("模板")]),t._v(" "),s("p",[t._v('vue.js的模板使用了基于html的模板语法，在模板中数据的绑定是使用"Mustache"语法（双括号）。双括号会将数据解析成普通文本，而非html代码，如果想输出真正的html需要使用v-html，双括号语法不能作用于Html Attribute上，这种情况需要借助v-bind指令。')]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dynamicId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果 dynamicId 的值是 null、undefined 或 false，则 disabled attribute 甚至不会被包含在渲染出来的 "),s("code",[t._v("<div>")]),t._v(" 元素中。")]),t._v(" "),s("p",[t._v("在模板提供了完全的表达式支持，但每个绑定只能包含单个表达式，所以下面不会生效")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是语句，不是表达式 --\x3e")]),t._v("\n{{ var a = 1 }}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 流控制也不会生效，请使用三元表达式 --\x3e")]),t._v("\n{{ if (ok) { return message } }}\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("模板表达式都放在沙盒中，只能访问全局变量的一个白名单，不要在模板中试图访问用户自定义的全局变量")])]),t._v(" "),s("h4",{attrs:{id:"指令"}},[t._v("指令")]),t._v(" "),s("p",[t._v("指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。")]),t._v(" "),s("p",[t._v("常用指令")]),t._v(" "),s("ul",[s("li",[t._v("v-if 条件渲染指令，代表存在和销毁")]),t._v(" "),s("li",[t._v("v-bind绑定指令，用来绑定属性（简写:）")]),t._v(" "),s("li",[t._v("v-on事件绑定指令(简写@)")]),t._v(" "),s("li",[t._v("v-for 循环指令")]),t._v(" "),s("li",[t._v("v-text 内容显示为文本相当于{{}}")]),t._v(" "),s("li",[t._v("v-html内容按普通 HTML 插入")]),t._v(" "),s("li",[t._v("v-once只渲染一次")])]),t._v(" "),s("h5",{attrs:{id:"常用指令缩写"}},[t._v("常用指令缩写")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 完整语法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 缩写 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 动态参数的缩写 (2.6.0+) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":[key]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 完整语法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 缩写 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 动态参数的缩写 (2.6.0+) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@[event]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h5",{attrs:{id:"自定义指令"}},[t._v("自定义指令")]),t._v(" "),s("p",[t._v("在 Vue 2，自定义指令是通过使用下面列出的钩子来创建的，这些钩子都是可选的")]),t._v(" "),s("ul",[s("li",[t._v("bind - 指令绑定到元素后发生。只发生一次。")]),t._v(" "),s("li",[t._v("inserted - 元素插入父 DOM 后发生。")]),t._v(" "),s("li",[t._v("update - 当元素更新，但子元素尚未更新时，将调用此钩子。")]),t._v(" "),s("li",[t._v("componentUpdated - 一旦组件和子级被更新，就会调用这个钩子。")]),t._v(" "),s("li",[t._v("unbind - 一旦指令被移除，就会调用这个钩子。也只调用一次。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-highlight")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("高亮显示此文本亮黄色"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'highlight'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("background "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"computed-和watch"}},[t._v("computed 和watch")]),t._v(" "),s("p",[t._v("computed:🎉:")]),t._v(" "),s("ol",[s("li",[t._v("计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算。")]),t._v(" "),s("li",[t._v("不支持异步，当computed内有异步操作时无效，无法监听数据的变化")]),t._v(" "),s("li",[t._v("如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed")])]),t._v(" "),s("p",[t._v("模板内的表达式逻辑复杂时应当使用computed计算属性。"),s("br"),t._v("\n它为什么需要缓存：因为一个开销比较大的计算属性A，它需要遍历一个巨大的数组做大量计算，然后我们有其它属性依赖于A。如果它没有做缓存，我们将不可避免的多次执行A的getter。")]),t._v(" "),s("p",[t._v("watch:🎉:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("不支持缓存，数据变，直接会触发相应的操作")])]),t._v(" "),s("li",[s("p",[t._v("watch支持异步")])]),t._v(" "),s("li",[s("p",[t._v("当一个属性发生变化时，需要执行对应的操作；一对多")])]),t._v(" "),s("li",[s("p",[t._v("监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数:")]),t._v(" "),s("p",[t._v("immediate：组件加载立即触发回调函数执行，"),s("br"),t._v("\ndeep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。")])])]),t._v(" "),s("h3",{attrs:{id:"v-for循环"}},[t._v("v-for循环")]),t._v(" "),s("p",[t._v("v-for指令循环要携带key，因为dom做diff对比时，会把开始和结束做一系列对比，命中则拿新节点的key对比旧节点的key，未对应上会new element，如果key对应上再用旧节点的tag和新节点的tag是同样的，会认为这是一个旧节点。减少对比次数。")]),t._v(" "),s("h3",{attrs:{id:"生命周期"}},[t._v("生命周期")]),t._v(" "),s("p",[t._v("beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed、errorCaptured")]),t._v(" "),s("p",[t._v("一般将ajax请求放到mounted中，放到create中会被重复执行")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("生命周期函数")]),t._v(" "),s("p",[t._v("在父子组件中，在某个阶段，会先执行父组件生命周期，再执行子组件生命周期，子组件先完成生命周期然后父组件完成生命周期如：")]),t._v(" "),s("p",[t._v("父beforeCreate 父created")]),t._v(" "),s("p",[t._v("子beforeCreate 子created")])]),t._v(" "),s("p",[t._v("beforeCreate 数据检测事件配置之前调用")]),t._v(" "),s("p",[t._v("create 数据监测、事件(watch、event)生效后调用")]),t._v(" "),s("p",[t._v("beforeMount 相关的render首次被调用后执行")]),t._v(" "),s("p",[t._v("mounted 实例挂载后调用")]),t._v(" "),s("p",[t._v("beforeUpdate 数据更新时调用，在虚拟dom打补丁之前，适合更新访问现有dom，比如移除已添加的事件监听")]),t._v(" "),s("p",[t._v("update 数据已经更新，避免此期间更改状态。update不保证所有子组件的更新，如果想在整个视图绘制完毕可以在updated中用vm.$nextTick中执行")]),t._v(" "),s("p",[t._v("activated 被keep-alive缓存的组件激活时调用")]),t._v(" "),s("p",[t._v("deactivate 被keep-alive缓存的组件停用时调用")]),t._v(" "),s("p",[t._v("beforeDestroy 实例销毁之前调用，在这一步实例仍然完全可用。解绑自定义事件event.$off、清除定时器、解绑自定义的dom事件，如window.scroll等")]),t._v(" "),s("p",[t._v("destroyed 实例销毁后调用对应的vue指令解绑、事件监听移除、子实例也被销毁。")]),t._v(" "),s("p",[t._v("errorCaptured 捕获一个来自子孙组件的错误时调用。此钩子会收到三个参数：错误对象、发生错误的组件实例、错误来源信息字符串。此钩子可以返回false以阻止该错误继续向上传播。")]),t._v(" "),s("h3",{attrs:{id:"组件通信"}},[t._v("组件通信")]),t._v(" "),s("ol",[s("li",[t._v("父组件A向子组件B传递数据可以通过props向下传递给子组件。不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("子组件向父组件传递值通过事件的形式。子组件通过$emit向父组件调用时携带的事件发送数据")]),t._v(" "),s("li",[t._v("通过sync修饰符对一个prop进行双向数据绑定 相当于第1，2的简写方式")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("// 子组件\nthis.$emit('update:title', newTitle)\n// 父组件\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text-document")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doc.title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("update:")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doc.title = $event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text-document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// 简写\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text-document")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("title.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doc.title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text-document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n4. 自定义事件\n5. slot 作用域插槽\n6. vuex\n    //修改方式： 1）可以直接使用 this.$store.state.变量 = xxx;\n                2）this.$store.dispatch(actionType, payload) \n                   或者:this.$store.commit(commitType, payload)\n\n")])])]),s("h3",{attrs:{id:"自定义组件v-model"}},[t._v("自定义组件v-model")]),t._v(" "),s("p",[t._v("一个组件v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。model 选项可以用来避免这样的冲突：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("// 子组件\nVue.component('base-checkbox', {\n  model: {\n    prop: 'checked',\n    event: 'change'\n  },\n  props: {\n    checked: Boolean\n  },\n  template: `\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("checked")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$emit("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", $event.target.checked)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  `\n})\n\n// 父组件\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base-checkbox")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lovingVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("base-checkbox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("h3",{attrs:{id:"nexttick"}},[t._v("nextTick")]),t._v(" "),s("p",[t._v("vue是异步渲染的，data修改后dom不会李可渲染。$nextTick会在dom渲染之后被触发。以获取最新的dom节点。")]),t._v(" "),s("h3",{attrs:{id:"异步组件"}},[t._v("异步组件")]),t._v(" "),s("ul",[s("li",[t._v("import函数")]),t._v(" "),s("li",[t._v("按需加载大组件")])]),t._v(" "),s("h3",{attrs:{id:"keep-alive"}},[t._v("keep-alive")]),t._v(" "),s("ul",[s("li",[t._v("缓存组件")]),t._v(" "),s("li",[t._v("频繁切换不需要重复渲染")]),t._v(" "),s("li",[t._v("与v-show的区别是，v-show是css样式来实现，keep-alive是vue层的控制，简单的可用v-show,像tab切换这种复杂的可以keep-alive")])]),t._v(" "),s("p",[t._v("Props：")]),t._v(" "),s("ul",[s("li",[t._v("include - 字符串或正则表达式。只有名称匹配的组件会被缓存。")]),t._v(" "),s("li",[t._v("exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。")]),t._v(" "),s("li",[t._v("max - 数字。最多可以缓存多少组件实例。")])]),t._v(" "),s("p",[t._v("include 和 exclude prop 允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 逗号分隔字符串 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a,b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" // 这里的a，b是注册的component名\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 正则表达式 (使用 `v-bind`) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":include")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/a|b/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 数组 (使用 `v-bind`) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":include")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("有keep-alive时生命周期："),s("br"),t._v("\n加载时：parent-beforeCreate ==> parent-created ==> parent-beforeMount ==> child-beforeCreate ==> child-created ==> child-beforeMount ==> child-Mounted ==> child-actived ==> parent-mounted")]),t._v(" "),s("p",[t._v("销毁时：parent-beforeDestroy==> child-deactived ==> child-beforeDestroy ==> child-Destroyed ==> parent-Destroyed")]),t._v(" "),s("h3",{attrs:{id:"mixin"}},[t._v("mixin")]),t._v(" "),s("p",[t._v("将多个组件相同的逻辑抽离出来放到一起，引用的钩子，按照传入顺序依次调用，并在调用组件钩子之前会被调用。")]),t._v(" "),s("p",[t._v("问题：")]),t._v(" "),s("ul",[s("li",[t._v("变量来源不明确")]),t._v(" "),s("li",[t._v("多个可能会有变量冲突")]),t._v(" "),s("li",[t._v("和组件可能出现多对多关系，复杂度较高")])]),t._v(" "),s("h3",{attrs:{id:"vue-router"}},[t._v("vue-router")]),t._v(" "),s("p",[t._v("创建路由常用参数")]),t._v(" "),s("ul",[s("li",[t._v("path 路径")]),t._v(" "),s("li",[t._v("name")]),t._v(" "),s("li",[t._v("component 组件")]),t._v(" "),s("li",[t._v("meta")]),t._v(" "),s("li",[t._v("alias")]),t._v(" "),s("li",[t._v("children 嵌套路由")]),t._v(" "),s("li",[t._v("redirect")]),t._v(" "),s("li",[t._v("props")])]),t._v(" "),s("p",[t._v("全局钩子函数")]),t._v(" "),s("ul",[s("li",[t._v("beforeEach，在路由切换开始时调用")]),t._v(" "),s("li",[t._v("afterEach, 路由切换离开时调用")])]),t._v(" "),s("p",[t._v("局部到单个路由")]),t._v(" "),s("ul",[s("li",[t._v("beforeEnter")])]),t._v(" "),s("p",[t._v("组件的钩子路由")]),t._v(" "),s("ul",[s("li",[t._v("beforeRouterEnter")]),t._v(" "),s("li",[t._v("beforeRouterUpdate")]),t._v(" "),s("li",[t._v("beforeRouterLeave")])]),t._v(" "),s("p",[t._v("🎉 全局路由的使用")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to 表示即将进入的目标对象")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from 当前要离开的路由对象")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next 是一个函数 调用resolve 执行下一步")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"完整的导航解析流程"}},[t._v("完整的导航解析流程")]),t._v(" "),s("ol",[s("li",[t._v("导航被触发。")]),t._v(" "),s("li",[t._v("在失活的组件里调用 beforeRouteLeave 守卫。")]),t._v(" "),s("li",[t._v("调用全局的 beforeEach 守卫。")]),t._v(" "),s("li",[t._v("在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。")]),t._v(" "),s("li",[t._v("在路由配置里调用 beforeEnter。")]),t._v(" "),s("li",[t._v("解析异步路由组件。")]),t._v(" "),s("li",[t._v("在被激活的组件里调用 beforeRouteEnter。")]),t._v(" "),s("li",[t._v("调用全局的 beforeResolve 守卫 (2.5+)。")]),t._v(" "),s("li",[t._v("导航被确认。")]),t._v(" "),s("li",[t._v("调用全局的 afterEach 钩子。")]),t._v(" "),s("li",[t._v("触发 DOM 更新。")]),t._v(" "),s("li",[t._v("调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);