(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(e,t,n){"use strict";n.r(t);var a=n(2),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"uri和url是什么，以及他们的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri和url是什么，以及他们的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" URI和URL是什么，以及他们的区别")]),e._v(" "),n("p",[e._v("URL(Uniform Resource Locator),统一资源定位符。用于表示网络上服务器的资源所在位置，比如我们输入浏览器地址。\nURI(Uniform Resource Identifier),统一资源标识符。它唯一标识了资源。资源的位置能从地址上标识一个资源，，所以，URI一种表现形式是URL，URI还有其它表现形式。")]),e._v(" "),n("h2",{attrs:{id:"url的组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url的组成","aria-hidden":"true"}},[e._v("#")]),e._v(" URL的组成")]),e._v(" "),n("p",[e._v("一个URL的样例：https://www.mamingjuan.com/hellowwen.jpg 一个URL可以分为3部分：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1、协议：http 访问资源所使用的协议类型，常见的是HTTP、HTTPS、FTP等\n2、域名：资源所在的服务器地址，上述www.mamingjuan.cn 是一个域名，客户端会通过DNS（Domain Name Server,域名服务器）得到相应的IP地址\n3、路径：/helloween.jpg 是指资源在服务器的位置\n")])])]),n("p",[e._v("例子：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("http://www.xxxxxx.com/helloween.jpg\nhttps://www.xxxxxx.com/helloween.action?userId=123456\njdbc:mysql://localhost:3306/demo?user=root&password=123456&useUnicode=true&characterEncoding=UTF8\nftp://guest:123456@127.0.0.1\n")])])]),n("h2",{attrs:{id:"url的编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url的编码","aria-hidden":"true"}},[e._v("#")]),e._v(" URL的编码")]),e._v(" "),n("p",[e._v("URL是表示网络上各种资源的地址，它由各种各样的字符组成，可能包含许多特殊字符，甚至一些不可打印的字符。而用URL表示这些地址，基于要适应各种协议、应用程序的要求，URL必须是通用性强，而且还必须对人们是可读的。所以就有了将URL编码的方法，用一些安全的字符集编码表示URL，简单说，就是用一串安全的字符表示原先的可能包含的特殊字符、不可打印字符的地址")]),e._v(" "),n("h5",{attrs:{id:"url的编码方式是怎样的？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url的编码方式是怎样的？","aria-hidden":"true"}},[e._v("#")]),e._v(" URL的编码方式是怎样的？")]),e._v(" "),n("p",[e._v("答：用安全的字符表示不安全的字符。黑底后的安全字符为16禁止数，每两位前面加%，见以下示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('比如&，它在ASCII表用10进制38表示，16进制26表示，所以，URL编码后为%26\n比如"你好"，它在UTF-8编码用16进制表示是e4bda0e5a5bd，所以，URL编码后为%e4%bd%a0%e5%a5%bd。\n比如“你好”，它的GB2312编码用16进制表示是c4e3bac3，所以，URL编码后为%c4%e3%ba%c3。\n')])])]),n("p",[e._v("不知道某字符的UTF-8或GBK编码的16进制是多少？以下的java小程序可参考")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class UTF8Utils {\n\n    public static void main(String[] args) throws Exception {\n        String s = "你好";\n        System.out.println(s);\n        System.out.println(UTF8Utils.bytesToHex(s.getBytes("UTF-8"))); // e4bda0e5a5bd\n        System.out.println(UTF8Utils.bytesToHex(s.getBytes("GB2312"))); // c4e3bac3\n    }\n\n    /**\n     * 字节数组转十六进制\n     * @param bytes 字节数组\n     * @return 十六进制\n     */\n    public static String bytesToHex(byte[] bytes) {\n        if (bytes == null || bytes.length == 0) {\n            return null;\n        }\n\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < bytes.length; i++) {\n            int r = bytes[i] & 0xFF;\n\n            String hexResult = Integer.toHexString(r);\n            if (hexResult.length() < 2) {\n                sb.append(0); // 前补0\n            }\n            sb.append(hexResult);\n        }\n\n        return sb.toString();\n    }\n\n}\n')])])]),n("h2",{attrs:{id:"浏览器url编码所用的字符集不同的问题，及如何统一处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器url编码所用的字符集不同的问题，及如何统一处理","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器URL编码所用的字符集不同的问题，及如何统一处理")]),e._v(" "),n("p",[e._v("我们常用的浏览器IE、Chrome、Firefox访问URL时，不免使用到一些不安全字符，这是浏览器会如果处理？")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("有些会自动将不安全的字符通过UTF-8编码，有些会通过GB2312编码，甚至是其它编码。这取决于多方面原因，如浏览器的机制、浏览器的设置、操作系统的默认编码。\n\n很多原因导致URL编码结果不确定，对于我们的开发工作带来诸多不便，比如，我们在后面设置用UTF-8解码，有没有办法要求客户端用UTF-8编码URL呢？\n答：用javascriptr encodeURL()或者encodeURLComponent(),它们将URL用UTF-8方法编码，它们两者的区别在于：\nencodeURL()一般用于整体URL的编码，所以URL一些保留符不被编码。如（？、&）\nencodeURLComponent()一般对URL的某些组成部分编码，所以都会编码。\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);