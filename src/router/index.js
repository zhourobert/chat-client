import {createRouter, createWebHistory } from 'vue-router'




import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ChatPage from "@/views/ChatPage.vue";
import FindPassword from "@/views/FindPassword.vue";
import ChatList from "@/components/ChatList.vue";
import FriendAdd from "@/components/FriendAdd.vue";
import FriendRequest from "@/components/FriendRequest.vue";

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
            name: 'register',
            component: RegisterPage,
            meta: {
                title: '注册页',
            },
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatPage,
            meta: {
                title: '聊天界面',
            },
            children: [
                {
                    path: '/chatList',
                    name: 'chatList',
                    component: ChatList,
                },
                {
                    path: '/friendAdd',
                    name: 'friendAdd',
                    component: FriendAdd,
                },
                {
                    path: '/friendRequest',
                    name: 'friendRequest',
                    component: FriendRequest,
                },
            ]

        },
        {
            path: '/findPassword',
            name: 'findPassword',
            component: FindPassword,
            meta: {
                title: '密码找回',
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