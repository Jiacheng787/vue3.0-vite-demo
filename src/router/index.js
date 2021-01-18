import { createRouter, createWebHistory } from 'vue-router'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('/@/views/Home.vue')
        },
        {
            path: '/contact',
            component: () => import('/@/views/Contact.vue'),
            children: [
                {
                    path: '',
                    redirect: '/contact/doc'
                },
                {
                    path: 'doc',
                    component: () => import('/@/views/Articles.vue')
                }
            ]
        }
    ]
})

router.beforeEach(() => {
    console.log('路由拦截')
})

export default router