'use strict'
const Logger = use('Logger')

class WebhookController {
  async index({request}) {
    Logger.info(`${new Date()} 执行完毕！错误信息：？`, request.headers())
  }
}

module.exports = WebhookController
