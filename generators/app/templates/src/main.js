require('bootstrap/dist/css/bootstrap.css');
require('vueLoadingBar/src/loadingbar.css');
require('./styles/variables.scss');
require('jquery');
require('bootstrap/dist/js/bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import RouterConfig from './routers'; // routerconfig
import CustomComponents from 'components/index';
import RegisterFilter from './filters/index';
import RegisterDirectives from './directives/index';
import Store from './store';
import LoadingBar from 'vueLoadingBar';
// 使用router
Vue.use(VueRouter);
// 使用resource
Vue.use(VueResource);
// 使用Vuex
Vue.use(Vuex);
// 使用自定义插件及组件
Vue.use(CustomComponents);
// 自动添加loading bar
Vue.use(LoadingBar);
// 注册过滤器
RegisterFilter(Vue);
// 注册自定义指令
RegisterDirectives(Vue);
let store = Store(Vuex);
// 配置Router
const router = new VueRouter(RouterConfig);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h('router-view')
});
