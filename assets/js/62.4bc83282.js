(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{551:function(t,n,e){"use strict";e.r(n);var a=e(7),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"android手机可以完美隐藏-ios手机会出现光标"}},[t._v("android手机可以完美隐藏，ios手机会出现光标")]),t._v(" "),e("p",[t._v("尝试方法（input 移动到视线外，qq浏览器会卡顿）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 把input 放在 div 后面\n   div 设置  touch-action: none\n2. input定位到可视范围外\n3. visibility 设置成  hidden\n4. color: transparent;\n5. text-indent: -99999999px; margin-left: -100%; width: 200%;\n6. font-size:0的话， 到了android 上就完蛋了。但ios上可以用\n")])])]),e("p",[t._v("解决方案")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("我们是vue项目\n在mounted中加入手机机型判断\n如果是android就用正常的隐藏就好\n如果是ios则input的font-size:0\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);