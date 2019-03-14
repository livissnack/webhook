'use strict'
const Logger = use('Logger')
const shell = use('shelljs')
const Helpers = use('Helpers')

class WebhookController {
  async index({request}) {
    const shellUrl = `${Helpers.appRoot()}/deploy.sh`
    shell.exec(shellUrl, (code, stdout, stderr) => {
      Logger.info(`${new Date()} Exit code:`, code)
      Logger.info(`${new Date()} Program output:`, stdout)
      Logger.info(`${new Date()} 执行完毕！错误信息：？`, stderr)
    })
    Logger.info(`${new Date()} 执行完毕！错误信息：？`, request.headers())
  }
}

module.exports = WebhookController
