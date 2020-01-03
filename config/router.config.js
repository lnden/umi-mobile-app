export default [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            {
                path: '/user',
                component: '../layouts/UserLayout',
                routes: [
                    {
                        path: '/user/login',
                        component: './User/Login',
                        title: '用户登录',
                    },
                    {
                        path: '/user/register',
                        component: './User/Register',
                        title: '用户注册',
                    },
                ],
            },
            {
                path: '/',
                component: './Home',
                title: '首页',
            },
            {
                path: '/discover',
                component: './Discover',
                title: '发现',
            },

            {
                path: '/message',
                component: './Message',
                title: '消息',
            },
            {
                path: '/mine',
                component: './Mine',
                title: '我的',
            },
            { component: '404', title: '页面未找到' },
        ],
    },
];