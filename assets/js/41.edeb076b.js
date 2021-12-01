(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{520:function(t,n,a){"use strict";a.r(n);var s=a(4),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"gitignore"}},[t._v("gitignore")]),t._v(" "),a("p",[t._v(".gitignore 配置文件用于配置不需要加入版本管理的文件，配置好该文件可以为我们的版本管理带来很大的便利，以下是个人对于配置 .gitignore 的一些心得。")]),t._v(" "),a("ol",[a("li",[t._v("配置语法："),a("br"),t._v("\n以斜杠“/”开头表示目录；"),a("br"),t._v("\n以星号“*”通配多个字符；"),a("br"),t._v("\n以问号“?”通配单个字符"),a("br"),t._v("\n以方括号“[]”包含单个字符的匹配列表；"),a("br"),t._v("\n以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；"),a("br"),t._v("\n此外，git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；")]),t._v(" "),a("li",[t._v("示例："),a("br"),t._v("\n（1）规则：fd1/*"),a("br"),t._v("\n说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；"),a("br"),t._v("\n（2）规则：/fd1/*"),a("br"),t._v("\n说明：忽略根目录下的 /fd1/ 目录的全部内容；"),a("br"),t._v("\n（3）规则：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/*\n!.gitignore\n!/fw/bin/\n!/fw/sf/\n")])])]),a("p",[t._v("说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；")]),t._v(" "),a("p",[t._v("3、在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改根目录中 .gitignore 文件的方法（如无，则需自己手工建立此文件）。这个文件每一行保存了一个匹配的规则"),a("br"),t._v("\n例如：")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此为注释 – 将被 Git 忽略")]),t._v("\n*.a # 忽略所有 .a 结尾的文件\n!lib.a # 但 lib.a 除外\n/TODO # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO\nbuild/ # 忽略 build/ 目录下的所有文件\ndoc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略*.o和*.a文件")]),t._v("\n *.[oa]\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略*.b和*.B文件，my.b除外")]),t._v("\n*.[bB]\n!my.b\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略dbg文件和dbg目录")]),t._v("\ndbg\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只忽略dbg目录，不忽略dbg文件")]),t._v("\ndbg/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只忽略dbg文件，不忽略dbg目录")]),t._v("\ndbg\n!dbg/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只忽略当前目录下的dbg文件和目录，子目录的dbg不在忽略范围内")]),t._v("\n/dbg\n")])])]),a("p",[t._v("有些时候，你想添加一个文件到Git，但发现添加不了，原因是这个文件被.gitignore忽略了：")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git add App.class")]),t._v("\nThe following paths are ignored by one of your .gitignore files:\nApp.class\nUse -f if you really want to add them.\n")])])]),a("p",[t._v("如果你确实想添加该文件，可以用-f强制添加到Git：")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git add -f App.class\n")])])]),a("p",[t._v("或者你发现，可能是.gitignore写得有问题，需要找出来到底哪个规则写错了，可以用git check-ignore命令检查：")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git check-ignore"),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -v")]),t._v(" App.class")]),t._v("\n.gitignore:3:*.class    App.class\n")])])]),a("p",[t._v("Git会告诉我们，.gitignore的第3行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。")]),t._v(" "),a("p",[t._v("规则很简单，不做过多解释，但是有时候在项目开发过程中，突然心血来潮想把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未track状态），然后再提交：")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git rm -r --cached .\ngit add .\ngit commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update .gitignore'")]),t._v("\n")])])]),a("p",[t._v("注：gitignore在本地是可以看到效果的，多个文件夹套用需要commit 时才能看到\n我的例子")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("!node_modules/\nnode_modules/*\n!node_modules/@nfe/\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);