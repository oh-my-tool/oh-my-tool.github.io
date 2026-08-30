---
title: CLI Reference
description: Canonical commands for the ohmytool executable.
sidebar:
  order: 1
---

The canonical executable is `ohmytool` and the canonical execution verb is
`run`.

| Command | Purpose |
| --- | --- |
| `ohmytool search "<task>"` | Search lightweight tool summaries |
| `ohmytool describe <tool>` | Inspect a complete descriptor and schema |
| `ohmytool run <tool> [key=value ...]` | Validate and execute a tool |
| `ohmytool run <tool> --stdin` | Read JSON input from stdin |
| `ohmytool run <tool> ... --json` | Emit machine-readable JSON |
| `ohmytool connection list` | List configured connections |
| `ohmytool connection check` | Check extensions that provide `<id>.ping` |
| `ohmytool config check` | Validate configuration |
| `ohmytool extension list` | List installed extensions |
| `ohmytool extension install <path\|package>` | Install a local or npm extension |
| `ohmytool setup` | Install the bundled Agent Skill |
| `ohmytool integrate` | Manage Agent Skill integrations |
| `ohmytool secret set <name>` | Store a secret without exposing its value |
| `ohmytool secret list` | List secret names only |
| `ohmytool mcp list` | List configured MCP servers |
| `ohmytool mcp auth <server>` | Authorize an OAuth MCP server |
| `ohmytool mcp logout <server>` | Remove an MCP server's OAuth credentials |

Use `--format=text|json|table|csv` to choose an explicit output format.
`--json` is an alias for `--format=json`.
