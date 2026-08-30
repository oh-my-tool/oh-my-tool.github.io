---
title: Installation
description: Install the Oh My Tool CLI and verify your environment.
sidebar:
  order: 1
---

## Requirements

The CLI is distributed through npm and runs on Bun 1.4 or newer.

Install the published package globally:

```powershell
npm install --global @oh-my-tool/cli
ohmytool --version
```

For local repository development, install dependencies and run the CLI from
the Core repository:

```powershell
npm ci
bun packages/cli/bin/ohmytool.ts --version
```

## Install an extension

Official extensions are independent packages. For example:

```powershell
ohmytool extension install @oh-my-tool/redis
ohmytool extension list
```

You can also install a local extension during development:

```powershell
ohmytool extension install <path-to-extension>
```

Continue with [your first run](/docs/getting-started/first-run/).
