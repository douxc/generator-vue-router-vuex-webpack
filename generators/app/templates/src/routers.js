/**
 * vue router的配置
 * Created by xinchao.dou on 2016/9/2.
 */
export default {
  routes: [{
    // 跳转中间页
    path: '/',
    component: resolve => require(['./modules/landingpage/LandingPage'], resolve)
  }, {
    path: '*',
    redirect: '/'
  }]
};
