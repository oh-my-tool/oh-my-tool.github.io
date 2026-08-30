---
title: Runtime
description: Understand the layers that make up the Oh My Tool runtime.
sidebar:
  order: 1
---

The runtime separates what an agent needs to know from what a provider needs to
execute:

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

### Static discovery

`search` and `describe` read static manifests. This keeps discovery fast and
does not require every connection or provider to initialize.

### Dynamic execution

`run` resolves the selected provider, validates the input schema, performs
policy preflight, and then loads the executable handler. The core runtime does
not own concrete database or cache capabilities.

### State and secrets

Default state lives in `~/.ohmytool` on Linux/macOS and
`%USERPROFILE%\\.ohmytool` on Windows. Set `OHMYTOOL_HOME` to override it.
Use `ohmytool secret set <name>` to store credentials without exposing their
values in normal output.
