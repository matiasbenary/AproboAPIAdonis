import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invoices extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('order').notNullable()
      table.integer('amount').notNullable()
      table.string('currency').notNullable()
      table.integer('user_id').unsigned().notNullable()
      table.integer('entity_id').unsigned().notNullable()
      table.integer('status_id').unsigned().notNullable().defaultTo(1)
      table.integer('status').unsigned().notNullable().defaultTo(0)
      table.timestamp('date', { useTz: true }).defaultTo(this.now())
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('entity_id').references('id').inTable('entities')
      // table.foreign('status_id').references('id').inTable('status_invoice')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
