// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  interface Tables {
    transactions: {
      id: string
      session_id?: string
      title: string
      amount: number
      created_at: Date
      updated_at: Date
    }
  }
}
