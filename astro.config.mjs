import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://oh-my-tool.github.io',
  integrations: [
    starlight({
      title: 'Oh My Tool',
      description: 'The native-first tool runtime for AI agents.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/oh-my-tool/oh-my-tool' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'docs' },
            { label: 'Installation', slug: 'docs/getting-started/installation' },
            { label: 'First Run', slug: 'docs/getting-started/first-run' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Runtime', slug: 'docs/concepts/runtime' },
            { label: 'Providers & Extensions', slug: 'docs/concepts/providers-and-extensions' },
          ],
        },
        {
          label: 'CLI Reference',
          items: [{ label: 'Commands', slug: 'docs/cli/reference' }],
        },
        {
          label: 'Extensions',
          items: [{ label: 'Official Extensions', slug: 'docs/extensions/official' }],
        },
      ],
      customCss: ['./src/styles/docs.css'],
    }),
  ],
});
