(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1331:function(t,r,o){"use strict";o.r(r);var s=o(15),v=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_063-大白话讲集群架构与核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_063-大白话讲集群架构与核心概念"}},[t._v("#")]),t._v(" 063. 大白话讲集群架构与核心概念")]),t._v(" "),s("h2",{attrs:{id:"storm-的集群架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storm-的集群架构"}},[t._v("#")]),t._v(" Storm 的集群架构")]),t._v(" "),s("p",[t._v("Nimbus、Supervisor、ZooKeeper、Worker、Executor、Task")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/markdown-img-paste-20190515221726781.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("Nimbus：资源调度")]),t._v(" "),s("li",[t._v("Supervisor：相当于一台机器上的代理管家")]),t._v(" "),s("li",[t._v("ZooKeeper：用于存放 Nimbus 和 Supervisor 的调度元数据信息")]),t._v(" "),s("li",[t._v("Worker：根据配置可启动多个 worker 进程")]),t._v(" "),s("li",[t._v("Executor：根据配置可启动多个线程")]),t._v(" "),s("li",[t._v("Task：就是业务代码，不是线程，可能就是 stom 中你需要实现的业务代码")])]),t._v(" "),s("p",[t._v("整体架构流程如图：一个事实计算作业启动后，Nimbus 通知 Supervisor 去启动 n 个 Worker，Worker 又启动 n 个 Executor，Executor 执行具体的 业务代码")]),t._v(" "),s("h2",{attrs:{id:"storm-的核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storm-的核心概念"}},[t._v("#")]),t._v(" Storm 的核心概念")]),t._v(" "),s("p",[t._v("Topology、Spout、Bolt、Tuple、Stream")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Topology（拓扑）：虚的抽象的概念")])]),t._v(" "),s("li",[s("p",[t._v("Spout：数据源代码组件")]),t._v(" "),s("p",[t._v("可以理解为：用 java 实现一个 Spout 接口，在该代码中尝试去数据源获取数据，如 mysql、kafka")])]),t._v(" "),s("li",[s("p",[t._v("Bolt：业务处理代码组件")]),t._v(" "),s("p",[t._v("可以理解为：spout 会将数据传送给 bolt，各种 bolt 还可以串联成一个计算链条，同样是实现一个 bolt 接口")]),t._v(" "),s("p",[t._v("一堆 spout + bolt，就会组成一个 topology（拓扑），也可以叫做一个实时计算作业；")]),t._v(" "),s("p",[t._v("一个拓扑涵盖数据源获取/生产 + 数据处理的所有的代码逻辑")])]),t._v(" "),s("li",[s("p",[t._v("Tuple：一条数据")]),t._v(" "),s("p",[t._v("每条数据都会被封装在 tuple 中，在多个 spout 和 bolt 之间传递")])]),t._v(" "),s("li",[s("p",[t._v("Stream：一个流")]),t._v(" "),s("p",[t._v("虚的抽象的概念，源源不断过来的 tuple，就组成了一条数据流")])])]),t._v(" "),s("p",[s("img",{attrs:{src:o(428),alt:""}})]),t._v(" "),s("p",[t._v("了解了核心的基本概念之后，上图清晰的示意了他们是怎么配合工作的，\n业务代码层面的概念通过配置，被调度到具体的机器上的集群概念中去执行")])])}),[],!1,null,null,null);r.default=v.exports},428:function(t,r,o){t.exports=o.p+"assets/img/markdown-img-paste-20190515224400692.13729a02.png"}}]);