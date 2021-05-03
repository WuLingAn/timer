import Vue from "vue";
import VueRouter from "vue-router";

import navTree from '@/navTree'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    ...navTree,
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
]

let router = new VueRouter({
    mode: 'history',
    routes}
)
export default router;
