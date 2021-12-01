(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{538:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"pm2实践"}},[t._v("pm2实践")]),t._v(" "),a("h3",{attrs:{id:"简介"}},[t._v("简介")]),t._v(" "),a("p",[t._v("PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。\n下面就对PM2进行入门性的介绍，基本涵盖了PM2的常用的功能和配置。")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),a("p",[t._v("全局安装，简直不能更简单。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g pm2\n")])])]),a("h3",{attrs:{id:"目录介绍"}},[t._v("目录介绍")]),t._v(" "),a("p",[t._v("pm2安装好后，会自动创建下面目录。看文件名基本就知道干嘛的了，就不翻译了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   $HOME/.pm2 will contain all PM2 related files\n   $HOME/.pm2/logs will contain all applications logs\n   $HOME/.pm2/pids will contain all applications pids\n   $HOME/.pm2/pm2.log PM2 logs\n   $HOME/.pm2/pm2.pid PM2 pid\n   $HOME/.pm2/rpc.sock Socket file for remote commands\n   $HOME/.pm2/pub.sock Socket file for publishable events\n   $HOME/.pm2/conf.js PM2 Configuration\n")])])]),a("h3",{attrs:{id:"入门教程"}},[t._v("入门教程")]),t._v(" "),a("p",[t._v("挑我们最爱的express应用来举例。一般我们都是通过npm start启动应用，其实就是调用node ./bin/www。那么，换成pm2就是\n注意，这里用了--watch参数，意味着当你的express应用代码发生变化时，pm2会帮你重启服务，多贴心。\npm2 start ./bin/www --watch")]),t._v(" "),a("p",[t._v("入门太简单了，没什么好讲的。直接上官方文档：http://pm2.keymetrics.io/docs/usage/quick-start")]),t._v(" "),a("h3",{attrs:{id:"常用命令"}},[t._v("常用命令")]),t._v(" "),a("h2",{attrs:{id:"启动"}},[t._v("启动")]),t._v(" "),a("p",[t._v('参数说明：\n● --watch：监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。\n● -i --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。\n● --ignore-watch：排除监听的目录/文件，可以是特定的文件名，也可以是正则。比如--ignore-watch="test node_modules "some scripts""\n● -n --name：应用的名称。查看应用信息的时候可以用到。\n● -o --output '),a("code",[t._v("<path>")]),t._v("：标准输出日志文件的路径。\n● -e --error "),a("code",[t._v("<path>")]),t._v("：错误输出日志文件的路径。\n● --interpreter "),a("code",[t._v("<interpreter>")]),t._v("：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写应用。\n完整命令行参数列表：地址")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 start app.js --watch -i 2\n")])])]),a("h2",{attrs:{id:"重启"}},[t._v("重启")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 restart app.js\n")])])]),a("h2",{attrs:{id:"停止"}},[t._v("停止")]),t._v(" "),a("p",[t._v("停止特定的应用。可以先通过pm2 list获取应用的名字（--name指定的）或者进程id。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 stop app_name|app_id\n")])])]),a("p",[t._v("如果要停止所有应用，可以")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 stop all\n")])])]),a("h2",{attrs:{id:"删除"}},[t._v("删除")]),t._v(" "),a("p",[t._v("类似pm2 stop，如下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 stop app_name|app_id\npm2 stop all\n")])])]),a("h2",{attrs:{id:"查看进程状态"}},[t._v("查看进程状态")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 list\n")])])]),a("h2",{attrs:{id:"查看某个进程的信息"}},[t._v("查看某个进程的信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@iZ94wb7tioqZ pids]# pm2 describe 0\nDescribing process with id 0 - name oc-server\n┌───────────────────┬──────────────────────────────────────────────────────────────┐\n│ status            │ online                                                       │\n│ name              │ oc-server                                                    │\n│ id                │ 0                                                            │\n│ path              │ /data/file/qiquan/over_the_counter/server/bin/www            │\n│ args              │                                                              │\n│ exec cwd          │ /data/file/qiquan/over_the_counter/server                    │\n│ error log path    │ /data/file/qiquan/over_the_counter/server/logs/app-err-0.log │\n│ out log path      │ /data/file/qiquan/over_the_counter/server/logs/app-out-0.log │\n│ pid path          │ /root/.pm2/pids/oc-server-0.pid                              │\n│ mode              │ fork_mode                                                    │\n│ node v8 arguments │                                                              │\n│ watch & reload    │                                                             │\n│ interpreter       │ node                                                         │\n│ restarts          │ 293                                                          │\n│ unstable restarts │ 0                                                            │\n│ uptime            │ 87m                                                          │\n│ created at        │ 2016-08-26T08:13:43.705Z                                     │\n└───────────────────┴──────────────────────────────────────────────────────────────┘\n")])])]),a("h4",{attrs:{id:"配置文件"}},[t._v("配置文件")]),t._v(" "),a("h3",{attrs:{id:"简单说明"}},[t._v("简单说明")]),t._v(" "),a("p",[t._v("● 配置文件里的设置项，跟命令行参数基本是一一对应的。\n● 可以选择yaml或者json文件，就看个人洗好了。\n● json格式的配置文件，pm2当作普通的"),a("code",[t._v("js")]),t._v("文件来处理，所以可以在里面添加注释或者编写代码，这对于动态调整配置很有好处。\n● 如果启动的时候指定了配置文件，那么命令行参数会被忽略。（个别参数除外，比如--env）")]),t._v(" "),a("h3",{attrs:{id:"例子"}},[t._v("例子")]),t._v(" "),a("p",[t._v("举个简单例子，完整配置说明请参考官方文档。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "name"        : "fis-receiver",  // 应用名称\n  "script"      : "./bin/www",  // 实际启动脚本\n  "cwd"         : "./",  // 当前工作路径\n  "watch": [  // 监控变化的目录，一旦变化，自动重启\n    "bin",\n    "routers"\n  ],\n  "ignore_watch" : [  // 从监控目录中排除\n    "node_modules",\n    "logs",\n    "public"\n  ],\n  "watch_options": {\n    "followSymlinks": false\n  },\n  "error_file" : "./logs/app-err.log",  // 错误日志路径\n  "out_file"   : "./logs/app-out.log",  // 普通日志路径\n  "env": {\n      "NODE_ENV": "production"  // 环境参数，当前指定为生产环境\n  }\n}\n')])])]),a("h3",{attrs:{id:"自动重启"}},[t._v("自动重启")]),t._v(" "),a("p",[t._v("前面已经提到了，这里贴命令行，更多点击这里。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 start app.js --watch\n")])])]),a("p",[t._v("这里是监控整个项目的文件，如果只想监听指定文件和目录，建议通过配置文件的watch、ignore_watch字段来设置。")]),t._v(" "),a("h3",{attrs:{id:"环境切换"}},[t._v("环境切换")]),t._v(" "),a("p",[t._v("在实际项目开发中，我们的应用经常需要在多个环境下部署，比如开发环境、测试环境、生产环境等。在不同环境下，有时候配置项会有差异，比如链接的数据库地址不同等。\n对于这种场景，pm2也是可以很好支持的。首先通过在配置文件中通过env_xx来声明不同环境的配置，然后在启动应用时，通过--env参数指定运行的环境。")]),t._v(" "),a("h2",{attrs:{id:"环境配置声明"}},[t._v("环境配置声明")]),t._v(" "),a("p",[t._v("首先，在配置文件中，通过env选项声明多个环境配置。简单说明下：\n● env为默认的环境配置（生产环境），env_dev、env_test则分别是开发、测试环境。可以看到，不同环境下的NODE_ENV、REMOTE_ADDR字段的值是不同的。\n● 在应用中，可以通过process.env.REMOTE_ADDR等来读取配置中生命的变量。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' "env": {\n   "NODE_ENV": "production",\n   "REMOTE_ADDR": "http://www.example.com/"\n },\n "env_dev": {\n   "NODE_ENV": "development",\n   "REMOTE_ADDR": "http://wdev.example.com/"\n },\n "env_test": {\n   "NODE_ENV": "test",\n   "REMOTE_ADDR": "http://wtest.example.com/"\n }\n')])])]),a("h2",{attrs:{id:"启动指明环境"}},[t._v("启动指明环境")]),t._v(" "),a("p",[t._v("假设通过下面启动脚本（开发环境），那么，此时process.env.REMOTE_ADDR的值就是相应的 http://wdev.example.com/ ，可以自己试验下。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 start app.js --env dev\n")])])]),a("h3",{attrs:{id:"负载均衡"}},[t._v("负载均衡")]),t._v(" "),a("p",[t._v("命令如下，表示开启三个进程。如果-i 0，则会根据机器当前核数自动开启尽可能多的进程。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 start app.js -i 3 # 开启三个进程\npm2 start app.js -i max # 根据机器CPU核数，开启对应数目的进程\n")])])]),a("p",[t._v("参考文档：点击查看")]),t._v(" "),a("h3",{attrs:{id:"日志查看"}},[t._v("日志查看")]),t._v(" "),a("p",[t._v("除了可以打开日志文件查看日志外，还可以通过pm2 logs来查看实时日志。这点对于线上问题排查非常重要。\n比如某个node服务突然异常重启了，那么可以通过pm2提供的日志工具来查看实时日志，看是不是脚本出错之类导致的异常重启。\npm2 logs")]),t._v(" "),a("p",[t._v("指令tab补全\n运行pm2 --help，可以看到pm2支持的子命令还是蛮多的，这个时候，自动完成的功能就很重要了。\n运行如下命令。恭喜，已经能够通过tab自动补全了。细节可参考这里。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 completion install\nsource ~/.bash_profile\n")])])]),a("h3",{attrs:{id:"开机自动启动"}},[t._v("开机自动启动")]),t._v(" "),a("p",[t._v("可以通过pm2 startup来实现开机自启动。细节可参考。大致流程如下")]),t._v(" "),a("ol",[a("li",[t._v("通过pm2 save保存当前进程状态。")]),t._v(" "),a("li",[t._v("通过pm2 startup [platform]生成开机自启动的命令。（记得查看控制台输出）")]),t._v(" "),a("li",[t._v("将步骤2生成的命令，粘贴到控制台进行，搞定。\n传入node args\n直接上例子，分别是通过命令行和配置文件。\n命令行：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('pm2 start app.js --node-args="--harmony"\n')])])]),a("p",[t._v("配置文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "name" : "oc-server",\n  "script" : "app.js",\n  "node_args" : "--harmony"\n}\n')])])]),a("h2",{attrs:{id:"实例说明"}},[t._v("实例说明")]),t._v(" "),a("p",[t._v("假设是在centos下，那么运行如下命令，搞定。强烈建议运行完成之后，重启机器，看是否设置成功。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[root@iZ94wb7tioqZ option_analysis]# pm2 save\n[root@iZ94wb7tioqZ option_analysis]# pm2 startup centos\n[PM2] Generating system init script in /etc/init.d/pm2-init.sh\n[PM2] Making script booting at startup...\n[PM2] /var/lock/subsys/pm2-init.sh lockfile has been added\n[PM2] -centos- Using the command:\n      su -c "chmod +x /etc/init.d/pm2-init.sh; chkconfig --add pm2-init.sh"\n\n[PM2] Done.\n[root@iZ94wb7tioqZ option_analysis]# pm2 save\n[PM2] Dumping processes\n')])])]),a("h3",{attrs:{id:"远程部署"}},[t._v("远程部署")]),t._v(" "),a("p",[t._v("可参考官方文档，配置也不复杂，用到的时候再来填写这里的坑。TODO\n官方文档：http://pm2.keymetrics.io/docs/usage/deployment/#getting-started")]),t._v(" "),a("h3",{attrs:{id:"监控-monitor"}},[t._v("监控(monitor)")]),t._v(" "),a("p",[t._v("运行如下命令，查看当前通过pm2运行的进程的状态。\npm2 monit")]),t._v(" "),a("p",[t._v("看到类似输出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@oneday-dev0 server]# pm2 monit\n⌬ PM2 monitoring (To go further check out https://app.keymetrics.io)\n                                       [                              ] 0 %\n⌬ PM2 monitoring (To go further check o[|||||||||||||||               ] 196.285 MB\n\n ● fis-receiver                        [                              ] 0 %\n[1] [fork_mode]                        [|||||                         ] 65.773 MB\n\n ● www                                 [                              ] 0 %\n[2] [fork_mode]                        [|||||                         ] 74.426 MB\n\n ● oc-server                           [                              ] 0 %\n[3] [fork_mode]                        [||||                          ] 57.801 MB\n\n ● pm2-http-interface                  [                              ] stopped\n[4] [fork_mode]                        [                              ] 0 B\n\n ● start-production\n[5] [fork_mode]\n")])])]),a("h3",{attrs:{id:"内存使用超过上限自动重启"}},[t._v("内存使用超过上限自动重启")]),t._v(" "),a("p",[t._v("如果想要你的应用，在超过使用内存上限后自动重启，那么可以加上--max-memory-restart参数。（有对应的配置项）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pm2 start big-array.js --max-memory-restart 20M\n")])])]),a("h3",{attrs:{id:"更新pm2"}},[t._v("更新pm2")]),t._v(" "),a("p",[t._v("官方文档：http://pm2.keymetrics.io/docs/usage/update-pm2/#updating-pm2")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ pm2 save # 记得保存进程状态\n$ npm install pm2 -g\n$ pm2 update\n")])])]),a("h3",{attrs:{id:"pm2-nginx"}},[t._v("pm2 + nginx")]),t._v(" "),a("p",[t._v("无非就是在nginx上做个反向代理配置，直接贴配置。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('upstream my_nodejs_upstream {\n    server 127.0.0.1:3001;\n}\n\nserver {\n    listen 80;\n    server_name my_nodejs_server;\n    root /home/www/project_root;\n\n    location / {\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host $http_host;\n        proxy_set_header X-NginX-Proxy true;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_max_temp_file_size 0;\n        proxy_pass http://my_nodejs_upstream/;\n        proxy_redirect off;\n        proxy_read_timeout 240s;\n    }\n}\n')])])]),a("p",[t._v("官方文档：http://pm2.keymetrics.io/docs/tutorials/pm2-nginx-production-setup")]),t._v(" "),a("h3",{attrs:{id:"在线监控系统"}},[t._v("在线监控系统")]),t._v(" "),a("p",[t._v("收费服务，使用超级简单，可以方便的对进程的服务情况进行监控。可以试用下，地址在这里。")]),t._v(" "),a("h3",{attrs:{id:"pm2编程接口"}},[t._v("pm2编程接口")]),t._v(" "),a("p",[t._v("如果想把pm2的进程监控，跟其他自动化流程整合起来，pm2的编程接口就很有用了。细节可参考官方文档： http://pm2.keymetrics.io/docs/usage/pm2-api/")]),t._v(" "),a("h3",{attrs:{id:"模块扩展系统"}},[t._v("模块扩展系统")]),t._v(" "),a("p",[t._v("pm2支持第三方扩展，比如常用的log rotate等。可参考官方文档。")]),t._v(" "),a("h3",{attrs:{id:"pm2的文档已经写的很好了-学习成本很低-即使是没用过pm2的小伙伴-基本上照着getting-started的例子就可以把项目给跑起来-所以文中不少地方都是建议直接参看官方文档。"}},[t._v("pm2的文档已经写的很好了，学习成本很低，即使是没用过pm2的小伙伴，基本上照着getting started的例子就可以把项目给跑起来，所以文中不少地方都是建议直接参看官方文档。")])])}),[],!1,null,null,null);e.default=n.exports}}]);