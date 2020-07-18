'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/users.test.js', () => {
  it('should get exists user', async () => {
    // 创建 ctx
    const ctx = app.mockContext();
    // 通过 ctx 访问到 service.user
    const user = await ctx.service.users.getList();
    assert.ok(user.results.length > 0, true, '假');
  });

});
