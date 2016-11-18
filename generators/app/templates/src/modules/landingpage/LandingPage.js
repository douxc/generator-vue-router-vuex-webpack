/**
 * 中间页
 * Created by xinchao.dou on 2016/9/5.
 */
import './landingpage.scss';
import { mapGetters } from 'vuex';
module.exports = {
  computed: {
    ...mapGetters(['userInfo'])
  },
  render: function(h) {
    return (<div>
      <span class="landingpage">132</span>
      <h4>{this.title}</h4>
    </div>);
  },
  data() {
    return {
      title: 'this is landing page'
    };
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('login', { id: '1234567' }).then(() => {
        console.log('landingpage获取登录信息', this.userInfo);
      });// 发起请求，获取数据
    }, 1000);
  }
};
