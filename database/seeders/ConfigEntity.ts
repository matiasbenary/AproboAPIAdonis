import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ConfigsEntity from 'App/Models/ConfigsEntity'

export default class ConfigEntitySeeder extends BaseSeeder {
  public async run () {
    await ConfigsEntity.createMany([
      { entity_id: 1, status_id: 1, total_signatures: 3 },
      { entity_id: 1, status_id: 2, total_signatures: 2 },
      { entity_id: 1, status_id: 3, total_signatures: 3 },
    ])
  }
}
