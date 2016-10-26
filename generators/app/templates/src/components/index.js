/**
 * 自定义组件
 * Created by xinchao.dou on 2016/9/5.
 */
// components
import NavBar from './navbar/NavBar'; // 导航条
import ListFooter from './listfooter/ListFooter'; // 列表底部加载更多和无数据
import Dialog from './dialog/Dialog'; // 弹出层
import api from './plugins/api';
import * as utils from './plugins/utils';
//获取配置，并将配置文件存入config模块
let config = null;
require.ensure([], require => {
  config = require('src/config');
}, 'config');
function plugin(Vue) {
  //注册组件
  Vue.component('nav-bar', NavBar);
  Vue.component('list-footer', ListFooter);
  Vue.component('dialog', Dialog);
  /**
   * 添加通用属性和方法
   */
  Object.defineProperties(Vue.prototype, {
    api: {
      get(){
        return api;
      }
    },
    utils: {
      get(){
        return utils;
      }
    },
    $config: {
      get(){
        return config;
      }
    }
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
export default plugin;
