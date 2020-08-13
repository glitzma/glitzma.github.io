(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{485:function(t,i,e){"use strict";e.r(i);var l=e(5),a=Object(l.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"flutter组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter组件"}},[t._v("#")]),t._v(" flutter组件")]),t._v(" "),e("h3",{attrs:{id:"widget概述-布局模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget概述-布局模型"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://flutter.dev/docs/development/ui/widgets/layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("widget概述-布局模型"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"布局-可以分两类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布局-可以分两类"}},[t._v("#")]),t._v(" 布局 可以分两类")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"Shttps://flutter.dev/docs/development/ui/widgets/layout#Single-child%20layout%20widgets"}},[t._v("Single-child layout widgets")]),t._v("： 父级widget中只能包含唯一一个子级widget 子元素叫child -> Widget")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://flutter.dev/docs/development/ui/widgets/layout#Multi-child%20layout%20widgets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multi-child layout widgets"),e("OutboundLink")],1),t._v("： 父级widget中能包含多个子级widget 子元素叫children -> List"),e("code",[t._v("<Widget>")])])]),t._v(" "),e("h2",{attrs:{id:"single-child-layout-widgets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-child-layout-widgets"}},[t._v("#")]),t._v(" Single-child layout widgets")]),t._v(" "),e("ul",[e("li",[t._v("Container: Container 可让您创建矩形视觉元素。container 可以装饰为一个BoxDecoration, 如 background、一个边框、或者一个阴影。 Container 也可以具有边距（margins）、填充(padding)和应用于其大小的约束(constraints)。另外， Container可以使用矩阵在三维空间中对其进行变换。")]),t._v(" "),e("li",[t._v("Center:  widget 可以使其子widget在水平和垂直方向居中.")]),t._v(" "),e("li",[t._v("Padding: Container.padding 与 Padding 没有任何区别，Container把一些小组件组合到一个包中，方便使用。")]),t._v(" "),e("li",[t._v("Align: 将其子项与其自身对齐，并随子项调整大小")]),t._v(" "),e("li",[t._v("FittedBox: 根据合适的尺寸对子项进行缩放和定位")]),t._v(" "),e("li",[t._v("AspectRatio: 将子项调整为特定宽高比")]),t._v(" "),e("li",[t._v("ConstrainedBox: 对子项添加额外约束")]),t._v(" "),e("li",[t._v("Baseline: 根据子项的基线定位子项")]),t._v(" "),e("li",[t._v("FractionallySizedBox: 将子项调整为可用空间的一小部分")]),t._v(" "),e("li",[t._v("IntrinsicHeight: 将子项调整为子项内部高度（不建议使用）")]),t._v(" "),e("li",[t._v("IntrinsicWidth: 将子项调整为子项内部宽度（不建议使用，可以导致树的深度为O（N²）的布局推测传递）")]),t._v(" "),e("li",[t._v("LimitedBox: 当盒子不受限制时，限制其大小")]),t._v(" "),e("li",[t._v("Offstage: 组件放在树中，但不绘制不可用于命中测试，不占父元素空间。但会消耗电池和CPU时间")]),t._v(" "),e("li",[t._v("OverflowBox: 对其子项施加不同学其父级的约束，可能允许子项举出父级")]),t._v(" "),e("li",[t._v("SizedBox: 创建一个具有固定大小的框")]),t._v(" "),e("li",[t._v("SizedOverflowBox: 可指定固定大小，可能会溢出")]),t._v(" "),e("li",[t._v("Transform: 在绘制子项前支持转换")]),t._v(" "),e("li",[t._v("CustomSingleChildLayout: 可以确定子项的布局约束，并可以决定子项的位置。还可以确定父级的大小，但父级的大小不能依赖于子项的大小。")])]),t._v(" "),e("blockquote",[e("p",[t._v("注： 大多数组件只是其它简单组件的组合，而不是继承而来的")])]),t._v(" "),e("h2",{attrs:{id:"multi-child-layout-widgets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-child-layout-widgets"}},[t._v("#")]),t._v(" Multi-child layout widgets")]),t._v(" "),e("ul",[e("li",[t._v("Row、Column: 这些具有弹性空间的布局类Widget可让您在水平（Row）和垂直（Column）方向上创建灵活的布局。其设计是基于web开发中的Flexbox布局模型。可以通过mainAxisAlignment（主轴属性）和 crossAxisAlignment（垂直轴属性）来进行flex布局")]),t._v(" "),e("li",[t._v("Stack: 取代线性布局 (译者语：和Android中的LinearLayout相似)，Stack允许子 widget 堆叠， 你可以使用 Positioned 来定位他们相对于Stack的上下左右四条边的位置。Stacks是基于Web开发中的绝度定位（absolute positioning )布局模型设计的。")]),t._v(" "),e("li",[t._v("IndexedStack: 显示来自子项具有指定的索引，堆栈总是和最大的子项一样大")]),t._v(" "),e("li",[t._v("GridView: 可滚动的2D网格组件")]),t._v(" "),e("li",[t._v("Flow: 通过逻辑调整子项的大小和定位")]),t._v(" "),e("li",[t._v("Table: 表格布局")]),t._v(" "),e("li",[t._v("Wrap: 以水平或垂直方式显示其子项")]),t._v(" "),e("li",[t._v("ListBody: 沿着给定轴顺序排列子节点，一般用ListView")]),t._v(" "),e("li",[t._v("CustomMultiChildLayout: 利用委托调整多个子项的尺寸和位置")]),t._v(" "),e("li",[t._v("LayoutBuilder: 构建一个可以依赖父级大小的子件树 和Builder组件相似")]),t._v(" "),e("li",[t._v("ListView: 线性排列的可滚动列表组件")]),t._v(" "),e("li",[t._v("Expanded: 扩展Row，Column，Flex 。将可用空间根据弹性系数进行划分")])])])}),[],!1,null,null,null);i.default=a.exports}}]);