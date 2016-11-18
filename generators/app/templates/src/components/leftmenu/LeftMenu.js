/**
 * 左边可折叠菜单
 * Created by xinchao.dou on 2016/11/1.
 */
require('./leftmenu.scss');
module.exports = {
  render: function(h) {
    let menus = this.menus.map(menu => {
      let _tmpChildren = null;
      if (menu.children.length > 0) {
        _tmpChildren = menu.children.map(child => {
          return <router-link to={child.path} class="list-group-item" active-class="active">
            {child.name}
          </router-link>;
        });
      }
      return <router-link tag="div" class="list-group" to={menu.path}>
        <a class="list-group-item">{menu.name} <span class="pull-right glyphicon glyphicon-chevron-right"/></a>
        <div class="child-menus">
          {_tmpChildren}
        </div>
      </router-link>;
    });
    return (<div class="leftmenu-container">
      {menus}
    </div>);
  },
  data() {
    return {
      menus: [
        {
          name: 'DashBoard',
          path: '/dashboard/',
          children: [{ name: 'user', path: './user' }, { name: 'user', path: './user' }]
        },
        { name: 'Customer', path: '/customer/', children: [{ name: '列表', path: './list' }] }
      ]
    };
  }
};
