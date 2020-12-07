(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{521:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"查找的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找的基本概念"}},[t._v("#")]),t._v(" 查找的基本概念")]),t._v(" "),a("ol",[a("li",[t._v("查找表"),a("br"),t._v("\n由同一类型的数据元素（或记录）构成的集合")]),t._v(" "),a("li",[t._v("两类查找表")])]),t._v(" "),a("ul",[a("li",[t._v("静态查找表：查找的同时对查找表不做修改操作（如：插入和删除）")]),t._v(" "),a("li",[t._v("动态查找：查找的同时对查找表具有修改操作")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("基本术语"),a("br"),t._v("\n关键字：ynvik某个数据项的值，可用来识别一个记录"),a("br"),t._v("\n两类关键字：主关键字和次关键字"),a("br"),t._v("\n主关键字：唯一标识数据元素"),a("br"),t._v("\n次关键字：可以表示若干个数据元素")]),t._v(" "),a("li",[t._v("查找算法的评价指标"),a("br"),t._v("\n关键字的平均比较次数，也称平均搜索长充ASL(Average Search Length)")]),t._v(" "),a("li",[t._v("查找的方法"),a("br"),t._v("\n顺序查找、二分查找、分块查找、二叉树排序查找、平衡二叉树、B-树、B+树、散列查找")])]),t._v(" "),a("h3",{attrs:{id:"方法-顺序查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-顺序查找"}},[t._v("#")]),t._v(" 方法1️⃣ 顺序查找")]),t._v(" "),a("p",[t._v("应用范围："),a("br"),t._v("\n顺序表或线性链表表示的静态查找表："),a("br"),t._v("\n表内元素之间无序")]),t._v(" "),a("ol",[a("li",[t._v("顺序表的表示")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Elemtype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表基地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表长")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" SSTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("顺序表L中查找值为e的数据元素"),a("br"),t._v("\n把待查关键字key存入表头（“哨兵”）从后向前逐个比较，可免去查找过程中每一步都要检测是否查找完毕，加快速度。")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Search_Seq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SSTable ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" KeyTape key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("顺序查找的性能分析"),a("br"),t._v("\n空间复杂度：一个辅助空间"),a("br"),t._v("\n时间复杂度"),a("br"),t._v("\n查找成功时的平均查找长度"),a("br"),t._v("\n设表中各记录查找概率相等"),a("br"),t._v("\nASL（n）= n+1")]),t._v(" "),a("li",[t._v("顺序查找算法的特点"),a("br"),t._v("\n算法简单，对表结构无任何要求（顺序和链式）"),a("br"),t._v("\n当n很大时查找效率较低"),a("br"),t._v("\n改进措施：二分查找，分块查找")])]),t._v(" "),a("h3",{attrs:{id:"方法-二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-二分查找"}},[t._v("#")]),t._v(" 方法2️⃣:二分查找")]),t._v(" "),a("p",[t._v("折半查找的前提条件是：查找表有序")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("思想"),a("br"),t._v("\n折半查找（Binary Search)是用待查找元素的key与查找表的“中间位置”的元素的关键字进行比较，若他们的值相等，内里查找成功，若查找元素key大于查找表的“中音位置”的元素关键字的值，则在查找表的中间位置的后端范围内，继续使用折半查找。址到查找成功或者失败为止。")])]),t._v(" "),a("li",[a("p",[t._v("举例过程"),a("br"),t._v(" "),a("img",{attrs:{width:"550",src:t.$withBase("/assets/img/seek.png"),alt:"seek"}})])]),t._v(" "),a("li",[a("p",[t._v("性能分析\n为了分析二分查找的性能，可以用二叉树来描述二分查找过程，把当前朝着区间中点作为根结点，左子区间和右子区间分别作为根的左子树和右子树，左子区间和右子区间再按类似方法，由此得到二叉树称为二分查找的判定树。")])]),t._v(" "),a("li",[a("p",[t._v("算法描述"),a("br"),t._v("\n折半查找（非递归算法）")])])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Search_Bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SSTable ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" KeyType key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若找到，则函数值为该元素在表中的位置，否则为0")]),t._v("\n  low"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" heigh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      retun mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("折半查找（递归算法）")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Search_Bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SSTable ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keyType key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找不到时返回0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Search_Bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Search_Bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"方法-分块查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-分块查找"}},[t._v("#")]),t._v(" 方法3️⃣:分块查找")]),t._v(" "),a("p",[t._v("分块有序，即分成若干子表，要求每个子表中的数值都比后一块中数值小（但子表内部未必有序）"),a("br"),t._v("\n然后将各子表中的最大关键字构成一个索引表，表中还要包含每个子表的起始地址（即头指针）"),a("br"),t._v("\n分块查找（块间有序，块内无序）"),a("br"),t._v("\n👉分块查找过程")]),t._v(" "),a("ol",[a("li",[t._v("对索引表使用折半查找法（因为索引表是有序表）")]),t._v(" "),a("li",[t._v("确定了待查关键字所在的子表后，在子表内采用顺序查找法（因为各子表内部是无序表）；"),a("br"),t._v("\n分块查找性能分析"),a("br"),t._v("\n查找过程：每次将待查记录所在区间缩小一半，比顺序查找效率高，时间复杂度O（log2^n）"),a("br"),t._v("\n适用条件：采用顺序存储结构的有序表，不宜用于链式结构"),a("br"),t._v("\n分块查找优缺点："),a("br"),t._v("\n优点： 插入和删除比较容易，无需进行大量移动。\n缺点：要增加一个索引表的存储空间并对初始索引表进行排序运算。"),a("br"),t._v("\n适用情况：如果线性表既要快速查找又经常动态变化，则可采用分块查找。")])]),t._v(" "),a("h3",{attrs:{id:"方法-树表的查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-树表的查找"}},[t._v("#")]),t._v(" 方法4️⃣:树表的查找")]),t._v(" "),a("p",[t._v("表结构在查找过程中动态生成"),a("br"),t._v("\n对于给定值key"),a("br"),t._v("\n若表中存在，则成功返回；"),a("br"),t._v("\n否则插入关键字等于key的记录")]),t._v(" "),a("h4",{attrs:{id:"方法1-二叉树排序查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1-二叉树排序查找"}},[t._v("#")]),t._v(" 方法1： 二叉树排序查找")]),t._v(" "),a("p",[t._v("二叉排序树查找：前提是将查找表组织成为一棵二叉排序树。\n思想："),a("br"),t._v("\n若二叉排序树为空，则查找失败，否则，先拿根结点值与待查值进行比较，若相等，则查找成功，若根结点值大于待查值，则进入左子对重复些步骤，否则，进入右子树重复些步骤，若在查找过程中遇到二叉排序树的叶子结点时，还滑找到待找结点，则查找不成功。\n二叉排序树特点："),a("br"),t._v("\n二叉排序树是空树，或是满足如下性质的二叉树：")]),t._v(" "),a("ol",[a("li",[t._v("若其左子树非空，则左子树上所有结点的值均小于根结点的值")]),t._v(" "),a("li",[t._v("若其右子树非空，则右子树上所有结点的值均大于根结点的值")]),t._v(" "),a("li",[t._v("其左右子树本身又各是一棵二叉排序树"),a("br"),t._v("\n生成二叉排序树的过程："),a("br"),t._v("\n例如，给定关键字序列：79，62，68，90，88，89，17，5，100，120")])]),t._v(" "),a("img",{attrs:{width:"550",src:t.$withBase("/assets/img/treesort.png"),alt:"treesort"}}),t._v(" "),a("p",[t._v("算法思想：")]),t._v(" "),a("ol",[a("li",[t._v("若二叉排序树为空，则查找失败，返回空指针")]),t._v(" "),a("li",[t._v("若二叉排序树非空，将给定值key与根结点的关键之T->data.key进行比较"),a("br"),t._v("\n|  1. 若key等于T->data.key,则查找成功，返回根结点地址"),a("br"),t._v("\n|  2. 若key于小T->data.key,则进一叔查找左子树"),a("br"),t._v("\n|  3. 若key大于T->data.key，则进一叔查找右子树")]),t._v(" "),a("li",[t._v("二叉排序树的性能分析"),a("br"),t._v("\n在二叉排序树查找中，成功的查找次数不会超过二叉树的深，而具有n个结点的二叉排序树的深度，最多为log2^n,最坏为n。因些，二叉排序树查找的最好的时间复杂度为O（log2^n),最坏的时间复要度为O（n），一般情况下，其时间复杂度大致可看成O（log2^n),比顺序查找效率要好，但比二分查找要差。")]),t._v(" "),a("li",[t._v("存在问题：可退化成一个顺序表查找，效率很低")])]),t._v(" "),a("h4",{attrs:{id:"方法2-平衡二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2-平衡二叉树"}},[t._v("#")]),t._v(" 方法2：平衡二叉树")]),t._v(" "),a("p",[t._v("平衡二叉树查找的前提是要调整成一棵平衡二叉树。")]),t._v(" "),a("ol",[a("li",[t._v("思想"),a("br"),t._v("\n若平衡二叉树为空，则查找失败，否则，先拿根结点值与待查值进行比较，若相等，则查找成功，若根结点值大于等查值，则进入左子树重复此步骤，否则，进入右子树重复些步骤，若在查找过程中遇到平衡二叉树的叶子结点时，还没有找到待找结点，则查找不成功。")]),t._v(" "),a("li",[t._v("举例过程"),a("br"),t._v("\n第一步： 调整成一棵平衡二叉树"),a("br"),t._v("\n第二步：平衡二叉树查找")])]),t._v(" "),a("p",[t._v("平衡二叉树定义："),a("br"),t._v("\n若一棵二叉树中每个结点的左、右子树的深度之差的绝对值不超过1，则称这样的二叉树为平衡二叉树。"),a("br"),t._v("\n平衡因子："),a("br"),t._v("\n将该结点的左子树深度减去右子树深度的值，称为该结点的平衡因子（balancefactor)"),a("br"),t._v("\n说明："),a("br"),t._v("\n一棵二叉排序树中，所有结点的平衡因子只能为0，1，-1时，则该二叉排序树就是一棵平衡二叉树。"),a("br"),t._v("\n第一步： 非平衡二叉树的平衡处理"),a("br"),t._v("\n若一棵二叉排序树是平衡二叉树，扦入某个结点后，可能会变成非平衡二叉树，这时，就可以对该二叉树进行平衡处理，使其变成一棵平衡二叉树。"),a("br"),t._v("\n处理的原则应该是处理与扦入点最近的、而平衡因子又比1大或比-1小的结点，下面将分四种情况讨论平衡处理。"),a("br"),t._v("\n情况1：LL型处理（左左型）"),a("br"),t._v("\n情况2：LR型处理（左右型）"),a("br"),t._v("\n情况3：RR型的处理（右右型）"),a("br"),t._v("\n情况4：RL型的处理（右左型）")]),t._v(" "),a("img",{attrs:{width:"450",src:t.$withBase("/assets/img/LL.png"),alt:"LL"}}),t._v(" "),a("img",{attrs:{width:"450",src:t.$withBase("/assets/img/LR.png"),alt:"LR"}}),t._v(" "),a("img",{attrs:{width:"450",src:t.$withBase("/assets/img/rl.png"),alt:"rl"}}),t._v(" "),a("img",{attrs:{width:"450",src:t.$withBase("/assets/img/rr.png"),alt:"rr"}}),t._v(" "),a("p",[t._v("平衡三叉树本身就是一棵二叉树，故它的查找与二叉排序树完全相同，但它的查找性能优于二叉排序树，不像二叉排序树一样，会出现最坏的时间复杂度O（n），它的时间复杂度与二叉排序树的最好时间复杂相同，都为O（log2^n）\n平衡二叉树的查找性能优于二叉排序树"),a("br"),t._v("\n3. 平衡二叉树的查找及性能分析"),a("br"),t._v("\n平衡二叉树本身就是一棵二叉排序树，故它的查找与二叉排序树完全相同，但它的查找性能优于二叉排序树，不像二叉排序一样，会出现最坏的时间复杂度O（n），平衡二叉树最好最坏时间复杂相同均为O（log2n)")]),t._v(" "),a("h4",{attrs:{id:"方法-b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-b-树"}},[t._v("#")]),t._v(" 方法3️⃣: B-树")]),t._v(" "),a("ol",[a("li",[t._v("定义：B-树是一种平衡的多路查找树"),a("br"),t._v("\n一棵m阶的B-树或为空树，或为满足下列特性的m叉树："),a("br"),t._v("\n|  1. 树中每个节点至多有m棵子树"),a("br"),t._v("\n|  2. 若根结点不是叶子结点，则至少有两棵子树"),a("br"),t._v("\n|  3. 除根结点之外的所有非终端结点至少有[m/2]棵子树\n|  4. 所有的非终端结点中包含下列信息数据（N,A0,K1,A1,...An)\nB- 树是一种平衡的多路查找树"),a("br"),t._v("\n4阶B-树，每个节点最多4个指针3个关键字"),a("br"),t._v("\n一棵m阶B-树每个节点最多有m棵子树m-1个关键字，最少有[m/2]棵子树[m/2]-1个关键字"),a("br"),t._v("\nB-树的删除：兄弟够，低升高降。兄弟不够，拉下来合并"),a("br"),t._v(" "),a("img",{attrs:{width:"450",src:t.$withBase("/assets/img/tree-insert.png"),alt:"tree-insert"}})])]),t._v(" "),a("h4",{attrs:{id:"方法-b-树-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-b-树-2"}},[t._v("#")]),t._v(" 方法4️⃣: B+ 树")]),t._v(" "),a("ol",[a("li",[t._v("B+树是B-树变形，m阶的B+树和m阶的B-树的区别"),a("br"),t._v("\n关键字数和子树个数一样多"),a("br"),t._v("\n所有叶子结点中包含合部关键字信息及指向含这些关键字记录的指针，且叶子节点本身依关键字的大小自小而大顺序链接。"),a("br"),t._v("\n所有非终端结点可看成索引，节点中仅含有其子树中的最大（或最小）关键字。"),a("br"),t._v("\n操作：B+树的查找、插入、删除"),a("br"),t._v("\n在B+树上进行随机查找、插入和删除的过程基本上与B-树类似"),a("br"),t._v("\n查找：若非终端结点上的关键字等于给定值，并不终止，而是继续向下直到叶子结点。因为，在B+树中，不管 查找成功与否，每次查找都是走一条从根节点到叶结点的路径。"),a("br"),t._v("\nB+查找的分析类似于B-树。"),a("br"),t._v("\n插入：仅在叶子结点上进行插入，当结点中的关键字个数大于m时要分裂成两个结点，他们所含关键字的个数分别为(m+1)/2向下取整和（m+1）/2向上取整。并且，他们的双亲结点应同时包含这两个结点中的最大关键字。"),a("br"),t._v("\n删除：B+树的删除也仅在叶子结点进行，当叶子结点中最大关键字被删除时，其在非终端结点中的值可以作为一个”分界关键字“存在，若因删除而使结点中关键字的个数少于m/2向上取整时，其它兄弟结点的合并过程亦和B-树类似。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);