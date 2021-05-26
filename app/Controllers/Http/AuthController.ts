import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login ({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const user = await User
      .query()
      .where('email', email)
      .where('password', password)
      .firstOrFail()

    const token = await auth.use('api').generate(user)
    return token
  }
}
