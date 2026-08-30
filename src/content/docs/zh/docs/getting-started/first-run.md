---
title: 第一次执行
description: 使用 OMT 的标准流程发现、检查并执行一个工具。
sidebar:
  order: 2
---

OMT 将面向 Agent 的工作流保持清晰：

```text
search → describe → run
```

## 1. Search

先查找轻量工具摘要，不需要加载所有可执行 Handler：

```powershell
ohmytool search "query mysql data"
```

## 2. Describe

执行前查看完整描述和输入 Schema：

```powershell
ohmytool describe mysql.query
```

## 3. Run

使用命名参数执行选定工具：

```powershell
ohmytool run mysql.query connection=dev sql="select * from users"
```

如果下游程序需要机器可读结果，使用 `--json`：

```powershell
ohmytool run mysql.query connection=dev sql="select * from users" --json
```

在调用前，OMT 会校验 Schema 并执行策略预检。工具默认输出可读文本，
也可以使用 `--format=text|json|table|csv` 明确指定格式。
