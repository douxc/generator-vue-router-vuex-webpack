/**
 * Created by xinchao.dou on 2016/9/5.
 */
const style = require('./navbar.scss'),
  html = require('./navbar.html');
module.exports = {
  template: '<style>' + style + '</style>' + html,
  props: ['title', 'showMenu']
};
