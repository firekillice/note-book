(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1319:function(s,e,n){"use strict";n.r(e);var a=n(15),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_024-在项目中以经典的-3-节点方式部署哨兵集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_024-在项目中以经典的-3-节点方式部署哨兵集群"}},[s._v("#")]),s._v(" 024. 在项目中以经典的 3 节点方式部署哨兵集群")]),s._v(" "),n("p",[s._v("动手实操，练习如何操作部署哨兵集群，如何基于哨兵进行故障转移，还有一些企业级的配置方案")]),s._v(" "),n("p",[s._v("在这之前我一直以为 redis sentinel 是另外的一个项目，其实不是，还是 同一个 redis ，不过是通过 redis-sentinel + sentinel 配置文件 启动的另一个程序")]),s._v(" "),n("h2",{attrs:{id:"哨兵的配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#哨兵的配置文件"}},[s._v("#")]),s._v(" 哨兵的配置文件")]),s._v(" "),n("p",[s._v("/usr/local/redis-3.2.8/sentinel.conf 是一个模板配置文件，主要的配置项目如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sentinel monitor mymaster 127.0.0.1 6379 2\nsentinel down-after-milliseconds mymaster 60000\nsentinel failover-timeout mymaster 180000\nsentinel parallel-syncs mymaster 1\n\nsentinel monitor resque 192.168.1.3 6380 4\nsentinel down-after-milliseconds resque 10000\nsentinel failover-timeout resque 180000\nsentinel parallel-syncs resque 5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("可以看到如上的配置前缀一样，后面开始不一样了，这个是为什么呢？")]),s._v(" "),n("p",[s._v("是因为一套哨兵集群可以为多个 maser-slaves 的 redis 集群服务。")]),s._v(" "),n("p",[s._v("mymaster、resque 是每个 redis 主从集群分配一个逻辑的名称")]),s._v(" "),n("p",[s._v("上面的配置是一个最小的哨兵配置，就监控了两个 master node，如果发生了 master-slave 故障转移，或者新的哨兵进程加入哨兵集群，那么哨兵会自动更新自己的配置文件")]),s._v(" "),n("blockquote",[n("p",[s._v("sentinel monitor mymaster 127.0.0.1 6379")])]),s._v(" "),n("p",[s._v("它的含义：sentinel monitor master-group-name hostname port quorum")]),s._v(" "),n("p",[s._v("配置了对哪一个 master 进行监控，并配置了 quorum 参数")]),s._v(" "),n("p",[s._v("quorum 的解释如下：")]),s._v(" "),n("ul",[n("li",[s._v("至少多少个哨兵要一致同意，master 进程挂掉了，或者 slave 进程挂掉了，或者要启动一个故障转移操作")]),s._v(" "),n("li",[s._v("quorum 是用来识别故障的，真正执行故障转移的时候，还是要在哨兵集群执行选举，选举一个哨兵进程出来执行故障转移操作")])]),s._v(" "),n("p",[s._v("假设有 5 个哨兵，quorum=2")]),s._v(" "),n("p",[s._v("那么如果 5 个哨兵中的 2 个都认为 master 挂掉了; 2 个哨兵中的一个就会做一个选举，选举一个哨兵出来，执行故障转移；如果 5 个哨兵中有 3 个哨兵都是运行的，那么故障转移就会被允许执行")]),s._v(" "),n("blockquote",[n("p",[s._v("sentinel down-after-milliseconds mymaster 60000")])]),s._v(" "),n("p",[s._v("超过多少毫秒跟一个 redis 实例断了连接，哨兵就可能认为这个 redis 实例挂了")]),s._v(" "),n("blockquote",[n("p",[s._v("sentinel parallel-syncs mymaster 1")])]),s._v(" "),n("p",[s._v("新的 master 切换之后，同时有多少个 slave 被切换到去连接新 master，重新做同步，数字越低，花费的时间越多")]),s._v(" "),n("p",[s._v("哨兵将 slave 升级为 master 后，一次操作能将几个 slave 切换到新的 master 上去。")]),s._v(" "),n("p",[s._v("假设你的 redis 是 1 个 master，4 个 slave：")]),s._v(" "),n("p",[s._v("master 宕机了，4 个 slave 中有 1 个切换成了 master，剩下 3 个 slave 就要挂到新的 master 上面去")]),s._v(" "),n("p",[s._v("这个时候，如果 parallel-syncs=1，那么 3 个 slave，一个一个地挂接到新的 master 上面去，1 个挂接完，而且从新的 master sync 完数据之后，再挂接下一个")]),s._v(" "),n("p",[s._v("如果 parallel-syncs 是 3，那么一次性就会把所有 slave 挂接到新的 master 上去")]),s._v(" "),n("blockquote",[n("p",[s._v("sentinel failover-timeout mymaster 180000")])]),s._v(" "),n("p",[s._v("执行故障转移的 timeout 超时时长")]),s._v(" "),n("h2",{attrs:{id:"在-eshop-cache03-上再部署一个-redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-eshop-cache03-上再部署一个-redis"}},[s._v("#")]),s._v(" 在 eshop-cache03 上再部署一个 redis")]),s._v(" "),n("p",[s._v("可参考之 "),n("RouterLink",{attrs:{to:"/cache-pdp/redis/018.html"}},[s._v("018. 在项目中部署 redis 的读写分离架构（包含节点间认证口令）")]),s._v(" 中的部署方式。")],1),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("在这次安装 eshop-cache03 机器上的 redis slave node，会把口令认证给去掉，我们自己学习就不要加口令了，写起命令来也比较麻烦")])]),s._v(" "),n("h2",{attrs:{id:"sentinel-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-配置"}},[s._v("#")]),s._v(" sentinel 配置")]),s._v(" "),n("p",[s._v("使用 /usr/local/redis-3.2.8/sentinel.conf 作为目标，在 windows 上配置好三个机器的配置，再统一上传")]),s._v(" "),n("p",[s._v("这里记录下主要的配置，源文件说明太多了，这里不贴")]),s._v(" "),n("p",[s._v("以下文件除了 bind 的 ip 不一致外，其他的都是相同的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir /etc/sentinal\nmkdir -p /var/sentinal/5000\n\n/etc/sentinel/5000.conf\n\n------------------- eshop-cache01\nport 5000\nbind eshop-cache01\ndir /var/sentinal/5000\nsentinel monitor mymaster eshop-cache01 6379 2\nsentinel down-after-milliseconds mymaster 30000\nsentinel failover-timeout mymaster 60000\nsentinel parallel-syncs mymaster 1\n\n------------------- eshop-cache02\nport 5000\nbind eshop-cache02\ndir /var/sentinal/5000\nsentinel monitor mymaster eshop-cache01 6379 2\nsentinel down-after-milliseconds mymaster 30000\nsentinel failover-timeout mymaster 60000\nsentinel parallel-syncs mymaster 1\n\n------------------- eshop-cache03\nport 5000\nbind eshop-cache03\ndir /var/sentinal/5000\nsentinel monitor mymaster eshop-cache01 6379 2\nsentinel down-after-milliseconds mymaster 30000\nsentinel failover-timeout mymaster 60000\nsentinel parallel-syncs mymaster 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h2",{attrs:{id:"同步-linux-集群时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同步-linux-集群时间"}},[s._v("#")]),s._v(" 同步 linux 集群时间")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install ntpdate\n\nntpdate -u ntp.api.bz\n\nntpdate ntp1.aliyun.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"启动哨兵进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动哨兵进程"}},[s._v("#")]),s._v(" 启动哨兵进程")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("redis-sentinel /etc/sentinal/5000.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这种启动方式是通过前台启动的，所以可以能看到日志，一台一台启动就好")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("------------------- eshop-cache01\n1581:X 24 Mar 00:26:46.650 # Sentinel ID is 552d04d3c53079053d30942e339b1270615c1139\n1581:X 24 Mar 00:26:46.650 # +monitor master mymaster 192.168.99.170 6379 quorum 2\n1581:X 24 Mar 00:27:16.689 # +sdown slave 192.168.99.171:6379 192.168.99.171 6379 @ mymaster 192.168.99.170 6379\n\n------------------- eshop-cache02\n24665:X 24 Mar 00:25:10.597 # Sentinel ID is df47be63833763baccf4e42bbb94b6cf3bae7970\n24665:X 24 Mar 00:25:10.597 # +monitor master mymaster 192.168.99.170 6379 quorum 2\n24665:X 24 Mar 00:25:40.637 # +sdown master mymaster 192.168.99.170 6379\n\n------------------- eshop-cache03\n24426:X 24 Mar 00:25:18.997 # Sentinel ID is 86a7fdb94cfa1a138e002d876bbf3a7466fe7570\n24426:X 24 Mar 00:25:18.997 # +monitor master mymaster 192.168.99.170 6379 quorum 2\n24426:X 24 Mar 00:25:49.069 # +sdown master mymaster 192.168.99.170 6379\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("哨兵之间，互相会自动进行发现，用的就是之前说的 pub/sub，消息发布和订阅 channel 消息系统和机制")]),s._v(" "),n("p",[s._v("我这里启动不知道为什么不像视频中一样，只有 eshop-cache01 有打印日志；")]),s._v(" "),n("p",[n("strong",[s._v("找到问题了")]),s._v("： /etc/sentinal/5000.conf 中 bind 127.0.0.1 eshop-cache02 这样写上 127.0.0.1 不能进行通信")]),s._v(" "),n("p",[s._v("正常的日志如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1052:X 24 Mar 00:44:22.609 # Sentinel ID is 507b3bc6e379011b990bda44b73221b8f7b305c1\n1052:X 24 Mar 00:44:22.609 # +monitor master mymaster 192.168.99.170 6379 quorum 2\n1052:X 24 Mar 00:44:33.454 * +sentinel sentinel a1cd62295346683bcd8f8b388ac64e83897a13dd 192.168.99.172 5000 @ mymaster 192.168.99.170 6379\n1052:X 24 Mar 00:45:27.155 * +sentinel sentinel d7a9812a3f905d07df46986f1b21388a16df39b4 192.168.99.171 5000 @ mymaster 192.168.99.170 6379\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"检查哨兵状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查哨兵状态"}},[s._v("#")]),s._v(" 检查哨兵状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 连接指定哨兵\nredis-cli -h eshop-cache01 -p 5000\n# 查看监控的 redis 集群配置\nsentinel master mymaster\n# 查看集群下的 slave node 信息\nsentinel slaves mymaster\n# 查看监控 mymaster 集群的所有哨兵\nsentinel sentinels mymaster\n\n# 查看 mymaster 集群的 master 信息\nsentinel get-master-addr-by-name mymaster\n\n# 如下的 master 是 170.其他命令数据都很多，只有这个只有2行信息\neshop-cache03:5000> sentinel get-master-addr-by-name mymaster\n1) "192.168.99.170"\n2) "6379"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);