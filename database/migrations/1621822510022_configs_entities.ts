import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ConfigsEntities extends BaseSchema {
  protected tableName = 'configs_entities'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('entity_id').unsigned().notNullable()
      table.integer('status_id').unsigned().notNullable()
      table.integer('total_signatures').unsigned().notNullable()
      table.foreign('entity_id').references('id').inTable('users')
      // table.foreign('status_id').references('id').inTable('status_invoice')
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
