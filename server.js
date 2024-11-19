import Fastify from 'fastify';
import fastifyNext from 'fastify-next';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || 3003;

async function init() {
  const fastify = Fastify({
    logger: process.env.NODE_ENV === 'development',
    disableRequestLogging: process.env.NODE_ENV === 'production'
  });
  await fastify.register(fastifyNext);
  fastify.next('*');
  await fastify.listen({ port: process.env.PORT, host: '127.0.0.1' });
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
