/**
 * Mock 数据
 * Created by xinchao.dou on 2017/4/18.
 */
import Mock from 'mockjs';
// 设置数据返回时间
Mock.setup({
  timeout: '200-1000'
});

Mock.mock('/data', 'get', option => {
  return {
    result: 0,
    data: {
      first: '@FIRST',
      middle: '@FIRST',
      full: '@first @middle'
    }
  };
});
