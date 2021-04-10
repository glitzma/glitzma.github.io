(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{480:function(v,_,t){"use strict";t.r(_);var d=t(25),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"图的定义"}},[v._v("图的定义")]),v._v(" "),t("p",[v._v("图是由顶点集V和顶点间的关系集合E（边的集合）组成的一种数据结构，可以用二元组定义为：G=（V，E）")]),v._v(" "),t("h2",{attrs:{id:"基本术语"}},[v._v("基本术语")]),v._v(" "),t("ol",[t("li",[v._v("有向图和无向图"),t("br"),v._v("\n在图中，若用剪头标明了边是有方向性的，称这样的图为有向图，否则称无向图")]),v._v(" "),t("li",[v._v("完全图、稠密图、稀疏图"),t("br"),v._v("\n具有n个顶点，n(n-1)/2条边的图，称为完全无向图"),t("br"),v._v("\n具有n个顶点，n(n-1)条弧的有向图，称为完全有向图。"),t("br"),v._v("\n完全无向图和完全有向图都称为完全图。"),t("br"),v._v("\n对于一般无向图，顶点数为n，边数为e，则0<=e<=n(n-1)/2"),t("br"),v._v("\n对于一般有向图，项点数为n，弧数为e，则0<=e<=n(n-1)"),t("br"),v._v("\n当一个图接近完全图时，则称它为稠密图，相反，当一个图含有较少的边或者弧则称为稀疏图")]),v._v(" "),t("li",[v._v("度、入度、出度"),t("br"),v._v("\n在图中，一个顶点依附的边或弧的数目，称为该顶点的度。"),t("br"),v._v("\n在有向图中，一个顶点依附的弧头数目，称为顶点的入度，一个顶点依附的弧尾数目，称为该顶点的出度，某个顶点的入度和出度这和称为该顶点的度。")])]),v._v(" "),t("h2",{attrs:{id:"图的遍历"}},[v._v("图的遍历")]),v._v(" "),t("p",[v._v("两条遍历图的算法：深度优先搜索、广度优先搜索")]),v._v(" "),t("h4",{attrs:{id:"深度优先搜索"}},[v._v("深度优先搜索")]),v._v(" "),t("p",[v._v("深度优先搜索采用的思想🔖:类似于树的先序遍历（根左右）")]),v._v(" "),t("ol",[t("li",[v._v("首先访问顶点i，并将其访问标记置为访问过，即 visited[i]=1;")]),v._v(" "),t("li",[v._v("然后搜索与顶点i有边相连的下一个顶点j，若j未被访问过则访问它，并将j的访问标记置为已访问过，visited[j]=1,然后从j开始重复此过程，若j已访问，再看与i有边连的其它顶点；")]),v._v(" "),t("li",[v._v("若与i有边相连的顶点都被访问过，则退回到前一个访问顶点并重复刚才过程，直到图中所有顶点都被访问过为止。")])]),v._v(" "),t("h4",{attrs:{id:"广度优先搜索"}},[v._v("广度优先搜索")]),v._v(" "),t("p",[v._v("广度优先搜索采用的思想🔖：队列")]),v._v(" "),t("ol",[t("li",[v._v("开始时要将其置空")]),v._v(" "),t("li",[v._v("在每访问一个顶点时，要将其入队")]),v._v(" "),t("li",[v._v("在访问一个顶点的所有后继时，要将其出队。")]),v._v(" "),t("li",[v._v("若队列为空时，说明每个访问过的顶点的所有后继均已访问完毕，因而本次遍历可以结束。若此时还有未访问的顶点，需要另选起点进行遍历。")])]),v._v(" "),t("h2",{attrs:{id:"图的应用-四大应用"}},[v._v("图的应用（四大应用）")]),v._v(" "),t("h3",{attrs:{id:"应用-生成树"}},[v._v("👉应用1️⃣:生成树")]),v._v(" "),t("p",[v._v("在图论中，常常将树定义为一个无回路的连通图"),t("br"),v._v("\n两种遍历的算法可以获得生成树："),t("br"),v._v("\n深度优先（搜索）生成树、广度优先（搜索）生成树"),t("br"),v._v("\n在一般情况下，图中的每条边若给定了权，这时，我们所关心的不是生成树，而是生成树中边上权值之和。若生成树中每条边上权值之和达到最小，称为最小生成树。")]),v._v(" "),t("h3",{attrs:{id:"应用-最小生成树"}},[v._v("👉应用2️⃣:最小生成树")]),v._v(" "),t("h4",{attrs:{id:"最小生成树的两种方法"}},[v._v("最小生成树的两种方法")]),v._v(" "),t("p",[v._v("第一种最小生成树：普里姆算法（prim）"),t("br"),v._v("\n第二种最小生成树：克鲁斯卡尔算法（kruskal）")]),v._v(" "),t("h5",{attrs:{id:"最小生成树算法-普里姆算法-prim"}},[v._v("1️⃣最小生成树算法：普里姆算法（prim）")]),v._v(" "),t("p",[v._v("普里姆算法思想：在图中任取一个顶点K作为开始点，令U={k}，W=V-U，其中V为所有顶点集，然后找一个顶点在U中，另一个顶点在W中的边中最短的一条，找到后，将该边作为最小生成树的树边保存起来，并将该边顶点全部加入U集合中，并从W中删去这些顶点，然后重新调整U中顶点到W中顶点的距离，使之保持最小，再重复此过程直到W为空集为止。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/assets/img/undirected-graph.png"),alt:"undirected-graph"}}),v._v(" "),t("p",[v._v("例:  V={1，2，3，4，5，6}   则 U={} W={1,2,3,4,5,6}"),t("br"),v._v("\n过程:")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("u")]),v._v(" "),t("th",[v._v("w")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("{1}")]),v._v(" "),t("td",[v._v("{2,3,4,5,6}")])]),v._v(" "),t("tr",[t("td",[v._v("{1,3}")]),v._v(" "),t("td",[v._v("{2,4,5,6}")])]),v._v(" "),t("tr",[t("td",[v._v("{1,3,6}")]),v._v(" "),t("td",[v._v("{2,4,5}")])]),v._v(" "),t("tr",[t("td",[v._v("{1,3,6,4}")]),v._v(" "),t("td",[v._v("{2,5}")])]),v._v(" "),t("tr",[t("td",[v._v("{1,3,6,4,2}")]),v._v(" "),t("td",[v._v("{5}")])]),v._v(" "),t("tr",[t("td",[v._v("{1,3,6,4,2,5}")]),v._v(" "),t("td",[v._v("{}")])])])]),v._v(" "),t("h5",{attrs:{id:"最小生成树算法-克鲁斯卡尔算法-kruskal"}},[v._v("2️⃣最小生成树算法:克鲁斯卡尔算法（kruskal）")]),v._v(" "),t("p",[v._v("克鲁期卡尔算法的基本思想是：将图中所有边按权值递增顺序排列，依次选定取权值最小的边，但要求后面选 取的边不能与前面选取的边构成回路，若构成回路，则放弃该条边，再去选后面权值较大的边，n个顶点的图中，选够n-1条边即可。")]),v._v(" "),t("img",{attrs:{width:"200",src:v.$withBase("/assets/img/undirected-graph.png"),alt:"undirected-graph"}}),v._v("\n克鲁斯卡尔最小生成树过程        \n"),t("img",{attrs:{width:"500",src:v.$withBase("/assets/img/kruskal.png"),alt:"kruskal"}}),v._v(" "),t("h3",{attrs:{id:"应用-最短路径"}},[v._v("👉应用3️⃣:最短路径")]),v._v(" "),t("p",[v._v("讨论最短路径的方法有两种：单源点最短路径、所有顶点对的最短路径")]),v._v(" "),t("h4",{attrs:{id:"单源点最短路径-迪杰斯特拉-dijkstra-算法"}},[v._v("单源点最短路径：迪杰斯特拉（Dijkstra）算法")]),v._v(" "),t("p",[v._v("定义：单源点最短路径是指：给定一个出发点（单源点）和一个有向网G=（V，E），求出源点到其它各顶点之间的最短路径。"),t("br"),v._v("\n问题：怎样求出单源点的最短路径呢？"),t("br"),v._v("\n解答：将源点到终点的所有路径都列出来，然后在里面选最短的一条即可。但是这样做用手工方式可以，当路径特别多，显的特别麻烦，并且没有什么规律，不能用计算机算法实现。"),t("br"),v._v("\n方法： 迪杰斯特拉（Dijkstra）在做了大量观察后，首先提出了按路长度递增序产生各顶点的最短路径算法，我们称之为迪杰斯特拉算法"),t("br"),v._v("\n算法思想：设V为网中所有顶点集合，设置并逐步扩充一个集合S，存放已求出其最短路径的顶点，则尚未确定最短路径的顶点集合V-S：按路径长度递增的顺序逐个把V-S中的顶点加到S中，直到S中包含全部顶点，而V-S为空。通俗的讲就是每次在全部中选最小值放进去，再对比再找最小值。")]),v._v(" "),t("img",{attrs:{width:"200",src:v.$withBase("/assets/img/dijkstra.png"),alt:"dijkstra"}}),v._v(" "),t("table",{staticStyle:{"border-collapse":"collapse"},attrs:{border:"1"}},[t("tr",[t("th",{attrs:{rowspan:"2"}},[v._v("终点")]),v._v(" "),t("th",{attrs:{colspan:"5"}},[v._v("从V0到各终点的最短路径")])]),v._v(" "),t("tr",[t("td",[v._v("i=1")]),v._v(" "),t("td",[v._v("i=2")]),v._v(" "),t("td",[v._v("i=3")]),v._v(" "),t("td",[v._v("i=4")]),v._v(" "),t("td",[v._v("i=5")])]),v._v(" "),t("tr",[t("td",[v._v("V1")]),t("td",[v._v("∞")]),t("td",[v._v("∞")]),t("td",[v._v("∞")]),t("td",[v._v("∞")]),t("td",[v._v("∞")])]),v._v(" "),t("tr",[t("td",[v._v("V2")]),t("td",[v._v("10(V0,V2)")]),t("td"),t("td"),t("td"),t("td")]),v._v(" "),t("tr",[t("td",[v._v("V3")]),t("td",[v._v("∞")]),t("td",[v._v("60(V0,V2,V3)")]),t("td",[v._v("50(V0,V4,V3)")]),t("td"),t("td")]),v._v(" "),t("tr",[t("td",[v._v("V4")]),t("td",[v._v("30(V0,V4)")]),t("td",[v._v("30(V0,V4)")]),t("td"),t("td"),t("td")]),v._v(" "),t("tr",[t("td",[v._v("V5")]),t("td",[v._v("100(V0,V5)")]),t("td",[v._v("100(V0,V5)")]),t("td",[v._v("90(V0,V4,V5)")]),t("td",[v._v("60(V0,V4,V3,V5)")]),t("td")]),v._v(" "),t("tr",[t("td",[v._v("VK")]),t("td",[v._v("V2")]),t("td",[v._v("V4")]),t("td",[v._v("V3")]),t("td",[v._v("V5")]),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("Path")]),t("td",[v._v("V0-V2")]),t("td",[v._v("V0-V4")]),t("td",[v._v("V0-V4-V3")]),t("td",[v._v("V0-V4-V3-V5")]),t("td")]),v._v(" "),t("tr",[t("td",[v._v("S")]),t("td",[v._v("{V0,V2}")]),t("td",[v._v("{V0,V2,V4}")]),t("td",[v._v("{V0,V2,V4,V3}")]),t("td",[v._v("{V0,V2,V4,V3,V5}")]),t("td")])]),v._v(" "),t("h4",{attrs:{id:"所有顶点对之间的最短路径-floyd算法"}},[v._v("所有顶点对之间的最短路径：Floyd算法")]),v._v(" "),t("p",[v._v("所有顶点对之间的最短路径是指：对于给定的有向网G=（V，E），要对G中任意对顶点有序对V、W（V<>W）,找出V到W的最短距离和W到V的最短距离。"),t("br"),v._v("\n解决此问题有效的方法：轮流以每一个顶点为源点，重复执行迪杰斯特拉算法n次，可求得每一对顶点之间的最短路径，总的时间复杂度为O（n^3）,效率太低，于是出现了Floyd算法。"),t("br"),v._v("\nFloyd算法思想："),t("br"),v._v("\n将V1到Vj的最短路径长度初始化，即D[i][j]为项点i到j的路径长度，然后进行n次比较和更新。通过一个图的权值矩阵求出它的每两点间的最短路径矩阵。")]),v._v(" "),t("img",{attrs:{width:"100%",src:v.$withBase("/assets/img/floyd.png"),alt:"floyd"}}),v._v(" "),t("p",[v._v("floyd 在滑块法中就是等于0的时候 那一行一列不动。看其它的最小的是哪个然后更新。上面的矩阵更新了，下面的矩阵也要跟着更新。从0到3 依次更新，每次更新时候加入一个顶点。然后看看整个矩阵有没有新的最短路径生成。有的话就更新没有的话就不更新。")]),v._v(" "),t("h3",{attrs:{id:"应用-拓扑排序"}},[v._v("👉应用4️⃣:拓扑排序")]),v._v(" "),t("p",[v._v("通常我们把计划、施工过程、生产流程等都当成一个工程，一个大工程常常被划分成许多较小的子工程，这些子工程称为活动，这些活动完成时，整个工程也就完成了。")]),v._v(" "),t("h4",{attrs:{id:"aov网介绍"}},[v._v("AOV网介绍")]),v._v(" "),t("p",[v._v("在这种有向图中，顶点表示活动，有向边表示活动的优先关系，这有向图叫做顶点表示活动的网络（Actrie On Vertices）简称AOV网。"),t("br"),v._v("\n在AOV网中，<i,j>有向边表示i活动应先于j活动开始，即i活动必须完成后，j活动才可以列始，并称i为j的直接前驱，j为i的直接后继。这种前驱与后继的关系有传递性，此外，任何活动i不能以它自己作为自己的前驱或者后继，这叫做反自反性。从前驱和后继的传递性和反自反性来看，AOV网中不能出现有向回路（或称有向环），对工程而言，将无法进行：对程序流程而言，将出现死循环。")]),v._v(" "),t("p",[v._v("拓扑排序的步骤：")]),v._v(" "),t("ol",[t("li",[v._v("在AOV网中选一个入度为0的顶点且输出")]),v._v(" "),t("li",[v._v("在AOV网中删除此顶点及该顶点发出来的所有有向边")]),v._v(" "),t("li",[v._v("重复1，2两步，直到AOV网中所有顶点都被输出或网中不存在入度为0的顶点。")])]),v._v(" "),t("h3",{attrs:{id:"应用-关键路径"}},[v._v("👉应用5️⃣:关键路径")]),v._v(" "),t("p",[v._v("若以带权有向图的顶点代表事件（event）或工程进展状态，用弧表示活动，弧上的权值表示完成该活动所需要的时间，则这样的带权有向图称为AOE网（Activity On Edge Network）"),t("br"),v._v("\n（1）只有在某顶点所代表的事件发生后，从该顶点出发的各有向边所代表的活动才能开始。"),t("br"),v._v("\n（2）只有在进入某点的各有向边所代表的活动都已结束，该顶点所代表的时事件才能发生。"),t("br"),v._v("\n关键路径（临界路径）：在AOE网络中从源点到汇点（结束顶点）的最长路径。关键路径上的活动为关键活动。")])])}),[],!1,null,null,null);_.default=r.exports}}]);