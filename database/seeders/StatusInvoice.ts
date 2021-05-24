import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StatusInvoice from 'App/Models/StatusInvoice'

export default class StatusInvoiceSeeder extends BaseSeeder {
  public async run () {
    await StatusInvoice.createMany([
      {
        name: 'OC',
        description: 'Orden de compra',
      },
      {
        name: 'PDE',
        description: 'Proceso de ejecución',
      },
      {
        name: 'OP',
        description: 'Orden de pago',
      },
      {
        name: 'PA',
        description: 'Pago acreditado',
      },
    ])
  }
}
