import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StatusInvoices extends BaseSchema {
  protected tableName = 'status_invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().defaultTo('OC')
      table.string('description').notNullable().defaultTo('Orden de compra')
      table.timestamps(true, true)
      //enu('column', ['value1', 'value2'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
