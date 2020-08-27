import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/login/index', component: '@/pages/LoginPage/index' },
        { path: '/register/index', component: '@/pages/RegisterPage/index' },
        {
            path: '/',
            component: '@/layouts/HomeLayout/index',
            routes: [
                { path: '/', component: '@/pages/SettingPage/index' },
                { path: '/FriendPage', component: '@/pages/FriendPage/index' },
            ],
        },
    ],
    dva: {
        immer: true,
        hmr: false,
    },
});
