(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{591:function(i,l,t){"use strict";t.r(l);var e=t(4),v=Object(e.a)({},(function(){var i=this,l=i.$createElement,t=i._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h2",{attrs:{id:"什么是uni-app"}},[i._v("什么是uni-app")]),i._v(" "),t("p",[i._v("uni-app是一个使用vue.js开发的前端应用框架。开发者可以写一套代码，发布到ios、andorid、h5、以及各种小程序、快应用等多个平台。当时也可以用Taro，也对taro进行了技术调研。我们要集成surveyjs并且主要的端是面对的小程序。而小程序对于vue里面的东西并不是完全支持的。同样也不全完试用于react，出于对vue更加熟悉，能够更快的做好项目，于是选择了uni-app。 在taro 3.0正式发布后，taro支持react、Nerv、Vue2、Vue3、jQuery的支持，效果怎么样还没有验证，但现在来看，还是用taro，性价比会更高一些")]),i._v(" "),t("h2",{attrs:{id:"用cli创建项目和hbuilderx创建项目"}},[i._v("用cli创建项目和HBuilderX创建项目")]),i._v(" "),t("p",[i._v("我当时由于HBuilderX修改了东西小程序经常不生效或者反应慢，有时候还经常会异常退出，当时正好需要自定义一些环境变量，根据不同的测试环境打包不一样的代码，而且个人觉得webstrom用着更习惯一些。顺便从可视化切到了cli项目。")]),i._v(" "),t("p",[i._v("编译区别")]),i._v(" "),t("ul",[t("li",[i._v("cli创建的项目，编译哭安装在项目下，并县不会跟随HBuilderX升级，如果需要升级需要npm update, 或者手动修改package.json中关于uni相关依赖然后执行npm install. HBuilderX创建的项目可以随着HBuilderX的升级自动升级编译器。")]),i._v(" "),t("li",[i._v("cli直接把整个项目拖拽到HBuilderX，编译时走的是项目下的编译哭。如果只把src目录放入HBuildX中，刚用的是HBuilderX安装目录下的plugin编译器。")]),i._v(" "),t("li",[i._v("cli如果想安装less、scss、ts等编译器，需 自己手动npm安装")])]),i._v(" "),t("p",[i._v("开发工具区别")]),i._v(" "),t("ul",[t("li",[i._v("cli创建的项目，内置d.ts,同其它常规npm库一样，可以vscode、webstorm等支持d.ts的开发工具里正常开发并有语法提示。")]),i._v(" "),t("li",[i._v("如果需要HBuilderX项目在其它编辑器中打开需要补充d.ts,可以先npm init,然后npm i @types/uni-app -D,来补充d.ts")]),i._v(" "),t("li",[i._v("发布App时，必须使用HBuilderX，其它开发工具无法发布App，如果想在其它编辑器里修改，需要先在HBuilderX中修改完后再去其它编辑器打开修改。")]),i._v(" "),t("li",[i._v("HBuilderX中写代码一般使用HBuilderX开发效率更高")])]),i._v(" "),t("h2",{attrs:{id:"遇到问题"}},[i._v("遇到问题")]),i._v(" "),t("ul",[t("li",[i._v("集成ts需要加入sfc.d.ts文件声明")]),i._v(" "),t("li",[i._v("小程序企业微信下在不关联普通微信时不支持分包")]),i._v(" "),t("li",[i._v("编译后超过2M")]),i._v(" "),t("li",[i._v("小程序没有数据库。需要实现离线缓存-离散存储\n存数据时，定义一个list存放包含的全部key。方便数据操作")]),i._v(" "),t("li",[i._v("地图标绘-用射线法判断平面中的点在多面边内外")]),i._v(" "),t("li",[i._v("uni-app的runtime的typeScript通过编译后包很大修改target也无法满足需求")])])])}),[],!1,null,null,null);l.default=v.exports}}]);