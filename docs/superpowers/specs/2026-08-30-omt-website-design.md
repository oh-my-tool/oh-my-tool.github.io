# Oh My Tool Website Design

Date: 2026-08-30
Status: Approved for implementation

## Summary

Build a bilingual public website for Oh My Tool in the dedicated
`oh-my-tool.github.io` repository. The site combines a custom, brand-led
landing page with Starlight-powered documentation. English is the default
locale; Chinese is available under `/zh/`.

The visual direction is dark developer infrastructure: deep navy/black
surfaces, a restrained purple-to-cyan accent, subtle grid texture, large
editorial headings, terminal/code panels, and a clear open-source call to
action.

## Goals

- Explain OMT in one screen as a native-first, local-first tool runtime for AI
  agents.
- Make the core flow (`search → describe → run`) understandable without
  reading the repository.
- Establish a credible open-source brand for the runtime and independent
  extensions.
- Provide bilingual onboarding and documentation with stable, predictable URLs.
- Deploy as a static site to GitHub Pages through GitHub Actions.

## Non-goals for the first version

- No application dashboard, account system, backend, or dynamic API.
- No complete migration of internal architecture/spec documents from the core
  repository.
- No external CMS or runtime content fetching.
- No dependency on stock photography or third-party image hosting.

## Technology and deployment

- Astro for the static site and custom landing pages.
- Starlight for documentation navigation, search, code highlighting, SEO,
  accessible typography, and theme support.
- TypeScript for components and content helpers where needed.
- CSS variables and scoped styles for the visual system; avoid a large UI
  framework unless a concrete component requires it.
- GitHub Actions builds the site and deploys the generated `dist/` output to
  GitHub Pages.

The website repository is independent from the Core, MySQL, Redis, and Kafka
repositories. The implementation must not modify those repositories.

## Information architecture

### Public routes

| Route | Purpose |
| --- | --- |
| `/` | English landing page |
| `/zh/` | Chinese landing page |
| `/docs/` | English documentation entry |
| `/zh/docs/` | Chinese documentation entry |
| `/roadmap/` | English roadmap summary |
| `/zh/roadmap/` | Chinese roadmap summary |

English is the default locale and does not receive a locale prefix. Chinese
uses the `/zh/` prefix. A visible language switcher should preserve the
current page when a translated counterpart exists and otherwise fall back to
the locale home.

### Landing page sections

1. Header with OMT mark/name, Docs, GitHub, and language switcher.
2. Hero with the positioning statement, install command, and primary CTAs.
3. Runtime architecture diagram:
   `Agent → Skill / CLI → ToolRuntime → Provider → Extension`.
4. Protocol strip showing `search → describe → run`.
5. Capability cards for Native Extensions, MCP Providers, Policy Preflight,
   and Local Discovery.
6. Terminal walkthrough with representative `ohmytool` commands.
7. Extension ecosystem cards for MySQL, Redis, and Kafka.
8. Principles section: Native-first, Local-first, CLI-first, Governed by
   default.
9. Roadmap snapshot and contribution CTA.
10. Footer with repository, docs, roadmap, and community links.

The Chinese page mirrors the English information architecture but uses native
Chinese copy rather than machine-like line-by-line translation.

### Documentation sections

- Getting Started: install, first search, describe, and run.
- Concepts: runtime, providers, extensions, manifests, and policy.
- CLI Reference: commands and flags.
- Providers: native extensions and MCP.
- Extensions: installation and links to official extension repositories.
- Roadmap: current milestones and deferred scope.

User-facing product documentation belongs in this repository. Internal
architecture, specs, ADRs, and development notes remain in the Core repository.

## Component boundaries

- `SiteHeader`: global navigation, GitHub CTA, locale switcher.
- `HeroSection`: positioning, install command, primary actions.
- `ArchitectureFlow`: responsive visual explanation of runtime layers.
- `ProtocolStrip`: compact `search → describe → run` sequence.
- `CapabilityGrid`: reusable feature cards with icon/label/body.
- `TerminalDemo`: static command/output presentation with copy affordance if
  practical.
- `ExtensionGrid`: official extension cards with repository links.
- `PrinciplesSection`: product principles and short explanations.
- `RoadmapPreview`: milestone summary linking to roadmap.
- `SiteFooter`: repository and documentation links.

Landing components should own presentation only. Documentation content should
remain Markdown/MDX and use Starlight primitives instead of duplicating the
landing component system.

## Visual system

- Base: near-black and deep navy backgrounds with layered surfaces.
- Text: high-contrast warm white for headings, cool gray for body copy.
- Accent: purple/cyan gradient reserved for key highlights, borders, and
  diagram paths.
- Typography: expressive display face for hero headings paired with a highly
  legible sans-serif and a monospace face for commands/code.
- Surfaces: thin borders, low-radius panels, restrained glow, subtle grid
  texture, and no heavy glassmorphism.
- Motion: short opacity/translate reveals and hover emphasis only; respect
  `prefers-reduced-motion`.
- Responsive behavior: architecture and capability layouts collapse to one
  column; terminal panels remain readable with horizontal overflow or stacked
  panes.

## Content and links

Initial product claims and examples should be grounded in the Core README:
provider-independent runtime, native/local/CLI-first principles, the
`search → describe → run` flow, MCP integration, policy preflight, and official
extensions. Links to Core, `omt-mysql`, `omt-redis`, and `omt-kafka` should use
their public GitHub repositories.

The site must not present deferred features as shipped functionality. Roadmap
labels should distinguish shipped, in-progress, planned, and future items.

## Verification and acceptance criteria

- Production build completes without errors.
- English and Chinese home pages render at their documented paths.
- English and Chinese documentation routes render and expose navigation/search.
- Language switching works on translated pages and falls back safely when it
  cannot preserve the current path.
- Navigation links point to valid local routes or the intended public GitHub
  repositories.
- Layout is usable at mobile, tablet, and desktop widths.
- Keyboard focus states remain visible and contrast is readable in dark mode.
- Reduced-motion preference disables nonessential transitions.
- GitHub Actions workflow builds the site and publishes it to Pages.

## Risks and decisions

- Starlight's default visual language is documentation-first, so the landing
  page will be custom-built and the docs will share tokens rather than forcing
  the home page into a stock docs template.
- Bilingual pages double content maintenance. The first release will keep the
  information architecture mirrored while allowing copy to be authored
  naturally in each language.
- GitHub Pages deployment needs the repository's Pages source configured to
  GitHub Actions after the workflow is merged; the workflow alone cannot
  change organization settings.
