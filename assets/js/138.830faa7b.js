(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1423:function(a,t,s){"use strict";s.r(t);var e=s(15),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"分布式搜索引擎内核解密之-query-phase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式搜索引擎内核解密之-query-phase"}},[a._v("#")]),a._v(" 分布式搜索引擎内核解密之 query phase")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#query-phase"}},[a._v("query phase")])]),e("li",[e("a",{attrs:{href:"#replica-shard-如何提升搜索吞吐量"}},[a._v("replica shard 如何提升搜索吞吐量")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"query-phase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-phase"}},[a._v("#")]),a._v(" query phase")]),a._v(" "),e("ol",[e("li",[a._v("搜索请求发送到某一个 coordinate node，构构建一个 priority queue，长度以 paging 操作 from 和 size 为准，默认为 10")]),a._v(" "),e("li",[a._v("coordinate node 将请求转发到所有 shard，每个 shard 本地搜索，并构建一个本地的 priority queue")]),a._v(" "),e("li",[a._v("各个 shard 将自己的 priority queue 返回给 coordinate node，并构建一个全局的 priority queue")])]),a._v(" "),e("p",[a._v("这个流程就叫 query phase （查询阶段）")]),a._v(" "),e("p",[e("img",{attrs:{src:s(568),alt:""}})]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("这个过程还是经典的做法，有一个节点来做聚合，所以就会有单节点聚合占用资源过多的情况发生")])]),a._v(" "),e("h2",{attrs:{id:"replica-shard-如何提升搜索吞吐量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replica-shard-如何提升搜索吞吐量"}},[a._v("#")]),a._v(" replica shard 如何提升搜索吞吐量")]),a._v(" "),e("p",[a._v("一次请求要打到所有 shard 的一个 replica/primary 上去，如果每个 shard 都有多个 replica，那么同时并发过来的搜索请求可以同时打到其他的 replica 上去")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("疑问")]),a._v(" "),e("p",[a._v("还是同步问题，这个还是不知道 es 是怎么保证在快速同步的，并且查询还没有问题的？不明白")])])])}),[],!1,null,null,null);t.default=r.exports},568:function(a,t,s){a.exports=s.p+"assets/img/markdown-img-paste-20190113215801435.b8fdeab6.png"}}]);