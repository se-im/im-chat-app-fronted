import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/', component: '@/pages/chat/index' },
        {path: '/login/index', component: '@/pages/login/index'},
        {path: '/register/index', component: '@/pages/register/index'}
    ],
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: {
                immer: true,
            },
        }],
    ],
});
