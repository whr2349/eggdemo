/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1592226873517_7920';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.security = {
        csrf: {
            enable: false,
            // ignoreJSON: true
        },
        // domainWhiteList: ['http://localhost:8080']
    };
    config.cors = {
        origin: '*', //匹配规则  域名+端口  *则为全匹配
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };
    return {
        ...config,
        ...userConfig,
    };
};
