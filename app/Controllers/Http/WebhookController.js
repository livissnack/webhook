'use strict'

class WebhookController {
  async index({request, response}) {
    response.json({
      status: 'ok',
      msg: '请求成功',
      data: []
    })
  }
}

module.exports = WebhookController
