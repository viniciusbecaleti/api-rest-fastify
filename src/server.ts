import fastify, { FastifyReply, FastifyRequest } from 'fastify'

const app = fastify()

app.get('/hello', async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.send({ hello: 'world' })
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP Server Running!'))
