import util from '@/utils/util.js';

const user = {
  state: {
   userInfo:util.getUser(),
  },

  mutations: {
    setUserInfo(state, userInfo){
      state.userInfo = userInfo;
    },
    set_logOut(state){
      state.userInfo = null;
      util.removeUser();
    }
  },

  actions: {
    LogOut({commit}){
      commit('set_logOut');
    }
  }
}

export default user
