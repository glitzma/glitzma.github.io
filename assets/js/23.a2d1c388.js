(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{515:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"创建git服务器"}},[t._v("创建git服务器")]),t._v(" "),a("p",[t._v("前言：当我们想要实现几个小伙伴合作开发同一个项目，或者建立一个资源分享平台的时候，Git就是一个很好的选择。当然，既然是一个共有平台，那么把这个平台放到个人计算机上明显是不合适的，因此就要在服务器上搭建GIT了。另一个需求是，我们在本地开发，然后推送到服务器上，并且自动同步到web站点目录，这样就可以直接看到网页效果了，这就要实现自动同步。下面我带领大家实现这么一个功能。\n如果条件允许的话，大家可以跟着做的（注：我的服务器是centos 7，lamp环境）。\n一、在服务器上安装git:\n//yum安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install -y git\n")])])]),a("p",[t._v("在安装完之后你可以运行git进行测试，看看是否安装成功。\n二、在服务器上创建裸版本库：\nps：远程仓库通常只是一个裸仓库（bare repository） — 即一个没有当前工作目录的仓库。因为该仓库只是一个合作媒介，所以不需要从硬盘上取出最新版本的快照；仓库里存放的仅仅是 Git 的数据。简单地说，裸仓库就是你工作目录中 .git 子目录内的内容\n我们就在 /home/testgit/ 下创建一个叫 sample.git的裸仓库吧：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir /home/testgit\ncd /home/testgit\ngit init --bare sample.git\n//这里 git init 是初始化空仓库的意思，而参数 --bare 是代表创建裸仓库，这个参数一定记得带上\n")])])]),a("p",[t._v("当运行完上面的最后一句命令时，会有提示：Initialized empty Git repository in /home/testgit/sample.git/\n如果你得不到该结果，可能就要回头检查哪一步出问题了\n三、创建web站点目录www\n如果你已经拥有lamp环境，那么相信你已经了解该目录，搭建lamp环境详情可以看我的另一篇博客：centos 7搭建lamp平台环境、Centos7 系统下怎么更改apache默认网站目录\n现在我的 web 站点目录在 /home/www\n四、\n前提：本地已安装git\n打开 git bash ，我打算在我的D盘下创建一个名为 lsgogit 的版本库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /d\ngit clone git@115.159.146.94:/home/testgit/sample.git lsgogit\n")])])]),a("p",[t._v("由于下载不下来，于是找到了解决方法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone ssh://git@104.160.37.xx:27190/git/mamingjuan/mamingjuan.git\n\n\ngit clone ssh://git@23.105.194.xx:27382/git/tx-lashou/sample.git  tx-lashou\n")])])]),a("p",[t._v("在这里如果没有配置公钥的话，会提示输入密码，但是我们可能并不知道密码，那就配置公钥咯：\n1、查看自己计算机的公钥：\n//查看是否有了ssh密钥，如果没有密钥则不会有此文件夹")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/.ssh\nls -al\n//如果列出了authorized_keys2 id_dsa known_hosts config id_dsa.pub 则证明你拥有公钥。\n")])])]),a("p",[t._v("我们需要寻找一对以 id_dsa 或 id_rsa 命名的文件，其中一个带有 .pub 扩展名。 .pub 文件是你的公钥，另一个则是私钥。 如果找不到这样的文件（或者根本没有 .ssh 目录），你可以通过运行 ssh-keygen 程序来创建它们。在 Linux/Mac 系统中，ssh-keygen 随 SSH 软件包提供；在 Windows 上，该程序包含于 MSysGit 软件包中。\n首先 ssh-keygen 会确认密钥的存储位置（默认是 .ssh/id_rsa），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可。\n现在，进行了上述操作的用户需要将各自的公钥发送给任意一个 Git 服务器管理员（假设服务器正在使用基于公钥的 SSH 验证设置）。 他们所要做的就是复制各自的 .pub 文件内容，并将其通过邮件发送。 公钥看起来是这样的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAcnTC3A++ginnxr2dvtQa881abjGIzk99KQVg/sPpqvtT3espFKBs/wqrJ9naIPtCswKDMg2tBVgJzg5FimDjI44O072qAftRcjU2EEySlGDDetREOvcDxqcXzf6cAdhnKlYcPk8s46oC+SxhK0zAFZCZNc7z9GcEPOC+ESIettycDw/Bo11WfxAWS0hky2F3rYh5CRr8j7BKRsAvEaAyKwzmM9X0XCRniC2pD0ObX0/SjPwq9Q5/Vjg03muiSo5Bm/xmuHkwb4/uQglBwnaSqEr6YkL9xLMoNsQaJ1TAvTrEaZLNhWzN8iaPyKZMJEzPLX1NgeEx9AEae39N+NsJ LSGO@zhongjin\n")])])]),a("p",[t._v("现在我们回到服务器管理员的身份\n由于前面安装git的时候，centos会默认创建一个git用户（其他系统貌似需要手动创建），我们进入/home/git/.ssh，里面有一个名为 authorized_keys 的文件，我们分别将其他开发者的公钥（全选、复制、不能更改！）添加到该文件去，一个开发者的公钥分一行。\n现在我们看看有两个开发者(个人电脑分别是zhongjin 和 jinjinzhong)的authorized_keys文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAcnTC3A++ginnxr2dvtQa881abjGIzk99KQVg/sPpqvtT3espFKBs/wqrJ9naIPtCswKDMg2tBVgJzg5FimDjI44O072qAftRcjU2EEySlGDDetREOvcDxqcXzf6cAdhnKlYcPk8s46oC+SxhK0zAFZCZNc7z9GcEPOC+ESIettycDw/Bo11WfxAWS0hky2F3rYh5CRr8j7BKRsAvEaAyKwzmM9X0XCRniC2pD0ObX0/SjPwq9Q5/Vjg03muiSo5Bm/xmuHkwb4/uQglBwnaSqEr6YkL9xLMoNsQaJ1TAvTrEaZLNhWzN8iaPyKZMJEzPLX1NgeEx9AEae39N+NsJ LSGO@zhongjin\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAcnTC3A++ginnxr2dvtQa881abjGIzk99KQVg/sPpqvtT3espFKBs/wqrJ9naIPtCswKDMg2tBVgJzg5FimDjI44O072qAftRcjU2EEySlGDDetREOvcDxqcXzf6cAdhnKlYcPk8s46oC+SxhK0zAFZCZNc7z9GcEPOC+ESIettycDw/Bo11WfxAWS0hky2F3rYh5CRr8j7BKRsAvEaAyKwzmM9X0XCRniC2pD0ObX0/SjPwq9Q5/Vjg03muiSo5Bm/xmuHkwb4/uQglBwnaSqEr6YkL9xLMoNsQaJ1TAvTrEaZLNhWzN8iaPyKZMJEzPLX1NgeEx9AEae39N+NsJ LSGO@jinjinzhong\n")])])]),a("p",[t._v("至此，我们就可以实现不用输密码克隆远程仓库了：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /d\ngit clone git@115.159.146.94:/home/testgit/sample.git lsgogit\n")])])]),a("p",[t._v("经过曲折的验证：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone ssh://git@104.160.37.60:27190/git/mamingjuan/mamingjuan.git\n")])])]),a("p",[t._v("这样才可行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone ssh://git@10.1.36.221:22//data/projects/tx-frontend/txls-weex/txls-weex.git\n")])])]),a("p",[t._v("命令运行完后，lsgogit现在就是一个空的仓库了，现在我们可以在该仓库下添加文件，然后push到远程仓库了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('cd lsgogit\ntouch index.php\ngit add index.php\ngit commit -m "test commit"\ngit push origin master\n')])])]),a("p",[t._v("如果在这里推送失败了，极有可能是因为服务器的权限问题，就比如之前我们建的 testgit 文件夹，在这里我的解决方法是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown -R git:git testgit\n")])])]),a("p",[t._v("将testgit文件夹以及下面的子文件夹都赋给了git,这样就保证了推送成功。\n第一次push可能会有一些提示，因为裸版本库还什么都没有，你可能需要 git push origin master写全命令，之后就没必要了，直接 git push 就可以了。\n到目前为止，我们完成了第一个任务，实现了一个共享平台，既可拉取数据，又可以推送数据。\n四、实现自动同步到站点目录（www）\n就比如刚才我们往远程仓库推送了index.PHP文件，虽然提示推送成功，但是我们现在在服务器端还看不到效果，心理总是不爽。又比如我写了个html页面，我想在站点中马上看到，那自动同步就派上用场了。\n自动同步功能用到的是 git 的钩子功能，\n服务器端：进入裸仓库：/home/testgit/sample.git")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /home/testgit/sample.git\ncd hooks\n//这里我们创建post-receive文件\nvim post-receive\n//在该文件里输入以下内容\n#!/bin/bash\ngit --work-tree=/home/www checkout -f\n----------------------------------------------------------\ngit --work-tree=/data/projects/tx-frontend/www checkout -f\n//保存退出后，将该文件用户及用户组都设置成git\nchown git:git post-receive\n//由于该文件其实就是一个shell文件，我们还应该为其设置可执行权限\nchmod +x post-receive\n")])])]),a("p",[t._v("现在我们可以在本地计算机中修改index.php文件，或者添加一个新文件，提交到远程仓库，然后到/home/www下面，看看有没有我们刚才提交的文件。\n如果你在Git推送的工程中发现推送成功 但是在www目录下并没有自己的代码，这时候你可要注意了：这是由于文件夹的权限的原因造成的！ 假设你的www目录的所属的用户组为root，你可以将你的git用户加入这个组;并给git添加写入权限，或者其他解决方法，反正你要服务器上的git用户有权限进入www文件夹。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：chown git:git -R  www/\n这样www有了git的读写权限。到此，就可以实现git 提交了")])])])}),[],!1,null,null,null);s.default=n.exports}}]);