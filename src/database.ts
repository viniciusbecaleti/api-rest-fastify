import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    extension: 'ts',
    directory: env.DATABASE_MIGRATIONS,
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
