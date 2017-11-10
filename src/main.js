import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
// import 'iview/src/styles/index.less'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
import 'normalize.css/normalize.css';// normalize.css 样式格式化

Vue.use(iView);
NProgress.configure({});
Vue.config.productionTip = false;


const whiteList = ['/login'];
  router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (store.getters.userInfo) {
    if (to.path === '/login') {
      next();
    }else{
      store.dispatch('GenerateRoutes', "").then(() => {
        next();
      })
    }
  }else{
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login');  // 否则全部重定向到登录页
      NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
