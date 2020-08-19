(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1109:function(A,t,E){"use strict";E.r(t);var Q=E(15),g=Object(Q.a)({},(function(){var A=this,t=A.$createElement,Q=A._self._c||t;return Q("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[Q("h1",{attrs:{id:"_051-基于-分发层-应用层-双层-nginx-架构提升缓存命中率方案分析"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#_051-基于-分发层-应用层-双层-nginx-架构提升缓存命中率方案分析"}},[A._v("#")]),A._v(" 051. 基于“分发层 + 应用层”双层 nginx 架构提升缓存命中率方案分析")]),A._v(" "),Q("p",[A._v("缓存数据生产服务那一层已经搞定了，相当于三层缓存架构中的本地堆缓存 + redis 分布式缓存都搞定了")]),A._v(" "),Q("p",[A._v("就要来做三级缓存中的 nginx 那一层的缓存了")]),A._v(" "),Q("h2",{attrs:{id:"缓存命中率低"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#缓存命中率低"}},[A._v("#")]),A._v(" 缓存命中率低")]),A._v(" "),Q("p",[A._v("如果一般来说，你默认会部署多个 nginx，在里面都会放一些缓存，就默认情况下，此时缓存命中率是比较低的")]),A._v(" "),Q("p",[Q("img",{attrs:{src:E(349),alt:""}})]),A._v(" "),Q("p",[A._v("如上图，被均衡分发了，所以命中率很低。")]),A._v(" "),Q("h2",{attrs:{id:"如何提升缓存命中率？"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#如何提升缓存命中率？"}},[A._v("#")]),A._v(" 如何提升缓存命中率？")]),A._v(" "),Q("p",[A._v("方案：分发层+应用层，双层 nginx")]),A._v(" "),Q("p",[A._v("分发层 nginx，负责流量分发的逻辑和策略，这个里面它可以根据你自己定义的一些规则，\n比如根据 productId 去进行 hash，然后对后端的 nginx 数量取模，将某一个商品的访问的请求，\n就固定路由到一个 nginx 后端服务器上去，保证说只会从 redis 中获取一次缓存数据，\n后面全都是走 nginx 本地缓存了")]),A._v(" "),Q("p",[A._v("后端的 nginx 服务器，就称之为应用服务器; 最前端的 nginx 服务器，被称之为分发服务器")]),A._v(" "),Q("p",[Q("img",{attrs:{src:E(350),alt:""}})]),A._v(" "),Q("p",[A._v("看似很简单，其实很有用，在实际的生产环境中，可以大幅度提升你的 nginx 本地缓存这一层的命中率，\n大幅度减少 redis 后端的压力，提升性能")]),A._v(" "),Q("div",{staticClass:"custom-block tip"},[Q("p",{staticClass:"custom-block-title"},[A._v("疑问")]),A._v(" "),Q("p",[A._v("到现在我都有好多疑问，是基于自己使用 spring cloud 来看待这种路由到固定的机器上面去，\n其实这就相当于有状态了，在缓冲架构里面他的确能解决缓存命中问题，但是在灵活性上，\n增加服务，减少服务就有问题了。 这个疑问现在还不是特别的明确，后续再看吧")])])])}),[],!1,null,null,null);t.default=g.exports},349:function(A,t,E){A.exports=E.p+"assets/img/markdown-img-paste-20190407210110612.88a47fa6.png"},350:function(A,t){A.exports="data:image/png;base64,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"}}]);