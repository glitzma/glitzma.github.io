(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{565:function(n,t,a){"use strict";a.r(t);var s=a(7),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"命令历史"}},[n._v("命令历史")]),n._v(" "),a("p",[n._v("以:和/开头的命令都有历史纪录，可以首先键入:或/然后按上下箭头来选择某个历史命令。")]),n._v(" "),a("h2",{attrs:{id:"启动vim"}},[n._v("启动vim")]),n._v(" "),a("p",[n._v("在命令行窗口中输入以下命令即可")]),n._v(" "),a("p",[n._v("vim 直接启动vim")]),n._v(" "),a("p",[n._v("vim filename 打开vim并创建名为filename的文件")]),n._v(" "),a("h2",{attrs:{id:"文件命令"}},[n._v("文件命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("打开单个文件\nvim file\n同时打开多个文件\nvim file1 file2 file3\n在vim窗口中打开一个新文件\n:open file\n在新窗口中打开文件\n:split file\n切换到下一个文件\n:bn\n切换到上一个文件\n:bp\n查看当前找开的文件列表，当前正在编辑的文件会用[]括起来。\n:args\n打开远程文件，比如ftp或者share folder\n:e ftp://192.168.10.76/abc.txt\n:e \\\\qadrive\\test\\1.txt\n")])])]),a("h2",{attrs:{id:"vim的模式"}},[n._v("vim的模式")]),n._v(" "),a("p",[n._v("正常模式(按Esc或Ctrl+[进入)左下角显示文件名或为空\n插入模式(按i键进入)左下角显示 --INSERT--\n可视模式(不知道如何进入)左下角显示 --VISUAL--")]),n._v(" "),a("h2",{attrs:{id:"导航命令"}},[n._v("导航命令")]),n._v(" "),a("p",[n._v("% 括号匹配 \t跳转至匹配对，可以是()、｛｝或者[]")]),n._v(" "),a("h2",{attrs:{id:"插入命令"}},[n._v("插入命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("i 在当前位置前插入\nI 在当前行首插入\na 在当前位置后插入\nA 在当前行尾插入\no 在当前行之后插入一行\nO 在当前行之前插入一行\n")])])]),a("h2",{attrs:{id:"查找命令"}},[n._v("查找命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/text 查找text,按n键查找下一个\n?text 查找text,反向查找，按n键查找下一个，按N键查找前一个\nvim中有一些特殊字符在查找时需要转义 .*[]^%/?~$\n:set ignorecase 忽略大小写的查找 （直接设置）\n:set noignorecase 不忽略大小写的查找（直接设置）\n查找很长的词，如果一个词很长，键入麻烦，可以将光标移动到该词上，按*或者按#键即可以对该单词进行搜索，相当于/搜索。而#命令相当于？搜索。\n:set hlsearch 高亮搜索结果，所有结果都高亮显示，而不是只显示一个匹配。\n:set nohlsearch 关闭高亮搜索显示\n:nohlsearch 关闭当前的高亮显示，如果再次搜索或者按下n或者N键，则会再次高亮。\n:set incsearch 逐步搜索模式，对当前键入的字符进行搜索而不必等待键入完成。\n:set wrapscan 重新所杀变，在搜索到文件头或者尾时，返回继续搜索，默认开启\n")])])]),a("h2",{attrs:{id:"替换命令"}},[n._v("替换命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ra 将当前字符规制为a，当前字符即光标所在字符\ns 将当前位置字符删除，并可以像i一样进行插入\n:s/old/new/ 用old替换new,替换当前行的第一个匹配\n:s/old/new/g 用old替换new,替换当前行的所有匹配\n:%s/old/new/ 用old替换new，替换所有行的第一个匹配\n:%s/old/new/g 用old替换new,替换整个文件的所有匹配\n:10,20 s/^/    /g 在第10到20行每行前加四个空格用于缩进\nddp 交换光标所在行和其下紧邻的一行\n")])])]),a("h2",{attrs:{id:"移动命令"}},[n._v("移动命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("h 左移一个字符\nl 右移一个字符，这个命令很少用，一般用w代替\nk 上移一个字符\nj 下移一个字符\n以上四个命令可以配合数字使用，比如20j就是向下移动20行，5h就是向左移动5个字符，在vim中，很多命令都可以配合数字使用，比如删除10个字符10x，在当前位置后插入3个！，3a! <Esc>,这里的ESC是必须的，否则命令不生效。\nw 向前移动一个单词（光标停在单词首部），如果已到行尾，则转到下一行行首。此命令快，可以代替l命令。\nb 向后移动一个单词 2b 向后移动2个单词\ne 同w,只不过是光标停在单词尾部\nge 同b,光标停在单词尾部\n^ 移动到本行第一个非空白字符上\n0 （数字0）移动到本行第一个字符上\n<HOME> 移动到本行第一个字符。同0键\n$ 移动到行尾 3$ 移动到下面3号的行尾\ngg 移动到文件头  = [[\nG (shift + g)移动到文件尾 = ]]\nf (find)命令也可以用于移动，fx将找到的光标后第一个为x的字符，3fd将找到第三个为d的字符\nF 同f，返向查找。\n跳到指定行，冒号+行号，回车，比如跳到240行就是 :240回车。另一个方法就是行号+G，比如230G跳到230行。\nCtrl + e 向下滚动一行\nCtrl + y 向上滚动一行\nCtrl + d 向下滚动半屏\nCtrl + u 向上滚动半屏\nCtrl + f 向下滚动一屏\nCtrl + b 向上滚动一屏\n")])])]),a("h2",{attrs:{id:"撤销和重做"}},[n._v("撤销和重做")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("u 撤销（Undo）\nU 撤销对整行的操作\nCtrl + r 重做(Redo),即撤销的撤销\n")])])]),a("h2",{attrs:{id:"删除命令"}},[n._v("删除命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("x 删除当前字符\n3x 删除当前光标开始向后三个字符\nX 删除当前字符的前一个字符。 X=dh\ndl 删除当前字符， dl=x\ndh 删除前一个字符\ndd删除当前行\ndj删除上一行\ndk删除下一行\n:10d 删除第10行 （文章中写删除当前行开始的10行。但试着是删除第10行）\nD 删除当前字符到行尾。 D=d$  (本行)\nd$ 删除当前字符之后的所有字符（本行）\nkdgg 删除当前行之前所有行（不包括当前行）\njdG (jd shift + g) 删除当前行之后所有行（不包括当前行）\n:1,10d 删除1-10行\n:11,$d 删除11号及以后所有的行\n：1,$d 删除所有行\nJ(shift + j) 删除两行之间的空行，实际上是合并两行\n")])])]),a("h2",{attrs:{id:"拷贝和粘贴"}},[n._v("拷贝和粘贴")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("yy 拷贝当前行\nnyy 拷贝当前行开始的n行，比如 2yy 拷贝当前行及其下一行\np 在当前光标后粘贴，如果之前使用了yy命令来复制一行，那么就在当前行的下一行粘贴。\nshipt + p 在当前行前粘贴\n:1,10 co 20 将1-10行插入到第20行之后。\n:1,$ co $ 将整个文件复制一份并添加到文件尾部\n正常模式下按v（逐字）或V（逐行）进入可视模式，然后用jklh命令移动即可选择某些行或字符，再按y即可复制\nddp 交换当前行和其下一行\nxp 交换当前字符和其后一个字符\n")])])]),a("h2",{attrs:{id:"剪切命令"}},[n._v("剪切命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("正常模式下按v（逐字）或V（逐行）进入可视档，然后用jklh命令移动即可选择某些行或字符，再按d即可剪切\nndd 剪切当前行之后的n行，利用p命令可以剪切的内容进行粘贴\n:1,10d 将1-10行剪切。利用p命令可将剪切后的内容进行粘贴。\n:1,10 m 20 将1-10移动到第20行之后。\n")])])]),a("h2",{attrs:{id:"退出命令"}},[n._v("退出命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(":wq 保存并退出\nZZ 保存并退出\n:q! 强制退出并忽略所有更改\n:e! 放弃所有修改，并打开原来文件\n")])])]),a("h2",{attrs:{id:"窗口命令"}},[n._v("窗口命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(":split 或 new 打开一个新窗口，光标停在顶层的窗口上\n:split file 或:new file 用新窗口打开文件\nsplit 找开的窗口都是横向的，使用vsplit 可以纵向打开窗口。\nCtrl+www 移动到下一个窗口\nCtrl+wj 移动到下方的窗口\nCtrl+wk 移动到上方的窗口\n关闭窗口\n:close 最后一个窗口不能使用此命令，可以防止意外退出vim.\n:q 如果最后一个被关闭的窗口，那么将退出vim.\nZZ 保存并退出\n关闭所有窗口，只保留当前窗口\n:only\n录制宏\n按q键加任意字母开始录制，再按q键结束录制（这意味着vim中的宏不可潜逃），使用的时候@加宏名，比如qa。。。q录制名为a的宏，@a使用这个宏。\n\n")])])]),a("h2",{attrs:{id:"执行shell命令"}},[n._v("执行shell命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(":!command\n:!ls 更出当前目录下文件\n:!perl -c script.pl 检查perl脚本语法，可以不用退出vim,非常方便。\n:!perl script.pl 执行perl脚本，可以不用退出vim,非常方便\n:suspend或Ctrl - Z 挂起vim ,回到shell,按fg可以返回vim\n")])])]),a("h2",{attrs:{id:"注释命令"}},[n._v("注释命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("perl程序中#开始的行为注释，所以要注释某些行，只需在行首加入#\n3,5 s/^/#/g 注释第3-5行\n3,5 s/^#//g 接触3-5行的注释\n1,$ s/^/#/g 注释整个文档\n:%s/^/#/g 注释整个文档，此法更快\n")])])]),a("h2",{attrs:{id:"帮助命令"}},[n._v("帮助命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(":help or F1 显示整个帮助\n:help xxx 显示xxx的帮助,比如:help i, :help CTRL-[ (即Ctrl+[的帮助)\n:help 'number' Vim 选项的帮助用单引号括起\n:help <Esc> 特殊键的帮助用<>扩起\n:help -t Vim 启动参数的帮助用-\n:help i_<Esc>插入模式下Esc的帮助，某个模式下的帮助用模式_主题的模式\n帮助文件中位于||之间的内容是超链接，可以用Ctrl+]进入链接，\nCtrl+o (Ctrl + t)返回\n")])])]),a("h2",{attrs:{id:"其它非编辑命令"}},[n._v("其它非编辑命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(".重复前一次命令\n:set ruler? 查看是否设置了ruler,在 .vimrc中使用set命令设置的选项都可以通过这个命令查看\n:scriptname 查看vim脚本文件的位置，比如.vimrc文件，语法文件及plugin等\n:set list 显示非打印字符，如tab,空格，行尾等。如果tab无法显示，请确定set lcs=tab:>-命令设置了.vimrc文件，并确保你的文件中的确有tab,如果开启了expendtab,那么tab将被扩展为空格。\n\nVIM 教程\n在Unix系统上\n$ vimtutor\n在Windows系统上\n:help tutor\n\n:syntax列出已经定义的语法项\n:syntax clear 清除已定义的语法规则\n:syntax case match 大小写敏感，int 和Int将视为不同的语法元素\n:syntax case ignore 大小写无关，int 和 Int将视为相同的语法元素，并使用同样的配色方案\n\n")])])]),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/softwaretesting/archive/2011/07/12/2104435.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("文章借鉴"),a("OutboundLink")],1),n._v(" http://www.cnblogs.com/softwaretesting/archive/2011/07/12/2104435.html")])])}),[],!1,null,null,null);t.default=e.exports}}]);