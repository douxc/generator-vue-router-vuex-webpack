/**
 * 自动给vue的请求添加loading框
 * Created by xinchao.dou on 2016/10/27.
 */
const vueAlertEle = document.createElement('div');
const vueContent = document.createElement('div');
class VueAlert {
  constructor () {
    this.duration = 3000;
    vueAlertEle.id = 'VueAlert';
    vueContent.classList.add('alert');
    vueContent.classList.add('container');
    vueAlertEle.appendChild(vueContent);
    document.body.appendChild(vueAlertEle);
  }

  show (msg, type) {
    if (!document.getElementById('VueAlert')) {
      document.body.appendChild(vueAlertEle);
    }
    // 已经存在
    vueContent.innerText = msg;
    type = `alert-${type || 'warning'}`;
    vueContent.classList.add(type);
    vueAlertEle.classList.add('show');
    setTimeout(function () {
      vueContent.classList.remove(type); // 移除样式，避免样式叠加导致出错
      vueAlertEle.classList.remove('show');
    }, this.duration);
  }
}
const _vueAlert = new VueAlert();
if (typeof window !== 'undefined') {
  window.VueAlert = _vueAlert;
}
export default _vueAlert;
