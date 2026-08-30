import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function testPublishesBilingualEntryPoints() {
  const requiredFiles = [
    'src/pages/index.astro',
    'src/pages/zh/index.astro',
    'src/content/docs/docs/index.md',
    'src/content/docs/zh/docs/index.md',
    'src/pages/roadmap.astro',
    'src/pages/zh/roadmap.astro',
  ];

  for (const file of requiredFiles) {
    assert.equal(existsSync(resolve(root, file)), true, `${file} is missing`);
  }

  assert.equal(existsSync(resolve(root, 'src/content/docs/index.md')), false, 'docs must not own the site root');
}

function testDocumentsRuntimeProtocolAndDeployment() {
  const readme = readFileSync(resolve(root, 'README.md'), 'utf8');
  const workflow = readFileSync(resolve(root, '.github/workflows/deploy.yml'), 'utf8');

  assert.match(readme, /search\s*→\s*describe\s*→\s*run/);
  assert.match(workflow, /actions\/deploy-pages@v5/);
}

function testUsesCurrentStarlightSocialConfigShape() {
  const config = readFileSync(resolve(root, 'astro.config.mjs'), 'utf8');

  assert.match(config, /social:\s*\[/, 'Starlight social links must use an array');
}

testPublishesBilingualEntryPoints();
testDocumentsRuntimeProtocolAndDeployment();
testUsesCurrentStarlightSocialConfigShape();
console.log('site structure tests passed');
