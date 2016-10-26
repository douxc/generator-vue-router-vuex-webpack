/**
 * 中间页
 * Created by xinchao.dou on 2016/9/5.
 */
const style = require('./landingpage.scss'),
  html = require('./landingpage.html');
module.exports = {
  template: '<style>' + style + '</style>' + html,
  data() {
    return {
      title: 'this is landing page'
    };
  },
  ready() {
    this.$store.dispatch('login', {id: "1234567"}).then(()=> {
      console.log('landingpage获取登录信息', this.$store.state.login.userInfo);
    });//发起请求，获取数据
  }
};
