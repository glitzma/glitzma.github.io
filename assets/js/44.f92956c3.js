(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{540:function(e,t,r){"use strict";r.r(t);var s=r(5),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"git版本回退"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git版本回退"}},[e._v("#")]),e._v(" git版本回退")]),e._v(" "),r("p",[e._v("eset命令有3种方式：\n1：git reset –mixed：此为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息\n2：git reset –soft：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可\n3：git reset –hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容\n123456789101112 #回退所有内容到上一个版本 git reset HEAD^ #回退a.py这个文件的版本到上一个版本 git reset HEAD^ a.py #向前回退到第3个版本 git reset –soft HEAD~3 #将本地的状态回退到和远程的一样 git reset –hard origin/master #回退到某个版本 git reset 057d #回退到上一次提交的状态，按照某一次的commit完全反向的进行一次commit git revert HEAD\n如果我们某次修改了某些内容，并且已经commit到本地仓库，而且已经push到远程仓库了\n这种情况下，我们想把本地和远程仓库都回退到某个版本，该怎么做呢？\n前面讲到的git reset只是在本地仓库中回退版本，而远程仓库的版本不会变化\n这样，即时本地reset了，但如果再git pull，那么，远程仓库的内容又会和本地之前版本的内容进行merge\n这并不是我们想要的东西，这时可以有2种办法来解决这个问题：\n1：直接在远程server的仓库目录下，执行git reset –soft 10efa来回退。注意：在远程不能使用mixed或hard参数\n2：在本地直接把远程的master分支给删除，然后再把reset后的分支内容给push上去，如下：")]),e._v(" "),r("h2",{attrs:{id:"新建old-master分支做备份"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新建old-master分支做备份"}},[e._v("#")]),e._v(" 新建old_master分支做备份")]),e._v(" "),r("p",[e._v("git branch old_master")]),e._v(" "),r("h2",{attrs:{id:"push到远程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push到远程"}},[e._v("#")]),e._v(" push到远程")]),e._v(" "),r("p",[e._v("git push origin old_master:old_master")]),e._v(" "),r("h2",{attrs:{id:"本地仓库回退到某个版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库回退到某个版本"}},[e._v("#")]),e._v(" 本地仓库回退到某个版本")]),e._v(" "),r("p",[e._v("git reset –hard bae168")]),e._v(" "),r("h2",{attrs:{id:"删除远程的master分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除远程的master分支"}},[e._v("#")]),e._v(" 删除远程的master分支")]),e._v(" "),r("p",[e._v("git push origin :master")]),e._v(" "),r("h2",{attrs:{id:"重新创建master分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重新创建master分支"}},[e._v("#")]),e._v(" 重新创建master分支")]),e._v(" "),r("p",[e._v("git push origin master")]),e._v(" "),r("p",[e._v("在删除远程master分支时，可能会有问题，见下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ git push origin :master\nerror: By default, deleting the current branch is denied, because the next\nerror: 'git clone' won't result in any file checked out, causing confusion.\nerror:\nerror: You can set 'receive.denyDeleteCurrent' configuration variable to\nerror: 'warn' or 'ignore' in the remote repository to allow deleting the\nerror: current branch, with or without a warning message.\nerror:\nerror: To squelch this message, you can set it to 'refuse'.\nerror: refusing to delete the current branch: refs/heads/master\nTo git@xx.sohu.com:gitosis_test\n ! [remote rejected] master (deletion of the current branch prohibited)\nerror: failed to push some refs to 'git@xx.sohu.com:gitosis_test'\n")])])]),r("p",[e._v("这时需要在远程仓库目录下，设置git的receive.denyDeleteCurrent参数\ngit receive.denyDeleteCurrent warn\n然后，就可以删除远程的master分支了\n虽然说有以上2种方法可以回退远程分支的版本，但这2种方式，都挺危险的，需要谨慎操作……")])])}),[],!1,null,null,null);t.default=a.exports}}]);