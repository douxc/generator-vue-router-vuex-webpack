/**
 * 底部弹出的购买窗口
 * Created by xinchao.dou on 2016/9/13.
 */
const style = require('./dialog.scss'),
  html = require('./dialog.html');
module.exports = {
  template: '<style>' + style + '</style>' + html,
  props: ['show', 'content'],
  ready(){
    // 初始化时判断是否要禁用body滚动
    this.show ? document.body.classList.add('disable-scroll-click') : document.body.classList.remove('disable-scroll-click');
  },
  watch: {
    'show': function showChange(val) {
      // 变化时判断是否要禁用body滚动
      val ? document.body.classList.add('disable-scroll-click') : document.body.classList.remove('disable-scroll-click');
    }
  }
};
