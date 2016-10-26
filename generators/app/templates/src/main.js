require('bootstrap/dist/css/bootstrap.css');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import RouterConfig from './routers'; // routerconfig
import CustomComponents from 'components/index';
import RigisterFilter from './filters/index';
import RigisterDirectives from './directives/index';
import Store from './store';
// 使用router
Vue.use(VueRouter);
// 使用resource
Vue.use(VueResource);
// 使用Vuex
Vue.use(Vuex);
//使用自定义插件及组件
Vue.use(CustomComponents);
// 注册过滤器
RigisterFilter(Vue);
// 注册自定义指令
RigisterDirectives(Vue);
let store = Store(Vuex);
// 配置Router
const Router = new VueRouter();
RouterConfig(Router);
Router.start({store}, '#app');
