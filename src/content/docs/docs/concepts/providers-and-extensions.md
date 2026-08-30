---
title: Providers & Extensions
description: Learn how native extensions and MCP providers share one contract.
sidebar:
  order: 2
---

Providers translate the runtime's generic execution contract into a concrete
capability source.

## Native extensions

Native extensions are independent repositories that publish manifests and
handlers against the SDK contract:

```text
ToolManifest → ExtensionManifest → ToolHandler
```

They are a good fit for local-first capabilities where fast startup,
inspectability, and direct access matter.

## MCP providers

The MCP provider connects enabled MCP servers and exposes their tools as
namespaced IDs such as `github.create_issue`. MCP discovery happens when the
provider is initialized; native manifest discovery remains static and local.

## Connections

The core runtime owns the generic connection mechanism. Provider-specific
fields belong to each extension repository:

```toml
[extensions.<extension-id>.connections.<name>]
environment = "test"

[extensions.<extension-id>.connections.<name>.settings]
host = "127.0.0.1"
port = 1234

[extensions.<extension-id>.connections.<name>.secrets]
password = "provider:name"
```

See [Official Extensions](/docs/extensions/official/) for concrete providers.
