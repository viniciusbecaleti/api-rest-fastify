import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: '/transactions',
})

const port = env.APP_PORT

app
  .listen({
    port,
  })
  .then(() => console.log(`HTTP Server Running on http://localhost:${port}`))
