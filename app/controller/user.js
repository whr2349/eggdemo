'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async list() {
    const { ctx } = this;
    const query = ctx.request.body;
    const list = await ctx.service.users.getList(query);
    this.success(list);
  }
  async update() {
    const { ctx } = this;
    const user = ctx.request.body;
    let res = null;
    if(user.hasOwnProperty('id')){
        res = await ctx.service.users.update(user); 
    }else{
        res = await ctx.service.users.create(user);
    }
    console.log(res)
    this.success(res);   
  }
  async delete() {
    const { ctx } = this;
    const id = ctx.request.body.id;
    const res = await ctx.service.users.delete(id);
    this.success(res);   
  }
}

module.exports = UserController;
