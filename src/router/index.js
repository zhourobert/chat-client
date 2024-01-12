import {createRouter, createWebHistory } from 'vue-router'




import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";

const router = createRouter({
    // history: createWebHashHistory(),  // hash 模式
    history: createWebHistory(),  // history 模式
    routes: [
        {
            path: '/',
            name: 'home',
            component: LoginPage,
            meta: {
                title: '登陆页',
            },
        },
        {
            path: '/register',
            name: 'list',
            component: RegisterPage,
            meta: {
                title: '注册页',
            },
        },
        {
            path: '/*',
            redirect: '/',
        },
    ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
    // console.log(to, from)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})

router.afterEach((to, from)=>{
    console.log(to, from)
    // console.log('afterEach')
})

export default router