# 简述

核心知识篇-简述

1. 课程介绍（无记录）
2. [用大白话告诉你什么是 Elasticsearch](./02-whatis/index.md)
3. [Elasticsearch 的功能、适用场景以及特点介绍](./03-introduce/index.md)
4. [手工画图剖析 Elasticsearch 核心概念：NRT、索引、分片、副本等](./04-core-concept.md)
5. [在 windows 上安装和启动 Elasticseach](./05-windows-install.md)
6. [快速入门案例实战之电商网站商品管理：集群健康检查，文档CRUD](./quick-start-texample/06-crud.md)
7. [快速入门案例实战之电商网站商品管理：多种搜索方式](./quick-start-texample/07-search.md)
8. [快速入门案例实战之电商网站商品管理：嵌套聚合，下钻分析，聚合分析](./quick-start-texample/08-aggregation-analysis.md)
9. [手工画图剖析 Elasticsearch 的基础分布式架构](./09-basic-distributed-architecture.md)
10. [shard & replica 机制再次梳理以及单 node 环境中创建 index 图解](./10-one-node-shard-and-replica.md)
11. [图解 2个 node 环境下 replica shard 是如何分配的](./11-two-node-shard-and-replica.md)
12. [图解横向扩容过程，如何超出扩容极限，以及如何提升容错性](./12-lateral-capacity.md)
13. [图解 Elasticsearch 容错机制：master 选举，replica 容错，数据恢复](./13-fault-tolerant.md)
14. [初步解析document的核心元数据以及图解剖析index创建反例](./14-document-basic-metadata.md)
15. [document id 的手动指定与自动生成两种方式解析](./distributed-document/15-documentid.md)
16. [document 的 `_source` 元数据以及定制返回结果解析](./distributed-document/16-_source.md)
17. [document 的全量替换、强制创建以及图解 lazy delete 机制](./distributed-document/17-crud.md)
18. [深度图解剖析Elasticsearch并发冲突问题](./distributed-document/18-concurrent-update.md#深度图解剖析-elasticsearch-并发冲突问题)
19. [深度图解剖析悲观锁与乐观锁两种并发控制方案](./distributed-document/18-concurrent-update.md#深度图解剖析悲观锁与乐观锁两种并发控制方案)
20. [图解 Elasticsearch 内部基于 `_version` 如何进行乐观锁并发控制](./distributed-document/18-concurrent-update.md#图解-elasticsearch-内部基于-version-如何进行乐观锁并发控制)
21. [上机动手实战演练基于`_version`进行乐观锁并发控制](./distributed-document/18-concurrent-update.md#实战-version-进行乐观锁并发控制)
22. [上机动手实战演练基于 external version 进行乐观锁并发控制](./distributed-document/18-concurrent-update.md#实战-external-version-进行乐观锁并发控)
23. [图解 partial update 实现原理以及动手实战演练](./distributed-document/23-partial-update.md#图解实现原理与实战演练)
24. [上机动手实战演练基于 groovy 脚本进行 partial update](./distributed-document/23-partial-update.md#groovy-语法实现)
25. [图解 partial update 乐观锁并发控制原理以及相关操作讲解](./distributed-document/23-partial-update.md#图解乐观锁并发控制原理与操作)