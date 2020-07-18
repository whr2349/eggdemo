const { Controller } = require('egg');
class BaseController extends Controller {
//   get user() {
//     return this.ctx.session.user;
//   }

  success(data,msg="") {
    this.ctx.body = {
      success: true,
      data:data,
      msg:msg
    };
  }
  error(data,msg="") {
    this.ctx.body = {
      success: false,
      data:data,
      msg:msg
    };
  }
  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;