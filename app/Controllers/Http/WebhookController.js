'use strict'

class WebhookController {
  async index({request, response}) {
    response.json({
      status: 'ok',
      msg: '请求成功',
      data: []
    })
  }

  async test({request, response }) {
    response.json({
      status: 'ok',
      msg: '请求成功',
      data: request.headers()
    })
  }
}

module.exports = WebhookController
