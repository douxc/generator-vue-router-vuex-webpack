/**
 * 自定义组件
 * Created by xinchao.dou on 2016/9/5.
 */
import VueAlert from './alert/Alert'; // 错误提示
function plugin (Vue) {
  /**
   * 添加通用属性和方法
   */
  Object.defineProperties(Vue.prototype, {
    VueAlert: {
      get() {
        return VueAlert;
      }
    }
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
export default plugin;
