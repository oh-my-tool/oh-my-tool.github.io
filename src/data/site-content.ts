export type LocaleKey = 'en' | 'zh';

export interface NavItem {
  label: string;
  href: string;
}

export interface Capability {
  index: string;
  title: string;
  description: string;
  accent: 'violet' | 'cyan' | 'amber' | 'pink';
}

export interface Principle {
  title: string;
  description: string;
}

export interface Extension {
  name: string;
  packageName: string;
  description: string;
  href: string;
  accent: 'cyan' | 'violet' | 'amber';
}

export interface RoadmapItem {
  version: string;
  status: string;
  title: string;
  description: string;
}

export interface LandingContent {
  locale: LocaleKey;
  lang: string;
  nav: {
    docs: string;
    roadmap: string;
    github: string;
    language: string;
    languageHref: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    installLabel: string;
    installCommand: string;
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    nodes: string[];
  };
  protocol: {
    eyebrow: string;
    title: string;
    steps: { label: string; description: string }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: Capability[];
  };
  terminal: {
    eyebrow: string;
    title: string;
    description: string;
    prompt: string;
    lines: { command: string; output: string }[];
  };
  extensions: {
    eyebrow: string;
    title: string;
    description: string;
    items: Extension[];
  };
  principles: {
    eyebrow: string;
    title: string;
    description: string;
    items: Principle[];
  };
  roadmap: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: RoadmapItem[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    tagline: string;
    source: string;
    docs: string;
    extensions: string;
  };
}

const github = 'https://github.com/oh-my-tool/oh-my-tool';

export const landingContent: Record<LocaleKey, LandingContent> = {
  en: {
    locale: 'en',
    lang: 'en',
    nav: {
      docs: 'Documentation',
      roadmap: 'Roadmap',
      github: 'GitHub',
      language: 'Language',
      languageHref: '/zh/',
      languageLabel: '中文',
    },
    hero: {
      eyebrow: 'The agent tool runtime',
      title: 'One runtime. Every tool your agent needs.',
      description:
        'Oh My Tool gives AI agents a consistent way to discover, inspect, and execute capabilities from native extensions and MCP providers.',
      primaryCta: 'Read the docs',
      primaryHref: '/docs/',
      secondaryCta: 'View on GitHub',
      secondaryHref: github,
      installLabel: 'Install the CLI',
      installCommand: 'npm install --global @oh-my-tool/cli',
    },
    architecture: {
      eyebrow: 'A clean northbound interface',
      title: 'Connect agents to capabilities without the glue code.',
      description:
        'OMT keeps discovery lightweight and execution governed. Static manifests describe what is available; providers only wake up when a tool actually runs.',
      nodes: ['Agent', 'Skill / CLI', 'ToolRuntime', 'Provider', 'Extension'],
    },
    protocol: {
      eyebrow: 'The protocol',
      title: 'A simple loop for agentic work.',
      steps: [
        { label: 'search', description: 'Find lightweight tool summaries for the task.' },
        { label: 'describe', description: 'Inspect the complete descriptor and schema.' },
        { label: 'run', description: 'Validate, govern, and execute the selected tool.' },
      ],
    },
    capabilities: {
      eyebrow: 'What ships in the runtime',
      title: 'Built for capability discovery, not platform lock-in.',
      description:
        'A provider-independent core with the boring parts handled: manifests, schemas, connections, policy, and readable output.',
      items: [
        { index: '01', title: 'Native extensions', description: 'Load local capabilities from independent packages without coupling them to the core runtime.', accent: 'violet' },
        { index: '02', title: 'MCP providers', description: 'Bring existing MCP servers into the same search, describe, and run experience.', accent: 'cyan' },
        { index: '03', title: 'Policy preflight', description: 'Validate schemas and apply governance before anything gets invoked.', accent: 'amber' },
        { index: '04', title: 'Local discovery', description: 'Index static manifests fast, then dynamically load handlers only during execution.', accent: 'pink' },
      ],
    },
    terminal: {
      eyebrow: 'From intent to execution',
      title: 'The CLI is the control surface.',
      description:
        'Readable by default, machine-ready when you need it. The canonical executable is `ohmytool`; the canonical verb is `run`.',
      prompt: 'agent@local ~ %',
      lines: [
        { command: 'ohmytool search "query mysql data"', output: 'mysql.query  Query rows from a MySQL connection' },
        { command: 'ohmytool describe mysql.query', output: 'schema: connection · sql · parameters' },
        { command: 'ohmytool run mysql.query connection=dev sql="select * from users"', output: '✓ policy preflight passed  ·  12 rows returned' },
      ],
    },
    extensions: {
      eyebrow: 'An independent ecosystem',
      title: 'Keep the runtime small. Grow the capability surface.',
      description:
        'Official extensions stay in their own repositories and ship against the same ToolManifest → ExtensionManifest → ToolHandler contract.',
      items: [
        { name: 'MySQL', packageName: '@oh-my-tool/mysql', description: 'Query, inspect, and operate MySQL through native tools.', href: 'https://github.com/oh-my-tool/omt-mysql', accent: 'cyan' },
        { name: 'Redis', packageName: '@oh-my-tool/redis', description: 'Bring fast key-value workflows into the same runtime.', href: 'https://github.com/oh-my-tool/omt-redis', accent: 'violet' },
        { name: 'Kafka', packageName: '@oh-my-tool/kafka', description: 'Discover and run event-streaming capabilities locally.', href: 'https://github.com/oh-my-tool/omt-kafka', accent: 'amber' },
      ],
    },
    principles: {
      eyebrow: 'The OMT point of view',
      title: 'Small surface area. Strong defaults.',
      description: 'The runtime is designed to stay close to the machine and predictable for the agent.',
      items: [
        { title: 'Native-first', description: 'Prefer local extensions that are fast, inspectable, and easy to ship.' },
        { title: 'Local-first', description: 'Keep discovery and execution near the systems that own the data.' },
        { title: 'CLI-first', description: 'Make every capability composable from a terminal and an agent skill.' },
        { title: 'Governed by default', description: 'Make schema validation and policy preflight part of the normal path.' },
      ],
    },
    roadmap: {
      eyebrow: 'Where we are going',
      title: 'A runtime that earns its place in the stack.',
      description: 'Follow the next slices of the capability layer as OMT moves from runtime foundation to agent ecosystem.',
      cta: 'Explore the roadmap',
      items: [
        { version: 'v0.2', status: 'Shipped', title: 'Provider-independent runtime', description: 'Runtime, registry, CLI, and native extension contract.' },
        { version: 'v0.3', status: 'In progress', title: 'MCP provider integration', description: 'Connect MCP servers through the same discovery and execution flow.' },
        { version: 'v0.4', status: 'Planned', title: 'Governance foundation', description: 'Expand policy controls, auditability, and safe execution defaults.' },
      ],
    },
    finalCta: {
      eyebrow: 'Start with the protocol',
      title: 'Give your agent a better tool boundary.',
      description: 'Install the CLI, connect an extension, and make the first run observable from the start.',
      cta: 'Get started',
    },
    footer: {
      tagline: 'The native-first tool runtime for AI agents.',
      source: 'Core runtime',
      docs: 'Docs',
      extensions: 'Extensions',
    },
  },
  zh: {
    locale: 'zh',
    lang: 'zh-CN',
    nav: {
      docs: '文档',
      roadmap: '路线图',
      github: 'GitHub',
      language: '语言',
      languageHref: '/',
      languageLabel: 'English',
    },
    hero: {
      eyebrow: '面向 Agent 的工具运行时',
      title: '一个运行时，连接 Agent 所需的每一种工具。',
      description: 'Oh My Tool 为 AI Agent 提供统一的工具发现、描述与执行方式，让原生扩展和 MCP Provider 可以在同一个边界内工作。',
      primaryCta: '阅读文档',
      primaryHref: '/zh/docs/',
      secondaryCta: '查看 GitHub',
      secondaryHref: github,
      installLabel: '安装 CLI',
      installCommand: 'npm install --global @oh-my-tool/cli',
    },
    architecture: {
      eyebrow: '清晰的北向接口',
      title: '连接 Agent 与能力，不再重复编写胶水代码。',
      description: 'OMT 让发现保持轻量，让执行受到治理。静态 Manifest 描述可用能力，Provider 只在真正执行工具时被唤醒。',
      nodes: ['Agent', 'Skill / CLI', 'ToolRuntime', 'Provider', 'Extension'],
    },
    protocol: {
      eyebrow: '核心协议',
      title: '一个适合 Agent 工作的简单循环。',
      steps: [
        { label: 'search', description: '查找与当前任务相关的轻量工具摘要。' },
        { label: 'describe', description: '查看完整的工具描述与输入 Schema。' },
        { label: 'run', description: '完成校验、策略预检，然后执行目标工具。' },
      ],
    },
    capabilities: {
      eyebrow: '运行时能力',
      title: '专注于能力发现，而不是平台绑定。',
      description: '以 Provider 无关的核心为基础，把 Manifest、Schema、连接、策略和可读输出这些基础工作处理好。',
      items: [
        { index: '01', title: '原生扩展', description: '从独立 Package 加载本地能力，不让具体能力反向耦合核心运行时。', accent: 'violet' },
        { index: '02', title: 'MCP Provider', description: '让现有 MCP Server 也能进入统一的 search、describe、run 体验。', accent: 'cyan' },
        { index: '03', title: '策略预检', description: '在工具真正执行前完成 Schema 校验并应用治理策略。', accent: 'amber' },
        { index: '04', title: '本地发现', description: '快速索引静态 Manifest，只在执行阶段动态加载 Handler。', accent: 'pink' },
      ],
    },
    terminal: {
      eyebrow: '从意图到执行',
      title: 'CLI 就是控制面。',
      description: '默认输出可读，需要机器处理时再切换为 JSON。规范的可执行文件是 `ohmytool`，规范的执行动词是 `run`。',
      prompt: 'agent@local ~ %',
      lines: [
        { command: 'ohmytool search "query mysql data"', output: 'mysql.query  查询 MySQL 连接中的数据' },
        { command: 'ohmytool describe mysql.query', output: 'schema: connection · sql · parameters' },
        { command: 'ohmytool run mysql.query connection=dev sql="select * from users"', output: '✓ 策略预检通过  ·  返回 12 行' },
      ],
    },
    extensions: {
      eyebrow: '独立扩展生态',
      title: '保持运行时小而稳，让能力边界持续生长。',
      description: '官方扩展保留在独立仓库中，基于同一套 ToolManifest → ExtensionManifest → ToolHandler 契约交付。',
      items: [
        { name: 'MySQL', packageName: '@oh-my-tool/mysql', description: '通过原生工具查询、检查和操作 MySQL。', href: 'https://github.com/oh-my-tool/omt-mysql', accent: 'cyan' },
        { name: 'Redis', packageName: '@oh-my-tool/redis', description: '把高速 Key-Value 工作流接入同一运行时。', href: 'https://github.com/oh-my-tool/omt-redis', accent: 'violet' },
        { name: 'Kafka', packageName: '@oh-my-tool/kafka', description: '在本地发现并执行事件流处理能力。', href: 'https://github.com/oh-my-tool/omt-kafka', accent: 'amber' },
      ],
    },
    principles: {
      eyebrow: 'OMT 的判断',
      title: '更小的表面积，更强的默认值。',
      description: '运行时尽量靠近机器，并让 Agent 面对一个可预测的工具边界。',
      items: [
        { title: '原生优先', description: '优先使用快速、可检查、容易交付的本地扩展。' },
        { title: '本地优先', description: '让发现和执行靠近真正拥有数据的系统。' },
        { title: 'CLI 优先', description: '每种能力都可以从终端和 Agent Skill 组合使用。' },
        { title: '默认治理', description: '把 Schema 校验和策略预检放在正常执行路径中。' },
      ],
    },
    roadmap: {
      eyebrow: '接下来',
      title: '让运行时真正成为 Agent 技术栈的一部分。',
      description: '跟随 OMT 从运行时基础走向 Agent 能力生态的下一步。',
      cta: '查看路线图',
      items: [
        { version: 'v0.2', status: '已完成', title: 'Provider 无关运行时', description: '运行时、Registry、CLI 与原生扩展契约。' },
        { version: 'v0.3', status: '进行中', title: 'MCP Provider 集成', description: '通过统一的发现与执行流程连接 MCP Server。' },
        { version: 'v0.4', status: '计划中', title: '治理基础', description: '扩展策略控制、审计能力与安全执行默认值。' },
      ],
    },
    finalCta: {
      eyebrow: '从协议开始',
      title: '给你的 Agent 一个更好的工具边界。',
      description: '安装 CLI，接入一个扩展，从第一次执行开始就让能力可发现、可描述、可观察。',
      cta: '开始使用',
    },
    footer: {
      tagline: '面向 AI Agent 的原生优先工具运行时。',
      source: '核心运行时',
      docs: '文档',
      extensions: '扩展',
    },
  },
};
