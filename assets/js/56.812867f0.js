(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{546:function(e,n,t){"use strict";t.r(n);var o=t(7),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"weex-sdk-android-源码解析"}},[e._v("Weex SDK Android 源码解析")]),e._v(" "),t("p",[e._v("Weex 是一套构建高性能、可扩展的原生应用跨平台开发方案。一次编写，多端运行。对于前端是个与客户端融合的最方便的路径，透过客户端的模块封装可以快速的让前端突破浏览器的限制，将客户端能力发威到极限，因此除了业务层的深入外，对于 SDK 框架本身也必须更进一步的了解。\n本篇主要是从分析代码入手，探讨一下Weex在安卓平台上是如何构建一套JS的运行框架。主要讨论的范畴包括：线程模型、渲染流程、Component/Module的注册流程以及 Weex 中 JNI 的调试技巧。\n本文目录结构如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("------1. 整体架构\n------------1.1 线程模型\n----------------1.1.1 结构图\n----------------1.1.2 线程间通信\n----------------1.1.3 线程异常处理\n----------------1.1.4 线程清理\n----------------1.1.5 @JSMethod 的使用\n------------1.2 渲染模型\n----------------1.2.1 结构图\n----------------1.2.2 Native 中布局方式\n----------------1.2.3 FlexBox 概念说明\n----------------1.2.4 CSSNode/WXDomObject 方法说明\n----------------1.2.5 ViewPort的使用\n------------1.3 Component/Module 注册流程\n----------------1.3.1 结构图\n----------------1.3.2 Component 注册及使用方式\n----------------1.3.3 Module 注册及使用方式\n----------------1.3.4 DomObject 注册及使用方式\n------2. jni 调试技巧\n")])])]),t("h4",{attrs:{id:"整体架构"}},[e._v("整体架构")]),e._v(" "),t("p",[e._v("整个运行框架包括三大部分："),t("code",[e._v("JS Bridge、Render、Dom")]),e._v("，这三大部分都包含在 WXSDKManager 中。WXBridgeManager、WXRenderManager、WXDomManager 都可以通过WXSDKManager 获取。")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("JS Bridge")]),e._v("：主要用来和 "),t("code",[e._v("JS Engine（V8）")]),e._v("进行双向通信，运行在"),t("code",[e._v("JSBridge")]),e._v("线程中。Weex 的初始化，Component、Module、DomObject的注册与调用，JSBridge 线程管理最终都会由"),t("code",[e._v("JS Bridge")]),e._v(" 的管理类 "),t("code",[e._v("WXBridgeManager")]),e._v(" 完成。所有和 Dom 相关的操作都会通知到 Dom 线程，交由 "),t("code",[e._v("WXDomModule")]),e._v(" 处理。")]),e._v(" "),t("li",[e._v("Render：主要用来操作具体的"),t("code",[e._v("Native View")]),e._v("，包括管理Native View的各种操作（添加／删除Component，构造Component Tree等）、Native View的布局等，运行在UI线程中。由 WXRenderManager 统一管理，具体操作由 WXRenderStatement 管理，每一个weex instance 一一对应一个 WXRenderStatement。WXRenderStatement 具体就是操作 WXComponent。")]),e._v(" "),t("li",[e._v("Dom：主要用来操作Dom结构，包括生成对应的Dom Tree，添加／删除Dom 节点（WXDomObject）等操作，运行在独立的 Dom 线程中。由 WXDomManager 统一管理，具体操作由 WXDomStatement 管理，每一个weex instance 一一对应一个 WXDomStatement。WXDomStatement 具体就是操作 WXDomObject。所有的 Dom 操作（包括CSSLayout的计算）都在 Dom 线程中，完成后会通知UI线程处理对应的Native Component View。")])]),e._v(" "),t("h4",{attrs:{id:"线程模型"}},[e._v("线程模型")]),e._v(" "),t("p",[e._v("在处理复杂逻辑的情况下，使用线程是必不可少的，使UI线程不会积压太重的任务，导致界面卡顿。这时候又遇到另一个问题，线程是一次性的消耗品，使用完了线程就自动退出销毁了，假如有比较多的耗时任务，不得不重新创建线程去执行该耗时任务，就会存在性能问题：多次创建和销毁线程是很耗系统资源的。为了解这种问题，我们可以自己构建一个循环线程"),t("code",[e._v("Looper Thread")]),e._v("，当有耗时任务投放到该循环线程中时，线程执行耗时任务，执行完之后循环线程处于等待状态，直到下一个新的耗时任务被投放进来。这样一来就避免了多次创建Thread线程导致的性能问题了。"),t("code",[e._v("Android SDK")]),e._v("中其实已经有一个循环线程的框架-"),t("code",[e._v("HandlerThread，Weex")]),e._v(" 中的线程使用的正是"),t("code",[e._v("HandlerThread")]),e._v("，如何使用"),t("code",[e._v("HandlerThread")]),e._v("可以参看官方文档。")]),e._v(" "),t("h4",{attrs:{id:"weex中的线程"}},[e._v("Weex中的线程：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("JSBridgeThread")]),e._v("：用来"),t("code",[e._v("java jni")]),e._v("层和v8 engine之间进行通信，包括初始化"),t("code",[e._v("js framework")]),e._v("、"),t("code",[e._v("callJS")]),e._v("、callNative等。")]),e._v(" "),t("li",[e._v("DomThread：用来进行Dom操作，包括Dom解析、设置Dom样式、"),t("code",[e._v("CSS Layout")]),e._v("操作、生成Component Tree等操作。图中可知 DomThread 中的操作都是v8 engine调用上来的，也就是说是js runtime生成dom的各种操作，一旦js bundle过大，会是一个瓶颈。")]),e._v(" "),t("li",[t("code",[e._v("UIThread")]),e._v("：用来真正的视图渲染，包括设置View Layout、设置View Padding、绑定数据、Add/Remove View等操作。")])]),e._v(" "),t("h4",{attrs:{id:"通信"}},[e._v("通信：")]),e._v(" "),t("ol",[t("li",[e._v("通信方式：三个线程之间的通信方式使用的都是正常的Android Handler通信机制，每个线程中的所有操作都是时序性的（也是Handle的机制决定），保证了操作Dom的时序性。\n○ 使用 runnable 方式\nMessage m = Message.obtain(mJSHandler, WXThread.secure(r));m.obj = token;m.sendToTarget();\n○ 使用 handleMessage 方式\nMessage msg = Message.obtain();WXDomTask task = new WXDomTask();…msg.what = WXDomHandler.MsgType.WX_DOM_CREATE_BODY;msg.obj = task;WXSDKManager.getInstance().getWXDomManager().sendMessage(msg);")]),e._v(" "),t("li",[e._v("通信流程\n○ UIThread 与 "),t("code",[e._v("JSBridgeThread")]),e._v("： JSBridgeThread 不会直接发送任务给 UIThread ， UIThread 发送给 "),t("code",[e._v("JSBridgeThread")]),e._v(" 的任务有初始化"),t("code",[e._v("js")]),e._v(" framework、开始渲染页面createInstance、发送event事件等。\n○ UIThread 与 DomThread： UIThread 会在销毁instance的时候发送任务给 DomThread 进行清理，DomThread 发送任务给 UIThread 会分为两步，这两步会是一个task：\ni. 发送前会重新计算CSSLayout的耗时操作，这部分的操作是在DomThread中进行。\nii. 发送 runnable 到 UIThread，runnable执行的就是view的渲染流程，在UIThread中进行。\n说明： 这一整个task是每隔16ms自动触发，也是说一旦dom操作过多，就会拖累帧率。\n○ JSBridgeThread 与 DomThread：DomThread不会直接发送任务给JSBridgeThread 。js runtime会通过jni发送指令到 java 层，这一部分在JSBridgeThread中，然后JSBridgeThread会发送任务给 DomThread 进行各种 Dom 操作。")])]),e._v(" "),t("h4",{attrs:{id:"线程异常"}},[e._v("线程异常")]),e._v(" "),t("p",[e._v("在Weex中线程处理有一个专门的类WXThread，里面分装了HandlerThread处理任务的两种方式：SafeRunnable、SafeCallback，并且 try catch 了所有的异常，以保证在处理过程中异常crash。")]),e._v(" "),t("h4",{attrs:{id:"线程清理"}},[e._v("线程清理")]),e._v(" "),t("p",[e._v("正常情况下页面退出，是不是应该把所有的线程清理（quit）呢？weex中的做法是NO，想必是为了提高创建、销毁线程消耗系统资源的效率。Weex中WXSDKManager 、WXBridgeManager是单例，WXRenderManager 、WXDomManager的获取都是通过WXSDKManager，在WXSDKInstance destroy 的时候并不会销毁单实例，因此在多次Weex页面进出的时候线程是重用的。")]),e._v(" "),t("h4",{attrs:{id:"jsmethod"}},[e._v("@JSMethod")]),e._v(" "),t("p",[e._v("在WXComponent、WXModule中可以使用 @JSMethod 注解来提供Native方法给JS调用，这个注解有uiThread这个方法，默认值为true 参数说明： 1. 如果uiThread = true，则在UIThread中执行 2. 否则在JSBridgeThread中执行")]),e._v(" "),t("h4",{attrs:{id:"总结"}},[e._v("总结")]),e._v(" "),t("ol",[t("li",[e._v("虽说使用了线程，其实都是线性的在执行，只不过把繁重的任务让线程执行了，这也和js runtime中dom解析逻辑、顺序有关。")]),e._v(" "),t("li",[e._v("看完了Weex中的线程模型，是不是还是很简单的，没有那么复杂，有木有～")])]),e._v(" "),t("h4",{attrs:{id:"渲染"}},[e._v("渲染")]),e._v(" "),t("p",[e._v("以添加dom节点来说明整个渲染过程，步骤1可以换成其他dom操作，比如update、remove等操作。步骤2则是通用的。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('1. createBody/addDom： WXDomStatement，从 dom tree 到 component tree 的映射\n    ○ WXDomObject.parse() 递归解析dom JSONObject，最终得到当前dom树结构\n        i. 实例化WXDomObject\n        ii. 设置viewport\n        iii. 解析dom JSONObject，得到type、ref、style、attr、event\n{    "attr":{"spmId":"spma"},    "ref":"_root",    "style":{},    "type":"div"}\n        iv. 赋值 domObject.mDomContext = sdkInstance\n    ○ 若为 root 节点\n        ■ prepareRoot\n            ● 若没有设置style flexDirection 与 backgroundColor，则设置默认值 column、#ffffff\n            ● 设置style defaultWidth、defaultHeight\n    ○ 普通节点：parent.add(domObject) 把当前解析得到的dom树加到父节点，并且把当前节点和父节点置为 dirty。\n    ○ traverseTree 遍历当前dom节点\n        ■ 注册得到所有dom节点到 mRegistry 中，标记为 young\n        ■ 检查root节点是否为fixed节点，把fixed的节点存到root dom object 内\n        ■ apply所有的 style 到 CSSNode\n    ○ 递归创建Component Tree\n    ○ 添加 createBody 或者 addDom 任务到 renderTask中\n    ○ 代码如下：\nprivate void addDomInternal(JSONObject dom,boolean isRoot, String parentRef, final int index){    ……    //only non-root has parent.    WXDomObject parent;    WXDomObject domObject = WXDomObject.parse(dom,instance);    ……    if (isRoot) {      WXDomObject.prepareRoot(domObject, WXViewUtils.getWebPxByWidth(WXViewUtils.getWeexHeight(mInstanceId),WXSDKManager.getInstanceViewPortWidth(mInstanceId)), WXViewUtils.getWebPxByWidth(WXViewUtils.getWeexWidth(mInstanceId),WXSDKManager.getInstanceViewPortWidth(mInstanceId)));    } else if ((parent = mRegistry.get(parentRef)) == null) {      instance.commitUTStab(IWXUserTrackAdapter.DOM_MODULE, errCode);      return;    } else {      //non-root and parent exist      parent.add(domObject, index);    }    domObject.traverseTree( mAddDOMConsumer, ApplyStyleConsumer.getInstance());    //Create component in dom thread    WXComponent component = isRoot ?                        mWXRenderManager.createBodyOnDomThread(mInstanceId, domObject) :                        mWXRenderManager.createComponentOnDomThread(mInstanceId, domObject, parentRef, index);    ……    AddDomInfo addDomInfo = new AddDomInfo();    addDomInfo.component = component;    mAddDom.put(domObject.getRef(), addDomInfo);    IWXRenderTask task = isRoot ? new CreateBodyTask(component) : new AddDOMTask(component, parentRef, index);    mNormalTasks.add(task);    addAnimationForDomTree(domObject);    mDirty = true;    …… }\n2. layout：WXDomStatement，由 batch 驱动（每隔16ms执行一批任务，开始渲染）\n    ○ 把所有fixed的节点移到 root 节点 child 内\n    ○ CSSLayout 计算整个 dom 树（calculateLayout），耗时操作，dom 树即为mRegistry中注册的所有节点\n    ○ 遍历 mRegistry 中所有节点\n        i. 设置 markLayoutSeen\n        ii. applyUpdate：如果当前节点已经被消费，则post message到渲染的 UIThread 更新Component hostView 的 LayoutParams（更新上一帧已经被消费过的节点的LayoutParams）。\n为什么需要这个步骤？正常情况下在renderTask中对Component View setLayout就可以了，但是这要基于一个前提，那就是所有的 Dom 节点都已经被注册到 mRegistry 中了，只有这样最后 CSSLayout 计算出来的才是正确的。 由于 batch 驱动的不确定性（有可能分好几帧），非常有可能在本次 Layout 过程中 Dom 数量是不完整的，导致 CSSLayout 计算的结果肯定是不完整的。因此需要每次batch 重新计算完整 dom 树的时候把之前节点 Layout 再更新一遍，并且此时的节点必为 old（上一帧被标为old）\n    ○ 更新 mRegistry 中计算好的所有节点到Component Tree中的 Dom 节点，并且置为 old，下次 layout 时需要更新Component 的 LayoutParams。（如果只有一帧，就没有也不需要下次更新的机会了）\n    ○ 执行renderTasks：由一系列 `js` bridge 传过来的各种指令，包括Dom操作（createBody、addDom、updateStyle等）、createFinish、updateFinish事件等引起的执行dom对应的componet view操作，这些操作都会被添加到renderTasks中，并且这些任务由 batch 驱动。因为对应的是UI操作，都需在UIThread中执行。\n        ■ 示例：createBody、addDom\n            ● createView 如果有parent则add到父View\n            ● applyLayoutAndEvent：Component setLayout，更新Component hostView 的LayoutParams。\n            ● bindData\n    ○ 代码如下：\n//WXDomStatement.javavoid layout(WXDomObject rootDom) {    ……    rebuildingFixedDomTree(rootDom);    rootDom.calculateLayout(mLayoutContext);    ……    rootDom.traverseTree(new ApplyUpdateConsumer());    updateDomObj();    parseAnimation();    int count = mNormalTasks.size();    for (int i = 0; i < count && !mDestroy; ++i) {      mWXRenderManager.runOnThread(mInstanceId, mNormalTasks.get(i));    }    mNormalTasks.clear();    mAddDom.clear();    animations.clear();    mDirty = false;    …… }\n3. 最终生成的root component 会被添加到 RenderContainer\n')])])]),t("h4",{attrs:{id:"布局方式"}},[e._v("布局方式：")]),e._v(" "),t("p",[e._v("最终进行布局都会进入函数 applyLayoutAndEvent，layout操作会有两步：")]),e._v(" "),t("ol",[t("li",[e._v("setLayout：设置当前view的宽、高，以及 margin 值\n○ width：getLayoutWidth() CSSLayout 计算得到的宽\n○ height：getLayoutHeight() CSSLayout 计算得到的高\n○ left：margin left，当前节点相对于父节点的X坐标 - parent的padding值（包括bording值）\n○ top：margin top，同 left 计算方式\n○ right：margin right，直接使用CSSLayout计算得到的值\n○ bottom：margin bottom，同right 计算方式")]),e._v(" "),t("li",[e._v("setPadding：使用 CSSLayout 计算得到的 padding 值设置当前 view 的 padding 值\n其实布局就是设置当前 View LayoutParams 的padding、margin值")])]),e._v(" "),t("h4",{attrs:{id:"flexbox-概念说明"}},[e._v("FlexBox 概念说明")]),e._v(" "),t("p",[e._v("● Flex direction：FlexDirection 控制 children 的排布方向，并且这个属性标实为主轴方向，有四个可选值：\n○ Column（默认）：主轴方向从上到下排布，垂直的轴即为从左到右\n○ Row：主轴方向从左到右排布，垂直的轴即为从上到下\n○ ColumnReverse：和 Column 相反，在 RTL 布局下使用\n○ RowReverse：和 Row 相反，在 RTL 布局下使用\n● Justify content：JustifyContent 控制在一个容器内主轴方向上 children 的排列方式，比如当 FlexDirection = Row 时，可以用这个属性控制 children 水平居中。有五个可选值：\n○ JustifyContent = FlexStart （默认）\n○ JustifyContent = FlexEnd\n○ JustifyContent = Center\n○ JustifyContent = SpaceBetween\n○ JustifyContent = SpaceAround\n● Flex wrap：FlexWrap 控制容器内的 children 超出容器时的排布方式。有两个可选值：\n○ FlexWrap = Nowrap：\n○ FlexWrap = Wrap：如果FlexDirection = Row 时则往下排放，如果FlexDirection = Column时则往右排放。\n● Alignment：AlignItems 控制在一个容器内垂直轴上 children 的排列方式。和 JustifyContent 有点类似，但是方向上正好相反。有四个可选值：\n○ Stretch（默认）：在垂直轴上拉升 children 的大小与容器匹配。\n○ FlexStart：排列在垂直轴上的开始位置\n○ FlexEnd：排列在垂直轴上的末尾位置\n○ Center：排列在垂直轴上的中间位置\n● Flex：FlexGrow 控制在主轴上 children 在剩余的空间如何被分布。\n○ FlexGrow = 1\n● Margin、Padding、Border：Margin 与 Padding 有点类似，但是又有比较大的区别。Margin 相对于父节点或者兄弟节点的边距，而 Padding则是指父容器内 children 的边距。Border 则和 Padding 概念基本一致，主要是用来区别 border 效果的大小。\n○ MarginStart = 50\n○ MarginEnd = 50\n○ MarginAll = 50\n○ PaddingAll = 50\n○ BorderWidth = 50")]),e._v(" "),t("h4",{attrs:{id:"wxdomobject-cssnode-方法说明"}},[e._v("WXDomObject/CSSNode 方法说明")]),e._v(" "),t("ol",[t("li",[e._v("young：标实当前节点是否被消费过，并且只有在第一次注册是标记为 young。消费过即此节点 CSSLayout 计算完成，并且更新到Component中的DomObject，此后此节点必为 old")]),e._v(" "),t("li",[e._v("needUpdate：是否需要更新")]),e._v(" "),t("li",[e._v("markHasNewLayout：每次 CSSLayout 计算完成，都会标实 LayoutState 为 LayoutState.HAS_NEW_LAYOUT")]),e._v(" "),t("li",[e._v("markLayoutSeen：每次 CSSLayout 计算完成之后都要调用这个方法，用来标实当前节点的 CSSLayout 值可以被使用了。如何当前节点没有调用 markLayoutSeen 被 dirty，会抛异常，说明之前的CSSLayout计算还没被使用过。")]),e._v(" "),t("li",[e._v("addChild：添加子节点，并且 置为 dirty（自己和父节点）")]),e._v(" "),t("li",[e._v("getLayoutX/Y()：相对于父节点的x、y坐标")]),e._v(" "),t("li",[e._v("getPadding()：当前节点l、t、r、b的padding距离")]),e._v(" "),t("li",[e._v("getBorder()：当前节点l、t、r、b的border距离")]),e._v(" "),t("li",[e._v("getMargin()：当前节点l、t、r、b的margin距离")])]),e._v(" "),t("h4",{attrs:{id:"viewport"}},[e._v("ViewPort")]),e._v(" "),t("p",[e._v("之前框架支持的布局策略是 flexable 布局，在不同屏宽下保持相同 ViewPort（默认 750），整体缩放，可以解决大部分屏幕自适应问题。但是在某些情况下无法满足，比如想让某些元素在不同屏宽手机中都保持相同大小，画一像素的线等。目前weex 支持可配置的响应式布局，自定义设置 ViewPort 值。\n使用方式")]),e._v(" "),t("h4",{attrs:{id:"component-module-注册流程"}},[e._v("Component/Module 注册流程")]),e._v(" "),t("p",[e._v("Component 和 Module 是 Weex 中主要的两种与  交互的载体，支持与 "),t("code",[e._v("js")]),e._v(" 双向通信。也是 Weex 扩展的两种方式，具体的扩展方式可参考这两篇文章 Weex Android/iOS 扩展指南 ，这篇文章主要介绍 Weex Android Component Module 的注册流程，以及懒加载以提高初始化效率。")]),e._v(" "),t("h4",{attrs:{id:"注册流程"}},[e._v("注册流程")]),e._v(" "),t("p",[e._v('注册类型主要有：Component、Module、DomObject，注册入口统一在 WXSDKEngine 中\nComponent\n● 注册方式 入口都是从 WXSDKEngine 开始\n//WXSDKEngine.javapublic static boolean registerComponent(String type, Class clazz, boolean appendTree) throws WXException {    return registerComponent(clazz, appendTree,type);  }\n最终的注册到 WXComponentRegistry.java\npublic static boolean registerComponent(final String type, final IFComponentHolder holder, final Map componentInfo) throws WXException {……    WXBridgeManager.getInstance()        .post(new Runnable() {      @Override      public void run() {        try {          Map registerInfo = componentInfo;          if (registerInfo == null){            registerInfo = new HashMap<>();          }          registerInfo.put("type",type);          registerInfo.put("methods",holder.getMethods());          registerNativeComponent(type, holder);          registerJSComponent(registerInfo);          sComponentInfos.add(registerInfo);        } catch (WXException e) {          WXLogUtils.e("register component error:", e);        }      }    });    return true;  }\n○ 可以看到注册分为两部分，这两部分都是在 bridge 线程中执行：\ni. native 部分注册：记录component 的 type 与 holder 的 map 映射。holder 默认为 SimpleComponentHolder，主要用来：如果不为懒加载（lazyLoad），会提前解析好注解 @WXComponentProp 和 @JSMethod，否则会等到使用的时候才会去解析注解，可以提高 weex 的初始化效率。\nii. '),t("code",[e._v("js")]),e._v(" 部分注册：把 component 的 type 、methods 信息注册到 "),t("code",[e._v("js")]),e._v(' runtime中，可以看到最终的注册部分在 WXBridgeManager 中\nprivate void invokeRegisterComponents(List\n● 使用方式 使用 WXComponentFactory 的 newInstance 方法生成 WXComponent。\npublic static WXComponent newInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent) {……    IFComponentHolder holder = WXComponentRegistry.getComponent(node.getType());……    try {      return holder.createInstance(instance, node, parent);    } catch (Exception e) {      WXLogUtils.e("WXComponentFactory Exception type:[" + node.getType() + "] ", e);    }        return null;  }\n通过holder （默认为 SimpleComponentHolder ）的 createInstance 方法生成 WXComponent 实例。\nModule\nModule 的注册方式与使用方式和 Component 类似，入口从 WXSDKEngine 的方法 registerModule 开始。最终通过 WXModuleManager 注册，也分为 native 与 '),t("code",[e._v("js")]),e._v(" 两部分注册，注册的类型会区分是否是全局，如果是全局的则会提前实例化好。\n● 使用方式 通过 WXModuleManager 的 callModuleMethod 方法使用 WXModule，调用者都是从 WXBridgeManager 发起（"),t("code",[e._v("js")]),e._v('端发起）。\nstatic Object callModuleMethod(final String instanceId, String moduleStr, String methodStr, JSONArray args) {    ModuleFactory factory = sModuleFactoryMap.get(moduleStr);……    final WXModule wxModule = findModule(instanceId, moduleStr,factory);    if (wxModule == null) {      return null;    }    WXSDKInstance instance = WXSDKManager.getInstance().getSDKInstance(instanceId);    wxModule.mWXSDKInstance = instance;    final Invoker invoker = factory.getMethodInvoker(methodStr);    try {     return instance          .getNativeInvokeHelper()          .invoke(wxModule,invoker,args);    } catch (Exception e) {      WXLogUtils.e("callModuleMethod >>> invoke module:" + moduleStr + ", method:" + methodStr + " failed. ", e);      return null;    } finally {……    }  }\n步骤：\na. 实例化 WXModule，会先从全局的Module中找，未找到则通过 ModuleFactory 的 buildInstance 方法实例化。\nb. 调用 WXModule 的方法\nDomObject\n注册 DomObject主要是为了自定义 WXDomObject 类，默认的 Component 对应的domObject 都为 WXDomObject。\n● 注册方式：从 WXSDKEngine 的方法 registerDomObject 开始，最终会从 WXDomRegistry 中注册。\n● 获取方式：使用场景是在native端生成dom树的时候\na. 从 WXDomRegistry 中获取 DomObject 的 class。\nb. 从 WXDomObjectFactory 的方法 newInstance 实例化WXDomObject')]),e._v(" "),t("h4",{attrs:{id:"jni-调试技巧"}},[e._v("jni 调试技巧")]),e._v(" "),t("p",[e._v("Android Weex 中使用的 Javascript 引擎为 google 的 V8 引擎，V8 由 C++ 写，在 C++ 与 Java 之间需要JNI进行桥接，普通的JNI的调试方法只能打log输出，重新 ndk build so 动态库文件，重新跑APK程序，比较繁琐，不能直观的动态debug。有一个好消息是最新的Android Studio支持了Android Native 调试，下面就来介绍下如何在Android Studio中动态调试、断点Weex Native 代码。")]),e._v(" "),t("ol",[t("li",[e._v("在 SDK Manager 中的 SDK Tools 安装CMake、LLDB、NDK。")]),e._v(" "),t("li",[e._v("在 Weex SDK 项目中的 build.gradle 增加如下配置")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\nandroid {\n    externalNativeBuild {\n        ndkBuild {\n            path '../../../weex_v8core/jni/Android.mk' // v8core的具体路径\n        }\n    }\n}\n```\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("把 v8core 目录下build出来的v8core/obj/local/armeabi/libweexv8.so 拷贝到weex sdk目录libs下对应的文件夹中，这一步尤为关键，这个 so 文件是静态文件，不是动态库文件，里面包含了所有符号，因此可以调试debug。")])])])}),[],!1,null,null,null);n.default=a.exports}}]);