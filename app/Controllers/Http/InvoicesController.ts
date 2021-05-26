import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Invoice from 'App/Models/Invoice'

export default class InvoicesController {
  public async index ({}: HttpContextContract) {
    const invoices = await Invoice.all()
    return invoices
  }

  public async sing ({request}: HttpContextContract) {
    const invoicesId = request.input('invoices_id')
    const userId = request.input('user_id')
    const invoices = await Database
      .query()
      .select(
        'invoices.id',
        'invoices.status_id',
        'invoices.status',
        'total_signatures',
      )
      .from('invoices')
      .join('configs_entities', function () {
        this.on('invoices.entity_id', '=', 'configs_entities.entity_id')
          .on('invoices.status_id', '=', 'configs_entities.status_id')
      })
      .join('configs_entity_users', function () {
        this.on('invoices.entity_id', '=', 'configs_entity_users.entity_id')
          .on('invoices.status_id', '=', 'configs_entity_users.status_id')
      })
      .whereIn('invoices.id', [invoicesId])
      .where('configs_entity_users.user_id', userId)

    invoices.forEach(async ({
      total_signatures: totalSignatures, status, status_id: statusId, id,
    }) => {
      const newInvoice = totalSignatures === (status + 1)
        ? { status: 0, status_id: statusId + 1 }
        : { status: status + 1, status_id: statusId }

      await Invoice.query().where('id', id).update(newInvoice)
      await Database.table('log_invoices').insert({
        action: 'add',
        status_id_before: statusId,
        status_id_after: newInvoice.status_id,
        status_before: status,
        status_after: newInvoice.status,
        user_id: 1,
        invoice_id: id,
      })
    })
    return invoices
  }

  public async create ({request}: HttpContextContract) {
  }

  public async store ({request}: HttpContextContract) {
    const coverImage = request.file('image')

    if (coverImage) {
      console.log('entrando al if')

      await coverImage.move(Application.tmpPath('uploads'))
    }
    return 'ok'
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
