// const fastify = require('fastify')();
// const fastifyStatic = require('@fastify/static');
// const path = require('path');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const host = process.env.HOST || 'localhost';
// const port = parseInt(process.env.PORT || '3000');

// const app = next({ dev });
// const handle = app.getRequestHandler();

// (async () => {
//   try {
//     await app.prepare();

//     fastify.register(fastifyStatic, {
//       root: path.join(__dirname, '/public/static'),
//       prefix: '/static/'
//     });

//     fastify.get('/sitemap.xml', (req, reply) => {
//       reply.sendFile('sitemap.xml');
//     });

//     fastify.all('/*', (req, reply) => {
//       reply.hijack();
//       handle(req.raw, reply.raw)
//         .then(() => {
//           reply.raw.end();
//         })
//         .catch((err) => {
//           fastify.log.error(err);
//           reply.raw.writeHead(500);
//           reply.raw.end('Internal Server Error');
//         });
//     });

//     await fastify.listen({ port, host });

//     console.log(`Fastify server ready on port: ${port}`);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// })();

const fastify = require('fastify')();
const fastifyStatic = require('@fastify/static');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();

    await fastify.register(fastifyStatic, {
      root: path.join(__dirname, 'public', 'static'),
      prefix: '/static/'
    });

    fastify.get('/sitemap.xml', async (req, reply) => {
      return reply.type('application/xml').sendFile('sitemap.xml');
    });

    fastify.all('/*', async (req, reply) => {
      await handle(req.raw, reply.raw);
      // Fastify 5 handles response ending better, no need for manual reply.hijack
    });

    await fastify.listen({ port, host });

    console.log(`🚀 Fastify server ready at http://${host}:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
