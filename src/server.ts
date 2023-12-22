import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async (request: FastifyRequest, reply: FastifyReply) => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

const port = env.APP_PORT

app
  .listen({
    port,
  })
  .then(() => console.log(`HTTP Server Running on http://localhost:${port}`))
