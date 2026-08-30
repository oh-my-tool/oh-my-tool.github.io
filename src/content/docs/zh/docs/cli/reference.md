---
title: CLI 参考
description: ohmytool 可执行文件的标准命令。
sidebar:
  order: 1
---

标准可执行文件是 `ohmytool`，标准执行动词是 `run`。

| 命令 | 作用 |
| --- | --- |
| `ohmytool search "<task>"` | 搜索轻量工具摘要 |
| `ohmytool describe <tool>` | 查看完整描述和 Schema |
| `ohmytool run <tool> [key=value ...]` | 校验并执行工具 |
| `ohmytool run <tool> --stdin` | 从 stdin 读取 JSON 输入 |
| `ohmytool run <tool> ... --json` | 输出机器可读 JSON |
| `ohmytool connection list` | 列出已配置连接 |
| `ohmytool connection check` | 检查提供 `<id>.ping` 的扩展 |
| `ohmytool config check` | 校验配置 |
| `ohmytool extension list` | 列出已安装扩展 |
| `ohmytool extension install <path\|package>` | 安装本地或 npm 扩展 |
| `ohmytool setup` | 安装内置 Agent Skill |
| `ohmytool integrate` | 管理 Agent Skill 集成 |
| `ohmytool secret set <name>` | 保存密钥但不暴露值 |
| `ohmytool secret list` | 只列出密钥名称 |
| `ohmytool mcp list` | 列出已配置 MCP Server |
| `ohmytool mcp auth <server>` | 授权 OAuth MCP Server |
| `ohmytool mcp logout <server>` | 删除 MCP Server 的 OAuth 凭据 |

使用 `--format=text|json|table|csv` 选择输出格式；`--json` 是 `--format=json` 的别名。
