(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{589:function(t,a,e){"use strict";e.r(a);var i=e(4),s=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"git服务器禁止用户shell登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git服务器禁止用户shell登录"}},[t._v("#")]),t._v(" git服务器禁止用户shell登录")]),t._v(" "),e("p",[t._v("（1）禁止的原因")]),t._v(" "),e("p",[t._v("为了进行团队项目开发，我们经常会使用分布式版本管理系统，其中git是现今最为重要和常用的分布式管理系统。\n著名的gitHub是在git系统的基础上为各种有内容托管需求的人提供托管服务的一个网站，但是GitHub的免费服务只能创建公开的仓库。如果我们不想把自己的代码开源，想私有代码，那么建立一台git服务器也是一个不错的选择。\n在建立好git服务器后，大家都可以通过")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git clone git@10.3.0.99:project.git\n")])])]),e("p",[t._v("克隆代码到本地。\n这同时说明了大家也可以通过")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ssh git@10.3.0.99\n")])])]),e("p",[t._v("ssh连接服务器，登录到服务器上，对服务器进行各种操作，这通常很不安全,也不合适，成员只需要能对仓库操作就可以了，不需要更大的权限。")]),t._v(" "),e("p",[t._v("（2）禁止方法")]),t._v(" "),e("p",[t._v("编辑/etc/passwd文件完成。找到类似下面的一行：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git:x:1001:1001:,,,:/home/git:/bin/bash\n改为：\ngit:x:1001:1001:,,,:/home/git:/usr/bin/git-shell\n")])])]),e("p",[t._v("这样，Git用户可以正常通过ssh使用git，但无法登录shell，因为我们为git用户指定的git-shell每次一登录就自动退出。")]),t._v(" "),e("p",[t._v("--------------------------"),e("code",[t._v("好基友超超同学总结")]),t._v("--------------------------------------")]),t._v(" "),e("h3",{attrs:{id:"初始化配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化配置"}},[t._v("#")]),t._v(" 初始化配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('1.\t#配置使用git仓库的人员姓名  \n2.\tgit config --global user.name "Your Name Comes Here"  \n3.\t#配置使用git仓库的人员email  \n4.\tgit config --global user.email you@yourdomain.example.com  \n5.\t#配置到缓存 默认15分钟  \n6.\tgit config --global credential.helper cache   \n7.\t#修改缓存时间  \n8.\tgit config --global credential.helper \'cache --timeout=3600\'    \n9.\tgit config --global color.ui true  \n10.\tgit config --global alias.co checkout  \n11.\tgit config --global alias.ci commit  \n12.\tgit config --global alias.st status  \n13.\tgit config --global alias.br branch  \n14.\tgit config --global core.editor "mate -w"    # 设置Editor使用textmate  \n15.\tgit config -1 #列举所有配置  \n16.\t#用户的git配置文件~/.gitconfig  \n17. git config --list 查看所有的git配置项的列表\n\ngit log\n')])])]),e("h3",{attrs:{id:"文件操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),e("p",[t._v("查看、添加、提交、删除、找回，重置修改文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('1.\tgit help <command>  # 显示command的help  \n2.\tgit show            # 显示某次提交的内容  \n3.\tgit show $id  \n4.\tgit co  -- <file>   # 抛弃工作区修改  \n5.\tgit co  .           # 抛弃工作区修改  \n6.\tgit add <file>      # 将工作文件修改提交到本地暂存区  \n7.\tgit add .           # 将所有修改过的工作文件提交暂存区  \n8.\tgit rm <file>       # 从版本库中删除文件  \n9.\tgit rm <file> --cached  # 从版本库中删除文件，但不删除文件  \n10.\tgit reset <file>    # 从暂存区恢复到工作文件  \n11.\tgit reset -- .      # 从暂存区恢复到工作文件  \n12.\tgit reset --hard    # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改   \n12.\tgit reset --hard  版本号   # 回滚到任意一次\n13.\tgit ci <file>  \n14.\tgit ci .  \n15.\tgit ci -a           # 将git add, git rm和git ci等操作都合并在一起做  \n16.\tgit ci -am "some comments"  \n17.\tgit ci --amend      # 修改最后一次提交记录  \n18.\tgit revert <$id>    # 恢复某次提交的状态，恢复动作本身也创建了一次提交对象  \n19.\tgit revert HEAD     # 恢复最后一次提交的状态  \n20. 仅仅只是撤销已提交的版本库，不会修改暂存区和工作区\n21. git reset --soft 版本库ID 仅仅只是撤销已提交的版本库和暂存区，不会修改工作区\n22. git reset --mixed 版本库ID\n')])])]),e("h3",{attrs:{id:"查看文件diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看文件diff"}},[t._v("#")]),t._v(" 查看文件diff")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit diff <file>     # 比较当前文件和暂存区文件差异  \n2.\tgit diff  \n3.\tgit diff <$id1> <$id2>   # 比较两次提交之间的差异  \n4.\tgit diff <branch1>..<branch2> # 在两个分支之间比较  \n5.\tgit diff --staged   # 比较暂存区和版本库差异  \n6.\tgit diff --cached   # 比较暂存区和版本库差异  \n7.\tgit diff --stat     # 仅仅比较统计信息\n")])])]),e("h3",{attrs:{id:"查看提交记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看提交记录"}},[t._v("#")]),t._v(" 查看提交记录")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit log  \n2.\tgit log <file>      # 查看该文件每次提交记录  \n3.\tgit log -p <file>   # 查看每次详细修改内容的diff  \n4.\tgit log -p -2       # 查看最近两次详细修改内容的diff  \n5.\tgit log --stat      #查看提交统计信息  \n6.tigMac上可以使用tig代替diff和log，brew install tig\n")])])]),e("h3",{attrs:{id:"取得git仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取得git仓库"}},[t._v("#")]),t._v(" 取得Git仓库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\t#初始化一个版本仓库  \n2.\tgit init  \n3.\t#Clone远程版本库  \n4.\tgit clone git@xbc.me:wordpress.git  \n5.\t#添加远程版本库origin，语法为 git remote add [shortname] [url]  \n6.\tgit remote add origin git@xbc.me:wordpress.git  \n7.\t#查看远程仓库  \n8.\tgit remote -v\n")])])]),e("h3",{attrs:{id:"提交你的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交你的修改"}},[t._v("#")]),t._v(" 提交你的修改")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('1.\t#添加当前修改的文件到暂存区  \n2.\tgit add .  \n3.\t#如果你自动追踪文件，包括你已经手动删除的，状态为Deleted的文件  \n4.\tgit add -u  \n5.\t#提交你的修改  \n6.\tgit commit –m "你的注释"  \n7.\t#推送你的更新到远程服务器,语法为 git push [远程名] [本地分支]:[远程分支]  \n8.\tgit push origin master  \n9.\t#查看文件状态  \n10.\tgit status  \n11.\t#跟踪新文件  \n12.\tgit add readme.txt  \n13.\t#从当前跟踪列表移除文件，并完全删除  \n14.\tgit rm readme.txt  \n15.\t#仅在暂存区删除，保留文件在当前目录，不再跟踪  \n16.\tgit rm –cached readme.txt  \n17.\t#重命名文件  \n18.\tgit mv reademe.txt readme  \n19.\t#查看提交的历史记录  \n20.\tgit log  \n21.\t#修改最后一次提交注释的，利用–amend参数  \n22.\tgit commit --amend  \n23.\t#忘记提交某些修改，下面的三条命令只会得到一个提交。  \n24.\tgit commit –m &quot;add readme.txt&quot;  \n25.\tgit add readme_forgotten  \n26.\tgit commit –amend  \n27.\t#假设你已经使用git add .，将修改过的文件a、b加到暂存区  \n28.\t#现在你只想提交a文件，不想提交b文件，应该这样  \n29.\tgit reset HEAD b  \n30.\t#取消对文件的修改  \n31.\tgit checkout –- readme.txt\n')])])]),e("h3",{attrs:{id:"分支操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),e("p",[t._v("查看、切换、创建和删除分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit branch -r           # 查看远程分支  \n2.\tgit branch <new_branch> # 创建新的分支  \n3.\tgit branch -v           # 查看各个分支最后提交信息  \n4.\tgit branch --merged     # 查看已经被合并到当前分支的分支  \n5.\tgit branch --no-merged  # 查看尚未被合并到当前分支的分支  \n6.\tgit checkout <branch>     # 切换到某个分支  \n7.\tgit checkout -b <new_branch> # 创建新的分支，并且切换过去  \n8.\tgit checkout -b <new_branch> <branch>  # 基于branch创建新的new_branch  \n9.\tgit checkout $id          # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除  \n10.\tgit checkout $id -b <new_branch>  # 把某次历史提交记录checkout出来，创建成一个分支  \n11.\tgit branch -d <branch>  # 删除某个分支  \n12.\tgit branch -D <branch>  # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)  \n13. git branch -m oldname newname 改变当前分支名字，在当前分支下\n14. git branch -m newname 修改当前的分支，在master分支下\n")])])]),e("h3",{attrs:{id:"分支合并和rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支合并和rebase"}},[t._v("#")]),t._v(" 分支合并和rebase")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit merge <branch>               # 将branch分支合并到当前分支  意思就是master主干上，合并新的分支。\n2.\tgit merge origin/master --no-ff  # 不要Fast-Foward合并，这样可以生成merge提交  \n3.\tgit rebase master <branch>       # 将master rebase到branch，相当于：  \n4.\tgit checkout <branch> && git rebase master && git co master && git merge <branch>  \n")])])]),e("h3",{attrs:{id:"git补丁管理-方便在多台机器上开发同步时用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git补丁管理-方便在多台机器上开发同步时用"}},[t._v("#")]),t._v(" Git补丁管理(方便在多台机器上开发同步时用)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit diff > ../sync.patch         # 生成补丁  \n2.\tgit apply ../sync.patch          # 打补丁  \n3.\tgit apply --check ../sync.patch  #测试补丁能否成功  \n")])])]),e("h3",{attrs:{id:"git远程分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git远程分支管理"}},[t._v("#")]),t._v(" Git远程分支管理")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit pull                         # 抓取远程仓库所有分支更新并合并到本地  \n2.\tgit pull --no-ff                 # 抓取远程仓库所有分支更新并合并到本地，不要快进合并  \n3.\tgit fetch origin                 # 抓取远程仓库更新  \n4.\tgit merge origin/master          # 将远程主分支合并到本地当前分支  \n5.\tgit co --track origin/branch     # 跟踪某个远程分支创建相应的本地分支  \n6.\tgit co -b <local_branch> origin/<remote_branch>  # 基于远程分支创建本地分支，功能同上  \n7.\tgit push                         # push所有分支  \n8.\tgit push origin master           # 将本地主分支推到远程主分支  \n9.\tgit push -u origin master        # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)  \n10.\tgit push origin <local_branch>   # 创建远程分支， origin是远程仓库名  \n11.\tgit push origin <local_branch>:<remote_branch>  # 创建远程分支  \n12.\tgit push origin -d :<remote_branch> #删除远程分支  \n13. git branch -D <branch> 删除本地分支\n")])])]),e("h3",{attrs:{id:"基本的分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本的分支管理"}},[t._v("#")]),t._v(" 基本的分支管理")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\t#创建一个分支  \n2.\tgit branch dev  \n3.\t#切换工作目录到dev  \n4.\tgit chekcout dev  \n5.\t#将上面的命令合在一起，创建dev分支并切换到dev  \n6.\tgit chekcout –b dev  \n7.\t#合并dev分支，当前工作目录为master  \n8.\tgit merge dev  \n9.\t#合并完成后，没有出现冲突，删除dev分支  \n10.\tgit branch –d dev  \n11.\t#拉去远程仓库的数据，语法为 git fetch [remote-name]  \n12.\tgit fetch  \n13.\t#fetch 会拉去最新的远程仓库数据，但不会自动到当前目录下，要自动合并  \n14.\tgit pull  \n15.\t#查看远程仓库的信息  \n16.\tgit remote show origin  \n17.\t#建立本地的dev分支追踪远程仓库的develop分支  \n18.\tgit checkout –b dev origin/develop  \n")])])]),e("h3",{attrs:{id:"git远程仓库管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git远程仓库管理"}},[t._v("#")]),t._v(" Git远程仓库管理")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit remote -v                    # 查看远程服务器地址和仓库名称  \n2.\tgit remote show origin           # 查看远程服务器仓库状态  \n3.\tgit remote add origin git@ github:robbin/robbin_site.git         # 添加远程仓库地址  \n4.\tgit remote set-url origin git@ github.com:robbin/robbin_site.git # 设置远程仓库地址(用于修改远程仓库地址)  \n5.\tgit remote rm <repository>       # 删除远程仓库  \n")])])]),e("h3",{attrs:{id:"创建远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建远程仓库"}},[t._v("#")]),t._v(" 创建远程仓库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit clone --bare robbin_site robbin_site.git  # 用带版本的项目创建纯版本仓库  \n2.\tscp -r my_project.git git@ git.csdn.net:~      # 将纯仓库上传到服务器上  \n3.\tmkdir robbin_site.git && cd robbin_site.git && git --bare init # 在服务器创建纯仓库  \n4.\tgit remote add origin git@ github.com:robbin/robbin_site.git    # 设置远程仓库地址  \n5.\tgit push -u origin master                                      # 客户端首次提交  \n6.\tgit push -u origin develop  # 首次将本地develop分支提交到远程develop分支，并且track  \n7.\tgit remote set-head origin master   # 设置远程仓库的HEAD指向master分支  \n")])])]),e("h3",{attrs:{id:"也可以命令设置跟踪远程库和本地库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#也可以命令设置跟踪远程库和本地库"}},[t._v("#")]),t._v(" 也可以命令设置跟踪远程库和本地库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tgit branch --set-upstream master origin/master  \n2.\tgit branch --set-upstream develop origin/develop  \n")])])]),e("h3",{attrs:{id:"创建文件操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建文件操作"}},[t._v("#")]),t._v(" 创建文件操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. touch aaa.txt 创建文件 \n2. cat index.txt 查看文件的内容\n3. ls -al 显示隐藏的\n")])])]),e("h3",{attrs:{id:"第一次代码提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次代码提交"}},[t._v("#")]),t._v(" 第一次代码提交")]),t._v(" "),e("ul",[e("li",[t._v("本地要建一个README.md .gitignore")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("echo '.idea' >> .gitignore\necho 'welcome' >> README.md\n")])])]),e("ul",[e("li",[t._v("初始化仓库")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git init\n")])])]),e("ul",[e("li",[t._v("提交并关联仓库")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git add .\ngit commit -m ''\ngit remote add origin 地址\ngit remote -v 查看所有关联\ngit remote rm origin 删除\n")])])]),e("ul",[e("li",[t._v("推送到远程仓库上")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push origin master(可以推送其他分支) -u(upstream 下次提交不必再输入origin master)\n")])])]),e("ul",[e("li",[t._v("合并两个不同仓库的代码")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull origin master --allow-unrelated-histories\n")])])]),e("h3",{attrs:{id:"ssh-key-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-key-配置"}},[t._v("#")]),t._v(" ssh key 配置")]),t._v(" "),e("p",[t._v("一、生成SSH Key\n1 、检查.ssh文件夹是否存在")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ls -al ~/.ssh\n")])])]),e("p",[t._v("2、如果不存在新建.ssh文件平")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ mkdir ~/.ssh\n")])])]),e("p",[t._v("3、生成KEY在命令行中输入，your_email@example.com换成自己人Email。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ cd ~/.ssh\n\n$ ssh-keygen -t rsa -C "your_email@example.com"\n')])])]),e("p",[t._v("系统提示输入文件保存位置等信息，连续按三次回车即可，生成的SSH key文件的保存路径会在终端中给出：id_rsa          id_rsa.pub")]),t._v(" "),e("p",[t._v("4、查看公钥")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cat id_rsa.pub\n")])])]),e("p",[t._v("5、将公钥复制过程剪贴板")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ pbcopy <id_rsa.pub \n")])])]),e("p",[t._v("非学，无以致疑；非问，无以广识")])])}),[],!1,null,null,null);a.default=s.exports}}]);