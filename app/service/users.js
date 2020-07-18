'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
    async getById(id) {
        const result = await this.app.mysql.get('users', { id });
        return result;
    }
    async getByName(name) {
        const result = await this.app.mysql.get('users', { name });
        return result;
    }
    async getList(q) {
        console.log(q)
        let opt = { // 搜索 表
            where: q.sear, // WHERE 条件
            orders: [['creat_time', 'desc']], // 排序方式
            limit: q.pagesize, // 返回数据量
            offset: (q.currentPage - 1) * q.pagesize,
        }
        console.log(opt)
        const result = await this.app.mysql.select('users', opt);
        let us = await this.app.mysql.select('users');
        return {
            data: result,
            total: us.length
        };
    }
    //   async getList(name, creat_time, update_time, password, age, limit, curent) {
    //     const results = await this.app.mysql.select('users', { // 搜索 post 表
    //       where: { name: name ? name : '', author: [ 'author1', 'author2' ] }, // WHERE 条件
    //       columns: [ 'author', 'title' ], // 要查询的表字段
    //       orders: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]], // 排序方式
    //       limit, // 返回数据量
    //       offset: curent, // 数据偏移量
    //     });
    //     return { result };
    //   }
    async create(user) {
        const result = await this.app.mysql.insert('users', user);
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
    async update(user) {
        const result = await this.app.mysql.update("users", user);
        const updateSuccess = result.affectedRows === 1;
        return updateSuccess;
    }
    async delete(id) {
        const result = await this.app.mysql.delete('users', {
            id: id,
        });
        const deleteSuccess = result.affectedRows === 1;
        return deleteSuccess;
    }
    async account(name, pwd) {
        const result = await this.app.mysql.select('users', { // 搜索 post 表
            where: { name: name, password: pwd }, // WHERE 条件
        });
        return result;
    }
}

module.exports = UsersService;
