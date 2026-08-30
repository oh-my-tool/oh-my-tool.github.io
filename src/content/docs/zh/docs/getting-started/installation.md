---
title: 安装
description: 安装 Oh My Tool CLI 并检查运行环境。
sidebar:
  order: 1
---

## 环境要求

CLI 通过 npm 分发，运行时要求 Bun 1.4 或更高版本。

全局安装已发布的 Package：

```powershell
npm install --global @oh-my-tool/cli
ohmytool --version
```

如果你要参与 Core 仓库开发，可以在 Core 仓库中安装依赖并直接运行 CLI：

```powershell
npm ci
bun packages/cli/bin/ohmytool.ts --version
```

## 安装扩展

官方扩展是独立 Package。例如：

```powershell
ohmytool extension install @oh-my-tool/redis
ohmytool extension list
```

开发时也可以安装本地扩展：

```powershell
ohmytool extension install <path-to-extension>
```

继续阅读[第一次执行](/zh/docs/getting-started/first-run/)。
