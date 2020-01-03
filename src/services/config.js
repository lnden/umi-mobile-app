const config = {
    dev: {
        apiDomain: 'localhost:8000',
        apiPath: '/api',
    },
    reporter: {
        apiDomain: 'localhost:8000',
        apiPath: '/api',
    },
    prod: {
        apiDomain: 'localhost:8000',
        apiPath: '/api',
    },
};

const common = {
    localCacheAlias: {
        token: '@@token',
    },
    localCacheTime: 1000 * 3600 * 24 * 30,
};
export default Object.freeze({ ...config, ...common });
