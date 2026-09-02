import http from 'node:http';
import path from 'node:path';
import { readFile, stat } from 'node:fs/promises';

// Serve exactly the Pages artifact, including its project-path prefix.
const root = path.resolve('dist/client');
const prefix = '/zaguobinski-eventos';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, 'http://localhost').pathname,
      );
      if (!['GET', 'HEAD'].includes(request.method)) {
        response.writeHead(405).end();
        return;
      }
      if (pathname !== prefix && !pathname.startsWith(prefix + '/')) {
        response.writeHead(404).end('Not found');
        return;
      }
      let file = path.resolve(
        root,
        '.' + (pathname.slice(prefix.length) || '/'),
      );
      if (file !== root && !file.startsWith(root + path.sep)) {
        response.writeHead(403).end();
        return;
      }
      if ((await stat(file)).isDirectory())
        file = path.join(file, 'index.html');
      const content = await readFile(file);
      response.writeHead(200, {
        'Content-Type': types[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': 'no-store',
        'Content-Length': content.length,
      });
      response.end(request.method === 'HEAD' ? undefined : content);
    } catch {
      response.writeHead(404).end('Not found');
    }
  })
  .listen(4173, '127.0.0.1', () => {
    console.log(`Preview: http://127.0.0.1:4173${prefix}/`);
  });
