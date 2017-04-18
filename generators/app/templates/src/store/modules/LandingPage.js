/**
 * LandingPage modules
 */
import Vue from 'vue';
const SET_LOADING_TEXT = 'SET_LOADING_TEXT';
export default {
  // 数据
  state: {
    loading: 'loading'
  },
  // 获取数据
  getters: {
    /**
     * add  ...
     * @param state
     * @returns {string}
     */
    loading(state) {
      return state.loading + '...';
    }
  },
  // 动作
  actions: {
    /**
     * 模拟异步操作设置加载中提示文字为“加载中”
     * @param commit
     * @returns {Promise}
     */
    setLoadingText({commit}) {
      return new Promise((resolve, reject) => {
        Vue.http.get('/data').then(res => {
          return res.json();
        }).then(data => {
          console.log(data);
          commit(SET_LOADING_TEXT, '加载中');
          resolve();
        });
      });
    }
  },
  // 修改state数据
  mutations: {
    [SET_LOADING_TEXT](state, text) {
      state.loading = text;
    }
  }
};
