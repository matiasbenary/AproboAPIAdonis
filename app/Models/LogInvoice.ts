import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class LogInvoice extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public action: string

  @column()
  public status_id_before: number

  @column()
  public status_id_after: number

  @column()
  public status_before: number

  @column()
  public status_after: number

  @column()
  public user_id: number

  @column()
  public invoice_id: number
}
