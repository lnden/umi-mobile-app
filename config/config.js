import path from 'path';
import pageRoutes from './router.config';

export default {
    history: 'hash',
    treeShaking: true,
    routes: pageRoutes,
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    immer: true,
                },
                dynamicImport: {
                    loadingComponent: './components/PageLoading/index',
                    webpackChunkName: false,
                },
                title: {
                    defaultTitle: 'umi-mobile-app',
                },
                dll: false,
                hd: true,
                routes: [],
            },
        ],
    ],
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    cssnano: {
        mergeRules: false,
    },
    hash: true,
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
};
