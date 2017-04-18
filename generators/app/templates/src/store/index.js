/**
 * 1、初始化vuex
 * 2、开启热替换
 * Created by douxc on 2016/10/23.
 */
import modules from './modules';
export default function (Vuex) {
  const store = new Vuex.Store(modules);
  // 启用热替换
  if (module.hot) {
    module.hot.accept(['./modules'], () => {
      store.hotUpdate(modules);
    });
  }
  return store;
}
