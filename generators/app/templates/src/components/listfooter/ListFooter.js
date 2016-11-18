/**
 * 列表底部加载更多和无数据显示
 * Created by xinchao.dou on 2016/9/12.
 */
const style = require('./listfooter.scss');
const html = require('./listfooter.html');
let totalHeight = 0;
let screenHeight = 0;
let offset = 10;
module.exports = {
  template: '<style>' + style + '</style>' + html,
  props: ['hasmore', 'loadmore'],
  created() {
    screenHeight = document.body.offsetHeight;
    window.onscroll = () => {
      totalHeight = document.body.scrollHeight;
      if (window.scrollY + screenHeight + offset >= totalHeight) {
        // alert('滑倒底了');
        if (this.hasmore) {
          this.loadmore();
        }
      }
    };
  },
  destoryed() {
    window.onscroll = () => {};
  }
};
