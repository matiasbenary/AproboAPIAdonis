import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ConfigsEntityUsers extends BaseSchema {
  protected tableName = 'configs_entity_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('entity_id').unsigned().notNullable()
      table.integer('status_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('entity_id').references('id').inTable('entities')
      //  table.foreign('status_id').references('id').inTable('status_invoice')
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
