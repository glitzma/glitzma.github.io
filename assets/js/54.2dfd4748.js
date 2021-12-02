(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{547:function(n,e,r){"use strict";r.r(e);var o=r(7),s=Object(o.a)({},(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h2",{attrs:{id:"nginx反向代理"}},[n._v("nginx反向代理")]),n._v(" "),r("p",[n._v("本文是在linux 下配置nodejs 在nginx下的反向代理")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("1.安装nodejs，之前就安装了。\n2.安装nginx ，我采用的直接源码安装\n3.进入 /usr/local/nginx/conf 目录，在该目录下创建include 文件下，我的配置文件就写在这个文件夹里面\n4.进入 /usr/local/nginx/conf/include 目录，创建 nginx.node.conf 文件，在里面输入如下代码：\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('upstream nodejs {\n    server 127.0.0.1:3000;\n    #server 127.0.0.1:3001;\n    keepalive 64;\n}\nserver {\n    listen 80;\n    server_name www.penguu.com penguu.com;\n    access_log /var/log/nginx/test.log;\n    location / {\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host  $http_host;\n        proxy_set_header X-Nginx-Proxy true;\n        proxy_set_header Connection "";\n        proxy_pass      http://nodejs;\n    }\n}\n')])])]),r("p",[n._v("5.进入/usr/local/nginx/conf ，打开nginx.conf, 在http 里面添加 include /usr/local/nginx/conf/include/*")]),n._v(" "),r("p",[n._v("备注：include是添加到http{}那个括号内的，与其他server并列\n6.重启nginx , 输入 /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n在浏览器输入penguu.com ok.")]),n._v(" "),r("p",[n._v("Nginx 其他命令\n以下包含了 Nginx 常用的几个命令：")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("/usr/local/webserver/nginx/sbin/nginx -s reload            # 重新载入配置文件/usr/local/webserver/nginx/sbin/nginx -s reopen            # 重启 Nginx/usr/local/webserver/nginx/sbin/nginx -s stop              # 停止 Nginx\n")])])]),r("hr"),n._v(" "),r("p",[n._v('遇到的问题：\n解决nginx: [error] open() ”/usr/local/nginx/logs/nginx.pid” failed错误\n2013-12-10 15:41 来源：风信网 作者：末信 人气指数: 次 我要评论\n风信网(ithov.com)原创文章：重新启动服务器，访问web服务发现无法浏览啦！登陆服务器之后进到nginx使用./nginx -s reload重新读取配置文件，发现报nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)错误，进到logs文件发现的确没有nginx.pid文件')]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('[root@localhost sbin]# ./nginx -s reload\nnginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)\n')])])]),r("p",[n._v("解决方法：")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("[root@localhost nginx]# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n")])])]),r("p",[n._v("使用nginx -c的参数指定nginx.conf文件的位置")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("[root@localhost nginx]# cd logs/\n[root@localhost logs]# ll\n总用量 12\n-rw-r--r-- 1 root root 1246 12月  9 18:10 access.log\n-rw-r--r-- 1 root root  516 12月 10 15:39 error.log\n-rw-r--r-- 1 root root    5 12月 10 15:38 nginx.pid\n")])])]),r("p",[n._v("看nginx.pid文件已经有了。")])])}),[],!1,null,null,null);e.default=s.exports}}]);