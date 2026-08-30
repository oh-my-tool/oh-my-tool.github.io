---
title: First Run
description: Discover, inspect, and execute a tool with the canonical OMT flow.
sidebar:
  order: 2
---

OMT keeps the agent-facing workflow explicit:

```text
search → describe → run
```

## 1. Search

Find lightweight summaries without loading every executable handler:

```powershell
ohmytool search "query mysql data"
```

## 2. Describe

Inspect the complete descriptor and input schema before execution:

```powershell
ohmytool describe mysql.query
```

## 3. Run

Execute the selected tool with named arguments:

```powershell
ohmytool run mysql.query connection=dev sql="select * from users"
```

Use `--json` when another program needs machine-readable output:

```powershell
ohmytool run mysql.query connection=dev sql="select * from users" --json
```

Before invocation, OMT validates the schema and runs policy preflight. Tool
results are readable by default, while `--format=text|json|table|csv` makes
the output format explicit.
