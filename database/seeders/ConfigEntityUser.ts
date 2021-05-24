import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ConfigsEntityUser from 'App/Models/ConfigsEntityUser'

export default class ConfigEntityUserSeeder extends BaseSeeder {
  public async run () {
    await ConfigsEntityUser.createMany([
      { user_id: 1, entity_id: 1, status_id: 1 },
      { user_id: 1, entity_id: 1, status_id: 2 },
      { user_id: 1, entity_id: 1, status_id: 3 },
      { user_id: 1, entity_id: 1, status_id: 4 },
      { user_id: 1, entity_id: 2, status_id: 2 },
      { user_id: 1, entity_id: 2, status_id: 3 },
      { user_id: 2, entity_id: 1, status_id: 1 },
      { user_id: 2, entity_id: 1, status_id: 2 },
    ])
  }
}
