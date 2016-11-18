/**
 * Created by xinchao.dou on 2016/9/5.
 */
module.exports = {
  render: function(h) {
    return (
      <nav class="navbar navbar-inverse" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">Brand</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a>Link</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a>LogOut</a>
            </li>
          </ul>
        </div>
      </nav>);
  },
  props: ['title', 'showMenu']
};
