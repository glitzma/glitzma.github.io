(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{580:function(e,t,n){"use strict";n.r(t);var r=n(7),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-通过blob或者arraybuffer方式"}},[e._v("1. 通过blob或者arraybuffer方式")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    var instance = axios.creat({         ... //一些配置\n        responseType: 'blob', //返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json\n    })\n请求时的处理：\n　　getExcel().then(res => {\n    　　//这里res.data是返回的blob对象\n    　　var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型\n    　　var downloadElement = document.createElement('a');\n    　　var href = window.URL.createObjectURL(blob); //创建下载的链接\n    　　downloadElement.href = href;\n    　　downloadElement.download = 'xxx.xlsx'; //下载后文件名\n    　　document.body.appendChild(downloadElement);\n    　　downloadElement.click(); //点击下载\n    　　document.body.removeChild(downloadElement); //下载完成移除元素\n    　　window.URL.revokeObjectURL(href); //释放掉blob对象\n　})\n")])])]),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/smiler/p/8708815.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("具体实现方式借鉴自"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_2-通过自定义标签来解决"}},[e._v("2.通过自定义标签来解决")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("if (this.searchForm.filters.type && this.searchForm.filters.level && this.searchForm.filters.range_type && (this.searchForm.filters.range_val === 0 || this.searchForm.filters.range_val)) {\n  this.searchForm.export = 1\n  let queryString = ''\n  for (let p in this.searchForm) { // query 拼接\n    if (typeof this.searchForm[p] === 'object') {\n      queryString += '&' + p + '=' + JSON.stringify(this.searchForm[p])\n    } else {\n      queryString += '&' + p + '=' + this.searchForm[p]\n    }\n  }\n  let token = JSON.parse(localStorage.getItem('userInfo')).access_token\n  this.url += '?access_token=' + token\n  var downloadElement = document.createElement('a')\n  downloadElement.href = this.url + queryString\n  downloadElement.download = '师质检测下载文件.xlsx' // 下载后文件名\n  document.body.appendChild(downloadElement)\n  downloadElement.click() // 点击下载\n  document.body.removeChild(downloadElement) // 下载完成移除元素\n  // httpGet2(this.url, this.searchForm).then(res => {\n  //   if (res) {\n  //   } else {\n  //   }\n  // })\n} else {\n  this.$message.error('筛选项前四个为必填')\n}\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);