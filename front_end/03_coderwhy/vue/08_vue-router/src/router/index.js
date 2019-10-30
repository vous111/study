// 配置路由相关的信息
import VueRouter from "vue-router";
import Vue from "vue";

import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建Vuerouter对象
const routes = [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/about',
    component: About
  },
];
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
	routes
});

// 3.将router对象传入到Vue实例
export default router;
