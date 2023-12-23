import 'knex'

declare module 'knex/types/tables' {
  interface Tables {
    transactions: {
      id: string
      session_id?: string
      title: string
      amount: number
      created_at: string
      updated_at: string
    }
  }
}
