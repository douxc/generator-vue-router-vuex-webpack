/**
 * Created by xinchao.dou on 2016/10/25.
 */
/**
 * 取地址栏参数
 * @param name
 * @returns {string}
 */
export function getUrlParams(name) {
  var reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)', 'i');
  var param = window.location.href.substring(1).match(reg);
  if (param !== null) {
    return param[2];
  } else {
    return undefined;
  }
}
/**
 * 动态加载script文件
 * @param src
 * @param onload
 */
export function javascriptLoader(src, onload) {
  let _script = document.createElement('script');
  _script.setAttribute('src', src);
  _script.setAttribute('type', 'text/javascript');
  _script.onload = onload;
  document.head.appendChild(_script);
}
/**
 * 判断是否是微信打开的页面
 * @returns {boolean}
 */
export function isInWeChat() {
  return /MicroMessenger/i.test(navigator.userAgent.toLowerCase());
}
