'use strict';

const Controller = require('egg').Controller;

class AccontController extends Controller {
    async account() {
        const { ctx } = this;
        let name = ctx.request.body.loginname;
        let pwd = ctx.request.body.password;
        console.log(pwd)
        console.log(ctx.request.body)
    }
}

module.exports = AccontController;
