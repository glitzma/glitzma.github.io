(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{530:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"git分支管理"}},[e._v("git分支管理")]),e._v(" "),a("p",[e._v("通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息。\n如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。\n下面我们实战一下--no-ff方式的git merge：\n首先，仍然创建并切换dev分支：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b dev\nSwitched to a new branch 'dev'\n")])])]),a("p",[e._v("修改readme.txt文件，并提交一个新的commit：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git add readme.txt\n$ git commit -m "add merge"\n[dev 6224937] add merge\n 1 file changed, 1 insertion(+)\n')])])]),a("p",[e._v("现在，我们切换回master：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout master\nSwitched to branch 'master'\n")])])]),a("p",[e._v("准备合并dev分支，请注意--no-ff参数，表示禁用Fast forward：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git merge --no-ff -m \"merge with no-ff\" dev\nMerge made by the 'recursive' strategy.\n readme.txt |    1 +\n 1 file changed, 1 insertion(+)\n")])])]),a("p",[e._v("因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。\n合并后，我们用git log看看分支历史：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git log --graph --pretty=oneline --abbrev-commit\n*   7825a50 merge with no-ff\n|\\\n| * 6224937 add merge\n|/\n*   59bc1cb conflict fixed\n...\n")])])]),a("h2",{attrs:{id:"分支策略"}},[e._v("分支策略")]),e._v(" "),a("p",[e._v("在实际开发中，我们应该按照几个基本原则进行分支管理：\n首先，master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；\n那在哪干活呢？干活都在dev分支上，也就是说，dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；\n你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了。")]),e._v(" "),a("h2",{attrs:{id:"小结"}},[e._v("小结")]),e._v(" "),a("p",[e._v("Git分支十分强大，在团队开发中应该充分应用。\n合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。")]),e._v(" "),a("h2",{attrs:{id:"git-将其它分支覆盖为master"}},[e._v("git 将其它分支覆盖为master")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  1. git checkout dev\n  2. git merge master\n  3. git brach -d master\n  4. git branch -m dev master\n  5. git push -f origin master\n")])])]),a("h2",{attrs:{id:"项目开发中会有development环境和master环境"}},[e._v("项目开发中会有development环境和master环境")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("新建的项目只有master分支")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/master-dev.git\n# 这个git路径是无效的，示例而已\n")])])])]),e._v(" "),a("li",[a("p",[e._v("查看所有分支")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch --all\n# 默认只有master分支，\n$ git branch --all\n* master\n  remotes/origin/master\n\n # master[本地主分支] origin/master[远程主分支]\n # 新克隆下来的代码默认master和origin/master是关联的，也就是他们的代码保持同步\n")])])])]),e._v(" "),a("li",[a("p",[e._v("创建本地新的dev分支")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch dev  # 创建本地分支\ngit branch  # 查看分支\n# 这是会看到master和dev，而且master上会有一个星号\n# 这个时候dev是一个本地分支，远程仓库不知道它的存在\n# 本地分支可以不同步到远程仓库，我们可以在dev开发，然后merge到master，使用master同步代码，当然也可以同步\n")])])])]),e._v(" "),a("li",[a("p",[e._v("发布dev分支")]),e._v(" "),a("p",[e._v("发布dev分支指的是同步dev分支的代码到远程服务器")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git push origin dev:development # 这样远程仓库会出现development分支\n")])])])]),e._v(" "),a("li",[a("p",[e._v("在dev分支开发代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout dev  # 切换到dev分支进行开发\n# 开发代码之后，我们有两个选择\n# 第一个：如果功能开发完成了，可以合并主分支\ngit checkout master  # 切换到主分支\ngit merge dev  # 把dev分支的更改和master合并\ngit push  # 提交主分支代码远程\ngit checkout dev  # 切换到dev远程分支\ngit push  # 提交dev分支到远程\n# 第二个：如果功能没有完成，可以直接推送\ngit push  # 提交到dev远程分支\n# 注意：在分支切换之前最好先commit全部的改变，除非你真的知道自己在做什么\n")])])])]),e._v(" "),a("li",[a("p",[e._v("删除分支")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git push origin :dev  # 删除远程dev分支，危险命令哦\n# 下面两条是删除本地分支\ngit checkout master  # 切换到master分支\ngit branch -d dev  # 删除本地dev分支\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);