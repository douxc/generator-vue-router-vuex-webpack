import 'bootstrap/css/bootstrap.css';
import 'vueLoadingBar/src/loadingbar.css';
import './styles/common.scss';
require('bootstrap/js/bootstrap');
const $ = require('jquery');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import RouterConfig from './routers'; // routerconfig
import CustomComponents from './components';
import RegisterFilter from './filters';
import RegisterDirectives from './directives';
import Store from './store';
import LoadingBar from 'vueLoadingBar';
// 使用router
Vue.use(VueRouter);
// 使用resource
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
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
  name: 'app',
  el: '#app',
  router,
  store,
  render: h => h('router-view'),
  mounted() {
    const _this = this;
    // 从本地读取一次数据
    const state = window.sessionStorage.getItem('state');
    if (state && state.length > 0) {
      _this.$store.replaceState(JSON.parse(state));
    }
    window.$ = $;
    // 监听刷新事件，保存一下数据
    $(window).on('beforeunload', () => {
      window.sessionStorage.setItem('state', JSON.stringify(_this.$store.state));
    });
  }
});
