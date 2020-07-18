

const Controller = require('../core/base_controller');

class AccontController extends Controller {

  async account() {
    const { ctx } = this;
    const name = ctx.request.body.loginname;
    const pwd = ctx.request.body.password;
    let res = await ctx.service.users.account(name,pwd);
    this.success(res);
    
  }

    async account() {
        const { ctx } = this;
        const name = ctx.request.body.loginname;
        const pwd = ctx.request.body.password;
        console.log(pwd)
        console.log(ctx.request.body)
    }

}

module.exports = AccontController;
