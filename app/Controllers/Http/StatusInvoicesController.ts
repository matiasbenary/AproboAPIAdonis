import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StatusInvoice from 'App/Models/StatusInvoice'

export default class StatusInvoicesController {
  public async index ({}: HttpContextContract) {
    const statusInvoices = await StatusInvoice.all()
    return statusInvoices
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
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
