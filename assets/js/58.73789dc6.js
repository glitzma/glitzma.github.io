(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{508:function(t,n,e){"use strict";e.r(n);var s=e(25),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"docker-与nginx实现负载均衡"}},[t._v("docker 与nginx实现负载均衡")]),t._v(" "),e("p",[t._v("测试步骤：\n1.在服务器中搭建一个nginx服务器并启动，具体过程可参考 http://www.cnblogs.com/pangziyibudong/p/6183692.html，这里不在建立\n2.在docker中从源中拉一下nginx的官方镜像，docker pull nginx，留着备用\n3.在本地目录新建两个文件夹，我这里的新建在/mydata/test1，/mydata/test2/\n4.分别在两个test文件夹中新建index.html来标志，在第一个html中输出this is nginx1，在第二个html中输出this is nginx2，\n5.通过docker运行两个nginx服务器的容器，并分别将静态目录映射到我们刚刚创建的目录中")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@catchtouch test2]# docker run --name nginx-test -d -p 8080:80 -v /mydata/test1:/usr/share/nginx/html nginx #第一个，将8080端口映射到容器中的80端口\n[root@catchtouch test2]# docker run --name nginx-test1 -d -p 8081:80 -v /mydata/test2:/usr/share/nginx/html nginx #第二个，将容器中的8081端口映射到容器中的80端口\n")])])]),e("p",[t._v("6.修改宿主机中的nginx的配置文件\n在http{}中添加如下代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("upstream myweb { #myproject为自定义名字\n　　#ip_hash;  #开启则代表用ip地址的形式来分配，可解决sesson问题\n　　server 127.0.0.1:8080 weight=1; #weight越大，权重越高，被分配的几率越大\n　　server 127.0.0.1:8081 weight=1; #我全部在本机，因此用了本地的ip，只要相应换成对应的ip或者域名即可\n}\n")])])]),e("p",[t._v("7.进入conf.d目录，修改default.conf（conf.d中没有此文件可以新建，文件名随意，后缀必须是.conf）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" location / {　　\n      #如果服务器要获取客户端真实IP，可以用下三句设置主机头和客户端真实地址\n      #proxy_set_header Host $host;\n      #proxy_set_header X-Real-IP $remote_addr;\n      #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n      root   /usr/share/nginx/html;\n      index  index.html index.htm;\n    　proxy_pass http://myweb;  #myweb为之前在nginx.conf中upstream后定义的名字\n }\n")])])]),e("p",[t._v("8.保存后退出，重启服务器：systemctl restart nginx\n9.通过浏览器输入当前域名，并刷新页面，有时输出nginx1，有时输出nginx2，配置成功")]),t._v(" "),e("p",[t._v("至此，一个简答的负载均衡模型配置完成")])])}),[],!1,null,null,null);n.default=a.exports}}]);