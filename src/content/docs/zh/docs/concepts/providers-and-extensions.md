---
title: Provider 与扩展
description: 了解原生扩展和 MCP Provider 如何共享同一个工具契约。
sidebar:
  order: 2
---

Provider 将运行时的通用执行契约转换为具体的能力来源。

## 原生扩展

原生扩展位于独立仓库中，基于 SDK 契约发布 Manifest 和 Handler：

```text
ToolManifest → ExtensionManifest → ToolHandler
```

它适合本地优先的能力，强调快速启动、可检查和直接访问。

## MCP Provider

MCP Provider 连接已启用的 MCP Server，并将其中的工具以 `github.create_issue` 这样的命名 ID 暴露出来。MCP 的发现发生在 Provider 初始化时；原生扩展的 Manifest 发现过程仍保持静态和本地化。

## Connections

核心运行时只负责通用连接机制，具体字段由每个扩展仓库定义：

```toml
[extensions.<extension-id>.connections.<name>]
environment = "test"

[extensions.<extension-id>.connections.<name>.settings]
host = "127.0.0.1"
port = 1234

[extensions.<extension-id>.connections.<name>.secrets]
password = "provider:name"
```

具体 Provider 请查看[官方扩展](/zh/docs/extensions/official/)。
