---
title: 官方扩展
description: 探索 Oh My Tool 生态中的独立扩展。
sidebar:
  order: 1
---

官方扩展与核心运行时保持独立，同时共享同一套 SDK 契约。

## MySQL

[omt-mysql](https://github.com/oh-my-tool/omt-mysql) 提供查询和操作 MySQL 连接的原生工具。

```powershell
ohmytool extension install @oh-my-tool/mysql
```

## Redis

[omt-redis](https://github.com/oh-my-tool/omt-redis) 将 Redis 能力接入本地运行时。

```powershell
ohmytool extension install @oh-my-tool/redis
```

## Kafka

[omt-kafka](https://github.com/oh-my-tool/omt-kafka) 通过相同的扩展边界提供事件流处理能力。

具体的 Provider 配置和发布说明请查看各扩展自己的仓库。
