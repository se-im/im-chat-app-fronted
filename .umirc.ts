import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/layouts/HomeLayout/index',
            routes: [{ path: '/', component: '@/pages/ChatCvsPage/index' }],
        },
        { path: '/LoginPage/index', component: '@/pages/LoginPage/index' },
        {
            path: '/RegisterPage/index',
            component: '@/pages/RegisterPage/index',
        },
    ],
});
