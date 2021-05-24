import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LogInvoices extends BaseSchema {
  protected tableName = 'log_invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('action').notNullable()
      table.integer('status_id_before').unsigned().notNullable()
      table.integer('status_id_after').unsigned().notNullable()
      table.integer('status_before').unsigned().notNullable().defaultTo(0)
      table.integer('status_after').unsigned().notNullable().defaultTo(0)
      table.integer('user_id').unsigned().notNullable()
      table.integer('invoice_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('invoice_id').references('id').inTable('invoices')
      //  table.foreign('status_id_before').references('id').inTable('status_invoice')
      // table.foreign('status_id_after').references('id').inTable('status_invoice')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
