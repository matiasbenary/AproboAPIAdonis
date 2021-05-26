import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder (seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      await this.runProd()
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run () {
    await this.runSeeder(await import('../User'))
    await this.runSeeder(await import('../Entity'))
    await this.runSeeder(await import('../StatusInvoice'))
    await this.runSeeder(await import('../ConfigEntity'))
    await this.runSeeder(await import('../ConfigEntityUser'))
    await this.runSeeder(await import('../Invoice'))
    await this.runSeeder(await import('../LogInvoice'))
  }

  public async runProd () {
    await this.runSeeder(await import('../Invoice'))
  }
}
