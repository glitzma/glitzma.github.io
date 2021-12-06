(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{514:function(n,e,t){"use strict";t.r(e);var r=t(7),o=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"for-of-与-for-in的区别"}},[n._v("for of 与 for in的区别")]),n._v(" "),t("p",[n._v("for in key会变成字符串类型，包括数组的私有属性也可以打印出来 ------- for of 遍历的是数组而不是对象")]),n._v(" "),t("p",[n._v("遍历数组通常使用for循环，ES5的话也可以使用forEach，ES5具有遍历数组功能的还有map、filter、some、every、reduce、reduceRight等，只不过他们的返回结果不一样。但是使用foreach遍历数组的话，使用break不能中断循环，使用return也不能返回到外层函数。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('Array.prototype.method=function(){\n　　console.log(this.length);\n}\nvar myArray=[1,2,4,5,6,7]\nmyArray.name="数组"\nfor (var index in myArray) {\n  console.log(myArray[index]);\n}\n')])])]),t("p",[n._v("使用for in 也可以遍历数组，但是会存在以下问题：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1.index索引为字符串型数字，不能直接进行几何运算\n\n2.遍历顺序有可能不是按照实际数组的内部顺序\n\n3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性\n\n所以for in更适合遍历对象，不要使用for in遍历数组。\n\n那么除了使用for循环，如何更简单的正确的遍历数组达到我们的期望呢（即不遍历method和name），ES6中的for of更胜一筹.\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('Array.prototype.method=function(){\n　　console.log(this.length);\n}\nvar myArray=[1,2,4,5,6,7]\nmyArray.name="数组";\nfor (var value of myArray) {\n  console.log(value);\n}\n')])])]),t("p",[n._v("记住，for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。")]),n._v(" "),t("p",[n._v("for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name")]),n._v(" "),t("p",[n._v("遍历对象 通常用for in来遍历对象的键名")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Object.prototype.method=function(){\n　　console.log(this);\n}\nvar myObject={\n　　a:1,\n　　b:2,\n　　c:3\n}\nfor (var key in myObject) {\n  console.log(key);\n}\n")])])]),t("p",[n._v("for in 可以遍历到myObject的原型方法method,如果不想遍历原型方法和属性的话，可以在循环内部判断一下,hasOwnPropery方法可以判断某属性是否是该对象的实例属性")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("for (var key in myObject) {\n　　if（myObject.hasOwnProperty(key)){\n　　　　console.log(key);\n　　}\n}\n    同样可以通过ES5的Object.keys(myObject)获取对象的实例属性组成的数组，不包括原型方法和属性。\n\nObject.prototype.method=function(){\n　　console.log(this);\n}\nvar myObject={\n　　a:1,\n　　b:2,\n　　c:3\n}\nObject.keys(myObject).forEach(function(key,index){<br>　　console.log(key,myObject[key])<br>})\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);