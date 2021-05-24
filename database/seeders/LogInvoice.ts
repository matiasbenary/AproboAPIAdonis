import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LogInvoice from 'App/Models/LogInvoice'

export default class LogInvoiceSeeder extends BaseSeeder {
  public async run () {
    await LogInvoice.createMany([
      {
        action: 'add',
        status_id_before: 1,
        status_id_after: 1,
        status_before: 0,
        status_after: 1,
        user_id: 1,
        invoice_id: 1,
      },
      {
        action: 'add',
        status_id_before: 1,
        status_id_after: 2,
        status_before: 2,
        status_after: 0,
        user_id: 1,
        invoice_id: 2,
      },
      {
        action: 'add',
        status_id_before: 3,
        status_id_after: 3,
        status_before: 1,
        status_after: 2,
        user_id: 1,
        invoice_id: 3,
      },
    ])
  }
}
