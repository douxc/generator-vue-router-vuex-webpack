/**
 * vue router的配置
 * Created by xinchao.dou on 2016/9/2.
 */
export default function routerConfig(Router) {
  Router.map({
    '/': {
      component: (resolve) => {
        require(['./modules/landingpage/Landingpage'], resolve);
      }
    }
  });
  Router.redirect({
    '*': '/'
  });
}
