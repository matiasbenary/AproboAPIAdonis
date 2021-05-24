import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        id: 1,
        name: 'Matias',
        surname: 'Benary',
        email: 'matiasbenary@gmail.com',
        password:
            '$2b$10$yi40tBPhKmIxaU7Ozh08Ne0ITThxnzbg7PEMPwJ4puzoJ83dcUt9q',
      },
      {
        id: 2,
        name: 'qwe',
        surname: 'dascx',
        email: 'dasd@gmail.com',
        password:
            '$2b$10$yi40tBPhKmIxaU7Ozh08Ne0ITThxnzbg7PEMPwJ4puzoJ83dcUt9q',
      },
      {
        id: 3,
        name: 'qwa',
        surname: 'zxc',
        email: 'asd@gmail.com',
        password:
            '$2b$10$yi40tBPhKmIxaU7Ozh08Ne0ITThxnzbg7PEMPwJ4puzoJ83dcUt9q',
      } ,
    ])
  }
}
