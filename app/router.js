'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/account', controller.accont.account);
  router.post('/user/list', controller.user.list);
  router.post('/user/update', controller.user.update);
  router.post('/user/delete', controller.user.delete);
};
