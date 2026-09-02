import { cp, copyFile, mkdir, readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist/client');
const prefix = '/zaguobinski-eventos';
const routes = [
  'privacidade',
  ...['tradicional', 'igreja', 'especial', 'premium', 'fogo-de-chao'].map(
    (slug) => `cardapios/${slug}`,
  ),
];
// GitHub mounts the artifact at /zaguobinski-eventos. Vinext writes the asset
// prefix into both filenames and URLs; copy the assets one level up for Pages.
const assets = path.join(root, 'zaguobinski-eventos', '_next');
if (existsSync(assets))
  await cp(assets, path.join(root, '_next'), { recursive: true });
for (const route of routes) {
  await mkdir(path.join(root, route), { recursive: true });
  await copyFile(
    path.join(root, route + '.html'),
    path.join(root, route, 'index.html'),
  );
}
for (const route of ['', ...routes]) {
  const html = await readFile(path.join(root, route, 'index.html'), 'utf8');
  assert.match(html, /<html lang="pt-BR"/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.ok(
    !/MIELI COMERCIO|38398916000114|proposta-comercial|R\$\s*3[.,]000/.test(
      html,
    ),
    'Private proposal content found',
  );
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `${route}: one main heading`,
  );
  for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!url.startsWith(prefix + '/')) continue;
    const local = decodeURIComponent(url.slice(prefix.length)).split(/[?#]/)[0];
    const file = path.join(root, local);
    assert.ok(existsSync(file), `Missing referenced file: ${url} in ${route}`);
  }
  if (route.startsWith('cardapios/')) {
    const slug = route.split('/')[1];
    assert.ok(
      html.includes(
        `content="https://marcosmieli9658-cell.github.io${prefix}/cardapios/${slug}.jpeg"`,
      ),
      `${slug}: specific social image`,
    );
    assert.ok(
      !html.includes('/og.jpg'),
      `${slug}: inherited root social image`,
    );
  }
}
const files = await readdir(root, { recursive: true });
assert.ok(
  !files.some((file) => /\.pdf$|\.env|\.pem$/.test(file)),
  'Private files must not be published',
);
console.log(
  'Pages export verified: 7 pages, local links/assets, per-menu social metadata, no private proposal content.',
);
