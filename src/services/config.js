const config = {
    dev: {
        apiDomain: 'http://localhost:8000',
        apiPath: '/api',
    },
    reporter: {
        apiDomain: 'http://localhost:8000',
        apiPath: '/api',
    },
    prod: {
        apiDomain: 'http://localhost:8000',
        apiPath: '/api',
    },
};

let common = {
    localCacheAlias: {
        token: '@@token',
    },
    localCacheTime: 1000 * 3600 * 24 * 30,
};

let env = '';

if (process.env.NODE_ENV === 'production') {
    env = 'prod';
    common = {
        ...common,
        wechatServer: 'https://xxx.wechat.xxxx.cn',
    };
} else if (process.env.NODE_ENV === 'reporter') {
    env = 'reporter';
} else {
    env = 'dev';
}

if (process.env.REPORTER === 'reporter') {
    env = 'reporter';
    common = {
        ...common,
        wechatServer: 'https://xxx.wechat.xxxx.cn',
    };
}

export default Object.freeze({ ...config[env], ...common });
