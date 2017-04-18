/**
 * 中间页，可以做判断是跳转详情还是登录
 * Created by xinchao.dou on 2016/9/5.
 */
import './landingpage.scss';
import { mapGetters, mapActions } from 'vuex';
module.exports = {
  render: function (h) {
    return (
      <section class="container">
        <div class="landing-container text-center">
          <i class="landing-icon glyphicon glyphicon-refresh"/>&nbsp;{this.text}
        </div>
      </section>);
  },
  computed: {
    ...mapGetters({
      text: 'loading'
    })
  },
  methods: {
    ...mapActions({
      changeLoadingText: 'setLoadingText'
    })
  },
  created() {
    const _this = this;
    console.log(_this);
    // 页面加载之后，开始模拟请求更改文字
    _this.changeLoadingText().then(() => {
      _this.VueAlert.show('text changed');
    });
  }
};
