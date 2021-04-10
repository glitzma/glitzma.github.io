(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{540:function(n,t,a){"use strict";a.r(t);var e=a(25),i=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"animation"}},[n._v("Animation")]),n._v(" "),a("p",[n._v("transform描述了元素静态样式。")]),n._v(" "),a("p",[n._v("transition和animation都可以实现动画效果")]),n._v(" "),a("p",[n._v("两者的区别是：")]),n._v(" "),a("p",[n._v("1.触发条件不同。transition通常和hover等事件配合使用，由事件触发。animiation则和gif动态图差不多立即播放。")]),n._v(" "),a("p",[n._v("2.循环。animation可以设定循环次数。")]),n._v(" "),a("p",[n._v("3.精确性。animation可以设定每一帧的样式和时间。tranistion只能设置头尾")]),n._v(" "),a("p",[n._v("4.transition可与js配合使用，js设定要变化的样式，transition负责动画效果")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" .demo1 {\n     width: 50px;\n     height: 50px;\n     margin-left: 100px;\n     background: blue;\n     -webkit-animation-name:'IDENT';/*动画属性名，也就是我们前面keyframes定义的动画名*/\n     -webkit-animation-duration: 10s;/*动画持续时间*/\n     -webkit-animation-timing-function: ease-in-out; /*动画频率，和transition-timing-function是一样的*/\n     -webkit-animation-delay: 2s;/*动画延迟时间*/\n     -webkit-animation-iteration-count: 10;/*定义循环资料，infinite为无限次*/\n     -webkit-animation-direction: alternate;/*定义动画方式*/\n  }\n\n\n@keyframes IDENT {\n     from {\n       Properties:Properties value;\n     }\n     Percentage {\n       Properties:Properties value;\n     }\n     to {\n       Properties:Properties value;\n     }\n   }\n   或者全部写成百分比的形式：\n   @keyframes IDENT {\n      0% {\n         Properties:Properties value;\n      }\n      Percentage {\n         Properties:Properties value;\n      }\n      100% {\n         Properties:Properties value;\n      }\n    }\n")])])]),a("h2",{attrs:{id:"transition"}},[n._v("transition")]),n._v(" "),a("p",[n._v("它属性是一个简单的动画属性，非常简单非常容易用。可以说它是animation的简化版本，是给普通做简单网页特效用的。")]),n._v(" "),a("ul",[a("li",[n._v("语法")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("transition: property duration timing-function delay\n\ntransition属性是个复合属性，她包括以下几个子属性：\ntransition-property ：规定设置过渡效果的css属性名称\ntransition-duration ：规定完成过渡效果需要多少秒或毫秒\ntransition-timing-function ：指定过渡函数，规定速度效果的速度曲线\ntransition-delay ：指定开始出现的延迟时间\n默认值分别为：all 0 ease 0\n注：transition-duration 时长为0，不会产生过渡效果\n改变多个css属性的过渡效果时：\na{ transition: background 0.8s ease-in 0.3s,color 0.6s ease-out 0.3s;}\n")])])]),a("ul",[a("li",[n._v("子属性")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("transition-property\ntransition-property: none |all |property;\n\n值为none时，没有属性会获得过渡效果，值为all时，所有属性都将获得过渡效果，值为指定的css属性应用过渡效果，多个属性用逗号隔开\n\ntransition-duration\ntransition-duration：time;\n\n该属性主要用来设置一个属性过渡到另一个属性所需的时间，也就是从旧属性过渡到新属性花费的时间长度，俗称持续时间\n\ntransition-timing-function\ntransition-timing-function：linear| ease| ease-in| ease-out| ease-in-out| cubic-bezier(n,n,n,n);\n\n该属性指的是过渡的“缓动函数”。主要用来指定浏览器的过渡速度，以及过渡期间的操作进展情况，解释下：\n\n注意：值cubic-bezier(n,n,n,n)可以中定义自己的值，如 cubic-bezier(0.42,0,0.58,1)\n\nease:由快到慢到更慢\nlinear:恒速\nease-in:越来越快\nease-out:越来越慢\nease-in-out:先加速后减速\ntransition-delay:这个属性就是过渡效果开始前的延迟时间，单位秒或者毫秒\n\n")])])]),a("h2",{attrs:{id:"transform"}},[n._v("transform")]),n._v(" "),a("p",[n._v("transform属性是静态属性。它其实只是一个静态属性，需要配合transition和animation才能展现出动画效果。你可以把它看成是跟left、top等属性一样，只是一个静态样式而已。\n它可以让元素偏移、伸缩、变形、旋转等。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("translate3d(x,y,z) 是用来控制元素的位置在页面上的三轴的位置的；\nrotate(deg)是用来控制元素旋转角度的；\nskew[x,y](deg) 这个属性是用来制作倾斜度的，做过设计的人可能会知道，这个是用来在2d里面创建3d透视图的时候必须的属性；\nscale3d(x,y,z) 用来放大缩小效果，属性是比值；\nmatrix3d，css矩阵。通过这个矩阵属性，涵盖了上面所有的属性值，但是个人觉得可读性极差（全都是数字和单位，背起来有点模糊），目前没有理由推荐使用。\n---------------------------------------------------------------------------------------------------------------\nnone\t定义不进行转换。\nmatrix(n,n,n,n,n,n)\t定义 2D 转换，使用六个值的矩阵。\nmatrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)\t定义 3D 转换，使用 16 个值的 4x4 矩阵。\ntranslate(x,y)\t定义 2D 转换。\ntranslate3d(x,y,z)\t定义 3D 转换。\ntranslateX(x)\t定义转换，只是用 X 轴的值。\ntranslateY(y)\t定义转换，只是用 Y 轴的值。\ntranslateZ(z)\t定义 3D 转换，只是用 Z 轴的值。\nscale(x,y)\t定义 2D 缩放转换。\nscale3d(x,y,z)\t定义 3D 缩放转换。\nscaleX(x)\t通过设置 X 轴的值来定义缩放转换。\nscaleY(y)\t通过设置 Y 轴的值来定义缩放转换。\nscaleZ(z)\t通过设置 Z 轴的值来定义 3D 缩放转换。\nrotate(angle)\t定义 2D 旋转，在参数中规定角度。\nrotate3d(x,y,z,angle)\t定义 3D 旋转。\nrotateX(angle)\t定义沿着 X 轴的 3D 旋转。\nrotateY(angle)\t定义沿着 Y 轴的 3D 旋转。\nrotateZ(angle)\t定义沿着 Z 轴的 3D 旋转。\nskew(x-angle,y-angle)\t定义沿着 X 和 Y 轴的 2D 倾斜转换。\nskewX(angle)\t定义沿着 X 轴的 2D 倾斜转换。\nskewY(angle)\t定义沿着 Y 轴的 2D 倾斜转换。\nperspective(n)\t为 3D 转换元素定义透视视图。\n")])])]),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010780991",target:"_blank",rel:"noopener noreferrer"}},[n._v("css3新特性总结,文章"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);