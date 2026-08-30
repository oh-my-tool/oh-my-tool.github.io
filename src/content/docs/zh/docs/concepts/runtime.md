---
title: Runtime
description: 了解 Oh My Tool 运行时的各个层次。
sidebar:
  order: 1
---

运行时将 Agent 需要了解的内容，与 Provider 负责执行的内容分开：

```text
Agent
  ↓ Skill / CLI
ohmytool
  ↓
ToolRuntime
  ↓
ToolProvider
  ├─ NativeExtensionProvider
  └─ McpProvider
  ↓
Independent Extensions
```

### 静态发现

`search` 和 `describe` 只读取静态 Manifest。这样发现过程很快，也不需要让每个连接或 Provider 都初始化。

### 动态执行

`run` 会解析目标 Provider、校验输入 Schema、执行策略预检，然后才加载可执行 Handler。核心运行时不拥有具体的数据库或缓存能力。

### 状态与密钥

Linux/macOS 默认将状态保存在 `~/.ohmytool`，Windows 默认保存在 `%USERPROFILE%\\.ohmytool`。设置 `OHMYTOOL_HOME` 可以覆盖默认位置。使用 `ohmytool secret set <name>` 保存凭据，普通输出不会暴露密钥内容。
