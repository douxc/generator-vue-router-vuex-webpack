/**
 * Created by douxc on 2016/10/23.
 */
import * as types from '../types';
/**
 * 登录
 * @param commit
 * @param user
 */
export const login = ({commit}, user)=> {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      user.isLogin = true;
      commit(types.LOGIN, user);
      resolve();
    }, 3000);
  });
};
