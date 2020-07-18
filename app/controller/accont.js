'use strict';

const Controller = require('../core/base_controller');

class AccontController extends Controller {
  async account() {
    const { ctx } = this;
    const name = ctx.request.body.loginname;
    const pwd = ctx.request.body.password;
    let res = await ctx.service.users.account(name,pwd);
    this.success(res);
    
  }
}

module.exports = AccontController;
