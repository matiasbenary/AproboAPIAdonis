import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Invoice from 'App/Models/Invoice'

export default class InvoiceSeeder extends BaseSeeder {
  public async run () {
    await Invoice.createMany([
      {
        status_id: 1,
        order: '15ds1515',
        user_id: 1,
        entity_id: 1,
        currency: 'US',
        amount: 999999,
        status: 2,
      },
      {
        status_id: 2,
        order: '123151515',
        user_id: 1,
        entity_id: 1,
        currency: 'US',
        amount: 999999,
        status: 1,
      },
      {
        status_id: 3,
        order: 'weq123',
        user_id: 1,
        entity_id: 1,
        currency: 'US',
        amount: 999999,
        status: 1,
      },
      {
        status_id: 4,
        order: '32ds',
        user_id: 1,
        entity_id: 1,
        currency: 'ARS',
        amount: 999999,
        status: 1,
      },
      {
        status_id: 1,
        order: 'dasa',
        user_id: 1,
        entity_id: 1,
        currency: 'US',
        amount: 999999,
        status: 1,
      },
    ])
  }
}
