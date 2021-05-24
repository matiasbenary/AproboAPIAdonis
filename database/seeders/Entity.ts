import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Entity from 'App/Models/Entity'

export default class EntitySeeder extends BaseSeeder {
  public async run () {
    await Entity.createMany([
      { id: 1, name: 'Fonselp', email: 'test@er123.com' },
      { id: 2, name: 'Ada', email: 'qwe@er123.com' },
      { id: 3, name: 'Civic House', email: 'tesasdt@er123.com' },
    ])
  }
}
